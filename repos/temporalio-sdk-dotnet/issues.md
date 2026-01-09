# temporalio/sdk-dotnet - Complete Issue Dump

**Generated:** 2026-01-09
**Total Issues:** 289
**Total Upvotes:** 45
**Total Comments:** 329

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 289 |
| Issues with Upvotes | 29 (10%) |
| Total Upvotes | 45 |
| Total Comments | 329 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 170 |
| bug | 68 |
| Mend: dependency security vulnerability | 13 |
| question | 3 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#385](#385) | 2 | 23 | [Feature Request] Add support for win-arm64 |
| [#286](#286) | 7 | 1 | Support .NET Trimming |
| [#480](#480) | 1 | 9 | [Bug] OpenTelemetry TracingInterceptor doesn't create a span in workflow run method |
| [#340](#340) | 1 | 9 | [Bug] Metrics stopped working after the upgrade from 1.2.0 to 1.3.0 |
| [#442](#442) | 0 | 9 | Less strict checking of `UseWorkerVersioning` |
| [#100](#100) | 4 | 1 | [dotnet] Workflow update support |
| [#62](#62) | 2 | 5 | [Feature Request] Change Ref approach to expression-based |
| [#24](#24) | 0 | 9 | [Feature Request] Specify activity names at runtime |
| [#394](#394) | 0 | 8 | [Feature Request] Add workflow search attributes as Activity tags |
| [#347](#347) | 0 | 8 | NU1903 error when run dotnet build  |
| [#179](#179) | 0 | 8 | [Bug] Workflow Update hangs on time skipping environment |
| [#56](#56) | 1 | 6 | [Feature Request] OpenTelemetry support |
| [#44](#44) | 0 | 8 | Trying to start a workflow from asp.net and the client hangs |
| [#462](#462) | 0 | 7 | [Bug] Workflow info start time using activation/task time instead |
| [#436](#436) | 3 | 1 | [Feature Request] Add ability to temporarily disable tracing event listener in workflows |
| [#390](#390) | 2 | 3 | [Feature Request] F# Samples/Documentation |
| [#330](#330) | 0 | 6 | [Bug] Non-determinism found during fuzzing |
| [#162](#162) | 1 | 4 | [Bug] README workflow testing samples are not running the worker |
| [#158](#158) | 0 | 6 | [Bug] TemporalClient timing out  |
| [#42](#42) | 0 | 6 | [Bug] Unable to load shared library 'temporal_sdk_bridge' issue  on docker(linux) |
| [#563](#563) | 0 | 5 | Use global.json file to centralize SDK version |
| [#439](#439) | 0 | 5 | [Feature Request] Add `ActivityDefinition.CreateWithoutAttribute` helper |
| [#33](#33) | 0 | 5 | How to debug sdk? |
| [#577](#577) | 0 | 4 | [Bug] Investigate test host crash flake |
| [#553](#553) | 0 | 4 | [Feature Request] OperatorService (RPC) and WorkflowService (RPC) members are marked virtual or inherit from interface |
| [#526](#526) | 0 | 4 | [Bug] KeywordList cannot be resolved as part of WorkflowExecutionDescription |
| [#445](#445) | 1 | 2 | [Bug] Go SDK Child Workflow returning no values causes await to hang in .NET |
| [#408](#408) | 2 | 0 | [Feature Request] Include musl-based build in NuGet package |
| [#363](#363) | 1 | 2 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#282](#282) | 2 | 0 | [Feature Request] Accept search attributes in dev server startup |
| [#169](#169) | 0 | 4 | [Bug] Forcing .net 7 when .net 6 is in LTS |
| [#141](#141) | 1 | 2 | [Feature Request] Allow dynamic ssl/tls on the client. |
| [#66](#66) | 0 | 4 | [Question] Action Dependency Injection |
| [#63](#63) | 0 | 4 | [Bug] Local time skipping test server throws `Event set unexpectedly empty` |
| [#585](#585) | 0 | 3 | Nexus operation ignores ScheduleToCloseTimeout and retries every 10 seconds |
| [#506](#506) | 0 | 3 | [Bug] Duplicate activity registration does not throw |
| [#420](#420) | 1 | 1 | [Feature Request] Provide synchronous Run method in testing |
| [#395](#395) | 0 | 3 | [Bug] Temporalio.Exceptions.RpcException:operation was canceled |
| [#234](#234) | 0 | 3 | [Bug] Unexpected reuse of payload instances in payload codec for specific workflow failure scenarios. |
| [#221](#221) | 0 | 3 | [Feature Request] Allow manual pagination of workflows |
| [#212](#212) | 1 | 1 | [Bug] Cannot add multiple versions of a workflow using DI |
| [#182](#182) | 0 | 3 | [Feature Request] Workflow is static object, not unit testable |
| [#181](#181) | 0 | 3 | [Feature Request] Dependency Injection into a workflow |
| [#160](#160) | 0 | 3 | [Feature Request] Add support for Temporal Schedule |
| [#140](#140) | 1 | 1 | [Feature Request] Add support for Log forwarding to lang-side |
| [#124](#124) | 1 | 1 | [Feature Request] Expose WorkflowInfo.LastFailure |
| [#84](#84) | 0 | 3 | [Bug] If a child workflow is in progress when the service goes down, no workflows are resumed |
| [#64](#64) | 0 | 3 | [Bug] Workflow that completes with no actions times out with deadlock error |
| [#46](#46) | 1 | 1 | [Feature Request] Add Temporalio.Extensions.DependencyInjection or similar |
| [#25](#25) | 0 | 3 | temporal-sdk-core-api-0.1.0: 1 vulnerabilities (highest severity is: 5.5) - autoclosed |
| [#8](#8) | 0 | 3 | temporal-sdk-core-0.1.0: 1 vulnerabilities (highest severity is: 5.5) - autoclosed |
| [#579](#579) | 0 | 2 | [Bug] SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux |
| [#513](#513) | 0 | 2 | TLS support without mTLS |
| [#500](#500) | 0 | 2 | [Bug] Segfault/crash occurs when using tasks without await |
| [#458](#458) | 0 | 2 | [Bug] Issues with ReserveCtxFromBridge |
| [#421](#421) | 0 | 2 | [Feature Request] ActivityOptions provider capability for testing |
| [#419](#419) | 0 | 2 | [Feature Request] Requesting that WorkflowHandle's members are marked virtual or inherit from interface |
| [#417](#417) | 0 | 2 | [Bug] Returning original unaltered payload from codec causes error |
| [#404](#404) | 0 | 2 | [Feature Request] Update .NET SDK with latest Cloud Operations API |
| [#375](#375) | 0 | 2 | [Feature Request] Align activation job application with TS changes |
| [#316](#316) | 1 | 0 | Support WorkflowIdConflictPolicy for Signal-With-Start API |
| [#290](#290) | 0 | 2 | [Bug] Worker does not retry if connection fails and kills the whole process |
| [#263](#263) | 0 | 2 | [Bug] Workflow.WaitConditionAsync may be blocked in Temporal 1.1.1 and will never be passed even when condition is true |
| [#256](#256) | 1 | 0 | [Feature Request] Clarify what the ICustomMetricMeter is used for in DiagnosticSource extension README |
| [#218](#218) | 0 | 2 | [Feature Request] Add visibility link in list workflow method XML doc |
| [#214](#214) | 0 | 2 | [Feature Request] Document Asynchronous Activity Completion in README |
| [#211](#211) | 0 | 2 | [Feature Request] Add search to API reference |
| [#197](#197) | 0 | 2 | [Feature Request] Clarification of the release cycle |
| [#187](#187) | 0 | 2 | [Bug] AddAllActivities not working |
| [#184](#184) | 0 | 2 | [Bug] [Blazor Webassembly] System.Diagnostics.Process is not supported on this platform |
| [#166](#166) | 1 | 0 | [Feature Request] Ability for certain task failure types to fail workflow |
| [#165](#165) | 0 | 2 | [Bug] Failed decoding parameters |
| [#156](#156) | 1 | 0 | [Feature Request] Clarify that the client is threadsafe |
| [#145](#145) | 1 | 0 | [Feature Request] StartDelay in Workflow Options |
| [#139](#139) | 0 | 2 | [Feature Request] Clarify support for alternative architectures |
| [#131](#131) | 1 | 0 | [Feature Request] Support single-platform local NuGet package build |
| [#125](#125) | 1 | 0 | [Feature Request] Support client keep alive |
| [#108](#108) | 0 | 2 | [Feature Request] Support unsafe tracing event disabling in workflows |
| [#90](#90) | 1 | 0 | [Feature Request] Random with larger seed |
| [#85](#85) | 0 | 2 | [Feature Request] Re-investigate signals/queries/activities as properties |
| [#45](#45) | 0 | 2 | Using dependency injection in a "worker" project hangs |
| [#30](#30) | 1 | 0 | Add API to count workflows |
| [#22](#22) | 0 | 2 | Temporal CLI based ephemeral server |
| [#565](#565) | 0 | 1 | Refactor test workflows into separate files |
| [#550](#550) | 0 | 1 | [Bug] Investigate `CanRunWith_CustomSlotSupplier` flake |
| [#522](#522) | 0 | 1 | [Feature Request] Consider updating tests to use .NET 10 |
| [#514](#514) | 0 | 1 | [Feature Request] Nexus cancellation type support |
| [#502](#502) | 0 | 1 | Can I have separate worker and client applications without duplicating all workflows and activities? |
| [#496](#496) | 0 | 1 | Inconsistent log property names for the workflow run identifier |
| [#489](#489) | 0 | 1 | [Feature Request] Provide last result and last failure to workflows |
| [#478](#478) | 0 | 1 | [Feature Request] Investigate test flake for `CanRunWith_CustomSlotSupplier` |
| [#463](#463) | 0 | 1 | [Bug] Unregistered Local Activity should fail Workflow Task |
| [#459](#459) | 0 | 1 | [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task |
| [#435](#435) | 0 | 1 | [Feature Request] Workflow logging - NLog async calls |
| [#427](#427) | 0 | 1 | [Bug] Replay after UnhandledCommand can cause main workflow body to complete before signals are handled |
| [#409](#409) | 0 | 1 | [Feature Request] Remove experimental warning from `RequestEagerStart` |
| [#401](#401) | 0 | 1 | [Bug] Issue with Azure and AWS .NET 8 images and TLS of latest SDK |
| [#386](#386) | 0 | 1 | [Feature Request] Improve WaitConditionAsync semantics |
| [#357](#357) | 0 | 1 | [Bug] Unexpected Serialization of Activity Results |
| [#349](#349) | 0 | 1 | [Bug] Failing to build completion does not use task token when creating failure |
| [#337](#337) | 0 | 1 | [Feature Request] Include more details from tonic from failed client_rpc_call invocations |
| [#311](#311) | 0 | 1 | [Feature Request] Update schedule default values |
| [#307](#307) | 0 | 1 | [Feature Request] Replace `System.TimeProvider` in workflows |
| [#305](#305) | 0 | 1 | Handle multiple completion commands |
| [#281](#281) | 0 | 1 | Workflow-friendly concurrency control |
| [#280](#280) | 0 | 1 | [Bug] TaskQueue not forwarded when using Test Environment, breaks ContinueAsNew (hangs) |
| [#274](#274) | 0 | 1 | Wrong casting in several classes |
| [#262](#262) | 0 | 1 | Provide methods to wait for all handlers to finish |
| [#261](#261) | 0 | 1 | Warn or error when update handlers dangle across CAN or workflow exit |
| [#257](#257) | 0 | 1 | [Feature Request] Support worker client update when using generic host |
| [#250](#250) | 0 | 1 | Wrap GRPC::CANCELED and DEADLINE_EXCEEDED in an SDK Timeout exception for Update |
| [#248](#248) | 0 | 1 | [Bug] Client hangs when waiting for calls on main thread |
| [#247](#247) | 0 | 1 | [Feature Request] Support for win-x86 |
| [#240](#240) | 0 | 1 | [Bug] WaitConditionAsync is run outside of Workflow context |
| [#229](#229) | 0 | 1 | [Feature Request] Make Temporalio.Testing to a seperate nuget out of Temporalio |
| [#204](#204) | 0 | 1 | [Feature Request] Support IAsyncDisposable activity classws with async scopes for DI in .NET 6+ |
| [#198](#198) | 0 | 1 | [Feature Request] SDK clients should set a UpdateID on any update request even if the user did not specify one |
| [#189](#189) | 0 | 1 | [Feature Request] Clarify documentation on the effect of specifying the `NonRetryableErrorTypes` as an empty list |
| [#185](#185) | 0 | 1 | [Feature Request] Support workflow metadata query |
| [#178](#178) | 0 | 1 | [Bug] Child Workflow Cancellation before scheduled surfaces as incorrect error |
| [#171](#171) | 0 | 1 | [Feature Request] Schedule creation should create tracing span by default |
| [#161](#161) | 0 | 1 | [Feature Request] Allow continue as new from update handler |
| [#155](#155) | 0 | 1 | [Feature Request] Workflow update handle should use resulting run ID on start |
| [#151](#151) | 0 | 1 | [Bug] WorkflowHandle.StartUpdateAsync does not unwrap exception properly |
| [#132](#132) | 0 | 1 | [Feature Request] Typed Search Attributes |
| [#130](#130) | 0 | 1 | tonic-0.9.2.crate: 2 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#128](#128) | 0 | 1 | cbindgen-0.24.5.crate: 1 vulnerabilities (highest severity is: 5.3) |
| [#126](#126) | 0 | 1 | [Feature Request] Advanced metrics support |
| [#121](#121) | 0 | 1 | cbindgen-0.24.3.crate: 1 vulnerabilities (highest severity is: 9.8) - autoclosed |
| [#86](#86) | 0 | 1 | [Feature Request] Disallow workflow attributes on anything static |
| [#65](#65) | 0 | 1 | [Feature Request] Update docfx for API docs |
| [#61](#61) | 0 | 1 | [Feature Request] Activity delegates can sometimes have System.Runtime.CompilerServices.Closure first param |
| [#50](#50) | 0 | 1 | [Feature Request] Move from Temporalite to Temporal CLI in local testing environment |
| [#49](#49) | 0 | 1 | When you planning to Release your product |
| [#38](#38) | 0 | 1 | [Feature Request] what is the roadmap for this sdk,  really need it  |
| [#35](#35) | 0 | 1 | [Bug] samples-dotnet can not finish job. |
| [#32](#32) | 0 | 1 | [Feature Request] Add CancellationToken parameter to TemporalClient.ConnectAsync and friends |
| [#28](#28) | 0 | 1 | go.temporal.io/sdk-v1.20.0: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#15](#15) | 0 | 1 | microsoft.extensions.logging.abstractions.1.1.1.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#12](#12) | 0 | 1 | xunit.console.2.4.2.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#4](#4) | 0 | 1 | tokio-1.23.0.crate: 2 vulnerabilities (highest severity is: 9.8) - autoclosed |
| [#3](#3) | 0 | 1 | microsoft.testplatform.testhost.17.1.0.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#2](#2) | 0 | 1 | xunit.2.4.1.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#588](#588) | 0 | 0 | [Bug] Some unlikely workflow task failures like failure conversion issues may be lost |
| [#587](#587) | 0 | 0 | Refactor Bridge.Client to be IDisposable instead of a SafeHandle |
| [#586](#586) | 0 | 0 | Separate unmanaged pointer lifecycle management into SafeHandles |
| [#584](#584) | 0 | 0 | [Bug] Loading TLS certificates from path doesn't work |
| [#578](#578) | 0 | 0 | [Feature Request] Add tests to confirm proper Nexus support for time-skipping environment |
| [#576](#576) | 0 | 0 | [Feature Request] .NET Analyzer for Checking Workflows |
| [#573](#573) | 0 | 0 | [Feature Request] Allow custom meter implementation to disable tracing event listener |
| [#568](#568) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#559](#559) | 0 | 0 | [Bug] Envconfig - Use correct `TemporalClientConnectOptions` constructor |
| [#558](#558) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#551](#551) | 0 | 0 | [Feature Request] Enable Worker Heartbeating |
| [#549](#549) | 0 | 0 | [Bug] Investigate `ExecuteWorkflowAsync_PollingBehavior_Autoscaling` flake |
| [#543](#543) | 0 | 0 | [Feature Request] Move `ClientEnvConfig` from `Temporalio.Client.EnvConfig` to `Temporalio.Common.EnvConfig` |
| [#542](#542) | 0 | 0 | [.net] Plugin + SimplePlugin |
| [#540](#540) | 0 | 0 | [Bug] Memory Leak in Temporalio.Bridge.CancellationToken |
| [#537](#537) | 0 | 0 | [Bug] Remove erroneous `Temporalio.Workflows.NexusOperationOptions.OperationName` |
| [#536](#536) | 0 | 0 | [Feature Request] Support Nexus in `Temporalio.Extensions.Hosting` |
| [#528](#528) | 0 | 0 | [Feature Request] Nexus custom slot suppliers |
| [#523](#523) | 0 | 0 | [Bug] Serialization context incorrectly applied to all workflow calls |
| [#519](#519) | 0 | 0 | [Feature Request] Ensure tests exist to confirm custom slot supplier slot info has proper fields |
| [#515](#515) | 0 | 0 | [Feature Request] Nexus OpenTelemetry support |
| [#512](#512) | 0 | 0 | [Feature Request] Ensure gRPC binary metadata headers are supported |
| [#510](#510) | 0 | 0 | [Feature Request] Reclassify Benign Application errors in OpenTelemetry |
| [#507](#507) | 0 | 0 | [Feature Request] Plugin support |
| [#505](#505) | 0 | 0 | [Feature Request] Add first execution run ID to workflow info |
| [#499](#499) | 0 | 0 | [Feature Request] Add Summary to LocalActivityOptions |
| [#490](#490) | 0 | 0 | [Feature Request] Environment Configuration |
| [#487](#487) | 0 | 0 | [Bug] Improperly accessing current activity context in outbound heartbeat |
| [#479](#479) | 0 | 0 | [.NET] Worker Versioning high level client |
| [#471](#471) | 0 | 0 | [Bug] Auto-time-skipping may not reset properly |
| [#465](#465) | 0 | 0 | [Bug] Update result serialization failure silently swallowed |
| [#464](#464) | 0 | 0 | [.net] SDK support for activity reset  |
| [#461](#461) | 0 | 0 | [Feature Request] Use GH ARM runner on binary build GH workflow |
| [#460](#460) | 0 | 0 | [Feature Request] Change get static summary/details on workflow in client to be lazy |
| [#457](#457) | 0 | 0 | [Feature Request] Show retry policy on activity info |
| [#448](#448) | 0 | 0 | [Feature Request] Apply application failure logging and metrics behaviour according to `ApplicationErrorCategory` |
| [#441](#441) | 0 | 0 | Heartbeating activities should be interrupted when the activities are paused. |
| [#440](#440) | 0 | 0 | [Feature Request] Support user data in forwarded log callback in C bridge |
| [#438](#438) | 0 | 0 | [Feature Request] Serialization context for codecs and converters |
| [#437](#437) | 0 | 0 | [Feature Request] Support New Worker Versioning API |
| [#430](#430) | 0 | 0 | [Feature Request] Allow metric meters to be constructed by users for tests |
| [#428](#428) | 0 | 0 | [Feature Request] Add summary to Nexus operation |
| [#426](#426) | 0 | 0 | [Feature Request] Initial Nexus implementation |
| [#423](#423) | 0 | 0 | [Feature Request] Move Rust C bridge to sdk-core |
| [#416](#416) | 0 | 0 | [Feature Request] Custom metric bucket sizes |
| [#415](#415) | 0 | 0 | [Feature Request] Expose root workflow execution |
| [#414](#414) | 0 | 0 | [Feature Request] Built-in query responses should use "RawValue" |
| [#412](#412) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#406](#406) | 0 | 0 | [Feature Request] Add tests/confirm signal handlers run first and as expected |
| [#403](#403) | 0 | 0 | [Feature Request] Support Priority Annotations |
| [#402](#402) | 0 | 0 | [Feature Request] Expose read-only headers to activity info |
| [#400](#400) | 0 | 0 | [Bug] Workflow codec not working with new timer summary |
| [#398](#398) | 0 | 0 | [Feature Request] Add explicit memoization support to the`Patched()` API |
| [#396](#396) | 0 | 0 | [Feature Request] Allow customization of dev server UI port |
| [#392](#392) | 0 | 0 | [Feature Request] OTel metrics over HTTP |
| [#391](#391) | 0 | 0 | [Feature Request] Special behavior for Temporal built-in prefixes |
| [#389](#389) | 0 | 0 | [Feature Request] Provide client from activity context |
| [#388](#388) | 0 | 0 | [Feature Request] Access to workflow/activity instance from context |
| [#387](#387) | 0 | 0 | [Feature Request] Provide "workflow local" |
| [#373](#373) | 0 | 0 | [Bug] CI build is broken due to GHA dropping support for node16-based actions |
| [#371](#371) | 0 | 0 | [Bug] Child workflow already started puts workflow type where run ID is |
| [#368](#368) | 0 | 0 | [Feature Request] Clarify support .NET versions/runtimes in README |
| [#367](#367) | 0 | 0 | [Feature Request] Allow access to optional `MethodInfo` on `ActivityDefinition` |
| [#365](#365) | 0 | 0 | [Feature Request] Add DisableEagerExecution to WorkerOptions |
| [#361](#361) | 0 | 0 | [Feature Request] Clarify in workflow constructor exception that DI is not supported |
| [#360](#360) | 0 | 0 | [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result |
| [#359](#359) | 0 | 0 | [Feature Request] Support user metadata |
| [#358](#358) | 0 | 0 | [Feature Request] Update Cargo dependencies including Tonic |
| [#351](#351) | 0 | 0 | Show update handler and ID in logging context |
| [#350](#350) | 0 | 0 | [Bug] Generic Activity methods are unsupported |
| [#346](#346) | 0 | 0 | UpdateWithStart SDK API |
| [#342](#342) | 0 | 0 | [Bug] Payload data not properly cleared before replaced |
| [#333](#333) | 0 | 0 | [Bug] Cloud tests not actually running on cloud |
| [#332](#332) | 0 | 0 | [Feature Request] `ReplayWorkflowsAsync` should take `limit` parameter |
| [#331](#331) | 0 | 0 | [Bug] Copy paste error in Update docstring / API reference documentation |
| [#327](#327) | 0 | 0 | [Feature Request] Clarify in README that CancellationTokenSource.CancelAsync is unsafe |
| [#325](#325) | 0 | 0 | [Feature Request] Do not warn on unfinished handler on workflow failure |
| [#321](#321) | 0 | 0 | [Feature Request] Document default RPC options when left null/unset |
| [#314](#314) | 0 | 0 | [Feature Request] Support schedule search attribute update |
| [#312](#312) | 0 | 0 | [Feature Request] Update core and confirm new post-complete command reordering |
| [#303](#303) | 0 | 0 | [Feature Request] Create wrappers for commonly-known-safe async calls |
| [#300](#300) | 0 | 0 | [Feature Request] Support "query" when listing schedules |
| [#299](#299) | 0 | 0 | [Feature Request] Upon initial client connection, use `RpcException` if initial `GetSystemInfo` call fails |
| [#297](#297) | 0 | 0 | [Feature Request] Add Temporalio.Workflows.Mutex as thin facade over single-count Temporalio.Workflows.Semaphore |
| [#292](#292) | 0 | 0 | [Feature Request] Replace BuildJet ARM runner with GH runner |
| [#291](#291) | 0 | 0 | [Feature Request] Update test running to replay |
| [#278](#278) | 0 | 0 | Testing |
| [#277](#277) | 0 | 0 | Testing |
| [#276](#276) | 0 | 0 | Testing |
| [#265](#265) | 0 | 0 | Expose UpdateID in an update handler |
| [#253](#253) | 0 | 0 | [Feature Request] Call Core worker.validate |
| [#249](#249) | 0 | 0 | [Feature Request] Do not set workflow completion until after all coroutines have settled in the task |
| [#246](#246) | 0 | 0 | [Feature Request] Expose raw proto objects on WorkflowExecution and WorkflowExecutionDescription |
| [#244](#244) | 0 | 0 | [Feature Request] Cloud Operations API Client |
| [#243](#243) | 0 | 0 | [Feature Request] Enforce no-commands-allowed restrictions in read-only contexts |
| [#238](#238) | 0 | 0 | [Bug] System.InvalidOperationException: This service descriptor is keyed. Your service provider may not support keyed services |
| [#235](#235) | 0 | 0 | [Feature Request] Client replacement in worker |
| [#231](#231) | 0 | 0 | [Feature Request] Make StartUpdateAsync users aware that it's synchronous w/ worker.  |
| [#228](#228) | 0 | 0 | [Feature Request] Make sure all client responses are user-instantiable/mockable |
| [#225](#225) | 0 | 0 | [Feature Request] Make protected DefaultPayloadConverter constructors public |
| [#220](#220) | 0 | 0 | [Feature Request] Document host builder caveats |
| [#219](#219) | 0 | 0 | Expose defaultConnection() method to switch between localhost and cloud based on env |
| [#217](#217) | 0 | 0 | Support for WorkflowIdConflictPolicy |
| [#215](#215) | 0 | 0 | [Feature Request] HTTP CONNECT proxy support |
| [#210](#210) | 0 | 0 | [Feature Request] Use macOS M1/ARM runners for all SDK CI |
| [#209](#209) | 0 | 0 | [Feature Request] Support metric option for using seconds (and other recent core metric changes) |
| [#199](#199) | 0 | 0 | [Feature Request] SDK should not return an update handle if the update has not reached the desired state |
| [#196](#196) | 0 | 0 | [Feature Request] Expose max poller options for workers |
| [#194](#194) | 0 | 0 | coverlet.collector.3.1.2.nupkg: 1 vulnerabilities (highest severity is: 7.5) |
| [#191](#191) | 0 | 0 | [Feature Request] API key client option |
| [#190](#190) | 0 | 0 | [Feature Request] Clarify in README how SignalWithStart appears is .NET |
| [#186](#186) | 0 | 0 | Expose next retry delay on Application Failure in all SDKs |
| [#183](#183) | 0 | 0 | [Feature Request] Eager Workflow Start |
| [#176](#176) | 0 | 0 | [Feature Request] Handle possibility of update-before-start |
| [#173](#173) | 0 | 0 | [Bug] Not ignoring unknown fields when parsing history for replay |
| [#167](#167) | 0 | 0 | [Feature Request] Add error message to native-library README section for easier discoverability |
| [#157](#157) | 0 | 0 | [Feature Request] Default TemporalWorkerOptions.DebugMode to Debugger.IsAttached |
| [#148](#148) | 0 | 0 | Remove ClientOutboundInterceptor.PollWorkflowUpdateAsync |
| [#147](#147) | 0 | 0 | Remove timeout from WorkflowUpdateHandle.GetResultAsync |
| [#143](#143) | 0 | 0 | [Bug] DeleteWorkflowExecution service call not exposed properly |
| [#135](#135) | 0 | 0 | [Feature Request] Confirm absense of metric config still results in no-op metric meter |
| [#134](#134) | 0 | 0 | [Feature Request] Investigate signal with start helper on options that is type safe |
| [#133](#133) | 0 | 0 | [Feature Request] Need LastFailure and LastResult on WorkflowInfo |
| [#122](#122) | 0 | 0 | [Feature Request] Expose history-related properties to workflow |
| [#117](#117) | 0 | 0 | [Bug] Activity definition cache reuses instance |
| [#116](#116) | 0 | 0 | [Bug] DI worker service not using obtained logger factory |
| [#110](#110) | 0 | 0 | [Feature Request] Update README client DI to use extension project |
| [#109](#109) | 0 | 0 | Use single-L for all cancelled (sic) type names like .NET does |
| [#107](#107) | 0 | 0 | [Feature Request] Clarify in README the role of the native shared library |
| [#106](#106) | 0 | 0 | [Feature Request] Clarify inheritance rules/reasons for workflow attributes |
| [#105](#105) | 0 | 0 | [Bug] Signals that can't be deserialized should be dropped/ignored |
| [#104](#104) | 0 | 0 | Change ID to Id |
| [#101](#101) | 0 | 0 | [Feature Request] Confirm .NET Framework properly copies binaries as expected |
| [#99](#99) | 0 | 0 | Worker versioning support |
| [#77](#77) | 0 | 0 | [Bug] Time skipping test server not auto skipping time properly in some cases |
| [#71](#71) | 0 | 0 | [Bug] https://dotnet.temporal.io/api not loading TOC |
| [#70](#70) | 0 | 0 | [Feature Request] Add RPC metadata updater to client |
| [#55](#55) | 0 | 0 | [Feature Request] Cloud test that runs in CI using org secrets |
| [#54](#54) | 0 | 0 | [Feature Request] Simple benchmarker that runs nightly |
| [#52](#52) | 0 | 0 | [Feature Request] Replace Go kitchen sink workflow in tests with .NET one |
| [#41](#41) | 0 | 0 | [Bug] DataConverter should not eagerly instantiate payload/failure converter from type |
| [#36](#36) | 0 | 0 | [Bug] NuGet package is built with too-new of a glibc version |
| [#27](#27) | 0 | 0 | [Feature Request] Support dynamic workflows, activities, signals, and queries |
| [#23](#23) | 0 | 0 | [Feature Request] Schedules API |
| [#19](#19) | 0 | 0 | martincostello.logging.xunit.0.3.0.nupkg: 2 vulnerabilities (highest severity is: 7.5) |
| [#10](#10) | 0 | 0 | [Feature Request] Incorporate StyleCop analyzers in CI/format |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="385"></a>

### #385: [Feature Request] Add support for win-arm64

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/385 |
| **State** | CLOSED |
| **Author** | PejmanNik (Pejman) |
| **Created** | 2025-01-04 09:51:35.000 UTC (1 years ago) |
| **Updated** | 2025-10-21 15:12:26.000 UTC |
| **Closed** | 2025-10-21 15:12:26.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 23 |
| **Priority Score** | 27 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

Windows on ARM is becoming increasingly popular, and local machines with this CPU architecture are becoming more common. Not supporting such a major architecture could be a significant drawback for the library.

### Describe the solution you'd like

Adding support for win-arm64



#### Comments (23)

<details>
<summary><strong>cretz</strong> commented on 2025-01-06 15:16:13.000 UTC</summary>

None of our core-based SDKs (TypeScript, Python, .NET, or Ruby) ship a prebuilt Windows ARM build. You should be able to manually build it, but unfortunately adding this by default to the NuGet package makes it bigger by several megs for everyone (I think it's ~8MB for each additional platform we support). We also don't prebuild for other arguably more popular OS/arch's too like Windows 32-bit (popular with many of our .NET users), and Linux MUSL (which is quite popular IIRC since Alpine is the common .NET container base). Ref https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#built-in-native-shared-library.

Is it possible to build the package yourself for this architecture? We may be able to consider new NuGet packages who simply provide this DLL and nothing more, but so far we have encouraged all users not using OS/arch's we prebuild for to build the package themselves.

</details>

<details>
<summary><strong>PejmanNik</strong> commented on 2025-01-06 18:29:34.000 UTC</summary>

Thank you. Yes, building the package locally is not an issue, but it makes it impossible to sell it as an enterprise solution when team members cannot easily run the project.

It seems this is more related to a NuGet limitation. What do you think about moving the download process to runtime? This should improve restore times, as it wouldn’t need to download the DLLs for all architectures 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-06 19:21:38.000 UTC</summary>

> What do you think about moving the download process to runtime?

We definitely would like to use the traditional package management process. Some users may not be ok with a library downloading DLLs and running them at runtime. If your users are ok with this, you can put the prebuilt DLL somewhere and download it to the right spot before loading the DLL.

But again, we may be able to put this in separate NuGet packages, but we have to have some discussions about effort to provide/maintain official packages for these OS/arch setups that we do not in any SDK today. It does require a good amount of CI efforts.

Reactions: 👍 1

</details>

<details>
<summary><strong>PejmanNik</strong> commented on 2025-01-06 19:29:55.000 UTC</summary>

That makes sense. Thank you for your response!

</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-27 13:22:35.000 UTC</summary>

It would be nice to leave instructions on how to build the missing bridge dll on Windows on ARM for those of us not accustomed to  building things outside of dotnet. The instructions on site leave a lot out and I find myself trying to fill in the gaps and it's not easy :/

</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-27 13:58:36.000 UTC</summary>

Okay, I so managed to build the bridge dll on WOA64 (surface laptop 7, arm64) and after adding the win-arm64 RID into my local nuget package cache, and specifically targeting ARM64 on the samples project, I tried to run one of the samples: 

![Image](https://github.com/user-attachments/assets/112bc354-ed21-45a7-84d8-70be0437ff59)

Yes, for some delightful reason, it's trying to allocate over 2TB of memory on my poor little 64GB laptop.

@sergeybykov any pointers? :)

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-27 14:26:13.000 UTC</summary>

> It would be nice to leave instructions on how to build the missing bridge dll on Windows on ARM for those of us not accustomed to building things outside of dotnet. 

This should just be `dotnet build` (or `dotnet build --configuration Release`) per https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#build if you have the prerequisites in place. But yes, configuring .NET itself unrelated to the SDK is a bit beyond the scope of our docs here. There are technically ways to cross compile, though usually you want to build on the arch you need because you want to run tests on that arch to confirm it works.

> Yes, for some delightful reason, it's trying to allocate over 2TB of memory on my poor little 64GB laptop.

Something strange is happening here, though nothing obvious. May have to debug a bit more to see which line of code is causing this. Can you confirm SDK tests run properly in the Windows ARM environment?

</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-27 14:42:13.000 UTC</summary>

> > It would be nice to leave instructions on how to build the missing bridge dll on Windows on ARM for those of us not accustomed to building things outside of dotnet.
> 
> This should just be `dotnet build` (or `dotnet build --configuration Release`) per https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#build if you have the prerequisites in place. But yes, configuring .NET itself unrelated to the SDK is a bit beyond the scope of our docs here. There are technically ways to cross compile, though usually you want to build on the arch you need because you want to run tests on that arch to confirm it works.

I managed to figure out the missing bits in between the high level requirements:

- install rust compiler (msvc flavour)
- install rustup/cargo
- install LLVM for woa64/arm64 (for clang, demanded by rust)
- install protoc for c# (not available for arm64, but woa64 prism is fine with the x64 version - unless there's a weird endian issue here, but my knowledge of protobuf is limited - but I can't imagine a cross plaform binary transport format has endian preferences)

This seemed to result in a seamless build in both Debug and Release modes, resulting in a 24MB dll (release) and roughly twice that for debug. I manually created the missing RID folder in my local nuget package cache (this avoids having to build a new nuget and add a custom package source.)

> 
> > Yes, for some delightful reason, it's trying to allocate over 2TB of memory on my poor little 64GB laptop.
> 
> Something strange is happening here, though nothing obvious. May have to debug a bit more to see which line of code is causing this. Can you confirm SDK tests run properly in the Windows ARM environment?

The tests (sdk-dotnet) are outright broken:

```text
❯ dotnet test
Restore complete (1.3s)
  Temporalio netstandard2.0 succeeded (27.2s) → src\Temporalio\bin\Debug\netstandard2.0\Temporalio.dll
  Temporalio net462 succeeded (27.9s) → src\Temporalio\bin\Debug\net462\Temporalio.dll
  Temporalio netcoreapp3.1 succeeded (30.3s) → src\Temporalio\bin\Debug\netcoreapp3.1\Temporalio.dll
  Temporalio.Extensions.Hosting netstandard2.0 succeeded (0.1s) → src\Temporalio.Extensions.Hosting\bin\Debug\netstandard2.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.DiagnosticSource netstandard2.0 succeeded (0.2s) → src\Temporalio.Extensions.DiagnosticSource\bin\Debug\netstandard2.0\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.OpenTelemetry netstandard2.0 succeeded (0.3s) → src\Temporalio.Extensions.OpenTelemetry\bin\Debug\netstandard2.0\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting net462 succeeded (0.4s) → src\Temporalio.Extensions.Hosting\bin\Debug\net462\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.DiagnosticSource net462 succeeded (0.5s) → src\Temporalio.Extensions.DiagnosticSource\bin\Debug\net462\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.OpenTelemetry net462 succeeded (0.5s) → src\Temporalio.Extensions.OpenTelemetry\bin\Debug\net462\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting net6.0 succeeded (0.1s) → src\Temporalio.Extensions.Hosting\bin\Debug\net6.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Tests succeeded (0.1s) → tests\Temporalio.Tests\bin\Debug\net6.0\Temporalio.Tests.dll
[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.3+1b45f5407b (64-bit .NET 6.0.36)
[xUnit.net 00:00:00.58]   Discovering: Temporalio.Tests
[xUnit.net 00:00:00.67]   Discovered:  Temporalio.Tests
[xUnit.net 00:00:00.67]   Starting:    Temporalio.Tests
[xUnit.net 00:00:00.73]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_SlowWorkflowAutoSkip_ProperlySkips [SKIP]
[xUnit.net 00:00:00.73]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.74]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_AutoTimeSkippingDisabled_RestoresAfterCall [SKIP]
[xUnit.net 00:00:00.74]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.74]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_AutoTimeSkippingDisabled_SleepsFullTime [SKIP]
[xUnit.net 00:00:00.74]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.81]     Temporalio.Tests.Client.TemporalCloudOperationsClientTests.ConnectAsync_SimpleCall_Succeeds [SKIP]
[xUnit.net 00:00:00.81]       No cloud API key
CLI 1.3.0 (Server 1.27.1, UI 2.36.0)
Server:  localhost:57660
Metrics: http://localhost:57662/metrics
[xUnit.net 00:00:04.31]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_MissesHeartbeatTimeout_TimesOut [SKIP]
[xUnit.net 00:00:04.31]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:04.31]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_SlowWorkflowManualSkip_ProperlySkips [SKIP]
[xUnit.net 00:00:04.31]       Time-skipping test server only works on x86/x64 platforms
CLI 1.3.1-persistence-fix.0 (Server 1.27.0, UI 2.36.0)
Server:  localhost:57690
Metrics: http://localhost:57691/metrics
2025-05-27T14:37:01.476938Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTQxNjlkYmQxLWY1ZmUtNDZkYy1hZTg5LWI0YmU3ZjIyOGRiNBokMDE5NzEyMmMtZGZlNy03NzljLWFmYTAtNjBkMzgwOWM2ZGUwIAUoATIBMUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEK2AQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:37:01.476943Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTQxNjlkYmQxLWY1ZmUtNDZkYy1hZTg5LWI0YmU3ZjIyOGRiNBokMDE5NzEyMmMtZGZlNy03NzljLWFmYTAtNjBkMzgwOWM2ZGUwIAYoATIBMkIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBELCAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:37:01.476938Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTQxNjlkYmQxLWY1ZmUtNDZkYy1hZTg5LWI0YmU3ZjIyOGRiNBokMDE5NzEyMmMtZGZlNy03NzljLWFmYTAtNjBkMzgwOWM2ZGUwIAkoATIBNUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEK6AQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:37:01.480309Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTQxNjlkYmQxLWY1ZmUtNDZkYy1hZTg5LWI0YmU3ZjIyOGRiNBokMDE5NzEyMmMtZGZlNy03NzljLWFmYTAtNjBkMzgwOWM2ZGUwIAgoATIBNEIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEKqAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:37:01.480510Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTQxNjlkYmQxLWY1ZmUtNDZkYy1hZTg5LWI0YmU3ZjIyOGRiNBokMDE5NzEyMmMtZGZlNy03NzljLWFmYTAtNjBkMzgwOWM2ZGUwIAcoATIBM0IRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEKuAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:37:03.903617Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTViZTU4OWQ2LTFjMDItNGQ4YS05YWVkLWZiZmZmZGQ0ZjQxNxokMDE5NzEyMmMtZTlmNy03YzliLTg0NmEtZTlkMzIyNmY5NmJmIAUoATIBMUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEMyCQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
time=2025-05-27T10:37:08.885 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.0171ms args=[deployment-default-versioning-dfb212e9-2637-4cd0-8c79-1f26d1571a27]
time=2025-05-27T10:37:09.816 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.5169ms args=[deployment-default-versioning-e0125565-b7ac-4ed5-86a6-5432b79108be]
2025-05-27T14:37:10.738962Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-09c7ddf5-121b-49f3-be16-c8d7c328eab3" }.
time=2025-05-27T10:37:10.749 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.5114ms args=[deployment-ramping-109d5834-7830-4cd6-8e34-dc0468182a24]
time=2025-05-27T10:37:14.282 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.0339ms args=[deployment-dynamic-010118bb-6343-467d-b920-20977e474e9f]
2025-05-27T14:37:14.770547Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-8f2c3b10-f53f-4345-918d-b81277b9ecf4" }.
2025-05-27T14:37:14.771059Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-8f2c3b10-f53f-4345-918d-b81277b9ecf4" }.
time=2025-05-27T10:37:14.775 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=534µs args=[deployment-d2ede803-a6b8-4e27-954b-b99f4472349b]
time=2025-05-27T10:37:17.455 level=ERROR msg="could not sync version summary to deployment workflow" service=worker Namespace=default TaskQueue=temporal-sys-per-ns-tq WorkerID=temporal-system@IONARDLP012@default WorkflowType=temporal-sys-worker-deployment-version-workflow WorkflowID=temporal-sys-worker-deployment-version:deployment-d2ede803-a6b8-4e27-954b-b99f4472349b.1.0 RunID=0197122d-18e7-71c1-8c3f-7d73a1cff97e Attempt=0 wf-namespace=default error=<nil>
time=2025-05-27T10:37:18.522 level=ERROR msg="could not sync version summary to deployment workflow" service=worker Namespace=default TaskQueue=temporal-sys-per-ns-tq WorkerID=temporal-system@IONARDLP012@default WorkflowType=temporal-sys-worker-deployment-version-workflow WorkflowID=temporal-sys-worker-deployment-version:deployment-d2ede803-a6b8-4e27-954b-b99f4472349b.2.0 RunID=0197122d-1c9d-73b6-b1ff-597b00f48237 Attempt=0 wf-namespace=default error=<nil>
time=2025-05-27T10:37:18.687 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=2.5269ms args=[deployment-dynamic-4d5ef527-bffb-4d25-846e-88e6ed73abbf]
2025-05-27T14:37:24.465220Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.469951Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.479582Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.491334Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.509420Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.521079Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.959686Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-4045-72f3-88b1-23512b62634e failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:24.965878Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-4045-72f3-88b1-23512b62634e failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
time=2025-05-27T10:37:29.685 level=WARN msg="Per shard per namespace RPS warn limit exceeded" service=history shard-id=1 wf-namespace=default rps=43
time=2025-05-27T10:37:29.694 level=WARN msg="Per shard RPS warn limit exceeded" service=history shard-id=1 rps=67
2025-05-27T14:37:31.146446Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-587a-7e63-92db-e31b1cc76962 failure=Failure { failure: Some(Failure { message: "Update validator for DoUpdateValidatorCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:31.152166Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-587a-7e63-92db-e31b1cc76962 failure=Failure { failure: Some(Failure { message: "Update validator for DoUpdateValidatorCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:32.022291Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-5bea-74ef-8413-b076630d689d failure=Failure { failure: Some(Failure { message: "Workflow type not-found-workflow is not registered on this worker, available workflows: SimpleWorkflow", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.CreateInstance(WorkflowActivation act, DataConverter dataConverter) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 326\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_0.<HandleActivationAsync>b__2(String _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 194\r\n   at System.Collections.Concurrent.ConcurrentDictionary`2.GetOrAdd(TKey key, Func`2 valueFactory)\r\n   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 194", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "NotFoundError", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:32.408222Z  WARN temporal_sdk_core::worker::workflow: Failing legacy query request run_id=0197122d-5d33-7278-9fa4-1459c6cc8401 failure=Failure { failure: Some(Failure { message: "Query handler for QueryMakingCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:32.526516Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-5de2-7949-8dd2-0243b7f6e341 failure=Failure { failure: Some(Failure { message: "Intentionally failing task", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateBadResultSerializationPayloadConverter.ToPayload(Object value) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4199\r\n   at Temporalio.Worker.WorkflowInstance.<>c__DisplayClass169_1.<ApplyDoUpdateAsync>b__2(Task`1 _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1269\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:32.533375Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-5de2-7949-8dd2-0243b7f6e341 failure=Failure { failure: Some(Failure { message: "Intentionally failing task", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateBadResultSerializationPayloadConverter.ToPayload(Object value) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4199\r\n   at Temporalio.Worker.WorkflowInstance.<>c__DisplayClass169_1.<ApplyDoUpdateAsync>b__2(Task`1 _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1269\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:35.904565Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:36.934645Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:37:36.970525Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-6f41-7a6a-8b13-85858bca197d failure=Failure { failure: Some(Failure { message: "Intentional error", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.WaitConditionExceptionWorkflow.<>c.<RunAsync>b__0_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4671\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 865\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:46.348622Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-93e0-77ad-b773-987f670cb4f4 failure=Failure { failure: Some(Failure { message: "Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls.", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 197\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 157\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)\r\n   at System.Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)\r\n   at System.Threading.Tasks.Task.DelayPromise..ctor(UInt32 millisecondsDelay)\r\n   at System.Threading.Tasks.Task.Delay(UInt32 millisecondsDelay, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.Delay(Int32 millisecondsDelay)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 211\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:46.686765Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-952e-7884-a093-4fb66941fb50 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task`1.StartNew(Task parent, Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, InternalTaskOptions internalOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.TaskFactory`1.StartNew(Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Task.Run[TResult](Func`1 function, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.Run[TResult](Func`1 function)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 214\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:47.011183Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-967c-71c4-ab61-43c9ba154ed1 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task`1.StartNew(Task parent, Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, InternalTaskOptions internalOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.TaskFactory.StartNew[TResult](Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, TaskScheduler scheduler)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 216\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:47.349848Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-97ca-7bd9-ba52-63bd0c5123d2 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.ContinueWithTaskContinuation.Run(Task completedTask, Boolean canInlineContinuationTask)\r\n   at System.Threading.Tasks.Task.ContinueWithCore(Task continuationTask, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions options)\r\n   at System.Threading.Tasks.Task.ContinueWith[TResult](Func`2 continuationFunction, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions)\r\n   at System.Threading.Tasks.Task.ContinueWith[TResult](Func`2 continuationFunction, TaskScheduler scheduler)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 219\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:47.686393Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-991c-7141-8076-bcacf6220cae failure=Failure { failure: Some(Failure { message: "Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls.", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 197\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 157\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)\r\n   at System.Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)\r\n   at System.Threading.Tasks.Task.CancellationPromise`1..ctor(Task source, UInt32 millisecondsDelay, CancellationToken token)\r\n   at System.Threading.Tasks.Task.WaitAsync(UInt32 millisecondsTimeout, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.WaitAsync(TimeSpan timeout)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 221\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:48.052985Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-9a7b-706b-bbf1-670d9a6adb6f failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task.Start(TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Dataflow.Internal.Common.StartTaskSafe(Task task, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessary_Slow(Boolean isReplacementReplica, Boolean outgoingLockKnownAcquired)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessary(Boolean isReplacementReplica, Boolean outgoingLockKnownAcquired)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessaryWithValueLock()\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.AddMessage(TOutput item)\r\n   at System.Threading.Tasks.Dataflow.BufferBlock`1.System.Threading.Tasks.Dataflow.ITargetBlock<T>.OfferMessage(DataflowMessageHeader messageHeader, T messageValue, ISourceBlock`1 source, Boolean consumeToAccept)\r\n   at System.Threading.Tasks.Dataflow.DataflowBlock.SendAsync[TInput](ITargetBlock`1 target, TInput item, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Dataflow.DataflowBlock.SendAsync[TInput](ITargetBlock`1 target, TInput item)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 225\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:48.369441Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-9bc5-7ea6-9ae2-0abd1bb9f534 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.TaskContinuation.InlineIfPossibleOrElseQueue(Task task, Boolean needsProtection)\r\n   at System.Threading.Tasks.ContinueWithTaskContinuation.Run(Task completedTask, Boolean canInlineContinuationTask)\r\n   at System.Threading.Tasks.Task.ContinueWithCore(Task continuationTask, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions options)\r\n   at System.Threading.Tasks.Task`1.ContinueWith[TNewResult](Func`2 continuationFunction, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions)\r\n   at System.Threading.Tasks.Task`1.ContinueWith[TNewResult](Func`2 continuationFunction, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Task.WhenAny[TResult](Task`1[] tasks)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 228\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:48.718154Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122d-9d25-7c61-9749-7bda97837cea failure=Failure { failure: Some(Failure { message: "Function during tracing event listener disabling created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.WithTracingEventListenerDisabled[T](Func`1 fn) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 584\r\n   at Temporalio.Workflows.Workflow.Unsafe.WithTracingEventListenerDisabled[T](Func`1 fn) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 1381\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 231\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:37:50.140951Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyYy1kZDg2LTdlOWMtODIzOC00YjFhYTE3OGEwMTgSLXdvcmtmbG93LTBiMGRmYjQ5LWJkZjUtNDFlOS1hZDAzLWIyYmE0YzI3MjJjNRokMDE5NzEyMmQtOWViNC03MTZkLThmNzYtNGYyZWEyMjEwM2U4IAUoATIBMUIQUnVuVW50aWxDYW5jZWxlZEoICAEQ6rxAGAE=) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
  Temporalio.Tests test failed with 1 warning(s) (59.5s)
    C:\Program Files\dotnet\sdk\9.0.300\Microsoft.TestPlatform.targets(48,5): warning MSB5021: Terminating the task executable "dotnet" and its child processes because the build was canceled.

Build failed with 1 warning(s) in 111.2s
                                                                             oisin.grehan  sdk-dotnet main ⇣ 91
1m 51.505s ❯
                                                                             oisin.grehan  sdk-dotnet main ⇣ 91
❯ dotnet test
Restore complete (1.7s)
  Temporalio netstandard2.0 succeeded (0.2s) → src\Temporalio\bin\Debug\netstandard2.0\Temporalio.dll
  Temporalio netcoreapp3.1 succeeded (0.3s) → src\Temporalio\bin\Debug\netcoreapp3.1\Temporalio.dll
  Temporalio net462 succeeded (0.5s) → src\Temporalio\bin\Debug\net462\Temporalio.dll
  Temporalio.Extensions.OpenTelemetry netstandard2.0 succeeded (0.0s) → src\Temporalio.Extensions.OpenTelemetry\bin\Debug\netstandard2.0\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting netstandard2.0 succeeded (0.0s) → src\Temporalio.Extensions.Hosting\bin\Debug\netstandard2.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.DiagnosticSource net462 succeeded (0.2s) → src\Temporalio.Extensions.DiagnosticSource\bin\Debug\net462\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.DiagnosticSource netstandard2.0 succeeded (0.1s) → src\Temporalio.Extensions.DiagnosticSource\bin\Debug\netstandard2.0\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.OpenTelemetry net462 succeeded (0.1s) → src\Temporalio.Extensions.OpenTelemetry\bin\Debug\net462\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting net462 succeeded (0.2s) → src\Temporalio.Extensions.Hosting\bin\Debug\net462\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.Hosting net6.0 succeeded (0.2s) → src\Temporalio.Extensions.Hosting\bin\Debug\net6.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Tests succeeded (0.1s) → tests\Temporalio.Tests\bin\Debug\net6.0\Temporalio.Tests.dll
[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.3+1b45f5407b (64-bit .NET 6.0.36)
[xUnit.net 00:00:00.35]   Discovering: Temporalio.Tests
[xUnit.net 00:00:00.43]   Discovered:  Temporalio.Tests
[xUnit.net 00:00:00.43]   Starting:    Temporalio.Tests
[xUnit.net 00:00:00.50]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_SlowWorkflowAutoSkip_ProperlySkips [SKIP]
[xUnit.net 00:00:00.50]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.50]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_AutoTimeSkippingDisabled_RestoresAfterCall [SKIP]
[xUnit.net 00:00:00.50]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.50]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_AutoTimeSkippingDisabled_SleepsFullTime [SKIP]
[xUnit.net 00:00:00.50]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:00.55]     Temporalio.Tests.Client.TemporalCloudOperationsClientTests.ConnectAsync_SimpleCall_Succeeds [SKIP]
[xUnit.net 00:00:00.55]       No cloud API key
CLI 1.3.0 (Server 1.27.1, UI 2.36.0)
Server:  localhost:62229
Metrics: http://localhost:62232/metrics
CLI 1.3.1-persistence-fix.0 (Server 1.27.0, UI 2.36.0)
Server:  localhost:62230
Metrics: http://localhost:62231/metrics
time=2025-05-27T10:38:05.234 level=ERROR msg="Queue reader unable to retrieve tasks" shard-id=1 address=127.0.0.1:62261 component=transfer-queue-processor queue-reader-id=0 error="shard status unknown"
[xUnit.net 00:00:04.08]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_MissesHeartbeatTimeout_TimesOut [SKIP]
[xUnit.net 00:00:04.08]       Time-skipping test server only works on x86/x64 platforms
[xUnit.net 00:00:04.08]     Temporalio.Tests.Testing.WorkflowEnvironmentTests.StartTimeSkippingAsync_SlowWorkflowManualSkip_ProperlySkips [SKIP]
[xUnit.net 00:00:04.08]       Time-skipping test server only works on x86/x64 platforms
2025-05-27T14:38:06.348977Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWMyM2M0MjQ4LWE1NGQtNGI5MS05NDc1LWEyZWYxY2VmNWZmORokMDE5NzEyMmQtZGQ1Yy03ZGVkLWEwZGUtZGY3NWQyMGI5OWEyIAUoATIBMUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEK+AQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:38:06.348977Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWMyM2M0MjQ4LWE1NGQtNGI5MS05NDc1LWEyZWYxY2VmNWZmORokMDE5NzEyMmQtZGQ1Yy03ZGVkLWEwZGUtZGY3NWQyMGI5OWEyIAYoATIBMkIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEKyAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:38:06.348977Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWMyM2M0MjQ4LWE1NGQtNGI5MS05NDc1LWEyZWYxY2VmNWZmORokMDE5NzEyMmQtZGQ1Yy03ZGVkLWEwZGUtZGY3NWQyMGI5OWEyIAgoATIBNEIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEK2AQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:38:06.348996Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWMyM2M0MjQ4LWE1NGQtNGI5MS05NDc1LWEyZWYxY2VmNWZmORokMDE5NzEyMmQtZGQ1Yy03ZGVkLWEwZGUtZGY3NWQyMGI5OWEyIAkoATIBNUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEKqAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:38:06.349488Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWMyM2M0MjQ4LWE1NGQtNGI5MS05NDc1LWEyZWYxY2VmNWZmORokMDE5NzEyMmQtZGQ1Yy03ZGVkLWEwZGUtZGY3NWQyMGI5OWEyIAcoATIBM0IRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEKuAQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:38:08.715001Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWRiYzliMzJiLTI1ODMtNGY3ZS1hMjk1LTAzY2QxZTFhZWY1MhokMDE5NzEyMmQtZTc0MS03NmE0LTgxMzYtOGYxZDIxNTEzYTk5IAUoATIBMUIRV2FpdFVudGlsQ2FuY2VsZWRKCAgBEMuCQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
time=2025-05-27T10:38:13.373 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=941µs args=[deployment-default-versioning-2d7de99a-909d-48d9-b3c8-c393d7afef7a]
time=2025-05-27T10:38:14.223 level=ERROR msg="deployment client error" error="context canceled" operation=RegisterTaskQueueWorker elapsed=849.6336ms args="[tq-ee0b0b89-ccba-487c-a093-4f8e81bac3fb Workflow matching service]"
time=2025-05-27T10:38:14.237 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=4.6136ms args=[deployment-default-versioning-c1350217-ee58-4b7b-84ff-54fe290cd5fd]
2025-05-27T14:38:15.214158Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-e2b1ffaa-30d0-4b32-9fae-5d56767c7134" }.
time=2025-05-27T10:38:15.219 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.0409ms args=[deployment-ramping-7e952aab-4ecb-438f-af4f-748776072fef]
time=2025-05-27T10:38:18.409 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=501.8µs args=[deployment-dynamic-27cf78f3-cb46-4194-ad2f-d0356f9b166a]
2025-05-27T14:38:19.111880Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-445bd033-e0b8-46b2-ad1f-aac915b11bc6" }.
2025-05-27T14:38:19.112203Z  WARN temporal_client::worker_registry: Ignoring registration for worker: SlotKey { namespace: "default", task_queue: "tq-445bd033-e0b8-46b2-ad1f-aac915b11bc6" }.
time=2025-05-27T10:38:19.116 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=1.0191ms args=[deployment-2c2d2045-2249-47ad-947a-b2ae8f0bd110]
time=2025-05-27T10:38:21.800 level=ERROR msg="could not sync version summary to deployment workflow" service=worker Namespace=default TaskQueue=temporal-sys-per-ns-tq WorkerID=temporal-system@IONARDLP012@default WorkflowType=temporal-sys-worker-deployment-version-workflow WorkflowID=temporal-sys-worker-deployment-version:deployment-2c2d2045-2249-47ad-947a-b2ae8f0bd110.1.0 RunID=0197122e-143f-76ae-8fab-ccb10f1c2a55 Attempt=0 wf-namespace=default error=<nil>
time=2025-05-27T10:38:22.698 level=ERROR msg="could not sync version summary to deployment workflow" service=worker Namespace=default TaskQueue=temporal-sys-per-ns-tq WorkerID=temporal-system@IONARDLP012@default WorkflowType=temporal-sys-worker-deployment-version-workflow WorkflowID=temporal-sys-worker-deployment-version:deployment-2c2d2045-2249-47ad-947a-b2ae8f0bd110.2.0 RunID=0197122e-1792-7453-936d-6a86f57a709d Attempt=0 wf-namespace=default error=<nil>
time=2025-05-27T10:38:22.841 level=ERROR msg="deployment client error" error="Worker Deployment not found" operation=DescribeWorkerDeployment elapsed=502.9µs args=[deployment-dynamic-4c7da36a-0d15-42d6-b121-0ee26bcaae27]
2025-05-27T14:38:26.599253Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:26.603742Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:26.614482Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:26.623324Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:26.633855Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:26.646501Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=55d00d7a-1d14-4e04-9fb0-35a1b34ad3bb failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:27.085653Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-32ef-730b-b269-ad0408076723 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:27.091304Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-32ef-730b-b269-ad0408076723 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 11, WorkflowExecutionCompleted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:33.232660Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-4af5-70e8-9ef5-f6142eec82fe failure=Failure { failure: Some(Failure { message: "Update validator for DoUpdateValidatorCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:33.239321Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-4af5-70e8-9ef5-f6142eec82fe failure=Failure { failure: Some(Failure { message: "Update validator for DoUpdateValidatorCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:34.030099Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-4e26-7835-be2a-6d3e7ae6a832 failure=Failure { failure: Some(Failure { message: "Workflow type not-found-workflow is not registered on this worker, available workflows: SimpleWorkflow", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.CreateInstance(WorkflowActivation act, DataConverter dataConverter) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 326\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_0.<HandleActivationAsync>b__2(String _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 194\r\n   at System.Collections.Concurrent.ConcurrentDictionary`2.GetOrAdd(TKey key, Func`2 valueFactory)\r\n   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 194", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "NotFoundError", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:34.432165Z  WARN temporal_sdk_core::worker::workflow: Failing legacy query request run_id=0197122e-4f7d-766a-b668-d6cf0185f9e5 failure=Failure { failure: Some(Failure { message: "Query handler for QueryMakingCommands created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:34.534972Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-501d-74a2-bcbb-5ac95294aea2 failure=Failure { failure: Some(Failure { message: "Intentionally failing task", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateBadResultSerializationPayloadConverter.ToPayload(Object value) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4199\r\n   at Temporalio.Worker.WorkflowInstance.<>c__DisplayClass169_1.<ApplyDoUpdateAsync>b__2(Task`1 _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1269\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:34.539496Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-501d-74a2-bcbb-5ac95294aea2 failure=Failure { failure: Some(Failure { message: "Intentionally failing task", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateBadResultSerializationPayloadConverter.ToPayload(Object value) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4199\r\n   at Temporalio.Worker.WorkflowInstance.<>c__DisplayClass169_1.<ApplyDoUpdateAsync>b__2(Task`1 _) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1269\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
time=2025-05-27T10:38:34.573 level=WARN msg="Per shard per namespace RPS warn limit exceeded" service=history shard-id=1 wf-namespace=default rps=48
time=2025-05-27T10:38:34.573 level=WARN msg="Per shard RPS warn limit exceeded" service=history shard-id=1 rps=74
2025-05-27T14:38:37.949245Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:38.990051Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:38:39.013267Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-619c-74f0-a022-3d17583b0761 failure=Failure { failure: Some(Failure { message: "Intentional error", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.WaitConditionExceptionWorkflow.<>c.<RunAsync>b__0_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4671\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 865\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
time=2025-05-27T10:38:42.879 level=ERROR msg="unable to add metrics baggage to gRPC trailer" error="rpc error: code = Internal desc = transport: SendHeader called multiple times"
2025-05-27T14:38:48.213230Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8587-7315-b02f-ebb05197553c failure=Failure { failure: Some(Failure { message: "Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls.", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 197\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 157\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)\r\n   at System.Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)\r\n   at System.Threading.Tasks.Task.DelayPromise..ctor(UInt32 millisecondsDelay)\r\n   at System.Threading.Tasks.Task.Delay(UInt32 millisecondsDelay, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.Delay(Int32 millisecondsDelay)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 211\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:48.553786Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-86de-7b82-9577-298c04f0ff75 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task`1.StartNew(Task parent, Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, InternalTaskOptions internalOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.TaskFactory`1.StartNew(Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Task.Run[TResult](Func`1 function, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.Run[TResult](Func`1 function)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 214\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:48.876868Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8822-7e6d-ba80-772274949e43 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task`1.StartNew(Task parent, Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, InternalTaskOptions internalOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.TaskFactory.StartNew[TResult](Func`1 function, CancellationToken cancellationToken, TaskCreationOptions creationOptions, TaskScheduler scheduler)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 216\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:49.206655Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8969-731c-a845-e78c565b02e6 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.ContinueWithTaskContinuation.Run(Task completedTask, Boolean canInlineContinuationTask)\r\n   at System.Threading.Tasks.Task.ContinueWithCore(Task continuationTask, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions options)\r\n   at System.Threading.Tasks.Task.ContinueWith[TResult](Func`2 continuationFunction, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions)\r\n   at System.Threading.Tasks.Task.ContinueWith[TResult](Func`2 continuationFunction, TaskScheduler scheduler)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 219\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:49.539189Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8ab5-7a42-a63d-06f7960c6f49 failure=Failure { failure: Some(Failure { message: "Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls.", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 197\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 157\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)\r\n   at System.Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)\r\n   at System.Threading.Tasks.Task.CancellationPromise`1..ctor(Task source, UInt32 millisecondsDelay, CancellationToken token)\r\n   at System.Threading.Tasks.Task.WaitAsync(UInt32 millisecondsTimeout, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Task.WaitAsync(TimeSpan timeout)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 221\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:49.887101Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8c02-748e-8002-013bc25657e2 failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.Task.ScheduleAndStart(Boolean needsProtection)\r\n   at System.Threading.Tasks.Task.Start(TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Dataflow.Internal.Common.StartTaskSafe(Task task, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessary_Slow(Boolean isReplacementReplica, Boolean outgoingLockKnownAcquired)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessary(Boolean isReplacementReplica, Boolean outgoingLockKnownAcquired)\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.OfferAsyncIfNecessaryWithValueLock()\r\n   at System.Threading.Tasks.Dataflow.Internal.SourceCore`1.AddMessage(TOutput item)\r\n   at System.Threading.Tasks.Dataflow.BufferBlock`1.System.Threading.Tasks.Dataflow.ITargetBlock<T>.OfferMessage(DataflowMessageHeader messageHeader, T messageValue, ISourceBlock`1 source, Boolean consumeToAccept)\r\n   at System.Threading.Tasks.Dataflow.DataflowBlock.SendAsync[TInput](ITargetBlock`1 target, TInput item, CancellationToken cancellationToken)\r\n   at System.Threading.Tasks.Dataflow.DataflowBlock.SendAsync[TInput](ITargetBlock`1 target, TInput item)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 225\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:50.201806Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8d4f-7d8e-919c-ee18c1bf086c failure=Failure { failure: Some(Failure { message: "Task during workflow run was not scheduled on workflow scheduler", source: "", stack_trace: "   at System.Environment.get_StackTrace()\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnTplEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 241\r\n   at Temporalio.Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowTracingEventListener.cs:line 153\r\n   at System.Diagnostics.Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)\r\n   at System.Diagnostics.Tracing.EventSource.WriteToAllListeners(EventWrittenEventArgs eventCallbackArgs, Int32 eventDataCount, EventData* data)\r\n   at System.Diagnostics.Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)\r\n   at System.Threading.Tasks.TplEventSource.TaskScheduled(Int32 OriginatingTaskSchedulerID, Int32 OriginatingTaskID, Int32 TaskID, Int32 CreatingTaskID, Int32 TaskCreationOptions, Int32 appDomain)\r\n   at System.Threading.Tasks.TaskContinuation.InlineIfPossibleOrElseQueue(Task task, Boolean needsProtection)\r\n   at System.Threading.Tasks.ContinueWithTaskContinuation.Run(Task completedTask, Boolean canInlineContinuationTask)\r\n   at System.Threading.Tasks.Task.ContinueWithCore(Task continuationTask, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions options)\r\n   at System.Threading.Tasks.Task`1.ContinueWith[TNewResult](Func`2 continuationFunction, TaskScheduler scheduler, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions)\r\n   at System.Threading.Tasks.Task`1.ContinueWith[TNewResult](Func`2 continuationFunction, CancellationToken cancellationToken, TaskContinuationOptions continuationOptions, TaskScheduler scheduler)\r\n   at System.Threading.Tasks.Task.WhenAny[TResult](Task`1[] tasks)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 228\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario)\r\n   at System.RuntimeMethodHandle.InvokeMethod(Object target, Span`1& arguments, Signature sig, Boolean constructor, Boolean wrapExceptions)\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1804\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.Interceptors.WorkflowInboundInterceptor.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\Interceptors\\WorkflowInboundInterceptor.cs:line 52\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.<>n__0(ExecuteWorkflowInput input)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1()\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[TStateMachine](TStateMachine& stateMachine)\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_0() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1543\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)\r\n   at System.Threading.Tasks.TaskScheduler.TryExecuteTask(Task task)\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 839\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691\r\n   at Temporalio.Worker.WorkflowWorker.<>c__DisplayClass11_1.<HandleActivationAsync>b__3() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 203\r\n   at System.Threading.Tasks.Task`1.InnerInvoke()\r\n   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)\r\n   at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidWorkflowSchedulerException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:50.539588Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-8ea1-7b54-850c-51aab5bb71cf failure=Failure { failure: Some(Failure { message: "Function during tracing event listener disabling created workflow commands", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.WithTracingEventListenerDisabled[T](Func`1 fn) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 584\r\n   at Temporalio.Workflows.Workflow.Unsafe.WithTracingEventListenerDisabled[T](Func`1 fn) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 1381\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.StandardLibraryCallsWorkflow.RunAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 231\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:38:51.973009Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LTA3ZWM1NDFkLWFiM2ItNDA4Mi1hYzg4LTcwMzkxZGNhMDFiNxokMDE5NzEyMmUtOTAzOC03YWFkLTk4OTAtN2ZiMzA5ZWFlYmMwIAUoATIBMUIQUnVuVW50aWxDYW5jZWxlZEoICAEQzbxAGAE=) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:39:04.605414Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c43b-7a28-bd4b-cb5b051960fa failure=Failure { failure: Some(Failure { message: "Intentional task failure", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.TaskEventsWorkflow.RunAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3192\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:04.614414Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c43b-7a28-bd4b-cb5b051960fa failure=Failure { failure: Some(Failure { message: "Intentional task failure", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.TaskEventsWorkflow.RunAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3192\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:05.043488Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c735-7703-8983-c05f32988258 failure=Failure { failure: Some(Failure { message: "Intentional exception", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.FailureTypesWorkflow.ApplyScenario(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4340\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "MyException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:05.401746Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c894-7f36-b850-b1d6d27c9ca9 failure=Failure { failure: Some(Failure { message: "Intentional exception", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.FailureTypesWorkflow.ApplyScenario(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4340\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleSignalAsync(HandleSignalInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1836\r\n   at Temporalio.Worker.WorkflowInstance.<>c__DisplayClass178_0.<<ApplySignalWorkflow>b__1>d.MoveNext() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1520\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "MyException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:06.039336Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:06.055419Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c732-7b33-8e0f-1e3134befaca failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:06.055362Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:06.058591Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:06.065744Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Complete workflow machine does not handle this event: HistoryEvent(id: 5, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:06.736783Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-c9f2-7cee-9c27-5a83db0bbf43 failure=Failure { failure: Some(Failure { message: "Intentional exception", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.FailureTypesWorkflow.ApplyScenario(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4340\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.FailureTypesWorkflow.UpdateAsync(Scenario scenario) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 4332\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "MyException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:07.095041Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 6, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:07.095089Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 6, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:07.095552Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 6, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:07.096038Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 9, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:07.341739Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-cc54-7a5b-8459-2d2931b8c65e failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 9, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.155362Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Update machine does not handle this event: HistoryEvent(id: 11, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.155721Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Update machine does not handle this event: HistoryEvent(id: 14, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.155708Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Update machine does not handle this event: HistoryEvent(id: 14, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.155708Z  WARN temporal_sdk_core::worker::workflow::managed_run: Failing workflow due to nondeterminism error failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Update machine does not handle this event: HistoryEvent(id: 14, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.656997Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-d167-7d8e-a7df-1bb844a3bcfe failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Update machine does not handle this event: HistoryEvent(id: 11, TimerStarted)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:09.979166Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWQyN2Q4YTQwLTBjZjItNDcxNC1iM2UxLWI5YjNjNzc3MWMzMhokMDE5NzEyMmUtZGE0NS03MTI5LWIzMDgtYmEwOTQ2OGVjZTFkIAUoATIBMUINV2FpdEZvckNhbmNlbEoICAEQnspAGAE=) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:39:12.956714Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122e-de5d-7cf6-819f-a778f5a4dd8f failure=Failure { failure: Some(Failure { message: "[TMPRL1101] Workflow with ID 0197122e-de5d-7cf6-819f-a778f5a4dd8f deadlocked after 00:00:02", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 218", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:20.028159Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LTkxNWU5M2VjLWUyMmItNDE5ZC1iNDIxLTRhYWIyZDQ1Y2FlOBokMDE5NzEyMmUtZmRjOS03MDRmLTgxNTYtYWU1NTBiMzIxOGU0IAUoATIBMUIQUnVuVW50aWxDYW5jZWxlZEoICAEQkstAGAE=) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
[xUnit.net 00:01:23.49]     Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_Semaphore_Cancellation(useWorkflowCancellation: True) [SKIP]
[xUnit.net 00:01:23.49]       Unable to cancel workflow for this test: https://github.com/temporalio/sdk-core/issues/772
time=2025-05-27T10:39:24.936 level=ERROR msg="unable to add metrics baggage to gRPC trailer" error="rpc error: code = Internal desc = transport: SendHeader called multiple times"
2025-05-27T14:39:26.833592Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-1c67-775b-ae4e-357ad5f5dfee failure=Failure { failure: Some(Failure { message: "Activity invalid_activity is not registered on this worker, available activities: DoSomething", source: "", stack_trace: "   at Temporalio.Worker.ActivityWorker.AssertValidActivity(String activityType) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\ActivityWorker.cs:line 154\r\n   at Temporalio.Worker.TemporalWorker.<.ctor>b__6_0(String activityType) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\TemporalWorker.cs:line 96\r\n   at Temporalio.Worker.WorkflowInstance.OutboundImpl.ScheduleLocalActivityAsync[TResult](ScheduleLocalActivityInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 2129\r\n   at Temporalio.Worker.WorkflowInstance.ExecuteLocalActivityAsync[TResult](String activity, IReadOnlyCollection`1 args, LocalActivityOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 407\r\n   at Temporalio.Workflows.Workflow.ExecuteLocalActivityAsync[TResult](String activity, IReadOnlyCollection`1 args, LocalActivityOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 1005\r\n   at Temporalio.Workflows.Workflow.ExecuteLocalActivityAsync(String activity, IReadOnlyCollection`1 args, LocalActivityOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 982\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.LocalActivityMissingWorkflow.RunAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 7232\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:29.674409Z  WARN temporal_sdk_core::worker::workflow: Failing legacy query request run_id=0197122f-2710-7a37-8a22-26127e19b825 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Activity type of scheduled event 'PrePatchActivity' does not match activity type of activity command 'PostPatchActivity'", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:29.717108Z  WARN temporal_sdk_core::worker::workflow: Failing legacy query request run_id=0197122f-2710-7a37-8a22-26127e19b825 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Activity type of scheduled event 'PrePatchActivity' does not match activity type of activity command 'PostPatchActivity'", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:29.722996Z  WARN temporal_sdk_core::worker::workflow: Failing legacy query request run_id=0197122f-2733-77c5-acca-c991702a3fe2 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Non-deprecated patch marker encountered for change my-patch, but there is no corresponding change command!", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
2025-05-27T14:39:33.527993Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-2d4d-7d99-8061-252dce060d8f failure=Failure { failure: Some(Failure { message: "[TMPRL1101] Workflow with ID 0197122f-2d4d-7d99-8061-252dce060d8f deadlocked after 00:00:02", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 218", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:33.527982Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-2d4b-7d9a-9823-ae369a840ba2 failure=Failure { failure: Some(Failure { message: "[TMPRL1101] Workflow with ID 0197122f-2d4b-7d9a-9823-ae369a840ba2 deadlocked after 00:00:02", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 218", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:33.529108Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-2d49-70b0-bacb-60f6ebf64de6 failure=Failure { failure: Some(Failure { message: "[TMPRL1101] Workflow with ID 0197122f-2d49-70b0-bacb-60f6ebf64de6 deadlocked after 00:00:02", source: "", stack_trace: "   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowWorker.cs:line 218", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:33.921784Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiQwMTk3MTIyZC1kMDgxLTc1MDctYmI0Yi1iZGIyNjk1MGUxZjASLXdvcmtmbG93LWUzY2QxNmE4LWRmMjktNGVjOC1hOTZjLTRmNDFmNmRjMmYwNhokMDE5NzEyMmYtMzdhNy03Yzc2LThlODMtNmJiMDBhMjk5MWM4IAUoATIBMUIVU3dhbGxvd0NhbmNlbEFjdGl2aXR5SggIARCq10AYAQ==) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
2025-05-27T14:39:37.403017Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-45b3-7c99-b6f9-116cfdd78fae failure=Failure { failure: Some(Failure { message: "Activity invalid_activity is not registered on this worker, no available activities.", source: "", stack_trace: "   at Temporalio.Worker.TemporalWorker.<.ctor>b__6_0(String activityType) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\TemporalWorker.cs:line 96\r\n   at Temporalio.Worker.WorkflowInstance.OutboundImpl.ScheduleLocalActivityAsync[TResult](ScheduleLocalActivityInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 2129\r\n   at Temporalio.Worker.WorkflowInstance.ExecuteLocalActivityAsync[TResult](String activity, IReadOnlyCollection`1 args, LocalActivityOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 407\r\n   at Temporalio.Workflows.Workflow.ExecuteLocalActivityAsync[TResult](String activity, IReadOnlyCollection`1 args, LocalActivityOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 1005\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.LocalActivityMissingNoActivitiesWorkflow.RunAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 7286\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:41.128960Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-5442-73b6-bd05-19feaa0afe5d failure=Failure { failure: Some(Failure { message: "Delay duration cannot be less than 0", source: "", stack_trace: "   at Temporalio.Worker.WorkflowInstance.OutboundImpl.DelayAsync(DelayAsyncInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1993\r\n   at Temporalio.Worker.WorkflowInstance.DelayWithOptionsAsync(DelayOptions options) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 396\r\n   at Temporalio.Workflows.Workflow.DelayAsync(Int32 millisecondsDelay, Nullable`1 cancellationToken) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Workflows\\Workflow.cs:line 326\r\n   at Temporalio.Tests.Worker.WorkflowWorkerTests.TimerWorkflow.RunAsync(Input input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 560\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Tests.XunitExceptionInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\XunitExceptionInterceptor.cs:line 24\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "ArgumentException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:42.570477Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-55ea-7c3b-8293-897320831dff failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3704\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:42.599261Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-55ea-7c3b-8293-897320831dff failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3704\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:42.876501Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-5b08-7384-b960-d469b0703145 failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3706\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:42.882736Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-5b08-7384-b960-d469b0703145 failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3706\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:44.205764Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-5c50-787d-8069-845487a92938 failure=Failure { failure: Some(Failure { message: "Continue as new", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3709\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "ContinueAsNewException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:44.215062Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-5c50-787d-8069-845487a92938 failure=Failure { failure: Some(Failure { message: "Continue as new", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateOneParamNoResponseAsync(String param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3709\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1898\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "ContinueAsNewException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:44.524690Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-6173-790f-9927-363a894b88c2 failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateFailOutsideAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3749\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1902\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
2025-05-27T14:39:44.532423Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-6173-790f-9927-363a894b88c2 failure=Failure { failure: Some(Failure { message: "Intentional update invalid operation", source: "", stack_trace: "   at Temporalio.Tests.Worker.WorkflowWorkerTests.UpdateWorkflow.DoUpdateFailOutsideAsync() in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Worker\\WorkflowWorkerTests.cs:line 3749\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.HandleUpdateAsync(HandleUpdateInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1902\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
time=2025-05-27T10:39:49.873 level=ERROR msg="Queue reader unable to retrieve tasks" shard-id=1 address=127.0.0.1:53043 component=transfer-queue-processor queue-reader-id=0 error="shard status unknown"
time=2025-05-27T10:39:49.873 level=ERROR msg="Queue reader unable to retrieve tasks" shard-id=1 address=127.0.0.1:53043 component=outbound-queue-processor queue-reader-id=0 error="shard status unknown"
time=2025-05-27T10:39:49.873 level=ERROR msg="Queue reader unable to retrieve tasks" shard-id=1 address=127.0.0.1:53043 component=visibility-queue-processor queue-reader-id=0 error="shard status unknown"
CLI 1.3.0 (Server 1.27.1, UI 2.36.0)
Server:  localhost:53040
Metrics: http://localhost:53041/metrics
2025-05-27T14:39:50.672164Z  WARN temporal_sdk_core::worker::workflow: Task not found when completing error=status: NotFound, message: "Namespace 0197122d-d081-7507-bb4b-bdb26950e1f0 is not found.", details: [8, 5, 18, 60, 78, 97, 109, 101, 115, 112, 97, 99, 101, 32, 48, 49, 57, 55, 49, 50, 50, 100, 45, 100, 48, 56, 49, 45, 55, 53, 48, 55, 45, 98, 98, 52, 98, 45, 98, 100, 98, 50, 54, 57, 53, 48, 101, 49, 102, 48, 32, 105, 115, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 46, 26, 115, 10, 73, 116, 121, 112, 101, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 46, 99, 111, 109, 47, 116, 101, 109, 112, 111, 114, 97, 108, 46, 97, 112, 105, 46, 101, 114, 114, 111, 114, 100, 101, 116, 97, 105, 108, 115, 46, 118, 49, 46, 78, 97, 109, 101, 115, 112, 97, 99, 101, 78, 111, 116, 70, 111, 117, 110, 100, 70, 97, 105, 108, 117, 114, 101, 18, 38, 10, 36, 48, 49, 57, 55, 49, 50, 50, 100, 45, 100, 48, 56, 49, 45, 55, 53, 48, 55, 45, 98, 98, 52, 98, 45, 98, 100, 98, 50, 54, 57, 53, 48, 101, 49, 102, 48], metadata: MetadataMap { headers: {"content-type": "application/grpc"} } run_id="0197122f-7812-7550-87fa-35884733d272"
2025-05-27T14:39:56.221607Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=0197122f-8b48-71ea-b53b-af57a6743221 failure=Failure { failure: Some(Failure { message: "fail1", source: "", stack_trace: "   at Temporalio.Tests.Extensions.OpenTelemetry.TracingInterceptorTests.TracingWorkflow.RaiseOnNonReplayAsync(String msg) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Extensions\\OpenTelemetry\\TracingInterceptorTests.cs:line 1055\r\n   at Temporalio.Tests.Extensions.OpenTelemetry.TracingInterceptorTests.TracingWorkflow.RunAsync(TracingWorkflowParam param) in C:\\dev\\github\\temporalio\\sdk-dotnet\\tests\\Temporalio.Tests\\Extensions\\OpenTelemetry\\TracingInterceptorTests.cs:line 912\r\n   at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1805\r\n   at Temporalio.Extensions.OpenTelemetry.TracingInterceptor.WorkflowInbound.ExecuteWorkflowAsync(ExecuteWorkflowInput input) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio.Extensions.OpenTelemetry\\TracingInterceptor.cs:line 393\r\n   at Temporalio.Worker.WorkflowInstance.<InitializeWorkflow>b__180_1() in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 1551\r\n   at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 956\r\n   at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 845\r\n   at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act) in C:\\dev\\github\\temporalio\\sdk-dotnet\\src\\Temporalio\\Worker\\WorkflowInstance.cs:line 691", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "InvalidOperationException", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: Unspecified }
  Temporalio.Tests test failed with 1 warning(s) (116.6s)
    C:\Program Files\dotnet\sdk\9.0.300\Microsoft.TestPlatform.targets(48,5): warning MSB5021: Terminating the task executable "dotnet" and its child processes because the build was canceled.
```

I just canceled out of them after about 2mins since it's clear there's something really off.



</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-27 19:57:09.000 UTC</summary>

Anything else you might suggest, @cretz ? Appreciate your help.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-27 20:36:39.000 UTC</summary>

Nothing obvious, can add `--logger "console;verbosity=detailed"` to the `dotnet test` command (or just run `dotnet run --project tests/Temporalio.Tests -- -verbose` which may be better at showing live output) and maybe more info will show. And let them run for 5m before cancelling and confirm what the last log statement is before you cancel if you don't mind. Otherwise, I am afraid it'd take deeper debugging to see which test is failing and why.

Reactions: 👍 1

</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-28 15:22:40.000 UTC</summary>

The last line doesn't make sense to me, as the previous 10,000 lines are full of stacktraces and errors.

![Image](https://github.com/user-attachments/assets/c6e5f316-75d7-4ebe-832a-4418568a627e)

</details>

<details>
<summary><strong>oising</strong> commented on 2025-05-28 15:32:09.000 UTC</summary>

![Image](https://github.com/user-attachments/assets/c2c8c51b-da3e-4fa0-b6e1-a2a607f2b9b8)

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-28 21:44:49.000 UTC</summary>

So for the first one, there is some kind of strange issue here we can look at. The line numbers got cut off. Specifically looking at which line in `ReserveCtxFromBridge` is failing and if you can confirm which commit you are building and running test on (is it latest `main`)? I wonder why this isn't failing in our CI tests.

For the second one, I do not understand how the logger factory is being disposed before the service is, but regardless, I think it's not related to the real issue.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-29 14:15:50.000 UTC</summary>

> The last line doesn't make sense to me, as the previous 10,000 lines are full of stacktraces and errors.

While there are some issues here (we are also looking as part of #458), it seems to be showing the tests pass? It is a bit hard to see which test is causing your issue. Did you run `dotnet run --project tests/Temporalio.Tests -- -verbose`? Maybe just run one test to confirm, e.g. `dotnet run --project tests/Temporalio.Tests -- -verbose -method "*.ExecuteWorkflowAsync_Simple_Succeeds"`?

</details>

<details>
<summary><strong>oising</strong> commented on 2025-06-13 14:01:55.000 UTC</summary>

> dotnet run --project tests/Temporalio.Tests -- -verbose -method "*.ExecuteWorkflowAsync_Simple_Succeeds"

Sorry @cretz -- I got distracted with project work. So, this is encouraging:

![Image](https://github.com/user-attachments/assets/c3f6aeeb-c798-42c3-ba96-bb8788ac275c)

Does this infer the native bridge library is _somewhat_ functional?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-23 15:29:58.000 UTC</summary>

Yes. The SDK _should_ work on Windows ARM, we just haven't tested it or published it in the NuGet package.

</details>

<details>
<summary><strong>oising</strong> commented on 2025-06-23 15:46:13.000 UTC</summary>

> Yes. The SDK _should_ work on Windows ARM, we just haven't tested it or published it in the NuGet package.

Hi @cretz - thanks for the reply. Incidentally, what's blocking you testing it? Lack of available hardware? IIRC you don't want to include the rid in the nuget package because of the added bloat for a relatively small market share, but... 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-23 16:16:36.000 UTC</summary>

We do not officially support Windows ARM at this time, so we're not wanting to write/maintain CI builds/tests for Windows ARM at this time. We may be able to officially support Windows ARM at some point though.

</details>

<details>
<summary><strong>oising</strong> commented on 2025-06-28 18:33:02.000 UTC</summary>

I just tried again with the 1.7.0 release and it seems that the crazy malloc issue is gone. Everything seems to function with respect to running the standalone temporal dev server and hosting workflows and workers now on windows 11/arm64. If anyone else wants to try it out, I'll attach a link to the WoA arm64 bridge dll to avoid going through the difficulties of configuring building it on WoA. Basically, I got the samples downloaded, then ensured I was using 1.7.0 packages, then restored the solution. This would put the packages in the local nuget package cache. I then dropped the arm64 bridge dll into a new runtimes/win-arm64/native/ folder of the temporalio 1.7.0 sdk, and now everything works (seemingly.)

You'll want to run `nuget locals all -list` and find the global-packages location, and look for the temporalio nuget package cache there. 

![Image](https://github.com/user-attachments/assets/94a9a42a-d9fb-41a7-bbbc-994ce9769b4e)

The arm64 bridge dll is here: 
https://1drv.ms/u/c/966797f20cdd791e/EfKUKX4VvKtGuGI0pNm_L60BZqmFWwVRzryoRJVxQOGlxQ?e=mWoy8U

unzip (7z) into `C:\Users\<username>\.nuget\packages\temporalio\1.7.0\runtimes`
 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>DillonN</strong> commented on 2025-08-26 04:08:52.000 UTC</summary>

This should be in the package by default now. There are more Windows laptop models being sold with ARM than x64. Almost every other development tool works natively on ARM out of the box. Why the hesitation to include it by default when Linux and OSX both get it? Nobody wants to use x64 on laptops these days, doesn't matter which OS you use. 

IMO, custom building the SDK or downloading prebuilts from people's OneDrives is not a viable solution for such a mainstream platform.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-26 16:10:48.000 UTC</summary>

With [GH Windows ARM runners](https://github.blog/changelog/2025-04-14-windows-arm64-hosted-runners-now-available-in-public-preview/) available, we can look into adding this to CI and the DLL to the package. The package is already ~65MB, and this will put it over 70MB unfortunately, but that may be acceptable or we may consider offering as a separate NuGet package.

Note, the time-skipping test server will not be supported in this environment because it is Graal-compiled from our Java SDK project and [they will not add support for Windows ARM](https://github.com/oracle/graal/issues/9215).

Reactions: 👍 1

</details>

<details>
<summary><strong>oising</strong> commented on 2025-08-26 20:46:27.000 UTC</summary>

A 7% increase in size seems acceptable to add a good dx for WoA developers. Writing an AOT compiler for Graal, on the other hand, seems like a lot of work :D

</details>

<details>
<summary><strong>oising</strong> commented on 2025-10-20 19:55:56.000 UTC</summary>

I built the bridge dll for windows/arm64 for 1.7.0, 1.8.0 and 1.9.0

https://1drv.ms/u/c/966797f20cdd791e/Eda9Sdqt1-xDsvRQMi7MAAMBwLVcBJDSWY0zXnkl3mBoXA?e=rOvirS

extract into your nuget locals cache for temporalio package. 

</details>


---

<a id="286"></a>

### #286: Support .NET Trimming

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/286 |
| **State** | OPEN |
| **Author** | angusbjones (Angus Jones) |
| **Created** | 2024-06-25 03:16:47.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-25 13:17:48.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 1 |
| **Priority Score** | 15 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 7 👀 1 |

#### Description

### What are you really trying to do?
Publish trimmed/aot-compatible dotnet applications.
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->
Temporalio (and other packages) don't have trimming annotations included which produces errors when publishing with trimming enabled. 

### Minimal Reproduction
1. Download the sample at [src/AspNet/Worker](https://github.com/temporalio/samples-dotnet/tree/main/src/AspNet/Worker).
2. Modify TemporalioSamples.AspNet.Worker.csproj to include `<PublishTrimmed>true</PublishTrimmed>`
3. Run `dotnet publish` on TemporalioSamples.AspNet.Worker.csproj. 

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M1 Mac
- Temporal Version: 1.1.2
- Are you using Docker or Kubernetes or building Temporal from source? Package


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-25 13:17:08.000 UTC</summary>

I think this is not a bug, but rather a feature request to have the SDK support trimming. There are some things we'll have to do since we use PInvoke and reflection in some places. We will keep this open as a feature request for trimming support and if it garners enough interest, we can look into annotating the SDK for it and running all tests while trimmed to ensure it works and continues to.

</details>


---

<a id="480"></a>

### #480: [Bug] OpenTelemetry TracingInterceptor doesn't create a span in workflow run method

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/480 |
| **State** | CLOSED |
| **Author** | san127127 (Gary Lee) |
| **Created** | 2025-05-15 01:28:48.000 UTC (7 months ago) |
| **Updated** | 2025-05-19 12:46:54.000 UTC |
| **Closed** | 2025-05-16 12:48:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 9 |
| **Priority Score** | 11 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?
I would like to use Opentelemetry trace id to correlate logs from each workflow.
When I do logging in workflow and activities, I found that there is no trace ID on logs from the workflow logge.

### Describe the bug
OpenTelemetry span is not created by TracingInterceptor in workflow run methods.

### Minimal Reproduction

Worker and client set up
```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenTelemetry()
    .WithTracing(t =>
    {
        t.AddSource(
            TracingInterceptor.ClientSource.Name,
            TracingInterceptor.WorkflowsSource.Name,
            TracingInterceptor.ActivitiesSource.Name
        );
    });

builder.Services.AddTemporalClient(x =>
{
    x.TargetHost = "localhost:7233";
    x.Namespace = "default";
    x.Interceptors = [new TracingInterceptor()];
    x.LoggerFactory = new LoggerFactory().AddSerilog();
});
builder.Services
    .AddHostedTemporalWorker(
        "my-task-queue"
    )
    .AddWorkflow<SayHelloWorkflow>()
    .AddSingletonActivities<SayHelloActivity>();
```

Workflow and activity
```
[Workflow]
public class SayHelloWorkflow
{
    [WorkflowRun]
    public async Task<string> SayHello()
    {
        // Activity.Current is null here
        var traceId = Activity.Current?.TraceId.ToHexString();
        Console.WriteLine($"Trace id in workflow {traceId}");

        await Workflow.ExecuteActivityAsync((SayHelloActivity a) => a.SayHello(), new ActivityOptions
        {
            StartToCloseTimeout = TimeSpan.FromSeconds(10),
        });

        return "ABC";
    }
}

public class SayHelloActivity
{
    [Activity]
    public async Task SayHello()
    {
        // Activity.Current is not null here
        var traceId = Activity.Current?.TraceId.ToHexString();
        Console.WriteLine($"Trace id in activity {traceId}");
    }
}

```

When running this workflow, trace id in workflow run will be null while trace id in activity is present.


### Environment/Versions

.NET 9 (SDK 9.0.203)
Temporalio.Extensions.OpenTelemetry 1.5.0

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (9)

<details>
<summary><strong>cretz</strong> commented on 2025-05-15 13:56:19.000 UTC</summary>

> `var traceId = Activity.Current?.TraceId.ToHexString();`
> trace id in workflow run will be null while trace id in activity is present

Workflows cannot use the non-deterministic .NET activity API because the current span can be absent when replaying on different machines. This is explained in depth at https://github.com/temporalio/sdk-dotnet/tree/main/src/Temporalio.Extensions.OpenTelemetry/#workflow-tracing which also includes the warning:

> ⚠️WARNING Do not use .NET diagnostic activity API inside of workflows. They are inherently non-deterministic and can lead to unpredictable behavior/traces during replay (which often only surfaces in failure scenarios).

`Activity.Current` is non-deterministic, unsafe API to use in a workflow that can result in different values on replay. This is because OpenTelemetry trace/spans are process-specific (you can't create a span in one place and finish in another). If you need some sort of deterministic identifier, we recommend not using tracing identifiers, pass something more explicit instead.

</details>

<details>
<summary><strong>san127127</strong> commented on 2025-05-15 15:44:18.000 UTC</summary>

hi @cretz ,
The biggest reason why I want an activity in workflow run is that I want to attach a trace info like trace id to logs when I do logging with `Workflow.Logger`

Actually, after I read the readme you gave me, I found a workaround to do what I want:
```csharp
[WorkflowRun]
public async Task SayHello()
{
    using var diaAct = CustomSource.TrackWorkflowDiagnosticActivity("SayHello");

    using var act = CustomSource.CreateActivity("SayHello", ActivityKind.Server);
    act.SetParentId(diaAct.Context.TraceId, diaAct.Context.SpanId, diaAct.Context.TraceFlags);
    act.Start();

    // This log has trace info attached now
    Workflow.Logger.LogInformation("hello from WF");

    await Workflow.ExecuteActivityAsync((SayHelloActivity a) => a.SayHello(), new ActivityOptions
    {
        StartToCloseTimeout = TimeSpan.FromSeconds(10),
    });
}
```

It looks like the `WorkflowDiagnosticActivity.Context` is persisted somewhere and remain unchanged when replaying or retrying.

Anyway, I guess it is not a bug to have a null `Activity.Current` then.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-15 16:44:53.000 UTC</summary>

> CustomSource.CreateActivity

You should not do this in workflows because you should not use the .NET activity API in workflows. This will create an activity for _every_ replay of the workflow (so every time it resumes on another worker or a query is run after close or whatever). .NET activity APIs are not deterministic. Just use the `TrackWorkflowDiagnosticActivity`.

> It looks like the `WorkflowDiagnosticActivity.Context` is persisted somewhere and remain unchanged when replaying or retrying.

It's "replayed" so it has the same local state but only creates the actual span/activity when first run for non-replay. .NET activity things on `WorkflowDiagnosticActivity` are unsafe as well to use.

</details>

<details>
<summary><strong>san127127</strong> commented on 2025-05-16 12:48:35.000 UTC</summary>

> This will create an activity for every replay of the workflow (so every time it resumes on another worker or a query is run after close or whatever).

My goal is simply having a trace on workflow level with a consistent trace ID so this is actually what I want.
I understand it is a bit hacky, but I am ok with this as long as it doesn't compromise the correctness of the workflow.

Thanks for your replies and advice anyway. I am closing this issue.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-16 12:59:31.000 UTC</summary>

> My goal is simply having a trace on workflow level with a consistent trace ID so this is actually what I want.

Note, this code will not provide a consistent trace ID. Neither `dialAct` not `act` will have a consistent trace ID if this workflow moves between workers (as durable workflows are meant to do). You may want to make sure to either replay test or test this workflow running across multiple workers (e.g. restart a worker once the workflow has started the activity but before it finishes).

If you need consistent, deterministic values in a workflow, you need to obtain them deterministically (either via workflow input or via activity or deterministic random on the `Workflow` class or something).

</details>

<details>
<summary><strong>san127127</strong> commented on 2025-05-16 15:14:03.000 UTC</summary>

> Note, this code will not provide a consistent trace ID. Neither dialAct not act will have a consistent trace ID if this workflow moves between workers (as durable workflows are meant to do). 

@cretz 
Really?
I tried to simulate worker crashes by putting `Environment.Exit(1)` inside the workflow.
After it kills the worker process, I start another worker process to trigger replaying and `diaAct.Context` is the same.
It looks to me the `diaAct.Context` is persisted somewhere.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-16 20:46:00.000 UTC</summary>

> I tried to simulate worker crashes by putting Environment.Exit(1) inside the workflow.

Not sure this is the best simulation, but Environment.Exit inside the `SayHello` activity may be an ok representation.

> It looks to me the diaAct.Context is persisted somewhere

It is not. If `TrackWorkflowDiagnosticActivity` is run on one worker, and the workflow then needs to replay on another worker, the result of `TrackWorkflowDiagnosticActivity` will be different (because only the first time did it call `ActivitySource.StartActivity`, second time just skips it).

</details>

<details>
<summary><strong>san127127</strong> commented on 2025-05-17 02:02:27.000 UTC</summary>

@cretz 

> Not sure this is the best simulation, but Environment.Exit inside the SayHello activity may be an ok representation.

I believe both are good simulation, you can have a worker crash in workflow run rather than in activity

> It is not. If TrackWorkflowDiagnosticActivity is run on one worker, and the workflow then needs to replay on another worker, the result of TrackWorkflowDiagnosticActivity will be different

I don't think so, the trace ID and span ID etc seems to be the same across worker processes.
There were two worker processes running the same workflow in the above experiment.

Just in case, I even tried to the following workflow using two computers
```csharp
 [WorkflowRun]
 public async Task SayHello()
 {
     using var diaAct = CustomSource.TrackWorkflowDiagnosticActivity("Test");

     using var act = CustomSource.CreateActivity("WF", ActivityKind.Server);
     act.SetParentId(diaAct.Context.TraceId, diaAct.Context.SpanId, diaAct.Context.TraceFlags);
     act.Start();

     Workflow.UpsertMemo([
         MemoUpdate.ValueSet("TraceId", diaAct.Context.TraceId.ToHexString()),
     ]);

     Workflow.Logger.LogInformation("WF T:{TraceId} S:{SpanId} P:{ParentSpanId}", act.Context.TraceId, act.Context.SpanId, act.ParentSpanId);

     var id1 = await Workflow.ExecuteActivityAsync((SayHelloActivity a) => a.SayHello(4), new ActivityOptions
     {
         StartToCloseTimeout = TimeSpan.FromSeconds(10),
     });

     // Crash here on the first worker
     // Removed on the second worker
     Environment.Exit(1);

     var id2 = await Workflow.ExecuteActivityAsync((SayHelloActivity a) => a.SayHello(5), new ActivityOptions
     {
         StartToCloseTimeout = TimeSpan.FromSeconds(10),
     });

     var id3 = await Workflow.ExecuteActivityAsync((SayHelloActivity a) => a.SayHello(6), new ActivityOptions
     {
         StartToCloseTimeout = TimeSpan.FromSeconds(10),
     });
 }
```

```csharp
public class SayHelloActivity(ILogger<SayHelloActivity> _logger)
{
    [Activity]
    public async Task<string?> SayHello(int i)
    {
        var act = Activity.Current;

        _logger.LogInformation("Activity {i} T:{TraceId} S:{SpanId} P:{ParentSpanId}", i, act.Context.TraceId, act.Context.SpanId, act.ParentSpanId);
        return Activity.Current?.Id;
    }
}
```

And here is the result.
Note that the activity results are the traceparent from each activity
![Image](https://github.com/user-attachments/assets/2f52338c-9afe-43af-bde9-8dc4ef612325)

This suggests to me either the trace id is persisted somewhere or they are generated in some deterministic ways.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-19 12:46:32.000 UTC</summary>

> Just in case, I even tried to the following workflow using two computers

Try setting worker option `MaxCachedWorkflows` to `0`, you won't need two computers since every step will replay from the beginning every time. But yes, maybe trace ID is actually coming from the persisted parent here which is set on client call and is in history as a header on the start event. Therefore so long as you don't start via CLI or UI or a .NET client without this interceptor, it may be stable (though you usually don't want to rely on how it is started). I expect `diaAct.Context.SpanId` to be unstable however.

</details>


---

<a id="340"></a>

### #340: [Bug] Metrics stopped working after the upgrade from 1.2.0 to 1.3.0

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/340 |
| **State** | CLOSED |
| **Author** | petrkoutnycz (Petr Koutny) |
| **Created** | 2024-09-03 08:26:33.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-11 14:05:47.000 UTC |
| **Closed** | 2024-09-11 14:05:46.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 9 |
| **Priority Score** | 11 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

We instruct the temporal SDK to send metrics to the New Relic via OpenTelemetry endpoint. We noticed that this functionality stopped working after the upgrade to 1.3.0.

To investigate the issue, I enabled log forwarding from the client so we get the output like this:
```
Logging = new(new(TelemetryFilterOptions.Level.Debug, TelemetryFilterOptions.Level.Debug))
{
    Forwarding = new LogForwardingOptions(
        serviceProvider.GetRequiredService<ILogger<TemporalRuntime>>())
}
```

With version 1.2.0, we have following output from the client:
```
[10:12:57] [DBUG] [TemporalRuntime] [sdk_core::hyper::client::connect::dns] resolving host="otlp.eu01.nr-data.net" 
[10:12:57] [DBUG] [TemporalRuntime] [sdk_core::hyper::client::connect::http] connecting to 185.221.85.50:443 
[10:12:58] [DBUG] [TemporalRuntime] [sdk_core::hyper::client::connect::http] connected to 185.221.85.50:443 
[10:12:58] [DBUG] [TemporalRuntime] [sdk_core::h2::client] binding client connection 
[10:12:58] [DBUG] [TemporalRuntime] [sdk_core::h2::client] client connection bound
```

With version 1.3.0, we have this output:
```
[10:10:45] [DBUG] [TemporalRuntime] [sdk_core::hyper_util::client::legacy::connect::dns] resolving host="otlp.eu01.nr-data.net"
[10:10:46] [DBUG] [TemporalRuntime] [sdk_core::hyper_util::client::legacy::connect::http] connecting to 185.221.85.50:443 
[10:10:46] [DBUG] [TemporalRuntime] [sdk_core::hyper_util::client::legacy::connect::http] connected to 185.221.85.50:443 
[10:10:46] [DBUG] [TemporalRuntime] [sdk_core::tonic::transport::channel::service::reconnect] reconnect::poll_ready: ConnectError(HttpsUriWithoutTlsSupport(())) 
[10:10:46] [DBUG] [TemporalRuntime] [sdk_core::tower::buffer::worker] processing request service.ready=true
[10:10:46] [DBUG] [TemporalRuntime] [sdk_core::tonic::transport::channel::service::reconnect] error: Connecting to HTTPS without TLS enabled 
OpenTelemetry metrics error occurred. Metrics exporter otlp failed with the grpc server returns error (The service is currently unavailable): , detailed error message: Connecting to HTTPS without TLS enabled
```

Not saying that the error is reported as DEBUG! So it is impossible for us to catch it as we never have DEBUG allowed in production.

### Minimal Reproduction

We configure metrics as following:
```
Metrics = new MetricsOptions
{
    AttachServiceName = false,
    MetricPrefix = "temporal.",
    GlobalTags =
    [
        new KeyValuePair<string, string>("service.name", "mews-app-name")
    ],
    OpenTelemetry = new OpenTelemetryOptions
    {
        Url = new Uri("https://otlp.eu01.nr-data.net/v1/metrics"),
        Headers = [new KeyValuePair<string, string>("api-key", "<THE API KEY>")],
        MetricTemporality = OpenTelemetryMetricTemporality.Delta,
        MetricsExportInterval = TimeSpan.FromSeconds(5)
    },
},
```

Also tried different `Url`. According to the New Relic [docs](https://docs.newrelic.com/docs/opentelemetry/best-practices/opentelemetry-otlp/#configure-endpoint-port-protocol), the url should be fine like that. Also tried simply use `https://otlp.eu01.nr-data.net:4317` (i.e. with gRPC port and without the `v1/metrics` appendix) but also without success. 

### Environment/Versions

- OS and processor: M1 Mac, Windows


#### Comments (9)

<details>
<summary><strong>cretz</strong> commented on 2024-09-03 12:54:35.000 UTC</summary>

Yes, we inadvertently broke OpenTelemetry over TLS with the latest release (happened in Python too). This is because of a Rust issue with a dependency upgrade (see https://github.com/open-telemetry/opentelemetry-rust/issues/2008). This was fixed in our Core layer at https://github.com/temporalio/sdk-core/issues/801 and we will be issuing a patch release to fix here.

Reactions: 👍 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2024-09-03 13:20:39.000 UTC</summary>

Thanks 👍

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2024-09-03 13:32:19.000 UTC</summary>

And as for reporting the error as DEBUG...? I'd guess this problem was present before as well :-) 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-03 15:33:09.000 UTC</summary>

It's actually not `DEBUG` it's just a standalone stderr line. Notice the last line of your log does not have any log prefixing (not to be confused with the Tonic reconnect trace above it which is not an error). https://github.com/open-telemetry/opentelemetry-rust/blob/976bc54dba564afdc8fd7de51a8feb123f44ecdb/opentelemetry/src/global/error_handler.rs#L62 is where this is happening, and we will look into whether we can configure a global handler, though it is difficult because logs are configured per runtime.

Reactions: 👍 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2024-09-04 08:34:10.000 UTC</summary>

Btw weird thing is that this problem occurs for us on a specific environment even with version 1.2.0
<img width="1058" alt="image" src="https://github.com/user-attachments/assets/e63a751a-fd2a-4e5f-a8d8-b94021b8570b">


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-04 14:21:10.000 UTC</summary>

If you'd like, you can try to rebuild the SDK from the branch at the PR in https://github.com/temporalio/sdk-dotnet/pull/344 and see if it resolves your issue.

Reactions: 👀 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2024-09-06 06:43:51.000 UTC</summary>

When do you expect to fix the OTel over TLS problem please? :-) 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-06 12:44:45.000 UTC</summary>

It will be fixed on next release, which should hopefully happen soon as a patch release (we are patching another issue).

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-11 14:05:46.000 UTC</summary>

This should now be fixed with the 1.3.1 release.

</details>


---

<a id="442"></a>

### #442: Less strict checking of `UseWorkerVersioning`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/442 |
| **State** | CLOSED |
| **Author** | vchirikov (Vladimir Chirikov) |
| **Created** | 2025-04-02 17:29:24.000 UTC (9 months ago) |
| **Updated** | 2025-04-10 22:11:50.000 UTC |
| **Closed** | 2025-04-10 22:11:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 9 |
| **Priority Score** | 9 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, I have a stable semantic versioning and want to show the worker version via `Build Id`, but I don't want to use `UseWorkerVersioning`, for now I can't because of these lines:

https://github.com/temporalio/sdk-dotnet/blob/bac42d3db19617fae17bc1965e1a9c33fd517fc1/src/Temporalio.Extensions.Hosting/TemporalWorkerService.cs#L138-L142

Can we change this behavior/check or did I misunderstand something?

#### Comments (9)

<details>
<summary><strong>cretz</strong> commented on 2025-04-02 17:47:49.000 UTC</summary>

Hrmm, I see. This use of "build ID" is meant to automatically enable this form of versioning. I assume you are using the build ID parameter of `AddHostedTemporalWorker` and then going back to options and setting `UseWorkerVersioning` to false (since it is set to true if build ID is provided)?

We should support setting build ID without opting into versioning (which is experimental and being changed anyways). I think the best way for us to do this is to clarify that setting build ID via `AddHostedTemporalWorker` opts in to versioning, and to use the worker option of build ID if you just want the build ID and remove the condition above the one you linked (i.e. `options.BuildId != taskQueueAndBuildId.BuildId`). But since versioning is experimental and changing anyways, I think we may mark the parameter (or entire overload) as deprecated or remove its assumption you want to opt-in to versioning. We will investigate...

</details>

<details>
<summary><strong>vchirikov</strong> commented on 2025-04-02 19:49:59.000 UTC</summary>

> I assume you are using the build ID parameter of AddHostedTemporalWorker


I use my own registrations with DI (because with the existing one I can't get `Meter` from service provider for example). So I can provide version to `TemporalWorkerServiceOptionsBuilder.ctor` / `TemporalWorkerServiceOptionsBuilder.ConfigureOptions` / `TemporalWorkerService.ctor`, but because of this check inside TemporalWorkerService it doesn't work, and `buildId` will be `Assembly.GetEntryAssembly().ManifestModule.ModuleVersionId` (according to xmldoc at least). :(

> remove its assumption you want to opt-in to versioning


Yes, it will be enough for me. to be clear, I want to see here my worker app version (but I don't want to require workflows to run only for a specific worker version.)  

![Image](https://github.com/user-attachments/assets/72f1b9e5-fa91-421e-b8ea-2415f00c41a0)



</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-02 19:56:00.000 UTC</summary>

Makes sense, we are looking at ways to safely stop assuming build ID is an opt-in to versioning.

> because with the existing one I can't get Meter from service provider for example

Understanding this separately may help us understand where our DI abstraction isn't powerful enough. What meter are you referring to and how is that preventing use of `AddHostedTemporalWorker`? (can discuss on `#dotnet-sdk` on [Slack](https://t.mp/slack) instead of here if that's easier).

</details>

<details>
<summary><strong>vchirikov</strong> commented on 2025-04-02 20:31:32.000 UTC</summary>

>  where our DI abstraction isn't powerful enough

IMHO you should provide an overload to get access to the service provider, e.g. I want to add an extension method to my "shared" library which will add a temporal client with reasonable defaults, but give an opportunity to tune the defaults e.g. all apps should use same Interceptors/DataConverter config, KeepAlive settings, but use the different `Meter` instance (with different MeterName I can better separate otel metrics from different apps & have different otel collector configs).
This is a simplified version that I need to do, but can't with default DI integration:

```cs
public static IServiceCollection AddTemporal(this IServiceCollection services, Func<IServiceProvider, Meter> meterAccessor){
    // ...
    services.AddOptions<TemporalClientConnectOptions>().Configure<IServiceProvider>((opt, sp) => {
      opt.TargetHost = sp.GetRequiredService<IConfiguration>().GetConnectionString("temporal");
      // also specify some other settings
      // opt.Namespace = cfg.Namespace;
      // opt.KeepAlive = cfg.KeepAlive;
      opt.Interceptors = [new TracingInterceptor()];
      opt.DataConverter = CreateDataConverter();
      opt.Runtime = new TemporalRuntime(new() {
        Telemetry = new() {
          // here I need to get Meter from the app, not from the Shared library...
          Metrics = new() { CustomMetricMeter = new CustomMetricMeter(meterAccessor(sp)), },
        },
      });
      if (sp.GetService<ILoggerFactory>() is { } loggerFactory) {
        opt.LoggerFactory = loggerFactory;
      }
    });
   // ...
}
```


</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-02 22:06:19.000 UTC</summary>

> This is a simplified version that I need to do, but can't with default DI integration:

Can you do something like:

```csharp
services.AddHostedTemporalWorker(...).ConfigureOptions().Configure<IServiceProvider>((options, provider) => {
  // Do what is needed with options.ClientOptions
})
```

the `ConfigureOptions()` returns an `OptionsBuilder<TemporalWorkerServiceOptions>` which can have `Configure` called on it with injected pieces. In fact, our `ConfigureOptions` just calls `AddOptions` like you do here (but we have it named so different workers can configure different options).

Also, if you use this `AddTemporal` utility multiple times, I would strongly suggest having the `Runtime` be a singleton in the container or global and reuse it for every client in the system. Creating multiple runtimes is not usually a good idea.

(of course this is an aside, we still will look into the original issue of removing that check)

</details>

<details>
<summary><strong>vchirikov</strong> commented on 2025-04-03 05:28:22.000 UTC</summary>

If I use `AddHostedTemporalWorker(this IServiceCollection services, string taskQueue, string? buildId = null)` I can't use ConfigureOptions() again, because it uses `disallowDuplicates: true` isn't it?

p.s. It also unclear which client options and when worker re-use from registered ITemporalClient I mean in `ConfigureOptions` `TemporalWorkerServiceOptions.ClientOptions` is null which is confusing, xmldoc doesn't help a lot.

p.p.s anyway original issue is not related to registrations, so I waiting for your decision to disable versioning check to have an option to set an explicit buildId for workers.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-03 12:54:46.000 UTC</summary>

:+1: You can use `ConfigureOptions()` on the result of `AddHostedTemporalWorker` as much as is needed, `disallowDuplicates` is an optional parameter you can set. Yes, client options vs providing a DI client can be confusing because both need to be supported. Basically if you use the `AddHostedTemporalWorker` overload w/ client options or set client options on the `TemporalWorkerServiceOptions` (i.e. from `ConfigureOptions()`), then it won't use any DI client it will create one based on the options just for the worker.

</details>

<details>
<summary><strong>vchirikov</strong> commented on 2025-04-03 23:55:42.000 UTC</summary>

@cretz sorry, but I think you don't get my point :) I can't use `services.AddHostedTemporalWorker(...).ConfigureOptions().Configure<IServiceProvider>((options, provider) => {})` as you suggested, because the extension method already set `disallowDuplicates: true`

https://github.com/temporalio/sdk-dotnet/blob/bac42d3db19617fae17bc1965e1a9c33fd517fc1/src/Temporalio.Extensions.Hosting/TemporalHostingServiceCollectionExtensions.cs#L64-L83

And I can't use this extension method

https://github.com/temporalio/sdk-dotnet/blob/bac42d3db19617fae17bc1965e1a9c33fd517fc1/src/Temporalio.Extensions.Hosting/TemporalHostingServiceCollectionExtensions.cs#L37-L44

Because I want to get `clientTargetHost` from DI + want that the worker use a client registration. (Ok, maybe I can reconfigure target host + reset ClientOptions to null later with `.Configure`, but it looks too ugly)

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-04 15:22:43.000 UTC</summary>

> I can't use `services.AddHostedTemporalWorker(...).ConfigureOptions().Configure<IServiceProvider>((options, provider) => {})` as you suggested, because the extension method already set `disallowDuplicates: true`

Hrmm, `disallowDuplicates` is set on each call to `ConfigureOptions` and only applies to that call, not all future `ConfigureOptions` calls. We use it internally in `AddHostedTemporalWorker` to make sure you aren't registering duplicate workers. What is the exception you get from `.ConfigureOptions()` which defaults `disallowDuplicates` to `false`? Or are you registering duplicate workers? (sorry if I am misunderstanding)

</details>


---

<a id="100"></a>

### #100: [dotnet] Workflow update support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/100 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:58:02.000 UTC (2y 6m ago) |
| **Updated** | 2023-10-25 22:29:09.000 UTC |
| **Closed** | 2023-10-25 22:29:09.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 1 |
| **Priority Score** | 9 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-08-15 20:17:09.000 UTC</summary>

This is waiting on https://github.com/temporalio/sdk-core/issues/582

Reactions: 👍 1

</details>


---

<a id="62"></a>

### #62: [Feature Request] Change Ref approach to expression-based

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/62 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-05 12:16:18.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-25 19:57:58.000 UTC |
| **Closed** | 2023-05-25 19:57:58.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 5 |
| **Priority Score** | 9 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Akin to Hangfire and others, use LINQ expressions to let calls be made. This is more inline with how other .NET libraries work. We need to make sure status still work and we can extract return types in `Task` vs non-`Task`. This will also require updating docs and the blog post.

Also, as part of this effort, we need to modernize registration of activities and workflows. We probably need to:

* Make definitions the only collections on worker options instead of the "additional"
* Allow activities to also be registered by entire type/class that crawls looking for activity attributed 
* Abstract activity definition a tad to accept a form with arg types, return type, and a `Func<object?, Task<object?[]?>>` invoker. Put an `InvokeAsync` on it I guess. This is needed for dependency injection support. Would accept alternative activity class factory approach if we can think of it, though this is probably good enough. Can expose this all the way out to the `AddActivity` overload in the worker options.

#### Comments (5)

<details>
<summary><strong>cgillum</strong> commented on 2023-05-05 14:06:06.000 UTC</summary>

> Make definitions the only collections on worker options instead of the "additional"

Would there still be a way to register dynamic activities - i.e. without requiring an attribute?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-05 14:37:25.000 UTC</summary>

Yes. That already exists today with `ActivityDefinition.CreateWithoutAttribute`. I will continue to support that, but probably not explicitly via a direct overload on worker options because I don't want to encourage it. I'm thinking on worker options, my adders are:

* `AddActivityType<TActivityClass>()`
* `AddActivityType(Type)`
* `AddActivity(Delegate)`
* `AddActivity(MemberExpression)` (will have to investigate this, may not be right)
* `AddActivity(ActivityDefinition)`

And basically all end up calling that last one for definition. And on `ActivityDefinition` I'll have:

* `CreateAllFromType(Type)`
* `CreateFromDelegate(Delegate)`
* `CreateWithoutAttribute(string, Delegate)`
* `CreateWithoutAttribute(string name, Type[] argTypes, Type returnType, Func<object?, object?[]?> invoke)`

And basically all things end up calling that last one. May be another in here for expression-based. I may just name these `CreateAll` and `Create` with overloads, I just have to decide if I want these unwieldy names on purpose to discourage this approach of activity definition creation.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-08 13:15:41.000 UTC</summary>

Posting what I posted in `#dotnet-sdk` on Slack:

I am struggling with type inference and expression trees. With the current approach you can have something like this:
```csharp
var temp1 = await Workflow.ExecuteActivityAsync(Foo.StaticWithArgAndResult, 123);

var temp2 = await Workflow.ExecuteActivityAsync(Foo.Ref.InstanceWithArgAndResult, 123);
```
Nice and simple for static and non-static, but with the expression approach, you cannot have:
```csharp
var temp2 = await Workflow.ExecuteActivityAsync<Foo>(foo => foo.InstanceWithArgAndResult(123));
```
Because I need the return type and C# doesn't allow partial generic inference. I can either do:
```csharp
var temp2 = await Workflow.ExecuteActivityAsync<Foo, string>(foo => foo.InstanceWithArgAndResult(123));
```
Or
```csharp
var temp2 = await Workflow.ExecuteActivityAsync((Foo foo) => foo.InstanceWithArgAndResult(123));
```
Both of which are quite ugly compared to the original. I could also break it into two like:
```csharp
var temp2 = await Workflow.ActivityReference<Foo>().ExecuteAsync(foo => foo.InstanceWithArgAndResult(123));
```
But that's also ugly (and it makes static calls be way different than non-static). Does anyone have any better ideas or better preference? Are there any frameworks that deal with return types from the lambdas in expression trees that I can look to for inspiration? Do they also allow static and non-static? Do they also split into two steps?

As I work with it, it becomes fairly obvious that expression trees result in harder to read code. I am considering supporting them but leaving the "Ref" pattern around/recommended for this reason. But would love to find a way not to have two separate approaches.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-08 19:08:59.000 UTC</summary>

Ok, did some discussion with team. I am going to open a PR all-in on the expression approach (assuming I don't hit snags with inference). We can evaluate that then. That means you actually can't use the delegate/ref pattern if you wanted to (sorry!). So basically:

```
var temp1 = await Workflow.ExecuteActivityAsync(Foo.StaticWithArgAndResult, 123);

var temp2 = await Workflow.ExecuteActivityAsync(Foo.Ref.InstanceWithArgAndResult, 123);
```

Becomes:

```
var temp1 = await Workflow.ExecuteActivityAsync(() => Foo.StaticWithArgAndResult(123));

var temp2 = await Workflow.ExecuteActivityAsync((Foo foo) => foo.InstanceWithArgAndResult(123));
```

With the removal of the dependency, familiarity to .NET devs, and that we (really really) hate two ways of doing things, this just won out. But we'll reevaluate during PR time if I hit any snags.

Reactions: 👍 3

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-15 14:07:04.000 UTC</summary>

Ok, could use some more feedback here (x-posted to `#dotnet-sdk` on Slack). If I have:
```csharp
await Workflow.ExecuteActivityAsync((Foo foo) => foo.SomeMethod(123 + 456));
```
I need to evaluate that argument. From what I read, that means I have to use an approach like https://stackoverflow.com/a/60002882 (basically create a lambda out of each argument and compile at call time) which is really slow. Even `Compile(true)` available in all but our oldest supported version (framework 4.6) is slow. If you had passed:
```csharp
await Workflow.ExecuteActivityAsync((Foo foo) => foo.SomeMethod(579));
```
Then I could just use `ConstantExpression.Value`, but that is a non-obvious optimization to users to make sure they create their parameter outside the closure. And .NET can't infer params for something like:
```csharp
await Workflow.ExecuteActivityAsync((Foo foo) => foo.SomeMethod, 123 + 456);
```
Looking at hangfire and others, they have elaborate evaluators and will cache some known expression tree patterns resorting to `Compile()` as needed.

Options (not all are mutually exclusive):
1. Abandon expression trees - pro: good performance, con: not as common in ecosystem
2. Accept the performance hit of compiling non-constant expressions for arguments of workflows/activities on each invocation - pro: easy to read, con: bad performance
3. Put in the effort for matching some common pattern types - pro: better performance in some cases, con: lots of code and probably won't support common use case of record instantiation (also https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/expression-trees-execution#execution-and-lifetimes discourages caching saying equality/identity checks are more expensive than compile)
4. Disallow in-lambda evaluation (i.e. require all arguments be ConstantExpression provided outside the lambda) - pro: good performance, con: runtime only and encourages potentially uglier code
5. Warn on in-lambda evaluation - pro: encourages good performance, con: noisy, non-obvious, encourages potentially uglier code
6. Use something like https://github.com/dadhi/FastExpressionCompiler - pro: better performance, con: new dependency, some expressions don't work
7. Another option I am unaware of?

Thoughts? I didn't put "allow expression trees and ref pattern" above because we just can't reasonably have two approaches. I may do option 2 for now while implementing, but option 1 sure looks tempting and I am hoping I don't have to maintain two approaches just so I can benchmark differences.

</details>


---

<a id="24"></a>

### #24: [Feature Request] Specify activity names at runtime

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/24 |
| **State** | CLOSED |
| **Author** | cgillum (Chris Gillum) |
| **Created** | 2023-02-26 02:23:07.000 UTC (2y 10m ago) |
| **Updated** | 2023-04-20 18:22:14.000 UTC |
| **Closed** | 2023-04-20 18:22:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 9 |
| **Priority Score** | 9 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

I have a need to create activities with names that aren't known until runtime. The current design requires me to use `[Activity(string)]` on a method or delegate, which only allows me to use activity names known at compile time.

As far as I can tell, there's no simple way for me to add an `ActivityAttribute` to a `Delegate` at runtime in .NET, short of doing some kind of dynamic type generation (which seems like overkill).

### Describe the solution you'd like

A simple solution would be to add a `TemporalWorkerOptions.AddActivity(string name, Delegate del)` overload that allows me to specify the activity name explicitly.


#### Comments (9)

<details>
<summary><strong>cretz</strong> commented on 2023-02-27 13:42:56.000 UTC</summary>

:+1: Yes we do need this (we also need "dynamic activities" that catch-all activity invocations that aren't explicitly registered, but that's unrelated).

We have a couple of options.

> A simple solution would be to add a `TemporalWorkerOptions.AddActivity(string name, Delegate del)` overload that allows me to specify the activity name explicitly.

This is one option, but there are two problems here: 1) I still want people to be able to use `List<Delegate>` when creating a worker for the common case, and 2) this is not future proofed against other activity options that may come about in the future.

I'm thinking about keeping `public IList<Delegate> Activities { get; set; } = new List<Delegate>();`, moving `Temporalio.Activity.ActivityAttribute.Definition` to public `Temporalio.Activity.ActivityDefinition` and having a new `public IList<ActivityDefinition> ActivityDefinitions { get; set; } = new List<ActivityDefinition>();` that I validate at worker instantiation time.

Thoughts?

</details>

<details>
<summary><strong>cgillum</strong> commented on 2023-02-27 19:01:57.000 UTC</summary>

For my use-case, the ability to register dynamic activities as a catch-all would also solve my problem (in fact, that would make my current proof-of-concept simpler). Your suggestion to expose `ActivityDefinitions` publicly is also fine from my POV.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-02-27 19:13:17.000 UTC</summary>

:+1: I have opened https://github.com/temporalio/sdk-dotnet/issues/27 (as part of general feature https://github.com/temporalio/features/issues/201). I will probably also expose the activity definition because it's unreasonable to require attributes be the only way to name activities.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-02-27 19:19:51.000 UTC</summary>

@cgillum - Also consider for your use case, if reasonable, to have a single activity with the discriminator in the input instead of the name itself. Granted if you're building a general purpose library for others to use, I can understand why name is better (and it is clearer from a UI POV).

</details>

<details>
<summary><strong>cgillum</strong> commented on 2023-03-01 02:10:03.000 UTC</summary>

Yeah, this is effectively a general-purpose library for others to use, so the single activity approach unfortunately won't work for me.

Thanks for opening the other issue - I'll keep an eye on that.

Reactions: 👍 1

</details>

<details>
<summary><strong>cgillum</strong> commented on 2023-03-03 22:36:27.000 UTC</summary>

@cretz do you have an idea on when you might have time to start work on this?

If not, do you accept external PR contributions?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-03-06 13:14:54.000 UTC</summary>

@cgillum - I have already started on your first suggestion. I am right in the middle of workflow development on https://github.com/cretz/temporal-sdk-dotnet/tree/workflow-more-impl but I have exposed activity definition publicly already. But that code is a mess because it is mid development. Give me a little while longer and another alpha will be released with full workflow support (due to vacation and such, this may not be at least until the week of the 20th).

Also in the meantime, would love feedback on SDK approach/code in general. Though not quite yet on that branch :-) May want to wait until the next workflow PR is up hopefully this week (will be merging #29 before I open the next one since I'm daisy-chaining for feedback reasons).

As for full impl of #27 and dynamic activity support, I need to wait until after I finish this development on workflows.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-03-07 16:58:24.000 UTC</summary>

PR #31 up for non-attribute definition of activities. Full dynamic activities, workflows, signals, and queries will come after workflow is completely implemented (so not that far off).

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-04-20 18:22:14.000 UTC</summary>

Closing since this has now been released.

</details>


---

<a id="394"></a>

### #394: [Feature Request] Add workflow search attributes as Activity tags

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/394 |
| **State** | CLOSED |
| **Author** | petrkoutnycz (Petr Koutny) |
| **Created** | 2025-01-17 12:35:20.000 UTC (11 months ago) |
| **Updated** | 2025-01-21 16:37:59.000 UTC |
| **Closed** | 2025-01-21 16:37:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

When having a workflow with custom search attributes and having OpenTelemetry tracing enabled, I'd like the SDK to append those search attributes to activity tags as part of `RunWorkflow` activity.

Reason is that I need to able to filter traces by those attributes.

### Describe the solution you'd like

`TracingInterceptor` is extended so it appends custom workflow search attributes to activity tags while spinning up a new `RunWorkflow` activity. The logic might be customized via `TracingInterceptorOptions`.

#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2025-01-17 13:43:00.000 UTC</summary>

> I'd like the SDK to append those search attributes to activity tags as part of `RunWorkflow` activity.

Hrmm. We do offer the ability to create your own spans with your own tags, so you could `using (TracingInterceptor.WorkflowsSource.TrackWorkflowDiagnosticActivity(name: "MyCustomActivity", tags: CreateMyOwnTags()))` inside your own `ExecuteWorkflowAsync` interceptor.

But if you don't want to do that, there is `protected virtual IEnumerable<KeyValuePair<string, object?>> CreateInWorkflowTags()`, so you can probably have something like:

```csharp
public class MyTracingInterceptor : TracingInterceptor
{
    public MyTracingInterceptor(TracingInterceptorOptions? options = null)
        : base(options)
    {
    }

    protected override IEnumerable<KeyValuePair<string, object?>> CreateInWorkflowTags()
    {
        var tags = base.CreateInWorkflowTags();
        return tags.Append(new("myTagName", Workflow.TypedSearchAttributes.Get(MyAttrKey)));
    }
}
```

This will add your search attribute to `RunWorkflow` and any other spans created inside the workflow by the interceptor (untested, just typed here in comment).

Is this good enough?

Reactions: 👀 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2025-01-17 13:52:59.000 UTC</summary>

Hmm, that looks feasible. Will give it a shot and let you know!

Reactions: ❤️ 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2025-01-20 08:40:38.000 UTC</summary>

Tried it and it does not work in my case. The reason might be that I update my search attributes _during_ a workflow task.

Created a branch with repro if you're interested: https://github.com/petrkoutnycz/temporalio-samples-dotnet/commit/4dcdbbc7e9b8a5df3838dc868c619bd7a287248f.

Meanwhile, I came up with a workaround that sets those OTel attributes in an activity.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 13:55:15.000 UTC</summary>

> The reason might be that I update my search attributes during a workflow task.

When you call `UpsertTypedSearchAttributes`, it does update `Workflow.TypedSearchAttributes`. But these span tags are fetched when the span is created and in your code you are changing the search attribute well after the spans are created.

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2025-01-21 16:05:06.000 UTC</summary>

Exactly, so for my use case I keep updating OTel tags within an activity.

Anyway, I still think this ticket makes sense when search attributes are known upfront, right?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 16:11:26.000 UTC</summary>

The ability to do this makes sense, yes, which we support, but not necessarily sure it's something we should do in the SDK. What tags a user chooses to provide in this override is up to them, they may want a certain search attribute, or a memo value, or a some other thing off the instance (now that we made `.Instance` available in #393), or something else entirely.

Reactions: 👍 1

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2025-01-21 16:19:40.000 UTC</summary>

Get it. So process this ticket as you wish then :-) 

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 16:37:58.000 UTC</summary>

Closing as not planned, but we may consider a sample to demonstrate how to customize the span tags

Reactions: 👍 1

</details>


---

<a id="347"></a>

### #347: NU1903 error when run dotnet build 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/347 |
| **State** | CLOSED |
| **Author** | rstm-sf (Rustam) |
| **Created** | 2024-09-15 06:32:39.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-31 16:51:18.000 UTC |
| **Closed** | 2024-10-31 16:51:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Summary**

When I try to build a solution, I get errors NU1903

**Details**

```bash
> dotnet build
    .\sdk-dotnet\tests\Temporalio.Tests\Temporalio.Tests.csproj : error NU1903: Warning As Error: Package 'System.Net.Http' 4.3.0 has a known high severity vulnerability, https://github.com/advisories/GHSA-7jgj-8wvc-jh57
    .\sdk-dotnet\src\Temporalio.Extensions.Hosting\Temporalio.Extensions.Hosting.csproj : error NU1903: Warning As Error: Package 'System.Text.Json' 7.0.0 has a known high severity vulnerability, https://github.com/advisories/GHSA-hh2w-p6rv-4g7w
    .\sdk-dotnet\tests\Temporalio.Tests\Temporalio.Tests.csproj : error NU1903: Warning As Error: Package 'System.Text.Json' 8.0.0 has a known high severity vulnerability, https://github.com/advisories/GHSA-hh2w-p6rv-4g7w
    .\sdk-dotnet\tests\Temporalio.Tests\Temporalio.Tests.csproj : error NU1903: Warning As Error: Package 'System.Text.RegularExpressions' 4.3.0 has a known high severity vulnerability, https://github.com/advisories/GHSA-cmhx-cq75-c4mj
```

Restore failed with 4 error(s) in 0.7s

#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2024-09-16 13:22:26.000 UTC</summary>

Hrmm, these issues do not occur in our CI build when we do a `dotnet build`. I wonder if our `dotnet` version is off. For instance, https://github.com/temporalio/sdk-dotnet/actions/runs/10812517816 is not reporting this. Can you provide the steps to replicate this build error? Is there a global setting you have that we do not in CI?

Regardless, we can definitely update the test dependencies. For the `Temporalio.Extensions.Hosting` dependency I'm a bit more hesitant to require the next major version (though of course we suggest all _users_ of the library use the latest), but we may be able to upgrade that too.

</details>

<details>
<summary><strong>rstm-sf</strong> commented on 2024-09-16 13:44:58.000 UTC</summary>

Seems to be because [the .NET 6 SDK is being used](
https://github.com/temporalio/sdk-dotnet/blob/5141c2cb1330cdce1ab88f1bffd246012d5e1aa7/.github/workflows/ci.yml#L47) and it may not have up-to-date package checking for known vulnerabilities.


I have SDKs from 6 to 9 and when I build, I used global.json to specify that I should use SDK 8. Now I tried to specify 6 SDK and there were no errors either
```bash
dotnet build
MSBuild version 17.3.4+a400405ba for .NET
  Determining projects to restore...
  Restored .\sdk-dotnet\src\Temporalio.Extensions.OpenTelemetry\Temporalio.Extensions.OpenTelemetry.csproj (in 193 ms).
  Restored .\sdk-dotnet\src\Temporalio.Extensions.DiagnosticSource\Temporalio.Extensions.DiagnosticSource.csproj (in 193 ms).
  Restored .\sdk-dotnet\src\Temporalio.Extensions.Hosting\Temporalio.Extensions.Hosting.csproj (in 213 ms).
  Restored .\sdk-dotnet\src\Temporalio\Temporalio.csproj (in 193 ms).
  Restored .\sdk-dotnet\tests\Temporalio.Tests\Temporalio.Tests.csproj (in 232 ms).
  Temporalio -> .\sdk-dotnet\src\Temporalio\bin\Debug\netcoreapp3.1\Temporalio.dll
  Temporalio -> .\sdk-dotnet\src\Temporalio\bin\Debug\netstandard2.0\Temporalio.dll
  Temporalio -> .\sdk-dotnet\src\Temporalio\bin\Debug\net462\Temporalio.dll
  Temporalio.Extensions.DiagnosticSource -> .\sdk-dotnet\src\Temporalio.Extensions.DiagnosticSource\bin\Debug\netstandard2.0\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.OpenTelemetry -> .\sdk-dotnet\src\Temporalio.Extensions.OpenTelemetry\bin\Debug\netstandard2.0\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting -> .\sdk-dotnet\src\Temporalio.Extensions.Hosting\bin\Debug\netstandard2.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.Hosting -> .\sdk-dotnet\src\Temporalio.Extensions.Hosting\bin\Debug\net462\Temporalio.Extensions.Hosting.dll
  Temporalio.Extensions.DiagnosticSource -> .\sdk-dotnet\src\Temporalio.Extensions.DiagnosticSource\bin\Debug\net462\Temporalio.Extensions.DiagnosticSource.dll
  Temporalio.Extensions.OpenTelemetry -> .\sdk-dotnet\src\Temporalio.Extensions.OpenTelemetry\bin\Debug\net462\Temporalio.Extensions.OpenTelemetry.dll
  Temporalio.Extensions.Hosting -> .\sdk-dotnet\src\Temporalio.Extensions.Hosting\bin\Debug\net6.0\Temporalio.Extensions.Hosting.dll
  Temporalio.Tests -> .\sdk-dotnet\tests\Temporalio.Tests\bin\Debug\net6.0\Temporalio.Tests.dll
```

```json
{
  "sdk": {
    "version": "6.0.0",
    "rollForward": "latestFeature",
    "allowPrerelease": false
  }
}
```


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-16 17:30:19.000 UTC</summary>

Thanks! We will look into setting up a build with .NET 8 and look into updating minimum dependencies in a way that doesn't harm past users.

This should just affect builds of the SDK not usage of the SDK so we likely won't release an emergency patch release for this, but we should get to this soon. You can either alter the dependency versions explicitly or disable this warning in the meantime.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-08 16:23:59.000 UTC</summary>

@rstm-sf - I used .NET 8 in a part of our CI at https://github.com/temporalio/sdk-dotnet/pull/356 and did not see any errors restoring/building (see run at https://github.com/temporalio/sdk-dotnet/actions/runs/11239495901/job/31246675940?pr=356, it is windows specific).

It does seem like per https://learn.microsoft.com/en-us/dotnet/core/compatibility/sdk/8.0/dotnet-restore-audit that this should fail if it had bad dependencies. I wonder if a fresh build is pulling in fixed versions of those dependencies? Or is there some other setting governing this? We have `TreatWarningsAsErrors` as `true`. I wonder if related to `net6.0` target framework. I want to make sure we replicate the failure in CI so I know I have fixed it and I know we won't see it again.

</details>

<details>
<summary><strong>rstm-sf</strong> commented on 2024-10-20 10:34:59.000 UTC</summary>

@cretz hello, sorry for delay, I reproduced it :) https://github.com/rstm-sf/sdk-dotnet/actions/runs/11425577349/job/31787420591?pr=1

```bash
Run dotnet build
  Determining projects to restore...
/home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Temporalio.csproj : error NU1903: Warning As Error: Package 'System.Text.Json' 8.0.4 has a known high severity vulnerability, https://github.com/advisories/GHSA-8g4q-xg66-9fp4 [/home/runner/work/sdk-dotnet/sdk-dotnet/Temporalio.sln]
  Restored /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio.Extensions.OpenTelemetry/Temporalio.Extensions.OpenTelemetry.csproj (in 3.07 sec).
  Restored /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio.Extensions.Hosting/Temporalio.Extensions.Hosting.csproj (in 3.09 sec).
  Failed to restore /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Temporalio.csproj (in 3.07 sec).
  Restored /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio.Extensions.DiagnosticSource/Temporalio.Extensions.DiagnosticSource.csproj (in 4 ms).
  Restored /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Temporalio.Tests.csproj (in 6.95 sec).

Build FAILED.

/home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Temporalio.csproj : error NU1903: Warning As Error: Package 'System.Text.Json' 8.0.4 has a known high severity vulnerability, https://github.com/advisories/GHSA-8g4q-xg66-9fp4 [/home/runner/work/sdk-dotnet/sdk-dotnet/Temporalio.sln]
    0 Warning(s)
    1 Error(s)

Time Elapsed 00:00:10.98
Error: Process completed with exit code 1.
```

</details>

<details>
<summary><strong>rstm-sf</strong> commented on 2024-10-20 16:15:09.000 UTC</summary>

Maybe using
```xml
<WarningsNotAsErrors>NU1903</WarningsNotAsErrors>
```
https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/errors-warnings#warningsaserrors-and-warningsnotaserrors

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-21 12:59:52.000 UTC</summary>

Thanks! I wonder what was different about our PRs. I wonder if my use of `8` instead of `8.x` is the issue? Regardless, yes we should at least update `System.Text.Json` dependency because we're already on `8`, but I do want to make sure our CI is catching these going forward (we are also getting a security alert on this dependency internally with dependabot). I will try again to make the CI fail (I do want to keep a 6.x build around in CI too).

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-25 14:59:27.000 UTC</summary>

That was it, it's that I used `8` instead of `8.x`. Fixing this now...

</details>


---

<a id="179"></a>

### #179: [Bug] Workflow Update hangs on time skipping environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/179 |
| **State** | OPEN |
| **Author** | alrz (Alireza Habibi) |
| **Created** | 2024-01-21 20:01:01.000 UTC (1y 11m ago) |
| **Updated** | 2024-08-08 22:54:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction

```cs
[Workflow]
public class TestWorkflow
{
   [WorkflowUpdate]
   public Task Update() => Task.CompletedTask;
   [WorkflowRun]
   public Task RunAsync() => Workflow.DelayAsync(TimeSpan.FromSeconds(3));
}
public async Task Test() {
    await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
    using var worker = new TemporalWorker(
        env.Client,
        new TemporalWorkerOptions($"tq-{Guid.NewGuid()}").
            AddWorkflow<TestWorkflow>());
    await worker.ExecuteAsync(async () =>
    {
        var h = await env.Client.StartWorkflowAsync(
            (TestWorkflow wf) => wf.RunAsync(),
            new(id: $"workflow-{Guid.NewGuid()}", taskQueue: worker.Options.TaskQueue!));
        await h.ExecuteUpdateAsync(wf => wf.Update());
        await h.GetResultAsync();
    });
}
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows x64
- Temporal Version: Temporal nuget package 1.0.0
- Are you using Docker or Kubernetes or building Temporal from source? N/A

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2024-01-22 13:58:55.000 UTC</summary>

I have replicated and we have an outstanding issue in the Java SDK (where our time-skipping test server implementation lives): https://github.com/temporalio/sdk-java/issues/1903. Updates are experimental/unstable currently, but in the meantime you should be able to use a normal local server if you must use them and need to test them. I will leave this issue open pending a fix.

</details>

<details>
<summary><strong>alrz</strong> commented on 2024-01-22 14:07:23.000 UTC</summary>

> where our time-skipping test server implementation lives

Good to know, thanks! BTW is there any issue to track progress on workflow updates? If I'm not mistaken it seems like this is not sdk-related and the server implementation is actually experimental for the time being.

I thought signals would handle concurrent ops but turns out I had to use updates for this. The workaround is to use a combination of query/signal but I'm not comfortable doing that because the logic would be outside of the workflow itself and that would be hard to reason about.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-23 22:46:06.000 UTC</summary>

> BTW is there any issue to track progress on workflow updates?

I am not aware of an issue to track this. You can see the status at the top of https://docs.temporal.io/workflows#update.

> I thought signals would handle concurrent ops but turns out I had to use updates for this.

Signals can handle concurrent pieces, they just don't have results to return

> The workaround is to use a combination of query/signal but I'm not comfortable doing that because the logic would be outside of the workflow itself and that would be hard to reason about.

There's also an advanced approach to "push" results to activity workers hosted by the caller. See https://github.com/temporalio/samples-go/tree/main/reqrespactivity for a description of the pattern.

</details>

<details>
<summary><strong>alrz</strong> commented on 2024-01-24 12:12:18.000 UTC</summary>

> Signals can handle concurrent pieces, they just don't have results to return

Right, I was confused by "asynchronous" mentioned in the docs. I supposed that means we don't wait for the signal method to complete on the client side, however the call itself is synchronized inside the workflow.

Just one more question, where do we expect the signal to be received by the workflow? If I had to guess, between each `await` there's a chance that a signal would be received and get executed and then a workflow-run would be scheduled so we need to keep track of the state between each `await` and check it either in the update validator or via a query, is that correct?

Context: I'm trying to handle a concurrent timeout and signal using `WhenAny(Delay,WaitCondition)`, the happy path is that the signal would be received before the timeout. But if the timeout occurred beforehand we need to run a compensating operation. 


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-24 13:37:36.000 UTC</summary>

> Just one more question, where do we expect the signal to be received by the workflow? If I had to guess, between each await there's a chance that a signal would be received and get executed and then a workflow-run would be scheduled so we need to keep track of the state between each await and check it either in the update validator or via a query, is that correct?

This is deviating from the issue and it may be better for a discussion place like the #dotnet-sdk channel in https://t.mp/slack or our forums.

Yes, signals are received from server at potentially any yield point. Yes, most users simply set a class field from their signal and have their `Workflow.WaitConditionAsync` wait for that value to get set to a certain value. Your use case of wait-for-signal-or-timeout is a very normal one and the proper approach.

Reactions: 👍 1

</details>

<details>
<summary><strong>DovydasNavickas</strong> commented on 2024-07-18 14:29:36.000 UTC</summary>

@cretz
>Updates are experimental/unstable currently, but in the meantime you should be able to use a normal local server if you must use them and need to test them.

Locally run server with temporal CLI has the same problem as the update never returns a value, even though in the dashboard the result is already visible. The update throws an exception:
```
Temporalio.Exceptions.RpcException: workflow execution already completed
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-18 17:20:45.000 UTC</summary>

This sounds like a separate issue. Can you make a new issue with your .NET SDK version, CLI version, and (if you can) a replication? Can just alter https://github.com/temporalio/samples-dotnet/tree/main/src/WorkflowUpdate to demonstrate what you're seeing.

</details>

<details>
<summary><strong>DovydasNavickas</strong> commented on 2024-08-08 22:53:55.000 UTC</summary>

@cretz, I've been busy with things, but this turned out for the better: I've updated the Temporal CLI and the WorkflowUpdate sample started working. Probably there was a bug 3 weeks ago and it has been fixed.

Reactions: 👍 1

</details>


---

<a id="56"></a>

### #56: [Feature Request] OpenTelemetry support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/56 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-25 15:42:09.000 UTC (2y 8m ago) |
| **Updated** | 2023-06-07 21:39:13.000 UTC |
| **Closed** | 2023-06-07 21:39:13.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Need OpenTelemetry interceptor as separately published project


#### Comments (6)

<details>
<summary><strong>johnkattenhorn</strong> commented on 2023-05-26 15:45:43.000 UTC</summary>

Sounds like a good idea. Do you have any design thoughts on this yet, I'm thinking about this too, I think it should be possible to do Spans, Tracing and Metrics.

Any ideas of what Metrics would be useful to track? Could we contribute on this one ? 

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-26 16:24:07.000 UTC</summary>

This is only for tracing. OTel is already supported for metrics (you can create your own `TemporalRuntime` w/ metrics telemetry options set to an OTel gRPC URL and use it throughout the life of your application). https://docs.temporal.io/references/sdk-metrics are the metrics we track.

I have been working on the tracing part just this morning and I'll jot some notes down here. So it will be interceptor powered (like Python's, see https://github.com/temporalio/sdk-python/blob/main/temporalio/contrib/opentelemetry.py and https://github.com/temporalio/samples-python/tree/main/open_telemetry), but I am struggling with how best to split the project up.

So I was first thinking of a separate project for `Temporalio.Extensions.OpenTelemetry`, but since OTel support is basically just using https://learn.microsoft.com/en-us/dotnet/core/diagnostics/distributed-tracing, a more generic `Temporalio.Extensions.Tracing` project may make more sense (didn't want it part of main project because our oldest supported .NET versions would require `System.Diagnostics.DiagnosticSource` as an explicit dependency which I was wanting to avoid).

The problem I am at now is that I have to use https://github.com/open-telemetry/opentelemetry-dotnet/blob/main/src/OpenTelemetry.Api/Context/Propagation/BaggagePropagator.cs and https://github.com/open-telemetry/opentelemetry-dotnet/blob/main/src/OpenTelemetry.Api/Context/Propagation/CompositeTextMapPropagator.cs to serialize spans to Temporal headers that are compatible with other languages who have OTel too. I am digging into if I can use .NET's `DistributedContextPropagator` easily without making the user do too much work or if I am going to need to make OTel helpers for them and therefore an OTel specific project again.

Active research is ongoing.

</details>

<details>
<summary><strong>johnkattenhorn</strong> commented on 2023-05-26 16:39:21.000 UTC</summary>

On the Span tracking I was thinking about the same earlier today too.

The only other solution I’ve used before was specific to AppInsights Spans so not going to work with OTel.

Let me know where you land, and I can ask our team to get involved and share some opinion / insight.

Thanks

JK

From: Chad Retz ***@***.***>
Sent: Friday, May 26, 2023 9:24 AM
To: temporalio/sdk-dotnet ***@***.***>
Cc: John Kattenhorn ***@***.***>; Comment ***@***.***>
Subject: [EXTERNAL]:Re: [temporalio/sdk-dotnet] [Feature Request] OpenTelemetry support (Issue #56)

CAUTION: This email originated from outside of the organization. Do not click links or open attachments unless you recognize the sender and know the content is safe.


This is only for tracing. OTel is already supported for metrics (you can create your own TemporalRuntime w/ metrics telemetry options set to an OTel gRPC URL and use it throughout the life of your application). https://docs.temporal.io/references/sdk-metrics are the metrics we track.

I have been working on the tracing part just this morning and I'll jot some notes down here. So it will be interceptor powered (like Python's, see https://github.com/temporalio/sdk-python/blob/main/temporalio/contrib/opentelemetry.py and https://github.com/temporalio/samples-python/tree/main/open_telemetry), but I am struggling with how best to split the project up.

So I was first thinking of a separate project for Temporalio.Extensions.OpenTelemetry, but since OTel support is basically just using https://learn.microsoft.com/en-us/dotnet/core/diagnostics/distributed-tracing, a more generic Temporalio.Extensions.Tracing project may make more sense (didn't want it part of main project because our oldest supported .NET versions would require System.Diagnostics.DiagnosticSource as an explicit dependency which I was wanting to avoid).

The problem I am at now is that I have to use https://github.com/open-telemetry/opentelemetry-dotnet/blob/main/src/OpenTelemetry.Api/Context/Propagation/BaggagePropagator.cs and https://github.com/open-telemetry/opentelemetry-dotnet/blob/main/src/OpenTelemetry.Api/Context/Propagation/CompositeTextMapPropagator.cs to serialize spans to Temporal headers that are compatible with other languages who have OTel too. I am digging into if I can use .NET's DistributedContextPropagator easily without making the user do too much work or if I am going to need to make OTel helpers for them and therefore an OTel specific project again.

Active research is ongoing.

—
Reply to this email directly, view it on GitHub<https://github.com/temporalio/sdk-dotnet/issues/56#issuecomment-1564635012>, or unsubscribe<https://github.com/notifications/unsubscribe-auth/AAEWOOJVLRCQPGEILTCT5ATXIDKLFANCNFSM6AAAAAAXLGDOCM>.
You are receiving this because you commented.Message ID: ***@***.******@***.***>>


</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-26 20:55:38.000 UTC</summary>

@johnkattenhorn - Maybe you can help me here. I have restored an activity context and baggage via propagation similar to [this](https://github.com/open-telemetry/opentelemetry-dotnet/blob/a5b14aa76d5d8880368a0f4ce9b5225296e660fc/examples/MicroserviceExample/Utils/Messaging/MessageReceiver.cs#L57). This has the [ActivityContext](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activitycontext) but there's no way I see to [attach current context](https://opentelemetry.io/docs/specs/otel/context/#attach-context) in OpenTelemetry terms given the `ActivityContext` only. Other OTel SDKs let me set the "current" context, but .NET only allows the "current" activity and I don't want to create a new activity with the parent, I just want to restore the parent to "current". Any ideas?

</details>

<details>
<summary><strong>johnkattenhorn</strong> commented on 2023-05-26 21:05:29.000 UTC</summary>

Oh man sound like it works like AppInsights, inthink we had to recreate the activity as you could only set the parentID in the constructor and copy everything across.

I'm going to ask someone from our team but just boarding a flight back to the UK so might be a delay.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-26 21:13:50.000 UTC</summary>

Thanks! Definitely no rush (can be days/weeks, don't waste weekend time). I also have a question out on `#otel-dotnet` on CNCF Slack. I am sure I'm just missing something. Maybe that's what I have to do is create the activity and just set all the fields I can and know about and set it as `Activity.Current`.

</details>


---

<a id="44"></a>

### #44: Trying to start a workflow from asp.net and the client hangs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/44 |
| **State** | CLOSED |
| **Author** | jakejscott (Jake Scott) |
| **Created** | 2023-04-10 08:11:27.000 UTC (2y 9m ago) |
| **Updated** | 2023-08-21 19:50:46.000 UTC |
| **Closed** | 2023-08-21 19:50:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying to start a workflow from asp.net minimal api.

### Describe the bug

If I create the client at startup, and then try and use that client instance within an endpoint it hangs when I call `StartWorkflowAsync`. 

If I create a client within the MapGet endpoint lambda it works. 

### Minimal Reproduction

```csharp
using Temporalio.Client;
using Temporalio.Runtime;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.AddSimpleConsole(options =>
{
    options.TimestampFormat = "yyyy-mm-ddTHH:mm:ss.ff ";
    options.UseUtcTimestamp = true;
    options.IncludeScopes = false;
    options.SingleLine = true;
});

// If I create the client here, when I call `client.StartWorkflowAsync` the call blocks and doesn't work.
var client = await TemporalClient.ConnectAsync(new()
{
    TargetHost = "localhost:7233",
    Namespace = "default",
});

var app = builder.Build();

app.MapGet("/", async () =>
{
    app.Logger.LogInformation("We are here");
    
    // NOTE: If I connect here it works
    // var client = await TemporalClient.ConnectAsync(new()
    // {
    //     TargetHost = "localhost:7233",
    //     Namespace = "default",
    // });

    var id = $"simple-workflow-{Guid.NewGuid().ToString()}";

    // This call blocks and doesn't work
    var handle = await client.StartWorkflowAsync(
        workflow: SimpleWorkflow.Ref.RunAsync,
        arg: "Jake",
        options: new WorkflowOptions(
            id: id,
            taskQueue: "my-task-queue"
        )
    );

    var result = await handle.GetResultAsync();
    return result;
});

app.Logger.LogInformation("Started");

app.Run();
```

### Environment/Versions

- x86 Windows
- using temporal cli

#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2023-04-10 15:10:37.000 UTC</summary>

I have replicated. There is something about how the container is working that does is preventing the Tokio thread from running properly.

In the meantime, what you have there is not best practice. And it's not good to connect per call either. Consider changing to:

```csharp
builder.Services.AddSingleton(_ =>
    Task.Run(() => TemporalClient.ConnectAsync(new()
    {
        TargetHost = "localhost:7233",
        Namespace = "default",
    })).Result);
```

And:

```csharp
app.MapGet("/", async (TemporalClient client) =>
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-04-10 15:25:29.000 UTC</summary>

This is actually bad practice too, ref https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection-guidelines#async-di-factories-can-cause-deadlocks. I will consider some kind of `TemporalClientProvider` when I write the sample for this.

Reactions: 👍 1

</details>

<details>
<summary><strong>cecilphillip</strong> commented on 2023-05-04 14:27:35.000 UTC</summary>

If might be help if there were a blocking version of [Bridge.Client.ConnectAsync](https://github.com/temporalio/sdk-dotnet/blob/53e3862dbc0a426f3d6b30fc80fd73f4ccc8d43b/src/Temporalio/Bridge/Client.cs#L40). 

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-04 18:19:06.000 UTC</summary>

Hrmm, I wonder how. Can you explain a bit more? It's non-blocking because the Rust side is intentionally non-blocking. Users can of course execute any .NET task in a blocking manner. But the problem is that something is broken within the client if created on the outside vs the inside in the exact same way.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-07-31 18:31:27.000 UTC</summary>

So I have packaged up the replication. See the attached zip. Steps to replicate:

1. Have a Temporal serer running
1. Clone this repository recursively and set `TreatWarningsAsErrors` as `false` in `Directory.Build.props`
1. Extract [attached zip](https://github.com/temporalio/sdk-dotnet/files/12218124/Temporalio.WebFailure.zip) to `tests/` (it has a single folder in it called `Temporalio.WebFailure`)
1. `cd tests/Temporalio.WebFailure`
1. `dotnet run`
1. It'll start with some logs, now navigate to http://localhost:5000 in a browser and watch it hang while trying to make start-workflow gRPC call

There is something weird going on with sockets or threads or something, and I cannot figure out what.

To enable trace logs, change the initial client creation to:

```csharp
var runtime = new TemporalRuntime(new(new() { Logging = new(new("trace")) }));
var client = await TemporalClient.ConnectAsync(new("localhost:7233") { Runtime = runtime });
```

What I have observed with trace logs is that in the successful case (client created inside handler which works), `Connection:poll:` logs appear when making the call. But in the failed case (the default code), `Connection:poll` logs do not appear. Something is inadvertently stopping/killing connection poll and I am not sure what.

[Temporalio.WebFailure.zip](https://github.com/temporalio/sdk-dotnet/files/12218124/Temporalio.WebFailure.zip)


</details>

<details>
<summary><strong>cretz</strong> commented on 2023-08-04 20:44:52.000 UTC</summary>

Good news. I can no longer replicate after updating core to get https://github.com/temporalio/sdk-core/pull/584 and setting my min tonic version to 0.9 and `cargo update`ing the bridge project. I will try to dig through Tonic release notes to see what it could be (though it could be one of their transitive dependencies).

I will update when I make a PR to fix this (I will likely wait for https://github.com/temporalio/sdk-core/pull/544 to be merged too).

Reactions: 🎉 1

</details>

<details>
<summary><strong>jakejscott</strong> commented on 2023-08-07 20:13:24.000 UTC</summary>

Wonder if it's worth adding a regression test in case it ever comes back?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-08-08 13:52:36.000 UTC</summary>

I think it might be, yes. I'll try to see if I can replicate via https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.testing.webapplicationfactory-1 in my unit tests without too much trouble.

</details>


---

<a id="462"></a>

### #462: [Bug] Workflow info start time using activation/task time instead

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/462 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-23 12:30:35.000 UTC (8 months ago) |
| **Updated** | 2025-05-30 13:25:41.000 UTC |
| **Closed** | 2025-05-19 13:09:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

We use activation/task start time to populate workflow info start time instead of the start time on the initialize job. This is a bug. However, we are still discussing how to fix it because it can be backwards incompatible to change this expectation.

#### Comments (7)

<details>
<summary><strong>JobaDiniz</strong> commented on 2025-04-23 12:37:50.000 UTC</summary>

Which one is wrong, `Workflow.Info.StartTime` or `WorkflowExecutionDescription.StartTime`

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-23 13:45:57.000 UTC</summary>

`Workflow.Info.StartTime` is incorrectly using task start time from the first task started event, so it is wrong. `WorkflowExecution.StartTime` is the proper start time.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-24 15:02:50.000 UTC</summary>

We have decided here (and in Python at https://github.com/temporalio/sdk-python/issues/849) that we will document that `Workflow.Info.StartTime` is the task start time and add a new `Workflow.Info.WorkflowStartTime` representing workflow start time. Will update when we make a PR.

Reactions: 👀 1

</details>

<details>
<summary><strong>JobaDiniz</strong> commented on 2025-04-24 15:32:41.000 UTC</summary>

I would go further and mark starttime deprecated and add: task start time and workflow start time

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-24 19:44:50.000 UTC</summary>

It was discussed and decided that since it is so rarely used and it is technically the time the workflow code started, it is not worth the deprecation. We'll just document the differences.

</details>

<details>
<summary><strong>JobaDiniz</strong> commented on 2025-05-30 13:07:13.000 UTC</summary>

Is it possible to see in which future _version_ this is going to be available?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-30 13:25:35.000 UTC</summary>

It will be in the next version (we basically always release off `main`). No specific timeline on when that is.

</details>


---

<a id="436"></a>

### #436: [Feature Request] Add ability to temporarily disable tracing event listener in workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/436 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-19 13:41:31.000 UTC (9 months ago) |
| **Updated** | 2025-04-09 20:17:52.000 UTC |
| **Closed** | 2025-04-09 20:17:52.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 1 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

### Describe the solution you'd like

Need something like `static T WithTracingEventListenerDisabled<T>(Func<T>)` (and of course non-return `Action` equivalent) in `Temporalio.Workflows.Workflow.Unsafe` so users can selectively opt-out of the tracing checks for small bits of code.

#### Comments (1)

<details>
<summary><strong>jepmatthews</strong> commented on 2025-03-26 09:43:03.000 UTC</summary>

This would be very useful for us 

Reactions: 👍 1

</details>


---

<a id="390"></a>

### #390: [Feature Request] F# Samples/Documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/390 |
| **State** | OPEN |
| **Author** | purkhusid (Daniel P. Purkhús) |
| **Created** | 2025-01-08 17:50:48.000 UTC (1 years ago) |
| **Updated** | 2025-09-01 09:03:25.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Currently all samples and docs are using C#. It would be very useful for people that are using F# to have some samples as well since it would lower the barrier of entry if it was not needed to do the translation from C# to F#.

It would also be good to know if there were any gotchas around using Temporal with F# e.g. is F#'s async a bad idea when using the Temporal SDK?


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-01-09 14:24:45.000 UTC</summary>

There is already a sample request open at https://github.com/temporalio/samples-dotnet/issues/10, but we have not prioritized this effort. Some early research showed that you may not be able to use the typesafe lambda expressions, but otherwise it may work. There has not been enough desire for F# to invest in it thus far. Full featured F# support would be more than a sample probably, it'd be a `Temporalio.Extensions.FSharp` package with some helpers I think.

</details>

<details>
<summary><strong>aggieben</strong> commented on 2025-08-30 23:00:34.000 UTC</summary>

I'm using F# for my backend and workflow definitions.  I'd be interested in this.  Currently running into a problem serializing workflow args that have an F# union in them.

</details>

<details>
<summary><strong>purkhusid</strong> commented on 2025-09-01 09:01:41.000 UTC</summary>

@aggieben You'll have to add F# JSON serialization using e.g. `FSharp.SystemTextJson`. Here is the custom converter settings that we use for our projects:

```
let private customDataConverter =
        // Support F# specifics when serialising workflow inputs/outputs
        let jsonOptions =
            let opts = JsonSerializerOptions()
            opts.Converters.Add(JsonFSharpConverter())
            opts

        // These converters will be attempted in order
        // Explicitly define the ordering
        // the only change from the default ordering is that we add BinaryProtoConverter before JsonProtoConverter
        // due to issues related to serializing the generated fsharp generated proto models
        let converters: IEncodingConverter array = [|
            new BinaryNullConverter()
            new BinaryPlainConverter()
            new BinaryProtoConverter()
            new JsonProtoConverter()
            new JsonPlainConverter(jsonOptions)
        |]

        DataConverter(new DefaultPayloadConverter(converters), new DefaultFailureConverter())
```

We are successfully rolling out Temporal in our codebase using F# but there are some annoyances regarding overload resolution but they can be overcome by explicitly adding type parameters when using the Temporal client.

</details>


---

<a id="330"></a>

### #330: [Bug] Non-determinism found during fuzzing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/330 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-13 13:04:13.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-11 14:06:06.000 UTC |
| **Closed** | 2024-09-11 14:06:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Given the [KitchenSinkWorkflow.cs.txt](https://github.com/user-attachments/files/16599943/KitchenSinkWorkflow.cs.txt) workflow and [KitchenSink.cs.txt](https://github.com/user-attachments/files/16599955/KitchenSink.cs.txt) proto model (may need to adjust namespace), running the [omes-replay.json](https://github.com/user-attachments/files/16599958/omes-replay.json) history on it via a replayer gives:

> Temporalio.Exceptions.WorkflowNondeterminismException : Nondeterminism: Workflow activation completion failed: Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Activity machine does not handle this event: HistoryEvent(id: 1182, StartChildWorkflowExecutionInitiated)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None })) }), force_cause: NonDeterministicError }

This history was obtained via https://github.com/temporalio/omes and this repo, both checked out at the time of this writing, and running this command with a dev server running:

    go run ./cmd run-scenario-with-worker --scenario fuzzer --language cs --option seed=17951219391681344745 --iterations 1 --version /path/to/sdk-dotnet

Each run may give a different history.

We are still investigating this. Debugging how the original run may have given a mismatching history is challenging.

#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2024-08-13 13:18:24.000 UTC</summary>

Here is another one history from the same scenario but with cache/sticky disabled: [omes-replay-2.json](https://github.com/user-attachments/files/16600152/omes-replay-2.json) that causes:

> Temporalio.Exceptions.WorkflowNondeterminismException : Nondeterminism: Workflow activation completion failed: Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Timer machine does not handle this event: HistoryEvent(id: 624, ActivityTaskScheduled)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None })) }), force_cause: NonDeterministicError }


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-13 14:16:46.000 UTC</summary>

Here's a simple test to add to SDK to replicate via replayer:

```csharp
public class OmesTest : WorkflowEnvironmentTestBase
{
    public OmesTest(ITestOutputHelper output, WorkflowEnvironment env)
        : base(output, env)
    {
    }

    [Fact]
    public async Task ReplayWorkflowAsync_NonDeterministicRunFromOmes_Fails()
    {
        // Replay history from JSON
        var history = WorkflowHistory.FromJson(
            "w-nespuagc-1",
            TestUtils.ReadAllFileText("omes-replay.json"));

        var replayer = new WorkflowReplayer(
            new WorkflowReplayerOptions()
            {
                LoggerFactory = LoggerFactory,
            }.AddWorkflow<KitchenSinkWorkflow>());
        await replayer.ReplayWorkflowAsync(history);
    }
}
```

</details>

<details>
<summary><strong>dandavison</strong> commented on 2024-08-23 01:48:45.000 UTC</summary>

Here's another example from the fuzzer just in case it's useful. Sorry, the oss-cicd pipeline that caught this is not yet in a position to save and retrieve the fuzzer proto.

> {
  "message": "[TMPRL1100] Nondeterminism error: Child workflow machine does not handle this event:HistoryEvent { event_id: 1709, event_time: Some(Timestamp { seconds: 1724331693, nanos: 159859858 }), event_type: WorkflowExecutionUpdateCompleted, version: 0, task_id: 1061367, worker_may_ignore: false, user_metadata: None, attributes: Some(WorkflowExecutionUpdateCompletedEventAttributes(WorkflowExecutionUpdateCompletedEventAttributes { meta: Some(Meta { update_id: \"a90bbbb8-10ca-4356-955a-66c58155cc42\", identity: \"7@oss-cicd-worker-dd844b6d4-kvh5f@\" }), accepted_event_id: 1692, outcome: Some(Outcome { value: Some(Success(Payloads { payloads: [Payload { metadata: {\"messageType\": "temporal.omes.kitchen_sink.WorkflowState", \"encoding\": "json/protobuf"}, data: "{ "kvs": { "1": "x", "10": "x", "12": "x", "14": "x", "2": "x", "21": "x", "22": "x", "24": "x", "29": "x", "3": "x", "34": "x", "36": "x", "40": "x", "41": "x", "45": "x", "48": "x", "53": "x", "57": "x", "59": "x", "61": "x", "72": "x", "83": "x", "84": "x", "85": "x", "89": "x", "91": "x", "93": "x" } }" }] })) }) })) }",
  "applicationFailureInfo": {}
}


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-23 13:29:14.000 UTC</summary>

Yeah, it's quite easy to replicate now, but I am struggling mightily to debug.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-23 18:01:24.000 UTC</summary>

After digging, this has been replicated and is believed to be a core issue. https://github.com/temporalio/sdk-core/issues/803 has been opened.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-11 14:06:06.000 UTC</summary>

This should now be fixed with the 1.3.1 release.

</details>


---

<a id="162"></a>

### #162: [Bug] README workflow testing samples are not running the worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/162 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-12-01 12:55:37.000 UTC (2y 1m ago) |
| **Updated** | 2024-02-12 21:13:54.000 UTC |
| **Closed** | 2024-02-12 21:13:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 4 |
| **Priority Score** | 6 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

README samples in the workflow testing area are not actually running the worker

#### Comments (4)

<details>
<summary><strong>eugbyte</strong> commented on 2024-02-10 12:12:59.000 UTC</summary>

Same, I faced a timeout issue. The test environmentt Client just keeps running without actually executing the Workflow provided, eventually timing out the test.

I copied and pasted the example under [Workflow testing](https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#workflow-testing). 

I am using XUnit, Windows OS (x64).

`MockWaitADayWorkflow.cs`
```
[Workflow]
public class MockWaitADayWorkflow {
    [WorkflowRun]
    public async Task<string> RunAsync() {
        await Workflow.DelayAsync(TimeSpan.FromSeconds(1));
        return "all done";
    }
}
```

`TestTemporalWorkflow .cs`
```
using NanoidDotNet;

public class TestTemporalWorkflow {
    [Fact(Timeout = 5_000)]
    public async Task SimpleMockedWorkflow() {
        await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
        using var worker = new TemporalWorker(
          env.Client,
          new TemporalWorkerOptions($"task-queue-{Nanoid.Generate()}").
              AddWorkflow<MockWaitADayWorkflow>());
        var result = await env.Client.ExecuteWorkflowAsync(
            (MockWaitADayWorkflow wf) => wf.RunAsync(),
            new(id: $"wf-{Nanoid.Generate()}", taskQueue: worker.Options.TaskQueue!));
        Assert.Equal("all done", result);
    }
}
```

I get the error that the test has timed out: `Test execution timed out after 5000 milliseconds`.

</details>

<details>
<summary><strong>eugbyte</strong> commented on 2024-02-10 12:18:04.000 UTC</summary>

Also, I added breakpoints within the `RunAsync` method of the `MockWaitADayWorkflow` class and the break point is never reached.

</details>

<details>
<summary><strong>eugbyte</strong> commented on 2024-02-10 12:46:30.000 UTC</summary>

Similar to https://github.com/temporalio/sdk-dotnet/issues/179#issue-2092746994

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-02-12 13:25:09.000 UTC</summary>

Yes, we need to fix that README. In the sample code you are not actually running/executing the worker which you must do. I will update shortly. This is unrelated to the other issue (time skipping test server and workflow update).

</details>


---

<a id="158"></a>

### #158: [Bug] TemporalClient timing out 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/158 |
| **State** | CLOSED |
| **Author** | AdnanSoftic |
| **Created** | 2023-11-17 13:48:30.000 UTC (2y 1m ago) |
| **Updated** | 2024-03-12 15:28:15.000 UTC |
| **Closed** | 2023-11-17 14:14:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

We have a .NET 7 Web API that registers a TemporalClient like:

```
builder.Services.AddTemporalClient(options =>
    {
        options.TargetHost = builder.Configuration.GetValue<string>("Temporal:Host");
        options.Namespace = builder.Configuration.GetValue<string>("Temporal:Namespace") ?? "default";
    
        var privateKey = builder.Configuration.GetValue<string>("Temporal:PrivateKey");
        var publicCertificate = builder.Configuration.GetValue<string>("Temporal:PublicCertificate");

        if (!string.IsNullOrEmpty(privateKey) && !string.IsNullOrEmpty(publicCertificate))
        {
            options.Tls = new TlsOptions
            {
                ClientCert = Encoding.UTF8.GetBytes(publicCertificate.Replace("******", "\n")),
                ClientPrivateKey = Encoding.UTF8.GetBytes(privateKey.Replace("******", "\n"))
            };
        }
    });
```

### Describe the bug

In our TST environment we are connecting to a Temporal Cloud service and things are working as expected for for a certain period. After a day or two We have noticed that Temporal client loses connection with temporal Cloud and is unable to start any new Workflow(s). The result is a following exception:

```
2023-11-17T12:38:53.347909835Z [12:38:53 ERR] An unhandled exception has occurred while executing the request.
2023-11-17T12:38:53.347943176Z Temporalio.Exceptions.RpcException: Timeout expired
2023-11-17T12:38:53.347949201Z    at Temporalio.Bridge.Client.CallAsync[T](RpcService service, String rpc, IMessage req, MessageParser`1 resp, Boolean retry, IEnumerable`1 metadata, Nullable`1 timeout, Nullable`1 cancellationToken)
2023-11-17T12:38:53.347953385Z    at Temporalio.Client.TemporalConnection.InvokeRpcAsync[T](RpcService service, String rpc, IMessage req, MessageParser`1 resp, RpcOptions options)
2023-11-17T12:38:53.347957739Z    at Temporalio.Client.WorkflowService.StartWorkflowExecutionAsync(StartWorkflowExecutionRequest req, RpcOptions options)
2023-11-17T12:38:53.347962584Z    at Temporalio.Client.TemporalClient.Impl.StartWorkflowInternalAsync[TWorkflow,TResult](StartWorkflowInput input)
2023-11-17T12:38:53.347966881Z    at Temporalio.Client.TemporalClient.Impl.StartWorkflowAsync[TWorkflow,TResult](StartWorkflowInput input)
2023-11-17T12:38:53.347971070Z    at Temporalio.Client.TemporalClient.StartWorkflowAsync[TWorkflow,TResult](Expression`1 workflowRunCall, WorkflowOptions options)
2023-11-17T12:38:53.347975844Z    at ******************.Facade.Controllers.B2BPersonsController.OnboardB2BPerson(B2BPersonOnboardingRequest b2BPersonOnboardingRequest) in /src/WebApi/Controllers/B2BPersonsController.cs:line 111
```

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction

Unable to reproduce since the issue is occurring sporadically.
 
### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux
- Temporal Version: .NET SDK version: 0.1.0-beta1
- Are you using Docker or Kubernetes or building Temporal from source? - No. We are using Temporal Cloud.

### Additional context

Our Client application is running in Azure Container environment.


#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2023-11-17 14:00:54.000 UTC</summary>

We have seen other situations of this and have turned on client keep alive by default in beta 2 (#138). It is possible that Azure is closing idle outbound connections. Can you upgrade to beta 2 and confirm this issue no longer occurs?

</details>

<details>
<summary><strong>AdnanSoftic</strong> commented on 2023-11-17 14:10:34.000 UTC</summary>

@cretz I will update to beta2 and monitor throughout the next week.
Regarding Azure closing outbound connections, I am really not sure how that works. From our side we configure number of instances of an image running in the Container environment, where we always have at least one instance running.

Thank you for your feedback.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-11-17 14:14:29.000 UTC</summary>

:+1: No prob. We have seen other issues with users there hitting these idle timeouts and this client keep alive did seem to resolve it. I will close the issue now, but feel free to reopen if it persists (or come join us on `#dotnet-sdk` on Slack at https://t.mp/slack or our forums at https://community.temporal.io).

</details>

<details>
<summary><strong>geoffreytran</strong> commented on 2024-03-12 03:13:38.000 UTC</summary>

Also running into this issue with the 1.0 sdk. Is there a way to check if the connection is disconnected and reconnect?

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-03-12 14:48:47.000 UTC</summary>

No, the connection is supposed to automatically reconnect internally, and keep alive is enabled by default which should reconnect when it is seen as down.

</details>

<details>
<summary><strong>geoffreytran</strong> commented on 2024-03-12 15:27:48.000 UTC</summary>

That's good to know! Odd thing is, when this exception occurs, with the default keep alive settings, it doesn't seem to recover. We have an exponential retry configured to retry the start workflow call, but it keeps getting the timeout expired exception until the app is restarted.

It's been elusive to reproduce as it seems to happen sporadically, so I haven't been able to debug deeper yet, but just wanted to leave a comment in case anyone else is running into the same issue.

</details>


---

<a id="42"></a>

### #42: [Bug] Unable to load shared library 'temporal_sdk_bridge' issue  on docker(linux)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/42 |
| **State** | CLOSED |
| **Author** | mahdiAkhi (Mahdi Akhi) |
| **Created** | 2023-04-03 08:22:27.000 UTC (2y 9m ago) |
| **Updated** | 2023-10-05 16:41:56.000 UTC |
| **Closed** | 2023-05-22 13:01:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to use Temporal on a docker env. Everything is ok on my PC(windows) and Temporal works properly, but when I deploy my code to the server using docker and call the service which uses from the Temporal, I faced the problem `Unable to load shared library 'temporal_sdk_bridge'`. This issue occurs even when I try the your [samlpe](https://github.com/temporalio/samples-dotnet) .
[logs (1).txt](https://github.com/temporalio/sdk-dotnet/files/11136243/logs.1.txt)



### Here is a complete log of the error
```
System.DllNotFoundException: Unable to load shared library 'temporal_sdk_bridge' or one of its dependencies. In order to help diagnose loading problems, consider setting the LD_DEBUG environment variable: libtemporal_sdk_bridge: cannot open shared object file: No such file or directory
   at Temporalio.Bridge.Interop.Methods.runtime_new(RuntimeOptions* options)
   at Temporalio.Bridge.Runtime..ctor(TemporalRuntimeOptions options)
   at Temporalio.Runtime.TemporalRuntime..ctor(TemporalRuntimeOptions options)
   at Temporalio.Runtime.TemporalRuntime.<>c.<.cctor>b__9_0()
   at System.Lazy`1.ViaFactory(LazyThreadSafetyMode mode)
--- End of stack trace from previous location ---
   at System.Lazy`1.CreateValue()
   at System.Lazy`1.get_Value()
   at Temporalio.Runtime.TemporalRuntime.get_Default()
   at Temporalio.Client.TemporalConnection.ConnectAsync(TemporalConnectionOptions options)
   at Temporalio.Client.TemporalClient.ConnectAsync(TemporalClientConnectOptions options)
   at NotificationHelper.Service.NotificationSendService.SendSMS(String toPhoneNumber, String messageBody) in /src/common/NotificationHelper/Service/NotificationSendService.cs:line 75
```

I find useful [this issue](https://github.com/dotnet/runtime/issues/53600) on dotnet repo. It says that it is possible to use a windows native function.

#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2023-04-03 12:05:17.000 UTC</summary>

Are you deploying with `temporal_sdk_bridge.dll` instead of `libtemporal_sdk_bridge.so`? You need `libtemporal_sdk_bridge.so`. We run CI against Linux without issue.

Can you provide the _exact_ steps you are taking to build your docker container? Or rather, can you provide a full Dockerfile that replicates this issue?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 13:01:41.000 UTC</summary>

Needs more information (closing, can answer above questions and reopen as needed)

</details>

<details>
<summary><strong>artyomabrahamyan</strong> commented on 2023-10-05 16:06:24.000 UTC</summary>

@cretz 

I have a similar issue when I reference dotnet-sdk package inside Azure Functions hosted on Windows machines.
Using both lazy instantiation or manual ``TemporalClient.ConnectAsync`` gives me 

`Unable to load DLL 'temporal_sdk_bridge' or one of its dependencies: The specified module could not be found. (0x8007007E)
`  error.

However, inside the deployement of my Azure Function I can see runtimes/win-64/native/temporal_sdk_bridge.dll file.


</details>

<details>
<summary><strong>cretz</strong> commented on 2023-10-05 16:33:50.000 UTC</summary>

> However, inside the deployement of my Azure Function I can see runtimes/win-64/native/temporal_sdk_bridge.dll file.

That is where it's supposed to be in the nuspec file, but I believe a built/deployed form would have that unmanaged DLL right alongside the rest of the managed ones.

</details>

<details>
<summary><strong>artyomabrahamyan</strong> commented on 2023-10-05 16:37:45.000 UTC</summary>

Alongside  with the managed DLL's currently there's only a **Temporalio.dll**, both in my  local  and  deployed envs.


</details>

<details>
<summary><strong>cretz</strong> commented on 2023-10-05 16:40:49.000 UTC</summary>

You need `temporal_sdk_bridge.dll` there too (and many other DLLs like `Google.Protobuf.dll`). This should automatically be put into the `bin` by `dotnet build` I believe. This is the case with our https://github.com/temporalio/samples-dotnet which you can try out. You can join us on our public Slack (https://t.mp/slack) in the `#dotnet-sdk` channel or on our forums at https://community.temporal.io/ for more troubleshooting.

</details>


---

<a id="563"></a>

### #563: Use global.json file to centralize SDK version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/563 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2025-11-19 00:31:30.000 UTC (1 months ago) |
| **Updated** | 2025-12-30 20:53:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

There are several places in build pipelines that specify the SDK version and there is no clear documentation as to which version of the SDK should be used to build the .NET projects.

## Proposed Solution

Add a [global.json](https://learn.microsoft.com/en-us/dotnet/core/tools/global-json) file to the repository that specifies the version of the .NET SDK to use. This has the benefit of:
- Removing the need for build pipelines to know which version of the .NET SDK is necessary.
- Having a central location that allow .NET tooling understands how to determine which version of the .NET SDK to use.
- Allow Dependabot to potentially update the .NET SDK version if using the full triplet version.

#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2025-11-19 15:26:18.000 UTC</summary>

Also, if possible to include this anywhere other than the top-level, that'd be ideal. We already have too many top-level files for my liking (I would have liked not to have `omnisharp.json` there but I was disagreed with). It continues to move the README below the fold and make for a bit of an uglier view when arriving at the repo.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-11-19 23:46:27.000 UTC</summary>

> Also, if possible to include this anywhere other than the top-level, that'd be ideal.

There are two classes of implicit references to the global.json that I see that would be used in this repository:
- The `setup-dotnet` GitHub action
- The solution and project files

The GitHub action allows specifying a path to global.json file, so it can be located anywhere in the repository for these.

For the solution and project files, the global.json has to be at some common root of all of those. At this time, that would be the root of the repository. However, if the `tests` directory was moved under the `src` directory, then the global.json file (and likely all of the other .NET files like the editor config, omnisharp, props, etc) could be put under that directory; these are typically looked up recursively from the directory of the solution/project file up to the root of the filesystem.

I'm not certain that's justification enough to shuffle around the source code in the repo though. The number of files that are currently at the root of the repository is not very large and feels less than a typical .NET repository.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-11-20 14:16:11.000 UTC</summary>

Yeah, we don't want to move around the entire source. But we've been operating without this file fine too, so one wonders if it is that required. I do recognize we have fewer top-level files than a typical .NET repo which is very much on purpose.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-01 22:08:14.000 UTC</summary>

**User Experience**
If a person works consistently in the code base, said person probably already knows the requirements for building this repository. As someone newer to this project, I had to search to determine what version of the .NET SDK was necessary before the move to the .NET 10 SDK. Using a global.json file makes it clear as to what version is necessary and provides a user experience when that requirement is not met:

```
Requested SDK version: 10.0.100
global.json file: <path>/temporalio-sdk-dotnet/global.json

Installed SDKs:
8.0.416 [/usr/local/share/dotnet/sdk]

Install the [10.0.100] .NET SDK or update [<path>/temporalio-sdk-dotnet/global.json] to match an installed SDK.

Learn about SDK resolution:
https://aka.ms/dotnet/sdk-not-found
```

**Version Consistency**
Each aspect of the build process doesn't need to understand what is the .NET SDK version that is necessary to use to successfully build the repository. Currently, there are 5 separate `actions/setup-dotnet@v4` task invocations in 4 GitHub workflows that all need to agree on what is the correct version. Using a global.json file, specifying that version should not be necessary.

All of the "native" .NET tooling understands global.json and how to look it up.

**Maintenance**
Next time that .NET SDK needs a new major version bump, there will be fewer files and occurances that would need to be updated. After this type of change, I count two places: the global.json file and the container image specification of the Alpine images.

**Pinning**
In the unlikely event that a new SDK patch breaks the ability to build, using a centralized version allows the repository to be pinned to a specific version to avoid build breaks.

**Dependabot**
While not used currently, dependabot understands the global.json file and can update the SDK version as necessary to make sure that it is not set to a vulnerable version.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-02 13:58:22.000 UTC</summary>

Yeah, I think it's understood why a global.json file has value for _contributors_ and CI, just trying to reduce top-level files for _everyone_ that views this repo (which is a lot more than contributors). Having said that, it's not that big of a deal if you think it's important enough.

</details>


---

<a id="439"></a>

### #439: [Feature Request] Add `ActivityDefinition.CreateWithoutAttribute` helper

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/439 |
| **State** | CLOSED |
| **Author** | DSmith-VERX (D Smith) |
| **Created** | 2025-03-28 15:56:45.000 UTC (9 months ago) |
| **Updated** | 2025-04-10 21:49:39.000 UTC |
| **Closed** | 2025-04-10 21:49:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

The current implementation of activity definitions makes it difficult to define reusable contracts (e.g., common classes that implement the same pattern for 1 or more activities). This is largely because of the `ActivityAttribute`. Without the `sealed` restriction, we would be able to automatically set the `Name` property based on our own internal logic that is based more so on the class name than the method name. 
In current state, every activity method implementation is required to only use the built-in naming strategy or define its own name manually to ensure they don't conflict with other classes that have the same methods.

### Describe the solution you'd like

Removal of the `sealed` keyword on `ActivityAttribute` or an explanation/alternative suggestions for providing activities deterministic names that don't rely on constant/compile-time arguments.


#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2025-03-28 17:35:01.000 UTC</summary>

> explanation

We use `sealed` as recommended by https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1813. We did not disable this analyzer check. As mentioned there, we use things like `GetCustomAttribute` and performance is improved when it is sealed, though it's admittedly negligible.

> alternative suggestions for providing activities deterministic names that don't rely on constant/compile-time arguments.

If you must create activities with names derived at runtime, you can use the `ActivityDefinition.Create` overload that accepts the name and everything. Really the methods with `[Activity]` are just translated to that anyways. The worker activities are just definitions despite helpers we have to extract definitions from attributes via reflection. Does this help?

</details>

<details>
<summary><strong>DSmith-VERX</strong> commented on 2025-03-28 18:37:30.000 UTC</summary>

@cretz Thanks for the follow up. I know that's the recommendation, but it seemed like a good use case for subclassing. I don't expect you all to make any adjustments that'd measurably impact performance.

I attempted to use `ActivityDefinition.Create ` as you suggested, but replicating some of the internal methods seemed like it wouldn't be great for maintainability considering what we're trying to avoid. I am ok with closing this for now, but please consider this for the future. There's so many more things we can do from a generics standpoint if the activity names were a little easier to override.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-28 19:37:55.000 UTC</summary>

👍 I am not sure we want to support subclassing our attributes and so I think CA1813 is reasonable to leave enabled (which breaks compile unless we disable it). For our attributes, we do not recommend subclassing them.

> but replicating some of the internal methods seemed like it wouldn't be great for maintainability considering what we're trying to avoid

We may be able to expose some of these helpers. So here is the logic today:

```csharp
        public static ActivityDefinition Create(MethodInfo method, Func<object?[], object?> invoker)
        {
            var attr = method.GetCustomAttribute<ActivityAttribute>(false) ??
                throw new ArgumentException($"{method} missing Activity attribute");
            if (method.ContainsGenericParameters)
            {
                throw new ArgumentException($"{method} contains generic parameters");
            }
            var parms = method.GetParameters();
            return Create(
                NameFromAttributed(method, attr),
                method.ReturnType,
                parms.Select(p => p.ParameterType).ToArray(),
                parms.Count(p => !p.HasDefaultValue),
                parameters => invoker.Invoke(ParametersWithDefaults(parms, parameters)),
                method);
        }
```

The `NameFromAttributed` sounds like you may not need since you're going to be customizing them. As for `ParametersWithDefaults`, this is a bit of a runtime helper that only applies when using reflection-based invocation because Temporal supports extra declared parameters than what is given and falls back to defaults. We could consider exposing that if really needed though most would expect to have more exact parameters for their need and this is more of a fail-safe for Temporal since we have less control over method signatures than users might.

We would be ok exposing a helper like: `public static ActivityDefinition CreateWithoutAttribute(string? name, MethodInfo method, Func<object?[], object?> invoker)` that does basically everything the `Create` does above except it doesn't try to get the attribute (we have done similarly with `WorkflowSignalDefintion.CreateWithoutAttribute`).

Also what some people do is use a dynamic activity. Each worker can have one `[Activity(Dynamic = true)]` activity that accepts a `IRawValue[] args` parameter. Then it is called for all activity invocations where there isn't an explicitly registered one. You can use `ActivityExecutionContext.Current.Info.ActivityType` to get the name and do whatever you want (`ActivityExecutionContext.Current.DataConverter` can be used to convert `IRawValue` to what you want).

Reactions: ❤️ 1

</details>

<details>
<summary><strong>DSmith-VERX</strong> commented on 2025-03-29 01:48:50.000 UTC</summary>

> We would be ok exposing a helper like: public static ActivityDefinition CreateWithoutAttribute(string? name, MethodInfo method, Func<object?[], object?> invoker) that does basically everything the Create does above except it doesn't try to get the attribute (we have done similarly with WorkflowSignalDefintion.CreateWithoutAttribute).

I'm likely going down the dynamic route for today, but this would be perfect, preferred, and very much appreciated.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-31 14:19:30.000 UTC</summary>

:+1: I have changed the title to reflect that `ActivityDefinition.CreateWithoutAttribute` helper would help. We can have this accept attribute options without the attribute itself, similar to how `Create` works without attribute today, but keeping some of those other values. 

</details>


---

<a id="33"></a>

### #33: How to debug sdk?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/33 |
| **State** | CLOSED |
| **Author** | charzhao |
| **Created** | 2023-03-09 07:22:28.000 UTC (2y 10m ago) |
| **Updated** | 2023-03-11 15:05:00.000 UTC |
| **Closed** | 2023-03-11 15:05:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**I follow your build step as below:**

> Prerequisites:
> 
> [.NET](https://learn.microsoft.com/en-us/dotnet/core/install/)
> [Rust](https://www.rust-lang.org/) (i.e. cargo on the PATH)
> [Protobuf Compiler](https://protobuf.dev/) (i.e. protoc on the PATH)
> This repository, cloned recursively

**But I get below error, is there any thing i should do to let it pass?**

> MSBuild version 17.5.0-preview-23061-01+040e2a90e for .NET
>   正在确定要还原的项目…
>   已还原 C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj (用时 601 ms)。
>   已还原 C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\tests\Temporalio.Tests\Temporalio.Tests.csproj (用时 1.54 sec)。
> EXEC : error : failed to get `temporal-client` as a dependency of package `temporal-sdk-bridge v0.1.0 (C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Tempora
> lio\Bridge)` [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj]
> 
>   Caused by:
>     failed to load source for dependency `temporal-client`
> 
>   Caused by:
>     Unable to update C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Bridge\sdk-core\client
> 
>   Caused by:
>     failed to read `C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Bridge\sdk-core\client\Cargo.toml`
> 
>   Caused by:
>     绯荤粺鎵句笉鍒版寚瀹氱殑璺緞銆?(os error 3)
> C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj(46,5): error MSB3073: 命令“cargo build”已退出，代码为 101。
> C:\Users\jzhao3\.nuget\packages\microsoft.build.tasks.git\1.1.1\build\Microsoft.Build.Tasks.Git.targets(25,5): warning : Could not find file 'C:\Users\jzhao3\OneDrive
> - Tesla\temporal\sdk-dotnet\src\Temporalio\Bridge\sdk-core\.git'. 无法通过源链接获取源代码。 [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj:
> :TargetFramework=netcoreapp3.1]
> C:\Program Files\dotnet\sdk\7.0.201\Microsoft.Common.CurrentVersion.targets(5181,5): error MSB3030: 无法复制文件“C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Tem
> poralio\Bridge\target\debug\temporal_sdk_bridge.dll”，原因是找不到该文件。 [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj::TargetFramework
> =netcoreapp3.1]
> 
> 生成失败。
> 
> C:\Users\jzhao3\.nuget\packages\microsoft.build.tasks.git\1.1.1\build\Microsoft.Build.Tasks.Git.targets(25,5): warning : Could not find file 'C:\Users\jzhao3\OneDrive
> - Tesla\temporal\sdk-dotnet\src\Temporalio\Bridge\sdk-core\.git'. 无法通过源链接获取源代码。 [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj:
> :TargetFramework=netcoreapp3.1]
> EXEC : error : failed to get `temporal-client` as a dependency of package `temporal-sdk-bridge v0.1.0 (C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Tempora
> lio\Bridge)` [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj]
> C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj(46,5): error MSB3073: 命令“cargo build”已退出，代码为 101。
> C:\Program Files\dotnet\sdk\7.0.201\Microsoft.Common.CurrentVersion.targets(5181,5): error MSB3030: 无法复制文件“C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Tem
> poralio\Bridge\target\debug\temporal_sdk_bridge.dll”，原因是找不到该文件。 [C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj::TargetFramework
> =netcoreapp3.1]
>     1 个警告
>     3 个错误
> 

#### Comments (5)

<details>
<summary><strong>charzhao</strong> commented on 2023-03-09 08:08:10.000 UTC</summary>

Now I copy core-sdk source under   "sdk-dotnet\src\Temporalio\Bridge"  solve this issue, but i am not sure it is the best one.

**another issue that prevent me to debug it as below  :**

```
1>EXEC : error : linker `link.exe` not found
1>  |
1>  = note: program not found
1>
1>note: the msvc targets depend on the msvc linker but `link.exe` was not found
1>
1>note: please ensure that Visual Studio 2017 or later, or Build Tools for Visual Studio were installed with the Visual C++ option.
1>
1>note: VS Code is a different product, and is not sufficient.
1>
1>EXEC : error : could not compile `indexmap` due to previous error
1>EXEC : warning : build failed, waiting for other jobs to finish...
1>EXEC : error : could not compile `lock_api` due to previous error
1>EXEC : error : could not compile `log` due to previous error
1>EXEC : error : could not compile `windows_x86_64_msvc` due to previous error
1>EXEC : error : could not compile `futures-core` due to previous error
1>EXEC : error : could not compile `quote` due to previous error
1>EXEC : error : could not compile `parking_lot_core` due to previous error
1>EXEC : error : could not compile `memchr` due to previous error
1>EXEC : error : could not compile `syn` due to previous error
1>EXEC : error : could not compile `proc-macro2` due to previous error
1>EXEC : error : could not compile `winapi` due to previous error
```
**in my computer i have installed vs2019 and vs2022 , according my knowledge c++ build tools has ready for that,  do you have any suggestion about this one?**

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-03-09 12:51:06.000 UTC</summary>

> Now I copy core-sdk source under "sdk-dotnet\src\Temporalio\Bridge" solve this issue, but i am not sure it is the best one.

Yes, from your pasted instructions "cloned recursively".

> in my computer i have installed vs2019 and vs2022 , according my knowledge c++ build tools has ready for that, do you have any suggestion about this one?

I think this means C++ buildtools are not available. See https://stackoverflow.com/questions/55603111/unable-to-compile-rust-hello-world-on-windows-linker-link-exe-not-found. I will make sure to update the build instructions to say they are required.

</details>

<details>
<summary><strong>charzhao</strong> commented on 2023-03-10 02:03:50.000 UTC</summary>

Thanks for your comments, when i install C++ for desktop development those errors go, but i encounter the new issues.

> Compiling temporal-sdk-core v0.1.0 (C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Bridge\sdk-core\core)
> 1>error[E0599]: no method named `update_workflow` found for struct `RetryClient` in the current scope
> 1>   --> src\client.rs:329:53
> 1>    |
> 1>329 |         "UpdateWorkflow" => rpc_call!(client, call, update_workflow),
> 1>    |                                                     ^^^^^^^^^^^^^^^ method not found in `RetryClient<ConfiguredClient<TemporalServiceClient<InterceptedService<temporal_client::metrics::GrpcMetricSvc, ServiceCallInterceptor>>>>`
> 1>
> 1>error[E0599]: no method named `update_workflow` found for struct `ConfiguredClient<TemporalServiceClient<InterceptedService<temporal_client::metrics::GrpcMetricSvc, ServiceCallInterceptor>>>` in the current scope
> 1>   --> src\client.rs:329:53
> 1>    |
> 1>329 |         "UpdateWorkflow" => rpc_call!(client, call, update_workflow),
> 1>    |                                                     ^^^^^^^^^^^^^^^ method not found in `ConfiguredClient<TemporalServiceClient<InterceptedService<temporal_client::metrics::GrpcMetricSvc, ServiceCallInterceptor>>>`
> 1>
> 1>error[E0599]: `Option<temporal_sdk_core::telemetry::metrics::TemporalMeter<'_>>` is not an iterator
> 1>   --> src\client.rs:106:52
> 1>    |
> 1>106 |     let metric_meter = runtime.core.metric_meter().cloned();
> 1>    |                                                    ^^^^^^ `Option<temporal_sdk_core::telemetry::metrics::TemporalMeter<'_>>` is not an iterator
> 1>   --> /rustc/d5a82bbd26e1ad8b7401f6a718a9c57c96905483\library\core\src\option.rs:518:1
> 1>    |
> 1>    = note: doesn't satisfy `_: Iterator`
> 1>    |
> 1>    = note: the following trait bounds were not satisfied:
> 1>            `Option<temporal_sdk_core::telemetry::metrics::TemporalMeter<'_>>: Iterator`
> 1>            which is required by `&mut Option<temporal_sdk_core::telemetry::metrics::TemporalMeter<'_>>: Iterator`
> 1>
> 1>error[E0599]: no variant named `Default` found for enum `EphemeralExeVersion`
> 1>   --> src\testing.rs:239:73
> 1>    |
> 1>239 |                     "default" => ephemeral_server::EphemeralExeVersion::Default {
> 1>    |                                                                         ^^^^^^^ variant not found in `EphemeralExeVersion`
> 1>
> 1>For more information about this error, try `rustc --explain E0599`.
> 1>EXEC : error : could not compile `temporal-sdk-bridge` due to 4 previous errors
> 1>C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\Temporalio.csproj(46,5): error MSB3073: 命令“cargo build”已退出，代码为 101。
> 1>已完成生成项目“Temporalio.csproj”的操作 - 失败。
> 2>------ 已启动生成: 项目: Temporalio.Tests, 配置: Debug Any CPU ------
> 2>CSC : error CS0006: 未能找到元数据文件“C:\Users\jzhao3\OneDrive - Tesla\temporal\sdk-dotnet\src\Temporalio\bin\Debug\netcoreapp3.1\Temporalio.dll”
> 2>已完成生成项目“Temporalio.Tests.csproj”的操作 - 失败。
> ========== 生成: 0 成功，2 失败，0 最新，0 已跳过 ==========
> ========= 生成 开始于 9:34 AM，并花费了 02:33.626 分钟 ========= 

seems like i did not use the right version core-sdk? so here what is the right version, could your help on those information. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-03-10 13:04:24.000 UTC</summary>

Did you clone recursively at the same version that's in here or did you try to clone a different sdk-core version.

Can you attach a log of you running these three commands in a blank directory in order?

```
git clone --recursive https://github.com/temporalio/sdk-dotnet.git
cd sdk-dotnet
dotnet build
```

</details>

<details>
<summary><strong>charzhao</strong> commented on 2023-03-11 15:04:53.000 UTC</summary>

Thanks, It worked now.

</details>


---

<a id="577"></a>

### #577: [Bug] Investigate test host crash flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/577 |
| **State** | CLOSED |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2025-12-12 22:16:08.000 UTC (27 days ago) |
| **Updated** | 2026-01-06 17:17:54.000 UTC |
| **Closed** | 2026-01-06 17:17:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the bug

CI tests on `main` branch have been running into test host process crashes. The following are examples of workflow runs with the crash and their corresponding change:
| Date | Job | Variant | Commit |
|---|---|---|---|
| 2025-12-12 | https://github.com/temporalio/sdk-dotnet/actions/runs/20175327021/job/57921738811 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/79d44c3472bc77fe3e294bf5b9cfe01fdf896527 |
| 2025-12-10 | https://github.com/temporalio/sdk-dotnet/actions/runs/20110892146/job/57707557020 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/2149661d87fb6cf091066d1f6b6056e486696240 |
| 2025-12-02 | https://github.com/temporalio/sdk-dotnet/actions/runs/19900160973/job/57041412266 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/549285ab87773de9120704b788116f957d76b03a |
| 2025-11-17 | https://github.com/temporalio/sdk-dotnet/actions/runs/19445103513/job/55637681567 | macos-intel | https://github.com/temporalio/sdk-dotnet/commit/5161e0bc814baf0e382cc4e80c465c1e3d2d9669 |
| 2025-11-07 | https://github.com/temporalio/sdk-dotnet/actions/runs/19186311432/job/54853416545 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/31e754f863a815cc9563d4c85df69c8426f42aa8 |

The test that was running when the crash occurs is not consistent across runs.

#### Comments (4)

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-18 22:50:20.000 UTC</summary>

The lastest test run exhibiting this issue has one or two threads with the following stack on it, which may be the cause of the crash:

```bash
        Child SP               IP Call Site
0000FF43E2CBD520 0000ff4862c80bdc [InlinedCallFrame: 0000ff43e2cbd520] Temporalio.Bridge.Interop.Methods.temporal_core_worker_complete_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD520 0000ff482abf9078 [InlinedCallFrame: 0000ff43e2cbd520] Temporalio.Bridge.Interop.Methods.temporal_core_worker_complete_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD510 0000FF482ABF9078 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD620 0000FF482ABF2DF8 Temporalio.Bridge.Worker+<CompleteWorkflowActivationAsync>d__18.MoveNext()
0000FF43E2CBD720 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBD760 0000FF482ABF2AC4 Temporalio.Bridge.Worker.CompleteWorkflowActivationAsync(Temporalio.Bridge.Api.WorkflowCompletion.WorkflowActivationCompletion)
0000FF43E2CBD7B0 0000FF482AC7C220 Temporalio.Worker.WorkflowWorker+<HandleCacheEvictionAsync>d__12.MoveNext()
0000FF43E2CBD950 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBD990 0000FF482AC7BC50 Temporalio.Worker.WorkflowWorker.HandleCacheEvictionAsync(Temporalio.Bridge.Api.WorkflowActivation.WorkflowActivation, Temporalio.Bridge.Api.WorkflowActivation.RemoveFromCache)
0000FF43E2CBD9E0 0000FF482ABD3C84 Temporalio.Worker.WorkflowWorker+<HandleActivationAsync>d__11.MoveNext()
0000FF43E2CBE160 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBE1A0 0000FF482ABD3754 Temporalio.Worker.WorkflowWorker.HandleActivationAsync(Temporalio.Bridge.Api.WorkflowActivation.WorkflowActivation)
0000FF43E2CBE1F0 0000FF482ABD3630 Temporalio.Worker.WorkflowWorker+<>c__DisplayClass10_1.<ExecuteAsync>b__0()
0000FF43E2CBE210 0000FF482B16E428 System.Threading.ExecutionContext.RunFromThreadPoolDispatchLoop(System.Threading.Thread, System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 264]
0000FF43E2CBE240 0000FF482B0EEE30 System.Threading.Tasks.Task.ExecuteWithThreadLocal(System.Threading.Tasks.Task ByRef, System.Threading.Thread) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 2346]
0000FF43E2CBE300 0000FF482AB8224C System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1154]
0000FF43E2CBE3C0 0000FF4822546CC4 System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/PortableThreadPool.WorkerThread.cs @ 118]
0000FF43E2CBE4B0 0000FF482B2180E0 System.Threading.Thread.StartCallback()
0000FF43E2CBE6B8 0000ff486296b444 [DebuggerU2MCatchHandlerFrame: 0000ff43e2cbe6b8]
```

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-19 06:30:39.000 UTC</summary>

If I debugged this correctly, the SIGSEGV occurs at https://github.com/temporalio/sdk-core/blob/master/crates/sdk-core-c-bridge/src/lib.rs#L39. In the dump that I debugged, data is pointing to an invalid memory address (probably use-after-free issue).

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-19 13:33:39.000 UTC</summary>

tldr: We should stop freeing using destructors for `Scope` and `ByteArrayRef`. We should only use `Dispose` for both (and not call from destructors).

---

Reviewing the code, I can't see how at runtime the byte array would point to an invalid place since it's pinned .NET side for the life of the C call.

EDIT: After some searching...

However, I do wonder about the lifetime of the static `ByteArrayRef.Empty` on process shutdown. I wonder if it's getting its destructor called while in use on the C side. Note that `Scope.ByteArray` does not add `ByteArrayRef.Empty` to `byteArrayRefs` because we figured the pointer would be stable for the life of the process, but I believe .NET does run GC/destructors for statics on process shutdown. If you can reliably replicate, try adding the `Empty` to `byteArrayRefs` and see if it changes anything.

One reason why I think this may not be the case is that I cannot see a situation where `temporal_core_worker_complete_workflow_activation` would ever get an empty byte array (it should always be a proto with at least the run ID.

EDIT: After some searching...

But now, the more I think about it, the more I think process shutdown in C# can just run destructors even for referenced objects which will free memory for all byte array refs, not just empty ones. If you can reliably replicate, may be worth seeing if we can track when pointers are freed compared to when they are accessed by Rust. Or maybe intentionally leak the memory just to confirm it is our byte array destructor causing the issue (and maybe for an actual fix we can intentionally leak if we know we're in process shutdown situation).

EDIT: After some searching...

The more I dig through CLR stuff, the more I think this statement by ChatGPT is our issue:

> A finalizer must never release native-visible resources whose premature release can crash the process.

So I wonder if we should stop freeing in destructors and only free on dispose explicitly (and don't call dispose from destructors). This is called out at https://learn.microsoft.com/en-us/dotnet/standard/native-interop/best-practices:

> ❌ AVOID finalizers to manage lifetime of objects that encapsulate unmanaged resources. For more information, see [Implement a Dispose method](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose).

If this were process shutdown related, it would fit with it mostly only occurring in tests and not reported during normal runtime use by users.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-20 00:32:34.000 UTC</summary>

Managed call stack from newer dump:

```
OS Thread Id: 0x1e2f (14)
        Child SP               IP Call Site
0000FF3C9BFFDA40 0000ff410d5a7b74 [InlinedCallFrame: 0000ff3c9bffda40] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDA40 0000ff40d55804a0 [InlinedCallFrame: 0000ff3c9bffda40] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDA30 0000FF40D55804A0 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDB20 0000FF40D5592FD0 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
0000FF3C9BFFDC30 0000FF40D5AA323C System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF3C9BFFDC70 0000FF40D558F024 Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
0000FF3C9BFFDCB0 0000FF40D558A9A4 Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
0000FF3C9BFFDEC0 0000FF40D5568768 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
0000FF3C9BFFDF10 0000FF40D5AE44B8 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
0000FF3C9BFFDF80 0000FF40D5AE52A4 System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 743]
0000FF3C9BFFDFC0 0000FF40D55E50D8 System.Threading.Tasks.Task.RunContinuations(System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 3480]
0000FF3C9BFFE070 0000FF40D5AEE948 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].SetResult(System.__Canon) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 478]
0000FF3C9BFFE0A0 0000FF40D5593234 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
0000FF3C9BFFE1B0 0000FF40D5568768 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
0000FF3C9BFFE200 0000FF40D5AF3928 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon, System.Private.CoreLib],[System.__Canon, System.Private.CoreLib]].MoveNext() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 350]
0000FF3C9BFFE260 0000FF40D5B143B4 System.Threading.Tasks.AwaitTaskContinuation.System.Threading.IThreadPoolWorkItem.Execute() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 647]
0000FF3C9BFFE300 0000FF40D55662D0 System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1154]
0000FF3C9BFFE3C0 0000FF40CCF26CC4 System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/PortableThreadPool.WorkerThread.cs @ 118]
0000FF3C9BFFE4B0 0000FF40CCEFB690 System.Threading.Thread.StartCallback()
0000FF3C9BFFE6B8 0000ff410d29b444 [DebuggerU2MCatchHandlerFrame: 0000ff3c9bffe6b8]
```

Native call stack is:
```
(gdb) bt
#0  0x0000ff410d5a7b74 in __GI___wait4 (pid=9865, stat_loc=0xff40b868ec04, options=0, usage=0x0) at ../sysdeps/unix/sysv/linux/wait4.c:30
#1  0x0000ff410d2d9dfc in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#2  0x0000ff410d2db1bc in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#3  0x0000ff410d2b7ea8 in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#4  0x0000ff410d2b72e4 in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#5  <signal handler called>
#6  0x0000ff3c9123008c in __aarch64_ldadd8_relax () at ./lib/builtins/aarch64/lse.S:250
#7  0x0000ff3c8fef7644 in core::sync::atomic::atomic_add<usize, usize> (dst=0xff3c00300034) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/core/src/sync/atomic.rs:3983
#8  core::sync::atomic::AtomicUsize::fetch_add (self=0xff3c00300034) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/core/src/sync/atomic.rs:3165
#9  alloc::sync::{impl#30}::clone<temporalio_sdk_core::worker::Worker, alloc::alloc::Global> (self=0xff3c94041820) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/alloc/src/sync.rs:2198
#10 0x0000ff3c8f6e8020 in temporalio_sdk_core_c_bridge::worker::temporal_core_worker_poll_workflow_activation (worker=0xff3c94041810, user_data=0x0, callback=0xff40cdd8bcc0) at crates/sdk-core-c-bridge/src/worker.rs:683
#11 0x0000ff40d55804a0 in ?? ()
#12 0x0000ff3c9bffe6b8 in ?? ()
Backtrace stopped: previous frame inner to this frame (corrupt stack?)
```

Frame 10 is:
```
(gdb) frame 10
#10 0x0000ff3c8f6e8020 in temporalio_sdk_core_c_bridge::worker::temporal_core_worker_poll_workflow_activation (worker=0xff3c94041810, user_data=0x0, callback=0xff40cdd8bcc0) at crates/sdk-core-c-bridge/src/worker.rs:683
683         let core_worker = worker.worker.as_ref().unwrap().clone();
```

Likely cause is that PollWorkflowActivationAsync is called after the Worker has been disposed.

</details>


---

<a id="553"></a>

### #553: [Feature Request] OperatorService (RPC) and WorkflowService (RPC) members are marked virtual or inherit from interface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/553 |
| **State** | OPEN |
| **Author** | kimpenhaus (Marcus Kimpenhaus) |
| **Created** | 2025-10-29 12:21:36.000 UTC (2 months ago) |
| **Updated** | 2025-10-29 13:18:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

We are using the ITemporalClient -> OperatorService and WorkflowService to create/make modifications on Temporal namespaces from within a Kubernetes operator. To verify our logic runs as intended we would like to write unit test (we are using NSubstitute). To setup and mock each use-case we need to substitute the corresponding services e.g OperatorService (ITemporalClient and ITemporalConnection are already interfaces).

To substitute the intended methods they need to be either virtual or come from an interface.

### Describe the solution you'd like

From what I saw you already did something similar in #419 - so marking the methods in OperatorService.Rpc and WorkflowService.Rpc virtual would be a good enough solution,  extracting interfaces would maybe be even better.

#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2025-10-29 12:48:37.000 UTC</summary>

> so marking the methods in OperatorService.Rpc and WorkflowService.Rpc virtual would be a good enough solution

We would rather not mark every method in there as virtual unless we really have to. We usually discourage mocking these kinds of things instead of using an ephemeral dev server in your tests (e.g. `Temporalio.Testing.WorkflowEnvironment.StartLocalAsync`) since that will truly test your calls as opposed to assuming how Temporal server behavior is. Regardless, all of these calls delegate to the abstract `InvokeRpcAsync`, which is what others have used to mock/impl when they must, does that work for you?

</details>

<details>
<summary><strong>kimpenhaus</strong> commented on 2025-10-29 12:52:12.000 UTC</summary>

@cretz thanks for getting back such quickly. could you point me to a sample for both:

- the using of an ephemeral dev server 
- mock of the `InvokeRpcAsync`

that would be highly appreciated and I could check if that will already help us - thanks!

</details>

<details>
<summary><strong>kimpenhaus</strong> commented on 2025-10-29 13:03:37.000 UTC</summary>

I checked with the `InvokeRpcAsync`: main problem with [NSubstitute](https://github.com/nsubstitute/NSubstitute) is that it only supports public api and as far as I can see `InvokeRpcAsync` is `protected` so I don't think this will work out.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-10-29 13:16:01.000 UTC</summary>

> the using of an ephemeral dev server

All tests in samples that need servers use https://github.com/temporalio/samples-dotnet/blob/main/tests/WorkflowEnvironment.cs with xunit. But you can simply use it in individual tests like https://github.com/temporalio/samples-dotnet/blob/4e185e8917166ace5875f46ff9c1e913e63bf910/tests/WorkflowUpdate/WorkflowUpdateTests.cs#L17-L42. The client from that environment has the operator service working/available.

If you need general support or have questions about how to use certain SDK aspects, feel free to join us on the `#dotnet-sdk` channel on [Slack](https://t.mp/slack) or [the forums](https://community.temporal.io/).

> main problem with [NSubstitute](https://github.com/nsubstitute/NSubstitute) is that it only supports public api and as far as I can see InvokeRpcAsync is protected so I don't think this will work out.

That seems to be a limitation of that one library. But can't you do something like:

```csharp
    public abstract class MyWorkflowService : WorkflowService
    {
        protected override Task<T> InvokeRpcAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null) =>
            InvokeRpcPublicAsync(rpc, req, resp, options);

        public abstract Task<T> InvokeRpcPublicAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null)
            where T : IMessage<T>;
    }
```

or

```csharp
    public class MyWorkflowService(
        Func<string, IMessage, MessageParser, RpcOptions?, Task<IMessage>> OnInvoke) : WorkflowService
    {
        protected override async Task<T> InvokeRpcAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null) =>
            (T)await OnInvoke(rpc, req, resp, options);
    }
```

or similar to make it suitable?

</details>


---

<a id="526"></a>

### #526: [Bug] KeywordList cannot be resolved as part of WorkflowExecutionDescription

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/526 |
| **State** | CLOSED |
| **Author** | petrkoutnycz (Petr Koutny) |
| **Created** | 2025-09-25 12:53:35.000 UTC (3 months ago) |
| **Updated** | 2025-09-26 12:27:35.000 UTC |
| **Closed** | 2025-09-25 20:03:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am trying to get a value of a custom search attribute of a `KeywordList` type once the workflow is completed.

### Describe the bug

When executing a code as following, the `TryGetValue` returns `false` even the value is there, but of a `List<object>` type.

```
var description = await workflowHandle.DescribeAsync();

if (description.TypedSearchAttributes.TryGetValue(MySearchAttributes.PetNames, out var petNames))
{}
```

### Minimal Reproduction

Can be found in this commit: https://github.com/temporalio/samples-dotnet/commit/9c72c609b02578209749b661535518c869118bff

### Environment/Versions

- OS and processor: M4 Mac
- Temporal Version: 1.7.0, 1.8.0
- Are you using Docker or Kubernetes or building Temporal from source? No



#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2025-09-25 16:21:10.000 UTC</summary>

Thanks! Looking into this...

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-25 18:34:49.000 UTC</summary>

Ok, fixed in #529, thanks for the report! Also helped us recognize a test coverage gap because of a leftover TODO.

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2025-09-26 05:21:44.000 UTC</summary>

Wow, that was fast, thank you! Btw when do you expect this to release?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-26 12:27:11.000 UTC</summary>

Maybe as soon as today, it just happens to have gotten in just in time. But in general we don't have specific timelines for release.

Reactions: 🎉 1

</details>


---

<a id="445"></a>

### #445: [Bug] Go SDK Child Workflow returning no values causes await to hang in .NET

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/445 |
| **State** | CLOSED |
| **Author** | sgeraud (Stephane Geraud) |
| **Created** | 2025-04-08 09:28:24.000 UTC (9 months ago) |
| **Updated** | 2025-04-10 17:43:55.000 UTC |
| **Closed** | 2025-04-10 17:43:55.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I am trying to execute a Go Child Workflow from a .NET Parent Workflow and wait for its completion before moving forward with the rest of the code.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

In the .NET Parent Workflow, awaiting for the completion of a Go Child Workflow will hang if this Child Workflow does not return a value. The rest of the code won't be executed.

It looks like there is an interaction issue between Workflows using different SDKs Go and .NET, because if both Parent and Child Workflows are using the .NET SDK, there won't be any issue.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

Let's take a .NET Workflow that is doing two simple things:

1. Call a Child Workflow
2. Pause the execution using a Timer

```csharp
[Workflow]
public class SampleParentWorkflow
{
    [WorkflowRun]
    public async Task RunAsync()
    {
        await Workflow.ExecuteChildWorkflowAsync(
            "SampleChildWorkflow",
            [],
            new ChildWorkflowOptions
            {
                Id = "example",
            });

        await Workflow.DelayAsync(TimeSpan.FromSeconds(5));
    }
}
```

Let's define `SampleChildWorkflow` as a very simple Go Workflow. It does nothing, and does not return any error.

```go
func SampleChildWorkflow(ctx Workflow.Context) error {
	return nil
}
```

If we run the `SampleParentWorkflow` Workflow, the Child Workflow will complete successfully but the `DelayAsync` will never be executed.

Here is the value of the _Child Workflow Execution Completed_ in the Event History:

```json
{
  "eventId": "10",
  "eventTime": "2025-04-07T16:13:29.783225435Z",
  "eventType": "ChildWorkflowExecutionCompleted",
  "taskId": "1050489",
  "childWorkflowExecutionCompletedEventAttributes": {
    "namespace": "default",
    "namespaceId": "13bf8056-cbc3-4fb1-87d8-44e4baa6a3a5",
    "WorkflowExecution": {
      "WorkflowId": "d5fd70a5-faf4-4f19-9148-9f748c58274a-sample",
      "runId": "5b932430-6e56-4b81-85e3-ba6409994820"
    },
    "WorkflowType": { "name": "SampleChildWorkflow" },
    "initiatedEventId": "5",
    "startedEventId": "6"
  },
  "links": []
}
```

Please note that `childWorkflowExecutionCompletedEventAttributes.result.payloads` is missing.

Let's update the Child Workflow to return a `nil` value alongside with an eventual error:

```go
func SampleChildWorkflow(ctx Workflow.Context) ([]int, error) {
	return nil, nil
}
```

In the Event History, `childWorkflowExecutionCompletedEventAttributes.result.payloads` now equals `[null]`.

Finally, let's update the Child Workflow to return a non-null value. I chose `struct{}{}` because it is the smallest value we can return, but we would observe the same behavior with any other non-null value.

```go
func SampleChildWorkflow(ctx Workflow.Context) (struct{}, error) {
	return struct{}{}, nil
}
```

If we run again the `SampleParentWorkflow` Workflow, the Child Workflow will complete successfully and the `DelayAsync` will now be executed as expected.

In the Event History, `childWorkflowExecutionCompletedEventAttributes.result.payloads` now equals `[{}]`.

If a Parent Workflow calls a similar child Workflow, with both Parent and Child Workflows using the .NET SDK, there won't be any issue.
We would see `childWorkflowExecutionCompletedEventAttributes.result.payloads` set to `[{}]` in the Event History when the .NET Child Workflow does not return any value.

It looks like the Go SDK is omitting the `result` field when the Child Workflow return a `nil` value and that the .NET SDK is not expecting this field to be missing, which prevents the async task to complete.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux amd64
- Temporal Version: `temporalio/server 1.27.2.0`, `sdk-dotnet 1.4.0`, `sdk-go 1.33.1`
- Are you using Docker or Kubernetes or building Temporal from source? Temporal on Kubernetes, and also reproducible locally using `temporalio/cli 1.3.0`

### Additional context

<!-- Add any other context about the problem here. -->

Edited: It was initially mentioned that the problem occurs with a nil value, whereas it actually happens when the return value is missing.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-04-08 12:54:41.000 UTC</summary>

> I am trying to execute a Go Child Workflow from a .NET Parent Workflow

May be obvious, but you need to make sure the Go worker and .NET worker are on different task queues.

> It looks like the Go SDK is omitting the result field when the Child Workflow return a nil value and that the .NET SDK is not expecting this field to be missing, which prevents the async task to complete.

This is my guess too. Looking at the code, we are also not properly presenting the internal errors here. We will fix both of these issues, thanks for reporting!

Reactions: 👍 1

</details>

<details>
<summary><strong>sgeraud</strong> commented on 2025-04-08 14:21:58.000 UTC</summary>

Thank you for your quick response!

> May be obvious, but you need to make sure the Go worker and .NET worker are on different task queues.

Yes, I confirm they are of different task queues.

</details>


---

<a id="408"></a>

### #408: [Feature Request] Include musl-based build in NuGet package

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/408 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-05 22:37:42.000 UTC (11 months ago) |
| **Updated** | 2025-04-10 17:28:37.000 UTC |
| **Closed** | 2025-04-10 17:28:37.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/594


---

<a id="363"></a>

### #363: [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/363 |
| **State** | OPEN |
| **Author** | tdg5 (Danny Guinther) |
| **Created** | 2024-11-05 15:39:28.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-12 15:38:03.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

Interceptors offer a means of handling cross-cutting concerns in a way that insulates any given Activity instance from those cross-cutting concerns. However, if a given cross-cutting concern depends on a service provided by the scoped `IServiceProvider` instance, this insolation can't be maintained because only Activities can have dependencies injected via constructor injection.

As far as I understand things, there's no philosophical reason an `ActivityInboundInterceptor` couldn't have the scoped `IServiceProvider` instance made available when the `ExecuteActivityAsync` method is invoked.

### Describe the solution you'd like

Constructor injection wouldn't work for `ActivityInboundInterceptor` because the interceptors don't share the same lifetime as an Activity. However, I believe that when `ExecuteActivityAsync`, it should be in the context of an Activity. I'm not looking for method signature injection, I'd be satisfied with just getting access to the `IServiceProvider` instance and having to pull out dependencies by other means.

That said, this is all complicated by the fact that `Temporalio.Worker.Interceptors` is agnostic of `IServiceProvider` and or `Microsoft.Extensions.DependencyInjection` and the creation of the scoped `IServiceProvider` is locked up in [`Temporalio.Extensions.Hosting.ServiceProviderExtensions`](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/ServiceProviderExtensions.cs#L66-L70).

Something like ASP.NET's [`HttpContextAccessor`](https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http/src/HttpContextAccessor.cs) could be repurposed as a ServiceLocator for the scoped `IServiceProvider` instance, but it's not so elegant.

### Additional context

I'm happy to help make this happen if there's a path forward, but I don't see an implementation I can obviously make a pull request from.


#### Comments (2)

<details>
<summary><strong>tdg5</strong> commented on 2024-11-05 18:39:45.000 UTC</summary>

Thinking about this some more, I think I'd vote against changing the method signature of `ExecuteActivityAsync`. I think some mechanism completely separate from the `ActivityInboundInterceptor` is the cleanest (er, decoupled?) option that allows for keeping the knowledge about `IServiceProvider` hidden from the more agnostic portions of `Temporalio`.

I opened https://github.com/temporalio/sdk-dotnet/pull/364 with a sketch for discussion.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-11-12 15:38:02.000 UTC</summary>

:+1: Discussing on PR.

</details>


---

<a id="282"></a>

### #282: [Feature Request] Accept search attributes in dev server startup

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/282 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-20 20:34:23.000 UTC (1y 6m ago) |
| **Updated** | 2025-01-24 22:10:21.000 UTC |
| **Closed** | 2025-01-24 22:10:21.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/494. With https://github.com/temporalio/cli/pull/593 deployed, users should be allowed to set search attributes in dev server option that translate to `--search-attribute` calls.



---

<a id="169"></a>

### #169: [Bug] Forcing .net 7 when .net 6 is in LTS

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/169 |
| **State** | CLOSED |
| **Author** | rsr-maersk (Rik Svendsen Rose) |
| **Created** | 2023-12-29 16:06:53.000 UTC (2 years ago) |
| **Updated** | 2024-02-12 13:44:24.000 UTC |
| **Closed** | 2024-02-12 13:44:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi

Thanks for the package. Qhy have you not build in .net 6 LTS?

System.Diagnostics.DiagnosticSource .net 7 is renowned for giving net 6 issues.

https://github.com/temporalio/sdk-dotnet/blob/b64dd6def30060ca29aabd3bfec70848ac36d052/src/Temporalio.Extensions.OpenTelemetry/Temporalio.Extensions.OpenTelemetry.csproj#L16


https://github.com/temporalio/sdk-dotnet/blob/b64dd6def30060ca29aabd3bfec70848ac36d052/src/Temporalio.Extensions.Hosting/Temporalio.Extensions.Hosting.csproj#L15

Can we build net6 packages? I can make the csproj spit it all out :-)

![image](https://github.com/temporalio/sdk-dotnet/assets/76153851/627e1827-e116-42f3-9775-ddb88d4ea7e3)


#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2024-01-03 16:18:34.000 UTC</summary>

> System.Diagnostics.DiagnosticSource .net 7 is renowned for giving net 6 issues.

Can you clarify the issues? The .NET version is unrelated to that dependency version. We support many versions for this extension, see https://www.nuget.org/packages/Temporalio.Extensions.Hosting#supportedframeworks-body-tab. And that dependency supports .NET 6 and many others, see https://www.nuget.org/packages/System.Diagnostics.DiagnosticSource#supportedframeworks-body-tab. In fact, our test case project is `net6.0` and tests this project with these dependencies.

</details>

<details>
<summary><strong>rsr-maersk</strong> commented on 2024-01-04 13:08:32.000 UTC</summary>

Thanks for answer @cretz .
It does give a lot of issues with AF Funcs.
When on net 6, it is best to keep everything on .net6. Trust me, you think this ddl and that dll are safe, then it ends up using something else, and no longer safe.

My recommendation. keep 6 on 6, 7 on 7 and 8 on 8 ;-)

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-04 13:21:01.000 UTC</summary>

>  It does give a lot of issues with AF Funcs.

What are AF Funcs? Can you show an example of such an issue? Our unit tests are all on .NET 6 using these 7.x libraries. A unit test on .NET 6 that would break here would help us know if we need to downgrade.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-02-12 13:44:23.000 UTC</summary>

(closing pending response, but feel free to update if there is more info or a standalone replication)

</details>


---

<a id="141"></a>

### #141: [Feature Request] Allow dynamic ssl/tls on the client.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/141 |
| **State** | CLOSED |
| **Author** | robcao (Robert Cao) |
| **Created** | 2023-10-13 23:17:56.000 UTC (2y 2m ago) |
| **Updated** | 2025-02-04 18:13:05.000 UTC |
| **Closed** | 2025-02-04 18:12:57.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

We have the following business case:

Due to compliance and security requirements, our TLS certificates are short lived (a couple of hours). Our Temporal workers live longer than these TLS certificates.

We would like the ability to dynamically refresh the TLS options on the Temporal client instead of having to restart the Temporal worker itself if the worker has outlived the original certificate.

As I understand, the gRPC connection itself lives in unmanaged rust, so traditional .NET approaches to dynamic certificate refresh such as https://github.com/dotnet/runtime/issues/52779 won't be applicable.


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Perhaps a variant of the `TlsOptions` class [here](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Client/TlsOptions.cs), that accepts a callback instead of static values.

```
public class DynamicTlsOptions
{
     public Func<TlsCallbackContext, Task<TlsOptions>> TlsOptionsCallback { get; set; }

     public TimeSpan MinimumGuaranteedCallbackFrequency { get; set; }
}
```

It would be preferable for our use case if this callback was asynchronous, but a synchronous callback would work just fine.

For our use case, we don't require any metadata or context available to us from Temporal in the callback, provided that there are guarantees about the frequency of how often the callback is invoked (we don't necessarily need this to be a configurable setting).

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-10-16 12:07:48.000 UTC</summary>

Yes, this is something we have discussed but it would be more push based than pull based. This is dependent on https://github.com/temporalio/sdk-core/issues/477.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:12:57.000 UTC</summary>

This has been completed a while ago. New clients can be created with different TLS options and can be set on a worker to have successive client calls from the worker use the newer client.

</details>


---

<a id="66"></a>

### #66: [Question] Action Dependency Injection

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/66 |
| **State** | CLOSED |
| **Author** | m-wild (Michael Wildman) |
| **Created** | 2023-05-12 01:18:43.000 UTC (2y 8m ago) |
| **Updated** | 2023-06-28 13:30:39.000 UTC |
| **Closed** | 2023-06-28 13:30:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Is there any advice for how to perform dependency injection - particularly services with a Scoped lifetime - with the .NET SDK?

It appears the workflow instance is created from the Type using `Activator.CreateInstance(Type)`.
This works fine for the workflow as it must be deterministic.

However, it appears the responsibility for creating the Activity instance is not part of the SDK, Activity Delegates must be passed to the TemporalWorkerOptions.
For the simple demo code this is fine


```cs
var activities = new MyActivities();

using var worker = new TemporalWorker(client,
    new()
    {
        Activities = { activities.SayHello },
        ...
    });
```

But what if MyActivites has dependencies registered in the DI container with a Scoped lifetime?

The only thing I can think is to manually inject the IServiceProvider into the activity class and handle the service scope manually in user code.

```cs
// Worker.cs ----------------
public class Worker : BackgroundService
{
    private readonly IServiceProvider serviceProvider; // from DI container

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var activities = new MyActivities(serviceProvider);

        using var worker = new TemporalWorker(client,
            new()
            {
                Activities = { activities.SayHello },
                ...
            });
    }
}

// MyActivities.cs ----------------
public class MyActivities
{
    private readonly IServiceProvider serviceProvider;

    public MyActivities(IServiceProvider serviceProvider) => this.serviceProvider = serviceProvider;

    [Activity]
    public string SayHello(string name)
    {
        using var scope = serviceProvider.CreateScope();
        var greeter = scope.ServiceProvider.GetRequiredService<IGreeter>();

        return greeter.Greet(name);
    }
}
```

Does this seem okay? 

Is the SDK planning to integrate with Microsoft.Extensions.DependencyInjection?
I could imagine a solution would be passing the IServiceProvider to the TemporalWorkerOptions and letting the SDK manage the activity instance lifecycle, creating and disposing them as required.

```cs
using var worker = new TemporalWorker(client,
    new()
    {
        Activities = { typeof(MyActivities) }, // can just pass the Activity type, instance will be created when needed
        ServiceProvider = serviceProvider, // used to resolve Activity instances
        ...
    });
```



#### Comments (4)

<details>
<summary><strong>devbased</strong> commented on 2023-05-12 13:40:23.000 UTC</summary>

This is an expected feature. Currently, you can use https://github.com/devbased/temporal-activity-gen or do something similar. Additionally, according to @cretz, DI activity can be implemented using Interceptors, although I'm not entirely sure how to do it, and there is no example of that created yet (see: https://github.com/temporalio/samples-dotnet/issues/9).

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-12 16:02:43.000 UTC</summary>

:+1: to what @devbased said. As part of #62 I will be reworking activity definitions so technically a factory can be provided for activity classes (so you can use a service provider to create one) and I will be making the sample reflect that when released (https://github.com/temporalio/samples-dotnet/issues/9 as linked before).

Reactions: 👍 2

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-30 14:58:45.000 UTC</summary>

I have created a sample at https://github.com/temporalio/samples-dotnet/pull/16. Review welcome. Still trying to avoid infecting this project with assumptions of DI, but we may be able to do some, see that PR for options.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-06-28 13:30:38.000 UTC</summary>

We now have a dependency injection extension as part of #92.

Reactions: 🎉 1

</details>


---

<a id="63"></a>

### #63: [Bug] Local time skipping test server throws `Event set unexpectedly empty`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/63 |
| **State** | CLOSED |
| **Author** | plaisted (Michael Plaisted) |
| **Created** | 2023-05-06 22:56:00.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-25 20:18:57.000 UTC |
| **Closed** | 2023-05-25 20:18:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Use local test server with time skipping to unit test workflows.

### Describe the bug

When attempting to run tests using the local test server the workflow throws `System.InvalidOperationException : Event set unexpectedly empty` on calling `GetResultAsync()` on the `WorkflowHandle`.  Additionally calls to `WorkflowEnvironment.DelayAsync()` wait real time which I would expect to finish immediately and advance worfklow time. 

### Minimal Reproduction

```csharp
public class WorkflowTests
{
    private static TemporalWorker GetWorker(IWorkerClient client)
    {
        return new TemporalWorker(client, new()
        {
            TaskQueue = $"tq-{Guid.NewGuid()}",
            Activities = { },
            Workflows = { typeof(ExampleWorkflow) },
        });
    }
    [Fact]
    public async Task It_Dedups_Inside_Window()
    {
        await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
        
        using var worker = GetWorker(env.Client);

        var id = "unit-test";

        await worker.ExecuteAsync(async () =>
        {
            var wfA = await StartWorkflow("A");

            // this waits real time, not skipped,
            // I have tried combinations of time skipping or WithAutoTimeSkippingDisabled for the call but always get a real wait
            await env.DelayAsync(TimeSpan.FromSeconds(10));  

            var wfB = await StartWorkflow("B");
            
            var rA = await wfA.GetResultAsync(); // this throws `System.InvalidOperationException : Event set unexpectedly empty`
            var rB = await wfB.GetResultAsync();

            Assert.Equal(rA, rB);
        });

       

        async Task<WorkflowHandle<string>> StartWorkflow(string req)
        {
            return await env!.Client.StartWorkflowAsync(
                ExampleWorkflow.Ref.RunAsync,
                (string?)null,
                new WorkflowOptions
                {
                    ID = "dedup:" + id,
                    TaskQueue = "demo-tasks",
                    StartSignal = "AddValue",
                    StartSignalArgs = new List<object> { req }
                });
        }
    }
}


[Workflow]
public class ExampleWorkflow
{
    private static TimeSpan DedupDelay = TimeSpan.FromSeconds(15);
    private static TimeSpan MaxDelay = TimeSpan.FromSeconds(30);
    public static readonly ExampleWorkflow Ref = WorkflowRefs.Create<ExampleWorkflow>();

    private string? value = null;
    private DateTime lastMessage;

    [WorkflowRun]
    public async Task<string> RunAsync(string? trigger)
    {
        var firstTime = lastMessage = Workflow.UtcNow;
        value = trigger;

        var max = Workflow.DelayAsync(MaxDelay);

        while (true)
        {
            var initial = lastMessage;
            var waitWindow = DedupDelay - (Workflow.UtcNow - lastMessage);
            Workflow.Logger.LogInformation("[{EventName}] {Seconds} seconds", "DedupWait", waitWindow.TotalSeconds);
            var window = Workflow.DelayAsync(waitWindow);
            var finished = await Task.WhenAny(window, max);
            if (finished == max)
            {
                Workflow.Logger.LogInformation("[{EventName}]", "MaxDurationExceeded");
                break;
            }
            else if (initial == lastMessage)
            {
                Workflow.Logger.LogInformation("[{EventName}]", "WaitPeriodFinished");
                break;
            }
        }

        if (value == null)
        {
            throw new ApplicationException("No value");
        }
        var used = value;
        value = null;

        // simiulate work
        await Workflow.DelayAsync(5000);

        // catch signal that happend when work happening
        if (value != null)
        {
            Workflow.Logger.LogInformation("[{EventName}] Starting new WF", "ExtraMessages");
            throw Workflow.CreateContinueAsNewException(Ref.RunAsync, value);
        }
        return used;
    }

    [WorkflowSignal]
    public Task AddValue(string signal)
    {
        Workflow.Logger.LogInformation("[{EventName}] {DateTime}", "NewValue", Workflow.UtcNow);
        value = signal;
        lastMessage = Workflow.UtcNow;
        return Task.CompletedTask;
    }
}
```

### Environment/Versions

- Windows 11, x64
- Temporal Version: 0.1.0-alpha4 (sdk-dotnet)


#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2023-05-08 12:03:27.000 UTC</summary>

Thanks! I will replicate and try to fix soon.

>  // this waits real time, not skipped,
>  // I have tried combinations of time skipping or WithAutoTimeSkippingDisabled for the call but always get a real wait

We only auto-skip when you wait on workflow result and no activities are running. If you want to start auto-skipping, start the `GetResultAsync` earlier (can be backgrounded or whatever). You can call `DelayAsync` on the env to manually skip time though.

</details>

<details>
<summary><strong>plaisted</strong> commented on 2023-05-08 17:43:43.000 UTC</summary>

Okay, that makes sense. The `DelayAsync` on env was waiting the real time in this case so may be a problem there as well.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-08 18:08:08.000 UTC</summary>

:+1: Will attempt to replicate then fix (may be a bit due to conflicting priorities)

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-25 19:14:40.000 UTC</summary>

The unset-event issue will be solved with #78, so I have opened #77 for the fact that delay is real time and not properly skipping.

</details>


---

<a id="585"></a>

### #585: Nexus operation ignores ScheduleToCloseTimeout and retries every 10 seconds

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/585 |
| **State** | CLOSED |
| **Author** | neeraj-mathur |
| **Created** | 2026-01-05 19:11:12.000 UTC (3 days ago) |
| **Updated** | 2026-01-06 12:17:22.000 UTC |
| **Closed** | 2026-01-06 12:17:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello Team,

I am attempting to implement a caller Workflow that invokes a long-running Nexus operation with a 2-hour timeout. In the code below, I have explicitly configured the Nexus operation using:

ScheduleToCloseTimeout = TimeSpan.FromHours(2)

However, during execution, I observe in the Temporal UI that the Nexus operation is being retried approximately every 10 seconds. Additionally, the invoked Nexus operation logs a warning with the message:

“Nexus task not found on completion.”

This behavior suggests that the configured long Nexus operation timeout is not being honored as expected.

Could someone please help identify what is incorrect or missing in the code that would cause the Nexus operation to retry at short intervals instead of respecting the configured 2-hour timeout?


`WARN temporal_sdk_core::worker::nexus: Nexus task not found on completion. This may happen if the operation has already been cancelled but completed anyway. details=Status { code: NotFound, message: "Nexus task not found or already expired", details: b"\x08\x05\x12'Nexus task not found or already expired\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }`


```
using Adapter.DataIngestor;
using Adapter.DataIngestor.Models;
using System;
using System.IO;
using System.Threading.Tasks;
using Temporalio.Client;
using Temporalio.Worker;
using Xunit;

namespace Adapter.DataIngestor.Tests;

/// <summary>
/// Simple Nexus Caller Workflow Test - following the pattern from:
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Program.cs
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/HelloCallerWorkflow.workflow.cs
/// </summary>
public class SimpleNexusCallerWorkflowTest : IAsyncLifetime
{
    private TemporalClient? _temporalClient;
    private const string TemporalHost = "localhost:7233";
    private const string TemporalNamespace = "default";
    private const long TestProjectId = 1L;
    private const long TestUserId = 67890L;
    private static readonly long? TestCompanyId = 1L;

    public async Task InitializeAsync()
    {
        try
        {
            // Connect to Temporal server
            _temporalClient = await TemporalClient.ConnectAsync(new()
            {
                TargetHost = TemporalHost,
                Namespace = TemporalNamespace
            });
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException(
                $"Failed to connect to Temporal server at {TemporalHost}. " +
                "Ensure Temporal server is running. " +
                $"Error: {ex.Message}", ex);
        }
    }

    public Task DisposeAsync()
    {
        _temporalClient = null;
        return Task.CompletedTask;
    }

    [Fact]
    [Trait("Category", "Integration")]
    public async Task NexusCallerWorkflow_ProcessNeedsFile_ShouldComplete()
    {
        // Arrange
        var jsonFilePath = GetTestMaterialNeedsFilePath();
        Assert.True(File.Exists(jsonFilePath), $"Test JSON file not found at: {jsonFilePath}");

        var input = new ProcessNeedsFileInput
        {
            FilePath = jsonFilePath,
            CorrelationId = Guid.NewGuid().ToString(),
            ProjectId = TestProjectId,
            UserId = TestUserId,
            CompanyId = TestCompanyId
        };

        // Act
        var result = await ExecuteCallerWorkflowAsync(input);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(input.CorrelationId, result.CorrelationId);
        
        Console.WriteLine($"Processing completed. Success: {result.Success}");
        Console.WriteLine($"Headers Processed: {result.HeadersProcessed}");
        Console.WriteLine($"Lines Processed: {result.LinesProcessed}");
        Console.WriteLine($"Errors Count: {result.Errors.Count}");
    }

    /// <summary>
    /// Execute the caller workflow that invokes the Nexus operation.
    /// Following the pattern from: https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Program.cs
    /// </summary>
    private async Task<ProcessNeedsFileOutput> ExecuteCallerWorkflowAsync(ProcessNeedsFileInput input)
    {
        if (_temporalClient == null)
        {
            throw new InvalidOperationException("Temporal client is not initialized.");
        }

        // Create a temporary task queue for this test
        var testTaskQueue = $"test-caller-queue-{Guid.NewGuid()}";

        // Create and run a worker with the caller workflow
        using var worker = new TemporalWorker(
            _temporalClient,
            new TemporalWorkerOptions(testTaskQueue)
                .AddWorkflow<ProcessNeedsCallerWorkflow>());

        // Execute the worker and workflow
        return await worker.ExecuteAsync(async () =>
        {
            Console.WriteLine("Executing caller workflow");
            
            var result = await _temporalClient.ExecuteWorkflowAsync(
                (ProcessNeedsCallerWorkflow wf) => wf.RunAsync(input),
                new(id: $"nexus-caller-wf-{Guid.NewGuid()}", taskQueue: testTaskQueue)
                {
                    // Workflow execution timeout - total time for the workflow
                    ExecutionTimeout = TimeSpan.FromHours(2.5),
                    // Run timeout - time for a single workflow run
                    RunTimeout = TimeSpan.FromHours(2.5)
                });

            Console.WriteLine($"Workflow result: Success={result.Success}, " +
                            $"Headers={result.HeadersProcessed}, " +
                            $"Lines={result.LinesProcessed}");
            
            return result;
        });
    }

    /// <summary>
    /// Gets the path to the Material_Needs.json file
    /// </summary>
    private static string GetTestMaterialNeedsFilePath()
    {
        var testAssemblyLocation = typeof(SimpleNexusCallerWorkflowTest).Assembly.Location;
        var testAssemblyDir = Path.GetDirectoryName(testAssemblyLocation);
        
        if (string.IsNullOrEmpty(testAssemblyDir))
        {
            testAssemblyDir = Directory.GetCurrentDirectory();
        }

        // Navigate to test project directory
        var testProjectDir = Path.GetFullPath(Path.Combine(testAssemblyDir, "..", "..", ".."));
        var jsonPath = Path.Combine(testProjectDir, "Material_Needs.json");

        if (!File.Exists(jsonPath))
        {
            // Try current directory
            var currentDir = Directory.GetCurrentDirectory();
            if (currentDir.Contains("Adapter.DataIngestor.Tests"))
            {
                var altJsonPath = Path.Combine(currentDir, "Material_Needs.json");
                if (File.Exists(altJsonPath))
                {
                    return altJsonPath;
                }
            }
            
            // Try relative to working directory
            var cwdJsonPath = Path.GetFullPath(Path.Combine("test", "Adapter.DataIngestor.Tests", "Material_Needs.json"));
            if (File.Exists(cwdJsonPath))
            {
                return cwdJsonPath;
            }
        }

        return jsonPath;
    }
}
```

```
using Adapter.DataIngestor;
using Adapter.DataIngestor.Models;
using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Temporalio.Nexus;
using Temporalio.Workflows;

namespace Adapter.DataIngestor.Tests;

/// <summary>
/// Simple caller workflow that invokes the ProcessNeedsFile Nexus operation.
/// Following the pattern from:
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/HelloCallerWorkflow.workflow.cs
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/EchoCallerWorkflow.workflow.cs
/// 
/// This is a long-running Nexus operation with:
/// - 2 hour timeout
/// - No retries (failures are returned as error results)
/// </summary>
[Workflow]
public class ProcessNeedsCallerWorkflow
{
    [WorkflowRun]
    public async Task<ProcessNeedsFileOutput> RunAsync(ProcessNeedsFileInput input)
    {
        // Create Nexus operation options
        // - 2 hour timeout for long-running operation (handled by ScheduleToCloseTimeout)
        // - No built-in retry policy configuration (handled by error return)
        // Note: DO NOT create CancellationTokenSource in workflows - it's non-deterministic!
        var options = new NexusOperationOptions
        {
            ScheduleToCloseTimeout = TimeSpan.FromHours(2)
        };

        // Create typed Nexus client
        var nexusClient = Workflow.CreateNexusClient<INeedsIngestionService>(
            INeedsIngestionService.EndpointName);

        // Use reflection to invoke ExecuteNexusOperationAsync with options
        // This is necessary because the SDK's expression-based API doesn't expose the options parameter
        var clientType = nexusClient.GetType();
        var executeMethod = clientType.GetMethods(BindingFlags.Public | BindingFlags.Instance)
            .FirstOrDefault(m =>
                m.Name == "ExecuteNexusOperationAsync" &&
                m.IsGenericMethod &&
                m.GetGenericArguments().Length == 1 &&
                m.GetParameters().Length == 3 &&
                m.GetParameters()[0].ParameterType == typeof(string) &&
                m.GetParameters()[1].ParameterType == typeof(object) &&
                m.GetParameters()[2].ParameterType.Name == "NexusOperationOptions");

        if (executeMethod == null)
        {
            throw new InvalidOperationException(
                "ExecuteNexusOperationAsync method with NexusOperationOptions not found. " +
                "SDK version mismatch?");
        }

        // Make generic method for output type
        var genericMethod = executeMethod.MakeGenericMethod(typeof(ProcessNeedsFileOutput));

        try
        {
            // Invoke the Nexus operation with 2-hour timeout, no retries
            var task = (Task<ProcessNeedsFileOutput>)genericMethod.Invoke(
                nexusClient,
                new object[]
                {
                    nameof(INeedsIngestionService.ProcessNeedsFile),
                    input,
                    options
                })!;

            var result = await task;
            return result;
        }
        catch (Exception ex)
        {
            // No retries - return error result immediately
            return new ProcessNeedsFileOutput
            {
                CorrelationId = input.CorrelationId,
                Success = false,
                HeadersProcessed = 0,
                LinesProcessed = 0,
                Errors = new List<string>
                {
                    $"Nexus operation failed: {ex.Message}",
                    $"Exception type: {ex.GetType().Name}",
                    "Operation will not be retried per configuration."
                }
            };
        }
    }
}



```

<img width="3776" height="2284" alt="Image" src="https://github.com/user-attachments/assets/18c309d9-d3f4-4039-8a41-43da88611fed" />

[019b8f8b-d58d-7635-8a48-f792f559a02d_events.json](https://github.com/user-attachments/files/24439190/019b8f8b-d58d-7635-8a48-f792f559a02d_events.json)


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2026-01-05 20:06:18.000 UTC</summary>

Starting a Nexus operation has a built-in timeout of 10 seconds before the start is retried. This is mostly unrelated to operation timeout (i.e. schedule to close). A Nexus operation can either be synchronous (completing effectively immediately and returning) or asynchronous (can take a while and returns operation ID/handle). Asynchronous operations are only supported with backing workflows at this time, though we plan to allow general purpose async operations in the near future.

What does your implementation of `INeedsIngestionService.ProcessNeedsFile` look like? It should effectively complete almost immediately either with a sync result, or an async result via a started workflow.

</details>

<details>
<summary><strong>prasek</strong> commented on 2026-01-05 20:27:22.000 UTC</summary>

Nexus handlers should be used to quickly handoff to a reliable backend like Temporal in [< 10 seconds](https://docs.temporal.io/nexus/operations#synchronous-operation-lifecycle).

For long running [Async Nexus Operations](https://docs.temporal.io/nexus/operations#asynchronous-operation-lifecycle), we recommend backing the Nexus Operation with a Temporal Workflow like this: 
https://docs.temporal.io/develop/dotnet/nexus#develop-an-asynchronous-nexus-operation-handler-to-start-a-workflow

Also note the [automatic retry](https://docs.temporal.io/nexus/operations#automatic-retries) and [circuit breaking](https://docs.temporal.io/nexus/operations#circuit-breaking) behavior.

</details>

<details>
<summary><strong>neeraj-mathur</strong> commented on 2026-01-06 03:28:39.000 UTC</summary>

Thank you for the clarification. It appears that I need to migrate to an asynchronous Nexus operation handler.

The Nexus operation INeedsIngestionService.ProcessNeedsFile is a long-running process that performs a large file import. The operation is expected to take a significant amount of time to complete, with a maximum execution duration of approximately two hours, depending on the size and complexity of the data being processed.

</details>


---

<a id="506"></a>

### #506: [Bug] Duplicate activity registration does not throw

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/506 |
| **State** | CLOSED |
| **Author** | mehaKumar (Meha Kumar) |
| **Created** | 2025-08-14 22:39:35.000 UTC (4 months ago) |
| **Updated** | 2025-08-29 19:07:04.000 UTC |
| **Closed** | 2025-08-29 19:07:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Deploy a dotnet temporal worker with various libraries, each containing some Workflow and Activity definitions.

### Describe the bug

When our worker starts up, we register activities using several calls to [TemporalWorkerOptions.AddAllActivities<T>](https://dotnet.temporal.io/api/Temporalio.Worker.TemporalWorkerOptions.html#Temporalio_Worker_TemporalWorkerOptions_AddAllActivities__1___0_). We had two calls to this method, each containing a class with name `ActivityA`, same signature. The startup did not fail with any error, but we saw that no worker was registered on the task queue from Temporal UI. 

We would like `AddAllActivities` to throw when a duplicate activity is found.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

- Temporal SDK Version: 1.3.0

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (3)

<details>
<summary><strong>huytt621</strong> commented on 2025-08-14 23:39:58.000 UTC</summary>

Just providing some more details and some digging that I did.

We noticed this also when there are two workflows with the same name.

I dug into the code a little bit and found that there is a de-duping mechanism and an exception is thrown:
[ActivityWorker](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Worker/ActivityWorker.cs#L56)
[WorkflowWorker](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Worker/WorkflowWorker.cs#L76)

Following up the stack trace, I see that there should've been an exception thrown when [TemporalWorker](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Worker/TemporalWorker.cs) is instantiated. This instantiation happens after initializing [TemporalWorkerService](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/TemporalWorkerService.cs) and calling `ExecuteAsync()`. My theory about what happened is that after we instantiated `TemporalWorkerService` and started it with `TemporalWorkerService.StartAsync()`, a successful task is returned so things looked fine, but it silently fails because of the exception. A symptom of this issue was that tasks on the same queue weren't being picked up.

I noticed that the approach we went with (instantiating `TemporalWorkerService` directly then calling `StartAsync`) was slightly different than the sample on the [README](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/README.md), but I haven't tested whether this bug happens with the README approach.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-15 14:16:36.000 UTC</summary>

When using `TemporalWorker` directly, the constructor will throw on duplicate activity/workflow. However, `TemporalWorkerService` intentionally does not instantiate the worker in its constructor, it does it as part of `ExecuteAsync` since it may have to also connect a client which is an async operation and cannot be done in a constructor. So `ExecuteAsync` throws, but you can't see it if you're only using start/stop.

.NET `BackgroundService` (https://learn.microsoft.com/en-us/dotnet/core/extensions/workers) is designed to have services that fail throw from `ExecuteAsync`. You will need to make sure you get exceptions from `ExecuteAsync`. There are other fatal exceptions that can happen with the running of the worker that you will miss if you only use start/stop. This is one of the reasons that `BackgroundService` is preferred over `IHostedService` - the former can throw, the latter has nowhere for exceptions to go. If you use host building (e.g. approach in the [README](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/README.md)), `IHost` is smart enough to stop the application on `ExecuteAsync` failure (see [this code](https://github.com/dotnet/runtime/blob/v9.0.8/src/libraries/Microsoft.Extensions.Hosting/src/Internal/Host.cs#L175-L206)).

So overall, use .NET host (https://learn.microsoft.com/en-us/dotnet/core/extensions/workers) or direct `ExecuteAsync` to not have errors silently swallowed like they are via start/stop directly.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-29 19:07:04.000 UTC</summary>

(closing as non-issue, but feel free to keep commenting here or join us in `#dotnet-sdk` in [Slack](https://t.mp/slack).

</details>


---

<a id="420"></a>

### #420: [Feature Request] Provide synchronous Run method in testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/420 |
| **State** | OPEN |
| **Author** | mehaKumar (Meha Kumar) |
| **Created** | 2025-03-06 23:58:32.000 UTC (10 months ago) |
| **Updated** | 2025-03-07 12:49:33.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

I have a synchronous method within an Activity that accesses `ActivityExecutionContext.Current.Logger`. I want to unit test this method, but `Temporalio.Testing.ActivityEnvironment` only has a `RunAsync` method. I have to do one of these hacky options to get around this:
1) Wrap `Temporalio.Testing.ActivityEnvironment` access in a pass-through interface wrapper, so I can mock it.
2) Mark my synchronous method Async.
3) Don't test the synchronous helper on its own, only test the surrounding async Activity.

### Describe the solution you'd like

`Temporalio.Testing.ActivityEnvironment` could have a `Run` method for synchronous code that uses `ActivityExecutionContext`.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 11:14:46.000 UTC</summary>

> I want to unit test this method, but `Temporalio.Testing.ActivityEnvironment` only has a `RunAsync` method

We intentionally make it `RunAsync` because it represents any chunk of asynchronous code that could run inside our activity worker. This is the same reason `TemporalWorker` does not offer a synchronous execute. While internally in this testing framework thus far we do not use asynchronous pieces, we may in the future do so.

> I have to do one of these hacky options to get around this:

You can do whatever you do in any other .NET sync context when you must run async code, e.g. `myEnv.RunAsync(myActivity).GetAwaiter().GetResult()`. But we need to keep this async for any future asynchronous needs internal to the test environment and to be like workers themselves which are async only.

</details>


---

<a id="395"></a>

### #395: [Bug] Temporalio.Exceptions.RpcException:operation was canceled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/395 |
| **State** | OPEN |
| **Author** | pauldotknopf (Paul Knopf) |
| **Created** | 2025-01-20 01:54:14.000 UTC (11 months ago) |
| **Updated** | 2025-01-24 17:07:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Get info about a namespace, using 1.4.0 of the .NET SDK.

### Describe the bug

```csharp
public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken)
{
    var stopwatch = new Stopwatch();

    try
    {
        stopwatch.Start();
        
        var client = await _rcmClientConnectionProvider.OpenClient();
        
        // Error gets thrown here.
        var namespaceInfo = await client.WorkflowService.DescribeNamespaceAsync(
            new Temporalio.Api.WorkflowService.V1.DescribeNamespaceRequest { Namespace = "default" },
            new RpcOptions
            {
                CancellationToken = cancellationToken
            }
        );

        stopwatch.Stop();

        if (namespaceInfo == null)
        {
            return HealthCheckResult.Unhealthy(
                $"Temporal namespace is unreachable: elapsed: {stopwatch.Elapsed}");
        }

        return HealthCheckResult.Healthy();
    }
    catch (Exception ex)
    {
        stopwatch.Stop();
        return HealthCheckResult.Unhealthy($"Temporal client is unreachable: elapsed: {stopwatch.Elapsed}", ex);
    }
}
```

The ```_rcmClientConnectionProvider``` variable is a singleton service that maintains a single ```ITemporalClient``` (through ```OpenClient```), used throughout the application (creating workflows and subscribing to task queues). It's code is like this:

```csharp
public async Task<ITemporalClient> OpenClient()
{
    if (_client != null)
    {
        return _client;
    }

    await _semaphoreSlim.WaitAsync();
    
    try
    {
        if (_client == null)
        {
            var options = new TemporalClientConnectOptions
            {
                TargetHost = $"{_options.HostName}:{_options.Port}",
                Namespace = _options.Namespace
            };
            if (serviceProvider.GetService(typeof(ILoggerFactory)) is ILoggerFactory loggerFactory)
            {
                options.LoggerFactory = loggerFactory;
            }

            try
            {
                _client = await TemporalClient.ConnectAsync(options);
            }
            catch(InvalidOperationException e)
            {
                if (e.Message.StartsWith("Connection failed: Server connection error"))
                {
                    var message = $"Failed to connect to Temporal server at {_options.HostName}:{_options.Port}";
                    if (_options.HostName == "localhost")
                    {
                        message += "\nA local instance of temporal can be ran by running 'temporal server start-dev'";
                    }
                    throw new InvalidOperationException(message, e);
                }

                throw;
            }
        }

        return _client;
    }
    finally
    {
        _semaphoreSlim.Release();
    }
}
```

### Minimal Reproduction

It only happens in one environment, so I fear minimal repo may be hard to do.

### Environment/Versions

Temporal helm chart v0.54.0.
Temporal .NET SDK 1.4.0 (nuget)
Azure App Service (for Linux)

### Additional context

This is the complete error, being reported by App Insights.

```json
[
  {
    "severityLevel": "Error",
    "outerId": "0",
    "message": "operation was canceled",
    "type": "Temporalio.Exceptions.RpcException",
    "id": "11222409",
    "parsedStack": [
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 0
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 1
      },
      {
        "assembly": "Temporalio, Version=1.4.0.0, Culture=neutral, PublicKeyToken=null",
        "method": "Temporalio.Bridge.Client+<CallAsync>d__14`1.MoveNext",
        "level": 2
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 3
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 4
      },
      {
        "assembly": "Temporalio, Version=1.4.0.0, Culture=neutral, PublicKeyToken=null",
        "method": "Temporalio.Client.TemporalConnection+<InvokeRpcAsync>d__42`1.MoveNext",
        "level": 5
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 6
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 7
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter`1.GetResult",
        "level": 8
      },
      {
        "assembly": "AutomatedActions.Services, Version=0.2.86.0, Culture=neutral, PublicKeyToken=null",
        "method": "AutomatedActions.Services.HealthChecks.TemporalConnectionHealthCheck+<CheckHealthAsync>d__2.MoveNext",
        "level": 9,
        "line": 26,
        "fileName": "/agent/_work/1/s/src/Workflow/src/AutomatedActions.Services/HealthChecks/TemporalConnectionHealthCheck.cs"
      }
    ]
  }
]
```

One this worth mentioning is that I don't think this is actually a timeout issue, because the exception is thrown immediately-ish: ```Temporal client is unreachable: elapsed: 00:00:00.0022905```.


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 13:59:19.000 UTC</summary>

> It only happens in one environment, so I fear minimal repo may be hard to do.

Is this only an issue on Azure or can anyone replicate it with the dev server? I fear if only one environment has the issue it may be specific to the environment. Ideally we can have a replication we can run in CI to know it has been fixed and continues to remain fixed.

</details>

<details>
<summary><strong>pauldotknopf</strong> commented on 2025-01-24 17:05:07.000 UTC</summary>

Update, it's happening in every environment now..

</details>

<details>
<summary><strong>pauldotknopf</strong> commented on 2025-01-24 17:07:12.000 UTC</summary>

Considering this timeout exception is being thrown immediately, should I not be sharing my ```TemporalClient``` across threads?

This particular method is a "health check" that's done periodically.

It doesn't look like ```TemporalClient``` implements IDisposable. Is it safe to create them and let the GC handle them? Will connection resources become starved?

</details>


---

<a id="234"></a>

### #234: [Bug] Unexpected reuse of payload instances in payload codec for specific workflow failure scenarios.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/234 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-04-26 14:10:14.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-26 15:24:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I'm writing a payload codec that attaches metadata to headers. I am noticing that for some specific workflow failure scenarios around `ApplicationFailureException` with `Details` objects, that under certain circumstances, the instance of the payload object passed to the payload codec is re-used from a previous payload.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

I have a very simple workflow that only contains an activity.

My sample activity always throws an `ApplicationFailureException` with a single details payload. My workflow just propagates the same exception and fails.

I believe there should be four payloads here in this scenario:

1. The workflow input.
2. The activity input.
3. The activity output (in this case failure details).
4. The workflow output (in this case failure details).

I am noticing that (what seems to be the same instance of) the payload that is being passed to the payload codec to encode both the failure from the activity, and the failure from the workflow.

I've created a payload codec implementation in `MetadataExaminingPayloadCodec.cs` that adds a uuid to the `X-My-Metadata` header in the payload metadata during encoding only if a value does not already exist on the payload, and during decoding, reads the value of the `X-My-Metadata` header in the payload metadata.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

https://github.com/robcao/temporal-sdk-dotnet-payload-repro/tree/main

The reproduction runs as a NUnit test case for simplicity, and can be run by using the `dotnet test` command.

The output of the codec is as below. When trying to encode the payload for the workflow failure details, the payload being passed to the payload codec already has a `X-My-Metadata` header, indicating some sort of re-use.

```
  Standard Output Messages:
 Successfully added metadata 229a20b0-9b33-4053-b4b8-f3471b9cdae9...
 Now reading metadata 229a20b0-9b33-4053-b4b8-f3471b9cdae9...
 Successfully added metadata d5566faf-ce58-4917-92e5-86250da83fc8...
 Now reading metadata d5566faf-ce58-4917-92e5-86250da83fc8...
 Successfully added metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 Now reading metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 WARN: tried to add metadata, but metadata already exists with a value of 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 Now reading metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows 10 Enterprise 10.0.19045 x64
- Temporal Version: Temporal 1.22.5, sdk-dotnet 1.0.0
- Are you using Docker or Kubernetes or building Temporal from source? No

### Additional context

So far, I've only noticed this happening for this specific scenario around failure details, but I'm not sure if it can happen under any other scenarios.

I looked at the [encryption sample](https://github.com/temporalio/samples-dotnet/blob/main/src/Encryption/Codec/EncryptionCodec.cs), and I see that this implementation is wrapping the original payload as the data of a new payload.

```
 Task.FromResult<IReadOnlyCollection<Payload>>(payloads.Select(p =>
        {
            return new Payload()
            {
                Metadata =
                {
                    ["encoding"] = EncodingByteString,
                    ["encryption-key-id"] = keyIDByteString,
                },
                // TODO(cretz): Not clear here how to prevent copy
                Data = ByteString.CopyFrom(Encrypt(p.ToByteArray())),
            };
        }).ToList());
```

However, it's unclear in the documentation if this is actually necessary (or why if so).

This behavior is kind of strange.

If I change the workflow code to the below, the same problem is happening.

```
		[WorkflowRun]
		public async Task<WorkflowOutput> RunAsync(WorkflowInput input)
		{
			try
			{
				await Temporalio.Workflows.Workflow.ExecuteActivityAsync(
					() => Activities.FailureActivityWithDetails(new ActivityInput()),
					new()
					{
						StartToCloseTimeout = TimeSpan.FromMinutes(5),
					}).ConfigureAwait(true);
			}

			catch (ApplicationFailureException)
			{
				throw new NonRetryableWithDetailsException(new FailureDetails());
			}


			return new WorkflowOutput();
		}
```

However, if I modify the above code to catch a generic `Exception`, instead of an `ApplicationFailureException`, the payload instance no longer appears to be re-used.

```
		[WorkflowRun]
		public async Task<WorkflowOutput> RunAsync(WorkflowInput input)
		{
			try
			{
				await Temporalio.Workflows.Workflow.ExecuteActivityAsync(
					() => Activities.FailureActivityWithDetails(new ActivityInput()),
					new()
					{
						StartToCloseTimeout = TimeSpan.FromMinutes(5),
					}).ConfigureAwait(true);
			}

			catch (Exception)
			{
				throw new NonRetryableWithDetailsException(new FailureDetails());
			}


			return new WorkflowOutput();
		}
```

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-04-26 14:39:29.000 UTC</summary>

Your payload codec should not mutate the payload being passed in or try to maintain a reference to it in any way. Rather, you should always create a new payload. I will make a note to make this very clear in the codec documentation.

Yes https://github.com/temporalio/samples-dotnet/blob/main/src/Encryption/Codec/EncryptionCodec.cs works by creating a new payload. We don't clone before every invocation because some invocations may do nothing to the object and that would affect performance unnecessarily. If there was an easy way to "freeze" the object just for the life of the call we would.

Arguably we could have wrapped the raw proto payload object in an immutable container/interface, but this is more of an advanced API with certain implementation expectations. We will clarify in the documentation.

</details>

<details>
<summary><strong>robcao</strong> commented on 2024-04-26 15:18:59.000 UTC</summary>

Got it, thank you.

To be clear, when you say "you should always create a new payload", you do not mean just a deep clone via something like `payload.Clone()`, but rather setting the original payload (allocated into a new byte array) as the data of an outer payload wrapper?

```
new Payload()
{
    Data = ByteString.CopyFrom(payload.ToByteArray()),
};
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-04-26 15:24:25.000 UTC</summary>

Literally just always creating a new instance of the payload object. How you "wrap" or "convert" the other one into the payload is up to you. A "clone" is probably fine, though I usually recommend against that because you usually do not want all of the previous payload's metadata as your own. Rather usually you want to serialize/wrap the entire other payload into the data of the new one, and do the inverse on decode. But technically all that matters is that no fields in the parameter are mutated or referenced beyond the life of the method.

</details>


---

<a id="221"></a>

### #221: [Feature Request] Allow manual pagination of workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/221 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-15 19:21:06.000 UTC (1y 8m ago) |
| **Updated** | 2025-10-27 21:23:19.000 UTC |
| **Closed** | 2025-10-27 21:23:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we use async iterators that page internally, but we should surface paging to users (i.e. page size and next page token). Then the iterators can just leverage that. The outbound interceptor for list is `ListWorkflowsAsync`, so we may need another single-page interceptor or we need to tailor that.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:22:53.000 UTC</summary>

Closing this as we have not seen a compelling use case, but can reopen and implement if there is one

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-12 16:16:36.000 UTC</summary>

Reopening issue because there are use cases that involve stateless pagination, e.g. to power user UIs that can't keep async iterator in memory. We will triage/prioritize.

</details>

<details>
<summary><strong>maciejdudko</strong> commented on 2025-10-23 15:44:59.000 UTC</summary>

Reducing the scope of this issue to just workflow list as we've decided to hold off on implementing manual paging for history.

</details>


---

<a id="212"></a>

### #212: [Bug] Cannot add multiple versions of a workflow using DI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/212 |
| **State** | CLOSED |
| **Author** | marcusbooyah (Marcus Bowyer) |
| **Created** | 2024-03-28 20:12:11.000 UTC (1y 9m ago) |
| **Updated** | 2025-04-10 19:55:25.000 UTC |
| **Closed** | 2024-04-16 12:47:43.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Trying to add two versions of the same workflow using dependency injection.

### Describe the bug

It's possible to add multiple workflows using this method, the part that makes it break is having two workflows with the same name in the `WorkflowAttribute`, even though they are being registered with different build IDs.

 I talked with @cretz who said:
> Yes, this is a bug. This is because the DI setup predates versioning, so we only supported one worker per task queue in a service collection: [https://github.com/temporalio/sdk-dotnet/blob/c6b7aca05cdd2b61e4b99098f3f390469232[…]3a4a/src/Temporalio.Extensions.Hosting/TemporalWorkerService.cs](https://github.com/temporalio/sdk-dotnet/blob/c6b7aca05cdd2b61e4b99098f3f3904692323a4a/src/Temporalio.Extensions.Hosting/TemporalWorkerService.cs#L90). We need to change what we uniquely identify options set as on the container to include build ID

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction
```csharp
[Workflow("my-workflow")]
public class TestWorkflow
{
    [WorkflowRun]
    public Task RunAsync() => Workflow.DelayAsync(TimeSpan.FromSeconds(3));
}

[Workflow("my-workflow")]
public class TestWorkflowV2
{
    [WorkflowRun]
    public Task RunAsync() => Workflow.DelayAsync(TimeSpan.FromSeconds(1));
}

static async Task Main(string[] args)
{
    await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();

    IHost host = Host.CreateDefaultBuilder()
        .ConfigureServices(services =>
        {
            services.AddSingleton(env.Client);
            services
                .AddHostedTemporalWorker("task-queue")
                    .ConfigureOptions(options =>
                    {
                        options.UseWorkerVersioning  = true;
                        options.BuildId                            = "1.0";
                    })
                    .AddWorkflow<TestWorkflow>();

            services
                .AddHostedTemporalWorker("task-queue")
                    .ConfigureOptions(options =>
                    {
                        options.UseWorkerVersioning  = true;
                        options.BuildId                           = "2.0";
                    })
                    .AddWorkflow<TestWorkflowV2>();
        })
        .Build();

    host.Run();
}
```
### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [Windows]
- Temporal Version: SDK 1.0.0



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-04-10 19:55:24.000 UTC</summary>

💥 Note, in #451 we have changed some behavior here where we now no longer assume this non-GA-will-be-removed form versioning when build ID is present.

</details>


---

<a id="182"></a>

### #182: [Feature Request] Workflow is static object, not unit testable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/182 |
| **State** | CLOSED |
| **Author** | rsr-maersk (Rik Svendsen Rose) |
| **Created** | 2024-01-25 08:42:43.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-29 17:15:08.000 UTC |
| **Closed** | 2024-01-25 13:31:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Thanks for the great package

### Is your feature request related to a problem? Please describe.

We cannot do true TTD / unit testing with the current SDK. 
The SDK looks much like ASP.NET classic with the static HttpContext. However it should be more like minimal APIs exposing a context and SP.

### Describe the solution you'd like

Noting static in SDK. 
Everything instanced as abstractions or interfaces



#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-01-25 13:31:48.000 UTC</summary>

This is very much intentional. We do this on purpose in order to disallow mocking/inheriting. Workflow environments are a lot of things about them that makes mocking/inheriting in a normal context way not feasible, you'll need the same static-class logic. See https://github.com/temporalio/sdk-dotnet/#workflow-testing for more information about testing.

Also, feel free to join us on `#dotnet-sdk` channel on https://t.mp/slack or on the forums at https://community.temporal.io/.

(closing as not an issue, but feel free to continue adding comments or joining us in one of the places above)

</details>

<details>
<summary><strong>rsr-maersk</strong> commented on 2024-01-29 09:19:54.000 UTC</summary>

@cretz mate, "This is very much intentional. We do this on purpose in order to disallow mocking/inheriting".
This doesn't make sence and goes against years of software pronciples and also TDD.

This is a flaw in your design, sorry mate


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-29 17:14:47.000 UTC</summary>

Here is the proposal section with the results of the design discussion amongst many developers: https://github.com/temporalio/proposals/blob/master/dotnet/sdk-phase-2.md#workflow-class-and-namespace-rename. The `Workflow` is part of the environment, not just part of specific methods. Think of it like `System.Environment` or `System.Threading.ThreadPool`.

</details>


---

<a id="181"></a>

### #181: [Feature Request] Dependency Injection into a workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/181 |
| **State** | CLOSED |
| **Author** | rsr-maersk (Rik Svendsen Rose) |
| **Created** | 2024-01-25 08:40:23.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-29 13:27:49.000 UTC |
| **Closed** | 2024-01-25 13:34:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Thanks for the good sdk

### Using the DI we cannot inject objects into the workflow, even though we register with the dependency injection package

### Describe the solution you'd like

Allow "Workflow" static obejct to have a Scoped ServiceCollection scoped, or allow ctor DI


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-01-25 13:34:00.000 UTC</summary>

Workflows must be deterministic and therefore must access nothing external directly and therefore we do not want dependency injection for workflows. From https://github.com/temporalio/sdk-dotnet/tree/main/src/Temporalio.Extensions.Hosting:

> Workflows are inherently self-contained, deterministic units of work and therefore should never call anything external. Therefore, there is no such thing as dependency injection for workflows, their construction and lifetime is managed by Temporal.

Also, feel free to join us on #dotnet-sdk channel on https://t.mp/slack or on the forums at https://community.temporal.io/.

(closing as not an issue, but feel free to continue adding comments or joining us in one of the places above)

</details>

<details>
<summary><strong>rsr-maersk</strong> commented on 2024-01-29 09:15:38.000 UTC</summary>

@cretz  "deterministic". Why?
This goes against SOLID. And doesn't make sense to me.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-29 13:27:48.000 UTC</summary>

> "deterministic". Why?

See https://docs.temporal.io/workflows#deterministic-constraints. Workflow environments and constraints are not like other code. This same constraint exists in Azure Durable Functions and others that implement the event sourcing model to support durable function resumption.

</details>


---

<a id="160"></a>

### #160: [Feature Request] Add support for Temporal Schedule

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/160 |
| **State** | CLOSED |
| **Author** | dodyg (Dody Gunawinata) |
| **Created** | 2023-11-22 05:09:54.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-26 21:50:31.000 UTC |
| **Closed** | 2023-11-23 13:22:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://temporal.io/blog/temporal-schedules-reliable-scalable-and-more-flexible-than-cron-jobs

#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-11-22 16:59:02.000 UTC</summary>

The DotNet SDK has full schedules support https://dotnet.temporal.io/api/Temporalio.Client.Schedules.html

There is also a [sample ](https://github.com/temporalio/samples-dotnet/tree/main/src/Schedules)available

</details>

<details>
<summary><strong>dodyg</strong> commented on 2023-11-23 13:22:16.000 UTC</summary>

Ah ok. It wasn't mentioned in the blog post

![image](https://github.com/temporalio/sdk-dotnet/assets/1761249/97dd95cb-2bf5-4f8c-96be-38fa8d4d5a8f)


</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-11-26 21:50:29.000 UTC</summary>

The blog post should be updated now,  thanks for pointing this out.

</details>


---

<a id="140"></a>

### #140: [Feature Request] Add support for Log forwarding to lang-side

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/140 |
| **State** | CLOSED |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-10-11 22:51:33.000 UTC (2y 3m ago) |
| **Updated** | 2023-11-14 14:44:09.000 UTC |
| **Closed** | 2023-11-14 14:44:09.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Add support for Log forwarding to lang-side. This would be functionally similar to what already exists in TypeScript SDK, though we may want to consider a solution for .NET where logs are passed directly from core to lang side, without buffering (akin to what has been done for metrics forwarding).

A corresponding option already exists (as [seen here](https://github.com/temporalio/sdk-dotnet/blob/ab4ded44cb15c2aba6ef7472e712ba12f3fef6ad/src/Temporalio/Bridge/src/runtime.rs#L212-L215)) and triggers registration of the Log forwarding export layer in Bridge, but log entries never get polled by lang, so this practically behave as a noop log exporter.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-10-24 19:14:33.000 UTC</summary>

I have opened https://github.com/temporalio/sdk-core/issues/618 which this will depend on because we'd surely want this push based in .NET where there is not as much FFI overhead as there is in other languages. (basically match the behavior of metrics)

</details>


---

<a id="124"></a>

### #124: [Feature Request] Expose WorkflowInfo.LastFailure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/124 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-03 15:36:36.000 UTC (2y 5m ago) |
| **Updated** | 2023-09-11 16:48:05.000 UTC |
| **Closed** | 2023-09-11 16:48:04.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like
Not currently making last failure available like we should



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-09-11 16:48:04.000 UTC</summary>

Being fixed in #133 

</details>


---

<a id="84"></a>

### #84: [Bug] If a child workflow is in progress when the service goes down, no workflows are resumed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/84 |
| **State** | CLOSED |
| **Author** | tgrieger-sf (Trevor Grieger) |
| **Created** | 2023-06-07 19:09:29.000 UTC (2y 7m ago) |
| **Updated** | 2023-06-07 22:22:53.000 UTC |
| **Closed** | 2023-06-07 20:01:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Validating my understanding of how Temporal handles resuming child workflows.

### Describe the bug

When running a simple workflow that spans child workflows, if a child workflow is in progress and I kill the application, restarting the application does not resume the workflows like I would expect.

If I, instead, kill the application while a child workflow is NOT running and then resume it, the parent workflow resumes no problem.

I've linked essentially what I'm doing, just boiled down to exactly what is needed to reproduce. What I don't know is if this expected no matter what, an issue with the dotnet sdk, or something else. Any help is much appreciated.

### Minimal Reproduction

Minimal reproduction with instructions here: https://github.com/tgrieger-sf/TemporalChildWorkflowBug

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: x64 Windows 10
- Temporal Version: server 1.20.1
- Are you using Docker or Kubernetes or building Temporal from source? Running it from `temporal start dev`

### Additional context

<!-- Add any other context about the problem here. -->

N/A


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2023-06-07 19:37:01.000 UTC</summary>

I suspect your problem is that you have crashed an activity without the server knowing. For all but the most immediate activities, you should set a `HeartbeatTimeout` and heartbeat regularly as a keep alive to let the server know the activity hasn't crashed. See https://github.com/temporalio/sdk-dotnet#activity-heartbeating-and-cancellation. You should also set a `StartToCloseTimeout` with the max amount of time you expect an activity attempt to take before it should retry.

The child workflows resume, but they have nothing to resume because they are waiting on the activity. But since you are not heartbeating your activity or setting a reasonable timeout, the server thinks the activity is still running.

(can continue to discuss here, or can also discuss in forum at https://community.temporal.io/ or `#dotnet-sdk` in Slack)

</details>

<details>
<summary><strong>tgrieger-sf</strong> commented on 2023-06-07 20:01:17.000 UTC</summary>

I'll close the issue, updated the `ScheduleToCloseTimeout` to `StartToCloseTimeout` and set it at a more reasonable 1 second and that did it. Thanks!

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-06-07 22:22:53.000 UTC</summary>

Note that 1 second may not be very reasonable actually for schedule to close. That means it has to be picked up, processed including all retries, and completed within a second. May work for a test, but your normal workflow may need a bit more leniency.

</details>


---

<a id="64"></a>

### #64: [Bug] Workflow that completes with no actions times out with deadlock error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/64 |
| **State** | CLOSED |
| **Author** | cgillum (Chris Gillum) |
| **Created** | 2023-05-09 00:05:53.000 UTC (2y 8m ago) |
| **Updated** | 2023-06-08 13:44:49.000 UTC |
| **Closed** | 2023-06-08 13:44:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying to run a workflow that doesn't do anything (as a test).

### Describe the bug

The `[WorkflowRun]` method starts and completes, but is replayed continuously until it times out.

The dashboard then shows the following failure details in the `WorkflowTaskFailed` event.

```json
{
  "message": "Workflow with ID eaa5ad6b-764a-486d-9d49-65a2b2adbf12 deadlocked after 00:00:02",
  "source": "",
  "stackTrace": "   at Temporalio.Worker.WorkflowWorker.HandleActivationAsync(IPayloadCodec codec, WorkflowActivation act)",
  "encodedAttributes": null,
  "cause": null,
  "applicationFailureInfo": {
    "type": "InvalidOperationException",
    "nonRetryable": false,
    "details": null
  }
}
```

Additionally, I get this warning banner asking me to open a support request:

![image](https://user-images.githubusercontent.com/2704139/236961543-841de8c6-7cee-408d-85fa-4af49b37df8a.png)


### Minimal Reproduction

I can't easily share the full project since it's very advanced/complicated. However, this is basically the workflow that reproduces the problem:

```csharp
[Workflow]
class WorkflowShim
{
    public WorkflowShim() { }

    [WorkflowRun]
    public Task Run() { return Task.CompletedTask; }
}
```

Adding a simple delay to the `[WorkflowRun]` fixes the problem - e.g.:

```csharp
[WorkflowRun]
public async Task Run()
{
    await Workflow.DelayAsync(TimeSpan.FromSeconds(3));
}
```

Obviously not a big issue since an empty workflow isn't a real use case, but it is a confusing error message. It might be realistic if, for example, a developer writes code that only conditionally causes a workflow to actually take some action.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: **Windows 11, x64**
- Temporal Version: `temporal version 0.8.0 (server 1.20.1) (ui 2.13.3)`
- SDK version: `0.1.0-alpha4`
- Are you using Docker or Kubernetes or building Temporal from source? **Running from the `temporal` CLI.**

### Additional context




#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2023-05-09 13:07:50.000 UTC</summary>

Thanks for the report! I'll investigate soon.

I know we have test cases (e.g. https://github.com/temporalio/sdk-dotnet/blob/53e3862dbc0a426f3d6b30fc80fd73f4ccc8d43b/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs#L32) and samples (e.g. https://github.com/temporalio/samples-dotnet/blob/2b9d8e300b9cac8634d1963c967009567de15269/src/AspNet/Worker/MyWorkflow.workflow.cs#L13) that just return `Task.FromResult`. I wonder if I just messed something up for `Task` sans return type. I will replicate and fix

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-16 20:29:58.000 UTC</summary>

I cannot replicate this. In my `tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs` I added:

```csharp
    [Workflow]
    public class CompletedTaskWorkflow
    {
        public static readonly CompletedTaskWorkflow Ref = WorkflowRefs.Create<CompletedTaskWorkflow>();

        [WorkflowRun]
        public Task RunAsync() => Task.CompletedTask;
    }

    [Fact]
    public async Task ExecuteWorkflowAsync_CompletedTask_Succeeds()
    {
        await ExecuteWorkerAsync<CompletedTaskWorkflow>(async worker =>
        {
            await Env.Client.ExecuteWorkflowAsync(
                CompletedTaskWorkflow.Ref.RunAsync,
                new(id: $"workflow-{Guid.NewGuid()}", taskQueue: worker.Options.TaskQueue!));
        });
    }
```

And it succeeds as expected. Granted this is against `main` but I don't know of any changes since last release that would have affected this. Can you provide a standalone replication?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-06-08 13:44:48.000 UTC</summary>

Closing due to no response.

</details>


---

<a id="46"></a>

### #46: [Feature Request] Add Temporalio.Extensions.DependencyInjection or similar

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/46 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-10 16:34:32.000 UTC (2y 9m ago) |
| **Updated** | 2023-06-28 13:26:59.000 UTC |
| **Closed** | 2023-06-28 13:26:59.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Something like https://github.com/npgsql/npgsql/tree/main/src/Npgsql.DependencyInjection. We need to make it easy to create a lazy client and inject it. (became obvious while investigating #44 and #45)

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-04-10 17:22:38.000 UTC</summary>

Maybe we also need something for `BackgroundService`. Also, we can model the client/DI stuff on what https://github.com/grpc/grpc-dotnet/tree/master/src/Grpc.Net.ClientFactory does.

</details>


---

<a id="25"></a>

### #25: temporal-sdk-core-api-0.1.0: 1 vulnerabilities (highest severity is: 5.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/25 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-02-26 15:31:20.000 UTC (2y 10m ago) |
| **Updated** | 2024-01-12 17:25:53.000 UTC |
| **Closed** | 2024-01-12 17:25:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>temporal-sdk-core-api-0.1.0</b></p></summary>

<p></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (temporal-sdk-core-api version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2023-0366](https://github.com/bytecodealliance/rustix/commit/31fd98ca723b93cc6101a3e29843ea5cf094e159) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.5 | rustix-0.38.8.crate | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> WS-2023-0366</summary>


###  Vulnerable Library - <b>rustix-0.38.8.crate</b></p>

<p>Safe Rust bindings to POSIX/Unix/Linux/Winsock2-like syscalls</p>
<p>Library home page: <a href="https://static.crates.io/crates/rustix/rustix-0.38.8.crate">https://static.crates.io/crates/rustix/rustix-0.38.8.crate</a></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:
  - temporal-sdk-core-api-0.1.0 (Root Library)
    - temporal-sdk-core-protos-0.1.0
      - prost-wkt-types-0.4.2.crate
        - prost-build-0.11.9.crate
          - tempfile-3.7.1.crate
            - :x: **rustix-0.38.8.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
rustix's `rustix::fs::Dir` iterator with the `linux_raw` backend can cause memory explosion

<p>Publish Date: 2023-10-18
<p>URL: <a href=https://github.com/bytecodealliance/rustix/commit/31fd98ca723b93cc6101a3e29843ea5cf094e159>WS-2023-0366</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-c827-hfw6-qwvm">https://github.com/advisories/GHSA-c827-hfw6-qwvm</a></p>
<p>Release Date: 2023-10-18</p>
<p>Fix Resolution: rustix - 0.35.15,0.36.16,0.37.25,0.38.19</p>

</p>

<p></p>

</details>

#### Comments (3)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-08-21 19:52:46.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-10-25 06:13:33.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2024-01-12 17:25:51.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="8"></a>

### #8: temporal-sdk-core-0.1.0: 1 vulnerabilities (highest severity is: 5.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/8 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-10 22:15:38.000 UTC (2y 12m ago) |
| **Updated** | 2024-01-12 17:25:54.000 UTC |
| **Closed** | 2024-01-12 17:25:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>temporal-sdk-core-0.1.0</b></p></summary>

<p></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (temporal-sdk-core version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2018-16875](https://www.mend.io/vulnerability-database/CVE-2018-16875) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.5 | webpki-0.22.0.crate | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2018-16875</summary>


###  Vulnerable Library - <b>webpki-0.22.0.crate</b></p>

<p>Web PKI X.509 Certificate Verification.</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/webpki/0.22.0/download">https://crates.io/api/v1/crates/webpki/0.22.0/download</a></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:
  - temporal-sdk-core-0.1.0 (Root Library)
    - reqwest-0.11.18.crate
      - webpki-roots-0.22.6.crate
        - :x: **webpki-0.22.0.crate** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
The crypto/x509 package of Go before 1.10.6 and 1.11.x before 1.11.3 does not limit the amount of work performed for each chain verification, which might allow attackers to craft pathological inputs leading to a CPU denial of service. Go TLS servers accepting client certificates and TLS clients are affected.

<p>Publish Date: 2018-12-14
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-16875>CVE-2018-16875</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-fh2r-99q2-6mmg">https://github.com/advisories/GHSA-fh2r-99q2-6mmg</a></p>
<p>Release Date: 2018-12-14</p>
<p>Fix Resolution: golang 1.10.6,golang 1.11.3, webpki - 0.22.2, rustls-webpki - 0.100.2,0.101.4</p>

</p>

<p></p>

</details>

#### Comments (3)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-04-19 19:33:55.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-08-25 21:54:55.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2024-01-12 17:25:54.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="579"></a>

### #579: [Bug] SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/579 |
| **State** | OPEN |
| **Author** | cfauchere (Clement) |
| **Created** | 2025-12-17 22:50:42.000 UTC (22 days ago) |
| **Updated** | 2025-12-18 15:28:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

 ### What are you really trying to do?

  Running integration tests for a .NET 8 application that uses Temporal workflows. Tests run in CI on Linux (Ubuntu) with an external Temporal server container (temporalio/temporal:latest).

 ### Describe the bug

  The test host process crashes with SIGSEGV (signal 11) while the Temporal worker is polling for workflow activations. The crash happens intermittently (flaky) - tests pass locally on Windows but crash randomly in Linux CI.

  Shortly before the crash, this warning appears in logs:
  WARN temporal_sdk_core::worker: Activity heartbeat failed. task_token=... details=UnknownActivity

  ### Stack trace from crash dump:
  Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(TemporalCoreWorker*, Void*, IntPtr)
  ILStubClass.IL_STUB_PInvoke(TemporalCoreWorker*, Void*, IntPtr)
  Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
  Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
  ...
  System.Threading.PortableThreadPool+WorkerThread.WorkerThread

  The crash occurs in the native Rust bridge during poll_workflow_activation, not during execution of any user workflow/activity code.

  ### Minimal Reproduction

  Unable to provide minimal repro - the crash is intermittent and only occurs in Linux CI environment, not locally on Windows. The test runs Temporal workflows with activities that use heartbeats.

  ### Environment/Versions

  - OS and processor: Linux x86_64 (Ubuntu, Azure DevOps hosted agent)
  - Temporal .NET SDK Version: 1.8.0
  - Temporal Server: temporalio/temporal:latest (Docker container, server start-dev)
  - .NET Version: 8.0
  - Works on: Windows x64 (local development)
  - Fails on: Linux x64 (CI)

#### Comments (2)

<details>
<summary><strong>cfauchere</strong> commented on 2025-12-17 22:52:03.000 UTC</summary>

```
Full stack
        Child SP               IP Call Site
00007EF4E3FFA060 00007f364e710813 [InlinedCallFrame: 00007ef4e3ffa060] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*,
IntPtr)
00007EF4E3FFA060 00007f35d4478e06 [InlinedCallFrame: 00007ef4e3ffa060] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*,
IntPtr)
00007EF4E3FFA050 00007F35D4478E06 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
00007EF4E3FFA0E0 00007F35D4A1B20C Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
00007EF4E3FFA1E0 00007F35D44829BB System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]](<PollWorkflowActivationAsync>d__15
ByRef) [/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncMethodBuilderCore.cs @ 38]
00007EF4E3FFA250 00007F35D4482920 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].Start[[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15,
Temporalio]](<PollWorkflowActivationAsync>d__15 ByRef) [/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 35]
00007EF4E3FFA280 00007F35D44828C2 Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
00007EF4E3FFA2D0 00007F35D44819AC Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
00007EF4E3FFA4B0 00007F35D4489021 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].ExecutionContextCallback(System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 289]
00007EF4E3FFA4D0 00007F35D478CBA2 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
00007EF4E3FFA520 00007F35D4488ED4 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].MoveNext(System.Threading.Thread)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 368]
00007EF4E3FFA570 00007F35D4488DCA System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].MoveNext()
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 346]
00007EF4E3FFA590 00007F35D478D003 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/TaskAwaiter.cs @ 273]
00007EF4E3FFA610 00007F35D47D20E5 System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 743]
00007EF4E3FFA660 00007F35D478BA9B System.Threading.Tasks.Task.RunContinuations(System.Object) [/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 3483]
00007EF4E3FFA700 00007F35D4994AA8 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].SetResult(System.__Canon)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 474]
00007EF4E3FFA750 00007F35D4A1B3E9 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
00007EF4E3FFA850 00007F35D4484577 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].ExecutionContextCallback(System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 289]
00007EF4E3FFA870 00007F35D478CBA2 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
00007EF4E3FFA8C0 00007F35D44843D6 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].MoveNext(System.Threading.Thread)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 368]
00007EF4E3FFA940 00007F35D448428A System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].MoveNext()
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 346]
00007EF4E3FFA960 00007F35D478D003 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/TaskAwaiter.cs @ 273]
00007EF4E3FFA9E0 00007F35D4A2300D System.Threading.Tasks.AwaitTaskContinuation.System.Threading.IThreadPoolWorkItem.Execute()
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 647]
00007EF4E3FFAA40 00007F35D4764369 System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1010]
00007EF4E3FFAAB0 00007F35CF08258B System.Threading.PortableThreadPool+WorkerThread.WorkerThread
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-18 15:22:21.000 UTC</summary>

Interesting. We are also tracking a test flake at #577 that may be related (but maybe not, only thing they have in common is a segfault on tests, mostly non-Windows).

</details>


---

<a id="513"></a>

### #513: TLS support without mTLS

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/513 |
| **State** | CLOSED |
| **Author** | rangp (Peter Rang) |
| **Created** | 2025-08-29 08:10:03.000 UTC (4 months ago) |
| **Updated** | 2025-09-02 15:11:23.000 UTC |
| **Closed** | 2025-09-02 14:55:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I have a deployment scenario, where I want to expose my self hosted temporal server to the internet via an istio gateway. I have set up an authorizer and hence do not require mTLS for authentication. Instead I want to use normal TLS for the connection to the gateway, terminate there and continue with plain TCP from the gateway to the temporal server. I.e. the following scenario

`client <--[HTTPS]--> istio gateway <--[HTTP]---> temporal-frontend`



I tested this set-up with curl and can establish a TLS connection to the temporal server but when trying to use the dotnet sdk, I get the following error:

`'Connection failed: Server connection error: tonic::transport::Error(Transport, ConnectError(Custom { kind: InvalidData, error: InvalidCertificate(UnknownIssuer) }))'`

I assumed the I can activate TLS without mTLS by using 

`config.Tls = new TlsOptions();`

but the error message seems to indicate that mTLS is still expected. Is there a way to support my scenario in your SDK?

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-08-29 13:24:04.000 UTC</summary>

> but the error message seems to indicate that mTLS is still expected

The error message is not indicating that. It is saying that your server certificate is signed by an unknown/untrusted CA. I assume the TLS certificate for your gateway is not using a globally trusted CA, so you need to set `TlsOptions.ServerRootCACert` to the CA certificate you signed your gateway TLS certificate with.

</details>

<details>
<summary><strong>rangp</strong> commented on 2025-09-02 14:55:23.000 UTC</summary>

Thank you, that indeed solved the issue indeed. Not sure why the CA is not globally trusted. I used DigiCert and all browsers I tested trust this CA. But downloading the root certficate and setting it as `ServerRootCACert` worked.

Reactions: 👍 1

</details>


---

<a id="500"></a>

### #500: [Bug] Segfault/crash occurs when using tasks without await

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/500 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-07-18 15:32:27.000 UTC (5 months ago) |
| **Updated** | 2025-08-07 13:34:48.000 UTC |
| **Closed** | 2025-08-07 13:34:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Replication that can be in a test case with access to a `Client`:

```csharp
    [Workflow]
    public class CustomFuncWorkflow
    {
        private readonly Func<Task> func;

        public CustomFuncWorkflow(Func<Task> func) => this.func = func;

        [WorkflowRun]
        public Task RunAsync() => func();
    }

    [Fact]
    public async Task CauseSegfault()
    {
        await RunInWorkflowAsync(
            new($"tq-{Guid.NewGuid()}"),
            async () => { /*do nothing*/ });
    }

    private Task<WorkflowHandle> RunInWorkflowAsync(TemporalWorkerOptions workerOptions, Func<Task> func)
    {
        workerOptions.AddWorkflow(WorkflowDefinition.Create(
            typeof(CustomFuncWorkflow),
            null,
            _args => new CustomFuncWorkflow(func)));
        using var worker = new TemporalWorker(Client, workerOptions);
        return worker.ExecuteAsync(async () =>
        {
            var handle = await Client.StartWorkflowAsync(
                (CustomFuncWorkflow wf) => wf.RunAsync(),
                new($"wf-{Guid.NewGuid()}", workerOptions.TaskQueue!));
            await handle.GetResultAsync();
            return handle as WorkflowHandle;
        });
    }
```

Can give different forms of segfault/crash issues from hard crash to something like this:
```
Fatal error. System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt.
Repeat 2 times:
--------------------------------
   at Temporalio.Bridge.Interop.Methods.worker_poll_workflow_activation(Temporalio.Bridge.Interop.Worker*, Void*, IntPtr)
--------------------------------
   at Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]](System.__Canon ByRef)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].Start[[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]](System.__Canon ByRef)
   at Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
   at Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
   at System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]](System.__Canon ByRef)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]](System.__Canon ByRef)
   at Temporalio.Worker.WorkflowWorker.ExecuteAsync()
   at Temporalio.Worker.TemporalWorker+<ExecuteInternalAsync>d__35.MoveNext()
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].ExecutionContextCallback(System.Object)
   at System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].MoveNext(System.Threading.Thread)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].MoveNext()
   at System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
   at System.Runtime.CompilerServices.AsyncMethodBuilderCore+ContinuationWrapper.Invoke()
   at System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean)
   at System.Threading.Tasks.Task.RunContinuations(System.Object)
   at System.Threading.Tasks.Task.FinishContinuations()
   at System.Threading.Tasks.Task`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].TrySetResult(System.Threading.Tasks.VoidTaskResult)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].SetExistingTaskResult(System.Threading.Tasks.Task`1<System.Threading.Tasks.VoidTaskResult>, System.Threading.Tasks.VoidTaskResult)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder.SetResult()
   at Temporalio.Bridge.Worker+<ValidateAsync>d__13.MoveNext()
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].ExecutionContextCallback(System.Object)
   at System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].MoveNext(System.Threading.Thread)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].MoveNext()
   at System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
   at System.Runtime.CompilerServices.AsyncMethodBuilderCore+ContinuationWrapper.Invoke()
   at System.Threading.Tasks.AwaitTaskContinuation.System.Threading.IThreadPoolWorkItem.Execute()
   at System.Threading.ThreadPoolWorkQueue.Dispatch()
   at System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart()
   at System.Threading.Thread.StartCallback()
```

But strangely if you change `RunInWorkflowAsync` to be `async` and change its `return` to `return await` the problem goes away. There is something in the worker execute code or interop code or something that does not have proper lifetime for the worker `ExecuteAsync` body.

#### Comments (2)

<details>
<summary><strong>maciejdudko</strong> commented on 2025-08-01 21:25:55.000 UTC</summary>

> using var worker = new TemporalWorker(Client, workerOptions);

The `using` here causes `Dispose()` to be called at the end of function. If the function is NOT marked async, this will happen before the completion of the future. The crash happens because the future polls workflow activations for a worker that's already been disposed. Switching to `async` fixes the crash because the scope of `using` is then extended until completion of the future and `Dispose()` doesn't get called early.

So I guess the actual bug is that we continue to poll workflow activations after worker is already disposed.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-04 14:15:15.000 UTC</summary>

Yes, makes sense and that seems to be the issue, or alternatively the issue is that the worker is being disposed without calling shutdown. It'd be a backwards incompatible change to make the worker async dispose that calls shutdown (and we wouldn't want that anyways probably because we don't want to hang dispose). I wonder if we can lodge some warning to the user when they attempt to dispose a worker that was not shutdown properly. Another approach may be to not make `ExecuteAsync` actually `async`, but instead synchronous that "captures" the worker and now doesn't do those dispose things until shutdown.

I imagine it'd be complicated to add "is disposed" everywhere, and really even that may not help as we're freeing Rust-side resources I think. May just have to at the bridge worker level disregard anything after dispose with this warning.

Thoughts? Can discuss in Slack if easier.

</details>


---

<a id="458"></a>

### #458: [Bug] Issues with ReserveCtxFromBridge

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/458 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-17 19:43:07.000 UTC (8 months ago) |
| **Updated** | 2025-10-10 14:01:33.000 UTC |
| **Closed** | 2025-10-10 14:01:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

There was a bug in older CLI where persistence may fail and the worker was getting something like this warning:

    2025-04-17T18:56:22.257529Z  WARN temporal_sdk_core::worker::workflow: Task not found when completing error=status: NotFound, message: "Namespace 0196451a-5a35-7546-9b8d-84a40f52f73e is not found."

Notice the namespace not found. This may be causing a panic/segfault somewhere in the code. Try to replicate this situation, maybe by deleting the namespace while running.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-05-14 19:47:09.000 UTC</summary>

Here's a segfault on Windows after this came from the server:

```
Fatal error. System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt.
   at Temporalio.Bridge.CustomSlotSupplier.ReserveCtxFromBridge(Temporalio.Bridge.Interop.SlotReserveCtx*)
   at Temporalio.Bridge.CustomSlotSupplier+<>c__DisplayClass8_0+<<SafeReserve>b__0>d.MoveNext()
   at System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
   at System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.__Canon, System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]].MoveNext(System.Threading.Thread)
   at System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
   at System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean)
   at System.Threading.Tasks.Task.RunContinuations(System.Object)
   at System.Threading.Tasks.Task.TrySetResult()
   at System.Threading.Tasks.Task+DelayPromise.CompleteTimedOut()
   at System.Threading.TimerQueueTimer.Fire(Boolean)
   at System.Threading.TimerQueue.FireNextTimers()
   at System.Threading.UnmanagedThreadPoolWorkItem.ExecuteUnmanagedThreadPoolWorkItem(IntPtr, IntPtr)
   at System.Threading.UnmanagedThreadPoolWorkItem.ExecuteUnmanagedThreadPoolWorkItem(IntPtr, IntPtr)
   at System.Threading.UnmanagedThreadPoolWorkItem.System.Threading.IThreadPoolWorkItem.Execute()
   at System.Threading.ThreadPoolWorkQueue.Dispatch()
   at System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart()
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-14 15:51:53.000 UTC</summary>

There are also issues after the server leaves like:

```
[10:49:12] fail: Temporalio.Bridge.CustomSlotSupplier[0]
      Error reserving slot
      System.ArgumentNullException: Array cannot be null. (Parameter 'bytes')
         at System.Text.Encoding.GetString(Byte* bytes, Int32 byteCount)
         at Temporalio.Bridge.ByteArrayRef.ToUtf8(TemporalCoreByteArrayRef byteArray) in c:\work\tem\sdk-dotnet\c-bridge-client\temporal-sdk-dotnet\src\Temporalio\Bridge\ByteArrayRef.cs:line 94
         at Temporalio.Bridge.CustomSlotSupplier.ReserveCtxFromBridge(TemporalCoreSlotReserveCtx* ctx) in c:\work\tem\sdk-dotnet\c-bridge-client\temporal-sdk-dotnet\src\Temporalio\Bridge\CustomSlotSupplier.cs:line 213
         at Temporalio.Bridge.CustomSlotSupplier.<>c__DisplayClass8_0.<<SafeReserve>b__0>d.MoveNext() in c:\work\tem\sdk-dotnet\c-bridge-client\temporal-sdk-dotnet\src\Temporalio\Bridge\CustomSlotSupplier.cs:line 97
```
and
```
[10:49:12] fail: Temporalio.Bridge.CustomSlotSupplier[0]
      Error reserving slot
      System.ArgumentOutOfRangeException: Specified argument was out of the range of valid values. (Parameter 'ctx')
         at Temporalio.Bridge.CustomSlotSupplier.ReserveCtxFromBridge(TemporalCoreSlotReserveCtx* ctx) in c:\work\tem\sdk-dotnet\c-bridge-client\temporal-sdk-dotnet\src\Temporalio\Bridge\CustomSlotSupplier.cs:line 219
         at Temporalio.Bridge.CustomSlotSupplier.<>c__DisplayClass8_0.<<SafeReserve>b__0>d.MoveNext() in c:\work\tem\sdk-dotnet\c-bridge-client\temporal-sdk-dotnet\src\Temporalio\Bridge\CustomSlotSupplier.cs:line 97
```

</details>


---

<a id="421"></a>

### #421: [Feature Request] ActivityOptions provider capability for testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/421 |
| **State** | CLOSED |
| **Author** | gauravthadani (Gaurav Thadani) |
| **Created** | 2025-03-07 01:39:22.000 UTC (10 months ago) |
| **Updated** | 2025-03-10 13:30:09.000 UTC |
| **Closed** | 2025-03-10 02:54:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Ability to override ActivityOptions for tests. 

Similar to the experience in the java sdk
https://github.com/temporalio/samples-java/blob/main/core/src/test/java/io/temporal/samples/peractivityoptions/PerActivityOptionsTest.java

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

some pattern to have ActivityOptions in Workflow code, but capability override in tests. 

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 11:11:14.000 UTC</summary>

Java is the only SDK that allows setting default activity options outside of the workflow run itself. We have agreed that this is not usually the right approach as it can lead to differences from one SDK or another. So in Go, TypeScript, .NET, Ruby, Python, etc you set your activity options in the workflow at runtime.

We recommend if you need to have different options (activity options, child options, timer/sleep options, etc) different for different workflow runs, you alter the workflow input to be able to opt-in to the difference (e.g. could have a "test mode" if you must). However, we often caution against this because you are no longer testing the same options you will be actually using.

Reactions: 👍 1

</details>

<details>
<summary><strong>gauravthadani</strong> commented on 2025-03-10 02:54:35.000 UTC</summary>

thanks for all the information and sharing the discussion outcomes. I alignw with this.. closing !

Reactions: 👍 1

</details>


---

<a id="419"></a>

### #419: [Feature Request] Requesting that WorkflowHandle's members are marked virtual or inherit from interface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/419 |
| **State** | CLOSED |
| **Author** | neiljohari (Neil Johari) |
| **Created** | 2025-03-06 23:25:24.000 UTC (10 months ago) |
| **Updated** | 2025-04-09 20:41:06.000 UTC |
| **Closed** | 2025-04-09 20:41:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

I keep running into cases where if I have a service object that manipulates workflow handles, I cannot fake / mock it because `WorkflowHandle` is a record that doesn't inherit from an interface & the methods on it aren't `virtual`, so a dynamic interceptor (like the one FakeItEasy uses) cannot intercept these methods. 

### Describe the solution you'd like

I think my problems would be solved if we marked methods on WorkflowHandle as `virtual`, or had it implement an interface.

### Additional context

I understand there are some aspects of Temporal where faking/mocking is discouraged in favor of integration style tests. I think this is a fair point for testing Workflows & Activities. 

I'm not sure if that's the rationale for making WorkflowHandle unmockable, but if it is I don't think that philosophy should be applied to WorkflowHandle. 

For example, I may have a service object with a method that takes in a request, parses something out, then gets a `WorkflowHandle` and signals the workflow. As a unit test, it'd be great to be able to assert that "given some request to my service object, a call to a `WorkflowHandle` is made to signal with input parameters matching XYZ" but that currently seems quite difficult.




#### Comments (2)

<details>
<summary><strong>mehaKumar</strong> commented on 2025-03-06 23:34:05.000 UTC</summary>

+1 thanks for starting this convo Neil!

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 11:19:20.000 UTC</summary>

> I think my problems would be solved if we marked methods on WorkflowHandle as virtual, or had it implement an interface.

We have tried thus far to either make a method virtual or allow it to be intercepted. So the final non-typesafe overload of `GetResultAsync` _is_ virtual, but `SignalAsync` can be intercepted using a client interceptor. We will look into making the non-typesafe overload of `SignalAsync` virtual soon, but in the meantime, do interceptors work for you?

</details>


---

<a id="417"></a>

### #417: [Bug] Returning original unaltered payload from codec causes error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/417 |
| **State** | CLOSED |
| **Author** | travismcchesney (Travis McChesney) |
| **Created** | 2025-02-27 18:15:01.000 UTC (10 months ago) |
| **Updated** | 2025-03-17 17:12:02.000 UTC |
| **Closed** | 2025-03-17 17:12:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

In a codec that I'm writing, I would like to return the _unaltered_ payload in certain cases (both on encode and decode), without cloning the payload.

### Describe the bug

If a codec returns the originally provided, _unaltered_, payload (either from encode or decode), a seemingly unrelated error is produced:

```
[10:45:36] warn: Temporalio.Workflow:MyWorkflow[0]
      Failed activation on workflow MyWorkflow with ID activity-large-workflow-id and run ID a9a0d02d-b467-40e1-b7d1-cb9435075afc
      System.Collections.Generic.KeyNotFoundException: The given key was not present in the dictionary.
         at Google.Protobuf.Collections.MapField`2.get_Item(TKey key)
         at Temporalio.Converters.DefaultPayloadConverter.ToValue(Payload payload, Type type)
         at Temporalio.Converters.ConverterExtensions.ToValue[T](IPayloadConverter converter, Payload payload)
         at Temporalio.Worker.WorkflowInstance.OutboundImpl.<>c__DisplayClass11_0`1.<<ExecuteActivityInternalAsync>b__0>d.MoveNext()
      --- End of stack trace from previous location ---
         at TemporalioSamples.ActivitySimple.MyWorkflow.RunAsync() in /Users/travis/CloudElements/TaaS/prod-test/dotnet/ActivitySimple/MyWorkflow.workflow.cs:line 16
         at Temporalio.Worker.WorkflowInstance.InboundImpl.ExecuteWorkflowAsync(ExecuteWorkflowInput input)
         at Temporalio.Worker.WorkflowInstance.<ApplyInitializeWorkflow>b__164_1()
         at Temporalio.Worker.WorkflowInstance.RunTopLevelAsync(Func`1 func)
         at Temporalio.Worker.WorkflowInstance.RunOnce(Boolean checkConditions)
         at Temporalio.Worker.WorkflowInstance.Activate(WorkflowActivation act)
```

Note that if you return a `Clone()`ed payload, or an entirely new payload, this error goes away. 

### Minimal Reproduction

See this repo for repro: https://github.com/travismcchesney/temporal-codec-repro

### Environment/Versions

- OS and processor: M3 Mac OS Sonoma 14.7.4
- Temporal Version: CLI 1.1.1 (Server 1.25.1, UI 2.31.2), .NET SDK 1.15.0
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

This is likely related to this issue: https://github.com/temporalio/sdk-dotnet/issues/234. I'm not sure what the right answer is. Without changing anything, it could just be mandated that even unaltered payloads need to be `Clone()`ed , but there is just some mixed messaging in the sample code (see below).

Based on the testing, I suspect that when this happens in the encryption example, it would likely fail: https://github.com/temporalio/samples-dotnet/blob/main/src/Encryption/Codec/EncryptionCodec.cs#L50

My guess is that this bit of code in the SDK is causing the problem: https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Worker/WorkflowCodecHelper.cs#L280-L282

#### Comments (2)

<details>
<summary><strong>travismcchesney</strong> commented on 2025-02-27 18:17:30.000 UTC</summary>

Note that if this is something you want to address in some way, I'm happy to contribute a fix. Just need guidance on the appetite to do anything about it, and what that might look like.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-02-27 20:42:21.000 UTC</summary>

Thanks! So yes that is the bit of code that is causing the problem. I agree there is mixed messaging in that sample allows ignoring payloads but the SDK does not. So this is for sure a bug IMO.

We have that bit because we assume the payload is always mutated and it is expensive to do protobuf equality. However, we'd be ok with identity/reference equality check I think, and we'd definitely welcome a PR here. So ideally the PR would probably surround those three lines with a `if (!Object.ReferenceEquals(encoded, payload)) {` type of check and have some test that fails today but will pass with the new code in place.

If you can't get around to this no problem, we can get to it (though may not be until second week in March).

Reactions: 👍 1

</details>


---

<a id="404"></a>

### #404: [Feature Request] Update .NET SDK with latest Cloud Operations API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/404 |
| **State** | CLOSED |
| **Author** | robcao (Robert Cao) |
| **Created** | 2025-02-03 18:51:48.000 UTC (11 months ago) |
| **Updated** | 2025-02-20 21:38:27.000 UTC |
| **Closed** | 2025-02-20 21:38:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

I'd like the latest version of the Cloud Operations API to be included whenever the next version of the .NET SDK is released.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

The Cloud Operations API definitions are updated to the latest versions in https://github.com/temporalio/api-cloud

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

The current version of the Cloud Operations API included in the .NET SDK is 8 months old: https://github.com/temporalio/sdk-core/tree/b2076604607c3f295b21105386b719782f1dd364/sdk-core-protos/protos/api_cloud_upstream

There have since been features added. In particular, we are interested in the usage API, as it will allow us to ingest relevant billing and activity usage into some of our business insight tools.

It is inconvenient (although not impossible) today to use the latest version of the Cloud Operations API in a program that also uses the Temporal .NET SDK. This is because the .NET SDK includes the compiled definitions of the Cloud Operations protobuf messages: https://github.com/temporalio/sdk-dotnet/tree/main/src/Temporalio/Api/Cloud, and so users will run into namespacing conflicts if attempting to compile the Cloud Operations protobufs as-is in the same program. This is more of a protobuf / dotnet problem than a Temporal problem, but the pain point is still there; we can get around this by editing the Cloud Operations protobuf messages and selectively compiling only the portion of the protobuf messages that don't exist in the .NET SDK.

We don't expect releases of the .NET SDK whenever there is new Cloud Operations functionality added, but it would be nice if the Cloud Operations API definitions could be refreshed during releases of the .NET SDK, similar to how the OSS API definitions are.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-02-03 19:00:26.000 UTC</summary>

We will look into updating this. Note the cloud operations API is non-GA and its support in SDKs is experimental and very likely will go away in favor of a more dedicated cloud .NET home. But in the meantime, yes, we will look into updating.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-02-20 21:38:26.000 UTC</summary>

This was updated in #407 and recently released as 1.5.0

</details>


---

<a id="375"></a>

### #375: [Feature Request] Align activation job application with TS changes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/375 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-12-04 00:12:19.000 UTC (1y 1m ago) |
| **Updated** | 2025-03-19 19:10:10.000 UTC |
| **Closed** | 2025-03-19 19:10:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

.NET currently applies jobs without reordering them (or, as I'm writing this, potentially will as a temporary workaround until we address this), but wakes up the event loop after each job.

In TS, we changed this to apply jobs to state and then run the event loop: https://github.com/temporalio/sdk-typescript/pull/1488

There is a really nice test [here](https://github.com/temporalio/sdk-typescript/pull/1488/files#diff-edcae2d23017bc07e3a859b68e980d151947323c04128f2bc08147bda4a1d7deR2512) @mjameswh added that I think all async languages should have some form of that helps us understand exactly how routines will proceed.

I'm not sure if making this change will actually have consequences to the _realized_ .NET behavior. In any case it should probably be protected with a flag if we make it.

See https://github.com/temporalio/sdk-python/issues/606 for python equivalent

#### Comments (2)

<details>
<summary><strong>Sushisource</strong> commented on 2025-01-06 21:24:30.000 UTC</summary>

We decided not to merge this since it requires a flag, and this change alone doesn't quite justify one. However, if https://github.com/temporalio/sdk-dotnet/issues/386 is done it would make sense to gate this behind the same flag.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-19 16:17:10.000 UTC</summary>

We have now decided to do this in #432 

</details>


---

<a id="316"></a>

### #316: Support WorkflowIdConflictPolicy for Signal-With-Start API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/316 |
| **State** | CLOSED |
| **Author** | stephanos (Stephan Behnke) |
| **Created** | 2024-07-25 15:52:51.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-06 00:07:47.000 UTC |
| **Closed** | 2024-08-06 00:07:47.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

See https://github.com/temporalio/features/issues/437

This is a follow-up to https://github.com/temporalio/sdk-dotnet/pull/304 which added it to StartWorkflow.


---

<a id="290"></a>

### #290: [Bug] Worker does not retry if connection fails and kills the whole process

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/290 |
| **State** | CLOSED |
| **Author** | petrkoutnycz (Petr Koutny) |
| **Created** | 2024-06-27 06:31:06.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-03 16:55:50.000 UTC |
| **Closed** | 2024-07-03 14:50:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying to set up Temporal in our application.

### Describe the bug

When there's a problem when connecting to Temporal service, the `WorkerService` goes down without retrying.

Also, since .NET 6 where background service behavior was changed (see [here](https://learn.microsoft.com/en-us/dotnet/core/compatibility/core-libraries/6.0/hosting-exception-handling)), it takes down the whole app with it. This is unacceptable for us as we need it to run as part the app next to other background services.

Attaching an example of erroneous output. Even though I have permission problem in this case, the whole app goes down. It could be any connection-related problem because of the way how exceptions are handled from the bridge client.

<img width="1366" alt="image" src="https://github.com/temporalio/sdk-dotnet/assets/9723402/d53a97a6-92fa-49df-851e-41b6d894b41e">

### Minimal Reproduction

Basically any sample app works when the connection is wrong. Tested it with .NET 8.

### Environment/Versions

Irrelevant.

### Additional context

Not yet.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-06-27 12:57:36.000 UTC</summary>

We intentionally fail if the worker cannot start. We do retry if there is a connectivity issue _during_ operation, but even then for errors we deem non-retryable we fail after a minute which will fail the service. But users have requested that if the worker cannot start it should fail which seems reasonable. Are you saying the worker should never fail and should just continue to retry? Many users want their process to fail on this kind of failure for visibility.

Also worst case scenario, https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/TemporalWorkerService.cs is a very simple little helper around our normal workers if you needed to have your own alternative.

</details>

<details>
<summary><strong>petrkoutnycz</strong> commented on 2024-07-03 14:50:01.000 UTC</summary>

I am closing this as I am free to write my own worker service with reliability anyhow I want. If I get the free time, I will make it part of samples repo.

</details>


---

<a id="263"></a>

### #263: [Bug] Workflow.WaitConditionAsync may be blocked in Temporal 1.1.1 and will never be passed even when condition is true

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/263 |
| **State** | CLOSED |
| **Author** | eukladchikov-bigw (Ev) |
| **Created** | 2024-06-04 09:28:26.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-07 13:36:02.000 UTC |
| **Closed** | 2024-06-07 13:36:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am upgrading our microservice from Temporal 1.0.0 to 1.1.1 and see that some unit tests fail because they stuck on Workflow.WaitConditionAsync, but downgrading back to 1.0.0 or to 1.1.0 solves the issue

### Describe the bug

Workflow.WaitConditionAsync sometimes hangs probably by a blocked thread caused by this pull request https://github.com/temporalio/sdk-dotnet/pull/242 

I created a generic test that reproduces the bug for Temporal 1.1.1 and works fine downgrading to 1.1.0

In my test it is getting stuck on workflow line:
`await Workflow.WaitConditionAsync(() => _preorderCount == n);`


### Minimal Reproduction

I use Visual Studio 2022 to run it
.NET Project file:

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
	<PackageReference Include="FluentValidation" Version="11.7.1" />
	<PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" />
	<PackageReference Include="Shouldly" Version="4.2.1" />
	<PackageReference Include="Temporalio" Version="1.1.1" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.3.2" />
    <PackageReference Include="xunit" Version="2.4.2" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.5">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
    <PackageReference Include="coverlet.collector" Version="3.1.2">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
  </ItemGroup>

</Project>
```

Unit test .cs file:

```
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Shouldly;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Reflection;
using Temporalio.Activities;
using Temporalio.Client;
using Temporalio.Testing;
using Temporalio.Worker;
using Temporalio.Workflows;

namespace TemporalWaitConditionAsyncIssue;

public class UnitTest1
{
	private ServiceProvider? _serviceProvider;
	private TemporalWorker? _temporalWorker;

	public WorkflowEnvironment? WorkflowEnvironment { get; private set; }

	[Fact]
	public async Task Should_WaitForPreorderCount()
	{
		ClearTemporalCache();
		await StartWorkflowEnvironment(false);
		var wfId = Guid.NewGuid().ToString();
		await StartTemporal(wfId);
		var workflowClient = CreateWorkflowClient(wfId);

		// Act
		for (int i = 0; i < GenericWorkflow1.ConditionCount; i++)
		{
			await workflowClient.SignalPreorderConsignmentReady(wfId);
			await Task.Delay(TimeSpan.FromSeconds(1));
		}

		await Task.Delay(TimeSpan.FromSeconds(5));

		// Assert
		GenericWorkflow1.Finished.ShouldBeTrue();
	}

	private void ClearTemporalCache()
	{
		var cachedDefinitionsField = typeof(ActivityDefinition)
			.GetField("CachedDefinitions", BindingFlags.NonPublic | BindingFlags.Static)
			?.GetValue(null);

		var activityCache = cachedDefinitionsField as ConcurrentDictionary<MethodInfo, ActivityDefinition>;
		activityCache?.Clear();
	}
	private async Task StartWorkflowEnvironment(bool withTimeSkipping)
	{
		WorkflowEnvironment = withTimeSkipping
			? await WorkflowEnvironment.StartTimeSkippingAsync(new WorkflowEnvironmentStartTimeSkippingOptions { })
			: await WorkflowEnvironment.StartLocalAsync();
	}

	private async Task StartTemporal(string taskQueue)
	{
		await StartWorkerService(taskQueue, configureOptions: options =>
		{
			options
				.AddWorkflow<GenericWorkflow1>();
		});

		var workflowId = GenericWorkflow1.GetWorkflowId(taskQueue);
		var options = new WorkflowOptions
		{
			Id = workflowId,
			TaskQueue = taskQueue,
		};

		await WorkflowEnvironment!.Client.StartWorkflowAsync<GenericWorkflow1>(
			wf => wf.RunAsync(),
			options);
	}

	private async Task StartWorkerService(
		string taskQueue = "default",
		Action<TemporalWorkerOptions>? configureOptions = null)
	{
		_temporalWorker?.Dispose();

		if (_serviceProvider != null) await _serviceProvider.DisposeAsync();
		if (WorkflowEnvironment == null)
		{
			throw new InvalidOperationException("The workflow environment has not been started. Precede this call with a call to StartWorkflowEnvironment.");
		}

		var serviceCollection = new ServiceCollection();

		if (configureOptions == null)
		{
			_serviceProvider = serviceCollection.BuildServiceProvider();
		}
		else
		{
			_serviceProvider = serviceCollection.BuildServiceProvider();

			var workerOptions = new TemporalWorkerOptions(taskQueue)
			{
				LoggerFactory = new NullLoggerFactory(),
				DebugMode = Debugger.IsAttached
			};

			configureOptions(workerOptions);

			_temporalWorker = new TemporalWorker(
				WorkflowEnvironment.Client,
				workerOptions);

			// Do not await this task as it will block the test execution
#pragma warning disable CS4014
			_temporalWorker.ExecuteAsync(CancellationToken.None);
#pragma warning restore CS4014
		}
	}

	private GenericWorkflowClient CreateWorkflowClient(string taskQueue = "default")
	{
		if (WorkflowEnvironment == null)
		{
			throw new InvalidOperationException("The workflow environment has not been started. Precede this call with a call to StartWorkflowEnvironment.");
		}

		return new GenericWorkflowClient(WorkflowEnvironment.Client);

	}
}

[Workflow]
public class GenericWorkflow1
{
	public const int ConditionCount = 2;
	public static bool Finished = false;

	private int _preorderCount = 0;

	public static string GetWorkflowId(string orderId)
	{
		return $"{orderId}";
	}

	[WorkflowRun]
	public async Task RunAsync()
	{
		int n = ConditionCount;

		for (int i = 0; i < n; i++)
		{
			await Workflow.WaitConditionAsync(() => _preorderCount > i && _preorderCount <= n);
		}

		await Workflow.WaitConditionAsync(() => _preorderCount == n);

		Finished = true;

	}

	[WorkflowSignal]
	public Task PreorderReady()
	{
		_preorderCount++;
		return Task.CompletedTask;
	}
}

public class GenericWorkflowClient
{
	private readonly ITemporalClient _client;

	public GenericWorkflowClient(ITemporalClient client)
	{
		_client = client;
	}

	public async Task SignalPreorderConsignmentReady(string wfId)
	{
		var workflowId = GenericWorkflow1.GetWorkflowId(wfId);

		await _client.StartWorkflowAsync<GenericWorkflow1>(
				wf => wf.RunAsync(),
				new WorkflowOptions(workflowId, wfId)
				{
					StartSignal = nameof(GenericWorkflow1.PreorderReady),
					StartSignalArgs = Array.Empty<object>()
				});
	}
}
```

### Environment/Versions

- OS and processor: x86 Windows
- Temporalio Version 1.1.1
- Using nuget package and Visual Studio 2022

### Additional context

Suspect these changes https://github.com/temporalio/sdk-dotnet/pull/242 


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-06-04 13:06:46.000 UTC</summary>

Yes, this is a known bug we accidentally caused. You can downgrade to 1.1.0 or wait until an patch release (today or tomorrow) coming when #259 is merged.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-06-07 13:36:01.000 UTC</summary>

This should now be fixed with 1.1.2.

</details>


---

<a id="256"></a>

### #256: [Feature Request] Clarify what the ICustomMetricMeter is used for in DiagnosticSource extension README

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/256 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-30 13:29:34.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-30 13:29:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

At https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.DiagnosticSource/README.md it is unclear to readers of the initial paragraph what the `ICustomMetricMeter` is for. Clarify it is for runtime options and what it's used for.


---

<a id="218"></a>

### #218: [Feature Request] Add visibility link in list workflow method XML doc

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/218 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-11 20:47:00.000 UTC (1y 9m ago) |
| **Updated** | 2025-04-09 20:41:06.000 UTC |
| **Closed** | 2025-04-09 20:41:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
Link https://docs.temporal.io/visibility from the list workflow method XML doc



#### Comments (2)

<details>
<summary><strong>canonw</strong> commented on 2024-04-11 20:53:35.000 UTC</summary>

Is https://docs.temporal.io/visibility#list-filter better URL since it jump to the most relevant content?

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-04-11 21:02:04.000 UTC</summary>

My concern there is two-fold: 1) anchors are not very stable, and 2) for many the general concept of visibility is important to understand. Having said that, we should probably make list filter more prominent

</details>


---

<a id="214"></a>

### #214: [Feature Request] Document Asynchronous Activity Completion in README

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/214 |
| **State** | CLOSED |
| **Author** | send2vinnie (send2vinnie) |
| **Created** | 2024-03-30 07:54:21.000 UTC (1y 9m ago) |
| **Updated** | 2025-02-04 18:19:50.000 UTC |
| **Closed** | 2025-02-04 18:19:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Allow the calling of Activity to return without the Activity Execution to complete. The Temporal Client can then be used to both Heartbeat Activity Execution progress and eventually provide complete the Activity Execution and provide a result.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-04-01 14:11:40.000 UTC</summary>

Asynchronous activity is already supported. You can `throw new Temporalio.Activities.CompleteAsyncException()` to tell the activity you'll be completing outside of the function, and use `myClient.GetAsyncActivityHandle(...)` to get a handle to manually heartbeat, complete, etc. The task token for use in that call is available via `Temporalio.Activities.ActivityExecutionContext.Current.Info.TaskToken`.

I will update the title of this issue to just make sure we document this in the README.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:19:48.000 UTC</summary>

Closing in favor of async activity completion documentation in the primary docs at https://docs.temporal.io/develop/dotnet/asynchronous-activity

</details>


---

<a id="211"></a>

### #211: [Feature Request] Add search to API reference

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/211 |
| **State** | CLOSED |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2024-03-28 05:07:00.000 UTC (1y 9m ago) |
| **Updated** | 2025-02-04 18:19:02.000 UTC |
| **Closed** | 2025-02-04 18:19:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Filtering doesn't have methods. Here I'm looking for `Workflow.DelayAsync`:

<img width="343" alt="image" src="https://github.com/temporalio/sdk-dotnet/assets/251288/43c6692c-c389-4100-8cac-a3a4f2671538">

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Filter working for more things, or a search box elsewhere on page.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

Workaround is googling for `site:https://dotnet.temporal.io delayasync` but it doesn't take me to the right anchor, just the top of the page https://dotnet.temporal.io/api/Temporalio.Workflows.Workflow.html

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-03-28 12:23:41.000 UTC</summary>

We use https://dotnet.github.io/docfx/, so it'd be dependent upon what they support. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:19:00.000 UTC</summary>

Closing as not something we can reasonably do since we use the language-standard documentation generator

</details>


---

<a id="197"></a>

### #197: [Feature Request] Clarification of the release cycle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/197 |
| **State** | CLOSED |
| **Author** | dpr-dev (Arthur Irgashev) |
| **Created** | 2024-03-06 14:48:51.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-06 21:38:42.000 UTC |
| **Closed** | 2024-03-06 21:38:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Hi all

Guys, thanks a lot for the .net sdk

Unfortunately, it's been about 3 months since the first version of the sdk was released in nuget,. Nevertheless, it can be seen that some useful fixes have been made (and work on .net sdk continues). Based on this, I have a quick question

Have you ever thought about describing the release cycle of .net sdk in some way ? This would help a lot in waiting for certain features or bug fixes. For example, this could be done with projects or milestones on github. 

What do you think about this ? 

Thank you


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-03-06 17:08:50.000 UTC</summary>

> Have you ever thought about describing the release cycle of .net sdk in some way ? This would help a lot in waiting for certain features or bug fixes.

We don't have a fixed release cycle since there are not enough changes to justify one (as there were for past SDKs where we were adding a lot of features). Therefore we try not to have public milestones to build expectations. Basically it'd just be a single "next" milestone with no specific time set which has no real value.

We tend to release as issues warrant. We will happily field requests to release sooner (here, or maybe even better, on [Slack](https://t.mp/slack) in the `#dotnet-sdk` channel).

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-03-06 21:38:42.000 UTC</summary>

(closing as question, but feel free to continue to discuss here or on Slack or wherever)

Reactions: 👍 1

</details>


---

<a id="187"></a>

### #187: [Bug] AddAllActivities not working

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/187 |
| **State** | CLOSED |
| **Author** | eugbyte (Eugene) |
| **Created** | 2024-02-09 07:47:18.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-09 19:37:48.000 UTC |
| **Closed** | 2024-02-09 12:07:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->
Unit testing workflow with mock activity.
### Describe the bug
I created a MockActivity
```
public class MockActivities : IActivities {
    [Activity]
    public string GetName(string id) => "abc";
    [Activity]
    public string GetSurname(string id) => "def";
}

```

When I tried to mock the activity for the unit test, e.g.
```
[Fact]
public async Task WorkflowSucceeds() {
await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
using var worker = new TemporalWorker(
  env.Client,
  new TemporalWorkerOptions($"task-queue-{Guid.NewGuid()}")
  .AddAllActivities<IActivities>(new MockActivities())
  .AddWorkflow<MyWorkflow>());
}

```

I get the following error:
```
System.ArgumentException : No activities found on MyNamespace (Parameter 'type')
```

#### Comments (2)

<details>
<summary><strong>eugbyte</strong> commented on 2024-02-09 12:07:17.000 UTC</summary>

Ok I found the reason.

The `[Activity]` attribute must not only be added to the method, but also the interface should the Activity Class implement the interface, e.g.

```
public interface IActivity {
    [Activity]
    public async Task<string> GetName(string id);
}

public class MockActivities : IActivities {
    [Activity]
    public async Task<string> GetName(string id) => "abc";
}

```

Will be good if you can amend the documentation to specify that the `[Activity]` also be added to interfaces which Activity class implement.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-02-09 19:37:47.000 UTC</summary>

Yes, I will make a note to make it clear that the attribute is intentionally not inherited and needs to be in both place if the definition and implementation are in separate places.

</details>


---

<a id="184"></a>

### #184: [Bug] [Blazor Webassembly] System.Diagnostics.Process is not supported on this platform

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/184 |
| **State** | CLOSED |
| **Author** | djnice |
| **Created** | 2024-01-31 14:47:14.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-12 13:45:59.000 UTC |
| **Closed** | 2024-02-12 13:45:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

When I try to start a workflow, an exception occurs as mentioned in the subject.

The error is in line 41 of TemporalConnection.cs:
options.Identity ??= System.Diagnostics.Process.GetCurrentProcess().Id

Please use the System.Environment.ProcessId method instead, it works under Webassembly and also more efficient:
[https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1837](url)

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-01-31 15:32:51.000 UTC</summary>

> Please use the System.Environment.ProcessId method instead

That is not supported across all .NET versions this library supports. We could use compiler directives to use this newer approach with newer .NET versions, but you're going to hit other WASM issues with this SDK.

> it works under Webassembly and also more efficient:

We use a Rust-based core for this library via P/Invoke and therefore it won't be Blazor/WASM compatible anyways. Our Rust-based core is not WASM capable at this time.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-02-12 13:45:58.000 UTC</summary>

(closing as question, but feel free to respond or join us on Slack or our forums)

</details>


---

<a id="166"></a>

### #166: [Feature Request] Ability for certain task failure types to fail workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/166 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-12-11 12:58:38.000 UTC (2y 1m ago) |
| **Updated** | 2024-03-21 12:55:21.000 UTC |
| **Closed** | 2024-03-21 12:55:21.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

From https://github.com/temporalio/features/issues/322, need:

* `IReadOnlyCollection<Type> WorkflowFailureExceptionTypes` on `TemporalWorkerOptions`
* `Type[] FailureExceptionTypes` on `WorkflowAttribute` and `IReadOnlyCollection<Type> FailureExceptionTypes` on `WorkflowDefinition`
* Disallow `InvalidWorkflowOperationException` until https://github.com/temporalio/sdk-core/issues/656 is done


---

<a id="165"></a>

### #165: [Bug] Failed decoding parameters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/165 |
| **State** | CLOSED |
| **Author** | dev-danx (DanxDevelop) |
| **Created** | 2023-12-08 12:38:03.000 UTC (2y 1m ago) |
| **Updated** | 2023-12-11 13:25:43.000 UTC |
| **Closed** | 2023-12-11 12:43:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Sending jsonString as parameter to activity

{"message":"Failed decoding parameters","source":"","stackTrace":"   at Temporalio.Worker.ActivityWorker.ExecuteActivityInternalAsync(RunningActivity act, ActivityTask tsk)","encodedAttributes":null,"cause":{"message":"The JSON value could not be converted to System.String. Path: $ | LineNumber: 0 | BytePositionInLine: 1.","source":"","stackTrace":"   at System.Text.Json.ThrowHelper.ReThrowWithPath(ReadStack& state, Utf8JsonReader& reader, Exception ex)\n   at System.Text.Json.Serialization.JsonConverter`1.ReadCore(Utf8JsonReader& reader, JsonSerializerOptions options, ReadStack& state)\n   at System.Text.Json.Serialization.Metadata.JsonTypeInfo`1.DeserializeAsObject(Utf8JsonReader& reader, ReadStack& state)\n   at System.Text.Json.JsonSerializer.ReadFromSpanAsObject(ReadOnlySpan`1 utf8Json, JsonTypeInfo jsonTypeInfo, Nullable`1 actualByteCount)\n   at System.Text.Json.JsonSerializer.Deserialize(ReadOnlySpan`1 utf8Json, Type returnType, JsonSerializerOptions options)\n   at Temporalio.Converters.JsonPlainConverter.ToValue(Payload payload, Type type)\n   at Temporalio.Converters.DefaultPayloadConverter.ToValue(Payload payload, Type type)\n   at Temporalio.Converters.ConverterExtensions.ToSingleValueAsync(DataConverter converter, IReadOnlyCollection`1 payloads, Type type)\n   at Temporalio.Worker.ActivityWorker.ExecuteActivityInternalAsync(RunningActivity act, ActivityTask tsk)","encodedAttributes":null,"cause":{"message":"Cannot get the value of a token type 'StartObject' as a string.","source":"","stackTrace":"   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ExpectedString(JsonTokenType tokenType)\n   at System.Text.Json.Utf8JsonReader.GetString()\n   at System.Text.Json.Serialization.JsonConverter`1.TryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value, Boolean& isPopulatedValue)\n   at System.Text.Json.Serialization.JsonConverter`1.ReadCore(Utf8JsonReader& reader, JsonSerializerOptions options, ReadStack& state)","encodedAttributes":null,"cause":null,"applicationFailureInfo":{"type":"InvalidOperationException","nonRetryable":false,"details":null}},"applicationFailureInfo":{"type":"JsonException","nonRetryable":false,"details":null}},"applicationFailureInfo":{"type":"","nonRetryable":false,"details":null}}

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-12-08 15:46:49.000 UTC</summary>

If you're sending a string as a parameter, the parameter type needs to be string. If you're sending an object, you send the object and the data converter converts it to JSON for you. Can you show exact code of the issue?

(also feel free to join us on the #dotnet-sdk channel on [Slack](https://t.mp/slack))

</details>

<details>
<summary><strong>dev-danx</strong> commented on 2023-12-11 12:43:14.000 UTC</summary>

you are correct

</details>


---

<a id="156"></a>

### #156: [Feature Request] Clarify that the client is threadsafe

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/156 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-15 19:22:21.000 UTC (2y 1m ago) |
| **Updated** | 2024-02-12 21:13:54.000 UTC |
| **Closed** | 2024-02-12 21:13:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

In the docs for `ITemporalClient`, clarify that it is thread safe and not only meant for multithreaded use, but encouraged so it can leverage connection pooling effectively


---

<a id="145"></a>

### #145: [Feature Request] StartDelay in Workflow Options

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/145 |
| **State** | CLOSED |
| **Author** | tlalfano (Tasha Alfano) |
| **Created** | 2023-10-23 19:18:37.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-24 21:20:52.000 UTC |
| **Closed** | 2023-10-24 21:20:51.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Expose StartDelay in Workflow Options


---

<a id="139"></a>

### #139: [Feature Request] Clarify support for alternative architectures

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/139 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-10 11:53:48.000 UTC (2y 3m ago) |
| **Updated** | 2024-02-12 14:01:05.000 UTC |
| **Closed** | 2024-02-12 14:01:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Do a better job of documenting that our NuGet package doesn't support Windows ARM, 32-bit, or Linux MUSL. We could consider building for these alternative architectures (e.g. having a `Temporalio.Extensions.Runtimes.LinuxMusl`) but we'd have to find a GH runner for them.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-10-25 20:14:34.000 UTC</summary>

https://github.com/asimmon/ephemeral-mongo#reducing-the-download-size is an example of using separate packages for specific arch/distro.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-02-12 14:01:05.000 UTC</summary>

Support is clarified in the README

</details>


---

<a id="131"></a>

### #131: [Feature Request] Support single-platform local NuGet package build

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/131 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-30 12:05:00.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-01 16:22:50.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like
Today we only build NuGet packages in a GitHub workflow because it requires building across many systems and combining. But some people want to build the NuGet package locally, so we should support it, even if it is for only one platform.




---

<a id="125"></a>

### #125: [Feature Request] Support client keep alive

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/125 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-04 15:09:38.000 UTC (2y 5m ago) |
| **Updated** | 2023-10-09 20:15:34.000 UTC |
| **Closed** | 2023-10-09 20:15:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like
Expose whatever is decided at https://github.com/temporalio/sdk-core/issues/585 once that is done




---

<a id="108"></a>

### #108: [Feature Request] Support unsafe tracing event disabling in workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/108 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-17 15:54:35.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-19 19:51:38.000 UTC |
| **Closed** | 2023-07-19 19:51:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

```
using (Workflow.Unsafe.TracingEventsDisabled())
{
    // code
}
```

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-07-18 18:47:49.000 UTC</summary>

After further discussion, this would be better as a property that can be set

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-07-19 19:51:37.000 UTC</summary>

The use case for this was to support running arbitrary non-workflow async calls in workflow interceptors. However, this is trickier than it seems. If you `await` it _may_ use the current task scheduler. We have found a way to do this by creating a task on the default scheduler and explicitly `Wait`ing on it, but it's even harder to get back on the workflow scheduler if you want that.

I am closing this since the solution presented (disabling this inside a workflow) does not solve the actual problem of running outside the workflow scheduler. I can reopen if we do want to revisit this.

</details>


---

<a id="90"></a>

### #90: [Feature Request] Random with larger seed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/90 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-06-21 12:04:46.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-28 13:08:48.000 UTC |
| **Closed** | 2023-06-28 13:08:48.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Maybe use https://docs.rs/rand/latest/rand/trait.SeedableRng.html#method.seed_from_u64. Will be **💥 BREAKING CHANGE**.


---

<a id="85"></a>

### #85: [Feature Request] Re-investigate signals/queries/activities as properties

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/85 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-06-12 16:26:51.000 UTC (2y 7m ago) |
| **Updated** | 2023-06-14 13:04:24.000 UTC |
| **Closed** | 2023-06-14 13:04:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We initially didn't allow signals or queries as properties because we required delegates to invoke them. But now that we're using expressions we probably can. Specifically, we may want to support:

* `[WorkflowSignal]` on properties with setters where the setter is invoked for the signal
* `[WorkflowQuery]` on properties where the getter is invoked for the query

When `[WorkflowUpdate]` comes around, setting it on a property will invoke the setter and return the getter


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-06-13 12:56:05.000 UTC</summary>

Even activities can be properties

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-06-13 22:05:50.000 UTC</summary>

So we can't do signals because .NET lambda expression trees don't support assignment operators. And there's not a good reason to support activities as property getters at this time (should be clear they are methods). But workflow queries make plenty of sense as properties.

</details>


---

<a id="45"></a>

### #45: Using dependency injection in a "worker" project hangs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/45 |
| **State** | CLOSED |
| **Author** | jakejscott (Jake Scott) |
| **Created** | 2023-04-10 08:36:07.000 UTC (2y 9m ago) |
| **Updated** | 2023-07-25 12:30:37.000 UTC |
| **Closed** | 2023-07-25 12:30:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I created a "worker" project template that uses the `IHostedService` and `BackgroundService`.  I added the ITemporalClient to the services container as a singleton.  If I construct the client within the Worker class it works.
 
https://learn.microsoft.com/en-us/dotnet/core/extensions/workers

### Describe the bug

Starting the worker seems to hang

### Minimal Reproduction

**Program.cs**

```csharp
using Temporalio.Client;

var client = await TemporalClient.ConnectAsync(new TemporalClientConnectOptions
{
    TargetHost = "localhost:7233",
    Namespace = "default",
});

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddLogging(x =>
        {
            x.AddSimpleConsole(options =>
            {
                options.TimestampFormat = "yyyy-mm-ddTHH:mm:ss.ff ";
                options.UseUtcTimestamp = true;
                options.IncludeScopes = false;
                options.SingleLine = true;
            });
        });

        services.AddSingleton<ITemporalClient>(client);

        services.AddHostedService<Worker>();
    })
    .Build();

host.Run();
```

**Worker.cs**

```csharp
using Temporalio.Client;
using Temporalio.Worker;

public class Worker : BackgroundService
{
    private readonly ILoggerFactory _loggerFactory;
    private readonly ILogger<Worker> _logger;
    private readonly ITemporalClient _client;

    public Worker(ILoggerFactory loggerFactory, ILogger<Worker> logger, ITemporalClient client)
    {
        _loggerFactory = loggerFactory;
        _logger = logger;
        _client = client;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting worker");
        
        // NOTE: If I connect like this it works. If I use dependency injection it doesn't. 
        // var client = await TemporalClient.ConnectAsync(new TemporalClientConnectOptions
        // {
        //     TargetHost = "localhost:7233",
        //     Namespace = "default",
        // });

        using var worker = new TemporalWorker(_client, new TemporalWorkerOptions
        {
            TaskQueue = "my-task-queue",
            LoggerFactory = _loggerFactory,
            Workflows = new List<Type>
            {
                typeof(SimpleWorkflow)
            }
        });

        await worker.ExecuteAsync(stoppingToken);
        
        _logger.LogInformation("Shutdown worker");
    }
}
```
x86 Windows
temporal cli




#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-04-10 15:12:01.000 UTC</summary>

This is surely the same issue as #44. Creating a client on the outside of a DI container is not working (and it's not best practice). See https://github.com/temporalio/sdk-dotnet/issues/44#issuecomment-1501936301 for the suggested alternative currently. In the meantime I'll try to find out why the external creation is having an issue (even if it is bad practice).

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-07-25 12:30:37.000 UTC</summary>

Closing in favor of #44

</details>


---

<a id="30"></a>

### #30: Add API to count workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/30 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-03-03 22:05:48.000 UTC (2y 10m ago) |
| **Updated** | 2024-03-21 17:14:39.000 UTC |
| **Closed** | 2024-03-21 17:14:39.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

See parent issue for more information.




---

<a id="22"></a>

### #22: Temporal CLI based ephemeral server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/22 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-02-12 23:25:22.000 UTC (2y 11m ago) |
| **Updated** | 2023-05-25 19:24:38.000 UTC |
| **Closed** | 2023-05-25 19:24:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

- [ ] Opt out of version check for servers started by the SDK test framework - there's no value for users since we typically start it without the UI and can't show upgrade notifications

#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2023-02-12 23:26:56.000 UTC</summary>

Depends on https://github.com/temporalio/sdk-core/issues/485

No need to maintain support for Temporalite.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-25 19:24:37.000 UTC</summary>

Closing as duplicate of #50 

</details>


---

<a id="565"></a>

### #565: Refactor test workflows into separate files

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/565 |
| **State** | CLOSED |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2025-11-19 18:09:29.000 UTC (1 months ago) |
| **Updated** | 2025-11-19 20:51:58.000 UTC |
| **Closed** | 2025-11-19 20:51:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As discussed in https://github.com/temporalio/sdk-dotnet/pull/562#discussion_r2539972567, it is proposed that workflows in tests should be refactored into separate source code files that match the pattern `*.workflow.cs`. This would allow:
- Removal of the inline suppressions of various code analysis rules within the tests
- Using `.editorconfig` recommendations but for testing

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-11-19 18:49:15.000 UTC</summary>

I don't think we should do this FWIW, I think tests right next to their workflow/activity implementations is ideal for comprehension and test authoring. So much so, we even disable `SA1201` and `SA1204` for the test suite because we want people to be able to declare classes right above the test that uses them.

</details>


---

<a id="550"></a>

### #550: [Bug] Investigate `CanRunWith_CustomSlotSupplier` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/550 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-24 19:53:54.000 UTC (2 months ago) |
| **Updated** | 2025-12-02 23:26:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In rare situations, `Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier` fails with:

```
  Failed Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [199 ms]
  Error Message:
   Assert.Equal() Failure
Expected: 27
Actual:   28
  Stack Trace:
     at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs:line 227
--- End of stack trace from previous location ---
  Standard Output Messages:
 [2025-10-24 19:04:36Z] info: Temporalio.Worker.TemporalWorker[0]
       User task completed, shutting down
 [2025-10-24 19:04:36Z] info: Temporalio.Worker.ActivityWorker[0]
       Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
 [2025-10-24 19:04:36Z] warn: Temporalio.Worker.TemporalWorker[0]
       Worker finalization failed
 System.InvalidOperationException: Cannot finalize, expected 1 reference, got 2
    at Temporalio.Bridge.Worker.FinalizeShutdownAsync() in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Bridge/Worker.cs:line 448
    at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 437
```

#### Comments (1)

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-02 23:26:40.000 UTC</summary>

Repro'd in https://github.com/temporalio/sdk-dotnet/actions/runs/19876427208/job/56964817974?pr=569

Reactions: ❤️ 1

</details>


---

<a id="522"></a>

### #522: [Feature Request] Consider updating tests to use .NET 10

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/522 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-22 14:59:49.000 UTC (3 months ago) |
| **Updated** | 2025-11-19 16:07:27.000 UTC |
| **Closed** | 2025-11-19 16:07:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We should probably update `tests/Temporalio.Tests/Temporalio.Tests.csproj` to use `<TargetFramework>net10.0</TargetFramework>` instead of `.net6.0` it does today. Also, while we had to downgrade the `dotnetVersionOverride` in `ci.yml` for Windows for #517 due to new dependencies requiring 6.x (we broke off this issue at that time), as part of this, we can probably just completely remove `dotNetVersionOverride` concept in `ci.yml`.

There should be a discussion on _whether_ we should stay on .NET 6 forever to allow our tests to make sure we run on at least this .NET version forever.

#### Comments (1)

<details>
<summary><strong>maciejdudko</strong> commented on 2025-10-07 17:02:41.000 UTC</summary>

There will soon be .NET 10 LTS release, we decided to upgrade when it's available. Going to edit this issue from 9 to 10.

Reactions: 👍 1

</details>


---

<a id="514"></a>

### #514: [Feature Request] Nexus cancellation type support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/514 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-29 18:57:15.000 UTC (4 months ago) |
| **Updated** | 2026-01-08 22:16:03.000 UTC |
| **Closed** | 2026-01-08 22:16:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to do https://github.com/temporalio/sdk-python/pull/981, but for .NET

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-10-14 12:44:08.000 UTC</summary>

Note, there is an issue with Core this found and is waiting on fix for: https://github.com/temporalio/sdk-core/issues/1026

</details>


---

<a id="502"></a>

### #502: Can I have separate worker and client applications without duplicating all workflows and activities?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/502 |
| **State** | CLOSED |
| **Author** | brightly-kenbarnett (Ken Barnett) |
| **Created** | 2025-08-04 23:20:30.000 UTC (5 months ago) |
| **Updated** | 2025-08-05 12:40:35.000 UTC |
| **Closed** | 2025-08-05 12:40:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I have created a worker service in K8 for several workflows with constituent activities.  There is a fair bit of implementation code involved.  I would like to have the worker register with a shared Temporal.io server and service the task queue for my workflows.  A different server, already providing REST services, would be used to configure schedules and start workflows.  Every example I have seen of the .NET SDK uses a lambda like the following:
```
var handle = await client.StartWorkflowAsync(
    (MyWorkflow wf) => wf.RunAsync("some workflow argument"),
    new() { ID = "my-workflow-id", TaskQueue = "my-task-queue" });
```
The MyWorkFlow typing effectively requires that I pull in the entire dependency tree (out to DI provided services, at least).

Is there a way to simply do something like the following?
```
var handle = await client.StartWorkflowAsync("myworkflowname", args, new() { ID = ... });
```

The CLI lets you do this (as with the following).  Is there a way to access the CLI processor via gRPC or REST?

```
temporal workflow start \
    --workflow-id YourWorkflowId \
    --type YourWorkflow \
    --task-queue YourTaskQueue \
    --input '{"some-key": "some-value"}'
```

Thank you in advance!

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-08-05 12:40:35.000 UTC</summary>

> Is there a way to simply do something like the following?

Absolutely. See the overloads for `StartWorkflowAsync`. One accepts a string workflow type name and an object collection of arguments. The lambda-expression-based ones are just type-safe sugar for the string based ones.

Closing, but feel free to continue commenting. Also, feel free to ask general questions in the `#dotnet-sdk` channel in [Slack](https://t.mp/slack) or the [forum](https://community.temporal.io).

</details>


---

<a id="496"></a>

### #496: Inconsistent log property names for the workflow run identifier

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/496 |
| **State** | OPEN |
| **Author** | DSmith-VERX (D Smith) |
| **Created** | 2025-07-10 21:21:53.000 UTC (6 months ago) |
| **Updated** | 2025-07-10 22:00:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I'm not sure if this would be more of a bug report or a feature request since it could be intentional. The logs within the context of a workflow (Workflow.Logger) show RunId as a property within structured log templates. The logs  within the context of an activity (using ILogger via DI in my case or Activity.Logger itself) use WorkflowRunId for this same information. 
Both loggers use WorkflowId and other properties with consistent names. Should the run identifier not also use the Workflow prefix with the workflow logger to consistency with the other workflow properties and shared properties within the activity?

This is not hugely important, but it did initially cause some confusion when filtering our logs to track down an issue where a fully completed activity "timed out" and never returned to the main workflow.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-07-10 21:59:15.000 UTC</summary>

It is intentional that we match the field names in the logger scope with the property names in the respective "info" objects. So the activity scope at https://github.com/temporalio/sdk-dotnet/blob/8e94382bc762f7b383c9ae17d82adc966d95f09f/src/Temporalio/Activities/ActivityInfo.cs#L63-L72 and the workflow scope at https://github.com/temporalio/sdk-dotnet/blob/8e94382bc762f7b383c9ae17d82adc966d95f09f/src/Temporalio/Workflows/WorkflowInfo.cs#L63-L71 do match those field names. Arguably we could have made `WorkflowInfo.RunId` be named `WorkflowInfo.WorkflowRunId` but we removed the `Wortkflow` prefix in cases where it made sense to there. Same thing with the `Namespace` field. But yes, arguably we could have had the logger scope deviate.

Unfortunately, I am not sure it'd be worth changing now due to potential incompatibilities where people may be expecting the different scope field names (and not sure we want to add a second and have duplicate values nor have an entirely new worker option for changing this). However, you can make a workflow interceptor that surrounds the workflow execution inside a `BeginScope` with whatever additional scope values you'd like.

</details>


---

<a id="489"></a>

### #489: [Feature Request] Provide last result and last failure to workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/489 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-09 14:16:16.000 UTC (7 months ago) |
| **Updated** | 2025-10-07 17:52:37.000 UTC |
| **Closed** | 2025-10-07 17:52:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/635


#### Comments (1)

<details>
<summary><strong>maciejdudko</strong> commented on 2025-10-07 17:52:32.000 UTC</summary>

Already done in #136

</details>


---

<a id="478"></a>

### #478: [Feature Request] Investigate test flake for `CanRunWith_CustomSlotSupplier`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/478 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-14 19:44:14.000 UTC (7 months ago) |
| **Updated** | 2025-06-03 16:17:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Got flake of:

```
 [xUnit.net 00:00:26.64]     Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [FAIL]
[xUnit.net 00:00:26.65]       Assert.Equal() Failure
[xUnit.net 00:00:26.65]       Expected: 20
[xUnit.net 00:00:26.65]       Actual:   21
[xUnit.net 00:00:26.65]       Stack Trace:
[xUnit.net 00:00:26.65]         /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs(222,0): at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier()
[xUnit.net 00:00:26.65]         --- End of stack trace from previous location ---
[xUnit.net 00:00:26.65]       Output:
[xUnit.net 00:00:26.65]         [2025-05-14 19:14:51Z] info: Temporalio.Worker.TemporalWorker[0]
[xUnit.net 00:00:26.65]               User task completed, shutting down
[xUnit.net 00:00:26.65]         [2025-05-14 19:14:51Z] info: Temporalio.Worker.ActivityWorker[0]
[xUnit.net 00:00:26.65]               Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
  Failed Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [983 ms]
  Error Message:
   Assert.Equal() Failure
Expected: 20
Actual:   21
  Stack Trace:
     at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs:line 222
--- End of stack trace from previous location ---
  Standard Output Messages:
 [2025-05-14 19:14:51Z] info: Temporalio.Worker.TemporalWorker[0]
       User task completed, shutting down
 [2025-05-14 19:14:51Z] info: Temporalio.Worker.ActivityWorker[0]
       Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
```

Investigate

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-06-03 16:17:51.000 UTC</summary>

Almost certainly because of https://github.com/temporalio/sdk-core/issues/894

</details>


---

<a id="463"></a>

### #463: [Bug] Unregistered Local Activity should fail Workflow Task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/463 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-23 13:33:15.000 UTC (8 months ago) |
| **Updated** | 2025-05-08 22:41:31.000 UTC |
| **Closed** | 2025-05-08 22:41:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

See https://github.com/temporalio/features/issues/221

#### Comments (1)

<details>
<summary><strong>tconley1428</strong> commented on 2025-05-08 22:41:30.000 UTC</summary>

Closed by https://github.com/temporalio/sdk-dotnet/pull/472

</details>


---

<a id="459"></a>

### #459: [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/459 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 12:22:33.000 UTC (8 months ago) |
| **Updated** | 2025-09-23 20:07:59.000 UTC |
| **Closed** | 2025-09-23 20:07:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/616

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-09-23 20:07:59.000 UTC</summary>

We're not gonna do this. Too niche.

</details>


---

<a id="435"></a>

### #435: [Feature Request] Workflow logging - NLog async calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/435 |
| **State** | OPEN |
| **Author** | jimborogers (James R) |
| **Created** | 2025-03-19 06:41:08.000 UTC (9 months ago) |
| **Updated** | 2025-03-19 13:43:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

I am using NLog with an HTTP target. Logging calls in the workflow result in an non-determinism error captured in this truncated stack trace:

```
Failed activation on workflow my-workflow with ID 96c4ba3b-1004-f011-846f-6025bd135063 and run ID 0195a9ef-fd91-73e1-94b0-ada51bc3e1a3
Temporalio.Exceptions.InvalidWorkflowSchedulerException Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls. Void Throw()    at System.Environment.get_StackTrace()
   at Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt)
   at Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt)
   at Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)
   at Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)
   at Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)
   at Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)
   at Threading.Timer.Change(Int32 dueTime, Int32 period)
   at Targets.AsyncTaskTarget.Write(AsyncLogEventInfo logEvent)
   at Targets.AsyncTaskTarget.WriteAsyncThreadSafe(AsyncLogEventInfo logEvent)
   at NLog.Targets.Target.WriteAsyncLogEvent(AsyncLogEventInfo logEvent)
```

### Describe the solution you'd like

I discussed this with @cretz at Replay conference - he proposed there is an "unsafe" method that could be exposed in the .NET SDK and used for purpose of avoiding these errors.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-19 13:43:19.000 UTC</summary>

Thanks! I have opened #436. In the meantime you can set `TemporalWorkerOptions.DisableWorkflowTracingEventListener` to `true` at the worker level (though that has the consequence of disabling this protection everywhere).

</details>


---

<a id="427"></a>

### #427: [Bug] Replay after UnhandledCommand can cause main workflow body to complete before signals are handled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/427 |
| **State** | CLOSED |
| **Author** | robcao (Robert Cao) |
| **Created** | 2025-03-11 16:23:06.000 UTC (10 months ago) |
| **Updated** | 2025-03-19 19:10:09.000 UTC |
| **Closed** | 2025-03-19 19:10:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I have a workflow that continues as new, and also receives signals. We see that sometimes when the workflow tries to continue as new while new signals come in for that workflow, the continue as new output from the workflow does not contain all of the signals

### Describe the bug

The problem is that the main workflow function is completing before all of the signal handlers run. Admittedly, I am not certain if this is a bug in the SDK or in the workflow implementation, but if it is the latter, this is very unintuitive behavior.

The problem happens when multiple signals come in when the workflow sends the continue as new command back to the server. 

This causes the workflow to replay after receiving all of the new signals, but wait conditions are being checked after every individual signal handlers runs.

This can cause the following sequence of events.

- Workflow main function is blocked on a wait condition
- First signal handler runs
- Workflow main function is now unblocked, workflow main function runs to completion
- Second signal handler runs
  - Because the workflow main function is already completed, the results of this handler will not be included in scenarios like Continue as New

### Minimal Reproduction

I created a repository here with the reproduction steps. There is a README file with instructions.

https://github.com/robcao/temporal-dotnet-missing-signal-sample

For ease of viewing, here is the workflow definition:

What appears to be happening is after the first signal handler runs, both of the wait conditions in the main function body are re-evaluated, both evaluate to true, and so the main function body runs before the second signal handler:

```csharp
await Workflow.WhenAnyAsync(Workflow.DelayAsync(TimeSpan.FromSeconds(5)), Workflow.WaitConditionAsync(() => Signals.Count > 0));
await Workflow.WaitConditionAsync(() => Workflow.AllHandlersFinished);
```

```csharp
[Workflow]
public class SleepThenReturn
{
	internal List<string> Signals { get; init; } = new();

	[WorkflowRun]
	public async Task<string[]> RunAsync(string[] input)
	{
		if (!string.IsNullOrWhiteSpace(Workflow.Info.ContinuedRunId))
		{
			Workflow.Logger.LogInformation("Now continuing as new, there are {count} signals.", input.Length);

			return input;
		}

		await Workflow.WhenAnyAsync(Workflow.DelayAsync(TimeSpan.FromSeconds(5)), Workflow.WaitConditionAsync(() => Signals.Count > 0));

		await Workflow.WaitConditionAsync(() => Workflow.AllHandlersFinished);

		List<string> next = new();

		foreach (string signal in Signals)
		{
			next.Add(signal);
		}

		throw Workflow.CreateContinueAsNewException<SleepThenReturn>(wf => wf.RunAsync(next.ToArray()));
	}

	[WorkflowSignal]
	public Task SendSignal(string signal)
	{
		Workflow.Logger.LogInformation("Handling signal input {signal}.", signal);
		Signals.Add(signal);
		return Task.CompletedTask;
	}
}

```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: x64 Windows
- Temporal Version: 1.5.0
- Are you using Docker or Kubernetes or building Temporal from source? Running directly on Windows

### Additional context

<!-- Add any other context about the problem here. -->

It seems like what we desire here is for handlers to be marked in progress earlier than they currently are, before the event loop runs, perhaps somewhere here: https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Worker/WorkflowInstance.cs#L562

Another user noticed similar behavior to what we see in this Slack thread: https://temporalio.slack.com/archives/C012SHMPDDZ/p1738636421721339


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-11 21:07:23.000 UTC</summary>

So after digging, this is primarily due to the fact that we run the event loop after every signal which is not the correct behavior. We will be fixing this soon (but will make sure it only applies to new code, not replayed code). It will be mostly reviving #384.

</details>


---

<a id="409"></a>

### #409: [Feature Request] Remove experimental warning from `RequestEagerStart`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/409 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-07 13:31:54.000 UTC (11 months ago) |
| **Updated** | 2025-07-16 23:51:38.000 UTC |
| **Closed** | 2025-07-16 23:51:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Remove experimental doc warning from eager workflow start option

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-20 22:03:14.000 UTC</summary>

This is waiting on eager workflow start to be officially marked GA

</details>


---

<a id="401"></a>

### #401: [Bug] Issue with Azure and AWS .NET 8 images and TLS of latest SDK

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/401 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-03 13:28:39.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 13:58:17.000 UTC |
| **Closed** | 2025-02-11 13:58:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

If you use the latest .NET SDK _and_ AWS/Azure .NET images _and_ use .NET 8, there is a TLS connectivity issue with "native TLS certs not found". But if any one of those conditions are different, it works correctly. Investigate.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-10 14:28:38.000 UTC</summary>

For AWS, see https://github.com/aws/aws-lambda-dotnet/issues/1973. Azure has not been investigated.

</details>


---

<a id="386"></a>

### #386: [Feature Request] Improve WaitConditionAsync semantics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/386 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-06 21:22:36.000 UTC (1 years ago) |
| **Updated** | 2025-01-06 21:24:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we wake up _all_ wait conditions that are satisfied at the same time. This doesn't allow you to guarantee the condition is true on the line after the wait condition. We should only wake up a _single_ wait condition when satisfied and then run the entire loop again. This will allow you to implement things like:

```csharp
await Workflow.WaitConditionAsync(() => !locked);
locked = true;
```

I believe this issue is similar to https://github.com/temporalio/sdk-python/issues/618 in Python. And would require an SDK flag.

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-01-06 21:24:48.000 UTC</summary>

When doing this, it would make sense to resurrect the PR for https://github.com/temporalio/sdk-dotnet/issues/375 and include it with this change.

</details>


---

<a id="357"></a>

### #357: [Bug] Unexpected Serialization of Activity Results

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/357 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-10-10 03:10:01.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-11 19:07:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I have a use case where I am invoking signal from start in an activity. I stumbled across a scenario where Temporal client credentials can potentially get leaked in workflow history.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

When executing an activity that returns a `Task`, if you instead return a `Task<T>`, the value of `T` is stored in workflow history. This can lead to unexpected leakage of Temporal server credentials when `T` is a `WorkflowHandle`.

Consider the following activity. The activity returns `Task<WorkflowHandle>`, and the workflow handle gets stored in workflow history.

```csharp
internal class Activities(ITemporalClient client)
{
	/// <summary>
	/// When returning a <see cref="Task{WorkflowHandle}"/>, the workflow handle gets serialized to workflow history.
	/// </summary>
	[Activity]
	public Task StartWorkflowThatLeaksWorkflowHandleToEventHistoryAsync()
	{
		WorkflowOptions options = new WorkflowOptions(Guid.NewGuid().ToString(), "my-tq");

		return client.StartWorkflowAsync<Other>(wf => wf.RunAsync(), options);
	}
```

The issue here is that `WorkflowHandle` has a reference to the Temporal client, which leaks sensitive information like the api key or TLS certificate into the workflow history.

![image](https://github.com/user-attachments/assets/7ff8c09f-ab0d-4014-af9b-e4b42350f690)


### Minimal Reproduction

I have a code sample here: https://github.com/robcao/temporal-client-serialization

To reproduce:

Start a dev server: `temporal server start-dev`.

Start the worker: `dotnet run`.

Execute a workflow: `temporal workflow start --task-queue=my-tq --type=Example`.

Navigate to the temporal ui and click the `Example` workflow. If you look at the workflow history, you'll see that the entire workflow handle was stored.

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?
.NET SDK 1.3.1

### Additional context

<!-- Add any other context about the problem here. -->


This can be fixed by re-writing the activity like this, so it's fairly minor. However, perhaps serialization of the `TemporalClient` should be changed to omit the `ApiKey`, `TlsOptions`, and other potentially sensitive values?

```csharp
internal class Activities(ITemporalClient client)
{
	/// <summary>
	/// No problems here because a <see cref="Task"/>> is returned.
	/// </summary>
	[Activity]
	public async Task StartWorkflowThatDoesNotLeakWorkflowHandleToEventHistoryAsync()
	{
		WorkflowOptions options = new WorkflowOptions(Guid.NewGuid().ToString(), "my-tq");

		await client.StartWorkflowAsync<Other>(wf => wf.RunAsync(), options).ConfigureAwait(false);
	}
}
```

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-10-10 15:59:15.000 UTC</summary>

You are returning `Task<WorkflowHandle>` which is then serialized.

`WorkflowHandle` is not meant to be serializable (just coincidence that it works with `System.Text.Json`). This would be the same as if you returned `Task<MyDatabaseOrmEntity>` that contains a property with the database that had its initial options. That the return type is `Task` does not mean the result is expected to automatically be removed, `Task` is just a supertype of `Task<TResult>` and return covariance applies and we do support caller specifying the result-type for upcasting. This information would leak if you just called the method regularly and not through Temporal.

You should not return the workflow handle from the activity if you do not want it to be serialized. If you cannot `await`, then you can do something like `startTask.ContinueWith(_ => Task.CompletedTask), TaskContinuationOptions.OnlyOnRanToCompletion)`.

</details>


---

<a id="349"></a>

### #349: [Bug] Failing to build completion does not use task token when creating failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/349 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-09-16 15:27:01.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-08 17:22:41.000 UTC |
| **Closed** | 2024-10-08 17:22:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In https://github.com/temporalio/sdk-dotnet/blob/5141c2cb1330cdce1ab88f1bffd246012d5e1aa7/src/Temporalio/Worker/ActivityWorker.cs#L222-L234 we have an extra catch if something happened that even the other catches couldn't catch (such as a failure while processing a failure), but we are not logging nor are we setting the task token. Make sure we do both and add test coverage to try and reach this code (i.e. try to fail while processing a failure).

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-23 15:29:30.000 UTC</summary>

This seems to occur on context cancel failing. To replicate the swallowing of this, try to do something like `ActivityExecutionContext.Current.CancellationToken.Register(() => throw new InvalidOperationException("intentional failure"))`. The fix of course is to log the exception here and make sure the task token is set on this.

</details>


---

<a id="337"></a>

### #337: [Feature Request] Include more details from tonic from failed client_rpc_call invocations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/337 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-08-28 15:38:18.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-10 19:01:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Failures from client_rpc_call invocations currently only contain the message from the failure.

The stack trace from a failure to check health for instance, looks like this:

```C#
Temporalio.Exceptions.RpcException: transport error
   at Temporalio.Bridge.Client.CallAsync[T](RpcService service, String rpc, IMessage req, MessageParser`1 resp, Boolean retry, IEnumerable`1 metadata, Nullable`1 timeout, Nullable`1 cancellationToken)
   at Temporalio.Client.TemporalConnection.CheckHealthAsync(RpcService service, RpcOptions options)
```

In comparison, the stack trace from a failure to connect the client is more informative, and looks like this:

```C#
System.InvalidOperationException: Connection failed: Server connection error: tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 10061, kind: ConnectionRefused, message: "No connection could be made because the target machine actively refused it." })))
   at Temporalio.Bridge.Client.ConnectAsync(Runtime runtime, TemporalConnectionOptions options)
   at Temporalio.Client.TemporalConnection.GetBridgeClientAsync()
```


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

I would like instances of `RpcException` raised from the `client_rpc_callback` method to contain more information about the failure, comparative to what is currently raised from failures in the `client_connect` method.

For example, instead of `transport error`, perhaps the exception could contain more information, such as

`Error: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Kind(BrokenPipe)))) }`

Having this kind of additional context available is very helpful for debugging problems. Doing a cursory search shows that `transport error` can have multiple different root causes.

Having the gRPC status code surfaced in the error message is helpful too.


### Additional context

https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Bridge/src/client.rs#L258

It looks like here, the `failureDetails` is always being sent back to the .NET side as null. I am not sure if this is intentional or not (maybe the Rust side is always sending null), or maybe `failureDetails` here references the Temporal API FailureDetails proto, in which case it wouldn't be applicable at all.

I'm not certain if this will require work to be on in the core sdk first.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-10 19:00:20.000 UTC</summary>

Sorry it took me so long to see this. This is due to the default error string of Tonic in cases where it's not a status. There is a difference between connection errors and RPC errors in this case.

> perhaps the exception could contain more information, such as

> Error: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Kind(BrokenPipe)))) }

But it's not a `Status` with a code and a source. We will investigate and see if there's more we can extract from the non-status error beyond it's default `fmt::Display`.

> It looks like here, the failureDetails is always being sent back to the .NET side as null

This is very specifically for gRPC "details" which is additional protobuf information, it's not for general purpose use

</details>


---

<a id="311"></a>

### #311: [Feature Request] Update schedule default values

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/311 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-22 16:09:27.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-02 23:49:41.000 UTC |
| **Closed** | 2024-08-02 23:49:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Per https://github.com/temporalio/api/pull/308, https://github.com/temporalio/sdk-dotnet/blob/23af80339e84c1defc35fe61fbe053b26709011d/src/Temporalio/Client/Schedules/SchedulePolicy.cs#L22 should now be 1 year. Also, consider if we can have defaults be server-side defaults instead of client-side (changes types to make it seem like this value is optional when it's not). Will discuss with team.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-22 19:12:16.000 UTC</summary>

For now it was decided to just change this default value to match server default

</details>


---

<a id="307"></a>

### #307: [Feature Request] Replace `System.TimeProvider` in workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/307 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-15 22:42:37.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-16 17:45:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

There is now a .NET API for creating timers and getting current time. Leverage it. See https://learn.microsoft.com/en-us/dotnet/api/system.timeprovider. Will have to see how it may affect versions we release packages for. https://github.com/dotnet/extensions/tree/main/src/Libraries/Microsoft.Extensions.TimeProvider.Testing seems to support .NET 6 probably by way of `Microsoft.Bcl.TimeProvider` inclusion.

Note, while we should provide a `Workflow.TimeProvider` property, there does not seem to be an obvious way to change the _default_ time provider.

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2024-07-16 17:45:54.000 UTC</summary>

> there does not seem to be an obvious way to change the default time provider.

Nor should we, I think (other than to just make it throw an error), consistent with the idea that we probably want to avoid magic.

Reactions: 👍 1

</details>


---

<a id="305"></a>

### #305: Handle multiple completion commands

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/305 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-07-13 12:39:00.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-15 12:44:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The change made in https://github.com/temporalio/sdk-dotnet/pull/270 is incorrect when there are multiple completion commands: in that case, we may still leave non-query commands after a completion command, and currently core removes any such commands.

We are going to fix this in core (https://github.com/temporalio/sdk-core/issues/778). This ticket is blocked on the core work but we anticipate the fix here to be straightforward: send all commands to core i.e. with (potentially multiple) completion commands interleaved with non-completions.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-15 12:44:01.000 UTC</summary>

:+1: Note as part of this work we still have to leave existing logic, but only if this flag is present. I am unsure how safe we feel about removing the old .NET logic of truncating post-completion commands (since Core was doing it too), up for discussion. It would be nice if the .NET command reordering we did here was only if this flag was set and we could leave everything else (including truncation) up to Core.

</details>


---

<a id="281"></a>

### #281: Workflow-friendly concurrency control

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/281 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 17:14:15.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-12 16:42:33.000 UTC |
| **Closed** | 2024-07-12 16:42:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We need a mechanism for concurrency control (mutex/semaphore) that fits with the language but is reentrant and deterministic within workflow coroutines.  To be used within signal and update handlers and the main workflow coroutine.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 16:42:33.000 UTC</summary>

Was solved in #287

</details>


---

<a id="280"></a>

### #280: [Bug] TaskQueue not forwarded when using Test Environment, breaks ContinueAsNew (hangs)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/280 |
| **State** | OPEN |
| **Author** | mnichols (Mike Nichols) |
| **Created** | 2024-06-18 15:59:30.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 16:46:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

This test hangs because of a grpc reported missing TaskQueue (see below for error message):
```
using Temporalio.Client;
using Temporalio.Exceptions;
using Temporalio.Testing;
using Temporalio.Worker;
using Temporalio.Worker.Interceptors;
using Temporalio.Workflows;
using Xunit.Abstractions;

namespace Temporal.Curriculum.Timers.Tests.Orchestrations;
[Workflow]
public class Continued
{
    [WorkflowRun]
    public async Task  RunAsync(string arg)
    {
        if (string.Equals("can", arg))
        {
            return;
        }
        await Workflow.DelayAsync(2000);
        var canOpts = new ContinueAsNewOptions();
        throw Workflow.CreateContinueAsNewException<Continued>(wf => wf.RunAsync("can"), canOpts);
    }
}
public class ContinueAsNewTests : TestBase
{
    [Fact]
    public async Task CAN_WorksWithNoTaskQueue()
    {
        await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
        var workerOptions = new TemporalWorkerOptions("test") { LoggerFactory = LoggerFactory };
        workerOptions.AddWorkflow<Continued>(); 

        using var worker = new TemporalWorker(
            env.Client,
            workerOptions
        );
        await worker.ExecuteAsync(async () =>
        {
            var handle = await env.Client.StartWorkflowAsync<Continued>(wf => wf.RunAsync("first"),
                new WorkflowOptions("can1", worker.Options.TaskQueue!));

            var e = await Assert.ThrowsAsync<ContinueAsNewException>(async () =>
            {
                await handle.GetResultAsync();
            });

        });
    }

    public ContinueAsNewTests(ITestOutputHelper output) : base(output)
    {
    }
}
```

The error that prints before the test server hangs is:
```
2024-06-18T15:49:38.964086Z  WARN temporal_sdk_core::worker::workflow: Error while completing workflow activation error=status: InvalidArgument, message: "Missing TaskQueue.", details: [], metadata: MetadataMap { headers: {"content-type": "application/grpc"} }
```

It makes sense the test server hangs but the TaskQueue should really be getting auto-assigned by the Workflow if not provided explicitly.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-18 16:46:19.000 UTC</summary>

This is caused/blocked by https://github.com/temporalio/sdk-java/issues/1424

</details>


---

<a id="274"></a>

### #274: Wrong casting in several classes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/274 |
| **State** | CLOSED |
| **Author** | StanislavPrusac (Stanislav Prusac) |
| **Created** | 2024-06-16 13:50:03.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-21 17:46:20.000 UTC |
| **Closed** | 2024-06-21 17:46:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Within the class ScheduleOptions method Clone() casting is done via the class WorkflowOptions, and I think maybe ScheduleOptions should be used:
https://github.com/temporalio/sdk-dotnet/blob/d3f38172112ddf0c855ad1ab9a9878432eb5dc4b/src/Temporalio/Client/Schedules/ScheduleOptions.cs#L45

Maybe I misunderstood something, but there are also a number of strange castings in these other classes:
https://github.com/temporalio/sdk-dotnet/blob/d3f38172112ddf0c855ad1ab9a9878432eb5dc4b/src/Temporalio/Client/Schedules/ScheduleTriggerOptions.cs#L26

https://github.com/temporalio/sdk-dotnet/blob/d3f38172112ddf0c855ad1ab9a9878432eb5dc4b/src/Temporalio/Client/WorkflowHistoryFetchOptions.cs#L34

https://github.com/temporalio/sdk-dotnet/blob/d3f38172112ddf0c855ad1ab9a9878432eb5dc4b/src/Temporalio/Client/Schedules/ScheduleListOptions.cs#L22

https://github.com/temporalio/sdk-dotnet/blob/d3f38172112ddf0c855ad1ab9a9878432eb5dc4b/src/Temporalio/Client/WorkflowCancelOptions.cs#L21

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-17 13:31:07.000 UTC</summary>

Thank you! This is an obvious (embarrassing) bug on our part and we will fix shortly.

Reactions: ❤️ 1

</details>


---

<a id="262"></a>

### #262: Provide methods to wait for all handlers to finish

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/262 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 04:39:18.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-07 12:45:26.000 UTC |
| **Closed** | 2024-08-07 12:45:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Users want to easily await (or ignore) all their remaining handlers when they continue as new or exit the workflow.  Since we can't tell what they want, they should specify.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-08-07 12:45:26.000 UTC</summary>

Solved as part of #294 with an all-handlers-finished property

</details>


---

<a id="261"></a>

### #261: Warn or error when update handlers dangle across CAN or workflow exit

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/261 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 04:21:57.000 UTC (1y 7m ago) |
| **Updated** | 2024-07-02 12:49:00.000 UTC |
| **Closed** | 2024-07-02 12:49:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We can recommend the await-all-handlers or drop-all-handlers methods. TBD whether error or warning.


#### Comments (1)

<details>
<summary><strong>dandavison</strong> commented on 2024-06-28 12:21:05.000 UTC</summary>

I've merged the first PR, for Python: https://github.com/temporalio/sdk-python/pull/556

The basic spec that that PR's proposing for other SDKs is

- Workflow code can wait on a method named similarly to `workflow.all_handlers_finished()`

- By default, the worker will emit `workflow.UnfinishedUpdateHandlersWarning` and `workflow.UnfinishedSignalHandlersWarning` if any handlers of those types are unfinished when the workflow completes (cancellation, failure, success). See PR for wording of message.

- These warnings are controlled by a policy whose default value is `workflow.HandlerUnfinishedPolicy.WARN_AND_ABANDON`

- Users can silence the warning on a per-handler basis by setting unfinished_policy to `workflow.HandlerUnfinishedPolicy.ABANDON`

- Tests should verify the above for worker-side workflow exit via cancellation, failure, and success

Reactions: 👍 1

</details>


---

<a id="257"></a>

### #257: [Feature Request] Support worker client update when using generic host

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/257 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-31 12:30:14.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-07 13:36:37.000 UTC |
| **Closed** | 2024-06-07 13:36:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When using generic host support for workers people still want to update the client on the worker. We could use `IOptionsMonitor`, but the `IOptionsMonitor` we use is named with an internal unique name we'd have to expose and it only has connection options, not the client itself and we want to force users to create the client itself. A better pattern would be a `ClientUpdater` which the user can instantiate (or use from DI) and set on the worker service options. They can then use that to push a client down to all workers (so internally workers would subscribe to client update events on the updater). Make sure to test and document manual instantiation _and_ DI-based instantiation of this updater.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-07 13:36:37.000 UTC</summary>

This is now supported in 1.1.2 with #258.

</details>


---

<a id="250"></a>

### #250: Wrap GRPC::CANCELED and DEADLINE_EXCEEDED in an SDK Timeout exception for Update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/250 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-05-18 00:43:07.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-21 18:27:31.000 UTC |
| **Closed** | 2024-06-21 18:27:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

So that users only have to catch one predictable exception

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-05 20:01:32.000 UTC</summary>

See https://github.com/temporalio/features/issues/483#issuecomment-2150832036 for implementation details

</details>


---

<a id="248"></a>

### #248: [Bug] Client hangs when waiting for calls on main thread

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/248 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-15 12:59:53.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-18 19:54:21.000 UTC |
| **Closed** | 2024-06-18 19:54:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

To replicate, make a project with this:

```csharp
using Temporalio.Client;
using Temporalio.Client.Schedules;
using Temporalio.Runtime;
using Temporalio.Workflows;

// Connect client
var runtime = new TemporalRuntime(new()
{
    Telemetry = new()
    {
        Logging = new()
        {
            // Filter = new(TelemetryFilterOptions.Level.Trace, TelemetryFilterOptions.Level.Trace),
        }
    }
});
var client = await TemporalClient.ConnectAsync(new("localhost:7233") { Runtime = runtime });

// Two schedule tasks
var tasks = new List<Task<ScheduleHandle>>
{
    CreateScheduleAsync(),
    CreateScheduleAsync(),
};

// Running Task.WaitAll hangs, but Task.WaitAll off the main thread or Task.WhenAll works

// DOES NOT WORK:
Task.WaitAll(tasks.ToArray());

// WORKS:
// await Task.Run(() => Task.WaitAll(tasks.ToArray()));

// WORKS:
// await Task.WhenAll(tasks.ToArray());

foreach (var task in tasks)
{
    var desc = task.Result.DescribeAsync();
    Console.WriteLine("Described schedule: {0}", desc.Id);
}

async Task<ScheduleHandle> CreateScheduleAsync()
{
    var action = ScheduleActionStartWorkflow.Create<MyWorkflow>(
        wf => wf.RunAsync(),
        new()
        {
            Id = $"my-workflow-{Guid.NewGuid()}",
            TaskQueue = "my-task-queue-{Guid.NewGuid()}",
        });
    var spec = new ScheduleSpec()
    {
        Intervals = new List<ScheduleIntervalSpec> { new(TimeSpan.FromHours(10)) },
    };
    var id = $"my-schedule-{Guid.NewGuid()}";
    Console.WriteLine("Starting schedule: {0}", id);
    var handle = await client.CreateScheduleAsync(id, new(action, spec));
    Console.WriteLine("Schedule started: {0}", id);
    return handle;
}

[Workflow]
public class MyWorkflow
{
    [WorkflowRun]
    public async Task<string> RunAsync() => "done";
}
```

An easy way to do this is to update `tests/Temporalio.SmokeTest/Program.cs` with this and add this in the `Temporalio.SmokeTest.csproj:

```xml
  <ItemGroup>
    <ProjectReference Include="..\..\src\Temporalio\Temporalio.csproj" />
  </ItemGroup>
```

Then in that directory, run `dotnet run`. Note, sdk-core can be updated and `dotnet build` can be run to recompile if doing guess-and-check debugging.

What is happening is that Tonic seems to hang when this is waited on the main thread. I have hooked up Tokio console and I see nothing obvious. I have upgraded, turned on tracing, etc and see nothing obvious. A very similar thing happened in #44 but the fix was a core/dependency upgrade yet we could not find which bug fixed it upstream in Tonic/h2/hyper/tokio.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-17 21:49:29.000 UTC</summary>

Thanks to @robcao, the `TaskCompletionSource` can deadlock on same thread, need to supply `TaskCreationOptions.RunContinuationsAsynchronously` to the constructor so that it will schedule it elsewhere.

</details>


---

<a id="247"></a>

### #247: [Feature Request] Support for win-x86

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/247 |
| **State** | OPEN |
| **Author** | kevbry |
| **Created** | 2024-05-10 19:58:29.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-10 21:19:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👎 1 |

#### Description

### Describe the solution you'd like

Support for win-x86 

### Additional context

The legacy system I'm integrating with currently only supplies 32-bit SDKs. It would significantly simplify things if I could make use of it directly in a Temporal activity vs having to wrap the library in an API that the activity calls out to.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-05-10 21:17:15.000 UTC</summary>

The issue with the extra targets (like Windows 32-bit, Windows ARM, Linux MUSL, etc) is that it adds bloat to the package because the NuGet package has to embed the full DLL for that distro/arch. The NuGet package is already 50MB compressed and each shared library we add is ~30MB (~10MB compressed). Also, I am not sure we test for 32-bit.

You may be able to build the SDK on 32-bit though and make your own package to depend on. I will leave this open for others to see, because it is possible we may ship a separate NuGet package in the future with 32-bit support. But there are no immediate plans for Windows 32-bit.

Reactions: 👍 2

</details>


---

<a id="240"></a>

### #240: [Bug] WaitConditionAsync is run outside of Workflow context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/240 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-08 14:20:24.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-08 22:29:15.000 UTC |
| **Closed** | 2024-05-08 22:29:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

The callback for `WaitConditionAsync` is run outside of the event loop, so the current task scheduler is not the workflow instance. This means any calls on the `Workflow` object within the callback will fail.

#### Comments (1)

<details>
<summary><strong>Tyler-Harker</strong> commented on 2024-05-08 14:54:15.000 UTC</summary>

Workflow event loop is in the following file (for future reference)

https://github.com/temporalio/sdk-dotnet/blob/ee378c17595bccf8a390ff82e4e1f514d4a6344f/src/Temporalio/Worker/WorkflowInstance.cs#L648

</details>


---

<a id="229"></a>

### #229: [Feature Request] Make Temporalio.Testing to a seperate nuget out of Temporalio

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/229 |
| **State** | OPEN |
| **Author** | rsr-maersk (Rik Svendsen Rose) |
| **Created** | 2024-04-22 17:00:52.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-22 18:29:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Temporalio.Testing is currently a part of the Temporalio package. I think it is better to decouple so we don't distribute test code to production
![image](https://github.com/temporalio/sdk-dotnet/assets/76153851/3c3c1dff-68eb-49df-a649-7f26a0ab2d40)


### Describe the solution you'd like


- make Temporalio.Testing into a separate nuget
- make Temporalio not reference Temporalio.Testing



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-04-22 18:28:09.000 UTC</summary>

This is more "test helpers" but they are harmless if not used (i.e. don't bring in extra dependencies). Technically this code is totally valid in production if people want to use it there. If you're concerned about certain code using certain packages, you may be able to use a configurable linter. We primarily only keep things in separate versioned packages if they cause dependency issues.

</details>


---

<a id="204"></a>

### #204: [Feature Request] Support IAsyncDisposable activity classws with async scopes for DI in .NET 6+

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/204 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-15 21:25:34.000 UTC (1y 9m ago) |
| **Updated** | 2024-03-26 13:32:46.000 UTC |
| **Closed** | 2024-03-26 13:32:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Currently we don't support `IAsyncDisposable` instances of activity classes when using the `Temporalio.Extensions.Hosting` DI because we create synchronous scopes.

Change https://github.com/temporalio/sdk-dotnet/blob/3faaf2bccfb29af3e3db6617dbaa6001d6bcd309/src/Temporalio.Extensions.Hosting/ServiceProviderExtensions.cs#L64 to `await using (var scope = provider.CreateAsyncScope())`, but there may need to be compiler directives since it's .NET 6+ (and we may have to distribute a .NET-6-specific version of this library)

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-03-26 13:32:46.000 UTC</summary>

Handled with #207

</details>


---

<a id="198"></a>

### #198: [Feature Request] SDK clients should set a UpdateID on any update request even if the user did not specify one

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/198 |
| **State** | CLOSED |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-03-06 17:35:11.000 UTC (1y 10m ago) |
| **Updated** | 2024-05-21 19:24:43.000 UTC |
| **Closed** | 2024-05-21 19:24:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See: https://github.com/temporalio/features/issues/431

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-03-18 13:54:44.000 UTC</summary>

Also make sure that update ID can be set in update options constructor

</details>


---

<a id="189"></a>

### #189: [Feature Request] Clarify documentation on the effect of specifying the `NonRetryableErrorTypes` as an empty list

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/189 |
| **State** | CLOSED |
| **Author** | eugbyte (Eugene) |
| **Created** | 2024-02-17 05:09:02.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-20 14:55:33.000 UTC |
| **Closed** | 2024-02-20 14:55:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->
Per the [Temporal documentation](https://docs.temporal.io/retry-policies#default-behavior), workflows do not retry by default.

One may expect that by specifying that the `NonRetryableErrorTypes` as an empty list, the default behaviour is followed. However, specifying `NonRetryableErrorTypes` result in the workflow always retrying. My guess is that since all kinds of errors (including `ActivityFailureException` and `ApplicationFailureException`) are omitted from not retrying, the workflow will always retry.

`Client code:`
```
WorkflowOptions workflowOptions = new() {
    Id = workflowId,
    TaskQueue = EmailWorkflow.TaskQueueName,
    RetryPolicy = new() { NonRetryableErrorTypes = [] }, // <= the workflow always retry
};
var handle = await client.StartWorkflowAsync(
    workflowRunCall: (MyWorkflow wf) => wf.RunAsync(),
    options: workflowOptions);
```

`Workflow.cs:`
```
    [WorkflowRun]
    public async Task RunAsync() {
         throw new ApplicationFailureException(message: "some error", nonRetryable: true); // <= expects the workflow to not retry, but workflow retries
    }
```

When observing the dashboard via the [Temporal Web UI](https://learn.temporal.io/getting_started/typescript/dev_environment/#set-up-a-local-temporal-development-cluster-with-temporal-cli), the workflow is retried.
### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->
Clarify in the documentation that by specifying that the `NonRetryableErrorTypes` as an empty list, the Workflow will always be retried.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-02-20 14:55:33.000 UTC</summary>

> One may expect that by specifying that the NonRetryableErrorTypes as an empty list, the default behaviour is followed [...] Clarify in the documentation that by specifying that the NonRetryableErrorTypes as an empty list, the Workflow will always be retried.

This is unrelated to `NonRetryableErrorTypes`. `null` is the default retry policy, but you are changing that default by providing a non-null value. And since you aren't setting any of the other retry policy values, those have defaults too. The documentation of `WorkflowOptions.RetryPolicy` mentions unset retry policy means no retry and the documentation of `RetryPolicy` mentions what the default values are of each property you don't set. But we can clarify more if this is surprising.

(closing as question, but feel free to continue commenting here or join us in the `#dotnet-sdk` channel on https://t.mp/slack or in the forums).

</details>


---

<a id="185"></a>

### #185: [Feature Request] Support workflow metadata query

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/185 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-02 21:30:30.000 UTC (1y 11m ago) |
| **Updated** | 2025-02-04 18:08:22.000 UTC |
| **Closed** | 2025-02-04 18:08:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/51

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:08:20.000 UTC</summary>

This was done in #359

</details>


---

<a id="178"></a>

### #178: [Bug] Child Workflow Cancellation before scheduled surfaces as incorrect error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/178 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-01-18 18:07:39.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-12 21:13:55.000 UTC |
| **Closed** | 2024-02-12 21:13:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

If a child workflow is cancelled before it's scheduled, this (can) surface as a `ChildWorkflowFailureException` when it should instead be a `CanceledFailureException` as with other cancellations.

There is some code [here](https://github.com/temporalio/sdk-dotnet/blob/71757a66e152e49ddff2955dc464f8111cd10b07/src/Temporalio/Worker/WorkflowInstance.cs#L1782) that attempts to do the right thing, but this code may not always get to run before things have been handed off to Core (as is the case here). Probably we don't even need to have that code, Core will do the right thing and the failure it returns for the child just needs to be interpreted properly.

### Minimal Reproduction

Reproduced during fuzz testing, but just cancelling children immediately or near-immedately ought to do it.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-01-23 22:50:20.000 UTC</summary>

After discussion, throwing cancellation exceptions eagerly if a call is made with an already-cancelled token is the .NET way and we do it in timers as well. So we need to just document that calling with an already-cancelled token may have a different exception than if it's cancelled before started (or after started). And that users should use `TemporalException.IsCanceledException` helper to know whether an exception is a cancelled exception.

</details>


---

<a id="171"></a>

### #171: [Feature Request] Schedule creation should create tracing span by default

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/171 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:14:15.000 UTC (2 years ago) |
| **Updated** | 2025-02-04 18:25:06.000 UTC |
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
<summary><strong>cretz</strong> commented on 2024-03-05 18:30:17.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>


---

<a id="161"></a>

### #161: [Feature Request] Allow continue as new from update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/161 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-29 21:26:43.000 UTC (2y 1m ago) |
| **Updated** | 2025-02-04 18:17:12.000 UTC |
| **Closed** | 2025-02-04 18:17:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow continue as new from update handler


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:17:11.000 UTC</summary>

This feature request was decided against

</details>


---

<a id="155"></a>

### #155: [Feature Request] Workflow update handle should use resulting run ID on start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/155 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-13 13:21:33.000 UTC (2y 1m ago) |
| **Updated** | 2025-02-04 18:16:46.000 UTC |
| **Closed** | 2025-02-04 18:16:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Updates only ever apply to one run, so we should always set the run ID as what comes back from start, regardless of input. Also, we should document on the update-handle getter the consequences of not using a workflow handle with a specific run ID.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:16:44.000 UTC</summary>

Fixed in #382

</details>


---

<a id="151"></a>

### #151: [Bug] WorkflowHandle.StartUpdateAsync does not unwrap exception properly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/151 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-30 21:19:25.000 UTC (2y 2m ago) |
| **Updated** | 2025-02-04 18:14:30.000 UTC |
| **Closed** | 2025-02-04 18:14:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

```csharp
await Client.GetWorkflowHandle("does-not-exist").StartUpdateAsync(
    "does-not-exist", Array.Empty<object?>());
```

This throws an `AggregateException` due to our use of `ContinueWith`

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-02-04 18:14:29.000 UTC</summary>

The internals of update have been rewritten since this so this no longer applies

</details>


---

<a id="132"></a>

### #132: [Feature Request] Typed Search Attributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/132 |
| **State** | CLOSED |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2023-08-31 22:18:13.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-01 12:26:25.000 UTC |
| **Closed** | 2023-09-01 12:26:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Implementation of [typed search attributes](https://github.com/temporalio/proposals/blob/master/sdk-typed-search-attributes.md).

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-09-01 12:26:04.000 UTC</summary>

Typed search attributes is already implemented in .NET

</details>


---

<a id="130"></a>

### #130: tonic-0.9.2.crate: 2 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/130 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-08-25 21:54:52.000 UTC (2y 4m ago) |
| **Updated** | 2024-01-12 17:25:50.000 UTC |
| **Closed** | 2024-01-12 17:25:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>tonic-0.9.2.crate</b></p></summary>

<p></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (tonic version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2023-0305](https://github.com/rustls/webpki/commit/4ea052366f342a06344aab589565179b59b342d3) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | rustls-webpki-0.101.3.crate | Transitive | N/A* | &#10060; |
| [CVE-2018-16875](https://www.mend.io/vulnerability-database/CVE-2018-16875) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.5 | rustls-webpki-0.101.3.crate | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> WS-2023-0305</summary>


###  Vulnerable Library - <b>rustls-webpki-0.101.3.crate</b></p>

<p>Web PKI X.509 Certificate Verification.</p>
<p>Library home page: <a href="https://static.crates.io/crates/rustls-webpki/rustls-webpki-0.101.3.crate">https://static.crates.io/crates/rustls-webpki/rustls-webpki-0.101.3.crate</a></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:
  - tonic-0.9.2.crate (Root Library)
    - tokio-rustls-0.24.1.crate
      - rustls-0.21.6.crate
        - :x: **rustls-webpki-0.101.3.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
rustls-webpki: CPU denial of service in certificate path building

<p>Publish Date: 2023-08-22
<p>URL: <a href=https://github.com/rustls/webpki/commit/4ea052366f342a06344aab589565179b59b342d3>WS-2023-0305</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-fh2r-99q2-6mmg">https://github.com/advisories/GHSA-fh2r-99q2-6mmg</a></p>
<p>Release Date: 2023-08-22</p>
<p>Fix Resolution: rustls-webpki - 0.100.2,0.101.4</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2018-16875</summary>


###  Vulnerable Library - <b>rustls-webpki-0.101.3.crate</b></p>

<p>Web PKI X.509 Certificate Verification.</p>
<p>Library home page: <a href="https://static.crates.io/crates/rustls-webpki/rustls-webpki-0.101.3.crate">https://static.crates.io/crates/rustls-webpki/rustls-webpki-0.101.3.crate</a></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:
  - tonic-0.9.2.crate (Root Library)
    - tokio-rustls-0.24.1.crate
      - rustls-0.21.6.crate
        - :x: **rustls-webpki-0.101.3.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
The crypto/x509 package of Go before 1.10.6 and 1.11.x before 1.11.3 does not limit the amount of work performed for each chain verification, which might allow attackers to craft pathological inputs leading to a CPU denial of service. Go TLS servers accepting client certificates and TLS clients are affected.

<p>Publish Date: 2018-12-14
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-16875>CVE-2018-16875</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-fh2r-99q2-6mmg">https://github.com/advisories/GHSA-fh2r-99q2-6mmg</a></p>
<p>Release Date: 2018-12-14</p>
<p>Fix Resolution: golang 1.10.6,golang 1.11.3, webpki - 0.22.2, rustls-webpki - 0.100.2,0.101.4</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2024-01-12 17:25:49.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="128"></a>

### #128: cbindgen-0.24.5.crate: 1 vulnerabilities (highest severity is: 5.3)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/128 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-08-21 19:52:41.000 UTC (2y 4m ago) |
| **Updated** | 2025-07-03 15:53:08.000 UTC |
| **Closed** | 2025-07-03 15:53:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>cbindgen-0.24.5.crate</b></p></summary>

<p></p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

</details>

## Vulnerabilities
| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (cbindgen version) | Remediation Possible** |
|----|----|----|----|----|----|----|
|[WS-2023-0223](https://github.com/advisories/GHSA-g98v-hv3f-hcfr) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.3 | atty-0.2.14.crate | Transitive | N/A* | &#10060; |

<p>_For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>_*In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details
<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> WS-2023-0223</summary>

### Vulnerable Library - <b>atty-0.2.14.crate</b></p>
<p>A simple interface for querying atty</p>
<p>Library home page: [https://crates.io/api/v1/crates/atty/0.2.14/download](https://crates.io/api/v1/crates/atty/0.2.14/download)</p>
<p>Path to dependency file: /src/Temporalio/Bridge/Cargo.toml</p>
<p>Path to vulnerable library: /src/Temporalio/Bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:


* cbindgen-0.24.5.crate (Root Library)
  * clap-3.2.25.crate
    * :x: **atty-0.2.14.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

### Vulnerability Details
<p>

On windows, atty dereferences a potentially unaligned pointer.In practice however, the pointer won't be unaligned unless a custom global allocator is used. In particular, the System allocator on windows uses HeapAlloc, which guarantees a large enough alignment.

<p>Publish Date: 2023-06-30
<p>URL: [WS-2023-0223](https://github.com/advisories/GHSA-g98v-hv3f-hcfr)</p>
</p>

<p></p>

### CVSS 3 Score Details (<b>5.3</b>)
<p>

Base Score Metrics:


* Exploitability Metrics:
  * Attack Vector: Network
  * Attack Complexity: Low
  * Privileges Required: None
  * User Interaction: None
  * Scope: Unchanged
* Impact Metrics:
  * Confidentiality Impact: None
  * Integrity Impact: None
  * Availability Impact: Low
</p>
For more information on CVSS3 Scores, click [here](https://www.first.org/cvss/calculator/3.0).
</p>

<p></p>

</details>



#### Comments (1)

<details>
<summary><strong>maciejdudko</strong> commented on 2025-07-03 15:53:08.000 UTC</summary>

Bridge library has been moved to sdk-core repo. Also, `cbindgen` default features were disabled so the library doesn't depend on `atty` anymore.

</details>


---

<a id="126"></a>

### #126: [Feature Request] Advanced metrics support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/126 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-18 14:22:13.000 UTC (2y 4m ago) |
| **Updated** | 2023-10-06 15:16:38.000 UTC |
| **Closed** | 2023-10-06 15:16:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | cretz |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
With https://github.com/temporalio/sdk-core/pull/544 landed, we need to:

* [x] Support any missing prom options (done in #129)
* [x] Support any missing otel options (done in #129)
* ~Support user-accessible metric buffer-based forwarding~ (EDIT: Not needed with the below being present)
* [ ] Support .NET provided metric implementation (interesting...)
* [x] Support access to metrics from runtime (done in #129)
* [x] Support access to metrics from activity with default activity tags (done in #129)
* [x] Support access to metrics from workflow with default workflow tags and ignore metric updates during replay by default (done in #129)



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-08-29 12:37:53.000 UTC</summary>

Most of this is now done. The thing remaining, and it's non-trivial, is "Support .NET provided metric implementation".

</details>


---

<a id="121"></a>

### #121: cbindgen-0.24.3.crate: 1 vulnerabilities (highest severity is: 9.8) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/121 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-07-27 00:41:33.000 UTC (2y 5m ago) |
| **Updated** | 2023-08-21 19:52:49.000 UTC |
| **Closed** | 2023-08-21 19:52:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>cbindgen-0.24.3.crate</b></p></summary>

<p></p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (cbindgen version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2023-0223](https://github.com/advisories/GHSA-g98v-hv3f-hcfr) | <img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> Critical | 9.8 | atty-0.2.14.crate | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> WS-2023-0223</summary>


###  Vulnerable Library - <b>atty-0.2.14.crate</b></p>

<p>A simple interface for querying atty</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/atty/0.2.14/download">https://crates.io/api/v1/crates/atty/0.2.14/download</a></p>
<p>

Dependency Hierarchy:
  - cbindgen-0.24.3.crate (Root Library)
    - clap-3.2.23.crate
      - :x: **atty-0.2.14.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
atty potential unaligned read

<p>Publish Date: 2023-06-30
<p>URL: <a href=https://github.com/advisories/GHSA-g98v-hv3f-hcfr>WS-2023-0223</a></p>
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

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-08-21 19:52:48.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="86"></a>

### #86: [Feature Request] Disallow workflow attributes on anything static

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/86 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-06-13 12:29:36.000 UTC (2y 7m ago) |
| **Updated** | 2023-06-14 13:04:25.000 UTC |
| **Closed** | 2023-06-14 13:04:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Workflow methods (and the workflow class itself) should not be static.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-06-13 19:15:53.000 UTC</summary>

We already disallow this for `WorkflowRun`, doing it for `WorkflowSignal` and `WorkflowQuery` now too

</details>


---

<a id="65"></a>

### #65: [Feature Request] Update docfx for API docs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/65 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-11 15:07:55.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-22 16:18:37.000 UTC |
| **Closed** | 2023-05-22 16:18:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Update docfx, need to make sure records are properly in API docs

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 16:18:36.000 UTC</summary>

Done in #68 

</details>


---

<a id="61"></a>

### #61: [Feature Request] Activity delegates can sometimes have System.Runtime.CompilerServices.Closure first param

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/61 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-02 22:13:11.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-16 15:39:50.000 UTC |
| **Closed** | 2023-05-16 15:39:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

If you use expression trees to create a lambda, the first param of `defn.Delegate.Method.GetParameters()` is a `System.Runtime.CompilerServices.Closure`. We should not be using that to determine the first parameter. Rather, we should either use `defn.Delegate.GetType().GetMethod("Invoke")`. Or maybe even better, we should add `object? Invoke(params object?[]? parameters)`, `ReturnType` and `ParameterTypes` to `ActivityDefinition`, and have an alternative constructor like `CreateWithoutAttribute(string name, Type returnType, Type[] parameterTypes, InvokeFunc call)` (where `delegate object? InvokeFunc(params object?[] parms)` exists).

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-05-16 15:39:50.000 UTC</summary>

This is no longer necessary with #67 

</details>


---

<a id="50"></a>

### #50: [Feature Request] Move from Temporalite to Temporal CLI in local testing environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/50 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-19 12:23:10.000 UTC (2y 8m ago) |
| **Updated** | 2023-06-28 17:07:47.000 UTC |
| **Closed** | 2023-06-28 17:07:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Temporalite is the old way, CLI is the new. Also, we need to unskip `ExecuteWorkflowAsync_Patched_ProperlyHandled` once we do.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-05-25 19:24:53.000 UTC</summary>

This cannot be done until https://github.com/temporalio/temporal/pull/4317 is in the Temporal CLI

</details>


---

<a id="49"></a>

### #49: When you planning to Release your product

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/49 |
| **State** | CLOSED |
| **Author** | P9avel |
| **Created** | 2023-04-18 16:45:26.000 UTC (2y 8m ago) |
| **Updated** | 2023-04-18 17:04:20.000 UTC |
| **Closed** | 2023-04-18 17:03:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, we are planning to start new projecct. And i want to use Temporal. All team members is C# developers. Please say, when  you planning to Release your product. We want to use your sdk in production. please say ETA

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-04-18 17:03:41.000 UTC</summary>

We are making the next alpha release soon (after #48 merged) and need feedback to help us get to GA. The more feedback we get the more we can feel confident in a GA release. Please join us on `#dotnet-sdk` on [Slack](http://t.mp/slack) or on [the forums](https://community.temporal.io) for general questions.

(closing as not an actionable issue)

</details>


---

<a id="38"></a>

### #38: [Feature Request] what is the roadmap for this sdk,  really need it 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/38 |
| **State** | CLOSED |
| **Author** | charzhao |
| **Created** | 2023-03-20 06:56:39.000 UTC (2y 9m ago) |
| **Updated** | 2023-03-20 12:37:31.000 UTC |
| **Closed** | 2023-03-20 12:37:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-03-20 12:37:11.000 UTC</summary>

@charzhao - The workflow portion of the SDK is under active development and should be released within the next couple of weeks. Once done, it will be full featured like any other SDK (but still alpha), only advanced pieces like source generator and static analyzer will remain. There are no exact roadmap dates. We put proposals at https://github.com/temporalio/proposals/tree/master/dotnet.

Closing as question (feel free to ask future questions on our forum or community Slack or just as another comment here)

</details>


---

<a id="35"></a>

### #35: [Bug] samples-dotnet can not finish job.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/35 |
| **State** | CLOSED |
| **Author** | charzhao |
| **Created** | 2023-03-10 08:39:02.000 UTC (2y 10m ago) |
| **Updated** | 2023-03-10 13:01:54.000 UTC |
| **Closed** | 2023-03-10 13:01:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I try to run the example https://github.com/temporalio/samples-dotnet, but the job is always in running status. if i run the go "helloworld", the job can finish in time.

![image](https://user-images.githubusercontent.com/19890226/224266323-1cc08eb4-9da1-47e7-b388-089a938f8e16.png)


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-03-10 13:01:53.000 UTC</summary>

Did you follow the README at https://github.com/temporalio/samples-dotnet/tree/main/src/ActivityWorker? You have to run the Go worker. The sample is showing how Go and .NET work together since .NET workflows aren't developed yet. also, if you are having samples issues, feel free to open an issue there or if you have general questions or need help, join us on our forum at https://community.temporal.io/ or Slack `#dotnet-sdk` channel at https://t.mp/slack.

(closing as question, but you can continue to respond here)

</details>


---

<a id="32"></a>

### #32: [Feature Request] Add CancellationToken parameter to TemporalClient.ConnectAsync and friends

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/32 |
| **State** | OPEN |
| **Author** | cgillum (Chris Gillum) |
| **Created** | 2023-03-09 01:28:28.000 UTC (2y 10m ago) |
| **Updated** | 2023-08-22 20:51:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
It's standard practice in .NET APIs that perform I/O to include a `CancellationToken` parameter so that callers can abort I/O requests that take too long.  `TemporalClient.ConnectAsync(...)` doesn't accept a cancellation token.

### Describe the solution you'd like
Add an optional `CancellationToken` to `TemporalClient.ConnectAsync(...)`, like so:

```csharp
public static async Task<TemporalClient> ConnectAsync(
    TemporalClientConnectOptions options,
    CancellationToken cancellationToken = default) { ... }
```

This feedback applies to other APIs as well, such as `TemporalConnection.ConnectAsync(...)`.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-03-09 01:54:11.000 UTC</summary>

On every async call that supports cancellation we do accept a cancellation token, though we intentionally deviate from .NET here and include it in the options instead of as trailing parameter to keep the overload count down. This includes every call on a connected client.

But we intentionally did not include a cancellation token on connect because we don't have that wired up with Rust. It's not as easy as just cancelling a .NET task, I have to weave the token through Tokio in Rust. I put in this effort for RPC calls but not yet the connect process itself. I will look into putting this time in before beta. In the meantime know that the connection process cannot be trivially cancelled with a token.

</details>


---

<a id="28"></a>

### #28: go.temporal.io/sdk-v1.20.0: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/28 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-03-01 22:58:04.000 UTC (2y 10m ago) |
| **Updated** | 2023-05-25 13:45:29.000 UTC |
| **Closed** | 2023-05-25 13:45:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>go.temporal.io/sdk-v1.20.0</b></p></summary>

<p></p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/43dfe898af7310c582d0b60d48b9244c1a6f8c62">43dfe898af7310c582d0b60d48b9244c1a6f8c62</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (go.temporal.io/sdk-v1.20.0 version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2022-41723](https://www.mend.io/vulnerability-database/CVE-2022-41723) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | golang.org/x/net-v0.4.0 | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2022-41723</summary>


###  Vulnerable Library - <b>golang.org/x/net-v0.4.0</b></p>

<p></p>
<p>Library home page: <a href="https://proxy.golang.org/golang.org/x/net/@v/v0.4.0.zip">https://proxy.golang.org/golang.org/x/net/@v/v0.4.0.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/sdk-v1.20.0 (Root Library)
    - github.com/grpc-ecosystem/go-grpc-middleware-v1.3.0
      - :x: **golang.org/x/net-v0.4.0** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/43dfe898af7310c582d0b60d48b9244c1a6f8c62">43dfe898af7310c582d0b60d48b9244c1a6f8c62</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A maliciously crafted HTTP/2 stream could cause excessive CPU consumption in the HPACK decoder, sufficient to cause a denial of service from a small number of small requests.

<p>Publish Date: 2023-02-28
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-41723>CVE-2022-41723</a></p>
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
<p>Origin: <a href="https://osv.dev/vulnerability/GO-2023-1568">https://osv.dev/vulnerability/GO-2023-1568</a></p>
<p>Release Date: 2022-09-29</p>
<p>Fix Resolution: v0.7.0</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-05-25 13:45:29.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="15"></a>

### #15: microsoft.extensions.logging.abstractions.1.1.1.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/15 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-30 15:42:59.000 UTC (2y 11m ago) |
| **Updated** | 2023-02-09 19:35:30.000 UTC |
| **Closed** | 2023-02-09 19:35:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>microsoft.extensions.logging.abstractions.1.1.1.nupkg</b></p></summary>

<p></p>
<p>Path to dependency file: /src/Temporalio/Temporalio.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (microsoft.extensions.logging.abstractions.1.1.1.nupkg version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2018-8292](https://www.mend.io/vulnerability-database/CVE-2018-8292) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | system.net.http.4.3.0.nupkg | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the section "Details" below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2018-8292</summary>


###  Vulnerable Library - <b>system.net.http.4.3.0.nupkg</b></p>

<p>Provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

</p>
<p>Library home page: <a href="https://api.nuget.org/packages/system.net.http.4.3.0.nupkg">https://api.nuget.org/packages/system.net.http.4.3.0.nupkg</a></p>
<p>Path to dependency file: /src/Temporalio/Temporalio.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>

Dependency Hierarchy:
  - microsoft.extensions.logging.abstractions.1.1.1.nupkg (Root Library)
    - netstandard.library.1.6.1.nupkg
      - :x: **system.net.http.4.3.0.nupkg** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
An information disclosure vulnerability exists in .NET Core when authentication information is inadvertently exposed in a redirect, aka ".NET Core Information Disclosure Vulnerability." This affects .NET Core 2.1, .NET Core 1.0, .NET Core 1.1, PowerShell Core 6.0.

<p>Publish Date: 2018-10-10
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-8292>CVE-2018-8292</a></p>
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
  - Confidentiality Impact: High
  - Integrity Impact: None
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Release Date: 2018-10-10</p>
<p>Fix Resolution: System.Net.Http - 4.3.4;Microsoft.PowerShell.Commands.Utility - 6.1.0-rc.1</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-02-09 19:35:30.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="12"></a>

### #12: xunit.console.2.4.2.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/12 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-12 17:22:50.000 UTC (2y 12m ago) |
| **Updated** | 2023-02-09 19:35:27.000 UTC |
| **Closed** | 2023-02-09 19:35:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>xunit.console.2.4.2.nupkg</b></p></summary>

<p></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.text.regularexpressions/4.3.0/system.text.regularexpressions.4.3.0.nupkg</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (xunit.console.2.4.2.nupkg version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2019-0820](https://www.mend.io/vulnerability-database/CVE-2019-0820) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | system.text.regularexpressions.4.3.0.nupkg | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the section "Details" below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2019-0820</summary>


###  Vulnerable Library - <b>system.text.regularexpressions.4.3.0.nupkg</b></p>

<p>Provides the System.Text.RegularExpressions.Regex class, an implementation of a regular expression e...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/system.text.regularexpressions.4.3.0.nupkg">https://api.nuget.org/packages/system.text.regularexpressions.4.3.0.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.text.regularexpressions/4.3.0/system.text.regularexpressions.4.3.0.nupkg</p>
<p>

Dependency Hierarchy:
  - xunit.console.2.4.2.nupkg (Root Library)
    - xunit.runner.reporters.2.4.2.nupkg
      - xunit.runner.utility.2.4.2.nupkg
        - netstandard.library.1.6.1.nupkg
          - system.xml.xdocument.4.3.0.nupkg
            - system.xml.readerwriter.4.3.0.nupkg
              - :x: **system.text.regularexpressions.4.3.0.nupkg** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A denial of service vulnerability exists when .NET Framework and .NET Core improperly process RegEx strings, aka '.NET Framework and .NET Core Denial of Service Vulnerability'. This CVE ID is unique from CVE-2019-0980, CVE-2019-0981.
 Mend Note: After conducting further research, Mend has determined that CVE-2019-0820 only affects environments with versions 4.3.0 and 4.3.1 only on netcore50 environment of system.text.regularexpressions.nupkg.

<p>Publish Date: 2019-05-16
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0820>CVE-2019-0820</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-cmhx-cq75-c4mj">https://github.com/advisories/GHSA-cmhx-cq75-c4mj</a></p>
<p>Release Date: 2019-05-16</p>
<p>Fix Resolution: System.Text.RegularExpressions - 4.3.1</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-02-09 19:35:26.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="4"></a>

### #4: tokio-1.23.0.crate: 2 vulnerabilities (highest severity is: 9.8) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/4 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-06 17:53:58.000 UTC (3 years ago) |
| **Updated** | 2023-02-09 22:28:25.000 UTC |
| **Closed** | 2023-02-09 22:28:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>tokio-1.23.0.crate</b></p></summary>

<p>An event-driven, non-blocking I/O platform for writing asynchronous I/O
backed applications.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/tokio/1.23.0/download">https://crates.io/api/v1/crates/tokio/1.23.0/download</a></p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (tokio version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2023-0027](https://github.com/tokio-rs/tokio/commit/d6ea7a742b92d3e516035a584ab9347a96be363a) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 9.8 | tokio-1.23.0.crate | Direct | tokio - 1.18.5,1.20.4,1.24.2 | &#10060; |
| [CVE-2023-22466](https://www.mend.io/vulnerability-database/CVE-2023-22466) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> Medium | 5.4 | tokio-1.23.0.crate | Direct | tokio - 1.18.4,1.20.3,1.23.1 | &#10060; |


## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> WS-2023-0027</summary>


###  Vulnerable Library - <b>tokio-1.23.0.crate</b></p>

<p>An event-driven, non-blocking I/O platform for writing asynchronous I/O
backed applications.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/tokio/1.23.0/download">https://crates.io/api/v1/crates/tokio/1.23.0/download</a></p>
<p>

Dependency Hierarchy:
  - :x: **tokio-1.23.0.crate** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A soundness issue was discovered in tokio. tokio::io::ReadHalf<T>::unsplit can violate the Pin contract. Specific set of conditions needed to trigger an issue (a !Unpin type in ReadHalf) is unusual, combined with the difficulty of making any arbitrary use-after-free exploitable in Rust without doing a lot of careful alignment of data types in the surrounding code. The tokio feature io-util is also required to be enabled to trigger this soundness issue.

<p>Publish Date: 2023-02-02
<p>URL: <a href=https://github.com/tokio-rs/tokio/commit/d6ea7a742b92d3e516035a584ab9347a96be363a>WS-2023-0027</a></p>
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
<p>Origin: <a href="https://rustsec.org/advisories/RUSTSEC-2023-0005.html">https://rustsec.org/advisories/RUSTSEC-2023-0005.html</a></p>
<p>Release Date: 2023-02-02</p>
<p>Fix Resolution: tokio - 1.18.5,1.20.4,1.24.2</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> CVE-2023-22466</summary>


###  Vulnerable Library - <b>tokio-1.23.0.crate</b></p>

<p>An event-driven, non-blocking I/O platform for writing asynchronous I/O
backed applications.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/tokio/1.23.0/download">https://crates.io/api/v1/crates/tokio/1.23.0/download</a></p>
<p>

Dependency Hierarchy:
  - :x: **tokio-1.23.0.crate** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Tokio is a runtime for writing applications with Rust. Starting with version 1.7.0 and prior to versions 1.18.4, 1.20.3, and 1.23.1, when configuring a Windows named pipe server, setting `pipe_mode` will reset `reject_remote_clients` to `false`. If the application has previously configured `reject_remote_clients` to `true`, this effectively undoes the configuration. Remote clients may only access the named pipe if the named pipe's associated path is accessible via a publicly shared folder (SMB). Versions 1.23.1, 1.20.3, and 1.18.4 have been patched. The fix will also be present in all releases starting from version 1.24.0. Named pipes were introduced to Tokio in version 1.7.0, so releases older than 1.7.0 are not affected. As a workaround, ensure that `pipe_mode` is set first after initializing a `ServerOptions`.

<p>Publish Date: 2023-01-04
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-22466>CVE-2023-22466</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>5.4</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: Low
  - Integrity Impact: Low
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://github.com/tokio-rs/tokio/security/advisories/GHSA-7rrj-xr53-82p7">https://github.com/tokio-rs/tokio/security/advisories/GHSA-7rrj-xr53-82p7</a></p>
<p>Release Date: 2023-01-04</p>
<p>Fix Resolution: tokio - 1.18.4,1.20.3,1.23.1</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-02-09 22:28:24.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="3"></a>

### #3: microsoft.testplatform.testhost.17.1.0.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/3 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-06 17:53:56.000 UTC (3 years ago) |
| **Updated** | 2023-02-09 22:28:22.000 UTC |
| **Closed** | 2023-02-09 22:28:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>microsoft.testplatform.testhost.17.1.0.nupkg</b></p></summary>

<p></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/newtonsoft.json/9.0.1/newtonsoft.json.9.0.1.nupkg</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (microsoft.testplatform.testhost.17.1.0.nupkg version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2022-0161](https://github.com/JamesNK/Newtonsoft.Json/commit/7e77bbe1beccceac4fc7b174b53abfefac278b66) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | newtonsoft.json.9.0.1.nupkg | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the section "Details" below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> WS-2022-0161</summary>


###  Vulnerable Library - <b>newtonsoft.json.9.0.1.nupkg</b></p>

<p>Json.NET is a popular high-performance JSON framework for .NET</p>
<p>Library home page: <a href="https://api.nuget.org/packages/newtonsoft.json.9.0.1.nupkg">https://api.nuget.org/packages/newtonsoft.json.9.0.1.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/newtonsoft.json/9.0.1/newtonsoft.json.9.0.1.nupkg</p>
<p>

Dependency Hierarchy:
  - microsoft.testplatform.testhost.17.1.0.nupkg (Root Library)
    - :x: **newtonsoft.json.9.0.1.nupkg** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Improper Handling of Exceptional Conditions in Newtonsoft.Json.
Newtonsoft.Json prior to version 13.0.1 is vulnerable to Insecure Defaults due to improper handling of StackOverFlow exception (SOE) whenever nested expressions are being processed. Exploiting this vulnerability results in Denial Of Service (DoS), and it is exploitable when an attacker sends 5 requests that cause SOE in time frame of 5 minutes. This vulnerability affects Internet Information Services (IIS) Applications.

<p>Publish Date: 2022-06-22
<p>URL: <a href=https://github.com/JamesNK/Newtonsoft.Json/commit/7e77bbe1beccceac4fc7b174b53abfefac278b66>WS-2022-0161</a></p>
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
<p>Release Date: 2022-06-22</p>
<p>Fix Resolution: Newtonsoft.Json - 13.0.1;Microsoft.Extensions.ApiDescription.Server - 6.0.0</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-02-09 22:28:22.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="2"></a>

### #2: xunit.2.4.1.nupkg: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/2 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-01-06 17:53:54.000 UTC (3 years ago) |
| **Updated** | 2023-01-12 17:22:54.000 UTC |
| **Closed** | 2023-01-12 17:22:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>xunit.2.4.1.nupkg</b></p></summary>

<p></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (xunit.2.4.1.nupkg version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2018-8292](https://www.mend.io/vulnerability-database/CVE-2018-8292) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | system.net.http.4.3.0.nupkg | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the section "Details" below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2018-8292</summary>


###  Vulnerable Library - <b>system.net.http.4.3.0.nupkg</b></p>

<p>Provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

</p>
<p>Library home page: <a href="https://api.nuget.org/packages/system.net.http.4.3.0.nupkg">https://api.nuget.org/packages/system.net.http.4.3.0.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>

Dependency Hierarchy:
  - xunit.2.4.1.nupkg (Root Library)
    - xunit.assert.2.4.1.nupkg
      - netstandard.library.1.6.1.nupkg
        - :x: **system.net.http.4.3.0.nupkg** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-dotnet/commit/f43363dcc711455971cc34aee9c451cb68ddd2bd">f43363dcc711455971cc34aee9c451cb68ddd2bd</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
An information disclosure vulnerability exists in .NET Core when authentication information is inadvertently exposed in a redirect, aka ".NET Core Information Disclosure Vulnerability." This affects .NET Core 2.1, .NET Core 1.0, .NET Core 1.1, PowerShell Core 6.0.

<p>Publish Date: 2018-10-10
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-8292>CVE-2018-8292</a></p>
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
  - Confidentiality Impact: High
  - Integrity Impact: None
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Release Date: 2018-10-10</p>
<p>Fix Resolution: System.Net.Http - 4.3.4;Microsoft.PowerShell.Commands.Utility - 6.1.0-rc.1</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-12 17:22:53.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="588"></a>

### #588: [Bug] Some unlikely workflow task failures like failure conversion issues may be lost

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/588 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2026-01-07 15:49:26.000 UTC (2 days ago) |
| **Updated** | 2026-01-07 15:49:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

When reviewing the reworking of #492, we can have errors in the lambda/task passed to `QueueNewTaskAsync` of the `StartChildWorkflowAsync`. So if an error on failure conversion occurs in there, we are not logging it because we are not logging/catching all errors for `QueueNewTaskAsync`.

This same thing could happen in other places where we are not properly catching errors in tasks passed to `QueueNewTaskAsync`. We need to be catching these and setting `currentActivationException` (and maybe add logging if the existing task failure logging is inadequate). Whether this is done in each `QueueNewTaskAsync` caller or at the general level can be decided by implementer.


---

<a id="587"></a>

### #587: Refactor Bridge.Client to be IDisposable instead of a SafeHandle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/587 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2026-01-06 17:17:04.000 UTC (3 days ago) |
| **Updated** | 2026-01-06 17:17:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#583 introduced the separation of unmanaged pointer lifetime management into `SafeHandle`. The `Bridge.Client` class could not be fully converted to a disposable implementation without other possible API changes; this work was deferred to fix the immediate issue that the PR was addressing. This conversion should be done to match the pattern established for the `Bridge.Worker` class so that there aren't two SafeHandle implementations for `Interop.TemporalCoreClient*`.


---

<a id="586"></a>

### #586: Separate unmanaged pointer lifecycle management into SafeHandles

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/586 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2026-01-06 17:13:15.000 UTC (3 days ago) |
| **Updated** | 2026-01-06 17:13:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#583 introduced separate `SafeHandle` implementations for the `Client` and `Worker` bridge implementations to allow the `SafeHandle`s to be passed around and prevent use-after-free problems. This should be extended to the remaining classes that currently maintain the lifetime of unmanaged pointers.
- Pointer lifetime management should be exclusively maintained by `SafeHandle` types for each unmanaged pointer type.
- Consumers of the unmanaged pointers should use the `Scope.Pointer` method to add-ref on a `SafeHandle`, which will return the unmanaged pointer value.


---

<a id="584"></a>

### #584: [Bug] Loading TLS certificates from path doesn't work

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/584 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-26 16:59:31.000 UTC (14 days ago) |
| **Updated** | 2025-12-26 16:59:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Connect to Temporal Cloud with mTLS auth using certificate file provided in `TEMPORAL_TLS_CLIENT_CERT_PATH` env var.

### Describe the bug

Setting `TEMPORAL_TLS_CLIENT_CERT_PATH` env var to load a certificate leads to connection error:

```
tem.InvalidOperationException: Connection failed: `get_system_info` call error after connection: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Custom { kind: InvalidData, error: "received fatal alert: CertificateRequired" }))) }
```

If the same certificate is loaded into `TEMPORAL_TLS_CLIENT_CERT_DATA` env var, connection is successful.

### Minimal Reproduction

```
var envVars = Environment.GetEnvironmentVariables();
foreach (var key in envVars.Keys)
{
    string keyStr = key.ToString();
    if (keyStr.StartsWith("TEMPORAL"))
    {
        Console.WriteLine($"{keyStr} = {envVars[key]}");
    }
}

var connectOptions = ClientEnvConfig.LoadClientConnectOptions();
var client = await TemporalClient.ConnectAsync(connectOptions);
Console.WriteLine("✅ Client connected to {0} in namespace '{1}'", connectOptions.TargetHost, connectOptions.Namespace);
```

### Additional context

Looks like `ClientEnvConfig.Tls.ToTlsOptions` only reads `Data` and ignores  `Path` property of `DataSource`: https://github.com/temporalio/sdk-dotnet/blob/e13113b422ff633d44500fef392243b237f9d46a/src/Temporalio/Common/EnvConfig/ClientEnvConfig.cs#L204


---

<a id="578"></a>

### #578: [Feature Request] Add tests to confirm proper Nexus support for time-skipping environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/578 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-17 17:36:14.000 UTC (22 days ago) |
| **Updated** | 2025-12-17 17:36:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When Nexus was added, tests specific to the time-skipping test server were not added. At least a common test confirming time skipping test server works with Nexus should be added. Note, any such test may fail due to https://github.com/temporalio/sdk-java/issues/2592 which would be a blocker for doing this.


---

<a id="576"></a>

### #576: [Feature Request] .NET Analyzer for Checking Workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/576 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-12 15:31:49.000 UTC (28 days ago) |
| **Updated** | 2025-12-12 15:39:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like we [built for Go](https://github.com/temporalio/sdk-go/tree/master/contrib/tools/workflowcheck) and [built for Java](https://github.com/temporalio/sdk-java/pull/2356), there is a desire for a "workflow check" analyzer for .NET.

Initial notes/thoughts:

* Should be a diagnostic/Roslyn analyzer called "workflow check" to match Go and Java equivalents
* Should _transitively_ check known-yet-configurable invalid actions occurring in a workflow
  * Transitive is the key/hard part
    * This requires coloring methods as "Temporal invalid" or not, and any method that invokes an invalid method is itself invalid, so this is basically call graph building
    * For Go, diagnostic checks support "facts" which are effectively serializable metadata that can be attached to typed AST, so that was used to mark a method as invalid (including transitively)
    * For Java, no such thing exists, so we had to completely write an analyzer from scratch
    * Like Java, .NET analyzer can ideally work from workflow method out and not have to eagerly color all methods
    * The error needs to show the call graph stack since many times the issue is several calls deep from the workflow itself
  * Understood that this will miss some things, e.g. reflection
  * See https://github.com/temporalio/sdk-dotnet#workflow-logic-constraints and https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#net-task-determinism for what constitutes an invalid action
* Ideally, should disable or invert certain existing analyzer/diagnostic warnings that are not applicable to workflows
  * See https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#workflow-editorconfig for set of rules that should be inverted/disabled
* If analyzer is cheap enough performance-wise to enable by default when using the `Temporalio` NuGet package, should do so
* Ideally, if the rules are not too granular, we can create entries at https://github.com/temporalio/rules for each one (so we should prefix with `TMPRL`)
  * Even if they are fairly granular, it is something we may want
* https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-roslyn-analyzer already exists for those curious

Admittedly research has not been done to confirm that all of these features are possible with .NET code analyzers.


---

<a id="573"></a>

### #573: [Feature Request] Allow custom meter implementation to disable tracing event listener

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/573 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-09 17:54:45.000 UTC (1 months ago) |
| **Updated** | 2025-12-19 16:15:19.000 UTC |
| **Closed** | 2025-12-19 16:15:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today, a user providing a `CustomMetricMeter` may set an underlying .NET meter that uses threads/tasks in a non-deterministic manner, which means metrics emitted from user workflows will trip the tracing event listener. We should offer an option on the `CustomMetricMeter` that will put calls to the underlying `Meter` inside `Workflow.Unsafe.WithTracingEventListenerDisabled` if `Workflow.InWorkflow` is `true`. Whether this option is enabled by default or not is TBD, but probably will be on by default (and therefore would be ok if this wasn't a user-facing option at all).


---

<a id="568"></a>

### #568: [Feature Request] Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/568 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:32.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow executing activities without a workflow. The clients must support the new (upcoming) server APIs for starting, managing and getting results of activities. The workers must support running activities outside of workflow context.

### Additional context

Server API PR (WIP): https://github.com/temporalio/api/pull/640


---

<a id="559"></a>

### #559: [Bug] Envconfig - Use correct `TemporalClientConnectOptions` constructor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/559 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-11-12 19:16:39.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 20:50:53.000 UTC |
| **Closed** | 2025-11-12 20:50:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | THardy98 |
| **Milestone** | None |

#### Description

### What are you really trying to do?
Use the correct `TemporalClientConnectOptions` constructor when creating connection options that allows for possibly null address/target host value.

### Describe the bug
The existing implementation uses a constructor that requires a string for target host, meaning we have to supply an empty string.... meaning a client that cannot connect to a server.


---

<a id="558"></a>

### #558: [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/558 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:27:02.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:27:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Users want to override the target version on a workflow, especially when doing pre-deployment testing.  This should work the same as it does when creating a Workflow from a client.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="551"></a>

### #551: [Feature Request] Enable Worker Heartbeating

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/551 |
| **State** | CLOSED |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-28 02:00:49.000 UTC (2 months ago) |
| **Updated** | 2025-12-10 21:47:51.000 UTC |
| **Closed** | 2025-12-10 21:47:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Worker heartbeating is implemented in Core, need to enable worker heartbeating by allowing users to specify the worker heartbeat interval when initializing Core Runtime

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="549"></a>

### #549: [Bug] Investigate `ExecuteWorkflowAsync_PollingBehavior_Autoscaling` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/549 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-24 19:52:42.000 UTC (2 months ago) |
| **Updated** | 2025-10-24 19:54:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In rare situations, `Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling` fails with:

```
  Failed Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling [113 ms]
  Error Message:
   The collection was expected to contain a single element, but it was empty.
  Stack Trace:
     at Temporalio.Tests.Worker.WorkflowWorkerTests.<>c__DisplayClass222_0.<<ExecuteWorkflowAsync_PollingBehavior_Autoscaling>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7561
--- End of stack trace from previous location ---
   at Temporalio.Tests.Worker.WorkflowWorkerTests.<>c__DisplayClass229_0`1.<<ExecuteWorkerAsync>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7732
--- End of stack trace from previous location ---
   at Temporalio.Worker.TemporalWorker.<>c__DisplayClass29_0`1.<<ExecuteAsync>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 271
--- End of stack trace from previous location ---
   at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 430
   at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 445
   at Temporalio.Worker.TemporalWorker.ExecuteAsync[TResult](Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 270
   at Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkerAsync[TWorkflow,TResult](Func`2 action, TemporalWorkerOptions options, IWorkerClient client) in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7745
   at Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7551
--- End of stack trace from previous location ---
```


---

<a id="543"></a>

### #543: [Feature Request] Move `ClientEnvConfig` from `Temporalio.Client.EnvConfig` to `Temporalio.Common.EnvConfig`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/543 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-22 21:39:19.000 UTC (2 months ago) |
| **Updated** | 2025-10-24 18:54:14.000 UTC |
| **Closed** | 2025-10-24 18:54:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We don't need it in client-specific namespace even though it is only for client things. This matches other SDKs and it's not GA yet so even though this is a backwards-incompatible change, it's acceptable.


---

<a id="542"></a>

### #542: [.net] Plugin + SimplePlugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/542 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-10-20 21:22:52.000 UTC (2 months ago) |
| **Updated** | 2025-10-20 21:25:26.000 UTC |
| **Closed** | 2025-10-20 21:25:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Implement Plugins so that users can self-serve creating integrations with Temporal Workflows.  This is done in Python and we can copy.  


---

<a id="540"></a>

### #540: [Bug] Memory Leak in Temporalio.Bridge.CancellationToken

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/540 |
| **State** | CLOSED |
| **Author** | robcao (Robert Cao) |
| **Created** | 2025-10-17 18:15:43.000 UTC (2 months ago) |
| **Updated** | 2025-10-27 18:40:37.000 UTC |
| **Closed** | 2025-10-27 18:40:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I am using the Temporal client to start workflows, and noticing that inside the process, there exists an ever growing amount of objects of type `Temporalio.Bridge.CancellationToken` and `CancellationTokenSource+CallbackNode` (which typically represents a callback to be invoked when the token is cancelled)

### Describe the bug

https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Bridge/CancellationToken.cs#L40

`CancellationToken.Register` registers a callback on the token and returns a `CancellationTokenRegistration` that should be disposed of once the callback is no longer needed. It doesn't look like the `CancellationTokenRegistration` is getting disposed of

https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Bridge/Scope.cs#L164

`Temporalio.Bridge.CancellationToken` is not evaluating to true in the conditional `if (v is GCHandle handle)` , and thus the `Temporalio.Bridge.CancellationToken.ReleaseHandle` method is never being invoked

I am not certain if there are any other types that should be getting disposed of that are not

<img width="1370" height="522" alt="Image" src="https://github.com/user-attachments/assets/611a3143-5e16-44ad-afe9-2fb4777d1b0d" />

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

In the root directory of this repository, create a new project like this

```
dotnet new console --output test/MemoryLeak  
```

Use the following csproj and Program.cs file

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\..\src\Temporalio\Temporalio.csproj" />
  </ItemGroup>

</Project>

```

```csharp
using Temporalio.Client;

using CancellationTokenSource cts = new();

TemporalClient client = await TemporalClient.ConnectAsync(new TemporalClientConnectOptions("localhost:7233")).ConfigureAwait(false);

await client.WorkflowService.GetSystemInfoAsync(new(), new RpcOptions() { CancellationToken = cts.Token }).ConfigureAwait(false);

```

Start a Temporal server: `temporal server start-dev`

Step through the program and validate that [ReleaseHandle](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Bridge/CancellationToken.cs#L56) is not called for the `GetSystemInfo` rpc

If you inspect the [registrations](https://github.com/dotnet/runtime/blob/1d1bf92fcf43aa6981804dc53c5174445069c9e4/src/libraries/System.Private.CoreLib/src/System/Threading/CancellationTokenSource.cs#L47) on the cancellation token source, you can see that there is still a callback attached as well

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: x64 Windows 11
- Temporal Version: 1.9.0
- Are you using Docker or Kubernetes or building Temporal from source? Running Temporal directly on host

### Additional context

<!-- Add any other context about the problem here. -->

I modified the SDK locally like below and validated that this seemed to address the memory leakage (although the implementation may be a bit naive)

```csharp
// src/Temporalio/Bridge/CancellationToken.cs
using System;
using System.Runtime.InteropServices;
using System.Threading;

namespace Temporalio.Bridge
{
    /// <summary>
    /// Core-owned cancellation token.
    /// </summary>
    internal class CancellationToken : SafeHandle
    {
        private CancellationTokenRegistration? cancellationCallback;

        /// <summary>
        /// Initializes a new instance of the <see cref="CancellationToken"/> class.
        /// </summary>
        public CancellationToken()
            : base(IntPtr.Zero, true)
        {
            unsafe
            {
                Ptr = Interop.Methods.temporal_core_cancellation_token_new();
                SetHandle((IntPtr)Ptr);
            }
        }

        /// <inheritdoc/>
        public override unsafe bool IsInvalid => Ptr == null;

        /// <summary>
        /// Gets internal token pointer.
        /// </summary>
        internal unsafe Interop.TemporalCoreCancellationToken* Ptr { get; private init; }

        /// <summary>
        /// Create a core cancellation token from the given cancellation token.
        /// </summary>
        /// <param name="token">Threading token.</param>
        /// <returns>Created cancellation token.</returns>
        public static CancellationToken FromThreading(System.Threading.CancellationToken token)
        {
            var ret = new CancellationToken();
            ret.cancellationCallback = token.Register(ret.Cancel);

            return ret;
        }

        /// <summary>
        /// Cancel this token.
        /// </summary>
        public void Cancel()
        {
            unsafe
            {
                Interop.Methods.temporal_core_cancellation_token_cancel(Ptr);
            }
        }

        /// <inheritdoc/>
        protected override unsafe bool ReleaseHandle()
        {
            // I suspect that the callback needs to be unregistered before freeing the core owned cancellation token to prevent any access issues
            cancellationCallback?.Dispose();
            Interop.Methods.temporal_core_cancellation_token_free(Ptr);
            return true;
        }
    }
}
```

```csharp
// src/Temporalio/Bridge/Scope.cs

/// <inheritdoc />
        public void Dispose()
        {
            foreach (var v in toKeepAlive)
            {
                if (v is GCHandle handle)
                {
                    handle.Free();
                }
                else if (v is CancellationToken cancellationToken)
                {
                    cancellationToken.Dispose();
                }
            }
            // This keep alive does nothing obviously, but it's good documentation to understand the
            // purpose of this separate dispose call
            GC.KeepAlive(toKeepAlive);
            GC.SuppressFinalize(this);
        }
```


---

<a id="537"></a>

### #537: [Bug] Remove erroneous `Temporalio.Workflows.NexusOperationOptions.OperationName`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/537 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-13 14:53:06.000 UTC (2 months ago) |
| **Updated** | 2025-10-24 20:41:57.000 UTC |
| **Closed** | 2025-10-24 20:41:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

`Temporalio.Workflows.NexusOperationOptions.OperationName` should not be there, it is not used


---

<a id="536"></a>

### #536: [Feature Request] Support Nexus in `Temporalio.Extensions.Hosting`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/536 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-13 13:55:52.000 UTC (2 months ago) |
| **Updated** | 2025-11-17 21:26:40.000 UTC |
| **Closed** | 2025-11-17 21:26:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Support Nexus services with DI and such in `Temporalio.Extensions.Hosting`.


---

<a id="528"></a>

### #528: [Feature Request] Nexus custom slot suppliers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/528 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-25 14:36:21.000 UTC (3 months ago) |
| **Updated** | 2025-12-03 15:57:17.000 UTC |
| **Closed** | 2025-12-03 15:57:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Make sure Nexus slot info and custom slot supplier are implemented/tested



---

<a id="523"></a>

### #523: [Bug] Serialization context incorrectly applied to all workflow calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/523 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-22 15:25:04.000 UTC (3 months ago) |
| **Updated** | 2025-09-25 18:37:08.000 UTC |
| **Closed** | 2025-09-25 18:37:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

As part of #446 we assumed every use of data conversion in a .NET workflow context needed a .NET workflow context. But to match Java, we actually need to only selectively apply contexts based on their situation. This applies to payload converter, failure converter, and payload codec. We will have to decide whether we want the context present on the payload/failure converter we expose to users.

This is technically a backwards incompatible change as we had not explicitly marked the .NET serialization context addition as experimental, so the implementer will have to decide how best to handle that.


---

<a id="519"></a>

### #519: [Feature Request] Ensure tests exist to confirm custom slot supplier slot info has proper fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/519 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-05 12:31:58.000 UTC (4 months ago) |
| **Updated** | 2025-09-25 18:37:08.000 UTC |
| **Closed** | 2025-09-25 18:37:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/672. Make sure Nexus is included.


---

<a id="515"></a>

### #515: [Feature Request] Nexus OpenTelemetry support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/515 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-29 18:59:18.000 UTC (4 months ago) |
| **Updated** | 2025-10-21 16:39:55.000 UTC |
| **Closed** | 2025-10-21 16:39:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like tracing work done at https://github.com/temporalio/sdk-java/pull/2278, but for OTel .NET


---

<a id="512"></a>

### #512: [Feature Request] Ensure gRPC binary metadata headers are supported

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/512 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-27 20:40:35.000 UTC (4 months ago) |
| **Updated** | 2025-12-12 22:39:07.000 UTC |
| **Closed** | 2025-12-12 22:39:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/671. Probably needs https://github.com/temporalio/sdk-core/issues/991 first, and then probably needs to support dictionary values as bytes somehow without breaking users (or maybe require `-bin` based values are base64'd by users).


---

<a id="510"></a>

### #510: [Feature Request] Reclassify Benign Application errors in OpenTelemetry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/510 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-08-26 20:41:00.000 UTC (4 months ago) |
| **Updated** | 2025-09-29 21:05:43.000 UTC |
| **Closed** | 2025-09-29 21:05:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See issue description here:

https://github.com/temporalio/sdk-python/issues/1041


---

<a id="507"></a>

### #507: [Feature Request] Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/507 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:33:37.000 UTC (4 months ago) |
| **Updated** | 2025-11-11 18:40:33.000 UTC |
| **Closed** | 2025-11-11 18:40:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/652



---

<a id="505"></a>

### #505: [Feature Request] Add first execution run ID to workflow info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/505 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-11 14:27:57.000 UTC (5 months ago) |
| **Updated** | 2025-09-02 14:27:52.000 UTC |
| **Closed** | 2025-09-02 14:27:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/29


---

<a id="499"></a>

### #499: [Feature Request] Add Summary to LocalActivityOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/499 |
| **State** | CLOSED |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-07-18 00:02:50.000 UTC (5 months ago) |
| **Updated** | 2025-09-22 21:13:11.000 UTC |
| **Closed** | 2025-09-22 21:13:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

See `features` repo issue for more info

### Describe the solution you'd like


### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="490"></a>

### #490: [Feature Request] Environment Configuration

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/490 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-06-17 19:59:51.000 UTC (6 months ago) |
| **Updated** | 2025-09-23 01:40:42.000 UTC |
| **Closed** | 2025-09-23 01:40:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/441 and https://github.com/temporalio/proposals/blob/master/all-sdk/external-client-configuration.md


---

<a id="487"></a>

### #487: [Bug] Improperly accessing current activity context in outbound heartbeat

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/487 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-06 16:09:55.000 UTC (7 months ago) |
| **Updated** | 2025-08-11 17:56:31.000 UTC |
| **Closed** | 2025-08-11 17:56:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

First found in Ruby at https://github.com/temporalio/sdk-ruby/issues/279, we are accessing the current context in the outbound activity heartbeater to get the task token. We should not, because we allow heartbeating outside of context. So we should give the interceptor the task token another way.


---

<a id="479"></a>

### #479: [.NET] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/479 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-05-14 22:46:39.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 22:49:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments. See the Go one as an example (though it also needs some updating as of this writing)


---

<a id="471"></a>

### #471: [Bug] Auto-time-skipping may not reset properly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/471 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-05 12:51:53.000 UTC (8 months ago) |
| **Updated** | 2025-05-19 13:37:12.000 UTC |
| **Closed** | 2025-05-19 13:37:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

See this comment: https://github.com/temporalio/sdk-ruby/pull/260#discussion_r2072137841. Specifically, https://github.com/temporalio/sdk-dotnet/blob/d48377d698b2a2cb7a8c58d181959df473875314/src/Temporalio/Testing/WorkflowEnvironment.cs#L323-L338 might have its assignment/conditional backwards.


---

<a id="465"></a>

### #465: [Bug] Update result serialization failure silently swallowed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/465 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-23 19:51:11.000 UTC (8 months ago) |
| **Updated** | 2025-04-28 17:26:41.000 UTC |
| **Closed** | 2025-04-28 17:26:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Due to how update chose to use `task.ContinueWith` (maybe not the best idea in #142), when an exception occurs in update result serialization, it is swallowed. We need to make sure to surface this as a failure likely following the same rules as regular update failure (so for most it'll be a task failure).


---

<a id="464"></a>

### #464: [.net] SDK support for activity reset 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/464 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-23 19:08:10.000 UTC (8 months ago) |
| **Updated** | 2025-09-18 18:45:20.000 UTC |
| **Closed** | 2025-09-18 18:45:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/620


---

<a id="461"></a>

### #461: [Feature Request] Use GH ARM runner on binary build GH workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/461 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 13:06:40.000 UTC (8 months ago) |
| **Updated** | 2025-04-28 16:45:46.000 UTC |
| **Closed** | 2025-04-28 16:45:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

#308 replaced BuildJet ARM runner for CI, but we didn't replace it for build-binary step


---

<a id="460"></a>

### #460: [Feature Request] Change get static summary/details on workflow in client to be lazy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/460 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 12:29:53.000 UTC (8 months ago) |
| **Updated** | 2025-06-06 16:32:59.000 UTC |
| **Closed** | 2025-06-06 16:32:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we eagerly decode these, change to be lazy upon request


---

<a id="457"></a>

### #457: [Feature Request] Show retry policy on activity info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/457 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-17 12:23:51.000 UTC (8 months ago) |
| **Updated** | 2025-09-22 17:57:23.000 UTC |
| **Closed** | 2025-09-22 17:57:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/615


---

<a id="448"></a>

### #448: [Feature Request] Apply application failure logging and metrics behaviour according to `ApplicationErrorCategory`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/448 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-04-09 18:33:03.000 UTC (9 months ago) |
| **Updated** | 2025-05-29 20:49:56.000 UTC |
| **Closed** | 2025-05-29 20:49:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See corresponding features issue:
https://github.com/temporalio/features/issues/614

Will need to wait for core:
https://github.com/temporalio/sdk-core/issues/897

Core-based SDKs only need to apply corresponding logging behaviour, core handles metrics.


---

<a id="441"></a>

### #441: Heartbeating activities should be interrupted when the activities are paused.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/441 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-01 23:43:12.000 UTC (9 months ago) |
| **Updated** | 2025-05-27 20:53:00.000 UTC |
| **Closed** | 2025-05-27 20:53:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/602


---

<a id="440"></a>

### #440: [Feature Request] Support user data in forwarded log callback in C bridge

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/440 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-31 17:29:35.000 UTC (9 months ago) |
| **Updated** | 2025-03-31 17:29:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

For low-level users of the pure C bridge (that happens to still be in this repo until #423), the ability to pass arbitrary user data through the callback similar to how done in other callbacks would be ideal. E.g. `forward_to_user_data: *mut libc::c_void` on `LoggingOptions` and update `ForwardedLogCallback`.


---

<a id="438"></a>

### #438: [Feature Request] Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/438 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 15:04:36.000 UTC (9 months ago) |
| **Updated** | 2025-04-15 15:52:10.000 UTC |
| **Closed** | 2025-04-15 15:52:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/434



---

<a id="437"></a>

### #437: [Feature Request] Support New Worker Versioning API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/437 |
| **State** | CLOSED |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2025-03-24 18:11:11.000 UTC (9 months ago) |
| **Updated** | 2025-05-14 18:24:11.000 UTC |
| **Closed** | 2025-05-14 18:24:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
We need to add annotations to workflows to support the new versioning APIs. Refer to temporalio/features#548 for the Go equivalents.

### Describe the solution you'd like
There are some designs for all SDK languages (including .NET) here: https://docs.google.com/document/d/1QGacjnlFwrfFtAvv9besx6sEdr36kJ3zQ9J7bGLRwk4/edit?usp=sharing



---

<a id="430"></a>

### #430: [Feature Request] Allow metric meters to be constructed by users for tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/430 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-18 16:31:56.000 UTC (9 months ago) |
| **Updated** | 2025-03-18 19:57:18.000 UTC |
| **Closed** | 2025-03-18 19:57:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today in `Temporalio.Testing.ActivityEnvironment` a `MetricMeter` is accepted which is an abstract class, but the returned metrics from abstract methods there cannot be user constructed due to having `internal` constructors. We should make `protected` constructors on each that accept `string name, string? unit, string? description` that just delegate to the `internal` ones using `MetricDetails`.


---

<a id="428"></a>

### #428: [Feature Request] Add summary to Nexus operation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/428 |
| **State** | CLOSED |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-03-11 18:41:17.000 UTC (10 months ago) |
| **Updated** | 2025-12-01 23:53:06.000 UTC |
| **Closed** | 2025-12-01 23:53:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

https://github.com/temporalio/features/issues/610


---

<a id="426"></a>

### #426: [Feature Request] Initial Nexus implementation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/426 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-11 14:16:22.000 UTC (10 months ago) |
| **Updated** | 2025-09-22 17:16:54.000 UTC |
| **Closed** | 2025-09-22 17:16:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Alongside Nexus .NET SDK, need Temporal-specific implementation in this SDK. See https://github.com/temporalio/features/issues/609



---

<a id="423"></a>

### #423: [Feature Request] Move Rust C bridge to sdk-core

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/423 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-07 18:38:02.000 UTC (10 months ago) |
| **Updated** | 2025-07-02 18:07:02.000 UTC |
| **Closed** | 2025-07-02 18:07:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

For use by anyone that needs C interfacing into Core, move the Rust parts of the bridge to Core. There is nothing .NET related in the C bridge. This will admittedly make it harder to make more rapid changes to the .NET interfacing to Core, but it was deemed worth it to allow others to share it.


---

<a id="416"></a>

### #416: [Feature Request] Custom metric bucket sizes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/416 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-26 19:50:55.000 UTC (10 months ago) |
| **Updated** | 2025-04-17 20:20:57.000 UTC |
| **Closed** | 2025-04-17 20:20:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/606. Need to expose histogram bucket overrides made available in https://github.com/temporalio/sdk-core/pull/844.


---

<a id="415"></a>

### #415: [Feature Request] Expose root workflow execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/415 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-25 14:18:13.000 UTC (10 months ago) |
| **Updated** | 2025-04-17 13:41:49.000 UTC |
| **Closed** | 2025-04-17 13:41:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/605, but needs to wait on https://github.com/temporalio/sdk-core/issues/881


---

<a id="414"></a>

### #414: [Feature Request] Built-in query responses should use "RawValue"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/414 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:34:50.000 UTC (10 months ago) |
| **Updated** | 2025-03-17 14:45:29.000 UTC |
| **Closed** | 2025-03-17 14:45:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/604. Make sure built-in queries return a raw value


---

<a id="412"></a>

### #412: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/412 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:22.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 20:44:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

<a id="406"></a>

### #406: [Feature Request] Add tests/confirm signal handlers run first and as expected

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/406 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-04 15:31:29.000 UTC (11 months ago) |
| **Updated** | 2025-02-28 14:41:10.000 UTC |
| **Closed** | 2025-02-28 14:41:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When tasks are queued on the scheduler, they done in a FIFO way, so signals should be processed first. However, there is a concern over a situation with multiple signals in the same task are not run before the primary workflow wakes up.

For example, given the following code:

```csharp
[Workflow]
public class MyWorkflow
{
    private readonly List<string> signals = new();

    [WorkflowRun]
    public async Task<int> RunAsync()
    {
        await Workflow.WaitConditionAsync(() => signals.Count > 0);
        return signals.Count;
    }

    [WorkflowSignal]
    public async Task SignalAsync(string value) => signals.Add(value);
}
```

Things that we need to test for:

* If two signals are in the same task, is the workflow result `2`? With where wait conditions are checked this should be true in .NET (though not other languages)
* If the above is not the case, does handlers-finished check fix it?
* If an unhandled command is triggered for two signals (e.g. change sample to run local activity instead of waiting condition), will the same assertions hold true?


---

<a id="403"></a>

### #403: [Feature Request] Support Priority Annotations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/403 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-03 18:22:03.000 UTC (11 months ago) |
| **Updated** | 2025-05-14 21:55:01.000 UTC |
| **Closed** | 2025-05-14 21:55:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Add support for attaching priority to workflows/activities

**Describe the solution you'd like**
See https://github.com/temporalio/features/issues/593 for details



---

<a id="402"></a>

### #402: [Feature Request] Expose read-only headers to activity info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/402 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-03 13:29:53.000 UTC (11 months ago) |
| **Updated** | 2025-02-03 13:29:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

### Describe the solution you'd like

We don't usually do this in SDKs, but since we did it in workflow info (needed inside update handler tracing interceptor), we might as well for activities


---

<a id="400"></a>

### #400: [Bug] Workflow codec not working with new timer summary

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/400 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-03 13:25:58.000 UTC (11 months ago) |
| **Updated** | 2025-02-03 22:18:46.000 UTC |
| **Closed** | 2025-02-03 22:18:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

At https://github.com/temporalio/sdk-dotnet/blob/b5ca8541b56a9790ded80801b6d1bd1924ed29a7/src/Temporalio/Worker/WorkflowCodecHelper.cs#L196, we assume the summary is non-null which is not correct. We need to fix this and we need to ensure coverage.


---

<a id="398"></a>

### #398: [Feature Request] Add explicit memoization support to the`Patched()` API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/398 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:45:44.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:45:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add a `memoized` argument to the `Patched` and `DeprecatePatch` APIs.

- Keep backward compatibility on those functions for non-specifying the `memoized` argument, but deprecate those signatures. Make sure documentation clearly indicate how existing calls may safely get converted.

- Delegate handling of the `patched` logic to Core.

See temporalio/features#591 for details.


---

<a id="396"></a>

### #396: [Feature Request] Allow customization of dev server UI port

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/396 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-24 13:27:49.000 UTC (11 months ago) |
| **Updated** | 2025-02-05 21:36:26.000 UTC |
| **Closed** | 2025-02-05 21:36:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/588


---

<a id="392"></a>

### #392: [Feature Request] OTel metrics over HTTP

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/392 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:39:41.000 UTC (11 months ago) |
| **Updated** | 2025-02-05 21:36:26.000 UTC |
| **Closed** | 2025-02-05 21:36:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Expose ability to have Core OTel metrics use HTTP instead of default gRPC protocol. Would recommend a simple default-false http boolean. See https://github.com/temporalio/sdk-core/issues/820.


---

<a id="391"></a>

### #391: [Feature Request] Special behavior for Temporal built-in prefixes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/391 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:15:24.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 20:50:01.000 UTC |
| **Closed** | 2025-02-11 20:50:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/576



---

<a id="389"></a>

### #389: [Feature Request] Provide client from activity context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/389 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:34:21.000 UTC (1 years ago) |
| **Updated** | 2025-01-16 20:39:13.000 UTC |
| **Closed** | 2025-01-16 20:39:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow users to access Temporal client from within an activity. This is likely a `Client` instance property on `ActivityExecutionContext`. See https://github.com/temporalio/features/issues/203.



---

<a id="388"></a>

### #388: [Feature Request] Access to workflow/activity instance from context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/388 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:55:57.000 UTC (1 years ago) |
| **Updated** | 2025-01-16 20:39:13.000 UTC |
| **Closed** | 2025-01-16 20:39:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

### Describe the solution you'd like

The created instance of the workflow class should be made available as `Workflow.Instance` static property.

Also, in `Temporalio.Extensions.Hosting` where we create and control the lifetime of the activity instance, the instance should be made available in `ActivityExecutionContext.Instance` instance property. This is probably best as an extension method on that class and it is understood to only be as available as the execution context itself is (i.e. async local, may not traverse threads).

See https://github.com/temporalio/features/issues/572.



---

<a id="387"></a>

### #387: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/387 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:52:13.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 13:52:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a workflow-local var that is scoped only to the current workflow when accessed via code. See https://github.com/temporalio/features/issues/571.

Rough sketch: a user can have `public static readonly WorkflowLocal<string> MyValue = new()`, and it works like `AsyncLocal`.



---

<a id="373"></a>

### #373: [Bug] CI build is broken due to GHA dropping support for node16-based actions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/373 |
| **State** | CLOSED |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-11-26 23:04:42.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-11 15:36:19.000 UTC |
| **Closed** | 2024-12-11 15:36:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

GitHub Action’s just started enforcing the long-announced EOL on Node16-based actions. Basically, the latest release of GHA’s Runner agent ignores the fact that an action is requesting node16, and instead just calls node20 anyway. 

Until now, we were relying on GLIBC 2.24 Docker images or runners in very specific places to ensure that the native artifacts included in our official SDK releases would run on some older Linux distros that some of our customers were still using.

However, given that Node20 is incompatible with GLIBC 2.27 or earlier, this no longer works, and our CI workflows are now failing.


---

<a id="371"></a>

### #371: [Bug] Child workflow already started puts workflow type where run ID is

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/371 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-11-22 21:45:06.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-11 17:58:44.000 UTC |
| **Closed** | 2024-12-11 17:58:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Child workflow already started throws `WorkflowAlreadyStartedException`, but not only does that not accept a workflow type, but it _requires_ a run ID and is accidentally putting the workflow type in the run ID's place. Make a separate constructor that accepts a workflow type and a nullable run ID and expose workflow type property and make the run ID nullable. That last part shouldn't be a serious breaking change, though it is technically breaking.


---

<a id="368"></a>

### #368: [Feature Request] Clarify support .NET versions/runtimes in README

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/368 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-11-21 18:01:29.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-11 17:58:44.000 UTC |
| **Closed** | 2024-12-11 17:58:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

README should list supported .NET runtimes instead of requiring user to look at NuGet.


---

<a id="367"></a>

### #367: [Feature Request] Allow access to optional `MethodInfo` on `ActivityDefinition`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/367 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-11-20 16:58:33.000 UTC (1y 1m ago) |
| **Updated** | 2024-11-25 13:48:38.000 UTC |
| **Closed** | 2024-11-25 13:48:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

If the `ActivityDefinition` was built via a method, there should be no harm in exposing this method to callers (e.g. via a `MethodInfo?` property). This will allow users to do reflective things like check attributes.


---

<a id="365"></a>

### #365: [Feature Request] Add DisableEagerExecution to WorkerOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/365 |
| **State** | CLOSED |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2024-11-07 18:52:07.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-22 22:59:56.000 UTC |
| **Closed** | 2024-11-22 22:59:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Looks like DisableEagerExecution config is missing from WorkerOptions. This allows users to disable eager activities dispatch to this worker. 

This is really needed in order to be able to use MaxTaskQueueActivitiesPerSecond, as current service can apply rate limits only from matching task queue, but with eager activity dispatch activity tasks are dispatched from history service on PollActivityTask response directly.


---

<a id="361"></a>

### #361: [Feature Request] Clarify in workflow constructor exception that DI is not supported

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/361 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-28 19:25:55.000 UTC (1y 2m ago) |
| **Updated** | 2024-12-11 17:58:44.000 UTC |
| **Closed** | 2024-12-11 17:58:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Current message is "System.ArgumentException: Workflow named <workflow-name> is not instantiable" when trying to register a workflow Temporal cannot instantiate. Add a sentence clarifying that DI is intentionally not supported, e.g. "System.ArgumentException: Workflow named <workflow-name> is not instantiable. Dependency injection is not supported in workflows. Workflows must be deterministic and self-contained with a lifetime controlled by Temporal."


---

<a id="360"></a>

### #360: [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/360 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-21 16:31:24.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-21 16:31:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We auto-skip time when waiting on workflow result, we need to do the same when waiting on update result. See https://github.com/temporalio/features/issues/551.



---

<a id="359"></a>

### #359: [Feature Request] Support user metadata

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/359 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-15 12:27:44.000 UTC (1y 2m ago) |
| **Updated** | 2024-12-11 15:17:32.000 UTC |
| **Closed** | 2024-12-11 15:17:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/486. Specifically, after https://github.com/temporalio/sdk-core/issues/830:

* Accept optional "static summary " and "static details" on all ways to start a workflow (start, signal with start, schedule, and child workflow) and populate user metadata with them
* Accept optional "summary" when creating timers and populate user metadata with it
* Accept optional "summary" when creating activities and populate user metadata with it
* Handle `__temporal_workflow_metadata` query (see features issue and https://github.com/temporalio/sdk-go/pull/1597)
* Mark experimental


---

<a id="358"></a>

### #358: [Feature Request] Update Cargo dependencies including Tonic

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/358 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-11 20:45:54.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-04 22:30:40.000 UTC |
| **Closed** | 2024-11-04 22:30:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to get the latest Tonic since we are on 0.12.1 and it is not using system CAs by default


---

<a id="351"></a>

### #351: Show update handler and ID in logging context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/351 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-09-24 16:37:37.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-08 18:40:50.000 UTC |
| **Closed** | 2024-10-08 18:40:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/466 for more details


---

<a id="350"></a>

### #350: [Bug] Generic Activity methods are unsupported

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/350 |
| **State** | CLOSED |
| **Author** | ElanHasson (Elan Hasson) |
| **Created** | 2024-09-17 23:14:03.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-08 16:49:16.000 UTC |
| **Closed** | 2024-10-08 16:49:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Use a generic activity method

### Describe the bug

Fails hard at runtime.

It should be eagerly validated at worker creation.

```json
{
  "message": "Late bound operations cannot be performed on types or methods for which ContainsGenericParameters is true.",
  "stackTrace": "   at System.Reflection.RuntimeMethodInfo.ThrowNoInvokeException()\r\n   at System.Reflection.RuntimeMethodInfo.Invoke(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\r\n   at System.Reflection.MethodBase.Invoke(Object obj, Object[] parameters)\r\n   at Temporalio.Extensions.Hosting.ServiceProviderExtensions.<>c__DisplayClass2_0.<<CreateTemporalActivityDefinition>g__Invoker|0>d.MoveNext()\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Extensions.Hosting.ServiceProviderExtensions.<>c__DisplayClass2_0.<<CreateTemporalActivityDefinition>g__Invoker|0>d.MoveNext()\r\n--- End of stack trace from previous location ---\r\n   at Temporalio.Activities.ActivityDefinition.InvokeAsync(Object[] parameters)\r\n   at Temporalio.Extensions.OpenTelemetry.TracingInterceptor.ActivityInbound.ExecuteActivityAsync(ExecuteActivityInput input)\r\n   at Temporalio.Worker.ActivityWorker.ExecuteActivityInternalAsync(RunningActivity act, ActivityTask tsk)",
  "applicationFailureInfo": {
    "type": "InvalidOperationException"
  }
}
```


### Minimal Reproduction

```csharp
[Activity]public async Task<T> GetResource<T>()
    where T: class, new()
{
   return new T();
}
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows 11, x64
- Temporal Version: sdk 1.3.1
- Are you using Docker or Kubernetes or building Temporal from source? No

### Additional context

Thread with @cretz: https://temporalio.slack.com/archives/C012SHMPDDZ/p1726611745352909
 


---

<a id="346"></a>

### #346: UpdateWithStart SDK API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/346 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-09-12 21:47:46.000 UTC (1y 3m ago) |
| **Updated** | 2024-12-17 14:16:26.000 UTC |
| **Closed** | 2024-12-17 14:16:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Expose update-with-start operations via the SDK


---

<a id="342"></a>

### #342: [Bug] Payload data not properly cleared before replaced

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/342 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-09-04 12:53:04.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-05 14:39:15.000 UTC |
| **Closed** | 2024-09-05 14:39:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

At https://github.com/temporalio/sdk-dotnet/blob/681cd016455352e9f2ab507db97092d561a32357/src/Temporalio/Worker/WorkflowCodecHelper.cs#L326 and https://github.com/temporalio/sdk-dotnet/blob/681cd016455352e9f2ab507db97092d561a32357/src/Temporalio/Worker/WorkflowCodecHelper.cs#L225 we only clear the metadata and are counting on the `Merge` logic to replace `Data`. But if incoming `Data` is null/empty, merge logic does not replace it. We need to be clearing the data too (for proto this will be `Data = payload.Data = ByteString.Empty).


---

<a id="333"></a>

### #333: [Bug] Cloud tests not actually running on cloud

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/333 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-20 12:22:04.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-30 15:16:26.000 UTC |
| **Closed** | 2024-08-30 15:16:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

The CLI cloud tests are using env vars `TEMPORAL_CLIENT_TARGET_HOST`, `TEMPORAL_CLIENT_NAMESPACE`, `TEMPORAL_CLIENT_CERT`, and `TEMPORAL_CLIENT_KEY`. But the code is expecting env vars `TEMPORAL_TEST_CLIENT_TARGET_HOST`, `TEMPORAL_TEST_CLIENT_NAMESPACE`, `TEMPORAL_TEST_CLIENT_CERT`, and `TEMPORAL_TEST_CLIENT_KEY`. Bring them into alignment.


---

<a id="332"></a>

### #332: [Feature Request] `ReplayWorkflowsAsync` should take `limit` parameter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/332 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-08-15 22:07:33.000 UTC (1y 4m ago) |
| **Updated** | 2024-12-06 17:13:23.000 UTC |
| **Closed** | 2024-12-06 17:13:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Refer to https://github.com/temporalio/sdk-python/issues/610 - same justification.

In this case only the version using `IAsyncEnumerable` really needs it, but, we should probably add it to both versions for consistency.


---

<a id="331"></a>

### #331: [Bug] Copy paste error in Update docstring / API reference documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/331 |
| **State** | CLOSED |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-14 21:54:37.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-30 15:16:25.000 UTC |
| **Closed** | 2024-08-30 15:16:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://dotnet.temporal.io/api/Temporalio.Client.WorkflowUpdateOptions.html#Temporalio_Client_WorkflowUpdateOptions_Rpc

> Gets or sets RPC options for starting the workflow.

This should be more like "for sending the update".


---

<a id="327"></a>

### #327: [Feature Request] Clarify in README that CancellationTokenSource.CancelAsync is unsafe

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/327 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-08 12:16:14.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-13 19:21:15.000 UTC |
| **Closed** | 2024-08-13 19:21:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

`CancellationTokenSource.CancelAsync` was added in .NET 8 and it uses the default scheduler. Users should use `Cancel` instead.


---

<a id="325"></a>

### #325: [Feature Request] Do not warn on unfinished handler on workflow failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/325 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-07 12:44:01.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-09 17:33:40.000 UTC |
| **Closed** | 2024-08-09 17:33:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In #294 we warn on any unfinished handler. But we need to not warn on failed workflow (not to be confused with cancelled or continued-as-new which we _do_ want to continue to warn on).


---

<a id="321"></a>

### #321: [Feature Request] Document default RPC options when left null/unset

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/321 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-05 13:17:03.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-13 19:21:15.000 UTC |
| **Closed** | 2024-08-13 19:21:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

There is a max RPC timeout that is on each call (different value for long poll calls). Try to document it generally in the RPC options even though it is a bit different per call, or at least say there is an internally set default timeout.


---

<a id="314"></a>

### #314: [Feature Request] Support schedule search attribute update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/314 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-24 19:25:23.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-05 18:40:43.000 UTC |
| **Closed** | 2024-08-05 18:40:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/512 and the Go implementation at https://github.com/temporalio/sdk-go/issues/1561



---

<a id="312"></a>

### #312: [Feature Request] Update core and confirm new post-complete command reordering

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/312 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-24 18:35:54.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-25 19:32:22.000 UTC |
| **Closed** | 2024-07-25 19:32:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Core now has command reordering to move first workflow completion last. We had a poor attempt at this before in two ways: first was only truncate after _last_ completion command (as opposed to new Core which is after _first_ completion command), and second didn't account for multiple completion commands. Still discussing how we want to retain compatibility.


---

<a id="303"></a>

### #303: [Feature Request] Create wrappers for commonly-known-safe async calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/303 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-10 19:03:08.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-06 22:15:24.000 UTC |
| **Closed** | 2024-08-06 22:15:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We already have `Workflow.WhenAnyAsync` because a certain standard library overload was unsafe, same for `Workflow.DelayAsync`. We might as well add `Workflow.WhenAllAsync`, `Workflow.StartNewTask`, and any other common/popular standard library task functions, even though they are safe and will just be one-liners to the underlying implementations. This lets users have confidence in calls on the `Workflow` class.


---

<a id="300"></a>

### #300: [Feature Request] Support "query" when listing schedules

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/300 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-08 14:24:52.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-19 15:35:30.000 UTC |
| **Closed** | 2024-07-19 15:35:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to support the query option when listing schedules same as we do when listing workflows.



---

<a id="299"></a>

### #299: [Feature Request] Upon initial client connection, use `RpcException` if initial `GetSystemInfo` call fails

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/299 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-03 14:00:31.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-03 14:00:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

If the TCP connection succeeds but the gRPC call fails (e.g. permission denied), throw the `RpcException` with gRPC details instead of a common exception for all connection failures.


---

<a id="297"></a>

### #297: [Feature Request] Add Temporalio.Workflows.Mutex as thin facade over single-count Temporalio.Workflows.Semaphore

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/297 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-01 16:29:57.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-02 13:07:31.000 UTC |
| **Closed** | 2024-07-02 13:07:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Add Temporalio.Workflows.Mutex as thin facade over single-count Temporalio.Workflows.Semaphore. Maybe add methods/overloads to match the existing threading mutex method names (`WaitOne` and `ReleaseMutex`).


---

<a id="292"></a>

### #292: [Feature Request] Replace BuildJet ARM runner with GH runner

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/292 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-27 16:38:09.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-18 14:06:51.000 UTC |
| **Closed** | 2024-07-18 14:06:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Now that GH has ARM runners, might as well


---

<a id="291"></a>

### #291: [Feature Request] Update test running to replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/291 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-27 13:11:14.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-27 13:11:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We need to replay our test workflows more. Today we don't replay nor do we run without cache, both of which could catch issues. At the least we need to try to auto-replay workflows that complete in tests.



---

<a id="278"></a>

### #278: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/278 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:54:56.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-19 15:18:33.000 UTC |
| **Closed** | 2024-06-19 15:18:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="277"></a>

### #277: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/277 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:54:07.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-19 15:18:27.000 UTC |
| **Closed** | 2024-06-19 15:18:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="276"></a>

### #276: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/276 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:53:00.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-19 15:16:48.000 UTC |
| **Closed** | 2024-06-19 15:16:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="265"></a>

### #265: Expose UpdateID in an update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/265 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 16:17:08.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-06 21:37:08.000 UTC |
| **Closed** | 2024-06-06 21:37:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

This will allow users to use it when they want a unique idempotent primary key for handlers


---

<a id="253"></a>

### #253: [Feature Request] Call Core worker.validate

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/253 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-28 12:11:28.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-06 17:21:37.000 UTC |
| **Closed** | 2024-06-06 17:21:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

`validate` added in https://github.com/temporalio/sdk-core/pull/750, make sure to call it on worker start/run and if it errors, error to the user


---

<a id="249"></a>

### #249: [Feature Request] Do not set workflow completion until after all coroutines have settled in the task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/249 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-17 19:31:49.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-11 13:15:11.000 UTC |
| **Closed** | 2024-06-11 13:15:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/481



---

<a id="246"></a>

### #246: [Feature Request] Expose raw proto objects on WorkflowExecution and WorkflowExecutionDescription

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/246 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-10 12:26:53.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-10 12:26:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Right now `RawInfo` and `RawDescription` are `internal` and should be exposed to see things like pending activities


---

<a id="244"></a>

### #244: [Feature Request] Cloud Operations API Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/244 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-09 15:26:45.000 UTC (1y 8m ago) |
| **Updated** | 2024-07-08 19:23:27.000 UTC |
| **Closed** | 2024-07-08 19:23:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/440 and https://github.com/temporalio/sdk-go/pull/1426. We need a separate cloud client using the cloud protos (they are separate today). The client should be marked experimental. This is dependent upon https://github.com/temporalio/sdk-core/issues/737.



---

<a id="243"></a>

### #243: [Feature Request] Enforce no-commands-allowed restrictions in read-only contexts

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/243 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-08 17:55:43.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-08 17:55:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Wait condition callbacks, update validators, and queries should fail if they try to add commands


---

<a id="238"></a>

### #238: [Bug] System.InvalidOperationException: This service descriptor is keyed. Your service provider may not support keyed services

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/238 |
| **State** | CLOSED |
| **Author** | ElanHasson (Elan Hasson) |
| **Created** | 2024-05-08 03:10:09.000 UTC (1y 8m ago) |
| **Updated** | 2024-07-12 23:45:14.000 UTC |
| **Closed** | 2024-05-08 22:14:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

See https://github.com/dotnet/runtime/issues/95789. 

As of the `v1.1.0` release,  the `System.InvalidOperationException: This service descriptor is keyed. Your service provider may not support keyed services` is thrown when calling `AddHostedTemporalWorker` after registering a keyed service descriptor to container.

I believe this to be the offending code, introduced in #216.

https://github.com/temporalio/sdk-dotnet/blob/ee378c17595bccf8a390ff82e4e1f514d4a6344f/src/Temporalio.Extensions.Hosting/TemporalWorkerServiceOptionsBuilderExtensions.cs#L184-L186


### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows/Linux
- Temporal Version: n/a -- can't even startup
- Are you using Docker or Kubernetes or building Temporal from source? n/a



---

<a id="235"></a>

### #235: [Feature Request] Client replacement in worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/235 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-03 20:14:49.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-06 14:05:04.000 UTC |
| **Closed** | 2024-05-06 14:05:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to be able to replace the worker client with a new client that may be connected with different options (e.g. a new TLS cert). See https://github.com/temporalio/features/issues/11.


---

<a id="231"></a>

### #231: [Feature Request] Make StartUpdateAsync users aware that it's synchronous w/ worker. 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/231 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-04-25 01:48:35.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-21 19:24:44.000 UTC |
| **Closed** | 2024-05-21 19:24:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
See https://github.com/temporalio/features/issues/469

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like

https://github.com/temporalio/sdk-dotnet/blob/2bd9ed3894adb290f78f4a4409797dc5d4ec82a0/src/Temporalio/Client/WorkflowHandle.cs#L313
wait stage shouldn't be optional here, and docs should clarify availability.

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="228"></a>

### #228: [Feature Request] Make sure all client responses are user-instantiable/mockable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/228 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-22 14:26:16.000 UTC (1y 8m ago) |
| **Updated** | 2025-04-09 20:41:06.000 UTC |
| **Closed** | 2025-04-09 20:41:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
Today some things, such as workflow list result, are only instantiable via `internal` constructor which makes it difficult for users to test. Try to make everything that could come back from a client able to be instantiated by a user. What many clients do (e.g. just checked Azure clients) is make their classes simple classes with parameterless constructors and have all properties also have setters. This may be preferred over our current stance of getter-only properties that cannot be customized in test situations.




---

<a id="225"></a>

### #225: [Feature Request] Make protected DefaultPayloadConverter constructors public

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/225 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-20 19:29:02.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-22 18:42:57.000 UTC |
| **Closed** | 2024-04-22 18:42:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

These constructors were only meant for inheritors when we required converter classes instead of instances in beta forms of the SDK, but now since we let people instantiate the converter, we might as well expose these.


---

<a id="220"></a>

### #220: [Feature Request] Document host builder caveats

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/220 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-15 18:22:15.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-24 21:24:44.000 UTC |
| **Closed** | 2024-04-24 21:24:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Look at this snippet:

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Temporalio.Client;
using Temporalio.Extensions.Hosting;
using Temporalio.Worker;
using Temporalio.Workflows;

async Task RunAsync()
{
    // Start workflow
    var client = await TemporalClient.ConnectAsync(new("localhost:7233"));
    await client.StartWorkflowAsync(
        (MyWorkflow wf) => wf.RunAsync(),
        new(id: $"wf-{Guid.NewGuid()}", "my-task-queue"));

    // Run worker (change to false and this will start working)
    const bool useHostBuilder = true;
    try
    {
        if (useHostBuilder)
        {
            var builder = Host.CreateApplicationBuilder();
            builder.Services.AddHostedTemporalWorker("localhost:7233", "default", "my-task-queue").AddWorkflow<MyWorkflow>();
            var host = builder.Build();
            // Change next line to "await host.RunAsync();" and it will start working
            host.Run();
        }
        else
        {
            var worker = new TemporalWorker(
                client, new TemporalWorkerOptions("my-task-queue").AddWorkflow<MyWorkflow>());
            await worker.ExecuteAsync(default);
        }
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Workers cancelled");
    }
}

await RunAsync();

[Workflow]
public class MyWorkflow
{
    [WorkflowRun]
    public Task<string> RunAsync() => Task.FromResult("done");
}
```

It doesn't poll, but if you change `host.Run()` to `host.RunAsync()` it works. Very strange. So document that in the `Temporalio.Extensions.Hosting` README. Also document the caveat about issue 36063 in https://github.com/dotnet/runtime (not linking by intention) which trips people up and is a known issue.


---

<a id="219"></a>

### #219: Expose defaultConnection() method to switch between localhost and cloud based on env

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/219 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-04-12 23:54:41.000 UTC (1y 9m ago) |
| **Updated** | 2025-10-06 21:10:35.000 UTC |
| **Closed** | 2025-10-06 21:03:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Expose a defaultConnection() method or similar that switches between localhost (default) and cloud based on some environment variable, so that we can use it in the samples repos to allow people to easily run samples in the cloud. See: https://github.com/temporalio/features/issues/454




---

<a id="217"></a>

### #217: Support for WorkflowIdConflictPolicy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/217 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-04-11 00:40:14.000 UTC (1y 9m ago) |
| **Updated** | 2024-07-12 18:16:38.000 UTC |
| **Closed** | 2024-07-12 18:16:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/437


---

<a id="215"></a>

### #215: [Feature Request] HTTP CONNECT proxy support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/215 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-05 21:47:56.000 UTC (1y 9m ago) |
| **Updated** | 2024-08-06 15:27:39.000 UTC |
| **Closed** | 2024-08-06 15:27:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

* Support HTTP connect proxy options added in https://github.com/temporalio/sdk-core/pull/714. See how Python did it at
https://github.com/temporalio/sdk-python/pull/501
* Add test in features repo



---

<a id="210"></a>

### #210: [Feature Request] Use macOS M1/ARM runners for all SDK CI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/210 |
| **State** | CLOSED |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-03-26 17:53:37.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-26 15:15:47.000 UTC |
| **Closed** | 2024-04-26 15:15:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See: https://github.com/temporalio/features/issues/396


---

<a id="209"></a>

### #209: [Feature Request] Support metric option for using seconds (and other recent core metric changes)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/209 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-26 15:18:25.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-19 12:51:06.000 UTC |
| **Closed** | 2024-04-19 12:51:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to at least expose `use_seconds_for_duration` option on Prometheus metrics from https://github.com/temporalio/sdk-core/pull/706, may also have to update other things due to changes made by that PR.


---

<a id="199"></a>

### #199: [Feature Request] SDK should not return an update handle if the update has not reached the desired state

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/199 |
| **State** | CLOSED |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-03-06 18:22:11.000 UTC (1y 10m ago) |
| **Updated** | 2024-05-21 19:24:43.000 UTC |
| **Closed** | 2024-05-21 19:24:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/432


---

<a id="196"></a>

### #196: [Feature Request] Expose max poller options for workers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/196 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-06 13:16:52.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-07 23:12:09.000 UTC |
| **Closed** | 2024-03-07 23:12:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We expose this in Python and TypeScript, we should expose in .NET. Also sticky to nonsticky ratio.


---

<a id="194"></a>

### #194: coverlet.collector.3.1.2.nupkg: 1 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/194 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2024-02-28 18:45:28.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-05 12:49:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>coverlet.collector.3.1.2.nupkg</b></p></summary>

<p>Coverlet is a cross platform code coverage library for .NET, with support for line, branch and metho...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg">https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/coverlet.collector/3.1.2/coverlet.collector.3.1.2.nupkg</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (coverlet.collector.3.1.2.nupkg version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2024-21907](https://www.mend.io/vulnerability-database/CVE-2024-21907) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | coverlet.collector.3.1.2.nupkg | Direct | Newtonsoft.Json - 13.0.1 | &#9989; |
<p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2024-21907</summary>


###  Vulnerable Library - <b>coverlet.collector.3.1.2.nupkg</b></p>

<p>Coverlet is a cross platform code coverage library for .NET, with support for line, branch and metho...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg">https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/coverlet.collector/3.1.2/coverlet.collector.3.1.2.nupkg</p>
<p>

Dependency Hierarchy:
  - :x: **coverlet.collector.3.1.2.nupkg** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Newtonsoft.Json before version 13.0.1 is affected by a mishandling of exceptional conditions vulnerability. Crafted data that is passed to the JsonConvert.DeserializeObject method may trigger a StackOverflow exception resulting in denial of service. Depending on the usage of the library, an unauthenticated and remote attacker may be able to cause the denial of service condition.


<p>Publish Date: 2024-01-03
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2024-21907>CVE-2024-21907</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-5crp-9r3c-p9vr">https://github.com/advisories/GHSA-5crp-9r3c-p9vr</a></p>
<p>Release Date: 2024-01-03</p>
<p>Fix Resolution: Newtonsoft.Json - 13.0.1</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details>

***

<p>:rescue_worker_helmet:Automatic Remediation will be attempted for this issue.</p>


---

<a id="191"></a>

### #191: [Feature Request] API key client option

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/191 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-27 15:22:35.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-12 18:39:34.000 UTC |
| **Closed** | 2024-03-12 18:39:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/426


---

<a id="190"></a>

### #190: [Feature Request] Clarify in README how SignalWithStart appears is .NET

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/190 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-26 13:45:07.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-28 17:17:50.000 UTC |
| **Closed** | 2024-02-28 17:17:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Currently SignalWithStart is not present/searchable in API docs or README docs. Clarify that is what the start signal is on options.


---

<a id="186"></a>

### #186: Expose next retry delay on Application Failure in all SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/186 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2024-02-02 22:35:17.000 UTC (1y 11m ago) |
| **Updated** | 2024-05-28 14:57:37.000 UTC |
| **Closed** | 2024-05-28 14:57:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We recently added the ability for an activity to specify the next retry delay on failure via a [field on `ApplicationFailureInfo`](https://github.com/temporalio/api/blob/822966d29758cba3462d6f5ff198257fbaa426f6/temporal/api/failure/v1/message.proto#L49).

Expose this in the SDK.


---

<a id="183"></a>

### #183: [Feature Request] Eager Workflow Start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/183 |
| **State** | CLOSED |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2024-01-29 19:09:29.000 UTC (1y 11m ago) |
| **Updated** | 2024-03-01 14:55:25.000 UTC |
| **Closed** | 2024-03-01 14:55:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
Support for Eager Workflow Start (EWS) was added in the server in 1.20, and is currently supported in Java, Python, Core, and Go SDKs. It
reduces the latency to start a workflow by allowing the client to directly schedule the first workflow task to a local worker. See https://github.com/temporalio/features/issues/242 for details.

The goal is to enable support for EWS in  the .NET SDK using the Core implementation.

### Describe the solution you'd like
This mechanism is mostly transparent to the .NET SDK client, but we need to add an optional flag when we start the workflow.




---

<a id="176"></a>

### #176: [Feature Request] Handle possibility of update-before-start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/176 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-12 18:39:01.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-12 18:39:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See similar Python issue at https://github.com/temporalio/sdk-python/issues/462.

Basically activation job events are ordered to have update first then start if they come in the same task. But what if someone dynamically registers a handler? It won't work on start. We likely need some buffer-for-life-of-task approach to updates so dynamic handlers work on start.


---

<a id="173"></a>

### #173: [Bug] Not ignoring unknown fields when parsing history for replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/173 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-09 22:28:40.000 UTC (2 years ago) |
| **Updated** | 2024-01-10 16:22:20.000 UTC |
| **Closed** | 2024-01-10 16:22:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Python and Go and others ignore unknown fields when parsing JSON for history proto, but .NET doesn't. Even though docs don't show it, there is an ignore-unknown-fields setting on JsonParser settings.


---

<a id="167"></a>

### #167: [Feature Request] Add error message to native-library README section for easier discoverability

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/167 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-12-11 13:59:18.000 UTC (2y 1m ago) |
| **Updated** | 2024-02-12 21:13:55.000 UTC |
| **Closed** | 2024-02-12 21:13:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

It is hard for people to know https://github.com/temporalio/sdk-dotnet/#built-in-native-shared-library is what they need to read for the following error:

> System.DllNotFoundException: Unable to load DLL 'temporal_sdk_bridge' or one of its dependencies: The specified module could not be found.

Please include that error in that section for easier finding


---

<a id="157"></a>

### #157: [Feature Request] Default TemporalWorkerOptions.DebugMode to Debugger.IsAttached

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/157 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-15 22:21:37.000 UTC (2y 1m ago) |
| **Updated** | 2024-03-08 13:00:32.000 UTC |
| **Closed** | 2024-03-08 13:00:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Default `TemporalWorkerOptions.DebugMode` to `Debugger.IsAttached`. Still must be explicitly overridable to true/false of course. This boolean seems to serve this purpose well.


---

<a id="148"></a>

### #148: Remove ClientOutboundInterceptor.PollWorkflowUpdateAsync

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/148 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-27 19:46:54.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-30 15:39:22.000 UTC |
| **Closed** | 2023-10-30 15:39:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

This does not need to be interceptable any more than getting a workflow result does


---

<a id="147"></a>

### #147: Remove timeout from WorkflowUpdateHandle.GetResultAsync

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/147 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-27 19:45:05.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-30 15:39:21.000 UTC |
| **Closed** | 2023-10-30 15:39:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users can do this with the cancellation token if they want, no reason to have this if we're not also gonna have it on WorkflowHandle.GetResultAsync



---

<a id="143"></a>

### #143: [Bug] DeleteWorkflowExecution service call not exposed properly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/143 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-19 14:22:00.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-20 21:46:13.000 UTC |
| **Closed** | 2023-10-20 21:46:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

On the Rust side, we don't expose the `DeleteWorkflowExecution` call. Not only do we need to, but we need a unit test to make sure no calls are ever missed going forward. This should basically be us standing up a fake gRPC server, calling every call on workflow and operator service reflectively, and confirming every call reaches the server.


---

<a id="135"></a>

### #135: [Feature Request] Confirm absense of metric config still results in no-op metric meter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/135 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-09-08 12:35:18.000 UTC (2y 4m ago) |
| **Updated** | 2024-03-07 21:37:15.000 UTC |
| **Closed** | 2024-03-07 21:37:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When developing this feature in Python, it appeared that the metric meter was not created when metrics config is not present. So we need to use a no-op one


---

<a id="134"></a>

### #134: [Feature Request] Investigate signal with start helper on options that is type safe

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/134 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-09-05 21:12:53.000 UTC (2y 4m ago) |
| **Updated** | 2024-02-28 17:17:50.000 UTC |
| **Closed** | 2024-02-28 17:17:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need a helper on options that will accept lambda expression approach for signal with start instead of the untyped approach in use today.


---

<a id="133"></a>

### #133: [Feature Request] Need LastFailure and LastResult on WorkflowInfo

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/133 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-09-05 19:27:19.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-22 12:54:03.000 UTC |
| **Closed** | 2023-09-22 12:54:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

These are present on other SDKs. `LastResult` is mostly only for cron/schedule, but `LastFailure` can also have value for workflow retry.



---

<a id="122"></a>

### #122: [Feature Request] Expose history-related properties to workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/122 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-31 12:17:08.000 UTC (2y 5m ago) |
| **Updated** | 2023-08-07 17:20:06.000 UTC |
| **Closed** | 2023-08-07 17:20:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need `HistoryLength`, `HistorySize`, and `ShouldContinueAsNew` properties on `Workflow`.


---

<a id="117"></a>

### #117: [Bug] Activity definition cache reuses instance

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/117 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-25 11:15:18.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-25 19:08:38.000 UTC |
| **Closed** | 2023-07-25 19:08:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

When an activity is added for the same method on different instances, we reuse the cache for the first instance which also has the invoker cached which is bound to that one instance. We need to only cache the non-invocable details, not the invoker as well.


---

<a id="116"></a>

### #116: [Bug] DI worker service not using obtained logger factory

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/116 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-25 11:08:56.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-25 19:38:00.000 UTC |
| **Closed** | 2023-07-25 19:38:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

We are checking whether existing client's logger factory is null which is impossible. Either make that possible or remove the check.


---

<a id="110"></a>

### #110: [Feature Request] Update README client DI to use extension project

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/110 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-18 11:59:30.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-25 18:40:06.000 UTC |
| **Closed** | 2023-07-25 18:40:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Update README client DI to use extension project, but wait until #98 is released


---

<a id="109"></a>

### #109: Use single-L for all cancelled (sic) type names like .NET does

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/109 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-17 17:12:11.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-18 22:22:58.000 UTC |
| **Closed** | 2023-07-18 22:22:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 😄 1 |

#### Description

### Describe the solution you'd like

For example, .NET has `OperationCanceledException` so ours should be `CanceledFailureException`. But need to leave double-L for cancellation (e.g. `CancellationToken`).


---

<a id="107"></a>

### #107: [Feature Request] Clarify in README the role of the native shared library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/107 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-14 21:45:05.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-18 22:22:59.000 UTC |
| **Closed** | 2023-07-18 22:22:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Unlike all-managed libraries that many are used to, this SDK requires a shared library. This is `temporal_sdk_bridge.dll` on Windows, `libtemporal_sdk_bridge.so` on Linux, `libtemporal_sdk_bridge.dylib` on macOS, etc and different ones are for different arch's. By default `dotnet build` will copy the artifact to the proper place based on the machine it is building on. But many people may be cross-compiling, so they need to set something like `--runtime linux-x64` when invoking `dotnet build`.

We need to make clear this is backed by an unmanaged native shared library, which [RIDs](https://learn.microsoft.com/en-us/dotnet/core/rid-catalog) we support, and that they need to be explicitly provided when building for a different platform than where the build runs. Can also just provide some general information about how it works and why we do it (the idea of a high-quality .NET library backed by a Rust core is interesting regardless).


---

<a id="106"></a>

### #106: [Feature Request] Clarify inheritance rules/reasons for workflow attributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/106 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-14 17:13:09.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-18 22:22:59.000 UTC |
| **Closed** | 2023-07-18 22:22:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

It's not as clear as it could be in README that 1) we intentionally do not inherit an parent's `[Workflow]` attribute or `[WorkflowRun]` method, 2) why we don't, 3) that we do allow inheriting workflow signals/queries from base classes, but if overridden must have attributes, and 4) why for that too (i.e. their value for shared code reasons).

Maybe a "Workflow Inheritance" section in README is warranted.


---

<a id="105"></a>

### #105: [Bug] Signals that can't be deserialized should be dropped/ignored

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/105 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-13 22:39:36.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-20 11:55:26.000 UTC |
| **Closed** | 2023-07-20 11:55:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In Go and Java we drop signals whose args can't be deserialized, we should here too.


---

<a id="104"></a>

### #104: Change ID to Id

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/104 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-13 22:29:07.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-18 16:50:13.000 UTC |
| **Closed** | 2023-07-18 16:50:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We erroneously uppercased `ID` instead of proper capitalization of `Id`. Fix this before beta.


---

<a id="101"></a>

### #101: [Feature Request] Confirm .NET Framework properly copies binaries as expected

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/101 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-07 13:05:31.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-17 22:54:21.000 UTC |
| **Closed** | 2023-07-17 22:54:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We only test with .NET 6+ even though we build for .NET Framework too. We need to make sure the NuGet package created works with .NET Framework and properly copies the native DLL. This is probably best as an additional `test/Temporalio.SmokeTestNetFramework` project that is checked as part of the `.github/workflows/package.yml` workflow like the regular smoke test project does today.


---

<a id="99"></a>

### #99: Worker versioning support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/99 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:53:19.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-17 22:13:36.000 UTC |
| **Closed** | 2023-07-17 22:13:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="77"></a>

### #77: [Bug] Time skipping test server not auto skipping time properly in some cases

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/77 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-25 19:14:07.000 UTC (2y 7m ago) |
| **Updated** | 2023-08-22 20:50:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug
Came from #63. Using time-skipping test server, starting a workflow with a long timer (i.e. no activity) and then running `env.DelayAsync` is sleeping real time, not skipping time as expected.




---

<a id="71"></a>

### #71: [Bug] https://dotnet.temporal.io/api not loading TOC

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/71 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-17 22:20:13.000 UTC (2y 7m ago) |
| **Updated** | 2023-05-23 17:26:09.000 UTC |
| **Closed** | 2023-05-23 17:26:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

https://dotnet.temporal.io/api does not load TOC like https://dotnet.temporal.io/api/ does. We need to probably have a vercel config and set https://vercel.com/docs/concepts/projects/project-configuration#trailingslash to `true`


---

<a id="70"></a>

### #70: [Feature Request] Add RPC metadata updater to client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/70 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-17 12:05:45.000 UTC (2y 7m ago) |
| **Updated** | 2023-05-23 18:16:12.000 UTC |
| **Closed** | 2023-05-23 18:16:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like other SDKs, need to be able to update headers on existing client/connection that is then done in Rust to affect worker use.


---

<a id="55"></a>

### #55: [Feature Request] Cloud test that runs in CI using org secrets

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/55 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-25 15:19:47.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-23 17:26:09.000 UTC |
| **Closed** | 2023-05-23 17:26:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Use org secrets and a simple smoke test against cloud in CI


---

<a id="54"></a>

### #54: [Feature Request] Simple benchmarker that runs nightly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/54 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-25 15:19:17.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-17 22:17:33.000 UTC |
| **Closed** | 2023-05-17 22:17:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need something like what is in Python that does simple benchmarks to see performance in certain situations



---

<a id="52"></a>

### #52: [Feature Request] Replace Go kitchen sink workflow in tests with .NET one

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/52 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-04-24 17:24:42.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-25 13:43:17.000 UTC |
| **Closed** | 2023-05-25 13:43:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

No need for Go code anymore now that .NET is full featured


---

<a id="41"></a>

### #41: [Bug] DataConverter should not eagerly instantiate payload/failure converter from type

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/41 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-03-31 12:48:00.000 UTC (2y 9m ago) |
| **Updated** | 2023-04-19 19:31:41.000 UTC |
| **Closed** | 2023-04-19 19:31:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Using `DataConverter.Default with { PayloadConverterType = typeof(MyPayloadConverter) }` means internally .NET does a clone (shallow using internal copy constructor) _then_ sets the property at which point it's too late to set the `PayloadConverter`. Can probably just make the payload/failure converter properties `Lazy` (`PublicationOnly` because it is expected that multiple instantiations of payload/failure converter can occur).


---

<a id="36"></a>

### #36: [Bug] NuGet package is built with too-new of a glibc version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/36 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-03-10 13:28:19.000 UTC (2y 10m ago) |
| **Updated** | 2023-04-19 19:31:40.000 UTC |
| **Closed** | 2023-04-19 19:31:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

We use glibc 2.32 in the GH `ubuntu-latest` which is too new for older distros (like `mcr.microsoft.com/dotnet/aspnet:7.0` which defaults to Debian 11 which is 2.31). Downgrade glibc as old as possible. Ideally manually, but can use just older ubuntu version during build if that helps.


---

<a id="27"></a>

### #27: [Feature Request] Support dynamic workflows, activities, signals, and queries

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/27 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-02-27 19:12:10.000 UTC (2y 10m ago) |
| **Updated** | 2023-06-16 14:41:09.000 UTC |
| **Closed** | 2023-06-16 14:41:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to support all of these things dynamically as part of general Temporal feature https://github.com/temporalio/features/issues/201.


---

<a id="23"></a>

### #23: [Feature Request] Schedules API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/23 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-02-13 20:01:20.000 UTC (2y 11m ago) |
| **Updated** | 2023-04-25 22:17:37.000 UTC |
| **Closed** | 2023-04-25 22:17:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Implement schedules API as has been implemented in other SDKs


---

<a id="19"></a>

### #19: martincostello.logging.xunit.0.3.0.nupkg: 2 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/19 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-02-09 19:35:23.000 UTC (2y 11m ago) |
| **Updated** | 2025-07-16 23:40:37.000 UTC |
| **Closed** | 2025-07-16 23:40:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>martincostello.logging.xunit.0.3.0.nupkg</b></p></summary>

<p></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (martincostello.logging.xunit.0.3.0.nupkg version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2019-0820](https://www.mend.io/vulnerability-database/CVE-2019-0820) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | system.text.regularexpressions.4.3.0.nupkg | Transitive | N/A* | &#10060; |
| [CVE-2018-8292](https://www.mend.io/vulnerability-database/CVE-2018-8292) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> Medium | 5.3 | system.net.http.4.3.0.nupkg | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2019-0820</summary>


###  Vulnerable Library - <b>system.text.regularexpressions.4.3.0.nupkg</b></p>

<p>Provides the System.Text.RegularExpressions.Regex class, an implementation of a regular expression e...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/system.text.regularexpressions.4.3.0.nupkg">https://api.nuget.org/packages/system.text.regularexpressions.4.3.0.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.text.regularexpressions/4.3.0/system.text.regularexpressions.4.3.0.nupkg</p>
<p>

Dependency Hierarchy:
  - martincostello.logging.xunit.0.3.0.nupkg (Root Library)
    - xunit.extensibility.execution.2.4.2.nupkg
      - xunit.extensibility.core.2.4.2.nupkg
        - netstandard.library.1.6.1.nupkg
          - system.xml.xdocument.4.3.0.nupkg
            - system.xml.readerwriter.4.3.0.nupkg
              - :x: **system.text.regularexpressions.4.3.0.nupkg** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A denial of service vulnerability exists when .NET Framework and .NET Core improperly process RegEx strings, aka '.NET Framework and .NET Core Denial of Service Vulnerability'. This CVE ID is unique from CVE-2019-0980, CVE-2019-0981.
 Mend Note: After conducting further research, Mend has determined that CVE-2019-0820 only affects environments with versions 4.3.0 and 4.3.1 only on netcore50 environment of system.text.regularexpressions.nupkg.

<p>Publish Date: 2019-05-16
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0820>CVE-2019-0820</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-cmhx-cq75-c4mj">https://github.com/advisories/GHSA-cmhx-cq75-c4mj</a></p>
<p>Release Date: 2019-05-16</p>
<p>Fix Resolution: System.Text.RegularExpressions - 4.3.1</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png?' width=19 height=20> CVE-2018-8292</summary>


###  Vulnerable Library - <b>system.net.http.4.3.0.nupkg</b></p>

<p>Provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

</p>
<p>Library home page: <a href="https://api.nuget.org/packages/system.net.http.4.3.0.nupkg">https://api.nuget.org/packages/system.net.http.4.3.0.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/system.net.http/4.3.0/system.net.http.4.3.0.nupkg</p>
<p>

Dependency Hierarchy:
  - martincostello.logging.xunit.0.3.0.nupkg (Root Library)
    - xunit.extensibility.execution.2.4.2.nupkg
      - xunit.extensibility.core.2.4.2.nupkg
        - netstandard.library.1.6.1.nupkg
          - :x: **system.net.http.4.3.0.nupkg** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
An information disclosure vulnerability exists in .NET Core when authentication information is inadvertently exposed in a redirect, aka ".NET Core Information Disclosure Vulnerability." This affects .NET Core 2.1, .NET Core 1.0, .NET Core 1.1, PowerShell Core 6.0.

<p>Publish Date: 2018-10-10
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-8292>CVE-2018-8292</a></p>
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
  - Confidentiality Impact: Low
  - Integrity Impact: None
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Release Date: 2018-10-10</p>
<p>Fix Resolution: System.Net.Http - 4.3.4;Microsoft.PowerShell.Commands.Utility - 6.1.0-rc.1</p>

</p>

<p></p>

</details>


---

<a id="10"></a>

### #10: [Feature Request] Incorporate StyleCop analyzers in CI/format

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/10 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-01-11 14:00:47.000 UTC (2y 12m ago) |
| **Updated** | 2023-01-16 12:12:38.000 UTC |
| **Closed** | 2023-01-16 12:12:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Want to at least make sure class member order is consistent (see https://github.com/DotNetAnalyzers/StyleCopAnalyzers/blob/master/documentation/SA1201.md)


