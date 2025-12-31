# temporalio/sdk-go - Open Issues

**Generated:** 2025-12-31
**Total Issues:** 163
**Total Upvotes:** 112
**Total Comments:** 214

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 163 |
| Issues with Upvotes | 41 (25%) |
| Total Upvotes | 112 |
| Total Comments | 214 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 89 |
| potential-bug | 45 |
| bug | 15 |
| external dependency | 5 |
| next-gen | 1 |
| Mend: dependency security vulnerability | 1 |

## Top 20 Issues (by Priority Score)

Priority Score = Upvotes × 2 + Comments

| # | Score | 👍 | 💬 | Age | Title |
|---|-------|-----|-----|-----|-------|
| 1 | 42 | 21 | 0 | 3y 3m | [#916](https://github.com/temporalio/sdk-go/issues/916) Ability to mock/intercept side effect calls in test suite |
| 2 | 32 | 16 | 0 | 5y 5m | [#181](https://github.com/temporalio/sdk-go/issues/181) Add ability for a clean worker shutdown that waits for a ... |
| 3 | 17 | 6 | 5 | 3y 6m | [#829](https://github.com/temporalio/sdk-go/issues/829) Use interceptor logger for all logs related to a workflow... |
| 4 | 15 | 5 | 5 | 2y 2m | [#1282](https://github.com/temporalio/sdk-go/issues/1282) Heartbeat timeout not raised while testing |
| 5 | 15 | 7 | 1 | 5y 8m | [#89](https://github.com/temporalio/sdk-go/issues/89) Refactor SDK to avoid type aliasing |
| 6 | 14 | 4 | 6 | 1y 11m | [#1352](https://github.com/temporalio/sdk-go/issues/1352) Serialization context for codecs and converters |
| 7 | 11 | 4 | 3 | 2y 6m | [#1149](https://github.com/temporalio/sdk-go/issues/1149) Allow custom trace attribute keys |
| 8 | 10 | 4 | 2 | 5 years | [#313](https://github.com/temporalio/sdk-go/issues/313) Allow including local activity input into the history |
| 9 | 9 | 4 | 1 | 3y 5m | [#866](https://github.com/temporalio/sdk-go/issues/866) TestWorkflowEnvironment doesn't enforce WorkflowExecution... |
| 10 | 9 | 1 | 7 | 4y 1m | [#642](https://github.com/temporalio/sdk-go/issues/642) Inconsistent behavior when asserting invocations |
| 11 | 9 | 0 | 9 | 4y 6m | [#475](https://github.com/temporalio/sdk-go/issues/475) Panic when querying during Workflow failure + retry  |
| 12 | 8 | 0 | 8 | 2 years | [#1330](https://github.com/temporalio/sdk-go/issues/1330) Add TaskQueue to TracerStartSpanOptions |
| 13 | 8 | 1 | 6 | 2y 7m | [#1114](https://github.com/temporalio/sdk-go/issues/1114) Support activity functions with variadic arguments   |
| 14 | 7 | 1 | 5 | 3 years | [#986](https://github.com/temporalio/sdk-go/issues/986) AwaitWithTimeout does not cancel its timer when condition... |
| 15 | 7 | 0 | 7 | 3y 2m | [#937](https://github.com/temporalio/sdk-go/issues/937) Add ability to keep session open in case of a worker rest... |
| 16 | 7 | 2 | 3 | 3y 4m | [#884](https://github.com/temporalio/sdk-go/issues/884) [Feature Request] Add ability to support passing sessions... |
| 17 | 7 | 2 | 3 | 5y 6m | [#167](https://github.com/temporalio/sdk-go/issues/167) Activity times out in test environment with child workflow |
| 18 | 6 | 2 | 2 | 2y 4m | [#1208](https://github.com/temporalio/sdk-go/issues/1208) Canceling a context with multiple child contexts can be n... |
| 19 | 6 | 1 | 4 | 3 years | [#982](https://github.com/temporalio/sdk-go/issues/982) Cannot register mock activity with string name on test wo... |
| 20 | 5 | 2 | 1 | 1 months | [#2109](https://github.com/temporalio/sdk-go/issues/2109) MutableSideEffect in test framework ignores cmp function |

---

## All Issues

### Bugs (59)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | 5 | 2y 2m | potential-bug | Heartbeat timeout not raised while testing |
| [#866](https://github.com/temporalio/sdk-go/issues/866) | 4 | 1 | 3y 5m | potential-bug | TestWorkflowEnvironment doesn't enforce Workflo... |
| [#642](https://github.com/temporalio/sdk-go/issues/642) | 1 | 7 | 4y 1m | potential-bug | Inconsistent behavior when asserting invocations |
| [#167](https://github.com/temporalio/sdk-go/issues/167) | 2 | 3 | 5y 6m | potential-bug | Activity times out in test environment with chi... |
| [#1208](https://github.com/temporalio/sdk-go/issues/1208) | 2 | 2 | 2y 4m | potential-bug | Canceling a context with multiple child context... |
| [#982](https://github.com/temporalio/sdk-go/issues/982) | 1 | 4 | 3 years | potential-bug | Cannot register mock activity with string name ... |
| [#2109](https://github.com/temporalio/sdk-go/issues/2109) | 2 | 1 | 1 months | bug | MutableSideEffect in test framework ignores cmp... |
| [#495](https://github.com/temporalio/sdk-go/issues/495) | 0 | 5 | 4y 5m | potential-bug | Calling `GetChildWorkflowExecution` for a mocke... |
| [#1100](https://github.com/temporalio/sdk-go/issues/1100) | 1 | 2 | 2y 8m | potential-bug | TestWorkflowEnvironment should surface errors a... |
| [#351](https://github.com/temporalio/sdk-go/issues/351) | 2 | 0 | 4y 11m | potential-bug | [Testing] Cancellation of Parent Workflow with ... |
| [#2103](https://github.com/temporalio/sdk-go/issues/2103) | 0 | 3 | 1 months | bug | Cosmetic bug in logger |
| [#2066](https://github.com/temporalio/sdk-go/issues/2066) | 0 | 3 | 2 months | bug | Lost messages from workflow.NewChannel(ctx) |
| [#1961](https://github.com/temporalio/sdk-go/issues/1961) | 0 | 3 | 7 months | bug | Getting a strange error when writing tests whic... |
| [#1906](https://github.com/temporalio/sdk-go/issues/1906) | 1 | 1 | 8 months | bug | workflowcheck crash (index out of range) |
| [#1037](https://github.com/temporalio/sdk-go/issues/1037) | 0 | 3 | 2y 10m | potential-bug | Calling a value receiver method with a pointer ... |
| [#813](https://github.com/temporalio/sdk-go/issues/813) | 0 | 3 | 3y 7m | potential-bug, external dependency | Weird workflow task failure |
| [#2107](https://github.com/temporalio/sdk-go/issues/2107) | 1 | 0 | 1 months | bug | Panic in temporal unit test framework. |
| [#1929](https://github.com/temporalio/sdk-go/issues/1929) | 0 | 2 | 8 months | bug | OTel emitted metrics do not match behavior desc... |
| [#1468](https://github.com/temporalio/sdk-go/issues/1468) | 0 | 2 | 1y 7m | potential-bug | Interceptors are skipped for mocked activities |
| [#1033](https://github.com/temporalio/sdk-go/issues/1033) | 0 | 2 | 2y 10m | potential-bug | OnUpsertSearchAttributes and OnUpsertMemo uncle... |
| [#933](https://github.com/temporalio/sdk-go/issues/933) | 0 | 2 | 3y 2m | potential-bug | No problem indicators on failed workflow input ... |
| [#2039](https://github.com/temporalio/sdk-go/issues/2039) | 0 | 1 | 4 months | bug | Joining errors causes TestWorkflowEnvironment t... |
| [#1624](https://github.com/temporalio/sdk-go/issues/1624) | 0 | 1 | 1y 3m | potential-bug | Signal sent to Selector can be lost if Default ... |
| [#1574](https://github.com/temporalio/sdk-go/issues/1574) | 0 | 1 | 1y 5m | potential-bug | Batched heartbeat got canceled due to caller co... |
| [#1227](https://github.com/temporalio/sdk-go/issues/1227) | 0 | 1 | 2y 3m | potential-bug | Worker versioning + workflow session |
| [#1104](https://github.com/temporalio/sdk-go/issues/1104) | 0 | 1 | 2y 7m | potential-bug | Context timeout is halved on client.ExecuteWork... |
| [#1099](https://github.com/temporalio/sdk-go/issues/1099) | 0 | 1 | 2y 8m | potential-bug | TestWorkflowEnvironment timeouts run defer stat... |
| [#1045](https://github.com/temporalio/sdk-go/issues/1045) | 0 | 1 | 2y 10m | potential-bug | Memo does not go through user provided data cov... |
| [#975](https://github.com/temporalio/sdk-go/issues/975) | 0 | 1 | 3 years | potential-bug | Missing mock invocation causes PanicError in a ... |
| [#967](https://github.com/temporalio/sdk-go/issues/967) | 0 | 1 | 3y 1m | potential-bug, external dependency | testsuite.TestWorkflowEnvironment does not comp... |
| [#922](https://github.com/temporalio/sdk-go/issues/922) | 0 | 1 | 3y 3m | potential-bug | TestWorkflowEnvironment.SignalExternalWorkflow ... |
| [#716](https://github.com/temporalio/sdk-go/issues/716) | 0 | 1 | 3y 11m | potential-bug | If a workflow is terminated while processing, i... |
| [#2090](https://github.com/temporalio/sdk-go/issues/2090) | 0 | 0 | 2 months | bug | Starting a child workflow in tests leaks gorout... |
| [#2025](https://github.com/temporalio/sdk-go/issues/2025) | 0 | 0 | 4 months | bug | Fix DescribeTaskQueueEnhanced w/ stats to use n... |
| [#2005](https://github.com/temporalio/sdk-go/issues/2005) | 0 | 0 | 5 months | bug | OnWorkflow test mocker doesn't propagate contex... |
| [#1869](https://github.com/temporalio/sdk-go/issues/1869) | 0 | 0 | 9 months | bug | SetOnChildWorkflowCompletedListener doesn't wor... |
| [#1846](https://github.com/temporalio/sdk-go/issues/1846) | 0 | 0 | 10 months | bug | AsTime() on a nil pointer converts to  Jan. 1st... |
| [#1838](https://github.com/temporalio/sdk-go/issues/1838) | 0 | 0 | 10 months | bug | Non-deterministic workflow code can send incorr... |
| [#1668](https://github.com/temporalio/sdk-go/issues/1668) | 0 | 0 | 1y 2m | potential-bug | When deserializing typed search attributes, inv... |
| [#1650](https://github.com/temporalio/sdk-go/issues/1650) | 0 | 0 | 1y 3m | potential-bug | List of flaky tests |
| [#1536](https://github.com/temporalio/sdk-go/issues/1536) | 0 | 0 | 1y 6m | potential-bug | TERMINATE_IF_RUNNING doesn't work for duplicate... |
| [#1496](https://github.com/temporalio/sdk-go/issues/1496) | 0 | 0 | 1y 7m | potential-bug | Workflow outcome is inconsistent between test e... |
| [#1427](https://github.com/temporalio/sdk-go/issues/1427) | 0 | 0 | 1y 9m | potential-bug | TestWorkflowEnvironment workflow Context does n... |
| [#1360](https://github.com/temporalio/sdk-go/issues/1360) | 0 | 0 | 1y 11m | potential-bug | `testsuite.DevServer` occasionally does not stop |
| [#1349](https://github.com/temporalio/sdk-go/issues/1349) | 0 | 0 | 1y 11m | potential-bug | WorkflowRun.Get does not use a context aware da... |
| [#1341](https://github.com/temporalio/sdk-go/issues/1341) | 0 | 0 | 1y 11m | potential-bug | WorkflowChecker should flag anonymous functions... |
| [#1240](https://github.com/temporalio/sdk-go/issues/1240) | 0 | 0 | 2y 3m | potential-bug | Data race after deadlock detector fired |
| [#1131](https://github.com/temporalio/sdk-go/issues/1131) | 0 | 0 | 2y 6m | potential-bug | worker.Options.WorkerActivitiesPerSecond applie... |
| [#1054](https://github.com/temporalio/sdk-go/issues/1054) | 0 | 0 | 2y 10m | potential-bug | EncodedFailureAttributes capability should be r... |
| [#909](https://github.com/temporalio/sdk-go/issues/909) | 0 | 0 | 3y 3m | potential-bug | Fatal poll error on worker start isn't stopping... |
| [#873](https://github.com/temporalio/sdk-go/issues/873) | 0 | 0 | 3y 5m | potential-bug | Ensure slots available metric is updated on wor... |
| [#755](https://github.com/temporalio/sdk-go/issues/755) | 0 | 0 | 3y 9m | potential-bug | Sticky query invalid state machine transition e... |
| [#514](https://github.com/temporalio/sdk-go/issues/514) | 0 | 0 | 4y 4m | potential-bug | TestActivityEnvironment.ExecuteActivity require... |
| [#491](https://github.com/temporalio/sdk-go/issues/491) | 0 | 0 | 4y 5m | potential-bug | Testsuite Workflow Retry not working |
| [#482](https://github.com/temporalio/sdk-go/issues/482) | 0 | 0 | 4y 6m | potential-bug | Workflow query hangs if the temporal workflow e... |
| [#346](https://github.com/temporalio/sdk-go/issues/346) | 0 | 0 | 4y 11m | potential-bug | RequestCancelExternalWorkflow(...).Get(ctx, nil... |
| [#335](https://github.com/temporalio/sdk-go/issues/335) | 0 | 0 | 4y 11m | potential-bug | Original Failure source is lost when ConvertFai... |
| [#247](https://github.com/temporalio/sdk-go/issues/247) | 0 | 0 | 5y 3m | potential-bug | Retrieved String Search Attribute includes quot... |
| [#186](https://github.com/temporalio/sdk-go/issues/186) | 0 | 0 | 5y 5m | bug, potential-bug | Worker reports validation error on processing o... |

### Enhancements (89)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | 0 | 3y 3m | enhancement | Ability to mock/intercept side effect calls in ... |
| [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | 0 | 5y 5m | enhancement | Add ability for a clean worker shutdown that wa... |
| [#829](https://github.com/temporalio/sdk-go/issues/829) | 6 | 5 | 3y 6m | enhancement | Use interceptor logger for all logs related to ... |
| [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 4 | 6 | 1y 11m | enhancement | Serialization context for codecs and converters |
| [#1149](https://github.com/temporalio/sdk-go/issues/1149) | 4 | 3 | 2y 6m | enhancement | Allow custom trace attribute keys |
| [#313](https://github.com/temporalio/sdk-go/issues/313) | 4 | 2 | 5 years | enhancement | Allow including local activity input into the h... |
| [#1330](https://github.com/temporalio/sdk-go/issues/1330) | 0 | 8 | 2 years | enhancement | Add TaskQueue to TracerStartSpanOptions |
| [#1114](https://github.com/temporalio/sdk-go/issues/1114) | 1 | 6 | 2y 7m | enhancement | Support activity functions with variadic argume... |
| [#986](https://github.com/temporalio/sdk-go/issues/986) | 1 | 5 | 3 years | enhancement | AwaitWithTimeout does not cancel its timer when... |
| [#937](https://github.com/temporalio/sdk-go/issues/937) | 0 | 7 | 3y 2m | enhancement | Add ability to keep session open in case of a w... |
| [#884](https://github.com/temporalio/sdk-go/issues/884) | 2 | 3 | 3y 4m | enhancement | [Feature Request] Add ability to support passin... |
| [#1351](https://github.com/temporalio/sdk-go/issues/1351) | 1 | 3 | 1y 11m | enhancement | Support interceptor on WorkflowRun.Get |
| [#718](https://github.com/temporalio/sdk-go/issues/718) | 2 | 1 | 3y 10m | enhancement | Add metric for time passed from the activity sc... |
| [#2065](https://github.com/temporalio/sdk-go/issues/2065) | 1 | 2 | 3 months | enhancement | NewTestActivityEnvironment no longer implements... |
| [#1976](https://github.com/temporalio/sdk-go/issues/1976) | 0 | 4 | 6 months | enhancement | ContinueAsNew should create new root span |
| [#1895](https://github.com/temporalio/sdk-go/issues/1895) | 0 | 4 | 9 months | enhancement | Support simulating race conditions during signa... |
| [#1716](https://github.com/temporalio/sdk-go/issues/1716) | 0 | 4 | 1y 1m | enhancement | Make it possible to keep workflows in worker ca... |
| [#1582](https://github.com/temporalio/sdk-go/issues/1582) | 2 | 0 | 1y 4m | enhancement | Updated context functions to match context library |
| [#1397](https://github.com/temporalio/sdk-go/issues/1397) | 1 | 2 | 1y 10m | enhancement | Add Support for `ReplayWorkflowHistoryOptions` ... |
| [#1167](https://github.com/temporalio/sdk-go/issues/1167) | 0 | 4 | 2y 5m | enhancement | Allow setting activity timeouts in TestActivity... |
| [#949](https://github.com/temporalio/sdk-go/issues/949) | 1 | 2 | 3y 1m | enhancement | Allow user to override default maximum activity... |
| [#533](https://github.com/temporalio/sdk-go/issues/533) | 0 | 4 | 4y 3m | enhancement | ContinueAsNew which transfers all unprocessed s... |
| [#444](https://github.com/temporalio/sdk-go/issues/444) | 0 | 4 | 4y 7m | enhancement | maxRPCTimeout value is too long |
| [#2097](https://github.com/temporalio/sdk-go/issues/2097) | 0 | 3 | 1 months | enhancement | Feature Request: Add Context to MetricsHandler ... |
| [#1609](https://github.com/temporalio/sdk-go/issues/1609) | 1 | 1 | 1y 4m | enhancement | Support ContextAware for failure converters |
| [#1177](https://github.com/temporalio/sdk-go/issues/1177) | 0 | 3 | 2y 5m | enhancement | Switch to a new clock library |
| [#1035](https://github.com/temporalio/sdk-go/issues/1035) | 0 | 3 | 2y 10m | enhancement | Workflowcheck should check that serialized obje... |
| [#955](https://github.com/temporalio/sdk-go/issues/955) | 0 | 3 | 3y 1m | enhancement | Suppress "worker stopping" polling errors |
| [#875](https://github.com/temporalio/sdk-go/issues/875) | 0 | 3 | 3y 5m | enhancement | Safer queries (and update validators) |
| [#842](https://github.com/temporalio/sdk-go/issues/842) | 0 | 3 | 3y 6m | enhancement | Support custom object processing in codec gRPC ... |
| [#458](https://github.com/temporalio/sdk-go/issues/458) | 1 | 1 | 4y 6m | enhancement | TestWorkflowEnvironment: Fail RegisterDelayedCa... |
| [#126](https://github.com/temporalio/sdk-go/issues/126) | 0 | 3 | 5y 7m | enhancement | Add autoheartbeating of activities |
| [#2131](https://github.com/temporalio/sdk-go/issues/2131) | 0 | 2 | 23 days | enhancement | Configurable minRPCTimeout for activity worker ... |
| [#1980](https://github.com/temporalio/sdk-go/issues/1980) | 0 | 2 | 6 months | enhancement | Feature Request: Include Version in workflowche... |
| [#1954](https://github.com/temporalio/sdk-go/issues/1954) | 1 | 0 | 7 months | enhancement | Ability to get original Logger from activity.Ge... |
| [#1646](https://github.com/temporalio/sdk-go/issues/1646) | 1 | 0 | 1y 3m | enhancement | SetStartTime for activity test env |
| [#1593](https://github.com/temporalio/sdk-go/issues/1593) | 0 | 2 | 1y 4m | enhancement | Consider potential range-over-func APIs |
| [#1086](https://github.com/temporalio/sdk-go/issues/1086) | 0 | 2 | 2y 8m | enhancement | Add support for a graceful shutdown of go worke... |
| [#616](https://github.com/temporalio/sdk-go/issues/616) | 0 | 2 | 4y 2m | enhancement, external dependency | Investigate options around latency reporting an... |
| [#497](https://github.com/temporalio/sdk-go/issues/497) | 1 | 0 | 4y 5m | enhancement | [Test suite] Query after signal works in SDK, b... |
| [#439](https://github.com/temporalio/sdk-go/issues/439) | 1 | 0 | 4y 7m | enhancement | Include a way to perform assertions on the work... |
| [#266](https://github.com/temporalio/sdk-go/issues/266) | 1 | 0 | 5y 2m | enhancement | Expose activity start and completion informatio... |
| [#101](https://github.com/temporalio/sdk-go/issues/101) | 1 | 0 | 5y 8m | enhancement | Add ability to pass Channel as a parameter to C... |
| [#35](https://github.com/temporalio/sdk-go/issues/35) | 1 | 0 | 5y 10m | enhancement | Add ability to pass configuration to a workflow |
| [#2098](https://github.com/temporalio/sdk-go/issues/2098) | 0 | 1 | 1 months | enhancement | Update ChildWorkflowOptions comment to indicate... |
| [#1705](https://github.com/temporalio/sdk-go/issues/1705) | 0 | 1 | 1y 1m | enhancement | User-defined RequestId for SignalWorkflow |
| [#1471](https://github.com/temporalio/sdk-go/issues/1471) | 0 | 1 | 1y 7m | enhancement | Support New Versioning in WorkflowInfo.GetCurre... |
| [#1445](https://github.com/temporalio/sdk-go/issues/1445) | 0 | 1 | 1y 8m | enhancement | OTel metric handler improvements |
| [#1395](https://github.com/temporalio/sdk-go/issues/1395) | 0 | 1 | 1y 10m | enhancement | Make TestWorkflowEnvironment return errors with... |
| [#1334](https://github.com/temporalio/sdk-go/issues/1334) | 0 | 1 | 1y 12m | enhancement | Allow opting out of tracer span creation on sch... |
| [#1300](https://github.com/temporalio/sdk-go/issues/1300) | 0 | 1 | 2y 1m | enhancement | Better Task Failures when passing incorrect opt... |
| [#996](https://github.com/temporalio/sdk-go/issues/996) | 0 | 1 | 2y 12m | enhancement | Opt-in to having stack trace query use custom d... |
| [#968](https://github.com/temporalio/sdk-go/issues/968) | 0 | 1 | 3y 1m | enhancement | Remove deprecated metrics |
| [#935](https://github.com/temporalio/sdk-go/issues/935) | 0 | 1 | 3y 2m | enhancement | Testing: Be Able to Unit Test a Workflow with a... |
| [#912](https://github.com/temporalio/sdk-go/issues/912) | 0 | 1 | 3y 3m | enhancement | Change default Prometheus santitize options to ... |
| [#698](https://github.com/temporalio/sdk-go/issues/698) | 0 | 1 | 3y 11m | enhancement | Allow "unable to find workflow type" error to b... |
| [#194](https://github.com/temporalio/sdk-go/issues/194) | 0 | 1 | 5y 5m | enhancement | Support seamless cleanup during session cancell... |
| [#2124](https://github.com/temporalio/sdk-go/issues/2124) | 0 | 0 | 29 days | enhancement | Support non-workflow activities |
| [#2123](https://github.com/temporalio/sdk-go/issues/2123) | 0 | 0 | 29 days | enhancement | [api-go] Proxy: allow payload visitor to run in... |
| [#2094](https://github.com/temporalio/sdk-go/issues/2094) | 0 | 0 | 2 months | enhancement | Worker Heartbeating |
| [#2085](https://github.com/temporalio/sdk-go/issues/2085) | 0 | 0 | 2 months | enhancement | Add support for firstExecutionRunId to cancel a... |
| [#2045](https://github.com/temporalio/sdk-go/issues/2045) | 0 | 0 | 3 months | enhancement | Ensure tests exist to confirm custom slot suppl... |
| [#2020](https://github.com/temporalio/sdk-go/issues/2020) | 0 | 0 | 4 months | enhancement | Plugin support |
| [#1796](https://github.com/temporalio/sdk-go/issues/1796) | 0 | 0 | 11 months | enhancement | Add `Patched()` and `DeprecatePatch()` APIs |
| [#1778](https://github.com/temporalio/sdk-go/issues/1778) | 0 | 0 | 11 months | enhancement | Rename Worker Deployment API interfaces |
| [#1777](https://github.com/temporalio/sdk-go/issues/1777) | 0 | 0 | 11 months | enhancement | Add ramp to Worker Deployments |
| [#1776](https://github.com/temporalio/sdk-go/issues/1776) | 0 | 0 | 11 months | enhancement | Provide flag to tell the update handler that th... |
| [#1760](https://github.com/temporalio/sdk-go/issues/1760) | 0 | 0 | 11 months | enhancement | Provide "workflow local" |
| [#1693](https://github.com/temporalio/sdk-go/issues/1693) | 0 | 0 | 1y 2m | enhancement | Provide details and actionable info about Non D... |
| [#1633](https://github.com/temporalio/sdk-go/issues/1633) | 0 | 0 | 1y 3m | enhancement | Modify test suite to dump junit XML |
| [#1610](https://github.com/temporalio/sdk-go/issues/1610) | 0 | 0 | 1y 4m | enhancement | Provide access to the workflow results from wor... |
| [#1564](https://github.com/temporalio/sdk-go/issues/1564) | 0 | 0 | 1y 5m | enhancement | Test Nexus with Cloud |
| [#1469](https://github.com/temporalio/sdk-go/issues/1469) | 0 | 0 | 1y 7m | enhancement | Allow specifying attempt in TestWorkflowEnviron... |
| [#1387](https://github.com/temporalio/sdk-go/issues/1387) | 0 | 0 | 1y 10m | enhancement | Configurable panic policy at the workflow level |
| [#1315](https://github.com/temporalio/sdk-go/issues/1315) | 0 | 0 | 2 years | enhancement | Deprecate Update related SDK flags |
| [#1283](https://github.com/temporalio/sdk-go/issues/1283) | 0 | 0 | 2y 2m | enhancement | Remove ClientOutboundInterceptor.PollWorkflowUp... |
| [#1197](https://github.com/temporalio/sdk-go/issues/1197) | 0 | 0 | 2y 4m | enhancement | Drain polled tasks on shutdown |
| [#1173](https://github.com/temporalio/sdk-go/issues/1173) | 0 | 0 | 2y 5m | enhancement | Enable testing with OnActivity and non-retryabl... |
| [#1157](https://github.com/temporalio/sdk-go/issues/1157) | 0 | 0 | 2y 5m | enhancement | Support LocalActivityOptions.WaitForCancellation |
| [#1132](https://github.com/temporalio/sdk-go/issues/1132) | 0 | 0 | 2y 6m | enhancement | Add support for visiting all payloads at once i... |
| [#997](https://github.com/temporalio/sdk-go/issues/997) | 0 | 0 | 2y 12m | enhancement | Support dynamic query and update handler |
| [#900](https://github.com/temporalio/sdk-go/issues/900) | 0 | 0 | 3y 4m | enhancement | Log warning on failed serialization of signal i... |
| [#728](https://github.com/temporalio/sdk-go/issues/728) | 0 | 0 | 3y 10m | enhancement | Add Await branch to Selector |
| [#705](https://github.com/temporalio/sdk-go/issues/705) | 0 | 0 | 3y 11m | enhancement | Make WorkflowServiceStubsOptions#rpcLongPollTim... |
| [#619](https://github.com/temporalio/sdk-go/issues/619) | 0 | 0 | 4y 1m | enhancement, external dependency | Make tracing tags consistent across SDKs |
| [#505](https://github.com/temporalio/sdk-go/issues/505) | 0 | 0 | 4y 5m | enhancement | Non-retryable errors in sessions |
| [#277](https://github.com/temporalio/sdk-go/issues/277) | 0 | 0 | 5y 2m | enhancement | Expose access to grpc.ServiceClient so we can c... |
| [#238](https://github.com/temporalio/sdk-go/issues/238) | 0 | 0 | 5y 4m | enhancement | RecordActivityHeartbeat signature should be mod... |
| [#198](https://github.com/temporalio/sdk-go/issues/198) | 0 | 0 | 5y 5m | enhancement | Add support for doing backward incompatible cha... |

### Other (15)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#89](https://github.com/temporalio/sdk-go/issues/89) | 7 | 1 | 5y 8m | - | Refactor SDK to avoid type aliasing |
| [#475](https://github.com/temporalio/sdk-go/issues/475) | 0 | 9 | 4y 6m | external dependency | Panic when querying during Workflow failure + r... |
| [#659](https://github.com/temporalio/sdk-go/issues/659) | 0 | 5 | 4 years | next-gen | Possibility to deprecate attribute `Control` |
| [#61](https://github.com/temporalio/sdk-go/issues/61) | 2 | 1 | 5y 9m | - | Remove mocks package |
| [#1410](https://github.com/temporalio/sdk-go/issues/1410) | 2 | 0 | 1y 10m | - | Consider migrating away from golang/mock |
| [#70](https://github.com/temporalio/sdk-go/issues/70) | 1 | 2 | 5y 9m | - | Refactor NewWorker and remove downcast |
| [#1759](https://github.com/temporalio/sdk-go/issues/1759) | 1 | 1 | 1 years | - | Change activity error to warn, or allow it to b... |
| [#899](https://github.com/temporalio/sdk-go/issues/899) | 0 | 2 | 3y 4m | Mend: dependency security vulnerability | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabi... |
| [#754](https://github.com/temporalio/sdk-go/issues/754) | 1 | 0 | 3y 9m | - | gRPC Proxy Integration Test |
| [#358](https://github.com/temporalio/sdk-go/issues/358) | 0 | 2 | 5y 1m | - | [Bug] the json input is invalid in the workflow... |
| [#50](https://github.com/temporalio/sdk-go/issues/50) | 0 | 1 | 5y 10m | - | Make TestWorkflowEnvironment support test multi... |
| [#1817](https://github.com/temporalio/sdk-go/issues/1817) | 0 | 0 | 10 months | - | Expose Workflow cancel cause/reason |
| [#676](https://github.com/temporalio/sdk-go/issues/676) | 0 | 0 | 4 years | - | Document dangers with workflow.WithChildOptions... |
| [#125](https://github.com/temporalio/sdk-go/issues/125) | 0 | 0 | 5y 7m | - | Remove need to register mocked activity |
| [#108](https://github.com/temporalio/sdk-go/issues/108) | 0 | 0 | 5y 8m | - | Fix race condition in testWorkflowEnvironmentImpl |

