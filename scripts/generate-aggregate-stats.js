#!/usr/bin/env node

/**
 * Generate aggregated statistics across all repositories
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

function main() {
  const repos = getTrackedRepos();
  const now = new Date();

  // Collect per-repo stats
  const repoStats = [];
  const allIssues = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = index.issues || [];
    const sdkName = SDK_NAMES[repo] || repo;

    const bugs = categorizeByLabel(issues, 'bug');
    const enhancements = categorizeByLabel(issues, 'enhancement').concat(
      categorizeByLabel(issues, 'feature')
    );
    const totalUpvotes = issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
    const totalComments = issues.reduce((sum, i) => sum + (i.commentCount || i.comments || 0), 0);
    const staleIssues = getStaleIssues(issues, 12);
    const avgAgeDays = issues.length > 0
      ? Math.round(issues.reduce((sum, i) => {
          return sum + (now - new Date(i.createdAt)) / (1000 * 60 * 60 * 24);
        }, 0) / issues.length)
      : 0;

    repoStats.push({
      repo,
      sdkName,
      displayName: SDK_DISPLAY_NAMES[sdkName] || sdkName,
      totalIssues: issues.length,
      bugs: bugs.length,
      enhancements: enhancements.length,
      totalUpvotes,
      totalComments,
      staleCount: staleIssues.length,
      avgAgeDays
    });

    // Add repo context to issues for cross-repo analysis
    for (const issue of issues) {
      allIssues.push({ ...issue, repo, sdkName });
    }
  }

  // Aggregate stats
  const totalIssues = repoStats.reduce((sum, r) => sum + r.totalIssues, 0);
  const totalBugs = repoStats.reduce((sum, r) => sum + r.bugs, 0);
  const totalEnhancements = repoStats.reduce((sum, r) => sum + r.enhancements, 0);
  const totalUpvotes = repoStats.reduce((sum, r) => sum + r.totalUpvotes, 0);
  const totalComments = repoStats.reduce((sum, r) => sum + r.totalComments, 0);
  const totalStale = repoStats.reduce((sum, r) => sum + r.staleCount, 0);

  // Top issues across all repos
  const topByUpvotes = [...allIssues]
    .filter(i => (i.upvotes || 0) > 0)
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 25);

  const topByPriority = [...allIssues]
    .map(i => ({ ...i, priority: (i.upvotes || 0) * 2 + (i.commentCount || i.comments || 0) }))
    .filter(i => i.priority > 0)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 25);

  // Top bugs across all repos
  const allBugs = allIssues.filter(i =>
    i.labels?.some(l => l.toLowerCase().includes('bug'))
  );
  const topBugs = [...allBugs]
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 20);

  // Recent issues across all repos
  const cutoff30Days = new Date();
  cutoff30Days.setDate(cutoff30Days.getDate() - 30);
  const recentIssues = allIssues
    .filter(i => new Date(i.createdAt) > cutoff30Days)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Label distribution across all repos
  const labelCounts = {};
  for (const issue of allIssues) {
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
**Total Open Issues:** ${totalIssues}

---

## Aggregate Summary

| Metric | Value |
|--------|-------|
| Total Open Issues | ${totalIssues} |
| Total Bugs | ${totalBugs} |
| Total Enhancements/Features | ${totalEnhancements} |
| Total Upvotes (👍) | ${totalUpvotes} |
| Total Comments | ${totalComments} |
| Total Stale Issues (>12 months) | ${totalStale} (${Math.round(totalStale/totalIssues*100)}%) |

---

## Per-Repository Summary

| Repository | Issues | Bugs | Enhancements | 👍 | 💬 | Stale | Avg Age |
|------------|--------|------|--------------|-----|-----|-------|---------|
`;

  // Sort by issue count descending
  const sortedRepos = [...repoStats].sort((a, b) => b.totalIssues - a.totalIssues);
  for (const r of sortedRepos) {
    md += `| [${r.displayName}](stats-${r.sdkName}.md) | ${r.totalIssues} | ${r.bugs} | ${r.enhancements} | ${r.totalUpvotes} | ${r.totalComments} | ${r.staleCount} | ${r.avgAgeDays}d |\n`;
  }

  md += `| **Total** | **${totalIssues}** | **${totalBugs}** | **${totalEnhancements}** | **${totalUpvotes}** | **${totalComments}** | **${totalStale}** | |

---

## Top 25 Issues by Upvotes (All Repos)

| Rank | Repo | Issue | 👍 | 💬 | Title |
|------|------|-------|-----|-----|-------|
`;

  topByUpvotes.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](../repos/${issue.repo}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Top 25 Issues by Priority Score (All Repos)

Priority = Upvotes × 2 + Comments

| Rank | Repo | Issue | Score | 👍 | 💬 | Title |
|------|------|-------|-------|-----|-----|-------|
`;

  topByPriority.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](../repos/${issue.repo}/issues.md#${issue.number}) | ${issue.priority} | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 45)}${issue.title.length > 45 ? '...' : ''} |\n`;
  });

  md += `
---

## Top 20 Bugs by Upvotes (All Repos)

| Rank | Repo | Issue | 👍 | 💬 | Title |
|------|------|-------|-----|-----|-------|
`;

  topBugs.forEach((issue, idx) => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    md += `| ${idx + 1} | ${displayName} | [#${issue.number}](../repos/${issue.repo}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Recent Issues (Last 30 Days) - ${recentIssues.length} total

| Date | Repo | Issue | 👍 | Title |
|------|------|-------|-----|-------|
`;

  recentIssues.slice(0, 50).forEach(issue => {
    const displayName = SDK_DISPLAY_NAMES[issue.sdkName] || issue.sdkName;
    const date = new Date(issue.createdAt).toISOString().split('T')[0];
    md += `| ${date} | ${displayName} | [#${issue.number}](../repos/${issue.repo}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  if (recentIssues.length > 50) {
    md += `\n*...and ${recentIssues.length - 50} more recent issues*\n`;
  }

  md += `
---

## Label Distribution (All Repos)

| Label | Count | % of Issues |
|-------|-------|-------------|
`;

  topLabels.forEach(([label, count]) => {
    md += `| ${label} | ${count} | ${Math.round(count/totalIssues*100)}% |\n`;
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
    const stalePercent = r.totalIssues > 0 ? Math.round(r.staleCount / r.totalIssues * 100) : 0;
    md += `| ${r.displayName} | ${r.totalUpvotes} | ${r.totalComments} | ${engagement} | ${stalePercent}% |\n`;
  }

  md += `
---

## Issue Age by Repository

| Repository | Avg Age (days) | 3+ Years | 1-3 Years | <1 Year |
|------------|----------------|----------|-----------|---------|
`;

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = index.issues || [];
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
  console.log(`  Total issues: ${totalIssues}`);
  console.log(`  Total upvotes: ${totalUpvotes}`);
  console.log(`  Total comments: ${totalComments}`);
  console.log(`  Stale issues: ${totalStale} (${Math.round(totalStale/totalIssues*100)}%)`);
}

main();
