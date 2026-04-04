# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 147
**Total Closed Issues:** 679
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has an 82% resolution rate (679/826) with 147 open issues. The backlog is **growing slowly** with 6 more issues opened than closed over the last 12 months. User demand is heavily concentrated on **AI agent integrations** (OpenAI Agents at 20 upvotes), **observability modernization** (OpenTelemetry v2 at 19 upvotes), and **browser/alternative runtime support** (in-browser gRPC at 9 upvotes). Core workflow functionality is mature, but ecosystem integration, testing ergonomics, and developer experience remain persistent friction points. Over half of all open issues (53%) are stale, indicating a significant triage backlog.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 45 | High - includes replay determinism issues and error handling gaps |
| Enhancements/Features | 86 | Medium - driven by AI integration, observability, and ecosystem support |
| Documentation | 6 | Low - manageable backlog |
| Stale Issues (>12 months) | 78 (53%) | Medium - over half the backlog needs triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs up) | 116 |
| Total Comments | 294 |
| Issues with Upvotes | 35 (24%) |
| Issues with Comments | 71 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (679/826) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 70% |

### Closure Reasons (Inferred)

| Reason | Count | % |
|--------|-------|---|
| Fixed (bugs) | 184 | 27% |
| Completed (features) | 224 | 33% |
| Self-resolved | 148 | 22% |
| Duplicate | 2 | 0% |
| Other | 121 | 18% |

### Recommended Actions

