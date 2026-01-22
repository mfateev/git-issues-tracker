# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Local GitHub issue tracking system for Temporal repositories. Mirrors issues for offline analysis using GitHub CLI (`gh`) and Node.js scripts.

## Currently Tracked Repositories

| Repository | Directory |
|------------|-----------|
| temporalio/temporal | temporalio-temporal |
| temporalio/sdk-java | temporalio-sdk-java |
| temporalio/sdk-go | temporalio-sdk-go |
| temporalio/sdk-typescript | temporalio-sdk-typescript |
| temporalio/sdk-python | temporalio-sdk-python |
| temporalio/features | temporalio-features |
| temporalio/sdk-dotnet | temporalio-sdk-dotnet |
| temporalio/sdk-php | temporalio-sdk-php |
| temporalio/sdk-ruby | temporalio-sdk-ruby |
| temporalio/api | temporalio-api |

Run `node scripts/build-index.js --list` for current issue counts.

## Common Commands

```bash
# Update all tracked repos (syncs all issues - open and closed, including missing)
./scripts/update-all.sh

# Track a new repository (open issues)
./scripts/fetch-issues.sh owner/repo
node scripts/build-index.js owner-repo

# Fetch closed issues
./scripts/fetch-issues.sh owner/repo --state closed

# Fetch ALL issues (open + closed)
./scripts/fetch-issues.sh owner/repo --state all

# Fetch closed issues for all tracked repos
./scripts/fetch-closed.sh

# Fetch closed issues for single repo
./scripts/fetch-closed.sh temporalio-sdk-java

# Update single repo (syncs updated + downloads missing issues)
./scripts/update-issues.sh owner-repo

# List tracked repositories
node scripts/build-index.js --list

# Generate statistics
node scripts/generate-stats.js --all
node scripts/generate-aggregate-stats.js

# Analysis (single repo)
node scripts/analyze-issues.js <repo-dir-name> <command>

# Analysis (all repos)
node scripts/analyze-all.js <command>
```

Analysis commands: `stats`, `age`, `bugs`, `testserver`, `security`, `upvotes`, `comments`, `engagement`, `priority`, `recent`, `stale`, `categories`, `report`

```bash
# Get full issue content (for deep analysis)
node scripts/get-issue.js <repo> <issue-number>
node scripts/get-issue.js temporalio-temporal 680
node scripts/get-issue.js sdk-typescript 1334   # 'temporalio-' prefix optional

# List open issues for a repo (number|title|labels|upvotes|comments)
./scripts/list-open-issues.sh temporalio-sdk-ruby
```

## Semantic Analysis Pipeline

Three-phase pipeline for intelligent issue analysis that fits within context limits:

```bash
# Phase 1: Generate semantic issue cards (LLM-based)
node scripts/generate-cards.js                           # All repos
node scripts/generate-cards.js temporalio-api            # Single repo
node scripts/generate-cards.js temporalio-api --dry-run  # Preview without API calls
node scripts/generate-cards.js temporalio-api --limit 5  # Test with 5 issues
node scripts/generate-cards.js --resume                  # Resume interrupted run
node scripts/generate-cards.js --model sonnet            # Use different model

# Phase 2: Build enhanced index (script-based, no LLM)
node scripts/build-enhanced-index.js                     # All repos with cards
node scripts/build-enhanced-index.js temporalio-api      # Single repo
node scripts/build-enhanced-index.js --summary-only      # Just rebuild cards-summary.txt

# Phase 3: Generate theme summaries (LLM-based)
node scripts/generate-themes.js --list                   # Show themes with issue counts
node scripts/generate-themes.js testing                  # Generate single theme
node scripts/generate-themes.js testing --dry-run        # Preview matches
node scripts/generate-themes.js --all                    # Generate all themes

# Quick search across all issues (grep-friendly)
grep "nexus" analysis/cards-summary.txt
grep "\[sdk-go\].*\[bug\].*severity:high" analysis/cards-summary.txt
grep "ExecuteActivity" analysis/cards-summary.txt
```

**Requirements:** Claude CLI must be installed and authenticated (`claude` command available)

## Architecture

```
analysis/                       # Issue analysis documents
├── summary.md                  # Cross-repository summary (LLM-generated)
├── server.md                   # Temporal Server analysis
├── features.md                 # Cross-SDK features analysis
├── java.md                     # Java SDK analysis
├── go.md                       # Go SDK analysis
├── typescript.md               # TypeScript SDK analysis
├── python.md                   # Python SDK analysis
├── dotnet.md                   # .NET SDK analysis
├── php.md                      # PHP SDK analysis
├── ruby.md                     # Ruby SDK analysis
├── stats-all.md                # Cross-repo statistics (script-generated)
├── stats-<sdk>.md              # Per-SDK statistics (script-generated)
├── contributors.md             # Top contributors by repo
├── stats-recent.md             # Recent issues list (script-generated)
├── recent.md                   # Recent issues analysis (LLM-generated)
├── cards-summary.txt           # Grep-friendly one-line issue summaries (Phase 2)
└── themes/                     # Cross-cutting theme analysis (Phase 3)
    ├── index.md                # Theme index with issue counts
    ├── testing.md              # Testing-related issues across repos
    ├── performance.md          # Performance issues
    ├── api-design.md           # API design patterns
    └── ...                     # Other themes (14 total)

repos/                          # Per-repository data
└── {owner}-{repo}/
    ├── issues/                 # Raw JSON per issue (issue-{num}.json)
    ├── issues-index.json       # Aggregated index with engagement stats
    ├── issues-index-enhanced.json  # Enhanced index with semantic fields (Phase 2)
    ├── issues-by-area.json     # Issues grouped by subcategory (Phase 2)
    ├── sync-metadata.json      # Sync state (last_sync, issue_count)
    └── issue-cards/            # Semantic issue cards (Phase 1)
        ├── issue-{num}.json    # Individual semantic card per issue
        ├── cards-index.json    # All cards combined for bulk loading
        └── generation-log.json # Processing metadata and resume state

scripts/
├── fetch-issues.sh             # Full download (uses gh CLI, supports --state)
├── fetch-closed.sh             # Convenience: fetch closed issues for all repos
├── update-issues.sh            # Incremental sync + missing issues for one repo
├── update-all.sh               # Update all tracked repos
├── build-index.js              # Creates issues-index.json
├── analyze-issues.js           # Query and reporting tool (single repo)
├── analyze-all.js              # Query and reporting tool (all repos)
├── generate-stats.js           # Generate per-SDK statistics
├── generate-aggregate-stats.js # Generate cross-repo statistics
├── generate-contributors.js    # Generate contributors.md
├── generate-recent.js          # Generate stats-recent.md
├── get-issue.js                # Get full content of single issue
├── list-open-issues.sh         # List open issues from repo dir
├── generate-cards.js           # Phase 1: Generate semantic issue cards (LLM)
├── build-enhanced-index.js     # Phase 2: Build enhanced index + summary (script)
└── generate-themes.js          # Phase 3: Generate theme summaries (LLM)
```

