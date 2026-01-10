# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Local GitHub issue tracking system for Temporal repositories. Mirrors issues for offline analysis using GitHub CLI (`gh`) and Node.js scripts.

## Currently Tracked (5,770 issues)

| Repository | Directory | Open | Closed | Total |
|------------|-----------|------|--------|-------|
| temporalio/temporal | temporalio-temporal | 533 | 951 | 1484 |
| temporalio/sdk-java | temporalio-sdk-java | 216 | 724 | 940 |
| temporalio/sdk-go | temporalio-sdk-go | 163 | 661 | 824 |
| temporalio/sdk-typescript | temporalio-sdk-typescript | 144 | 653 | 797 |
| temporalio/sdk-python | temporalio-sdk-python | 114 | 475 | 589 |
| temporalio/features | temporalio-features | 244 | 138 | 382 |
| temporalio/sdk-dotnet | temporalio-sdk-dotnet | 49 | 240 | 289 |
| temporalio/sdk-php | temporalio-sdk-php | 49 | 211 | 260 |
| temporalio/sdk-ruby | temporalio-sdk-ruby | 22 | 158 | 180 |
| temporalio/api | temporalio-api | 13 | 12 | 25 |

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
└── recent.md                   # Recent issues analysis (LLM-generated)

repos/                          # Per-repository data
└── {owner}-{repo}/
    ├── issues/                 # Raw JSON per issue (issue-{num}.json)
    ├── issues-index.json       # Aggregated index with engagement stats
    └── sync-metadata.json      # Sync state (last_sync, issue_count)

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
└── list-open-issues.sh         # List open issues from repo dir
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
