# SDK Analysis Template

Use this template when generating analysis documents for SDK repositories (Java, Go, TypeScript, Python, .NET, PHP, Ruby).

---

# Temporal {SDK_NAME} SDK - Issues Analysis & Remediation Proposal

**Generated:** {DATE}
**Total Open Issues:** {OPEN_COUNT}
**Total Closed Issues:** {CLOSED_COUNT}
**Repository:** [temporalio/{REPO_NAME}](https://github.com/temporalio/{REPO_NAME})

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [list other SDK analysis docs, excluding current one]

**Semantic Data:** If available, use `repos/<repo>/issues-index-enhanced.json` for pre-categorized issues with semantic fields (subcategory, apis, components, concepts, severity).

---

## Executive Summary

{2-3 sentence overview of the SDK's issue landscape, key metrics, and primary concerns}

### Key Findings

{Analyze issues and create a findings table with categories that exist in the data. Common categories include: bugs, enhancements, security vulnerabilities, test server issues, stale issues. Only include categories that have issues.}

| Category | Count | Priority |
|----------|-------|----------|
| {Category} | {N} | {priority level with brief justification} |
| ... | ... | ... |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | {N} |
| Total Comments | {N} |
| Issues with Upvotes | {N} ({%}) |
| Issues with Comments | {N} ({%}) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | {%} ({closed}/{total}) |
| Median Time to Close | {N} days (calendar) / {N} days (business) |
| Resolved within 30 days | {%} |
| Resolved within 90 days | {%} |

### Recommended Actions

1. **Immediate:** {critical items like security vulnerabilities}
2. **Short-term:** {high-priority bugs}
3. **Medium-term:** {core functionality issues}
4. **Long-term:** {feature requests based on user demand}
5. **Housekeeping:** {stale issue triage}

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

{Describe whether backlog is growing, shrinking, or stable}

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | {N} | {N} | {+/-N} |

{Commentary: "📈 Backlog Growing" or "📉 Backlog Shrinking" or "⚖️ Backlog Stable"}

### Last 6 Months: Detailed Analysis

{Summary of recent activity including bugs closed, enhancements completed, and any popular requests resolved}

| Metric | Value |
|--------|-------|
| Issues Opened | {N} |
| Issues Closed | {N} |
| Bugs Closed | {N} |
| Enhancements Completed | {N} |

### Popular Requests Resolved (Last 6 Months)

{List issues with 3+ upvotes that were closed in the last 6 months}

| Issue | 👍 | Title |
|-------|-----|-------|
| [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | {upvotes} | {title} |
...

---

## User Demand: Top Issues by Upvotes

{List top 10 issues by upvotes with links, upvote count, comment count, and title}

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | {upvotes} | {comments} | {title} |
...

### Priority Score (Upvotes×2 + Comments)

{List top 10 by combined engagement score}

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #{NUMBER} | {score} | {title} |
...

---

## Issue Analysis by Category

{Create sections for each significant category found in the data. Include only categories that have issues. Order by priority (security first if present, then bugs, then enhancements). Use descriptive headings based on actual content.

**If semantic data is available:** Use `subcategory` field from `issues-index-enhanced.json` for natural groupings (e.g., "activity-heartbeat", "workflow-replay", "test-framework"). Use `issues-by-area.json` to see issue counts per subcategory.}

### {Category Name} ({N} issues)

{Description and analysis of this category}

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | {upvotes} | {description} |
...

{For bugs, consider grouping by priority (High/Medium) or subsystem}
{For security issues, include severity ratings}
{For test server issues, distinguish blocking vs nice-to-have}

{Continue with additional category sections as needed}

---

## API & Component Hotspots

{If semantic data is available, identify which APIs and components have the most issues using the `apis` and `components` fields from `issues-index-enhanced.json`. This helps prioritize which areas need the most attention.}

| API/Component | Issue Count | Severity Distribution |
|---------------|-------------|----------------------|
| {name} | {N} | {high: X, medium: Y, low: Z} |
...

---

## Enhancement Requests ({N} issues)

{Analyze enhancement requests and group into thematic categories based on actual issue content. Categories should emerge from the data. Examples: API improvements, testing support, framework integrations, performance, observability, etc.}

### {Category Name}

| Issue | 👍 | Request |
|-------|-----|---------|
...

{Continue with additional categories as needed based on the data}

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

{Summary of stale issues that should be reviewed for closure}

- **Close candidates:** {list issues that appear resolved or no longer relevant}
- **Needs triage:** {list issues that need maintainer decision}
- **Keep open:** {list valid issues that just haven't been worked on}

### Duplicate Candidates

{List issues that may be duplicates of each other}

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- {security fixes}
- {critical bugs}

### Phase 2: Developer Experience (Short-term)
- {test server improvements}
- {common pain points}

### Phase 3: Feature Expansion (Medium-term)
- {high-upvote enhancements}

### Phase 4: Maintenance (Ongoing)
- {stale issue cleanup}
- {dependency updates}
