# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** Jan 13, 2026
**Total Open Issues:** 163
**Total Closed Issues:** 661
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) . [TypeScript](typescript.md) . [Python](python.md) . [.NET](dotnet.md) . [PHP](php.md) . [Ruby](ruby.md) . [Server](server.md) . [Features](features.md)

---

## Executive Summary

The Go SDK maintains a healthy 80% resolution rate with a shrinking backlog (15 more issues closed than opened in the last 12 months). However, 63% of open issues are stale (>12 months old), indicating a need for triage. The test framework remains the most problematic area with 127 related issues, while the highest-upvoted issues focus on worker lifecycle management and observability improvements. One security vulnerability in the tally metrics dependency requires attention.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 61 | High - Testing framework bugs dominate; several cause panics |
| Enhancements | 87 | Medium - Strong user demand for worker shutdown and observability features |
| Security Vulnerabilities | 1 | Critical - CVE-2019-0210/0205 in tally dependency (CVSS 7.5) |
| Stale Issues | 102 | Medium - 63% of open issues need triage |
| Test Framework Issues | 127 | High - Largest problem area across all categories |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 91 |
| Total Comments | 216 |
| Issues with Upvotes | 40 (25%) |
| Issues with Comments | 88 (54%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (661/824) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Average Time to Close | 126 days (calendar) / 91 days (business) |
| Resolved within 30 days | 59% |
| Resolved within 90 days | 78% |

### Recommended Actions

1. **Immediate:** Address security vulnerability in tally dependency ([#899](https://github.com/temporalio/sdk-go/issues/899)) - upgrade to Apache Thrift 0.13.0
2. **Short-term:** Fix test framework panics and inconsistencies ([#2107](https://github.com/temporalio/sdk-go/issues/2107), [#2109](https://github.com/temporalio/sdk-go/issues/2109), [#2090](https://github.com/temporalio/sdk-go/issues/2090))
3. **Medium-term:** Implement session-aware worker shutdown ([#181](https://github.com/temporalio/sdk-go/issues/181) - 16 upvotes)
4. **Long-term:** Improve observability with interceptor-aware logging ([#829](https://github.com/temporalio/sdk-go/issues/829) - 6 upvotes)
5. **Housekeeping:** Triage 102 stale issues - many date back to 2020-2021

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Go SDK shows healthy maintenance with a shrinking backlog.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 126 | 141 | -15 |

Backlog Shrinking: 15 more issues closed than opened, indicating effective issue management despite the high stale count.

### Last 6 Months: Detailed Analysis

Recent activity shows continued stability with 52% of issues resolved within 30 days.

| Metric | Value |
|--------|-------|
| Issues Opened | 57 |
| Issues Closed | 62 |
| Net Change | -5 |
| Bugs Closed | 12 |
| Enhancements Completed | 37 |
| Resolution within 30 days | 52% |
| Resolution within 90 days | 66% |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in test suite |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Add ability for a clean worker shutdown that waits for session completion |
| 2 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Use interceptor logger for all logs related to workflow/activity execution |
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
| 1 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 32 | Session-aware worker shutdown |
| 2 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 17 | Interceptor-aware logging |
| 3 | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 15 | Heartbeat timeout in tests |
| 4 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 15 | Type aliasing refactor |
| 5 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 14 | Serialization context |

---

## Issue Analysis by Category

### Security Vulnerabilities (1 open issue)

**Critical Priority** - One dependency vulnerability requires immediate attention.

| Issue | Severity | CVE | Description |
|-------|----------|-----|-------------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | High (CVSS 7.5) | CVE-2019-0210, CVE-2019-0205 | Vulnerable tally/v4 dependency (Apache Thrift) |

**Details:** The `github.com/uber-go/tally/v4-v4.1.1` dependency in `/contrib/tally/go.mod` contains vulnerabilities in Apache Thrift that can cause server panics or infinite loops with malformed input. Fix is available by upgrading to Thrift 0.13.0.

**Recommendation:** Update the tally contrib module to use a patched version of the dependency.

---

### Bugs (61 open issues)

Bugs are concentrated in the test framework area, with many causing panics or unexpected behavior.

#### High Priority Bugs

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing - affects test reliability |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | MutableSideEffect in test framework ignores cmp function |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | Canceling context with multiple child contexts can be non-deterministic |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | Cancellation of parent workflow with child workflow in tests |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | Activity times out in test environment with child workflow |

#### Test Framework Bugs (Recent)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#2141](https://github.com/temporalio/sdk-go/issues/2141) | 0 | Activity alias collision in test environment with anonymous functions |
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | 0 | OpenTelemetry incorrect metric type for Counter |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | Panic in temporal unit test framework |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | 0 | Starting child workflow in tests leaks goroutines |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | 0 | Lost messages from workflow.NewChannel(ctx) |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | Joining errors causes TestWorkflowEnvironment to hide panics |

#### Other Notable Bugs

| Issue | Area | Description |
|-------|------|-------------|
| [#475](https://github.com/temporalio/sdk-go/issues/475) | Query handling | Panic when querying during workflow failure + retry (9 comments) |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | Test assertions | Inconsistent behavior when asserting invocations (7 comments) |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | Selectors | Signal sent to Selector can be lost if Default path blocks |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | Determinism | Non-deterministic workflow code can send incorrect WFT completion |

---

## API & Component Hotspots

Based on semantic analysis, these areas have the highest concentration of issues:

| Area | Issue Count | Notable Issues |
|------|-------------|----------------|
| Test Framework | 127 | Activity mocking, timeout enforcement, goroutine leaks |
| Workflow Replay | 30 | Determinism issues, history processing |
| Error Handling | 22 | Error wrapping, failure converters |
| Metrics | 18 | OpenTelemetry integration, counter types |
| Activity Heartbeat | 15 | Timeout handling, RPC configuration |
| Logging | 15 | Interceptor integration, context propagation |
| Workflow Execution | 15 | Lifecycle management, task processing |
| Worker Lifecycle | 13 | Shutdown handling, session management |
| Local Activities | 12 | Serialization, timeouts, retry behavior |

---

## Enhancement Requests (87 issues)

### Worker Lifecycle & Sessions

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Session-aware clean worker shutdown |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | Keep session open during worker restart (7 comments) |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | Pass sessions from parent to child workflows |

### Observability & Tracing

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | Use interceptor logger for all SDK logs |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | Allow custom trace attribute keys |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | Add TaskQueue to TracerStartSpanOptions (8 comments) |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | Metric for activity scheduling to start time |

### Data Conversion & Serialization

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | Serialization context for codecs and converters |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | Include local activity input in history |

### API Design & Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | Refactor SDK to avoid type aliasing |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | Updated context functions to match context library |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | Migrate away from golang/mock |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | Support activity functions with variadic arguments (6 comments) |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | SetStartTime for activity test env |
| [#2065](https://github.com/temporalio/sdk-go/issues/2065) | 1 | NewTestActivityEnvironment should implement worker.ActivityRegistry |

### Nexus & New Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2124](https://github.com/temporalio/sdk-go/issues/2124) | 0 | Support non-workflow activities |
| [#2123](https://github.com/temporalio/sdk-go/issues/2123) | 0 | Allow payload visitor to run in parallel |
| [#2085](https://github.com/temporalio/sdk-go/issues/2085) | 0 | Add firstExecutionRunId support for cancel/terminate |

---

## Housekeeping Recommendations

### Stale Issues (102 open issues with no activity >12 months)

63% of open issues are stale. The following require triage:

**Close Candidates (likely outdated):**
- [#61](https://github.com/temporalio/sdk-go/issues/61) - Remove mocks package (5+ years old)
- [#351](https://github.com/temporalio/sdk-go/issues/351) - Test cancellation behavior (4+ years old)
- [#167](https://github.com/temporalio/sdk-go/issues/167) - Activity timeout in tests (5+ years old)

**Needs Maintainer Decision:**
- [#89](https://github.com/temporalio/sdk-go/issues/89) - Type aliasing refactor (7 upvotes, 5+ years old)
- [#181](https://github.com/temporalio/sdk-go/issues/181) - Session-aware shutdown (16 upvotes, 5+ years old)

**Keep Open (valid but not prioritized):**
- [#829](https://github.com/temporalio/sdk-go/issues/829) - Interceptor logging (6 upvotes, active discussion)
- [#1282](https://github.com/temporalio/sdk-go/issues/1282) - Heartbeat timeout in tests (5 upvotes)

### Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 2 | 1% |
| 1-3 months | 11 | 7% |
| 3-6 months | 6 | 4% |
| 6-12 months | 15 | 9% |
| 1-2 years | 30 | 18% |
| 2-3 years | 29 | 18% |
| 3+ years | 70 | 43% |

### Duplicate Candidates

- [#351](https://github.com/temporalio/sdk-go/issues/351) and [#167](https://github.com/temporalio/sdk-go/issues/167) - Both relate to child workflow behavior in test environment
- [#61](https://github.com/temporalio/sdk-go/issues/61) and [#89](https://github.com/temporalio/sdk-go/issues/89) - Both address type aliasing concerns

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- [ ] Fix security vulnerability [#899](https://github.com/temporalio/sdk-go/issues/899) - upgrade tally dependency
- [ ] Address test framework panics ([#2107](https://github.com/temporalio/sdk-go/issues/2107), [#475](https://github.com/temporalio/sdk-go/issues/475))
- [ ] Fix goroutine leaks in tests ([#2090](https://github.com/temporalio/sdk-go/issues/2090))

### Phase 2: Developer Experience (Short-term)
- [ ] Fix test framework timeout enforcement ([#866](https://github.com/temporalio/sdk-go/issues/866), [#1282](https://github.com/temporalio/sdk-go/issues/1282))
- [ ] Resolve activity alias collision ([#2141](https://github.com/temporalio/sdk-go/issues/2141))
- [ ] Fix OpenTelemetry Counter type ([#2140](https://github.com/temporalio/sdk-go/issues/2140))

### Phase 3: Feature Expansion (Medium-term)
- [ ] Implement session-aware worker shutdown ([#181](https://github.com/temporalio/sdk-go/issues/181) - 16 upvotes)
- [ ] Add interceptor-aware logging ([#829](https://github.com/temporalio/sdk-go/issues/829) - 6 upvotes)
- [ ] Serialization context for codecs ([#1352](https://github.com/temporalio/sdk-go/issues/1352) - 4 upvotes)

### Phase 4: Maintenance (Ongoing)
- [ ] Triage 102 stale issues - close obsolete, tag others appropriately
- [ ] Evaluate type aliasing refactor ([#89](https://github.com/temporalio/sdk-go/issues/89))
- [ ] Complete migration from golang/mock ([#1410](https://github.com/temporalio/sdk-go/issues/1410))
