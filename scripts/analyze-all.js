#!/usr/bin/env node

/**
 * Analyze all tracked repositories and output combined statistics
 * Usage: node scripts/analyze-all.js [command]
 *
 * Commands:
 *   stats     - Basic statistics for all repos (default)
 *   priority  - Priority issues across all repos
 *   bugs      - Bugs across all repos
 *   recent    - Recently created issues
 *   stale     - Stale issues needing attention
 */

const fs = require('fs');
const path = require('path');

const reposDir = path.join(__dirname, '..', 'repos');

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

function formatRepoName(dirName) {
  // temporalio-sdk-java -> sdk-java
  // temporalio-temporal -> temporal
  // temporalio-features -> features
  return dirName.replace('temporalio-', '');
}

function analyzeStats() {
  const repos = getTrackedRepos();
  let totalIssues = 0;
  let totalUpvotes = 0;
  let totalBugs = 0;
  let totalFeatures = 0;

  console.log('Repository Statistics');
  console.log('='.repeat(80));
  console.log('');
  console.log('| Repository | Issues | Bugs | Features | Upvotes | Avg Age (days) |');
  console.log('|------------|--------|------|----------|---------|----------------|');

  const repoData = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = index.issues || [];
    const now = new Date();

    const bugs = issues.filter(i =>
      i.labels?.some(l => l.toLowerCase().includes('bug'))
    ).length;

    const features = issues.filter(i =>
      i.labels?.some(l => l.toLowerCase().includes('feature') || l.toLowerCase().includes('enhancement'))
    ).length;

    const upvotes = issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);

    const avgAge = issues.length > 0
      ? Math.round(issues.reduce((sum, i) => {
          const created = new Date(i.createdAt);
          return sum + (now - created) / (1000 * 60 * 60 * 24);
        }, 0) / issues.length)
      : 0;

    totalIssues += issues.length;
    totalUpvotes += upvotes;
    totalBugs += bugs;
    totalFeatures += features;

    repoData.push({ repo, issues: issues.length, bugs, features, upvotes, avgAge });

    const name = formatRepoName(repo);
    console.log(`| ${name.padEnd(10)} | ${String(issues.length).padStart(6)} | ${String(bugs).padStart(4)} | ${String(features).padStart(8)} | ${String(upvotes).padStart(7)} | ${String(avgAge).padStart(14)} |`);
  }

  console.log('|------------|--------|------|----------|---------|----------------|');
  console.log(`| **TOTAL**  | ${String(totalIssues).padStart(6)} | ${String(totalBugs).padStart(4)} | ${String(totalFeatures).padStart(8)} | ${String(totalUpvotes).padStart(7)} |                |`);
  console.log('');
}

function analyzePriority(limit = 20) {
  const repos = getTrackedRepos();
  const allIssues = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const issues = (index.issues || []).map(i => ({
      ...i,
      repo,
      priority: (i.upvotes || 0) * 2 + (i.comments || 0)
    }));
    allIssues.push(...issues);
  }

  allIssues.sort((a, b) => b.priority - a.priority);

  console.log(`Top ${limit} Priority Issues (score = upvotes×2 + comments)`);
  console.log('='.repeat(80));
  console.log('');

  for (const issue of allIssues.slice(0, limit)) {
    const repoName = formatRepoName(issue.repo);
    console.log(`[${repoName}#${issue.number}] ${issue.title}`);
    console.log(`  Score: ${issue.priority} (👍 ${issue.upvotes || 0}, 💬 ${issue.comments || 0})`);
    console.log('');
  }
}

function analyzeBugs(limit = 30) {
  const repos = getTrackedRepos();
  const allBugs = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const bugs = (index.issues || [])
      .filter(i => i.labels?.some(l => l.toLowerCase().includes('bug')))
      .map(i => ({
        ...i,
        repo,
        priority: (i.upvotes || 0) * 2 + (i.comments || 0)
      }));
    allBugs.push(...bugs);
  }

  allBugs.sort((a, b) => b.priority - a.priority);

  console.log(`Top ${limit} Priority Bugs`);
  console.log('='.repeat(80));
  console.log('');

  for (const bug of allBugs.slice(0, limit)) {
    const repoName = formatRepoName(bug.repo);
    console.log(`[${repoName}#${bug.number}] ${bug.title}`);
    console.log(`  Score: ${bug.priority} (👍 ${bug.upvotes || 0}, 💬 ${bug.comments || 0})`);
    console.log('');
  }
}

