#!/bin/bash
# List all open issues from a repository directory
# Usage: ./scripts/list-open-issues.sh <repo-dir>
# Example: ./scripts/list-open-issues.sh temporalio-sdk-ruby
# Output format: number|title|labels|upvotes|comments

REPO_DIR="$1"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BASE_DIR="$(dirname "$SCRIPT_DIR")"

if [ -z "$REPO_DIR" ]; then
    echo "Usage: $0 <repo-dir>"
    echo "Example: $0 temporalio-sdk-ruby"
    exit 1
fi

ISSUES_DIR="$BASE_DIR/repos/$REPO_DIR/issues"

if [ ! -d "$ISSUES_DIR" ]; then
    echo "Error: Directory $ISSUES_DIR not found"
    exit 1
fi

# Output: number|title (truncated)|labels|upvotes|comments
# Note: state is uppercase "OPEN" in JSON
for f in "$ISSUES_DIR"/*.json; do
    jq -r 'select(.state == "OPEN") | "\(.number)|\(.title | .[0:80])|\(.labels | map(.name) | join(","))|\(.reactions.THUMBS_UP // 0)|\(.comments // 0)"' "$f" 2>/dev/null
done | sort -t'|' -k1 -rn
