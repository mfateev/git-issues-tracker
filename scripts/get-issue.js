#!/usr/bin/env node

/**
 * Get full content of a single issue
 *
 * Usage:
 *   node scripts/get-issue.js <repo> <issue-number>
 *   node scripts/get-issue.js temporalio-temporal 680
 *   node scripts/get-issue.js sdk-typescript 1334
 *
 * Output: Full issue details including description and all comments
 */

const fs = require('fs');
const path = require('path');

const reposDir = path.join(__dirname, '..', 'repos');

function usage() {
  console.log(`Usage: node scripts/get-issue.js <repo> <issue-number>

Arguments:
  repo          Repository directory name (e.g., temporalio-temporal, temporalio-sdk-java)
  issue-number  Issue number to retrieve

Examples:
  node scripts/get-issue.js temporalio-temporal 680
  node scripts/get-issue.js temporalio-sdk-typescript 1334
  node scripts/get-issue.js sdk-java 1845    # 'temporalio-' prefix is optional

Available repositories:`);

  const repos = fs.readdirSync(reposDir).filter(d => {
    const issuesDir = path.join(reposDir, d, 'issues');
    return fs.existsSync(issuesDir) && fs.statSync(issuesDir).isDirectory();
  });
  repos.forEach(r => console.log(`  ${r}`));
  process.exit(1);
}

function normalizeRepoName(repo) {
  // Allow shorthand like "sdk-java" -> "temporalio-sdk-java"
  if (!repo.startsWith('temporalio-')) {
    const withPrefix = `temporalio-${repo}`;
    const repoPath = path.join(reposDir, withPrefix);
    if (fs.existsSync(repoPath)) {
      return withPrefix;
    }
  }
  return repo;
}

function formatDate(dateStr) {
  if (!dateStr) return 'Unknown';
  const date = new Date(dateStr);
  return date.toISOString().replace('T', ' ').replace(/\.\d+Z$/, ' UTC');
}

function formatAge(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const now = new Date();
  const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (days < 1) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  if (days < 60) return '1 month ago';
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  if (days < 730) return '1 year ago';
  return `${Math.floor(days / 365)} years ago`;
}

function getIssue(repoName, issueNumber) {
  const repo = normalizeRepoName(repoName);
  const issuePath = path.join(reposDir, repo, 'issues', `issue-${issueNumber}.json`);

  if (!fs.existsSync(issuePath)) {
    console.error(`Error: Issue not found at ${issuePath}`);
    console.error(`\nAvailable repositories:`);
    const repos = fs.readdirSync(reposDir).filter(d => {
      const issuesDir = path.join(reposDir, d, 'issues');
      return fs.existsSync(issuesDir);
    });
    repos.forEach(r => console.error(`  ${r}`));
    process.exit(1);
  }

  const issue = JSON.parse(fs.readFileSync(issuePath, 'utf-8'));
  return issue;
}

function formatIssue(issue, repoName) {
  const repo = normalizeRepoName(repoName);
  const lines = [];

  // Header
  lines.push(`# Issue #${issue.number}: ${issue.title}`);
  lines.push('');

  // Metadata table
  lines.push('| Field | Value |');
  lines.push('|-------|-------|');
  lines.push(`| **Repository** | ${repo.replace('temporalio-', 'temporalio/')} |`);
  lines.push(`| **URL** | ${issue.url} |`);
  lines.push(`| **State** | ${issue.state} |`);
  lines.push(`| **Author** | ${issue.author?.login || 'Unknown'} |`);
  lines.push(`| **Created** | ${formatDate(issue.createdAt)} (${formatAge(issue.createdAt)}) |`);
  lines.push(`| **Updated** | ${formatDate(issue.updatedAt)} |`);

  // Engagement
  const upvotes = issue.reactionGroups?.find(r => r.content === 'THUMBS_UP')?.users?.totalCount || 0;
  const commentCount = issue.comments?.length || 0;
  lines.push(`| **Upvotes** | ${upvotes} |`);
  lines.push(`| **Comments** | ${commentCount} |`);

  // Labels
  const labels = issue.labels?.map(l => l.name).join(', ') || 'None';
  lines.push(`| **Labels** | ${labels} |`);

  // Assignees
  const assignees = issue.assignees?.map(a => a.login).join(', ') || 'None';
  lines.push(`| **Assignees** | ${assignees} |`);

  // Milestone
  lines.push(`| **Milestone** | ${issue.milestone?.title || 'None'} |`);

  lines.push('');

  // Description
  lines.push('## Description');
  lines.push('');
  lines.push(issue.body || '*No description provided*');
  lines.push('');

  // Comments
  if (issue.comments && issue.comments.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push(`## Comments (${issue.comments.length})`);
    lines.push('');

    issue.comments.forEach((comment, i) => {
      lines.push(`### Comment ${i + 1} by ${comment.author?.login || 'Unknown'}`);
      lines.push(`*${formatDate(comment.createdAt)}*`);
      lines.push('');
      lines.push(comment.body || '*Empty comment*');
      lines.push('');
    });
  }

  return lines.join('\n');
}

// Main
const args = process.argv.slice(2);

if (args.length < 2 || args.includes('--help') || args.includes('-h')) {
  usage();
}

const [repoArg, issueNum] = args;
const issueNumber = parseInt(issueNum, 10);

if (isNaN(issueNumber)) {
  console.error(`Error: Invalid issue number: ${issueNum}`);
  process.exit(1);
}

const issue = getIssue(repoArg, issueNumber);
console.log(formatIssue(issue, repoArg));