1. **Immediate:** Address replay determinism bugs ([#1966](https://github.com/temporalio/sdk-typescript/issues/1966), [#1790](https://github.com/temporalio/sdk-typescript/issues/1790), [#1744](https://github.com/temporalio/sdk-typescript/issues/1744)) and unhandled promise leaks ([#1960](https://github.com/temporalio/sdk-typescript/issues/1960))
2. **Short-term:** Fix long-standing Jest integration issues ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) and NextJS 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
3. **Medium-term:** OpenTelemetry v2 support ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)), AI agent integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)), browser gRPC client ([#207](https://github.com/temporalio/sdk-typescript/issues/207))
4. **Long-term:** Native request batching ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499)), separate core library ([#933](https://github.com/temporalio/sdk-typescript/issues/933)), NestJS integration ([#483](https://github.com/temporalio/sdk-typescript/issues/483))
5. **Housekeeping:** Triage 78 stale issues (53% of open backlog) for closure or roadmap placement

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is growing slowly, with a net increase of 6 issues over the last 12 months. December 2025 and March 2026 saw the largest spikes (+6 and +5 net respectively), while January 2026 (-2) and February 2026 (-4) showed healthy closure activity.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 90 | 84 | +6 |

Backlog Growing: 6 more issues opened than closed in the last 12 months.

| Month | Opened | Closed | Net Change |
|-------|--------|--------|------------|
| 2025-05 | 9 | 14 | -5 |
| 2025-06 | 7 | 2 | +5 |
| 2025-07 | 12 | 6 | +6 |
| 2025-08 | 9 | 11 | -2 |
| 2025-09 | 5 | 4 | +1 |
| 2025-10 | 4 | 6 | -2 |
| 2025-11 | 4 | 6 | -2 |
| 2025-12 | 11 | 5 | +6 |
| 2026-01 | 13 | 15 | -2 |
| 2026-02 | 3 | 7 | -4 |
| 2026-03 | 13 | 8 | +5 |

### Last 6 Months: Detailed Analysis

The last 6 months show a slight net increase of +2 issues, with strong closure activity in January and February 2026 offset by a spike in March. Resolution speed has slowed compared to the overall average, with a median of 60 calendar days vs. 26 overall.

| Metric | Value |
|--------|-------|
| Issues Opened | 48 |
| Issues Closed | 46 |
| Net Change | +2 |
| Bugs Closed | 22 |
| Enhancements Completed | 19 |

### Time to Close (Last 6 Months)

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average | 216 | 155 |
| Median | 60 | 43 |
| 90th Percentile | 628 | 448 |

### Resolution Speed (Last 6 Months)

| Timeframe | % Resolved |
|-----------|------------|
| Within 30 days | 39% |
| Within 90 days | 59% |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 51 | [Feature Request] Run temporal worker in bun |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | [Bug] Failure to start ephemeral server prevents shutdown |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of `AsyncLocalStorage` |
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | [Bug] Workflow task not found after SDK upgrade |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 14 | [Feature Request] Temporal integration for `@openai/agents` |
| 2 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 3 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 4 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching to Prevent rate limit errors |
| 5 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 6 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create a separate "core" library for workflow logic |
| 7 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library in package |
| 8 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | 37 | [Feature Request] NestJS Transport / Integration? |
| 9 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | 14 | [Bug] Cannot use Temporal with NextJS 15 |
| 10 | [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | 5 | Bundle using Vite |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 54 | Temporal integration for `@openai/agents` |
| 2 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | NestJS Transport / Integration? |
| 3 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | Jest detects open handles |
| 4 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | Add support for opentelemetry v2 |
| 5 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | Enable in-browser usage of gRPC client |
| 6 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | Cannot use Temporal with NextJS 15 |
| 7 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | Native Request Batching |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Create a separate "core" library for workflow logic |
| 9 | [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 12 | nyc-test-coverage is excessively difficult to use |
| 10 | [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 11 | Bundle using Vite |

---

## Issue Analysis by Category

### Runtime Support & Ecosystem Integration (High Priority - 5 issues)

The SDK faces significant pressure to support alternative JavaScript runtimes and popular frameworks. This represents the highest user demand area.

**OpenAI Agents Integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))** - 20 upvotes, 14 comments

The most-demanded open feature request. Users want first-class integration between Temporal workflows and the `@openai/agents` framework, reflecting the broader trend of AI agent orchestration being a key use case.

**NestJS Integration ([#483](https://github.com/temporalio/sdk-typescript/issues/483))** - 4 upvotes, 37 comments

A 4+ year old request with extensive community discussion. The community workaround [nestjs-temporal](https://github.com/KurtzL/nestjs-temporal) exists but official support is desired. Workflow sandboxing conflicts with NestJS DI patterns remain the main technical challenge.

**NextJS 15 Compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))** - 3 upvotes, 14 comments

Users cannot use Temporal with NextJS 15 due to `workflowTypes` relying on function names that get mangled during NextJS builds.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | OpenAI Agents integration -- highest demand feature |
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS integration -- community workaround exists |
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | NextJS 15 compatibility -- function name mangling |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Vite bundler support |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | In-browser usage of gRPC client |

### Testing Framework Issues (High Priority - 7+ open issues)

Testing remains a major developer experience pain point spanning Jest integration, ephemeral server lifecycle, and test coverage tooling.

**Jest Open Handles ([#928](https://github.com/temporalio/sdk-typescript/issues/928))** - 7 upvotes, 26 comments

A 3+ year old bug where Jest detects "neon threadsafe function" as an open handle, causing CI/CD pipelines to hang or require `--forceExit`. Root cause is Neon bindings using `ThreadSafeFunction` that is not properly cleaned up.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles -- 3+ years old |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | nyc-test-coverage is excessively difficult to use |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Temporal local env cannot connect in unit tests |
| [#1549](https://github.com/temporalio/sdk-typescript/issues/1549) | 0 | Auto-skip time in time-skipping env when waiting on update result |
| [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) | 1 | TestWorkflowEnvironment should support non-spawned servers |
| [#1144](https://github.com/temporalio/sdk-typescript/issues/1144) | 0 | Add support for capturing Workflow test coverage data with Jest |

### Workflow Replay & Determinism (High Priority - 4 open issues)

Issues related to workflow determinism and replay correctness that can cause production failures. These are particularly concerning because they can silently cause replay failures.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1966](https://github.com/temporalio/sdk-typescript/issues/1966) | 0 | Nondeterminism error: Invalid transition while handling update response in state Accepted |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay history fails with nondeterminism error -- child workflow IDs mismatch |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE replaying nested promises |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use structuredClone in workflow code |

### Performance & Stability (Medium Priority - 4 open issues)

Recent SDK versions resolved the v1.13.x performance regressions ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860) and [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) are now closed), but several stability issues remain.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Using async functions degrades performance |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | maxCachedWorkflows calculation ignores VM isolate memory |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | extractSourceMap takes excessive RAM on boot |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" |

### Error Handling & Developer Feedback (Medium Priority - 7 open issues)

Users report unclear or misleading error messages that complicate debugging, along with error serialization problems that lose type information across the Worker/Workflow boundary.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Cannot distinguish error types in logs across Worker/Workflow boundary |
| [#1838](https://github.com/temporalio/sdk-typescript/issues/1838) | 0 | WorkflowExecutionAlreadyStartedError should contain runId |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing exception from workflow results in DataCloneError |
| [#1721](https://github.com/temporalio/sdk-typescript/issues/1721) | 0 | Error from Client's Update-with-Start lacks proper message |
| [#1960](https://github.com/temporalio/sdk-typescript/issues/1960) | 0 | executeUpdateWithStart leaks unhandled Promise rejection on gRPC failure |
| [#1862](https://github.com/temporalio/sdk-typescript/issues/1862) | 0 | Importing workflow into activity causes misleading gRPC error |
| [#1675](https://github.com/temporalio/sdk-typescript/issues/1675) | 1 | Support AggregateError |

### Payload & Data Handling (Medium Priority - 8 issues)

Several issues affect payload conversion, search attributes, and data serialization.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1953](https://github.com/temporalio/sdk-typescript/issues/1953) | 0 | Worker.create() ignores pre-loaded LoadedDataConverter |
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | 1 | ESM Custom payload converters cannot be loaded |
| [#1717](https://github.com/temporalio/sdk-typescript/issues/1717) | 0 | Protobuf Payload Converter broken after protobufjs 7.5.2 upgrade |
| [#1512](https://github.com/temporalio/sdk-typescript/issues/1512) | 0 | Payload converter error can crash worker |
| [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) | 2 | common package not importing @types/ms |
| [#1715](https://github.com/temporalio/sdk-typescript/issues/1715) | 0 | SearchAttribute serialization should handle objects gracefully |
| [#1908](https://github.com/temporalio/sdk-typescript/issues/1908) | 0 | Update docs for typedSearchAttributes |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | Support passing preloaded data converters to Client |

### Workflow Sandbox & Bundling (Medium Priority - 6 open issues)

The workflow isolation sandbox and bundler continue to generate friction, particularly around module compatibility and configuration.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 1 | Unable to import reflect-metadata within workflow bundle |
| [#1965](https://github.com/temporalio/sdk-typescript/issues/1965) | 0 | Run Temporal worker without bundled workflows |
| [#1958](https://github.com/temporalio/sdk-typescript/issues/1958) | 0 | Workflow Bundler: Allow user to define modules to be preloaded |
| [#1740](https://github.com/temporalio/sdk-typescript/issues/1740) | 1 | webpackConfigHook doesn't suppress all webpack warnings |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation |
| [#1008](https://github.com/temporalio/sdk-typescript/issues/1008) | 2 | Provide more output when webpack fails |

---

## API & Component Hotspots

Based on subcategory analysis of all issues, these areas have the most issue volume:

| Area | Total Issue Count | Notable Themes |
|------|-------------------|----------------|
| test-framework | 49 | Jest handles, test coverage, ephemeral server, time-skipping |
| dependency-security | 38 | Historical vulnerability reports (mostly closed) |
| error-handling | 33 | Error serialization, type info loss, misleading messages |
| logging | 17 | Worker logging, workflow logging, log level configuration |
| workflow-replay | 14 | Determinism, replay history, nondeterminism errors |
| workflow-execution | 13 | Cancellation, isolation, execution lifecycle |
| worker-configuration | 10 | Max cached workflows, task queue config, sticky queues |
| workflow-sandbox | 5 | structuredClone, reflect-metadata, isolation opt-out |
| opentelemetry-instrumentation | 5 | OTel v2, bundling interaction, exporter config |
| schedule-management | 6 | Conflict tokens, overlap policy, update I/O types |

The **test-framework** area is by far the most issue-dense, reflecting persistent developer experience friction. The **error-handling** area is the second largest, with issues spanning both the workflow sandbox boundary and client-server interactions.

---

## Enhancement Requests (86 issues)

### AI & Agent Integration

A rapidly growing area of interest with the highest combined priority score among open issues.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Temporal integration for `@openai/agents` |
| [#1851](https://github.com/temporalio/sdk-typescript/issues/1851) | 0 | Support standalone activities |

### Observability & Telemetry

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | Add support for OpenTelemetry v2 |
| [#1971](https://github.com/temporalio/sdk-typescript/issues/1971) | 0 | Explain OpenTelemetryPlugin's interaction with WorkflowCodeBundler |
| [#1854](https://github.com/temporalio/sdk-typescript/issues/1854) | 0 | Correct docs for OtelCollectorExporter |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |
| [#384](https://github.com/temporalio/sdk-typescript/issues/384) | 0 | Add actual span time to workflow OTel interceptor spans |
| [#360](https://github.com/temporalio/sdk-typescript/issues/360) | 0 | Make tracing tags consistent across SDKs |

### Developer Experience & Tooling

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Separate "core" library for workflow logic (no bundler deps) |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library (Alpine/Docker support) |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Bundle using Vite |
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Add lint rule preventing Query handlers from mutating state |
| [#1113](https://github.com/temporalio/sdk-typescript/issues/1113) | 1 | Create `npx @temporalio/doctor` diagnostic command |
| [#472](https://github.com/temporalio/sdk-typescript/issues/472) | 0 | ESLint plugin |

### API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native Request Batching to prevent rate limit errors |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Enable in-browser usage of gRPC client |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope |
| [#754](https://github.com/temporalio/sdk-typescript/issues/754) | 1 | Friendly version of listWorkflowExecutions |
| [#1362](https://github.com/temporalio/sdk-typescript/issues/1362) | 2 | Worker.runReplayHistory() should accept serialized History |

### Workflow Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1895](https://github.com/temporalio/sdk-typescript/issues/1895) | 0 | Workflow API for independent deterministic pseudo-number sequence |
| [#1775](https://github.com/temporalio/sdk-typescript/issues/1775) | 0 | Support for creating v7 UUIDs from within Workflow Tasks |
| [#1824](https://github.com/temporalio/sdk-typescript/issues/1824) | 0 | Allow overriding Worker Deployment Version for Child Workflows |
| [#1418](https://github.com/temporalio/sdk-typescript/issues/1418) | 0 | Failures from update handler should be able to fail the workflow |
| [#1626](https://github.com/temporalio/sdk-typescript/issues/1626) | 0 | Expose Workflow cancel cause/reason |
| [#962](https://github.com/temporalio/sdk-typescript/issues/962) | 0 | Allow creating patches before workflow has started |

### Payload Size & Validation

Three recent issues focus on payload size limits and validation, suggesting growing demand as users handle larger data volumes.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1913](https://github.com/temporalio/sdk-typescript/issues/1913) | 0 | Fail workflow task if payloads size is known to be too large |
| [#1912](https://github.com/temporalio/sdk-typescript/issues/1912) | 0 | Warn if SDK tries to send a payload above a specific size |
| [#1914](https://github.com/temporalio/sdk-typescript/issues/1914) | 0 | Warn if SDK detects a workflow history over a certain size |

### Schedule & Nexus

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1967](https://github.com/temporalio/sdk-typescript/issues/1967) | 0 | Support conflict token retry loop for schedule updates |
| [#1948](https://github.com/temporalio/sdk-typescript/issues/1948) | 0 | Standardize Nexus Operation Input Arg. Deserialization Failure |
| [#1351](https://github.com/temporalio/sdk-typescript/issues/1351) | 2 | Support updating schedule by cron expression |
| [#1594](https://github.com/temporalio/sdk-typescript/issues/1594) | 1 | First schedule action started using triggerImmediately inconsistency |

---

## Housekeeping Recommendations

### Stale Issues (78 issues >1 year, no activity)

53% of open issues have had no activity in over 12 months. This is the largest maintenance concern.

**Close Candidates** (likely resolved or no longer relevant):
- Historical dependency security vulnerability reports from 2022-2023 (dozens of issues in the dependency-security area)
- [#959](https://github.com/temporalio/sdk-typescript/issues/959) - Broken documentation links from 2022
- [#561](https://github.com/temporalio/sdk-typescript/issues/561) - Documentation versioning from 2022
- [#417](https://github.com/temporalio/sdk-typescript/issues/417) - Export SDK version -- likely addressed in later releases
- [#1653](https://github.com/temporalio/sdk-typescript/issues/1653) - Broken Documentation Link

**Needs Triage:**
- [#207](https://github.com/temporalio/sdk-typescript/issues/207) (9 upvotes) - Browser gRPC client, 4+ years old but still getting upvotes
- [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) (7 upvotes) - Request batching, no activity since Aug 2024
- [#933](https://github.com/temporalio/sdk-typescript/issues/933) (6 upvotes) - Separate core library
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) (3 upvotes) - Client connection metrics, no activity since 2022
- [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) (1 upvote) - ESM custom payload converters, no activity since Jan 2025

**Keep Open** (valid with ongoing community interest):
- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) - Vite bundling (active interest, 3 upvotes)
- [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) - Musl/Alpine support (4 upvotes)
- [#783](https://github.com/temporalio/sdk-typescript/issues/783) - Nx monorepo support
- [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) - TestWorkflowEnvironment improvements
- [#1351](https://github.com/temporalio/sdk-typescript/issues/1351) - Schedule update by cron (2 upvotes)

### Duplicate Candidates

- [#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), and [#1914](https://github.com/temporalio/sdk-typescript/issues/1914) - Three closely related payload/history size warning issues that could be consolidated
- [#1895](https://github.com/temporalio/sdk-typescript/issues/1895) and [#1775](https://github.com/temporalio/sdk-typescript/issues/1775) - Both relate to deterministic random/UUID generation in workflows
- [#868](https://github.com/temporalio/sdk-typescript/issues/868) and [#472](https://github.com/temporalio/sdk-typescript/issues/472) - Both request linting tooling for workflow code patterns

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Address replay determinism bugs** ([#1966](https://github.com/temporalio/sdk-typescript/issues/1966), [#1790](https://github.com/temporalio/sdk-typescript/issues/1790), [#1744](https://github.com/temporalio/sdk-typescript/issues/1744)) -- silent production failures
- **Fix unhandled promise leak** ([#1960](https://github.com/temporalio/sdk-typescript/issues/1960)) -- executeUpdateWithStart leaks promise rejection
- **Fix payload converter crash** ([#1512](https://github.com/temporalio/sdk-typescript/issues/1512)) -- converter errors should not take down worker
- **Fix Worker.create data converter issue** ([#1953](https://github.com/temporalio/sdk-typescript/issues/1953)) -- ignores pre-loaded LoadedDataConverter

### Phase 2: Developer Experience (Short-term)

- **Improve Jest integration** ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) -- 3+ years old, affects every Jest user
- **NextJS 15 compatibility** ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615)) -- growing NextJS user base
- **Better error messages** ([#1800](https://github.com/temporalio/sdk-typescript/issues/1800), [#1325](https://github.com/temporalio/sdk-typescript/issues/1325)) -- error type info lost across boundaries
- **Payload size validation** ([#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), [#1914](https://github.com/temporalio/sdk-typescript/issues/1914)) -- proactive user warnings

### Phase 3: Ecosystem Expansion (Medium-term)

- **OpenTelemetry v2** ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) -- 19 upvotes, observability modernization
- **AI/Agent integration** ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)) -- 20 upvotes, rapidly growing demand
- **Browser gRPC client** ([#207](https://github.com/temporalio/sdk-typescript/issues/207)) -- 9 upvotes, enables browser-based Temporal clients
- **Vite bundler support** ([#1280](https://github.com/temporalio/sdk-typescript/issues/1280)) -- modern build tooling
- **Native request batching** ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499)) -- 7 upvotes, prevents rate limiting

### Phase 4: Maintenance (Ongoing)

- Triage and close 78 stale issues (53% of backlog)
- Update typedSearchAttributes documentation ([#1908](https://github.com/temporalio/sdk-typescript/issues/1908))
- Consider official NestJS integration or improved documentation for community package ([#483](https://github.com/temporalio/sdk-typescript/issues/483))
- Consolidate duplicate payload size issues ([#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), [#1914](https://github.com/temporalio/sdk-typescript/issues/1914))
- Separate core library evaluation ([#933](https://github.com/temporalio/sdk-typescript/issues/933)) -- 6 upvotes, would simplify SDK packaging
