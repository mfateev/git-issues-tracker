#!/bin/bash
# Fetch closed issues for all tracked repositories (or a specific one)
# Usage: ./scripts/fetch-closed.sh [repo-dir-name]
# Example: ./scripts/fetch-closed.sh                    # All repos
# Example: ./scripts/fetch-closed.sh temporalio-sdk-java  # Single repo

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPOS_DIR="$SCRIPT_DIR/../repos"

# Check if repos directory exists
if [ ! -d "$REPOS_DIR" ]; then
    echo "No repos directory found"
    exit 1
fi

# Determine which repos to process
if [ -n "$1" ]; then
    # Single repo specified
    if [ ! -d "$REPOS_DIR/$1" ]; then
        echo "Repository directory not found: $REPOS_DIR/$1"
        exit 1
    fi
    repos=("$1")
else
    # All repos
    repos=($(ls -d "$REPOS_DIR"/*/ 2>/dev/null | xargs -n1 basename))
fi

if [ ${#repos[@]} -eq 0 ]; then
    echo "No tracked repositories found"
    exit 1
fi

echo "Will fetch closed issues for ${#repos[@]} repository(ies)"
echo ""

# Check rate limit before starting
rate_remaining=$(gh api rate_limit --jq '.resources.core.remaining')
rate_limit=$(gh api rate_limit --jq '.resources.core.limit')
rate_reset=$(gh api rate_limit --jq '.resources.core.reset')

echo "GitHub API rate limit: $rate_remaining/$rate_limit remaining"

# Estimate total closed issues we might fetch (this is a rough estimate)
# Real counts will be checked per-repo
echo ""
echo "Note: This may take a while for repositories with many closed issues."
echo "The script will check rate limits before each repository."
echo ""

# Track results
success=0
failed=0
total_fetched=0
failed_repos=()

for repo in "${repos[@]}"; do
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Fetching closed issues for: $repo"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    # Get repo name from metadata
    METADATA_FILE="$REPOS_DIR/$repo/sync-metadata.json"
    if [ ! -f "$METADATA_FILE" ]; then
        echo "WARNING: No metadata found for $repo, skipping"
        ((failed++))
        failed_repos+=("$repo")
        continue
    fi

    REPO_NAME=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$METADATA_FILE')).repository)")

    # Fetch closed issues
    if "$SCRIPT_DIR/fetch-issues.sh" "$REPO_NAME" --state closed; then
        ((success++))

        # Count what we fetched
        closed_count=$(find "$REPOS_DIR/$repo/issues" -name "*.json" -exec grep -l '"state":"CLOSED"' {} \; 2>/dev/null | wc -l | tr -d ' ')
        total_fetched=$((total_fetched + closed_count))
        echo "Fetched $closed_count closed issues for $repo"
    else
        ((failed++))
        failed_repos+=("$repo")
        echo "WARNING: Failed to fetch closed issues for $repo, continuing..."
    fi

    echo ""
done

# Rebuild all indexes
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Rebuilding indexes..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node "$SCRIPT_DIR/build-index.js" --all

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Successfully processed: $success repositories"
echo "Failed: $failed"
echo "Total closed issues fetched: $total_fetched"

if [ $failed -gt 0 ]; then
    echo ""
    echo "Failed repositories:"
    for repo in "${failed_repos[@]}"; do
        echo "  - $repo"
    done
fi

# Show final rate limit
rate_remaining=$(gh api rate_limit --jq '.resources.core.remaining')
echo ""
echo "Rate limit remaining: $rate_remaining/$rate_limit"
