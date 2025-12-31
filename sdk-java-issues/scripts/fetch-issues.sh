#!/bin/bash
# Fetch all open issues from a GitHub repository
# Usage: ./fetch-issues.sh <owner/repo>
# Example: ./fetch-issues.sh temporalio/sdk-java

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <owner/repo>"
    echo "Example: $0 temporalio/sdk-java"
    exit 1
fi

REPO="$1"
REPO_DIR_NAME=$(echo "$REPO" | tr '/' '-')
BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPO_DIR="$BASE_DIR/repos/$REPO_DIR_NAME"
OUTPUT_DIR="$REPO_DIR/issues"

mkdir -p "$OUTPUT_DIR"

echo "Fetching issues from $REPO..."
echo "Storing in $REPO_DIR"

# Get all open issue numbers
echo "Fetching issue list..."
issue_nums=$(gh issue list --repo "$REPO" --state open --limit 1000 --json number --jq '.[].number')
total=$(echo "$issue_nums" | wc -l | tr -d ' ')

echo "Found $total open issues"

count=0
for num in $issue_nums; do
    count=$((count + 1))
    gh issue view "$num" --repo "$REPO" --json \
        number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups \
        > "$OUTPUT_DIR/issue-${num}.json" 2>/dev/null
    echo "[$count/$total] Downloaded #$num"
    sleep 0.2
done

# Create/update sync metadata
node -e "
const fs = require('fs');
const metadata = {
    repository: '$REPO',
    last_sync: new Date().toISOString(),
    issue_count: $count,
    sync_type: 'full'
};
fs.writeFileSync('$REPO_DIR/sync-metadata.json', JSON.stringify(metadata, null, 2));
"

echo ""
echo "Done! Downloaded $count issues from $REPO"
echo "Run: node scripts/build-index.js $REPO_DIR_NAME"
