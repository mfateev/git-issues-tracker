# Temporal SDK Issue Tracker

Local mirror system for tracking GitHub issues across Temporal SDK repositories with engagement metrics and analysis.

## Tracked Repositories

| Repository | Issues | Top User Request |
|------------|--------|------------------|
| [Server](https://github.com/temporalio/temporal) | 530 | External workflow wait (70 upvotes) |
| [Features](https://github.com/temporalio/features) | 247 | Custom workflow markers (15 upvotes) |
| [Java SDK](https://github.com/temporalio/sdk-java) | 215 | Kotlin coroutines support |
| [Go SDK](https://github.com/temporalio/sdk-go) | 163 | Improved error handling |
| [TypeScript SDK](https://github.com/temporalio/sdk-typescript) | 148 | Bun support (46 upvotes) |
| [Python SDK](https://github.com/temporalio/sdk-python) | 115 | Sandbox/debugging improvements |
| [.NET SDK](https://github.com/temporalio/sdk-dotnet) | 48 | .NET Trimming support |
| [PHP SDK](https://github.com/temporalio/sdk-php) | 47 | Marshaller documentation |
| [Ruby SDK](https://github.com/temporalio/sdk-ruby) | 24 | SDK stability |
| **Total** | **1,537** | |

## Analysis

See [analysis/SUMMARY.md](analysis/SUMMARY.md) for cross-SDK insights including common themes, top user requests, and recommended initiatives.

## Quick Start

```bash
# Update all tracked repos
./scripts/update-all.sh

# Track a new repository
./scripts/fetch-issues.sh owner/repo
node scripts/build-index.js owner-repo

# Generate statistics
node scripts/generate-stats.js --all
node scripts/generate-aggregate-stats.js
```

## Structure

```
analysis/
├── SUMMARY.md              # Cross-repository summary (LLM-generated)
├── stats-all.md            # Aggregate statistics (script-generated)
├── stats-<sdk>.md          # Per-SDK statistics (script-generated)
├── <sdk>.md                # Per-SDK analysis (LLM-generated)
├── contributors.md         # Contributor statistics
└── recent.md               # Recent issues (last 30 days)

repos/{owner}-{repo}/
├── issues/                 # Individual issue JSON files
├── issues-index.json       # Quick lookup index with engagement stats
├── issues.md               # Human-readable issue list
└── sync-metadata.json      # Tracks sync state
```

## Documentation

- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Scripts, data formats, and querying guide
- **[CLAUDE.md](CLAUDE.md)** - AI assistant context
