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
| [Recent Issues](analysis/recent.md) | Issues from the last 30 days |
| [Statistics](analysis/stats-all.md) | Aggregate statistics across all repos |

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
| [API](https://github.com/temporalio/api) | 13 | Buf schema registry (6 upvotes) |
| **Total** | **1,550** | |

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
