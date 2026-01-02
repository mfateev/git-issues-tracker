# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Local GitHub issue tracking system for Temporal repositories. Mirrors issues for offline analysis using GitHub CLI (`gh`) and Node.js scripts.

## Currently Tracked (1,550 issues)

| Repository | Directory | Issues |
|------------|-----------|--------|
| temporalio/temporal | temporalio-temporal | 530 |
| temporalio/features | temporalio-features | 247 |
| temporalio/sdk-java | temporalio-sdk-java | 215 |
| temporalio/sdk-go | temporalio-sdk-go | 163 |
| temporalio/sdk-typescript | temporalio-sdk-typescript | 148 |
| temporalio/sdk-python | temporalio-sdk-python | 115 |
| temporalio/sdk-dotnet | temporalio-sdk-dotnet | 48 |
| temporalio/sdk-php | temporalio-sdk-php | 47 |
| temporalio/sdk-ruby | temporalio-sdk-ruby | 24 |
| temporalio/api | temporalio-api | 13 |

## Common Commands

```bash
# Update all tracked repos
./scripts/update-all.sh

# Track a new repository
./scripts/fetch-issues.sh owner/repo
node scripts/build-index.js owner-repo

# Update single repo
./scripts/update-issues.sh owner-repo

# List tracked repositories
node scripts/build-index.js --list

# Generate statistics
node scripts/generate-stats.js --all
node scripts/generate-aggregate-stats.js

# Generate readable issues.md files
node scripts/generate-readable.js --all

# Analysis (single repo)
node scripts/analyze-issues.js <repo-dir-name> <command>

# Analysis (all repos)
node scripts/analyze-all.js <command>
```

Analysis commands: `stats`, `age`, `bugs`, `testserver`, `security`, `upvotes`, `comments`, `engagement`, `priority`, `recent`, `stale`, `categories`, `report`

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
└── recent.md                   # Recent issues across all repos

repos/                          # Per-repository data
└── {owner}-{repo}/
    ├── issues/                 # Raw JSON per issue (issue-{num}.json)
    ├── issues.md               # Human-readable issue list
    ├── issues-index.json       # Aggregated index with engagement stats
    └── sync-metadata.json      # Sync state (last_sync, issue_count)

scripts/
├── fetch-issues.sh             # Full download (uses gh CLI)
├── update-issues.sh            # Incremental sync for one repo
├── update-all.sh               # Update all tracked repos
├── build-index.js              # Creates issues-index.json
├── analyze-issues.js           # Query and reporting tool (single repo)
├── analyze-all.js              # Query and reporting tool (all repos)
├── generate-stats.js           # Generate per-SDK statistics
├── generate-aggregate-stats.js # Generate cross-repo statistics
├── generate-readable.js        # Generate issues.md files
├── generate-contributors.js    # Generate contributors.md
└── generate-recent.js          # Generate recent.md
```

## Key Patterns

- Repository names normalized: `owner/repo` → `owner-repo` for directories
- Scripts check GitHub API rate limit before fetching (500 request buffer)
- Priority score: `upvotes × 2 + comments`
- Upvotes extracted from THUMBS_UP reactions during indexing
- Requires authenticated `gh` CLI
- Statistics files (`stats-*.md`) are script-generated; analysis files (`<sdk>.md`) are LLM-generated
