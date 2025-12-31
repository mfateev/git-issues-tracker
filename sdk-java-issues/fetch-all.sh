#!/bin/bash
set -e

REPO="temporalio/sdk-java"
OUTPUT_DIR="/Users/maxim/temporal/issues/sdk-java-issues/issues"

mkdir -p "$OUTPUT_DIR"

echo "Fetching issue list..."
issue_nums=$(gh issue list --repo "$REPO" --state open --limit 500 --json number --jq '.[].number')
total=$(echo "$issue_nums" | wc -l | tr -d ' ')
count=0

for num in $issue_nums; do
  count=$((count + 1))
  gh issue view "$num" --repo "$REPO" --json number,title,body,state,author,labels,assignees,milestone,comments,createdAt,updatedAt,closedAt,url,reactionGroups > "$OUTPUT_DIR/issue-${num}.json" 2>/dev/null
  echo "[$count/$total] Downloaded #$num"
  sleep 0.2
done

echo "Done! Downloaded $count issues."
