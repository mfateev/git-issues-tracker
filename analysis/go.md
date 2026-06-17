# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 167
**Total Closed Issues:** 706
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

**Semantic Data:** Pre-categorized issues with semantic fields (subcategory, apis, components, concepts, severity) are available in `repos/temporalio-sdk-go/issues-index-enhanced.json`.

---

## Executive Summary

The Go SDK is a mature codebase with 873 lifetime issues and an 81% resolution rate, but its open backlog is dominated by long-standing test framework limitations and parity gaps. Of the 167 open issues, 65 are bugs (39%) and 96 are enhancement requests (57%), with 75% of issues older than 12 months. The test framework (`TestWorkflowEnvironment`, `TestActivityEnvironment`) is the single largest area of pain, accounting for 43 open issues — including many "test env diverges from production" bugs that erode user trust in unit testing.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (open) | 65 | **High** — 34 rated high/critical severity, many in core workflow/test paths |
| Enhancements (open) | 96 | **Medium-High** — strong demand for testing, tracing, and worker lifecycle features |
| Security (dependency CVE) | 1 | **High** — CVE-2019-0210 / CVE-2019-0205 in `uber-go/tally` transitive dep ([#899](https://github.com/temporalio/sdk-go/issues/899)) |
| Test framework issues | 43 | **High** — the dominant pain point across both bugs and feature requests |
| Stale issues (>12 months) | 126 | **Medium** — 75% of open issues need triage/closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 83 |
| Total Comments | 223 |
| Issues with Upvotes | 38 (23%) |
| Issues with Comments | 93 (56%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (706/873) |
| Median Time to Close | 16 days (calendar) / 13 days (business) |
| Resolved within 30 days | 59% |
| Resolved within 90 days | 77% |

### Recommended Actions

1. **Immediate:** Address the open security vulnerability in `uber-go/tally` dependency ([#899](https://github.com/temporalio/sdk-go/issues/899)).
2. **Short-term:** Fix high-severity production bugs — workflow query panics ([#475](https://github.com/temporalio/sdk-go/issues/475), [#482](https://github.com/temporalio/sdk-go/issues/482)), workflow task panic loops ([#813](https://github.com/temporalio/sdk-go/issues/813)), goroutine leaks on termination ([#716](https://github.com/temporalio/sdk-go/issues/716)), CPU overhead from panic detection ([#2326](https://github.com/temporalio/sdk-go/issues/2326)), and the `ExecuteWorkflow` timeout-halving bug ([#1104](https://github.com/temporalio/sdk-go/issues/1104)).
3. **Medium-term:** Overhaul the test framework to close parity gaps with production behavior (cancellation, timeouts, mock assertions, retry policies, error propagation).
4. **Long-term:** Deliver top-requested enhancements — clean worker shutdown for sessions ([#181](https://github.com/temporalio/sdk-go/issues/181), 16 👍), interceptor logger propagation ([#829](https://github.com/temporalio/sdk-go/issues/829)), customizable tracing attributes ([#1149](https://github.com/temporalio/sdk-go/issues/1149)).
5. **Housekeeping:** Triage and close the 126 stale issues (75% of backlog), many of which are pre-2024 enhancement asks with zero engagement.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 108 | 112 | -4 |

📉 **Backlog Shrinking:** 4 more issues closed than opened over the last 12 months. The trend is roughly balanced with mild improvement; monthly variance is high (e.g., Sept 2025 closed 17 vs. opened 7; May 2026 closed 5 vs. opened 11). The backlog is essentially stable in net terms — closure throughput is keeping pace with intake but is not yet making meaningful inroads on the long-tail stale backlog.

### Last 6 Months: Detailed Analysis

In the last 6 months, intake slightly exceeded closures (51 opened vs. 49 closed, net +2), but maintainers delivered solid resolution on bugs (16) and enhancements (22). Median time-to-close was 34 calendar days, and 49% of issues closed within 30 days. Three popular requests were resolved during this period, including the long-standing side-effect mocking request ([#916](https://github.com/temporalio/sdk-go/issues/916), 21 👍).

| Metric | Value |
|--------|-------|
| Issues Opened | 51 |
| Issues Closed | 49 |
| Bugs Closed | 16 |
| Enhancements Completed | 22 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in test suite |
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 5 | Serialization context for codecs and converters |
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Add ability for a clean worker shutdown that waits for a session |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity |
| 4 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | 3 | Allow custom trace attribute keys |
| 5 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 6 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2 | Allow including local activity input into the history |
| 7 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 3 | 2 | MutableSideEffect in test framework ignores cmp function |
| 8 | [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 0 | Updated context functions to match context library |
| 9 | [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | 0 | Consider migrating away from golang/mock |
| 10 | [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | 2 | Canceling a context with multiple child contexts can be non-deterministic |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 32 | Add ability for a clean worker shutdown that waits for a session |
| 2 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 17 | Use interceptor logger for all logs related to a workflow or activity |
| 3 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 15 | Refactor SDK to avoid type aliasing |
| 4 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 11 | Allow custom trace attribute keys |
| 5 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 10 | Allow including local activity input into the history |
| 6 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 9 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 7 | [#642](https://github.com/temporalio/sdk-go/issues/642) | 9 | Inconsistent behavior when asserting invocations |
| 8 | [#475](https://github.com/temporalio/sdk-go/issues/475) | 9 | Panic when querying during Workflow failure + retry |
| 9 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 8 | MutableSideEffect in test framework ignores cmp function |
| 10 | [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 8 | Add TaskQueue to TracerStartSpanOptions |

---

## Issue Analysis by Category

Open issue distribution: 96 features, 65 bugs, 4 other, 2 docs. Severity (from semantic cards): 1 critical, 34 high, 101 medium, 31 low.

### Security Vulnerabilities (1 issue)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | 0 | Two high-severity Apache Thrift CVEs (CVE-2019-0210, CVE-2019-0205) in transitive dependency `github.com/uber-go/tally/v4`. DoS-class vulnerabilities reachable via the tally metrics path. |

This is the only open issue labeled with a security vulnerability tag. The fix path is a dependency bump or migration away from tally; this should be prioritized for immediate remediation.

### Critical and High-Severity Bugs (34 issues)

Open bugs flagged as `high` severity in semantic cards. Grouped by subsystem.

#### Workflow Execution & Determinism

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1104](https://github.com/temporalio/sdk-go/issues/1104) | 0 | `ExecuteWorkflow`'s context timeout is halved internally; workflows time out at half the user-specified duration |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | Non-deterministic workflow code causes SDK to incorrectly re-send acceptance/completion messages for already-handled updates |
| [#1240](https://github.com/temporalio/sdk-go/issues/1240) | 0 | Data race after deadlock detector fires — concurrent map access in command state machine |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | 0 | `IdReusePolicy.TERMINATE_IF_RUNNING` not working correctly for duplicate child workflow starts |
| [#716](https://github.com/temporalio/sdk-go/issues/716) | 0 | Terminating workflows leaks goroutines that get stuck forever (memory leak in DSL workflows with many parallel activities) |
| [#813](https://github.com/temporalio/sdk-go/issues/813) | 0 | Workflow task failure after schedule-to-start timeout causes "activity ID not found" panic that retries 13,000+ times |
| [#186](https://github.com/temporalio/sdk-go/issues/186) | 0 | "Premature end of stream" validation error when processing transient decision after a decision failure |
| [#1693](https://github.com/temporalio/sdk-go/issues/1693) | 0 | Non-Deterministic Error (NDE) messages lack actionable details about what changed in workflow code |

#### Workflow Query & Panic Recovery

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#475](https://github.com/temporalio/sdk-go/issues/475) | 0 | Panic when querying during workflow failure + retry — SDK attempts to generate a command before processing `WorkflowTaskStarted` |
| [#482](https://github.com/temporalio/sdk-go/issues/482) | 0 | Workflow queries hang indefinitely when execution is unavailable (e.g., panic) instead of timing out |
| [#755](https://github.com/temporalio/sdk-go/issues/755) | 0 | Sticky queries can fail with invalid state-machine transitions on cache eviction |
| [#346](https://github.com/temporalio/sdk-go/issues/346) | 0 | `RequestCancelExternalWorkflow().Get()` blocks forever when canceled workflow returns `ErrCanceled` |

#### Activity / Worker Lifecycle

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2326](https://github.com/temporalio/sdk-go/issues/2326) | 0 | `isPanicking()` calls `runtime.Callers()`/`CallersFrames()` on every coroutine yield, consuming 14.3% CPU |
| [#2379](https://github.com/temporalio/sdk-go/issues/2379) | 0 | Activity invocation with duplicate function names is silently routed to the wrong handler (aliased vs. unaliased) |
| [#2233](https://github.com/temporalio/sdk-go/issues/2233) | 0 | No retry loop for `UpdateSchedule` "mismatched conflict token" errors |
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | 0 | `RecordHeartbeat` fails when called with a canceled context from a finished errgroup |
| [#1227](https://github.com/temporalio/sdk-go/issues/1227) | 0 | `workflow.CreateSession` fails on versioned workers — task-queue routing breaks build-id compatibility |
| [#1668](https://github.com/temporalio/sdk-go/issues/1668) | 0 | Typed search attribute deserialization panics on invalid values instead of ignoring them |
| [#909](https://github.com/temporalio/sdk-go/issues/909) | 0 | Activity worker poller fails to stop when first poll hits a fatal error (e.g., namespace not found) |
| [#1906](https://github.com/temporalio/sdk-go/issues/1906) | 1 | `workflowcheck` tool crashes with "index out of range" panic on packages without source files (e.g., `unsafe`) |

#### Test Framework (High-Severity)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | `TestWorkflowEnvironment` doesn't enforce `WorkflowExecutionTimeout` on child workflows |
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Anonymous functions in activity registration cause alias collisions across packages in test env |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Test framework panics intermittently on workflows with 500 child workflow executions |
| [#2065](https://github.com/temporalio/sdk-go/issues/2065) | 0 | `NewTestActivityEnvironment` no longer implements `worker.ActivityRegistry` interface (regression in v1.35.0) |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | `SetOnChildWorkflowCompletedListener` not invoked when child workflows complete with errors |
| [#1650](https://github.com/temporalio/sdk-go/issues/1650) | 0 | Tracking flaky tests: `TestSideEffectDefer`, `TestIntegrationSuite` variants, OTel tracing tests |
| [#1427](https://github.com/temporalio/sdk-go/issues/1427) | 0 | `TestWorkflowEnvironment` doesn't block workflow execution on cancellation during activity execution |
| [#1360](https://github.com/temporalio/sdk-go/issues/1360) | 0 | `DevServer.Stop()` occasionally hangs indefinitely instead of gracefully shutting down |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | `TestWorkflowEnvironment` doesn't surface testify mock assertion errors |
| [#975](https://github.com/temporalio/sdk-go/issues/975) | 0 | Test framework doesn't fail when mock invocations are missing — uncaught `PanicError`s in activities |
| [#922](https://github.com/temporalio/sdk-go/issues/922) | 0 | `TestWorkflowEnvironment.SignalExternalWorkflow` has a data race when signal data is modified after sending |
| [#491](https://github.com/temporalio/sdk-go/issues/491) | 0 | TestSuite workflow retry mechanism doesn't function correctly for `ApplicationError` |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Canceling a parent workflow through a mocked child causes parent to panic instead of returning cancellation |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activities time out in test environments when called from child workflows (StartToClose errors despite sufficient time) |

### Medium-Severity Bugs (Selected, 31 issues total)

A non-exhaustive list of medium-severity open bugs with notable user-facing impact:

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2378](https://github.com/temporalio/sdk-go/issues/2378) | 0 | External storage transfer statistics sum individual driver durations instead of measuring wall-clock time |
| [#2345](https://github.com/temporalio/sdk-go/issues/2345) | 0 | `ScheduleHandle.Describe()` returns `ScheduleWorkflowAction` with zero-value Priority field |
| [#2286](https://github.com/temporalio/sdk-go/issues/2286) | 0 | Tracing interceptor doesn't intercept standalone activities |
| [#2213](https://github.com/temporalio/sdk-go/issues/2213) | 0 | Interfaces like `ContextPropagator` don't generate doclinks in their docstrings |
| [#2204](https://github.com/temporalio/sdk-go/issues/2204) | 0 | Activity panics logged at task-handler level but not at caller level (inconsistent with other SDKs) |
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 0 | OpenTelemetry metrics handler implements Counter as UpDownCounter, exposed as Gauge instead of Counter |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 3 | `MutableSideEffect` in test framework ignores custom comparison function |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | `TestWorkflowEnvironment` hides panics when errors are wrapped with `errors.Join` |
| [#2025](https://github.com/temporalio/sdk-go/issues/2025) | 0 | `DescribeTaskQueueEnhanced` uses deprecated fields for task-queue stats |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | 0 | OTel emitted metrics don't match documented behavior (UpDownCounter vs. monotonic) |
| [#1846](https://github.com/temporalio/sdk-go/issues/1846) | 0 | `AsTime()` on a nil protobuf timestamp converts to Jan 1, 1970 with `IsZero()` returning false |
| [#1496](https://github.com/temporalio/sdk-go/issues/1496) | 0 | Workflow outcome inconsistent between test env and real server on child cancellation |
| [#1349](https://github.com/temporalio/sdk-go/issues/1349) | 0 | `WorkflowRun.Get`/`GetWithOptions` don't use context-aware data converters (inconsistent with rest of SDK) |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | Child context cancellation propagates in non-deterministic order due to Go map iteration randomness |
| [#1054](https://github.com/temporalio/sdk-go/issues/1054) | 0 | Go SDK fails to respect server's `EncodedFailureAttributes` capability |
| [#1037](https://github.com/temporalio/sdk-go/issues/1037) | 0 | `ExecuteActivity` panics on value-receiver methods called with pointer types (Go auto-dereference quirk) |
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | `AwaitWithTimeout` doesn't cancel its timer when condition is satisfied — wakes idle workflows |

---

## API & Component Hotspots

The following APIs and components appear most frequently in open semantic cards, identifying areas with concentrated issue load. Severity counts are for open issues only.

| API | Open Issue Count | Severity Distribution |
|-----|------------------|----------------------|
| `ExecuteActivity` | 17 | high: 4, medium: 11, low: 2 |
| `ExecuteWorkflow` | 8 | high: 4, medium: 4 |
| `ExecuteChildWorkflow` | 6 | high: 4, medium: 2 |
| `RegisterActivity` | 5 | high: 2, medium: 3 |
| `OnActivity` (test mocking) | 5 | high: 3, medium: 2 |
| `QueryWorkflow` | 3 | high: 3 |
| `RecordHeartbeat` | 2 | high: 1, medium: 1 |
| `SignalExternalWorkflow` | 2 | high: 1, medium: 1 |

| Component | Open Issue Count |
|-----------|------------------|
| worker | 29 |
| activity-executor | 29 |
| workflow-execution | 14 |
| test-suite / test-framework / test-environment | 30+ (combined) |
| client | 11 |
| query-handler | 7 |
| interceptor / tracing-interceptor | 12 (combined) |
| metrics / opentelemetry-handler | 8 (combined) |

**Observations:** Test framework components dominate the hotspot list. `ExecuteActivity` and `OnActivity` together appear in 22 open issues, indicating that activity registration, invocation, and mocking are persistent friction surfaces. Query path issues are uniformly high severity — every open issue involving `QueryWorkflow` is rated `severity:high`.

---

## Enhancement Requests (96 issues)

The 96 open enhancement requests cluster into a small number of recurring themes. Categories below emerge from the `subcategory` and `concepts` fields in semantic cards.

### Test Framework Improvements (19 issues)

The largest cluster of feature requests targets the test framework. Users want production-parity behavior, more configuration knobs, and modernized tooling.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Migrate away from archived `golang/mock` library |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | Remove the legacy `mocks` package in favor of `gomocks` |
| [#1177](https://github.com/temporalio/sdk-go/issues/1177) | 0 | Replace archived Facebook clock library with a modern alternative |
| [#1633](https://github.com/temporalio/sdk-go/issues/1633) | 0 | Output JUnit XML for test analysis |
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | `SetStartTime` parity for `TestActivityEnvironment` |
| [#1167](https://github.com/temporalio/sdk-go/issues/1167) | 0 | Configurable 10-minute activity timeout in `TestActivityEnvironment` |
| [#1173](https://github.com/temporalio/sdk-go/issues/1173) | 0 | Verify non-retryable error configuration in `OnActivity` mocks |
| [#1395](https://github.com/temporalio/sdk-go/issues/1395) | 0 | Add stack traces and context to `TestWorkflowEnvironment` errors |
| [#1469](https://github.com/temporalio/sdk-go/issues/1469) | 0 | Allow specifying attempt count in `TestWorkflowEnvironment` |
| [#1895](https://github.com/temporalio/sdk-go/issues/1895) | 0 | Simulate signal-draining race conditions in tests |
| [#125](https://github.com/temporalio/sdk-go/issues/125) | 0 | Remove dummy activity registration requirement for mocks |
| [#935](https://github.com/temporalio/sdk-go/issues/935) | 0 | Populate `ContinuedExecutionRunID` in unit tests |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | 0 | Configurable 10-attempt activity retry default |
| [#458](https://github.com/temporalio/sdk-go/issues/458) | 0 | Panic if `RegisterDelayedCallback` called after `ExecuteWorkflow` |
| [#439](https://github.com/temporalio/sdk-go/issues/439) | 0 | Access/assert on signal channel state in test env |
| [#497](https://github.com/temporalio/sdk-go/issues/497) | 0 | Query a workflow after signaling in test env |
| [#50](https://github.com/temporalio/sdk-go/issues/50) | 0 | Support unrelated parallel workflows in `TestWorkflowEnvironment` |
| [#2045](https://github.com/temporalio/sdk-go/issues/2045) | 0 | Add tests verifying custom slot supplier implementations |
| [#1564](https://github.com/temporalio/sdk-go/issues/1564) | 0 | Test coverage for Nexus sync/async on Temporal Cloud |

### Worker Lifecycle & Sessions

| Issue | 👍 | Request |
|-------|-----|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Clean worker shutdown that waits for activity sessions to complete (top-voted issue in repo) |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | 0 | Graceful worker shutdown that waits for in-flight activities |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Sessions survive worker restart (only fail on prolonged outage) |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Pass open sessions from parent workflow to child workflows |
| [#505](https://github.com/temporalio/sdk-go/issues/505) | 0 | Non-retryable errors for session heartbeat failures and panics |
| [#194](https://github.com/temporalio/sdk-go/issues/194) | 0 | Graceful cleanup logic execution in sessions during cancellation |

### Observability (Tracing, Metrics, Logging)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all workflow/activity-related logs |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add TaskQueue to `TracerStartSpanOptions` |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | `ContinueAsNew` should create new root span |
| [#1334](https://github.com/temporalio/sdk-go/issues/1334) | 0 | Opt out of automatic tracer span creation when scheduling workflows |
| [#1445](https://github.com/temporalio/sdk-go/issues/1445) | 0 | OpenTelemetry handler improvements (int milliseconds, metric naming, etc.) |
| [#2097](https://github.com/temporalio/sdk-go/issues/2097) | 0 | Add context parameter to `MetricsHandler` for OTel exemplar support |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Metric for activity scheduling to last-retry duration |
| [#619](https://github.com/temporalio/sdk-go/issues/619) | 0 | Standardize tracing tags across SDKs |
| [#1954](https://github.com/temporalio/sdk-go/issues/1954) | 1 | Retrieve original (unwrapped) logger from `activity.GetLogger()` |
| [#1759](https://github.com/temporalio/sdk-go/issues/1759) | 0 | Configurable activity error logging level (ERROR vs. WARN) |
| [#616](https://github.com/temporalio/sdk-go/issues/616) | 0 | Investigate client vs. server gRPC latency discrepancies |

### Workflow & Activity APIs

| Issue | 👍 | Request |
|-------|-----|---------|
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | Include local activity input arguments in history events |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Add `workflow.WithCancelCause(...)` matching stdlib |
| [#1796](https://github.com/temporalio/sdk-go/issues/1796) | 0 | Add `Patched()`/`DeprecatePatch()` APIs (consider deprecating `GetVersion`) |
| [#2335](https://github.com/temporalio/sdk-go/issues/2335) | 0 | Add `WorkflowIDConflictPolicy` to `ChildWorkflowOptions` |
| [#1593](https://github.com/temporalio/sdk-go/issues/1593) | 0 | Range-over-func iterator APIs leveraging Go 1.23 |
| [#1817](https://github.com/temporalio/sdk-go/issues/1817) | 0 | Expose workflow cancellation cause/reason |
| [#2085](https://github.com/temporalio/sdk-go/issues/2085) | 0 | `firstExecutionRunId` parameter on cancel/terminate |
| [#2131](https://github.com/temporalio/sdk-go/issues/2131) | 0 | Decouple `MaxHeartbeatThrottleInterval` from RPC timeout |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments |
| [#997](https://github.com/temporalio/sdk-go/issues/997) | 0 | Dynamic query/update handler fallbacks |
| [#1300](https://github.com/temporalio/sdk-go/issues/1300) | 0 | Better error messages for wrong options types on `ExecuteActivity` |
| [#1760](https://github.com/temporalio/sdk-go/issues/1760) | 0 | Type-safe, workflow-scoped local variable storage |
| [#1705](https://github.com/temporalio/sdk-go/issues/1705) | 0 | Custom `RequestId` on `SignalWorkflow` for server-side dedup |
| [#728](https://github.com/temporalio/sdk-go/issues/728) | 0 | Add `Await` branch to `Selector` |
| [#266](https://github.com/temporalio/sdk-go/issues/266) | 0 | Expose activity start/completion metadata to workflow code |
| [#533](https://github.com/temporalio/sdk-go/issues/533) | 0 | Transfer unprocessed signals across `ContinueAsNew` |
| [#101](https://github.com/temporalio/sdk-go/issues/101) | 0 | Pass channels as parameters to child workflows/activities |

### Configuration, Client & gRPC

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2329](https://github.com/temporalio/sdk-go/issues/2329) | 0 | Disable default round-robin gRPC service config (causes connection delays with external LBs) |
| [#444](https://github.com/temporalio/sdk-go/issues/444) | 0 | Configurable gRPC RPC timeouts (10s/70s defaults too long) |
| [#705](https://github.com/temporalio/sdk-go/issues/705) | 0 | Expose `rpcLongPollTimeout` in `WorkflowServiceStubsOptions` |
| [#277](https://github.com/temporalio/sdk-go/issues/277) | 0 | Expose underlying gRPC `ServiceClient` |

### Worker Versioning & Deployments

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1778](https://github.com/temporalio/sdk-go/issues/1778) | 0 | Worker Deployment API refactor (Rollout embedded in Deployment) |
| [#1777](https://github.com/temporalio/sdk-go/issues/1777) | 0 | Ramp API for Worker Deployments |
| [#1471](https://github.com/temporalio/sdk-go/issues/1471) | 0 | Retrieve build ID from `WFTStarted` instead of `WFTCompleted` |
| [#1776](https://github.com/temporalio/sdk-go/issues/1776) | 0 | Update handler flag for re-apply operations |

### Interceptors & Data Converters

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2304](https://github.com/temporalio/sdk-go/issues/2304) | 0 | Safe `UpdateWithStartWorkflow` interceptor for inspecting/modifying `StartWorkflowOption` |
| [#1283](https://github.com/temporalio/sdk-go/issues/1283) | 0 | Remove `ClientOutboundInterceptor.PollWorkflowUpdate` (unneeded interception point) |
| [#1351](https://github.com/temporalio/sdk-go/issues/1351) | 1 | Support interceptors on `WorkflowRun.Get()` |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | 0 | `ContextAware` interface for failure converters |
| [#842](https://github.com/temporalio/sdk-go/issues/842) | 0 | Selective payload skipping in codec gRPC interceptor |
| [#1132](https://github.com/temporalio/sdk-go/issues/1132) | 0 | Visit all payloads at once in proxy visitor interceptor |
| [#2370](https://github.com/temporalio/sdk-go/issues/2370) | 0 | Optional retry policy for `PayloadCodec` Encode/Decode |
| [#2203](https://github.com/temporalio/sdk-go/issues/2203) | 0 | Public accessors for underlying proto data in error/result types |

### External Storage & Contrib

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2364](https://github.com/temporalio/sdk-go/issues/2364) | 0 | Google Cloud Storage external storage driver in contrib |
| [#2350](https://github.com/temporalio/sdk-go/issues/2350) | 0 | Operator commands for standalone activities |

### API Design & SDK Maintenance

| Issue | 👍 | Request |
|-------|-----|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to avoid type aliasing (Go tooling pain) |
| [#70](https://github.com/temporalio/sdk-go/issues/70) | 0 | Refactor `NewWorker` to remove downcast/panic; allow client wrapping |
| [#35](https://github.com/temporalio/sdk-go/issues/35) | 0 | Pass configuration to workflows without breaking determinism |
| [#198](https://github.com/temporalio/sdk-go/issues/198) | 0 | Backward-incompatible workflow/activity signature evolution |
| [#1315](https://github.com/temporalio/sdk-go/issues/1315) | 0 | Deprecate `SDKFlagProtocolMessageCommand` and `SDKPriorityUpdateHandling` |
| [#968](https://github.com/temporalio/sdk-go/issues/968) | 0 | Remove deprecated `local_activity_canceled`/`local_activity_failed` metrics |
| [#659](https://github.com/temporalio/sdk-go/issues/659) | 0 | Deprecate `Control` attribute on external workflow operations |
| [#1980](https://github.com/temporalio/sdk-go/issues/1980) | 0 | `workflowcheck` should embed version information |
| [#1035](https://github.com/temporalio/sdk-go/issues/1035) | 0 | `workflowcheck` should validate struct unexported fields |
| [#1341](https://github.com/temporalio/sdk-go/issues/1341) | 0 | Flag anonymous functions in local activities as non-deterministic |
| [#1387](https://github.com/temporalio/sdk-go/issues/1387) | 0 | Configurable panic policy at workflow level |
| [#996](https://github.com/temporalio/sdk-go/issues/996) | 0 | Opt-in worker option for `__stack_trace` custom data conversion |
| [#1716](https://github.com/temporalio/sdk-go/issues/1716) | 0 | Keep query-evicted workflows in cache |
| [#1397](https://github.com/temporalio/sdk-go/issues/1397) | 1 | `ReplayWorkflowHistoryOptions` for JSON-file replay variants |
| [#1610](https://github.com/temporalio/sdk-go/issues/1610) | 0 | Expose `GetWorkflowResult` on `WorkflowReplayer` interface |
| [#2191](https://github.com/temporalio/sdk-go/issues/2191) | 0 | Expose task-queue stickiness to custom slot supplier |
| [#1157](https://github.com/temporalio/sdk-go/issues/1157) | 0 | Local activities need `WaitForCancellation` option |
| [#900](https://github.com/temporalio/sdk-go/issues/900) | 0 | Log warning for silently dropped signals (deserialization failures) |
| [#875](https://github.com/temporalio/sdk-go/issues/875) | 0 | Query handlers should be statically prevented from unsafe operations |
| [#698](https://github.com/temporalio/sdk-go/issues/698) | 0 | Make "unable to find workflow type" error non-retryable |
| [#238](https://github.com/temporalio/sdk-go/issues/238) | 0 | `RecordActivityHeartbeat` should return error when activity is canceled |
| [#126](https://github.com/temporalio/sdk-go/issues/126) | 0 | Automatic heartbeating for long-running activities |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

126 issues (75% of the open backlog) have had no activity in over 12 months. These should be reviewed for closure.

- **Close candidates:** Pre-2023 enhancement requests with zero upvotes and zero comments are good closure candidates. Examples: [#754](https://github.com/temporalio/sdk-go/issues/754) (integration test for gRPC proxy), [#1177](https://github.com/temporalio/sdk-go/issues/1177) (Facebook clock library replacement — may already be obsolete), [#358](https://github.com/temporalio/sdk-go/issues/358) (JSON payload encoding in Web UI — likely a server/UI concern), [#247](https://github.com/temporalio/sdk-go/issues/247) (search attribute quotation marks — may be fixed).
- **Needs triage:** High-engagement stale items where the underlying need is unclear — [#181](https://github.com/temporalio/sdk-go/issues/181) (16 👍, last activity 2020), [#829](https://github.com/temporalio/sdk-go/issues/829) (6 👍, last activity 2023), [#313](https://github.com/temporalio/sdk-go/issues/313) (4 👍), [#89](https://github.com/temporalio/sdk-go/issues/89) (7 👍). Confirm whether these are still valid asks before closing.
- **Keep open:** Valid bugs that haven't been worked on but remain reproducible — [#866](https://github.com/temporalio/sdk-go/issues/866), [#475](https://github.com/temporalio/sdk-go/issues/475), [#482](https://github.com/temporalio/sdk-go/issues/482), [#716](https://github.com/temporalio/sdk-go/issues/716), [#1240](https://github.com/temporalio/sdk-go/issues/1240). These should be kept open but tagged for triage prioritization.

### Duplicate Candidates

The following sets of issues describe overlapping concerns and may be candidates for consolidation:

- **Worker shutdown / graceful close:** [#181](https://github.com/temporalio/sdk-go/issues/181) (clean shutdown for sessions), [#1086](https://github.com/temporalio/sdk-go/issues/1086) (graceful shutdown waiting for activities). Consider merging or cross-linking.
- **OTel Counter metric type bug:** [#2140](https://github.com/temporalio/sdk-go/issues/2140) and [#1929](https://github.com/temporalio/sdk-go/issues/1929) both describe the OTel UpDownCounter vs. Counter misuse — these are effectively the same bug.
- **Mock package replacement:** [#1410](https://github.com/temporalio/sdk-go/issues/1410) (migrate away from `golang/mock`) and [#61](https://github.com/temporalio/sdk-go/issues/61) (remove `mocks` package in favor of `gomocks`) overlap.
- **`TestWorkflowEnvironment` mock assertion errors:** [#1100](https://github.com/temporalio/sdk-go/issues/1100), [#975](https://github.com/temporalio/sdk-go/issues/975), [#642](https://github.com/temporalio/sdk-go/issues/642) all describe inconsistent mock assertion behavior.
- **Activity timeout / test parity:** [#866](https://github.com/temporalio/sdk-go/issues/866), [#167](https://github.com/temporalio/sdk-go/issues/167), [#1099](https://github.com/temporalio/sdk-go/issues/1099), [#1496](https://github.com/temporalio/sdk-go/issues/1496) all stem from test-env vs. production divergence.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Resolve the [#899](https://github.com/temporalio/sdk-go/issues/899) `uber-go/tally` CVE chain (DoS-class)
- Fix workflow query panics ([#475](https://github.com/temporalio/sdk-go/issues/475), [#482](https://github.com/temporalio/sdk-go/issues/482), [#755](https://github.com/temporalio/sdk-go/issues/755))
- Fix `ExecuteWorkflow` timeout-halving regression ([#1104](https://github.com/temporalio/sdk-go/issues/1104))
- Eliminate the 14.3% CPU overhead in `isPanicking()` ([#2326](https://github.com/temporalio/sdk-go/issues/2326))
- Plug goroutine leak on workflow termination ([#716](https://github.com/temporalio/sdk-go/issues/716))
- Stop the 13,000-retry panic loop on schedule-to-start timeout ([#813](https://github.com/temporalio/sdk-go/issues/813))
- Fix data race in command state machine after deadlock detector ([#1240](https://github.com/temporalio/sdk-go/issues/1240))
- Fix typed search attribute panic on invalid values ([#1668](https://github.com/temporalio/sdk-go/issues/1668))

### Phase 2: Developer Experience (Short-term)
- Test framework production-parity initiative covering [#866](https://github.com/temporalio/sdk-go/issues/866), [#1100](https://github.com/temporalio/sdk-go/issues/1100), [#1427](https://github.com/temporalio/sdk-go/issues/1427), [#975](https://github.com/temporalio/sdk-go/issues/975), [#491](https://github.com/temporalio/sdk-go/issues/491), [#167](https://github.com/temporalio/sdk-go/issues/167)
- Activity registration improvements: fix duplicate-name routing ([#2379](https://github.com/temporalio/sdk-go/issues/2379)), anonymous-function alias collisions ([#2141](https://github.com/temporalio/sdk-go/issues/2141))
- `DevServer.Stop()` graceful shutdown ([#1360](https://github.com/temporalio/sdk-go/issues/1360))
- OTel Counter/UpDownCounter fix ([#2140](https://github.com/temporalio/sdk-go/issues/2140), [#1929](https://github.com/temporalio/sdk-go/issues/1929))
- Mock library migration ([#1410](https://github.com/temporalio/sdk-go/issues/1410), [#61](https://github.com/temporalio/sdk-go/issues/61), [#1177](https://github.com/temporalio/sdk-go/issues/1177))

### Phase 3: Feature Expansion (Medium-term)
- Clean worker shutdown for sessions ([#181](https://github.com/temporalio/sdk-go/issues/181), top-voted at 16 👍)
- Interceptor logger propagation to all workflow/activity logs ([#829](https://github.com/temporalio/sdk-go/issues/829))
- Custom trace attribute keys ([#1149](https://github.com/temporalio/sdk-go/issues/1149))
- Include local activity inputs in history ([#313](https://github.com/temporalio/sdk-go/issues/313))
- Worker Deployment / Ramp / Versioning APIs ([#1778](https://github.com/temporalio/sdk-go/issues/1778), [#1777](https://github.com/temporalio/sdk-go/issues/1777), [#1471](https://github.com/temporalio/sdk-go/issues/1471), [#1796](https://github.com/temporalio/sdk-go/issues/1796))
- Type aliasing refactor (long-standing Go tooling pain) ([#89](https://github.com/temporalio/sdk-go/issues/89))

### Phase 4: Maintenance (Ongoing)
- Triage the 126 stale issues; close obsolete enhancement requests with zero engagement
- Consolidate duplicate/overlapping issues (worker shutdown, OTel counter, mock packages, test parity)
- Improve NDE error messages with actionable details ([#1693](https://github.com/temporalio/sdk-go/issues/1693))
- Documentation improvements for `WithChildOptions` and continue-as-new behavior ([#676](https://github.com/temporalio/sdk-go/issues/676))
