# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-10
**Total Open Issues:** 142
**Total Closed Issues:** 670
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has an 83% resolution rate (670/812) with 142 open issues. The backlog is **growing slowly** with 23 more issues opened than closed over the last 12 months, though the last 6 months show a slight net decrease (-5). User demand is overwhelmingly concentrated on **alternative runtime support** (Bun at 49 upvotes), **AI/agent integrations** (OpenAI Agents at 20 upvotes), and **observability modernization** (OpenTelemetry v2 at 19 upvotes), indicating that core workflow functionality is mature but the ecosystem integration story requires significant investment.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 46 | High - includes performance regressions and replay determinism issues |
| Enhancements/Features | 82 | Medium - driven by ecosystem integrations and observability |
| Documentation | 6 | Low - manageable backlog |
| Stale Issues (>12 months) | 73 (51%) | Medium - over half the backlog needs triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 164 |
| Total Comments | 341 |
| Issues with Upvotes | 35 (25%) |
| Issues with Comments | 69 (49%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 83% (670/812) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 69% |

### Recommended Actions

1. **Immediate:** Address v1.13.x performance regressions ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859)) and replay determinism bugs ([#1935](https://github.com/temporalio/sdk-typescript/issues/1935), [#1790](https://github.com/temporalio/sdk-typescript/issues/1790))
2. **Short-term:** Fix long-standing Jest integration issues ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) and NextJS 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
3. **Medium-term:** Progress Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) -- 49 upvotes, highest demand feature by far
4. **Long-term:** OpenTelemetry v2 ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)), AI agent integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)), browser gRPC client ([#207](https://github.com/temporalio/sdk-typescript/issues/207))
5. **Housekeeping:** Triage 73 stale issues (51% of open backlog) for closure or roadmap placement

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 107 | 84 | +23 |

**Backlog Growing:** 23 more issues opened than closed over the last 12 months. April 2025 saw the largest spike (+16 net), while May 2025 (-5), and January 2026 (-2) showed healthy closure activity. The second half of the year has generally trended better than the first.

### Last 6 Months: Detailed Analysis

The last 6 months show a slight net improvement (-5), indicating that issue management velocity has improved recently.

| Metric | Value |
|--------|-------|
| Issues Opened | 47 |
| Issues Closed | 52 |
| Bugs Closed | 20 |
| Enhancements Completed | 26 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | [Bug] error: TypeError: (0 , ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | [Bug] Workflow logs not propagated unless telemetryOptions set |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | [Bug] Failure to start ephemeral server prevents shutdown |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of AsyncLocalStorage |
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | [Bug] Workflow task not found after SDK upgrade |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | [Feature Request] Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 49 | 51 | [Feature Request] Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | [Feature Request] Temporal integration for `@openai/agents` |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 7 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Separate "core" library for workflow logic |
| 8 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library |
| 9 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | 37 | [Feature Request] NestJS Transport / Integration |
| 10 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | 14 | [Bug] Cannot use Temporal with NextJS 15 |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 149 | Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 48 | Temporal integration for `@openai/agents` |
| 3 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | NestJS Transport / Integration |
| 4 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | Jest detects open handles |
| 5 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | Add support for opentelemetry v2 |
| 6 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | Enable in-browser usage of gRPC client |
| 7 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | Cannot use Temporal with NextJS 15 |
| 8 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | Native Request Batching |
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Separate "core" library for workflow logic |
| 10 | [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 12 | nyc-test-coverage is excessively difficult to use |

---

## Issue Analysis by Category

### Runtime Support & Ecosystem Integration (Critical - 5 issues)

The SDK faces significant pressure to support alternative JavaScript runtimes and popular frameworks. This represents the highest user demand area by a wide margin.

**Bun Runtime Support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334))** - 49 upvotes, 51 comments

The most requested feature by far. The core blocker is Bun's incomplete implementation of `node:vm` and promise hooks. The client package works on Bun, but the worker requires workarounds. The Bun team is actively working on NAPI compatibility, and the Temporal team has committed to active investigation. Users have indicated they are evaluating competitors due to this limitation.

**NestJS Integration ([#483](https://github.com/temporalio/sdk-typescript/issues/483))** - 4 upvotes, 37 comments

A 3+ year old request. The community workaround [nestjs-temporal](https://github.com/KurtzL/nestjs-temporal) exists but official support is desired. Workflow sandboxing conflicts with NestJS DI patterns remain the main technical challenge.

**NextJS 15 Compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))** - 3 upvotes, 14 comments

Users cannot use Temporal with NextJS 15 due to `workflowTypes` relying on function names that get mangled during NextJS builds.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 49 | Bun runtime support -- blocked on vm/promise hooks |
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS integration -- community workaround exists |
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | NextJS 15 compatibility -- function name mangling |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Vite bundler support |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | In-browser usage of gRPC client |

### Performance & Stability (High Priority - 6 issues)

Recent SDK versions introduced performance regressions affecting production deployments, and several issues impact worker stability.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | 0 | Performance regression from v1.13.1 to v1.13.2 |
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | 0 | High CPU usage with OTel instrumentation in v1.13.x |
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Using async functions degrades performance |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | maxCachedWorkflows calculation ignores VM isolate memory |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | extractSourceMap takes excessive RAM on boot |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" |

The v1.13.x performance issues ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859)) are the most urgent -- users report significant CPU degradation that may be related to OTel instrumentation changes or lazy-loaded modules.

### Testing Framework Issues (High Priority - 12 open issues in area)

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

### Workflow Replay & Determinism (Medium Priority - 4 open issues)

Issues related to workflow determinism and replay correctness that can cause production failures.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1935](https://github.com/temporalio/sdk-typescript/issues/1935) | 0 | uuid() calls in query handlers break workflow determinism during replay |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay history fails with nondeterminism error -- child workflow IDs mismatch |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE replaying nested promises |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use structuredClone in workflow code |

The determinism issues ([#1935](https://github.com/temporalio/sdk-typescript/issues/1935), [#1790](https://github.com/temporalio/sdk-typescript/issues/1790)) are particularly concerning because they can silently cause replay failures in production.

### Error Handling & Developer Feedback (Medium Priority - 7 open issues in area)

Users report unclear or misleading error messages that complicate debugging, along with error serialization problems that lose type information across the Worker/Workflow boundary.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Cannot distinguish error types in logs across Worker/Workflow boundary |
| [#1838](https://github.com/temporalio/sdk-typescript/issues/1838) | 0 | WorkflowExecutionAlreadyStartedError should contain runId |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing exception from workflow results in DataCloneError |
| [#1721](https://github.com/temporalio/sdk-typescript/issues/1721) | 0 | Error from Client's Update-with-Start lacks proper message |
| [#1862](https://github.com/temporalio/sdk-typescript/issues/1862) | 0 | Importing workflow into activity causes misleading gRPC error |
| [#1274](https://github.com/temporalio/sdk-typescript/issues/1274) | 0 | Error not serialized fully when sent to Sinks |
| [#1675](https://github.com/temporalio/sdk-typescript/issues/1675) | 1 | Support AggregateError |

### Payload & Data Handling (Medium Priority - 8 issues)

Several issues affect payload conversion, search attributes, and data serialization.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | 1 | ESM Custom payload converters cannot be loaded |
| [#1717](https://github.com/temporalio/sdk-typescript/issues/1717) | 0 | Protobuf Payload Converter broken after protobufjs 7.5.2 upgrade |
| [#1512](https://github.com/temporalio/sdk-typescript/issues/1512) | 0 | Payload converter error can crash worker |
| [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) | 2 | common package not importing @types/ms |
| [#1715](https://github.com/temporalio/sdk-typescript/issues/1715) | 0 | SearchAttribute serialization should handle objects gracefully |
| [#1908](https://github.com/temporalio/sdk-typescript/issues/1908) | 0 | Update docs for typedSearchAttributes |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | Support passing preloaded data converters to Client |
| [#773](https://github.com/temporalio/sdk-typescript/issues/773) | 0 | payloadToJSON does not generate valid proto JSON |

---

## API & Component Hotspots

Based on semantic analysis of open issues, these APIs and components appear most frequently:

| API/Component | Open Issue Count | Notable Issues |
|---------------|------------------|----------------|
| Worker (component) | 41 | Performance, lifecycle, configuration |
| Worker.create / proxyActivities (APIs) | 6 each | Worker setup and activity proxying |
| error-handling (component) | 13 | Error serialization, type info loss |
| workflow-execution (component) | 11 | Determinism, cancellation, isolation |
| client (component) | 10 | Connection, error handling |
| bundler (component) | 9 | Webpack, Vite, workflow bundling |
| activity-executor (component) | 9 | Heartbeat, context, standalone activities |
| setHandler (API) | 5 | Signal/query/update handler registration |
| executeChild / startChild (APIs) | 4 / 3 | Child workflow invocation |

The **worker** component is by far the most issue-dense area, spanning performance, configuration, testing, and lifecycle concerns. The **bundler** component also stands out as a friction point, with issues around Webpack output, Vite support, and ESM compatibility.

---

## Enhancement Requests (82 issues)

### AI & Agent Integration

A rapidly growing area of interest with high user demand.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Temporal integration for `@openai/agents` |
| [#1851](https://github.com/temporalio/sdk-typescript/issues/1851) | 0 | Support standalone activities |

### Observability & Telemetry

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | Add support for OpenTelemetry v2 |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |
| [#1850](https://github.com/temporalio/sdk-typescript/issues/1850) | 0 | Implement OTel interceptors as Plugin |
| [#1696](https://github.com/temporalio/sdk-typescript/issues/1696) | 0 | OTel exporter error handling |
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
| [#1008](https://github.com/temporalio/sdk-typescript/issues/1008) | 2 | Provide more output when webpack fails |
| [#472](https://github.com/temporalio/sdk-typescript/issues/472) | 0 | ESLint plugin |

### API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native Request Batching to prevent rate limit errors |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Enable in-browser usage of gRPC client |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation |
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

### Payload Size & Validation (New Theme)

Three recent issues focus on payload size limits and validation, suggesting growing demand as users handle larger data volumes.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1913](https://github.com/temporalio/sdk-typescript/issues/1913) | 0 | Fail workflow task if payloads size is known to be too large |
| [#1912](https://github.com/temporalio/sdk-typescript/issues/1912) | 0 | Warn if SDK tries to send a payload above a specific size |
| [#1914](https://github.com/temporalio/sdk-typescript/issues/1914) | 0 | Warn if SDK detects a workflow history over a certain size |

---

## Housekeeping Recommendations

### Stale Issues (73 issues >1 year, no activity)

51% of open issues have had no activity in over 12 months. This is the largest maintenance concern.

**Close Candidates** (likely resolved or no longer relevant):
- Historical dependency security vulnerability reports from 2022-2023
- [#959](https://github.com/temporalio/sdk-typescript/issues/959) - Broken documentation links from 2022
- [#561](https://github.com/temporalio/sdk-typescript/issues/561) - Documentation versioning from 2022
- [#417](https://github.com/temporalio/sdk-typescript/issues/417) - Export SDK version -- likely addressed in later releases

**Needs Triage:**
- [#207](https://github.com/temporalio/sdk-typescript/issues/207) (9 upvotes) - Browser gRPC client, 3+ years old but still getting upvotes
- [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) (7 upvotes) - Request batching, no activity since Aug 2024
- [#933](https://github.com/temporalio/sdk-typescript/issues/933) (6 upvotes) - Separate core library
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) (3 upvotes) - Client connection metrics, no activity since 2022

**Keep Open** (valid with ongoing community interest):
- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) - Vite bundling (active interest, 3 upvotes)
- [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) - Musl/Alpine support (4 upvotes)
- [#783](https://github.com/temporalio/sdk-typescript/issues/783) - Nx monorepo support
- [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) - TestWorkflowEnvironment improvements

### Duplicate Candidates

- [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) and [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) - Both describe v1.13.x performance/CPU regression related to OTel
- [#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), and [#1914](https://github.com/temporalio/sdk-typescript/issues/1914) - Three closely related payload/history size warning issues that could be consolidated
- [#1935](https://github.com/temporalio/sdk-typescript/issues/1935) and [#1895](https://github.com/temporalio/sdk-typescript/issues/1895) - Both relate to UUID/random number generation determinism in workflows

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix v1.13.x performance regression** ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859)) -- production users reporting high CPU
- **Address replay determinism bugs** ([#1935](https://github.com/temporalio/sdk-typescript/issues/1935), [#1790](https://github.com/temporalio/sdk-typescript/issues/1790)) -- silent production failures
- **Fix payload converter crash** ([#1512](https://github.com/temporalio/sdk-typescript/issues/1512)) -- converter errors should not take down worker

### Phase 2: Developer Experience (Short-term)

- **Improve Jest integration** ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) -- 3+ years old, affects every Jest user
- **NextJS 15 compatibility** ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615)) -- growing NextJS user base
- **Better error messages** ([#1800](https://github.com/temporalio/sdk-typescript/issues/1800), [#1325](https://github.com/temporalio/sdk-typescript/issues/1325)) -- error type info lost across boundaries
- **Payload size validation** ([#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), [#1914](https://github.com/temporalio/sdk-typescript/issues/1914)) -- proactive user warnings

### Phase 3: Ecosystem Expansion (Medium-term)

- **Bun runtime support** ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) -- 49 upvotes, coordinate with Bun team on vm compatibility
- **OpenTelemetry v2** ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) -- 19 upvotes, observability modernization
- **AI/Agent integration** ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)) -- 20 upvotes, rapidly growing demand
- **Vite bundler support** ([#1280](https://github.com/temporalio/sdk-typescript/issues/1280)) -- modern build tooling

### Phase 4: Maintenance (Ongoing)

- Triage and close 73 stale issues (51% of backlog)
- Update typedSearchAttributes documentation ([#1908](https://github.com/temporalio/sdk-typescript/issues/1908))
- Consider official NestJS integration or improved documentation for community package ([#483](https://github.com/temporalio/sdk-typescript/issues/483))
- Review browser gRPC client feasibility ([#207](https://github.com/temporalio/sdk-typescript/issues/207)) -- 9 upvotes but 3+ years old
