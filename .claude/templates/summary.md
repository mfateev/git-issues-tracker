# Summary Template

Use this template when generating the cross-repository summary document (analysis/summary.md).

---

# Temporal - Cross-Repository Analysis Summary

**Generated:** {DATE}
**Total Open Issues:** {TOTAL_COUNT} across {REPO_COUNT} repositories

## Related Documents

| Document | Description |
|----------|-------------|
| [contributors.md](contributors.md) | Issues and comments by author |
| [stats-recent.md](stats-recent.md) | Issues filed in the last 30 days |

**Per-Repository Analysis:**
{List links to all tracked repository analysis documents}

**Full Issue Data:** See `repos/<repo>/issues.md` for complete issue dumps with all comments.

---

## Overview by Repository

{Create a table with one row per tracked repository, ordered by issue count descending}

| Repository | Issues | Upvotes | Comments | Bugs | Enhancements |
|------------|--------|---------|----------|------|--------------|
| [{Repo Name}]({analysis-doc}.md) | {N} | {N} | {N} | {N} | {N} |
| ... | ... | ... | ... | ... | ... |
| **Total** | **{N}** | **{N}** | **{N}** | **{N}** | **{N}** |

---

## Top User Requests (by Upvotes)

{List top 15 issues across ALL repositories by upvote count}

| Rank | Repo | Issue | 👍 | Request |
|------|------|-------|-----|---------|
| 1 | {repo} | [#{NUMBER}](../repos/{REPO_DIR}/issues.md#{NUMBER}) | **{upvotes}** | {title} |
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

| Repository | Stale Issues | Recommended Action |
|------------|--------------|-------------------|
| {Repo Name} | {N} | {brief recommendation} |
| ... | ... | ... |

**Total stale issues across all repos:** {N}
