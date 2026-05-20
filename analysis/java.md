# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 227
**Total Closed Issues:** 752
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Java SDK carries 227 open issues with a predominantly enhancement-heavy backlog (126 enhancements vs. 32 bugs), reflecting a mature SDK whose users are asking for productivity and ecosystem improvements rather than struggling with basic correctness. The most urgent concerns are a critical local-activity thread-pool exhaustion bug that causes irrecoverable workflow hangs, four open security dependency advisories, and a persistently under-featured in-process test server that is the single largest source of user frustration. With 75% of open issues untouched for over a year, a substantial housekeeping effort is needed alongside targeted feature investment in test infrastructure, observability, and Kotlin/virtual-thread ergonomics.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Critical bugs | 2 | Immediate — one causes irrecoverable workflow hangs; one is a high-CVSS security advisory |
| Security dependency advisories | 4 | High — open Mend vulnerability reports; maintainers note client-only usage mitigates some, but CVSS 9.8 advisory requires attention |
| High-severity bugs | 62 | High — broad set including DynamicWorkflow misconfiguration, promise-handling failures, and test-server defects |
| Test server / framework gaps | 55+ | High — largest single subcategory; blocks users from testing production-equivalent workflows |
| Enhancement requests | 126 | Medium — user demand concentrated in Kotlin/virtual-threads, OpenTelemetry native tracing, and Spring ecosystem |
| Stale issues (>12 months) | 171 | Low–Medium — 75% of open backlog has had no activity in over a year |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 97 |
| Total Comments | 216 |
| Issues with Upvotes | 34 (15%) |
| Issues with Comments | 95 (42%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (752/979) |
| Median Time to Close | 28 days (calendar) / 21 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 66% |

### Recommended Actions

1. **Immediate:** Fix the local activity executor pool exhaustion hang ([#2823](https://github.com/temporalio/sdk-java/issues/2823)); address the CVSS 9.8 Spring Boot transitive dependency advisory ([#1890](https://github.com/temporalio/sdk-java/issues/1890)).
2. **Short-term:** Resolve high-severity promise-handling ([#2046](https://github.com/temporalio/sdk-java/issues/2046)), DynamicWorkflow options ([#1241](https://github.com/temporalio/sdk-java/issues/1241)), and WorkflowTask failure masking bugs; land `listWorkflowExecutions` in the test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693)).
3. **Medium-term:** Ship native OpenTelemetry tracing ([#2394](https://github.com/temporalio/sdk-java/issues/2394)); add `createLocal()` test environment backed by Temporal CLI ([#1804](https://github.com/temporalio/sdk-java/issues/1804)); stabilize the test server's time-skipping correctness.
4. **Long-term:** Pursue Kotlin coroutine support ([#1845](https://github.com/temporalio/sdk-java/issues/1845)) and Java Modules compatibility ([#1940](https://github.com/temporalio/sdk-java/issues/1940)).
5. **Housekeeping:** Triage the 171 stale issues; many predate recent SDK generations and are likely obsolete or superseded.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is slowly growing. Over the past year the SDK opened 113 issues and closed 107, for a net gain of 6. Monthly cadence is uneven — June 2025 saw a large closure burst (27 closed) followed by months with net positive accumulation. The last three months (March–May 2026) show 22 opened and 18 closed, continuing mild growth.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 113 | 107 | +6 |

📈 **Backlog Growing:** 6 more issues opened than closed in the last 12 months.

### Last 6 Months: Detailed Analysis

Activity in the last six months is solid but insufficient to reduce the long-standing backlog of stale issues. High-demand features (Spring Boot 4, Jackson 3) were successfully completed, and standalone activities reached GA, but test-server gaps and core bugs remain unaddressed.

| Metric | Value |
|--------|-------|
| Issues Opened | 51 |
| Issues Closed | 35 |
| Bugs Closed | 2 |
| Enhancements Completed | 14 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 23 | Spring Boot 4 Support |
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 14 | Jackson 3 support |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 6 | 2 | Pure OpenTelemetry-based tracing support instead of using tracershim |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 7 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflow |
| 8 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| 9 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metricsscope per workflow execution |
| 10 | [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | TestWorkflowEnvironment sleep incorrect behaviour |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 14 | Pure OpenTelemetry-based tracing support |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 12 | @SignalMethod threading configuration |
| 6 | [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 11 | Scala module |
| 7 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 10 | SDK using older version of grpc-netty-shaded with vulnerabilities |
| 8 | [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| 9 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |
| 10 | [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 8 | DynamicWorkflow not taking into account WorkflowImplementationOptions |

---

## Issue Analysis by Category

### Critical Bugs (2 issues)

Two issues are classified critical-severity: a production hang with no automatic recovery, and a high-CVSS security advisory from a transitive dependency.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2823](https://github.com/temporalio/sdk-java/issues/2823) | 0 | Local activity executor pool exhaustion causes workflow to hang permanently with no timeout or retry — requires workflow reset to recover. Reproducible with a self-contained JUnit test. |
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 0 | spring-boot-starter-2.7.12.jar transitive dependencies contain 9 vulnerabilities including CVE-2022-1471 (snakeyaml RCE, CVSS 9.8). |

### Security Dependency Advisories (4 open)

All four are labeled `mend: dependency security vulnerability`. Maintainers have noted that some advisories (e.g., the Netty CVE in [#2676](https://github.com/temporalio/sdk-java/issues/2676)) do not apply because the SDK is a gRPC client, not a server. However, the spring-boot-starter advisory includes an RCE vector. Users whose dependency scanners flag these issues need either updated transitive deps or documented guidance.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 9.8 (CVSS) | spring-boot-starter transitive deps: CVE-2022-1471 snakeyaml RCE, logback and spring-boot CVEs |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | 7.5 | ktlint-0.47.1.jar: 2 vulnerabilities |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | 7.5 | spring-boot-dependencies-2.7.12.pom: 1 vulnerability |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | 5.3 | kotlin-klib-commonizer-embeddable-1.5.32.jar: 1 vulnerability |

Also note [#2676](https://github.com/temporalio/sdk-java/issues/2676) (8 community comments, grpc-netty-shaded CVE-2025-55163) — maintainers confirm this does not affect client usage but recommend users override the gRPC version; this needs better documentation in the README.

### High-Severity Bugs (selected)

Beyond the two critical issues, 62 open issues are rated high-severity. The most impactful by engagement:

**Workflow Execution**

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | 2 | 3 | Failed promise before calling `allOf` does not fail the wrapping promise — silent failure in concurrent workflows. |
| [#1698](https://github.com/temporalio/sdk-java/issues/1698) | 0 | 7 | `WorkflowImplementationOptions.FailWorkflowExceptionTypes` ignored for service failures; exception type filtering does not apply to the full exception chain. |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | 6 | `DynamicWorkflow` does not respect `WorkflowImplementationOptions` (e.g., failure exception types). |
| [#2412](https://github.com/temporalio/sdk-java/issues/2412) | 1 | 2 | Marker Commands sent with empty names in production histories, causing replay issues. |

**Activity & Worker**

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2042](https://github.com/temporalio/sdk-java/issues/2042) | 0 | 6 | Activity options merging logic is incorrect — options set at registration can be overridden unexpectedly at invocation time. |
| [#1246](https://github.com/temporalio/sdk-java/issues/1246) | 1 | 1 | Query not picked up by worker executing a local activity for over a minute. |
| [#1715](https://github.com/temporalio/sdk-java/issues/1715) | 1 | 0 | `WorkerOptions` does not enforce that executor count is not less than poller count — misconfiguration silently degrades performance. |

**Workflow Replay**

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2796](https://github.com/temporalio/sdk-java/issues/2796) | 0 | 1 | Replay fails when `UpdateCompleted` events appear between version markers — breaks deterministic replay for workflows using `Workflow.getVersion` and Updates together. |
| [#1374](https://github.com/temporalio/sdk-java/issues/1374) | 0 | 1 | External workflow signal from within a workflow throws incorrect exceptions. |

**Logging & Context**

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#1211](https://github.com/temporalio/sdk-java/issues/1211) | 1 | 0 | MDC context logging properties not propagated inside `promise.handle` callbacks. |

### Test Server / Test Framework Issues (55 open)

The in-process test server is the most problematic area in the Java SDK — with 55 open test-related issues, it is by far the largest single subcategory. Users regularly discover that workflows behave differently in the test environment than in production, eroding test value.

**Missing Capabilities**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | `listWorkflowExecutions` not implemented in test server; `ListOpen/ClosedWorkflowExecutions` are the only workaround. |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | No equivalent of TypeScript's `TestWorkflowEnvironment.createLocal()` — cannot spin up a full CLI-backed Temporal server for tests. |
| [#2573](https://github.com/temporalio/sdk-java/issues/2573) | 0 | `ManualCompletion` not supported in `TestActivity` environment. |
| [#2480](https://github.com/temporalio/sdk-java/issues/2480) | 0 | Memos not present in `listOpenWorkflowExecutions` when using `temporal-testing`. |
| [#2863](https://github.com/temporalio/sdk-java/issues/2863) | 0 | TestEnv does not propagate Memo with Continue-as-New. |

**Correctness Defects**

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | `TestWorkflowEnvironment.sleep` exhibits incorrect time-skipping behaviour. |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | 0 | 1 | Test environment sleep hangs on child workflows. |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | 0 | 3 | Test service time-skipping broken in child workflows. |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | 0 | 0 | Test service `continue-as-new` implementation is not atomic. |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | 6 | Test server timeouts set to 10 years when not explicitly configured — test assertions against timeouts are unreliable. |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | 0 | 0 | Test server does not error on already-started child workflow (should match server behaviour). |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | 0 | 1 | Test server does not decrement time-skipping lock for outstanding activities on workflow completion. |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | 2 | Cancelling an activity on the time-skipping server results in `FailedPrecondition: ACTIVITY_UNKNOWN`. |
| [#2586](https://github.com/temporalio/sdk-java/issues/2586) | 0 | 0 | Time-skipping server drops headers in workflow signals. |

---

## API & Component Hotspots

Based on semantic field analysis across all open issues:

| API/Component | Issue Count | Notes |
|---------------|-------------|-------|
| worker / activity-executor | 32 / 26 | Broadest coverage; local activity execution and shutdown handling are recurring pain points |
| test-server | 24 | Missing `listWorkflowExecutions`, time-skipping correctness defects |
| ExecuteActivity | 8 | Option merging, heartbeat, and cancellation edge-cases |
| ActivityOptions / LocalActivityOptions | 7 / 3 | Merging logic bugs; schedule-to-close timeout as workaround for pool exhaustion |
| WorkflowImplementationOptions | 6 | `FailWorkflowExceptionTypes` ignored for DynamicWorkflow and service failures |
| TestWorkflowEnvironment | 6 | Sleep/time-skipping correctness, missing memo propagation |
| workflow-execution | 15 | Continue-as-new attribute propagation, exception handling |
| exception-handling | 10 | Incorrect masking of original exceptions; FailureConverter edge cases |
| metrics | 7 | Schedule-to-start latency label errors, metrics not flushing in tests |
| serialization | 6 | Jackson 3 multi-release JAR visibility; ProtobufJson with shaded artifact |

---

## Enhancement Requests (126 issues)

### Test Framework (25 issues)

The top two test-framework enhancements by upvotes are also the top two overall issues in the SDK.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | `listWorkflowExecutions` support in in-process test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | `createLocal()` test environment backed by Temporal CLI |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | Test framework for partial JSON history replay and continuing executions |
| [#1988](https://github.com/temporalio/sdk-java/issues/1988) | 1 | Built-in way to override `ActivityOptions` in tests |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | Extend `TestWorkflowExtension` to support specifying test activity implementations |
| [#626](https://github.com/temporalio/sdk-java/issues/626) | 0 | Reduce excessive retries in test workflow environment |

### Core Runtime & Concurrency (10 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Kotlin coroutine support for workflows and activities (no active plans per maintainers; virtual threads already supported) |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | `@SignalMethod` threading configuration (signal handlers always run on workflow thread) |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | Keep heartbeating while worker is shutting down gracefully |
| [#1346](https://github.com/temporalio/sdk-java/issues/1346) | 1 | `Await` on local activities should not occupy the workflow executor thread |
| [#1303](https://github.com/temporalio/sdk-java/issues/1303) | 0 | Cancellation of local activities |

### Observability & Tracing (5 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 6 | Native OpenTelemetry module (currently requires OpenTracing-to-OTel shim, which has replay-duplication bugs) |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Allow per-workflow-execution tags to be added to root worker metrics scope |
| [#1273](https://github.com/temporalio/sdk-java/issues/1273) | 0 | Option to print trace-id and span-id in SDK logs |
| [#794](https://github.com/temporalio/sdk-java/issues/794) | 0 | Report replay-specific metrics |

### Framework & Ecosystem Integration (6 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Use Temporal annotations as meta-annotations (composable with custom annotations) |
| [#1940](https://github.com/temporalio/sdk-java/issues/1940) | 0 | Java Platform Module System (JPMS) support |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Official Scala module |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Spring Boot multi-namespace: annotation to specify the namespace a bean belongs to |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | Spring Boot integration for `SlotSupplier`s |

### API & Developer Ergonomics (9 issues)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Recommended pattern for passing configuration into workflow implementations |
| [#396](https://github.com/temporalio/sdk-java/issues/396) | 0 | Pluggable activity name provider |
| [#806](https://github.com/temporalio/sdk-java/issues/806) | 0 | `Workflow.retry` overload accepting a predicate to decide if retry is needed |
| [#525](https://github.com/temporalio/sdk-java/issues/525) | 1 | Allow context propagators and interceptors to populate `ActivityExecutionContext` |
| [#1644](https://github.com/temporalio/sdk-java/issues/1644) | 0 | `ContextPropagator` redesign for improved usability |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

171 open issues (75% of the backlog) have had no activity in over a year. Many predate significant SDK changes (virtual thread support, standalone activities, Spring Boot autoconfigure). Recommended disposition:

- **Close candidates:** [#214](https://github.com/temporalio/sdk-java/issues/214) (@SignalMethod threading, 2020 — predates virtual threads; needs reassessment), [#827](https://github.com/temporalio/sdk-java/issues/827) (configuration patterns, 2021 — best-practice documentation may resolve), [#631](https://github.com/temporalio/sdk-java/issues/631) (DeterministicRunner noise, check if still reproducible), [#608](https://github.com/temporalio/sdk-java/issues/608) (GRPC in-process server interrupt, likely superseded), [#860](https://github.com/temporalio/sdk-java/issues/860) (large blob non-descriptive error, check current behaviour).
- **Needs triage:** [#1845](https://github.com/temporalio/sdk-java/issues/1845) (Kotlin coroutines — active community interest but no current plans; needs a maintainer decision and documented roadmap position), [#1007](https://github.com/temporalio/sdk-java/issues/1007) (Scala module — still requested; update status), [#952](https://github.com/temporalio/sdk-java/issues/952) (OpenTracing replay span duplication — still valid with users relying on the OpenTracing module).
- **Keep open:** [#1693](https://github.com/temporalio/sdk-java/issues/1693), [#1804](https://github.com/temporalio/sdk-java/issues/1804) (test server gaps with high user demand), [#2823](https://github.com/temporalio/sdk-java/issues/2823) (critical hang), [#2394](https://github.com/temporalio/sdk-java/issues/2394) (OpenTelemetry — community POC exists), all open security advisories.

### Duplicate Candidates

- [#1804](https://github.com/temporalio/sdk-java/issues/1804) (CLI-backed test environment) and [#1693](https://github.com/temporalio/sdk-java/issues/1693) (listWorkflowExecutions in test server) are closely related — #1804 is a superset solution for #1693 and several other test-server gaps. Consider linking them explicitly.
- [#1951](https://github.com/temporalio/sdk-java/issues/1951) and [#1890](https://github.com/temporalio/sdk-java/issues/1890) both track spring-boot-dependencies vulnerabilities from the same era; confirm whether they remain distinct after transitive dependency updates.
- [#1291](https://github.com/temporalio/sdk-java/issues/1291) (Workflow.await times out in tests with time-skipping) and [#2642](https://github.com/temporalio/sdk-java/issues/2642) (TestWorkflowEnvironment.sleep incorrect) likely share a root cause in the time-skipping lock mechanism.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix local activity executor pool exhaustion hang [#2823](https://github.com/temporalio/sdk-java/issues/2823) — add overflow detection, fail-fast on queue saturation, or automatic schedule-to-close enforcement
- Address CVSS 9.8 snakeyaml/spring-boot transitive dependency [#1890](https://github.com/temporalio/sdk-java/issues/1890) — update or scope-exclude the dependency; publish documented guidance for scanner false positives
- Fix `FailWorkflowExceptionTypes` not applying to DynamicWorkflow [#1241](https://github.com/temporalio/sdk-java/issues/1241) and service failures [#1698](https://github.com/temporalio/sdk-java/issues/1698)
- Fix promise-handling silent failure in `allOf` [#2046](https://github.com/temporalio/sdk-java/issues/2046)
- Fix activity options merging logic [#2042](https://github.com/temporalio/sdk-java/issues/2042)

### Phase 2: Developer Experience (Short-term)

- Implement `listWorkflowExecutions` in the in-process test server [#1693](https://github.com/temporalio/sdk-java/issues/1693)
- Add `TestWorkflowEnvironment.createLocal()` backed by embedded Temporal CLI [#1804](https://github.com/temporalio/sdk-java/issues/1804)
- Fix test-server time-skipping correctness defects ([#2642](https://github.com/temporalio/sdk-java/issues/2642), [#1426](https://github.com/temporalio/sdk-java/issues/1426), [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1291](https://github.com/temporalio/sdk-java/issues/1291))
- Ship native OpenTelemetry module replacing the OpenTracing shim [#2394](https://github.com/temporalio/sdk-java/issues/2394) — community POC exists at `AndresBena19/sdk-java`
- Fix MDC context propagation in `promise.handle` [#1211](https://github.com/temporalio/sdk-java/issues/1211)
- Publish security advisory documentation in README for grpc-netty CVE scanner false positives [#2676](https://github.com/temporalio/sdk-java/issues/2676)

### Phase 3: Feature Expansion (Medium-term)

- Keep-heartbeat-during-shutdown support [#2075](https://github.com/temporalio/sdk-java/issues/2075)
- `@SignalMethod` threading configuration [#214](https://github.com/temporalio/sdk-java/issues/214)
- Support Temporal annotations as meta-annotations [#1832](https://github.com/temporalio/sdk-java/issues/1832)
- Java Platform Module System (JPMS) compatibility [#1940](https://github.com/temporalio/sdk-java/issues/1940)
- `workflowcheck` Gradle and Maven plugins [#2768](https://github.com/temporalio/sdk-java/issues/2768), [#2769](https://github.com/temporalio/sdk-java/issues/2769)

### Phase 4: Maintenance (Ongoing)

- Stale issue triage — close resolved or superseded issues; add `wontfix` labels with rationale for intentional non-features
- Kotlin coroutine roadmap decision — document the position formally given ongoing community demand [#1845](https://github.com/temporalio/sdk-java/issues/1845)
- Dependency updates — automate or schedule periodic transitive dependency refresh to prevent future security advisory accumulation
