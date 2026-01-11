# Theme Analysis Index

Generated: 2026-01-10T19:43:26.082Z

## Available Themes

| Theme | Description | Issues | Status |
|-------|-------------|--------|--------|
| Testing | Test framework, mocking, replay testing, test utilities | 1 | Not generated |
| Nexus | Nexus operations, endpoints, and cross-namespace communication | 0 | Not generated |
| Performance | Latency, throughput, memory usage, optimization | 0 | Not generated |
| Observability | Metrics, tracing, logging, monitoring | 0 | Not generated |
| Worker Versioning | Worker versioning, build IDs, deployment strategies | 1 | Not generated |
| Signals and Updates | Signal and Update patterns, workflow communication | 0 | Not generated |
| Activities | Activity patterns, heartbeats, timeouts, local activities | 1 | Not generated |
| Error Handling | Error handling, retries, timeouts, failure modes | 1 | Not generated |
| Serialization | Payload codecs, data converters, custom serialization | 4 | Not generated |
| Security | Authentication, TLS, certificates, authorization | 1 | Not generated |
| Breaking Changes | API compatibility, migration issues, deprecations | 6 | Not generated |
| High Priority | High severity or high engagement issues | 1 | Not generated |
| API Design | API design patterns, proto definitions, SDK interfaces | 14 | [View](api-design.md) |
| Workflow Execution | Workflow lifecycle, replay, determinism, execution issues | 4 | Not generated |

## Usage

```bash
# Generate a specific theme
node scripts/generate-themes.js testing

# Generate all themes
node scripts/generate-themes.js --all

# Preview matches without generating
node scripts/generate-themes.js testing --dry-run
```

## Statistics

- Total cards indexed: 25
- Themes defined: 14