#!/usr/bin/env node

/**
 * Generate statistics for a single repository or all repositories
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
  'temporalio-sdk-ruby': 'ruby'
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
    const ageMs = now - created;
    const ageDays = ageMs / (1000 * 60 * 60 * 24);

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

function generateRepoStats(repoName) {
  const index = loadIndex(repoName);
  const issues = index.issues || [];
  const sdkName = SDK_NAMES[repoName] || repoName;
  const now = new Date();

  // Basic counts
  const totalIssues = issues.length;
  const bugs = categorizeByLabel(issues, 'bug');
  const enhancements = categorizeByLabel(issues, 'enhancement').concat(
    categorizeByLabel(issues, 'feature')
  );
  const security = categorizeByLabel(issues, 'security');

  // Engagement
  const totalUpvotes = issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
  const totalComments = issues.reduce((sum, i) => sum + (i.commentCount || i.comments || 0), 0);
  const issuesWithUpvotes = issues.filter(i => (i.upvotes || 0) > 0).length;
  const issuesWithComments = issues.filter(i => (i.commentCount || i.comments || 0) > 0).length;

  // Age
  const ageDistribution = getAgeDistribution(issues);
  const staleIssues = getStaleIssues(issues, 12);
  const avgAgeDays = issues.length > 0
    ? Math.round(issues.reduce((sum, i) => {
        return sum + (now - new Date(i.createdAt)) / (1000 * 60 * 60 * 24);
      }, 0) / issues.length)
    : 0;

  // Top issues
  const topByUpvotes = getTopByUpvotes(issues, 15);
  const topByPriority = getTopByPriority(issues, 15);
  const topByComments = getTopByComments(issues, 10);
  const recentIssues = getRecentIssues(issues, 30);

  // Label distribution
  const labelDistribution = getLabelDistribution(issues);

  // Generate markdown
  let md = `# ${sdkName.charAt(0).toUpperCase() + sdkName.slice(1)} SDK - Issue Statistics

**Generated:** ${now.toISOString().split('T')[0]}
**Repository:** ${repoName.replace('-', '/')}
**Data Source:** [issues.md](../repos/${repoName}/issues.md)

---

## Summary

| Metric | Value |
|--------|-------|
| Total Open Issues | ${totalIssues} |
| Bugs | ${bugs.length} |
| Enhancements/Features | ${enhancements.length} |
| Security Issues | ${security.length} |
| Total Upvotes (👍) | ${totalUpvotes} |
| Total Comments | ${totalComments} |
| Issues with Upvotes | ${issuesWithUpvotes} (${Math.round(issuesWithUpvotes/totalIssues*100)}%) |
| Issues with Comments | ${issuesWithComments} (${Math.round(issuesWithComments/totalIssues*100)}%) |
| Average Age (days) | ${avgAgeDays} |
| Stale Issues (>12 months) | ${staleIssues.length} (${Math.round(staleIssues.length/totalIssues*100)}%) |

---

## Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | ${ageDistribution.last_30_days} | ${Math.round(ageDistribution.last_30_days/totalIssues*100)}% |
| 1-3 months | ${ageDistribution['1_3_months']} | ${Math.round(ageDistribution['1_3_months']/totalIssues*100)}% |
| 3-6 months | ${ageDistribution['3_6_months']} | ${Math.round(ageDistribution['3_6_months']/totalIssues*100)}% |
| 6-12 months | ${ageDistribution['6_12_months']} | ${Math.round(ageDistribution['6_12_months']/totalIssues*100)}% |
| 1-2 years | ${ageDistribution['1_2_years']} | ${Math.round(ageDistribution['1_2_years']/totalIssues*100)}% |
| 2-3 years | ${ageDistribution['2_3_years']} | ${Math.round(ageDistribution['2_3_years']/totalIssues*100)}% |
| 3+ years | ${ageDistribution['3_plus_years']} | ${Math.round(ageDistribution['3_plus_years']/totalIssues*100)}% |

---

## Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
`;

  topByUpvotes.forEach((issue, idx) => {
    md += `| ${idx + 1} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 60)}${issue.title.length > 60 ? '...' : ''} |\n`;
  });

  md += `
---

## Top Issues by Priority Score

Priority = Upvotes × 2 + Comments

| Rank | Issue | Score | 👍 | 💬 | Title |
|------|-------|-------|-----|-----|-------|
`;

  topByPriority.forEach((issue, idx) => {
    md += `| ${idx + 1} | [#${issue.number}](../repos/${repoName}/issues.md#${issue.number}) | ${issue.priority} | ${issue.upvotes || 0} | ${issue.commentCount || issue.comments || 0} | ${issue.title.substring(0, 50)}${issue.title.length > 50 ? '...' : ''} |\n`;
  });

  md += `
---

## Top Issues by Comments

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

## Label Distribution

| Label | Count |
|-------|-------|
`;

  labelDistribution.forEach(([label, count]) => {
    md += `| ${label} | ${count} |\n`;
  });

  md += `
---

## Bugs (${bugs.length} issues)

`;

  if (bugs.length === 0) {
    md += `No issues labeled as bugs.\n`;
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

## Stale Issues (${staleIssues.length} issues with no activity >12 months)

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

  // Ensure analysis directory exists
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

  for (const repo of repos) {
    const sdkName = SDK_NAMES[repo] || repo;
    const outputPath = path.join(analysisDir, `stats-${sdkName}.md`);

    console.log(`Generating statistics for ${repo}...`);
    const stats = generateRepoStats(repo);
    fs.writeFileSync(outputPath, stats);
    console.log(`  Written: ${outputPath}`);
  }

  console.log('\nDone!');
}

main();
