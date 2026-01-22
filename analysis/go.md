# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 164
**Total Closed Issues:** 667
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Go SDK maintains a healthy 80% resolution rate with a shrinking backlog (14 more issues closed than opened in the last 12 months). The primary concerns are concentrated in the **test framework** (48 issues, 25 bugs), **observability/tracing** (14 issues), and **session management** (6 issues including the top-upvoted feature request). With 64% of open issues being stale (>12 months old), there is significant opportunity for housekeeping while addressing high-impact user requests.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Testing Framework Issues | 48 | High - Core developer experience; 25 are bugs affecting test reliability |
| Bugs (total) | 60 | High - 25 testing bugs, 9 workflow execution bugs, 4 observability bugs |
| Enhancement Requests | 89 | Medium - Strong user demand for session improvements and observability |
| Observability/Tracing | 14 | Medium - OpenTelemetry and metrics issues affecting production monitoring |
| Security Vulnerabilities | 1 | Critical - Dependency vulnerability in uber-go/tally |
| Stale Issues | 105 | Low - 64% of issues have no activity for >12 months |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 86 |
| Total Comments | 215 |
| Issues with Upvotes | 39 (24%) |
| Issues with Comments | 88 (54%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (667/831) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 78% |

### Recommended Actions

1. **Immediate:** Address security vulnerability in uber-go/tally dependency (#899)
2. **Short-term:** Fix critical test framework bugs affecting CI reliability (panics, goroutine leaks, assertion inconsistencies)
3. **Medium-term:** Implement high-demand session management features (#181 - 16 upvotes)
4. **Long-term:** Improve observability with OpenTelemetry fixes and enhanced tracing capabilities
5. **Housekeeping:** Triage 105 stale issues; close resolved/obsolete items

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking steadily with consistent resolution activity.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 133 | 147 | -14 |

📉 **Backlog Shrinking:** 14 more issues closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

Recent activity shows balanced throughput with good progress on enhancements.

| Metric | Value |
|--------|-------|
| Issues Opened | 61 |
| Issues Closed | 63 |
| Bugs Closed | 11 |
| Enhancements Completed | 39 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in test suite |
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Add ability for a clean worker shutdown that waits for a session completion |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity execution |
| 4 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | 6 | Serialization context for codecs and converters |
| 5 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | 3 | Allow custom trace attribute keys |
| 6 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 7 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2 | Allow including local activity input into the history |
| 8 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | 1 | MutableSideEffect in test framework ignores cmp function |
| 9 | [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 0 | Updated context functions to match context library |
| 10 | [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | 0 | Consider migrating away from golang/mock |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 32 | Add ability for a clean worker shutdown that waits for a session completion |
| 2 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 17 | Use interceptor logger for all logs related to a workflow or activity execution |
| 3 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 15 | Refactor SDK to avoid type aliasing |
| 4 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 14 | Serialization context for codecs and converters |
| 5 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 11 | Allow custom trace attribute keys |
| 6 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 10 | Allow including local activity input into the history |
| 7 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 9 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 8 | [#642](https://github.com/temporalio/sdk-go/issues/642) | 9 | Inconsistent behavior when asserting invocations |
| 9 | [#475](https://github.com/temporalio/sdk-go/issues/475) | 9 | Panic when querying during Workflow failure + retry |
| 10 | [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 8 | Add TaskQueue to TracerStartSpanOptions |

---

## Issue Analysis by Category

### Security Vulnerabilities (1 issue)

A dependency security vulnerability requires immediate attention.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | 0 | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities (highest severity: 7.5) |

**Recommendation:** Update or replace the tally dependency to address the known vulnerabilities.

### Testing Framework Bugs (25 issues)

The test framework has the highest concentration of bugs, impacting developer experience and CI reliability.

#### High Priority - Panics & Crashes

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Panic in temporal unit test framework |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Cancellation of Parent Workflow with Child Workflow Panics |
| [#475](https://github.com/temporalio/sdk-go/issues/475) | 0 | Panic when querying during Workflow failure + retry |

#### Medium Priority - Incorrect Behavior

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | MutableSideEffect in test framework ignores cmp function |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activity times out in test environment with child workflow |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | 1 | Inconsistent behavior when asserting invocations |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | TestWorkflowEnvironment should surface errors and respect failure signal |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | 1 | Cannot register mock activity with string name on test workflow environment |
| [#1496](https://github.com/temporalio/sdk-go/issues/1496) | 0 | Workflow outcome is inconsistent between test env and real server |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | Joining errors causes TestWorkflowEnvironment to hide panics and pass test |

#### Lower Priority - Edge Cases

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Activity Alias Collision in Test Environment When Using Anonymous Functions |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | 0 | Starting a child workflow in tests leaks goroutines |
| [#2005](https://github.com/temporalio/sdk-go/issues/2005) | 0 | OnWorkflow test mocker doesn't propagate context headers |
| [#1961](https://github.com/temporalio/sdk-go/issues/1961) | 0 | Strange error when writing tests which does not occur in real temporal |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | SetOnChildWorkflowCompletedListener doesn't work as expected |
| [#1468](https://github.com/temporalio/sdk-go/issues/1468) | 0 | Interceptors are skipped for mocked activities |
| [#1427](https://github.com/temporalio/sdk-go/issues/1427) | 0 | TestWorkflowEnvironment workflow Context does not block when canceled |

### Workflow Execution Bugs (9 issues)

Bugs affecting core workflow execution and determinism.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1906](https://github.com/temporalio/sdk-go/issues/1906) | 1 | workflowcheck crash (index out of range) |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | Non-deterministic workflow code can send incorrect WFT completion without task failure |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | 0 | Signal sent to Selector can be lost if Default path blocks |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | 0 | Lost messages from workflow.NewChannel(ctx) |
| [#1341](https://github.com/temporalio/sdk-go/issues/1341) | 0 | WorkflowChecker should flag anonymous functions in local activities |
| [#1227](https://github.com/temporalio/sdk-go/issues/1227) | 0 | Worker versioning + workflow session |
| [#1240](https://github.com/temporalio/sdk-go/issues/1240) | 0 | Data race after deadlock detector fired |

### Observability Bugs (4 issues)

Issues affecting metrics and logging in production environments.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 0 | OpenTelemetry incorrect metric type for Counter |
| [#2103](https://github.com/temporalio/sdk-go/issues/2103) | 0 | Cosmetic bug in logger |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | 0 | OTel emitted metrics do not match behavior described in the docs |
| [#873](https://github.com/temporalio/sdk-go/issues/873) | 0 | Ensure slots available metric is updated on worker stop |

### Child Workflow Bugs (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | Canceling a context with multiple child contexts can be non-deterministic |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | SetOnChildWorkflowCompletedListener doesn't work as expected |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | 0 | TERMINATE_IF_RUNNING doesn't work for duplicate child workflows |

### Serialization/Codec Bugs (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1668](https://github.com/temporalio/sdk-go/issues/1668) | 0 | When deserializing typed search attributes, invalid values should be ignored |
| [#1349](https://github.com/temporalio/sdk-go/issues/1349) | 0 | WorkflowRun.Get does not use a context aware data converter |
| [#933](https://github.com/temporalio/sdk-go/issues/933) | 0 | No problem indicators on failed workflow input deserialization during replay |

### Activity Bugs (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | 0 | Batched heartbeat got canceled due to caller context cancellation |
| [#1037](https://github.com/temporalio/sdk-go/issues/1037) | 0 | Calling a value receiver method with a pointer type causes a panic when registering activity |
| [#909](https://github.com/temporalio/sdk-go/issues/909) | 0 | Fatal poll error on worker start isn't stopping activity poller |

---

## Enhancement Requests (89 issues)

### Session Management (6 issues)

Sessions represent the highest user demand with the top-upvoted issue in the repository.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Add ability for a clean worker shutdown that waits for a session completion |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Add ability to support passing sessions from parent to child workflow |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Add ability to keep session open in case of a worker restart |
| [#505](https://github.com/temporalio/sdk-go/issues/505) | 0 | Non-retryable errors in sessions |
| [#194](https://github.com/temporalio/sdk-go/issues/194) | 0 | Support seamless cleanup during session cancellation |

### Observability & Tracing (14 issues)

Strong demand for improved OpenTelemetry integration and custom tracing capabilities.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all logs related to a workflow or activity execution |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Add metric for time passed from the activity scheduling to the last attempt |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add TaskQueue to TracerStartSpanOptions |
| [#2154](https://github.com/temporalio/sdk-go/issues/2154) | 0 | Update datadog go integration to v2 |
| [#2097](https://github.com/temporalio/sdk-go/issues/2097) | 0 | Add Context to MetricsHandler for Exemplar Support |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | ContinueAsNew should create new root span |
| [#1445](https://github.com/temporalio/sdk-go/issues/1445) | 0 | OTel metric handler improvements |
| [#1334](https://github.com/temporalio/sdk-go/issues/1334) | 0 | Allow opting out of tracer span creation on schedule create |

### Testing Framework Enhancements (23 issues)

Improvements to make testing easier and more reliable.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Consider migrating away from golang/mock |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | Remove mocks package |
| [#2065](https://github.com/temporalio/sdk-go/issues/2065) | 1 | NewTestActivityEnvironment no longer implements worker.ActivityRegistry |
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | SetStartTime for activity test env |
| [#1397](https://github.com/temporalio/sdk-go/issues/1397) | 1 | Add Support for ReplayWorkflowHistoryOptions to ReplayWorkflowHistoryFromJSONFile |
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | AwaitWithTimeout does not cancel its timer when condition is satisfied |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | 1 | Allow user to override default maximum activity attempts in test suite |
| [#497](https://github.com/temporalio/sdk-go/issues/497) | 1 | Query after signal works in SDK, but not in Test Suite |
| [#458](https://github.com/temporalio/sdk-go/issues/458) | 1 | TestWorkflowEnvironment: Fail RegisterDelayedCallback after ExecuteWorkflow |
| [#439](https://github.com/temporalio/sdk-go/issues/439) | 1 | Include a way to perform assertions on the workflow signal channel in the testing env |

### Serialization & Codecs (9 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | Serialization context for codecs and converters |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | 1 | Support ContextAware for failure converters |
| [#2123](https://github.com/temporalio/sdk-go/issues/2123) | 0 | Proxy: allow payload visitor to run in parallel |
| [#1132](https://github.com/temporalio/sdk-go/issues/1132) | 0 | Add support for visiting all payloads at once in proxy visitor interceptor |
| [#1035](https://github.com/temporalio/sdk-go/issues/1035) | 0 | Workflowcheck should check that serialized objects do not have unexported fields |
| [#842](https://github.com/temporalio/sdk-go/issues/842) | 0 | Support custom object processing in codec gRPC interceptor |

### Activities & Local Activities (12 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | Allow including local activity input into the history |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments |
| [#266](https://github.com/temporalio/sdk-go/issues/266) | 1 | Expose activity start and completion information to the workflow code |
| [#101](https://github.com/temporalio/sdk-go/issues/101) | 1 | Add ability to pass Channel as a parameter to Child workflow and activity |
| [#1759](https://github.com/temporalio/sdk-go/issues/1759) | 1 | Change activity error to warn, or allow it to be configurable |
| [#1300](https://github.com/temporalio/sdk-go/issues/1300) | 0 | Better Task Failures when passing incorrect options to Execute[Local]Activity |
| [#1157](https://github.com/temporalio/sdk-go/issues/1157) | 0 | Support LocalActivityOptions.WaitForCancellation |
| [#238](https://github.com/temporalio/sdk-go/issues/238) | 0 | RecordActivityHeartbeat signature should be modified to return an error |

### Worker Lifecycle (12 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#70](https://github.com/temporalio/sdk-go/issues/70) | 1 | Refactor NewWorker and remove downcast |
| [#2131](https://github.com/temporalio/sdk-go/issues/2131) | 0 | Configurable minRPCTimeout for activity worker |
| [#2094](https://github.com/temporalio/sdk-go/issues/2094) | 0 | Worker Heartbeating |
| [#1197](https://github.com/temporalio/sdk-go/issues/1197) | 0 | Drain polled tasks on shutdown |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | 0 | Add support for a graceful shutdown of go workers |
| [#955](https://github.com/temporalio/sdk-go/issues/955) | 0 | Suppress "worker stopping" polling errors |

### API Design & SDK Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to avoid type aliasing |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Updated context functions to match context library |
| [#1954](https://github.com/temporalio/sdk-go/issues/1954) | 1 | Ability to get original Logger from activity.GetLogger(ctx) / workflow.GetLogger(ctx) |
| [#1351](https://github.com/temporalio/sdk-go/issues/1351) | 1 | Support interceptor on WorkflowRun.Get |
| [#1796](https://github.com/temporalio/sdk-go/issues/1796) | 0 | Add Patched() and DeprecatePatch() APIs |
| [#1693](https://github.com/temporalio/sdk-go/issues/1693) | 0 | Provide details and actionable info about Non Deterministic Errors |

---

## Housekeeping Recommendations

### Stale Issues (105 open issues with no activity >12 months)

64% of open issues have had no activity for over a year. Top stale issues by upvotes:

| Issue | 👍 | Last Updated | Title |
|-------|-----|--------------|-------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 2020-07-07 | Add ability for a clean worker shutdown that waits for a session completion |
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 2023-02-02 | Use interceptor logger for all logs related to a workflow or activity execution |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 2024-08-08 | Updated context functions to match context library |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | 2024-03-04 | Consider migrating away from golang/mock |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | 2024-03-04 | Canceling a context with multiple child contexts can be non-deterministic |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | 2024-12-16 | Add ability to support passing sessions from parent to child workflow |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | 2022-04-07 | Add metric for time passed from the activity scheduling to the last attempt |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | 2021-01-26 | Cancellation of Parent Workflow with Child Workflow Panics |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | 2024-03-15 | Activity times out in test environment with child workflow |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | 2024-12-17 | Remove mocks package |

**Recommendations:**
- **Keep open:** High-upvoted issues (#181, #829, #89) represent valid long-term enhancements
- **Close candidates:** Issues from 2020-2021 that may no longer be relevant
- **Needs triage:** Testing bugs that may have been fixed but never closed

### Duplicate Candidates

Several testing-related issues may overlap:
- #1410 and #61 both discuss removing/migrating the mocks package
- Multiple test environment timeout issues (#866, #167, #1100) may share root causes

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix security vulnerability in uber-go/tally dependency (#899)
- Address test framework panics (#2107, #351, #475)
- Fix goroutine leaks in test environment (#2090)

### Phase 2: Developer Experience (Short-term)
- Improve test framework reliability (assertion consistency, timeout enforcement)
- Fix OpenTelemetry metric issues (#2140, #1929)
- Implement context propagation fixes for test mocking (#2005)

### Phase 3: Feature Expansion (Medium-term)
- Session management improvements (#181 - 16 upvotes, #884, #937)
- Enhanced observability (#829 - 6 upvotes, #1149)
- Serialization context support (#1352 - 4 upvotes)
- Local activity history inclusion (#313 - 4 upvotes)

### Phase 4: Maintenance (Ongoing)
- Triage and close stale issues (105 candidates)
- SDK type aliasing refactor (#89 - 7 upvotes)
- Mock package deprecation/migration (#1410, #61)
- Dependency updates and security patches
