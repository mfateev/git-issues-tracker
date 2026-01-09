# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 163
**Total Closed Issues:** 2
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md) - [Full Issue Data](../repos/temporalio-sdk-go/issues.md)

**Other SDKs:** [Java](java.md) - [TypeScript](typescript.md) - [Python](python.md) - [.NET](dotnet.md) - [PHP](php.md) - [Ruby](ruby.md) - [Server](server.md) - [Features](features.md)

---

## Executive Summary

The Go SDK has 163 open issues with an extremely low resolution rate (1%), indicating a significant maintenance backlog. With 62% of issues stale (>12 months old) and a growing backlog (+29 in the last 12 months), the SDK requires focused attention on test environment bugs, graceful shutdown improvements, and observability enhancements. The most upvoted issue (#181 with 16 upvotes) has been open since 2020, highlighting long-standing community requests.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 61 | High - Core functionality and reliability |
| Enhancements | 87 | Medium - Developer experience improvements |
| Security Vulnerabilities | 1 | High - Dependency vulnerability |
| Stale Issues (>1 year) | 101 | Review for closure or prioritization |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs up) | 91 |
| Total Comments | 215 |
| Issues with Upvotes | 40 (25%) |
| Issues with Comments | 87 (53%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 1% (2/165) |
| Median Time to Close | 673 days (calendar) / 481 days (business) |
| Resolved within 30 days | 0% |
| Resolved within 90 days | 0% |

### Recommended Actions

1. **Immediate:** Address security vulnerability in uber-go/tally dependency (#899)
2. **Short-term:** Fix critical test environment bugs blocking developer testing
3. **Medium-term:** Implement graceful shutdown improvements (#181, #1086)
4. **Long-term:** Enhance observability and tracing features based on user demand
5. **Housekeeping:** Triage 101 stale issues - close obsolete, prioritize valid requests

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 31 | 2 | +29 |

**Backlog Growing:** The Go SDK backlog is expanding steadily with approximately 2-3 new issues opened per month and minimal closures. This trend indicates insufficient maintenance bandwidth relative to incoming issues.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 20 |
| Issues Closed | 2 |
| Bugs Closed | 0 |
| Enhancements Completed | 2 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#916](../repos/temporalio-sdk-go/issues.md#916) | 21 | Ability to mock/intercept side effect calls in test suite |

The resolution of #916 (most upvoted issue overall) demonstrates responsiveness to high-demand features. This pattern should be extended to other popular requests.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#181](../repos/temporalio-sdk-go/issues.md#181) | 16 | 0 | Add ability for a clean worker shutdown that waits for session completion |
| 2 | [#89](../repos/temporalio-sdk-go/issues.md#89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 3 | [#829](../repos/temporalio-sdk-go/issues.md#829) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity |
| 4 | [#1282](../repos/temporalio-sdk-go/issues.md#1282) | 5 | 5 | Heartbeat timeout not raised while testing |
| 5 | [#1352](../repos/temporalio-sdk-go/issues.md#1352) | 4 | 6 | Serialization context for codecs and converters |
| 6 | [#1149](../repos/temporalio-sdk-go/issues.md#1149) | 4 | 3 | Allow custom trace attribute keys |
| 7 | [#866](../repos/temporalio-sdk-go/issues.md#866) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 8 | [#313](../repos/temporalio-sdk-go/issues.md#313) | 4 | 2 | Allow including local activity input into the history |
| 9 | [#2109](../repos/temporalio-sdk-go/issues.md#2109) | 2 | 1 | MutableSideEffect in test framework ignores cmp function |
| 10 | [#1582](../repos/temporalio-sdk-go/issues.md#1582) | 2 | 0 | Updated context functions to match context library |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#181](../repos/temporalio-sdk-go/issues.md#181) | 32 | Clean worker shutdown with session wait |
| 2 | [#829](../repos/temporalio-sdk-go/issues.md#829) | 17 | Interceptor logger for workflow/activity logs |
| 3 | [#1282](../repos/temporalio-sdk-go/issues.md#1282) | 15 | Heartbeat timeout not raised in testing |
| 4 | [#89](../repos/temporalio-sdk-go/issues.md#89) | 15 | Refactor SDK to avoid type aliasing |
| 5 | [#1352](../repos/temporalio-sdk-go/issues.md#1352) | 14 | Serialization context for codecs |
| 6 | [#1149](../repos/temporalio-sdk-go/issues.md#1149) | 11 | Allow custom trace attribute keys |
| 7 | [#313](../repos/temporalio-sdk-go/issues.md#313) | 10 | Local activity input in history |
| 8 | [#866](../repos/temporalio-sdk-go/issues.md#866) | 9 | TestWorkflowEnvironment timeout enforcement |
| 9 | [#642](../repos/temporalio-sdk-go/issues.md#642) | 9 | Inconsistent behavior when asserting invocations |
| 10 | [#475](../repos/temporalio-sdk-go/issues.md#475) | 9 | Panic when querying during Workflow failure + retry |

---

## Issue Analysis by Category

### Security Vulnerability (1 issue)

**Action Required:** Update vulnerable dependency

| Issue | Severity | Description |
|-------|----------|-------------|
| [#899](../repos/temporalio-sdk-go/issues.md#899) | High (7.5) | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities (CVE-2019-0210, CVE-2019-0205) |

**Recommendation:** Update or replace the tally dependency to resolve the Apache Thrift vulnerabilities. These CVEs relate to denial-of-service attacks in Thrift serialization.

---

### Test Environment Bugs (High Priority - 20+ issues)

The test environment is critical for developer experience. Multiple bugs are blocking proper testing workflows.

#### Test Framework Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1282](../repos/temporalio-sdk-go/issues.md#1282) | 5 | Heartbeat timeout not raised while testing |
| [#866](../repos/temporalio-sdk-go/issues.md#866) | 4 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#2109](../repos/temporalio-sdk-go/issues.md#2109) | 2 | MutableSideEffect in test framework ignores cmp function |
| [#351](../repos/temporalio-sdk-go/issues.md#351) | 2 | Cancellation of Parent Workflow with Child Workflow doesn't work |
| [#167](../repos/temporalio-sdk-go/issues.md#167) | 2 | Activity times out in test environment with child workflow |
| [#2141](../repos/temporalio-sdk-go/issues.md#2141) | 0 | Activity Alias Collision in Test Environment (new) |
| [#2107](../repos/temporalio-sdk-go/issues.md#2107) | 1 | Panic in temporal unit test framework |
| [#2090](../repos/temporalio-sdk-go/issues.md#2090) | 0 | Starting a child workflow in tests leaks goroutines |
| [#2039](../repos/temporalio-sdk-go/issues.md#2039) | 0 | Joining errors causes TestWorkflowEnvironment to hide panics |
| [#1100](../repos/temporalio-sdk-go/issues.md#1100) | 1 | TestWorkflowEnvironment should surface errors |
| [#982](../repos/temporalio-sdk-go/issues.md#982) | 1 | Cannot register mock activity with string name |
| [#642](../repos/temporalio-sdk-go/issues.md#642) | 1 | Inconsistent behavior when asserting invocations |

#### Test Environment Behavior Inconsistencies

| Issue | Description |
|-------|-------------|
| [#1496](../repos/temporalio-sdk-go/issues.md#1496) | Workflow outcome inconsistent between test env and real server |
| [#1468](../repos/temporalio-sdk-go/issues.md#1468) | Interceptors are skipped for mocked activities |
| [#1427](../repos/temporalio-sdk-go/issues.md#1427) | TestWorkflowEnvironment workflow Context does not block when canceled |
| [#1360](../repos/temporalio-sdk-go/issues.md#1360) | testsuite.DevServer occasionally does not stop |

**Recommendation:** Create a dedicated test environment improvement sprint to address blocking issues:
1. Fix timeout enforcement (#866, #1282)
2. Fix child workflow interactions (#351, #167, #2090)
3. Address mock/assertion inconsistencies (#642, #1468, #2109)

---

### Core SDK Bugs (61 issues total)

#### Non-Determinism / Replay Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1208](../repos/temporalio-sdk-go/issues.md#1208) | 2 | Canceling a context with multiple child contexts can be non-deterministic |
| [#1838](../repos/temporalio-sdk-go/issues.md#1838) | 0 | Non-deterministic workflow code can send incorrect WFT completion |
| [#1341](../repos/temporalio-sdk-go/issues.md#1341) | 0 | WorkflowChecker should flag anonymous functions in local activities |

#### Worker/Activity Bugs

| Issue | Description |
|-------|-------------|
| [#1574](../repos/temporalio-sdk-go/issues.md#1574) | Batched heartbeat got canceled due to caller context cancellation |
| [#1536](../repos/temporalio-sdk-go/issues.md#1536) | TERMINATE_IF_RUNNING doesn't work for duplicate child workflows |
| [#1131](../repos/temporalio-sdk-go/issues.md#1131) | worker.Options.WorkerActivitiesPerSecond applies after poll is received |
| [#1240](../repos/temporalio-sdk-go/issues.md#1240) | Data race after deadlock detector fired |

#### Channel/Signal Bugs

| Issue | Description |
|-------|-------------|
| [#2066](../repos/temporalio-sdk-go/issues.md#2066) | Lost messages from workflow.NewChannel(ctx) |
| [#1624](../repos/temporalio-sdk-go/issues.md#1624) | Signal sent to Selector can be lost if Default path blocks |

#### Data Conversion Issues

| Issue | Description |
|-------|-------------|
| [#1349](../repos/temporalio-sdk-go/issues.md#1349) | WorkflowRun.Get does not use a context aware data converter |
| [#1045](../repos/temporalio-sdk-go/issues.md#1045) | Memo does not go through user provided data converter |
| [#1668](../repos/temporalio-sdk-go/issues.md#1668) | When deserializing typed search attributes, invalid values should be ignored |

#### Observability Bugs

| Issue | Description |
|-------|-------------|
| [#2140](../repos/temporalio-sdk-go/issues.md#2140) | OpenTelemetry incorrect metric type for Counter (new) |
| [#2103](../repos/temporalio-sdk-go/issues.md#2103) | Cosmetic bug in logger |
| [#1929](../repos/temporalio-sdk-go/issues.md#1929) | OTel emitted metrics do not match behavior described in docs |

---

## Enhancement Requests (87 issues)

### Worker Lifecycle & Shutdown (High Demand)

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#181](../repos/temporalio-sdk-go/issues.md#181) | 16 | Clean worker shutdown that waits for session completion |
| [#1086](../repos/temporalio-sdk-go/issues.md#1086) | 0 | Graceful shutdown where all activities are finished before worker returns |
| [#1197](../repos/temporalio-sdk-go/issues.md#1197) | 0 | Drain polled tasks on shutdown |
| [#937](../repos/temporalio-sdk-go/issues.md#937) | 0 | Keep session open in case of worker restart |

**Recommendation:** The #181 issue (16 upvotes) is the most upvoted open issue and represents a significant gap in the SDK. A proper graceful shutdown implementation would address multiple related issues.

### Observability & Tracing

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#829](../repos/temporalio-sdk-go/issues.md#829) | 6 | Use interceptor logger for workflow/activity logs |
| [#1149](../repos/temporalio-sdk-go/issues.md#1149) | 4 | Allow custom trace attribute keys |
| [#1330](../repos/temporalio-sdk-go/issues.md#1330) | 0 | Add TaskQueue to TracerStartSpanOptions |
| [#1445](../repos/temporalio-sdk-go/issues.md#1445) | 0 | OTel metric handler improvements |
| [#1334](../repos/temporalio-sdk-go/issues.md#1334) | 0 | Allow opting out of tracer span creation on schedule create |
| [#718](../repos/temporalio-sdk-go/issues.md#718) | 2 | Add metric for time passed from activity scheduling to start |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1352](../repos/temporalio-sdk-go/issues.md#1352) | 4 | Serialization context for codecs and converters |
| [#1609](../repos/temporalio-sdk-go/issues.md#1609) | 1 | Support ContextAware for failure converters |
| [#1132](../repos/temporalio-sdk-go/issues.md#1132) | 0 | Support visiting all payloads at once in proxy visitor interceptor |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1469](../repos/temporalio-sdk-go/issues.md#1469) | 0 | Allow specifying attempt in TestWorkflowEnvironment |
| [#1646](../repos/temporalio-sdk-go/issues.md#1646) | 1 | SetStartTime for activity test env |
| [#1167](../repos/temporalio-sdk-go/issues.md#1167) | 0 | Allow setting activity timeouts in TestActivityEnvironment |
| [#1173](../repos/temporalio-sdk-go/issues.md#1173) | 0 | Enable testing with OnActivity and non-retryable errors |
| [#1395](../repos/temporalio-sdk-go/issues.md#1395) | 0 | Make TestWorkflowEnvironment return errors with stack traces |
| [#1610](../repos/temporalio-sdk-go/issues.md#1610) | 0 | Provide access to workflow results from worker.WorkflowReplayer |

### SDK Architecture

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#89](../repos/temporalio-sdk-go/issues.md#89) | 7 | Refactor SDK to avoid type aliasing |
| [#313](../repos/temporalio-sdk-go/issues.md#313) | 4 | Allow including local activity input into the history |
| [#1582](../repos/temporalio-sdk-go/issues.md#1582) | 2 | Updated context functions to match context library |
| [#1410](../repos/temporalio-sdk-go/issues.md#1410) | 2 | Consider migrating away from golang/mock |

### Sessions & Child Workflows

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#884](../repos/temporalio-sdk-go/issues.md#884) | 2 | Support passing sessions from parent to child workflow |
| [#937](../repos/temporalio-sdk-go/issues.md#937) | 0 | Keep session open in case of worker restart |
| [#1227](../repos/temporalio-sdk-go/issues.md#1227) | 0 | Worker versioning + workflow session |

### New Go Language Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1593](../repos/temporalio-sdk-go/issues.md#1593) | 0 | Consider potential range-over-func APIs (Go 1.23+) |
| [#1582](../repos/temporalio-sdk-go/issues.md#1582) | 2 | Updated context functions to match context library |

### Worker Deployments & Versioning

| Issue | Request |
|-------|---------|
| [#1778](../repos/temporalio-sdk-go/issues.md#1778) | Rename Worker Deployment API interfaces |
| [#1777](../repos/temporalio-sdk-go/issues.md#1777) | Add ramp to Worker Deployments |
| [#1796](../repos/temporalio-sdk-go/issues.md#1796) | Add Patched() and DeprecatePatch() APIs |
| [#1471](../repos/temporalio-sdk-go/issues.md#1471) | Support New Versioning in WorkflowInfo.GetCurrentBuildID() |

---

## Housekeeping Recommendations

### Stale Issues (101 open issues with no activity >12 months)

Top stale issues by upvotes requiring triage:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#181](../repos/temporalio-sdk-go/issues.md#181) | 16 | 2020-07-07 | Clean worker shutdown with session wait |
| [#829](../repos/temporalio-sdk-go/issues.md#829) | 6 | 2023-02-02 | Interceptor logger for workflow/activity |
| [#1282](../repos/temporalio-sdk-go/issues.md#1282) | 5 | 2023-11-06 | Heartbeat timeout not raised in testing |
| [#718](../repos/temporalio-sdk-go/issues.md#718) | 2 | 2022-04-07 | Add activity scheduling-to-start metric |
| [#351](../repos/temporalio-sdk-go/issues.md#351) | 2 | 2021-01-26 | Parent/Child workflow cancellation in testing |

**Close Candidates:**
- Issues with 0 upvotes, 0 comments, and >3 years old
- Issues superseded by newer implementations
- Issues where the requested feature already exists

**Needs Triage:**
- High-upvote stale issues (#181, #829) - confirm still relevant
- Issues from internal Temporal team members without recent activity
- Issues marked `potential-bug` without reproduction steps

**Keep Open:**
- All security issues regardless of age
- Issues with significant upvotes indicating continued user demand

### Duplicate Candidates

Potential duplicates to merge:

**Graceful Shutdown Cluster:**
- #181, #1086, #1197 - All relate to graceful worker shutdown

**Test Environment Timeout Cluster:**
- #866, #1282 - Both relate to timeouts not being enforced in tests

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- [ ] Update uber-go/tally dependency to fix CVE-2019-0210/CVE-2019-0205 (#899)
- [ ] Fix OpenTelemetry metric type issue (#2140)
- [ ] Fix test environment activity alias collision (#2141)

### Phase 2: Developer Experience (Short-term)

- [ ] Fix heartbeat timeout not raised in testing (#1282)
- [ ] Fix TestWorkflowEnvironment timeout enforcement (#866)
- [ ] Fix MutableSideEffect cmp function ignored in tests (#2109)
- [ ] Address test environment goroutine leaks (#2090)

### Phase 3: Feature Expansion (Medium-term)

- [ ] Implement clean worker shutdown with session wait (#181) - **highest upvoted**
- [ ] Add interceptor logger for workflow/activity logs (#829)
- [ ] Implement serialization context for codecs (#1352)
- [ ] Allow custom trace attribute keys (#1149)

### Phase 4: Maintenance (Ongoing)

- [ ] Triage 101 stale issues
- [ ] Refactor SDK to avoid type aliasing (#89)
- [ ] Migrate away from golang/mock (#1410)
- [ ] Update context functions to match stdlib (#1582)
- [ ] Close obsolete/resolved issues

---

## Quick Reference: Top 15 High-Impact Issues

| # | Issue | Category | Upvotes | Impact |
|---|-------|----------|---------|--------|
| 1 | #899 | Security | 0 | CVE in uber-go/tally dependency |
| 2 | #181 | Enhancement | **16** | Clean worker shutdown (most upvoted) |
| 3 | #89 | Enhancement | **7** | Refactor to avoid type aliasing |
| 4 | #829 | Enhancement | **6** | Interceptor logger |
| 5 | #1282 | Bug | **5** | Heartbeat timeout not raised in testing |
| 6 | #1352 | Enhancement | **4** | Serialization context for codecs |
| 7 | #1149 | Enhancement | **4** | Custom trace attribute keys |
| 8 | #866 | Bug | **4** | TestWorkflowEnvironment timeout enforcement |
| 9 | #313 | Enhancement | **4** | Local activity input in history |
| 10 | #2141 | Bug | 0 | Activity alias collision in tests (new) |
| 11 | #2140 | Bug | 0 | OpenTelemetry incorrect metric type (new) |
| 12 | #2109 | Bug | **2** | MutableSideEffect cmp function ignored |
| 13 | #1208 | Bug | **2** | Context cancellation non-determinism |
| 14 | #2066 | Bug | 0 | Lost messages from workflow.NewChannel |
| 15 | #1410 | Enhancement | **2** | Migrate away from golang/mock |

**Key Insight:** The Go SDK's top issues cluster around three themes:
1. **Worker lifecycle management** (#181, #1086) - Graceful shutdown with sessions
2. **Test environment reliability** (#1282, #866, #2109) - Timeout and behavior parity
3. **Observability** (#829, #1149, #1330) - Logging and tracing improvements

Addressing these clusters would significantly improve developer experience and address the majority of user-reported pain points.
