# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 144
**Total Closed Issues:** 5
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-sdk-typescript/issues.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has 144 open issues with a growing backlog (+50 net issues in the last 12 months). User demand is concentrated around alternative runtime support (Bun), AI/agent integrations, and observability improvements. With 40% of issues stale and only a 3% resolution rate on tracked issues, the SDK would benefit from focused triage and addressing high-engagement feature requests.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 49 | High - includes SDK upgrade regressions and testing infrastructure issues |
| Enhancements | 84 | Medium - strong user demand for runtime and framework integrations |
| Documentation | 6 | Low - broken links and missing docs for features |
| Stale Issues | 58 | Medium - 40% of open issues need triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 171 |
| Total Comments | 342 |
| Issues with Upvotes | 37 (26%) |
| Issues with Comments | 73 (51%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 3% (5/149) |
| Median Time to Close | 17 days (calendar) / 14 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 60% |

### Recommended Actions

1. **Immediate:** Address performance regression in v1.13.x ([#1860](../repos/temporalio-sdk-typescript/issues.md#1860), [#1859](../repos/temporalio-sdk-typescript/issues.md#1859)) and SDK upgrade issues ([#1749](../repos/temporalio-sdk-typescript/issues.md#1749))
2. **Short-term:** Fix high-engagement bugs - Jest open handles ([#928](../repos/temporalio-sdk-typescript/issues.md#928)), NextJS 15 compatibility ([#1615](../repos/temporalio-sdk-typescript/issues.md#1615))
3. **Medium-term:** Evaluate Bun runtime support ([#1334](../repos/temporalio-sdk-typescript/issues.md#1334)) - highest community demand
4. **Long-term:** Build AI/agent integrations ([#1755](../repos/temporalio-sdk-typescript/issues.md#1755)), OpenTelemetry v2 support ([#1658](../repos/temporalio-sdk-typescript/issues.md#1658))
5. **Housekeeping:** Triage 58 stale issues (40% of backlog)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is growing significantly, with 55 issues opened and only 5 closed in the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 55 | 5 | +50 |

Backlog Growing: 50 more issues opened than closed in the last 12 months. The SDK needs increased investment in issue resolution to prevent backlog growth from becoming unmanageable.

### Last 6 Months: Detailed Analysis

Recent activity shows continued feature requests around observability and AI integrations, with performance regressions identified in recent SDK versions.

| Metric | Value |
|--------|-------|
| Issues Opened | 26 |
| Issues Closed | 5 |
| Bugs Closed | 2 |
| Enhancements Completed | 3 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#1432](../repos/temporalio-sdk-typescript/issues.md#1432) | 5 | Simplify proper usage of AsyncLocalStorage in Workflow context |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | 46 | 46 | Run temporal worker in bun |
| 2 | [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | 20 | 8 | Temporal integration for @openai/agents |
| 3 | [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | 19 | 1 | Add support for opentelemetry v2 |
| 4 | [#207](../repos/temporalio-sdk-typescript/issues.md#207) | 9 | 7 | Enable in-browser usage of gRPC client |
| 5 | [#1499](../repos/temporalio-sdk-typescript/issues.md#1499) | 7 | 0 | Native Request Batching |
| 6 | [#928](../repos/temporalio-sdk-typescript/issues.md#928) | 7 | 26 | Jest detects open handles |
| 7 | [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | 6 | 1 | Failure to start ephemeral server prevents shutdown |
| 8 | [#933](../repos/temporalio-sdk-typescript/issues.md#933) | 6 | 2 | Create separate core library for workflow types |
| 9 | [#1749](../repos/temporalio-sdk-typescript/issues.md#1749) | 4 | 4 | Workflow task not found after SDK upgrade |
| 10 | [#1621](../repos/temporalio-sdk-typescript/issues.md#1621) | 4 | 0 | Include musl-based shared library in package |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | 138 | Run temporal worker in bun |
| 2 | [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | 48 | Temporal integration for @openai/agents |
| 3 | [#483](../repos/temporalio-sdk-typescript/issues.md#483) | 45 | NestJS Transport / Integration |
| 4 | [#928](../repos/temporalio-sdk-typescript/issues.md#928) | 40 | Jest detects open handles |
| 5 | [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | 39 | Add support for opentelemetry v2 |
| 6 | [#207](../repos/temporalio-sdk-typescript/issues.md#207) | 25 | Enable in-browser usage of gRPC client |
| 7 | [#1615](../repos/temporalio-sdk-typescript/issues.md#1615) | 20 | Cannot use Temporal with NextJS 15 |
| 8 | [#1499](../repos/temporalio-sdk-typescript/issues.md#1499) | 14 | Native Request Batching |
| 9 | [#933](../repos/temporalio-sdk-typescript/issues.md#933) | 14 | Create separate core library for workflow types |
| 10 | [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | 13 | Failure to start ephemeral server prevents shutdown |

---

## Issue Analysis by Category

### High-Priority Bugs (10 issues)

These bugs impact developer experience, SDK stability, or production reliability.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#928](../repos/temporalio-sdk-typescript/issues.md#928) | 7 | Jest detects open handles - affects testing workflows |
| [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | 6 | Ephemeral server startup failure prevents process shutdown |
| [#1749](../repos/temporalio-sdk-typescript/issues.md#1749) | 4 | Workflow task not found after SDK upgrade - regression |
| [#1615](../repos/temporalio-sdk-typescript/issues.md#1615) | 3 | NextJS 15 incompatibility due to workflow function names |
| [#1325](../repos/temporalio-sdk-typescript/issues.md#1325) | 2 | Exception from workflow causes DataCloneError |
| [#1668](../repos/temporalio-sdk-typescript/issues.md#1668) | 2 | common package not importing @types/ms |
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | 0 | Performance regression from 1.13.1 to 1.13.2 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | 0 | High CPU usage with OTel instrumentation in v1.13.x |
| [#1790](../repos/temporalio-sdk-typescript/issues.md#1790) | 0 | Replay workflow history fails with nondeterminism error |
| [#939](../repos/temporalio-sdk-typescript/issues.md#939) | 1 | Worker crashes with async hook stack corruption |

### Medium-Priority Bugs (15 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1796](../repos/temporalio-sdk-typescript/issues.md#1796) | 1 | Changes in type inference of activity return type |
| [#1744](../repos/temporalio-sdk-typescript/issues.md#1744) | 1 | NDE replaying nested promises |
| [#1740](../repos/temporalio-sdk-typescript/issues.md#1740) | 1 | webpackConfigHook doesn't suppress all webpack output |
| [#1594](../repos/temporalio-sdk-typescript/issues.md#1594) | 1 | Schedule triggerImmediately ignores overlap policy |
| [#1587](../repos/temporalio-sdk-typescript/issues.md#1587) | 1 | Using async functions degrades performance |
| [#1578](../repos/temporalio-sdk-typescript/issues.md#1578) | 1 | Worker fails with --abort-on-uncaught-exception |
| [#1292](../repos/temporalio-sdk-typescript/issues.md#1292) | 1 | ESM Custom payload converters cannot be loaded |
| [#1858](../repos/temporalio-sdk-typescript/issues.md#1858) | 0 | Unable to import reflect-metadata in workflow bundle |
| [#1838](../repos/temporalio-sdk-typescript/issues.md#1838) | 0 | WorkflowExecutionAlreadyStartedError missing runId |
| [#1779](../repos/temporalio-sdk-typescript/issues.md#1779) | 0 | OTel interceptors bypass required SDK component |
| [#1738](../repos/temporalio-sdk-typescript/issues.md#1738) | 0 | OTel traceState handling issue |
| [#1733](../repos/temporalio-sdk-typescript/issues.md#1733) | 0 | RetryPolicy.maximumAttempt=0 throws unexpectedly |
| [#1721](../repos/temporalio-sdk-typescript/issues.md#1721) | 0 | Update-with-Start error message not shown |
| [#1717](../repos/temporalio-sdk-typescript/issues.md#1717) | 0 | Protobuf Payload Converter broken with protobufjs 7.5.2 |
| [#1663](../repos/temporalio-sdk-typescript/issues.md#1663) | 0 | Cannot use structuredClone in workflow code |

### Testing Infrastructure Issues (8 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#928](../repos/temporalio-sdk-typescript/issues.md#928) | 7 | Jest detects open handles |
| [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | 6 | Ephemeral server prevents shutdown |
| [#1702](../repos/temporalio-sdk-typescript/issues.md#1702) | 0 | Test suite timeout on first run |
| [#1687](../repos/temporalio-sdk-typescript/issues.md#1687) | 0 | Local env cannot be connected in unit tests |
| [#1549](../repos/temporalio-sdk-typescript/issues.md#1549) | 0 | Auto-skip time in time-skipping testing environment |
| [#1332](../repos/temporalio-sdk-typescript/issues.md#1332) | 1 | TestWorkflowEnvironment should support non-spawned servers |
| [#1233](../repos/temporalio-sdk-typescript/issues.md#1233) | 0 | nyc-test-coverage excessively difficult to use |
| [#1208](../repos/temporalio-sdk-typescript/issues.md#1208) | 0 | Add support for capturing Workflow test coverage |

---

## Enhancement Requests (84 issues)

### Runtime & Platform Support

The most requested category focuses on alternative JavaScript runtimes and deployment environments.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | 46 | Run temporal worker in Bun |
| [#207](../repos/temporalio-sdk-typescript/issues.md#207) | 9 | Enable in-browser usage of gRPC client |
| [#1621](../repos/temporalio-sdk-typescript/issues.md#1621) | 4 | Include musl-based shared library in package |
| [#933](../repos/temporalio-sdk-typescript/issues.md#933) | 6 | Create separate core library for workflow types |

### AI & Agent Integrations

Emerging demand for AI framework integrations reflects the growing intersection of workflows and AI agents.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | 20 | Temporal integration for @openai/agents |
| [#1864](../repos/temporalio-sdk-typescript/issues.md#1864) | 1 | Update AI SDK integration to v6 (closed) |

### Observability & Telemetry

Strong demand for improved OpenTelemetry support and metrics.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | 19 | Add support for opentelemetry v2 |
| [#915](../repos/temporalio-sdk-typescript/issues.md#915) | 3 | Emit metrics from client connection |
| [#1850](../repos/temporalio-sdk-typescript/issues.md#1850) | 0 | Implement OTel interceptors v1 as Plugin |
| [#1854](../repos/temporalio-sdk-typescript/issues.md#1854) | 0 | Correct docs for OtelCollectorExporter |
| [#1696](../repos/temporalio-sdk-typescript/issues.md#1696) | 0 | Otel exporter error handling |

### Framework Integrations

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#483](../repos/temporalio-sdk-typescript/issues.md#483) | 4 | NestJS Transport / Integration |
| [#1280](../repos/temporalio-sdk-typescript/issues.md#1280) | 3 | Bundle using Vite |
| [#783](../repos/temporalio-sdk-typescript/issues.md#783) | 1 | Better Nx support |

### API Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1499](../repos/temporalio-sdk-typescript/issues.md#1499) | 7 | Native Request Batching |
| [#1800](../repos/temporalio-sdk-typescript/issues.md#1800) | 2 | Distinguish error types in logs |
| [#1458](../repos/temporalio-sdk-typescript/issues.md#1458) | 2 | Support passing preloaded data converters to Client |
| [#1362](../repos/temporalio-sdk-typescript/issues.md#1362) | 2 | Worker.runReplayHistory() accept serialized History |
| [#1351](../repos/temporalio-sdk-typescript/issues.md#1351) | 2 | Support updating schedule by cronExpression |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#868](../repos/temporalio-sdk-typescript/issues.md#868) | 0 | Add lint rule preventing Query handlers from mutating state |
| [#1867](../repos/temporalio-sdk-typescript/issues.md#1867) | 0 | Per-Worker Logger |
| [#1718](../repos/temporalio-sdk-typescript/issues.md#1718) | 0 | Lazily load webpack |
| [#1710](../repos/temporalio-sdk-typescript/issues.md#1710) | 0 | Better type inference for MockActivityEnvironment.run |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

58 issues (40% of open issues) have had no activity for over 12 months.

**Close candidates:**
- [#207](../repos/temporalio-sdk-typescript/issues.md#207) - Browser gRPC usage (9 upvotes but 3+ years old, may need re-evaluation)
- [#915](../repos/temporalio-sdk-typescript/issues.md#915) - Client metrics (3 upvotes, 3+ years old)
- [#754](../repos/temporalio-sdk-typescript/issues.md#754) - listWorkflowExecutions friendly version (1 upvote, 3+ years)

**Needs triage:**
- [#1499](../repos/temporalio-sdk-typescript/issues.md#1499) - Native Request Batching (7 upvotes, needs roadmap decision)
- [#1280](../repos/temporalio-sdk-typescript/issues.md#1280) - Vite bundling (3 upvotes, alternative bundler support)
- [#1458](../repos/temporalio-sdk-typescript/issues.md#1458) - Preloaded data converters (2 upvotes)
- [#1332](../repos/temporalio-sdk-typescript/issues.md#1332) - Non-spawned server support in tests

**Keep open:**
- [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) - Bun support (46 upvotes, active community interest)
- [#933](../repos/temporalio-sdk-typescript/issues.md#933) - Core workflow library (6 upvotes, architectural improvement)
- [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) - Ephemeral server shutdown (6 upvotes, impacts testing)

### Duplicate Candidates

- [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) and [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) - Both relate to v1.13.x performance/CPU issues
- [#1779](../repos/temporalio-sdk-typescript/issues.md#1779) and [#1738](../repos/temporalio-sdk-typescript/issues.md#1738) - Both relate to OTel implementation issues

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix v1.13.x performance regression ([#1860](../repos/temporalio-sdk-typescript/issues.md#1860), [#1859](../repos/temporalio-sdk-typescript/issues.md#1859))
- Address SDK upgrade breaking changes ([#1749](../repos/temporalio-sdk-typescript/issues.md#1749))
- Resolve NextJS 15 compatibility ([#1615](../repos/temporalio-sdk-typescript/issues.md#1615))

### Phase 2: Developer Experience (Short-term)
- Fix Jest open handles issue ([#928](../repos/temporalio-sdk-typescript/issues.md#928))
- Improve ephemeral server lifecycle ([#1443](../repos/temporalio-sdk-typescript/issues.md#1443))
- Address testing infrastructure issues

### Phase 3: Feature Expansion (Medium-term)
- Evaluate Bun runtime support ([#1334](../repos/temporalio-sdk-typescript/issues.md#1334)) - 46 upvotes
- Build @openai/agents integration ([#1755](../repos/temporalio-sdk-typescript/issues.md#1755)) - 20 upvotes
- OpenTelemetry v2 support ([#1658](../repos/temporalio-sdk-typescript/issues.md#1658)) - 19 upvotes

### Phase 4: Maintenance (Ongoing)
- Triage and close 58 stale issues
- Address duplicate candidates
- Improve documentation for features like Updates, Nexus
