# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a local GitHub issue tracking system that mirrors issues from GitHub repositories for offline analysis. It uses the GitHub CLI (`gh`) to fetch issues and Node.js scripts for indexing and analysis.

## Common Commands

### Track a New Repository
```bash
./scripts/fetch-issues.sh owner/repo
node scripts/build-index.js owner-repo
```

### Update and Analyze
```bash
# Incremental update (only changed issues)
./scripts/update-issues.sh owner-repo

# Rebuild index
node scripts/build-index.js owner-repo

# Update all tracked repos
node scripts/build-index.js --all

# List tracked repositories
node scripts/build-index.js --list
```

### Analysis Commands
```bash
node scripts/analyze-issues.js <repo-dir-name> <command>
```
Available commands: `stats`, `age`, `bugs`, `testserver`, `security`, `upvotes`, `comments`, `engagement`, `priority`, `recent`, `stale`, `categories`

## Architecture

```
repos/                          # Per-repository data
└── {owner}-{repo}/
    ├── issues/                 # Raw JSON per issue (issue-{num}.json)
    ├── issues-index.json       # Aggregated index with engagement stats
    ├── sync-metadata.json      # Sync state (last_sync, issue_count)
    └── PROPOSAL.md             # Optional analysis document

scripts/
├── fetch-issues.sh             # Full download (uses gh CLI)
├── update-issues.sh            # Incremental sync
├── build-index.js              # Creates issues-index.json with engagement metrics
└── analyze-issues.js           # Query and reporting tool
```

## Data Structures

**Issue JSON** (`issues/issue-{num}.json`): Contains `number`, `title`, `body`, `state`, `author`, `labels`, `comments`, `reactionGroups`, timestamps.

**Index JSON** (`issues-index.json`): Contains issue summaries with computed `upvotes` (from THUMBS_UP reactions), `commentCount`, plus aggregated stats by state/label and engagement metrics.

## Key Patterns

- Repository names are normalized: `owner/repo` becomes `owner-repo` for directory names
- Engagement metrics: upvotes (👍 reactions) and comment counts are extracted during indexing
- Priority score formula: `upvotes * 2 + comments`
- Scripts use `gh` CLI for GitHub API access; ensure it's authenticated
