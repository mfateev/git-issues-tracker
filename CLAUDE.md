# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Local GitHub issue tracking system for Temporal repositories. Mirrors issues for offline analysis using GitHub CLI (`gh`) and Node.js scripts.

## Currently Tracked (1,537 issues)

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

# Analysis
node scripts/analyze-issues.js <repo-dir-name> <command>
```

Analysis commands: `stats`, `age`, `bugs`, `testserver`, `security`, `upvotes`, `comments`, `engagement`, `priority`, `recent`, `stale`, `categories`, `report`

## Architecture

```
analysis/                       # Issue analysis documents
├── SUMMARY.md                  # Cross-repository summary
├── server.md                   # Temporal Server
├── features.md                 # Cross-SDK features
├── java.md
├── go.md
├── typescript.md
├── python.md
├── dotnet.md
├── php.md
└── ruby.md

repos/                          # Per-repository data
└── {owner}-{repo}/
    ├── issues/                 # Raw JSON per issue (issue-{num}.json)
    ├── issues-index.json       # Aggregated index with engagement stats
    └── sync-metadata.json      # Sync state (last_sync, issue_count)

scripts/
├── fetch-issues.sh             # Full download (uses gh CLI)
├── update-issues.sh            # Incremental sync for one repo
├── update-all.sh               # Update all tracked repos
├── build-index.js              # Creates issues-index.json
└── analyze-issues.js           # Query and reporting tool
```

## Key Patterns

- Repository names normalized: `owner/repo` → `owner-repo` for directories
- Scripts check GitHub API rate limit before fetching (500 request buffer)
- Priority score: `upvotes × 2 + comments`
- Upvotes extracted from THUMBS_UP reactions during indexing
- Requires authenticated `gh` CLI
