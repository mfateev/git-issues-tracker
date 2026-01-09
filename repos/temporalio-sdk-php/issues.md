# temporalio/sdk-php - Complete Issue Dump

**Generated:** 2026-01-09
**Total Issues:** 260
**Total Upvotes:** 40
**Total Comments:** 562

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 260 |
| Issues with Upvotes | 29 (11%) |
| Total Upvotes | 40 |
| Total Comments | 562 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 89 |
| Bug | 88 |
| Question | 23 |
| Feature | 21 |
| Tests | 10 |
| Documentation | 4 |
| Mend: configuration error | 1 |
| Duplicate | 1 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#177](#177) | 0 | 68 | [Bug] Got the response to undefined request due to the memory leak in the WF worker |
| [#289](#289) | 0 | 46 | [Bug] Memory leak: Got the response to undefined request 9009 - autoclosed |
| [#276](#276) | 0 | 28 | [Feature Request] Worker unable to start with a custom Data Converter |
| [#314](#314) | 0 | 23 | [Bug] Activity not scheduled in signal handler |
| [#592](#592) | 5 | 6 | [Docs] Document SDK marshaller |
| [#170](#170) | 2 | 9 | [Bug] Issues with sticky execution/queries/signals |
| [#98](#98) | 0 | 12 | [Bug] PHP 7.4 docblock anotations don't work (or documentation missing?) |
| [#114](#114) | 3 | 5 | Use DateInterval instead of Carbon |
| [#103](#103) | 0 | 11 | [Question] Sentry Integration for error logging |
| [#213](#213) | 1 | 7 | [Feature Request] Add API reference |
| [#174](#174) | 0 | 9 | Process execution does not continue after await condition is satissfied (through signals) |
| [#357](#357) | 0 | 8 | react/promise v3 doesn't work fine |
| [#224](#224) | 0 | 8 | Lazy connectivity for Temporal client and healthCheck |
| [#110](#110) | 0 | 8 | [Question] Injecting custom reader into worker factory. |
| [#3](#3) | 0 | 8 | Is this SDK available in standalone without RoadRunner ? |
| [#625](#625) | 1 | 5 | [Bug] Incorrect timer cancellation when workflow worker is down |
| [#577](#577) | 0 | 7 | [Bug] Can't run the tests of UpdateMethod |
| [#261](#261) | 2 | 3 | [Bug] Child async cancellation cancels the parent scope |
| [#39](#39) | 0 | 7 | about connection refuse in tcp://127.0.0.1:6001 |
| [#495](#495) | 0 | 6 | [Discussion] Define a backwards compatibility promise |
| [#328](#328) | 1 | 4 | [Bug] DataConverter type named "null" is not a valid type name |
| [#264](#264) | 0 | 6 | Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor |
| [#184](#184) | 0 | 6 | [Bug] Abandoned child workflow don't release flow |
| [#175](#175) | 0 | 6 | composer require fail because of an old version of `psr/log` |
| [#128](#128) | 0 | 6 | [Bug] No way to setNamespace for a worker to make worker listen for queue in namespace |
| [#111](#111) | 0 | 6 | [Question] Workflow DI |
| [#102](#102) | 0 | 6 | [Feature Request] Implement GetSearchAttributesRequest |
| [#573](#573) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method |
| [#571](#571) | 0 | 5 | [Bug] Very rare nondeterministic error |
| [#529](#529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| [#338](#338) | 2 | 1 | Add an ability to set timeout for all client calls |
| [#304](#304) | 0 | 5 | [Bug] Seeing a spike in CPU utilization in presence of the following error |
| [#291](#291) | 0 | 5 | Add API to count workflows |
| [#225](#225) | 2 | 1 | [FEATURE REQUEST]: Add support for interceptors |
| [#160](#160) | 0 | 5 | [Bug] Workflow is always Running |
| [#140](#140) | 0 | 5 | [Bug?] Workflow not completing unless all async coroutines finish or are cancelled manually |
| [#641](#641) | 0 | 4 | [🐛 BUG]: undefined method ScopeContext::all() |
| [#623](#623) | 0 | 4 | [Feature Request] In test env - I can't unserialize object structure |
| [#619](#619) | 0 | 4 | [Bug] Don`t serialize return artivity method boolean and void types. |
| [#557](#557) | 0 | 4 | [Feature Request] Add memo update feature |
| [#480](#480) | 0 | 4 | Workflow-init support |
| [#441](#441) | 0 | 4 | [Bug] Can't run the tests according to documentation |
| [#402](#402) | 1 | 2 | [Bug] ArrayRepository always overwrites entries when adding |
| [#302](#302) | 1 | 2 | [Feature Request] Set the expectCompletion result for each Activity call inside the loop |
| [#123](#123) | 0 | 4 | [Bug] withEnableSessionWorker causes to ActivityNotRegisteredError |
| [#117](#117) | 0 | 4 | [Bug] Wrong activity response type |
| [#108](#108) | 0 | 4 | [Bug] Workflow type is messed when using `continueAsNew` |
| [#640](#640) | 1 | 1 | Enable `Discussions` |
| [#635](#635) | 0 | 3 | [Bug] Memory leak workflow worker |
| [#633](#633) | 0 | 3 | [Bug] Unexpected failures and hanging workflows under high concurrency in parent-child workflows with signals |
| [#610](#610) | 1 | 1 | [Bug] Workflows with promoted properties fails on 2.14.0 sdk version |
| [#608](#608) | 1 | 1 | [Bug] PHP API DOC link isn't working |
| [#598](#598) | 1 | 1 | [Bug] Request to Remove @internal Annotation from WorkflowExecutionDescription or Provide Alternative Access |
| [#580](#580) | 1 | 1 | Initial Nexus implementation - PHP |
| [#579](#579) | 1 | 1 | [DX] Unexpected behaviour with lax DateInterval string parsing |
| [#448](#448) | 0 | 3 | Expose UpdateID in an update handler |
| [#435](#435) | 1 | 1 | [Bug] Abstract Workflow not started |
| [#431](#431) | 1 | 1 | [Bug] Incorrect deadline verification in case of exception |
| [#428](#428) | 0 | 3 | [Bug] Unit test hangs with unit under test has runtime or compile time exception |
| [#401](#401) | 0 | 3 | [Feature Request] Update Carbon to 3.* |
| [#399](#399) | 0 | 3 | [Not a Bug] await doesn't interrupts on the activity with error |
| [#394](#394) | 0 | 3 | Make "ext-grpc" a composer requirement |
| [#383](#383) | 0 | 3 | [Bug] Schedule API: Schedule creating without start and end time not working |
| [#361](#361) | 0 | 3 | [Bug] worker returns "Workflow with the specified run identifier.." |
| [#286](#286) | 0 | 3 | [Feature Request] Do not require server CA cert in client createSSL |
| [#272](#272) | 0 | 3 | [Bug] PHP 8 named arguments don't work |
| [#253](#253) | 0 | 3 | [CHORE] Remove deprecated structure fields |
| [#166](#166) | 0 | 3 | [Bug] Workflow timer debouncing does not work |
| [#165](#165) | 0 | 3 | [Bug] Parent workflow waits for child completion |
| [#158](#158) | 0 | 3 | PHP docs reference wrong function or wrong class |
| [#113](#113) | 0 | 3 | [Bug] Parent workflow not completed or failed, when start child workflow execution failed |
| [#105](#105) | 1 | 1 | [Bug] Activity RetryOptions Maximum Interval sets the initial interval |
| [#95](#95) | 1 | 1 | [Bug] Non-retryable exceptions list in RetryOptions does not work as expected |
| [#93](#93) | 0 | 3 | [Bug] Activity return an associative array, but in workflow, the return value is parsed as an object |
| [#76](#76) | 0 | 3 | upsert Search Attribute |
| [#15](#15) | 0 | 3 | DTO Java/Go comparison |
| [#4](#4) | 0 | 3 | Is the WorkflowClient going to available in the php sdk soon?  |
| [#642](#642) | 0 | 2 | [Feature Request] Add first execution run ID to workflow info |
| [#613](#613) | 0 | 2 | [Bug] Using `getVersion` break determinism |
| [#568](#568) | 0 | 2 | [Question] How to debug the activity task startToClose timeout error? |
| [#554](#554) | 1 | 0 | Ensure better SDK support in IDE |
| [#544](#544) | 1 | 0 | [Bug] WorkflowClient throws type error when update method of untyped workflow stub is called |
| [#532](#532) | 0 | 2 | [Question] Asynchronous child workflow execution problem |
| [#531](#531) | 0 | 2 | [Bug] cannot unmarshal array into Go struct field WorkerInfo.Flags of type map[string]string |
| [#530](#530) | 0 | 2 | [Bug] Generators return null when exception is thrown |
| [#522](#522) | 0 | 2 | [Bug] [ErrorException] exclude_calendar is deprecated. |
| [#501](#501) | 0 | 2 | Repair or disable Windows tests in CI |
| [#479](#479) | 0 | 2 | Support WorkflowIdConflictPolicy for Signal-With-Start API |
| [#446](#446) | 0 | 2 | Warn or error when update handlers dangle across CAN or workflow exit |
| [#419](#419) | 0 | 2 | [Feature Request] Divide Workflow stub objects and Workflow proxy objects |
| [#410](#410) | 0 | 2 | [Feature Request] API key client option |
| [#396](#396) | 1 | 0 | [Bug] LocalActivity behaves like a normal activity |
| [#393](#393) | 0 | 2 | Changing data type during deserialization |
| [#387](#387) | 1 | 0 | [Bug] CronSchedule cannot be used because WorkflowStartDelay is always sent to server |
| [#380](#380) | 1 | 0 | [Bug] Schedule API: Given value is not an instance of Google\Protobuf\Timestamp |
| [#348](#348) | 1 | 0 | [Maintenance] Update reactphp/promise to v3 |
| [#311](#311) | 0 | 2 | [Feature Request] Allow to register checksum with the worker |
| [#246](#246) | 0 | 2 | Serialization don't support nullable array type |
| [#228](#228) | 0 | 2 | High level API for schedules |
| [#226](#226) | 0 | 2 | OTEL tracing support |
| [#220](#220) | 0 | 2 | Send sdk-name and sdk-version headers from worker |
| [#178](#178) | 0 | 2 | [Question] Kubernetes pod scaling |
| [#141](#141) | 0 | 2 | [Bug] Cannot decode value using Protobuf converter when fetching previous workflow result |
| [#122](#122) | 0 | 2 | [Bug] After countinueAsNew awaitWithTimeout doesn't check for condition |
| [#121](#121) | 0 | 2 | [Question] activity_schedule_to_start_latency metrics |
| [#116](#116) | 0 | 2 | [Bug] Wrong exception trace |
| [#112](#112) | 0 | 2 | [Question] Arrays not allowed as a return type? |
| [#109](#109) | 0 | 2 | [Question] When waiting for signal, is there a way to specify a timeout settings ? |
| [#104](#104) | 0 | 2 | [Bug] Namespace not being propagated into ChildWorflowOptions, but probably should be (according to comments) |
| [#94](#94) | 0 | 2 | Integration issue with Laravel |
| [#5](#5) | 0 | 2 | example project not invoking activity |
| [#689](#689) | 0 | 1 | [Bug] Temporal PHP SDK doing its own extension check, breaking composer's `--ignore-platform-reqs` |
| [#659](#659) | 0 | 1 | Bug Report: Class "Grpc\ChannelCredentials" not found in Laravel/Artisan Context |
| [#654](#654) | 0 | 1 | [Bug] upsertTypedSearchAttributes in test server |
| [#603](#603) | 0 | 1 | [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task |
| [#597](#597) | 0 | 1 | [Bug] Workflow::asyncDetached memory leak |
| [#596](#596) | 0 | 1 | [Bug] MarshallingRule marked as internal |
| [#586](#586) | 0 | 1 | [Feature Request] Support New Worker Versioning API |
| [#576](#576) | 0 | 1 | [Feature Request] Expose root workflow execution |
| [#575](#575) | 0 | 1 | [Feature Request] Built-in query responses should use "RawValue" |
| [#552](#552) | 0 | 1 | [Feature Request] Special behavior for Temporal built-in prefixes |
| [#512](#512) | 0 | 1 | Show update handler and ID in logging context |
| [#462](#462) | 0 | 1 | Workflow-friendly concurrency control |
| [#447](#447) | 0 | 1 | Provide a method to wait for handlers to finish |
| [#436](#436) | 0 | 1 | Wrap GRPC::CANCELED and DEADLINE_EXCEEDED in an SDK Timeout exception for Update |
| [#426](#426) | 0 | 1 | [Feature Request] Make startUpdate users aware that it's synchronous w/ worker |
| [#420](#420) | 0 | 1 | Expose defaultConnection() method to switch between localhost and cloud based on env |
| [#413](#413) | 0 | 1 | [Feature Request] Expose API to describe a Workflow |
| [#382](#382) | 0 | 1 | [Bug] Methods without ActivityMethod attribute are registered as Activities (even magic) |
| [#352](#352) | 0 | 1 | [Bug] Issue with Doctrine Annotation Reader and Need to Disable SelectiveReader` |
| [#350](#350) | 0 | 1 | Add UUID sugar like Workflow::uuid() |
| [#347](#347) | 0 | 1 | [Feature Request] Define Workflow return type via attribute |
| [#344](#344) | 0 | 1 | [Feature Request] `EnableEagerStart` option in the  PHP `StartWorkflowOptions` structure |
| [#330](#330) | 0 | 1 | [Feature Request] Separate client to another package |
| [#323](#323) | 0 | 1 | PHP Workflow update support |
| [#296](#296) | 0 | 1 | Include protocol errors into retryable statements |
| [#294](#294) | 0 | 1 | [SWOOLE] Integration With Other Async PHP Libraries |
| [#260](#260) | 0 | 1 | [Bug] Async batch gets cancelled upon Exception thrown. |
| [#244](#244) | 0 | 1 | [Feature Request] FailureConverter allow more context in ordinary exceptions |
| [#236](#236) | 0 | 1 | [Feature Request] How can i test child workflow? |
| [#229](#229) | 0 | 1 | Expose raw grpc operator service in SDK client |
| [#227](#227) | 0 | 1 | Expose Replayer API |
| [#223](#223) | 0 | 1 | [Feature Request] Use getSystemInfo request to determine server capabilities |
| [#222](#222) | 0 | 1 | [Feature Request] Expose history length via Workflow info |
| [#221](#221) | 0 | 1 | Ensure SDK does not retry "internal" errors |
| [#211](#211) | 0 | 1 | [Feature Request] Ability to use readonly properties in workflow and activity inputs. |
| [#207](#207) | 0 | 1 | [Bug] Order of declaration async tasks completely change the execution flow of Workflow |
| [#157](#157) | 0 | 1 | Use test server in testing framework |
| [#137](#137) | 0 | 1 | [Feature Request] Add metadata.messageType to protobuf payloads |
| [#131](#131) | 0 | 1 | [Bug] Activity code is not invoked inside await |
| [#89](#89) | 0 | 1 | Hide unused files |
| [#88](#88) | 0 | 1 | Improve service container |
| [#692](#692) | 0 | 0 | [Bug] Minimal Composer requirements conflicts with react/promise v2 |
| [#670](#670) | 0 | 0 | [Feature Request] Symfony 8.0 support |
| [#668](#668) | 0 | 0 | [Feature Request] Implement `SetCurrentDetails` for dynamic workflow details |
| [#660](#660) | 0 | 0 | [php] Plugin + SimplePlugin |
| [#648](#648) | 0 | 0 | [Feature Request] Reclassify Benign Application errors in OpenTelemetry |
| [#644](#644) | 0 | 0 | [Feature Request] Plugin support |
| [#638](#638) | 0 | 0 | [Feature Request] Add Summary to LocalActivityOptions |
| [#636](#636) | 0 | 0 | [Bug] Suppressed exception in worfklow child |
| [#634](#634) | 0 | 0 | [Bug] Abandoned Child Workflows Cancellation policy |
| [#632](#632) | 0 | 0 | [Feature Request] Apply application failure logging and metrics behaviour according to ApplicationErrorCategory |
| [#628](#628) | 0 | 0 | [Feature Request] Environment Configuration |
| [#624](#624) | 0 | 0 | [Bug] Facade methods throw wrong exception |
| [#621](#621) | 0 | 0 | [Bug] return type mismatch in Workflow::getInfo() |
| [#618](#618) | 0 | 0 | Resolve protobuf deprecations |
| [#605](#605) | 0 | 0 | [php] SDK support for activity reset  |
| [#602](#602) | 0 | 0 | [Feature Request] Show retry policy on activity info |
| [#601](#601) | 0 | 0 | [Feature Request] Expose `WorkflowInboundCallInterceptor::init()` |
| [#595](#595) | 0 | 0 | [Bug] Incorrect generic extends of RuleFactoryInterface |
| [#588](#588) | 0 | 0 | Heartbeating activities should be interrupted when the activities are paused. |
| [#587](#587) | 0 | 0 | [Feature Request] Serialization context for codecs and converters |
| [#584](#584) | 0 | 0 | [Feature Request] Make Destroyable interface public |
| [#582](#582) | 0 | 0 | Set Temporal-Namespace header on every gRPC request |
| [#574](#574) | 0 | 0 | [Feature Request] Support "RawValue" non-converted values |
| [#567](#567) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#566](#566) | 0 | 0 | [Feature Request] Stop registering magic methods as Activity methods |
| [#559](#559) | 0 | 0 | [Feature Request] Support Priority Annotations |
| [#558](#558) | 0 | 0 | Add `Patched()` and `DeprecatePatch()` APIs |
| [#555](#555) | 0 | 0 | [Bug] Unrecognized date time interval format on unmarshalling |
| [#550](#550) | 0 | 0 | Check Harness and Acceptance test |
| [#548](#548) | 0 | 0 | [Bug] Namespace from ClientOptions in ScheduleClient constructor not respected in createSchedule |
| [#546](#546) | 0 | 0 | [Feature Request] Access to workflow/activity instance from context |
| [#545](#545) | 0 | 0 | [Feature Request] Provide "workflow local" |
| [#533](#533) | 0 | 0 | [Feature Request] Workflow logger |
| [#524](#524) | 0 | 0 | [Feature Request] Allow mocking child workflows like activites |
| [#517](#517) | 0 | 0 | [Feature Request] Support user metadata |
| [#516](#516) | 0 | 0 | [Feature Request] Typed Search Attributes |
| [#514](#514) | 0 | 0 | [Bug]  proto_codec_parse_message Empty searchAttributes child workflow |
| [#509](#509) | 0 | 0 | [Documentation] Message handler patterns |
| [#508](#508) | 0 | 0 | [Feature Request] Add  fallback Update/Signal/Query listeners |
| [#507](#507) | 0 | 0 | Eliminate DestructMemorizedInstanceException |
| [#503](#503) | 0 | 0 | UpdateWithStart SDK API |
| [#502](#502) | 0 | 0 | Fix test case |
| [#498](#498) | 0 | 0 | [Bug] Got error `DataConverter is not set` when receiving an empty value |
| [#497](#497) | 0 | 0 | [Feature Request] Dynamic Update handler |
| [#485](#485) | 0 | 0 | Document next retry delay |
| [#481](#481) | 0 | 0 | The SDK does not use TaskQueue when searching for the Workflow to be started. |
| [#478](#478) | 0 | 0 | [Feature Request] Support schedule search attribute update |
| [#476](#476) | 0 | 0 | [Feature Request] Cloud Operations API Client |
| [#472](#472) | 0 | 0 | [Feature Request] Support "query" when listing schedules |
| [#466](#466) | 0 | 0 | Provide WorkflowId with StartWorkflowAction in Schedule API |
| [#465](#465) | 0 | 0 | [Feature Request] Accept search attributes in dev server startup |
| [#464](#464) | 0 | 0 | [Bug] ChildWorkflowStub should only send singnals using WorkflowID, not RunID |
| [#463](#463) | 0 | 0 | Updates: retryable exceptions |
| [#461](#461) | 0 | 0 | Testing |
| [#460](#460) | 0 | 0 | Testing |
| [#459](#459) | 0 | 0 | Testing |
| [#458](#458) | 0 | 0 | [Feature Request] Expose `WorkflowStub::getUpdateHandle()` method |
| [#457](#457) | 0 | 0 | Signal from signal-with-start must be processed before Workflow Handler initialization |
| [#456](#456) | 0 | 0 | [Feature Request] Add new options into WorkerOptions |
| [#455](#455) | 0 | 0 | Add Binary Protobuf Converter into default set |
| [#454](#454) | 0 | 0 | Encode Failures using EncodedAttributes |
| [#453](#453) | 0 | 0 | ContinueAsNew options dto doesn't inherit Workflow's Task Queue |
| [#451](#451) | 0 | 0 | Child Workflow doesn't inherit parent's Task Queue |
| [#450](#450) | 0 | 0 | Testing |
| [#449](#449) | 0 | 0 | Testing |
| [#440](#440) | 0 | 0 | Expose shouldContinueAsNew in WorkflowInfo |
| [#437](#437) | 0 | 0 | Convert Policy constants into enum cases |
| [#433](#433) | 0 | 0 | [Bug] Missing key mapping in ArrayType marsheller |
| [#421](#421) | 0 | 0 | [Feature Request] Add RpcRetryOption and use longer retry interval on RESOURCE_EXHAUSTED |
| [#416](#416) | 0 | 0 | Support for WorkflowIdConflictPolicy |
| [#400](#400) | 0 | 0 | [Feature Request] Expose OperatorServiceClient  |
| [#395](#395) | 0 | 0 | Expose next retry delay on Application Failure in all SDKs |
| [#385](#385) | 0 | 0 | [Bug] Failed hydrate null value |
| [#369](#369) | 0 | 0 | Add PHP 8.3 in the CI |
| [#368](#368) | 0 | 0 | Update google/common-protos to v4 |
| [#360](#360) | 0 | 0 | [Feature Request][PHP] Start delay |
| [#353](#353) | 0 | 0 | [Interceptors] Remove DataConverter from header value object |
| [#346](#346) | 0 | 0 | SideEffects: cast returned value based on callable return type |
| [#345](#345) | 0 | 0 | Add ability to pass UUID objects in arguments directly (not nested) |
| [#325](#325) | 0 | 0 | [Feature Request] Add friendly version of listWorkflowExecutions |
| [#322](#322) | 0 | 0 | Worker versioning support |
| [#318](#318) | 0 | 0 | Improve PHP files generated from proto |
| [#317](#317) | 0 | 0 | Support UUID in marshaller |
| [#308](#308) | 0 | 0 | [Bug] PHP 8.2: ${var} string interpolation deprecated |
| [#288](#288) | 0 | 0 | [Bug] Fix compatibility with PHP 8.2 |
| [#285](#285) | 0 | 0 | Use temporal.download server to download `temporalite` or `temporal-test-sever` |
| [#281](#281) | 0 | 0 | Add `EnumType` by default for PHP 8.1+ |
| [#274](#274) | 0 | 0 | [Feature Request] Unmarshalling of nested DTOs |
| [#269](#269) | 0 | 0 | [Feature Request] Use `mapWorkflowFailureToException` for all workflow methods ? |
| [#242](#242) | 0 | 0 | [Feature Request] Extend `ServiceClient::createSSL()` to accept client certs and override server name |
| [#239](#239) | 0 | 0 | [Bug] Parent workflow waits for child with abandon policy |
| [#203](#203) | 0 | 0 | [Bug] Workflow shouldn't wait for activities unless it is explicitly said with yield |
| [#199](#199) | 0 | 0 | [Bug] param type hints in signal method |
| [#196](#196) | 0 | 0 | [Feature Request] Add time management for test server |
| [#195](#195) | 0 | 0 | [Feature Request] Package is locked to Symfony 5 |
| [#192](#192) | 0 | 0 | [Bug] Timeout continues with cancelled tasks |
| [#190](#190) | 0 | 0 | [Bug] Async cancellation doesn't cancel internal timers |
| [#188](#188) | 0 | 0 | [Feature Request] Add ability to check by id whether the workflow is running or not |
| [#185](#185) | 0 | 0 | [Feature Request] Send client info to Temporal via GRPC calls |
| [#180](#180) | 0 | 0 | [Bug] Small bugs in EncodedValues |
| [#171](#171) | 0 | 0 | [Bug] Workflow getVersion method return wrong type |
| [#153](#153) | 0 | 0 | [Feature Request] Implement finalizer to clear resource after activity invocation |
| [#152](#152) | 0 | 0 | [Feature Request] Implement routes for handling local activity  |
| [#143](#143) | 0 | 0 | [Bug] Wrong PHP doc |
| [#136](#136) | 0 | 0 | [Bug] Workflow with awaitWithTimeout keeps running after signal |
| [#132](#132) | 0 | 0 | [Bug] Workflow keeps stuck with awaitWithTimeout and signal |
| [#124](#124) | 0 | 0 | Add "listQueries" built-in query |
| [#13](#13) | 0 | 0 | Cancellation Scopes |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="177"></a>

### #177: [Bug] Got the response to undefined request due to the memory leak in the WF worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/177 |
| **State** | CLOSED |
| **Author** | corelix (Dmytro Pylypenko) |
| **Created** | 2022-05-26 18:04:31.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 15:45:31.000 UTC |
| **Closed** | 2022-12-19 15:07:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 68 |
| **Priority Score** | 68 |
| **Labels** | Bug |
| **Assignees** | roxblnfk, rustatian |
| **Milestone** | None |

#### Description

### Describe the bug

Sometimes when a child worker process throws an exception, the parent worker process throws the following panic error:
```
PanicError: flush queue: SoftJobError:
	codec_execute:
	sync_worker_exec:
	sync_worker_exec_payload: LogicException: Got the response to undefined request 10389 in /srv/vendor/temporal/sdk/src/Internal/Transport/Client.php:60
```
and after it:
```
PanicError: unknown command CommandType: ChildWorkflow, ID: edfb1479-3d88-407e-a428-7e304e0d7bdf, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition 
```
<img width="1560" alt="Screenshot 2022-05-26 at 20 57 30" src="https://user-images.githubusercontent.com/59166948/170547569-46ac4993-c9de-4ce4-911a-2c41346982f3.png">


### Environment/Versions

- Temporal Version: 1.16.2 and 1.2.0 SDK
- We use Kubernetes

### Additional context

We tried to scale the pods so that can be split in different zones for fault tolerance. Maybe that causing these problems.


#### Comments (68)

<details>
<summary><strong>rustatian</strong> commented on 2022-05-26 18:34:08.000 UTC</summary>

Hey @dmitry-pilipenko 👋🏻. I guess the problem is in the workers' restarts. `SoftJobError` indicates some error that leads to process (PHP) restart. I expect that fix will be released the following week.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-05-26 18:45:52.000 UTC</summary>

@rustatian Can I do something about it now? This happens in a production now :(

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-05-26 18:56:55.000 UTC</summary>

@dmitry-pilipenko, I'm not sure what is the initial reason for this error. Could you please turn on `debug` in the logs and send me this file? Especially before and after this error.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-05-26 19:17:10.000 UTC</summary>

@rustatian I hope this helps you:
[wf-default-6f974d785d-7rspn.log](https://github.com/temporalio/sdk-php/files/8781518/wf-default-6f974d785d-7rspn.log)
[temporalio-history-85d87b8945-vks9v.log](https://github.com/temporalio/sdk-php/files/8781520/temporalio-history-85d87b8945-vks9v.log)



</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-05-26 19:34:08.000 UTC</summary>

@dmitry-pilipenko Thank you. Could you please update RR version? You use an unsupported version (`v2.7.4`). You may try `v2.10.2`.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-05-30 10:04:36.000 UTC</summary>

> @dmitry-pilipenko Thank you. Could you please update RR version? You use an unsupported version (`v2.7.4`). You may try `v2.10.2`.

@rustatian RR updates helped me. Your quick response helped me a lot. Thank you for this!

Reactions: 👍 3

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-06-15 17:00:39.000 UTC</summary>

@rustatian this problem is still observed, but now it is in cases unknown to me.

Versions:
RR - 2.10.2
Temporal Version: 1.16.2 and 1.3.2 SDK

Probably due to the fact that we use a wait with a timeout and then throw a custom exception.
Example:
```php
        yield Temporal::awaitWithTimeout(
            $interval = CarbonInterval::minutes(30),
            fn () => $this->answer !== null
        );
        if ($this->answer === null) {
            throw new ReplyTimeout($interval);
        }
```

Trace:
```
PanicError: sync_worker_exec: SoftJobError:
	sync_worker_exec_payload: LogicException: Got the response to undefined request 12445 in /srv/vendor/temporal/sdk/src/Internal/Transport/Client.php:60
Stack trace:
#0 /srv/vendor/temporal/sdk/src/WorkerFactory.php(389): Temporal\Internal\Transport\Client->dispatch()
#1 /srv/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\WorkerFactory->dispatch()
#2 /srv/src/Infrastructure/CLI/TemporalWorker.php(67): Temporal\WorkerFactory->run()
#3 /srv/vendor/symfony/console/Command/Command.php(308): App\Infrastructure\CLI\TemporalWorker->execute()
#4 /srv/vendor/symfony/console/Application.php(989): Symfony\Component\Console\Command\Command->run()
#5 /srv/vendor/symfony/console/Application.php(299): Symfony\Component\Console\Application->doRunCommand()
#6 /srv/vendor/symfony/console/Application.php(171): Symfony\Component\Console\Application->doRun()
#7 /srv/vendor/helpcrunch/foundation/src/Runtime/Handler.php(29): Symfony\Component\Console\Application->run()
#8 /srv/vendor/helpcrunch/foundation/src/Runtime/Runner.php(34): Helpcrunch\Foundation\Runtime\Handler->__invoke()
#9 /srv/vendor/autoload_runtime.php(29): Helpcrunch\Foundation\Runtime\Runner->run()
#10 /srv/bin/app(11): require('...')
#11 {main} 
process event for default [panic]:
github.com/temporalio/roadrunner-temporal/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0xc0007a7b30, 0xc00065ba08?)
	github.com/temporalio/roadrunner-temporal@v1.4.1/aggregatedpool/workflow.go:153 +0x2e8
go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000835c98, 0xc001a4db80, 0x0?, 0x1)
	go.temporal.io/sdk@v1.14.0/internal/internal_event_handlers.go:815 +0x203
go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc00079f960, 0xc001b1df50)
	go.temporal.io/sdk@v1.14.0/internal/internal_task_handlers.go:878 +0xca8
go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc0006c0210, 0xc001b1df50, 0xc000572300)
	go.temporal.io/sdk@v1.14.0/internal/internal_task_handlers.go:727 +0x485
go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0001131e0, 0xc001b1df50)
	go.temporal.io/sdk@v1.14.0/internal/internal_task_pollers.go:284 +0x2cd
go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0001131e0, {0x15e0ae0?, 0xc001b1df50?})
	go.temporal.io/sdk@v1.14.0/internal/internal_task_pollers.go:255 +0x6c
go.temporal.io/sdk/internal.(*baseWorker).processTask(0xc000170500, {0x15e06a0?, 0xc0007b8e40})
	go.temporal.io/sdk@v1.14.0/internal/internal_worker_base.go:398 +0x167
created by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher
	go.temporal.io/sdk@v1.14.0/internal/internal_worker_base.go:302 +0xb5
```

Log file:
[wf-default-5794999ddc-r4h94.log](https://github.com/temporalio/sdk-php/files/8911557/wf-default-5794999ddc-r4h94.log)


</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-15 17:12:54.000 UTC</summary>

Did you update RR to v2.10.4 ?

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-06-15 17:16:11.000 UTC</summary>

> 

yes, I have updated my last comment and added more details

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-15 17:45:27.000 UTC</summary>

> > 
> 
> yes, I have updated my last comment and added more details

You didn't update RR, because, according to the stack trace, you are using the temporal plugin version 1.4.1, but in the 2.10.4 it was updated to v1.4.7.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-06-15 17:53:51.000 UTC</summary>

@rustatian my current RR version is 2.10.2. If I update to 2.10.4 will my problem go away?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-15 18:23:25.000 UTC</summary>

> @rustatian my current RR version is 2.10.2. If I update to 2.10.4 will my problem go away?

Yes, we fixed this problem in the latest version.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-06-16 08:58:30.000 UTC</summary>

@rustatian update didn't help :(
<img width="561" alt="Screenshot 2022-06-16 at 11 58 05" src="https://user-images.githubusercontent.com/59166948/174033624-782b7db1-0679-4e89-b59b-19f4cc8c129e.png">

[wf-default-7f9b7d986b-5bqtw.log](https://github.com/temporalio/sdk-php/files/8917341/wf-default-7f9b7d986b-5bqtw.log)


</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-16 10:56:39.000 UTC</summary>

@dmitry-pilipenko Please, attach the entire sample (link to your repo is preferable) in the description to reproduce your issue.

like this one for example: https://github.com/Torrion/temporal-worker-pool-leak-test

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-06-16 12:32:42.000 UTC</summary>

@rustatian, I can provide a child workflow that has problems:
https://github.com/helpcrunch/temporal/blob/main/workflows.php

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-16 12:43:22.000 UTC</summary>

> @rustatian, I can provide a child workflow that has problems: https://github.com/helpcrunch/temporal/blob/main/workflows.php

Please, remove the not needed parts from your code and provide a minimal example to run it with rr, as I showed in the sample. The minimal example should reproduce the bug and contain all code to run it (your `.rr.yaml` should also be included).


</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-24 11:56:53.000 UTC</summary>

@dmitry-pilipenko Friendly ping 😃 

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-07-01 13:00:06.000 UTC</summary>

@rustatian I haven't been able to reproduce yet.
Our workflows generated dynamically from user settings and I'm trying to find what is causing this problem. It hasn't been done locally yet.
One of the main differences: locally I deployed using docker-compose, and in production using a k8s.

The problem appears only for flows where we waiting signal with a timeout. Do you have any hypotheses that might help?
```
        yield Temporal::awaitWithTimeout(
            $interval = CarbonInterval::minutes(30),
            fn () => $this->answer !== null
        );
        if ($this->answer === null) {
            throw new ReplyTimeout($interval);
        }
```

It's execute in a child workflow. After that parent workflow got error: 

```json
{
    "eventTime": "2022-07-01T10:17:00.000Z",
    "eventType": "WorkflowTaskStarted",
    "eventId": "26",
    "details": {
      "scheduledEventId": "25",
      "identity": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8",
      "requestId": "3bb264c4-76ac-4962-a6be-8d128650c38c",
      "eventId": "26",
      "eventType": "WorkflowTaskStarted",
      "kvps": [
        {
          "key": "eventTime",
          "value": "Jul 1st 1:17:00 pm"
        },
        {
          "key": "eventId",
          "value": "26"
        },
        {
          "key": "scheduledEventId",
          "value": "25"
        },
        {
          "key": "identity",
          "value": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8"
        },
        {
          "key": "requestId",
          "value": "3bb264c4-76ac-4962-a6be-8d128650c38c"
        }
      ],
      "eventTime": "Jul 1st 1:17:00 pm"
    },
    "eventTimeDisplay": "Jul 1st 1:17:00 pm",
    "timeElapsedDisplay": "15s",
    "eventSummary": {
      "requestId": "3bb264c4-76ac-4962-a6be-8d128650c38c",
      "eventId": "26",
      "eventType": "WorkflowTaskStarted",
      "kvps": [
        {
          "key": "requestId",
          "value": "3bb264c4-76ac-4962-a6be-8d128650c38c"
        }
      ]
    },
    "eventFullDetails": {
      "scheduledEventId": "25",
      "identity": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8",
      "requestId": "3bb264c4-76ac-4962-a6be-8d128650c38c",
      "eventId": "26",
      "eventType": "WorkflowTaskStarted",
      "kvps": [
        {
          "key": "scheduledEventId",
          "value": "25"
        },
        {
          "key": "identity",
          "value": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8"
        },
        {
          "key": "requestId",
          "value": "3bb264c4-76ac-4962-a6be-8d128650c38c"
        }
      ]
    }
  },
  {
    "eventTime": "2022-07-01T10:17:00.000Z",
    "eventType": "WorkflowTaskFailed",
    "eventId": "27",
    "details": {
      "scheduledEventId": "25",
      "startedEventId": "26",
      "cause": "WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR",
      "failure": {
        "message": "unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition",
        "source": "GoSDK",
        "stackTrace": "process event for default [panic]:\ngo.temporal.io/sdk/internal.panicIllegalState(...)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:409\ngo.temporal.io/sdk/internal.(*commandsHelper).getCommand(0x8?, {0x3?, {0xc000bc2d50?, 0x0?}})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:881 +0x109\ngo.temporal.io/sdk/internal.(*commandsHelper).handleStartChildWorkflowExecutionInitiated(0x7f7cc1a01f18?, {0xc000bc2d50?, 0xc000196000?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:1124 +0x29\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc001373770, 0xc00156aa00, 0xd8?, 0x0)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_event_handlers.go:905 +0x6ae\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0007f9080, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:902 +0xd68\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000a40c60, 0xc000559680, 0xc000702510)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:749 +0x485\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0005b3a00, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:284 +0x2cd\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0005b3a00, {0x16063c0?, 0xc000559680?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:255 +0x6c\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc00067e8c0, {0x1605f80?, 0xc00047f9c0})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:400 +0x167\ncreated by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:305 +0xb5",
        "cause": null,
        "applicationFailureInfo": {
          "type": "PanicError",
          "nonRetryable": true,
          "details": null
        },
        "failureInfo": "applicationFailureInfo"
      },
      "identity": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8",
      "baseRunId": "",
      "newRunId": "",
      "forkEventVersion": "0",
      "binaryChecksum": "23bc61c98cc56611c0691d0c4fd23834",
      "eventId": "27",
      "eventType": "WorkflowTaskFailed",
      "kvps": [
        {
          "key": "eventTime",
          "value": "Jul 1st 1:17:00 pm"
        },
        {
          "key": "eventId",
          "value": "27"
        },
        {
          "key": "scheduledEventId",
          "value": "25"
        },
        {
          "key": "startedEventId",
          "value": "26"
        },
        {
          "key": "cause",
          "value": "WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR"
        },
        {
          "key": "failure",
          "value": "PanicError: unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition \nprocess event for default [panic]:\ngo.temporal.io/sdk/internal.panicIllegalState(...)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:409\ngo.temporal.io/sdk/internal.(*commandsHelper).getCommand(0x8?, {0x3?, {0xc000bc2d50?, 0x0?}})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:881 +0x109\ngo.temporal.io/sdk/internal.(*commandsHelper).handleStartChildWorkflowExecutionInitiated(0x7f7cc1a01f18?, {0xc000bc2d50?, 0xc000196000?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:1124 +0x29\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc001373770, 0xc00156aa00, 0xd8?, 0x0)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_event_handlers.go:905 +0x6ae\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0007f9080, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:902 +0xd68\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000a40c60, 0xc000559680, 0xc000702510)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:749 +0x485\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0005b3a00, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:284 +0x2cd\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0005b3a00, {0x16063c0?, 0xc000559680?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:255 +0x6c\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc00067e8c0, {0x1605f80?, 0xc00047f9c0})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:400 +0x167\ncreated by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:305 +0xb5"
        },
        {
          "key": "identity",
          "value": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8"
        },
        {
          "key": "baseRunId",
          "value": ""
        },
        {
          "key": "newRunId",
          "value": ""
        },
        {
          "key": "forkEventVersion",
          "value": "0"
        },
        {
          "key": "binaryChecksum",
          "value": "23bc61c98cc56611c0691d0c4fd23834"
        }
      ],
      "eventTime": "Jul 1st 1:17:00 pm"
    },
    "eventTimeDisplay": "Jul 1st 1:17:00 pm",
    "timeElapsedDisplay": "15s",
    "eventSummary": {
      "message": "unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition",
      "eventId": "27",
      "eventType": "WorkflowTaskFailed",
      "kvps": [
        {
          "key": "message",
          "value": "unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition"
        }
      ]
    },
    "eventFullDetails": {
      "scheduledEventId": "25",
      "startedEventId": "26",
      "cause": "WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR",
      "failure": {
        "message": "unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition",
        "source": "GoSDK",
        "stackTrace": "process event for default [panic]:\ngo.temporal.io/sdk/internal.panicIllegalState(...)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:409\ngo.temporal.io/sdk/internal.(*commandsHelper).getCommand(0x8?, {0x3?, {0xc000bc2d50?, 0x0?}})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:881 +0x109\ngo.temporal.io/sdk/internal.(*commandsHelper).handleStartChildWorkflowExecutionInitiated(0x7f7cc1a01f18?, {0xc000bc2d50?, 0xc000196000?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:1124 +0x29\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc001373770, 0xc00156aa00, 0xd8?, 0x0)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_event_handlers.go:905 +0x6ae\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0007f9080, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:902 +0xd68\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000a40c60, 0xc000559680, 0xc000702510)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:749 +0x485\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0005b3a00, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:284 +0x2cd\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0005b3a00, {0x16063c0?, 0xc000559680?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:255 +0x6c\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc00067e8c0, {0x1605f80?, 0xc00047f9c0})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:400 +0x167\ncreated by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:305 +0xb5",
        "cause": null,
        "applicationFailureInfo": {
          "type": "PanicError",
          "nonRetryable": true,
          "details": null
        },
        "failureInfo": "applicationFailureInfo"
      },
      "identity": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8",
      "baseRunId": "",
      "newRunId": "",
      "forkEventVersion": "0",
      "binaryChecksum": "23bc61c98cc56611c0691d0c4fd23834",
      "eventId": "27",
      "eventType": "WorkflowTaskFailed",
      "kvps": [
        {
          "key": "scheduledEventId",
          "value": "25"
        },
        {
          "key": "startedEventId",
          "value": "26"
        },
        {
          "key": "cause",
          "value": "WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR"
        },
        {
          "key": "failure",
          "value": "PanicError: unknown command CommandType: ChildWorkflow, ID: 31ab4b00-a18a-44e8-851a-baf9de182600, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition \nprocess event for default [panic]:\ngo.temporal.io/sdk/internal.panicIllegalState(...)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:409\ngo.temporal.io/sdk/internal.(*commandsHelper).getCommand(0x8?, {0x3?, {0xc000bc2d50?, 0x0?}})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:881 +0x109\ngo.temporal.io/sdk/internal.(*commandsHelper).handleStartChildWorkflowExecutionInitiated(0x7f7cc1a01f18?, {0xc000bc2d50?, 0xc000196000?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_decision_state_machine.go:1124 +0x29\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc001373770, 0xc00156aa00, 0xd8?, 0x0)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_event_handlers.go:905 +0x6ae\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0007f9080, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:902 +0xd68\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000a40c60, 0xc000559680, 0xc000702510)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_handlers.go:749 +0x485\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0005b3a00, 0xc000559680)\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:284 +0x2cd\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0005b3a00, {0x16063c0?, 0xc000559680?})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_task_pollers.go:255 +0x6c\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc00067e8c0, {0x1605f80?, 0xc00047f9c0})\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:400 +0x167\ncreated by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher\n\tgo.temporal.io/sdk@v1.15.0/internal/internal_worker_base.go:305 +0xb5"
        },
        {
          "key": "identity",
          "value": "default:3bfa8009-a174-424b-a20c-2eb5f01c93e8"
        },
        {
          "key": "baseRunId",
          "value": ""
        },
        {
          "key": "newRunId",
          "value": ""
        },
        {
          "key": "forkEventVersion",
          "value": "0"
        },
        {
          "key": "binaryChecksum",
          "value": "23bc61c98cc56611c0691d0c4fd23834"
        }
      ]
    }
  }
```

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-07-01 13:04:43.000 UTC</summary>

@dmitry-pilipenko 👋🏻 
Might be you use a different RR version locally and in the k8s?
We had this issue in our past versions.

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-07-01 13:25:43.000 UTC</summary>

> @dmitry-pilipenko 👋🏻
> Might be you use a different RR version locally and in the k8s?
> We had this issue in our past versions.

@rustatian versions are completely identical.
k8s:
<img width="486" alt="Screenshot 2022-07-01 at 16 21 29" src="https://user-images.githubusercontent.com/59166948/176902932-f37f056f-6b02-4ef3-b42a-349b8f677081.png">
<img width="684" alt="Screenshot 2022-07-01 at 16 23 06" src="https://user-images.githubusercontent.com/59166948/176903186-7a92a5d8-7a22-4143-bd57-fdafd44865a6.png">

docker-compose:
<img width="790" alt="Screenshot 2022-07-01 at 16 25 04" src="https://user-images.githubusercontent.com/59166948/176903525-a842fdaf-8dfd-4aa4-a29a-cd8bcadf5bd9.png">
<img width="464" alt="Screenshot 2022-07-01 at 16 25 31" src="https://user-images.githubusercontent.com/59166948/176903597-d1bbd334-dc24-4465-adb8-079545efce59.png">



</details>

<details>
<summary><strong>corelix</strong> commented on 2022-07-01 13:36:20.000 UTC</summary>

@rustatian Now I found a case when there was no awaiting with a timeout in the flow, but it still cause the problem.
I exported the workflow logs from the admin:
[c0818c95 9669 4de5 ab5e 855e2de2f2d8 - e121f3e0-3df8-4e25-b0c0-d0e5de289955.json.zip](https://github.com/temporalio/sdk-php/files/9029226/c0818c95.9669.4de5.ab5e.855e2de2f2d8.-.e121f3e0-3df8-4e25-b0c0-d0e5de289955.json.zip)



</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-07-01 13:41:00.000 UTC</summary>

@dmitry-pilipenko Thanks for the logs, but to help you, we need to reproduce this issue. Please, as I suggested earlier, create a repository with a reproducible sample that includes `.rr.yaml` and sample minimum app. It can either be in Docker or run with `rr serve`.

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 10:25:51.000 UTC</summary>

IDK if this maybe of help, but I've experienced the same issue twice, both times our pods were lacking available memory. IDK how this happens and if it would be the same to you.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-10-20 10:27:21.000 UTC</summary>

> IDK if this maybe of help, but I've experienced the same issue twice, both times our pods were lacking available memory. IDK how this happens and if it would be the same to you.

Do you have a supervisor in the RR's configuration?

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 10:29:26.000 UTC</summary>

Nope, we probably should, but after increasing memory everything is stable, handling 4+Million workflows a day for half a year now. I'll enable it when I get the chance.

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 10:30:02.000 UTC</summary>

It's not that PHP or RR was leaking memory, we falsely set the memory too low constraining the pod.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-10-20 10:31:35.000 UTC</summary>

> Nope, we probably should, but after increasing memory everything is stable, handling 4+Million workflows a day for half a year now. I'll enable it when I get the chance.

wow, that's big numbers 😮

Might be OOM kill the workflow worker?

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 10:34:29.000 UTC</summary>

Yeah, it should kill the whole pod cause of OOM, but it gets into a weird state before that with `undefined request`. I haven't investigated it enough to reproduce it :( 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-10-20 10:36:52.000 UTC</summary>

Ok, thanks. Please keep us updated; if we can reproduce this weird issue, we will fix it ASAP.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 10:43:56.000 UTC</summary>

I'll try to reproduce it with OOM when I get some free time :D :pray: 

Reactions: 👍 1 ❤️ 1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-11-09 11:59:39.000 UTC</summary>

@rustatian Hi, I noticed same issue, `sync_worker_exec: SoftJobError:\\n\\tsync_worker_exec_payload: LogicException: Got the response to undefined request 9022`

I can say that, container was not restarted from 2 weeks. I have a memory limit per worker (temporal.activities.supervisor.max_worker_memory).

Looks like there is memory leak somewhere, because memory is not released after execution - keeps growing.
<img width="815" alt="image" src="https://user-images.githubusercontent.com/9404962/200824302-005347d5-d665-458c-aca3-61e1290a1e2e.png">

--
Update:
Looks like in_memory `request` property is not cleared properly:
<img width="1241" alt="image" src="https://user-images.githubusercontent.com/9404962/200839094-ad6886e5-e3d4-4f29-9228-111e6a2a4944.png">

Min reproduce:
1. .rr
```
version: "2.7"
# Application configuration
rpc:
    listen: tcp://127.0.0.1:6001

server:
    command: "php worker.php"

# Workflow and activity mesh service
temporal:
    address: "host.docker.internal:7233"
    activities:
      num_workers: 1
      supervisor:
        max_worker_memory: 64
      debug: true

logs:
  level: debug
  mode: development

kv:
    test:
        driver: memory
        config:
            interval: 10

```

2. Add group `xxx` annotation to random test, I added to SagaTestCase - testGetResult.
3. Add breakpoint on `src/Internal/Transport/Client.php` L135 - `unset($this->requests[$id]);` and wait 5 sec
4. Run `vendor/bin/phpunit --group xxx --repeat 10`


The problem could be that PHP in_memory property is not shared between workers, so multiple workers can receive same request and by that property in workers are not cleared properly.
Possible solution could be add expire time of request per worker.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-11-09 14:34:04.000 UTC</summary>

Hey @cv65kr 👋🏻 

Thanks for the detailed report 👍🏻. We have a few guesses on how to fix that. @roxblnfk is working on that now.

Reactions: 👀 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2022-11-28 21:45:34.000 UTC</summary>

@cv65kr hello. Could you provide some information about that image?

<img width="815" alt="image" src="https://user-images.githubusercontent.com/9404962/200824302-005347d5-d665-458c-aca3-61e1290a1e2e.png">

What does mean each curve?  
The gray curve is a workflow worker memory usage and the blue curve is an activity worker memory usage, right?

Or both are the same but in different scale? :) I need to know which worker is in the chart.


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-01 20:32:06.000 UTC</summary>

@roxblnfk Hi, sorry for late response, but I missed somehow notification. Both are ECS memory utilization for worker (by worker I mean container with Roadrunner which using only Temporal plugin). I don't have metrics directly from Roadrunner because it not supporting Datadog.

And yes it just a different scale. Sorry for being not descriptive, my fault 😞 



</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-01 21:22:43.000 UTC</summary>

Hey @cv65kr 👋🏻 
Could you please try to reduce the `cache_size` option in the RR's configuration: https://github.com/roadrunner-server/roadrunner/blob/master/.rr.yaml#L182?

Temporal saves the whole our `workflow definition` structure, which is pretty big. Could you please set it to, let's say, 10 and observe memory consumption?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-01 21:28:02.000 UTC</summary>

> I don't have metrics directly from Roadrunner because it not supporting Datadog

You may use the metrics plugin and get the information directly about the Go runtime. Unfortunately, I think we should not rely on `uber/tally` since they are veeeery slow in reviewing PRs that they are not interested in.


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-01 21:28:23.000 UTC</summary>

Hi @rustatian I will try on monday

Reactions: 🚀 1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-07 07:57:02.000 UTC</summary>

@rustatian Sorry for delay, I needed couple days to ensure that those changes not generate any issues.
I tested it with workflow like:
```php
#[WorkflowMethod]
public function start(): iterable
{
    while(true) {
        $result = yield $this->activity->execute();
            if ($result) {
                break;
             }
    yield Workflow::timer(CarbonInterval::minutes(2));
   }
}
``` 
It's kinda simulation of polling status.

So e.g. in last 11 hours it growing up 27.23% to 28.02% and still growing up. With two enabled workflows. (Numbers are small because traffic is small).

Will try to run it with higher traffic.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-07 17:00:37.000 UTC</summary>

@rustatian I did more tests and on screenshot I marked places when I triggered workflows (20 for one time). Still looks like memory is not released properly because I expected that memory will goes down instead of straight line (there wasn't any awaiting workflows/activities).

This time chart is based on metrics from RR.

![image](https://user-images.githubusercontent.com/9404962/206242875-18a80b1b-e6a3-4e08-ba3b-6428af3b508d.png)


Configuration:
```
metrics:
  address: 127.0.0.1:8234

temporal:
    address: ${TEMPORAL_CLI_ADDRESS}
    cache_size: 10
    activities:
        num_workers: 8
        debug: true
    metrics:
        driver: prometheus
        address: 127.0.0.1:8233

````

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-07 17:02:27.000 UTC</summary>

Thanks @cv65kr 👍🏻 

@roxblnfk Seems like we leak (I mean, PHP) 😢

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:08:11.000 UTC</summary>

@cv65kr Hey 👋🏻 

What is your temporal PHP SDK version? And PHP version?

I tried to reproduce the memory leak on the latest version, and it seems that the memory usage is pretty stable.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:18:42.000 UTC</summary>

I missed that, but do not use the `debug` option with the activities pool while testing. RR, in that case, allocates a worker on-demand before the request, which is unsuitable for memory testing.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-09 16:40:24.000 UTC</summary>

Hi @rustatian 

I am using the v2.3.1 of SDK and PHP 8.1.

I tried today without debug mode as well, and memory is still not released.
<img width="534" alt="image" src="https://user-images.githubusercontent.com/9404962/206749511-527b74b9-5c9c-413f-9997-4aff54eb4dfa.png">

You can tell me how you tested it? Let's compare our steps.

Reactions: 👍 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:44:03.000 UTC</summary>

But what is the scale of that chart? What is on Y-axis?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:45:25.000 UTC</summary>

I used that workflow: https://github.com/temporalio/sdk-php/issues/177#issuecomment-1340542716
Started one every second for more than 3h. The config is the same as yours, except for the `debug` mode.

For sure, the memory grows when everything is started until the GO's GC is called, for example. But it should be stable then. 

Here is, for example, GO's RSS memory:
![image](https://user-images.githubusercontent.com/8040338/206751010-302a5b89-7150-4db8-9842-5cf269229df0.png)

And this is the worker's memory and RR's memory (virtual):
![image](https://user-images.githubusercontent.com/8040338/206751134-aa22d4e2-7518-4935-89fb-5f24831a13f3.png)
 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-09 16:47:06.000 UTC</summary>

@rustatian sorry crazy day 
<img width="1714" alt="image" src="https://user-images.githubusercontent.com/9404962/206750881-5284f1b1-0e4b-4a47-82b8-181215d1fd06.png">

And I started around 40 workflows on my machine during this time

Reactions: 👍 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:50:12.000 UTC</summary>

And, this is fine. It's only 4MB for the PHP workers (all as far as I understand) and RR.

This is my bench env: 
![image](https://user-images.githubusercontent.com/8040338/206751400-1767d936-2cd3-4b4e-86eb-41b1fa331fa6.png)

Temporal + RR + workflows (new one every 800ms).

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 16:53:22.000 UTC</summary>

I'll leave this bench overnight; let's see after that.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-09 17:41:42.000 UTC</summary>

@rustatian I really need vacations, ofc nothing happen on your machine because I sent you wrong workflow example. My big apologies 😢 

I prepared repo with my test code, in README you will find all necessary informations. Now we should be on the same page.

https://github.com/cv65kr/temporal-sdk-leaks

If you need we can talk about that on some communicator.

<img width="1714" alt="image" src="https://user-images.githubusercontent.com/9404962/206762003-91882f0a-aea1-47be-bee6-ec2b87ea4dfe.png">


</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 18:15:43.000 UTC</summary>

We all need some vacation 😆 Sure, I'll try to run your sample 👍🏻 Thanks ⚡ 

Reactions: 😄 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 20:25:50.000 UTC</summary>

@cv65kr Yeah, it seems that you're right, 1 hour: 40->111Mb... ~2200 executions. Thanks, we have at least test for that now 👍🏻 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-09 20:51:44.000 UTC</summary>

@rustatian thanks for letting know. Do you think the problem is with RR or PHP SDK?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-09 20:56:12.000 UTC</summary>

Definitely not with RR. According to a test, RR even won't need to run a GC (only forced GC every minute by the Go runtime). You may see that here on the screenshot: https://github.com/temporalio/sdk-php/issues/177#issuecomment-1344530668
(thanks pointers 😄)

This is smt with the PHP workflow logic. Alex @roxblnfk is already looking into the issue. I guess this is not an easy case since the `temporal` in a PHP world is a pretty new concept, but we're working hard on resolving that case. Sorry for the inconvenience 😭

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-09 21:06:29.000 UTC</summary>

Right, good point. 

I profiled SDK yesterday and issue might be cause by circular references, so PHP GC is not able to clean memory properly. Thanks for your input and help, I really appreciate that 👍  We are on the same page. I will try to help as well and if I discover something I will immediately share with you guys. 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-14 19:50:46.000 UTC</summary>

When the worker fails due to the memory limit being exceeded, I see this error: 
![image](https://user-images.githubusercontent.com/8040338/207699777-fda5f7e1-b215-4d92-a7db-5c5338dc26e9.png)

So now, I can confirm that the memory leak is the reason for this error.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-15 08:58:54.000 UTC</summary>

Hey @Zylius @cv65kr 👋🏻
We've found the code, which smells, on it now 👍🏻 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-15 09:00:57.000 UTC</summary>

Hi @rustatian Can you elaborate more? I am very curious 😄 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-15 09:05:00.000 UTC</summary>

The leak was in the timer's cleanup routine where `awaitWithTimeout` was triggered by the internal timeout.  @roxblnfk Will push the PR later (and you'll be able to review it 😄 )

Reactions: ❤️ 3

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-12-15 09:06:47.000 UTC</summary>

Basically we have internal code to make sure that no floating timers left after leaving awaitWithTimeout. This optimization did not behave as expected, but we properly isolated the issue, so patch is on it's way.

Reactions: ❤️ 3

</details>

<details>
<summary><strong>Zylius</strong> commented on 2022-12-15 10:48:24.000 UTC</summary>

Great job guys thank you ;)

Reactions: ❤️ 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-15 22:07:17.000 UTC</summary>

@Zylius @cv65kr Guys, could you please set the `sticky_cache` size to, let's say, 10k? On the latest PHP-SDK version. The memory will grow since the WFs will be uploaded to the PHP worker, but it should stop growing.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-16 07:31:58.000 UTC</summary>

@rustatian I had in the past 10k value because it was default one and I can tell that problem existed as well. I changed it according to your comment - https://github.com/temporalio/sdk-php/issues/177#issuecomment-1334462066

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-16 07:55:08.000 UTC</summary>

@cv65kr That's strange. Because for your test, If I use a 10k `cache_size`, the memory grows up to 60-70MB and stops growing while workflows are added and executed.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-16 08:11:47.000 UTC</summary>

@rustatian I have more complex workflows on my application and traffic is kinda huge, so that could be a reason why you are not able to reproduce it. I will try a bit later to test it with higher value for `cache_size`.

From the other hand why setting from RR could have so big impact for PHP? My assumption is RR memory should be increased but for PHP nothing should happen because RR send signals with data from in memory cache.

Even with disabled cache_size option it should not generate leaks. I mean it should work slower and processing less workflow/activities but memory should be on same level (from PHP side).

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-12-16 11:41:17.000 UTC</summary>

Okay, i **think** we did it (including reproducable env). So the problem was in collapsing of awaitWithTimeout in cases when workflow was interruped inside this statement (i.e. when you have more workflow running that your cache allows). Without cache offloading - no memory leaks, that's why it took so much time to figure out. 

Very interesting edge case, only reproducable for awaitWithTimeout (due to internal Promise chain), but **i think** we confirmed patch is working. Stay tuned.

> Even with disabled cache_size option it should not generate leaks. I mean it should work slower and processing less workflow/activities but memory should be on same level (from PHP side).

Well, at the end of the day, hitting cache_limit was the reason of the leak. We were not offloading past workflow from memory completelly.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-16 13:21:18.000 UTC</summary>

I can confirm that I don't see that the memory grows after the fix (not released yet):
![image](https://user-images.githubusercontent.com/8040338/208107095-c978ffe7-d078-4f74-9a68-abe2e7f4356c.png)


EDIT: Even with the `cache_size` = 1.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-12-16 13:27:04.000 UTC</summary>

Great news guys! Looking forward to see PR and generally way how you solved this issue

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2022-12-19 15:45:31.000 UTC</summary>

Fixed in [v2.3.2](https://github.com/temporalio/sdk-php/releases/tag/v2.3.2)

</details>


---

<a id="289"></a>

### #289: [Bug] Memory leak: Got the response to undefined request 9009 - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/289 |
| **State** | CLOSED |
| **Author** | cv65kr (Kajetan) |
| **Created** | 2023-02-07 08:47:51.000 UTC (2y 11m ago) |
| **Updated** | 2024-01-17 08:33:44.000 UTC |
| **Closed** | 2024-01-17 08:33:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 46 |
| **Priority Score** | 46 |
| **Labels** | Mend: configuration error |
| **Assignees** | roxblnfk, rustatian |
| **Milestone** | 2.6.0 |
| **Reactions** | 👀 1 |

#### Description

### Describe the bug

"worker_exec: SoftJobError:\n\tsync_worker_exec_payload: LogicException: Got the response to undefined request 9002 in /src/vendor/temporal/sdk/src/Internal/Transport/Client.php:57\nStack trace:\n#0 /src/vendor/temporal/sdk/src/WorkerFactory.php(389): Temporal\\Internal\\Transport\\Client->dispatch(Object(Temporal\\Worker\\Transport\\Command\\SuccessResponse))\n#1

Looks like there is still a memory leak.

### Minimal Reproduction

Hard to find potencial issue, because it was discovered on production for couple days without redeployment. I am using almost all options available from SDK starting from SubWorkflows across to Search attributes.

My configuration

.rr.yaml
```
temporal:
    address: ${TEMPORAL_CLI_ADDRESS}
    namespace: ${TEMPORAL_NAMESPACE}
    cache_size: 100
    activities:
        allocate_timeout: 3600s
        num_workers: 9
        supervisor:
            max_worker_memory: 164

```

It's scaled horizontally 10 times by default.

I don't know how I can help you to find issue.

### Environment/Versions

- OS and processor: Linux
- Temporal Version: 1.18.1
- SDK - 2.3.2
- AWS


#### Comments (46)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-02-07 10:20:47.000 UTC</summary>

@cv65kr could you add RoadRunner version?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-02-07 10:23:03.000 UTC</summary>

Please share if you have any of:
1) Previous log outputs, did worker die?
2) Memory metrics ahead of the crash.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-07 10:41:15.000 UTC</summary>

@roxblnfk @wolfy-j 
RR version 2.12.2

ECS task 1:
<img width="632" alt="image" src="https://user-images.githubusercontent.com/9404962/217220707-c975c321-458c-40f6-a60a-a0fda9e6f9d2.png">

ECS task 2:
<img width="632" alt="image" src="https://user-images.githubusercontent.com/9404962/217220902-90200de7-f695-49b3-af83-a70b2e09468b.png">

Unfortunately I don't have a metrics from RR itself, only those from AWS.

```
2023-02-07T07:32:44.535Z	ERROR	server      	no free workers in the pool, wait timeout exceed	{"reason": "no free workers", "internal_event_name": "EventNoFreeWorkers", "error": "worker_watcher_get_free_worker: NoFreeWorkers:\n\tcontext deadline exceeded"}

2023-02-07T07:32:44.847Z WARN server worker stopped, and will be restarted {"reason": "worker error", "pid": 640, "internal_event_name": "EventWorkerError", "error": "worker_exec: SoftJobError:\n\tsync_worker_exec_payload: LogicException: Got the response to undefined request 17079 in /src/vendor/temporal/sdk/src/Internal/Transport/Client.php:57\nStack trace:\n#0 /src/vendor/temporal/sdk/src/WorkerFactory.php(389): Temporal\\Internal\\Transport\\Client->dispatch(Object(Temporal\\Worker\\Transport\\Command\\SuccessResponse))\n#1 /src/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory-

2023-02-07T07:32:44.847Z ERROR temporal Workflow panic {"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:b450078f-8739-4167-a74a-628e35151e15", "WorkflowType": "myWorkflow", "WorkflowID": "1234444", "RunID": "e71e05fc-cefe-408e-8cc8-597966e96177", "Attempt": 1, "Error": "worker_exec: SoftJobError:\n\tsync_worker_exec_payload: LogicException: Got the response to undefined request 17079 in /src/vendor/temporal/sdk/src/Internal/Transport/Client.php:57\nStack trace:\n#0 /src/vendor/temporal/sdk/src/WorkerFactory.php(389): Temporal\\Internal\\Transport\\Client->dispatch(Object(Temporal\\Worker\\Transport\\Command\\SuccessResponse))\n#1 /src/vendor/temporal/sdk/src/WorkerFactory.php(261): 

2023-02-07T07:32:45.326Z WARN temporal Failed to poll for task. {"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:b450078f-8739-4167-a74a-628e35151e15", "WorkerType": "WorkflowWorker", "Error": "worker stopping"
```


I extract unique logs, the rest it more likely `worker_exec: SoftJobError:\n\tsync_worker_exec_payload: LogicException: Got the response to undefined request 17029 in` 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-07 13:06:44.000 UTC</summary>

@roxblnfk @wolfy-j 

Container1:
```
Workers of [temporal]:
+---------+-----------+---------+---------+---------+--------------------+
|   PID   |  STATUS   |  EXECS  | MEMORY  |  CPU%   |      CREATED       |
+---------+-----------+---------+---------+---------+--------------------+
|     623 | ready     |   1,124 | 61 MB   |    0.03 | 1 hour ago         |
|     521 | ready     |      39 | 76 MB   |    0.02 | 1 hour ago         |
|     520 | ready     |      39 | 83 MB   |    0.02 | 1 hour ago         |
|     526 | ready     |      38 | 74 MB   |    0.02 | 1 hour ago         |
|     511 | ready     |      39 | 75 MB   |    0.02 | 1 hour ago         |
|     513 | ready     |      39 | 75 MB   |    0.02 | 1 hour ago         |
|     514 | ready     |      40 | 85 MB   |    0.02 | 1 hour ago         |
|     515 | ready     |      39 | 85 MB   |    0.03 | 1 hour ago         |
|     512 | ready     |      39 | 112 MB  |    0.04 | 1 hour ago         |
+---------+-----------+---------+---------+---------+--------------------+
```

Container 2:
```
Workers of [temporal]:
+---------+-----------+---------+---------+---------+--------------------+
|   PID   |  STATUS   |  EXECS  | MEMORY  |  CPU%   |      CREATED       |
+---------+-----------+---------+---------+---------+--------------------+
|     627 | ready     |     865 | 60 MB   |    0.02 | 1 hour ago         |
|     516 | ready     |      37 | 75 MB   |    0.02 | 1 hour ago         |
|     529 | ready     |      37 | 76 MB   |    0.02 | 1 hour ago         |
|     530 | ready     |      37 | 76 MB   |    0.02 | 1 hour ago         |
|     515 | ready     |      37 | 83 MB   |    0.02 | 1 hour ago         |
|     517 | ready     |      38 | 104 MB  |    0.03 | 1 hour ago         |
|     518 | ready     |      37 | 75 MB   |    0.02 | 1 hour ago         |
|     519 | ready     |      37 | 75 MB   |    0.02 | 1 hour ago         |
|     520 | ready     |      37 | 75 MB   |    0.02 | 1 hour ago         |
+---------+-----------+---------+---------+---------+--------------------+
```

1. One of worker uses more memory in compare to other processes
2. Why first process have such big amount of execs in compare to rest of processes?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-07 15:07:38.000 UTC</summary>

Hey @cv65kr 👋🏻 

1. It Might be the problematic code handled by that worker.
2. First is the workflow worker, and it won't be restarted if not killed or died. E.g. if the activity worker dies, RR will re-allocate that process. If you're using `./rr reset`, that command will restart everything (WF+Activity). If the WF worker dies, RR will also restart everything.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-07 15:36:15.000 UTC</summary>

@rustatian thanks of explanation of point 2.

I am quite sure that there is a leak somewhere 
<img width="615" alt="image" src="https://user-images.githubusercontent.com/9404962/217288988-f907516f-857e-427b-a245-cf6caef930a3.png">

I am trying to isolate workflow with separate worker to give you more details. I am not sure if this is a leak or not because here I have minimal traffic. In 3 hour it grow up with 3 mb, so it sounds like something gentle but if we imagine that multiply by some traffic it might it.
<img width="615" alt="image" src="https://user-images.githubusercontent.com/9404962/217289561-7a68e580-cbd7-427e-90fd-03882b4c5272.png">


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-07 15:49:58.000 UTC</summary>

View of workflow after `Got the response to undefined request 17029 in`. This is situation when workflow was not able to run subworkflow.
<img width="1569" alt="image" src="https://user-images.githubusercontent.com/9404962/217293667-76d1da75-67e3-4662-8804-7d50a5647191.png">


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-08 12:32:33.000 UTC</summary>

@roxblnfk I upgraded SDK to ^2.4 version and it's even worse. 
<img width="1450" alt="image" src="https://user-images.githubusercontent.com/9404962/217530533-5d5c1b5a-ab24-4480-b12f-493b1930825b.png">

~9% in 1 hour.

So maybe something with Marshaller?


</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 14:30:51.000 UTC</summary>

@cv65kr If we would talk only about the workflow execution (without taking into account the restart reasons), this error will only lead to the workflow retrying, and as a result, your workflow will still finish correctly, am I right?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-09 14:39:49.000 UTC</summary>

@rustatian unfortunately no, if you look on my comment with Temporal UI screen you will see that workflow was canceled (not by me). 

In the past I had a situation when because of this error couple sub-worklows was assigned to wrong parent and in result of that activity was executed with wrong input. It happened only one time and I was not able to reproduce it. 

That's why for me "Got the response to undefined request" error sounds very dangerous.

My first suspect was that horizontal scaling issues e.g. I sent signal to Temporal and Temporal notified all workers so in fact only worker with assigned workflow was able to clean in_memory cache after receiving the signa, and for all rests of workers stayed in memory.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 14:45:46.000 UTC</summary>

Could you let me know if you configured workflow retries?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-09 14:48:00.000 UTC</summary>

I have workflows with unique id, so in general it cannot be retries. Only activities are retried in my case.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 14:52:26.000 UTC</summary>

But workflow will preserve the input and ID. It depends on your requirements, but generally, I guess the lack of possibility to restart the workflow is a bad design (it's just my guess, nothing offensive). Would you consider re-designing some parts of some handlers to leave the possibility of having the retries?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 14:58:45.000 UTC</summary>

Mmmm, money 💵 
Are you 100% sure that your code doesn't have any leaks?


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-09 15:04:17.000 UTC</summary>

I am still checking, I cannot answer you for 100%. There is too much things to check. 
Right now I used RR soft reset just to be safe and still looking for root cause.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 15:07:09.000 UTC</summary>

Actually, `./rr reset` is not a soft one :) This command resets all pools of workers (WF+ACT), temporal workers and purges the sticky cache.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-02-09 15:07:35.000 UTC</summary>

ttl under supervisor option as well?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 15:09:05.000 UTC</summary>

You can't set a supervisor on a WF worker, only activities. But for the activities, it resets only activities workers.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-02-09 15:10:42.000 UTC</summary>

WF worker contains all info about WF executions, responses, etc. It should not be restarted w/o a significant reason. You can see it first in the `./rr worker` output.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-05-02 08:07:33.000 UTC</summary>

Hi guys, 

could you please report if you still seeing this behaviour on recent SDK and RR releases? We included new mechanism which should improve worker restarts and prevent leaky ids in workers.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-05-08 19:38:03.000 UTC</summary>

Sorry, but I am not able to test it now. I will try to do this with other project.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-12 16:05:33.000 UTC</summary>

To be finally fixed in 2.7 realase.

Reactions: 🎉 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-08-18 19:34:48.000 UTC</summary>

Hello!
Could you try to use PHP SDK 2.6.0 (dev) with RoadRunner 2023.3.0-beta?

We have tested it on a lot of parallel workflows and signals with the `cache_size` option set to 1.
PHP SDK 2.6.0 with RoadRunner 2023.3.0-beta shows a perfect result.
No any "Got the response to undefined request" errors!

More details about PHP SDK 2.6.0 (dev) are there:
https://discord.com/channels/538114875570913290/824234752692977664/1142176919786360894
https://temporalio.slack.com/archives/C01LK9FAMM0/p1692386951356089

To install **SDK 2.6.0** dev and RoadRunner 2023.3.0-beta:

```bash
composer require temporal/sdk ~2.6.0@dev -W
vendor/bin/rr get --stability=beta
```

Reactions: 🎉 2 🚀 2

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-10-09 10:07:25.000 UTC</summary>

Hello. Have you already updated to RoadRunner 2023.3 and PHP SDK 2.6.1? Is your problem reproducible on the new versions?


</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-10-20 01:19:38.000 UTC</summary>

Closing as solved until further comments.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 12:19:53.000 UTC</summary>

@roxblnfk @wolfy-j @rustatian I was opportunity to test the solution during the load test and looks like it not working I see bunch of errors like:
```
"Error": "undefined response: Got the response to undefined request 11264", "StackTrace": "process event for test-qe [panic]:\ngithub.com/temporalio/roadrunner-temporal/v4/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0xc00525cf00, 0x14?)\n\tgithub.com/temporalio/roadrunner-temporal/v4@v4.5.6/aggregatedpool/workflow.go:172 +0x319\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc003d7edf8, 0xc003c2d880, 0x80?, 0x1)\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_event_handlers.go:1083 +0x229\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0008ecb40, 0xc001a95080)\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_task_handlers.go:1074 +0x155d\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc002863ba0, 0xc001a95080, 0xc0008ecb40, 0xc0021bee40)\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_task_handlers.go:868 +0x3bf\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0039e9e60, 0xc001a95080)\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_task_pollers.go:354 +0x3a3\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0039e9e60, {0x1b414c0?, 0xc001a95080?})\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_task_pollers.go:318 +0x87\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc003990dc0, {0x1b42040?, 0xc003ff33a0})\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_worker_base.go:505 +0x15b\ngo.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_worker_base.go:356 +0x45\ncreated by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 20271\n\tgo.temporal.io/sdk@v1.25.1/internal/internal_worker_base.go:352 +0xb8"
```

I tested 100workflows/sec with limit 5k workflows, after above log it stuck in execution.  Worfklows are simple - some activity with http calls, await for signal with timeout


2 containers = ECS 256cpu x 1640 mem

.rr config
cache_size: 15000
allocate_timeout: 172800s
num_workers: 8
max_worker_memory: 160 

MAX_CONCURRENT_WORKFLOW_TASK_POLLERS: 5
MAX_CONCURRENT_ACTIVITY_TASK_POLLERS: 0
MAX_CONCURRENT_ACTIVITY_EXECUTION_SIZE: 8

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-11-27 12:42:28.000 UTC</summary>

Hey @cv65kr 👋 
What is your RR and `sdk-php` versions?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 12:44:25.000 UTC</summary>

@rustatian I forgot to put basic information 🤦 

RR: 2023.3.6
SDK: 2.6.1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 13:21:32.000 UTC</summary>

@rustatian what I saw is also after redeployment there is an error `"Error": "nondeterministic workflow: extra replay command for CancelTimer: (TimerId:17)"}`

Output in workflows:
<img width="1580" alt="image" src="https://github.com/temporalio/sdk-php/assets/9404962/d25153af-7b2c-4287-a074-9d505149a90d">


</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-11-27 14:53:02.000 UTC</summary>

Can you let us know which version you updated it from?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 15:05:16.000 UTC</summary>

@wolfy-j 
RR 2.12.2 => 2023.3.6
SDK 2.4.0 => 2.6.1

But I ran totally new workflows

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-11-27 15:28:07.000 UTC</summary>

Does this workflow use signals? There was a patch in 2.5.* to address some stability issues.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 16:11:21.000 UTC</summary>

@wolfy-j yes,  I mentioned about that `worfklows are simple - some activity with http calls, await for signal with timeout`

> Does this workflow use signals? There was a patch in 2.5.* to address some stability issues.

Like you see I upgraded everything to the newest versions.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-11-27 16:32:19.000 UTC</summary>

Ok, thank you for clarifying. As for signal handling - there are some edge-case scenarios that were handled incorrectly prior to ~2.5 version. This has been addressed, but older workflows might still have this issue.

As for the undefined workflow response... this is odd, we've used the solution that eliminates the possibility of de-sync on a conceptual level. Valery is currently on vacations, give us some time to get back with more questions to you.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-27 16:56:49.000 UTC</summary>

Feel free to raise questions, currently I have possibilities to do some load tests. I am attaching some metrics which might you reflects what's happened inside containers during running a 300 workflows batch in 5 sec
<img width="1331" alt="image" src="https://github.com/temporalio/sdk-php/assets/9404962/ef437551-b6ba-42db-8321-f509f4bf85bd">

So `"Error": "nondeterministic workflow: extra replay command for CancelTimer: (TimerId:17)"}` might related with `undefined request `?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-28 10:14:18.000 UTC</summary>

I attaching couple metrics, which shows the moment when errors start pop up

<img width="1599" alt="image" src="https://github.com/temporalio/sdk-php/assets/9404962/862dc6e4-17c5-4013-a54a-a1ccaadbfba1">

CPU was high
<img width="176" alt="image" src="https://github.com/temporalio/sdk-php/assets/9404962/04bf9f34-1821-4fe3-bdb6-fcf93ec554eb">


Changed configuration for tests
```
->withMaxConcurrentWorkflowTaskPollers(
                    5
                )
                ->withMaxConcurrentActivityTaskPollers(
                    5
                )
                ->withMaxConcurrentActivityExecutionSize(
                    300
                )
                ->withMaxConcurrentWorkflowTaskExecutionSize(
                    300
                )
```

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-11-28 14:56:35.000 UTC</summary>

> So `"Error": "nondeterministic workflow: extra replay command for CancelTimer: (TimerId:17)"}` might related with `undefined request `?

Yes, theoretically, it's possible that the older version of the workflow triggered the timer incorrectly (before the patch), and it might cause an extra callback. Do you have a chance to run these tests on post 2.5.3 workflows? I'm trying to ensure that de-sync issue is gone (it is based on our aggressive tests) and this problem is mostly related to post 2.5.3 behaviour.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-28 17:11:24.000 UTC</summary>

@wolfy-j what do you mean by `it's possible that the older version of the workflow triggered the timer incorrectly`? All my workflows was run with version 2.6.1. 

And errors `Got the response to undefined request` and `extra replay command for CancelTimer` are visible in 2.6.1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-30 17:38:08.000 UTC</summary>

@wolfy-j I tested now with 2.5.1 version and issues are the same.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-11-30 17:39:57.000 UTC</summary>

You should avoid `2.5.1` and test on `2.6.1` 😃 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-11-30 17:40:26.000 UTC</summary>

@rustatian I tested both and effect is the same :) 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-11-30 17:43:28.000 UTC</summary>

I mean, `2.5.1` should not be involved in testing, since WF created with the outdated version might be triggered. Ideally, should be 0 WFs and testing session should be on the latest versions only, if that is possible for sure.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-12-17 17:21:21.000 UTC</summary>

Any updates?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-12-18 15:34:18.000 UTC</summary>

Hi, this is our pipeline to check at the beginning of Jan. We have to wrap current release first.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2024-01-16 21:32:39.000 UTC</summary>

Hi,

We've spent some time with the whole team over the last few days, and we can confirm that there are no memory leaks in the PHP codebase, including your use case. 

However, we managed to reproduce your issue quickly, and its root cause is pretty straightforward. So, let's go so we can finally close this ticket.

Issue number one - **"Task processing failed with error - Workflow task not found"**. This issue is NOT connected to a memory leak but is related to your configuration. 

In your current setup, it means that you can consume **300** workflows per worker in parallel - https://github.com/cv65kr/samples-php/blob/leak/app/worker.php#L37

Setting such value on a small worker is possible, but it will sometimes trigger workflow **task timeout** if the worker task can not be performed in time. The reason why it can't be performed in time:
1) Too much to unwind (we addressed that, see below)
2) Too many workflows per worker are trying to do something in parallel.

Next, you had two conflicting values in your workers:
1) cache size = 15000
2) PHP max_memory_limit = 128Mb (in this docker)

As a result, your worker appeared too hungry, trying to serve as many workflows from memory as possible until it hit OOM. Make sure that your sticky cache is set reasonably for your workflows and/or turn off memory limit for workflow workers. 

For your particular example, 500 workflows in memory consume about 140 MB, so a 15000 sticky cache will need around 4GB.

I've updated your code with:
1) cache size = 500
2) concurrent workflows = 200
3) workflow pollers = 15

![Screenshot 2024-01-16 153241](https://github.com/temporalio/sdk-php/assets/796136/e56760b0-3cbf-44fe-8745-472fab51ae6e)

As a result, we did not experience any failures or memory leaks in your code. In addition, we have found that under large workflow volume GC will slow down workflow worker, causing even more issues. 

Over the next few days, we will release a patch to address GC overhead, increasing the performance of use cases like yours by 3x.

![Screenshot 2024-01-16 161004](https://github.com/temporalio/sdk-php/assets/796136/e31deaad-631c-4e9a-aab5-7fac2d7adcda)

In short:
1) No memory leaks, your simply over-saturated your worker
2) Please make sure to avoid using PHP memory limit in combination with dispoportional sticky cache size - worker killed by OOM causing ID sync issues
3) Do not overconsume in your workers



</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2024-01-17 08:33:42.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the errors have been resolved.

</details>


---

<a id="276"></a>

### #276: [Feature Request] Worker unable to start with a custom Data Converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/276 |
| **State** | CLOSED |
| **Author** | sdellarosa (S. Dellarosa) |
| **Created** | 2023-01-11 10:27:25.000 UTC (2y 12m ago) |
| **Updated** | 2023-09-05 18:10:42.000 UTC |
| **Closed** | 2023-09-05 18:04:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 28 |
| **Priority Score** | 28 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I would like to use a custom data converter that converts all payloads into an encrypted payload.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

I have created my own implementation of `DataConverterInterface`, which I supply to both the client and the worker. This new converter uses the default `DataConverter` from the SDK to convert a value into a `Payload`, then converts this payload into an encrypted payload (see class below).

```php
class MyDataConverter implements DataConverterInterface
{
    public function __construct()
    {
        $this->defaultDataConverter = DataConverter::createDefault();
        $this->encryptedPayloadConverter = new EncryptedPayloadConverter();
    }

    public function toPayload($value): Payload
    {
        $payload = $this->defaultDataConverter->toPayload($value);

        return $this->encryptedPayloadConverter->encrypt($payload);
    }

    public function fromPayload(Payload $payload, $type): mixed
    {
        $payload = $this->encryptedPayloadConverter->decrypt($payload);

        return $this->defaultDataConverter->fromPayload($payload, new Type(TYPE::TYPE_ANY));
    }
}

class EncryptedPayloadConverter
{
    public function encrypt(Payload $payload): Payload
    {
        $encrypted = new Payload();
        $encrypted->setMetadata([EncodingKeys::METADATA_ENCODING_KEY => 'binary/encrypted']);
        $encrypted->setData($this->encryptString($payload->serializeToString()));

        return $encrypted;
    }

    public function decrypt(Payload $payload): Payload
    {
        $decrypted = new Payload();
        $decrypted->mergeFromString($this->decryptString($payload->getData()));

        return $decrypted;
    }
}
```

When using the client to start a workflow, I can see that the workflow execution can be successfully started, with the input arguments encoded in `binary/encrypted`, as I intended. But, when I start RoadRunner for the worker (`./rr serve`), I get the error below and my worker is unable to start.

```
2023-01-09T09:38:40.002Z        INFO    temporal        connected to temporal server    {"address": "temporal:7233"}
2023-01-09T09:38:40.367Z        DEBUG   server          worker is allocated     {"pid": 23, "internal_event_name": "EventWorkerConstruct"}
2023-01-09T09:38:40.742Z        DEBUG   server          worker is allocated     {"pid": 27, "internal_event_name": "EventWorkerConstruct"}
2023-01-09T09:38:40.742Z        DEBUG   temporal        outgoing message        {"id": 0, "data": "", "context": ""}
2023-01-09T09:38:40.816Z        DEBUG   temporal        received message        {"command": null, "id": 0, "data": "\n\ufffd\^G*\ufffd\^G\n\ufffd\^F\n\^\\n\^Hencoding\^R\^Pbinary/encrypted\^R\ufffd\^FsIHh0C5aq1zf0KD7+z1OEv5kpwdKu2KPDsn5E8YRvxuo/uM0CsXqOFBnWwbgZc7GoioM0aLiqxBdBO+VdtGzeNziooMpIHkAUVqR4QgsB8Ge1IarnIJl7BfEF8Pet2Ov9EMrmdGEamznpDULv1UwYe/qFRhQhTgP9YwLr+SzH0KycxodQ2+/Q2BXCKnt/b7wmNyQUD1v8vdSlp7gE3EpQBY9J/BBhoAx/URGj8ruGibJ5NiFSsLS40njvvxwsw1kpgODqjh7KhgxhuyYgMm6rdNVcpauAmV3RXSSHUKkyRoelh1jQbkxeDPvnp+Om6DWBh0CQPREOH/UbG2GXtwxrfsYdrBz+kZsWSQ7MsJExe0BfyyuoJD1XIAU8tMEqjejRLfHNKohwv8rcQzPGT9B1PETWREOdbj87uFzRDjQ1cgQD9F1BThjgluj6eOtRwGlaSGykSw2KVlUOp4VubCJOvCFIhbI4zUfPLmKp4woQoDEsBNoqdZNn3sTnVwyODdcejBNXGzyKfQEVV2gwGh+yqIbH8uBn27RAfYR5n4SUDv+FsYR1za03N19G1Ph5J32MSLoHzDkpgHJRvb9LkQf4a9m2VnntmPd9qa1Etl5LvCZRCM/3zkKvsHgjtJgypjbQHyKOJjI6nBe3ah0skuJgTApig3dPESGAmPT0J4NsnU79E/XIfJHtX8za/NwIyfehzpWqPoMWkYKJiKNejQybwCt8WdBjd6tyDnRMSDiGy/kRyTNkMNMMTreQI/0BawGHlRGZl7QVpjmyG+fpCMx62hgQz63xv6jSRxPVAAuruVz8Hdh34r4AnOb6TMMaAwG83n5NP9NGxC8uHHVR6uI0+Rgkg=="}
2023-01-09T09:38:40.830Z        DEBUG   server          worker destroyed        {"pid": 23, "internal_event_name": "EventWorkerDestruct"}
2023-01-09T09:38:40.841Z        DEBUG   server          worker destroyed        {"pid": 27, "internal_event_name": "EventWorkerDestruct"}
handle_serve_command: Serve error:
        endure_start:
        endure_serve_internal: Function call error:
        endure_call_serve_fn: got initial serve error from the Vertex roadrunner_temporal.Plugin, stopping execution, error: temporal_plugin_serve:
        workflow_definition_init:
        workflow_fetch_wf_info: encoding binary/encrypted: payload encoding is not supported
```

If I don't supply my custom data converter, my worker successfully starts with the following logs.
```
2023-01-09T09:37:11.500Z        INFO    temporal        connected to temporal server    {"address": "temporal:7233"}
2023-01-09T09:37:12.244Z        DEBUG   server          worker is allocated     {"pid": 23, "internal_event_name": "EventWorkerConstruct"}
2023-01-09T09:37:12.723Z        DEBUG   server          worker is allocated     {"pid": 27, "internal_event_name": "EventWorkerConstruct"}
2023-01-09T09:37:12.723Z        DEBUG   temporal        outgoing message        {"id": 0, "data": "", "context": ""}
2023-01-09T09:37:12.873Z        DEBUG   temporal        received message        {"command": null, "id": 0, "data": "\n\ufffd\^D*\ufffd\^D\n\ufffd\^D\n\^V\n\^Hencoding\^R\njson/plain\^R\ufffd\^D{\"TaskQueue\":\"default\",\"Options\":{\"MaxConcurrentActivityExecutionSize\":0,\"WorkerActivitiesPerSecond\":0.0,\"MaxConcurrentLocalActivityExecutionSize\":0,\"WorkerLocalActivitiesPerSecond\":0.0,\"TaskQueueActivitiesPerSecond\":0.0,\"MaxConcurrentActivityTaskPollers\":0,\"MaxConcurrentWorkflowTaskExecutionSize\":0,\"MaxConcurrentWorkflowTaskPollers\":0,\"StickyScheduleToStartTimeout\":null,\"WorkerStopTimeout\":null,\"EnableSessionWorker\":false,\"SessionResourceID\":null,\"MaxConcurrentSessionExecutionSize\":1000},\"Workflows\":[{\"Name\":\"HealthWorkflow\",\"Queries\":[],\"Signals\":[]}],\"Activities\":[]}"}
2023-01-09T09:37:12.873Z        DEBUG   temporal        worker info     {"taskqueue": "default", "optionsError": "json: unsupported type: func(error)"}
2023-01-09T09:37:12.873Z        DEBUG   temporal        workflow registered     {"taskqueue": "default", "workflow name": "HealthWorkflow"}
2023-01-09T09:37:12.873Z        DEBUG   temporal        workers initialized     {"num_workers": 1}
2023-01-09T09:37:12.942Z        INFO    temporal        Started Worker  {"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:709d473a-d9e1-40c7-8ceb-371f2dd1c17c"}
2023-01-09T09:37:12.942Z        DEBUG   rpc             plugin was started      {"address": "tcp://127.0.0.1:6001", "list of the plugins with RPC methods:": ["informer", "resetter", "temporal"]}
```

To try to at least start the worker, I decided to see if skipping conversion on the first received message would help. But to skip the message, I cannot just simply skip converting all JSON payloads because workflow input and result payloads are in the JSON format, and these are the most important for me to encrypt. So instead, I added the following to my payload converter.

```php
class EncryptedPayloadConverter
{
    public function encrypt(Payload $payload): Payload
    {
        $json = json_decode($payload->getData(), associative: true);

        if ($json && is_array($json) &&
            array_key_exists('TaskQueue', $json) &&
            array_key_exists('Options', $json) &&
            array_key_exists('Workflows', $json) &&
            array_key_exists('Activities', $json)
        ) {
            return $payload;
        }

        $encrypted = new Payload();
        $encrypted->setMetadata([EncodingKeys::METADATA_ENCODING_KEY => 'binary/encrypted']);
        $encrypted->setData($this->encryptString($payload->serializeToString()));

        return $encrypted;
    }
}
```

With this added, I can see that my worker can successfully start, and my workflow tasks are picked up and my workflow execution is completed, with the results payload encoded with `binary/encrypted`. Based on this, I suspect that the issue is that one of the underlying systems (perhaps RoadRunner, Goridge, etc) do not support the custom encoding.

While this works, this is kind of a hacky solution, and there's no way of knowing if there is any other internal messages that cannot be converted with a custom encoding which could cause the worker to error out and stop. Is there any other way to solve this problem?

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

Follow the steps above.


### Environment/Versions

- OS and processor: macOS Ventura (Intel)
- Temporal Version: 1.18.4, and SDK version: 2.3.1
- Docker

### Additional context

<!-- Add any other context about the problem here. -->



#### Comments (28)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-01-12 17:52:26.000 UTC</summary>

Can you provide logs about a worker annihilation?

Please add that section in your `rr.yaml`

```yml
logs:
    mode: development
    level: debug
    file_logger_options:
        log_output: "log.log"
```

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-13 16:34:46.000 UTC</summary>

@sdellarosa You are going to introduce new data converter type `binary/encrypted` which is not supported by Temporal GO-SDK (Roadrunner use GO-SDK under the hood).

Take a look here:
https://github.com/temporalio/sdk-go/blob/6580cbe0aa41a8b515791f95c2c15bb37db1dab1/converter/default_data_converter.go#L28
https://github.com/temporalio/sdk-go/blob/6580cbe0aa41a8b515791f95c2c15bb37db1dab1/converter/composite_data_converter.go#L125

You need to check if Temporal itself supports own data converter.




</details>

<details>
<summary><strong>sdellarosa</strong> commented on 2023-01-16 15:06:02.000 UTC</summary>

@roxblnfk This is what I got in the logs:

```
{"level":"INFO","ts":"2023-01-16T14:02:15.846Z","logger":"temporal    ","msg":"connected to temporal server","address":"temporal:7233"}
{"level":"INFO","ts":"2023-01-16T14:02:17.000Z","logger":"server      ","msg":"{\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"context\":{\"exception\":{\"class\":\"ErrorException\",\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"code\":0,\"file\":\"/var/www/vendor/symfony/error-handler/DebugClassLoader.php:331\"}},\"channel\":\"deprecation\",\"severity\":\"INFO\",\"timestamp\":\"2023-01-16T14:02:16.999+00:00\"}\n"}
{"level":"INFO","ts":"2023-01-16T14:02:17.001Z","logger":"server      ","msg":"{\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"context\":{\"exception\":{\"class\":\"ErrorException\",\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"code\":0,\"file\":\"/var/www/vendor/symfony/error-handler/DebugClassLoader.php:331\"}},\"channel\":\"deprecation\",\"severity\":\"INFO\",\"timestamp\":\"2023-01-16T14:02:17.001+00:00\"}\n"}
{"level":"INFO","ts":"2023-01-16T14:02:17.008Z","logger":"server      ","msg":"{\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"context\":{\"exception\":{\"class\":\"ErrorException\",\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"code\":0,\"file\":\"/var/www/vendor/symfony/error-handler/DebugClassLoader.php:331\"}},\"channel\":\"deprecation\",\"severity\":\"INFO\",\"timestamp\":\"2023-01-16T14:02:17.007+00:00\"}\n"}
{"level":"INFO","ts":"2023-01-16T14:02:17.041Z","logger":"server      ","msg":"{\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"context\":{\"exception\":{\"class\":\"ErrorException\",\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"code\":0,\"file\":\"/var/www/vendor/symfony/error-handler/DebugClassLoader.php:331\"}},\"channel\":\"deprecation\",\"severity\":\"INFO\",\"timestamp\":\"2023-01-16T14:02:17.041+00:00\"}\n"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.047Z","logger":"server      ","msg":"worker is allocated","pid":24,"internal_event_name":"EventWorkerConstruct"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.049Z","logger":"server      ","msg":"worker is allocated","pid":25,"internal_event_name":"EventWorkerConstruct"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.056Z","logger":"server      ","msg":"worker is allocated","pid":23,"internal_event_name":"EventWorkerConstruct"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.080Z","logger":"server      ","msg":"worker is allocated","pid":26,"internal_event_name":"EventWorkerConstruct"}
{"level":"INFO","ts":"2023-01-16T14:02:17.810Z","logger":"server      ","msg":"{\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"context\":{\"exception\":{\"class\":\"ErrorException\",\"message\":\"User Deprecated: The \\\"Spiral\\\\Attributes\\\\NamedArgumentConstructorAttribute\\\" interface extends \\\"Doctrine\\\\Common\\\\Annotations\\\\NamedArgumentConstructorAnnotation\\\" that is deprecated Implementing this interface is deprecated Use the Annotation @NamedArgumentConstructor instead.\",\"code\":0,\"file\":\"/var/www/vendor/symfony/error-handler/DebugClassLoader.php:331\"}},\"channel\":\"deprecation\",\"severity\":\"INFO\",\"timestamp\":\"2023-01-16T14:02:17.809+00:00\"}\n"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.836Z","logger":"server      ","msg":"worker is allocated","pid":67,"internal_event_name":"EventWorkerConstruct"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.837Z","logger":"temporal    ","msg":"outgoing message","id":0,"data":"","context":""}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.891Z","logger":"temporal    ","msg":"received message","command":null,"id":0,"data":"\n\ufffd\^D*\ufffd\^D\n\ufffd\^D\n\^V\n\^Hencoding\^R\njson/plain\^R\ufffd\^D{\"TaskQueue\":\"default\",\"Options\":{\"MaxConcurrentActivityExecutionSize\":0,\"WorkerActivitiesPerSecond\":0.0,\"MaxConcurrentLocalActivityExecutionSize\":0,\"WorkerLocalActivitiesPerSecond\":0.0,\"TaskQueueActivitiesPerSecond\":0.0,\"MaxConcurrentActivityTaskPollers\":0,\"MaxConcurrentWorkflowTaskExecutionSize\":0,\"MaxConcurrentWorkflowTaskPollers\":0,\"StickyScheduleToStartTimeout\":null,\"WorkerStopTimeout\":null,\"EnableSessionWorker\":false,\"SessionResourceID\":null,\"MaxConcurrentSessionExecutionSize\":1000},\"Workflows\":[{\"Name\":\"HealthWorkflow\",\"Queries\":[],\"Signals\":[]}],\"Activities\":[]}"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.892Z","logger":"temporal    ","msg":"worker info","taskqueue":"default","optionsError":"json: unsupported type: func(error)"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.893Z","logger":"temporal    ","msg":"workflow registered","taskqueue":"default","workflow name":"HealthWorkflow"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.894Z","logger":"temporal    ","msg":"workers initialized","num_workers":1}
{"level":"INFO","ts":"2023-01-16T14:02:17.955Z","logger":"temporal    ","msg":"Started Worker","Namespace":"default","TaskQueue":"default","WorkerID":"default:0a537940-a86b-4ffd-8ad8-5dae21ea5a12"}
{"level":"DEBUG","ts":"2023-01-16T14:02:17.957Z","logger":"rpc         ","msg":"plugin was started","address":"tcp://127.0.0.1:6001","list of the plugins with RPC methods:":["informer","resetter","temporal"]}
```

@cv65kr Thanks, I was thinking it would indeed be related to the GO-SDK. Do you know if it's somehow possible to supply the same custom data converter there as well?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-16 15:53:31.000 UTC</summary>

@sdellarosa there are examples in Go - https://github.com/temporalio/samples-go/tree/main/encryption
https://github.com/temporalio/samples-go/tree/main/codec-server

I think it's not simple with roadrunner since you need create your own data converter and it needs to be compiled with Roadrunner. And ofc if you want to have a support of new converter in UI, you need to expose converter via server.

Velox could be answer here. Maybe @rustatian can jump here? Or maybe converter server is enough :)



</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 16:26:17.000 UTC</summary>

Hey @cv65kr @sdellarosa 👋🏻 

RR doesn't support the `binary/encrypted` payloads atm. But, that's easy to support that case. I need some repo to reproduce this case... 😃 @sdellarosa @cv65kr Could you guys create a test-case repo? 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-16 16:36:16.000 UTC</summary>

@rustatian, `binary/encrypted` is not Temporal thing, is more custom thing and client implementation can be different. The problem I think is that you can have own codecs, not only this one case. I mean encryption/decryption is most popular thing and don't know if other case will be needed (but here you can have two cases, whole payload encryption and single field encryption).

https://docs.temporal.io/security#payload-codec

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-01-16 16:39:21.000 UTC</summary>

@rustatian do we actually need to unpack all the payloads on RR end? Can't we just passthough payloads with undefined type to the server, I assume we only have to work with our internal commands.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 16:39:25.000 UTC</summary>

> @rustatian, binary/encrypted is not Temporal thing, is more custom thing and client implementation can be different. The problem I think is that you can have own codecs, not only this one case. I mean encryption/decryption is most popular thing and don't know if other case will be needed (but here you can have two cases, whole payload encryption and single field encryption).

https://docs.temporal.io/security#payload-codec

Yeah, I know, thanks, I need to verify with the test-repo, why we can't just redirect that payload to the custom data-converter in the PHP. Why that case leads to error. I know the particular line which throws an error, but I need to double-check.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 16:41:47.000 UTC</summary>

> @rustatian do we actually need to unpack all the payloads on RR end? Can't we just passthough payloads with undefined type to the server, I assume we only have to work with our internal commands.

That is because I need a test-repo to check that case. We do not touch the user's payload in any way (except, you know, marshal-unmarshal, encode-decode).

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-01-16 20:54:02.000 UTC</summary>

In a month, we might implement interceptors.
Using interceptors you could encrypt all payloads easily.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-16 20:58:13.000 UTC</summary>

@rustatian in case when you still need test repo https://github.com/cv65kr/temporal-sdk-leaks/tree/data-converter

Error is caused because as a fallback RR using default converters from GO-SDK - https://github.com/temporalio/roadrunner-temporal/blob/master/data_converter/converter.go#L28

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-16 21:06:28.000 UTC</summary>

@roxblnfk cool, looking forward!

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 21:13:40.000 UTC</summary>

> @rustatian in case when you still need test repo https://github.com/cv65kr/temporal-sdk-leaks/tree/data-converter
> 
> Error is caused because as a fallback RR using default converters from GO-SDK - https://github.com/temporalio/roadrunner-temporal/blob/master/data_converter/converter.go#L28

Yeah, I know where it fails 😄 I just needed some test-case for that. Moreover, I don't think the interceptor is a good (and natural) place to decode the payload (since this is a data-convertor task).

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 22:00:37.000 UTC</summary>

Hm, so, the issue is here:
```go
// FromPayload converts single value from payload.
func (r *DataConverter) FromPayload(payload *commonpb.Payload, valuePtr any) error {
	return r.dc.FromPayload(payload, valuePtr) <-----
}
```
Since we're converting the payload like this `err = c.dc.FromPayload(payloads[i], tmp)`.
And later, in the `CompositeDataConverter` (temporal default), `temporal` tries to take a payload converter for the `binary/encrypted`, and, obviously, there are no such converters.
And it fails with the error from the Bug.

Might be we need to implement the `CompositeDataConverter` (to support all std payloads), but with a slightly different behavior `->` paththrough all payloads with an unknown encoder to the PHP.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 22:06:32.000 UTC</summary>

In only-Go, this is an expected error because, for sure, you should create a data converter for your own encoder... 
But here, since we don't touch the user payload, we may decode/encode well-known data types, but for the user-defined encoders, we should not return an error and pass this data to the PHP worker with the hope that PHP knows how to handle it.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 22:16:29.000 UTC</summary>

It looks like an easy task 😄 
Since we don't actually need to decode the encrypted payload, we may easily detect the underlying data type with the `reflection` and use the standard decoder's approach for such payloads. Since, for example, `binary/encrypted` is binary first and then `encrypted` ⚡ 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-17 00:09:13.000 UTC</summary>

As is typical, upon delving into this task, it has become somewhat more complex 😄 

When the user sends data with an unknown converter, such as `binary/encrypted`, it is not possible to decrypt it in order to allocate workers. Specifically, we have a `payload` and a `valuePtr` pointer, which points us to the actual type that should be filled with the data in the payload. This is a standard method for converting data from a payload to its true type, also known as unmarshalling.

In the event that the payload is encrypted or encoded with an unknown converter, it cannot be decoded to the "real" type. For example, we have a `valuePtr` pointing to a structure with an arbitrary number of fields. We have two scenarios with two different converters:
1. `json/plain`: all we need to do is unmarshal the "[]byte" into the schema (our structure). The process is successful and the structure (schema) is now filled with the data.
2. `binary/encrypted` (or any unknown converter): Without knowing how to unmarshal, for example, this: "ChYKCGVuY29kaW5nEgpqc29uL3BsYWluEtkEeyJUYXNrUXVldWUiOiJk" into our real type, it is not possible to fill our `valuePtr` with the data.

The good news is that this task can be solved by allowing users to implement RR's `plugin-data-converters` in Go, similar to middleware for HTTP.


</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-17 08:09:04.000 UTC</summary>

@rustatian If I good understand correctly payload = data + metadata, maybe we could prepare fallback data converter in GO with just plain `[]byte` conversion, so every time when type in not recognised - we just forward it (it forces PHP to returns always byte[] structure).

Logic responsible e.g. for encrypting should be done in PHP.

My point that logic is kinda duplicated, because in Go we have converters and in PHP we have converters.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-17 08:24:40.000 UTC</summary>

> My point that logic is kinda duplicated, because in Go we have converters and in PHP we have converters.

Yeah, correct. I wouldn't say I like this solution, but this is the only one acceptable. 
We can't just forward the data, because we have to unmarshal it to the `valuePtr` (pointer to the real data). We can't transform the `[]byte` into the structure if the data is encrypted.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-17 08:54:10.000 UTC</summary>

Ok 😄 We discussed with @wolfy-j and found a better solution.

The main problem is in the commands between the RR and PHP workers. In the case of the custom converter, we can't decode this info. We don't care about the user's data (in a good sense) because we just path through it to the Temporal (activity, workflow, etc).

The proposed solution:
For internal communication, use the `plain/json` (or `binary/proto`) converter (one of the well-known). Having that, we will always be capable of decoding our internal messages w/o touching the user's data. And, we don't need to duplicate the data-converter in Go and PHP.

EDIT: The user's data will be encoded with the user's (in PHP) data converter.

Reactions: 👍 1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-17 11:09:47.000 UTC</summary>

Would be nice to see some example in samples-php 😄 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>sdellarosa</strong> commented on 2023-01-17 11:29:54.000 UTC</summary>

Hi all, thanks a lot for looking into this! 😄 

Just to be clear, the final proposed solution, would be implemented in this SDK and not on RoadRunner, correct? And if so, when can I expect to see the changes shipped?


</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-17 11:33:04.000 UTC</summary>

Hey @sdellarosa 👋🏻 

> Just to be clear, the final proposed solution, would be implemented in this SDK and not on RoadRunner, correct? 

Yeah, it seems that the SDK would be updated.

> And if so, when can I expect to see the changes shipped?

Hard to say, personally, as I'm not a PHP dev, we have to wait for @roxblnfk or someone from the community 😢 

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-17 12:36:03.000 UTC</summary>

@rustatian big disadvantage of this solution when you are using well-known converters you are loosing possibility e.g. to decrypt payload in Temporal UI.

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2023-01-17 12:51:29.000 UTC</summary>

@sdellarosa as a temporary solution you could something like that:
```php
<?php

declare(strict_types=1);

namespace App;

use Temporal\DataConverter\DataConverterInterface;
use Temporal\DataConverter\DataConverter;
use Temporal\Api\Common\V1\Payload;
use Temporal\DataConverter\EncodingKeys;

class Converter implements DataConverterInterface
{
    private DataConverterInterface $dataConverter;

    public function __construct()
    {
        $this->dataConverter = DataConverter::createDefault();
    }

    public function toPayload($value): Payload
    {
        $payload = $this->dataConverter->toPayload($value);

        // It's example object which need to be encoded
        if ($value instanceof Example) {
            $encrypted = new Payload();
            $encrypted->setMetadata([
                EncodingKeys::METADATA_ENCODING_KEY => 'json/plain',
                'encrypted' => 'true'
            ]);
            $encrypted->setData(
                base64_encode($payload->getData())
            );

            return $encrypted;
        }

        return $payload;
    }

    public function fromPayload(Payload $payload, $type): mixed
    {
        if ($payload->getMetadata()->offsetGet('encrypted') === 'true') {
            $decrypted = new Payload();
            $decrypted->setMetadata([EncodingKeys::METADATA_ENCODING_KEY => 'json/plain']);
            $decrypted->setData(base64_decode($payload->getData()));
            return $this->dataConverter->fromPayload($decrypted, $type);

        }

        return $this->dataConverter->fromPayload($payload, $type);
    }
}
```

In this case concrete object `Example` is encrypted in both directions via base64.

Need to be aware about my previous comment.
<img width="1165" alt="image" src="https://user-images.githubusercontent.com/9404962/212903115-6d2b3958-ea45-4629-be71-ce74a6102ad8.png">


Reactions: 👍 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-18 08:18:09.000 UTC</summary>

> @rustatian big disadvantage of this solution when you are using well-known converters you are loosing possibility e.g. to decrypt payload in Temporal UI.

Possibly, but personally, I don't think that this is a disadvantage since data is encrypted (no one, even accidentally would see it). 
Unfortunately, we have to choose the best from the worst solutions, since we can't decode payload unknown to the RR converter 😢 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:35:25.000 UTC</summary>

@sdellarosa Hey 👋🏻 
Have you tried the prev answer? Did that help you?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-09-05 18:04:25.000 UTC</summary>

Hi. Feel free to reopen the issue if it is still actual.

</details>


---

<a id="314"></a>

### #314: [Bug] Activity not scheduled in signal handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/314 |
| **State** | CLOSED |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-07-04 09:01:20.000 UTC (2y 6m ago) |
| **Updated** | 2023-10-19 19:58:26.000 UTC |
| **Closed** | 2023-10-19 19:58:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 23 |
| **Priority Score** | 23 |
| **Labels** | Bug |
| **Assignees** | roxblnfk, rustatian |
| **Milestone** | 2.6.0 |

#### Description

### What are you really trying to do?

Schedule/invoke an activity in a signal handler

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

Having the following workflow code, where addName is a  `#[SignalMethod]`,
```php

    public function addName(string $name): void
    {
        $this->greetingActivity->composeGreeting('Hello', $name);
    }

```

One customer reported that sometimes the activity is not scheduled after the signal is delivered to the workflow execution.  
It does not make any difference if the activity invocation sync or async 

I have tried to reproduce the issue with no luck. 

Attaching two event histories following this same path. As can be noted, in one of them the activity is not scheduled after receiving the signal (event 15), which later causes an NDE on replay. 

![event-history-revised](https://github.com/temporalio/sdk-php/assets/514932/6cb34aa0-5509-4544-9fe7-6bc9f99fa49c)

![event-history-revised-2](https://github.com/temporalio/sdk-php/assets/514932/b60dbaa5-9586-43eb-ba03-f447a75766db)



<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

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

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (23)

<details>
<summary><strong>antmendoza</strong> commented on 2023-07-04 09:10:02.000 UTC</summary>

The customer sees this pattern in 0,75% of the workflow executions.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-04 09:25:41.000 UTC</summary>

Are there any details on the behavior of the primary workflow method? Does it spawn any coroutines, what is the exit condition?

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-04 10:55:27.000 UTC</summary>

Hello, thanks for looking into it. 

The main workflow sets several class properties, it invokes several activities (database updates, API calls to other services), and ultimately waits for a timer to expire. Once the timer expires, it continues to invoke a few more activities, after which it terminates. 

Please feel free to ping me for any other questions.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-07 12:14:30.000 UTC</summary>

Can you provide us with some simplistic way to represent your workflow? When your timer fires and you exit - do you wait for schedules activities in signals to be completed?

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-07 12:37:19.000 UTC</summary>

Hi Anton, here's a high level description of what the workflow does:
- sets several properties of the class based on an argument that gets passed to the workflow method
- executes `activityAlpha` (database call)
- fetches the version of the workflow, and depending on that, performs `activityBeta` (API call via HTTP) or skips it
- in a for cycle, it sleeps for a specific amount of days and upon wakeup it executes `activityGamma` (API call via HTTP), and, depending on the version again, invokes `activityBeta` (API call via HTTP) for a maximum of 3 times
- once out of the cycle, depending on the version, it sleeps for several days and performs `activityBeta` (API call via HTTP), or skips it entirely
- waits for another timer which sleeps for several days
- upon wakeup, it executes 4 different activities (similarly to the ones above, 3 API calls via HTTP  and 1 database call)
- it terminates

We're yield-ing all invocations of the activities/promises, both inside the workflow, as well as the signal. I assume this is considered as "waiting" for the activities to be completed. If not, then could you please clarify what you mean exactly?

Thanks,
Driton

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-07 13:03:16.000 UTC</summary>

@dbakium like this?

```php
class TestWorkflow
{
    private mixed $arg1;
    private mixed $arg2;
    private ActivityProxy $activityAlpha;
    private ActivityProxy $activityBeta;
    private ActivityProxy $activityGamma;

    public function handler(mixed $arg1, mixed $arg2)
    {
        $this->arg1 = $arg1;
        $this->arg2 = $arg2;

        yield $this->activityAlpha->execute();
        /*if version...*/ yield $this->activityBeta->execute();

        $result = [];
        for ($i = 3; $i > 0; $i--) {
            yield Workflow::timer('5 days');

            yield $this->activityGamma->execute();
            /*if version...*/ yield $this->activityBeta->execute();
        }
        yield Workflow::timer('5 days');

        /*if version...*/ yield $this->activityBeta->execute();
    }

    public function signalAlpha(string $arg)
    {
        yield $this->activityAlpha->execute($arg);
    }

    public function signalBeta(string $arg)
    {
        yield $this->activityBeta->execute($arg);
    }

    public function signalGamma(string $arg)
    {
        yield $this->activityGamma->execute($arg);
    }
}
```

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-07 13:10:55.000 UTC</summary>

Hi Aleksei, 

Yes, the only difference is that the invoked signal contains several class property assignments as well, so something like:
```
public function signalAlpha(bool $newStatus)
    {
      $this->arg1 = $newStatus;
        yield $this->activityAlpha->execute(new DatabaseUpdateRequest($newStatus));
    }


</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-07 13:35:34.000 UTC</summary>

In your case the workflow may be closed before an activity from a signal method will be done

Some signal method activity counter might help:

```php
class Test
{
    private mixed $arg1;
    private mixed $arg2;
    private ActivityProxy $activityAlpha;
    private ActivityProxy $activityBeta;
    private ActivityProxy $activityGamma;
    // FIX: Add signals counter
    private ActivityProxy $waitingSignals;

    public function handler(mixed $arg1, mixed $arg2)
    {
        $this->arg1 = $arg1;
        $this->arg2 = $arg2;

        yield $this->activityAlpha->execute();
        /*if version...*/ yield $this->activityBeta->execute();

        $result = [];
        for ($i = 3; $i > 0; $i--) {
            yield Workflow::timer('5 days');

            yield $this->activityGamma->execute();
            /*if version...*/ yield $this->activityBeta->execute();
        }
        yield Workflow::timer('5 days');

        /*if version...*/ yield $this->activityBeta->execute();

        // FIX: Wait signals completion
        // Use awaitWithTimeout to add timeout here (better option)
        /* if yet another version... */ yield Workflow::await(fn() => $this->waitingSignals === 0);
    }

    public function signalAlpha(string $arg)
    {
        // FIX
        ++$this->waitingSignals;
        try {
            yield $this->activityAlpha->execute($arg);
        } finally {
            --$this->waitingSignals;
        }
    }

    public function signalBeta(string $arg)
    {
        // FIX
        ++$this->waitingSignals;
        try {
            yield $this->activityBeta->execute($arg);
        } finally {
            --$this->waitingSignals;
        }
    }

    public function signalGamma(string $arg)
    {
        // FIX
        ++$this->waitingSignals;
        try {
            yield $this->activityGamma->execute($arg);
        } finally {
            --$this->waitingSignals;
        }
    }
}
```


Reactions: 👍 1

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-07 13:57:27.000 UTC</summary>

I'm not sure that's the issue here, as the workflows in question whose signals failed to schedule the activity were/are still running, so it's not that the workflows terminated before the activity included in the signal could execute. However, that is a good suggestion and it's something we'll take a look at moving further. 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-07 14:45:02.000 UTC</summary>

@dbakiu do I understand correctly that versioning rules have always been followed in your code and the appearance of the activity call in the signal method on the second image cannot in any way be connected with such a possibility that in some previous revision of this activity launch code there was no?



</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-07 19:26:48.000 UTC</summary>

@roxblnfk definitely, the signal itself hasn't changed since the initial version of the workflow was deployed, so no versioning rule exists within the signal definition. 

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 08:42:52.000 UTC</summary>

You got it. Can you also tell us which Temporal SDK version you use? We are working on reproducing this use-case...

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-11 09:00:35.000 UTC</summary>

Hi, thanks for the update.
We're using `v2.5.0`, on an Alpine-based docker image, on Kubernetes.  

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-07-11 22:16:40.000 UTC</summary>

Hey @dbakiu 👋🏻 
Could you please check, what RR version you use? `./rr --version` command output.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-07-11 23:03:31.000 UTC</summary>

Also, if that's possible, could you please provide debug (would be super cool) or at least error logs before/after this happens?

We tried to reproduce the bug, no luck. Sending hundreds of signals to the dozens of workflows - no luck. I think that these failures happened because of the WF worker restarts due to out of memory or some other exception.

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-07-12 10:03:47.000 UTC</summary>

> Hey @dbakiu 👋🏻 Could you please check, what RR version you use? `./rr --version` command output.

Hey, here you go:
Roadrunner: `rr version 2023.1.1 (build time: 2023-04-20T12:40:33+0000, go1.20.3)`
PHP: 8.1.18

> Also, if that's possible, could you please provide debug (would be super cool) or at least error logs before/after this happens?
> 
> We tried to reproduce the bug, no luck. Sending hundreds of signals to the dozens of workflows - no luck. I think that these failures happened because of the WF worker restarts due to out of memory or some other exception.

Since the issue is only happening in production and we're unable to reproduce it locally, it is difficult to provide logs, apart from the error message that we got, which is a fairly generic one:
```{
  "message": "nondeterministic workflow: extra replay command for ScheduleActivityTask: (ActivityId:19, ActivityType:(Name:WorkflowClassNameX.ActivityNameY.activityMethodZ), TaskQueue:(Name:default, Kind:Normal), Input:(Payloads:[len=1]), ScheduleToCloseTimeout:0s, ScheduleToStartTimeout:0s, StartToCloseTimeout:5s, HeartbeatTimeout:0s, RequestEagerExecution:true)",
  "source": "GoSDK",
  "stackTrace": "",
  "encodedAttributes": null,
  "cause": null,
  "applicationFailureInfo": {
    "type": "historyMismatchError",
    "nonRetryable": false,
    "details": null
  }
}
```
Regarding your OOM suspicion, I took a look at our monitoring systems, and the memory usage on the pods has been consistently low. On average, it's around 10%, with a peak of 14% over the last 3 months. We're also monitoring the sticky cache size, and during that same period, it averages at about 220, with a maximum of 590, which is well under the default limit of 10000. Additionally, we have increased the sticky cache size to 20000, which was one advice we got from the Temporal support crew after the last batch of errors appeared. 

As for any other exceptions that may occur, there's monitoring in place which should alert us if any erratic behavior is detected, and apart from the NDE-related exceptions, there have been no other exceptions in that period.

Reactions: 👍 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-07-12 16:07:00.000 UTC</summary>

Thanks @dbakiu 👍🏻 
Looks like we found the problem. On it.

Reactions: 🎉 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-08-02 08:11:22.000 UTC</summary>

We are expecting that cumulative update by v2.5.3 and v2.5.4 will fix possible Signal issues.

Reactions: 👍 1 🎉 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-08-18 21:29:12.000 UTC</summary>

@dbakiu 👋🏻 
Have you had a chance to try out these new versions yet ?

</details>

<details>
<summary><strong>dbakiu</strong> commented on 2023-08-21 11:25:48.000 UTC</summary>

Hi @rustatian,

We temporarily moved away from using activities in signals, so we weren't able to test whether the fix that was pushed as part of v2.5.3 and v.2.5.4 has addressed our issue. Since the bug is difficult to reproduce, as you saw yourself, it's also difficult to verify that it has been fixed. That being said, we will come up with a plan on reintroducing the activities and monitor the situation. 



Reactions: 👍 3

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-08-21 15:01:42.000 UTC</summary>

Hi @dbakiu 👋🏻 
Of course 😃, the issue will remain open until you're able to test this case. Feel free to post updates here 👍🏻 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-10-09 10:08:30.000 UTC</summary>

Hello. Are there any updates on this issue?


</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-10-19 19:58:25.000 UTC</summary>

If the issue is still relevant, just reopen it.

</details>


---

<a id="592"></a>

### #592: [Docs] Document SDK marshaller

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/592 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-04-09 10:19:54.000 UTC (9 months ago) |
| **Updated** | 2025-05-29 08:05:31.000 UTC |
| **Upvotes** | 5 |
| **Comments** | 6 |
| **Priority Score** | 16 |
| **Labels** | Documentation |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 5 |

#### Description

Documentation for the marshaller is completely missing. New users have no way to learn how to serialize data objects, typed lists, and more.
It's necessary to explain attributes like Marshal, MarshalArray, types, and so on.

#### Comments (6)

<details>
<summary><strong>KorDum</strong> commented on 2025-04-14 06:55:40.000 UTC</summary>

Apparently, it will be necessary to modify it a bit for static analyzers:
https://github.com/temporalio/sdk-php/issues/595
https://github.com/temporalio/sdk-php/issues/596

Reactions: 👍 1

</details>

<details>
<summary><strong>mtorromeo</strong> commented on 2025-05-12 08:57:20.000 UTC</summary>

This is a fundamental concept that needs documenting.

Is there at least an example that I can take a look at?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-12 11:00:24.000 UTC</summary>

> Is there at least an example that I can take a look at?

https://github.com/temporalio/samples-php/blob/e291d400cec4fa819d428d84f0311dcb0fc3c6bb/app/src/Updates/Zonk/Table.php#L14-L20

https://github.com/temporalio/samples-php/blob/e291d400cec4fa819d428d84f0311dcb0fc3c6bb/app/src/Updates/Zonk/Dice.php#L13-L16

Reactions: 👍 1

</details>

<details>
<summary><strong>mtorromeo</strong> commented on 2025-05-12 11:04:53.000 UTC</summary>

For my use case I ended up using a custom `DataConverter`, which is also not documented for PHP.

The difference between `DataConverter`s and marshalling is also not clear, which is a byproduct of the lacking documentation on these topics.

</details>

<details>
<summary><strong>KorDum</strong> commented on 2025-05-29 07:58:42.000 UTC</summary>

I'm writing this so it won't be forgotten when describing it. We've just encountered an unobvious behavior: unlike Symfony Serializer, (un-)marshaller creates an object past the constructor, which makes the use of initializations through the constructor promotion not work and the field remains uninitialized.

See example:

```php
public function __contrcutor(
    public ?Some $some = null, // the field will not be initialized
) {}
```

```php
public ?Some $some = null; // will be ok

public function __contrcutor(?Some $some = null)
{
    $this->some = $some;
}
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-29 08:05:29.000 UTC</summary>

@KorDum yes. Because in the first case the default value is related to parameter, not property.

</details>


---

<a id="170"></a>

### #170: [Bug] Issues with sticky execution/queries/signals

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/170 |
| **State** | CLOSED |
| **Author** | mzavatsky (Maxim Zavatsky) |
| **Created** | 2022-05-12 06:23:37.000 UTC (3y 8m ago) |
| **Updated** | 2022-06-03 12:21:03.000 UTC |
| **Closed** | 2022-06-03 12:21:03.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 9 |
| **Priority Score** | 13 |
| **Labels** | Bug |
| **Assignees** | rustatian, seregazhuk |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### What are you really trying to do?

We've started a quite complex workflow with timers and signals in production, and faced with unstable behaviour: some workflow executions are OK, some lead to workers' crashes and stuck forever.

### Describe the bug

After worker's restart the behaviour of queries and signals becomes unstable.

### Minimal Reproduction

Test workflow:
```php
#[WorkflowInterface]
class DummyWorkflow
{
    private int $startAtTimestamp;

    private bool $shouldStop = false;

    #[WorkflowMethod]
    #[ReturnType(Type::TYPE_STRING)]
    public function start(): string|\Generator
    {
        $this->startAtTimestamp = Workflow::now()->getTimestamp();

        yield Workflow::awaitWithTimeout(
            120,
            fn () => $this->shouldStop,
        );

        if ($this->shouldStop) {
            return 'Stopped';
        }

        return 'Completed';
    }

    #[SignalMethod]
    public function stop(): void
    {
        $this->shouldStop = true;
    }

    #[QueryMethod('payload')]
    public function query(): object
    {
        return (object)[
            'secondsFromStart' => time() - $this->startAtTimestamp,
        ];
    }
}
```

#### Case 1: worker restart (e.g. after crash)
1. Start workflow
2. Reload workers with `rr reset`
3. Try to query workflow

tctl output:
```
$ tcl wf query -qt payload -w e5da1aee-a9fb-412b-9b96-35182203526b
Error: Query workflow failed.
Error Details: rpc error: code = InvalidArgument desc = workflow_process_handle_query: Workflow with the specified run identifier "effaf1ce-82d8-4bc3-b9df-f66fd2e9ca61" not found (type: LogicException, retryable: true)
```
Temporal log:
```
{"level":"error","ts":"2022-05-12T05:44:49.095Z","msg":"query directly though matching on sticky failed, will not attempt query on non-sticky","service":"history","shard-id":1,"address":"172.19.0.14:7234","shard-item":"0xc0004bac80","component":"history-engine","wf-namespace":"default","wf-id":"e5da1aee-a9fb-412b-9b96-35182203526b","wf-run-id":"55901692-8758-4870-a66a-a637d79d4698","wf-query-type":"payload","error":"workflow_process_handle_query: Workflow with the specified run identifier \"55901692-8758-4870-a66a-a637d79d4698\" not found (type: LogicException, retryable: true)","logging-call-at":"historyEngine.go:884","stacktrace":"go.temporal.io/server/common/log.(*zapLogger).Error\n\t/temporal/common/log/zap_logger.go:142\ngo.temporal.io/server/service/history.(*historyEngineImpl).queryDirectlyThroughMatching\n\t/temporal/service/history/historyEngine.go:884\ngo.temporal.io/server/service/history.(*historyEngineImpl).QueryWorkflow\n\t/temporal/service/history/historyEngine.go:790\ngo.temporal.io/server/service/history.(*Handler).QueryWorkflow.func1\n\t/temporal/service/history/handler.go:968\ngo.temporal.io/server/common/backoff.RetryContext\n\t/temporal/common/backoff/retry.go:125\ngo.temporal.io/server/service/history.(*Handler).QueryWorkflow\n\t/temporal/service/history/handler.go:966\ngo.temporal.io/server/api/historyservice/v1._HistoryService_QueryWorkflow_Handler.func1\n\t/temporal/api/historyservice/v1/service.pb.go:1401\ngo.temporal.io/server/common/rpc/interceptor.(*RateLimitInterceptor).Intercept\n\t/temporal/common/rpc/interceptor/rate_limit.go:83\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1113\ngo.temporal.io/server/common/rpc/interceptor.(*TelemetryInterceptor).Intercept\n\t/temporal/common/rpc/interceptor/telemetry.go:108\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/metrics.NewServerMetricsTrailerPropagatorInterceptor.func1\n\t/temporal/common/metrics/grpc.go:113\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/metrics.NewServerMetricsContextInjectorInterceptor.func1\n\t/temporal/common/metrics/grpc.go:66\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/rpc.ServiceErrorInterceptor\n\t/temporal/common/rpc/grpc.go:131\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1118\ngo.temporal.io/server/api/historyservice/v1._HistoryService_QueryWorkflow_Handler\n\t/temporal/api/historyservice/v1/service.pb.go:1403\ngoogle.golang.org/grpc.(*Server).processUnaryRPC\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1279\ngoogle.golang.org/grpc.(*Server).handleStream\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1608\ngoogle.golang.org/grpc.(*Server).serveStreams.func1.2\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:923"}
```

Roadrunner log:
```
2022-05-12T05:44:49.078Z	DEBUG	temporal    	outgoing message	{"data": "\nR\^H\t\^R\u000bInvokeQuery\^ZA{\"runId\":\"55901692-8758-4870-a66a-a637d79d4698\",\"name\":\"payload\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:44:20Z\"}"}
2022-05-12T05:44:49.094Z	DEBUG	temporal    	received message	{"data": "\n\ufffd\r\^H\t\"\ufffd\r\n[Workflow with the specified run identifier \"55901692-8758-4870-a66a-a637d79d4698\" not found\^R\^GPHP_SDK\^Z\ufffd\^LLogicException: Workflow with the specified run identifier \"55901692-8758-4870-a66a-a637d79d4698\" not found in /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/WorkflowProcessAwareRoute.php:58\nStack trace:\n#0 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/WorkflowProcessAwareRoute.php(44): Temporal\\Internal\\Transport\\Router\\WorkflowProcessAwareRoute->findProcessOrFail('55901692-8758-4...')\n#1 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/InvokeQuery.php(55): Temporal\\Internal\\Transport\\Router\\WorkflowProcessAwareRoute->findInstanceOrFail('55901692-8758-4...')\n#2 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router.php(81): Temporal\\Internal\\Transport\\Router\\InvokeQuery->handle(Object(Temporal\\Worker\\Transport\\Command\\Request), Array, Object(React\\Promise\\Deferred))\n#3 /opt/app/vendor/temporal/sdk/src/Worker/Worker.php(93): Temporal\\Internal\\Transport\\Router->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#4 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(413): Temporal\\Worker\\Worker->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#5 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Server.php(60): Temporal\\WorkerFactory->onRequest(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#6 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(387): Temporal\\Internal\\Transport\\Server->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#7 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\nR\\x08\\t\\x12\\vInvokeQue...', Array)\n#8 /opt/app/bin/worker(45): Temporal\\WorkerFactory->run()\n#9 {main}*\^P\n\^NLogicException"}
```

4. Try to send signal

Web UI:
Signal has been written into event history, workflow tasks seems to be executed, but **nothing actually happens** (workflow continues to run):
![image](https://user-images.githubusercontent.com/877149/168001512-6451fe87-f83d-4158-a8bf-d15add9cada6.png)

Roadrunner log:
```
2022-05-12T05:48:07.728Z	DEBUG	temporal    	outgoing message	{"data": "\nY\^H\n\^R\^LInvokeSignal\^ZG{\"runId\":\"55901692-8758-4870-a66a-a637d79d4698\",\"name\":\"stop\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:48:07Z\"}"}
2022-05-12T05:48:07.730Z	DEBUG	temporal    	received message	{"data": "\n\ufffd\r\^H\n\"\ufffd\r\n[Workflow with the specified run identifier \"55901692-8758-4870-a66a-a637d79d4698\" not found\^R\^GPHP_SDK\^Z\ufffd\^LLogicException: Workflow with the specified run identifier \"55901692-8758-4870-a66a-a637d79d4698\" not found in /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/WorkflowProcessAwareRoute.php:58\nStack trace:\n#0 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/WorkflowProcessAwareRoute.php(44): Temporal\\Internal\\Transport\\Router\\WorkflowProcessAwareRoute->findProcessOrFail('55901692-8758-4...')\n#1 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/InvokeSignal.php(45): Temporal\\Internal\\Transport\\Router\\WorkflowProcessAwareRoute->findInstanceOrFail('55901692-8758-4...')\n#2 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router.php(81): Temporal\\Internal\\Transport\\Router\\InvokeSignal->handle(Object(Temporal\\Worker\\Transport\\Command\\Request), Array, Object(React\\Promise\\Deferred))\n#3 /opt/app/vendor/temporal/sdk/src/Worker/Worker.php(93): Temporal\\Internal\\Transport\\Router->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#4 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(413): Temporal\\Worker\\Worker->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#5 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Server.php(60): Temporal\\WorkerFactory->onRequest(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#6 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(387): Temporal\\Internal\\Transport\\Server->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#7 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\nY\\x08\\n\\x12\\fInvokeSig...', Array)\n#8 /opt/app/bin/worker(45): Temporal\\WorkerFactory->run()\n#9 {main}*\^P\n\^NLogicException"}
```

#### Case 2: roadrunner restarts (e.g. after redeploy)
1. Start workflow
2. Restart roadrunner server with `docker restart roadrunner_container`
3. Try to query workflow → got expected result

Temporal log:
```
{"level":"info","ts":"2022-05-12T05:59:19.961Z","msg":"query direct through matching failed on sticky, clearing sticky before attempting on non-sticky","service":"history","shard-id":1,"address":"172.19.0.14:7234","shard-item":"0xc0004bac80","component":"history-engine","wf-namespace":"default","wf-id":"teacher_16522_remove_slots","wf-run-id":"dccef09e-51f6-4a94-b852-48244932eccc","wf-query-type":"payload","logging-call-at":"historyEngine.go:893"}
{"level":"info","ts":"2022-05-12T05:59:19.961Z","msg":"query directly through matching on sticky timed out, attempting to query on non-sticky","service":"history","shard-id":1,"address":"172.19.0.14:7234","shard-item":"0xc0004bac80","component":"history-engine","wf-namespace":"default","wf-id":"teacher_16522_remove_slots","wf-run-id":"dccef09e-51f6-4a94-b852-48244932eccc","wf-query-type":"payload","wf-task-queue-name":"c55a0d6a348f:dcc25f94-63bf-4c1e-b42d-cc6e680fede9","wf-next-event-id":6,"logging-call-at":"historyEngine.go:923"}
```

Roadrunner log (workflow is replaying):
```
2022-05-12T05:59:19.965Z	DEBUG	temporal    	workflow execute	{"runID": "dccef09e-51f6-4a94-b852-48244932eccc", "workflow info": {"WorkflowExecution":{"ID":"XXXXX","RunID":"dccef09e-51f6-4a94-b852-48244932eccc"},"WorkflowType":{"Name":"DummyWorkflow"},"TaskQueueName":"default","WorkflowExecutionTimeout":0,"WorkflowRunTimeout":0,"WorkflowTaskTimeout":10000000000,"Namespace":"default","Attempt":1,"WorkflowStartTime":"2022-05-12T05:57:38.056903166Z","CronSchedule":"","ContinuedExecutionRunID":"","ParentWorkflowNamespace":"","ParentWorkflowExecution":null,"Memo":null,"SearchAttributes":{"indexed_fields":{"SkyTeacherId":{"metadata":{"encoding":"anNvbi9wbGFpbg==","type":"SW50"},"data":"MTY1MjI="}}},"BinaryChecksum":"366aad4717fdb22d55eebef7c454528a"}}
2022-05-12T05:59:19.965Z	DEBUG	temporal    	sequenceID	{"before": 0}
2022-05-12T05:59:19.965Z	DEBUG	temporal    	sequenceID	{"after": 1}
2022-05-12T05:59:19.965Z	DEBUG	temporal    	workflow task started	{"time": "1s"}
2022-05-12T05:59:19.966Z	DEBUG	temporal    	outgoing message	{"data": "\n\ufffd\^F\^H\^A\^R\rStartWorkflow\^Z\ufffd\^E{\"info\":{\"WorkflowExecution\":{\"ID\":\"teacher_16522_remove_slots\",\"RunID\":\"dccef09e-51f6-4a94-b852-48244932eccc\"},\"WorkflowType\":{\"Name\":\"DummyWorkflow\"},\"TaskQueueName\":\"default\",\"WorkflowExecutionTimeout\":0,\"WorkflowRunTimeout\":0,\"WorkflowTaskTimeout\":10000000000,\"Namespace\":\"default\",\"Attempt\":1,\"WorkflowStartTime\":\"2022-05-12T05:57:38.056903166Z\",\"CronSchedule\":\"\",\"ContinuedExecutionRunID\":\"\",\"ParentWorkflowNamespace\":\"\",\"ParentWorkflowExecution\":null,\"Memo\":null,\"SearchAttributes\":{\"indexed_fields\":{\"SkyTeacherId\":{\"metadata\":{\"encoding\":\"anNvbi9wbGFpbg==\",\"type\":\"SW50\"},\"data\":\"MTY1MjI=\"}}},\"BinaryChecksum\":\"366aad4717fdb22d55eebef7c454528a\"}}*D\n\^_\n\^V\n\^Hencoding\^R\njson/plain\^R\^E16522\n!\n\^V\n\^Hencoding\^R\njson/plain\^R\^G2592000 {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:57:38Z\",\"replay\":true}"}
2022-05-12T05:59:19.979Z	DEBUG	temporal    	received message	{"data": "\n\"\^H\ufffdF\^R\^HNewTimer\^Z\^Q{\"ms\":2592000000}*\^@\n\^_\^H\^A*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null"}
2022-05-12T05:59:19.979Z	DEBUG	temporal    	sequenceID	{"before": 1}
2022-05-12T05:59:19.979Z	DEBUG	temporal    	sequenceID	{"after": 2}
2022-05-12T05:59:19.979Z	DEBUG	temporal    	outgoing message	{"data": "\nR\^H\^B\^R\u000bInvokeQuery\^ZA{\"runId\":\"dccef09e-51f6-4a94-b852-48244932eccc\",\"name\":\"payload\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:57:38Z\",\"replay\":true}"}
2022-05-12T05:59:19.983Z	DEBUG	temporal    	received message	{"data": "\nd\^H\^B*`\n^\n\^V\n\^Hencoding\^R\njson/plain\^RD{\"teacherId\":16522,\"removalScheduledOn\":\"2022-06-11T05:57:38+00:00\"}"}
```

4. Try to query workflow **again** → got `context deadline exceeded` error

Temporal log:
```
{"level":"info","ts":"2022-05-12T06:04:51.831Z","msg":"query directly through matching on sticky timed out, attempting to query on non-sticky","service":"history","shard-id":1,"address":"172.19.0.14:7234","shard-item":"0xc0004bac80","component":"history-engine","wf-namespace":"default","wf-id":"XXX","wf-run-id":"dccef09e-51f6-4a94-b852-48244932eccc","wf-query-type":"payload","wf-task-queue-name":"","wf-next-event-id":6,"logging-call-at":"historyEngine.go:923"}
{"level":"error","ts":"2022-05-12T06:05:21.830Z","msg":"query directly though matching on non-sticky failed","service":"history","shard-id":1,"address":"172.19.0.14:7234","shard-item":"0xc0004bac80","component":"history-engine","wf-namespace":"default","wf-id":"XXX","wf-run-id":"dccef09e-51f6-4a94-b852-48244932eccc","wf-query-type":"payload","error":"context deadline exceeded","logging-call-at":"historyEngine.go:941","stacktrace":"go.temporal.io/server/common/log.(*zapLogger).Error\n\t/temporal/common/log/zap_logger.go:142\ngo.temporal.io/server/service/history.(*historyEngineImpl).queryDirectlyThroughMatching\n\t/temporal/service/history/historyEngine.go:941\ngo.temporal.io/server/service/history.(*historyEngineImpl).QueryWorkflow\n\t/temporal/service/history/historyEngine.go:790\ngo.temporal.io/server/service/history.(*Handler).QueryWorkflow.func1\n\t/temporal/service/history/handler.go:968\ngo.temporal.io/server/common/backoff.RetryContext\n\t/temporal/common/backoff/retry.go:125\ngo.temporal.io/server/service/history.(*Handler).QueryWorkflow\n\t/temporal/service/history/handler.go:966\ngo.temporal.io/server/api/historyservice/v1._HistoryService_QueryWorkflow_Handler.func1\n\t/temporal/api/historyservice/v1/service.pb.go:1401\ngo.temporal.io/server/common/rpc/interceptor.(*RateLimitInterceptor).Intercept\n\t/temporal/common/rpc/interceptor/rate_limit.go:83\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1113\ngo.temporal.io/server/common/rpc/interceptor.(*TelemetryInterceptor).Intercept\n\t/temporal/common/rpc/interceptor/telemetry.go:108\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/metrics.NewServerMetricsTrailerPropagatorInterceptor.func1\n\t/temporal/common/metrics/grpc.go:113\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/metrics.NewServerMetricsContextInjectorInterceptor.func1\n\t/temporal/common/metrics/grpc.go:66\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngo.temporal.io/server/common/rpc.ServiceErrorInterceptor\n\t/temporal/common/rpc/grpc.go:131\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1.1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1116\ngoogle.golang.org/grpc.chainUnaryInterceptors.func1\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1118\ngo.temporal.io/server/api/historyservice/v1._HistoryService_QueryWorkflow_Handler\n\t/temporal/api/historyservice/v1/service.pb.go:1403\ngoogle.golang.org/grpc.(*Server).processUnaryRPC\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1279\ngoogle.golang.org/grpc.(*Server).handleStream\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:1608\ngoogle.golang.org/grpc.(*Server).serveStreams.func1.2\n\t/go/pkg/mod/google.golang.org/grpc@v1.41.0/server.go:923"}
```

Roadrunner log:
```
2022-05-12T06:04:51.834Z	DEBUG	temporal    	workflow execute	{"runID": "dccef09e-51f6-4a94-b852-48244932eccc", "workflow info": {"WorkflowExecution":{"ID":"XXX","RunID":"dccef09e-51f6-4a94-b852-48244932eccc"},"WorkflowType":{"Name":"DummyWorkflow"},"TaskQueueName":"default","WorkflowExecutionTimeout":0,"WorkflowRunTimeout":0,"WorkflowTaskTimeout":10000000000,"Namespace":"default","Attempt":1,"WorkflowStartTime":"2022-05-12T05:57:38.056903166Z","CronSchedule":"","ContinuedExecutionRunID":"","ParentWorkflowNamespace":"","ParentWorkflowExecution":null,"Memo":null,"SearchAttributes":{"indexed_fields":{"SkyTeacherId":{"metadata":{"encoding":"anNvbi9wbGFpbg==","type":"SW50"},"data":"MTY1MjI="}}},"BinaryChecksum":"366aad4717fdb22d55eebef7c454528a"}}
2022-05-12T06:04:51.834Z	DEBUG	temporal    	sequenceID	{"before": 2}
2022-05-12T06:04:51.834Z	DEBUG	temporal    	sequenceID	{"after": 3}
2022-05-12T06:04:51.834Z	DEBUG	temporal    	workflow task started	{"time": "1s"}
2022-05-12T06:04:51.834Z	DEBUG	temporal    	outgoing message	{"data": "\n\ufffd\^F\^H\^C\^R\rStartWorkflow\^Z\ufffd\^E{\"info\":{\"WorkflowExecution\":{\"ID\":\"XXX\",\"RunID\":\"dccef09e-51f6-4a94-b852-48244932eccc\"},\"WorkflowType\":{\"Name\":\"DummyWorkflow\"},\"TaskQueueName\":\"default\",\"WorkflowExecutionTimeout\":0,\"WorkflowRunTimeout\":0,\"WorkflowTaskTimeout\":10000000000,\"Namespace\":\"default\",\"Attempt\":1,\"WorkflowStartTime\":\"2022-05-12T05:57:38.056903166Z\",\"CronSchedule\":\"\",\"ContinuedExecutionRunID\":\"\",\"ParentWorkflowNamespace\":\"\",\"ParentWorkflowExecution\":null,\"Memo\":null,\"SearchAttributes\":{\"indexed_fields\":{\"SkyTeacherId\":{\"metadata\":{\"encoding\":\"anNvbi9wbGFpbg==\",\"type\":\"SW50\"},\"data\":\"MTY1MjI=\"}}},\"BinaryChecksum\":\"366aad4717fdb22d55eebef7c454528a\"}}*D\n\^_\n\^V\n\^Hencoding\^R\njson/plain\^R\^E16522\n!\n\^V\n\^Hencoding\^R\njson/plain\^R\^G2592000 {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:57:38Z\",\"replay\":true}"}
2022-05-12T06:04:51.837Z	DEBUG	temporal    	received message	{"data": "\n\ufffd\^L\^H\^C\"\ufffd\^L\n{Workflow \"DummyWorkflow\" with run id \"dccef09e-51f6-4a94-b852-48244932eccc\" has been already started\^R\^GPHP_SDK\^Z\ufffd\u000bLogicException: Workflow \"DummyWorkflow\" with run id \"dccef09e-51f6-4a94-b852-48244932eccc\" has been already started in /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:95\nStack trace:\n#0 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php(63): Temporal\\Internal\\Transport\\Router\\StartWorkflow->findWorkflowOrFail(Object(Temporal\\Workflow\\WorkflowInfo))\n#1 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router.php(81): Temporal\\Internal\\Transport\\Router\\StartWorkflow->handle(Object(Temporal\\Worker\\Transport\\Command\\Request), Array, Object(React\\Promise\\Deferred))\n#2 /opt/app/vendor/temporal/sdk/src/Worker/Worker.php(93): Temporal\\Internal\\Transport\\Router->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#3 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(413): Temporal\\Worker\\Worker->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#4 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Server.php(60): Temporal\\WorkerFactory->onRequest(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#5 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(387): Temporal\\Internal\\Transport\\Server->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#6 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n\\x80\\x06\\x08\\x03\\x12\\rStartWor...', Array)\n#7 /opt/app/bin/worker(45): Temporal\\WorkerFactory->run()\n#8 {main}*\^P\n\^NLogicException"}
2022-05-12T06:04:51.837Z	ERROR	temporal    	Workflow panic	{"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:7ddcc910-a81a-4d88-95bc-7eda895b5b91", "WorkflowType": "DummyWorkflow", "WorkflowID": "XXX", "RunID": "dccef09e-51f6-4a94-b852-48244932eccc", "Attempt": 1, "Error": "unknown command CommandType: Timer, ID: 5, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition", "StackTrace": "process event for default [panic]:\ngithub.com/spiral/sdk-go/internal.panicIllegalState(...)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:395\ngithub.com/spiral/sdk-go/internal.(*commandsHelper).getCommand(0x0, {0x0, {0x26565e8, 0xc000d11950}})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:856 +0x119\ngithub.com/spiral/sdk-go/internal.(*commandsHelper).handleTimerStarted(0xc000145260, {0x26565e8, 0xc00007cfb0})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:1250 +0x29\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc0000e5080, 0xc000aaa4c0, 0xc0, 0x0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_event_handlers.go:833 +0x3fd\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc00015ca10, 0xc000a2c540)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:874 +0xca8\ngithub.com/spiral/sdk-go/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc00019a580, 0xc000a2c540, 0xc0009eb6b0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:723 +0x493\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).processWorkflowTask(0xc0000d51e0, 0xc000a2c540)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:284 +0x2cd\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).ProcessTask(0xc0000d51e0, {0x1594180, 0xc000a2c540})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:255 +0x6c\ngithub.com/spiral/sdk-go/internal.(*baseWorker).processTask(0xc000185000, {0x1593d40, 0xc000520cc0})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:362 +0x167\ncreated by github.com/spiral/sdk-go/internal.(*baseWorker).runTaskDispatcher\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:282 +0xba"}
2022-05-12T06:04:51.837Z	DEBUG	temporal    	sequenceID	{"before": 3}
2022-05-12T06:04:51.837Z	DEBUG	temporal    	sequenceID	{"after": 4}
2022-05-12T06:04:51.837Z	DEBUG	temporal    	outgoing message	{"data": "\nE\^H\^D\^R\^ODestroyWorkflow\^Z0{\"runId\":\"dccef09e-51f6-4a94-b852-48244932eccc\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T05:57:38Z\",\"replay\":true}"}
2022-05-12T06:04:51.838Z	DEBUG	temporal    	received message	{"data": "\n\^_\^H\^D*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null"}
2022-05-12T06:04:51.838Z	WARN	temporal    	Failed to process workflow task.	{"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:7ddcc910-a81a-4d88-95bc-7eda895b5b91", "WorkflowType": "DummyWorkflow", "WorkflowID": "XXX", "RunID": "dccef09e-51f6-4a94-b852-48244932eccc", "Attempt": 1, "Error": "unknown command CommandType: Timer, ID: 5, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition"}
2022-05-12T06:04:51.840Z	INFO	temporal    	Task processing failed with error	{"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:7ddcc910-a81a-4d88-95bc-7eda895b5b91", "WorkerType": "WorkflowWorker", "Error": "Workflow executionsRow not found.  WorkflowId: default, RunId: 1620e0fd-7a80-4d11-acfb-bb1fe4a509f3"}
```

If we continue making queries, we'll again get OK answer, then `context deadline exceeded` error, etc.

5. Try to query again and get expected answer
6. Try to send signal7. 

Web UI:
Signal is processed correctly, but after an error:
![image](https://user-images.githubusercontent.com/877149/168004819-aabcb33b-1607-45b9-92bd-887e75fcc858.png)

Roadrunner log:
```
2022-05-12T06:15:35.240Z	DEBUG	temporal    	workflow execute	{"runID": "5a1bfd24-70e9-4cef-863e-5a2f0377223c", "workflow info": {"WorkflowExecution":{"ID":"XXX","RunID":"5a1bfd24-70e9-4cef-863e-5a2f0377223c"},"WorkflowType":{"Name":"DummyWorkflow"},"TaskQueueName":"default","WorkflowExecutionTimeout":0,"WorkflowRunTimeout":0,"WorkflowTaskTimeout":10000000000,"Namespace":"default","Attempt":1,"WorkflowStartTime":"2022-05-12T06:14:46.868631545Z","CronSchedule":"","ContinuedExecutionRunID":"","ParentWorkflowNamespace":"","ParentWorkflowExecution":null,"Memo":null,"SearchAttributes":{"indexed_fields":{"SkyTeacherId":{"metadata":{"encoding":"anNvbi9wbGFpbg==","type":"SW50"},"data":"MTY1MjI="}}},"BinaryChecksum":"366aad4717fdb22d55eebef7c454528a"}}
2022-05-12T06:15:35.240Z	DEBUG	temporal    	sequenceID	{"before": 2}
2022-05-12T06:15:35.240Z	DEBUG	temporal    	sequenceID	{"after": 3}
2022-05-12T06:15:35.240Z	DEBUG	temporal    	workflow task started	{"time": "1s"}
2022-05-12T06:15:35.240Z	DEBUG	temporal    	outgoing message	{"data": "\n\ufffd\^F\^H\^C\^R\rStartWorkflow\^Z\ufffd\^E{\"info\":{\"WorkflowExecution\":{\"ID\":\"XXX\",\"RunID\":\"5a1bfd24-70e9-4cef-863e-5a2f0377223c\"},\"WorkflowType\":{\"Name\":\"DummyWorkflow\"},\"TaskQueueName\":\"default\",\"WorkflowExecutionTimeout\":0,\"WorkflowRunTimeout\":0,\"WorkflowTaskTimeout\":10000000000,\"Namespace\":\"default\",\"Attempt\":1,\"WorkflowStartTime\":\"2022-05-12T06:14:46.868631545Z\",\"CronSchedule\":\"\",\"ContinuedExecutionRunID\":\"\",\"ParentWorkflowNamespace\":\"\",\"ParentWorkflowExecution\":null,\"Memo\":null,\"SearchAttributes\":{\"indexed_fields\":{\"SkyTeacherId\":{\"metadata\":{\"encoding\":\"anNvbi9wbGFpbg==\",\"type\":\"SW50\"},\"data\":\"MTY1MjI=\"}}},\"BinaryChecksum\":\"366aad4717fdb22d55eebef7c454528a\"}}*D\n\^_\n\^V\n\^Hencoding\^R\njson/plain\^R\^E16522\n!\n\^V\n\^Hencoding\^R\njson/plain\^R\^G2592000 {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T06:14:46Z\",\"replay\":true}"}
2022-05-12T06:15:35.243Z	DEBUG	temporal    	received message	{"data": "\n\ufffd\^L\^H\^C\"\ufffd\^L\n{Workflow \"DummyWorkflow\" with run id \"5a1bfd24-70e9-4cef-863e-5a2f0377223c\" has been already started\^R\^GPHP_SDK\^Z\ufffd\u000bLogicException: Workflow \"DummyWorkflow\" with run id \"5a1bfd24-70e9-4cef-863e-5a2f0377223c\" has been already started in /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:95\nStack trace:\n#0 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php(63): Temporal\\Internal\\Transport\\Router\\StartWorkflow->findWorkflowOrFail(Object(Temporal\\Workflow\\WorkflowInfo))\n#1 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Router.php(81): Temporal\\Internal\\Transport\\Router\\StartWorkflow->handle(Object(Temporal\\Worker\\Transport\\Command\\Request), Array, Object(React\\Promise\\Deferred))\n#2 /opt/app/vendor/temporal/sdk/src/Worker/Worker.php(93): Temporal\\Internal\\Transport\\Router->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#3 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(413): Temporal\\Worker\\Worker->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#4 /opt/app/vendor/temporal/sdk/src/Internal/Transport/Server.php(60): Temporal\\WorkerFactory->onRequest(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#5 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(387): Temporal\\Internal\\Transport\\Server->dispatch(Object(Temporal\\Worker\\Transport\\Command\\Request), Array)\n#6 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n\\x80\\x06\\x08\\x03\\x12\\rStartWor...', Array)\n#7 /opt/app/bin/worker(45): Temporal\\WorkerFactory->run()\n#8 {main}*\^P\n\^NLogicException"}
2022-05-12T06:15:35.243Z	ERROR	temporal    	Workflow panic	{"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:4fe939cb-4f79-47c6-a1e9-8b6dad29ef7f", "WorkflowType": "DummyWorkflow", "WorkflowID": "XXX", "RunID": "5a1bfd24-70e9-4cef-863e-5a2f0377223c", "Attempt": 1, "Error": "unknown command CommandType: Timer, ID: 5, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition", "StackTrace": "process event for default [panic]:\ngithub.com/spiral/sdk-go/internal.panicIllegalState(...)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:395\ngithub.com/spiral/sdk-go/internal.(*commandsHelper).getCommand(0x0, {0x0, {0x26565e8, 0x7fcb0d7c0228}})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:856 +0x119\ngithub.com/spiral/sdk-go/internal.(*commandsHelper).handleTimerStarted(0x7fcb346c15b8, {0x26565e8, 0xc0005b4000})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_decision_state_machine.go:1250 +0x29\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc00079e750, 0xc000918e00, 0xc0, 0x0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_event_handlers.go:833 +0x3fd\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0009288c0, 0xc000116ed0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:874 +0xca8\ngithub.com/spiral/sdk-go/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc0001e4a50, 0xc000116ed0, 0xc0009dee70)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:723 +0x493\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).processWorkflowTask(0xc0000b45b0, 0xc000116ed0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:284 +0x2cd\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).ProcessTask(0xc0000b45b0, {0x1594180, 0xc000116ed0})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:255 +0x6c\ngithub.com/spiral/sdk-go/internal.(*baseWorker).processTask(0xc000200400, {0x1593d40, 0xc000122250})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:362 +0x167\ncreated by github.com/spiral/sdk-go/internal.(*baseWorker).runTaskDispatcher\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:282 +0xba"}
2022-05-12T06:15:35.243Z	WARN	temporal    	Failed to process workflow task.	{"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:4fe939cb-4f79-47c6-a1e9-8b6dad29ef7f", "WorkflowType": "DummyWorkflow", "WorkflowID": "XXX", "RunID": "5a1bfd24-70e9-4cef-863e-5a2f0377223c", "Attempt": 1, "Error": "unknown command CommandType: Timer, ID: 5, possible causes are nondeterministic workflow definition code or incompatible change in the workflow definition"}
2022-05-12T06:15:35.243Z	DEBUG	temporal    	sequenceID	{"before": 3}
2022-05-12T06:15:35.243Z	DEBUG	temporal    	sequenceID	{"after": 4}
2022-05-12T06:15:35.243Z	DEBUG	temporal    	outgoing message	{"data": "\nE\^H\^D\^R\^ODestroyWorkflow\^Z0{\"runId\":\"5a1bfd24-70e9-4cef-863e-5a2f0377223c\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T06:14:46Z\",\"replay\":true}"}
2022-05-12T06:15:35.244Z	DEBUG	temporal    	received message	{"data": "\n\^_\^H\^D*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null"}
2022-05-12T06:15:35.254Z	DEBUG	temporal    	workflow execute	{"runID": "5a1bfd24-70e9-4cef-863e-5a2f0377223c", "workflow info": {"WorkflowExecution":{"ID":"XXX","RunID":"5a1bfd24-70e9-4cef-863e-5a2f0377223c"},"WorkflowType":{"Name":"DummyWorkflow"},"TaskQueueName":"default","WorkflowExecutionTimeout":0,"WorkflowRunTimeout":0,"WorkflowTaskTimeout":10000000000,"Namespace":"default","Attempt":1,"WorkflowStartTime":"2022-05-12T06:14:46.868631545Z","CronSchedule":"","ContinuedExecutionRunID":"","ParentWorkflowNamespace":"","ParentWorkflowExecution":null,"Memo":null,"SearchAttributes":{},"BinaryChecksum":"366aad4717fdb22d55eebef7c454528a"}}
2022-05-12T06:15:35.254Z	DEBUG	temporal    	sequenceID	{"before": 4}
2022-05-12T06:15:35.254Z	DEBUG	temporal    	sequenceID	{"after": 5}
2022-05-12T06:15:35.254Z	DEBUG	temporal    	workflow task started	{"time": "1s"}
2022-05-12T06:15:35.254Z	DEBUG	temporal    	outgoing message	{"data": "\n\ufffd\^F\^H\^E\^R\rStartWorkflow\^Z\ufffd\^E{\"info\":{\"WorkflowExecution\":{\"ID\":\"XXX\",\"RunID\":\"5a1bfd24-70e9-4cef-863e-5a2f0377223c\"},\"WorkflowType\":{\"Name\":\"DummyWorkflow\"},\"TaskQueueName\":\"default\",\"WorkflowExecutionTimeout\":0,\"WorkflowRunTimeout\":0,\"WorkflowTaskTimeout\":10000000000,\"Namespace\":\"default\",\"Attempt\":1,\"WorkflowStartTime\":\"2022-05-12T06:14:46.868631545Z\",\"CronSchedule\":\"\",\"ContinuedExecutionRunID\":\"\",\"ParentWorkflowNamespace\":\"\",\"ParentWorkflowExecution\":null,\"Memo\":null,\"SearchAttributes\":{\"indexed_fields\":{\"SkyTeacherId\":{\"metadata\":{\"encoding\":\"anNvbi9wbGFpbg==\",\"type\":\"SW50\"},\"data\":\"MTY1MjI=\"}}},\"BinaryChecksum\":\"366aad4717fdb22d55eebef7c454528a\"}}*D\n\^_\n\^V\n\^Hencoding\^R\njson/plain\^R\^E16522\n!\n\^V\n\^Hencoding\^R\njson/plain\^R\^G2592000 {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T06:14:46Z\",\"replay\":true}"}
2022-05-12T06:15:35.255Z	DEBUG	temporal    	received message	{"data": "\n\"\^H\ufffdF\^R\^HNewTimer\^Z\^Q{\"ms\":2592000000}*\^@\n\^_\^H\^E*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null"}
2022-05-12T06:15:35.255Z	DEBUG	temporal    	sequenceID	{"before": 5}
2022-05-12T06:15:35.255Z	DEBUG	temporal    	sequenceID	{"after": 6}
2022-05-12T06:15:35.255Z	DEBUG	temporal    	workflow task started	{"time": "1s"}
2022-05-12T06:15:35.255Z	DEBUG	temporal    	outgoing message	{"data": "\nY\^H\^F\^R\^LInvokeSignal\^ZG{\"runId\":\"5a1bfd24-70e9-4cef-863e-5a2f0377223c\",\"name\":\"cancelRemoval\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T06:15:35Z\"}"}
2022-05-12T06:15:35.257Z	DEBUG	temporal    	received message	{"data": "\n\^_\^H\^F*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null\nB\^H\ufffdF\^R\^PCompleteWorkflow\^Z\^B{}*'\n%\n\^V\n\^Hencoding\^R\njson/plain\^R\u000b\"CANCELLED\""}
2022-05-12T06:15:35.257Z	DEBUG	temporal    	sequenceID	{"before": 6}
2022-05-12T06:15:35.257Z	DEBUG	temporal    	sequenceID	{"after": 7}
2022-05-12T06:15:35.257Z	DEBUG	temporal    	outgoing message	{"data": "\nE\^H\^G\^R\^ODestroyWorkflow\^Z0{\"runId\":\"5a1bfd24-70e9-4cef-863e-5a2f0377223c\"} {\"taskQueue\":\"default\",\"tickTime\":\"2022-05-12T06:15:35Z\",\"replay\":true}"}
2022-05-12T06:15:35.257Z	DEBUG	temporal    	received message	{"data": "\n\^_\^H\^G*\^[\n\^Y\n\^W\n\^Hencoding\^R\u000bbinary/null"}
```

### Environment/Versions
- Temporal Version: 1.13.0,  SDK version 1.1.1


#### Comments (9)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-14 10:25:33.000 UTC</summary>

@mzavatsky thank you for the issue 👍 Yes, there is a problem with reset and we are working on it.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-05-19 18:02:47.000 UTC</summary>

As far as query deadline goes, you may have encountered this server issue which was recently fixed and not yet released: https://github.com/temporalio/temporal/issues/2363

Reactions: 👀 2

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-05-26 19:41:36.000 UTC</summary>

Hey @mzavatsky 👋🏻. What RR version are you using? 

</details>

<details>
<summary><strong>mzavatsky</strong> commented on 2022-05-27 10:15:32.000 UTC</summary>

> Hey @mzavatsky 👋🏻. What RR version are you using?

2.7.0 and 2.10.0 (we have two projects using temporal now)



</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-05-27 14:49:12.000 UTC</summary>

2.10.0 is fine, but 2.7.0 is reasonably outdated and unsupported.

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-30 11:41:51.000 UTC</summary>

@mzavatsky we have found a problem. It will be fixed this Thursday with a new RR release! 💪 Stay tuned 😉 

Reactions: 🎉 1

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-02 12:47:56.000 UTC</summary>

@mzavatsky please try to update RR to `v2.10.3` and sdk to `v1.3.2`. Hope, it will help you.

Reactions: 🚀 1

</details>

<details>
<summary><strong>mzavatsky</strong> commented on 2022-06-03 12:19:04.000 UTC</summary>

I've tried updated versions, everything looks good now.
Thank you very much!!!

Reactions: 👍 2 🎉 1

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-03 12:20:11.000 UTC</summary>

Great! 🎉 

</details>


---

<a id="98"></a>

### #98: [Bug] PHP 7.4 docblock anotations don't work (or documentation missing?)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/98 |
| **State** | CLOSED |
| **Author** | Rastusik (Martin Fris) |
| **Created** | 2021-04-13 10:12:27.000 UTC (4y 9m ago) |
| **Updated** | 2021-04-13 12:32:10.000 UTC |
| **Closed** | 2021-04-13 12:22:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 12 |
| **Priority Score** | 12 |
| **Labels** | Bug |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

Hi, I'm trying to run temporal-sdk with php 7.4 (which is minimum supported version according to composer.json), but the SDK is unable to parse my workflows because I'm not using PHP 8 style attributes, but older PHP 7.4 docblock style. 

**To Reproduce**
Steps to reproduce the behavior:
1. try to work with this workflow interface:
```
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

/**
 * @WorkflowInterface()
 */
interface SomeWorkflow
{
    /**
     * @return void
     * @WorkflowMethod(name="fork")
     */
    public function something();
}
```
4. When the workflow client tries to work with the mentioned worklfow, it throws this error: `Workflow class SomeWorkflow or one of his parents (i.e. class, interface or trait) must contain #[Temporal\Workflow\WorkflowInterface] attribute`

**Expected behavior**
Well, the attribute/annotation should be found if minimum supported PHP version is 7.4



#### Comments (12)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 11:37:15.000 UTC</summary>

Hello!
1) Do you install a `doctrine/annotations` driver for annotation work?
2) Attributes work on any version of PHP.

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 11:48:19.000 UTC</summary>

Hi, yes, I have `doctrine/annotations:^1.12` installed

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 11:53:29.000 UTC</summary>

Hmm, this is weird as this functionality has been tested by unit tests: https://github.com/temporalio/sdk-php/blob/master/tests/Unit/Declaration/DeclarationTestCase.php#L33

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 11:58:07.000 UTC</summary>

from what I've been able to find out it looks like the Spiral Attribute reader doesn't even use doctrine annotation reader

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 11:59:33.000 UTC</summary>

but the spiral FallbackAttributeReader is being used, and it looks lik it doesn't work properly... maybe there has to be a specific version of `spiral/attributes` installed?

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 12:04:10.000 UTC</summary>

> from what I've been able to find out it looks like the Spiral Attribute reader doesn't even use doctrine annotation reader

Used to read annotations if a dependency is installed: https://github.com/temporalio/sdk-php/blob/master/src/WorkerFactory.php#L299-L306

> but the spiral FallbackAttributeReader is being used, and it looks lik it doesn't work properly...

This is a PHP 8 "emulator" that allows you to read attributes on any version of the PHP.

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 12:07:25.000 UTC</summary>

btw I'm creating the Workflow client according to documentation: 
```
fn (): WorkflowClientInterface => WorkflowClient::create(
                ServiceClient::create($this->config->getTemporalHost())
            )
```

Maybe I should hack the dependencies somehow?

> Used to read annotations if a dependency is installed: https://github.com/temporalio/sdk-php/blob/master/src/WorkerFactory.php#L299-L306
> 

I haven't used the WorkerFactory yet, as the first step I'm trying to send a workflow to temporal, without any running workers



</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 12:10:54.000 UTC</summary>

shouldn't the same decision be made here? https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowClient.php#L57

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 12:12:09.000 UTC</summary>

> I haven't used the WorkerFactory yet, as the first step I'm trying to send a workflow to temporal, without any running workers

Yeah, I think I get it now. You are using only the client, and there is only support for attributes. We seem to have found the problem.

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 12:12:52.000 UTC</summary>

> shouldn't the same decision be made here?

Yeah! This is exactly the problematic section of the code.

Reactions: 🎉 1

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-13 12:31:10.000 UTC</summary>

Thanks for the feedback!

Fixed in [SDK 1.0.2+](https://github.com/temporalio/sdk-php/releases/tag/v1.0.2)

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-13 12:32:10.000 UTC</summary>

thanks for the prompt fix! :)

</details>


---

<a id="114"></a>

### #114: Use DateInterval instead of Carbon

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/114 |
| **State** | CLOSED |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2021-07-01 18:32:33.000 UTC (4y 6m ago) |
| **Updated** | 2023-07-11 12:50:56.000 UTC |
| **Closed** | 2023-07-11 12:50:56.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 5 |
| **Priority Score** | 11 |
| **Labels** | Feature |
| **Assignees** | seregazhuk |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

What's the reason to use `Carbon`?
It's slower than `DateInterval`. Very slower.

#### Comments (5)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-07-01 18:37:46.000 UTC</summary>

> It's slower than DateInterval. Very slower.

Can you please attach the benchmark results that you did?

</details>

<details>
<summary><strong>rauanmayemir</strong> commented on 2021-07-01 18:39:56.000 UTC</summary>

FWIW, I think the issue is not that it's slower, but that it would better serve everyone if the SDK used standard primitives.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-01 18:42:36.000 UTC</summary>

I do not think that Carbon leaks anywhere in user code, so it should be safe to optimize it in the future releases.

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-07-01 18:57:09.000 UTC</summary>

@rauanmayemir It is used internally. All public places are described by common `DateTimeInterface` and `DateInterval` classes and/or interfaces. Like this: https://github.com/temporalio/sdk-php/blob/master/src/Activity/ActivityOptions.php#L53

Approximately this difference in speed we will get when replacing "hot spots" with the native implementation (For example, sending the local temporal time to the server):
![image](https://user-images.githubusercontent.com/2461257/124176121-2932d680-dab7-11eb-8967-cae510c0fb81.png)

Now I will look at the rest of the "hot spots". To assess how critical the replacement is.

P.S. Yes, parsing time from the temporal server is 4 times longer:
![image](https://user-images.githubusercontent.com/2461257/124176960-4b792400-dab8-11eb-89c4-158bb222cb74.png)

And in theory we can win about `~0.00003s` per 1 i/o.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:50:56.000 UTC</summary>

Closing due to inactivity.

</details>


---

<a id="103"></a>

### #103: [Question] Sentry Integration for error logging

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/103 |
| **State** | OPEN |
| **Author** | khoerintus |
| **Created** | 2021-04-20 15:17:42.000 UTC (4y 8m ago) |
| **Updated** | 2023-09-01 12:12:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 11 |
| **Priority Score** | 11 |
| **Labels** | Feature, Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Is there any best practice to integrate temporal with sentry for error logging?
I know that I can use sentry php sdk, try catch in my code, and send the error.
But is there any global error handler that catch every error (from Workflow or Activity), so I can just send the error from there?
Or I can integrate roadrunner with sentry?

#### Comments (11)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-20 15:33:11.000 UTC</summary>

Good question. We did not provide a separate interceptor for errors, so you will have to override the transport to handle them, like:
```php
use Spiral\RoadRunner\Worker;
use Temporal\Worker\Transport\HostConnectionInterface;
use Temporal\WorkerFactory;

$worker = WorkerFactory::create()
    ->newWorker();

/// ...

$worker->run(new class implements HostConnectionInterface {
    public function error(\Throwable $e) { ... } // Intercept errors
});
```

I agree that this functionality should be added. But while it is not there, you will have to write your own transport decorator.

</details>

<details>
<summary><strong>khoerintus</strong> commented on 2021-04-20 15:46:48.000 UTC</summary>

Thanks @SerafimArts for the answer. I will try it later.

</details>

<details>
<summary><strong>khoerintus</strong> commented on 2021-04-22 12:19:39.000 UTC</summary>

Hi @SerafimArts , I've tried to write my own transport decorator and use it. But the error function is never called.

I found that Exception thrown in Workflow class, is caught in Temporal\Internal\Workflow\Process\start(),
and Exception thrown in Activity class, is caught in Temporal\Internal\Transport\Router\handle().
If I put the code to send the error to sentry in those functions, it sent successfully.

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-22 15:40:11.000 UTC</summary>

Yes, that's right. The example I showed only intercepts fatal SDK errors (e.g. errors connecting to the server), and all "business logic" errors inside Workflows and Activities are considered "normal work" and sent directly to the Temporal.

Hmmm... @mfateev perhaps it makes sense to add APM (Sentry, New Relic, Kibana, etc) support to the Temporal Server? This will allow to nicely structure such errors for all SDKs at once.

Reactions: 👍 1

</details>

<details>
<summary><strong>changwuf31</strong> commented on 2021-04-26 15:10:01.000 UTC</summary>

Meanwhile, what is the current solution if we want to use sentry for temporal and php sdk ?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-26 15:23:58.000 UTC</summary>

None. We are still thinking how would that look like. Most likely we can provide you hook entry point for activities, but not for the workflows as I don't think Sentry SDK can work in async mode.

</details>

<details>
<summary><strong>kozlice</strong> commented on 2021-07-05 15:55:06.000 UTC</summary>

I ran into the same issue, except I have multiple handlers in monolog (file log + Sentry). Doing a try-catch with logging & re-throwing inside an activity is not very convenient.

The proposal document mentions the idea of injecting a PSR-3-compatible logger into a worker: https://github.com/temporalio/proposals/blob/master/php/php-rr-sdk.md#logging Was it rejected or it's just not implemented yet?


</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-05 15:58:53.000 UTC</summary>

Not implemented due to the fact that you create activity classes manually, so you control injections to them.

The container refactor planned later this year, with some internal changes and optimizations, including the ability to intercept activity call (for exception catching or state resets).

P.S. Proposal does not cover all the functions from 1.0 of SDK and has some extra features kept for the later day. It was not 1-to-1 architecture plan.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-19 16:24:00.000 UTC</summary>

You can find an example of integration here: https://github.com/spiral/temporal-bridge/blob/master/src/InvokeActivityRouter.php

Essentially you can intercept the activity call and manipulate it with input or output parameters, or handle exceptions.

Reactions: 👍 1

</details>

<details>
<summary><strong>changwuf31</strong> commented on 2022-03-10 10:37:37.000 UTC</summary>

@wolfy-j :+1:  Superb, however it will be much better, if some of the sdk properties are made protected, so we can simply override the necessary functions.

</details>

<details>
<summary><strong>programmador</strong> commented on 2022-09-07 09:25:02.000 UTC</summary>

The link above is broken as that functionality was removed from temporal-bridge.
Anyway, [here](https://github.com/spiral/temporal-bridge/commit/2de00229c26e35a7cb83d7e6027270464ecbb996#diff-c6622530d00ec62cd9f77427ade1d89488623a20917ffa1066323dab91e460a9)'s how it looked like.
Though fully copying the whole WorkerFactory instead of just extending is redundant as for me. The only reason was to access `$this->queues` which is private. Accessing parent's private field is tricky, I've embraced [this library](https://github.com/ivastly/php-reflection).

And yes, this is really-really hacky, "don't do that at home".

BTW You may ask why was that functionality removed from temporal-bridge. The reason is introducing "finalizers" functionality which is enough for example for cleaning resources to avoid memory leaks but not enough for error handling as finalizers are working similar to `final` block after `try-catch`. So You cannot access errors in finalizers.

Reactions: 👀 1

</details>


---

<a id="213"></a>

### #213: [Feature Request] Add API reference

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/213 |
| **State** | CLOSED |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-27 00:30:54.000 UTC (3y 5m ago) |
| **Updated** | 2024-03-26 14:00:44.000 UTC |
| **Closed** | 2024-03-26 14:00:44.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 7 |
| **Priority Score** | 9 |
| **Labels** | enhancement |
| **Assignees** | msmakouz |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

I see the docs at https://docs.temporal.io/php/introduction/ but is there a structured list of functions etc that the package provides?

#### Comments (7)

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 12:03:12.000 UTC</summary>

Hey @lorensr 👋🏻 
Is this still actual? As far as I understand, there is no such docs for other SDKs, am I right?

</details>

<details>
<summary><strong>lorensr</strong> commented on 2023-09-01 15:42:28.000 UTC</summary>

It remains something I would find useful.

They do have them:
- http://t.mp/ts-api
- http://t.mo/py-api
- http://t.mp/go-api
- http://t.mp/java-api
- http://dotnet.temporal.io 

Reactions: 👍 3 👀 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 23:37:24.000 UTC</summary>

I think, for the PHP should be used phpdoc: https://www.phpdoc.org/

</details>

<details>
<summary><strong>lorensr</strong> commented on 2023-09-02 00:53:19.000 UTC</summary>

If you add a step to CI that uses phpdoc to generate html, I can add a step
that publishes it to php.temporal.io

On Fri, Sep 1, 2023 at 7:37 PM Valery Piashchynski ***@***.***>
wrote:

> I think, for the PHP should be used phpdoc: https://www.phpdoc.org/
>
> —
> Reply to this email directly, view it on GitHub
> <https://github.com/temporalio/sdk-php/issues/213#issuecomment-1703517360>,
> or unsubscribe
> <https://github.com/notifications/unsubscribe-auth/AAB5LGF6DVGVZN42ZXQTRODXYJWT7ANCNFSM54XYHYGA>
> .
> You are receiving this because you were mentioned.Message ID:
> ***@***.***>
>


Reactions: 👍 1

</details>

<details>
<summary><strong>josh-berry</strong> commented on 2024-03-14 22:02:52.000 UTC</summary>

@wolfy-j We'll soon have things set up for you to start publishing API docs once you're ready. To publish from CI, you just need to generate the docs and then:

```
npx vercel deploy path/to/generated/docs -t ${{ secrets.VERCEL_TOKEN }} --name php --scope temporal --prod --yes
```

(The token's already set in the repo secrets.)

Our IT folks just need to finish up a couple things to get the domain ready (hopefully will be done by the time you read this).

</details>

<details>
<summary><strong>rachfop</strong> commented on 2024-03-25 21:41:26.000 UTC</summary>

Looks like we can close this?
https://php.temporal.io/


</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-03-26 08:46:02.000 UTC</summary>

> Looks like we can close this? https://php.temporal.io/

Waiting merging https://github.com/temporalio/sdk-php/pull/408
The issue will be closed automatically

</details>


---

<a id="174"></a>

### #174: Process execution does not continue after await condition is satissfied (through signals)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/174 |
| **State** | CLOSED |
| **Author** | jcontesse |
| **Created** | 2022-05-23 22:05:30.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-09 17:54:39.000 UTC |
| **Closed** | 2022-06-09 15:25:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 9 |
| **Priority Score** | 9 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

I am trying to halt process execution until one of two condition are met.
These conditions are set by two distinct signals.

In general, everything works fine but in some cases (and it is often... maybe 10% of the cases), the signal is received and processed but the instance does not continue its execution. I have not been able to identify a pattern.

So I am waiting for the conditions like this:

`yield Workflow::await(fn() => !is_null($this->authorizationId) || $this->exitProcess);`

Waiting to execute one of these signals:

```
    public function workflowAuthorizationExecuted(int $taskId)
	{
		$this->authorizationId = $taskId;
	}

    public function indicationHasBeenSuspended()
	{
		$this->exitProcess = true;
	}
```
Maybe I am doing something wrong, but I find it strange that some instances work and some don't.
For those instances that don't work, even if I resend the signal nothing happens.
How can I make sure the instance is waiting in the "await" command?

I haven't been able to replicate in our DEV or QA environment. It is happening in production.
I have attached my workflow definition.

I am using docker under Alpine Linux v3.11.
- RR_VERSION: 2.8.4
- PHP_IMAGE_VERSION: 8.1.4-cli
- mysql:8
- temporalio/auto-setup:1.15.0
[AutorizarIndicacionWorkflow.php.txt](https://github.com/temporalio/sdk-php/files/8758303/AutorizarIndicacionWorkflow.php.txt)



#### Comments (9)

<details>
<summary><strong>jcontesse</strong> commented on 2022-05-24 15:10:17.000 UTC</summary>

This is my SDK version
```
{
    "require": {
        "spiral/roadrunner": "^2.8",
        "temporal/sdk": "^1.1",
        "nyholm/psr7": "^1.5"
    }
}
```

I see issue #170 has some similarities. I am not sure if this happens after a worker crashes.

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-24 15:52:10.000 UTC</summary>

@jcontesse can you try the latest SDK version? We have recently fixed similar issues with awaits and signals.

</details>

<details>
<summary><strong>jcontesse</strong> commented on 2022-05-30 23:17:44.000 UTC</summary>

So I am now using the following versions:

- PHP_IMAGE_VERSION: 8.1.4-cli
- mysql:8
- temporalio/auto-setup:1.15.0
- "spiral/roadrunner": "^2.10.1",
- "temporal/sdk": "^1.3",
- "nyholm/psr7": "^1.5"

I ran the process for almost a week but unfortunately today the same thing happened.
A couple of processes hanged after the signal was received with no apparent explanation.

It seems this started happening after one of the workers failed (not sure what happened). I have attached that instance's execution log.

Should I update temporal?
What other information can I gert in order to be more helpful?

[Worker Error.txt](https://github.com/temporalio/sdk-php/files/8800946/Worker.Error.txt)
.

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-01 08:07:58.000 UTC</summary>

ping @rustatian 
Maybe it relates to our worker fixes? 🤔 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-06-01 09:10:44.000 UTC</summary>

@jcontesse @seregazhuk Yeah, I guess so.  We will fix that in the RR `v2.10.3`.

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-02 12:47:33.000 UTC</summary>

@jcontesse please try to update RR to `v2.10.3` and sdk to `v1.3.2`. Hope, it will help you.

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-09 15:25:43.000 UTC</summary>

Closing due to no activity.

</details>

<details>
<summary><strong>jcontesse</strong> commented on 2022-06-09 17:53:28.000 UTC</summary>

It has been nearly one week running RR v2.10.3 and sdk v1.3.2 with no issues. It seems the issue has been fixed. We are still monitoring.

Reactions: 🎉 3

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-09 17:54:39.000 UTC</summary>

Great news! 🚀 

</details>


---

<a id="357"></a>

### #357: react/promise v3 doesn't work fine

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/357 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-10-03 20:56:37.000 UTC (2y 3m ago) |
| **Updated** | 2025-09-12 12:25:06.000 UTC |
| **Closed** | 2025-09-12 12:25:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

In order to ensure asynchronous operation of user workflows, coroutines are implemented in the SDK, which use promises. It is a standard situation when we reject them with internal exceptions, which in some branches may not be handled.
However, in the paradigm of react/promise v3, this is considered undesirable practice. Therefore, when a rejected promise is completed, in which there is no exception handler, the [`error_log()`](https://www.php.net/manual/function.error-log) function is called with the error text.

The side effects of such behavior are unpredictable, and it is currently impossible to disable it. 

The issue about unhandled exceptions may be fixed once react/promise has the ability to [set a permanent handler](https://github.com/reactphp/promise/pull/249#discussion_r1345436865), not a one-time one.

---

Thanks to the tests in roadrunner-temporal, other deviations from the normal operation of the SDK were detected. These tests have been partially transferred to the SDK (see #359).

Therefore, I suggest temporarily abandoning react/promise v3 since version 2.6.1 until a solution is found.

#### Comments (8)

<details>
<summary><strong>ruudk</strong> commented on 2025-05-18 16:41:36.000 UTC</summary>

Is there an update on this? I noticed that I had to downgrade react/promise on my project in order to install this SDK. And now I see all kind of `Implicitly marking parameter $x as nullable is deprecated` errors on PHP 8.4 that are fixed in v3 with https://github.com/reactphp/promise/pull/260. 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-18 21:47:56.000 UTC</summary>

React v3 still has several problems that prevent us from using it.

</details>

<details>
<summary><strong>ruudk</strong> commented on 2025-05-19 06:18:33.000 UTC</summary>

I read the issue https://github.com/temporalio/sdk-php/pull/359 but saw some follow up PR's, one that introduced a global rejection handler: https://github.com/reactphp/promise?tab=readme-ov-file#set_rejection_handler

Isn't this what was missing? 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-19 07:57:44.000 UTC</summary>

It's still [one-time](https://github.com/reactphp/promise/blob/5f80055cc21ba7bcd3989e4902061fc12e2bcc1d/src/Internal/RejectedPromise.php#L38) handler

</details>

<details>
<summary><strong>ruudk</strong> commented on 2025-05-19 10:56:47.000 UTC</summary>

Should there be a new issue to track this? I'm a bit surprised that the Temporal SDK has deprecations on PHP 8.4, which was released 6 months ago. 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-19 12:56:13.000 UTC</summary>

Regarding deprecations in the SDK, definitely create an issue 👍 . However, deprecations in dependencies should be tracked by the dependencies themselves.

</details>

<details>
<summary><strong>ruudk</strong> commented on 2025-05-19 13:09:40.000 UTC</summary>

Sure, but in this case, this SDK prevents installation of the latest major, so I think it would have been good if this project created that issue upstream. How else is it going to be fixed?

Reactions: 👍 2

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-19 13:47:52.000 UTC</summary>

Yes, it would be great to push the development of React/Promise. However, we still won't achieve the set goals, including those related to the [`@yield` annotation](https://github.com/orgs/reactphp/discussions/536).

Therefore, the most promising direction is to create a fork and maintain our own version of promises compatible with React. However, this is not a priority right now.

Reactions: 😕 1

</details>


---

<a id="224"></a>

### #224: Lazy connectivity for Temporal client and healthCheck

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/224 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:05:52.000 UTC (3y 5m ago) |
| **Updated** | 2024-04-08 19:48:20.000 UTC |
| **Closed** | 2024-04-08 19:48:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.0 |

#### Description

SDK should have a lazy and eager way to create a client and expose a healthcheck method

ref: https://github.com/temporalio/sdk-php/issues/223

#### Comments (8)

<details>
<summary><strong>wolfy-j</strong> commented on 2022-10-18 12:15:50.000 UTC</summary>

The SDK healthcheck goes though the already open client on RR side. A.k.a. it should aready work as expected and not create any excessive connections.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-11-17 01:42:38.000 UTC</summary>

Does PHP client support lazy and eager creation?
Does it call `getSystemInfo` on connection?
Is the gRPC health service exposed via the client?

We have all of that in the other SDKs.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-11-22 10:42:03.000 UTC</summary>

Not at the moment. We also don't have `dial()` routine in PHP, it happens inside underlyling C library.

@roxblnfk We will work on RFC based on https://github.com/temporalio/sdk-features/issues/45

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-12-13 09:11:35.000 UTC</summary>

With the release of 2.7.0, interceptor functionality will be introduced. Along with this, the [`SystemInfoInterceptor`](https://github.com/temporalio/sdk-php/blob/master/src/Client/Interceptor/SystemInfoInterceptor.php) is [added](https://github.com/temporalio/sdk-php/pull/320), which calls `getSystemInfo()` and `getCapabilities()` on the first client request.

This interceptor is not added by default, but we can do this - add `SystemInfoInterceptor` if the user has not specified their list of interceptors for client calls. If the user wants to disable the interceptor, they can simply pass an empty list.
@wolfy-j @Sushisource what do you think about this?


</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-12-13 09:52:59.000 UTC</summary>

Regarding gRPC HealthCheck - it's not supported by the PHP gRPC extension.
https://grpc.io/docs/guides/health-checking/#language-support

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-12-13 17:05:18.000 UTC</summary>

@bergundy do we expect HealthCheck mostly in Activity and WF pollers or client code as well? We do have health checks for all the pollers, but PHP does not have a BG check mechanism for clients.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-12-13 19:09:55.000 UTC</summary>

In other languages we have a lazy method to create a connection (client) that doesn't make any calls to the server, and an eager connection method that fails if `getSystemInfo` fails.
We also expose the gRPC heath service in the client for users that want to call that.

That's all I requested in this issue.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-12-13 19:22:47.000 UTC</summary>

Eager connect on demand (lazy) - done (in fact in PHP this is the default way how GRPC works)
getSystemInfo - done with 2.7

I think we are good there.

</details>


---

<a id="110"></a>

### #110: [Question] Injecting custom reader into worker factory.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/110 |
| **State** | CLOSED |
| **Author** | Zylius (Zigmas Satkevičius) |
| **Created** | 2021-05-18 14:36:34.000 UTC (4y 7m ago) |
| **Updated** | 2021-07-26 11:12:23.000 UTC |
| **Closed** | 2021-07-26 11:12:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | Feature |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

Hello,

Is there any way to inject a custom reader into WorkerFactory/Worker?

We're switching over to temporal and I'd like to register the old activities/workflows using our old logic for now and move over to Temporal attributes as new activites/workflows appear.

But it seems, cause of all the final classes the only way to do this would be to copy over the WorkerFactory completely.

Is this https://github.com/temporalio/sdk-php/issues/88 dealing with the same issue?

Thanks for help!

#### Comments (8)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-05-18 14:42:23.000 UTC</summary>

Can you elaborate? What are you trying to achieve? 

You have to manually register each activity, so you can pull it from any DI container.

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-05-18 19:01:12.000 UTC</summary>

Yes sure, here's an example:
``` php
#!/usr/bin/env php
<?php

use Temporal\WorkerFactory;

class SimpleWorker
{
    public function simpleActivityMethod(): string
    {
        return 'simple_string';
    }
}

$existingData = [
    SimpleWorker::class => [
        'methodNames' => [
            'simpleActivityMethod' => 'simpleMethod'
        ],
        'prefix' => 'simple_'
    ]
];

$factory = WorkerFactory::create();
$worker = $factory->newWorker();

// How do I register the activity, without PHP8 attributes, so that its info gets loaded from
// $existingData variable ? 
$worker->registerActivityImplementations(new SimpleWorker());

$factory->run();
```
And a more elaborate explanation:  lets say I'm adding an Activity object to a Worker using [registerActivityImplementations](https://github.com/temporalio/sdk-php/blob/master/src/Worker/Worker.php#L133). It reads the activity method groups, names and other info based on PHP 8 style attributes. Since the Worker is created using Worker Factory it has a fixed reader implementation (currently [SelectiveReader or AttributeReader](https://github.com/temporalio/sdk-php/blob/f53f1627f63fca73bd0e533831a8104bacd44309/src/DataConverter/JsonConverter.php#L214)).

Lets say I have the activity method names list and activity prefixes in some array parameter in my DI (not PHP8 style attributes). How do I force [ActivityReader](https://github.com/temporalio/sdk-php/blob/f53f1627f63fca73bd0e533831a8104bacd44309/src/Internal/Declaration/Reader/ActivityReader.php) to read it from the array parameter instead of the PHP8 attributes?

I was postulating that you could inject your own Reader instance into the WorkerFactory. But it's final and impossible. The only other two solutions I could think off would be:
1. Copying the whole WorkerFactory over to my application, so I could inject my own Reader.
2. Using Ocramius proxies  to create stub classes with PHP8 attributes generated.

Both of these solutions seem to have issues with maintenance and simplicity.

I'm doing this in order to let our `old style activities` remain the same, while registering them with temporal.We have lots of activites and adding attributes to each and every one would be bothersome. Though, if it can't be helped we will do it :)

I hope this is clearer, thank you!

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-05-21 10:52:57.000 UTC</summary>

We are talking internally about how to expose it easier for you. For now, I can recommend you to wrap activities.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-06-25 16:11:24.000 UTC</summary>

Can making Factory non final help you to solve your case for now?

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-06-28 11:35:02.000 UTC</summary>

Hello, sorry for the late reply,  missed the notification.

It definitely would! I would then be able to specify my own reader.

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-06-30 09:55:57.000 UTC</summary>

Just double checked it and found another issuue. I would also need 

```php
    /**
     * @return ReaderInterface
     */
    private function createReader(): ReaderInterface
    {
        if (\interface_exists(Reader::class)) {
            return new SelectiveReader([new AnnotationReader(), new AttributeReader()]);
        }

        return new AttributeReader();
    }
``` 

To be protected, to be able to override it and inject my own reader nicely. The best option of course would be if I could override the default reader with my own through constructor, just like it's done with DataConverter currently.

```php
    public static function create(
        DataConverterInterface $converter = null,
        RPCConnectionInterface $rpc = null
    ): WorkerFactoryInterface {
        return new self(
            $converter ?? DataConverter::createDefault(),
            $rpc ?? Goridge::create()
        );
    }
 ```


Proposed:

```php
    public static function create(
        DataConverterInterface $converter = null,
        RPCConnectionInterface $rpc = null,
        ReaderInterface $reader = null
    ): WorkerFactoryInterface {
        return new self(
            $converter ?? DataConverter::createDefault(),
            $rpc ?? Goridge::create(),
            $reader ?? self::createReader() // This method can be static since it doesn't use anything from the instance anyways.
        );
    }
 ```

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-01 10:50:35.000 UTC</summary>

We would gladly appreciate a PR for this issue :)

Reactions: 👍 1

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-07-01 11:22:39.000 UTC</summary>

Will do one ;) 

</details>


---

<a id="3"></a>

### #3: Is this SDK available in standalone without RoadRunner ?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/3 |
| **State** | CLOSED |
| **Author** | lerminou (Nicolas DUBUT) |
| **Created** | 2020-09-30 08:07:06.000 UTC (5y 3m ago) |
| **Updated** | 2021-01-29 15:34:54.000 UTC |
| **Closed** | 2021-01-29 15:34:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 🚀 1 |

#### Description

Hi,

I tried to clone the SDK in my project but I got a question.
I already have a stack in my company for PHP and I want to include Temooral server instead of RabbitMQ.
I want to directy send workflow or receive activities from PHP.

I know it's just the beginning of the SDK, but before to try some use-cases, I want to know if it will be compatible.

The example emulator works well, but when I tried to change the client endpoint to 'temporal:7233' (the available temporal server endpoint).
I got the following error:

I used the default docker-compose from temporal 1.0.0-rc1

```
Temporal.ERROR: Spiral\Goridge\Exception\ProtocolException: Can not read input stream, chunk must a type of string, but bool given in /var/www/directory/vendor/spiral/goridge/src/Protocol/Protocol.php:104 
Stack trace: #0 /var/www/directory/vendor/spiral/goridge/src/Protocol/Protocol.php(79): Spiral\Goridge\Protocol\Protocol->errorChunkType(false) 
#1 /var/www/directory/vendor/spiral/goridge/src/Protocol/Protocol.php(59): Spiral\Goridge\Protocol\Protocol->stream(2, Object(Closure)) 
#2 /var/www/directory/vendor/spiral/goridge/src/Protocol/Version1/Decoder.php(38): Spiral\Goridge\Protocol\Protocol->streamToString(17) 
#3 [internal function]: Spiral\Goridge\Protocol\Version1\Decoder->decode(Object(Spiral\Goridge\Protocol\Stream\Factory)) 
#4 /var/www/directory/vendor/spiral/goridge/src/Transport/Receiver/ResourceStreamReceiverTrait.php(40): Generator->send(false) 
#5 /var/www/directory/vendor/spiral/goridge/src/Transport/ReactReceiver.php(39): Spiral\Goridge\Transport\StreamReceiver->push(Object(Spiral\Goridge\Protocol\Stream\Factory), Object(Spiral\Goridge\Protocol), Resource id #56) 
#6 /var/www/directory/vendor/react/event-loop/src/StreamSelectLoop.php(245): Spiral\Goridge\Transport\ReactReceiver->Spiral\Goridge\Transport\{closure}(Resource id #56) 
#7 /var/www/directory/vendor/react/event-loop/src/StreamSelectLoop.php(212): React\EventLoop\StreamSelectLoop->waitForStreamActivity(NULL) 
#8 /var/www/directory/vendor/archemed/common-symfony/Worker.php(213): React\EventLoop\StreamSelectLoop->run() 
#9 /var/www/directory/vendor/archemed/common-symfony/RestartableExecutor.php(105): Temporal\Client\Worker->run('default') 
#10 /var/www/directory/public/client.php(45): Temporal\Client\RestartableExecutor->run() #11 {main} [] []
```

#### Comments (8)

<details>
<summary><strong>wolfy-j</strong> commented on 2020-09-30 08:17:37.000 UTC</summary>

Hi, this SDK is currently in active development and won't work without the Golang coordinator on RoadRunner.

Once the implementation complete, we will take a look at providing access to Temporal functions using native PHP SDK; however, the native client will only be capable of handling general API calls (i.e., StartWorkflow) and activity execution (using a blocking loop). 

Developing a workflow runner on PHP without the Golang coordinator is a challenging task and currently not on our roadmap. Since workflows state machines are generally well isolated from the rest of the codebase, you should be capable of embedding RoadRunner to your application without affecting the rest of the code.

We will provide an announcement when you'll be ready to use this SDK as Alpha build.

Reactions: 👍 3 🎉 2

</details>

<details>
<summary><strong>lerminou</strong> commented on 2020-09-30 08:42:44.000 UTC</summary>

OK i thought this SDK was in charge to handle RPC calls to Temporal with the proto interfaces or FFI to the go SDK, but it's more like a roadrunner plugin right ?
I don't have experiences with roadrunner, I will take a look, if it's easy to integrate

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2020-09-30 08:46:11.000 UTC</summary>

This SDK currently focuses on base primitives to handle workflow executions on PHP. It will operate as a standalone server as well as a RoadRunner plugin. RPC calls to Temporal will be included as well, but the scope of this function is much smaller than what we are trying to do. 

You can check the original proposal here: https://github.com/temporalio/proposals/blob/master/php/php-rr-sdk.md

Reactions: 👍 1

</details>

<details>
<summary><strong>sagikazarmark</strong> commented on 2020-10-27 11:29:26.000 UTC</summary>

While I like and generally agree with the approach, I think it would be a quick win to support launching new workflows from a PHP application without support for actually implementing workers in PHP.

I think a lot of users have polyglot applications where the primary API is implemented in PHP and some internal services are implemented in nodejs, python, Go, etc.

I haven't looked at the current SDK closely, so I don't know if this is already implemented, but I think it's a low-hanging fruit that would be worth prioritizing.

Edit: I guess that's what #4 is about.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2020-10-27 15:53:34.000 UTC</summary>

> I think it would be a quick win to support launching new workflows from a PHP application without support for actually implementing workers in PHP.

We are not planning to handle GRPC endpoints in this SDK but we do provide RoadRunner native RPC. Please sit tight, we are entering into assembly part of this SDK, I hope to provide working Aplha very soon.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-01-14 19:16:01.000 UTC</summary>

Update: a recent version of WorkflowService uses GRPC and does not require RoadRunner to work (but it does require php-grpc extension), you can launch workflows from legacy codebases. Activities and workflows will require a supervisor.

</details>

<details>
<summary><strong>lerminou</strong> commented on 2021-01-14 21:13:59.000 UTC</summary>

Hi. Thanks for the update. 
For now I'm using the temporal proto compiled to php too.
I released a composer package to perform the same work. You're free to use it if you want. https://github.com/lerminou/temporal-api

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-01-15 08:38:51.000 UTC</summary>

Hi,

we are using additional (generated) mapping at top of the default GRPC client to improve it's usability. Our additions:
1) Java-like Workflow and Activity clients
2) Retries and Timeouts
3) Isolated and typed interface for the service client instead of native `GRPC->wait()[0]`

</details>


---

<a id="625"></a>

### #625: [Bug] Incorrect timer cancellation when workflow worker is down

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/625 |
| **State** | CLOSED |
| **Author** | faim87 |
| **Created** | 2025-06-05 07:59:21.000 UTC (7 months ago) |
| **Updated** | 2025-08-12 18:23:20.000 UTC |
| **Closed** | 2025-07-21 13:50:09.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 5 |
| **Priority Score** | 7 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.15.1 |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

We recently discovered an interesting behavior related to cancelling a workflow with an active timer.

1. A workflow with a 10-second timer is started.
2. Another workflow is triggered that causes the worker to restart (due to a memory leak).
3. We attempt to cancel the first workflow (while the worker is still down).

If the worker is restarted at the moment the cancellation request is made for a workflow with a timer, the timer does not get cancelled. In the Temporal UI, the following error appears:
` Workflow Task Failed: BadCancelTimerAttributes: invalid history builder state for action: add-timer-canceled-event, TimerID: 5`
After the worker restarts, the workflow with the timer remains in the Running state until the WorkflowExecutionTimeout is reached. This behavior seems incorrect.
The expected behavior would be for the cancellation attempt to be retried after the error, or for the entire workflow to fail with an error.

### Environment/Versions

Temporal: 1.26.2
 PHP: 8.2
 Roadrunner: 2024.3.5
 Symfony: 6.4
 temporal-sdk: 2.13.4

### Minimal Reproduction

**TimerWorkflow.php**

```php
<?php

declare(strict_types=1);

namespace App\Command\MemoryLeak\Workflow;

use Temporal\DataConverter\Type;
use Temporal\Workflow;
use Temporal\Workflow\ReturnType;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
final class TimerWorkflow
{
    #[WorkflowMethod('timer')]
    #[ReturnType(Type::TYPE_STRING)]
    public function expire(): \Generator
    {
        yield Workflow::timer(10);

        return yield 'Timer';
    }
}
```

**MemoryLeakWorkflow.php**

```php
<?php

declare(strict_types=1);

namespace App\Command\MemoryLeak\Workflow;

use Temporal\DataConverter\Type;
use Temporal\Workflow\ReturnType;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
final class MemoryLeakWorkflow
{
    #[WorkflowMethod('memory-leak')]
    #[ReturnType(Type::TYPE_STRING)]
    public function create(): \Generator
    {
        $arr = [];
        while (true) {
            $arr[] = 'test test test test test';
        }

        return yield 'memory-leak';
    }
}
```

**RunTimerCommand.php**

```php
<?php

declare(strict_types=1);

namespace App\Command\MemoryLeak;

use App\Command\MemoryLeak\Workflow\MemoryLeakWorkflow;
use App\Command\MemoryLeak\Workflow\TimerWorkflow;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Temporal\Client\WorkflowClientInterface;
use Temporal\Client\WorkflowOptions;
use Temporal\Common\IdReusePolicy;

#[AsCommand(name: 'dev:memory-leak-timer')]
final class RunTimerCommand extends Command
{
    public function __construct(
        private readonly WorkflowClientInterface $workflowClient,
    ) {
        parent::__construct();
    }

    protected function configure(): void {}

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $workflow1 = $this->workflowClient->newWorkflowStub(
            TimerWorkflow::class,
            WorkflowOptions::new()
                ->withWorkflowId('timer')
                ->withTaskQueue('default')
                ->withWorkflowIdReusePolicy(IdReusePolicy::AllowDuplicate)
                ->withWorkflowRunTimeout(20)
                ->withWorkflowExecutionTimeout(30),
        );

        $workflow2 = $this->workflowClient->newWorkflowStub(
            MemoryLeakWorkflow::class,
            WorkflowOptions::new()
                ->withWorkflowId('memory-leak')
                ->withTaskQueue('default')
                ->withWorkflowIdReusePolicy(IdReusePolicy::AllowDuplicate)
                ->withWorkflowRunTimeout(20)
                ->withWorkflowExecutionTimeout(30),
        );

        $this->workflowClient->start($workflow1);
        $io->success('Timer started');

        $this->workflowClient->start($workflow2);
        $io->success('MemoryLeak started');

        $runningTimerWorkflow = $this->workflowClient->newUntypedRunningWorkflowStub('timer');
        $runningTimerWorkflow->cancel();
        $io->success('Timer canceled');

        return Command::SUCCESS;
    }
}
```



#### Comments (5)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-06-10 17:18:06.000 UTC</summary>

Also reproduced on [RR v2024.1.5](https://github.com/roadrunner-server/roadrunner/releases/tag/v2024.1.5) (Jun 20, 2024), [SDK v2.10.3](https://github.com/temporalio/sdk-php/releases/tag/v2.10.3) (Jul 5, 2024), Tempora CLI: [v1.0.0](https://github.com/temporalio/cli/releases/tag/v1.0.0) (Aug 6, 2024).

[reproduce.zip](https://github.com/user-attachments/files/20677099/reproduce.zip)

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-07 10:04:40.000 UTC</summary>

Should be fixed in the next RoadRunner release this Thursday

Reactions: ❤️ 2

</details>

<details>
<summary><strong>faim87</strong> commented on 2025-07-21 08:41:22.000 UTC</summary>

@roxblnfk I just wanted to check if there are any updates regarding Roadrunner. It doesn’t seem to have been updated yet.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-21 11:11:20.000 UTC</summary>

Hi. The problem turned out to be a bit deeper, so we postponed the RR release. I hope to come back with good news soon.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-08-05 07:55:15.000 UTC</summary>

@faim87 hi.
Did the latest patch solve the problem 100%?

</details>


---

<a id="577"></a>

### #577: [Bug] Can't run the tests of UpdateMethod

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/577 |
| **State** | OPEN |
| **Author** | agpopov (Alexander) |
| **Created** | 2025-03-03 13:46:57.000 UTC (10 months ago) |
| **Updated** | 2025-12-20 14:49:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello, I want to test UpdateMethod in workflow. But I get an error:

```
AssertionError: assert($result !== null)
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:128
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:89
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:75
/var/www/html/vendor/temporal/sdk/src/Internal/Client/WorkflowProxy.php:112
/var/www/html/tests/Workflows/UploadFileWorkflowTest.php:83
```

At the same time, the signal and jquery tests are working fine.

Here is the test code:

```php
public function testCanSaveFileData(): void
    {
        $this->testService->lockTimeSkipping();

        $arguments = [
            'path' => $this->faker()->filePath(),
            'original_name' => $this->faker()->word(),
            'extension' => $this->faker()->fileExtension(),
            'size' => $this->faker()->numberBetween(),
            'is_image' => $this->faker()->boolean(),
        ];

        $file = File::factory()->make($arguments);

        $workflow = $this->workflowClient->newWorkflowStub(UploadFileWorkflow::class);
        $run = $this->workflowClient->start($workflow);

        $this->assertEquals(WorkflowExecutionStatus::Running, $run->describe()->info->status);

        $result = $workflow->saveTempFileData(new SaveFileDataArguments($arguments));

        $this->assertEquals($file->id, $run->describe()->info->searchAttributes->getValue('FileId'));
        $this->assertEquals($file->toArray(), $result['data']);

        $this->testService->unlockTimeSkipping();
    }
```

I tried calling UpdateMethod via `update` and `startUpdate`. the result is exactly the same



#### Comments (7)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-03 14:17:59.000 UTC</summary>

Related with https://github.com/temporalio/sdk-php/pull/526

> This situation can occur when the Workflow neither accepts nor rejects the Update due to:
> - No available workers
> - Workflow Task fails in the same tick

</details>

<details>
<summary><strong>agpopov</strong> commented on 2025-03-03 15:00:51.000 UTC</summary>

Unfortunately, I've already checked this. The workers are running, and workflow is not crashing.

Here is the config:

```yaml
version: "3"

rpc:
  listen: ${TEMPORAL_TESTING_HOST:-tcp://127.0.0.1:6001}

server:
  command: "php worker.php"

temporal:
  address: ${TEMPORAL_ADDRESS:-127.0.0.1:7233}
  activities:
    num_workers: 2

logs:
  level: info
  channels:
    server:
      mode: debug
      output: worker.log

kv:
  testing:
    driver: memory
    config:
      interval: 10
```

Here is the worker's code:

```php

require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';

$app->make(Kernel::class)->bootstrap();

$factory = WorkerFactory::create(
    rpc: new Goridge(Relay::create(config('testing.temporal.host'))),
    activityCache: RoadRunnerActivityInvocationCache::create()
);

$worker = $factory->newWorker(
    taskQueue: config('testing.temporal.queue'),
    interceptorProvider: new SimplePipelineProvider(
        app(InterceptorCollection::class)->toArray(),
    ),
);

$worker->registerWorkflowTypes(...config('orchestrator.temporal.workflows'));

foreach (config("orchestrator.temporal.activities", []) as $activityType) {
    $worker->registerActivity($activityType, fn(ReflectionClass $class) => app($class->getName()));
}

$factory->run();

error_log('stop worker');
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-03 15:37:07.000 UTC</summary>

> `$this->testService->lockTimeSkipping();`

Are you using the Test Server? Does it already support updates?

</details>

<details>
<summary><strong>agpopov</strong> commented on 2025-03-03 17:21:26.000 UTC</summary>

I use the TestService in the base TestCase class
```php
 $temporalAddress = getenv('TEMPORAL_ADDRESS') ?: '127.0.0.1:7233';
 $this->testService = TestService::create($temporalAddress);
```

I'm running the test server through Environment
```php
use Temporal\Testing\Environment;

require getcwd().'/vendor/autoload.php';

if (env('TEMPORAL_TESTING_ENABLED') === true) {
    $environment = Environment::create();
    $environment->start(
        rrCommand: './rr serve -d -c '.__DIR__.'/.rr.yaml -w '.__DIR__
    );
    register_shutdown_function(fn() => $environment->stop());
}
```

And how can I find out that the test server supports updates? I didn't find it in the documentation.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-04 11:28:33.000 UTC</summary>

> And how can I find out that the test server supports updates? I didn't find it in the documentation.

This is not in the documentation. The temporal-test-server is taken from the [release artifacts of the JAVA SDK](https://github.com/temporalio/sdk-java/releases). You can track release notes and issues.

Try the [dev-server](https://github.com/temporalio/sdk-php#temporal-cli). There is no timeskipping but it works with the most Temporal features

</details>

<details>
<summary><strong>jmortlock</strong> commented on 2025-03-24 07:07:20.000 UTC</summary>

I'm also hitting the same (or similar) problem when trying to write some tests for updates on a workflow.

Looks like "test-server" has support for update: https://github.com/temporalio/sdk-java/issues/1742

I either hit a `Temporal\Exception\DestructMemorizedInstanceException` exception or if i disable the DestroyWorkflow process than I get a timeout.

I've added debug code to the Workflow update method which shows its working nicely, it just never gets returned.


</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 14:49:57.000 UTC</summary>

@agpopov @jmortlock is there a reproducer?

</details>


---

<a id="261"></a>

### #261: [Bug] Child async cancellation cancels the parent scope

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/261 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-10-26 06:47:05.000 UTC (3y 2m ago) |
| **Updated** | 2023-07-11 12:33:28.000 UTC |
| **Closed** | 2023-07-11 12:33:27.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### What are you really trying to do?

Having two nested asyncs I'm trying to cancel a child.

### Describe the bug

I have two nested asyncs, want to cancel the child  and continue the parent. But once the child is cancelled, the parent scope also becomes cancelled and thus any `timer` or activity call leads to `CancelFailure` error with `Attempt to send request to cancelled scope`.

### Minimal Reproduction

Workflow code:
```php
#[WorkflowMethod(name: 'test')]
public function execute() {
    $parent = Workflow::async(
        function () {
            $child = Workflow::async(
                function () {
                    yield Workflow::timer(123);
                }
            );
            $child->cancel();
            yield Workflow::timer(456); // Fails here with "Attempt to send request to cancelled scope"
        }
    );

    yield $parent;
}
```
### Environment/Versions

- Temporal Version: 1.16
- SDK version: 2.2.1


#### Comments (3)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-11-03 07:39:12.000 UTC</summary>

Or maybe it is expected behaviour? But looks weird.

```php
#[WorkflowInterface]
class TestWorkflow
{
    #[WorkflowMethod(name: 'test')]
    public function execute()
    {
        $promise = Workflow::async(
            function () {
                yield Workflow::timer(5);
            }
        );

        yield Workflow::timer(1);
        $promise->cancel();

        // This call fails. Any activity calls or timers (any requests) will fail.
        // The parent scope of a cancelled async is also marked as cancelled.
        yield Workflow::timer(1);
    }
}
```

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-11-03 11:33:43.000 UTC</summary>

But, if I start one more async (even empty) after cancelling one - everything works 🤯 

```php
#[WorkflowInterface]
class TestWorkflow
{
    #[WorkflowMethod(name: 'test')]
    public function execute()
    {
        $promise = Workflow::async(
            function () {
                yield Workflow::timer(5);
            }
        );

        yield Workflow::timer(1);
        $promise->cancel();

        Workflow::async(function () {});
        
        // This way it works and doesn't fail
        yield Workflow::timer(1);
    }
}
```

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:33:27.000 UTC</summary>

This example missing proper Try Catch, child workflow will throw an exception from it of type CancellationFailure. This is the expected behavior when you don't handle the error.

Reactions: 👍 1

</details>


---

<a id="39"></a>

### #39: about connection refuse in tcp://127.0.0.1:6001

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/39 |
| **State** | CLOSED |
| **Author** | ru90 |
| **Created** | 2021-01-13 11:46:55.000 UTC (4y 12m ago) |
| **Updated** | 2021-02-03 15:42:17.000 UTC |
| **Closed** | 2021-02-03 15:42:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

when tried to execute workflow I got error that "enable to establish connection with tcp://127.0.0.1:6001"

#### Comments (7)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-01-13 17:04:29.000 UTC</summary>

Lack of connection means that you are running the workflow outside the supervisor's environment: https://github.com/temporalio/roadrunner-temporal

</details>

<details>
<summary><strong>ru90</strong> commented on 2021-01-13 17:27:34.000 UTC</summary>

how to run this alongside with temporal. I include this php temporal in my laravel project

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-01-13 17:31:57.000 UTC</summary>

You should wait for the beta/release and then use the documentation: https://docs.temporal.io/docs/php-sdk-overview

Or compile the supervisor from the master branch: https://github.com/temporalio/roadrunner-temporal He will do the work of starting the workflow and/or activities using PHP Worker configuration.

Reactions: 👍 1

</details>

<details>
<summary><strong>ru90</strong> commented on 2021-01-20 04:52:04.000 UTC</summary>

> You should wait for the beta/release and then use the documentation: https://docs.temporal.io/docs/php-sdk-overview
> 
> Or compile the supervisor from the master branch: https://github.com/temporalio/roadrunner-temporal He will do the work of starting the workflow and/or activities using PHP Worker configuration.

I tried it by built it but got built error regarding versioning. error also it( https://github.com/temporalio/roadrunner-temporal)seems to be is development phase

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-01-20 08:24:41.000 UTC</summary>

Hi, we currently wait for go-sdk release since we did few internal changes. It should be available for test within a week or so.

Reactions: 👍 2

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-01-20 09:16:45.000 UTC</summary>

If you are familiar with Golang you can test it by yourself.

Go to https://github.com/temporalio/roadrunner-temporal 
Download go-sdk **master** and make sure that go.mod points to it https://github.com/temporalio/roadrunner-temporal/blob/master/go.mod#L22

Then you can follow the test instructions. If tests pass - you can build a file in the cmd directory and use .rr.yaml to run your workflows and activities.

Obviously, we will try to make it as easy as possible after finishing the release. With no need to build anything, we plan RR to include Temporal by default and be downloadable via composer.

However, you still need to make sure to install the GRPC extension to PHP in order to use the Temporal SDK client (which can work without host process).

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-02-01 20:40:35.000 UTC</summary>

Hi, you can find working samples and instructions here: https://github.com/temporalio/samples-php

Reactions: 👍 1

</details>


---

<a id="495"></a>

### #495: [Discussion] Define a backwards compatibility promise

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/495 |
| **State** | OPEN |
| **Author** | Nyholm (Tobias Nyholm) |
| **Created** | 2024-08-25 20:19:59.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-01 18:24:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Is your feature request related to a problem? Please describe.

I started to use Temporal a few months ago and I really like it and this SDK. I think you (the maintainers and community) have done an excellent job and I am impressed by many things. The use of Generators in `Scope::next()` is genius. 

I am doing a private Symfony bundle around this package and I've found it a little difficult to work with. 

### Issue 1

We break backwards compatibility between releases. Here are some examples, but there are many more. 

#### 2.9.0

- `Temporal\Client\ScheduleClient::getHandle()` changed signature. 
- `Temporal\Client\ServerCapabilities` was removed in a way that breaks BC. 
- `Temporal\Client\WorkflowExecutionHistory` was moved to `Temporal\Client\Workflow\WorkflowExecutionHistory`
- `Temporal\Client\WorkflowClient` have many methods changing their signatures. 

#### 2.10.0

- `Temporal\Activity\ActivityCancellationType` was converted to enum
- `Temporal\Workflow\ChildWorkflowCancellationType` was converted to enum
- `Temporal\Activity\ActivityOptions::withCancellationType()` has changed signature
- `Temporal\Worker\ChildWorkflowCancellationType` was removed in a way that breaks BC. 

### Issue 2

We have a bunch of classes in the `internal` namespace. I suggest all of them should be marked with `@internal` for better IDE support. But I also see parts of our public API returning internal classes. Example: 

`Temporal\Worker\Worker::getWorkflows(): RepositoryInterface`

## Describe the solution you'd like

I would like us, staring with the next minor release, to follow BC very strictly. I suggest to write down a BC promise what it means for us and what third party libraries and application authors can expect from us. Ie, we don't need to be super generous, but we need to be predictable. 

## Additional context

There is no secret that I am a big fan of [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html). In the best of all worlds, I think we should follow the same promise. Just write a statement in our readme that we follow the same practices. 

There is also the [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck) that will check for any BC breaks as part of the CI workflow. 


#### Comments (6)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-08-26 14:23:51.000 UTC</summary>

Hi.

Regarding Issue 1:

I checked your comments on BC between minor releases. Am I correct in understanding that they were obtained automatically using [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck)?

2.9.0
- `Temporal\Client\ScheduleClient::getHandle()` changed signature.
  Final class, signature changed without breaking usage.
- `Temporal\Client\ServerCapabilities` was removed in a way that breaks BC.
  Moved to another location with an alias to the old class.
- `Temporal\Client\WorkflowExecutionHistory` was moved to `Temporal\Client\Workflow\WorkflowExecutionHistory`
  Alias to the old class is present.
- `Temporal\Client\WorkflowClient` has many methods changing their signatures.
  Signatures changed without breaking usage.
  ⚠️ **Class is not final, should be made `@final`.**

2.10.0
- `Temporal\Activity\ActivityCancellationType` was converted to enum
  Was a final class, constants not affected.
- `Temporal\Workflow\ChildWorkflowCancellationType` was converted to enum
  Was a final class, constants not affected.
- `Temporal\Activity\ActivityOptions::withCancellationType()` has changed signature
  Type extended, does not affect usage.
  ⚠️ **Class is not final, should be made `@final`.**
- `Temporal\Worker\ChildWorkflowCancellationType` was removed in a way that breaks BC.
  Made an alias, as it was a duplicate.

If we pay attention to the presence of aliases for removed classes or the previous work done with the marshaller, it becomes clear that we strive to adhere to semver and maintain backward compatibility where possible, without making various promises.

If we strictly follow [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html), I'm afraid the PHP SDK code might become legacy-laden, and we won't be able to provide functionality on par with other SDKs.
Moreover, there are things that may look like breaking changes but are not considered as such in the context of the SDK. This includes configuration classes and API gateway interfaces to Temporal, which may and will change their signatures. We expect that these interfaces will not be inherited or implemented by the user (such as ActivityOptions, WorkflowClientInterface, WorkflowClient, etc).
At the same time, interceptor interfaces are also supplemented with new functions, but they come with traits that must be used in user implementations.

Perhaps we should consider marking classes/interfaces as risky for extension/implementation.

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-08-26 18:03:00.000 UTC</summary>

> I checked your comments on BC between minor releases. Am I correct in understanding that they were obtained automatically using [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck)?

No, most of them were obtained by my Symfony Bundle's CI started to fail. Then I looked at the diff and found some more to give some examples in this issue. 

-------

> Moved to another location with an alias to the old class.

I saw that it was an attempt, but it was incorrectly done. 

> Was a final class, constants not affected.

What if I have instantiated that class? Then it would break if the class was removed. 

---------

> If we strictly follow [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html), I'm afraid the PHP SDK code might become legacy-laden, and we won't be able to provide functionality on par with other SDKs.

With all respect, I think you are wrong. There are always a way forward with keeping BC, but the "effort" might not be worth it. In such cases, write a good UPGRADE.md and tag a new major release. We wont run out of integers. =)


> Perhaps we should consider marking classes/interfaces as risky for extension/implementation.

Yes, I believe so. We want to be helpful to all users of this SDK, that means we must be predictable. If I use an `@internal` class or extend a class marked with `@final`, then I only have myself to blame. 

If we dont want to adjust how we do code changes, then this issue can be solved with documentation/comments only. But maybe some adjustments are needed. 

**Suggestion**: We add the BC promise CI job, that will make (too many) comments on each PR. These can then be discussed and fixed/ignored.  

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-08-26 19:52:31.000 UTC</summary>

> I saw that it was an attempt, but it was incorrectly done.

What do you mean? May be it should be fixed?

> What if I have instantiated that class? Then it would break if the class was removed.

In the case of a DTO or another working class, this would make sense, but in the case of an enum class, it looks like this:
![image](https://github.com/user-attachments/assets/2d439774-8a07-4cb0-a768-c1738284ce23) 😃 

> write a good UPGRADE.md and tag a new major release. We wont run out of integers. =)

If it were that simple, the SDK would already be at version 4.x. 🤔 

> Suggestion: We add the BC promise CI job, that will make (too many) comments on each PR. These can then be discussed and fixed/ignored.

Sounds good 👍 Would you like to take this on? I'll return to working on the SDK next week.

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-08-26 20:17:02.000 UTC</summary>

> What do you mean? May be it should be fixed?

If we want to move a class. we need to make sure the old class is still working. That means as extend, instantiate, return values etc. 
I can make a PR and we can discuss the details there. 

> In the case of a DTO or another working class, 

Haha, yes. You are correct, but it is still a BC break. 

> If it were that simple, the SDK would already be at version 4.x. 🤔

That is fine. There is no harm in that. The most important thing is to be predictable and it should always work for all weird use cases. There is no gold medal if you keep version 2.x for 10 years. 

> Would you like to take this on?

Sure, I would be happy to. 

Reactions: 👍 2

</details>

<details>
<summary><strong>root-aza</strong> commented on 2024-09-01 17:37:20.000 UTC</summary>

> I am doing a private Symfony bundle around this package and I've found it a little difficult to work with.

@Nyholm hi. Why weren't you happy with this decision?

https://github.com/VantaFinance/temporal-bundle 

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-09-01 18:23:59.000 UTC</summary>

That looks like a nice bundle. 

We (the company I work for) started our own Symfony bundle back in 2021 and we are doing a lot of custom stuff that does not make sense to open source. 

If we were just starting our Temporal journey we should definitely consider that bundle. 

Reactions: 👍 2

</details>


---

<a id="328"></a>

### #328: [Bug] DataConverter type named "null" is not a valid type name

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/328 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2023-07-09 15:37:11.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-12 11:06:00.000 UTC |
| **Closed** | 2023-07-12 11:06:00.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 4 |
| **Priority Score** | 6 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

DataConverter not supported types: null, true, false 

stackTrace:

```json
{
    "message": "Type named \"null\" is not a valid type name",
    "source": "PHP_SDK",
    "stackTrace": "Temporal\\Exception\\DataConverterException: Type named \"null\" is not a valid type name in /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:190\nStack trace:\n#0 /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php(158): Temporal\\DataConverter\\JsonConverter->errorInvalidTypeName(Object(Temporal\\DataConverter\\Type))\n#1 /var/www/api/src/Infrastructure/Temporal/DataConverter/SymfonySerializerDataConverter.php(54): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/www/api/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53): App\\Infrastructure\\Temporal\\DataConverter\\SymfonySerializerDataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#3 /var/www/api/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(80): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#4 /var/www/api/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(169): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(ReflectionNamedType))\n#5 /var/www/api/vendor/react/promise/src/FulfilledPromise.php(28): Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#6 /var/www/api/vendor/react/promise/src/Promise.php(134): React\\Promise\\FulfilledPromise->then(Object(Closure), NULL)\n#7 /var/www/api/vendor/react/promise/src/Promise.php(168): React\\Promise\\Promise::React\\Promise\\{closure}(Object(React\\Promise\\FulfilledPromise))\n#8 /var/www/api/vendor/react/promise/src/Promise.php(231): React\\Promise\\Promise->settle(Object(React\\Promise\\FulfilledPromise))\n#9 /var/www/api/vendor/react/promise/src/Deferred.php(36): React\\Promise\\Promise::React\\Promise\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#10 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php(137): React\\Promise\\Deferred->resolve(Object(Temporal\\DataConverter\\EncodedValues))\n#11 /var/www/api/vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php(47): Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()\n#12 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(278): Temporal\\WorkerFactory->emit('tick')\n#13 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(393): Temporal\\WorkerFactory->tick()\n#14 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n%\\x08\\xACF* \\n\\x1E\\n\\x16\\n\\x08en...', Array)\n#15 /var/www/api/src/Infrastructure/Temporal/UI/Cli/WorkerCommand.php(37): Temporal\\WorkerFactory->run()\n#16 /var/www/api/vendor/symfony/console/Command/Command.php(312): App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#17 /var/www/api/vendor/symfony/console/Application.php(1040): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 /var/www/api/vendor/symfony/framework-bundle/Console/Application.php(88): Symfony\\Component\\Console\\Application->doRunCommand(Object(App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 /var/www/api/vendor/symfony/console/Application.php(314): Symfony\\Bundle\\FrameworkBundle\\Console\\Application->doRunCommand(Object(App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 /var/www/api/vendor/symfony/framework-bundle/Console/Application.php(77): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#21 /var/www/api/vendor/symfony/console/Application.php(168): Symfony\\Bundle\\FrameworkBundle\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#22 /var/www/api/vendor/symfony/runtime/Runner/Symfony/ConsoleApplicationRunner.php(54): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#23 /var/www/api/vendor/autoload_runtime.php(29): Symfony\\Component\\Runtime\\Runner\\Symfony\\ConsoleApplicationRunner->run()\n#24 /var/www/api/bin/console(11): require_once('/var/www/api/ve...')\n#25 {main}",
    "cause": null,
    "applicationFailureInfo": {
        "type": "Temporal\\Exception\\DataConverterException",
        "nonRetryable": false,
        "details": null
    },
    "failureInfo": "applicationFailureInfo"
}

```



### Minimal Reproduction

```php
<?php

#[Activity]
final readonly class VantaBankNotificationActivityHandler implements VantaBankLoanNotificationActivity
{
    public function __construct(
        private LoanNotificationClient $client
    ) {
    }


    /**
     * @throws ClientException
     */
    #[ActivityMethod]
    public function notify(Uid $id, LoanEventType $event, \DateTimeImmutable $date): null
    {
        $this->client->dispatchEvent($id, $event, $date);

        return null;
    }
}
```




### Environment/Versions
- Sdk versions 2.5.1

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (4)

<details>
<summary><strong>root-aza</strong> commented on 2023-07-12 06:44:07.000 UTC</summary>

Hi. problem still exists. 

composer.lock

![Screenshot 2023-07-12 at 13 43 32](https://github.com/temporalio/sdk-php/assets/13816704/5b1759f4-1142-4da1-a070-8a9ac9e8f8e9)


```json
{
  "message": "Type named \"null\" is not a valid type name",
  "source": "PHP_SDK",
  "stackTrace": "Temporal\\Exception\\DataConverterException: Type named \"null\" is not a valid type name in /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:190\nStack trace:\n#0 /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php(158): Temporal\\DataConverter\\JsonConverter->errorInvalidTypeName(Object(Temporal\\DataConverter\\Type))\n#1 /var/www/api/src/Infrastructure/Temporal/DataConverter/SymfonySerializerDataConverter.php(53): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/www/api/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53): App\\Infrastructure\\Temporal\\DataConverter\\SymfonySerializerDataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#3 /var/www/api/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(80): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#4 /var/www/api/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(169): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(ReflectionNamedType))\n#5 /var/www/api/vendor/react/promise/src/FulfilledPromise.php(28): Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#6 /var/www/api/vendor/react/promise/src/Promise.php(134): React\\Promise\\FulfilledPromise->then(Object(Closure), NULL)\n#7 /var/www/api/vendor/react/promise/src/Promise.php(168): React\\Promise\\Promise::React\\Promise\\{closure}(Object(React\\Promise\\FulfilledPromise))\n#8 /var/www/api/vendor/react/promise/src/Promise.php(231): React\\Promise\\Promise->settle(Object(React\\Promise\\FulfilledPromise))\n#9 /var/www/api/vendor/react/promise/src/Deferred.php(36): React\\Promise\\Promise::React\\Promise\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#10 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php(137): React\\Promise\\Deferred->resolve(Object(Temporal\\DataConverter\\EncodedValues))\n#11 /var/www/api/vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php(47): Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()\n#12 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(278): Temporal\\WorkerFactory->emit('tick')\n#13 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(393): Temporal\\WorkerFactory->tick()\n#14 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n%\\x08\\xAAF* \\n\\x1E\\n\\x16\\n\\x08en...', Array)\n#15 /var/www/api/src/Infrastructure/Temporal/UI/Cli/WorkerCommand.php(37): Temporal\\WorkerFactory->run()\n#16 /var/www/api/vendor/symfony/console/Command/Command.php(312): App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#17 /var/www/api/vendor/symfony/console/Application.php(1040): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 /var/www/api/vendor/symfony/framework-bundle/Console/Application.php(88): Symfony\\Component\\Console\\Application->doRunCommand(Object(App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 /var/www/api/vendor/symfony/console/Application.php(314): Symfony\\Bundle\\FrameworkBundle\\Console\\Application->doRunCommand(Object(App\\Infrastructure\\Temporal\\UI\\Cli\\WorkerCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 /var/www/api/vendor/symfony/framework-bundle/Console/Application.php(77): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#21 /var/www/api/vendor/symfony/console/Application.php(168): Symfony\\Bundle\\FrameworkBundle\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#22 /var/www/api/vendor/symfony/runtime/Runner/Symfony/ConsoleApplicationRunner.php(54): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#23 /var/www/api/vendor/autoload_runtime.php(29): Symfony\\Component\\Runtime\\Runner\\Symfony\\ConsoleApplicationRunner->run()\n#24 /var/www/api/bin/console(11): require_once('/var/www/api/ve...')\n#25 {main}",
  "encodedAttributes": null,
  "cause": null,
  "applicationFailureInfo": {
    "type": "Temporal\\Exception\\DataConverterException",
    "nonRetryable": false,
    "details": null
  }
}
```







</details>

<details>
<summary><strong>root-aza</strong> commented on 2023-07-12 06:44:30.000 UTC</summary>

@roxblnfk cc

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-12 09:39:09.000 UTC</summary>

@root-aza did you restart RR server after SDK update?
I tested it with that activity
https://github.com/temporalio/sdk-php/blob/894a808d03c256407ad828cceaf18d32fc1a6026/tests/Fixtures/src/Activity/Php82TypesActivity.php#L22

</details>

<details>
<summary><strong>root-aza</strong> commented on 2023-07-12 11:05:57.000 UTC</summary>

Hhm. Yep. right now it's working 😂


</details>


---

<a id="264"></a>

### #264: Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/264 |
| **State** | CLOSED |
| **Author** | Neznaykas (Сергей) |
| **Created** | 2022-11-24 10:32:32.000 UTC (3y 1m ago) |
| **Updated** | 2023-09-01 11:41:57.000 UTC |
| **Closed** | 2023-09-01 11:41:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | 2.8.0 |

#### Description

Hi! When I try use workflows us

MainWorkflow -> Run ChildWorkflows -> Run ChildWorkflows -> Run Activities

I get error

Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor

if this is the correct behavior, how do I call a non-child workflow?

SDK: v2.3.0
Server: 1.8.5

Trace:
```
{
  "message": "Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor",
  "source": "PHP_SDK",
  "stackTrace": "ReflectionException: Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor in /var/app/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:150\nStack trace:\n#0 /var/app/vendor/temporal/sdk/src/DataConverter/JsonConverter.php(150): ReflectionClass->newInstanceWithoutConstructor()\n#1 /var/app/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(80): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#3 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(169): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(Temporal\\DataConverter\\Type))\n#4 /var/app/vendor/react/promise/src/FulfilledPromise.php(28): Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#5 /var/app/vendor/react/promise/src/Promise.php(134): React\\Promise\\FulfilledPromise->then(Object(Closure), NULL)\n#6 /var/app/vendor/react/promise/src/Promise.php(168): React\\Promise\\Promise::React\\Promise\\{closure}(Object(React\\Promise\\FulfilledPromise))\n#7 /var/app/vendor/react/promise/src/Promise.php(231): React\\Promise\\Promise->settle(Object(React\\Promise\\FulfilledPromise))\n#8 /var/app/vendor/react/promise/src/Deferred.php(36): React\\Promise\\Promise::React\\Promise\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#9 /var/app/vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php(137): React\\Promise\\Deferred->resolve(Object(Temporal\\DataConverter\\EncodedValues))\n#10 /var/app/vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php(47): Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()\n#11 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(278): Temporal\\WorkerFactory->emit('tick')\n#12 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(393): Temporal\\WorkerFactory->tick()\n#13 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n'\\x08\\xA9F*\"\\n \\n\\x16\\n\\x08en...', Array)\n#14 /var/app/worker.php(57): Temporal\\WorkerFactory->run()\n#15 {main}\n\nNext Temporal\\Exception\\DataConverterException: Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor in /var/app/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:152\nStack trace:\n#0 /var/app/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#1 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(80): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(169): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(Temporal\\DataConverter\\Type))\n#3 /var/app/vendor/react/promise/src/FulfilledPromise.php(28): Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#4 /var/app/vendor/react/promise/src/Promise.php(134): React\\Promise\\FulfilledPromise->then(Object(Closure), NULL)\n#5 /var/app/vendor/react/promise/src/Promise.php(168): React\\Promise\\Promise::React\\Promise\\{closure}(Object(React\\Promise\\FulfilledPromise))\n#6 /var/app/vendor/react/promise/src/Promise.php(231): React\\Promise\\Promise->settle(Object(React\\Promise\\FulfilledPromise))\n#7 /var/app/vendor/react/promise/src/Deferred.php(36): React\\Promise\\Promise::React\\Promise\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#8 /var/app/vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php(137): React\\Promise\\Deferred->resolve(Object(Temporal\\DataConverter\\EncodedValues))\n#9 /var/app/vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php(47): Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()\n#10 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(278): Temporal\\WorkerFactory->emit('tick')\n#11 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(393): Temporal\\WorkerFactory->tick()\n#12 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n'\\x08\\xA9F*\"\\n \\n\\x16\\n\\x08en...', Array)\n#13 /var/app/worker.php(57): Temporal\\WorkerFactory->run()\n#14 {main}",
  "encodedAttributes": null,
  "cause": {
    "message": "Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor",
    "source": "PHP_SDK",
    "stackTrace": "ReflectionException: Class Generator is an internal class marked as final that cannot be instantiated without invoking its constructor in /var/app/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:150\nStack trace:\n#0 /var/app/vendor/temporal/sdk/src/DataConverter/JsonConverter.php(150): ReflectionClass->newInstanceWithoutConstructor()\n#1 /var/app/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(80): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#3 /var/app/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(169): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(Temporal\\DataConverter\\Type))\n#4 /var/app/vendor/react/promise/src/FulfilledPromise.php(28): Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#5 /var/app/vendor/react/promise/src/Promise.php(134): React\\Promise\\FulfilledPromise->then(Object(Closure), NULL)\n#6 /var/app/vendor/react/promise/src/Promise.php(168): React\\Promise\\Promise::React\\Promise\\{closure}(Object(React\\Promise\\FulfilledPromise))\n#7 /var/app/vendor/react/promise/src/Promise.php(231): React\\Promise\\Promise->settle(Object(React\\Promise\\FulfilledPromise))\n#8 /var/app/vendor/react/promise/src/Deferred.php(36): React\\Promise\\Promise::React\\Promise\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#9 /var/app/vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php(137): React\\Promise\\Deferred->resolve(Object(Temporal\\DataConverter\\EncodedValues))\n#10 /var/app/vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php(47): Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()\n#11 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(278): Temporal\\WorkerFactory->emit('tick')\n#12 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(393): Temporal\\WorkerFactory->tick()\n#13 /var/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n'\\x08\\xA9F*\"\\n \\n\\x16\\n\\x08en...', Array)\n#14 /var/app/worker.php(57): Temporal\\WorkerFactory->run()\n#15 {main}",
    "encodedAttributes": null,
    "cause": null,
    "applicationFailureInfo": {
      "type": "ReflectionException",
      "nonRetryable": false,
      "details": null
    }
  },
  "applicationFailureInfo": {
    "type": "Temporal\\Exception\\DataConverterException",
    "nonRetryable": false,
    "details": null
  }
}
```


#### Comments (6)

<details>
<summary><strong>wolfy-j</strong> commented on 2022-11-24 10:54:56.000 UTC</summary>

Please follow the standard bug report template which must include:
- minimal way to reproduce the error
- information about SDK version

</details>

<details>
<summary><strong>Neznaykas</strong> commented on 2022-11-24 13:27:46.000 UTC</summary>

an approximate path

```php
class ParentWorkflow implements ParentWorkflowInterface
{
    public function greet(string $name)
    {
        $child = Workflow::newChildWorkflowStub(ChildWorkflow::class);

        // This is a non blocking call that returns immediately.
        // Use yield $child->greet(name) to call synchronously.
        $childGreet = $child->greet($name);

        // Do something else here.

        return 'Hello ' . $name . ' from parent; ' . yield $childGreet;
    }

class ChildWorkflow
{
    #[WorkflowMethod("Child.greet")]
    public function greet(
        string $name
    ) {

        $child = Workflow::newChildWorkflowStub(SubChildWorkflow::class);

        // This is a non blocking call that returns immediately.
        // Use yield $child->greet(name) to call synchronously.
        $childGreet = $child->greet($name);

        return yield $childGreet;
    }
}

class SubChildWorkflow
{
    #[WorkflowMethod("SubChild.greet")]
    public function greet(
        string $name
    ) {
        return 'Hello ' . $name . ' from child workflow!';
    }
}

```
I'll try to write a better example a little later

</details>

<details>
<summary><strong>ruscon</strong> commented on 2023-02-27 16:06:09.000 UTC</summary>

Have the same issue.

@Neznaykas Have you found how to solve the problem?

</details>

<details>
<summary><strong>msmakouz</strong> commented on 2023-07-05 13:06:59.000 UTC</summary>

@Neznaykas I tried to reproduce the issue.
Copied the code you provided (only added required attributes) and added a console command to start a workflow.

**SDK version: v2.5.1**
**PHP: 8.0.15** (from PHP samples: https://github.com/temporalio/samples-php)

### ChildWorkflow

```php
use Temporal\Workflow;
use Temporal\Workflow\WorkflowMethod;
use Temporal\Workflow\WorkflowInterface;

#[WorkflowInterface]
class ChildWorkflow
{
    #[WorkflowMethod("Child.greet")]
    public function greet(
        string $name
    ) {

        $child = Workflow::newChildWorkflowStub(SubChildWorkflow::class);

        // This is a non blocking call that returns immediately.
        // Use yield $child->greet(name) to call synchronously.
        $childGreet = $child->greet($name);

        return yield $childGreet;
    }
}
```

### ParentWorkflow

```php
use Temporal\Workflow;

class ParentWorkflow implements ParentWorkflowInterface
{
    public function greet(string $name)
    {
        $child = Workflow::newChildWorkflowStub(ChildWorkflow::class);

        // This is a non blocking call that returns immediately.
        // Use yield $child->greet(name) to call synchronously.
        $childGreet = $child->greet($name);

        // Do something else here.

        return 'Hello ' . $name . ' from parent; ' . yield $childGreet;
    }
}
```

### ParentWorkflowInterface

```php
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
interface ParentWorkflowInterface
{
    #[WorkflowMethod("Parent.greet")]
    public function greet(string $name);
}
```

### SubChildWorkflow

```php
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
class SubChildWorkflow
{
    #[WorkflowMethod("SubChild.greet")]
    public function greet(
        string $name
    ) {
        return 'Hello ' . $name . ' from child workflow!';
    }
}
```

The code ran successfully. Didn't reproduce the error:

<img width="1496" alt="web" src="https://github.com/temporalio/sdk-php/assets/67324318/6e1f6711-cc5c-4fc5-98e5-e56540824993">

<img width="904" alt="console-command" src="https://github.com/temporalio/sdk-php/assets/67324318/e5bfdeb4-450a-4c1d-a652-14cd253e0b75">

Could you double check?





</details>

<details>
<summary><strong>Neznaykas</strong> commented on 2023-07-20 02:16:58.000 UTC</summary>

Yes, error has if return class Generator in SubChild

fixed set return type Iterable

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:41:56.000 UTC</summary>

Closing as fixed

</details>


---

<a id="184"></a>

### #184: [Bug] Abandoned child workflow don't release flow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/184 |
| **State** | CLOSED |
| **Author** | koekaverna (Egor) |
| **Created** | 2022-06-07 09:00:09.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-30 09:06:33.000 UTC |
| **Closed** | 2022-06-29 11:26:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?
I made repo with example https://github.com/koekaverna/samples-php/tree/background-child/app/src/ChildBackground
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug
I expect that parent workflow return result imidiately when there is no `yield` on child workflow. It does not. It was waiting for child process done and had timeout exception.
<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction
Look at the repo
<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->
- I am using docker-compose from source

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (6)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-09 18:02:35.000 UTC</summary>

Hi @koekaverna! The parent workflow always waits till the child workflow is finished.
Related docs:

[Policy](https://docs.temporal.io/docs/concepts/what-is-a-parent-close-policy/)
[Execution concepts](https://docs.temporal.io/docs/concepts/what-is-a-child-workflow-execution/)

</details>

<details>
<summary><strong>koekaverna</strong> commented on 2022-06-10 10:10:55.000 UTC</summary>

> Hi @koekaverna! The parent workflow always waits till the child workflow is finished. Related docs:
> 
> [Policy](https://docs.temporal.io/docs/concepts/what-is-a-parent-close-policy/)  
[Execution concepts](https://docs.temporal.io/docs/concepts/what-is-a-child-workflow-execution/)

> A Parent Workflow Execution must await on the Child Workflow Execution to spawn. The Parent can **optionally** await on the result of the Child Workflow Execution.

![image](https://user-images.githubusercontent.com/20415858/173043142-d21051b6-9729-4d2a-acf9-979f2d128bac.png)

It seems parent workflow should not await child workflow. After child workflow starts it is optional to wait results.
@seregazhuk 

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-10 19:58:01.000 UTC</summary>

@koekaverna Oh, sorry. The parent workflow waits till the child starts. Once it is started the parent can be completed. But here the child emmidiately fails (with `throw new IllegalStateException("not yet");`). In this case the parent also waits and fails. Try to remove your exception throwing.

</details>

<details>
<summary><strong>koekaverna</strong> commented on 2022-06-14 09:40:44.000 UTC</summary>

> Try to remove your exception throwing.

It does not solve the problem. Why parent workflow waits child, when no result is awaited with yield?

I have this scenario:
1. Send the request1 to the server1 using workflow.
2. Waiting it for the _response_.
3. Log the _response_ using another request2 to a logging server2
4. Return result of the _response_

In this case server2 can be anavailabale for sometime and I want to retry request2 until it will be done.
I need return result of request1 imideately after I get response from server1.
I do not need to wait the result of request2 in the worklow.

Is it possible somehow to do this?

@seregazhuk 

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-19 05:50:22.000 UTC</summary>

Yes, there is an issue with parent/child workflows 😞 we are working on it. As a quick solution I can see - separate it to two different workflows. 

</details>

<details>
<summary><strong>koekaverna</strong> commented on 2022-06-30 09:06:33.000 UTC</summary>

Wow it's amazing 🎉 

Reactions: 🚀 1

</details>


---

<a id="175"></a>

### #175: composer require fail because of an old version of `psr/log`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/175 |
| **State** | CLOSED |
| **Author** | danyelkeddah (Danyel Alkeddah) |
| **Created** | 2022-05-24 09:18:37.000 UTC (3y 7m ago) |
| **Updated** | 2022-05-25 19:06:58.000 UTC |
| **Closed** | 2022-05-24 18:19:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

trying to require `temporal/sdk` into my PHP application

### Describe the bug
The SDK is using `"psr/log": "^1.1"` which is an old version and need to be updated, the latest version is `3.0.0`
which is making conflict with other packages using the newer version of `psr/log`

someone try to upgrade it in this PR https://github.com/temporalio/sdk-php/pull/169 but not sure why its closed

`php version: 8.1`

#### Comments (6)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-24 15:53:51.000 UTC</summary>

Hi @danyelkeddah. Yes, it was my PR, but the latest `psr/log` requires PHP8. Thus, we need to drop PHP7.4 support, which is currenlty supported - https://www.php.net/supported-versions.php

</details>

<details>
<summary><strong>danyelkeddah</strong> commented on 2022-05-24 16:56:30.000 UTC</summary>

hey @seregazhuk, maybe you can use the or operator `^1.0|^2.0|^3.0` ?

Reactions: 👍 1

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-24 17:10:33.000 UTC</summary>

Yes, sorry, my mistake 🙈 Fixed my PR and merged 👍 
https://github.com/temporalio/sdk-php/pull/169


</details>

<details>
<summary><strong>danyelkeddah</strong> commented on 2022-05-24 17:13:56.000 UTC</summary>

Awesome, Thanks @seregazhuk 🚀

Reactions: 🚀 1

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-25 14:32:06.000 UTC</summary>

@danyelkeddah new release is ready 🚀 
https://github.com/temporalio/sdk-php/releases/tag/v1.3.1

</details>

<details>
<summary><strong>danyelkeddah</strong> commented on 2022-05-25 19:06:57.000 UTC</summary>

Thanks @seregazhuk 🚀👍

</details>


---

<a id="128"></a>

### #128: [Bug] No way to setNamespace for a worker to make worker listen for queue in namespace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/128 |
| **State** | CLOSED |
| **Author** | oss92 (Mohamed Osama) |
| **Created** | 2021-12-01 09:52:19.000 UTC (4y 1m ago) |
| **Updated** | 2021-12-02 09:29:48.000 UTC |
| **Closed** | 2021-12-01 11:18:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | Bug |
| **Assignees** | rustatian, seregazhuk |
| **Milestone** | None |

#### Description

### Describe the bug

There is no way in PHP to ask a worker to listen to specific namespace.

You can create a workflow client as such
```
$workflowClient = WorkflowClient::create(ServiceClient::create($host), $clientOptions->withNamespace($namespace));
```

and then create your commands there which will assign them to a specific namespace.

Creating a worker as such
```
$worker = $factory->newWorker(WorkerFactoryInterface::DEFAULT_TASK_QUEUE, WorkerOptions::new());
```
only listens to the `default` namespace. How can we avoid that?

### To Reproduce

Mentioned in the bug description

### Expected behavior

Somehow in the worker options to set namespace? When I create the workflow client with `default` namespace, everything runs and there are workers listening. If I create the workflow client with a different namespace, I get 

```
There are no Workers currently listening to the Task Queue: default
```

### Screenshots/Terminal output
![Screen Shot 2021-12-01 at 10 51 30](https://user-images.githubusercontent.com/6284234/144212138-4e5712dc-253d-4991-9234-25a175e27dca.png)


### Versions

<!-- Please complete the following information where relevant. -->

- OS: Mac
- Temporal Version [e.g. 1.7.0?] latest
- Are you using Docker or Kubernetes or building Temporal from source? Kubernetes

### Additional context
 
Here in go for example: https://github.com/temporalio/samples-go/blob/cac8bb0ee971be97cd2e1f3d48ddfd247a21b7ec/cron/worker/main.go, you can create a client, and pass options which means this worker will listen to this client


#### Comments (6)

<details>
<summary><strong>rustatian</strong> commented on 2021-12-01 10:23:32.000 UTC</summary>

Hey @oss92, you can set the namespace via RR config -> https://github.com/spiral/roadrunner-binary/blob/master/.rr.yaml#L154

</details>

<details>
<summary><strong>oss92</strong> commented on 2021-12-01 10:24:42.000 UTC</summary>

@rustatian I was looking into that and thought so. I think it might be a good idea to edit the generate rr file to include this since it currently does not (when running `./vendor/bin/rr get-binary`)

</details>

<details>
<summary><strong>rustatian</strong> commented on 2021-12-01 10:26:15.000 UTC</summary>

It will be included in the next release v2.6.1, so, at the moment, please, edit the `.rr.yaml` manually, sorry for that.

</details>

<details>
<summary><strong>oss92</strong> commented on 2021-12-01 11:18:14.000 UTC</summary>

Yea no problem at all. Just trying to avoid people asking this question again in the future. I really appreciate your quick assistance. Closing this issue.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2021-12-01 11:19:14.000 UTC</summary>

> Yea no problem at all. Just trying to avoid people asking this question again in the future. I really appreciate your quick assistance. Closing this issue.

You are welcome 👍🏻 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2021-12-02 09:29:48.000 UTC</summary>

> It will be included in the next release v2.6.1, so, at the moment, please, edit the `.rr.yaml` manually, sorry for that.

https://github.com/spiral/roadrunner-binary/releases/tag/v2.6.1 Done.

</details>


---

<a id="111"></a>

### #111: [Question] Workflow DI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/111 |
| **State** | CLOSED |
| **Author** | Zylius (Zigmas Satkevičius) |
| **Created** | 2021-05-25 19:46:11.000 UTC (4y 7m ago) |
| **Updated** | 2021-06-28 11:38:12.000 UTC |
| **Closed** | 2021-06-25 16:15:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | Feature, Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I've a question regarding workflows. I know I'm asking a lot of questions, when I'll have some free time I'll try to propose some PRs for them!

Now the question is: how do I inject something into a Workflow? I understand this could be a definite nono for temporal paradigm? Is it?

If not,  then, for example, currently we have our SAGA  (workflow) configs for each SAGA step (activity) in YAML files.

It's impossible to inject anything into the Workflow class. The constructor is always called without any arguments.

Should I use activity to get this stuff from container? Kinda sounds like it shouldn't be an "activity" of a specific workflow either.

Here's an example.

```php
#!/usr/bin/env php
<?php

use Temporal\Activity\ActivityOptions;
use Temporal\WorkerFactory;
use Temporal\Workflow\WorkflowInterface;

$myConfigs = ['greet_timeout' => 30];

#[WorkflowInterface]
class GreetingWorkflow
{
    private $greetingActivity;

    public function __construct(array $timeouts = [])
    {
        $this->greetingActivity = Workflow::newActivityStub(
            GreetingActivityInterface::class,
            
            // How to get this timeout setting ? 
            ActivityOptions::new()->withStartToCloseTimeout(
                CarbonInterval::seconds($timeouts['greet_timeout'])
            )
        );
    }

    public function greet(string $name): \Generator
    {
        return yield $this->greetingActivity->composeGreeting('Hello', $name);
    }
}

$factory = WorkerFactory::create();
$worker = $factory->newWorker();

// How do I register the workflow and inject the constructor params?
$worker->registerWorkflowTypes(GreetingWorkflow::class);

$factory->run();
```





#### Comments (6)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-05-25 22:35:40.000 UTC</summary>

Hello! We deliberately avoided the possibility of injecting any variables inside the Workflow, since changing these values can change the behavior of this Workflow, which will break absolutely the entire code.

For example:
```php
#[WorkflowInterface]
class GreetingWorkflow
{
    public function __construct(private Some $service) {}
    
    public function greet(string $name): \Generator
    {
        if ($this->service->doSomething()) {
            yield $this->greetingActivity->composeGreeting('Hello', $name);
        }
        
        return yield $this->greetingActivity->composeGreeting('world', $name);
    }
}
```

In this case, the argument is a reference to an external service dependency that may have side effects that will break the workflow execution.

Moreover, when implementing the SDK, we focused on Java SDK, where there are no arguments for the workflow constructor.

However, the example with your code looks quite convincing. So we need to think about how to solve your problem.

</details>

<details>
<summary><strong>tsurdilo</strong> commented on 2021-05-25 23:47:28.000 UTC</summary>

@Zylius 
as @SerafimArts mentioned, workflows must be deterministic, and you register the workflow type with the worker, not an instance.

You can achieve what you are looking for, I believe, with WorkflowClientInterface->startWithSignal (when you are starting your workflow execution, and not when you are registering your workflow with worker)

startWithSignal will start workflow execution (if no active ones is available) and send the signal on start. The data that you want to "inject" can be the signal data.



</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-05-26 08:20:20.000 UTC</summary>

Hey, thanks guys! I wasn't aware of `startWithSignal` and Signal functionality. I'll try it out! 

See what we're trying to do here, is generate temporal workflows (just like my past question about activities #110) from our legacy configuration. Now the example  you gave @SerafimArts, kinda got me a little worried. What I've been trying to avoid is generating "stub" php classes for workflows from our YAML files. But if that's what we have to do, I'll be willing to do it.

Update concerning startWithSignal: lets say we have two services. ServiceA starts the workflow, and has its interface. ServiceB implements the workflow interface. ServiceA shouldn't be the one injecting `configuration` into ServiceB workflow, since ServiceB is the one responsible for it. So I don't think this will work in our case :/

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-06-25 16:15:23.000 UTC</summary>

FYI, with **local activities**, you will be able to "upload" the workflow config via calling the activity. It will be deterministic since it will freeze the workflow state in history.  

> Local Activities are planned in the 1.1 version of this SDK. In the meantime use classic activities.

This way workflow fully controls its config (i assume declarative DSL) and does not expose anything to the outside. This should solve your case without exposing anything.

@tsurdilo I believe the community can greatly benefit from a simple example of how to convert legacy DSL workflows into temporal workflows.



</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-06-25 16:17:08.000 UTC</summary>

Something like that:

```php
public function workflowMethod(string $type) 
{
     $yaml = yield $this->config->loadParsedConfig($type);

     // do something with yaml, the workflow is not detached from your config file and even if you changes it - it will remain deterministic
}
```

So, in simple words, do the data DI via deterministic markers:

1) Local Activity
2) Activity
3) Signal
4) Also you can use side-effect if the file located withing the current filesystem, but be careful as it's blocking call

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-06-28 11:38:12.000 UTC</summary>

Thank you very much! We've already done this and it works great. Kinda asked the question without fully understanding how temporal flow works. :bow: 

</details>


---

<a id="102"></a>

### #102: [Feature Request] Implement GetSearchAttributesRequest

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/102 |
| **State** | CLOSED |
| **Author** | Rastusik (Martin Fris) |
| **Created** | 2021-04-16 11:56:10.000 UTC (4y 8m ago) |
| **Updated** | 2021-06-25 16:02:41.000 UTC |
| **Closed** | 2021-06-25 16:02:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I want to be able to search the workflows and activities programatically (it is already possible in java)

> I'm currently integrating temporal and I want to be able to write integration tests, where I want to check the states of some workflows. Currently I need to run shell tctl command from PHP to get the data I need. Or maybe I just didn't notice where the API for this is hidden.

**Describe the solution you'd like**

> It would be sufficient to get the same functionality as in the java sdk



#### Comments (6)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-16 12:15:02.000 UTC</summary>

Have you checked the ServiceClient? 
https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowClientInterface.php#L22
https://github.com/temporalio/sdk-php/blob/master/src/Client/GRPC/ServiceClientInterface.php

It has all the Temporal API. 

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-16 12:17:28.000 UTC</summary>

yes, sure, but it would be really nice to have better support for search than just creating grpc requests manually

I would say that even using tctl with shell_exec might be easier to use

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-16 12:36:01.000 UTC</summary>

Sure. Can you point me to the Java reference you are looking at?

</details>

<details>
<summary><strong>Rastusik</strong> commented on 2021-04-16 12:45:28.000 UTC</summary>

now when I look at it, it seems that the Java sdk doesn't have this functionality either, sorry for the confusion... so basically it would be nice to just pass the query to some client instance and get results

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-16 12:53:05.000 UTC</summary>

Got it. For now, please stick to GRPC or create your wrapper at top of it. We can think about easier to use search API after dealing with the rest of the backlog.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-06-25 16:02:41.000 UTC</summary>

Sounds like the solution is to use a user-defined GRPC wrapper as in Java. Closing for now.

</details>


---

<a id="573"></a>

### #573: [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/573 |
| **State** | OPEN |
| **Author** | vansante (Paul) |
| **Created** | 2025-02-20 09:57:38.000 UTC (10 months ago) |
| **Updated** | 2025-02-20 14:35:14.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 3 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 3.0.0 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Setting a `ExceptionInterceptorInterface` and `PipelineProvider` with the `newWorker` method.

### Describe the bug

The interface [method](https://github.com/temporalio/sdk-php/blob/master/src/Worker/WorkerFactoryInterface.php#L36) is:
```php
    public function newWorker(
        string $taskQueue = self::DEFAULT_TASK_QUEUE,
        ?WorkerOptions $options = null,
    ): WorkerInterface;
```

But the actual [implementation](https://github.com/temporalio/sdk-php/blob/master/src/WorkerFactory.php#L126) is:

```php
    public function newWorker(
        string $taskQueue = self::DEFAULT_TASK_QUEUE,
        ?WorkerOptions $options = null,
        ?ExceptionInterceptorInterface $exceptionInterceptor = null,
        ?PipelineProvider $interceptorProvider = null,
    ): WorkerInterface {
        // .. implementation
    }
```

### Minimal Reproduction

Not really relevant, just install the sdk.

### Environment/Versions

Also irrelevant.

### Additional context

The interface should describe the full method with all arguments.



#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-02-20 14:29:16.000 UTC</summary>

The interface is in the public space, so changing it can be considered a breaking change (even though it's not intended to be implemented by the user). Overall, there is no strong reason to update it for now.

</details>

<details>
<summary><strong>vansante</strong> commented on 2025-02-20 14:31:10.000 UTC</summary>

Is it really a breaking change when they are defaulted to null anyway? That means they can be omitted right?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-02-20 14:35:13.000 UTC</summary>

If we add parameters to the interface method, we will break all implementations that we do not control.

Reactions: 👍 1

</details>


---

<a id="571"></a>

### #571: [Bug] Very rare nondeterministic error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/571 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-02-19 11:12:05.000 UTC (10 months ago) |
| **Updated** | 2025-08-12 18:22:24.000 UTC |
| **Closed** | 2025-08-12 18:21:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | Bug |
| **Assignees** | roxblnfk, rustatian |
| **Milestone** | 2.15.1 |

#### Description

[From Slack chat](https://temporalio.slack.com/archives/C01LK9FAMM0/p1738689191710979)



### Describe the bug

> I'm very infrequently getting determinism errors for a reasonably simple workflow
> When replaying, I get a `[TMPRL1100] nondeterministic workflow: extra replay command for ScheduleActivityTask: (ActivityId:61, ActivityType:(Name:Programmes.Programme_getContent)`
>
> From the Temporal UI it looks like the worker did not schedule get Programme_getContent as expected (seems to have stalled?), but on replay it is doing
>
> ![Temporal UI](https://github.com/user-attachments/assets/b8d2f0fb-6503-49b0-936a-df47c68937ae)

History: [d0abc853-0fca-43d9-ab68-b54c61cc5ee7_events (1).json](https://github.com/user-attachments/files/18866714/d0abc853-0fca-43d9-ab68-b54c61cc5ee7_events.1.json)

### Minimal Reproduction

<details>

```php
<?php

declare(strict_types=1);

namespace Temporal\Tests\Workflow;

use Ramsey\Uuid\Uuid;
use React\Promise\PromiseInterface;
use Temporal\Activity;
use Temporal\Activity\ActivityInterface;
use Temporal\Client\WorkflowClientInterface;
use Temporal\Internal\Workflow\ActivityProxy;
use Temporal\Promise;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
class UserCaseWorkflow
{
    private ActivityProxy|UserCaseActivity $activity;
    private int $moduleIndex = 0;
    private bool $currentRead = false;
    private string $currentUrl = '';

    public function __construct()
    {
        $this->activity = Workflow::newActivityStub(
            UserCaseActivity::class,
            Activity\ActivityOptions::new()
                ->withStartToCloseTimeout('1 day'),
        );
    }

    #[WorkflowMethod(name: 'UserCaseWorkflow')]
    public function run(string $enrolment)
    {
        while (true) {
            $nextContent = yield $this->activity->getContent($enrolment, $this->moduleIndex + 1);

            if (!$nextContent) {
                break;
            }

            $this->currentRead = false;
            $this->currentUrl = $nextContent;
            $this->moduleIndex++;

            yield $this->activity->moduleStarted($enrolment, $this->moduleIndex, $nextContent);

            $delay = yield Workflow::sideEffect(static fn() => '6 seconds');

            yield Promise::all([
                Workflow::timer($delay),
                Workflow::async(function () use ($enrolment) {
                    yield Workflow::await(fn() => $this->currentRead);

                    yield $this->activity->moduleCompleted($enrolment, $this->moduleIndex);
                }),
            ]);
        }

        yield $this->activity->programmeCompleted($enrolment);
    }

    #[Workflow\SignalMethod]
    public function markCompleted(int $index): void
    {
        if ($this->moduleIndex === $index) {
            $this->currentRead = true;
        }
    }
}

#[ActivityInterface('UserCaseActivity.')]
class UserCaseActivity
{
    public function __construct(
        private WorkflowClientInterface $client,
    ) {}

    /**
     * @return PromiseInterface<non-empty-string|null>
     */
    public function getContent(string $enrolment, int $moduleIndex)
    {
        return \mt_rand(0, 10 - $moduleIndex) === 0 ? null : Uuid::uuid4()->__toString();
    }

    /**
     * @return PromiseInterface<null>
     */
    public function moduleStarted(string $enrolment, int $moduleIndex, string $content)
    {
        \usleep((int)\round(2.2 * 1_000_000.0));

        $this->client->newRunningWorkflowStub(
            UserCaseWorkflow::class,
            Activity::getInfo()->workflowExecution->getID(),
        )->markCompleted($moduleIndex);
    }

    /**
     * @return PromiseInterface<null>
     */
    public function moduleCompleted(string $enrolment, int $moduleIndex) {}

    /**
     * @return PromiseInterface<null>
     */
    public function programmeCompleted(string $enrolment) {}
}
```

</details>


---

Similar issue. Got log (PHP 8.3.19):

```
ERROR    temporal        Workflow panic    {"Namespace": "default", "TaskQueue": "order.creation", "WorkerID": "order.creation:9a1377d9-6662-486c-a9e3-cbbc90fd2e7f", "WorkflowType": "order.creation", "WorkflowID": "5fc5df88-0200-4a13-abde-deb61a2ed28f", "RunID": "e4570e70-10de-465c-a9ed-2c4967841532", "Attempt": 5821, "Error": "[TMPRL1100] lookup failed for scheduledEventID to activityID: scheduleEventID: 71, activityID: 71", "StackTrace": "process event for order.creation [panic]:\ngo.temporal.io/sdk/internal.panicIllegalState(...)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_command_state_machine.go:521\ngo.temporal.io/sdk/internal.(*commandsHelper).handleActivityTaskScheduled(0xc001c2d040, {0xc001f1c7fe, 0x2}, 0x47)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_command_state_machine.go:1156 +0xf8\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc00240cb58, 0xc002005e60, 0x3?, 0x0)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_event_handlers.go:1231 +0x3f2\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0005654a0, 0xc0023aa420)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_task_handlers.go:1182 +0x1a8a\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc001266000, 0xc0023aa420, 0xc0005654a0, 0xc001b8cba0)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_task_handlers.go:929 +0x59e\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc00012a000, 0xc0023aa420)\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_task_pollers.go:424 +0x3db\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc00012a000, {0x1f67f40, 0xc0023aa420})\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_task_pollers.go:372 +0x205\ngo.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_worker_base.go:453 +0x12f\ncreated by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 203\n\tgo.temporal.io/sdk@v1.33.0/internal/internal_worker_base.go:432 +0x8c"}
WARN    temporal        Failed to process workflow task.    {"Namespace": "default", "TaskQueue": "order.creation", "WorkerID": "order.creation:9a1377d9-6662-486c-a9e3-cbbc90fd2e7f", "WorkflowType": "order.creation", "WorkflowID": "5fc5df88-0200-4a13-abde-deb61a2ed28f", "RunID": "e4570e70-10de-465c-a9ed-2c4967841532", "Attempt": 5822, "Error": "[TMPRL1100] lookup failed for scheduledEventID to activityID: scheduleEventID: 71, activityID: 71"}
```


#### Comments (5)

<details>
<summary><strong>jackprice</strong> commented on 2025-03-24 10:55:51.000 UTC</summary>

This is quite rare overall, but we run a very large volume of workflows affected by this. Is there any movement on this, or any information I can provide to help?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-04-02 12:48:39.000 UTC</summary>

Hello. It seems you're not the only one observing similar behavior. I've attached a log snippet from another project.

It seems like an event (command) to start an Activity is just getting lost somewhere.
It's hard to say where it happens, as the chain is quite long.

Here are my thoughts:
- PHP SDK: The SDK code is linear and deterministic without races and concurrency. I can assume that changing the PHP version might affect something (if you look at the changelog, there are several fixes about behavior of generators in the [PHP changelog](https://www.php.net/ChangeLog-8.php)). By the way, which PHP version are you using?
- RR: Manages PHP workers and communicates with them via the Goridge protocol. Despite the presence of IO with accompanying asynchronous stuff on the Go side, losing a piece of the message is impossible (the command to start an Activity is sent as a single message along with the completion of the Workflow Task).
- RR Temporal Plugin <-> Temporal GoSDK <-> Temporal Service: My expertise is insufficient to comment on this. I can only hope that Workflow Task Completed and Activity Task Scheduled are recorded atomically.

I haven't found similar issues in [GoSDK](https://github.com/temporalio/sdk-go), so it looks like the issue might be related with PHP-SDK / RR / PHP.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-21 15:01:23.000 UTC</summary>

Hi @jackprice 
Please note [this release](https://github.com/temporalio/sdk-php/releases/tag/v2.15.1): we found and fixed a bug that was likely causing non-deterministic behavior in your case.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-29 10:33:36.000 UTC</summary>

@jackprice Could you please tell me if you were able to reproduce the non-deterministic behavior on the latest version of SDK?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-08-12 18:21:58.000 UTC</summary>

Closing due to inactivity. The issue is presumably resolved in release [2.15.1](https://github.com/temporalio/sdk-php/releases/tag/v2.15.1).


</details>


---

<a id="529"></a>

### #529: [Feature Request] registerDelayedCallback for tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/529 |
| **State** | OPEN |
| **Author** | cv65kr (Kajetan) |
| **Created** | 2024-11-22 15:31:41.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-05 12:20:37.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

To write more efficient tests would be nice to support method like in other SDKs - `registerDelayedCallback`

### Describe the solution you'd like

https://github.com/temporalio/samples-go/blob/main/updatabletimer/workflow_test.go#L24

#### Comments (1)

<details>
<summary><strong>dominik-pakosz</strong> commented on 2024-12-05 12:20:35.000 UTC</summary>

That would be great, missing that also!

</details>


---

<a id="338"></a>

### #338: Add an ability to set timeout for all client calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/338 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-08-09 16:02:37.000 UTC (2y 5m ago) |
| **Updated** | 2024-04-10 09:03:42.000 UTC |
| **Closed** | 2024-04-08 19:48:20.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.0 |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.
We can't control easily a gRPC client call timeout.

### Describe the solution you'd like
Add `withTimeout(int $timeout)` method to Workflow Client class.

```php
// Client call with custom timeout
$workflowClient->withTimeout(5)->listWorkflowExecutions('WorkflowType="foo"');



#### Comments (1)

<details>
<summary><strong>glennschmidt</strong> commented on 2023-12-04 09:53:02.000 UTC</summary>

Currently, if the Temporal server is not reachable, the PHP client will hang forever.

</details>


---

<a id="304"></a>

### #304: [Bug] Seeing a spike in CPU utilization in presence of the following error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/304 |
| **State** | CLOSED |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-05-16 12:25:17.000 UTC (2y 7m ago) |
| **Updated** | 2023-09-01 11:16:54.000 UTC |
| **Closed** | 2023-09-01 11:16:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug
In presence of the attached error, the user shows a spike in CPU utilization

opening an issue as @wolfy-j requested 

[worker-logs.txt](https://github.com/temporalio/sdk-php/files/11487743/worker-logs.txt)

Adding metrics on CPU and memory utilization for the worker 
<img width="417" alt="Screenshot 2023-05-22 at 17 06 44" src="https://github.com/temporalio/sdk-php/assets/514932/e8f052ae-7cbd-44e7-84a7-fad937fd7e43">
<img width="224" alt="Screenshot 2023-05-22 at 17 05 20" src="https://github.com/temporalio/sdk-php/assets/514932/f56f4628-4c8c-4e52-a181-9be72fb0ed9f">


<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

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

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (5)

<details>
<summary><strong>rustatian</strong> commented on 2023-05-16 17:07:21.000 UTC</summary>

Hey @antmendoza 👋🏻 
As far as I can see from the logs, you're using the rather outdated version of the rr-temporal plugin. Could you please show me your RR version?

</details>

<details>
<summary><strong>manishrocksag</strong> commented on 2023-05-23 13:24:37.000 UTC</summary>

Hello
Previously we were using roadrunner version 2.12.1 and we upgraded to roadrunner version 2023.1.1 on Tue May 9 12:53:35 2023 (CEST).  We saw this spike on 2023-05-09T11:17:32 or 2023-05-09T13:17:32 (CEST) We are using temporal/sdk version of 2.5.0. Is this due to upgrade?

After the upgrade, we have not received this error again. 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-05-23 15:59:56.000 UTC</summary>

We have updated some internal error handling mechanisms (on the temporal workers panics). These spikes are most likely due to worker restarts (it would be better if you send us a log).

</details>

<details>
<summary><strong>antmendoza</strong> commented on 2023-07-07 10:52:58.000 UTC</summary>

> After the upgrade, we have not received this error again.

@manishrocksag do you think we can close this issue? 

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:16:54.000 UTC</summary>

@manishrocksag Closing the issue, feel free to reopen it if the issue is still exists.

</details>


---

<a id="291"></a>

### #291: Add API to count workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/291 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-03-03 22:07:01.000 UTC (2y 10m ago) |
| **Updated** | 2023-08-04 06:33:31.000 UTC |
| **Closed** | 2023-08-04 06:33:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

See parent issue for more information

#### Comments (5)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:48:17.000 UTC</summary>

@roxblnfk i believe this feature available via listWorkflowExecutions Paginator.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-11 13:02:38.000 UTC</summary>

> @roxblnfk i believe this feature available via listWorkflowExecutions Paginator.

Yes it is

It will be available with 2.6 release

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-07-14 12:47:06.000 UTC</summary>

The paginator isn't good enough I don't think, this is a separate `CountWorkflowExecutions` API call. Also, be prepared due to https://github.com/temporalio/api/pull/303 to support more than just integer response.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-15 09:05:37.000 UTC</summary>

In that case it makes sense to expose it as separate endpoint. @roxblnfk 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-15 10:20:39.000 UTC</summary>

Should I remove `countable` from the paginator with adding that separated API point?

</details>


---

<a id="225"></a>

### #225: [FEATURE REQUEST]: Add support for interceptors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/225 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:23:31.000 UTC (3y 5m ago) |
| **Updated** | 2023-11-02 19:59:04.000 UTC |
| **Closed** | 2023-11-02 19:59:04.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.7.0 |
| **Reactions** | 👍 2 |

#### Description

Can use any of the other SDKs as reference.

The main uses for interceptors are context propagation, authorization and instrumentation.

#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:49:28.000 UTC</summary>

Pending 2.7 release.

</details>


---

<a id="160"></a>

### #160: [Bug] Workflow is always Running

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/160 |
| **State** | CLOSED |
| **Author** | OlegKuro (Khayatov Oleg) |
| **Created** | 2022-04-14 23:10:29.000 UTC (3y 9m ago) |
| **Updated** | 2022-04-19 15:26:02.000 UTC |
| **Closed** | 2022-04-18 07:39:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Workflow example to reproduce the bug:

```
class ExampleWorkflow implements ExampleWorkflowInterface {

    public function start(): string|\Generator
    {
        $promises = [];

        foreach (range(1, 20) as $i) {
            $promises[] = Workflow::async(function () use ($i) {
                yield Workflow::timer(random_int(5, 10));
                $this->completedIds[] = $i;
            });
        }

        Workflow::async(function () {
            yield Workflow::timer(30);
            $this->completedIds[] = 21;
            $this->continue = true;
        });

        Workflow::await(
            Promise::all($promises),
            fn () => $this->continue,
        );

        return 'FINISHED';
}
```
### Expected behavior:
After 10 seconds of execution the workflow stops since the first clause (`Promise::all` is resolved)
### Actual behavior:
The workflow never stops 😿 

#### Comments (5)

<details>
<summary><strong>OlegKuro</strong> commented on 2022-04-14 23:22:10.000 UTC</summary>

I've also tried following workaround:
```
class ExampleWorkflow implements ExampleWorkflowInterface {

    public function start(): string|\Generator
    {
        $promises = [];

        foreach (range(1, 20) as $i) {
            $promises[] = Workflow::async(function () use ($i) {
                yield Workflow::timer(random_int(5, 10));
                $this->completedIds[] = $i;
            });
        }

        Workflow::async(function () {
            yield Workflow::timer(30);
            $this->completedIds[] = 21;
            $this->continue = true;
        });

        yield Promise::any([
            Promise::all($promises),
            Workflow::await(fn () => $this->continue),
        ]);

        return 'FINISHED';
}
```

It finishes the workflow. But only after `Workflow::await` clause resolution. But I expect to finish it after batch of promises completion.

I've tried many other identical expressions (like `Workflow::await(Promise:all($promises));` instead of simple `Promise::all($promises);`), but nothing worked as I expected

What I am trying to implement is the opportunity to stop batch of promises execution (via external workflow signal). In non-minimalist real code example these promises are allowed to never resolve at all.


</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-04-15 10:54:39.000 UTC</summary>

Hi @OlegKuro! I think the problem is - missing `yield`s here. With `Workflow::await()` and `Workflow::await()` you just create promises. To actually execute the code inside you need to call `yield`. So, your first workflow can be rewritten this way:

```php
final class ExampleWorkflow
{
    private array $completedIds = [];
    private bool $continue = false;

    #[WorkflowMethod]
    public function handle()
    {
        $promises = [];

        foreach (range(1, 20) as $i) {
            $promises[] = Workflow::async(function () use ($i) {
                yield Workflow::timer(1);
                $this->completedIds[] = $i;
            });
        }

        yield Workflow::async(function () {
            yield Workflow::timer(30);
            $this->completedIds[] = 21;
            $this->continue = true;
        });

        yield Workflow::await(
            Promise::all($promises),
            fn () => $this->continue,
        );

        return 'FINISHED';
    }
}
```

</details>

<details>
<summary><strong>OlegKuro</strong> commented on 2022-04-15 22:34:59.000 UTC</summary>

Thank you for your reply! 🤗 

Indeed! It works if I use `yield` correctly. But it resolves after both Promise and Closure completion. What if I need to create a bunch of interruptable actions? 🤔 
Is there any way to implement following `main` function example using temporal capabilities?

<details>
<summary>JavaScript identical to what I am trying to implement snippet</summary>
You can merely paste it into a browser console and run `runAndThenInterrupt` and `runAndWaitForPromises` functions 

```
let doContinue = false;
    
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

function sleepAndLog(ms, id) {
    return sleep(ms).then(() => {
        console.log(`${id} completed!`);
    })
}

async function main(interruptor) {
    async function interruptor() {
        return new Promise(resolve => {
            let intervalId = setInterval(() => {
                if (doContinue) {
                    doContinue = false;
                    console.log('interruption signal received!');
                    clearInterval(intervalId);
                    resolve();
                }
            }, 0);
        })
    }
    promises = [sleepAndLog(1000, 1), sleepAndLog(500, 2), sleepAndLog(1500, 3)];

    await Promise.any([
        Promise.all(promises),
        interruptor(),
    ]);

    console.log('promise any resolved!');
}

async function runAndThenInterrupt() {
    main();
    await sleep(700);
    doContinue = true;
}

function runAndWaitForPromises() {
    main();
}
```

</details>

Why [this](https://github.com/temporalio/sdk-php/issues/160#issuecomment-1099714010) example does not work as expected? 😵 

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-04-17 14:25:40.000 UTC</summary>

[This](https://github.com/temporalio/sdk-php/issues/160#issuecomment-1099714010) your example you have a missing `yield` keyword before the second `Workflow::async`:

```php
yield Workflow::async(function () {
    yield Workflow::timer(30);
    $this->completedIds[] = 21;
    $this->continue = true;
});

yield Promise::any([
   Promise::all($promises),
   Workflow::await(fn () => $this->continue),
]);
```

</details>

<details>
<summary><strong>OlegKuro</strong> commented on 2022-04-19 15:26:02.000 UTC</summary>

Btw, I do not see `yield` before `Workflow::async` in [example](https://docs.temporal.io/docs/php/workflows#awaits) from documentation. Is it official way of using `Workflow::async` 🤔 ? 

Coluld you please explain why sometimes `Workflow::async` works without `yield` before it? 
For example, If I create array of promises with help of `Workflow::async` and then wait for their resolution via` Promise::all `method, it works 🤯 

</details>


---

<a id="140"></a>

### #140: [Bug?] Workflow not completing unless all async coroutines finish or are cancelled manually

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/140 |
| **State** | CLOSED |
| **Author** | benalf (Alfred Bendrup) |
| **Created** | 2022-02-01 17:31:57.000 UTC (3y 11m ago) |
| **Updated** | 2022-02-19 16:19:46.000 UTC |
| **Closed** | 2022-02-19 16:17:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### Describe the bug
Still not sure if it a bug or an intended feature.

If there are any unfinished async closures and workflow somehow reaches a finishing condition like a regular `return` statement or a non-retryable `Exception`, the workflow will be kept in a running state until all async closures are finished even after evaluating the return/exception.

In case it's an intended feature and the user is supposed to manually cleanup all open resources, it becomes difficult to do so cleanly in certain cases.
The most annoying example is running a long activity with an async completion in a coroutine. Since there's no heartbeat (and it wouldn't make sense to heartbeat for days either), there's doesn't seem to be an easy way to cancel it without sending a manual completion through the client itself.

### Minimal Reproduction
Full project with a docker-compose in the attached `repro.zip`. `docker-compose up` to run the env, `docker-compose exec app php app.php execute` to run the workflow.

Even if the workflow evaluates an `Exception` or does a `return`, it still is stuck in a `Running` state until all coroutines are closed. Bug or a feature?

#### Relevant bits:
Workflow
```php
class BlockedWorkflow implements BlockedWorkflowInterface
{
    private $regularActivity;
    private bool $timerFired = false;
    private $someDataFromCoroutineActivity = null;

    public function __construct(
        private LoggerInterface $logger = new Logger(),
    ) {
        $this->regularActivity = Workflow::newActivityStub(
            RegularActivityInterface::class,
            ActivityOptions::new()
                ->withScheduleToCloseTimeout(CarbonInterval::minutes(10))
                ->withHeartbeatTimeout(3)
                ->withCancellationType(ActivityCancellationType::WAIT_CANCELLATION_COMPLETED)
        );
    }

    public function run()
    {
        $timerScope = Workflow::async(
            fn () => yield Workflow::timer(3)->then(fn() => $this->timerFired = true) // if timer value exceeds time to wf return, that return is also blocked
        );

        $activityScope = Workflow::async(
            fn () => $this->someDataFromCoroutineActivity = yield $this->regularActivity->runActivity()
        );

        yield Workflow::await(fn () => $this->timerFired || $this->someDataFromCoroutineActivity);

        if ($this->timerFired) {
            $this->logger->info('Workflow Terminating with Exception');
            // $scope->cancel(); // unless cancelled, the wf doesn't terminate until activity finishes
            throw new \Exception();
        }

        $this->logger->info('Workflow Terminating with normal return');
        // $timerScope->cancel(); // unless cancelled, the wf doesn't terminate until timer finishes

        return $this->someDataFromCoroutineActivity;
    }
}
```

Activity
```php
<?php

#[ActivityInterface]
class RegularActivity implements RegularActivityInterface
{
    public function __construct(
        private LoggerInterface $logger = new Logger(),
    ) {
    }

    #[ActivityMethod]
    public function runActivity(): string
    {
        $this->logger->info('Starting regular activity with a 1s sleep loop');

        for ($i = 0; $i < 5; $i++) {
            $this->logger->info('Activity tick');
            sleep(1);
            Activity::heartbeat($i);
        }

        $this->logger->info('Activity terminating');

        return 'Activity result';
    }
}
```

### Environment/Versions

- OS and processor: Linux
- Temporal Version: `temporalio/auto-setup:1.14.4` with 1.1.0 sdk-php on `php:8.1-cli-alpine`
- Running in Docker

[repro.zip](https://github.com/temporalio/sdk-php/files/7980666/repro.zip)


#### Comments (5)

<details>
<summary><strong>benalf</strong> commented on 2022-02-03 14:50:32.000 UTC</summary>

Just noticed the current minor version php81 alpine cli base image breaks sockets extension install in the attached reproduction project.

In case you need it, gotta add `CFLAGS="$CFLAGS -D_GNU_SOURCE"` to the Dockerfile:
```
    && CFLAGS="$CFLAGS -D_GNU_SOURCE" docker-php-ext-install sockets && docker-php-ext-enable sockets  \
```


</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-14 10:59:52.000 UTC</summary>

Just to confirm, all the activities are canceled correctly when you send the cancel command to the workflow? Workflows are not expected to die on exception unless you clearly marked it as application exception. Temporal will attempt to restart and replay it until it's fixed.

</details>

<details>
<summary><strong>benalf</strong> commented on 2022-02-14 14:35:00.000 UTC</summary>

Sorry, detouring a bit from your question (we haven't tried cancelling the workflow itself, we tried cancelling all running scopes/activities to let it gracefully terminate itself).

I think the "issue" can actually be reduced to async closure scopes blocking workflow completion. The activity termination I was initially focused on was more of a red herring.

```php
    #[WorkflowMethod("run")]
    public function run() {
        $scope = Workflow::async(fn () => yield Workflow::timer(15)->then(fn () => $this->timedOut = true));

        return 'ok'; // will wait for scope to close or needs to be manually cancelled before the workflow will be marked as Completed
    }
```
It totally makes sense. ~~However, it becomes difficult to cancel a scope if it spawns an activity with async completion since there's no heartbeat.~~

While playing with a minimal repro code, I tried cancelling a scope with async completion activity in it without adding any hearbeat/cancellationtype ...and it just cancels it (solving the issue of me going through the client).

```php
    #[WorkflowMethod("run")]
    public function run() {
        $activity = Workflow::newActivityStub(
            SomeAsyncCompletionActivity::class,
            ActivityOptions::new()
                ->withScheduleToCloseTimeout(1000)
                // ->withCancellationType(ActivityCancellationType::WAIT_CANCELLATION_COMPLETED) // can't be used
                ->withRetryOptions(
                    RetryOptions::new()->withMaximumAttempts(1)
                )
        );

        $scope = Workflow::async(fn () => yield $activity->process());
        yield Workflow::timer(1); // breathing room


        $scope->cancel(); // works fine without a heartbeat

        return 'ok';
    }
```
That works fine and I see a pretty `ActivityTaskCancelRequested` in the activity history. Somehow from the docs I tunneled on
> Cancellation is only delivered to Activities that record heartbeats

and thought it's not really an option with async completion. Am I misunderstanding something fundamental with cancellations and can you confirm async coroutines should be blocking workflow returns?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-19 16:17:44.000 UTC</summary>

I think we just have to update our docs in this particular use case, we are currently working on new tutorials. Cancellation can and ideally should be triggered from inside the workflow. Every scheduled activity will be cancelled at the moment of the command. However, if activity alteredy started it is only possible to cancel it via the response returned by the activity heartbeat (communication channel between activity and temporal). 

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-19 16:19:46.000 UTC</summary>

Async coroutines will block the return from the workflow until they are complete or canceled. It's intended behavior.

Reactions: 👍 1

</details>


---

<a id="641"></a>

### #641: [🐛 BUG]: undefined method ScopeContext::all()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/641 |
| **State** | CLOSED |
| **Author** | quipo (Lorenzo Alberton) |
| **Created** | 2025-07-29 05:48:15.000 UTC (5 months ago) |
| **Updated** | 2025-07-29 15:41:34.000 UTC |
| **Closed** | 2025-07-29 15:41:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### No duplicates 🥲.

- [x] I have searched for a similar issue in our bug tracker and didn't find any solutions.

### What happened?

When using `$resultsFromAll = yield Workflow::all($pipelinePromises);` I get the following stack trace:


```
Call to undefined method Temporal\Internal\Workflow\ScopeContext::all() (type: Error, retryable: true)

StackTrace: process event for my-queue [panic]:
github.com/temporalio/roadrunner-temporal/v5/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0xc00099e460, 0x33?)
	github.com/temporalio/roadrunner-temporal/v5@v5.7.0/aggregatedpool/workflow.go:330 +0x325
go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000da9560, 0xc001f3d5f0, 0x60?, 0x1)
	go.temporal.io/sdk@v1.34.0/internal/internal_event_handlers.go:1226 +0x30a
go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0005e8dc0, 0xc001f64150)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_handlers.go:1194 +0x1a8a
go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc00076a200, 0xc001f64150, 0xc0005e8dc0, 0xc0023b2420)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_handlers.go:941 +0x59e
go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc00054a140, 0xc001f64150)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_pollers.go:424 +0x3db
go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc00054a140, {0x584fea0, 0xc001f64150})
	go.temporal.io/sdk@v1.34.0/internal/internal_task_pollers.go:372 +0x205
go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
	go.temporal.io/sdk@v1.34.0/internal/internal_worker_base.go:456 +0x12f
created by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 282
	go.temporal.io/sdk@v1.34.0/internal/internal_worker_base.go:435 +0x8c"}
```

### Version

latest

### Relevant log output

```shell
Call to undefined method Temporal\Internal\Workflow\ScopeContext::all() (type: Error, retryable: true)

StackTrace: process event for my-queue [panic]:
github.com/temporalio/roadrunner-temporal/v5/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0xc00099e460, 0x33?)
	github.com/temporalio/roadrunner-temporal/v5@v5.7.0/aggregatedpool/workflow.go:330 +0x325
go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000da9560, 0xc001f3d5f0, 0x60?, 0x1)
	go.temporal.io/sdk@v1.34.0/internal/internal_event_handlers.go:1226 +0x30a
go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc0005e8dc0, 0xc001f64150)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_handlers.go:1194 +0x1a8a
go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc00076a200, 0xc001f64150, 0xc0005e8dc0, 0xc0023b2420)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_handlers.go:941 +0x59e
go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc00054a140, 0xc001f64150)
	go.temporal.io/sdk@v1.34.0/internal/internal_task_pollers.go:424 +0x3db
go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc00054a140, {0x584fea0, 0xc001f64150})
	go.temporal.io/sdk@v1.34.0/internal/internal_task_pollers.go:372 +0x205
go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
	go.temporal.io/sdk@v1.34.0/internal/internal_worker_base.go:456 +0x12f
created by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 282
	go.temporal.io/sdk@v1.34.0/internal/internal_worker_base.go:435 +0x8c"}
```

#### Comments (4)

<details>
<summary><strong>rustatian</strong> commented on 2025-07-29 07:23:33.000 UTC</summary>

@quipo Hey 👋🏻 
Transferred to the correct repo.
CC: @roxblnfk 

Reactions: 👍 2

</details>

<details>
<summary><strong>quipo</strong> commented on 2025-07-29 09:57:49.000 UTC</summary>

in the meantime, is there an alternative to `yield Workflow::all($promises)` to achieve the same goal, i.e. wait for all promises to return?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-29 10:16:12.000 UTC</summary>

Could you say why you are calling `Workflow::all()`? Where did you see such an example?

You probably meant to call [`Promise::all()`](https://php.temporal.io/classes/Temporal-Promise.html#method_all).

</details>

<details>
<summary><strong>quipo</strong> commented on 2025-07-29 15:41:04.000 UTC</summary>

I think I originally got it from claude.ai or Gemini. Promise::all() is indeed what I was after. Thanks!

</details>


---

<a id="623"></a>

### #623: [Feature Request] In test env - I can't unserialize object structure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/623 |
| **State** | OPEN |
| **Author** | agoalofalife (Ilya Chubarov) |
| **Created** | 2025-05-27 06:55:51.000 UTC (7 months ago) |
| **Updated** | 2026-01-09 11:14:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello guys! I came across with some strange things in testing env. Long story short, when i pass in mock acitvity some dto structure - sdk won't serialize it properly and as a result - later can't unserialize it.

```php
$this->activityMocks->expectCompletion('Say.hello', new Greeting(
   name :  'Name',
  status: StatusUser::Active,
  // ... etc
));
```
The problem is `ActivityMocker` is created without custom converter for `RoadRunnerActivityInvocationCache`

```php
  public function __construct(?ActivityInvocationCacheInterface $cache = null)
    {
        $this->cache = $cache ?? RoadRunnerActivityInvocationCache::create();
    }

```

### Describe the solution you'd like
How about to add in ActivityMocker __construct() custom converter? Am i right - or am i doing something wrong?



#### Comments (4)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 16:08:04.000 UTC</summary>

@agoalofalife I've tested such scenario, everything works now.
Could you please verify? 

https://github.com/temporalio/sdk-php/pull/681

</details>

<details>
<summary><strong>agoalofalife</strong> commented on 2025-12-21 14:04:50.000 UTC</summary>

@xepozz Hello, i will try later and back 

Reactions: 👍 1

</details>

<details>
<summary><strong>xepozz</strong> commented on 2026-01-09 06:07:35.000 UTC</summary>

@agoalofalife have you managed to try it again?

</details>

<details>
<summary><strong>agoalofalife</strong> commented on 2026-01-09 11:14:43.000 UTC</summary>

sorry not yet, don't have free time for that

</details>


---

<a id="619"></a>

### #619: [Bug] Don`t serialize return artivity method boolean and void types.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/619 |
| **State** | CLOSED |
| **Author** | stargazer-team |
| **Created** | 2025-05-19 15:23:49.000 UTC (7 months ago) |
| **Updated** | 2025-05-19 20:13:54.000 UTC |
| **Closed** | 2025-05-19 20:13:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Don`t serialize return artivity method boolean and void types.
```
{
  "type": "workflowExecutionFailedEventAttributes",
  "failure": {
    "message": "The passed value of type \"bool\" can not be converted to required type \"int\"",
    "source": "PHP_SDK",
    "stackTrace": "#0  /var/www/newmanager/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:112
    Temporal\\DataConverter\\JsonConverter->errorInvalidType(Temporal\\DataConverter\\Type,true)
#1  /vendor/temporal/sdk/src/DataConverter/DataConverter.php:62
    Temporal\\DataConverter\\JsonConverter->fromPayload(Temporal\\Api\\Common\\V1\\Payload,Temporal\\DataConverter\\Type)
#2  /vendor/temporal/sdk/src/DataConverter/EncodedValues.php:137
    Temporal\\DataConverter\\DataConverter->fromPayload(Temporal\\Api\\Common\\V1\\Payload,Temporal\\DataConverter\\Type)
#3  /vendor/temporal/sdk/src/DataConverter/EncodedValues.php:87
    Temporal\\DataConverter\\EncodedValues->getValue(0,ReflectionNamedType)
#4  /vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php:169
    Temporal\\DataConverter\\EncodedValues::Temporal\\DataConverter\\{closure}(Temporal\\DataConverter\\EncodedValues)
#5  /vendor/react/promise/src/FulfilledPromise.php:28
    Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}(Temporal\\DataConverter\\EncodedValues)
#6  /vendor/react/promise/src/Promise.php:134
    React\\Promise\\FulfilledPromise->then(Closure,null)
#7  /vendor/react/promise/src/Promise.php:168
    React\\Promise\\Promise::React\\Promise\\{closure}(React\\Promise\\FulfilledPromise)
#8  /vendor/react/promise/src/Promise.php:231
    React\\Promise\\Promise->settle(React\\Promise\\FulfilledPromise)
#9  /vendor/react/promise/src/Deferred.php:36
    React\\Promise\\Promise::React\\Promise\\{closure}(Temporal\\DataConverter\\EncodedValues)
#10 /vendor/temporal/sdk/src/Internal/Transport/CompletableResult.php:137
    React\\Promise\\Deferred->resolve(Temporal\\DataConverter\\EncodedValues)
#11 /vendor/temporal/sdk/src/Internal/Events/EventEmitterTrait.php:41
    Temporal\\Internal\\Transport\\CompletableResult->Temporal\\Internal\\Transport\\{closure}()
#12 /vendor/temporal/sdk/src/WorkerFactory.php:211
    Temporal\\WorkerFactory->emit(\"tick\")
#13 /vendor/temporal/sdk/src/WorkerFactory.php:303
    Temporal\\WorkerFactory->tick()
#14 /vendor/temporal/sdk/src/WorkerFactory.php:197
    Temporal\\WorkerFactory->dispatch(\"\
o\\b\ufffdF* \
\\^^\
\\^V\
\\bencoding\\^R\
json\\/plain\\^R\\^Dtrue8\\tB$0581ea3...\",array(6))
#15 /vendor/yiisoft/yii-runner-roadrunner/src/RoadRunnerHttpApplicationRunner.php:295
    Temporal\\WorkerFactory->run(Temporal\\Worker\\Transport\\RoadRunner)
#16 /vendor/yiisoft/yii-runner-roadrunner/src/RoadRunnerHttpApplicationRunner.php:169
    Yiisoft\\Yii\\Runner\\RoadRunner\\RoadRunnerHttpApplicationRunner->runTemporal(Yiisoft\\Di\\Container)
#17 /roadrunner/worker_temporal.php:19
    Yiisoft\\Yii\\Runner\\RoadRunner\\RoadRunnerHttpApplicationRunner->run()",
    "applicationFailureInfo": {
      "type": "Temporal\\Exception\\DataConverterException"
    }
  },
  "retryState": "RETRY_STATE_RETRY_POLICY_NOT_SET",
  "workflowTaskCompletedEventId": "10"
}
```
### Minimal Reproduction
```
#[ActivityInterface]
interface TestActivityInterface
{
    #[ActivityMethod]
    public function update(int $productId): bool;
}
final class TestActivity implements TestActivityInterface
{
    public function update(int $productId): bool
    {
        return true;
    }
}
```
### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [Linux]
- Temporal Version: [e.g. 1.27.2?] and SDK version 2.14.1
- Use docker building Temporal from source


#### Comments (4)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-19 16:49:16.000 UTC</summary>

Looks like a boolean value is passed when an integer is expected

</details>

<details>
<summary><strong>stargazer-team</strong> commented on 2025-05-19 16:56:31.000 UTC</summary>

Maybe boolean return value convert in int 0 or 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-19 17:28:38.000 UTC</summary>

Could you provide a reproducible example with Workflow code?

</details>

<details>
<summary><strong>stargazer-team</strong> commented on 2025-05-19 20:13:40.000 UTC</summary>

Sorry guys, this is my fail, did not press the prefix in activities that had methods with the same name. 

</details>


---

<a id="557"></a>

### #557: [Feature Request] Add memo update feature

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/557 |
| **State** | CLOSED |
| **Author** | KorDum (KorDum) |
| **Created** | 2025-01-28 13:54:16.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 13:35:27.000 UTC |
| **Closed** | 2025-02-11 13:35:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.13.0 |

#### Description

### Is your feature request related to a problem? Please describe.

From the documentation, it seems that workflow has the ability to specify memo notes (additional metadata) that could be used later in searches. I see in the PHP SDK the ability to populate a memo when workflow starts, but I don't see the ability to populate a memo during workflow execution.

I have an order creation workflow where I have the order number appear. I would like to add it to the memo and then use it when investigating incidents.

Maybe there's some other way?

### Describe the solution you'd like

I'd like something like this:

```php
Workflow::addMemo('key', 'value');
```

### Additional context

[Memo documentation](https://docs.temporal.io/workflows?_gl=1*1myspu0*_gcl_au*MTM2MTE4Mzc1NC4xNzMwOTkzNDA1*_ga*MTc3Njc3MTg3OS4xNzMwOTkzNDA2*_ga_R90Q9SJD3D*MTczODA3MTcwMC43LjEuMTczODA3MjMzOS4wLjAuMA..#memo)

#### Comments (4)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-01-28 15:59:49.000 UTC</summary>

> Maybe there's some other way?



Hi. It looks like Search Attributes can be more useful in this case.
We are going to [expose Typed Search Attributes](https://github.com/temporalio/sdk-php/pull/553) with the next minor release.

But now you can use untyped ones https://php.temporal.io/classes/Temporal-Workflow.html#method_upsertSearchAttributes

</details>

<details>
<summary><strong>KorDum</strong> commented on 2025-01-29 06:05:24.000 UTC</summary>

Thanks for the reply!
Will these attributes also be searchable through the Temporal UI?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-01-29 06:43:06.000 UTC</summary>

Yes. They will be visible, indexed, and searchable like WorkflowId or WorkflowType
https://docs.temporal.io/visibility#search-attribute

Reactions: 👍 1 🎉 1

</details>

<details>
<summary><strong>rustatian</strong> commented on 2025-01-29 09:11:29.000 UTC</summary>

@roxblnfk 
Command name: `UpsertMemo`.
Json payload name: `memo`. Type `map[string]any` like in Search (not typed) attributes.
```go
type UpsertMemo struct {
	// Memos to update.
	Memo map[string]any `json:"memo"`
}
```

Reactions: 👍 1

</details>


---

<a id="480"></a>

### #480: Workflow-init support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/480 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-08-02 04:06:03.000 UTC (1y 5m ago) |
| **Updated** | 2025-02-05 19:29:06.000 UTC |
| **Closed** | 2025-02-04 14:26:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.13.0 |

#### Description

We should have a method that's guaranteed to initialize before signals and updates come in so handlers can use initialized values.

#### Comments (4)

<details>
<summary><strong>josh-berry</strong> commented on 2024-08-26 17:11:15.000 UTC</summary>

see the parent feature issue for how other languages have handled it: https://github.com/temporalio/features/issues/400

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-09-12 11:17:33.000 UTC</summary>

I'm developing the concept of **Workflow Init** in the constructor: the user can call the `Workflow::getInput()` method to obtain input arguments.

```php
    public function __construct() {
        $input = Workflow::getInput()->getValues();
        // ... init code
    }
```

However, `getInput()` returns a `ValuesInterface`, which does not contain type information.

Manually specifying the type for required arguments like `Workflow::getInput()->getValue(0, DateTimeInterface::class);` is inconvenient.
Additionally, new objects will be created instead of reusing existing ones.

**My proposal** is to add a new method `Workflow::getTypedInput()`, which will return the same arguments that will be sent to the **Workflow Handler** after initialization.
This way, we can provide a convenient **Workflow Init** using language mechanisms. At the same time, we still have the flexibility to add a separate `InitHandler` if needed.

</details>

<details>
<summary><strong>Sushisource</strong> commented on 2024-09-24 16:30:56.000 UTC</summary>

@roxblnfk That works for me. If it's possible to allow them to specify the args in their constructor, and pass them in there I would say let's do that (possibly in addition to `getTypedInput`), possibly by using an annotation on the constructor like we've done for Python. If that's not feasible I think this approach will work just fine too.

</details>

<details>
<summary><strong>drewhoskins-temporal</strong> commented on 2024-10-01 00:57:27.000 UTC</summary>

+1 to @Sushisource's comment, if it's doable.  It seems somewhat more discoverable and idiomatic.

</details>


---

<a id="441"></a>

### #441: [Bug] Can't run the tests according to documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/441 |
| **State** | CLOSED |
| **Author** | Dirst (Dmitriy Suniaikin) |
| **Created** | 2024-05-24 07:16:16.000 UTC (1y 7m ago) |
| **Updated** | 2025-12-26 15:19:35.000 UTC |
| **Closed** | 2025-12-26 15:19:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Question, Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello, the tests are not working though I did everything according to readme. 

I have symfony app.

My worker.test.php
```
require dirname(__DIR__) . '/vendor/autoload.php';

use App\ProductImportProcess\App\Activity\ProductImportFlowActivity;
use App\ProductImportProcess\App\Workflow\ProductImportWorkflow;
use RoadRunner\VersionChecker\Version\Installed;
use RoadRunner\VersionChecker\VersionChecker;
use Temporal\Testing\WorkerFactory;
use Temporal\Worker\Transport\RoadRunner;
use Temporal\Worker\Transport\RoadRunnerVersionChecker;

$factory = WorkerFactory::create();
$worker = $factory->newWorker();

/**
 * @TODO Сделать добавление автоматическим.
 */
$worker->registerWorkflowTypes(ProductImportWorkflow::class);
$worker->registerActivity(ProductImportFlowActivity::class);
//$worker->registerActivity(FetchProductTemplateActivity::class);
$factory->run(
    RoadRunner::create(
        versionChecker: new RoadRunnerVersionChecker(
            checker: new VersionChecker(
                installedVersion: new Installed(executablePath: 'rr')
            )
        )
    )
);
```

My tests/.rr.test.yaml
```
version: "3"

rpc:
    listen: tcp://127.0.0.1:6001

server:
    command: "php /srv/app/tests/worker.test.php"

kv:
    test:
        driver: memory
        config:
            interval: 10
```

My tests bootstrap.php

```
use Symfony\Component\Dotenv\Dotenv;
use Temporal\Testing\Environment;

require dirname(__DIR__) . '/vendor/autoload.php';

if (file_exists(dirname(__DIR__) . '/config/bootstrap.php')) {
    require dirname(__DIR__) . '/config/bootstrap.php';
} elseif (method_exists(Dotenv::class, 'bootEnv')) {
    (new Dotenv())->bootEnv(dirname(__DIR__) . '/.env');
}

if ($_SERVER['APP_DEBUG']) {
    umask(0);
}

$environment = Environment::create();

$environment->startTemporalTestServer();
$environment->startRoadRunner('tests/rr serve -c .rr.test.yaml -w tests');

register_shutdown_function(fn () => $environment->stop());
```

My test
```
namespace App\Tests\New\Functional\Temporal;

use App\ProductImportProcess\App\Workflow\ProductImportWorkflow;
use PHPUnit\Framework\TestCase;
use Ramsey\Uuid\Uuid;
use Temporal\Client\GRPC\ServiceClient;
use Temporal\Client\WorkflowClient;
use Temporal\Testing\ActivityMocker;

class ProductImportWorkflowTest extends TestCase
{
    private WorkflowClient $workflowClient;
    private ActivityMocker $activityMocks;

    protected function setUp(): void
    {
        $this->workflowClient = new WorkflowClient(ServiceClient::create(getenv('TEMPORAL_ADDRESS')));
        $this->activityMocks = new ActivityMocker();

        parent::setUp();
    }

    protected function tearDown(): void
    {
        $this->activityMocks->clear();
        parent::tearDown();
    }

    public function testWorkflow(): void
    {
        $this->activityMocks->expectCompletion('ProductImportFlowActivity.assertCategoryAssigned', 'world');
        $workflow = $this->workflowClient->newWorkflowStub(ProductImportWorkflow::class);
        $run = $this->workflowClient->start($workflow, Uuid::uuid4());

        $this->assertSame('world', $run->getResult('string'));
    }
}
```

I run my test with php unit and getting this - it just hangs
![image](https://github.com/temporalio/sdk-php/assets/2942621/b2506464-8ffb-4e8c-988b-8565cb8e6fc1)


#### Comments (4)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-24 09:22:16.000 UTC</summary>

There is an example https://github.com/wolfy-j/temporal-simple-test-example/

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-24 09:24:12.000 UTC</summary>

> My tests/.rr.test.yaml

There is no `temporal` section in config

</details>

<details>
<summary><strong>Dirst</strong> commented on 2024-05-24 10:28:29.000 UTC</summary>

Thanks, this is working now, may it is worth to add this information in Readme for testing framework.

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 15:19:35.000 UTC</summary>

Next time, please review the [testing guide](https://github.com/temporalio/sdk-php/blob/master/testing/README.md).

If you have any questions, feel free to open another issue.

</details>


---

<a id="402"></a>

### #402: [Bug] ArrayRepository always overwrites entries when adding

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/402 |
| **State** | CLOSED |
| **Author** | edglev (Edgaras Levinson) |
| **Created** | 2024-03-04 12:44:50.000 UTC (1y 10m ago) |
| **Updated** | 2025-06-30 15:23:35.000 UTC |
| **Closed** | 2025-06-30 15:23:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Prevent multiple activities with the same name

### Describe the bug

Registering multiples of the same activity does not throw `ERROR_ALREADY_EXISTS`.

[ArrayRepostiory's add method](https://github.com/temporalio/sdk-php/blob/5e3307ba9ed97ed81e3bbdc12d0d6291b8a22f10/src/Internal/Repository/ArrayRepository.php#L74) checks a non-existing array with `isset($this->prototypes[$name])` and is always false, overwriting entries regardless of `$overwrite` argument specified

#### Comments (2)

<details>
<summary><strong>rela589n</strong> commented on 2025-05-24 08:27:41.000 UTC</summary>

Also stumbled upon this.

Actually this `add()` method never takes into account second parameter:

```php
  /**
   * Register a new {@see Identifiable} inside the repository.
   */
  public function add(Identifiable $entry, bool $overwrite = false): void;
```

I see that in many places it's passed as `false` explicitly, and in some places it's just omitted. Yet, I've never seen it to be true.

Though, current behavior is as if it always was `true` 😐 

</details>

<details>
<summary><strong>rela589n</strong> commented on 2025-06-05 13:20:09.000 UTC</summary>

Hi, @wolfy-j ,

This is quite sever bug, since right now it tolerates naming collisions basically everywhere (including workflow names, activity names, worker task queues, etc.)


</details>


---

<a id="302"></a>

### #302: [Feature Request] Set the expectCompletion result for each Activity call inside the loop

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/302 |
| **State** | OPEN |
| **Author** | num213 |
| **Created** | 2023-04-27 11:33:19.000 UTC (2y 8m ago) |
| **Updated** | 2024-04-29 14:09:15.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement, Tests |
| **Assignees** | wolfy-j, roxblnfk |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.
For PHP-SDK we can use `ActivityMocker` and `expectCompletion()` to mock an activity call result. And it works great if we don't call the activity inside the loop.

If we call it inside the loop than we can't set `expectCompletion()` for each of the Activity call inside the loop.

For example consider we have the following phpunit test:

```php
public function testWorkflowSend()
{
    $workflow = $this->workflowClient->newWorkflowStub(SomeWorkflow::class);
    $run = $this->workflowClient->start($workflow, ['value1', 'value2', 'value3']);
    $this->assertSame(['someResult1', 'someResult2', 'someResult3'], $run->getResult('array'));
}
```

The workflow method:

```php
public function send(array $values)
{
    $results = [];
    foreach ($values as $value) {
        $results[] = yield $this->activity->doSomething($value);
    }
    return $results;
}
```

And we want to mock the activity calls like this:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', ['someResult1', 'someResult2', 'someResult3']
);
```

The result of running the workflow inside this test will be:

```php
array(3) {
[0] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}, 
[1] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}, 
[2] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}
```

Instead of:

```php
array(9) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}
```

Even if we mock the activity calls like this:

```php
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult1');
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult2');
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult3');
```

The result will be:

```php
array(9) {
    [0] => string(11) "someResult3",
    [1] => string(11) "someResult3",
    [2] => string(11) "someResult3",
}
```

### Describe the solution you'd like
It will be great if we have a choice to set `expectCompletion` result for each call of the Activity inside the loop. For example:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult1', 1
); // for the first call

$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult2', 2
); // for the second

$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult3', 3
); // for the third
```

And the same with `expectFailure()`:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult1', 1
); // for the first call
$this->activityMocks->expectFailure(
    'SomeActivity.doSomething', new Error(), 2
); // except error for the second call
```



#### Comments (2)

<details>
<summary><strong>rafaelemi</strong> commented on 2024-04-29 11:31:34.000 UTC</summary>

any news about this? 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-29 14:09:14.000 UTC</summary>

Hello. There are no updates yet, but the task of improving testing tools is included in the roadmap.

Reactions: 👍 2

</details>


---

<a id="123"></a>

### #123: [Bug] withEnableSessionWorker causes to ActivityNotRegisteredError

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/123 |
| **State** | OPEN |
| **Author** | mixadior (Diordienko Mykhail) |
| **Created** | 2021-09-13 14:44:40.000 UTC (4y 3m ago) |
| **Updated** | 2025-12-22 16:27:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

If worker started with `->withEnableSessionWorker(true)` requesting any activity from it causes `ActivityNotRegisteredError`

### To Reproduce

php worker

```php

<?php

require_once __DIR__."/vendor/autoload.php";

use NetworkRequestTemporalPhpServices\Services\RequestLight\GuzzleRequestExecutor;
use NetworkRequestTemporalPhpServices\Services\RequestLight\RequestResultDto;
use Temporal\Activity\ActivityInterface;
use Temporal\WorkerFactory;
use Temporal\Client\GRPC\ServiceClient;
use Temporal\Client\WorkflowClient;

$factory = WorkerFactory::create();

$workflowClient = WorkflowClient::create(ServiceClient::create('host.docker.internal:7233'));
$worker = $factory->newWorker(
    'workers_test_sessions',
    \Temporal\Worker\WorkerOptions::new()
        ->withMaxConcurrentActivityTaskPollers(8)
        ->withMaxConcurrentWorkflowTaskPollers(8)
        ->withEnableSessionWorker(true)
);

#[ActivityInterface(prefix: "test_sessions_act.")]
class SessionTestActivity {
    public function makeRequest(string $name): string
    {
        return "sessioned ".$name;
    }

}

$worker->registerActivityImplementations(new SessionTestActivity());
$factory->run();

```

golang workflow

```go
package app

import (
	"errors"
	"fmt"
	"go.temporal.io/sdk/workflow"
	"strings"
	"time"
)

func Test123Workflow(ctx workflow.Context) error {
	ao2 := workflow.ActivityOptions{
		TaskQueue: "workers_test_sessions",
		ScheduleToCloseTimeout: time.Second * 60,
		ScheduleToStartTimeout: time.Second * 60,
		StartToCloseTimeout: time.Second * 60,
		HeartbeatTimeout: time.Second * 10,
		WaitForCancellation: false,
	}

	activityRunCtx2 := workflow.WithActivityOptions(ctx, ao2)

	so := &workflow.SessionOptions{
		CreationTimeout:  time.Minute,
		ExecutionTimeout: 10 * time.Minute,
	}

	sessionCtx, errSess := workflow.CreateSession(activityRunCtx2, so)
	if errSess != nil {
		return errSess
	}
	defer workflow.CompleteSession(sessionCtx)

	var t interface{}
	workflow.ExecuteActivity(sessionCtx, "test_sessions_act.makeRequest", "testname").Get(sessionCtx, &t)

	return nil
}

```

golang workflow worker:

```go


// @@@SNIPSTART hello-world-project-template-go-worker
package main

import (
    "log"

    "go.temporal.io/sdk/client"
    "go.temporal.io/sdk/worker"

    "hello-world-project-template-go"
)

func main() {
    // Create the client object just once per process
    c, err := client.NewClient(client.Options{})
    if err != nil {
        log.Fatalln("unable to create Temporal client", err)
    }
    defer c.Close()
    // This worker hosts both Worker and Activity functions
    w := worker.New(c, "workers_test_sessions_worklow_q", worker.Options{})
    w.RegisterWorkflow(app.Test123Workflow)

    // Start listening to the Task Queue
    err = w.Run(worker.InterruptCh())
    if err != nil {
        log.Fatalln("unable to start Worker", err)
    }
}
// @@@SNIPEND

```

golang workflow starter:

```go

// @@@SNIPSTART hello-world-project-template-go-start-workflow
package main

import (
	"context"
	"fmt"
	"log"

	"go.temporal.io/sdk/client"

	"hello-world-project-template-go"
)

func main() {
	// Create the client object just once per process
	c, err := client.NewClient(client.Options{})
	if err != nil {
		log.Fatalln("unable to create Temporal client", err)
	}
	defer c.Close()
	options := client.StartWorkflowOptions{
		TaskQueue: "workers_test_sessions_worklow_q",
	}

	we, err := c.ExecuteWorkflow(context.Background(), options, app.Test123Workflow)
	if err != nil {
		log.Fatalln("unable to complete Workflow", err)
	}
	var greeting string
	err = we.Get(context.Background(), &greeting)
	if err != nil {
		log.Fatalln("unable to get Workflow result", err)
	}
	printResults(greeting, we.GetID(), we.GetRunID())
}

func printResults(greeting string, workflowID, runID string) {
	fmt.Printf("\nWorkflowID: %s RunID: %s\n", workflowID, runID)
	fmt.Printf("\n%s\n\n", greeting)
}
// @@@SNIPEND


```


### Expected behavior

Activity written in php (`test_sessions_act.makeRquest`) executed.

### Screenshots/Terminal output

ActivityNotRegisteredError: unable to find activityType=test_sessions_act.makeRequest. Supported types: [internalSessionCreationActivity, internalSessionCompletionActivity]

Full workflow execution exported here: http://feodosian.com/wfd.json 

### Versions

- OS: MacOS 11
- Temporal Version 1.9.0 for golang code
- Roadrunner 2.4 
- Docker-compose official (https://github.com/temporalio/docker-compose) with temporal 1.12 



#### Comments (4)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-09-13 16:36:53.000 UTC</summary>

Hi,

it's semi-bug at the moment since we exposed the configuration option for sessions ahead of the actual implementation. Since there a no exists implementation in Java SDK we will have to invent an OOP approach to sessions first. This work schedule is for later this year for 1.1.0 update of Temporal SDK.

Does your use case depend on this feature now?

JD

</details>

<details>
<summary><strong>mixadior</strong> commented on 2021-09-14 09:41:20.000 UTC</summary>

Hi, 

> it's semi-bug at the moment since we exposed the configuration option for sessions ahead of the actual implementation. Since there a no exists implementation in Java SDK we will have to invent an OOP approach to sessions first. This work schedule is for later this year for 1.1.0 update of Temporal SDK.

thanks for explaining. As i see php-sdk is actually go-sdk bundled into roadrunner and called via some protocol from php code. I cloned roadrunner-temporal plugin code and saw here, that temporal worker created (in golang code) with session worker and session creating activity works correctly (if don't restart RR), i failed  on finding problem why it doesn't register user activities. 

> Does your use case depend on this feature now?

Actually not, at this moment i'm investigating if i can use php-sdk, how it's documentation and examples cover cases which can meet our team if we choose it as tool for porting our php legacy code. I saw example with fileprocessing, which uses approach with separate taskqueues for every worker, i will check this approach. 




</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 12:10:01.000 UTC</summary>

Hey @mixadior, have you tried to test this feature on the latest PHP-SDK/RR versions?

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-22 16:27:59.000 UTC</summary>

@mixadior could you please check again?

</details>


---

<a id="117"></a>

### #117: [Bug] Wrong activity response type

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/117 |
| **State** | CLOSED |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2021-07-10 19:42:17.000 UTC (4y 6m ago) |
| **Updated** | 2023-04-19 13:08:15.000 UTC |
| **Closed** | 2023-04-19 13:08:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Duplicate |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the bug**
I send an array from my activity as a result, but in promise step **then** I get **stdClass** instead of array.

**To Reproduce**
Steps to reproduce the behavior:
1. Create activity that will send an associative array.
2. Create workflow where you call activity and add post-processing in **then** step.
3. Try to get value from **result** as if it array.

**Expected behavior**
I get value


**Expected behavior**
I get an error `PanicError: Cannot use object of type stdClass as array (type: Error, retryable: true)`

**Screenshots/Terminal ouput**
![image](https://user-images.githubusercontent.com/6815714/125174609-46f6ee80-e1cf-11eb-88ce-09608ec4c7a0.png)

You can use this snippet:
```php
#[\Temporal\Activity\ActivityInterface(prefix: "app.")]
class CommonActivity
{
    public function slow(string $name): array
    {
        return [
            'result' => 'Hello, ' . $name,
        ];
    }
}
```

```php
#[\Temporal\Workflow\WorkflowInterface]
final class FastWorkflow
{
    #[\Temporal\Workflow\WorkflowMethod("wf")]
    public function run(string $name, int $count): \Generator
    {
        $activity = Workflow::newActivityStub(
            CommonActivity::class
        );

        $activity->slow($name)->then(function ($result) {
            $result['result'];
        });

        return 0;
    }
}
```

As I understand the problem is locating [here](https://github.com/temporalio/sdk-php/blob/master/src/DataConverter/JsonConverter.php#L86). But I don't know how to solve it.

#### Comments (4)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-07-10 20:12:13.000 UTC</summary>

Hello! This is not a bug (More precisely, this is documented behavior). Please use DTO instead. 
Related issue https://github.com/temporalio/sdk-php/issues/93#issuecomment-804008399

</details>

<details>
<summary><strong>xepozz</strong> commented on 2021-07-10 20:42:37.000 UTC</summary>

Then can you make behaviour more predictable:
if you return `['key' => 'test']` it will be converted to an object, but if you return `['test']` it will be converted to an array.


</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-07-10 20:51:08.000 UTC</summary>

> if you return ['key' => 'test'] it will be converted to an object, but if you return ['test'] it will be converted to an array.

Now that's how it works, isn't it?

</details>

<details>
<summary><strong>xepozz</strong> commented on 2021-07-10 21:15:54.000 UTC</summary>

Yes, it is. But it isn't clear.

</details>


---

<a id="108"></a>

### #108: [Bug] Workflow type is messed when using `continueAsNew`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/108 |
| **State** | CLOSED |
| **Author** | kozlice (Valentin Nazarov) |
| **Created** | 2021-04-27 04:20:32.000 UTC (4y 8m ago) |
| **Updated** | 2021-07-17 23:59:58.000 UTC |
| **Closed** | 2021-07-17 23:59:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Bug |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

**Describe the bug**
I'm trying to implement a self-restarting workflow. The idea is simple: await until user balance is zero, do stuff, await until it's above zero, then restart. Here's how the workflow looks like:

```php
<?php

declare(strict_types=1);

namespace Application\BusinessProcess\ZeroBalance;

use Application\BusinessProcess\BusinessProcessWorkflowInterface;
use Temporal\Activity\ActivityOptions;
use Temporal\Internal\Workflow\ActivityProxy;
use Temporal\Workflow;

#[Workflow\WorkflowInterface]
class ZeroBalanceWorkflow implements BusinessProcessWorkflowInterface
{
    private ActivityProxy|ZeroBalanceActivity $activity;
    private ?int $balance = null;

    public function __construct()
    {
        $options = ActivityOptions::new()
            ->withScheduleToStartTimeout('PT1H')
            ->withScheduleToCloseTimeout('P1M')
            ->withStartToCloseTimeout('PT5M')
        ;

        $this->activity = Workflow::newActivityStub(ZeroBalanceActivity::class, $options);
    }

    #[Workflow\WorkflowMethod]
    public function execute(int $educationServiceId): \Generator
    {
        yield Workflow::await(fn () => $this->balance === 0);
        yield $this->activity->doStuffWhenZero($educationServiceId);
        yield Workflow::await(fn () => $this->balance > 0);
        yield $this->activity->doStuffWhenAboveZero($educationServiceId);
        return Workflow::continueAsNew(self::class, [$educationServiceId]);
    }

    #[Workflow\SignalMethod]
    public function setBalance(int $balance): void
    {
        $this->balance = $balance;
    }
}
```

Activity doesn't really do anything, but just for completeness:
```php
<?php

declare(strict_types=1);

namespace Application\BusinessProcess\ZeroBalance;

use Application\BusinessProcess\BusinessProcessActivityInterface;
use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;
use Temporal\Activity;

#[Activity\ActivityInterface]
class ZeroBalanceActivity implements BusinessProcessActivityInterface, LoggerAwareInterface
{
    use LoggerAwareTrait;

    #[Activity\ActivityMethod]
    public function doStuffWhenZero(int $educationServiceId): int
    {
        $this->logger->info(sprintf('Doing stuff for ID %d, balance is zero', $educationServiceId));

        return 42;
    }

    #[Activity\ActivityMethod]
    public function doStuffWhenAboveZero(int $educationServiceId): int
    {
        $this->logger->info(sprintf('Doing stuff for ID %d, balance is ABOVE zero now', $educationServiceId));

        return 42;
    }
}
```

The tricky part is that I'm using Symfony as well. Here's the modified worker binary:
```php
#!/usr/bin/env php
<?php

declare(strict_types=1);

use Application\BusinessProcess\BusinessProcessRegistry;
use Infrastructure\Kernel;
use Symfony\Component\Dotenv\Dotenv;
use Temporal\WorkerFactory;

ini_set('display_errors', 'stderr');

set_time_limit(0);
include dirname(__DIR__).'/vendor/autoload.php';

(new Dotenv())->bootEnv(dirname(__DIR__).'/.env');
$kernel = new Kernel((string) $_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);
$kernel->boot();

$factory = WorkerFactory::create();
$worker = $factory->newWorker();

/** @psalm-var BusinessProcessRegistry $registry */
$registry = $kernel
    ->getContainer()
    ->get(BusinessProcessRegistry::class)
;

foreach ($registry->getWorkflowTypes() as $workflowType) {
    $worker->registerWorkflowTypes($workflowType);
}

foreach ($registry->getActivityTypes() as $activityInstance) {
    $worker->registerActivityImplementations($activityInstance);
}

$factory->run();
```

The `BusinessProcessRegistry` class looks like this:
```php
<?php

declare(strict_types=1);

namespace Application\BusinessProcess;

use Generator;
use Spiral\Tokenizer\ClassLocator;
use Symfony\Component\Finder\Finder;

class BusinessProcessRegistry
{
    public function __construct(
        private string $projectDirectory,
        private iterable $activityTypes,
    )
    {
    }

    /**
     * @return Generator<class-string>
     */
    public function getWorkflowTypes(): Generator
    {
        $finder = Finder::create()
            ->files()
            ->name('*.php')
            ->in($this->projectDirectory . '/src/Application/BusinessProcess')
        ;

        $locator = new ClassLocator($finder);

        foreach ($locator->getClasses(BusinessProcessWorkflowInterface::class) as $class) {
            if ($class->isAbstract() || $class->isInterface()) {
                continue;
            }

            yield $class->getName();
        }
    }

    /**
     * @return Generator<object>
     */
    public function getActivityTypes(): Generator
    {
        /** @var object $activity */
        foreach ($this->activityTypes as $activity) {
            yield $activity;
        }
    }
}
```

Interfaces `BusinessProcessWorkflowInterface` and `BusinessProcessActivityInterface` are just dummy markers. Activities injected into constructor are Symfony services.

For testing I kickstart the workflow and then send signals to it:
```php
        $workflow = $this->workflowClient->newWorkflowStub(ZeroBalanceWorkflow::class,
            WorkflowOptions::new()
                ->withWorkflowId((string) 14069)
                ->withWorkflowIdReusePolicy(IdReusePolicy::POLICY_ALLOW_DUPLICATE)
        );
        $this->workflowClient->startWithSignal($workflow, 'setBalance', [2], [14069]);
        sleep(2);
        $workflow->setBalance(0);
        sleep(2);
        $workflow->setBalance(8);
```

Once it reaches the `continueAsNew`, things get messy. It tries to start process with FQDN class name:

<img width="1512" alt="2021-04-27_07-03-28" src="https://user-images.githubusercontent.com/747947/116183816-4ea60b80-a727-11eb-9a4d-27e9ec557289.png">

Worker's log is full of errors about non-existent workflow:
```log
2021/04/27 03:09:36 WARN    temporal        Failed to process workflow task.    {"Namespace": "default", "TaskQueue": "default", "WorkerID": "34106@Valentins-iMac.local@default@1", "WorkflowType": "Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow", "WorkflowID": "14069", "RunID": "e3b9ca91-6d80-449e-bfe4-46ba8f294ba9", "Attempt": 70, "Error": "unable to find workflow type: Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow. Supported types: [ZeroBalanceWorkflow]"}
2021/04/27 03:09:46 WARN    temporal        Failed to process workflow task.    {"Namespace": "default", "TaskQueue": "default", "WorkerID": "34106@Valentins-iMac.local@default@1", "WorkflowType": "Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow", "WorkflowID": "14069", "RunID": "e3b9ca91-6d80-449e-bfe4-46ba8f294ba9", "Attempt": 71, "Error": "unable to find workflow type: Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow. Supported types: [ZeroBalanceWorkflow]"}
2021/04/27 03:09:56 WARN    temporal        Failed to process workflow task.    {"Namespace": "default", "TaskQueue": "default", "WorkerID": "34106@Valentins-iMac.local@default@1", "WorkflowType": "Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow", "WorkflowID": "14069", "RunID": "e3b9ca91-6d80-449e-bfe4-46ba8f294ba9", "Attempt": 72, "Error": "unable to find workflow type: Application\\BusinessProcess\\ZeroBalance\\ZeroBalanceWorkflow. Supported types: [ZeroBalanceWorkflow]"}
```

The web UI was having seizures:

![temporal-ui-seizures](https://user-images.githubusercontent.com/747947/116184447-72b61c80-a728-11eb-8878-a6b35bf167a3.gif)

I had to kill the bad workflow instance using `tctl wf terminate`. It wasn't showing up in `tctl wf la` for some reason, good thing the run ID was present in worker's log.

**Versions (please complete the following information where relevant):**
 - Temporal v1.8.1 running in Docker
 - PHP 8.0.1
 - Temporal PHP SDK v1.0.3
 - Symfony 5.2.x


#### Comments (4)

<details>
<summary><strong>kozlice</strong> commented on 2021-04-27 05:01:09.000 UTC</summary>

Update: found out that the problem was likely with usage of generator in `BusinessProcessRegistry::getWorkflowTypes`. Collecting and returning a list of class names instead of yielding them solves the problem:

```php
    /**
     * @return list<class-string>
     */
    public function getWorkflowTypes(): iterable
    {
        $finder = Finder::create()
            ->files()
            ->name('*.php')
            ->in($this->projectDirectory . '/src/Application/BusinessProcess')
        ;

        $locator = new ClassLocator($finder);

        $types = [];

        foreach ($locator->getClasses(BusinessProcessWorkflowInterface::class) as $class) {
            if ($class->isAbstract() || $class->isInterface()) {
                continue;
            }

            $types[] = $class->getName();
        }

        return $types;
    }
```

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-27 16:26:55.000 UTC</summary>

> Update: found out that the problem was likely with usage of generator in BusinessProcessRegistry::getWorkflowTypes. Collecting and returning a list of class names instead of yielding them solves the problem:

But you then read the collection of classes anyway and register them in the worker? So replacing `yield` with an `array` should not affect the final result in `$worker`.


</details>

<details>
<summary><strong>kozlice</strong> commented on 2021-04-27 17:46:55.000 UTC</summary>

@SerafimArts that's correct. I've rolled back to generator solution and it still works fine. That's confusing, because I've made no other changes. Any ideas why this could happen?

</details>

<details>
<summary><strong>kozlice</strong> commented on 2021-07-17 23:59:57.000 UTC</summary>

Can't reproduce this anymore with latest versions, so I'm closing this issue

</details>


---

<a id="640"></a>

### #640: Enable `Discussions`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/640 |
| **State** | OPEN |
| **Author** | ruudk (Ruud Kamphuis) |
| **Created** | 2025-07-25 11:11:14.000 UTC (5 months ago) |
| **Updated** | 2025-07-25 12:25:58.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

It would be great to enable the Discussions feature for this repository. It would allow me to ask questions or ask for help, things that are not issues perse.

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-25 12:25:27.000 UTC</summary>

We have the [Question label](https://github.com/temporalio/sdk-php/issues?q=sort%3Aupdated-desc+state%3Aopen+label%3A%22Question%22) for questions, as well as many other channels where you can ask a question, like [Slack](https://t.mp/slack) or [Forum](https://community.temporal.io/tag/php-sdk)

</details>


---

<a id="635"></a>

### #635: [Bug] Memory leak workflow worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/635 |
| **State** | OPEN |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2025-07-13 06:46:09.000 UTC (6 months ago) |
| **Updated** | 2025-12-26 13:21:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Reload workflow with ui

### Describe the bug

if you re-run the workflow via the UI too many times, the workflow worker starts leaking memory. You can end up with a zombie process with this success.
I managed to create a memory leak of a whole 1gb and this is not a redistribution.


video proff: https://youtu.be/LVZEeMcE7rE


### Minimal Reproduction

large number of workflow re-strat


### Environment/Versions

- Temporal Version:  1.24.2
- SDK version: v2.14.1


#### Comments (3)

<details>
<summary><strong>root-aza</strong> commented on 2025-07-14 07:23:32.000 UTC</summary>

<img width="1135" height="756" alt="Image" src="https://github.com/user-attachments/assets/d98e1fe3-a440-4b5a-8ce7-34e6a1f29f24" />

meminfo dump

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2025-10-03 15:17:36.000 UTC</summary>

Can you test this behaviour with stick cache size set to < 10 items.

Reactions: 👀 1

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 13:21:37.000 UTC</summary>

@root-aza I'd ask you to verify this behavior with the latest SDK version.
Also it would be nice if you attach the additional information:
- Symfony framework version
- What bridge and its version do you use, as far as I can understand it is https://github.com/VantaFinance/temporal-bundle?
- RoadRunner version
- .rr.yaml config
- Is there the same behavior if you ask wrk to warm your site? Regular hello-word endpoint and the one with temporal client call: run an empty activity, e.g.

</details>


---

<a id="633"></a>

### #633: [Bug] Unexpected failures and hanging workflows under high concurrency in parent-child workflows with signals

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/633 |
| **State** | CLOSED |
| **Author** | igancev (Ivan Gantsev) |
| **Created** | 2025-07-02 09:56:08.000 UTC (6 months ago) |
| **Updated** | 2025-07-09 08:02:05.000 UTC |
| **Closed** | 2025-07-08 16:32:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I create multiple workflows (in [code example](https://github.com/igancev/temporal-example-errors)) that each start a child workflow with several activities. The child workflows await signals and should unblock upon receiving them.

I deliberately set up an environment with insufficient workers to handle the submitted workflow volume quickly, creating high-concurrency conditions.

I expected all workflows to eventually reach `Completed` status (as guaranteed by **Durable Execution**), but this doesn't occur:

- Some workflows immediately show `Failed` status
- **After processing**: When Roadrunner workers finish handling payloads, a portion of workflows remain stuck in `Running` state. These suspended workflows should unblock and complete after receiving signals, but fail to do so.

I'm want to achieve stable steps execution in Temporal Workflows since it promises me "Durable Execution", **even if the workers are working in a high concurrency environment**.

I assume that in the provided codebase, I'm following the documentation precisely without deviations, and rightfully expect every workflow to complete without errors. However, if I'm misusing the SDK capabilities or implementing something incorrectly, please point out the logical flaws in my examples.

### Describe the bug

Under high-concurrency conditions (2000+ workflows, with one instance of Roadrunner, with 4 activity workers, on the [code example](https://github.com/igancev/temporal-example-errors)), the PHP SDK exhibits unexpected failures and workflow suspensions despite proper signal handling logic. Approximately 5% of workflows end in `Failed` state or remain indefinitely suspended (`Running`) when they should complete after receiving signals.

Examples of errors (more detailed in [code example](https://github.com/igancev/temporal-example-errors))):

```
"The passed value of type \"int\" can not be converted to required type \"array\""

"The passed value of type \"array\" can not be converted to required type \"int\""

"undefined response: Got the response to undefined request 12695"
"process event for default [panic]"
```

### Minimal Reproduction

I prepared [repository with demo application](https://github.com/igancev/temporal-example-errors), where created high-concurency environment and reproduced bugs and unexpected behavior.

### Environment/Versions

- OS and processor: 
        - `OS: Arch Linux x86_64, CPU: AMD Ryzen 5 4600H`
- Temporal Version:
        - `Temporal: 1.25.0, Roadrunner: 2025.1.1, PHP temporal/sdk: v2.14.1`
- Are you using Docker or Kubernetes or building Temporal from source?
	- `Docker environment are prepared in demo application repository`


### Additional context

- https://github.com/igancev/temporal-example-errors
- Screen recording video of script launching: [Link](https://www.dropbox.com/scl/fi/wrjg95j88f2ktexdwha7w/demonstrate-temporal-errors-2025-07-02_11.07.52.mp4?rlkey=pkj58ql56pfdphl26h9cdr3bn&e=2&st=rz8k5l2x&dl=0)


#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-02 13:36:26.000 UTC</summary>

Try to set `cache_size` to `100` in `.rr.yaml` and `WorkerOptions::withMaxConcurrentWorkflowTaskExecutionSize` to `100`
[PR](https://github.com/igancev/temporal-example-errors/pull/1)

Reactions: 👍 1 🎉 1 🚀 1 👀 1

</details>

<details>
<summary><strong>igancev</strong> commented on 2025-07-08 13:36:29.000 UTC</summary>

@roxblnfk, thanks, it's really works! 👍🙌 It's awesome! 🚀

Unfortunately, with the default settings, we experience the behavior described above.

Two questions in this regard:

1. Do you have any recommendations on how to precisely calculate the `cache_size` and `MaxConcurrentWorkflowTaskExecutionSize` parameters in a PHP + Roadrunner setup?

2. Also, are there plans to change the default settings for Roadrunner due to current issues with the default values?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-08 16:01:12.000 UTC</summary>

1. No I don't
2. You can create an issue about it in the RoadRunner repo. I think it would be nice to decrease the default value from 10K to 1K

Reactions: 👍 1

</details>


---

<a id="610"></a>

### #610: [Bug] Workflows with promoted properties fails on 2.14.0 sdk version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/610 |
| **State** | CLOSED |
| **Author** | rmikalkenas (Rokas Mikalkėnas) |
| **Created** | 2025-05-07 11:02:03.000 UTC (8 months ago) |
| **Updated** | 2025-05-07 11:50:29.000 UTC |
| **Closed** | 2025-05-07 11:48:40.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.14.1 |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

After upgrade of sdk to 2.14.0 noticed that some workflows which have constructors with promoted properties started to fail.
Seems that it only fails if workflow method has arguments. Somehow these arguments are pushed to workflow constructor 😕 

Sdk version 2.13.4 works fine, without issues.

![Image](https://github.com/user-attachments/assets/d7d33036-142e-4715-8904-6812a510af39)

### Minimal Reproduction

Workflow:

```php
#[WorkflowInterface]
class AsyncGreetingWorkflow
{
    private GreetingActivity|Proxy $greetingActivity;

    /**
     * @param string[] $names
     */
    public function __construct(
        private bool $executing = false,
        private array $names = [],
    ) {
        $this->greetingActivity = Workflow::newActivityStub(
            GreetingActivity::class,
        );
    }

    #[WorkflowMethod(name: 'AsyncGreeting.greet')]
    public function greet(array $names = []): \Generator
    {
        yield Workflow::awaitWithTimeout(
            CarbonInterval::minutes(1),
            function (): bool {
                return $this->names !== [];
            },
        );

        yield Workflow::timer(2);

        $this->executing = true;

        $data = [];

        foreach ($this->names as $name) {
            [$hello, $bye] = yield from $this->doGreet($name);

            $data[] = $hello . "\n" . $bye;
        }

        try {
            return \implode(\PHP_EOL, $data);
        } finally {
            $this->executing = false;
        }
    }

    #[SignalMethod]
    public function add(string $name): void
    {
        $this->names[] = $name;
    }

    private function doGreet(string $name): \Generator
    {
        $hello = yield $this->greetingActivity->composeGreeting('Hello', $name);
        $bye = yield $this->greetingActivity->composeGreeting('Bye', $name);

        return [$hello, $bye];
    }
}
```

Trigger:

```php
$workflow = $this->workflowManager->newWorkflowStub(
    AsyncGreetingWorkflow::class,
);
$run = $this->workflowManager->start($workflow, args: ['A', 'B']);
$workflow->add('Antony');
$workflow->add('John');
```

### Environment/Versions

- php 8.4.6
- roadrunner 2024.3.5
- sdk version: 2.14.0
- using temporal cloud


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-07 11:50:28.000 UTC</summary>

Thanks for the report. The fix is now available in 2.14.1

Reactions: 🎉 1

</details>


---

<a id="608"></a>

### #608: [Bug] PHP API DOC link isn't working

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/608 |
| **State** | CLOSED |
| **Author** | StanQ1 |
| **Created** | 2025-05-05 17:39:32.000 UTC (8 months ago) |
| **Updated** | 2025-05-07 06:23:05.000 UTC |
| **Closed** | 2025-05-07 06:23:03.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?
open the link
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

![Image](https://github.com/user-attachments/assets/492fce1e-d5c8-47ad-81ae-966958cd70e2)

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

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

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-07 06:23:03.000 UTC</summary>

Thank you for creating the issue. The website is now working.

</details>


---

<a id="598"></a>

### #598: [Bug] Request to Remove @internal Annotation from WorkflowExecutionDescription or Provide Alternative Access

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/598 |
| **State** | CLOSED |
| **Author** | yourmaze (Altabasov Semyon) |
| **Created** | 2025-04-14 16:27:36.000 UTC (9 months ago) |
| **Updated** | 2025-04-14 17:22:28.000 UTC |
| **Closed** | 2025-04-14 17:11:05.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.14.0 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

I need to access detailed information about Workflow Execution in my application. The `WorkflowExecutionDescription` class seems to provide the required data through its `info` property, but it is marked as `@internal`, making it inaccessible.

### Describe the bug

The `WorkflowExecutionDescription` class in the PHP SDK is marked as `@internal`, which prevents external usage. This restricts access to critical details about Workflow Execution, and there appears to be no alternative public API for retrieving this information.

```php
namespace Temporal\Client\Workflow;

use Temporal\Workflow\WorkflowExecutionInfo;

/**
 * DTO that contains detailed information about Workflow Execution.
 *
 * @see \Temporal\Api\Workflowservice\V1\DescribeWorkflowExecutionResponse
 *
 * @internal
 */
final class WorkflowExecutionDescription
{
    /**
     * @internal
     */
    public function __construct(
        public readonly WorkflowExecutionInfo $info,
    ) {}
}
```

### Environment/Versions

- Temporal SDK Version: 2.13.4

### Additional context

I am specifically interested in retrieving the `WorkflowExecutionStatus` enum from the `WorkflowExecutionInfo $info` property within the `WorkflowExecutionDescription` class. This status is critical for my use case as it provides essential information about the current state of the Workflow Execution. Currently, the `@internal` annotation on the `WorkflowExecutionDescription` class prevents me from accessing this data. 

Is there an alternative way to obtain the `WorkflowExecutionStatus` without relying on the `WorkflowExecutionDescription` class? If no alternative exists, could the `@internal` annotation be removed or relaxed to allow external usage of this class?


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-04-14 17:01:12.000 UTC</summary>

Feel free to use this property, I'll remove the annotation in the next minor release.

Reactions: ❤️ 1

</details>


---

<a id="580"></a>

### #580: Initial Nexus implementation - PHP

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/580 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-11 14:17:26.000 UTC (10 months ago) |
| **Updated** | 2025-11-14 08:59:55.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Alongside Nexus PHP SDK, need Temporal-specific implementation in this SDK. See https://github.com/temporalio/features/issues/609


#### Comments (1)

<details>
<summary><strong>iq-cw</strong> commented on 2025-03-18 07:11:42.000 UTC</summary>

Is there already a timetable for when this feature will be released? We are very interested in using Nexus. 

</details>


---

<a id="579"></a>

### #579: [DX] Unexpected behaviour with lax DateInterval string parsing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/579 |
| **State** | CLOSED |
| **Author** | jackprice (Jack Price) |
| **Created** | 2025-03-07 18:41:26.000 UTC (10 months ago) |
| **Updated** | 2025-10-31 11:16:49.000 UTC |
| **Closed** | 2025-10-31 11:16:49.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | 2.17.0 |
| **Reactions** | 👍 1 |

#### Description

This is the intended behaviour, but I definitely think this needs calling out in the external docs. I have read the documentation pretty well, and this surprised me.

When strings are passed to methods that expect a `DateIntervalValue`, strings are parsed using `CarbonInterval::fromString` (vs `DateInterval::__construct`). This can result in very surprising behaviour, especially because `CarbonInterval::fromString` is very loose with its parsing, and will silently drop some parts rather than erroring.

For example

```php
yield Workflow::timer('P2M')
```

will result in a timer of 2 minutes, rather than the 2 months as you might expect as in PHP's DateInterval. You can use DateInterval-style strings, and it will work *most of the time*

```php
/** Identical results: */

yield Workflow::timer('PT2M') // 2 minutes
yield Workflow::timer(new \DateInterval('PT2M')) // 2 minutes

yield Workflow::timer('P1Y') // 1 year
yield Workflow::timer(new \DateInterval('P1Y')) // 1 year

/** Different results with no errors: */

yield Workflow::timer('P2M') // 2 minutes
yield Workflow::timer(new \DateInterval('P2M')) // 2 months

yield Workflow::timer('PT1H5M') // 1 hour
yield Workflow::timer(new \DateInterval('PT1H5M')) // 1 hour 5 minutes
```

Is there any scope to change the type to be more explicit or restrictive? (though this would be a breaking change)

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-10 09:45:27.000 UTC</summary>

> his needs calling out in the external docs

Makes sense. 

> Is there any scope to change the type to be more explicit or restrictive? (though this would be a breaking change)

This does indeed look like a breaking change. However, I would consider it more of a bug fix.
I think we should explore an alternative option: issuing a warning when a string interval can be interpreted in different ways.


</details>


---

<a id="448"></a>

### #448: Expose UpdateID in an update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/448 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 16:17:09.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-06 11:53:05.000 UTC |
| **Closed** | 2024-08-06 11:53:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

This will allow users to use it when they want a unique idempotent primary key for handlers.

#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-06-20 15:36:52.000 UTC</summary>

Looks like we already have it
https://github.com/temporalio/sdk-php/blob/cc879864a3fe0cf023d941b99f7c5e31f4c82ff7/src/Client/Update/UpdateHandle.php#L45-L48

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-06-20 20:51:56.000 UTC</summary>

I think that is for the client. This is for access inside the handler inside the workflow. Go is using context for this, other languages are using "async local" or similar. Unsure the best approach in PHP for providing contextual state to a handler (and things it may start) without affecting anything outside the handler.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-06-20 20:54:02.000 UTC</summary>

> This is for access inside the handler inside the workflow

Got it. Thanks.

</details>


---

<a id="435"></a>

### #435: [Bug] Abstract Workflow not started

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/435 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2024-05-17 07:54:30.000 UTC (1y 7m ago) |
| **Updated** | 2024-10-07 19:44:42.000 UTC |
| **Closed** | 2024-10-07 19:39:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.12.0 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

We are trying to start a workflow with a class descendant

### Describe the bug


### Minimal Reproduction

<details>
  <summary>Code</summary>

```php
<?php

declare(strict_types=1);

namespace App\LoanApplication\Workflow;

use Generator;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowMethod;

abstract class AbstractWorkflow
{
    #[WorkflowMethod]
    final public function start(string $id): Generator
    {
        $workflow = Workflow::newExternalWorkflowStub(
            RootWorkflow::class,
            new Workflow\WorkflowExecution($id)
        );


        yield from $this->go($workflow);
    }


    /**
     * @param RootWorkflow $workflow
     */
    abstract protected function go($workflow): Generator;
}
```

```php
<?php

declare(strict_types=1);

namespace App\LoanApplication\Workflow;

use Generator;
use Temporal\Workflow\WorkflowInterface;
use Vanta\Integration\Symfony\Temporal\Attribute\AssignWorker;

#[WorkflowInterface]
#[AssignWorker('bus.bank_application')]
final class AWorkflow extends AbstractWorkflow
{
    protected function go($workflow): Generator
    {
        yield $workflow->ok();
    }
}
```


```php
<?php

declare(strict_types=1);

namespace App\LoanApplication\Workflow;

use Generator;
use Temporal\Workflow;
use Temporal\Workflow\ChildWorkflowOptions;
use Temporal\Workflow\ParentClosePolicy;
use Temporal\Workflow\SignalMethod;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;
use Vanta\Integration\Symfony\Temporal\Attribute\AssignWorker;

#[WorkflowInterface]
#[AssignWorker('bus.bank_application')]
final class RootWorkflow
{
    private bool $status = false;


    #[WorkflowMethod]
    public function start(): Generator
    {
        $workflow = Workflow::newChildWorkflowStub(
            AWorkflow::class,
            ChildWorkflowOptions::new()
                ->withNamespace(Workflow::getInfo()->namespace)
                ->withTaskQueue('bus.bank_application')
                ->withParentClosePolicy(ParentClosePolicy::POLICY_ABANDON)
        );


        $workflow->start(Workflow::getInfo()->execution->getID());


        yield Workflow::await(fn(): bool => $this->status);
    }


    #[SignalMethod]
    public function ok(): null
    {
        $this->status = true;

        return null;
    }
}
```

</details>



<details>
  <summary>StackTrace</summary>

```json

{
  "message": "The given stub class \"App\\LoanApplication\\Workflow\\AWorkflow\" does not contain a workflow method named \"start\"",
  "source": "PHP_SDK",
  "stackTrace": "#0  /var/www/api/src/LoanApplication/Workflow/RootWorkflow.php:41\n    Temporal\\Internal\\Workflow\\ChildWorkflowProxy->__call(\"start\",array(1))\n#1  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:363\n    App\\LoanApplication\\Workflow\\RootWorkflow->start()\n#2  [internal function]\n    Temporal\\Internal\\Workflow\\Process\\Scope->call(Closure,Temporal\\DataConverter\\EncodedValues)\n#3  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:452\n    Generator->valid()\n#4  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:186\n    Temporal\\Internal\\Workflow\\Process\\Scope->next()\n#5  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Process.php:183\n    Temporal\\Internal\\Workflow\\Process\\Scope->start(Closure,Temporal\\DataConverter\\EncodedValues)\n#6  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:91\n    Temporal\\Internal\\Workflow\\Process\\Process->start(Closure,Temporal\\DataConverter\\EncodedValues)\n#7  /var/www/api/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:95\n    Temporal\\Internal\\Transport\\Router\\StartWorkflow->Temporal\\Internal\\Transport\\Router\\{closure}(Temporal\\Interceptor\\WorkflowInbound\\WorkflowInput)\n#8  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:104\n    Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Temporal\\Interceptor\\WorkflowInbound\\WorkflowInput)\n#9  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router.php:82\n    Temporal\\Internal\\Transport\\Router\\StartWorkflow->handle(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4),React\\Promise\\Deferred)\n#10 /var/www/api/vendor/temporal/sdk/src/Worker/Worker.php:91\n    Temporal\\Internal\\Transport\\Router->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#11 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:422\n    Temporal\\Worker\\Worker->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#12 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Server.php:63\n    Temporal\\WorkerFactory->onRequest(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#13 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:399\n    Temporal\\Internal\\Transport\\Server->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#14 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:269\n    Temporal\\WorkerFactory->dispatch(\"\\n\ufffd\\^E\\b\\^A\\^R\\rStartWorkflow\\^Z\ufffd\\^E{\\\"info\\\":{\\\"WorkflowExecution...\",array(4))\n#15 /var/www/api/vendor/vanta/temporal-bundle/src/Runtime/Runtime.php:32\n    Temporal\\WorkerFactory->run()\n#16 /var/www/api/vendor/vanta/temporal-bundle/src/Runtime/TemporalRunner.php:25\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\Runtime->run()\n#17 /var/www/api/vendor/autoload_runtime.php:29\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\TemporalRunner->run()\n#18 /var/www/api/public/index.php:7\n    require_once(\"\\/var\\/www\\/api\\/vendor\\/autoload_runtime.php\")",
  "encodedAttributes": null,
  "cause": null,
  "applicationFailureInfo": {
    "type": "BadMethodCallException",
    "nonRetryable": false,
    "details": null
  }
}
```
</details>



<details>
  <summary>Events Workflow</summary>

```json
{
  "events": [
    {
      "eventId": "1",
      "eventTime": "2024-05-17T07:44:33.985056926Z",
      "eventType": "WorkflowExecutionStarted",
      "version": "0",
      "taskId": "1048714",
      "workerMayIgnore": false,
      "workflowExecutionStartedEventAttributes": {
        "workflowType": {
          "name": "RootWorkflow"
        },
        "parentWorkflowNamespace": "",
        "parentWorkflowNamespaceId": "",
        "parentWorkflowExecution": null,
        "parentInitiatedEventId": "0",
        "taskQueue": {
          "name": "bus.bank_application",
          "kind": "Normal",
          "normalName": ""
        },
        "input": null,
        "workflowExecutionTimeout": "0s",
        "workflowRunTimeout": "0s",
        "workflowTaskTimeout": "10s",
        "continuedExecutionRunId": "",
        "initiator": "Unspecified",
        "continuedFailure": null,
        "lastCompletionResult": null,
        "originalExecutionRunId": "a675ae9a-f0af-426b-b48e-83a530ff2bc5",
        "identity": "35@6e8cab123894",
        "firstExecutionRunId": "a675ae9a-f0af-426b-b48e-83a530ff2bc5",
        "retryPolicy": null,
        "attempt": 1,
        "workflowExecutionExpirationTime": null,
        "cronSchedule": "",
        "firstWorkflowTaskBackoff": "0s",
        "memo": null,
        "searchAttributes": null,
        "prevAutoResetPoints": null,
        "header": {
          "fields": {}
        },
        "parentInitiatedEventVersion": "0",
        "workflowId": "346c4917-9559-4043-9cfd-49da7afcbdff",
        "sourceVersionStamp": null
      }
    },
    {
      "eventId": "2",
      "eventTime": "2024-05-17T07:44:33.985092009Z",
      "eventType": "WorkflowTaskScheduled",
      "version": "0",
      "taskId": "1048715",
      "workerMayIgnore": false,
      "workflowTaskScheduledEventAttributes": {
        "taskQueue": {
          "name": "bus.bank_application",
          "kind": "Normal",
          "normalName": ""
        },
        "startToCloseTimeout": "10s",
        "attempt": 1
      }
    },
    {
      "eventId": "3",
      "eventTime": "2024-05-17T07:44:33.991138217Z",
      "eventType": "WorkflowTaskStarted",
      "version": "0",
      "taskId": "1048720",
      "workerMayIgnore": false,
      "workflowTaskStartedEventAttributes": {
        "scheduledEventId": "2",
        "identity": "bus.bank_application:7eaf76d2-14b7-4138-b2ec-5b96cfa7e42d",
        "requestId": "21da69d4-e7fb-4efa-bac0-9f2f228f72ce",
        "suggestContinueAsNew": false,
        "historySizeBytes": "278"
      }
    },
    {
      "eventId": "4",
      "eventTime": "2024-05-17T07:44:34.088138134Z",
      "eventType": "WorkflowTaskCompleted",
      "version": "0",
      "taskId": "1048724",
      "workerMayIgnore": false,
      "workflowTaskCompletedEventAttributes": {
        "scheduledEventId": "2",
        "startedEventId": "3",
        "identity": "bus.bank_application:7eaf76d2-14b7-4138-b2ec-5b96cfa7e42d",
        "binaryChecksum": "",
        "workerVersion": {
          "buildId": "3850375e06e98d90ebe249b19dfded53",
          "bundleId": "",
          "useVersioning": false
        },
        "sdkMetadata": {
          "coreUsedFlags": [],
          "langUsedFlags": [
            3
          ],
          "sdkName": "temporal-go",
          "sdkVersion": "1.26.0"
        },
        "meteringMetadata": {
          "nonfirstLocalActivityExecutionAttempts": 0
        }
      }
    },
    {
      "eventId": "5",
      "eventTime": "2024-05-17T07:44:34.088162967Z",
      "eventType": "WorkflowExecutionFailed",
      "version": "0",
      "taskId": "1048725",
      "workerMayIgnore": false,
      "workflowExecutionFailedEventAttributes": {
        "failure": {
          "message": "The given stub class \"App\\LoanApplication\\Workflow\\AWorkflow\" does not contain a workflow method named \"start\"",
          "source": "PHP_SDK",
          "stackTrace": "#0  /var/www/api/src/LoanApplication/Workflow/RootWorkflow.php:41\n    Temporal\\Internal\\Workflow\\ChildWorkflowProxy->__call(\"start\",array(1))\n#1  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:363\n    App\\LoanApplication\\Workflow\\RootWorkflow->start()\n#2  [internal function]\n    Temporal\\Internal\\Workflow\\Process\\Scope->call(Closure,Temporal\\DataConverter\\EncodedValues)\n#3  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:452\n    Generator->valid()\n#4  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Scope.php:186\n    Temporal\\Internal\\Workflow\\Process\\Scope->next()\n#5  /var/www/api/vendor/temporal/sdk/src/Internal/Workflow/Process/Process.php:183\n    Temporal\\Internal\\Workflow\\Process\\Scope->start(Closure,Temporal\\DataConverter\\EncodedValues)\n#6  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:91\n    Temporal\\Internal\\Workflow\\Process\\Process->start(Closure,Temporal\\DataConverter\\EncodedValues)\n#7  /var/www/api/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:95\n    Temporal\\Internal\\Transport\\Router\\StartWorkflow->Temporal\\Internal\\Transport\\Router\\{closure}(Temporal\\Interceptor\\WorkflowInbound\\WorkflowInput)\n#8  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/StartWorkflow.php:104\n    Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Temporal\\Interceptor\\WorkflowInbound\\WorkflowInput)\n#9  /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router.php:82\n    Temporal\\Internal\\Transport\\Router\\StartWorkflow->handle(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4),React\\Promise\\Deferred)\n#10 /var/www/api/vendor/temporal/sdk/src/Worker/Worker.php:91\n    Temporal\\Internal\\Transport\\Router->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#11 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:422\n    Temporal\\Worker\\Worker->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#12 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Server.php:63\n    Temporal\\WorkerFactory->onRequest(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#13 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:399\n    Temporal\\Internal\\Transport\\Server->dispatch(Temporal\\Worker\\Transport\\Command\\ServerRequest,array(4))\n#14 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php:269\n    Temporal\\WorkerFactory->dispatch(\"\\n\ufffd\\^E\\b\\^A\\^R\\rStartWorkflow\\^Z\ufffd\\^E{\\\"info\\\":{\\\"WorkflowExecution...\",array(4))\n#15 /var/www/api/vendor/vanta/temporal-bundle/src/Runtime/Runtime.php:32\n    Temporal\\WorkerFactory->run()\n#16 /var/www/api/vendor/vanta/temporal-bundle/src/Runtime/TemporalRunner.php:25\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\Runtime->run()\n#17 /var/www/api/vendor/autoload_runtime.php:29\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\TemporalRunner->run()\n#18 /var/www/api/public/index.php:7\n    require_once(\"\\/var\\/www\\/api\\/vendor\\/autoload_runtime.php\")",
          "encodedAttributes": null,
          "cause": null,
          "applicationFailureInfo": {
            "type": "BadMethodCallException",
            "nonRetryable": false,
            "details": null
          }
        },
        "retryState": "RetryPolicyNotSet",
        "workflowTaskCompletedEventId": "4",
        "newExecutionRunId": ""
      }
    }
  ]
}
```
</details>



### Environment/Versions

temporal/sdk v2.8.1
temporal server v1.22.4


#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2024-07-24 19:45:28.000 UTC</summary>

The current bypass approach is to clearly define workflow method attribute at descendant. 

</details>


---

<a id="431"></a>

### #431: [Bug] Incorrect deadline verification in case of exception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/431 |
| **State** | CLOSED |
| **Author** | kkosowski-p (Konrad Kosowski) |
| **Created** | 2024-05-14 08:04:41.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-14 09:41:47.000 UTC |
| **Closed** | 2024-05-14 09:31:28.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.1 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Timeout/deadline should be correctly verified in case of ServiceClientException in https://github.com/temporalio/sdk-php/blob/master/src/Client/GRPC/BaseClient.php#L314

### Describe the bug

Comparison direction should be swapped. Now it checks if deadline is before current time, what should not be a trigger for timeout exception.

### Minimal Reproduction

Create WorkflowClientInterface with timeout 10secs. Create ActivityCompletionClientInterface with client. Run completeByToken() with not-existing token. TimeoutException will be thrown.

### Additional context


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-14 09:41:46.000 UTC</summary>

Thanks!
Fixed with [v2.9.1](https://github.com/temporalio/sdk-php/releases/tag/v2.9.1)

</details>


---

<a id="428"></a>

### #428: [Bug] Unit test hangs with unit under test has runtime or compile time exception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/428 |
| **State** | OPEN |
| **Author** | suityou01 (Charlie Benger-Stevenson) |
| **Created** | 2024-05-07 10:00:56.000 UTC (1y 8m ago) |
| **Updated** | 2025-12-22 16:58:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug, Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Unit test a workflow

### Describe the bug

When unit testing a workflow, if the workflow under test encounters a runtime exception the unit test hangs.

### Minimal Reproduction

See pull request here https://github.com/wolfy-j/temporal-simple-test-example/pull/1

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux] - Ubuntu Linux 22.04
- Temporal Version: [e.g. 1.14.0?] and/or SDK version - 1.23.1
- Are you using Docker or Kubernetes or building Temporal from source? - On the metal using Temporal\Testing\Environment

### Additional context

Discussed on slack last Friday with wolfy-j


#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-07 12:03:26.000 UTC</summary>

Try to limit Client requests by timeouts.

</details>

<details>
<summary><strong>suityou01</strong> commented on 2024-05-07 12:58:13.000 UTC</summary>

This would not give me the error details of the runtime exception but of the timeout thus masking the problem. It would also prevent any unit testing that expected specific exceptions.

Reactions: 👍 1

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-22 16:58:55.000 UTC</summary>

Hi, @suityou01 
This is functional testing which follows temporal fault tolerant rules.
In this case I'd suggest to use logging and check if there were errors.
Additionally, you can extend interceptors or event create your own data converter to pass / read a modified structure in your tests.


</details>


---

<a id="401"></a>

### #401: [Feature Request] Update Carbon to 3.*

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/401 |
| **State** | CLOSED |
| **Author** | Atantares (Vladyslav Dudka) |
| **Created** | 2024-02-28 17:18:52.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-06 08:09:59.000 UTC |
| **Closed** | 2024-03-06 08:09:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.8.0 |

#### Description

### Is your feature request related to a problem?

While upgrading my Symfony 6.4 project I get an error from composer:
```
Problem 1
    - nesbot/carbon[2.66.0, ..., 2.72.3] require symfony/translation ^3.4 || ^4.0 || ^5.0 || ^6.0 -> found symfony/translation[v3.4.0, ..., v3.4.47, v4.0.0, ..., v4.4.47, v5.0.0, ..., v5.4.35, v6.0.0, ..., v6.4.4] but it conflicts with your root composer.json require (7.0.*).
    - temporal/sdk[v2.7.0, ..., v2.7.6] require nesbot/carbon ^2.66 -> satisfiable by nesbot/carbon[2.66.0, ..., 2.72.3].
    - Root composer.json requires temporal/sdk ^2.7.0 -> satisfiable by temporal/sdk[v2.7.0, ..., v2.7.6].
```

Carbon 3.0 supports Symfony 7
Commit: https://github.com/briannesbitt/Carbon/commit/1175d7d48aeb5d772b5c268e783df5a6a8336653

### Describe the solution you'd like

composer.json
```json
{
    "require": {
        "nesbot/carbon":"^3.0"
     }
}
```



#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-02-28 21:38:10.000 UTC</summary>

Hello. Thank you for opening the issue. The problem [is already known](https://temporalio.slack.com/archives/C01LK9FAMM0/p1707992253232579).
However, to upgrade the carbon version, it's necessary to remove the conflicting package "illuminate/support". Classes from this package are used in several places in the tests, and some work needs to be done to get rid of the excess.
I plan to return to this issue later. However, if you have some free time, feel free to open a PR with a fix.


Reactions: 👍 1

</details>

<details>
<summary><strong>Atantares</strong> commented on 2024-02-29 16:34:56.000 UTC</summary>

Got it, thanks @roxblnfk 
I'll try to look into this one. 
Is that a public Slack channel? If so, can I get an invitation?



</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-02-29 17:44:01.000 UTC</summary>

> Is that a public Slack channel? If so, can I get an invitation?

Sure

https://temporal.io/slack

Channel `#php-sdk`

Reactions: 👍 1

</details>


---

<a id="399"></a>

### #399: [Not a Bug] await doesn't interrupts on the activity with error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/399 |
| **State** | OPEN |
| **Author** | pfy-oleksii-storozhylov (Oleksii Storozhylov) |
| **Created** | 2024-02-15 20:54:10.000 UTC (1y 10m ago) |
| **Updated** | 2024-08-30 03:22:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
I want to use await function to ensure that activities are completed with or without an errors

### Describe the bug
When any activity is completed with error, await function doesn't continue workflow immediately, it waits for the full interval

### Minimal Reproduction
```php
            foreach ($anticipationPromises as $promise) {
                $promise
                    ->then(function() use (&$index) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time()." success $index\n", FILE_APPEND);
                    })
                    ->otherwise(function() use (&$index) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time()." error $index\n", FILE_APPEND);
                    });
            }

            file_put_contents('/srv/app/ddd.log', time(). " start awaiting $index\n", FILE_APPEND);

            yield \Temporal\Workflow::awaitWithTimeout(
                 CarbonInterval::seconds(60),
                \React\Promise\all($anticipationPromises)
             );

            file_put_contents('/srv/app/ddd.log', time(). " complete $index\n", FILE_APPEND);
```

Result when 2 activities have no errors looks good

```
1708030014 start awaiting 0
1708030016 success 1
1708030018 success 2
1708030018 complete 2
```

Result when one of the activities has an error looks good (completion takes 60 seconds)

```
1708030094 start awaiting 0
1708030096 error 1
1708030098 success 2
1708030154 complete 2
```

### Environment/Versions
* temporal/sdk 2.7+

### Additional context
<!-- Add any other context about the problem here. -->



#### Comments (3)

<details>
<summary><strong>pfy-oleksii-storozhylov</strong> commented on 2024-02-15 21:05:56.000 UTC</summary>

workarround with a counter and deferred promise could be used
```php
$index = 0;

            $deferred = new Deferred();
            $deferred->promise()
                ->then(function () use (&$index) {
                    file_put_contents('/srv/app/ddd.log', time() . " deferred resolved $index\n", FILE_APPEND);
                });

            foreach ($anticipationPromises as $promise) {
                $promise
                    ->then(function () use (&$index, $deferred) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time() . " success $index\n", FILE_APPEND);

                        if ($index >= 2) {
                            $deferred->resolve(true);
                        }
                    })
                    ->otherwise(function () use (&$index, $deferred) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time() . " error $index\n", FILE_APPEND);

                        if ($index >= 2) {
                            $deferred->resolve(true);
                        }
                    });
            }

            file_put_contents('/srv/app/ddd.log', time() . " start awaiting $index\n", FILE_APPEND);

            yield \Temporal\Workflow::awaitWithTimeout(
                CarbonInterval::seconds(60),
                $deferred->promise()
            );
```

And the result looks good
```
1708030906 start awaiting 0
1708030908 error 1
1708030910 success 2
1708030910 deferred resolved 2
1708030910 complete 2
```

</details>

<details>
<summary><strong>pfy-oleksii-storozhylov</strong> commented on 2024-02-16 10:38:26.000 UTC</summary>

Seems not an issue, `all` promise is rejected if any of promises is rejected, so the solution here is
```php
            yield \Temporal\Workflow::awaitWithTimeout(
                CarbonInterval::seconds(60),
                \Temporal\Promise::all(array_map(
                    fn (ExtendedPromiseInterface $promise) => $promise->otherwise(fn () => false),
                    $promises
                ))
            );
```

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2024-02-16 18:24:06.000 UTC</summary>

I would like to keep this issue open for our records, so we can check the await behavior in combination with promise chaining.

Reactions: 👍 1

</details>


---

<a id="394"></a>

### #394: Make "ext-grpc" a composer requirement

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/394 |
| **State** | CLOSED |
| **Author** | dendemann |
| **Created** | 2024-01-24 17:26:55.000 UTC (1y 11m ago) |
| **Updated** | 2024-03-07 18:33:05.000 UTC |
| **Closed** | 2024-03-07 18:33:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.8.0 |

#### Description

Having ext-grpc installed seems to be a hard requirement. The samples documentation point out that gRPC PHP extension must be installed. When trying to instantiate a ServiceClient via `ServiceClient::create(...)` I got "Class 'Grpc\ChannelCredentials' not found" as the extension wasn't available on my setup. Anyway I would have expected that a composer install would have failed because of the missing extension.

When ext-grpc is a must have requirement I suggest adding it to the projects composer.json require section.

#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-01-24 22:51:52.000 UTC</summary>

Hello.
The gRPC extension is only required for client calls. The server part works without this extension.

Since both parts of the SDK (client and server) are in the same repository, I would prefer to add `ext-grpc` only to the `suggest` section. The readme.md file can also be supplemented in the `Installation` section.


Reactions: 👍 1

</details>

<details>
<summary><strong>dendemann</strong> commented on 2024-01-25 07:40:22.000 UTC</summary>

Hi. 
Thanks for explaining the details. Both your proposals combined are a good way to quickly find out what's wrong (without having to dig into the source)

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-01-25 07:57:53.000 UTC</summary>

>  a good way to quickly find out what's wrong (without having to dig into the source)

 However, to quickly understand the problem, it is necessary to add the throwing of a proper (friendly) exception in the client code.
Thank you for your feedback.

Reactions: 👍 1

</details>


---

<a id="383"></a>

### #383: [Bug] Schedule API: Schedule creating without start and end time not working

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/383 |
| **State** | CLOSED |
| **Author** | zemkogabor |
| **Created** | 2024-01-05 18:21:47.000 UTC (2 years ago) |
| **Updated** | 2024-01-09 11:52:22.000 UTC |
| **Closed** | 2024-01-09 11:52:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.7.2 |

#### Description

### What are you really trying to do?

Create scheduled workflow without start and end time.

### Describe the bug

If startTime and endTime not declared in Schedule spec, I got this error:

```
Uncaught Exception TypeError: "Given value is not an instance of Google\Protobuf\Timestamp."
```

### Minimal Reproduction

Working code:
```
        $handleSubscriptionRenewal = $this->scheduleClient->createSchedule(
            Schedule::new()->withAction(
                StartWorkflowAction::new(SubscriptionRenewalWorkflow::WORKFLOW_TYPE)
                    ->withRetryPolicy(
                        RetryOptions::new()
                            ->withInitialInterval(CarbonInterval::seconds(10))
                            ->withMaximumAttempts(3)
                    )
                    ->withWorkflowId(SubscriptionRenewalWorkflow::WORKFLOW_ID)
                    ->withWorkflowRunTimeout(CarbonInterval::minute(10))
            )->withSpec(
                ScheduleSpec::new()->withAddedCronString('15 7 * * *')
                    ->withStartTime(new \DateTime('now'))
                    ->withEndTime(new \DateTime('+ 1 month'))
            ),
            scheduleId: SubscriptionRenewalWorkflow::SCHEDULE_ID,
        );
```

TypeError Exception:

```
        $handleSubscriptionRenewal = $this->scheduleClient->createSchedule(
            Schedule::new()->withAction(
                StartWorkflowAction::new(SubscriptionRenewalWorkflow::WORKFLOW_TYPE)
                    ->withRetryPolicy(
                        RetryOptions::new()
                            ->withInitialInterval(CarbonInterval::seconds(10))
                            ->withMaximumAttempts(3)
                    )
                    ->withWorkflowId(SubscriptionRenewalWorkflow::WORKFLOW_ID)
                    ->withWorkflowRunTimeout(CarbonInterval::minute(10))
            )->withSpec(
                ScheduleSpec::new()->withAddedCronString('15 7 * * *')
            ),
            scheduleId: SubscriptionRenewalWorkflow::SCHEDULE_ID,
        );
```

If I unset these keys in the V1/ScheduleSpec file, the schedule is successful created:

```
   public function __construct($data = NULL) {
        unset($data['start_time']);
        unset($data['end_time']);
        \GPBMetadata\Temporal\Api\Schedule\V1\Message::initOnce();
        parent::__construct($data);
    }
```

### Environment/Versions
- Docker
- PHP: 8.3.1
- Protobuf: 3.25.1
- Temporal SDK Version: 2.7.1
- Roadrunner: 2023.3.8
- OS and processor: M1 Mac

#### Comments (3)

<details>
<summary><strong>zemkogabor</strong> commented on 2024-01-05 18:31:51.000 UTC</summary>

I also noticed that I also get an error when listing:

<img width="855" alt="Screenshot 2024-01-05 at 19 28 21" src="https://github.com/temporalio/sdk-php/assets/39522338/bdd800f0-6710-4ca2-a7fa-45535cdf09d0">



Code:

```
...

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $schedules = $this->scheduleClient->listSchedules();

        if (count($schedules->getPageItems()) === 0) {
            $output->writeln('<fg=red>No Schedules found</fg=red>');
            return self::FAILURE;
        }

        $rows = [];
        foreach ($schedules as $schedule) {
            $previous = count($schedule->info->recentActions) === 0
                ? null
                : $schedule->info->recentActions[array_key_last($schedule->info->recentActions)];
            $rows[] = [
                $schedule->scheduleId,
                $schedule->info->workflowType->name,
                number_format((float)$schedule->info->futureActionTimes[0]
                    ->diff(new DateTimeImmutable())->format('%s.%F'), 3) . 's',
                $previous === null
                    ? 'N/A'
                    : number_format((float)$previous->actualTime
                        ->diff(new DateTimeImmutable())->format('%s.%F'), 3) . 's',
            ];
        }

        (new Table($output))
            ->setHeaderTitle('Recent Actions')
            ->setHeaders(['ID', 'WF Type', 'Next run in', 'Last run'])
            ->setRows($rows)
            ->render();

        return self::SUCCESS;
    }

...

```


</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-01-05 18:44:30.000 UTC</summary>

Do you use PHP protobuf extension? Or composer package only?

</details>

<details>
<summary><strong>zemkogabor</strong> commented on 2024-01-05 18:47:45.000 UTC</summary>

Yes, I use extension (no protobuf composer package). Here is part of my Dockerfile:

```
# Protobuf
ENV PROTOBUF_VERSION "3.25.1"
RUN pecl channel-update pecl.php.net
RUN pecl install protobuf-${PROTOBUF_VERSION} grpc \
    && docker-php-ext-enable protobuf grpc

# Roadrunner binary
# https://roadrunner.dev/docs/app-server-images/current/en
COPY --from=ghcr.io/roadrunner-server/roadrunner:2023.3.8 /usr/bin/rr /usr/local/bin/rr
RUN chmod +x /usr/local/bin/rr
```

Reactions: 👍 1

</details>


---

<a id="361"></a>

### #361: [Bug] worker returns "Workflow with the specified run identifier.."

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/361 |
| **State** | CLOSED |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-10-09 08:58:23.000 UTC (2y 3m ago) |
| **Updated** | 2023-10-19 20:52:48.000 UTC |
| **Closed** | 2023-10-19 20:52:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

The customer run a query to a workflow execution (from an activity, using the workflow client) , and they got the following error 

`workflow_process_handle_query: Workflow with the specified run identifier \"abc-abc... \" not found`
https://github.com/temporalio/sdk-php/blob/e5b375f10f45ddf5a0b1e2fd1a633a65b9594474/src/Internal/Transport/Router/WorkflowProcessAwareRoute.php#L23

The query works for most of the workflow executions, but for other (small %)  it fails, does not matter how many times you run the query

The issue got resolved after restarting the workers. 



### Environment/Versions


SDK version: 2.5.4


### Additional context

Clicking in the query tab, in the UI, returns the following error for the affected workflow executions 



#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-10-09 09:55:49.000 UTC</summary>

I think it was fixed in 2.6 with RoadRunner 2023.3
See https://github.com/temporalio/sdk-php/pull/340

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-10-09 10:01:13.000 UTC</summary>

@antmendoza @roxblnfk Yeah, looks like we already fixed this issue. Should be `2023.3` RR + `2.6.1` PHP-SDK

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-10-19 20:52:48.000 UTC</summary>

Just reopen the issue if the problem is reproducible on SDK version 2.6.


</details>


---

<a id="286"></a>

### #286: [Feature Request] Do not require server CA cert in client createSSL

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/286 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-02-03 16:04:02.000 UTC (2y 11m ago) |
| **Updated** | 2025-02-10 11:59:43.000 UTC |
| **Closed** | 2024-02-06 15:15:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.13.0 |

#### Description

### Is your feature request related to a problem? Please describe.

Most production servers, including our cloud, don't need to override the CA as its either signed by a known CA or they install the CA root at the system level. Client cert and key are the most important.

Like https://grpc.github.io/grpc/php/class_grpc_1_1_channel_credentials.html#a21a46268a69dcc263360c63193b89955 we should accept null.

#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-02-07 10:28:58.000 UTC</summary>

Could you add more details?
What part of the SDK or functionality do you mean?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:24:49.000 UTC</summary>

@cretz Friendly ping. Please add more details to this ticket? Would be super helpful if you could attach the links to the PHP SDK src.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2024-02-06 15:15:23.000 UTC</summary>

Closing due to inactivity.

</details>


---

<a id="272"></a>

### #272: [Bug] PHP 8 named arguments don't work

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/272 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-01-04 15:29:29.000 UTC (3 years ago) |
| **Updated** | 2024-02-06 15:09:30.000 UTC |
| **Closed** | 2024-02-05 19:50:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.7.5 |

#### Description

### What are you really trying to do?

I am trying to call workflow handler using PHP8 named arguments.

```php
// Workflow handker signature:
public function handler(bool $foo = false, bool $bar = false): iterable;

// Calling
$workflowStub->handler(bar: true);
```
In this case the handler will be started with `[true, false]` values, not with `[false, true]`.


### Environment/Versions

PHP 8.1, SDK-PHP 2.3.2

#### Comments (3)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-04 08:29:44.000 UTC</summary>

Named arguments are not allowed due to limited language support.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-04 09:02:52.000 UTC</summary>

> Named arguments are not allowed due to limited language support.

In the SDK-PHP we support PHP syntax. When named arguments are used we will send all skipped default values:

```php
// activity method
public function doSomething(?int $number = 0, string $foo = 'default', ?Bar $bar = null);
```

If we call `doSomething(foo: 'custom');` values `[0, 'custom', null]` will be sent (without names of course)

---

Right now people don't know that `doSomething(foo: 'custom');` is impossible case

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-04 14:15:37.000 UTC</summary>

Ah... ok, so it's on packing side.

</details>


---

<a id="253"></a>

### #253: [CHORE] Remove deprecated structure fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/253 |
| **State** | CLOSED |
| **Author** | rustatian (Valery Piashchynski) |
| **Created** | 2022-10-03 09:08:12.000 UTC (3y 3m ago) |
| **Updated** | 2023-01-25 08:28:54.000 UTC |
| **Closed** | 2023-01-25 08:28:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

ref: https://github.com/temporalio/roadrunner-temporal/pull/278

### Describe the solution you'd like

Remove deprecated `WorkflowExecutionTimeout` field from the `ContinueAsNew` request

#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-01-13 21:04:22.000 UTC</summary>

@rustatian should I delete [that](https://github.com/temporalio/sdk-php/blob/0863b6118d280bb46d68031b9b1b2e5f40df807d/src/Workflow/ContinueAsNewOptions.php#L47-L53)?
Will it affect somethink?

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-01-16 08:16:31.000 UTC</summary>

@roxblnfk You're pointing to a `WorkflowTaskTimeout`, but the deprecated field is `WorkflowExecutionTimeout`. I dunno where it is in the PHP code. I guess, that somewhere in the `ContinueAsNew` command and the `WorkflowExecutionTimeout` should be somewhere in it.

Reactions: 👍 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-01-16 09:34:41.000 UTC</summary>

> @roxblnfk You're pointing to a `WorkflowTaskTimeout`, but the deprecated field is `WorkflowExecutionTimeout`. I dunno where it is in the PHP code. I guess, that somewhere in the `ContinueAsNew` command and the `WorkflowExecutionTimeout` should be somewhere in it.

Oh. Yes. Then it looks OK and I just need to remove `WorkflowExecutionTimeout` from [there](https://github.com/temporalio/sdk-php/blob/0863b6118d280bb46d68031b9b1b2e5f40df807d/src/Workflow/ContinueAsNewOptions.php#L30-L33)

</details>


---

<a id="166"></a>

### #166: [Bug] Workflow timer debouncing does not work

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/166 |
| **State** | CLOSED |
| **Author** | OlegKuro (Khayatov Oleg) |
| **Created** | 2022-04-27 22:10:31.000 UTC (3y 8m ago) |
| **Updated** | 2022-05-02 19:37:28.000 UTC |
| **Closed** | 2022-05-02 19:37:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to write [debonce](https://lodash.com/docs/4.17.15#debounce) workflow equivalent: workflow should start and then wait for the signal **N** seconds. And then if signal is triggered within these **N** seconds, timer should be re-launched. If the signal is not triggered workflow should go further. 


### Describe the bug

It seems to not work at all. Workflow jams in _Running_ state instead of timer cancellation and then resetting another one. Also roadrunner writes this message:
<details>
<summary> Long golang-ish error from roadrunner container </summary>

```
roadrunner_1            | 2022-04-27T12:17:28.779Z      ERROR   temporal        Workflow panic  {"Namespace": "default", "TaskQueue": "default", "WorkerID": "default:e6ab0423-3304-4edf-a4d9-ef3f2af0d391", "WorkflowType": "ExampleWorkflow", "WorkflowID": "some_id", "RunID": "0d757f3f-5c7c-4b80-bcb0-1ade96fc82cc", "Attempt": 48, "Error": "flush queue: SoftJobError:\n\tcodec_execute:\n\tsync_worker_exec:\n\tsync_worker_exec_payload: LogicException: Got the response to undefined request 9002 in /opt/app/vendor/temporal/sdk/src/Internal/Transport/Client.php:60\nStack trace:\n#0 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(389): Temporal\\Internal\\Transport\\Client->dispatch(Object(Temporal\\Worker\\Transport\\Command\\SuccessResponse))\n#1 /opt/app/vendor/temporal/sdk/src/WorkerFactory.php(261): Temporal\\WorkerFactory->dispatch('\\n\\x03\\x08\\xAAF\\n\\x03\\x08\\xABF', Array)\n#2 /opt/app/bin/worker(45): Temporal\\WorkerFactory->run()\n#3 {main}", "StackTrace": "process event for default [panic]:\ngithub.com/temporalio/roadrunner-temporal/workflow.(*process).OnWorkflowTaskStarted(0xc000d7fa40, 0xc001734ec8)\n\tgithub.com/temporalio/roadrunner-temporal@v1.1.0/workflow/workflow.go:144 +0x2e5\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000934330, 0xc000abb940, 0xc0, 0x1)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_event_handlers.go:801 +0x1ff\ngithub.com/spiral/sdk-go/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc00027b490, 0xc001666630)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:874 +0xca8\ngithub.com/spiral/sdk-go/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000294210, 0xc001666630, 0xc001578ea0)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_handlers.go:723 +0x493\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).processWorkflowTask(0xc000a8add0, 0xc001666630)\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:284 +0x2cd\ngithub.com/spiral/sdk-go/internal.(*workflowTaskPoller).ProcessTask(0xc000a8add0, {0x1594180, 0xc001666630})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_task_pollers.go:255 +0x6c\ngithub.com/spiral/sdk-go/internal.(*baseWorker).processTask(0xc0005f2200, {0x1593d40, 0xc001807160})\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:362 +0x167\ncreated by github.com/spiral/sdk-go/internal.(*baseWorker).runTaskDispatcher\n\tgithub.com/spiral/sdk-go@v1.12.0/internal/internal_worker_base.go:282 +0xba"}
```

</details>

### Minimal Reproduction

```php
class ExampleWorkflow {
    private bool $stopWaiting = false;

    public function run()
    {
        while (!$this->stopWaiting) {
            $this->stopWaiting = true;

            yield Workflow::awaitWithTimeout(
                30,
                fn () => $this->stopWaiting === false
            );
        }

        return 'COMPLETED';
    }

    // signal
    public function resetTimer(): void
    {
        $this->stopWaiting = false;
    }
}
```

Try to trigger the signal several times a second -- this will reproduce the bug for sure 😄 

### Environment/Versions

- Temporal SDK Version: 1.1.1

### Additional context

I've implemented this logic another way. But I'm still wondering why this implementation did not work 🤯 


#### Comments (3)

<details>
<summary><strong>OlegKuro</strong> commented on 2022-04-28 10:14:01.000 UTC</summary>

I've just tried to use [proposed updatable timer implementation](https://github.com/temporalio/samples-php/blob/master/app/src/UpdatableTimer/UpdatableTimer.php). And it does not work 😭 

These issues are related to attempt to re-launch `awaitWithTimeout` method I guess 🥲 
Because I've tried to implement updatable timer logic via simple `Workflow::timer` method (_Instead of termination and fair re-launching the timer I wrote new awakeTime into variable and looked on it after each awakening_) and it worked. 

_Temporal version: 1.13.3
Temporal php-SDK version: 1.1.1_

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-04-28 12:19:37.000 UTC</summary>

That is weird. We will check the behaviour. 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-02 19:37:23.000 UTC</summary>

@OlegKuro the parent **should wait** for its child. Using abandon policy means that once parent is canceled/terminated the child continues working.
Related docs:
- [Policy](https://docs.temporal.io/docs/concepts/what-is-a-parent-close-policy/)
- [Execution concepts](https://docs.temporal.io/docs/concepts/what-is-a-child-workflow-execution/)

</details>


---

<a id="165"></a>

### #165: [Bug] Parent workflow waits for child completion

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/165 |
| **State** | CLOSED |
| **Author** | OlegKuro (Khayatov Oleg) |
| **Created** | 2022-04-27 21:49:04.000 UTC (3y 8m ago) |
| **Updated** | 2022-06-10 20:04:18.000 UTC |
| **Closed** | 2022-05-11 09:03:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to divide one process into two workflows: the first one starts the process and then spawns the second one (child workflow) and immediately completes. Then the second workflows works, but the first should be completed.

### Describe the bug

Instead of spawning and immediate completion parent workflow waits for child workflow resolution.
I've tried to find any documentation about correct behavior in this case and found [golang temporal notes](https://docs.temporal.io/docs/go/how-to-spawn-a-child-workflow-execution-in-go/#asynchronous-execution):

> To asynchronously spawn a Child Workflow Execution, the Child Workflow must have an "Abandon" Parent Close Policy set in the Child Workflow Options. Additionally, the Parent Workflow Execution must wait for the "ChildWorkflowExecutionStarted" event to appear in its event history before it completes.

> If the Parent makes the ExecuteChildWorkflow call and then immediately completes, the Child Workflow Execution will not spawn.

Does it mean that parent workflow should not wait? 🤔 

### Minimal Reproduction

```
class ExampleWorkflow {

    public function run()
    {
        $child = Workflow::newChildWorkflowStub(
            ChildWorkflowExampleInterface::class,
            ChildWorkflowOptions::new()
                ->withWorkflowId(bin2hex(random_bytes(18)))
                ->withWorkflowIdReusePolicy(WorkflowIdReusePolicy::WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE)
                ->withParentClosePolicy(ParentClosePolicy::POLICY_ABANDON)
        );
        $child->run();

        return 'COMPLETED';
    }
}
```

### Environment/Versions

- Temporal SDK Version: 1.1.1

### Additional context

<!-- Add any other context about the problem here. -->
Workflow also waits for activities completion too... I mean I can start an activity and then do some stuff in workflow body. But it seems to not finish while spawned in this workflow activities won't complete. Is it ok?

#### Comments (3)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-05-02 19:51:21.000 UTC</summary>

@OlegKuro thank you! Yes, we have a bug here. Will be fixed in #167 💪 


Reactions: ❤️ 1

</details>

<details>
<summary><strong>OlegKuro</strong> commented on 2022-05-03 22:06:17.000 UTC</summary>

@seregazhuk thank you for fix! 🙏 ❤️ 

But I think I had created too many issues (sorry 😅) so you confused #166 and this issue (#165)

> @OlegKuro the parent should wait for its child. Using abandon policy means that once parent is canceled/terminated the child continues working.
> Related docs:
> 
> [Policy](https://docs.temporal.io/docs/concepts/what-is-a-parent-close-policy/)
> [Execution concepts](https://docs.temporal.io/docs/concepts/what-is-a-child-workflow-execution/)

Thank you, got it 🤔 . 
But I can create an activity capable of running another workflow via workflow client injected into it. 
Would it be more convenient legalizing this hack? 

For example,
I accumulate requests by `sourceId` in the parent workflow. When I get a certain condition matched, I start another workflow which processes accumulated data and finish execution of parent workflow since this condition is matched until I get a new request with this `sourceId`. 
Parent workflow id is `sourceId`. Child workflow id is `sourceId-processingStartedAt`. 
In this case I need an opportunity to spawn another workflow and then finish parent workflow execution (or even better to perform these actions simultaneously)

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-06-10 20:04:18.000 UTC</summary>

@OlegKuro if it is still relevant to you... your code from this issue should work now 👍  Please, try to update to the latest SDK version. The parent only waits for child to start. Once the child is started, the parent (with abandon policy) can be completed.

Reactions: 👍 1 ❤️ 1

</details>


---

<a id="158"></a>

### #158: PHP docs reference wrong function or wrong class

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/158 |
| **State** | CLOSED |
| **Author** | the-invisible-man (Carlos Granados) |
| **Created** | 2022-04-14 18:47:09.000 UTC (3y 9m ago) |
| **Updated** | 2022-04-14 20:01:13.000 UTC |
| **Closed** | 2022-04-14 19:59:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Much of what the template asked for was N/A.

There's the following doc section for `WorkerInterface::registerActivity()`:

https://github.com/temporalio/sdk-php/blob/d28e626710c07f5d5c3c3656a0a72308f89c8053/src/Worker/WorkerInterface.php#L70-L74

Let me bring your attention to line 74 which instructs the developer to use a callback function that accepts a `ReflectionClass` instance, and to call `getClass()` on the concrete object inside the callback. Where is `getClass()` coming from? The primitive PHP `ReflectionClass` doesn't have this method. Was `$class->getName()` the intended method, if one should be passing the fully qualified name of the class?

I searched the codebase to rule out whether the instance of `ReflectionClass` being passed is actually a child class that implements `getClass()` but couldn't find such implementation, and if I missed it, then perhaps the docs should suggest using the child class instead of `ReflectionClass` to avoid any issues with the IDE which currently complains that `getClass()` doesn't exist.
### Additional context
```
>>> $r = new \ReflectionClass(\App\User::class)
>>> $r->getClass()
PHP Error:  Call to undefined method ReflectionClass::getClass() in Psy Shell code on line 1
>>> $r->getName()
=> "App\User"
```

<img width="567" alt="Screen Shot 2022-04-14 at 2 39 18 PM" src="https://user-images.githubusercontent.com/5294918/163455495-cc0f8c92-69d4-46e6-ac71-2d2caa1e8434.png">


#### Comments (3)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-04-14 19:56:05.000 UTC</summary>

Hi @the-invisible-man! Yes, you are absolutely right 👍 I have created a PR with a fix for - https://github.com/temporalio/sdk-php/pull/159

</details>

<details>
<summary><strong>the-invisible-man</strong> commented on 2022-04-14 19:57:08.000 UTC</summary>

Thanks for the prompt fix @seregazhuk!

</details>

<details>
<summary><strong>seregazhuk</strong> commented on 2022-04-14 20:01:13.000 UTC</summary>

Also, created a fix for official documentation - https://github.com/temporalio/documentation/pull/1055

Reactions: 🎉 1

</details>


---

<a id="113"></a>

### #113: [Bug] Parent workflow not completed or failed, when start child workflow execution failed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/113 |
| **State** | CLOSED |
| **Author** | khoerintus |
| **Created** | 2021-06-17 13:34:39.000 UTC (4y 6m ago) |
| **Updated** | 2021-07-02 14:29:13.000 UTC |
| **Closed** | 2021-07-02 14:29:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | wolfy-j |
| **Milestone** | None |

#### Description

**Describe the bug**
Parent workflow is not completed or failed, when start child workflow execution failed.
I am using this samples code:
https://github.com/khoerintus/samples-php/tree/master/app/src/Child

**To Reproduce**
Steps to reproduce the behavior:
1. First attempt, start parent workflow and it will start child workflow with workflow id
2. Then the parent workflow will completed and child workflow will completed as expected
![Screenshot from 2021-06-17 20-29-27](https://user-images.githubusercontent.com/9275991/122406082-c6b3e380-cfaa-11eb-9b1a-445cab86d2d7.png)
![Screenshot from 2021-06-17 20-31-36](https://user-images.githubusercontent.com/9275991/122406432-0aa6e880-cfab-11eb-8ad5-366f9b612183.png)

3. Second attempt, start parent workflow and it will start child workflow with the same workflow id 
4. But the parent workflow status: Running, with StartChildWorkflowExecutionFailed event because of START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS
![Screenshot from 2021-06-17 20-30-39](https://user-images.githubusercontent.com/9275991/122406342-f9f67280-cfaa-11eb-87cb-4d759f467e83.png)
![Screenshot from 2021-06-17 20-30-45](https://user-images.githubusercontent.com/9275991/122406354-fb279f80-cfaa-11eb-9558-35b2fc71fcb1.png)
5. Workflow instance will stuck at running, and the last event is WorkflowTaskCompleted until it timeout.

**Expected behavior**
I expected to see workflow instance status is completed.
But the workflow instance status is running until it timeout.
If I do not catch the child workflow execution, then I expect that workflow instance status is failed.

**Versions (please complete the following information where relevant):**
 - OS: Linux
 - Temporal Version: 1.9.2
 - are you using Docker or Kubernetes or building Temporal from source? I am using Docker
 - RR version: rr version 2.2.1 (build time: 2021-05-13T18:00:32+0000, go1.16.4)

#### Comments (3)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-06-24 18:35:50.000 UTC</summary>

We planned to take a look at this issue next week.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-02 07:55:04.000 UTC</summary>

FYI, we are working on the 1.1 milestone where we are going to change the way how workers defined on the Golang side. It should provide extra bits of performance and better scalabiltiy.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-02 12:41:51.000 UTC</summary>

Fixed in https://github.com/temporalio/roadrunner-temporal/pull/77

Reactions: 👍 1

</details>


---

<a id="105"></a>

### #105: [Bug] Activity RetryOptions Maximum Interval sets the initial interval

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/105 |
| **State** | CLOSED |
| **Author** | Rastusik (Martin Fris) |
| **Created** | 2021-04-23 18:21:31.000 UTC (4y 8m ago) |
| **Updated** | 2021-04-24 08:12:51.000 UTC |
| **Closed** | 2021-04-24 08:11:17.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | SerafimArts |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Describe the bug**
https://github.com/temporalio/sdk-php/blob/master/src/Common/RetryOptions.php#L172 setter for maximum interval sets the initial interval


#### Comments (1)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-24 08:12:51.000 UTC</summary>

Done https://github.com/temporalio/sdk-php/releases/tag/v1.0.3

</details>


---

<a id="95"></a>

### #95: [Bug] Non-retryable exceptions list in RetryOptions does not work as expected

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/95 |
| **State** | CLOSED |
| **Author** | kozlice (Valentin Nazarov) |
| **Created** | 2021-04-05 10:25:38.000 UTC (4y 9m ago) |
| **Updated** | 2021-04-05 11:33:36.000 UTC |
| **Closed** | 2021-04-05 11:33:36.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Describe the bug**
Non-retryable exceptions list in RetryOptions does not work as expected.

**To Reproduce**
Type hints (`@psalm-type ExceptionsList = array<class-string<\Throwable>>`) and documentation (https://docs.temporal.io/docs/php-retries) tell us to provide a list of class names:
```php
$retryOptions = RetryOptions::new()
    ->withNonRetryableExceptions([
        \InvalidArgumentException::class,
        \LogicException::class,
    ])
    ->withMaximumAttempts(3)
    ->withInitialInterval(new \DateInterval('PT5S'))
    ->withBackoffCoefficient(1)
;
```
Then I throw `RuntimeException` inside an activity method, which is not on the list. However, instead of an expected retry I saw this in Temporal web UI:
```
PanicError: assert(Assert::valuesInstanceOf($exceptions, \Throwable::class)) (type: AssertionError, retryable: true) 
```

**Expected behavior**
Process should respect the class list I provide.

**Reason**
The problem is with the `Temporal\Internal\Assert::valuesSubclassOf` method. PHP's `instanceof` won't work here:

```php

$v = \InvalidArgumentException::class;
$of = \Throwable::class;

var_dump($v instanceof $of); // false, because $v is just a string
var_dump(is_subclass_of($v, $of)); // true, it checks hierarchy internally
```

I'll submit a PR to fix this shortly.

#### Comments (1)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-05 11:33:34.000 UTC</summary>

Fixed in #96

</details>


---

<a id="93"></a>

### #93: [Bug] Activity return an associative array, but in workflow, the return value is parsed as an object

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/93 |
| **State** | CLOSED |
| **Author** | khoerintus |
| **Created** | 2021-03-22 11:34:48.000 UTC (4y 9m ago) |
| **Updated** | 2021-03-23 04:52:55.000 UTC |
| **Closed** | 2021-03-23 04:52:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the bug**
Activity return associative array, but when the return result is used in workflow, it became an object, not an array.

**To Reproduce**
Steps to reproduce the behavior:
1. In Activity method, return associative array. Example:
```
        return [
            'Peter' => '123',
            'Ben' => '234',
            'Joe' => '345'
        ];
```
2. Use the return value as associative array in workflow. Example:
```
        $simple = Workflow::newActivityStub(
            SimpleActivity::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(300)
                ->withRetryOptions(
                    RetryOptions::new()->withMaximumAttempts(1)
                )
        );
        $assocArray = yield $simple->getAssocArray($input);

        return $assocArray['Peter'];
```

**Expected behavior**
I can use the return value, as an array, not as an object.

**Screenshots/Terminal ouput**
```
WARN    temporal        Failed to process workflow task.        {"Namespace": "default", "TaskQueue": "default", "WorkerID": "209439@khoerintus-Lenovo-G40-80@default@1", "WorkflowType": "SimpleWorkflow.handle", "WorkflowID": "d411c5ae-32a7-4879-873b-704dc270eef8", "RunID": "dcf2fa14-ceb2-4c99-9b17-a7d214e4d84f", "Attempt": 9, "Error": "Cannot use object of type stdClass as array (type: Error, retryable: true)"}

ERROR   temporal        Workflow panic  {"Namespace": "default", "TaskQueue": "default", "WorkerID": "209439@khoerintus-Lenovo-G40-80@default@1", "WorkflowType": "SimpleWorkflow.handle", "WorkflowID": "d411c5ae-32a7-4879-873b-704dc270eef8", "RunID": "dcf2fa14-ceb2-4c99-9b17-a7d214e4d84f", "Attempt": 10, "Error": "Cannot use object of type stdClass as array (type: Error, retryable: true)", "StackTrace": "process event for default [panic]:\ngithub.com/temporalio/roadrunner-temporal/workflow.(*workflowProcess).OnWorkflowTaskStarted(0xc000629400)\n\tgithub.com/temporalio/roadrunner-temporal@v1.0.1/workflow/process.go:95 +0x2b9\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000584d08, 0xc0005a3d00, 0x100, 0x0, 0x0)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_event_handlers.go:791 +0x3b8\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc000aa6e10, 0xc000314990, 0x1d0f740, 0xc000515c70, 0xc000aa6e10, 0x0)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_task_handlers.go:876 +0x72c\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc000134420, 0xc000314990, 0xc0002e8db0, 0x0, 0x0, 0x0, 0x0)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_task_handlers.go:727 +0x6d9\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0004f8750, 0xc000314990, 0x0, 0x0)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_task_pollers.go:288 +0x4ae\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0004f8750, 0x1190c80, 0xc000314990, 0xc000aa6d80, 0xc0006c1800)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_task_pollers.go:259 +0x85\ngo.temporal.io/sdk/internal.(*baseWorker).processTask(0xc0002fe2d0, 0x1190840, 0xc0004f7f90)\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_worker_base.go:343 +0xb8\ncreated by go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher\n\tgo.temporal.io/sdk@v1.5.0/internal/internal_worker_base.go:270 +0xff"}
```

**Versions (please complete the following information where relevant):**
 - OS: Linux
 - Temporal Version: 1.7.0
 - are you using Docker or Kubernetes or building Temporal from source? Using Docker

**Additional context**


#### Comments (3)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-03-22 12:00:25.000 UTC</summary>

Hello!

It is worth noting that Temporal can communicate with external services that can be written in an arbitrary language. The default codec used is JSON, where there is no such thing as an associative array, as in most programming languages existing in the world.

Therefore, when packing such data into this format, the types are converted from an hash-map to an object:
```php
['key' => 'value'] 
// ->
{"key": "value"}
```

Which is the representation of the anonymous object.

That is, in this case, this is not an bug, but rather a limitation of the transport protocol.

To solve this problem, you should convert the result explicitly back from anonymous object to PHP hash-map:
```php
$assocArray = (array)(yield $simple->getAssocArray($input));
```

@wolfy-j perhaps can tell if switching to a different codec will help solve this problem. And if so, how to do it technically.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-03-22 14:26:23.000 UTC</summary>

I would strongly recommend using proper DTO for such purposes. You can create objects with public properties. Temporal should typecast it if this object is set as the return type of the activity.

</details>

<details>
<summary><strong>khoerintus</strong> commented on 2021-03-23 04:52:09.000 UTC</summary>

Hi @SerafimArts,
Noted. Thanks for your explanation and suggestion.
I will update my code to use DTO suggested by @wolfy-j instead of using associative array.

Reactions: 👍 1

</details>


---

<a id="76"></a>

### #76: upsert Search Attribute

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/76 |
| **State** | CLOSED |
| **Author** | changwuf31 (Jhon Wang) |
| **Created** | 2021-02-10 06:20:53.000 UTC (4y 11m ago) |
| **Updated** | 2022-12-19 15:46:27.000 UTC |
| **Closed** | 2022-12-19 15:46:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, thanks for the php sdk.
Is there any plan on adding upsert Search Attribute in the php sdk ?

#### Comments (3)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-02-10 07:12:45.000 UTC</summary>

Hi, yes. We will add upsert attribute after the release, it’s quick to do.

Reactions: 👍 1

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-06-29 10:26:38.000 UTC</summary>

@wolfy-j any updates?

</details>

<details>
<summary><strong>cv65kr</strong> commented on 2022-10-07 09:49:34.000 UTC</summary>

@seregazhuk you can close this issue 😄 

</details>


---

<a id="15"></a>

### #15: DTO Java/Go comparison

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/15 |
| **State** | CLOSED |
| **Author** | SerafimArts (Kirill Nesmeyanov) |
| **Created** | 2020-12-15 16:49:25.000 UTC (5 years ago) |
| **Updated** | 2021-01-21 10:32:05.000 UTC |
| **Closed** | 2021-01-21 10:32:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | None |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

```
ChildWorkflowOptions                                    // = ChildWorkflowOptions
    Namespace string                                    //   String namespace
    WorkflowID string                                   //   String workflowId
    TaskQueue string                                    //   String taskQueue
    WorkflowExecutionTimeout time.Duration              //   Duration workflowExecutionTimeout
    WorkflowRunTimeout time.Duration                    //   Duration workflowRunTimeout
    WorkflowTaskTimeout time.Duration                   //   Duration workflowTaskTimeout
    WaitForCancellation bool                            //
    WorkflowIDReusePolicy enumspb.WorkflowIdReusePolicy //   WorkflowIdReusePolicy workflowIdReusePolicy
    RetryPolicy *RetryPolicy                            //   RetryOptions retryOptions
    CronSchedule string                                 //   String cronSchedule
    Memo map[string]interface{}                         //   Map<String, Object> memo
    SearchAttributes map[string]interface{}             //   Map<String, Object> searchAttributes
    ParentClosePolicy enumspb.ParentClosePolicy         //   ParentClosePolicy parentClosePolicy
                                                        // + List<ContextPropagator> contextPropagators
                                                        // + ChildWorkflowCancellationType cancellationType

RegisterWorkflowOptions                                 // = WorkflowImplementationOptions
    Name                          string                //
    DisableAlreadyRegisteredCheck bool                  //
                                                        // + Class<? extends Throwable>[] failWorkflowExceptionTypes

RetryPolicy                                             // > RetryOptions
    InitialInterval time.Duration                       //   Duration initialInterval
    BackoffCoefficient float64                          //   double backoffCoefficient
    MaximumInterval time.Duration                       //   Duration maximumInterval
    MaximumAttempts int32                               //   int maximumAttempts
    NonRetryableErrorTypes []string                     //   String[] doNotRetry

WorkflowInfo                                            // = WorkflowInfoImpl
    WorkflowExecution        WorkflowExecution          // < String getWorkflowId()
                                                        // < String getRunId()
    WorkflowType             WorkflowType               // < String getWorkflowType()
    TaskQueueName            string                     //   String getTaskQueue()
    WorkflowExecutionTimeout time.Duration              //   Duration getWorkflowExecutionTimeout()
    WorkflowRunTimeout       time.Duration              //   Duration getWorkflowRunTimeout()
    WorkflowTaskTimeout      time.Duration              // -
    Namespace                string                     //   String getNamespace()
    Attempt                  int32                      //   int getAttempt()
    lastCompletionResult     *commonpb.Payloads         // -
    lastFailure              *failurepb.Failure         // -
    CronSchedule             string                     // -
    ContinuedExecutionRunID  string                     //   Optional<String> getContinuedExecutionRunId()
    ParentWorkflowNamespace  string                     // -
    ParentWorkflowExecution  *WorkflowExecution         // < Optional<String> getParentWorkflowId()
                                                        // < Optional<String> getParentRunId()
    Memo                     *commonpb.Memo             // -
    SearchAttributes         *commonpb.SearchAttributes //   SearchAttributes getSearchAttributes()
    BinaryChecksum           string                     // -
                                                        // + long getRunStartedTimestampMillis()

ActivityType                                            // -
    Name string                                         // String getActivityType();

ActivityInfo                                            // = ActivityInfo
    TaskToken         []byte                            //   byte[] getTaskToken();
    WorkflowType      *WorkflowType                     // < String getWorkflowType();
    WorkflowNamespace string                            //   String getWorkflowNamespace();
    WorkflowExecution WorkflowExecution                 // < String getWorkflowId()
                                                        // < String getRunId()
    ActivityID        string                            //   String getActivityId();
    ActivityType      ActivityType                      // < String getActivityType();
    TaskQueue         string                            // -
    HeartbeatTimeout  time.Duration                     //   Duration getHeartbeatTimeout();
    ScheduledTime     time.Time                         //   long getScheduledTimestamp();
    StartedTime       time.Time                         // -
    Deadline          time.Time                         // -
    Attempt           int32                             //   int getAttempt();
                                                        // + boolean isLocal();
                                                        // + String getWorkflowNamespace();
                                                        // + String getActivityNamespace();
                                                        // + Optional<Payloads> getHeartbeatDetails();
                                                        // + Duration getStartToCloseTimeout();
                                                        // + Duration getScheduleToCloseTimeout();

WorkflowType                                            // -
    Name string                                         //   String getWorkflowType()

WorkflowExecution                                       // -
    ID    string                                        //   String getWorkflowId();
    RunID string                                        //   String getRunId();

RegisterActivityOptions                                 // -
    Name                          string                // -
    DisableAlreadyRegisteredCheck bool                  // -

ActivityOptions                                         // = ActivityOptions
    TaskQueue string                                    //   String taskQueue
    ScheduleToCloseTimeout time.Duration                //   Duration scheduleToCloseTimeout
    ScheduleToStartTimeout time.Duration                //   Duration scheduleToStartTimeout
    StartToCloseTimeout time.Duration                   //   Duration startToCloseTimeout
    HeartbeatTimeout time.Duration                      //   Duration heartbeatTimeout
    WaitForCancellation bool                            // -
    ActivityID string                                   // -
    RetryPolicy *RetryPolicy                            //   RetryOptions retryOptions
                                                        // + List<ContextPropagator> contextPropagators
                                                        // + ActivityCancellationType cancellationType

LocalActivityOptions                                    // = LocalActivityOptions
    ScheduleToCloseTimeout time.Duration                //   Duration scheduleToCloseTimeout
    StartToCloseTimeout time.Duration                   //   Duration startToCloseTimeout
    RetryPolicy *RetryPolicy                            //   RetryOptions retryOptions
                                                        // + Duration localRetryThreshold

StartWorkflowOptions                                    // = WorkflowOptions
    ID string                                           //   String workflowId
    TaskQueue string                                    //   String taskQueue
    WorkflowExecutionTimeout time.Duration              //   Duration workflowExecutionTimeout
    WorkflowRunTimeout time.Duration                    //   Duration workflowRunTimeout
    WorkflowTaskTimeout time.Duration                   //   Duration workflowTaskTimeout
    WorkflowIDReusePolicy enumspb.WorkflowIdReusePolicy //   WorkflowIdReusePolicy workflowIdReusePolicy
    RetryPolicy *RetryPolicy                            //   RetryOptions retryOptions
    CronSchedule string                                 //   String cronSchedule
    Memo map[string]interface{}                         //   Map<String, Object> memo
    SearchAttributes map[string]interface{}             //   Map<String, Object> searchAttributes
                                                        // + List<ContextPropagator> contextPropagators
```

#### Comments (3)

<details>
<summary><strong>wolfy-j</strong> commented on 2020-12-16 17:25:41.000 UTC</summary>

Expose:
- **long getRunStartedTimestampMillis()**
- activity. start to close, schedule to close timeout

Later TODO:
- binary checksum

Enum:
- enums for cancellation types

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2020-12-16 17:27:00.000 UTC</summary>

cancellation mapping try cancel by default

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2020-12-17 07:15:49.000 UTC</summary>

> binary checksum

The basis has already been implemented: https://github.com/temporalio/sdk-php/blob/master/src/Internal/Version.php#L48

We need to be able send it to GO SDK

</details>


---

<a id="4"></a>

### #4: Is the WorkflowClient going to available in the php sdk soon? 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/4 |
| **State** | CLOSED |
| **Author** | arengarajan |
| **Created** | 2020-10-06 00:08:49.000 UTC (5y 3m ago) |
| **Updated** | 2021-02-03 15:42:11.000 UTC |
| **Closed** | 2021-02-03 15:42:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, 

I noticed that the php-sdk doesn't have a workflow client, similar to how [Java has one](https://github.com/temporalio/sdk-java/blob/master/temporal-sdk/src/main/java/io/temporal/client/WorkflowClient.java) (where you can also configure the namespace, etc.)

I know this SDK is a work in progress, but just wanted to check if I was missing something and if the client will be available soon/ is planned to be incorporated as part of this project. Thanks!

Anand

#### Comments (3)

<details>
<summary><strong>wolfy-j</strong> commented on 2020-10-06 08:42:48.000 UTC</summary>

Hi,

this SDK does have a Workflow client - Worker (we use different name due to different execution strategy). Task Queue will be exposed via it (currently it's internal). We will provide a contrete ETA after finalizing sync process between two event loops.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-01-29 15:35:42.000 UTC</summary>

The WorkflowClient is available in a current SDK implementation and will go to the release.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-02-01 20:41:35.000 UTC</summary>

Hi, you can find examples of workflow client here: https://github.com/temporalio/samples-php

</details>


---

<a id="642"></a>

### #642: [Feature Request] Add first execution run ID to workflow info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/642 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-11 14:29:23.000 UTC (5 months ago) |
| **Updated** | 2025-12-26 16:53:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/29

#### Comments (2)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 15:38:24.000 UTC</summary>

I suppose it's added [there](https://github.com/temporalio/sdk-php/commit/6eadea02de16a6874281e8045763a776800bcae1#diff-42e90d01ec772ae1d6e174e96d450fe7a8da7c53408435a9278148b00bebe79dR62).
@roxblnfk isn't it?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-12-26 16:53:58.000 UTC</summary>

No. You need to expose it via

```php
\Temporal\Workflow::getInfo()->firstExecution->getRunID();
// or
\Temporal\Workflow::getInfo()->firstExecutionRunID;
```

See Java implementation to chose the right way

Reactions: 👍 1

</details>


---

<a id="613"></a>

### #613: [Bug] Using `getVersion` break determinism

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/613 |
| **State** | CLOSED |
| **Author** | cv65kr (Kajetan) |
| **Created** | 2025-05-09 20:42:46.000 UTC (8 months ago) |
| **Updated** | 2025-06-05 13:45:59.000 UTC |
| **Closed** | 2025-06-05 13:45:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Use versioning of workflows

### Describe the bug

Using
```
$version = Workflow::getVersion('test', -1, 1);
```

end up with
```
[TMPRL1100] No cached result found for side effectID=1. KnownSideEffects=[]
```

### Minimal Reproduction

https://github.com/cv65kr/samples-php/tree/test-version
php ./app/app.php replay-activity-retry

### Environment/Versions

rr version 2025.1.1 (build time: 2025-05-01T14:16:50+0000, go1.24.2), OS: darwin, arch: arm64
temporal/sdk  2.14.1 

### Additional context

--


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-10 10:46:06.000 UTC</summary>

```php
    public function greet(string $name): \Generator
    {
        $version = Workflow::getVersion('test', -1, 1);
        if ((int) $version === -1) {
            return yield $this->greetingActivity->composeGreeting('Hello', $name);
        } else {
            yield Workflow::sideEffect(fn() => 'test');
            return '1';
        }
    }
```

`Workflow::getVersion()` returns a promise
You should use `yield` with it.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-18 13:29:13.000 UTC</summary>

Can we close the issue?

</details>


---

<a id="568"></a>

### #568: [Question] How to debug the activity task startToClose timeout error?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/568 |
| **State** | OPEN |
| **Author** | ArFeRR |
| **Created** | 2025-02-12 18:07:49.000 UTC (11 months ago) |
| **Updated** | 2025-02-13 12:36:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We're receiving the activity startToClose timeout for our activity, written on PHP with the retry policy below:

```
Timeout 3m
Retry Policy Initial Interval 1s
Retry Policy Backoff Coefficient 3
Retry Policy Maximum Interval 10s
Retry Policy Maximum Attempts 30

```

The task, which timeouts, does nothing but going to database for selecting some data by indexed field and it actually does it, but after executing the activity code it hangs for no reason until 3 minutes timeout appears. Then retry policy comes to an action and retry task starts execution, it ends with timeout too and so on, and so on. Once it all the task attempts end with timeout is throws an activity exception permanently.

Could you please look through the JSON log from temporal workflow admin for such activity and advice what to do with it?
(We've already checked the deadline exceeded debugging cookbook https://docs.temporal.io/troubleshooting/deadline-exceeded-error ,but everything is alright from our side)

[TaskFailed.json](https://github.com/user-attachments/files/18772215/TaskFailed.json)
[WorkflowFailed.json](https://github.com/user-attachments/files/18772214/WorkflowFailed.json)


#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2025-02-12 18:54:44.000 UTC</summary>

1) Check activity status in Temporal UI, was it started?
2) Check logs on worker that runs it, is there a chance that worker is dead?
3) Are you using Temporal cloud or local?
4) Are you using latest versions of RR and SDK?

it feels like your activity worker is crashing, can you try to use mock activity or something that def works first?

Reactions: 👍 1

</details>

<details>
<summary><strong>ArFeRR</strong> commented on 2025-02-13 12:36:13.000 UTC</summary>

1. Yes, the activity task was started. The json file 'TaskFailed.json', i've provided above, is the log of failed activity, actually. Additionally check the screenshot of the most recent events of the failed workflow.
2. I'm not sure how to check worker logs from temporal UI (google says it's not possible), but regarding our Grafana, the worker is not dead. It processes the Activity code and then hangs until timeout. After this it starts to process another activity task.
3. I'm using temporal local.
4. Temporal php sdk is v2.12.3, roadrunner is latest.

I do not see the worker is crashing, it hangs according to the application logs. No errors or something.

![Image](https://github.com/user-attachments/assets/06e6482e-dde2-4eba-962c-93384d121023)

</details>


---

<a id="554"></a>

### #554: Ensure better SDK support in IDE

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/554 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-01-17 11:19:46.000 UTC (11 months ago) |
| **Updated** | 2025-02-10 17:37:14.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

I would like better IDE support when working with the SDK.
What could it be:

Client API
- [x] Autocomplete Workflow types in client API
	- [x] fallback to short class name if WF type is not set
- [x] Autocomplete Workflow classes in client API
- [ ] Autocomplete signal/query/update methods in untyped client stubs

Workflow

- [x] Autocomplete Workflow and Activity classes in Workflow context
- [ ] Autocomplete Activity types in untyped stubs (need to merge functions with prefixes)
- [ ] Autocomplete signal/query/update methods in Workflow context
- [ ] Force `PromiseInterface` result type from side effect calls in Workflow context


---

<a id="544"></a>

### #544: [Bug] WorkflowClient throws type error when update method of untyped workflow stub is called

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/544 |
| **State** | CLOSED |
| **Author** | pfy-oleksii-storozhylov (Oleksii Storozhylov) |
| **Created** | 2025-01-07 09:48:40.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 15:00:05.000 UTC |
| **Closed** | 2025-01-07 15:00:04.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.12.1 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Call `Update` method for `UntypedRunningWorkflowStub`

### Describe the bug

Type error is thrown by the WorkflowClient

### Minimal Reproduction

- run workflow which supports `\Temporal\Workflow\UpdateMethod` method
- create untyped workflow stub using `\Temporal\Client\WorkflowClientInterface::newUntypedRunningWorkflowStub`
- execute update method

Example of the code with issue https://github.com/pfy-oleksii-storozhylov/samples-php/blob/workflow-type-issue/app/src/Signal/ExecuteCommand.php#L61-L68

Outcome
```sh
$ docker compose exec app php app.php Signal

Starting SignalWorkflow... 
Started: WorkflowID=852126e7-f633-401b-8e86-253eb4eeb8e5, RunID=8b0c185f-7660-4db7-8b19-92e63d91946d
Add from workflow stub: Name1
Result: Name1 was added
Add from running workflow stub: Name2
Result: Name2 was added
Add from untyped running workflow stub: Name3
Error: Temporal\Internal\Client\ResponseToResultMapper::mapUpdateWorkflowResponse(): Argument #3 ($workflowType) must be of type string, null given, called in /var/app/vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php on line 310
Signal exit
Result:
Array
(
    [0] => Hello, Name1!
    [1] => Hello, Name2!
    [2] => Hello, Name3!
)
```

The `Update` request was processed by the workflow, but the error was thrown in the WorkflowClient

### Environment/Versions

- Temporal PHP SDK version 2.12.0

### Additional context

It seems that the problem happens here https://github.com/temporalio/sdk-php/blob/master/src/Internal/Client/WorkflowStub.php#L309-L315 because `$input->workflowType` is nullable string (and it is null for untyped workflows), but `mapUpdateWorkflowResponse` requires not nullable workflowType

With the following patch, the WorkflowClient behaves as expected without issues

```patch
Index: src/Internal/Client/ResponseToResultMapper.php
IDEA additional info:
Subsystem: com.intellij.openapi.diff.impl.patch.CharsetEP
<+>UTF-8
===================================================================
diff --git a/src/Internal/Client/ResponseToResultMapper.php b/src/Internal/Client/ResponseToResultMapper.php
--- a/src/Internal/Client/ResponseToResultMapper.php	(revision 6598397606937c0b51f26ec225748eb8889abcc4)
+++ b/src/Internal/Client/ResponseToResultMapper.php	(date 1736240478158)
@@ -25,7 +25,7 @@
     public function mapUpdateWorkflowResponse(
         UpdateWorkflowExecutionResponse $result,
         string $updateName,
-        string $workflowType,
+        ?string $workflowType,
         WorkflowExecution $workflowExecution,
     ): StartUpdateOutput {
         $outcome = $result->getOutcome();
```



---

<a id="532"></a>

### #532: [Question] Asynchronous child workflow execution problem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/532 |
| **State** | OPEN |
| **Author** | Muz4k (Muz4k) |
| **Created** | 2024-12-03 17:40:33.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-09 19:39:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello!

(Sorry, I posted on the [forum](https://community.temporal.io/t/asynchronous-child-workflow-execution-problem/15503), but I really need to get a response as soon as possible)
I’ve got a problem with child workflow working.

The child workflow is initialized, but the execution does not start

I assume that the problem is due to the fact that it does not have time to start execution - the parent workflow finishes faster.

I found a bestway for java - [Best way to create an async child workflow](https://community.temporal.io/t/best-way-to-create-an-async-child-workflow/114) that looks like the one I need

Point 4 says “Wait for the Promise returned by getWorkflowExecution to complete. ”

Can you please tell me how this can be implemented using php-sdk?
My code now looks like this (called inside the parent workflow)

```php

Workflow::asyncDetached(
            task: static function (): void {
                $options = ChildWorkflowOptions::new()
                    ->withTaskQueue('task_name')
                    ->withParentClosePolicy(ParentClosePolicy::Abandon);

                $workflow = Workflow::newChildWorkflowStub(
                    class: MyChildWorkflowInterface::class,
                    options: $options,
                );

                $workflow->execute(); // workflow logic
            },
);
```

#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-12-09 19:26:17.000 UTC</summary>

Hi. Sorry for the delay.
Have you tried using `yield` to wait promises?

```php
// Here:
yield Workflow::asyncDetached(
    task: static function () {
        $options = ChildWorkflowOptions::new()
            ->withTaskQueue('task_name')
            ->withParentClosePolicy(ParentClosePolicy::Abandon);

        $workflow = Workflow::newChildWorkflowStub(
            class: MyChildWorkflowInterface::class,
            options: $options,
        );

        // And here:
        yield $workflow->execute(); // workflow logic
    },
);
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-12-09 19:34:14.000 UTC</summary>

I may have misunderstood your question.

If you want to simply run a Child Workflow in a Detached context (for example, after receiving a Cancel) and just complete the parent, `UntypedChildWorkflowStub` can help you, as it has a `start()` method.

You can obtain `UntypedChildWorkflowStub` via `Workflow::newUntypedChildWorkflowStub()`, and you can wait for the Child Workflow to start like this: `yield $untypedStub->start();`

</details>


---

<a id="531"></a>

### #531: [Bug] cannot unmarshal array into Go struct field WorkerInfo.Flags of type map[string]string

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/531 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2024-12-02 19:08:26.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-03 20:12:05.000 UTC |
| **Closed** | 2024-12-03 20:12:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

run worker php


### Describe the bug


### Minimal Reproduction

./rr serve -c .rr.temporal.dev.yaml

```yaml
version: "3"

metrics:
  address: 0.0.0.0:2116

status:
  address: 0.0.0.0:2115

server:
  command: "php public/index.php"
  env:
    - APP_RUNTIME: Vanta\Integration\Symfony\Temporal\Runtime\TemporalRuntime

rpc:
  listen: tcp://0.0.0.0:6001

temporal:
  address: "mdm_pos_temporal_server:7233"
  namespace: mdm
  activities:
    num_workers: 4
  metrics:
    driver: prometheus
    address: 0.0.0.0:2117
    type: "summary"


logs:
  level: debug
  channels:
    temporal.level: error
```


### Environment/Versions

RR 2024.2.1
temporal/sdk v2.11.2

### Additional context

Problem line https://github.com/temporalio/sdk-php/blob/master/src/Internal/Transport/Router/GetWorkerInfo.php#L85


#### Comments (2)

<details>
<summary><strong>cv65kr</strong> commented on 2024-12-03 16:35:28.000 UTC</summary>

@root-aza it's issue in bundle which you are using - https://github.com/VantaFinance/temporal-bundle/blob/main/src/DataConverter/SymfonySerializerDataConverter.php#L51 should have option `['preserve_empty_objects' => true]`.

Reactions: 👍 1 😄 1

</details>

<details>
<summary><strong>root-aza</strong> commented on 2024-12-03 20:12:05.000 UTC</summary>

Oops. Thanks!

</details>


---

<a id="530"></a>

### #530: [Bug] Generators return null when exception is thrown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/530 |
| **State** | CLOSED |
| **Author** | IhorBerestPaybis |
| **Created** | 2024-11-25 12:37:33.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-17 18:30:43.000 UTC |
| **Closed** | 2024-12-17 18:30:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.11.4 |

#### Description

### What are you really trying to do?

I want to structure workflows in an easy-to-read and understandable manner, especially when the workflow's code is long enough. At my company, we have found that it is easier when we move the part of code that is related to the same action, or part of the flow (activity calls, timers, if statements) into a private function inside the workflow code. Thus we create private methods inside workflow classes that return Generators (simply because of the yield inside that method)



### Describe the bug

When an exception is thrown in the generator it returns null instead of throwing that exception in the outer scope, which results in proceeding workflow execution instead of immediate cancel of workflow. See comparison below

### Minimal Reproduction
Workflow code
``` php
<?php

declare(strict_types=1);

namespace App\Workflow\Test;

use Carbon\CarbonInterval;
use Temporal\Activity\ActivityOptions;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
class TestWorkflow
{

    private Workflow\ActivityStubInterface $activity;

    public function __construct()
    {
        $defaultActivityOptions = ActivityOptions::new()
            ->withStartToCloseTimeout(CarbonInterval::seconds(45))
            ->withTaskQueue('default')
        ;

        $this->activity = Workflow::newUntypedActivityStub($defaultActivityOptions);
    }

    #[WorkflowMethod]
    public function execute(): \Generator
    {
        var_dump(yield $this->doSomething());
        echo "Execution is processed\n";
    }

    private function doSomething(): \Generator
    {
        yield $this->activity->execute('execute');
    }
}
```

Activity code
``` php
<?php

declare(strict_types=1);

namespace App\Workflow\Test;

use Temporal\Activity\ActivityInterface;
use Temporal\Activity\ActivityMethod;

#[ActivityInterface]
class TestActivity
{
    #[ActivityMethod]
    public function execute(): void
    {
        throw new \Exception("error");
    }
}
```
By running the example above we get the workflow in completed status, even though the activity has been canceled. And the `doSomething` method returns null
<img width="1094" alt="image" src="https://github.com/user-attachments/assets/e0a17bc5-7d0d-47cd-8e93-ee1d91f41c95">
<img width="642" alt="image" src="https://github.com/user-attachments/assets/207fe73e-553d-4fb3-a725-81fbe9bacfa9">


If we modify the workflow and move the activity execution from the private method into workflow method it works as expected and workflow finishes in canceled status
``` php
<?php

declare(strict_types=1);

namespace App\Workflow\Test;

use Carbon\CarbonInterval;
use Temporal\Activity\ActivityOptions;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
class TestWorkflow
{

    private Workflow\ActivityStubInterface $activity;

    public function __construct()
    {
        $defaultActivityOptions = ActivityOptions::new()
            ->withStartToCloseTimeout(CarbonInterval::seconds(45))
            ->withTaskQueue('default')
        ;

        $this->activity = Workflow::newUntypedActivityStub($defaultActivityOptions);
    }

    #[WorkflowMethod]
    public function execute(): \Generator
    {
       yield $this->activity->execute('execute');
        echo "Execution is processed\n";
    }
}
```
<img width="1088" alt="image" src="https://github.com/user-attachments/assets/a86a526c-9f19-4452-b35e-43e7f331c315">


### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux, Mac  
- Temporal Version: minimal SDK version the issues has been found is 2.11.0, before works as expected
- Using docker

### Additional context
No additional context


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-25 12:55:07.000 UTC</summary>

Hello. Thank you for creating this issue.

Let me point out that you can achieve the desired behavior using the `yield from` construct:
```php
yield from $this->doSomething()
```
However, you won't be able to use this to obtain a result from the generator.

I also believe that we should receive an exception in the execution flow if it occurs in the yielded generator. I will discuss with the team whether the current behavior is intended.

</details>

<details>
<summary><strong>IhorBerestPaybis</strong> commented on 2024-11-25 13:24:25.000 UTC</summary>

Hello, thank you for the tip.

As you said, we aren't able to obtain a result, and that's our problem, I am afraid.
However, we have found another solution.

We simply wrapped the generator code in `try/catch` clause and returned the `Promise::reject` object when catching a Throwable.

``` PHP
private function doSomething(): \Generator
{
    try {
        yield $this->activity->execute('execute');
    } catch (\Throwable $exception) {
        return Promise::reject($exception);
    }
}
```

But wrapping every generator method in try/catch clause isn't the best-looking long-term solution.

Reactions: 👍 1

</details>


---

<a id="522"></a>

### #522: [Bug] [ErrorException] exclude_calendar is deprecated.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/522 |
| **State** | CLOSED |
| **Author** | sidorov89 |
| **Created** | 2024-11-03 19:18:47.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-14 09:18:53.000 UTC |
| **Closed** | 2024-11-14 09:18:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### What are you really trying to do?
I'm trying add workflow into Temporal Schedule

### Describe the bug

```
#[AsCommand(name: 'check:status')]
final class CheckStatusCommand extends Command
{

    public function __invoke(): int
    {
              $client = \Temporal\Client\ScheduleClient::create(
                  \Temporal\Client\GRPC\ServiceClient::create('localhost:7233'),
              );
      
              $handle = $client->createSchedule(
                  Schedule\Schedule::new()->withAction(
                      Schedule\Action\StartWorkflowAction::new('WebsiteStatusWorkflow')
                          ->withRetryPolicy(\Temporal\Common\RetryOptions::new()->withMaximumAttempts(3))
                          ->withHeader(['foo' => 'bar'])
                          ->withWorkflowExecutionTimeout('40m')
                  )->withSpec(
                      Schedule\Spec\ScheduleSpec::new()
                          ->withIntervalList(5 * 60) // every 5 minutes
                          ->withJitter(60) // with jitter of 1 minute
                  ),
                  scheduleId: 'my-schedule-id',
              );
      }
}
```
After run code `php app.php check:status`  in console I get Exception: 
"[ErrorException]
exclude_calendar is deprecated.
in vendor/roadrunner-php/roadrunner-api-dto/generated/Temporal/Api/Schedule/V1/ScheduleSpec.php:355"

### Environment/Versions

<!-- Please complete the following information where relevant. -->
- Roadrunner Version version: 2024.2.1,
- Temporal CLI 1.1.1 (Server 1.25.1, UI 2.31.2)
- OS and Platform Mac Book Intel Core i7
- Are you using Docker or Kubernetes or building Temporal from source? "brew install temporal"
- Framework Spiral 3.14.6


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-05 12:21:58.000 UTC</summary>

@sidorov89 hi ✋ 
Could you check that PR fixes the deprecation error

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-14 09:18:53.000 UTC</summary>

Resolved by adding PHP `protobuf` extension.
Other deprecations were fixed in #523 

</details>


---

<a id="501"></a>

### #501: Repair or disable Windows tests in CI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/501 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-10 10:08:58.000 UTC (1y 4m ago) |
| **Updated** | 2025-02-11 14:17:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Sometimes Acceptance and Functional tests in CI end with error code -1073741819.
However, the tests themselves pass completely.
It is necessary to identify the source of the problem. This may be related to how RoadRunner or Temporal CLI are terminated.

![image](https://github.com/user-attachments/assets/62ca958e-ee03-412a-bd95-40fcb9805719)


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-05 11:54:09.000 UTC</summary>

Reproduced on the next env:
- Windows
- PHP 8.3.x
- without protobuf extension (with it works well)

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-01-13 23:35:51.000 UTC</summary>

Feature and Acceptance tests on Windows still fail with error code `-1073741819`, even with installed protobuf extension.

</details>


---

<a id="479"></a>

### #479: Support WorkflowIdConflictPolicy for Signal-With-Start API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/479 |
| **State** | CLOSED |
| **Author** | stephanos (Stephan Behnke) |
| **Created** | 2024-07-25 15:54:40.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-25 16:57:17.000 UTC |
| **Closed** | 2024-07-25 16:47:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/437

This is a follow-up to https://github.com/temporalio/sdk-php/pull/417 which added it to StartWorkflow.

#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-07-25 16:45:11.000 UTC</summary>

Hi 👋
The `WorkflowOptions` settings work the same for `start()` and `startWithSignal()`.

```php
$workflowClient = \Temporal\Client\WorkflowClient::create(
    ServiceClient::create('localhost:7233')
);

$stub = $workflowClient->newWorkflowStub(
    TestWorkflow::class,
    \Temporal\Client\WorkflowOptions::new()
        ->withWorkflowIdConflictPolicy(\Temporal\Common\WorkflowIdConflictPolicy::Fail)
);

$workflowClient->startWithSignal($stub, 'test-signal');
```

Please reopen the issue if this does not work.

</details>

<details>
<summary><strong>stephanos</strong> commented on 2024-07-25 16:57:16.000 UTC</summary>

@roxblnfk Awesome, thank you for confirming! I couldn't quite tell.

</details>


---

<a id="446"></a>

### #446: Warn or error when update handlers dangle across CAN or workflow exit

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/446 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 04:21:58.000 UTC (1y 7m ago) |
| **Updated** | 2024-09-03 11:57:21.000 UTC |
| **Closed** | 2024-09-03 11:57:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

We can recommend the await-all-handlers or drop-all-handlers methods. TBD whether error or warning.


#### Comments (2)

<details>
<summary><strong>dandavison</strong> commented on 2024-06-28 12:20:57.000 UTC</summary>

I've merged the first PR, for Python: https://github.com/temporalio/sdk-python/pull/556

The basic spec that that PR's proposing for other SDKs is

- Workflow code can wait on a method named similarly to `workflow.all_handlers_finished()`

- By default, the worker will emit `workflow.UnfinishedUpdateHandlersWarning` and `workflow.UnfinishedSignalHandlersWarning` if any handlers of those types are unfinished when the workflow completes (cancellation, failure, success). See PR for wording of message.

- These warnings are controlled by a policy whose default value is `workflow.HandlerUnfinishedPolicy.WARN_AND_ABANDON`

- Users can silence the warning on a per-handler basis by setting unfinished_policy to `workflow.HandlerUnfinishedPolicy.ABANDON`

- Tests should verify the above for worker-side workflow exit via cancellation, failure, and success

</details>

<details>
<summary><strong>dandavison</strong> commented on 2024-07-29 17:18:36.000 UTC</summary>

Please add the [TMPRL1102](https://github.com/temporalio/rules/blob/main/rules/TMPRL1102.md) rule identifier to the warning message.

</details>


---

<a id="419"></a>

### #419: [Feature Request] Divide Workflow stub objects and Workflow proxy objects

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/419 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-04-12 13:28:38.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-16 14:37:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | Sushisource, wolfy-j, roxblnfk |
| **Milestone** | None |

#### Description

## I have an idea

I suggest adjusting the Workflow Client interface: introduce a distinction between the concepts of Stub and Proxy.

Currently, as a result of calling the method `WorkflowClient::newWorkflowStub($class)` (or `WorkflowClient::newRunningWorkflowStub($class)`), we do not receive a Workflow Stub ([WorkflowStubInterface](https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowStubInterface.php)), but a proxy object that redirects calls of Workflow methods related to the Workflow interface. That is, the user interacts with the proxy object as with an implementation of the user's Workflow interface.

At the same time, we have methods `WorkflowClient::newUntypedWorkflowStub()`, `WorkflowClient::newUntypedRunningWorkflowStub()`, which return the very [WorkflowStubInterface](https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowStubInterface.php) (type-level guarantee). That is, they work as expected.

> [!NOTE]
> `WorkflowStubInterface` is convenient when, for example, you need to call the Describe method or the Update method with your own WaitPolicy.

We face two problems:
- methods with the `Stub` postfix work differently: two out of four return `WorkflowStubInterface`, the other two return a proxy.
- there is no proper way to get `WorkflowStubInterface` from a Workflow class. Both methods that accept a class return us a proxy.

In this commit, you can see changes in the `WorkflowClientInterface` interface. 
https://github.com/temporalio/sdk-php/commit/1847f723ff5ece0320dccfc30312da387c032b96
In the methods that currently return a Proxy, I've considered backward compatibility through the `$proxy` parameter. This will all be cleaned up in the next major version.
Calls to create stubs with `$proxy=true` will throw deprecation notices.

We can also discuss replacing the naming of Stub with Handle. Then we'll just make all the *Stub methods deprecated :)


#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2024-04-16 14:18:49.000 UTC</summary>

@Sushisource, I propose to introduce new methods instead. Can we hop on a call to discuss it?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-16 14:36:40.000 UTC</summary>

New methods might be:

```php
// Return WorkflowStubInterface
$wfClient->newWorkflow($class, ...);
$wfClient->newRunningWorkflow($class, ...);

// Return Proxy objects. There is `Proxy` suffix
$wfClient->newWorkflowProxy($class, ...);
$wfClient->newRunningWorkflowProxy($class, ...);

// Untyped (unknown class name). Return WorkflowStubInterface
$wfClient->newUntypedWorkflow($type, ...);
$wfClient->newUntypedRunningWorkflow($type, ...);

// DEPRECATED
$wfClient->newWorkflowStub($class, ...); // Proxy object
$wfClient->newRunningWorkflowStub($class, ...); // Proxy object
$wfClient->newUntypedWorkflowStub($type, ...); // WorkflowStubInterface
$wfClient->newUntypedRunningWorkflowStub($type, ...); // WorkflowStubInterface
```

Reactions: ❤️ 1

</details>


---

<a id="410"></a>

### #410: [Feature Request] API key client option

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/410 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-26 19:27:33.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-12 19:14:23.000 UTC |
| **Closed** | 2024-04-12 19:14:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/426 and https://github.com/temporalio/sdk-go/pull/1409 for the ideal approach

#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-10 11:09:45.000 UTC</summary>

Since PHP SDK 2.9.0 users can specify any metadata, including the Authorization header.

```php
/** @var \Temporal\Client\WorkflowClient $workflowClient */

$workflowClient = $workflowClient->withMetadata(['Authorization', ['Bearer <api-key>']]);

// All the calls $workflow->* will be executed with the specified metadata.
$workflowClient->newWorkflowStub(MyWorkflow::class);
```

Do we really need to add extra sugar for this header?

</details>

<details>
<summary><strong>josh-berry</strong> commented on 2024-04-10 18:19:56.000 UTC</summary>

I think it's a nice thing to have ergonomically, and it matches what the other SDKs do (or will do). So unless it's gonna cause some significant amount of ugliness, I personally think it's worth doing.

</details>


---

<a id="396"></a>

### #396: [Bug] LocalActivity behaves like a normal activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/396 |
| **State** | CLOSED |
| **Author** | pfy-oleksii-storozhylov (Oleksii Storozhylov) |
| **Created** | 2024-02-13 08:25:05.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-13 19:00:18.000 UTC |
| **Closed** | 2024-02-13 19:00:18.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.7.6 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

I'm trying to execute local activity and expecting a single event `MarkerRecorded` in the workflow history.

### Describe the bug

During local activity execution, there are three events in the workflow history (`ActivityTaskScheduled`, `ActivityTaskStarted`, `ActivityTaskCompleted`).

### Minimal Reproduction

The bug could be reproduced with https://github.com/temporalio/samples-php/tree/master/app/src/LocalActivity

### Environment/Versions

* temporal/sdk >= 2.7.0
* https://github.com/temporalio/samples-php/

### Additional context
* temporal/sdk 2.6 - local activity works fine
  * [roadrunner log](https://github.com/temporalio/sdk-php/files/14257995/rr-2.6.txt)
  * [workflow history json](https://github.com/temporalio/sdk-php/files/14257996/rr-2.6.wf.json)
* temporal/sdk 2.7 - local activity behaves like a normal one
  * [roadrunner log](https://github.com/temporalio/sdk-php/files/14257997/rr-2.7.txt)
  * [workflow history json](https://github.com/temporalio/sdk-php/files/14257998/rr-2.7.wf.json)



---

<a id="393"></a>

### #393: Changing data type during deserialization

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/393 |
| **State** | CLOSED |
| **Author** | windbridges (alexey.d) |
| **Created** | 2024-01-22 02:35:37.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-25 12:49:20.000 UTC |
| **Closed** | 2024-01-25 12:49:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

I'm trying to return a DTO object containing an array of other DTO objects from an activity. Activity returns a DTO:

```
class ActivityResult {
   public int $count;
   /** @var ProductInfo[] */
   public array $items;
}
```

```
// inside workflow:
$result = yield $activity->getResult();
```

Further inside the workflow, it turns out that $result->items is not an array of ProductInfo, but an array of arrays. Each ProductInfo has been converted into an array with keys corresponding to the names of the object's properties.

Is this a bug or expected behavior?


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-01-22 08:18:35.000 UTC</summary>

Hello @windbridges

The SDK uses its own Marshaller which does not yet support type annotations.
Try to use `MarshalArray` attribute:

```php
class ActivityResult {
    public int $count;

    /** @var ProductInfo[] */
    #[MarshalArray(of: ProductInfo::class)]
    public array $items;
}
```


Reactions: 👍 1

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-01-25 12:49:19.000 UTC</summary>

I believe your issue has been resolved. For this reason, I am closing the Issue.

</details>


---

<a id="387"></a>

### #387: [Bug] CronSchedule cannot be used because WorkflowStartDelay is always sent to server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/387 |
| **State** | CLOSED |
| **Author** | benkelukas (Lukas Benke) |
| **Created** | 2024-01-15 14:34:45.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-15 19:12:47.000 UTC |
| **Closed** | 2024-01-15 19:12:47.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.7.3 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

I'm trying to start a workflow execution with CronSchedule set with SDK 2.7.2

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

When CronSchedule is configured for a workflow, the server rejects the start request with error "CronSchedule and WorkflowStartDelay may not be used together"

![Screenshot 2024-01-15 at 15 31 25](https://github.com/temporalio/samples-php/assets/92123930/051085e2-6803-4620-b9f8-ece2f9ecf952)


### Minimal Reproduction

Execute the Cron sample in php-samples, no need for any modification.

### Environment/Versions

- OS and processor: Linux
- Temporal Version: 1.21.5
- Are you using Docker or Kubernetes or building Temporal from source? Kubernetes

### Additional context


What I **think** is happening:

In Go SDK they check [if WorkflowStartDelay is not zero ](https://github.com/temporalio/sdk-go/blob/fac7f7f23d57a5cb64d74bd7a34b1a90ab2c17a3/internal/internal_workflow_client.go#L1546) and only send it if it is not. [PHP SDK sends it on every request](https://github.com/temporalio/sdk-php/blob/master/src/Internal/Client/WorkflowStarter.php#L194), so when CronSchedule is set as well, the server rejects the request.



---

<a id="380"></a>

### #380: [Bug] Schedule API: Given value is not an instance of Google\Protobuf\Timestamp

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/380 |
| **State** | CLOSED |
| **Author** | zemkogabor |
| **Created** | 2024-01-04 21:02:05.000 UTC (2 years ago) |
| **Updated** | 2024-01-05 14:19:01.000 UTC |
| **Closed** | 2024-01-05 14:19:00.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.7.1 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Create scheduled workflow

### Describe the bug

I tried the new Schedule API, but i got an error when creating schedule:

```
Uncaught Exception TypeError: "Given value is not an instance of Google\Protobuf\Timestamp." at /app/vendor/roadrunner-php/roadrunner-api-dto/generated/Temporal/Api/Schedule/V1/ScheduleSpec.php line 198 {"exception":"[object] (TypeError(code: 0): Given value is not an instance of Google\\Protobuf\\Timestamp. at /app/vendor/roadrunner-php/roadrunner-api-dto/generated/Temporal/Api/Schedule/V1/ScheduleSpec.php:198)"
```

### Minimal Reproduction

```
        $handle = $scheduleClient->createSchedule(
            Schedule::new()->withAction(
                StartWorkflowAction::new(SubscriptionRenewalWorkflow::WORKFLOW_TYPE)
                    ->withRetryPolicy(
                        RetryOptions::new()
                            ->withInitialInterval(CarbonInterval::seconds(10))
                            ->withMaximumAttempts(3)
                    )
                    ->withWorkflowId(SubscriptionRenewalWorkflow::WORKFLOW_ID)
                    ->withWorkflowRunTimeout(CarbonInterval::minute(10))
            )->withSpec(
                ScheduleSpec::new()->withAddedCronString('15 7 * * *')
            ),
            scheduleId: SubscriptionRenewalWorkflow::SCHEDULE_ID,
        );
```

### Environment/Versions

- Docker
- PHP: 8.3.1
- Protobuf: 3.25.1
- Temporal SDK Version: 2.7
- Roadrunner: 2023.3.8 
- OS and processor: M1 Mac


---

<a id="348"></a>

### #348: [Maintenance] Update reactphp/promise to v3

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/348 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-02 09:01:50.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-15 16:41:53.000 UTC |
| **Closed** | 2023-09-15 16:41:52.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |
| **Reactions** | 👍 1 |

#### Description

There is the new package version

https://github.com/reactphp/promise/releases/tag/v3.0.0

---

> **Open question:**
> Should we support react/promise 2.x? It needs few stubs for removed interfaces


---

<a id="311"></a>

### #311: [Feature Request] Allow to register checksum with the worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/311 |
| **State** | CLOSED |
| **Author** | manishrocksag (Manish Agarwal) |
| **Created** | 2023-06-02 12:14:07.000 UTC (2y 7m ago) |
| **Updated** | 2025-12-26 15:11:26.000 UTC |
| **Closed** | 2025-12-26 15:11:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
 I was working on rollback strategies for the workflow after bad deployment. 
One of the strategy is:

```php
  if(Workflow::getInfo()->binaryChecksum === "checksum" || Workflow::now() < $deploymentDateTime) {
            // handle workflow code which are failing here
            
     } else {
            // changes for new workflow
    }
```

I would like this checksum to be associated with the worker. So whenever a worker is deployed, I would like to set its checksum to with the current git ref/commit. The way to do it is:  `worker.SetBinaryChecksum("commit-hash") `. But I could not find anything with the current implementation of the worker to set its checksum. It would be a handy tool for rolling back deployments.

### Describe the solution you'd like
I want to be to set the binary checksum with the worker using the SetBinaryChecksum method which is currently not present.



#### Comments (2)

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:15:06.000 UTC</summary>

Hey @manishrocksag 👋🏻 
I guess you're looking for the Workflow Versioning: https://legacy-documentation-sdks.temporal.io/php/versioning, am I right?

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 15:11:26.000 UTC</summary>

Workflow Versioning perfectly solve this case. It's more preferable way.

</details>


---

<a id="246"></a>

### #246: Serialization don't support nullable array type

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/246 |
| **State** | CLOSED |
| **Author** | roquie (Maks) |
| **Created** | 2022-09-23 10:36:16.000 UTC (3y 3m ago) |
| **Updated** | 2022-12-14 19:52:59.000 UTC |
| **Closed** | 2022-12-14 19:52:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Pass a DTO object as argument to method in activity/workflow.

### Describe the bug

When developer using class as DTO with public properties to pass values to workflow with property type `?array` it got an error:

```
InvalidArgumentException: Passed value must be a type of array, but null given in /backend/vendor/temporal/sdk/src/Internal/Marshaller/Type/ArrayType.php:64\nStack trace:\n#0 /backend/vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php(195): Temporal\\Internal\\Marshaller\\Type\\ArrayType->parse(NULL, NULL)
```

### Minimal Reproduction

1. Create a DTO class like this: 
```php
class DTO {
  public function __construct(
     public readonly ?array $foos
  ) {}
}
```
2. Create a workflow class with method `handle` and agruments like `handle(DTO $test)` 
3. Run

### Environment/Versions

- OS and processor: M1 Mac and Mac without M1
- Temporal Version: latest `1.*` and latest `2.*`
- Are you using Docker or Kubernetes or building Temporal from source?: Docker


#### Comments (2)

<details>
<summary><strong>roquie</strong> commented on 2022-09-23 10:37:20.000 UTC</summary>

https://github.com/temporalio/sdk-php/pull/245

</details>

<details>
<summary><strong>rustatian</strong> commented on 2022-12-14 19:52:59.000 UTC</summary>

Closed since #245 was merged.

</details>


---

<a id="228"></a>

### #228: High level API for schedules

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/228 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:38:47.000 UTC (3y 5m ago) |
| **Updated** | 2023-11-30 10:30:14.000 UTC |
| **Closed** | 2023-11-30 10:30:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.7.0 |

#### Description

EDIT:

More detais here: https://docs.temporal.io/dev-guide/go/features#schedule-a-workflow

#### Comments (2)

<details>
<summary><strong>VadymBerezdetskyi</strong> commented on 2023-05-16 11:15:20.000 UTC</summary>

Hi! Is there any updates on this issue?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-05-16 16:57:11.000 UTC</summary>

Hello. There are no updates.

</details>


---

<a id="226"></a>

### #226: OTEL tracing support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/226 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:25:21.000 UTC (3y 5m ago) |
| **Updated** | 2025-12-26 15:06:51.000 UTC |
| **Closed** | 2025-12-26 15:06:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Feature |
| **Assignees** | roxblnfk, msmakouz |
| **Milestone** | None |

#### Description

See other SDKs for reference, built on top of interceptors

EDIT:
- We have to finish this PR: https://github.com/temporalio/sdk-php/pull/313

#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:49:13.000 UTC</summary>

Pending 2.7 release.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-11 13:54:32.000 UTC</summary>

The functionality will be provided in a separate [repository](https://github.com/temporalio/sdk-php-interceptors-opentelemetry).

</details>


---

<a id="220"></a>

### #220: Send sdk-name and sdk-version headers from worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/220 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 16:23:39.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-22 08:17:42.000 UTC |
| **Closed** | 2022-08-22 08:17:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2022-08-03 16:25:23.000 UTC</summary>

The client already does this, needs to be implemented in the worker too.
Possible implementation is to use gRPC interceptors to override the headers sent by the Go SDK.

</details>

<details>
<summary><strong>dpodoliak</strong> commented on 2022-08-22 08:17:42.000 UTC</summary>

Duplicated in https://github.com/roadrunner-server/roadrunner/issues/1249 

</details>


---

<a id="178"></a>

### #178: [Question] Kubernetes pod scaling

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/178 |
| **State** | CLOSED |
| **Author** | corelix (Dmytro Pylypenko) |
| **Created** | 2022-05-26 18:14:13.000 UTC (3y 7m ago) |
| **Updated** | 2022-05-26 18:31:26.000 UTC |
| **Closed** | 2022-05-26 18:31:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I did not find in the documentation how to properly scale pods with workers in kubernetes.
I want to scale workers in several different AWS zones. But the road runner has an internal process orchestration and is not suitable for such purposes.
Is it possible to scale pods? And will this cause a problem?

#### Comments (2)

<details>
<summary><strong>rustatian</strong> commented on 2022-05-26 18:28:05.000 UTC</summary>

Hey @dmitry-pilipenko 👋🏻. 
> But the road runner has an internal process orchestration and is not suitable for such purposes.

RoadRunner works fine for such type of scaling. It's just an application, it doesn't scale (up or down) the PHP processes, and they are constant. Having this in mind, you may easily scale your pods with the RR inside.
You may use temporal and/or RR metrics to scale your cluster. For example: `queue_size` which indicates how many requests are waiting for the worker, or temporal metrics: https://docs.temporal.io/operation/how-to-tune-workers/

</details>

<details>
<summary><strong>corelix</strong> commented on 2022-05-26 18:31:26.000 UTC</summary>

@rustatian thank you! 

Reactions: 👍 1

</details>


---

<a id="141"></a>

### #141: [Bug] Cannot decode value using Protobuf converter when fetching previous workflow result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/141 |
| **State** | CLOSED |
| **Author** | benkelukas (Lukas Benke) |
| **Created** | 2022-02-07 07:29:52.000 UTC (3y 11m ago) |
| **Updated** | 2022-02-09 08:21:48.000 UTC |
| **Closed** | 2022-02-09 08:21:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

When using CRON scheduled workflow and returning a protobuf message from said workflow, the message cannot be parsed when trying to fetch previous workflow result via `Workflow::getLastCompletionResult()`

### Describe the bug

1. Create a CRON scheduled workflow
2. Return a protobuf message from workflow as it's result
3. Fetch last completion result using `Workflow::getLastCompletionResult()`
4. There is an error:

```json
{
  "message": "Unable to decode value using protobuf converter - ",
  "source": "PHP_SDK",
  "stackTrace": "Temporal\\Exception\\DataConverterException: Unable to decode value using protobuf converter -  in /app/vendor/temporal/sdk/src/DataConverter/ProtoJsonConverter.php:50\nStack trace:\n#0 /app/vendor/temporal/sdk/src/DataConverter/DataConverter.php(53)... [omitted for brewity]
  "cause": null,
  "applicationFailureInfo": {
    "type": "Temporal\\Exception\\DataConverterException",
    "nonRetryable": false,
    "details": null
  },
  "failureInfo": "applicationFailureInfo"
}
```

### Minimal Reproduction

[https://github.com/benkelukas/samples-php/commit/620139f033bc68ae97db1b92bf65b6d4397c08d9](https://github.com/benkelukas/samples-php/commit/620139f033bc68ae97db1b92bf65b6d4397c08d9)

SimpleActivity is modified to use CRON schedules.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Intel MacOS, Catalina
- Temporal Version: 1.14.4, PHP SDK 1.1.1
- Docker setup

### Additional context

[Slack thread](https://temporalio.slack.com/archives/C01LK9FAMM0/p1643973542928279)


#### Comments (2)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-02-08 20:34:27.000 UTC</summary>

@benkelukas I have investigated the problem. Try to do the following:
1. In your `WorkflowInterface` add explicit attribute for the return type:

```php
interface GreetingWorkflowInterface
{
    /**
     * @param string $name
     * @return WorkflowResult
     */
    #[WorkflowMethod(name: "SimpleActivity.greet")]
    #[ReturnType(WorkflowResult::class)]
    public function greet(string $name);
}
```
2. In the command don't forget that the result object is now `WorkflowResult`. Don't try to print it, and use on of the getters:
```php
$output->writeln(sprintf("Result:\n<info>%s</info>", $run->getResult()->getGreeting()));
```

Hope, it will help you. Waiting for you feedback.

Reactions: 👍 1

</details>

<details>
<summary><strong>benkelukas</strong> commented on 2022-02-09 08:21:47.000 UTC</summary>

Hi @seregazhuk 

thanks a lot for taking a look at this, it works! :)

I suppose I could've tried this by myself, however, there is the `ExpectedType` attribute on the `ReturnType` attribute's type argument, so I kinda supposed (wrongly) that this is not possible.

Maybe it would be also good to update docs to mention that one can, in fact, use PHP protobuf messages and what to do when one wants to use it for Workflow return types, as I think it's a pretty good way how to structure data passing between activities / worfklows - but I understand that not everybody wants to go through the hassle of generating PHP code from `.proto` files - not sure if it is in scope for the docs.

There remains one little caveat for me: PHPStorm complains that I've provided unexpected type to the `ReturnType` annotation, it's nothing serious and I can disable inspections for statement, but maybe the attribute could be expanded to allow custom types somehow?

Thanks again for taking the time to help me, You guys rock! :)

I'm closing the issue, cheers!

</details>


---

<a id="122"></a>

### #122: [Bug] After countinueAsNew awaitWithTimeout doesn't check for condition

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/122 |
| **State** | CLOSED |
| **Author** | mixadior (Diordienko Mykhail) |
| **Created** | 2021-08-18 17:38:55.000 UTC (4y 4m ago) |
| **Updated** | 2021-12-08 11:13:42.000 UTC |
| **Closed** | 2021-12-08 11:13:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug, Question |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### Describe the bug

my workflow waits for some condition via yield Workflow::awaitWithTimeout , but after workflow "restart" via continueAsNewStub seems that condition never goes to true. Let me provide an example code. 

### To Reproduce

basic code used from https://github.com/wolfy-j/temporal-workshop

```php

<?php

namespace Workshop\App\Test;

use Temporal\Activity\ActivityOptions;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowMethod;

class Test2Workflow implements Test2WorkflowInterface {

    private $photosBySourceEstateToProcess = [];
    private $photosProcessActivity;

    public function __construct()
    {
        $this->photosProcessActivity = Workflow::newActivityStub(
            TestActivity::class,
            ActivityOptions::new()->withStartToCloseTimeout(\DateInterval::createFromDateString('30 seconds'))
        );
    }


    public function run(array $initialPhotosToProcess = [])
    {
        if ($initialPhotosToProcess) {
            $this->photosBySourceEstateToProcess = $initialPhotosToProcess;
        }

        file_put_contents("php://stderr","startttt ".count($this->photosBySourceEstateToProcess));

        yield Workflow::awaitWithTimeout(300, fn()=> (count($this->photosBySourceEstateToProcess) > 10) || (count($initialPhotosToProcess) > 10));
        $photosToProcess = array_splice($this->photosBySourceEstateToProcess, 0, 10);

        foreach ($photosToProcess as $processData) {
            $processData = (array) $processData;
            yield $this->photosProcessActivity->loadSePhotos($processData['id'], $processData['photos'], $processData['withPage']);
        }

        return Workflow::newContinueAsNewStub(self::class)->run( $this->photosBySourceEstateToProcess);
    }
    #[Workflow\SignalMethod]
    public function setSourceEstatePhotos(int $sourceEstateId, $photos = [], $withPage = false)
    {
        $this->photosBySourceEstateToProcess[] = ['id' => $sourceEstateId, 'photos' => $photos, 'withPage' => $withPage];
    }

    #[Workflow\QueryMethod]
    public function getSourceEstatePhotos(): array
    {
        return $this->photosBySourceEstateToProcess;
    }
}

```

activity code

```php

<?php

namespace Workshop\App\Test;

class TestActivity implements TestActivityInterface {

    public function hello(string $name): string
    {
        return sprintf("Hello, %s", $name);
    }

    public function loadSePhotos(int $sourceEstateId, array $photos, bool $withPage): string
    {
        $rayId = uniqid("v");
        file_put_contents("php://stderr", sprintf("%s, Working on.Load se #%d photos. Photos: %s", $rayId, $sourceEstateId, join(",", $photos)));
        sleep(1);
        file_put_contents("php://stderr", sprintf("%s, done", $rayId));
        return "yes";
    }
}

```

command used to start workflow:

```php

<?php

namespace Workshop\App\Test;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Workshop\Util\Command;

class Test4Command extends Command {
    protected const NAME = 'run_source_photos';

    public function execute(InputInterface $input, OutputInterface $output)
    {
        try {
            $workflow = $this->workflowClient->newWorkflowStub(Test2Workflow::class);
            $d = $this->workflowClient->start($workflow);


            $output->writeln(sprintf("Id: %s", $d->getExecution()->getID()));
        } catch (\Throwable $ex) {
            $output->writeln($ex->getTraceAsString());
        }
        return 0;
    }
}

```

command used to send signals:

```php

<?php

namespace Workshop\App\Test;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Workshop\Util\Command;

class Test3Command extends Command {
    protected const NAME = 'push_photos';
    protected const ARGUMENTS = [
        ['name' => 'wfId']
    ];

    public function execute(InputInterface $input, OutputInterface $output)
    {
        try {
            $wf = $this->workflowClient->newRunningWorkflowStub(Test2Workflow::class, $input->getArgument('wfId'));

            for ($i = 0;$i < 30;$i++) {
                $wf->setSourceEstatePhotos($i, ["1.jpg", "2.jpg", "3.jpg"]);
            }

        } catch (\Throwable $ex) {
            $output->writeln($ex->getMessage());
            $output->writeln($ex->getTraceAsString());
        }
        return 0;
    }
}

```

so first i execute

```sh

php ./app.php run_source_photos

```

get an workflow id and run 

```sh

php ./app.php push_photos %workflow_id%

```

### Expected behavior

that right after processing of first 10 elements and workflow restart it will start next workflow and `yield Workflow::awaitWithTimeout` wouldn't wait for timeout, because condition will return true. 

### Screenshots/Terminal output

![](http://feodosian.com/public/mc_mixadiorMacBook-Pro-3.localVolumesWorkspaceprojectstemporal-workshop_2021-08-18_20-34-12.png)

### Versions

<!-- Please complete the following information where relevant. -->

- OS: Linux (docker)
- Temporal Version: 1.9.0
- docker-compose - https://github.com/temporalio/docker-compose

### Additional context

.rr.yaml

```yaml

rpc:
  listen: tcp://127.0.0.1:6001

server:
  command: "php worker.php"
  env:
    XDEBUG_SESSION: 1
    XDEBUG_CONFIG: idekey=PHPSTORM
    PHP_IDE_CONFIG: serverName=temporalphp
    

logs:
  level: info
  channels:
    informer.mode: none

temporal:
  address: host.docker.internal:7233
  activities:
    debug: false
    num_workers: 8

http:
  address: 127.0.0.1:8080
  pool:
    num_workers: 8


```


#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-09-06 17:43:00.000 UTC</summary>

That you for the report. Added to the pipeline.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-12-08 11:13:35.000 UTC</summary>

This issue has been addressed in 1.0.5

</details>


---

<a id="121"></a>

### #121: [Question] activity_schedule_to_start_latency metrics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/121 |
| **State** | CLOSED |
| **Author** | shineirvin |
| **Created** | 2021-07-23 04:47:09.000 UTC (4y 5m ago) |
| **Updated** | 2023-07-11 12:50:34.000 UTC |
| **Closed** | 2023-07-11 12:50:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi, I can't activity_task_schedule_to_start_latency metrics on php-sdk. Is it not implemented yet ?
I heard the php-sdk is built on top of Go one. So it should be there. Could you please reference me ?

I expect this [metrics](https://github.com/temporalio/sdk-go/blob/master/internal/common/metrics/constants.go) exist in this php-sdk.

#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-19 16:21:54.000 UTC</summary>

Can you clarify if you mean having metrics in general or you are talking that from the metrics that RR provides this particular missed?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:50:34.000 UTC</summary>

Closing due to inactivity.

</details>


---

<a id="116"></a>

### #116: [Bug] Wrong exception trace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/116 |
| **State** | CLOSED |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2021-07-03 18:34:10.000 UTC (4y 6m ago) |
| **Updated** | 2023-09-01 12:12:34.000 UTC |
| **Closed** | 2023-09-01 12:12:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

I'm trying to run Temporal with Symfony application and have problem with error tracing.

1. I'm trying to run non-existent activity method (it exists, but report isn't about that)

I expect to see line in **workflow** where it calls, but I get error on **call workflow method** line and some vendor artefacts. See image

![image](https://user-images.githubusercontent.com/6815714/124363122-22849a80-dc42-11eb-80d0-cdfb79ab2952.png)

---

When I'm trying to roll the same behaviour from code similar to [workshop](https://github.com/wolfy-j/temporal-workshop) I get the following stacktrace:

![image](https://user-images.githubusercontent.com/6815714/124363238-d128db00-dc42-11eb-91b5-1363593abced.png)
As you see `sdk` catches needed lines into stacktrace.

Similar situation when I dump exception directly in `\Temporal\Internal\Client\WorkflowStub::mapWorkflowFailureToException`
![image](https://user-images.githubusercontent.com/6815714/124363319-3086eb00-dc43-11eb-9149-2fda7258b907.png)

---

But as you can see in previous screenshot it's placed in `originalStackTrace` property.
Property `trace` doesn't contain that information so it's displays wrong.

Is it expected behaviour? Would be good to see "original stack trace" in usual "trace" property.

#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-04 10:05:35.000 UTC</summary>

Hi, unfortunately, it is not possible to overwrite the PHP exception trace as it possible in Java. So the only option (from our perspective) was to include it into the originalStackTrace. 

Ideally, we need to train exception renderers (or for example Sentry) to understand such types of exceptions and display them. This is partially important when an exception comes from another stack, you can't render something which is not within your codebase.

So this is an excepted behavior but ideally, we need some sugar to make it easier to read.

</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 12:12:22.000 UTC</summary>

Closing as answered

</details>


---

<a id="112"></a>

### #112: [Question] Arrays not allowed as a return type?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/112 |
| **State** | CLOSED |
| **Author** | Zylius (Zigmas Satkevičius) |
| **Created** | 2021-05-26 12:56:43.000 UTC (4y 7m ago) |
| **Updated** | 2021-05-26 16:36:17.000 UTC |
| **Closed** | 2021-05-26 16:36:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello once again, I wanted to ask about [this](https://github.com/temporalio/sdk-php/blob/f53f1627f63fca73bd0e533831a8104bacd44309/src/DataConverter/Type.php#L104) line.

I was curious why is that. I'm sure there's a specific reason for it. I could still wrap it in a simple container object.
An example:

```php
#[ActivityInterface]
class WorkflowConfigActivity
{
    #[ActivityMethod]
    public function getTransactionConfigs(): array // Doesn't work
    {
        return ['my_config' => 'best_config'];
    }
}
```

#### Comments (2)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-05-26 13:21:05.000 UTC</summary>

@Zylius hello! The reason is simple: Any iterator is generic, i.e. a composite type.

It is impossible to write in PHP:
```php
public function getTransactionConfigs(): array<string, string>
{
    // ...
}
```

In your case, there are two restrictions at the same time:
1) The absence of the concept of a hash map in JSON (There are only objects)
2) Inability to deduce an unambiguous type from return typehint.

In summary: Recommended to use DTOs to transfer composite data between code.
Similar question: https://github.com/temporalio/sdk-php/issues/93

Reactions: 👍 1

</details>

<details>
<summary><strong>Zylius</strong> commented on 2021-05-26 16:36:16.000 UTC</summary>

Ahh gotya! Closing this ;) Thanks.

</details>


---

<a id="109"></a>

### #109: [Question] When waiting for signal, is there a way to specify a timeout settings ?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/109 |
| **State** | CLOSED |
| **Author** | changwuf31 (Jhon Wang) |
| **Created** | 2021-05-11 07:30:16.000 UTC (4y 8m ago) |
| **Updated** | 2021-06-25 16:01:40.000 UTC |
| **Closed** | 2021-06-25 16:01:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Is this possible with php ?

Many thanks,

Jhon 

#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-05-11 09:39:55.000 UTC</summary>

Hi, try to use awaitWithTimeout or use await with signal and custom timer.

Reactions: 👍 1

</details>

<details>
<summary><strong>changwuf31</strong> commented on 2021-05-12 04:32:21.000 UTC</summary>

Thank u, never know there is an awaitWithTimeout function

</details>


---

<a id="104"></a>

### #104: [Bug] Namespace not being propagated into ChildWorflowOptions, but probably should be (according to comments)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/104 |
| **State** | CLOSED |
| **Author** | Rastusik (Martin Fris) |
| **Created** | 2021-04-22 11:42:30.000 UTC (4y 8m ago) |
| **Updated** | 2024-04-10 13:23:23.000 UTC |
| **Closed** | 2024-04-10 13:23:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.0 |

#### Description

**Describe the bug**
I have a parent workflow which creates some child workflows. When using custom namespace (registered properly in the workflow client) it isn't being propagated to the child worflows (or child workflow options), but it seems like it should be propagated according to this comment: https://github.com/temporalio/sdk-php/blob/master/src/Workflow/ChildWorkflowOptions.php#L44

```
/**
     * Namespace of the child workflow.
     *
     * Optional: the current workflow (parent)'s namespace will be used if this
     * is not provided.
     */
    #[Marshal(name: 'Namespace')]
    public string $namespace = ClientOptions::DEFAULT_NAMESPACE;
```

It also might be the case that I'm doing something wrong in my parent worflow.

**To Reproduce**

My broken parent workflow looked like this:
```php
final class DefaultForkingWorkflow implements ForkingWorkflow
{
    public function fork(Event $event, HandlerDefinitions $definitions)
    {
        $promise = Workflow::async(static function () use ($event, $definitions) {
            $promises = [];

            foreach ($definitions as $definition) {
                $options = ChildWorkflowOptions::new()
                    ->withParentClosePolicy(ParentClosePolicy::POLICY_ABANDON)
                    ->withSearchAttributes([
                        SearchAttributes::ATTR_EVENT_ID => $event->getMetadata(Id::class)->toString(),
                        SearchAttributes::ATTR_HANDLER_ID => $definition->getServiceId(),
                        SearchAttributes::ATTR_HANDLER_METHOD => $definition->getHandlerMethod(),
                    ]);
                $handlerWorkflow = Workflow::newChildWorkflowStub(
                    HandlerWorkflow::class,
                    $options
                );

                $promises[] = Workflow::asyncDetached(
                    static fn () => yield $handlerWorkflow->handle($event, $definition)
                );
            }

            return yield Promise::all($promises);
        });

        try {
            yield $promise;
        } catch (TemporalException $e) {
            //$logger->error('child workflow failed');
            throw $e;
        }
    }
}
```

With this, temporal was logging this error: `Unable to schedule child execution across namespace default.` The error is correct because I changed the default namespace.

To make it work properly, I needed to propagate the namespace name from outside:

```php
final class DefaultForkingWorkflow implements ForkingWorkflow
{
    public function fork(Event $event, HandlerDefinitions $definitions, string $namespace)
    {
        $promise = Workflow::async(static function () use ($event, $definitions, $namespace) {
            $promises = [];

            foreach ($definitions as $definition) {
                $options = ChildWorkflowOptions::new()
                    ->withParentClosePolicy(ParentClosePolicy::POLICY_ABANDON)
                    ->withNamespace($namespace)
                    ->withSearchAttributes([
                        SearchAttributes::ATTR_EVENT_ID => $event->getMetadata(Id::class)->toString(),
                        SearchAttributes::ATTR_HANDLER_ID => $definition->getServiceId(),
                        SearchAttributes::ATTR_HANDLER_METHOD => $definition->getHandlerMethod(),
                    ]);
                $handlerWorkflow = Workflow::newChildWorkflowStub(
                    HandlerWorkflow::class,
                    $options
                );

                $promises[] = Workflow::asyncDetached(
                    static fn () => yield $handlerWorkflow->handle($event, $definition)
                );
            }

            return yield Promise::all($promises);
        });

        try {
            yield $promise;
        } catch (TemporalException $e) {
            //$logger->error('child workflow failed');
            throw $e;
        }
    }
}
```

**Expected behavior**
I think there should be no explicit namespace propagation (at least according to the docblock comment in the ChildWorkflowOptions class).

**Versions (please complete the following information where relevant):**
 - OS: Linux in Docker for mac
 - Temporal Version:  1.8.2
 - are you using Docker or Kubernetes or building Temporal from source? - nope, only when I need to dig for errors



#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-26 09:53:39.000 UTC</summary>

@SerafimArts can you check the behavior against the Java SDK? We do transfer the **TaskQueue** but not the namespace at the moment.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-03-28 15:37:33.000 UTC</summary>

The fix for this issue needs to be revised.
The Namespace should be inherited even when the user has specified options for a ChildWorkflow that don't include a custom Namespace value.

Currently, to comfortably work with a custom namespace (such with Temporal Cloud), we must use an interceptor as follows:


```php
class SetNamespaceInterceptor implements WorkflowOutboundRequestInterceptor
{
    public function handleOutboundRequest(RequestInterface $request, callable $next): PromiseInterface
    {
        (function () {
            /** @var Request $this */
            if (isset($this->options['options']['Namespace'])) {
                $this->options['options']['Namespace'] = Workflow::getInfo()->namespace;
            }
        })->call($request);

        return $next($request);
    }
}
```

</details>


---

<a id="94"></a>

### #94: Integration issue with Laravel

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/94 |
| **State** | CLOSED |
| **Author** | tank-pooja |
| **Created** | 2021-04-01 10:37:09.000 UTC (4y 9m ago) |
| **Updated** | 2021-04-02 04:53:01.000 UTC |
| **Closed** | 2021-04-02 04:53:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi,
 I am trying to integrate temporal with Laravel 8.x, but not able to access Laravel facades inside the workflow or activity, exception is thrown from laravel
` RuntimeException: A facade root has not been set.`

#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-01 14:16:52.000 UTC</summary>

I would recommend starting working inside laravel command, where facade context is already set. However, I’d like to also recommend avoid using facades in Workflows, they might break the determinism of that code. Feel free to use them in Activities.

</details>

<details>
<summary><strong>tank-pooja</strong> commented on 2021-04-02 04:53:01.000 UTC</summary>

Thanks @wolfy-j , it's working now.

</details>


---

<a id="5"></a>

### #5: example project not invoking activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/5 |
| **State** | CLOSED |
| **Author** | ashish-s |
| **Created** | 2020-10-06 16:40:04.000 UTC (5y 3m ago) |
| **Updated** | 2021-02-03 15:42:12.000 UTC |
| **Closed** | 2021-02-03 15:42:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

hello,
I was trying to make the example project work for a small experiment, but  wasnt able to get the activity invoked.  I can explicitly see that the StartActivity is not implemented yet, is there a development version of this codebase where it is working ?

#### Comments (2)

<details>
<summary><strong>SerafimArts</strong> commented on 2020-10-06 18:03:01.000 UTC</summary>

Hello! This SDK is under development. We will announce separately as soon as there is a working version with working examples ready for testing.

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-02-01 20:41:01.000 UTC</summary>

Hi, you can find working samples and instruction here: https://github.com/temporalio/samples-php

</details>


---

<a id="689"></a>

### #689: [Bug] Temporal PHP SDK doing its own extension check, breaking composer's `--ignore-platform-reqs`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/689 |
| **State** | OPEN |
| **Author** | adepretis (Andreas de Pretis) |
| **Created** | 2026-01-07 12:19:49.000 UTC (2 days ago) |
| **Updated** | 2026-01-07 13:14:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Installing the Temporal PHP SDK using composer with `--ignore-platform-reqs`.

### Describe the bug

The Temporal PHP SDK does not adhere to common practices for composer installations and is checking `grpc` availability in the code.

There are plenty of use-cases to run `composer install --ignore-platform-reqs` which allows installing composer packages without checking for e.g. installed PHP extensions.

A PHP package would typically define its platform requirements in `composer.json`. Temporal does that too for the correct PHP version and PHP's `curl` and `json` extension.

```
    "require": {
        "php": ">=8.1",
        "ext-curl": "*",
        "ext-json": "*",
```

What is missing here though is

```
    "require": {
        "php": ">=8.1",
        "ext-curl": "*",
        "ext-json": "*",
        "ext-grpc": "*",
```

Instead the `grpc` availability is check in https://github.com/temporalio/sdk-php/blob/master/src/Client/GRPC/BaseClient.php#L99-L101.

Normally this is not an issue, but in case of [Laravel's package discovery](https://greasy.dev/en/blog/laravel-package-auto-discovery-explained) the PHP code seems to be executed and fails - wether `--ignore-platform-reqs` is given or not.

```
   RuntimeException

  The gRPC extension is required to use Temporal Client.

  at vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:72
     68▕      */
     69▕     public static function create(string $address): static
     70▕     {
     71▕         if (!\extension_loaded('grpc')) {
  ➜  72▕             throw new \RuntimeException('The gRPC extension is required to use Temporal Client.');
     73▕         }
     74▕
     75▕         return new static(static fn(): WorkflowServiceClient => new WorkflowServiceClient(
     76▕             $address,
```

Also, for some reason, adding `temporal/sdk` to `composer.json` doesn't help either:

```
      "extra": {
          "laravel": {
              "dont-discover": ["temporal/sdk"]
          }
      },
```

### Minimal Reproduction

- create a Laravel project
- if not created by Laravel bootstrapping add the following to `composer.json`

```
    "scripts": {
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
```

- run `composer install --ignore-platform-reqs` with no `grpc` extension installed


### Environment/Versions

- Temporal SDK version: 2.16.0


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2026-01-07 13:14:34.000 UTC</summary>

Related issue: https://github.com/temporalio/sdk-php/issues/394

</details>


---

<a id="659"></a>

### #659: Bug Report: Class "Grpc\ChannelCredentials" not found in Laravel/Artisan Context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/659 |
| **State** | CLOSED |
| **Author** | designbyjr |
| **Created** | 2025-10-12 13:58:58.000 UTC (2 months ago) |
| **Updated** | 2025-10-13 07:01:11.000 UTC |
| **Closed** | 2025-10-13 06:59:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

# Bug Report: `Class "Grpc\ChannelCredentials" not found` in Laravel/Artisan Context

### What are you really trying to do?

I'm integrating Laravel with Temporal workflows using the `keepsuit/laravel-temporal` package. The goal is to execute Temporal workflows from Laravel Artisan commands, specifically testing the connection between Laravel and a Temporal Docker container setup.

### Describe the bug

The `Grpc\ChannelCredentials` class is not found when accessing Temporal SDK through Laravel Artisan commands, despite the gRPC PHP extension being properly loaded and the class being accessible in direct PHP CLI contexts.

**Error Message:**
```
Class "Grpc\ChannelCredentials" not found
File: /vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:74
```

**Key Observations:**
- ✅ gRPC extension loads correctly in PHP CLI: `phpversion('grpc')` returns `1.75.0`
- ✅ `class_exists('Grpc\ChannelCredentials')` returns `true` in direct PHP scripts
- ✅ Direct PHP scripts can successfully create Temporal clients and connect to Temporal server
- ❌ Laravel Artisan commands fail with "ChannelCredentials not found" error
- ❌ Issue persists even with `php -d auto_prepend_file= artisan` approach

**Code causing the issue (BaseClient.php:74):**
```php
['credentials' => \Grpc\ChannelCredentials::createInsecure()],
```

### Minimal Reproduction

**Working Direct PHP Script:**
```php
<?php
require_once 'vendor/autoload.php';
use Temporal\Client\GRPC\ServiceClient;
use Temporal\Client\WorkflowClient;

// This works perfectly
$client = WorkflowClient::create(ServiceClient::create('localhost:7233'));
echo "Success: Temporal client created\n";
```

**Failing Laravel Artisan Command:**
```php
<?php
// In a Laravel Artisan command
use Temporal\Client\WorkflowClientInterface;

public function handle() {
    $client = app(WorkflowClientInterface::class); // Fails with ChannelCredentials error
}
```

**Test Environment Setup:**
- Temporal Server: Docker container on `localhost:7233` 
- Laravel: v12.x with `keepsuit/laravel-temporal: ^2.1`
- MAMP Pro with PHP 8.3.0

### Environment/Versions

- **OS and processor:** M2 Mac (macOS) 15.6.1 (24G90)
- **Temporal Server Version:** 1.29.0 (Docker: `temporalio/auto-setup:1.29.0`)
- **Temporal SDK Version:** 2.15.1 (via `keepsuit/laravel-temporal: 2.1.3`)
- **PHP Version:** 8.3.0 (MAMP Pro)
- **gRPC Extension:** 1.75.0
- **gRPC Composer Package:** 1.74.0
- **Using Docker:** Yes, Temporal server runs in Docker containers
- **Laravel Framework:** 12.x with Laravel Octane (FrankenPHP)

### Additional context

**Key Findings:**
1. **Version Mismatch:** gRPC PHP extension (1.75.0) vs Composer package (1.74.0), though compatibility tests pass
2. **Context Sensitivity:** The issue only occurs within Laravel/Artisan context, not direct PHP CLI
3. **Autoloading:** Issue persists even when bypassing Laravel's auto_prepend_file
4. **Extension Verification:** `extension_loaded('grpc')` and `get_declared_classes()` show gRPC is properly loaded
5. **Laravel Integration:** Using `keepsuit/laravel-temporal` which has dependency constraint `temporal/sdk ~2.15.0`

**Environment Details:**
```bash
# gRPC Extension Info
php -r "echo phpversion('grpc');"  # 1.75.0
php -r "var_dump(class_exists('Grpc\\ChannelCredentials'));"  # bool(true)

# Composer Dependencies
composer show temporal/sdk | grep versions    # 2.15.1
composer show grpc/grpc | grep versions       # 1.74.0
composer show keepsuit/laravel-temporal       # 2.1.3
```

**Hypothesis:** 
There appears to be a namespace or autoloading conflict between Laravel's service container resolution and the gRPC extension's class registration, potentially related to how Laravel Octane/RoadRunner manages persistent processes and class loading.

**Workaround Attempted:**
Using `php -d auto_prepend_file= artisan` to bypass Laravel's bootstrapping still results in the same error, suggesting the issue is deeper in the Laravel service container or autoloader interaction.

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-10-13 06:59:11.000 UTC</summary>

Hi! Since the SDK works fine in vanilla PHP and other bridges, this looks like a keepsuit/laravel-temporal bridge issue. Please open it at `keepsuit/laravel-temporal` instead.

Of course, if the bridge maintainers confirm it's actually an SDK problem, don't hesitate to reopen this issue. Thanks!


</details>


---

<a id="654"></a>

### #654: [Bug] upsertTypedSearchAttributes in test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/654 |
| **State** | OPEN |
| **Author** | Norbytus (Alexsander) |
| **Created** | 2025-09-18 11:51:41.000 UTC (3 months ago) |
| **Updated** | 2025-09-23 19:24:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying upsert search attribute inside workflow

### Describe the bug

Create workflow with and call Workflow::upsertTypedSearchAttributes inside workflow

### Minimal Reproduction
For example i take test from https://github.com/wolfy-j/temporal-simple-test-example
```php
<?php

declare(strict_types=1);

namespace App\Workflow;

use App\Activity\GreetingActivityInterface;
use App\Activity\VoidActivityInterface;
use Carbon\CarbonInterval;
use Temporal\Activity\ActivityOptions;
use Temporal\Common\SearchAttributes\SearchAttributeKey;
use Temporal\Workflow;

class GreetingWorkflow implements GreetingWorkflowInterface
{
    private $greetingActivity;

    public function __construct()
    {
        /**
         * Activity stub implements activity interface and proxies calls to it to Temporal activity
         * invocations. Because activities are reentrant, only a single stub can be used for multiple
         * activity invocations.
         */
        $this->greetingActivity = Workflow::newActivityStub(
            GreetingActivityInterface::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(CarbonInterval::seconds(2))
                ->withTaskQueue('tests'),
        );

        $this->voidActivity = Workflow::newActivityStub(
            VoidActivityInterface::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(CarbonInterval::seconds(2))
                ->withTaskQueue('tests'),
        );
    }

    public function greet(string $name): \Generator
    {
        Workflow::upsertTypedSearchAttributes(
            SearchAttributeKey::forKeyword('CustomKeyword')->valueSet('CustomValue'),
        );

        return yield $this->greetingActivity->composeGreeting('Hello', $name);
    }
}
```
And run phpunit and test will failed with timeout

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-09-23 19:24:37.000 UTC</summary>

I'm not sure that search attributes are supported by the test server at all

</details>


---

<a id="603"></a>

### #603: [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/603 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 12:23:55.000 UTC (8 months ago) |
| **Updated** | 2025-09-23 20:08:05.000 UTC |
| **Closed** | 2025-09-23 20:08:05.000 UTC |
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
<summary><strong>Sushisource</strong> commented on 2025-09-23 20:08:05.000 UTC</summary>

We're not gonna do this. Too niche.

</details>


---

<a id="597"></a>

### #597: [Bug] Workflow::asyncDetached memory leak

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/597 |
| **State** | CLOSED |
| **Author** | KorDum (KorDum) |
| **Created** | 2025-04-14 06:53:21.000 UTC (9 months ago) |
| **Updated** | 2025-04-15 13:38:16.000 UTC |
| **Closed** | 2025-04-15 13:38:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I had a task: I needed to run a child workflow in abandon mode. If we talk about the real task, I had a workflow of order creation, at the end it was necessary to put on execution a child workflow with automatic order canceling after 30 minutes, if the order was not paid.

For this task I used `Workflow::asyncDetached`, information about which I indirectly got from [this](https://docs.temporal.io/develop/php/asynchronous-activity-completion) documentation page, plus I looked at the available methods in the API.

### Describe the bug

However, the use of this method has led to large memory leaks in applications processing workflow tasks. These memory leaks do not occur if `Workflow::newUntypedChildWorkflowStub(...)->start()` is used.

### Minimal Reproduction

https://github.com/KorDum/samples-php/tree/demo/app/src/Child

### Environment/Versions

- OS and processor: Linux
- Temporal SDK Version: 2.13.4
- RoadRunner: 2024.3.5

### Additional context

Discussion in the Russian-language thread was [here](https://discord.com/channels/538114875570913290/812248381983817730/threads/1341349286327091201).


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-04-14 19:54:11.000 UTC</summary>

I wrote a test workflow to reproduce the leak.

I discovered a memory leak in cases where `Workflow::asyncDetached` is used incorrectly: without a `yield` (`await`) construction. In this case, along with action start requests from the detached scope, RoadRunner receives information that the Workflow has completed. RoadRunner sends a DestroyWorkflow command, but the requests to start actions remain in PHP memory without responses and are not cleaned up.

To permanently resolve the issue with hanging requests, I'm considering a solution where the Client instance, which stores the collection of requests, would be individual for each Workflow scope and destroyed along with it.

Reactions: 👍 1

</details>


---

<a id="596"></a>

### #596: [Bug] MarshallingRule marked as internal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/596 |
| **State** | CLOSED |
| **Author** | KorDum (KorDum) |
| **Created** | 2025-04-14 06:31:22.000 UTC (9 months ago) |
| **Updated** | 2025-10-29 07:55:01.000 UTC |
| **Closed** | 2025-10-29 07:55:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

### What are you really trying to do?

Trying to create my own types for marshalling.

### Describe the bug

I noticed that `MarshallingRule` is marked as internal, which does not allow using the `RuleFactoryInterface` when the corresponding rules of static analyzers are working in the project.

> Temporal\Internal\Marshaller\MarshallingRule is internal to Temporal but called from App\SomeType

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Temporal SDK Version: 2.13.4


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-10-29 07:54:59.000 UTC</summary>

Resolved in https://github.com/temporalio/sdk-php/pull/653

</details>


---

<a id="586"></a>

### #586: [Feature Request] Support New Worker Versioning API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/586 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-03-24 17:34:17.000 UTC (9 months ago) |
| **Updated** | 2025-09-25 07:06:36.000 UTC |
| **Closed** | 2025-09-25 07:06:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

### Is your feature request related to a problem? Please describe.

We need to add annotations to workflows to support the new versioning APIs. Refer to https://github.com/temporalio/features/issues/548 for the Go equivalents.

### Describe the solution you'd like

There are some designs for our other languages here: https://docs.google.com/document/d/1QGacjnlFwrfFtAvv9besx6sEdr36kJ3zQ9J7bGLRwk4/edit?usp=sharing

In PHP, I fully expect that we should use annotations like in the Python and .NET examples in that doc. Definitely ping me if there are any questions.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-08-18 14:57:22.000 UTC</summary>

Related with https://github.com/roadrunner-server/roadrunner/issues/2217

</details>


---

<a id="576"></a>

### #576: [Feature Request] Expose root workflow execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/576 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-25 14:19:17.000 UTC (10 months ago) |
| **Updated** | 2025-09-11 17:56:12.000 UTC |
| **Closed** | 2025-09-11 17:56:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/605 (unsure if needs to wait on https://github.com/temporalio/sdk-go/issues/1848)


#### Comments (1)

<details>
<summary><strong>rustatian</strong> commented on 2025-03-05 10:07:50.000 UTC</summary>

@cretz Yeah, we need to wait for the sdk-go release first.

Reactions: 👍 1

</details>


---

<a id="575"></a>

### #575: [Feature Request] Built-in query responses should use "RawValue"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/575 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:39:36.000 UTC (10 months ago) |
| **Updated** | 2025-05-05 17:09:17.000 UTC |
| **Closed** | 2025-05-05 17:09:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/604. When #574 is done, make sure built-in queries return a raw value

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-05-05 17:09:16.000 UTC</summary>

https://github.com/temporalio/sdk-php/issues/575 dupe

</details>


---

<a id="552"></a>

### #552: [Feature Request] Special behavior for Temporal built-in prefixes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/552 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:16:24.000 UTC (11 months ago) |
| **Updated** | 2025-07-02 07:49:03.000 UTC |
| **Closed** | 2025-07-02 07:49:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.15.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/576

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-02-10 13:50:41.000 UTC</summary>

Will be exposed in RR with GoSDK implementation

</details>


---

<a id="512"></a>

### #512: Show update handler and ID in logging context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/512 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-09-24 16:37:41.000 UTC (1y 3m ago) |
| **Updated** | 2024-12-28 12:51:52.000 UTC |
| **Closed** | 2024-12-28 12:51:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/466 for more details

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-18 14:36:54.000 UTC</summary>

We don't have a built-in logger in the SDK yet, but there is an example of a logger using interceptors, where the `UpdateID` and `UpdateName` are added to the logging context:
https://github.com/temporalio/samples-php/pull/62

</details>


---

<a id="462"></a>

### #462: Workflow-friendly concurrency control

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/462 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 17:14:12.000 UTC (1y 6m ago) |
| **Updated** | 2024-10-28 19:46:09.000 UTC |
| **Closed** | 2024-10-28 19:46:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.12.0 |

#### Description

We need a mechanism for concurrency control (mutex/semaphore) that fits with the language but is reentrant and deterministic within workflow coroutines.  To be used within signal and update handlers and the main workflow coroutine.

#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2024-08-05 17:16:21.000 UTC</summary>

I think we got the task, but is there any good sample we can wrap test around?

</details>


---

<a id="447"></a>

### #447: Provide a method to wait for handlers to finish

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/447 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-04 04:39:19.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-13 16:17:40.000 UTC |
| **Closed** | 2024-08-13 16:17:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

Users want to easily await (or ignore) all their remaining handlers when they continue as new or exit the workflow.  Since we can't tell what they want, they should specify.

#### Comments (1)

<details>
<summary><strong>drewhoskins-temporal</strong> commented on 2024-07-03 03:27:19.000 UTC</summary>

See https://github.com/temporalio/sdk-dotnet/issues/261#issuecomment-2196788048 for a template to pattern-match from.

</details>


---

<a id="436"></a>

### #436: Wrap GRPC::CANCELED and DEADLINE_EXCEEDED in an SDK Timeout exception for Update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/436 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-05-18 00:43:06.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-19 20:08:56.000 UTC |
| **Closed** | 2024-08-19 20:08:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

So that users only have to catch one predictable exception

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-05 20:01:36.000 UTC</summary>

See https://github.com/temporalio/features/issues/483#issuecomment-2150832036 for implementation details

</details>


---

<a id="426"></a>

### #426: [Feature Request] Make startUpdate users aware that it's synchronous w/ worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/426 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-04-25 01:50:40.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-21 18:20:54.000 UTC |
| **Closed** | 2024-05-21 18:20:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Documentation, enhancement |
| **Assignees** | None |
| **Milestone** | 2.10.0 |

#### Description

### Is your feature request related to a problem? Please describe.
See https://github.com/temporalio/features/issues/469

https://github.com/temporalio/sdk-php/blob/8cdcc1819be60e838d5e1f92b69f913aac61a58e/src/Client/WorkflowStubInterface.php#L106

wait stage is currently optional and the docstring implies it's async rather than sync
<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like


<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-13 19:36:05.000 UTC</summary>

With the release of 2.9.0, the method description was adjusted in such a way that the user would not be misled about the asynchronous operation of the method (https://github.com/temporalio/sdk-php/pull/429). 

> We decided to force customers to explicitly pass in a flag saying what’s being awaited. (e.g. start_update(wait_for_stage=ACCEPTED/COMPLETED)) and then if they don’t provide it.

However, changing the method signature will lead to a breaking change.
We can add a method like startUpdateAsync in the future when WaitPolicy support it.

</details>


---

<a id="420"></a>

### #420: Expose defaultConnection() method to switch between localhost and cloud based on env

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/420 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-04-12 23:54:42.000 UTC (1y 9m ago) |
| **Updated** | 2025-10-06 21:10:45.000 UTC |
| **Closed** | 2025-10-06 21:04:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Expose a defaultConnection() method or similar that switches between localhost (default) and cloud based on some environment variable, so that we can use it in the samples repos to allow people to easily run samples in the cloud. See: https://github.com/temporalio/features/issues/454



#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-14 13:18:50.000 UTC</summary>

We use `TEMPORAL_ADDRESS` env in our `temporal-bridge`

https://github.com/spiral/temporal-bridge/blob/38be446ffe9feae7ba26fe5d22876b7786fe08f7/src/Bootloader/TemporalBridgeBootloader.php#L124

</details>


---

<a id="413"></a>

### #413: [Feature Request] Expose API to describe a Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/413 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-04-09 12:04:55.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-09 19:47:06.000 UTC |
| **Closed** | 2024-04-09 19:47:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.0 |

#### Description

### Is your feature request related to a problem? Please describe.

Users sometimes ask, "how to get the status of a running Workflow."
Currently, there is no direct way to do this via PHP SDK.

### Describe the solution you'd like

Add `describe()` method into a workflow handle like in other SDKs.

Typescript:
https://github.com/temporalio/sdk-typescript/blob/c92a2a13072a48f3d6820ea2bc30cfcd42af6254/packages/client/src/workflow-client.ts#L205-L208



#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-09 12:08:26.000 UTC</summary>

It could look like this:

```php
$run = $workflowClient->start($stub, 'Hello World!');

/** @var WorkflowExecutionStatus $status */
$status = $run->describe()->info->status;
```

```php
enum WorkflowExecutionStatus: int
{
    case Unspecified = 0;
    case Running = 1;
    case Completed = 2;
    case Failed = 3;
    case Canceled = 4;
    case Terminated = 5;
    case ContinuedAsNew = 6;
    case TimedOut = 7;
}
```

</details>


---

<a id="382"></a>

### #382: [Bug] Methods without ActivityMethod attribute are registered as Activities (even magic)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/382 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-01-05 14:14:35.000 UTC (2 years ago) |
| **Updated** | 2025-12-20 08:05:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

We have an incorrect behavior regarding Activity: all methods of `ActivityInterface` classes are scanned and added as activity methods, instead of only registering methods with the `ActivityMethod` attribute only. This leads to even **class constructors** being included in the activity list.

### Additional context

Despite the fact that the documentation everywhere instructs the user to use attributes to mark activity methods, there is a chance that not everyone followed this. 
I propose to solve the problem in 2 stages:
- [x] We will immediately remove constructors and other magic methods from scanning.
- [ ] Add a FeatureFlag to disable the registration of activity methods without attributes.
- [ ] We can trigger a DeprecationError to inform the user that they are calling an activity method that is not marked with an attribute.


#### Comments (1)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 08:05:59.000 UTC</summary>

Regarding the feature flag, why do you think it should be allowed at all?

</details>


---

<a id="352"></a>

### #352: [Bug] Issue with Doctrine Annotation Reader and Need to Disable SelectiveReader`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/352 |
| **State** | CLOSED |
| **Author** | butschster (Pavel Buchnev) |
| **Created** | 2023-09-07 09:55:32.000 UTC (2y 4m ago) |
| **Updated** | 2024-07-01 16:02:37.000 UTC |
| **Closed** | 2024-07-01 16:02:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I encountered an error due to the Doctrine Annotations library being unable to interpret the "@mixin" annotation in the `Carbon\Carbon` class.

```
Doctrine\\Common\\Annotations\\AnnotationException: [Semantical Error] 
The annotation \"@mixin\" in class Carbon\\Carbon was never imported. Did you maybe forget to add a \"use\" statement for this annotation? in /xxx/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/AnnotationException.php:36

Stack trace:
#0 /xxx/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/DocParser.php(790): Doctrine\\Common\\Annotations\\AnnotationException::semanticalError('The annotation ...')
#1 /xxx/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/DocParser.php(712): Doctrine\\Common\\Annotations\\DocParser->Annotation()
#2 /xxx/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/DocParser.php(368): Doctrine\\Common\\Annotations\\DocParser->Annotations()
#3 /xxx/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/AnnotationReader.php(142): Doctrine\\Common\\Annotations\\DocParser->parse('/**\\n * A simple...', 'class Carbon\\\\Ca...')
#4 /xxx/vendor/spiral/attributes/src/Internal/DoctrineAnnotationReader.php(29): Doctrine\\Common\\Annotations\\AnnotationReader->getClassAnnotations(Object(ReflectionClass))
#5 /xxx/vendor/spiral/attributes/src/Internal/DoctrineAnnotationReader.php(74): Spiral\\Attributes\\Internal\\DoctrineAnnotationReader->Spiral\\Attributes\\Internal\\{closure}()
#6 /xxx/vendor/spiral/attributes/src/Internal/DoctrineAnnotationReader.php(29): Spiral\\Attributes\\Internal\\DoctrineAnnotationReader->wrapDoctrineExceptions(Object(Closure))
#7 [internal function]: Spiral\\Attributes\\Internal\\DoctrineAnnotationReader->getClassMetadata(Object(ReflectionClass), 'Temporal\\\\Intern...')
#8 /xxx/vendor/spiral/attributes/src/Composite/Composite.php(69): iterator_to_array(Object(Generator), false)
#9 /xxx/vendor/spiral/attributes/src/Composite/SelectiveReader.php(12): Spiral\\Attributes\\Composite\\Composite->iterableToArray(Object(Generator))
#10 /xxx/vendor/spiral/attributes/src/Composite/Composite.php(27): Spiral\\Attributes\\Composite\\SelectiveReader->each(Object(Closure))
#11 /xxx/vendor/spiral/attributes/src/Reader.php(11): Spiral\\Attributes\\Composite\\Composite->getClassMetadata(Object(ReflectionClass), 'Temporal\\\\Intern...')
#12 /xxx/vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php(108): Spiral\\Attributes\\Reader->firstClassMetadata(Object(ReflectionClass), 'Temporal\\\\Intern...')
#13 /xxx/vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php(68): Temporal\\Internal\\Marshaller\\Mapper\\AttributeMapper->getScope()
#14 /xxx/vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapperFactory.php(37): Temporal\\Internal\\Marshaller\\Mapper\\AttributeMapper->__construct(Object(ReflectionClass), Object(Temporal\\Internal\\Marshaller\\TypeFactory), Object(Spiral\\Attributes\\Composite\\SelectiveReader))
#15 /xxx/vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php(113): Temporal\\Internal\\Marshaller\\Mapper\\AttributeMapperFactory->create(Object(ReflectionClass), Object(Temporal\\Internal\\Marshaller\\TypeFactory))
```

**The error trace led me to the following files and lines of code in the sdk:**

https://github.com/temporalio/sdk-php/blob/master/src/DataConverter/JsonConverter.php#L238

The issue seems to arise from this piece of code:


```php
if (\interface_exists(Reader::class)) {
    return new SelectiveReader([new AnnotationReader(), new AttributeReader()]);
}

return new AttributeReader();
```

Here, if the `Doctrine\Common\Annotations\Reader` class exists in the system, the `SelectiveReader` is utilized. This causes potential compatibility issues with Doctrine annotations, especially if they are not meant to be handled by the `AnnotationReader`.

And the same code is in the following classes:

- https://github.com/temporalio/sdk-php/blob/master/src/WorkerFactory.php#L301
- https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowClient.php#L350
- https://github.com/temporalio/sdk-php/blob/master/src/DataConverter/JsonConverter.php#L238

**Suggested Fix:**

- Offer an option or configuration to disable the use of SelectiveReader.
- Refactor the SDK to have a central point or method to generate readers, ensuring consistent behavior across classes and easier maintainability.






























#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-07-01 16:02:36.000 UTC</summary>

Looks like fixed with https://github.com/spiral/attributes/pull/16

</details>


---

<a id="350"></a>

### #350: Add UUID sugar like Workflow::uuid()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/350 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-05 14:39:06.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-12 16:51:18.000 UTC |
| **Closed** | 2023-09-12 16:51:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

Add UUID sugar like `Workflow::uuid()` or `Workflow::uuid4(), ::uuid7(), ::uuid8()`

It may look like:

```php
# Workflow context

$uuid = yield Workflow::uuid7();
```

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-09-05 16:39:09.000 UTC</summary>

@Sushisource what do you think witch option is better?

1. Only one `uuid` method
```php
$uuid = yield Workflow::uuid(); // Generate UUIDv4 or UUIDv7
```
2. User may choose needed UUID version
```php
$uuid4 = yield Workflow::uuid4(); // Generate UUIDv4
$uuid7 = yield Workflow::uuid7(); // Generate UUIDv7
```

We can add all the UUID versions but 4 and 7 are most popular

</details>


---

<a id="347"></a>

### #347: [Feature Request] Define Workflow return type via attribute

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/347 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-01 19:09:54.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-04 18:29:25.000 UTC |
| **Closed** | 2023-09-04 18:25:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Question |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

### Is your feature request related to a problem? Please describe.

We have no ability to unpack protobuf object based on information from the `metadata.messageType` header.
Also any workflow method can't have not `Generator` type because it has `yield` statements inside.
And right now it's impossible to define custom return type in workflow.

### Describe the solution you'd like

There are two options:
- add return type in the existing attribute `Workflow`
- add separated attribute


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-09-04 18:25:34.000 UTC</summary>

There already  is the `\Temporal\Workflow\ReturnType` attribute.

https://docs.temporal.io/dev-guide/php/foundations#workflow-return-values

</details>


---

<a id="344"></a>

### #344: [Feature Request] `EnableEagerStart` option in the  PHP `StartWorkflowOptions` structure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/344 |
| **State** | CLOSED |
| **Author** | rustatian (Valery Piashchynski) |
| **Created** | 2023-08-23 10:51:07.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-13 14:43:51.000 UTC |
| **Closed** | 2023-09-13 14:43:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

### Is your feature request related to a problem? Please describe.

RoadRunner-Temporal plugin supports the latest `SDK-GO`. So it's time to add a new `EnableEagerStart` option https://github.com/temporalio/sdk-go/releases/tag/v1.24.0

From release notes:


> Eager Workflow Dispatch (EWD) is a mechanism that minimizes the duration from starting a workflow to the processing of the first workflow task, making Temporal more suitable for latency sensitive applications. Eager workflow Dispatch can be enabled by setting EnableEagerStart in StartWorkflowOptions and if the server supports it and a local worker is available the task is fed directly to the worker.


#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2023-08-25 15:29:01.000 UTC</summary>

Note that this will require some extra work to allocate a workflow slot on a worker on the same task queue and delivering a workflow task to the workflow from the `StartWorfklowExecutionResponse`.

Reactions: 👍 1

</details>


---

<a id="330"></a>

### #330: [Feature Request] Separate client to another package

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/330 |
| **State** | CLOSED |
| **Author** | peixotoleonardo (Leonardo Peixoto) |
| **Created** | 2023-07-10 20:42:31.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-16 16:03:47.000 UTC |
| **Closed** | 2023-07-16 16:03:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Separate client to another package  that not require RoadRunner.

### Additional context

I need only use client of temporal of php-sdk, but I can't install RoadRunner that is required to worker. 


#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2023-07-11 07:35:08.000 UTC</summary>

Hi. Just don't install RoadRunner.
You don't have to install RoadRunner if you just use Client part.

Reactions: 👍 1

</details>


---

<a id="323"></a>

### #323: PHP Workflow update support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/323 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:49:29.000 UTC (2y 6m ago) |
| **Updated** | 2024-03-07 18:33:06.000 UTC |
| **Closed** | 2024-03-07 18:33:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.8.0 |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>rustatian</strong> commented on 2023-07-12 16:13:31.000 UTC</summary>

Hey @bergundy 👋🏻 
I wrote this in the `Slack` but duplicate here: we need this interface to be publicly available to register the handler: https://github.com/temporalio/sdk-go/blob/e1d76b7c798828302980d483f0981128c97a20c2/internal/internal_update.go#L55-L56

EDIT: Because we're using this method to register the handler inside the `WorkflowDefinition`: https://github.com/temporalio/sdk-go/blob/master/internal/internal_worker_base.go#L114

</details>


---

<a id="296"></a>

### #296: Include protocol errors into retryable statements

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/296 |
| **State** | CLOSED |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2023-04-14 15:10:29.000 UTC (2y 9m ago) |
| **Updated** | 2023-04-17 19:50:40.000 UTC |
| **Closed** | 2023-04-17 19:46:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

protocol errors are not being retried (only service level errors)  https://github.com/temporalio/sdk-php/blob/6bc84c0d931f6187d72566a6ce134b5476799e87/src/Client/GRPC/BaseClient.php#L137-L139 , please retry protocol errors too. 

thanks, 

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

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

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-04-17 19:50:40.000 UTC</summary>

Fix will be included into the next release. Dependind on connection error it might still cause an connection issue, but for that case we also included more verbose error message to understand the root cause of the connection problem.

</details>


---

<a id="294"></a>

### #294: [SWOOLE] Integration With Other Async PHP Libraries

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/294 |
| **State** | CLOSED |
| **Author** | nickpoulos (Nick Poulos) |
| **Created** | 2023-03-28 13:39:20.000 UTC (2y 9m ago) |
| **Updated** | 2023-03-28 13:55:02.000 UTC |
| **Closed** | 2023-03-28 13:52:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

We have a gRPC based application that uses Swoole under the hood. We would like to use this library to orchestrate some of our more complex workflows.  But based on the docs it seems in order to use all of the features of this SDK, the only choice we have as an async PHP library is RoadRunner.  

Are there plans or current documentation for using other similar async libraries like Swoole?  

### Describe the solution you'd like

I would like to use Swoole instead of RoadRunner while using this SDK. 

### Additional context




#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-03-28 13:50:05.000 UTC</summary>

Porting to Swoole would mean that all of the SDK code has to be ported from Golang to C++, unfortunately, it's not just about porting async functions but a much larger scope. 

We do not have such plans, as it, essentially, means maintaining two different versions of SDK.

Just a FYI for you, Swoole uses almost identical GRPC server declarations as RoadRunner. Mostly, because they used RoadRunner GRPC codebase as a foundation. ;)

Reactions: 👍 1

</details>


---

<a id="260"></a>

### #260: [Bug] Async batch gets cancelled upon Exception thrown.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/260 |
| **State** | CLOSED |
| **Author** | Zylius (Zigmas Satkevičius) |
| **Created** | 2022-10-20 10:48:31.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-20 15:47:19.000 UTC |
| **Closed** | 2022-10-20 15:47:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to launch a batch of activity in async, each activity is wrapped in code which handles it's response, and it should be executed async as well. 

### Describe the bug

In `temporal/sdk ^2` if I throw an exception, the workflow quits the scope of the async batch immediately and continues on with the workflow. Which causes "UnhandledCommand" errors in the workflow later on, cause the remaining async requests get done AFTER the workflow finishes.

In `temporal/sdk ^1` the workflow waits on the batch, even if exception is thrown.


### Minimal Reproduction

Workflow:
```php
<?php

use Temporal\Activity\ActivityOptions;
use Temporal\Promise;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowInterface;
use Temporal\Workflow\WorkflowMethod;

#[WorkflowInterface]
class TestWorkflow
{
    #[WorkflowMethod]
    public function TestWorkflow()
    {
       $promise = Workflow::async(function() {
          $first = Workflow::async(fn() => $this->executeAnActivityComplicated('failure'));
          $second = Workflow::async(fn() => $this->executeAnActivityComplicated('success'));
          $third = Workflow::async(fn() => $this->executeAnActivityComplicated('failure'));


           return yield Promise::all([$first, $second, $third]);
        });

       yield $promise;
    }

    private function executeAnActivityComplicated(string $activityName)
    {
        $result = yield Workflow::executeActivity($activityName, [], ActivityOptions::new()->withTaskQueue('test_queue')->withStartToCloseTimeout(20));

        if ($result == 'failure') {
            throw new \InvalidArgumentException("test");
        }

        return $result;
    }
}
```

Activity:

```php
<?php

use Temporal\Activity\ActivityInterface;
use Temporal\Activity\ActivityMethod;

#[ActivityInterface]
class TestActivity
{
    #[ActivityMethod]
    public function failure()
    {
        return 'failure';
    }

    #[ActivityMethod]
    public function success()
    {
        return 'success';
    }

}
```

### Environment/Versions

- Ubuntu 22.04
- Temporal Version: 1.14
- Docker, RR version: 2.11.4, SDK version 2.2.1

### Additional context

Here's the result with `temporal/sdk ^2` (bad)
![image](https://user-images.githubusercontent.com/5536051/196927945-6fd9e977-f9d1-4386-9136-03358720c526.png)

Here's the result with `temporal/sdk ^1` (good)
![image](https://user-images.githubusercontent.com/5536051/196928189-3d995839-fed8-4549-8f76-9a309f80a651.png)


Maybe this isn't even a bug? Maybe I can write the code somehow differently to achieve the result in `temporal/sdk ^1`. If it is a bug, I'm willing to fix it myself, but some first-points-to-look-at would be nice ;)




#### Comments (1)

<details>
<summary><strong>Zylius</strong> commented on 2022-10-20 15:47:19.000 UTC</summary>

Not a bug, discussed this with @wolfy-j. Should handle the exception inside the scope if you want the batch to be completed.

</details>


---

<a id="244"></a>

### #244: [Feature Request] FailureConverter allow more context in ordinary exceptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/244 |
| **State** | OPEN |
| **Author** | zajca (Martin Zajíc) |
| **Created** | 2022-09-14 06:07:31.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-14 06:09:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

We have older codebase where we have interfaces called UserExceptions and ApplicationExceptions based on this interfaces we know if error should be shown to user or not. Interfaces has also methods like getContext:array and getParameters:array which are similar to temporal failure details.
When temporal activity fails we are not throwing temporal failures since our app is bit old and has hundreds of such exceptions. 

What SDK does is to call mapFailureToException and our context is lost here since it really just handles instance of temporal failures.

### Describe the solution you'd like

Would be great if ApplicationFailure was an interface this way we can just force our exceptions to implement this and create details and don't have to extend ApplicationFailure all the way.

Event something like:

```
interface FailureWithDetails
  public function getDetails(): ValuesInterface
```

would probably solve the problem.

#### Comments (1)

<details>
<summary><strong>zajca</strong> commented on 2022-09-14 06:09:50.000 UTC</summary>

Or maybe interface like:

```
interface HasFailureInfo
  public function getFailureInfo(): ApplicationFailureInfo
```

</details>


---

<a id="236"></a>

### #236: [Feature Request] How can i test child workflow?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/236 |
| **State** | CLOSED |
| **Author** | dehbka (Denys) |
| **Created** | 2022-08-23 14:11:17.000 UTC (3y 4m ago) |
| **Updated** | 2023-09-01 11:46:30.000 UTC |
| **Closed** | 2023-09-01 11:46:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
How to test this workflow https://github.com/temporalio/samples-php/blob/master/app/src/Child/ParentWorkflow.php
### Describe the solution you'd like

### Additional context


#### Comments (1)

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:46:19.000 UTC</summary>

Hey @dehbka 👋🏻 
Feel free to raise your question in the Slack, our team would be happy to help you 😃 

</details>


---

<a id="229"></a>

### #229: Expose raw grpc operator service in SDK client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/229 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:40:55.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-03 17:54:46.000 UTC |
| **Closed** | 2022-08-03 17:54:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

No need for a high level API, just expose the compile grpc code

#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2022-08-03 17:54:46.000 UTC</summary>

https://github.com/temporalio/sdk-php/blob/master/api/v1/Temporal/Api/Operatorservice/V1/OperatorServiceClient.php

</details>


---

<a id="227"></a>

### #227: Expose Replayer API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/227 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 17:28:07.000 UTC (3y 5m ago) |
| **Updated** | 2023-08-10 09:19:22.000 UTC |
| **Closed** | 2023-08-10 09:19:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

See other SDKs for reference.
Go SDK already provides this functionality, need to wrap the API and expose to PHP.
The purpose of the replayer is:
- replay workflow histories against new workflow code to check for non-determinism
- replay workflow history from a production workflow and debug locally

#### Comments (1)

<details>
<summary><strong>michael-rubel</strong> commented on 2023-01-27 12:12:49.000 UTC</summary>

@seregazhuk how it's going with implementing the Replay feature?

We can't wait to test it in PHP. 😉

</details>


---

<a id="223"></a>

### #223: [Feature Request] Use getSystemInfo request to determine server capabilities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/223 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 16:53:15.000 UTC (3y 5m ago) |
| **Updated** | 2023-09-01 11:58:21.000 UTC |
| **Closed** | 2023-09-01 11:58:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.7.0 |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 11:58:20.000 UTC</summary>

Done in `2.7.x` branch

</details>


---

<a id="222"></a>

### #222: [Feature Request] Expose history length via Workflow info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/222 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 16:47:42.000 UTC (3y 5m ago) |
| **Updated** | 2023-08-17 11:38:26.000 UTC |
| **Closed** | 2023-08-17 11:38:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:51:28.000 UTC</summary>

Pending 2.7 release.

</details>


---

<a id="221"></a>

### #221: Ensure SDK does not retry "internal" errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/221 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-03 16:46:25.000 UTC (3y 5m ago) |
| **Updated** | 2023-04-18 12:28:42.000 UTC |
| **Closed** | 2023-04-18 12:28:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-04-18 12:28:42.000 UTC</summary>

See the list of retryable client codes: 
https://github.com/temporalio/sdk-php/blob/master/src/Client/GRPC/BaseClient.php#L22

</details>


---

<a id="211"></a>

### #211: [Feature Request] Ability to use readonly properties in workflow and activity inputs.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/211 |
| **State** | CLOSED |
| **Author** | kafkiansky (Vadim Zanfir) |
| **Created** | 2022-07-25 16:34:54.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-16 11:33:19.000 UTC |
| **Closed** | 2022-08-16 11:33:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Now each property is set individually after the object has been created. This does not work with `readonly` fields.

#### Comments (1)

<details>
<summary><strong>shanginn</strong> commented on 2022-08-09 13:59:27.000 UTC</summary>

I wanted to fix this, but was surprised, because readonly properties in DTO's are actually work.

I created demonstration [here](https://github.com/shanginn/temporal-php-worker/tree/feature-sdk-211-issue-demostration) for workflow argument and activity argument.

And pull request with unit test [here](https://github.com/temporalio/sdk-php/pull/232)

</details>


---

<a id="207"></a>

### #207: [Bug] Order of declaration async tasks completely change the execution flow of Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/207 |
| **State** | CLOSED |
| **Author** | LikDioxo (Ihor Berest) |
| **Created** | 2022-07-18 11:00:43.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-01 18:38:53.000 UTC |
| **Closed** | 2022-08-01 18:38:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I was trying to create a Workflow that could be stopped by sending the signal and that simultaneously run several tasks.
The idea behind simultaneous tasks consists of waiting for a signal with data and trying to get this data in case that signal wasn't called.
So generally workflow consists of 4 asynchronous tasks:

1. "main" - a task that contains all other code and can be rejected by sending a specific signal
2. Rejection task - checks for signal and reject "main" task when the signal is received
3. Task waiting for the signal with required data
4. Task that calls activity to get the same data as the previous task. Also contains a timer and infinitely calls the activity until get the required data.

### Describe the bug

Depending on the order of declaring the two last tasks (that wait for a signal with data and that call activity to get that data) "main" task can either be rejected when one of the tasks finishes or can proceed successfully.

### Minimal Reproduction

```php
    private bool $isSignaled = false;
    private bool $isRejected = false;

    private Workflow\CancellationScopeInterface $first;
    private Workflow\CancellationScopeInterface $second;

    #[WorkflowMethod]
    public function execute(): \Generator
    {
        $workflowPromise = Workflow::async(
            function () {
                $this->first = Workflow::async(
                    function () {
                        yield Workflow::await(fn() => $this->isSignaled);

                        $this->second->cancel();
                        print "First finished";
                    }
                );

                $this->second = Workflow::async(
                    function () {
                        yield Workflow::timer(5);

                        $this->first->cancel();
                        print "Second finished";
                    }
                );

                yield Promise::race([$this->second, $this->first]);

                print "Main finished";
            }
        )->then(onRejected: fn() => print "Main rejected!");

        Workflow::async(
            function () use ($workflowPromise) {
                yield Workflow::await(fn() => $this->isRejected);
                $workflowPromise->cancel();
            }
        );

        yield $workflowPromise;
    }

    #[Workflow\SignalMethod]
    public function signal(): void
    {
        $this->isSignaled = true;
    }
```

In such flow, the output is following. When the second task finishes after the timer the message "Main rejected!" is displayed.
In case I send a signal before the timer is finished the message "Main finished" is displayed which is the expected result.

But when I declare $this->second before $this->first in both cases "Main finished" is displayed.

Expected behavior: order of declaration async tasks doesn't affect the normal flow of execution.
Actual behavior: in some order of declaration async tasks "main" task is rejected.

### Additional context
![image](https://user-images.githubusercontent.com/45299516/179424601-1e7a188e-01d4-43e7-8035-e9d9757417d1.png)
![image](https://user-images.githubusercontent.com/45299516/179424641-4f7bd6d2-1e40-46b3-9828-ef98d1d7c07f.png)


#### Comments (1)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-07-23 10:08:27.000 UTC</summary>

@LikDioxo I have found the issue. The problem is with `Workflow::await()`. It doesn't resolve/reject correctly. Thus the main async becomes rejected. In both your cases it should be resolved, not rejected. Even though both internal async-s were canceled/rejected the main async completes and thus `print "Main finished";` should be executed. Please, don't depend on the result of the main async in your code. And the fix will be released the next week (Wednesday).

</details>


---

<a id="157"></a>

### #157: Use test server in testing framework

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/157 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-04-11 08:42:22.000 UTC (3y 9m ago) |
| **Updated** | 2022-06-13 20:02:44.000 UTC |
| **Closed** | 2022-06-13 20:02:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Related:
- https://github.com/temporalio/sdk-java/tree/master/temporal-test-server
- https://github.com/temporalio/sdk-java/releases/tag/v1.8.1
- https://github.com/temporalio/sdk-typescript/pull/543/files#diff-8c8a2416290916a4b1356d6348533788220e0bfdf4d364a82c4e086fb7646f52

#### Comments (1)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-04-20 07:43:18.000 UTC</summary>

Is blocked by https://github.com/temporalio/sdk-java/issues/1158

</details>


---

<a id="137"></a>

### #137: [Feature Request] Add metadata.messageType to protobuf payloads

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/137 |
| **State** | CLOSED |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-01-12 23:43:25.000 UTC (3y 12m ago) |
| **Updated** | 2023-08-10 09:52:48.000 UTC |
| **Closed** | 2023-08-10 09:52:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

To match these PRs in [Java SDK (with explanation)](https://github.com/temporalio/sdk-java/pull/942) and [Go SDK](https://github.com/temporalio/sdk-go/pull/693).

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

I'm not sure how to get the message type / full name (`my.package.MyMessage`) from the message instance. Google's PHP Protobuf library doesn't seem to be documented, but perhaps `message.desc.getFullName()`? `$this->desc` is private:

https://github.com/protocolbuffers/protobuf/blob/master/php/src/Google/Protobuf/Internal/Message.php#L91-L94

but perhaps it's still accessible? https://stackoverflow.com/a/2448499/627729

#### Comments (1)

<details>
<summary><strong>butschster</strong> commented on 2023-07-21 15:30:41.000 UTC</summary>

To get message type you can use the following

```php
$pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
$pool->getDescriptorByClassName($value::class)->getFullName();
```

</details>


---

<a id="131"></a>

### #131: [Bug] Activity code is not invoked inside await

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/131 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2021-12-12 12:05:34.000 UTC (4 years ago) |
| **Updated** | 2022-01-30 19:47:50.000 UTC |
| **Closed** | 2022-01-30 19:47:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### Description of the bug

Trying to execute the same activity method multiple times with different args inside my workflow. Sometimes the code inside the activity does not run, but in the history it says its completed (no exceptions thrown)...

### To Reproduce
workflow code (activity mentioned is "notifyCustomer"):
```php
    #[WorkflowMethod]
    public function create($projectPayload)
    {
        $customer = yield $this->externalActivities->execute("createCustomer", [$projectPayload->hostName]);

        $property = yield $this->externalActivities->execute("createProperty", [$projectPayload->zipCode]);


        $createProjectWorkflow = $this->externalProjectWorkflow->execute([false]);


        yield Workflow::await(fn() => $this->projectOfferAccepted);
        yield $this->notificationActivities->notifyCustomer("A cleaner accepted your project offer");


        yield Workflow::await(fn() => $this->projectPreCharged);
        yield $this->notificationActivities->notifyCustomer("We reserved the project amount in you credit card");


        yield Workflow::await(fn() => $this->projectStarted);
        yield $this->notificationActivities->notifyCustomer("The cleaner has started the project");


        yield Workflow::await(fn() => $this->projectFinished);
        yield $this->notificationActivities->notifyCustomer("The cleaner has finished the project");


        yield Workflow::await(fn() => $this->paymentCreated);
        yield $this->notificationActivities->notifyCustomer("We successfully charged your credit card with the project amount");
    }
```

Activity code:
```php
#[ActivityMethod]
    public function notifyCustomer(string $message)
    {
        Notification::create([
            "message" => $message
        ]);

        return Str::random();
    }
```

### Screenshots/Terminal output

History with one of those been successfully executed and the other returning null:
<img width="1259" alt="Captura de Tela 2021-12-10 às 13 52 33" src="https://user-images.githubusercontent.com/9959761/145711398-23dbe278-fafb-4ad6-a292-84a6f0410482.png">
### Additional context

It might be because of the same activity name method... When changed the code to this:

```php
yield Workflow::await(fn() => $this->projectOfferAccepted);
        yield $this->notificationActivities->notifyCustomer("A cleaner accepted your project offer");


        yield Workflow::await(fn() => $this->projectPreCharged);
        yield $this->notificationActivities->notifyCustomer2("We reserved the project amount in you credit card");


        yield Workflow::await(fn() => $this->projectStarted);
        yield $this->notificationActivities->notifyCustomer3("The cleaner has started the project");


        yield Workflow::await(fn() => $this->projectFinished);
        yield $this->notificationActivities->notifyCustomer4("The cleaner has finished the project");


        yield Workflow::await(fn() => $this->paymentCreated);
        yield $this->notificationActivities->notifyCustomer5("We successfully charged your credit card with the project amount");
```

And it worked (tried sometimes to make sure it was not a coincidence)



#### Comments (1)

<details>
<summary><strong>seregazhuk</strong> commented on 2022-01-30 19:47:50.000 UTC</summary>

Closing due to no feedback.

</details>


---

<a id="89"></a>

### #89: Hide unused files

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/89 |
| **State** | CLOSED |
| **Author** | SerafimArts (Kirill Nesmeyanov) |
| **Created** | 2021-03-04 13:35:41.000 UTC (4y 10m ago) |
| **Updated** | 2021-03-04 15:59:06.000 UTC |
| **Closed** | 2021-03-04 15:59:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

Before release, we need to exclude a set of files from the composer package:
- `.buildkite/`
- `.github/`
- `docker/`
- `proto/`
- `tests/`
- `.php_cs.dist`
- `Makefile`
- `phpunit.xml`
- `psalm.xml`

#### Comments (1)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-03-04 15:59:06.000 UTC</summary>

Done https://github.com/temporalio/sdk-php/pull/91

</details>


---

<a id="88"></a>

### #88: Improve service container

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/88 |
| **State** | CLOSED |
| **Author** | SerafimArts (Kirill Nesmeyanov) |
| **Created** | 2021-03-04 13:31:21.000 UTC (4y 10m ago) |
| **Updated** | 2023-07-11 12:52:14.000 UTC |
| **Closed** | 2023-07-11 12:52:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Service container and worker factory classes:
- https://github.com/temporalio/sdk-php/blob/a5a212793f1cb5555d692fb134c01242f8e6111c/src/Internal/ServiceContainer.php#L125
- https://github.com/temporalio/sdk-php/blob/a5a212793f1cb5555d692fb134c01242f8e6111c/src/WorkerFactory.php#L286

Should be rewritten using a clearer and more user-friendly approach (global PSR-11?).

We should think about solving this problem, because a certain set of services is also used in the client.

#### Comments (1)

<details>
<summary><strong>wolfy-j</strong> commented on 2023-07-11 12:52:13.000 UTC</summary>

Closing for now since the current structure is stable.

</details>


---

<a id="692"></a>

### #692: [Bug] Minimal Composer requirements conflicts with react/promise v2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/692 |
| **State** | OPEN |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2026-01-08 09:02:28.000 UTC (1 days ago) |
| **Updated** | 2026-01-08 09:02:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

CI pipelines fail to install the lowest dependencies versions:

<img width="1415" height="878" alt="Image" src="https://github.com/user-attachments/assets/0aa64cb6-1cc6-4a70-a637-2cc597786a36" />

It's also reproduces locally, by installing composer with a version greater than 2.9.

<img width="1049" height="403" alt="Image" src="https://github.com/user-attachments/assets/8f1bf268-c2b3-484e-94c3-f9e050c435a6" />

It seems like composer requires api package (`composer/composer`) as minimum as itself, so composer:^2.9 cannot install 2.8.* api package, so they cannot install internal/promise 2.* versions, and finally pipeline fails.

There're several solutions, which may help:
- bind composer as maximum of 2.8.* packages
- drop internal/promise 2.* versions
- ignore composer/composer requirements and allow to install internal/promise v2

Related composer resources:
https://github.com/composer/composer/pull/12188#issuecomment-3302159636
https://github.com/composer/composer/commit/4ad19893aa38377fff6a59490d9e6e890090779b

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

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

### Additional context

<!-- Add any other context about the problem here. -->



---

<a id="670"></a>

### #670: [Feature Request] Symfony 8.0 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/670 |
| **State** | OPEN |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2025-12-18 18:07:27.000 UTC (21 days ago) |
| **Updated** | 2025-12-18 18:07:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like

It would be great to support symfony 8.0 packages, there are some in the sdk's "require" section:

```
"symfony/filesystem": "^5.4.45 || ^6.4.13 || ^7.0,
"symfony/http-client": "^5.4.49 || ^6.4.17 || ^7.0,
"symfony/polyfill-php83": "^1.31.0",
"symfony/process": "^5.4.47 || ^6.4.15 || ^7.0"
```

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="668"></a>

### #668: [Feature Request] Implement `SetCurrentDetails` for dynamic workflow details

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/668 |
| **State** | OPEN |
| **Author** | FluffyDiscord (Honk) |
| **Created** | 2025-12-06 18:03:27.000 UTC (1 months ago) |
| **Updated** | 2025-12-06 18:03:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Want to set current details from the workflow itself. Apparently Temporal can do that, but PHP does not yet have a way to set it.

<img width="1119" height="606" alt="Image" src="https://github.com/user-attachments/assets/7ff290ba-bb47-471c-883d-84d6b27d5a7a" />

### Describe the solution you'd like

A way to set detail dynamically from the workflow itself.

### Additional context

---


---

<a id="660"></a>

### #660: [php] Plugin + SimplePlugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/660 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-10-20 21:22:54.000 UTC (2 months ago) |
| **Updated** | 2025-10-20 21:26:13.000 UTC |
| **Closed** | 2025-10-20 21:26:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Implement Plugins so that users can self-serve creating integrations with Temporal Workflows.  This is done in Python and we can copy.


---

<a id="648"></a>

### #648: [Feature Request] Reclassify Benign Application errors in OpenTelemetry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/648 |
| **State** | OPEN |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-08-26 20:41:43.000 UTC (4 months ago) |
| **Updated** | 2025-08-26 20:41:43.000 UTC |
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

<a id="644"></a>

### #644: [Feature Request] Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/644 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:34:25.000 UTC (4 months ago) |
| **Updated** | 2025-08-15 14:34:25.000 UTC |
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

<a id="638"></a>

### #638: [Feature Request] Add Summary to LocalActivityOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/638 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-07-18 00:06:48.000 UTC (5 months ago) |
| **Updated** | 2025-07-18 00:09:38.000 UTC |
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

<a id="636"></a>

### #636: [Bug] Suppressed exception in worfklow child

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/636 |
| **State** | OPEN |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2025-07-13 06:47:25.000 UTC (6 months ago) |
| **Updated** | 2025-07-25 05:42:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am starting the workflow


### Describe the bug

If an exception is thrown from PayloadConverter, it cannot be processed and is not visible in the logs or in ui temporal itself. I would like to be able to send this exception to sentry/logs



### Minimal Reproduction

<details>
  <summary>ChildWorkflow Case</summary>


```php
<?php

final class BRequest
{
    public function __construct(
        public string $id,
    ) {
    }
}


#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class BWorkflow
{
    #[WorkflowMethod('BWorkflow')]
    public function start(BRequest $request): Generator
    {
        yield Workflow::timer(CarbonInterval::minutes(1));
    }
}


#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class AWorkflow
{
    #[WorkflowMethod('AWorkflow')]
    public function start(): Generator
    {
        $workflow = Workflow::newChildWorkflowStub(
            BWorkflow::class,
            Workflow\ChildWorkflowOptions::new()
                ->withTaskQueue('mdm.client_verification.workflow')
                ->withNamespace(Workflow::getInfo()->namespace)
        );

        yield $workflow->start(new BRequest('123'));
    }
}
```


<details>
  <summary>DataConverter</summary>


```php
<?php

/**
 * Temporal Bundle
 *
 * @author Vlad Shashkov <v.shashkov@pos-credit.ru>
 * @copyright Copyright (c) 2023, The Vanta
 */

declare(strict_types=1);

namespace Vanta\Integration\Symfony\Temporal\DataConverter;

use App\ClientVerification\Workflow\Join\BRequest;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer as ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface as Serializer;
use Temporal\Api\Common\V1\Payload;
use Temporal\DataConverter\EncodingKeys;
use Temporal\DataConverter\JsonConverter;
use Temporal\DataConverter\PayloadConverterInterface as PayloadConverter;
use Temporal\DataConverter\Type;
use Temporal\Exception\DataConverterException;
use Throwable;

final readonly class SymfonySerializerDataConverter implements PayloadConverter
{
    private const INPUT_TYPE = 'symfony.serializer.type';


    public function __construct(
        private Serializer $serializer,
        private PayloadConverter $payloadConverter = new JsonConverter(),
    ) {
    }


    public function getEncodingType(): string
    {
        return EncodingKeys::METADATA_ENCODING_JSON;
    }

    public function toPayload($value): Payload
    {
        $metadata = [
            EncodingKeys::METADATA_ENCODING_KEY => $this->getEncodingType(),
        ];

        $context = [ObjectNormalizer::PRESERVE_EMPTY_OBJECTS => true];

        if (is_object($value)) {
            $metadata[self::INPUT_TYPE] = $value::class;
        }

        try {
            $data = $this->serializer->serialize($value, 'json', $context);
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }

        $payload = new Payload();
        $payload->setMetadata($metadata);
        $payload->setData($data);

        return $payload;
    }

    public function fromPayload(Payload $payload, Type $type): mixed
    {
        if ("null" == $payload->getData() && $type->allowsNull()) {
            return null;
        }

        /** @var string|null $inputType */
        $inputType = $payload->getMetadata()[self::INPUT_TYPE] ?? null;


        if ($inputType == BRequest::class) {
            // dump
            throw new DataConverterException('BAM', 3, null);
        }

        if (!$type->isClass() && $inputType == null) {
            return $this->payloadConverter->fromPayload($payload, $type);
        }

        try {
            return $this->serializer->deserialize($payload->getData(), $inputType ?? $type->getName(), 'json');
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
```

</details>




<details>
  <summary>Temporal UI</summary>

<img width="2372" height="1234" alt="Image" src="https://github.com/user-attachments/assets/2b7a76a3-66c9-4000-97a7-3301552938cf" />
</details>



<details>
  <summary>Event history</summary>

[594e549a-bb6d-4d0d-8415-6172ee9e4d56_events.json](https://github.com/user-attachments/files/21363356/594e549a-bb6d-4d0d-8415-6172ee9e4d56_events.json)


</details>


</details>




<details>
  <summary>ContinueAsNew Case</summary>

```php
<?php

#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class AWorkflow
{
    #[WorkflowMethod('AWorkflow')]
    public function start(?stdClass $foo = null): Generator
    {

        yield Workflow::timer(CarbonInterval::second(30));


        $workflow = Workflow::newContinueAsNewStub(
            self::class,
            ContinueAsNewOptions::new()
                 ->withTaskQueue('mdm.client_verification.workflow')
        );

        yield $workflow->start(new stdClass());
    }
}

```



<details>
  <summary>DataConverter</summary>

```php
<?php

/**
 * Temporal Bundle
 *
 * @author Vlad Shashkov <v.shashkov@pos-credit.ru>
 * @copyright Copyright (c) 2023, The Vanta
 */

declare(strict_types=1);

namespace Vanta\Integration\Symfony\Temporal\DataConverter;

use App\ClientVerification\Workflow\Join\BRequest;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer as ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface as Serializer;
use Temporal\Api\Common\V1\Payload;
use Temporal\DataConverter\EncodingKeys;
use Temporal\DataConverter\JsonConverter;
use Temporal\DataConverter\PayloadConverterInterface as PayloadConverter;
use Temporal\DataConverter\Type;
use Temporal\Exception\DataConverterException;
use Throwable;

final readonly class SymfonySerializerDataConverter implements PayloadConverter
{
    private const INPUT_TYPE = 'symfony.serializer.type';


    public function __construct(
        private Serializer $serializer,
        private PayloadConverter $payloadConverter = new JsonConverter(),
    ) {
    }


    public function getEncodingType(): string
    {
        return EncodingKeys::METADATA_ENCODING_JSON;
    }

    public function toPayload($value): Payload
    {
        $metadata = [
            EncodingKeys::METADATA_ENCODING_KEY => $this->getEncodingType(),
        ];

        $context = [ObjectNormalizer::PRESERVE_EMPTY_OBJECTS => true];

        if (is_object($value)) {
            $metadata[self::INPUT_TYPE] = $value::class;
        }

        try {
            $data = $this->serializer->serialize($value, 'json', $context);
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }

        $payload = new Payload();
        $payload->setMetadata($metadata);
        $payload->setData($data);

        return $payload;
    }

    public function fromPayload(Payload $payload, Type $type): mixed
    {
        if ("null" == $payload->getData() && $type->allowsNull()) {
            return null;
        }

        /** @var string|null $inputType */
        $inputType = $payload->getMetadata()[self::INPUT_TYPE] ?? null;


        if ($inputType == \stdClass::class) {
            // workflow broken 💥
            throw new DataConverterException('BAM', 3, null);
        }

        if (!$type->isClass() && $inputType == null) {
            return $this->payloadConverter->fromPayload($payload, $type);
        }

        try {
            return $this->serializer->deserialize($payload->getData(), $inputType ?? $type->getName(), 'json');
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
```

</details>


<details>
  <summary>Temporal UI</summary>

<img width="2388" height="1271" alt="Image" src="https://github.com/user-attachments/assets/366e95a4-d25e-4d44-aed5-f027bbebf307" />


<img width="2393" height="1302" alt="Image" src="https://github.com/user-attachments/assets/564c90df-661e-4870-ae50-dd2ab0fb2906" />
</details>



<details>
  <summary>Event history</summary>

[dc5c2461-ab3e-4db6-9b3d-b9975f590159_events.json](https://github.com/user-attachments/files/21425040/dc5c2461-ab3e-4db6-9b3d-b9975f590159_events.json)

[ce120686-533e-4f9a-b7fd-c6f164ebf23c_events.json](https://github.com/user-attachments/files/21425046/ce120686-533e-4f9a-b7fd-c6f164ebf23c_events.json)

</details>



</details>


### Environment/Versions

- Temporal sdk 2.15.1
- RoadRunner 2025.1.2
- Temporal server 1.24.2



---

<a id="634"></a>

### #634: [Bug] Abandoned Child Workflows Cancellation policy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/634 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-07-03 10:42:26.000 UTC (6 months ago) |
| **Updated** | 2025-08-26 13:11:52.000 UTC |
| **Closed** | 2025-08-26 13:11:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.16.0 |

#### Description

Abandoned Child Workflows should not receive a cascading Cancel from the parent (see https://github.com/temporalio/features/pull/644)



---

<a id="632"></a>

### #632: [Feature Request] Apply application failure logging and metrics behaviour according to ApplicationErrorCategory

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/632 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-06-30 17:49:24.000 UTC (6 months ago) |
| **Updated** | 2025-11-05 15:05:04.000 UTC |
| **Closed** | 2025-11-05 15:05:04.000 UTC |
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

<a id="628"></a>

### #628: [Feature Request] Environment Configuration

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/628 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-06-17 20:03:01.000 UTC (6 months ago) |
| **Updated** | 2025-12-26 18:09:22.000 UTC |
| **Closed** | 2025-12-26 18:09:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.17.0 |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/441 and https://github.com/temporalio/proposals/blob/master/all-sdk/external-client-configuration.md


---

<a id="624"></a>

### #624: [Bug] Facade methods throw wrong exception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/624 |
| **State** | OPEN |
| **Author** | mtorromeo (Massimiliano Torromeo) |
| **Created** | 2025-05-27 15:43:07.000 UTC (7 months ago) |
| **Updated** | 2025-12-26 15:26:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | xepozz |
| **Milestone** | None |

#### Description

### Describe the bug

When calling Facade methods from the wrong context a `RuntimeException` is thrown but the phpdoc `@throws` tag documents that the `Temporal\Exception\OutOfContextException` exception should be thrown instead.

From a superficial search, it seems like the `OutOfContextException` is never used in the codebase.

### Minimal Reproduction

```
❯ php -a
Interactive shell

php > require_once 'vendor/autoload.php';
php > \Temporal\Activity::getInfo();
PHP Warning:  Uncaught RuntimeException: Calling facade methods can only be made from the currently running process in ...
```

### Environment/Versions

temporal/sdk v2.14.1



---

<a id="621"></a>

### #621: [Bug] return type mismatch in Workflow::getInfo()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/621 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2025-05-23 06:41:02.000 UTC (7 months ago) |
| **Updated** | 2025-10-30 09:07:12.000 UTC |
| **Closed** | 2025-10-30 09:07:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.17.0 |

#### Description

### What are you really trying to do?

Call Workflow::getInfo() in ActivityInboundInterceptor


### Describe the bug

I know that this shouldn't be done, but it seems to me that there should be a "friendly error" here as an exception, and not a typing error. 

### Minimal Reproduction


```php
<?php
/**
 * Vanta Cash Bus
 *
 * @author Vlad Shashkov <v.shashkov@pos-credit.ru>
 * @copyright Copyright (c) 2025, The Vanta
 */

declare(strict_types=1);

namespace App\Bus\Infrastructure\Temporal;

use App\Bus\Infrastructure\Logger\BankIntegrationProcessor;
use Symfony\Component\Uid\Uuid;
use Temporal\Interceptor\ActivityInbound\ActivityInput;
use Temporal\Interceptor\ActivityInboundInterceptor;
use Temporal\Workflow;

final readonly class BankIntegrationActivityInboundInterceptor implements ActivityInboundInterceptor
{
    public function __construct(
        private BankIntegrationProcessor $applicationIdProcessor,
    ) {
    }


    public function handleActivityInbound(ActivityInput $input, callable $next): mixed
    {
        $rawApplicationId = Workflow::getInfo()->searchAttributes['applicationId'] ?? null;
        $bankId           = Workflow::getInfo()->searchAttributes['bankId'] ?? null;


        if (is_string($rawApplicationId) && is_string($bankId) && $bankId != '' ) {
            $this->applicationIdProcessor->witBankIntegration(
                Uuid::fromString($rawApplicationId),
                $bankId
            );
        }

        try {
            return $next($input);
        } finally {
            $this->applicationIdProcessor->reset();
        }
    }
}
```


stacktrace:  

```json
{
  "message": "Temporal\\Workflow::getInfo(): Return value must be of type Temporal\\Workflow\\WorkflowInfo, Temporal\\Activity\\ActivityInfo returned",
  "source": "PHP_SDK",
  "stackTrace": "#0  /app/src/Bus/Infrastructure/Temporal/BankIntegrationActivityInboundInterceptor.php:29\n    Temporal\\Workflow::getInfo()\n#1  /app/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:98\n    App\\Bus\\Infrastructure\\Temporal\\BankIntegrationActivityInboundInterceptor->handleActivityInbound(Temporal\\Interceptor\\ActivityInbound\\ActivityInput,Temporal\\Internal\\Interceptor\\Pipeline)\n#2  /app/vendor/temporal/sdk/src/Internal/Transport/Router/InvokeActivity.php:97\n    Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Temporal\\Interceptor\\ActivityInbound\\ActivityInput)\n#3  /app/vendor/temporal/sdk/src/Internal/Transport/Router.php:69\n    Temporal\\Internal\\Transport\\Router\\InvokeActivity->handle(Temporal\\Worker\\Transport\\Command\\Server\\ServerRequest,array(3),React\\Promise\\Deferred)\n#4  /app/vendor/temporal/sdk/src/Worker/Worker.php:59\n    Temporal\\Internal\\Transport\\Router->dispatch(Temporal\\Worker\\Transport\\Command\\Server\\ServerRequest,array(3))\n#5  /app/vendor/temporal/sdk/src/WorkerFactory.php:308\n    Temporal\\Worker\\Worker->dispatch(Temporal\\Worker\\Transport\\Command\\Server\\ServerRequest,array(3))\n#6  /app/vendor/temporal/sdk/src/Internal/Transport/Server.php:57\n    Temporal\\WorkerFactory->onRequest(Temporal\\Worker\\Transport\\Command\\Server\\ServerRequest,array(3))\n#7  /app/vendor/temporal/sdk/src/WorkerFactory.php:290\n    Temporal\\Internal\\Transport\\Server->dispatch(Temporal\\Worker\\Transport\\Command\\Server\\ServerRequest,array(3))\n#8  /app/vendor/temporal/sdk/src/WorkerFactory.php:187\n    Temporal\\WorkerFactory->dispatch(\"\\n\ufffd7\\b\\^S\\^R\\^NInvokeActivity\\^Z\ufffd\\^F{\\\"name\\\":\\\"MigApplicationAct...\",array(3))\n#9  /app/vendor/vanta/temporal-bundle/src/Runtime/Runtime.php:33\n    Temporal\\WorkerFactory->run()\n#10 /app/vendor/vanta/temporal-bundle/src/Runtime/TemporalRunner.php:26\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\Runtime->run()\n#11 /app/vendor/autoload_runtime.php:29\n    Vanta\\Integration\\Symfony\\Temporal\\Runtime\\TemporalRunner->run()\n#12 /app/public/index.php:8\n    require_once(\"\\/app\\/vendor\\/autoload_runtime.php\")",
  "applicationFailureInfo": {
    "type": "TypeError"
  }
}
```



### Environment/Versions

temporal/sdk: 2.13.4



---

<a id="618"></a>

### #618: Resolve protobuf deprecations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/618 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-05-19 13:41:25.000 UTC (7 months ago) |
| **Updated** | 2025-08-12 18:25:36.000 UTC |
| **Closed** | 2025-08-12 18:25:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

A new RepeatedField class [has been added in the protobuf package](https://github.com/protocolbuffers/protobuf/pull/11734). The old RepeatedField is deprecated now. Need to resolve all the deprecations.

> [!WARNING]
> The new class is not presented in the protobuf v3. By the reason protobuf v3 might be removed from the `composer.json`


---

<a id="605"></a>

### #605: [php] SDK support for activity reset 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/605 |
| **State** | OPEN |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-23 19:08:08.000 UTC (8 months ago) |
| **Updated** | 2025-05-07 14:04:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/620


---

<a id="602"></a>

### #602: [Feature Request] Show retry policy on activity info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/602 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-17 12:23:55.000 UTC (8 months ago) |
| **Updated** | 2025-12-05 14:38:18.000 UTC |
| **Closed** | 2025-12-05 14:38:18.000 UTC |
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

<a id="601"></a>

### #601: [Feature Request] Expose `WorkflowInboundCallInterceptor::init()`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/601 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-04-17 11:59:47.000 UTC (8 months ago) |
| **Updated** | 2025-04-17 11:59:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Expose `WorkflowInboundCallInterceptor::init()` like in [Java SDK](https://github.com/temporalio/sdk-java/blob/a4c9e68254e4eae7e46ee0cd6c8f3e0d13dfe183/temporal-sdk/src/main/java/io/temporal/common/interceptors/WorkflowInboundCallsInterceptor.java#L182-L194)


---

<a id="595"></a>

### #595: [Bug] Incorrect generic extends of RuleFactoryInterface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/595 |
| **State** | OPEN |
| **Author** | KorDum (KorDum) |
| **Created** | 2025-04-14 06:26:31.000 UTC (9 months ago) |
| **Updated** | 2025-04-14 06:26:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

There is no correct way to use generic for your marshall-types.

### Describe the bug

`RuleFactoryInterface` is not a generic interface and does not give you the ability to specify your own type:

```php
/**
 * @extends TypeInterface<mixed>
 */
interface RuleFactoryInterface extends TypeInterface {}
```

Therefore, when using this interface together with an abstract Type (like `UuidType`) we get this error from phpstan

>   Class Temporal\Internal\Marshaller\Type\Type specifies template type TMarshalType of interface Temporal\Internal\Marshaller\Type\TypeInterface as int<0, max> but it's already specified as mixed.  
> 🪪  generics.interfaceConflict

### Minimal Reproduction

```php
/**
 * @extends Type<non-negative-int>
 */
final class SomeType extends Type implements DetectableTypeInterface, RuleFactoryInterface
{
    #[Override]
    public function parse(mixed $value, mixed $current): Some
    {
        return Some::fromInt($value);
    }

    #[Override]
    public function serialize(mixed $value): int
    {
        return $value->toInt();
    }

    #[Override]
    public static function match(ReflectionNamedType $type): bool
    {
        return !$type->isBuiltin() && $type->getName() === Some::class;
    }

    #[Override]
    public static function makeRule(ReflectionProperty $property): ?MarshallingRule
    {
        $type = $property->getType();

        if (!$type instanceof ReflectionNamedType || !self::match($type)) {
            return null;
        }

        if ($type->allowsNull()) {
            return new MarshallingRule(
                name: $property->getName(),
                type: NullableType::class,
                of: new MarshallingRule(
                    type: self::class,
                    of: $type->getName(),
                ),
            );
        }

        return new MarshallingRule(
            name: $property->getName(),
            type: self::class,
            of: $type->getName(),
        );
    }
}
```

### Environment/Versions

- Temporal SDK Version: 2.13.4



---

<a id="588"></a>

### #588: Heartbeating activities should be interrupted when the activities are paused.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/588 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-01 23:43:09.000 UTC (9 months ago) |
| **Updated** | 2025-07-09 07:49:29.000 UTC |
| **Closed** | 2025-07-09 07:49:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/602


---

<a id="587"></a>

### #587: [Feature Request] Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/587 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 15:05:25.000 UTC (9 months ago) |
| **Updated** | 2025-03-25 15:05:25.000 UTC |
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

<a id="584"></a>

### #584: [Feature Request] Make Destroyable interface public

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/584 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-03-17 13:33:53.000 UTC (9 months ago) |
| **Updated** | 2025-09-12 08:28:57.000 UTC |
| **Closed** | 2025-09-12 08:28:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

It might be a good idea to make the Destroyable interface public so that developers can define memory cleanup rules when unloading a Workflow from memory.


---

<a id="582"></a>

### #582: Set Temporal-Namespace header on every gRPC request

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/582 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-03-13 17:00:43.000 UTC (10 months ago) |
| **Updated** | 2025-03-15 05:31:38.000 UTC |
| **Closed** | 2025-03-15 05:31:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/475


---

<a id="574"></a>

### #574: [Feature Request] Support "RawValue" non-converted values

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/574 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:27:54.000 UTC (10 months ago) |
| **Updated** | 2025-02-21 20:27:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/603, need a simple payload wrapper that tells converters not to apply conversion.



---

<a id="567"></a>

### #567: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/567 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:24.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 20:44:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

<a id="566"></a>

### #566: [Feature Request] Stop registering magic methods as Activity methods

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/566 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-02-11 19:06:20.000 UTC (11 months ago) |
| **Updated** | 2025-02-19 16:45:20.000 UTC |
| **Closed** | 2025-02-19 16:45:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.14.0 |

#### Description

Stop registering magic methods like constructor as Activity methods


---

<a id="559"></a>

### #559: [Feature Request] Support Priority Annotations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/559 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-03 18:23:02.000 UTC (11 months ago) |
| **Updated** | 2025-06-05 19:09:28.000 UTC |
| **Closed** | 2025-06-05 19:09:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.15.0 |

#### Description

**Is your feature request related to a problem? Please describe.**
Add support for attaching priority to workflows/activities

**Describe the solution you'd like**
See https://github.com/temporalio/features/issues/593 for details



---

<a id="558"></a>

### #558: Add `Patched()` and `DeprecatePatch()` APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/558 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:55:36.000 UTC (11 months ago) |
| **Updated** | 2025-07-09 08:01:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

### Describe the solution you'd like

In short:

- Add the `Patched(patchId, memoized): boolean` and `DeprecatePatch(patchId, memoized): boolean` APIs. Refer to Core's implementation (once it is ready).

- (Maybe) Deprecate the `GetVersion` API.

See temporalio/features#591 for details.


---

<a id="555"></a>

### #555: [Bug] Unrecognized date time interval format on unmarshalling

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/555 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-01-18 11:46:20.000 UTC (11 months ago) |
| **Updated** | 2025-02-10 17:35:39.000 UTC |
| **Closed** | 2025-02-10 17:01:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.13.0 |

#### Description

### Describe the bug

See https://github.com/temporalio/features/issues/580

<details>

```
Running check Harness\Feature\Schedule\Basic\FeatureChecker::check FAILED
Temporal\Exception\MarshallerException {#1282
  #message: "Unable to unmarshal field `info` of class Temporal\Client\Schedule\Info\ScheduleListEntry"
  #code: 0
  #file: "./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php"
  #line: 90
  -previous: Temporal\Exception\MarshallerException {#1111
    #message: "Unable to unmarshal field `spec` of class Temporal\Client\Schedule\Info\ScheduleListInfo"
    #code: 0
    #file: "./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php"
    #line: 90
    -previous: Temporal\Exception\MarshallerException {#1154
      #message: "Unable to unmarshal field `jitter` of class Temporal\Client\Schedule\Spec\ScheduleSpec"
      #code: 0
      #file: "./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php"
      #line: 90
      -previous: InvalidArgumentException {#1283
        #message: "Unrecognized date time interval format"
        #code: 0
        #file: "./vendor/temporal/sdk/src/Internal/Support/DateInterval.php"
        #line: 109
        trace: {
          ./vendor/temporal/sdk/src/Internal/Support/DateInterval.php:109 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Type/DateIntervalType.php:78 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
          Temporal\Client\Schedule\Spec\ScheduleSpec->Temporal\Internal\Marshaller\Mapper\{closure}() {}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Type/ObjectType.php:79 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
          Temporal\Client\Schedule\Info\ScheduleListInfo->Temporal\Internal\Marshaller\Mapper\{closure}() {}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Type/ObjectType.php:79 { …}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
          Temporal\Client\Schedule\Info\ScheduleListEntry->Temporal\Internal\Marshaller\Mapper\{closure}() {}
          ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
          ./vendor/temporal/sdk/src/Client/ScheduleClient.php:[166](https://github.com/temporalio/features/actions/runs/12834770491/job/35792794659?pr=577#step:10:167) { …}
          Temporal\Client\ScheduleClient->Temporal\Client\{closure}() {}
          ./vendor/temporal/sdk/src/Client/Common/Paginator.php:35 { …}
          ./vendor/temporal/sdk/src/Client/Common/Paginator.php:50 { …}
          ./vendor/temporal/sdk/src/Client/ScheduleClient.php:173 { …}
          /app/features/schedule/basic/feature.php:81 {
            Harness\Feature\Schedule\Basic\FeatureChecker::check(ScheduleClientInterface $client, WorkflowClientInterface $wfClient, Feature $feature, State $runtime): void
            › find:
            › foreach ($client->listSchedules() as $schedule) {
            ›     if ($schedule->scheduleId === $scheduleId) {
          }
          Harness\Feature\Schedule\Basic\FeatureChecker::check() {}
          ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
          ./vendor/spiral/core/src/Container.php:292 { …}
          /app/harness/php/runner.php:108 { …}
          {closure}() {}
          ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
          ./vendor/spiral/core/src/Container.php:292 { …}
          ./vendor/spiral/core/src/Container.php:404 { …}
          ./vendor/spiral/core/src/ContainerScope.php:46 { …}
          ./vendor/spiral/core/src/Container.php:399 { …}
          ./vendor/spiral/core/src/Container.php:181 { …}
          /app/harness/php/runner.php:99 { …}
        }
      }
      trace: {
        ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:90 { …}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Type/ObjectType.php:79 { …}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
        Temporal\Client\Schedule\Info\ScheduleListInfo->Temporal\Internal\Marshaller\Mapper\{closure}() {}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Type/ObjectType.php:79 { …}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
        Temporal\Client\Schedule\Info\ScheduleListEntry->Temporal\Internal\Marshaller\Mapper\{closure}() {}
        ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
        ./vendor/temporal/sdk/src/Client/ScheduleClient.php:166 { …}
        Temporal\Client\ScheduleClient->Temporal\Client\{closure}() {}
        ./vendor/temporal/sdk/src/Client/Common/Paginator.php:35 { …}
        ./vendor/temporal/sdk/src/Client/Common/Paginator.php:50 { …}
        ./vendor/temporal/sdk/src/Client/ScheduleClient.php:[173](https://github.com/temporalio/features/actions/runs/12834770491/job/35792794659?pr=577#step:10:174) { …}
        /app/features/schedule/basic/feature.php:81 {
          Harness\Feature\Schedule\Basic\FeatureChecker::check(ScheduleClientInterface $client, WorkflowClientInterface $wfClient, Feature $feature, State $runtime): void
          › find:
          › foreach ($client->listSchedules() as $schedule) {
          ›     if ($schedule->scheduleId === $scheduleId) {
        }
        Harness\Feature\Schedule\Basic\FeatureChecker::check() {}
        ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
        ./vendor/spiral/core/src/Container.php:292 { …}
        /app/harness/php/runner.php:108 { …}
        {closure}() {}
        ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
        ./vendor/spiral/core/src/Container.php:292 { …}
        ./vendor/spiral/core/src/Container.php:404 { …}
        ./vendor/spiral/core/src/ContainerScope.php:46 { …}
        ./vendor/spiral/core/src/Container.php:399 { …}
        ./vendor/spiral/core/src/Container.php:[181](https://github.com/temporalio/features/actions/runs/12834770491/job/35792794659?pr=577#step:10:182) { …}
        /app/harness/php/runner.php:99 { …}
      }
    }
    trace: {
      ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:90 { …}
      ./vendor/temporal/sdk/src/Internal/Marshaller/Type/ObjectType.php:79 { …}
      ./vendor/temporal/sdk/src/Internal/Marshaller/Mapper/AttributeMapper.php:156 { …}
      Temporal\Client\Schedule\Info\ScheduleListEntry->Temporal\Internal\Marshaller\Mapper\{closure}() {}
      ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:88 { …}
      ./vendor/temporal/sdk/src/Client/ScheduleClient.php:166 { …}
      Temporal\Client\ScheduleClient->Temporal\Client\{closure}() {}
      ./vendor/temporal/sdk/src/Client/Common/Paginator.php:35 { …}
      ./vendor/temporal/sdk/src/Client/Common/Paginator.php:50 { …}
      ./vendor/temporal/sdk/src/Client/ScheduleClient.php:173 { …}
      /app/features/schedule/basic/feature.php:81 {
        Harness\Feature\Schedule\Basic\FeatureChecker::check(ScheduleClientInterface $client, WorkflowClientInterface $wfClient, Feature $feature, State $runtime): void
        › find:
        › foreach ($client->listSchedules() as $schedule) {
        ›     if ($schedule->scheduleId === $scheduleId) {
      }
      Harness\Feature\Schedule\Basic\FeatureChecker::check() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
      ./vendor/spiral/core/src/Container.php:292 { …}
      /app/harness/php/runner.php:108 { …}
      {closure}() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
      ./vendor/spiral/core/src/Container.php:292 { …}
      ./vendor/spiral/core/src/Container.php:404 { …}
      ./vendor/spiral/core/src/ContainerScope.php:46 { …}
      ./vendor/spiral/core/src/Container.php:399 { …}
      ./vendor/spiral/core/src/Container.php:181 { …}
      /app/harness/php/runner.php:99 { …}
    }
  }
  trace: {
    ./vendor/temporal/sdk/src/Internal/Marshaller/Marshaller.php:90 { …}
    ./vendor/temporal/sdk/src/Client/ScheduleClient.php:166 { …}
    Temporal\Client\ScheduleClient->Temporal\Client\{closure}() {}
    ./vendor/temporal/sdk/src/Client/Common/Paginator.php:35 { …}
    ./vendor/temporal/sdk/src/Client/Common/Paginator.php:50 { …}
    ./vendor/temporal/sdk/src/Client/ScheduleClient.php:173 { …}
    /app/features/schedule/basic/feature.php:81 {
      Harness\Feature\Schedule\Basic\FeatureChecker::check(ScheduleClientInterface $client, WorkflowClientInterface $wfClient, Feature $feature, State $runtime): void
      › find:
      › foreach ($client->listSchedules() as $schedule) {
      ›     if ($schedule->scheduleId === $scheduleId) {
    }
    Harness\Feature\Schedule\Basic\FeatureChecker::check() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    /app/harness/php/runner.php:108 { …}
    {closure}() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    ./vendor/spiral/core/src/Container.php:404 { …}
    ./vendor/spiral/core/src/ContainerScope.php:46 { …}
    ./vendor/spiral/core/src/Container.php:399 { …}
    ./vendor/spiral/core/src/Container.php:181 { …}
    /app/harness/php/runner.php:99 { …}
  }
}
-> /app/features/schedule/basic/feature.php:81
MarshallerException
Unable to unmarshal field `info` of class Temporal\Client\Schedule\Info\ScheduleListEntry
MarshallerException
Unable to unmarshal field `spec` of class Temporal\Client\Schedule\Info\ScheduleListInfo
MarshallerException
Unable to unmarshal field `jitter` of class Temporal\Client\Schedule\Spec\ScheduleSpec
InvalidArgumentException
Unrecognized date time interval format
```

</details>

Yet another:
https://github.com/temporalio/features/issues/582

<details>

```
Running check Harness\Feature\ContinueAsNew\ContinueAsSame\FeatureChecker::check FAILED
Temporal\Exception\Client\TimeoutException {#325
  #message: "Deadline Exceeded (code: 4)"
  #code: 4
  #file: "./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php"
  #line: 291
  -previous: Temporal\Exception\Client\ServiceClientException {#307
    #message: "Deadline Exceeded (code: 4)"
    #code: 4
    #file: "./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php"
    #line: [28](https://github.com/temporalio/features/actions/runs/12835436433/job/35794872814?pr=577#step:9:29)4
    -status: Google\Rpc\Status {#314
      message: "google.rpc.Status"
      values: []
    }
    trace: {
      ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:284 { …}
      ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:252 { …}
      ./vendor/temporal/sdk/src/Client/GRPC/ServiceClient.php:137 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:576 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:491 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:423 { …}
      ./vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:92 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:432 { …}
      /app/features/continue_as_new/continue_as_same/feature.php:62 {
        Harness\Feature\ContinueAsNew\ContinueAsSame\FeatureChecker::check(WorkflowStubInterface $stub): void
        › ): void {
        ›     Assert::same($stub->getResult(), INPUT_DATA);
        ›     # Workflow ID does not change after continue as new
      }
      Harness\Feature\ContinueAsNew\ContinueAsSame\FeatureChecker::check() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
      ./vendor/spiral/core/src/Container.php:[29](https://github.com/temporalio/features/actions/runs/12835436433/job/35794872814?pr=577#step:9:30)2 { …}
      /app/harness/php/runner.php:108 { …}
      {closure}() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
      ./vendor/spiral/core/src/Container.php:292 { …}
      ./vendor/spiral/core/src/Container.php:404 { …}
      ./vendor/spiral/core/src/ContainerScope.php:46 { …}
      ./vendor/spiral/core/src/Container.php:399 { …}
      ./vendor/spiral/core/src/Container.php:181 { …}
      /app/harness/php/runner.php:99 { …}
    }
  }
  trace: {
    ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:291 { …}
    ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:252 { …}
    ./vendor/temporal/sdk/src/Client/GRPC/ServiceClient.php:137 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:576 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:491 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:423 { …}
    ./vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:92 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:4[32](https://github.com/temporalio/features/actions/runs/12835436433/job/35794872814?pr=577#step:9:33) { …}
    /app/features/continue_as_new/continue_as_same/feature.php:62 {
      Harness\Feature\ContinueAsNew\ContinueAsSame\FeatureChecker::check(WorkflowStubInterface $stub): void
      › ): void {
      ›     Assert::same($stub->getResult(), INPUT_DATA);
      ›     # Workflow ID does not change after continue as new
    }
    Harness\Feature\ContinueAsNew\ContinueAsSame\FeatureChecker::check() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    /app/harness/php/runner.php:108 { …}
    {closure}() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    ./vendor/spiral/core/src/Container.php:404 { …}
    ./vendor/spiral/core/src/ContainerScope.php:46 { …}
    ./vendor/spiral/core/src/Container.php:[39](https://github.com/temporalio/features/actions/runs/12835436433/job/35794872814?pr=577#step:9:40)9 { …}
    ./vendor/spiral/core/src/Container.php:181 { …}
    /app/harness/php/runner.php:99 { …}
  }
}
-> /app/features/continue_as_new/continue_as_same/feature.php:62
TimeoutException
Deadline Exceeded (code: 4)
ServiceClientException
Deadline Exceeded (code: 4)
```

</details>


---

<a id="550"></a>

### #550: Check Harness and Acceptance test

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/550 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-01-11 00:03:32.000 UTC (12 months ago) |
| **Updated** | 2025-01-13 23:38:18.000 UTC |
| **Closed** | 2025-01-13 23:38:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug, Tests |
| **Assignees** | None |
| **Milestone** | 2.12.3 |

#### Description

Check why Harness test is failing:
Test case: https://github.com/temporalio/features/blob/5a0e5ad50ec0c927bf7acca2cfac5fb14f2bd09a/features/child_workflow/throws_on_execute/feature.php
Run: https://github.com/temporalio/features/actions/runs/12713467168/job/35457744674

<details>

```
Running check Harness\Feature\ChildWorkflow\ThrowsOnExecute\FeatureChecker::check FAILED
Temporal\Exception\Client\TimeoutException {#261
  #message: "Deadline Exceeded (code: 4)"
  #code: 4
  #file: "./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php"
  #line: 291
  -previous: Temporal\Exception\Client\ServiceClientException {#246
    #message: "Deadline Exceeded (code: 4)"
    #code: 4
    #file: "./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php"
    #line: 284
    -status: Google\Rpc\Status {#262
      message: "google.rpc.Status"
      values: []
    }
    trace: {
      ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:284 { …}
      ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:252 { …}
      ./vendor/temporal/sdk/src/Client/GRPC/ServiceClient.php:137 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:576 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:491 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:423 { …}
      ./vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:92 { …}
      ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:432 { …}
      /home/runner/work/features/features/features/features/child_workflow/throws_on_execute/feature.php:49 {
        Harness\Feature\ChildWorkflow\ThrowsOnExecute\FeatureChecker::check(WorkflowStubInterface $stub): void
        › try {
        ›     $stub->getResult();
        ›     throw new \Exception('Expected exception');
      }
      Harness\Feature\ChildWorkflow\ThrowsOnExecute\FeatureChecker::check() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
      ./vendor/spiral/core/src/Container.php:292 { …}
      /home/runner/work/features/features/features/harness/php/runner.php:108 { …}
      {closure}() {}
      ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
      ./vendor/spiral/core/src/Container.php:292 { …}
      ./vendor/spiral/core/src/Container.php:404 { …}
      ./vendor/spiral/core/src/ContainerScope.php:46 { …}
      ./vendor/spiral/core/src/Container.php:399 { …}
      ./vendor/spiral/core/src/Container.php:[181](https://github.com/temporalio/features/actions/runs/12713467168/job/35457744674#step:10:182) { …}
      /home/runner/work/features/features/features/harness/php/runner.php:99 { …}
    }
  }
  trace: {
    ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:291 { …}
    ./vendor/temporal/sdk/src/Client/GRPC/BaseClient.php:252 { …}
    ./vendor/temporal/sdk/src/Client/GRPC/ServiceClient.php:137 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:576 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:491 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:423 { …}
    ./vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php:92 { …}
    ./vendor/temporal/sdk/src/Internal/Client/WorkflowStub.php:432 { …}
    /home/runner/work/features/features/features/features/child_workflow/throws_on_execute/feature.php:49 {
      Harness\Feature\ChildWorkflow\ThrowsOnExecute\FeatureChecker::check(WorkflowStubInterface $stub): void
      › try {
      ›     $stub->getResult();
      ›     throw new \Exception('Expected exception');
    }
    Harness\Feature\ChildWorkflow\ThrowsOnExecute\FeatureChecker::check() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:59 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    /home/runner/work/features/features/features/harness/php/runner.php:108 { …}
    {closure}() {}
    ./vendor/spiral/core/src/Internal/Invoker.php:77 { …}
    ./vendor/spiral/core/src/Container.php:292 { …}
    ./vendor/spiral/core/src/Container.php:404 { …}
    ./vendor/spiral/core/src/ContainerScope.php:46 { …}
    ./vendor/spiral/core/src/Container.php:399 { …}
    ./vendor/spiral/core/src/Container.php:181 { …}
    /home/runner/work/features/features/features/harness/php/runner.php:99 { …}
  }
}
-> /home/runner/work/features/features/features/features/child_workflow/throws_on_execute/feature.php:49
TimeoutException
Deadline Exceeded (code: 4)
ServiceClientException
Deadline Exceeded (code: 4)
```

</details>


---

<a id="548"></a>

### #548: [Bug] Namespace from ClientOptions in ScheduleClient constructor not respected in createSchedule

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/548 |
| **State** | CLOSED |
| **Author** | AleksandrKosovS (Aleksandr Kosov) |
| **Created** | 2025-01-08 17:48:35.000 UTC (1 years ago) |
| **Updated** | 2025-01-09 16:49:38.000 UTC |
| **Closed** | 2025-01-09 16:49:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.12.2 |

#### Description

### What are you really trying to do?

I want to create a schedule in a specific Temporal namespace by specifying the namespace in the ScheduleClient constructor.

### Describe the bug

When I create a schedule without explicitly passing ScheduleOptions, the schedule is created in the default namespace instead of the namespace provided in ClientOptions during the ScheduleClient initialization.

This happens because of this two lines in the source code: [1](https://github.com/temporalio/sdk-php/blob/master/src/Client/ScheduleClient.php#L77), [2](https://github.com/temporalio/sdk-php/blob/master/src/Client/ScheduleClient.php#L84), where the namespace defaults to 'default'. I expect the namespace provided in the `ScheduleClient` constructor to be used as the default, similar to the behavior in [this line](https://github.com/temporalio/sdk-php/blob/master/src/Client/ScheduleClient.php#L139).

### Minimal Reproduction

```php
use Temporal\Client\ScheduleClient;
use Temporal\Client\GRPC\ServiceClient;
use Temporal\Client\ClientOptions;
use Temporal\Client\Schedule;

$serviceClient = new ServiceClient(new WorkflowServiceClient('localhost:7233', [
     'credentials' => ChannelCredentials::createInsecure(),
]));

$scheduleClient = new ScheduleClient(
    $serviceClient,
    (new ClientOptions())->withNamespace('my-namespace'),
);
$handle1 = $handle = $client->createSchedule(
    Schedule\Schedule::new(),
);
// $handle1->namespace contains 'default' 

$client->getHandle($handle1->getID())->trigger(); // throws an exception
$client->getHandle($handle1->getID(), 'default')->trigger(); // works fine

// just in case, this works as expected
$handle2 = $handle = $client->createSchedule(
    Schedule\Schedule::new(),
    options: (Schedule\ScheduleOptions::new())->withNamespace('my-namespace'),
);
// $handle2->namespace contains 'my-namespace'
$client->getHandle($handle2->getID())->trigger(); // works fine
``` 

### Expected Behavior
When `ScheduleClient` is initialized with `ClientOptions` specifying a namespace, that namespace should be used as the default for creating schedules.

### Environment/Versions

- OS and processor: **M2 Mac**
- Temporal Version: **Temporal 1.26.2, SDK 2.12.0**
- Are you using Docker or Kubernetes or building Temporal from source? **Docker**


---

<a id="546"></a>

### #546: [Feature Request] Access to workflow/activity instance from context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/546 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:04:10.000 UTC (1 years ago) |
| **Updated** | 2025-05-01 13:48:25.000 UTC |
| **Closed** | 2025-05-01 13:48:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.14.0 |

#### Description

### Describe the solution you'd like

Provide access to the Temporal created/owned workflow and activity instance from their respective contexts. See https://github.com/temporalio/features/issues/572.



---

<a id="545"></a>

### #545: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/545 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:03:22.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 14:03:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a static workflow-local var that is scoped only to the current workflow when accessed via code. Do this however best in PHP to match how one might create a thread local or "async" local. See https://github.com/temporalio/features/issues/571.


---

<a id="533"></a>

### #533: [Feature Request] Workflow logger

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/533 |
| **State** | CLOSED |
| **Author** | cv65kr (Kajetan) |
| **Created** | 2024-12-06 15:07:16.000 UTC (1y 1m ago) |
| **Updated** | 2025-04-09 09:48:50.000 UTC |
| **Closed** | 2025-04-09 09:48:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.14.0 |

#### Description

### Describe the solution you'd like

Possibility to add logs in workflow class like in others SDK

https://github.com/temporalio/sdk-java/blob/master/temporal-sdk/src/main/java/io/temporal/workflow/Workflow.java#L961



---

<a id="524"></a>

### #524: [Feature Request] Allow mocking child workflows like activites

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/524 |
| **State** | OPEN |
| **Author** | KorDum (KorDum) |
| **Created** | 2024-11-07 16:27:04.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-07 17:21:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature, enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

In a situation where one workflow starts a child workflow, there is no way to replace the child workflow with a stub. Or I don't understand how to do it - there is no word about it in the documentation.

I found some strange behavior that led me to these thoughts.
Let's imagine that we have two workflows:

1. Workflow A
2. Workflow B, which is run via `asyncDetached` in Workflow A. Workflow B has a timer for 30 minutes

This tricky setup of two workflows allows to detect a bug (as I think). If we run an integration test on Workflow A where only the activity are replaced with stubs, then run an integration test on Workflow B, the timer waits an honest 30 minutes.

If we run only the test on Workflow B, the timer will run instantly without any waiting.

### Describe the solution you'd like

It seems that if you replace Workflow B in the test for Workflow A with a stub, this strange problem goes away.



---

<a id="517"></a>

### #517: [Feature Request] Support user metadata

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/517 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-15 12:36:56.000 UTC (1y 2m ago) |
| **Updated** | 2025-06-16 13:47:07.000 UTC |
| **Closed** | 2025-06-16 13:47:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.15.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/486 and https://github.com/temporalio/sdk-go/pull/1597. Specifically, after https://github.com/temporalio/sdk-go/issues/1673:

- [x] Accept optional "static summary " and "static details" on all ways to start a workflow (start, signal with start, schedule, and child workflow) and populate user metadata with them
- [x] Accept optional "summary" when creating timers and populate user metadata with it
- [x] Accept optional "summary" when creating activities and populate user metadata with it
- [x] Handle `__temporal_workflow_metadata` query (see features issue and https://github.com/temporalio/sdk-go/pull/1597)
- [ ] Mark experimental


---

<a id="516"></a>

### #516: [Feature Request] Typed Search Attributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/516 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-10-07 17:13:59.000 UTC (1y 3m ago) |
| **Updated** | 2025-02-04 11:14:42.000 UTC |
| **Closed** | 2025-02-04 11:14:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.13.0 |

#### Description

see https://github.com/temporalio/features/issues/336


---

<a id="514"></a>

### #514: [Bug]  proto_codec_parse_message Empty searchAttributes child workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/514 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2024-10-07 04:43:31.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-08 05:47:35.000 UTC |
| **Closed** | 2024-10-08 05:47:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.12.0 |

#### Description

### Minimal Reproduction

```php
#[WorkflowInterface]
final class AWorkflow
{
    #[WorkflowMethod]
    public function start(bool $child = false): \Generator
    {
        if ($child){
            return;
        }
        
        
        yield Workflow::newChildWorkflowStub(
            self::class,
            ChildWorkflowOptions::new()
                ->withSearchAttributes([]) // bang 💥
        )->start(true);
    }
}
```

### Environment/Versions

version rr: 2024.2.1
version sdk: 2.11

### Additional context

```json
{
  "message": "proto_codec_parse_message: expected { character for map value",
  "source": "GoSDK",
  "stackTrace": "process event for default [panic]:\ngithub.com/temporalio/roadrunner-temporal/v5/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0x4000e9e460, 0x3?)\n\tgithub.com/temporalio/roadrunner-temporal/v5@v5.1.1/aggregatedpool/workflow.go:194 +0x360\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0x4000e80be8, 0x4000cb33b0, 0x20?, 0x1)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_event_handlers.go:1208 +0x1f0\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0x4000c49400, 0x40008f6a20)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:1152 +0x13f0\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0x4000e98b60, 0x40008f6a20, 0x4000c49400, 0x40005f1b30)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:917 +0x2b8\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0x4000e8e900, 0x40008f6a20)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:363 +0x334\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0x4000e8e900, {0x17926a0, 0x40008f6a20})\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:325 +0x70\ngo.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:444 +0x104\ncreated by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 45\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:423 +0x90",
  "encodedAttributes": null,
  "cause": null,
  "applicationFailureInfo": {
    "type": "PanicError",
    "nonRetryable": true,
    "details": null
  }

```

<details>
  <summary>Workflow events</summary>

```json
{
  "events": [
    {
      "eventId": "1",
      "eventTime": "2024-10-05T19:01:43.920084426Z",
      "eventType": "WorkflowExecutionStarted",
      "version": "0",
      "taskId": "1048647",
      "workerMayIgnore": false,
      "workflowExecutionStartedEventAttributes": {
        "workflowType": {
          "name": "ActivityRetry.greet"
        },
        "parentWorkflowNamespace": "",
        "parentWorkflowNamespaceId": "",
        "parentWorkflowExecution": null,
        "parentInitiatedEventId": "0",
        "taskQueue": {
          "name": "default",
          "kind": "Normal",
          "normalName": ""
        },
        "input": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "IkFudG9ueSI="
            }
          ]
        },
        "workflowExecutionTimeout": "60s",
        "workflowRunTimeout": "60s",
        "workflowTaskTimeout": "10s",
        "continuedExecutionRunId": "",
        "initiator": "Unspecified",
        "continuedFailure": null,
        "lastCompletionResult": null,
        "originalExecutionRunId": "2f36f4fc-035d-47d1-8526-90bc35c70b48",
        "identity": "88@28ca3010650c",
        "firstExecutionRunId": "2f36f4fc-035d-47d1-8526-90bc35c70b48",
        "retryPolicy": null,
        "attempt": 1,
        "workflowExecutionExpirationTime": "2024-10-05T19:02:43.920Z",
        "cronSchedule": "",
        "firstWorkflowTaskBackoff": "0s",
        "memo": null,
        "searchAttributes": {
          "indexedFields": {}
        },
        "prevAutoResetPoints": null,
        "header": {
          "fields": {}
        },
        "parentInitiatedEventVersion": "0",
        "workflowId": "dba488dc-d4e2-4f7c-8d0b-8f85b857b834",
        "sourceVersionStamp": null
      }
    },
    {
      "eventId": "2",
      "eventTime": "2024-10-05T19:01:43.920196051Z",
      "eventType": "WorkflowTaskScheduled",
      "version": "0",
      "taskId": "1048648",
      "workerMayIgnore": false,
      "workflowTaskScheduledEventAttributes": {
        "taskQueue": {
          "name": "default",
          "kind": "Normal",
          "normalName": ""
        },
        "startToCloseTimeout": "10s",
        "attempt": 1
      }
    },
    {
      "eventId": "3",
      "eventTime": "2024-10-05T19:01:43.927352301Z",
      "eventType": "WorkflowTaskStarted",
      "version": "0",
      "taskId": "1048654",
      "workerMayIgnore": false,
      "workflowTaskStartedEventAttributes": {
        "scheduledEventId": "2",
        "identity": "default:a2ba3d21-00b5-44c1-bfef-1700289170ab",
        "requestId": "6c1d2a10-b8d8-400e-8e0d-59d1cdf4671b",
        "suggestContinueAsNew": false,
        "historySizeBytes": "319"
      }
    },
    {
      "eventId": "4",
      "eventTime": "2024-10-05T19:01:43.952319551Z",
      "eventType": "WorkflowTaskFailed",
      "version": "0",
      "taskId": "1048658",
      "workerMayIgnore": false,
      "workflowTaskFailedEventAttributes": {
        "scheduledEventId": "2",
        "startedEventId": "3",
        "cause": "WorkflowWorkerUnhandledFailure",
        "failure": {
          "message": "proto_codec_parse_message: expected { character for map value",
          "source": "GoSDK",
          "stackTrace": "process event for default [panic]:\ngithub.com/temporalio/roadrunner-temporal/v5/aggregatedpool.(*Workflow).OnWorkflowTaskStarted(0x4000e9e460, 0x3?)\n\tgithub.com/temporalio/roadrunner-temporal/v5@v5.1.1/aggregatedpool/workflow.go:194 +0x360\ngo.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0x4000e80be8, 0x4000cb33b0, 0x20?, 0x1)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_event_handlers.go:1208 +0x1f0\ngo.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0x4000c49400, 0x40008f6a20)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:1152 +0x13f0\ngo.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0x4000e98b60, 0x40008f6a20, 0x4000c49400, 0x40005f1b30)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:917 +0x2b8\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0x4000e8e900, 0x40008f6a20)\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:363 +0x334\ngo.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0x4000e8e900, {0x17926a0, 0x40008f6a20})\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:325 +0x70\ngo.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:444 +0x104\ncreated by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 45\n\tgo.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:423 +0x90",
          "encodedAttributes": null,
          "cause": null,
          "applicationFailureInfo": {
            "type": "PanicError",
            "nonRetryable": true,
            "details": null
          }
        },
        "identity": "default:a2ba3d21-00b5-44c1-bfef-1700289170ab",
        "baseRunId": "",
        "newRunId": "",
        "forkEventVersion": "0",
        "binaryChecksum": "",
        "workerVersion": null
      }
    },
    {
      "eventId": "5",
      "eventTime": "2024-10-05T19:02:43.923306759Z",
      "eventType": "WorkflowExecutionTimedOut",
      "version": "0",
      "taskId": "1048675",
      "workerMayIgnore": false,
      "workflowExecutionTimedOutEventAttributes": {
        "retryState": "Timeout",
        "newExecutionRunId": ""
      }
    }
  ]
}

```

</details>




---

<a id="509"></a>

### #509: [Documentation] Message handler patterns

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/509 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-23 10:42:38.000 UTC (1y 3m ago) |
| **Updated** | 2025-02-12 20:47:28.000 UTC |
| **Closed** | 2025-02-12 20:47:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Add docs “Message handler patterns” like in Python:

- Add sample [like this](https://github.com/temporalio/samples-python/tree/message-passing/message_passing/safe_message_handlers)
- Add documentation [like this](https://docs.temporal.io/develop/python/message-passing#message-handler-patterns)
- cover `HandlerUnfinishedPolicy`


---

<a id="508"></a>

### #508: [Feature Request] Add  fallback Update/Signal/Query listeners

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/508 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-23 10:38:32.000 UTC (1y 3m ago) |
| **Updated** | 2025-04-01 21:19:05.000 UTC |
| **Closed** | 2025-04-01 21:19:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | 2.14.0 |

#### Description

### Is your feature request related to a problem? Please describe.

Right now we declare handlers dynamically using only known names.
It would be nice to have the ability to declare a handler for signals, queries, and updates whose names we don't know in advance.

### Describe the solution you'd like

Add something like `Workflow::registerListener()` function to define fallback update/signal/query listeners

### Additional context

[Java docs](https://docs.temporal.io/develop/java/message-passing#set-a-dynamic-signal)



---

<a id="507"></a>

### #507: Eliminate DestructMemorizedInstanceException

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/507 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-19 14:10:33.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-19 14:10:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We need to make the SDK stop throwing `DestructMemorizedInstanceException`.
I think we can remove the Workflow context and promises without throwing this exception.


---

<a id="503"></a>

### #503: UpdateWithStart SDK API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/503 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-09-12 21:47:44.000 UTC (1y 3m ago) |
| **Updated** | 2024-12-17 18:21:07.000 UTC |
| **Closed** | 2024-12-17 18:21:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.12.0 |

#### Description

Expose update-with-start operations via the SDK


---

<a id="502"></a>

### #502: Fix test case

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/502 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-10 10:15:36.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-10 10:15:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We need to figure out why the Harness test sometimes fails in CI.
This may be related to how many tests were executed before it.

https://github.com/temporalio/sdk-php/blob/28538c1a346df6273e882d235e417086ed9e19c7/tests/Acceptance/Harness/Schedule/BasicTest.php#L67-L75

![image](https://github.com/user-attachments/assets/bec2756d-2489-4930-aaed-f03410e58967)



---

<a id="498"></a>

### #498: [Bug] Got error `DataConverter is not set` when receiving an empty value

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/498 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-03 15:17:11.000 UTC (1y 4m ago) |
| **Updated** | 2025-08-26 19:47:18.000 UTC |
| **Closed** | 2025-08-26 19:47:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

It seems that #442 is not fully resolved. It works fine with a Untyped Workflow Stub, but not with a regular Stub.

> After some recent updates PHP SDK begin to fail on empty array payloads from Golang SDK, while we get EncodedValues their payloads are empty, as such - we don't require DataConverter to decode them.


---

<a id="497"></a>

### #497: [Feature Request] Dynamic Update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/497 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-08-26 20:42:48.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-10 16:36:07.000 UTC |
| **Closed** | 2024-09-10 16:36:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

Register Update methods dynamically like Signals


---

<a id="485"></a>

### #485: Document next retry delay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/485 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-08-09 19:12:27.000 UTC (1y 5m ago) |
| **Updated** | 2024-12-03 16:36:58.000 UTC |
| **Closed** | 2024-12-03 16:36:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Should be a pretty small thing—just need to provide docs and a code sample similar to Java: https://github.com/temporalio/documentation/pull/2940/files



---

<a id="481"></a>

### #481: The SDK does not use TaskQueue when searching for the Workflow to be started.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/481 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-08-05 15:18:35.000 UTC (1y 5m ago) |
| **Updated** | 2025-02-19 10:43:47.000 UTC |
| **Closed** | 2025-02-19 10:43:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.13.2 |

#### Description

### What are you really trying to do?

Registering two Workflows with the same name on different TaskQueues.

### Describe the bug

The SDK does not use TaskQueue when searching for the Workflow to be started. As a result, it might start another Workflow class (from a different TaskQueue).




---

<a id="478"></a>

### #478: [Feature Request] Support schedule search attribute update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/478 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-24 19:26:02.000 UTC (1y 5m ago) |
| **Updated** | 2024-09-16 18:23:33.000 UTC |
| **Closed** | 2024-09-16 18:23:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/512 and the Go implementation at https://github.com/temporalio/sdk-go/issues/1561



---

<a id="476"></a>

### #476: [Feature Request] Cloud Operations API Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/476 |
| **State** | OPEN |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-07-16 20:49:18.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-16 20:49:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As described in https://github.com/temporalio/features/issues/440, add support for the Cloud Operations APIs to PHP.


---

<a id="472"></a>

### #472: [Feature Request] Support "query" when listing schedules

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/472 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-08 14:25:15.000 UTC (1y 6m ago) |
| **Updated** | 2024-12-17 18:43:15.000 UTC |
| **Closed** | 2024-12-17 18:43:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.12.0 |

#### Description

### Describe the solution you'd like

Need to support the query option when listing schedules same as we do when listing workflows.



---

<a id="466"></a>

### #466: Provide WorkflowId with StartWorkflowAction in Schedule API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/466 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-21 19:17:26.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-02 15:41:58.000 UTC |
| **Closed** | 2024-07-02 15:41:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.10.3 |

#### Description

If we don't provide WorkflowId in StartWorkflowAction (schedule API), we observe that Temporal generates Workflow IDs based on an empty value, which makes parallel execution of different Workflows started within the same second impossible.

![image](https://github.com/temporalio/sdk-php/assets/4152481/9fa49dd8-545a-492d-970e-18f83989698f)

The SDK has to always provide WorkflowId. That option is required in other SDKs but we can generate it under the hood if it was not specified.


---

<a id="465"></a>

### #465: [Feature Request] Accept search attributes in dev server startup

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/465 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-20 20:34:54.000 UTC (1y 6m ago) |
| **Updated** | 2025-02-05 07:30:56.000 UTC |
| **Closed** | 2025-02-05 07:30:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.13.0 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/494. With https://github.com/temporalio/cli/pull/593 deployed, users should be allowed to set search attributes in dev server option that translate to `--search-attribute` calls.


---

<a id="464"></a>

### #464: [Bug] ChildWorkflowStub should only send singnals using WorkflowID, not RunID

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/464 |
| **State** | CLOSED |
| **Author** | wolfy-j (Anton Tsitou) |
| **Created** | 2024-06-19 17:56:23.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-02 18:54:31.000 UTC |
| **Closed** | 2024-07-02 18:54:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.10.3 |

#### Description

### What are you really trying to do?
I'm trying to send a signal to child workflow that continued.

### Describe the bug
Signal is erroring as RunID changed but cached in WorkflowStub.

### Minimal Reproduction
Parent sending signals to child workflow that continued.

### Additional context
Can be bypassed using ExternalWorkflow stub.


---

<a id="463"></a>

### #463: Updates: retryable exceptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/463 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-18 20:12:11.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-12 06:24:03.000 UTC |
| **Closed** | 2024-07-12 06:24:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

When an Update fails with a retryable exception like RuntimeException the update should be retried.

Harness test case: https://github.com/temporalio/features/pull/485/commits/1403c20f1952a66e4ba59eb049e4ee333760293f


---

<a id="461"></a>

### #461: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/461 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:54:58.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 12:16:12.000 UTC |
| **Closed** | 2024-06-18 12:16:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="460"></a>

### #460: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/460 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:54:06.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 12:16:12.000 UTC |
| **Closed** | 2024-06-18 12:16:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="459"></a>

### #459: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/459 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-18 03:53:02.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 12:16:11.000 UTC |
| **Closed** | 2024-06-18 12:16:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="458"></a>

### #458: [Feature Request] Expose `WorkflowStub::getUpdateHandle()` method

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/458 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-17 21:28:30.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-07 16:41:46.000 UTC |
| **Closed** | 2024-08-07 16:41:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

Add something like `$stub->getUpdateHandle($updateId)`


---

<a id="457"></a>

### #457: Signal from signal-with-start must be processed before Workflow Handler initialization

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/457 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-14 19:11:29.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-07 17:04:54.000 UTC |
| **Closed** | 2024-08-07 17:04:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.11.0 |
| **Reactions** | 👀 1 |

#### Description

There is a bug with `startWithSignal()` method.

The Workflow method is initialized before signal call.
But signal must be executed before Workflow Handler.

>This feature is useful in scenarios where you want to ensure that a Workflow is running and that it receives specific information right from the beginning.
> https://docs.temporal.io/develop/typescript/message-passing#signal-with-start

> To be more precise, it is not even about knowing if the signal was received before the workflow execution. It is needed to ensure that signals are not lost if the main method decides to return. The most basic scenario is the main method returning a counter and a signal handler incrementing it.
> https://community.temporal.io/t/will-workflow-method-be-processed-first-or-signal/1564/2

Test case in Harness: https://github.com/temporalio/features/pull/485/commits/93523184eb9e49527112e208914c64d25123cb14

> [!CAUTION]
> Might be breaking change


---

<a id="456"></a>

### #456: [Feature Request] Add new options into WorkerOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/456 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-13 17:22:03.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-19 19:51:57.000 UTC |
| **Closed** | 2024-08-19 19:51:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

Sync WorkerOptions with https://github.com/temporalio/sdk-go/blob/30a29ce206a644072ccb687d28c2b0aca38281db/internal/worker.go#L36


---

<a id="455"></a>

### #455: Add Binary Protobuf Converter into default set

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/455 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-12 14:32:46.000 UTC (1y 7m ago) |
| **Updated** | 2024-07-02 14:45:36.000 UTC |
| **Closed** | 2024-07-02 14:45:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.10.3 |

#### Description

We have no ability to decode messages converted with binary/protobuf.

The converter should be added after the ProtoJsonConverter.
In this case PHP SDK will be able to decode binary/protobuf messages, and json/protobuf converter will still be used for marshalling by default.


---

<a id="454"></a>

### #454: Encode Failures using EncodedAttributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/454 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-12 11:12:12.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-07 17:39:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

That Harness test must be passed https://github.com/temporalio/features/pull/485/commits/29aed00e592d0be7449c61e4a7adab4ddcaecc33

> Failure.message should be "Encoded failure" and Failure.stack_trace should be "". 


---

<a id="453"></a>

### #453: ContinueAsNew options dto doesn't inherit Workflow's Task Queue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/453 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-06 16:41:51.000 UTC (1y 7m ago) |
| **Updated** | 2024-07-02 19:52:35.000 UTC |
| **Closed** | 2024-07-02 19:52:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.10.3 |

#### Description

ContinueAsNew options DTO doesn't inherit Workflow's TaskQueue but it must do it.

> By default, a versioned Task Queue's Continue-as-New function starts the continued Workflow on the same compatible set as the original Workflow.
> https://docs.temporal.io/workers#where-to-set-task-queues

Discovered in https://github.com/temporalio/features/pull/485/commits/a1abdd06d66a3bbd975cc5fe08d65a794f2e6e49


---

<a id="451"></a>

### #451: Child Workflow doesn't inherit parent's Task Queue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/451 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-06 13:46:21.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-11 16:13:24.000 UTC |
| **Closed** | 2024-06-11 16:13:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.10.3 |

#### Description

Looks like a Child Workflow doesn't inherit parent's TaskQueue but it must do it.

> A Task Queue name can be provided when spawning a Child Workflow Execution:
> This is optional. A Child Workflow Execution inherits the Task Queue name from its Parent Workflow Execution if one is not provided.
> https://docs.temporal.io/workers#where-to-set-task-queues

If the Task Queue for a Child Workflow isn't provided, no Task Queue value is sent to RoadRunner.
RoadRunner doesn't handle it.

I suppose we have to fix it in PHP side to always send Child Workflow Task Queue.

Discovered in https://github.com/temporalio/features/pull/485/commits/32397df42153f68109a49ee6c05310262a3d65d2


---

<a id="450"></a>

### #450: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/450 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-05 18:05:03.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-18 12:16:11.000 UTC |
| **Closed** | 2024-06-18 12:16:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="449"></a>

### #449: Testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/449 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2024-06-05 16:56:59.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-05 18:04:51.000 UTC |
| **Closed** | 2024-06-05 18:04:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

testing


---

<a id="440"></a>

### #440: Expose shouldContinueAsNew in WorkflowInfo

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/440 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-05-21 18:37:34.000 UTC (1y 7m ago) |
| **Updated** | 2024-08-06 13:00:59.000 UTC |
| **Closed** | 2024-08-06 13:00:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

See https://github.com/temporalio/features/issues/16


---

<a id="437"></a>

### #437: Convert Policy constants into enum cases

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/437 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-05-20 10:04:27.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-20 17:09:10.000 UTC |
| **Closed** | 2024-05-20 17:09:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.10.0 |

#### Description

The SDK was released when PHP did not yet have enumerations. Starting with PHP 8.1, they became available.
The new SDK code is already being written using enumerations.

For consistency, all Policy classes should be converted from constants to enums.


---

<a id="433"></a>

### #433: [Bug] Missing key mapping in ArrayType marsheller

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/433 |
| **State** | CLOSED |
| **Author** | wolfy-j (Anton Tsitou) |
| **Created** | 2024-05-14 22:21:34.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-20 17:44:06.000 UTC |
| **Closed** | 2024-05-15 13:18:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | 2.9.2 |

#### Description

### What are you really trying to do?

I'm trying to use #MarshalArray with string keys.

### Describe the bug
Data being serialized with proper keys but unserialized inproperly.

### Minimal Reproduction
Fix in ArrayType mapper, line: 85
```php
 foreach ($value as $i => $item) {
                $result[$i] = $this->type->parse($item, $current[$i] ?? null);
            }
```


---

<a id="421"></a>

### #421: [Feature Request] Add RpcRetryOption and use longer retry interval on RESOURCE_EXHAUSTED

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/421 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-04-16 16:13:08.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-10 18:57:30.000 UTC |
| **Closed** | 2024-05-10 18:57:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.9.0 |

#### Description

Currently, in client calls, we pass Retry Policy settings using the `\Temporal\Common\RetryOptions` DTO, which is also used in `$workflowOptions->withRetryOptions()`.

In the JAVA SDK for client calls (at the RPC level), a separated DTO `RpcRetryOption` is used, which has specific additional settings.

I suggest doing similarly: add an `RpcRetryOption` DTO, which will include a new option `CongestionInitialInterval`, affecting how `RESOURCE_EXHAUSTED` errors are handled. An option for Jitter could also be added (see https://github.com/temporalio/sdk-java/pull/1465)

To ensure backward compatibility, initially, `RpcRetryOption` could inherit from `RetryOptions`.




---

<a id="416"></a>

### #416: Support for WorkflowIdConflictPolicy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/416 |
| **State** | CLOSED |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-04-11 00:40:16.000 UTC (1y 9m ago) |
| **Updated** | 2024-04-16 09:40:50.000 UTC |
| **Closed** | 2024-04-16 09:40:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.9.0 |

#### Description

See https://github.com/temporalio/features/issues/437


---

<a id="400"></a>

### #400: [Feature Request] Expose OperatorServiceClient 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/400 |
| **State** | OPEN |
| **Author** | shanginn (Николай Шангин) |
| **Created** | 2024-02-16 13:00:03.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-16 13:00:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I want to have the ability to delete a namespace using PHP-SDK

### Describe the solution you'd like

There is already working OperatorServiceClient in the SDK, but it's not used anywhere, so in order to use it I need to reimplement BaseClient.



---

<a id="395"></a>

### #395: Expose next retry delay on Application Failure in all SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/395 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2024-02-02 22:35:18.000 UTC (1y 11m ago) |
| **Updated** | 2024-09-25 13:24:37.000 UTC |
| **Closed** | 2024-09-25 13:24:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | 2.11.0 |

#### Description

We recently added the ability for an activity to specify the next retry delay on failure via a [field on `ApplicationFailureInfo`](https://github.com/temporalio/api/blob/822966d29758cba3462d6f5ff198257fbaa426f6/temporal/api/failure/v1/message.proto#L49).

Expose this in the SDK.


---

<a id="385"></a>

### #385: [Bug] Failed hydrate null value

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/385 |
| **State** | CLOSED |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2024-01-13 09:07:24.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-15 18:14:58.000 UTC |
| **Closed** | 2024-01-15 17:13:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | 2.7.3 |
| **Reactions** | 😕 2 |

#### Description

### What are you really trying to do?

Pass null value to activity


<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Minimal Reproduction


<details>
  <summary>Code</summary>

```php
<?php

declare(strict_types=1);

namespace App\Workflow;

use Carbon\CarbonInterval;
use Temporal\Activity\ActivityInterface;
use Temporal\Activity\ActivityMethod;
use Temporal\Activity\ActivityOptions;
use Temporal\Workflow;
use Temporal\Workflow\WorkflowInterface;
use Vanta\Integration\Symfony\Temporal\Attribute\AssignWorker;

#[ActivityInterface]
#[AssignWorker('test')]
final class TestActivity
{
    #[ActivityMethod]
    public function foo(?string $pupa): ?string
    {
        return $pupa;
    }
}

#[WorkflowInterface]
#[AssignWorker('test')]
final class TestWorkflow
{
    /**
     * @var TestActivity
     */
    private $activity;

    public function __construct()
    {
        $this->activity = Workflow::newActivityStub(
            TestActivity::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(CarbonInterval::minutes(5))
                ->withTaskQueue('test')
        );
    }


    #[Workflow\WorkflowMethod]
    public function start(): \Generator
    {
        yield $this->activity->foo(null);
    }
}
```
</details>

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Temporal Server: 1.22.3, SDK: v2.7.0

### Additional context

<details>
  <summary>StackTrace</summary>

```json
{
  "message": "Failure exceeds size limit.",
  "source": "",
  "stackTrace": "",
  "encodedAttributes": null,
  "cause": {
    "message": "The passed value of type \"null\" can not be converted to required type \"string\"",
    "source": "PHP_SDK",
    "stackTrace": "Temporal\\Exception\\DataConverterException: The passed value of type \"null\" can not be converted to required type \"string\" in /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php:226\nStack trace:\n#0 /var/www/api/vendor/temporal/sdk/src/DataConverter/JsonConverter.php(110): Temporal\\DataConverter\\JsonConverter->errorInvalidType(Object(Temporal\\DataConverter\\Type), NULL)\n#1 /var/www/api/vendor/temporal/sdk/src/DataConverter/DataConverter.php(57): Temporal\\DataConverter\\JsonConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#2 /var/www/api/vendor/temporal/sdk/src/DataConverter/EncodedValues.php(137): Temporal\\DataConverter\\DataConverter->fromPayload(Object(Temporal\\Api\\Common\\V1\\Payload), Object(Temporal\\DataConverter\\Type))\n#3 /var/www/api/vendor/temporal/sdk/src/Internal/Declaration/Dispatcher/AutowiredPayloads.php(32): Temporal\\DataConverter\\EncodedValues->getValue(0, Object(ReflectionNamedType))\n#4 /var/www/api/vendor/temporal/sdk/src/Internal/Declaration/Instance.php(76): Temporal\\Internal\\Declaration\\Dispatcher\\AutowiredPayloads->dispatchValues(Object(App\\LoanApplication\\VantaBankWorkflow\\Workflow\\NewLoanApplicationB2pos\\TestActivity), Object(Temporal\\DataConverter\\EncodedValues))\n#5 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/InvokeActivity.php(101): Temporal\\Internal\\Declaration\\Instance::Temporal\\Internal\\Declaration\\{closure}(Object(Temporal\\DataConverter\\EncodedValues))\n#6 /var/www/api/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php(95): Temporal\\Internal\\Transport\\Router\\InvokeActivity::Temporal\\Internal\\Transport\\Router\\{closure}(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput))\n#7 /var/www/api/vendor/vanta/temporal-bundle/src/Interceptor/DoctrineActivityInboundInterceptor.php(34): Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput))\n#8 /var/www/api/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php(101): Vanta\\Integration\\Symfony\\Temporal\\Interceptor\\DoctrineActivityInboundInterceptor->handleActivityInbound(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput), Object(Temporal\\Internal\\Interceptor\\Pipeline))\n#9 /var/www/api/vendor/vanta/temporal-bundle/src/Interceptor/SentryActivityInboundInterceptor.php(41): Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput))\n#10 /var/www/api/vendor/temporal/sdk/src/Internal/Interceptor/Pipeline.php(101): Vanta\\Integration\\Symfony\\Temporal\\Interceptor\\SentryActivityInboundInterceptor->handleActivityInbound(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput), Object(Temporal\\Internal\\Interceptor\\Pipeline))\n#11 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router/InvokeActivity.php(105): Temporal\\Internal\\Interceptor\\Pipeline->__invoke(Object(Temporal\\Interceptor\\ActivityInbound\\ActivityInput))\n#12 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Router.php(82): Temporal\\Internal\\Transport\\Router\\InvokeActivity->handle(Object(Temporal\\Worker\\Transport\\Command\\ServerRequest), Array, Object(React\\Promise\\Deferred))\n#13 /var/www/api/vendor/temporal/sdk/src/Worker/Worker.php(93): Temporal\\Internal\\Transport\\Router->dispatch(Object(Temporal\\Worker\\Transport\\Command\\ServerRequest), Array)\n#14 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(422): Temporal\\Worker\\Worker->dispatch(Object(Temporal\\Worker\\Transport\\Command\\ServerRequest), Array)\n#15 /var/www/api/vendor/temporal/sdk/src/Internal/Transport/Server.php(61): Temporal\\WorkerFactory->onRequest(Object(Temporal\\Worker\\Transport\\Command\\ServerRequest), Array)\n#16 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(399): Temporal\\Internal\\Transport\\Server->dispatch(Object(Temporal\\Worker\\Transport\\Command\\ServerRequest), Array)\n#17 /var/www/api/vendor/temporal/sdk/src/WorkerFactory.php(270): Temporal\\WorkerFactory->dispatch('\\n\\xDD\\x05\\x08\\x07\\x12\\x0EInvokeAc...', Array)\n#18 /var/www/api/vendor/vant",
    "encodedAttributes": null,
    "cause": null,
    "applicationFailureInfo": {
      "type": "Temporal\\Exception\\InvalidArgumentException",
      "nonRetryable": false,
      "details": null
    }
  },
  "serverFailureInfo": {
    "nonRetryable": false
  }
}
```
</details>



---

<a id="369"></a>

### #369: Add PHP 8.3 in the CI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/369 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-10-29 21:01:30.000 UTC (2y 2m ago) |
| **Updated** | 2023-11-06 13:35:30.000 UTC |
| **Closed** | 2023-11-02 09:29:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.6.2 |

#### Description

*No description provided.*


---

<a id="368"></a>

### #368: Update google/common-protos to v4

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/368 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-10-29 21:00:45.000 UTC (2y 2m ago) |
| **Updated** | 2023-11-13 06:20:59.000 UTC |
| **Closed** | 2023-11-02 09:29:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.2 |

#### Description

[![dependency status](https://php.package.health/packages/temporal/sdk/dev-master/status.svg)](https://php.package.health/packages/temporal/sdk/dev-master)



---

<a id="360"></a>

### #360: [Feature Request][PHP] Start delay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/360 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-10-08 17:44:20.000 UTC (2y 3m ago) |
| **Updated** | 2023-11-23 08:13:28.000 UTC |
| **Closed** | 2023-11-23 08:13:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.7.0 |

#### Description

Add an experimental option `StartDelay` to `StartWorkflowOptions`.

`StartDelay` will cause Temporal to wait before dispatching the first workflow task.
If the workflow gets a signal before the delay, a workflow task will be dispatched and the rest
of the delay will be ignored.

ref: https://github.com/temporalio/sdk-go/releases/tag/v1.25.0


---

<a id="353"></a>

### #353: [Interceptors] Remove DataConverter from header value object

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/353 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-11 12:47:02.000 UTC (2y 4m ago) |
| **Updated** | 2023-10-12 13:44:42.000 UTC |
| **Closed** | 2023-10-12 13:44:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.7.0 |

#### Description

The way it's done now is that headers are not decoded if they're not requested, and are sent as is if they haven't been changed. And those values that were added through `withValue()` are encoded into Payload before sending.

Try to avoid DataConverter requirement:
headers on input will be decoded immediately and packed again only before sending.

_Originally posted by @roxblnfk in https://github.com/temporalio/sdk-php/pull/306#discussion_r1211664918_
            


---

<a id="346"></a>

### #346: SideEffects: cast returned value based on callable return type

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/346 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-01 17:30:24.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-05 16:48:55.000 UTC |
| **Closed** | 2023-09-05 16:48:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature, enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

In this code `$newUuid` should contain `UuidInterface` value, not string

```php
$newUuid = yield Workflow::sideEffect(static fn(): UuidInterface => Uuid::uuid4());
```


---

<a id="345"></a>

### #345: Add ability to pass UUID objects in arguments directly (not nested)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/345 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-09-01 17:30:11.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-05 16:48:54.000 UTC |
| **Closed** | 2023-09-05 16:48:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | 2.6.0 |

#### Description

*No description provided.*


---

<a id="325"></a>

### #325: [Feature Request] Add friendly version of listWorkflowExecutions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/325 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-07-06 06:52:03.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-11 14:03:17.000 UTC |
| **Closed** | 2023-07-11 07:26:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature, enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

### Is your feature request related to a problem? Please describe.

Parent issue https://github.com/temporalio/features/issues/75
Provide an ability to get workflow executions list in a friendly way

### Describe the solution you'd like

Wrap API request and return a paginator as result. The paginator should be lazy and implement pagination API under the hood.


---

<a id="322"></a>

### #322: Worker versioning support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/322 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:47:04.000 UTC (2y 6m ago) |
| **Updated** | 2024-01-29 22:59:58.000 UTC |
| **Closed** | 2024-01-29 22:59:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | roxblnfk |
| **Milestone** | 2.8.0 |

#### Description

- Add `UpdateWorkerBuildIdCompatibility` gRPC call.
- proto: `/temporal.api.workflowservice.v1.WorkflowService/UpdateWorkerBuildIdCompatibility`
In args: (from GO):

```go
type UpdateWorkerBuildIdCompatibilityRequest struct {
	Namespace string `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	// Must be set, the task queue to apply changes to. Because all workers on a given task queue
	// must have the same set of workflow & activity implementations, there is no reason to specify
	// a task queue type here.
	TaskQueue string `protobuf:"bytes,2,opt,name=task_queue,json=taskQueue,proto3" json:"task_queue,omitempty"`
	// Types that are valid to be assigned to Operation:
	//	*UpdateWorkerBuildIdCompatibilityRequest_AddNewBuildIdInNewDefaultSet
	//	*UpdateWorkerBuildIdCompatibilityRequest_AddNewCompatibleBuildId
	//	*UpdateWorkerBuildIdCompatibilityRequest_PromoteSetByBuildId
	//	*UpdateWorkerBuildIdCompatibilityRequest_PromoteBuildIdWithinSet
	//	*UpdateWorkerBuildIdCompatibilityRequest_MergeSets_
	Operation isUpdateWorkerBuildIdCompatibilityRequest_Operation `protobuf_oneof:"operation"`
}
```

This call should be done to update worker buildID compatibility:
```go
err := tc.UpdateWorkerBuildIdCompatibility(context.Background(), &temporalClient.UpdateWorkerBuildIdCompatibilityOptions{
	TaskQueue: wi[i].TaskQueue,
	Operation: &temporalClient.BuildIDOpAddNewCompatibleVersion{
		BuildID: wi[i].Options.BuildID,
	},
})
```


---

<a id="318"></a>

### #318: Improve PHP files generated from proto

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/318 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-07-04 14:11:30.000 UTC (2y 6m ago) |
| **Updated** | 2024-03-14 21:09:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
There are a lot of Psalm issues related with usage of PHP files generated from proto (messages).
For example:

```php
$details = $info->hasDetails()
    // psalm: PossiblyNullArgument: Argument 1 of EncodedValues::fromPayloads cannot be null, possibly null value provided
    ? EncodedValues::fromPayloads($info->getDetails(), $converter)
    : EncodedValues::empty();
```

### Describe the solution you'd like
That case will be fixed if we add additional annotations in generated files fike this:

```php
/**
 * ...
 * @psalm-mutation-free
 */
public function getDetails() { ... }

/**
 * @psalm-assert-if-true !null $this->getDetails()
 * @psalm-mutation-free
 */
public function hasDetails() { ... }
```




---

<a id="317"></a>

### #317: Support UUID in marshaller

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/317 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-07-04 13:24:58.000 UTC (2y 6m ago) |
| **Updated** | 2023-09-12 16:51:18.000 UTC |
| **Closed** | 2023-07-11 09:48:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.6.0 |

#### Description

### Is your feature request related to a problem? Please describe.

Users use UUID a lot: generate like a side effect, pass in activities, get as results.
Right now users must cast UUID objects to string manually.

It will be nice to support UUID objects in our marshaller.

### Describe the solution you'd like

We have the great UUID library (https://github.com/ramsey/uuid) in PHP world.
There is also `symfony/uid` but it is not a popular package yet.

I think we can support the first or both in the SDK. We can do it in optional way - if a UUID library wasn't installed in the project then related typecaster will be deactivated.

- [x] #345
- [x] #346
- [x] #350


---

<a id="308"></a>

### #308: [Bug] PHP 8.2: ${var} string interpolation deprecated

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/308 |
| **State** | CLOSED |
| **Author** | Gropaga |
| **Created** | 2023-05-31 20:32:40.000 UTC (2y 7m ago) |
| **Updated** | 2023-05-31 21:08:47.000 UTC |
| **Closed** | 2023-05-31 21:08:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Running temporal workflow I get an error.

### Describe the bug

Since version 8.2 string interpolation ${var} is deprecated - https://wiki.php.net/rfc/deprecate_dollar_brace_string_interpolation
While running temporal workflow code I get an error:


[Temporal\Exception\Failure\ApplicationFailure]
message='Using ${var} in strings is deprecated, use {$var} instead', type='ErrorException'
OriginalStackTrace:
ErrorException: Using ${var} in strings is deprecated, use {$var} instead in /project/vendor/temporal/sdk/src/Activity/ActivityCancellationType.php:66

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Intel Mac
- Temporal Version: SDK 2.5.0 + temporal 1.17
- Local docker setup




---

<a id="288"></a>

### #288: [Bug] Fix compatibility with PHP 8.2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/288 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-02-05 11:53:03.000 UTC (2y 11m ago) |
| **Updated** | 2023-04-17 19:57:21.000 UTC |
| **Closed** | 2023-04-17 19:57:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

There are few bugs when SDK-PHP is run with PHP 8.2

Functional tests lowest deps:
![Img](https://user-images.githubusercontent.com/4152481/216816673-e15f6d63-3cf5-4080-bcc1-6551051731c4.png)

Functional on windows:
![Img](https://user-images.githubusercontent.com/4152481/216817081-8695bdc8-f510-44aa-a466-725c28e708d0.png)


Unit tests lowest deps:
![Img](https://user-images.githubusercontent.com/4152481/216816998-b2ddfe8e-67ac-4b01-ad01-a2bf56e28794.png)





---

<a id="285"></a>

### #285: Use temporal.download server to download `temporalite` or `temporal-test-sever`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/285 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-02-02 13:34:30.000 UTC (2y 11m ago) |
| **Updated** | 2024-03-15 22:05:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

To add yet another test-server downloader

> We have `https://temporal.download` now for downloading test server. Specifically `https://temporal.download/{artifact_name}/{version_name}` where `{artifact_name}` is `temporalite` or `temporal-test-sever` (i.e. the Java test server), and `{version_name}` is `default` or a version name. You should also pass `platform`, `arch`, `sdk-name`, and `sdk-version` query parameters to this URL. The URL will provide the path to the archive and file in the archive for the binary.
>
> For example, https://temporal.download/temporal-test-server/default?platform=windows&arch=amd64&sdk-name=sdk-python&sdk-version=1.0.0 returns:
> 
> ```
> {"archiveUrl":"https://temporal.download/assets/temporalio/sdk-java/releases/download/v1.17.0/temporal-test-server_1.17.0_windows_amd64.zip","fileToExtract":"temporal-test-server_1.17.0_windows_amd64/temporal-test-server.exe"}
> ```
> 
> You can see some logic that uses this at https://github.com/temporalio/sdk-core/blob/106b09f9db76bf3f7372de8da3f23e8194eecba1/core/src/ephemeral_server/mod.rs and https://github.com/temporalio/features/blob/ebc86a8ea07f029bee0d3f07fa841de31a07402c/harness/go/temporalite/temporalite.go#L119. We will be moving away from Temporalite of course. I suspect we will add "local server" (i.e. temporalite/temporal-cli) and "test server" (i.e. java test server) download-extract-run logic to the Go SDK in the near future. cc bergundy

_Originally posted by cretz in https://github.com/temporalio/sdk-php/issues/280#issuecomment-1413704850_




---

<a id="281"></a>

### #281: Add `EnumType` by default for PHP 8.1+

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/281 |
| **State** | CLOSED |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-02-01 10:11:48.000 UTC (2y 11m ago) |
| **Updated** | 2023-02-02 08:49:11.000 UTC |
| **Closed** | 2023-02-02 08:49:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I think we should add the `EnumType` by default for PHP >=8.1

_Originally posted by @roxblnfk in https://github.com/temporalio/sdk-php/issues/278#issuecomment-1411790904_
            


---

<a id="274"></a>

### #274: [Feature Request] Unmarshalling of nested DTOs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/274 |
| **State** | CLOSED |
| **Author** | zlodes (Zlatoslav Desyatnikov) |
| **Created** | 2023-01-08 12:16:18.000 UTC (3 years ago) |
| **Updated** | 2023-01-20 12:19:52.000 UTC |
| **Closed** | 2023-01-20 12:19:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi!

Now it isn't possible to pass DTO containing other DTOs as properties as Workflow param.

**Example:**
```php
final class ParentDTO
{
    public function __construct(
        public readonly ChildDTO $child,
    ) {
    }
}

final class ChildDTO
{
    public function __construct(
        public readonly string $foo,
    ) {
    }
}
```

Now it causes an error:
```php
TypeError:
Cannot assign stdClass to property Temporal\Tests\Unit\DTO\DeepDTO\ParentDTO::$child of type Temporal\Tests\Unit\DTO\DeepDTO\ChildDTO
```

Slack thread [there](https://temporalio.slack.com/archives/C01LK9FAMM0/p1673178873047529).


---

<a id="269"></a>

### #269: [Feature Request] Use `mapWorkflowFailureToException` for all workflow methods ?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/269 |
| **State** | OPEN |
| **Author** | ruscon (Coroliov Oleg) |
| **Created** | 2022-12-17 14:08:51.000 UTC (3 years ago) |
| **Updated** | 2024-03-15 22:10:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

I've run into the problem that all methods of the `WorkflowStub` class, except for the `getResult` method, don't properly map errors from `GRPC`.
`WorkflowStub.getResult` internally makes a call to the `$this->mapWorkflowFailureToException()` method.

I would like to see something similar for other methods, for example, for the `WorkflowStub.cancel` method and others.

### Additional context
<!-- Add any other context or screenshots about the feature request here. -->

You can check [sample with cancelation](https://github.com/temporalio/samples-php/blob/master/app/src/Subscription/CancelCommand.php#L40)
You will never get the `WorkflowNotFoundException` exception, only the `ServiceClientException`  will be thrown.




---

<a id="242"></a>

### #242: [Feature Request] Extend `ServiceClient::createSSL()` to accept client certs and override server name

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/242 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-09-08 14:16:59.000 UTC (3y 4m ago) |
| **Updated** | 2022-09-08 20:22:00.000 UTC |
| **Closed** | 2022-09-08 20:22:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

In case we have only root cert everyting OK, and we can do this:
```php
$workflowClient = Temporal\Client\WorkflowClient::create(
    Temporal\Client\GRPC\ServiceClient::createSSL(
        'localhost:7233',
        __DIR__ . '/certs/root.pem'
    ),
);
```

But there is no way to provide client certs and override server name with `grpc.default_authority` and `grpc.ssl_target_name_override`.



---

<a id="239"></a>

### #239: [Bug] Parent workflow waits for child with abandon policy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/239 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-08-28 20:49:41.000 UTC (3y 4m ago) |
| **Updated** | 2022-09-02 09:01:52.000 UTC |
| **Closed** | 2022-09-02 09:01:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying to run a child workflow with abandon policy.

### Describe the bug

```php
#[Workflow\WorkflowInterface]
class ParentWorkflow
{
    #[WorkflowMethod]
    public function start()
    {
        $childWorkflow = Workflow::newUntypedChildWorkflowStub(
            'Background.greet',
            ChildWorkflowOptions::new()->withParentClosePolicy(
                ParentClosePolicy::POLICY_ABANDON
            )
        );

        yield $childWorkflow->start();
        return 'done';
    }
}
```

In the child workflow I have a timer. Having `yield` in the parent - it always waits for child to be completed. Without `yield` the parent event doesn't start.




---

<a id="203"></a>

### #203: [Bug] Workflow shouldn't wait for activities unless it is explicitly said with yield

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/203 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-07-08 08:32:23.000 UTC (3y 6m ago) |
| **Updated** | 2022-09-06 13:24:35.000 UTC |
| **Closed** | 2022-09-06 13:24:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Having such workflow, that calls activity and doesn't use (not waits) for its result (no `yield` keyword):

```php
#[WorkflowMethod]
public function start()
{
    $activity = Workflow::newActivityStub(
        SleepActivity::class,
        ActivityOptions::new()->withStartToCloseTimeout(20)
    );
    $activity->wait();

    return 'Done';
}
```

Inside activity we have a simple sleep():

```php
#[\Temporal\Activity\ActivityMethod]
public function wait(): void
{
    sleep(5);
}
```

Expected behavior: workflow finishes and doesn't wait for 5 seconds.
Actual behavior: workflow waits for 5 seconds.


---

<a id="199"></a>

### #199: [Bug] param type hints in signal method

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/199 |
| **State** | CLOSED |
| **Author** | eriklotin (Erik Lotin) |
| **Created** | 2022-06-22 08:40:25.000 UTC (3y 6m ago) |
| **Updated** | 2023-07-10 10:20:41.000 UTC |
| **Closed** | 2023-07-10 10:20:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### Describe the bug

If you pass associative array as signal parameter, Temporal converts it to \stdClass. But you cannot set \stdClass as a param type in signal's method.

### Minimal Reproduction

You call two signals:

```php
$workflow = $workflowClient->newWorkflowStub(
    MyWorkflow::class,
    WorkflowOptions::new()->withTaskQueue('my-task-queue')
);
$run = $this->workflowClient->start($workflow);
$workflow->mySignal1(['foo' => 'bar']);
$workflow->mySignal2(['foo' => 'bar']);
```

MyWorkflow.php:
```php
#[SignalMethod]
public function mySignal1(\stdClass $param): void
{
    var_dump($param); // empty \stdClass
 }


#[SignalMethod]
public function mySignal2($param): void
{
    var_dump($param); //  \stdClass with `foo` property
 }
```




---

<a id="196"></a>

### #196: [Feature Request] Add time management for test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/196 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-19 14:47:43.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-22 08:16:56.000 UTC |
| **Closed** | 2022-06-22 08:16:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Add interface to affect test server behaviour:
- toggle time skipping
- sleep
- current time retreiving 


---

<a id="195"></a>

### #195: [Feature Request] Package is locked to Symfony 5

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/195 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-17 09:20:40.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-17 10:28:02.000 UTC |
| **Closed** | 2022-06-17 10:28:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug, enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Need to support Symonfy 4, 5 and 6 versions.


---

<a id="192"></a>

### #192: [Bug] Timeout continues with cancelled tasks

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/192 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-16 04:21:02.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-16 10:15:19.000 UTC |
| **Closed** | 2022-06-16 10:15:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Create a coroutine with several tasks and then cancel them.

### Describe the bug

Have a coroutine with local and server tasks: 2 asyncs and 1 awaitWithTimeout:

```php
$mainFlow = Workflow::async(
    function (): \Generator {
        yield Workflow::async(function () {
            echo 'DEBUG: before';
        });
        yield Workflow::awaitWithTimeout(999, fn() => false);
        yield Workflow::async(function () {
            echo 'DEBUG: after';
        });
    }
);

$mainFlow->cancel();
```

When trying to cancel it, I expect the last `echo 'DEBUG: after';`, because the code should freeze with the timer. But once the timer is cancelled the last `async` is called. If I replace `awaitWithTimeout()` with `await()` everything works as expected:

```php
$promise = Workflow::async(
    function (): \Generator {
        yield Workflow::async(fn () => $this->result[] = 'before');
        yield Workflow::await(999, fn() => false);
        yield Workflow::async(fn () => $this->result[] = 'after');
    }
);

$promise->cancel();
```

### Additional context

As I see the problem is when we restore the context after the cancelTimer call. Even is the last `async` is cancelled we return to it. Before entering the coroutine we should check whether it is cancelled or not.



---

<a id="190"></a>

### #190: [Bug] Async cancellation doesn't cancel internal timers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/190 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-15 11:14:52.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-15 12:29:35.000 UTC |
| **Closed** | 2022-06-15 12:29:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Cancel an async closure with a timer within:

```php
$promise = Workflow::async(
    function (): \Generator {
        yield Workflow::awaitWithTimeout(999, fn() => false);
    }
);

$promise->cancel();
```

### Describe the bug

Expect the timer to be cancelled and workflow to be finished. Instead the workflow hangs and endlessly waits.





---

<a id="188"></a>

### #188: [Feature Request] Add ability to check by id whether the workflow is running or not

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/188 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-13 10:06:40.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-13 11:13:07.000 UTC |
| **Closed** | 2022-06-13 11:13:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

At the moment the only possible way is to try to get a running workflow and catch an exception:

```php
        try {
            $workflow = $this->workflowClient->newUntypedRunningWorkflowStub($workflowId);
        } catch (WorkflowException $exception) {
          // Is not running
        }
```


---

<a id="185"></a>

### #185: [Feature Request] Send client info to Temporal via GRPC calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/185 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-06-07 20:25:22.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-09 15:15:41.000 UTC |
| **Closed** | 2022-06-09 15:15:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Temporal has a method of collecting SDK usage metrics which relies on client sending the right SDK version and currently we're not seeing any hits from the PHP SDK.

For reference see how it's done in other SDKs.
- https://github.com/temporalio/sdk-core/blob/master/client/src/lib.rs#L76-L82
- https://github.com/temporalio/sdk-go/blob/c453756356db4e5ae9fcabd416a6a8e57db5cc35/internal/internal_utils.go#L141
Looks like Go doesn't allow customizing this so we'd need to support that for the PHP worker.


---

<a id="180"></a>

### #180: [Bug] Small bugs in EncodedValues

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/180 |
| **State** | CLOSED |
| **Author** | mzavatsky (Maxim Zavatsky) |
| **Created** | 2022-05-30 11:39:31.000 UTC (3y 7m ago) |
| **Updated** | 2022-05-31 11:56:05.000 UTC |
| **Closed** | 2022-05-31 11:56:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I've build some workflows test based on your Test Framework, and noticed two small bugs:

- wrong decoding of `null` values
- wrong encoding of named arguments, i.e.
```
yield $this->activity->method(arg1: 'foo', arg2: 'bar');
```

I'll create PR with fixes.


---

<a id="171"></a>

### #171: [Bug] Workflow getVersion method return wrong type

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/171 |
| **State** | CLOSED |
| **Author** | xtix (Stanislav Shultchov) |
| **Created** | 2022-05-18 18:19:14.000 UTC (3y 7m ago) |
| **Updated** | 2022-05-21 16:13:05.000 UTC |
| **Closed** | 2022-05-21 16:13:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Use versioning as specified in the documentation https://docs.temporal.io/docs/php/versioning

### Describe the bug

Method call `yield  Workflow::getVersion(...)` don't return integer type.

### Minimal Reproduction

```php
#[WorkflowInterface]
class TestWorkflow
{
    #[WorkflowMethod]
    #[ReturnType(Type::TYPE_STRING)]
    public function start()
    {
        $version = yield Workflow::getVersion(
            'test',
            Workflow::DEFAULT_VERSION,
            Workflow::DEFAULT_VERSION,
        );

        if ($version === Workflow::DEFAULT_VERSION) {
            return 'OK';
        }

        return 'ERROR';
    }
}
```
Workflow will end with `ERROR` result, because `$version` will have `Temporal\DataConverter\EncodedValues` type.

### Environment/Versions

Temporal Version: 1.13.3, SDK version 1.3.0

### Additional context

Workaround:
```php
$version = yield EncodedValues::decodePromise(
    Workflow::getVersion(
        'test',
        Workflow::DEFAULT_VERSION,
        Workflow::DEFAULT_VERSION,
    ),
);
```



---

<a id="153"></a>

### #153: [Feature Request] Implement finalizer to clear resource after activity invocation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/153 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-03-24 08:05:10.000 UTC (3y 9m ago) |
| **Updated** | 2022-04-11 08:38:44.000 UTC |
| **Closed** | 2022-04-11 08:38:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

We have [implemented truly stateless activities](#151). The next step is to add an ability to clean up resources after activity is invoked.


---

<a id="152"></a>

### #152: [Feature Request] Implement routes for handling local activity 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/152 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2022-03-23 18:56:23.000 UTC (3y 9m ago) |
| **Updated** | 2022-05-11 20:01:01.000 UTC |
| **Closed** | 2022-05-11 20:01:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

We need to support two new routes: `ExecuteLocalActivity` and `RequestCancelLocalActivity`. On RR side they will have corresponding handlers.


---

<a id="143"></a>

### #143: [Bug] Wrong PHP doc

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/143 |
| **State** | CLOSED |
| **Author** | butschster (Pavel Buchnev) |
| **Created** | 2022-02-23 21:41:25.000 UTC (3y 10m ago) |
| **Updated** | 2024-03-07 18:33:04.000 UTC |
| **Closed** | 2024-03-07 18:33:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | 2.8.0 |

#### Description

It would be great don't use phpdoc blocks for typed arguments.

When I use pslam, I bump into an error 
```
Argument 1 of Temporal\Internal\ServiceContainer::fromWorkerFactory expects Temporal\WorkerFactory, Spiral\TemporalBridge\WorkerFactory provided
```
https://github.com/temporalio/sdk-php/blob/master/src/Internal/ServiceContainer.php#L152


---

<a id="136"></a>

### #136: [Bug] Workflow with awaitWithTimeout keeps running after signal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/136 |
| **State** | CLOSED |
| **Author** | mzavatsky (Maxim Zavatsky) |
| **Created** | 2022-01-11 04:55:50.000 UTC (3y 12m ago) |
| **Updated** | 2022-01-23 19:09:03.000 UTC |
| **Closed** | 2022-01-23 19:09:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Workflow example to reproduce bug:

```php
class DelayedWorkflow implements DelayedWorkflowInterface
{
    private bool $doCancel;

    public function executeDelayed()
    {
        $this->doCancel = false;

        yield Workflow::awaitWithTimeout(
        	600,
        	fn() => $this->doCancel
        );

        if ($this->doCancel) {
            return 'CANCEL';
        }

        return 'OK';
    }

    public function cancel(): void
    {
        $this->doCancel = true;
    }
}
```

Expected behavior:
- Run the workflow, send `cancel` signal, workflow completes **immediataly** with result `CANCEL`.

Actual result:
- Run the workflow, send `cancel` signal, workflow stays running. Only after timeout (600 seconds) it completes with result `CANCEL`.


---

<a id="132"></a>

### #132: [Bug] Workflow keeps stuck with awaitWithTimeout and signal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/132 |
| **State** | CLOSED |
| **Author** | seregazhuk (Sergey Zhuk) |
| **Created** | 2021-12-23 05:54:09.000 UTC (4 years ago) |
| **Updated** | 2021-12-28 11:43:53.000 UTC |
| **Closed** | 2021-12-28 11:43:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | seregazhuk |
| **Milestone** | None |

#### Description

Workflow example to reproduce bug:

```php
class DelayedWorkflow implements DelayedWorkflowInterface
{
    private bool $doCancel;

    public function executeDelayed()
    {
        $this->doCancel = false;

        yield Workflow::awaitWithTimeout(
        	30,
        	fn() => $this->doCancel
        );

        if ($this->doCancel) {
            return 'CANCEL';
        }

        return 'OK';
    }

    public function cancel(): void
    {
        $this->doCancel = true;
    }
}
```

Expected behavior:
1. Run the workflow, after 30 seconds workflow completes with result `OK`.
2. Run the workflow, send `cancel` signal, workflow completes with result `CANCEL`.

Actual result:
1. Run the workflow, after 30 seconds it still stays running. If after that I send cancel signal, workflow completes with result `OK`.
2. Run the workflow, send cancel signal, workflow stays running. After 30 seconds it completes with result `CANCEL`.


---

<a id="124"></a>

### #124: Add "listQueries" built-in query

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/124 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2021-10-25 15:51:26.000 UTC (4y 2m ago) |
| **Updated** | 2023-06-12 17:17:27.000 UTC |
| **Closed** | 2023-06-12 17:17:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See original issue: temporalio/sdk-features#51


---

<a id="13"></a>

### #13: Cancellation Scopes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/13 |
| **State** | CLOSED |
| **Author** | SerafimArts (Kirill Nesmeyanov) |
| **Created** | 2020-12-11 13:46:21.000 UTC (5y 1m ago) |
| **Updated** | 2020-12-14 11:12:46.000 UTC |
| **Closed** | 2020-12-14 11:12:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature |
| **Assignees** | SerafimArts |
| **Milestone** | None |

#### Description

- [x] Implement functionality
- [x] Testing (Implement testing API)
  - [x] Execution
  - [x] Cancellation
  - [x] Nested scopes
  - [x] Hierarchical сancellation
  - [x] Canceling a nested scope
  - [x] Coroutine stack checks
  - [x] Other cases


