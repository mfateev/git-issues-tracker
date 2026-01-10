# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Context Management (Important)

To avoid hitting context limits when running analysis agents:
- **Prefer pre-computed data**: Use `stats-*.md` files and `issues-index.json` instead of raw issue JSONs
- **Limit deep dives**: Use `get-issue.js` for at most 3-5 critical issues per repository
- **Don't read issue directories**: The `issues/*.json` files are for scripts, not LLM analysis

## Steps

### 1. Sync Issues from GitHub

Run `./scripts/update-all.sh` to:
- Fetch updated issues from all tracked repositories
- Rebuild indexes with engagement metrics
- Generate contributors.md (with navigation links)
- Generate stats-recent.md (with navigation links)

### 2. Generate Statistics (Script-Based)

Run `node scripts/generate-stats.js --all` to generate `analysis/stats-<sdk>.md` files for each repository.

Run `node scripts/generate-aggregate-stats.js` to generate `analysis/stats-all.md` with cross-repository statistics.

**Note:** These scripts automatically generate navigation links to related documents (summary, analysis docs, other stats files).

### 3. Generate SDK Analysis Documents (LLM)

For each SDK, read the corresponding statistics file (`analysis/stats-<sdk>.md`) and the issue index (`repos/<sdk>/issues-index.json`), then update or create `analysis/<sdk>.md`.

**Templates:** Follow the structure defined in these template files:
- **SDK analysis:** `.claude/templates/sdk-analysis.md` (Java, Go, TypeScript, Python, .NET, PHP, Ruby)
- **Server analysis:** `.claude/templates/server-analysis.md`
- **Features analysis:** `.claude/templates/features-analysis.md`
- **API analysis:** `.claude/templates/api-analysis.md`

**Data Sources (in order of preference):**
1. `analysis/stats-<sdk>.md` - Pre-computed statistics with all metrics needed
2. `repos/<sdk>/issues-index.json` - Aggregated index with titles, upvotes, comments, labels
3. **Do NOT read individual `issues/*.json` files** - The index contains sufficient data

**Deep Analysis (use sparingly to avoid context limits):**
- Only use `get-issue.js` for **at most 3-5 critical issues** per repository
- Reserve for: security vulnerabilities, production crashes, or issues needing comment context
- The issue index already contains titles, upvotes, and comment counts - sufficient for most analysis
```bash
node scripts/get-issue.js <repo> <issue-number>
# Example: node scripts/get-issue.js temporalio-temporal 680
```

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
- Do NOT include script usage examples, jq commands, or implementation details in analysis documents
- Analysis documents should contain only issue analysis content, not tooling documentation

**Issue Link Format (CRITICAL):**
All issue references MUST link to GitHub URLs.

✅ Correct: `[#680](https://github.com/temporalio/temporal/issues/680)`
❌ Wrong: `[#680](../repos/temporalio-temporal/issues.md#680)`

Repository mapping for links:
- Server issues: `https://github.com/temporalio/temporal/issues/<number>`
- Features issues: `https://github.com/temporalio/features/issues/<number>`
- API issues: `https://github.com/temporalio/api/issues/<number>`
- Java SDK: `https://github.com/temporalio/sdk-java/issues/<number>`
- Go SDK: `https://github.com/temporalio/sdk-go/issues/<number>`
- TypeScript SDK: `https://github.com/temporalio/sdk-typescript/issues/<number>`
- Python SDK: `https://github.com/temporalio/sdk-python/issues/<number>`
- .NET SDK: `https://github.com/temporalio/sdk-dotnet/issues/<number>`
- PHP SDK: `https://github.com/temporalio/sdk-php/issues/<number>`
- Ruby SDK: `https://github.com/temporalio/sdk-ruby/issues/<number>`

### 4. Generate Cross-Repository Summary (LLM)

Read `analysis/stats-all.md` and all individual `analysis/<sdk>.md` documents, then update `analysis/summary.md`.

**Template:** Follow the structure defined in `.claude/templates/summary.md`

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
- Do NOT include script usage examples, jq commands, or implementation details
- The summary should contain only analysis content, not tooling documentation

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use GitHub URLs. See mapping in Step 3.

### 5. Generate Recent Issues Analysis (LLM)

Read `analysis/stats-recent.md` (the raw list of recent issues), then update `analysis/recent.md` with deep analysis.

**Template:** Follow the structure defined in `.claude/templates/recent-analysis.md`

**Deep Analysis (use sparingly to avoid context limits):**
- Only use `get-issue.js` for **at most 5-10 critical recent issues** total
- Reserve for: security vulnerabilities, production crashes, or complex bugs needing context
- `stats-recent.md` already contains issue titles and metadata - sufficient for categorization
```bash
node scripts/get-issue.js <repo> <issue-number>
```

**Important:**
- Always follow the template structure - templates are the source of truth
- To change document structure, update the template in `.claude/templates/`
- Focus on issues that are NEW (filed in last 30 days)
- Highlight anything that could affect production users
- Look for regressions in recent releases
- Group related issues together to identify systemic problems

**Issue Link Format (CRITICAL):**
Same rules as SDK documents - use GitHub URLs. See mapping in Step 3.
