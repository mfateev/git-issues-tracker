# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 215
**Total Closed Issues:** 726
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Java SDK maintains a healthy 77% resolution rate with a shrinking backlog (46 more issues closed than opened in the past 12 months). However, 73% of open issues are stale (no activity >12 months), indicating a need for systematic triage. Key user demand centers around modern Java features (virtual threads, Kotlin coroutines), test server improvements, and Spring Boot integration enhancements.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 127 | Medium - High user demand for modern Java features and Spring integration |
| Test Server Issues | 45 | High - Critical for developer experience and CI/CD workflows |
| Bugs | 33 | Medium - Mix of edge cases and test environment issues |
| Security Vulnerabilities | 4 | High - Dependency vulnerabilities requiring remediation |
| Stale Issues | 156 | Low - Require triage to close or reactivate |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 104 |
| Total Comments | 207 |
| Issues with Upvotes | 37 (17%) |
| Issues with Comments | 88 (41%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (726/941) |
| Median Time to Close | 27 days (calendar) / 20 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 66% |

### Recommended Actions

1. **Immediate:** Address 4 open security vulnerabilities related to dependency versions (grpc, Spring Boot, okhttp, guava)
2. **Short-term:** Prioritize test server improvements ([#1693](https://github.com/temporalio/sdk-java/issues/1693) listWorkflowExecutions) to unblock developer testing
3. **Medium-term:** Implement virtual threads support ([#1448](https://github.com/temporalio/sdk-java/issues/1448)) and Kotlin coroutine models ([#1845](https://github.com/temporalio/sdk-java/issues/1845))
4. **Long-term:** Complete Spring Boot 4 support ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) and Jackson 3 compatibility ([#2746](https://github.com/temporalio/sdk-java/issues/2746))
5. **Housekeeping:** Triage 156 stale issues - close outdated ones, refresh valid ones with updated context

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Java SDK backlog is actively shrinking, with consistent closure rates exceeding new issue creation.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 121 | 167 | -46 |

**Backlog Shrinking:** The team closed 46 more issues than were opened, demonstrating healthy maintenance velocity.

### Last 6 Months: Detailed Analysis

Recent activity shows continued focus on feature completion and bug fixes, with particular attention to Spring Boot integration and Nexus support.

| Metric | Value |
|--------|-------|
| Issues Opened | 57 |
| Issues Closed | 50 |
| Bugs Closed | 2 |
| Enhancements Completed | 21 |

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
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | 4 | Spring Boot 4 Support |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 7 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflow |
| 8 | [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | 0 | Jackson 3 support |
| 9 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 10 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metricsscope per workflow/activity type |

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
| 8 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 8 | temporal java sdk is using an older version of grpc-netty-shaded |
| 9 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 10 | [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 8 | DynamicWorkflow not taking in account WorkflowImplementationOptions |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 open issues)

Active dependency security vulnerabilities requiring attention. These are automatically detected by security scanning tools.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#2676](https://github.com/temporalio/sdk-java/issues/2676) | High | grpc-netty-shaded outdated version with known vulnerabilities |
| [#1990](https://github.com/temporalio/sdk-java/issues/1990) | High (7.1) | grpc-api-1.54.1.jar vulnerability |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | High (7.5) | spring-boot-dependencies-2.7.12.pom vulnerability |
| [#1842](https://github.com/temporalio/sdk-java/issues/1842) | High (7.5) | okhttp-4.10.0.jar vulnerability |

**Recommendation:** Prioritize dependency updates as part of routine maintenance cycles.

### Test Server & Testing Framework (45 open issues)

The test server and testing framework represent a significant area of user pain. Issues range from missing functionality to time-skipping bugs.

#### High Priority - Blocking Developer Workflows

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Add the possibility to run Temporal CLI server from test |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | TestWorkflowEnvironment sleep incorrect behaviour |
| [#1407](https://github.com/temporalio/sdk-java/issues/1407) | 0 | ARM64 build for Test Server (22 comments) |

#### Time-Skipping Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | 0 | TestWorkflowEnvironment#sleep hangs indefinitely |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | 0 | Test environment sleep hangs on child workflows |
| [#2283](https://github.com/temporalio/sdk-java/issues/2283) | 0 | Auto-skip time in time-skipping testing environment when waiting on update result |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | 0 | Test service time skipping broken in a child workflow |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | 0 | Test server does not decrement time skipping lock for outstanding activities |

#### Missing Test Server Features

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2666](https://github.com/temporalio/sdk-java/issues/2666) | 0 | Test server needs to set metadata `type` for search attribute payloads |
| [#2655](https://github.com/temporalio/sdk-java/issues/2655) | 0 | Testing server continue-as-new doesn't carry memo/search attributes |
| [#2480](https://github.com/temporalio/sdk-java/issues/2480) | 0 | Memo-s not present in listOpenWorkflowExecutions when running with temporal-testing |
| [#2219](https://github.com/temporalio/sdk-java/issues/2219) | 0 | Test Server: Add support for user metadata |
| [#1788](https://github.com/temporalio/sdk-java/issues/1788) | 0 | Add build id versioning feature support to test server |
| [#1692](https://github.com/temporalio/sdk-java/issues/1692) | 0 | Implement workflow_start_delay in test server |
| [#1642](https://github.com/temporalio/sdk-java/issues/1642) | 0 | Add history pagination to Test Server |

### Bugs (33 open issues)

#### High Priority Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` error |
| [#1715](https://github.com/temporalio/sdk-java/issues/1715) | 1 | WorkerOptions should enforce executors >= pollers |
| [#1246](https://github.com/temporalio/sdk-java/issues/1246) | 1 | Query is not picked up by the worker executing local activity for more than a minute |

#### Workflow Execution Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2307](https://github.com/temporalio/sdk-java/issues/2307) | 0 | Removing a `Workflow.GetVersion` call can cause NDE if there are multiple parallel workflow threads |
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | 0 | Subsequent MutableSideEffect calls inside one Workflow Task may explode with non-determinism on replay |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | 0 | State machine exception during termination |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | 0 | Exception in one of several "parallel" workflow async functions swallowed |

#### Activity & Heartbeat Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1257](https://github.com/temporalio/sdk-java/issues/1257) | 0 | Cached activity heartbeat prevents worker from a quick shutdown |
| [#731](https://github.com/temporalio/sdk-java/issues/731) | 0 | Activities that return with interrupted flag should be successful |
| [#860](https://github.com/temporalio/sdk-java/issues/860) | 0 | Passing too large blob as an Activity input ends with non-descriptive error |

#### Tracing & Observability Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | OpenTracing duplicates user created spans during replay |
| [#1211](https://github.com/temporalio/sdk-java/issues/1211) | 1 | MDC context logging properties not propagating inside promise.handle |

---

## API & Component Hotspots

Based on semantic analysis of issue content, the following areas have the highest concentration of issues:

| Area | Issue Count | Key Concerns |
|------|-------------|--------------|
| test-framework | 125+ | Time-skipping, missing features, environment setup |
| spring-boot-integration | 28 | Configuration, multi-namespace, startup lifecycle |
| workflow-replay | 31 | Non-determinism, version handling, replay failures |
| workflow-execution | 21 | State machines, task processing, execution lifecycle |
| dependency-security | 21 | Outdated libraries, vulnerability patches |
| metrics | 20 | Reporting, tagging, scope configuration |
| local-activities | 18 | Timeout handling, retry behavior, worker threads |
| activity-heartbeat | 15 | Caching, shutdown behavior, timeout detection |

---

## Enhancement Requests (127 open issues)

### Concurrency & Threading

Modern Java developers are requesting support for newer concurrency models.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Support different coroutine models in workflows and activities |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | @SignalMethod threading configuration |
| [#1346](https://github.com/temporalio/sdk-java/issues/1346) | 1 | Await on Local Activities shouldn't occupy workflow executor thread |

> Note: Virtual threads support ([#1448](https://github.com/temporalio/sdk-java/issues/1448), 25 upvotes) was the highest-voted enhancement and has been resolved.

### Spring Boot Integration

Strong demand for deeper Spring Boot integration and support for newer versions.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | Spring Boot 4 Support |
| [#2758](https://github.com/temporalio/sdk-java/issues/2758) | 0 | Spring Metrics Configuration fails with Spring Boot 4 |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support for using Temporal Annotations as Meta Annotation |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Springboot Multi Namespace: Add annotation to specify Namespace a bean belongs to |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | @WorkflowImpl(workers = "...") should support Spring property placeholders |

### Test Framework Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Add the possibility to run Temporal CLI server from test |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | Add test framework for partial json history replay |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | Extend TestWorkflowExtension to support specifying a custom task queue name |
| [#1988](https://github.com/temporalio/sdk-java/issues/1988) | 1 | Have a built-in way to override activityOptions in tests |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | Jackson 3 support |
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 2 | Pure opentelemetry based tracing support instead of using tracershim |

### Workflow Configuration

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Provide a recommended way to pass configuration into workflow |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Add the ability to keep heartbeating while the worker is shutting down |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Allow contributions of tags of root worker metricsscope per workflow/activity type |

### Language Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module |

---

## Housekeeping Recommendations

### Stale Issues (156 open issues with no activity >12 months)

The Java SDK has a significant backlog of stale issues representing 73% of open issues. These require systematic triage.

**Top Stale Issues by Upvotes:**

| Issue | Upvotes | Last Updated | Title |
|-------|-----|--------------|-------|
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 2023-06-30 | Add the possibility to run Temporal CLI server from test |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 2020-09-18 | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 2023-08-01 | Support for using Temporal Annotations as Meta Annotation |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 2021-10-19 | Provide a recommended way to pass configuration into workflow |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 2024-11-22 | Add the ability to keep heartbeating while the worker is shutting down |

**Triage Recommendations:**

- **Close candidates:** Issues related to resolved features, outdated API versions, or superseded requests
- **Needs triage:** Security vulnerabilities that may have been addressed in dependency updates
- **Keep open:** High-upvote enhancement requests that remain valid ([#1804](https://github.com/temporalio/sdk-java/issues/1804), [#214](https://github.com/temporalio/sdk-java/issues/214), [#1832](https://github.com/temporalio/sdk-java/issues/1832))

### Duplicate Candidates

Review these issues for potential consolidation:

- Test server time-skipping issues: [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392), [#1540](https://github.com/temporalio/sdk-java/issues/1540)
- Spring Boot configuration issues: [#2758](https://github.com/temporalio/sdk-java/issues/2758), [#2738](https://github.com/temporalio/sdk-java/issues/2738)

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Update dependencies to address security vulnerabilities ([#2676](https://github.com/temporalio/sdk-java/issues/2676), [#1990](https://github.com/temporalio/sdk-java/issues/1990), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1842](https://github.com/temporalio/sdk-java/issues/1842))
- Fix critical test server time-skipping bugs ([#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392))

### Phase 2: Developer Experience (Short-term)

- Implement listWorkflowExecutions in test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693))
- Add CLI server integration for tests ([#1804](https://github.com/temporalio/sdk-java/issues/1804))
- ARM64 build for test server ([#1407](https://github.com/temporalio/sdk-java/issues/1407))

### Phase 3: Feature Expansion (Medium-term)

- Kotlin coroutine model support ([#1845](https://github.com/temporalio/sdk-java/issues/1845))
- Spring Boot 4 full support ([#2738](https://github.com/temporalio/sdk-java/issues/2738))
- Jackson 3 compatibility ([#2746](https://github.com/temporalio/sdk-java/issues/2746))
- Meta-annotation support ([#1832](https://github.com/temporalio/sdk-java/issues/1832))

### Phase 4: Maintenance (Ongoing)

- Systematic triage of 156 stale issues
- Close outdated issues with explanation
- Refresh valid stale issues with updated context
- Regular dependency updates to prevent security debt accumulation

---

## Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 4 | 2% |
| 1-3 months | 9 | 4% |
| 3-6 months | 11 | 5% |
| 6-12 months | 16 | 7% |
| 1-2 years | 38 | 18% |
| 2-3 years | 33 | 15% |
| 3+ years | 104 | 48% |

Nearly half of open issues are over 3 years old, indicating a significant backlog of older feature requests and lower-priority bugs that warrant triage attention.
