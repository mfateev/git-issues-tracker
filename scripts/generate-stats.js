#!/usr/bin/env node

/**
 * Generate statistics for a single repository or all repositories
 * Includes both open and closed issue analysis
 *
 * Usage:
 *   node scripts/generate-stats.js <repo-dir-name>   # Single repo
 *   node scripts/generate-stats.js --all             # All repos
 *
 * Output:
 *   analysis/stats-<sdk>.md for each repository
 */

const fs = require('fs');
const path = require('path');

const reposDir = path.join(__dirname, '..', 'repos');
const analysisDir = path.join(__dirname, '..', 'analysis');

const SDK_NAMES = {
  'temporalio-temporal': 'server',
  'temporalio-features': 'features',
  'temporalio-sdk-java': 'java',
  'temporalio-sdk-go': 'go',
  'temporalio-sdk-typescript': 'typescript',
  'temporalio-sdk-python': 'python',
  'temporalio-sdk-dotnet': 'dotnet',
  'temporalio-sdk-php': 'php',
  'temporalio-sdk-ruby': 'ruby',
  'temporalio-api': 'temporalio-api'
};

const SDK_DISPLAY_NAMES = {
  'server': 'Server',
  'features': 'Features',
  'java': 'Java',
  'go': 'Go',
  'typescript': 'TypeScript',
  'python': 'Python',
  'dotnet': '.NET',
  'php': 'PHP',
  'ruby': 'Ruby',
  'temporalio-api': 'API'
};

const ANALYSIS_DOC_NAMES = {
  'server': 'server',
  'features': 'features',
  'java': 'java',
  'go': 'go',
  'typescript': 'typescript',
  'python': 'python',
  'dotnet': 'dotnet',
  'php': 'php',
  'ruby': 'ruby',
  'temporalio-api': 'api'
};

// =============================================================================
// Helper Functions
// =============================================================================

function generateNavigation(sdkName, allSdkNames) {
  const analysisDoc = ANALYSIS_DOC_NAMES[sdkName] || sdkName;
  const otherStats = allSdkNames
    .filter(name => name !== sdkName)
    .map(name => `[${SDK_DISPLAY_NAMES[name] || name}](stats-${name}.md)`)
    .join(' · ');

  return `## Related Documents

← [Summary](summary.md) · [Analysis](${analysisDoc}.md) · [Contributors](contributors.md) · [Recent](stats-recent.md) · [All Stats](stats-all.md)

**Other Statistics:** ${otherStats}

---
`;
}

function getTrackedRepos() {
  return fs.readdirSync(reposDir)
    .filter(name => {
      const indexPath = path.join(reposDir, name, 'issues-index.json');
      return fs.existsSync(indexPath);
    })
    .sort();
}

function loadIndex(repoName) {
  const indexPath = path.join(reposDir, repoName, 'issues-index.json');
  return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
}

function loadIssue(repoName, issueNumber) {
  const issuePath = path.join(reposDir, repoName, 'issues', `issue-${issueNumber}.json`);
  if (fs.existsSync(issuePath)) {
    return JSON.parse(fs.readFileSync(issuePath, 'utf8'));
  }
  return null;
}

function categorizeByLabel(issues, labelPattern) {
  return issues.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes(labelPattern.toLowerCase()))
  );
}

