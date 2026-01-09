# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 216
**Total Closed Issues:** 1
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-sdk-java/issues.md)

**Other SDKs:** [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Java SDK has 216 open issues with an extremely low resolution rate (0%), indicating a significant maintenance backlog. The average issue age of 985 days and 72% stale rate suggest historical resource constraints. User demand is concentrated around test server improvements and framework integrations, with Spring Boot 4 and Kotlin coroutine support being highly requested features.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Security Vulnerabilities | 4 | Critical - Dependency vulnerabilities with CVSS scores up to 9.8 |
| Bugs | 33 | High - Core functionality and test environment issues |
| Test Server Issues | 37 | High - Blocking test coverage for users |
| Enhancement Requests | 127 | Medium - Feature expansion opportunities |
| Stale Issues | 156 | Low - Housekeeping needed |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 104 |
| Total Comments | 203 |
| Issues with Upvotes | 37 (17%) |
| Issues with Comments | 86 (40%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 0% (1/217) |
| Median Time to Close | 8 days (calendar) / 7 days (business) |
| Resolved within 30 days | 100% |
| Resolved within 90 days | 100% |

### Recommended Actions

1. **Immediate:** Address 4 security vulnerabilities in dependencies (snakeyaml, logback, kotlin-stdlib)
2. **Short-term:** Fix high-impact test server bugs blocking user test coverage
3. **Medium-term:** Implement listWorkflowExecutions in test server (16 upvotes)
4. **Long-term:** Spring Boot 4 and Jackson 3 support for framework alignment
5. **Housekeeping:** Triage 156 stale issues for closure or roadmap inclusion

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is steadily growing with 37 issues opened and only 1 closed in the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 37 | 1 | +36 |

**Backlog Growing:** 36 more issues opened than closed in the last 12 months. This indicates a need for dedicated maintenance resources.

### Last 6 Months: Detailed Analysis

Recent activity shows consistent issue creation without corresponding resolution.

| Metric | Value |
|--------|-------|
| Issues Opened | 27 |
| Issues Closed | 1 |
| Bugs Closed | 0 |
| Enhancements Completed | 0 |

### Popular Requests Resolved (Last 6 Months)

No high-upvote issues (3+) were resolved in the last 6 months.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1693](../repos/temporalio-sdk-java/issues.md#1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](../repos/temporalio-sdk-java/issues.md#1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](../repos/temporalio-sdk-java/issues.md#1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2738](../repos/temporalio-sdk-java/issues.md#2738) | 7 | 4 | Spring Boot 4 Support |
| 5 | [#214](../repos/temporalio-sdk-java/issues.md#214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](../repos/temporalio-sdk-java/issues.md#1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 7 | [#827](../repos/temporalio-sdk-java/issues.md#827) | 4 | 0 | Provide a recommended way to pass configuration into workflows |
| 8 | [#2746](../repos/temporalio-sdk-java/issues.md#2746) | 3 | 0 | Jackson 3 support |
| 9 | [#2075](../repos/temporalio-sdk-java/issues.md#2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 10 | [#1163](../repos/temporalio-sdk-java/issues.md#1163) | 3 | 1 | Allow contributions of tags of root worker metrics scope |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](../repos/temporalio-sdk-java/issues.md#1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](../repos/temporalio-sdk-java/issues.md#1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#1804](../repos/temporalio-sdk-java/issues.md#1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2738](../repos/temporalio-sdk-java/issues.md#2738) | 18 | Spring Boot 4 Support |
| 5 | [#214](../repos/temporalio-sdk-java/issues.md#214) | 12 | @SignalMethod threading configuration |
| 6 | [#1007](../repos/temporalio-sdk-java/issues.md#1007) | 11 | Scala module |
| 7 | [#952](../repos/temporalio-sdk-java/issues.md#952) | 10 | OpenTracing duplicates user created spans during replay |
| 8 | [#2676](../repos/temporalio-sdk-java/issues.md#2676) | 8 | temporal java sdk is using an older version of grpc-netty-shaded |
| 9 | [#1832](../repos/temporalio-sdk-java/issues.md#1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 10 | [#827](../repos/temporalio-sdk-java/issues.md#827) | 8 | Provide a recommended way to pass configuration into workflows |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 issues)

These dependency security vulnerabilities require immediate attention, particularly the critical-severity issue.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1890](../repos/temporalio-sdk-java/issues.md#1890) | Critical (9.8) | spring-boot-starter-2.7.12: 9 vulnerabilities including CVE-2022-1471 (snakeyaml RCE) |
| [#1952](../repos/temporalio-sdk-java/issues.md#1952) | High (7.5) | ktlint-0.47.1: logback vulnerabilities (CVE-2023-6481, CVE-2023-6378) |
| [#1951](../repos/temporalio-sdk-java/issues.md#1951) | High (7.5) | spring-boot-dependencies-2.7.12: logback-core vulnerability |
| [#1888](../repos/temporalio-sdk-java/issues.md#1888) | Medium (5.3) | kotlin-klib-commonizer-embeddable: kotlin-stdlib vulnerability |

**Remediation:** Upgrade Spring Boot dependencies to 3.x series and update ktlint/kotlin versions. The snakeyaml CVE-2022-1471 is particularly critical as it enables remote code execution.

### Bugs (33 issues)

#### High Priority Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2391](../repos/temporalio-sdk-java/issues.md#2391) | 1 | Cancelling activity results in ACTIVITY_UNKNOWN error on test server |
| [#2046](../repos/temporalio-sdk-java/issues.md#2046) | 2 | Failed promise before calling allOf not failing wrapped promise |
| [#1241](../repos/temporalio-sdk-java/issues.md#1241) | 1 | DynamicWorkflow not respecting WorkflowImplementationOptions |
| [#952](../repos/temporalio-sdk-java/issues.md#952) | 0 | OpenTracing duplicates user created spans during replay |

#### Test Server Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2642](../repos/temporalio-sdk-java/issues.md#2642) | 2 | TestWorkflowEnvironment sleep incorrect behavior after child workflow tests |
| [#2392](../repos/temporalio-sdk-java/issues.md#2392) | 0 | Test environment sleep hangs on child workflows |
| [#1540](../repos/temporalio-sdk-java/issues.md#1540) | 0 | Test service time skipping broken in child workflow |
| [#1538](../repos/temporalio-sdk-java/issues.md#1538) | 0 | Test service continue-as-new implementation not atomic |
| [#1429](../repos/temporalio-sdk-java/issues.md#1429) | 0 | Test server does not error on already-started child workflow |

#### Other Notable Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2307](../repos/temporalio-sdk-java/issues.md#2307) | 0 | Removing Workflow.GetVersion call can cause NDE |
| [#1668](../repos/temporalio-sdk-java/issues.md#1668) | 0 | Subsequent MutableSideEffect calls behave incorrectly in one Workflow Task |
| [#1141](../repos/temporalio-sdk-java/issues.md#1141) | 0 | Deadlock Detector unexpectedly firing on cold JVM |
| [#995](../repos/temporalio-sdk-java/issues.md#995) | 0 | Inheritance of workflow interfaces not supported |

### Test Server Issues (37 issues)

The test server has significant feature gaps that block users from writing comprehensive integration tests. This is a major pain point for Java SDK users.

#### Blocking Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1693](../repos/temporalio-sdk-java/issues.md#1693) | 16 | listWorkflowExecutions not supported - blocks visibility API testing |
| [#1804](../repos/temporalio-sdk-java/issues.md#1804) | 10 | Cannot run Temporal CLI server from tests (unlike TypeScript SDK) |
| [#1426](../repos/temporalio-sdk-java/issues.md#1426) | 0 | Test server timeouts improperly set to 10 years |
| [#1138](../repos/temporalio-sdk-java/issues.md#1138) | 0 | Test server doesn't decrement time skipping lock correctly |

#### Nice-to-Have Improvements

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1920](../repos/temporalio-sdk-java/issues.md#1920) | 0 | Support bind address for test server |
| [#811](../repos/temporalio-sdk-java/issues.md#811) | 2 | Add test framework for partial JSON history replay |

---

## Enhancement Requests (127 issues)

### Framework Integrations

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2738](../repos/temporalio-sdk-java/issues.md#2738) | 7 | Spring Boot 4 support (released Nov 2025) |
| [#2746](../repos/temporalio-sdk-java/issues.md#2746) | 3 | Jackson 3 support (required for full Spring Boot 4 compatibility) |
| [#1832](../repos/temporalio-sdk-java/issues.md#1832) | 4 | Support Temporal annotations as meta annotations |
| [#2747](../repos/temporalio-sdk-java/issues.md#2747) | 0 | @WorkflowImpl should support Spring property placeholders |
| [#1839](../repos/temporalio-sdk-java/issues.md#1839) | 0 | Add HealthIndicator to spring-boot library |

### Language Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1845](../repos/temporalio-sdk-java/issues.md#1845) | 15 | Support Kotlin coroutines in workflows and activities |
| [#1007](../repos/temporalio-sdk-java/issues.md#1007) | 2 | Scala module (community solution: zio-temporal) |
| [#1940](../repos/temporalio-sdk-java/issues.md#1940) | 0 | Support Java Modules (JPMS) |

### Observability & Tracing

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2394](../repos/temporalio-sdk-java/issues.md#2394) | 2 | Pure OpenTelemetry tracing support (without tracer shim) |
| [#1163](../repos/temporalio-sdk-java/issues.md#1163) | 3 | Allow custom tags on root worker metrics scope |
| [#2092](../repos/temporalio-sdk-java/issues.md#2092) | 1 | activity_succeed_endtoend_latency not reported when heartbeating |

### Workflow & Activity Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#214](../repos/temporalio-sdk-java/issues.md#214) | 6 | @SignalMethod threading configuration (single-threaded option) |
| [#827](../repos/temporalio-sdk-java/issues.md#827) | 4 | Recommended way to pass configuration into workflows |
| [#2075](../repos/temporalio-sdk-java/issues.md#2075) | 3 | Keep heartbeating during worker shutdown |
| [#806](../repos/temporalio-sdk-java/issues.md#806) | 0 | Workflow.retry with function to decide retry necessity |
| [#1937](../repos/temporalio-sdk-java/issues.md#1937) | 0 | Support promise-based await |

### API & Client Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2755](../repos/temporalio-sdk-java/issues.md#2755) | 0 | Support Temporal failures in Nexus APIs |
| [#2752](../repos/temporalio-sdk-java/issues.md#2752) | 0 | OpenTracingWorkflowClientCallsInterceptor support for updateWithStart |
| [#1914](../repos/temporalio-sdk-java/issues.md#1914) | 0 | Support cancellation of long client calls |
| [#1913](../repos/temporalio-sdk-java/issues.md#1913) | 0 | Remove WorkflowClientCallsInterceptor.pollWorkflowUpdate |

---

## Recent Issues (Last 30 Days)

| Date | Issue | Upvotes | Title |
|------|-------|-----|-------|
| 2026-01-05 | [#2755](../repos/temporalio-sdk-java/issues.md#2755) | 0 | Support using Temporal failures in Nexus APIs |
| 2026-01-04 | [#2754](../repos/temporalio-sdk-java/issues.md#2754) | 0 | Environment Configuration does not read correct file path on macOS |
| 2025-12-30 | [#2752](../repos/temporalio-sdk-java/issues.md#2752) | 0 | OpenTracingWorkflowClientCallsInterceptor - support for updateWithStart |
| 2025-12-28 | [#2750](../repos/temporalio-sdk-java/issues.md#2750) | 0 | Tests not passing: TestStatsReporter Flush not flushing |
| 2025-12-12 | [#2747](../repos/temporalio-sdk-java/issues.md#2747) | 0 | @WorkflowImpl(workers = "...") should support Spring property placeholders |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

156 issues (72%) have had no activity in over 12 months.

**Close candidates** (likely resolved or no longer relevant):
- [#214](../repos/temporalio-sdk-java/issues.md#214) - @SignalMethod threading (5+ years old, may be addressed differently)
- [#631](../repos/temporalio-sdk-java/issues.md#631) - DeterministicRunner noisy logging (4+ years old)
- Issues related to older Spring Boot 2.x versions

**Needs triage** (require maintainer decision):
- [#1804](../repos/temporalio-sdk-java/issues.md#1804) - CLI server integration (high upvotes but stale)
- [#827](../repos/temporalio-sdk-java/issues.md#827) - Configuration passing pattern (architectural decision needed)
- [#1007](../repos/temporalio-sdk-java/issues.md#1007) - Scala module (community solution exists)

**Keep open** (valid issues awaiting resources):
- [#1693](../repos/temporalio-sdk-java/issues.md#1693) - listWorkflowExecutions (acknowledged, large work item)
- [#1845](../repos/temporalio-sdk-java/issues.md#1845) - Kotlin coroutines (explicit decision to not accept contributions currently)

### Duplicate Candidates

- [#2391](../repos/temporalio-sdk-java/issues.md#2391) and [#2642](../repos/temporalio-sdk-java/issues.md#2642) - Both relate to test server behavior with child workflows
- [#1540](../repos/temporalio-sdk-java/issues.md#1540) and [#1538](../repos/temporalio-sdk-java/issues.md#1538) - Both relate to test server time skipping issues

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Security:** Address all 4 dependency vulnerability issues
  - Upgrade Spring Boot starter to 3.x
  - Update ktlint and kotlin-stdlib versions
  - Upgrade logback transitive dependencies
- **Critical bugs:** Fix test server child workflow interaction issues

### Phase 2: Developer Experience (Short-term)

- **Test server:** Implement listWorkflowExecutions support ([#1693](../repos/temporalio-sdk-java/issues.md#1693))
- **Test server:** Add CLI server integration option ([#1804](../repos/temporalio-sdk-java/issues.md#1804))
- **Bug fixes:** Address OpenTracing replay duplication ([#952](../repos/temporalio-sdk-java/issues.md#952))

### Phase 3: Feature Expansion (Medium-term)

- **Spring Boot 4:** Full support including Jackson 3 ([#2738](../repos/temporalio-sdk-java/issues.md#2738), [#2746](../repos/temporalio-sdk-java/issues.md#2746))
- **Observability:** Native OpenTelemetry support ([#2394](../repos/temporalio-sdk-java/issues.md#2394))
- **Workflow enhancements:** Signal threading configuration ([#214](../repos/temporalio-sdk-java/issues.md#214))

### Phase 4: Maintenance (Ongoing)

- **Stale issue cleanup:** Review and close/update 156 stale issues
- **Documentation:** Clarify workarounds for known limitations
- **Dependency updates:** Regular security scanning and updates
- **Backlog reduction:** Target net-negative monthly issue velocity
