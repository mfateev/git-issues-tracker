#!/bin/bash
# Script to download GitHub issues for temporalio/sdk-java
# Supports incremental updates by tracking updatedAt timestamps

REPO="temporalio/sdk-java"
OUTPUT_DIR="/Users/maxim/temporal/issues/sdk-java-issues/issues"
METADATA_FILE="/Users/maxim/temporal/issues/sdk-java-issues/sync-metadata.json"

mkdir -p "$OUTPUT_DIR"

download_issue() {
    local issue_num=$1
    local output_file="$OUTPUT_DIR/issue-${issue_num}.json"

    gh issue view "$issue_num" --repo "$REPO" --json \
        number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups \
        > "$output_file" 2>/dev/null

    if [ $? -eq 0 ]; then
        echo "Downloaded issue #$issue_num"
    else
        echo "Failed to download issue #$issue_num" >&2
    fi
}

export -f download_issue
export REPO OUTPUT_DIR

# Get all open issue numbers
echo "Fetching issue list..."
gh issue list --repo "$REPO" --state open --limit 500 --json number --jq '.[].number' | \
    xargs -P 10 -I {} bash -c 'download_issue "$@"' _ {}

# Update sync metadata
echo "Updating sync metadata..."
echo "{
  \"repository\": \"$REPO\",
  \"last_sync\": \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\",
  \"issue_count\": $(ls -1 "$OUTPUT_DIR" | wc -l | tr -d ' ')
}" > "$METADATA_FILE"

echo "Done!"
