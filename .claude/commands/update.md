# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Steps

### 1. Sync Issues from GitHub

Run `./scripts/update-all.sh` to:
- Fetch updated issues from all tracked repositories
- Rebuild indexes with engagement metrics
- Generate contributors.md
- Generate recent.md

### 2. Regenerate Human-Readable Issue Files

Run `node scripts/generate-readable.js --all` to regenerate all `repos/<sdk>/issues.md` files with latest data.

### 3. Generate Statistics (Script-Based)

Run `node scripts/generate-stats.js --all` to generate `analysis/stats-<sdk>.md` files for each repository.

Run `node scripts/generate-aggregate-stats.js` to generate `analysis/stats-all.md` with cross-repository statistics.

### 4. Generate SDK Analysis Documents (LLM)

For each SDK, read the corresponding statistics file (`analysis/stats-<sdk>.md`) and the issues file (`repos/<sdk>/issues.md`), then update or create `analysis/<sdk>.md` with:

- Executive summary of key findings
- Categorized issues (bugs, enhancements, security, etc.)
- Priority recommendations based on upvotes and engagement
- Proposed roadmap
- Housekeeping recommendations (stale issues, duplicates)

**Important:**
- Keep the existing document structure if updating
- If you think the structure can be improved, explain the proposed change and ask for confirmation
- Issue links must point to the local issues file: `../repos/<sdk>/issues.md#<issue-number>`
- Do NOT include script usage examples, jq commands, or implementation details in analysis documents
- Analysis documents should contain only issue analysis content, not tooling documentation

### 5. Generate Cross-Repository Summary (LLM)

Read `analysis/stats-all.md` and all individual `analysis/<sdk>.md` documents, then update `analysis/SUMMARY.md` with:

- Overview table of all repositories
- Top user requests across all repos
- Common themes and patterns
- Per-repository priorities
- Recommended initiatives

**Important:**
- Keep the existing document structure if updating
- If you think the structure can be improved, explain the proposed change and ask for confirmation
- Issue links must point to the local issues file: `../repos/<sdk>/issues.md#<issue-number>`
- Do NOT include script usage examples, jq commands, or implementation details
- The summary should contain only analysis content, not tooling documentation