// =============================================================================
// Time Calculation Helpers
// =============================================================================

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getBusinessDays(startDate, endDate) {
  let count = 0;
  const current = new Date(startDate);
  while (current < endDate) {
    if (!isWeekend(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  return count;
}

function getCalendarDays(startDate, endDate) {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
}

function calculateTimeToClose(issue) {
  if (!issue.closedAt) return null;
  const created = new Date(issue.createdAt);
  const closed = new Date(issue.closedAt);
  return {
    calendarDays: getCalendarDays(created, closed),
    businessDays: getBusinessDays(created, closed)
  };
}

function getMedian(arr) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}

function getPercentile(arr, p) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const index = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}

// =============================================================================
// Closure Reason Inference
// =============================================================================

/**
 * Infer closure reason from issue data
 * NOTE: These are inferred heuristics, not explicit GitHub data
 */
function inferClosureReason(issue, repoName) {
  if (issue.state !== 'CLOSED') return null;

  const labels = (issue.labels || []).map(l => l.toLowerCase());
  const fullIssue = loadIssue(repoName, issue.number);

  // Check labels for explicit reasons
  if (labels.some(l => l.includes('duplicate'))) return 'duplicate';
  if (labels.some(l => l.includes('wontfix') || l.includes("won't fix") || l.includes('not planned'))) return 'wontfix';
  if (labels.some(l => l.includes('stale') || l.includes('inactive'))) return 'stale';
  if (labels.some(l => l.includes('invalid') || l.includes('cannot reproduce'))) return 'invalid';

  // Check if closed by author (self-resolved)
  if (fullIssue) {
    const author = fullIssue.author?.login;
    const comments = fullIssue.comments || [];
    const lastComment = comments[comments.length - 1];

    // If author was the last commenter before close, likely self-resolved
    if (lastComment && lastComment.author?.login === author) {
      return 'self_resolved';
    }
  }

  // Default to "fixed" if has bug label, "completed" otherwise
  if (labels.some(l => l.includes('bug'))) return 'fixed';
  if (labels.some(l => l.includes('enhancement') || l.includes('feature'))) return 'completed';

  return 'closed'; // Generic closure
}

function getClosureReasonStats(closedIssues, repoName) {
  const reasons = {
    fixed: 0,
    completed: 0,
    duplicate: 0,
    wontfix: 0,
    stale: 0,
    invalid: 0,
    self_resolved: 0,
    closed: 0
  };

  for (const issue of closedIssues) {
    const reason = inferClosureReason(issue, repoName);
    if (reason) {
      reasons[reason] = (reasons[reason] || 0) + 1;
    }
  }

  return reasons;
}

// =============================================================================
// Age and Staleness
// =============================================================================

function getAgeDistribution(issues) {
  const now = new Date();
  const buckets = {
    'last_30_days': 0,
    '1_3_months': 0,
    '3_6_months': 0,
    '6_12_months': 0,
    '1_2_years': 0,
    '2_3_years': 0,
    '3_plus_years': 0
  };

  for (const issue of issues) {
    const created = new Date(issue.createdAt);
    const ageDays = (now - created) / (1000 * 60 * 60 * 24);

    if (ageDays <= 30) buckets.last_30_days++;
    else if (ageDays <= 90) buckets['1_3_months']++;
    else if (ageDays <= 180) buckets['3_6_months']++;
    else if (ageDays <= 365) buckets['6_12_months']++;
    else if (ageDays <= 730) buckets['1_2_years']++;
    else if (ageDays <= 1095) buckets['2_3_years']++;
    else buckets['3_plus_years']++;
  }

  return buckets;
}

function getStaleIssues(issues, monthsThreshold = 12) {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - monthsThreshold);
  return issues.filter(i => new Date(i.updatedAt) < cutoff);
}

// =============================================================================
// Velocity and Trends
// =============================================================================

function getMonthlyVelocity(allIssues, months = 12) {
  const now = new Date();
  const velocity = [];

  for (let i = 0; i < months; i++) {
    const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
    const monthLabel = monthStart.toISOString().substring(0, 7); // YYYY-MM

    const opened = allIssues.filter(issue => {
      const created = new Date(issue.createdAt);
      return created >= monthStart && created <= monthEnd;
    }).length;

    const closed = allIssues.filter(issue => {
      if (!issue.closedAt) return false;
      const closedDate = new Date(issue.closedAt);
      return closedDate >= monthStart && closedDate <= monthEnd;
    }).length;

    velocity.unshift({ month: monthLabel, opened, closed, net: opened - closed });
  }

  return velocity;
}

