#!/usr/bin/env node

/**
 * Generate Theme Summaries (Phase 3)
 *
 * Creates cross-cutting analysis documents by aggregating related issues
 * across all repositories based on theme criteria.
 *
 * Prerequisites: Phase 1 (issue cards) must be complete for target repos.
 *
 * Usage:
 *   node scripts/generate-themes.js [theme-name] [options]
 *
 * Options:
 *   --all              Generate all themes
 *   --list             List available themes
 *   --dry-run          Show matching issues without generating
 *   --model M          Model to use: haiku, sonnet, opus (default: sonnet)
 *   --help, -h         Show this help
 *
 * Examples:
 *   node scripts/generate-themes.js --all              # Generate all themes
 *   node scripts/generate-themes.js testing            # Generate single theme
 *   node scripts/generate-themes.js --list             # List themes
 *   node scripts/generate-themes.js testing --dry-run  # Preview matches
 *
 * Output:
 *   analysis/themes/{theme}.md   - Theme analysis document
 *   analysis/themes/index.md     - Index of all themes
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const BASE_DIR = path.join(__dirname, '..');
const REPOS_DIR = path.join(BASE_DIR, 'repos');
const THEMES_DIR = path.join(BASE_DIR, 'analysis', 'themes');

// Configuration
const CONFIG = {
  model: 'sonnet',           // Use sonnet for better analysis quality
  retryAttempts: 3,
  retryDelayMs: 2000,
  maxCardsPerTheme: 100,     // Limit cards to fit context
  maxCardsPerRepo: 30,       // Limit per repo for balance
};

// ============================================================================
// Theme Definitions
// ============================================================================

const THEMES = {
  testing: {
    name: 'Testing',
    description: 'Test framework, mocking, replay testing, test utilities',
    filter: (card) =>
      card.subcategory?.toLowerCase().includes('test') ||
      card.components?.some(c => c.toLowerCase().includes('test')) ||
      card.concepts?.some(c => ['testing', 'test-framework', 'mock', 'replay', 'test-suite', 'unit-test', 'integration-test'].includes(c.toLowerCase())),
  },

  nexus: {
    name: 'Nexus',
    description: 'Nexus operations, endpoints, and cross-namespace communication',
    filter: (card) =>
      card.concepts?.some(c => c.toLowerCase().includes('nexus')) ||
      card.apis?.some(a => a.toLowerCase().includes('nexus')) ||
      card.subcategory?.toLowerCase().includes('nexus') ||
      card.summary?.toLowerCase().includes('nexus'),
  },

  performance: {
    name: 'Performance',
    description: 'Latency, throughput, memory usage, optimization',
    filter: (card) =>
      card.subcategory?.toLowerCase().includes('performance') ||
      card.concepts?.some(c => ['performance', 'latency', 'throughput', 'memory', 'optimization', 'slow', 'cpu', 'bottleneck'].includes(c.toLowerCase())),
  },

  observability: {
    name: 'Observability',
    description: 'Metrics, tracing, logging, monitoring',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/metric|trace|log|observ/) ||
      card.concepts?.some(c => ['metrics', 'tracing', 'logging', 'opentelemetry', 'prometheus', 'monitoring', 'observability', 'telemetry'].includes(c.toLowerCase())) ||
      card.components?.some(c => c.toLowerCase().match(/metric|trace|log/)),
  },

  versioning: {
    name: 'Worker Versioning',
    description: 'Worker versioning, build IDs, deployment strategies',
    filter: (card) =>
      card.concepts?.some(c => ['versioning', 'build-id', 'worker-versioning', 'deployment', 'version-sets'].includes(c.toLowerCase())) ||
      card.subcategory?.toLowerCase().includes('versioning') ||
      card.summary?.toLowerCase().includes('worker version'),
  },

  'signals-updates': {
    name: 'Signals and Updates',
    description: 'Signal and Update patterns, workflow communication',
    filter: (card) =>
      card.concepts?.some(c => ['signal', 'update', 'workflow-update', 'signals'].includes(c.toLowerCase())) ||
      card.apis?.some(a => a.toLowerCase().match(/signal|update/)) ||
      card.subcategory?.toLowerCase().match(/signal|update/),
  },

  activities: {
    name: 'Activities',
    description: 'Activity patterns, heartbeats, timeouts, local activities',
    filter: (card) =>
      card.subcategory?.toLowerCase().includes('activity') ||
      card.concepts?.some(c => ['activity', 'heartbeat', 'local-activity', 'activity-timeout', 'activity-retry'].includes(c.toLowerCase())) ||
      card.apis?.some(a => a.toLowerCase().includes('activity')),
  },

  'error-handling': {
    name: 'Error Handling',
    description: 'Error handling, retries, timeouts, failure modes',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/error|retry|timeout|failure/) ||
      card.concepts?.some(c => ['error-handling', 'retry', 'timeout', 'failure', 'exception', 'error-propagation', 'cancellation'].includes(c.toLowerCase())),
  },

  serialization: {
    name: 'Serialization',
    description: 'Payload codecs, data converters, custom serialization',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/serial|codec|payload|converter/) ||
      card.concepts?.some(c => ['serialization', 'codec', 'payload', 'data-converter', 'json', 'protobuf', 'encryption'].includes(c.toLowerCase())),
  },

  security: {
    name: 'Security',
    description: 'Authentication, TLS, certificates, authorization',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/security|auth|tls|cert/) ||
      card.concepts?.some(c => ['security', 'authentication', 'authorization', 'tls', 'mtls', 'certificate', 'credentials', 'oauth'].includes(c.toLowerCase())),
  },

  'breaking-changes': {
    name: 'Breaking Changes',
    description: 'API compatibility, migration issues, deprecations',
    filter: (card) =>
      card.concepts?.some(c => ['breaking-change', 'compatibility', 'migration', 'deprecation', 'backwards-compatibility', 'upgrade'].includes(c.toLowerCase())) ||
      card.subcategory?.toLowerCase().match(/compat|migrat|deprecat/),
  },

  'high-priority': {
    name: 'High Priority',
    description: 'High severity or high engagement issues',
    filter: (card, issue) =>
      card.severity === 'high' || card.severity === 'critical' ||
      (issue?.upvotes >= 5) ||
      (issue?.commentCount >= 10),
  },

  'api-design': {
    name: 'API Design',
    description: 'API design patterns, proto definitions, SDK interfaces',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/api|proto|interface|design/) ||
      card.concepts?.some(c => ['api-design', 'proto', 'grpc', 'http-api', 'sdk-api', 'interface'].includes(c.toLowerCase())),
  },

  'workflow-execution': {
    name: 'Workflow Execution',
    description: 'Workflow lifecycle, replay, determinism, execution issues',
    filter: (card) =>
      card.subcategory?.toLowerCase().match(/workflow|replay|execution|determinism/) ||
      card.concepts?.some(c => ['workflow', 'replay', 'determinism', 'execution', 'workflow-task', 'sticky-queue'].includes(c.toLowerCase())),
  },
};

// ============================================================================
// Claude CLI Client
// ============================================================================

function runClaudeCli(prompt, model) {
  return new Promise((resolve, reject) => {
    const args = [
      '-p', prompt,
      '--model', model,
      '--output-format', 'text',
      '--no-session-persistence',
    ];

    const proc = spawn('claude', args, {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env },
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve(stdout.trim());
      } else {
        reject(new Error(`claude CLI exited with code ${code}: ${stderr}`));
      }
    });

    proc.on('error', (err) => {
      reject(new Error(`Failed to spawn claude CLI: ${err.message}`));
    });

    // Longer timeout for theme generation (5 minutes)
    setTimeout(() => {
      proc.kill();
      reject(new Error('claude CLI timed out after 5 minutes'));
    }, 300000);
  });
}

// ============================================================================
// Data Loading
// ============================================================================

function loadAllCards() {
  const allCards = [];

  if (!fs.existsSync(REPOS_DIR)) {
    console.error('Repos directory not found');
    return allCards;
  }

  const repos = fs.readdirSync(REPOS_DIR).filter(f => {
    const cardsIndex = path.join(REPOS_DIR, f, 'issue-cards', 'cards-index.json');
    return fs.existsSync(cardsIndex);
  });

  for (const repo of repos) {
    const cardsIndexPath = path.join(REPOS_DIR, repo, 'issue-cards', 'cards-index.json');
    const issuesIndexPath = path.join(REPOS_DIR, repo, 'issues-index.json');

    const cardsIndex = JSON.parse(fs.readFileSync(cardsIndexPath, 'utf-8'));

    // Load issues index for upvotes/comments
    let issuesMap = new Map();
    if (fs.existsSync(issuesIndexPath)) {
      const issuesIndex = JSON.parse(fs.readFileSync(issuesIndexPath, 'utf-8'));
      for (const issue of issuesIndex.issues) {
        issuesMap.set(issue.number, issue);
      }
    }

    for (const card of cardsIndex.cards) {
      const issue = issuesMap.get(card.number);
      allCards.push({
        ...card,
        repo: repo.replace('temporalio-', ''),
        fullRepo: repo,
        url: issue?.url || `https://github.com/temporalio/${repo.replace('temporalio-', '')}/issues/${card.number}`,
        state: issue?.state || 'UNKNOWN',
        upvotes: issue?.upvotes || 0,
        commentCount: issue?.commentCount || 0,
        createdAt: issue?.createdAt,
        updatedAt: issue?.updatedAt,
      });
    }
  }

  return allCards;
}

function filterCardsForTheme(allCards, themeDef) {
  return allCards.filter(card => {
    // Get issue data for filters that need it
    const issue = { upvotes: card.upvotes, commentCount: card.commentCount };
    return themeDef.filter(card, issue);
  });
}

function groupByRepo(cards) {
  const grouped = {};
  for (const card of cards) {
    if (!grouped[card.repo]) {
      grouped[card.repo] = [];
    }
    grouped[card.repo].push(card);
  }

  // Sort each repo's cards by priority (severity + upvotes)
  for (const repo of Object.keys(grouped)) {
    grouped[repo].sort((a, b) => {
      const sevOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      const sevA = sevOrder[a.severity] || 0;
      const sevB = sevOrder[b.severity] || 0;
      if (sevA !== sevB) return sevB - sevA;
      return (b.upvotes || 0) - (a.upvotes || 0);
    });
  }

  return grouped;
}

// ============================================================================
// Theme Generation
// ============================================================================

function buildThemePrompt(themeName, themeDef, groupedCards, allMatchingCards) {
  // Build card summaries for prompt
  const cardSummaries = [];
  let totalCards = 0;

  // Sort repos by issue count
  const sortedRepos = Object.entries(groupedCards)
    .sort((a, b) => b[1].length - a[1].length);

  for (const [repo, cards] of sortedRepos) {
    // Limit cards per repo
    const limitedCards = cards.slice(0, CONFIG.maxCardsPerRepo);
    totalCards += limitedCards.length;

    cardSummaries.push(`\n### ${repo} (${cards.length} issues, showing ${limitedCards.length})`);

    for (const card of limitedCards) {
      const stateMarker = card.state === 'OPEN' ? '🔴' : '✅';
      const severity = card.severity || 'medium';
      const upvotes = card.upvotes > 0 ? ` [👍 ${card.upvotes}]` : '';

      cardSummaries.push(`
**#${card.number}** ${stateMarker} [${severity}]${upvotes}
${card.summary}
- Components: ${(card.components || []).join(', ') || 'N/A'}
- Concepts: ${(card.concepts || []).join(', ') || 'N/A'}`);
    }

    if (totalCards >= CONFIG.maxCardsPerTheme) break;
  }

  const openCount = allMatchingCards.filter(c => c.state === 'OPEN').length;
  const closedCount = allMatchingCards.filter(c => c.state === 'CLOSED').length;

  return `You are a technical writer creating a cross-repository analysis document for the Temporal workflow platform.

## Theme: ${themeDef.name}
${themeDef.description}

## Statistics
- Total matching issues: ${allMatchingCards.length}
- Open: ${openCount}
- Closed: ${closedCount}
- Repositories: ${Object.keys(groupedCards).length}

## Issues by Repository
${cardSummaries.join('\n')}

## Task

Generate a comprehensive markdown analysis document with this structure:

# ${themeDef.name}: Cross-Repository Analysis

## Overview
Write 2-3 paragraphs summarizing:
- The overall state of ${themeDef.name.toLowerCase()}-related issues across Temporal SDKs
- Key patterns and recurring themes you observe
- Notable differences between SDKs/repos

## By Repository
For each repository with significant issues, write a brief summary (2-3 sentences) highlighting:
- Main problem areas
- Critical issues that need attention
- Any SDK-specific patterns

## Common Patterns
List 3-5 recurring patterns or themes you identified across repositories, with specific issue examples.

## High-Impact Issues
Create a markdown table of the top 10 most impactful issues (consider severity, upvotes, and scope):
| # | Repo | Title | Severity | Status |
Include a brief note on why each is high-impact.

## Recommendations
Provide 3-5 actionable recommendations based on your analysis. Be specific and reference issues where relevant.

## Related Themes
List 2-3 related themes that overlap with this analysis (from: testing, nexus, performance, observability, versioning, signals-updates, activities, error-handling, serialization, security, breaking-changes, api-design, workflow-execution)

Output ONLY the markdown document, no additional commentary.`;
}

async function generateTheme(themeName, options) {
  const themeDef = THEMES[themeName];
  if (!themeDef) {
    console.error(`Unknown theme: ${themeName}`);
    console.log('Available themes:', Object.keys(THEMES).join(', '));
    return false;
  }

  console.log(`\nGenerating theme: ${themeDef.name}`);
  console.log(`  Description: ${themeDef.description}`);

  // Load and filter cards
  const allCards = loadAllCards();
  console.log(`  Total cards loaded: ${allCards.length}`);

  const matchingCards = filterCardsForTheme(allCards, themeDef);
  console.log(`  Matching cards: ${matchingCards.length}`);

  if (matchingCards.length === 0) {
    console.log('  No matching issues found for this theme');
    return false;
  }

  const groupedCards = groupByRepo(matchingCards);
  console.log(`  Repositories: ${Object.keys(groupedCards).length}`);

  // Dry run - just show matches
  if (options.dryRun) {
    console.log('\n  [DRY RUN] Matching issues:');
    for (const [repo, cards] of Object.entries(groupedCards)) {
      console.log(`\n  ${repo} (${cards.length}):`);
      cards.slice(0, 5).forEach(card => {
        const state = card.state === 'OPEN' ? 'O' : 'C';
        console.log(`    #${card.number} [${state}] [${card.severity}] ${card.summary?.slice(0, 60)}...`);
      });
      if (cards.length > 5) {
        console.log(`    ... and ${cards.length - 5} more`);
      }
    }
    return true;
  }

  // Generate theme document
  const model = options.model || CONFIG.model;
  console.log(`  Using model: ${model}`);

  const prompt = buildThemePrompt(themeName, themeDef, groupedCards, matchingCards);

  for (let attempt = 1; attempt <= CONFIG.retryAttempts; attempt++) {
    try {
      console.log(`  Generating analysis (attempt ${attempt})...`);
      const response = await runClaudeCli(prompt, model);

      // Add metadata header
      const metadata = `<!--
Generated: ${new Date().toISOString()}
Theme: ${themeName}
Issues: ${matchingCards.length}
Repositories: ${Object.keys(groupedCards).length}
-->

`;

      const document = metadata + response;

      // Save document
      ensureDir(THEMES_DIR);
      const outputPath = path.join(THEMES_DIR, `${themeName}.md`);
      fs.writeFileSync(outputPath, document);
      console.log(`  Wrote: analysis/themes/${themeName}.md`);

      return true;
    } catch (error) {
      console.error(`  Attempt ${attempt} failed: ${error.message}`);
      if (attempt < CONFIG.retryAttempts) {
        await sleep(CONFIG.retryDelayMs * attempt);
      }
    }
  }

  console.error(`  Failed to generate theme after ${CONFIG.retryAttempts} attempts`);
  return false;
}

function generateIndex(generatedThemes) {
  const allCards = loadAllCards();

  const lines = [
    '# Theme Analysis Index',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Available Themes',
    '',
    '| Theme | Description | Issues | Status |',
    '|-------|-------------|--------|--------|',
  ];

  for (const [themeName, themeDef] of Object.entries(THEMES)) {
    const matchingCards = filterCardsForTheme(allCards, themeDef);
    const count = matchingCards.length;
    const hasFile = fs.existsSync(path.join(THEMES_DIR, `${themeName}.md`));
    const status = hasFile ? `[View](${themeName}.md)` : 'Not generated';

    lines.push(`| ${themeDef.name} | ${themeDef.description} | ${count} | ${status} |`);
  }

  lines.push('');
  lines.push('## Usage');
  lines.push('');
  lines.push('```bash');
  lines.push('# Generate a specific theme');
  lines.push('node scripts/generate-themes.js testing');
  lines.push('');
  lines.push('# Generate all themes');
  lines.push('node scripts/generate-themes.js --all');
  lines.push('');
  lines.push('# Preview matches without generating');
  lines.push('node scripts/generate-themes.js testing --dry-run');
  lines.push('```');
  lines.push('');
  lines.push('## Statistics');
  lines.push('');
  lines.push(`- Total cards indexed: ${allCards.length}`);
  lines.push(`- Themes defined: ${Object.keys(THEMES).length}`);

  const indexPath = path.join(THEMES_DIR, 'index.md');
  fs.writeFileSync(indexPath, lines.join('\n'));
  console.log('\nWrote: analysis/themes/index.md');
}

// ============================================================================
// Utilities
// ============================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ============================================================================
// CLI
// ============================================================================

function parseArgs(args) {
  const options = {
    themes: [],
    all: false,
    list: false,
    dryRun: false,
    model: CONFIG.model,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--all') {
      options.all = true;
    } else if (arg === '--list') {
      options.list = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--model') {
      options.model = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    } else if (!arg.startsWith('--')) {
      options.themes.push(arg);
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Generate Theme Summaries (Phase 3)

Creates cross-cutting analysis documents by aggregating related issues
across all repositories based on theme criteria.

Usage:
  node scripts/generate-themes.js [theme-name] [options]

Options:
  --all              Generate all themes
  --list             List available themes with issue counts
  --dry-run          Show matching issues without generating
  --model M          Model to use: haiku, sonnet, opus (default: ${CONFIG.model})
  --help, -h         Show this help

Prerequisites:
  Phase 1 (generate-cards.js) must be complete for target repos.

Examples:
  node scripts/generate-themes.js --all              # Generate all themes
  node scripts/generate-themes.js testing            # Generate single theme
  node scripts/generate-themes.js --list             # List themes
  node scripts/generate-themes.js testing --dry-run  # Preview matches

Available themes:`);

  for (const [name, def] of Object.entries(THEMES)) {
    console.log(`  ${name.padEnd(20)} ${def.description}`);
  }
}

function listThemes() {
  console.log('\nAvailable Themes:\n');

  const allCards = loadAllCards();
  console.log(`Total cards loaded: ${allCards.length}\n`);

  console.log('| Theme | Description | Matching Issues |');
  console.log('|-------|-------------|-----------------|');

  for (const [themeName, themeDef] of Object.entries(THEMES)) {
    const matchingCards = filterCardsForTheme(allCards, themeDef);
    const openCount = matchingCards.filter(c => c.state === 'OPEN').length;
    const closedCount = matchingCards.filter(c => c.state === 'CLOSED').length;
    console.log(`| ${themeDef.name.padEnd(18)} | ${themeDef.description.slice(0, 40).padEnd(40)} | ${matchingCards.length} (${openCount} open, ${closedCount} closed) |`);
  }
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  if (options.list) {
    listThemes();
    return;
  }

  // Determine which themes to generate
  let themes = options.themes;
  if (options.all) {
    themes = Object.keys(THEMES);
    console.log(`Generating all ${themes.length} themes...`);
  }

  if (themes.length === 0) {
    console.log('No theme specified. Use --list to see available themes or --all to generate all.');
    showHelp();
    return;
  }

  // Generate each theme
  const generatedThemes = [];
  for (const themeName of themes) {
    const success = await generateTheme(themeName, options);
    if (success) {
      generatedThemes.push(themeName);
    }
  }

  // Generate index
  if (!options.dryRun && generatedThemes.length > 0) {
    generateIndex(generatedThemes);
  }

  console.log('\nDone!');
  if (generatedThemes.length > 0) {
    console.log(`Generated ${generatedThemes.length} theme(s): ${generatedThemes.join(', ')}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
