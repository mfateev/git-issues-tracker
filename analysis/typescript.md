# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 154
**Total Closed Issues:** 686
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK carries 154 open issues across a broad surface area, with an 82% historical resolution rate and a median time to close of 27 calendar days. The backlog is growing modestly (+18 net over the last 12 months), driven largely by new feature work around AI integrations, observability upgrades, and standalone activities. The most acute quality concerns are workflow replay/nondeterminism bugs, worker stability crashes, and persistent friction with JavaScript ecosystem tooling — minification, bundler compatibility, and test coverage tooling in particular.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 48 | High — 29 are high/critical severity; several cause worker crashes or silent failures |
| Enhancements/Features | 87 | Medium — many are long-standing ecosystem integration gaps |
| Documentation | 6 | Low — broken links and example inaccuracies |
| Stale Issues (>12 months) | 89 | Medium — 58% of open issues need triage; many may now be resolved |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 118 |
| Total Comments | 296 |
| Issues with Upvotes | 37 (24%) |
| Issues with Comments | 72 (47%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (686/840) |
| Median Time to Close | 27 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 69% |

### Recommended Actions

1. **Immediate:** Address the `interceptors-opentelemetry` workflow determinism bug ([#2023](https://github.com/temporalio/sdk-typescript/issues/2023)) and the nondeterminism error on update responses ([#1966](https://github.com/temporalio/sdk-typescript/issues/1966)) — these silently corrupt replay behavior.
2. **Short-term:** Fix workflow replay regressions ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790), [#1744](https://github.com/temporalio/sdk-typescript/issues/1744)), the NextJS 15 minification incompatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615)), and the persistent Jest open-handles issue ([#928](https://github.com/temporalio/sdk-typescript/issues/928)).
3. **Medium-term:** Complete the OpenTelemetry v2 package roadmap; split the `worker` package to decouple bundler dependencies ([#933](https://github.com/temporalio/sdk-typescript/issues/933)); land the OpenAI Agents integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)).
4. **Long-term:** Browser/gRPC-web client support ([#207](https://github.com/temporalio/sdk-typescript/issues/207)); NestJS transport ([#483](https://github.com/temporalio/sdk-typescript/issues/483)); native gRPC request batching ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499)).
5. **Housekeeping:** Triage 89 stale issues; many pre-date the plugin system and standalone activities work and may now be addressed or irrelevant.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is growing at a moderate rate. Monthly inflows have been uneven — spikes of 11–13 new issues in December 2025 and March/May 2026 were offset by periods of net closure, but overall the SDK is not closing issues fast enough to keep pace.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 94 | 76 | +18 |

📈 **Backlog Growing:** 18 more issues opened than closed in the last 12 months.

### Last 6 Months: Detailed Analysis

Activity in the second half of the period has leaned toward closing bugs (22 bugs closed) and completing enhancements (16 closed), with major work landing in the OTel interceptors, worker versioning, AI SDK integration (Vercel AI SDK), and plugin system. Newly filed issues cluster around standalone activities, external payload storage, and observability improvements.

| Metric | Value |
|--------|-------|
| Issues Opened | 56 |
| Issues Closed | 43 |
| Bugs Closed | 22 |
| Enhancements Completed | 16 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 51 | [Feature Request] Run temporal worker in bun |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | [Bug] Failure to start ephemeral server prevents shutdown |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of `AsyncLocalStorage` |
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | [Bug] Workflow task not found after SDK upgrade |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 14 | [Feature Request] Temporal integration for `@openai/agents` |
| 2 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 3 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 4 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching to Prevent "received message larger than max" Errors |
| 5 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 6 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create a separate "core" library without bundler deps |
| 7 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library in packages |
| 8 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | 37 | [Feature Request] NestJS Transport / Integration? |
| 9 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | 14 | [Bug] Cannot use Temporal with NextJS 15 because workflowTypes come from function names |
| 10 | [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | 5 | Bundle using Vite |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #1755 | 54 | [Feature Request] Temporal integration for `@openai/agents` |
| 2 | #483 | 45 | [Feature Request] NestJS Transport / Integration? |
| 3 | #928 | 40 | [Bug] Jest detects open handles |
| 4 | #1658 | 39 | [Feature Request] Add support for opentelemetry v2 |
| 5 | #207 | 25 | [Feature Request] Enable in-browser usage of gRPC client |
| 6 | #1615 | 20 | [Bug] Cannot use Temporal with NextJS 15 because workflowTypes come from function names |
| 7 | #1499 | 14 | [Feature Request] Native Request Batching to Prevent "received message larger than max" Errors |
| 8 | #933 | 14 | [Feature Request] Create a separate "core" library without bundler deps |
| 9 | #1233 | 12 | [Bug] `nyc-test-coverage` is excessively difficult to use correctly |
| 10 | #1280 | 11 | Bundle using Vite |

---

## Issue Analysis by Category

### Workflow Replay & Nondeterminism Bugs (5 open issues)

Nondeterminism errors are among the most disruptive bug class in the TypeScript SDK — they cause replay failures that can surface after an SDK upgrade or during routine development, making workflows temporarily unexecutable.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2023](https://github.com/temporalio/sdk-typescript/issues/2023) | 0 | OTel interceptors break workflow determinism when `handleQuery`/`validateUpdate` are called — recently filed high-severity regression |
| [#1966](https://github.com/temporalio/sdk-typescript/issues/1966) | 0 | Nondeterminism error: invalid state transition while handling update response in `Accepted` state |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay fails with nondeterminism error due to mismatched child workflow IDs; active community discussion (9 comments) |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE when replaying nested promises — fundamental async model issue |
| [#1652](https://github.com/temporalio/sdk-typescript/issues/1652) | 0 | Workflow APIs that modify state from non-replayable context should throw, not silently corrupt history |

Issues [#2023](https://github.com/temporalio/sdk-typescript/issues/2023) and [#1966](https://github.com/temporalio/sdk-typescript/issues/1966) are particularly time-sensitive as they affect workflows using the official OpenTelemetry interceptors and the update handler API respectively. Both were filed in 2026 and have not yet been triaged to a milestone.

### Worker & Runtime Stability Bugs (7 open issues)

Worker crashes cause the most visible production impact — typically requiring a restart to recover. Several have remained open for years.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2068](https://github.com/temporalio/sdk-typescript/issues/2068) | 0 | Legacy Runtime native resource tracking causes race conditions and test flakes; PR already in flight |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | `maxCachedWorkflows` default calculation ignores VM isolate memory outside V8 heap, causing OOM under load |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | `extractSourceMap` consumes excessive RAM on worker boot |
| [#1578](https://github.com/temporalio/sdk-typescript/issues/1578) | 1 | Worker fails to start when Node `--abort-on-uncaught-exception` is set |
| [#1580](https://github.com/temporalio/sdk-typescript/issues/1580) | 0 | Workflows stuck after cancellation due to spurious `WorkflowTaskFailed` errors |
| [#1512](https://github.com/temporalio/sdk-typescript/issues/1512) | 0 | Payload converter error can crash the worker instead of failing the workflow gracefully |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" on workflow task timeout; assigned but unresolved for 3+ years |

Issue [#939](https://github.com/temporalio/sdk-typescript/issues/939) and [#928](https://github.com/temporalio/sdk-typescript/issues/928) (Jest open handles) share a root cause in how the SDK's async hooks interact with Node.js internals — fixing one likely reduces the other.

### JavaScript Ecosystem Compatibility Bugs (6 open issues)

The TypeScript SDK's use of webpack bundling and VM2-based workflow isolation creates friction with modern JavaScript tooling that other SDKs do not face.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | NextJS 15 minification mangles workflow function names, breaking workflow type resolution — no viable workaround for end users |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 1 | Cannot import `reflect-metadata` within workflow bundle; affects decorators-heavy codebases |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | `structuredClone` unavailable in workflow code due to sandbox limitations |
| [#1489](https://github.com/temporalio/sdk-typescript/issues/1489) | 1 | Critical dependency: expression-based `require()` calls cause webpack warnings and partial failures |
| [#1740](https://github.com/temporalio/sdk-typescript/issues/1740) | 1 | `webpackConfigHook` does not suppress all webpack output |
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | 1 | ESM custom payload converters cannot be loaded by the worker |

The NextJS 15 issue ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615)) is particularly impactful given NextJS's market penetration. The root fix requires the SDK to support explicit workflow name registration independent of function names.

### Testing Framework Bugs (4 open issues)

Testing friction is one of the most engaged categories, with 26 comments on the Jest open-handles bug alone.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles (neon threadsafe function) — assignee exists but no fix for 3 years; primary test DX pain point |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | `nyc-test-coverage` is fragile and poorly documented; users struggle to set it up even following the sample |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run — intermittent flake affecting CI pipelines |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Cannot connect to local Temporal environment in unit tests |

### Data Handling & Type Safety Bugs (5 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1953](https://github.com/temporalio/sdk-typescript/issues/1953) | 0 | `Worker.create()` ignores pre-loaded `LoadedDataConverter` and always re-loads via `require()` |
| [#1796](https://github.com/temporalio/sdk-typescript/issues/1796) | 1 | Type inference regression for activity return types in SDK 1.12.2 |
| [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) | 2 | `@temporalio/common` does not import `@types/ms`, causing TypeScript compilation errors downstream |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing non-Error objects from a workflow results in opaque `DataCloneError`/`Failed to activate workflow` with no useful diagnostics |
| [#1656](https://github.com/temporalio/sdk-typescript/issues/1656) | 0 | Workflow type incorrectly deduced when using `.bind()` on a workflow function |

### Performance Bugs (2 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Using `async` functions inside workflows degrades performance significantly due to microtask overhead in the deterministic runtime |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | `extractSourceMap` consumes disproportionate RAM on worker startup |

### Other Notable Bugs

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1594](https://github.com/temporalio/sdk-typescript/issues/1594) | 1 | First schedule action with `triggerImmediately` starts at the wrong time |
| [#1733](https://github.com/temporalio/sdk-typescript/issues/1733) | 0 | `RetryPolicy.maximumAttempts === 0` throws, but is documented as valid for unlimited retries |
| [#1756](https://github.com/temporalio/sdk-typescript/issues/1756) | 0 | Hostname validation is overly restrictive, rejecting valid hostnames |
| [#1721](https://github.com/temporalio/sdk-typescript/issues/1721) | 0 | Error from `executeUpdateWithStart` does not surface a proper error type |
| [#1838](https://github.com/temporalio/sdk-typescript/issues/1838) | 0 | `WorkflowExecutionAlreadyStartedError` should include `runId` when provided by the server |
| [#2018](https://github.com/temporalio/sdk-typescript/issues/2018) | 0 | Dead links in official documentation |
| [#1908](https://github.com/temporalio/sdk-typescript/issues/1908) | 0 | Documentation for `typedSearchAttributes` is out of date |

---

## API & Component Hotspots

Analysis of semantic data from the enhanced index across all 154 open issues:

| API/Component | Issue Count | Notes |
|---------------|-------------|-------|
| `worker` component | 45 | Most affected component — spans initialization, lifecycle, bundling, versioning |
| `testing` / `test-framework` | 16 | Jest open handles, coverage tooling, ephemeral server integration |
| `client` / `workflow-client` | 16 | gRPC error handling, connection management, type inference |
| `error-handling` component | 13 | Error propagation across worker/workflow boundary is a persistent weak point |
| `serialization` / `payload-converter` | 13 | DataConverter loading, ESM support, crash-on-error |
| `workflow-execution` component | 11 | Isolation, replay, and state management |
| `bundler` component | 10 | Webpack integration, ESM support, third-party tool compatibility |
| `activity-executor` component | 9 | Heartbeat, batching, retry policy edge cases |
| `documentation` component | 7 | Outdated examples, dead links, API reference gaps |
| `Worker.create` API | 7 | Configuration issues, data converter loading, initialization failures |
| `setHandler` API | 5 | Update handler determinism, signal/query handler registration |
| `DataConverter` API | 3 | ESM loading, pre-loaded converter support, crash behavior |

The `worker` component's disproportionate issue count reflects the TypeScript SDK's unique architecture — it wraps a Rust core-bridge, owns the webpack bundler, manages the VM2 sandbox, and handles the Node.js async hook lifecycle. This creates a large integration surface with many edge cases absent in other SDKs.

---

## Enhancement Requests (87 issues)

### AI & Modern Framework Integrations

The highest-engagement category, driven by AI agent orchestration use cases.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Official integration for `@openai/agents` JS SDK — on the roadmap per maintainer comment |
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS transport/module integration — 4-year-old request with 37 community comments |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Bundle workflows using Vite instead of webpack |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | gRPC client usable in the browser (grpc-web support) |

### Observability & OpenTelemetry

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | Support OpenTelemetry v2 — maintainer has a documented multi-step plan; OTel v2 package will follow completion of v1 work |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection (not just worker) |
| [#2031](https://github.com/temporalio/sdk-typescript/issues/2031) | 0 | Telemetry support for Standalone Activities |
| [#2066](https://github.com/temporalio/sdk-typescript/issues/2066) | 0 | SDK should log when WFT completion takes a long time |
| [#1971](https://github.com/temporalio/sdk-typescript/issues/1971) | 0 | Clarify `OpenTelemetryPlugin` interaction with `WorkflowCodeBundler` |
| [#1854](https://github.com/temporalio/sdk-typescript/issues/1854) | 0 | Correct docs for `OtelCollectorExporter` |

### Package Structure & Distribution

| Issue | 👍 | Request |
|-------|-----|---------|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Split `@temporalio/worker` into `worker-core` (no bundler deps) and `bundler` — reduces Docker image size by ~200MB; maintainer has a concrete migration plan |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library in packages for Alpine Linux containers |
| [#1965](https://github.com/temporalio/sdk-typescript/issues/1965) | 1 | Run Temporal worker without bundled workflows (for pre-built environments) |

### External Payload Storage (new initiative, May 2026)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2063](https://github.com/temporalio/sdk-typescript/issues/2063) | 0 | External Payload Storage Foundation |
| [#2064](https://github.com/temporalio/sdk-typescript/issues/2064) | 0 | Enable concurrent payload visiting |
| [#2065](https://github.com/temporalio/sdk-typescript/issues/2065) | 0 | S3 External Storage Driver |
| [#2045](https://github.com/temporalio/sdk-typescript/issues/2045) | 0 | Add `@bufbuild/protobuf` (protobuf-es) payload converters |

### Workflow API & Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Preserve error type information across worker ↔ workflow boundary in logs |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | Support passing pre-loaded data converters to `Worker.create()` |
| [#1362](https://github.com/temporalio/sdk-typescript/issues/1362) | 2 | `Worker.runReplayHistory()` should accept a workflow history array |
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Lint rule preventing query handlers that return non-deterministic values |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation for trusted code environments |
| [#754](https://github.com/temporalio/sdk-typescript/issues/754) | 1 | More user-friendly `listWorkflowExecutions` API |
| [#1739](https://github.com/temporalio/sdk-typescript/issues/1739) | 0 | Add `ActivityContext.workerShuttingDown` flag |
| [#1895](https://github.com/temporalio/sdk-typescript/issues/1895) | 0 | Workflow API for deterministic pseudo-random number sequences |

### Activity Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native request batching to prevent gRPC "message larger than max" errors when scheduling many activities in one WFT |
| [#2061](https://github.com/temporalio/sdk-typescript/issues/2061) | 0 | Implement operator commands for Standalone Activities |
| [#1888](https://github.com/temporalio/sdk-typescript/issues/1888) | 0 | Expose `activityType` counts in `WorkerInfo` |

### Scheduling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1351](https://github.com/temporalio/sdk-typescript/issues/1351) | 2 | Support updating schedules by cron string |
| [#1967](https://github.com/temporalio/sdk-typescript/issues/1967) | 0 | Support conflict token retry loop for schedule updates |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

89 open issues (58%) have had no activity in over 12 months. The most common categories are feature requests that predate large architectural changes (plugin system, standalone activities, worker versioning) and bugs that may have been silently fixed.

- **Close candidates:** [#915](https://github.com/temporalio/sdk-typescript/issues/915) (metrics from client — likely covered by newer OTel work), [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) (Vite bundling — may overlap with newer bundler work), [#754](https://github.com/temporalio/sdk-typescript/issues/754) (listWorkflows API — check if improved in recent SDK versions)
- **Needs triage:** [#207](https://github.com/temporalio/sdk-typescript/issues/207) (browser gRPC — still valid, needs explicit accept/defer decision), [#483](https://github.com/temporalio/sdk-typescript/issues/483) (NestJS integration — active community need, needs official stance), [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) (request batching — valid production issue, needs milestone)
- **Keep open:** [#933](https://github.com/temporalio/sdk-typescript/issues/933) (worker/bundler split — maintainer has concrete plan), [#928](https://github.com/temporalio/sdk-typescript/issues/928) (Jest open handles — active assignee), [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) (musl library — valid deployment concern)

### Duplicate Candidates

- [#1965](https://github.com/temporalio/sdk-typescript/issues/1965) (run worker without bundled workflows) and [#933](https://github.com/temporalio/sdk-typescript/issues/933) (split worker package) address the same underlying need from different angles — consider linking them.
- [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) (test suite timeout on first run) and [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) (cannot connect to local Temporal in unit tests) may share a root cause in the ephemeral server startup path.
- The external payload storage cluster ([#2063](https://github.com/temporalio/sdk-typescript/issues/2063), [#2064](https://github.com/temporalio/sdk-typescript/issues/2064), [#2065](https://github.com/temporalio/sdk-typescript/issues/2065)) appears to be a coordinated feature decomposition from a single initiative; they should be tracked together under a single epic.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix OTel interceptors nondeterminism regression ([#2023](https://github.com/temporalio/sdk-typescript/issues/2023))
- Fix update handler state transition nondeterminism ([#1966](https://github.com/temporalio/sdk-typescript/issues/1966))
- Fix child workflow ID mismatch during replay ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790))
- Remove legacy resource tracking causing flakes ([#2068](https://github.com/temporalio/sdk-typescript/issues/2068))
- Fix payload converter crash-on-error behavior ([#1512](https://github.com/temporalio/sdk-typescript/issues/1512))

### Phase 2: Developer Experience (Short-term)
- Resolve Jest open handles ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) — high visibility, long-standing assignee
- Fix NextJS 15 minification incompatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
- Improve `nyc-test-coverage` usability ([#1233](https://github.com/temporalio/sdk-typescript/issues/1233))
- Fix `@types/ms` missing from `@temporalio/common` ([#1668](https://github.com/temporalio/sdk-typescript/issues/1668))
- Fix DataCloneError diagnostics when non-Error thrown from workflow ([#1325](https://github.com/temporalio/sdk-typescript/issues/1325))

### Phase 3: Feature Expansion (Medium-term)
- Complete OTel v2 package ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) per the published roadmap
- Land OpenAI Agents integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))
- Split `@temporalio/worker` into `worker-core` + `bundler` ([#933](https://github.com/temporalio/sdk-typescript/issues/933))
- Native gRPC request batching for large activity batches ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499))
- Complete external payload storage foundation ([#2063](https://github.com/temporalio/sdk-typescript/issues/2063)–[#2065](https://github.com/temporalio/sdk-typescript/issues/2065))

### Phase 4: Maintenance (Ongoing)
- Triage and close 89 stale issues — verify against recent SDK releases
- Update documentation for `typedSearchAttributes` ([#1908](https://github.com/temporalio/sdk-typescript/issues/1908)) and fix dead links ([#2018](https://github.com/temporalio/sdk-typescript/issues/2018))
- Evaluate browser/gRPC-web support ([#207](https://github.com/temporalio/sdk-typescript/issues/207)) and NestJS integration ([#483](https://github.com/temporalio/sdk-typescript/issues/483)) for official roadmap inclusion
