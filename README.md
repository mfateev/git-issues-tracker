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
| [Server](https://github.com/temporalio/temporal) | 505 | 1,021 | 1,526 | External workflow wait (74 upvotes) |
| [Java SDK](https://github.com/temporalio/sdk-java) | 221 | 741 | 962 | Kotlin coroutines support (15 upvotes) |
| [Go SDK](https://github.com/temporalio/sdk-go) | 171 | 683 | 854 | Clean worker shutdown (16 upvotes) |
| [TypeScript SDK](https://github.com/temporalio/sdk-typescript) | 147 | 679 | 826 | OpenAPI/agents integration (20 upvotes) |
| [Python SDK](https://github.com/temporalio/sdk-python) | 89 | 530 | 619 | Sandbox/debugging improvements |
| [Features](https://github.com/temporalio/features) | 254 | 151 | 405 | Declarative schedules (17 upvotes) |
| [.NET SDK](https://github.com/temporalio/sdk-dotnet) | 49 | 251 | 300 | .NET Trimming support (7 upvotes) |
| [PHP SDK](https://github.com/temporalio/sdk-php) | 39 | 230 | 269 | Marshaller documentation (5 upvotes) |
| [Ruby SDK](https://github.com/temporalio/sdk-ruby) | 24 | 163 | 187 | SDK stability |
| [API](https://github.com/temporalio/api) | 14 | 13 | 27 | Buf schema registry (6 upvotes) |
| **Total** | **1,513** | **4,462** | **5,975** | |

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
