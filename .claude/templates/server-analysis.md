# Server Analysis Template

Use this template when generating analysis for the Temporal Server repository (temporalio/temporal).

---

# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** {DATE}
**Total Open Issues:** {OPEN_COUNT}
**Total Closed Issues:** {CLOSED_COUNT}
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-temporal/issues.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

{2-3 sentence overview highlighting total issues, engagement metrics, and top user requests}

### Key Findings

{Analyze issues and create a findings table with categories that exist in the data. Categories should reflect actual labels and issue types found.}

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

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | {%} ({closed}/{total}) |
| Median Time to Close | {N} days (calendar) / {N} days (business) |
| Resolved within 30 days | {%} |
| Resolved within 90 days | {%} |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | {N} | {N} | {+/-N} |

{Commentary: "📈 Backlog Growing" or "📉 Backlog Shrinking" or "⚖️ Backlog Stable"}

### Last 6 Months: Detailed Analysis

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
...

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#{NUMBER}](../repos/temporalio-temporal/issues.md#{NUMBER}) | {upvotes} | {comments} | {title} |
...

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #{NUMBER} | {score} | {title} |
...

---

## Top Request Categories

{Analyze issues and group into 3-6 thematic categories based on actual issue content. Categories should emerge from the data, not be predetermined. Examples of possible categories: workflow capabilities, storage/database, operations, API changes, performance, etc.}

### 1. {Category Name} ({demand level})

{Brief description of this category}

| Issue | 👍 | Request |
|-------|-----|---------|
| #{NUMBER} | {upvotes} | {description} |
...

### 2. {Category Name} ({demand level})

{Brief description}

| Issue | 👍 | Request |
|-------|-----|---------|
...

{Continue with additional categories as needed based on the data}

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | 👍 | Impact |
|-------|-----|--------|
...

### Potential Bugs (Need Investigation)

{List issues labeled as potential bugs that need triage}

---

## Community Contribution Opportunities

{List issues marked as up-for-grabs or good-first-issue}

| Issue | Area | Description |
|-------|------|-------------|
...

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** {count}
- **Recommended for closure:** {list obvious close candidates}
- **Needs maintainer review:** {list issues requiring decision}

### Documentation Gaps

{List documentation-related issues that could improve user experience}

---

## Recommendations

1. **High Priority Features:** {top 3-5 by user demand}
2. **Bug Fixes:** {critical bugs to address}
3. **Community:** {issues good for external contributors}
4. **Housekeeping:** {cleanup recommendations}
