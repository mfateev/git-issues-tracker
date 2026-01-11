# Update Issues and Regenerate Analysis

Update all tracked GitHub repositories and regenerate analysis documents.

## Context Management (Important)

To avoid hitting context limits when running analysis agents:
- **Prefer pre-computed data**: Use `stats-*.md` files, `issues-index.json`, and semantic analysis data instead of raw issue JSONs
- **Use semantic data**: `analysis/cards-summary.txt` provides grep-friendly one-line summaries; `issues-index-enhanced.json` includes semantic fields (category, subcategory, APIs, components, concepts)
- **Selective deep dives**: Use `get-issue.js` only when the index metadata is insufficient (see criteria below)
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

### 2b. Generate Semantic Issue Cards (LLM - Incremental)

Run `node scripts/generate-cards.js` to generate semantic cards for any new issues that don't have cards yet.

**Note:** This only processes issues without existing cards (incremental), so it's fast for regular updates. Skip this step if no repos have cards initialized yet.

Then run `node scripts/build-enhanced-index.js` to rebuild the enhanced indexes and `analysis/cards-summary.txt`.

**Optional:** Run `node scripts/generate-themes.js --all` to regenerate theme analysis documents. This is slower and only needed when you want updated cross-cutting analysis.

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
3. `repos/<sdk>/issues-index-enhanced.json` - Enhanced index with semantic fields (if available)
4. `analysis/cards-summary.txt` - Grep-friendly one-line summaries for quick searches
5. `analysis/themes/*.md` - Pre-computed cross-cutting theme analysis (if available)
6. **Do NOT read individual `issues/*.json` files** - The index contains sufficient data

**When to Use `get-issue.js` (selective deep dives):**

The issue index contains title, upvotes, comments, labels, and state - sufficient for most analysis. Only fetch full issue content when you need more context. Use these signals to decide:

**Fetch full content when:**
- Security vulnerabilities or CVEs (always need full context for severity assessment)
- Production crashes/data loss bugs (need reproduction steps and environment details)
- High engagement (10+ upvotes OR 15+ comments) AND title is unclear or generic
- Complex architectural issues where comments likely contain important discussion
- Issues you're highlighting as "top priority" in your analysis

**Skip full content when:**
- Title is self-explanatory (e.g., "Add support for X", "Error Y when doing Z")
- Simple feature requests with clear scope
- Low engagement issues (few upvotes/comments)
- Stale issues being listed for housekeeping
- Issues where upvotes/comments alone indicate priority

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

**When to Use `get-issue.js` for Recent Issues:**

`stats-recent.md` contains titles, repos, and issue numbers - sufficient for categorization. Fetch full content selectively:

**Fetch full content when:**
- Security vulnerabilities or CVEs (need severity details)
- Production crashes, data corruption, or blocking bugs
- Issues with vague titles that need clarification for proper categorization
- Potential regressions in recent releases (need version details)

**Skip full content when:**
- Title clearly describes the issue
- Enhancement requests with obvious scope
- Documentation or minor improvements

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
