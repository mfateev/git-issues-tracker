#!/bin/bash
# Fetch issues from a GitHub repository
# Usage: ./fetch-issues.sh <owner/repo> [--state open|closed|all]
# Example: ./fetch-issues.sh temporalio/sdk-java
# Example: ./fetch-issues.sh temporalio/sdk-java --state closed
# Example: ./fetch-issues.sh temporalio/sdk-java --state all

set -e

# Parse arguments
REPO=""
STATE="open"  # Default to open for backward compatibility

while [[ $# -gt 0 ]]; do
    case $1 in
        --state)
            STATE="$2"
            shift 2
            ;;
        -*)
            echo "Unknown option: $1"
            exit 1
            ;;
        *)
            if [ -z "$REPO" ]; then
                REPO="$1"
            else
                echo "Unexpected argument: $1"
                exit 1
            fi
            shift
            ;;
    esac
done

if [ -z "$REPO" ]; then
    echo "Usage: $0 <owner/repo> [--state open|closed|all]"
    echo "Example: $0 temporalio/sdk-java"
    echo "Example: $0 temporalio/sdk-java --state closed"
    echo "Example: $0 temporalio/sdk-java --state all"
    echo ""
    echo "Options:"
    echo "  --state open|closed|all  Issue state to fetch (default: open)"
    exit 1
fi

# Validate state
if [[ ! "$STATE" =~ ^(open|closed|all)$ ]]; then
    echo "Error: Invalid state '$STATE'. Must be 'open', 'closed', or 'all'"
    exit 1
fi

REPO_DIR_NAME=$(echo "$REPO" | tr '/' '-')
BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPO_DIR="$BASE_DIR/repos/$REPO_DIR_NAME"
OUTPUT_DIR="$REPO_DIR/issues"

mkdir -p "$OUTPUT_DIR"

echo "Fetching issues from $REPO..."
echo "State: $STATE"
echo "Storing in $REPO_DIR"

# Get issue numbers based on state
echo "Fetching issue list..."
issue_nums=$(gh issue list --repo "$REPO" --state "$STATE" --limit 5000 --json number --jq '.[].number')
total=$(echo "$issue_nums" | wc -l | tr -d ' ')

# Handle empty result
if [ -z "$issue_nums" ]; then
    total=0
fi

echo "Found $total $STATE issues"

if [ "$total" -eq 0 ]; then
    echo "No issues to fetch."
    exit 0
fi

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

count=0
for num in $issue_nums; do
    count=$((count + 1))
    gh issue view "$num" --repo "$REPO" --json \
        number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups \
        > "$OUTPUT_DIR/issue-${num}.json" 2>/dev/null
    echo "[$count/$total] Downloaded #$num"
    sleep 0.2
done

# Count issues by state in the output directory
open_count=$(find "$OUTPUT_DIR" -name "*.json" -exec grep -l '"state":"OPEN"' {} \; 2>/dev/null | wc -l | tr -d ' ')
closed_count=$(find "$OUTPUT_DIR" -name "*.json" -exec grep -l '"state":"CLOSED"' {} \; 2>/dev/null | wc -l | tr -d ' ')
total_on_disk=$(ls -1 "$OUTPUT_DIR"/*.json 2>/dev/null | wc -l | tr -d ' ')

# Create/update sync metadata
node -e "
const fs = require('fs');
const metadataFile = '$REPO_DIR/sync-metadata.json';
let metadata = {};

// Load existing metadata if it exists
if (fs.existsSync(metadataFile)) {
    metadata = JSON.parse(fs.readFileSync(metadataFile));
}

// Update metadata
metadata.repository = '$REPO';
metadata.last_sync = new Date().toISOString();
metadata.issue_count = $total_on_disk;
metadata.sync_type = 'full';
metadata.last_fetch_state = '$STATE';
metadata.counts = {
    open: $open_count,
    closed: $closed_count,
    total: $total_on_disk
};

fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
"

echo ""
echo "Done! Downloaded $count $STATE issues from $REPO"
echo "Total issues on disk: $total_on_disk (open: $open_count, closed: $closed_count)"
echo "Run: node scripts/build-index.js $REPO_DIR_NAME"
