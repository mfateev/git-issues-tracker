# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-10
**Total Open Issues:** 220
**Total Closed Issues:** 729
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Java SDK carries 220 open issues against 949 total, with a 77% resolution rate and a shrinking backlog (44 more issues closed than opened over the last 12 months). The most pressing concerns are: 4 dependency security vulnerabilities with CVE severities up to 9.8, a large cluster of test server/framework issues (37 labeled "test server," plus many more in the test-framework area), and strong community demand for Spring Boot 4 support and Kotlin coroutine models. Nearly half of all open issues (49%) are over 3 years old, signaling a need for systematic triage.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 33 | High - Several affect core workflow/activity behavior |
| Test Server Issues | 37 | High - Blocking testing capabilities for users |
| Enhancements | 130 | Medium - Feature requests with varying demand |
| Security Vulnerabilities | 4 | Critical - Known CVEs in dependencies |
| Stale Issues (>12 months) | 160 | Low - 73% of open issues need triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 112 |
| Total Comments | 211 |
| Issues with Upvotes | 37 (17%) |
| Issues with Comments | 88 (40%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (729/949) |
| Median Time to Close | 27 days (calendar) / 20 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 65% |

### Recommended Actions

1. **Immediate:** Address 4 dependency security vulnerabilities (CVE severity up to 9.8)
2. **Short-term:** Fix high-engagement bugs -- OpenTracing replay duplication ([#952](https://github.com/temporalio/sdk-java/issues/952)), DynamicWorkflow options ([#1241](https://github.com/temporalio/sdk-java/issues/1241)), gRPC dependency update ([#2676](https://github.com/temporalio/sdk-java/issues/2676))
3. **Medium-term:** Deliver Spring Boot 4 support ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) and test server `listWorkflowExecutions` ([#1693](https://github.com/temporalio/sdk-java/issues/1693))
4. **Long-term:** Kotlin coroutine support ([#1845](https://github.com/temporalio/sdk-java/issues/1845)), native OpenTelemetry tracing ([#2394](https://github.com/temporalio/sdk-java/issues/2394))
5. **Housekeeping:** Triage 160 stale issues (73% of backlog); close or re-prioritize items older than 3 years (108 issues)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking. Over the past year, 160 issues were closed against 116 opened, producing a net reduction of 44. The largest single cleanup occurred in May 2025 when 55 issues were closed (11 opened). Recent months show a slight upward drift in net open issues.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 116 | 160 | -44 |

Backlog Shrinking: 44 more issues closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

The most recent 6 months show 59 issues opened and 49 closed (net +10), indicating the earlier cleanup pace has slowed. Two bugs and 23 enhancements were closed, including several popular requests.

| Metric | Value |
|--------|-------|
| Issues Opened | 59 |
| Issues Closed | 49 |
| Bugs Closed | 2 |
| Enhancements Completed | 23 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1849](https://github.com/temporalio/sdk-java/issues/1849) | 9 | Expose an async API to start a workflow |
| [#2665](https://github.com/temporalio/sdk-java/issues/2665) | 6 | Serialization with `kotlinx.serialization` |
| [#2724](https://github.com/temporalio/sdk-java/issues/2724) | 5 | Allow Configuration Option to Enable Spring Application Startup Even When Temporal is Unavailable |
| [#2671](https://github.com/temporalio/sdk-java/issues/2671) | 3 | Tracing - Native OpenTelemetry Interceptors |
| [#704](https://github.com/temporalio/sdk-java/issues/704) | 3 | Allow exception logging to be customizable for activity workers |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 15 | 6 | Spring Boot 4 Support |
| 3 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 4 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 7 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflow |
| 8 | [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | 0 | Jackson 3 support |
| 9 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 10 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metrics scope per workflow execution |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 36 | Spring Boot 4 Support |
| 4 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 12 | @SignalMethod threading configuration |
| 6 | [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 11 | Scala module |
| 7 | [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| 8 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 9 | temporal java sdk is using an older version of grpc-netty-shaded with vulnerabilities |
| 9 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 10 | [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 8 | DynamicWorkflow not taking in account WorkflowImplementationOptions |

---

## Issue Analysis by Category

### Security Vulnerabilities (4 issues)

Four open dependency security vulnerabilities were flagged by Mend (formerly WhiteSource). The most severe is a 9.8-rated CVE in the Spring Boot starter dependency. These are all in older dependency versions used by the SDK's Spring Boot and Kotlin integrations.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 9.8 | spring-boot-starter-2.7.12.jar: 9 vulnerabilities |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | 7.5 | spring-boot-dependencies-2.7.12.pom: 1 vulnerability |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | 7.5 | ktlint-0.47.1.jar: 2 vulnerabilities |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | 5.3 | kotlin-klib-commonizer-embeddable-1.5.32.jar: 1 vulnerability |

**Recommendation:** Upgrade Spring Boot and Kotlin tooling dependencies to current versions. The Spring Boot 4 migration ([#2738](https://github.com/temporalio/sdk-java/issues/2738)) would resolve the Spring Boot-related CVEs.

### Bugs (33 issues)

33 open bugs span test server behavior, workflow determinism, activity handling, and interface resolution. Most have low engagement, suggesting they affect edge cases or have workarounds. The highest-engagement bugs are:

**High Priority (score >= 4)**

| Issue | Upvotes | Comments | Description |
|-------|---------|----------|-------------|
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | 10 | OpenTracing duplicates user created spans during replay |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | 6 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | 2 | Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` on time skipping server |
| [#995](https://github.com/temporalio/sdk-java/issues/995) | 0 | 4 | Inheritance of workflow interfaces is not supported |
| [#317](https://github.com/temporalio/sdk-java/issues/317) | 0 | 4 | Published artifacts do not include sources for generated code |

**Workflow Determinism Bugs**

| Issue | Description |
|-------|-------------|
| [#2307](https://github.com/temporalio/sdk-java/issues/2307) | Removing `Workflow.GetVersion` can cause NDE with parallel threads |
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | Subsequent MutableSideEffect calls may explode with non-determinism on replay |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | Exception in parallel async functions leads to non-deterministic execution |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | State machine exception during termination |

**Test Server Bugs**

| Issue | Description |
|-------|-------------|
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | Time skipping broken in child workflows |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | Test environment sleep hangs on child workflows |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | Continue-as-new implementation is not atomic |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | Does not error on already-started child workflow |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | Does not decrement time skipping lock for outstanding activities |

### Test Server & Testing Framework (37+ issues)

The test server is the single largest problem area, with 37 issues carrying the "test server" label and the `test-framework` semantic area containing 45 open issues. The top request by far is `listWorkflowExecutions` support ([#1693](https://github.com/temporalio/sdk-java/issues/1693), 16 upvotes).

**Highest Demand**

| Issue | Upvotes | Comments | Description |
|-------|---------|----------|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Run Temporal CLI server from test |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 0 | TestWorkflowEnvironment sleep incorrect behavior |
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

Based on semantic analysis of all open issues, the areas with the most open issues are:

| Area | Open Issues | Key Concerns |
|------|-------------|--------------|
| test-framework | 45 | Time skipping, missing APIs, child workflow support |
| test-server | 9 | Correctness gaps, missing features |
| workflow-replay | 9 | Non-determinism bugs, version removal edge cases |
| spring-boot-integration | 6 | Spring Boot 4, metrics, multi-namespace |
| activity-heartbeat | 5 | Shutdown behavior, timeout tracking, retry logic |
| workflow-execution | 5 | Cancellation scope, execution lifecycle |
| metrics | 4 | Reporting, tagging, metric scope |
| local-activities | 4 | Retry, execution, timeout |

---

## Enhancement Requests (130 issues)

### Spring Boot Integration (13 open issues)

Spring Boot is the most in-demand integration area, driven by the upcoming Spring Boot 4 migration.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 15 | Spring Boot 4 support |
| [#2758](https://github.com/temporalio/sdk-java/issues/2758) | 0 | Spring Metrics Configuration fails with Spring Boot 4 |
| [#2780](https://github.com/temporalio/sdk-java/issues/2780) | 0 | workers-auto-discovery Workflow vs Activities behavior |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | @WorkflowImpl should support Spring property placeholders |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Multi-namespace: annotation to specify namespace per bean |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | Add SpringBoot integration for SlotSuppliers |
| [#2026](https://github.com/temporalio/sdk-java/issues/2026) | 0 | Add graceful shutdown wait time as property |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | Add HealthIndicator to spring-boot library |

### Kotlin & JVM Language Support

The highest overall priority score belongs to the coroutine support request. The community also wants Scala support and better kotlinx.serialization compatibility.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Support different coroutine models in workflows and activities |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module |
| [#2071](https://github.com/temporalio/sdk-java/issues/2071) | 0 | KotlinObjectMapperFactory is not forwards compatible |

### Observability & Tracing

Users want native OpenTelemetry support to replace the legacy OpenTracing shim, and several OpenTracing bugs remain unfixed.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 2 | Pure OpenTelemetry based tracing (remove tracershim) |
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | Fix OpenTracing span duplication during replay |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | OpenTracing interceptor: support for updateWithStart |
| [#2620](https://github.com/temporalio/sdk-java/issues/2620) | 0 | OpenTracing client interceptor: support for updateWithStart |
| [#2117](https://github.com/temporalio/sdk-java/issues/2117) | 0 | Allow customization of OTel span tags |
| [#1440](https://github.com/temporalio/sdk-java/issues/1440) | 0 | Reflect activity vs local activity difference in tracing spans |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | Jackson 3 support |
| [#1586](https://github.com/temporalio/sdk-java/issues/1586) | 0 | Opt-in to having stack trace query use custom data converter |

### Workflow API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support Temporal Annotations as Meta Annotation |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Recommended way to pass configuration into workflow |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Keep heartbeating while worker is shutting down |
| [#2056](https://github.com/temporalio/sdk-java/issues/2056) | 1 | Allow async update implementation natively |
| [#396](https://github.com/temporalio/sdk-java/issues/396) | 0 | Pluggable activity name provider |

### Nexus Integration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2755](https://github.com/temporalio/sdk-java/issues/2755) | 0 | Support using Temporal failures in Nexus APIs |
| [#2582](https://github.com/temporalio/sdk-java/issues/2582) | 0 | Null cause in Nexus HandlerException not handled correctly |
| [#2229](https://github.com/temporalio/sdk-java/issues/2229) | 0 | Add TestNexusEnvironment similar to TestActivityEnvironment |

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

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

160 of 220 open issues (73%) have had no activity for more than 12 months. 108 issues are over 3 years old.

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
- Upgrade Spring Boot dependencies to address 4 CVEs (severity up to 9.8): [#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#1888](https://github.com/temporalio/sdk-java/issues/1888)
- Update grpc-netty-shaded to fix known vulnerabilities: [#2676](https://github.com/temporalio/sdk-java/issues/2676)
- Fix workflow determinism bugs: [#2307](https://github.com/temporalio/sdk-java/issues/2307), [#1668](https://github.com/temporalio/sdk-java/issues/1668)

### Phase 2: Developer Experience (Short-term)
- Deliver Spring Boot 4 support: [#2738](https://github.com/temporalio/sdk-java/issues/2738), [#2758](https://github.com/temporalio/sdk-java/issues/2758)
- Fix test server time skipping with child workflows: [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392)
- Add listWorkflowExecutions to test server: [#1693](https://github.com/temporalio/sdk-java/issues/1693)
- Ship workflowcheck Maven/Gradle plugins: [#2769](https://github.com/temporalio/sdk-java/issues/2769), [#2768](https://github.com/temporalio/sdk-java/issues/2768)

### Phase 3: Feature Expansion (Medium-term)
- Kotlin coroutine support for workflows and activities: [#1845](https://github.com/temporalio/sdk-java/issues/1845)
- Native OpenTelemetry tracing (replace OpenTracing shim): [#2394](https://github.com/temporalio/sdk-java/issues/2394)
- Jackson 3 support: [#2746](https://github.com/temporalio/sdk-java/issues/2746)
- Temporal CLI server integration for tests: [#1804](https://github.com/temporalio/sdk-java/issues/1804)
- Nexus testing support: [#2229](https://github.com/temporalio/sdk-java/issues/2229)

### Phase 4: Maintenance (Ongoing)
- Triage 160 stale issues; close resolved or obsolete items
- Close 3 open wontfix issues with explanations
- Merge duplicate test server sleep issues
- Review 108 issues older than 3 years for continued relevance
