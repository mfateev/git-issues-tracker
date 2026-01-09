# Recent Issues Analysis Template

Use this template when generating the recent issues analysis (analysis/recent.md).

---

# Recent Issues Analysis

**Generated:** {DATE}
**Period:** Last 30 days ({N} new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

---

## Urgent Issues Requiring Attention

{Analyze recent issues and group by urgency. Only include sections for urgency levels that have issues. Possible levels: Critical (security/CVEs), High (production bugs, crashes), Medium (regressions, performance).}

### {Urgency Level}: {Category}

{Description of issues at this urgency level}

| Issue | SDK | Impact |
|-------|-----|--------|
| [#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}) | {SDK} | {description} |
...

**Recommendation:** {action required}

{Continue with additional urgency sections as needed. Note any patterns across issues.}

---

## Emerging Themes

{Identify 4-6 patterns across the recent issues}

### 1. {Theme Name}

{Description of the pattern}

{List related issues:}
- {issue description} ([#{NUMBER}](https://github.com/{REPO}/issues/{NUMBER}))
- ...

**Recommendation:** {suggested action}

### 2. {Theme Name}

...

---

## By Category

{Group recent issues by type (bugs, features, internal). Within each type, list by repository. Only include repositories that have issues in that category.}

### Bugs ({N} issues)
- **{Repo}:** {N} ({brief description})
- ...

### Feature Requests ({N} issues)
- **{Repo}:** {N} ({brief description})
- ...

### Internal/Testing ({N} issues)
- {brief list}

---

## Recommendations

{Prioritized list of recommended actions based on the recent issues}

1. **Immediate:** {critical/security items}
2. **High Priority:** {production-impacting bugs}
3. **High Priority:** {stability/regression fixes}
4. **Medium Priority:** {operational concerns}
5. **Track:** {emerging patterns to monitor}
