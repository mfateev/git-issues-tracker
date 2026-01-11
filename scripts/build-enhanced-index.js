#!/usr/bin/env node

/**
 * Build Enhanced Index (Phase 2)
 *
 * Aggregates data from issues-index.json, raw issues, and issue cards into
 * a unified enhanced index for efficient querying.
 *
 * Prerequisites: Phase 1 (issue cards) must be complete for the target repos.
 *
 * Usage:
 *   node scripts/build-enhanced-index.js [repo-dir]
 *
 * Options:
 *   --all              Process all repos (default if no repo specified)
 *   --summary-only     Only regenerate cards-summary.txt without rebuilding indexes
 *   --help, -h         Show this help
 *
 * Examples:
 *   node scripts/build-enhanced-index.js                      # All repos
 *   node scripts/build-enhanced-index.js temporalio-api       # Single repo
 *   node scripts/build-enhanced-index.js --summary-only       # Just rebuild summary
 *
 * Output:
 *   repos/{repo}/issues-index-enhanced.json  - Full enhanced index
 *   repos/{repo}/issues-by-area.json         - Issues grouped by subcategory
 *   analysis/cards-summary.txt               - Grep-friendly summary of all issues
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const REPOS_DIR = path.join(BASE_DIR, 'repos');
const ANALYSIS_DIR = path.join(BASE_DIR, 'analysis');

// ============================================================================
// Objective Field Extraction (from raw issues)
// ============================================================================

function extractObjectiveFields(issue) {
  const body = issue.body || '';
  const title = issue.title || '';
  const labels = issue.labels || [];
  const labelNames = labels.map(l => typeof l === 'string' ? l : l.name);

  return {
    bodyLength: body.length,
    hasCodeBlocks: /```[\s\S]*?```/.test(body),
    hasStackTrace: /panic:|goroutine \d+|Traceback|Exception|at .+:\d+|Error:|FATAL/i.test(body),
    mentionsVersions: extractVersions(body),
    linkedIssues: extractLinkedIssues(body),
    isQuestion: title.endsWith('?') || labelNames.some(l =>
      l.toLowerCase().includes('question') || l.toLowerCase() === 'support'
    ),
    hasPR: extractLinkedPRs(body).length > 0,
    codeBlockCount: (body.match(/```/g) || []).length / 2,
  };
}

function extractVersions(text) {
  const matches = text.match(/v?\d+\.\d+\.\d+(-[\w.]+)?/g) || [];
  // Dedupe and limit to 5
  return [...new Set(matches)].slice(0, 5);
}

function extractLinkedIssues(text) {
  const patterns = [
    /#(\d+)/g,                           // #123
    /issues\/(\d+)/g,                    // issues/123
    /(?:relates?|related|see|ref|references?)\s*#?(\d+)/gi,  // relates to #123
  ];

  const issues = new Set();
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num < 100000) {  // Sanity check
        issues.add(num);
      }
    }
  }
  return [...issues].sort((a, b) => a - b);
}

function extractLinkedPRs(text) {
  const patterns = [
    /pull\/(\d+)/g,                      // pull/123
    /(?:PR|pull request)\s*#?(\d+)/gi,   // PR #123
  ];

  const prs = new Set();
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num < 100000) {
        prs.add(num);
      }
    }
  }
  return [...prs].sort((a, b) => a - b);
}

// ============================================================================
// Index Building
// ============================================================================

function buildEnhancedIndex(repoDir, repoName) {
  const issuesIndexPath = path.join(repoDir, 'issues-index.json');
  const cardsIndexPath = path.join(repoDir, 'issue-cards', 'cards-index.json');
  const issuesDir = path.join(repoDir, 'issues');

  // Check prerequisites
  if (!fs.existsSync(issuesIndexPath)) {
    console.error(`  Error: issues-index.json not found in ${repoDir}`);
    return null;
  }

  if (!fs.existsSync(cardsIndexPath)) {
    console.error(`  Error: cards-index.json not found. Run generate-cards.js first.`);
    return null;
  }

  // Load data
  const issuesIndex = JSON.parse(fs.readFileSync(issuesIndexPath, 'utf-8'));
  const cardsIndex = JSON.parse(fs.readFileSync(cardsIndexPath, 'utf-8'));

  // Build card lookup by issue number
  const cardsByNumber = new Map();
  for (const card of cardsIndex.cards) {
    cardsByNumber.set(card.number, card);
  }

  // Build enhanced entries
  const enhancedIssues = [];
  const byArea = {};
  let cardsFound = 0;
  let cardsMissing = 0;

  for (const issue of issuesIndex.issues) {
    const card = cardsByNumber.get(issue.number);

    // Load raw issue for objective field extraction
    const rawIssuePath = path.join(issuesDir, `issue-${issue.number}.json`);
    let objectiveFields = {};

    if (fs.existsSync(rawIssuePath)) {
      const rawIssue = JSON.parse(fs.readFileSync(rawIssuePath, 'utf-8'));
      objectiveFields = extractObjectiveFields(rawIssue);
    }

    // Build enhanced entry
    const enhanced = {
      // Base fields from issues-index
      number: issue.number,
      title: issue.title,
      state: issue.state,
      author: issue.author,
      labels: issue.labels,
      createdAt: issue.createdAt,
      updatedAt: issue.updatedAt,
      closedAt: issue.closedAt,
      commentCount: issue.commentCount,
      upvotes: issue.upvotes || 0,
      url: issue.url,

      // Objective fields (from raw issue)
      ...objectiveFields,
    };

    // Add semantic fields from card (if available)
    if (card) {
      cardsFound++;
      enhanced.summary = card.summary;
      enhanced.category = card.category;
      enhanced.subcategory = card.subcategory;
      enhanced.apis = card.apis || [];
      enhanced.components = card.components || [];
      enhanced.concepts = card.concepts || [];
      enhanced.severity = card.severity;
      enhanced.resolution = card.resolution;
      enhanced.hasCard = true;

      // Group by subcategory
      const area = card.subcategory || 'uncategorized';
      if (!byArea[area]) {
        byArea[area] = [];
      }
      byArea[area].push(issue.number);
    } else {
      cardsMissing++;
      enhanced.hasCard = false;
    }

    enhancedIssues.push(enhanced);
  }

  // Sort by issue number descending (newest first)
  enhancedIssues.sort((a, b) => b.number - a.number);

  // Sort areas by count
  const sortedByArea = {};
  Object.keys(byArea)
    .sort((a, b) => byArea[b].length - byArea[a].length)
    .forEach(key => {
      sortedByArea[key] = byArea[key].sort((a, b) => b - a);
    });

  console.log(`  Cards found: ${cardsFound}/${issuesIndex.issues.length}`);
  if (cardsMissing > 0) {
    console.log(`  Cards missing: ${cardsMissing} (run generate-cards.js to create them)`);
  }

  return {
    enhanced: {
      generatedAt: new Date().toISOString(),
      repo: repoName,
      totalCount: enhancedIssues.length,
      cardsCount: cardsFound,
      issues: enhancedIssues,
    },
    byArea: {
      generatedAt: new Date().toISOString(),
      repo: repoName,
      areas: sortedByArea,
    },
  };
}

function saveEnhancedIndex(repoDir, data) {
  const enhancedPath = path.join(repoDir, 'issues-index-enhanced.json');
  const byAreaPath = path.join(repoDir, 'issues-by-area.json');

  fs.writeFileSync(enhancedPath, JSON.stringify(data.enhanced, null, 2));
  fs.writeFileSync(byAreaPath, JSON.stringify(data.byArea, null, 2));

  console.log(`  Wrote: issues-index-enhanced.json (${data.enhanced.totalCount} issues)`);
  console.log(`  Wrote: issues-by-area.json (${Object.keys(data.byArea.areas).length} areas)`);
}

// ============================================================================
// Cards Summary (grep-friendly index)
// ============================================================================

function buildCardsSummary(repos) {
  const lines = [];

  for (const repoName of repos) {
    const repoDir = path.join(REPOS_DIR, repoName);
    const cardsIndexPath = path.join(repoDir, 'issue-cards', 'cards-index.json');
    const issuesIndexPath = path.join(repoDir, 'issues-index.json');

    if (!fs.existsSync(cardsIndexPath)) {
      continue;
    }

    const cardsIndex = JSON.parse(fs.readFileSync(cardsIndexPath, 'utf-8'));

    // Load issues index for state info
    let issueStates = new Map();
    if (fs.existsSync(issuesIndexPath)) {
      const issuesIndex = JSON.parse(fs.readFileSync(issuesIndexPath, 'utf-8'));
      for (const issue of issuesIndex.issues) {
        issueStates.set(issue.number, issue.state);
      }
    }

    // Short repo name (remove temporalio- prefix)
    const shortRepo = repoName.replace('temporalio-', '');

    for (const card of cardsIndex.cards) {
      const state = issueStates.get(card.number) || 'UNKNOWN';
      const stateMarker = state === 'OPEN' ? 'O' : 'C';
      const apis = (card.apis || []).join(',') || '-';
      const components = (card.components || []).join(',') || '-';
      const concepts = (card.concepts || []).join(',') || '-';
      const severity = card.severity || 'unknown';

      // Truncate summary to fit on one line
      const summary = (card.summary || '').replace(/\n/g, ' ').slice(0, 150);

      // Format: #NUM [repo] [state] [category] [subcategory] Summary | apis:... | components:... | concepts:... | severity:...
      const line = `#${card.number} [${shortRepo}] [${stateMarker}] [${card.category}] [${card.subcategory}] ${summary} | apis:${apis} | components:${components} | concepts:${concepts} | severity:${severity}`;
      lines.push({ number: card.number, repo: shortRepo, line });
    }
  }

  // Sort by repo then by issue number descending
  lines.sort((a, b) => {
    if (a.repo !== b.repo) {
      return a.repo.localeCompare(b.repo);
    }
    return b.number - a.number;
  });

  return lines.map(l => l.line).join('\n');
}

function saveCardsSummary(content) {
  if (!fs.existsSync(ANALYSIS_DIR)) {
    fs.mkdirSync(ANALYSIS_DIR, { recursive: true });
  }

  const summaryPath = path.join(ANALYSIS_DIR, 'cards-summary.txt');
  fs.writeFileSync(summaryPath, content);

  const lineCount = content.split('\n').filter(l => l.trim()).length;
  console.log(`\nWrote: analysis/cards-summary.txt (${lineCount} issues)`);
}

// ============================================================================
// Repository Processing
// ============================================================================

function processRepo(repoName) {
  const repoDir = path.join(REPOS_DIR, repoName);

  if (!fs.existsSync(repoDir)) {
    console.error(`Repository not found: ${repoDir}`);
    return false;
  }

  console.log(`\nProcessing ${repoName}...`);

  const data = buildEnhancedIndex(repoDir, repoName);
  if (data) {
    saveEnhancedIndex(repoDir, data);
    return true;
  }
  return false;
}

function listRepos() {
  if (!fs.existsSync(REPOS_DIR)) return [];
  return fs.readdirSync(REPOS_DIR).filter(f => {
    const cardsDir = path.join(REPOS_DIR, f, 'issue-cards');
    return fs.existsSync(cardsDir) && fs.statSync(cardsDir).isDirectory();
  });
}

function listAllRepos() {
  if (!fs.existsSync(REPOS_DIR)) return [];
  return fs.readdirSync(REPOS_DIR).filter(f => {
    const issuesDir = path.join(REPOS_DIR, f, 'issues');
    return fs.existsSync(issuesDir) && fs.statSync(issuesDir).isDirectory();
  });
}

// ============================================================================
// CLI
// ============================================================================

function parseArgs(args) {
  const options = {
    repos: [],
    summaryOnly: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--summary-only') {
      options.summaryOnly = true;
    } else if (arg === '--all') {
      // Process all repos with cards
      options.repos = listRepos();
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    } else if (!arg.startsWith('--')) {
      options.repos.push(arg);
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Build Enhanced Index (Phase 2)

Aggregates data from issues-index.json, raw issues, and issue cards into
a unified enhanced index for efficient querying.

Usage:
  node scripts/build-enhanced-index.js [repo-dir] [options]

Options:
  --all              Process all repos with cards
  --summary-only     Only regenerate cards-summary.txt
  --help, -h         Show this help

Prerequisites:
  Phase 1 (generate-cards.js) must be complete for target repos.

Output:
  repos/{repo}/issues-index-enhanced.json  - Full enhanced index
  repos/{repo}/issues-by-area.json         - Issues grouped by subcategory
  analysis/cards-summary.txt               - Grep-friendly summary

Examples:
  node scripts/build-enhanced-index.js                      # All repos with cards
  node scripts/build-enhanced-index.js temporalio-api       # Single repo
  node scripts/build-enhanced-index.js --summary-only       # Just rebuild summary

Repositories with cards:`);
  listRepos().forEach(r => console.log(`  ${r}`));
}

// ============================================================================
// Main
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  // Default to all repos with cards if none specified
  if (options.repos.length === 0 && !options.summaryOnly) {
    options.repos = listRepos();
    if (options.repos.length === 0) {
      console.error('No repositories with cards found. Run generate-cards.js first.');
      process.exit(1);
    }
    console.log(`Processing ${options.repos.length} repositories with cards...`);
  }

  // Normalize repo names
  options.repos = options.repos.map(r => {
    if (!r.startsWith('temporalio-')) {
      const withPrefix = `temporalio-${r}`;
      if (fs.existsSync(path.join(REPOS_DIR, withPrefix))) {
        return withPrefix;
      }
    }
    return r;
  });

  // Process repos (unless summary-only)
  if (!options.summaryOnly) {
    let processed = 0;
    for (const repo of options.repos) {
      if (processRepo(repo)) {
        processed++;
      }
    }
    console.log(`\nProcessed ${processed}/${options.repos.length} repositories`);
  }

  // Build cards summary (always, using all repos with cards)
  const reposWithCards = listRepos();
  if (reposWithCards.length > 0) {
    console.log('\nBuilding cards summary...');
    const summary = buildCardsSummary(reposWithCards);
    saveCardsSummary(summary);
  }

  console.log('\nDone!');
}

main();
