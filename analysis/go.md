# Temporal Go SDK - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 163
**Repository:** [temporalio/sdk-go](https://github.com/temporalio/sdk-go)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-go/ISSUES.md)

**Other SDKs:** [Java](java.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Go SDK has accumulated 163 open issues, with 71 issues older than 3 years. The testing framework is the largest pain point, with numerous issues around `TestWorkflowEnvironment` behavior discrepancies. This document analyzes the issues by category and proposes a structured approach to address them efficiently.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Testing Framework Issues | 45+ | High - Blocking developer experience |
| Potential Bugs | 45 | High - Uncertain behavior |
| Confirmed Bugs | 15 | High - Core functionality |
| Security Vulnerabilities | 1 | Medium |
| Enhancement Requests | 89 | Medium - Feature parity/DX |
| Stale Issues (>1 year) | 101 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 112 |
| Total Comments | 214 |
| Issues with Upvotes | 41 (25%) |
| Issues with Comments | 86 (53%) |

### Recommended Actions

1. **Immediate:** Address testing framework pain points (highest user demand)
2. **Short-term:** Fix confirmed bugs and high-engagement potential-bugs
3. **Medium-term:** Improve worker/session management
4. **Long-term:** API modernization and tracing improvements
5. **Housekeeping:** Triage 101 stale issues

---

## User Demand: Top Issues by Upvotes

These issues have the most user upvotes, indicating real community demand:

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | 0 | Mock/intercept side effect calls in test suite |
| 2 | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | Clean worker shutdown waiting for session completion |
| 3 | [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | Refactor SDK to avoid type aliasing |
| 4 | [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | Interceptor logger for workflow/activity logs |
| 5 | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | 5 | Heartbeat timeout not raised while testing |
| 6 | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | 6 | Serialization context for codecs/converters |
| 7 | [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | 3 | Allow custom trace attribute keys |
| 8 | [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| 9 | [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2 | Allow including local activity input into history |
| 10 | [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | 1 | MutableSideEffect in test framework ignores cmp function |

### Priority Score (Upvotes×2 + Comments)

Combined engagement metric showing issues with both upvotes and discussion:

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #916 | 42 | Mock/intercept side effects in tests |
| 2 | #181 | 32 | Clean worker shutdown for sessions |
| 3 | #829 | 17 | Interceptor logger |
| 4 | #1282 | 15 | Heartbeat timeout in testing |
| 5 | #89 | 15 | Type aliasing refactor |
| 6 | #1352 | 14 | Serialization context |
| 7 | #1149 | 11 | Custom trace attributes |
| 8 | #313 | 10 | Local activity input in history |
| 9 | #866 | 9 | WorkflowExecutionTimeout enforcement |
| 10 | #642 | 9 | Inconsistent mock assertion behavior |

---

## 1. Critical: Testing Framework Issues (45+ issues)

The testing framework is the #1 pain point for Go SDK users. Issues span behavior discrepancies, missing features, and bugs.

### 1.1 Test Environment Behavior Discrepancies (15+ issues)

The `TestWorkflowEnvironment` behaves differently from production in critical ways:

| Issue | Problem |
|-------|---------|
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | **Heartbeat timeout not raised** (5 👍) |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | **WorkflowExecutionTimeout not enforced** (4 👍) |
| [#1496](https://github.com/temporalio/sdk-go/issues/1496) | Workflow outcome inconsistent between test env and real server |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | Activity times out with child workflow (2 👍) |
| [#1099](https://github.com/temporalio/sdk-go/issues/1099) | Timeouts run defer statements |
| [#1427](https://github.com/temporalio/sdk-go/issues/1427) | Workflow Context doesn't block when canceled |
| [#491](https://github.com/temporalio/sdk-go/issues/491) | Workflow Retry not working |

**Recommendation:** Audit test environment for production parity. High-impact issues (#1282, #866) should be prioritized.

### 1.2 Mocking Issues (10+ issues)

| Issue | Problem |
|-------|---------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | **Cannot mock side effects** (21 👍 - TOP REQUEST) |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | MutableSideEffect ignores cmp function (2 👍) |
| [#1468](https://github.com/temporalio/sdk-go/issues/1468) | Interceptors skipped for mocked activities |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | Cannot register mock activity with string name |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | Inconsistent behavior when asserting invocations |
| [#495](https://github.com/temporalio/sdk-go/issues/495) | GetChildWorkflowExecution completes mocked child |
| [#2005](https://github.com/temporalio/sdk-go/issues/2005) | OnWorkflow mocker doesn't propagate context headers |
| [#125](https://github.com/temporalio/sdk-go/issues/125) | Remove need to register mocked activity |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | Remove mocks package (2 👍) |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | Migrate away from golang/mock (2 👍) |

**Recommendation:**
1. Implement side effect mocking (#916) - highest upvoted issue overall
2. Fix MutableSideEffect behavior (#2109)
3. Consider golang/mock migration (#1410)

### 1.3 Test Framework Bugs (8 issues)

| Issue | Problem |
|-------|---------|
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | Panic in unit test framework |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | Starting child workflow leaks goroutines |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | Joining errors hides panics, test passes |
| [#1360](https://github.com/temporalio/sdk-go/issues/1360) | DevServer occasionally doesn't stop |
| [#975](https://github.com/temporalio/sdk-go/issues/975) | Missing mock causes panic but test succeeds |
| [#922](https://github.com/temporalio/sdk-go/issues/922) | Data race on signal data |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | Parent/child cancellation panics (2 👍) |
| [#108](https://github.com/temporalio/sdk-go/issues/108) | Race condition in testWorkflowEnvironmentImpl |

### 1.4 Missing Test Features (8 issues)

| Issue | Feature |
|-------|---------|
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | SetStartTime for activity test env |
| [#1469](https://github.com/temporalio/sdk-go/issues/1469) | Allow specifying attempt |
| [#1167](https://github.com/temporalio/sdk-go/issues/1167) | Allow setting activity timeouts |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | Override max activity attempts |
| [#935](https://github.com/temporalio/sdk-go/issues/935) | Test workflow with ContinuedExecutionRunID |
| [#497](https://github.com/temporalio/sdk-go/issues/497) | Query after signal not working |
| [#458](https://github.com/temporalio/sdk-go/issues/458) | Fail RegisterDelayedCallback after ExecuteWorkflow |
| [#439](https://github.com/temporalio/sdk-go/issues/439) | Signal channel assertions |

---

## 2. High Priority: Confirmed Bugs (15 issues)

### 2.1 Non-Determinism / Replay Bugs (3 issues)

| Issue | Problem |
|-------|---------|
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | **Canceling context with multiple children is non-deterministic** (2 👍) |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | Non-deterministic code sends incorrect WFT completion |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | Lost messages from workflow.NewChannel |

**Recommendation:** These are critical production bugs. Audit and fix determinism guarantees.

### 2.2 Worker/Activity Bugs (5 issues)

| Issue | Problem |
|-------|---------|
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | OTel metrics don't match documented behavior |
| [#1906](https://github.com/temporalio/sdk-go/issues/1906) | workflowcheck crash (index out of range) |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | SetOnChildWorkflowCompletedListener doesn't work |
| [#1846](https://github.com/temporalio/sdk-go/issues/1846) | AsTime() on nil returns 1970 instead of error |
| [#186](https://github.com/temporalio/sdk-go/issues/186) | Worker reports validation error on transient decision |

### 2.3 Other Bugs (4 issues)

| Issue | Problem |
|-------|---------|
| [#2103](https://github.com/temporalio/sdk-go/issues/2103) | Cosmetic bug in logger |
| [#2025](https://github.com/temporalio/sdk-go/issues/2025) | DescribeTaskQueueEnhanced uses deprecated APIs |
| [#1961](https://github.com/temporalio/sdk-go/issues/1961) | Strange error in tests not occurring in production |

---

## 3. Medium Priority: Potential Bugs (45 issues)

The `potential-bug` label is heavily used. High-engagement ones to prioritize:

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | Heartbeat timeout not raised while testing | 5 |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | TestWorkflowEnvironment doesn't enforce timeout | 4 |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | Context cancellation non-determinism | 2 |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | Parent/child cancellation panics | 2 |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | Activity timeout with child workflow | 2 |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | Signal sent to Selector can be lost | 0 |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | TERMINATE_IF_RUNNING doesn't work for duplicate children | 0 |
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | Batched heartbeat canceled due to context | 0 |

**Recommendation:** Review and reclassify these. Many may be actual bugs or duplicates.

---

## 4. Security Vulnerabilities (1 issue)

| Issue | Description | Severity |
|-------|-------------|----------|
| [#899](https://github.com/temporalio/sdk-go/issues/899) | github.com/uber-go/tally/v4: 2 vulnerabilities | 7.5 (High) |

**Recommendation:** Update tally dependency or evaluate alternatives.

---

## 5. Enhancement Clusters

### 5.1 Worker/Session Management (11 issues, 17 👍)

Session and worker lifecycle is a significant user pain point:

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#181](https://github.com/temporalio/sdk-go/issues/181) | **Clean worker shutdown waiting for session** | 16 |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | Graceful shutdown waiting for activities | 0 |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | Keep session open on worker restart | 0 |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | Pass sessions from parent to child workflow | 2 |
| [#955](https://github.com/temporalio/sdk-go/issues/955) | Suppress "worker stopping" polling errors | 0 |
| [#1197](https://github.com/temporalio/sdk-go/issues/1197) | Drain polled tasks on shutdown | 0 |

**Recommendation:** Bundle as "Worker Lifecycle Improvements" project. #181 is the 2nd most upvoted issue.

### 5.2 Activity Improvements (19 issues, 19 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#829](https://github.com/temporalio/sdk-go/issues/829) | Interceptor logger for workflow/activity | 6 |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | Local activity input in history | 4 |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | Metric for scheduling to last attempt time | 2 |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | Variadic activity arguments | 1 |
| [#266](https://github.com/temporalio/sdk-go/issues/266) | Expose activity start/completion info | 1 |
| [#2094](https://github.com/temporalio/sdk-go/issues/2094) | Worker heartbeating | 0 |
| [#126](https://github.com/temporalio/sdk-go/issues/126) | Auto-heartbeating activities | 0 |
| [#238](https://github.com/temporalio/sdk-go/issues/238) | RecordActivityHeartbeat return error on cancel | 0 |

### 5.3 Tracing/OpenTelemetry (7 issues, 4 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | Custom trace attribute keys | 4 |
| [#1445](https://github.com/temporalio/sdk-go/issues/1445) | OTel metric handler improvements | 0 |
| [#1334](https://github.com/temporalio/sdk-go/issues/1334) | Opt-out tracer span on schedule create | 0 |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | Add TaskQueue to TracerStartSpanOptions | 0 |
| [#619](https://github.com/temporalio/sdk-go/issues/619) | Consistent tracing tags across SDKs | 0 |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | ContinueAsNew creates new root span | 0 |

### 5.4 Serialization/Codec (6 issues, 5 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | Serialization context for codecs/converters | 4 |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | ContextAware failure converters | 1 |
| [#1349](https://github.com/temporalio/sdk-go/issues/1349) | WorkflowRun.Get use context aware converter | 0 |
| [#842](https://github.com/temporalio/sdk-go/issues/842) | Custom object processing in codec interceptor | 0 |
| [#1132](https://github.com/temporalio/sdk-go/issues/1132) | Visit all payloads at once in proxy visitor | 0 |

### 5.5 API Modernization (10+ issues)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | Refactor to avoid type aliasing | 7 |
| [#1796](https://github.com/temporalio/sdk-go/issues/1796) | Add `Patched()` and `DeprecatePatch()` APIs | 0 |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | Update context functions to match stdlib | 2 |
| [#1593](https://github.com/temporalio/sdk-go/issues/1593) | Consider range-over-func APIs | 0 |
| [#997](https://github.com/temporalio/sdk-go/issues/997) | Dynamic query/update handler | 0 |

---

## 6. Issue Housekeeping Recommendations

### 6.1 Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 3 |
| 1-3 months | 10 |
| 3-6 months | 5 |
| 6-12 months | 16 |
| 1-2 years | 30 |
| 2-3 years | 28 |
| **3+ years** | **71** |

**71 issues are over 3 years old** - significant tech debt.

### 6.2 Stale Issues (101 issues)

101 issues have had no activity in >12 months. Recommend:
1. Review each for current relevance
2. Request reproduction on current SDK version
3. Close if no response in 30 days

### 6.3 Issues to Consolidate

**Testing Framework Cluster:**
- Multiple test environment behavior issues could be addressed together
- Mock-related issues (#916, #2109, #1468, #982) share root causes

**Worker Shutdown Cluster:**
- #181, #1086, #1197 - all about graceful shutdown

---

## 7. Proposed Roadmap

### Phase 1: Testing Framework (Highest Impact)
- [ ] Implement side effect mocking (#916 - 21 👍)
- [ ] Fix MutableSideEffect behavior (#2109)
- [ ] Fix heartbeat timeout in tests (#1282 - 5 👍)
- [ ] Enforce WorkflowExecutionTimeout (#866 - 4 👍)
- [ ] Fix test framework panics (#2107, #2090, #2039)

### Phase 2: Core Bug Fixes
- [ ] Fix context cancellation non-determinism (#1208)
- [ ] Fix lost channel messages (#2066)
- [ ] Fix non-deterministic WFT completion (#1838)
- [ ] Fix workflowcheck crash (#1906)

### Phase 3: Worker Lifecycle
- [ ] Clean worker shutdown for sessions (#181 - 16 👍)
- [ ] Graceful shutdown waiting for activities (#1086)
- [ ] Drain polled tasks on shutdown (#1197)

### Phase 4: DX Improvements
- [ ] Interceptor logger (#829 - 6 👍)
- [ ] Custom trace attributes (#1149 - 4 👍)
- [ ] Serialization context (#1352 - 4 👍)

### Phase 5: API Modernization
- [ ] Type aliasing refactor (#89 - 7 👍)
- [ ] Add Patched()/DeprecatePatch() APIs (#1796)
- [ ] Context function updates (#1582)

### Ongoing: Housekeeping
- [ ] Triage 101 stale issues
- [ ] Review 71 issues older than 3 years
- [ ] Reclassify 45 potential-bugs
- [ ] Update tally dependency (#899)

---

## 8. Quick Reference: Top 20 High-Impact Issues

Combining technical priority with user demand (upvotes):

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #916 | Testing | **21** | Mock side effects (TOP REQUEST) |
| 2 | #181 | Worker | **16** | Clean shutdown for sessions |
| 3 | #89 | API | **7** | Type aliasing refactor |
| 4 | #829 | Activity | **6** | Interceptor logger |
| 5 | #1282 | Testing | **5** | Heartbeat timeout not raised |
| 6 | #1352 | Serialization | **4** | Serialization context |
| 7 | #1149 | Tracing | **4** | Custom trace attributes |
| 8 | #866 | Testing | **4** | ExecutionTimeout not enforced |
| 9 | #313 | Activity | **4** | Local activity input in history |
| 10 | #1208 | Bug | **2** | Context cancellation non-determinism |
| 11 | #2109 | Testing | **2** | MutableSideEffect ignores cmp |
| 12 | #351 | Testing | **2** | Parent/child cancellation panic |
| 13 | #167 | Testing | **2** | Activity timeout with child |
| 14 | #1582 | API | **2** | Context function updates |
| 15 | #884 | Worker | **2** | Pass sessions to child workflow |
| 16 | #718 | Activity | **2** | Scheduling-to-attempt metric |
| 17 | #61 | Testing | **2** | Remove mocks package |
| 18 | #1410 | Testing | **2** | Migrate from golang/mock |
| 19 | #2066 | Bug | 0 | Lost channel messages |
| 20 | #1838 | Bug | 0 | Non-deterministic WFT completion |

**Key Insight:** The most upvoted issues (#916, #181, #89) are about testing, worker lifecycle, and API design - indicating users prioritize DX and stability improvements over new features.

---

## Appendix: Analysis Scripts

The following scripts are available for ongoing analysis:

```bash
# Show statistics (includes engagement data)
node scripts/analyze-issues.js temporalio-sdk-go stats

# Show issues by age
node scripts/analyze-issues.js temporalio-sdk-go age

# List bugs (sorted by upvotes)
node scripts/analyze-issues.js temporalio-sdk-go bugs

# Show security vulnerabilities
node scripts/analyze-issues.js temporalio-sdk-go security

# === ENGAGEMENT COMMANDS ===

# Show top issues by upvotes (user demand)
node scripts/analyze-issues.js temporalio-sdk-go upvotes

# Show top issues by comments
node scripts/analyze-issues.js temporalio-sdk-go comments

# Full engagement analysis
node scripts/analyze-issues.js temporalio-sdk-go engagement

# Priority score (upvotes×2 + comments)
node scripts/analyze-issues.js temporalio-sdk-go priority

# === OTHER COMMANDS ===

# Show stale issues (>12 months no activity)
node scripts/analyze-issues.js temporalio-sdk-go stale

# Show recent issues (last 30 days)
node scripts/analyze-issues.js temporalio-sdk-go recent

# Categorize enhancements (with upvote totals)
node scripts/analyze-issues.js temporalio-sdk-go categories

# === SYNC COMMANDS ===

# Update issues (incremental - only changed)
./scripts/update-issues.sh temporalio-sdk-go

# Rebuild index (includes engagement data)
node scripts/build-index.js temporalio-sdk-go
```

### Querying with jq

```bash
# Find issues with 3+ upvotes
cat repos/temporalio-sdk-go/issues-index.json | jq '.issues[] | select(.upvotes >= 3) | {number, title, upvotes}'

# Sort by priority score
cat repos/temporalio-sdk-go/issues-index.json | jq '[.issues[] | . + {score: (.upvotes * 2 + .commentCount)}] | sort_by(-.score) | .[:10]'

# Find testing-related issues
cat repos/temporalio-sdk-go/issues-index.json | jq '.issues[] | select(.title | test("test|Test|mock|Mock"; "i")) | {number, title, upvotes}'

# Find upvoted potential-bugs
cat repos/temporalio-sdk-go/issues-index.json | jq '.issues[] | select(.upvotes > 0 and (.labels | contains(["potential-bug"]))) | {number, title, upvotes}'
```
