#!/bin/bash
# Fetch all closed issues from all tracked repositories
# Usage: ./fetch-closed.sh [repo-dir-name]
# Example: ./fetch-closed.sh                    # All repos
# Example: ./fetch-closed.sh temporalio-sdk-java # Single repo

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPOS_DIR="$BASE_DIR/repos"

# Get list of repos to process
if [ -n "$1" ]; then
    # Single repo specified
    REPOS="$1"
    if [ ! -d "$REPOS_DIR/$1" ]; then
        echo "Error: Repository directory not found: $REPOS_DIR/$1"
        exit 1
    fi
else
    # All repos
    REPOS=$(ls -1 "$REPOS_DIR" 2>/dev/null | head -20)
fi

if [ -z "$REPOS" ]; then
    echo "No repositories found in $REPOS_DIR"
    exit 1
fi

echo "=== Fetching Closed Issues ==="
echo ""

for repo_dir in $REPOS; do
    METADATA_FILE="$REPOS_DIR/$repo_dir/sync-metadata.json"

    if [ ! -f "$METADATA_FILE" ]; then
        echo "Skipping $repo_dir (no metadata)"
        continue
    fi

    REPO=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$METADATA_FILE')).repository)")

    echo "=== $REPO ==="
    "$BASE_DIR/scripts/fetch-issues.sh" "$REPO" --state closed
    echo ""
done

echo "=== Building Indexes ==="
node "$BASE_DIR/scripts/build-index.js" --all

echo ""
echo "=== Complete ==="
echo "Run 'node scripts/generate-readable.js --all' to update issues.md files"
