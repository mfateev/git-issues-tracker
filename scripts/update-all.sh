#!/bin/bash
# Update all tracked repositories
# Usage: ./scripts/update-all.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPOS_DIR="$SCRIPT_DIR/../repos"

# Check if repos directory exists
if [ ! -d "$REPOS_DIR" ]; then
    echo "No repos directory found"
    exit 1
fi

# Get list of tracked repos
repos=($(ls -d "$REPOS_DIR"/*/ 2>/dev/null | xargs -n1 basename))

if [ ${#repos[@]} -eq 0 ]; then
    echo "No tracked repositories found"
    exit 1
fi

echo "Found ${#repos[@]} tracked repositories"
echo ""

# Check rate limit before starting
RATE_LIMIT_BUFFER=500
rate_remaining=$(gh api rate_limit --jq '.resources.core.remaining')
rate_limit=$(gh api rate_limit --jq '.resources.core.limit')
rate_reset=$(gh api rate_limit --jq '.resources.core.reset')

echo "GitHub API rate limit: $rate_remaining/$rate_limit remaining"

# Estimate requests needed (rough: 2 per repo for listing + potential updates)
estimated_requests=$((${#repos[@]} * 50))

if [ "$rate_remaining" -lt "$((estimated_requests + RATE_LIMIT_BUFFER))" ]; then
    reset_time=$(date -r "$rate_reset" '+%Y-%m-%d %H:%M:%S' 2>/dev/null || date -d "@$rate_reset" '+%Y-%m-%d %H:%M:%S' 2>/dev/null || echo "epoch: $rate_reset")
    echo ""
    echo "WARNING: Low API rate limit for updating ${#repos[@]} repos"
    echo "  Estimated need: ~$estimated_requests requests + $RATE_LIMIT_BUFFER buffer"
    echo "  Have: $rate_remaining"
    echo "  Resets at: $reset_time"
    echo ""
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""

# Track results
success=0
failed=0
failed_repos=()

for repo in "${repos[@]}"; do
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Updating: $repo"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    if "$SCRIPT_DIR/update-issues.sh" "$repo"; then
        ((success++))
    else
        ((failed++))
        failed_repos+=("$repo")
        echo "WARNING: Failed to update $repo, continuing..."
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
echo "Successfully updated: $success"
echo "Failed: $failed"

if [ $failed -gt 0 ]; then
    echo "Failed repositories:"
    for repo in "${failed_repos[@]}"; do
        echo "  - $repo"
    done
fi

# Show final rate limit
rate_remaining=$(gh api rate_limit --jq '.resources.core.remaining')
echo ""
echo "Rate limit remaining: $rate_remaining/$rate_limit"
