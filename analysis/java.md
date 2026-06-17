# Temporal Java SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 224
**Total Closed Issues:** 755
**Repository:** [temporalio/sdk-java](https://github.com/temporalio/sdk-java)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Java SDK has a sizable backlog of 224 open issues with a 77% lifetime resolution rate (755/979 closed). The dominant concentration is the **test framework / time-skipping test server** (53 open issues, ~24% of the backlog) which is the source of both the top user-demand feature requests and a large cluster of correctness bugs (sleep hangs, time-skipping defects, retry behavior). The second-tier concerns are **Spring Boot integration**, **workflow replay determinism**, **observability/tracing modernization**, and a recently surfaced **critical** local-activity pool exhaustion bug ([#2823](https://github.com/temporalio/sdk-java/issues/2823)). The backlog grew by +21 issues over the last 12 months, with 173 issues (77%) considered stale (>1 year without activity), indicating triage debt is the largest housekeeping problem.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (open) | 84 | High — includes 1 critical and 27 high-severity correctness defects |
| Feature requests (open) | 132 | Mixed — dominated by test-framework gaps and Spring Boot ergonomics |
| Test framework & test server | 53 | High — 28 features + 25 bugs; top user-demand area |
| Workflow replay / determinism | 15 | High — non-determinism, marker, MutableSideEffect bugs |
| Observability (tracing/metrics) | 19 | Medium — OpenTracing legacy, missing OTel-native support |
| Spring Boot / Spring integration | 7 active opens | Medium — Spring Boot 4 just landed (closed); residual gaps remain |
| Dependency / security (Mend) | 4 | Medium — old Spring Boot 2.7.12 starter, ktlint, kotlin commonizer, grpc-netty-shaded |
| Stale issues (>1y no activity) | 173 (77%) | High — triage debt; many likely closable |
| Critical-severity bugs | 2 | Critical — must investigate immediately |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 100 |
| Total Comments | 218 |
| Issues with Upvotes | 35 (16%) |
| Issues with Comments | 94 (42%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 77% (755/979) |
| Median Time to Close | 29 days (calendar) / 21 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 65% |

The 90th percentile (798 calendar days) is heavy because of a long-tail of slow-to-close enhancements; recent 6-month closures are much faster (median 50 days).

### Recommended Actions

1. **Immediate:** Investigate the two critical-severity bugs — local activity executor pool exhaustion ([#2823](https://github.com/temporalio/sdk-java/issues/2823)) and the spring-boot-starter-2.7.12 vulnerability cluster ([#1890](https://github.com/temporalio/sdk-java/issues/1890), CVSS 9.8). Roll forward the Mend-flagged dependencies ([#1888](https://github.com/temporalio/sdk-java/issues/1888), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#2676](https://github.com/temporalio/sdk-java/issues/2676)).
2. **Short-term:** Fix the high-severity test-framework correctness cluster (sleep hangs in [#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392); 10-year timeout default in [#1426](https://github.com/temporalio/sdk-java/issues/1426); activity cancel error in [#2391](https://github.com/temporalio/sdk-java/issues/2391); promise / replay determinism bugs [#2046](https://github.com/temporalio/sdk-java/issues/2046), [#1668](https://github.com/temporalio/sdk-java/issues/1668), [#902](https://github.com/temporalio/sdk-java/issues/902)).
3. **Medium-term:** Land the two top user-demand features — `listWorkflowExecutions` in the test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693), 16 👍) and the embedded Temporal CLI test option ([#1804](https://github.com/temporalio/sdk-java/issues/1804), 10 👍). Together they would unblock test-framework parity. Modernize tracing to pure OTel ([#2394](https://github.com/temporalio/sdk-java/issues/2394), 6 👍).
4. **Long-term:** Address `@SignalMethod` threading ([#214](https://github.com/temporalio/sdk-java/issues/214), 6 👍), keep-alive heartbeats during worker shutdown ([#2075](https://github.com/temporalio/sdk-java/issues/2075), 5 👍), and explore the alternative-coroutine-model request ([#1845](https://github.com/temporalio/sdk-java/issues/1845), 15 👍).
5. **Housekeeping:** Triage the 173 stale issues; close the ones whose underlying functionality has shipped (Spring Boot 4 / Jackson 3 just closed in May 2026) and convert vague feature requests into actionable specs.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 105 | 84 | +21 |

📈 **Backlog Growing:** 21 more issues opened than closed in the last 12 months. The trend is modest but persistent — most months net positive, with only October 2025, March 2026, and June 2026 net-negative.

### Last 6 Months: Detailed Analysis

In the last 6 months the SDK closed two genuinely popular requests — Spring Boot 4 ([#2738](https://github.com/temporalio/sdk-java/issues/2738), 23 👍) and Jackson 3 ([#2746](https://github.com/temporalio/sdk-java/issues/2746), 14 👍) — both of which were the largest-engagement open issues at the time. Bug closure rate is unusually low (only 1 bug closed), indicating that closures have skewed toward enhancement delivery while bug intake (84 open bugs) continues to accumulate.

| Metric | Value |
|--------|-------|
| Issues Opened | 44 |
| Issues Closed | 32 |
| Bugs Closed | 1 |
| Enhancements Completed | 14 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 23 | Spring Boot 4 Support |
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 14 | Jackson 3 support |

A residual side-effect of the Jackson 3 work has appeared: [#2885](https://github.com/temporalio/sdk-java/issues/2885) reports that the `Jackson3JsonPayloadConverter(JsonMapper)` constructor is only visible to javac via `META-INF/versions/17/` — needs follow-up.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| 2 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 6 | 2 | Pure opentelemetry based tracing support instead of using tracershim |
| 5 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | @SignalMethod threading configuration |
| 6 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 5 | 2 | Add the ability to keep heartbeating while the worker is shutting down |
| 7 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| 8 | [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | Provide a recommended way to pass configuration into workflow |
| 9 | [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metricsscope per workflow execution |
| 10 | [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | TestWorkflowEnvironment sleep incorrect behaviour |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 38 | Support different coroutine models in workflows and activities |
| 2 | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 37 | Support listWorkflowExecutions in test server |
| 3 | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 20 | Add the possibility to run Temporal CLI server from test |
| 4 | [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 14 | Pure opentelemetry based tracing support instead of using tracershim |
| 5 | [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 12 | Add the ability to keep heartbeating while the worker is shutting down |
| 6 | [#214](https://github.com/temporalio/sdk-java/issues/214) | 12 | @SignalMethod threading configuration |
| 7 | [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 11 | Scala module |
| 8 | [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 10 | temporal java sdk is using an older version of grpc-netty-shaded |
| 9 | [#952](https://github.com/temporalio/sdk-java/issues/952) | 10 | OpenTracing duplicates user created spans during replay |
| 10 | [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 8 | Support for using Temporal Annotations as Meta Annotation |

---

## Issue Analysis by Category

### Critical Bugs (2 issues)

These warrant immediate attention regardless of engagement count.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2823](https://github.com/temporalio/sdk-java/issues/2823) | 0 | **Local activity executor pool exhaustion causes workflow to hang permanently** — when the local-activity thread pool is fully occupied by blocked activities, subsequently scheduled workflows hang with no automatic recovery; manual reset required. Production-impacting deadlock with no workaround. |
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 0 | **spring-boot-starter-2.7.12.jar: 9 vulnerabilities (highest 9.8)** — transitive snakeyaml/logback/spring-boot CVEs including CVE-2022-1471 (RCE via unsafe YAML deserialization). Bump the starter to a current Spring Boot line. |

### High-Severity Bugs (Top by Engagement)

There are 27 high-severity open bugs. The top 12 by upvotes + comments:

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | 2 | 3 | Failed promise before calling `allOf` is not failing the wrapped promise — silent loss of failures |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 1 | `TestWorkflowEnvironment` sleep incorrect behaviour |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | 6 | `DynamicWorkflow` not taking into account `WorkflowImplementationOptions` |
| [#2412](https://github.com/temporalio/sdk-java/issues/2412) | 1 | 2 | Marker Commands being sent with empty names in the wild |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | 2 | Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` on time-skipping server |
| [#2071](https://github.com/temporalio/sdk-java/issues/2071) | 1 | 2 | `KotlinObjectMapperFactory` is not forwards compatible |
| [#1246](https://github.com/temporalio/sdk-java/issues/1246) | 1 | 1 | Query not picked up by worker executing local activity for >1 minute |
| [#1698](https://github.com/temporalio/sdk-java/issues/1698) | 0 | 7 | `WorkflowImplementationOptions.FailWorkflowExceptionTypes` ignored for service failures |
| [#2042](https://github.com/temporalio/sdk-java/issues/2042) | 0 | 6 | Activity options merging logic is not correct |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | 6 | Test-server timeouts improperly set to 10 years when not user-set |
| [#2875](https://github.com/temporalio/sdk-java/issues/2875) | 0 | 2 | Update Validator doesn't serialize exceptions properly |
| [#2792](https://github.com/temporalio/sdk-java/issues/2792) | 0 | 2 | `ProtobufJsonPayloadConverter` does not work correctly with shaded artifact |

### Test Framework & Test Server (53 issues — 25 bugs, 28 features)

This is the SDK's largest single problem area: it contains the top two user-demand features and the largest correctness cluster.

#### Test-framework bugs (selected)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | `TestWorkflowEnvironment` sleep incorrect behaviour |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | Cancelling an activity → `FailedPrecondition: ACTIVITY_UNKNOWN` on time-skipping server |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | Test-server timeouts improperly set to 10 years when not user-set |
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | 0 | `TestWorkflowEnvironment#sleep` hangs indefinitely |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | 0 | Test environment sleep hangs on child workflows |
| [#2750](https://github.com/temporalio/sdk-java/issues/2750) | 0 | `TestStatsReporter` Flush not flushing |
| [#2246](https://github.com/temporalio/sdk-java/issues/2246) | 0 | Time-skipping past activity's `startToCloseTimeout` causes worker not to close |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | 0 | Test service time-skipping broken in a child workflow |
| [#1291](https://github.com/temporalio/sdk-java/issues/1291) | 0 | `Workflow.await(condition)` times out in unit tests with time skipping enabled |
| [#2674](https://github.com/temporalio/sdk-java/issues/2674) | 0 | `TestEnvironment` with external service throws `IllegalStateException` on failing tests |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | 0 | Test server does not error on already-started child workflow |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | 0 | Test service continue-as-new implementation is not atomic |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | 0 | Test server does not decrement time-skipping lock for outstanding heartbeats |

The hang/sleep/time-skipping cluster ([#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392), [#1618](https://github.com/temporalio/sdk-java/issues/1618), [#2246](https://github.com/temporalio/sdk-java/issues/2246), [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1291](https://github.com/temporalio/sdk-java/issues/1291)) almost certainly shares a single root cause around how the in-process test server arms timers in child workflows and after timeouts — strong candidate for a coordinated fix.

#### Test-framework features (top user demand)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | Support `listWorkflowExecutions` in test server (top user-demand item across the entire SDK) |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Add the possibility to run Temporal CLI server from tests (replace Java in-process test server) |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | Test framework for partial JSON history replay and continuing of execution |
| [#1988](https://github.com/temporalio/sdk-java/issues/1988) | 1 | Built-in way to override `activityOptions` in tests |
| [#1358](https://github.com/temporalio/sdk-java/issues/1358) | 1 | Add CI testing for the native test server |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | Extend `TestWorkflowExtension` to support custom task-queue name |
| [#1093](https://github.com/temporalio/sdk-java/issues/1093) | 0 | Add `ResetWorkflowExecution` support in Test Server |

Shipping [#1804](https://github.com/temporalio/sdk-java/issues/1804) (CLI-server-in-test option) would naturally subsume many of the in-process bugs above by giving users a real-server option for unit tests.

### Workflow Replay & Determinism (15 issues across replay/execution/determinism subcategories)

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | 0 | 0 | Subsequent `MutableSideEffect` calls inside one Workflow Task may explode with non-determinism on replay |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | 0 | 0 | Exception in one of several parallel workflow async functions leads to non-deterministic execution |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | 0 | 0 | State machine exception during termination |
| [#1830](https://github.com/temporalio/sdk-java/issues/1830) | 0 | 0 | `WorkflowReplayer` throws unclear exception when `LocalActivityOptions` are misconfigured |
| [#2846](https://github.com/temporalio/sdk-java/issues/2846) | 0 | 0 | `workflowcheck` OOM on large codebases |
| [#2412](https://github.com/temporalio/sdk-java/issues/2412) | 1 | 2 | Marker commands being sent with empty names in the wild |
| [#1201](https://github.com/temporalio/sdk-java/issues/1201) | 0 | 1 | `continue-as-new` does not carry over some attributes of parent run if not set explicitly |
| [#1781](https://github.com/temporalio/sdk-java/issues/1781) | 0 | 0 | Validate update protocol message type on replay |
| [#1707](https://github.com/temporalio/sdk-java/issues/1707) | 0 | 1 | `ServiceWorkflowHistoryIterator` should eagerly request the next page |
| [#2393](https://github.com/temporalio/sdk-java/issues/2393) | 0 | 0 | Add `patched()` and `deprecatePatch()` APIs |

The non-determinism bugs ([#1668](https://github.com/temporalio/sdk-java/issues/1668), [#902](https://github.com/temporalio/sdk-java/issues/902), [#2412](https://github.com/temporalio/sdk-java/issues/2412)) are silent-failure modes — high-severity even with zero upvotes. Note also that the Java SDK is missing the standard `patched()` / `deprecatePatch()` APIs ([#2393](https://github.com/temporalio/sdk-java/issues/2393)) other SDKs expose for versioning.

### Observability: Tracing & Metrics (19 issues)

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 6 | 2 | Pure OpenTelemetry-based tracing support instead of using tracershim |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | Allow contributions of tags of root worker metrics-scope per workflow execution |
| [#2092](https://github.com/temporalio/sdk-java/issues/2092) | 1 | 2 | `activity_succeed_endtoend_latency` not reported when completing via `ActivityCompletionClient` |
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | 10 | OpenTracing duplicates user-created spans during replay |
| [#2119](https://github.com/temporalio/sdk-java/issues/2119) | 0 | 2 | Missing metric reporting in local activity execution |
| [#2733](https://github.com/temporalio/sdk-java/issues/2733) | 0 | 1 | `activity_schedule_to_start_latency` reports `activity_type` unexpectedly |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | 0 | `OpenTracingWorkflowClientCallsInterceptor` missing `updateWithStart` support |
| [#2620](https://github.com/temporalio/sdk-java/issues/2620) | 0 | 0 | `OpenTracingClientInterceptor` missing `updateWithStart` support |
| [#1273](https://github.com/temporalio/sdk-java/issues/1273) | 0 | 0 | Option to print trace-id and span-id on java-sdk |
| [#1234](https://github.com/temporalio/sdk-java/issues/1234) | 0 | 0 | Provide default implementation of Prometheus scrape endpoint |
| [#862](https://github.com/temporalio/sdk-java/issues/862) | 0 | 0 | Make tracing tags consistent across SDKs |
| [#794](https://github.com/temporalio/sdk-java/issues/794) | 0 | 0 | Report replay metrics |

OpenTracing is still the in-tree tracer, but the OpenTracing project itself is archived; the OTel-native ask ([#2394](https://github.com/temporalio/sdk-java/issues/2394)) is the right north star and will retire the long tail of OpenTracing-specific bugs ([#952](https://github.com/temporalio/sdk-java/issues/952), [#2752](https://github.com/temporalio/sdk-java/issues/2752), [#2620](https://github.com/temporalio/sdk-java/issues/2620)).

### Dependency Security Vulnerabilities (4 Mend-flagged + 1 user-reported)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | critical | `spring-boot-starter-2.7.12.jar`: 9 vulnerabilities (highest CVSS 9.8) |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | high | `spring-boot-dependencies-2.7.12.pom`: 1 vulnerability (CVSS 7.5) |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | high | `ktlint-0.47.1.jar`: 2 vulnerabilities (highest CVSS 7.5) |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | medium | `kotlin-klib-commonizer-embeddable-1.5.32.jar`: 1 vulnerability (CVSS 5.3) |
| [#2676](https://github.com/temporalio/sdk-java/issues/2676) | medium | `grpc-netty-shaded` is on an older version with known vulnerabilities (8 comments — recurring user concern) |

The three Spring Boot 2.7.12 / Kotlin 1.5.32 / ktlint 0.47.1 vulnerabilities are stale (>1y) build-tooling references — bumping to current versions should close these in a single sweep. The grpc-netty-shaded one ([#2676](https://github.com/temporalio/sdk-java/issues/2676)) is the one users keep asking about.

### Local Activities (6 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2823](https://github.com/temporalio/sdk-java/issues/2823) | 0 | **Critical:** local-activity executor pool exhaustion causes permanent workflow hang |
| [#1346](https://github.com/temporalio/sdk-java/issues/1346) | 1 | Await on local activities shouldn't occupy workflow executor thread |
| [#1303](https://github.com/temporalio/sdk-java/issues/1303) | 0 | Cancellation of local activities |
| [#1727](https://github.com/temporalio/sdk-java/issues/1727) | 0 | Inconsistency on `MaximumAttempts` between local and normal activities |
| [#1563](https://github.com/temporalio/sdk-java/issues/1563) | 0 | Local activity execution should stop attempts if Workflow Task or subsequent heartbeat fails |
| [#2149](https://github.com/temporalio/sdk-java/issues/2149) | 0 | Revisit local-activity backpressure logic with no-max slot suppliers |

### Payload / Serialization (10 issues)

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#2885](https://github.com/temporalio/sdk-java/issues/2885) | 1 | 2 | `Jackson3JsonPayloadConverter(JsonMapper)` constructor not visible to javac (multi-release jar regression) |
| [#2071](https://github.com/temporalio/sdk-java/issues/2071) | 1 | 2 | `KotlinObjectMapperFactory` is not forwards compatible |
| [#2875](https://github.com/temporalio/sdk-java/issues/2875) | 0 | 2 | Update Validator doesn't serialize exceptions properly |
| [#2792](https://github.com/temporalio/sdk-java/issues/2792) | 0 | 2 | `ProtobufJsonPayloadConverter` does not work correctly with shaded artifact |
| [#2833](https://github.com/temporalio/sdk-java/issues/2833) | 0 | 1 | SDK should fail workflow task when payload size is known to be too large |
| [#2884](https://github.com/temporalio/sdk-java/issues/2884) | 0 | 0 | Allow payload visitors to visit memo payloads in aggregate |
| [#2881](https://github.com/temporalio/sdk-java/issues/2881) | 0 | 0 | Enable concurrent payload visiting |
| [#2880](https://github.com/temporalio/sdk-java/issues/2880) | 0 | 0 | External payload storage foundation |

The Jackson 3 follow-up ([#2885](https://github.com/temporalio/sdk-java/issues/2885)) and shaded-artifact regression ([#2792](https://github.com/temporalio/sdk-java/issues/2792)) indicate the Jackson 3 / shaded artifact packaging needs a verification pass.

### Spring Boot / Spring Integration (7 active opens, plus 2 recently closed top requests)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#2579](https://github.com/temporalio/sdk-java/issues/2579) | 1 | Non-root namespace Spring dependencies fail on app startup (high severity) |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | `@WorkflowImpl(workers = "...")` should support Spring property placeholders like `taskQueues` does |
| [#2064](https://github.com/temporalio/sdk-java/issues/2064) | 0 | Native image descriptor for GraalVM in `temporal-spring-boot-starter-alpha` |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Spring Boot Multi-Namespace: add annotation to specify Namespace a bean belongs to |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | Add Spring Boot integration for `SlotSupplier`s |
| [#2026](https://github.com/temporalio/sdk-java/issues/2026) | 0 | `[SpringBoot]` Add graceful shutdown wait time as property |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | Add `HealthIndicator` to spring-boot library |

Spring Boot 4 and Jackson 3 just closed — the residual asks are now placeholder support, multi-namespace declaration, GraalVM, and a HealthIndicator.

---

## API & Component Hotspots

The semantic data identifies which APIs and components recur most frequently across open issues.

### Top APIs by Issue Count

| API | Open Issues | Notes |
|-----|-------------|-------|
| `ExecuteActivity` | 8 | Cancellation, options merging, registration, metrics |
| `ActivityOptions` | 7 | Merging logic, override-in-test, defaults |
| `StartWorkflow` | 6 | Pairing with `getResult`, existing-workflow handling |
| `TestWorkflowEnvironment` | 6 | Sleep hangs, time skipping, child workflows |
| `WorkflowImplementationOptions` | 6 | Ignored in `DynamicWorkflow`, `FailWorkflowExceptionTypes` not honored for service failures |
| `ChildWorkflowOptions` | 5 | continue-as-new attribute inheritance, options propagation |
| `WorkflowStub` | 5 | `execute` vs `getResult` pairing, status reporting |
| `RetryOptions` | 4 | Inconsistencies between activity and local activity retries |
| `WorkflowClient` | 4 | Execution semantics, exception wrapping |

### Top Components by Issue Count

| Component | Open Issues | Severity Skew |
|-----------|-------------|---------------|
| `worker` | 32 | Mixed; many test-server and configuration items |
| `activity-executor` | 26 | High-severity cluster around cancellation, heartbeat, local-activity backpressure |
| `test-server` | 22 | Largely high-severity correctness bugs |
| `workflow-execution` | 15 | Includes determinism and termination bugs |
| `workflow-client` | 13 | Mix of bugs (`execute`/`getResult`) and ergonomics |
| `exception-handling` | 10 | `FailWorkflowExceptionTypes`, wrapping, serialization |
| `client` | 8 | Connection/health-check, namespace handling |
| `workflow-executor` | 8 | Determinism, deadlock detector noise |
| `logging` | 7 | MDC propagation, structured logging, WFT latency logging |
| `metrics` | 7 | Missing reports, tag conventions |
| `local-activity-executor` | 6 | Includes the **critical** [#2823](https://github.com/temporalio/sdk-java/issues/2823) |
| `payload-converter` | 5 | Jackson 3 visibility, shaded-artifact regressions |
| `spring-boot-starter` | 5 | Multi-namespace, placeholders, GraalVM, HealthIndicator |

`worker`, `activity-executor`, and `test-server` collectively touch over a third of open issues — they are the natural focal points for engineering investment.

---

## Enhancement Requests (132 issues)

### Test Framework Modernization (28 features)

The single most-requested area. See the "Test Framework & Test Server" section above for the user-demand items. Key drivers: parity with real server (list/reset), CLI-server-in-test option, more ergonomic extension APIs.

### Observability Modernization (~12 features)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 6 | Pure OTel tracing instead of tracershim |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | Per-workflow-execution metric tags on root worker scope |
| [#1234](https://github.com/temporalio/sdk-java/issues/1234) | 0 | Default Prometheus scrape endpoint |
| [#1273](https://github.com/temporalio/sdk-java/issues/1273) | 0 | Print trace-id / span-id |
| [#862](https://github.com/temporalio/sdk-java/issues/862) | 0 | Consistent tracing tags across SDKs |
| [#794](https://github.com/temporalio/sdk-java/issues/794) | 0 | Report replay metrics |
| [#1440](https://github.com/temporalio/sdk-java/issues/1440) | 0 | Reflect activity vs local-activity in tracing spans |
| [#2117](https://github.com/temporalio/sdk-java/issues/2117) | 0 | Allow customization of OTel span tags |
| [#2538](https://github.com/temporalio/sdk-java/issues/2538) | 0 | Counter metric for unaccessed failed promises |

### API Ergonomics / Workflow Programming Model

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Support different coroutine models in workflows and activities |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | `@SignalMethod` threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | Support Temporal annotations as meta-annotations |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | Recommended way to pass configuration into workflows |
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | Scala module |
| [#806](https://github.com/temporalio/sdk-java/issues/806) | 0 | `Workflow.retry` that takes a function to decide if retry is needed |
| [#1346](https://github.com/temporalio/sdk-java/issues/1346) | 1 | Await on local activities shouldn't occupy workflow executor thread |
| [#467](https://github.com/temporalio/sdk-java/issues/467) | 1 | Register multiple activity names for an activity |
| [#396](https://github.com/temporalio/sdk-java/issues/396) | 0 | Pluggable activity name provider |
| [#613](https://github.com/temporalio/sdk-java/issues/613) | 1 | Workflow stub method call should always wait for completion |
| [#1025](https://github.com/temporalio/sdk-java/issues/1025) | 1 | Sync/async start should allow "error or return existing execution" option |

### Reliability & Worker Lifecycle

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 5 | Keep heartbeating while worker is shutting down |
| [#1258](https://github.com/temporalio/sdk-java/issues/1258) | 0 | Retry heartbeats during transient network outages |
| [#1216](https://github.com/temporalio/sdk-java/issues/1216) | 0 | Log activity thread stack trace on heartbeat timeout/failure |
| [#2056](https://github.com/temporalio/sdk-java/issues/2056) | 1 | Async update implementations natively in Java |
| [#2030](https://github.com/temporalio/sdk-java/issues/2030) | 0 | `PauseableSlotSupplier` |
| [#2469](https://github.com/temporalio/sdk-java/issues/2469) | 0 | Worker Versioning high-level client |
| [#818](https://github.com/temporalio/sdk-java/issues/818) | 0 | Automatically supply `binaryChecksum` |

### Spring Boot Integration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | `@WorkflowImpl(workers = "...")` should support Spring property placeholders |
| [#2064](https://github.com/temporalio/sdk-java/issues/2064) | 0 | GraalVM native-image descriptor for spring-boot-starter-alpha |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | `HealthIndicator` for spring-boot library |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | Annotation to specify namespace for multi-namespace SpringBoot |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | SpringBoot integration for `SlotSupplier`s |
| [#2026](https://github.com/temporalio/sdk-java/issues/2026) | 0 | Graceful shutdown wait time as a property |

### Cross-SDK Feature Parity

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2393](https://github.com/temporalio/sdk-java/issues/2393) | 0 | Add `patched()` and `deprecatePatch()` APIs |
| [#2884](https://github.com/temporalio/sdk-java/issues/2884) | 0 | Payload visitors should visit memo payloads in aggregate |
| [#2881](https://github.com/temporalio/sdk-java/issues/2881) | 0 | Enable concurrent payload visiting |
| [#2880](https://github.com/temporalio/sdk-java/issues/2880) | 0 | External payload storage foundation |
| [#2882](https://github.com/temporalio/sdk-java/issues/2882) | 0 | S3 external storage driver |
| [#2883](https://github.com/temporalio/sdk-java/issues/2883) | 0 | SDK should log when WFT completion takes a long time |
| [#2878](https://github.com/temporalio/sdk-java/issues/2878) | 0 | Implement operator commands for standalone activities |
| [#2809](https://github.com/temporalio/sdk-java/issues/2809) | 0 | Conflict-token retry loop for schedule updates |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) — 173 issues (77% of open backlog)

This is the dominant housekeeping number. Most stale issues fall into three buckets:

- **Close candidates** — items whose underlying functionality has already shipped or been superseded. Notably, several Spring Boot 2.7 dependency-security issues are stale because the codebase has moved on; the recent Spring Boot 4 work makes these candidates for closure rather than fixing the 2.7 line. Examples: [#1888](https://github.com/temporalio/sdk-java/issues/1888), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952). Other stale closables: [#1346](https://github.com/temporalio/sdk-java/issues/1346) (Await on local activities) which may be obsolete with virtual-thread workers, and [#1715](https://github.com/temporalio/sdk-java/issues/1715) (last touched 2023).

- **Needs triage** — old, possibly-still-valid bugs without recent reproduction confirmation: [#1246](https://github.com/temporalio/sdk-java/issues/1246), [#1291](https://github.com/temporalio/sdk-java/issues/1291), [#1374](https://github.com/temporalio/sdk-java/issues/1374), [#1457](https://github.com/temporalio/sdk-java/issues/1457), [#1538](https://github.com/temporalio/sdk-java/issues/1538), [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1668](https://github.com/temporalio/sdk-java/issues/1668), [#902](https://github.com/temporalio/sdk-java/issues/902). Many of these are determinism / test-server bugs and likely still reproduce.

- **Keep open** — valid long-term enhancements with engagement: [#1693](https://github.com/temporalio/sdk-java/issues/1693) (16 👍, last touched 2025-02), [#1804](https://github.com/temporalio/sdk-java/issues/1804) (10 👍), [#214](https://github.com/temporalio/sdk-java/issues/214), [#1832](https://github.com/temporalio/sdk-java/issues/1832), [#827](https://github.com/temporalio/sdk-java/issues/827), [#1163](https://github.com/temporalio/sdk-java/issues/1163), [#1007](https://github.com/temporalio/sdk-java/issues/1007).

A focused triage pass (e.g., bot-prompted "still reproducing?" comments + 30-day window) could realistically close 30–50 of the 173 stale issues.

### Duplicate Candidates

Several issues likely describe the same underlying defect and could be consolidated:

- **Test-server sleep hang cluster:** [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2392](https://github.com/temporalio/sdk-java/issues/2392), [#1618](https://github.com/temporalio/sdk-java/issues/1618). All describe sleep / `await` semantics misbehaving under time skipping or with child workflows.
- **Test-server time-skipping correctness:** [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1291](https://github.com/temporalio/sdk-java/issues/1291), [#2246](https://github.com/temporalio/sdk-java/issues/2246), [#1138](https://github.com/temporalio/sdk-java/issues/1138) — share the same time-skipping-with-async-work root cause.
- **OpenTracing `updateWithStart` interceptor coverage gap:** [#2752](https://github.com/temporalio/sdk-java/issues/2752) and [#2620](https://github.com/temporalio/sdk-java/issues/2620) are the same gap on different interceptor classes.
- **`continue-as-new` attribute inheritance:** [#1201](https://github.com/temporalio/sdk-java/issues/1201) overlaps with parts of [#856](https://github.com/temporalio/sdk-java/issues/856).
- **Activity vs local-activity inconsistency:** [#1727](https://github.com/temporalio/sdk-java/issues/1727), [#2042](https://github.com/temporalio/sdk-java/issues/2042) — partial overlap on options/retries semantics.
- **Spring Boot 2.7 Mend findings:** [#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1888](https://github.com/temporalio/sdk-java/issues/1888), [#1952](https://github.com/temporalio/sdk-java/issues/1952) — all dispatched by the same dependency-roll work.

---

## Proposed Roadmap

### Phase 1: Stability (Immediate)

- Fix critical [#2823](https://github.com/temporalio/sdk-java/issues/2823) (local-activity executor deadlock) — production hang with no workaround.
- Resolve dependency vulnerabilities: [#1890](https://github.com/temporalio/sdk-java/issues/1890), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#1888](https://github.com/temporalio/sdk-java/issues/1888), [#2676](https://github.com/temporalio/sdk-java/issues/2676) (grpc-netty-shaded).
- Address the silent-failure determinism cluster: [#1668](https://github.com/temporalio/sdk-java/issues/1668), [#902](https://github.com/temporalio/sdk-java/issues/902), [#2046](https://github.com/temporalio/sdk-java/issues/2046), [#2412](https://github.com/temporalio/sdk-java/issues/2412).
- Verify the Jackson 3 packaging regression: [#2885](https://github.com/temporalio/sdk-java/issues/2885), [#2792](https://github.com/temporalio/sdk-java/issues/2792).

### Phase 2: Developer Experience (Short-term)

- Fix the test-server sleep/time-skipping cluster as a single coordinated effort: [#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#2392](https://github.com/temporalio/sdk-java/issues/2392), [#1426](https://github.com/temporalio/sdk-java/issues/1426), [#1540](https://github.com/temporalio/sdk-java/issues/1540), [#1291](https://github.com/temporalio/sdk-java/issues/1291), [#2246](https://github.com/temporalio/sdk-java/issues/2246).
- Fix the `WorkflowImplementationOptions` and `ActivityOptions` honoring bugs: [#1698](https://github.com/temporalio/sdk-java/issues/1698), [#1241](https://github.com/temporalio/sdk-java/issues/1241), [#2042](https://github.com/temporalio/sdk-java/issues/2042).
- Address the activity-cancel-on-time-skip bug: [#2391](https://github.com/temporalio/sdk-java/issues/2391).

### Phase 3: Feature Expansion (Medium-term)

- Land the two top user-demand asks: `listWorkflowExecutions` in test server ([#1693](https://github.com/temporalio/sdk-java/issues/1693), 16 👍) and the embedded CLI-server-in-test option ([#1804](https://github.com/temporalio/sdk-java/issues/1804), 10 👍). [#1804](https://github.com/temporalio/sdk-java/issues/1804) is the strategic answer that retires much of the in-process test-server backlog.
- Modernize tracing to pure OpenTelemetry ([#2394](https://github.com/temporalio/sdk-java/issues/2394), 6 👍) — retires the OpenTracing-specific bug tail.
- Add `patched()` / `deprecatePatch()` parity APIs ([#2393](https://github.com/temporalio/sdk-java/issues/2393)).
- Heartbeat-during-shutdown reliability ([#2075](https://github.com/temporalio/sdk-java/issues/2075), 5 👍) and heartbeat retries during outages ([#1258](https://github.com/temporalio/sdk-java/issues/1258)).
- Spring Boot ergonomics: property placeholders for workers ([#2747](https://github.com/temporalio/sdk-java/issues/2747)), HealthIndicator ([#1839](https://github.com/temporalio/sdk-java/issues/1839)), GraalVM native-image ([#2064](https://github.com/temporalio/sdk-java/issues/2064)).

### Phase 4: Maintenance (Ongoing)

- Triage and close ~30–50 of the 173 stale issues; consolidate the duplicate-candidate clusters above into single tracking issues.
- Continue dependency hygiene (Spring Boot, Jackson, grpc-netty, Kotlin toolchain).
- Build out observability metric coverage gaps ([#2092](https://github.com/temporalio/sdk-java/issues/2092), [#2119](https://github.com/temporalio/sdk-java/issues/2119), [#2733](https://github.com/temporalio/sdk-java/issues/2733), [#794](https://github.com/temporalio/sdk-java/issues/794)).
- Explore the long-tail ergonomic asks: meta-annotations ([#1832](https://github.com/temporalio/sdk-java/issues/1832)), workflow configuration injection ([#827](https://github.com/temporalio/sdk-java/issues/827)), per-execution metric tags ([#1163](https://github.com/temporalio/sdk-java/issues/1163)).
