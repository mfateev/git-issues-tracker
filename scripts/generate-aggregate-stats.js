#!/usr/bin/env node

/**
 * Generate aggregated statistics across all repositories
 * Includes resolution metrics, velocity trends, and cross-repo comparisons
 *
 * Usage:
 *   node scripts/generate-aggregate-stats.js
 *
 * Output:
 *   analysis/stats-all.md
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
  'temporalio-sdk-ruby': 'ruby'
};

const SDK_DISPLAY_NAMES = {
  'server': 'Server',
  'features': 'Features',
  'java': 'Java SDK',
  'go': 'Go SDK',
  'typescript': 'TypeScript SDK',
  'python': 'Python SDK',
  'dotnet': '.NET SDK',
  'php': 'PHP SDK',
  'ruby': 'Ruby SDK'
};

// =============================================================================
// Helper Functions
// =============================================================================

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

function categorizeByLabel(issues, labelPattern) {
  return issues.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes(labelPattern.toLowerCase()))
  );
}

function getStaleIssues(issues, monthsThreshold = 12) {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - monthsThreshold);
  return issues.filter(i => new Date(i.updatedAt) < cutoff);
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
// Velocity Calculations
// =============================================================================

function getMonthlyVelocity(allIssues, months = 12) {
  const now = new Date();
  const velocity = [];

  for (let i = 0; i < months; i++) {
    const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
    const monthLabel = monthStart.toISOString().substring(0, 7);

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

// =============================================================================
// Main
// =============================================================================

function main() {
  const repos = getTrackedRepos();
  const now = new Date();

  // Collect per-repo stats
  const repoStats = [];
  const allIssues = [];
  const allOpenIssues = [];
  const allClosedIssues = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = index.issues || [];
    const sdkName = SDK_NAMES[repo] || repo;

    const openIssues = issues.filter(i => i.state === 'OPEN');
    const closedIssues = issues.filter(i => i.state === 'CLOSED');

    const bugs = categorizeByLabel(openIssues, 'bug');
    const enhancements = categorizeByLabel(openIssues, 'enhancement').concat(
      categorizeByLabel(openIssues, 'feature')
    );
    const totalUpvotes = openIssues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
    const totalComments = openIssues.reduce((sum, i) => sum + (i.commentCount || i.comments || 0), 0);
    const staleIssues = getStaleIssues(openIssues, 12);
    const avgAgeDays = openIssues.length > 0
      ? Math.round(openIssues.reduce((sum, i) => {
          return sum + (now - new Date(i.createdAt)) / (1000 * 60 * 60 * 24);
        }, 0) / openIssues.length)
      : 0;

    // Resolution metrics
    let resolutionRate = 0;
    let medianTTC = 0;
    let avgTTC = 0;
    let resolved30d = 0;
    let resolved90d = 0;

    if (closedIssues.length > 0) {
      resolutionRate = Math.round(closedIssues.length / issues.length * 100);
      const ttcValues = closedIssues
        .map(i => calculateTimeToClose(i))
        .filter(t => t !== null)
        .map(t => t.calendarDays);
      medianTTC = getMedian(ttcValues);
      avgTTC = getAverage(ttcValues);
      resolved30d = getResolutionWithinDays(closedIssues, 30);
      resolved90d = getResolutionWithinDays(closedIssues, 90);
    }

    repoStats.push({
      repo,
      sdkName,
      displayName: SDK_DISPLAY_NAMES[sdkName] || sdkName,
      totalOpen: openIssues.length,
      totalClosed: closedIssues.length,
      totalAll: issues.length,
      bugs: bugs.length,
      enhancements: enhancements.length,
      totalUpvotes,
      totalComments,
      staleCount: staleIssues.length,
      avgAgeDays,
      resolutionRate,
      medianTTC,
      avgTTC,
      resolved30d,
      resolved90d
    });

    // Add repo context to issues for cross-repo analysis
    for (const issue of issues) {
      allIssues.push({ ...issue, repo, sdkName });
      if (issue.state === 'OPEN') {
        allOpenIssues.push({ ...issue, repo, sdkName });
      } else {
        allClosedIssues.push({ ...issue, repo, sdkName });
      }
    }
  }

  // Aggregate stats
  const totalOpen = repoStats.reduce((sum, r) => sum + r.totalOpen, 0);
  const totalClosed = repoStats.reduce((sum, r) => sum + r.totalClosed, 0);
  const totalAll = repoStats.reduce((sum, r) => sum + r.totalAll, 0);
  const totalBugs = repoStats.reduce((sum, r) => sum + r.bugs, 0);
  const totalEnhancements = repoStats.reduce((sum, r) => sum + r.enhancements, 0);
  const totalUpvotes = repoStats.reduce((sum, r) => sum + r.totalUpvotes, 0);
  const totalComments = repoStats.reduce((sum, r) => sum + r.totalComments, 0);
  const totalStale = repoStats.reduce((sum, r) => sum + r.staleCount, 0);

  // Global resolution metrics
  const globalTTC = allClosedIssues
    .map(i => calculateTimeToClose(i))
    .filter(t => t !== null)
    .map(t => t.calendarDays);
  const globalMedianTTC = getMedian(globalTTC);
  const globalAvgTTC = getAverage(globalTTC);
  const globalResolved30d = getResolutionWithinDays(allClosedIssues, 30);
  const globalResolved90d = getResolutionWithinDays(allClosedIssues, 90);

  // Global velocity
  const globalVelocity = getMonthlyVelocity(allIssues, 12);

  // Top issues across all repos (open only)
  const topByUpvotes = [...allOpenIssues]
    .filter(i => (i.upvotes || 0) > 0)
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 25);

  const topByPriority = [...allOpenIssues]
    .map(i => ({ ...i, priority: (i.upvotes || 0) * 2 + (i.commentCount || i.comments || 0) }))
    .filter(i => i.priority > 0)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 25);

  // Top bugs across all repos (open only)
  const allBugs = allOpenIssues.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes('bug'))
  );
  const topBugs = [...allBugs]
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 20);

  // Recent issues across all repos
  const cutoff30Days = new Date();
  cutoff30Days.setDate(cutoff30Days.getDate() - 30);
  const recentIssues = allOpenIssues
    .filter(i => new Date(i.createdAt) > cutoff30Days)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Recently resolved popular requests (last 6 months, 3+ upvotes)
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const recentlyResolved = allClosedIssues
    .filter(i => i.closedAt && new Date(i.closedAt) >= sixMonthsAgo && (i.upvotes || 0) >= 3)
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 20);

  // Label distribution across all repos (open only)
  const labelCounts = {};
  for (const issue of allOpenIssues) {
    for (const label of issue.labels || []) {
      const normalized = label.toLowerCase();
      labelCounts[normalized] = (labelCounts[normalized] || 0) + 1;
    }
  }
  const topLabels = Object.entries(labelCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25);

  // Generate markdown
  let md = `# Cross-Repository Issue Statistics

**Generated:** ${now.toISOString().split('T')[0]}
**Total Repositories:** ${repos.length}
**Total Open Issues:** ${totalOpen}
**Total Closed Issues:** ${totalClosed}
**Total All Issues:** ${totalAll}

## Related Documents

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](stats-recent.md)

**Per-SDK Statistics:** [Server](stats-server.md) · [Features](stats-features.md) · [Java](stats-java.md) · [Go](stats-go.md) · [TypeScript](stats-typescript.md) · [Python](stats-python.md) · [.NET](stats-dotnet.md) · [PHP](stats-php.md) · [Ruby](stats-ruby.md) · [API](stats-temporalio-api.md)

---

## Aggregate Summary

| Metric | Value |
|--------|-------|
| Total Open Issues | ${totalOpen} |
| Total Closed Issues | ${totalClosed} |
| Total All Issues | ${totalAll} |
| Overall Resolution Rate | ${totalAll > 0 ? Math.round(totalClosed/totalAll*100) : 0}% |
| Total Bugs (open) | ${totalBugs} |
| Total Enhancements (open) | ${totalEnhancements} |
| Total Upvotes (👍) on open | ${totalUpvotes} |
| Total Comments on open | ${totalComments} |
| Total Stale Issues (>12 months) | ${totalStale} (${totalOpen > 0 ? Math.round(totalStale/totalOpen*100) : 0}%) |

---

## Global Resolution Metrics

> **Note:** Closure reasons are *inferred* from labels and metadata. These are heuristics, not explicit GitHub data.

| Metric | Value |
|--------|-------|
| Median Time to Close | ${globalMedianTTC} days |
| Average Time to Close | ${globalAvgTTC} days |
| Resolved within 30 days | ${globalResolved30d}% |
| Resolved within 90 days | ${globalResolved90d}% |

---

## Resolution Leaderboard

Repositories ranked by resolution metrics:

### By Resolution Rate

| Rank | Repository | Resolution Rate | Open | Closed |
|------|------------|-----------------|------|--------|
`;

  const byResolution = [...repoStats]
    .filter(r => r.totalAll > 0)
    .sort((a, b) => b.resolutionRate - a.resolutionRate);

  byResolution.forEach((r, idx) => {
    md += `| ${idx + 1} | [${r.displayName}](stats-${r.sdkName}.md) | ${r.resolutionRate}% | ${r.totalOpen} | ${r.totalClosed} |\n`;
  });

  md += `
### By Median Time to Close (Fastest First)

| Rank | Repository | Median TTC | Avg TTC | Resolved <30d |
|------|------------|------------|---------|---------------|
`;

  const byTTC = [...repoStats]
    .filter(r => r.totalClosed > 0)
    .sort((a, b) => a.medianTTC - b.medianTTC);

  byTTC.forEach((r, idx) => {
    md += `| ${idx + 1} | [${r.displayName}](stats-${r.sdkName}.md) | ${r.medianTTC}d | ${r.avgTTC}d | ${r.resolved30d}% |\n`;
  });

  md += `
---

## Issue Velocity (Last 12 Months - All Repos)

| Month | Opened | Closed | Net Change |
|-------|--------|--------|------------|
`;

  for (const v of globalVelocity) {
    const netSign = v.net > 0 ? '+' : '';
    md += `| ${v.month} | ${v.opened} | ${v.closed} | ${netSign}${v.net} |\n`;
  }

  const totalOpened12m = globalVelocity.reduce((sum, v) => sum + v.opened, 0);
  const totalClosed12m = globalVelocity.reduce((sum, v) => sum + v.closed, 0);
  const netChange12m = totalOpened12m - totalClosed12m;
  const netSign = netChange12m > 0 ? '+' : '';

  md += `| **Total** | **${totalOpened12m}** | **${totalClosed12m}** | **${netSign}${netChange12m}** |

`;

  if (netChange12m > 0) {
    md += `📈 **Backlog Growing:** ${netChange12m} more issues opened than closed across all repos in the last 12 months.\n\n`;
  } else if (netChange12m < 0) {
    md += `📉 **Backlog Shrinking:** ${Math.abs(netChange12m)} more issues closed than opened across all repos in the last 12 months.\n\n`;
  } else {
    md += `⚖️ **Backlog Stable:** Equal issues opened and closed across all repos in the last 12 months.\n\n`;
  }

  md += `---

## Per-Repository Summary

| Repository | Open | Closed | Rate | Bugs | Enh. | 👍 | 💬 | Stale | Median TTC |
|------------|------|--------|------|------|------|-----|-----|-------|------------|
`;

  // Sort by open issue count descending
  const sortedRepos = [...repoStats].sort((a, b) => b.totalOpen - a.totalOpen);
  for (const r of sortedRepos) {
    md += `| [${r.displayName}](stats-${r.sdkName}.md) | ${r.totalOpen} | ${r.totalClosed} | ${r.resolutionRate}% | ${r.bugs} | ${r.enhancements} | ${r.totalUpvotes} | ${r.totalComments} | ${r.staleCount} | ${r.medianTTC}d |\n`;
  }

  md += `| **Total** | **${totalOpen}** | **${totalClosed}** | **${totalAll > 0 ? Math.round(totalClosed/totalAll*100) : 0}%** | **${totalBugs}** | **${totalEnhancements}** | **${totalUpvotes}** | **${totalComments}** | **${totalStale}** | **${globalMedianTTC}d** |

---

## Recently Resolved Popular Requests (Last 6 Months, 3+ 👍)

| Repo | Issue | 👍 | Title |
|------|-------|-----|-------|
`;

  if (recentlyResolved.length === 0) {
    md += `| *No popular requests resolved in the last 6 months* | | | |\n`;
  } else {
    recentlyResolved.forEach(issue => {
      const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
      md += `| ${displayName} | [#${issue.number}](https://github.com/temporalio/${issue.repo.replace('temporalio-', '')}/issues/${issue.number}) | ${issue.upvotes || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
    });
  }

  md += `
---

## Top 25 Open Issues by Upvotes (All Repos)

| Rank | Repo | Issue | 👍 | 💬 | Title |
|------|------|-------|-----|-----|-------|
`;

  topByUpvotes.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](https://github.com/temporalio/${issue.repo.replace('temporalio-', '')}/issues/${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Top 25 Open Issues by Priority Score (All Repos)

Priority = Upvotes × 2 + Comments

| Rank | Repo | Issue | Score | 👍 | 💬 | Title |
|------|------|-------|-------|-----|-----|-------|
`;

  topByPriority.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](https://github.com/temporalio/${issue.repo.replace('temporalio-', '')}/issues/${issue.number}) | ${issue.priority} | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 45)}${issue.title.length > 45 ? '...' : ''} |\n`;
  });

  md += `
---

## Top 20 Open Bugs by Upvotes (All Repos)

| Rank | Repo | Issue | 👍 | 💬 | Title |
|------|------|-------|-----|-----|-------|
`;

  topBugs.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](https://github.com/temporalio/${issue.repo.replace('temporalio-', '')}/issues/${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Recent Open Issues (Last 30 Days) - ${recentIssues.length} total

| Date | Repo | Issue | 👍 | Title |
|------|------|-------|-----|-------|
`;

  recentIssues.slice(0, 50).forEach(issue => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    const date = new Date(issue.createdAt).toISOString().split('T')[0];
    md += `| ${date} | ${displayName} | [#${issue.number}](https://github.com/temporalio/${issue.repo.replace('temporalio-', '')}/issues/${issue.number}) | ${issue.upvotes || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  if (recentIssues.length > 50) {
    md += `\n*...and ${recentIssues.length - 50} more recent issues*\n`;
  }

  md += `
---

## Label Distribution (All Open Issues)

| Label | Count | % of Open Issues |
|-------|-------|------------------|
`;

  topLabels.forEach(([label, count]) => {
    md += `| ${label} | ${count} | ${Math.round(count/totalOpen*100)}% |\n`;
  });

  md += `
---

## Engagement by Repository

| Repository | Upvotes | Comments | Engagement Score | Stale % |
|------------|---------|----------|------------------|---------|
`;

  const byEngagement = [...repoStats].sort((a, b) =>
    (b.totalUpvotes + b.totalComments) - (a.totalUpvotes + a.totalComments)
  );

  for (const r of byEngagement) {
    const engagement = r.totalUpvotes * 2 + r.totalComments;
    const stalePercent = r.totalOpen > 0 ? Math.round(r.staleCount / r.totalOpen * 100) : 0;
    md += `| ${r.displayName} | ${r.totalUpvotes} | ${r.totalComments} | ${engagement} | ${stalePercent}% |\n`;
  }

  md += `
---

## Issue Age by Repository (Open Issues)

| Repository | Avg Age (days) | 3+ Years | 1-3 Years | <1 Year |
|------------|----------------|----------|-----------|---------|
`;

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = (index.issues || []).filter(i => i.state === 'OPEN');
    const sdkName = SDK_NAMES[repo] || repo;
    const displayName = SDK_DISPLAY_NAMES[sdkName] || sdkName;

    let under1y = 0, y1to3 = 0, over3y = 0;
    let totalAge = 0;

    for (const issue of issues) {
      const ageDays = (now - new Date(issue.createdAt)) / (1000 * 60 * 60 * 24);
      totalAge += ageDays;
      if (ageDays < 365) under1y++;
      else if (ageDays < 1095) y1to3++;
      else over3y++;
    }

    const avgAge = issues.length > 0 ? Math.round(totalAge / issues.length) : 0;
    md += `| ${displayName} | ${avgAge} | ${over3y} | ${y1to3} | ${under1y} |\n`;
  }

  // Write output
  const outputPath = path.join(analysisDir, 'stats-all.md');
  fs.writeFileSync(outputPath, md);
  console.log(`Generated: ${outputPath}`);
  console.log(`\nSummary:`);
  console.log(`  Total open issues: ${totalOpen}`);
  console.log(`  Total closed issues: ${totalClosed}`);
  console.log(`  Overall resolution rate: ${totalAll > 0 ? Math.round(totalClosed/totalAll*100) : 0}%`);
  console.log(`  Global median TTC: ${globalMedianTTC} days`);
  console.log(`  Total upvotes: ${totalUpvotes}`);
  console.log(`  Total comments: ${totalComments}`);
  console.log(`  Stale issues: ${totalStale} (${totalOpen > 0 ? Math.round(totalStale/totalOpen*100) : 0}%)`);
}

main();
