#!/bin/bash
# Incremental update script for GitHub issues
# Only downloads issues that have been updated since the last sync

set -e

REPO="temporalio/sdk-java"
BASE_DIR="/Users/maxim/temporal/issues/sdk-java-issues"
OUTPUT_DIR="$BASE_DIR/issues"
METADATA_FILE="$BASE_DIR/sync-metadata.json"

# Read last sync time
if [ ! -f "$METADATA_FILE" ]; then
    echo "No sync metadata found. Please run fetch-all.sh first."
    exit 1
fi

LAST_SYNC=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$METADATA_FILE')).last_sync)")
echo "Last sync: $LAST_SYNC"

# Get issues updated since last sync
echo "Fetching issues updated since $LAST_SYNC..."

# GitHub search query for issues updated after last sync
UPDATED_ISSUES=$(gh issue list --repo "$REPO" --state all --limit 500 --json number,updatedAt --jq ".[] | select(.updatedAt > \"$LAST_SYNC\") | .number")

if [ -z "$UPDATED_ISSUES" ]; then
    echo "No issues have been updated since last sync."
    # Update metadata with new sync time
    node -e "
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('$METADATA_FILE'));
    data.last_sync = new Date().toISOString();
    data.sync_type = 'incremental';
    data.updated_count = 0;
    fs.writeFileSync('$METADATA_FILE', JSON.stringify(data, null, 2));
    "
    exit 0
fi

# Count and download updated issues
total=$(echo "$UPDATED_ISSUES" | wc -l | tr -d ' ')
count=0
new_issues=0
updated_issues=0

echo "Found $total issues to update..."

for num in $UPDATED_ISSUES; do
    count=$((count + 1))
    output_file="$OUTPUT_DIR/issue-${num}.json"

    if [ -f "$output_file" ]; then
        updated_issues=$((updated_issues + 1))
        status="updated"
    else
        new_issues=$((new_issues + 1))
        status="new"
    fi

    gh issue view "$num" --repo "$REPO" --json number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups > "$output_file" 2>/dev/null
    echo "[$count/$total] Downloaded #$num ($status)"
    sleep 0.2
done

# Handle closed issues - mark them but keep the data
echo "Checking for closed issues..."
CLOSED_ISSUES=$(gh issue list --repo "$REPO" --state closed --limit 100 --json number,updatedAt,closedAt --jq ".[] | select(.updatedAt > \"$LAST_SYNC\") | .number")

for num in $CLOSED_ISSUES; do
    output_file="$OUTPUT_DIR/issue-${num}.json"
    if [ -f "$output_file" ]; then
        # Re-download to get updated state
        gh issue view "$num" --repo "$REPO" --json number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups > "$output_file" 2>/dev/null
        echo "Updated closed issue #$num"
        sleep 0.2
    fi
done

# Update metadata
CURRENT_COUNT=$(ls -1 "$OUTPUT_DIR" | wc -l | tr -d ' ')
node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('$METADATA_FILE'));
data.last_sync = new Date().toISOString();
data.issue_count = $CURRENT_COUNT;
data.sync_type = 'incremental';
data.last_update_stats = {
    new_issues: $new_issues,
    updated_issues: $updated_issues,
    total_processed: $count
};
fs.writeFileSync('$METADATA_FILE', JSON.stringify(data, null, 2));
"

echo ""
echo "=== Sync Complete ==="
echo "New issues: $new_issues"
echo "Updated issues: $updated_issues"
echo "Total in database: $CURRENT_COUNT"
