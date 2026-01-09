# temporalio/sdk-java - Complete Issue Dump

**Generated:** 2026-01-09
**Total Issues:** 217
**Total Upvotes:** 104
**Total Comments:** 204

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 217 |
| Issues with Upvotes | 37 (17%) |
| Total Upvotes | 104 |
| Total Comments | 204 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 127 |
| test server | 37 |
| bug | 33 |
| Mend: dependency security vulnerability | 4 |
| wontfix | 3 |
| good first issue | 2 |
| next-gen | 1 |
| java | 1 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#1845](#1845) | 15 | 8 | Support different coroutine models in workflows and activities |
| [#1693](#1693) | 16 | 5 | Support listWorkflowExecutions in test server |
| [#1804](#1804) | 10 | 0 | Add the possibility to run Temporal CLI server from test  |
| [#2738](#2738) | 7 | 4 | Spring Boot 4 Support |
| [#214](#214) | 6 | 0 | @SignalMethod threading configuration |
| [#1007](#1007) | 2 | 7 | Scala module |
| [#952](#952) | 0 | 10 | OpenTracing duplicates user created spans during replay |
| [#2676](#2676) | 1 | 6 | temporal java sdk is using an older version of grpc-netty-shaded with vulnerabilities |
| [#1832](#1832) | 4 | 0 | Support for using Temporal Annotations as Meta Annotation |
| [#1241](#1241) | 1 | 6 | DynamicWorkflow not taking in account WorkflowImplementationOptions |
| [#827](#827) | 4 | 0 | Provide a recommended way to pass configuration into workflow  |
| [#2075](#2075) | 3 | 1 | Add the ability to keep heartbeating while the worker is shutting down |
| [#2046](#2046) | 2 | 3 | Failed promise before calling allOf is not failing the wrapped promise. |
| [#1698](#1698) | 0 | 7 | WorkflowImplementationOptions.FailWorkflowExceptionTypes ignored for service failures |
| [#1163](#1163) | 3 | 1 | Allow contributions of tags of root worker metricsscope per workflow execution |
| [#396](#396) | 0 | 7 | Pluggable activity name provider |
| [#2746](#2746) | 3 | 0 | Jackson 3 support |
| [#2042](#2042) | 0 | 6 | Activity options merging logic is not correct |
| [#1426](#1426) | 0 | 6 | Test server timeouts improperly set to 10 years when not user set |
| [#806](#806) | 0 | 6 | Workflow.retry that takes a function to decide if retry is needed |
| [#626](#626) | 0 | 6 | Excessive retries in test workflow environment |
| [#2642](#2642) | 2 | 0 | TestWorkflowEnvironment sleep incorrect behaviour |
| [#2412](#2412) | 1 | 2 | Marker Commands being sent with empty names in the wild |
| [#2394](#2394) | 2 | 0 | Pure opentelemetry based tracing support instead of using tracershim |
| [#2391](#2391) | 1 | 2 | [Bug] Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` error on time skipping server |
| [#2092](#2092) | 1 | 2 | activity_succeed_endtoend_latency not reported when completing the activity with ActivityCompletionClient |
| [#1969](#1969) | 0 | 4 | Provide WorkflowStatus in WorkflowNotFoundException when signing a workflow |
| [#1940](#1940) | 0 | 4 | Support Java Modules |
| [#1025](#1025) | 1 | 2 | In case of existing workflow both sync and async executions should have an option to error out or return an existing execution |
| [#995](#995) | 0 | 4 | Inheritance of workflow interfaces is not supported |
| [#811](#811) | 2 | 0 | Add test framework for partial json history replay and continuing of execution |
| [#631](#631) | 2 | 0 | DeterministicRunner is noisy about not accessed cancelled scopes and timers |
| [#525](#525) | 1 | 2 | Allow context propagators & interceptors to populate ActivityExecutionContext |
| [#467](#467) | 1 | 2 | Register multiple activity names for an activity |
| [#317](#317) | 0 | 4 | Published artifacts do not include sources for the generated code |
| [#86](#86) | 0 | 4 | Support passing activityId to an activity invocation |
| [#2312](#2312) | 1 | 1 | `Workflow.await(duration, condition)` does not automatically cancel the timer if the condition is resolved |
| [#2056](#2056) | 1 | 1 | Allow users to implement update asynchronously in Java natively |
| [#1988](#1988) | 1 | 1 | Have a built-in way to override activityOptions in tests |
| [#1540](#1540) | 0 | 3 | Test service time skipping broken in a child workflow |
| [#1291](#1291) | 0 | 3 | Workflow execution with Workflow.await(condition) times out in unit tests with enabled time skipping |
| [#1246](#1246) | 1 | 1 | Query is not picked up by the worker executing local activity for more than a minute |
| [#1093](#1093) | 0 | 3 | Add ResetWorkflowExecution support in Test Server |
| [#1010](#1010) | 0 | 3 | Workflow should have an access to an activity id of the activity it scheduled |
| [#630](#630) | 0 | 3 | Flaky testShouldReturnQueryResultAfterWorkflowTimeout |
| [#228](#228) | 1 | 1 | Expose activity start and completion information to the workflow code. |
| [#2741](#2741) | 1 | 0 | Support non-workflow activities |
| [#2579](#2579) | 1 | 0 | Non-root namespace Spring dependencies fail on app startup |
| [#2308](#2308) | 0 | 2 | Add WorkflowIdConflictPolicy in child workflow options  |
| [#2122](#2122) | 0 | 2 | Java SDK does not have option to register workflow name statically |
| [#2119](#2119) | 0 | 2 | Missing metric reporting in local activity execution |
| [#2064](#2064) | 0 | 2 | Native image descriptor for GraalVM in the temporal-spring-boot-starter-alpha |
| [#2063](#2063) | 1 | 0 | Extend TestWorkflowExtension to support specifying a custom task queue name |
| [#2034](#2034) | 0 | 2 | Provide way to populate activity execution context for activity unit tests |
| [#1937](#1937) | 0 | 2 | Support a promise-based await |
| [#1715](#1715) | 1 | 0 | WorkerOptions should enforce an amount of executors to be not less than an amount of pollers |
| [#1681](#1681) | 0 | 2 | Exceptions thrown from workflow executor code shouldn't be subject to failWorkflowExceptionTypes |
| [#1531](#1531) | 0 | 2 | Declaring ActivityStub using annotation instead of newActivityStub |
| [#1358](#1358) | 1 | 0 | Add CI testing for the native test server |
| [#1346](#1346) | 1 | 0 | Await on Local Activities shouldn't occupy workflow executor thread |
| [#1303](#1303) | 0 | 2 | Cancelation of Local Activities |
| [#1211](#1211) | 1 | 0 | MDC context logging properties not propagating inside promise.handle |
| [#896](#896) | 0 | 2 | Workflow should be able to ignore CancellationFailure and finish successfully |
| [#883](#883) | 0 | 2 | Workers don't reset sticky queue when workflow execution is evicted from the cache |
| [#696](#696) | 0 | 2 | Port fix for following execution chain from Go SDK |
| [#613](#613) | 1 | 0 | Calling workflow method on the workflow stub should always wait for the workflow completion. |
| [#2](#2) | 0 | 2 | Refactor ReplayWorkflowContext out of WorkflowThread |
| [#2753](#2753) | 0 | 1 | Unexpected Activity Timeout Behavior After Worker Crash & Need for CancellationScope Status Check |
| [#2733](#2733) | 0 | 1 | activity_schedule_to_start_latency reports activity_type unexpectedly |
| [#2728](#2728) | 0 | 1 | ScheduleRange to check end |
| [#2674](#2674) | 0 | 1 | TestEnvironment with external service - failing tests throws IllegalStateException errors |
| [#2670](#2670) | 0 | 1 | TestWorkflowEnvironment#sleep hangs indefinitely |
| [#2578](#2578) | 0 | 1 | `startUpdate` JavaDoc says "asynchronously" when it may not be |
| [#2573](#2573) | 0 | 1 | Support for ManualCompletion in TestActivity Env |
| [#2499](#2499) | 0 | 1 | Support pluggable workflow caches |
| [#2482](#2482) | 0 | 1 | Merging ActivityOptions fails with UnsupportedOperationException when using immutable lists for context propagators |
| [#2461](#2461) | 0 | 1 | [Feature Request] Utility to detect when deadlock detector triggers |
| [#2392](#2392) | 0 | 1 | [Bug] Test environment sleep hangs on child workflows  |
| [#2364](#2364) | 0 | 1 | TestWorkflowEnvironment issue with setting search attributes in ContinueAsNewOptions |
| [#2321](#2321) | 0 | 1 | TestWorkflowEnvironment does not allow signalWithStart when workflow already exists |
| [#2213](#2213) | 0 | 1 | Signal w/ Start API Improvements - Java |
| [#2124](#2124) | 0 | 1 | MDC custom naming convention |
| [#2117](#2117) | 0 | 1 | Allow customization of OTel span tags |
| [#2071](#2071) | 0 | 1 | KotlinObjectMapperFactory is not forwards compatible |
| [#1963](#1963) | 0 | 1 | Schedule creation should create tracing span by default |
| [#1914](#1914) | 0 | 1 | Support cancellation of long client calls |
| [#1913](#1913) | 0 | 1 | Remove WorkflowClientCallsInterceptor.pollWorkflowUpdate |
| [#1707](#1707) | 0 | 1 | ServiceWorkflowHistoryIterator should eagerly request the next page |
| [#1374](#1374) | 0 | 1 | External workflow signal from a workflow code throws incorrect exceptions |
| [#1373](#1373) | 0 | 1 | Child Workflow creation API should allow user to specify a custom data converter |
| [#1201](#1201) | 0 | 1 | Revisit continue-as-new that doesn't carry over some attributes of parent run if not set explicitly |
| [#1139](#1139) | 0 | 1 | TestWorkflowEnvironment - add support for filtering for ListOpenWorkflowExecutions |
| [#1138](#1138) | 0 | 1 | Test server does not decrement time skipping lock for outstanding activities on workflow completion |
| [#1107](#1107) | 0 | 1 | Workflow metadata resolution code registers an overridden method from parent class as a second query |
| [#1051](#1051) | 0 | 1 | PollWorkflowTaskQueueResponse should be available for interception |
| [#1005](#1005) | 0 | 1 | Provide ActivityExecutionContext#isCancelled |
| [#856](#856) | 0 | 1 | WorkflowClient#execute doesn't pair correctly with workflowStub.getResult() |
| [#652](#652) | 0 | 1 | Make WorkflowStub#getResult timeout configurable on WorkflowOptions |
| [#499](#499) | 0 | 1 | Handle all exceptions as non-retryable when TEMPORAL_DEBUG is set |
| [#341](#341) | 0 | 1 | Support robfig style cron defs in TestWorkflowEnvironment |
| [#305](#305) | 0 | 1 | Run Saga compensations in a disconnected scope |
| [#302](#302) | 0 | 1 | Print stacktrace coming from another language in the exception message |
| [#88](#88) | 0 | 1 | Customer needs to specify timeout for start workflow call |
| [#57](#57) | 0 | 1 | Automatically reconnect to the service when it changes ip address |
| [#2755](#2755) | 0 | 0 | Support using Temporal failures in Nexus APIs |
| [#2754](#2754) | 0 | 0 | Environment Configuration does not read the correct file path on macOS |
| [#2752](#2752) | 0 | 0 | OpenTracingWorkflowClientCallsInterceptor - support for updateWithStart is not present |
| [#2750](#2750) | 0 | 0 | Tests not passing: TestStatsReporter Flush not flushing |
| [#2747](#2747) | 0 | 0 | @WorkflowImpl(workers = "...") should support Spring property placeholders like taskQueues does |
| [#2745](#2745) | 0 | 0 | WorkerOptions isUsingVirtualThreadsOnWorkflowWorker issue |
| [#2726](#2726) | 0 | 0 | Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#2716](#2716) | 0 | 0 | Worker Heartbeating |
| [#2661](#2661) | 0 | 0 | Set history size and suggest continue as new on task start attributes in test server |
| [#2656](#2656) | 0 | 0 | Springboot Multi Namespace: Add annotation to specify Namespace a bean belongs too |
| [#2655](#2655) | 0 | 0 | Testing server continue-as-new doesn't carry memo/search attributes |
| [#2650](#2650) | 0 | 0 | Ensure tests exist to confirm custom slot supplier slot info has proper fields |
| [#2626](#2626) | 0 | 0 | Plugin support |
| [#2620](#2620) | 0 | 0 | OpenTracingClientInterceptor add support for updateWithStart |
| [#2606](#2606) | 0 | 0 | TestWorkflowMutableStateImpl - race condition between TimerFired event and CancelTimer command |
| [#2598](#2598) | 0 | 0 | Allow specifying activity options for specific activity call |
| [#2592](#2592) | 0 | 0 | Python Nexus tests failing under Java test server |
| [#2586](#2586) | 0 | 0 | Time skipping server drops headers in workflow signal |
| [#2582](#2582) | 0 | 0 | Null cause in Nexus HandlerException is not handled correctly |
| [#2538](#2538) | 0 | 0 | [Feature Request]  Add counter metric for unaccessed failed promises |
| [#2521](#2521) | 0 | 0 | Workflow instance should be accessible in test environment for simple assertion |
| [#2480](#2480) | 0 | 0 | Memo-s not present in listOpenWorkflowExecutions when running with temporal-testing |
| [#2469](#2469) | 0 | 0 | [Java] Worker Versioning high level client |
| [#2393](#2393) | 0 | 0 | Add `patched()` and `deprecatePatch()` APIs |
| [#2359](#2359) | 0 | 0 | Clarify `UnableToAcquireLockException` |
| [#2333](#2333) | 0 | 0 | `taskTimeoutWillRescheduleTheTaskOnTheGlobalList ` on the test server is flaky |
| [#2307](#2307) | 0 | 0 | Removing a `Workflow.GetVersion` call can cause NDE if there are multiple parallel workflow threads running. |
| [#2283](#2283) | 0 | 0 | Auto-skip time in time-skipping testing environment when waiting on update result |
| [#2246](#2246) | 0 | 0 | Time-skipping past activity’s startToCloseTimeout causes worker not to close |
| [#2232](#2232) | 0 | 0 | Fix inconsistency in javadoc for WorkflowInterface |
| [#2229](#2229) | 0 | 0 | Add TestNexusEnvironment similar to TestActivityEnvironment |
| [#2160](#2160) | 0 | 0 | Child workflow cancellation can trigger SDK event loop without a WFT Started |
| [#2149](#2149) | 0 | 0 | Revisit local activity backpressure logic w/ no-max slot suppliers |
| [#2148](#2148) | 0 | 0 | Better toString representations on service stub options |
| [#2127](#2127) | 0 | 0 | Test server sometimes fails to include signal in first WFT |
| [#2077](#2077) | 0 | 0 | TestWorkflowEnvironment, TestWorkflowRule, TestWorkflowExtension - auto-register search attributes from WorkflowStub  |
| [#2051](#2051) | 0 | 0 | Ability to specify activity timeouts via annotation in Java SDK |
| [#2031](#2031) | 0 | 0 | Add SpringBoot integration for `SlotSupplier`s |
| [#2030](#2030) | 0 | 0 | Add `PauseableSlotSupplier` |
| [#2026](#2026) | 0 | 0 | [SpringBoot] Add graceful shutdown wait time as property |
| [#2017](#2017) | 0 | 0 | [Feature Request] Use macOS M1/ARM runners for all SDK CI |
| [#1987](#1987) | 0 | 0 | Configurable workflow exception types at the worker level |
| [#1981](#1981) | 0 | 0 | Add source code to shaded library |
| [#1952](#1952) | 0 | 0 | ktlint-0.47.1.jar: 2 vulnerabilities (highest severity is: 7.5) |
| [#1951](#1951) | 0 | 0 | spring-boot-dependencies-2.7.12.pom: 1 vulnerabilities (highest severity is: 7.5) |
| [#1920](#1920) | 0 | 0 | Support bind address for test server |
| [#1890](#1890) | 0 | 0 | spring-boot-starter-2.7.12.jar: 9 vulnerabilities (highest severity is: 9.8) |
| [#1888](#1888) | 0 | 0 | kotlin-klib-commonizer-embeddable-1.5.32.jar: 1 vulnerabilities (highest severity is: 5.3) |
| [#1839](#1839) | 0 | 0 | Add HealthIndicator to spring-boot library |
| [#1830](#1830) | 0 | 0 | WorkflowReplayer throws unclear exception when LocalActivityOptions are misconfigured |
| [#1825](#1825) | 0 | 0 | Support the certificate with linebreak strings from env variable |
| [#1820](#1820) | 0 | 0 | Exceptions thrown from ScheduleClient and ScheduleHandle should be wrapped in a TemporalException |
| [#1781](#1781) | 0 | 0 | Validate update protocol message type on replay |
| [#1767](#1767) | 0 | 0 | Log server-side task failure caused by invalid command in test server |
| [#1727](#1727) | 0 | 0 | inconsistency on MaximumAttempts attribute between local activities and "normal" activities |
| [#1668](#1668) | 0 | 0 | Subsequent MutableSideEffect calls inside one Workflow Task may explode with non-determinism on replay |
| [#1644](#1644) | 0 | 0 | ContextPropagator redesign |
| [#1642](#1642) | 0 | 0 | Add history pagination to Test Server |
| [#1621](#1621) | 0 | 0 | Allow setting *additional* memo values in ContinueAsNewOptions |
| [#1618](#1618) | 0 | 0 | Test server with child workflow and signal is timing out when attemping unlock-with-sleep |
| [#1586](#1586) | 0 | 0 | Opt-in to having stack trace query use custom data converter |
| [#1579](#1579) | 0 | 0 | [Feature Request] Improving replay issue for Timers |
| [#1563](#1563) | 0 | 0 | Local Activity Execution should stop making attempts if Workflow Task or subsequent heartbeat fails |
| [#1549](#1549) | 0 | 0 | Metric scope for workflow instance should ignore metrics written after a destruction of the instance is requested |
| [#1538](#1538) | 0 | 0 | Test service continue-as-new implementation is not atomic |
| [#1535](#1535) | 0 | 0 | Improve diagnostic message printed by TestWorkflowRule on timeout. |
| [#1457](#1457) | 0 | 0 | State machine exception during termination |
| [#1440](#1440) | 0 | 0 | Reflect activity vs local activity difference in tracing spans |
| [#1429](#1429) | 0 | 0 | Test server does not error on already-started child workflow |
| [#1413](#1413) | 0 | 0 | Deduplicate getResultAsync calls inside WorkflowClient or WorkflowStub |
| [#1403](#1403) | 0 | 0 | Test Server should add warning logging if no workers listen on a task queue with tasks |
| [#1377](#1377) | 0 | 0 | Predictable log statement when test server is ready for use |
| [#1354](#1354) | 0 | 0 | Unit Test for  ActivityCompletionClient methods that don't use taskToken |
| [#1273](#1273) | 0 | 0 | provide an option to print trace-id and span-id on java-sdk  |
| [#1266](#1266) | 0 | 0 | Add unit test covering scenario of Server outage during Worker sending workflow task execution result |
| [#1258](#1258) | 0 | 0 | Make activity heartbeats more robust to network outages by retrying them |
| [#1257](#1257) | 0 | 0 | Cached activity heartbeat prevents worker from a quick shutdown |
| [#1242](#1242) | 0 | 0 | Revisit history pagination  |
| [#1234](#1234) | 0 | 0 | Provide default implementation of Prometheus scrape endpoint |
| [#1216](#1216) | 0 | 0 | Log activity thread stack trace if it times out or fails to heartbeat |
| [#1212](#1212) | 0 | 0 | Cancel long poll if a Future returned from getResultAsync is not referenced anymore by the user code |
| [#1141](#1141) | 0 | 0 | Deadlock Detector unexpectedly firing on a cold JVM |
| [#1113](#1113) | 0 | 0 | Unbalance external workflow configuration? |
| [#1098](#1098) | 0 | 0 | Provide ActivityStub#fromTyped |
| [#1081](#1081) | 0 | 0 | Test flakes with Real Temporal Server leading to infinite activity retry |
| [#1079](#1079) | 0 | 0 | Issue with TestWorkflowEnvironment and ParentClosePolicy |
| [#1069](#1069) | 0 | 0 | TestWorkflowEnvironment schedules the first activity retry immediately |
| [#1050](#1050) | 0 | 0 | Activity interface which extends an interface with some method using generic types always throws a ClassCastException when said method is called in a Workflow |
| [#1035](#1035) | 0 | 0 | Add metric for time passed from the activity scheduling to the last attempt |
| [#1019](#1019) | 0 | 0 | Log long poll failures (but not too frequently to avoid spamming) |
| [#1009](#1009) | 0 | 0 | Provide ActivityStub that is bound to the specific activityType or a specific invocation |
| [#902](#902) | 0 | 0 | Exception in one of several "parallel" workflow async functions leads to non-deterministic execution |
| [#862](#862) | 0 | 0 | Make tracing tags consistent across SDKs |
| [#860](#860) | 0 | 0 | Passing too large blob as an Activity input ends with non-descriptive gRPC error |
| [#857](#857) | 0 | 0 | Expose SignalExternalWorkflowExecutionCommandAttributes.ChildWorkflowOnly in SDK API |
| [#851](#851) | 0 | 0 | Allow more granular setting of QueryRejectCondition  |
| [#818](#818) | 0 | 0 | Automatically supply binaryChecksum |
| [#794](#794) | 0 | 0 | Report replay metrics |
| [#753](#753) | 0 | 0 | Offer ActivityOptions via Supplier to support dynamic configs |
| [#748](#748) | 0 | 0 | Provide a way to inject options into Workflow instances |
| [#746](#746) | 0 | 0 | Reuse of ActivityStubs from another workflow should produce a usable diagnostic or be allowed |
| [#732](#732) | 0 | 0 | Remove TestWorkflowRule#testTimeoutSeconds |
| [#731](#731) | 0 | 0 | Activities that return with interrupted flag should be successfully reported as Completed |
| [#665](#665) | 0 | 0 | Allow users to specify or influence RpcRetryOptions for all kinds of GrpcRetries |
| [#661](#661) | 0 | 0 | Sync versions of GrpcRetryer should throw InterruptedException  |
| [#608](#608) | 0 | 0 | GRPC falling into in-process server long polls after interruption breaks graceful Worker Pollers shutdown |
| [#597](#597) | 0 | 0 | Support assertions in `TestWorkflowEnvironment.registerDelayedCallback` |
| [#456](#456) | 0 | 0 | Duplicate concurrent workflow - hangs on completion |
| [#392](#392) | 0 | 0 | TimeLockingFuture implementation is incorrect and easy to break  |
| [#262](#262) | 0 | 0 | TestWorkflowEnvironment: Set close time on the visibility record |
| [#235](#235) | 0 | 0 | Make PollerOptions.uncaughtExceptionHandler from workflowOptions etc. |
| [#227](#227) | 0 | 0 | Enable Serialization on WorkflowQueue  |
| [#193](#193) | 0 | 0 | Update all state machines to avoid self transitions and hidden logic |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="1845"></a>

### #1845: Support different coroutine models in workflows and activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1845 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-16 16:00:21.000 UTC (2y 4m ago) |
| **Updated** | 2025-12-28 18:33:03.000 UTC |
| **Upvotes** | 15 |
| **Comments** | 8 |
| **Priority Score** | 38 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 15 👀 7 |

#### Description

**Describe the solution you'd like**

Need to several things:

* May need to slightly abstract workflow concurrency impl to support (but may not)
* Update Kotlin project to add support for Kotlin coroutines in workflows and activities as Kotlin `suspend fun` calls (may need to be opt-in in some way). There is an internal POC implementation from @mfateev we can leverage here.
* Create a new Java 21+ only "temporal-virtual-threads" project that uses virtual threads for workflow concurrency and runs activities in virtual threads (may need to be opt-in in some way)

This is kinda a big project, so some discussion should happen first. The above is just speculation about what to do.

#### Comments (8)

<details>
<summary><strong>rocketraman</strong> commented on 2023-11-17 17:50:36.000 UTC</summary>

As a Kotlin user who is getting started with Temporal, I would love to see this. Calls like `Workflow.sleep()` block a platform thread, which isn't scalable and is annoying in principle even where its not an actual scalability issue :-)

Kotlin coroutines, and more recently with the release of JDK 21 and Java virtual threads, are a perfect solution to this problem as they take up almost no resources while blocked on workflow sleep or activity calls.

I know nothing about the Java SDK internals, but looking at it from the outside in, the most basic abstraction of an async call is a callback. These are easy to bridge to suspending calls in Kotlin, and presumably to Java fibers. So if the SDK exposed async versions of its API that took a callback to resume the workflow execution, this would be easy to turn back into regular synchronous but non-blocking code via coroutines, and presumably fibers.

Issues which are probably duplicates or at least related to this one, based on the search I just did:
* https://github.com/temporalio/sdk-java/issues/1849
* https://github.com/temporalio/sdk-java/issues/778


Reactions: 👍 6

</details>

<details>
<summary><strong>pol-osei</strong> commented on 2025-06-17 19:03:18.000 UTC</summary>

Did anyone ever figure out a good way of doing this?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-17 19:12:58.000 UTC</summary>

The Temporal Java SDK already supports Java Virtual Threads, there are currently no active plans to support Kotlin coroutines at this time.

</details>

<details>
<summary><strong>rocketraman</strong> commented on 2025-06-17 19:52:53.000 UTC</summary>

> The Temporal Java SDK already supports Java Virtual Threads

👍 

> there are currently active plans to support Kotlin coroutines at this time.

@Quinn-With-Two-Ns The "at this time" makes this confusing. Did you mean "**no** active plans to support Kotlin coroutines at this time" here?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-17 20:07:30.000 UTC</summary>

Yes thank you, updated my comment

</details>

<details>
<summary><strong>smocherla-brex</strong> commented on 2025-12-08 14:48:31.000 UTC</summary>

I still think supporting coroutines as a first class async-primitive in the Temporal SDK would be a important/highly useful feature. The problem with using Temporal Java SDK in Kotlin is we have to bridge the workflow/activity context thread locals into a coroutine context for proper context propagation and cancellation when using it in Kotlin, and it makes it a lot more work for consumers of the SDK. It's not clear to me that using virtual threads in itself solves that problem.

Reactions: 👍 1

</details>

<details>
<summary><strong>alekseev-a-v</strong> commented on 2025-12-23 11:54:12.000 UTC</summary>

I would like to work on this (suspend fun support)

Reactions: 🚀 1

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-28 18:33:03.000 UTC</summary>

@alekseev-a-v Thank you for the offer, but this is not something we are accepting contributions for at this time

</details>


---

<a id="1693"></a>

### #1693: Support listWorkflowExecutions in test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1693 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-03-09 01:14:15.000 UTC (2y 10m ago) |
| **Updated** | 2025-02-26 16:57:59.000 UTC |
| **Upvotes** | 16 |
| **Comments** | 5 |
| **Priority Score** | 37 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 16 |

#### Description

Test server only implements list open / closed, need support for this since all SDKs now have a high level API to list workflows that relies on this endpoint.

#### Comments (5)

<details>
<summary><strong>subhidh-agarwal</strong> commented on 2024-06-15 16:56:20.000 UTC</summary>

Hey anything yet?

</details>

<details>
<summary><strong>rocketraman</strong> commented on 2024-10-29 22:34:19.000 UTC</summary>

According to [the forum post that pointed me to this issue](https://community.temporal.io/t/inability-to-list-workflow-executions-with-test-environment/7471/4) we can use the `ListOpenWorkflowExecutionsRequest` or `ListClosedWorkflowExecutionsRequest` endpoints instead. Is there a way to access these endpoints via the Java SDK?


</details>

<details>
<summary><strong>rocketraman</strong> commented on 2024-11-01 13:52:27.000 UTC</summary>

> According to [the forum post that pointed me to this issue](https://community.temporal.io/t/inability-to-list-workflow-executions-with-test-environment/7471/4) we can use the `ListOpenWorkflowExecutionsRequest` or `ListClosedWorkflowExecutionsRequest` endpoints instead. Is there a way to access these endpoints via the Java SDK?

This is the code I used:

```kotlin
  fun listOpenWorkflowExecutions(client: WorkflowClient, workflowTypeName: String): List<WorkflowExecutionInfo> {
    val stub = client.workflowServiceStubs.blockingStub()
    val request = ListOpenWorkflowExecutionsRequest.newBuilder()
      .setNamespace(client.options.namespace)
      .setTypeFilter(WorkflowTypeFilter.newBuilder().setName(workflowTypeName).build())
      .build()
    return stub.listOpenWorkflowExecutions(request).executionsList
  }
```

Reactions: 👍 1

</details>

<details>
<summary><strong>jakubbrzeski</strong> commented on 2025-02-26 15:33:28.000 UTC</summary>

Hi, are there any updates on this ? I need to query workflow executions with specific search attribute and then terminate and delete the execution. Test Environment doesn't support neither `workflowClient.getWorkflowServiceStubs().blockingStub().listWorkflowExecutions` nor `workflowClient.getWorkflowServiceStubs().blockingStub().listWorkflowExecutions`.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-02-26 16:57:58.000 UTC</summary>

Any update would be posted on this issue. This is a large amount of work to add because the test server currently has no support for querying search attribute.

</details>


---

<a id="1804"></a>

### #1804: Add the possibility to run Temporal CLI server from test 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1804 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-06-30 10:23:35.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-30 10:23:35.000 UTC |
| **Upvotes** | 10 |
| **Comments** | 0 |
| **Priority Score** | 20 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 10 |

#### Description

**Is your feature request related to a problem? Please describe.**

Other SDKs allows starting a full Temporal server locally for testing purpose.

Eg typescript: `TestWorkflowEnvironment.createLocal()`

I would like to have the same in Java, it will help to test features that are not implemented in test env, like listWorkflowExecution 


**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



---

<a id="2738"></a>

### #2738: Spring Boot 4 Support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2738 |
| **State** | OPEN |
| **Author** | anatoliy-pylypchuk-kg (Anatoliy Pylypchuk) |
| **Created** | 2025-11-27 09:43:59.000 UTC (1 months ago) |
| **Updated** | 2025-12-09 23:15:35.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 4 |
| **Priority Score** | 18 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 7 |

#### Description

**Is your feature request related to a problem? Please describe.**

Currently, Temporal SDK [supports Spring Boot 2 and 3](https://docs.temporal.io/develop/java/spring-boot-integration). Spring Boot 4 has [already come out](https://spring.io/blog/2025/11/20/spring-boot-4-0-0-available-now), so it would be great if Temporal SDK adds support for it as well.

**Describe the solution you'd like**

I haven't tested it, so maybe it already works as-is, but I'm almost sure some changes will be required to support Spring Boot 4 due to [its modularization](https://spring.io/blog/2025/10/28/modularizing-spring-boot).

**Describe alternatives you've considered**

Of course, it's possible to use a custom Spring Boot integration layer based on the core Temporal SDK which supports Spring Boot 4, but since it was released only a week ago, it doesn't make sense to rush and upgrade instantly, so we can wait.

**Additional context**

Since the open-source support of Spring Boot 2 ended in 2023, I think it would be reasonable to drop support for this version in Temporal SDK and only support the latest two versions of Spring Boot. Of course, it's up to you to decide, this is just a suggestion.

#### Comments (4)

<details>
<summary><strong>anatoliy-pylypchuk-kg</strong> commented on 2025-11-27 09:45:44.000 UTC</summary>

Also, while Spring Boot 4 supports Jackson 2, this support is deprecated, so in order to fully support Spring Boot 4, support for Jackson 3 will also be required.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-01 17:15:00.000 UTC</summary>

Yes Springboot 4 support is something we are interested in. Will require some investigation on what if any changes are needed and how we can maintain compatibility with previous versions. 

I am not aware of any Jackson 3 related issues.

Reactions: 👍 2

</details>

<details>
<summary><strong>GreyTeardrop</strong> commented on 2025-12-03 13:26:06.000 UTC</summary>

> I am not aware of any Jackson 3 related issues.

[Jackson 3](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.0) is an entirely incompatible major version - different artifact names, different packages, different exception hierarchies, etc. Supporting Jackson 3 would probably require new `Jackson3JsonPayloadConverter`. 

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-09 23:11:41.000 UTC</summary>

> Supporting Jackson 3 would probably require new Jackson3JsonPayloadConverter.

Yes agree there, but Jackson 3 support in the SDK is a separate issue from Spring Boot 4 support. tracked [here](https://github.com/temporalio/sdk-java/issues/2746)

Reactions: 👍 2

</details>


---

<a id="214"></a>

### #214: @SignalMethod threading configuration

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/214 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-09-18 03:22:24.000 UTC (5y 3m ago) |
| **Updated** | 2020-09-18 03:22:24.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 0 |
| **Priority Score** | 12 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 |

#### Description

**Is your feature request related to a problem? Please describe.**
Each signal causes execution of a method annotated with @SignalMethod in its own thread. It means if the signal handling method blocks execution all other signals are still delivered through other threads.

In some scenarios the preferred semantic would be using a single thread to deliver all signals of the given type. This way workflow can flow control their processing. So while signal handling method is blocked all other signals are queued up waiting for thread to become available.

**Describe the solution you'd like**
Default signal handling to a single thread and provide an option through @SignalMethod parameter to multithreaded dispatch. Or do not provide multithreaded dispatch at all.

**Describe alternatives you've considered**
Keep it as it is.




---

<a id="1007"></a>

### #1007: Scala module

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1007 |
| **State** | OPEN |
| **Author** | doruchiulan (Doru Chiulan) |
| **Created** | 2020-04-28 21:47:27.000 UTC (5y 8m ago) |
| **Updated** | 2025-05-13 16:52:05.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 7 |
| **Priority Score** | 11 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

I'll go with a top-to-bottom approach with the things I encountered, and how I tried to solve them in my project.

1. **WorkflowClient**
 - WorkflowClient.start with `io.temporal.workflow.Functions.Func` arguments
 - WorkflowClient.start with `io.temporal.workflow.Functions.Proc` arguments
 - WorkflowClient.execute with `io.temporal.workflow.Functions.Func` arguments
 - WorkflowClient.execute with `io.temporal.workflow.Functions.Proc` arguments

> Solved this by writing some small wrappers. I don't think this is the way, but the code inside might be useful. These are the only type of functions I needed, didn't convert them all (e.g the ones that take more arguments)

 ```
def startAsync(f: T => Unit, arg: T): WorkflowExecution = {
    WorkflowClient.start(new Proc1[T]() {
      override def apply(j: T): Unit = f(j)
    }, t)
  }

  def executeAsyncVoid(f: () => Unit): Future[Unit] = {
    import scala.compat.java8.FutureConverters._

    WorkflowClient.execute(new Proc {
      override def apply(): Unit = f()
    }).toScala.map[Unit](_ => ())
  }

  def executeAsync[T](f: () => T): Future[T] = {
    import scala.compat.java8.FutureConverters._

    WorkflowClient.execute(new Func[T] {
      override def apply(): T = f()
    }).toScala
  }
```

2. **Scala specific object types serialization/deserialization**

 - Option
 - List (basically all Scala collections)

> We can probably solve this when Jackson will be integrated in java-sdk

3. **Workflow.await requiring a Supplier, instead of passing a function reference**

> Again, solved in a simple wrapper

```
 def await(duration: Duration, f: () => Boolean) {
    Workflow.await(duration, new Supplier[lang.Boolean] {
      override def get(): lang.Boolean = f()
    })
  }
```


4. **Java way of referencing some method (not sure how this syntax it's called in Java)**
(Mostly the same as 1. but I put it in a different issue as it's a little bit a different problem)

`WorkflowClient.execute(workflow::getGreeting, "World")` -> notice the double colon

5. **Accepting Scala Duration type**

#### Comments (7)

<details>
<summary><strong>Krever</strong> commented on 2020-04-30 09:12:10.000 UTC</summary>

Hey, we have some experience in using cadence with scala and can contribute our experiences and maybe even some code.

Reg 2) Serialization is a tough topic, in general, typeclass-based serialization is more idiomatic and safer in modern scala. But this would be something to have in scala native sdk and so is out of the scope of this issue probably.

1 & 3 are already solved in scala 2.12 and later -> https://www.scala-lang.org/news/2.12.0/#lambda-syntax-for-sam-types

2 & 5 as proposed are not possible without adding scala stdlib as a dependency of java sdk, which doesn't sound plausible. Whereas 2) Is quite hard, the 5) is easily solved by https://github.com/scala/scala-java8-compat#converters-between-scalaconcurrentdurationfiniteduration-and-javatimeduration



Reactions: 👍 1

</details>

<details>
<summary><strong>grouzen</strong> commented on 2021-03-15 10:46:08.000 UTC</summary>

Hello!

Just wondering about the progress with scala-sdk for Temporal? Any updates? 


Reactions: 👀 3

</details>

<details>
<summary><strong>doruchiulan</strong> commented on 2021-03-18 15:58:35.000 UTC</summary>

Not really using cadence in my current projects, but I'm still keeping an eye on this as this is a project which I really like and which I will happily include in any project that suits it. So if somebody takes over, has a plan/architecture and leads this, I will happily contribute with pieces of code.

Reactions: 👍 2

</details>

<details>
<summary><strong>jvican</strong> commented on 2022-01-26 20:50:30.000 UTC</summary>

Hi. Really interested in helping this move forward by creating an integration. Is there a guide I can use to start making the integration possible?

</details>

<details>
<summary><strong>ktham</strong> commented on 2022-02-20 18:01:25.000 UTC</summary>

Would love the additional support for Scala 👍 it could potentially unlock some interesting use-cases if I can pitch Temporal to my team

Reactions: 👍 7

</details>

<details>
<summary><strong>vitaliihonta</strong> commented on 2022-06-22 10:49:34.000 UTC</summary>

Hi everyone I’ve implemented Scala SDK, which supports most temporal features.
https://github.com/vitaliihonta/zio-temporal

It also allows using protobuf format via ScalaPB.

Currently, it’s tied to ZIO

Reactions: 🎉 11

</details>

<details>
<summary><strong>scoplin</strong> commented on 2022-10-06 22:49:24.000 UTC</summary>

I got bit by a problem with the reflection logic that attempts to determine whether `Async.function` is being passed a method reference in `MethodReferenceDisassembler#isAsyncJava`.  Turns out that a method reference in Scala has a different result from `getImplMethodKind`.  It returns `MethodHandleInfo.REF_invokeStatic` instead of `MethodHandleInfo.REF_invokeInterface`.  We had to invoke this through a small java shim to get it to function correctly and not execute directly on the local workflow executor.

I think ztemporal may have the same problem.  It also appears to me to call `Async.function` passing a Scala lambda expression.

</details>


---

<a id="952"></a>

### #952: OpenTracing duplicates user created spans during replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/952 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-05 17:05:12.000 UTC (4 years ago) |
| **Updated** | 2024-12-17 21:26:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 10 |
| **Priority Score** | 10 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

If we have the following code somewhere in workflow:

```
void execute() {
  ...
  withSpan(() -> {
    activity.runActivity();
  })
  ...
  //end of replay somewhere down from the above code block
}
```

If we replay the code above, we should ignore the span creation, because this span was already reported during the original execution.

## Actual Behavior

The second span will be created during replay.

## Proposed solution

We should create a thin layer on top of `Tracer`, `ScopeManager`, `Scope` or `Span` that will check if we are still replaying on span finalization and if we are - discard the span instead of finalizing it.

## Notes
The issue is raised here:
#951
https://github.com/temporalio/sdk-java/pull/951#pullrequestreview-844189585

And the solution is originally proposed here:
https://github.com/temporalio/sdk-java/pull/951#issuecomment-1005896960

#### Comments (10)

<details>
<summary><strong>bergundy</strong> commented on 2022-01-05 17:20:58.000 UTC</summary>

> But what is true, the user-created span may be ignored during replay (depends on its location) with my original proposal. And in your sample, the activity may end up directly under the WorkflowRun span. But this is a smaller issue, let me think about it.
I really believe that we can resolve it just as inside a thin Tracer wrapper that can make some smart "buffering" of spans during replays inside and track when isReplaying switches from true to false.
Or even simpler, the tracer can always open spans when requested but check isReplaying on .finish() call and discard the span if isReplaying is still true. At first sight, it looks like it will work.

So the problem is that right now with a user created span the activity span will be parentless because the parent span (the user created one) is never emitted.
The only way to fix this is to recreate the same span with the exact same spanId on replay.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-05 17:25:20.000 UTC</summary>

@bergundy 

> So the problem is that right now with a user created span the activity span will be parentless because the parent span (the user created one) is never emitted.

it's not. For this specific reason, JavaSDK always creates WorkflowRun span. As you can see in the test that I pointed and it's javadoc: https://github.com/temporalio/sdk-java/blob/a2bc9373201dd58a607197ac39b7f87c1c0059c2/temporal-opentracing/src/test/java/io/temporal/opentracing/ActivityFailureTest.java#L131 The activity span will not be parentless, it will have WorkflowRun span as a parent.

But yes, it will not have a user-created span as a parent. I'm fairly confident that the proposed solution will address it well.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-05 17:29:00.000 UTC</summary>

@bergundy 

> The only way to fix this is to recreate the same span with the exact same spanId on replay.

It's not. Even more, OpenTracing and OpenTelemetry specifications don't allow this (creation of a span with a specific spanId). A span that was finished can't be just reopened for appending, it's not a part of spec. Check 
OT [`SpanBuilder`  interface](https://javadoc.io/doc/io.opentracing/opentracing-api/0.31.0/io/opentracing/Tracer.SpanBuilder.html).

Each run/replay has its own WorkflowRun span (it's the case right now)
The user span should be duplicated under each WorkflowRun span and contain only activities that were actually executed and not replayed in that run.
If span was fully executed in the previous run - it shouldn't be recreated in the next run.
The decision if the span was fully executed in the previous run should be made on the span `.finish` call - this way we are sure if we are still replaying when the span is finishing.
This solution will be congruent with the current JavaSDK approach and OpenTracing/OpenTelemetry spec. This solution will also be good for debugging, because of the level of detail that it provides.


</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-01-05 17:35:13.000 UTC</summary>

> A span that was finished can't be just reopened for appending

In the case I've illustrated in #951 the span is unfinished (the workflow is evicted from cache before the activity can complete)

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-05 17:43:40.000 UTC</summary>

> In the case I've illustrated in #951 the span is unfinished (the workflow is evicted from cache before the activity can complete)

In Java the [conventional code](https://github.com/opentracing/opentracing-java/blob/master/opentracing-api/src/main/java/io/opentracing/ScopeManager.java#L45) working with spans looks like:

```
 Span span = tracer.buildSpan("...").start();
 try (Scope scope = tracer.scopeManager().activate(span)) {
     ...
     activity1.execute()
     activity2.execute()
     ...
 } catch (Exception e) {
     span.log(...);
 } finally {
     span.finish();
 }
```

Opened scope and span will be finished and reported in case of eviction or any other Exception/Error halfway.
As it should. You don't really want to lose all the info collected in the spans (with potentially logs, tags, and other details that can't be restored during replay) including from the underlying activities just because the workflow got evicted. And it will be lost if the parent span is not finished.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-01-05 17:54:39.000 UTC</summary>

Okay, I see, it works differently than in TS where we completely discard the workflow from memory when it's evicted without running any cleanup.

So in this case if the workflow is replayed before it can execute activity2, activity2's parent span will be the root workflow span which isn't that bad.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-05 17:59:08.000 UTC</summary>

@bergundy Yeah, in Java you can't just nuke something without running the corresponding `.finally()` blocks.
Which has its own advantages (here) and creates its own challenges (potential non-determinism if somebody puts an activity execution in `.finally()`) for us.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-01-05 18:05:40.000 UTC</summary>

There's also another issue with this approach where if we evict the workflow the user's span will end erroneously while when looking at it from the code perspective everything seems fine.

</details>

<details>
<summary><strong>mfateev</strong> commented on 2022-01-23 21:55:36.000 UTC</summary>

I don't think that approach that doesn't create a span on replay would work. The problem is that a newly executed code can create a child span and needs a parent span. But parent span wouldn't be present on replay. The ideal solution would allow assigning span-id deterministically on replay. But unfortunately none of the tracing libraries supports assigning span ids.

The other solution is to serialize the span into the history and then recreate it from the serialized data on replay.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-23 21:58:19.000 UTC</summary>

> But parent span wouldn't be present on replay.

Don't forget that each workflow run (and replay to this matter) has its own workflow run parent span. So, each replay-followed-by-run has its own Span. This gives us a lot of power and flexibility here.

I will reiterate the solution I am convinced will work here, let's discuss this specific offer, not the objective. Because I don't see any reason why it shouldn't work and it's aligned with the current general spans structure.

> Each run/replay has its own WorkflowRun span (it's the case right now)
> The user span should be duplicated under each WorkflowRun span and contain only activities that were actually executed and not replayed in that run.
> If span was fully executed in the previous run - it shouldn't be recreated in the next run.
> The decision if the span was fully executed in the previous run should be made on the span `.finish` call - this way we are sure if we are still replaying when the span is finishing.
> This solution will be congruent with the current JavaSDK approach and OpenTracing/OpenTelemetry spec. This solution will also be good for debugging, because of the level of detail that it provides.

</details>


---

<a id="2676"></a>

### #2676: temporal java sdk is using an older version of grpc-netty-shaded with vulnerabilities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2676 |
| **State** | OPEN |
| **Author** | susie-oracle |
| **Created** | 2025-10-07 21:08:53.000 UTC (3 months ago) |
| **Updated** | 2025-12-05 09:06:45.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

upgrade grpc-netty-shaded to 1.75.0
## Actual Behavior


## Steps to Reproduce the Problem

  1.check dependencies of temporal java-sdk
  1.https://www.cve.org/CVERecord?id=CVE-2025-55163
  1.

## Specifications

  - Version: 1.28.1, ..,1.31.0
  - Platform:


#### Comments (6)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-10-07 22:17:26.000 UTC</summary>

A few points,
1. This [vulnerability](https://github.com/netty/netty/security/advisories/GHSA-prj3-ccx8-p6x4) does not apply to how the Java SDK uses netty since the Java SDK is only a client.

2. If the issue is simply the vulnerability scan then you can update the version of `gRPC` the SDK uses. As part of our CI we test the Java SDK with the latest version of Java gRPC. Note, this is what we always recommend anyway.

</details>

<details>
<summary><strong>mike706574</strong> commented on 2025-11-12 14:44:00.000 UTC</summary>

> A few points,
> 
> 1. This [vulnerability](https://github.com/netty/netty/security/advisories/GHSA-prj3-ccx8-p6x4) does not apply to how the Java SDK uses netty since the Java SDK is only a client.
> 2. If the issue is simply the vulnerability scan then you can update the version of `gRPC` the SDK uses. As part of our CI we test the Java SDK with the latest version of Java gRPC. Note, this is what we always recommend anyway.

I think it might be helpful if this context and the recommendation were documented somewhere more formally. I found it here, and I also found it [in this community thread](https://community.temporal.io/t/dependency-security-issue-cve-2025-55163/18479), but might have saved me some time if it were more front and center. Maybe the README? There's already a note about Protobuf versions in there, so doesn't seem like it would be too out of place there? Just a thought.

</details>

<details>
<summary><strong>Vishal-Joshi</strong> commented on 2025-12-01 14:14:33.000 UTC</summary>

Is there a plan to update temporal SDK to latest version of gRPC? Even if I update gRPC to v1.76.*, temporal SDK has dependencies on classes of gRPC v1.58.* which are not in gRPC v.176.*

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-01 18:07:23.000 UTC</summary>

@Vishal-Joshi please see the comment [above](https://github.com/temporalio/sdk-java/issues/2676#issuecomment-3378905321). The Java SDK is fully compatible with the latest gRPC.

</details>

<details>
<summary><strong>Vishal-Joshi</strong> commented on 2025-12-03 10:26:14.000 UTC</summary>

> [@Vishal-Joshi](https://github.com/Vishal-Joshi) please see the comment [above](https://github.com/temporalio/sdk-java/issues/2676#issuecomment-3378905321). The Java SDK is fully compatible with the latest gRPC.

Thanks @Quinn-With-Two-Ns. I applied your fix and tested with gRPC 1.76.0 BOM

```
<dependency>
            <groupId>io.grpc</groupId>
            <artifactId>grpc-bom</artifactId>
            <version>1.76.0</version>
            <type>pom</type>
  </dependency>
```
But I see then our tests start to break as `io.temporal:temporal-testing:jar:1.31.0` has some internal dependency

```
Caused by: org.springframework.beans.BeanInstantiationException: Failed to instantiate [io.temporal.testing.TestWorkflowEnvironment]: Factory method 'testWorkflowEnvironment' threw exception with message: io/grpc/internal/AbstractServerImplBuilder
        at org.springframework.beans.factory.support.SimpleInstantiationStrategy.lambda$instantiate$0(SimpleInstantiationStrategy.java:200)
        at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiateWithFactoryMethod(SimpleInstantiationStrategy.java:89)
        at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:169)
        at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:653)
        ... 176 more
Caused by: java.lang.NoClassDefFoundError: io/grpc/internal/AbstractServerImplBuilder
        at java.base/java.lang.ClassLoader.defineClass1(Native Method)
        at java.base/java.lang.ClassLoader.defineClass(ClassLoader.java:1027)
        at java.base/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:150)
        at java.base/jdk.internal.loader.BuiltinClassLoader.defineClass(BuiltinClassLoader.java:862)
        at java.base/jdk.internal.loader.BuiltinClassLoader.findClassOnClassPathOrNull(BuiltinClassLoader.java:760)
        at java.base/jdk.internal.loader.BuiltinClassLoader.loadClassOrNull(BuiltinClassLoader.java:681)
        at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:639)
        at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:188)
        at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:526)
```


It is not only testing. If I try to run the temporal managed by spring-boot v3.5.7, the application fails to start up with same error
Temporal related dependencies in pom are
```
<dependency>
                <groupId>io.temporal</groupId>
                <artifactId>temporal-spring-boot-starter</artifactId>
                <version>1.31.0</version>
            </dependency>
            <dependency>
                <groupId>io.temporal</groupId>
                <artifactId>temporal-spring-boot-autoconfigure</artifactId>
                <version>1.31.0</version>
            </dependency>
            <dependency>
                <groupId>io.temporal</groupId>
                <artifactId>temporal-kotlin</artifactId>
                <version>1.31.0</version>
            </dependency>
```
```Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'temporalScheduleClient' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'scheduleClient' parameter 0: Error creating bean with name 'temporalClientTemplate' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'clientTemplate' parameter 0: Error creating bean with name 'temporalRootNamespaceTemplate' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'rootNamespaceTemplate' parameter 1: Error creating bean with name 'temporalWorkflowServiceStubs' defined in class path resource [io/temporal/spring/boot/autoconfigure/ServiceStubsAutoConfiguration.class]: Failed to instantiate [io.temporal.serviceclient.WorkflowServiceStubs]: Factory method 'workflowServiceStubsTemplate' threw exception with message: io/grpc/internal/AbstractManagedChannelImplBuilder
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:546)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1375)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1205)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:569)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:529)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:339)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:373)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:337)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1770)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1653)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 21 common frames omitted
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'temporalClientTemplate' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'clientTemplate' parameter 0: Error creating bean with name 'temporalRootNamespaceTemplate' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'rootNamespaceTemplate' parameter 1: Error creating bean with name 'temporalWorkflowServiceStubs' defined in class path resource [io/temporal/spring/boot/autoconfigure/ServiceStubsAutoConfiguration.class]: Failed to instantiate [io.temporal.serviceclient.WorkflowServiceStubs]: Factory method 'workflowServiceStubsTemplate' threw exception with message: io/grpc/internal/AbstractManagedChannelImplBuilder
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:546)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1375)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1205)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:569)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:529)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:339)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:373)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:337)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1770)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1653)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 35 common frames omitted
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'temporalRootNamespaceTemplate' defined in class path resource [io/temporal/spring/boot/autoconfigure/RootNamespaceAutoConfiguration.class]: Unsatisfied dependency expressed through method 'rootNamespaceTemplate' parameter 1: Error creating bean with name 'temporalWorkflowServiceStubs' defined in class path resource [io/temporal/spring/boot/autoconfigure/ServiceStubsAutoConfiguration.class]: Failed to instantiate [io.temporal.serviceclient.WorkflowServiceStubs]: Factory method 'workflowServiceStubsTemplate' threw exception with message: io/grpc/internal/AbstractManagedChannelImplBuilder
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:804)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:546)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1375)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1205)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:569)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:529)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:339)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:373)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:337)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1708)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1653)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 49 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'temporalWorkflowServiceStubs' defined in class path resource [io/temporal/spring/boot/autoconfigure/ServiceStubsAutoConfiguration.class]: Failed to instantiate [io.temporal.serviceclient.WorkflowServiceStubs]: Factory method 'workflowServiceStubsTemplate' threw exception with message: io/grpc/internal/AbstractManagedChannelImplBuilder
	at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:657)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:645)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1375)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1205)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:569)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:529)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:339)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:373)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:337)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1770)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1653)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 62 common frames omitted
Caused by: org.springframework.beans.BeanInstantiationException: Failed to instantiate [io.temporal.serviceclient.WorkflowServiceStubs]: Factory method 'workflowServiceStubsTemplate' threw exception with message: io/grpc/internal/AbstractManagedChannelImplBuilder
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.lambda$instantiate$0(SimpleInstantiationStrategy.java:200)
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiateWithFactoryMethod(SimpleInstantiationStrategy.java:89)
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:169)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:653)
	... 76 common frames omitted
Caused by: java.lang.NoClassDefFoundError: io/grpc/internal/AbstractManagedChannelImplBuilder
	at java.base/java.lang.ClassLoader.defineClass1(Native Method)
	at java.base/java.lang.ClassLoader.defineClass(ClassLoader.java:962)
	at java.base/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:132)
	at java.base/jdk.internal.loader.BuiltinClassLoader.defineClass(BuiltinClassLoader.java:776)
	at java.base/jdk.internal.loader.BuiltinClassLoader.findClassOnClassPathOrNull(BuiltinClassLoader.java:691)
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClassOrNull(BuiltinClassLoader.java:620)
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:578)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:490)
	at io.temporal.serviceclient.ChannelManager.prepareChannel(ChannelManager.java:186)
	at io.temporal.serviceclient.ChannelManager.<init>(ChannelManager.java:98)
	at io.temporal.serviceclient.ChannelManager.<init>(ChannelManager.java:78)
	at io.temporal.serviceclient.WorkflowServiceStubsImpl.<init>(WorkflowServiceStubsImpl.java:64)
	at io.temporal.serviceclient.WorkflowServiceStubs.newServiceStubs(WorkflowServiceStubs.java:46)
	at io.temporal.serviceclient.WorkflowServiceStubs.newLocalServiceStubs(WorkflowServiceStubs.java:23)
	at io.temporal.spring.boot.autoconfigure.template.ServiceStubsTemplate.createServiceStubs(ServiceStubsTemplate.java:50)
	at io.temporal.spring.boot.autoconfigure.template.ServiceStubsTemplate.getWorkflowServiceStubs(ServiceStubsTemplate.java:38)
	at io.temporal.spring.boot.autoconfigure.ServiceStubsAutoConfiguration.workflowServiceStubsTemplate(ServiceStubsAutoConfiguration.java:51)
	at io.temporal.spring.boot.autoconfigure.ServiceStubsAutoConfiguration$$SpringCGLIB$$0.CGLIB$workflowServiceStubsTemplate$1(<generated>)
	at io.temporal.spring.boot.autoconfigure.ServiceStubsAutoConfiguration$$SpringCGLIB$$FastClass$$1.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:258)
	at org.springframework.context.annotation.ConfigurationClassEnhancer$BeanMethodInterceptor.intercept(ConfigurationClassEnhancer.java:400)
	at io.temporal.spring.boot.autoconfigure.ServiceStubsAutoConfiguration$$SpringCGLIB$$0.workflowServiceStubsTemplate(<generated>)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)
	at java.base/java.lang.reflect.Method.invoke(Method.java:565)
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.lambda$instantiate$0(SimpleInstantiationStrategy.java:172)
	... 79 common frames omitted
Caused by: java.lang.ClassNotFoundException: io.grpc.internal.AbstractManagedChannelImplBuilder
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:580)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:490)
	... 104 common frames omitted

Process finished with exit code 1
```

</details>

<details>
<summary><strong>Vishal-Joshi</strong> commented on 2025-12-05 09:05:45.000 UTC</summary>

I have resolved this issue by adding gRPC in "dependencyManagement" of maven with scope import.
```
<dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.grpc</groupId>
                <artifactId>grpc-bom</artifactId>
                <version>1.76.0</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

</details>


---

<a id="1832"></a>

### #1832: Support for using Temporal Annotations as Meta Annotation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1832 |
| **State** | OPEN |
| **Author** | madhur-spotnana (Madhur Singal) |
| **Created** | 2023-08-01 18:12:27.000 UTC (2y 5m ago) |
| **Updated** | 2023-08-01 18:16:45.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 0 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

**Is your feature request related to a problem? Please describe.**
I am using temporal with a spring boot project and trying to create a custom annotation for defining activity interfaces. I need this custom annotation to define default options for activities like startToCloseTimeout or taskQueue. This is how I am planning to create the annotation:
```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@ActivityInterface
public @interface MyCustomAnnotation {

  long startToCloseTimeoutMs();

  String taskQueue();
}
```
This does not work because the `@ActivityInterface` cannot be used as [meta annotation](https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html#beans-meta-annotations).

**Describe the solution you'd like**
Add support for using Temporal annotations (like `@WorkflowInterface`, `@ActivityInterface`, `@WorkflowMethod`) as meta annotations. To do this, the SDK needs to be modified to read the annotation using [this](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/annotation/AnnotationUtils.html#findAnnotation-java.lang.Class-java.lang.Class-), which recursively scans for annotation added as meta annotation.

**Describe alternatives you've considered**
To create this custom annotation I have used Byte Buddy to modify my activity interfaces at runtime and add the Temporal annotation where my custom annotation is present.



---

<a id="1241"></a>

### #1241: DynamicWorkflow not taking in account WorkflowImplementationOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1241 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-06-01 15:25:50.000 UTC (3y 7m ago) |
| **Updated** | 2024-03-21 02:30:21.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | Next |
| **Reactions** | 👍 1 |

#### Description

        WorkflowImplementationOptions options =
        WorkflowImplementationOptions.newBuilder()
            .setFailWorkflowExceptionTypes(NullPointerException.class)
            .build();
       worker.registerWorkflowImplementationTypes(options, DynamicGreetingWorkflowImpl.class);

throwing NullPointerException inside Dynamic workflow (workflow that implements DynamicWorkflow interface) 
does not take in account WorkflowImplementationOptions and will not fail when NPE is thrown. This works fine for "normal" workflow impls which would fail at this point.



#### Comments (6)

<details>
<summary><strong>drewhoskins-stripe</strong> commented on 2022-11-16 23:46:13.000 UTC</summary>

I ran into this bug today.  Any ETA for a fix?

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-11-17 01:29:02.000 UTC</summary>

@drewhoskins-stripe Not yet, Drew. But I will put it up for prioritization or may take it during the next Bulk Bug Squash that I am able to do.

</details>

<details>
<summary><strong>drewhoskins-stripe</strong> commented on 2022-11-17 17:09:16.000 UTC</summary>

Thanks!

</details>

<details>
<summary><strong>jeffschoner-stripe</strong> commented on 2023-05-24 18:18:11.000 UTC</summary>

@Spikhalskiy Any updates on this one?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-05-24 18:19:12.000 UTC</summary>

No update at this time

</details>

<details>
<summary><strong>zuodimiaoyun</strong> commented on 2024-03-21 02:30:20.000 UTC</summary>

I have the same problem, do we have a plan to solve it?

</details>


---

<a id="827"></a>

### #827: Provide a recommended way to pass configuration into workflow 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/827 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-10-19 16:29:33.000 UTC (4y 2m ago) |
| **Updated** | 2021-10-19 17:58:24.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 0 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

If dependency injection into the workflow is discouraged, we need to provide a way for an external code to pass all kinds of configurations into Workflow instances. A potential solution to ensure determinism could be implementing it on interceptors level and storing configuration into a (mutable?) side effect and providing a set of handy utility methods (Probably on `Workflow`) to access it in the workflow implementation.


---

<a id="2075"></a>

### #2075: Add the ability to keep heartbeating while the worker is shutting down

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2075 |
| **State** | OPEN |
| **Author** | mintybayleaf (Bailey) |
| **Created** | 2024-05-23 18:49:56.000 UTC (1y 7m ago) |
| **Updated** | 2024-11-22 05:54:28.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 1 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

**Is your feature request related to a problem? Please describe.**

The `WorkerFactory.shutdown` call starts killing the heartbeats like it says in the documentation with the `ActivityWorkerShutdownException` but what is the point of waiting N units of time with `WorkerFactory.awaitTermination` if right when the worker shutdown is called the heartbeats die and then the activities die off because the heartbeats are no longer going....

**Describe the solution you'd like**

I want the ability to keep heartbeating while the worker is shutting down so my activities can actually finish my activities work with `WorkerFactory.awaitTermination` when my activities have heartbeats. 

For example: If I tell the `awaitTermination` call to wait 25 minutes my heartbeat calls should still be valid for 25 minutes and then the heartbeat call can start reporting the `ActivityWorkerShutdownException`

**Describe alternatives you've considered**

Call ActivityExecutionContext.useLocalManualCompletion() and then use the ManualActivityCompletionClient to heartbeat.

**Additional context**

See the Temporal Java SDK slack thread here: https://temporalio.slack.com/archives/CTT84KXK9/p1716488319315099



#### Comments (1)

<details>
<summary><strong>madhav2302</strong> commented on 2024-07-18 15:47:47.000 UTC</summary>

Do we have a timeline for the fix? 

Reactions: 👍 1

</details>


---

<a id="2046"></a>

### #2046: Failed promise before calling allOf is not failing the wrapped promise.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2046 |
| **State** | OPEN |
| **Author** | awx-michael-wang (Michael Wang) |
| **Created** | 2024-04-29 12:56:15.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-06 03:52:55.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

## Expected Behavior
`Promise.allOf(promises)` should fail as long as one of the `promises` fails, no matter it is already failed before calling the `allOf` or after.

## Actual Behavior
If one `Promise` in `promises` is already failed before calling `allOf`, the failure is ignored.

## How to reproduce

A workflow like following will ended successfully.
```Kotlin
        val promise1 = Async.procedure { throw RuntimeException() }
        val promise2 = Async.procedure {
            // do something else
        }
        someActivity.doSomething()

        Promise.allOf(promise1, promise2).get()
```

## Analysis

`AllOfPromise#addPromise` only handles the promise that is not completed.

## Specifications

  - Version: 1.20.0

#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-29 17:50:38.000 UTC</summary>

Yes this is a bug, looks like we ignore the promise if it has completed regardless of how it completed

https://github.com/temporalio/sdk-java/blob/ed211fa611112288b576a2c979be9284e17fec89/temporal-sdk/src/main/java/io/temporal/internal/sync/AllOfPromise.java#L54 

We should check if it has completed exceptionally or not.

Fixing this though could break backwards compatibility since this could effect workflow code.  Any fix will need to make sure to preserve history compatibility with workflows that have this scenario.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-30 23:36:29.000 UTC</summary>

In the mean time the easiest way to workaround this bug I think is to implement a wrapper around `promiseAllOf` to check if any promise passed in failed 

``` java
static Promise<Void> allOf(Promise<?>... promises) {
  for (Promise<?> p : promises) {
      if (p.isCompleted() && p.getFailure() != null) {
        return Workflow.newFailedPromise(p.getFailure());
      }
    }
    return WorkflowInternal.promiseAllOf(promises);
  }
}
```

</details>

<details>
<summary><strong>awx-michael-wang</strong> commented on 2024-05-06 03:52:43.000 UTC</summary>

Thank you. I did implement a similar wrapper:
```Kotlin
fun <T> List<Promise<T>>.safeAllOf(): Promise<Void> {
    val existFailure = this.filter { it.isCompleted }
        .firstNotNullOfOrNull { it.failure }

    return if (existFailure != null) {
        Workflow.newFailedPromise(existFailure)
    } else {
        Promise.allOf(this)
    }
}
```

</details>


---

<a id="1698"></a>

### #1698: WorkflowImplementationOptions.FailWorkflowExceptionTypes ignored for service failures

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1698 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2023-03-14 15:50:18.000 UTC (2y 10m ago) |
| **Updated** | 2025-06-17 19:10:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | wontfix |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
When `WorkflowImplementationOptions.FailWorkflowExceptionTypes` is set to Throwable any workflow task failure leads to workflow failure.

## Actual Behavior
The service rejecting workflow task completion doesn't fail the workflow.


## Steps to Reproduce the Problem

  1. Set an invalid retry policy. For example, use a smaller maximumInterval than InitialInterval.
  1. Set FailWorkflowExceptionTypes to Throwable.
  1. Observe that workflow is stuck in workflow task failure retry loop.

Reproduction:

```
package io.temporal.samples.hello;

import io.temporal.activity.ActivityInterface;
import io.temporal.activity.ActivityMethod;
import io.temporal.activity.ActivityOptions;
import io.temporal.client.WorkflowClient;
import io.temporal.client.WorkflowOptions;
import io.temporal.common.RetryOptions;
import io.temporal.serviceclient.WorkflowServiceStubs;
import io.temporal.worker.Worker;
import io.temporal.worker.WorkerFactory;
import io.temporal.worker.WorkflowImplementationOptions;
import io.temporal.workflow.Workflow;
import io.temporal.workflow.WorkflowInterface;
import io.temporal.workflow.WorkflowMethod;
import java.time.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/** Sample Temporal Workflow Definition that executes a single Activity. */
public class HelloActivity {

  // Define the task queue name
  static final String TASK_QUEUE = "HelloActivityTaskQueue";

  // Define our workflow unique id
  static final String WORKFLOW_ID = "HelloActivityWorkflow";

  /**
   * The Workflow Definition's Interface must contain one method annotated with @WorkflowMethod.
   *
   * <p>Workflow Definitions should not contain any heavyweight computations, non-deterministic
   * code, network calls, database operations, etc. Those things should be handled by the
   * Activities.
   *
   * @see io.temporal.workflow.WorkflowInterface
   * @see io.temporal.workflow.WorkflowMethod
   */
  @WorkflowInterface
  public interface GreetingWorkflow {

    /**
     * This is the method that is executed when the Workflow Execution is started. The Workflow
     * Execution completes when this method finishes execution.
     */
    @WorkflowMethod
    String getGreeting(String name);
  }

  /**
   * This is the Activity Definition's Interface. Activities are building blocks of any Temporal
   * Workflow and contain any business logic that could perform long running computation, network
   * calls, etc.
   *
   * <p>Annotating Activity Definition methods with @ActivityMethod is optional.
   *
   * @see io.temporal.activity.ActivityInterface
   * @see io.temporal.activity.ActivityMethod
   */
  @ActivityInterface
  public interface GreetingActivities {

    // Define your activity method which can be called during workflow execution
    @ActivityMethod(name = "greet")
    String composeGreeting(String greeting, String name);
  }

  // Define the workflow implementation which implements our getGreeting workflow method.
  public static class GreetingWorkflowImpl implements GreetingWorkflow {

    /**
     * Define the GreetingActivities stub. Activity stubs are proxies for activity invocations that
     * are executed outside of the workflow thread on the activity worker, that can be on a
     * different host. Temporal is going to dispatch the activity results back to the workflow and
     * unblock the stub as soon as activity is completed on the activity worker.
     *
     * <p>In the {@link ActivityOptions} definition the "setStartToCloseTimeout" option sets the
     * overall timeout that our workflow is willing to wait for activity to complete. For this
     * example it is set to 2 seconds.
     */
    private final GreetingActivities activities =
        Workflow.newActivityStub(
            GreetingActivities.class,
            ActivityOptions.newBuilder()
                .setStartToCloseTimeout(Duration.ofSeconds(2))
                .setRetryOptions(
                    RetryOptions.newBuilder()
                        .setInitialInterval(Duration.ofSeconds(10))
                        .setMaximumInterval(Duration.ofSeconds(5))
                        .build())
                .build());

    @Override
    public String getGreeting(String name) {
      // This is a blocking call that returns only after the activity has completed.
      return activities.composeGreeting("Hello", name);
    }
  }

  /** Simple activity implementation, that concatenates two strings. */
  static class GreetingActivitiesImpl implements GreetingActivities {
    private static final Logger log = LoggerFactory.getLogger(GreetingActivitiesImpl.class);

    @Override
    public String composeGreeting(String greeting, String name) {
      log.info("Composing greeting...");
      return greeting + " " + name + "!";
    }
  }

  /**
   * With our Workflow and Activities defined, we can now start execution. The main method starts
   * the worker and then the workflow.
   */
  public static void main(String[] args) {

    // Get a Workflow service stub.
    WorkflowServiceStubs service = WorkflowServiceStubs.newLocalServiceStubs();

    /*
     * Get a Workflow service client which can be used to start, Signal, and Query Workflow Executions.
     */
    WorkflowClient client = WorkflowClient.newInstance(service);

    /*
     * Define the workflow factory. It is used to create workflow workers for a specific task queue.
     */
    WorkerFactory factory = WorkerFactory.newInstance(client);

    /*
     * Define the workflow worker. Workflow workers listen to a defined task queue and process
     * workflows and activities.
     */
    Worker worker = factory.newWorker(TASK_QUEUE);

    /*
     * Register our workflow implementation with the worker.
     * Workflow implementations must be known to the worker at runtime in
     * order to dispatch workflow tasks.
     */
    worker.registerWorkflowImplementationTypes(
        WorkflowImplementationOptions.newBuilder()
            .setFailWorkflowExceptionTypes(Throwable.class)
            .build(),
        GreetingWorkflowImpl.class);

    /**
     * Register our Activity Types with the Worker. Since Activities are stateless and thread-safe,
     * the Activity Type is a shared instance.
     */
    worker.registerActivitiesImplementations(new GreetingActivitiesImpl());

    /*
     * Start all the workers registered for a specific task queue.
     * The started workers then start polling for workflows and activities.
     */
    factory.start();

    // Create the workflow client stub. It is used to start our workflow execution.
    GreetingWorkflow workflow =
        client.newWorkflowStub(
            GreetingWorkflow.class,
            WorkflowOptions.newBuilder()
                .setWorkflowId(WORKFLOW_ID)
                .setTaskQueue(TASK_QUEUE)
                .build());

    /*
     * Execute our workflow and wait for it to complete. The call to our getGreeting method is
     * synchronous.
     *
     * See {@link io.temporal.samples.hello.HelloSignal} for an example of starting workflow
     * without waiting synchronously for its result.
     */
    String greeting = workflow.getGreeting("World");

    // Display workflow execution results
    System.out.println(greeting);
    System.exit(0);
  }
}

```


#### Comments (7)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-03-14 15:53:46.000 UTC</summary>

This filter/rule is not applied for Service errors. The same way for other SDKs.
I don't think it's an expected behavior either. Users expect exception types in this filter to be applied to workflow code only pretty much.
If we want to make deeper levels of failure tolerance adjustable - we need a separate, more detailed mechanism.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-03-14 15:56:24.000 UTC</summary>

In addition, it's the Server that is failing the workflow task in this situation, not an SDK/Worker. When the workflow task is already failed by the Server, there is no way for SDK to fail the execution.

</details>

<details>
<summary><strong>mfateev</strong> commented on 2023-11-08 00:38:59.000 UTC</summary>

SDK can fail the execution by emitting FailWorkflowExecution command.

</details>

<details>
<summary><strong>Domonion</strong> commented on 2025-06-17 11:42:10.000 UTC</summary>

are there any updates? 
cc @mfateev @Spikhalskiy 

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-17 15:42:37.000 UTC</summary>

@Domonion The situation is still the same as described [here](https://github.com/temporalio/sdk-java/issues/1698#issuecomment-1468367754) 

</details>

<details>
<summary><strong>Domonion</strong> commented on 2025-06-17 17:10:21.000 UTC</summary>

@Quinn-With-Two-Ns are there any plans to change the situation? 

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-17 19:10:05.000 UTC</summary>

There is no update on this specific issue. Without knowing more about the your problem I can't say if there is any plans. Temporal is always adding new features, If you can share the particular problem you are encountering then I can provide more detail.

</details>


---

<a id="1163"></a>

### #1163: Allow contributions of tags of root worker metricsscope per workflow execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1163 |
| **State** | OPEN |
| **Author** | mdeinum (Marten Deinum) |
| **Created** | 2022-04-21 06:57:45.000 UTC (3y 8m ago) |
| **Updated** | 2024-12-17 21:26:49.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 1 |
| **Priority Score** | 7 |
| **Labels** | wontfix |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

We are using Temporal to handle workflows for registrations. Those registrations are for a certain region/country. We are sending the metrics to New Relic to create a dashboard to get insights in how many workflows have started, failed, cancelled or completed. This works fine. The region is part of the input that starts the workflow. 

However we would like to split those metrics based on the region, we tried several hooks but apart from sending a custom metric on the start of a workflow we aren't able to solve this. What we want is that when a workflow starts, it contributes a tag to the metrics (in our case the region) so that we can use that as an additional dimension/facet in New Relic to group things by. 

We are using the Java SDK and haven't found a foolproof way of doing that, apart from a custom metric at the start of the workflow. 

What we currently have is we have a single `WorkflowServiceStubs` which we cannot use to set the region. We tried to create a `WorkflowServiceStubs` instance per region, but that starts to break as soon as we need to react to signals, we there loose the region and cannot use the proper one. 

We tried to create a `WorkflowClientInterceptor` which doesn't give us access to the correct `MetricScope` to add tags. 

We also tried a `ContextPropagator` although we can pass the region around there is no way to contribute it as a tag to the metrics. 

All in all the only thing that worked was a custom metric at the start of a workflow, but that still leaves out the cancelled, failed and completed events we need to have. 

It would be nice to have a way that when starting a workflow, we could add custom tags to the metrics and that those would be added to all events being send to New Relic. Currently it seems to hard or to be to inflexible. 


#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-04-22 06:18:25.000 UTC</summary>

It's not possible right now to set custom tags on core worker metrics from the workflow code. There is no easy, clean and reliable way to achieve and do it with Temporal distributed execution model. For example, an activity worker will somehow have to get custom tags from the workflow execution to fit your "regions" usecase (so, need to bring ContextPropagator here).
We don't have plans to make it possible. Too large pain, customization, and risk of unsafety for a narrow use-case. Core worker metrics should be unified and simple. Giving each workflow execution an opportunity to configure a unique scope for each execution doesn't look like a good practice or a good idea.
Hence, "won't fix".
You can set your own scope in each workflow for your custom workflow metrics though.

> What we currently have is we have a single WorkflowServiceStubs which we cannot use to set the region. We tried to create a WorkflowServiceStubs instance per region, but that starts to break as soon as we need to react to signals, we there loose the region and cannot use the proper one.

You can have separate task queues for each "region" and start separate workers for each of them. Each worker will be configured with its own task queue and its own MetricsScope. This way signals will be routed only to the worker attributed to the right task queue and region and will get correct tags on signals.

</details>


---

<a id="396"></a>

### #396: Pluggable activity name provider

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/396 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2021-03-23 17:35:41.000 UTC (4y 9m ago) |
| **Updated** | 2023-05-30 12:47:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
The activity type name is automatically generated from its method name.  Different users of the SDK have different opinions on how this name should be generated. For example, see [this forum post](url).

**Describe the solution you'd like**
The proposal is to make activity name generation pluggable through ClientOptions and WorkerOptions. This way each user can implement its own standard to name activities automatically.



#### Comments (7)

<details>
<summary><strong>vitarb</strong> commented on 2021-05-26 00:21:35.000 UTC</summary>

Also consider feature request made in #467 we might be able to come up with a solution that addresses both at the same time.

</details>

<details>
<summary><strong>kkuntim</strong> commented on 2023-05-18 18:57:03.000 UTC</summary>

We also need this feature; any suggestion on how to implement the same.


</details>

<details>
<summary><strong>kkuntim</strong> commented on 2023-05-18 19:19:40.000 UTC</summary>

Capturing our requirement. 
1. Say I have a DB table migration activity ("migrateTable") and based on need we might end up calling the same activity multiple times for migrating n Tables 
2.  We would like to see the activities as "migrateTable1", "migrateTable2"... instead of "migrateTable 
3. We have defined a name for Activity (using Annotation) 
4. We are able to change the AcvityName in Workflow Implementation code by overriding name Annotation value.
5. The challenge lies in Registering and Starting workers; as we might not know how many times we will end up calling the activity (hence different Names) during workflow execution (in case we are calling the Actitvity in loop).

Is there a workaround or can  we Map same Activity in Worker to Renamed Activities in Workflow Implementation call.
Please suggest... where to make this code change in Java SDk

Thanks in advance
Krishnendu

</details>

<details>
<summary><strong>kkuntim</strong> commented on 2023-05-22 07:32:45.000 UTC</summary>

Hi @mfateev Any suggestions on implementation approach. Thank you.

</details>

<details>
<summary><strong>kkuntim</strong> commented on 2023-05-23 05:46:35.000 UTC</summary>

I have two approach in mind:

1. Instead of exact typename match for a Activity we can go for a pattern match and derive the activity Name from Activity Stub call.
2. Have some kind of out of the box attribute list for Activity and have API to populate the same.
Please suggest...

Thank you
Krishnendu

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-05-23 06:08:53.000 UTC</summary>

@kkuntim From your requirements it sounds like you want activity names to be generated  dynamically base on the activity input?
Activity names must be know at worker startup time for routing so this feature cannot meet your requirements. 

I think [this](https://github.com/temporalio/features/issues/141) issue to allow passing some metadata with commands would be a better fit. We could allow passing along a `label` metadata field for activities and child workflows that you could specify how you want and use in the UI.

</details>

<details>
<summary><strong>mfateev</strong> commented on 2023-05-30 12:47:37.000 UTC</summary>

I believe you can implement this logic by implementing custom WorkflowOutboundCallsInterceptor.

</details>


---

<a id="2746"></a>

### #2746: Jackson 3 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2746 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-12-09 23:15:13.000 UTC (1 months ago) |
| **Updated** | 2025-12-09 23:15:13.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 0 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

**Is your feature request related to a problem? Please describe.**
Add support for Jackson 3, the next major version of the library the SDK uses for JSON serialization.  

**Describe the solution you'd like**
Add support for Jackson 3 to the Java SDK. This would mainly involve creating a new Jackson 3 JSON data converter, and any other place the SDK calls into Jackson. Since Jackson 3 requires Java 17 at least we will need to support both for the foreseeable future.

**Additional context**
* Spring Boot 4 only has plans to support Jackson 3 long term https://spring.io/blog/2025/10/07/introducing-jackson-3-support-in-spring
* https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md


---

<a id="2042"></a>

### #2042: Activity options merging logic is not correct

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2042 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2024-04-18 01:21:27.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-23 17:07:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
There are six potential sources for activity options:

1. [WorkflowImplementationOptions#defaultActivityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L97)
2. [WorkflowImplementationOptions#activityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L84) map
3. Workflow.setDefaultActivityOptions
4. Workflow.applyActivityOptions map
5. options argument passed to [WorkflowInternal#newActivityStub](https://github.com/temporalio/sdk-java/blob/bff4b6fe837095f610247806e97f03333a454cd0/temporal-sdk/src/main/java/io/temporal/workflow/Workflow.java#L105)
6. activityMethodOptions map argument passed to [WorkflowInternal#newActivityStub](https://github.com/temporalio/sdk-java/blob/bff4b6fe837095f610247806e97f03333a454cd0/temporal-sdk/src/main/java/io/temporal/workflow/Workflow.java#L105)

When all these options are specified for the given activity type, the logical behavior is to merge them in the same order as specified above.

## Actual Behavior

The current logic is split between:

https://github.com/temporalio/sdk-java/blob/8af4a2647dacab2cb0d4a3a613482e00bc297a39/temporal-sdk/src/main/java/io/temporal/internal/sync/WorkflowInternal.java#L303

and 

https://github.com/temporalio/sdk-java/blob/16755a1bb7ebba29fb820b86a001c079cf4ffb62/temporal-sdk/src/main/java/io/temporal/internal/sync/ActivityInvocationHandler.java#L70

The short description is:

1. options = options argument passed to [WorkflowInternal#newActivityStub] ? WorkflowImplementationOptions#defaultActivityOptions // not that they are not merged if the argument is present.

2. WorkflowImplementationOptions#activityOptions map is overridden by options found in activityMethodOptions map argument passed to WorkflowInternal#newActivityStub

3. options (from step 1) are overridden by a value (with the key equal to the activity type) from the map generated by step (2)

I believe that we should fix the merging logic to match the intuitive behavior explained in the "Expected Behavior" section.

#### Comments (6)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-18 05:20:58.000 UTC</summary>

Ignoring backwards compatibility for a moment

>, the logical behavior is to merge them in the same order as specified above.

I would disagree that is intuitive or logical. Before reading the docs I would not expect all the options to be merged in order. Specifically I would not expect the default activity options to be merged with the specific activity options. If I pass a specific option it is because I don't want the default, I would not expect the default to still get merged if I passed a more specific option. Looking at the docs for [setActivityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L84) supports this.

</details>

<details>
<summary><strong>mfateev</strong> commented on 2024-04-19 03:27:06.000 UTC</summary>

I see two separate questions here:

1. Do we merge options at all, or are they always replaced completely?
2. What is the precedence of merging/replacement?

I personally think we want merging as it allows overriding either specific values as well as all values.

The precedence outlined above is the only one that makes sense to me.

I see a specific exception for testing where the options sometimes need to be forcefully replaced through WorkflowTestEnvironment.

> Looking at the docs for `setActivityOptions` supports this.

The doc explicitly says about merging:

>      * Set individual activity options per activityType. Will be merged with the map from {@link
>      * io.temporal.workflow.Workflow#newActivityStub(Class, ActivityOptions, Map)} which has the
>      * highest precedence.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-19 03:47:55.000 UTC</summary>

>The precedence outlined above is the only one that makes sense to me.

I disagree, I find the outlined approach unintuitive for the reasons I state above , specifically merging defaultActivityOptions and activityOptions, and it disagrees with our documentation. 

</details>

<details>
<summary><strong>mfateev</strong> commented on 2024-04-19 03:56:00.000 UTC</summary>

 Would you specify the currently implemented rules for the 6 sources of options and what is the logic behind them?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-19 14:42:33.000 UTC</summary>

I am specifically talking about:
 
[WorkflowImplementationOptions#defaultActivityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L97)
[WorkflowImplementationOptions#activityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L84) map

If I set a default value for something and a specific value I would not expect them to be merged, the documentation does not say they will be merged.

The documentation for `setDefaultActivityOptions` explicitly say it will be overwritten. Ignoring the subjective concept of what is intuitive, I think from a backwards compatibility perspective I don't think we should change how the default options interact.

```
     * These activity options have the lowest precedence across all activity options. Will be
     * overwritten entirely by {@link io.temporal.workflow.Workflow#newActivityStub(Class,
     * ActivityOptions)} and then by the individual activity options if any are set through {@link
     * #setActivityOptions(Map)}
     *
     * @param defaultActivityOptions ActivityOptions for all activities in the workflow.
     */
```

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-19 20:38:59.000 UTC</summary>

To clarify my opinion is default options should not be used if a more specific option for an activity type is specified. A default is a preselect option if no other is present, not a base to build more specific options form . This is 
how we document `setDefaultActivityOptions`
```
  /**
   * Sets the default activity options that will be used for activity stubs that have no {@link
   * ActivityOptions} specified.<br>
   * This overrides a value provided by {@link
   * WorkflowImplementationOptions#getDefaultActivityOptions}.<br>
   * A more specific per-activity-type option specified in {@link
   * WorkflowImplementationOptions#getActivityOptions} or {@link #applyActivityOptions(Map)} takes
   * precedence over this setting.
   *
   * @param defaultActivityOptions {@link ActivityOptions} to be used as a default
   */
  public static void setDefaultActivityOptions(ActivityOptions defaultActivityOptions) {
    WorkflowInternal.setDefaultActivityOptions(defaultActivityOptions);
  }
```

The only time the default options should be considered is if no options are provided so , ignoring `null` options, I believe that is only if this method is used to construct a stub.

```
Workflow.newActivityStub(Class<T> activityInterface)
```

Otherwise, If activity options are provides we should use the activity options, again ignoring `null` options, with this method

```
 /**
   * Creates client stub to activities that implement given interface.
   *
   * @param activityInterface interface type implemented by activities
   * @param options options that together with the properties of {@link
   *     io.temporal.activity.ActivityMethod} specify the activity invocation parameters
   * @param activityMethodOptions activity method-specific invocation parameters
   */
  public static <T> T newActivityStub(
      Class<T> activityInterface,
      ActivityOptions options,
      Map<String, ActivityOptions> activityMethodOptions) 
```
* [WorkflowImplementationOptions#activityOptions](https://github.com/temporalio/sdk-java/blob/1a0738c068a060f9aa174cf4286ffc357251b2a6/temporal-sdk/src/main/java/io/temporal/worker/WorkflowImplementationOptions.java#L84)
* [Workflow.applyActivityOptions](https://github.com/temporalio/sdk-java/blob/ed211fa611112288b576a2c979be9284e17fec89/temporal-sdk/src/main/java/io/temporal/internal/sync/WorkflowInternal.java#L276)
* `options`
* `activityMethodOptions`

Edit: I believe this is the documented and intended behaviour, but the documentation and code is spread out enough that it is not trivial obvious which we should fix.

</details>


---

<a id="1426"></a>

### #1426: Test server timeouts improperly set to 10 years when not user set

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1426 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-09-14 14:11:54.000 UTC (3y 3m ago) |
| **Updated** | 2024-12-17 21:19:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Current server doesn't set `WorkflowExecutionStartedEventAttributes.workflow_execution_timeout` or `PollActivityTaskQueueResponse.schedule_to_close_timeout` if the user didn't

## Actual Behavior

Test server sets these to 10 years when not set. While this may make sense internally to bound the timer, e.g. the API for https://www.javadoc.io/static/io.temporal/temporal-sdk/1.16.0/io/temporal/activity/ActivityInfo.html#getScheduleToCloseTimeout() should be accurate.

#### Comments (6)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-10-25 15:07:28.000 UTC</summary>

This is a "feature". Instead of just hanging the unit test, we force the workflow to time out in the test environment if nothing would happen with it and it will hang.
But I see how this feature may be confusing. This needs a broader discussion. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-10-25 15:42:43.000 UTC</summary>

I can understand it makes sense to internally bound the timer, but we should make the API responses accurate though if possible

</details>

<details>
<summary><strong>jroof88</strong> commented on 2024-11-05 19:07:57.000 UTC</summary>

Hello. This issue just took down all of our production workflows cause we made an incorrect assumption that all of our Workflow Tests would've caught this issue.

Are there any updates on this? It feels odd to call this a feature since the test environment should mimic the production environment for proper testing. Is there a workaround where maybe instead of actually setting these values on the server we could just validate the config is correct?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-05 19:33:50.000 UTC</summary>

I am sorry to hear this caused an issue for you in production. There is no update here, but I am curious what the exact issue you hit was?

I would think of the test server as a good tool to unit test workflows, but it is no replacement for testing your workflows against a real Temporal cluster with the same settings as your production cluster before going to production.

>It feels odd to call this a feature since the test environment should mimic the production environment for proper testing. 

The overwhelming feedback we have received from users is the test server should optimize for the test experience over mimicking exact server behaviour.

>setting these values on the server we could just validate the config is correct?

Not sure exact settings you are referring to, but in general the Temporal server is the authority on what settings are valid or not valid as for some things it can depend on the servers dynamic configs what values are allowed so the SDK cannot know ahead of time.

</details>

<details>
<summary><strong>jroof88</strong> commented on 2024-11-05 23:48:07.000 UTC</summary>

Thanks for the quick response @Quinn-With-Two-Ns!

Our issue was with the need to set either the `ScheduleToStartTimeout` or `StartToCloseTimeout` for every activity invocation:
```
BadScheduleActivityAttributes: A valid StartToClose or ScheduleToCloseTimeout is not set on ScheduleActivityTaskCommand.
```

> I would think of the test server as a good tool to unit test workflows, but it is no replacement for testing your workflows against a real Temporal cluster with the same settings as your production cluster before going to production.

tbh this just feels like a LOT of work to test workflows then if this is the stance you are taking

> Not sure exact settings you are referring to

I might have used the wrong verbiage. Referring to the ActivityOption settings for timeouts for `ScheduleToStartTimeout` or `StartToCloseTimeout`. My suggestion was maybe there could just be validation in the test server that these are set prior to activity execution:
```go
// Psuedo-Code
func ExecuteActivity(...) error {
  if workflowCtx.ValidateTimeout() {
    // throw error
  }

  // Execute Activity as normal
}
```
I don't know enough about SDK Internals to know if this is feasible. Just throwing ideas out! In the interim, we are adding this validation on our side which feels like something we shouldn't have to worry about.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-06 00:05:41.000 UTC</summary>

>Our issue was with the need to set either the ScheduleToStartTimeout or StartToCloseTimeout for every activity invocation:

Hmm, well this is an options that the SDK can validate SDK side. So the Java SDK does validate that one of these options is set https://github.com/temporalio/sdk-java/blob/c8a27ce9073164141fc1f08ac4c80456f48b3c1d/temporal-sdk/src/test/java/io/temporal/activity/ActivityOptionsTest.java#L65, the test server also has a similar [check](https://github.com/temporalio/sdk-java/blob/c8a27ce9073164141fc1f08ac4c80456f48b3c1d/temporal-test-server/src/main/java/io/temporal/internal/testservice/TestWorkflowMutableStateImpl.java#L1064) as well. Can you share how a some self contained reproduction that passes against the test server but fails against a real server?

</details>


---

<a id="806"></a>

### #806: Workflow.retry that takes a function to decide if retry is needed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/806 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2021-10-09 15:49:57.000 UTC (4y 3m ago) |
| **Updated** | 2022-03-04 08:19:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
`Workflow.retry` RetryOptions.doNotRetry is a list of strings. So any exception is converted to a string before matching. In many scenarios, the retry is based on a specific information in a specific exception down the chain or even on some other information within the workflow body.

**Describe the solution you'd like**
An API that takes a function (or lambda) that can execute random user provided logic to decide if retry is needed.

**Additional context**
This only works for retries from the workflow code. The service side retries have to rely on string matching in the current architecture. An activity already can decide itself that the error is not retryable by throwing an non-retryable ApplicationFailure.

#### Comments (6)

<details>
<summary><strong>niegus</strong> commented on 2022-02-18 08:55:51.000 UTC</summary>

Is there an ETA about when this could be tackled? :) 

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-02-18 16:29:08.000 UTC</summary>

@niegus We typically don't provide ETAs for feature requests. Contributions are welcomed, this is a great starter issue.

Reactions: 👍 1

</details>

<details>
<summary><strong>niegus</strong> commented on 2022-02-25 10:20:33.000 UTC</summary>

How do you envision this feature? `Workflow.retry` retries based on the expiration parameter, plus the maximum attempts configured in the `RetryOptions`, always if the exception is not set in the list of `doNotRetry` exceptions.

If there is a new function/lambda to decide if the retry is need, how it would work with the current behavior? Taking precedence over them? Validate on the creation of the `RetryOption` so there can not be contradictions between the "retryOn" and "doNotRetry"?

</details>

<details>
<summary><strong>niegus</strong> commented on 2022-03-03 10:52:08.000 UTC</summary>

cc: @Spikhalskiy @mfateev 

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-03-03 16:32:30.000 UTC</summary>

I think to have it consistent, it should be `doNotRetryPedicate` and retry doesn't happen if `ex.getErrorType in retryOptions.getDoNotRetry() || doNotRetryPedicate(ex)`.

But I'm getting back the comment about the great starter issue. 
I thought about a bit different place in the system (workflow method exceptions and failures). 
`Workflow.retry` works with persisted side effects and it may get tricky. But if you want to give it a shot, the effort is very welcomed.

</details>

<details>
<summary><strong>niegus</strong> commented on 2022-03-04 08:19:36.000 UTC</summary>

@Spikhalskiy This feature request comes from this thread: https://community.temporal.io/t/temporal-queue-activities/3095/8 to retry in certain cases, `doNotRetryPredicate()` could do the trick, but it would require to write negative code 😅 

Eg.
```
doNotRetryPredicate(ex -> !(ex.getCause() instanceof TimeoutFailure && 
               ((TimeoutFailure) ex.getCause()).getTimeoutType() == TimeoutType.TIMEOUT_TYPE_SCHEDULE_TO_START))
```

IMHO (as a customer of this lib) it would be easier:
```
retryOnPredicate(ex -> ex.getCause() instanceof TimeoutFailure && 
               ((TimeoutFailure) ex.getCause()).getTimeoutType() == TimeoutType.TIMEOUT_TYPE_SCHEDULE_TO_START)
```

WDYT? Would that make sense?

</details>


---

<a id="626"></a>

### #626: Excessive retries in test workflow environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/626 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2021-08-11 18:40:09.000 UTC (4y 5m ago) |
| **Updated** | 2024-12-17 21:19:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description


When testing an activity that constantly fails (cannot recover from the failure) and has a large scheduleToClose timeout set (like days/months), or does not have one set at all
the testing framework will keep retrying in some cases thousands of times. 

Asking to add a feature that in those edge cases to not retry, but skip time so the excessive retries are avoided in tests.


To reproduce you can have a workflow which calls a single activity with activity options setScheduleToCloseTimeout set to 5 days for example. Set the activity to fail with for example:
throw Activity.wrap(new Exception("oops"));

in test you will see that it performs over 4K retries before timing out.

#### Comments (6)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-08-11 20:03:09.000 UTC</summary>

Linking https://github.com/temporalio/sdk-java/issues/499 as a different, but very relevant request. We should discuss the behavior of retries with our testing framework / time skipping / debugging mode.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-08-11 20:11:32.000 UTC</summary>

@tsurdilo what is the definition of "excessive" retries? And how the framework should define which is excessive in each specific scenario?

From my point of view, the described situation is not a problem and is actually expected behavior. A workflow activity should be retried the same amount of times in tests with time-skipping as it actually would be executed in 5 days before failing the workflow. And a lot of users will not be happy if it's not like that, it will be quite misleading and error-prone.
We can't just randomly decide what is extensive. For example, if activity retries every second in a normal environment and we have 5 days timeout and we have no limits for max retries - the total amount of retries in tests SHOULD be 5 * 24 * 60 * 60 = 432000

There is a way to achieve what you want though:
We basically want different `ActivityOptions#RetryOptions` in tests. So, we can modify `RetryOptions` and add `maxRetries=10` or `maxRetries=100` to `RetryOptions` if the execution happens inside unit-test (using some env var for example to define it, like proposed in the linked issue #499).
Are you proposing to provide this functionality in an easier-to-use form as a part of our testing framework?

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2021-08-11 20:45:25.000 UTC</summary>

i think in a test its different as you dont in most cases fix the error on activity after a number of retries. maybe if use knows they are testing activity failure specifically then the number of retries can even be 0 . or some number in config as activity options can be specified in workflow tested so they cannot be changed in test

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2021-08-11 20:49:01.000 UTC</summary>

@mfateev wdyt?

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-08-11 21:45:49.000 UTC</summary>

We shouldn't completely cut off activity retries in tests because a lot of users would want to test and verify the retries' count, behavior, or even potential side effects.
If we don't want to have retries in tests, we can specify ActivityOptions#RetryOptions#maxRetries=1 if we are executing in a unit test as I described before.
But I agree, that having such code OR some tricky options injection/override just to get this behavior in tests can be a little annoying for the application developers. So, your proposal is to provide this functionality (limiting the number of retries to 1 for all activities) as a part of our test framework to make it handier, correct?

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2021-08-11 21:59:25.000 UTC</summary>

Yes, I think that would be nice if possible:
Ability to overwrite whole/parts of the activity options in the test (when ActivityOptions are defined inside the tested workflow code).

I think this could help also with some scenarios where for example you have ActivityOptions that specify a different task queue and you have to create extra workers for it in your tests, so ability to default all task queues for tested workflow and all its activities to the one created automatically by TestWorkflowRule, but that might be asking too much, idk :) 

</details>


---

<a id="2642"></a>

### #2642: TestWorkflowEnvironment sleep incorrect behaviour

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2642 |
| **State** | OPEN |
| **Author** | oleg-kovrizhin-paradym |
| **Created** | 2025-08-26 14:06:07.000 UTC (4 months ago) |
| **Updated** | 2025-09-25 23:15:15.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

## Expected Behavior

Integration tests with Temporal should not actually sleep or wait when using `TestWorkflowEnvironment.sleep()`.  
The virtual time should advance instantly, regardless of other tests being executed before.

## Actual Behavior

In some cases, tests sleep and wait in real time instead of using virtual time.  
This happens when a test using `TestWorkflowEnvironment.sleep()` runs after another test that executed a child workflow.

## Steps to Reproduce the Problem

1. Use Temporal library 1.30.1 with io.temporal:temporal-spring-boot-starter.

2. Have a workflow with setStartDelay().
 
3. Write an integration test that relies on TestWorkflowEnvironment.sleep(Duration.ofDays(1)).

    When run in isolation, the test passes instantly (virtual time works).

4. Add another test that uses a child workflow, e.g.:

```
TestWorkflow transferWorkflow =
    Workflow.newChildWorkflowStub(
        TestWorkflow.class,
        ChildWorkflowOptions.newBuilder()
            .setWorkflowId("test-id")
            .setTaskQueue("test-task-queues")
            .setParentClosePolicy(ParentClosePolicy.PARENT_CLOSE_POLICY_ABANDON)
            .setWorkflowIdReusePolicy(WorkflowIdReusePolicy.WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE)
            .setRetryOptions(RetryOptions.newBuilder()
                .setMaximumAttempts(MAXIMUM_ATTEMPTS)
                .build())
            .build()
    );


Async.procedure(() -> transferWorkflow.test(test.testId()));

Promise<WorkflowExecution> childExecution = Workflow.getWorkflowExecution(transferWorkflow);
childExecution.get();
```


5. Run the whole test suite.

The test with sleep(Duration.ofDays(1)) now sleeps in real time instead of advancing virtual time.

Notes

Behavior is consistent:

✅ Works when the test with sleep is executed alone.

❌ Breaks when a test with a child workflow ran before it.

Looks like something in the child workflow test "switches" the TestWorkflowEnvironment from virtual time to real time.

Specifications

Version: 1.30.1

Platform: Java

Dependency: io.temporal:temporal-spring-boot-starter


---

<a id="2412"></a>

### #2412: Marker Commands being sent with empty names in the wild

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2412 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-10 19:34:11.000 UTC (11 months ago) |
| **Updated** | 2025-02-13 19:27:45.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior
Marker commands should never be sent to server with an empty marker name.

## Actual Behavior
That happened

## Steps to Reproduce the Problem
Unclear. Some user workflows were seen encountering this error on workflow completion:

```BadRecordMarkerAttributes: MarkerName is not set on RecordMarkerCommand.```

From what I could tell looking at the code briefly, the only way it seemed like this might happen is if the marker command was constructed while replaying was true, and then it later became false and sent off the command.

## Specifications
This was definitely Java SDK, which we determined by seeing the stack trace query. Not clear which version. Java needs to do https://github.com/temporalio/sdk-java/issues/1838

#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-02-10 20:01:43.000 UTC</summary>

Commands aren't sent on replay, there was an old bug https://github.com/temporalio/sdk-java/issues/1558 can you confirm this happend with the latest SDK ?

</details>

<details>
<summary><strong>Sushisource</strong> commented on 2025-02-13 19:27:43.000 UTC</summary>

No info on the version unfortunately since it's not being written to the history yet. We could potentially go to the customer and try to ask them about it, this was just something @alexshtin discovered while scanning logs.

</details>


---

<a id="2394"></a>

### #2394: Pure opentelemetry based tracing support instead of using tracershim

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2394 |
| **State** | OPEN |
| **Author** | vijjayy81 (Vijayaraj Muthusamy) |
| **Created** | 2025-01-30 00:03:07.000 UTC (11 months ago) |
| **Updated** | 2025-01-30 00:03:07.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

Opentracing with opentelemetry shim produces the tracing capabilities as we expect.

Could we simply have a module using opentelemetry directly? 


---

<a id="2391"></a>

### #2391: [Bug] Cancelling an activity results in `FailedPrecondition: ACTIVITY_UNKNOWN` error on time skipping server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2391 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-02-17 15:28:02.000 UTC (2y 10m ago) |
| **Updated** | 2025-01-28 20:33:03.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

A user has a workflow that attempts to cancel an activity in the very same WFT where that activity completes (eg. it cancels the activity from a signal handler, so the activity promise has not yet been marked as completed).

Using the official server, the workflows continues execution without problem.

However, using the time skipping test server, the workflow get stuck, and the following error message is being displayed:

```
Network error while completing workflow activation error=status: FailedPrecondition, message: "ACTIVITY_UNKNOWN for scheduledEventId=41"
```

### Minimal Reproduction

A user provided [this repro](https://github.com/Irvenae/ts-temporal/blob/main/src/__tests__/networkError.test.ts).

Another user provided the following code:

```
try {
  await someActivity(); // someActivity works here
  await someActivityThatTriggersCancelation();
} catch (e: unknown) {
  if (isCancellation(e)) {
    await CancellationScope.nonCancellable(async () => {
      await someActivity(); // someActivity fails with "ACTIVITY_UNKNOWN" here
    });
  }
}
```

He also mentioned that he would encounter the same thing if he calls `handle.cancel()` outside of any activity, in the outer test context.

#### Comments (2)

<details>
<summary><strong>mjameswh</strong> commented on 2023-02-17 15:35:05.000 UTC</summary>

**Internal notes**

The error returned by [the Test server](https://github.com/temporalio/sdk-java/blob/ba838febd86bb7033346b075504158d65b81a3d0/temporal-test-server/src/main/java/io/temporal/internal/testservice/TestWorkflowMutableStateImpl.java#L790) is “incorrect” with regards to the official server…

That explains the "Network error" message, but not why the workflow is able to continue forward with the official server, but not with the time skipping test server. In both case, the server should deny the WFT Completion anyway, and [core will evict the workflow in both cases](https://github.com/temporalio/sdk-core/blob/master/core/src/worker/workflow/mod.rs#L524-L535).

An hypothesis is that the test server might fail to send a subsequent WFT for some reason.

</details>

<details>
<summary><strong>josiah-roberts</strong> commented on 2023-02-22 01:19:24.000 UTC</summary>

Watching this issue; right now we're able to write tests for our no-sleep workflows, but not workflows that sleep.

</details>


---

<a id="2092"></a>

### #2092: activity_succeed_endtoend_latency not reported when completing the activity with ActivityCompletionClient

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2092 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2024-06-04 13:57:52.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-04 20:12:25.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

The metric activity_succeed_endtoend_latency should be reported when activity is completed with `ActivityCompletionClient.complete`

I think it is missing in this method https://github.com/temporalio/sdk-java/blob/0c8073ee74984333f045b79a27da337097d7ae7a/temporal-sdk/src/main/java/io/temporal/internal/client/external/ManualActivityCompletionClientImpl.java#L101

## Actual Behavior

Metric is not reported, you can find a reproduction here https://github.com/antmendoza/my-temporal-pocs/tree/main/java/pocs/src/main/java/io/antmendoza/samples/_6442.  



## Steps to Reproduce the Problem

  1.
  1.
  1.

## Specifications

  - Version:
  - Platform:


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-06-04 14:01:03.000 UTC</summary>

I don't believe any SDK records this metric when async activity is used. Async activity means "I will handle completion myself" and therefore it bypasses Temporal's completion mechanisms which includes this metric. Many users use async completion to complete activities on completely separate machines than where it was started which means it _can't_ set this value (it doesn't know the start time).

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-06-04 20:12:23.000 UTC</summary>

in the case of manual completion that is intended for in process activity completion so the activity start time could be known.

Reactions: 👍 1

</details>


---

<a id="1969"></a>

### #1969: Provide WorkflowStatus in WorkflowNotFoundException when signing a workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1969 |
| **State** | OPEN |
| **Author** | longquanzheng (Quanzheng Long) |
| **Created** | 2024-01-11 20:15:28.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-16 19:04:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently signaling a closed workflow will throw this exception, but there are several cases:
* Workflow really doesn't exist (or deleted after retention)
* Workflow is completed/terminated/etc (closed)

As an application, we sometimes need to handle the two cases differently(error handling). 

**Describe the solution you'd like**
The exception should just return "WorkflowStatus" inside. 

**Describe alternatives you've considered**
Currently we have to make a DescribeWorkflowExecution API call to achieve this. This requires more code, more error handling, and higher latency . 

**Additional context**
Add any other context or screenshots about the feature request here.


#### Comments (4)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-01-13 00:50:33.000 UTC</summary>

Currently the server does not send back this information on a signal to a not running workflow. So to clarify, is the ask that the Temporal server sends back the `WorkflowExecutionStatus` on a signal to a not running workflow?

</details>

<details>
<summary><strong>longquanzheng</strong> commented on 2024-01-13 01:15:13.000 UTC</summary>

Yes 👍 it needs server support


Thanks,
Quanzheng


On Fri, Jan 12, 2024 at 4:50 PM Quinn Klassen ***@***.***>
wrote:

> Currently the server does not send back this information on a signal to a
> not running workflow. So to clarify, is the ask that the Temporal server
> sends back the WorkflowExecutionStatus on a signal to a not running
> workflow?
>
> —
> Reply to this email directly, view it on GitHub
> <https://github.com/temporalio/sdk-java/issues/1969#issuecomment-1890198939>,
> or unsubscribe
> <https://github.com/notifications/unsubscribe-auth/ABCQPM3DURANKBM4NOAMTLTYOHK6HAVCNFSM6AAAAABBXCIIUWVHI2DSMVQWIX3LMV43OSLTON2WKQ3PNVWWK3TUHMYTQOJQGE4TQOJTHE>
> .
> You are receiving this because you authored the thread.Message ID:
> ***@***.***>
>


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-16 14:07:06.000 UTC</summary>

I could transfer this issue to the https://github.com/temporalio/temporal repo, but its title and description are very Java SDK specific. Rather, can you open an issue there asking for this information to be present on the not-found details of workflow calls?

</details>

<details>
<summary><strong>longquanzheng</strong> commented on 2024-01-16 19:04:32.000 UTC</summary>

> I could transfer this issue to the https://github.com/temporalio/temporal repo, but its title and description are very Java SDK specific. Rather, can you open an issue there asking for this information to be present on the not-found details of workflow calls?

yeah: https://github.com/temporalio/temporal/issues/5303


</details>


---

<a id="1940"></a>

### #1940: Support Java Modules

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1940 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-11-21 00:50:52.000 UTC (2y 1m ago) |
| **Updated** | 2025-08-07 18:03:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Support Java Modules

**Describe the solution you'd like**
Every relevant library should publish a `Automatic-Module-Name` in the manifest or a `module-info.java`. Currently the Java SDK cannot be used as a named Java module since some of modules implement the same packages.

```
error: the unnamed module reads package io.temporal.internal.common from both temporal.sdk and temporal.serviceclient
error: the unnamed module reads package io.temporal.internal from both temporal.sdk and temporal.serviceclient
```

Java modules do not allow this, it is called a split package.

**Describe alternatives you've considered**
Don't support Jave modules



#### Comments (4)

<details>
<summary><strong>Riva2006</strong> commented on 2023-12-18 12:55:58.000 UTC</summary>

It is important fix to all Java developers ,  Currently we using shadow to repack the packages , It is important to get basic support of module-info

</details>

<details>
<summary><strong>dbiere</strong> commented on 2024-10-22 13:48:16.000 UTC</summary>

This issue was opened nearly a year ago and is still a problem as of Temporal Java SDK 1.24.1. Is this on the roadmap to resolve? Thank you.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-10-22 14:01:06.000 UTC</summary>

Yes we are aware of this issue, but I have no timeline on when this will be resolved.

</details>

<details>
<summary><strong>inphoenitic</strong> commented on 2025-08-07 18:03:16.000 UTC</summary>

The first step should be in this journey to stop sharing/splitting packages in different modules/jars. At this moment, there are classes spread out in multiple jars from `io.temporal.internal` and `io.temporal.internal.common.` This is an easy fix, takes no more that 10 minutes for an experienced coder. If this is solved, java's automatic module resolution does                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           most the remaining work and lets us use these as modules.
What I identified, is that in the `temporal-sdk` module, the package io.temporal.interna                                             l.common should be renamed to something el, like `io.temporal.internal.utils`, and the classes `io.temporal.internal.WorkflowThreadMarker` and io.temporal.internal.BackoffThrottler should be moved to a different package (the easiest is to move them to the previous io.temporal.internal.utils. This would allow the build process to create two jars that do not share/split the two packages.
I have tested this in my environment, but I do not want to contribute here, because I'm terrible with gradle and have no kotlin experience. Of course, I'm ready to help, if you think it is the quickest way... 

</details>


---

<a id="1025"></a>

### #1025: In case of existing workflow both sync and async executions should have an option to error out or return an existing execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1025 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-02-02 18:19:27.000 UTC (3y 11m ago) |
| **Updated** | 2023-01-12 00:04:26.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

In addition to WorkflowReusePolicy, GoSDK has a flag

https://github.com/temporalio/sdk-go/blob/57736850f55b2b3e17cffa0e3493c4e0d6de831f/internal/client.go#L529
```
// When WorkflowExecutionErrorWhenAlreadyStarted is true, Client.ExecuteWorkflow will return an error if the
// workflow id has already been used and WorkflowIDReusePolicy would disallow a re-run. If it is set to false,
// rather than erroring a WorkflowRun instance representing the current or last run will be returned.
//
// Optional: defaults to false
WorkflowExecutionErrorWhenAlreadyStarted bool
```

That enabled an explicit failing of the workflow start if WorkflowReusePolicy disallowed an execution instead of returning the old execution.

This has to be added to JavaSDK, otherwise, there is no way for users to get the fact that the start request was disallowed and the returned execution is an old execution.

One of the discussions on this topic:
[C02E8TQA01G-1673406348.075879.txt](https://github.com/temporalio/sdk-java/files/10396892/C02E8TQA01G-1673406348.075879.txt)


#### Comments (2)

<details>
<summary><strong>mfateev</strong> commented on 2022-02-03 05:15:54.000 UTC</summary>

No need for such flag in Java. The solution is to make two API calls:
1. StartWorkflow which is going to throw "already running"
2. Wait for workflow result

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-05-05 19:48:33.000 UTC</summary>

@mfateev This makes users use exceptions as a part of their normal code flow. It is bad practice especially when we already have all the underlying APIs to make it possible without exceptions.
Also, it's messy and counterintuitive that sync API in case of a duplicate returns an existing execution, while async execution throws an exception.
It looks like we have to preserve backward compatibility, but we need to give users a choice in both APIs to error out or just to attach to existing execution if there is one.

</details>


---

<a id="995"></a>

### #995: Inheritance of workflow interfaces is not supported

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/995 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-21 20:53:43.000 UTC (3y 11m ago) |
| **Updated** | 2024-12-17 21:26:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

```
  @WorkflowInterface
  public interface CustomerWorkflow {

    @WorkflowMethod
    void execute(Customer customer);

  }

  @WorkflowInterface
  public interface CustomerWorkflowWithSignal extends CustomerWorkflow {

    @SignalMethod(name = "setCustomer")
    void setCustomer(Customer customer);
  }
```

Registering two classes that implement the interfaces above should be possible, the second implementation should have a CustomerWorkflowWithSignal name.

Instead, it causes "java.lang.IllegalStateException: CustomerWorkflow workflow type is already registered with the worker".

Special consideration should be put into maintaining compatibility during the fix as it may change the workflow names for some users.

#### Comments (4)

<details>
<summary><strong>mfateev</strong> commented on 2022-01-23 21:45:47.000 UTC</summary>

This is supported:
```
  public interface CustomerWorkflow {

    @WorkflowMethod
    void execute(Customer customer);

  }

  @WorkflowInterface
  public interface CustomerWorkflowWithSignal extends CustomerWorkflow {

    @SignalMethod(name = "setCustomer")
    void setCustomer(Customer customer);
  }
```

</details>

<details>
<summary><strong>mfateev</strong> commented on 2022-01-23 21:47:26.000 UTC</summary>

Currently any interface annotated with @WorkflowInterface defines a workflow type. I don't think a user would really want to have two separate workflow types CustomerWorkflow and CustomerWorkflowWithSignal in this case.

See https://docs.temporal.io/docs/java/workflows#workflow-interface-inheritance

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-23 21:51:43.000 UTC</summary>

> This is supported:
> 
> ```
>   public interface CustomerWorkflow {
> 
>     @WorkflowMethod
>     void execute(Customer customer);
> 
>   }
> 
>   @WorkflowInterface
>   public interface CustomerWorkflowWithSignal extends CustomerWorkflow {
> 
>     @SignalMethod(name = "setCustomer")
>     void setCustomer(Customer customer);
>   }
> ```

The objective of the issue is "Inheritance of workflow interfaces is not supported". In your snippet, CustomerWorkflow is not a WorkflowInterface.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-23 21:55:50.000 UTC</summary>

> I don't think a user would really want to have two separate workflow types CustomerWorkflow and CustomerWorkflowWithSignal in this case.

^ This is how I would expect it to behave.

This should be either supported or explicitly non-supported. So, this either should work as described in the description of the issue OR it should throw an exception like "Inheritance of workflow interfaces is not supported". 

What definitely shouldn't happen and it happens now, when a user registers CustomerWorkflowWithSignal workflow, actually a workflow CustomerWorkflow gets registered. It's confusing, non-obiovus and error-prone.

</details>


---

<a id="811"></a>

### #811: Add test framework for partial json history replay and continuing of execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/811 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-10-11 16:25:16.000 UTC (4y 3m ago) |
| **Updated** | 2021-10-11 16:25:16.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

**Is your feature request related to a problem? Please describe.**
We have a framework that allows launching workflows from scratch.
We also have a way to make a full history replay using query functionality. See `WorkflowReplayer` that falls back to     `worker.queryWorkflowExecution(history, WorkflowClient.QUERY_TYPE_REPLAY_ONLY, ...)`
We don't have a way to make a replay of a partial json history and continue the execution (aka restoring from a failure).
It's supported for our state machines testing framework, but not for workflow integration testing framework.
Which limits what kind of state machines permutation we can cover with functional tests and limits our ability to test replayability by itself.

**Describe the solution you'd like**
Add an ability for our TestService to load a partial workflow history from a json, restore a workflow mutable state from it and dispatch workflow tasks to continue execution on a worker simulating restoring after a failure or after a worker cache eviction.

**Describe alternatives you've considered**
Alternatively, to get the same result in the test, we can simulate a failure the first time at the place in a workflow we want to get a replay to. But this is a hacky way to achieve to goal and also it doesn't allow us to test compatibility with histories produced in older versions of SDKs.
Alternatively, we can continue to don't have tests covering continue execution after a partial replay.


---

<a id="631"></a>

### #631: DeterministicRunner is noisy about not accessed cancelled scopes and timers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/631 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-08-15 16:57:32.000 UTC (4y 4m ago) |
| **Updated** | 2024-12-17 21:26:56.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

## Expected Behavior
We have logic in Deterministic Runner detecting the fact that a promise failed, but the exception or reason of the cancellation was never accessed.
If the cancellation scope is canceled, it should be normal and expected to don't access the promises created in this scope and the logic above shouldn't be noisy about it.

## Actual Behavior

If cancel a cancellation scope and never read its Promises, Deterministic Runner will make a noisy log about it, while it's an expected pattern:
```
12:46:38.400 [...] WARN  i.t.i.sync.DeterministicRunnerImpl - Promise completed with exception and was never accessed. The ignored exception:
io.temporal.failure.CanceledFailure: Canceled by request
	at java.base/java.lang.Thread.getStackTrace(Thread.java:1596)
	at io.temporal.internal.sync.CompletablePromiseImpl.throwFailure(CompletablePromiseImpl.java:136)
	at io.temporal.internal.sync.CompletablePromiseImpl.getImpl(CompletablePromiseImpl.java:95)
	at io.temporal.internal.sync.CompletablePromiseImpl.get(CompletablePromiseImpl.java:74)
	at io.temporal.internal.sync.DeterministicRunnerImpl.close(DeterministicRunnerImpl.java:309)
	at io.temporal.internal.sync.SyncWorkflow.close(SyncWorkflow.java:165)
	at io.temporal.internal.replay.ReplayWorkflowExecutor.close(ReplayWorkflowExecutor.java:145)
	at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.close(ReplayWorkflowRunTaskHandler.java:242)
	at io.temporal.internal.replay.WorkflowExecutorCache.lambda$new$0(WorkflowExecutorCache.java:56)
	at com.google.common.cache.LocalCache.processPendingNotifications(LocalCache.java:1810)
	at com.google.common.cache.LocalCache$Segment.runUnlockedCleanup(LocalCache.java:3463)
	at com.google.common.cache.LocalCache$Segment.postWriteCleanup(LocalCache.java:3439)
	at com.google.common.cache.LocalCache$Segment.remove(LocalCache.java:3073)
	at com.google.common.cache.LocalCache.remove(LocalCache.java:4247)
	at com.google.common.cache.LocalCache$LocalManualCache.invalidate(LocalCache.java:4887)
	at io.temporal.internal.replay.WorkflowExecutorCache.invalidate(WorkflowExecutorCache.java:140)
	at io.temporal.internal.replay.WorkflowExecutorCache.getOrCreate(WorkflowExecutorCache.java:75)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.getOrCreateWorkflowExecutor(ReplayWorkflowTaskHandler.java:182)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTaskWithEmbeddedQuery(ReplayWorkflowTaskHandler.java:200)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTask(ReplayWorkflowTaskHandler.java:114)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:319)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:279)
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:73)
```

## Steps to Reproduce the Problem


---

<a id="525"></a>

### #525: Allow context propagators & interceptors to populate ActivityExecutionContext

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/525 |
| **State** | OPEN |
| **Author** | robzienert (Rob Zienert) |
| **Created** | 2021-06-03 16:51:51.000 UTC (4y 7m ago) |
| **Updated** | 2024-12-17 21:27:53.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | robzienert, vitarb |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
I'm trying to access information from a context propagator in an Activity. The current strategy is that the context propagator should create a `ThreadLocal` to make this data accessible from an Activity, but the ergonomics of this could be improved.

**Describe the solution you'd like**
Being able to access propagated context via `Activity.getExecutionContext()` would be have better ergonomics. In this scenario, it seems like the responsibility would still be on the `ContextPropagator` or interceptor to populate these values, but accessing this information from activities would be cleaner.

**Describe alternatives you've considered**
The existing `ThreadLocal` pattern works.


#### Comments (2)

<details>
<summary><strong>robzienert</strong> commented on 2021-06-03 17:04:08.000 UTC</summary>

I would be interested in taking this on, provided a little bit of advise on how you think it would be best implemented.

</details>

<details>
<summary><strong>vitarb</strong> commented on 2021-06-07 16:59:55.000 UTC</summary>

Sure, you can ping me in temporal [slack](https://join.slack.com/t/temporalio/shared_invite/zt-onhti57l-J0bl~Tr7MqSUnIc1upjRkw) if you need any help.

</details>


---

<a id="467"></a>

### #467: Register multiple activity names for an activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/467 |
| **State** | OPEN |
| **Author** | jonsie (Chris Smalley) |
| **Created** | 2021-05-03 23:44:31.000 UTC (4y 8m ago) |
| **Updated** | 2023-04-19 20:17:39.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

In the event of a refactor wherein activity names are changed (prefix added, method name changed, etc) there is no clean way to migrate from one activity name to another --> if a worker picks up an activity with a name that is not registered with that worker it will throw an `ApplicationFailure`.

**Describe the solution you'd like**

I would like to have the ability to register multiple activity names for an activity - this way one could deploy the activity name change and then on the next deploy delete the previous activity name.

Ideally there would be a mechanism to mark one activity name as deprecated.

Thanks!

#### Comments (2)

<details>
<summary><strong>vitarb</strong> commented on 2021-05-06 17:58:31.000 UTC</summary>

@jonsie are you asking to add name aliases into [`@ActivityMethod`](https://github.com/vitarb/java-sdk/blob/f0bbf84c496454d9909caefe6ca2784f76b8e592/temporal-sdk/src/main/java/io/temporal/activity/ActivityMethod.java#L33) annotation?

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-19 20:17:38.000 UTC</summary>

Design of this feature should be approached together with https://github.com/temporalio/sdk-java/issues/396

</details>


---

<a id="317"></a>

### #317: Published artifacts do not include sources for the generated code

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/317 |
| **State** | OPEN |
| **Author** | robzienert (Rob Zienert) |
| **Created** | 2021-01-20 21:24:21.000 UTC (4y 11m ago) |
| **Updated** | 2024-12-17 21:27:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Published artifacts should include sources and javadoc.


## Actual Behavior

Only compiled class artifacts are published.

## Steps to Reproduce the Problem

  1. Use java SDK as dependency in any project.

## Specifications

  - Version: 1.0.4

## Notes

I see that the Gradle project is using `withJavadocJar()` and `withSourcesJar()`, and a sufficient Gradle version for these to work, however no sources or javadoc are included anyway. I was going to open a PR to do this the pre-6.x way, but wanted to verify with you folks first in case you see a more correct fix.

#### Comments (4)

<details>
<summary><strong>vitarb</strong> commented on 2021-01-20 22:01:04.000 UTC</summary>

Interesting, maven central has all those files:
https://repo1.maven.org/maven2/io/temporal/temporal-sdk/1.0.4/

Can you double check if your IDE is downloading sources/javadocs?
You may need to explicitly press the button to fetch them.

</details>

<details>
<summary><strong>GreyTeardrop</strong> commented on 2021-01-20 22:11:03.000 UTC</summary>

I was able to partially reproduce this issue. All the "proper" source code is present, however, the generated sources seem to be missing from the `temporal-serviceclient`:
```
~/Downloads/temporal-serviceclient-1.0.4-sources
❯ ls -lR .
total 0
drwxr-xr-x@ 3 mrybak  staff  96 Dec 23 21:35 META-INF
drwxr-xr-x@ 3 mrybak  staff  96 Dec 23 19:55 io

./META-INF:
total 8
-rw-r--r--@ 1 mrybak  staff  25 Dec 23 21:35 MANIFEST.MF

./io:
total 0
drwxr-xr-x@ 3 mrybak  staff  96 Dec 23 19:55 temporal

./io/temporal:
total 0
drwxr-xr-x@ 12 mrybak  staff  384 Dec 23 19:55 serviceclient

./io/temporal/serviceclient:
total 128
-rw-r--r--@ 1 mrybak  staff   2519 Dec 23 19:55 GrpcDeadlineInterceptor.java
-rw-r--r--@ 1 mrybak  staff   4900 Dec 23 19:55 GrpcMetricsInterceptor.java
-rw-r--r--@ 1 mrybak  staff   3695 Dec 23 19:55 GrpcTracingInterceptor.java
-rw-r--r--@ 1 mrybak  staff   1495 Dec 23 19:55 LongPollUtil.java
-rw-r--r--@ 1 mrybak  staff   2830 Dec 23 19:55 MetricsTag.java
-rw-r--r--@ 1 mrybak  staff   1415 Dec 23 19:55 MetricsType.java
-rw-r--r--@ 1 mrybak  staff   2404 Dec 23 19:55 Version.java
-rw-r--r--@ 1 mrybak  staff   2390 Dec 23 19:55 WorkflowServiceStubs.java
-rw-r--r--@ 1 mrybak  staff  10979 Dec 23 19:55 WorkflowServiceStubsImpl.java
-rw-r--r--@ 1 mrybak  staff  12903 Dec 23 19:55 WorkflowServiceStubsOptions.java
```

</details>

<details>
<summary><strong>vitarb</strong> commented on 2021-01-20 22:35:30.000 UTC</summary>

You are right, I don't see sources for the generated code. Let me update task description to be more precise.

Reactions: 👍 1

</details>

<details>
<summary><strong>vitarb</strong> commented on 2021-01-20 23:30:00.000 UTC</summary>

There seem to be a couple gradle plugin issues here, I was able to make generated source publishing work by adding `sourceSets.main.java.srcDirs = ["$buildDir/generated/main/java","src/main/java"]`, but it breaks license check and I couldn't exclude that directory in the license plugin.
I think the root cause is a bug in the license checker reported [here](https://github.com/hierynomus/license-gradle-plugin/issues/145) and [here](https://github.com/hierynomus/license-gradle-plugin/issues/57). 
On the other hand we have a similar configuration as metioned [here](https://github.com/tbroyer/gradle-apt-plugin/issues/78#issuecomment-370219011) but for some reason doesn't work (another gradle bug?...).

To summarize our options are:
1. Figure out why license plugin exclude is not working. In which case we can add generated sources to the main sourceSet and they will be published automatically.
2. Debug sourceJar task and find out why it doesn't publish additional files that we've specified.

</details>


---

<a id="86"></a>

### #86: Support passing activityId to an activity invocation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/86 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-05-12 18:31:34.000 UTC (5y 8m ago) |
| **Updated** | 2025-05-15 07:55:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
It is not possible to specify a business level ID for an activity during its invocation. This is a problem for completing activities asynchronously by ID.

**Describe the solution you'd like**
Provide a way to specify the ID when invoking an activity.



#### Comments (4)

<details>
<summary><strong>vitarb</strong> commented on 2020-11-25 01:33:42.000 UTC</summary>

Right now we tell people to create a new stub every time, we should think if we can provide per-activity invocation options.

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2021-11-17 15:26:15.000 UTC</summary>

I think the idea is to specify business level activity id via ActivityOptions as it can be done via other SDKs currently. 

Here is a forum reference for a user that needs this feature implemented:  https://community.temporal.io/t/possible-to-set-activityid/3406

Reactions: 👍 2

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-18 17:55:03.000 UTC</summary>

Related: https://github.com/temporalio/sdk-java/issues/1009

</details>

<details>
<summary><strong>Hassib-Maslah</strong> commented on 2025-05-14 14:09:58.000 UTC</summary>

Hello @mfateev, I was wondering if there are any updates regarding this issue. Do you have an estimated release date ?



</details>


---

<a id="2312"></a>

### #2312: `Workflow.await(duration, condition)` does not automatically cancel the timer if the condition is resolved

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2312 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-11-08 23:46:05.000 UTC (1y 2m ago) |
| **Updated** | 2024-12-23 09:31:57.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
`Workflow.await(duration, condition)` should automatically cancel the timer when the condition is resolved

**Describe alternatives you've considered**
User can currently do this manually with a cancellation scope around the `await`

**Additional context**
This will need to be versioned with SDK flags to avoid breaking determinism.

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-12-23 09:31:55.000 UTC</summary>

Implementer should also verify that if the condition is immediately satisfied no timer is created

Reactions: 👍 2

</details>


---

<a id="2056"></a>

### #2056: Allow users to implement update asynchronously in Java natively

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2056 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-05-08 18:25:12.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-08 18:37:02.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently update handlers in Java are all run in their own threads. This means that if the update handler takes a long time and multiple updates are sent the workflow execution can consume lots of threads just waiting in update handlers. 

**Describe the solution you'd like**
Support the ability to transform an update call into a `Promise` that can be completed later in another thread like the main workflow method .

**Additional context**
We have a similar feature to support async activities https://javadoc.io/doc/io.temporal/temporal-sdk/1.0.6/io/temporal/activity/ActivityExecutionContext.html#isUseLocalManualCompletion--

Currently users can do this with the existing SDK API, but it will still consume a thread waiting for the result to return in the handle. If the SDK had a native API for this we wouldn't need to wait in the thread.

#### Comments (1)

<details>
<summary><strong>mfateev</strong> commented on 2024-05-08 18:37:01.000 UTC</summary>

Ideally, the same API can be reused to complete the workflow asynchronously. This would allow workflows to be implemented fully async without tying up a thread when a workflow is cached.

</details>


---

<a id="1988"></a>

### #1988: Have a built-in way to override activityOptions in tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1988 |
| **State** | OPEN |
| **Author** | yunmanger1 (German Ilin) |
| **Created** | 2024-02-13 15:50:14.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-13 18:14:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
Request: Make it possible for test setup to override ActivityOptions set for activities in workflow. 

Problem:
In production code I have high retry count on activities, but in testing I want to override that to have maxAttempts=1 so that workflow gets it’s failure right away. Or in case I didn’t mock some activity properly the test will fail right away with NullPointerException instead of hanging indefinitely.

Another thing is that, when stubbing activities in workflow I hardcode the queue name, because it might not be the same the workflow is on. And in tests I need to override it to make things run, without reproducing all the queue-worker combinations in prod.

**Describe the solution you'd like**

Sth like `overrideAllActivityOptions` or `overrideActivityOptions` in example below.

```
import io.temporal.activity.ActivityOptions
import io.temporal.client.WorkflowException
import io.temporal.client.WorkflowOptions
import io.temporal.common.RetryOptions
import io.temporal.failure.ActivityFailure
import io.temporal.failure.ApplicationFailure
import io.temporal.testing.TestWorkflowEnvironment
import io.temporal.worker.WorkflowImplementationOptions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.ArgumentMatchers.anyString
import org.mockito.kotlin.mock
import org.mockito.kotlin.whenever


class HelloWorldWorkflowImplTest {

    private val taskQueue = "TASK_QUEUE"
    private val testEnv = TestWorkflowEnvironment.newInstance();
    private val testActivityOptions = ActivityOptions.newBuilder()
        .setTaskQueue(taskQueue)
        .setRetryOptions(RetryOptions.newBuilder().setMaximumAttempts(1).validateBuildWithDefaults())
        .validateAndBuildWithDefaults()
    private val opts = WorkflowImplementationOptions.newBuilder()
        .setFailWorkflowExceptionTypes(
            Throwable::class.java,
        )
        .setDefaultActivityOptions(
            testActivityOptions
        )
        .overrideAllActivityOptions(
            testActivityOptions
        )
        .overrideActivityOptions(
            mapOf(HelloWorldActivities::class.java to testActivityOptions)
        )
        .build()!!
    private val worker = testEnv.newWorker(taskQueue).also {
        it.registerWorkflowImplementationTypes(
            opts,
            HelloWorldWorkflowImpl::class.java
        )
    }

    @Test
    fun `activity error should fail workflow`() {
        val formatActivities = mock<HelloWorldActivities>()
        var count = 1
        whenever(formatActivities.composeGreeting(anyString())).then {
            println("CALL $count")
            count += 1
            error("test error")
        }
        worker.registerActivitiesImplementations(formatActivities)
        testEnv.start()

        val workflow = testEnv.workflowClient.newWorkflowStub(
            HelloWorldWorkflow::class.java,
            WorkflowOptions.newBuilder().setTaskQueue(taskQueue).build()!!
        )
        try {
            workflow.getGreeting("Mock")
            error("unreachable")
        } catch (e: WorkflowException) {
            assertTrue(e.cause is ActivityFailure)
            assertTrue(e.cause?.cause is ApplicationFailure)
            assertEquals(
                "test error",
                (e.cause?.cause as ApplicationFailure).originalMessage
            )
        }
    }
}
```

**Describe alternatives you've considered**
Right now I am flagging to code directly to use testActivityOptions when executed from test.

```
    @BeforeEach
    fun `setup overrides`() {
        GlobalWorkflowOptions.set(testActivityOptions)
    }

    @AfterEach
    fun `reset overrides`() {
        GlobalWorkflowOptions.clear()
    }
```

and in code

```
class HelloWorldWorkflowImpl : HelloWorldWorkflow {

    private val activityOptions = ActivityOptions.newBuilder()
        .setTaskQueue(HELLO_WORLD_TASK_QUEUE)
        .setStartToCloseTimeout(Duration.ofSeconds(60))
        .validateAndBuildWithDefaults()!!

    private val activity = Workflow.newActivityStub(
        HelloWorldActivities::class.java,
        GlobalWorkflowOptions.activityOptions(activityOptions)
    )

    override fun getGreeting(name: String): String {
        return activity.composeGreeting(name)
    }

}
```

**Additional context**
https://community.temporal.io/t/throwing-exception-in-mocked-activity-hangs-the-test/10932

Related issues: #499 #626 

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-02-13 18:14:33.000 UTC</summary>

In the meantime, can you consider having your mock activity throw a non-retryable exception?

</details>


---

<a id="1540"></a>

### #1540: Test service time skipping broken in a child workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1540 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-11-26 20:32:01.000 UTC (3y 1m ago) |
| **Updated** | 2025-05-15 02:20:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Workflow.sleep in a child workflow uses time skipping with a test service.

## Actual Behavior
When a parent calls continue-as-new time skipping in a child is not happening.

## Steps to Reproduce the Problem

See https://github.com/temporalio/sdk-java/pull/1539 for reproduction.


#### Comments (3)

<details>
<summary><strong>pompalive</strong> commented on 2023-01-30 09:48:37.000 UTC</summary>

@Spikhalskiy Would you please suggest on the plan to fix this issue and #1618?

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-02-01 18:45:12.000 UTC</summary>

@pompalive We don't typically provide timelines, especially for issues related to the testing framework. Temporal is open source and we do accept contributions. 

</details>

<details>
<summary><strong>pompalive</strong> commented on 2023-02-03 01:52:36.000 UTC</summary>

Thanks for the reply. I will wait for fix.

</details>


---

<a id="1291"></a>

### #1291: Workflow execution with Workflow.await(condition) times out in unit tests with enabled time skipping

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1291 |
| **State** | OPEN |
| **Author** | ddavidyuk |
| **Created** | 2022-06-28 20:04:01.000 UTC (3y 6m ago) |
| **Updated** | 2024-11-19 19:05:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

## Expected Behavior
The unit test below should always pass

## Actual Behavior
Sometimes the test fails with io.temporal.client.WorkflowNotFoundException. Changing `Workflow.await(condition)` to `Workflow.await(Duration.ofSeconds(100), condition)` in `TestWorkflowImpl` seems to fix the problem, but not sure why.
Attached are the TRACE logs for io.temporal for when the issue reproduces: [bug.log](https://github.com/temporalio/sdk-java/files/9004428/bug.log)


## Steps to Reproduce the Problem
Run the following test:
```java
import io.temporal.activity.ActivityOptions;
import io.temporal.client.WorkflowClient;
import io.temporal.client.WorkflowOptions;
import io.temporal.client.WorkflowStub;
import io.temporal.testing.TestWorkflowEnvironment;
import io.temporal.testing.TestWorkflowExtension;
import io.temporal.worker.Worker;
import io.temporal.worker.WorkflowImplementationOptions;
import io.temporal.workflow.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

import java.time.Duration;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class WorkflowExecutionTimeoutTest {
    @RegisterExtension
    public static final TestWorkflowExtension TEST_WORKFLOW_EXTENSION =
            TestWorkflowExtension.newBuilder()
                    .setDoNotStart(true)
                    .build();

    private ProcessEventsWorkflow processWorkflowStub;
    private TestWorkflow testWorkflowStub;

    @BeforeEach
    public void setUpTemporal(TestWorkflowEnvironment testEnv,
                              Worker worker,
                              WorkflowClient workflowClient,
                              WorkflowOptions workflowOptions) {
        worker.registerWorkflowImplementationTypes(
                WorkflowImplementationOptions.newBuilder()
                        .setDefaultActivityOptions(ActivityOptions.newBuilder()
                                .setStartToCloseTimeout(Duration.ofSeconds(10))
                                .build())
                        .build(),
                ProcessEventsWorkflowImpl.class,
                TestWorkflowImpl.class);

        testEnv.start();

        processWorkflowStub = workflowClient.newWorkflowStub(ProcessEventsWorkflow.class,
                WorkflowOptions.newBuilder(workflowOptions)
                        .setWorkflowId("ProcessEventsWorkflow")
                        .build());
        testWorkflowStub = workflowClient.newWorkflowStub(TestWorkflow.class,
                WorkflowOptions.newBuilder(workflowOptions)
                        .setWorkflowId("TestWorkflow")
                        .build());
    }

    @Test
    public void testBug() throws TimeoutException {
        // create artificial load to reproduce the bug - seems to help, but still the bug does not always reproduce
        IntStream.range(0, 20).forEach(index -> new Thread(this::busyWork).start());

        WorkflowClient.start(testWorkflowStub::execute);

        WorkflowStub.fromTyped(processWorkflowStub).signalWithStart("addEvent",
                new Object[]{"testEvent"},
                new Object[]{"TestWorkflow", Duration.ofSeconds(1)});
        WorkflowStub.fromTyped(processWorkflowStub).getResult(10, TimeUnit.SECONDS, Object.class);

        testWorkflowStub.stop(); // <----- fails here
        WorkflowStub.fromTyped(testWorkflowStub).getResult(10, TimeUnit.SECONDS, Object.class);

        assertEquals(Arrays.asList("testEvent"), testWorkflowStub.getEvents());
    }

    private void busyWork() {
        int count = 100000000;
        int sleepIndex = (int) (Math.random() * count);
        while(count-- > 0) {
            if (sleepIndex == count) { // yield at random intervals
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }

            Math.sqrt(count);
        }
    }


    @WorkflowInterface
    public interface ProcessEventsWorkflow {
        @WorkflowMethod
        void execute(String targetWorkflowId, Duration keepAliveTimeout);
        @SignalMethod
        void addEvent(String event);
    }

    public static class ProcessEventsWorkflowImpl implements ProcessEventsWorkflow {
        private final Queue<String> events = new LinkedList<>();

        @Override
        public void execute(String targetWorkflowId, Duration keepAliveTimeout) {
            while (true) {
                while (!events.isEmpty()) {
                    String event = events.poll();
                    Workflow.newExternalWorkflowStub(TestWorkflow.class, targetWorkflowId).onEvent(event);
                }

                Workflow.await(keepAliveTimeout, () -> !events.isEmpty());
                if (events.isEmpty()) {
                    return;
                }
            }
        }

        @Override
        public void addEvent(String event) {
            events.add(event);
        }
    }

    @WorkflowInterface
    public interface TestWorkflow {
        @WorkflowMethod
        void execute();

        @SignalMethod
        void stop();

        @SignalMethod
        void onEvent(String event);

        @QueryMethod
        List<String> getEvents();
    }

    public static class TestWorkflowImpl implements TestWorkflow {
        private boolean stop = false;
        private final List<String> events = new ArrayList<>();

        @Override
        public void execute() {
            Workflow.await(() -> stop);
        }

        @Override
        public void stop() {
            stop = true;
        }

        @Override
        public void onEvent(String event) {
            events.add(event);
        }

        @Override
        public List<String> getEvents() {
            return events;
        }
    }
}

```

## Specifications

  - Version: Temporal Java SDK 1.11.0, 1.12.0, 1.13.0 (reproduces on all of these), Temporal Server 1.16.2
  - Platform: Java


#### Comments (3)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-06-29 04:25:42.000 UTC</summary>

Confirm the issue. It's related to the peculiarities of time skipping, how it's implemented, and an absence of total order between some operations in Temporal.
When you create a load, the client code doesn't stop time skipping soon enough and the time gets advanced A LOT to the workflow task timeout which completed the workflow and doesn't allow the signal to pass through. And there is no way for the server to make sure that the code that is supposed to be executed by the client after a long poll is returned is actually finished executing.

The fix here is not trivial. It's also related only to the test framework and not the core functionality.
I will think about the best fix here, but I have to temporarily deprioritize it behind some other tasks affecting an actual production functionality.

</details>

<details>
<summary><strong>ddavidyuk</strong> commented on 2022-06-29 06:02:58.000 UTC</summary>

Thank you! Could you confirm if the suggested workaround should work? If I change Workflow.await(condition) to Workflow.await(timeout, condition), the issue seems to stop reproducing at least locally. Is this a reliable workaround?

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-06-29 14:16:18.000 UTC</summary>

No, it's not. The same "bug" or... limitation will trigger your `Workflow.await(timeout, condition)` earlier than you expect it, like its triggering workflow timeout now. I think the only gentle workaround here is not to set Workflow Timeout of any kind or don't use time skipping for such a test.

</details>


---

<a id="1246"></a>

### #1246: Query is not picked up by the worker executing local activity for more than a minute

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1246 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-06-02 22:49:30.000 UTC (3y 7m ago) |
| **Updated** | 2022-08-10 22:14:17.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Currently client query calls that "hang" (don't return a result) do that for 60 seconds (max workflow task timeout?) at which point client gets delivered WorkflowServiceException that includes StatusRuntimeException (context deadline exceeded). 
The client call should instead fail with WorkflowServiceException according to rpcTimeout (default 10s). 

Not a proper sdk sample, but https://gist.github.com/tsurdilo/57282199bc8534c3838252f1c4bf58fc
shows this (query hangs for 60 seconds while local activity is retrying).



#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-08-10 22:14:17.000 UTC</summary>

Most likely directly related to #1346 and the structure of the current workflow task execution flow

</details>


---

<a id="1093"></a>

### #1093: Add ResetWorkflowExecution support in Test Server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1093 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-03-22 22:19:05.000 UTC (3y 9m ago) |
| **Updated** | 2024-12-17 21:26:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently when you try to use ResetWorkflowExecution with the client from TestWorkflowEnvironment with in-memory Test Server you get:

```
       io.grpc.StatusRuntimeException: UNIMPLEMENTED: Method temporal.api.workflowservice.v1.WorkflowService/ResetWorkflowExecution is unimplemented
```

Would be nice to add support for it in the future. Thanks.

#### Comments (3)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-03-22 22:22:52.000 UTC</summary>

You can use dockerized temporal for tests that have to cover reset of the workflow. 
We may consider implementing some simplified version of a reset in the test server in the future.

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2022-03-22 22:37:56.000 UTC</summary>

Yeah, forgot to mention this is when setUseExternalService is not set to true

</details>

<details>
<summary><strong>parth-kulkarni-db</strong> commented on 2023-04-13 05:58:09.000 UTC</summary>

Is there any update if this is added in Test Server in Apr 23?

</details>


---

<a id="1010"></a>

### #1010: Workflow should have an access to an activity id of the activity it scheduled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1010 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-30 07:40:42.000 UTC (3y 11m ago) |
| **Updated** | 2024-12-17 21:26:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
There is a scenario when a workflow needs to cancel an activity if it gets an external signal.

For example, an activity sends its own id to some external code and this code has a need to cancel the activity if something happens or finishes before the activity is done. 
Right now the only way for an external code to cancel an activity in progress is to send a signal to the workflow that scheduled the activity and the workflow cancels the activity using a cancelation scope after that.

To do that, the activity can't use an `activityId`, the user needs to create some new correlation id and pass it from the workflow into the activity because an activity code has no way to know an `activityId` of the activity it just scheduled. 

**Describe the solution you'd like**
1. We create some kind of `ActivityInvocationStub` for each invocation of an activity. This stub may bind an activityType and any kind of additional parameters we need to set per each invocation. This stub can also expose the `activityId`.  User may not be required to work with such stubs all the time if they don't need them, but they should be available if the user needs them (the same way as untyped `WorkflowStub`s are implemented)
1. Workflow should be able to generate and pass an `activityId` into such kind of stub. We should be careful with that, because `activityId`s in JavaSDK are used to ensure determinism and identify a state machine, so duplicates should be prohibited.

Such a stub should also potentially be able to override `ActivityOptions` for the specific activity call.

**Describe alternatives you've considered**
Change nothing and make users pass their own additional ids (and maintain a mapping between these ids to the cancelation scopes or the activities) if they need the workflow to be able to address and cancel an activity later. But there are other reasons to have such stubs: #1009

**Additional context**
What about timers for example? Should the same apply to timers and their ids?


#### Comments (3)

<details>
<summary><strong>longquanzheng</strong> commented on 2022-02-02 19:19:05.000 UTC</summary>

This is also really important for using async activity completion. On server side, activity can be completed with tasktoken or activityID. But JavaSDK only expose tasktoken.

The task token approach is problematic in some cases —
By nature user needs to set a long timeout(startToClose) because they don’t know when the external system will complete the activity.
The tasktoken can only be retrieved within the activity(for determinism) and send to the external system, before calling ctx.doNotCompleteOnReturn();
However, there could be errors(e.g. timeout) and retry when sending the tasktoken, and then the activity worker can get restarted.
As a result, the activity will be stuck until the timeout…

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-02-02 21:49:12.000 UTC</summary>

External code that uses async activity completion should always be triggered by the activity itself. When this happens, an activity should pass activityId/taskToken to that code.
There should be no code that uses some predefined activityId, but is not triggered by this activity itself. Activity (and its ID) is an internal entity of a workflow and not it's public API.
Workflow and its ID is a business-level entity, Activity and ActivityId is a workflow implementation detail. This implementation detail may be known by, in turn, it's own implementation detail (code that is triggered by it), but it shouldn't be known by some external code not directly triggered by the activity itself. 
For that purpose, there are signals. Signals have predefined names and are exposed on the business level entity - workflow.

An activity execution already has its own id now and can pass it to the code performing the completion. Thus, this task is not a prerequisite for an activity completion in a way how it's intended to be used.


</details>

<details>
<summary><strong>longquanzheng</strong> commented on 2022-02-03 00:56:25.000 UTC</summary>

> An activity execution already has its own id now and can pass it to the code performing the completion.

Passing the ID within the activity is not reliable. We should redesign this part for async activity completion. 

What if activity worker restarted when the RPC of sending ID/token timeout and retry?
This will cause the activity stuck forever, unless we require the activity to implement heartbeat.Implementing heartbeat will be tedious and extremely inefficient -- will cost lots of API requests to server. 

</details>


---

<a id="630"></a>

### #630: Flaky testShouldReturnQueryResultAfterWorkflowTimeout

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/630 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-08-15 03:11:07.000 UTC (4y 4m ago) |
| **Updated** | 2024-12-17 21:20:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Actual Behavior

java-sdk builds in buildkite started to fail often on flaky `TerminatedWorkflowQueryTest#testShouldReturnQueryResultAfterWorkflowTimeout`

## Stacktrace from a locally reproduced failure:

```
io.temporal.client.WorkflowQueryException: workflowId='fa83465b-18c6-424c-a959-0259996b2876', runId='72baee4f-8b00-4914-aace-db0d505606ed', workflowType='testActivity'}
	at io.temporal.internal.sync.WorkflowStubImpl.query(WorkflowStubImpl.java:349)
	at io.temporal.testing.TestWorkflowEnvironmentInternal$TimeLockingInterceptor$TimeLockingWorkflowStub.query(TestWorkflowEnvironmentInternal.java:369)
	at io.temporal.internal.sync.WorkflowInvocationHandler$SyncWorkflowInvocationHandler.queryWorkflow(WorkflowInvocationHandler.java:309)
	at io.temporal.internal.sync.WorkflowInvocationHandler$SyncWorkflowInvocationHandler.invoke(WorkflowInvocationHandler.java:272)
	at io.temporal.internal.sync.WorkflowInvocationHandler.invoke(WorkflowInvocationHandler.java:178)
	at com.sun.proxy.$Proxy20.getTrace(Unknown Source)
	at io.temporal.workflow.TerminatedWorkflowQueryTest.testShouldReturnQueryResultAfterWorkflowTimeout(TerminatedWorkflowQueryTest.java:64)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:59)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:56)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at io.temporal.testing.TestWorkflowRule$2.evaluate(TestWorkflowRule.java:273)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:299)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:293)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
	at java.base/java.lang.Thread.run(Thread.java:834)
Caused by: io.grpc.StatusRuntimeException: INVALID_ARGUMENT: java.lang.IllegalArgumentException: Unknown query type: getTrace, knownTypes=[]
	at io.temporal.internal.sync.QueryDispatcher.handleQuery(QueryDispatcher.java:79)
	at io.temporal.internal.sync.SyncWorkflowContext.handleQuery(SyncWorkflowContext.java:244)
	at io.temporal.internal.sync.WorkflowExecuteRunnable.handleQuery(WorkflowExecuteRunnable.java:76)
	at io.temporal.internal.sync.SyncWorkflow.query(SyncWorkflow.java:179)
	at io.temporal.internal.replay.ReplayWorkflowExecutor.query(ReplayWorkflowExecutor.java:137)
	at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.handleQueryWorkflowTask(ReplayWorkflowRunTaskHandler.java:255)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleQueryOnlyWorkflowTask(ReplayWorkflowTaskHandler.java:257)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTask(ReplayWorkflowTaskHandler.java:112)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:319)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:279)
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:73)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
	at java.base/java.lang.Thread.run(Thread.java:834)

	at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:262)
	at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:243)
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:156)
	at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.queryWorkflow(WorkflowServiceGrpc.java:2970)
	at io.temporal.internal.external.GenericWorkflowClientExternalImpl.lambda$query$5(GenericWorkflowClientExternalImpl.java:216)
	at io.temporal.serviceclient.GrpcRetryer.retryWithResult(GrpcRetryer.java:95)
	at io.temporal.internal.external.GenericWorkflowClientExternalImpl.query(GenericWorkflowClientExternalImpl.java:209)
	at io.temporal.internal.client.RootWorkflowClientInvoker.query(RootWorkflowClientInvoker.java:142)
	at io.temporal.internal.sync.WorkflowStubImpl.query(WorkflowStubImpl.java:342)
	... 19 more
```

#### Comments (3)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-09-08 18:47:23.000 UTC</summary>

Related to #391 and shows that the #391 issue wasn't addressed by #531

</details>

<details>
<summary><strong>vitarb</strong> commented on 2021-09-16 04:46:29.000 UTC</summary>

After some investigation, I've found that the issue is happening because when workflow task times out and we replay the history
```
EVENT_TYPE_WORKFLOW_EXECUTION_STARTED
EVENT_TYPE_WORKFLOW_TASK_SCHEDULED
EVENT_TYPE_WORKFLOW_TASK_STARTED
EVENT_TYPE_WORKFLOW_TASK_FAILED
EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT
```

It creates a brand new QueryDispatcher object that doesn't have query handlers by default, and because we never run event loop [during replay](https://github.com/temporalio/sdk-java/blob/30420212a26283cf7cbe6339512058a3186074e8/temporal-sdk/src/main/java/io/temporal/internal/statemachines/WorkflowTaskStateMachine.java#L112) workflow doesn't get a chance to initialize query handlers again.
Hence when we run a query after workflow timed out we see no query handlers available.
Proposed fix is to trigger event loop somewhere during replay. Alternatively we could move out query handler initialization and call it earlier so that it gets triggered during the replay.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-04-23 04:40:48.000 UTC</summary>

The result depends on if workflow run times out before workflow task heartbeat (local activity is used in that test) is received by the server or after.

</details>


---

<a id="228"></a>

### #228: Expose activity start and completion information to the workflow code.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/228 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-10-08 22:53:30.000 UTC (5y 3m ago) |
| **Updated** | 2023-04-18 17:54:44.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
The workflow history contains information about the time and identity of the activity worker that started and completed an activity. But this information is not available to the workflow code.

**Describe the solution you'd like**
Some API to get full information about an activity execution.

**Additional context**
Here is a slack message that outlines one possible usage of this feature:

> Hi, I am running workflows with activities and would like to track in real time when some activity types started and completed exactly and be able from other activities in my workflow to log these start and complete time (because I don't want to introduce the logging capability to all my microservices that are also written in different languages).
> Right now I can tell from the workflow about the time my activity was scheduled (which is not the time it was started) and also the time it scheduled back to workflow after activity completion (which is not the actual time activity was completed).

#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-18 17:54:44.000 UTC</summary>

Related to: https://github.com/temporalio/sdk-java/issues/1009

</details>


---

<a id="2741"></a>

### #2741: Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2741 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:21.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:21.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Describe the solution you'd like**

Allow executing activities without a workflow. The clients must support the new (upcoming) server APIs for starting, managing and getting results of activities. The workers must support running activities outside of workflow context.

**Additional context**

Server API PR (WIP): https://github.com/temporalio/api/pull/640


---

<a id="2579"></a>

### #2579: Non-root namespace Spring dependencies fail on app startup

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2579 |
| **State** | OPEN |
| **Author** | robzienert (Rob Zienert) |
| **Created** | 2025-06-30 22:46:26.000 UTC (6 months ago) |
| **Updated** | 2025-06-30 22:47:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

Defining non-root namespaces in the Spring Starter should allow beans to be injected. 

## Actual Behavior

The documentation calls out that this is supported, yet the `BeanPostProcessor` that creates these beans run after bean initialization, so application startup will fail.

In order to work around this, one must use an `ObjectProvider` to decouple component autowiring from Temporal bean creation, deferring bean finalization to either `PostConstruct` or app runtime.

## Steps to Reproduce the Problem

  1. Create a non-root namespace configuration 
  1. Create a `@Component` that injects a non-root `WorkflowClient` (using `@Resource`, per docs)
  1. Start the application: The app should fail to start due to the non-root namespace WorkflowClient being unavailable.

## Specifications

  - Version: 1.29.0, 1.30.1
  - Platform: N/A



---

<a id="2308"></a>

### #2308: Add WorkflowIdConflictPolicy in child workflow options 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2308 |
| **State** | OPEN |
| **Author** | AndresBena19 (Andres Benavides) |
| **Created** | 2024-11-05 03:00:29.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-05 16:00:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
No

**Describe the solution you'd like**
`.setWorkflowIdConflictPolicy` were already added to `WorkflowOptions` but is not available for `ChildWorkflowOptions`

Reference:
* https://github.com/temporalio/sdk-java/pull/2055



#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-05 03:06:28.000 UTC</summary>

`WorkflowIdConflictPolicy` is not supported on Child workflows by the Temporal Server. The option would need to be supported by the Temporal Server before it could be exposed on the SDK.

https://github.com/temporalio/api/blob/5862ec7755d8c30577d76c335622b0147590e3fe/temporal/api/command/v1/message.proto#L203

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-05 16:00:31.000 UTC</summary>

I created a feature issue to track this work https://github.com/temporalio/features/issues/558.


</details>


---

<a id="2122"></a>

### #2122: Java SDK does not have option to register workflow name statically

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2122 |
| **State** | OPEN |
| **Author** | ftkurt (Fatih Kurt) |
| **Created** | 2024-06-24 11:19:00.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-27 11:44:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I'm always frustrated when trying to register a Java workflow with a static name. The current option using annotations does not work for our use case. We define proto enums and share them across different apps so they can trigger workflows across apps. For instance, we have:
```java
public interface MyWorkflow {
    @WorkflowMethod(name = "MyStaticWorkflowName")
    void execute();
}
```
We need a way to set a default workflow implementation type name during registration.

**Describe the solution you'd like**
A method to register a workflow with a static name during registration using something like:
```java
WorkflowImplementationOptions options = WorkflowImplementationOptions.newBuilder()
        .setDefaultWorkflowImplementationTypeName(Workflows.WORKFLOWS_SEND_SUBMISSION.name())
        .build();

worker.registerWorkflowImplementationTypes(options, SendSubmissionWorkflowImpl.class);
```
This would allow us to define workflows that can be triggered across different apps with a shared static name.

**Describe alternatives you've considered**
Currently, the alternative is to use the short name of the workflow interface by default. However, this does not meet our needs as we cannot share interfaces across apps written in different languages (Golang, Python). Using annotations alone is insufficient for our scenario.

**Additional context**
Our apps in Golang and Python cannot share Java interfaces, hence the need for a static name registration method. We currently share these names through protobuf-defined enums which can be built for all apps and envs. 


#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-06-25 18:28:44.000 UTC</summary>

Would you also need the same functionality for activity names?

</details>

<details>
<summary><strong>ftkurt</strong> commented on 2024-06-27 11:44:14.000 UTC</summary>

@Quinn-With-Two-Ns yes, that will be useful as well. We are running some activities cross platform as well. 

</details>


---

<a id="2119"></a>

### #2119: Missing metric reporting in local activity execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2119 |
| **State** | OPEN |
| **Author** | longquanzheng (Quanzheng Long) |
| **Created** | 2024-06-20 20:43:07.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-26 23:16:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
* `temporal_activity_succeed_endtoend_latency`
* `temporal_local_activity_execution_failed`
are emitted correctly

## Actual Behavior
They are missing in our production
<img width="806" alt="Screenshot 2024-06-20 at 1 44 16 PM" src="https://github.com/temporalio/sdk-java/assets/4523955/d165081c-68d0-4168-a013-323886e9472e">

You can see in the graph that the LA execution metrics are reported but not end to end. In fact, this is happening most of the time. 
We also pretty sure there are many cases of LA execution failure but not reported based on our workflow history. 

## Steps to Reproduce the Problem
NA

## Specifications

  - Version: `1.22.3`
  - Platform:


#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-06-24 20:48:10.000 UTC</summary>

>We also pretty sure there are many cases of LA execution failure but not reported based on our workflow history.

Can you provide a reproduction on this scenario? Do you see the same behaviour for normal activities? We have tests for these metrics and their implementation is identical to normal activity metrics.

</details>

<details>
<summary><strong>longquanzheng</strong> commented on 2024-06-26 23:16:18.000 UTC</summary>

> Do you see the same behaviour for normal activities?

No regular activity is fine. It is happening in production right now but I don't know how I can produce a sample for you. 

</details>


---

<a id="2064"></a>

### #2064: Native image descriptor for GraalVM in the temporal-spring-boot-starter-alpha

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2064 |
| **State** | OPEN |
| **Author** | Hnoianko |
| **Created** | 2024-05-14 20:27:58.000 UTC (1y 7m ago) |
| **Updated** | 2024-12-14 12:23:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
It would be nice to have native image descriptors as part of the temporal-spring-boot-starter-alphao

Similar to what already exists in the test-server
https://github.com/temporalio/sdk-java/tree/15df866f9c91219f6cf61533aee8fc2139ad7c93/temporal-test-server/src/main/resources/META-INF/native-image/io.temporal/temporal-test-server

Currently I am experiencing different build issues when trying to build a spring boot app native image.

Error example:
`Error: Classes that should be initialized at run time got initialized during image building:
[INFO]     [creator]      ch.qos.logback.core.util.StatusPrinter was unintentionally initialized at build time. To see why ch.qos.logback.core.util.StatusPrinter got initialized use --trace-class-initialization=ch.qos.logback.core.util.StatusPrinter
[INFO]     [creator]     io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder the class was requested to be initialized at run time (from 'META-INF/native-image/native-image.properties' in 'file:///workspace/' with 'io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder' and from 'META-INF/native-image/io/temporal/temporal-serviceclient/native-image.properties' in 'file:///workspace/BOOT-INF/lib/temporal-serviceclient-1.23.2.jar' with 'io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder'). To see why io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder got initialized use --trace-class-initialization=io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder
[INFO]     [creator]     ch.qos.logback.core.util.Loader was unintentionally initialized at build time. To see why ch.qos.logback.core.util.Loader got initialized use --trace-class-initialization=ch.qos.logback.core.util.Loader
[INFO]     [creator]     ch.qos.logback.classic.Level was unintentionally initialized at build time. To see why ch.qos.logback.classic.Level got initialized use --trace-class-initialization=ch.qos.logback.classic.Level
[INFO]     [creator]     io.grpc.netty.shaded.io.netty.buffer.UnpooledByteBufAllocator the class was requested to be initialized at run time (subtype of io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator). To see why io.grpc.netty.shaded.io.netty.buffer.UnpooledByteBufAllocator got initialized use --trace-class-initialization=io.grpc.netty.shaded.io.netty.buffer.UnpooledByteBufAllocator
[INFO]     [creator]     io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator the class was requested to be initialized at run time (from 'META-INF/native-image/native-image.properties' in 'file:///workspace/' with 'io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator'). To see why io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator got initialized use --trace-class-initialization=io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator
[INFO]     [creator]     ch.qos.logback.classic.Logger was unintentionally initialized at build time. To see why ch.qos.logback.classic.Logger got initialized use --trace-class-initialization=ch.qos.logback.classic.Logger
[INFO]     [creator]     To see how the classes got initialized, use --trace-class-initialization=ch.qos.logback.core.util.StatusPrinter,io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder,ch.qos.logback.core.util.Loader,ch.qos.logback.classic.Level,io.grpc.netty.shaded.io.netty.buffer.UnpooledByteBufAllocator,io.grpc.netty.shaded.io.netty.buffer.AbstractByteBufAllocator,ch.qos.logback.classic.Logger
[INFO]     [creator`


#### Comments (2)

<details>
<summary><strong>Hnoianko</strong> commented on 2024-05-17 21:23:02.000 UTC</summary>

seems like the issue is coming from the erroneous native configs in the grpc-netty-shaded

https://github.com/grpc/grpc-java/issues/10601#issuecomment-1909221668 

</details>

<details>
<summary><strong>paramadeep</strong> commented on 2024-12-14 12:21:48.000 UTC</summary>

We are also facing  the same issue. Can someone help on how to resolve this. Or point to relevant material to understand this better to fix it. 
```
temporal-serviceclient/src/main/resources/META-INF/native-image/io/temporal/temporal-serviceclient/native-image.properties
```
file marks, 
```
--initialize-at-run-time=io.grpc.netty.shaded.io.netty.util.internal.logging.Slf4JLoggerFactory$NopInstanceHolder
```
On compilation we are getting the following error
```
ScriptCompilationException(scriptCompilationErrors=
[ScriptCompilationError(message=Unresolved reference: NopInstanceHolder, 
```

Could this be because it is a private class?


</details>


---

<a id="2063"></a>

### #2063: Extend TestWorkflowExtension to support specifying a custom task queue name

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2063 |
| **State** | OPEN |
| **Author** | Hnoianko |
| **Created** | 2024-05-14 12:23:52.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-15 03:15:01.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
As discussed in the following conversation https://community.temporal.io/t/integration-testing-for-java-sdk/7047/4?u=bohdan
it would be nice to have possibility to specify custom name for a worker queue when using TestWorkflowExtension.

**Describe the solution you'd like**
TestWorkflowExtension builder to have a setter for the worker taskQueueName. e.g. .setWorkerTaskQueue(TASK_QUEUE)

**Describe alternatives you've considered**

**Additional context**
[Add any other context or screenshots about the feature request here.](https://community.temporal.io/t/integration-testing-for-java-sdk/7047/4?u=bohdan)



---

<a id="2034"></a>

### #2034: Provide way to populate activity execution context for activity unit tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2034 |
| **State** | OPEN |
| **Author** | madhav2302 (Madhav Sodhani) |
| **Created** | 2024-04-11 19:32:21.000 UTC (1y 9m ago) |
| **Updated** | 2024-09-23 12:49:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I am writing unit tests for activity with `TestActivityEnvironment`, and using `var workflowType = Activity.getExecutionContext().getInfo().getWorkflowType();` in my activity. 

There is no way to populate this execution context for as of now other then creating a temporary workflow using `TestWorkflowEnvironment` and creating a sample workflow. 

Ideally, I should be able to setup execution context for tests without any interactions with workflows.

**Describe the solution you'd like**
Something like below would be nice.
```
TestActivityEnvironment.newInstance(TestEnvironmentOptions.newBuilder().setActivityExecutionContext(...).build())
```

**Describe alternatives you've considered**
Setting up test environment workflow, which is very tedious for unit tests.

**Additional context**
See https://temporalio.slack.com/archives/CTT84KXK9/p1712848268603179


#### Comments (2)

<details>
<summary><strong>madhav2302</strong> commented on 2024-09-20 20:18:00.000 UTC</summary>

@mfateev @cretz are there any plans to work on this? it will help with making tests easier. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-23 12:48:22.000 UTC</summary>

Hrmm, yes, it is common in other SDKs to be able to populate activity info for tests. So I believe that this will be done, but no concrete timeline currently. We will look to prioritize.

</details>


---

<a id="1937"></a>

### #1937: Support a promise-based await

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1937 |
| **State** | OPEN |
| **Author** | ghaskins (Gregory Haskins) |
| **Created** | 2023-11-19 17:43:10.000 UTC (2y 1m ago) |
| **Updated** | 2024-11-22 05:42:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

An SDK function that works similarly to [await](https://javadoc.io/doc/io.temporal/temporal-sdk/1.0.0/io/temporal/workflow/Workflow.html#await-java.time.Duration-java.util.function.Supplier-) but is based on promises rather than blocking could be useful to expand developer options for coordinating mixed event classes.  For instance, coordinating an .all() on an invoked activity and receiving a signal.

This interface could be designed in several different ways.  As an example:

```
Promise until(java.time.Duration timeout, java.util.function.Supplier<java.lang.Boolean> predicate)
```

This function would take a timeout and predicate, and return a promise.  Temporal will evaluate the predicate on each state transition (similar to .await), and will resolve the promise with "true" if the predicate returns true. and "false" if the timeout expires.



#### Comments (2)

<details>
<summary><strong>ghaskins</strong> commented on 2023-11-19 17:45:28.000 UTC</summary>

Slack reference: https://temporalio.slack.com/archives/CTT84KXK9/p1700311804161219

</details>

<details>
<summary><strong>mfateev</strong> commented on 2023-11-19 17:53:01.000 UTC</summary>

To be consistent with existing APIs, my proposal is as follows:
```
class Async {
...
     static Promise<Boolean> await(Duration timeout, Supplier<Boolean> unblockCondition);
}
```

Reactions: 👍 1

</details>


---

<a id="1715"></a>

### #1715: WorkerOptions should enforce an amount of executors to be not less than an amount of pollers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1715 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-03-24 00:03:01.000 UTC (2y 9m ago) |
| **Updated** | 2023-05-23 18:20:24.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | 1.20.0 |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

WorkerOptions should enforce an amount of executors to be not less than an amount of pollers.

## Actual Behavior

Currently, users can create WorkerOptions with maxConcurrentWorkflowTaskExecutionSize = 1 which is effectively an invalid configuration with the worker not being able to open at least one sticky and 1 normal queue poll. Every worker needs at least 2 executors: one to be reserved and allow polling on the main task queue and another to be reserved and allow polling on a sticky task queue.


---

<a id="1681"></a>

### #1681: Exceptions thrown from workflow executor code shouldn't be subject to failWorkflowExceptionTypes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1681 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-02-28 20:50:53.000 UTC (2y 10m ago) |
| **Updated** | 2024-12-17 21:19:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently, if our workflow executor / control code throws an exception, it's a subject for `WorkflowImplementationOptions#failWorkflowExceptionTypes` logic and users can set up their system in a way that such exceptions may fail the workflow execution.

An example:
Workflow Executor throws `java.lang.IllegalStateException: History is out of order` if it received a sticky task and its cached instance is outdated. Our expectation is that this exception will fail WFT and cause a full replay and an execution on another (or the same) worker.

In reality, users may set `failWorkflowExceptionTypes` into a broad category like `Exception` and such an internal exception will start to fail workflow executions. Doing this, users expect `failWorkflowExceptionTypes` to be applied only to the workflow exceptions, but it's also applied to the workflow executor exception.

Proposed solution:

Don't apply `WorkflowImplementationOptions#failWorkflowExceptionTypes` to the exceptions from the control code.
Exceptions thrown by the control code should always fail Workflow Task, not a Workflow Execution.
There needs to be one (?at least one?) exception from this new rule - `io.temporal.worker.NonDeterministicException`. We have users that explicitly want to fail executions if a non-deterministic error happens.

#### Comments (2)

<details>
<summary><strong>mfateev</strong> commented on 2023-02-28 21:31:48.000 UTC</summary>

I think we should keep the current logic of applying `failWorkflowExceptionTypes` to any unexpected error from the control code. But for situations that we know are intermittent we should try to retry. 

Another option is to apply `failWorkflowExceptionTypes` on a second or (Nth) task attempt. This way, intermittent failures would not lead to workflow failures.  

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-20 18:43:56.000 UTC</summary>

We should be throwing an explicit FailWorkflowTaskException of something like this from the SDK internals if we expect that this exception should always be failing the WFT only and never follow the user-specified criteria.

</details>


---

<a id="1531"></a>

### #1531: Declaring ActivityStub using annotation instead of newActivityStub

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1531 |
| **State** | OPEN |
| **Author** | s-aliasgar |
| **Created** | 2022-11-23 06:47:55.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-16 10:19:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

temporal-sdk: 1.17.0
temporal-spring-boot-starter-alpha: 1.17.0

When using Temporal-Springboot-alpha since the workers are created by Temporal-Springboot-alpha 
Can we declare ActivityStub using an annotation?
Something like

@ActivityStub(
      taskQueue = SOME_QUEUE,
      retryOptions =
          @RetryActivityOptions(
              maximumAttempts = 1,
              doNotRetry = {"SomeException"}))
  private ISomeActivity someActivity;


Instead of defining it as "Workflow.newActivityStub(ISomeActivity.class, activityOptions)"



#### Comments (2)

<details>
<summary><strong>s-aliasgar</strong> commented on 2022-11-24 04:41:10.000 UTC</summary>

https://community.temporal.io/t/declaring-activitystub-using-annotation-instead-of-newactivitystub/6553

</details>

<details>
<summary><strong>yurenji</strong> commented on 2024-07-16 10:19:15.000 UTC</summary>

+1 

</details>


---

<a id="1358"></a>

### #1358: Add CI testing for the native test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1358 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-10 14:31:23.000 UTC (3y 5m ago) |
| **Updated** | 2024-12-17 21:20:28.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
We don't have CI testing for the native test server. As a result of that, we can release a version of SDK with a broken native test server build that affects users as it happened here: https://github.com/temporalio/sdk-java/issues/1357

**Describe the solution you'd like**
Test Server should have some integration tests for the native test server image.


---

<a id="1346"></a>

### #1346: Await on Local Activities shouldn't occupy workflow executor thread

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1346 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-04 20:45:06.000 UTC (3y 5m ago) |
| **Updated** | 2023-05-23 17:49:58.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
Right now when workflow performs local activities, the workflow executor thread is retained and idling.
This is a simple solution, but it puts users in a tricky situation when they need to take into account the specific profile of their local activities when they set a number of workflow executor threads.
It also leads to a potentially uneven load and wasted resources. 

**Describe the solution you'd like**
Workflow executor thread shouldn't actively wait for local activities completion and release the thread.

**Describe alternatives you've considered**

**Additional context**
The solution requires significant restructuring of workflow executor worker code.
Implementation should implement backpressure correctly. If Worker has a lot of workflow executor threads, but no free local activity worker threads, workflow can't make a progress and will be snowballing errors in the system.



---

<a id="1303"></a>

### #1303: Cancelation of Local Activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1303 |
| **State** | OPEN |
| **Author** | GeekNickson (Sadboi) |
| **Created** | 2022-07-11 07:56:55.000 UTC (3y 6m ago) |
| **Updated** | 2022-07-11 14:52:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

I have a bunch of local activities with retry options configured that are being ran inside a cancellation scope like so:
```
val scope = Workflow.newCancellationScope { _ -> 
  activity1.execute()
  ....
  activityN.execute()
}
Workflow.newTimer(Duration.ofSeconds(10))
  .thenApply { scope.cancel() }

scope.run()
```
I expected that when **scope.cancel()** method is called that would close the scope with the running activities just as it works with normal activities.
## Actual Behavior

Activities proceed to retry, the code after scope.run() doesn't execute

## Specifications

  - Version: 1.13.0
  - Platform: Java


#### Comments (2)

<details>
<summary><strong>GeekNickson</strong> commented on 2022-07-11 09:12:48.000 UTC</summary>

The problem persists in version 1.14.0 as well

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-07-11 14:50:58.000 UTC</summary>

Heartbeats and cancelations are not supported for Local Activities in JavaSDK. It's a missing feature of Local Activities. It may be coming in the future at some point.

Reactions: 👍 1

</details>


---

<a id="1211"></a>

### #1211: MDC context logging properties not propagating inside promise.handle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1211 |
| **State** | OPEN |
| **Author** | ju-stin |
| **Created** | 2022-05-12 21:58:22.000 UTC (3y 8m ago) |
| **Updated** | 2022-08-10 22:26:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

The MDC markers placed before a promise handler do not appear in the log within the handler. 
Related [temporal community post](https://community.temporal.io/t/mdc-context-logging-properties-not-propagating-inside-promise-handle/4668/2?u=justin)




---

<a id="896"></a>

### #896: Workflow should be able to ignore CancellationFailure and finish successfully

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/896 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-23 19:30:23.000 UTC (4y 1m ago) |
| **Updated** | 2024-12-17 21:19:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | wontfix, next-gen |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Workflow code should be able to catch `CancellationFailure`, handle or ignore it and be able to finish executing successfully.
Test https://github.com/Spikhalskiy/java-sdk/commit/eada50399b6d24c77d4b6e37cd500907594a189a#diff-a2baafb2fd6213bafb49077bd60c8efeedc6c15df86437e9c8e2ef87ce23625cR58
expected to pass

## Actual Behavior

Test fails. Workflow doesn't get a chance to fully swallow and ignore `CancellationFailure` and is forced to finish with `EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED`

#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2021-11-23 20:35:14.000 UTC</summary>

We did the exact thing in TypeScript a while ago.
We only complete with cancelled if cancellation of the Workflow was requested and the workflow propagates an exception that is considered cancellation.
https://github.com/temporalio/sdk-typescript/blob/733b01ee9913c255cea8913222c1232bf1bda3a4/packages/workflow/src/errors.ts#L38

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-03-22 22:42:42.000 UTC</summary>

After discussion with @mfateev we decided that it's too much of the breaking change to the current concept of scopes. It's not a bug, it's designed this way right now. Once the scope is requested to be canceled, it's considered canceled new commands have to be scheduled in the detached scope. We may reconsider this decision and design in the future, but when we design JavaSDK 2.x which will not strive to maintain compatibility and will revisit all the existing concepts and APIs. 

</details>


---

<a id="883"></a>

### #883: Workers don't reset sticky queue when workflow execution is evicted from the cache

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/883 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-17 19:47:58.000 UTC (4y 1m ago) |
| **Updated** | 2024-12-17 21:18:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Right now we reset the sticky queue if an exception happens during workflow execution. 
While this is not an event that is needed, there is nothing bad in reexecuting on the same worker.
At the same time, we are missing resetting the sticky queue when a workflow gets evicted from the cache because SDK is at the workflow threads limit. This creates pressure on already overloaded workers and can lead to incremented delays.

#### Comments (2)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-11-30 00:54:27.000 UTC</summary>

It was implemented like this by design in #236. The original intentions need to be revisited though because not resetting the sticky queue on evictions from already overwhelmed workers doesn't make much sense.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-05-11 23:41:10.000 UTC</summary>

This matter improved with this Server change: https://github.com/temporalio/temporal/pull/2811
Now if the sticky queue is obviously abandoned, Server will not wait 5 seconds trying to dispatch the workflow task into a sticky queue.

</details>


---

<a id="696"></a>

### #696: Port fix for following execution chain from Go SDK

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/696 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2021-09-03 18:37:07.000 UTC (4y 4m ago) |
| **Updated** | 2023-05-23 06:58:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | Next |

#### Description

See https://github.com/temporalio/sdk-go/pull/527
See details from :point_up:. Fix should be straightforward.


#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2022-04-26 19:01:40.000 UTC</summary>

We also have a way to opt-out of following runs when waiting for the result in Python, TS, and now Go.
See relevant code here:
https://github.com/temporalio/sdk-typescript/blob/cb6151fcaa29e9cda4a1ae90dda31ae007a6dd10/packages/client/src/workflow-client.ts#L403
https://github.com/temporalio/sdk-typescript/blob/cb6151fcaa29e9cda4a1ae90dda31ae007a6dd10/packages/client/src/workflow-client.ts#L509

The `followRuns` option can be set on `execute` and `result` in TS client and handle objects.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-04-26 19:15:40.000 UTC</summary>

Here's the Go change to support opting out of following runs: https://github.com/temporalio/sdk-go/pull/791

</details>


---

<a id="613"></a>

### #613: Calling workflow method on the workflow stub should always wait for the workflow completion.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/613 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2021-07-31 18:46:12.000 UTC (4y 5m ago) |
| **Updated** | 2021-07-31 18:46:12.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
When a workflow is started synchronously using a typed stub it reconnects to an already running instance if `WorkflowIdReusePolicy` is not `AllowDuplicate`.

When a workflow method is called on a stub that was created using a workflowId (see [newWorkflowStub(Class<T> workflowInterface, String workflowId)](https://github.com/temporalio/sdk-java/blob/1813f6a3f5c80196bc0c7167e1708e0dcaee217b/temporal-sdk/src/main/java/io/temporal/client/WorkflowClient.java#L155)) an exception is returned. 

**Describe the solution you'd like**
When a workflow stub is created by a workflowId and the workflow method is invoked then the call should block waiting for a workflow result if a workflow with the given id is already running. The exception should be returned if no workflow with such id exists.



---

<a id="2"></a>

### #2: Refactor ReplayWorkflowContext out of WorkflowThread

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2019-12-29 20:13:02.000 UTC (6 years ago) |
| **Updated** | 2021-08-15 22:34:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

There should be some sort of a generic interceptor that is invoked upon thread initialization instead of the hardcoded dependencies like:

https://github.com/uber/cadence-java-client/blob/cbe3706e2094e0abe4855b9afad1d58c86d7adfe/src/main/java/com/uber/cadence/internal/sync/WorkflowThreadImpl.java#L80

#### Comments (2)

<details>
<summary><strong>vitarb</strong> commented on 2020-11-25 01:06:28.000 UTC</summary>

The question here is whether or not we can move this to interceptors. If no we need to have a design discussion and make interceptors powerful enough to support use cases like this.

</details>

<details>
<summary><strong>Spikhalskiy</strong> commented on 2021-08-15 22:34:12.000 UTC</summary>

Revisiting this issue after some work on interceptors had been done and class structure changed significantly.

We should refactor out MDC initialization logic from `WorkflowThreadImpl`: https://github.com/Spikhalskiy/java-sdk/blob/15ca5083059e0bb27ff44f03addce2ecdd554404/temporal-sdk/src/main/java/io/temporal/internal/sync/WorkflowThreadImpl.java#L94
into a new Interceptor. Interceptors already allow intercepting creation of WorkflowThreads. If interceptors are lacking anything to support this, we can add the lacking functionality.

</details>


---

<a id="2753"></a>

### #2753: Unexpected Activity Timeout Behavior After Worker Crash & Need for CancellationScope Status Check

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2753 |
| **State** | CLOSED |
| **Author** | 40lsgy1 (40lsgy1) |
| **Created** | 2025-12-31 08:23:53.000 UTC (8 days ago) |
| **Updated** | 2026-01-08 16:44:52.000 UTC |
| **Closed** | 2026-01-08 16:44:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I'm encountering an issue while using Temporal to build a DSL system. In my implementation, each Activity is wrapped in a CancellationScope to enable individual cancellation handling (with retry/skip options after cancellation). The CancellationType is set to WAIT_CANCELLATION_COMPLETED. I have two related problems:

1. Worker Crash During Activity Execution: I recently observed that if a worker crashes during an Activity's business logic execution and fails to recover within the StartToCloseTimeout period, the Activity does not retry its business logic after the worker recovers. According to the documentation, StartToCloseTimeout should only limit the duration of a single Activity attempt. My expectation is that after worker recovery, the Activity should retry (allowing cancellation cleanup logic to execute) rather than terminating due to timeout.

2. Detecting CancellationScope Status After Exit: My Activities nest CancellationScope within Async.procedure Promises. When a CanceledFailure occurs, the WAIT_CANCELLATION_COMPLETED policy ensures the Activity's logic completes successfully before exiting the scope. After exiting the CancellationScope, I need to execute state update logic (via other Activities). Is there a way to determine whether the CancellationScope was canceled immediately after exiting it? This would allow me to conditionally execute state updates using newDetachedCancellationScope.



#### Comments (1)

<details>
<summary><strong>maciejdudko</strong> commented on 2026-01-08 16:44:47.000 UTC</summary>

1. When an activity is requested to cancel, then it will not be retried anymore. This is by design. Activities are non-durable and there are no guarantees that any cleanup logic will execute in case of failure or worker crash. If the workflow needs to ensure cleanup is done, it needs to catch the activity failure and run the cleanup logic as a separate activity. One common way is the saga design pattern, where every activity is paired with a compensation activity that undoes its work and in case of failure, the workflow executes a list of compensations for all activities run up to this point. You can learn more about it from this blog post: https://temporal.io/blog/saga-pattern-made-easy You can also find more resources on sagas in [Temporal documentation](https://docs.temporal.io/evaluate/use-cases-design-patterns#saga).

2. If you still have a reference to the `CancellationScope`, you can call the `isCancelRequested` method to check if it was canceled even after it finishes running. However, this is not a perfect representation of whether the activities inside have completed successfully or not. It's always better to memorize the result of activity execution itself, e.g. by storing the potential exception in a variable and later checking if it's null or not.

If you have more questions or need assistance, always feel free to post on `#java-sdk` channel in [Temporal Community Slack](https://t.mp/slack). I will close this issue as there's nothing to be fixed here.

</details>


---

<a id="2733"></a>

### #2733: activity_schedule_to_start_latency reports activity_type unexpectedly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2733 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2025-11-19 14:42:25.000 UTC (1 months ago) |
| **Updated** | 2025-12-08 19:53:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

How to repro - run the java sdk samples metrics sample: https://github.com/temporalio/samples-java/tree/main/core/src/main/java/io/temporal/samples/metrics

Sample starts only 2 activities, PerformA and PerformB. Metrics report activity_schedule_to_start_latency for 3 activities, PerformA, PerformB and "none" which is the default. 
Per docs this metric should not be reporting activity_type at all, but it is, and its also confusing why its reporting it for "none", I believe this is done on activity failure since in sample activities are being retried couple times. 

Request is to either fix activity_schedule_to_start_latency to always report activity_type (which would be pretty useful if possible) or to not report it at all, and leave task_queue as lowest granularity for this metric.

#### Comments (1)

<details>
<summary><strong>robzienert</strong> commented on 2025-12-08 19:53:06.000 UTC</summary>

The metric has always (as far as I can remember) reported `activity_type`, but now it reports `activity_type` _and_ also includes a `none` value for that tag, which is incorrect: There's no scenario where an activity schedule to start would not have an associated activity type (from a user perspective, not sure about the internals).

</details>


---

<a id="2728"></a>

### #2728: ScheduleRange to check end

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2728 |
| **State** | OPEN |
| **Author** | eye-dee (Igor) |
| **Created** | 2025-11-18 09:24:40.000 UTC (1 months ago) |
| **Updated** | 2025-11-25 02:55:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

```
  public ScheduleRange(int start, int end, int step) {
    Preconditions.checkState(start >= 0 && step >= 0 && step >= 0);
``` 

Why do we need to check step twice?

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-11-25 02:55:41.000 UTC</summary>

Yes that is a typo, feel free to open a PR to fix if you are inclined 

</details>


---

<a id="2674"></a>

### #2674: TestEnvironment with external service - failing tests throws IllegalStateException errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2674 |
| **State** | OPEN |
| **Author** | gauravthadani (Gaurav Thadani) |
| **Created** | 2025-09-29 00:19:01.000 UTC (3 months ago) |
| **Updated** | 2025-10-01 15:19:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description


TestWorkflowExtension throws diagnostics error when
- using `useExternalService`
- and tests Fail

https://github.com/temporalio/sdk-java/blob/master/temporal-testing/src/main/java/io/temporal/testing/TestWorkflowEnvironmentInternal.java#L262

## Expected Behavior

```

Failed tests
.
.
.

```


## Actual Behavior

```
java.lang.IllegalStateException: getDiagnostics is not supported with the external service
	at com.google.common.base.Preconditions.checkState(Preconditions.java:512)
```

## Steps to Reproduce the Problem

```
class SampleTest {

  @RegisterExtension
  public static final TestWorkflowExtension workflowExtension =
      TestWorkflowExtension.newBuilder().setDoNotStart(true).useExternalService().build();

  @Test
  void sampleTest(TestWorkflowEnvironment environment) {
    Assert.assertEquals(1, 2);
  }
}
```

## Specifications

  - Version:
  - Platform:


#### Comments (1)

<details>
<summary><strong>maciejdudko</strong> commented on 2025-10-01 15:19:54.000 UTC</summary>

Hi @gauravthadani, thank you for opening this issue. We'll discuss it on our next triage meeting.

Reactions: 👍 1

</details>


---

<a id="2670"></a>

### #2670: TestWorkflowEnvironment#sleep hangs indefinitely

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2670 |
| **State** | OPEN |
| **Author** | rpost (Radek Postołowicz) |
| **Created** | 2025-09-25 11:42:26.000 UTC (3 months ago) |
| **Updated** | 2025-09-29 08:11:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Actual Behavior

Under certain execution path `io.temporal.testing.TestWorkflowEnvironment#sleep` hangs indefinitely. 

## Steps to Reproduce the Problem

Please have a look at https://github.com/rpost/temporal-java-sdk-bug-2670/blob/main/src/test/java/com/example/temporalsleepbug/TemporalSleepBugApplicationTests.java

Execution stops at https://github.com/rpost/temporal-java-sdk-bug-2670/blob/main/src/test/java/com/example/temporalsleepbug/TemporalSleepBugApplicationTests.java#L52 and never finishes.

Thread dump shows:

```
"main" #1 [1711914] prio=5 os_prio=0 cpu=2324,38ms elapsed=23,31s tid=0x00007cac5c033e30 nid=1711914 waiting on condition  [0x00007cac60512000]
   java.lang.Thread.State: WAITING (parking)
	at jdk.internal.misc.Unsafe.park(java.base@21.0.7/Native Method)
	- parking to wait for  <0x00000002b9220bc8> (a io.grpc.stub.ClientCalls$ThreadlessExecutor)
	at java.util.concurrent.locks.LockSupport.park(java.base@21.0.7/LockSupport.java:221)
	at io.grpc.stub.ClientCalls$ThreadlessExecutor.waitAndDrain(ClientCalls.java:717)
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:159)
	at io.temporal.api.testservice.v1.TestServiceGrpc$TestServiceBlockingStub.unlockTimeSkippingWithSleep(TestServiceGrpc.java:586)
	at io.temporal.testing.TestWorkflowEnvironmentInternal.sleep(TestWorkflowEnvironmentInternal.java:165)
	at com.example.temporalsleepbug.TemporalSleepBugApplicationTests.shouldExecuteWorkflow(TemporalSleepBugApplicationTests.java:52)
	at java.lang.invoke.LambdaForm$DMH/0x00007cabc8170800.invokeVirtual(java.base@21.0.7/LambdaForm$DMH)
	at java.lang.invoke.LambdaForm$MH/0x00007cabc86b8000.invoke(java.base@21.0.7/LambdaForm$MH)
	at java.lang.invoke.Invokers$Holder.invokeExact_MT(java.base@21.0.7/Invokers$Holder)
	at jdk.internal.reflect.DirectMethodHandleAccessor.invokeImpl(java.base@21.0.7/DirectMethodHandleAccessor.java:153)
	at jdk.internal.reflect.DirectMethodHandleAccessor.invoke(java.base@21.0.7/DirectMethodHandleAccessor.java:103)
	at java.lang.reflect.Method.invoke(java.base@21.0.7/Method.java:580)
	at org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:775)
	....
```

```
"workflow-method-SubscriberTerminationWorkflow-1234-84b7b4fc-bea0-42f3-a168-fb8ebac7c408" #71 [1712086] prio=5 os_prio=0 cpu=4,69ms elapsed=20,45s tid=0x00007caaf80059f0 nid=1712086 waiting on condition  [0x00007cac14629000]
   java.lang.Thread.State: WAITING (parking)
	at jdk.internal.misc.Unsafe.park(java.base@21.0.7/Native Method)
	- parking to wait for  <0x00000007ffd017e8> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)
	at java.util.concurrent.locks.LockSupport.park(java.base@21.0.7/LockSupport.java:371)
	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode.block(java.base@21.0.7/AbstractQueuedSynchronizer.java:519)
	at java.util.concurrent.ForkJoinPool.unmanagedBlock(java.base@21.0.7/ForkJoinPool.java:3780)
	at java.util.concurrent.ForkJoinPool.managedBlock(java.base@21.0.7/ForkJoinPool.java:3725)
	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(java.base@21.0.7/AbstractQueuedSynchronizer.java:1712)
	at io.temporal.internal.sync.WorkflowThreadScheduler.yieldLocked(WorkflowThreadScheduler.java:37)
	at io.temporal.internal.sync.WorkflowThreadContext.yield(WorkflowThreadContext.java:70)
	at io.temporal.internal.sync.WorkflowThreadImpl.yield(WorkflowThreadImpl.java:378)
	at io.temporal.internal.sync.WorkflowThread.await(WorkflowThread.java:27)
	at io.temporal.internal.sync.SyncWorkflowContext.await(SyncWorkflowContext.java:1290)
	at io.temporal.internal.sync.WorkflowInternal.await(WorkflowInternal.java:510)
	at io.temporal.workflow.Workflow.await(Workflow.java:611)
	at com.example.temporalsleepbug.SubscriberTerminationWorkflow$SubscriberTerminationWorkflowImpl.execute(SubscriberTerminationWorkflow.java:25)
	at java.lang.invoke.LambdaForm$DMH/0x00007cabc8778000.invokeInterface(java.base@21.0.7/LambdaForm$DMH)
	at java.lang.invoke.LambdaForm$MH/0x00007cabc8778c00.invoke(java.base@21.0.7/LambdaForm$MH)
	at java.lang.invoke.Invokers$Holder.invokeExact_MT(java.base@21.0.7/Invokers$Holder)
	at jdk.internal.reflect.DirectMethodHandleAccessor.invokeImpl(java.base@21.0.7/DirectMethodHandleAccessor.java:154)
	at jdk.internal.reflect.DirectMethodHandleAccessor.invoke(java.base@21.0.7/DirectMethodHandleAccessor.java:103)
	at java.lang.reflect.Method.invoke(java.base@21.0.7/Method.java:580)
	at io.temporal.internal.sync.POJOWorkflowImplementationFactory$POJOWorkflowImplementation$RootWorkflowInboundCallsInterceptor.execute(POJOWorkflowImplementationFactory.java:406)
	at io.temporal.internal.sync.POJOWorkflowImplementationFactory$POJOWorkflowImplementation.execute(POJOWorkflowImplementationFactory.java:354)
	at io.temporal.internal.sync.WorkflowExecutionHandler.runWorkflowMethod(WorkflowExecutionHandler.java:51)
	at io.temporal.internal.sync.SyncWorkflow.lambda$start$0(SyncWorkflow.java:122)
	at io.temporal.internal.sync.SyncWorkflow$$Lambda/0x00007cabc8743860.run(Unknown Source)
	at io.temporal.internal.sync.CancellationScopeImpl.run(CancellationScopeImpl.java:99)
	at io.temporal.internal.sync.WorkflowThreadImpl$RunnableWrapper.run(WorkflowThreadImpl.java:92)
	at io.temporal.worker.ActiveThreadReportingExecutor.lambda$submit$0(ActiveThreadReportingExecutor.java:34)
	at io.temporal.worker.ActiveThreadReportingExecutor$$Lambda/0x00007cabc8741dc0.run(Unknown Source)
	at java.util.concurrent.Executors$RunnableAdapter.call(java.base@21.0.7/Executors.java:572)
	at java.util.concurrent.FutureTask.run$$$capture(java.base@21.0.7/FutureTask.java:317)
	at java.util.concurrent.FutureTask.run(java.base@21.0.7/FutureTask.java)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(java.base@21.0.7/ThreadPoolExecutor.java:1144)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(java.base@21.0.7/ThreadPoolExecutor.java:642)
	at java.lang.Thread.runWith(java.base@21.0.7/Thread.java:1596)
	at java.lang.Thread.run(java.base@21.0.7/Thread.java:1583)
```


```
"grpc-default-executor-5" #63 [1712078] daemon prio=5 os_prio=0 cpu=134,75ms elapsed=20,72s tid=0x00007cac5fec8ce0 nid=1712078 waiting on condition  [0x00007cac14e2a000]
   java.lang.Thread.State: WAITING (parking)
	at jdk.internal.misc.Unsafe.park(java.base@21.0.7/Native Method)
	- parking to wait for  <0x00000002b9358e08> (a java.util.concurrent.CompletableFuture$Signaller)
	at java.util.concurrent.locks.LockSupport.park(java.base@21.0.7/LockSupport.java:221)
	at java.util.concurrent.CompletableFuture$Signaller.block(java.base@21.0.7/CompletableFuture.java:1864)
	at java.util.concurrent.ForkJoinPool.unmanagedBlock(java.base@21.0.7/ForkJoinPool.java:3780)
	at java.util.concurrent.ForkJoinPool.managedBlock(java.base@21.0.7/ForkJoinPool.java:3725)
	at java.util.concurrent.CompletableFuture.waitingGet(java.base@21.0.7/CompletableFuture.java:1898)
	at java.util.concurrent.CompletableFuture.get(java.base@21.0.7/CompletableFuture.java:2072)
	at io.temporal.internal.testservice.TestService.unlockTimeSkippingWhileSleep(TestService.java:126)
	at io.temporal.internal.testservice.TestService.unlockTimeSkippingWithSleep(TestService.java:95)
	at io.temporal.api.testservice.v1.TestServiceGrpc$MethodHandlers.invoke(TestServiceGrpc.java:747)
	at io.grpc.stub.ServerCalls$UnaryServerCallHandler$UnaryServerCallListener.onHalfClose(ServerCalls.java:182)
	at io.grpc.PartialForwardingServerCallListener.onHalfClose(PartialForwardingServerCallListener.java:35)
	at io.grpc.ForwardingServerCallListener.onHalfClose(ForwardingServerCallListener.java:23)
	at io.grpc.internal.ServerCallImpl$ServerStreamListenerImpl.halfClosed(ServerCallImpl.java:351)
	at io.grpc.internal.ServerImpl$JumpToApplicationThreadServerStreamListener$1HalfClosed.runInContext(ServerImpl.java:860)
	at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)
	at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:133)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(java.base@21.0.7/ThreadPoolExecutor.java:1144)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(java.base@21.0.7/ThreadPoolExecutor.java:642)
	at java.lang.Thread.runWith(java.base@21.0.7/Thread.java:1596)
	at java.lang.Thread.run(java.base@21.0.7/Thread.java:1583)
```


What is interesting is when I comment:

```java
        CreateCustomerWorkflow createCustomerWorkflow = workflowClient.newWorkflowStub(
                CreateCustomerWorkflow.class,
                WorkflowOptions.newBuilder()
                        .setWorkflowId(CreateCustomerWorkflow.class.getSimpleName() + "-" + 1234L)
                        .setTaskQueue(TemporalSleepBugApplication.TASK_QUEUE)
                        .build()
        );
        WorkflowClient.execute(createCustomerWorkflow::execute, 1234L);

        Thread.sleep(5000); // let previous workflow complete
```

out and leave only `SubscriberTerminationWorkflow` in test then everything runs fine, without deadlocks.

## Specifications

  - Version: 1.31.0
  - Platform: n/a


#### Comments (1)

<details>
<summary><strong>oleg-kovrizhin-paradym</strong> commented on 2025-09-29 08:11:43.000 UTC</summary>

Looks like the same issue: https://github.com/temporalio/sdk-java/issues/2642

</details>


---

<a id="2578"></a>

### #2578: `startUpdate` JavaDoc says "asynchronously" when it may not be

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2578 |
| **State** | OPEN |
| **Author** | rgrochowicz (Rob Grochowicz) |
| **Created** | 2025-06-30 21:10:59.000 UTC (6 months ago) |
| **Updated** | 2025-07-02 17:23:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

The JavaDoc for `startUpdate` should indicate that when it's called with a `waitForStage` of `WorkflowUpdateStage.COMPLETED`, it's synchronous and blocks until the update is completed.

## Actual Behavior

The JavaDoc for `startUpdate` says the following:

```text
Start a zero argument update workflow request asynchronously.
```

However, the following code will block until the update is completed:

```kotlin
val updateOptions =
  UpdateOptions.newBuilder<UpdateResult>()
    .setResultClass(UpdateResult::class.java)
    .setWaitForStage(WorkflowUpdateStage.COMPLETED)
    .setUpdateId(updateId)
    .build()
val update = WorkflowClient.startUpdate(stub::doUpdate, updateOptions) // <-- blocks here
val result = update.getResult(5, TimeUnit.SECONDS)
```

The JavaDoc implies that `startUpdate` would ignore the `waitForStage`, always be asynchronous, and block on the `update.getResult`.

## Steps to Reproduce the Problem

  1. Look at JavaDoc for `startUpdate`
  2. Assume `startUpdate` is always asynchronous 
  1. Call `startUpdate` with a `waitForStage` of `WorkflowUpdateStage.COMPLETED`
  1. See that the `startUpdate` call was actually synchronous

## Specifications

  - Version: latest [master](https://github.com/temporalio/sdk-java/blob/4afe41b6ca638775e4e6ecaa3a5171b32670f9d4/temporal-sdk/src/main/java/io/temporal/client/WorkflowClient.java#L704)
  - Platform: n/a

---

Requesting that either the word `asynchronously` is removed from the JavaDoc for the `startUpdate` methods or it's clear that the function isn't asynchronous in a normal sense.

Thanks!

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-07-02 17:23:14.000 UTC</summary>

This is the sort of small change we'd be more than happy to accept a PR for if you're interested!

</details>


---

<a id="2573"></a>

### #2573: Support for ManualCompletion in TestActivity Env

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2573 |
| **State** | OPEN |
| **Author** | gauravthadani (Gaurav Thadani) |
| **Created** | 2025-06-26 06:37:03.000 UTC (6 months ago) |
| **Updated** | 2025-07-01 16:58:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Testing an Activity in isolation is feasible with the TestActivityEnvironment. However is a challenge when using `ManualActivityCompletionClient`

```
var manualActivityCompletionClient =
          Activity.getExecutionContext().useLocalManualCompletion();
```

1. Error: Method temporal.api.workflowservice.v1.WorkflowService/RespondActivityTaskCompleted is unimplemented'
2. Alternatively, I still couldn't test it with a Test Interceptor based approach. Down the `useLocalManualCompletion` implementation, it returns new clients, so unable to mock.


**Describe the solution you'd like**
Either
- support to test with ManualCompletionClient (or)
- ability to return a mock of `ManualActivityCompletionClient` in `useLocalManualCompletion()`.  Maybe a client supplier? (or)


**Describe alternatives you've considered**
- tried interceptor approach to test and with `TestEnvironment` 

**Additional context**
- or should we discourage usage of ManualCompletionClient in java docs .


#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-27 23:55:55.000 UTC</summary>

If you want to perform an end to end test with manual completion you can use the `TestWorkflowEnviorment`, if you just want to unit test the system that uses the `ManualCompletionClient ` you should pass that system a mocked `ManualCompletionClient`

> or should we discourage usage of ManualCompletionClient in java docs .

I am not sure there is anything in the Java docs that encourage the use of `ManualCompletionClient `, it is a niche feature for very specific use cases. Its use case is when separate system in the same process wants to complete activities. If you want to unit test that system then you can pass a mocked `ManualCompletionClient ` through the same channel your activity worker is using

</details>


---

<a id="2499"></a>

### #2499: Support pluggable workflow caches

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2499 |
| **State** | OPEN |
| **Author** | ghaskins (Gregory Haskins) |
| **Created** | 2025-05-01 21:34:25.000 UTC (8 months ago) |
| **Updated** | 2025-05-01 22:03:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

There are cases where the current integrated LRU cache for workflow threads may not sufficiently capture the optimal strategy for all workloads.  

For example, some high-volume workloads allow the cache to fill with workflows that are effectively abandoned because a remote worker completed them without any invalidation signal to clear the defunct task within the current worker. These abandoned workflows add extra eviction overhead for new, unrelated workflows, and the system may sometimes benefit from alternate eviction strategies that differ from the current synchronous LRU algorithm.  Examples include augmenting the LRU with a TTL model, or adding an asynchronous/background eviction mechanism.

The proposal is to add a mechanism allowing a pluggable cache that defaults to the current LRU design, allowing SDK end-users to supply their own implementations when desired.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-05-01 22:03:59.000 UTC</summary>

This is similar to the general cross-SDK request at https://github.com/temporalio/features/issues/573 (we would look into supporting cache customization across SDKs, not just Java). There is no timeline for the effort however.

</details>


---

<a id="2482"></a>

### #2482: Merging ActivityOptions fails with UnsupportedOperationException when using immutable lists for context propagators

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2482 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2025-04-18 08:05:51.000 UTC (8 months ago) |
| **Updated** | 2025-04-18 13:22:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Merging ActivityOptions fails  [here](https://github.com/temporalio/sdk-java/blob/d326d7ff59cd4ec9f4e422633133283707a57d2d/temporal-sdk/src/main/java/io/temporal/activity/ActivityOptions.java#L272) with UnsupportedOperationException when using immutable lists for context propagators



### Steps to Reproduce the Problem

Create a worker with WorkflowImplementationOptions and set setContextPropagators as an immutable list for one of the activities. 

````
 WorkflowImplementationOptions options =
        WorkflowImplementationOptions.newBuilder()
            .setActivityOptions(
                ImmutableMap.of(
                    "ActivityTypeB",
                    ActivityOptions.newBuilder()
                        // Set activity exec timeout (single run)
                        .setStartToCloseTimeout(Duration.ofSeconds(2))
                        .setRetryOptions(
                            RetryOptions.newBuilder()
                                // ActivityTypeB activity type shouldn't retry on NPE
                                .setDoNotRetry(NullPointerException.class.getName())
                                .build())
                        .setContextPropagators(List.of(new MDCContextPropagator()))
                        .build()))
            .build();

````

for the same activity, set the context propagator as an immutable list in the activityStub
```

  private FailingActivities activities =
      Workflow.newActivityStub(
          FailingActivities.class,
          ActivityOptions.newBuilder()
              .setContextPropagators(List.of(new MDCContextPropagator2()))
              .build());
```


The worker throws an `UnsupportedOperationException` [here](https://github.com/temporalio/sdk-java/blob/d326d7ff59cd4ec9f4e422633133283707a57d2d/temporal-sdk/src/main/java/io/temporal/activity/ActivityOptions.java#L272) when it tries to schedule the activity. 



**Describe the solution you'd like**

Create a new list that combines both instead of modifying one of them. 



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-04-18 13:21:20.000 UTC</summary>

> Describe the solution you'd like
> Create a new list that combines both instead of modifying one of them.

Alternatively, copy the list on `setContextPropagators`. Both are options are _technically_ backwards incompatible, because _technically_ today we allow a user to mutate the list they passed to `setContextPropagators` _after_ they set it (and after any merge calls), but before build. So we just have to decide if we're ok breaking that or not.

Reactions: 👍 1

</details>


---

<a id="2461"></a>

### #2461: [Feature Request] Utility to detect when deadlock detector triggers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2461 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2025-03-27 11:47:00.000 UTC (9 months ago) |
| **Updated** | 2025-03-27 12:55:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Users would like the ability to programmatically detect when the deadlock detector has triggered (and caused the workflow task to fail), so they can instruct their code to stop processing. This would be used to write defensive logic to prevent zombie threads or loops from running after the workflow task has failed. This typically happens when there’s a bug in user code, such as a spinning loop that runs indefinitely.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like

Currently, the SDK throws a DestroyWorkflowThreadError when a workflow API (e.g., sleep, scheduleActivity) is used after the deadlock detector has been triggered.

It would be great to have a method similar to `Thread.currentThread().isInterrupted()` that returns true (or an exception). This would allow developers to break out of loops or take alternate actions. 

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-27 12:55:45.000 UTC</summary>

Alternatively we should consider an interruption point they can put in their loops (e.g. `CancellationScope.current().throwCanceled()` or equivalent). A boolean may not be good enough, we may prefer that the thrown error be bubbled out.

</details>


---

<a id="2392"></a>

### #2392: [Bug] Test environment sleep hangs on child workflows 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2392 |
| **State** | OPEN |
| **Author** | ksapchuk (Kirill) |
| **Created** | 2023-04-17 21:48:22.000 UTC (2y 8m ago) |
| **Updated** | 2025-01-28 20:40:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
We have a workflow that starts async child workflows with `startChild` that we want to test. The child workflows have delays in place and we want to sleep in the test environment to check intermediate workflow state. 

### Describe the bug
After starting the workflow with `execute` calling sleep on the time skipping TestWorkflowEnvironment seems to hang despite the child workflow having finished. The same test passes if starting the workflow with `start`. 

### Minimal Reproduction
Activities
```
export const createActivities = () => ({
  async runActivity(): Promise<void> {},
});
```
Workflows
```
const { runActivity } = proxyActivities<ReturnType<typeof createActivities>>({
  startToCloseTimeout: '5m',
});

export async function childWorkflow(): Promise<void> {
  await runActivity();
}

export async function parentWorkflow(): Promise<void> {
  await startChild(childWorkflow, { args: [], parentClosePolicy: ParentClosePolicy.PARENT_CLOSE_POLICY_ABANDON });
}
```

Test
```
  it('sleeps correctly', async () => {
    const mockActivities: ReturnType<typeof createActivities> = {
      async runActivity() {
        console.log('running activity');
      },
    };
    const worker = await Worker.create({
      connection: env.nativeConnection,
      taskQueue: 'test',
      workflowsPath: require.resolve('../workflows'),
      activities: mockActivities,
    });
    await worker.runUntil(async () => {
      await env.client.workflow.execute(parentWorkflow, {
        workflowId: uuid(),
        taskQueue: 'test',
        args: [],
      });
      await env.sleep('5 minutes');
    });
  });
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M1 Mac,
- Temporal Version: typescript sdk 1.7.2
- Are you using Docker or Kubernetes or building Temporal from source?
No



#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-28 20:39:36.000 UTC</summary>

Moving to sdk-java, as this is an issue in the Time Skipping Test Server.

</details>


---

<a id="2364"></a>

### #2364: TestWorkflowEnvironment issue with setting search attributes in ContinueAsNewOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2364 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2025-01-09 11:14:25.000 UTC (12 months ago) |
| **Updated** | 2025-05-16 22:41:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

When using TestWorkflowEnvironment setting search attributes in ContinueAsNewOptions does not set them with the continued exec:

    ContinueAsNewOptions.newBuilder()
        .setTypedSearchAttributes(
            SearchAttributes.newBuilder()
                .set(CustomTextAttrib, "someValue")
                .build())
            .build());

same issue for setting typed search attributes as well as the deprecated (setSearchAttributes) too

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-01-09 14:05:55.000 UTC</summary>

(related to #2178 but not the same, but should solve both at the same time)

</details>


---

<a id="2321"></a>

### #2321: TestWorkflowEnvironment does not allow signalWithStart when workflow already exists

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2321 |
| **State** | OPEN |
| **Author** | rpost (Radek Postołowicz) |
| **Created** | 2024-11-14 22:52:54.000 UTC (1y 1m ago) |
| **Updated** | 2024-11-19 18:57:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

TestWorkflowEnvironment does not allow signalWithStart when workflow already exists - see exception below.

## Actual Behavior

TestWorkflowEnvironment should work the same as standalone server in this matter.


## Steps to Reproduce the Problem

Reproducer: SimpleWorkflowTest in https://github.com/rpost/temporal-test-bug - when test is run it fails with

```
Workflow execution {workflowId='my-workflow-2', runId='', workflowType='SampleWorkflow'} failed. Metadata: {closeEventType='EVENT_TYPE_WORKFLOW_EXECUTION_FAILED', retryState='RETRY_STATE_UNSPECIFIED', workflowTaskCompletedEventId=3'}
io.temporal.client.WorkflowFailedException: Workflow execution {workflowId='my-workflow-2', runId='', workflowType='SampleWorkflow'} failed. Metadata: {closeEventType='EVENT_TYPE_WORKFLOW_EXECUTION_FAILED', retryState='RETRY_STATE_UNSPECIFIED', workflowTaskCompletedEventId=3'}
	at io.temporal.internal.common.WorkflowExecutionUtils.getResultFromCloseEvent(WorkflowExecutionUtils.java:101)
	at io.temporal.internal.client.WorkflowClientLongPollHelper.getWorkflowExecutionResult(WorkflowClientLongPollHelper.java:70)
	at io.temporal.internal.client.RootWorkflowClientInvoker.getResult(RootWorkflowClientInvoker.java:353)
	at io.temporal.client.WorkflowStubImpl.getResult(WorkflowStubImpl.java:259)
	at io.temporal.client.WorkflowStubImpl.getResult(WorkflowStubImpl.java:240)
	at io.temporal.client.WorkflowStubImpl.getResult(WorkflowStubImpl.java:233)
	at io.temporal.testing.TimeLockingInterceptor$TimeLockingWorkflowStub.getResult(TimeLockingInterceptor.java:113)
	at rpost.SimpleWorkflowTest.shouldSignalWithStart(SimpleWorkflowTest.java:70)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:728)
	at org.junit.jupiter.engine.execution.MethodInvocation.proceed(MethodInvocation.java:60)
	at org.junit.jupiter.engine.execution.InvocationInterceptorChain$ValidatingInvocation.proceed(InvocationInterceptorChain.java:131)
	at org.junit.jupiter.engine.extension.TimeoutExtension.intercept(TimeoutExtension.java:156)
	at org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestableMethod(TimeoutExtension.java:147)
	at org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestMethod(TimeoutExtension.java:86)
	at org.junit.jupiter.engine.execution.InterceptingExecutableInvoker$ReflectiveInterceptorCall.lambda$ofVoidMethod$0(InterceptingExecutableInvoker.java:103)
	at org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.lambda$invoke$0(InterceptingExecutableInvoker.java:93)
	at org.junit.jupiter.engine.execution.InvocationInterceptorChain$InterceptedInvocation.proceed(InvocationInterceptorChain.java:106)
	at org.junit.jupiter.engine.execution.InvocationInterceptorChain.proceed(InvocationInterceptorChain.java:64)
	at org.junit.jupiter.engine.execution.InvocationInterceptorChain.chainAndInvoke(InvocationInterceptorChain.java:45)
	at org.junit.jupiter.engine.execution.InvocationInterceptorChain.invoke(InvocationInterceptorChain.java:37)
	at org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.invoke(InterceptingExecutableInvoker.java:92)
	at org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.invoke(InterceptingExecutableInvoker.java:86)
	at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeTestMethod$7(TestMethodTestDescriptor.java:218)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeTestMethod(TestMethodTestDescriptor.java:214)
	at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:139)
	at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:69)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:151)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
	at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
	at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:35)
	at org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)
	at org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:54)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:107)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:88)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.lambda$execute$0(EngineExecutionOrchestrator.java:54)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.withInterceptedStreams(EngineExecutionOrchestrator.java:67)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:52)
	at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:114)
	at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:86)
	at org.junit.platform.launcher.core.DefaultLauncherSession$DelegatingLauncher.execute(DefaultLauncherSession.java:86)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.processAllTestClasses(JUnitPlatformTestClassProcessor.java:119)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.access$000(JUnitPlatformTestClassProcessor.java:94)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor.stop(JUnitPlatformTestClassProcessor.java:89)
	at org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:62)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)
	at org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)
	at org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)
	at jdk.proxy1/jdk.proxy1.$Proxy2.stop(Unknown Source)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker$3.run(TestWorker.java:193)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.executeAndMaintainThreadName(TestWorker.java:129)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:100)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:60)
	at org.gradle.process.internal.worker.child.ActionExecutionWorker.execute(ActionExecutionWorker.java:56)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:119)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:66)
	at worker.org.gradle.process.internal.worker.GradleWorkerMain.run(GradleWorkerMain.java:69)
	at worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)
Caused by: io.temporal.failure.ActivityFailure: Activity with activityType='SignalWithStart' failed: 'Local Activity task failed'. scheduledEventId=0, startedEventId=0, activityId=a2731aa9-d29c-3699-b58f-73097f7cd4ea, identity='', retryState=RETRY_STATE_RETRY_POLICY_NOT_SET
	at io.temporal.failure.DefaultFailureConverter.failureToExceptionImpl(DefaultFailureConverter.java:163)
	at io.temporal.failure.DefaultFailureConverter.failureToException(DefaultFailureConverter.java:79)
	at io.temporal.common.converter.PayloadAndFailureDataConverter.failureToException(PayloadAndFailureDataConverter.java:143)
	... 88 more
Caused by: io.temporal.failure.ApplicationFailure: message='workflowId='mutexId', runId='37e667cc-b775-4a6a-a404-8798b7d217a3', workflowType='MutexWorkflow'', type='io.temporal.client.WorkflowExecutionAlreadyStarted', nonRetryable=false
	at io.temporal.client.WorkflowStubImpl.wrapStartException(WorkflowStubImpl.java:484)
	at io.temporal.client.WorkflowStubImpl.signalWithStartWithOptions(WorkflowStubImpl.java:190)
	at io.temporal.client.WorkflowStubImpl.signalWithStart(WorkflowStubImpl.java:217)
	at io.temporal.testing.TimeLockingInterceptor$TimeLockingWorkflowStub.signalWithStart(TimeLockingInterceptor.java:86)
	at rpost.SampleWorkflow$SignalWithStartActivityImpl.signalWithStart(SampleWorkflow.java:61)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at io.temporal.internal.activity.RootActivityInboundCallsInterceptor$POJOActivityInboundCallsInterceptor.executeActivity(RootActivityInboundCallsInterceptor.java:64)
	at io.temporal.internal.activity.RootActivityInboundCallsInterceptor.execute(RootActivityInboundCallsInterceptor.java:43)
	at io.temporal.internal.activity.ActivityTaskExecutors$BaseActivityTaskExecutor.execute(ActivityTaskExecutors.java:107)
	at io.temporal.internal.activity.ActivityTaskHandlerImpl.handle(ActivityTaskHandlerImpl.java:124)
	at io.temporal.internal.worker.LocalActivityWorker$AttemptTaskHandlerImpl.handle(LocalActivityWorker.java:472)
	at io.temporal.internal.worker.LocalActivityWorker$AttemptTaskHandlerImpl.handle(LocalActivityWorker.java:399)
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:93)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
	at java.base/java.lang.Thread.run(Thread.java:1583)
Caused by: io.temporal.failure.ApplicationFailure: message='ALREADY_EXISTS: WorkflowId: mutexId, RunId: 37e667cc-b775-4a6a-a404-8798b7d217a3', type='io.grpc.StatusRuntimeException', nonRetryable=false
	at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:271)
	at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:252)
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:165)
	at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.signalWithStartWorkflowExecution(WorkflowServiceGrpc.java:4639)
	at io.temporal.internal.client.external.GenericWorkflowClientImpl.lambda$signalWithStart$3(GenericWorkflowClientImpl.java:113)
	at io.temporal.internal.retryer.GrpcSyncRetryer.retry(GrpcSyncRetryer.java:69)
	at io.temporal.internal.retryer.GrpcRetryer.retryWithResult(GrpcRetryer.java:60)
	at io.temporal.internal.client.external.GenericWorkflowClientImpl.signalWithStart(GenericWorkflowClientImpl.java:108)
	at io.temporal.internal.client.RootWorkflowClientInvoker.signalWithStart(RootWorkflowClientInvoker.java:164)
	at io.temporal.client.WorkflowStubImpl.signalWithStartWithOptions(WorkflowStubImpl.java:180)
	... 15 more
```

whereas when main method is run (with `temporal server start-dev` in background) it finishes fine.


## Specifications

 - sdk version: 1.26.1
 - `temporal server start-dev`: CLI 1.1.0 (Server 1.25.0, UI 2.30.3)



#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-18 19:00:31.000 UTC</summary>

Hm I tried to translate your reproduction into an SDK test and was not able to reproduce any bug. I will try to run your reproduction directly. 

</details>


---

<a id="2213"></a>

### #2213: Signal w/ Start API Improvements - Java

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2213 |
| **State** | OPEN |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-09-12 21:22:00.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-09 18:46:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
BatchRequest is [hard to use](https://github.com/temporalio/samples-java/blob/ec1c615074eaf63d6b09caabff80e374ab507841/core/src/main/java/io/temporal/samples/moneybatch/TransferRequester.java#L51-L54), i.e. it has some affordances that would be illegal.
* First item must be the workflow start
* Second must be signal
We've never added support for other operations to it, such as Update, which means it might mislead people into thinking it could be used for an Update.

**Describe the solution you'd like**
Suggest deprecating it and replacing it with something 
* easier to use
* more consistent with `updateWithStart`.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.


#### Comments (1)

<details>
<summary><strong>drewhoskins-temporal</strong> commented on 2024-10-09 18:46:06.000 UTC</summary>

Related: https://github.com/temporalio/sdk-java/issues/915

</details>


---

<a id="2124"></a>

### #2124: MDC custom naming convention

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2124 |
| **State** | OPEN |
| **Author** | nikoncode (Mikita Karaliou) |
| **Created** | 2024-06-25 12:09:23.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-27 08:58:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We want to have an ability (extension point) to control default MDC keys. Now they are statically defined in workers.

Why it's important:
* we have multiple stacks: Java + Python and trying to unite our services logs/metrics/traces with single naming conventions.
* we have logging based integration: sentry, metrics from logs, etc.



#### Comments (1)

<details>
<summary><strong>nikoncode</strong> commented on 2024-08-27 08:58:38.000 UTC</summary>

Guys, because of this we are implemented a lot of custom code in logging.

</details>


---

<a id="2117"></a>

### #2117: Allow customization of OTel span tags

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2117 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-18 18:48:27.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 18:55:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Go and Python and .NET and others use `temporalWorkflowID`, `temporalRunID`, `temporalActivityID`, etc but Java uses `workflowId` and `runId` Cannot change Java's defaults for compatibility reasons, but we should allow these to be customized so users can make them the same. Some SDKs like .NET already allow these to be customized.

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-06-18 18:54:59.000 UTC</summary>

Note Java right now has an open tracing interceptor, not a open telemetry interceptor. If we create a first class open telemetry interceptor we can probably change the default name.

https://github.com/temporalio/sdk-java/tree/master/temporal-opentracing

Reactions: ❤️ 1

</details>


---

<a id="2071"></a>

### #2071: KotlinObjectMapperFactory is not forwards compatible

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2071 |
| **State** | OPEN |
| **Author** | Sineaggi (Clayton Walker) |
| **Created** | 2024-05-20 19:33:38.000 UTC (1y 7m ago) |
| **Updated** | 2025-11-12 15:15:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
KotlinObjectMapperFactory works

## Actual Behavior
KotlinObjectMapperFactory crashes with MethodNotFoundError

## Steps to Reproduce the Problem

  1. Use temporal kotlin
  1. Upgrade jackson kotlin library
  1. Crash

## Specifications

  - Version:
  - Platform:

Instead of using a deprecated method, it would have been best to try using the builder first, then fall back to the deprecated KotlinModule constructor. Alternatively, we should just use the builder as we can't even pick which KotlinModule constructor we compile against.

#### Comments (1)

<details>
<summary><strong>ivanmartinvalle</strong> commented on 2025-11-12 15:15:39.000 UTC</summary>

Note the workaround:
```kotlin
val mapper = JacksonJsonPayloadConverter.newDefaultObjectMapper()
mapper.registerModule(KotlinModule.Builder().build())
return DefaultDataConverter.newDefaultInstance()
    .withPayloadConverterOverrides(JacksonJsonPayloadConverter(mapper))
```

Note that I did expect temporal-kotlin to automatically configure the kotlin module, as did [this user here](https://github.com/temporalio/sdk-java/issues/1387), but unfortunately that was marked as wont-fix. The referenced issue includes the same workaround but with the `KotlinObjectMapperFactory` issue.

</details>


---

<a id="1963"></a>

### #1963: Schedule creation should create tracing span by default

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1963 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:12:07.000 UTC (2 years ago) |
| **Updated** | 2024-03-05 18:29:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When the tracing interceptor is in use, by default creating a schedule should create a span for the schedule and set it on the workflow header if the action is starting a workflow. Users need to be able to opt-out in their tracing interceptor options.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-03-05 18:29:58.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>


---

<a id="1914"></a>

### #1914: Support cancellation of long client calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1914 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-27 19:42:37.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-27 19:55:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Provide some way for users to _cancel_ a long client call such as getting workflow result or getting update result. Also consider providing a timeout utility on this that cancels after a certain amount of time. Try to follow common Java practices here if possible.

(sorry if an issue exists for this already)

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-10-27 19:55:09.000 UTC</summary>

related (duplicate) of https://github.com/temporalio/sdk-java/issues/1212

Reactions: 👍 1

</details>


---

<a id="1913"></a>

### #1913: Remove WorkflowClientCallsInterceptor.pollWorkflowUpdate

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1913 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-27 19:38:42.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-30 23:12:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

This does not need to be interceptable any more than getting a workflow result does

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-10-30 23:11:50.000 UTC</summary>

Getting the workflow result in an async manner is intercept-able in Java so this is inconsistent with the rest of the Java SDK

</details>


---

<a id="1707"></a>

### #1707: ServiceWorkflowHistoryIterator should eagerly request the next page

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1707 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-03-21 17:59:31.000 UTC (2y 9m ago) |
| **Updated** | 2023-04-20 18:49:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Some users experience issues with replays of long workflow histories.

**Describe the solution you'd like**
While this process will always inherently has O(n) complexity and there is not much that we can do with that, there is one low hanging fruit to improve it.
Currently `ServiceWorkflowHistoryIterator` requests the next page only when the worker is already blocked and finished processing the previous page. It may be optimized by requesting the next page immediately.

**Additional context**

See `io.temporal.client.EagerPaginator` and it's implementations where such an approach and logic are already implemented.


#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-20 18:49:37.000 UTC</summary>

Related #1242

</details>


---

<a id="1374"></a>

### #1374: External workflow signal from a workflow code throws incorrect exceptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1374 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-18 01:34:21.000 UTC (3y 4m ago) |
| **Updated** | 2023-06-28 02:22:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | Next |

#### Description

## Actual Behavior

```
fun signalWorkflow(workflowId: String, signalName: String, vararg args: Any) {
        try {
            Workflow.newUntypedExternalWorkflowStub(workflowId).signal(signalName, args)
        } catch (ex: ApplicationFailure) {
            if (ex.type == "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND") {
                logger.info {
                    it.message("Workflow not found while attempting to send signal to it.")
                        .value("workflowId", workflowId).value("signal", signalName)
                }
            }
        }
    }
```

The code above shouldn't work and `ApplicationFailure` is an incorrect exception to be thrown here.


## Additional context

There is already an exception for this situation: `SignalExternalWorkflowException` that is currently not created anywhere.

There is also a todo to implement exactly this that never was done: https://github.com/temporalio/sdk-java/blob/37a0e463fae2312882b5c946f423a0dbf85f9666/temporal-sdk/src/main/java/io/temporal/internal/statemachines/SignalExternalStateMachine.java#L152

Another alternative exception to consider here may be `WorkflowNotFoundException`

#### Comments (1)

<details>
<summary><strong>pragnareddye</strong> commented on 2023-06-28 02:21:53.000 UTC</summary>

@Spikhalskiy @Quinn-With-Two-Ns This would be a backwards incompatible change for users who have implemented their code by catching ApplicationFailure type right?

</details>


---

<a id="1373"></a>

### #1373: Child Workflow creation API should allow user to specify a custom data converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1373 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-17 19:09:57.000 UTC (3y 4m ago) |
| **Updated** | 2022-10-28 21:26:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
The user starts a child workflow on a different namespace or task queue, so it will be handled by a different worker.
This different worker may have a completely different configuration of data converters.
Such a situation is pretty legit if we have two different teams developing different modules listening on different task queues.
Right now there is no way for a parent workflow to specify a different data converter for such a child workflow invocation.

**Describe the solution you'd like**

`ChildWorkflowOptions` should allow specifying a custom data converter that may be different from the data converter of the current worker.

**Describe alternatives you've considered**
Currently, users may work around this problem by creating a `PayloadConverter` that applies only to an input class of the child workflow. This approach is hacky and has limitations. 

**Additional context**
The same applies to ActivityOptions. Activities can't be scheduled on another namespace but could be on a different task queue. 

#### Comments (1)

<details>
<summary><strong>geirhoe</strong> commented on 2022-08-17 19:27:01.000 UTC</summary>

We have a setup with multiple workers, hosted by different parties, using separate queues for each workflow
Worker A - hosts the main workflow, having keys p1 and s1
Worker B - hosts a child workflow doing work needed by the main workflow on worker A, having keys p2 and s2

All communication between the different workers and clients must be encrypted and protected.

A client starts the main workflow using encrypted payload (using p1) that is decrypted on worker A using a payloadconverter with S1, giving the main workflow the information it needs.
When the main workflow on worker A starts the child workflow on worker B, the payload needed for the child workflow must be encrypted using P2 on worker A before leaving the server.
Once worker B receives this request, it decrypts the payload using S2, and starts the child workflow to do its thing.
The result from the child workflow must then be encoded using P1, and sent back to the main workflow decrypting it using S1 once the result is back on worker A.

Currently there is no way of specifying a custom dataconverter/payloadconverter to be used for the child workflow when starting it in the main workflow on worker A, leaving me to use a hack to get it working.

</details>


---

<a id="1201"></a>

### #1201: Revisit continue-as-new that doesn't carry over some attributes of parent run if not set explicitly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1201 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-05-11 01:43:02.000 UTC (3y 8m ago) |
| **Updated** | 2023-05-23 17:59:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

# Expected Behavior

Users calling `Workflow.continueAsNew` without an explicit `ContinueAsNewOptions` expect most workflow properties to carry over to the new run.

## Actual Behavior

Right now `continueAsNew` is implemented in a way that assumes that most parameters are carried over by the server if not specified on the continueAsNew request. While in fact, it's the opposite. Server doesn't carry over most parameters are not carried over by the server.

## Additional context

This task requires also 
- a careful alignment with GoSDK 
- documenting in Temporal API repo which parameters are carried over by the Server from the previous run.
- Test server should be updated to be aligned in its behavior with the real Temporal Server.

Related:
- [x] #1200
- [ ] Workflow RetryOptions are not carried forward automatically

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-05-23 17:59:43.000 UTC</summary>

related: https://github.com/temporalio/sdk-java/issues/1424

</details>


---

<a id="1139"></a>

### #1139: TestWorkflowEnvironment - add support for filtering for ListOpenWorkflowExecutions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1139 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-04-12 23:34:26.000 UTC (3y 9m ago) |
| **Updated** | 2024-12-17 21:26:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently TestWorkflowEnvironment does support ListOpenWorkflowExecutions, but it does not apply filtering, for example:

StartTimeFilter

       ListOpenWorkflowExecutionsRequest req = ListOpenWorkflowExecutionsRequest
                      .newBuilder()
                      .setStartTimeFilter(StartTimeFilter.newBuilder()
                              .setEarliestTime(Timestamp.newBuilder()
                                      .setSeconds(seconds)
                                      .build())
                              .build())
                      .setNamespace(client.getOptions().getNamespace())
                      .build();


WorkflowTypeFilter

    ListOpenWorkflowExecutionsRequest req = ListOpenWorkflowExecutionsRequest
                    .newBuilder()
                    .setTypeFilter(WorkflowTypeFilter.newBuilder()
                            .setName(type)
                            .build())
                    .setNamespace(client.getOptions().getNamespace())
                    .build();

are not applied when using TestWorkflowEnvironment service and client. 

#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-04-12 23:38:05.000 UTC</summary>

Assigning low priority. 
Test Server is intended for testing Workflow implementations, full on-par support of all administrative endpoints is not really a goal. Workflow logic shouldn’t trigger listopenworkflowexecutions, it's an admin/operation endpoint.

Leaving it open, because it's good to have.

</details>


---

<a id="1138"></a>

### #1138: Test server does not decrement time skipping lock for outstanding activities on workflow completion

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1138 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-04-12 23:33:23.000 UTC (3y 9m ago) |
| **Updated** | 2024-11-19 19:08:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Steps to Reproduce the Problem

https://github.com/temporalio/sdk-typescript/blob/0f4c391e897d833fadae54fe3b2dc9afdee47720/packages/test/src/test-testenvironment.ts#L87

## Expected Behavior

Calling sleep in the second activity should complete immediately

## Actual Behavior

The second activity sleeps in normal time


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-10-28 15:58:07.000 UTC</summary>

Here's a test where I had to make a separate test server: https://github.com/temporalio/sdk-python/blob/657a13def5d4e0e0efc8c3e20677e5958bc7da75/tests/worker/test_workflow.py#L2383-L2440. It might be related to this issue. Basically running `poe test` with `-k 'test_workflow_cancel_activity or test_workflow_cancel_signal'` will cause the unlock-and-sleep of the second test to hang.

</details>


---

<a id="1107"></a>

### #1107: Workflow metadata resolution code registers an overridden method from parent class as a second query

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1107 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-03-31 00:38:44.000 UTC (3y 9m ago) |
| **Updated** | 2022-10-13 17:27:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Such a workflow interfaces hierarchy:

```
@WorkflowInterface
public interface ReportingWorkflow extends TemporalWorkflow<ReportQueriesResponse> {
  @WorkflowMethod
  ReportQueriesResponse runReport(ReportQueries reportQueries);

  @QueryMethod
  @Override
  ReportQueriesResponse getResults();
}

public interface TemporalWorkflow<T> extends TemporalRunnable {
  T getResults();
}
```

should be fine.

## Actual Behavior

Triggers `java.lang.IllegalArgumentException: Duplicated name of QUERY: "getResults" declared at "public abstract xxx.ReportingProto$ReportQueriesResponse xxx.ReportingWorkflow.getResults()" and "public default java.lang.Object xxx.ReportingWorkflow.getResults()"`

## Specifications

  - Version: 1.8.x


#### Comments (1)

<details>
<summary><strong>shabalin</strong> commented on 2022-10-13 17:06:29.000 UTC</summary>

The same happened if you override with @WorkflowMethod
```
public interface TemporalWorkflow<T> {
    void execute(T params);
}
```
and then define the actual workflow interface:
```
@WorkflowInterface
public interface SearchTaskWorkflow extends TemporalWorkflow<SearchWorkflowParams> {
    @WorkflowMethod
    @Override
    void execute(SearchWorkflowParams params);
}
```
Workflow registration fails with the error:
```
java.lang.IllegalArgumentException: Duplicated @WorkflowMethod: public default void io.dev.analytics.temporal.SearchTaskWorkflow.execute(java.lang.Object) and public abstract void io.dev.analytics.temporal.SearchTaskWorkflow.execute(io.dev.analytics.service.search.async.SearchWorkflowParams)
	at io.temporal.common.metadata.POJOWorkflowInterfaceMetadata.getWorkflowInterfaceMethods(POJOWorkflowInterfaceMetadata.java:296) ~[temporal-sdk-1.16.0.jar:na]
	at io.temporal.common.metadata.POJOWorkflowInterfaceMetadata.<init>(POJOWorkflowInterfaceMetadata.java:205) ~[temporal-sdk-1.16.0.jar:na]
	at io.temporal.common.metadata.POJOWorkflowInterfaceMetadata.newInstanceInternal(POJOWorkflowInterfaceMetadata.java:184) ~[temporal-sdk-1.16.0.jar:na]
	at io.temporal.common.metadata.POJOWorkflowInterfaceMetadata.newImplementationInstance(POJOWorkflowInterfaceMetadata.java:153) ~[temporal-sdk-1.16.0.jar:na]
	at io.temporal.common.metadata.POJOWorkflowImplMetadata.<init>(POJOWorkflowImplMetadata.java:107) ~[temporal-sdk-1.16.0.jar:na]
	at io.temporal.common.metadata.POJOWorkflowImplMetadata.newInstance(POJOWorkflowImplMetadata.java:75) ~[temporal-sdk-1.16.0.jar:na]
```

In documentation it's said 
> Note that this approach does not apply to @WorkflowMethod annotations, meaning that when using a base interface, it should not include any @WorkflowMethod methods

but we don't mark the parent interface method with a @WorkflowMethod


I think the reason it's happening is in:
`POJOWorkflowInterfaceMetadata.getWorkflowInterfaceMethods`

```
    Method[] declaredMethods = current.getDeclaredMethods();
    for (Method declaredMethod : declaredMethods) {
      POJOWorkflowMethod methodMetadata = new POJOWorkflowMethod(declaredMethod);
      if (validateAndQualifiedForWorkflowMethod(methodMetadata)) {
        result.add(methodMetadata);
      }
    }

```

the  `current.getDeclaredMethods()` returns both methods and then in POJOWorkflowMethod constructor there is this
```
 WorkflowMethod workflowMethod = method.getAnnotation(WorkflowMethod.class);
```
which returns not null result for both methods and that causes an error

============== Update ===========================
Looks like the fix could be quite simple for my case:
1. In `POJOWorkflowInterfaceMetadata.validateAndQualifiedForWorkflowMethod` there is a check whether the method is **synthetic**, if positive case it would reject the method. Parent interface method is `synthetic`, _but_  the check happens after another condition (`isAnnotatedWorkflowMethod`) that is true so the execution doesn't reach the synthetic flag checking.
```
    if (isAnnotatedWorkflowMethod) {
      // all methods explicitly marked with one of workflow method qualifiers
      return true;
    }

    if (method.isSynthetic()) {
      // if method is synthetic and not explicitly marked as a workflow method,
      // it's not qualified as a workflow method.
      // https://github.com/temporalio/sdk-java/issues/977
      // https://github.com/temporalio/sdk-java/issues/1331
      return false;
    }
```

Can we do `isAnnotatedWorkflowMethod && !method.isSynthetic()` here ?


</details>


---

<a id="1051"></a>

### #1051: PollWorkflowTaskQueueResponse should be available for interception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1051 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-02-22 02:48:17.000 UTC (3y 10m ago) |
| **Updated** | 2022-02-22 14:24:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
PollWorkflowTaskQueueResponse has the information about the WorkflowTask and contains some pieces of information that may be needed for reporting/logging.
Specifically, the most interesting one is PollWorkflowTaskQueueResponse#attempt that may be used to log workflows that can't progress for a long time.

**Describe the solution you'd like**
PollWorkflowTaskQueueResponse or some parts of it should be made available to the user-configured handler/interceptor. 

TBD. It also can become an input of a new method of WorkflowInboundInterceptor. TBD because currently all methods of Interceptors are extremely bound to the user code lifecycle and directly connected to events in the user code, while this method would be something that interceptors are not currently observed/expose.

**Describe alternatives you've considered**
To solve the specific problem of reporting a workflow that doesn't progress because of a large number of failures, we can just hardcode logging in a manner that Server currently does: https://github.com/temporalio/temporal/blob/61b9b65744e455d4a85681b117e8315287911621/service/history/workflow/workflow_task_state_machine.go#L763
This solution is not flexible and doesn't move the extensibility of the SDK forward though.

**Additional context**
Related to https://github.com/temporalio/temporal/issues/2526

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-02-22 14:24:50.000 UTC</summary>

Technically this can be done with a gRPC interceptor. My concern with putting in our interceptors is we won't get to change our polling mechanism without breaking it. If it's needed for reporting/logging, maybe just making the most recent task available for a getter is good enough?

If done via our interceptors, arguably `pollWorkflowTaskQueue` should be on the outbound interceptor (and an equivalent for activities). I had considered putting it on the client interceptors, but in some languages like TypeScript that is a bit more difficult since it's Core that makes the call.

Also, we might want a general cross-SDK issue at https://github.com/temporalio/sdk-features or at least a general cross-SDK discussion because TypeScript won't be able to do this as cleanly as Go/Java.

</details>


---

<a id="1005"></a>

### #1005: Provide ActivityExecutionContext#isCancelled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1005 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-25 20:14:42.000 UTC (3y 11m ago) |
| **Updated** | 2025-08-27 17:56:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently, the only way for an activity to know that it's canceled is heartbeating and getting a CancellationException from the heartbeat.
1. Not all activities need to heartbeat and making them do it just to check for cancelation is ugly.
2. Local Activities don't heartbeat, so now there is no way to notify them that they should cancel (for example, because there is a timeout). GoSDK has go context for it, Java has nothing. Using Interruption here is not right, because we need to distinguish it from a thread interruption during the shutdown to keep things clean. 
3. Heartbeating activities may not be able to reach the service , the SDK should keep tack of the heartbeat timeout and fail if it can't reach the server in time.

**Describe the solution you'd like**
ActivityExecutionContext#isCancelled method that activity can periodically check as an alternative to listening cancelations through heart beating. This solution will be close to the native Interruption design in Java: We will have an exception if Activity calls a heartbeat and a flag otherwise.

**Additional context**
This is related to #1004. There is no way to notify Local Activity about the cancelation.

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-09 06:38:25.000 UTC</summary>

We should also add a more detailed method (name TBD) that returns an object that contains the reason/reasons for the activity being cancelled.

</details>


---

<a id="856"></a>

### #856: WorkflowClient#execute doesn't pair correctly with workflowStub.getResult()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/856 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-03 22:36:18.000 UTC (4y 2m ago) |
| **Updated** | 2022-04-13 22:05:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | tsurdilo |
| **Milestone** | Next |

#### Description

## Actual behavior

https://github.com/Spikhalskiy/java-sdk/commit/40c0d626e0ea4778a956e388d33754e67bde23a8#diff-7cfba47d2337ff3ee746b09a4d916e5e839f9b8bff45a26e588727667437c160R94
```
  @Test
  public void executeAndGetResultFromStub() throws InterruptedException, ExecutionException {
    TestNoArgsWorkflowProc stubP =
        testWorkflowRule.newWorkflowStubTimeoutOptions(TestNoArgsWorkflowProc.class);
    WorkflowStub workflowStub = WorkflowStub.fromTyped(stubP);
    CompletableFuture<Void> executeCF = WorkflowClient.execute(stubP::proc);

    // This test hangs (times out), but uncommenting of either if these two lines makes it
    // pass, which doesn't make much sense
    // sleep(1000);
    // executeCF.get();
    workflowStub.getResult(Void.class);
  }
```

This unit test for a trivial workflow, that finishes immediately, hangs.
Uncommenting on either sleep or waiting for a completable future makes it pass.
Replacing execute with start (that returns `WorkflowExecution`) also makes this test pass.

## Expected behavior

The test passes.

#### Comments (1)

<details>
<summary><strong>joelmarty</strong> commented on 2022-02-10 15:24:06.000 UTC</summary>

I am seeing a similar issue with `WorkflowClient.execute()` but not sure if it is exactly the same situation, as calling `Thread.sleep()` or waiting on the future does not fix it:

The use case looks like this:
```java
class EventConsumer {

  private WorkflowClient workflowClient;

  public EventConsumer(WorkflowClient client) {
    this.workflowClient = client;
  }

  public void accept(Stream<SomeEvent> eventStream) {
    eventStream.forEach(event -> {
      final var workflowOptions = WorkflowOptions.newBuilder()
        .setTaskQueue("someQueue)
        .setWorkflowId(event.getId())
        .setWorkflowIdReusePolicy(WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY)
        .build();
      final var workflow = workflowClient.newWorkflowStub(MyWorkflow.class, workflowOptions);
      WorkflowClient.execute(workflow::processEvent, event)
        .whenComplete((v, throwable) -> log.info("completed"));
    });
  }
}
```

The test case uses junit5 extension:
```java
class EventConsumerTest {
  @RegisterExtension
  public static final TestWorkflowExtension testWorkflowExtension = TestWorkflowExtension.newBuilder()
    .setWorkflowClientOptions(WorkflowClientOptions.newBuilder()
      .setNamespace("namespace")
      .build())
    .setWorkflowTypes(MyWorkflow.class)
    .setDoNotStart(true)
    .build();

  @Test
  void startWorkflow(TestWorkflowEnvironment testEnv, Worker worker) {
    MyActivity activity = mock(MyActivity.class, withSettings().withoutAnnotations());
    worker.registerActivitiesImplementations(activity);
    testEnv.start();

    EventConsumer consumer = new EventConsumer(testEnv.getWorkflowClient());

    // assertJ assertion
    assertThatCode(() -> consumer.accept(Stream.of(event))).doesNotThrowAnyException();

    // mockito verification
    then(activity).should(timeout(5000)).doSomething();
}
```

The test times out after 5s as specified on the mockito verification and the (anonymized) log trace looks like this:
```
16:11:05.761 [main] INFO io.temporal.serviceclient.WorkflowServiceStubsImpl - Created GRPC client for channel: ManagedChannelOrphanWrapper{delegate=ManagedChannelImpl{logId=1, target=directaddress:///3c1827fc-4a62-4d7d-a725-efe16cfef991}}
16:11:05.777 [main] INFO io.temporal.serviceclient.WorkflowServiceStubsImpl - Created GRPC client for channel: ManagedChannelOrphanWrapper{delegate=ManagedChannelImpl{logId=5, target=directaddress:///06e8951f-ef30-489d-80fb-ec06add9150e}}
16:11:05.881 [main] INFO io.temporal.internal.worker.Poller - start: Poller{name=Workflow Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace", identity=37008@myhostname}
16:11:05.885 [main] INFO io.temporal.internal.worker.Poller - start: Poller{name=Local Activity Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace", identity=37008@myhostname}
16:11:05.887 [main] INFO io.temporal.internal.worker.Poller - start: Poller{name=Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", identity=37008@myhostname}
16:11:05.888 [main] INFO io.temporal.internal.worker.Poller - start: Poller{name=Host Local Workflow Poller, identity=90621874-bf17-42a0-b6b4-16b5f6433a3b}
16:11:11.266 [main] INFO io.temporal.worker.WorkerFactory - shutdownNow: WorkerFactory{identity=37008@myhostname, uniqueId=90621874-bf17-42a0-b6b4-16b5f6433a3b}
16:11:11.266 [main] INFO io.temporal.internal.worker.Poller - shutdown: Poller{name=Host Local Workflow Poller, identity=90621874-bf17-42a0-b6b4-16b5f6433a3b}
16:11:11.272 [main] INFO io.temporal.worker.WorkerFactory - awaitTermination begin: WorkerFactory{identity=37008@myhostname, uniqueId=90621874-bf17-42a0-b6b4-16b5f6433a3b}
16:11:11.272 [Host Local Workflow Poller: 3] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@2f410cb5
16:11:11.272 [Host Local Workflow Poller: 4] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@1da8bb99
16:11:11.272 [Host Local Workflow Poller: 2] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@368de08f
16:11:11.272 [Host Local Workflow Poller: 1] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@56e21162
16:11:11.272 [Host Local Workflow Poller: 5] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@18cc9d5b
16:11:11.526 [TemporalShutdownManager: 1] INFO io.temporal.internal.worker.Poller - shutdown: Poller{name=Workflow Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace", identity=37008@myhostname}
16:11:11.527 [Workflow Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace": 1] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@1d1ce3ca
16:11:11.527 [Workflow Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace": 2] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@61c24b97
16:11:11.529 [TemporalShutdownManager: 1] INFO io.temporal.internal.worker.Poller - shutdown: Poller{name=Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", identity=37008@myhostname}
16:11:11.529 [TemporalShutdownManager: 1] INFO io.temporal.internal.worker.Poller - shutdown: Poller{name=Local Activity Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace", identity=37008@myhostname}
16:11:11.530 [Local Activity Poller taskQueue="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]", namespace="namespace": 1] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@775ac2f4
16:11:11.530 [Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]": 3] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@13f7bf0c
16:11:11.530 [Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]": 5] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@17e59124
16:11:11.530 [Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]": 2] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@1604dc95
16:11:11.530 [Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]": 1] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@130e4636
16:11:11.530 [Activity Poller taskQueue="namespace", namespace="WorkflowTest-startWorkflow(TestWorkflowEnvironment, Worker)-[engine:junit-jupiter]/[class:com.xyz.EventConsumerTest]/[method:startWorkflow(io.temporal.testing.TestWorkflowEnvironment, io.temporal.worker.Worker)]": 4] INFO io.temporal.internal.worker.Poller - poll loop is terminated: io.temporal.internal.worker.Poller$PollLoopTask@72885c3d
16:11:11.783 [main] INFO io.temporal.worker.WorkerFactory - awaitTermination done: WorkerFactory{identity=37008@myhostname, uniqueId=90621874-bf17-42a0-b6b4-16b5f6433a3b}
16:11:11.784 [main] INFO io.temporal.serviceclient.WorkflowServiceStubsImpl - shutdownNow
16:11:11.790 [ForkJoinPool.commonPool-worker-19] DEBUG io.temporal.internal.retryer.GrpcAsyncRetryer - Retrying after failure
io.grpc.StatusRuntimeException: UNAVAILABLE: Channel shutdownNow invoked
```

</details>


---

<a id="652"></a>

### #652: Make WorkflowStub#getResult timeout configurable on WorkflowOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/652 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-08-19 18:58:42.000 UTC (4y 4m ago) |
| **Updated** | 2023-04-19 20:40:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Right now the caller can set a timeout on getResult by working directly with  WorkflowStub using the following method:
https://github.com/temporalio/sdk-java/blob/b0199150b69bb5a4eaf6c13ba4b89c2a8746a113/temporal-sdk/src/main/java/io/temporal/internal/sync/WorkflowStubImpl.java#L232

But if the caller is not using the low-level stub API and just calls the workflow method of a workflow proxy (which most of our users for sure do) a method with `Integer.MAX_VALUE` timeout is used by default:
https://github.com/temporalio/sdk-java/blob/b0199150b69bb5a4eaf6c13ba4b89c2a8746a113/temporal-sdk/src/main/java/io/temporal/internal/sync/WorkflowStubImpl.java#L222

We should allow defining the `#getResult` timeout on WorkflowOptions to allow the neat proxy API to enforce reasonable timeouts.

#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2023-04-19 20:40:23.000 UTC</summary>

Related to #88. All methods of WorkflowStub and/or WorkflowClient should have some way to be limited by a user-supplied timeout.

</details>


---

<a id="499"></a>

### #499: Handle all exceptions as non-retryable when TEMPORAL_DEBUG is set

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/499 |
| **State** | OPEN |
| **Author** | mobiletoly (Toly Pochkin) |
| **Created** | 2021-05-18 20:59:38.000 UTC (4y 7m ago) |
| **Updated** | 2021-05-24 17:20:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
By default all exceptions are Retryable in workflows/activities and it makes troubleshooting much harder when we have to deal with a core exceptions such as NullPointerException, InvalidArgumentException, SQL errors etc during a development cycle.

**Describe the solution you'd like**
TEMPORAL_DEBUG env variable is already in use to assist with debugging (e.g. timeouts) and it could be reused to handle all exception as non-retryable by default.

There is some discussion here as well that might provide more context:
https://temporalio.slack.com/archives/CTT84KXK9/p1621341005008500


#### Comments (1)

<details>
<summary><strong>vitarb</strong> commented on 2021-05-24 17:20:23.000 UTC</summary>

Hey @mobiletoly, `TEMPORAL_DEBUG` is intended to be used to adjust certain timeouts so that when you stop in the debugger you don't affect workflow execution. Your proposal goes slightly against this idea as it would alter workflow behavior by changing how it handles the errors. I don't like this, as it could make certain tests pass/fail with or without the flag.

</details>


---

<a id="341"></a>

### #341: Support robfig style cron defs in TestWorkflowEnvironment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/341 |
| **State** | OPEN |
| **Author** | skrul (Steve Krulewitz) |
| **Created** | 2020-08-31 19:01:29.000 UTC (5y 4m ago) |
| **Updated** | 2024-11-20 21:04:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

I have a cron workflow that uses the cron expression "@every 30s". This works fine when run against a temporal server, however, it fails when using the workflow unit test scaffolding.

## Actual Behavior

```
com.xxx.runner.WorkflowTestRunnerStarterTest > run FAILED
    io.grpc.StatusRuntimeException: INVALID_ARGUMENT: Invalid cron expression "@every 30s": Cron expression contains 2 parts but we expect one of [5]
        at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:244)
        at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:225)
        at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:142)
        at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.startWorkflowExecution(WorkflowServiceGrpc.java:2613)
        at io.temporal.internal.external.GenericWorkflowClientExternalImpl.lambda$start$0(GenericWorkflowClientExternalImpl.java:86)
        at io.temporal.internal.common.GrpcRetryer.retryWithResult(GrpcRetryer.java:127)
        at io.temporal.internal.external.GenericWorkflowClientExternalImpl.start(GenericWorkflowClientExternalImpl.java:80)
        at io.temporal.internal.sync.WorkflowStubImpl.startWithOptions(WorkflowStubImpl.java:155)
        at io.temporal.internal.sync.WorkflowStubImpl.start(WorkflowStubImpl.java:267)
        at io.temporal.internal.sync.TestWorkflowEnvironmentInternal$TimeLockingInterceptor$TimeLockingWorkflowStub.start(TestWorkflowEnvironmentInternal.java:230)
        at io.temporal.internal.sync.WorkflowInvocationHandler$StartWorkflowInvocationHandler.invoke(WorkflowInvocationHandler.java:242)
        at io.temporal.internal.sync.WorkflowInvocationHandler.invoke(WorkflowInvocationHandler.java:178)
        at com.sun.proxy.$Proxy29.run(Unknown Source)
        at io.temporal.internal.sync.WorkflowClientInternal.start(WorkflowClientInternal.java:220)
        at io.temporal.client.WorkflowClient.start(WorkflowClient.java:238)
        at com.xxx.runner.WorkflowTestRunnerStarter.start(WorkflowTestRunnerStarter.java:52)
        at com.xxx.runner.WorkflowTestRunnerStarterTest.run(WorkflowTestRunnerStarterTest.java:50)```

## Specifications

  - Version: temporal java client 0.27.0


#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-01-26 16:31:53.000 UTC</summary>

https://github.com/jmrozanec/cron-utils/issues/505
https://github.com/jmrozanec/cron-utils/issues/506

</details>


---

<a id="305"></a>

### #305: Run Saga compensations in a disconnected scope

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/305 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2021-01-12 21:10:42.000 UTC (4y 12m ago) |
| **Updated** | 2021-03-14 08:24:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently `Saga.compensate` is called in the current cancellation scope. It means that in the case of cancellation the compensations are not going to run. So it requires that `compensate` is called in the detached cancellation scope. But our [sample does not do it](https://github.com/temporalio/samples-java/blob/61bf7a9071fe443eb6f1722ccdb7a78fdd6ccd9b/src/main/java/io/temporal/samples/bookingsaga/TripBookingWorkflowImpl.java#L55).

**Describe the solution you'd like**
By default execute compensation actions in a disconnected cancellation scope. Add Saga.Option to disable this behavior. 
Change [bookingsaga](https://github.com/temporalio/samples-java/tree/master/src/main/java/io/temporal/samples/bookingsaga) sample to catch TemporalFailure to support cancellation scenarios.



#### Comments (1)

<details>
<summary><strong>ShubhSingh</strong> commented on 2021-03-14 08:01:43.000 UTC</summary>

hi @mfateev, is this issue still open?
I tried running booking saga and when exception occurs during bookFlight compensations run as shown below.

cancelling car reservation '953c8762-fc18-4e8a-8a2b-8fe468d0381e' for 'trip2'
cancelling hotel reservation '0c7428dd-5357-480c-845d-1c558d3e20d4' for 'trip2'

I didn't understand current and disconnected cancellation scope, 
does it mean that instead of exception if user deliberately cancels the flight after successful booking then compensations need to run? 
I might be wrong here so please excuse me.

I checked Saga.Options to disable behavior but there's only 2 configs available as of now: parallelCompensation and continueWithError

</details>


---

<a id="302"></a>

### #302: Print stacktrace coming from another language in the exception message

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/302 |
| **State** | OPEN |
| **Author** | wolfy-j (Anton Tsitou) |
| **Created** | 2021-01-11 18:50:37.000 UTC (4y 12m ago) |
| **Updated** | 2022-07-06 14:38:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

StackTrace is empty when failure comes from another SDK
Expected to see trace supplied in stackTrace proto message.

#### Comments (1)

<details>
<summary><strong>Spikhalskiy</strong> commented on 2022-07-06 14:37:29.000 UTC</summary>

Temporal can't deserialize a stacktrace from another language into a language-specific stack trace.
I will think about how we could make an original stacktrace readable and accessible in this scenario.

</details>


---

<a id="88"></a>

### #88: Customer needs to specify timeout for start workflow call

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/88 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-05-19 15:39:54.000 UTC (5y 7m ago) |
| **Updated** | 2023-05-23 06:27:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
From slack:

> Use-Case: If we can't start workflow for an operation in X secs, we have a fallback option. Now, the fallback option AND workflow can't run concurrently. Hence, it's important that the start workflow deterministically succeeds or fails within X secs.

## Actual Behavior
Currently retry options are not configurable.


#### Comments (1)

<details>
<summary><strong>vitarb</strong> commented on 2020-11-25 01:37:54.000 UTC</summary>

In go we have context, and we can specify deadline in the code. If we specify deadline for 3 seconds and workflow didn't start for 3 seconds, code will return. In java we don't have that ability. We need to be able to specify override to gRPC timeout in code.

</details>


---

<a id="57"></a>

### #57: Automatically reconnect to the service when it changes ip address

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/57 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-04-04 16:04:17.000 UTC (5y 9m ago) |
| **Updated** | 2023-05-23 06:16:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

During various failure/deployment scenarios especially in K8s the service IP might change. Currently a worker and client restart is needed to deal with it.

#### Comments (1)

<details>
<summary><strong>vitarb</strong> commented on 2020-11-25 01:20:31.000 UTC</summary>

1. We need to make sure that when new hosts are getting traffic.
2. When were restart the service different IPs will be behind DNS record and this may cause problems on the client side when the client tries to reconnect.

</details>


---

<a id="2755"></a>

### #2755: Support using Temporal failures in Nexus APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2755 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2026-01-05 21:37:57.000 UTC (3 days ago) |
| **Updated** | 2026-01-05 21:38:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

 Support using Temporal failures in Nexus APIs.

**Additional context**

https://github.com/temporalio/api/pull/682


---

<a id="2754"></a>

### #2754: Environment Configuration does not read the correct file path on macOS

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2754 |
| **State** | OPEN |
| **Author** | pvsone (Peter Sullivan) |
| **Created** | 2026-01-04 17:49:02.000 UTC (4 days ago) |
| **Updated** | 2026-01-04 17:49:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Per [the documentation](https://docs.temporal.io/develop/environment-configuration), the SDKs should read the toml config file on a mac from `$HOME/Library/Application Support/temporal/temporal.toml`.  However this path is not being read (the Linux path is being read instead `~/.config/temporalio/temporal.toml`)

## Actual Behavior
On a mac I expect the SDK to read the Environment Config profile from $HOME/Library/Application Support/temporal/temporal.toml

## Steps to Reproduce the Problem

  1. Create a Profile TOML file on a Mac using the CLI, which writes a file to: $HOME/Library/Application Support/temporal/temporal.toml
  1. Create a Java program that attempts to read the Profile using the Env Config APIs.  An error will be thrown that the profile cannot be found
  1. For fun, copy the profile file from the default, documented location ($HOME/Library/Application Support/temporal/temporal.toml) to ~/.config/temporalio/temporal.toml.  Run the Java program again.  The profile will now be successfully found and loaded

## Specifications

  - Version: Java SDK 1.32.1
  - Platform: Mac



---

<a id="2752"></a>

### #2752: OpenTracingWorkflowClientCallsInterceptor - support for updateWithStart is not present

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2752 |
| **State** | OPEN |
| **Author** | deepika-awasthi |
| **Created** | 2025-12-30 20:45:57.000 UTC (9 days ago) |
| **Updated** | 2025-12-30 20:46:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Traces are not propagated for the operation updateWithStart

header field is empty for the first event EVENT_TYPE_WORKFLOW_EXECUTION_STARTED
`=== Client UpdateWithStart Interceptor Called ===
Workflow ID: TestInterceptorUpdateWithStartWorkflow
Workflow Type: MyWorkflow
Update Name: updateNameAndTitle
Update ID: 9adc07b0-e8ef-48f5-b4ca-0d7a67e677a7
Start Header: {}
Start Header size: 0
`

https://javadoc.io/static/io.temporal/temporal-opentracing/1.32.0/io/temporal/opentracing/internal/OpenTracingWorkflowClientCallsInterceptor.html


---

<a id="2750"></a>

### #2750: Tests not passing: TestStatsReporter Flush not flushing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2750 |
| **State** | OPEN |
| **Author** | TbirdDuncan |
| **Created** | 2025-12-28 18:26:55.000 UTC (11 days ago) |
| **Updated** | 2025-12-28 19:04:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
I'd expect running ./gradlew test or build would pass on a clean main branch. That is not happening.
WorkflowFailedMetricsTests.java runs a @Before setup that contains: reporter.flush()
Some methods are experiencing failures when ran in conjunction with other tests, such as:
`runtimeExceptionWorkflowFailedMetric
java.lang.AssertionError: No metric 'temporal_workflow_failed [namespace=UnitTest|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|workflow_type=TestWorkflow]', reported metrics: 
 temporal_poller_start [namespace=UnitTest|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|worker_type=WorkflowWorker]
 temporal_worker_start [namespace=UnitTest|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|worker_type=WorkflowWorker]
 temporal_request [operation=DescribeNamespace]
 temporal_long_request [namespace=UnitTest|operation=GetWorkflowExecutionHistory]
 temporal_request []
 temporal_request [operation=GetSystemInfo]
 temporal_request [namespace=UnitTest|operation=StartWorkflowExecution|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|workflow_type=TestWorkflow]
 temporal_long_request [namespace=UnitTest|operation=PollWorkflowTaskQueue|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|worker_type=WorkflowWorker]
 temporal_workflow_task_queue_poll_succeed [namespace=UnitTest|task_queue=WorkflowTest-runtimeExceptionWorkflowFailedMetric-b83ed43d-267b-430a-8634-4ecc35a5ceb2|worker_type=WorkflowWorker]
	at org.junit.Assert.fail(Assert.java:89)
	at io.temporal.common.reporter.TestStatsReporter.assertCounter(TestStatsReporter.java:53)
	at io.temporal.common.reporter.TestStatsReporter.assertCounter(TestStatsReporter.java:45)
	at io.temporal.internal.worker.WorkflowFailedMetricsTests.runtimeExceptionWorkflowFailedMetric(WorkflowFailedMetricsTests.java:164)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:59)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:56)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)
	at io.temporal.testing.internal.SDKTestWorkflowRule$1.evaluate(SDKTestWorkflowRule.java:233)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:299)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:293)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at java.base/java.lang.Thread.run(Thread.java:1583)
workflowFailureMetricBenignApplicationError
java.lang.AssertionError: No metric 'temporal_workflow_failed [namespace=UnitTest|task_queue=WorkflowTest-workflowFailureMetricBenignApplicationError-20c969a7-bd07-49f5-b275-eea4eacb2533|workflow_type=ApplicationFailureWorkflow]', reported metrics: 
 temporal_worker_start [namespace=UnitTest|task_queue=WorkflowTest-workflowFailureMetricBenignApplicationError-20c969a7-bd07-49f5-b275-eea4eacb2533|worker_type=WorkflowWorker]
 temporal_request [operation=DescribeNamespace]
 temporal_poller_start [namespace=UnitTest|task_queue=WorkflowTest-workflowFailureMetricBenignApplicationError-20c969a7-bd07-49f5-b275-eea4eacb2533|worker_type=WorkflowWorker]
 temporal_request [namespace=UnitTest|operation=StartWorkflowExecution|task_queue=WorkflowTest-workflowFailureMetricBenignApplicationError-20c969a7-bd07-49f5-b275-eea4eacb2533|workflow_type=ApplicationFailureWorkflow]
 temporal_request [operation=GetSystemInfo]
 temporal_long_request [namespace=UnitTest|operation=PollWorkflowTaskQueue|task_queue=WorkflowTest-workflowFailureMetricBenignApplicationError-20c969a7-bd07-49f5-b275-eea4eacb2533|worker_type=WorkflowWorker]
	at org.junit.Assert.fail(Assert.java:89)
	at io.temporal.common.reporter.TestStatsReporter.assertCounter(TestStatsReporter.java:53)
	at io.temporal.common.reporter.TestStatsReporter.assertCounter(TestStatsReporter.java:45)
	at io.temporal.internal.worker.WorkflowFailedMetricsTests.workflowFailureMetricBenignApplicationError(WorkflowFailedMetricsTests.java:204)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:59)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:56)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)
	at io.temporal.testing.internal.SDKTestWorkflowRule$1.evaluate(SDKTestWorkflowRule.java:233)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:299)
	at org.junit.internal.runners.statements.FailOnTimeout$CallableStatement.call(FailOnTimeout.java:293)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at java.base/java.lang.Thread.run(Thread.java:1583)`

## Steps to Reproduce the Problem

  1. Run ./gradlew build, or ./gradlew test
 



---

<a id="2747"></a>

### #2747: @WorkflowImpl(workers = "...") should support Spring property placeholders like taskQueues does

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2747 |
| **State** | OPEN |
| **Author** | karunagoyal (Karuna Goyal) |
| **Created** | 2025-12-12 17:25:42.000 UTC (27 days ago) |
| **Updated** | 2025-12-12 17:25:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The @WorkflowImpl annotation has two attributes for specifying which worker to register a workflow with:
workers - by worker name
taskQueues - by task queue
Currently, only taskQueues supports Spring property placeholders (e.g., ${my.property}), while workers does not. This inconsistency causes issues when sharing workflow modules across multiple services that need different worker names.

**Current Behavior**
In WorkersTemplate.java:
taskQueues - ✅ Resolves placeholders:
workers - ❌ Does NOT resolve placeholders:

**Expected Behavior**
Both workers and taskQueues should support Spring property placeholders for consistency:

**Use Case**
We have a shared workflow module used by multiple Spring Boot services. Each service configures its own worker name in application.yaml. We want to use:
Currently, this fails because the placeholder is not resolved, causing:
Workaround
Using taskQueues with a placeholder works:
However, this is inconsistent with the workers attribute behavior.

**Proposed Fix**
Add placeholder resolution in configureWorkflowImplementationsByWorkerName(), configureActivityBeansByWorkerName(), and configureNexusServiceBeansByWorkerName() methods in WorkersTemplate.java.


---

<a id="2745"></a>

### #2745: WorkerOptions isUsingVirtualThreadsOnWorkflowWorker issue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2745 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2025-12-08 19:43:12.000 UTC (1 months ago) |
| **Updated** | 2025-12-08 19:43:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://github.com/temporalio/sdk-java/blob/master/temporal-sdk/src/main/java/io/temporal/worker/WorkerOptions.java#L870-L872

returning usingVirtualThreadsOnActivityWorker currently


---

<a id="2726"></a>

### #2726: Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2726 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:22:34.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:22:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Users want to override the target version on a workflow, especially when doing pre-deployment testing. This should work the same as it does when creating a Workflow from a client.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



---

<a id="2716"></a>

### #2716: Worker Heartbeating

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2716 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-28 01:50:50.000 UTC (2 months ago) |
| **Updated** | 2025-10-28 01:50:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**
Implement worker heartbeating, which is sent via a new background nexus worker.

Basically need to design a Java version of https://github.com/temporalio/sdk-core/pull/953 and https://github.com/temporalio/sdk-core/pull/1038

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



---

<a id="2661"></a>

### #2661: Set history size and suggest continue as new on task start attributes in test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2661 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-15 20:37:45.000 UTC (3 months ago) |
| **Updated** | 2025-09-25 23:14:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

**Describe the solution you'd like**

Populate `WorkflowTaskStartedEventAttributes.suggest_continue_as_new` and `WorkflowTaskStartedEventAttributes.history_size_bytes` on the test server. The former can be just the Temporal server default (doesn't need to be configurable at this time like the server's is).


---

<a id="2656"></a>

### #2656: Springboot Multi Namespace: Add annotation to specify Namespace a bean belongs too

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2656 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-09-08 22:15:38.000 UTC (4 months ago) |
| **Updated** | 2025-09-08 22:18:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Users would like to assign certain interceptors/customizers to certain namespaces in a multi namespace setup. Currently users can do this but they must specify it by prefixing the bean name with the appropriate namespace.

**Describe the solution you'd like**
A Java annotation or interface may be more idiomatic in Springboot

**Describe alternatives you've considered**
Keep the customization by bean name prefix.

***Related***

https://github.com/temporalio/sdk-java/issues/2638




---

<a id="2655"></a>

### #2655: Testing server continue-as-new doesn't carry memo/search attributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2655 |
| **State** | OPEN |
| **Author** | jasonmchan (Jason Chan) |
| **Created** | 2025-09-08 17:45:38.000 UTC (4 months ago) |
| **Updated** | 2025-09-25 23:14:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
When using ContinueAsNew with the testing server, the requested Memo and Search Attributes should be propagated into the new workflow execution.

This is what the production Temporal server does.

## Actual Behavior
The memo and search attributes in the command are dropped. See [here](https://github.com/temporalio/sdk-java/blob/31d044cfb67a29f456d0f699296e40cd4f05eb1e/temporal-test-server/src/main/java/io/temporal/internal/testservice/TestWorkflowService.java?plain=1#L1531-L1571) for where the start request is constructed—the memo and search attributes are not extracted from the `ContinueAsNewWorkflowExecutionCommandAttributes`.

## Steps to Reproduce the Problem
  1. Start a testing server
  2. Run a workflow that uses continue-as-new with search attributes / memo

## Specifications
  - Version: v1.31.0
  - Platform: all



---

<a id="2650"></a>

### #2650: Ensure tests exist to confirm custom slot supplier slot info has proper fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2650 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-05 12:30:41.000 UTC (4 months ago) |
| **Updated** | 2025-09-05 12:30:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/672


---

<a id="2626"></a>

### #2626: Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2626 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:32:53.000 UTC (4 months ago) |
| **Updated** | 2025-08-15 14:32:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/652


---

<a id="2620"></a>

### #2620: OpenTracingClientInterceptor add support for updateWithStart

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2620 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2025-08-12 12:34:57.000 UTC (4 months ago) |
| **Updated** | 2025-08-12 12:34:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Traces are not propagated for the operation updateWithStart

`header` field is empty for the first event EVENT_TYPE_WORKFLOW_EXECUTION_STARTED 




---

<a id="2606"></a>

### #2606: TestWorkflowMutableStateImpl - race condition between TimerFired event and CancelTimer command

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2606 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2025-07-27 17:32:27.000 UTC (5 months ago) |
| **Updated** | 2025-09-26 06:39:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

[processCancelTimer](https://github.com/temporalio/sdk-java/blob/master/temporal-test-server/src/main/java/io/temporal/internal/testservice/TestWorkflowMutableStateImpl.java#L979-L983) throws invalid_argument exception here if timer is null
this timer however would have been already removed if this same workflow task receives a TIMER_FIRED event for this same timer:

https://github.com/temporalio/sdk-java/blob/master/temporal-test-server/src/main/java/io/temporal/internal/testservice/TestWorkflowMutableStateImpl.java#L1437

I think on cancel command, we should only throw if we check first that if timer is null if it was actually removed in same workflow task.

Issue does not allow workflow in test to complete / make progress.

Full error can look like:

[Workflow Executor taskQueue="flakyservice", namespace="default": 1] WARN io.temporal.internal.worker.WorkflowWorker - Failure while reporting workflow progress to the server. If seen continuously the workflow might be stuck. WorkflowId=flaky, RunId=6d9e3f8a-7a73-4aaf-8cdd-02a3cee750f1, startedEventId=22
io.grpc.StatusRuntimeException: INVALID_ARGUMENT: invalid history builder state for action
	at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:268)
	at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:249)
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:167)
	at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.respondWorkflowTaskCompleted(WorkflowServiceGrpc.java:6079)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.lambda$sendTaskCompleted$0(WorkflowWorker.java:557)
	at io.temporal.internal.retryer.GrpcSyncRetryer.retry(GrpcSyncRetryer.java:49)
	at io.temporal.internal.retryer.GrpcRetryer.retryWithResult(GrpcRetryer.java:40)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.sendTaskCompleted(WorkflowWorker.java:552)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:409)
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:336)
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$1(PollTaskExecutor.java:76)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
	at java.base/java.lang.Thread.run(Thread.java:1583)


Still working on a reliable test for this. @Quinn-With-Two-Ns ping me and can point you to slack there where there is a reproduce that you may need to run a number of times to run into this.


---

<a id="2598"></a>

### #2598: Allow specifying activity options for specific activity call

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2598 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-07-15 15:37:05.000 UTC (5 months ago) |
| **Updated** | 2025-07-15 15:37:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I would like to call an activity method (or child workflow method or nexus operation) with specific options that are different from the options I used to create the stub.

**Describe the solution you'd like**
Add an API to support calling an activity method with an option override

**Describe alternatives you've considered**
Create a new stub for each call



---

<a id="2592"></a>

### #2592: Python Nexus tests failing under Java test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2592 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-07-10 23:02:28.000 UTC (6 months ago) |
| **Updated** | 2025-07-10 23:06:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Repro

First locate the test referenced below and remove the skipping.

```
cd sdk-python
uv sync
uv run poe build-develop
uv run pytest -E time-skipping -s 'tests/nexus/test_workflow_caller.py::test_workflow_run_operation_happy_path'
```

```
tests/nexus/test_workflow_caller.py 2025-07-10T22:52:12.848145Z  WARN temporal_client::retry: gRPC call respond_workflow_task_completed retried 5 times error=Status { code: Internal, message: "Generated message class \"io.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest\" missing method \"getNamespace\".", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-07-10T22:52:13.744468Z  WARN temporal_client::retry: gRPC call respond_workflow_task_completed retried 6 times error=Status { code: Internal, message: "Generated message class \"io.temporal.api.workflowservice.v1.StartWorkflowExecutionRequest\" missing method \"getNamespace\".", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
```

These warnings do not occur under the real server; the test eventually times out.


---

<a id="2586"></a>

### #2586: Time skipping server drops headers in workflow signal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2586 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-07-08 17:36:26.000 UTC (6 months ago) |
| **Updated** | 2025-09-25 23:16:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Headers set in client interceptor appear in inbound workflow interceptor

## Actual Behavior
Headers are blank

## Steps to Reproduce the Problem
Using python sdk:
```
class HeaderWorkerInterceptor(temporalio.worker.Interceptor):
    def workflow_interceptor_class(
        self, input: temporalio.worker.WorkflowInterceptorClassInput
    ) -> Optional[Type[temporalio.worker.WorkflowInboundInterceptor]]:
        return HeaderWorkflowInboundInterceptor


class HeaderWorkflowInboundInterceptor(temporalio.worker.WorkflowInboundInterceptor):
    def init(self, outbound: temporalio.worker.WorkflowOutboundInterceptor) -> None:
        super().init(HeaderWorkflowOutboundInterceptor(outbound))

    async def handle_signal(self, input: HandleSignalInput) -> None:
        assert input.headers["foo"].data == b"bar"
        await super().handle_signal(input)


class HeaderWorkflowOutboundInterceptor(temporalio.worker.WorkflowOutboundInterceptor):
    def start_activity(
        self, input: temporalio.worker.StartActivityInput
    ) -> workflow.ActivityHandle:
        # Add a header to the outbound activity call
        input.headers = {"foo": Payload(data=b"bar")}
        return super().start_activity(input)


class HeaderClientInterceptor(temporalio.client.Interceptor):
    def __init__(self, header: Payload):
        self.header = header
        super().__init__()

    def intercept_client(
        self, next: temporalio.client.OutboundInterceptor
    ) -> temporalio.client.OutboundInterceptor:
        return HeaderClientOutboundInterceptor(
            super().intercept_client(next), self.header
        )


class HeaderClientOutboundInterceptor(temporalio.client.OutboundInterceptor):
    def __init__(
        self, next: temporalio.client.OutboundInterceptor, header: Payload
    ) -> None:
        self.header = header
        super().__init__(next)

    async def signal_workflow(self, input: SignalWorkflowInput) -> None:
        input.headers = {"foo": self.header.__deepcopy__()}
        return await super().signal_workflow(input)



@pytest.mark.parametrize(
    "header_codec_behavior",
    [
        HeaderCodecBehavior.NO_CODEC,
        HeaderCodecBehavior.CODEC,
        HeaderCodecBehavior.WORKFLOW_ONLY_CODEC,
    ],
)
async def test_workflow_headers_with_codec(
    client: Client, env: WorkflowEnvironment, header_codec_behavior: HeaderCodecBehavior
):
    header_payload = Payload(data=b"bar")
    if header_codec_behavior == HeaderCodecBehavior.WORKFLOW_ONLY_CODEC:
        header_payload = (await SimpleCodec().encode([header_payload]))[0]

    # Make client with this codec and run a couple of existing tests
    config = client.config()
    config["data_converter"] = DataConverter(payload_codec=SimpleCodec())
    config["interceptors"] = [HeaderClientInterceptor(header_payload)]
    config["header_codec_behavior"] = header_codec_behavior
    client = Client(**config)

    global global_header_codec_behavior
    global_header_codec_behavior = header_codec_behavior

    async with new_worker(
        client,
        SimpleActivityWorkflow,
        SignalAndQueryWorkflow,
        activities=[say_hello],
        interceptors=[HeaderWorkerInterceptor()],
    ) as worker:
        handle = await client.start_workflow(
            SignalAndQueryWorkflow.run,
            id=f"workflow-{uuid.uuid4()}",
            task_queue=worker.task_queue,
        )

        # Simple signals and queries
        await handle.signal(SignalAndQueryWorkflow.signal1, "some arg")
        assert "signal1: some arg" == await handle.query(
            SignalAndQueryWorkflow.last_event
        )

        async for e in handle.fetch_history_events():
            if e.HasField("workflow_execution_signaled_event_attributes"):
                header = e.workflow_execution_signaled_event_attributes.header.fields[
                    "foo"
                ]
                if header_codec_behavior == HeaderCodecBehavior.CODEC:
                    assert "simple-codec" in header.metadata

```
poe test -k "test_workflow_headers_with_codec" --workflow-environment time-skipping

## Specifications

  - Version:
  - Platform:



---

<a id="2582"></a>

### #2582: Null cause in Nexus HandlerException is not handled correctly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2582 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-07-05 22:53:44.000 UTC (6 months ago) |
| **Updated** | 2025-07-06 13:40:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In a Nexus operation, `HandlerException` has a constructor
```java
  public HandlerException(ErrorType errorType, @Nullable Throwable cause)
```
inviting operation authors to throw a `HandlerException` with no cause, such as

```java
throw new HandlerException(HandlerException.ErrorType.NOT_FOUND, (Throwable) null);
```

But this crashes at https://github.com/temporalio/sdk-java/blob/f919926a2d67c10c34fee4b19eed1c605d4223a4/temporal-sdk/src/main/java/io/temporal/common/converter/PayloadAndFailureDataConverter.java#L136-L145



---

<a id="2538"></a>

### #2538: [Feature Request]  Add counter metric for unaccessed failed promises

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2538 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2025-05-27 20:38:43.000 UTC (7 months ago) |
| **Updated** | 2025-05-27 20:50:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://github.com/temporalio/sdk-java/blob/master/temporal-sdk/src/main/java/io/temporal/internal/sync/DeterministicRunnerImpl.java#L336-L347

Would be useful to have a counter metric for this. Would allow detection so can fix in code if was oversight not to wait on promise,or ignore warning via something like

promise.exceptionally(e->null);
or promise.handle((ex, failure) -> null);



---

<a id="2521"></a>

### #2521: Workflow instance should be accessible in test environment for simple assertion

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2521 |
| **State** | OPEN |
| **Author** | madhav2302 (Madhav Sodhani) |
| **Created** | 2025-05-13 20:54:07.000 UTC (8 months ago) |
| **Updated** | 2025-05-13 20:54:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I would like to write unit tests on workflow code, and would like to access workflow for assertions in test env. 

eg. 
```
class WorkflowImpl implements Workflow {
    public String value = "something";

//// more workflow code
}
```

and the value is updated in the workflow code. I would like to add access the values. 

Currently there is no easy way to access the workflow object, as we simply register workflow class as type

**Describe the solution you'd like**
I would like to access the workflow object at any point in time for test env, and it should provide me an object of workflow with latest state of workflow.

Like

```
var workflowImpl = (WorkflowImpl) testWorkflowClient.getWorkflowObject("workflowId", "workflowRunId");
assertThat(workflowImpl.value, is("some-assertion-value"));
```

**Describe alternatives you've considered**
The other method we have considered is to add a QueryMethod in the workflow but we don't want to add QueryMethod in production code at all. 

We can surely do it for tests as well as mentioned at https://temporalio.slack.com/archives/CTT84KXK9/p1747167261307199?thread_ts=1747086843.705119&cid=CTT84KXK9, but it can cause issues when you have multiple variables, and adding QueryMethod for each a lot, and managing QueryMethod for testing can be cumbersome. 

**Additional context**
Discussed this previously at Github - https://temporalio.slack.com/archives/CTT84KXK9/p1747086843705119



---

<a id="2480"></a>

### #2480: Memo-s not present in listOpenWorkflowExecutions when running with temporal-testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2480 |
| **State** | OPEN |
| **Author** | rpost (Radek Postołowicz) |
| **Created** | 2025-04-17 08:16:27.000 UTC (8 months ago) |
| **Updated** | 2025-05-26 14:45:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

I'm using temporal-testing and when I query running workflows:

```java
        List<WorkflowExecutionInfo> executions = client.getWorkflowServiceStubs()
                .blockingStub()
                .listOpenWorkflowExecutions(
                        ListOpenWorkflowExecutionsRequest.newBuilder()
                                .setNamespace("default")
                                .build()
                )
                .getExecutionsList();

        executions.forEach(execution -> {
            System.err.println(execution.getExecution().getWorkflowId());
            System.err.println(execution.getMemo());
        });
```

memo is empty despite being filled in workflow.

## Actual Behavior

The same piece of code run with `setUseExternalService(true)` and `temporal server start-dev` running outputs memo-s as expected. 

## Steps to Reproduce the Problem

I prepared reproducer project: https://github.com/rpost/temporal-test-memo/blob/main/src/test/java/rpost/MemoTest.java

## Specifications

  - Version: io.temporal:temporal-testing:1.28.4



---

<a id="2469"></a>

### #2469: [Java] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2469 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-04-02 21:08:14.000 UTC (9 months ago) |
| **Updated** | 2025-04-02 21:16:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments, as a follow-up to https://github.com/temporalio/sdk-java/issues/2458


---

<a id="2393"></a>

### #2393: Add `patched()` and `deprecatePatch()` APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2393 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:38:05.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:38:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add the `boolean Workflow.patched(String patchId, boolean memoized)` and `Workflow.deprecatePatch(String patchId, boolean memoized)` APIs. Refer to Core's implementation (once it is ready).

- (Maybe) Deprecate the `GetVersion` API.

See temporalio/features#591 for details.


---

<a id="2359"></a>

### #2359: Clarify `UnableToAcquireLockException`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2359 |
| **State** | OPEN |
| **Author** | GSmithApps (Grant) |
| **Created** | 2025-01-07 10:51:25.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 10:59:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
[This Slack thread](https://temporalio.slack.com/archives/C05JRT1GKEE/p1735812460229109?thread_ts=1735802152.698209&cid=C05JRT1GKEE): a user had a question about this Exception, and they asked Kapa, and Kapa gave a wrong answer (which Tiho corrected 🙏 ). I suspect Kapa could have given better direction if this exception message contained the info that Tiho corrected with.

**Describe the solution you'd like**
I ported Tiho's response over to the code and submitted a [PR](https://github.com/temporalio/sdk-java/pull/2360)

**Describe alternatives you've considered**
I recognize that the message I'm putting here is less general than the one that was there previously. If any of it is incorrect in more general scenarios, please correct me 👍 👍 

**Additional context**
None



---

<a id="2333"></a>

### #2333: `taskTimeoutWillRescheduleTheTaskOnTheGlobalList ` on the test server is flaky

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2333 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-11-28 17:28:47.000 UTC (1y 1m ago) |
| **Updated** | 2025-05-16 22:41:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
`taskTimeoutWillRescheduleTheTaskOnTheGlobalList ` should always pass on the test server

## Actual Behavior
`taskTimeoutWillRescheduleTheTaskOnTheGlobalList ` doesn't always pass on the test server



---

<a id="2307"></a>

### #2307: Removing a `Workflow.GetVersion` call can cause NDE if there are multiple parallel workflow threads running.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2307 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-11-04 23:06:39.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-05 03:06:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Removing a `Workflow.GetVersion` call should never cause a NDE

## Actual Behavior
Removing a `Workflow.GetVersion` call can cause a NDE if there are multiple workflow threads running.


## Steps to Reproduce the Problem

```
public class GetVersionMultithreadingRemoveTest {

  private static boolean hasReplayed;

  @Rule
  public SDKTestWorkflowRule testWorkflowRule =
      SDKTestWorkflowRule.newBuilder()
          .setWorkflowTypes(TestGetVersionWorkflowImpl.class)
          .setActivityImplementations(new TestActivitiesImpl())
          // Forcing a replay. Full history arrived from a normal queue causing a replay.
          .setWorkerOptions(
              WorkerOptions.newBuilder()
                  .setStickyQueueScheduleToStartTimeout(Duration.ZERO)
                  .build())
          .build();

  @Test
  public void testGetVersionMultithreadingRemoval() {
    TestWorkflow1 workflowStub =
        testWorkflowRule.newWorkflowStubTimeoutOptions(TestWorkflow1.class);
    String result = workflowStub.execute(testWorkflowRule.getTaskQueue());
    assertTrue(hasReplayed);
    assertEquals("activity1", result);
  }

  public static class TestGetVersionWorkflowImpl implements TestWorkflow1 {

    @Override
    public String execute(String taskQueue) {
      VariousTestActivities testActivities =
          Workflow.newActivityStub(
              VariousTestActivities.class,
              SDKTestOptions.newActivityOptionsForTaskQueue(taskQueue));

      Async.procedure(
          () -> {
            Workflow.sleep(1000);
          });

      // Test removing a version check in replaying code with an additional thread running.
      if (!WorkflowUnsafe.isReplaying()) {
        int version = Workflow.getVersion("changeId", 1, 2);
        assertEquals(version, 2);
      } else {
        hasReplayed = true;
      }
      String result =
          "activity" + testActivities.activity1(1); // This is executed in non-replay mode.
      return result;
    }
  }
}
```

This happens because ` Workflow.getVersion` causes the current thread to block so when it is removed the order of execution can change.

## Specifications

  - Version: All
  
  The current workaround is to not remove the `Workflow.getVersion` call



---

<a id="2283"></a>

### #2283: Auto-skip time in time-skipping testing environment when waiting on update result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2283 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-21 16:29:49.000 UTC (1y 2m ago) |
| **Updated** | 2025-06-08 18:33:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

We auto-skip time when waiting on workflow result, we need to do the same when waiting on update result. See https://github.com/temporalio/features/issues/551.


---

<a id="2246"></a>

### #2246: Time-skipping past activity’s startToCloseTimeout causes worker not to close

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2246 |
| **State** | OPEN |
| **Author** | ikonst (Ilya Priven) |
| **Created** | 2024-10-01 19:03:16.000 UTC (1y 3m ago) |
| **Updated** | 2025-06-02 15:26:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

`worker.runUntil` returns shortly after workflow ends

## Actual Behavior

- `worker.runUntil` usually hangs, ostensibly because it fails to wait for the abandoned activity
- Logged SDK warning:
  ```
  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(<activity's token>) details=Status { code: NotFound, message: "invalid activityID or activity already timed out or invoking workflow is completed", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
  ```

## Steps to Reproduce the Problem

Pardon my TypeScript...

Assume activity `foo`:
```ts
export async function foo() {
}
```
and workflow `workflow`:
```ts
const { foo } = proxyActivities<typeof activities>({ startToCloseTimeout: "60 seconds" });

export async function workflow() {
  await foo();
}
```

And let this be the test:
```ts
test("foo", async () => {
  testEnv = await TestWorkflowEnvironment.createTimeSkipping();
  worker = Worker.create({
    connection: testEnv.nativeConnection,
    ...
  });

  let waited = false;
  const worker = await createWorker({
    activities: {
      foo: async function() { 
        if (!waited) {
          await testEnv.sleep("61 seconds");
          waited = true;
        }
      }
    },
  });
  
  await worker.runUntil(testEnv.client.workflow.execute(workflow, {}));
  // ^ gets stuck here:
});
```

## Specifications

  - Version: TypeScript SDK 1.11.1
  - Platform: MacOS

## Discussion

- Original Slack thread: https://temporalio.slack.com/archives/C01DKSMU94L/p1727789446627909


---

<a id="2232"></a>

### #2232: Fix inconsistency in javadoc for WorkflowInterface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2232 |
| **State** | OPEN |
| **Author** | mackler (Adam Maklér) |
| **Created** | 2024-09-22 08:12:29.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-22 08:12:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The example code given in the documentation for the [`@WorkflowInterface`](https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/io/temporal/workflow/WorkflowInterface.html) annotation would not behave as described in the accompanying text.

See [this forum post](https://community.temporal.io/t/trying-to-understand-example-in-the-workflowinterface-annotation-documentation/13559/2) for background details.


---

<a id="2229"></a>

### #2229: Add TestNexusEnvironment similar to TestActivityEnvironment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2229 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-09-19 14:26:20.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-19 14:26:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I would like to test Nexus operations without a workflow

**Describe the solution you'd like**
Add TestNexusEnvironment similar to [TestActivityEnvironment](https://javadoc.io/doc/io.temporal/temporal-testing/latest/io/temporal/testing/TestActivityEnvironment.html)

**Describe alternatives you've considered**
Write a short workflow to invoke the operation




---

<a id="2160"></a>

### #2160: Child workflow cancellation can trigger SDK event loop without a WFT Started

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2160 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-07-30 15:25:22.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-30 15:25:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Child workflow cancellation would not trigger the event loop without a WFT Started

## Actual Behavior

Child workflow cancellation can trigger SDK event loop without a WFT Started

## Steps to Reproduce the Problem

see: https://github.com/temporalio/sdk-java/issues/2155

https://github.com/temporalio/sdk-java/blob/eabd51fbdc62a7435c8f4d8dc1ac24da26f6022d/temporal-sdk/src/main/java/io/temporal/internal/statemachines/WorkflowStateMachines.java#L884


Fixing this would be a non deterministic change so we will need to version this change.



---

<a id="2149"></a>

### #2149: Revisit local activity backpressure logic w/ no-max slot suppliers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2149 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-07-19 21:03:46.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-19 21:03:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Before slot supplier introduction, there was a backpressure semaphore for LAs sized at 2x the number of concurrent executions which, when the limit is reached, fails the WFT.

After suppliers, this behavior is the same, but for suppliers with no defined upper-limit on slots, there is no way to pick a reasonable number, so we default to 100. See if there's anything better to be done here.


---

<a id="2148"></a>

### #2148: Better toString representations on service stub options

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2148 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-17 19:40:18.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-17 19:40:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

* `WorkflowServiceStubsOptions.toString` only includes direct fields not inherited ones
* `OperatorServiceStubsOptions.toString` and `CloudServiceStubsOptions.toString` (as of #2146) do not exist


---

<a id="2127"></a>

### #2127: Test server sometimes fails to include signal in first WFT

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2127 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-06-26 12:38:09.000 UTC (1y 6m ago) |
| **Updated** | 2024-11-20 20:59:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Using the Python SDK, I did

1. `handle = await start_workflow()`
2. `await handle.signal()`
3. run worker

## Expected Behavior
I expect Python to process a `signal_workflow` job and then a `start_workflow` in the activation for the first WFT.

## Actual Behavior
Nearly always, we see the expected behavior. Occasionally (on `macos-intel` builds) Python processes a `start_workflow` activation job first. Almost certainly this is because the first WFT has no signal in it, although I have not yet investigated further and actually proved that (the test in question exits immediately if it sees `start_workflow` before `signal_workflow`).

## Steps to Reproduce the Problem
Run the `sdk-python` test `tests/worker/test_workflow.py::test_unfinished_signal_handler_with_workflow_failure applying job` under `--workflow-environment=time-skipping` multiple times on a GitHub `macos-intel` runner until you see this failure.

Note: There are two variants of the python test; one involves the workflow throwing `ApplicationError`, and the other involves the client sending a cancel request, again before starting the worker. Interestingly, I've only seen the error described in this ticket for the  `ApplicationError` variant of the test, suggesting that handling the cancel request somehow causes the test server to include all of them in the first WFT, whereas without the cancel request sometimes the signal event is omitted.

See failures in build history of https://github.com/temporalio/sdk-python/pull/556


---

<a id="2077"></a>

### #2077: TestWorkflowEnvironment, TestWorkflowRule, TestWorkflowExtension - auto-register search attributes from WorkflowStub 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2077 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2024-05-24 15:45:04.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-24 15:46:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Feature request to auto-register search attributes from WorkflowStub created by test envWorkflowClient

Currently each search attribute has to be explicitly registered with test env before using it in tests


---

<a id="2051"></a>

### #2051: Ability to specify activity timeouts via annotation in Java SDK

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2051 |
| **State** | OPEN |
| **Author** | luispollo (Luis Pollo) |
| **Created** | 2024-05-03 16:32:19.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-03 18:46:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
In the Java SDK, you have an `@ActivityInterface` with multiple `@ActivityMethod`s. The latter is the actual unit of execution. However, you specify retry and timeout options on the activity stub, which is based on the interface, so in order to have specific config for each activity you have to go out of your way and break up the interface into small pieces, which kinda defeats one of the nicest features of Temporal which is to just program your service as if it were native code. You can configure specific settings per method, but you have to use strings for activity names instead of strongly typed constructs, and still the activity-stub level config takes precedence.

Recently, I became aware of the `@MethodRetry` annotation, which is great, but it only allows you to specify retry options, not timeouts, so it falls short of addressing the basic issue.

**Describe the solution you'd like**
Either an additional set of parameters in `@MethodRetry` or a new annotation (e.g. `@ActivityTimeouts`) that allows me to specify activity timeouts (start-to-close and schedule-to-close) at the method level.

**Describe alternatives you've considered**
Specifying per-activity config using [WorkflowImplementationOptions](https://docs.temporal.io/dev-guide/java/foundations#required-timeout), but you have to use strings for activity names instead of strongly typed constructs, and still the activity-stub level config takes precedence.

**Additional context**
N/A.



---

<a id="2031"></a>

### #2031: Add SpringBoot integration for `SlotSupplier`s

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2031 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-04-10 18:39:45.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-10 18:39:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Add sprintboot config options to configure slot suppliers as introduced in https://github.com/temporalio/sdk-java/pull/2014


---

<a id="2030"></a>

### #2030: Add `PauseableSlotSupplier`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2030 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-04-10 18:38:37.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-10 18:38:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Add an implementation of `SlotSupplier` that wraps another implementation adding a `pause()` function. See https://github.com/temporalio/proposals/blob/master/all-sdk/autotuning.md for more on how it should work.


---

<a id="2026"></a>

### #2026: [SpringBoot] Add graceful shutdown wait time as property

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2026 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-04-05 23:54:48.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-05 23:54:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently when the worker factory is shutdown by Springboot on close there is no wait to for the shutdown to finish. This can cause the application to close before all inflight tasks are finished.

**Describe the solution you'd like**
Add a property that will control how long the workerfactory waits before continuing shutdown.

**Describe alternatives you've considered**
Users can manually work around this by adding a hook to the context close event and manually shutting down the factory and waiting.

**Additional context**




---

<a id="2017"></a>

### #2017: [Feature Request] Use macOS M1/ARM runners for all SDK CI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/2017 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-03-26 17:52:08.000 UTC (1y 9m ago) |
| **Updated** | 2024-11-22 05:51:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See: https://github.com/temporalio/features/issues/396




---

<a id="1987"></a>

### #1987: Configurable workflow exception types at the worker level

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1987 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-12 14:25:38.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-12 14:28:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/322. May be determined we don't need this and closed.


---

<a id="1981"></a>

### #1981: Add source code to shaded library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1981 |
| **State** | OPEN |
| **Author** | longquanzheng (Quanzheng Long) |
| **Created** | 2024-02-01 22:59:54.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-01 22:59:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
No source code available to read in IDE for java docs

**Describe the solution you'd like**
Just publish the jar with source code

**Describe alternatives you've considered**
I have to use browser/online java docs which is very frustrating 

**Additional context**
N/A



---

<a id="1952"></a>

### #1952: ktlint-0.47.1.jar: 2 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1952 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-12-06 06:45:33.000 UTC (2y 1m ago) |
| **Updated** | 2023-12-14 22:30:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>ktlint-0.47.1.jar</b></p></summary>

<p></p>
<p>Path to dependency file: /temporal-kotlin/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-classic/1.3.0/525b10f014422eb84e157e400960ca921949aa2a/logback-classic-1.3.0.jar</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (ktlint version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2023-6481](https://www.mend.io/vulnerability-database/CVE-2023-6481) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | logback-core-1.3.0.jar | Transitive | N/A* | &#10060; |
| [CVE-2023-6378](https://www.mend.io/vulnerability-database/CVE-2023-6378) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | logback-classic-1.3.0.jar | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2023-6481</summary>


###  Vulnerable Library - <b>logback-core-1.3.0.jar</b></p>

<p>logback-core module</p>
<p>Library home page: <a href="http://logback.qos.ch">http://logback.qos.ch</a></p>
<p>Path to dependency file: /temporal-kotlin/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-core/1.3.0/9718166ba4834f1e9585ba9212c93c04baec511d/logback-core-1.3.0.jar</p>
<p>

Dependency Hierarchy:
  - ktlint-0.47.1.jar (Root Library)
    - logback-classic-1.3.0.jar
      - :x: **logback-core-1.3.0.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A serialization vulnerability in logback receiver component part of 
logback version 1.4.13, 1.3.13 and 1.2.12 allows an attacker to mount a Denial-Of-Service 
attack by sending poisoned data.



<p>Publish Date: 2023-12-04
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-6481>CVE-2023-6481</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://www.cve.org/CVERecord?id=CVE-2023-6481">https://www.cve.org/CVERecord?id=CVE-2023-6481</a></p>
<p>Release Date: 2023-12-04</p>
<p>Fix Resolution: ch.qos.logback:logback-core:1.2.13,1.3.14,1.4.14</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2023-6378</summary>


###  Vulnerable Library - <b>logback-classic-1.3.0.jar</b></p>

<p>logback-classic module</p>
<p>Library home page: <a href="http://logback.qos.ch">http://logback.qos.ch</a></p>
<p>Path to dependency file: /temporal-kotlin/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-classic/1.3.0/525b10f014422eb84e157e400960ca921949aa2a/logback-classic-1.3.0.jar</p>
<p>

Dependency Hierarchy:
  - ktlint-0.47.1.jar (Root Library)
    - :x: **logback-classic-1.3.0.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A serialization vulnerability in logback receiver component part of 
logback version 1.4.11 allows an attacker to mount a Denial-Of-Service 
attack by sending poisoned data.



<p>Publish Date: 2023-11-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-6378>CVE-2023-6378</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://logback.qos.ch/news.html#1.3.12">https://logback.qos.ch/news.html#1.3.12</a></p>
<p>Release Date: 2023-11-29</p>
<p>Fix Resolution: ch.qos.logback:logback-classic:1.3.12,1.4.12</p>

</p>

<p></p>

</details>


---

<a id="1951"></a>

### #1951: spring-boot-dependencies-2.7.12.pom: 1 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1951 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-12-06 06:45:31.000 UTC (2y 1m ago) |
| **Updated** | 2023-12-14 22:30:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>spring-boot-dependencies-2.7.12.pom</b></p></summary>

<p></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-core/1.2.12/1d8e51a698b138065d73baefb4f94531faa323cb/logback-core-1.2.12.jar</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (spring-boot-dependencies version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2023-6481](https://www.mend.io/vulnerability-database/CVE-2023-6481) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | logback-core-1.2.12.jar | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2023-6481</summary>


###  Vulnerable Library - <b>logback-core-1.2.12.jar</b></p>

<p>logback-core module</p>
<p>Library home page: <a href="http://logback.qos.ch">http://logback.qos.ch</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-core/1.2.12/1d8e51a698b138065d73baefb4f94531faa323cb/logback-core-1.2.12.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-dependencies-2.7.12.pom (Root Library)
    - :x: **logback-core-1.2.12.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A serialization vulnerability in logback receiver component part of 
logback version 1.4.13, 1.3.13 and 1.2.12 allows an attacker to mount a Denial-Of-Service 
attack by sending poisoned data.



<p>Publish Date: 2023-12-04
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-6481>CVE-2023-6481</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://www.cve.org/CVERecord?id=CVE-2023-6481">https://www.cve.org/CVERecord?id=CVE-2023-6481</a></p>
<p>Release Date: 2023-12-04</p>
<p>Fix Resolution: ch.qos.logback:logback-core:1.2.13,1.3.14,1.4.14</p>

</p>

<p></p>

</details>


---

<a id="1920"></a>

### #1920: Support bind address for test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1920 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-01 12:26:40.000 UTC (2y 2m ago) |
| **Updated** | 2024-11-20 21:00:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Need to be able to set bind address (e.g. for 127.0.0.1) instead of assuming all addresses


---

<a id="1890"></a>

### #1890: spring-boot-starter-2.7.12.jar: 9 vulnerabilities (highest severity is: 9.8)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1890 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-10-10 17:07:38.000 UTC (2y 3m ago) |
| **Updated** | 2024-02-29 17:00:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>spring-boot-starter-2.7.12.jar</b></p></summary>

<p></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (spring-boot-starter version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2022-1471](https://www.mend.io/vulnerability-database/CVE-2022-1471) | <img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> Critical | 9.8 | snakeyaml-1.30.jar | Transitive | 3.2.0 | &#9989; |
| [CVE-2023-6378](https://www.mend.io/vulnerability-database/CVE-2023-6378) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | logback-classic-1.2.12.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2022-25857](https://www.mend.io/vulnerability-database/CVE-2022-25857) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2023-34055](https://www.mend.io/vulnerability-database/CVE-2023-34055) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 6.5 | spring-boot-2.7.12.jar | Transitive | 2.7.18 | &#9989; |
| [CVE-2022-41854](https://www.mend.io/vulnerability-database/CVE-2022-41854) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 6.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2022-38752](https://www.mend.io/vulnerability-database/CVE-2022-38752) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 6.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2022-38751](https://www.mend.io/vulnerability-database/CVE-2022-38751) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 6.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2022-38749](https://www.mend.io/vulnerability-database/CVE-2022-38749) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 6.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
| [CVE-2022-38750](https://www.mend.io/vulnerability-database/CVE-2022-38750) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.5 | snakeyaml-1.30.jar | Transitive | 3.0.0 | &#9989; |
<p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> CVE-2022-1471</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
SnakeYaml's Constructor() class does not restrict types which can be instantiated during deserialization. Deserializing yaml content provided by an attacker can lead to remote code execution. We recommend using SnakeYaml's SafeConsturctor when parsing untrusted content to restrict deserialization. We recommend upgrading to version 2.0 and beyond.


<p>Publish Date: 2022-12-01
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-1471>CVE-2022-1471</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>9.8</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: High
  - Integrity Impact: High
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://bitbucket.org/snakeyaml/snakeyaml/issues/561/cve-2022-1471-vulnerability-in#comment-64634374">https://bitbucket.org/snakeyaml/snakeyaml/issues/561/cve-2022-1471-vulnerability-in#comment-64634374</a></p>
<p>Release Date: 2022-12-01</p>
<p>Fix Resolution (org.yaml:snakeyaml): 2.0</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.2.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2023-6378</summary>


###  Vulnerable Library - <b>logback-classic-1.2.12.jar</b></p>

<p>logback-classic module</p>
<p>Library home page: <a href="http://logback.qos.ch">http://logback.qos.ch</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/ch.qos.logback/logback-classic/1.2.12/d4dee19148dccb177a0736eb2027bd195341da78/logback-classic-1.2.12.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - spring-boot-starter-logging-2.7.12.jar
      - :x: **logback-classic-1.2.12.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A serialization vulnerability in logback receiver component part of 
logback version 1.4.11 allows an attacker to mount a Denial-Of-Service 
attack by sending poisoned data.



<p>Publish Date: 2023-11-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-6378>CVE-2023-6378</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://logback.qos.ch/news.html#1.3.12">https://logback.qos.ch/news.html#1.3.12</a></p>
<p>Release Date: 2023-11-29</p>
<p>Fix Resolution (ch.qos.logback:logback-classic): 1.2.13</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2022-25857</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
The package org.yaml:snakeyaml from 0 and before 1.31 are vulnerable to Denial of Service (DoS) due missing to nested depth limitation for collections.

<p>Publish Date: 2022-08-30
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-25857>CVE-2022-25857</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-25857">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-25857</a></p>
<p>Release Date: 2022-08-30</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.31</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2023-34055</summary>


###  Vulnerable Library - <b>spring-boot-2.7.12.jar</b></p>

<p>Spring Boot</p>
<p>Library home page: <a href="https://spring.io/projects/spring-boot">https://spring.io/projects/spring-boot</a></p>
<p>Path to dependency file: /temporal-spring-boot-autoconfigure-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.springframework.boot/spring-boot/2.7.12/888c3545dc3c6ca791753c7ad621a2d03f222732/spring-boot-2.7.12.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **spring-boot-2.7.12.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In Spring Boot versions 2.7.0 - 2.7.17, 3.0.0-3.0.12 and 3.1.0-3.1.5, it is possible for a user to provide specially crafted HTTP requests that may cause a denial-of-service (DoS) condition.

Specifically, an application is vulnerable when all of the following are true:

  *  the application uses Spring MVC or Spring WebFlux
  *  org.springframework.boot:spring-boot-actuator is on the classpath





<p>Publish Date: 2023-11-28
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-34055>CVE-2023-34055</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://spring.io/security/cve-2023-34055">https://spring.io/security/cve-2023-34055</a></p>
<p>Release Date: 2023-11-28</p>
<p>Fix Resolution (org.springframework.boot:spring-boot): 2.7.18</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 2.7.18</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-41854</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Those using Snakeyaml to parse untrusted YAML files may be vulnerable to Denial of Service attacks (DOS). If the parser is running on user supplied input, an attacker may supply content that causes the parser to crash by stack overflow. This effect may support a denial of service attack.

<p>Publish Date: 2022-11-11
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-41854>CVE-2022-41854</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: Required
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://bitbucket.org/snakeyaml/snakeyaml/issues/531/">https://bitbucket.org/snakeyaml/snakeyaml/issues/531/</a></p>
<p>Release Date: 2022-11-11</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.32</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-38752</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Using snakeYAML to parse untrusted YAML files may be vulnerable to Denial of Service attacks (DOS). If the parser is running on user supplied input, an attacker may supply content that causes the parser to crash by stack-overflow.

<p>Publish Date: 2022-09-05
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-38752>CVE-2022-38752</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://github.com/advisories/GHSA-9w3m-gqgf-c4p9">https://github.com/advisories/GHSA-9w3m-gqgf-c4p9</a></p>
<p>Release Date: 2022-09-05</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.32</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-38751</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Using snakeYAML to parse untrusted YAML files may be vulnerable to Denial of Service attacks (DOS). If the parser is running on user supplied input, an attacker may supply content that causes the parser to crash by stackoverflow.

<p>Publish Date: 2022-09-05
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-38751>CVE-2022-38751</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=47039">https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=47039</a></p>
<p>Release Date: 2022-09-05</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.31</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-38749</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Using snakeYAML to parse untrusted YAML files may be vulnerable to Denial of Service attacks (DOS). If the parser is running on user supplied input, an attacker may supply content that causes the parser to crash by stackoverflow.

<p>Publish Date: 2022-09-05
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-38749>CVE-2022-38749</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://bitbucket.org/snakeyaml/snakeyaml/issues/526/stackoverflow-oss-fuzz-47027">https://bitbucket.org/snakeyaml/snakeyaml/issues/526/stackoverflow-oss-fuzz-47027</a></p>
<p>Release Date: 2022-09-05</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.31</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-38750</summary>


###  Vulnerable Library - <b>snakeyaml-1.30.jar</b></p>

<p>YAML 1.1 parser and emitter for Java</p>
<p>Library home page: <a href="https://bitbucket.org/snakeyaml/snakeyaml">https://bitbucket.org/snakeyaml/snakeyaml</a></p>
<p>Path to dependency file: /temporal-spring-boot-starter-alpha/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.30/8fde7fe2586328ac3c68db92045e1c8759125000/snakeyaml-1.30.jar</p>
<p>

Dependency Hierarchy:
  - spring-boot-starter-2.7.12.jar (Root Library)
    - :x: **snakeyaml-1.30.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Using snakeYAML to parse untrusted YAML files may be vulnerable to Denial of Service attacks (DOS). If the parser is running on user supplied input, an attacker may supply content that causes the parser to crash by stackoverflow.

<p>Publish Date: 2022-09-05
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-38750>CVE-2022-38750</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>5.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Local
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: Required
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=47027">https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=47027</a></p>
<p>Release Date: 2022-09-05</p>
<p>Fix Resolution (org.yaml:snakeyaml): 1.31</p>
<p>Direct dependency fix Resolution (org.springframework.boot:spring-boot-starter): 3.0.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details>

***

<p>:rescue_worker_helmet:Automatic Remediation will be attempted for this issue.</p>


---

<a id="1888"></a>

### #1888: kotlin-klib-commonizer-embeddable-1.5.32.jar: 1 vulnerabilities (highest severity is: 5.3)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1888 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-10-10 17:07:36.000 UTC (2y 3m ago) |
| **Updated** | 2023-10-10 17:07:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>kotlin-klib-commonizer-embeddable-1.5.32.jar</b></p></summary>

<p></p>
<p>Path to dependency file: /temporal-kotlin/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.jetbrains.kotlin/kotlin-stdlib/1.5.32/a1f8a73f899b85e6eb4337dff7e81b8b914bd2c9/kotlin-stdlib-1.5.32.jar</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (kotlin-klib-commonizer-embeddable version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2022-24329](https://www.mend.io/vulnerability-database/CVE-2022-24329) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.3 | kotlin-stdlib-1.5.32.jar | Transitive | 1.6.0 | &#9989; |
<p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2022-24329</summary>


###  Vulnerable Library - <b>kotlin-stdlib-1.5.32.jar</b></p>

<p>Kotlin Standard Library for JVM</p>
<p>Library home page: <a href="https://kotlinlang.org/">https://kotlinlang.org/</a></p>
<p>Path to dependency file: /temporal-kotlin/build.gradle</p>
<p>Path to vulnerable library: /home/wss-scanner/.gradle/caches/modules-2/files-2.1/org.jetbrains.kotlin/kotlin-stdlib/1.5.32/a1f8a73f899b85e6eb4337dff7e81b8b914bd2c9/kotlin-stdlib-1.5.32.jar</p>
<p>

Dependency Hierarchy:
  - kotlin-klib-commonizer-embeddable-1.5.32.jar (Root Library)
    - :x: **kotlin-stdlib-1.5.32.jar** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-java/commit/f389bd8e9cd8956213466e705d5e2a36978aea65">f389bd8e9cd8956213466e705d5e2a36978aea65</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In JetBrains Kotlin before 1.6.0, it was not possible to lock dependencies for Multiplatform Gradle Projects.

<p>Publish Date: 2022-02-25
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-24329>CVE-2022-24329</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>5.3</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: Low
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://github.com/advisories/GHSA-2qp4-g3q3-f92w">https://github.com/advisories/GHSA-2qp4-g3q3-f92w</a></p>
<p>Release Date: 2022-02-25</p>
<p>Fix Resolution (org.jetbrains.kotlin:kotlin-stdlib): 1.6.0-M1</p>
<p>Direct dependency fix Resolution (org.jetbrains.kotlin:kotlin-klib-commonizer-embeddable): 1.6.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details>

***

<p>:rescue_worker_helmet:Automatic Remediation will be attempted for this issue.</p>


---

<a id="1839"></a>

### #1839: Add HealthIndicator to spring-boot library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1839 |
| **State** | OPEN |
| **Author** | osialr (Ryan Osial) |
| **Created** | 2023-08-14 14:19:26.000 UTC (2y 4m ago) |
| **Updated** | 2023-08-14 14:19:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I would like to monitor the state of Temporal Java SDK and workers through spring-boot-actuator's /health endpoint

**Describe the solution you'd like**
In the `temporal-spring-boot-autoconfigure-alpha` project, create a HealthIndicator and AutoConfiguration that includes information on the connection, state of the workers, and anything else that could be of value for health.

Could use [RabbitHealthIndicator](https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot-actuator/src/main/java/org/springframework/boot/actuate/amqp/RabbitHealthIndicator.java) and [RabbitHealthContributorAutoConfiguration](https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot-actuator-autoconfigure/src/main/java/org/springframework/boot/actuate/autoconfigure/amqp/RabbitHealthContributorAutoConfiguration.java) as an starting point.

**Describe alternatives you've considered**
Split monitoring health of workers and temporal connection into separate health indicators

**Additional context**
HealthIndicator allows external monitoring tools to check whether the application has entered a failed state and needs a restart.



---

<a id="1830"></a>

### #1830: WorkflowReplayer throws unclear exception when LocalActivityOptions are misconfigured

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1830 |
| **State** | OPEN |
| **Author** | tylercunnion (Tyler Cunnion) |
| **Created** | 2023-07-31 22:50:45.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-31 22:50:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

When using WorkflowReplayer with the TestWorkflowEnvironment, I expect missing/misconfigured LocalActivityOptions to throw a useful error, similar to the one presented when missing regular ActivityOptions:

```
Caused by: java.lang.IllegalArgumentException: Both StartToCloseTimeout and ScheduleToCloseTimeout aren't specified for ImportInitialization activity. Please set at least one of the above through the ActivityStub or WorkflowImplementationOptions.
```

## Actual Behavior

The exception presented is fairly cryptic:
```
java.lang.RuntimeException: query failure for workflow_id: "workflow_id_in_replay"
run_id: "run_id_in_replay", queryType=__replay_only, args=Optional.empty, error=java.lang.Error: closed
```

Stepping through shows that the cause is in the [validateAndBuildWithDefaults](https://github.com/temporalio/sdk-java/blob/c2b941a0fb8b2cfe907ec1fdf9d4b9637cf32179/temporal-sdk/src/main/java/io/temporal/activity/LocalActivityOptions.java#L222) method - but this IllegalArgumentException is somehow swallowed (the next step jumps to this [finally block in CancellationScopeImpl](https://github.com/temporalio/sdk-java/blob/c2b941a0fb8b2cfe907ec1fdf9d4b9637cf32179/temporal-sdk/src/main/java/io/temporal/internal/sync/CancellationScopeImpl.java#L104) ). If this exception ended up being displayed the problem would have been pretty obvious and quick to solve.

## Steps to Reproduce the Problem

  1. Write and run a workflow that uses a Local Activity. (It MAY be necessary to run inside a CancellationScope, haven't tested extensively)
  1. Create a TestWorkflowEnvironment that does not have default LocalActivityOptions configured, and use it with WorkflowReplayer to replay the workflow history.

## Specifications

  - Version: observed in SDK v1.18.2 and 1.20.1
  - Platform: Mac



---

<a id="1825"></a>

### #1825: Support the certificate with linebreak strings from env variable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1825 |
| **State** | OPEN |
| **Author** | masashinak (Masashi Nakane) |
| **Created** | 2023-07-26 18:23:23.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-26 18:25:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

We store the temporal cloud cert and private key as env vars opposed to application.yaml/prop.
Because the env var values cannot contain linebreak/linefeed special characters, the ServiceStubOptionsTemaplte fails to load cert/key saying it is not valid cert [ on this line ](https://github.com/temporalio/sdk-java/blob/c2b941a0fb8b2cfe907ec1fdf9d4b9637cf32179/temporal-spring-boot-autoconfigure-alpha/src/main/java/io/temporal/spring/boot/autoconfigure/template/ServiceStubOptionsTemplate.java#L124C16-L124C16).
(It works perfectly with application.yaml/propeties because it converts "\n" to linebreak)

![image](https://github.com/temporalio/sdk-java/assets/96093327/023e7f99-2f40-4933-ab77-0f5c393fc3bf)


**Describe the solution you'd like**
Add a logic to convert "\\n" to "\n" in the cert string if it is there , maybe in ServiceStubOptionsTemplate class.

**Describe alternatives you've considered**
I replaced ServiceStubsAutoConfiguration with our  customized/extended class which  converts  "\\n" to "\n" in mtlsProperties' cert and key.

`@SpringBootApplication(exclude = [ServiceStubsAutoConfiguration::class])
`


---

<a id="1820"></a>

### #1820: Exceptions thrown from ScheduleClient and ScheduleHandle should be wrapped in a TemporalException

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1820 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-07-17 17:48:07.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-17 17:48:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
All exceptions thrown from the SDK should be subclasses of `TemporalException`

## Actual Behavior
`ScheduleClient ` and `ScheduleHandle ` violate this in some cases



---

<a id="1781"></a>

### #1781: Validate update protocol message type on replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1781 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-06-07 21:41:24.000 UTC (2y 7m ago) |
| **Updated** | 2023-06-07 21:41:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
On replay currently only the `ProtocolMessageCommand` and the `Event` are checked for determinism. For the most accurate coverage the protocol message generated should also be checked.




---

<a id="1767"></a>

### #1767: Log server-side task failure caused by invalid command in test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1767 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-17 20:41:02.000 UTC (2y 7m ago) |
| **Updated** | 2024-11-20 21:04:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Today `io.temporal.internal.testservice.CommandVerifier.verifyCommand` is called on each command to make sure valid or a task failure occurs. Since this is not a task failure caused by caller and there is no UI for Java test server, this is just silently failed. We should log (where it's called from `TestWorkflowMutableStateImpl`). This only applies to search attributes today, because that's the only thing we check command validity on (we don't need to log unhandled command, that's a normal state of operation).


---

<a id="1727"></a>

### #1727: inconsistency on MaximumAttempts attribute between local activities and "normal" activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1727 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-03-31 14:01:01.000 UTC (2y 9m ago) |
| **Updated** | 2023-06-02 05:00:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | good first issue |
| **Assignees** | None |
| **Milestone** | 1.20.0 |

#### Description

## Expected Behavior
setting setMaximumAttempts=0 (or not setting any value, default = 0) for local activities should make the activity retry forever.  

I expect the same behavior as "normal" activities, where MaximumAttempts=0  implies retry forever. 

## Actual Behavior

when MaximumAttempts is set to 0, local activities do not retry


## Steps to Reproduce the Problem
[HelloLocalActivity.java.zip](https://github.com/temporalio/sdk-java/files/11122584/HelloLocalActivity.java.zip)


## Specifications

  - Version:
  - Platform:



---

<a id="1668"></a>

### #1668: Subsequent MutableSideEffect calls inside one Workflow Task may explode with non-determinism on replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1668 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-02-22 18:25:52.000 UTC (2y 10m ago) |
| **Updated** | 2024-12-17 21:19:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Actual Behavior

Consider a workflow that has 3 calls to the same ID back to back
...
encodedValue1 := workflow.MutableSideEffect(ctx, "id", ...)
encodedValue2 := workflow.MutableSideEffect(ctx, "id", ...)
encodedValue3 := workflow.MutableSideEffect(ctx, "id", ...)
...
And say encodedValue1==encodedValue2  and encodedValue3 are different on the original run. 
This makes 2 markers will be in history.
On replay the marker created by the third mutable side effect call will be applied to a second call instead causing a non-deterministic replay.

# Context

GoSDK: https://github.com/temporalio/sdk-go/issues/1014


---

<a id="1644"></a>

### #1644: ContextPropagator redesign

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1644 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-02-08 16:23:26.000 UTC (2y 11m ago) |
| **Updated** | 2025-05-13 16:51:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
The current Context propagator interface doesn't have an access to a reference to an entity it propagates to. For example a workflow or an activity instance. This doesn't allow the Context Propagator to get access to setters in the class.
ContextPropagator also is not aware if it propagates into a workflow or an activity at all, which makes it impossible to decide it `WorkflowThreadLocal` (`WorkflowLocal`) or a regular `ThreadLocal` should be used. 
See 
If `ThreadLocal` is used, ContextPropagator should have a lifecycle method to be able to clean the `ThreadLocal`. For example, a method that will be triggered at the end of an activity method.

**Describe the solution you'd like**
`ContextPropagator` should be reimplemented as Interceptors from scratch and its design should be reimplemented taking into account the points mentioned above.
See #525 for a proposed alternative to having `ContextPropagator` form a separate context that is accessible from Workflow and Activity code.

**Additional context**
The right approach would be a creation of a completely new `ContextPropagator` interface while leaving the old `ContextPropagator` in place, and deprecating it.


---

<a id="1642"></a>

### #1642: Add history pagination to Test Server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1642 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2023-02-06 19:52:52.000 UTC (2y 11m ago) |
| **Updated** | 2024-12-17 21:26:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Actual Behavior

Currently, Test Server never paginates the history and returns it always in one chunk. This makes the SDK internals that are getting triggered only if the server paginates testable only with the real server. 

## Expected Behavior

Pagination of the Test Server doesn't have to match the behavior of the real server, but it should be present and it should be configurable, so SDK developers can set a mode with aggressive pagination to improve test coverage.

Related to: #1639 #1638


---

<a id="1621"></a>

### #1621: Allow setting *additional* memo values in ContinueAsNewOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1621 |
| **State** | OPEN |
| **Author** | natthu-stripe (Natthu Bharambe) |
| **Created** | 2023-01-25 22:51:59.000 UTC (2y 11m ago) |
| **Updated** | 2023-01-25 22:51:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
We have an abstraction for starting workflows that sets some standard memo values. I have a new use case where I'd like to continue-as-new a workflow execution (started using the above mentioned abstraction) but when doing so, set a few additional memo values that the next run would read. Today, `ContinueAsNewOptions` allows setting the entire memo map (using `ContinueAsNewOptions.newBuilder().setMemo()`). Thus, in order to *add* new memo values to the next run while preserving existing values, we need to extract all the values (which requires knowing the entire key set) and then merging those with the new values. There is currently no API to either list all keys present in the memo, or to fetch the entire memo structure.

**Describe the solution you'd like**
Ideally, `ContinueAsNewOptions.Builder` should provide an `addMemo(key, value)` method which overrides the value in the current execution's memo if present, or else, adds it to the next workflow execution.

**Describe alternatives you've considered**
Alternative approaches:
1/ add the memo values to the next workflow's arguments (leaky abstraction) 
2/ maintain a list of all known memo keys and use that to extract the entire memo when building `ContinueAsNewOptions`.



---

<a id="1618"></a>

### #1618: Test server with child workflow and signal is timing out when attemping unlock-with-sleep

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1618 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-01-25 20:14:13.000 UTC (2y 11m ago) |
| **Updated** | 2024-11-19 19:01:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Steps to Reproduce the Problem

Take this Python program:

```python
import asyncio
import logging
from datetime import timedelta
import time

from temporalio import workflow
from temporalio.testing import WorkflowEnvironment
from temporalio.worker import Worker


@workflow.defn
class SubWorkflow:
    def __init__(self) -> None:
        self.signal_received = False

    @workflow.run
    async def run(self) -> bool:
        try:
            await workflow.wait_condition(
                lambda: self.signal_received, timeout=timedelta(days=2)
            )
            return True
        except asyncio.TimeoutError:
            return False

    @workflow.signal
    def some_signal(self) -> None:
        self.signal_received = True


@workflow.defn
class TopWorkflow:
    def __init__(self) -> None:
        self.signal_received = False

    @workflow.run
    async def run(self) -> bool:
        try:
           # test passes if child workflow is not started.
            await workflow.start_child_workflow(
                SubWorkflow.run, id="swf1", task_queue="tq1"
            )
            await workflow.wait_condition(
                lambda: self.signal_received, timeout=timedelta(days=3)
            )
            return True
        except asyncio.TimeoutError:
            return False

    @workflow.signal
    def some_signal(self) -> None:
        self.signal_received = True


async def main():
    logging.info("Starting time skipping")
    async with await WorkflowEnvironment.start_time_skipping() as env:
        logging.info("Disabling auto time skipping")
        with env.auto_time_skipping_disabled():
            logging.info("Starting worker")
            async with Worker(
                env.client,
                task_queue="tq1",
                workflows=[TopWorkflow, SubWorkflow],
                debug_mode=True,
            ):
                logging.info("Starting workflow")
                handle = await env.client.start_workflow(
                    TopWorkflow.run, id="wf1", task_queue="tq1"
                )

                logging.info("Sleeping 1 day")
                await env.sleep(timedelta(days=1))

                logging.info("Signalling workflow")
                await handle.signal(TopWorkflow.some_signal)

                logging.info("Sleeping 1 day again")
                await env.sleep(timedelta(days=1))

                logging.info("Sleeping 2 days")
                await env.sleep(timedelta(days=2))

                logging.info("Sleeping 3 days")
                await env.sleep(timedelta(days=3))

                logging.info("Done")

if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    asyncio.run(main())
```

What that does is start a parent workflow that starts a child (but doesn't wait on completion) and then completes itself when a signal is sent. Those `env.sleep` calls are `UnlockTimeSkippingWithSleep`. When run including the core "activations" (events to handle) and "completions" (the commands to send to server), the logs from my Windows scratch run are:

```
DEBUG:asyncio:Using proactor: IocpProactor
INFO:root:Starting time skipping
INFO:root:Disabling auto time skipping
INFO:root:Starting worker
INFO:root:Starting workflow
INFO:root:Sleeping 1 day
DEBUG:temporalio.worker._workflow:Received workflow activation:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
timestamp {
  seconds: 1674677060
  nanos: 338000000
}
history_length: 3
jobs {
  start_workflow {
    workflow_type: "TopWorkflow"
    workflow_id: "wf1"
    randomness_seed: 14816511849120529847
    identity: "19760@cretz-laptop"
    workflow_execution_timeout {
      seconds: 315360000
    }
    workflow_run_timeout {
      seconds: 315360000
    }
    workflow_task_timeout {
      seconds: 10
    }
    first_execution_run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
    attempt: 1
    start_time {
      seconds: 1674677060
      nanos: 338000000
    }
  }
}

DEBUG:temporalio.worker._workflow:Sending workflow completion:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
successful {
  commands {
    start_child_workflow_execution {
      seq: 1
      namespace: "default"
      workflow_id: "swf1"
      workflow_type: "SubWorkflow"
      task_queue: "tq1"
      parent_close_policy: PARENT_CLOSE_POLICY_TERMINATE
      workflow_id_reuse_policy: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE
      cancellation_type: WAIT_CANCELLATION_COMPLETED
    }
  }
}

DEBUG:temporalio.worker._workflow:Received workflow activation:
run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
timestamp {
  seconds: 1674677060
  nanos: 350000000
}
history_length: 3
jobs {
  start_workflow {
    workflow_type: "SubWorkflow"
    workflow_id: "swf1"
    randomness_seed: 15491585649214177938
    parent_workflow_info {
      namespace: "default"
      workflow_id: "wf1"
      run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
    }
    workflow_execution_timeout {
      seconds: 315360000
    }
    workflow_run_timeout {
      seconds: 315360000
    }
    workflow_task_timeout {
      seconds: 10
    }
    first_execution_run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
    attempt: 1
    memo {
    }
    search_attributes {
    }
    start_time {
      seconds: 1674677060
      nanos: 350000000
    }
  }
}

DEBUG:temporalio.worker._workflow:Received workflow activation:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
timestamp {
  seconds: 1674677060
  nanos: 350000000
}
history_length: 8
jobs {
  resolve_child_workflow_execution_start {
    seq: 1
    succeeded {
      run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
    }
  }
}

DEBUG:temporalio.worker._workflow:Sending workflow completion:
run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
successful {
  commands {
    start_timer {
      seq: 1
      start_to_fire_timeout {
        seconds: 172800
      }
    }
  }
}

DEBUG:temporalio.worker._workflow:Sending workflow completion:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
successful {
  commands {
    start_timer {
      seq: 1
      start_to_fire_timeout {
        seconds: 259200
      }
    }
  }
}

INFO:root:Signalling workflow
INFO:root:Sleeping 1 day again
DEBUG:temporalio.worker._workflow:Received workflow activation:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
timestamp {
  seconds: 1674763460
  nanos: 341000000
}
history_length: 13
jobs {
  signal_workflow {
    signal_name: "some_signal"
    identity: "19760@cretz-laptop"
  }
}

DEBUG:temporalio.worker._workflow:Sending workflow completion:
run_id: "dd5d5ce5-81be-46cc-86b3-046d6ab3a027"
successful {
  commands {
    cancel_timer {
      seq: 1
    }
  }
  commands {
    complete_workflow_execution {
      result {
        metadata {
          key: "encoding"
          value: "json/plain"
        }
        data: "true"
      }
    }
  }
}

INFO:root:Sleeping 2 days
DEBUG:temporalio.worker._workflow:Received workflow activation:
run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
timestamp {
  seconds: 1674849860
  nanos: 360000000
}
history_length: 8
jobs {
  fire_timer {
    seq: 1
  }
}

DEBUG:temporalio.worker._workflow:Sending workflow completion:
run_id: "de8567d0-7f5b-4447-a16d-d21c64db9b81"
successful {
  commands {
    complete_workflow_execution {
      result {
        metadata {
          key: "encoding"
          value: "json/plain"
        }
        data: "false"
      }
    }
  }
}

INFO:temporalio.worker._worker:Beginning worker shutdown, will wait 0:00:00 before cancelling activities
Traceback (most recent call last):
  File "c:\work\tem\tem-discover\scratch-python\.venv\Lib\site-packages\temporalio\service.py", line 723, in _rpc_call
    resp = await client.call(
           ^^^^^^^^^^^^^^^^^^
  File "c:\work\tem\tem-discover\scratch-python\.venv\Lib\site-packages\temporalio\bridge\client.py", line 126, in call
    resp.ParseFromString(await resp_fut)
                         ^^^^^^^^^^^^^^
temporal_sdk_bridge.RPCError: (1, 'Timeout expired', b'')

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "c:\work\tem\tem-discover\scratch-python\scratch6\scratch.py", line 91, in <module>
    asyncio.run(main())
  File "C:\Users\user\AppData\Local\Programs\Python\Python311\Lib\asyncio\runners.py", line 190, in run
    return runner.run(main)
           ^^^^^^^^^^^^^^^^
  File "C:\Users\user\AppData\Local\Programs\Python\Python311\Lib\asyncio\runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\user\AppData\Local\Programs\Python\Python311\Lib\asyncio\base_events.py", line 650, in run_until_complete
    return future.result()
           ^^^^^^^^^^^^^^^
  File "c:\work\tem\tem-discover\scratch-python\scratch6\scratch.py", line 82, in main
    await env.sleep(timedelta(days=2))
  File "c:\work\tem\tem-discover\scratch-python\.venv\Lib\site-packages\temporalio\testing\_workflow.py", line 425, in sleep
    await self._client.test_service.unlock_time_skipping_with_sleep(req)
  File "c:\work\tem\tem-discover\scratch-python\.venv\Lib\site-packages\temporalio\service.py", line 658, in __call__
    return await self.service_client._rpc_call(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "c:\work\tem\tem-discover\scratch-python\.venv\Lib\site-packages\temporalio\service.py", line 738, in _rpc_call
    raise RPCError(message, RPCStatusCode(status), details)
temporalio.service.RPCError: Timeout expired
```

What seems to be happening is the child is started, the signal is sent causing the parent workflow to complete, but the child is not cancelled or whatever. Then the 2 day sleep properly causes the child timeout timer to trigger causing it to complete as expected, but that `env.sleep(timedelta(days=2))` doesn't return for several seconds before test service gRPC times it out.

If you remove the sending of the signal or the starting of the child workflow there are no errors. Sorry it's in Python and may be a big replication, I can probably write in Java if needed.

Sorry if this is the same #1540, I did not dig into that one.


---

<a id="1586"></a>

### #1586: Opt-in to having stack trace query use custom data converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1586 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-01-05 13:17:59.000 UTC (3 years ago) |
| **Updated** | 2023-08-30 18:53:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 1.20.0 |

#### Description

**Describe the solution you'd like**

Make a new worker option that lets the custom data converter (encoder, etc) be used for `__stack_trace` queries like it is for the rest of the queries if `true`, otherwise can leave current behavior of default converter if `false` (the default).



---

<a id="1579"></a>

### #1579: [Feature Request] Improving replay issue for Timers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1579 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-12-22 18:35:13.000 UTC (3 years ago) |
| **Updated** | 2022-12-22 18:35:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently timers create a different execution history if timer / sleep duration is <=0 or > 0. A number of users a running into problems on internal workflow replay for this. It would be nice to add some checks to reduce the number of non-deterministic errors timer duration can lead to. 


---

<a id="1563"></a>

### #1563: Local Activity Execution should stop making attempts if Workflow Task or subsequent heartbeat fails

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1563 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-12-08 05:59:54.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-08 05:59:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Right now Local Activity Execution is not aware of the lifecycle of the Workflow Task that started this execution.
If Workflow Task (or one of its subsequent heartbeats) is already failed, Local Activity will continue execution.
If there is no `scheduleToClose` timeout set or `scheduleToClose` is long, such an orphan local activity can retry for a long time. 

**Describe the solution you'd like**
Local Activity Execution should stop making new attempts if the workflow task caused this execution is failed.

**Additional context**
This task should likely be coupled with the implementation of Local Activity Cancelations: #1303


---

<a id="1549"></a>

### #1549: Metric scope for workflow instance should ignore metrics written after a destruction of the instance is requested

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1549 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-11-30 02:48:53.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-30 02:48:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Users should be able to use Workflow's `MetricScope` obtained from `Workflow.getMetricsScope()` in a workflow's `finally` blocks without accounting for `DestroyWorkflowThreadError` that may happen unexpectedly and uncontrollably.

## Actual Behavior

`DestroyWorkflowThreadError` triggers finally blocks and lead to double-reporting of metrics on workflow instance eviction.

## Solution

Temporal SDK should make workflow's `MetricsScope` aware of the fact that the instance destruction is requested and not allow any new metric's reporting in this case.


---

<a id="1538"></a>

### #1538: Test service continue-as-new implementation is not atomic

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1538 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-11-26 19:54:48.000 UTC (3y 1m ago) |
| **Updated** | 2025-05-15 02:20:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
No signal is rejected when sent to a workflow that calls continue as new.

## Actual Behavior
Signal sender can receive NOT_FOUND if it is sent while target workflow is executing continue-as-new.



## Steps to Reproduce the Problem

See https://github.com/temporalio/sdk-java/pull/1537 for reproduction.




---

<a id="1535"></a>

### #1535: Improve diagnostic message printed by TestWorkflowRule on timeout.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1535 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-11-26 03:33:34.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-26 04:03:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

When JUnit test timeouts (because a timeout was specified), the TestWorkflowRule prints out a diagnostic message that contains
histories of all workflows started by the test. This is useful, but misses a lot of useful information that could be used to troubleshoot a stuck test problem. 

Some of the potential additions:

* Result of DescribeWorkflowExecution call for each workflow. Especially useful information about activities and workflow tasks in retry.
* Stack trace query result for each open workflow.
* I would also improve the formatting of the printed history


---

<a id="1457"></a>

### #1457: State machine exception during termination

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1457 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-09-25 20:28:34.000 UTC (3y 3m ago) |
| **Updated** | 2024-12-17 21:26:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Actual Behavior

During a load test, the following exception happened once:

```
│ 19:42:15.247 [Workflow Executor taskQueue="xxx", namespace="yyy": 311] WARN  i.t.i.r.ReplayWorkflowTaskHandler - Workflow task processing failure. startedEventId=17, WorkflowId=89ecf1a │
│ io.temporal.internal.statemachines.InternalWorkflowTaskException: Failure handling event 19 of type 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED' during replay. {WorkflowTaskStartedEventId=17, CurrentStartedEventId=1 │
│     at io.temporal.internal.statemachines.WorkflowStateMachines.createEventProcessingException(WorkflowStateMachines.java:257)                                                                
│     at io.temporal.internal.statemachines.WorkflowStateMachines.handleEventsBatch(WorkflowStateMachines.java:236)                                                                                   
│     at io.temporal.internal.statemachines.WorkflowStateMachines.handleEvent(WorkflowStateMachines.java:208)                                                                                                
│     at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.applyServerHistory(ReplayWorkflowRunTaskHandler.java:208)                                                                                          
│     at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.handleWorkflowTaskImpl(ReplayWorkflowRunTaskHandler.java:192)                                                                                
│     at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.handleWorkflowTask(ReplayWorkflowRunTaskHandler.java:147)                                                                              
│     at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTaskWithQuery(ReplayWorkflowTaskHandler.java:132)                                                      
│     at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTask(ReplayWorkflowTaskHandler.java:97)                                                 
│     at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handleTask(WorkflowWorker.java:336)                                                                                     
│     at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:246)                                                                         
│     at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:188)                                                                                      
│     at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:93)                                                                   
│     at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)                                          
│     at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)                                            
│     at java.base/java.lang.Thread.run(Thread.java:829)                                                                                                                    
│ Caused by: java.lang.IllegalArgumentException: Unexpected event:event_id: 19                                                                              
│ event_time {                                                                                                                                              
│   seconds: 1664134935                                                                                                                              
│   nanos: 131416185                                                                                                                                 
│ }                                                                                                                                                                 
│ event_type: EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED                                                                          
│ version: 1023                                                                                                                                                
│ task_id: 186665257                                                                                                                                     
│ workflow_execution_terminated_event_attributes {                                                                                                 
│ }                                                                                                                                                                                  
│                                                                                                                                                                               
│     at io.temporal.internal.statemachines.WorkflowStateMachines.handleNonStatefulEvent(WorkflowStateMachines.java:521)                                       
│     at io.temporal.internal.statemachines.WorkflowStateMachines.handleSingleEvent(WorkflowStateMachines.java:282)                                                  
│     at io.temporal.internal.statemachines.WorkflowStateMachines.handleEventsBatch(WorkflowStateMachines.java:234)                                                 
│     ... 13 common frames omitted
```

The history of this execution wasn't saved, but there are two full normal histories of Parent and Child workflows from that test attached.
[histories.zip](https://github.com/temporalio/sdk-java/files/9641719/histories.zip)



---

<a id="1440"></a>

### #1440: Reflect activity vs local activity difference in tracing spans

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1440 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-09-16 16:43:46.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-16 16:43:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Right now tracing spans created for normal and local activities have the same exact prefix like "startactivity" and "runactivity".
Looking at the spans themselves it may be tricky to understand which ones are local and which ones are remote.



---

<a id="1429"></a>

### #1429: Test server does not error on already-started child workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1429 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-09-14 15:35:38.000 UTC (3y 3m ago) |
| **Updated** | 2024-11-19 19:01:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Should be able to start a child workflow, then when I try to start it again, it should error

## Actual Behavior

Nothing comes back erroring on the second child start attempt. This may also be related to #1220 since it may be using `WorkflowExecutionAlreadyStartedFailure` internally, but I don't see any error in stdout/stderr.


---

<a id="1413"></a>

### #1413: Deduplicate getResultAsync calls inside WorkflowClient or WorkflowStub

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1413 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-09-10 22:30:31.000 UTC (3y 4m ago) |
| **Updated** | 2022-09-10 22:30:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
If users call getResultAsync on the same stub several times or if they call getResultAsync on different stubs for the same workflow execution, SDK will open a new long poll for each such request.

**Describe the solution you'd like**
SDK should deduplicate such calls and open only one long poll under the hood as an optimization, so users don't have to think about it in their code.

**Additional context**
This task should likely be paired with https://github.com/temporalio/sdk-java/issues/1212, as both require changes in the internal structure of the same area of SDK code.



---

<a id="1403"></a>

### #1403: Test Server should add warning logging if no workers listen on a task queue with tasks

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1403 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-31 22:37:27.000 UTC (3y 4m ago) |
| **Updated** | 2024-11-19 19:04:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
A typical user mistake in unit tests which may be a little tricky for users to realize is forgetting to register workers on all the queues that participate in a unit test. This situation typically leads to a test timeout that has no useful information to understand the root cause.

**Describe the solution you'd like**
The test server may print warning log messages if there are tasks getting scheduled on a task queue that nobody listens on.


---

<a id="1377"></a>

### #1377: Predictable log statement when test server is ready for use

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1377 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-08-18 18:41:23.000 UTC (3y 4m ago) |
| **Updated** | 2024-11-20 21:01:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

External SDKs need to know when the test server is up and ready to use. Today SDKs just continually try to open a socket until it succeeds. Also, users might want to know also.

**Describe the solution you'd like**

Create some kind of output (stdout or stderr) that is somewhat predictable (e.g. starts with a common string or something) and would be the _first_ output of the test server process when the server is successfully started and ready for use. This way an SDK can wait for the first bit of stdout or stderr to know whether something failed or server has started.


---

<a id="1354"></a>

### #1354: Unit Test for  ActivityCompletionClient methods that don't use taskToken

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1354 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-08-10 03:18:17.000 UTC (3y 5m ago) |
| **Updated** | 2024-12-17 21:20:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

All the methods of `ActivityCompletionClient` that don't use task token and use `String workflowId, Optional<String> runId, String activityId` instead are unused and untested.
The same is `ManualActivityCompletionClientImpl` codepaths that work when `workflowId` + `activityId` are specified instead of `taskToken`.

These methods should be covered with basic unit tests.


---

<a id="1273"></a>

### #1273: provide an option to print trace-id and span-id on java-sdk 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1273 |
| **State** | OPEN |
| **Author** | hema-kishore-gunda (Hema Kishore Gunda) |
| **Created** | 2022-06-21 13:00:40.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-21 13:00:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Yes. currently trace-id and span-id are not being printed on logs with OpenTracingWorkerInterceptor.

**Describe the solution you'd like**
Add trace-id and span-id to MDC-context.

**Describe alternatives you've considered**
Workaround: Implement custom OpenTracingWorkerInterceptor, OpenTracingWorkflowInboundCallsInterceptor and OpenTracingActivityInboundCallsInterceptor

**Additional context**
This feature has been discussed in slack channel thread
https://temporalio.slack.com/archives/CTT84KXK9/p1655727317596189.



---

<a id="1266"></a>

### #1266: Add unit test covering scenario of Server outage during Worker sending workflow task execution result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1266 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-06-17 21:29:00.000 UTC (3y 6m ago) |
| **Updated** | 2024-12-17 21:20:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
https://github.com/temporalio/sdk-java/pull/1265 fixed a bug that happens if Temporal Server is down when workers are reporting the results to the Server. But right now there is no ability to test the scenario of such an outage. 

**Describe the solution you'd like**
Temporal SDK should add support for such tests to Test Server. Also, a unit test for this bug and fix should be implemented.


---

<a id="1258"></a>

### #1258: Make activity heartbeats more robust to network outages by retrying them

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1258 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-06-09 18:01:28.000 UTC (3y 7m ago) |
| **Updated** | 2023-05-23 17:45:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Right now we don't retry failed heartbeats and just ignore the error.
This may create a problem if heartbeat timeout is, for example, 20 seconds and activity heartbeats every 15 seconds. If we get a network blip, such an activity will be terminated with heartbeat timeout.
We should use heartbeatExecutor to schedule an asynchronous retry for a failed heartbeat. We can utilize an exponential backoff throttling strategy for it. ActivityContext.heartbeat() shouldn't be kept blocked because we retry.



---

<a id="1257"></a>

### #1257: Cached activity heartbeat prevents worker from a quick shutdown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1257 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-06-09 17:52:04.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-09 17:52:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Scheduled throttled activity heartbeats shouldn't delay worker shutdown. The worker shutdown should drain such heartbeats.

## Actual Behavior
Worker shutdown is delayed on the shutdown of activity heartbeat executor because there are scheduled heartbeat tasks.

## Steps to Reproduce the Problem

See ActivityTimeoutTest#testActivityStartToCloseTimeout that should be taking about 2 seconds, but takes 10 seconds and has
```
13:39:55.206 [TemporalShutdownManager: 1] WARN  i.t.internal.worker.ShutdownManager - Wait for a graceful shutdown of SyncActivityWorker{namespace=default, taskQueue=test-activities, identity=81008@Dmitrys-Temporal-MacBook.local}#heartbeatExecutor timed out, fallback to shutdownNow()
```
in the shutdown log.


---

<a id="1242"></a>

### #1242: Revisit history pagination 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1242 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-06-01 21:23:54.000 UTC (3y 7m ago) |
| **Updated** | 2024-12-17 21:20:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
`WorkflowHistoryIterator` implementation related to deadline (using calculations on curentTimeMilles), exceptions handling and error/expiration reporting requires a revisit and polishing.
Logging should include more information about the workflow task timeout and how much time elapsed.

As a part of this task it's also a good idea to build-in protection from the server returning events in a loop that never ends that we have in Core:
https://github.com/temporalio/sdk-core/blob/a72ebed19ec1e7b3fe37fbcbe846deafb1820f33/core/src/worker/workflow/history_update.rs#L281


---

<a id="1234"></a>

### #1234: Provide default implementation of Prometheus scrape endpoint

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1234 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-05-24 20:34:55.000 UTC (3y 7m ago) |
| **Updated** | 2023-05-23 17:41:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Right now users who want to export metrics into Prometheus have to implement a scrape endpoint to publish metrics from micrometer reporter following one of the ways described here: https://tanzu.vmware.com/developer/learningpaths/application-observability/exposing-metrics-java-prometheus/

**Describe the solution you'd like**
For the convenience of users, Temporal JavaSDK should have a built-in implementation of a scrape endpoint for prometheus. This endpoint should allow port/url configuration to be passed to avoid any port conflicts with other instances of scraping endpoints that may be running on the host.



---

<a id="1216"></a>

### #1216: Log activity thread stack trace if it times out or fails to heartbeat

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1216 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-05-16 16:40:52.000 UTC (3y 7m ago) |
| **Updated** | 2022-05-16 16:40:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
It is common for activities to fail to heartbeat on time or complete an activity on time. Troubleshooting this problem is not simple. 

**Describe the solution you'd like**
Automatically log the stack of the activity thread if an activity didn't heartbeat within heartbeat interval or an activity failed to complete for the start to close timeout.




---

<a id="1212"></a>

### #1212: Cancel long poll if a Future returned from getResultAsync is not referenced anymore by the user code

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1212 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-05-13 18:24:22.000 UTC (3y 8m ago) |
| **Updated** | 2022-05-13 18:24:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

If we hit WorkflowStub#getResultAsync and after that, we either don't wait on the result at all or wait for a bit and discard after, the long poll continues to run.
This creates a need for an unpleasant, unconventional `WorkflowStub#getResultAsync(resultType, timeout)`.
Why do users need to pass a timeout to `getResultAsync` if they pass it into `Future.get(timeout)`.
Most users just use `WorkflowStub#getResultAsync(resultType)` not understanding that they create a leak if the workflows don't finish fast.

**Describe the solution you'd like**
Instead of that, Temporal Java SDK code should maintain a weak or phantom reference on the CompletableFuture that we return to the users and cancel the background long poll when it's discarded by the user code.


---

<a id="1141"></a>

### #1141: Deadlock Detector unexpectedly firing on a cold JVM

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1141 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-04-14 06:44:58.000 UTC (3y 9m ago) |
| **Updated** | 2024-12-17 21:19:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

Cold JVM is very vulnerable to JavaSDK Potential Deadlock fiting. Below there is a stacktrace with PotentialDeadlockException fires on workflow-root thread which doesn't have any user code at all and it fails on classloading and instrumentation.

JavaSDK should implement a relaxed Deadlock Detector during the start of workers.
The most straightforward solution is to multiple the Deadlock detector by N for the first execution of a workflow of each type.

```
Caused by: io.temporal.internal.sync.PotentialDeadlockException: Potential deadlock detected: workflow thread "workflow-root" didn't yield control for over a second. Other workflow threads:
​
​
​
	at app//org.jacoco.agent.rt.internal_3570298.asm.ByteVector.enlarge(ByteVector.java:357)
	at app//org.jacoco.agent.rt.internal_3570298.asm.ByteVector.putByte(ByteVector.java:77)
	at app//org.jacoco.agent.rt.internal_3570298.asm.SymbolTable.addConstantUtf8(SymbolTable.java:774)
	at app//org.jacoco.agent.rt.internal_3570298.asm.SymbolTable.addConstantNameAndType(SymbolTable.java:740)
	at app//org.jacoco.agent.rt.internal_3570298.asm.SymbolTable.addConstantMemberReference(SymbolTable.java:572)
	at app//org.jacoco.agent.rt.internal_3570298.asm.SymbolTable.addConstantMethodref(SymbolTable.java:542)
	at app//org.jacoco.agent.rt.internal_3570298.asm.MethodWriter.visitMethodInsn(MethodWriter.java:1035)
	at app//org.jacoco.agent.rt.internal_3570298.core.internal.instr.DuplicateFrameEliminator.visitMethodInsn(DuplicateFrameEliminator.java:78)
	at app//org.jacoco.agent.rt.internal_3570298.core.internal.instr.ClassFieldProbeArrayStrategy.storeInstance(ClassFieldProbeArrayStrategy.java:55)
	at app//org.jacoco.agent.rt.internal_3570298.core.internal.instr.ProbeInserter.visitCode(ProbeInserter.java:96)
	at app//org.jacoco.agent.rt.internal_3570298.asm.MethodVisitor.visitCode(MethodVisitor.java:232)
	at app//org.jacoco.agent.rt.internal_3570298.asm.MethodVisitor.visitCode(MethodVisitor.java:232)
	at app//org.jacoco.agent.rt.internal_3570298.asm.MethodVisitor.visitCode(MethodVisitor.java:232)
	at app//org.jacoco.agent.rt.internal_3570298.asm.tree.MethodNode.accept(MethodNode.java:742)
	at app//org.jacoco.agent.rt.internal_3570298.core.internal.flow.MethodProbesVisitor.accept(MethodProbesVisitor.java:165)
	at app//org.jacoco.agent.rt.internal_3570298.core.internal.flow.ClassProbesAdapter$2.visitEnd(ClassProbesAdapter.java:89)
	at app//org.jacoco.agent.rt.internal_3570298.asm.ClassReader.readMethod(ClassReader.java:1495)
	at app//org.jacoco.agent.rt.internal_3570298.asm.ClassReader.accept(ClassReader.java:721)
	at app//org.jacoco.agent.rt.internal_3570298.asm.ClassReader.accept(ClassReader.java:401)
	at app//org.jacoco.agent.rt.internal_3570298.core.instr.Instrumenter.instrument(Instrumenter.java:90)
	at app//org.jacoco.agent.rt.internal_3570298.core.instr.Instrumenter.instrument(Instrumenter.java:108)
	at app//org.jacoco.agent.rt.internal_3570298.CoverageTransformer.transform(CoverageTransformer.java:92)
	at java.instrument@13.0.2/java.lang.instrument.ClassFileTransformer.transform(ClassFileTransformer.java:246)
	at java.instrument@13.0.2/sun.instrument.TransformerManager.transform(TransformerManager.java:188)
	at java.instrument@13.0.2/sun.instrument.InstrumentationImpl.transform(InstrumentationImpl.java:563)
	at java.base@13.0.2/java.lang.ClassLoader.defineClass1(Native Method)
	at java.base@13.0.2/java.lang.ClassLoader.defineClass(ClassLoader.java:1016)
	at java.base@13.0.2/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:151)
	at java.base@13.0.2/jdk.internal.loader.BuiltinClassLoader.defineClass(BuiltinClassLoader.java:821)
	at java.base@13.0.2/jdk.internal.loader.BuiltinClassLoader.findClassOnClassPathOrNull(BuiltinClassLoader.java:719)
	at java.base@13.0.2/jdk.internal.loader.BuiltinClassLoader.loadClassOrNull(BuiltinClassLoader.java:642)
	at java.base@13.0.2/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:600)
	at java.base@13.0.2/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base@13.0.2/java.lang.ClassLoader.loadClass(ClassLoader.java:521)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer.loadProperty(MemberDeserializer.kt:92)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation.computeProperties(DeserializedMemberScope.kt:314)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation.access$computeProperties(DeserializedMemberScope.kt:228)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$properties$1.invoke(DeserializedMemberScope.kt:253)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$properties$1.invoke(DeserializedMemberScope.kt:253)
	at app//kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager$MapBasedMemoizedFunction.invoke(LockBasedStorageManager.java:578)
	at app//kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull.invoke(LockBasedStorageManager.java:651)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation.getContributedVariables(DeserializedMemberScope.kt:338)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation.addFunctionsAndPropertiesTo(DeserializedMemberScope.kt:352)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.computeDescriptors(DeserializedMemberScope.kt:115)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope$allDescriptors$1.invoke(DeserializedClassDescriptor.kt:257)
	at app//kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope$allDescriptors$1.invoke(DeserializedClassDescriptor.kt:256)
	at app//kotlin.reflect.jvm.internal.impl.storage.Loc...
```


---

<a id="1113"></a>

### #1113: Unbalance external workflow configuration?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1113 |
| **State** | OPEN |
| **Author** | javiercanillas (Javier Canillas) |
| **Created** | 2022-03-29 13:34:18.000 UTC (3y 9m ago) |
| **Updated** | 2022-04-01 22:02:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Workflow configuration can be achieved in two different ways. The first one, descrived on docs is through the Workflow implementation constructor, like the following (snipped code taken from [tutorial](https://github.com/temporalio/money-transfer-project-template-java/blob/master/src/main/java/moneytransferapp/MoneyTransferWorkflowImpl.java#L12)):

```java
public class MoneyTransferWorkflowImpl implements MoneyTransferWorkflow {
    private static final String WITHDRAW = "Withdraw";
    // RetryOptions specify how to automatically handle retries when Activities fail.
    private final RetryOptions retryoptions = RetryOptions.newBuilder()
            .setInitialInterval(Duration.ofSeconds(1))
            .setMaximumInterval(Duration.ofSeconds(100))
            .setBackoffCoefficient(2)
            .setMaximumAttempts(500)
            .build();
    private final ActivityOptions defaultActivityOptions = ActivityOptions.newBuilder()
            // Timeout options specify when to automatically timeout Activities if the process is taking too long.
            .setStartToCloseTimeout(Duration.ofSeconds(5))
            // Optionally provide customized RetryOptions.
            // Temporal retries failures by default, this is simply an example.
            .setRetryOptions(retryoptions)
            .build();
```

By doing this, configuration seems a little *hardcoded*. But I can have 3 levels of `ActivityOptions`:

1. **A default one that applies to all non-configured activities**, by giving `defaultActivityOptions` to all activities during creation time except those that requires a particular configuration, method to be used `Workflow.newActivityStub(Class<T> activityInterface, ActivityOptions options)`

2. **A particular Option to all methods on a particular Activity**, by creating a particular `ActivityOptions` instead of default and passing it as argument to `Workflow.newActivityStub(Class<T> activityInterface, ActivityOptions options)` when creating the activity instance.
3. **A method base option map**, further configuration might be achieved by using  `Workflow.newActivityStub(Class<T> activityInterface, ActivityOptions options, Map<String, ActivityOptions> activityMethodOptions)`, where each method of the activity can have its own `ActivityOptions`. (This approach is a little tricky since it doesn't support polymorphism)


On the other way, to avoid *hardcoding* configuration, We can use `Worker.registerWorkflowImplementationTypes(WorkflowImplementationOptions options, Class<?>... workflowImplementationClasses)`, by doing so, we need to pass `WorkflowImplementationOptions` containing `defaultActivityOptions` that matches point 1 and also `activityOptions` that matches point 3 of the other approach. But this strategy misses the second point of the above approach, leaving only a default activity option for the whole workflow activities and expose limitation over method polymorphism inside the same activity class (same problem as the method above) and adds a new unique limitation that requires not activities sharing method names.

**Describe the solution you'd like**
Leaving the local method polymorphism method limitation aside, it would be awesome to balance this two configuration strategies to be able to achieve the same without sacrificing functionality.

**Describe alternatives you've considered**
Not much, I have been struggling with this for a while now.

**Additional context**
None so far.



---

<a id="1098"></a>

### #1098: Provide ActivityStub#fromTyped

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1098 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-03-24 21:58:20.000 UTC (3y 9m ago) |
| **Updated** | 2022-03-24 21:58:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As we have `WorkflowStub#fromTyped`, we should have `ActivityStub#fromTyped`. Untyped activity stubs have significantly limited usage in comparison with WorkflowStub, but there is no reason why there shouldn't be a unified experience.


---

<a id="1081"></a>

### #1081: Test flakes with Real Temporal Server leading to infinite activity retry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1081 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-03-17 22:11:09.000 UTC (3y 9m ago) |
| **Updated** | 2025-05-15 02:24:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

`io.temporal.internal.testing.WorkflowTestingTest > testActivityFailure`

fails with 

```
io.temporal.internal.testing.WorkflowTestingTest > testActivityFailure STANDARD_OUT

    21:11:19.001 [Activity Executor taskQueue="test-workflow", namespace="default": 1] WARN  i.t.i.a.POJOActivityTaskHandler - Activity failure. ActivityId=38334385-1f57-30b4-bc10-97377255f018, activityType=Execute, attempt=1

    java.lang.IllegalThreadStateException: Execute-input1
    	at io.temporal.internal.testing.WorkflowTestingTest$FailingActivityImpl.execute(WorkflowTestingTest.java:596)
    	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
    	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
    	at java.lang.reflect.Method.invoke(Method.java:498)
    	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityInboundCallsInterceptor.execute(POJOActivityTaskHandler.java:214)
    	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityImplementation.execute(POJOActivityTaskHandler.java:180)
    	at io.temporal.internal.activity.POJOActivityTaskHandler.handle(POJOActivityTaskHandler.java:120)
    	at io.temporal.internal.worker.ActivityWorker$TaskHandlerImpl.handle(ActivityWorker.java:204)
    	at io.temporal.internal.worker.ActivityWorker$TaskHandlerImpl.handle(ActivityWorker.java:14)
    	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:93)
    	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
    	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
    	at java.lang.Thread.run(Thread.java:750)
.......

    21:20:04.797 [Activity Executor taskQueue="test-workflow", namespace="default": 21] WARN  i.t.i.a.POJOActivityTaskHandler - Activity failure. ActivityId=38334385-1f57-30b4-bc10-97377255f018, activityType=Execute, attempt=78094

    java.lang.IllegalThreadStateException: Execute-input1
    	at io.temporal.internal.testing.WorkflowTestingTest$FailingActivityImpl.execute(WorkflowTestingTest.java:596)
    	at sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)
    	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
    	at java.lang.reflect.Method.invoke(Method.java:498)
    	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityInboundCallsInterceptor.execute(POJOActivityTaskHandler.java:214)
    	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityImplementation.execute(POJOActivityTaskHandler.java:180)
    	at io.temporal.internal.activity.POJOActivityTaskHandler.handle(POJOActivityTaskHandler.java:120)
    	at io.temporal.internal.worker.ActivityWorker$TaskHandlerImpl.handle(ActivityWorker.java:204)
    	at io.temporal.internal.worker.ActivityWorker$TaskHandlerImpl.handle(ActivityWorker.java:164)
    	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:93)
    	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
    	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
    	at java.lang.Thread.run(Thread.java:750)
```

and getting killed by timeout.

It flakes with real Temporal Server only and may manifest a severe server issue.

[java-sdk-public_build_649_docker-unit-test-with-docker-service.log.zip](https://github.com/temporalio/sdk-java/files/8292866/java-sdk-public_build_649_docker-unit-test-with-docker-service.log.zip)



---

<a id="1079"></a>

### #1079: Issue with TestWorkflowEnvironment and ParentClosePolicy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1079 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-03-17 21:52:46.000 UTC (3y 9m ago) |
| **Updated** | 2024-11-19 19:10:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

It looks as during testing child workflow thats started async, with ChildWorkflowOptions->setParentClosePolicy is TERMINATE
when the parent completes, the child workflow is not terminated, but still is allowed to complete.

Reproducer: https://github.com/tsurdilo/test-reproducer
Clone repo, run "mvn clean install" 
You will see test fail with:

org.junit.ComparisonFailure: 
Expected :WORKFLOW_EXECUTION_STATUS_TERMINATED
Actual   :WORKFLOW_EXECUTION_STATUS_COMPLETED


---

<a id="1069"></a>

### #1069: TestWorkflowEnvironment schedules the first activity retry immediately

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1069 |
| **State** | OPEN |
| **Author** | nagl-stripe |
| **Created** | 2022-03-10 19:36:21.000 UTC (3y 10m ago) |
| **Updated** | 2024-11-19 19:11:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
With a retry policy like:
```
      RetryOptions.newBuilder()
          .setInitialInterval(Duration.ofSeconds(10))
          .setBackoffCoefficient(2.0)
          .build();
```

I would expect delays of 10, 20, 40, 80, so attempts (including the first one) run at T0, 10, 30, 70, 150.

## Actual Behavior

Attempts run at T0, 0, 10, 30, 70 - the first retry gets scheduled immediately.

## Steps to Reproduce the Problem

Check out https://github.com/nagl-stripe/sdk-java/commit/b4f764dfdc22102893be1916b325a40322ccd54e - it has a test case that would pass if the actual behavior were the expected behavior

This is very much not-urgent =)

## Specifications

  - Version: latest
  - Platform: TestWorkflowEnviornment


---

<a id="1050"></a>

### #1050: Activity interface which extends an interface with some method using generic types always throws a ClassCastException when said method is called in a Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1050 |
| **State** | OPEN |
| **Author** | natalie-zamani (Natalie Zamani) |
| **Created** | 2022-02-21 23:13:33.000 UTC (3y 10m ago) |
| **Updated** | 2023-04-20 17:39:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

## Expected Behavior
I would expect that an activity interface that extends some other interface with generic types and a method that uses those generic types would have that inherited method be executable as an activity method within a workflow.

## Actual Behavior
A method that's inherited and uses generics in an activity interface always throws a `ClassCastException` when called within a workflow.

An example of the exception (using the repro code included in this issue) is. as follows:
```kotlin
java.lang.ClassCastException: class java.util.LinkedHashMap cannot be cast to class issue.repro.Foo (java.util.LinkedHashMap is in module java.base of loader 'bootstrap'; issue.repro.Foo is in unnamed module of loader 'app')
	at issue.repro.MyActivityImpl.run(ActivityIssueReproTest.kt:38)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityInboundCallsInterceptor.execute(POJOActivityTaskHandler.java:214)
	at io.temporal.internal.activity.POJOActivityTaskHandler$POJOActivityImplementation.execute(POJOActivityTaskHandler.java:180)
	at io.temporal.internal.activity.POJOActivityTaskHandler.handle(POJOActivityTaskHandler.java:120)
	at io.temporal.internal.worker.LocalActivityWorker$TaskHandlerImpl.handleLocalActivity(LocalActivityWorker.java:235)
	at io.temporal.internal.worker.LocalActivityWorker$TaskHandlerImpl.handle(LocalActivityWorker.java:207)
	at io.temporal.internal.worker.LocalActivityWorker$TaskHandlerImpl.handle(LocalActivityWorker.java:196)
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:93)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
	at java.base/java.lang.Thread.run(Thread.java:829)
```

## Steps to Reproduce the Problem
The repro Kotlin code below uses the Temporal Java SDK (with the Kotlin library), and [mockk](https://mockk.io) and [Kotest](https://kotest.io).

```kotlin
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import io.kotest.core.spec.style.ShouldSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import io.temporal.activity.ActivityInterface
import io.temporal.activity.LocalActivityOptions
import io.temporal.client.WorkflowClientOptions
import io.temporal.client.WorkflowOptions
import io.temporal.common.converter.DefaultDataConverter
import io.temporal.common.converter.JacksonJsonPayloadConverter
import io.temporal.internal.logging.LoggerTag
import io.temporal.testing.TestEnvironmentOptions
import io.temporal.testing.TestWorkflowEnvironment
import io.temporal.worker.Worker
import io.temporal.worker.WorkerOptions
import io.temporal.worker.WorkflowImplementationOptions
import io.temporal.workflow.Workflow
import io.temporal.workflow.WorkflowInterface
import io.temporal.workflow.WorkflowMethod
import java.time.Duration

class Foo

class Bar

interface InterfaceWithGenerics<InputT : Any, OutputT : Any> {
    fun run(input: InputT): OutputT
}

@ActivityInterface
interface MyActivity : InterfaceWithGenerics<Foo, Bar>

class MyActivityImpl : MyActivity {
    override fun run(input: Foo): Bar {
        return Bar()
    }
}

@WorkflowInterface
interface MyWorkflow {
    @WorkflowMethod
    fun run(input: Foo): Bar
}

class MyWorkflowImpl : MyWorkflow {
    private val myActivity = Workflow.newLocalActivityStub(
        MyActivity::class.java,
        LocalActivityOptions { setStartToCloseTimeout(Duration.ofSeconds(10)) }
    )

    override fun run(input: Foo): Bar {
        return myActivity.run(input)
    }
}

class ActivityIssueReproTest : ShouldSpec({
    val myActivity = mockk<MyActivityImpl>()

    val testEnv: TestWorkflowEnvironment = run {
        val objectMapper: ObjectMapper = ObjectMapper().also { mapper ->
            mapper.registerKotlinModule()
        }
        val dataConverter = DefaultDataConverter(JacksonJsonPayloadConverter(objectMapper))
        val workflowClientOptions = WorkflowClientOptions.newBuilder()
            .setDataConverter(dataConverter)
            .build()
        val workflowTestEnvironmentOptions = TestEnvironmentOptions.newBuilder()
            .setWorkflowClientOptions(workflowClientOptions)
            .build()

        TestWorkflowEnvironment.newInstance(workflowTestEnvironmentOptions)
    }

    val worker: Worker = run {
        val workerOptions: WorkerOptions = WorkerOptions.newBuilder()
            .setDefaultDeadlockDetectionTimeout(5_000L)
            .validateAndBuildWithDefaults()

        testEnv.newWorker(LoggerTag.TASK_QUEUE, workerOptions).also { worker ->
            // Register the workflow implementation(s)
            worker.registerWorkflowImplementationTypes(
                WorkflowImplementationOptions { setFailWorkflowExceptionTypes(Throwable::class.java) },
                MyWorkflowImpl::class.java
            )
            // Register the activity implementation(s)
            worker.registerActivitiesImplementations(myActivity)
        }
    }

    val defaultWorkflowOptions = WorkflowOptions
        .newBuilder()
        .setTaskQueue(LoggerTag.TASK_QUEUE)
        .build()

    beforeTest {
        testEnv.start()
    }

    should("repro the Temporal issue we're seeing") {
        val response = Bar()
        every { myActivity.run(any()) } returns response

        val myWorkflow = testEnv.workflowClient.newWorkflowStub(
            MyWorkflow::class.java,
            defaultWorkflowOptions
        )

        val foo = Foo()
        val result = myWorkflow.run(foo)

        result shouldBe response
        verify {
            myActivity.run(foo)
        }
    }

    afterTest {
        testEnv.close()
    }
})
```

## Specifications

  - Version: 1.8.0
  - Platform: macOS



---

<a id="1035"></a>

### #1035: Add metric for time passed from the activity scheduling to the last attempt

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1035 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-02-08 17:56:18.000 UTC (3y 11m ago) |
| **Updated** | 2024-12-17 21:27:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
If users want to set an alert for activities that keep retrying and failing, there is no appropriate metric to handle that.
`activity_succeed_endtoend_latency` includes only successful executions.
`activity_execution_latency` handles the execution of a single activity task only.

**Describe the solution you'd like**
We should add a metric reporting how much time passed from an activity schedule to the last activity attempt. This metric should have an activity type as a tag and be SDK side.

**Describe alternatives you've considered**
Users can produce their own custom metrics. But it looks like such a common concern, that Temporal SDK should provide a built-in way to detect it.

GoSDK issue: https://github.com/temporalio/sdk-go/issues/718


---

<a id="1019"></a>

### #1019: Log long poll failures (but not too frequently to avoid spamming)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1019 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-01-31 18:44:54.000 UTC (3y 11m ago) |
| **Updated** | 2022-01-31 18:44:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

This is already implemented in Core and now in Go.

Java should have the same behavior.

See: https://github.com/temporalio/sdk-go/pull/708


---

<a id="1009"></a>

### #1009: Provide ActivityStub that is bound to the specific activityType or a specific invocation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/1009 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-29 21:39:47.000 UTC (3y 11m ago) |
| **Updated** | 2024-12-17 21:19:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Temporal JavaSDK has an untyped `WorkflowStub` that is bound to a specific method invocation (workflow method), while a currently existing ActivityStub is bound to the AcitivityInterface and not to the specific activity type. 

The source of the inconsistency is that one `WorkflowInterface` has always only one "entry" workflow method, while an ActivityInterface can have several `ActivityMethod`.

To keep things consistent, we should have a variation of the ActivityStub that binds an execution of the activity to a specific type the same way as WorkflowStub. There also should be an `ActivityStub.fromTyped` method working similarly with `WorkflowStub.fromTyped` (but probably taking a method reference instead of a pointer to an instance)

The current Activity stub that we have in JavaSDK looks like
```
public interface ActivityStub {
  <R> R execute(String activityName, Class<R> resultClass, Object... args);

  <R> R execute(String activityName, Class<R> resultClass, Type resultType, Object... args);

  <R> Promise<R> executeAsync(String activityName, Class<R> resultClass, Object... args);

  <R> Promise<R> executeAsync(
      String activityName, Class<R> resultClass, Type resultType, Object... args);
}```
which is inconsistent with WorkflowStub and makes it harder to work with untyped ActivityStubs.



---

<a id="902"></a>

### #902: Exception in one of several "parallel" workflow async functions leads to non-deterministic execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/902 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-28 20:00:56.000 UTC (4y 1m ago) |
| **Updated** | 2024-12-17 21:21:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Temporal JavaSDK explicitly supports the idea of fixing a bug leading to an exception in the workflow implementation. Workflow can throw a non `ApplicationFailure` exception and such an exception can be fixed in code, the worker can be redeployed and the workflow should be able to successfully continue the existing execution without resetting the history.

The following code simulates a situation when a second asynchronously triggered procedure throws an exception on the first execution and the problem is getting "fixed" on the second attempt. You would expect that this code will be able to successfully finish on a second attempt. 

```
    public String execute(String input) {
      List<Promise<Void>> processingPromises = new ArrayList<>();
      processingPromises.add(
          Async.procedure(this::procedure, "input1", false, Workflow.isReplaying()));
      processingPromises.add(
          Async.procedure(this::procedure, "input2", true, Workflow.isReplaying()));
      processingPromises.forEach(Promise::get);
      return "done";
    }

    private void procedure(String obj, boolean failingOnTheFirstRun, boolean retrying) {
      ActivityAlphabet activity = Workflow.newActivityStub(ActivityAlphabet.class);
      
      // only the second Async procedure fails and only during the initial run 
      if (failingOnTheFirstRun && !retrying) {
        // emulating fail with some implementation bug
        throw new NullPointerException();
      }
      activity.doA(obj);
      activity.doB(obj);
    }
```

## Actual Behavior

Non-deterministic exception:

```
Caused by: io.temporal.worker.NonDeterministicException: Failure handling event 11 of type 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED' during replay. Command COMMAND_TYPE_SCHEDULE_ACTIVITY_TASK doesn't match event EVENT_TYPE_ACTIVITY_TASK_SCHEDULED with EventId=11 on check activityType with an expected value name: "DoA"
 and an actual value name: "DoB"
. {PreviousStartedEventId=9, workflowTaskStartedEventId=18, Currently Processing StartedEventId=9}
	at io.temporal.internal.statemachines.WorkflowStateMachines.assertMatch(WorkflowStateMachines.java:887)
	at io.temporal.internal.statemachines.WorkflowStateMachines.validateCommand(WorkflowStateMachines.java:817)
	at io.temporal.internal.statemachines.WorkflowStateMachines.handleCommandEvent(WorkflowStateMachines.java:338)
	at io.temporal.internal.statemachines.WorkflowStateMachines.handleSingleEvent(WorkflowStateMachines.java:229)
	at io.temporal.internal.statemachines.WorkflowStateMachines.handleEventsBatch(WorkflowStateMachines.java:200)
	at io.temporal.internal.statemachines.WorkflowStateMachines.handleEvent(WorkflowStateMachines.java:176)
	at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.handleWorkflowTaskImpl(ReplayWorkflowRunTaskHandler.java:176)
	at io.temporal.internal.replay.ReplayWorkflowRunTaskHandler.handleWorkflowTask(ReplayWorkflowRunTaskHandler.java:145)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTaskWithQuery(ReplayWorkflowTaskHandler.java:127)
	at io.temporal.internal.replay.ReplayWorkflowTaskHandler.handleWorkflowTask(ReplayWorkflowTaskHandler.java:102)
```

Test reproducing the problem: https://github.com/Spikhalskiy/java-sdk/commit/43ce60f9518fc1acb871a73aafab6df2a57749df#diff-96be05397e0cfb9f8d1bdc02587f70a34e65e1b42b8e908964162f39d27f249aR46

## Root cause analysis

1. Async procedure can't propagate the exception on the main worklow thead when it happens, the exception "stays in the Promise" until it's checked.
2. Workflow code is awaiting for the first promise from the non-failing procedure before starting the await on the second failing promise.
3. Failure of the second procedure is getting ignored for some time and the first procedure gets a chance to advance and be fully complete, produce a couple of completed activity executions before we realize that the second procedure is failed already. 
4. These "unlawfully" advanced first procedure and it's scheduled activities recorded in the history create a history that is incompatible with "fixed" code and can't be replayed by a "fixed" version.

The reason this happens is eager evaluation. As soon as the promises are created they begin evaluating. Now imagine the following sequence of events:

**First execution**
1. Promises 1&2 start running
1. Promise 1 schedules A
1. Promise 2 throws, but exception is not propagated up yet
1. Promise 1 schedules B
1. We send 1A and 1B to server
Next go-round we blow up w/ the exception

**Expected fixed execution**
1. Promises 1&2 start running
1. Promise 1 schedules A
1. Promise 2 schedules A because it is fixed now _//<-- Failing here now_
1. Promise 1 schedules B
1. Promise 2 schedules B

Oops now 2A is out-of-order according to existing history. 2B would be OK since there was nothing before it besides the task failure in history.
So, we are failing after step 3 with non-deterministic error because the command 2A doesn't match the expected event 1B from the history.

## Workaround

1. Using `Promise.allOf` to wait on all the promises doesn't allow the exception to be "ignored" because we wait only on the one promise at a time. Has to be implemented correctly in this way before the problem actually happened and the incorrect history is already produced.
1. Promoting all exceptions happening in Async functions/procedures to Errors solves this by immediately failing the workflow task. This has to be done before the workflow execution and before the incompatible history is already produced.

The only solution if the problem already manifested itself is history reset + one of the workarounds to prevent it from happening again.

## Notes about the original user report

Investigation triggered by:
https://community.temporal.io/t/verifying-error-handling-and-fixing-buggy-code-within-async-procedure-promises/3391/10

Which leaded to creation of simplified flaky reproduction 
https://github.com/Spikhalskiy/java-sdk/commit/eb6b44142fa5f2fb31809dace8aedb435307430b
that flakes about 5% of the time and requires `WorkflowImplZRetriesTestCopy1` to be executed after `WorkflowImplRetriesTest` to increase the chance of the problem happening.

The original flaky reproduction may be very hard to follow and link to the described issue, because the problem occurs there only under a specific ordering of the activity executions and completions that leads to an effective "reordering" of asynchronous procedures execution.




---

<a id="862"></a>

### #862: Make tracing tags consistent across SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/862 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-11-08 14:34:48.000 UTC (4y 2m ago) |
| **Updated** | 2024-12-17 21:26:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Tracing tags are not consistent across SDKs.

**Describe the solution you'd like**

Make tracing tags consistent across SDKs.

**Additional context**

* Go: https://github.com/temporalio/sdk-go/issues/619
* TypeScript: https://github.com/temporalio/sdk-typescript/issues/360


---

<a id="860"></a>

### #860: Passing too large blob as an Activity input ends with non-descriptive gRPC error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/860 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-05 17:55:54.000 UTC (4y 2m ago) |
| **Updated** | 2021-11-05 17:57:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

If we pass a blob as an activity input that is larger than a server limit, we should get a descriptive message from the server about the failure and a clean Activity failure.

## Actual Behavior

We get a broken gRPC channel.

## Related user request:

_while passing blob object into activity calls (say pdf or image files) I am getting the below exception
io.grpc.internal.AbstractClientStream$TransportState.inboundDataReceived Received data on closed stream_



---

<a id="857"></a>

### #857: Expose SignalExternalWorkflowExecutionCommandAttributes.ChildWorkflowOnly in SDK API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/857 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-11-04 16:55:23.000 UTC (4y 2m ago) |
| **Updated** | 2024-12-17 21:26:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
`SignalExternalWorkflowExecutionCommandAttributes.ChildWorkflowOnly` is not exposed as a part of any JavaSDK API.
It's also not in the parameters of signal interceptors.

**Describe the solution you'd like**
We should productize on how this flag should be exposed to the user's code. A specific usecase when settings this flag to true is also needed and will be helpful for documentation purposes.

**Additional context**
Parity between SDKs. Go and Typescript SDKs expose this flag as a part of their interceptor implementations.



---

<a id="851"></a>

### #851: Allow more granular setting of QueryRejectCondition 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/851 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-10-31 16:57:08.000 UTC (4y 2m ago) |
| **Updated** | 2024-12-17 21:27:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

We should be able to specify QueryRejectCondition for each query or at least for each specific workflow stub to have a granular enough control.

## Actual Behavior

Right now the only way to specify `QueryRejectCondition` in JavaSDK is on `WorkflowClientOptions`, which means that once the rejection level is specified, it will be applied for all queries for all workflows queried from the client.


---

<a id="818"></a>

### #818: Automatically supply binaryChecksum

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/818 |
| **State** | OPEN |
| **Author** | yiminc (Yimin Chen) |
| **Created** | 2021-10-13 20:28:42.000 UTC (4y 2m ago) |
| **Updated** | 2023-05-23 16:38:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
SDK worker should automatically supply binary checksum (which is a hash on the worker image) to all calls of RespondWorkflowTaskCompeleted/Failed/etc. 

## Actual Behavior
User has to supply the checksum, or it is empty string.

## Steps to Reproduce the Problem

  1.
  1.
  1.

## Specifications

  - Version:
  - Platform:



---

<a id="794"></a>

### #794: Report replay metrics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/794 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-10-05 05:35:42.000 UTC (4y 3m ago) |
| **Updated** | 2024-12-17 21:19:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
We don't report the completion of workflows during replays. This is a good default behavior for these main completion counters, but we are lacking any reporting of replays counters.

**Describe the solution you'd like**
Replay metrics could be important for detecting the anomaly behavior of the system. We should discuss how do we want to report replays metric. 
- Do we want to report them by status codes? 
- Do we want to just report a total number of replays? 
- Only full replays or partial too?



---

<a id="753"></a>

### #753: Offer ActivityOptions via Supplier to support dynamic configs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/753 |
| **State** | OPEN |
| **Author** | robzienert (Rob Zienert) |
| **Created** | 2021-09-22 17:17:11.000 UTC (4y 3m ago) |
| **Updated** | 2021-09-22 17:17:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Tuning activity timeouts in workflows involves rebuilding and deploying an application, which can be an unacceptably long turnaround time depending on the urgency of the timeout change (e.g. in response to an incident). Some workers may also have a long startup / awaitTermination cycle, so the current methodology of updating a dynamic config and then redeploying is also too long of a loop.

**Describe the solution you'd like**
`ActivityOptions` provided via `WorkerImplementationOptions` to support a `Supplier<ActivityOptions>` would help allow us to plugin a dynamic config store to update workers' activity options, specifically the timeouts, on a faster cycle.

**Describe alternatives you've considered**
- Changing the configs in code, redeploying
- Changing configs and then restarting the workers



---

<a id="748"></a>

### #748: Provide a way to inject options into Workflow instances

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/748 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-09-21 20:03:12.000 UTC (4y 3m ago) |
| **Updated** | 2024-12-17 21:27:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

If injection to Workflow instances is discouraged, we should have a way to provide options to the workflow instances.
These options can be provided by external code (built based on configuration or modified for unit tests).
This at least is related to RetryOptions and ActivityOptions.


---

<a id="746"></a>

### #746: Reuse of ActivityStubs from another workflow should produce a usable diagnostic or be allowed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/746 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-09-21 17:45:07.000 UTC (4y 3m ago) |
| **Updated** | 2024-12-17 21:20:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
ActivityStubs should be created for each workflow instance / execution separately.

But if somebody uses Dependency Injection frameworks with Temporal it's very easy to misconfigure the wiring (for example, by making them lazily initialized on first usage singletons) in a way that activity stubs will be leaking between workflow instances.
We should detect or provide better protection or diagnostic if this happens that actually helps to understand the problem.

## Actual Behavior

Cryptic Event Loop error that makes to look in a completely wrong direction.

```
        Caused by:
        io.temporal.failure.ApplicationFailure: message='Operation allowed only while eventLoop is running', type='java.lang.IllegalStateException', nonRetryable=false
            at io.temporal.internal.statemachines.WorkflowStateMachines.checkEventLoopExecuting(WorkflowStateMachines.java:915)
            at io.temporal.internal.statemachines.WorkflowStateMachines.randomUUID(WorkflowStateMachines.java:611)
            at io.temporal.internal.replay.ReplayWorkflowContextImpl.randomUUID(ReplayWorkflowContextImpl.java:93)
            at io.temporal.internal.sync.SyncWorkflowContext.constructExecuteLocalActivityParameters(SyncWorkflowContext.java:351)
            at io.temporal.internal.sync.SyncWorkflowContext.executeLocalActivityOnce(SyncWorkflowContext.java:292)
            at io.temporal.internal.sync.SyncWorkflowContext.executeLocalActivityOnce(SyncWorkflowContext.java:275)
            at io.temporal.internal.sync.SyncWorkflowContext.lambda$executeLocalActivity$a6925f48$1(SyncWorkflowContext.java:269)
            at io.temporal.internal.sync.WorkflowRetryerInternal.retryAsync(WorkflowRetryerInternal.java:232)
            at io.temporal.internal.sync.SyncWorkflowContext.executeLocalActivity(SyncWorkflowContext.java:268)
            at io.temporal.common.interceptors.WorkflowOutboundCallsInterceptorBase.executeLocalActivity(WorkflowOutboundCallsInterceptorBase.java:48)
            at io.temporal.opentracing.internal.OpenTracingWorkflowOutboundCallsInterceptor.executeLocalActivity(OpenTracingWorkflowOutboundCallsInterceptor.java:70)
            at io.temporal.internal.sync.LocalActivityStubImpl.executeAsync(LocalActivityStubImpl.java:50)
            at io.temporal.internal.sync.ActivityStubBase.execute(ActivityStubBase.java:38)
            at io.temporal.internal.sync.LocalActivityStubImpl.execute(LocalActivityStubImpl.java:29)
            at io.temporal.internal.sync.LocalActivityInvocationHandler.lambda$getActivityFunc$0(LocalActivityInvocationHandler.java:72)
            at io.temporal.internal.sync.ActivityInvocationHandlerBase.invoke(ActivityInvocationHandlerBase.java:70)
            at com.sun.proxy.$Proxy158.execute(Unknown Source:0)
            <!-- a project specific workflow code -->
            at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method:0)
            at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
            at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
            at java.base/java.lang.reflect.Method.invoke(Method.java:566)
            at io.temporal.internal.sync.POJOWorkflowImplementationFactory$POJOWorkflowImplementation$RootWorkflowInboundCallsInterceptor.execute(POJOWorkflowImplementationFactory.java:321)
            at io.temporal.common.interceptors.WorkflowInboundCallsInterceptorBase.execute(WorkflowInboundCallsInterceptorBase.java:37)
            at io.temporal.opentracing.internal.OpenTracingWorkflowInboundCallsInterceptor.execute(OpenTracingWorkflowInboundCallsInterceptor.java:72)
            at io.temporal.internal.sync.POJOWorkflowImplementationFactory$POJOWorkflowImplementation.execute(POJOWorkflowImplementationFactory.java:295)
            at io.temporal.internal.sync.WorkflowExecuteRunnable.run(WorkflowExecuteRunnable.java:53)
            at io.temporal.internal.sync.SyncWorkflow.lambda$start$0(SyncWorkflow.java:131)
            at io.temporal.internal.sync.CancellationScopeImpl.run(CancellationScopeImpl.java:101)
            at io.temporal.internal.sync.WorkflowThreadImpl$RunnableWrapper.run(WorkflowThreadImpl.java:110)
            at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
            at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
            at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
            at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
            at java.base/java.lang.Thread.run(Thread.java:829)
```

This specific issue happened with DI wiring using Dagger

# Alternative

There is no reason for ActivityStub that is a pair of ActivityType, ActivityOptions to don't be workflow context-independent. We can make internal changes to make them safely shareable, which is probably a better user experience.


---

<a id="732"></a>

### #732: Remove TestWorkflowRule#testTimeoutSeconds

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/732 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-09-16 20:44:20.000 UTC (4y 3m ago) |
| **Updated** | 2024-12-17 21:26:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | java |
| **Assignees** | None |
| **Milestone** | Next |

#### Description

We deprecated `TestWorkflowRule#testTimeoutSeconds` in https://github.com/temporalio/sdk-java/pull/719
and removed the default timeout for user-facing Rule. 
Deprecation will be released as a part of 1.4
We should clean up the implementation from TestWorkflowRule in 1.5


---

<a id="731"></a>

### #731: Activities that return with interrupted flag should be successfully reported as Completed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/731 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-09-16 19:03:01.000 UTC (4y 3m ago) |
| **Updated** | 2024-12-17 21:27:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, good first issue |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

If Activity 
- never noticed and interrupted flag or
-  caught an interrupted exception, restored the interrupted flag, and continued to run or returned a result
should be reported as Completed with its returned value.

## Actual Behavior

According to https://github.com/temporalio/sdk-java/pull/722#discussion_r707879325
if activity returns with an interrupted flag turned on, subsequent gRPC calls fail and the Activity result never gets reported.

## Proposed solution

- We should write a stable reproducible test close to a test that was changed in https://github.com/temporalio/sdk-java/pull/722
- When Activity returns with interrupted flag = "true", we should hide the flag, report the result of Activity execution to the server, and return the flag back after that allowing the thread pool to stop.


---

<a id="665"></a>

### #665: Allow users to specify or influence RpcRetryOptions for all kinds of GrpcRetries

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/665 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-08-24 21:46:44.000 UTC (4y 4m ago) |
| **Updated** | 2024-12-17 21:19:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Temporal strives to provide reasonable defaults for Retry options.
Also, we try to not expose `RpcRetryOptions` because of how easy they are to misconfigure.
But in some cases, our default choices don't work and there is no one value that fits all use cases. 
The initial retry period is an example of a property that requires very different values for 
- microservice orchestration usecase (we want to keep it really low) 
- more traditional workflow or batch processing usecase where we want to avoid a snowball effect of retries and we can afford to wait.

We should come up with some ability to influence/specify RpcRetryOptions for our users to allow them to tune Temporal for their specific use case, but keeping a balance with incapsulation and enforcing the retry options to be safe.


---

<a id="661"></a>

### #661: Sync versions of GrpcRetryer should throw InterruptedException 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/661 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-08-23 15:58:47.000 UTC (4y 4m ago) |
| **Updated** | 2024-12-17 21:18:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

GrpcRetryer retry method by its nature is expected to throw InterruptedException because they
1. perform waiting on a timer 
2. could get an Interrupted flag from GRPC calls with a StatusRuntimeException exception with CANCELLED status

Now handling of InterruptedExceptions is brittle:
1. we hide the Interrupted exceptions from the timer and we raise an Interrupted flag instead.
2. We consider StatusRuntimeException with CANCELLED from GRPC as non-retryable.

So, code that uses GrpcRetryer should expect a non-Interrupted Exception + Interrupted flag if interruption happens.
There is nothing wrong with the model per se if the users are very aware of the potential interrupted flag and process it correctly.
But to make code more idiomatic and enforce the correct handling of InterruptedException and awareness of its possibility inside GrpcRetryer, we should change GrpcRetryer methods to throw explicit InterruptedExceptions.



---

<a id="608"></a>

### #608: GRPC falling into in-process server long polls after interruption breaks graceful Worker Pollers shutdown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/608 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-07-26 21:56:48.000 UTC (4y 5m ago) |
| **Updated** | 2025-05-17 14:56:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

# Problem

An investigation of flaky `InterceptorsExceptionsTests#testExceptionOnStart` test from https://github.com/temporalio/sdk-java/issues/455 ended up inside GRPC code that swallows `InterruptedException` in intention to perform a graceful shutdown, but instead peeking up a long poll task submitted by another poller thread (from another non-shutdown thread pool) and falling into a long poll inside in-memory GRPC server implementation. The stacktrace of the hanging Poller thread AFTER receiving an interruption:
```
"Host Local Workflow Poller: 5@3606" daemon prio=5 tid=0x1c nid=NA waiting
  java.lang.Thread.State: WAITING
	  at jdk.internal.misc.Unsafe.park(Unsafe.java:-1)
	  at java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:252)
	  at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:1661)
	  at java.util.concurrent.LinkedBlockingQueue.poll(LinkedBlockingQueue.java:460)
	  at io.temporal.internal.testservice.TestWorkflowStoreImpl.pollWorkflowTaskQueue(TestWorkflowStoreImpl.java:347)
	  at io.temporal.internal.testservice.TestWorkflowService.pollWorkflowTaskQueue(TestWorkflowService.java:448)
	  at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$MethodHandlers.invoke(WorkflowServiceGrpc.java:3625)
	  at io.grpc.stub.ServerCalls$UnaryServerCallHandler$UnaryServerCallListener.onHalfClose(ServerCalls.java:182)
	  at io.grpc.internal.ServerCallImpl$ServerStreamListenerImpl.halfClosed(ServerCallImpl.java:331)
	  at io.grpc.internal.ServerImpl$JumpToApplicationThreadServerStreamListener$1HalfClosed.runInContext(ServerImpl.java:797)
	  at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)
	  at io.grpc.internal.SerializeReentrantCallsDirectExecutor.execute(SerializeReentrantCallsDirectExecutor.java:49)
	  at io.grpc.internal.ServerImpl$JumpToApplicationThreadServerStreamListener.halfClosed(ServerImpl.java:808)
	  at io.grpc.inprocess.InProcessTransport$InProcessStream$InProcessClientStream.halfClose(InProcessTransport.java:793)
	  - locked <0xf41> (a io.grpc.inprocess.InProcessTransport$InProcessStream$InProcessClientStream)
	  at io.grpc.internal.ForwardingClientStream.halfClose(ForwardingClientStream.java:72)
	  at io.grpc.internal.DelayedStream$9.run(DelayedStream.java:344)
	  at io.grpc.internal.DelayedStream.drainPendingCalls(DelayedStream.java:181)
	  at io.grpc.internal.DelayedStream.access$100(DelayedStream.java:43)
	  at io.grpc.internal.DelayedStream$4.run(DelayedStream.java:147)
	  at io.grpc.stub.ClientCalls$ThreadlessExecutor.waitAndDrain(ClientCalls.java:740)
	  at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:149)
	  at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.pollWorkflowTaskQueue(WorkflowServiceGrpc.java:2639)
	  at io.temporal.internal.worker.WorkflowPollTask.poll(WorkflowPollTask.java:81)
	  at io.temporal.internal.worker.WorkflowPollTask.poll(WorkflowPollTask.java:37)
	  at io.temporal.internal.worker.Poller$PollExecutionTask.run(Poller.java:270)
	  at io.temporal.internal.worker.Poller$PollLoopTask.run(Poller.java:235)
	  at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)
	  at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)
	  at java.lang.Thread.run(Thread.java:832)
```

# Partial notes made during an investigation

https://github.com/grpc/grpc-java/blob/9b803f3/stub/src/main/java/io/grpc/stub/ClientCalls.java#L149
GRPC catches the InterruptedException, puts it into a flag var, and goes to a new iteration of the loop. (based on comments waiting for “onClose” to be called)
What actually happens at the moment when we experience problems with shutdown - it finds a job that actually calls a long poll inside `waitAndDrain`, starts to execute it, and hangs there, because the interrupted status has been flushed.
This happens only in a case when a long-poll task ends up in this executor AFTER the thread is interrupted. A situation is likely to happen only when we shut down the environment right after the start. That’s why most tests are ok - they actually take stuff from the server, so long poll is already triggered. 
I made a branch (https://github.com/Spikhalskiy/java-sdk/commit/f543651432f0f7d0173e2461ec00287219c91b12) where I threw a bunch of debug prints inside GRPC code around this waitAndDrain and it shows one more strange/unexpected thing - the long poll task that blocks the intercepted thread is put to the executor of interrupted Poller by another non-yet-interrupted Poller thread.  Basically, we have an intercepted sticky poller thread and the non-intercepted workflow poller thread publishes a long poll task into the intercepted sticky poller executor.

# Assumptions

It looks like this situation is only happening when we have a GRPC client + a GRPC in-process server that performs the long poll. Interruption in the client thread ends up ignored and a Poller thread falls into a long poll inside the in-process GRPC server implementation. Also, timing is very important for it, because the long poll task needs to be submitted right after threads get terminated.
We were unable to reproduce an issue with an actual dockerized Temporal server.
An investigation of this issue is not finished. The best bet right now is: it's a bug in GRPC happening when GRPC client & GRPC in-process server & long polls are used and the right timing is needed for the problem to reproduce.

# Mitigation 

Taking into account that further investigation of this issue is very time-consuming, we decided to mitigate the problem in this specific flaky test by triggering a shutdown of GRPC in-process Temporal server implementation before shutdown of workers. This way GRPC client doesn't have a long poll to fall into after getting an interception. This workaround is implemented in: https://github.com/temporalio/sdk-java/pull/601 and affects only tests code.
The last master commit where `InterceptorsExceptionsTests#testExceptionOnStart` is able to often reproduce the described problem is b4cbaa13f32590e2337a03305dfb6a0af6628bdc.






---

<a id="597"></a>

### #597: Support assertions in `TestWorkflowEnvironment.registerDelayedCallback`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/597 |
| **State** | OPEN |
| **Author** | zhxnlai (Zhixuan Lai) |
| **Created** | 2021-07-20 17:55:16.000 UTC (4y 5m ago) |
| **Updated** | 2021-07-20 17:55:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

When assertions fail in `TestWorkflowEnvironment.registerDelayedCallback`, the errors in the callback are swallowed. This is counterintuitive.

For instance, I expect the following test to fail.
```kotlin
class MyTest {

  private val testEnv: TestWorkflowEnvironment
  
  @Test
  fun thisShouldFail() {
    testEnv.registerDelayedCallback(Duration.ofSeconds(1)) {
      assertThat(false).isTrue()
    }
    testEnv.sleep(Duration.ofSeconds(10))
  }
}
```

But it succeeds with an error log.
```
10:35:11.197 [Timer task] ERROR i.t.i.t.SelfAdvancingTimerImpl - Unexpected failure in timer callback
org.opentest4j.AssertionFailedError: 
Expecting value to be true but was false
	at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
	at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
```

**Describe the solution you'd like**
Propagate the error to the test method.




---

<a id="456"></a>

### #456: Duplicate concurrent workflow - hangs on completion

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/456 |
| **State** | OPEN |
| **Author** | smax48 (Maxim Chuvilyaev) |
| **Created** | 2021-04-29 01:06:50.000 UTC (4y 8m ago) |
| **Updated** | 2024-11-19 19:12:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
I start 2 workflows (one by one) with the same workflowId and `WorkflowIdReusePolicy.WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE` option.
I use `execute` method to start exection.

First workflow is still running when I start the second - so the second should just becomes a "proxy" for the first one and should return the same result without starting a new wf instance.

Then I try to wait for CompletableFuture and get the result.
Pseudo-code for illustration:
```
f1 = WorkflowClient.execute(..., options)
f2 = WorkflowClient.execute(..., options)
result1 = f1.get()
result2 = f2.get()
```

The behaviour is very different when I use Test Environment and real docker containers for Temporal.
With "real" Temporal all works as expected.
I expect that in the test environment it works the same way.

## Actual Behaviour

With Test Environment the second f2.get() call hangs forever.

If the first workflow is fully completed before starting the second, all works OK.


## Steps to Reproduce the Problem

I have a test (implemented in Kotlin) that fully reproduces the described issue. See the attached file.
[DuplicateWorkflowIdTest.kt.zip](https://github.com/temporalio/sdk-java/files/6395725/DuplicateWorkflowIdTest.kt.zip)

## Specifications

  - Version: Java SDK 1.0.7, Temporal 1.8.2
  - Platform: Java SDK 1.0.7, Kotlin 



---

<a id="392"></a>

### #392: TimeLockingFuture implementation is incorrect and easy to break 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/392 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2021-03-20 03:50:43.000 UTC (4y 9m ago) |
| **Updated** | 2024-12-17 21:26:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

CompletableFuture returned from ```WorkflowStub#getResult``` and ```WorkflowStub#getResultAsync``` that has time skipping functionality built-in can correctly work with all CompletableFuture methods without losing time skipping functionality.

## Actual Behavior

CompletableFuture that is returned from ```#getResultAsync``` when we use ```TestWorkflowService``` is ```TimeLockingFuture```. It overrides ```CompletableFuture#get``` and ```CompletableFuture#join``` to provide time skipping functionality.
This implementation is extremely brittle because any chaining of this CompletableFuture will not call the overridden ```#get``` and ```#join```. So even trivial chaining completely and unexpectedly breaks the time-skipping feature.

## Steps to Reproduce the Problem

1. Use TestWorkflowService
2. Perform any trivial chaining on the result returning from getResultAsync
3. Time skipping doesn't work on ```#get``` call on a chained CompletableFuture from step 2.

Demonstration of the problem: https://github.com/Spikhalskiy/java-sdk/commit/e73d574428a7001534601c3bebabb60a23612bff
Adding a trivial ```result = result.thenApply(s -> s);``` chaining breaks the test and it hangs.

## Proposed solution
The current solution with intercepting stub methods and extending ```CompletableFuture``` looks like a hack and I'm not sure if it's possible to make it work correctly with ```CompletableFuture``` implementation.
My proposal is to completely remove built-in time skipping from ```WorkflowStub``` and ```TimeLockingFuture```.
One of the correct and nice ways to give time-skipping to tests developers can be through exposing of method ```.skipTime``` on some helper object that would return an ```AutoCloseable``` object that will trigger disabling of time-skipping at the end. It could be used by the test writers using the following pattern:

```
try (TimeSkipUtils.forStub(worflowStub).skipTimeSegment()) {
    result = resultFuture.get()
}

TimeSkipUtils.forStub can dig into worflowStub and make a helper that is aware of specific TestWorkflowService and provides 
.skipTimeSegment() that returns our ```AutoCloseable``` resource described above.
```

## Specifications

  - Version: Current master (5f2ac6133c6560984eff35cc85faafb85cbf2c94)



---

<a id="262"></a>

### #262: TestWorkflowEnvironment: Set close time on the visibility record

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/262 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-11-20 01:19:18.000 UTC (5y 1m ago) |
| **Updated** | 2024-12-17 21:27:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | test server |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://community.temporal.io/t/testworkflowenvironment-does-not-set-workflowexecutioninfo-closetime/1048


---

<a id="235"></a>

### #235: Make PollerOptions.uncaughtExceptionHandler from workflowOptions etc.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/235 |
| **State** | OPEN |
| **Author** | maxnilz (maxnilz) |
| **Created** | 2020-10-28 08:26:31.000 UTC (5y 2m ago) |
| **Updated** | 2020-10-28 08:26:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, 

## Problem
I'm struggling with the "uncaught exception" which throws from "io.temporal.internal.worker.PollerOptions",  I was tried to check if is there any chance that I can configure the PollerOptions.uncaughtExceptionHandler via the workflow options or any other way,  but it turns out there is no such way that allows me to configure my own uncaughtExceptionHandler if I didn't miss any useful information 

## Expected behavior 
It would be good if I can configure my own uncaughtExceptionHandler from workflowOptions or somewhere else.

## An example "uncaught exception" stack
```
06:12:20.021 [Workflow Executor taskQueue="snapshot", namespace="default": 175] ERROR io.temporal.internal.worker.PollerOptions - uncaught exception
java.lang.RuntimeException: Failure processing workflow task. WorkflowId=snapshot-992, RunId=38b6ca3c-df38-4df8-9028-f025583fe251
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.wrapFailure(WorkflowWorker.java:337) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.wrapFailure(WorkflowWorker.java:275) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:79) ~[temporal-sdk-1.0.0.jar:?]
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_262]
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_262]
	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_262]
Caused by: io.grpc.StatusRuntimeException: NOT_FOUND: Workflow task not found.
	at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:262) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:243) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:156) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.respondWorkflowTaskCompleted(WorkflowServiceGrpc.java:2673) ~[temporal-serviceclient-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.lambda$sendReply$0(WorkflowWorker.java:369) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.lambda$retry$0(GrpcRetryer.java:109) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.retryWithResult(GrpcRetryer.java:127) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.retry(GrpcRetryer.java:106) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.sendReply(WorkflowWorker.java:362) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:313) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:275) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:73) ~[temporal-sdk-1.0.0.jar:?]
	... 3 more
06:12:20.042 [Workflow Executor taskQueue="snapshot", namespace="default": 172] ERROR io.temporal.internal.worker.PollerOptions - uncaught exception
java.lang.RuntimeException: Failure processing workflow task. WorkflowId=snapshot-603, RunId=82e8b23a-24f9-4411-9b2b-b3db5a6a12bc
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.wrapFailure(WorkflowWorker.java:337) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.wrapFailure(WorkflowWorker.java:275) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:79) ~[temporal-sdk-1.0.0.jar:?]
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_262]
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_262]
	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_262]
Caused by: io.grpc.StatusRuntimeException: NOT_FOUND: Workflow task not found.
	at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:262) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:243) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:156) ~[grpc-stub-1.32.1.jar:1.32.1]
	at io.temporal.api.workflowservice.v1.WorkflowServiceGrpc$WorkflowServiceBlockingStub.respondWorkflowTaskCompleted(WorkflowServiceGrpc.java:2673) ~[temporal-serviceclient-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.lambda$sendReply$0(WorkflowWorker.java:369) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.lambda$retry$0(GrpcRetryer.java:109) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.retryWithResult(GrpcRetryer.java:127) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.common.GrpcRetryer.retry(GrpcRetryer.java:106) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.sendReply(WorkflowWorker.java:362) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:313) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.WorkflowWorker$TaskHandlerImpl.handle(WorkflowWorker.java:275) ~[temporal-sdk-1.0.0.jar:?]
	at io.temporal.internal.worker.PollTaskExecutor.lambda$process$0(PollTaskExecutor.java:73) ~[temporal-sdk-1.0.0.jar:?]
	... 3 more

```



---

<a id="227"></a>

### #227: Enable Serialization on WorkflowQueue 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/227 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-10-06 16:55:53.000 UTC (5y 3m ago) |
| **Updated** | 2020-10-06 16:55:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Java-SDK
In the following community thread.
https://community.temporal.io/t/workflow-await-does-it-release-thread/252
To continually process events on a specific entity in the order we received the events, we can use WorkflowQueue. To implement this solution, we need WorkflowQueue to be serializable. At this time we can not use this technique as the WorkflowQueue is not implementing Serializable. The main purpose of this technique is to avoid long running workflows.

**Describe the solution you'd like**
Enable Serialization on WorkflowQueue 

**Describe alternatives you've considered**
Using Java Queue for now

**Additional context**
I received the above details from @maxim in one of my conversation in slack channel. Creating this ticket to make sure this requirement is addressed as part of the future releases.

Created from https://github.com/temporalio/temporal/issues/792



---

<a id="193"></a>

### #193: Update all state machines to avoid self transitions and hidden logic

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-java/issues/193 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-08-22 23:39:12.000 UTC (5y 4m ago) |
| **Updated** | 2024-12-17 21:18:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | Sushisource |
| **Milestone** | None |

#### Description

Some workflow state machines have self transitions and additional conditional logic which is not part of the modeled state machine. For example, ActivityStateMachine has  these self transitions:

```
SCHEDULE_COMMAND_CREATED --> SCHEDULE_COMMAND_CREATED: SCHEDULE_ACTIVITY_TASK
STARTED_ACTIVITY_CANCEL_COMMAND_CREATED --> STARTED_ACTIVITY_CANCEL_COMMAND_CREATED: REQUEST_CANCEL_ACTIVITY_TASK
SCHEDULED_ACTIVITY_CANCEL_COMMAND_CREATED --> SCHEDULED_ACTIVITY_CANCEL_COMMAND_CREATED: REQUEST_CANCEL_ACTIVITY_TASK
```
These should be eliminated by introducing additional states as each of the events that cause state transition can be applied only once.

Activity `cancellationType` is modeled using if/else conditions in ActivityStateMachine. This should be converted to additional states in the state machine itself.

The goal of these changes is to make sure that all of the complex logic related to activity execution is explicitly modeled. This would simplify the understanding of the logic and help with the creation of additional SDKs.


