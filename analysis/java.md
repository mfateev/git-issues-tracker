# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** January 13, 2026
**Total Open Issues:** 217
**Total Closed Issues:** 724
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The Java SDK maintains a healthy 77% resolution rate with a shrinking backlog (44 more issues closed than opened in the last 12 months), indicating strong maintenance momentum. However, the SDK faces significant challenges in three key areas: security vulnerabilities in transitive dependencies (4 open, including critical severity CVEs), test server feature gaps affecting testing capabilities, and a substantial 72% stale issue rate requiring triage. User demand centers around testing improvements, Spring Boot framework support, and Kotlin/coroutine integration.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Security Vulnerabilities | 4 open | **Critical** - Includes CVE-2022-1471 (CVSS 9.8) in snakeyaml |
| Test Server Issues | 37 open | **High** - Major gaps affecting testing workflows |
| Bugs | 33 open | **Medium** - Many related to test framework and edge cases |
| Enhancements | 127 open | **Medium** - Strong user demand for framework integrations |
| Stale Issues (>12 months) | 156 (72%) | **Low** - Needs systematic triage for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 104 |
| Total Comments | 205 |
| Issues with Upvotes | 37 (17%) |
| Issues with Comments | 87 (40%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (724/941) |
| Median Time to Close | 27 days (calendar) / 20 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 66% |

### Recommended Actions

1. **Immediate:** Address security vulnerabilities, especially Spring Boot starter dependencies with critical CVEs
2. **Short-term:** Implement test server `listWorkflowExecutions` support (16 upvotes) and improve test environment reliability
3. **Medium-term:** Add Spring Boot 4 support and evaluate Jackson 3 compatibility
4. **Long-term:** Expand Kotlin coroutine support and explore CLI-based test server integration
5. **Housekeeping:** Triage 156 stale issues for closure or update decisions

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is healthy and shrinking, with significant progress in May 2025 (55 closures) and June 2025 (27 closures).

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 121 | 165 | -44 |

**Backlog Shrinking:** 44 more issues closed than opened in the last 12 months. The team demonstrated strong maintenance velocity, particularly in Q2 2025.

### Last 6 Months: Detailed Analysis

Recent activity shows consistent progress with a 66% median resolution within 30 days for newly opened issues.

| Metric | Value |
|--------|-------|
| Issues Opened | 60 |
| Issues Closed | 50 |
| Bugs Closed | 2 |
| Enhancements Completed | 21 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#1849](https://github.com/temporalio/sdk-java/issues/1849) | 9 | Expose an async API to start a workflow which would allow getting the run ID |
| [#2665](https://github.com/temporalio/sdk-java/issues/2665) | 6 | Serialization with `kotlinx.serialization` |
| [#2724](https://github.com/temporalio/sdk-java/issues/2724) | 5 | Allow Configuration Option to Enable Spring Application Startup Even When Temporal is Unavailable |
| [#2671](https://github.com/temporalio/sdk-java/issues/2671) | 3 | Tracing - Native OpenTelemetry Interceptors |
| [#704](https://github.com/temporalio/sdk-java/issues/704) | 3 | Allow exception logging to be customizable for activity workers |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | 4 | Spring Boot 4 Support |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 7 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflows |
| 8 | [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | 0 | Jackson 3 support |
| 9 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 10 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metrics scope per task queue |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 18 | Spring Boot 4 Support |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 12 | @SignalMethod threading configuration |
| 6 | [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 11 | Scala module |
| 7 | [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| 8 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 8 | temporal java sdk is using an older version of grpc-netty-shaded with vulnerabilities |
| 9 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 10 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 8 | Provide a recommended way to pass configuration into workflows |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 open issues)

Security vulnerabilities are concentrated in transitive dependencies, primarily affecting Spring Boot and Kotlin modules. The most severe issue involves a critical remote code execution vulnerability.

| Issue | Severity | Affected Component | Description |
|-------|----------|-------------------|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | **Critical (9.8)** | spring-boot-starter | 9 vulnerabilities including CVE-2022-1471 (snakeyaml RCE) |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | High (7.5) | ktlint | 2 vulnerabilities in logback-classic/core |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | High (7.5) | spring-boot-dependencies | CVE-2023-6481 in logback-core |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | Medium (5.3) | kotlin-klib-commonizer | CVE-2022-24329 in kotlin-stdlib |

**Recommendation:** The Spring Boot starter vulnerability ([#1890](https://github.com/temporalio/sdk-java/issues/1890)) is critical and should be prioritized. Upgrading to Spring Boot 3.2.0+ would resolve the snakeyaml issue. The logback vulnerabilities require updates across multiple modules.

### Test Server Issues (37 open issues)

The test server is a significant pain point, with gaps in feature parity versus production behavior. Key missing capabilities include workflow listing APIs and proper timeout enforcement.

#### High-Priority Test Server Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | Support listWorkflowExecutions - blocks testing workflows that need to query executions |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Add CLI server support - would provide full feature parity for testing |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | TestWorkflowEnvironment sleep incorrect behaviour |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | Test server timeouts improperly set to 10 years when not used |

#### Recent Test Server Issues

| Issue | Description |
|-------|-------------|
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | TestWorkflowEnvironment#sleep hangs indefinitely |
| [#2661](https://github.com/temporalio/sdk-java/issues/2661) | Set history size and suggest continue as new on task start attributes |
| [#2655](https://github.com/temporalio/sdk-java/issues/2655) | Testing server continue-as-new doesn't carry memo/search attributes |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | Test environment sleep hangs on child workflows |

#### Test Server Feature Gaps

| Issue | Description |
|-------|-------------|
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | Test service time skipping broken in child workflow |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | Test service continue-as-new implementation is not atomic |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | Test server does not error on already-started child workflow |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Test server does not decrement time skipping lock |
| [#1079](https://github.com/temporalio/sdk-java/issues/1079) | Issue with TestWorkflowEnvironment and ParentClosePolicy |
| [#1069](https://github.com/temporalio/sdk-java/issues/1069) | TestWorkflowEnvironment schedules first activity retry immediately |

### Bugs (33 open issues)

The bug list includes a mix of test framework issues, workflow determinism problems, and edge cases in core functionality.

#### High-Priority Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | Cancelling an activity results in FailedPrecondition |
| [#1715](https://github.com/temporalio/sdk-java/issues/1715) | 1 | WorkerOptions should enforce executor count constraints |
| [#1246](https://github.com/temporalio/sdk-java/issues/1246) | 1 | Query not picked up by worker executing local activity |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | DynamicWorkflow not respecting WorkflowImplementationOptions |
| [#1211](https://github.com/temporalio/sdk-java/issues/1211) | 1 | MDC context logging not propagating inside promises |

#### Workflow Determinism Bugs

| Issue | Description |
|-------|-------------|
| [#2307](https://github.com/temporalio/sdk-java/issues/2307) | Removing a Workflow.GetVersion call can cause NDE if there are signals |
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | Subsequent MutableSideEffect calls inside one Workflow Task can overwrite |
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | Failed promise before calling allOf is not failing the wrapper |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | Exception in one of several parallel workflow async functions not propagated |

#### Activity/Worker Bugs

| Issue | Description |
|-------|-------------|
| [#1257](https://github.com/temporalio/sdk-java/issues/1257) | Cached activity heartbeat prevents worker from quick shutdown |
| [#1141](https://github.com/temporalio/sdk-java/issues/1141) | Deadlock Detector unexpectedly firing on cold JVM |
| [#731](https://github.com/temporalio/sdk-java/issues/731) | Activities returning with interrupted flag should be successful |
| [#860](https://github.com/temporalio/sdk-java/issues/860) | Too large blob as Activity input causes non-deterministic error |

### Tracing & Observability Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 0 | Pure OpenTelemetry based tracing support instead of using tracing-opentracing |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | OpenTracingWorkflowClientCallsInterceptor - support for updateWithStart |

---

## Enhancement Requests (127 open issues)

### Spring Boot & Framework Integration

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | Spring Boot 4 Support - with modularization changes |
| [#2758](https://github.com/temporalio/sdk-java/issues/2758) | 0 | Spring Metrics Configuration fails with Spring Boot 4 |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | @WorkflowImpl(workers) should support Spring property placeholders |

### Kotlin & Coroutine Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Support different coroutine models in workflows and activities |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module - alternative JVM language support |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Add the possibility to run Temporal CLI server from test |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | Add test framework for partial json history replay |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | Extend TestWorkflowExtension to support specifying options |

### Serialization & Data

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | Jackson 3 support - required for full Spring Boot 4 compatibility |

### Worker & Activity Options

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Add the ability to keep heartbeating while the worker is shutting down |
| [#2741](https://github.com/temporalio/sdk-java/issues/2741) | 1 | Support non-workflow activities |
| [#2726](https://github.com/temporalio/sdk-java/issues/2726) | 0 | Allow overriding Worker Deployment Version for Child Workflow |
| [#2716](https://github.com/temporalio/sdk-java/issues/2716) | 0 | Worker Heartbeating |

### API & Annotations

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support for using Temporal Annotations as Meta Annotation |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Provide a recommended way to pass configuration into workflows |

### Metrics & Observability

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Allow contributions of tags of root worker metrics scope per task queue |
| [#2733](https://github.com/temporalio/sdk-java/issues/2733) | 0 | activity_schedule_to_start_latency reports activity_type unexpectedly |

### Nexus Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2755](https://github.com/temporalio/sdk-java/issues/2755) | 0 | Support using Temporal failures in Nexus APIs |

---

## Housekeeping Recommendations

### Stale Issues (156 open issues with no activity >12 months)

The SDK has a high percentage (72%) of stale issues requiring systematic triage.

**Top Stale Issues by Upvotes:**

| Issue | Upvotes | Last Updated | Title |
|-------|-----|--------------|-------|
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 2023-06-30 | Add the possibility to run Temporal CLI server from test |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 2020-09-18 | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 2023-08-01 | Support for using Temporal Annotations as Meta Annotation |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 2021-10-19 | Provide a recommended way to pass configuration into workflows |

**Triage Recommendations:**

- **Close candidates:** Issues from 2020-2021 with no upvotes or comments that may be resolved
- **Needs decision:** Long-standing feature requests without clear priority ([#214](https://github.com/temporalio/sdk-java/issues/214), [#827](https://github.com/temporalio/sdk-java/issues/827))
- **Keep open:** High-upvote issues still relevant ([#1804](https://github.com/temporalio/sdk-java/issues/1804), [#1832](https://github.com/temporalio/sdk-java/issues/1832))

### Duplicate Candidates

Based on title and description analysis, these issues may overlap:

- Test server sleep issues: [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2392](https://github.com/temporalio/sdk-java/issues/2392) - all related to sleep behavior
- Test environment time skipping: [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1138](https://github.com/temporalio/sdk-java/issues/1138)
- Observability/tracing: [#2394](https://github.com/temporalio/sdk-java/issues/2394) overlaps with [#2671](https://github.com/temporalio/sdk-java/issues/2671) (resolved)

---

## Proposed Roadmap

Based on user demand, security priorities, and issue analysis:

### Phase 1: Security & Stability (Immediate)

- **P0:** Update Spring Boot dependencies to resolve critical CVE-2022-1471 ([#1890](https://github.com/temporalio/sdk-java/issues/1890))
- **P0:** Update logback dependencies across all affected modules ([#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952))
- **P1:** Update Kotlin stdlib to 1.6.0+ ([#1888](https://github.com/temporalio/sdk-java/issues/1888))
- **P1:** Address grpc-netty-shaded vulnerability concerns ([#2676](https://github.com/temporalio/sdk-java/issues/2676))

### Phase 2: Testing Experience (Short-term)

- Implement `listWorkflowExecutions` in test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693)) - 16 upvotes
- Fix test environment sleep reliability ([#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2642](https://github.com/temporalio/sdk-java/issues/2642))
- Investigate CLI-based test server integration ([#1804](https://github.com/temporalio/sdk-java/issues/1804)) - 10 upvotes
- Fix continue-as-new behavior in test server ([#2655](https://github.com/temporalio/sdk-java/issues/2655))

### Phase 3: Framework Support (Medium-term)

- Complete Spring Boot 4 support ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) - 7 upvotes
- Evaluate Jackson 3 compatibility requirements ([#2746](https://github.com/temporalio/sdk-java/issues/2746)) - 3 upvotes
- Address Spring metrics configuration issues ([#2758](https://github.com/temporalio/sdk-java/issues/2758))

### Phase 4: Developer Experience (Long-term)

- Evaluate Kotlin coroutine support expansion ([#1845](https://github.com/temporalio/sdk-java/issues/1845)) - 15 upvotes
- Implement @SignalMethod threading configuration ([#214](https://github.com/temporalio/sdk-java/issues/214)) - 6 upvotes
- Add meta-annotation support ([#1832](https://github.com/temporalio/sdk-java/issues/1832)) - 4 upvotes
- Improve workflow configuration patterns ([#827](https://github.com/temporalio/sdk-java/issues/827)) - 4 upvotes

### Phase 5: Maintenance (Ongoing)

- Systematic triage of 156 stale issues
- Consolidate duplicate test server issues
- Update tracing support for modern OpenTelemetry ([#952](https://github.com/temporalio/sdk-java/issues/952), [#2394](https://github.com/temporalio/sdk-java/issues/2394))
- Document workarounds for common test server limitations

---

## Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 5 | 2% |
| 1-3 months | 9 | 4% |
| 3-6 months | 11 | 5% |
| 6-12 months | 17 | 8% |
| 1-2 years | 38 | 18% |
| 2-3 years | 33 | 15% |
| 3+ years | 104 | 48% |

Nearly half of open issues are over 3 years old, indicating a significant backlog of older feature requests and lower-priority bugs that warrant triage attention.
