#!/usr/bin/env node

/**
 * Generate Semantic Issue Cards
 *
 * Phase 1 of the semantic analysis pipeline. Processes raw issues and generates
 * semantic cards using Claude CLI (claude -p).
 *
 * Usage:
 *   node scripts/generate-cards.js [repo-dir] [options]
 *
 * Options:
 *   --resume       Resume from last processed issue
 *   --dry-run      Show what would be processed without making API calls
 *   --limit N      Process only N issues (for testing)
 *   --force        Regenerate cards even if they exist
 *   --concurrency N  Number of concurrent requests (default: 3)
 *   --model M      Model to use: haiku, sonnet, opus (default: haiku)
 *
 * Examples:
 *   node scripts/generate-cards.js                           # Process all repos
 *   node scripts/generate-cards.js temporalio-api            # Process single repo
 *   node scripts/generate-cards.js temporalio-api --dry-run  # Preview without API calls
 *   node scripts/generate-cards.js temporalio-api --limit 10 # Process 10 issues
 *   node scripts/generate-cards.js --resume                  # Resume interrupted run
 *
 * Requirements:
 *   - Claude CLI installed and authenticated (claude command available)
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configuration
const CONFIG = {
  model: 'haiku',          // Default to haiku for cost efficiency
  retryAttempts: 3,
  retryDelayMs: 1000,
  concurrency: 3,          // Lower concurrency for CLI calls
  maxCommentsInPrompt: 5,  // Truncate comments to last N
};

const BASE_DIR = path.join(__dirname, '..');
const REPOS_DIR = path.join(BASE_DIR, 'repos');

// Card schema for validation
const REQUIRED_FIELDS = [
  'summary', 'category', 'subcategory', 'apis', 'components',
  'concepts', 'severity', 'userImpact'
];

const VALID_CATEGORIES = ['bug', 'feature', 'question', 'docs', 'other'];
const VALID_SEVERITIES = ['low', 'medium', 'high', 'critical'];

// ============================================================================
// Prompt Template
// ============================================================================

function buildPrompt(issue, repoName) {
  const labels = issue.labels?.map(l => l.name || l).join(', ') || 'None';
  const comments = issue.comments || [];
  const truncatedComments = comments.slice(-CONFIG.maxCommentsInPrompt);

  let commentsText = '';
  if (truncatedComments.length > 0) {
    commentsText = truncatedComments.map((c, i) => {
      const author = c.author?.login || 'Unknown';
      const body = (c.body || '').slice(0, 2000); // Truncate long comments
      return `**Comment ${i + 1} by ${author}:**\n${body}`;
    }).join('\n\n');
  } else {
    commentsText = 'No comments';
  }

  return `You are analyzing a GitHub issue for semantic indexing. Extract structured information.

## Issue
Repository: ${repoName}
Number: #${issue.number}
Title: ${issue.title}
State: ${issue.state}
Labels: ${labels}
Created: ${issue.createdAt}
Author: ${issue.author?.login || 'Unknown'}

### Body
${(issue.body || 'No description provided').slice(0, 8000)}

### Comments (${comments.length} total, showing last ${truncatedComments.length})
${commentsText}

## Task
Generate a semantic card with these fields:

1. summary: 1-3 sentences capturing the core issue (what's the problem or request)
2. category: One of: bug, feature, question, docs, other - based on content, not just labels
3. subcategory: Specific area (e.g., "activity-heartbeat", "workflow-replay", "test-framework")
4. apis: Array of Temporal SDK APIs mentioned (e.g., ["ExecuteActivity", "StartWorkflow"]). Empty array if none.
5. components: Array of 2-5 affected code components (e.g., ["worker", "activity-executor"])
6. concepts: Array of 3-7 abstract concepts for semantic search (e.g., ["timeout", "retry", "connection"])
7. severity: One of: low, medium, high, critical - based on user impact
8. userImpact: One sentence describing how this affects users
9. rootCause: Technical root cause if identified in the discussion, else null
10. proposedFix: Suggested solution if mentioned, else null
11. workaround: Temporary workaround if mentioned, else null
12. resolution: For CLOSED issues only: fixed, wontfix, duplicate, stale, invalid, or null if unknown. For OPEN issues: null
13. resolutionDetails: Brief explanation of how it was resolved (for closed), else null
14. related: Array of related issue numbers mentioned (just numbers, e.g., [123, 456]). Empty array if none.
15. keyQuote: Most important quote from body or comments (verbatim, max 200 chars), or null

Output ONLY valid JSON, no markdown formatting, no code blocks, no explanation.`;
}

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
      stdio: ['ignore', 'pipe', 'pipe'],  // ignore stdin
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

    // Set a timeout of 2 minutes per request
    setTimeout(() => {
      proc.kill();
      reject(new Error('claude CLI timed out after 2 minutes'));
    }, 120000);
  });
}

// ============================================================================
// Card Generation
// ============================================================================

async function generateCard(issue, repoName, model, retries = CONFIG.retryAttempts) {
  const prompt = buildPrompt(issue, repoName);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const responseText = await runClaudeCli(prompt, model);

      // Clean up response - remove markdown code blocks if present
      let jsonText = responseText.trim();
      if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      }

      const card = JSON.parse(jsonText);

      // Add metadata
      card.number = issue.number;
      card.repo = repoName;
      card.generatedAt = new Date().toISOString();

      // Validate
      validateCard(card);

      return card;
    } catch (error) {
      if (attempt < retries) {
        console.error(`  Attempt ${attempt} failed: ${error.message}. Retrying...`);
        await sleep(CONFIG.retryDelayMs * attempt);
      } else {
        throw error;
      }
    }
  }
}

function validateCard(card) {
  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (card[field] === undefined) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Validate category
  if (!VALID_CATEGORIES.includes(card.category)) {
    console.warn(`  Warning: Invalid category "${card.category}", defaulting to "other"`);
    card.category = 'other';
  }

  // Validate severity
  if (!VALID_SEVERITIES.includes(card.severity)) {
    console.warn(`  Warning: Invalid severity "${card.severity}", defaulting to "medium"`);
    card.severity = 'medium';
  }

  // Ensure arrays
  if (!Array.isArray(card.apis)) card.apis = [];
  if (!Array.isArray(card.components)) card.components = [];
  if (!Array.isArray(card.concepts)) card.concepts = [];
  if (!Array.isArray(card.related)) card.related = [];

  // Clean related to just numbers
  card.related = card.related
    .map(r => typeof r === 'number' ? r : parseInt(r, 10))
    .filter(r => !isNaN(r));
}

// ============================================================================
// Progress Tracking
// ============================================================================

function loadGenerationLog(repoDir) {
  const logPath = path.join(repoDir, 'issue-cards', 'generation-log.json');
  if (fs.existsSync(logPath)) {
    return JSON.parse(fs.readFileSync(logPath, 'utf-8'));
  }
  return {
    startedAt: new Date().toISOString(),
    completedAt: null,
    totalIssues: 0,
    processed: 0,
    failed: 0,
    failedIssues: [],
    processedIssues: [],
    inputTokens: 0,
    outputTokens: 0,
  };
}

function saveGenerationLog(repoDir, log) {
  const cardsDir = path.join(repoDir, 'issue-cards');
  ensureDir(cardsDir);
  const logPath = path.join(cardsDir, 'generation-log.json');
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
}

function saveCard(repoDir, card) {
  const cardsDir = path.join(repoDir, 'issue-cards');
  ensureDir(cardsDir);
  const cardPath = path.join(cardsDir, `issue-${card.number}.json`);
  fs.writeFileSync(cardPath, JSON.stringify(card, null, 2));
}

function buildCardsIndex(repoDir) {
  const cardsDir = path.join(repoDir, 'issue-cards');
  if (!fs.existsSync(cardsDir)) return;

  const cardFiles = fs.readdirSync(cardsDir)
    .filter(f => f.startsWith('issue-') && f.endsWith('.json'));

  const cards = cardFiles.map(f => {
    const cardPath = path.join(cardsDir, f);
    return JSON.parse(fs.readFileSync(cardPath, 'utf-8'));
  }).sort((a, b) => b.number - a.number);

  const indexPath = path.join(cardsDir, 'cards-index.json');
  fs.writeFileSync(indexPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalCards: cards.length,
    cards,
  }, null, 2));

  console.log(`  Built cards-index.json with ${cards.length} cards`);
}

// ============================================================================
// Repository Processing
// ============================================================================

async function processRepo(repoName, options) {
  const repoDir = path.join(REPOS_DIR, repoName);
  const issuesDir = path.join(repoDir, 'issues');

  if (!fs.existsSync(issuesDir)) {
    console.error(`Issues directory not found: ${issuesDir}`);
    return;
  }

  console.log(`\nProcessing ${repoName}...`);

  // Load all issue files
  const issueFiles = fs.readdirSync(issuesDir)
    .filter(f => f.startsWith('issue-') && f.endsWith('.json'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/issue-(\d+)/)[1]);
      const numB = parseInt(b.match(/issue-(\d+)/)[1]);
      return numA - numB;
    });

  console.log(`  Found ${issueFiles.length} issues`);

  // Load generation log
  const log = options.resume ? loadGenerationLog(repoDir) : {
    startedAt: new Date().toISOString(),
    completedAt: null,
    totalIssues: issueFiles.length,
    processed: 0,
    failed: 0,
    failedIssues: [],
    processedIssues: [],
    inputTokens: 0,
    outputTokens: 0,
  };

  // Filter to unprocessed issues
  const processedSet = new Set(log.processedIssues || []);
  let toProcess = issueFiles.filter(f => {
    const num = parseInt(f.match(/issue-(\d+)/)[1]);
    if (processedSet.has(num)) return false;
    if (!options.force) {
      const cardPath = path.join(repoDir, 'issue-cards', `issue-${num}.json`);
      if (fs.existsSync(cardPath)) {
        processedSet.add(num);
        return false;
      }
    }
    return true;
  });

  if (options.limit) {
    toProcess = toProcess.slice(0, options.limit);
  }

  console.log(`  To process: ${toProcess.length} issues`);

  if (toProcess.length === 0) {
    console.log('  Nothing to process');
    buildCardsIndex(repoDir);
    return;
  }

  if (options.dryRun) {
    console.log('  [DRY RUN] Would process:');
    toProcess.slice(0, 10).forEach(f => {
      const num = f.match(/issue-(\d+)/)[1];
      console.log(`    - Issue #${num}`);
    });
    if (toProcess.length > 10) {
      console.log(`    ... and ${toProcess.length - 10} more`);
    }
    return;
  }

  const model = options.model || CONFIG.model;
  console.log(`  Using model: ${model}`);

  // Process issues with concurrency
  const concurrency = options.concurrency || CONFIG.concurrency;
  let processed = 0;
  let failed = 0;

  for (let i = 0; i < toProcess.length; i += concurrency) {
    const batch = toProcess.slice(i, i + concurrency);
    const promises = batch.map(async (issueFile) => {
      const num = parseInt(issueFile.match(/issue-(\d+)/)[1]);
      const issuePath = path.join(issuesDir, issueFile);
      const issue = JSON.parse(fs.readFileSync(issuePath, 'utf-8'));

      try {
        process.stdout.write(`  Processing #${num}...`);
        const card = await generateCard(issue, repoName, model);
        saveCard(repoDir, card);
        log.processedIssues.push(num);
        processed++;
        console.log(` done (${card.category}/${card.subcategory})`);
        return { success: true, num };
      } catch (error) {
        failed++;
        log.failedIssues.push(num);
        console.log(` FAILED: ${error.message}`);
        return { success: false, num, error: error.message };
      }
    });

    await Promise.all(promises);

    // Update and save progress after each batch
    log.processed = processedSet.size + processed;
    log.failed = failed;
    saveGenerationLog(repoDir, log);

    // Progress update
    const total = toProcess.length;
    const done = processed + failed;
    const pct = Math.round((done / total) * 100);
    console.log(`  Progress: ${done}/${total} (${pct}%) - ${failed} failed`);
  }

  // Mark complete
  log.completedAt = new Date().toISOString();
  log.totalIssues = issueFiles.length;
  saveGenerationLog(repoDir, log);

  // Build cards index
  buildCardsIndex(repoDir);

  console.log(`  Completed: ${processed} processed, ${failed} failed`);
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

function listRepos() {
  if (!fs.existsSync(REPOS_DIR)) return [];
  return fs.readdirSync(REPOS_DIR).filter(f => {
    const issuesDir = path.join(REPOS_DIR, f, 'issues');
    return fs.existsSync(issuesDir) && fs.statSync(issuesDir).isDirectory();
  });
}

function parseArgs(args) {
  const options = {
    repos: [],
    resume: false,
    dryRun: false,
    force: false,
    limit: null,
    concurrency: CONFIG.concurrency,
    model: CONFIG.model,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--resume') {
      options.resume = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--force') {
      options.force = true;
    } else if (arg === '--limit') {
      options.limit = parseInt(args[++i], 10);
    } else if (arg === '--concurrency') {
      options.concurrency = parseInt(args[++i], 10);
    } else if (arg === '--model') {
      options.model = args[++i];
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
Generate Semantic Issue Cards

Usage:
  node scripts/generate-cards.js [repo-dir] [options]

Options:
  --resume         Resume from last processed issue
  --dry-run        Show what would be processed without API calls
  --limit N        Process only N issues (for testing)
  --force          Regenerate cards even if they exist
  --concurrency N  Number of concurrent requests (default: ${CONFIG.concurrency})
  --model M        Model to use: haiku, sonnet, opus (default: ${CONFIG.model})
  --help, -h       Show this help

Requirements:
  Claude CLI must be installed and authenticated (claude command available)

Examples:
  node scripts/generate-cards.js                           # All repos
  node scripts/generate-cards.js temporalio-api            # Single repo
  node scripts/generate-cards.js temporalio-api --dry-run  # Preview
  node scripts/generate-cards.js temporalio-api --limit 5  # Test with 5 issues
  node scripts/generate-cards.js --resume                  # Resume all repos
  node scripts/generate-cards.js --model sonnet            # Use Sonnet model

Available repositories:`);
  listRepos().forEach(r => console.log(`  ${r}`));
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  // Get repos to process
  let repos = options.repos;
  if (repos.length === 0) {
    repos = listRepos();
    console.log(`Processing all ${repos.length} repositories...`);
  }

  // Normalize repo names
  repos = repos.map(r => {
    if (!r.startsWith('temporalio-')) {
      const withPrefix = `temporalio-${r}`;
      if (fs.existsSync(path.join(REPOS_DIR, withPrefix))) {
        return withPrefix;
      }
    }
    return r;
  });

  // Process each repo
  for (const repo of repos) {
    await processRepo(repo, options);
  }

  console.log('\nDone!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
