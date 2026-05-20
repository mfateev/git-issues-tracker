# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 170
**Total Closed Issues:** 697
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Temporal Go SDK has 170 open issues across a tracked history of 867 total, with an 80% resolution rate indicating healthy long-term maintenance. The most pressing concern is the test framework, which accounts for the largest single category of open issues and contains multiple confirmed bugs affecting workflow simulation fidelity. A long tail of stale issues (76% of open issues untouched for over 12 months) represents a housekeeping opportunity, while the backlog is essentially stable — closing 110 issues against 108 opened over the past year.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Test Framework Bugs & Gaps | 127 | High — Multiple confirmed bugs cause test environment to diverge from production behavior |
| Workflow Engine Bugs | 30 | High — Non-determinism, signal loss, and panic scenarios affect production workflows |
| Observability (Metrics/Tracing) | 18 | Medium — OTel metric type errors and missing trace attributes reduce observability value |
| Worker Lifecycle | 13 | Medium — Session-aware shutdown (#181) has 16 upvotes and no resolution in 5 years |
| Security Vulnerability | 1 | High — CVE-2019-0210/0205 in `contrib/tally` dependency (CVSS 7.5) |
| Enhancements | 89 | Medium — Broad demand for logging, tracing, and API ergonomics improvements |
| Stale Issues | 130 | Low — 76% of open issues have no activity in over 12 months |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 83 |
| Total Comments | 213 |
| Issues with Upvotes | 38 (22%) |
| Issues with Comments | 87 (51%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (697/867) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 59% |
| Resolved within 90 days | 78% |

### Recommended Actions

1. **Immediate:** Upgrade `contrib/tally` dependency to resolve CVE-2019-0210 and CVE-2019-0205 (CVSS 7.5). Address the non-deterministic WFT completion bug (#1838) before it causes data corruption in production.
2. **Short-term:** Fix the cluster of high-impact test framework bugs (signal loss #1624/#2066, panic hiding #2039, interceptor bypass #1468) to restore test reliability.
3. **Medium-term:** Implement session-aware worker shutdown (#181, 16 upvotes), unify interceptor logging (#829, 6 upvotes), and fix `AwaitWithTimeout` timer leak (#986).
4. **Long-term:** Refactor SDK to eliminate type aliasing (#89, 7 upvotes) and replace the `mocks` package (#61), as both are known pain points affecting tooling and test ergonomics.
5. **Housekeeping:** Triage the 130 stale issues; many were filed against SDK v0.x/v1.x behavior that has since changed.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is essentially stable, with a net reduction of 2 issues over the past year. Recent months show mild fluctuation between opening and closing, with no sustained runaway growth.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 108 | 110 | -2 |

📉 **Backlog Shrinking:** 2 more issues closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

Activity has been consistent. Enhancements account for most closed work (22 completed), while bugs resolved (12) suggests focused quality efforts. The net addition of 5 issues reflects normal incoming demand slightly outpacing resolution.

| Metric | Value |
|--------|-------|
| Issues Opened | 50 |
| Issues Closed | 45 |
| Bugs Closed | 12 |
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
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Add ability for a clean worker shutdown that waits for a session completion |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity execution |
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
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 32 | Add ability for a clean worker shutdown that waits for a session completion |
| 2 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 17 | Use interceptor logger for all logs related to a workflow or activity execution |
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

### Security Vulnerability (1 issue)

A dependency vulnerability in the `contrib/tally` integration module has been open since 2022. The affected library (`github.com/uber-go/tally/v4` v4.1.1) contains two Apache Thrift vulnerabilities with CVSS score 7.5, fixed in version 0.13.0. While this is in the contrib module and not the core SDK, users of the Tally metrics integration are exposed.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | 0 | CVE-2019-0210 and CVE-2019-0205 in `contrib/tally` dependency (CVSS 7.5, High severity) |

### Workflow Engine Bugs (30 issues)

Critical correctness issues in the core workflow execution engine. These affect production workflows and are distinct from test framework divergence.

**High Severity**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | Non-deterministic workflow code sends incorrect WFT completion, causing invalid update state transitions in History service |
| [#475](https://github.com/temporalio/sdk-go/issues/475) | 0 | Panic ("Attempt to generate a command before processing WorkflowTaskStarted event") when querying during workflow failure + retry |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | 0 | Messages lost from `workflow.NewChannel(ctx)` — regression introduced in v1.35.0 |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | 0 | Signal sent to Selector can be silently lost when `AddDefault` callback blocks; SDK flag fix was reverted in #2070 |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | Canceling a context with multiple child contexts is non-deterministic due to map iteration order |

**Medium Severity**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | `AwaitWithTimeout` does not cancel its internal timer when condition is satisfied, generating unnecessary workflow tasks |
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | 0 | Batched heartbeat gets canceled due to caller context cancellation instead of using a dedicated heartbeat context |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | 0 | `TERMINATE_IF_RUNNING` doesn't work for duplicate child workflow IDs |
| [#1846](https://github.com/temporalio/sdk-go/issues/1846) | 0 | `AsTime()` on nil pointer converts to Unix epoch (Jan 1 1970) instead of zero value |
| [#2326](https://github.com/temporalio/sdk-go/issues/2326) | 0 | `isPanicking()` calls `runtime.Callers()` on every coroutine yield — 14% CPU and 10% allocations under load (throughput_stress benchmark) |

### Test Framework Bugs (subset of 127 test-framework issues)

The test framework (`TestWorkflowEnvironment`) is the largest single issue cluster. Many bugs cause test behavior to diverge from production, giving false confidence.

**High Severity — Test Fidelity**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | `TestWorkflowEnvironment` does not enforce `WorkflowExecutionTimeout`, allowing tests to pass that would time out in production |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | `TestWorkflowEnvironment` silently swallows panics and does not respect failure signals |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | Joining errors causes `TestWorkflowEnvironment` to hide panics, producing false test passes |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activity times out in test environment when child workflows are present |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Cancellation of parent workflow with child workflow causes panic in test environment |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Panic in test framework |
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Activity alias collision in test environment when using anonymous functions |

**Medium Severity — Mock Behavior**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 3 | `MutableSideEffect` in test framework ignores the comparison function |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | 1 | Inconsistent behavior when asserting mock invocations |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | 1 | Cannot register mock activity with string name on test workflow environment |
| [#1468](https://github.com/temporalio/sdk-go/issues/1468) | 0 | Interceptors are skipped for mocked activities |
| [#495](https://github.com/temporalio/sdk-go/issues/495) | 0 | `GetChildWorkflowExecution()` for mocked workflow in test causes hang |

### Observability: Metrics & Tracing (18 metrics + related issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 0 | OpenTelemetry metric exported with incorrect type for Counter (breaks OTel collectors) |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | 0 | OTel emitted metrics do not match behavior described in documentation |
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | SDK internal logs do not use interceptor logger, so trace correlation fields are missing from all SDK-generated log lines |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | No way to set custom trace attribute keys on spans |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | `TracerStartSpanOptions` is missing `TaskQueue` field, preventing task-queue-level trace filtering |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | `ContinueAsNew` does not create a new root span, breaking trace chains across continuations |

### Worker Lifecycle & Sessions (13 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Worker shutdown waits for activities but not sessions; `worker.Close()` should support session-aware drain |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | No way to keep a session open after worker restart, requiring new session creation on recovery |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | No API to pass sessions from parent workflow to child workflow |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | 0 | Need graceful worker shutdown that waits for all in-flight activities to complete |

### Correctness & API Issues

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1668](https://github.com/temporalio/sdk-go/issues/1668) | 0 | When deserializing typed search attributes, invalid values are silently ignored instead of surfacing an error |
| [#933](https://github.com/temporalio/sdk-go/issues/933) | 0 | No problem indicators on failed workflow input deserialization |
| [#900](https://github.com/temporalio/sdk-go/issues/900) | 0 | No warning logged on failed serialization of signal input |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | `SetOnChildWorkflowCompletedListener` doesn't work as expected |
| [#2345](https://github.com/temporalio/sdk-go/issues/2345) | 0 | Schedule describe does not populate Priority on `ScheduleWorkflowAction` |
| [#2335](https://github.com/temporalio/sdk-go/issues/2335) | 0 | `ChildWorkflowOptions` missing `WorkflowIDConflictPolicy` (only available on `StartWorkflowOptions`) |

---

## API & Component Hotspots

| API/Component | Issue Count | Severity Distribution |
|---------------|-------------|----------------------|
| `activity-executor` (component) | 31 | high: 5, medium: 23, low: 3 |
| `worker` (component) | 30 | high: 6, medium: 21, low: 3 |
| `ExecuteActivity` (API) | 17 | high: 5, medium: 12 |
| `workflow-execution` (component) | 14 | high: 5, medium: 7, low: 2 |
| `test-suite` (component) | 14 | high: 4, medium: 8, low: 2 |
| `client` (component) | 11 | high: 2, medium: 6, low: 3 |
| `test-framework` (component) | 10 | high: 2, medium: 5, low: 3 |
| `ExecuteWorkflow` (API) | 8 | high: 4, medium: 3, low: 1 |
| `TestWorkflowEnvironment` (component) | 8 | high: 2, medium: 5, low: 1 |
| `ExecuteChildWorkflow` (API) | 6 | high: 3, medium: 3 |

The `activity-executor` and `worker` components are the most issue-dense areas, with `ExecuteActivity` being the single most mentioned API. The concentration of high-severity issues in `ExecuteWorkflow` and `ExecuteChildWorkflow` warrants focused review of workflow execution correctness.

---

## Enhancement Requests (89 issues)

### Worker & Session Management

| Issue | 👍 | Request |
|-------|-----|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Session-aware worker shutdown — wait for active sessions to complete before closing |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Keep session open after worker restart |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Pass sessions from parent to child workflow |
| [#194](https://github.com/temporalio/sdk-go/issues/194) | 0 | Seamless cleanup during session cancellation |

### Observability & Logging

| Issue | 👍 | Request |
|-------|-----|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all SDK-internal logs (enables trace correlation) |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys on spans |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add `TaskQueue` field to `TracerStartSpanOptions` |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | `ContinueAsNew` should create a new root span |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Add metric for time from activity scheduling to last attempt start |
| [#2097](https://github.com/temporalio/sdk-go/issues/2097) | 0 | Add context to `MetricsHandler` for Exemplar support in Prometheus |
| [#1954](https://github.com/temporalio/sdk-go/issues/1954) | 1 | Allow retrieving original (unwrapped) logger from `activity.GetLogger` / `workflow.GetLogger` |

### Test Framework Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1167](https://github.com/temporalio/sdk-go/issues/1167) | 0 | Allow setting activity timeouts in `TestActivityEnvironment` |
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | Add `SetStartTime` for activity test environment |
| [#1895](https://github.com/temporalio/sdk-go/issues/1895) | 0 | Support simulating race conditions during signal draining |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | 1 | Allow overriding default maximum activity attempts in test suite |
| [#1469](https://github.com/temporalio/sdk-go/issues/1469) | 0 | Allow specifying attempt number in `TestWorkflowEnvironment` |
| [#1395](https://github.com/temporalio/sdk-go/issues/1395) | 0 | `TestWorkflowEnvironment` should return errors with stack traces |
| [#935](https://github.com/temporalio/sdk-go/issues/935) | 0 | Enable testing workflows with populated `ContinuedExecutionRunID` |

### API Design & Ergonomics

| Issue | 👍 | Request |
|-------|-----|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to remove type aliasing (breaks Go tooling and IDE navigation) |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Update context functions to match standard `context` library signatures |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | `LocalActivityOptions.DoNotIncludeArgumentsIntoHistory` to reduce history size for large-state workflows |
| [#1351](https://github.com/temporalio/sdk-go/issues/1351) | 1 | Support interceptor on `WorkflowRun.Get` |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | Remove `mocks` package in favor of standard mock approaches |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Migrate away from deprecated `golang/mock` |
| [#1693](https://github.com/temporalio/sdk-go/issues/1693) | 0 | Provide actionable details on non-determinism errors |

### Worker Versioning & Deployments

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1796](https://github.com/temporalio/sdk-go/issues/1796) | 0 | Add `Patched()` and `DeprecatePatch()` APIs for versioning |
| [#1778](https://github.com/temporalio/sdk-go/issues/1778) | 0 | Rename Worker Deployment API interfaces |
| [#1777](https://github.com/temporalio/sdk-go/issues/1777) | 0 | Add ramp support to Worker Deployments |
| [#1471](https://github.com/temporalio/sdk-go/issues/1471) | 0 | Support new versioning in `WorkflowInfo.GetCurrentBuildID()` |

### Standalone Activities & Nexus

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2350](https://github.com/temporalio/sdk-go/issues/2350) | 0 | Implement operator commands for Standalone Activities |
| [#2318](https://github.com/temporalio/sdk-go/issues/2318) | 0 | Add Standalone Activities support to `TestWorkflowEnvironment` |
| [#2286](https://github.com/temporalio/sdk-go/issues/2286) | 0 | Standalone Activities — tracing interceptor does not intercept standalone activity calls |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

130 out of 170 open issues (76%) have not been updated in over 12 months. The average age of open issues is 1,039 days (~2.85 years).

- **Close candidates:** [#475](https://github.com/temporalio/sdk-go/issues/475) (panic labeled `external dependency`, behavior may have changed with SDK updates — needs verification against current versions); [#358](https://github.com/temporalio/sdk-go/issues/358) (JSON encoding issue from pre-1.0 era); [#50](https://github.com/temporalio/sdk-go/issues/50) (multi-workflow `TestWorkflowEnvironment` — likely addressed by current test suite APIs).
- **Needs triage:** [#181](https://github.com/temporalio/sdk-go/issues/181) (16 upvotes, last updated 2020 — needs explicit roadmap decision); [#89](https://github.com/temporalio/sdk-go/issues/89) (7 upvotes, type aliasing refactor — large scope, should be scheduled or explicitly closed as won't fix); [#829](https://github.com/temporalio/sdk-go/issues/829) (6 upvotes, last updated 2023 — still valid, needs owner).
- **Keep open:** [#1838](https://github.com/temporalio/sdk-go/issues/1838) (WFT correctness bug with linked repro PR); [#1624](https://github.com/temporalio/sdk-go/issues/1624) and [#2066](https://github.com/temporalio/sdk-go/issues/2066) (related signal-loss bugs, actively tracked); [#986](https://github.com/temporalio/sdk-go/issues/986) (`AwaitWithTimeout` timer leak — known design issue pending SDK version marker infrastructure).

### Duplicate Candidates

- [#181](https://github.com/temporalio/sdk-go/issues/181) and [#1086](https://github.com/temporalio/sdk-go/issues/1086) both request graceful worker shutdown with activity/session drain — consider consolidating.
- [#829](https://github.com/temporalio/sdk-go/issues/829) and [#1954](https://github.com/temporalio/sdk-go/issues/1954) overlap on interceptor logger propagation — the latter is a narrower variant of the former.
- [#61](https://github.com/temporalio/sdk-go/issues/61) and [#1410](https://github.com/temporalio/sdk-go/issues/1410) both address migrating away from the `mocks`/`golang/mock` infrastructure — should be unified into a single tracking issue.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Upgrade `contrib/tally` to resolve CVE-2019-0210/0205 ([#899](https://github.com/temporalio/sdk-go/issues/899))
- Fix non-deterministic WFT completion bug ([#1838](https://github.com/temporalio/sdk-go/issues/1838))
- Fix signal loss in Selector default path ([#1624](https://github.com/temporalio/sdk-go/issues/1624), [#2066](https://github.com/temporalio/sdk-go/issues/2066))
- Fix OTel Counter metric type ([#2140](https://github.com/temporalio/sdk-go/issues/2140))

### Phase 2: Developer Experience (Short-term)
- Fix `TestWorkflowEnvironment` timeout enforcement ([#866](https://github.com/temporalio/sdk-go/issues/866))
- Fix test framework panic/error surfacing ([#1100](https://github.com/temporalio/sdk-go/issues/1100), [#2039](https://github.com/temporalio/sdk-go/issues/2039))
- Route SDK-internal logs through interceptor logger ([#829](https://github.com/temporalio/sdk-go/issues/829))
- Add `AwaitWithTimeout` timer cancellation via SDK version marker ([#986](https://github.com/temporalio/sdk-go/issues/986))
- Fix `isPanicking()` CPU overhead ([#2326](https://github.com/temporalio/sdk-go/issues/2326))

### Phase 3: Feature Expansion (Medium-term)
- Session-aware worker shutdown ([#181](https://github.com/temporalio/sdk-go/issues/181))
- Custom trace attribute keys ([#1149](https://github.com/temporalio/sdk-go/issues/1149))
- `LocalActivityOptions.DoNotIncludeArgumentsIntoHistory` ([#313](https://github.com/temporalio/sdk-go/issues/313))
- Variadic activity function support ([#1114](https://github.com/temporalio/sdk-go/issues/1114))
- Session pass-through to child workflows ([#884](https://github.com/temporalio/sdk-go/issues/884))

### Phase 4: Maintenance (Ongoing)
- Stale issue triage — close resolved or outdated issues (130 candidates)
- Remove type aliasing and modernize public API ([#89](https://github.com/temporalio/sdk-go/issues/89))
- Replace `mocks` package with modern mock support ([#61](https://github.com/temporalio/sdk-go/issues/61), [#1410](https://github.com/temporalio/sdk-go/issues/1410))
- Dependency updates across `contrib/` modules
