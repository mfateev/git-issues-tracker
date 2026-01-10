# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 217
**Total Closed Issues:** 724
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Java SDK has a mature codebase with 941 total issues (77% resolution rate), reflecting its position as one of the most established Temporal SDKs. The backlog is actively shrinking (44 more issues closed than opened in the last 12 months), indicating healthy maintenance. However, 72% of open issues are stale (>12 months old), with 48% being over 3 years old, suggesting a need for aggressive triage. Key user demands center around virtual threads (Project Loom), test server improvements, Spring Boot 4 ecosystem integration, and Kotlin coroutine support.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Test Server Issues | 37 | High - Blocks testing capabilities for users |
| Bugs | 33 | High - Active defects affecting production usage |
| Spring Boot Integration | 31 | High - Spring Boot 4 support highly requested |
| Enhancements | 127 | Medium - Many are feature requests awaiting prioritization |
| Security Vulnerabilities | 4 | Medium - Build/dev dependency vulnerabilities, most in alpha modules |
| Stale Issues | 156 | Medium - 72% of backlog needs triage decision |

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
| Resolution Rate | 77% (724/941) |
| Median Time to Close | 27 days (calendar) / 20 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 66% |

### Recommended Actions

1. **Immediate:** Triage 4 open security vulnerabilities - most are in build tools (ktlint) or alpha Spring Boot modules using older dependencies
2. **Short-term:** Implement `listWorkflowExecutions` in test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693) - 16 upvotes) - blocks testing for many users
3. **Medium-term:** Spring Boot 4 support ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) and Jackson 3 support ([#2746](https://github.com/temporalio/sdk-java/issues/2746)) as ecosystem modernizes
4. **Long-term:** Virtual threads support ([#1448](https://github.com/temporalio/sdk-java/issues/1448) - 25 upvotes) - highest community demand for modern JVM features
5. **Housekeeping:** Triage 156 stale issues - close resolved/obsolete ones, mark valid long-term items appropriately

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Java SDK shows a healthy trend with more issues being closed than opened, indicating active maintenance and resolution of the backlog.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 121 | 165 | -44 |

Backlog Shrinking: The team has closed 44 more issues than were opened, demonstrating active maintenance. Notable spikes in closures occurred in May 2025 (-44 net) and June 2025 (-19 net).

### Last 6 Months: Detailed Analysis

The last 6 months show continued progress, though the pace of closures has slowed compared to the May-June spike.

| Metric | Value |
|--------|-------|
| Issues Opened | 66 |
| Issues Closed | 54 |
| Bugs Closed | 2 |
| Enhancements Completed | 24 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 137 | 99 |
| Median Time to Close | 6 | 4 |
| 90th Percentile | 482 | 344 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#1849](https://github.com/temporalio/sdk-java/issues/1849) | 9 | Expose an async API to start a workflow which would allow mapping it to a Kotlin coroutine |
| [#2665](https://github.com/temporalio/sdk-java/issues/2665) | 6 | Serialization with `kotlinx.serialization` |
| [#2724](https://github.com/temporalio/sdk-java/issues/2724) | 5 | Allow Configuration Option to Enable Spring Application Startup Even When Temporal is Unavailable |
| [#2671](https://github.com/temporalio/sdk-java/issues/2671) | 3 | Tracing - Native OpenTelemetry Interceptors |
| [#704](https://github.com/temporalio/sdk-java/issues/704) | 3 | Allow exception logging to be customizable for activity failures |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1448](https://github.com/temporalio/sdk-java/issues/1448) | 25 | 1 | Support for virtual threads (Project Loom) |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 3 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 4 | [#8](https://github.com/temporalio/sdk-java/issues/8) | 11 | 1 | Spring Boot Integration |
| 5 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 6 | [#587](https://github.com/temporalio/sdk-java/issues/587) | 10 | 15 | Set TemporalChangeVersion when workflow version is updated |
| 7 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | 4 | Spring Boot 4 Support |
| 8 | [#623](https://github.com/temporalio/sdk-java/issues/623) | 7 | 1 | Upsert memo support |
| 9 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 10 | [#865](https://github.com/temporalio/sdk-java/issues/865) | 5 | 2 | Add init method to workflow |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1448](https://github.com/temporalio/sdk-java/issues/1448) | 51 | Support for virtual threads (Project Loom) |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 3 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 4 | [#587](https://github.com/temporalio/sdk-java/issues/587) | 35 | Set TemporalChangeVersion when workflow version is updated |
| 5 | [#8](https://github.com/temporalio/sdk-java/issues/8) | 23 | Spring Boot Integration |
| 6 | [#2100](https://github.com/temporalio/sdk-java/issues/2100) | 22 | Scheduled workflow retries do not work |
| 7 | [#1407](https://github.com/temporalio/sdk-java/issues/1407) | 22 | ARM64 build for Test Server |
| 8 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 9 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 18 | Spring Boot 4 Support |
| 10 | [#623](https://github.com/temporalio/sdk-java/issues/623) | 15 | Upsert memo support |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 open issues)

These dependency vulnerabilities are primarily in build tools or alpha Spring Boot modules. The maintainers note that some (like grpc-netty-shaded CVE-2025-55163) do not apply to how the SDK uses Netty (client-only). Users can override gRPC versions as a workaround.

| Issue | Severity | Description |
|-------|-----|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | Critical (9.8) | spring-boot-starter-2.7.12 - snakeyaml RCE vulnerability (alpha module) |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | High (7.5) | ktlint-0.47.1 - logback serialization DoS (build tool) |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | High (7.5) | spring-boot-dependencies-2.7.12 - logback vulnerability (alpha module) |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | Medium (5.3) | kotlin-klib-commonizer-1.5.32 - Kotlin stdlib vulnerability (build tool) |

**Note:** Issue [#2676](https://github.com/temporalio/sdk-java/issues/2676) regarding grpc-netty-shaded CVE-2025-55163 remains open but the maintainers have clarified this does not apply to the SDK's client-only usage of Netty. Users can override gRPC versions by importing the gRPC BOM in their dependency management.

**Recommendation:** The critical Spring Boot vulnerabilities are in alpha modules using Spring Boot 2.7.x. Consider upgrading these modules to Spring Boot 3.x or clearly documenting the alpha status and recommending users override vulnerable transitive dependencies.

### Test Server Issues (37 open issues)

The test server is a significant pain point for Java SDK users. Many test scenarios that work with a real Temporal server fail with the test server due to missing functionality.

**Blocking Issues:**

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | listWorkflowExecutions not supported - blocks workflow listing in tests. Maintainers confirm this requires adding search attribute support, which is substantial work. |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Cannot run Temporal CLI server from tests - other SDKs (TypeScript) support this via `TestWorkflowEnvironment.createLocal()` |
| [#1407](https://github.com/temporalio/sdk-java/issues/1407) | 0 | ARM64 build for Test Server (22 comments - significant discussion) |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | TestWorkflowEnvironment sleep incorrect behavior |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | Test server timeouts improperly set to 10 years - caused production issues for users who relied on test validation |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | 0 | Time skipping broken in child workflows |

**Missing Functionality:**

| Issue | Description |
|-------|-------------|
| [#2388](https://github.com/temporalio/sdk-java/issues/2388) | Schedule testing not supported (3 upvotes) |
| [#1158](https://github.com/temporalio/sdk-java/issues/1158) | DescribeNamespace not implemented |
| [#1093](https://github.com/temporalio/sdk-java/issues/1093) | ResetWorkflowExecution not supported |
| [#1788](https://github.com/temporalio/sdk-java/issues/1788) | Build ID versioning not supported |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | Does not error on already-started child workflow |
| [#2219](https://github.com/temporalio/sdk-java/issues/2219) | User metadata support missing |

**Time Skipping Issues:**

| Issue | Description |
|-------|-------------|
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | TestWorkflowEnvironment#sleep hangs indefinitely |
| [#2283](https://github.com/temporalio/sdk-java/issues/2283) | Auto-skip time not working when waiting on update result |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Does not decrement time skipping lock for outstanding activities |

### Bugs (33 open issues)

**High Priority Bugs:**

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1536](https://github.com/temporalio/sdk-java/issues/1536) | 3 | Activity stub throws IllegalArgumentException from toString method (good first issue) |
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | 2 | Failed promise before calling allOf is not failing the wrapped promise - confirmed bug with workaround provided |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | Cancelling an activity results in FailedPrecondition: ACTIVITY_UNKNOWN error |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | OpenTracing duplicates user created spans during replay (10 comments, complex fix required) |
| [#1698](https://github.com/temporalio/sdk-java/issues/1698) | 0 | WorkflowImplementationOptions.FailWorkflowExceptionTypes ignored for service failures (7 comments) |

**State Machine & Determinism Issues:**

| Issue | Description |
|-------|-------------|
| [#2307](https://github.com/temporalio/sdk-java/issues/2307) | Removing Workflow.GetVersion can cause NDE with parallel threads |
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | Subsequent MutableSideEffect calls inside one Workflow Task may explode with non-determinism |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | State machine exception during termination |

**Test Environment Issues:**

| Issue | Description |
|-------|-------------|
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | Test environment sleep hangs on child workflows |
| [#1291](https://github.com/temporalio/sdk-java/issues/1291) | Workflow.await times out in unit tests with time skipping |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Test server does not decrement time skipping lock for outstanding activities |

---

## Enhancement Requests (127 open issues)

### JVM Modernization (Virtual Threads & Kotlin)

The highest user demand is for modern JVM feature support, particularly Project Loom virtual threads and Kotlin coroutines.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1448](https://github.com/temporalio/sdk-java/issues/1448) | 25 | **Support for virtual threads (Project Loom)** - Highest community demand. Would enable more efficient workflow and activity execution on modern JVMs. |
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Kotlin coroutine support in workflows and activities - maintainers confirm no active plans but SDK now supports Java Virtual Threads (JDK 21+) |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module - community has created [zio-temporal](https://github.com/vitaliihonta/zio-temporal) |
| [#1489](https://github.com/temporalio/sdk-java/issues/1489) | 2 | Support Scala references to workflow methods |
| [#2595](https://github.com/temporalio/sdk-java/issues/2595) | 0 | Support for Kotlin 2.0 and newer gRPC/Netty versions |

**Note:** The SDK now supports Java Virtual Threads (JDK 21+), which provides some benefits similar to coroutines. However, Kotlin coroutine support for first-class `suspend fun` calls remains highly requested. Users note that bridging workflow/activity context thread locals into coroutine contexts requires extra work.

### Spring Boot Integration (31 issues, 22 upvotes)

Spring Boot is the most popular framework for Java enterprise applications, and Temporal's integration is a key adoption driver. With Spring Boot 4 released in November 2025, users are already requesting support.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | Spring Boot 4 Support - requires investigation due to modularization changes. Jackson 3 support also needed for full compatibility. |
| [#2758](https://github.com/temporalio/sdk-java/issues/2758) | 0 | Spring Metrics Configuration fails with Spring Boot 4 (reported 2026-01-09) |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | @WorkflowImpl should support Spring property placeholders |
| [#1837](https://github.com/temporalio/sdk-java/issues/1837) | 3 | Use Spring Boot ApplicationReadyEvent to start workers |
| [#1799](https://github.com/temporalio/sdk-java/issues/1799) | 1 | Add support for multiple namespaces |
| [#1984](https://github.com/temporalio/sdk-java/issues/1984) | 1 | Customizing workflow options by workflow type |
| [#1823](https://github.com/temporalio/sdk-java/issues/1823) | 1 | Config flag to disable temporal entirely with spring-boot-auto-configure |
| [#1647](https://github.com/temporalio/sdk-java/issues/1647) | 1 | Allow WorkflowImplementationOptions via config |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | Add HealthIndicator to spring-boot library |
| [#1840](https://github.com/temporalio/sdk-java/issues/1840) | 0 | Spring Boot 3 native image support |

### Observability & Tracing (17 issues, 5 upvotes)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 2 | Pure OpenTelemetry-based tracing instead of tracer shim |
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | Fix OpenTracing span duplication during replay - complex issue requiring careful handling of span lifecycle during replays |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Allow custom metric tags per workflow execution |
| [#2117](https://github.com/temporalio/sdk-java/issues/2117) | 0 | Allow customization of OTel span tags |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | OpenTracingWorkflowClientCallsInterceptor - support for updates |

### Workflow & Activity Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-java/issues/587) | 10 | Set TemporalChangeVersion when workflow version is updated |
| [#623](https://github.com/temporalio/sdk-java/issues/623) | 7 | Upsert memo support |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | @SignalMethod threading configuration - control signal dispatch (single-threaded vs multi-threaded) |
| [#865](https://github.com/temporalio/sdk-java/issues/865) | 5 | Add init method to workflow |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support Temporal annotations as meta-annotations |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Provide a recommended way to pass configuration into workflow |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Keep heartbeating during worker shutdown |
| [#1333](https://github.com/temporalio/sdk-java/issues/1333) | 3 | High-level API for schedules |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | Jackson 3 support - required for full Spring Boot 4 compatibility. Jackson 3 has entirely different packages/artifacts. |
| [#2498](https://github.com/temporalio/sdk-java/issues/2498) | 0 | Make Jackson serialization optional/separate module |
| [#139](https://github.com/temporalio/sdk-java/issues/139) | 2 | Need ability to modify ObjectMapper in JacksonJsonPayloadConverter |

### Worker & Activity Management

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1256](https://github.com/temporalio/sdk-java/issues/1256) | 6 | Last cached activity heartbeat should be drained with completion |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Add ability to keep heartbeating during worker shutdown |
| [#704](https://github.com/temporalio/sdk-java/issues/704) | 3 | Allow exception logging to be customizable for activity failures |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Allow contributions of tags to root worker metrics scope |

### Dependency Management

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 1 | Update grpc-netty-shaded for CVE-2025-55163 - users can override with gRPC BOM but some report compatibility issues with temporal-testing module |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

156 issues (72% of open issues) have had no activity for over 12 months. This represents significant technical debt that obscures actual priorities.

**Close Candidates (likely resolved or obsolete):**

- Old Spring Boot 2.x related issues in alpha modules
- GraalVM native image issues that may have been addressed in recent versions
- Very old API suggestions (some from 2020) that were likely superseded by other work

**Needs Triage:**

| Issue | Upvotes | Last Updated | Notes |
|-------|-----|--------------|-------|
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 2023-06-30 | CLI server support - valid request, other SDKs have this |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 2020-09-18 | Signal threading - valid but 5+ years old |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 2021-10-19 | Config passing - still relevant |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 2024-11-22 | Heartbeat during shutdown - valid |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | 2021-10-11 | Partial replay testing - may be addressed |

**Keep Open (valid long-term requests):**

- [#1448](https://github.com/temporalio/sdk-java/issues/1448) - Virtual threads (25 upvotes, highest community demand)
- [#1845](https://github.com/temporalio/sdk-java/issues/1845) - Kotlin coroutines (15 upvotes, explicitly not planned but highly requested)
- [#1693](https://github.com/temporalio/sdk-java/issues/1693) - listWorkflowExecutions in test server (16 upvotes, confirmed large work item)
- [#2738](https://github.com/temporalio/sdk-java/issues/2738) - Spring Boot 4 (7 upvotes, actively being considered)

### Duplicate Candidates

- [#2594](https://github.com/temporalio/sdk-java/issues/2594) and [#2595](https://github.com/temporalio/sdk-java/issues/2595) - Both request Kotlin 2.0 support
- Multiple gRPC upgrade requests ([#2676](https://github.com/temporalio/sdk-java/issues/2676), [#2565](https://github.com/temporalio/sdk-java/issues/2565), [#1985](https://github.com/temporalio/sdk-java/issues/1985), [#918](https://github.com/temporalio/sdk-java/issues/918)) - Consider consolidating into a tracking issue

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate - Q1 2026)

- **Dependencies:** Upgrade Spring Boot alpha modules from 2.7.x to 3.x to resolve critical CVEs
- **Dependencies:** Document gRPC version override pattern in README for users with vulnerability scanners
- **Bugs:** Fix Activity stub toString ([#1536](https://github.com/temporalio/sdk-java/issues/1536)) - good first issue
- **Bugs:** Fix Promise.allOf not failing on pre-failed promises ([#2046](https://github.com/temporalio/sdk-java/issues/2046))
- **Bugs:** Address DynamicWorkflow options issue ([#1241](https://github.com/temporalio/sdk-java/issues/1241))

### Phase 2: Developer Experience (Short-term - Q2 2026)

- **Test Server:** Implement listWorkflowExecutions ([#1693](https://github.com/temporalio/sdk-java/issues/1693)) - highest user demand
- **Test Server:** Fix time skipping issues with child workflows ([#1540](https://github.com/temporalio/sdk-java/issues/1540))
- **Test Server:** Schedule testing support ([#2388](https://github.com/temporalio/sdk-java/issues/2388))
- **Spring Boot:** Investigate Spring Boot 4 compatibility ([#2738](https://github.com/temporalio/sdk-java/issues/2738))
- **Worker:** Implement heartbeat continuation during shutdown ([#2075](https://github.com/temporalio/sdk-java/issues/2075))

### Phase 3: Feature Expansion (Medium-term - Q3-Q4 2026)

- **JVM Modernization:** Virtual threads support ([#1448](https://github.com/temporalio/sdk-java/issues/1448)) - highest priority based on community demand
- **Serialization:** Jackson 3 support ([#2746](https://github.com/temporalio/sdk-java/issues/2746))
- **Test Server:** Enable running Temporal CLI server from tests ([#1804](https://github.com/temporalio/sdk-java/issues/1804))
- **API:** @SignalMethod threading configuration ([#214](https://github.com/temporalio/sdk-java/issues/214))
- **API:** Meta-annotation support ([#1832](https://github.com/temporalio/sdk-java/issues/1832))
- **Workflow:** TemporalChangeVersion support ([#587](https://github.com/temporalio/sdk-java/issues/587))

### Phase 4: Maintenance (Ongoing)

- **Housekeeping:** Triage and close 100+ stale issues
- **Housekeeping:** Consolidate duplicate gRPC/dependency upgrade requests
- **Documentation:** Improve guidance on dependency overrides
- **Long-term:** Continue monitoring Kotlin coroutine demand ([#1845](https://github.com/temporalio/sdk-java/issues/1845))
