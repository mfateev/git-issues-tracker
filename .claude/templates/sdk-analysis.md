# SDK Analysis Template

Use this template when generating analysis documents for SDK repositories (Java, Go, TypeScript, Python, .NET, PHP, Ruby).

---

# Temporal {SDK_NAME} SDK - Issues Analysis & Remediation Proposal

**Generated:** {DATE}
**Total Open Issues:** {ISSUE_COUNT}
**Repository:** [temporalio/{REPO_NAME}](https://github.com/temporalio/{REPO_NAME})

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/{REPO_DIR}/issues.md)

**Other SDKs:** [list other SDK analysis docs, excluding current one]

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

### Recommended Actions

1. **Immediate:** {critical items like security vulnerabilities}
2. **Short-term:** {high-priority bugs}
3. **Medium-term:** {core functionality issues}
4. **Long-term:** {feature requests based on user demand}
5. **Housekeeping:** {stale issue triage}

---

## User Demand: Top Issues by Upvotes

{List top 10 issues by upvotes with links, upvote count, comment count, and title}

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#{NUMBER}](../repos/{REPO_DIR}/issues.md#{NUMBER}) | {upvotes} | {comments} | {title} |
...

### Priority Score (Upvotes×2 + Comments)

{List top 10 by combined engagement score}

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #{NUMBER} | {score} | {title} |
...

---

## Issue Analysis by Category

{Create sections for each significant category found in the data. Include only categories that have issues. Order by priority (security first if present, then bugs, then enhancements). Use descriptive headings based on actual content.}

### {Category Name} ({N} issues)

{Description and analysis of this category}

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#{NUMBER}](../repos/{REPO_DIR}/issues.md#{NUMBER}) | {upvotes} | {description} |
...

{For bugs, consider grouping by priority (High/Medium) or subsystem}
{For security issues, include severity ratings}
{For test server issues, distinguish blocking vs nice-to-have}

{Continue with additional category sections as needed}

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
