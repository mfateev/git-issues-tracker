# Temporal SDK Issue Tracker

Local mirror system for tracking GitHub issues across Temporal SDK repositories with engagement metrics and analysis.

## 📊 Analysis Reports

| Report | Description |
|--------|-------------|
| **[📋 Cross-SDK Summary](analysis/summary.md)** | Common themes, top user requests, and recommended initiatives |
| [Temporal Server](analysis/server.md) | Server-specific issues and priorities |
| [Java SDK](analysis/java.md) | Java SDK analysis |
| [Go SDK](analysis/go.md) | Go SDK analysis |
| [TypeScript SDK](analysis/typescript.md) | TypeScript SDK analysis |
| [Python SDK](analysis/python.md) | Python SDK analysis |
| [.NET SDK](analysis/dotnet.md) | .NET SDK analysis |
| [PHP SDK](analysis/php.md) | PHP SDK analysis |
| [Ruby SDK](analysis/ruby.md) | Ruby SDK analysis |
| [API](analysis/api.md) | API protobuf definitions |
| [Features](analysis/features.md) | Cross-SDK features analysis |
| [Recent Issues Analysis](analysis/recent.md) | Themes and urgent issues from last 30 days |
| [Recent Issues List](analysis/stats-recent.md) | Raw list of issues from last 30 days |
| [Statistics](analysis/stats-all.md) | Aggregate statistics across all repos |
| **[🎯 Theme Analysis Index](analysis/themes/index.md)** | Cross-cutting theme analysis (API design, testing, performance, etc.) |

## Tracked Repositories

| Repository | Open | Closed | Total | Top User Request |
|------------|------|--------|-------|------------------|
| [Server](https://github.com/temporalio/temporal) | 533 | 951 | 1,484 | External workflow wait (70 upvotes) |
| [Java SDK](https://github.com/temporalio/sdk-java) | 216 | 724 | 940 | Kotlin coroutines support |
| [Go SDK](https://github.com/temporalio/sdk-go) | 163 | 661 | 824 | Clean worker shutdown (16 upvotes) |
| [TypeScript SDK](https://github.com/temporalio/sdk-typescript) | 144 | 653 | 797 | Bun support (46 upvotes) |
| [Python SDK](https://github.com/temporalio/sdk-python) | 114 | 475 | 589 | Sandbox/debugging improvements |
| [Features](https://github.com/temporalio/features) | 244 | 138 | 382 | Custom workflow markers (15 upvotes) |
| [.NET SDK](https://github.com/temporalio/sdk-dotnet) | 49 | 240 | 289 | .NET Trimming support (7 upvotes) |
| [PHP SDK](https://github.com/temporalio/sdk-php) | 49 | 211 | 260 | Marshaller documentation |
| [Ruby SDK](https://github.com/temporalio/sdk-ruby) | 22 | 158 | 180 | SDK stability |
| [API](https://github.com/temporalio/api) | 13 | 12 | 25 | Buf schema registry (6 upvotes) |
| **Total** | **1,547** | **4,223** | **5,770** | |

## Quick Start

```bash
claude -p "/update"   # Sync all repos and regenerate analysis
```

## Structure

```
analysis/
├── summary.md              # Cross-repository summary (LLM-generated)
├── stats-all.md            # Aggregate statistics (script-generated)
├── stats-<sdk>.md          # Per-SDK statistics (script-generated)
├── <sdk>.md                # Per-SDK analysis (LLM-generated)
├── contributors.md         # Contributor statistics
├── stats-recent.md         # Recent issues list (script-generated)
├── recent.md               # Recent issues analysis (LLM-generated)
├── cards-summary.txt       # Grep-friendly issue summaries (semantic)
└── themes/                 # Cross-cutting theme analysis (semantic)
    ├── index.md            # Theme index with issue counts
    └── <theme>.md          # Theme-specific analysis

repos/{owner}-{repo}/
├── issues/                 # Individual issue JSON files
├── issues-index.json       # Quick lookup index with engagement stats
├── issues-index-enhanced.json  # Enhanced index with semantic fields
├── issues-by-area.json     # Issues grouped by subcategory
├── sync-metadata.json      # Tracks sync state
└── issue-cards/            # Semantic issue cards
    ├── issue-<num>.json    # Individual semantic card per issue
    ├── cards-index.json    # All cards combined
    └── generation-log.json # Processing metadata
```

## Documentation

- **[CLAUDE.md](CLAUDE.md)** - AI assistant context and command reference
- **[Semantic Analysis Plan](docs/semantic-analysis-implementation-plan.md)** - Three-phase pipeline for intelligent issue analysis
