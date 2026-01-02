# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Steps

### 1. Sync Issues from GitHub

Run `./scripts/update-all.sh` to:
- Fetch updated issues from all tracked repositories
- Rebuild indexes with engagement metrics
- Generate contributors.md (with navigation links)
- Generate stats-recent.md (with navigation links)

### 2. Regenerate Human-Readable Issue Files

Run `node scripts/generate-readable.js --all` to regenerate all `repos/<sdk>/issues.md` files with latest data.

### 3. Generate Statistics (Script-Based)

Run `node scripts/generate-stats.js --all` to generate `analysis/stats-<sdk>.md` files for each repository.

Run `node scripts/generate-aggregate-stats.js` to generate `analysis/stats-all.md` with cross-repository statistics.

**Note:** These scripts automatically generate navigation links to related documents (summary, analysis docs, other stats files).

### 4. Generate SDK Analysis Documents (LLM)

For each SDK, read the corresponding statistics file (`analysis/stats-<sdk>.md`) and the issues file (`repos/<sdk>/issues.md`), then update or create `analysis/<sdk>.md`.

**Templates:** Follow the structure defined in these template files:
- **SDK analysis:** `.claude/templates/sdk-analysis.md` (Java, Go, TypeScript, Python, .NET, PHP, Ruby)
- **Server analysis:** `.claude/templates/server-analysis.md`
- **Features analysis:** `.claude/templates/features-analysis.md`
- **API analysis:** `.claude/templates/api-analysis.md`

**Deep Analysis:** For top issues (high upvotes, high engagement, or critical bugs), use the `get-issue.js` script to read full issue content including all comments:
```bash
node scripts/get-issue.js <repo> <issue-number>
# Example: node scripts/get-issue.js temporalio-temporal 680
```
This provides full context for understanding the issue's importance and community discussion.

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
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

Read `analysis/stats-all.md` and all individual `analysis/<sdk>.md` documents, then update `analysis/summary.md`.

**Template:** Follow the structure defined in `.claude/templates/summary.md`

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
- Do NOT include script usage examples, jq commands, or implementation details
- The summary should contain only analysis content, not tooling documentation

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use local file links, NOT GitHub URLs. See mapping in Step 4.

### 6. Generate Recent Issues Analysis (LLM)

Read `analysis/stats-recent.md` (the raw list of recent issues), then update `analysis/recent.md` with deep analysis.

**Template:** Follow the structure defined in `.claude/templates/recent-analysis.md`

**Deep Analysis:** For urgent or high-impact issues, use `get-issue.js` to read full issue content:
```bash
node scripts/get-issue.js <repo> <issue-number>
```
This helps understand the full scope of bugs, security issues, and user-reported problems.

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
- Focus on issues that are NEW (filed in last 30 days)
- Highlight anything that could affect production users
- Look for regressions in recent releases
- Group related issues together to identify systemic problems

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use local file links, NOT GitHub URLs. See mapping in Step 4.
