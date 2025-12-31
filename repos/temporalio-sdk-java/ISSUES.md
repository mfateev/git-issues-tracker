# temporalio/sdk-java - Open Issues

**Generated:** 2025-12-31
**Total Issues:** 215
**Total Upvotes:** 104
**Total Comments:** 203

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 215 |
| Issues with Upvotes | 37 (17%) |
| Total Upvotes | 104 |
| Total Comments | 203 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 126 |
| test server | 37 |
| bug | 33 |
| Mend: dependency security vulnerability | 4 |
| wontfix | 3 |
| good first issue | 2 |
| next-gen | 1 |
| java | 1 |

## Top 20 Issues (by Priority Score)

Priority Score = Upvotes × 2 + Comments

| # | Score | 👍 | 💬 | Age | Title |
|---|-------|-----|-----|-----|-------|
| 1 | 38 | 15 | 8 | 2y 4m | [#1845](https://github.com/temporalio/sdk-java/issues/1845) Support different coroutine models in workflows and activ... |
| 2 | 37 | 16 | 5 | 2y 9m | [#1693](https://github.com/temporalio/sdk-java/issues/1693) Support listWorkflowExecutions in test server |
| 3 | 20 | 10 | 0 | 2y 6m | [#1804](https://github.com/temporalio/sdk-java/issues/1804) Add the possibility to run Temporal CLI server from test  |
| 4 | 18 | 7 | 4 | 1 months | [#2738](https://github.com/temporalio/sdk-java/issues/2738) Spring Boot 4 Support |
| 5 | 12 | 6 | 0 | 5y 3m | [#214](https://github.com/temporalio/sdk-java/issues/214) @SignalMethod threading configuration |
| 6 | 11 | 2 | 7 | 5y 8m | [#1007](https://github.com/temporalio/sdk-java/issues/1007) Scala module |
| 7 | 10 | 0 | 10 | 3y 12m | [#952](https://github.com/temporalio/sdk-java/issues/952) OpenTracing duplicates user created spans during replay |
| 8 | 8 | 1 | 6 | 2 months | [#2676](https://github.com/temporalio/sdk-java/issues/2676) temporal java sdk is using an older version of grpc-netty... |
| 9 | 8 | 4 | 0 | 2y 5m | [#1832](https://github.com/temporalio/sdk-java/issues/1832) Support for using Temporal Annotations as Meta Annotation |
| 10 | 8 | 1 | 6 | 3y 7m | [#1241](https://github.com/temporalio/sdk-java/issues/1241) DynamicWorkflow not taking in account WorkflowImplementat... |
| 11 | 8 | 4 | 0 | 4y 2m | [#827](https://github.com/temporalio/sdk-java/issues/827) Provide a recommended way to pass configuration into work... |
| 12 | 7 | 3 | 1 | 1y 7m | [#2075](https://github.com/temporalio/sdk-java/issues/2075) Add the ability to keep heartbeating while the worker is ... |
| 13 | 7 | 2 | 3 | 1y 8m | [#2046](https://github.com/temporalio/sdk-java/issues/2046) Failed promise before calling allOf is not failing the wr... |
| 14 | 7 | 0 | 7 | 2y 9m | [#1698](https://github.com/temporalio/sdk-java/issues/1698) WorkflowImplementationOptions.FailWorkflowExceptionTypes ... |
| 15 | 7 | 3 | 1 | 3y 8m | [#1163](https://github.com/temporalio/sdk-java/issues/1163) Allow contributions of tags of root worker metricsscope p... |
| 16 | 7 | 0 | 7 | 4y 9m | [#396](https://github.com/temporalio/sdk-java/issues/396) Pluggable activity name provider |
| 17 | 6 | 3 | 0 | 21 days | [#2746](https://github.com/temporalio/sdk-java/issues/2746) Jackson 3 support |
| 18 | 6 | 0 | 6 | 1y 8m | [#2042](https://github.com/temporalio/sdk-java/issues/2042) Activity options merging logic is not correct |
| 19 | 6 | 0 | 6 | 3y 3m | [#1426](https://github.com/temporalio/sdk-java/issues/1426) Test server timeouts improperly set to 10 years when not ... |
| 20 | 6 | 0 | 6 | 4y 2m | [#806](https://github.com/temporalio/sdk-java/issues/806) Workflow.retry that takes a function to decide if retry i... |

---

## All Issues

### Bugs (33)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#952](https://github.com/temporalio/sdk-java/issues/952) | 0 | 10 | 3y 12m | bug | OpenTracing duplicates user created spans durin... |
| [#1241](https://github.com/temporalio/sdk-java/issues/1241) | 1 | 6 | 3y 7m | bug | DynamicWorkflow not taking in account WorkflowI... |
| [#2391](https://github.com/temporalio/sdk-java/issues/2391) | 1 | 2 | 2y 10m | bug, test server | [Bug] Cancelling an activity results in `Failed... |
| [#995](https://github.com/temporalio/sdk-java/issues/995) | 0 | 4 | 3y 11m | bug | Inheritance of workflow interfaces is not suppo... |
| [#317](https://github.com/temporalio/sdk-java/issues/317) | 0 | 4 | 4y 11m | bug | Published artifacts do not include sources for ... |
| [#1540](https://github.com/temporalio/sdk-java/issues/1540) | 0 | 3 | 3y 1m | bug, test server | Test service time skipping broken in a child wo... |
| [#1291](https://github.com/temporalio/sdk-java/issues/1291) | 0 | 3 | 3y 6m | bug, test server | Workflow execution with Workflow.await(conditio... |
| [#1246](https://github.com/temporalio/sdk-java/issues/1246) | 1 | 1 | 3y 7m | bug | Query is not picked up by the worker executing ... |
| [#630](https://github.com/temporalio/sdk-java/issues/630) | 0 | 3 | 4y 4m | bug | Flaky testShouldReturnQueryResultAfterWorkflowT... |
| [#1715](https://github.com/temporalio/sdk-java/issues/1715) | 1 | 0 | 2y 9m | bug | WorkerOptions should enforce an amount of execu... |
| [#1211](https://github.com/temporalio/sdk-java/issues/1211) | 1 | 0 | 3y 7m | bug | MDC context logging properties not propagating ... |
| [#2392](https://github.com/temporalio/sdk-java/issues/2392) | 0 | 1 | 2y 8m | bug, test server | [Bug] Test environment sleep hangs on child wor... |
| [#1374](https://github.com/temporalio/sdk-java/issues/1374) | 0 | 1 | 3y 4m | bug | External workflow signal from a workflow code t... |
| [#1138](https://github.com/temporalio/sdk-java/issues/1138) | 0 | 1 | 3y 8m | bug, test server | Test server does not decrement time skipping lo... |
| [#1107](https://github.com/temporalio/sdk-java/issues/1107) | 0 | 1 | 3y 9m | bug | Workflow metadata resolution code registers an ... |
| [#856](https://github.com/temporalio/sdk-java/issues/856) | 0 | 1 | 4y 1m | bug | WorkflowClient#execute doesn't pair correctly w... |
| [#2307](https://github.com/temporalio/sdk-java/issues/2307) | 0 | 0 | 1y 1m | bug | Removing a `Workflow.GetVersion` call can cause... |
| [#1668](https://github.com/temporalio/sdk-java/issues/1668) | 0 | 0 | 2y 10m | bug | Subsequent MutableSideEffect calls inside one W... |
| [#1549](https://github.com/temporalio/sdk-java/issues/1549) | 0 | 0 | 3y 1m | bug | Metric scope for workflow instance should ignor... |
| [#1538](https://github.com/temporalio/sdk-java/issues/1538) | 0 | 0 | 3y 1m | bug, test server | Test service continue-as-new implementation is ... |
| [#1457](https://github.com/temporalio/sdk-java/issues/1457) | 0 | 0 | 3y 3m | bug | State machine exception during termination |
| [#1429](https://github.com/temporalio/sdk-java/issues/1429) | 0 | 0 | 3y 3m | bug, test server | Test server does not error on already-started c... |
| [#1257](https://github.com/temporalio/sdk-java/issues/1257) | 0 | 0 | 3y 6m | bug | Cached activity heartbeat prevents worker from ... |
| [#1141](https://github.com/temporalio/sdk-java/issues/1141) | 0 | 0 | 3y 8m | bug | Deadlock Detector unexpectedly firing on a cold... |
| [#1081](https://github.com/temporalio/sdk-java/issues/1081) | 0 | 0 | 3y 9m | bug | Test flakes with Real Temporal Server leading t... |
| [#1079](https://github.com/temporalio/sdk-java/issues/1079) | 0 | 0 | 3y 9m | bug, test server | Issue with TestWorkflowEnvironment and ParentCl... |
| [#1069](https://github.com/temporalio/sdk-java/issues/1069) | 0 | 0 | 3y 9m | bug, test server | TestWorkflowEnvironment schedules the first act... |
| [#1050](https://github.com/temporalio/sdk-java/issues/1050) | 0 | 0 | 3y 10m | bug | Activity interface which extends an interface w... |
| [#902](https://github.com/temporalio/sdk-java/issues/902) | 0 | 0 | 4y 1m | bug | Exception in one of several "parallel" workflow... |
| [#860](https://github.com/temporalio/sdk-java/issues/860) | 0 | 0 | 4y 1m | bug | Passing too large blob as an Activity input end... |
| [#731](https://github.com/temporalio/sdk-java/issues/731) | 0 | 0 | 4y 3m | bug, good first issue | Activities that return with interrupted flag sh... |
| [#608](https://github.com/temporalio/sdk-java/issues/608) | 0 | 0 | 4y 5m | bug, test server | GRPC falling into in-process server long polls ... |
| [#456](https://github.com/temporalio/sdk-java/issues/456) | 0 | 0 | 4y 8m | bug, test server | Duplicate concurrent workflow - hangs on comple... |

### Enhancements (126)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | 8 | 2y 4m | enhancement | Support different coroutine models in workflows... |
| [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | 5 | 2y 9m | enhancement, test server | Support listWorkflowExecutions in test server |
| [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | 0 | 2y 6m | enhancement | Add the possibility to run Temporal CLI server ... |
| [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 7 | 4 | 1 months | enhancement | Spring Boot 4 Support |
| [#214](https://github.com/temporalio/sdk-java/issues/214) | 6 | 0 | 5y 3m | enhancement | @SignalMethod threading configuration |
| [#1832](https://github.com/temporalio/sdk-java/issues/1832) | 4 | 0 | 2y 5m | enhancement | Support for using Temporal Annotations as Meta ... |
| [#827](https://github.com/temporalio/sdk-java/issues/827) | 4 | 0 | 4y 2m | enhancement | Provide a recommended way to pass configuration... |
| [#2075](https://github.com/temporalio/sdk-java/issues/2075) | 3 | 1 | 1y 7m | enhancement | Add the ability to keep heartbeating while the ... |
| [#396](https://github.com/temporalio/sdk-java/issues/396) | 0 | 7 | 4y 9m | enhancement | Pluggable activity name provider |
| [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 3 | 0 | 21 days | enhancement | Jackson 3 support |
| [#806](https://github.com/temporalio/sdk-java/issues/806) | 0 | 6 | 4y 2m | enhancement | Workflow.retry that takes a function to decide ... |
| [#626](https://github.com/temporalio/sdk-java/issues/626) | 0 | 6 | 4y 4m | enhancement | Excessive retries in test workflow environment |
| [#2394](https://github.com/temporalio/sdk-java/issues/2394) | 2 | 0 | 11 months | enhancement | Pure opentelemetry based tracing support instea... |
| [#1969](https://github.com/temporalio/sdk-java/issues/1969) | 0 | 4 | 1y 11m | enhancement | Provide WorkflowStatus in WorkflowNotFoundExcep... |
| [#1940](https://github.com/temporalio/sdk-java/issues/1940) | 0 | 4 | 2y 1m | enhancement | Support Java Modules |
| [#1025](https://github.com/temporalio/sdk-java/issues/1025) | 1 | 2 | 3y 11m | enhancement | In case of existing workflow both sync and asyn... |
| [#811](https://github.com/temporalio/sdk-java/issues/811) | 2 | 0 | 4y 2m | enhancement | Add test framework for partial json history rep... |
| [#631](https://github.com/temporalio/sdk-java/issues/631) | 2 | 0 | 4y 4m | enhancement | DeterministicRunner is noisy about not accessed... |
| [#525](https://github.com/temporalio/sdk-java/issues/525) | 1 | 2 | 4y 7m | enhancement | Allow context propagators & interceptors to pop... |
| [#467](https://github.com/temporalio/sdk-java/issues/467) | 1 | 2 | 4y 8m | enhancement | Register multiple activity names for an activity |
| [#86](https://github.com/temporalio/sdk-java/issues/86) | 0 | 4 | 5y 7m | enhancement | Support passing activityId to an activity invoc... |
| [#2312](https://github.com/temporalio/sdk-java/issues/2312) | 1 | 1 | 1y 1m | enhancement | `Workflow.await(duration, condition)` does not ... |
| [#2056](https://github.com/temporalio/sdk-java/issues/2056) | 1 | 1 | 1y 7m | enhancement | Allow users to implement update asynchronously ... |
| [#1988](https://github.com/temporalio/sdk-java/issues/1988) | 1 | 1 | 1y 10m | enhancement | Have a built-in way to override activityOptions... |
| [#1093](https://github.com/temporalio/sdk-java/issues/1093) | 0 | 3 | 3y 9m | enhancement, test server | Add ResetWorkflowExecution support in Test Server |
| [#1010](https://github.com/temporalio/sdk-java/issues/1010) | 0 | 3 | 3y 11m | enhancement | Workflow should have an access to an activity i... |
| [#228](https://github.com/temporalio/sdk-java/issues/228) | 1 | 1 | 5y 2m | enhancement | Expose activity start and completion informatio... |
| [#2741](https://github.com/temporalio/sdk-java/issues/2741) | 1 | 0 | 29 days | enhancement | Support non-workflow activities |
| [#2308](https://github.com/temporalio/sdk-java/issues/2308) | 0 | 2 | 1y 1m | enhancement | Add WorkflowIdConflictPolicy in child workflow ... |
| [#2122](https://github.com/temporalio/sdk-java/issues/2122) | 0 | 2 | 1y 6m | enhancement | Java SDK does not have option to register workf... |
| [#2064](https://github.com/temporalio/sdk-java/issues/2064) | 0 | 2 | 1y 7m | enhancement | Native image descriptor for GraalVM in the temp... |
| [#2063](https://github.com/temporalio/sdk-java/issues/2063) | 1 | 0 | 1y 7m | enhancement | Extend TestWorkflowExtension to support specify... |
| [#2034](https://github.com/temporalio/sdk-java/issues/2034) | 0 | 2 | 1y 8m | enhancement | Provide way to populate activity execution cont... |
| [#1937](https://github.com/temporalio/sdk-java/issues/1937) | 0 | 2 | 2y 1m | enhancement | Support a promise-based await |
| [#1681](https://github.com/temporalio/sdk-java/issues/1681) | 0 | 2 | 2y 10m | enhancement | Exceptions thrown from workflow executor code s... |
| [#1531](https://github.com/temporalio/sdk-java/issues/1531) | 0 | 2 | 3y 1m | enhancement | Declaring ActivityStub using annotation instead... |
| [#1346](https://github.com/temporalio/sdk-java/issues/1346) | 1 | 0 | 3y 5m | enhancement | Await on Local Activities shouldn't occupy work... |
| [#1303](https://github.com/temporalio/sdk-java/issues/1303) | 0 | 2 | 3y 5m | enhancement | Cancelation of Local Activities |
| [#696](https://github.com/temporalio/sdk-java/issues/696) | 0 | 2 | 4y 4m | enhancement | Port fix for following execution chain from Go SDK |
| [#613](https://github.com/temporalio/sdk-java/issues/613) | 1 | 0 | 4y 5m | enhancement | Calling workflow method on the workflow stub sh... |
| [#2](https://github.com/temporalio/sdk-java/issues/2) | 0 | 2 | 6 years | enhancement | Refactor ReplayWorkflowContext out of WorkflowT... |
| [#2573](https://github.com/temporalio/sdk-java/issues/2573) | 0 | 1 | 6 months | enhancement | Support for ManualCompletion in TestActivity Env |
| [#2499](https://github.com/temporalio/sdk-java/issues/2499) | 0 | 1 | 8 months | enhancement | Support pluggable workflow caches |
| [#2482](https://github.com/temporalio/sdk-java/issues/2482) | 0 | 1 | 8 months | enhancement | Merging ActivityOptions fails with UnsupportedO... |
| [#2461](https://github.com/temporalio/sdk-java/issues/2461) | 0 | 1 | 9 months | enhancement | [Feature Request] Utility to detect when deadlo... |
| [#2213](https://github.com/temporalio/sdk-java/issues/2213) | 0 | 1 | 1y 3m | enhancement | Signal w/ Start API Improvements - Java |
| [#2124](https://github.com/temporalio/sdk-java/issues/2124) | 0 | 1 | 1y 6m | enhancement | MDC custom naming convention |
| [#2117](https://github.com/temporalio/sdk-java/issues/2117) | 0 | 1 | 1y 6m | enhancement | Allow customization of OTel span tags |
| [#1963](https://github.com/temporalio/sdk-java/issues/1963) | 0 | 1 | 1y 12m | enhancement | Schedule creation should create tracing span by... |
| [#1914](https://github.com/temporalio/sdk-java/issues/1914) | 0 | 1 | 2y 2m | enhancement | Support cancellation of long client calls |
| [#1913](https://github.com/temporalio/sdk-java/issues/1913) | 0 | 1 | 2y 2m | enhancement | Remove WorkflowClientCallsInterceptor.pollWorkf... |
| [#1707](https://github.com/temporalio/sdk-java/issues/1707) | 0 | 1 | 2y 9m | enhancement | ServiceWorkflowHistoryIterator should eagerly r... |
| [#1373](https://github.com/temporalio/sdk-java/issues/1373) | 0 | 1 | 3y 4m | enhancement | Child Workflow creation API should allow user t... |
| [#1201](https://github.com/temporalio/sdk-java/issues/1201) | 0 | 1 | 3y 7m | enhancement | Revisit continue-as-new that doesn't carry over... |
| [#1139](https://github.com/temporalio/sdk-java/issues/1139) | 0 | 1 | 3y 8m | enhancement, test server | TestWorkflowEnvironment - add support for filte... |
| [#1051](https://github.com/temporalio/sdk-java/issues/1051) | 0 | 1 | 3y 10m | enhancement | PollWorkflowTaskQueueResponse should be availab... |
| [#1005](https://github.com/temporalio/sdk-java/issues/1005) | 0 | 1 | 3y 11m | enhancement | Provide ActivityExecutionContext#isCancelled |
| [#652](https://github.com/temporalio/sdk-java/issues/652) | 0 | 1 | 4y 4m | enhancement | Make WorkflowStub#getResult timeout configurabl... |
| [#499](https://github.com/temporalio/sdk-java/issues/499) | 0 | 1 | 4y 7m | enhancement | Handle all exceptions as non-retryable when TEM... |
| [#341](https://github.com/temporalio/sdk-java/issues/341) | 0 | 1 | 5y 4m | enhancement, test server | Support robfig style cron defs in TestWorkflowE... |
| [#305](https://github.com/temporalio/sdk-java/issues/305) | 0 | 1 | 4y 11m | enhancement | Run Saga compensations in a disconnected scope |
| [#302](https://github.com/temporalio/sdk-java/issues/302) | 0 | 1 | 4y 11m | enhancement | Print stacktrace coming from another language i... |
| [#88](https://github.com/temporalio/sdk-java/issues/88) | 0 | 1 | 5y 7m | enhancement | Customer needs to specify timeout for start wor... |
| [#57](https://github.com/temporalio/sdk-java/issues/57) | 0 | 1 | 5y 9m | enhancement | Automatically reconnect to the service when it ... |
| [#2752](https://github.com/temporalio/sdk-java/issues/2752) | 0 | 0 | 1 days | enhancement | OpenTracingWorkflowClientCallsInterceptor - sup... |
| [#2726](https://github.com/temporalio/sdk-java/issues/2726) | 0 | 0 | 1 months | enhancement | Allow overriding of the Worker Deployment Versi... |
| [#2716](https://github.com/temporalio/sdk-java/issues/2716) | 0 | 0 | 2 months | enhancement | Worker Heartbeating |
| [#2661](https://github.com/temporalio/sdk-java/issues/2661) | 0 | 0 | 3 months | enhancement, test server | Set history size and suggest continue as new on... |
| [#2656](https://github.com/temporalio/sdk-java/issues/2656) | 0 | 0 | 3 months | enhancement | Springboot Multi Namespace: Add annotation to s... |
| [#2650](https://github.com/temporalio/sdk-java/issues/2650) | 0 | 0 | 3 months | enhancement | Ensure tests exist to confirm custom slot suppl... |
| [#2626](https://github.com/temporalio/sdk-java/issues/2626) | 0 | 0 | 4 months | enhancement | Plugin support |
| [#2620](https://github.com/temporalio/sdk-java/issues/2620) | 0 | 0 | 4 months | enhancement | OpenTracingClientInterceptor add support for up... |
| [#2598](https://github.com/temporalio/sdk-java/issues/2598) | 0 | 0 | 5 months | enhancement | Allow specifying activity options for specific ... |
| [#2538](https://github.com/temporalio/sdk-java/issues/2538) | 0 | 0 | 7 months | enhancement | [Feature Request]  Add counter metric for unacc... |
| [#2521](https://github.com/temporalio/sdk-java/issues/2521) | 0 | 0 | 7 months | enhancement | Workflow instance should be accessible in test ... |
| [#2469](https://github.com/temporalio/sdk-java/issues/2469) | 0 | 0 | 9 months | enhancement | [Java] Worker Versioning high level client |
| [#2393](https://github.com/temporalio/sdk-java/issues/2393) | 0 | 0 | 11 months | enhancement | Add `patched()` and `deprecatePatch()` APIs |
| [#2359](https://github.com/temporalio/sdk-java/issues/2359) | 0 | 0 | 11 months | enhancement | Clarify `UnableToAcquireLockException` |
| [#2283](https://github.com/temporalio/sdk-java/issues/2283) | 0 | 0 | 1y 2m | enhancement, test server | Auto-skip time in time-skipping testing environ... |
| [#2229](https://github.com/temporalio/sdk-java/issues/2229) | 0 | 0 | 1y 3m | enhancement | Add TestNexusEnvironment similar to TestActivit... |
| [#2148](https://github.com/temporalio/sdk-java/issues/2148) | 0 | 0 | 1y 5m | enhancement | Better toString representations on service stub... |
| [#2077](https://github.com/temporalio/sdk-java/issues/2077) | 0 | 0 | 1y 7m | enhancement | TestWorkflowEnvironment, TestWorkflowRule, Test... |
| [#2051](https://github.com/temporalio/sdk-java/issues/2051) | 0 | 0 | 1y 8m | enhancement | Ability to specify activity timeouts via annota... |
| [#2031](https://github.com/temporalio/sdk-java/issues/2031) | 0 | 0 | 1y 8m | enhancement | Add SpringBoot integration for `SlotSupplier`s |
| [#2030](https://github.com/temporalio/sdk-java/issues/2030) | 0 | 0 | 1y 8m | enhancement | Add `PauseableSlotSupplier` |
| [#2026](https://github.com/temporalio/sdk-java/issues/2026) | 0 | 0 | 1y 8m | enhancement | [SpringBoot] Add graceful shutdown wait time as... |
| [#2017](https://github.com/temporalio/sdk-java/issues/2017) | 0 | 0 | 1y 9m | enhancement | [Feature Request] Use macOS M1/ARM runners for ... |
| [#1987](https://github.com/temporalio/sdk-java/issues/1987) | 0 | 0 | 1y 10m | enhancement | Configurable workflow exception types at the wo... |
| [#1981](https://github.com/temporalio/sdk-java/issues/1981) | 0 | 0 | 1y 11m | enhancement | Add source code to shaded library |
| [#1920](https://github.com/temporalio/sdk-java/issues/1920) | 0 | 0 | 2y 2m | enhancement, test server | Support bind address for test server |
| [#1839](https://github.com/temporalio/sdk-java/issues/1839) | 0 | 0 | 2y 4m | enhancement | Add HealthIndicator to spring-boot library |
| [#1825](https://github.com/temporalio/sdk-java/issues/1825) | 0 | 0 | 2y 5m | enhancement | Support the certificate with linebreak strings ... |
| [#1781](https://github.com/temporalio/sdk-java/issues/1781) | 0 | 0 | 2y 6m | enhancement | Validate update protocol message type on replay |
| [#1767](https://github.com/temporalio/sdk-java/issues/1767) | 0 | 0 | 2y 7m | enhancement, test server | Log server-side task failure caused by invalid ... |
| [#1644](https://github.com/temporalio/sdk-java/issues/1644) | 0 | 0 | 2y 10m | enhancement | ContextPropagator redesign |
| [#1642](https://github.com/temporalio/sdk-java/issues/1642) | 0 | 0 | 2y 10m | enhancement, test server | Add history pagination to Test Server |
| [#1621](https://github.com/temporalio/sdk-java/issues/1621) | 0 | 0 | 2y 11m | enhancement | Allow setting *additional* memo values in Conti... |
| [#1586](https://github.com/temporalio/sdk-java/issues/1586) | 0 | 0 | 2y 12m | enhancement | Opt-in to having stack trace query use custom d... |
| [#1579](https://github.com/temporalio/sdk-java/issues/1579) | 0 | 0 | 3 years | enhancement | [Feature Request] Improving replay issue for Ti... |
| [#1563](https://github.com/temporalio/sdk-java/issues/1563) | 0 | 0 | 3 years | enhancement | Local Activity Execution should stop making att... |
| [#1535](https://github.com/temporalio/sdk-java/issues/1535) | 0 | 0 | 3y 1m | enhancement | Improve diagnostic message printed by TestWorkf... |
| [#1440](https://github.com/temporalio/sdk-java/issues/1440) | 0 | 0 | 3y 3m | enhancement | Reflect activity vs local activity difference i... |
| [#1413](https://github.com/temporalio/sdk-java/issues/1413) | 0 | 0 | 3y 3m | enhancement | Deduplicate getResultAsync calls inside Workflo... |
| [#1403](https://github.com/temporalio/sdk-java/issues/1403) | 0 | 0 | 3y 4m | enhancement, test server | Test Server should add warning logging if no wo... |
| [#1377](https://github.com/temporalio/sdk-java/issues/1377) | 0 | 0 | 3y 4m | enhancement, test server | Predictable log statement when test server is r... |
| [#1273](https://github.com/temporalio/sdk-java/issues/1273) | 0 | 0 | 3y 6m | enhancement | provide an option to print trace-id and span-id... |
| [#1258](https://github.com/temporalio/sdk-java/issues/1258) | 0 | 0 | 3y 6m | enhancement | Make activity heartbeats more robust to network... |
| [#1234](https://github.com/temporalio/sdk-java/issues/1234) | 0 | 0 | 3y 7m | enhancement | Provide default implementation of Prometheus sc... |
| [#1216](https://github.com/temporalio/sdk-java/issues/1216) | 0 | 0 | 3y 7m | enhancement | Log activity thread stack trace if it times out... |
| [#1212](https://github.com/temporalio/sdk-java/issues/1212) | 0 | 0 | 3y 7m | enhancement | Cancel long poll if a Future returned from getR... |
| [#1113](https://github.com/temporalio/sdk-java/issues/1113) | 0 | 0 | 3y 9m | enhancement | Unbalance external workflow configuration? |
| [#1098](https://github.com/temporalio/sdk-java/issues/1098) | 0 | 0 | 3y 9m | enhancement | Provide ActivityStub#fromTyped |
| [#1019](https://github.com/temporalio/sdk-java/issues/1019) | 0 | 0 | 3y 11m | enhancement | Log long poll failures (but not too frequently ... |
| [#1009](https://github.com/temporalio/sdk-java/issues/1009) | 0 | 0 | 3y 11m | enhancement | Provide ActivityStub that is bound to the speci... |
| [#862](https://github.com/temporalio/sdk-java/issues/862) | 0 | 0 | 4y 1m | enhancement | Make tracing tags consistent across SDKs |
| [#857](https://github.com/temporalio/sdk-java/issues/857) | 0 | 0 | 4y 1m | enhancement | Expose SignalExternalWorkflowExecutionCommandAt... |
| [#851](https://github.com/temporalio/sdk-java/issues/851) | 0 | 0 | 4y 2m | enhancement | Allow more granular setting of QueryRejectCondi... |
| [#818](https://github.com/temporalio/sdk-java/issues/818) | 0 | 0 | 4y 2m | enhancement | Automatically supply binaryChecksum |
| [#794](https://github.com/temporalio/sdk-java/issues/794) | 0 | 0 | 4y 2m | enhancement | Report replay metrics |
| [#753](https://github.com/temporalio/sdk-java/issues/753) | 0 | 0 | 4y 3m | enhancement | Offer ActivityOptions via Supplier to support d... |
| [#748](https://github.com/temporalio/sdk-java/issues/748) | 0 | 0 | 4y 3m | enhancement | Provide a way to inject options into Workflow i... |
| [#746](https://github.com/temporalio/sdk-java/issues/746) | 0 | 0 | 4y 3m | enhancement | Reuse of ActivityStubs from another workflow sh... |
| [#665](https://github.com/temporalio/sdk-java/issues/665) | 0 | 0 | 4y 4m | enhancement | Allow users to specify or influence RpcRetryOpt... |
| [#597](https://github.com/temporalio/sdk-java/issues/597) | 0 | 0 | 4y 5m | enhancement | Support assertions in `TestWorkflowEnvironment.... |
| [#235](https://github.com/temporalio/sdk-java/issues/235) | 0 | 0 | 5y 2m | enhancement | Make PollerOptions.uncaughtExceptionHandler fro... |
| [#227](https://github.com/temporalio/sdk-java/issues/227) | 0 | 0 | 5y 2m | enhancement | Enable Serialization on WorkflowQueue  |

### Other (56)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#1007](https://github.com/temporalio/sdk-java/issues/1007) | 2 | 7 | 5y 8m | - | Scala module |
| [#2676](https://github.com/temporalio/sdk-java/issues/2676) | 1 | 6 | 2 months | - | temporal java sdk is using an older version of ... |
| [#2046](https://github.com/temporalio/sdk-java/issues/2046) | 2 | 3 | 1y 8m | - | Failed promise before calling allOf is not fail... |
| [#1698](https://github.com/temporalio/sdk-java/issues/1698) | 0 | 7 | 2y 9m | wontfix | WorkflowImplementationOptions.FailWorkflowExcep... |
| [#1163](https://github.com/temporalio/sdk-java/issues/1163) | 3 | 1 | 3y 8m | wontfix | Allow contributions of tags of root worker metr... |
| [#2042](https://github.com/temporalio/sdk-java/issues/2042) | 0 | 6 | 1y 8m | - | Activity options merging logic is not correct |
| [#1426](https://github.com/temporalio/sdk-java/issues/1426) | 0 | 6 | 3y 3m | test server | Test server timeouts improperly set to 10 years... |
| [#2642](https://github.com/temporalio/sdk-java/issues/2642) | 2 | 0 | 4 months | test server | TestWorkflowEnvironment sleep incorrect behaviour |
| [#2412](https://github.com/temporalio/sdk-java/issues/2412) | 1 | 2 | 10 months | - | Marker Commands being sent with empty names in ... |
| [#2092](https://github.com/temporalio/sdk-java/issues/2092) | 1 | 2 | 1y 7m | - | activity_succeed_endtoend_latency not reported ... |
| [#2579](https://github.com/temporalio/sdk-java/issues/2579) | 1 | 0 | 6 months | - | Non-root namespace Spring dependencies fail on ... |
| [#2119](https://github.com/temporalio/sdk-java/issues/2119) | 0 | 2 | 1y 6m | - | Missing metric reporting in local activity exec... |
| [#1358](https://github.com/temporalio/sdk-java/issues/1358) | 1 | 0 | 3y 4m | test server | Add CI testing for the native test server |
| [#896](https://github.com/temporalio/sdk-java/issues/896) | 0 | 2 | 4y 1m | wontfix, next-gen | Workflow should be able to ignore CancellationF... |
| [#883](https://github.com/temporalio/sdk-java/issues/883) | 0 | 2 | 4y 1m | - | Workers don't reset sticky queue when workflow ... |
| [#2733](https://github.com/temporalio/sdk-java/issues/2733) | 0 | 1 | 1 months | - | activity_schedule_to_start_latency reports acti... |
| [#2728](https://github.com/temporalio/sdk-java/issues/2728) | 0 | 1 | 1 months | - | ScheduleRange to check end |
| [#2674](https://github.com/temporalio/sdk-java/issues/2674) | 0 | 1 | 3 months | - | TestEnvironment with external service - failing... |
| [#2670](https://github.com/temporalio/sdk-java/issues/2670) | 0 | 1 | 3 months | test server | TestWorkflowEnvironment#sleep hangs indefinitely |
| [#2578](https://github.com/temporalio/sdk-java/issues/2578) | 0 | 1 | 6 months | - | `startUpdate` JavaDoc says "asynchronously" whe... |
| [#2364](https://github.com/temporalio/sdk-java/issues/2364) | 0 | 1 | 11 months | test server | TestWorkflowEnvironment issue with setting sear... |
| [#2321](https://github.com/temporalio/sdk-java/issues/2321) | 0 | 1 | 1y 1m | test server | TestWorkflowEnvironment does not allow signalWi... |
| [#2071](https://github.com/temporalio/sdk-java/issues/2071) | 0 | 1 | 1y 7m | - | KotlinObjectMapperFactory is not forwards compa... |
| [#2753](https://github.com/temporalio/sdk-java/issues/2753) | 0 | 0 | 0 days | - | Unexpected Activity Timeout Behavior After Work... |
| [#2750](https://github.com/temporalio/sdk-java/issues/2750) | 0 | 0 | 3 days | - | Tests not passing: TestStatsReporter Flush not ... |
| [#2747](https://github.com/temporalio/sdk-java/issues/2747) | 0 | 0 | 19 days | - | @WorkflowImpl(workers = "...") should support S... |
| [#2745](https://github.com/temporalio/sdk-java/issues/2745) | 0 | 0 | 23 days | - | WorkerOptions isUsingVirtualThreadsOnWorkflowWo... |
| [#2655](https://github.com/temporalio/sdk-java/issues/2655) | 0 | 0 | 3 months | test server | Testing server continue-as-new doesn't carry me... |
| [#2606](https://github.com/temporalio/sdk-java/issues/2606) | 0 | 0 | 5 months | test server | TestWorkflowMutableStateImpl - race condition b... |
| [#2592](https://github.com/temporalio/sdk-java/issues/2592) | 0 | 0 | 5 months | - | Python Nexus tests failing under Java test server |
| [#2586](https://github.com/temporalio/sdk-java/issues/2586) | 0 | 0 | 5 months | test server | Time skipping server drops headers in workflow ... |
| [#2582](https://github.com/temporalio/sdk-java/issues/2582) | 0 | 0 | 5 months | - | Null cause in Nexus HandlerException is not han... |
| [#2480](https://github.com/temporalio/sdk-java/issues/2480) | 0 | 0 | 8 months | test server | Memo-s not present in listOpenWorkflowExecution... |
| [#2333](https://github.com/temporalio/sdk-java/issues/2333) | 0 | 0 | 1y 1m | test server | `taskTimeoutWillRescheduleTheTaskOnTheGlobalLis... |
| [#2246](https://github.com/temporalio/sdk-java/issues/2246) | 0 | 0 | 1y 3m | test server | Time-skipping past activity’s startToCloseTimeo... |
| [#2232](https://github.com/temporalio/sdk-java/issues/2232) | 0 | 0 | 1y 3m | - | Fix inconsistency in javadoc for WorkflowInterface |
| [#2160](https://github.com/temporalio/sdk-java/issues/2160) | 0 | 0 | 1y 5m | - | Child workflow cancellation can trigger SDK eve... |
| [#2149](https://github.com/temporalio/sdk-java/issues/2149) | 0 | 0 | 1y 5m | - | Revisit local activity backpressure logic w/ no... |
| [#2127](https://github.com/temporalio/sdk-java/issues/2127) | 0 | 0 | 1y 6m | test server | Test server sometimes fails to include signal i... |
| [#1952](https://github.com/temporalio/sdk-java/issues/1952) | 0 | 0 | 2 years | Mend: dependency security vulnerability | ktlint-0.47.1.jar: 2 vulnerabilities (highest s... |
| [#1951](https://github.com/temporalio/sdk-java/issues/1951) | 0 | 0 | 2 years | Mend: dependency security vulnerability | spring-boot-dependencies-2.7.12.pom: 1 vulnerab... |
| [#1890](https://github.com/temporalio/sdk-java/issues/1890) | 0 | 0 | 2y 2m | Mend: dependency security vulnerability | spring-boot-starter-2.7.12.jar: 9 vulnerabiliti... |
| [#1888](https://github.com/temporalio/sdk-java/issues/1888) | 0 | 0 | 2y 2m | Mend: dependency security vulnerability | kotlin-klib-commonizer-embeddable-1.5.32.jar: 1... |
| [#1830](https://github.com/temporalio/sdk-java/issues/1830) | 0 | 0 | 2y 5m | - | WorkflowReplayer throws unclear exception when ... |
| [#1820](https://github.com/temporalio/sdk-java/issues/1820) | 0 | 0 | 2y 5m | - | Exceptions thrown from ScheduleClient and Sched... |
| [#1727](https://github.com/temporalio/sdk-java/issues/1727) | 0 | 0 | 2y 9m | good first issue | inconsistency on MaximumAttempts attribute betw... |
| [#1618](https://github.com/temporalio/sdk-java/issues/1618) | 0 | 0 | 2y 11m | test server | Test server with child workflow and signal is t... |
| [#1354](https://github.com/temporalio/sdk-java/issues/1354) | 0 | 0 | 3y 4m | - | Unit Test for  ActivityCompletionClient methods... |
| [#1266](https://github.com/temporalio/sdk-java/issues/1266) | 0 | 0 | 3y 6m | - | Add unit test covering scenario of Server outag... |
| [#1242](https://github.com/temporalio/sdk-java/issues/1242) | 0 | 0 | 3y 7m | - | Revisit history pagination  |
| [#1035](https://github.com/temporalio/sdk-java/issues/1035) | 0 | 0 | 3y 10m | - | Add metric for time passed from the activity sc... |
| [#732](https://github.com/temporalio/sdk-java/issues/732) | 0 | 0 | 4y 3m | java | Remove TestWorkflowRule#testTimeoutSeconds |
| [#661](https://github.com/temporalio/sdk-java/issues/661) | 0 | 0 | 4y 4m | - | Sync versions of GrpcRetryer should throw Inter... |
| [#392](https://github.com/temporalio/sdk-java/issues/392) | 0 | 0 | 4y 9m | - | TimeLockingFuture implementation is incorrect a... |
| [#262](https://github.com/temporalio/sdk-java/issues/262) | 0 | 0 | 5y 1m | test server | TestWorkflowEnvironment: Set close time on the ... |
| [#193](https://github.com/temporalio/sdk-java/issues/193) | 0 | 0 | 5y 4m | - | Update all state machines to avoid self transit... |

