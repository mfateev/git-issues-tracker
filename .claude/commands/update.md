# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Steps

### 1. Sync Issues from GitHub

Run `./scripts/update-all.sh` to:
- Fetch updated issues from all tracked repositories
- Rebuild indexes with engagement metrics
- Generate contributors.md
- Generate stats-recent.md

### 2. Regenerate Human-Readable Issue Files

Run `node scripts/generate-readable.js --all` to regenerate all `repos/<sdk>/issues.md` files with latest data.

### 3. Generate Statistics (Script-Based)

Run `node scripts/generate-stats.js --all` to generate `analysis/stats-<sdk>.md` files for each repository.

Run `node scripts/generate-aggregate-stats.js` to generate `analysis/stats-all.md` with cross-repository statistics.

### 4. Generate SDK Analysis Documents (LLM)

For each SDK, read the corresponding statistics file (`analysis/stats-<sdk>.md`) and the issues file (`repos/<sdk>/issues.md`), then update or create `analysis/<sdk>.md` with:

**Deep Analysis:** For top issues (high upvotes, high engagement, or critical bugs), use the `get-issue.js` script to read full issue content including all comments:
```bash
node scripts/get-issue.js <repo> <issue-number>
# Example: node scripts/get-issue.js temporalio-temporal 680
```
This provides full context for understanding the issue's importance and community discussion.

- Executive summary of key findings
- Categorized issues (bugs, enhancements, security, etc.)
- Priority recommendations based on upvotes and engagement
- Proposed roadmap
- Housekeeping recommendations (stale issues, duplicates)

**Important:**
- Keep the existing document structure if updating
- If you think the structure can be improved, explain the proposed change and ask for confirmation
- Do NOT include script usage examples, jq commands, or implementation details in analysis documents
- Analysis documents should contain only issue analysis content, not tooling documentation

**Issue Link Format (CRITICAL):**
All issue references MUST link to local files, NOT GitHub URLs.

✅ Correct: `[#680](../repos/temporalio-temporal/issues.md#680)`
❌ Wrong: `[#680](https://github.com/temporalio/temporal/issues/680)`

Repository mapping for links:
- Server issues: `../repos/temporalio-temporal/issues.md#<number>`
- Features issues: `../repos/temporalio-features/issues.md#<number>`
- API issues: `../repos/temporalio-api/issues.md#<number>`
- Java SDK: `../repos/temporalio-sdk-java/issues.md#<number>`
- Go SDK: `../repos/temporalio-sdk-go/issues.md#<number>`
- TypeScript SDK: `../repos/temporalio-sdk-typescript/issues.md#<number>`
- Python SDK: `../repos/temporalio-sdk-python/issues.md#<number>`
- .NET SDK: `../repos/temporalio-sdk-dotnet/issues.md#<number>`
- PHP SDK: `../repos/temporalio-sdk-php/issues.md#<number>`
- Ruby SDK: `../repos/temporalio-sdk-ruby/issues.md#<number>`

### 5. Generate Cross-Repository Summary (LLM)

Read `analysis/stats-all.md` and all individual `analysis/<sdk>.md` documents, then update `analysis/summary.md` with:

- Overview table of all repositories
- Top user requests across all repos
- Common themes and patterns
- Per-repository priorities
- Recommended initiatives

**Important:**
- Keep the existing document structure if updating
- If you think the structure can be improved, explain the proposed change and ask for confirmation
- Do NOT include script usage examples, jq commands, or implementation details
- The summary should contain only analysis content, not tooling documentation

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use local file links, NOT GitHub URLs. See mapping in Step 4.

### 6. Generate Recent Issues Analysis (LLM)

Read `analysis/stats-recent.md` (the raw list of recent issues), then update `analysis/recent.md` with deep analysis.

**Deep Analysis:** For urgent or high-impact issues, use `get-issue.js` to read full issue content:
```bash
node scripts/get-issue.js <repo> <issue-number>
```
This helps understand the full scope of bugs, security issues, and user-reported problems.

- **Urgent Issues:** Identify security vulnerabilities, production-impacting bugs, and crashes that need immediate attention
- **Emerging Themes:** Look for patterns across the new issues (e.g., multiple issues in same SDK version, common problem areas)
- **Category Breakdown:** Bugs vs features vs internal issues
- **Recommendations:** Prioritized action items based on severity and user impact

**Important:**
- Focus on issues that are NEW (filed in last 30 days)
- Highlight anything that could affect production users
- Look for regressions in recent releases
- Group related issues together to identify systemic problems
- Keep the existing document structure if updating

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use local file links, NOT GitHub URLs. See mapping in Step 4.
