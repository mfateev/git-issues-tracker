# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 171
**Total Closed Issues:** 683
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) . [TypeScript](typescript.md) . [Python](python.md) . [.NET](dotnet.md) . [PHP](php.md) . [Ruby](ruby.md) . [Server](server.md) . [Features](features.md)

---

## Executive Summary

The Go SDK has an 80% resolution rate (683/854) with a nearly stable backlog -- just 1 more issue opened than closed in the last 12 months. The dominant pain point is the **test framework**, which accounts for 44 open issues (26% of all open issues), covering panics, incorrect mock behavior, and missing test environment capabilities. Beyond testing, the top user demands center on **session management** (the #1 upvoted issue at 16 upvotes), **observability/tracing** improvements, and **API refactoring**. With 125 stale issues (73% of open issues having no activity for over 12 months), there is a significant housekeeping opportunity.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (open) | 61 | High - includes test framework panics, workflow determinism issues, and signal loss |
| Enhancement Requests (open) | 89 | Medium - strong demand for session management, observability, and API improvements |
| Test Framework Issues (open) | 44 | High - largest subcategory; directly blocking developer productivity |
| Security Vulnerabilities (open) | 1 | Critical - dependency vulnerability in uber-go/tally (severity 7.5) |
| Stale Issues (>12 months) | 125 | Medium - 73% of open issues have no recent activity |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs up) | 83 |
| Total Comments | 214 |
| Issues with Upvotes | 38 (22%) |
| Issues with Comments | 87 (51%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (683/854) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 78% |

### Recommended Actions

1. **Immediate:** Address security vulnerability in uber-go/tally dependency ([#899](https://github.com/temporalio/sdk-go/issues/899)) -- severity 7.5
2. **Short-term:** Fix critical test framework bugs: panics ([#2107](https://github.com/temporalio/sdk-go/issues/2107), [#351](https://github.com/temporalio/sdk-go/issues/351)), goroutine leaks ([#2090](https://github.com/temporalio/sdk-go/issues/2090)), and lost messages ([#2066](https://github.com/temporalio/sdk-go/issues/2066))
3. **Medium-term:** Implement session management improvements ([#181](https://github.com/temporalio/sdk-go/issues/181) -- 16 upvotes) and interceptor logger ([#829](https://github.com/temporalio/sdk-go/issues/829) -- 6 upvotes)
4. **Long-term:** Deliver custom trace attributes ([#1149](https://github.com/temporalio/sdk-go/issues/1149)), payload size validation ([#2165](https://github.com/temporalio/sdk-go/issues/2165)), and API refactoring ([#89](https://github.com/temporalio/sdk-go/issues/89))
5. **Housekeeping:** Triage 125 stale issues; close resolved/obsolete items from 2020-2022

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog has remained essentially stable, with almost equal numbers of issues opened and closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 102 | 101 | +1 |

Backlog Stable: The team is keeping pace with incoming issues. September 2025 showed particularly strong closure activity (-10 net), while October 2025 and January-February 2026 saw modest increases.

### Last 6 Months: Detailed Analysis

Recent activity shows the team resolving issues at a slightly lower rate than incoming, with strong enhancement completion but fewer bug fixes.

| Metric | Value |
|--------|-------|
| Issues Opened | 57 |
| Issues Closed | 42 |
| Bugs Closed | 9 |
| Enhancements Completed | 26 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in test suite |
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 5 | Serialization context for codecs and converters |
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing |

The most-upvoted issue in the entire repository (#916 with 21 upvotes) was resolved, demonstrating strong responsiveness to user demand.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
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

### Priority Score (Upvotes x 2 + Comments)

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

A dependency security vulnerability requires immediate attention.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | 7.5 | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities |

This dependency security issue has been open since August 2022. While it is in a transitive dependency, the 7.5 severity score warrants investigation for potential upgrade paths or dependency replacement.

---

## API & Component Hotspots

Based on semantic analysis of open issues, these APIs and components have the highest issue concentrations:

### Top APIs

| API | Issue Count | Key Concerns |
|-----|-------------|--------------|
| ExecuteActivity | 15 | Mock registration, test environment behavior, variadic arguments |
| ExecuteWorkflow | 8 | Test environment panics, timeout enforcement |
| ExecuteChildWorkflow | 7 | Mocking hangs, cancellation behavior, goroutine leaks |
| OnActivity | 5 | Mock assertions, interceptor bypass |
| StartWorkflow | 4 | Client behavior, search attribute handling |
| RegisterActivity | 4 | Alias collisions, anonymous function registration |

### Top Components

| Component | Issue Count | Severity Distribution |
|-----------|-------------|----------------------|
| worker | 32 | high: 8, medium: 17, low: 7 |
| activity-executor | 28 | high: 6, medium: 16, low: 6 |
| test-suite / test-framework | 24 | high: 5, medium: 14, low: 5 |
| workflow-execution | 13 | high: 4, medium: 7, low: 2 |
| client | 10 | high: 2, medium: 5, low: 3 |
| TestWorkflowEnvironment | 7 | high: 2, medium: 4, low: 1 |
| error-handling | 8 | high: 2, medium: 4, low: 2 |
| query-handler | 7 | high: 1, medium: 4, low: 2 |

---

### Testing Framework Issues (44 open issues)

The test framework is the single largest subcategory of open issues, indicating this is a major pain point for Go SDK users. Issues range from crashes to incorrect behavior to missing capabilities.

#### High Priority -- Panics & Crashes

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#475](https://github.com/temporalio/sdk-go/issues/475) | 0 | Panic when querying during Workflow failure + retry |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Panic in temporal unit test framework |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Cancellation of Parent Workflow with Child Workflow panics |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | Joining errors causes TestWorkflowEnvironment to hide panics and pass tests |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | 0 | Starting a child workflow in tests leaks goroutines |

#### Medium Priority -- Incorrect Behavior

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 3 | MutableSideEffect in test framework ignores cmp function |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | 1 | Inconsistent behavior when asserting invocations |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activity times out in test environment with child workflow |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | 1 | Cannot register mock activity with string name on test workflow environment |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | TestWorkflowEnvironment should surface errors and respect failure signal |
| [#1496](https://github.com/temporalio/sdk-go/issues/1496) | 0 | Workflow outcome is inconsistent between test env and real server |
| [#1468](https://github.com/temporalio/sdk-go/issues/1468) | 0 | Interceptors are skipped for mocked activities |
| [#495](https://github.com/temporalio/sdk-go/issues/495) | 0 | Calling GetChildWorkflowExecution for a mocked workflow causes the run to hang |

#### Lower Priority -- Edge Cases & Enhancements

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Activity Alias Collision in Test Environment with Anonymous Functions |
| [#2005](https://github.com/temporalio/sdk-go/issues/2005) | 0 | OnWorkflow test mocker doesn't propagate context headers |
| [#1961](https://github.com/temporalio/sdk-go/issues/1961) | 0 | Strange error when writing tests which does not occur in real temporal |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | SetOnChildWorkflowCompletedListener doesn't work as expected |

---

### Bugs -- Core SDK (61 total open)

#### Workflow Execution & Determinism

| Issue | Upvotes | Comments | Description |
|-------|---------|----------|-------------|
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | 0 | 3 | Lost messages from workflow.NewChannel(ctx) |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | 0 | Non-deterministic workflow code can send incorrect WFT completion |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | 0 | 1 | Signal sent to Selector can be lost if Default path blocks |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | 2 | Canceling a context with multiple child contexts can be non-deterministic |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | 0 | 0 | TERMINATE_IF_RUNNING doesn't work for duplicate child workflows |

#### Observability & Metrics

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 0 | OpenTelemetry incorrect metric type for Counter |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | 0 | OTel emitted metrics do not match behavior described in the docs |
| [#2103](https://github.com/temporalio/sdk-go/issues/2103) | 0 | Cosmetic bug in logger |
| [#2204](https://github.com/temporalio/sdk-go/issues/2204) | 0 | Activity panics missing log stack trace at caller level |

#### Activity & Heartbeat

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | 0 | Batched heartbeat got canceled due to caller context cancellation |
| [#1668](https://github.com/temporalio/sdk-go/issues/1668) | 0 | When deserializing typed search attributes, invalid values silently ignored |
| [#1846](https://github.com/temporalio/sdk-go/issues/1846) | 0 | AsTime() on a nil pointer converts to Jan. 1st, 1970 at midnight |

#### Worker & Poller Internals

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#2236](https://github.com/temporalio/sdk-go/issues/2236) | 0 | pollerBalancer.balance can unnecessarily block due to non-deterministic map iteration |
| [#2235](https://github.com/temporalio/sdk-go/issues/2235) | 0 | taskWorker.taskPollerType is not being set anywhere |
| [#2025](https://github.com/temporalio/sdk-go/issues/2025) | 0 | Fix DescribeTaskQueueEnhanced w/ stats to use non-deprecated API |

#### Tooling

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1906](https://github.com/temporalio/sdk-go/issues/1906) | 1 | workflowcheck crash (index out of range) |
| [#2213](https://github.com/temporalio/sdk-go/issues/2213) | 0 | Doclink: interfaces are not linked |
| [#1650](https://github.com/temporalio/sdk-go/issues/1650) | 0 | List of flaky tests |

#### Recent Bugs (Last 3 Months)

| Issue | Date | Description |
|-------|------|-------------|
| [#2236](https://github.com/temporalio/sdk-go/issues/2236) | 2026-03-17 | pollerBalancer.balance can unnecessarily block |
| [#2235](https://github.com/temporalio/sdk-go/issues/2235) | 2026-03-17 | taskWorker.taskPollerType is not being set anywhere |
| [#2213](https://github.com/temporalio/sdk-go/issues/2213) | 2026-03-05 | Doclink: interfaces are not linked |
| [#2204](https://github.com/temporalio/sdk-go/issues/2204) | 2026-02-24 | Activity panics missing log stack trace at caller level |
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 2026-01-08 | Activity Alias Collision in Test Environment |
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 2026-01-07 | OpenTelemetry incorrect metric type for Counter |

---

## Enhancement Requests (89 issues)

### Session Management (4+ issues)

Sessions represent the highest user demand with the #1 upvoted issue in the repository.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Add ability for a clean worker shutdown that waits for a session completion |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Add ability to support passing sessions from parent to child workflow |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Add ability to keep session open in case of a worker restart |

### Observability & Tracing

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all logs related to a workflow or activity execution |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add TaskQueue to TracerStartSpanOptions |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Add metric for time passed from the activity scheduling to the last attempt |
| [#2097](https://github.com/temporalio/sdk-go/issues/2097) | 0 | Add Context to MetricsHandler for Exemplar Support |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | ContinueAsNew should create new root span |

### Serialization & Codecs

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | Allow including local activity input into the history |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | 1 | Support ContextAware for failure converters |
| [#842](https://github.com/temporalio/sdk-go/issues/842) | 0 | Support custom object processing in codec gRPC interceptor |
| [#2203](https://github.com/temporalio/sdk-go/issues/2203) | 0 | Expose raw Failure and Payload protos on SDK error and result types |

### Testing Framework Enhancements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Consider migrating away from golang/mock |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | Remove mocks package |
| [#2065](https://github.com/temporalio/sdk-go/issues/2065) | 1 | NewTestActivityEnvironment no longer implements worker.ActivityRegistry |
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | SetStartTime for activity test env |
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | AwaitWithTimeout does not cancel its timer when condition is satisfied |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | 1 | Allow user to override default maximum activity attempts in test suite |
| [#1895](https://github.com/temporalio/sdk-go/issues/1895) | 0 | Support simulating race conditions during signal draining |

### API Design & SDK Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to avoid type aliasing |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Updated context functions to match context library |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments |
| [#2150](https://github.com/temporalio/sdk-go/issues/2150) | 0 | Stop sending null search attribute values on workflow start and continue as new |
| [#2264](https://github.com/temporalio/sdk-go/issues/2264) | 0 | Deprecate namespace fields on cross-namespace workflow command options |

### Worker Lifecycle & Configuration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2124](https://github.com/temporalio/sdk-go/issues/2124) | 0 | Support standalone activities |
| [#2131](https://github.com/temporalio/sdk-go/issues/2131) | 0 | Configurable minRPCTimeout for activity worker |
| [#2094](https://github.com/temporalio/sdk-go/issues/2094) | 0 | Worker Heartbeating |
| [#2191](https://github.com/temporalio/sdk-go/issues/2191) | 0 | Expose whether a task queue is sticky to slot supplier |
| [#1716](https://github.com/temporalio/sdk-go/issues/1716) | 0 | Make it possible to keep workflows in worker cache also if they're only queried |

### Payload Size & Validation

Three related issues filed in January 2026 address payload and history size limits:

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2165](https://github.com/temporalio/sdk-go/issues/2165) | 0 | SDK should fail workflow task if payloads size is known to be too large |
| [#2166](https://github.com/temporalio/sdk-go/issues/2166) | 0 | Warn if SDK detects a workflow history over a certain size |
| [#2167](https://github.com/temporalio/sdk-go/issues/2167) | 0 | Warn if the SDK tried to send a payload above a specific size |

### Documentation & Tooling

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2177](https://github.com/temporalio/sdk-go/issues/2177) | 0 | Ensure all internal structs that are exposed publicly are fully documented |
| [#2222](https://github.com/temporalio/sdk-go/issues/2222) | 0 | Code coverage tooling |
| [#2252](https://github.com/temporalio/sdk-go/issues/2252) | 0 | Allow payload visitors to visit memo payloads in aggregate |
| [#2233](https://github.com/temporalio/sdk-go/issues/2233) | 0 | Support conflict token retry loop for schedule updates |

---

## Housekeeping Recommendations

### Stale Issues (125 open issues with no activity >12 months)

73% of open issues have had no activity for over a year. Top stale issues by upvotes:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 2020-07-07 | Add ability for a clean worker shutdown that waits for a session completion |
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 2025-02-04 | Refactor SDK to avoid type aliasing |
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 2023-02-02 | Use interceptor logger for all logs related to a workflow or activity execution |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 2025-01-30 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2025-02-04 | Allow including local activity input into the history |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 2024-08-08 | Updated context functions to match context library |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | 2024-03-04 | Consider migrating away from golang/mock |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | 2024-03-04 | Canceling a context with multiple child contexts can be non-deterministic |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | 2024-12-16 | Add ability to support passing sessions from parent to child workflow |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | 2022-04-07 | Add metric for time passed from the activity scheduling to the last attempt |

**Recommendations:**
- **Keep open:** High-upvoted issues ([#181](https://github.com/temporalio/sdk-go/issues/181), [#829](https://github.com/temporalio/sdk-go/issues/829), [#89](https://github.com/temporalio/sdk-go/issues/89)) represent valid long-term enhancements with demonstrated user demand
- **Close candidates:** Very old issues from 2020-2021 that may no longer be relevant ([#61](https://github.com/temporalio/sdk-go/issues/61), [#351](https://github.com/temporalio/sdk-go/issues/351), [#167](https://github.com/temporalio/sdk-go/issues/167))
- **Needs triage:** Testing bugs that may have been fixed but never closed; dependency security issues that may have been resolved upstream

### Duplicate Candidates

Several issues may overlap and should be reviewed for consolidation:
- [#1410](https://github.com/temporalio/sdk-go/issues/1410) and [#61](https://github.com/temporalio/sdk-go/issues/61) both discuss removing/migrating the mocks package
- Multiple test environment timeout issues ([#866](https://github.com/temporalio/sdk-go/issues/866), [#167](https://github.com/temporalio/sdk-go/issues/167), [#1100](https://github.com/temporalio/sdk-go/issues/1100)) may share root causes
- [#937](https://github.com/temporalio/sdk-go/issues/937) and [#181](https://github.com/temporalio/sdk-go/issues/181) both relate to session handling during worker lifecycle
- [#2165](https://github.com/temporalio/sdk-go/issues/2165), [#2166](https://github.com/temporalio/sdk-go/issues/2166), [#2167](https://github.com/temporalio/sdk-go/issues/2167) are a related set of payload/history size validation requests
- [#1929](https://github.com/temporalio/sdk-go/issues/1929) and [#2140](https://github.com/temporalio/sdk-go/issues/2140) both report OpenTelemetry metric inconsistencies

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Security:** Investigate and resolve uber-go/tally vulnerability ([#899](https://github.com/temporalio/sdk-go/issues/899))
- **Critical bugs:** Address test framework panics ([#2107](https://github.com/temporalio/sdk-go/issues/2107), [#475](https://github.com/temporalio/sdk-go/issues/475)) and goroutine leaks ([#2090](https://github.com/temporalio/sdk-go/issues/2090))
- **Data loss:** Fix lost messages from workflow channels ([#2066](https://github.com/temporalio/sdk-go/issues/2066)) and signal loss in Selector ([#1624](https://github.com/temporalio/sdk-go/issues/1624))
- **Determinism:** Fix non-deterministic workflow completion ([#1838](https://github.com/temporalio/sdk-go/issues/1838))
- **Worker internals:** Fix poller balancer blocking ([#2236](https://github.com/temporalio/sdk-go/issues/2236)) and unset taskPollerType ([#2235](https://github.com/temporalio/sdk-go/issues/2235))

### Phase 2: Developer Experience (Short-term)

- **Test framework:** Fix MutableSideEffect cmp function ([#2109](https://github.com/temporalio/sdk-go/issues/2109)), enforce WorkflowExecutionTimeout ([#866](https://github.com/temporalio/sdk-go/issues/866)), fix assertion inconsistencies ([#642](https://github.com/temporalio/sdk-go/issues/642))
- **Observability:** Fix OpenTelemetry metric type issues ([#2140](https://github.com/temporalio/sdk-go/issues/2140), [#1929](https://github.com/temporalio/sdk-go/issues/1929))
- **Logging:** Implement interceptor logger for workflow/activity execution ([#829](https://github.com/temporalio/sdk-go/issues/829)), fix activity panic stack traces ([#2204](https://github.com/temporalio/sdk-go/issues/2204))

### Phase 3: Feature Expansion (Medium-term)

- **Worker lifecycle:** Clean worker shutdown with session completion ([#181](https://github.com/temporalio/sdk-go/issues/181) -- 16 upvotes)
- **Tracing:** Custom trace attribute keys ([#1149](https://github.com/temporalio/sdk-go/issues/1149)) and TaskQueue in spans ([#1330](https://github.com/temporalio/sdk-go/issues/1330))
- **Local activities:** Include input in history ([#313](https://github.com/temporalio/sdk-go/issues/313))
- **Payload validation:** Payload/history size warnings and enforcement ([#2165](https://github.com/temporalio/sdk-go/issues/2165), [#2166](https://github.com/temporalio/sdk-go/issues/2166), [#2167](https://github.com/temporalio/sdk-go/issues/2167))
- **Serialization:** Expose raw proto types ([#2203](https://github.com/temporalio/sdk-go/issues/2203)), context-aware failure converters ([#1609](https://github.com/temporalio/sdk-go/issues/1609))

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage:** Review and close/update 125 stale issues
- **Dependency updates:** Monitor golang/mock deprecation ([#1410](https://github.com/temporalio/sdk-go/issues/1410)) and mocks package removal ([#61](https://github.com/temporalio/sdk-go/issues/61))
- **API cleanup:** Type aliasing refactor ([#89](https://github.com/temporalio/sdk-go/issues/89)), context function updates ([#1582](https://github.com/temporalio/sdk-go/issues/1582))
- **Documentation:** Improve public struct documentation ([#2177](https://github.com/temporalio/sdk-go/issues/2177)), fix doclink generation ([#2213](https://github.com/temporalio/sdk-go/issues/2213))
