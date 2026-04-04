# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 221
**Total Closed Issues:** 741
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

<- [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Java SDK carries 221 open issues against 962 total, with a 77% resolution rate and a shrinking backlog (46 more issues closed than opened over the last 12 months). The most pressing concerns are: 4 dependency security vulnerabilities with CVE severities up to 9.8, a large cluster of test server/framework issues (37 labeled "test server," plus many more in the test-framework semantic area), and strong community demand for Kotlin coroutine models and test server improvements. Over half of all open issues (52%) are more than 3 years old, signaling a need for systematic triage.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Security Vulnerabilities | 4 | Critical - Known CVEs up to severity 9.8 in dependencies |
| Bugs | 32 | High - Several affect core workflow/activity behavior |
| Test Server Issues | 37 | High - Blocking testing capabilities for users |
| Enhancements | 127 | Medium - Feature requests with varying demand |
| Stale Issues (>12 months) | 161 | Low - 73% of open issues need triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs-up) | 95 |
| Total Comments | 210 |
| Issues with Upvotes | 35 (16%) |
| Issues with Comments | 91 (41%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (741/962) |
| Median Time to Close | 28 days (calendar) / 21 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 65% |

### Recommended Actions

1. **Immediate:** Address 4 dependency security vulnerabilities (CVE severity up to 9.8): [#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#1888](https://github.com/temporalio/sdk-java/issues/1888)
2. **Short-term:** Fix high-engagement bugs -- OpenTracing replay duplication ([#952](https://github.com/temporalio/sdk-java/issues/952)), DynamicWorkflow options ([#1241](https://github.com/temporalio/sdk-java/issues/1241)), gRPC dependency update ([#2676](https://github.com/temporalio/sdk-java/issues/2676))
3. **Medium-term:** Deliver test server `listWorkflowExecutions` ([#1693](https://github.com/temporalio/sdk-java/issues/1693)) and fix time-skipping with child workflows ([#1540](https://github.com/temporalio/sdk-java/issues/1540))
4. **Long-term:** Kotlin coroutine support ([#1845](https://github.com/temporalio/sdk-java/issues/1845)), native OpenTelemetry tracing ([#2394](https://github.com/temporalio/sdk-java/issues/2394))
5. **Housekeeping:** Triage 161 stale issues (73% of backlog); close or re-prioritize items older than 3 years (116 issues)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking. Over the past 12 months, 153 issues were closed against 107 opened, producing a net reduction of 46. The largest single cleanup occurred in May 2025 when 55 issues were closed (11 opened). Recent months show a slight upward drift -- the last 6 months added a net +13 issues.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 107 | 153 | -46 |

Backlog Shrinking: 46 more issues closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

The most recent 6 months show 51 issues opened and 38 closed (net +13), indicating the earlier cleanup pace has slowed. Two bugs and 16 enhancements were closed, including several highly requested items such as Spring Boot 4 support and Jackson 3 support.

| Metric | Value |
|--------|-------|
| Issues Opened | 51 |
| Issues Closed | 38 |
| Bugs Closed | 2 |
| Enhancements Completed | 16 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 23 | Spring Boot 4 Support |
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 14 | Jackson 3 support |
| [#2665](https://github.com/temporalio/sdk-java/issues/2665) | 6 | Serialization with `kotlinx.serialization` |
| [#2724](https://github.com/temporalio/sdk-java/issues/2724) | 5 | Allow Configuration Option to Enable Spring Application Startup Even When Temporal is Unavailable |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 5 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 6 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflow |
| 7 | [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 3 | 1 | Pure OpenTelemetry based tracing support instead of using tracershim |
| 8 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 9 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metrics scope per workflow execution |
| 10 | [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | TestWorkflowEnvironment sleep incorrect behaviour |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 4 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 12 | @SignalMethod threading configuration |
| 5 | [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 11 | Scala module |
| 6 | [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| 7 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 9 | temporal java sdk is using an older version of grpc-netty-shaded with vulnerabilities |
| 8 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 9 | [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 8 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| 10 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 8 | Provide a recommended way to pass configuration into workflow |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 issues)

Four open dependency security vulnerabilities were flagged by Mend (formerly WhiteSource). The most severe is a 9.8-rated CVE in the Spring Boot starter dependency. These are all in older dependency versions used by the SDK's Spring Boot and Kotlin integrations. All four have been open for over two years.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 9.8 | spring-boot-starter-2.7.12.jar: 9 vulnerabilities |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | 7.5 | spring-boot-dependencies-2.7.12.pom: 1 vulnerability |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | 7.5 | ktlint-0.47.1.jar: 2 vulnerabilities |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | 5.3 | kotlin-klib-commonizer-embeddable-1.5.32.jar: 1 vulnerability |

**Recommendation:** With Spring Boot 4 support now delivered ([#2738](https://github.com/temporalio/sdk-java/issues/2738) closed), the Spring Boot 2.7.x dependency CVEs ([#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951)) should be closeable if the old Spring Boot 2.x integration is deprecated or upgraded. The Kotlin tooling vulnerabilities ([#1952](https://github.com/temporalio/sdk-java/issues/1952), [#1888](https://github.com/temporalio/sdk-java/issues/1888)) require upgrading ktlint and kotlin-klib-commonizer dependencies.

### Bugs (32 issues)

32 open bugs span test server behavior, workflow determinism, activity handling, and interface resolution. Most have low engagement, suggesting they affect edge cases or have workarounds. The highest-engagement bugs are:

**High Priority (score >= 4)**

| Issue | Upvotes | Comments | Description |
|-------|---------|----------|-------------|
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | 10 | OpenTracing duplicates user created spans during replay |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | 6 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | 2 | Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` on time skipping server |
| [#995](https://github.com/temporalio/sdk-java/issues/995) | 0 | 4 | Inheritance of workflow interfaces is not supported |
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | 2 | 3 | Failed promise before calling allOf is not failing the wrapped promise |

**Workflow Determinism Bugs**

| Issue | Description |
|-------|-------------|
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | Subsequent MutableSideEffect calls may explode with non-determinism on replay |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | Exception in parallel async functions leads to non-deterministic execution |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | State machine exception during termination |
| [#2796](https://github.com/temporalio/sdk-java/issues/2796) | UpdateCompleted events between version markers breaks replay |

**Test Server Bugs**

| Issue | Description |
|-------|-------------|
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | Time skipping broken in child workflows |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | Test environment sleep hangs on child workflows |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | Continue-as-new implementation is not atomic |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | Does not error on already-started child workflow |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Does not decrement time skipping lock for outstanding activities |

**Recent Bugs**

| Issue | Description |
|-------|-------------|
| [#2823](https://github.com/temporalio/sdk-java/issues/2823) | Local activity executor pool exhaustion causes workflow to hang permanently |
| [#2781](https://github.com/temporalio/sdk-java/issues/2781) | WorkflowStub.cancel throws wrong exception |
| [#2792](https://github.com/temporalio/sdk-java/issues/2792) | ProtobufJsonPayloadConverter does not work correctly with shaded artifact |

### Test Server & Testing Framework (37+ issues)

The test server is the single largest problem area, with 37 issues carrying the "test server" label and the `test-framework` semantic area containing over 100 total issues (many closed). The top request by far is `listWorkflowExecutions` support ([#1693](https://github.com/temporalio/sdk-java/issues/1693), 16 upvotes).

**Highest Demand**

| Issue | Upvotes | Comments | Description |
|-------|---------|----------|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Run Temporal CLI server from test |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | TestWorkflowEnvironment sleep incorrect behavior |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | 0 | Extend TestWorkflowExtension to support specifying WorkerOptions |
| [#1358](https://github.com/temporalio/sdk-java/issues/1358) | 1 | 0 | Add CI testing for the native test server |

**Time Skipping Issues** -- A recurring theme is time skipping failures with child workflows and activities:

| Issue | Description |
|-------|-------------|
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | TestWorkflowEnvironment sleep hangs indefinitely |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | Time skipping broken in child workflows |
| [#1618](https://github.com/temporalio/sdk-java/issues/1618) | Child workflow + signal times out with unlock-with-sleep |
| [#2246](https://github.com/temporalio/sdk-java/issues/2246) | Time-skipping past startToCloseTimeout causes worker not to close |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Time skipping lock not decremented for outstanding activities |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | Timeouts improperly set to 10 years when not user set |

**Missing Capabilities**

| Issue | Description |
|-------|-------------|
| [#2661](https://github.com/temporalio/sdk-java/issues/2661) | Set history size and suggest continue-as-new on task start |
| [#2655](https://github.com/temporalio/sdk-java/issues/2655) | Continue-as-new does not carry memo/search attributes |
| [#2480](https://github.com/temporalio/sdk-java/issues/2480) | Memos not present in listOpenWorkflowExecutions |
| [#2283](https://github.com/temporalio/sdk-java/issues/2283) | Auto-skip time when waiting on update result |
| [#2229](https://github.com/temporalio/sdk-java/issues/2229) | Add TestNexusEnvironment similar to TestActivityEnvironment |
| [#1642](https://github.com/temporalio/sdk-java/issues/1642) | Add history pagination to test server |

---

## API & Component Hotspots

Based on semantic analysis of all issues (open and closed), the areas with the most open issues are:

| Area | Open Issues (est.) | Key Concerns |
|------|-------------------|--------------|
| test-framework | ~45 | Time skipping, missing APIs, child workflow support |
| workflow-replay | ~9 | Non-determinism bugs, version removal edge cases |
| spring-boot-integration | ~6 | Multi-namespace, property placeholders, auto-discovery |
| activity-heartbeat | ~5 | Shutdown behavior, timeout tracking, retry logic |
| workflow-execution | ~5 | Cancellation scope, execution lifecycle |
| metrics | ~4 | Reporting, tagging, metric scope |
| local-activities | ~4 | Pool exhaustion, retry, execution, timeout |
| worker-configuration | ~4 | Virtual threads, executor enforcement |
| deadlock-detection | ~3 | Cold JVM firing, detection threshold tuning |

---

## Enhancement Requests (127 issues)

### Spring Boot Integration (~13 open issues)

Spring Boot is the most in-demand integration area. The major milestone of Spring Boot 4 support ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) was resolved in March 2026. Remaining open issues focus on configuration refinements and multi-namespace support.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2780](https://github.com/temporalio/sdk-java/issues/2780) | 0 | workers-auto-discovery: Workflow vs Activities behavior |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | @WorkflowImpl should support Spring property placeholders |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Multi-namespace: annotation to specify namespace per bean |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | Add SpringBoot integration for SlotSuppliers |
| [#2026](https://github.com/temporalio/sdk-java/issues/2026) | 0 | Add graceful shutdown wait time as property |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | Add HealthIndicator to spring-boot library |

### Kotlin & JVM Language Support

The highest overall priority score belongs to the coroutine support request. The community also wants Scala support.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Support different coroutine models in workflows and activities |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module |
| [#2071](https://github.com/temporalio/sdk-java/issues/2071) | 0 | KotlinObjectMapperFactory is not forwards compatible |

### Observability & Tracing

Users want native OpenTelemetry support to replace the legacy OpenTracing shim, and several OpenTracing bugs remain unfixed.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 3 | Pure OpenTelemetry based tracing (remove tracershim) |
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | Fix OpenTracing span duplication during replay |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | OpenTracing interceptor: support for updateWithStart |
| [#2620](https://github.com/temporalio/sdk-java/issues/2620) | 0 | OpenTracing client interceptor: support for updateWithStart |
| [#2117](https://github.com/temporalio/sdk-java/issues/2117) | 0 | Allow customization of OTel span tags |
| [#1440](https://github.com/temporalio/sdk-java/issues/1440) | 0 | Reflect activity vs local activity difference in tracing spans |
| [#2801](https://github.com/temporalio/sdk-java/issues/2801) | 0 | Best practices for tracing long-running workflows |

### Workflow API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support Temporal Annotations as Meta Annotation |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Recommended way to pass configuration into workflow |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Keep heartbeating while worker is shutting down |
| [#2056](https://github.com/temporalio/sdk-java/issues/2056) | 1 | Allow async update implementation natively |
| [#2741](https://github.com/temporalio/sdk-java/issues/2741) | 1 | Support standalone activities |
| [#396](https://github.com/temporalio/sdk-java/issues/396) | 0 | Pluggable activity name provider |
| [#2774](https://github.com/temporalio/sdk-java/issues/2774) | 0 | Automate Workflow State Persistence via Query on WorkflowTaskCompleted |
| [#2790](https://github.com/temporalio/sdk-java/issues/2790) | 0 | Extend WorkflowImplementationOptions with ChildWorkflowOptions |
| [#2826](https://github.com/temporalio/sdk-java/issues/2826) | 0 | Deprecate namespace fields on cross-namespace workflow command options |

### Nexus Integration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2582](https://github.com/temporalio/sdk-java/issues/2582) | 0 | Null cause in Nexus HandlerException not handled correctly |
| [#2229](https://github.com/temporalio/sdk-java/issues/2229) | 0 | Add TestNexusEnvironment similar to TestActivityEnvironment |
| [#2442](https://github.com/temporalio/sdk-java/issues/2442) | 0 | Nexus-related enhancement |
| [#2245](https://github.com/temporalio/sdk-java/issues/2245) | 0 | Nexus-related enhancement |

### Workflowcheck Tooling

Three recently filed issues (all from the same author) aim to improve the static analysis tool for workflow determinism checking:

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2770](https://github.com/temporalio/sdk-java/issues/2770) | 0 | Several workflowcheck improvement suggestions |
| [#2769](https://github.com/temporalio/sdk-java/issues/2769) | 0 | Maven plugin for workflowcheck |
| [#2768](https://github.com/temporalio/sdk-java/issues/2768) | 0 | Gradle plugin for workflowcheck |

### Dependencies & Compatibility

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 1 | SDK uses older grpc-netty-shaded with vulnerabilities |
| [#2064](https://github.com/temporalio/sdk-java/issues/2064) | 0 | Native image descriptor for GraalVM in Spring Boot starter |
| [#1940](https://github.com/temporalio/sdk-java/issues/1940) | 0 | Support Java Modules |
| [#2809](https://github.com/temporalio/sdk-java/issues/2809) | 0 | Support conflict token retry loop for schedule updates |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2792](https://github.com/temporalio/sdk-java/issues/2792) | 0 | ProtobufJsonPayloadConverter does not work correctly with shaded artifact |
| [#1586](https://github.com/temporalio/sdk-java/issues/1586) | 0 | Opt-in to having stack trace query use custom data converter |
| [#2800](https://github.com/temporalio/sdk-java/issues/2800) | 0 | OperatorServiceStubsOptions not carrying over grpcMetadataProvider |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

161 of 221 open issues (73%) have had no activity for more than 12 months. 116 issues are over 3 years old.

- **Close candidates:** Issues referencing deprecated APIs or resolved behavior -- [#214](https://github.com/temporalio/sdk-java/issues/214) (@SignalMethod threading, open since 2020), [#317](https://github.com/temporalio/sdk-java/issues/317) (source artifacts, open since 2020), [#456](https://github.com/temporalio/sdk-java/issues/456) (duplicate concurrent workflow hang), [#262](https://github.com/temporalio/sdk-java/issues/262) (TestWorkflowEnvironment close time visibility)
- **Needs triage:** Stale issues with upvotes that may still be valid -- [#1804](https://github.com/temporalio/sdk-java/issues/1804) (CLI server from test, 10 upvotes), [#827](https://github.com/temporalio/sdk-java/issues/827) (workflow config, 4 upvotes), [#2075](https://github.com/temporalio/sdk-java/issues/2075) (heartbeat on shutdown, 3 upvotes)
- **Keep open:** High-value requests with strong community signal -- [#1693](https://github.com/temporalio/sdk-java/issues/1693) (listWorkflowExecutions, 16 upvotes), [#1845](https://github.com/temporalio/sdk-java/issues/1845) (coroutine models, 15 upvotes)

### Duplicate Candidates

- [#2670](https://github.com/temporalio/sdk-java/issues/2670) (TestWorkflowEnvironment sleep hangs indefinitely) and [#2392](https://github.com/temporalio/sdk-java/issues/2392) (Test environment sleep hangs on child workflows) -- both describe sleep hanging in test environments
- [#2752](https://github.com/temporalio/sdk-java/issues/2752) and [#2620](https://github.com/temporalio/sdk-java/issues/2620) -- both request updateWithStart support in OpenTracing interceptors
- [#1951](https://github.com/temporalio/sdk-java/issues/1951) and [#1890](https://github.com/temporalio/sdk-java/issues/1890) -- both relate to Spring Boot 2.7.x dependency vulnerabilities; upgrading resolves both

### Wontfix Issues Still Open

Three issues are labeled `wontfix` but remain open. Consider closing them with an explanation:
- [#1698](https://github.com/temporalio/sdk-java/issues/1698) -- FailWorkflowExceptionTypes ignored for service failures
- [#1163](https://github.com/temporalio/sdk-java/issues/1163) -- Allow contributions of tags of root worker metrics scope
- [#896](https://github.com/temporalio/sdk-java/issues/896) -- Workflow should be able to ignore CancellationFailure

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Upgrade Spring Boot and Kotlin tooling dependencies to address 4 CVEs (severity up to 9.8): [#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#1888](https://github.com/temporalio/sdk-java/issues/1888)
- Update grpc-netty-shaded to fix known vulnerabilities: [#2676](https://github.com/temporalio/sdk-java/issues/2676)
- Fix workflow determinism bugs: [#1668](https://github.com/temporalio/sdk-java/issues/1668), [#2796](https://github.com/temporalio/sdk-java/issues/2796)
- Investigate local activity pool exhaustion hang: [#2823](https://github.com/temporalio/sdk-java/issues/2823)

### Phase 2: Developer Experience (Short-term)
- Fix test server time skipping with child workflows: [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392)
- Add listWorkflowExecutions to test server: [#1693](https://github.com/temporalio/sdk-java/issues/1693)
- Ship workflowcheck Maven/Gradle plugins: [#2769](https://github.com/temporalio/sdk-java/issues/2769), [#2768](https://github.com/temporalio/sdk-java/issues/2768)
- Fix OpenTracing span duplication during replay: [#952](https://github.com/temporalio/sdk-java/issues/952)

### Phase 3: Feature Expansion (Medium-term)
- Kotlin coroutine support for workflows and activities: [#1845](https://github.com/temporalio/sdk-java/issues/1845)
- Native OpenTelemetry tracing (replace OpenTracing shim): [#2394](https://github.com/temporalio/sdk-java/issues/2394)
- Temporal CLI server integration for tests: [#1804](https://github.com/temporalio/sdk-java/issues/1804)
- Nexus testing support: [#2229](https://github.com/temporalio/sdk-java/issues/2229)
- Support standalone activities: [#2741](https://github.com/temporalio/sdk-java/issues/2741)

### Phase 4: Maintenance (Ongoing)
- Triage 161 stale issues; close resolved or obsolete items
- Close 3 open wontfix issues with explanations
- Merge duplicate test server sleep issues
- Review 116 issues older than 3 years for continued relevance
