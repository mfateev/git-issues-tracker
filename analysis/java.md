# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 217
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-java/issues.md)

**Other SDKs:** [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Java SDK has accumulated 217 open issues over 5+ years, with 104 issues older than 3 years. The SDK shows strong user demand for improved testing support (test server issues) and Kotlin coroutine integration. Recent activity focuses on Nexus API support and modern framework compatibility (Spring Boot 4, Jackson 3).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Test Server Issues | 37 | High - Blocking developer experience |
| Bugs | 33 | High - Core functionality |
| Security Vulnerabilities | 4 | Critical |
| Enhancement Requests | 127 | Medium - Feature parity/DX |
| Stale Issues (>1 year) | 155 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 104 |
| Total Comments | 203 |
| Issues with Upvotes | 37 (17%) |
| Issues with Comments | 86 (40%) |

### Recommended Actions

1. **Immediate:** Address 4 security vulnerabilities and macOS environment config bug
2. **Short-term:** Fix critical test server bugs (blocking testing) and add Nexus failure support
3. **Medium-term:** Resolve core SDK bugs, add Spring property placeholder support
4. **Long-term:** Implement high-demand enhancements (Kotlin coroutines, Spring Boot 4)
5. **Housekeeping:** Close/triage 155 stale issues

---

## User Demand: Top Issues by Upvotes

These issues have the most user upvotes, indicating real community demand:

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1693](../repos/temporalio-sdk-java/issues.md#1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](../repos/temporalio-sdk-java/issues.md#1845) | 15 | 8 | Kotlin coroutine support in workflows/activities |
| 3 | [#1804](../repos/temporalio-sdk-java/issues.md#1804) | 10 | 0 | Run Temporal CLI server from tests |
| 4 | [#2738](../repos/temporalio-sdk-java/issues.md#2738) | 7 | 4 | Spring Boot 4 Support |
| 5 | [#214](../repos/temporalio-sdk-java/issues.md#214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](../repos/temporalio-sdk-java/issues.md#1832) | 4 | 0 | Temporal Annotations as Meta Annotation |
| 7 | [#827](../repos/temporalio-sdk-java/issues.md#827) | 4 | 0 | Pass configuration into workflow |
| 8 | [#2746](../repos/temporalio-sdk-java/issues.md#2746) | 3 | 0 | Jackson 3 support |
| 9 | [#2075](../repos/temporalio-sdk-java/issues.md#2075) | 3 | 1 | Keep heartbeating during shutdown |
| 10 | [#1163](../repos/temporalio-sdk-java/issues.md#1163) | 3 | 1 | Worker metrics scope per workflow execution |

### Priority Score (Upvotes×2 + Comments)

Combined engagement metric showing issues with both upvotes and discussion:

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #1845 | 38 | Kotlin coroutine support |
| 2 | #1693 | 37 | listWorkflowExecutions in test server |
| 3 | #1804 | 20 | Temporal CLI server from tests |
| 4 | #2738 | 18 | Spring Boot 4 Support |
| 5 | #214 | 12 | @SignalMethod threading |
| 6 | #1007 | 11 | Scala module |
| 7 | #952 | 10 | OpenTracing duplicates spans (bug) |
| 8 | #2676 | 8 | grpc-netty-shaded vulnerability |
| 9 | #1832 | 8 | Annotations as Meta Annotation |
| 10 | #827 | 8 | Configuration into workflow |

---

## Recent Issues (Last 30 Days)

| Date | Issue | Description |
|------|-------|-------------|
| 2026-01-05 | [#2755](../repos/temporalio-sdk-java/issues.md#2755) | Support using Temporal failures in Nexus APIs |
| 2026-01-04 | [#2754](../repos/temporalio-sdk-java/issues.md#2754) | Environment Configuration does not read correct file path on macOS |
| 2025-12-31 | [#2753](../repos/temporalio-sdk-java/issues.md#2753) | Unexpected Activity Timeout Behavior After Worker Crash |
| 2025-12-30 | [#2752](../repos/temporalio-sdk-java/issues.md#2752) | OpenTracing support for updateWithStart |
| 2025-12-28 | [#2750](../repos/temporalio-sdk-java/issues.md#2750) | TestStatsReporter Flush not flushing |
| 2025-12-12 | [#2747](../repos/temporalio-sdk-java/issues.md#2747) | @WorkflowImpl workers property should support Spring placeholders |
| 2025-12-09 | [#2746](../repos/temporalio-sdk-java/issues.md#2746) | Jackson 3 support |
| 2025-12-08 | [#2745](../repos/temporalio-sdk-java/issues.md#2745) | WorkerOptions isUsingVirtualThreadsOnWorkflowWorker issue |

**Notable Recent Patterns:**
- Environment config bug (#2754) same as TypeScript (#1869) - cross-SDK issue
- Nexus API enhancements (#2755) as adoption increases
- Framework upgrades (Jackson 3, Spring placeholders)

---

## 1. Critical: Security Vulnerabilities (4 issues)

**Action Required:** Immediate dependency updates

| Issue | Description | Severity |
|-------|-------------|----------|
| [#1890](../repos/temporalio-sdk-java/issues.md#1890) | spring-boot-starter-2.7.12.jar: 9 vulnerabilities | 9.8 (Critical) |
| [#1952](../repos/temporalio-sdk-java/issues.md#1952) | ktlint-0.47.1.jar: 2 vulnerabilities | 7.5 (High) |
| [#1951](../repos/temporalio-sdk-java/issues.md#1951) | spring-boot-dependencies-2.7.12.pom: 1 vulnerability | 7.5 (High) |
| [#1888](../repos/temporalio-sdk-java/issues.md#1888) | kotlin-klib-commonizer-embeddable-1.5.32.jar | 5.3 (Medium) |

**Additionally:**
- [#2676](../repos/temporalio-sdk-java/issues.md#2676) - grpc-netty-shaded vulnerability (CVE-2025-55163)

### Recommendation

Create a dependency update PR that:
1. Updates Spring Boot dependencies to latest 3.x
2. Updates Kotlin dependencies to latest stable
3. Updates gRPC-netty-shaded to 1.75.0+
4. Run security scan to verify all CVEs resolved

---

## 2. High Priority: Test Server Issues (37 issues)

The test server is critical for developer experience. These issues are blocking proper testing workflows.

### 2.1 Time Skipping Problems (10 issues)

Time skipping is fundamentally broken in several scenarios:

| Issue | Problem |
|-------|---------|
| [#2670](../repos/temporalio-sdk-java/issues.md#2670) | `TestWorkflowEnvironment#sleep` hangs indefinitely |
| [#2642](../repos/temporalio-sdk-java/issues.md#2642) | `TestWorkflowEnvironment` sleep incorrect behavior |
| [#2392](../repos/temporalio-sdk-java/issues.md#2392) | Test environment sleep hangs on child workflows |
| [#2246](../repos/temporalio-sdk-java/issues.md#2246) | Time-skipping past activity's startToCloseTimeout causes worker not to close |
| [#1540](../repos/temporalio-sdk-java/issues.md#1540) | Time skipping broken in child workflows |
| [#1291](../repos/temporalio-sdk-java/issues.md#1291) | `Workflow.await(condition)` times out in unit tests |
| [#1138](../repos/temporalio-sdk-java/issues.md#1138) | Time skipping lock not decremented for outstanding activities |

**Recommendation:** Dedicated effort to fix time skipping implementation. Consider:
- Audit time-skipping lock management
- Fix child workflow time propagation
- Add comprehensive time-skipping integration tests

### 2.2 Continue-as-New Problems (3 issues)

| Issue | Problem |
|-------|---------|
| [#2655](../repos/temporalio-sdk-java/issues.md#2655) | Continue-as-new doesn't carry memo/search attributes |
| [#2364](../repos/temporalio-sdk-java/issues.md#2364) | Search attributes in ContinueAsNewOptions |
| [#1538](../repos/temporalio-sdk-java/issues.md#1538) | Continue-as-new implementation not atomic |

### 2.3 Missing Test Server Features (8 issues)

| Issue | Feature |
|-------|---------|
| [#1693](../repos/temporalio-sdk-java/issues.md#1693) | Support listWorkflowExecutions |
| [#1642](../repos/temporalio-sdk-java/issues.md#1642) | Add history pagination |
| [#1093](../repos/temporalio-sdk-java/issues.md#1093) | Add ResetWorkflowExecution support |
| [#1139](../repos/temporalio-sdk-java/issues.md#1139) | Support filtering for ListOpenWorkflowExecutions |
| [#341](../repos/temporalio-sdk-java/issues.md#341) | Support robfig style cron defs |

### 2.4 Test Server UX Improvements (6 issues)

| Issue | Improvement |
|-------|-------------|
| [#1804](../repos/temporalio-sdk-java/issues.md#1804) | Run Temporal CLI server from tests |
| [#1403](../repos/temporalio-sdk-java/issues.md#1403) | Warning when no workers listening |
| [#1377](../repos/temporalio-sdk-java/issues.md#1377) | Predictable log when server ready |
| [#1767](../repos/temporalio-sdk-java/issues.md#1767) | Log task failures from invalid commands |

---

## 3. High Priority: Core SDK Bugs (33 issues)

### 3.1 Non-Determinism / Replay Bugs (5 issues)

These can cause workflow failures in production:

| Issue | Problem |
|-------|---------|
| [#2307](../repos/temporalio-sdk-java/issues.md#2307) | Removing `Workflow.GetVersion` causes NDE with parallel threads |
| [#1668](../repos/temporalio-sdk-java/issues.md#1668) | `MutableSideEffect` explodes with non-determinism on replay |
| [#902](../repos/temporalio-sdk-java/issues.md#902) | Exception in parallel async functions leads to non-deterministic execution |

**Recommendation:** Audit and fix determinism guarantees in:
- Version/patch handling
- MutableSideEffect state management
- Parallel workflow thread exception handling

### 3.2 Worker/Activity Bugs (6 issues)

| Issue | Problem |
|-------|---------|
| [#2753](../repos/temporalio-sdk-java/issues.md#2753) | Unexpected Activity Timeout Behavior After Worker Crash (new) |
| [#1715](../repos/temporalio-sdk-java/issues.md#1715) | WorkerOptions doesn't enforce executors >= pollers |
| [#1257](../repos/temporalio-sdk-java/issues.md#1257) | Cached activity heartbeat prevents quick shutdown |
| [#1246](../repos/temporalio-sdk-java/issues.md#1246) | Query not picked up during long local activity |
| [#1141](../repos/temporalio-sdk-java/issues.md#1141) | Deadlock detector fires on cold JVM |
| [#731](../repos/temporalio-sdk-java/issues.md#731) | Activities with interrupted flag not reported as Completed |

### 3.3 Interface/Inheritance Bugs (3 issues)

| Issue | Problem |
|-------|---------|
| [#995](../repos/temporalio-sdk-java/issues.md#995) | Workflow interface inheritance not supported |
| [#1050](../repos/temporalio-sdk-java/issues.md#1050) | Activity interface with generic types throws ClassCastException |
| [#1107](../repos/temporalio-sdk-java/issues.md#1107) | Overridden method from parent class registered as second query |

### 3.4 Client/API Bugs (4 issues)

| Issue | Problem |
|-------|---------|
| [#2754](../repos/temporalio-sdk-java/issues.md#2754) | Environment Configuration macOS file path issue (new - cross-SDK) |
| [#856](../repos/temporalio-sdk-java/issues.md#856) | `WorkflowClient#execute` doesn't pair with `workflowStub.getResult()` |
| [#860](../repos/temporalio-sdk-java/issues.md#860) | Large blob as Activity input gives non-descriptive gRPC error |
| [#1374](../repos/temporalio-sdk-java/issues.md#1374) | External workflow signal throws incorrect exceptions |

---

## 4. Medium Priority: Enhancement Clusters

### 4.1 Spring Boot Integration (7 issues)

| Issue | Enhancement |
|-------|-------------|
| [#2747](../repos/temporalio-sdk-java/issues.md#2747) | **@WorkflowImpl Spring property placeholders** (new) |
| [#2738](../repos/temporalio-sdk-java/issues.md#2738) | Spring Boot 4 Support |
| [#2656](../repos/temporalio-sdk-java/issues.md#2656) | Multi-namespace annotation support |
| [#2064](../repos/temporalio-sdk-java/issues.md#2064) | GraalVM native image descriptor |
| [#2031](../repos/temporalio-sdk-java/issues.md#2031) | SlotSupplier integration |
| [#2026](../repos/temporalio-sdk-java/issues.md#2026) | Graceful shutdown wait time property |
| [#1839](../repos/temporalio-sdk-java/issues.md#1839) | HealthIndicator |

**Recommendation:** Bundle as "Spring Boot 4 Migration" project:
1. Add Spring Boot 4 support
2. Implement Spring property placeholders for annotations (#2747)
3. Implement HealthIndicator
4. Add missing configuration properties
5. Update to Spring Boot 3.x minimum (resolves security issues)

### 4.2 Tracing/Observability (12 issues)

| Issue | Enhancement |
|-------|-------------|
| [#2394](../repos/temporalio-sdk-java/issues.md#2394) | **Pure OpenTelemetry support** (no shim) |
| [#2752](../repos/temporalio-sdk-java/issues.md#2752) | OpenTracing support for updateWithStart (new) |
| [#2620](../repos/temporalio-sdk-java/issues.md#2620) | OpenTracing client interceptor for updateWithStart |
| [#2117](../repos/temporalio-sdk-java/issues.md#2117) | Customizable OTel span tags |
| [#1963](../repos/temporalio-sdk-java/issues.md#1963) | Tracing span for schedule creation |
| [#1440](../repos/temporalio-sdk-java/issues.md#1440) | Differentiate local vs regular activity spans |
| [#862](../repos/temporalio-sdk-java/issues.md#862) | Consistent tracing tags across SDKs |

**Recommendation:** Create new `temporal-opentelemetry` module:
1. Native OpenTelemetry support (no OpenTracing shim)
2. Consistent span naming with other SDKs
3. Support for all operations including updateWithStart
4. Customizable tags

### 4.3 Nexus API Support (2 issues)

| Issue | Enhancement |
|-------|-------------|
| [#2755](../repos/temporalio-sdk-java/issues.md#2755) | **Support Temporal failures in Nexus APIs** (new) |
| Related cross-SDK effort | Coordinate with .NET Nexus timeout handling |

**Recommendation:** As Nexus adoption grows, ensure consistent failure handling across SDKs.

### 4.4 Activity Improvements (25 issues)

High-impact activity improvements:

| Issue | Enhancement | Impact |
|-------|-------------|--------|
| [#2716](../repos/temporalio-sdk-java/issues.md#2716) | Worker-level heartbeating | High |
| [#2075](../repos/temporalio-sdk-java/issues.md#2075) | Keep heartbeating during shutdown | High |
| [#2051](../repos/temporalio-sdk-java/issues.md#2051) | Activity timeouts via annotation | Medium |
| [#1258](../repos/temporalio-sdk-java/issues.md#1258) | Retry heartbeats on network outage | High |
| [#1005](../repos/temporalio-sdk-java/issues.md#1005) | `ActivityExecutionContext#isCancelled` | Medium |
| [#86](../repos/temporalio-sdk-java/issues.md#86) | Pass activityId to invocation | Medium |

### 4.5 Kotlin Support (3+ issues)

| Issue | Enhancement |
|-------|-------------|
| [#1845](../repos/temporalio-sdk-java/issues.md#1845) | Kotlin coroutine support in workflows/activities |
| [#2071](../repos/temporalio-sdk-java/issues.md#2071) | KotlinObjectMapperFactory forwards compatibility |
| [#1007](../repos/temporalio-sdk-java/issues.md#1007) | Scala module |

**Recommendation:** Prioritize #1845 - native Kotlin coroutine support would significantly improve DX for Kotlin users.

### 4.6 Library Updates (2 issues)

| Issue | Enhancement |
|-------|-------------|
| [#2746](../repos/temporalio-sdk-java/issues.md#2746) | **Jackson 3 support** (new - 3 upvotes) |
| [#2745](../repos/temporalio-sdk-java/issues.md#2745) | Virtual threads worker option fix (new) |

---

## 5. Issue Housekeeping Recommendations

### 5.1 Issues to Close (Consider)

These issues are very old with no activity and may no longer be relevant:

- Issues older than 4 years with no comments
- Issues superseded by newer implementations
- Issues marked `wontfix` (3 issues: #1698, #1163, #896)

### 5.2 Issues to Consolidate

Several issues should be merged as they describe the same problem:

**Time Skipping Cluster:**
- #2670, #2642, #2392 → Same root cause (sleep hanging)

**Test Server Continue-as-New:**
- #2655, #2364, #1538 → Related continue-as-new issues

**updateWithStart Tracing:**
- #2752, #2620 → Same feature request

### 5.3 Issues Needing Triage

155 issues have had no activity in >12 months. Recommend:
1. Review each for current relevance
2. Request reproduction on current version
3. Close if no response in 30 days

---

## 6. Proposed Roadmap

### Phase 1: Critical Fixes (Immediate)
- [ ] Fix macOS environment config bug (#2754) - coordinate with TypeScript SDK
- [ ] Update all dependencies with CVEs
- [ ] Fix grpc-netty-shaded vulnerability

### Phase 2: Stability (Short-term)
- [ ] Address top 5 test server time-skipping bugs
- [ ] Add Nexus failure support (#2755)
- [ ] Fix activity timeout behavior (#2753)

### Phase 3: Core Bug Fixes (Medium-term)
- [ ] Fix non-determinism bugs (#2307, #1668, #902)
- [ ] Fix worker/activity bugs (#1715, #1257, #1141)
- [ ] Fix interface inheritance (#995, #1050)

### Phase 4: Spring Boot 4 (Medium-term)
- [ ] Spring Boot 4 support (#2738)
- [ ] Spring property placeholder support (#2747)
- [ ] HealthIndicator (#1839)
- [ ] Missing configuration properties

### Phase 5: Observability (Ongoing)
- [ ] Native OpenTelemetry module (#2394)
- [ ] updateWithStart tracing (#2752)
- [ ] Consistent span tags (#862)

### Phase 6: DX Improvements (Long-term)
- [ ] Kotlin coroutine support (#1845)
- [ ] Jackson 3 support (#2746)
- [ ] Activity annotation improvements (#2051)
- [ ] Java Modules support (#1940)

### Ongoing: Housekeeping
- [ ] Triage stale issues
- [ ] Close resolved/outdated issues
- [ ] Consolidate duplicate issues

---

## 7. Quick Reference: Top 20 High-Impact Issues

Combining technical priority with user demand (upvotes):

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #2754 | Bug | 0 | macOS env config (cross-SDK) |
| 2 | #2676 | Security | 1 | CVE in grpc-netty |
| 3 | #1890 | Security | 0 | 9 CVEs in spring-boot-starter |
| 4 | #1693 | Test Server | **16** | listWorkflowExecutions (most upvoted) |
| 5 | #1845 | Enhancement | **15** | Kotlin coroutines (2nd most upvoted) |
| 6 | #1804 | Test Server | **10** | Temporal CLI server from tests |
| 7 | #2755 | Enhancement | 0 | Nexus API failures (new) |
| 8 | #2738 | Enhancement | **7** | Spring Boot 4 support |
| 9 | #2670 | Test Server | 0 | sleep() hangs |
| 10 | #2307 | Bug | 0 | NDE from GetVersion removal |
| 11 | #214 | Enhancement | **6** | @SignalMethod threading |
| 12 | #1668 | Bug | 0 | MutableSideEffect NDE |
| 13 | #995 | Bug | 0 | Interface inheritance broken |
| 14 | #1832 | Enhancement | **4** | Annotations as Meta Annotation |
| 15 | #827 | Enhancement | **4** | Configuration into workflow |
| 16 | #2746 | Enhancement | **3** | Jackson 3 support |
| 17 | #2075 | Enhancement | **3** | Keep heartbeating during shutdown |
| 18 | #2394 | Enhancement | **2** | Native OpenTelemetry |
| 19 | #2642 | Test Server | **2** | sleep incorrect behavior |
| 20 | #2747 | Enhancement | 0 | Spring property placeholders |

**Key Insight:** The most upvoted issues (#1693, #1845, #1804) are all test/DX related, indicating users prioritize developer experience improvements.
