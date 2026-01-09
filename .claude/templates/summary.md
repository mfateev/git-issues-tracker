# Summary Template

Use this template when generating the cross-repository summary document (analysis/summary.md).

---

# Temporal - Cross-Repository Analysis Summary

**Generated:** {DATE}
**Total Open Issues:** {OPEN_COUNT} across {REPO_COUNT} repositories
**Total Closed Issues:** {CLOSED_COUNT}
**Overall Resolution Rate:** {%}

## Related Documents

| Document | Description |
|----------|-------------|
| [contributors.md](contributors.md) | Issues and comments by author |
| [recent.md](recent.md) | Recent issues analysis (last 30 days) |

**Per-Repository Analysis:**
{List links to all tracked repository analysis documents}

**Full Issue Data:** Individual issue JSON files in `repos/<repo>/issues/` or view on GitHub.

---

## Overview by Repository

{Create a table with one row per tracked repository, ordered by open issue count descending}

| Repository | Open | Closed | Rate | Upvotes | Comments | Bugs | Enhancements | Median TTC |
|------------|------|--------|------|---------|----------|------|--------------|------------|
| [{Repo Name}]({analysis-doc}.md) | {N} | {N} | {%} | {N} | {N} | {N} | {N} | {N}d |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |
| **Total** | **{N}** | **{N}** | **{%}** | **{N}** | **{N}** | **{N}** | **{N}** | **{N}d** |

---

## Global Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata. These are heuristics, not explicit GitHub data.

| Metric | Value |
|--------|-------|
| Overall Resolution Rate | {%} |
| Median Time to Close | {N} days |
| Average Time to Close | {N} days |
| Resolved within 30 days | {%} |
| Resolved within 90 days | {%} |

---

## Resolution Leaderboard

### By Resolution Rate (Best First)

| Rank | Repository | Resolution Rate | Open | Closed |
|------|------------|-----------------|------|--------|
| 1 | {repo} | {%} | {N} | {N} |
...

### By Median Time to Close (Fastest First)

| Rank | Repository | Median TTC | Resolved <30d |
|------|------------|------------|---------------|
| 1 | {repo} | {N}d | {%} |
...

---

## Issue Velocity (Last 12 Months)

{Summary of velocity trend}

| Metric | Value |
|--------|-------|
| Issues Opened | {N} |
| Issues Closed | {N} |
| Net Change | {+/-N} |

{Commentary: "📈 Backlog Growing" or "📉 Backlog Shrinking" or "⚖️ Backlog Stable"}

---

## Recently Resolved Popular Requests (Last 6 Months, 3+ 👍)

{List popular issues that were resolved recently across all repos}

| Repo | Issue | 👍 | Title |
|------|-------|-----|-------|
| {repo} | [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | {upvotes} | {title} |
...

---

## Top User Requests (by Upvotes)

{List top 15 OPEN issues across ALL repositories by upvote count}

| Rank | Repo | Issue | 👍 | Request |
|------|------|-------|-----|---------|
| 1 | {repo} | [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | **{upvotes}** | {title} |
...

---

## Common Themes

{Identify 4-6 themes that appear across multiple repositories}

### 1. {Theme Name}

{Description of the theme and why it matters}

| Category | Top Requests |
|----------|--------------|
| {subcategory} | {issue descriptions with upvotes} |
...

### 2. {Theme Name}

...

---

## Per-Repository Priorities

{Brief summary of top priority for each tracked repository}

| Repository | Top Request | Key Concern |
|------------|-------------|-------------|
| {Repo Name} | {top issue with upvotes} | {main issue category} |
| ... | ... | ... |

---

## Recommended Initiatives

{Based on cross-repo analysis, propose 3-5 initiatives}

### 1. {Initiative Name}

**Impact:** {which repos/users affected}
**Related Issues:**
- {list key issues across repos}

### 2. {Initiative Name}

...

---

## Housekeeping Summary

{Create a table with stale issue counts for each tracked repository}

| Repository | Stale Issues | % of Open | Recommended Action |
|------------|--------------|-----------|-------------------|
| {Repo Name} | {N} | {%} | {brief recommendation} |
| ... | ... | ... | ... |

**Total stale issues across all repos:** {N} ({%} of open issues)