function getResolutionWithinDays(closedIssues, days) {
  const qualifying = closedIssues.filter(issue => {
    const ttc = calculateTimeToClose(issue);
    return ttc && ttc.calendarDays <= days;
  });
  return closedIssues.length > 0
    ? Math.round(qualifying.length / closedIssues.length * 100)
    : 0;
}

// =============================================================================
// Engagement Analysis
// =============================================================================

function getTopByUpvotes(issues, limit = 20) {
  return [...issues]
    .filter(i => (i.upvotes || 0) > 0)
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, limit);
}

function getTopByPriority(issues, limit = 20) {
  return [...issues]
    .map(i => ({ ...i, priority: (i.upvotes || 0) * 2 + (i.commentCount || i.comments || 0) }))
    .filter(i => i.priority > 0)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

function getTopByComments(issues, limit = 20) {
  return [...issues]
    .filter(i => (i.commentCount || i.comments || 0) > 0)
    .sort((a, b) => (b.commentCount || b.comments || 0) - (a.commentCount || a.comments || 0))
    .slice(0, limit);
}

function getRecentIssues(issues, days = 30) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return issues
    .filter(i => new Date(i.createdAt) > cutoff)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getLabelDistribution(issues) {
  const labels = {};
  for (const issue of issues) {
    for (const label of issue.labels || []) {
      const normalized = label.toLowerCase();
      labels[normalized] = (labels[normalized] || 0) + 1;
    }
  }
  return Object.entries(labels)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30);
}

// =============================================================================
// 6-Month Detailed Analysis
// =============================================================================

function getSixMonthAnalysis(allIssues, repoName) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const recentOpened = allIssues.filter(i => new Date(i.createdAt) >= sixMonthsAgo);
  const recentClosed = allIssues.filter(i =>
    i.closedAt && new Date(i.closedAt) >= sixMonthsAgo
  );

  // Time to close for recently closed issues
  const ttcCalendar = [];
  const ttcBusiness = [];
  for (const issue of recentClosed) {
    const ttc = calculateTimeToClose(issue);
    if (ttc) {
      ttcCalendar.push(ttc.calendarDays);
      ttcBusiness.push(ttc.businessDays);
    }
  }

  // Closure reasons for recent closures
  const closureReasons = getClosureReasonStats(recentClosed, repoName);

  // Popular requests that were resolved
  const upvotedAndResolved = recentClosed
    .filter(i => (i.upvotes || 0) >= 3)
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));

  // Bugs fixed
  const bugsClosed = recentClosed.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes('bug'))
  );

  // Enhancements completed
  const enhancementsClosed = recentClosed.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes('enhancement') || l.toLowerCase().includes('feature'))
  );

  return {
    opened: recentOpened.length,
    closed: recentClosed.length,
    netChange: recentOpened.length - recentClosed.length,
    ttc: {
      avgCalendar: getAverage(ttcCalendar),
      avgBusiness: getAverage(ttcBusiness),
      medianCalendar: getMedian(ttcCalendar),
      medianBusiness: getMedian(ttcBusiness),
      p90Calendar: getPercentile(ttcCalendar, 90),
      p90Business: getPercentile(ttcBusiness, 90)
    },
    closureReasons,
    upvotedAndResolved,
    bugsClosed: bugsClosed.length,
    enhancementsClosed: enhancementsClosed.length,
    resolutionRate30d: getResolutionWithinDays(recentClosed, 30),
    resolutionRate90d: getResolutionWithinDays(recentClosed, 90)
  };
}

// =============================================================================
// Main Stats Generation
// =============================================================================

