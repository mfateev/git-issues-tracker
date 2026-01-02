# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Steps

1. Run `./scripts/update-all.sh` to:
   - Fetch updated issues from all tracked repositories
   - Rebuild indexes with engagement metrics
   - Generate contributors.md
   - Generate recent.md

2. Run `node scripts/generate-readable.js --all` to regenerate all issues.md files with latest data

3. Run `node scripts/analyze-all.js stats` to get current statistics for all repositories

4. For each SDK update the corresponding document in the analysis folder. Keep the document structure. If you think that you can improve the structure explain the proposed change to the use and ask for confirmation.
Issue links in the documents must point to the issue in the repos/<sdk>/issues.md.

5. Update the analysis/summary.md based on all the findings. Keep the document structure. If you think that you can improve the structure explain the proposed change to the use and ask for confirmation. Issue links in the documents must point to the issue in the repos/<sdk>/issues.md. 

