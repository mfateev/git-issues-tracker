# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 163
**Total Closed Issues:** 661
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

<< [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) 

**Other SDKs:** [Java](java.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The Go SDK maintains a healthy 80% resolution rate with 661 of 824 total issues closed. The backlog is shrinking with 15 more issues closed than opened over the last 12 months. However, 62% of open issues (101) are stale with no activity for over a year, indicating a need for backlog grooming. The most upvoted open issue ([#181](https://github.com/temporalio/sdk-go/issues/181) with 16 upvotes) requesting graceful worker shutdown with session completion has been open since 2020, highlighting long-standing community requests that deserve attention.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 61 | High - Core functionality and reliability |
| Enhancements | 87 | Medium - Developer experience improvements |
| Security Vulnerabilities | 1 | Medium - Dependency vulnerability in contrib module |
| Stale Issues (>1 year) | 101 | Review for closure or prioritization |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 91 |
| Total Comments | 215 |
| Issues with Upvotes | 40 (25%) |
| Issues with Comments | 87 (53%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (661/824) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 59% |
| Resolved within 90 days | 78% |

### Recommended Actions

1. **Immediate:** Address test environment bugs blocking developer testing ([#2141](https://github.com/temporalio/sdk-go/issues/2141), [#2140](https://github.com/temporalio/sdk-go/issues/2140))
2. **Short-term:** Fix critical test environment timeout issues ([#1282](https://github.com/temporalio/sdk-go/issues/1282), [#866](https://github.com/temporalio/sdk-go/issues/866))
3. **Medium-term:** Implement graceful shutdown improvements ([#181](https://github.com/temporalio/sdk-go/issues/181)) - highest user demand
4. **Long-term:** Enhance observability and tracing features ([#829](https://github.com/temporalio/sdk-go/issues/829), [#1149](https://github.com/temporalio/sdk-go/issues/1149))
5. **Housekeeping:** Triage 101 stale issues - close obsolete, prioritize valid requests

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 126 | 141 | -15 |

**Backlog Shrinking:** 15 more issues closed than opened in the last 12 months, indicating healthy maintenance velocity. The team is keeping pace with incoming issues while making progress on the backlog.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 59 |
| Issues Closed | 63 |
| Net Change | -4 |
| Bugs Closed | 13 |
| Enhancements Closed | 37 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in test suite |

The resolution of [#916](https://github.com/temporalio/sdk-go/issues/916) (the most upvoted issue overall at 21 upvotes) demonstrates responsiveness to high-demand features. This pattern of prioritizing high-upvote issues should be extended to other popular requests.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Add ability for a clean worker shutdown that waits for session completion |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity |
| 4 | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | 5 | Heartbeat timeout not raised while testing |
| 5 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | 6 | Serialization context for codecs and converters |
| 6 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | 3 | Allow custom trace attribute keys |
| 7 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 8 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2 | Allow including local activity input into the history |
| 9 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | 1 | MutableSideEffect in test framework ignores cmp function |
| 10 | [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 0 | Updated context functions to match context library |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 32 | Clean worker shutdown with session wait |
| 2 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 17 | Interceptor logger for workflow/activity logs |
| 3 | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 15 | Heartbeat timeout not raised in testing |
| 4 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 15 | Refactor SDK to avoid type aliasing |
| 5 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 14 | Serialization context for codecs |
| 6 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 11 | Allow custom trace attribute keys |
| 7 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 10 | Local activity input in history |
| 8 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 9 | TestWorkflowEnvironment timeout enforcement |
| 9 | [#642](https://github.com/temporalio/sdk-go/issues/642) | 9 | Inconsistent behavior when asserting invocations |
| 10 | [#475](https://github.com/temporalio/sdk-go/issues/475) | 9 | Panic when querying during Workflow failure + retry |

---

## Issue Analysis by Category

### Security Vulnerability (1 issue)

**Severity:** High (CVSS 7.5) - Dependency vulnerability in contrib/tally module

| Issue | Severity | Description |
|-------|----------|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | High (7.5) | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities (CVE-2019-0210, CVE-2019-0205) |

**Details:** The vulnerability is in the Apache Thrift dependency used by uber-go/tally. CVE-2019-0210 and CVE-2019-0205 can cause denial-of-service via specially crafted input data when using TJSONProtocol or TSimpleJSONProtocol.

**Recommendation:** Update or replace the tally dependency to resolve the Apache Thrift vulnerabilities. Note that this is in the contrib module, so users not using tally metrics are unaffected.

---

### Test Environment Bugs (High Priority - 20+ issues)

The test environment is critical for developer experience. Multiple bugs are blocking proper testing workflows and creating friction for SDK adopters.

#### Test Framework Core Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing - timeouts are hardcoded to 10 min |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | MutableSideEffect in test framework ignores cmp function |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Cancellation of Parent Workflow with Child Workflow panics in tests |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activity times out in test environment with child workflow |
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Activity Alias Collision in Test Environment When Using Anonymous Functions (new) |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Panic in temporal unit test framework |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | 0 | Starting a child workflow in tests leaks goroutines |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | Joining errors causes TestWorkflowEnvironment to hide panics |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | TestWorkflowEnvironment should surface errors and respect failure signal |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | 1 | Cannot register mock activity with string name on test workflow environment |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | 1 | Inconsistent behavior when asserting invocations - testify mocking limitation |

#### Analysis of Key Test Issues

**[#1282](https://github.com/temporalio/sdk-go/issues/1282) - Heartbeat Timeout Not Raised:** Activity timeouts are hardcoded to 600 seconds (10 minutes) in the test environment, with HeartbeatTimeout being ignored entirely. Users expecting their configured timeouts to be enforced in tests are surprised when tests pass despite improper heartbeat strategies. Workaround: Use `testsuite.StartDevServer` for real-time testing.

**[#866](https://github.com/temporalio/sdk-go/issues/866) - WorkflowExecutionTimeout Not Enforced:** Child workflows in unit tests are not timing out as expected. Only WorkflowRunTimeout is partially enforced. This has been open for over 3 years with recent confirmation the issue persists.

**[#642](https://github.com/temporalio/sdk-go/issues/642) - Mock Assertion Inconsistencies:** Invocation count assertions like `Once()` behave inconsistently - calling more than expected causes a panic (but test may still pass if workflow error isn't checked), while calling fewer fails the assertion. This stems from testify/mock library behavior. Recommendation: Avoid invocation count assertions and manually count if needed.

**Recommendation:** Create a dedicated test environment improvement sprint to address these blocking issues:
1. Fix timeout enforcement ([#866](https://github.com/temporalio/sdk-go/issues/866), [#1282](https://github.com/temporalio/sdk-go/issues/1282))
2. Fix child workflow interactions ([#351](https://github.com/temporalio/sdk-go/issues/351), [#167](https://github.com/temporalio/sdk-go/issues/167), [#2090](https://github.com/temporalio/sdk-go/issues/2090))
3. Address mock/assertion inconsistencies ([#642](https://github.com/temporalio/sdk-go/issues/642), [#2109](https://github.com/temporalio/sdk-go/issues/2109))

---

### Core SDK Bugs (61 total)

#### Non-Determinism / Replay Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | Canceling a context with multiple child contexts can be non-deterministic |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | Non-deterministic workflow code can send incorrect WFT completion |
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | AwaitWithTimeout does not cancel its timer when condition is satisfied |

**[#1208](https://github.com/temporalio/sdk-go/issues/1208) - Context Cancellation Non-Determinism:** When a parent context cancels its children, it loops through a map. Since Go map iteration order is non-deterministic, child contexts are canceled in an unpredictable order. This can affect selector behavior and cause replay issues. The Cadence client has fixed this issue.

**[#986](https://github.com/temporalio/sdk-go/issues/986) - AwaitWithTimeout Timer Not Cancelled:** When `AwaitWithTimeout` is satisfied before the timeout, the timer is not cancelled, causing an erroneous workflow task when the timer eventually fires. This wakes up otherwise idle workflows unnecessarily, impacting LRU cache behavior.

#### Worker/Activity Bugs

| Issue | Description |
|-------|-------------|
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | Batched heartbeat got canceled due to caller context cancellation |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | TERMINATE_IF_RUNNING doesn't work for duplicate child workflows |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | Signal sent to Selector can be lost if Default path blocks |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | Lost messages from workflow.NewChannel(ctx) |

#### Observability Bugs (Recent)

| Issue | Description |
|-------|-------------|
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | OpenTelemetry incorrect metric type for Counter (new) |
| [#2103](https://github.com/temporalio/sdk-go/issues/2103) | Cosmetic bug in logger |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | OTel emitted metrics do not match behavior described in docs |

#### Server Interaction Bugs

| Issue | Description |
|-------|-------------|
| [#475](https://github.com/temporalio/sdk-go/issues/475) | Panic when querying during Workflow failure + retry |

**[#475](https://github.com/temporalio/sdk-go/issues/475) - Query During Retry Panic:** When a query is sent to a workflow that is in retry/restart state, the worker can panic with "Attempt to generate a command before processing WorkflowTaskStarted event". This is primarily a server issue (tracked in temporal/temporal#2300) but affects Go SDK users.

---

## Enhancement Requests (87 issues)

### Worker Lifecycle & Shutdown (Highest Demand)

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Clean worker shutdown that waits for session completion |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Keep session open in case of worker restart |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | 0 | Graceful shutdown where all activities are finished before worker returns |

**[#181](https://github.com/temporalio/sdk-go/issues/181) - Clean Worker Shutdown with Session Wait:** This is the most upvoted open issue (16 upvotes) and has been open since 2020. Users need the ability to wait for an entire session (multiple activities on the same host) to complete during worker.Close(), not just individual activities. This is critical for deployments where session state is cached on disk and survives worker restarts.

**[#937](https://github.com/temporalio/sdk-go/issues/937) - Durable Sessions Across Worker Restarts:** Related to [#181](https://github.com/temporalio/sdk-go/issues/181), users want sessions to survive worker restarts when state is persisted on disk. Currently, session failure on worker restart forces workflow retry even when unnecessary. Proposed solution: Support a durable worker ID and session reestablishment timeout.

**Recommendation:** These issues represent a significant gap in the SDK. A comprehensive graceful shutdown and session management improvement would address multiple related issues and satisfy substantial user demand.

### Observability & Tracing

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all logs related to a workflow or activity |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add TaskQueue to TracerStartSpanOptions |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Add metric for time passed from activity scheduling to last attempt |

**[#829](https://github.com/temporalio/sdk-go/issues/829) - Interceptor Logger for All SDK Logs:** Users want the logger returned by the interceptor chain to be used for all SDK-level logs (not just user code), enabling domain-specific log filtering, correlation with traces, and better incident scope assessment. A `ContextAwareLogger` interface has been proposed.

**[#1149](https://github.com/temporalio/sdk-go/issues/1149) - Custom Trace Attribute Keys:** The hardcoded trace attribute keys (`temporalWorkflowID`, `temporalRunID`, `temporalActivityID`) cannot be customized without implementing a full custom interceptor. Users request the ability to override these via TracerOptions.

**[#1330](https://github.com/temporalio/sdk-go/issues/1330) - TaskQueue in Trace Spans:** Adding TaskQueue to TracerStartSpanOptions would enable users to infer cross-service interactions in distributed tracing, particularly for architectures where different workers serve different task queues.

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | Serialization context for codecs and converters |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | 1 | Support ContextAware for failure converters |

**[#1352](https://github.com/temporalio/sdk-go/issues/1352) - Serialization Context for Codecs:** Context-aware data converters need access to the ID of outbound activities and child workflows during serialization. This is essential for encryption schemes that use workflow/activity IDs as associated data. Java SDK already supports this. The proposed solution is to pass IDs through the context before data converter invocation.

### Testing Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | SetStartTime for activity test env |
| [#1167](https://github.com/temporalio/sdk-go/issues/1167) | 0 | Allow setting activity timeouts in TestActivityEnvironment |
| [#1395](https://github.com/temporalio/sdk-go/issues/1395) | 0 | Make TestWorkflowEnvironment return errors with stack traces |

### SDK Architecture

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to avoid type aliasing |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Consider migrating away from golang/mock |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Updated context functions to match context library |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | Allow including local activity input into the history |

**[#89](https://github.com/temporalio/sdk-go/issues/89) - Refactor to Avoid Type Aliasing:** The current SDK uses type aliasing to separate internal implementation from public APIs, but this causes issues with Go tooling. The proposal is to create public copies of all interfaces and structures, casting to/from internal types.

**[#1410](https://github.com/temporalio/sdk-go/issues/1410) - Migrate from golang/mock:** The github.com/golang/mock project has been deprecated. The SDK should migrate to the maintained fork go.uber.org/mock. This is a search-and-replace change.

### API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Support passing sessions from parent to child workflow |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments |

**[#1114](https://github.com/temporalio/sdk-go/issues/1114) - Variadic Activity Arguments:** Activity functions with variadic parameters (like gRPC clients generated by protoc) cannot be directly registered and called from workflows. Users must create wrapper functions. Supporting variadic arguments would simplify integration of third-party APIs as activities.

---

## Housekeeping Recommendations

### Stale Issues (101 open issues with no activity >12 months)

Top stale issues by upvotes requiring triage:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 2020-07-07 | Clean worker shutdown with session wait |
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 2023-02-02 | Interceptor logger for workflow/activity |
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | 2023-11-06 | Heartbeat timeout not raised in testing |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | 2024-12-16 | Session passing to child workflows |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | 2022-04-07 | Add activity scheduling-to-start metric |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | 2021-01-26 | Parent/Child workflow cancellation in testing |

**Close Candidates:**
- Issues with 0 upvotes, 0 comments, and >3 years old
- Issues superseded by newer implementations
- Issues where the requested feature already exists

**Needs Triage:**
- High-upvote stale issues ([#181](https://github.com/temporalio/sdk-go/issues/181), [#829](https://github.com/temporalio/sdk-go/issues/829)) - confirm still relevant and prioritize
- Issues from internal Temporal team members without recent activity
- Issues marked `potential-bug` without reproduction steps

**Keep Open:**
- Security issues regardless of age
- Issues with significant upvotes indicating continued user demand
- Architectural improvements that require significant planning ([#89](https://github.com/temporalio/sdk-go/issues/89))

### Duplicate Candidates

Potential duplicates to consolidate:

**Graceful Shutdown Cluster:**
- [#181](https://github.com/temporalio/sdk-go/issues/181), [#937](https://github.com/temporalio/sdk-go/issues/937), [#1086](https://github.com/temporalio/sdk-go/issues/1086) - All relate to graceful worker shutdown with session/activity completion

**Test Environment Timeout Cluster:**
- [#866](https://github.com/temporalio/sdk-go/issues/866), [#1282](https://github.com/temporalio/sdk-go/issues/1282), [#1167](https://github.com/temporalio/sdk-go/issues/1167) - All relate to timeouts not being properly enforced/configurable in tests

**Timer Cancellation Cluster:**
- [#986](https://github.com/temporalio/sdk-go/issues/986), [#1125](https://github.com/temporalio/sdk-go/issues/1125) - Both relate to timers not being cancelled when no longer needed

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- [ ] Fix OpenTelemetry metric type issue ([#2140](https://github.com/temporalio/sdk-go/issues/2140))
- [ ] Fix test environment activity alias collision ([#2141](https://github.com/temporalio/sdk-go/issues/2141))
- [ ] Address test environment panic on joined errors ([#2039](https://github.com/temporalio/sdk-go/issues/2039))

### Phase 2: Developer Experience (Short-term)

- [ ] Fix heartbeat timeout not raised in testing ([#1282](https://github.com/temporalio/sdk-go/issues/1282))
- [ ] Fix TestWorkflowEnvironment timeout enforcement ([#866](https://github.com/temporalio/sdk-go/issues/866))
- [ ] Fix MutableSideEffect cmp function ignored in tests ([#2109](https://github.com/temporalio/sdk-go/issues/2109))
- [ ] Address test environment goroutine leaks ([#2090](https://github.com/temporalio/sdk-go/issues/2090))
- [ ] Fix context cancellation non-determinism ([#1208](https://github.com/temporalio/sdk-go/issues/1208))

### Phase 3: Feature Expansion (Medium-term)

- [ ] Implement clean worker shutdown with session wait ([#181](https://github.com/temporalio/sdk-go/issues/181)) - **highest user demand**
- [ ] Add interceptor logger for workflow/activity logs ([#829](https://github.com/temporalio/sdk-go/issues/829))
- [ ] Implement serialization context for codecs ([#1352](https://github.com/temporalio/sdk-go/issues/1352))
- [ ] Allow custom trace attribute keys ([#1149](https://github.com/temporalio/sdk-go/issues/1149))
- [ ] Cancel AwaitWithTimeout timers when condition satisfied ([#986](https://github.com/temporalio/sdk-go/issues/986))

### Phase 4: Maintenance (Ongoing)

- [ ] Triage 101 stale issues
- [ ] Refactor SDK to avoid type aliasing ([#89](https://github.com/temporalio/sdk-go/issues/89))
- [ ] Migrate away from golang/mock ([#1410](https://github.com/temporalio/sdk-go/issues/1410))
- [ ] Update uber-go/tally dependency in contrib ([#899](https://github.com/temporalio/sdk-go/issues/899))
- [ ] Close obsolete/resolved issues

---

## Quick Reference: Top 15 High-Impact Issues

| # | Issue | Category | Upvotes | Impact |
|---|-------|----------|---------|--------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | Enhancement | **16** | Clean worker shutdown (most upvoted) |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | Enhancement | **7** | Refactor to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | Enhancement | **6** | Interceptor logger for all SDK logs |
| 4 | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | Bug | **5** | Heartbeat timeout not raised in testing |
| 5 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | Enhancement | **4** | Serialization context for codecs |
| 6 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | Enhancement | **4** | Custom trace attribute keys |
| 7 | [#866](https://github.com/temporalio/sdk-go/issues/866) | Bug | **4** | TestWorkflowEnvironment timeout enforcement |
| 8 | [#313](https://github.com/temporalio/sdk-go/issues/313) | Enhancement | **4** | Local activity input in history |
| 9 | [#899](https://github.com/temporalio/sdk-go/issues/899) | Security | 0 | CVE in uber-go/tally dependency (contrib) |
| 10 | [#2141](https://github.com/temporalio/sdk-go/issues/2141) | Bug | 0 | Activity alias collision in tests (new) |
| 11 | [#2140](https://github.com/temporalio/sdk-go/issues/2140) | Bug | 0 | OpenTelemetry incorrect metric type (new) |
| 12 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | Bug | **2** | MutableSideEffect cmp function ignored |
| 13 | [#1208](https://github.com/temporalio/sdk-go/issues/1208) | Bug | **2** | Context cancellation non-determinism |
| 14 | [#1410](https://github.com/temporalio/sdk-go/issues/1410) | Enhancement | **2** | Migrate away from golang/mock |
| 15 | [#937](https://github.com/temporalio/sdk-go/issues/937) | Enhancement | 0 | Keep session open across worker restart |

---

## Key Insights

The Go SDK's top issues cluster around three themes:

1. **Worker lifecycle management** ([#181](https://github.com/temporalio/sdk-go/issues/181), [#937](https://github.com/temporalio/sdk-go/issues/937), [#1086](https://github.com/temporalio/sdk-go/issues/1086)) - Graceful shutdown with sessions is the most requested feature with 16 upvotes on [#181](https://github.com/temporalio/sdk-go/issues/181) alone

2. **Test environment reliability** ([#1282](https://github.com/temporalio/sdk-go/issues/1282), [#866](https://github.com/temporalio/sdk-go/issues/866), [#2109](https://github.com/temporalio/sdk-go/issues/2109)) - Timeout enforcement and behavior parity with production are critical for developer confidence

3. **Observability** ([#829](https://github.com/temporalio/sdk-go/issues/829), [#1149](https://github.com/temporalio/sdk-go/issues/1149), [#1330](https://github.com/temporalio/sdk-go/issues/1330)) - Better logging and tracing integration would improve debugging and incident response

Addressing these clusters would significantly improve developer experience and address the majority of user-reported pain points. The healthy 80% resolution rate and shrinking backlog indicate good maintenance velocity - the focus should shift to these high-value user-requested improvements.