## Key Patterns

- Repository names normalized: `owner/repo` → `owner-repo` for directories
- Scripts check GitHub API rate limit before fetching (500 request buffer)
- Priority score: `upvotes × 2 + comments`
- Upvotes extracted from THUMBS_UP reactions during indexing
- Requires authenticated `gh` CLI
- Statistics files (`stats-*.md`) are script-generated; analysis files (`<sdk>.md`) are LLM-generated
- Issue states: `--state open` (default), `--state closed`, `--state all`
- Closed issues are stored alongside open issues in the same `issues/` directory
- sync-metadata.json tracks counts by state: `{open, closed, total}`

## Statistics & Metrics

Statistics files (`stats-*.md`) include the following sections:

### Resolution Metrics
- **Resolution Rate**: Percentage of total issues that are closed
- **Time to Close**: Median, average, and P90 in both calendar days and business days (weekends excluded)
- **Percentile Breakdown**: % resolved within 7, 30, 90, 180, and 365 days
- **Closure Reasons**: Inferred from labels and metadata (not explicit GitHub data):
  - `duplicate` - Has duplicate-related label
  - `wontfix` - Has wontfix/won't-fix label
  - `stale` - Has stale label or closed by stale bot
  - `invalid` - Has invalid label
  - `self_resolved` - Reporter closed their own issue
  - `fixed` - Has fix-related label or linked PR
  - `completed` - Has completion-related label
  - `unknown` - Could not determine reason

### Issue Velocity (12-Month)
- Issues opened vs closed over the last 12 months
- Net change indicates backlog trend (growing/shrinking/stable)

### 6-Month Detailed Analysis
- Recent opened and closed counts
- Bugs closed and enhancements completed
- Popular requests resolved (issues with 3+ upvotes that were closed)

## Semantic Analysis Data

The semantic analysis pipeline creates intermediate data structures for efficient issue analysis:

### Issue Cards (Phase 1)
Per-issue semantic summaries (~200-400 tokens each) with structured fields:

| Field | Description |
|-------|-------------|
| `summary` | 1-3 sentence description of the issue |
| `category` | bug, feature, question, docs, other |
| `subcategory` | Specific area (e.g., "activity-heartbeat", "workflow-replay") |
| `apis` | Temporal APIs mentioned (e.g., ExecuteActivity, StartWorkflow) |
| `components` | Affected code components (e.g., worker, activity-executor) |
| `concepts` | Abstract concepts for semantic search (e.g., timeout, retry) |
| `severity` | low, medium, high, critical |
| `userImpact` | How this affects users |
| `rootCause` | Technical root cause (if identified) |
| `proposedFix` | Suggested solution (if mentioned) |
| `workaround` | Temporary workaround (if mentioned) |
| `resolution` | For closed issues: fixed, wontfix, duplicate, stale, invalid |
| `related` | Related issue numbers |
| `keyQuote` | Most important quote from discussion |

### Enhanced Index (Phase 2)
Combines base index data with:
- **Objective fields** (extracted by script): bodyLength, hasCodeBlocks, hasStackTrace, mentionsVersions, linkedIssues, isQuestion, hasPR
- **Semantic fields** (from cards): summary, category, subcategory, apis, components, concepts, severity

### Theme Summaries (Phase 3)
Cross-cutting analysis documents for 14 themes:
- testing, nexus, performance, observability, versioning
- signals-updates, activities, error-handling, serialization
- security, breaking-changes, high-priority, api-design, workflow-execution

Each theme document includes: Overview, By Repository analysis, Common Patterns, High-Impact Issues table, and Recommendations.

### cards-summary.txt Format
Grep-friendly one-line summaries:
```
#2141 [sdk-go] [O] [bug] [testing] Summary text | apis:X,Y | components:A,B | concepts:C,D | severity:medium
```
- `[O]` = Open, `[C]` = Closed
- Pipe-separated fields for easy grep filtering

## LLM-Generated Files

**Important:** Never edit LLM-generated analysis files directly. If changes are needed:

1. Update the corresponding template in `.claude/templates/`
2. Run `/update` to regenerate all analysis documents

Templates:
- `summary.md` → generates `analysis/summary.md`
- `sdk-analysis.md` → generates SDK analysis files (java.md, go.md, etc.)
- `server-analysis.md` → generates `analysis/server.md`
- `features-analysis.md` → generates `analysis/features.md`
- `api-analysis.md` → generates `analysis/api.md`
- `recent-analysis.md` → generates `analysis/recent.md`
