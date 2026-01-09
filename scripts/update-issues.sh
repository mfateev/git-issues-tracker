#!/bin/bash
# Incrementally update issues for a repository
# - Downloads issues updated since last sync (both open and closed)
# - Downloads missing issues that exist on GitHub but not locally
# Usage: ./update-issues.sh <owner/repo> or ./update-issues.sh <repo-dir-name>
# Example: ./update-issues.sh temporalio/sdk-java

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <owner/repo> or <repo-dir-name>"
    echo "Example: $0 temporalio/sdk-java"
    echo "Example: $0 temporalio-sdk-java"
    exit 1
fi

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Handle both owner/repo and repo-dir-name formats
if [[ "$1" == *"/"* ]]; then
    REPO="$1"
    REPO_DIR_NAME=$(echo "$REPO" | tr '/' '-')
else
    REPO_DIR_NAME="$1"
    # Try to get repo name from metadata
    METADATA_FILE="$BASE_DIR/repos/$REPO_DIR_NAME/sync-metadata.json"
    if [ -f "$METADATA_FILE" ]; then
        REPO=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$METADATA_FILE')).repository)")
    else
        echo "Error: Cannot find metadata for $REPO_DIR_NAME"
        echo "Run fetch-issues.sh first to do initial download"
        exit 1
    fi
fi

REPO_DIR="$BASE_DIR/repos/$REPO_DIR_NAME"
OUTPUT_DIR="$REPO_DIR/issues"
METADATA_FILE="$REPO_DIR/sync-metadata.json"

if [ ! -f "$METADATA_FILE" ]; then
    echo "No sync metadata found for $REPO_DIR_NAME"
    echo "Run fetch-issues.sh first to do initial download"
    exit 1
fi

LAST_SYNC=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$METADATA_FILE')).last_sync)")
echo "Repository: $REPO"
echo "Last sync: $LAST_SYNC"
echo ""

# Get ALL issues from GitHub (both open and closed) - single API call
echo "Fetching issue list from GitHub..."
REMOTE_DATA=$(gh issue list --repo "$REPO" --state all --limit 5000 --json number,updatedAt)

# Extract all remote issue numbers
ALL_REMOTE_ISSUES=$(echo "$REMOTE_DATA" | jq -r '.[].number' | sort -n)

# Get issues we already have locally
LOCAL_ISSUES=$(ls "$OUTPUT_DIR" 2>/dev/null | grep -oE '[0-9]+' | sort -n)

# Find issues that exist on GitHub but not locally (missing issues)
MISSING_ISSUES=$(comm -23 <(echo "$ALL_REMOTE_ISSUES") <(echo "$LOCAL_ISSUES"))

# Get issues updated since last sync (filter locally, no extra API call)
echo "Checking for updates since $LAST_SYNC..."
UPDATED_ISSUES=$(echo "$REMOTE_DATA" | jq -r ".[] | select(.updatedAt > \"$LAST_SYNC\") | .number")

# Combine updated and missing issues, removing duplicates
if [ -n "$UPDATED_ISSUES" ] && [ -n "$MISSING_ISSUES" ]; then
    ALL_TO_FETCH=$(echo -e "$UPDATED_ISSUES\n$MISSING_ISSUES" | sort -n | uniq)
elif [ -n "$UPDATED_ISSUES" ]; then
    ALL_TO_FETCH="$UPDATED_ISSUES"
elif [ -n "$MISSING_ISSUES" ]; then
    ALL_TO_FETCH="$MISSING_ISSUES"
else
    ALL_TO_FETCH=""
fi

# Count missing issues for reporting
missing_count=0
if [ -n "$MISSING_ISSUES" ]; then
    missing_count=$(echo "$MISSING_ISSUES" | wc -l | tr -d ' ')
fi

# Count updated issues for reporting
updated_count=0
if [ -n "$UPDATED_ISSUES" ]; then
    updated_count=$(echo "$UPDATED_ISSUES" | wc -l | tr -d ' ')
fi

if [ -z "$ALL_TO_FETCH" ]; then
    echo "No issues have been updated since last sync."
    echo "No missing issues to download."
    # Update metadata
    node -e "
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('$METADATA_FILE'));
    data.last_sync = new Date().toISOString();
    data.sync_type = 'incremental';
    data.last_update_stats = { updated: 0, new: 0, missing_downloaded: 0 };
    fs.writeFileSync('$METADATA_FILE', JSON.stringify(data, null, 2));
    "
    exit 0
fi

total=$(echo "$ALL_TO_FETCH" | wc -l | tr -d ' ')
echo "Found $updated_count updated issues and $missing_count missing issues"
echo "Total issues to download: $total"

# Check rate limit - ensure we have at least 500 requests buffer
RATE_LIMIT_BUFFER=500
required_requests=$((total + 1))  # +1 for the issue list request we already made
rate_remaining=$(gh api rate_limit --jq '.resources.core.remaining')
rate_limit=$(gh api rate_limit --jq '.resources.core.limit')
rate_reset=$(gh api rate_limit --jq '.resources.core.reset')

min_required=$((required_requests + RATE_LIMIT_BUFFER))

echo "Rate limit: $rate_remaining/$rate_limit remaining"

if [ "$rate_remaining" -lt "$min_required" ]; then
    reset_time=$(date -r "$rate_reset" '+%Y-%m-%d %H:%M:%S' 2>/dev/null || date -d "@$rate_reset" '+%Y-%m-%d %H:%M:%S' 2>/dev/null || echo "epoch: $rate_reset")
    echo "ERROR: Insufficient API rate limit"
    echo "  Need: $required_requests requests + $RATE_LIMIT_BUFFER buffer = $min_required"
    echo "  Have: $rate_remaining"
    echo "  Resets at: $reset_time"
    exit 1
fi

echo "Rate limit check passed (need $min_required, have $rate_remaining)"
echo ""

count=0
new_issues=0
updated_issues=0
missing_downloaded=0

for num in $ALL_TO_FETCH; do
    count=$((count + 1))
    output_file="$OUTPUT_DIR/issue-${num}.json"

    # Determine if this is a missing issue, updated issue, or new issue
    if echo "$MISSING_ISSUES" | grep -q "^${num}$"; then
        missing_downloaded=$((missing_downloaded + 1))
        status="missing"
    elif [ -f "$output_file" ]; then
        updated_issues=$((updated_issues + 1))
        status="updated"
    else
        new_issues=$((new_issues + 1))
        status="new"
    fi

    gh issue view "$num" --repo "$REPO" --json \
        number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups \
        > "$output_file" 2>/dev/null
    echo "[$count/$total] Downloaded #$num ($status)"
    sleep 0.2
done

# Update metadata
CURRENT_COUNT=$(ls -1 "$OUTPUT_DIR" 2>/dev/null | wc -l | tr -d ' ')
node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('$METADATA_FILE'));
data.last_sync = new Date().toISOString();
data.issue_count = $CURRENT_COUNT;
data.sync_type = 'incremental';
data.last_update_stats = {
    new_issues: $new_issues,
    updated_issues: $updated_issues,
    missing_downloaded: $missing_downloaded,
    total_processed: $count
};
fs.writeFileSync('$METADATA_FILE', JSON.stringify(data, null, 2));
"

echo ""
echo "=== Sync Complete ==="
echo "New issues: $new_issues"
echo "Updated issues: $updated_issues"
echo "Missing issues downloaded: $missing_downloaded"
echo "Total in database: $CURRENT_COUNT"
echo ""
echo "Run: node scripts/build-index.js $REPO_DIR_NAME"