function analyzeRecent(days = 30) {
  const repos = getTrackedRepos();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const allRecent = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const recent = (index.issues || [])
      .filter(i => new Date(i.createdAt) > cutoff)
      .map(i => ({ ...i, repo }));
    allRecent.push(...recent);
  }

  allRecent.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log(`Issues Created in Last ${days} Days (${allRecent.length} total)`);
  console.log('='.repeat(80));
  console.log('');

  for (const issue of allRecent) {
    const repoName = formatRepoName(issue.repo);
    const created = new Date(issue.createdAt).toISOString().split('T')[0];
    console.log(`[${created}] [${repoName}#${issue.number}] ${issue.title}`);
  }
}

function analyzeStale(months = 12, limit = 50) {
  const repos = getTrackedRepos();
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - months);
  const allStale = [];

  for (const repo of repos) {
    const index = loadIndex(repo);
    const stale = (index.issues || [])
      .filter(i => new Date(i.updatedAt) < cutoff)
      .map(i => ({
        ...i,
        repo,
        priority: (i.upvotes || 0) * 2 + (i.comments || 0)
      }));
    allStale.push(...stale);
  }

  allStale.sort((a, b) => b.priority - a.priority);

  console.log(`Top ${limit} Stale Issues (no activity in ${months}+ months)`);
  console.log('='.repeat(80));
  console.log(`Total stale issues: ${allStale.length}`);
  console.log('');

  for (const issue of allStale.slice(0, limit)) {
    const repoName = formatRepoName(issue.repo);
    const updated = new Date(issue.updatedAt).toISOString().split('T')[0];
    console.log(`[${repoName}#${issue.number}] ${issue.title}`);
    console.log(`  Last updated: ${updated}, Score: ${issue.priority}`);
    console.log('');
  }
}

function analyzeCategories() {
  const repos = getTrackedRepos();
  const categories = {};

  for (const repo of repos) {
    const index = loadIndex(repo);
    for (const issue of index.issues || []) {
      for (const label of issue.labels || []) {
        const normalized = label.toLowerCase();
        if (!categories[normalized]) {
          categories[normalized] = { count: 0, repos: new Set() };
        }
        categories[normalized].count++;
        categories[normalized].repos.add(repo);
      }
    }
  }

  const sorted = Object.entries(categories)
    .map(([label, data]) => ({ label, count: data.count, repos: data.repos.size }))
    .sort((a, b) => b.count - a.count);

  console.log('Label Distribution Across All Repos');
  console.log('='.repeat(80));
  console.log('');
  console.log('| Label | Count | Repos |');
  console.log('|-------|-------|-------|');

  for (const { label, count, repos } of sorted.slice(0, 30)) {
    console.log(`| ${label.padEnd(30)} | ${String(count).padStart(5)} | ${String(repos).padStart(5)} |`);
  }
}

// Main
const command = process.argv[2] || 'stats';

switch (command) {
  case 'stats':
    analyzeStats();
    break;
  case 'priority':
    analyzePriority(parseInt(process.argv[3]) || 20);
    break;
  case 'bugs':
    analyzeBugs(parseInt(process.argv[3]) || 30);
    break;
  case 'recent':
    analyzeRecent(parseInt(process.argv[3]) || 30);
    break;
  case 'stale':
    analyzeStale(parseInt(process.argv[3]) || 12, parseInt(process.argv[4]) || 50);
    break;
  case 'categories':
    analyzeCategories();
    break;
  default:
    console.log('Usage: node scripts/analyze-all.js [command]');
    console.log('');
    console.log('Commands:');
    console.log('  stats              - Basic statistics for all repos (default)');
    console.log('  priority [limit]   - Priority issues across all repos');
    console.log('  bugs [limit]       - Bugs across all repos');
    console.log('  recent [days]      - Recently created issues');
    console.log('  stale [months] [limit] - Stale issues needing attention');
    console.log('  categories         - Label distribution');
    process.exit(1);
}
