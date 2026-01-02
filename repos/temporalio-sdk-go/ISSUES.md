# temporalio/sdk-go - Complete Issue Dump

**Generated:** 2026-01-02
**Total Issues:** 163
**Total Upvotes:** 112
**Total Comments:** 214

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

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

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#916](#916-ability-to-mockintercept-side-effect-calls-in-test-suite) | 21 | 0 | Ability to mock/intercept side effect calls in test suite |
| [#181](#181-add-ability-for-a-clean-worker-shutdown-that-waits-for-a-session-completion) | 16 | 0 | Add ability for a clean worker shutdown that waits for a session completion. |
| [#829](#829-use-interceptor-logger-for-all-logs-related-to-a-workflow-or-activity-execution) | 6 | 5 | Use interceptor logger for all logs related to a workflow or activity execution |
| [#1282](#1282-heartbeat-timeout-not-raised-while-testing) | 5 | 5 | Heartbeat timeout not raised while testing |
| [#89](#89-refactor-sdk-to-avoid-type-aliasing) | 7 | 1 | Refactor SDK to avoid type aliasing |
| [#1352](#1352-serialization-context-for-codecs-and-converters) | 4 | 6 | Serialization context for codecs and converters |
| [#1149](#1149-allow-custom-trace-attribute-keys) | 4 | 3 | Allow custom trace attribute keys |
| [#313](#313-allow-including-local-activity-input-into-the-history) | 4 | 2 | Allow including local activity input into the history |
| [#866](#866-testworkflowenvironment-doesnt-enforce-workflowexecutiontimeout) | 4 | 1 | TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout |
| [#642](#642-inconsistent-behavior-when-asserting-invocations) | 1 | 7 | Inconsistent behavior when asserting invocations |
| [#475](#475-panic-when-querying-during-workflow-failure-retry) | 0 | 9 | Panic when querying during Workflow failure + retry  |
| [#1330](#1330-add-taskqueue-to-tracerstartspanoptions) | 0 | 8 | Add TaskQueue to TracerStartSpanOptions |
| [#1114](#1114-support-activity-functions-with-variadic-arguments) | 1 | 6 | Support activity functions with variadic arguments   |
| [#986](#986-awaitwithtimeout-does-not-cancel-its-timer-when-condition-is-satisfied) | 1 | 5 | AwaitWithTimeout does not cancel its timer when condition is satisfied |
| [#937](#937-add-ability-to-keep-session-open-in-case-of-a-worker-restart) | 0 | 7 | Add ability to keep session open in case of a worker restart. |
| [#884](#884-feature-request-add-ability-to-support-passing-sessions-from-parent-to-child-wf) | 2 | 3 | [Feature Request] Add ability to support passing sessions from parent to child wf |
| [#167](#167-activity-times-out-in-test-environment-with-child-workflow) | 2 | 3 | Activity times out in test environment with child workflow |
| [#1208](#1208-canceling-a-context-with-multiple-child-contexts-can-be-non-deterministic) | 2 | 2 | Canceling a context with multiple child contexts can be non deterministic |
| [#982](#982-cannot-register-mock-activity-with-string-name-on-test-workflow-environment) | 1 | 4 | Cannot register mock activity with string name on test workflow environment |
| [#2109](#2109-mutablesideeffect-in-test-framework-ignores-cmp-function) | 2 | 1 | MutableSideEffect in test framework ignores cmp function |
| [#1351](#1351-support-interceptor-on-workflowrunget) | 1 | 3 | Support interceptor on WorkflowRun.Get |
| [#718](#718-add-metric-for-time-passed-from-the-activity-scheduling-to-the-last-attempt) | 2 | 1 | Add metric for time passed from the activity scheduling to the last attempt |
| [#659](#659-possibility-to-deprecate-attribute-control) | 0 | 5 | Possibility to deprecate attribute `Control` |
| [#495](#495-calling-getchildworkflowexecution-for-a-mocked-workflow-in-a-test-causes-the-runner-to-complete-the-child-workflow) | 0 | 5 | Calling `GetChildWorkflowExecution` for a mocked workflow in a test causes the runner to complete the child workflow. |
| [#61](#61-remove-mocks-package) | 2 | 1 | Remove mocks package |
| [#2065](#2065-newtestactivityenvironment-no-longer-implements-workeractivityregistry) | 1 | 2 | NewTestActivityEnvironment no longer implements worker.ActivityRegistry |
| [#1976](#1976-continueasnew-should-create-new-root-span) | 0 | 4 | ContinueAsNew should create new root span |
| [#1895](#1895-support-simulating-race-conditions-during-signal-draining) | 0 | 4 | Support simulating race conditions during signal draining |
| [#1716](#1716-make-it-possible-to-keep-workflows-in-worker-cache-also-if-theyre-only-queried) | 0 | 4 | Make it possible to keep workflows in worker cache also if they're only queried |
| [#1582](#1582-updated-context-functions-to-match-context-library) | 2 | 0 | Updated context functions to match context library |
| [#1410](#1410-consider-migrating-away-from-golangmock) | 2 | 0 | Consider migrating away from golang/mock |
| [#1397](#1397-add-support-for-replayworkflowhistoryoptions-to-replayworkflowhistoryfromjsonfile-replaypartialworkflowhistoryfromjsonfile) | 1 | 2 | Add Support for `ReplayWorkflowHistoryOptions` to `ReplayWorkflowHistoryFromJSONFile` & `ReplayPartialWorkflowHistoryFromJSONFile` |
| [#1167](#1167-allow-setting-activity-timeouts-in-testactivityenvironment) | 0 | 4 | Allow setting activity timeouts in TestActivityEnvironment |
| [#1100](#1100-testworkflowenvironment-should-surface-errors-and-respect-failure-signal-surfaced-by-underlying-mock) | 1 | 2 | TestWorkflowEnvironment should surface errors and respect failure signal surfaced by underlying mock |
| [#949](#949-allow-user-to-override-default-maximum-activity-attempts-in-test-suite) | 1 | 2 | Allow user to override default maximum activity attempts in test suite |
| [#533](#533-continueasnew-which-transfers-all-unprocessed-signals-to-new-run) | 0 | 4 | ContinueAsNew which transfers all unprocessed signals to new run |
| [#444](#444-maxrpctimeout-value-is-too-long) | 0 | 4 | maxRPCTimeout value is too long |
| [#351](#351-testing-cancellation-of-parent-workflow-with-child-workflow-panics) | 2 | 0 | [Testing] Cancellation of Parent Workflow with Child Workflow Panics |
| [#70](#70-refactor-newworker-and-remove-downcast) | 1 | 2 | Refactor NewWorker and remove downcast |
| [#2103](#2103-cosmetic-bug-in-logger) | 0 | 3 | Cosmetic bug in logger |
| [#2097](#2097-feature-request-add-context-to-metricshandler-for-exemplar-support) | 0 | 3 | Feature Request: Add Context to MetricsHandler for Exemplar Support |
| [#2066](#2066-lost-messages-from-workflownewchannelctx) | 0 | 3 | Lost messages from workflow.NewChannel(ctx) |
| [#1961](#1961-getting-a-strange-error-when-writing-tests-which-does-not-occur-in-real-temporal-deployment) | 0 | 3 | Getting a strange error when writing tests which does not occur in real temporal deployment |
| [#1906](#1906-workflowcheck-crash-index-out-of-range) | 1 | 1 | workflowcheck crash (index out of range) |
| [#1759](#1759-change-activity-error-to-warn-or-allow-it-to-be-configurable) | 1 | 1 | Change activity error to warn, or allow it to be configurable  |
| [#1609](#1609-support-contextaware-for-failure-converters) | 1 | 1 | Support ContextAware for failure converters |
| [#1177](#1177-switch-to-a-new-clock-library) | 0 | 3 | Switch to a new clock library |
| [#1037](#1037-calling-a-value-receiver-method-with-a-pointer-type-causes-a-panic-when-used-through-executeactivity) | 0 | 3 | Calling a value receiver method with a pointer type causes a panic when used through `ExecuteActivity` |
| [#1035](#1035-workflowcheck-should-check-that-serialized-objects-do-not-have-unexported-non-json-ignored-fields) | 0 | 3 | Workflowcheck should check that serialized objects do not have unexported, non-json-ignored fields |
| [#955](#955-suppress-worker-stopping-polling-errors) | 0 | 3 | Suppress "worker stopping" polling errors |
| [#875](#875-safer-queries-and-update-validators) | 0 | 3 | Safer queries (and update validators) |
| [#842](#842-support-custom-object-processing-in-codec-grpc-interceptor) | 0 | 3 | Support custom object processing in codec gRPC interceptor |
| [#813](#813-weird-workflow-task-failure) | 0 | 3 | Weird workflow task failure |
| [#458](#458-testworkflowenvironment-fail-registerdelayedcallback-after-executeworkflow) | 1 | 1 | TestWorkflowEnvironment: Fail RegisterDelayedCallback after ExecuteWorkflow |
| [#126](#126-add-autoheartbeating-of-activities) | 0 | 3 | Add autoheartbeating of activities |
| [#2131](#2131-configurable-minrpctimeout-for-activity-worker-instead-of-using-maxheartbeatthrottleinterval-for-rpc-timeout-and-allow-retry-manually-when-network-error) | 0 | 2 | Configurable minRPCTimeout for activity worker instead of using MaxHeartbeatThrottleInterval for RPC timeout. And allow retry manually when network error.. |
| [#2107](#2107-panic-in-temporal-unit-test-framework) | 1 | 0 | Panic in temporal unit test framework. |
| [#1980](#1980-feature-request-include-version-in-workflowcheck--vfull-output) | 0 | 2 | Feature Request: Include Version in workflowcheck -V=full Output |
| [#1954](#1954-ability-to-get-original-logger-from-activitygetloggerctx-workflowgetloggerctx) | 1 | 0 | Ability to get original Logger from activity.GetLogger(ctx) / workflow.GetLogger(ctx) |
| [#1929](#1929-otel-emitted-metrics-do-not-match-behavior-described-in-the-docs) | 0 | 2 | OTel emitted metrics do not match behavior described in the docs |
| [#1646](#1646-setstarttime-for-activity-test-env) | 1 | 0 | SetStartTime for activity test env |
| [#1593](#1593-consider-potential-range-over-func-apis) | 0 | 2 | Consider potential range-over-func APIs |
| [#1468](#1468-interceptors-are-skipped-for-mocked-activities) | 0 | 2 | Interceptors are skipped for mocked activities |
| [#1086](#1086-add-support-for-a-graceful-shutdown-of-go-workers-where-all-activities-are-finished-before-the-worker-returns) | 0 | 2 | Add support for a graceful shutdown of go workers where all activities are finished before the worker returns |
| [#1033](#1033-onupsertsearchattributes-and-onupsertmemo-unclear-about-mocking-ability) | 0 | 2 | OnUpsertSearchAttributes and OnUpsertMemo unclear about mocking ability |
| [#933](#933-no-problem-indicators-on-failed-workflow-input-deserialization-during-queries) | 0 | 2 | No problem indicators on failed workflow input deserialization during queries |
| [#899](#899-githubcomuber-gotallyv4-v411-2-vulnerabilities-highest-severity-is-75) | 0 | 2 | github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities (highest severity is: 7.5) |
| [#754](#754-grpc-proxy-integration-test) | 1 | 0 | gRPC Proxy Integration Test |
| [#616](#616-investigate-options-around-latency-reporting-and-comparison-with-server) | 0 | 2 | Investigate options around latency reporting and comparison with server |
| [#497](#497-test-suite-query-after-signal-works-in-sdk-but-not-in-test-suite) | 1 | 0 | [Test suite] Query after signal works in SDK, but not in Test Suite |
| [#439](#439-include-a-way-to-perform-assertions-on-the-workflow-signal-channel-in-the-testing-environment) | 1 | 0 | Include a way to perform assertions on the workflow signal channel in the testing environment |
| [#358](#358-bug-the-json-input-is-invalid-in-the-workflow-history-and-with-a-wrong-encoding-for-accents) | 0 | 2 | [Bug] the json input is invalid in the workflow history and with a wrong encoding for accents |
| [#266](#266-expose-activity-start-and-completion-information-to-the-workflow-code) | 1 | 0 | Expose activity start and completion information to the workflow code |
| [#101](#101-add-ability-to-pass-channel-as-a-parameter-to-child-workflow-and-activity) | 1 | 0 | Add ability to pass Channel as a parameter to Child workflow and activity |
| [#35](#35-add-ability-to-pass-configuration-to-a-workflow) | 1 | 0 | Add ability to pass configuration to a workflow |
| [#2098](#2098-update-childworkflowoptions-comment-to-indicate-the-default-workflowidreusepolicy-and-workflowidconflictpolicy) | 0 | 1 | Update ChildWorkflowOptions comment to indicate the default WorkflowIDReusePolicy and WorkflowIdConflictPolicy |
| [#2039](#2039-joining-errors-causes-testworkflowenvironment-to-hide-panics-and-pass-test) | 0 | 1 | Joining errors causes TestWorkflowEnvironment to hide panics and pass test |
| [#1705](#1705-user-defined-requestid-for-signalworkflow) | 0 | 1 | User-defined RequestId for SignalWorkflow |
| [#1624](#1624-signal-sent-to-selector-can-be-lost-if-default-path-blocks) | 0 | 1 | Signal sent to Selector can be lost if Default path blocks  |
| [#1574](#1574-batched-heartbeat-got-canceled-due-to-caller-context-cancellation) | 0 | 1 | Batched heartbeat got canceled due to caller context cancellation |
| [#1471](#1471-support-new-versioning-in-workflowinfogetcurrentbuildid) | 0 | 1 | Support New Versioning in WorkflowInfo.GetCurrentBuildID() |
| [#1445](#1445-otel-metric-handler-improvements) | 0 | 1 | OTel metric handler improvements |
| [#1395](#1395-make-testworkflowenvironment-return-errors-with-stack-traces) | 0 | 1 | Make TestWorkflowEnvironment return errors with stack traces |
| [#1334](#1334-allow-opting-out-of-tracer-span-creation-on-schedule-create) | 0 | 1 | Allow opting out of tracer span creation on schedule create |
| [#1300](#1300-better-task-failures-when-passing-incorrect-options-to-executelocalactivity) | 0 | 1 | Better Task Failures when passing incorrect options to Execute[Local]Activity |
| [#1227](#1227-worker-versioning-workflow-session) | 0 | 1 | Worker versioning + workflow session |
| [#1104](#1104-context-timeout-is-halved-on-clientexecuteworkflow) | 0 | 1 | Context timeout is halved on client.ExecuteWorkflow |
| [#1099](#1099-testworkflowenvironment-timeouts-run-defer-statements) | 0 | 1 | TestWorkflowEnvironment timeouts run defer statements |
| [#1045](#1045-memo-does-not-go-through-user-provided-data-coverter) | 0 | 1 | Memo does not go through user provided data coverter |
| [#996](#996-opt-in-to-having-stack-trace-query-use-custom-data-converter) | 0 | 1 | Opt-in to having stack trace query use custom data converter |
| [#975](#975-missing-mock-invocation-causes-panicerror-in-a-test-but-the-test-succeeds-with-exit-code-0) | 0 | 1 | Missing mock invocation causes PanicError in a test but the test succeeds with exit code 0. |
| [#968](#968-remove-deprecated-metrics) | 0 | 1 | Remove deprecated metrics |
| [#967](#967-testsuitetestworkflowenvironment-does-not-complete-workflows-synchronously-when-activities-create-new-environments-to-start-nested-workflows) | 0 | 1 | testsuite.TestWorkflowEnvironment does not complete workflows synchronously when activities create new environments to start nested workflows |
| [#935](#935-testing-be-able-to-unit-test-a-workflow-with-a-populated-continuedexecutionrunid) | 0 | 1 | Testing: Be Able to Unit Test a Workflow with a Populated `ContinuedExecutionRunID` |
| [#922](#922-testworkflowenvironmentsignalexternalworkflow-data-race-on-signal-data) | 0 | 1 | TestWorkflowEnvironment.SignalExternalWorkflow data race on signal data |
| [#912](#912-change-default-prometheus-santitize-options-to-not-change-values) | 0 | 1 | Change default Prometheus santitize options to not change values |
| [#716](#716-if-a-workflow-is-terminated-while-processing-it-can-leak-coroutines) | 0 | 1 | If a workflow is terminated while processing, it can leak coroutines |
| [#698](#698-allow-unable-to-find-workflow-type-error-to-be-configured-to-hard-fail-the-workflow) | 0 | 1 | Allow "unable to find workflow type" error to be configured to hard-fail the workflow |
| [#194](#194-support-seamless-cleanup-during-session-cancellation) | 0 | 1 | Support seamless cleanup during session cancellation |
| [#50](#50-make-testworkflowenvironment-support-test-multiple-workflows) | 0 | 1 | Make TestWorkflowEnvironment support test multiple workflows |
| [#2124](#2124-support-non-workflow-activities) | 0 | 0 | Support non-workflow activities |
| [#2123](#2123-api-go-proxy-allow-payload-visitor-to-run-in-parallel) | 0 | 0 | [api-go] Proxy: allow payload visitor to run in parallel |
| [#2094](#2094-worker-heartbeating) | 0 | 0 | Worker Heartbeating |
| [#2090](#2090-starting-a-child-workflow-in-tests-leaks-goroutines) | 0 | 0 | Starting a child workflow in tests leaks goroutines |
| [#2085](#2085-add-support-for-firstexecutionrunid-to-cancel-and-terminate) | 0 | 0 | Add support for firstExecutionRunId to cancel and terminate |
| [#2045](#2045-ensure-tests-exist-to-confirm-custom-slot-supplier-slot-info-has-proper-fields) | 0 | 0 | Ensure tests exist to confirm custom slot supplier slot info has proper fields |
| [#2025](#2025-fix-describetaskqueueenhanced-w-stats-to-use-non-deprecated-apis) | 0 | 0 | Fix DescribeTaskQueueEnhanced w/ stats to use non-deprecated APIs |
| [#2020](#2020-plugin-support) | 0 | 0 | Plugin support |
| [#2005](#2005-onworkflow-test-mocker-doesnt-propagate-context-headers) | 0 | 0 | OnWorkflow test mocker doesn't propagate context headers |
| [#1869](#1869-setonchildworkflowcompletedlistener-doesnt-work-as-expected) | 0 | 0 | SetOnChildWorkflowCompletedListener doesn't work as expected |
| [#1846](#1846-astime-on-a-nil-pointer-converts-to-jan-1st-1970-at-midnight-utc) | 0 | 0 | AsTime() on a nil pointer converts to  Jan. 1st, 1970 at midnight UTC |
| [#1838](#1838-non-deterministic-workflow-code-can-send-incorrect-wft-completion-without-task-failure) | 0 | 0 | Non-deterministic workflow code can send incorrect WFT completion without task failure |
| [#1817](#1817-expose-workflow-cancel-causereason) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#1796](#1796-add-patched-and-deprecatepatch-apis) | 0 | 0 | Add `Patched()` and `DeprecatePatch()` APIs |
| [#1778](#1778-rename-worker-deployment-api-interfaces) | 0 | 0 | Rename Worker Deployment API interfaces |
| [#1777](#1777-add-ramp-to-worker-deployments) | 0 | 0 | Add ramp to Worker Deployments |
| [#1776](#1776-provide-flag-to-tell-the-update-handler-that-the-handling-is-from-a-re-apply) | 0 | 0 | Provide flag to tell the update handler that the handling is from a re-apply |
| [#1760](#1760-provide-workflow-local) | 0 | 0 | Provide "workflow local" |
| [#1693](#1693-provide-details-and-actionable-info-about-non-deterministic-errors) | 0 | 0 | Provide details and actionable info about Non Deterministic Errors |
| [#1668](#1668-when-deserializing-typed-search-attributes-invalid-values-should-be-ignored) | 0 | 0 | When deserializing typed search attributes, invalid values should be ignored |
| [#1650](#1650-list-of-flaky-tests) | 0 | 0 | List of flaky tests |
| [#1633](#1633-modify-test-suite-to-dump-junit-xml) | 0 | 0 | Modify test suite to dump junit XML |
| [#1610](#1610-provide-access-to-the-workflow-results-from-workerworkflowreplayer) | 0 | 0 | Provide access to the workflow results from worker.WorkflowReplayer |
| [#1564](#1564-test-nexus-with-cloud) | 0 | 0 | Test Nexus with Cloud |
| [#1536](#1536-terminateifrunning-doesnt-work-for-duplicate-child-workflows) | 0 | 0 | TERMINATE_IF_RUNNING doesn't work for duplicate child workflows |
| [#1496](#1496-workflow-outcome-is-inconsistent-between-test-env-and-real-server) | 0 | 0 | Workflow outcome is inconsistent between test env and real server |
| [#1469](#1469-allow-specifying-attempt-in-testworkflowenvironment) | 0 | 0 | Allow specifying attempt in TestWorkflowEnvironment |
| [#1427](#1427-testworkflowenvironment-workflow-context-does-not-block-when-canceled) | 0 | 0 | TestWorkflowEnvironment workflow Context does not block when canceled |
| [#1387](#1387-configurable-panic-policy-at-the-workflow-level) | 0 | 0 | Configurable panic policy at the workflow level |
| [#1360](#1360-testsuitedevserver-occasionally-does-not-stop) | 0 | 0 | `testsuite.DevServer` occasionally does not stop |
| [#1349](#1349-workflowrunget-does-not-use-a-context-aware-data-converter) | 0 | 0 | WorkflowRun.Get does not use a context aware data converter |
| [#1341](#1341-workflowchecker-should-flag-anonymous-functions-in-local-activities-as-non-deterministic) | 0 | 0 | WorkflowChecker should flag anonymous functions in local activities as non deterministic |
| [#1315](#1315-deprecate-update-related-sdk-flags) | 0 | 0 | Deprecate Update related SDK flags |
| [#1283](#1283-remove-clientoutboundinterceptorpollworkflowupdate) | 0 | 0 | Remove ClientOutboundInterceptor.PollWorkflowUpdate |
| [#1240](#1240-data-race-after-deadlock-detector-fired) | 0 | 0 | Data race after deadlock detector fired |
| [#1197](#1197-drain-polled-tasks-on-shutdown) | 0 | 0 | Drain polled tasks on shutdown |
| [#1173](#1173-enable-testing-with-onactivity-and-non-retryable-errors-to-verify-options-are-set-correctly) | 0 | 0 | Enable testing with OnActivity and non-retryable errors to verify options are set correctly |
| [#1157](#1157-support-localactivityoptionswaitforcancellation) | 0 | 0 | Support LocalActivityOptions.WaitForCancellation |
| [#1132](#1132-add-support-for-visiting-all-payloads-at-once-in-proxy-visitor-interceptor) | 0 | 0 | Add support for visiting all payloads at once in proxy visitor interceptor |
| [#1131](#1131-workeroptionsworkeractivitiespersecond-applies-after-poll-is-received) | 0 | 0 | worker.Options.WorkerActivitiesPerSecond applies after poll is received |
| [#1054](#1054-encodedfailureattributes-capability-should-be-respected) | 0 | 0 | EncodedFailureAttributes capability should be respected |
| [#997](#997-support-dynamic-query-and-update-handler) | 0 | 0 | Support dynamic query and update handler |
| [#909](#909-fatal-poll-error-on-worker-start-isnt-stopping-activity-poller) | 0 | 0 | Fatal poll error on worker start isn't stopping activity poller |
| [#900](#900-log-warning-on-failed-serialization-of-signal-input) | 0 | 0 | Log warning on failed serialization of signal input |
| [#873](#873-ensure-slots-available-metric-is-updated-on-worker-stop) | 0 | 0 | Ensure slots available metric is updated on worker stop |
| [#755](#755-sticky-query-invalid-state-machine-transition-error) | 0 | 0 | Sticky query invalid state machine transition error |
| [#728](#728-add-await-branch-to-selector) | 0 | 0 | Add Await branch to Selector |
| [#705](#705-make-workflowservicestubsoptionsrpclongpolltimeout-configurable) | 0 | 0 | Make WorkflowServiceStubsOptions#rpcLongPollTimeout configurable |
| [#676](#676-document-dangers-with-workflowwithchildoptions-and-workflowwithworkflowruntimeout-using-continue-as-new) | 0 | 0 | Document dangers with workflow.WithChildOptions and workflow.WithWorkflowRunTimeout using continue as new |
| [#619](#619-make-tracing-tags-consistent-across-sdks) | 0 | 0 | Make tracing tags consistent across SDKs |
| [#514](#514-testactivityenvironmentexecuteactivity-requires-registeractivity-when-invoking-activity-by-function) | 0 | 0 | TestActivityEnvironment.ExecuteActivity requires RegisterActivity when invoking activity by function |
| [#505](#505-non-retryable-errors-in-sessions) | 0 | 0 | Non-retryable errors in sessions |
| [#491](#491-testsuite-workflow-retry-not-working) | 0 | 0 | Testsuite Workflow Retry not working |
| [#482](#482-workflow-query-hangs-if-the-temporal-workflow-execution-panics-is-not-available) | 0 | 0 | Workflow query hangs if the temporal workflow execution panics (is not available) |
| [#346](#346-requestcancelexternalworkflowgetctx-nil-blocks-forever-with-workflow-exits-with-errcanceled) | 0 | 0 | RequestCancelExternalWorkflow(...).Get(ctx, nil) blocks forever with workflow exits with ErrCanceled |
| [#335](#335-original-failure-source-is-lost-when-convertfailuretoerror-invoked) | 0 | 0 | Original Failure source is lost when ConvertFailureToError invoked |
| [#277](#277-expose-access-to-grpcserviceclient-so-we-can-create-default-golang-client-and-get-access-to-underlying-grpc-client) | 0 | 0 | Expose access to grpc.ServiceClient so we can create default golang client and get access to underlying GRPC client |
| [#247](#247-retrieved-string-search-attribute-includes-quotation-characters) | 0 | 0 | Retrieved String Search Attribute includes quotation characters |
| [#238](#238-recordactivityheartbeat-signature-should-be-modified-to-return-an-error-if-activity-has-been-canceled) | 0 | 0 | RecordActivityHeartbeat signature should be modified to return an error if activity has been canceled |
| [#198](#198-add-support-for-doing-backward-incompatible-changes-to-workflow-and-activity-function-signatures) | 0 | 0 | Add support for doing backward incompatible changes to workflow and activity function signatures |
| [#186](#186-worker-reports-validation-error-on-processing-of-transient-decision) | 0 | 0 | Worker reports validation error on processing of transient decision |
| [#125](#125-remove-need-to-register-mocked-activity) | 0 | 0 | Remove need to register mocked activity |
| [#108](#108-fix-race-condition-in-testworkflowenvironmentimpl) | 0 | 0 | Fix race condition in testWorkflowEnvironmentImpl |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

### #916: Ability to mock/intercept side effect calls in test suite

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/916 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-09-22 14:05:06.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-22 14:05:06.000 UTC |
| **Upvotes** | 21 |
| **Comments** | 0 |
| **Priority Score** | 42 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 21 |

#### Description

**Is your feature request related to a problem? Please describe.**

Can't intercept side effect calls

**Describe the solution you'd like**

Add something like `TestWorkflow.OnSideEffect` and `TestWorkflow.OnMutableSideEffect`


---

### #181: Add ability for a clean worker shutdown that waits for a session completion.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/181 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-07-07 15:40:12.000 UTC (5y 5m ago) |
| **Updated** | 2020-07-07 15:40:12.000 UTC |
| **Upvotes** | 16 |
| **Comments** | 0 |
| **Priority Score** | 32 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 16 |

#### Description

**Is your feature request related to a problem? Please describe.**
The clean worker shutdown waits for all currently running activities to complete. But in some cases, there is a need to wait for the whole session, which executes multiple activities to completion.

**Describe the solution you'd like**
Consider adding the capability to wait for an activity session to complete when waiting for the worker.Close()

**Describe alternatives you've considered**
Do not provide such a feature.



---

### #829: Use interceptor logger for all logs related to a workflow or activity execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/829 |
| **State** | OPEN |
| **Author** | jlegrone (Jacob LeGrone) |
| **Created** | 2022-06-10 12:59:45.000 UTC (3y 6m ago) |
| **Updated** | 2023-02-02 21:59:51.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 5 |
| **Priority Score** | 17 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 |

#### Description

**Is your feature request related to a problem? Please describe.**

Interceptors are already able to modify log fields emitted by workflow and activity code. But any lower-level logs emitted by the Go SDK don't respect the logger returned by the interceptor chain. These include debug level logs like "ExecuteActivity" as well as warning or error level logs like "Task processing failed with error".

Using the logger returned by the interceptor chain would allow users to filter _all_ logs related to their workflow executions by domain-specific fields, create more sophisticated monitors or metric generation pipelines, and correlate logs to traces on observability platforms where that is supported.

**Describe the solution you'd like**

Evaluate the worker's interceptor chain to get a workflow or activity logger whenever a low-level log needs to be emitted by the Go SDK.

**Describe alternatives you've considered**

It might be possible to at least handle all debug level logs like "ExecuteActivity" via a regular interceptor that is registered by default.

It would be interesting to look into implementing low level logs like "Task processing failed with error" via an interceptor as well, perhaps by extending the workflow/activity interceptor interfaces to include a method for recording SDK errors. This would bring some additional benefits since interceptors would not only be able to log those errors, but emit custom metrics or error trace spans as well.

**Additional context**

I wrote an e2e test to demonstrate. After running the test, observe that the `trace_id` log field is not included in the "ExecuteActivity" log line.

```go
package sdklogtest

import (
	"context"
	"testing"
	"time"

	"github.com/DataDog/temporalite/temporaltest"
	"go.temporal.io/sdk/activity"
	"go.temporal.io/sdk/client"
	"go.temporal.io/sdk/contrib/opentracing"
	"go.temporal.io/sdk/interceptor"
	"go.temporal.io/sdk/log"
	"go.temporal.io/sdk/worker"
	"go.temporal.io/sdk/workflow"
)

func LogWorkflow(ctx workflow.Context) error {
	workflow.GetLogger(ctx).Info("hello workflow")
	return workflow.ExecuteActivity(workflow.WithActivityOptions(ctx, workflow.ActivityOptions{
		ScheduleToCloseTimeout: time.Minute,
	}), LogActivity).Get(ctx, nil)
}

func LogActivity(ctx context.Context) error {
	activity.GetLogger(ctx).Info("hello activity")
	return nil
}

type loggingTracer struct {
	interceptor.Tracer
}

func (loggingTracer) GetLogger(logger log.Logger, ref interceptor.TracerSpanRef) log.Logger {
	return log.With(logger, "trace_id", "0112358")
}

func TestLogOutput(t *testing.T) {
	// Which tracer we use here isn't important to the test; pulling in the opentracing
	// implementation just meant I didn't have to mock a full interceptor.
	openTracer, err := opentracing.NewTracer(opentracing.TracerOptions{})
	if err != nil {
		t.Fatal(err)
	}

	// Create test Temporal server and client
	ts := temporaltest.NewServer(temporaltest.WithT(t))
	c := ts.NewClientWithOptions(client.Options{
		Interceptors: []interceptor.ClientInterceptor{
			interceptor.NewTracingInterceptor(loggingTracer{openTracer}),
		},
	})

	// Register a new worker
	w := worker.New(c, "test", worker.Options{})
	defer w.Stop()
	w.RegisterWorkflow(LogWorkflow)
	w.RegisterActivity(LogActivity)
	if err := w.Start(); err != nil {
		t.Fatal(err)
	}

	// Start a workflow that emits some logs
	wfr, err := c.ExecuteWorkflow(context.Background(), client.StartWorkflowOptions{
		TaskQueue:                "test",
		WorkflowExecutionTimeout: time.Second * 10,
	}, LogWorkflow)
	if err != nil {
		t.Fatal(err)
	}

	// Wait for workflow to complete and fail test if workflow errors.
	if err := wfr.Get(context.Background(), nil); err != nil {
		t.Fatal(err)
	}

	// There's not a way to write a test against worker log output at the moment,
	// so just fail the test so logs can be inspected by a human.
	t.Errorf("Please inspect test log output for tag `trace_id:0112358` in workflow execution logs")
}
```

#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2022-06-10 13:42:11.000 UTC</summary>

The problem here is that the interceptor is for intercepting literal calls to `activity.GetLogger` and `workflow.GetLogger`, not just all loggers. You can provide your own logger at the client level to intercept logs originating _outside_ those explicit user calls.

But you may need the context. We can do what we did with data converters. Any data converter that implements the following interface:

```go
type ContextAware interface {
	WithWorkflowContext(ctx Context) converter.DataConverter
	WithContext(ctx context.Context) converter.DataConverter
}
```

Will have those functions called before the converter is used. So maybe we can make a:

```go
type ContextAwareLogger interface {
	WithWorkflowContext(ctx Context) log.Logger
	WithContext(ctx context.Context) log.Logger
}
```

And invoke those when impl'd by the logger everywhere we have a context. The overhead should be negligible. Thoughts?

</details>

<details>
<summary><strong>jlegrone</strong> commented on 2022-06-21 19:12:19.000 UTC</summary>

A `ContextAwareLogger` interface sounds like it could be useful... but when the SDK already has a workflow or activity context available to pass into the client's default logger, why not call `workflow.GetLogger` or `activity.GetLogger` instead so that the interceptor chain is invoked as well?

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-06-21 20:56:02.000 UTC</summary>

My assumption was that `GetLogger` was as a result of a literal `GetLogger` call, and not just before every logger use to make sure it has the latest context info. However, it might make sense to just do this and we need to just be clear that unlike other outbound interceptors, this is not 1:1 with user calls, it is more frequent and therefore needs to be careful to remain performant.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-06-23 15:28:29.000 UTC</summary>

After some thought, I am afraid of repeatedly calling `GetLogger` internally instead of its original purpose of only being invoked when the user invokes it. I am worried about going from people understanding that it's only called per user call, to now dozens of internal calls since the context can change many times throughout the life of a workflow/activity and one may want such context updates before each log statement.

I am back to considering the `ContextAwareLogger` approach.

</details>

<details>
<summary><strong>jlegrone</strong> commented on 2023-02-02 21:58:33.000 UTC</summary>

I'd love to revisit this issue. We're looking for ways to assess the scope of impact for incidents caused by workflow code panics and other non-versioned/deterministic changes.

A common failure mode we've observed is that a small number of top level requests will generate a large number of Go SDK generated error logs across a broad set of child workflows. We're looking for a way to quickly identify how many root/top level parent workflows are impacted by aggregating across this set of logs, but are limited by the fact that we have no way of injecting custom request-scoped attributes in Go SDK logs.

For example, aggregating workflow error logs by [dd.trace_id](https://github.com/temporalio/sdk-go/blob/a9a4baa54c97bcb2ea229f99e673156b31452fad/contrib/datadog/tracing/interceptor.go#L180-L187) would allow us to identify how many top requests are impacted and help operators make more informed decisions about whether these top level workflows should be terminated vs. rolling out a new worker version.

</details>


---

### #1282: Heartbeat timeout not raised while testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1282 |
| **State** | OPEN |
| **Author** | miquelpuigmena (Miquel Puig i Mena) |
| **Created** | 2023-10-26 16:44:42.000 UTC (2y 2m ago) |
| **Updated** | 2023-11-06 13:57:25.000 UTC |
| **Upvotes** | 5 |
| **Comments** | 5 |
| **Priority Score** | 15 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 5 |

#### Description

I want to see how an activity times out due to heartbeat timeout while testing. But it doesn't raise the Heartbeat timeout. See the tests in Steps to Reproduce the Problem section

## Expected Behavior
I would expect to see the test failing due to HeartbeatTimeout

## Actual Behavior
The tests are passing

## Steps to Reproduce the Problem
- make a folder with `workflow.go` and `workflow_test.go` below 👇 
- `go test ./...`

workflow.go
```go
package hbtimeout

import (
	"context"
	"time"

	"go.temporal.io/sdk/temporal"
	"go.temporal.io/sdk/workflow"
)

type In struct {
	Sleep     int
	Heartbeat int
}

func Workflow(ctx workflow.Context, in In) error {
	options := workflow.ActivityOptions{
		StartToCloseTimeout: time.Second * 10,
		HeartbeatTimeout:    time.Second * time.Duration(in.Heartbeat),
		RetryPolicy: &temporal.RetryPolicy{
			MaximumAttempts: 1,
		},
	}

	ctx = workflow.WithActivityOptions(ctx, options)

	err := workflow.ExecuteActivity(ctx, Do, in.Sleep).Get(ctx, nil)
	if err != nil {
		return err
	}

	return nil
}

func Do(ctx context.Context, sleep int) error {
	time.Sleep(time.Second * time.Duration(sleep))
	return nil
}
```
workflow_test.go
```go
package hbtimeout

import (
	"testing"
	"time"

	"github.com/stretchr/testify/suite"
	"go.temporal.io/sdk/testsuite"
)

type UnitTestSuite struct {
	suite.Suite
	testsuite.WorkflowTestSuite
}

func TestUnitTestSuite(t *testing.T) {
	suite.Run(t, new(UnitTestSuite))
}

func (s *UnitTestSuite) Test_Workflow() {
	env := s.NewTestWorkflowEnvironment()
	env.SetTestTimeout(time.Second * 20)
	env.RegisterActivity(Do)
	env.ExecuteWorkflow(Workflow, In{Sleep: 9, Heartbeat: 1})
	s.True(env.IsWorkflowCompleted())
	s.NoError(env.GetWorkflowError())
	env.AssertExpectations(s.T())
}
```

## Specifications
  - Version: 
  - Platform: testing locally


#### Comments (5)

<details>
<summary><strong>gugabfigueiredo</strong> commented on 2023-11-03 09:21:00.000 UTC</summary>

as pointed out in the #1167 , activity timeouts are hardcoded to 10min in [testWorkflowEnvironmentImpl.executeActivity](https://github.com/temporalio/sdk-go/blob/0352634b45b1b81293c9bf3cec3bb033b82f841f/internal/internal_workflow_testsuite.go#L557)

```go
func (env *testWorkflowEnvironmentImpl) executeActivity(
	activityFn interface{},
	args ...interface{},
) (converter.EncodedValue, error) {

        ...

	parameters := ExecuteActivityParams{
		ExecuteActivityOptions: ExecuteActivityOptions{
			ScheduleToCloseTimeout: 600 * time.Second,
			StartToCloseTimeout:    600 * time.Second,
		},
		ActivityType: *activityType,
		Input:        input,
		Header:       env.header,
	}

        ...
}
```

heartbeatTimeouts are straight up ignored

as a workaround I have been testing for consistent heartbeat strategies with the following, changing the code in `workflow_test.go`:
```go
func (s *UnitTestSuite) Test_Workflow() {
	env := s.NewTestWorkflowEnvironment()
	env.SetTestTimeout(time.Second * 1)
	env.RegisterActivity(Do)
        defer func() {
		err := recover()
		if r != nil {
			s.True(strings.HasPrefix(err.(string), "test timeout"))
		}
	}()
	env.ExecuteWorkflow(Workflow, In{Sleep: 9, Heartbeat: 2})
}
```

when heartbeats are set appropriately, they will keep test workflow alive and it is possible to test for consistent timeout error over longer workload.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-11-03 15:00:38.000 UTC</summary>

The workflow test environment is meant mostly for just testing workflows though it has some activity support. You should use a `TestActivityEnvironment` to test activity behavior, and if you want to test how a workflow reacts to an activity result/failure, you can mock it. If you must test these together with real-world behavior semantics, you should use a real server (e.g. `testsuite.StartDevServer`).

</details>

<details>
<summary><strong>gugabfigueiredo</strong> commented on 2023-11-05 11:59:40.000 UTC</summary>

a `TestActivityEnvironment` is just a wrapper for`testWorkflowEnvironmentImpl` ([/internal/workflow_testsuite.go#L70](https://github.com/temporalio/sdk-go/blob/0352634b45b1b81293c9bf3cec3bb033b82f841f/internal/workflow_testsuite.go#L70))
```go
	// TestActivityEnvironment is the environment that you use to test activity
	TestActivityEnvironment struct {
		impl *testWorkflowEnvironmentImpl
	}
```

which means that when running activities, the same limitations apply, this makes the test environment ignore developer setup and not behave as expected, as we cannot provide or set ExecuteActivityOptions.

[Edit]: In my case, I was just trying to validate heartbeat strategies considering different workloads

will try `testsuite.StartDevServer`, which at least I can write into tests to get the expected behavior

</details>

<details>
<summary><strong>gugabfigueiredo</strong> commented on 2023-11-05 20:30:07.000 UTC</summary>

 > will try `testsuite.StartDevServer`, which at least I can write into tests to get the expected behaviour

This worked for my needs ([see here](https://gist.github.com/gugabfigueiredo/ab64a66fac1fc2fc05c97c737da4a6f6)).

I suppose then it comes to temporal developers wether there is a use case or not for normal configurations to the Activity and Workflow test environments.

Personally, I would argue in favour of test environment interface being able to deal with this, as it seems like a lot of work to validate implementation against a simple feature. The heartbeat timeout is still set by the internal implementation, its just set to zero value while other timeouts are hardcoded ([/internal/internal_workflow_testsuite.go#L579](https://github.com/temporalio/sdk-go/blob/0352634b45b1b81293c9bf3cec3bb033b82f841f/internal/internal_workflow_testsuite.go#L579)):

```go
	parameters := ExecuteActivityParams{
		ExecuteActivityOptions: ExecuteActivityOptions{
			ScheduleToCloseTimeout: 600 * time.Second,
			StartToCloseTimeout:    600 * time.Second,
		},
		ActivityType: *activityType,
		Input:        input,
		Header:       env.header,
	}

...

	scheduleTaskAttr.HeartbeatTimeout = &parameters.HeartbeatTimeout

...
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-11-06 13:55:24.000 UTC</summary>

> a `TestActivityEnvironment` is just a wrapper for `testWorkflowEnvironmentImpl` [...] which means that when running activities, the same limitations apply

But it's a different level of exposed abstraction. The point is that if you want to test how your workflow reacts to a certain type of activity failure, mock that activity and return that error. If you want to test how your activity works regardless of workflow, use the activity environment. If you must test all behaviors of activity and workflow together based on real-time, it may not make sense to use an activity or time-skipping workflow environment, it may make sense to use a real combined one.

Some timeouts we do respect in the workflow environment however, but are on time-skipping basis not based on real time. I will leave this issue open to investigate if real-time heartbeat timeout can/should be respected.

</details>


---

### #89: Refactor SDK to avoid type aliasing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/89 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-04-07 20:02:44.000 UTC (5y 9m ago) |
| **Updated** | 2025-02-04 18:12:35.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 1 |
| **Priority Score** | 15 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 7 |

#### Description

The current generation of tools doesn't work well with type aliasing which is used to separate internal implementation and public APIs of the Go SDK.

The proposal is to create public copies of al interfaces and structures and cast them to/from internal.



#### Comments (1)

<details>
<summary><strong>alexshtin</strong> commented on 2020-04-07 20:05:28.000 UTC</summary>

Related issue: #61 

Reactions: 👍 1

</details>


---

### #1352: Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1352 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-01-14 05:21:21.000 UTC (1y 11m ago) |
| **Updated** | 2025-10-14 20:56:37.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 6 |
| **Priority Score** | 14 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

**Is your feature request related to a problem? Please describe.**
Context aware data converters should have some way to get ID of outbound activities and child workflows when the data converter is being used to serialize activity input or child workflow input. This is useful if the data converter changes behaviour based on the workflow ID, for example using the ID as associated data for encryption.

In the Java SDK this is trivial because the Java SDK will pass the child workflow ID to the data converter when serializing the child workflow input

**Describe the solution you'd like**
I can think of acceptable solutions:
1. Users could create an interceptor to manually set the activity ID/ child workflow ID, maybe the SDK can provide some random generator to help create deterministic UUIDs. Other SDK already have helpers for this so maybe it is worth doing regardless.

2. Ideally the ID would be accessible in the `WithContext` or `WithWorkflowContext` call on the data converter. When we generate the ID in question we could set it on the context and pass that context with the ID to the context aware data converter. This would require some minor refactoring to when the SDK generates an activity ID/ child workflow ID


#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2024-01-16 13:55:36.000 UTC</summary>

I vote option 2. In theory one shouldn't expect an activity or workflow context to even be created without associated info that contains their ID.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-25 18:11:55.000 UTC</summary>

Also see the features repo issue of https://github.com/temporalio/features/issues/434

</details>

<details>
<summary><strong>ddworken</strong> commented on 2025-06-18 21:10:05.000 UTC</summary>

I just wanted to +1 this feature request, especially option 2. Getting access to the workflow ID in the codec is critical to mitigating replay attacks (as described [here](https://github.com/temporalio/features/issues/434)) so it would be quite useful if Go exposed this ability. 

</details>

<details>
<summary><strong>Sushisource</strong> commented on 2025-10-07 17:23:39.000 UTC</summary>

Make sure to include nexus per https://github.com/temporalio/features/issues/678

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-10-07 23:13:20.000 UTC</summary>

@Sushisource only the input to a Nexus operations can have a serialization context, not the output. This is due to async operations like Workflows

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-10-14 20:56:36.000 UTC</summary>

I updated the title to more accurately represent what this is

</details>


---

### #1149: Allow custom trace attribute keys

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1149 |
| **State** | OPEN |
| **Author** | loicsaintroch (Loïc Saint-Roch) |
| **Created** | 2023-06-28 16:00:48.000 UTC (2y 6m ago) |
| **Updated** | 2025-08-07 11:42:45.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 3 |
| **Priority Score** | 11 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

**Is your feature request related to a problem? Please describe.**
Trace attribute keys are enforced by the Temporal SDK, and are as follow:
- `temporalWorkflowID`
- `temporalRunID`
- `temporalActivityID`

Found here: https://github.com/temporalio/sdk-go/blob/master/interceptor/tracing_interceptor.go#L39-L43

The only way to customise those keys is to create our own implementation of `interceptor.Interceptor` which is kind of heavy work to simply rename these keys.

**Describe the solution you'd like**
We could have the possibility to override the key values set by default in `interceptor.TracerOptions`, and port these options to `opentelemetry.TracerOptions` and `opentracing.TracerOptions`.

**Additional context**
Issue related to [this thread on Slack](https://temporalio.slack.com/archives/CTDTU3J4T/p1687932329808269)

#### Comments (3)

<details>
<summary><strong>loicsaintroch</strong> commented on 2023-06-29 08:19:16.000 UTC</summary>

As discussed on Slack, here's a possible approach _without_ having a custom `interceptor.Interceptor`.

Create your own `interceptor.Tracer`, and override the `StartSpan` function:
```go
type MyCustomTracer struct {
	interceptor.Tracer
}

func (m MyCustomTracer) StartSpan(opts *interceptor.TracerStartSpanOptions) (interceptor.TracerSpan, error) {
	if v := opts.Tags["temporalWorkflowID"]; v != "" {
		opts.Tags["temporal.workflow.id"] = v
		delete(opts.Tags, "temporalWorkflowID")
	}

	if v := opts.Tags["temporalRunID"]; v != "" {
		opts.Tags["temporal.workflow.run_id"] = v
		delete(opts.Tags, "temporalRunID")
	}

	if v := opts.Tags["temporalActivityID"]; v != "" {
		opts.Tags["temporal.activity.id"] = v
		delete(opts.Tags, "temporalActivityID")
	}

	return m.Tracer.StartSpan(opts)
}
```

Create a new tracer using the distribution of your choice, such as `opentelemetry`. Then pass this tracer in `interceptor.NewTracingInterceptor`:
```go
otelTracer, err := opentelemetry.NewTracer(opentelemetry.TracerOptions{
	// ...
})

customTracer := MyCustomTracer{
	Tracer: otelTracer,
}

var opts = client.Options{
	Interceptors: []interceptor.ClientInterceptor{
		interceptor.NewTracingInterceptor(customTracer),
	},
}
```

Leaving this issue open to let the Temporal decide if/how this should be documented or if another approach should be implemented.

Reactions: ❤️ 2

</details>

<details>
<summary><strong>throwaway58383958484</strong> commented on 2024-01-24 16:46:18.000 UTC</summary>

+1 for this. We would like to inject additional attributes on our traces, and there doesn't seem to be a good way to do it. Even if we override `StartSpan` as described in [this comment](https://github.com/temporalio/sdk-go/issues/1149#issuecomment-1612613305) (great idea, by the way), we'd like to include tags that we're storing on our context, but unfortunately the context is unavailable there.



Reactions: 👍 3

</details>

<details>
<summary><strong>olenotron</strong> commented on 2025-08-07 11:42:44.000 UTC</summary>

unfortunate that this issue didn't get any attention. It makes tracing in Temporal GO SDK quite limited.

</details>


---

### #313: Allow including local activity input into the history

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/313 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-12-17 19:13:15.000 UTC (5 years ago) |
| **Updated** | 2025-02-04 18:48:09.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 2 |
| **Priority Score** | 10 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

**Is your feature request related to a problem? Please describe.**
In some scenarios, a local activity is used to log the whole state of a workflow on every change. As the state is large the history becomes very big. The local activity input is included in the marker event only for human consumption and is not used by the SDK. 

**Describe the solution you'd like**
Add `LocalActivityOption.DoNotIncludeArgumentsIntoHistory` option. When set to `true` the input will not be included into the local activity marker event.



#### Comments (2)

<details>
<summary><strong>pdcalado</strong> commented on 2020-12-20 00:38:23.000 UTC</summary>

Hi @mfateev thanks for opening the issue.

I was looking at the master branch and from what I was able to understand, the input arguments don't seem to be stored in the marker event (`EVENT_TYPE_MARKER_RECORDED`).

Concretely, in `internal/internal_events_handler.go` at [ProcessLocalActivityResult](https://github.com/temporalio/sdk-go/blob/master/internal/internal_event_handlers.go#L1174), a `HistoryEvent` is filled in with `localActivityMarkerData` and `localActivityResult.result`, none of which contains nested params with `InputArgs`.
Perhaps it's in another event type ?

I'm probably missing something here, if you can point me in the right direction I'll be happy to contribute with a PR.

Thanks again, cheers

</details>

<details>
<summary><strong>mfateev</strong> commented on 2021-04-30 17:25:51.000 UTC</summary>

The relevant Java PR: https://github.com/temporalio/sdk-java/pull/441

</details>


---

### #866: TestWorkflowEnvironment doesn't enforce WorkflowExecutionTimeout

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/866 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-07-23 17:50:03.000 UTC (3y 5m ago) |
| **Updated** | 2025-01-30 17:11:22.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 1 |
| **Priority Score** | 9 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

## Expected Behavior
Under unit test a child workflow times out if runs longer than its WorkflowExecutionTimeout.

When executing a workflow using testEnv.ExecuteWorkflow both run and execution timeouts should be enforced.

## Actual Behavior
Child workflow is allowed to run without timing out. A child workflow times out if WorkflowRunTimeout is specified and exceeded. The error message is confusing as it references an unexistent timeout:
```
workflow execution error (type: func1, workflowID: default-test-workflow-id, runID: default-test-run-id): child workflow execution error (type: Workflow, workflowID: default-test-run-id_1, runID: default-test-run-id_1_RunID, initiatedEventID: 0, startedEventID: 0): deadline exceeded (type: ScheduleToClose).

Also, none of the workflow timeouts are enforced if a workflow is executed through `testEnv.ExecuteWorkflow`.

```


#### Comments (1)

<details>
<summary><strong>kminder</strong> commented on 2025-01-30 17:07:50.000 UTC</summary>

Seems like this still an issue two years later.

go.temporal.io/api v1.43.0
go.temporal.io/sdk v1.32.1

temporal version 0.0.0-DEV (Server 1.26.2, UI 2.34.0)

</details>


---

### #642: Inconsistent behavior when asserting invocations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/642 |
| **State** | OPEN |
| **Author** | embano1 (Michael Gasch) |
| **Created** | 2021-11-18 15:42:31.000 UTC (4y 1m ago) |
| **Updated** | 2024-03-15 05:00:05.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 7 |
| **Priority Score** | 9 |
| **Labels** | potential-bug |
| **Assignees** | cretz |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior
Invocation count assertions provided by the mocking library, such as `Once()` or `Times(n)` should not show different error/panic behavior affecting test results and always fail a test if the assertion does not hold.

Either it should be documented that these methods should not be used due to this behavior or fixed, e.g. when recovering from panic and failing the test instead of passing.

## Actual Behavior
This activity is configured with retries. Under test, it throws `PanicError` in the logs when the code is executed multiple times (retries) but the **test succeeds** with `exit code 0`.

```go
env.OnActivity("MyActivity", any, any).Return(nil, errors.New("test failure")).Once() 
```

This activity is also configured with retries but since no error is returned it is only invoked once. Under test, it **fails the test** with a mocking error indicating that the function was only called once, i.e. `exit code != 0`.

```go
env.OnActivity("MyActivity", any, any).Return(nil, nil).Twice()
```

cc/ @cretz

## Steps to Reproduce the Problem
See above

## Specifications
* Version: `go.temporal.io/sdk v1.10.0`
* Platform: n/a



#### Comments (7)

<details>
<summary><strong>alfa-alex</strong> commented on 2022-08-03 10:19:17.000 UTC</summary>

Ran into the same issue (`go.temporal.io/sdk v1.15.0`).

What's your current position on this? Should the use of invocation count assertions be avoided at the moment?

</details>

<details>
<summary><strong>alfa-alex</strong> commented on 2022-08-03 10:40:57.000 UTC</summary>

Actually for my use-case there was a relatively simple fix to this: Calling `Test` on the `mock`.

So, instead of the original
```go
// NewTestWorkflowEnvironment creates a new instance of TestWorkflowEnvironment. Use the returned TestWorkflowEnvironment
// to run your workflow in the test environment.
func (s *WorkflowTestSuite) NewTestWorkflowEnvironment() *TestWorkflowEnvironment {
	return &TestWorkflowEnvironment{impl: newTestWorkflowEnvironmentImpl(s, nil)}
}
```
I'm now constructing the `TestWorkflowEnvironment` with:
```go
// NewTestWorkflowEnvironmentWithTest creates a new instance of TestWorkflowEnvironment. Use the returned TestWorkflowEnvironment
// to run your workflow in the test environment.
func (s *WorkflowTestSuite) NewTestWorkflowEnvironmentWithTest(t mock.TestingT) *TestWorkflowEnvironment {
	env := &TestWorkflowEnvironment{impl: newTestWorkflowEnvironmentImpl(s, nil)}
	env.mock.Test(t)
	return env
}
```
in the `workflow_testsuite.go`. This does actually fail the test in the above case.

Well possible this has undesired side-effects, but maybe something to consider. An alternative to having a different constructor would of course be to add a `Setter` func to the `TestWorkflowEnvironment`, but it felt quite naturally to me to construct the env with the test.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-08-03 13:21:53.000 UTC</summary>

> Under test, it throws PanicError in the logs when the code is executed multiple times (retries) but the test succeeds with exit code 0.

IIUC the original issue correctly, the code properly panics at call time when the invocation count is wrong, but the user is not checking `env.GetWorkflowError()` to get the actual workflow error so it doesn't fail their test.

The test environment is not just for running with the Go testing library. A panic calling the mock, whether that's for the assertion not holding or the body of the mock panicking, will follow normal panic paths. It is up to the user whether they treat a panic in a workflow as an error in their chosen environment.

Alternatively, if you can't properly assert that the panic does not occur in the workflow for whatever reason, you can just count invocations inside the body of the mock and assert later.

Does that help? Or am I misunderstanding the concern?

</details>

<details>
<summary><strong>alfa-alex</strong> commented on 2022-08-03 15:13:57.000 UTC</summary>

So you imply we should check the invocation count assertions via `env.GetWorkflowError()`? I thought that's what `env.AssertExpectations(t)` is for. The documentation reads:
```go
// AssertExpectations  asserts that everything specified with OnActivity
// in fact called as expected.  Calls may have occurred in any order.
```

To give you a minimal working example, change the `Test_Workflow` test of the `helloworld` sample in the `temporal-samples` project to:
```go
	testSuite := &testsuite.WorkflowTestSuite{}
	env := testSuite.NewTestWorkflowEnvironment()

	// Mock activity implementation
	env.OnActivity(Activity, mock.Anything, "Temporal").Return("", errors.New("some error")).Once()
	env.ExecuteWorkflow(Workflow, "Temporal")

	require.True(t, env.IsWorkflowCompleted())
	env.AssertExpectations(t)
```
Even though the output correctly indicates that `Activity` was called more than once, the test doesn't fail. And `env.AssertExpectations` returns true.

Am I misunderstanding the description of that function?

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-08-03 15:23:04.000 UTC</summary>

> So you imply we should check the invocation count assertions via env.GetWorkflowError()? I thought that's what env.AssertExpectations(t) is for.

My mistake, yes, you can and should use that function if you want to assert the mocking expectations and you are in a test setting. I had forgotten about this helper. But you also want to check no error happened _inside_ the workflow by checking the workflow error.

The docs for https://pkg.go.dev/github.com/stretchr/testify/mock#Mock.AssertExpectations basically calls https://github.com/stretchr/testify/blob/v1.8.0/mock/mock.go#L610-L612 which seems to suggest it only fails if there were fewer calls than expected, not more. I believe this is how that mocking library works - when invoking more than expected, error at callsite, when invoking fewer than expected, error at expectation assertion site.

</details>

<details>
<summary><strong>alfa-alex</strong> commented on 2022-08-04 16:27:12.000 UTC</summary>

Yeah, it looks like a testify issue. I think it's been described here: https://github.com/stretchr/testify/issues/608.

Thank you!

---

Edit: To summarize, the invocation count assertions should probably best be avoided. Other than that you could use the following "solution" from a user side (if you need this in a test and you are testing a workflow run that is expected to fail, so you want to distinguish the errors):
```go
err := env.GetWorkflowError()
var panicErr *temporal.PanicError
if ok := errors.As(err, &panicErr); ok && strings.HasPrefix(panicErr.Error(), "\nassert: mock:") {
	assert.Fail(t, "failed mock assertion")
}
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-08-04 18:46:02.000 UTC</summary>

> invocation count assertions should probably best be avoided

Concur. And on a general best-practices note, the ease of adding counts can tempt one to overly assert counts leading to unnecessary expectations about the internals of the code under test. But if you had to manually count if you needed to confirm invocation counts, you'd be more willing to only do it where it was important to verify behavior.

</details>


---

### #475: Panic when querying during Workflow failure + retry 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/475 |
| **State** | OPEN |
| **Author** | leowmjw |
| **Created** | 2021-06-21 16:47:49.000 UTC (4y 6m ago) |
| **Updated** | 2022-06-01 13:34:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 9 |
| **Priority Score** | 9 |
| **Labels** | external dependency |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
No panic should occur when querying a registered QueryHandler; even when the workflow has failed and is retrying

## Actual Behavior
After max attempt for Activity has passed; the whole Workflow has failed and is restarted.

Observe the panic "Attempt to generate a command before processing WorkflowTaskStarted event" due to "WorkerType WorkflowWorker Error operation GetWorkflowExecution encounter not found"

## Logs
$ go run main.go
...
2021/06/21 23:31:45 ERROR Activity error. Namespace default TaskQueue onboarding.queue.name WorkerID 11259@Mojaves-iMac.local@ WorkflowID mleow-1 RunID a7f324da-ccf1-4f1a-97d3-f43df8af9260 ActivityType FailActivities Attempt 2 Error FAIL mleow-1 (type: TEMP, retryable: true)
WID:  mleow-1  CTX_ATTEMPT:  2

2021/06/21 23:31:45 ERROR Workflow panic Namespace default TaskQueue onboarding.queue.name WorkerID 11259@Mojaves-iMac.local@ WorkflowType RetryWorkflow WorkflowID mleow-1 RunID 07917e48-4dcf-447f-8e0c-9c55674051c5 Attempt 1 Error Attempt to generate a command before processing WorkflowTaskStarted event StackTrace coroutine root [panic]:

go.temporal.io/sdk/internal.(*commandsHelper).getNextID(...)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/internal_decision_state_machine.go:824
go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GenerateSequence(...)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/internal_event_handlers.go:453
go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).ExecuteActivity(0xc00018d560, 0x0, 0x0, 0x1a58fa3, 0x15, 0x0, 0x0, 0xbebc200, 0x0, 0x0, ...)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/internal_event_handlers.go:464 +0x696
go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteActivity(0xc000180c30, 0x1b5d9f8, 0xc0004b61e0, 0x1ca2c81, 0xe, 0xc000182950, 0x1, 0x1, 0x0, 0x0)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/workflow.go:491 +0x6bd
go.temporal.io/sdk/internal.ExecuteActivity(0x1b5d9f8, 0xc0004b61e0, 0x1929b60, 0x1a933b0, 0xc000182950, 0x1, 0x1, 0x0, 0x0)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/workflow.go:440 +0x128
go.temporal.io/sdk/workflow.ExecuteActivity(...)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/workflow/workflow.go:113
app/bug-wf-retry.RetryWorkflow(0x1b5d870, 0xc0001b6080, 0xc000410a20, 0x7, 0x0, 0x0)
        /Users/leow/GOMOD/testcase-temporal/bug-wf-retry/workflow.go:42 +0x487
reflect.Value.call(0x19351e0, 0x1a933b8, 0x13, 0x1a4a44d, 0x4, 0xc0004b6150, 0x2, 0x2, 0x2, 0x18, ...)
        /usr/local/Cellar/go/1.16.5/libexec/src/reflect/value.go:476 +0x8e7
reflect.Value.Call(0x19351e0, 0x1a933b8, 0x13, 0xc0004b6150, 0x2, 0x2, 0x1, 0x2, 0xc000180c30)
        /usr/local/Cellar/go/1.16.5/libexec/src/reflect/value.go:337 +0xb9
go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow(0xc000180c30, 0x1b5d870, 0xc0001b6080, 0xc0000c0c80, 0xd, 0xc0001828f0, 0x1, 0x1, 0x0, 0x0, ...)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/workflow.go:398 +0x2cb
go.temporal.io/sdk/internal.(*workflowExecutor).Execute(0xc0001b6000, 0x1b5d870, 0xc0001b6080, 0xc000367d10, 0xc0004e5738, 0x1889225, 0x0)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/internal_worker.go:740 +0x35a
go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1(0x1b5d9f8, 0xc0004b6120)
        /Users/leow/go/pkg/mod/go.temporal.io/sdk@v1.7.0/internal/internal_workflow.go:494 +0xf5

2021/06/21 23:31:45 WARN  Failed to process workflow task. Namespace default TaskQueue onboarding.queue.name WorkerID 11259@Mojaves-iMac.local@ WorkflowType RetryWorkflow WorkflowID mleow-1 RunID 07917e48-4dcf-447f-8e0c-9c55674051c5 Attempt 1 Error Attempt to generate a command before processing WorkflowTaskStarted event
2021/06/21 23:31:45 INFO  Task processing failed with error Namespace default TaskQueue onboarding.queue.name WorkerID 11259@Mojaves-iMac.local@ WorkerType WorkflowWorker Error operation GetWorkflowExecution encounter not found

==================

## Steps to Reproduce the Problem

  1. Workflow that runs activity with MaxAttempts = 2
  2. Once reach above max, activity fails and cause the workflow itself to fail and restart
  3. When above is happening, query is concurrently running

## Code Snippet

### Query
```
// Loop and query continuously ..
				time.Sleep(time.Second / 2)
				res, qerr := c.QueryWorkflow(ctx,
					fmt.Sprintf("mleow-%d", i), "",
					"CORE/current_state")
				if qerr != nil {
...
					continue
				}
				err := res.Get(&status)
				if err != nil {
					fmt.Println("GET_ERR:", err.Error())
				}
				fmt.Println("STATUS: ", status)
```
======

### Worker
```
...
			// Start workflow
			wid := fmt.Sprintf("mleow-%d", id)
			wfo := client.StartWorkflowOptions{
				ID:                       wid,
				TaskQueue:                onboarding_patient.WorkflowQueue,
				WorkflowExecutionTimeout: 2 * time.Minute,
				WorkflowRunTimeout:       time.Minute,
				WorkflowTaskTimeout:      time.Second,
				RetryPolicy: &temporal.RetryPolicy{
					InitialInterval: time.Second,
					MaximumAttempts: 2,
				},
			}
			wfr, err := c.ExecuteWorkflow(context.Background(), wfo,
				bug_wf_retry.RetryWorkflow,
				wid,
			)
			if err != nil {
				panic(err)
			}
			fmt.Println("WFIF: ", wfr.GetID(), "RID: ", wfr.GetRunID())
...
```
=======

### Workflow + Activity
```
func RetryWorkflow(ctx workflow.Context, wid string) error {
	fmt.Println("WID: ", wid, " CTX_ATTEMPT: ", workflow.GetInfo(ctx).Attempt)
	// Status to keep track; we return as we go along
	status := "Starting RetryWorkflow ..."
	herr := workflow.SetQueryHandler(ctx, "CORE/current_state", func() (string, error) {
		// Once completed/failed goes into replay state
		if workflow.IsReplaying(ctx) {
			fmt.Println("REPLAYING ...")
		}
		return status, nil
	})
	if herr != nil {
		status = "Failed to set QueryHandler!"
		return herr
	}
	// Activities
	ao := workflow.ActivityOptions{
		TaskQueue:           onboarding_patient.WorkflowQueue,
		StartToCloseTimeout: time.Millisecond * 200,
		RetryPolicy: &temporal.RetryPolicy{
			InitialInterval: time.Second,
			MaximumAttempts: 2,
		},
	}
	ctx = workflow.WithActivityOptions(ctx, ao)
	f := workflow.ExecuteActivity(ctx, FailActivities, wid)
	f.Get(ctx, nil)
	status = "After failed activity .."

	return fmt.Errorf("UNKNOWN!")
}

func FailActivities(wid string) error {
	fmt.Println("WID: " + wid + " FAIL :( :(")
	return temporal.NewApplicationError(
		fmt.Sprintf("FAIL %s", wid), "TEMP",
	)
}
```
==============

## Specifications

  - Version: SDK v.1.7.0
  - Platform: Linux, docker-compose


#### Comments (9)

<details>
<summary><strong>vitarb</strong> commented on 2021-06-23 21:51:52.000 UTC</summary>

Are you seeing this error persistently (e.g. workflow is getting blocked) or is it cleared after the retry?

</details>

<details>
<summary><strong>leowmjw</strong> commented on 2021-06-24 10:32:00.000 UTC</summary>

@vitarb The workflow is not blocked and retry happens as expected; but this is just a toy case to reproduce. 

I submitted as per requested  by @samarabbas just to make sure this is not an edge case that might affect production/more complex scenarios.

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-14 14:23:05.000 UTC</summary>

I have replicated this. In cases where a query is sent to a not-yet-started workflow (can happen during restart, cron, etc), the task polled has only a history with `WorkflowExecutionStarted` with the query and the SDK expects queries to only be handled after `WorkflowTaskStarted`. I am checking with @mfateev, @yiminc, @wxing1292, and others to determine the possible route to take here.

</details>

<details>
<summary><strong>tminusplus</strong> commented on 2021-12-16 08:04:52.000 UTC</summary>

Have also experienced a similar panic. It was for a cron workflow which spawns parallel activity executions and then waits for all of them to finish. Looks like the workflow is able to retry successfully later. Here is a sample, I removed two service specific frames in this backtrace for privacy:
```
external/io_temporal_go_sdk/internal/internal_workflow.go:499 +0xd2
go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1({0x2745f38, 0xc000439bc0})
	external/io_temporal_go_sdk/internal/internal_worker.go:741 +0x292
go.temporal.io/sdk/internal.(*workflowExecutor).Execute(0xc0034d6580, {0x2745de8, 0xc0034d6600}, 0x25)
	external/io_temporal_go_sdk/internal/workflow.go:415 +0x166
go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow(0xc00b7ab9f0, {0x2745de8, 0xc0034d6600}, 0xc0045cb7e8)
	external/io_temporal_go_sdk/internal/internal_worker.go:1512 +0x136
go.temporal.io/sdk/internal.executeFunction({0x11802e0, 0xc0003f1ee0}, {0xc001471e08, 0x1, 0xc001420000})
	GOROOT/src/reflect/value.go:339 +0xc5
reflect.Value.Call({0x11802e0, 0xc0003f1ee0, 0x403c6c}, {0xc0045cb800, 0x1, 0x1})
	GOROOT/src/reflect/value.go:543 +0x814
... service backtrace for workflow ...
go.temporal.io/sdk/workflow.ExecuteActivity(...)
	external/io_temporal_go_sdk/internal/workflow.go:455 +0x185
go.temporal.io/sdk/internal.ExecuteActivity({0x2745f38, 0xc000439d70}, {0x11cb080, 0x254c158}, {0xc000474fc0, 0x1, 0x1})
	external/io_temporal_go_sdk/internal/workflow.go:511 +0x782
go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteActivity(0xc00b7ab9f0, {0x2745f38, 0xc000439dd0}, {0x29d3360, 0x6}, {0xc000474fc0, 0x1, 0x1})
	external/io_temporal_go_sdk/internal/internal_event_handlers.go:463 +0x545
go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).ExecuteActivity(0xc000100e00, {{{0x0, 0x0}, {0xc00004bb00, 0xf}, 0x0, 0x0, 0x1a3185c5000, 0x0, 0x0, ...}, ...}, ...)
	external/io_temporal_go_sdk/internal/internal_event_handlers.go:452
go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GenerateSequence(...)
	external/io_temporal_go_sdk/internal/internal_decision_state_machine.go:833
go.temporal.io/sdk/internal.(*commandsHelper).getNextID(...)
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 14:31:31.000 UTC</summary>

Are you regularly querying the workflow and getting "Attempt to generate a command before processing WorkflowTaskStarted event"?

It is currently a bug in the SDK where querying a workflow while it is waiting to start (via retry, cron, etc) is causing a panic. Once https://github.com/temporalio/temporal/issues/2300 is solved, the query should fail from the server side and not reach the worker to cause this panic.

</details>

<details>
<summary><strong>tminusplus</strong> commented on 2021-12-16 20:36:05.000 UTC</summary>

We are not querying the workflow at all. Essentially the workflow is doing the same as https://github.com/temporalio/samples-go/blob/main/branch/workflow.go#L34 where it spawns multiple concurrent activities.

One potential issue that might be causing it, is that we for-loop through the futures twice. This could be improved, but the intention was that we'd potentially spawn hundreds of activities from this workflow, so we wanted to batch them and ensure we only spawn a limited number of activities per a batch. I reworked the example to replicate our workflow:
```
func SampleBranchWorkflow(ctx workflow.Context, totalBranches int) (result []string, err error) {
	ao := workflow.ActivityOptions{
		StartToCloseTimeout: 10 * time.Second,
	}
	ctx = workflow.WithActivityOptions(ctx, ao)

        var futures []workflow.Future
        for batch := 0; batch < 10; batch++ {
	    for i := 1; i <= totalBranches; i++ {
		future := workflow.ExecuteActivity(ctx, SampleActivity, activityInput)
		futures = append(futures, future)
	    }
 
            // Block until this batch finishes processing
            for _, future := range futures {
		err = future.Get(ctx, nil)
		if err != nil {
			return
		}
	    }
        }

	// One last sweep to ensure all scheduled activities are complete
	for _, future := range futures {
            err = future.Get(ctx, nil)
	    if err != nil {
		return
	    }
	}
}
```


</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 20:44:37.000 UTC</summary>

Ah, that may be different (this issue is for queries during retry in particular). Can you open a new issue? Also, you are looping through issues more than twice, e.g. the second batch will loop through the first batch's, etc. Also, based on that code, that last for loop provides no value since you are doing the exact same thing as the last step in the previous loop that is guaranteed to have run 10 times before it got there. Maybe you want to add `futures = futures[:0]` as the first step of your first loop and remove the last loop?

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-03-03 14:11:42.000 UTC</summary>

Update for those reading this issue. The primary issue here (last few comments a different thing) is https://github.com/temporalio/temporal/issues/2300.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-06-01 13:34:13.000 UTC</summary>

This may be solved with https://github.com/temporalio/temporal/pull/2826. Once released, we will write a test confirming that queries can be issued during workflow retry or cron or pending continue as new.

</details>


---

### #1330: Add TaskQueue to TracerStartSpanOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1330 |
| **State** | OPEN |
| **Author** | caramelomartins (Hugo Martins) |
| **Created** | 2023-12-20 09:54:24.000 UTC (2 years ago) |
| **Updated** | 2024-01-08 18:28:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hey! I'll stick to template.

**Is your feature request related to a problem? Please describe.**

OpenTelemetry allows specifying "a remote service" to which a connection is made [through a peer service name](https://opentelemetry.io/docs/instrumentation/java/automatic/agent-config/#peer-service-name). This can be helpful to determine interactions between services - namely workers - even if Temporal's architecture is asynchronous.

Currently,  none of the available options in [TracerStartSpanOptions](https://github.com/temporalio/sdk-go/blob/5fdbecc56c8cd3bab8e8e33f7073070b98cefc0c/interceptor/tracing_interceptor.go#L123) allows us to infer if a worker is making a request that will be fulfilled by another worker. This makes it impossible to add peer service information in outbound calls (e.g. `StartActivity` or `StartWorkflow`).

**Describe the solution you'd like**

One potential approach could be to share the `TaskQueue` as a `TracerStartSpanOption`, similar to what is already done with the Name and Operation being executed. This would allow developers to externally infer if a cross-service request is being made based on whether the `TaskQueue` of the outbound request is different than the `TaskQueue` where a worker is executing now.

I'm sure this isn't an appropriate solution for all situations, but that could be left to the developer to decide - depending on the architecture of their services. Just providing the `TaskQueue` there could potentially open space for attempting to infer peer services.

**Describe alternatives you've considered**

I considered using the Name as the peer service but that value changes to often to be able to provide a meaningful signal for cross-service interactions. Nonetheless, I'm very open to other suggestions about how to go about doing this.

I'm happy to open a PR and work on this, but wouldn't want to do that before opening a feature request and discussing it.

Thank you!

#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2024-01-03 16:55:48.000 UTC</summary>

It's not just task queue, there are a lot of things people may want as tags or customize the span.

I wonder if there is a way to provide the context to `TracerStartSpanOptions` (that is probably `interface{ Value(any) any }`) so that you can extract anything out of the context. For a workflow context this would be easy enough to get the info, but for a client context, you may be expected to provide something to the context before starting.

Another approach may be to have a special context key for storing tags on the context, and you can have an outer interceptor that sets this task queue that is then read by the span starter.

</details>

<details>
<summary><strong>caramelomartins</strong> commented on 2024-01-04 18:06:54.000 UTC</summary>

@cretz I mentioned `TaskQueue` in attempt to not overload the feature request with a lot of things. Your suggestion is sensible though, I feel users will increasingly want to have more and more data - likely.

Adding more generic approaches, though, could easily complicate matters a bit, no? Adding the `TaskQueue` seems quite simple, if we do add context then there's already a divergence between `context.Context` and `workflow.Context` depending on the span that we are about to start.

I wonder if it makes sense to add the `TaskQueue` as an intermediate step, while discussing more generic approaches keeps happening?



</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-05 14:07:26.000 UTC</summary>

@Quinn-With-Two-Ns do you have an opinion here? Maybe we want `ActivityContext` and `WorkflowContext` fields? Maybe can just provide the `interface{ Value(any) any }` and ask outer interceptors to set what they may want? Or maybe we should just encourage users that need advanced tracer implementations to write their own interceptors instead of using the existing ones? Or maybe task queue is ok for now?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-01-05 17:42:26.000 UTC</summary>

Hm I don't think just attaching `ActivityContext` and `WorkflowContext` fields is sufficient since you may also want to have additional information on the client trace calls as well. I  guess `interface{ Value(any) any }` cannot be auto set based on what is in the calling correct?

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-05 17:58:45.000 UTC</summary>

> I guess interface{ Value(any) any } cannot be auto set based on what is in the calling correct?

It would be set by our primary tracing interceptor impl. To propagate info, you'd have to pass information through the context via an outer interceptor probably. Another approach maybe is a certain context key that contains span tags that is then extracted at span creation time. Of course this also requires an outer interceptor to take something like the task queue and put it in there.

So two questions: 1) Do we want to support generic span tag customization or just add task queue to span options? and 2) If we do want to support generic span tag customization, how do we do it reasonably?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-01-05 18:16:03.000 UTC</summary>

I would support generic span tag customization over adding just task queue. I am not sure any approach will really fufill the ask of this issue

>allows us to infer if a worker is making a request that will be fulfilled by another worker

Since task queue or any information added on the interceptor side is not enough to tell if a call will be fulfilled by the callers worker or a remote worker in general

Reactions: 👍 2

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-05 18:39:24.000 UTC</summary>

I suppose it will be enough if they guarantee it's a different task queue, but for the same task queue you are correct there is no guarantee.

</details>

<details>
<summary><strong>caramelomartins</strong> commented on 2024-01-08 18:28:08.000 UTC</summary>

> I would support generic span tag customization over adding just task queue. I am not sure any approach will really fufill the ask of this issue
> 
> > allows us to infer if a worker is making a request that will be fulfilled by another worker
> 
> Since task queue or any information added on the interceptor side is not enough to tell if a call will be fulfilled by the callers worker or a remote worker in general

> I suppose it will be enough if they guarantee it's a different task queue, but for the same task queue you are correct there is no guarantee.

This is currently the architecture I'm working with, a single queue for each worker, which is why I feel having the queue in there would work out. It might not be a generic solution for all users though, as described, I understand that.

</details>


---

### #1114: Support activity functions with variadic arguments  

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1114 |
| **State** | OPEN |
| **Author** | aryzhov (Alex Ryzhov) |
| **Created** | 2023-05-22 16:49:50.000 UTC (2y 7m ago) |
| **Updated** | 2025-04-21 07:26:30.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

I need to make gRPC function calls from my workflows. All gRPC client functions generated by `protoc` have the variadic  parameter `grpc.CallOption`:

```protobuf
type SomeClient interface {
	SomeMethod(ctx context.Context, in *SomeRequest, opts ...grpc.CallOption) (*SomeResponse, error)
}
```

I am able to register `SomeMethod` as an activity but when I try calling it from a workflow, passing an empty array as the last argument, I get an error:

```
reflect: cannot use []grpc.CallOption as type grpc.CallOption in Call
```

I tried different ways of passing the `opts` parameter (omitting, null, a single instance of `grpc.CallOption`) but neither of these ways have worked. 

The issue is generic and applies to all variadic functions regardless of parameter type. I was able to reproduce the problem by modifying `GreetingSample` and adding a variadic argument to the `GetGreeting` activity.

**Describe the solution you'd like**

I can see two ways of implementing this feature:

1. Pass variadic args as an array to `ExecuteActivity()`. 
2. Pass variadic args as individual parameters to `ExecuteActivity()`. 

Upon examining source code, The first option needs a change to `executeFunction()` function in `internal_worker.go` to unpack the array. The second option requires a change to `decodeArgsToRawValues()`, also in `internal_worker.go`. I am not sure which option is better. 

**Describe alternatives you've considered**

I was able to implement a workaround by creating a utility function:
```golang
func wrapGrpcActivity[P any, R any](f func(ctx context.Context, req *P, opts ...grpc.CallOption) (*R, error)) func(ctx context.Context, req *P, opts []grpc.CallOption) (*R, error) {
	return func(ctx context.Context, req *P, opts []grpc.CallOption) (*R, error) {
		return f(ctx, req, opts...)
	}
}
```

Then I use the function when registering gRPC methods:
```golang
worker.RegisterActivityWithOptions(wrapGrpcActivity(someClient.SomeMethod), activity.RegisterOptions{Name: "SomeMethod"})
```

and I can invoke the activity as follows:

```golang
err := workflow.ExecuteActivity(ctx, "SomeMethod", &some.SomeRequest{}, nil).Get(ctx, &resp)
```

**Additional context**

I would like to add that supporting variadic args would allow developers more easily integrate existing third party APIs as activities into workflows without additional wrapping.





#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 17:55:45.000 UTC</summary>

Variadic arguments are supported I believe if you pass the slice instead of just a single value. I think this a reasonable compromise currently.

Your code will not work anyways. `grpc.CallOption` is not a convertible/serializable value. You should use a wrapper, you cannot expose gRPC client calls directly with their non-serializable arugments as activities.

</details>

<details>
<summary><strong>aryzhov</strong> commented on 2023-05-22 18:42:58.000 UTC</summary>

@cretz Let me answer the two points you made separately. First, as I had indicated, this is a generic issue, not specific to gRPC. I was able to reproduce it with an example GreetingService. If I add a variadic parameter:
```golang
func (a *Activities) GetGreeting(p ...string) (string, error) {
```
and then change `GreetingSample` to pass this parameter:
```golang
err := workflow.ExecuteActivity(ctx, a.GetGreeting, []string{"a", "b"}).Get(ctx, &greetResult)
```
I get an error:
```
reflect: cannot use []string as type string in Call
```
There is a stack trace:
```
reflect.Value.call({0x103142400?, 0x140002a05c0?, 0x12af355e8?}, {0x102f8ba78, 0x4}, {0x140000a1428, 0x1, 0x0?})
        /opt/homebrew/opt/go/libexec/src/reflect/value.go:453 +0x13c0
reflect.Value.Call({0x103142400?, 0x140002a05c0?, 0x14000447778?}, {0x140000a1428?, 0x140000a4310?, 0x9?})
        /opt/homebrew/opt/go/libexec/src/reflect/value.go:370 +0x90
go.temporal.io/sdk/internal.executeFunction({0x103142400, 0x140002a05c0}, {0x140001e8950, 0x1, 0x103275101?})
        /Users/alex/go/pkg/mod/go.temporal.io/sdk@v1.22.2/internal/internal_worker.go:1796 +0x318
go.temporal.io/sdk/internal.executeFunctionWithContext({0x1032751b8?, 0x140004403c0}, {0x103142400, 0x140002a05c0}, {0x140001e8950, 0x1, 0x1})
        /Users/alex/go/pkg/mod/go.temporal.io/sdk@v1.22.2/internal/internal_worker.go:1780 +0x160
go.temporal.io/sdk/internal.(*activityEnvironmentInterceptor).ExecuteActivity(0x140000b6a80, {0x103275180?, 0x14000440360?}, 0x140000a1410)
```


</details>

<details>
<summary><strong>aryzhov</strong> commented on 2023-05-22 18:50:16.000 UTC</summary>

@cretz For your second point, I agree that `grpc.CallOption` is not convertible, and I would need a wrapper if I had wanted to use it. However, I don't want to pass any call options, and in many cases these call options aren't being used, in which case convertibility isn't an issue. Other gRPC parameters, as my experiment shows, are convertible just fine without wrapping, as `protoc` generates `json` annotations for each field.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 18:53:14.000 UTC</summary>

:+1: Yeah we call https://pkg.go.dev/reflect#Value.Call not https://pkg.go.dev/reflect#Value.CallSlice. I assume `workflow.ExecuteActivity(ctx, a.GetGreeting, "a", "b").Get(ctx, &greetResult)` also doesn't work. I think we can support variadic args, but I think for compatibility it may have to be with how `Call` does it (so making what I put there work).

I wouldn't count on non-convertible optional variadic options always being safe. We may have static analyzers or other things in the future that check entire signatures eagerly (e.g. at registration).

</details>

<details>
<summary><strong>aryzhov</strong> commented on 2023-05-22 18:57:29.000 UTC</summary>

Yes, the second form (`err := workflow.ExecuteActivity(ctx, a.GetGreeting, "a", "b").Get(ctx, &greetResult)`) also doesn't work. It fails with a different error:
```
Error unable to decode the activity function input payload with error: payload item 0: unable to decode: json: cannot unmarshal string into Go value of type []string for function name: GetGreeting
```


Reactions: 👍 2

</details>

<details>
<summary><strong>mashail</strong> commented on 2025-04-21 07:24:56.000 UTC</summary>

I support @aryzhov in his quest. 
Our way is to create a wrapper around the rpcs just to have the method signature without variadic param 

</details>


---

### #986: AwaitWithTimeout does not cancel its timer when condition is satisfied

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/986 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-12-22 19:57:28.000 UTC (3 years ago) |
| **Updated** | 2025-01-22 13:23:00.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 5 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

Right now the timer in `AwaitWithTimeout` does not get cancelled when it's no longer needed. This means an erroneous workflow task is created when timer does fire.

**Describe the solution you'd like**

See if we can compatibly start cancelling these timers. @mfateev has suggested we add a SDK version marker to the beginning of all workflows to be able to make these kinds of changes henceforth. Should be discussed.

#### Comments (5)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2022-12-22 20:17:40.000 UTC</summary>

Is there any consequences to an erroneous workflow task being created? Just me being lazy, but do we have short example that triggers this already? 

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-12-22 20:35:14.000 UTC</summary>

> Is there any consequences to an erroneous workflow task being created?

Yes, lots. An otherwise idle workflow is now woken up to run. It'll be put to the top of LRU cache, replay itself, etc. We should reduce workflow tasks as much as is reasonable.

> Just me being lazy, but do we have short example that triggers this already?

We don't, but it'd be easy to do, just `workflow.AwaitWithTimeout(ctx, 5 * time.Second, func() bool { return true })` then sleep for 10 seconds and confirm via history your now-not-needed timer was fired at 5 seconds.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-01-04 14:05:47.000 UTC</summary>

After discussion, we are going to look into a way to set some kind of SDK version on the first wft completed that works like a version marker which will let us make going-forward-only fixes to things like this.

</details>

<details>
<summary><strong>captchanjack-anzx</strong> commented on 2025-01-22 12:17:08.000 UTC</summary>

Any update on this? With the new UI it's pretty clear timers are still not being cancelled from signals are received

<img width="420" alt="Image" src="https://github.com/user-attachments/assets/6d3c965c-8565-40d0-9b80-41612817ab91" />

my implementation:
```
	exit := false
	for !exit {
		var got SignalPayload[T]
		ok, more := s.receiveChannel.ReceiveWithTimeout(ctx, s.timeout, &got)
		if !ok {
			return ErrSignalReceiverTimeout
		}

		exit = signalCallback(got)
		if exit || !more {
			break
		}
	}

	return nil
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-22 13:22:58.000 UTC</summary>

This seems to be a duplicate post that was also made at https://github.com/temporalio/sdk-go/issues/1125#issuecomment-2607097161, answering there.

</details>


---

### #937: Add ability to keep session open in case of a worker restart.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/937 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-10-21 01:00:29.000 UTC (3y 2m ago) |
| **Updated** | 2024-12-16 20:49:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
When a worker that owns a session is restarted, the session fails and returns an error to the workflow that created the session.
This creates a problem. For many use cases, a restart of a worker is not a problem as the shared state is cached on the host disk, and the session should continue as if nothing happened. For these use cases, the session should fail only if the worker is down for a while, which indicates the host failure.

**Describe the solution you'd like**
Support special worker id that is durable across restarts and can be used to re-establish a session.
Introduce a timeout that would support automatic session reestablishing in case of worker restarts. 



#### Comments (7)

<details>
<summary><strong>AhmedMozaly</strong> commented on 2022-10-23 20:36:50.000 UTC</summary>

The current session implementation assumes that the state is temporarily preserved in the worker. Causing the session to fail when the worker restart.

In real-life scenarios, I think the common usage of sessions is just to route workflow activities to the same worker. As the state is mostly persisted on worker disk. So, I would vote for splitting the session concept into two concepts:

* `Session` which keeps the currently implemented behavior
* `DurableSession` Should NOT fail on worker restart. just retry activities on the same worker after restart. (I claim that this is the more common usage for sessions)

These two concepts can also be just an option passed to the session when being created.

Reactions: 👍 2

</details>

<details>
<summary><strong>F1bonacc1</strong> commented on 2023-07-12 12:01:25.000 UTC</summary>

Hi,

As part of my workflow in kubernetes, I need to drain all the nodes one by one.
There is no way to avoid the worker pod being restarted.
Is there any update on this issue?

Reactions: 👍 1

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-07-13 14:55:12.000 UTC</summary>

Hi @F1bonacc1 ,

There is no update on this issue. The best way to achieve similar behaviour is to create a task queue per worker. Then you assign consistent task queue across restarts.

We show how to create per task queue workers [here](https://github.com/temporalio/samples-go/tree/main/activities-sticky-queues)

</details>

<details>
<summary><strong>AhmedMozaly</strong> commented on 2023-07-13 17:12:55.000 UTC</summary>

Using `a task queue per worker` won't be the best solution when `retry on another worker if the current one dies`
What we came up with. Is to use mix of both session & task queue per worker:
* Each worker would listen on two task queues `public-queue` & `unique-queue-per-worker` 
* Use a session for the whole workflow
* The first activity in the workflow would choose the right task queue to use for all following activities 
* If the worker dies, the whole workflow would be retried
* When a retries happens, the first activity would choose a task queue for a healthy worker 


</details>

<details>
<summary><strong>mohamedazouz</strong> commented on 2023-11-15 14:02:40.000 UTC</summary>

@AhmedMozaly I think this example of [session-failure](https://github.com/temporalio/samples-go/tree/main/session-failure) by @Quinn-With-Two-Ns, is much much easier and straight forward than having a workaround task queues.

</details>

<details>
<summary><strong>AhmedMozaly</strong> commented on 2023-11-19 08:28:04.000 UTC</summary>

@mohamedazouz [session-failure](https://github.com/temporalio/samples-go/tree/main/session-failure) by @Quinn-With-Two-Ns, is easier for simpler requirements.

We had a scenario with more requirements:
*  if the worker is restarted (for example due to new version release) we need to fail the session but retry **on the same** worker
* if the worker dies, fail the session and retry on any other worker

It would be great to see this scenario has built-in support in Temporal 

Reactions: 👍 1

</details>

<details>
<summary><strong>mohamedazouz</strong> commented on 2023-11-20 09:33:52.000 UTC</summary>

@AhmedMozaly I agree, I think this should come as native functionality when a session failed should be restarted as a whole in new or previous worker based on options

</details>


---

### #884: [Feature Request] Add ability to support passing sessions from parent to child wf

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/884 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-08-17 23:04:27.000 UTC (3y 4m ago) |
| **Updated** | 2024-12-16 20:49:53.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

Feature request is to add ability to support passing sessions from parent to child workflow.
The sessions should still be opened and closed by the parent. Asking just for ability to pass them to child while open.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2022-08-29 19:52:09.000 UTC</summary>

I just realized you can do this with recreate session. So in the parent workflow you call `token := workflow.GetSessionInfo(sessionCtx).GetRecreateToken()`, then pass that token to the child, which can then call `workflow.RecreateSession` with that token.

@tsurdilo - Do you believe this solves the use case?

</details>

<details>
<summary><strong>mfateev</strong> commented on 2022-08-29 21:21:49.000 UTC</summary>

Recreate session solves a different use case of opening a new session on the same computer. This feature request is to give ability to share session among multiple workflows while it is still open.


</details>

<details>
<summary><strong>cretz</strong> commented on 2022-08-29 21:22:54.000 UTC</summary>

Ah, true, ok that is not reuse but an actual recreation.

</details>


---

### #167: Activity times out in test environment with child workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/167 |
| **State** | OPEN |
| **Author** | nirshirion (Nir Shirion) |
| **Created** | 2020-06-21 16:51:16.000 UTC (5y 6m ago) |
| **Updated** | 2024-03-15 22:58:51.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 👀 1 |

#### Description

## Expected Behavior
GetWorkflowError() should not return an error.

## Actual Behavior
GetWorkflowError() returns an error:
TimeoutType: StartToClose, Cause: context deadline exceeded

## Steps to Reproduce the Problem

  1. Create a workflow that calls an activity with ScheduleToStartTimeout and StartToCloseTimeout initialized (in my case, it was 1 minute), and ScheduleToCloseTimeout uninitialized. If ScheduleToCloseTimeout is initialized, the problem doesn't happen.
  2. Create a parent workflow that calls the child workflow from part 1.
  3. Create a TestWorkflowEnvironment and execute the parent workflow.

## Specifications

  - Version: 0.24.4


#### Comments (3)

<details>
<summary><strong>cowell21</strong> commented on 2020-08-28 02:45:25.000 UTC</summary>

I'm experiencing the same issue with 0.28.1.

</details>

<details>
<summary><strong>bradleymcallister97</strong> commented on 2020-09-30 20:47:20.000 UTC</summary>

Has there been any progress on this? I am also having this issue with version `0.28.1`

</details>

<details>
<summary><strong>yeshwanthPentakota</strong> commented on 2021-08-14 00:46:45.000 UTC</summary>

Any progress on this? i am seeing the same error in `1.9.0`

</details>


---

### #1208: Canceling a context with multiple child contexts can be non deterministic

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1208 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-08-24 15:41:36.000 UTC (2y 4m ago) |
| **Updated** | 2024-03-04 18:55:53.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 2 |
| **Priority Score** | 6 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

## Expected Behavior
Child context cancellation propagates in a deterministic order 

## Actual Behavior
Child context cancellation does not propagates in a deterministic order.

When a parent context cancels its' children it loops [through a map](https://github.com/temporalio/sdk-go/blob/b9e5e241869fdb39b03ef8b6ef043ce75c78344e/internal/context.go#L338). Map order in Go is not deterministic so the order child contexts are canceled is not deterministic.

## Steps to Reproduce the Problem
```
func TestContextCancellationOrderDeterminism(t *testing.T) {
	/*
		Previously, child-contexts were stored in a map, preventing deterministic order when propagating cancellation.
		The order of branches being selected in this test was random, both for the first event and in following ones.

		In principle this should be fine, but it's possible for the effects of cancellation to trigger a selector's
		future-done callback, which currently records the *real-time*-first event as the branch to unblock, rather than
		doing something more safe by design (e.g. choosing based on state when the selector's goroutine is unblocked).

		Unfortunately, we cannot change the selector's behavior without introducing non-backwards-compatible changes to
		currently-working workflows.

		So the workaround for now is to maintain child-context order, so they are canceled in a consistent order.
		As this order was not controlled before, and Go does a pretty good job at randomizing map iteration order,
		converting non-determinism to determinism should be strictly no worse for backwards compatibility, and it
		fixes the issue for future executions.
	*/
	check := func(t *testing.T, separateStart, separateSelect bool) {
		env := newTestWorkflowEnv(t)
		act := func(ctx context.Context) error {
			return nil // will be mocked
		}
		wf := func(ctx Context) ([]int, error) {
			ctx, cancel := WithCancel(ctx)
			Go(ctx, func(ctx Context) {
				_ = Sleep(ctx, time.Minute)
				cancel()
			})

			// start some activities, which will not complete before the timeout cancels them
			ctx = WithActivityOptions(ctx, ActivityOptions{
				TaskQueue:              "",
				ScheduleToCloseTimeout: time.Hour,
				ScheduleToStartTimeout: time.Hour,
				StartToCloseTimeout:    time.Hour,
			})
			s := NewSelector(ctx)
			var result []int
			for i := 0; i < 10; i++ {
				i := i
				// need a child context, a future alone is not enough as it does not become a child
				cctx, ccancel := WithCancel(ctx)

				s.AddFuture(ExecuteActivity(cctx, act), func(f Future) {
					ccancel() // TODO: is this necessary to prevent leaks?  if it is, how can we make it not?
					err := f.Get(ctx, nil)
					if err == nil || !IsCanceledError(err) {
						// fail the test, this should not happen - activities must be canceled or it's not valid.
						t.Errorf("activity completion or failure for some reason other than cancel: %v", err)
					}
					result = append(result, i)
				})

				if separateStart {
					// yield so they are submitted one at a time, in case that matters
					_ = Sleep(ctx, time.Second)
				}
			}
			for i := 0; i < 10; i++ {
				if separateSelect {
					// yield so they are selected one at a time, in case that matters
					_ = Sleep(ctx, time.Second)
				}
				s.Select(ctx)
			}

			return result, nil
		}
		env.RegisterWorkflow(wf)
		env.RegisterActivity(act)

		// activities must not complete in time
		env.OnActivity(act, mock.Anything).After(5 * time.Minute).Return(nil)

		env.ExecuteWorkflow(wf)
		require.NoError(t, env.GetWorkflowError())
		var result []int
		require.NoError(t, env.GetWorkflowResult(&result))
		require.NotEmpty(t, result)
		assert.Equal(t, 0, result[0], "first activity to be created should be the first one canceled")
		assert.Equal(t, []int{1, 2, 3, 4, 5, 6, 7, 8, 9}, result[1:], "other activities should finish in a consistent (but undefined) order")
	}

	type variant struct {
		name           string
		separateStart  bool
		separateSelect bool
	}
	// all variants expose this behavior, but being a bit more exhaustive in the face
	// of decision-scheduling differences seems good.
	for _, test := range []variant{
		{"many in one decision", false, false},
		{"many started at once, selected slowly", false, true},
		{"started slowly, selected quickly", true, false},
		{"started and selected slowly", true, true},
	} {
		t.Run(test.name, func(t *testing.T) {
			check(t, test.separateStart, test.separateSelect)
		})
	}
}

```

Note: this test came from [cadence go client ](https://github.com/uber-go/cadence-client) where I noticed they had fixed this bug.



#### Comments (2)

<details>
<summary><strong>throwaway58383958484</strong> commented on 2024-03-04 16:33:24.000 UTC</summary>

Could this be fixed now using the new helper? https://github.com/temporalio/sdk-go/pull/1340

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-03-04 18:55:52.000 UTC</summary>

No since the keys of the map cannot be sorted. Likely we would just copy what `Cadence` did to resolve this problem https://github.com/uber-go/cadence-client/commit/dcaec7737070ebe0889f1c9bb57c2552c8bd7d86

</details>


---

### #982: Cannot register mock activity with string name on test workflow environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/982 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-12-13 15:07:46.000 UTC (3 years ago) |
| **Updated** | 2025-01-12 12:32:11.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 4 |
| **Priority Score** | 6 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

Should be able to call `OnActivity("string-name"` without having registered it first

## Actual Behavior

We check whether it was registered first. There are activities defined in different languages that do not have a Go function to have been registered.

Stop requiring activities to be registered before mocking them.

#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2023-03-02 15:00:24.000 UTC</summary>

We may have to require registration first, but we should at least document that we require registration first.

</details>

<details>
<summary><strong>Turao</strong> commented on 2024-12-29 14:41:15.000 UTC</summary>

I also bumped into this issue while learning how to use the SDK.

I don't understand why registration is even required in the first place, since `OnActivity` aims to override the function's behavior - the original function is completely ignored: https://github.com/temporalio/sdk-go/blob/master/internal/workflow_testsuite.go#L413

To make matters worse, it looks like we cannot even register the activities before calling `OnActivity`, since:
- `RegisterActivity` expects a function (or struct?)
- `RegisterActivityWithOptions` expects an internal struct (and we cannot use internal packages, else we get "use of internal package go.temporal.io/sdk/internal not allowed")

Example: https://github.com/Turao/temporal-study/blob/main/src/temporal/workflows/start-new-project/workflow_test.go

Could this assertion be dropped? It feels quite unnecessary.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-06 15:42:05.000 UTC</summary>

> RegisterActivity expects a function (or struct?)

A dummy function works fine

> RegisterActivityWithOptions expects an internal struct (and we cannot use internal packages, else we get "use of internal package go.temporal.io/sdk/internal not allowed")

Use `go.temporal.io/sdk/activity.RegisterOptions` which is an alias to that internal type

> Could this assertion be dropped? It feels quite unnecessary.

I think the issue is that local activities expect to validate the argument types before dispatching to the actual activity, which the mock can provide. It may be possible for us to relax this requirement since it is local activity only, which is the reason we created this issue. In the meantime, just register a dummy function that has the proper argument types.

Reactions: 👍 1

</details>

<details>
<summary><strong>Turao</strong> commented on 2025-01-12 12:32:05.000 UTC</summary>

> In the meantime, just register a dummy function that has the proper argument types.

That works! Thanks for the explanation :)

</details>


---

### #2109: MutableSideEffect in test framework ignores cmp function

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2109 |
| **State** | OPEN |
| **Author** | no-life |
| **Created** | 2025-11-13 17:35:49.000 UTC (1 months ago) |
| **Updated** | 2025-11-13 20:20:54.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

In this line cmp is ignored
https://github.com/temporalio/sdk-go/blob/master/internal/internal_workflow_testsuite.go#L2875

## Expected Behavior
In test framework MutableSideEffect with cmp `func(a, b any) bool { return true }` should not update value, even if value is different by any means.

## Actual Behavior
In test framework MutableSideEffect with cmp `func(a, b any) bool { return true }` updates value

## Steps to Reproduce the Problem

run
```
func WF(ctx workflow.Context) error {
	var out1 bool
	err := workflow.MutableSideEffect(ctx, "key",
		func(workflow.Context) any { return true }, 
		nil,
	).Get(&out1)
	if err != nil {
		panic(err)
	}

	var out2 bool
	err = workflow.MutableSideEffect(ctx, "key",
		func(workflow.Context) any { return false },
		func(a, b any) bool { return true },
	).Get(&out2)
	if err != nil {
		panic(err)
	}
	
	if out1 != out2 {
		return fmt.Errorf("side effect values are inconsistent: %v vs %v", out1, out2)
	}

	return nil
}
```
in test framework, error happens

## Specifications

  - Version: 1.26.0

upd: fixed typo "you are putting the result into out1, which I believe should be out2"

#### Comments (1)

<details>
<summary><strong>yuandrew</strong> commented on 2025-11-13 20:12:06.000 UTC</summary>

Thanks for the bug report, this is indeed something that wasn't implemented properly in the workflow testsuite. 

A small note, from your second call to `MutableSideEffect`, you are putting the result into `out1`, which I believe should be`out2`. Guesing it's a copy-paste error. 

</details>


---

### #1351: Support interceptor on WorkflowRun.Get

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1351 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-01-14 01:14:54.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-16 15:28:06.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 3 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
When using a context aware data converter that uses the workflow ID (or any workflow options), the workflows result will be encoded using the workflow ID. When reading the workflow result the data converter must also have the workflow ID passed. With every other client call to a workflow execution this can be set in the interceptor, except for getting the workflow result because there is no interceptor.

**Describe the solution you'd like**
Support interceptor on `WorkflowRun.Get`

Java SDK Also supports it:

https://javadoc.io/static/io.temporal/temporal-sdk/1.22.3/io/temporal/common/interceptors/WorkflowClientCallsInterceptor.html#getResult(io.temporal.common.interceptors.WorkflowClientCallsInterceptor.GetResultInput)


#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-01-14 01:15:33.000 UTC</summary>

related: https://github.com/temporalio/sdk-go/issues/1349

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-16 14:02:39.000 UTC</summary>

Note, many other SDKs (TS, Python, and .NET) do not support intercepting result fetching. Java is unique here. Most, including Go, support wrapping the result from start to customize result fetching. But as for manually getting a workflow run/handle, only Java seems to be able to do this. If we agree we need this functionality generally we can create a general purpose feature for it so those SDKs can add it too. 

I am not sure SDKs are usually expected to be able to use workflow-specific information in all ways a data converter is invoked by a client. They can just use contextual information set by the caller (so #1349 does make sense).

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-01-16 15:28:05.000 UTC</summary>

> Most, including Go, support wrapping the result from start to customize result fetching

Go does not support intercepting `client.GetWorkflow` so you cannot always wrap automatically wrap `WorkflowResult`. If we have to add an interceptor for `client.GetWorkflow` might as well just add the interceptor to get a result

>I am not sure SDKs are usually expected to be able to use workflow-specific information in all ways a data converter is invoked by a client.

Maybe not every call, but any call specifically to a workflow execution should be able to access workflow specific information. For client calls the interceptor injecting those values is a suitable solution for all client calls 



</details>


---

### #718: Add metric for time passed from the activity scheduling to the last attempt

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/718 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-02-08 17:57:26.000 UTC (3y 10m ago) |
| **Updated** | 2022-04-07 10:46:03.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

**Is your feature request related to a problem? Please describe.**
If users want to set an alert for activities that keep retrying and failing, there is no appropriate metric to handle that.
`activity_succeed_endtoend_latency` includes only successful executions.
`activity_execution_latency` handles the execution of a single activity task only.

**Describe the solution you'd like**
We should add a metric reporting how much time passed from an activity schedule to the last activity attempt. This metric should have an activity type as a tag and be SDK side.

**Describe alternatives you've considered**
Users can produce their own custom metrics. But it looks like such a common concern, that Temporal SDK should provide a built-in way to detect it.

JavaSDK issue: https://github.com/temporalio/sdk-java/issues/1035

#### Comments (1)

<details>
<summary><strong>olegsu</strong> commented on 2022-04-07 10:46:03.000 UTC</summary>

Like the alternative solution you suggested.
In case I want to add additional tags to metric.

</details>


---

### #659: Possibility to deprecate attribute `Control`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/659 |
| **State** | OPEN |
| **Author** | wxing1292 (Wenquan Xing) |
| **Created** | 2021-12-02 23:53:07.000 UTC (4y 1m ago) |
| **Updated** | 2024-03-15 05:00:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | next-gen |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Is go SDK still using `Control` for the following cases?

* [signal external workflow](https://github.com/temporalio/sdk-go/blob/960d3e909f0ea1d1cf4675f6797a61e3edd51162/internal/internal_decision_state_machine.go#L1183)
* [request cancel external workflow](https://github.com/temporalio/sdk-go/blob/960d3e909f0ea1d1cf4675f6797a61e3edd51162/internal/internal_decision_state_machine.go#L1122)

can we deprecate above 2 attributes?



#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2021-12-03 14:33:16.000 UTC</summary>

Yes, they are used at https://github.com/temporalio/sdk-go/blob/v1.11.1/internal/internal_event_handlers.go#L869 and https://github.com/temporalio/sdk-go/blob/v1.11.1/internal/internal_event_handlers.go#L1390 respectively.

We can look into deprecating and/or using alternative approaches if necessary. Can you explain the reasoning for deprecation?

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 21:12:44.000 UTC</summary>

@wxing1292 - Bump

</details>

<details>
<summary><strong>wxing1292</strong> commented on 2021-12-16 21:32:51.000 UTC</summary>

previously the `control` (cadence SDK) contains the auto-incremented ID for in mem state machine
* request cancel external workflow
* signal external workflow
* child workflow?
* activity
* timer

i am checking if it is easy to deprecate this `control` variable since it is easy to break 

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 21:33:48.000 UTC</summary>

I am afraid it is not easy to deprecate since it is in active use and could affect compatibility if changed.

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 21:45:49.000 UTC</summary>

Marking this as something for the next-gen SDK.

</details>


---

### #495: Calling `GetChildWorkflowExecution` for a mocked workflow in a test causes the runner to complete the child workflow.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/495 |
| **State** | OPEN |
| **Author** | jmoseley (Jeremy Moseley) |
| **Created** | 2021-07-23 18:29:45.000 UTC (4y 5m ago) |
| **Updated** | 2025-02-26 14:49:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | potential-bug |
| **Assignees** | cretz |
| **Milestone** | None |

#### Description

* Have a child and a parent workflow. The parent workflow does something interesting while the child is executing
* Inside the parent workflow, call `GetChildWorkflowExecution` to obtain the `runID` for the child
* Inside the parent sleep for some amount of time
* Inside of the parent workflow, after the sleep, use `.IsReady()` to determine if the child has completed or not
* In tests, use `OnWorkflow` to mock a child workflow, and use `.After` to delay completion some amount of time

## Expected Behavior

* The parent workflow should do the interesting work while the child is executing, and `IsReady == false` until the appropriate amount of time has elapsed.

## Actual Behavior

* The parent sees `IsReady() == true` immediately after calling `GetChildWorkflowExecution` and sleeping

## Steps to Reproduce the Problem

Here is a sample the reproduces the issue. The first test (without mocking the child) passes, the second does not.

```
package workflows_test

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/suite"

	"go.temporal.io/sdk/testsuite"
	"go.temporal.io/sdk/workflow"
)

func Workflow(ctx workflow.Context) (string, error) {
	logger := workflow.GetLogger(ctx)
	childWorkflowContext := workflow.WithChildOptions(ctx, workflow.ChildWorkflowOptions{
		WorkflowID: "child_workflow",
	})
	childWorkflowFuture := workflow.ExecuteChildWorkflow(childWorkflowContext, ChildWorkflow)

	var childWorkflowExecution workflow.Execution
	err := childWorkflowFuture.GetChildWorkflowExecution().Get(ctx, &childWorkflowExecution)
	if err != nil {
		logger.Error("Error getting child workflow execution")
		return "FAILURE", err
	}

	logger.Info("Got child workflow execution", "WorkflowID", childWorkflowExecution.ID, "RunID", childWorkflowExecution.RunID)

	workflow.Sleep(ctx, time.Minute*5)

	if childWorkflowFuture.IsReady() {
		logger.Error("Child workflow finished before activity")
		return "FAILURE", nil
	}

	activityContext := workflow.WithActivityOptions(ctx, workflow.ActivityOptions{
		ScheduleToCloseTimeout: time.Minute,
		StartToCloseTimeout:    time.Minute,
	})
	workflow.ExecuteActivity(activityContext, MyCoolActivity, childWorkflowExecution.RunID).Get(ctx, nil)
	logger.Info("Finished activity, waiting for child to finish.")

	err = childWorkflowFuture.Get(ctx, nil)
	if err != nil {
		logger.Error("Child workflow failed")
		return "FAILURE", err
	}

	logger.Info("Child workflow complete")

	return "SUCCESS", nil
}

func ChildWorkflow(ctx workflow.Context) (string, error) {
	workflow.Sleep(ctx, time.Hour*2)

	return "", nil
}

func MyCoolActivity(ctx context.Context, childWorkflowRunID string) error {
	fmt.Printf("Child Workflow: %s\n", childWorkflowRunID)

	return nil
}

type UnitTestSuite struct {
	suite.Suite
	testsuite.WorkflowTestSuite

	env *testsuite.TestWorkflowEnvironment
}

func (s *UnitTestSuite) SetupTest() {
	s.env = s.NewTestWorkflowEnvironment()
}

func (s *UnitTestSuite) AfterTest(suiteName, testName string) {
	s.env.AssertExpectations(s.T())
}

// Test without mocking the child workflow.
func (s *UnitTestSuite) Test_SampleWorkflow_NoMockChild() {
	s.env.RegisterWorkflow(Workflow)
	s.env.RegisterWorkflow(ChildWorkflow)

	s.env.OnActivity(MyCoolActivity, mock.Anything, mock.Anything).Return(nil)

	s.env.ExecuteWorkflow(Workflow)

	s.True(s.env.IsWorkflowCompleted())
	s.NoError(s.env.GetWorkflowError())

	var result string
	s.env.GetWorkflowResult(&result)

	s.Equal(result, "SUCCESS")

	s.env.AssertExpectations(s.T())
}

// Test with mocking the child workflow.
func (s *UnitTestSuite) Test_SampleWorkflow_MockChild() {
	s.env.RegisterWorkflow(Workflow)
	s.env.RegisterWorkflow(ChildWorkflow)

	s.env.OnActivity(MyCoolActivity, mock.Anything, mock.Anything).Return(nil)
	s.env.OnWorkflow(ChildWorkflow, mock.Anything).After(time.Hour).Return(
		func(ctx workflow.Context) (string, error) {
			return "SUCCESS", nil
		},
	)

	s.env.ExecuteWorkflow(Workflow)

	s.True(s.env.IsWorkflowCompleted())
	s.NoError(s.env.GetWorkflowError())

	var result string
	s.env.GetWorkflowResult(&result)

	s.Equal(result, "SUCCESS")

	s.env.AssertExpectations(s.T())
}

func TestUnitTestSuite(t *testing.T) {
	suite.Run(t, new(UnitTestSuite))
}
```

## Specifications

  - Version: v1.8.0
  - Platform: go-sdk


#### Comments (5)

<details>
<summary><strong>jmoseley</strong> commented on 2021-07-23 19:38:48.000 UTC</summary>

Just made a small update, the reproduction was not quite right.

</details>

<details>
<summary><strong>vitarb</strong> commented on 2021-07-26 05:38:36.000 UTC</summary>

Thanks for reporting the issue and including a repro, we are going to look at it soon.

</details>

<details>
<summary><strong>rupalivohra</strong> commented on 2021-10-22 16:40:19.000 UTC</summary>

Hey @vitarb - Is there an eta for this to be addressed?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-09-25 18:30:18.000 UTC</summary>

I'll note this issue can be worked around by not using `OnWorkflow`, instead register your own "mock" workflow

instead of this
```
s.env.RegisterWorkflow(ChildWorkflow)
s.env.OnWorkflow(ChildWorkflow, mock.Anything).After(time.Hour).Return(
  func(ctx workflow.Context) (string, error) {
	  return "SUCCESS", nil
  },
)
```

register your own
```
env.RegisterWorkflowWithOptions(func(ctx workflow.Context) (string, error) {
	workflow.Sleep(ctx, time.Hour)
         return "SUCCESS", nil
}, workflow.RegisterOptions{
  Name: "ChildWorkflow",
})
```




</details>

<details>
<summary><strong>dibrito</strong> commented on 2025-02-26 14:49:12.000 UTC</summary>

Try something like:

`    s.env.OnWorkflow(ChildWorkflow, mock.Anything).Return(testsuite.ErrMockStartChildWorkflowFailed)`

to simulate a failure in starting the child workflow.

RegisterWorkflowWithOptions didn't work for me.


</details>


---

### #61: Remove mocks package

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/61 |
| **State** | OPEN |
| **Author** | alexshtin (Alex Shtin) |
| **Created** | 2020-03-13 19:43:07.000 UTC (5y 9m ago) |
| **Updated** | 2024-12-17 21:17:40.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

`mocks` package uses `mockery` and we are using `gomocks` everywhere else. Mocks can be easily generated by customers using `mockgen` tool from `gomocks` framework.



#### Comments (1)

<details>
<summary><strong>alexshtin</strong> commented on 2020-03-21 01:49:45.000 UTC</summary>

Apparently this is not as easy as it looks. Good issues to start with:
https://github.com/uber-go/cadence-client/pull/929
https://github.com/uber-go/cadence-client/issues/928

</details>


---

### #2065: NewTestActivityEnvironment no longer implements worker.ActivityRegistry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2065 |
| **State** | OPEN |
| **Author** | kylelemons (Kyle Lemons) |
| **Created** | 2025-10-02 21:31:26.000 UTC (3 months ago) |
| **Updated** | 2025-10-03 23:16:41.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Example code:

```go
	suite := testsuite.WorkflowTestSuite{}

	act := suite.NewTestActivityEnvironment()

	// This used to work:
	var reg worker.ActivityRegistry = act
	// Now it gets:
	//	 Cannot use act (type *TestActivityEnvironment) as the type worker.ActivityRegistry
	//	 Type does not implement worker.ActivityRegistry as some methods are missing:
	//	   RegisterDynamicActivity(a interface{}, options activity.DynamicRegisterOptions)

	var myActivity any
	reg.RegisterActivity(myActivity)

	res, err := act.ExecuteActivity(myActivity, "input")
	if err != nil {
		t.Fatalf("ExecuteActivity: %s", err)
	}

	var output any
	if err := res.Get(&output); err != nil {
		t.Fatalf("Getting result %T: %s", output, err)
	}
```

## Expected Behavior

This code should compile and execute.  Obviously nobody would write the code above, but we have our own abstractions that make use of the `worker.ActivityRegistry` interface, and the `NewTestActivityEnvironment` no longer implements it.  `NewTestWorkflowEnvironment` does, but that doesn't have the `ExecuteActivity` functionality.

## Actual Behavior

This works with `go.temporal.io/sdk v1.34.0` but breaks with `v1.35.0` and `v1.36.0`.  This was a breaking change to the `ActivityRegistry` interface (and I suspect to the `WorkerRegistry` interface as well).

## Steps to Reproduce the Problem

  1. Add the code above to a unit test
  1. `go get go.temporal.io/sdk@v1.34.0` and observe that it compiles
  1. `go get go.temporal.io/sdk@v1.35.0` (or later) and observe that it fails to compile

## Specifications

  - Version: `go.temporal.io/sdk@v1.36.0`
  - Platform: Mac OS, Linux


#### Comments (2)

<details>
<summary><strong>yuandrew</strong> commented on 2025-10-02 22:16:10.000 UTC</summary>

Thanks for the GH issue! Like you mentioned, this is similar to #2006. A compile check can be added to keep this relationship. Marking this as an enhancement, since I don't think we originally intended on having `NewTestActivityEnvironment` implement the `ActivityRegistry` interface, but might as well keep it now that it does.

</details>

<details>
<summary><strong>kylelemons</strong> commented on 2025-10-03 22:59:41.000 UTC</summary>

Something similar came up in
* https://github.com/temporalio/sdk-go/issues/1610

I think the root cause of all three issues is [returning interfaces, not concrete types](https://google.github.io/styleguide/go/decisions#interfaces), since it is [considered a breaking change](https://go.dev/blog/module-compatibility#working-with-interfaces) to add a method to a public interface.  If you are ever planning a v2 of this module (or if it's better to make "just one more" breaking change to prevent accidentally making many more), I think switching to concrete types would help avoid this class of problems.

More generally, I think I would recommend classing "breaking changes" as bugs, since they (can) manifest downstream as compile errors.

There is a tool that you can use in CI to detect incompatible changes:

<details>
<summary>gorelease output</summary>

```
❯ go run golang.org/x/exp/cmd/gorelease@latest -base=v1.34.0
# go.temporal.io/sdk/activity
## compatible changes
DynamicRegisterOptions: added
ErrActivityReset: added

# go.temporal.io/sdk/client
## incompatible changes
Client.DescribeWorkflow: added
## compatible changes
AutoUpgradeVersioningOverride: added
PinnedVersioningOverride: added
VersioningOverrideChange: added
WorkflowExecutionDescription: added
WorkflowExecutionMetadata: added

# go.temporal.io/sdk/interceptor
## compatible changes
ClientDescribeWorkflowInput: added
ClientDescribeWorkflowOutput: added

# go.temporal.io/sdk/mocks
## compatible changes
(*Client).DescribeWorkflow: added

# go.temporal.io/sdk/temporal
## incompatible changes
SDKVersion: value changed from "1.34.0" to "1.36.0"
## compatible changes
ApplicationErrorCategory: added
ApplicationErrorCategoryBenign: added
ApplicationErrorCategoryUnspecified: added

# go.temporal.io/sdk/temporalnexus
## incompatible changes
NewSyncOperation: removed
## compatible changes
GetOperationInfo: added
IsNexusOperation: added
OperationInfo: added

# go.temporal.io/sdk/testsuite
## compatible changes
DevServerOptions.SearchAttributes: added

# go.temporal.io/sdk/worker
## incompatible changes
ActivityRegistry.RegisterDynamicActivity: added
WorkflowRegistry.RegisterDynamicWorkflow: added
WorkflowReplayer.RegisterDynamicWorkflow: added
## compatible changes
NewPollerBehaviorAutoscaling: added
NewPollerBehaviorSimpleMaximum: added
PollerBehavior: added
PollerBehaviorAutoscalingOptions: added
PollerBehaviorSimpleMaximumOptions: added
WorkerDeploymentVersion: added

# go.temporal.io/sdk/workflow
## compatible changes
DynamicRegisterOptions: added
DynamicRuntimeOptions: added
LoadDynamicRuntimeOptionsDetails: added
NexusOperationCancellationType: added
NexusOperationCancellationTypeAbandon: added
NexusOperationCancellationTypeTryCancel: added
NexusOperationCancellationTypeUnspecified: added
NexusOperationCancellationTypeWaitCompleted: added
NexusOperationCancellationTypeWaitRequested: added

# summary
Cannot suggest a release version.
Incompatible changes were detected.

exit status 1
```

</details>

</details>


---

### #1976: ContinueAsNew should create new root span

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1976 |
| **State** | OPEN |
| **Author** | bincyber (Ali) |
| **Created** | 2025-06-17 12:57:32.000 UTC (6 months ago) |
| **Updated** | 2025-07-20 06:02:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Currently, when tracing is enabled on a workflow that ends as ContinueAsNew, the new workflow is attached to the existing trace:

![Image](https://github.com/user-attachments/assets/484f2596-a3dc-4717-8f44-8b1f2ffeccda)

![Image](https://github.com/user-attachments/assets/6cb593ad-e99f-4af1-b5bd-85852b4ec4c7)

The total number of spans can become extremely large and overwhelm the tracing backend (eg, Grafana Tempo, Jaeger, etc.).

**Describe the solution you'd like**

It would be better if the new workflow was created as a new, disconnected trace and linked to the existing trace:

![Image](https://github.com/user-attachments/assets/467ba69e-7f02-4c19-b0df-df5153efe6c5)

![Image](https://github.com/user-attachments/assets/6fa06466-f1e6-4a98-a425-ecd6be927eb2)

This idea can be extended to disconnecting Child Workflows as well.

**Additional context**

Slack: https://temporalio.slack.com/archives/CTDTU3J4T/p1702921125553459

#### Comments (4)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-17 14:55:44.000 UTC</summary>

Added a note to discuss this internally across the other SDKs to see what/if they do to support this

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-25 18:11:46.000 UTC</summary>

Looking at some other SDKs they don't provide any convenient option for this. There are a lot of reasons we could want to create a disconnected span , like continue as new, or as you said a child workflow. Some other reasons brought up are Cron and schedules. A user may also only want to disconnect them if the size if growing particularly large or for certain workflow types. These are to many options to support simple booleans for.

For the most flexibility I wonder if we should just expose the ability to get the otel span from the workflow context, then users can interact with the span like they do outside of workflow code.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-06-25 18:12:39.000 UTC</summary>

Users can then develop their own interceptors for common cases like disconnect spans on continue as new

</details>

<details>
<summary><strong>ohad83</strong> commented on 2025-07-20 06:02:39.000 UTC</summary>

I encountered a similar error (in my case for child workflows). If using the otel tracing interceptor you could pass a custom`SpanStarter` to do that. This is the one I created:
```
	if strings.HasPrefix(spanName, "RunWorkflow:") && trace.SpanFromContext(ctx).SpanContext().IsValid() {
		opts = append(opts,
			trace.WithNewRoot(), trace.WithLinks(trace.LinkFromContext(ctx)),
		)
	}
	_, span := t.Start(ctx, spanName, opts...)
	return span
```

It's not perfect since the link is unidirectional, so the child is linked to the parent but the parent isn't linked to the child (afaik it can't be, since the `ExecuteChildWorkflow` span finishes before the `RunWorkflow` one starts). It also means you won't see the duration of the child workflow in the parent trace, since the `ExecuteChildWorkflow` is short.

It might be possible to wrap each `RunWorkflow` in 2 spans, one in the parent trace and one as the root span of a child trace, and link them, and also only finish the one in the parent when the child finishes. It requires a bit more tinkering but I think it's possible without fully implementing a new interceptor.

</details>


---

### #1895: Support simulating race conditions during signal draining

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1895 |
| **State** | OPEN |
| **Author** | joshmsmith (Joshua Smith) |
| **Created** | 2025-03-27 21:30:21.000 UTC (9 months ago) |
| **Updated** | 2025-05-07 13:01:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I was helping a customer writing tests for go workflows processing signals - I didn't know how to get complete test coverage to ensure the signal draining code gets covered tested. 
Asked @mfateev: he suggested creating this feature request to support simulating race conditions during signal draining.

**Describe the solution you'd like**
Would love a way for Go SDK to support simulating race conditions during signal draining. Perhaps useful for other SDKs.

**Describe alternatives you've considered**
Skipping testing this race condition is probably good enough for now.




#### Comments (4)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-03-27 21:43:33.000 UTC</summary>

Can you elaborate what you mean by a "race condition" during signal draining? Also why is this only specific to the Go SDK?

</details>

<details>
<summary><strong>joshmsmith</strong> commented on 2025-03-28 14:05:50.000 UTC</summary>

I can share what I know, hoping Max can share more context.
The struggle I was having with the customer was that trying to get 100% code coverage - including the signal draining part - is hard to do because it's a tight time window that the signal drain needs to run, and hard at least for me to get signals in to trigger the draining in a test. I think the goal here is to be able to send signals to be drained in a test. I think that's why it's harder in the go SDK, in other SDKs signals work differently. Does that help?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-03-28 15:08:35.000 UTC</summary>

>it's a tight time window that the signal drain needs to run, and hard at least for me to get signals in to trigger the draining in a test.

In the test environment you have full control over the timing and when things advance so if you know the workflow code you should be able to cause a race. Maybe an example workflow you had difficulty testing would help illustrate the problem? I am not sure how the test environment could know when to inject a signal to cause a race since it can't read your workflow code or predicted how it will execute.


>I think the goal here is to be able to send signals to be drained in a test. I think that's why it's harder in the go SDK, in other SDKs signals work differently. Does that help?

They are a bit different, but I don't know if that really matters here. Signals are sent by a queue in Go, but the race condition exists in all SDKs and is not easily testable in any SDK so I don't think this is Go specific problem or harder in Go then other SDKs. Might be easier in Go since the test environment in Go gives more control over execution then other SDKs do.


One idea is maybe the SDK can warn you if you do not check any signal channel in the last workflow task? If you are not checking a signal channel in the last workflow task you risk dropping a signal. How does that sound?

</details>

<details>
<summary><strong>joshmsmith</strong> commented on 2025-05-07 13:01:18.000 UTC</summary>

I think @mfateev had some other ideas, maybe he can share them here?

> One idea is maybe the SDK can warn you if you do not check any signal channel in the last workflow task? If you are not checking a signal channel in the last workflow task you risk dropping a signal. How does that sound?

I like that idea a lot actually.


</details>


---

### #1716: Make it possible to keep workflows in worker cache also if they're only queried

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1716 |
| **State** | OPEN |
| **Author** | recht (Joakim Recht) |
| **Created** | 2024-11-19 22:15:46.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-02 23:02:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Currently, when sending a query to a workflow that is in running state but not active on any worker, a worker will receive the request, replay history, process the query, and forget everything again. On next query the same thing happens. This is in contrast to starting the workflow from scratch without restarting the worker. Then the workflow is in the worker cache, ready to serve queries. Same if the worker has restarted, but workflow state has changed so that the workflow got loaded into the cache.

Because replays can get a bit expensive, especially if encryption/offloading codecs are used (which we do), it would be nice if querying a workflow would add it to the worker sticky cache.

**Describe the solution you'd like**
A config property that allows us to specify that workflows that are queried should also be inserted into the cache.

While debugging locally I did this:
```
diff --git a/internal/internal_task_handlers.go b/internal/internal_task_handlers.go
index 8312587..342f7f4 100644
--- a/internal/internal_task_handlers.go
+++ b/internal/internal_task_handlers.go
@@ -812,7 +812,7 @@ func (wth *workflowTaskHandlerImpl) GetOrCreateWorkflowContext(
                        return
                }
 
-               if wth.cache.MaxWorkflowCacheSize() > 0 && task.Query == nil {
+               if wth.cache.MaxWorkflowCacheSize() > 0 {
                        workflowContext, _ = wth.cache.putWorkflowContext(runID, workflowContext)
                        workflowContext.Lock()
                        workflowContext.cached = true
```

It's unclear if that's the right solution or if that has other unintended consequences, but at least it keeps the workflow in the sticky worker cache, making queries much faster.

**Describe alternatives you've considered**
Doing less queries, or faster codecs. Regardless, it seems wasteful to have to replay on every single query.


#### Comments (4)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-20 16:36:55.000 UTC</summary>

I believe this is a limitation on the server. Query only tasks cannot set the sticky cache attribute so the worker cache would not actually be used even if the SDK did keep it in cache. There is an [issue](https://github.com/temporalio/temporal/issues/4463) to add this feature on the server side, once this is closed the SDK could keep the workflow in cache.

</details>

<details>
<summary><strong>recht</strong> commented on 2024-11-20 18:23:08.000 UTC</summary>

Ok, thanks - so I guess the only reason why it made any difference for me was that I was only running a single worker so queries always went to that worker?

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-12-02 15:30:25.000 UTC</summary>

There are multiple ways a query can be delivered to a workflow, if the worker was already in the cache it will be used. The problem is direct queries cannot add the workflow to the sticky task queue so the server would always send the whole history down again causing a replay.

</details>

<details>
<summary><strong>recht</strong> commented on 2024-12-02 23:02:02.000 UTC</summary>

Ok, but with the change I tried there was no replay after the first query - it's possible that the worker receives all the data, but it doesn't actually replay (checked by adding print statements in the workflow code and observing with and without the change)

</details>


---

### #1582: Updated context functions to match context library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1582 |
| **State** | OPEN |
| **Author** | nishkrishnan (Nish Krishnan) |
| **Created** | 2024-08-08 16:52:28.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-08 16:52:47.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

Would be awesome to update the go sdk to have `workflow.WithCancelCause(..)` to match the updated context function `context.WithCancelCause(...)`

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



---

### #1410: Consider migrating away from golang/mock

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1410 |
| **State** | OPEN |
| **Author** | abhinav (Abhinav Gupta) |
| **Created** | 2024-03-04 18:50:07.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-04 18:50:07.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

Hello! It appears that temporal/sdk-go uses golang/mock for mocking in its own tests. (The public mocks package uses mockery.)
This includes one reference to gomock in internal/internal_worker.go.

The upstream github.com/golang/mock project has been deprecated and archive.
As of June 2023, [their README recommends](https://github.com/golang/mock?tab=readme-ov-file#gomock) using go.uber.org/mock instead.

Please consider porting your uses of golang/mock to the maintained fork.
The change is entirely a search-and-replace at the code level.


---

### #1397: Add Support for `ReplayWorkflowHistoryOptions` to `ReplayWorkflowHistoryFromJSONFile` & `ReplayPartialWorkflowHistoryFromJSONFile`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1397 |
| **State** | OPEN |
| **Author** | dhang-sc |
| **Created** | 2024-02-25 23:45:49.000 UTC (1y 10m ago) |
| **Updated** | 2025-03-03 18:27:56.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently `replayer.ReplayPartialWorkflowHistoryFromJSONFile` or `ReplayWorkflowHistoryFromJSONFile` ( doesn’t allow you to pass in ReplayWorkflowHistoryOptions.  This is desirable if your replay requires you to specify the workflow id and workflow run id.
With  `ReplayWorkflowHistoryWithOptions` requires you to pass in the history payload.  This requires you to convert from json to the history payload.

In addition, It would be nice if https://github.com/temporalio/sdk-go/blob/master/internal/internal_worker.go#L1432-L1501 these functions were made available as well.  

It would also be nice if the sdk exposed a logger that can be used in the unit test setting.  Example I wanted to pass a logger into `ReplayWorkflowHistoryFromJSONFile`, but I have to implement any interface that implemented the iLog interface.  I wanted get a defaultLogger but it seems to only be accessible from workflow internal pkg



#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-02-26 14:49:42.000 UTC</summary>

We have to be careful continually adding methods to this interface. Having said that, I think ideally we'd want a separate `LoadWorkflowHistoryFromJSONFile` that you can then use the result of in `ReplayWorkflowHistoryWithOptions`. Of course such a function is only a few lines to read a file and serialize to proto for you to write yourself in the meantime.

</details>

<details>
<summary><strong>kp-eugene-kulabuhovs</strong> commented on 2025-03-03 18:27:55.000 UTC</summary>

Example workflow_test.go:

```golang
import (
	"os"

	"github.com/stretchr/testify/assert"
	"go.temporal.io/api/history/v1"
	"go.temporal.io/api/temporalproto"
	"go.temporal.io/sdk/worker"
	"go.temporal.io/sdk/workflow"
)

func LoadWorkflowHistoryFromJSONFile(jsonfileName string) (hist *history.History, err error) {
	opts := temporalproto.CustomJSONUnmarshalOptions{
		DiscardUnknown: true,
	}

	bs, err := os.ReadFile(jsonfileName)
	if err != nil {
		return nil, err
	}

	hist = &history.History{}
	if err := opts.Unmarshal(bs, hist); err != nil {
		return nil, err
	}

	return hist, err
}

func TestExampleWorkflow_UsingHistory(t *testing.T) {
	// JSON generated using:
	// temporal workflow show --workflow-id <workflow-id> --output json > successful_run.json
	history, err := LoadWorkflowHistoryFromJSONFile("testdata/successful_run.json")
	assert.NoError(t, err)

	replayer := worker.NewWorkflowReplayer()
	replayer.RegisterWorkflow(ExampleWorkflow)
	err = replayer.ReplayWorkflowHistoryWithOptions(nil, history, worker.ReplayWorkflowHistoryOptions{
		OriginalExecution: workflow.Execution{
			ID: <workflow-id>,
		},
	})

	assert.NoError(t, err)
}
```

</details>


---

### #1167: Allow setting activity timeouts in TestActivityEnvironment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1167 |
| **State** | OPEN |
| **Author** | ohad83 (Ohad Abarbanel) |
| **Created** | 2023-07-19 18:36:10.000 UTC (2y 5m ago) |
| **Updated** | 2023-10-09 12:42:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

Currently, the TestActivityEnvironment has a hard-coded 10 minute timeout. If I want to use the test suite to run an activity which takes longer than that, it fails with a timeout error.

Adding the ability to run the activity with options like timeout values in the test environment would help a lot in testing and debugging long activities.

Thanks!

#### Comments (4)

<details>
<summary><strong>Delicious-Bacon</strong> commented on 2023-08-05 12:51:26.000 UTC</summary>

+1 to this.

Activity test times out at 10 minute point, which is too short for some of my activities.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-08-07 13:39:49.000 UTC</summary>

> If I want to use the test suite to run an activity which takes longer than that, it fails with a timeout error.

While supporting an override is fine, in general I think you should use a real server if you are running such tests (you can easily start a dev server using the `testsuite` package).

</details>

<details>
<summary><strong>Delicious-Bacon</strong> commented on 2023-10-09 10:58:42.000 UTC</summary>

> you can easily start a dev server using the `testsuite` package

Which is extra boilerplate code just to execute an Activity, isn't it?

I already have loads of test Workflows that bloat my project and bring confusion by decoupling the Go's `testing` tools from those "tests". I end up saving results of those Workflows to a file and then manually check the results instead of implementing `testing` package.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-10-09 12:42:10.000 UTC</summary>

> Which is extra boilerplate code just to execute an Activity, isn't it?

Not sure about "boilerplate". It starts a real server you can do real integration tests on. There's a lot of value in running against a real server.

</details>


---

### #1100: TestWorkflowEnvironment should surface errors and respect failure signal surfaced by underlying mock

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1100 |
| **State** | OPEN |
| **Author** | qiuyijie-stripe |
| **Created** | 2023-05-06 01:37:30.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-08 16:12:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior
Say I expect `testWorkflow` to invoke `testActivity` twice with certain arguments
```
env.OnActivity(testActivity, mock.Anything, testActivityParams{...}).Return(...).Times(2) 
req := testWorkflowRequest{...}

// Workflow actually invokes testActivity three times. Expect to see a test failure here due to the extra unexpected invocation.
env.ExecuteWorkflow(testWorkflow, req)
``` 

## Actual Behavior
* Test passes, but seeing the following error message from test output:
```
assert: mock: The method has been called over 2 times.
	Either do one more Mock.On(testActivity).Return(...), or remove extra call.
	This call was unexpected: ...
```
* `env.AssertExpectations` doesn't catch the extra invocation, as it delegates to testify's `mock.AssertExpectations`, which only verifies that all configured invocations have been satisfied.
* `env.AssertNumberOfCalls` doesn't catch the extra invocation either. Instead this happens:
```
env.OnActivity(testActivity, mock.Anything, testActivityParams{...}).Return(...).Times(2) 
req := testWorkflowRequest{...}

// Workflow actually invokes testActivity three times but test doesn't fail
env.ExecuteWorkflow(testWorkflow, req)

// Expect this assertion to fail but it passes
env.AssertNumberOfCalls("testActivity", 2)
// Expect this assertion to succeed but it fails
env.AssertNumberOfCalls("testActivity", 3)
```

I think this behavior has to do with the fact that `env.AssertNumberOfCalls` delegates to testify's `mock.AssertNumberOfCalls`. However, testify expects the test to have [already failed](https://github.com/stretchr/testify/blob/437071b948cd89bdbaaf43a41f19fbe1a0945f6f/mock/mock.go#L468) early when the extra invocation occurred, and therefore does not increment its invocation counter. As a result, when the test unexpectedly continues on, the actual invocation counter remains at 2 even though there have been 3 calls to the activity.

testify's behavior seems correct and reasonable in this case. However, I'd expect `TestWorkflowEnvironment` to surface and respect the error and failure surfaced by testfify, and mark the test case as failed.

## Steps to Reproduce the Problem
See above

## Specifications

  - Version: v1.18.1
  - Platform: macOS Ventura 13.3.1

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2023-05-08 12:13:26.000 UTC</summary>

I admit to not looking into this, but just curious if you can confirm that `env.GetWorkflowError()` is `nil`?

</details>

<details>
<summary><strong>qiuyijie-stripe</strong> commented on 2023-05-08 16:11:02.000 UTC</summary>

Yes. I assert `env.GetWorkflowError()` is nil in all my test cases, and invoke `AssertExpectations` as part of `AfterTest`. 

Reactions: 👍 1

</details>


---

### #949: Allow user to override default maximum activity attempts in test suite

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/949 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-11-07 13:42:36.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-02 20:46:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

Right now we fix it at 10 if a user doesn't set it. A user shouldn't have to be forced to set maximum attempts in their workflow because the test suite has a hidden default. We should allow this default to be overridden.

#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2022-12-02 18:52:39.000 UTC</summary>

>  A user shouldn't have to be forced to set maximum attempts in their workflow because the test suite has a hidden default.

Why shouldn't they be? If they don't set one on a workflow run on a real server it will retry infinite times. If the max number of retries matters in a workflow to a customer shouldn't they set it in the workflow? I worry adding something like this could allow bugs in users code to slip through because the testing environment is different than production.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-12-02 20:46:53.000 UTC</summary>

> Why shouldn't they be?

Because you shouldn't have to alter your workflow code for our test environment.

> If the max number of retries matters in a workflow to a customer shouldn't they set it in the workflow?

Yes, but what if it's 15 and not 10?

> I worry adding something like this could allow bugs in users code to slip through because the testing environment is different than production.

I am just suggesting allowing it to be configurable from the default of 10 instead of forcing 10. I don't think it should be removed of course.

</details>


---

### #533: ContinueAsNew which transfers all unprocessed signals to new run

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/533 |
| **State** | OPEN |
| **Author** | samarabbas (Samar Abbas) |
| **Created** | 2021-09-14 18:52:03.000 UTC (4y 3m ago) |
| **Updated** | 2021-12-30 20:01:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
If a developer fails to drain signal channel before calling ContinueAsNew then it might result in
loosing important signals without processing them.

**Describe the solution you'd like**
Add ability to transfer all unprocessed Signals to new run after ContinueAsNew


#### Comments (4)

<details>
<summary><strong>mytototo</strong> commented on 2021-12-22 14:09:37.000 UTC</summary>

Currently, what is the best approach to _transfer_ signals from a workflow to a continue as new?

What's the best way to deal with:
```go
for signalChan.ReceiveAsync(&val) {
  // ...
}
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-28 17:33:55.000 UTC</summary>

There is no transferring of signals today. You have to wait until all signals are drained. So that loop will exit when `signalChan` is drained and you can return continue-as-new after that.

</details>

<details>
<summary><strong>mytototo</strong> commented on 2021-12-28 18:57:49.000 UTC</summary>

I understand. As of today, what is the best workaround to achieve something like this? How can we ensure to process all signals in a new workflow so none are lost? In other words, what would be the idiomatic way to transfer signals or execute a new workflow within the loop?

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-30 20:01:32.000 UTC</summary>

If you are using a selector for receiving signals, the best way is to continually `selector.Select` until `selector.HasPending()` is false. If you are just operating on that signal directly, you can continually `ReceiveAsync` until its return value is false.

</details>


---

### #444: maxRPCTimeout value is too long

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/444 |
| **State** | OPEN |
| **Author** | mastermanu |
| **Created** | 2021-05-14 19:44:53.000 UTC (4y 7m ago) |
| **Updated** | 2025-04-09 12:26:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

When creating a gRPC context for a call, we take the existing context deadline, calculate the remaining time, divide by two, and then either round up the RPC timeout to a minimum (currently 1 second) or round it down to a maximum (currently 10 seconds).

The problem here is that with a 10 second timeout, if the gRPC connection is uncleanly severed with a request is in flight, then it will take the full 10 seconds before the call is failed and then retried. For long polls requests, this is even worse with a 70 second time out. As a result, SDK users can see spikes in overall latencies if they Temporal Cluster they are connecting to is undergoing an upgrade or recycling.

We should do a few things to enable the user to minimize the exposure here depending on their scenario. Options include (but are not limited to):

1) reduce the maximum gRPC timeout from 10 seconds to something smaller (of course, this could impact scenarios where the customer is sending/receiving large payloads on a low-bandwidth connection).
2) Enable the user to specify what the maximum gRPC request timeout should be so that they can make the decision for themselves.
3) Have more intelligently calculated timeouts or consider decoupling timeout from the context timeout on the request.

#### Comments (4)

<details>
<summary><strong>vitarb</strong> commented on 2021-05-27 05:54:41.000 UTC</summary>

Do we know what is our p99.9 for the cloud service calls (excluding long poll)? Maybe we should adjust the default and set it to a multiple of that as an upper limit for all non long-poll calls? But then as you've mentioned we may start timing out calls with larger payloads. 
I'm not a big fan of being too smart with timeouts and trying to calculate them on the fly based on payload sizes or things alike as it may result in unexpected behavior that can be difficult to debug.
On one hand I think making maxRPCTimeout configurable could solve the problem of large payloads, allowing us to have lower the default, but on the other if users are going to hit the limit often enough they would start overriding it back to higher values, which would bring us back to the square one.
For long polls I don't think we can do much better besides keepalive check as we want those timeouts to be as long as they are.
Better question, I think, is why would we abruptly drop connections during maintenance on the server? Isn't it possible to do a graceful shutdown of a node instead? Then we would avoid this problem in a first place.

</details>

<details>
<summary><strong>mastermanu</strong> commented on 2021-05-27 23:34:53.000 UTC</summary>

agree that we should try our best to make sure node shutdowns are graceful. but that can never truly be guaranteed. also agree that smart logic for timeouts is ugly. Will get back to you on P99 latency, but at least letting maxRPCTimeout be configurable (w/o changing current default) might be an okay option for now?

</details>

<details>
<summary><strong>antmendoza</strong> commented on 2025-04-08 14:37:13.000 UTC</summary>

>  letting maxRPCTimeout be configurable (w/o changing current default) might be an okay option for now?

+1 

Some customers would like to set the RPC timeout > 10 seconds (specifically for StartWorkflowExecution), and [the current implementation doesn't allow it](https://github.com/temporalio/sdk-go/blob/729bc240a1004e1a897c4144bed5489e61a6b768/internal/internal_utils.go#L132-L138). 

I think this should be configurable in the Go SDK, as it is in other SDKs like Java and TypeScript 

Related issue: https://github.com/temporalio/sdk-go/issues/1104 





</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-09 12:26:13.000 UTC</summary>

@antmendoza - Not that we disagree, but can you share the use case for having a call that should complete in milliseconds have its timeout over 10s?

</details>


---

### #351: [Testing] Cancellation of Parent Workflow with Child Workflow Panics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/351 |
| **State** | OPEN |
| **Author** | sjmtan (Shannon Tan) |
| **Created** | 2021-01-26 19:45:01.000 UTC (4y 11m ago) |
| **Updated** | 2021-01-26 19:51:31.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | potential-bug |
| **Assignees** | Sushisource |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

Issue mentioned here: 

https://community.temporal.io/t/should-cancellation-termination-of-workflows-be-tested/1299

## Expected Behavior
When mocking a child workflow to run a function that cancels the parent workflow, it should return that the parent workflow was cancelled. This should be in line with how one tests cancellation on activity transitions (not cancelling activities).

## Actual Behavior
Panics/ChildWorkflowExecutionError results instead of cancellation error being returned.


## Steps to Reproduce the Problem

Parent workflow with child workflow:
```
ctx = workflow.WithChildOptions(ctx, workflow.ChildWorkflowOptions{
		ParentClosePolicy: enums.PARENT_CLOSE_POLICY_REQUEST_CANCEL,
	})
recurringWorkflowErr := workflow.ExecuteChildWorkflow(ctx, RecurringSubscription).Get(ctx, nil)
```

```
       env.OnWorkflow(subscriptions.RecurringSubscription, mock.Anything).Run(func(args mock.Arguments) {
					env.CancelWorkflow()
				})
	env.ExecuteWorkflow(subscriptions.Subscription)
	Expect(env.IsWorkflowCompleted()).To(BeTrue())
	Expect(env.GetWorkflowError()).To(HaveOccurred())
	Expect(temporal.IsCanceledError(env.GetWorkflowError())).To(BeTrue()) // Fails here
```

This results in a panic because there's no `Return` for the mock. Changing the mock to:

```
				env.OnWorkflow(subscriptions.RecurringSubscription, mock.Anything).Run(func(args mock.Arguments) {
					env.CancelWorkflow()
				}).Return(func(ctx workflow.Context) error {
					return nil
				})
				```
				
This results in no error, and the workflow isn't canceled.

## Specifications

  - Version: SDK 1.4.0
  - Platform: Testing



---

### #70: Refactor NewWorker and remove downcast

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/70 |
| **State** | OPEN |
| **Author** | alexshtin (Alex Shtin) |
| **Created** | 2020-03-18 22:37:16.000 UTC (5y 9m ago) |
| **Updated** | 2025-02-07 03:06:35.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | alexshtin |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

#69 added downcast and panic to `NewWorker` in `internal/worker.go`. This needs to be refactored and removed.



#### Comments (2)

<details>
<summary><strong>jinhong-</strong> commented on 2021-05-18 13:47:39.000 UTC</summary>

I am facing an issue with this at the moment when i attempt to wrap temporal client with my own implementation. Will this eventually be removed, and what is the reason for this explicit check?

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-10-19 19:28:38.000 UTC</summary>

As part of the new interceptors proposal at https://github.com/temporalio/proposals/pull/45 client interceptors are supported to allow interception. However, due to the worker still needing internal things from the client, it can't be wrapped, but all functionality should be available via interceptors.

</details>


---

### #2103: Cosmetic bug in logger

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2103 |
| **State** | OPEN |
| **Author** | billrich2001 (Bill Richards) |
| **Created** | 2025-11-07 19:48:17.000 UTC (1 months ago) |
| **Updated** | 2025-11-19 23:02:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Issue
The logger in lines [225-228](https://github.com/temporalio/sdk-go/blob/a451bef0b7c99092974ac3d58311532d4c244896/contrib/opentelemetry/tracing_interceptor.go#L225-L228) has a bug where the TraceID and SpanID are not converted to string which is causing a cosmetic bug when log gets printed, we see the byte array instead

example:
```
{
"time": "2025-11-03T12:43:20.743360843Z",
"level": "WARN",
"msg": "RecordActivityHeartbeat with error",
"Namespace": "bluesteel-test2.bm3o6",
"TaskQueue": "bluesteel-sync",
"WorkerID": "syncWorker",
"ActivityID": "11",
"ActivityType": "rlCheckIsWorkflowFinished",
"Attempt": "1",
"WorkflowType": "rlResourceLock",
"WorkflowID": "sync-service:019a496b-4aa7-77b2-8c46-524efaeb7b1d",
"RunID": "507113fe-60ba-44c0-ad1e-c15d8ef4f45b",
"TraceID": "[52, 93, 200, 50, 90, 70, 237, 164, 31, 63, 215, 229, 177, 194, 174, 221]",
"SpanID": "[96, 239, 131, 244, 197, 70, 240, 14]",
"Error": "workflow execution already completed"
}
```

## Specifications

Bug is cosmetic, byte array isn't human readable


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-11-07 20:58:12.000 UTC</summary>

Mentioned internally, but will also mention here, most loggers, including Go's built-in `log` package (which our default logger uses), are expected to use `String()` on values that implement `GoStringer`. Which logger is being used in this case? I have not checked `slog` expectations compared to `fmt` and `log`.

</details>

<details>
<summary><strong>billrich2001</strong> commented on 2025-11-19 22:36:45.000 UTC</summary>

Added note.

Was able to recreate using slog and otel traceid on Go 1.21

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-11-19 23:02:36.000 UTC</summary>

For otel + slog a user should be using https://github.com/open-telemetry/opentelemetry-go-contrib/tree/main/bridges/otelslog 

</details>


---

### #2097: Feature Request: Add Context to MetricsHandler for Exemplar Support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2097 |
| **State** | OPEN |
| **Author** | VinayBhupelliAPT (Vinay Bhupelli) |
| **Created** | 2025-11-05 17:07:18.000 UTC (1 months ago) |
| **Updated** | 2025-12-19 06:19:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 😕 1 ❤️ 1 |

#### Description

## The Problem

I'm using Temporal with the OpenTelemetry MetricsHandler, and I've noticed that my custom activity metrics work great with exemplars (I can click from a metric spike in Grafana directly to the trace), but the built-in Temporal SDK metrics don't have this feature.

Here's what I mean:

**My custom metrics (working great):**
```go
func ProcessPaymentActivity(ctx context.Context, orderID string) error {
    // ctx contains active span with trace_id and span_id
    // When I pass ctx to the metric, OpenTelemetry extracts these IDs
    // and attaches them as an exemplar
    paymentCounter.Add(ctx, 1, metric.WithAttributes(...))
}
```
When I look at this in Grafana, I see little dots on the graph. Each dot has the trace_id and span_id embedded. Click a dot, boom - I'm looking at the exact trace for that metric point.

**SDK metrics (not working):**
```go
// Inside Temporal SDK - internal/internal_task_handlers.go:1906
func (wth *workflowTaskHandlerImpl) completeWorkflow(...) {
    // Workflow completion
    metricsHandler.Counter(metrics.WorkflowCompletedCounter).Inc(1)
    // ❌ No context passed - can't create exemplar
}
```
([See actual code](https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L1906))

No dots. Can't click through to traces. Have to manually hunt for the trace by timestamp.

## Why This Happens

I dug into the code and found the issue. The `MetricsHandler` interface doesn't have a context parameter:

```go
// From internal/common/metrics/handler.go
type CounterIface interface {
    Inc(value int64)  // No way to pass context!
}
```

This means the OpenTelemetry bridge has no choice but to use an empty context:

```go
// From contrib/opentelemetry/metricshandler.go
func (c *counter) Inc(value int64) {
    // Can't pass the actual context, so using background
    c.otelCounter.Add(context.Background(), value)
    // context.Background() has no trace info
    // → OpenTelemetry can't extract trace_id and span_id
    // → No exemplar created
}
```

Without the context containing trace information, OpenTelemetry can't extract the trace_id and span_id needed to create the exemplar that links the metric to the trace.

**References in SDK code where metrics are recorded without context:**
- [internal/internal_task_handlers.go:1906](https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L1906) - `WorkflowCompletedCounter`
- [internal/internal_task_handlers.go:1916](https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L1916) - `WorkflowEndToEndLatency`
- [internal/internal_task_handlers.go:1897](https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L1897) - `WorkflowFailedCounter`
- [internal/internal_task_handlers.go:1863](https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L1863) - `WorkflowCanceledCounter`
- [internal/internal_worker_base.go:379](https://github.com/temporalio/sdk-go/blob/master/internal/internal_worker_base.go#L379) - `WorkerStartCounter`
- [internal/internal_worker_base.go:426](https://github.com/temporalio/sdk-go/blob/master/internal/internal_worker_base.go#L426) - `PollerStartCounter`
- Many more throughout the SDK
## Why This Matters (Real Production Scenario)

Last week we had an incident where `temporal_activity_execution_latency` spiked to 5 seconds at 2:32 PM.

**Without exemplars (current experience):**
1. Notice the spike in Grafana
2. Write down the timestamp
3. Open Tempo/Jaeger in another tab
4. Search for traces in that time window
5. Filter by activity type
6. Click through 20+ traces to find the slow one
7. Finally find it after 5-10 minutes

**With exemplars (what I want):**
1. Notice the spike in Grafana
2. Click the exemplar dot on the graph (which contains trace_id and span_id)
3. Grafana uses the trace_id to instantly open the exact trace in Tempo
4. See the root cause immediately (database timeout on retry )

This difference is huge for production debugging. The exemplar acts as a direct link from the metric data point to the specific trace execution.

## Current Workaround (Not Ideal)

Right now I have to add custom metrics in my activity code to get exemplars:

```go
func ProcessPaymentActivity(ctx context.Context, orderID string) (string, error) {
    startTime := time.Now()

    // ... payment processing logic ...

    // Custom metric WITH exemplar - works because I pass ctx
    // ctx contains active span → has trace_id and span_id
    // OpenTelemetry extracts these and creates exemplar automatically
    duration := time.Since(startTime).Milliseconds()
    paymentCounter.Add(ctx, 1,
        metric.WithAttributes(
            attribute.String("status", "success"),
            attribute.String("gateway", "stripe"),
        ),
    )
    paymentDuration.Record(ctx, float64(duration),
        metric.WithAttributes(
            attribute.String("status", "success"),
        ),
    )
    // Result: Metric stored with exemplar containing trace_id and span_id

    return result, nil
}
```

This works great for my custom metrics, but:
- The built-in Temporal SDK metrics like `temporal_workflow_completed`, `temporal_activity_execution_latency`, etc. still don't have exemplars
- I can see exemplars (with trace_id/span_id) on my custom counters, but not on the SDK's metrics
- Inconsistent experience - some metrics are clickable, some aren't
## Proposed Solution

The fix is pretty straightforward - add a context parameter to the metrics interface:

**Change the interface:**
```go
// Current
type CounterIface interface {
    Inc(value int64)
}

// Proposed
type CounterIface interface {
    Inc(ctx context.Context, value int64)
}
```

**Update SDK calls** (context is already available):
```go
// Current
a.metricsHandler.Counter(metrics.ActivityTaskError).Inc(1)

// Proposed
a.metricsHandler.Counter(metrics.ActivityTaskError).Inc(ctx, 1)
```

**OpenTelemetry bridge can now pass context:**
```go
// Current (forced to use empty context)
func (c *counter) Inc(value int64) {
    c.otelCounter.Add(context.Background(), value)
    // No trace_id or span_id → no exemplar
}

// After change
func (c *counter) Inc(ctx context.Context, value int64) {
    c.otelCounter.Add(ctx, value)
    // OpenTelemetry extracts trace_id and span_id from ctx
    // Creates exemplar: {trace_id: "abc...", span_id: "123...", value: 1}
    // Metric exported with exemplar attached
}
```

Once the context is passed through, OpenTelemetry handles the rest automatically - it extracts the trace_id and span_id from the active span in the context and creates an exemplar that links the metric data point to the trace.

## Why This Would Be Awesome

**Faster debugging:** Click from metric → trace in seconds instead of manually hunting for 5-10 minutes

**Better observability:** All metrics (not just custom ones) would link to traces

**Industry standard:** Prometheus, Grafana, and all major observability vendors support this pattern

## Backward Compatibility

I know this is an interface change, but there are ways to keep it backward compatible:

**Option 1:** Add a new method alongside the old one
```go
type CounterIface interface {
    Inc(value int64)  // Keep for compatibility
    IncWithContext(ctx context.Context, value int64)  // New, preferred
}
```

**Option 2:** Check if the handler supports the new interface
```go
if counter, ok := handler.Counter(name).(CounterIfaceV2); ok {
    counter.Inc(ctx, 1)  // New way
} else {
    handler.Counter(name).Inc(1)  // Old way still works
}
```

Either way, existing code keeps working, but new deployments get exemplar support automatically.

## My Setup (What's Working vs Not Working)

**Environment:**
- Temporal Go SDK with OpenTelemetry MetricsHandler
- Prometheus with exemplar storage enabled
- Tempo for traces
- Grafana for visualization

**Custom metrics (working perfectly):**
```promql
rate(payments_processed_total{status="failed"}[5m])
```
✅ See exemplar dots on the graph
✅ Click → instant jump to trace (using trace_id from exemplar)
✅ See exact failure reason in seconds

**SDK metrics (missing exemplars):**
```promql
rate(temporal_activity_execution_latency_count{activity_type="ProcessPayment"}[5m])
```
❌ No exemplar dots
❌ Can't jump to traces (no trace_id/span_id attached)
❌ Manual correlation required

You can verify this yourself by querying Prometheus:
```bash
# Custom metric - has exemplar with trace_id and span_id
curl 'http://localhost:9090/api/v1/query_exemplars?query=payments_processed_total'
# Returns: {
#   "labels": {
#     "trace_id": "5d228c40d1fdce780dbe98fc3bd0c635",
#     "span_id": "6b70a14bf880cf66"
#   },
#   "value": "1",
#   "timestamp": 1762203470.707
# }

# SDK metric - no exemplar (empty array)
curl 'http://localhost:9090/api/v1/query_exemplars?query=temporal_activity_execution_latency'
# Returns: [] (empty - no trace_id or span_id available)
```

---

Would you consider this feature? I think it would significantly improve production debugging for anyone using OpenTelemetry.

Thanks for reading!

#### Comments (3)

<details>
<summary><strong>greatdaveo</strong> commented on 2025-12-10 08:16:32.000 UTC</summary>

Hello @Quinn-With-Two-Ns & @THardy98 , I would like to work on this. Could you please assign it to me? Thank you

Reactions: ❤️ 1

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-18 00:22:20.000 UTC</summary>

@greatdaveo We have not decided to accept this feature yet or any implementation so please do not do any work on this feature.

If a user does want to use some OTEL specific API, in this case context, the recommend approach is to use `opentelemetry.ExtractMetricsHandler` to get the actual otel metric handler from the Temporal API.

</details>

<details>
<summary><strong>greatdaveo</strong> commented on 2025-12-19 06:19:56.000 UTC</summary>

@Quinn-With-Two-Ns well noted, thank you! 
Please is there any issue at hand that you would like me to contribute then? I would like to make my first contribution, but it seems most of the issues raised are still yet to be decided on. Thanks

</details>


---

### #2066: Lost messages from workflow.NewChannel(ctx)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2066 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-02 22:19:14.000 UTC (3 months ago) |
| **Updated** | 2025-12-10 17:57:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

No messages get lost

## Actual Behavior

Messages are getting lost. This bug was introduced in 1.35.0, from #1762


## Steps to Reproduce the Problem
Setting `unblockSelectorSignal` to `true` causes the lost items 

```
func (s *WorkflowTestSuiteUnitTest) TestChannelWorkerPattern() {
	unblockSelectorSignal = true // test passes when set to false

	assert := s.Assert()
	require := s.Require()

	// Test configuration
	numWorkers := 10
	numItems := 50
	items := make([]int, numItems)
	for i := 0; i < numItems; i++ {
		items[i] = i
	}
	// Track which items were processed
	processedItems := make(map[int]int) // maps input -> output
	// Simple workflow that mimics the channel worker pattern
	workflowFn := func(ctx Context) error {
		// Create input channel and feed items
		inputCh := NewChannel(ctx)
		Go(ctx, func(ctx Context) {
			for _, item := range items {
				inputCh.Send(ctx, item)
			}
			inputCh.Close()
		})

		// Start workers
		outputCh := NewChannel(ctx)
		wg := NewWaitGroup(ctx)
		wg.Add(numWorkers)
		// Wait group cleanup goroutine
		Go(ctx, func(ctx Context) {
			wg.Wait(ctx)
			outputCh.Close()
		})
		// Start worker goroutines
		for i := 0; i < numWorkers; i++ {
			Go(ctx, func(ctx Context) {
				defer wg.Done()
				stop := false
				selector := NewSelector(ctx)
				// Stop worker if workflow is cancelled
				selector.AddReceive(ctx.Done(), func(c ReceiveChannel, more bool) {
					stop = true
				})
				// Receive items from input channel
				selector.AddReceive(inputCh, func(ch ReceiveChannel, more bool) {
					stop = !more
					var input int
					if ch.Receive(ctx, &input) {
						output := input * 2
						outputCh.Send(ctx, output)
					}
				})
				// Worker loop
				for !stop {
					selector.Select(ctx)
				}
			})
		}
		// Collect outputs
		for i := 0; i < numItems; i++ {
			var output int
			if outputCh.Receive(ctx, &output) {
				// output = input * 2, so input = output / 2
				processedItems[output/2] = output
			}
		}
		return nil
	}
	env := s.NewTestWorkflowEnvironment()
	env.RegisterWorkflow(workflowFn)
	env.ExecuteWorkflow(workflowFn)

	require.True(env.IsWorkflowCompleted())
	require.NoError(env.GetWorkflowError())

	// Verify all items were processed exactly once
	require.Len(processedItems, numItems, "Not all items were processed")
	for i := 0; i < numItems; i++ {
		output, ok := processedItems[i]
		assert.True(ok, "Item %d was not processed", i)
		assert.Equal(i*2, output, "Item %d was not processed correctly", i)
	}
}
```

## Specifications

  - Version: 1.35.0
  - Platform:


#### Comments (3)

<details>
<summary><strong>yuandrew</strong> commented on 2025-10-07 21:20:51.000 UTC</summary>

Looks like Test_SignalNotLost did not start failing when reverting the default SDK flag. Either something might be wrong with the test or the test itself may not be useful

</details>

<details>
<summary><strong>yuandrew</strong> commented on 2025-11-12 16:49:40.000 UTC</summary>

Technically not an issue anymore, due to us reverting the SDK flag, but this will need to be addressed when re-enabling the flag

</details>

<details>
<summary><strong>yuandrew</strong> commented on 2025-12-10 17:57:22.000 UTC</summary>

This turns out to be a new bug created from my fixing of the linked bug.

</details>


---

### #1961: Getting a strange error when writing tests which does not occur in real temporal deployment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1961 |
| **State** | OPEN |
| **Author** | josvegit (Johan Svedlund Nordström) |
| **Created** | 2025-05-29 09:24:37.000 UTC (7 months ago) |
| **Updated** | 2025-10-09 16:02:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

should not get the illegalContext error


## Actual Behavior
```
Running tool: /opt/homebrew/bin/go test -timeout 30s -run ^Test_Subscription_Workflow_Tests$ -testify.m ^(Test_ExampleWorkflow)$ example.com -timeout=5m

2025/05/29 11:13:56 INFO  Received activation signal
2025/05/29 11:13:56 INFO  ExecuteChildWorkflow WorkflowType ActivationWorkflow
2025/05/29 11:13:56 INFO  Activation workflow started
2025/05/29 11:13:56 DEBUG Auto fire timer TimerID 0 TimerDuration 1s TimeSkipped 1s
2025/05/29 11:13:56 INFO  Received activation signal
2025/05/29 11:13:56 INFO  ExecuteChildWorkflow WorkflowType ActivationWorkflow
--- FAIL: Test_Subscription_Workflow_Tests (0.00s)
    --- FAIL: Test_Subscription_Workflow_Tests/Test_ExampleWorkflow (0.00s)
        /Users/johansvedlundnordstrom/dev/reproduce/workflow_testsuite.go:1236: FAIL:	DummyActivity(string,workflows.DummyActivityInput)
            		at: [/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow_testsuite.go:414 /Users/johansvedlundnordstrom/dev/reproduce/some_test.go:110]
        /Users/johansvedlundnordstrom/dev/reproduce/workflow_testsuite.go:1236: FAIL: 0 out of 1 expectation(s) were met.
            	The code you are testing needs to make 1 more call(s).
            	at: [/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow_testsuite.go:1236 /Users/johansvedlundnordstrom/dev/reproduce/some_test.go:27 /Users/johansvedlundnordstrom/go/pkg/mod/github.com/stretchr/testify@v1.10.0/suite/suite.go:180 /opt/homebrew/Cellar/go/1.24.1/libexec/src/runtime/panic.go:792 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:782 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow.go:1490 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:1029 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/context.go:336 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/context.go:206 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:593 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:2288 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:2921 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:896 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:836 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:626 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:570 /Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow_testsuite.go:832 /Users/johansvedlundnordstrom/dev/reproduce/some_test.go:119]
        /Users/johansvedlundnordstrom/dev/reproduce/internal_workflow.go:782: test panicked: getState: illegal access from outside of workflow context
            goroutine 36 [running]:
            runtime/debug.Stack()
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/runtime/debug/stack.go:26 +0x64
            github.com/stretchr/testify/suite.failOnPanic(0x1400047c540, {0x104d33640, 0x104f15540})
            	/Users/johansvedlundnordstrom/go/pkg/mod/github.com/stretchr/testify@v1.10.0/suite/suite.go:89 +0x38
            github.com/stretchr/testify/suite.Run.func1.1()
            	/Users/johansvedlundnordstrom/go/pkg/mod/github.com/stretchr/testify@v1.10.0/suite/suite.go:188 +0x22c
            panic({0x104d33640?, 0x104f15540?})
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/runtime/panic.go:792 +0x124
            go.temporal.io/sdk/internal.assertNotInReadOnlyStateCancellation({0x104f23af0?, 0x140000a2060?})
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:782 +0xa4
            go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).NewTimerWithOptions.func2({0x1400007c018?, 0x104a6fdd8?}, 0xb8?)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow.go:1490 +0x44
            go.temporal.io/sdk/internal.(*channelImpl).Close(0x140001141c0?)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:1029 +0xb4
            go.temporal.io/sdk/internal.(*cancelCtx).cancel(0x14000114180, 0x1, {0x104f18580, 0x1400035d470})
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/context.go:336 +0xb0
            go.temporal.io/sdk/internal.WithCancel.func1()
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/context.go:206 +0x34
            go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func2()
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow.go:593 +0x28
            go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).RequestCancelExternalWorkflow(0x14000146008, {0x104b6e6fd, 0x16}, {0x14000152000, 0x15}, {0x14000130060, 0x1b}, 0x1400000c180)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:2288 +0x2c8
            go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).RequestCancelExternalWorkflow.(*testWorkflowEnvironmentImpl).cancelWorkflow.(*testWorkflowEnvironmentImpl).cancelWorkflowByID.func4()
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:2921 +0x40
            go.temporal.io/sdk/internal.(*testCallbackHandle).processCallback(0x140000e7448)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:896 +0xc4
            go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).startMainLoop(0x14000291188)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:836 +0x110
            go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflowInternal(0x14000291188, 0x0, {0x1050e298c, 0xe}, 0x0)
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:626 +0x3a8
            go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflow(0x14000291188, {0x104d4f880, 0x104f10748}, {0x0, 0x0, 0x0})
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/internal_workflow_testsuite.go:570 +0x118
            go.temporal.io/sdk/internal.(*TestWorkflowEnvironment).ExecuteWorkflow(0x14000409960?, {0x104d4f880?, 0x104f10748?}, {0x0?, 0x2?, 0x2?})
            	/Users/johansvedlundnordstrom/go/pkg/mod/go.temporal.io/sdk@v1.34.0/internal/workflow_testsuite.go:832 +0xb8
            example%2ecom.(*WorkflowTestSuite).Test_ExampleWorkflow(0x140002b05a0)
            	/Users/johansvedlundnordstrom/dev/reproduce/some_test.go:119 +0x194
            reflect.Value.call({0x14000444800?, 0x1400018f328?, 0x14000471001?}, {0x104b5e4cd, 0x4}, {0x1400018af20, 0x1, 0x104714b44?})
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/reflect/value.go:584 +0x978
            reflect.Value.Call({0x14000444800?, 0x1400018f328?, 0x66a?}, {0x1400018af20?, 0x105375c88?, 0x105578e40?})
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/reflect/value.go:368 +0x94
            github.com/stretchr/testify/suite.Run.func1(0x1400047c540)
            	/Users/johansvedlundnordstrom/go/pkg/mod/github.com/stretchr/testify@v1.10.0/suite/suite.go:202 +0x394
            testing.tRunner(0x1400047c540, 0x140002b06c0)
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/testing/testing.go:1792 +0xe4
            created by testing.(*T).Run in goroutine 35
            	/opt/homebrew/Cellar/go/1.24.1/libexec/src/testing/testing.go:1851 +0x374
FAIL
exit status 1
FAIL	example.com	0.208s
```


## Steps to Reproduce the Problem

run the following test

```
package workflows

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/suite"
	"go.temporal.io/sdk/testsuite"
	"go.temporal.io/sdk/workflow"
)

type WorkflowTestSuite struct {
	suite.Suite
	testsuite.WorkflowTestSuite

	testEnv *testsuite.TestWorkflowEnvironment
}

func (s *WorkflowTestSuite) SetupTest() {
	s.testEnv = s.NewTestWorkflowEnvironment()
}

func (s *WorkflowTestSuite) AfterTest(suiteName, testName string) {
	s.testEnv.AssertExpectations(s.T())
}

func Test_Subscription_Workflow_Tests(t *testing.T) {
	suite.Run(t, new(WorkflowTestSuite))
}

func MyCoolWorkflow(ctx workflow.Context) error {
	selector := workflow.NewSelector(ctx)
	var activationWorkflow *workflow.Execution
	selector.AddReceive(workflow.GetSignalChannel(ctx, "activate"), func(c workflow.ReceiveChannel, more bool) {
		c.Receive(ctx, nil)
		workflow.GetLogger(ctx).Info("Received activation signal")
		if activationWorkflow != nil {
			workflow.RequestCancelExternalWorkflow(ctx, activationWorkflow.ID, activationWorkflow.RunID)
		}

		cwf := workflow.ExecuteChildWorkflow(
			ctx,
			ActivationWorkflow,
		)

		var res workflow.Execution
		if err := cwf.GetChildWorkflowExecution().Get(ctx, &res); err != nil {
			workflow.GetLogger(ctx).Error("Failed to start child workflow", "error", err)
			return
		}
		activationWorkflow = &res

		selector.AddFuture(cwf, func(f workflow.Future) {
			if err := f.Get(ctx, nil); err != nil {
				workflow.GetLogger(ctx).Error("Child workflow failed", "error", err)
			} else {
				workflow.GetLogger(ctx).Info("Child workflow completed successfully")
			}
			activationWorkflow = nil
		})
	})

	for selector.HasPending() || activationWorkflow != nil {
		selector.Select(ctx)
	}
	return nil
}

type DummyActivityInput struct{}

func DummyActivity(ctx context.Context, d DummyActivityInput) error {
	return nil
}

func ActivationWorkflow(ctx workflow.Context) error {
	ctx = workflow.WithActivityOptions(ctx, workflow.ActivityOptions{
		StartToCloseTimeout: time.Minute,
	})
	workflow.GetLogger(ctx).Info("Activation workflow started")
	if err := workflow.Sleep(ctx, time.Hour); err != nil {
		workflow.GetLogger(ctx).Error("Activation workflow failed", "error", err)
		return err
	}
	workflow.GetLogger(ctx).Info("Activation workflow completed")

	var err error
	if errors.Is(ctx.Err(), workflow.ErrCanceled) {
		newCtx, _ := workflow.NewDisconnectedContext(ctx)
		err = workflow.ExecuteActivity(newCtx, DummyActivity, DummyActivityInput{}).Get(newCtx, nil)
		workflow.GetLogger(ctx).Info("Activation workflow canceled, running dummy activity in disconnected context")
	} else {
		err = workflow.ExecuteActivity(ctx, DummyActivity, DummyActivityInput{}).Get(ctx, nil)
	}

	return err
}

func (s *WorkflowTestSuite) Test_ExampleWorkflow() {
	s.testEnv.OnActivity(DummyActivity, mock.Anything, DummyActivityInput{}).Return(nil).Once()
	s.testEnv.RegisterWorkflow(ActivationWorkflow)

	s.testEnv.RegisterDelayedCallback(func() {
		s.testEnv.SignalWorkflow("activate", nil)
	}, 0)
	s.testEnv.RegisterDelayedCallback(func() {
		s.testEnv.SignalWorkflow("activate", nil)
	}, time.Second)
	s.testEnv.ExecuteWorkflow(MyCoolWorkflow)
	s.NoError(s.testEnv.GetWorkflowError())
	s.testEnv.IsWorkflowCompleted()
}

```




## Specifications

running on Mac silicon but it does not really matter where you run it


#### Comments (3)

<details>
<summary><strong>yuandrew</strong> commented on 2025-05-30 21:09:59.000 UTC</summary>

Thanks for the bug report! Looks like there's an issue with the test environment propagating `ctx` from inside the `selector.AddReceive`

</details>

<details>
<summary><strong>josvegit</strong> commented on 2025-10-08 20:51:57.000 UTC</summary>

I think this is still an issue

</details>

<details>
<summary><strong>yuandrew</strong> commented on 2025-10-09 16:02:34.000 UTC</summary>

Yes, I unfortunately haven't been able to prioritize this issue, hoping I can get to it soon

</details>


---

### #1906: workflowcheck crash (index out of range)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1906 |
| **State** | OPEN |
| **Author** | Bysmyyr (Olli Raula) |
| **Created** | 2025-04-07 06:57:09.000 UTC (8 months ago) |
| **Updated** | 2025-04-07 13:00:38.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior
No crash when running with `-debug=f` or through golangci-lint

## Actual Behavior
It crashes: (happens with other codebases too but for the simplicity, running it with this codebase)

```
contrib/tools/workflowcheck on  master
❯ go run main.go -debug=f ./...
panic: runtime error: index out of range [0] with length 0

goroutine 2756 [running]:
golang.org/x/tools/go/analysis/internal/checker.(*action).exportPackageFact(0xc01346ed20, {0x849a88, 0xc010375d40})
	/home/olli/go/pkg/mod/golang.org/x/tools@v0.25.0/go/analysis/internal/checker/checker.go:963 +0x309
go.temporal.io/sdk/contrib/tools/workflowcheck/determinism.(*collector).applyFacts(0xc00ca16e40)
	/home/olli/Downloads/sdk-go/contrib/tools/workflowcheck/determinism/checker.go:427 +0x3ec
go.temporal.io/sdk/contrib/tools/workflowcheck/determinism.(*Checker).Run(0xc0000b51c0, 0xc0057ea460)
	/home/olli/Downloads/sdk-go/contrib/tools/workflowcheck/determinism/checker.go:202 +0x646
go.temporal.io/sdk/contrib/tools/workflowcheck/workflow.(*Checker).Run(0xc0000906c0, 0xc0057ea460)
	/home/olli/Downloads/sdk-go/contrib/tools/workflowcheck/workflow/checker.go:157 +0x117
go.temporal.io/sdk/contrib/tools/workflowcheck/workflow.(*Checker).NewAnalyzer.func1(0x7fffc5da3579?)
	/home/olli/Downloads/sdk-go/contrib/tools/workflowcheck/workflow/checker.go:129 +0x1d
golang.org/x/tools/go/analysis/internal/checker.(*action).execOnce(0xc01346ed20)
	/home/olli/go/pkg/mod/golang.org/x/tools@v0.25.0/go/analysis/internal/checker/checker.go:759 +0xad0
sync.(*Once).doSlow(0xc006b70030?, 0xc007fb04b0?)
	/home/olli/go/go1.24.1/src/sync/once.go:78 +0xab
sync.(*Once).Do(...)
	/home/olli/go/go1.24.1/src/sync/once.go:69
golang.org/x/tools/go/analysis/internal/checker.(*action).exec(...)
	/home/olli/go/pkg/mod/golang.org/x/tools@v0.25.0/go/analysis/internal/checker/checker.go:666
golang.org/x/tools/go/analysis/internal/checker.execAll.func1(0x0?)
	/home/olli/go/pkg/mod/golang.org/x/tools@v0.25.0/go/analysis/internal/checker/checker.go:654 +0x3b
created by golang.org/x/tools/go/analysis/internal/checker.execAll in goroutine 2747
	/home/olli/go/pkg/mod/golang.org/x/tools@v0.25.0/go/analysis/internal/checker/checker.go:660 +0x191
exit status 2

```

We found the issue when integrating the check for golangci-lint.  With golangci-lint it crash always.

golangCI-lint has its own pass which does this always:
```
    act.Err = errorutil.NewPanicError(fmt.Sprintf("%s: package %q (isInitialPkg: %t, needAnalyzeSource: %t): %s",
       act.Analyzer.Name, act.Package.Name, act.isInitialPkg, act.needAnalyzeSource, p), debug.Stack())
}
```
when run on its own, it uses go standard reporter which does that only when debug flag is on, with it it fails:
```
if dbg('f') {
    fmt.Fprintf(os.Stderr, "%s: package %s has fact %s\n",
       act.pkg.Fset.Position(act.pass.Files[0].Pos()), act.pass.Pkg.Path(), fact)
}
```
Somehow the `act.pass.Files` is empty slice. In this case the key is `package unsafe ("unsafe")`.


## Steps to Reproduce the Problem

  1. cd contrib/tools/workflowcheck
  1. go run main.go -debug=f ./...
  1.

## Specifications

  - Version: master (b9afba98719cdf39b158dd0cfb05c9d422f477f4)
  - Platform: go version go1.24.1 linux/amd64



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-04-07 13:00:23.000 UTC</summary>

Looks like this may be a bug in the Golang repo on code that assumes a file is present in that slice (and still exists despite being moved to https://github.com/golang/tools/blob/3e7f74d009150bf5e66483f3759d8c59f50e873d/go/analysis/checker/checker.go#L591).

</details>


---

### #1759: Change activity error to warn, or allow it to be configurable 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1759 |
| **State** | OPEN |
| **Author** | longquanzheng (Quanzheng Long) |
| **Created** | 2024-12-19 19:54:37.000 UTC (1 years ago) |
| **Updated** | 2025-10-15 13:43:29.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

https://github.com/temporalio/sdk-go/blob/ccb28ef56de83e34c5b8482ebcd4c41fd26b8fcd/internal/internal_task_handlers.go#L2246


In my company, we are default monitors on errors that are expected to be more critical cases. But many errors in activity are retryable that are not too critical for us. 

If you want to keep it error, can we make it configuable on SDK that we can change to other level like "Warn"?

Thanks

#### Comments (1)

<details>
<summary><strong>LarsAlmgren</strong> commented on 2025-10-15 13:42:25.000 UTC</summary>

We have the same issue. I saw that since `v1.35` it's possible to mark the `ApplicationError` with Category `ApplicationErrorCategoryBenign` to downgrade the log severity to `DEBUG`.

https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L2326-L2338

</details>


---

### #1609: Support ContextAware for failure converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1609 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-08-27 14:42:09.000 UTC (1y 4m ago) |
| **Updated** | 2025-09-09 14:21:36.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
Support the https://pkg.go.dev/go.temporal.io/sdk@v1.28.1/internal#ContextAware interface for failure converters so failure converters can access information like headers from the workflow/activity context



#### Comments (1)

<details>
<summary><strong>doreshnikov</strong> commented on 2025-09-09 14:21:35.000 UTC</summary>

Hi! Are there any plans on implementing this (and if there are, is there an approximate ETA for it) or is this issue left for outside developers to contribute?

In our project we use custom errors and error marshalling from https://github.com/cockroachdb/errors. Right now we are managing with a custom FailureConverter but lacking context stands in a way of, for example, logging the problems with marshalling/unmarshalling using the right logger.

Thank you!

</details>


---

### #1177: Switch to a new clock library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1177 |
| **State** | OPEN |
| **Author** | albertteoh (Albert) |
| **Created** | 2023-07-27 07:41:40.000 UTC (2y 5m ago) |
| **Updated** | 2023-08-04 14:13:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
The Temporal go SDK uses the archived https://github.com/facebookarchive/clock.

Reference: https://github.com/temporalio/sdk-go/blob/master/go.mod#L6

**Describe the solution you'd like**
Switch to an actively maintained clock. E.g. github.com/jonboulle/clockwork

**Describe alternatives you've considered**
I've often used https://github.com/benbjohnson/clock in the past, but
that appears to be archived as well.

#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-08-01 18:45:00.000 UTC</summary>

Being archived is not a strong reason to migrate off of by itself

</details>

<details>
<summary><strong>albertteoh</strong> commented on 2023-08-02 13:58:10.000 UTC</summary>

> Being archived is not a strong reason to migrate off of by itself

I appreciate the response @Quinn-With-Two-Ns and yes, I agree, it's not a strong reason to migrate off by itself.

For context, the primary reason is usability.

Mocking `time.Now()` with https://github.com/facebookarchive/clock requires a bit more effort. An [example in this codebase](https://github.com/temporalio/sdk-go/blob/930cc2b106ffce2f8659b65a66fac03cd5b1fc3d/internal/internal_workflow_testsuite.go#L340) is:

```go
env.mockClock.Add(startTime.Sub(env.mockClock.Now()))
```

With github.com/jonboulle/clockwork, it feels a bit more intuitive and readable:
```go
env.mockClock = clockwork.NewFakeClockAt(startTime)
```

On top of that, I see that `"github.com/facebookgo/clock"` is only imported in [a single test file](https://github.com/temporalio/sdk-go/blob/930cc2b106ffce2f8659b65a66fac03cd5b1fc3d/internal/internal_workflow_testsuite.go#L36), so migrating over should be fairly trivial.

It may even be a reason for mocking out other unit tests that are sleeping on a real clock.

Finally, the reason for reaching out was because we are using the temporalio/sdk-go which has an indirect dependency on github.com/facebookarchive/clock but, due to the usability issue mentioned above and it being archived, we decided to go for another clock implementation for our unit tests. So it's a bit of a shame that we can't just have the one clock dependency.

Again, not a pressing matter, just thought to discuss this to see if there's interest in the Temporal community, and happy to contribute a change too. I can also close this issue if there's no interest/appetite. 😄 

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-08-04 14:13:33.000 UTC</summary>

>So it's a bit of a shame that we can't just have the one clock dependency.

while I understand, moving to different clock dependency could cause the same issue for other users currently using https://github.com/facebookarchive/clock

Given the simplicity of these mocks, I'd rather just get rid of the dependency and write some code in the SDK to replace it .

Reactions: 👍 1

</details>


---

### #1037: Calling a value receiver method with a pointer type causes a panic when used through `ExecuteActivity`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1037 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-02-13 16:21:14.000 UTC (2y 10m ago) |
| **Updated** | 2023-02-13 17:02:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
The call to work like it does in usual go code. The inverse does work in temporal ie calling a pointer receiver with a value type does work.

## Actual Behavior
Panic in the workflow
```
2023/02/13 08:16:28 ERROR Workflow panic Namespace default TaskQueue hello-world WorkerID 10319@Quinn-Klassens-MacBook-Pro.local@ WorkflowType Workflow WorkflowID hello_world_workflowID RunID 70d34349-a651-4924-b780-855af0c9ca6a Attempt 2 Error runtime error: invalid memory address or nil pointer dereference StackTrace coroutine root [panic]:
github.com/temporalio/samples-go/helloworld.Workflow({0x1038a6860?, 0x14000362a50?}, {0x140000b0050, 0x8})
        /Users/quinnklassen/Documents/Code/samples-go/helloworld/helloworld.go:23 +0xc4
reflect.Value.call({0x1037740a0?, 0x103896c28?, 0x104398108?}, {0x10357a176, 0x4}, {0x14000362a80, 0x2, 0x10?})
        /opt/homebrew/Cellar/go/1.19.3/libexec/src/reflect/value.go:584 +0x688
reflect.Value.Call({0x1037740a0?, 0x103896c28?, 0x1400016fd18?}, {0x14000362a80?, 0x140001fa1c0?, 0x20?})
        /opt/homebrew/Cellar/go/1.19.3/libexec/src/reflect/value.go:368 +0x90
go.temporal.io/sdk/internal.executeFunction({0x1037740a0, 0x103896c28}, {0x140001fa1c0, 0x2, 0x103e9faa0?})
        /Users/quinnklassen/go/pkg/mod/go.temporal.io/sdk@v1.21.1/internal/internal_worker.go:1729 +0x140
go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow(0x140003a8320, {0x1038a66d8?, 0x14000374300}, 0x1400019c600)
        /Users/quinnklassen/go/pkg/mod/go.temporal.io/sdk@v1.21.1/internal/workflow.go:506 +0x14c
go.temporal.io/sdk/internal.(*workflowExecutor).Execute(0x1400029abc0, {0x1038a66d8, 0x14000374300}, 0x25?)
        /Users/quinnklassen/go/pkg/mod/go.temporal.io/sdk@v1.21.1/internal/internal_worker.go:780 +0x238
go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1({0x1038a6860, 0x140003628d0})
        /Users/quinnklassen/go/pkg/mod/go.temporal.io/sdk@v1.21.1/internal/internal_workflow.go:507 +0xd0
```


## Steps to Reproduce the Problem
```
func Workflow(ctx workflow.Context, name string) (string, error) {
	ao := workflow.ActivityOptions{
		StartToCloseTimeout: 10 * time.Second,
	}
	ctx = workflow.WithActivityOptions(ctx, ao)

	var result string
	var a *ActivityStruct
	_ = workflow.ExecuteActivity(ctx, a.Activity, name).Get(ctx, &result)
	return result, nil
}

type ActivityStruct struct {
}

func (a ActivityStruct) Activity(ctx context.Context, name string) (string, error) {
	logger := activity.GetLogger(ctx)
	logger.Info("Activity", "name", name)
	return "Hello " + name + "!", nil
}

```
## Specifications

  - Version: 1.21
  - Platform: M1 Mac


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2023-02-13 16:32:06.000 UTC</summary>

I don't think you can fix this. That panic occurs before you have access. From spec at https://go.dev/ref/spec#Method_values:

> As with [selectors](https://go.dev/ref/spec#Selectors), a reference to a non-interface method with a value receiver using a pointer will automatically dereference that pointer: pt.Mv is equivalent to (*pt).Mv.

Which of course is what causes the panic. There is an alternative in that we may be able to support `ActivityStruct.Activity` but that basically uncurries the first arg as the receiver which has other implications.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-02-13 16:40:06.000 UTC</summary>

Yeah I agree we can't fix it, the best we can do is add a check to the workflow checker for this. 

>There is an alternative in that we may be able to support ActivityStruct.Activity 

I actually like this approach because I see a lot users get confused about why they need to declare this empty struct when calling activities in a workflow. What are the other implications?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-02-13 16:59:36.000 UTC</summary>

> What are the other implications?

It is just a bit less clear to do with a pointer receiver. So we'll either have:

> Use `var a *ActivityStruct` + `a.Activity` approach for pointer methods and `ActivityStruct.Activity` for non-pointer methods

or

> Use `(*ActivityStruct).Activity` for pointer methods or `ActivityStruct.Activity` for non-pointer methods

But it's probably OK. Also, you'll have to make some assumptions or do advanced checks, because reflection won't be able to tell the difference between: `func (ActivityStruct) Activity(context.Context)` and `func Activity(ActivityStruct, context.Context)` naively. You'll have to take the first param if it's not a context, check if there's a method of the same name, and maybe even use function pointer equality check to ensure it's a method and not a top-level function. But maybe you don't need to over-validate.

</details>


---

### #1035: Workflowcheck should check that serialized objects do not have unexported, non-json-ignored fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1035 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-02-10 19:18:08.000 UTC (2y 10m ago) |
| **Updated** | 2025-02-04 18:25:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

People make this mistake plenty. There's rarely value for an unexported field on a serialized struct. But sometimes there (kinda) is when, say, you want to have something lazily cached in there for just local use so if JSON omit tag is there we won't error.



#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-02-13 16:08:19.000 UTC</summary>

An unexported field may still be being serialized if a struct implements a custom `MarshalJSON`. So we should probably check for this case and not error on types that do this.

Reactions: 👍 1

</details>

<details>
<summary><strong>iwittkau</strong> commented on 2024-05-30 09:21:05.000 UTC</summary>

This would be really nice to have because I see this is a common mistake developers make when implementing their first workflow.

</details>

<details>
<summary><strong>iwittkau</strong> commented on 2024-05-30 09:35:01.000 UTC</summary>

[Go's `vet` command](https://pkg.go.dev/cmd/vet) provides a `structtag` check. But that only works if you add `json` tags to the struct fields. Maybe someone finds this useful or it can be used to enhance `workflowcheck`.

```go
type Args struct {
    name string `json:"name"`
}
```

```sh
$ go vet .
./args.go:4:2: struct field name has json tag but is not exported
```

</details>


---

### #955: Suppress "worker stopping" polling errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/955 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-11-14 14:23:50.000 UTC (3y 1m ago) |
| **Updated** | 2023-10-12 22:57:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Today when stopping a worker, this error is logged to `WARN` (shown with Zap adapter):

> 2022-11-14T08:20:43.634-0600    WARN    harness/log.go:50       Failed to poll for task.        {"Namespace": "sdk-features-ns-ae5b6b4a-9ecd-48f6-a6cc-ef9bac2aea25", "TaskQueue": "sdk-features-data_converter/binary-86bf92b7-a1e0-4508-9584-ddc274948245", "WorkerID": "21004@cretz-laptop@", "WorkerType": "WorkflowWorker", "Error": "worker stopping"}

**Describe the solution you'd like**

Move that to debug level or suppress it entirely. It's not really a poll "failure" if the worker is stopping.

#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2022-12-02 23:43:08.000 UTC</summary>

@cretz didn't you fix this here https://github.com/temporalio/sdk-go/issues/882?

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-12-05 13:09:24.000 UTC</summary>

Hrmm, I still see these logs when I stop a worker. I guess I didn't fix it well enough or maybe there's something else I missed.

</details>

<details>
<summary><strong>Tadimsky</strong> commented on 2023-10-12 22:57:16.000 UTC</summary>

Any updates on this one? I see this still when stopping a worker (or using the SIGTERM channel).

> 2023-10-12T15:55:39.881-0700    WARN    temporal        internal/internal_worker_base.go:374    Failed to poll for task.        {"Namespace": "default", "TaskQueue": "LOW_PRI", "WorkerID": "43751@Jonnos-Laptop@", "WorkerType": "WorkflowWorker", "Error": "worker stopping"}


</details>


---

### #875: Safer queries (and update validators)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/875 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-08-02 18:28:24.000 UTC (3y 5m ago) |
| **Updated** | 2023-07-19 16:50:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Queries can start activities and such and they shouldn't

**Describe the solution you'd like**

* Allow query handlers to accept a context as the first parameter in a backwards compatible way
* Disallow that context to be used for execute activity
* Add `workflowcheck` static analyzer check to ensure query handlers do not do anything they aren't supposed to

This is obviously a non-trivial amount of work and low priority

#### Comments (3)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2022-12-02 21:23:27.000 UTC</summary>

This same restrictions should also apply to `SideEffects` as well

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2022-12-02 22:04:53.000 UTC</summary>

see also https://github.com/temporalio/sdk-features/issues/177

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-07-19 16:50:02.000 UTC</summary>

Queries, and other read only contexts can no longer perform any mutating operations. Leaving this open because we could still add support for the static analyzer

</details>


---

### #842: Support custom object processing in codec gRPC interceptor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/842 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-06-28 21:56:12.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-29 13:27:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Today we process _all_ (non-search-attribute) payloads but user may not want to process some like headers

**Describe the solution you'd like**

Accept a new `PayloadCodecGRPCClientInterceptorOptions` option that has a field like:

```go
CustomProcessor: func(processContext *ProcessContext) error
```

With a context of:

```go
type ProcessContext struct {
  Stack: []interface{}
  Current: interface{}
  Encode: bool
  Next: func(processContext *ProcessContext) error
}
```

Of course this object would be mutated during processing so it shouldn't be stored. This would allow a custom processor to check if `processContext.Current` was `*commonpb.Header` and just not call `processContext.Next()` like it would for the others.

#### Comments (3)

<details>
<summary><strong>robholland</strong> commented on 2022-06-29 07:52:08.000 UTC</summary>

Can you give some example consumers for this API?

</details>

<details>
<summary><strong>robholland</strong> commented on 2022-06-29 07:53:53.000 UTC</summary>

I guess I'm wondering why not just pass a list of types to skip?

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-06-29 13:27:58.000 UTC</summary>

> Can you give some example consumers for this API?

Users who want to only skip tracing headers

> I guess I'm wondering why not just pass a list of types to skip?

No reason to make it purposefully less flexible. For example, what if you wanted to conditionally skip processing an object?

</details>


---

### #813: Weird workflow task failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/813 |
| **State** | OPEN |
| **Author** | yiminc (Yimin Chen) |
| **Created** | 2022-05-23 19:57:06.000 UTC (3y 7m ago) |
| **Updated** | 2022-07-08 14:00:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | potential-bug, external dependency |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We see one weird workflow task failure from SDK that keeps retrying and eventually succeed after 13K retry attempts. 
The workflow logic is it schedules 16 activities and wait for all of them to complete. 
The history shows one of the workflow task timeout due to start_to_schedule timeout (the 5s sticky timeout). After that, a new workflow task is scheduled but it failed with SDK panic complaining activity ID not found. After about 13K retry attempts, it magically succeed eventually. The binary checksum is the same before and after the failure. 


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2022-05-23 19:59:07.000 UTC</summary>

Have you been able to replicate this? I am afraid the information given is not enough to go on. I can write a workflow that schedules 16 activities and waits for them to complete. I can simulate a workflow task timeout. But I fear those won't replicate. It is really important we replicate the bug to confirm it exists.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-05-31 16:43:20.000 UTC</summary>

The internal situation where this happened was due to a workflow task timeout before even started (schedule-to-start sticky timeout), but the workflow task failure continually failed _across multiple workers_ which makes it unlikely to be caused by cached workflow issues.

Also, an attempted replay with the history on the workflow did not replicate. this was with trimmed history and advanced logs to confirm that the activity ID was found.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-07-08 14:00:50.000 UTC</summary>

Still unable to replicate, can anyone else?

</details>


---

### #458: TestWorkflowEnvironment: Fail RegisterDelayedCallback after ExecuteWorkflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/458 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2021-06-09 00:57:16.000 UTC (4y 6m ago) |
| **Updated** | 2021-11-16 16:13:25.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
It is a mistake to register a delayed callback after calling ExecuteWorkflow. But some users do it and it is hard to troubleshoot.

**Describe the solution you'd like**
Panic on RegisterDelayedCallback after ExecuteWorkflow was called.



#### Comments (1)

<details>
<summary><strong>embano1</strong> commented on 2021-11-16 16:13:25.000 UTC</summary>

+1 just ran into the same issue and spent 1h troubleshooting. Definitely user issue, but was hard to debug and `panic` would be neat.

Reactions: 👍 1

</details>


---

### #126: Add autoheartbeating of activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/126 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-05-11 15:20:46.000 UTC (5y 7m ago) |
| **Updated** | 2022-10-31 12:30:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 🎉 9 |

#### Description

From Slack:

> wdyt about some sort of autoheartbeating? it would be very nice to not have to implement heartbeating in long-running activities where the ~only reason to implement heartbeating is to know whether a worker is alive or not. 

#### Comments (3)

<details>
<summary><strong>sevein</strong> commented on 2021-09-02 16:26:36.000 UTC</summary>

For the record, this option was added to Cadence's client in https://github.com/uber-go/cadence-client/pull/1053.
replayWorkflowActivity was updated in https://github.com/uber-go/cadence-client/pull/1088.

Reactions: 👍 1

</details>

<details>
<summary><strong>Sunkwan-Kwon</strong> commented on 2022-10-31 05:46:06.000 UTC</summary>

Hello. Temporal team.

Do you have a plan to merge the PR related with this issue?

I'm trying to migrate Cadence worker codes to Temporal, and the auto-heartbeat feature was useful while I'm using Cadence but it is not supported by Temporal yet. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-10-31 12:30:12.000 UTC</summary>

There are a lot of ways to auto heartbeat and no one size fits all. Here's a simple version: https://community.temporal.io/t/why-doesnt-the-sdk-go-have-enableautoheartbeat/6340/2. If this solves your needs maybe we can put in a sample.

</details>


---

### #2131: Configurable minRPCTimeout for activity worker instead of using MaxHeartbeatThrottleInterval for RPC timeout. And allow retry manually when network error..

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2131 |
| **State** | OPEN |
| **Author** | ganlvtech (Ganlv) |
| **Created** | 2025-12-08 10:41:26.000 UTC (24 days ago) |
| **Updated** | 2025-12-19 02:18:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

My activity has a 300s timeout. The activity worker sends a heartbeat every 5s, and I can wait up to 30s for each heartbeat RPC to complete. Even if a heartbeat fails, I can retry up to 10 times before hitting the 300s timeout.

I set `MaxHeartbeatThrottleInterval = time.Duration(1)` to prevent heartbeat throttling, but this forces every heartbeat RPC to complete within 1s.

Related issues and PRs https://github.com/temporalio/sdk-go/pull/660 https://github.com/temporalio/sdk-go/issues/859 https://github.com/temporalio/sdk-go/pull/863

https://github.com/temporalio/sdk-go/blob/13ff29d79d5345c30f3e4109c0f94b737a19ad7a/internal/worker.go#L278-L283

> no pending heartbeat will wait longer than this amount of time to send

https://github.com/temporalio/sdk-go/blob/13ff29d79d5345c30f3e4109c0f94b737a19ad7a/internal/internal_task_handlers.go#L2154-L2162

And `Error: context deadline exceeded` will cause `isActivityCanceled = true` and cancel the activity's context. I cannot retry heartbeat manually.

https://github.com/temporalio/sdk-go/blob/13ff29d79d5345c30f3e4109c0f94b737a19ad7a/internal/internal_task_handlers.go#L2180-L2201

**Describe the solution you'd like**
Configurable `minRPCTimeout` for activity worker. Allow retry heartbeat on network error.

**Describe alternatives you've considered**
I have try to set `MaxHeartbeatThrottleInterval` to longer than my network ping. Yes, it works. But not expected.

#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-12-18 23:01:32.000 UTC</summary>

Can you clarify the situation more? Why are you trying to disable heartbeat throttling? That would not be a recommended approach as it will make your workers more sensitive to network latency.

</details>

<details>
<summary><strong>ganlvtech</strong> commented on 2025-12-19 02:18:31.000 UTC</summary>

I want to stop this activity as soon as possible, because `ctx.Done()` in an activity func is triggered when `activity.RecordHeartbeat(ctx, nil)` is called and knows the server has already canceled this workflow.

</details>


---

### #2107: Panic in temporal unit test framework.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2107 |
| **State** | OPEN |
| **Author** | jupudibhaskar967 (Naga Jupudi) |
| **Created** | 2025-11-10 21:16:09.000 UTC (1 months ago) |
| **Updated** | 2025-11-10 21:16:56.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior
Test should be successful.

## Actual Behavior
Test panics when executing env.ExecuteWorkflow()
Tried with v1.36.0 SDK version as well but still the test is flaky and fails intermittently.

## Steps to Reproduce the Problem

Workflow definition
```
func TestNewWorkflow(ctx workflow.Context, envName string, orgName string, baseDir string) (string, error) {
	childOpts := workflow.ChildWorkflowOptions{
		WorkflowExecutionTimeout: childWorkflowTimeout,
		WorkflowTaskTimeout:      childWorkflowTaskTimeout,
		ParentClosePolicy:        enums.PARENT_CLOSE_POLICY_REQUEST_CANCEL,
	}
	childCtx := workflow.WithChildOptions(ctx, childOpts)
	futures := make([]workflow.ChildWorkflowFuture, 0)
	for ii := 0; ii < 500; ii++ {
		future := workflow.ExecuteChildWorkflow(childCtx, ManualStageWorkflow)
		futures = append(futures, future)
	}

	for ii := 0; ii < 500; ii++ {
		if err := futures[ii].Get(childCtx, nil); err != nil {
			return "", err
		}
	}

	return "Successfully executed 500 child workflows", nil
}
```

Unit test definition
```
// Registration and env instantiation:
testSuite = &testsuite.WorkflowTestSuite{}
env = testSuite.NewTestWorkflowEnvironment()
env.RegisterWorkflow(orchworker.TestNewWorkflow)
env.RegisterWorkflow(orchworker.ManualStageWorkflow)

// Actual test
It("Simulate panic", func() {
	env.OnWorkflow(orchworker.ManualStageWorkflow, mock.Anything, mock.Anything).
		Return(errors.New("test")).Maybe()
	env.ExecuteWorkflow(orchworker.TestNewWorkflow, "testenv", "org1", "")
	Expect(env.IsWorkflowCompleted()).To(BeTrue())
	Expect(env.GetWorkflowError()).To(HaveOccurred())
})

```

The test behavior is flaky with occasional failures
`watch -n3 "go clean -testcache && go test -v <package> -ginkgo.focus="Simulate panic""`

Panic stack trace:
```
/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/internal_workflow_testsuite.go:2855 +0x30
go.temporal.io/sdk/internal.(*testCallbackHandle).processCallback(0x40004d3bc8)
	/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/internal_workflow_testsuite.go:857 +0xb8
go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).startMainLoop(0x4000318488)
	/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/internal_workflow_testsuite.go:797 +0x10c
go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflowInternal(0x4000318488, 0x0, {0xf8ea84, 0xf}, 0x4000391c00)
	/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/internal_workflow_testsuite.go:591 +0x384
go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflow(0x4000318488, {0xa5a300, 0xc5ca40}, {0x4000472f60, 0x3, 0x3})
	/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/internal_workflow_testsuite.go:535 +0x104
go.temporal.io/sdk/internal.(*TestWorkflowEnvironment).ExecuteWorkflow(0x400037ea80?, {0xa5a300?, 0xc5ca40?}, {0x4000472f60?, 0x2?, 0x2?})
	/go/pkg/mod/go.temporal.io/sdk@v1.30.0/internal/workflow_testsuite.go:776 +0xac
orchestration/internal/orchworker_test.init.func3.4.3()
	/app/internal/orchworker/workflow_test.go:356 +0x154
```

## Specifications

  - Version: 1.30.0
  - Platform: Alpine with go 1.25.3



---

### #1980: Feature Request: Include Version in workflowcheck -V=full Output

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1980 |
| **State** | OPEN |
| **Author** | deepika-awasthi |
| **Created** | 2025-06-18 17:20:48.000 UTC (6 months ago) |
| **Updated** | 2025-07-21 06:36:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
this is for tool -> go.temporal.io/sdk/contrib/tools/workflowcheck 

the binary doesn't embed its version information (like semver, buildID, or git hash). The output of workflowcheck -V=full currently shows "version devel".

`➜  sdk-go git:(master) workflowcheck -V=full
/Users/deepikaawasthi/go/bin/workflowcheck version devel comments-go-here buildID=793f950a87bc23493a6d8e28dd0f8db2adb5fbcae25a78eb37fd8d25150b4bd7
`

**Describe the solution you'd like**
workflowcheck binary to include the version that was used during its installation

```
> go install go.temporal.io/sdk/contrib/tools/workflowcheck@<theVersion>
...
> workflowcheck -V=full
... <theVersion> ...
```




#### Comments (2)

<details>
<summary><strong>Sushisource</strong> commented on 2025-07-01 16:44:37.000 UTC</summary>

Not a priority for us at the moment, but @deepika-awasthi if you'd like to make a PR yourself we'd welcome it. Thanks!

Reactions: 👀 1

</details>

<details>
<summary><strong>kris-gaudel</strong> commented on 2025-07-21 06:36:41.000 UTC</summary>

Hi is this issue still available? I'm interested in contributing as a first timer!

</details>


---

### #1954: Ability to get original Logger from activity.GetLogger(ctx) / workflow.GetLogger(ctx)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1954 |
| **State** | OPEN |
| **Author** | SovaPluto (Volodymyr Sokolov) |
| **Created** | 2025-05-11 11:33:17.000 UTC (7 months ago) |
| **Updated** | 2025-05-11 11:39:36.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**
We have our own logger structure across all the services that has important features implemented through its methods.
Temporal logger injects some fields using `With` before execution of activity. 
Another example is trace interceptor that also uses `With` to put trace/span ids as fields (key values). 
The problem is that in some cases I receive not my Adapter structure, but "ReplayLogger". I can't extract original structure from ReplayLogger (it's private).
\+ If other implementations/wrappers appear -- it will imposible to support.

**Describe the solution you'd like**
I want to have opportunity to get the original logger structure without losing all the fields injected previously.
So the solution can be EITHER, giving a method for getting my configured logger, passed at the configuration step, OR don't wrap the original logger anyhow during the execution (logger always keeps the same type, no decorators allowed). 

**Describe alternatives you've considered**
Using global logger in case I couldn't assert type to my adapter. In this case I can lose important fields or must duplicate them myself from the activity. It's more complicated and expensive to do.

**Additional context**

How I try to get the original logger from the activity's context:
![Image](https://github.com/user-attachments/assets/aa9e73fb-5ce5-4261-9679-45c5c63f3151)

`GetLogger` method represents "global" clean logger

Difference in execution:
![Image](https://github.com/user-attachments/assets/42d870ab-de36-427f-b264-3474f0f53e10)


P.S: I'd gladly consider other solutions if you have such. The main goal is to be able to re-use SDK logger enhancements + to continue using project's standard implementation


---

### #1929: OTel emitted metrics do not match behavior described in the docs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1929 |
| **State** | OPEN |
| **Author** | kevinawoo (Kevin Woo) |
| **Created** | 2025-04-23 01:00:32.000 UTC (8 months ago) |
| **Updated** | 2025-05-01 05:20:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The behavior described via SDK docs and how the the OTel package was written is different. [Community Slack Discussion](https://temporalio.slack.com/archives/CTDTU3J4T/p1744839840976459)

According to these comments, the behavior is that the these metrics are monotone increasing. 
- https://github.com/temporalio/sdk-go/blob/a92189071ec5931c88a97284d60b8b06f1024fc3/client/client.go#L1315-L1316
- https://github.com/temporalio/sdk-go/blob/a92189071ec5931c88a97284d60b8b06f1024fc3/internal/common/metrics/handler.go#L49-L53

However the current OTel implementation supports explicitly supports negative numbers with the use of `UpDownCounter`
- https://github.com/temporalio/sdk-go/blob/a92189071ec5931c88a97284d60b8b06f1024fc3/contrib/opentelemetry/handler.go#L120-L121
- https://github.com/temporalio/sdk-go/blob/a92189071ec5931c88a97284d60b8b06f1024fc3/contrib/opentelemetry/handler_test.go#L89


## The Bug
The ask is to either fix the docs, or change OTel's emitted metric to be a `Counter` so that it matches how it's more commonly used.

The `UpDownCounter` type doesn't make contextual sense for the metrics emitted by the Temporal SDK.

See the **OTel-Contrib-Packages** section below on how other SDKs use `UpDownCounters` vs `Counters`.


## Specifications
  - Version: v1.34.0


## References

### Temporal Go SDK
The introduction of OTel was introduced in https://github.com/temporalio/sdk-go/pull/1336#discussion_r1443293471, with this comment left ambiguous about which counter type to use, however a [test case](https://github.com/temporalio/sdk-go/pull/1336/files#diff-f987a1b77ea038f5dfb730dff688338f356b0dcb8c4f5bc4ea9c4137f0c3b5acR90) was introduced to support negative numbers.

The summary of an [internal discussion](https://temporaltechnologies.slack.com/archives/C01FG4BRQVB/p1745346080185219) is that the package was built for general usage, without any limitations on the value.

Currently, all usages of the counter calls `.Inc(1)`, however this may change, especially numbers `> 1`.

The behavior of the metrics was copied from the behavior of Tally.


### Tally
uber-go/tally is ambiguous in which values is allowed, but it's implementation supports negative numbers:
- https://github.com/uber-go/tally/blob/12d200cf909b1094affc40bf4bf70fc99c5f39a3/stats.go#L72-L74
- There's no test cases that specifically address negative numbers https://github.com/uber-go/tally/blob/12d200cf909b1094affc40bf4bf70fc99c5f39a3/stats_test.go#L86-L101


### Prometheus
Prometheus does not support negative numbers for counters and will panic if a negative number is provided. https://github.com/prometheus/client_golang/blob/9b83d994624f3cab82ec593133a598b3a27d0841/prometheus/counter.go#L126-L129


### OTel Contrib Packages
OTel's Prometheus package implements `counters` as `monotonic` `sums`, which follows the spirit of Prometheus's implementation.

> [A Counter] is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.

-[OTel's Prometheus Design Doc #Counters](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/d64038bc0e15111b345d218e17b3c0d4bed63ce5/receiver/prometheusreceiver/DESIGN.md#counter)
- and it's code [prometheusreceiver/internal/util.go](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/d64038bc0e15111b345d218e17b3c0d4bed63ce5/receiver/prometheusreceiver/internal/util.go#L97-L102)



There's limited usage of `UpDownCounters` in all of the `receiver` packages. This metric is mostly commonly used to show the number of things in flight/active.

Note, I think Fluent's usage is actually a bug in how the code is auto generated.


<details> 
<summary>23 occurrences (expand to see usage patterns)</summary>
<kbd>

![Image](https://github.com/user-attachments/assets/057774b6-8200-4c9d-86bb-75785357b761)

</kbd>

</details>



Where the `Counter` type is used as **a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.**


<details>
<summary>Temporal SDK usage of `counter` metric type</summary>

<kbd>

![Image](https://github.com/user-attachments/assets/b6cee77f-bbac-4261-9acc-5e68f4b27d76)

</kbd>
</details> 

<details>
<summary>Other SDK's use of `counter` type (164 occurrences)</summary>

<kbd>

![Image](https://github.com/user-attachments/assets/4572214d-ba7d-48a6-b1dd-3ede1f238a44)

</kbd>
</details> 

#### Comments (2)

<details>
<summary><strong>Sushisource</strong> commented on 2025-04-29 18:15:40.000 UTC</summary>

@kevinawoo Yeah, so this is all objectively true, but I think the consequence is fairly low. We use gauges in other places, so any metrics collection system is going to need to support those (I know in the community thread, they mention their system doesn't handle gauges well - but what system would that be? There'd be a lot of metrics that are gauges now [and should be] that they would be unable to use), and although these particular metrics probably can and should be simple counters, the fact that they aren't isn't exactly causing any damage.

So with that in mind we discussed on the SDK team and we're not likely to take this on immediately. We have a broader effort tracked to normalize metrics across SDKs, I've parented this under that in Jira, and when we take on that effort we can decide if we'll do this then too.

Reactions: 👍 1

</details>

<details>
<summary><strong>danielhochman</strong> commented on 2025-05-01 05:20:39.000 UTC</summary>

Google Cloud Monitoring (formerly known as Stackdriver) doesn't natively support gauge deltas in their metrics query builder. This makes any sort of interactive debugging or exploration of metrics quite painful. Displaying a gauge is fine, just not deltas without writing [MQL which is deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql) or their flavor of PromQL which is [slightly different](https://cloud.google.com/stackdriver/docs/managed-prometheus/promql-differences) than PromQL, neither of which our team is trained up on.

Reactions: 👍 1

</details>


---

### #1646: SetStartTime for activity test env

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1646 |
| **State** | OPEN |
| **Author** | rrrkren (Eric Ren) |
| **Created** | 2024-09-23 18:55:31.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-23 18:55:31.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

`TestWorkflowEnvironment` supports a `SetStartTime` method which allows one to set the start time of the workflow during testing. It would be great if such a feature exists for `TestActivityEnvironment` so similar start time related features can be tested properly. 

**Describe the solution you'd like**
`TestActivityEnvironment` to support `SetStartTime`

**Describe alternatives you've considered**
passing in start time for activity as parameter, but this is not encouraged as it could be imprecise due to worker coordination.

**Additional context**



---

### #1593: Consider potential range-over-func APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1593 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-08-15 22:59:01.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-16 14:01:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
With Go 1.23 range-over-func was brought into the language allowing the implementation of iterator like patterns

**Describe the solution you'd like**
Consider what APIs we can add to the Go SDK to take advantage of range-over-func

**Additional context**
https://go.dev/wiki/RangefuncExperiment

#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-08-15 23:01:33.000 UTC</summary>

## Possible APIS

### Workflow

* Workflow channel iterator
* Deterministic map iterator

### Client

* List workflow and schedule iterators

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-16 14:01:25.000 UTC</summary>

The main place (async) iterators are used in other SDKs is listing workflows, listing schedules, and iterating history events. So would add "iterating history events" to your list.

Reactions: 👍 1

</details>


---

### #1468: Interceptors are skipped for mocked activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1468 |
| **State** | OPEN |
| **Author** | PatrikValo (pvalo) |
| **Created** | 2024-05-11 22:19:11.000 UTC (1y 7m ago) |
| **Updated** | 2025-02-04 18:24:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
I would expect that when I test a workflow and I mock an activity with return values like following

```go
s.env.OnActivity(m.MyActivity, mock.Anything).Return(result, nil)
```

all executors defined in the test options

```go
s.env.SetWorkerOptions(
  worker.Options{
	  Interceptors: ...
  },
)
```

are executed.

## Actual Behavior
If I mock nonlocal activity with return values, interceptors are not executed. But for example if I mock the local activity in the tests with defined return values, interceptors are executed as expected. Also if I mock activities (local, nonlocal) with a function

```go
s.env.OnActivity(m.MyActivity, mock.Anything).Return(func (ctx context.Context) (int, error) {
    return result, nil
})
```

it works as expected and interceptors are executed.

## Steps to Reproduce the Problem
1. Define interceptors in the test environment
1. Mock non local activity with return values
1. Run workflow test

## Specifications
* Version: 1.26
* Platform: I think problem is on all platforms

## Thoughts
I think the problematic code lives in the `internal/internal_workflow_testsuite.go`
https://github.com/temporalio/sdk-go/blob/c69831e92d7f52e564421fcb99ed49f693c5acbe/internal/internal_workflow_testsuite.go#L1963-L1975
If the mock is a function, we execute the activity executor that calls all interceptors internally. On other if we directly specify return values, we don't use the activity executor and `m.getMockValue(mockRet)` is called. 

There is a workaround to provide a mock function, but it is not comfortable and readable if I have to define a function that just returns values on all places. So theoretically an easy fix could be to just wrap the mocked return values to a function at sdk level and unify the execution paths.



#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-05-14 17:27:27.000 UTC</summary>

Yes we should be consistent between local and normal activities. I'll have to verify what the Java SDK so we can align across SDKs

Reactions: 👍 1

</details>

<details>
<summary><strong>PatrikValo</strong> commented on 2024-05-14 19:32:48.000 UTC</summary>

Thanks! Meanwhile I have been looking into this issue and I created a commit - https://github.com/PatrikValo/sdk-go/commit/56f2c792a58e50c5568ecfba3f1fb86e0cce1702, I will not open PR for now and I will wait. Please let me know what you find about the java sdk.

</details>


---

### #1086: Add support for a graceful shutdown of go workers where all activities are finished before the worker returns

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1086 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-04-13 20:07:35.000 UTC (2y 8m ago) |
| **Updated** | 2023-06-29 13:43:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Users want to wait till all their activities are complete before killing their workers.

**Describe the solution you'd like**
Add an option to workers to allow them to wait for all activities to finish before `Stop()` returns for graceful shutdown.

**Describe alternatives you've considered**
Currently go workers have `WorkerStopTimeout` but that is a finite amount of time and the activity context is not cancelled until this timeout is up.



#### Comments (2)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-04-20 16:12:39.000 UTC</summary>

see also: https://github.com/temporalio/features/issues/261


</details>

<details>
<summary><strong>eko</strong> commented on 2023-06-29 13:43:08.000 UTC</summary>

Hi,

I confirm that the workers are currently waiting for activities to finish and `WorkerStopTimeout` acts as a timeout.

For instance, if you have an activity that needs ~30mins more to finish and have a `WorkerStopTimeout` set to 1 hour, the worker will stop after 30mins, but in case your activity needs more time, it can wait until 1 hour (the hard shutdown timeout).

</details>


---

### #1033: OnUpsertSearchAttributes and OnUpsertMemo unclear about mocking ability

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1033 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-02-08 15:27:12.000 UTC (2y 10m ago) |
| **Updated** | 2025-02-04 18:25:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
`OnUpsertSearchAttributes` and `OnUpsertMemo` are just called when their methods are called. They were not developed to return values or return errors unlike many of our other mocks. We need to either:

* Properly document that these are essentially "event listeners" and they cannot affect behavior.
* Have these calls actually mock
  * Probably a bad idea, backwards incompat to have it override the default behavior of adding to the attr maps
  * But we could at least call this first and let the mocker return an error that is returned then to the workflow



#### Comments (2)

<details>
<summary><strong>jPomeranz</strong> commented on 2024-03-28 13:56:42.000 UTC</summary>

Just curious, was an internal consensus reached on the optimal behavior for these calls going forward? I was wondering if this is something we could make a PR for to allow the mocks or whether it's still awaiting an internal decision.

</details>

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-06-13 22:31:15.000 UTC</summary>

We should document that `OnUpsertSearchAttributes` and `OnUpsertMemo` are just `event listeners`. Mocking these calls return value in the test environment doesn't make sense since the real environment and the test environment perform identical validation so mocking would just allow users to create discrepancies between a real workflow and one running in the test environment.  

</details>


---

### #933: No problem indicators on failed workflow input deserialization during queries

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/933 |
| **State** | OPEN |
| **Author** | Drahflow (Jens-Wolfhard Schicke-Uffmann) |
| **Created** | 2022-10-13 12:23:01.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-13 13:02:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

When attempting to query a workflow (e.g. via temporal UI) and the workflow worker cannot successfully replay the workflow state due to deserialization errors of the input payload of the workflow, there should be some log message about said failure to deserialize.

## Actual Behavior

The desired query type is not visible in the UI. Stacktraces (which are also served by queries) are not available without explanation.

Please see #932 for an initial analysis of the cause and some pointers where it goes wrong.

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2022-10-13 12:34:15.000 UTC</summary>

> there should be some log message about said failure to deserialize.

From your PR, it seems your logs are in general error location and obviously we don't want to add logs for all errors now (some are expected/normal). Do you have a specific suggestion of where to add logging? What about workflow and signal argument deserialization errors? (even if no specific suggestion, no worries, we will investigate where to add)

</details>

<details>
<summary><strong>Drahflow</strong> commented on 2022-10-13 13:02:13.000 UTC</summary>

I tried to find a good place, but couldn't. thus the half-baked PR. The problem is from the dispatcher startup perspective, these errors are indistinguishable from "normal" termination with workflow error. And the history replay loop (where it is known that the code has just replayed the WorkflowStart) doesn't seem to have a good way to access the workflow environment where the dispatcher will update the error.

That might be the ideal logic: If the workflow went into an error state after replaying just the StartWorkflow event -> log.
(I think replay errors of later events are covered via the non-determinism check anyway.) No idea whatever about signal payload deserialization problems, we didn't have that yet :)

</details>


---

### #899: github.com/uber-go/tally/v4-v4.1.1: 2 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/899 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-08-30 17:58:26.000 UTC (3y 4m ago) |
| **Updated** | 2024-03-01 22:38:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>github.com/uber-go/tally/v4-v4.1.1</b></p></summary>

<p>A Go metrics interface with fast buffered metrics and third party reporters</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip">https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip</a></p>
<p>Path to dependency file: /contrib/tally/go.mod</p>
<p>Path to vulnerable library: /go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod,/go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod</p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-go/commit/b5942aefecb0379859bab42b44fa267ca8f3f8d8">b5942aefecb0379859bab42b44fa267ca8f3f8d8</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (github.com/uber-go/tally/v4-v4.1.1 version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2019-0210](https://www.mend.io/vulnerability-database/CVE-2019-0210) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | github.com/uber-go/tally/v4-v4.1.1 | Direct | 0.13.0 | &#9989; |
| [CVE-2019-0205](https://www.mend.io/vulnerability-database/CVE-2019-0205) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | github.com/uber-go/tally/v4-v4.1.1 | Direct | org.apache.thrift:libthrift:0.13.0 | &#9989; |
<p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2019-0210</summary>


###  Vulnerable Library - <b>github.com/uber-go/tally/v4-v4.1.1</b></p>

<p>A Go metrics interface with fast buffered metrics and third party reporters</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip">https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip</a></p>
<p>Path to dependency file: /contrib/tally/go.mod</p>
<p>Path to vulnerable library: /go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod,/go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod</p>
<p>

Dependency Hierarchy:
  - :x: **github.com/uber-go/tally/v4-v4.1.1** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-go/commit/b5942aefecb0379859bab42b44fa267ca8f3f8d8">b5942aefecb0379859bab42b44fa267ca8f3f8d8</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In Apache Thrift 0.9.3 to 0.12.0, a server implemented in Go using TJSONProtocol or TSimpleJSONProtocol may panic when feed with invalid input data.

<p>Publish Date: 2019-10-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0210>CVE-2019-0210</a></p>
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
<p>Origin: <a href="http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3C277A46CA87494176B1BBCF5D72624A2A%40HAGGIS%3E">http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3C277A46CA87494176B1BBCF5D72624A2A%40HAGGIS%3E</a></p>
<p>Release Date: 2019-10-29</p>
<p>Fix Resolution: 0.13.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2019-0205</summary>


###  Vulnerable Library - <b>github.com/uber-go/tally/v4-v4.1.1</b></p>

<p>A Go metrics interface with fast buffered metrics and third party reporters</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip">https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.1.zip</a></p>
<p>Path to dependency file: /contrib/tally/go.mod</p>
<p>Path to vulnerable library: /go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod,/go/pkg/mod/cache/download/github.com/uber-go/tally/v4/@v/v4.1.1.mod</p>
<p>

Dependency Hierarchy:
  - :x: **github.com/uber-go/tally/v4-v4.1.1** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-go/commit/b5942aefecb0379859bab42b44fa267ca8f3f8d8">b5942aefecb0379859bab42b44fa267ca8f3f8d8</a></p>
<p>Found in base branch: <b>master</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In Apache Thrift all versions up to and including 0.12.0, a server or client may run into an endless loop when feed with specific input data. Because the issue had already been partially fixed in version 0.11.0, depending on the installed version it affects only certain language bindings.

<p>Publish Date: 2019-10-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0205>CVE-2019-0205</a></p>
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
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0205">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0205</a></p>
<p>Release Date: 2019-10-29</p>
<p>Fix Resolution: org.apache.thrift:libthrift:0.13.0</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details>

***

<p>:rescue_worker_helmet:Automatic Remediation will be attempted for this issue.</p>

#### Comments (2)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-06-27 20:59:51.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-08-11 16:42:46.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>


---

### #754: gRPC Proxy Integration Test

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/754 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-03-14 17:52:08.000 UTC (3y 9m ago) |
| **Updated** | 2024-12-17 21:17:36.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

Need integration/end-to-end test for the gRPC proxy

**Describe the solution you'd like**

Create test (maybe in `test/integration_test.go`) that uses a proxy and a custom codec/converter for both the client and worker to run a workflow.

Noticed when reviewing https://github.com/temporalio/samples-go/pull/179


---

### #616: Investigate options around latency reporting and comparison with server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/616 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-11-02 20:39:32.000 UTC (4y 2m ago) |
| **Updated** | 2024-03-15 04:59:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement, external dependency |
| **Assignees** | cretz |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

We are seeing some differences in client request latency and server request latency. This is to investigate ways to track that and find out why.

**Describe the solution you'd like**

We may want to try two things:

* Seeing if we can have the server have a gRPC interceptor that puts a start-to-end duration in gRPC metadata and have a number/percent at which a difference between that and the client duration are large enough to at least trigger a warning
* See if there is a gRPC metric that is low-level enough to apply to HTTP2 messages specifically so that we can see if there is a difference between our interceptor-based ones (that surround serialization and other operations) and the low-level ones



#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2021-11-02 20:52:00.000 UTC</summary>

It appears that https://pkg.go.dev/google.golang.org/grpc/stats is available to provide lower-level stats, I will confirm how it is implemented in gRPC itself and then look to expose that info.

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-11-03 14:04:29.000 UTC</summary>

gRPC stats do happen after interceptors. I have made an example of using gRPC stats at https://github.com/temporalio/samples-go/compare/master...cretz:grpc-stats that require dial options exposed in https://github.com/temporalio/sdk-go/compare/master...cretz:grpc-options.

Will wait for feedback/updates on how to proceed.

</details>


---

### #497: [Test suite] Query after signal works in SDK, but not in Test Suite

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/497 |
| **State** | OPEN |
| **Author** | swyxio (swyx.io) |
| **Created** | 2021-07-26 17:04:40.000 UTC (4y 5m ago) |
| **Updated** | 2021-10-28 13:46:09.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | cretz |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

**Is your feature request related to a problem? Please describe.**

According to @mfateev, "The inability to query after the signal is purely Go testing framework limitation. In both real Go applications and Java (including unit testing) we provide read after write consistency in signal then query case. I think we want to file an issue to fix the Go testing framework."

**Describe the solution you'd like**

We shouldn't need to break up the signal and the query here: https://docs.temporal.io/blog/build-an-ecommerce-app-with-temporal-part-3-testing#signaling-workflows-in-tests in different delayed callbacks just for testing, because that isn't reflective of real life usage.


**Additional context**

In https://docs.temporal.io/blog/build-an-ecommerce-app-with-temporal-part-3-testing, we ran into this.



---

### #439: Include a way to perform assertions on the workflow signal channel in the testing environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/439 |
| **State** | OPEN |
| **Author** | ingyamilmolinar (ymolinar) |
| **Created** | 2021-05-11 19:22:29.000 UTC (4y 7m ago) |
| **Updated** | 2021-05-11 19:22:29.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

There's no way to observe the state of the workflow signal channel and perform assertions on it. Currently, I cannot know whether or not all received signals were consumed by the workflow.

An env.GetWorkflowSignalChannel() or something similar will be a great addition to the testing environment.

I'm unable to find a workaround for this situation without modifying workflow code.


---

### #358: [Bug] the json input is invalid in the workflow history and with a wrong encoding for accents

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/358 |
| **State** | OPEN |
| **Author** | lerminou (Nicolas DUBUT) |
| **Created** | 2020-11-17 09:58:49.000 UTC (5y 1m ago) |
| **Updated** | 2021-02-11 01:27:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
I want to copy the input to perform a check on the json
The input payload should be well structured

## Actual Behavior
When debugging a failed workflow through the temporal web, I wanted to check the input filled.
Actually, the input payload is invalid
![image](https://user-images.githubusercontent.com/3818051/99374927-67321000-28c3-11eb-9a07-413657e0b57e.png)
![image](https://user-images.githubusercontent.com/3818051/99375136-aa8c7e80-28c3-11eb-98b9-e95304d1ff00.png)


## Steps to Reproduce the Problem

  1. launch a workflow with an input json
  1. check the temporal web or call the /history API
  1.

## Specifications

  - Version: 1.3.0
  - Platform: docker-compose


#### Comments (2)

<details>
<summary><strong>lerminou</strong> commented on 2020-11-23 10:46:11.000 UTC</summary>

Temporal encoding doesn't support accents in the input too.
`firstName:Pr\\u00e9nom test` for `firstName:Prénom test`

</details>

<details>
<summary><strong>feedmeapples</strong> commented on 2021-02-11 01:27:10.000 UTC</summary>

@vitarb @Sushisource afaik this relates to all sdks?

</details>


---

### #266: Expose activity start and completion information to the workflow code

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/266 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-10-08 22:54:38.000 UTC (5y 2m ago) |
| **Updated** | 2020-10-08 22:54:38.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Same request for Java: https://github.com/temporalio/sdk-java/issues/228


---

### #101: Add ability to pass Channel as a parameter to Child workflow and activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/101 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-04-13 18:14:15.000 UTC (5y 8m ago) |
| **Updated** | 2020-04-13 18:14:15.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

This is an attempt from a user:
```
	resultChannel := workflow.NewChannel(ctx)
	if err := workflow.ExecuteActivity(ctx, enumerateDomainActivity, enumerateInput, resultChannel); 

	workflow.NewSelector(ctx).AddReceive(resultChannel, func(c workflow.Channel, more bool){
            ...
        }
	}).Select(ctx)
```
This code is currently not possible as Channel is not a value type. 

The proposal is to pass to the activity the information about the channelID and return to activity a native Go channel. And when an activity sends something to it make SignalWorkflow call to the service. 
Inside the workflow code this signal is pushed to the channel passed to the activity as a parameter.

The similar approach should work for child workflows as well.



---

### #35: Add ability to pass configuration to a workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/35 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-02-15 02:50:12.000 UTC (5y 10m ago) |
| **Updated** | 2020-11-23 23:39:13.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Currently there is no clean way to pass configuration information to a workflow. It shouldn't be passed as workflow argument as clients are not interested in implementation details. Passing it through a context propagator is not safe as it is not recorded and can break determinism.

The strawman proposal is to add `configuration` field to WorkerOptions and return them to the workflow through 
```
var config MyConfig
err := workflow.GetConfiguration(&config)
```
The GetConfiguration should either use `SideEffect`, `MutableSideEffect` or local activity to ensure that configuration changes never break determinism.



---

### #2098: Update ChildWorkflowOptions comment to indicate the default WorkflowIDReusePolicy and WorkflowIdConflictPolicy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2098 |
| **State** | OPEN |
| **Author** | codemonkeycxy (Xinyi Chen) |
| **Created** | 2025-11-05 19:33:19.000 UTC (1 months ago) |
| **Updated** | 2025-11-07 18:08:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Currently, it's not clear what the default WorkflowIDReusePolicy and WorkflowIdConflictPolicy are by reading the SDK code https://github.com/temporalio/sdk-go/blob/master/internal/workflow.go#L390-L392

**Describe the solution you'd like**
Add inline comments to make the default behavior clear

**Describe alternatives you've considered**
Document it in the Temporal developer guide https://docs.temporal.io/develop/go

**Additional context**
N/A

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-11-07 18:08:12.000 UTC</summary>

@codemonkeycxy Would you be willing to just make a PR for this?

</details>


---

### #2039: Joining errors causes TestWorkflowEnvironment to hide panics and pass test

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2039 |
| **State** | OPEN |
| **Author** | ioudas |
| **Created** | 2025-08-28 12:50:10.000 UTC (4 months ago) |
| **Updated** | 2025-08-28 14:19:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
When workflow is executed in `TestWorkflowEnvironment ` and :
- tries to execute an activity that wasn't registered
- returns the resulting error wrapped inside either `joinError` or `wrapError`
- the test fails with `unable to find activityType=...`

## Actual Behavior
Test prints the expected error, but passes.

## Steps to Reproduce the Problem
1. A workflow that executes an activity that is not registered at all and returns the resulting error using either `errors.Join` or `fmt.Errorf("%w: %w", err1, err2)`
```
errExecute := workflow.ExecuteActivity(ctx, ThisActivityIsNotRegistered)).Get(ctx, nil)
if errExecute != nil {
  return errors.Join(errExecute , doSomethingWithErr(errExecute))
}
```
2. Execute the above workflow in a unit test, using `TestWorkflowEnvironment`

## Specifications

  - Version: 
  ```
go.temporal.io/api v1.52.0
go.temporal.io/sdk v1.35.0
```
  - Platform: Ubuntu 20.04


#### Comments (1)

<details>
<summary><strong>ioudas</strong> commented on 2025-08-28 14:19:50.000 UTC</summary>

Looks like this was user error. The correct way to return a joined error is `temporal.NewApplicationErrorWithCause`. Otherwise it breaks `errors.As` / `errors.Is` matching.

</details>


---

### #1705: User-defined RequestId for SignalWorkflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1705 |
| **State** | OPEN |
| **Author** | ndtretyak (Nikolay Tretyak) |
| **Created** | 2024-11-07 14:54:22.000 UTC (1y 1m ago) |
| **Updated** | 2024-11-07 19:17:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I want to use server-side deduplication for signals. However, `RequestId` is always set to `uuid.New`
https://github.com/temporalio/sdk-go/blob/9d74a905fc3602dfa9dddf114087c43a1b64e6b8/internal/internal_workflow_client.go#L1829


**Describe the solution you'd like**
 An option to override the `RequestId` in each method, allowing users to specify their own identifier instead of a generated UUID. 



#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-11-07 19:17:35.000 UTC</summary>

Long term server side deduplication of signals by `RequestId` is not a stable feature users should rely on https://github.com/temporalio/temporal/issues/4021 so it is intentionally not exposed in any SDK. If you want deduplication of signals the best approach is to put your own ID in the signal input and deduplicate in the workflow

</details>


---

### #1624: Signal sent to Selector can be lost if Default path blocks 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1624 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-09-06 04:34:11.000 UTC (1y 3m ago) |
| **Updated** | 2025-11-12 16:50:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Selector can block in Default path without loosing signals

## Actual Behavior

Selector that block in the Default path risk loosing signals

When a signal is sent to the channel while the AddDefault method (long running) is executing, the signal is lost without being received. This was because if AddDefault is specified, the readyFunc is never executed. By storing the value in channel's recValue beforehand, we are making it available for any future receives on that channel without dropping the signal.

## Steps to Reproduce the Problem

  See: https://github.com/altafDevRev/temporal-samples/pull/1


#### Comments (1)

<details>
<summary><strong>yuandrew</strong> commented on 2025-11-12 16:50:29.000 UTC</summary>

SDK flag was reverted in #2070, so this needs to be re-addressed.

When re-enabling the flag, must address the issue described in https://github.com/temporalio/sdk-go/issues/2066

</details>


---

### #1574: Batched heartbeat got canceled due to caller context cancellation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1574 |
| **State** | OPEN |
| **Author** | codemonkeycxy (Xinyi Chen) |
| **Created** | 2024-07-31 19:17:48.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-01 04:44:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Say I have the following activity code
```
func (a *Activities) MyActivity(ctx) (out, error)(
  g, gctx := errgroup.WithContext(ctx)
  g.SetLimit(4)
  for _, batch := range batches {
    batch := batch
    g.Go(func() error {
      activity.RecordHeartbeat(gctx)
      // Goroutine logic
    })
  }
  if err := g.Wait(); err != nil {
    return nil, err
  }

  for _, item := range array {
    activity.RecordHeartbeat(ctx)
    // Additional logic
  }
}
```
I expect heartbeat to get sent out to the server and my activity to NOT time out

## Actual Behavior
Activity timed out with `activity Heartbeat timeout`

This is because `g.Wait()` cancels `gctx` but `gctx` is still referenced in SDK `Heartbeat` function's goroutine https://github.com/temporalio/sdk-go/blob/master/internal/internal_task_handlers.go#L2031. Due to the batch heartbeat logic, `gctx` was used after `g.Wait()` had finished in my code and caused a `context canceled` error when making the call to the server

I could change `activity.RecordHeartbeat(gctx)` to `activity.RecordHeartbeat(ctx)` but wonder if SDK can avoid this pitfall by using context.Background()


## Steps to Reproduce the Problem

  1.
  1.
  1.

## Specifications

  - Version: go.temporal.io/sdk v1.27.0
  - Platform: Linux


#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-08-01 04:44:53.000 UTC</summary>

Talked offline discussed we should:
* Clarify the documentation around how `RecordHeartbeat` will behave if the calling context is cancelled
* If `RecordHeartbeat` is called with multiple contexts we should use the last non cancelled context.

</details>


---

### #1471: Support New Versioning in WorkflowInfo.GetCurrentBuildID()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1471 |
| **State** | OPEN |
| **Author** | ShahabT (Shahab Tajik) |
| **Created** | 2024-05-14 05:06:29.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-29 01:17:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

In new versioning, current build ID for tasks being replayed should be retrieved from the WFTStarted event rather than WFTCompleted event. The stamp in `WorkflowTaskCompletedEventAttributes` is deprecated and will be removed after old versioning clean up.

Note that if the started event does not have a (non-empty) Build ID, then the one in completed task should be still used to keep the support for old versioning for now.


#### Comments (1)

<details>
<summary><strong>antlai-temporal</strong> commented on 2024-05-29 01:17:13.000 UTC</summary>

Currently we are duplicating the Build ID and adding it to both WFTStarted and WFTCompleted for backwards compatibility, is that correct?

</details>


---

### #1445: OTel metric handler improvements

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1445 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-17 15:05:59.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-17 15:24:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

* Opt-in option to have timers/histograms in integer milliseconds instead of float seconds
* Opt-in option to have counters suffixed with `_total` and histograms end with `_milliseconds` or `_seconds`
* Do not report a gauge value if no value is ever set for it

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2024-04-17 15:24:51.000 UTC</summary>

Renaming should go through a [view](https://pkg.go.dev/go.opentelemetry.io/otel/sdk/metric#View) we should provide a sample showing how. I am not sure if changing the metric type can be done through a view, if not then agree we should add. Agree with the last point.

Reactions: 👍 1

</details>


---

### #1395: Make TestWorkflowEnvironment return errors with stack traces

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1395 |
| **State** | OPEN |
| **Author** | recht (Joakim Recht) |
| **Created** | 2024-02-22 20:39:03.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-26 15:30:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

If a test fails, for example because a context is used wrongly, there's almost no information available to debug, and you have to go through error unwrapping and checking in order to get to a usable stacktrace.

The usual solution is to implement a `Format` function on errors that prints more information when formatted using `%+v`. Functions like `require.NoError` also use this, so if there is a verbose version then that will be printed.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-02-26 15:30:08.000 UTC</summary>

> If a test fails, for example because a context is used wrongly, there's almost no information available to debug

Are you setting logging in this test environment? Go errors are often short on this kind of information when just printed directly and encourage logging or explicit error extraction to fill in the gaps here. If we are not logging information that we should, we can make sure we do.

</details>


---

### #1334: Allow opting out of tracer span creation on schedule create

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1334 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:11:23.000 UTC (1y 12m ago) |
| **Updated** | 2025-12-05 21:22:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Today the tracing interceptor always creates a span and attaches to workflow action on schedule create. Allow user to opt out of this in tracing interceptor options.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-12-05 21:22:21.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>


---

### #1300: Better Task Failures when passing incorrect options to Execute[Local]Activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1300 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2023-11-23 00:32:32.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-27 14:57:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
If you pass `ActivityOptions` to `ExecuteLocalActivity` or make the inverse mistake, right now that'll surface as a task failure generated by server along the lines of you missing one of the required timeouts. This is technically true, but can be a source of confusion to a user looking at their code and saying "I _am_ setting a timeout" without realizing that the real problem was they specified the wrong kind of options.

**Describe the solution you'd like**
We should explicitly fail the task from the SDK side with an error message making it clear that the wrong type of options were applied to the context for the call being made.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-11-27 14:57:36.000 UTC</summary>

The problem here is that you're not "passing" things to these calls, they are just set on the context somewhere before. That one set of options may be present does not mean there was an options mixup. But having said that, yes, if we don't give a clear error message that (local) activity options are not set on the context, we should (and clearly state _which_ ones must be set).

</details>


---

### #1227: Worker versioning + workflow session

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1227 |
| **State** | OPEN |
| **Author** | robindarby (Robin Darby) |
| **Created** | 2023-09-06 12:35:30.000 UTC (2y 3m ago) |
| **Updated** | 2025-02-04 18:25:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Calling workflow.CreateSessio, while using a versioned worker, creates a new session context for that worker.

## Actual Behavior
The new session has no worker; "internalSessionCreationActivity" will timeout: 
`activity error (type: internalSessionCreationActivity, scheduledEventID: 6, startedEventID: 0, identity: ): activity ScheduleToStart timeout (type: ScheduleToStart) ;`

Could it be because this internal activity has the following attribute: Use Compatible Version false (as seen in the UI)?

## Steps to Reproduce the Problem
1. set a worker version via the SDK as follows:

```
func setTemporalTaskQueueDefaultVersion(temporalClient client.Client, taskQueue string, buildId string) error {
	if err := temporalClient.UpdateWorkerBuildIdCompatibility(context.Background(), &client.UpdateWorkerBuildIdCompatibilityOptions{
		TaskQueue: taskQueue,
		Operation: &client.BuildIDOpAddNewIDInNewDefaultSet{
			BuildID: buildId,
		},
	}); err != nil {
		return err
	}
	return nil
}
```

1. Then, use that version in the worker:

```
	w := worker.New(temporalClient, workflows.QueueName, worker.Options{
		EnableSessionWorker:     true,
		BuildID:                 *buildId,
		UseBuildIDForVersioning: useBuildIDForVersioning,
	})
```

1. Now, in a workflow, when you call:

```
	activityOptions := workflow.ActivityOptions{
		StartToCloseTimeout: 60 * time.Minute,
		RetryPolicy: &temporal.RetryPolicy{
			MaximumAttempts: 2,
		},
		TaskQueue:        QueueName,
	}
	ctx = workflow.WithActivityOptions(ctx, activityOptions)

	so := &workflow.SessionOptions{
		CreationTimeout:  time.Minute,
		ExecutionTimeout: time.Hour,
	}
	ctx, err := workflow.CreateSession(ctx, so)
	if err != nil {
		return nil, err
	}
	defer workflow.CompleteSession(ctx)
```

## Specifications
* Version: v1.24.0
* Platform: Linux



#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2023-09-09 23:00:37.000 UTC</summary>

Unfortunately worker versioning and sessions are not compatible at this time because the task queue used for `internalSessionCreationActivity` ,  the activity responsible for creating the session, does not have the same version info as the original task queue and the server has no way to link two task queues together.

</details>


---

### #1104: Context timeout is halved on client.ExecuteWorkflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1104 |
| **State** | OPEN |
| **Author** | taonic (Tao Guo) |
| **Created** | 2023-05-17 07:36:11.000 UTC (2y 7m ago) |
| **Updated** | 2023-05-17 12:00:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

When a context with timeout (e.g. 4s as duration) is passed into `client.ExecuteWorkflow`, and it gets a client-side context deadline exceeded error, the method should timeout and return after the designated duration.

## Actual Behavior

Currently, the `client.ExecuteWorkflow` times out after half of the designated duration, 2s instead of 4s as an example.

Code to reproduce:

```go
	timeout := 4 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()
​
	workflowOptions := client.StartWorkflowOptions{
		ID:        workflowID,
		TaskQueue: "cancel-activity",
	}
​
	then := time.Now()
	fmt.Println("ctx before execute: ", ctx)
​
	we, err := c.ExecuteWorkflow(ctx, workflowOptions, cancellation.YourWorkflow)
	if err != nil {
		fmt.Println("ctx after execute: ", ctx)
		fmt.Printf("Time elapsed: %v", time.Since(then))
		log.Fatalf("Unable to execute workflow %+v\n", err)
	}
```

Output:

```
ctx before execute:  context.Background.WithDeadline(2023-05-16 22:12:16.653157 +1000 AEST m=+10.639604834 [3.999887833s])
ctx after execute:  context.Background.WithDeadline(2023-05-16 22:12:16.653157 +1000 AEST m=+10.639604834 [1.998066541s])
Time elapsed: 2.001958166s
2023/05/16 22:12:14 Unable to execute workflow context deadline exceeded
exit status 1
```

We suspect the behaviour was originally introduced as part of the dynamic retry policy for Cadence server: https://github.com/temporalio/sdk-go/commit/646d94de74a547ee7fa1c649142a9839a52d0a6e#diff-e0628cecb8a238a2d362a0ce845f7f8a8ff26d38942b471d09d7e079b5af55e7R110


## Specifications

  - Version: v1.22.2

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-05-17 12:00:48.000 UTC</summary>

To add clarification, we halve the user-provided timeout so we can retry within it, but if server is down we don't retry we get user context deadline exceeded context error (not the server-side gRPC deadline exceeded error code) so it is effectively half. Making RPC timeout half the context timeout is fine, we just need to make sure to only halve the RPC timeout not the context timeout.

</details>


---

### #1099: TestWorkflowEnvironment timeouts run defer statements

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1099 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-05-04 16:23:56.000 UTC (2y 8m ago) |
| **Updated** | 2023-05-04 19:28:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Workflows that timeout from `TestWorkflowEnvironment.SetWorkflowRunTimeout` run `deferred` statements

## Actual Behavior
Workflows that timeout from the real server do not run `defer` statements




#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-05-04 19:25:52.000 UTC</summary>

Hrmm, I don't think this is possible in Go without leaking goroutines/memory. Panic and runtime.Goexit both call `defer`. You can't exit a function without calling defer in any way that I can think of. I'd be curious to know how we do cache eviction and if we run defer then and just discard commands. Seems likely. But it may be a big effort to discard everything instead of running mocks here, unsure.

</details>


---

### #1045: Memo does not go through user provided data coverter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1045 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-02-17 21:33:39.000 UTC (2y 10m ago) |
| **Updated** | 2025-10-29 21:44:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Go to use the user provided data converter like other SDKs to encode memos when creating workflow and schedules.

## Actual Behavior
https://github.com/temporalio/sdk-go/blob/0b0234f751a218e3d093e7261922dc6f9748387e/internal/internal_workflow_client.go#L1310-L1311

Go uses the default data converter. 

Need to decide how we will fix this as changing is not backwards compatible and could break running workflows

#### Comments (1)

<details>
<summary><strong>yuandrew</strong> commented on 2025-10-29 21:44:43.000 UTC</summary>

Reminder, already mentioned in the issue itself, but schedules also need to be updated

https://github.com/temporalio/sdk-go/blob/5cd20cf09a022d3cda9edef9376054df46b20021/internal/internal_schedule_client.go#L882C4-L882C70 

</details>


---

### #996: Opt-in to having stack trace query use custom data converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/996 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-01-05 13:16:34.000 UTC (2y 12m ago) |
| **Updated** | 2023-01-05 14:02:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Make a new worker option like `StackTraceQueryUsesConverter bool`. If false, the `__stack_trace` query response should not be converted/encoded/etc, but if `true` it should be. We accept that this changes today's default behavior so we need to make it loud and clear on release notes.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-01-05 14:02:55.000 UTC</summary>

We need to discuss how this affects the proxy now in api-go. Do we need to have that stop encoding this specific query?

</details>


---

### #975: Missing mock invocation causes PanicError in a test but the test succeeds with exit code 0.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/975 |
| **State** | OPEN |
| **Author** | EllieSager-Forte (Ellie A Sager) |
| **Created** | 2022-12-06 00:36:01.000 UTC (3 years ago) |
| **Updated** | 2022-12-06 13:18:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Invocation count assertions provided by the mocking library, such as Once() or Times(n) should always fail a test if the assertion does not hold. The same should happen if an unexpected invocation occurs during a test.

## Actual Behavior
This workflow has only one activity that is non-retry-able. Under test, it throws a PanicError in the logs when the code is executed and mock invocation is missing. Yet the test always succeeds with exit code 0.

```
err := workflow.ExecuteActivity(
  workflow.WithActivityOptions(ctx, workflow.ActivityOptions 
  {RetryPolicy: &temporal.RetryPolicy{MaximumAttempts: 1}}), 
  MyActivity).Get(ctx, nil) // what if we forget to mock "MyActivity" method??
  	if err != nil { log.Error("error in workflow, don't interrupt workflow!", "some message", err.Error()) }
```

A test for the workflow should mock the activity to be invoked at least once, but a developer has forgotten to add the mock. Here is a line you might expect in a test, that is missing:`env.OnActivity("MyActivity", any).Return(nil, errors.New("test failure")).Once()`
This activity is configured with NO retries and even though logs correctly print a panic statement,  no error is returned and the test succeeds. Since workflow is set up to continue after the error, we end up with a workflow that succeeds and has no errors. So, [the method outlined here](https://github.com/temporalio/sdk-go/issues/642#issuecomment-1204102286): "check no error happened inside the workflow by checking the workflow error" - `s.assertions.NoError(s.env.GetWorkflowError())` - won't work.

One might argue that since we don't care if the activity fails inside our workflow, the workflow will always succeed and, therefore, the tests with the activity failing should be always marked as "PASSED". However, there is a difference between an activity failing in prod for a legitimate reason and activity failing due to a forgotten mock invocation. We definitely want to know about missing or incorrect mocks in our tests! Since your guys's code already detects discrepancies in mock calls, why don't we just mark the test as FAILED in this case?

OR, alternatively, you can expose the `env.mock` field as suggested here: https://github.com/temporalio/sdk-go/issues/642#issuecomment-1203779650 or provide a setter for it.

This issue is being opened based on this conversation: https://temporalio.slack.com/archives/CTDTU3J4T/p1669935765304739 (long) and
https://temporalio.slack.com/archives/CTDTU3J4T/p1669935765304739 (short)

## Steps to Reproduce the Problem
See above

## Specifications

  - Version: temporal sdk@v1.16.0/testify@v1.8.0
  - Platform: n/a


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-12-06 13:14:46.000 UTC</summary>

> One might argue that since we don't care if the activity fails inside our workflow, the workflow will always succeed and, therefore, the tests with the activity failing should be always marked as "PASSED". However, there is a difference between an activity failing in prod for a legitimate reason and activity failing due to a forgotten mock invocation. We definitely want to know about missing or incorrect mocks in our tests! Since your guys's code already detects discrepancies in mock calls, why don't we just mark the test as FAILED in this case?

Do you definitely want to know about missing or incorrect activities in production? The test is acting like production. If your workflow is built to not care about missing activities, it won't care about missing activities regardless of environment (or any other error).

If someone wants to test a missing activity behavior they can. It is important that our test environment fail similar to how production fails when you are missing an activity.

Your workflow is written to run regardless of that activity, so one could argue there's no benefit to mocking it since your workflow doesn't care if it even ran. You'll never know whether you remember to even register that activity in production.

</details>


---

### #968: Remove deprecated metrics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/968 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2022-11-29 01:13:37.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-29 14:46:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Remove deprecated metrics `local_activity_canceled` and `local_activity_failed` at some point in the future. They have been replaced by `local_activity_execution_failed ` and  `local_activity_execution_canceled`


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-11-29 14:46:23.000 UTC</summary>

I wouldn't expect this to ever happen to be honest. The cost of duplicate metrics is much much lower than the cost of removing them. This would be a silent removal, i.e. that there would be no compiler error to fix.

These types of removals are mostly unreasonable unless a reason beyond normal deprecation principles is provided. We haven't broken people's metric output in years and we should not for this case.

</details>


---

### #967: testsuite.TestWorkflowEnvironment does not complete workflows synchronously when activities create new environments to start nested workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/967 |
| **State** | OPEN |
| **Author** | subhan-nadeem (Subhan Nadeem) |
| **Created** | 2022-11-28 16:56:25.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-29 18:20:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug, external dependency |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

When executing a workflow with `testsuite.TestWorkflowEnvironment` that has two activities, which each start an additional workflow on a newly instantiated `testsuite.TestWorkflowEnvironment`, I expect the nested internal workflows to complete synchronously before the outer workflow completes synchronously as well.

## Actual Behavior

One of the nested test workflows that is started by an activity on a new `testsuite.TestWorkflowEnvironment` exits its `ExecuteWorkflow` call before `testEnvironment.WorkflowIsCompleted()` returns true. If I write `for !testEnvironment.WorkflowIsCompleted() { }` to block the main thread until the workflow completes, eventually `testEnvironment.WorkflowIsCompleted()` evaluates to true, indicating that the workflow is operating in a separate goroutine after `ExecuteWorkflow` returns.

## Steps to Reproduce the Problem

The below sample workflow is an approximation of what my code does: a workflow that fires off two activities; each activity starts another workflow by instantiating a new `testsuite.TestWorkflowEnvironment` and executed another workflow. 

Unfortunately, the sample workflow does not seem to reproduce the buggy behaviour and I'm unable to paste my full source code. [Here](https://temporalio.slack.com/archives/CTRCR8RBP/p1668449589481079) is the Slack thread that initially raised the issue

```
func MyWorkflow(
	ctx workflow.Context,
	stop bool,
) error {
	if stop {
		return nil
	}

	var futures []workflow.Future
	for i := 0; i < 2; i++ {
		future := workflow.ExecuteActivity(
			workflow.WithActivityOptions(ctx, workflow.ActivityOptions{StartToCloseTimeout: 1 * time.Minute}),
			ATestActivity,
		)
		futures = append(futures, future)
	}
	for _, f := range futures {
		if err := f.Get(ctx, nil); err != nil {
			return err
		}
	}

	return nil
}


func ATestActivity(ctx context.Context) error {
	t := testsuite.WorkflowTestSuite{}
	env := t.NewTestWorkflowEnvironment()
	env.RegisterActivity(s.SleepActivity)
	env.ExecuteWorkflow(MyWorkflow, true)

	randomID := uuid.NewUUID().String()
	for !env.IsWorkflowCompleted() {
		fmt.Println("WORKFLOW NOT COMPLETED " + randomID)
	}

	fmt.Println("WORKFLOW COMPLETED " + randomID)

	return nil
}

func (s *TestSuite) TestMyWorkflow() {
	t := testsuite.WorkflowTestSuite{}
	env := t.NewTestWorkflowEnvironment()
	env.RegisterActivity(ATestActivity)

	env.ExecuteWorkflow(MyWorkflow, false)
	s.NoError(env.GetWorkflowError())
}
```

## Specifications

  - Version:
  - Platform:


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-11-28 17:20:37.000 UTC</summary>

> Unfortunately, the sample workflow does not seem to reproduce the buggy behaviour and I'm unable to paste my full source code.

Is there any code to reproduce? Can you continually reduce your source that you cannot paste until it is something you can paste while also replicating the error?

> [Here](https://temporalio.slack.com/archives/CTRCR8RBP/p1668449589481079) is the Slack thread that initially raised the issue

Note, our public Slack threads are regularly culled so this link may not be valid in the future (but no need, I think you have the gist here).

</details>


---

### #935: Testing: Be Able to Unit Test a Workflow with a Populated `ContinuedExecutionRunID`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/935 |
| **State** | OPEN |
| **Author** | Albert-Coding (Albert) |
| **Created** | 2022-10-14 00:10:07.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-14 12:11:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
I would like to test my workflow when it has a populated `workflow.GetInfo(ctx).ContinuedExecutionRunID`.  Currently, one cannot do that so not all workflow paths may be unit tested.

**Describe the solution you'd like**
Ideally, I would like a way to set a workflow's context during its unit test execution.

**Describe alternatives you've considered**
One could do something elaborate for testing purposes.  Maybe have a variable or a dependency injection so the unit test can pretend to see a value for `ContinuedExecutionRunID`.

**Additional context**
https://community.temporal.io/t/testing-continueasnew/6211/6

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-10-14 12:11:26.000 UTC</summary>

Hrmm, there are several other things on workflow info one might want to set as well. _Technically_ the workflow info is mutable in the test suite so we could expose the mutable pointer via `TestWorkflowEnvironment.WorkflowInfo()` or similar. I think this will work best.

</details>


---

### #922: TestWorkflowEnvironment.SignalExternalWorkflow data race on signal data

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/922 |
| **State** | OPEN |
| **Author** | Drahflow (Jens-Wolfhard Schicke-Uffmann) |
| **Created** | 2022-09-28 14:02:43.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-28 14:11:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Testing a workflow which signals external workflows should work, even if the signal data is modified later in the workflow.

## Actual Behavior

It does not (reliably), specifically data-races such as this can be observed (occasionally):

```
==================
WARNING: DATA RACE
Read at 0x00c000515190 by goroutine 113:
  reflect.typedmemmove()
      /usr/lib/go-1.19/src/runtime/mbarrier.go:178 +0x0
[...]
  github.com/stretchr/testify/mock.Arguments.Diff()
      /home/drahflow/go/pkg/mod/github.com/stretchr/testify@v1.8.0/mock/mock.go:883 +0x18e
  github.com/stretchr/testify/mock.(*Mock).findExpectedCall()
      /home/drahflow/go/pkg/mod/github.com/stretchr/testify@v1.8.0/mock/mock.go:355 +0x146
  github.com/stretchr/testify/mock.(*Mock).MethodCalled()
      /home/drahflow/go/pkg/mod/github.com/stretchr/testify@v1.8.0/mock/mock.go:460 +0xb9
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).SignalExternalWorkflow.func2()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:2118 +0x329

Previous write at 0x00c000515190 by goroutine 97:
  github.com/payrails/demo/pkg/merchant/workflows/consumer_checkout.cancelPaymentMethods.func1.2()
      /work/pkg/merchant/workflows/consumer_checkout/main.go:829 +0xfc
[...]

Goroutine 113 (running) created at:
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).SignalExternalWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:2115 +0x396
  go.temporal.io/sdk/internal.signalExternalWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/workflow.go:1077 +0x46e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).SignalExternalWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/workflow.go:1040 +0xc4
  go.temporal.io/sdk/internal.SignalExternalWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/workflow.go:1035 +0x20d
  go.temporal.io/sdk/workflow.SignalExternalWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/workflow/workflow.go:221 +0x171
  github.com/payrails/demo/pkg/merchant/workflows/consumer_checkout.(*Channel[...]).Reply()
      /work/pkg/merchant/workflows/consumer_checkout/channels.go:91 +0x66
  github.com/payrails/demo/pkg/merchant/workflows/consumer_checkout.waitForFinalize.func1()
      /work/pkg/merchant/workflows/consumer_checkout/main.go:725 +0x271
  github.com/payrails/demo/pkg/merchant/workflows/consumer_checkout.(*Channel[...]).OnSignal.func1()
      /work/pkg/merchant/workflows/consumer_checkout/channels.go:57 +0x11a
  go.temporal.io/sdk/internal.(*selectorImpl).Select.func2.1()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:1158 +0xa1
  go.temporal.io/sdk/internal.(*selectorImpl).Select()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:1253 +0x120d
[...]

Goroutine 97 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:981 +0x65a
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:299 +0x86
  go.temporal.io/sdk/internal.newDispatcher()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:598 +0x282
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go:488 +0x1c4
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflowInternal.func1()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:486 +0xc2
  go.temporal.io/sdk/internal.(*testCallbackHandle).processCallback()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:732 +0xfb
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).startMainLoop()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:672 +0x2a4
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflowInternal()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:508 +0x4f1
  go.temporal.io/sdk/internal.(*testWorkflowEnvironmentImpl).executeWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow_testsuite.go:452 +0x1cc
  go.temporal.io/sdk/internal.(*TestWorkflowEnvironment).ExecuteWorkflow()
      /home/drahflow/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/workflow_testsuite.go:516 +0xf84
[...]
==================
```
[Edited for brevity and NDAs].

The code for the conflicting write at
`/work/pkg/merchant/workflows/consumer_checkout/main.go:829 +0xfc`
is a standard member-access to a struct which was sent as part of the signal payload. This works on real execution, as the signal data is serialized and sent before the workflow processing continues (as far as I can see), but in `TestWorkflowEnvironment.SignalExternalWorkflow`, a new go-routine is spawned, which tries to look up the correct mock of the signal receiver _concurrently_ with the rest of the workflow proceeding (and modifying the data of the signal currently being processed): https://github.com/temporalio/sdk-go/blob/754b253bb196d69c64317af1ed28fa85a74d584d/internal/internal_workflow_testsuite.go#L2068

## Steps to Reproduce the Problem

  1. Make workflow which sends signal to other workflow and immediately proceeds to modify member fields of the signal payload
  1. Build a workflow test and mock the signal receiver
  1. Run the workflow test very often with `go test -race`

## Specifications

  - Version: go.temporal.io/sdk v1.15.0
  - Platform: linux, x86_64, go version go1.19.1 linux/amd64

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-09-28 14:11:34.000 UTC</summary>

Thanks! This is similar to #908. Some of the test environment was not developed in a concurrency safe way. We will fix.

</details>


---

### #912: Change default Prometheus santitize options to not change values

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/912 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-09-15 18:42:12.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-15 18:45:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

The options at https://github.com/temporalio/sdk-go/blob/c1ce1d25238b7bb15095f0767497fa93215c2589/contrib/tally/prometheus.go#L31-L38 which are based on the sample at https://github.com/temporalio/samples-go/blob/65d2450b15f920d4f28ead7ece62e15be0ddb810/metrics/worker/main.go#L65-L87 are altering label values which is not good

**Describe the solution you'd like**

Stop altering label values

#### Comments (1)

<details>
<summary><strong>wyattanderson</strong> commented on 2022-09-15 18:45:24.000 UTC</summary>

Thanks! This surfaced for us because we're naming workflows and activities according to fully qualified Protobuf names, so we have things like `company.domain.Workflow`, which was turned into `company_domain_Workflow` when emitted as a metric label value.

I think it might be sufficient to change the `Characters` option to something like `tally.UnderscoreDashDotCharacters` (which is what I've done locally for now), or maybe even additionally including `/`, which I could see people using in a workflow or activity name (assuming that's valid).

</details>


---

### #716: If a workflow is terminated while processing, it can leak coroutines

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/716 |
| **State** | OPEN |
| **Author** | aouji |
| **Created** | 2022-02-04 02:02:38.000 UTC (3y 11m ago) |
| **Updated** | 2022-04-21 13:32:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Terminating a workflow should not leave behind coroutines

## Actual Behavior
If a workflow is terminated while processing, it can leak coroutines.

We have a fairly complex workflow following the dsl pattern in https://github.com/temporalio/samples-go/blob/main/dsl/workflow.go . It seems like if a dsl workflow is terminated before all activities are processed, any pending coroutines handling them will be stuck forever. We can see this using pprof:

```
-----------+-------------------------------------------------------
      1231   runtime.gopark
             runtime.chanrecv
             runtime.chanrecv1
             go.temporal.io/sdk/internal.(*coroutineState).initialYield
             go.temporal.io/sdk/internal.(*coroutineState).yield (inline)
             go.temporal.io/sdk/internal.(*channelImpl).Receive
             go.temporal.io/sdk/internal.(*decodeFutureImpl).Get
             pkg/workflows.ActivityInvocation.execute
             pkg/workflows.(*Statement).execute
             pkg/workflows.executeAsync.func1
             go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1
-----------+-------------------------------------------------------
        17   runtime.gopark
             runtime.chanrecv
             runtime.chanrecv1
             go.temporal.io/sdk/internal.(*coroutineState).initialYield
             go.temporal.io/sdk/internal.(*coroutineState).yield (inline)
             go.temporal.io/sdk/internal.(*selectorImpl).Select
             pkg/workflows.Parallel.execute
             pkg/workflows.(*Statement).execute
             pkg/workflows.Sequence.execute
             pkg/workflows.(*Statement).execute
             pkg/workflows.DSLWorkflow
             reflect.Value.call
             reflect.Value.Call
             go.temporal.io/sdk/internal.executeFunction
             go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow
             go.temporal.io/sdk/internal.(*workflowExecutor).Execute
             go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1
             go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1
```

This is specially affecting us as due to another issue our workflows can get stuck during cancellation ( https://community.temporal.io/t/invalid-history-builder-state-for-action-add-activitytask-cancel-requested-event/3459 ) and we have worked around that by trying to detect and automatically terminate such workflows... 

It will be great if the sdk can ensure all channels are closed and nothing is leaked when a workflow is terminated

## Steps to Reproduce the Problem

  1. Try running the dsl workflow at https://github.com/temporalio/samples-go/blob/main/dsl/workflow.go with a large number of parallel activities 
  1. Terminate the workflow before activities finish
  1. check number of goroutines in the worker process that handled the workflow

## Specifications

  - Version:  1.12.0
  - Platform: MacOS


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-04-21 13:30:58.000 UTC</summary>

This may be fixed by #779, but we will have to test after that is merged.

</details>


---

### #698: Allow "unable to find workflow type" error to be configured to hard-fail the workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/698 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-01-15 02:13:13.000 UTC (3y 11m ago) |
| **Updated** | 2022-01-15 02:49:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Currently we allow this error to support retry so a worker can be deployed with the proper workflow for it to work.

**Describe the solution you'd like**

Need to investigate options about making it non-retryable.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2022-01-15 02:49:53.000 UTC</summary>

The best approach for this may be to go ahead and support #543 so a catch-all workflow implementation can be written

</details>


---

### #194: Support seamless cleanup during session cancellation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/194 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-07-15 18:09:54.000 UTC (5y 5m ago) |
| **Updated** | 2020-10-15 10:54:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
https://community.temporal.io/t/doing-cleanup-when-using-sessions/193

**Describe the solution you'd like**
Cancellation of a workflow should allow executing some cleanup logic in a session without ugly workarounds.




#### Comments (1)

<details>
<summary><strong>linvon</strong> commented on 2020-10-15 10:54:17.000 UTC</summary>

Cleanup in session cannot finished correctly in cancellation of workflow, maybe we can set an option like "keep session info" when use 'NewDisconnectedContext', or export queue of sessionInfo to set queue manually

</details>


---

### #50: Make TestWorkflowEnvironment support test multiple workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/50 |
| **State** | OPEN |
| **Author** | samarabbas (Samar Abbas) |
| **Created** | 2020-03-03 21:56:23.000 UTC (5y 10m ago) |
| **Updated** | 2020-03-04 18:03:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently, the TestWorkflowEnvironment can run multiple workflows but only for parent-child relationships. It would be good to be able to use TestWorkflowEnvironment to test 2 workflows that are not parent-child.

#### Comments (1)

<details>
<summary><strong>samarabbas</strong> commented on 2020-03-03 21:56:37.000 UTC</summary>

Ported from: Uber Cadence GO: Issue 616

</details>


---

### #2124: Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2124 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:25.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Allow executing activities without a workflow. The clients must support the new (upcoming) server APIs for starting, managing and getting results of activities. The workers must support running activities outside of workflow context.

**Additional context**

Server API PR (WIP): https://github.com/temporalio/api/pull/640


---

### #2123: [api-go] Proxy: allow payload visitor to run in parallel

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2123 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-12-02 16:31:30.000 UTC (1 months ago) |
| **Updated** | 2025-12-16 18:00:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
When visiting payloads in the proxy my visitor is slow and would benefit from being run in parellel

**Describe the solution you'd like**
Add an option to the proxy visitor to allow paralleziation. Users should be able to control the max concurrency factor. The default should still be no concurrency.




---

### #2094: Worker Heartbeating

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2094 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-28 01:50:19.000 UTC (2 months ago) |
| **Updated** | 2025-10-28 01:50:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**
Implement worker heartbeating, which is sent via a new background nexus worker.

Basically need to design a Go version of https://github.com/temporalio/sdk-core/pull/953 and https://github.com/temporalio/sdk-core/pull/1038

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



---

### #2090: Starting a child workflow in tests leaks goroutines

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2090 |
| **State** | OPEN |
| **Author** | mbark (Martin Wohlfart) |
| **Created** | 2025-10-24 07:17:10.000 UTC (2 months ago) |
| **Updated** | 2025-10-24 07:18:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

If a child workflow is started and terminates during the test no go routine should be left once the test completes.

## Actual Behavior

A go routine is left running from `executeChildWorkflowWithDelay` which doesn't seem to terminate.

## Steps to Reproduce the Problem

  1. Create a test that runs a Workflow that starts a ChildWorkflow.
  2. Use `defer goleak.VerifyNone(s.T())`

I've added a [repo](https://github.com/mbark/temporal-childwf-reproduction) to illustrate how to reproduce the issue, see the file `do_test.go`:

```go
type TestSuite struct {
	suite.Suite
	testsuite.WorkflowTestSuite
}

func Test(t *testing.T) {
	suite.Run(t, new(TestSuite))
}

func ChildWorkflow(ctx workflow.Context) error {
	return workflow.Sleep(ctx, 24*time.Hour)
}

func ParentWorkflow(ctx workflow.Context) error {
	return workflow.ExecuteChildWorkflow(ctx, "ChildWorkflow", nil).Get(ctx, nil)
}

func (s *TestSuite) TestChildWorkflow() {
	defer goleak.VerifyNone(s.T())
	env := s.NewTestWorkflowEnvironment()
	env.RegisterWorkflow(ChildWorkflow)
	env.RegisterWorkflow(ParentWorkflow)

	env.ExecuteWorkflow(ParentWorkflow)
	err := env.GetWorkflowError()
	s.Require().NoError(err)

	env.AssertExpectations(s.T())
}
```

## Specifications

  - Version: `v1.37.0`
  - Platform: -



---

### #2085: Add support for firstExecutionRunId to cancel and terminate

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2085 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-10-20 17:30:09.000 UTC (2 months ago) |
| **Updated** | 2025-10-20 17:30:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Add support for `firstExecutionRunId` to cancel and terminate so users can target a workflow execution chain

**Describe the solution you'd like**
add methods like `cancelWithOptions` and `terminateWithOptions` that take an options struct to pass `firstExecutionRunId`



---

### #2045: Ensure tests exist to confirm custom slot supplier slot info has proper fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2045 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-05 12:30:17.000 UTC (3 months ago) |
| **Updated** | 2025-09-05 12:30:17.000 UTC |
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

### #2025: Fix DescribeTaskQueueEnhanced w/ stats to use non-deprecated APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2025 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-08-19 22:05:28.000 UTC (4 months ago) |
| **Updated** | 2025-08-19 22:06:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently, this call is still using a variety of now-deprecated APIs. Fix it to use the non-deprecated fields.

`TestTaskQueueStats` should then have the lines referencing this issue uncommented


---

### #2020: Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2020 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:32:26.000 UTC (4 months ago) |
| **Updated** | 2025-08-15 14:32:26.000 UTC |
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

### #2005: OnWorkflow test mocker doesn't propagate context headers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/2005 |
| **State** | OPEN |
| **Author** | codemonkeycxy (Xinyi Chen) |
| **Created** | 2025-07-20 00:00:18.000 UTC (5 months ago) |
| **Updated** | 2025-07-20 00:00:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
If the parent workflow adds headers to the workflow context it passes to the child workflow, I would expect to be able to verify those headers using OnWorkflow mocker

## Actual Behavior
OnWorkflow mocker was not able to see the headers passed through the workflow context from the parent workflow

## Steps to Reproduce the Problem

  1. gh repo clone codemonkeycxy/nexus-exp
  2. go test
  3. You can see `Test_ChildWorkflowContextPropagation` passes as expected, which confirms the header passing is working and the child workflow can see it
  4. But `Test_ChildWorkflowContextPropagation_Matcher` fails, which means the headers are not viewable via the OnWorkflow mocker

## Specifications

  - Version: v1.24.0
  - Platform:
  ```
uname -a
Darwin Xinyis-Laptop.local 24.5.0 Darwin Kernel Version 24.5.0: Tue Apr 22 19:54:49 PDT 2025; root:xnu-11417.121.6~2/RELEASE_ARM64_T6000 arm64
```


---

### #1869: SetOnChildWorkflowCompletedListener doesn't work as expected

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1869 |
| **State** | OPEN |
| **Author** | nicovak (Kovacs Nicolas) |
| **Created** | 2025-03-14 13:07:24.000 UTC (9 months ago) |
| **Updated** | 2025-03-14 13:07:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As see with @Quinn-With-Two-Ns on slack, i'm posting issue here.

## Expected Behavior

Testing an async child workflow error should be catch by `SetOnChildWorkflowCompletedListener`. That is not the case right now.

## Actual Behavior

The listener is not invoked.

## Steps to Reproduce the Problem

[Github Repo Example](https://github.com/nicovak/child-wf-listener)

## Specifications

  - Version:
go.temporal.io/api v1.44.1
go.temporal.io/sdk v1.33.0
  - Platform: Mac OS



---

### #1846: AsTime() on a nil pointer converts to  Jan. 1st, 1970 at midnight UTC

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1846 |
| **State** | OPEN |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2025-02-25 00:25:30.000 UTC (10 months ago) |
| **Updated** | 2025-02-25 00:25:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The protobuf library maps a nil timestamp to Jan. 1st, 1970 at midnight UTC and makes IsZero() false. One side effect is that the cli  `cardOmitEmpty` and `omitEmpty` no longer filter timestamps that have not been initialized. This is also a problem for users of the raw grpc API.

`(*timestamppb.Timestamp)(nil).AsTime().IsZero() // FALSE!`

The solution is to check with `IsValid()` before calling `AsTime()`



---

### #1838: Non-deterministic workflow code can send incorrect WFT completion without task failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1838 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-02-20 19:04:40.000 UTC (10 months ago) |
| **Updated** | 2025-02-20 19:04:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://github.com/temporalio/sdk-go/pull/1835 repros a situation in which non-deterministic workflow code sends an incorrect WFT completion without task failure, causing a invalid update state transition in History service.

The test causes a workflow to execute two WFTs. On WFT 2, it changes a boolean flag in the workflow making the code non-deterministic.

WFT1 is triggered by an update-with-start (update ID A) and is responded to by accepting & completing that update. 

WFT2 is triggered by an update (update ID B).

However, when responding to WFT2, the SDK re-sends acceptance and completion messages for update A, which is incorrect.


---

### #1817: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1817 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:23.000 UTC (10 months ago) |
| **Updated** | 2025-02-11 20:44:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

### #1796: Add `Patched()` and `DeprecatePatch()` APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1796 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:35:41.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:39:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add the `Patched(patchId, memoized): boolean` and `DeprecatePatch(patchId, memoized): boolean` APIs. Refer to Core's implementation (once it is ready).

- (Maybe) Deprecate the `GetVersion` API.

See temporalio/features#591 for details.


---

### #1778: Rename Worker Deployment API interfaces

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1778 |
| **State** | OPEN |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2025-01-14 20:13:21.000 UTC (11 months ago) |
| **Updated** | 2025-01-14 20:13:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Some interfaces of the Worker Deployment API are changing to reflect the embedding of the Rollout API within a Deployment.





---

### #1777: Add ramp to Worker Deployments

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1777 |
| **State** | OPEN |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2025-01-14 20:08:20.000 UTC (11 months ago) |
| **Updated** | 2025-01-14 20:08:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Add support for the ramp API to Worker Deployments. A ramp gracefully transitions Workflows and
Activity tasks between two implementations.



---

### #1776: Provide flag to tell the update handler that the handling is from a re-apply

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1776 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-01-14 16:41:43.000 UTC (11 months ago) |
| **Updated** | 2025-01-14 16:41:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

See https://github.com/temporalio/features/issues/564


---

### #1760: Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1760 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:40:36.000 UTC (11 months ago) |
| **Updated** | 2025-01-07 13:48:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Users need a workflow-local var that is scoped only to the current workflow when accessed via code.

Rough sketch: 

* A user can have `var myValue workflow.LocalVar[string]`
* `myValue.Get(ctx)` returns the workflow-specific value (zero value if never set, no need for a `TryGet`, a user can choose to wrap in nil-able type for optional/unset if needed)
* `myValue.Set(ctx, value)` sets the workflow-specific value

This is basically just type-safe sugar for top-level context value. See https://github.com/temporalio/features/issues/571.


---

### #1693: Provide details and actionable info about Non Deterministic Errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1693 |
| **State** | OPEN |
| **Author** | longquanzheng (Quanzheng Long) |
| **Created** | 2024-10-28 19:13:38.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-28 19:13:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
This is one example of the current NDE:
```
2024-10-22T20:38:57.8502536Z 2024/10/22 20:38:57 ERROR Workflow panic Namespace default TaskQueue Interpreter_DEFAULT WorkerID 11283@fv-az1498-207@ WorkflowType Interpreter WorkflowID locking1729629466434353139 RunID 96cc0bce-c727-45ab-8c58-32a9928ec882 Attempt 1 Error [TMPRL1100] lookup failed for scheduledEventID to activityID: scheduleEventID: 60, activityID: 60 StackTrace process event for Interpreter_DEFAULT [panic]:
2024-10-22T20:38:57.8505930Z go.temporal.io/sdk/internal.panicIllegalState(...)
2024-10-22T20:38:57.8507126Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_command_state_machine.go:518
2024-10-22T20:38:57.8508780Z go.temporal.io/sdk/internal.(*commandsHelper).handleActivityTaskScheduled(0xc000b779a0, {0xc000a3d88c, 0x2}, 0x3c)
2024-10-22T20:38:57.8510591Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_command_state_machine.go:1150 +0xf8
2024-10-22T20:38:57.8512440Z go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000e13ea8, 0xc0012bdef0, 0x4?, 0x0)
2024-10-22T20:38:57.8514059Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_event_handlers.go:1217 +0x275
2024-10-22T20:38:57.8515606Z go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc001184c80, 0xc00150da40)
2024-10-22T20:38:57.8517165Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:1152 +0x199c
2024-10-22T20:38:57.8518726Z go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc0011a6750, 0xc00150da40, 0xc001184c80, 0xc00111fc50)
2024-10-22T20:38:57.8520250Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_task_handlers.go:917 +0x3bf
2024-10-22T20:38:57.8521674Z go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc000a0e120, 0xc00150da40)
2024-10-22T20:38:57.8522716Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:363 +0x3a3
2024-10-22T20:38:57.8523572Z go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc000a0e120, {0x14d1660, 0xc00150da40})
2024-10-22T20:38:57.8524404Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_task_pollers.go:325 +0x78
2024-10-22T20:38:57.8525101Z go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
2024-10-22T20:38:57.8525809Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:444 +0x12f
2024-10-22T20:38:57.8526802Z created by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync in goroutine 5428
2024-10-22T20:38:57.8527590Z 	/home/runner/go/pkg/mod/go.temporal.io/sdk@v1.29.1/internal/internal_worker_base.go:423 +0x90
```
In this example, my workflow removed a "UpsertSearchAttribute" API by mistake. 
But this info is really hard to figure out why it runs into NDE. I would expect the error to say it more clearly: `Workflow code tried to scheduled an activity but based on the history events to replay, it should upsert a search attribute instead`. That way, we can clearly know that is something wrong with our code with the upsert search attribute (by looking at the event details of UpsertSearchAttribute in the history). 


**Describe the solution you'd like**
As above said.

**Describe alternatives you've considered**
NA

**Additional context**
NA



---

### #1668: When deserializing typed search attributes, invalid values should be ignored

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1668 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-11 13:07:26.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-11 13:07:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

If a user creates a workflow or a schedule using untyped attributes and passes in a single-item array, the typed search attributes should simply not include that value.

## Actual Behavior

Today, if a user creates a workflow or schedule using untyped attributes like keyword with a single-item array, it is a panic when we try to convert to typed search attributes. While it may seem like inside a workflow this panic is the users fault for accessing typed search attributes, it is not the users fault when simply describing the workflow. We might as well just ignore all invalid values. This is confirmed to be the behavior in Python (didn't confirm elsewhere).

This was most obvious when a user used the TypeScript SDK to create a schedule that has a workflow action with its search attributes as a single item array (the only form TypeScript SDK supports at this time since it lacks typed search attributes). Then the user did a `temporal schedule describe` in CLI which panics.


---

### #1650: List of flaky tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1650 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2024-09-24 21:10:04.000 UTC (1y 3m ago) |
| **Updated** | 2025-02-18 21:20:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hoping to start a list of flaky tests for the Go SDK:
- `TestTaskHandlersTestSuite/TestSideEffectDefer` - https://github.com/temporalio/sdk-go/actions/runs/13298856210/job/37136477031
- `TestIntegrationSuite` https://github.com/temporalio/sdk-go/actions/runs/11020856944
- `TestIntegrationSuite\OtelTracing`

New as of Go 1.24
- `TestIntegrationSuite/TestNumPollersCounter` - https://github.com/temporalio/sdk-go/actions/runs/13298856210/job/37136477031

- `TestMockCallWrapperNotBefore` https://github.com/temporalio/sdk-go/actions/runs/13399984461/job/37428296220


---

### #1633: Modify test suite to dump junit XML

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1633 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-09-12 09:55:26.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-12 09:55:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As in https://github.com/temporalio/sdk-python/pull/617 and https://github.com/temporalio/cli/pull/650, I propose to modify the test suite to output junit XML. The motivation for this is that, given appropriate tools, it will make it easier for us to study patterns of flakiness, test timings etc, across matrix builds within a run, and across runs. Producing the files now will allow us to test tools for doing this.


---

### #1610: Provide access to the workflow results from worker.WorkflowReplayer

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1610 |
| **State** | OPEN |
| **Author** | kylelemons (Kyle Lemons) |
| **Created** | 2024-08-27 21:49:59.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-27 21:53:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
The `worker.WorkflowReplayer` [interface](https://pkg.go.dev/go.temporal.io/sdk/worker#WorkflowReplayer) does not have the `GetWorkflowResult` method on it, even though [the underlying WorkflowReplayer struct does](https://pkg.go.dev/go.temporal.io/sdk@v1.28.1/internal#WorkflowReplayer.GetWorkflowResult).

I am using this to build a test helper to replay workflows and ensure that their results are the same each time, and so I currently need to to my own interface assertion to get access to this method:

```go
type replayerWithResults interface {
	worker.WorkflowReplayer

	// GetWorkflowResult returns the result of a workflow execution.
	//
	// For replays, the workflowID will always be "ReplayId".
	//
	// https://pkg.go.dev/go.temporal.io/sdk@v1.28.1/internal#WorkflowReplayer.GetWorkflowResult
	GetWorkflowResult(workflowID string, valuePtr any) error
}
```

**Describe the solution you'd like**
It's a bit challenging to make this a completely backward compatible change, since this API is returning an interface rather than a concrete type.

Ideally, it would switch to returning the WorkflowReplayer struct directly from e.g. `NewWorkflowReplayerWithOptions`, so that new methods can be added backward-compatibly.  However, I think that ship has sailed, so there are a few options:
* **Create a new API that returns the concrete type, e.g. `NewWorkflowReplayerWithResults`.**
* Expose the internal.WorkflowReplayer type via a type alias so that users can type assert the type directly, and promise that this is the type that will be returned from these constructors.
* Create another interface (e.g. `WorkflowReplayerWithResults`) and document that it will be returned from these constructors.
* Document that the returned type has additional methods that users can use in their own interfaces and what they are.

I think the first one is probably the optimal one from a user standpoint, but the second one is likely to be close enough, and it is future proof in a way that the final two are not.


---

### #1564: Test Nexus with Cloud

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1564 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2024-07-25 23:21:49.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-25 23:21:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

It would be great to have coverage of sync and async operations on Cloud.

The Cloud namespace that we use in CI has Nexus enabled.

The tricky part to test this would be to allow tests to run concurrently since a Nexus endpoint has to be defined in advance and it points to a specific task queue. The endpoint registry has inherent registration delay that is tricky to deal with in automated tests.


---

### #1536: TERMINATE_IF_RUNNING doesn't work for duplicate child workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1536 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2024-07-03 19:19:20.000 UTC (1y 6m ago) |
| **Updated** | 2025-02-04 18:26:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
A child workflow with IdReusePolicy set to TERMINATE_IF_RUNNING is started twice from the same parent. Both starts are expected to succeed. 

## Actual Behavior
Workflow receives ChildWorkflowExecutionAlreadyStartedError.

## Steps to Reproduce the Problem
Reproduction:
https://github.com/temporalio/samples-go/pull/356




---

### #1496: Workflow outcome is inconsistent between test env and real server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1496 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2024-05-30 20:47:35.000 UTC (1y 7m ago) |
| **Updated** | 2025-02-04 18:23:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

When running a workflow that starts a child and cancels it:

```go
wf := func(ctx workflow.Context) error {
	childCtx, cancel := workflow.WithCancel(ctx)
	defer cancel()
	fut := workflow.ExecuteChildWorkflow(childCtx, waitForCancelWorkflow)
	if err := fut.GetChildWorkflowExecution().Get(ctx, nil); err != nil {
		return err
	}
	cancel()
	return fut.Get(ctx, nil)
}

func waitForCancelWorkflow(ctx workflow.Context) error {
	return workflow.Await(ctx, func() bool { return false })
}
```

I'm getting inconsistent outcomes:

With server:

```
workflow execution error (type: func1, workflowID: 1eb1f045-b804-429f-b99e-57e45023a6e8, runID: 4821bd7c-b9f6-4684-92be-ab7354eefc36): canceled
```

With test env:

```
workflow execution error (type: func1, workflowID: default-test-workflow-id, runID: default-test-run-id): child workflow execution error (type: waitForCancelWorkflow, workflowID: default-test-run-id_1, runID: default-test-run-id_1_RunID, initiatedEventID: 0, startedEventID: 0): canceled
```

The test env is consistent with the behavior of other SDKs, but it's likely too late to change the cancelation behavior with the real server for consistency. I propose we change the test env to be consistent with the "real" env.




---

### #1469: Allow specifying attempt in TestWorkflowEnvironment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1469 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-05-13 22:30:30.000 UTC (1y 7m ago) |
| **Updated** | 2025-02-04 18:24:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Users may have different logic based on the attempt count of a workflow or activity, we should allow them to test those condition by allowing them to specifying the attempt count in the test environment.




---

### #1427: TestWorkflowEnvironment workflow Context does not block when canceled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1427 |
| **State** | OPEN |
| **Author** | emetsger (Elliot Metsger) |
| **Created** | 2024-03-23 15:04:57.000 UTC (1y 9m ago) |
| **Updated** | 2025-02-04 18:25:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
I expect the test environment to have parity with the production runtime environment.

When a workflow receives a cancellation request whilst a non-heartbeating activity is executing, I expect the workflow to block waiting for the activity to return before advancing the workflow, including the execution of any `defer`ed funcs.

Two observations:

1. The expected behavior seems to only occur in the _production_ runtime when `WaitForCancellation` activity option is `true`.
1. The expected behavior does not occur _at all_ in the test runtime (i.e., using `TestWorkflowEnvironment`).  In testing, the workflow does not block, regardless of `WaitForCancellation`.

This issue and test case relates to **observation #2**.  I was trying to write a test case for #1, and encountered buggy behavior in the test environment.

See additional context in [Slack](https://temporalio.slack.com/archives/CTDTU3J4T/p1711112606967079).

## Actual Behavior
In the test runtime, the workflow receives a cancelation request and immediately moves on to executing deferred without waiting for the currently executing activity to complete.

## Steps to Reproduce the Problem
Run the supplied [test case](https://gist.github.com/emetsger/053591b397ab64c97d77e94830ec1d1e)

The test case expects the activity in the main body of the workflow to complete before the activity in the deferred func.  The test case demonstrates that the deferred activity executes while the main activity is still running.

The test issues a cancelation request using a delayed callback, and the activity uses `time.Sleep()` to ensure that cancelation occurs while the activity is executing.

## Specifications
* Version: `go.temporal.io/sdk v1.26.0`, `go.temporal.io/sdk v1.25.1`
* Platform: `Darwin Kernel Version 22.6.0`, `go version go1.21.4 darwin/arm64`




---

### #1387: Configurable panic policy at the workflow level

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1387 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-12 14:28:33.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-12 14:28:33.000 UTC |
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

### #1360: `testsuite.DevServer` occasionally does not stop

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1360 |
| **State** | OPEN |
| **Author** | wyrobnik (David Wyrobnik) |
| **Created** | 2024-01-16 18:35:07.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-16 18:35:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
When calling [DevServer.Stop()](https://pkg.go.dev/go.temporal.io/sdk/testsuite#DevServer.Stop) eventually the underlying process should stop and the call should return.

## Actual Behavior
`DevServer.Stop()` hangs and never returns causing test timeouts. Excerpt from the logs:

```
{"level":"error","ts":"2024-01-16T18:24:51.369Z","msg":"Membership upsert failed.","error":"context canceled","logging-call-at":"monitor.go:310","stacktrace":"go.temporal.io/server/common/log.(*zapLogger).Error\n\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/common/log/zap_logger.go:156\ngo.temporal.io/server/common/membership/ringpop.(*monitor).startHeartbeatUpsertLoop.func1\n\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/common/membership/ringpop/monitor.go:310"}

{"level":"warn","ts":"2024-01-16T18:12:21.982Z","msg":"Failed to cancel outstanding poller.","service":"frontend","wf-task-queue-name":"localhost:945e3c13-795f-4add-b33d-043cd437ab5b","error":"Not enough hosts to serve the request","logging-call-at":"workflow_handler.go:4622"}

{"level":"error","ts":"2024-01-16T18:12:22.014Z","msg":"service failures","operation":"PollWorkflowTaskQueue","wf-namespace":"temporal-system","error":"Not enough hosts to serve the request","logging-call-at"
erceptor.(*TelemetryInterceptor).handleError\n\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/common/rpc/interceptor/telemetry.go:341\ngo.temporal.io/server/common/rpc/interceptor.(*TelemetryIntercept
rg/grpc@v1.59.0/server.go:1163\ngo.temporal.io/server/service/frontend.(*RedirectionInterceptor).handleRedirectAPIInvocation.func2\n\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/service/frontend/red
y.go:125\ngo.temporal.io/server/service/frontend.(*RedirectionInterceptor).handleRedirectAPIInvocation\n\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/service/frontend/redirection_interceptor.go:235\
hainUnaryHandler.func1\n\t/home/runner/go/pkg/mod/google.golang.org/grpc@v1.59.0/server.go:1163\ngo.temporal.io/server/common/metrics.NewServerMetricsContextInjectorInterceptor.func1\n\t/home/runner/go/pkg/mo
b/instrumentation/google.golang.org/grpc/otelgrpc.UnaryServerInterceptor.func1\n\t/home/runner/go/pkg/mod/go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc@v0.42.0/interceptor.go:344
\t/home/runner/go/pkg/mod/go.temporal.io/server@v1.22.2/common/rpc/interceptor/namespace_logger.go:84\ngoogle.golang.org/grpc.getChainUnaryHandler.func1\n\t/home/runner/go/pkg/mod/google.golang.org/grpc@v1.59
pace_validator.go:111\ngoogle.golang.org/grpc.getChainUnaryHandler.func1\n\t/home/runner/go/pkg/mod/google.golang.org/grpc@v1.59.0/server.go:1163\ngo.temporal.io/server/common/rpc.ServiceErrorInterceptor\n\t/
poral.io/api/workflowservice/v1._WorkflowService_PollWorkflowTaskQueue_Handler\n\t/home/runner/go/pkg/mod/go.temporal.io/api@v1.25.0/workflowservice/v1/service.pb.go:1671\ngoogle.golang.org/grpc.(*Server).pro
ogle.golang.org/grpc.(*Server).serveStreams.func1.1\n\t/home/runner/go/pkg/mod/google.golang.org/grpc@v1.59.0/server.go:986"}                                                                                   
```

## Steps to Reproduce the Problem

  1. Create a dev server with `devServer, err := testsuite.StartDevServer`
  1. Interact with it (e.g. start some workflows).
  1. Call `devServer.Stop()`.

## Specifications

  - Version: temporal cli v0.10.7, sdk-go v1.25.1 
  - Platform: Ubuntu 20.04.1



---

### #1349: WorkflowRun.Get does not use a context aware data converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1349 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-01-13 17:10:00.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-13 17:10:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
`WorkflowRun.Get` and `WorkflowRun.GetWithOptions` uses a context aware data converter like all other client and workflow calls

## Actual Behavior
`WorkflowRun.Get` and `WorkflowRun.GetWithOptions` does not use a context aware data converter.

https://github.com/temporalio/sdk-go/blob/5ca9a4dfd4c37a56f0dd886596494be4599f01c8/internal/internal_workflow_client.go#L288




---

### #1341: WorkflowChecker should flag anonymous functions in local activities as non deterministic

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1341 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2024-01-09 18:33:24.000 UTC (1y 11m ago) |
| **Updated** | 2025-03-18 15:47:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
WorkflowChecker should consider anonymous functions in local activities deterministic.

## Actual Behavior
WorkflowChecker does not consider anonymous functions in local activities deterministic.

## Steps to Reproduce the Problem

```Go
func GreetingSample(ctx workflow.Context) error {
	fut := workflow.ExecuteLocalActivity(ctx, func(ctx context.Context) time.Time { return time.Now() })
}
```

## Note

Anonymous functions as local activities are ripe for data races because they can run in parallel with the workflow function, so maybe we should warn about their use from that perspective.



---

### #1315: Deprecate Update related SDK flags

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1315 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-12-04 19:11:59.000 UTC (2 years ago) |
| **Updated** | 2023-12-04 19:11:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

To preserve history compatibility we introduced a couple update related flags `SDKFlagProtocolMessageCommand` `SDKPriorityUpdateHandling` that should be deprecated in the future since update is not GA and we don't need to maintain histroy compatibility.



---

### #1283: Remove ClientOutboundInterceptor.PollWorkflowUpdate

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1283 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-10-27 19:37:46.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-27 19:37:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

This does not need to be interceptable any more than getting a workflow result does


---

### #1240: Data race after deadlock detector fired

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1240 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-09-18 21:42:54.000 UTC (2y 3m ago) |
| **Updated** | 2023-09-18 21:42:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Data race observed in `VersionLoopWorkflow`, after the deadlock detector fired. `VersionLoopWorkflow` has no defer's or cancellation that are known issues. Likely suspect is this [PR](https://github.com/temporalio/sdk-go/commit/a059d880141b183ccf18c081caea66748747c296)

https://github.com/temporalio/sdk-go/actions/runs/6227934624/job/16903653066

```
2023/09/18 21:09:04 ERROR Workflow panic Namespace integration-test-namespace TaskQueue tq-62779e48-2585-42cd-b9d3-6945da2ebf53-TestIntegrationSuite/TestVersionLoopWorkflow WorkerID 16605@fv-az437-13@ WorkflowType VersionLoopWorkflow WorkflowID test-version-loop-workflow RunID 676d31fa-41ab-4afa-8533-46a73d2b28e6 Attempt 1 Error Potential deadlock detected: workflow goroutine "root" didn't yield for over a second StackTrace process event for tq-62779e48-2585-42cd-b9d3-6945da2ebf53-TestIntegrationSuite/TestVersionLoopWorkflow [panic]:
go.temporal.io/sdk/internal.(*coroutineState).call(0xc00064e870, 0x3b9aca00)
	/home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1011 +0x2cb
go.temporal.io/sdk/internal.(*dispatcherImpl).ExecuteUntilAllBlocked(0xc00012c780, 0x1645f00?)
	/home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1108 +0x2d7
go.temporal.io/sdk/internal.executeDispatcher({0x19c9dc0, 0xc00012c840}, {0x19cb8c0, 0xc00012c780}, 0xc000250f90?)
	/home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc8
go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted(0xc00014a240, 0x179?)
	/home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x89
go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent(0xc000012840, 0xc0004b9700, 0x0, 0x1)
	/home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x603
go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask(0xc000520bd0, 0xc0004c0930)
	/home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fca
go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask(0xc0007ccea0, 0xc0004c0930, 0xc000520bd0, 0xc0002513e0)
	/home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69c
go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask(0xc0005c26c0, 0xc0004c0930)
	/home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x756
go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask(0xc0005c26c0, {0x161d060?, 0xc0004c0930?})
	/home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xcb
go.temporal.io/sdk/internal.(*baseWorker).processTask(0xc0003beb00, {0x161cba0, 0xc000cca6c0})
	/home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x256
go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
	/home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8c
created by go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync
	/home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x13a
2023/09/18 21:09:04 WARN  Serialized size of TemporalChangeVersion search attribute update would exceed the maximum value size. Skipping this upsert. Be aware that your visibility records will not include the following patch: changeID_2:0-1 Namespace integration-test-namespace TaskQueue tq-62779e48-2585-42cd-b9d3-6945da2ebf53-TestIntegrationSuite/TestVersionLoopWorkflow WorkerID 16605@fv-az437-13@ WorkflowType VersionLoopWorkflow WorkflowID test-version-loop-workflow RunID 676d31fa-41ab-4afa-8533-46a73d2b28e6 Attempt 1
==================
WARNING: DATA RACE
Read at 0x00c000250fc0 by goroutine 6063:
  runtime.mapaccess2()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/map.go:456 +0x0
  go.temporal.io/sdk/internal.(*commandsHelper).addCommand()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:929 +0xb6
  go.temporal.io/sdk/internal.(*commandsHelper).recordVersionMarker()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1073 +0x512
  go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:799 +0x734
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).GetVersion()
      <autogenerated>:1 +0x78
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1681 +0x6f
  go.temporal.io/sdk/internal.(*WorkflowOutboundInterceptorBase).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:336 +0x9a
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).GetVersion()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/internal.GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1677 +0xb7
  go.temporal.io/sdk/workflow.GetVersion()
      /home/runner/work/sdk-go/sdk-go/workflow/workflow.go:384 +0x19e
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/workflow_test.go:2319 +0x113
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow-fm()
      <autogenerated>:1 +0x92
  runtime.call64()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/asm_amd64.s:730 +0x48
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.20.8/x64/src/reflect/value.go:370 +0xc7
  go.temporal.io/sdk/internal.executeFunction()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:[1806](https://github.com/temporalio/sdk-go/actions/runs/6227934624/job/16903653066#step:7:1807) +0x5b0
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:530 +0x23e
  go.temporal.io/sdk/internal.(*WorkflowInboundInterceptorBase).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:154 +0x76
  go.temporal.io/sdk/test_test.(*signalWorkflowInboundInterceptor).ExecuteWorkflow()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/test_test.(*tracingWorkflowInboundInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4136 +0x18e
  go.temporal.io/sdk/internal.(*workflowExecutor).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:805 +0x41a
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:512 +0x189
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1057 +0x165
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func2()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1058 +0x47

Previous write at 0x00c000250fc0 by goroutine 6062:
  runtime.mapdelete()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/map.go:695 +0x0
  go.temporal.io/sdk/internal.(*commandStateMachineBase).moveState()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:430 +0x646
  go.temporal.io/sdk/internal.(*markerCommandStateMachine).handleCommandSent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:836 +0xab
  go.temporal.io/sdk/internal.(*commandsHelper).getCommands()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1417 +0x276
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).CompleteWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1244 +0x81b
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).applyWorkflowPanicPolicy()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1142 +0x1064
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1088 +0x1676
  go.temporal.io/sdk/internal.executeDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc7
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x88
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x602
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6063 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1048 +0x66e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:308 +0x86
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4093 +0x201
  go.temporal.io/sdk/internal.newDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:614 +0x27e
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:499 +0x1c4
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1269 +0x36b
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1044 +0x20e
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6062 (running) created at:
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x139
  go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:382 +0x116
  go.temporal.io/sdk/internal.(*baseWorker).Start.func3()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:284 +0x39
==================
==================
WARNING: DATA RACE
Read at 0x00c000250f90 by goroutine 6063:
  container/list.(*List).lazyInit()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:86 +0x131
  container/list.(*List).PushBack()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:151 +0x12c
  go.temporal.io/sdk/internal.(*commandsHelper).addCommand()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:933 +0xd2
  go.temporal.io/sdk/internal.(*commandsHelper).recordVersionMarker()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1073 +0x512
  go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:799 +0x734
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).GetVersion()
      <autogenerated>:1 +0x78
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1681 +0x6f
  go.temporal.io/sdk/internal.(*WorkflowOutboundInterceptorBase).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:336 +0x9a
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).GetVersion()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/internal.GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1677 +0xb7
  go.temporal.io/sdk/workflow.GetVersion()
      /home/runner/work/sdk-go/sdk-go/workflow/workflow.go:384 +0x19e
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/workflow_test.go:2319 +0x113
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow-fm()
      <autogenerated>:1 +0x92
  runtime.call64()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/asm_amd64.s:730 +0x48
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.20.8/x64/src/reflect/value.go:370 +0xc7
  go.temporal.io/sdk/internal.executeFunction()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:1806 +0x5b0
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:530 +0x23e
  go.temporal.io/sdk/internal.(*WorkflowInboundInterceptorBase).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:154 +0x76
  go.temporal.io/sdk/test_test.(*signalWorkflowInboundInterceptor).ExecuteWorkflow()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/test_test.(*tracingWorkflowInboundInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4136 +0x18e
  go.temporal.io/sdk/internal.(*workflowExecutor).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:805 +0x41a
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:512 +0x189
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1057 +0x165
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func2()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1058 +0x47

Previous write at 0x00c000250f90 by goroutine 6062:
  container/list.(*List).remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:109 +0x445
  container/list.(*List).Remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:138 +0x40a
  go.temporal.io/sdk/internal.(*commandStateMachineBase).moveState()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:429 +0x395
  go.temporal.io/sdk/internal.(*markerCommandStateMachine).handleCommandSent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:836 +0xab
  go.temporal.io/sdk/internal.(*commandsHelper).getCommands()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1417 +0x276
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).CompleteWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1244 +0x81b
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).applyWorkflowPanicPolicy()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1142 +0x1064
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1088 +0x1676
  go.temporal.io/sdk/internal.executeDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc7
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x88
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x602
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6063 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1048 +0x66e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:308 +0x86
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4093 +0x201
  go.temporal.io/sdk/internal.newDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:614 +0x27e
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:499 +0x1c4
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1269 +0x36b
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1044 +0x20e
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6062 (running) created at:
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x139
  go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:382 +0x116
  go.temporal.io/sdk/internal.(*baseWorker).Start.func3()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:284 +0x39
==================
==================
WARNING: DATA RACE
Read at 0x00c000250f98 by goroutine 6063:
  container/list.(*List).PushBack()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:152 +0x1c4
  go.temporal.io/sdk/internal.(*commandsHelper).addCommand()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:933 +0xd2
  go.temporal.io/sdk/internal.(*commandsHelper).recordVersionMarker()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1073 +0x512
  go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:799 +0x734
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).GetVersion()
      <autogenerated>:1 +0x78
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1681 +0x6f
  go.temporal.io/sdk/internal.(*WorkflowOutboundInterceptorBase).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:336 +0x9a
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).GetVersion()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/internal.GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1677 +0xb7
  go.temporal.io/sdk/workflow.GetVersion()
      /home/runner/work/sdk-go/sdk-go/workflow/workflow.go:384 +0x19e
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/workflow_test.go:2319 +0x113
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow-fm()
      <autogenerated>:1 +0x92
  runtime.call64()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/asm_amd64.s:730 +0x48
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.20.8/x64/src/reflect/value.go:370 +0xc7
  go.temporal.io/sdk/internal.executeFunction()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:1806 +0x5b0
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:530 +0x23e
  go.temporal.io/sdk/internal.(*WorkflowInboundInterceptorBase).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:154 +0x76
  go.temporal.io/sdk/test_test.(*signalWorkflowInboundInterceptor).ExecuteWorkflow()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/test_test.(*tracingWorkflowInboundInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4136 +0x18e
  go.temporal.io/sdk/internal.(*workflowExecutor).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:805 +0x41a
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:512 +0x189
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1057 +0x165
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func2()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1058 +0x47

Previous write at 0x00c000250f98 by goroutine 6062:
  container/list.(*List).remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:110 +0x4ac
  container/list.(*List).Remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:138 +0x40a
  go.temporal.io/sdk/internal.(*commandStateMachineBase).moveState()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:429 +0x395
  go.temporal.io/sdk/internal.(*markerCommandStateMachine).handleCommandSent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:836 +0xab
  go.temporal.io/sdk/internal.(*commandsHelper).getCommands()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1417 +0x276
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).CompleteWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1244 +0x81b
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).applyWorkflowPanicPolicy()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1142 +0x1064
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1088 +0x1676
  go.temporal.io/sdk/internal.executeDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc7
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x88
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x602
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6063 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1048 +0x66e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:308 +0x86
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4093 +0x201
  go.temporal.io/sdk/internal.newDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:614 +0x27e
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:499 +0x1c4
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1269 +0x36b
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1044 +0x20e
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6062 (running) created at:
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x139
  go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:382 +0x116
  go.temporal.io/sdk/internal.(*baseWorker).Start.func3()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:284 +0x39
==================
==================
WARNING: DATA RACE
Read at 0x00c000250fb8 by goroutine 6063:
  container/list.(*List).insert()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:98 +0x3f8
  container/list.(*List).insertValue()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:104 +0x1d3
  container/list.(*List).PushBack()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:152 +0x1b8
  go.temporal.io/sdk/internal.(*commandsHelper).addCommand()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:933 +0xd2
  go.temporal.io/sdk/internal.(*commandsHelper).recordVersionMarker()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1073 +0x512
  go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:799 +0x734
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).GetVersion()
      <autogenerated>:1 +0x78
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1681 +0x6f
  go.temporal.io/sdk/internal.(*WorkflowOutboundInterceptorBase).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:336 +0x9a
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).GetVersion()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/internal.GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1677 +0xb7
  go.temporal.io/sdk/workflow.GetVersion()
      /home/runner/work/sdk-go/sdk-go/workflow/workflow.go:384 +0x19e
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/workflow_test.go:2319 +0x113
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow-fm()
      <autogenerated>:1 +0x92
  runtime.call64()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/asm_amd64.s:730 +0x48
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.20.8/x64/src/reflect/value.go:370 +0xc7
  go.temporal.io/sdk/internal.executeFunction()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:1806 +0x5b0
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:530 +0x23e
  go.temporal.io/sdk/internal.(*WorkflowInboundInterceptorBase).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:154 +0x76
  go.temporal.io/sdk/test_test.(*signalWorkflowInboundInterceptor).ExecuteWorkflow()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/test_test.(*tracingWorkflowInboundInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4136 +0x18e
  go.temporal.io/sdk/internal.(*workflowExecutor).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:805 +0x41a
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:512 +0x189
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1057 +0x165
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func2()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1058 +0x47

Previous write at 0x00c000250fb8 by goroutine 6062:
  container/list.(*List).remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:114 +0x59c
  container/list.(*List).Remove()
      /opt/hostedtoolcache/go/1.20.8/x64/src/container/list/list.go:138 +0x40a
  go.temporal.io/sdk/internal.(*commandStateMachineBase).moveState()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:429 +0x395
  go.temporal.io/sdk/internal.(*markerCommandStateMachine).handleCommandSent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:836 +0xab
  go.temporal.io/sdk/internal.(*commandsHelper).getCommands()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1417 +0x276
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).CompleteWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1244 +0x81b
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).applyWorkflowPanicPolicy()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1142 +0x1064
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1088 +0x1676
  go.temporal.io/sdk/internal.executeDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc7
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x88
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x602
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6063 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1048 +0x66e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:308 +0x86
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4093 +0x201
  go.temporal.io/sdk/internal.newDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:614 +0x27e
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:499 +0x1c4
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1269 +0x36b
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1044 +0x20e
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6062 (running) created at:
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x139
  go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:382 +0x116
  go.temporal.io/sdk/internal.(*baseWorker).Start.func3()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:284 +0x39
==================
==================
WARNING: DATA RACE
Write at 0x00c000055ef8 by goroutine 6063:
  go.temporal.io/sdk/internal.(*commandsHelper).addCommand()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:934 +0x48a
  go.temporal.io/sdk/internal.(*commandsHelper).recordVersionMarker()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1073 +0x512
  go.temporal.io/sdk/internal.(*workflowEnvironmentImpl).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:799 +0x734
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).GetVersion()
      <autogenerated>:1 +0x78
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1681 +0x6f
  go.temporal.io/sdk/internal.(*WorkflowOutboundInterceptorBase).GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:336 +0x9a
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).GetVersion()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/internal.GetVersion()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:1677 +0xb7
  go.temporal.io/sdk/workflow.GetVersion()
      /home/runner/work/sdk-go/sdk-go/workflow/workflow.go:384 +0x19e
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/workflow_test.go:2319 +0x113
  go.temporal.io/sdk/test_test.(*Workflows).VersionLoopWorkflow-fm()
      <autogenerated>:1 +0x92
  runtime.call64()
      /opt/hostedtoolcache/go/1.20.8/x64/src/runtime/asm_amd64.s:730 +0x48
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.20.8/x64/src/reflect/value.go:370 +0xc7
  go.temporal.io/sdk/internal.executeFunction()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:1806 +0x5b0
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/workflow.go:530 +0x23e
  go.temporal.io/sdk/internal.(*WorkflowInboundInterceptorBase).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/internal/interceptor_base.go:154 +0x76
  go.temporal.io/sdk/test_test.(*signalWorkflowInboundInterceptor).ExecuteWorkflow()
      <autogenerated>:1 +0x29
  go.temporal.io/sdk/test_test.(*tracingWorkflowInboundInterceptor).ExecuteWorkflow()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4136 +0x18e
  go.temporal.io/sdk/internal.(*workflowExecutor).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker.go:805 +0x41a
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:512 +0x189
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1057 +0x165
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine.func2()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1058 +0x47

Previous read at 0x00c000055ef8 by goroutine 6062:
  go.temporal.io/sdk/internal.(*commandStateMachineBase).moveState()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:428 +0x377
  go.temporal.io/sdk/internal.(*markerCommandStateMachine).handleCommandSent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:836 +0xab
  go.temporal.io/sdk/internal.(*commandsHelper).getCommands()
      /home/runner/work/sdk-go/sdk-go/internal/internal_command_state_machine.go:1417 +0x276
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).CompleteWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1244 +0x81b
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).applyWorkflowPanicPolicy()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1142 +0x1064
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1088 +0x1676
  go.temporal.io/sdk/internal.executeDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:622 +0xc7
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).OnWorkflowTaskStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:592 +0x88
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1063 +0x602
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6063 (running) created at:
  go.temporal.io/sdk/internal.(*dispatcherImpl).NewCoroutine()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:1048 +0x66e
  go.temporal.io/sdk/internal.(*workflowEnvironmentInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:308 +0x86
  go.temporal.io/sdk/test_test.(*tracingWorkflowOutboundInterceptor).Go()
      /home/runner/work/sdk-go/sdk-go/test/integration_test.go:4093 +0x201
  go.temporal.io/sdk/internal.newDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:614 +0x27e
  go.temporal.io/sdk/internal.(*syncWorkflowDefinition).Execute()
      /home/runner/work/sdk-go/sdk-go/internal/internal_workflow.go:499 +0x1c4
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1269 +0x36b
  go.temporal.io/sdk/internal.(*workflowExecutionEventHandlerImpl).ProcessEvent()
      /home/runner/work/sdk-go/sdk-go/internal/internal_event_handlers.go:1044 +0x20e
  go.temporal.io/sdk/internal.(*workflowExecutionContextImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:1028 +0x1fc9
  go.temporal.io/sdk/internal.(*workflowTaskHandlerImpl).ProcessWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_handlers.go:836 +0x69b
  go.temporal.io/sdk/internal.(*workflowTaskPoller).processWorkflowTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:354 +0x755
  go.temporal.io/sdk/internal.(*workflowTaskPoller).ProcessTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_task_pollers.go:318 +0xca
  go.temporal.io/sdk/internal.(*baseWorker).processTask()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:505 +0x255
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync.func1()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:356 +0x8b

Goroutine 6062 (running) created at:
  go.temporal.io/sdk/internal.(*baseWorker).processTaskAsync()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:352 +0x139
  go.temporal.io/sdk/internal.(*baseWorker).runTaskDispatcher()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:382 +0x116
  go.temporal.io/sdk/internal.(*baseWorker).Start.func3()
      /home/runner/work/sdk-go/sdk-go/internal/internal_worker_base.go:284 +0x39
==================
[2023](https://github.com/temporalio/sdk-go/actions/runs/6227934624/job/16903653066#step:7:2024)/09/18 21:09:05 WARN  Serialized size of TemporalChangeVersion search attribute update would exceed the maximum value size. Skipping this upsert. Be aware that your visibility records will not include the following patch: changeID_2:1-1 Namespace integration-test-namespace T
``


---

### #1197: Drain polled tasks on shutdown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1197 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-08-10 13:29:34.000 UTC (2y 4m ago) |
| **Updated** | 2023-08-10 13:29:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
When a worker is shutting down, if it has polled for tasks, but not started processing them it will drop them and continue to close

**Describe the solution you'd like**
When a worker is shutting down, it should stop accepting new tasks, but let any it already has polled try to be processed in the worker stop timeout

**Additional context**
https://github.com/temporalio/sdk-go/pull/1195


---

### #1173: Enable testing with OnActivity and non-retryable errors to verify options are set correctly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1173 |
| **State** | OPEN |
| **Author** | underrun (J Derek Wilson) |
| **Created** | 2023-07-26 15:05:08.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-26 15:05:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
When working with non-retryable errors in activites where those errors are set as non-retryable via activity options there isn't an obvious way to test to make sure the activity options have been set correctly when testing errors returned from activities. We can test errors returned from activities using `OnActivity` in test code and we can use that to make sure the workflow invoking the activity handles the error correctly, but it doesn't look like theres any way to verify that the error is also properly set as non-retryable - because the error returned from `OnActivity` is always marked as retryable.

The issue with this is that with string matching being used to detect errors and whether or not to retry them, I don't have a good way to verify that the activity options i've set in the workflow will actually result in the error i want to fall through actually not being retried.

**Describe the solution you'd like**
Ideally i'd like testing with `OnActivity` to fail a test if it tries to return an activity that is set as retryable from the workflow setting its activity options. I'd also like non-retryable errors returned from `OnActivity` to have them properly marked as non-retryable. 

**Describe alternatives you've considered**
there isn't a good alternative to know that i've set the error as non-retryable properly from temporal's perspective. I can verify that I set it to what I think the error name is or even do some reflection and verify that the string i'm passing in is the error i want to handle. but this isn't super easy and can also miss things like whether or not errors in modules need the `module.WhateverError` or just `WhateverError` or if it doesn't matter.

**Additional context**
None


---

### #1157: Support LocalActivityOptions.WaitForCancellation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1157 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-06 19:26:59.000 UTC (2y 6m ago) |
| **Updated** | 2023-07-06 19:26:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Local activities need to be able to react to worker stop cancellation if they want. I have not investigated how hard this is to implement.


---

### #1132: Add support for visiting all payloads at once in proxy visitor interceptor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1132 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-06-08 22:34:39.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-08 22:34:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

This is for the https://github.com/temporalio/api-go project but it doesn't accept issues.

Today the payload visitor in https://pkg.go.dev/go.temporal.io/api/proxy visits sets of payloads as they are seen one set at a time. Users want to collect these and then visit them together all at once. Here's how they collect them all in user-land:

```go
func CollectAllPayloads(msg proto.Message) (payloads []*common.Payload, err error) {
	err = proxy.VisitPayloads(context.Background(), msg, proxy.VisitPayloadsOptions{
		Visitor: func(ctx *proxy.VisitPayloadsContext, p []*common.Payload) ([]*common.Payload, error) {
			payloads = append(payloads, p...)
			return p, nil
		},
		SkipSearchAttributes: true,
	})
	return
}
```

And a utility to apply something to all payloads:

```go
func ApplyToAllPayloads(msg proto.Message, apply ApplyFunc) error {
	payloads, err := CollectAllPayloads(msg)
	if err != nil {
		return err
	}
	newPayloads, err := apply(payloads)
	if err != nil {
		return err
	}
	if len(newPayloads) != len(payloads) {
		return fmt.Errorf("expected %v payload(s), got %v", len(payloads), len(newPayloads))
	}
	// Clear and merge new payloads onto old ones
	// this mutates the payloads var
	for i, payload := range payloads {
		payload.Reset()
		proto.Merge(payload, newPayloads[i])
	}
	return nil
}
```

Then how they may invoke them all at once in the interceptor:

```go
type AllPayloadVisitorInterceptorOptions struct {
	OutboundApplyAll func([]*common.Payload) ([]*common.Payload, error)
	InboundApplyAll  func([]*common.Payload) ([]*common.Payload, error)
}

func NewAllPayloadVisitorInterceptor(options AllPayloadVisitorInterceptorOptions) (grpc.UnaryClientInterceptor, error) {
	return func(ctx context.Context, method string, req, response interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
		if reqMsg, ok := req.(proto.Message); ok && options.OutboundApplyAll != nil {
			err := ApplyToAllPayloads(reqMsg, options.OutboundApplyAll)
			if err != nil {
				return err
			}
		}

		err := invoker(ctx, method, req, response, cc, opts...)
		if err != nil {
			return err
		}

		if resMsg, ok := response.(proto.Message); ok && options.InboundApplyAll != nil {
			return ApplyToAllPayloads(resMsg, options.InboundApplyAll)
		}

		return nil
	}, nil
}
```

Basically we need this functionality opt-in. The best solution is probably some kind of `AllAtOnce bool` option on `VisitPayloadsOptions`, with documentation saying that every output payload must be 1:1 with input, and that the payloads still need to be able to be handled individually on in/out (i.e. you can't encrypt them together as one blob, because they need to be isolated), and that `VisitPayloadsContext.Parent` will be nil for the single visit call we will make.


---

### #1131: worker.Options.WorkerActivitiesPerSecond applies after poll is received

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1131 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-06-07 15:28:47.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-07 15:28:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Since this rate limit is applied post-poll-pre-process, server timeouts apply while it is waiting. We even have a doc on this field saying users can set it to a fraction of a second, e.g. 1 activity every 10s, but if they had a heartbeat timeout, it could timeout before it starts.

We should either fix this (hard) or at least document this warning on the field.


---

### #1054: EncodedFailureAttributes capability should be respected

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/1054 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2023-03-06 21:53:04.000 UTC (2y 10m ago) |
| **Updated** | 2023-03-06 21:53:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Go SDK respects `EncodedFailureAttributes` capability and only encodes failures if the server supports it.

## Actual Behavior
Go SDK ignores `EncodedFailureAttributes`.




---

### #997: Support dynamic query and update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/997 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-01-05 13:52:58.000 UTC (2y 12m ago) |
| **Updated** | 2023-12-07 14:06:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

Need to allow a dynamic query or update handler that is called when no other query or update handler is found. Its signature must accept a string name and a slice of `converter.EncodedValue` (or we need a `RawValue` or something).


---

### #909: Fatal poll error on worker start isn't stopping activity poller

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/909 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-09-14 18:50:36.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-14 18:50:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

All workers should stop on fatal error

## Actual Behavior

Seems if the first poll fails w/ fatal error, there may be a case where the activity worker stop is not taking hold. This may be fixed by just switching the order of https://github.com/temporalio/sdk-go/blob/c1ce1d25238b7bb15095f0767497fa93215c2589/internal/internal_worker_base.go#L438-L441

## Steps to Reproduce the Problem

Maybe try to start a worker and have the first poll immediately give back a namespace not found and confirm activity poller still polls.


---

### #900: Log warning on failed serialization of signal input

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/900 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-08-31 18:25:23.000 UTC (3y 4m ago) |
| **Updated** | 2022-08-31 18:25:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | cretz |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Signals are silently dropped when they can't deserialize

**Describe the solution you'd like**

We want to warn here.

We also need to confirm and document behavior in selectors when that receive callback occurs and the successive receive may not populate the value


---

### #873: Ensure slots available metric is updated on worker stop

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/873 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-08-01 12:27:31.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-01 12:27:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

Slots available added on start are removed on stop

## Actual Behavior

Glancing at the code, these may not be removed properly


---

### #755: Sticky query invalid state machine transition error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/755 |
| **State** | OPEN |
| **Author** | yycptt (Yichao Yang) |
| **Created** | 2022-03-16 01:29:07.000 UTC (3y 9m ago) |
| **Updated** | 2022-03-16 01:29:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

If temporal server think sdk has the workflow cache and sends a sticky query (whether the query is strongly consistent doesn't matter, as long as the query is dispatched via matching through a query task) to the sdk but the worker doesn't actually have the workflow cache, sdk will call getWorkflowExecutionHistory to rebuild the workflow state. 

Query/workflow task contains a previousStartedEventID which is used to determine which part of the history is in replay mode. When query task calls getWorkflowExecutionHistory to get history, however, the history may already advanced and contains more events than when the query task is first dispatched. This means the previousStartedEventID in the original query task will be outdated. 

Existing SDK implementation will continue to use that outdated previousStartedEventID to run the query task and this will lead to invalid state transition error. (More specifically, sdk will want to move the state machine to Init state directly from Created State, skipping the Sent state.) Check below for a test that can repro the issue.

We don't have the same issue for workflow task because there'll be only one pending workflow task, so the history can't be advanced when we are processing it.

Some idea for fixing the issue:
1. For query tasks, process all events in reply mode
2. Include a nextEventID in query task and truncate history beyond that point (this is the fix done in Cadence)
3. getWorkflowExecutionHistory also return  previousStartedEventID ? not sure.

So far it looks like with approach 1, the entire fix can be done on sdk side. 2 and 3 will involve server change as well. Please let server team know if approach 1 can't work and additional support is needed from server side.

## Expected Behavior
Successfully return a query result

## Actual Behavior
Invalid state machine transition error 

## Steps to Reproduce the Problem

A sample test that can expose the bug (and a potential fix) can be found at
https://github.com/yycptt/sdk-go/commit/7bd7016ea653999a6483b99f227653252cb2b33f
Running the test directly will give the following error message
```
2022/03/15 18:05:15 WARN  Failed to process workflow task. Namespace default TaskQueue query-task-cache-evicted-tl WorkerID test-worker-identity WorkflowType query-task-cache-evicted-workflow WorkflowID query-task-cache-evicted-workflow-id RunID query-task-cache-evicted-workflow-run-id Attempt 0 Error invalid state transition: attempt to handleInitiatedEvent, CommandType: Activity, ID: 10, state=Created, isDone()=false, history=[Created]
```


## Specifications

  - Version:
  - Platform:



---

### #728: Add Await branch to Selector

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/728 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2022-02-14 18:16:40.000 UTC (3y 10m ago) |
| **Updated** | 2022-03-15 21:50:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
workflow.Await and AwaitWithTimeout are very convenient as they allow waiting on practically any condition. Selector supports only waiting on Future and Channel. This leads to situations when unexperienced users mix Await with Selector in the same function which leads to suttle bugs. For example this was reported by a user over Slack:

> Hello, is there a small logic error in the Go subscription template/example?
> [This ](https://github.com/temporalio/subscription-workflow-project-template-go/blob/93ce85b52b8c610c21a96f3397bef5b419047e11/workflow.go#L115-L122)AwaitWithTimeout[ will exit early](https://github.com/temporalio/subscription-workflow-project-template-go/blob/93ce85b52b8c610c21a96f3397bef5b419047e11/workflow.go#L115-L122) if the subscription is cancelled, but the cancelSelector.Select(ctx) is not run [until after](https://github.com/temporalio/subscription-workflow-project-template-go/blob/93ce85b52b8c610c21a96f3397bef5b419047e11/workflow.go#L121) the timeout is complete.
> Mostly just asking because I think I introduced this bug in my own code when copying from this example.

**Describe the solution you'd like**
I propose adding the following API:

```go
Selector {
...
  AddAwait(condition func() bool, f func())
}
```
When `Selector.Select` is called, `f` will be called if `condition` returns true.




---

### #705: Make WorkflowServiceStubsOptions#rpcLongPollTimeout configurable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/705 |
| **State** | OPEN |
| **Author** | Spikhalskiy (Dmitry Spikhalsky) |
| **Created** | 2022-01-23 22:20:47.000 UTC (3y 11m ago) |
| **Updated** | 2022-01-23 22:21:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The original issue in JavaSDK: https://github.com/temporalio/sdk-java/issues/988


---

### #676: Document dangers with workflow.WithChildOptions and workflow.WithWorkflowRunTimeout using continue as new

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/676 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-12-20 17:04:52.000 UTC (4 years ago) |
| **Updated** | 2024-12-17 21:17:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

One might think `workflow.WithChildOptions` would only apply to children, but it actually changes the general workflow options, so could be called `workflow.WithWorkflowOptions`. These general workflow options are used in `NewContinueAsNewError` which may surprise people.

**Describe the solution you'd like**

Since we likely can't change this, we need to document the issue and discourage context reuse in general.


---

### #619: Make tracing tags consistent across SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/619 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-11-08 14:34:24.000 UTC (4y 1m ago) |
| **Updated** | 2024-03-15 04:59:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, external dependency |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**

Tracing tags are not consistent across SDKs.

**Describe the solution you'd like**

Make tracing tags consistent across SDKs.

**Additional context**

* Java: https://github.com/temporalio/sdk-java/issues/862
* TypeScript: https://github.com/temporalio/sdk-typescript/issues/360




---

### #514: TestActivityEnvironment.ExecuteActivity requires RegisterActivity when invoking activity by function

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/514 |
| **State** | OPEN |
| **Author** | dynajoe (Joe Andaverde) |
| **Created** | 2021-08-10 22:05:13.000 UTC (4y 4m ago) |
| **Updated** | 2021-10-28 13:46:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | cretz |
| **Milestone** | None |

#### Description

## Expected Behavior

I expect this code to work without the commented section:


```go
type FooActivityTestSuite struct {
	suite.Suite
	testsuite.WorkflowTestSuite
}
```

```go
func (s *FooActivityTestSuite) TestFoo() {
	a := NewFooActivities()
	env := s.NewTestActivityEnvironment()
	// env.RegisterActivity(a.FooActivity)
	_, err := env.ExecuteActivity(a.FooActivity, FooActivityInput{})
}
```

## Actual Behavior

The above results in a test panic:

```
 no activity is registered for taskqueue 'default-test-taskqueue'
```

## Specifications

  - Version: go sdk 1.8.0



---

### #505: Non-retryable errors in sessions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/505 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2021-08-02 16:18:10.000 UTC (4y 5m ago) |
| **Updated** | 2024-12-16 20:49:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | Sushisource |
| **Milestone** | None |

#### Description

Some errors need to be non-retryable in sessions, for example heartbeat failures and panics that bring down the worker shouldn't be retried because the worker's state will have been lost. It appears cadence supports this in retry policy settings for sessions but we don't. More context on our internal slack here: https://temporaltechnologies.slack.com/archives/C01FG4BRQVB/p1620110340297700


---

### #491: Testsuite Workflow Retry not working

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/491 |
| **State** | OPEN |
| **Author** | leowmjw |
| **Created** | 2021-07-17 23:41:38.000 UTC (4y 5m ago) |
| **Updated** | 2021-07-17 23:41:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior

TestSuite should mimic actual behavior when workflow returns ApplicationError; which is to retry

## Actual Behavior

Only one run happens, no retry

## Steps to Reproduce the Problem

Code:
```
func (s *WorkflowTestSuiteUnitTest) Test_WorkflowRetry() {
	trackFailure := 0
	workflowFn := func(ctx Context) (string, error) {
		trackFailure++
		// Happy path ..
		if trackFailure > 1 {
			return "s1s2", nil
		}
		return "", NewApplicationError("unlucky", "retry", false, errors.New("try again"))
	}

	env := s.NewTestWorkflowEnvironment()
	env.SetStartWorkflowOptions(StartWorkflowOptions{
		RetryPolicy: &RetryPolicy{
			InitialInterval: time.Second,
			MaximumAttempts: 5,
		},
	})
	env.ExecuteWorkflow(workflowFn)

	s.True(env.IsWorkflowCompleted())
	s.NoError(env.GetWorkflowError())
	var result string
	_ = env.GetWorkflowResult(&result)
	s.Equal("s1s2", result)
}

```

Error:
```
=== RUN   TestUnitTestSuite/Test_WorkflowRetry
    internal_workflow_testsuite_test.go:2670: 
        	Error Trace:	internal_workflow_testsuite_test.go:2670
        	Error:      	Received unexpected error:
        	            	workflow execution error (type: func1, workflowID: default-test-workflow-id, runID: default-test-run-id): unlucky (type: retry, retryable: true): try again
        	Test:       	TestUnitTestSuite/Test_WorkflowRetry

```

## Specifications

  - Version: v1.8.0
  - Platform: OSX



---

### #482: Workflow query hangs if the temporal workflow execution panics (is not available)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/482 |
| **State** | OPEN |
| **Author** | ingyamilmolinar (ymolinar) |
| **Created** | 2021-06-30 21:40:45.000 UTC (4y 6m ago) |
| **Updated** | 2021-06-30 21:40:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
The client should timeout within a reasonable time and NOT hang if a workflow execution result is unavailable for whatever reason (such as an execution panicking). A sane timeout default and an option to configure it should be provided.

## Actual Behavior
The client hangs while running a query for a workflow execution that is not available (ex: panicking). We tried setting the `QueryRejectCondition` option to different values with no success. The client still hangs forever.

Interestingly, making the same query through `tctl` will timeout in 5 seconds. This means that the `tctl` codebase does have a default timeout of 5 seconds and the Go SDK does not.

## Steps to Reproduce the Problem

  1. Create a workflow that can panic or that can be unavailable for some reason.
  2. Create a query within the workflow
  3. Run the workflow and make it panic
  4. Use the Go client to run the query for that workflow and see how it hangs

## Specifications

  - Version: 1.4.1
  - Platform: Linux 5.7.0-0.bpo.2-amd64 #1 SMP Debian 5.7.10-1~bpo10+1 (2020-07-30) x86_64 GNU/Linux



---

### #346: RequestCancelExternalWorkflow(...).Get(ctx, nil) blocks forever with workflow exits with ErrCanceled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/346 |
| **State** | OPEN |
| **Author** | shaunco (Shaun) |
| **Created** | 2021-01-21 11:25:25.000 UTC (4y 11m ago) |
| **Updated** | 2021-01-21 11:25:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
`RequestCancelExternalWorkflow(...).Get(ctx, nil)` should block until the workflow exits, regardless of what workflow returns.

## Actual Behavior
If the workflow being canceled returns `nil`, `RequestCancelExternalWorkflow(...).Get(ctx, nil)` properly blocks until the canceled workflow has exited, but if the canceled workflow returns `ErrCanceled` then `Get()` never returns. Weirdly, if the `Get(ctx, nil)` is changed to:
```go
var wfErr error
RequestCancelExternalWorkflow(...).Get(ctx, &wfErr)
```
then `Get()` properly returns once the canceled workflow exits, but `wfErr` is always nil.

Sample:
```go
const TestWorkflowId = "MyTestWorkflow"

func StartTestWorkflow(ctx workflow.Context) error {
	cwo := workflow.ChildWorkflowOptions{
		WorkflowIDReusePolicy: enums.WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE,
		ParentClosePolicy: enums.PARENT_CLOSE_POLICY_ABANDON,
		WorkflowID: TestWorkflowId,
		TaskQueue: "MY_TASK_QUEUE",
	}

	ctx = workflow.WithChildOptions(ctx, cwo)

	// Start this receiver's workflow
	future := workflow.ExecuteChildWorkflow(ctx, TestWorkflow)

	var childWE tworkflow.Execution
	err := future.GetChildWorkflowExecution().Get(ctx, &childWE)
	if err != nil {
		return err
	}

	return nil
}

func CancelTestWorkflow(ctx workflow.Context) error {
	// This will block forever, unless TestWorkflow returns nil
	err := workflow.RequestCancelExternalWorkflow(ctx, TestWorkflowId, "").Get(ctx, nil)
	if err != nil {
		return err
	}

	return nil
}

func TestWorkflow(ctx workflow.Context) error {
	// Wait until canceled
	canceled := false
	s := workflow.NewSelector(ctx)
	s.AddReceive(ctx.Done(), func(c workflow.ReceiveChannel, more bool) {
		c.Receive(ctx, nil)
		canceled = true
	})

	// Block until an event signal is received
	s.Select(ctx)

	// If we were canceled, immediately exit
	if canceled {
		// Switch to return nil
		return workflow.ErrCanceled
	}

	// Loop foever
	return workflow.NewContinueAsNewError(ctx, TestWorkflow, nil)
}
```

## Steps to Reproduce the Problem

  1. Use the above code by executing the `StartTestWorkflow` and `CancelTestWorkflow` workflows

## Specifications

  - Version: sdk-gov1.3.0, server v1.5.1
  - Platform: Ubuntu



---

### #335: Original Failure source is lost when ConvertFailureToError invoked

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/335 |
| **State** | OPEN |
| **Author** | wolfy-j (Anton Tsitou) |
| **Created** | 2021-01-12 17:39:34.000 UTC (4y 11m ago) |
| **Updated** | 2021-01-12 17:39:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Expected Behavior
Keep the original source.

## Actual Behavior
Sets GoSDK


---

### #277: Expose access to grpc.ServiceClient so we can create default golang client and get access to underlying GRPC client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/277 |
| **State** | OPEN |
| **Author** | wolfy-j (Anton Tsitou) |
| **Created** | 2020-10-28 18:56:44.000 UTC (5y 2m ago) |
| **Updated** | 2020-10-28 18:56:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
For the PHP SDK, we have to generate proper client code.

**Describe the solution you'd like**
Expose access to grpc.ServiceClient so we can create default golang client and get access to underlying GRPC client.

**Additional context**
Add any other context or screenshots about the feature request here.



---

### #247: Retrieved String Search Attribute includes quotation characters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/247 |
| **State** | OPEN |
| **Author** | alexshtin (Alex Shtin) |
| **Created** | 2020-09-15 00:20:44.000 UTC (5y 3m ago) |
| **Updated** | 2020-09-15 00:20:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | potential-bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

All details are here: https://github.com/temporalio/temporal/issues/524.


---

### #238: RecordActivityHeartbeat signature should be modified to return an error if activity has been canceled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/238 |
| **State** | OPEN |
| **Author** | mastermanu |
| **Created** | 2020-08-25 04:16:30.000 UTC (5y 4m ago) |
| **Updated** | 2020-08-25 04:16:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently RecordActivityHeartbeat doesn't return an error and is basically a "no-op." If the Activity is canceled, the user has to still do a select on the context to see if it is Done. It would be convenient if the RecordActivityHeartbeat invocation did this check internally and returned an error if there were a problem.


---

### #198: Add support for doing backward incompatible changes to workflow and activity function signatures

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/198 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-07-16 18:16:45.000 UTC (5y 5m ago) |
| **Updated** | 2020-07-16 18:16:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
There is no way to change workflow or activity function signature in a nonbackward compatible way.

**Describe the solution you'd like**
A way to support backward-incompatible changes that support callers that use the old signature.

**Describe alternatives you've considered**
Do not provide such capability or force use of input and output structures for activities and workflows.

**Additional context**
https://community.temporal.io/t/migrating-a-workflow-activity-argument-to-a-propagated-context-field/202



---

### #186: Worker reports validation error on processing of transient decision

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/186 |
| **State** | OPEN |
| **Author** | samarabbas (Samar Abbas) |
| **Created** | 2020-07-10 07:17:48.000 UTC (5y 5m ago) |
| **Updated** | 2025-02-04 18:48:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug, potential-bug |
| **Assignees** | Sushisource |
| **Milestone** | Code Complete |

#### Description

## Expected Behavior
No error during processing of transient decision

## Actual Behavior
If transient decision is scheduled after decision failed then go-sdk reports following error during processing:

```
"error": "history_events: premature end of stream, expectedLastEventID=55 but no more events after eventID=53"
```

## Steps to Reproduce the Problem
History of workflow execution resulting in this error:
https://pastebin.com/raw/zjZUNhyV

## Specifications
* Version: 
* Platform:




---

### #125: Remove need to register mocked activity

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/125 |
| **State** | OPEN |
| **Author** | mfateev (Maxim Fateev) |
| **Created** | 2020-05-10 18:50:14.000 UTC (5y 7m ago) |
| **Updated** | 2020-05-10 18:50:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

From Slack:

> I find it quite odd/hard to use in cadence that I have to register an activity before mocking it with On Activity. Right now I register a dummy activity in SetupSuite:
```
func (s *KubernetesWorkflowTestSuite) SetupSuite() {
	activity.RegisterWithOptions(
		func(ctx context.Context, input coreV1NodesListActivityInput) (*coreV1NodesListActivityOutput, error) {
			return nil, nil
		},
		activity.RegisterOptions{Name: coreV1NodesListActivityName},
	)
}
```
> Is this going to change in temporal?


---

### #108: Fix race condition in testWorkflowEnvironmentImpl

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-go/issues/108 |
| **State** | OPEN |
| **Author** | alexshtin (Alex Shtin) |
| **Created** | 2020-04-24 17:56:26.000 UTC (5y 8m ago) |
| **Updated** | 2024-12-17 21:17:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently it bypassed by workaround: https://github.com/temporalio/temporal-go-sdk/blob/master/internal/internal_workflow_testsuite_test.go#L1751 but it must be properly fixed.


