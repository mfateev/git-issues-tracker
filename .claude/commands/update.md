# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Steps

1. Run `./scripts/update-all.sh` to:
   - Fetch updated issues from all tracked repositories
   - Rebuild indexes with engagement metrics
   - Generate contributors.md
   - Generate recent.md

2. Run `node scripts/generate-readable.js --all` to regenerate all issues.md files with latest data

3. Show a summary of what was updated

4. If any changes were made, ask if the user wants to commit them