function generateRepoStats(repoName, allSdkNames) {
  const index = loadIndex(repoName);
  const allIssues = index.issues || [];
  const sdkName = SDK_NAMES[repoName] || repoName;
  const now = new Date();

  // Separate open and closed issues
  const openIssues = allIssues.filter(i => i.state === 'OPEN');
  const closedIssues = allIssues.filter(i => i.state === 'CLOSED');
  const hasClosedIssues = closedIssues.length > 0;

  // Basic counts for open issues
  const totalOpen = openIssues.length;
  const totalClosed = closedIssues.length;
  const totalAll = allIssues.length;
  const bugs = categorizeByLabel(openIssues, 'bug');
  const enhancements = categorizeByLabel(openIssues, 'enhancement').concat(
    categorizeByLabel(openIssues, 'feature')
  );
  const security = categorizeByLabel(openIssues, 'security');

  // Engagement on open issues
  const totalUpvotes = openIssues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
  const totalComments = openIssues.reduce((sum, i) => sum + (i.commentCount || i.comments || 0), 0);
  const issuesWithUpvotes = openIssues.filter(i => (i.upvotes || 0) > 0).length;
  const issuesWithComments = openIssues.filter(i => (i.commentCount || i.comments || 0) > 0).length;

  // Age distribution of open issues
  const ageDistribution = getAgeDistribution(openIssues);
  const staleIssues = getStaleIssues(openIssues, 12);
  const avgAgeDays = openIssues.length > 0
    ? Math.round(openIssues.reduce((sum, i) => {
        return sum + (now - new Date(i.createdAt)) / (1000 * 60 * 60 * 24);
      }, 0) / openIssues.length)
    : 0;

  // Resolution metrics (if we have closed issues)
  let resolutionMetrics = null;
  let closureReasons = null;
  let velocity = null;
  let sixMonthAnalysis = null;

  if (hasClosedIssues) {
    // Time to close calculations
    const ttcCalendar = [];
    const ttcBusiness = [];
    for (const issue of closedIssues) {
      const ttc = calculateTimeToClose(issue);
      if (ttc) {
        ttcCalendar.push(ttc.calendarDays);
        ttcBusiness.push(ttc.businessDays);
      }
    }

    resolutionMetrics = {
      resolutionRate: Math.round(totalClosed / totalAll * 100),
      avgCalendarDays: getAverage(ttcCalendar),
      avgBusinessDays: getAverage(ttcBusiness),
      medianCalendarDays: getMedian(ttcCalendar),
      medianBusinessDays: getMedian(ttcBusiness),
      p90CalendarDays: getPercentile(ttcCalendar, 90),
      p90BusinessDays: getPercentile(ttcBusiness, 90),
      resolved30d: getResolutionWithinDays(closedIssues, 30),
      resolved90d: getResolutionWithinDays(closedIssues, 90)
    };

    closureReasons = getClosureReasonStats(closedIssues, repoName);
    velocity = getMonthlyVelocity(allIssues, 12);
    sixMonthAnalysis = getSixMonthAnalysis(allIssues, repoName);
  }

  // Top issues
  const topByUpvotes = getTopByUpvotes(openIssues, 15);
  const topByPriority = getTopByPriority(openIssues, 15);
  const topByComments = getTopByComments(openIssues, 10);
  const recentIssues = getRecentIssues(openIssues, 30);
  const labelDistribution = getLabelDistribution(openIssues);

  // Generate markdown
  const displayName = SDK_DISPLAY_NAMES[sdkName] || sdkName;
  const navigation = generateNavigation(sdkName, allSdkNames);

  let md = `# ${displayName} SDK - Issue Statistics

**Generated:** ${now.toISOString().split('T')[0]}
**Repository:** ${repoName.replace('-', '/')}
**Data Source:** [issues.md](../repos/${repoName}/issues.md)

${navigation}
## Summary

| Metric | Value |
|--------|-------|
| Total Open Issues | ${totalOpen} |
| Total Closed Issues | ${totalClosed} |
| Total All Issues | ${totalAll} |
| Bugs (open) | ${bugs.length} |
| Enhancements/Features (open) | ${enhancements.length} |
| Security Issues (open) | ${security.length} |
| Total Upvotes (👍) on open | ${totalUpvotes} |
| Total Comments on open | ${totalComments} |
| Issues with Upvotes | ${issuesWithUpvotes} (${totalOpen > 0 ? Math.round(issuesWithUpvotes/totalOpen*100) : 0}%) |
| Issues with Comments | ${issuesWithComments} (${totalOpen > 0 ? Math.round(issuesWithComments/totalOpen*100) : 0}%) |
| Average Age (days) | ${avgAgeDays} |
| Stale Issues (>12 months) | ${staleIssues.length} (${totalOpen > 0 ? Math.round(staleIssues.length/totalOpen*100) : 0}%) |

---
`;

  // Resolution Metrics Section
  if (hasClosedIssues && resolutionMetrics) {
    md += `## Resolution Metrics

> **Note:** Closure reasons are *inferred* from labels, comment patterns, and issue metadata.
> GitHub does not provide explicit closure reasons, so these are best-effort heuristics.

| Metric | Value |
|--------|-------|
| Resolution Rate | ${resolutionMetrics.resolutionRate}% (${totalClosed}/${totalAll}) |
| Avg Time to Close (calendar) | ${resolutionMetrics.avgCalendarDays} days |
| Avg Time to Close (business) | ${resolutionMetrics.avgBusinessDays} days |
| Median Time to Close (calendar) | ${resolutionMetrics.medianCalendarDays} days |
| Median Time to Close (business) | ${resolutionMetrics.medianBusinessDays} days |
| 90th Percentile (calendar) | ${resolutionMetrics.p90CalendarDays} days |
| 90th Percentile (business) | ${resolutionMetrics.p90BusinessDays} days |
| Resolved within 30 days | ${resolutionMetrics.resolved30d}% |
| Resolved within 90 days | ${resolutionMetrics.resolved90d}% |

### Closure Reasons (Inferred)

| Reason | Count | % |
|--------|-------|---|
| Fixed (bugs) | ${closureReasons.fixed} | ${Math.round(closureReasons.fixed/totalClosed*100)}% |
| Completed (features) | ${closureReasons.completed} | ${Math.round(closureReasons.completed/totalClosed*100)}% |
| Self-resolved | ${closureReasons.self_resolved} | ${Math.round(closureReasons.self_resolved/totalClosed*100)}% |
| Duplicate | ${closureReasons.duplicate} | ${Math.round(closureReasons.duplicate/totalClosed*100)}% |
| Won't Fix | ${closureReasons.wontfix} | ${Math.round(closureReasons.wontfix/totalClosed*100)}% |
| Stale/Inactive | ${closureReasons.stale} | ${Math.round(closureReasons.stale/totalClosed*100)}% |
| Invalid | ${closureReasons.invalid} | ${Math.round(closureReasons.invalid/totalClosed*100)}% |
| Other | ${closureReasons.closed} | ${Math.round(closureReasons.closed/totalClosed*100)}% |

---
`;
  }

  // Velocity Section
  if (velocity && velocity.length > 0) {
    md += `## Issue Velocity (Last 12 Months)

| Month | Opened | Closed | Net Change |
|-------|--------|--------|------------|
`;
    for (const v of velocity) {
      const netSign = v.net > 0 ? '+' : '';
      md += `| ${v.month} | ${v.opened} | ${v.closed} | ${netSign}${v.net} |\n`;
    }

    const totalOpened12m = velocity.reduce((sum, v) => sum + v.opened, 0);
    const totalClosed12m = velocity.reduce((sum, v) => sum + v.closed, 0);
    const netChange12m = totalOpened12m - totalClosed12m;
    const netSign = netChange12m > 0 ? '+' : '';

    md += `| **Total** | **${totalOpened12m}** | **${totalClosed12m}** | **${netSign}${netChange12m}** |

`;
    if (netChange12m > 0) {
      md += `📈 **Backlog Growing:** ${netChange12m} more issues opened than closed in the last 12 months.\n\n`;
    } else if (netChange12m < 0) {
      md += `📉 **Backlog Shrinking:** ${Math.abs(netChange12m)} more issues closed than opened in the last 12 months.\n\n`;
    } else {
      md += `⚖️ **Backlog Stable:** Equal issues opened and closed in the last 12 months.\n\n`;
    }
    md += `---
`;
  }

  // 6-Month Detailed Analysis
  if (sixMonthAnalysis) {
    md += `## Last 6 Months: Detailed Analysis

### Overview

| Metric | Value |
|--------|-------|
| Issues Opened | ${sixMonthAnalysis.opened} |
| Issues Closed | ${sixMonthAnalysis.closed} |
| Net Change | ${sixMonthAnalysis.netChange > 0 ? '+' : ''}${sixMonthAnalysis.netChange} |
| Bugs Closed | ${sixMonthAnalysis.bugsClosed} |
| Enhancements Closed | ${sixMonthAnalysis.enhancementsClosed} |

### Time to Close (Last 6 Months)

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average | ${sixMonthAnalysis.ttc.avgCalendar} | ${sixMonthAnalysis.ttc.avgBusiness} |
| Median | ${sixMonthAnalysis.ttc.medianCalendar} | ${sixMonthAnalysis.ttc.medianBusiness} |
| 90th Percentile | ${sixMonthAnalysis.ttc.p90Calendar} | ${sixMonthAnalysis.ttc.p90Business} |

### Resolution Speed (Last 6 Months)

| Timeframe | % Resolved |
|-----------|------------|
| Within 30 days | ${sixMonthAnalysis.resolutionRate30d}% |
| Within 90 days | ${sixMonthAnalysis.resolutionRate90d}% |

`;

    if (sixMonthAnalysis.upvotedAndResolved.length > 0) {
      md += `### Popular Requests Resolved (3+ upvotes)

| Issue | 👍 | Title |
|-------|-----|-------|
`;
      sixMonthAnalysis.upvotedAndResolved.slice(0, 15).forEach(issue => {
        md += `| [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.title.substring(0, 55)}${issue.title.length > 55 ? '...' : ''} |\n`;
      });
      if (sixMonthAnalysis.upvotedAndResolved.length > 15) {
        md += `\n*...and ${sixMonthAnalysis.upvotedAndResolved.length - 15} more*\n`;
      }
    }
    md += `
---
`;
  }

  // Age Distribution
  md += `## Age Distribution (Open Issues)

| Age | Count | % |
|-----|-------|---|
| Last 30 days | ${ageDistribution.last_30_days} | ${totalOpen > 0 ? Math.round(ageDistribution.last_30_days/totalOpen*100) : 0}% |
| 1-3 months | ${ageDistribution['1_3_months']} | ${totalOpen > 0 ? Math.round(ageDistribution['1_3_months']/totalOpen*100) : 0}% |
| 3-6 months | ${ageDistribution['3_6_months']} | ${totalOpen > 0 ? Math.round(ageDistribution['3_6_months']/totalOpen*100) : 0}% |
| 6-12 months | ${ageDistribution['6_12_months']} | ${totalOpen > 0 ? Math.round(ageDistribution['6_12_months']/totalOpen*100) : 0}% |
| 1-2 years | ${ageDistribution['1_2_years']} | ${totalOpen > 0 ? Math.round(ageDistribution['1_2_years']/totalOpen*100) : 0}% |
| 2-3 years | ${ageDistribution['2_3_years']} | ${totalOpen > 0 ? Math.round(ageDistribution['2_3_years']/totalOpen*100) : 0}% |
| 3+ years | ${ageDistribution['3_plus_years']} | ${totalOpen > 0 ? Math.round(ageDistribution['3_plus_years']/totalOpen*100) : 0}% |

---

## Top Issues by Upvotes (Open)

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
`;

  topByUpvotes.forEach((issue, idx) => {
    md += `| ${idx + 1} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 60)}${issue.title.length > 60 ? '...' : ''} |\n`;
  });

  md += `
---

## Top Issues by Priority Score (Open)

Priority = Upvotes × 2 + Comments

| Rank | Issue | Score | 👍 | 💬 | Title |
|------|-------|-------|-----|-----|-------|
`;

  topByPriority.forEach((issue, idx) => {
    md += `| ${idx + 1} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.priority} | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Top Issues by Comments (Open)

| Rank | Issue | 💬 | 👍 | Title |
|------|-------|-----|-----|-------|
`;

  topByComments.forEach((issue, idx) => {
    md += `| ${idx + 1} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.commentCount || issue.comments || 0} | ${issue.upvotes || 0} | ${issue.title.substring(0, 60)}${issue.title.length > 60 ? '...' : ''} |\n`;
  });

  md += `
---

## Recent Issues (Last 30 Days)

`;

  if (recentIssues.length === 0) {
    md += `No issues created in the last 30 days.\n`;
  } else {
    md += `| Date | Issue | 👍 | Title |
|------|-------|-----|-------|
`;
    recentIssues.forEach(issue => {
      const date = new Date(issue.createdAt).toISOString().split('T')[0];
      md += `| ${date} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.title.substring(0, 60)}${issue.title.length > 60 ? '...' : ''} |\n`;
    });
  }

  md += `
---

## Label Distribution (Open Issues)

| Label | Count |
|-------|-------|
`;

  labelDistribution.forEach(([label, count]) => {
    md += `| ${label} | ${count} |\n`;
  });

  md += `
---

## Bugs (${bugs.length} open issues)

`;

  if (bugs.length === 0) {
    md += `No open issues labeled as bugs.\n`;
  } else {
    const sortedBugs = [...bugs].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    md += `| Issue | 👍 | 💬 | Title |
|-------|-----|-----|-------|
`;
    sortedBugs.slice(0, 30).forEach(issue => {
      md += `| [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 60)}${issue.title.length > 60 ? '...' : ''} |\n`;
    });
    if (bugs.length > 30) {
      md += `\n*...and ${bugs.length - 30} more bugs*\n`;
    }
  }

  md += `
---

## Stale Issues (${staleIssues.length} open issues with no activity >12 months)

Top stale issues by upvotes:

`;

  const sortedStale = [...staleIssues].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  if (sortedStale.length === 0) {
    md += `No stale issues.\n`;
  } else {
    md += `| Issue | 👍 | Last Updated | Title |
|-------|-----|--------------|-------|
`;
    sortedStale.slice(0, 20).forEach(issue => {
      const updated = new Date(issue.updatedAt).toISOString().split('T')[0];
      md += `| [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${updated} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
    });
    if (staleIssues.length > 20) {
      md += `\n*...and ${staleIssues.length - 20} more stale issues*\n`;
    }
  }

  return md;
}

// =============================================================================
// Main
// =============================================================================

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage:');
    console.log('  node scripts/generate-stats.js <repo-dir-name>   # Single repo');
    console.log('  node scripts/generate-stats.js --all             # All repos');
    console.log('');
    console.log('Available repos:');
    getTrackedRepos().forEach(repo => console.log(`  ${repo}`));
    process.exit(1);
  }

  if (!fs.existsSync(analysisDir)) {
    fs.mkdirSync(analysisDir, { recursive: true });
  }

  let repos = [];
  if (args[0] === '--all') {
    repos = getTrackedRepos();
  } else {
    repos = [args[0]];
    if (!fs.existsSync(path.join(reposDir, args[0], 'issues-index.json'))) {
      console.error(`Error: Repository '${args[0]}' not found or not indexed.`);
      process.exit(1);
    }
  }

  const allSdkNames = getTrackedRepos().map(r => SDK_NAMES[r] || r);

  for (const repo of repos) {
    const sdkName = SDK_NAMES[repo] || repo;
    const outputPath = path.join(analysisDir, `stats-${sdkName}.md`);

    console.log(`Generating statistics for ${repo}...`);
    const stats = generateRepoStats(repo, allSdkNames);
    fs.writeFileSync(outputPath, stats);
    console.log(`  Written: ${outputPath}`);
  }

  console.log('\nDone!');
}

main();
