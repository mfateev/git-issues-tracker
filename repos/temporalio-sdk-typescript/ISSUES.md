# temporalio/sdk-typescript - Complete Issue Dump

**Generated:** 2025-12-31
**Total Issues:** 148
**Total Upvotes:** 177
**Total Comments:** 347

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 148 |
| Issues with Upvotes | 40 (27%) |
| Total Upvotes | 177 |
| Total Comments | 347 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 87 |
| bug | 50 |
| documentation | 6 |
| good first issue | 4 |
| ecosystem-and-integrations | 2 |
| next-gen | 2 |
| visibility | 1 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#1334](#1334-feature-request-run-temporal-worker-in-bun) | 46 | 46 | [Feature Request] Run temporal worker in bun |
| [#1755](#1755-feature-request-temporal-integration-for-openai-agents) | 19 | 7 | [Feature Request] Temporal integration for `@openai/agents` |
| [#483](#483-feature-request-nestjs-transport-integration) | 4 | 37 | [Feature Request] NestJS Transport / Integration? |
| [#928](#928-bug-jest-detects-open-handles) | 7 | 26 | [Bug] Jest detects open handles |
| [#1658](#1658-feature-request-add-support-for-opentelemetry-v2) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| [#207](#207-feature-request-enable-in-browser-usage-of-grpc-client) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| [#1615](#1615-bug-cannot-use-temporal-with-nextjs-15-because-workflowtypes-come-from-function-names) | 3 | 14 | [Bug] Cannot use Temporal with NextJS 15 because workflow... |
| [#1499](#1499-feature-request-native-request-batching-to-prevent-received-message-larger-than-max-errors) | 7 | 0 | [Feature Request] Native Request Batching to Prevent "rec... |
| [#933](#933-feature-request-create-a-separate-core-library-for-workflows-that-does-not-include-bundler-deps) | 6 | 2 | [Feature Request] Create a separate "core" library for wo... |
| [#1443](#1443-bug-failure-to-start-ephemeral-server-prevents-shutdown-of-the-process) | 6 | 1 | [Bug] Failure to start ephemeral server prevents shutdown... |
| [#1749](#1749-bug-workflow-task-not-found-after-sdk-upgrade) | 4 | 4 | [Bug] Workflow task not found after SDK upgrade |
| [#1233](#1233-bug-nyc-test-coverage-is-excessively-difficult-to-use-correctly) | 0 | 12 | [Bug] `nyc-test-coverage` is excessively difficult to use... |
| [#1432](#1432-feature-request-simplify-proper-usage-of-asynclocalstorage-in-workflow-context) | 5 | 1 | [Feature Request] Simplify proper usage of `AsyncLocalSto... |
| [#1280](#1280-bundle-using-vite) | 3 | 5 | Bundle using Vite |
| [#868](#868-feature-request-add-lint-rule-that-prevents-query-handlers-from-mutating-state) | 0 | 11 | [Feature Request] Add lint rule that prevents Query handl... |
| [#939](#939-bug-worker-crashes-with-async-hook-stack-has-become-corrupted-on-workflow-task-timeout) | 1 | 8 | [Bug] Worker crashes with "async hook stack has become co... |
| [#1790](#1790-bug-replay-workflow-history-fails-with-nondeterminism-error-child-workflow-ids-do-not-match) | 0 | 9 | [Bug] Replay workflow history fails with nondeterminism e... |
| [#754](#754-feature-request-add-friendly-version-of-listworkflowexecutions) | 1 | 7 | [Feature Request] Add friendly version of listWorkflowExe... |
| [#1621](#1621-feature-request-include-musl-based-shared-library-in-package) | 4 | 0 | [Feature Request] Include musl-based shared library in pa... |
| [#1587](#1587-bug-using-async-functions-degrades-performance) | 1 | 6 | [Bug] Using async functions degrades performance |
| [#1557](#1557-feature-request-allow-opt-out-of-workflow-isolation) | 0 | 8 | [Feature Request] allow opt-out of workflow isolation |
| [#1362](#1362-feature-request-worker-runreplayhistory-should-accept-a-serialized-history-object-fetched-using-fetchhistory) | 2 | 4 | [Feature Request] Worker.runReplayHistory() should accept... |
| [#1292](#1292-bug-esm-custom-payload-converters-cannot-be-loaded) | 1 | 6 | [Bug] ESM Custom payload converters cannot be loaded |
| [#1021](#1021-feature-request-async-generator-for-cancellationscope) | 0 | 8 | [Feature Request] async generator for cancellationScope |
| [#1866](#1866-bug-signal-caused-condition-to-fail-with-cancelledfailure-on-1-14-0) | 1 | 5 | [Bug] Signal caused `condition` to fail with `CancelledFa... |
| [#1325](#1325-bug-throwing-an-exception-from-a-workflow-may-result-in-failed-to-activate-workflow-due-to-datacloneerror) | 2 | 3 | [Bug] Throwing an exception from a workflow may result in... |
| [#1008](#1008-feature-request-provide-more-output-when-webpack-fails) | 2 | 3 | [Feature Request] Provide more output when webpack fails |
| [#665](#665-feature-request-allow-for-easy-mocking) | 0 | 7 | [Feature Request] Allow for easy mocking  |
| [#1351](#1351-feature-request-support-updating-schedule-by-cronexpression) | 2 | 2 | [Feature Request] Support updating schedule by cronExpres... |
| [#915](#915-feature-request-emit-metrics-from-client-connection) | 3 | 0 | [Feature Request] Emit metrics from client connection |
| [#1668](#1668-bug-common-package-not-importing-types-ms) | 2 | 1 | [Bug] common package not importing @types/ms |
| [#1663](#1663-bug-can-t-use-structuredclone-in-workflow-code) | 0 | 5 | [Bug] Can't use structuredClone in workflow code |
| [#1458](#1458-feature-request-support-passing-preloaded-data-converters-to-client) | 2 | 1 | [Feature Request] Support passing preloaded data converte... |
| [#1308](#1308-chore-add-tests-to-assert-proper-type-rules-on-all-user-defined-function-with-args-apis) | 0 | 5 | [Chore] Add tests to assert proper type rules on all "use... |
| [#1800](#1800-feature-request-provide-a-way-to-distinguish-error-types-in-logs-from-typescript-sdk-errors-lose-type-info-across-worker-workflow) | 2 | 0 | [Feature Request] Provide a way to distinguish error type... |
| [#1738](#1738-bug-opentelemetry-tracestate-is-handled-properly-in-makeworkflowexporter) | 0 | 4 | [Bug] opentelemetry traceState is handled properly in  ma... |
| [#1718](#1718-feature-request-lazily-load-webpack) | 0 | 4 | [Feature Request] Lazily load webpack |
| [#1177](#1177-feature-request-forward-core-s-metrics-to-typescript-land) | 0 | 4 | [Feature Request] Forward Core's metrics to TypeScript-land |
| [#564](#564-bug-heartbeat-details-should-be-array) | 0 | 4 | [Bug] Heartbeat details should be array? |
| [#561](#561-docs-versionize-documentation) | 0 | 4 | [Docs] Versionize documentation |
| [#472](#472-feature-request-eslint-plugin) | 0 | 4 | [Feature Request] eslint plugin |
| [#1772](#1772-extractsourcemap-takes-a-huge-amount-of-ram-on-boot) | 0 | 3 | extractSourceMap takes a huge amount of RAM on boot |
| [#1740](#1740-bug-webpackconfighook-doesn-t-seem-to-suppress-all-webpack-output) | 1 | 1 | [Bug] webpackConfigHook doesn't seem to suppress all webp... |
| [#1601](#1601-result-of-env-run-is-not-inferring-type-returning-unknown) | 0 | 3 | result of env.run is not inferring type, returning `unknown` |
| [#1489](#1489-bug-critical-dependency-the-request-of-a-dependency-is-an-expression) | 0 | 3 | [Bug] Critical dependency: the request of a dependency is... |
| [#1332](#1332-feature-request-testworkflowenvironment-should-support-non-spawned-servers) | 1 | 1 | [Feature Request] `TestWorkflowEnvironment` should suppor... |
| [#1309](#1309-bug-comment-unclear-on-when-activities-are-cancelled-after-calling-worker-shutdown) | 0 | 3 | [Bug] Comment unclear on when activities are cancelled af... |
| [#998](#998-feature-request-add-built-in-support-for-context-propagators) | 0 | 3 | [Feature Request] Add built-in support for context propag... |
| [#740](#740-feature-request-add-childworkflowhandle-cancel) | 1 | 1 | [Feature Request] Add `ChildWorkflowHandle.cancel()` |
| [#1864](#1864-feature-request-update-ai-sdk-integration-to-v6) | 1 | 0 | [Feature Request] Update AI SDK integration to v6 |
| [#1859](#1859-bug-high-cpu-usage-with-otel-instrumentation-when-updating-to-v1-13-x) | 0 | 2 | [Bug] High CPU usage with OTel instrumentation when updat... |
| [#1796](#1796-bug-changes-in-type-inference-of-activity-return-type-in-sdk-1-12-2) | 1 | 0 | [Bug] Changes in type inference of activity return type i... |
| [#1744](#1744-bug-nde-replaying-nested-promises) | 1 | 0 | [Bug] NDE replaying nested promises |
| [#1736](#1736-feature-request-mask-sanitize-client-sensitive-data-references) | 1 | 0 | [Feature Request] Mask/sanitize client sensitive data ref... |
| [#1733](#1733-bug-retrypolicy-maximumattempt-0-throws-while-it-is-documented-as-a-valid-value-for-unlimited) | 0 | 2 | [Bug] `RetryPolicy.maximumAttempt === 0` throws, while it... |
| [#1700](#1700-feature-request-executechild-to-use-passed-headers) | 1 | 0 | [Feature Request] executeChild to use passed headers |
| [#1675](#1675-feature-request-support-aggregateerror) | 1 | 0 | [Feature Request] support AggregateError |
| [#1594](#1594-bug-first-schedule-action-started-using-triggerimmediately-flag-does-not-honor-the-schedule-s-overlap-policy) | 1 | 0 | [Bug] First schedule action started using triggerImmediat... |
| [#1580](#1580-bug-workflows-getting-stuck-after-cancellation-spurious-workflowtaskfailed-errors) | 0 | 2 | [Bug] Workflows getting stuck after cancellation (spuriou... |
| [#1578](#1578-bug-worker-fails-to-start-if-node-option-abort-on-uncaught-exception-is-set) | 1 | 0 | [Bug] Worker fails to start if Node option --abort-on-unc... |
| [#1537](#1537-bug-workflow-lifecycle-logging-is-misleading) | 0 | 2 | [Bug] Workflow lifecycle logging is misleading |
| [#1389](#1389-bug-inconsistent-type-definition-of-workflow-arguments) | 0 | 2 | [Bug] Inconsistent Type Definition of Workflow Arguments |
| [#1375](#1375-feature-request-queueing-a-workflow) | 0 | 2 | [Feature Request] Queueing a workflow |
| [#1144](#1144-feature-request-add-support-for-capturing-workflow-test-coverage-data-using-jest) | 0 | 2 | [Feature Request] Add support for capturing Workflow test... |
| [#1113](#1113-feature-request-create-a-npx-temporalio-doctor-command) | 1 | 0 | [Feature Request] Create a `npx @temporalio/doctor` command |
| [#1112](#1112-bug-workflow-bundler-does-not-deny-usage-of-the-process-global-variable) | 0 | 2 | [Bug] Workflow Bundler does not deny usage of the `proces... |
| [#982](#982-incompatible-with-allowsyntheticdefaultimports-set-to-false) | 0 | 2 | Incompatible with allowSyntheticDefaultImports set to false |
| [#959](#959-bug-broken-links-and-hierarchy) | 0 | 2 | [Bug] Broken links and hierarchy |
| [#813](#813-feature-request-less-boiler-plate) | 0 | 2 | [Feature Request] Less boiler plate. |
| [#783](#783-feature-request-better-nx-support) | 1 | 0 | [Feature Request] Better Nx support |
| [#773](#773-bug-payloadtojson-from-from-temporalio-common-lib-proto-utils-does-not-generate-vaild-proto-json) | 0 | 2 | [Bug] payloadToJSON from from @temporalio/common/lib/prot... |
| [#470](#470-feature-request-terminatedfailure-missing-details) | 0 | 2 | [Feature Request] TerminatedFailure missing "details" |
| [#1756](#1756-bug-hostname-is-overly-restrictive) | 0 | 1 | [Bug] Hostname is overly restrictive |
| [#1661](#1661-feature-request-serialization-context-for-codecs-and-converters) | 0 | 1 | [Feature Request] Serialization context for codecs and co... |
| [#1660](#1660-bug-resource-exhausted-error-while-describing-workflow-schedule) | 0 | 1 | [Bug] RESOURCE_EXHAUSTED error while describing workflow ... |
| [#1656](#1656-bug-workflow-type-is-incorrectly-deduced-when-using-bind-on-workflow-function) | 0 | 1 | [Bug] Workflow type is incorrectly deduced when using `bi... |
| [#1652](#1652-bug-throw-on-usage-of-workflow-apis-that-modify-state-from-non-replayable-context) | 0 | 1 | [Bug] Throw on usage of Workflow APIs that modify state f... |
| [#1431](#1431-feature-request-make-it-easier-to-diagnose-failures-to-connect-to-temporal-cloud-due-to-incorrect-serverrootcacertificate) | 0 | 1 | [Feature Request] Make it easier to diagnose failures to ... |
| [#1331](#1331-feature-request-schedule-creation-should-create-tracing-span-by-default) | 0 | 1 | [Feature Request] Schedule creation should create tracing... |
| [#1274](#1274-bug-error-not-serialized-fully-when-sent-to-sinks) | 0 | 1 | [Bug] Error not serialized fully when sent to Sinks |
| [#1222](#1222-feature-request-expose-originalexecutionrunid-in-workflowinfo) | 0 | 1 | [Feature Request] Expose `originalExecutionRunId` in `wor... |
| [#1059](#1059-docs-types-are-missing-in-the-left-nav-bar-of-the-exported-api-documentation) | 0 | 1 | [docs] Types are missing in the left nav bar of the expor... |
| [#1007](#1007-feature-request-expose-currently-configured-payload-converter-to-workflow-code) | 0 | 1 | [Feature Request] Expose currently configured payload con... |
| [#958](#958-feature-request-improve-experience-of-including-workflow-modules-that-have-a-browser-field) | 0 | 1 | [Feature Request] Improve experience of including workflo... |
| [#938](#938-feature-request-formally-validate-public-api-modification-between-releases) | 0 | 1 | [Feature Request] Formally validate public API modificati... |
| [#776](#776-feature-request-expose-internal-non-workflow-common-functionality) | 0 | 1 | [Feature Request] Expose internal-non-workflow-common fun... |
| [#739](#739-docs-rank-functions-higher-in-search) | 0 | 1 | [Docs] Rank functions higher in search |
| [#668](#668-feature-request-provide-workflowinfo-initiator) | 0 | 1 | [Feature Request] Provide WorkflowInfo.initiator? |
| [#384](#384-feature-request-add-actual-span-time-to-spans-create-by-workflow-otel-interceptors) | 0 | 1 | [Feature Request] Add actual span time to spans create by... |
| [#1867](#1867-feature-request-per-worker-logger) | 0 | 0 | [Feature Request] Per-Worker Logger |
| [#1862](#1862-feature-request-importing-workflow-into-activity-dependency-causes-grpc-failed-to-connect-before-the-deadline-error) | 0 | 0 | [Feature Request] importing workflow into activity depend... |
| [#1860](#1860-bug-performance-regression-from-1-13-1-1-13-2) | 0 | 0 | [Bug] Performance regression from 1.13.1 -> 1.13.2 |
| [#1858](#1858-bug-unable-to-import-reflect-metadata-within-workflow-bundle) | 0 | 0 | [Bug] unable to import reflect-metadata within workflow b... |
| [#1854](#1854-feature-request-correct-docs-for-otelcollectorexporter) | 0 | 0 | [Feature Request] Correct docs for OtelCollectorExporter |
| [#1851](#1851-feature-request-support-non-workflow-activities) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#1850](#1850-feature-request-implement-otel-interceptors-v1-as-plugin) | 0 | 0 | [Feature Request] Implement OTel interceptors v1 as Plugin |
| [#1843](#1843-default-maxcachedworkflows-calculation-doesn-t-account-for-vm-isolate-memory-being-outside-v8-heap) | 0 | 0 | Default maxCachedWorkflows calculation doesn't account fo... |
| [#1838](#1838-bug-workflowexecutionalreadystartederror-should-contain-runid-if-provided-by-server) | 0 | 0 | [Bug] `WorkflowExecutionAlreadyStartedError` should conta... |
| [#1824](#1824-feature-request-allow-overriding-of-the-worker-deployment-version-when-invoking-a-child-workflow) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployme... |
| [#1782](#1782-feature-request-ensure-tests-exist-to-confirm-custom-slot-supplier-slot-info-has-proper-fields) | 0 | 0 | [Feature Request] Ensure tests exist to confirm custom sl... |
| [#1779](#1779-bug-temporalio-interceptors-opentelemetry-otel-bypasses-a-required-sdk-component) | 0 | 0 | [Bug] `@temporalio/interceptors-opentelemetry` OTEL bypas... |
| [#1775](#1775-feature-request-support-for-creating-v7-uuids-from-within-workflow-tasks) | 0 | 0 | [Feature Request] Support for creating v7 UUIDs from with... |
| [#1739](#1739-feature-request-add-activitycontext-workershuttingdown) | 0 | 0 | [Feature Request] Add `ActivityContext.workerShuttingDown` |
| [#1722](#1722-feature-request-include-error-details-on-every-errors-thrown-from-client-api) | 0 | 0 | [Feature Request] Include error details on every errors t... |
| [#1721](#1721-bug-error-thrown-from-client-s-update-with-start-doesn-t-show-proper-message) | 0 | 0 | [Bug] Error thrown from Client's Update-with-Start doesn'... |
| [#1717](#1717-bug-protobuf-payload-converter-is-broken-after-upgrading-to-protobufjs-7-5-2) | 0 | 0 | [Bug] Protobuf Payload Converter is broken after upgradin... |
| [#1716](#1716-typescript-worker-versioning-high-level-client) | 0 | 0 | [TypeScript] Worker Versioning high level client |
| [#1715](#1715-if-a-serializable-value-is-provided-as-a-searchattribute-serialize-it-instead-of-throwing-the-error-searchattribute-values-must-arrays-of-strings-numbers-booleans-or-dates-the-value-at-index-0-is-of-type-object) | 0 | 0 | If a serializable value is provided as a SearchAttribute,... |
| [#1713](#1713-feature-request-pass-webpack-obj-as-the-second-parameter-when-calling-webpackconfighook) | 0 | 0 | [Feature Request] Pass webpack obj as the second paramete... |
| [#1710](#1710-feature-request-better-type-inference-for-mockactivityenvironment-run) | 0 | 0 | [Feature Request] Better type inference for `MockActivity... |
| [#1703](#1703-feature-request-complete-work-on-supporting-client-over-nativeconnection) | 0 | 0 | [Feature Request] Complete work on supporting `Client` ov... |
| [#1702](#1702-bug-test-suite-timeout-on-first-run) | 0 | 0 | [Bug] Test suite timeout on first run |
| [#1696](#1696-feature-request-otel-exporter-error-handling) | 0 | 0 | [Feature Request] Otel exporter error handling |
| [#1687](#1687-bug-temporal-local-env-cannot-be-connected-in-unit-tests) | 0 | 0 | [Bug] Temporal local env cannot be connected in unit tests |
| [#1673](#1673-feature-request-add-support-for-batched-result-retrieval-executions) | 0 | 0 | [Feature Request] Add support for batched result retrieva... |
| [#1653](#1653-bug-broken-documentation-link) | 0 | 0 | [Bug] Broken Documentation Link |
| [#1647](#1647-feature-request-add-summary-to-nexus-operation) | 0 | 0 | [Feature Request] Add summary to Nexus operation |
| [#1635](#1635-feature-request-rehydrate-typedsearchattributes-for-sinks-or-provide-workflowinfo-variant) | 0 | 0 | [Feature Request] Rehydrate TypedSearchAttributes for sin... |
| [#1626](#1626-expose-workflow-cancel-cause-reason) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#1616](#1616-feature-request-add-memoization-support-to-the-patched-api) | 0 | 0 | [Feature Request] Add memoization support to the`patched(... |
| [#1549](#1549-feature-request-auto-skip-time-in-time-skipping-testing-environment-when-waiting-on-update-result) | 0 | 0 | [Feature Request] Auto-skip time in time-skipping testing... |
| [#1542](#1542-feature-request-allow-update-validators-to-be-async) | 0 | 0 | [Feature Request] Allow Update Validators to be async |
| [#1512](#1512-bug-payload-converter-error-can-crash-worker) | 0 | 0 | [Bug] Payload converter error can crash worker |
| [#1486](#1486-review-use-of-untrackpromise-in-update-implementation) | 0 | 0 | Review use of `untrackPromise` in update implementation |
| [#1472](#1472-feature-request-add-website-documentation-for-updates) | 0 | 0 | [Feature Request] Add website documentation for updates |
| [#1420](#1420-feature-request-clean-api-to-intentionally-fail-an-activity-in-long-polling-patterns) | 0 | 0 | [Feature Request] Clean API to intentionally fail an acti... |
| [#1418](#1418-feature-request-failures-thrown-from-within-the-update-handler-should-be-able-to-fail-the-workflow) | 0 | 0 | [Feature Request] Failures thrown from within the update ... |
| [#1415](#1415-chore-update-repo-to-npm-7-workspaces) | 0 | 0 | [chore] Update repo to NPM 7 workspaces |
| [#1412](#1412-feature-request-client-replacement-in-worker) | 0 | 0 | [Feature Request] Client replacement in worker |
| [#1405](#1405-bug-check-worker-code-for-unsafe-type-assertions) | 0 | 0 | [Bug] Check worker code for unsafe type assertions |
| [#1358](#1358-feature-request-configurable-workflow-failure-exception-types) | 0 | 0 | [Feature Request] Configurable workflow failure exception... |
| [#1337](#1337-feature-request-add-workflow-update-tests-to-nightly-suite) | 0 | 0 | [Feature Request] Add workflow update tests to nightly suite |
| [#1289](#1289-feature-request-allow-manual-pagination-when-listing-workflows) | 0 | 0 | [Feature Request] Allow manual pagination when listing wo... |
| [#1258](#1258-feature-request-provide-nicer-error-messages-on-tls-ca-cert-not-found-errors) | 0 | 0 | [Feature Request] Provide nicer error messages on TLS CA ... |
| [#1174](#1174-bug-sdk-should-drop-signals-for-which-it-cannot-decode-payloads) | 0 | 0 | [Bug] SDK should drop signals for which it cannot decode ... |
| [#1139](#1139-feature-request-temporalfailure-from-converters-and-codecs-should-be-able-to-fail-the-workflow-not-task) | 0 | 0 | [Feature Request] TemporalFailure from converters and cod... |
| [#1054](#1054-add-telemetryoptions-logging-object-format-to-api-ref) | 0 | 0 | Add `TelemetryOptions.logging` object format to API ref |
| [#1010](#1010-validate-single-version-of-packages) | 0 | 0 | Validate single version of packages |
| [#962](#962-feature-request-allow-creating-patches-before-the-workflow-has-started) | 0 | 0 | [Feature Request] Allow creating patches before the workf... |
| [#945](#945-feature-request-add-client-interceptor-for-list-and-fetch-history) | 0 | 0 | [Feature Request] Add client interceptor for `list` and `... |
| [#830](#830-feature-request-remove-sourcemap-and-sourcemappath) | 0 | 0 | [Feature Request] Remove `sourceMap` and `sourceMapPath` |
| [#828](#828-feature-request-throw-when-heartbeat-is-called-from-local-activities) | 0 | 0 | [Feature Request] Throw when `heartbeat()` is called from... |
| [#730](#730-docs-make-method-overloads-more-obvious-in-docs) | 0 | 0 | [Docs] Make method overloads more obvious in docs |
| [#555](#555-feature-request-remote-codec-converter) | 0 | 0 | [Feature Request] Remote codec converter |
| [#514](#514-feature-request-run-headers-through-codec) | 0 | 0 | [Feature Request] Run headers through codec |
| [#444](#444-feature-request-warn-user-when-sending-unregistered-signal) | 0 | 0 | [Feature Request] Warn user when sending unregistered signal |
| [#417](#417-feature-request-export-sdk-version) | 0 | 0 | [Feature Request] Export SDK version |
| [#360](#360-make-tracing-tags-consistent-across-sdks) | 0 | 0 | Make tracing tags consistent across SDKs |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

### #1334: [Feature Request] Run temporal worker in bun

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1334 |
| **State** | OPEN |
| **Author** | Code2Life (Joey Yang) |
| **Created** | 2024-01-10 08:59:55.000 UTC (1y 11m ago) |
| **Updated** | 2025-12-22 04:23:02.000 UTC |
| **Upvotes** | 46 |
| **Comments** | 46 |
| **Priority Score** | 138 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 46 |

#### Description

### Bun worker can not work Issue

I tried to use bun as temporal worker, when running temporal client it looked perfect, the workflow created with HTTP2+gRPC, which just supported in bun.js last month.

But when I ran temporal worker it can not work, even bun.sh had implement v8 compatible vm context sandbox. Firstly I found this issue:
![image](https://github.com/temporalio/sdk-typescript/assets/14833440/9bae6fe2-28bc-4587-beb5-196f5dfdaabb)

Then, i tried to comment out the createHook code block, this error disappeared, but the core-bridge was broken

```
2024-01-10T08:41:16.131Z [INFO] webpack 5.89.0 compiled successfully in 486 ms
2024-01-10T08:41:16.132Z [INFO] Workflow bundle created { size: '0.74MB' }
2024-01-10T08:41:16.284520Z  INFO temporal_sdk_core::worker: Initializing worker task_queue=hello-world namespace=default
thread '<unnamed>' panicked at 'Hash table capacity overflow', /Users/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/hashbrown-0.13.2/src/raw/mod.rs:90:40
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
2024-01-10T08:41:16.286Z [INFO] Worker state changed { state: 'RUNNING' }
2024-01-10T08:41:16.290075Z  INFO next_workflow_activation: temporal_sdk_core::worker: Initiated shutdown task_queue=hello-world namespace=default task_queue=hello-world
2024-01-10T08:41:16.291Z [INFO] Worker state changed { state: 'DRAINED' }
2024-01-10T08:41:16.291Z [INFO] Worker state changed { state: 'STOPPED' }
thread 'core' panicked at 'Workflow processing terminates cleanly: Error joining workflow processing thread: Ok("Hash table capacity overflow")', sdk-core/core/src/worker/mod.rs:409:14
 96 |         }
 97 |         this.shutDownRequested = true;
 98 |         await this.send({ type: 'destroy' });
 99 |         const exitCode = await this.workerThread.terminate();
100 |         if (exitCode !== exports.TERMINATED_EXIT_CODE) {
101 |             throw new core_bridge_1.UnexpectedError(`Failed to terminate Worker thread, exit code: ${exitCode}`);
                                      ^
```

### Additional context

Both Temporal and bun are really amazing. Since bun provide many out-of-box features and better performance than node.js, It would be great if temporal sdk can support bun worker. 


#### Comments (46)

<details>
<summary><strong>izakfilmalter</strong> commented on 2024-01-11 17:40:38.000 UTC</summary>

Would love to use bun instead!!!!

Reactions: 👍 8

</details>

<details>
<summary><strong>bergundy</strong> commented on 2024-01-12 19:19:17.000 UTC</summary>

We know what we need to do to get the SDK working on bun but it'll be a significant lift and may not be prioritized just yet.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2024-01-12 19:19:43.000 UTC</summary>

I too hope we will support more JS runtimes including bun and deno.

Reactions: 👍 3

</details>

<details>
<summary><strong>brettgoulder</strong> commented on 2024-01-26 22:19:51.000 UTC</summary>

nodejs recommends [against using createHook](https://nodejs.org/api/async_hooks.html#async-hooks):

[Stability: 1](https://nodejs.org/api/documentation.html#stability-index) - Experimental. Please migrate away from this API, if you can. We do not recommend using the [createHook](https://nodejs.org/api/async_hooks.html#async_hookscreatehookcallbacks), [AsyncHook](https://nodejs.org/api/async_hooks.html#class-asynchook), and [executionAsyncResource](https://nodejs.org/api/async_hooks.html#async_hooksexecutionasyncresource) APIs as they have usability issues, safety risks, and performance implications. Async context tracking use cases are better served by the stable [AsyncLocalStorage](https://nodejs.org/api/async_context.html#class-asynclocalstorage) API. If you have a use case for createHook, AsyncHook, or executionAsyncResource beyond the context tracking need solved by [AsyncLocalStorage](https://nodejs.org/api/async_context.html#class-asynclocalstorage) or diagnostics data currently provided by [Diagnostics Channel](https://nodejs.org/api/diagnostics_channel.html), please open an issue at https://github.com/nodejs/node/issues describing your use case so we can create a more purpose-focused API.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2024-02-01 18:36:48.000 UTC</summary>

The SDK uses v8 promise hooks `createHook`, not async hooks.
We need this functionality for showing workflow stack traces.

</details>

<details>
<summary><strong>loicnestler</strong> commented on 2024-03-30 20:47:24.000 UTC</summary>

Any updates on this? 👀 

Reactions: 👀 1

</details>

<details>
<summary><strong>maurovanetti</strong> commented on 2024-04-03 08:47:57.000 UTC</summary>

In case someone wondered: No, Bun 1.1.0 (out since Monday) does not support Temporal yet. :disappointed: 

```
error: node:v8 createHook is not yet implemented in Bun.
      at new NotImplementedError (internal:shared:20:28)
      at internal:shared:3:70
      at node:v8:3:46
      at node:v8:77:30
      at setPromiseHook (/home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/vm-shared.js:208:33)
      at install (/home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/vm-shared.js:140:13)
      at /home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js:139:8
      at create (/home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js:138:21)
      at /home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:10:36
      at handleRequest (/home/mauro/Codice/in4matic/bun/temporal/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:6:35)
```

</details>

<details>
<summary><strong>hscj87</strong> commented on 2024-06-10 09:13:50.000 UTC</summary>

> nodejs recommends [against using createHook](https://nodejs.org/api/async_hooks.html#async-hooks):
> 
> [Stability: 1](https://nodejs.org/api/documentation.html#stability-index) - Experimental. Please migrate away from this API, if you can. We do not recommend using the [createHook](https://nodejs.org/api/async_hooks.html#async_hookscreatehookcallbacks), [AsyncHook](https://nodejs.org/api/async_hooks.html#class-asynchook), and [executionAsyncResource](https://nodejs.org/api/async_hooks.html#async_hooksexecutionasyncresource) APIs as they have usability issues, safety risks, and performance implications. Async context tracking use cases are better served by the stable [AsyncLocalStorage](https://nodejs.org/api/async_context.html#class-asynclocalstorage) API. If you have a use case for createHook, AsyncHook, or executionAsyncResource beyond the context tracking need solved by [AsyncLocalStorage](https://nodejs.org/api/async_context.html#class-asynclocalstorage) or diagnostics data currently provided by [Diagnostics Channel](https://nodejs.org/api/diagnostics_channel.html), please open an issue at https://github.com/nodejs/node/issues describing your use case so we can create a more purpose-focused API.

How to disable using createHook to avoid this error?

</details>

<details>
<summary><strong>andreyvital</strong> commented on 2024-06-19 13:35:39.000 UTC</summary>

I have the same question as @hscj87 and the same request as the original issue text. Commenting just to bump up this thread.

</details>

<details>
<summary><strong>axe-me</strong> commented on 2024-09-22 05:55:43.000 UTC</summary>

it would be great to be able to run temporal worker with bun!

</details>

<details>
<summary><strong>tenkoverse</strong> commented on 2024-10-02 22:59:51.000 UTC</summary>

@bergundy Deno 2 has removed promiseHooks stubs (https://github.com/denoland/deno/issues/25977) to provide an environment where temporals check for promiseHooks is skipped https://github.com/temporalio/sdk-typescript/blob/faa64225a7f57154931a38c1fe612fc6520943b2/packages/worker/src/workflow/vm-shared.ts#L199-L202

I now have temporal clients and workers successfully working in deno 2. 

I would love to know the implications for having an enviroment where there are no promise hooks. What do I lose using deno to run a temporal worker instead of using node (with version >=16.14)

Reactions: 👀 7

</details>

<details>
<summary><strong>bergundy</strong> commented on 2024-10-03 18:12:43.000 UTC</summary>

We use promise hooks to capture stack traces that are used in the stack trace query feature that gives visibility into where your workflow is blocked at any given point.

Reactions: 👍 3

</details>

<details>
<summary><strong>zammitjames</strong> commented on 2025-01-18 20:29:01.000 UTC</summary>

+1 - not supporting bun has forced us to look elsewhere.

</details>

<details>
<summary><strong>maurovanetti</strong> commented on 2025-01-23 17:43:10.000 UTC</summary>

**Bun 1.2** is out today. Finally, they declare support for `http2`!

I'm trying to set up Temporal with Bun 1.2 and it seems to go further than before. I have connected a client to my Temporal server, and started a workflow. Unfortunately, the NativeConnection for the worker is hanging forever, though, with no error raised.

Has anyone managed to go beyond this?

Reactions: 👍 2

</details>

<details>
<summary><strong>cortopy</strong> commented on 2025-01-26 17:29:03.000 UTC</summary>

Mine also hangs, although I get to see a very cryptic log entry `error: Error (via napi)`. I assume it's something to do with node api compat, but this just leaves me guessing

Reactions: 😕 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-02-07 16:02:25.000 UTC</summary>

I think the `@temporalio/client` package works fine at this point, though I really have to point out that we do not perform regular testing for that runtime. Using this setup in production would not be advisable.

Regarding Worker support, we certainly hope to get there, but we are not actively working in that direction just now. It is simply too early for that.

For example, the "NativeConnection hanging forever" and "error: Error (via napi)" symptoms mentioned above are due to a difference in [how bun checks the error argument on napi_throw](https://github.com/oven-sh/bun/blob/1fa42d81af0806cf06ca9dc050bf06046c3a4b41/src/bun.js/bindings/napi.cpp#L1644-L1659) vs [what's done in Node](https://github.com/nodejs/node/blob/5fad0b93667ffc6e4def52996b9529ac99b26319/src/js_native_api_v8.cc#L1924-L1934). That breaks the method that [Neon Binding](https://github.com/neon-bindings/neon/blob/7f4feb10631cfd3e654112d42a3b5ed472f851e8/crates/neon/src/sys/no_panic.rs#L135-L137) uses to check either it is safe to call back into the JS environment at that time.

It is not worth fixing that issue in upstream projects just yet. Bun's team is already doing some awesome bug hunting work on their NAPI implementation. See for example https://github.com/oven-sh/bun/pull/14501 and https://github.com/oven-sh/bun/pull/16230. I'd expect a few rounds like these, so let's give them time to complete their efforts first, and then for other key dependencies to stabilize.

Reactions: 👍 9

</details>

<details>
<summary><strong>harrytran998</strong> commented on 2025-03-25 14:41:55.000 UTC</summary>

@mjameswh So do you have any progress here? The client can fire but the worker cannot exec now. Thanks

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-04-08 16:53:12.000 UTC</summary>

bump, would love to jump over to Bun with projects, that's the last blocker though 🙈 

Reactions: ❤️ 5

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-04-26 23:08:05.000 UTC</summary>

^^^ big tnx to @x04. We're getting further with this.

Running bun on canary does enable the worker, however when a workflow is picked up the following error is thrown:
```
2025-04-26T23:03:11.807Z [ERROR] Failed to process Worklow Activation {
  sdkComponent: 'worker',
  taskQueue: 'hello-world',
  runId: '01967457-2a90-7845-a719-e13197b85375',
  namespace: 'default',
  workflowId: 'test',
  workflowType: 'testWorkflow',
  error: TypeError: undefined is not an object (evaluating 'this.activator.getAndResetSinkCalls')
      at getAndResetSinkCalls (/temporaltest/node_modules/@temporalio/worker/lib/workflow/vm-shared.js:262:21)
      at getAndResetSinkCalls (/temporaltest/node_modules/@temporalio/worker/lib/workflow/vm-shared.js:261:34)
      at handleRequest (/temporaltest/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:61:42)
      at handleRequest (/temporaltest/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:23:32)
      at <anonymous> (/temporaltest/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:92:38)
      at <anonymous> (/temporaltest/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:90:33),
  workflowExists: true
}
```

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-04-27 10:37:22.000 UTC</summary>

Adding on top of the previous comment.

I have set up a new project using the [core application docs](https://docs.temporal.io/develop/typescript/core-application#install-a-temporal-sdk)

I used the following command:
```sh
npx @temporalio/create@1.11.7 testbundle -s hello-world --sdk-version 1.11.7 --no-git-init
```

I ran the worker with Bun:
```sh
bun run src/worker.ts
```

And ran the client to initiate a workflow:
```sh
bun run src/client.ts
```

The workflow isn't being picked up by the worker. (it gets assigned, but no actual work is being done).
No errors are visible in worker's stdout.

Reactions: 👍 2

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-05-04 17:15:29.000 UTC</summary>

Got a little bit further by modifying the `ReusableVMWorkflowCreator.createWorkflow` method (the `setActivatorUntyped` does not always work for some reason - as in: does not set the activator correctly).

Got blocked however at the last final step -> workflow's execution cannot be completed 🤷 -- the logs are silent.
The only suspicion I have is, that there is something wrong within this handler: 
```ts
await this.nativeWorker.completeWorkflowActivation(completion.buffer.slice(completion.byteOffset))
``` 
but I can not easily debug it.

I have also tried with running the latest code (post January's 1.11.7 release), but ended up with the same issues.

Bun version: 1.2.11


![Image](https://github.com/user-attachments/assets/8a78d917-f7c8-4578-a717-7a0f8507014a)

Reactions: 👍 1

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-05-06 15:30:11.000 UTC</summary>

Update:

Bun version: 1.2.12 didn't change a thing (workflow's execution still cannot be completed)

// EDIT 2025-05-13:

Bun version: 1.2.13, same as above

// EDIT 2025-05-23

Bun version: 1.2.14, same as above

// EDIT 2025-05-28

Bun version: 1.2.15, same as above

Tested both SDK versions: 1.11.7 & 1.11.8

Reactions: 👍 9

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-30 05:13:16.000 UTC</summary>

Thanks a lot @d2201 for all this testing, and thanks @x04 for pushing the NAPI fix to bun!

I unfortunately can't put time investigating this myself just now, but really appreciate the community effort.

@d2201: Regarding your tests above, there are quite a lot of moving parts involved.

To simplify things a bit, I'd suggest trying to add `debugMode: true` to your worker options. That will force the worker into single thread mode, thus avoiding use of the `node:worker_threads` module.

You should also set `reuseV8Context: false`, which will force creation of a distinct vm context for each workflow execution. That execution mode is known to be significantly less efficient and increases memory usage (or at least, that's true in Node; I wouldn't be surprised if performance profile turns out to be very different in Bun and Deno), but follows a much simpler execution model that is less likely to trigger edge cases in a "node-compatibility" implementation.

Also make sure to set Runtime's log level to `TRACE` and turn on Core's log forwarding:

```
    Runtime.install({
      logger: new DefaultLogger('TRACE'),
      telemetryOptions: { logging: { forward: {}, filter: makeTelemetryFilterString({ core: 'TRACE' }) } },
    });
```

You may also want to experiment with the code on the main branch of the TS SDK repo, rather than the 1.11.8. Several key components of the SDK went through some significant work, including a major refactor of the native bridge layer, and multiple significant fixes in the Worker and Workflow Sandbox.

I can't promise that these changes will immediately get us closer to the goal of running a Temporal Worker on Bun, and can't exclude the possibility that they might even add some more challenges due to the use of some additional NAPI features… But I honestly hope that the more robust design and better error handling will make it easier to progress forward.

While on that branch, you may also try setting environment variables `TEMPORAL_TRACE_NATIVE_CALLS=true` and `RUST_BACKTRACE=full`. Beware that the Trace Native Calls env variable may produce a huge amount of logs; it is really meant only for low level debugging of the bridge layer, but at this point, that's indeed what you are doing.

Reactions: ❤️ 5

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-05-31 23:16:36.000 UTC</summary>

@mjameswh Thank you for this summary. It helped me a lot.

I think it's not the NAPI issue anymore.

## Environment information

```
SDK (commit: caae0a4eec4ed489c53f102b04f7d4afde318c5b) (1.12.0-rc)
Node v22.4.0
Bun v1.2.15
```

## Investigation results

The debug helped me with understanding what's going on (at least to some degree). It all boils down (in my opinion) to the Bun's compatibility with `node:vm`.

### So what's happening?

There seems to be some sort of race condition happening.

High-level of how Node does the part of completion:
```
- runs `activate` function within the workflow vm context
- workflow gets completed (I've put console.log statements all over the place, and I see the workflow results in there)
- `activate` function ends
- ... bunch of other things in the process run
- the completion is being sent out to the `core` with `successful.commands` containing the `completeWorkflowExecution` command.
```

High-level of how Bun does the part of completion:
```
- runs `activate function withing the workflow vm context
- `activate` function ends
- ... bunch of other things in the process run
- the completion is being sent out to the `core` with `successful.commands` being empty
- I see the console logs from workflow results
```

I am not sure yet how to solve it.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-02 16:51:41.000 UTC</summary>

> ```
> - runs `activate function withing the workflow vm context
> - `activate` function ends
> - ... bunch of other things in the process run
> - the completion is being sent out to the `core` with `successful.commands` being empty
> - I see the console logs from workflow results
> ```

If I understand correctly what you describe, it looks like Bun's `vm` implementation is interleaving microtasks from inside and outside the `vm`.

The JS engine is expected to maintain a distinct event queue for inside the VM, detached from the main event queue. Also, given the `microtaskMode: 'afterEvaluate'` option on `vm.createContext()`, the engine should wait for all microtasks on that inside event task queue to drain before returning from a `vm.runInContext()` call.

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-06-02 19:09:57.000 UTC</summary>

Yup, I'll try to reproduce this issue in a more controllable environment and will report it to Bun's maintainers.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-06-02 19:27:45.000 UTC</summary>

Got it! Reported: https://github.com/oven-sh/bun/issues/20145

Reactions: 🚀 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-02 21:21:26.000 UTC</summary>

> The JS engine is expected to maintain a distinct event queue for inside the VM, detached from the main event queue. Also, given the microtaskMode: 'afterEvaluate' option on vm.createContext(), the engine should wait for all microtasks on that inside event task queue to drain before returning from a vm.runInContext() call.

By the way, we [used to have a patch](https://github.com/temporalio/sdk-typescript/blob/49c6b1341daef2b94a0a989d515cbf97b8b02fa7/packages/worker/src/workflow/vm-shared.ts#L359-L365) for that, because the `microtaskMode: 'afterEvaluate'` only got added in Node 14.6. It was removed when we stopped maintaining that older release.

You may try to restore that patch and see if that gets you a bit farther.

Reactions: 👀 1

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-06-03 21:47:27.000 UTC</summary>

I think we've got it @mjameswh. Thank you for the guidance! 🎉 

Any chance we can go back to that patch, or should we just wait for bun to fix this incompatibility?

Verified also that I can safely remove the `reuseV8Context` flag, but the `debugMode` needs to be kept `true`.

![Image](https://github.com/user-attachments/assets/356047a8-d4f4-4098-b7be-c5d31521e584)

![Image](https://github.com/user-attachments/assets/c1e4d1c9-2205-4882-9f34-5cd1a91af786)

</details>

<details>
<summary><strong>liho00</strong> commented on 2025-06-22 19:03:23.000 UTC</summary>

@d2201 but its seems only pick up first activity, the rest of activities are not running on bun, tested many many times

</details>

<details>
<summary><strong>liho00</strong> commented on 2025-06-22 19:05:00.000 UTC</summary>

@mjameswh how can we add that patch?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-23 16:37:33.000 UTC</summary>

> Any chance we can go back to that patch, or should we just wait for bun to fix this incompatibility?

I don't have any objection to reintroduce the patch, but we'll have to think of a good way to conditionally enable or disable it. We previously just checked for Node's release number, but I don't want to rely on that kind of things if the goal is to support multiple JS runtimes.

We'll also need to confirm that all aspects of the sandbox still work correctly with that patch. The sandboxing code has gone through some significant changes since that patch was removed. It is possible that this patch might no longer be reliable.

Reactions: 👍 2

</details>

<details>
<summary><strong>d2201</strong> commented on 2025-06-24 19:53:58.000 UTC</summary>

> but its seems only pick up first activity, the rest of activities are not running on bun, tested many many times

@liho00 I didn't test this beyond the `hello world` sample, as it's too unstable to do anything more than that. Once the two runtimes start to behave similarly (without additional flags & custom patches), we can move on to testing other use cases.

> We previously just checked for Node's release number, but I don't want to rely on that kind of things if the goal is to support multiple JS runtimes.

Agreed.

My take is that Bun isn't stable enough for now, and anyone who uses Bun for more than basic CRUD examples knows that. The `node:vm` module is considered stable in Node, so every runtime that tries to be a "drop-in Node replacement" should at least implement all stable APIs from Node.

The patch itself might do more harm than good, and even with it:

>We'll also need to confirm that all aspects of the sandbox still work correctly with that patch. The sandboxing code has gone through some significant changes since that patch was removed. It is possible that this patch might no longer be reliable.

That remains a concern.

After all, I'm just a follower - not sure how important is it to others here - but for me Bun is mostly a convenience rather than a game changer. IMO, there are bigger DX fish to fry in the SDK, and I'd passively wait until Bun catches up. Nevertheless, I'll keep updating here as things progress, so others can have more visibility into the latest state of this issue.

Reactions: ❤️ 8

</details>

<details>
<summary><strong>kwypchlo</strong> commented on 2025-08-03 12:41:48.000 UTC</summary>

I was super excited about temporal solving my issues and introducing durability in my company workflows but we're running with bun and can't really easily migrate over to node. I'm looking forward to trying temporal once this gets resolved. FWIW thank you everyone for looking into this.

Reactions: 👍 15

</details>

<details>
<summary><strong>zammitjames</strong> commented on 2025-09-26 01:37:14.000 UTC</summary>

It's insane that this hasn't been implemented yet. 

</details>

<details>
<summary><strong>zeonglow</strong> commented on 2025-10-11 22:56:37.000 UTC</summary>

If any was wondering,   Bun 1.3 doesn't do it either.

I'd never heard of Promise createHook before,  but it sounds like it would be *much* easier for Bun to implement this rather than rewrite large sections of Temporal.  Assuming that's the only issue of course 😂

```
Welcome to Bun v1.3.0
Type ".help" for more information.
[!] Please note that the REPL implementation is still experimental!
    Don't consider it to be representative of the stability or behavior of Bun overall.
> import { promiseHooks } from 'node:v8';
undefined
> promiseHooks.createHook({init: console.log})
111 | }
112 | function setHeapSnapshotNearHeapLimit() {
113 |   notimpl("setHeapSnapshotNearHeapLimit");
114 | }
115 | var promiseHooks = {
116 |     notimpl("createHook");
                             ^
NotImplementedError: node:v8 createHook is not yet implemented in Bun.
 code: "ERR_NOT_IMPLEMENTED"

      at createHook (node:v8:116:12)
```

Reactions: 👍 7

</details>

<details>
<summary><strong>elonsalfati</strong> commented on 2025-10-19 08:38:17.000 UTC</summary>

Did someone tag @Jarred-Sumner on this? 

Would be super great to make this work on bun!

Reactions: 👍 12

</details>

<details>
<summary><strong>rajasekarshanmugam</strong> commented on 2025-11-27 15:45:28.000 UTC</summary>

Tried on bun 1.3.3 - Hello world sample. 

worker - bun, client - bun = client waits for wf to execute and the worker is not picking the execution. 

worker - nodejs, client - bun = works.

Anybody had any luck with running temporal only with bun - both worker as well as client and/or some trick to get past? 

Reactions: 👍 4

</details>

<details>
<summary><strong>nicu-dev</strong> commented on 2025-12-02 08:01:54.000 UTC</summary>

@rajasekarshanmugam it's fine, bun probably not a priority for the team now, npm wasn't hacked THAT many times yet.

Reactions: 😕 2

</details>

<details>
<summary><strong>BrianEstrada</strong> commented on 2025-12-02 12:31:16.000 UTC</summary>

Ended up switching to using another provider for bun compatibility, would be really happy to look at Temporal again once they get support for this :)

Reactions: 😕 1

</details>

<details>
<summary><strong>hckhanh</strong> commented on 2025-12-02 12:52:08.000 UTC</summary>

> Ended up switching to using another provider for bun compatibility, would be really happy to look at Temporal again once they get support for this :)

Which one do you use? @BrianEstrada 

Reactions: 👍 2

</details>

<details>
<summary><strong>BrianEstrada</strong> commented on 2025-12-03 18:57:51.000 UTC</summary>

@hckhanh don't want to promote another service here on Temporal's repo but it's one of the top 4 google search results for `durable workflows`

</details>

<details>
<summary><strong>rajasekarshanmugam</strong> commented on 2025-12-15 17:31:29.000 UTC</summary>

are there any pointers where to look for the isolate support in temporal..?

</details>

<details>
<summary><strong>slavb18</strong> commented on 2025-12-20 17:02:58.000 UTC</summary>

> [@hckhanh](https://github.com/hckhanh) don't want to promote another service here on Temporal's repo but it's one of the top 4 google search results for `durable workflows`

Is there option to convert temporal processes to another workflow engine ?

</details>

<details>
<summary><strong>hckhanh</strong> commented on 2025-12-20 18:25:26.000 UTC</summary>

I am afraid that there was not

</details>

<details>
<summary><strong>zeonglow</strong> commented on 2025-12-22 04:23:02.000 UTC</summary>

Thinking on this further; Temporal *should not* work on making the app work with other runtimes.

The reason: temporal isn't about doing lots of things super fast, Bun is optimised for speed and latency and Temporal isn't.

Development resources are always limited; having different runtimes multiples complexity. More things to test, more reasons not to fix stuff.

IMHO the fix would be to change the website so it says "NodeJS" rather than "Typescript"


Reactions: 👎 5

</details>


---

### #1755: [Feature Request] Temporal integration for `@openai/agents`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1755 |
| **State** | OPEN |
| **Author** | d-pylypenko (Dmitry Pilipenko) |
| **Created** | 2025-07-31 18:35:54.000 UTC (5 months ago) |
| **Updated** | 2025-12-03 20:21:07.000 UTC |
| **Upvotes** | 19 |
| **Comments** | 7 |
| **Priority Score** | 45 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 19 ❤️ 5 👀 5 |

#### Description

##  Request

We would like an official **Temporal integration for the OpenAI Agents SDK in JavaScript/TypeScript**, analogous to the existing `OpenAIAgentsPlugin` for the Python SDK.

###  Background

Temporal + OpenAI Agents SDK (Python) released an integration that enables:

- Durable state persistence  
- Fault recovery and retry logic  
- Observability (tracing / audit trails)  
- Scalable agent execution  
- Cost saving by avoiding redundant LLM calls 

In the Python ecosystem, developers can simply plug in `OpenAIAgentsPlugin` to enable agent orchestration inside Temporal workflows.

### ❓ Is this on your roadmap?

Does the Temporal team plan to release official support for **openai-agents-js**? If so—do you have an ETA or early preview we could try?

#### Comments (7)

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-31 18:51:37.000 UTC</summary>

Thanks for asking.

This is indeed on our roadmap, but I unfortunately don't have an ETA I can share at the moment.

Reactions: ❤️ 3 🚀 15 👀 5

</details>

<details>
<summary><strong>syuan100</strong> commented on 2025-08-28 23:33:11.000 UTC</summary>

+1 on this!

</details>

<details>
<summary><strong>bruno-schema52</strong> commented on 2025-09-13 18:07:00.000 UTC</summary>

+1 on this!

</details>

<details>
<summary><strong>Maximgitman</strong> commented on 2025-09-19 23:18:18.000 UTC</summary>

Looking forward for this integration

</details>

<details>
<summary><strong>fernando-playplay</strong> commented on 2025-11-18 14:16:35.000 UTC</summary>

Looking forward for this integration here as well

</details>

<details>
<summary><strong>marc-wilson</strong> commented on 2025-12-02 19:26:04.000 UTC</summary>

@mjameswh has there been any new updates around an ETA?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-12-02 20:13:36.000 UTC</summary>

The first AI agents library we're integrating with in TS is [ai](https://www.npmjs.com/package/ai). The [PR](https://github.com/temporalio/sdk-typescript/pull/1792) is in review, so it should hopefully land soon.

I really don't have an ETA or even the relative prioritization for any other specific AI library.

Reactions: 👍 2

</details>


---

### #483: [Feature Request] NestJS Transport / Integration?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/483 |
| **State** | OPEN |
| **Author** | StevenLangbroek (Steven Langbroek) |
| **Created** | 2022-02-17 08:35:40.000 UTC (3y 10m ago) |
| **Updated** | 2025-06-22 17:35:33.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 37 |
| **Priority Score** | 45 |
| **Labels** | enhancement, ecosystem-and-integrations |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

### Is your feature request related to a problem? Please describe.

It's more of a question: Temporal's Typescript SDK seems like it would maybe be a good fit as a NestJS Module, is this something there'd be interest in exploring? I'd need to spend a little bit of time on it but I'd love to validate whether it would work with a PoC, and see what kind of API we'd end up with.

### Describe the solution you'd like

I'd just like to understand whether there's interest at this point, so I can invest some of my own time in exploring this.

### Additional context

I would imagine an API to look something like (based on the [Java Example](https://github.com/temporalio/samples-java/blob/main/src/main/java/io/temporal/samples/bookingsaga/TripBookingWorkflowImpl.java)):

```ts
@Workflow()
export class TripBookingWorkflow implements Workflow {
  @InjectActivities({
    startToCloseTimeout: ms("1hr"),
    retryOptions: {
      maxAttempts: 1,
    },
  })
  activities: TripBookingActivities;

  public async execute(name: string): Promise<void> {
    const saga = new Saga({
      parallelCompensation: true,
    });

    try {
      const carReservationId = this.activities.reserveCar(name);
      saga.addCompensation(this.activities.cancelCar, carReservationId);

      const hotelReservationId = this.activities.bookHotel(name);
      saga.addCompensation(this.activities.cancelHotel, hotelReservationId);

      const flightReservationId = this.activities.bookFlight(name);
      saga.addCompensation(this.activities.cancelFlight, flightReservationId);
    } catch (err) {
      saga.compensate();
      throw err;
    }
  }
}
```

## Supporting arbitrary frameworks

By testing whether the module loaded from `workflowsPath` exports a function as its default export, we can run ~& potentially await that function,~ (should be fine without this, given that it's an async function we can just return the promise) and then return it. This would put a contract on the return value though (`Record<WorkflowName, WorkflowFn>`), we should document that.

```ts
      api.setImportFuncs({
        importWorkflows: async () => {
          let workflows = await import(/* webpackMode: "eager" */ ${JSON.stringify(this.workflowsPath)});
          if (typeof workflows.default === 'function') {
              workflows = workflows.default();
          }
          return workflows;
        },
      });
```

**update**: ☝️ this works 🥳 

<img width="1144" alt="image" src="https://user-images.githubusercontent.com/296796/159109882-d8f48b26-1dfe-4057-b37f-694a0eeb9219.png">

exporting an async function works too:

![image](https://user-images.githubusercontent.com/296796/159109966-198b4cbf-e571-4bc2-bb5e-b4bb3d900095.png)

## To do

- [x] Discuss desired API
- [x] If `worfklowsPath` exports a function as its `default`, await & return the result of that function.
- [ ] Develop proof of concept
- [ ] Test out third-party Nest plugins that depends on custom file formats
- [ ] ??? 
- [ ] Profit

## Design

### Principles

1. NestJS supports both monolithical applications, as well as smaller "microservices" (I don't mean the alternative transport layers Nest supports, I just mean smaller more focussed, independently deployable applications), and we should not make assumptions about this
2. Registering _Workflows & Workers_ through Nest's module system will, in the majority of cases, lead to undesirable outcomes; i.e., unintentionally doing things that have side effects or non-determinism and will break in subtle and hard to find ways.
3. The APIs we design should feel familiar to NestJS developers, without incorrectly implying compatibility. We should warn users when they make mistakes, and document tradeoffs front and centre.

### Operations

If you follow NestJS's design recommendations, your codebase should be split, roughly speaking, among domain lines by way of NestJS's module system. However, a single NestJS module might correlate to many Workers. [WIP]

#### Comments (37)

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-02-17 08:46:18.000 UTC</summary>

I think this could be good for Temporal because of what NestJS brings to the table;

- Application lifecycle hooks instead of homegrown solutions
- Ecosystem & Dependency Injection into Activities
- Separation of concerns
- Testability

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-02-17 17:47:15.000 UTC</summary>

I think such an integration could be valuable.

I don't know if we'll want this as part of the SDK repo. It should probably start out as an external package.

I'd be happy to review what you come up with.


</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-02-18 10:09:33.000 UTC</summary>

@bergundy totally fair! would you be willing to help me iterate on the API a few rounds before starting a proof-of-concept?

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-02-23 00:18:25.000 UTC</summary>

Hi,
Sorry for the late reply, sure, feel free to ping me when you have something.

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-12 20:22:29.000 UTC</summary>

@bergundy so, I've looked at this and I don't think we can achieve this fully in userland; however, this is based on my limited understanding of the `worker` and `core-bridge` packages. I've worked with NestJS enough to understand that side of the equation, but would someone maybe be available to help me understand `core-bridge` and how it interacts with the bundle that you're producing with webpack from `worker`?

(I'm in the community Slack btw)

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-14 06:46:53.000 UTC</summary>

To the best of my understanding we'd have to do something like this [here](https://github.com/temporalio/sdk-typescript/blob/b52999382ea72bc0bac45ed37cfaa9daf4bc6336/packages/worker/src/workflow/bundler.ts#L93-L95):

```ts
class NestWorkflowCodeBundler implements WorkflowCodeBundler {
  protected genEntryPoint(/* ... */) {
    return dedent`
      // ...
      api.setImportFuncs({
        importWorkflows: async () => {
          const { bootstrap } = await import(/* webpackMode: "eager" */ ${JSON.stringify(this.workflowsPath)});
          const app = await bootstrap();
          return app.get(WorkflowRegistry).getWorkflows();
        }
      });
    `
  }
}
```

Does that make sense @bergundy?

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-14 16:32:41.000 UTC</summary>

This makes sense.
We need to figure out how to make workflow bundling more extensible.
If you can get this to work, we'll make sure to add support in the SDK.

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-14 19:54:57.000 UTC</summary>

@bergundy what's the ideal api here here from your perspective? Should the workflowPath option be supplemented with an (optional) initializer function, that receives the resolved module from `workflowPath` and needs to return `Record<WorkflowName, WorkflowImplementation>`? It feels more Javascript native than implementing a Strategy pattern or some such... 

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-15 18:03:27.000 UTC</summary>

@bergundy what's the ideal api here here from your perspective? Should the workflowPath option be supplemented with an (optional) initializer function, that receives the resolved value from `importFuncs` and needs to return `Record<WorkflowName, WorkflowImplementation>`? It feels more Javascript native than implementing a Strategy pattern or some such...

Or maybe we need to revisit the entry point template approach? 

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-15 18:33:32.000 UTC</summary>

The Worker (and bundler) accepts `workflowsPath` because workflows run in a [vm](https://nodejs.org/api/vm.html) instead of in the same JS environment as the worker and activities.
We've used "exporting" as the way to register workflows because it's something every dev is familiar with and it automatically handles deduping of workflow names, it's also very convenient for when you want to reference a workflow function for type inference with a client.
We could allow customizing this the way you're suggesting, not sure about the details, I'm sure it'll become clearer as this feature is fleshed out.

Reactions: 👍 2

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-03-17 19:36:23.000 UTC</summary>

_Disclaimer: I don't know anything about `nestjs`; just sharing some insights_

If you think that this should work:

```
      api.setImportFuncs({
        importWorkflows: async () => {
          const { bootstrap } = await import(/* webpackMode: "eager" */ ${JSON.stringify(this.workflowsPath)});
          const app = await bootstrap();
          return app.get(WorkflowRegistry).getWorkflows();
        }
      });
```

... then wouldn't this work too:

```
      api.setImportFuncs({
        importWorkflows: async () => {
          let workflows = await import(/* webpackMode: "eager" */ ${JSON.stringify(this.workflowsPath)});
          if (typeof workflows.default === 'function') {
              workflows = await workflows.default();
          }
          return workflows;
        },
      });
```

... assuming that `workflowsPath` points to a file containing something similar to this:

```
    export default async function getMyWorkflows() {
        return await bootstrap().get(WorkflowRegistry).getWorkflows();
    }
```

The main point here is that the bundler's template may not need to contain any nestjs-specific logic.

Reactions: 👍 1

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-18 00:20:17.000 UTC</summary>

That's a great suggestion @mjameswh.
I'd definitely accept a default function export.

Reactions: 👍 1

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-18 06:22:20.000 UTC</summary>

Yep that's much cleaner than [my idea](https://github.com/temporalio/sdk-typescript/issues/483#issuecomment-1067225455), good idea @mjameswh! So let me stop wasting time on upfront API design work on the Nest side then, this is a small first step that's good to start with. I'll open a Draft PR this weekend. Thanks!

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-03-18 14:11:20.000 UTC</summary>

> So let me stop wasting time on upfront API design work on the Nest side then, this is a small first step that's good to start with. I'll open a Draft PR this weekend.

@StevenLangbroek Glad it helps. Once this is in place, it will be much easier for you and others to propose/iterate/test potential designs for nestjs' integration.

One thing of which I'm uncertain though is either nestjs' DI will actually work inside the vm context. As you know, your original workflow code (including all of its dependencies) is bundled using webpack... that bundle is _plain JavaScript_, and is all that is available inside the vm context.

Hopefully, it might be sufficient to enable `emitDecoratorMetadata` in your project's `tsconfig.json`, so that decorators metadata are kept in bundled JavaScript files... But I can image a few things that could pose extra difficulties:

- Does nestjs' DI engine scan files on disk at runtime (ie. to automatically locate providers of a given interface)? That would be impossible inside the vm.

- Will webpack properly detect metadata-based references to other classes, and will it keep everything intact, or will it consider these objects/functions/properties to be unused and prune them from the final bundle?

- Does nestjs' engine depends any nodejs's builtin packages at runtime? nestjs describe itself as a framework for server-side applications. That means that it is expected to be run inside nodejs, with everything that goes with it... But node's vms are actually far enough from regular nodejs execution context.

Again, these may or may not be actual issues, and some of these could be worked out... But you will have to get there before you know.

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-18 14:15:10.000 UTC</summary>

@mjameswh nest also allows bundling through webpack, all you need is reflect-metadata and I think tslib.

Guess we'll find out huh? 😎

Reactions: 👍 1

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-18 14:35:30.000 UTC</summary>

Hmmmm you actually raise an interesting point here @mjameswh. Nest itself isn't the problem, but there's extensions that you can provide globPaths and the like (e.g., for Entities), and nest takes care of moving them into the right path, but not necessarily loading them I believe (deferring that to Node runtime)... Noted in issue, thanks!

</details>

<details>
<summary><strong>eplarson</strong> commented on 2022-03-19 00:47:31.000 UTC</summary>

Wanted to chime in here since I'm actively integrating the Temporal SDK into a multi-module Nest app. For us, multi-module means that we want workflows, workers, and activities that are local to a module (not global for the whole app). Our app is quite large and a central location for these things would get out of hand pretty fast. Hoping my experience with the current version (0.19) adds some insight.

Activities are pretty easy to integrate right now. I just used a factory provider and registered it with the module:

```typescript
export const ActivityFactory = () => ({
  sayHello: async (user: User) => {
    return `Hello, ${user.firstName} ${user.lastName}!`;
  },
});

// Provider to make activities available within Nest's DI context
export const ActivityProvider: FactoryProvider = {
  provide: "ACTIVITIES_PROVIDER",
  inject: [],
  useFactory: ActivityFactory,
};
```

I haven't tried it yet, but I think it wouldn't be too hard to write an `@Activity()` decorator that registered activity functions and passed them via factory provider to the worker and injected into the workflows.

In my workflows I have this:
```typescript
const { sayHello } = proxyActivities<ReturnType<typeof ActivityFactory>>({
  startToCloseTimeout: "30 seconds",
  retry: { initialInterval: "2s", backoffCoefficient: 2 },
});

export async function greetUser(user: User): Promise<void> {
  await sayHello(user);
}
```

The worker is trickier:
```typescript
@Injectable()
export class ChatWorker extends BaseTemporalWorker {
  constructor(
    @Inject("ACTIVITIES_PROVIDER") private readonly activities: ActivityInterface,
    configFactory: WorkerConfigFactory
  ) {
    super();

    this.config = configFactory.createConfig(activities, "../../chat/temporal/workflows", /* task queue name */ "chat");
  }
}
```

That `../../chat/temporal/workflows` is because we have a common module (the `Temporal` module) that houses some helpers to reduce boilerplate. One of these is `BaseTemporalWorker`, and the workflow path has to be relative to _that_ instead of the actual worker. If the path could be relative to `ChatWorker`, it would just be `./workflows` (much nicer). I think the change to allow a function in addition to a string path will really help here and probably enable a similar decorator approach as with activities.

Here's `BaseTemporalWorker` for reference:
```typescript
export class BaseTemporalWorker implements OnModuleInit {
  private readonly logger = new Logger(BaseTemporalWorker.name);

  private worker: Worker;
  private _config: WorkerOptions;

  set config(value: WorkerOptions) {
    this._config = value;
  }

  private async startWorker() {
    this.logger.log("Starting temporal worker on task queue " + this._config.taskQueue);
    this.worker = await Worker.create(this._config);
    await this.worker.run();
  }

  async onModuleInit() {
    this.startWorker().catch(err => {
      console.error(err);
    });
  }
}
```

You might have noticed `WorkerConfigFactory`. This helper object builds the config for a module so that we don't have to repeat a bunch of config for each module that needs a worker. The main reason: all activities need a common interceptor that creates an AsyncLocalStorage context for our ORM. Here's `WorkerConfigFactory`:

```typescript
@Injectable()
export class WorkerConfigFactory {
  constructor(private readonly activityRCInterceptor: ActivityRequestContextInterceptor) {}

  createConfig(activities: ActivityInterface, workflowsPath: string, taskQueue: string, configOverrides?: WorkerOptions): WorkerOptions {
    const baseConfig: WorkerOptions = {
      workflowsPath: require.resolve(workflowsPath),
      activities,
      taskQueue,
      interceptors: {
        activityInbound: [ctx => this.activityRCInterceptor],
      },
    };

    return merge(baseConfig, configOverrides);
  }
}
```

Finally, installing the sdk core is super awkward because it's a singleton. I had to jump through some hoops to make sure that ran before anything else. I saw in the comments that it's going to be deprecated, which is good. Singletons are a bit weird to deal with in a DI framework like Nest. Instead, I'd prefer to create a `Core` in the DI context and inject that into the worker, kind of like a database connection provider. That would mean we could connect to multiple Temporal hosts/clusters (not that we want to right now, but maybe someday?).

Whew! Ok that's a lot of stuff, but IT WORKS. I think the things that would clean everything up the most are:
* Register activities and workflows via decorator
* Inject activities into workflows
* Auto-create or otherwise remove the Worker class boilerplate. `ChatWorker` above is really just a configuration station.
* No more core singleton, use DI context instead

Reactions: ❤️ 1

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-19 06:17:15.000 UTC</summary>

@eplarson that's exactly the kind of API I'm aiming for. I think Nest's insistence on slicing by domain instead of responsibility is one of its core strengths, and I would be very concerned if my teams started writing code that goes against the grain of that. Thanks for the _very deep_ technical insights! I think we'll have to go about this iteratively, but I'm here to work with everybody on that 💪 

Reactions: 👍 1

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-19 06:22:47.000 UTC</summary>

I'm guessing something to this effect:

```ts
@Module({
  imports: [TemporalModule.forFeature({
    taskQueue: 'book-trip',
  })],
  providers: [BookTripWorkflow, BookTripActivities]
})
export class TripBookingModule
```

perhaps combined with a cli command like `nest worker start --module=TripBookingModule`? We'll get there :) 

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-19 10:21:26.000 UTC</summary>

<img width="1119" alt="image" src="https://user-images.githubusercontent.com/296796/159117205-07ff9e57-41db-467e-8fdd-16a68210fe1e.png">

Yep so this was kind of to be expected... Already happens with this code:

```ts
// workflows.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ParentWorkflow } from './parent.workflow';

export default async function bootstrap() {
  const ctx = await (
    await NestFactory.createApplicationContext(AppModule)
  ).init();
  const workflowClass = ctx.get(ParentWorkflow);

  return {
    parentWorkflow: workflowClass.parentWorkflow,
  };
}
```

```ts
// parent.workflow.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ParentWorkflow {
  public parentWorkflow({ name }: { name: string }) {
    return `Hello ${name}`;
  }
}
```

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-19 10:33:25.000 UTC</summary>

Hmmm... @eplarson do you have some time next week to help me understand your use-case a bit better perhaps? I'd like to understand how it's structured, how many folks work on it & how it's ran in production / development. 

</details>

<details>
<summary><strong>StevenLangbroek</strong> commented on 2022-03-19 10:36:56.000 UTC</summary>

Hmmmm every "module" its own `Worker` instance? 🤔 so we could really lift _everything_ into Nest huh? How do we prevent folks from footgunning with injecting services that have side-effects or non-determinism into their Workflow classes (e.g., ORMs, HttpService)

</details>

<details>
<summary><strong>eplarson</strong> commented on 2022-03-21 20:02:16.000 UTC</summary>

> Hmmm... @eplarson do you have some time next week to help me understand your use-case a bit better perhaps? I'd like to understand how it's structured, how many folks work on it & how it's ran in production / development.

Yeah definitely, Calendly link here if you want to set something up: https://calendly.com/ethan-enerflo/general 



</details>

<details>
<summary><strong>serhattanrikut</strong> commented on 2022-03-27 13:58:38.000 UTC</summary>

Hello @StevenLangbroek , @eplarson 

This is a pretty nice initiative; it would be super beneficial to have an integrated TemporalModule for NestJs. Do you have any repo for the proposal so far that I can also follow up?

@eplarson 

I am in the same situation with you as I also want to structure our large codebase within Temporal. Can you share more insights or maybe a working repo with temporal+nestjs? 

thanks in advance.

</details>

<details>
<summary><strong>eplarson</strong> commented on 2022-03-29 18:22:46.000 UTC</summary>

@serhattanrikut I do have this doc I wrote up, that plus the examples above might help:

[background-workflows.md](https://github.com/temporalio/sdk-typescript/files/8373997/background-workflows.md)

The worker core I referenced is just this:

```typescript
export const WorkerCoreProvider: FactoryProvider<Promise<Core>> = {
  provide: "TEMPORAL_WORKER_CORE",
  useFactory: async () => {
    const options: CoreOptions = {
      serverOptions: {
        address: "localhost", // defaults port to 7233 if not specified
        namespace: "default", // as explained in Namespaces section
      },
    };

    return await Core.install(options);
  },
};
```

The client and its config are set up this way: 
```typescript
export type TemporalClientConfig = { connectionOptions: ConnectionOptions; clientOptions: WorkflowClientOptions };

export const ClientConfigProvider: FactoryProvider<TemporalClientConfig> = {
  provide: "TEMPORAL_CLIENT_CONFIG",
  useFactory: () => {
    return {
      connectionOptions: {
      },
      clientOptions: {
      },
    };
  },
};

export const ClientProvider: FactoryProvider<void> = {
  provide: "TEMPORAL_CLIENT",
  inject: ["TEMPORAL_CLIENT_CONFIG"],
  useFactory: (config: TemporalClientConfig) => {
    const connection = new Connection(config.connectionOptions);
    return new WorkflowClient(connection.service, config.clientOptions);
  },
};
```

You just have to reference the above providers in a Nest module. I expect the setup to change as a result of this ticket.

Reactions: 👍 1

</details>

<details>
<summary><strong>serhattanrikut</strong> commented on 2022-03-30 16:28:06.000 UTC</summary>

thank you @eplarson . I implemented something similar. 

let's keep in touch to get this forward.

</details>

<details>
<summary><strong>aminebeh</strong> commented on 2022-05-24 13:26:26.000 UTC</summary>

Hey everyone :wave: 

Just found out this issue and wanted to add a mention to https://github.com/KurtzL/nestjs-temporal

Great potential and works great for our company (for now) :wink: 

Reactions: 👀 1

</details>

<details>
<summary><strong>fjur</strong> commented on 2022-06-28 19:47:45.000 UTC</summary>

@eplarson How do you handle dependency injection of services, were you able to use a similar pattern to nestjs DI, or do you solely rely on interceptors to DI other services activities rely on?

I tried creating an injectable service and passing that as the return type from ActivityFactory, and it contains the DI services, but it seems that ProxyActivity potentially wipes away those references.

Any tips?

</details>

<details>
<summary><strong>vkarpov15</strong> commented on 2022-07-26 14:41:42.000 UTC</summary>

@fjur @aminebeh @serhattanrikut can you all please take a look at temporalio/samples-typescript#169? We're putting together a NestJS sample app, and we would love some feedback from experienced NestJS devs.

</details>

<details>
<summary><strong>serhattanrikut</strong> commented on 2022-07-28 08:35:17.000 UTC</summary>

> @fjur @aminebeh @serhattanrikut can you all please take a look at [temporalio/samples-typescript#169](https://github.com/temporalio/samples-typescript/pull/169)? We're putting together a NestJS sample app, and we would love some feedback from experienced NestJS devs.

Sure..I will review asap.

thank you.

</details>

<details>
<summary><strong>aminebeh</strong> commented on 2022-07-28 17:39:22.000 UTC</summary>

Sure, I'll be happy to take a look 😉 

</details>

<details>
<summary><strong>eplarson</strong> commented on 2022-08-02 22:07:38.000 UTC</summary>

> @eplarson How do you handle dependency injection of services, were you able to use a similar pattern to nestjs DI, or do you solely rely on interceptors to DI other services activities rely on?

For activities, we follow the Nest pattern of using a decorator to mark classes as activity classes, and their functions as activity functions (like you would for a REST controller or GraphQL resolver). Activity classes are registered as a provider and can have whatever injected they need, there's nothing special about them other than the decorators used.

On bootstrap, we use Nest's DiscoveryService and Reflector to find the activity classes and register their activity functions with the worker on startup. Basically we create a new object with all the discovered activity functions, and use that new object when starting the worker.

This makes heavy use of Nest's decorate-then-discover pattern.

</details>

<details>
<summary><strong>vkarpov15</strong> commented on 2022-08-05 19:01:37.000 UTC</summary>

@eplarson what is the benefit of explicitly marking a class as an activity class using decorators? In https://github.com/temporalio/samples-typescript/pull/169, it doesn't look necessary.

</details>

<details>
<summary><strong>eplarson</strong> commented on 2022-08-05 20:40:56.000 UTC</summary>

> @eplarson what is the benefit of explicitly marking a class as an activity class using decorators? In [temporalio/samples-typescript#169](https://github.com/temporalio/samples-typescript/pull/169), it doesn't look necessary.

It may not be needed anymore. We set this up earlier this year on an older version of the SDK.

</details>

<details>
<summary><strong>tareksalem</strong> commented on 2023-05-30 10:42:14.000 UTC</summary>

I think temporal typescript SDK is closer to functional paradigm instead of oop, so why shifting the paradigm instead of adapting it?
let's think what is the main problem?

the main problem for me I am not able to inject other services into my activities, for example if I have an activity interacts with the outside world so it needs the httpService and the configService, so basically the main problem is dependency injection problem, how this could be solved?

To solve this problem I built an internal package in my company that does dependency injection for functions, so my activity looks like this

```typescript

export const GetPaymentMethod =
  ({
    logger,
    configService,
    httpService,
  }: {
    logger: any;
    configService: ConfigService;
    httpService: HttpService;
  }) =>
  async ({
    brand,
    id,
    customerId,
  }: {
    brand: string;
    id: string;
    customerId: string;
  }) => {
    logger.info('started executing get payment method', {});
    try {
      logger.info('started getting payment method', { brand, id, customerId });
      const profileServiceBseURL =
        configService.get<string>('profileService.url');
      const { status, data } = await firstValueFrom(
        httpService.get('hrlHere', { headers: {} }),
      );
      if (status != HttpStatus.OK) {
        throw data;
      }
      return data ? (data as PaymentMethodDTO) : null;
    } catch (err) {
      logger.error('failed to get payment method', { err });
      throw err;
    }
  };

export const getPaymentMethod = InjectIn(GetPaymentMethod);
```

Basically it's a higher order function so I am injecting the needed dependencies in the outer function and the inner one I have the needed logic, which helps a lot to make the code testable
and at the end I am using `InjectIn` which is a function exported from the library I did that basically injects the needed dependency from the container, it injects them at runtime so no matter about the ordering of the injected dependencies

now in each module I have in my app I am doing the following:

```typescript
export class OrdersModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService, httpService: HttpService) {}
  onModuleInit() {
    const firebaseModules = initFirebase(this.configService);
    GetContainer().Bind(logger, { name: 'logger' });
    GetContainer().Bind(getAuthorizationHeader);
    GetContainer().Bind(this.configService, { name: 'configService' });
     GetContainer().Bind(this.httpService, { name: 'httpService' })
  }
}
```

I am binding the needed dependencies to the container to  make them available for the functions

</details>

<details>
<summary><strong>liho00</strong> commented on 2025-06-22 17:32:21.000 UTC</summary>

we need this official support

Reactions: 👎 1

</details>

<details>
<summary><strong>clintonb</strong> commented on 2025-06-22 17:35:33.000 UTC</summary>

https://github.com/KurtzL/nestjs-temporal has worked well for us over the past couple years. 

Reactions: 👍 1

</details>


---

### #928: [Bug] Jest detects open handles

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/928 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-10-17 18:26:52.000 UTC (3y 2m ago) |
| **Updated** | 2025-09-11 07:22:29.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 26 |
| **Priority Score** | 40 |
| **Labels** | bug |
| **Assignees** | mjameswh |
| **Milestone** | None |
| **Reactions** | 👍 7 |

#### Description

Getting this warning when running a simple test with the test environment:

```
 $ ./node_modules/.bin/jest --detectOpenHandles

...
Jest has detected the following 1 open handle potentially keeping Jest from exiting:

  ●  neon threadsafe function
...
```


Code for reproduction:

```ts
import { TestWorkflowEnvironment } from '@temporalio/testing';
import { Worker, Runtime, DefaultLogger, LogEntry } from '@temporalio/worker';
import { someWorkflow } from './workflows';

let testEnv: TestWorkflowEnvironment;

beforeAll(async () => {
  // Use console.log instead of console.error to avoid red output
  // Filter INFO log messages for clearer test output
  Runtime.install({
    logger: new DefaultLogger('WARN', (entry: LogEntry) => console.log(`[${entry.level}]`, entry.message)),
  });

  testEnv = await TestWorkflowEnvironment.createTimeSkipping();
});

afterAll(async () => {
  await testEnv?.teardown();
});

test('some random test', async () => {
  const { client, nativeConnection } = testEnv;
  const worker = await Worker.create({
    connection: nativeConnection,
    taskQueue: 'test',
    workflowsPath: require.resolve('./workflows'),
    activities: {
      // ...
    },
  });

  await worker.runUntil(async () => {
    const result = await client.workflow.execute(someWorkflow, {
      args: [],
      workflowId: 'money-transfer-test-workflow',
      taskQueue: 'test',
    });

    expect(result).toEqual('test');
  });
});
```

#### Comments (26)

<details>
<summary><strong>lorensr</strong> commented on 2022-10-17 19:03:48.000 UTC</summary>

Val did some investigating in https://github.com/temporalio/samples-typescript/issues/189

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-11-22 13:49:56.000 UTC</summary>

Test case can be reduced to this:

```
test(`core-bridge registerErrors() doesn't leave open handles`, async () => {
    const native = require("@temporalio/core-bridge");

    native.registerErrors({
        IllegalStateError: () => ({}),
        ShutdownError: () => ({}),
        TransportError: () => ({}),
        UnexpectedError: () => ({}),
        GracefulShutdownPeriodExpiredError: () => ({}),
    });
});
```

The issue is specifically with `registerErrors()`. For example, that one doesn't trigger the error message:

```
test(`core-bridge getTimeOfDay() doesn't leave open handles`, async () => {
    const native = require("@temporalio/core-bridge");
    native.getTimeOfDay();
}
```

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-11-22 14:20:24.000 UTC</summary>

The issue relates to usage of the `.root()` function to keep references to error constructors from Rust land.

```
pub fn register_errors(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    // ...

    let mapping = cx.argument::<JsObject>(0)?;
    let shutdown_error = mapping
        .get::<JsFunction, _, _>(&mut cx, "ShutdownError")?
        .root(&mut cx);   // <----
```

Neon's `Root` object internally register a [`ThreadSafeFunction`](https://nodejs.org/api/n-api.html#asynchronous-thread-safe-function-calls), which is a special type of resource provided by Node's napi allowing native code to call a JavaScript function from any thread. It is that `ThreadSafeFunction` resource that Jest detects as being left open.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-11-28 21:03:10.000 UTC</summary>

Opened a ticket in Neon: https://github.com/neon-bindings/neon/issues/948

</details>

<details>
<summary><strong>igorsechyn</strong> commented on 2022-12-31 13:59:20.000 UTC</summary>

We hit the same issue in our test setup. Weirdly it causes issues in CircleCI as jest just won't exit despite using `--forceExit` flag. We upgraded to the latest version of sdk and the issue still persists. It is intermittent, so it is hard to pinpoint it to temporal tests, but this behaviour started around the same time as we added temporal tests

</details>

<details>
<summary><strong>mandriv</strong> commented on 2023-02-28 09:42:23.000 UTC</summary>

Is there any known workaround?

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-02-28 12:28:51.000 UTC</summary>

Since the new version we are hitting an issue with Jest on CircleCI as well.
Running into `Too long with no output (exceeded 10m0s): context deadline exceeded`

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-02-28 16:45:07.000 UTC</summary>

> Is there any known workaround?

I'm not aware of any workaround regarding Jest's warning about open handle. This warning message can simply be ignored. This may also cause a 10 seconds delay on process termination, which should generally not be that much of an issue.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-02-28 17:11:32.000 UTC</summary>

> Since the new version we are hitting an issue with Jest on CircleCI as well. Running into `Too long with no output (exceeded 10m0s): context deadline exceeded`

> We hit the same issue in our test setup. Weirdly it causes issues in CircleCI as jest just won't exit despite using --forceExit flag. We upgraded to the latest version of sdk and the issue still persists. It is intermittent, so it is hard to pinpoint it to temporal tests, but this behaviour started around the same time as we added temporal tests

I don't think this is related to the "detected open handle" bug. Wondering if [this](https://github.com/facebook/jest/issues/12972) might be related, though there's unfortunately very little context to work with.

@mandriv @Irvenae Let assume this is a different issue... Could you please provide more details on these situations? Here are some ideas info that might help figure this out, but feel free to add whatever that you think could be useful:
- Temporal SDK/Jest/Node versions?
- Collecting coverage metrics?
- Is that behaviour happening consistently or is it intermittent?
- If you run these tests locally using the very same command as when these tests are being run in CircleCI, does execution completes normally and process stops by itself?
- Do you very get long period of time where the process stop outputting anything? How long 
- Can you still reproduce the error with a reduced test suite?

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-03-01 09:03:29.000 UTC</summary>

- Temporal SDK v1.6.0, Jest 29.3.0, node v16.15.0
- No coverage metrics
- intermittent
- Locally tests complete (tried it 10 times)

This is the log we get in circleCI:
```
2023-02-28T09:49:27.110Z [WARN] This program is running inside a containerized environment with a memory constraint (eg. docker --memory 70226m). Node itself does not consider this memory constraint in how it manages its heap memory. There is consequently a high probability that the process will crash due to running out of memory. To increase reliability, we recommend adding '--max-old-space-size=52669' to your node arguments. Refer to https://docs.temporal.io/application-development/worker-performance for more advice on tuning your workers.
2023-02-28T09:49:27.145998Z  INFO temporal_sdk_core::ephemeral_server: Downloading https://temporal.download/assets/temporalio/sdk-java/releases/download/v1.17.0/temporal-test-server_1.17.0_linux_amd64.tar.gz to /tmp/temporal-test-server-sdk-typescript-1.6.0
2023-02-28T09:49:27.871Z [INFO] Creating worker {
  options: {
    namespace: 'default',
    identity: '454@f5f8c41c3a04',
    shutdownGraceTime: '10s',
    maxConcurrentActivityTaskExecutions: 100,
    maxConcurrentLocalActivityExecutions: 100,
    enableNonLocalActivities: true,
    maxConcurrentWorkflowTaskExecutions: 100,
    stickyQueueScheduleToStartTimeout: '5m',
    maxHeartbeatThrottleInterval: '60s',
    defaultHeartbeatThrottleInterval: '30s',
    isolateExecutionTimeout: '4294967295ms',
    workflowThreadPoolSize: 1,
    maxCachedWorkflows: 1761,
    enableSDKTracing: false,
    showStackTraceSources: true,
    reuseV8Context: true,
    debugMode: true,
    interceptors: { activityInbound: [Array], workflowModules: [Array] },
    sinks: { logger: [Object] },
    workflowsPath: '/root/repo/packages/temporal-features/src/tests/allWorkflows.ts',
    bundlerOptions: { webpackConfigHook: [Function: webpackConfigHook] },
    activities: {
      cancelJob: [Getter],
      createItem: [Getter],
      createItemWithData: [Getter],
      deleteItem: [Getter],
      findItems: [Getter],
      findItemsInAllVersions: [Getter],
      getFileJson: [Getter],
      getItem: [Getter],
      persistData: [Getter],
      setItem: [Getter],
      createOrMemoizeJob: [Getter],
      getJobResult: [Getter],
      getResult: [Getter],
      queryWorkflow: [Getter],
      signalWithStartWorkflowForItem: [Getter],
      signalWorkflow: [Getter],
      startAndQueryWorkflowForItem: [Getter]
    },
    taskQueue: 'test',
    connection: NativeConnection {
      nativeClient: [External: 7fe4b80045b0],
      referenceHolders: Set(0) {}
    },
    shutdownGraceTimeMs: 10000,
    stickyQueueScheduleToStartTimeoutMs: 300000,
    isolateExecutionTimeoutMs: 4294967295,
    maxHeartbeatThrottleIntervalMs: 60000,
    defaultHeartbeatThrottleIntervalMs: 30000,
    loadedDataConverter: {
      payloadConverter: [DefaultPayloadConverter],
      failureConverter: [DefaultFailureConverter],
      payloadCodecs: []
    }
  }
}
2023-02-28T09:49:36.018Z [INFO] asset workflow-bundle-a2ca801512c61451083d.js 22.2 MiB [emitted] [immutable] (name: main)
2023-02-28T09:49:36.018Z [INFO] runtime modules 1.25 KiB 6 modules
2023-02-28T09:49:36.018Z [INFO] modules by path ./packages/ 4.44 MiB 726 modules
2023-02-28T09:49:36.019Z [INFO] modules by path ./node_modules/ 3.54 MiB 293 modules
2023-02-28T09:49:36.019Z [INFO] modules by path ./tooling/tool-version-sync/lib/*.js 4.99 KiB
2023-02-28T09:49:36.019Z [INFO]   ./tooling/tool-version-sync/lib/index.js 1.2 KiB [built] [code generated]
2023-02-28T09:49:36.019Z [INFO]   ./tooling/tool-version-sync/lib/toolVersions.js 1.54 KiB [built] [code generated]
2023-02-28T09:49:36.019Z [INFO]   ./tooling/tool-version-sync/lib/toolMemoryLimits.js 2.25 KiB [built] [code generated]
2023-02-28T09:49:36.019Z [INFO] __temporal_custom_payload_converter (ignored) 15 bytes [built] [code generated]
2023-02-28T09:49:36.019Z [INFO] __temporal_custom_failure_converter (ignored) 15 bytes [built] [code generated]
2023-02-28T09:49:36.019Z [INFO] webpack 5.75.0 compiled successfully in 7586 ms
2023-02-28T09:49:36.116Z [INFO] Workflow bundle created { size: '22.12MB' }
2023-02-28T09:49:37.170023Z  INFO temporal_sdk_core::worker: Initializing worker task_queue=test namespace=default
2023-02-28T09:49:37.172Z [INFO] Worker state changed { state: 'RUNNING' }
(node:454) MaxListenersExceededWarning: Possible EventTarget memory leak detected. 11 abort listeners added to [AbortSignal]. Use events.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)

Too long with no output (exceeded 10m0s): context deadline exceeded
```

In this run it only runs 1 test file. In this test file we only create 1 timeSkipping test env, which we reuse for 12 tests.
I checked the memory and we only use at a max 25% Mem of the instance so OOM is out of the question.
The `MaxListenersExceededWarning` can be ignored, sth in our code we need to resolve.

A successful run would have 3 min later the Worker state changed { state: 'STOPPING' } and etc. We only print info logs I will try to reproduce with debug logs as well.

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-03-01 13:57:01.000 UTC</summary>

I might have been on the wrong track, I today reran this 10 times on CircleCI but no failure. I know for sure this happens when we have multiple tests running, but there it could be OOM as well (so setting node options and/or going to a single Jest worker to see if it is resolved). Anyway, I am also further investigating to potentially pinpoint it better.

</details>

<details>
<summary><strong>igorsechyn</strong> commented on 2023-03-01 15:32:23.000 UTC</summary>

FWIW, we found that we were either running out CPU or Memory, when executing in CircleCI. The only thing that helped us is to reduce number of jest workers. we had not had a single failure since then.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-03-01 18:44:52.000 UTC</summary>

>I checked the memory and we only use at a max 25% Mem of the instance so OOM is out of the question.

Not sure if this is the issue here, but I personally recommend to _always_ explicitly set Node's `--max-old-space-size` (see [this page](https://legacy-documentation-sdks.temporal.io/typescript/production-deploy#properly-configure-nodes-memory-in-docker) for some details).

Based on your log, it appears you are executing inside a containerized environment with a memory constraint. Node itself doesn't play great in such cases, because it doesn't know about those constraints and instead configure its heap allocation and garbage collection to based on the machine's total memory.

The opposite is also possible: by default, Node will configure its heap allocation limit and garbage collection algorithms to 25% of available memory, up to a limit of 4GB (assuming node 14 to 18, with 64 bits cpu). That means that your Node process may not be taking advantage of all the resources available to it, which could explain that it is not performing as it should.

Both cases can be resolved by explicitly setting and properly tuning Node's `--max-old-space-size`.

</details>

<details>
<summary><strong>NivOclear</strong> commented on 2023-04-18 08:16:20.000 UTC</summary>

so any progress regarding this issue ? this not just a warning in our cicd its break the jest test and not passing them 

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-04-18 08:33:48.000 UTC</summary>

We have resolved it by using a bigger machine and reducing the number of jest workers and setting `--max-old-space-size` (taking into account the nr of workers).

I am now evaluating AVA tbh, because attaching the debugger is spotty with Jest.

</details>

<details>
<summary><strong>Kannndev</strong> commented on 2023-11-21 07:46:35.000 UTC</summary>

I am not sure if this is relevant, but i will add here just to get others opinion as well,

When I run the test with `createLocal` it works but when i use `createTimeSkipping` test times out even after 60s. The example test is 

```
import { DefaultLogger, LogEntry, Runtime, Worker } from '@temporalio/worker';

import { TestWorkflowEnvironment } from '@temporalio/testing';
import { WorkflowCoverage } from '@temporalio/nyc-test-coverage';
import { example } from './workflow';

describe('Example workflow with mocks', () => {
  let testEnv: TestWorkflowEnvironment;
  const workflowCoverage = new WorkflowCoverage();

  beforeAll(async () => {
    // Use console.log instead of console.error to avoid red output
    // Filter INFO log messages for clearer test output
    Runtime.install({
      logger: new DefaultLogger('WARN', (entry: LogEntry) => console.log(`[${entry.level}]`, entry.message)),
    });

    testEnv = await TestWorkflowEnvironment.createLocal();
  });

  afterAll(async () => {
    await testEnv?.teardown();
  });

  afterAll(() => {
    workflowCoverage.mergeIntoGlobalCoverage();
  });

  it('successfully completes the Workflow with a mocked Activity', async () => {
    const { client, nativeConnection } = testEnv;
    const taskQueue = 'test';

    const worker = await Worker.create(
      workflowCoverage.augmentWorkerOptions({
        connection: nativeConnection,
        taskQueue: 'test',
        workflowsPath: require.resolve('../workflows'),
        activities: {
          greet: async () => 'Hello, Temporal!',
        },
      })
    );

    await worker.runUntil(async () => {
      const result = await client.workflow.execute(example, {
        args: ['Temporal'],
        workflowId: 'test',
        taskQueue,
      });
      expect(result).toEqual('Hello, Temporal!');
    });
  });
});

```

Why is this behaviour happening ?, 

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-12-15 16:14:30.000 UTC</summary>

> When I run the test with createLocal it works but when i use createTimeSkipping test times out even after 60s. The example test is

Thanks for the feedback.

We haven't had the capacity to investigate this further for now, we'll need more work to understand what's going on here.

</details>

<details>
<summary><strong>jbsil</strong> commented on 2024-02-01 14:40:51.000 UTC</summary>

We've found a workaround for this when running `Worker`s using the `TestWorkflowEnvironment` in jest with `--detectOpenHandles`. This does not appear to work for activities run using the `MockActivityEnvironment`, where the open handles still persist.

the summary of the worker workaround is:
1. when you create your `TestWorkflowEnvironment`, store it on global, e.g. `global.TemporalEnvironment: TestWorkflowEnvironment`
2. as you `Worker.create` each of your workers, store the `Worker` (await the call to create) into _something_ on global, e.g. `global.workers: Worker[]`
3. as you `worker.run()` each of your workers, store the run promise as well into _something_ on global, e.g. `global.workerPromises: Promise[]`
4. setup a [jest globalTeardown](https://jestjs.io/docs/configuration#globalteardown-string) to clean up all of this stuff
5. on each of the `global.workers`, call `.shutdown()`, which will cause the workers to (eventually) shut down. do not try to await this
6. instead, wait for all of the worker run promises, e.g. `await Promise.all(global.workerPromises)`
7. finally, teardown the TWE, e.g. `await global.TemporalEnvironment.teardown()`
e.g. teardown.ts
```ts
export default async function teardown() {
  // ask each worker to start shutting down
  global.workers.forEach((worker) => {
    // do not wait for this, it is non-blocking
    worker.shutdown();
  });
  // the promises created by `Worker.run` will resolve once the worker has actually shutdown
  await Promise.all(global.workerPromises);
  // fyi - teardown the environment won't work until after the workers disconnect
  await global.TemporalEnvironment?.teardown();
}
```

To get your typing correct, you can `declare global`, but note that you have to `var` your variables, `let` and `const` [wont work](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html?#type-checking-for-globalthis).
e.g. 
```ts
declare global {
  var TemporalEnvironment: TestWorkflowEnvironment;
  var workers: Worker[];
  var workerPromises: Promise[];
}
```

We have found that the most "sane" configuration of this is to use a [jest globalSetup](https://jestjs.io/docs/configuration#globalsetup-string) to start the `TestWorkflowEnvironment` and all of the workers involved, because it more closely mirrors what will be happening in production (the server and workers will be running before a workflow payload arrives). But, you don't _have_ to do that part.

In our worker repos, using Node 18 and temporalio/* @ 1.9.0, this closes all of our handles and lets jest exit gracefully.

We're still unable to work around the open handles from the `MockActivityEnvironment`, though, which is disappointing.

Reactions: 👍 2

</details>

<details>
<summary><strong>jbsil</strong> commented on 2024-02-01 17:48:02.000 UTC</summary>

It turns out that the handles opened by `MockActivityEnvironment` are in the `Runtime`. That means that you can 
jest config
```json
{
  ...,
  "globalTeardown": "tests/teardown.ts"
}
```
teardown.ts
```ts
import { Runtime } from '@temporalio/worker';
export default async function() {
  await Runtime.getInstance().shutdown();
}
```
and your open handles will get cleaned up. There is some delay (a few seconds) after the tests finish while the Runtime shuts down, but it stops jest from complaining! 
Hurray!

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-02-02 14:36:46.000 UTC</summary>

Thanks a lot @jbsil for sharing your findings on this issue. It will certainly help a few of our users.

I have to admit that I'm very intrigued by why this solution actually resolves the symptom, as I'm pretty sure that this will not force unloading of Neon's global `ThreadSafeFunction`, but glad to know that it works. We're planning to dig into more into Jest related issues soon; I will experiment more with your workaround at that moment.

Reactions: 👍 1

</details>

<details>
<summary><strong>ilijaNL</strong> commented on 2024-05-04 09:23:32.000 UTC</summary>

This is still ongoing issue, sometimes it also takes sometime before everything is terminated according to jest runner. 

Reactions: 👍 1

</details>

<details>
<summary><strong>jamespsterling</strong> commented on 2024-09-24 13:32:36.000 UTC</summary>

We are seeing this for `MockActivityEnvironment`, 


```ts
Jest has detected the following 1 open handle potentially keeping Jest from exiting:

  ●  neon threadsafe function

      34 |
      35 |   beforeEach(async () => {
    > 36 |     env = new MockActivityEnvironment({ attempt: 2 });
         |           ^
      37 |
      38 |     const compiledSubject = await compileTemplate({
      39 |       mergeFields: allMergeFields,

      at ../../../../node_modules/@temporalio/core-bridge/index.js:16:14
      at Function.create (../../../../node_modules/@temporalio/worker/src/runtime.ts:202:31)
      at Function.instance (../../../../node_modules/@temporalio/worker/src/runtime.ts:194:17)
      at Activity.makeActivityLogger (../../../../node_modules/@temporalio/worker/src/activity.ts:82:34)
      at new Activity (../../../../node_modules/@temporalio/worker/src/activity.ts:61:12)
      at new MockActivityEnvironment (../../../../node_modules/@temporalio/testing/src/index.ts:416:21)
      at Object.<anonymous> (src/lib/actions/emails/prepareEmailAndMessageData.spec.ts:36:11)
```

</details>

<details>
<summary><strong>Charly-xepelin</strong> commented on 2024-11-13 22:16:46.000 UTC</summary>

As @jbsil suggested I simple kept in the jest describe the promise returned by `worker.run` and waited for it in the afterAll:

```typescript
describe('My tests', () => {
    let worker: Worker;
    let client: typeof testEnv.client;
    let workerRunPromise: Promise<void>;

    // beforeAll and afterAll are injected by Jest
    beforeAll(async () => {
        testEnv = await TestWorkflowEnvironment.createTimeSkipping();

        worker = await Worker.create({
            connection: testEnv.nativeConnection,
            taskQueue: 'test',
            workflowsPath: require.resolve('./workflow'),
            activities: mockActivities,
        });

        workerRunPromise = worker.run().catch((err) => console.log(err));

        client = testEnv.client;
    });

    afterAll(async () => {
        if (worker) {
            worker.shutdown();
            await workerRunPromise;
        }
        await testEnv?.teardown();
    });
});
```

Reactions: 🎉 2

</details>

<details>
<summary><strong>caiokf</strong> commented on 2024-11-28 04:58:51.000 UTC</summary>

in the afterAll, `await Runtime._instance?.shutdown()` worked for me

</details>

<details>
<summary><strong>Thexumaker</strong> commented on 2024-12-06 06:05:47.000 UTC</summary>

@Charly-xepelin this worked for me as well


</details>

<details>
<summary><strong>QuentinLemCode</strong> commented on 2025-09-11 07:22:29.000 UTC</summary>

Hi ! I'm also affected by the issue. 
Even doing `await Runtime.getInstance().shutdown()` doesn't work for me. I'm using the latest version (1.13.0)
@mjameswh Do you have any update ?

</details>


---

### #1658: [Feature Request] Add support for opentelemetry v2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1658 |
| **State** | OPEN |
| **Author** | karlismelderis-mckinsey (Karlis Melderis) |
| **Created** | 2025-03-24 08:17:17.000 UTC (9 months ago) |
| **Updated** | 2025-12-01 18:13:12.000 UTC |
| **Upvotes** | 19 |
| **Comments** | 1 |
| **Priority Score** | 39 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 19 |

#### Description

### Is your feature request related to a problem? Please describe.

Open Telemetry got new major version - v2 and some libs `0.200.0`
Please update your lib to support new Otel library version


#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2025-12-01 18:13:12.000 UTC</summary>

This is coming up soon.

Unfortunately, we can't simply "upgrade" to OTel v2, as that would be a breaking change for all existing Temporal setups. The plan is therefore to make a _new_ package for this, something like `@temporalio/interceptors-opentelemetry2` (haven't made a final decision on the package name), so that both plugin versions can coexist.

Now, we're going through some heavy work to improve the completeness and DX on the OTel v1 interceptor at the moment. Those improvements will also be applicable to the v2, so much that it makes little sense to create the OTel v2 before we're done with present work on v1.

So the path forward will be, in proper order:

1. Complete current efforts on [covering _all_ events](https://github.com/temporalio/sdk-typescript/pull/1835) through the OTel v1 interceptors
2. Complete effort on extending the OTel interceptors v1 to the new Plugin form.
3. Address serialization issues with the workflow/sink layer that are causing errors in some setups (#1779 and #1738).
4. Duplicate the OTel v1 package to a new OTel v2 package, and adapt the code as needed.

In the mean time, you may use your own v2 copy of the OTel interceptors. There's really nothing here that requires that to be part of the official SDK.

Reactions: 👍 3

</details>


---

### #207: [Feature Request] Enable in-browser usage of gRPC client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/207 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2021-08-24 21:21:27.000 UTC (4y 4m ago) |
| **Updated** | 2024-12-17 21:16:02.000 UTC |
| **Upvotes** | 9 |
| **Comments** | 7 |
| **Priority Score** | 25 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 9 👀 3 |

#### Description

### Is your feature request related to a problem? Please describe.

Some users have indicated interest in being able to use the gRPC client in the browser. Enable this.

### Describe the solution you'd like

Solution probably will need to leverage https://github.com/grpc/grpc-web 

### Additional context

Client package needs to be free of deps on not-just-proto core code


#### Comments (7)

<details>
<summary><strong>bergundy</strong> commented on 2021-12-10 23:43:17.000 UTC</summary>

We could make `@temporalio/client` work in the browser by replacing `grpc-js` with `grpc-web` perhaps even in the same package, e.g. https://github.com/lquixada/cross-fetch.

See related discussion here:
https://temporalio.slack.com/archives/CTRCR8RBP/p1639166317413200

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-13 15:35:53.000 UTC</summary>

Note of course that this requires server-side support, it's not a drop-in solution. May be worth looking into existing/new efforts of REST-ifying the server instead.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2021-12-13 22:09:02.000 UTC</summary>

Yes, I'm aware.

It makes a lot of sense to me to expose grpc web endpoints especially because we already have a type-safe JS client which (with minimal effort) could be used in the browser.

</details>

<details>
<summary><strong>nadilas</strong> commented on 2021-12-16 11:40:01.000 UTC</summary>

> Note of course that this requires server-side support, it's not a drop-in solution. May be worth looking into existing/new efforts of REST-ifying the server instead.

Not necessarily. I am currently using `grpc-web` from the browser via envoy-proxy, which translates the web requests for the frontend. A simple sidecar or built-in proxy could do as well (e.g. https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy)

</details>

<details>
<summary><strong>cretz</strong> commented on 2021-12-16 14:49:05.000 UTC</summary>

> Not necessarily. I am currently using grpc-web from the browser via envoy-proxy,

To clarify, this is what I meant by server-side support. Something must be setup on the server side currently. A built-in proxy makes plenty of sense in the Temporal server and is worth a discussion for sure.

Reactions: 👍 2

</details>

<details>
<summary><strong>burakakca</strong> commented on 2023-07-06 08:31:35.000 UTC</summary>

Currently it does not support working in temporal/client browser, is it true?

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-07-06 08:38:42.000 UTC</summary>

We're working on an HTTP/1.1 API that can be used to back running the TS SDK client in a browser.

https://github.com/temporalio/api/pull/301

Reactions: 👍 3

</details>


---

### #1615: [Bug] Cannot use Temporal with NextJS 15 because workflowTypes come from function names

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1615 |
| **State** | OPEN |
| **Author** | rclmenezes (Rodrigo Menezes) |
| **Created** | 2025-01-28 23:19:25.000 UTC (11 months ago) |
| **Updated** | 2025-10-11 05:50:34.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 14 |
| **Priority Score** | 20 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

### What are you really trying to do?

Use Temporal with NextJS 15 in production

### Describe the bug

Temporal Typescript uses the function name as the workflow type. This causes issues when the code is minified.

When using NextJS, the function names get mangled by default. In NextJS <=14, you could set `swcMinify: false` in your next-config to get around this issue:
https://github.com/vercel/next.js/issues/74332#issuecomment-2620236458

However, that is not an option in Next 15, which disabled swcMinify as an option. The only option there is to make a custom webpack config to disable optimization altogether.

### Minimal Reproduction

The official example of nextjs-temporal breaks:
https://github.com/temporalio/nextjs-temporal-one-click-template/issues/3

### Environment/Versions

All of them

### Additional context

I think Temporal Typescript's SDK should support minification, full stop. Users shouldn't have to make a magic webpack config to make things happen.

#### Comments (14)

<details>
<summary><strong>rclmenezes</strong> commented on 2025-01-28 23:50:34.000 UTC</summary>

One hack around I tried: export your workflows separately as an object:

``` typescript
import * as workflows from "./workflows";

export { workflows };
```

And then you can import the object instead:

```typescript
      await temporalClient.workflow.start(workflows.myWorkflow, {
        args: [],
        taskQueue: TEMPORAL_TASK_QUEUE,
        workflowId: `whatever`,
      });
```

EDIT: nope this doesn't work either.

</details>

<details>
<summary><strong>rclmenezes</strong> commented on 2025-01-30 00:32:16.000 UTC</summary>

Here's a solution that worked -- disabling minification on the server. Here's my next-js config:

```typescript
export default {
  webpack: (config) => {
    if (config.name === "server") {
      // Disable minification for server builds to avoid temporal build errors
      config.optimization.minimize = false;
    }
    return config;
  },
};
```

It sucks that we have to do this. Using function names is not great in the long run. Maybe a decorator is a better long-term solution, or turning workflows into classes of some kind.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-30 23:26:51.000 UTC</summary>

I totally understand how this kind of things can be frustrating, and I do agree that we need to improve the overall developer experience for Temporal + Next.js users.

My plan is to eventually provide plugins to ease integration between Temporal TS SDK and other major frameworks. The present issue could very easily be resolved by such a plugin, e.g. by having the plugin apply specific AST transformations during the bundling process.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-30 23:42:58.000 UTC</summary>

> Using function names is not great in the long run. Maybe a decorator is a better long-term solution, or turning workflows into classes of some kind.

Sorry, I strongly disagree on this.

The difficulties you describe are the result of conflicting DX optimizations made respectively by the Temporal SDK and the Next.js teams, which are both sensible defaults for our respective community.

- On the Next.js side — There is technically no strong requirement for bundling, minimizing and optimizing the _backend_ code, but the Next.js community recognized that most developers would appreciate the reduced deployment size, and therefore decided to enable those options by default, leaving the possibility for users _to opt out_ of that feature by using a configuration hook.

- On the Temporal side — A Workflow Type is really just a simple string. We however recognized that most of our developers would appreciate the type safety provided by passing the Workflow function object, and therefore chose to promote that approach in most of our samples; users may however opt out of that feature by passing raw strings rather than functions. Similarly, we chose to define Workflow implementations as publicly exported functions on a module because we recognized that most of our users would appreciate the simplicity of that model; users may however opt in to implement alternate mapping logic (e.g. Workflows as classes or methods) by registering a single default Workflow function.

Default behaviors on both sides are sensible and in the best interest of our respective communities. They only conflict when trying to combine both libraries' defaults in a same project, at which point one needs to do some extra work or to simply opt out to some feature in either libraries.

Would it make sense to say that "Next.js stripping the name property on functions on backend code is not great in the long run"? Obviously not. That decision makes sense for most users in the Next.js community.

Similarly, the patterns we encourage regarding Workflow definition make sense for most users of the Temporal TypeScript SDK. A user may easily implement alternate approaches, including decorator functions and classes. But those alternatives also have drawbacks, and would definitely not be in the interest of most users.

</details>

<details>
<summary><strong>rclmenezes</strong> commented on 2025-01-31 00:21:30.000 UTC</summary>

Thanks for the in-depth response, James.

Framing it as "sensible defaults" on both sides make sense. That said -- I'm surprised that I'm the first to bring this up! I would have thought that most other batteries-included frameworks like Remix minimize backend code by default as well, but if I'm the first to bring this up, then I might be wrong!

Providing a NextJS plugin as a paved path could be a very neat approach. Or at least making the sample repo work in production :)

As an aside... I never knew that `client.workflow.start` takes a raw string as well as a function! That's a really great escape hatch. I wish I saw that in the docs. It opens the door to a lot of custom solutions as you suggest.

I still think that an _optional_ decorator could be a great approach where we keep existing defaults and provide a nice paved path:

```typescript
import {temporalWorkflow} from "temporalio/workflow";

@temporalWorkflow(workflowType='myWorkflow')
function myWorkflow() {
    ...
}
```

In this scenario, `workflow.start` could default back to the function name if some special attribute like `fn.workflowName` isn't present

For now, if I want minification, I'll probably make a quick and dirty custom wrapper for `client.workflow.start`:

```typescript
const workflows: Record<string, WorkflowFn> = {};

async function startFlow<Name extends keyof typeof workflows>(name: Name, args: Parameters<typeof workflows[Name]>[0], workflowId: string) {
  const client = await getTemporalClient();
  return client.workflow.start(name, {
    args: [args],
    taskQueue: TEMPORAL_TASK_QUEUE,
    workflowId,
  });
}
```

Thanks again

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-31 03:49:29.000 UTC</summary>

> I still think that an optional decorator could be a great approach where we keep existing defaults and provide a nice paved path:
> 
> ```
> import {temporalWorkflow} from "temporalio/workflow";
> 
> @temporalWorkflow(workflowType='myWorkflow')
> function myWorkflow() {
>     ...
> }
> ```

Yeah, we would have done that a very long time ago if that was possible, but unfortunately, decorators  (both the ECMAScript Stage 3 proposal _and_ the TypeScript's current spec) only support classes/methods/props… Not simple functions.

Reactions: 👍 2

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-31 03:58:24.000 UTC</summary>

> For now, if I want minification, I'll probably make a quick and dirty custom wrapper for client.workflow.start:
> 
> ```
> const workflows: Record<string, WorkflowFn> = {};
> 
> async function startFlow<Name extends keyof typeof workflows>(name: Name, args: Parameters<typeof workflows[Name]>[0], workflowId: string) {
>   const client = await getTemporalClient();
>   return client.workflow.start(name, {
>     args: [args],
>     taskQueue: TEMPORAL_TASK_QUEUE,
>     workflowId,
>   });
> }
> ```
> 

Yeah, that would work.

Another possibility is to make a proxy object that has the type of your workflow.ts module, but simply return the property name as a string. As a proof of concept, I was able to get the nextjs-ecommerce-oneclick sample running in prod mode by adding this at the top of the `startBuy.js` file:

```
/**
 * @type {import('../../temporal/lib/workflows.js')}
 */
const workflows = new Proxy({}, {
  get: (target, prop) => {
    return prop;
  }
})
```

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-31 04:16:31.000 UTC</summary>

> I would have thought that most other batteries-included frameworks like Remix minimize backend code by default as well

Nowadays, yes, but that's kind of a new thing. Back a few years ago, bundlers were all about frontend stuff. On the server side, you'd always have a `node_modules` directory.

I'd say that IMHO, a major contribution to that trend is that most frameworks are now backed by companies that want to sell you hosting services for your app, so they design the tooling to be very efficient to host, even if that means being less convenient for the developers. And once developers know that they _could_ minimize their backend code, they feel like they are missing something if they don't.

This has a few drawbacks, notably with libraries that have native dependencies, that load files dynamically at runtime (e.g. plugins, languages files, etc), and those that depends on preserving exact properties names and objects names (including Temporal, of course, but also Protobuf, ORMs, and others). That's why most of those frameworks maintain some internal list of libraries known to be non-minimizable safe (see [Next.js](https://github.com/vercel/next.js/blob/cdb275c7b8d77afc27026584e2b0c15448d9688c/packages/next/src/lib/server-external-packages.json#L4)), but in this particular case, it is _your_ code, and not Temporal's NPM packages, that need special handling, so that list can't help.

Reactions: 👀 1

</details>

<details>
<summary><strong>rclmenezes</strong> commented on 2025-01-31 21:14:51.000 UTC</summary>

> decorators (both the ECMAScript Stage 3 proposal and the TypeScript's current spec) only support classes/methods/props… Not simple functions.

Ugh, I didn't know that. I honestly never use decorators in TS, they're a little too Python-y for me.

> Another possibility is to make a proxy object that has the type of your workflow.ts module, but simply return the property name as a string.

I like it -- thanks!

For now, I'm probably just going to disable minification and call it a day. I'm hosting on ECS anyway.

> I'd say that IMHO, a major contribution to that trend is that most frameworks are now backed by companies that want to sell you hosting services for your app, so they design the tooling to be very efficient to host, even if that means being less convenient for the developers. 

You're 100% right about this. My favorite example is actually Next.js middleware. It's so custom built for their own edge infrastructure that it's practically useless.

Literally every other framework I've used in my career has middleware that sees both request and response so you can log or have custom error class handling or identify users in Sentry or whatever. Instead, I have to make a custom wrapApiHandler fo things like this... or move my API to a separate service entirely and deal with the extra infra. What a mess!



Anyway, thanks again! 



Reactions: 👍 1

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-02-08 19:56:29.000 UTC</summary>

@rclmenezes I just got burnt by this, too. Putting this here to help others land on this thread:

```
TypeError: Failed to initialize workflow of type 'tY': no such function is exported by the workflow bundle
``` 

This is because NextJS' production build minifies the Temporal SDK code used to start the workflows. This is the first TypeScript project I've set up with Temporal (done a lot of work with the Python SDK), so I'm contending with multiple build challenges to get an app into production. It's particularly challenging as NextJS also uses tsconfig paths. So I went down a rabbit hole thinking it was something wrong with the worker / workflow bundle / webpack config / tsx/ts-node, etc. etc. I feel pretty dumb now as I can see in the Temporal UI the workflow was triggered with type "tY", so the issue was coming from upstream 😩 

Thanks, @mjameswh for all the helpful info in this thread. Personally, I do hope TS moves towards fully ahead-of-time compiled executables like Bun's build tool. I think that would be awesome, but it is interesting to see the angle that hosting services are pushing it. 

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-02-09 11:08:18.000 UTC</summary>

To build on the suggested solutions, you can use the string-based argument but still set the type param as appropriate (I've used this approach to call Python-based workflows from TS)

```ts
  // kick off the purchase async
  await getTemporalClient().workflow.start<typeof OneClickBuy>("OneClickBuy", {
    taskQueue: 'ecommerce-oneclick',
    workflowId: transactionId,
    args: [itemId],
  });
```

This will give you type-safety on `args` and the handle if you need it for later.

The name mangling doesn't seem to affect signals/queries, though. 

</details>

<details>
<summary><strong>pilsy</strong> commented on 2025-02-21 18:01:27.000 UTC</summary>

I implemented support for using Decorators to define workflows using classes, the way i got around the function name being the entry point is:

```typescript
/**
 * Temporal Decorator
 *
 * A class decorator that transforms a TypeScript class into a Temporal workflow function.
 * This decorator handles the registration, initialization, and lifecycle management of workflows
 * in the TemporalForge framework.
 *
 * Key Features:
 * - Automatically registers the class as a Temporal workflow
 * - Manages workflow initialization and lifecycle events
 * - Handles workflow naming and task queue assignment
 * - Provides automatic error handling and cancellation support
 * - Supports dynamic class extension for non-Workflow classes
 *
 * The decorator performs the following operations:
 * 1. Ensures the class extends the Workflow base class (creates dynamic extension if needed)
 * 2. Sets up workflow metadata and configuration
 * 3. Binds event handlers, hooks, and signals
 * 4. Manages workflow execution flow and error handling
 *
 * @param options - Configuration options for the workflow
 * @returns A class decorator function that transforms the target class into a Temporal workflow
 */
export function Temporal(options?: TemporalOptions) {
  return function (constructor: any) {
    const { name: optionalName, taskQueue, tracerName = 'temporal_worker', ...extraOptions } = options || {};
    const workflowName: string = optionalName ?? constructor.name;

    if (!(constructor.prototype instanceof Workflow)) {
      abstract class DynamicTemporal extends Workflow {
        constructor(params: any, options: TemporalOptions = {}) {
          super(params, options);
          Object.assign(this, new constructor(params, options));
        }
      }
      constructor = DynamicTemporal;
    }

    const construct = new Function(
      'workflow',
      'constructor',
      'extraOptions',
      `
      return async function ${workflowName}(...args) {
        extraOptions.workflowType = '${workflowName}';
        const instance = new constructor(args[0], extraOptions);

        try {
          await instance.bindEventHandlers();
          await instance.emitAsync('setup');
          await instance.emitAsync('hooks');
          await instance.emitAsync('init');

          const executionMethod = instance.continueAsNew
            ? 'executeWorkflow'
            : 'execute';

          return await instance[executionMethod](...args);
        } catch (e) {
          if (workflow.isCancellation(e)) {
            await workflow.CancellationScope.nonCancellable(async () => {
              await workflow.condition(() => instance.status === 'cancelled');
            });
          }
          throw e;
        }
      }
    `
    )(workflow, constructor, extraOptions);

    return construct;
  };
}
```

You can checkout the npm package here - https://github.com/pilsy/chrono-forge/blob/main/README.md
List of decorators here - https://github.com/pilsy/chrono-forge/tree/main/src/decorators

Here is an example:
```typescript
import {
  Property,
  Temporal,
  StatefulWorkflow,
  StatefulWorkflowParams,
  StatefulWorkflowOptions,
  ManagedPaths,
  SchemaManager,
  Signal,
  Query,
  Before,
} from "temporal-forge";

import type { Vendor as VendorModel, Product as ProductModel } from "../types";

import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "../activities";

const { getVendor } = proxyActivities<typeof activities>({
  retry: {
    initialInterval: 1000 * 60,
    maximumAttempts: 30,
  },
});

@Temporal({
  schemaName: "Vendor",
  schemas: SchemaManager.schemas,
})
export class VendorWorkflow extends StatefulWorkflow<
  StatefulWorkflowParams<VendorModel>,
  StatefulWorkflowOptions
> {
  protected managedPaths: ManagedPaths = {
    products: {
      autoStart: true,
      entityName: "Product",
      workflowType: "ProductWorkflow",
    },
  };

  // implement so that data may be loaded using an activity
  protected async loadData() {
    return {
      data: await getVendor(this.id),
    };
  }

  @Property({ path: "name" })
  protected name!: string;

  // this decorator sets up query and signal, and automatically maps via proxy to this.data.products
  @Property({ path: "products" })
  protected products!: ProductModel[];

  // provides a signal named "mySignal"
  @Signal()
  async mySignal() {
    console.log(`[Vendor]-(${this.id}):mySignal()...`);
  }

  // provides a query named "customQuery"
  @Query("customQuery")
  async myQuery() {
    console.log(`[Vendor]-(${this.id}):myQuery()...`);
  }

  // Uses the @Hook decorator to run code before the execute method
  @Before("execute")
  async beforeExecute() {
    console.log(`[Vendor]-(${this.id}):beforeExecute()...`);
  }

  protected async execute() {
    console.log(`[Vendor]-(${this.id}):execute()-> running...`);
  }
}
```

Reactions: 👍 2 🚀 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-30 06:42:30.000 UTC</summary>

@pilsy If you haven't done so yet, I would strongly encourage you to share your project on [Temporal's Code Exchange](https://temporal.io/code-exchange). I know that many Temporal TS developers are looking for this kind of class+decorator experience.

</details>

<details>
<summary><strong>bgw</strong> commented on 2025-10-10 22:14:52.000 UTC</summary>

👋 Reporting in from the Turbopack team here.

First off, sorry that this is causing pain for folks. The last thing we want are breakages when updating Next.js or migrating from webpack. With [Turbopack becoming default in Next 16](https://nextjs.org/blog/next-16-beta#turbopack-stable), we want to make sure there’s a good solution for users of Temporal and Next.js.

I don’t think that disabling mangling or minification is a good idea. Bundling and compressing server-side code is part of how Next.js and “serverless” platforms like Vercel, Cloudflare, and Netlify reduce cold-start times.

It seems like the culprit is relying on the `name` property for functions here: [https://github.com/temporalio/sdk-typescript/blob/9a67b062c9a985475ccf0b7c443bd5feaebd046a/packages/common/src/workflow-options.ts#L262-L273](https://github.com/temporalio/sdk-typescript/blob/9a67b062c9a985475ccf0b7c443bd5feaebd046a/packages/common/src/workflow-options.ts#L262-L273)

## Function Names are *never* Guaranteed

A function’s `name` property is defined in the spec as:

> a String that is descriptive of the function. The name **has no semantic significance** but is **typically** a variable or property name that is used to refer to the function at its point of definition in ECMAScript source text.
> 

— [https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-function-instances-name](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-function-instances-name)

While the function name is typically the one used in the source text, the specification doesn’t actually make any guarantees about function names.

Because the vast majority of applications don’t (and shouldn’t!) care about function names, and because function names tend to be quite long, minifiers (like SWC, OXC, and Terser) often take advantage of this to perform name “mangling”:

> Be careful when using the name property with source-code transformations, such as those carried out by JavaScript compressors (minifiers) or obfuscators. These tools are often used as part of a JavaScript build pipeline to reduce the size of a program prior to deploying it to production. Such transformations often change a function's name at build time.
> 

— [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#javascript_compressors_and_minifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#javascript_compressors_and_minifiers)

Runtimes that perform ahead-of-time compilation, like Hermes, may also choose to strip function names for similar reasons.

In addition to minification, bundler scope hoisting implementations may also choose to rename functions to avoid conflicts in the hoisted module.

Whether or not a specific function name is mangled depends on the minifier chosen and how a number of internal transformations interact. Just because a function name isn’t mangled with one version of Webpack or Vite doesn’t mean it won’t be mangled with the next version.

Whether or not the name actually gets mangled by a specific bundler, you cannot depend on function names for correctness. Mangled function names can change between builds due to the shape of the module graph and internal heuristics.

**The only valid use case of function names is for debugging**, typically against a development build.

## Related: How Does React Handle This?

React has a similar problem, as it uses the function’s name in the React dev tools, but sometimes those functions are anonymous or dynamically-generated (e.g. in the case of higher order components).

For this purpose, their dev tools will first look for a `.displayName` property:

- [https://legacy.reactjs.org/docs/react-component.html#displayname](https://legacy.reactjs.org/docs/react-component.html#displayname)
- [https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName)

This is not a standard, but a convention that React has adopted. In some cases, this property can be added with a Babel transform: [https://babeljs.io/docs/babel-plugin-transform-react-display-name](https://babeljs.io/docs/babel-plugin-transform-react-display-name)

## Recommendations

It looks like Temporal uses function names [for workflow “types”](https://docs.temporal.io/workflows#intro-to-workflows), and needs these names to be stable?

If that’s the case, the best thing to do would be the change the API to require an explicit `workflowType` property to be set on functions. I understand that would make the experience of writing new Temporal workflows worse, but it’s the most reliable solution.

Another option is to make sure the functions are always properties on exported objects. You can rely on the fact that object keys are never mangled ([except in the case of Closure Compiler](https://developers.google.com/closure/compiler/docs/limitations#implications-of-global-variable,-function,-and-property-renaming:)):

```jsx
// workflows.ts
export const workflows = {
  async createExpenseReport() {},
  async approveExpenseReport() {},
};

// Registration
for (const [workflowType, fn] of Object.entries(workflows)) {
  registerWorkflow({ workflowType, fn }); // never rely on fn.name
}
```

If no other solution seems viable, you could take a page from React’s `displayName` playbook and [apply a transform to the source code before it’s bundled and minified](https://babeljs.io/docs/babel-plugin-transform-react-display-name), but this comes with a performance penalty, and would be harder for the Temporal team to maintain:

- [SWC supports plugins](https://nextjs.org/docs/architecture/nextjs-compiler#swc-plugins-experimental). This is the most performant solution, but the plugin API is not stable and [requires matching the version of the plugin with the version of SWC used](https://plugins.swc.rs/). If you do this, [you should get the plugin upstreamed into the official repository, so that it gets rebuilt against each new SWC version](https://github.com/swc-project/plugins).
- Next 16 Beta supports Babel plugins in Turbopack, but they come with a significant performance penalty, so that should be a last resort. Next 15 does not support Babel plugins with Turbopack. [https://nextjs.org/docs/beta/app/api-reference/turbopack#language-features](https://nextjs.org/docs/beta/app/api-reference/turbopack#language-features)
- Turbopack supports most Webpack loaders. If only a small set of files need to be transformed and can be identified using a file name glob (e.g. `workflows.ts`), this might be a reasonably performant solution, even if it uses Babel under the hood. [https://nextjs.org/docs/beta/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders](https://nextjs.org/docs/beta/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders)

Reactions: 👍 10

</details>


---

### #1499: [Feature Request] Native Request Batching to Prevent "received message larger than max" Errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1499 |
| **State** | OPEN |
| **Author** | dp-dandy (David Parsons) |
| **Created** | 2024-08-16 20:06:29.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-21 14:07:58.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 0 |
| **Priority Score** | 14 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 7 |

#### Description

### Is your feature request related to a problem? Please describe.

#### Context
Our team recently encountered a significant issue when attempting to start a large number of activities (~600) asynchronously within a single Temporal workflow. The SDK grouped the activity scheduling requests together, leading to a gRPC error (`ResourceExhausted`) because the total message size (15MB) exceeded the gRPC-imposed limit of 4MB.

This issue causes the workflow to freeze, as the SDK retries the `RespondWorkflowTaskCompleted` API call, which continues to fail due to the message size. Currently, the SDK does not provide any built-in mechanism to automatically handle this limitation, nor does it throw a runtime error that could help developers detect and manage the issue proactively.

#### Underlying Issue
- The Temporal SDK batches multiple activity scheduling commands into a single gRPC request.
- When the cumulative size of these commands exceeds 4MB, gRPC rejects the request with a `ResourceExhausted` error.
- The SDK does not provide an intuitive way to manage this situation, leading to potential workflow freezes and silent failures.

### Describe the solution you'd like

#### Feature Request
To improve the developer experience and robustness of the Temporal SDK, we request the following enhancements:

1. **Automatic Request Splitting**:
   - Implement a mechanism in the SDK to detect when the cumulative size of a gRPC request is approaching the 4MB limit.
   - Automatically split the activity scheduling commands into smaller batches that stay within the size limit, sending them in multiple gRPC requests if necessary.

2. **Runtime Error for Exceeding Limits**:
   - If automatic splitting is not feasible, the SDK should throw a descriptive runtime error when a request exceeds the gRPC message size limit.
   - This error should include suggestions or documentation references on how to adjust the code to stay within the limit, such as reducing the number of activities started simultaneously or compressing payloads.

3. **Improved Logging and Monitoring**:
   - Enhance the logging around gRPC message size limits to make it easier for developers to diagnose issues related to request size.

### Additional Considerations
- **Custom Data Converters**: Although developers can use custom data converters to compress payloads, this should be a secondary approach. The SDK should still provide safeguards against exceeding gRPC limits.
- **Documentation**: Update the SDK documentation to clearly explain the gRPC size limitation, how it interacts with Temporal workflows, and best practices for avoiding issues.

### Impact
Implementing these changes would significantly reduce the likelihood of silent workflow failures and improve the overall resilience of systems built using the Temporal SDK. Developers would have better tools to manage gRPC limitations, leading to more reliable and maintainable code.

---
A rough incomplete solution that we are piloting is something like:
```typescript
import type { ActivityFunction } from '@temporalio/common';
import { DefaultPayloadConverter } from '@temporalio/common';

const MAX_BATCH_PAYLOAD_SIZE = 3 * 1024 * 1024; // 3MB, leaving a buffer for any unknown overhead associated with the activities

const defaultPayloadConverter: DefaultPayloadConverter = new DefaultPayloadConverter();

function getPayloadSize<PayloadType extends Parameters<ActivityFunction>>(args: PayloadType): number {
    const payload = defaultPayloadConverter.toPayload(args);
    if (payload.data instanceof Uint8Array) {
        return payload.data.length;
    }
    return 0;
}

function groupIntoMaxSizePayloads<PayloadType extends Parameters<ActivityFunction>>(
    activityArgs: PayloadType[],
    maxSize: number = MAX_BATCH_PAYLOAD_SIZE,
): PayloadType[][] {
    const payloadGroups: PayloadType[][] = [];

    let currentGroup: PayloadType[] = [];
    let currentGroupSize = 0;
    for (const args of activityArgs) {
        const argsSize = getPayloadSize(args);
        if (argsSize > maxSize) {
            // throw some error about the request size being too big
        }
        // If the current group size plus the size of the next args is greater than the max size,
        // push the current group and start a new one
        if (currentGroupSize + argsSize > maxSize) {
            payloadGroups.push(currentGroup);
            currentGroup = [];
            currentGroupSize = 0;
        }
        currentGroup.push(args);
        currentGroupSize += argsSize;
    }
    // Push the last group if it's not empty
    if (currentGroup.length > 0) {
        payloadGroups.push(currentGroup);
    }
    return payloadGroups;
}

export async function safeStartActivities<Activity extends ActivityFunction, Arguments>(
    activity: Activity,
    args: Arguments[],
): Promise<PromiseSettledResult<Awaited<ReturnType<Activity>>>[]> {
    const maxRequestSizeBatches: Parameters<Activity>[][] = groupIntoMaxSizePayloads(
        args.map((arg: Arguments) => arg as Parameters<Activity>),
    );
    const results: PromiseSettledResult<Awaited<ReturnType<Activity>>>[] = [];
    for (const maxRequestSizeBatch of maxRequestSizeBatches) {
        const promises: Promise<ReturnType<Activity>>[] = maxRequestSizeBatch.map((args: Parameters<Activity>) =>
            activity(args),
        );
        const awaited = await Promise.allSettled(promises);
        results.push(...awaited);
    }
    return results;
}

```

### Additional context
Cloud Support Thread: https://temporalio.slack.com/archives/C046BRWDV2R/p1723743294696369

<!-- Add any other context or screenshots about the feature request here. -->



---

### #933: [Feature Request] Create a separate "core" library for workflows that does not include bundler deps.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/933 |
| **State** | OPEN |
| **Author** | psigen (Pras Velagapudi) |
| **Created** | 2022-10-22 16:24:02.000 UTC (3y 2m ago) |
| **Updated** | 2025-02-06 13:52:26.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 2 |
| **Priority Score** | 14 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 |

#### Description

### Is your feature request related to a problem? Please describe.

Dependencies are structured in `@temporalio/worker`'s package.json such that there is no way to not include `webpack` + `@swc/core` in a runtime build, because `@temporalio/worker` includes them in `dependencies` regardless of whether runtime bundling is required or not.

`@swc/core` is around ~150MB, so it adds a lot of bloat to distroless images and goes completely unused if workflow bundling has already happened in a separate build step, which is common in containerized build processes.

### Describe the solution you'd like

It would be great if we had a runtime package (e.g. `@temporalio/worker-core`) which just contained minimal deps for running a worker and excluded bundler components.  It could itself be a dependency of the full `@temporalio/worker` for compatibility.

### Additional context

I added an example build with a step to manually strip out bundler dependencies here:
https://github.com/psigen/temporal-ts-example/blob/main/Dockerfile#L77

This reduced runtime images by almost 200MB, to a pretty manageable <300MB overall size for a distroless image.

Original idea from [this slack thread](https://temporalio.slack.com/archives/C01DKSMU94L/p1666364463170599?thread_ts=1666045881.718069&cid=C01DKSMU94L)

#### Comments (2)

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-28 19:48:34.000 UTC</summary>

This is a summary of [my comment here](https://github.com/temporalio/sdk-typescript/issues/1613#issuecomment-2619435978):

To avoid breaking existing code, we should really split the current `worker` package in two: `bundler` and `worker-core`, then have `worker` reexport everything from the two others. The `worker` package would be deprecated, but would need to be kept around until the next major release.

Now, that's totally feasible, but has some painful consequences in regard to other ongoing development efforts — pretty much all outstanding PRs and WIP on feature branches would get broken by this change, requiring non-trivial manual work to conciliate changes. That's obviously not a complete blocker, but simply means that we should try to complete and merge as much ongoing work as we can before investing effort in splitting `worker`.

In the mean time, one may work around this by using any of the following mechanisms:
- [NPM's `overrides` property](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#overrides);
- [`yarn`'s resolutions property](https://classic.yarnpkg.com/en/docs/package-json#toc-resolutions);
- [PNPM's `overrides` property](https://pnpm.io/package_json#pnpmoverrides);
- [PNPM's `readPackage` hook](https://pnpm.io/pnpmfile).

Reactions: 👍 3

</details>

<details>
<summary><strong>shamrin</strong> commented on 2025-02-06 13:52:26.000 UTC</summary>

NPM `overrides` feature lacks an ability to skip dependency. I had to manually edit `package-lock.json` to accomplish it:

```shell
# step 1: install worker
npm install @temporalio/worker

# step 2: manually remove all references to `@swc/core` and `swc-loader` from package-lock.json

# step 3: reinstall everything based on modified package-lock.json
rm -rf node_modules/
npm install
```

</details>


---

### #1443: [Bug] Failure to start ephemeral server prevents shutdown of the process

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1443 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-06-14 16:02:00.000 UTC (1y 6m ago) |
| **Updated** | 2025-02-20 23:06:32.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 1 |
| **Priority Score** | 13 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 |

#### Description

### Describe the bug

We regularly see patterns like the following in our CI; I presume this also affects users. The cause of the failure to start an ephemeral server isn't important (in this case, trying to use the time skipping server on Linux ARM, which isn't supported).

```
integration-workflows › before hook
Rejected promise returned by test. Reason:
UnexpectedError {
  message: 'Failed to start ephemeral server: HTTP status client error (404 Not Found) for url (https://temporal.download/temporal-test-server/default?arch=arm64&platform=linux&sdk-name=sdk-typescript&sdk-version=1.10.1)',
}

integration-workflows › after.always hook
Rejected promise returned by test. Reason:
TypeError {
  message: 'Cannot read properties of undefined (reading \'teardown\')',
}
› <anonymous> (src/helpers-integration.ts:89:30)

...then process never completes shutdown
```

#### Comments (1)

<details>
<summary><strong>diogotorres97</strong> commented on 2025-02-20 23:06:32.000 UTC</summary>

Do we have a fix to run this on ARM machines?

Reactions: 👀 1

</details>


---

### #1749: [Bug] Workflow task not found after SDK upgrade

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1749 |
| **State** | OPEN |
| **Author** | btravers (Benoit Travers) |
| **Created** | 2025-07-23 05:56:52.000 UTC (5 months ago) |
| **Updated** | 2025-09-08 16:23:59.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 4 |
| **Priority Score** | 12 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

### What are you really trying to do?

We are upgrading Temporal SDK from 1.11.8 to 1.12.1.

### Describe the bug

We have a long-running workflow. After upgrading the SDK, we are experiencing the following error: `"Workflow task not found."`
When we roll back to the previous version, the error disappears.


#### Comments (4)

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-25 15:17:40.000 UTC</summary>

Do you see any other error message besides the "Workflow task not found."? Any information that could help diagnose or reproduce what you are observing?

</details>

<details>
<summary><strong>shaz1v</strong> commented on 2025-07-31 07:57:15.000 UTC</summary>

We are seeing similar issues as-well with the new version, the workflows we tested the new SDK version with were short-running ones with large number activities, and the new SDK resulted in very slow processing and workflow being stuck for few good minutes before picking up the next activity, reverting resolved and everything instantly closed

The full log line we saw was

> 2025-07-31T07:46:46.723583Z  WARN temporal_sdk_core::worker::workflow: Task not found when completing error=status: NotFound, message: "Workflow task not found.", details: [8, 5, 18, 24, 87, 111, 114, 107, 102, 108, 111, 119, 32, 116, 97, 115, 107, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 46, 26, 66, 10, 64, 116, 121, 112, 101, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 46, 99, 111, 109, 47, 116, 101, 109, 112, 111, 114, 97, 108, 46, 97, 112, 105, 46, 101, 114, 114, 111, 114, 100, 101, 116, 97, 105, 108, 115, 46, 118, 49, 46, 78, 111, 116, 70, 111, 117, 110, 100, 70, 97, 105, 108, 117, 114, 101], metadata: MetadataMap { headers: {"content-type": "application/grpc", "server": "temporal", "date": "Thu, 31 Jul 2025 07:46:46 GMT"} } run_id="01985f6f-b5ea-73a8-bb25-93b37c8db50d"

Reactions: 👍 1

</details>

<details>
<summary><strong>koliaVasyliv</strong> commented on 2025-08-28 09:01:42.000 UTC</summary>

hey, @mjameswh have you been able to look into this issue? it's blocking us to upgrade to newer versions.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-09-08 16:14:27.000 UTC</summary>

Hey! Sorry, I was out for a few days.

Unfortunately, I haven't been able to reproduce this error myself, and I don't observe any issue with any of our regular performance tests. It also seems like this is affecting only a very small subset of users, which suggests there might be some particular conditions required to reproduce this.

The log entry reported above isn't helping either; the "details" shown contain nothing more than the error status and message that are already printed out as plain text, just above. And in any case, the `Workflow task not found.` error is almost certainly just a secondary symptom; the real problem is that the Worker is not completing task within the allowed time (i.e. 10 seconds by default). The performance problem is what needs to be figured out.

Before anything else, I would recommend trying this again, with v1.13.0. That release notably [fixed a bug](https://github.com/temporalio/sdk-typescript/pull/1777) that could surface as an apparent memory leak in some Worker configurations. The increased memory pressure caused by this bug might have increased time spent in GC, thus considerably reducing the Worker's performance.

If this is not fixed by v1.13.0, could you please provide the following:
- Your `Runtime`'s options
- Your `Worker`'s options
- Graphs of your CPU usage and Memory usage
- When does that happen? Is that after the Worker's has been quietly running for a long time? Are you seeing many of those errors in short time, then no more for some time, and then again?
- Anything in your Worker's logs that seems potentially pertinent.

</details>


---

### #1233: [Bug] `nyc-test-coverage` is excessively difficult to use correctly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1233 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-09-06 19:19:07.000 UTC (2y 3m ago) |
| **Updated** | 2025-08-20 07:54:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 12 |
| **Priority Score** | 12 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 3 |

#### Description

### Describe the bug

At the moment, using the `@temporalio/nyc-test-coverage` package to collect coverage data for Workflow tests is quite difficult and generally fragile. Though it works with appropriate setup (eg. we have a sample demonstrating that it works), some users are struggling at replicating that "winning combination" in their own project, despite considerable efforts and willingness to accept applicable constraints (eg. use Mocha or AVA, ts-node rather than ts-mocha or similar, pre-transpile TS code to pure-JS, hardcode workflow name in their test files to avoid importing wokrlfow.ts from tests, etc).

### What need to be done

This situation can be improved from two sides:
1. Improve the tool itself so that it is less fragile / more resilient to changes in its runtime environment
2. Provide clear instructions on how to use it

#### Comments (12)

<details>
<summary><strong>zijianzz</strong> commented on 2023-09-11 13:05:04.000 UTC</summary>

Here is our version of story about this issue

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->
Test `@temporalio/nyc-test-coverage` package to collect coverage data by using either Jest or Mocha

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

Workflow example: 
<img width="662" alt="image" src="https://github.com/temporalio/sdk-typescript/assets/91457486/7f1b5db9-023d-4509-ba20-571ac34a0502">


Jest test code

```
import { TestWorkflowEnvironment } from '@temporalio/testing';
import { Worker } from '@temporalio/worker';
import { WorkflowCoverage } from '@temporalio/nyc-test-coverage';
import * as activities from '../../../activities';
import { exampleWorkflow } from '../test';

jest.mock('../../../activities');
const mockedActivties = jest.mocked(activities);
async function setupTestEnv(timeSkipping: boolean = true): Promise<TestWorkflowEnvironment> {
  return timeSkipping ? TestWorkflowEnvironment.createTimeSkipping() : TestWorkflowEnvironment.createLocal();
}

async function setupTestWorker(env: TestWorkflowEnvironment, workflowCoverage: WorkflowCoverage) {
  return Worker.create(
    workflowCoverage.augmentWorkerOptions({
      connection: env.nativeConnection,
      workflowsPath: require.resolve('../../test'),
      activities,
      taskQueue: 'test',
    }),
  );
}

describe('create restaurant', () => {
  let testEnv: TestWorkflowEnvironment;
  let worker: Worker;
  const workflowCoverage = new WorkflowCoverage();

  beforeAll(async () => {
    testEnv = await setupTestEnv();
  });

  afterAll(async () => {
    await testEnv?.teardown();
    jest.setTimeout(5000);
    jest.clearAllMocks();
    jest.resetAllMocks();
    workflowCoverage.mergeIntoGlobalCoverage();
  });

  beforeEach(async () => {
    worker = await setupTestWorker(testEnv, workflowCoverage);
  });

  describe('Successful case', () => {
    it('should return true', async () => {
      mockedActivties.testActivity.mockResolvedValueOnce(undefined);
      const result = await worker.runUntil(async () => {
        return testEnv.client.workflow.execute(exampleWorkflow, {
          workflowId: 'a-fake-workflow-id',
          taskQueue: 'test',
          args: [
            {
              ok: true,
            },
          ],
        });
      });

      expect(result).toStrictEqual(true);
    });
  });
});

```

Mocha test code

```
import { Worker } from '@temporalio/worker';
import { TestWorkflowEnvironment } from '@temporalio/testing';
import * as assert from 'assert';
import { v4 as uuid } from 'uuid';
import { after, before, describe, it } from 'mocha';
import { WorkflowCoverage } from '@temporalio/nyc-test-coverage';
import { ActivityFunction } from '@temporalio/common';
import * as activities from '../../../activities';
import { exampleWorkflow } from '../test';

const workflowCoverage = new WorkflowCoverage();
const mockedActivities: Record<string, ActivityFunction> = {};
const activitiesNames = Object.keys(activities);
for (const name of activitiesNames) {
  mockedActivities[name] = async () => undefined;
}

describe('createRestaurant workflow', async function () {
  let worker: Worker;
  let env: TestWorkflowEnvironment;

  this.slow(10_000);
  this.timeout(20_000);
  before(async function () {
    // Filter INFO log messages for clearer test output
    env = await TestWorkflowEnvironment.createTimeSkipping();
  });

  beforeEach(async () => {
    worker = await Worker.create(
      workflowCoverage.augmentWorkerOptions({
        connection: env.nativeConnection,
        taskQueue: 'test',
        workflowsPath: require.resolve('../../'),
        activities: {
          ...mockedActivities,
        },
      }),
    );
  });

  after(async () => {
    await env?.teardown();
  });

  after(() => {
    workflowCoverage.mergeIntoGlobalCoverage();
  });

  it('sucessfully return true if ok is true', async () => {
    const result = await worker.runUntil(async () => {
      return env.client.workflow.execute(exampleWorkflow, {
        taskQueue: 'test',
        workflowId: uuid(),
        args: [
          {
            ok: true,
          },
        ],
      });
    });
    assert.deepStrictEqual(result, true);
  });

  it('sucessfully return true if ok is false', async () => {
    const result = await worker.runUntil(async () => {
      return env.client.workflow.execute(exampleWorkflow, {
        taskQueue: 'test',
        workflowId: uuid(),
        args: [
          {
            ok: false,
          },
        ],
      });
    });
    assert.deepStrictEqual(result, true);
  });
});

```

By using jest with following jest config + `@temporalio/nyc-test-coverage`, sdk will send us runtime js error depending on version of sdk we used
```
module.exports = {
  testEnvironment: 'node',
  forceExit: true,
  collectCoverage: true,
  coverageDirectory: 'coverage/jest',
  coverageProvider: 'babel',
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@lafourchette/tfm-restaurant-composite-types/dist/(.*)$': '<rootDir>/packages/types/src/$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)', '!**/__tests__/**/*.mocha.test.+(ts|tsx|js)'],
};

```


- sdk version 1.8.4 or 1.7.4 + jest => runtime js error
```
Error: Invalid file coverage object, missing keys, found:data
    at assertValidObject (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/file-coverage.js:38:15)
    at new FileCoverage (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/file-coverage.js:119:9)
    at maybeConstruct (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:15:12)
    at /Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:25:19
    at Array.forEach (<anonymous>)
    at loadMap (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:24:28)
    at new CoverageMap (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:42:25)
    at maybeConstruct (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:15:12)
    at CoverageMap.merge (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/istanbul-lib-coverage/lib/coverage-map.js:53:23)
    at CoverageReporter.onTestResult (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/@jest/reporters/build/CoverageReporter.js:167:25)
    at ReporterDispatcher.onTestFileResult (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/@jest/core/build/ReporterDispatcher.js:32:24)
    at onResult (/Users/zzuo/Git/tfm-restaurant-composite/node_modules/@jest/core/build/TestScheduler.js:154:7)
```

By using mocha and launching following command + `@temporalio/nyc-test-coverage`, sdk will send us either inaccurate coverage data, timeout error depending on version of sdk we used

`nyc --reporter=lcov --reporter=text ts-mocha src/**/*.mocha.test.ts`


- 1.7.4 => timeout error
<img width="1350" alt="image" src="https://github.com/temporalio/sdk-typescript/assets/91457486/3cbabb88-fdda-43f4-932d-fe954dd0daa9">

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?

Mac os 13.5
SDK 1.7.4 or 1.8.4

### Additional context

<!-- Add any other context about the problem here. -->


</details>

<details>
<summary><strong>jamespsterling</strong> commented on 2023-12-01 17:14:20.000 UTC</summary>

I had the same `Error: Invalid file coverage object, missing keys, found:data` error and fixed it by patching `istanbul-lib-coverage`.

```patch
diff --git a/node_modules/istanbul-lib-coverage/lib/file-coverage.js b/node_modules/istanbul-lib-coverage/lib/file-coverage.js
index 4ed4c09..08e272c 100644
--- a/node_modules/istanbul-lib-coverage/lib/file-coverage.js
+++ b/node_modules/istanbul-lib-coverage/lib/file-coverage.js
@@ -206,6 +206,8 @@ class FileCoverage {
             this.data = emptyCoverage(pathOrObj, reportLogic);
         } else if (pathOrObj instanceof FileCoverage) {
             this.data = pathOrObj.data;
+        } else if (typeof pathOrObj === 'object' && pathOrObj.data) {
+            this.data = pathOrObj.data;
         } else if (typeof pathOrObj === 'object') {
             this.data = pathOrObj;
         } else {
```

The underlying issue is that `FileCoverage` is receiving an instance of `CoverageMap` when it's expecting instance of `FileCoverage` in the constructor branching assignment to `this.data`.

https://github.com/istanbuljs/istanbuljs/blob/5584b50305a6a17d3573aea25c84e254d4a08b65/packages/istanbul-lib-coverage/lib/file-coverage.js#L205-L213

Reactions: 👍 3

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-12-01 21:53:31.000 UTC</summary>

@jamespsterling Thanks for sharing your findings. Yes, I believe there's been a recent regression (possibly on our side) that made our `nyc-test-coverage` plugin fails in cases where it was previously working. What you are pointing at should help figure out where that regression lies.

</details>

<details>
<summary><strong>ilijaNL</strong> commented on 2024-05-01 12:37:52.000 UTC</summary>

Any update on this?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-05-01 15:36:04.000 UTC</summary>

> Any update on this?

Not yet, sorry.

</details>

<details>
<summary><strong>ilijaNL</strong> commented on 2024-05-01 18:41:25.000 UTC</summary>

This area needs some improvement. We use a monorepo setup with jest (ts-jest as transformer). We have high code coverage requirement thus we using `collectCoverageFrom`. Somehow when we use the nyc-test-coverage package, the coverage is not merged correctly and we get really weird code coverage report. I assume this is due that the final sourcemaps are different between what ts-jest transforms and webpack (used by temporal sdk). 
This is kind of deal breaker atm.

</details>

<details>
<summary><strong>surjyams</strong> commented on 2024-05-29 15:51:30.000 UTC</summary>

Is there any update on this? We are running into the same issue with @temporalio/nyc-test-coverage@1.10.1

</details>

<details>
<summary><strong>gaurav1999</strong> commented on 2024-07-04 14:39:07.000 UTC</summary>

@mjameswh Facing same issue

```
● Test suite failed to run

    Invalid file coverage object, missing keys, found:data

      at assertValidObject (../node_modules/istanbul-lib-coverage/lib/file-coverage.js:38:15)
      at new FileCoverage (../node_modules/istanbul-lib-coverage/lib/file-coverage.js:214:9)
      at maybeConstruct (../node_modules/istanbul-lib-coverage/lib/coverage-map.js:15:12)
      at ../node_modules/istanbul-lib-coverage/lib/coverage-map.js:25:19
          at Array.forEach (<anonymous>)
      at loadMap (../node_modules/istanbul-lib-coverage/lib/coverage-map.js:24:28)
      at new CoverageMap (../node_modules/istanbul-lib-coverage/lib/coverage-map.js:42:25)
      at maybeConstruct (../node_modules/istanbul-lib-coverage/lib/coverage-map.js:15:12)
```

```
 const worker = await Worker.create(workflowCoverage.augmentWorkerOptions({
      connection: nativeConnection,
      taskQueue,
      workflowsPath: require.resolve('./runops-success.test.ts'),
      activities
    }));

```

</details>

<details>
<summary><strong>0xBigBoss</strong> commented on 2024-07-06 02:56:39.000 UTC</summary>

> I had the same `Error: Invalid file coverage object, missing keys, found:data` error and fixed it by patching `istanbul-lib-coverage`.
> 
> ```diff
> diff --git a/node_modules/istanbul-lib-coverage/lib/file-coverage.js b/node_modules/istanbul-lib-coverage/lib/file-coverage.js
> index 4ed4c09..08e272c 100644
> --- a/node_modules/istanbul-lib-coverage/lib/file-coverage.js
> +++ b/node_modules/istanbul-lib-coverage/lib/file-coverage.js
> @@ -206,6 +206,8 @@ class FileCoverage {
>              this.data = emptyCoverage(pathOrObj, reportLogic);
>          } else if (pathOrObj instanceof FileCoverage) {
>              this.data = pathOrObj.data;
> +        } else if (typeof pathOrObj === 'object' && pathOrObj.data) {
> +            this.data = pathOrObj.data;
>          } else if (typeof pathOrObj === 'object') {
>              this.data = pathOrObj;
>          } else {
> ```
> 
> The underlying issue is that `FileCoverage` is receiving an instance of `CoverageMap` when it's expecting instance of `FileCoverage` in the constructor branching assignment to `this.data`.
> 
> https://github.com/istanbuljs/istanbuljs/blob/5584b50305a6a17d3573aea25c84e254d4a08b65/packages/istanbul-lib-coverage/lib/file-coverage.js#L205-L213

[This patch is working for me.](https://github.com/temporalio/sdk-typescript/issues/1233#issuecomment-1836484772) 

Side note, this seems it's also being tracked in the `nyc` github. https://github.com/istanbuljs/nyc/issues/1226


</details>

<details>
<summary><strong>jgnieuwhof</strong> commented on 2024-07-25 00:01:35.000 UTC</summary>

@ilijaNL 

> ... Somehow when we use the nyc-test-coverage package, the coverage is not merged correctly and we get really weird code coverage report. I assume this is due that the final sourcemaps are different between what ts-jest transforms and webpack (used by temporal sdk). This is kind of deal breaker atm.

I found the same thing - I was getting coverage but the lines didn't make sense, and were actually inconsistent depending on which test files I included in the test run. The issue does appear to be with how the `mergeIntoGlobalCoverage` function performs its merge, as coverage is correct when bypassing the merge and just writing the coverage data to `.nyc_output`.

Here's the workaround that solved the issue for me:

```typescript

// instead of this
afterAll(async () => {
  workflowCoverage.mergeIntoGlobalCoverage();
});

// do this
import { createCoverageMap } from "istanbul-lib-coverage";

afterAll(async () => {
  const coverageMap = createCoverageMap();
  for (const data of workflowCoverage.coverageMapsData) {
    coverageMap.merge(data);
  }
  await fs.writeFile(
    path.join(".nyc_output", `${uuid4()}.json`),
    JSON.stringify(coverageMap)
  );
});
```


</details>

<details>
<summary><strong>ilijaNL</strong> commented on 2024-07-26 04:41:13.000 UTC</summary>

> @ilijaNL
> 
> > ... Somehow when we use the nyc-test-coverage package, the coverage is not merged correctly and we get really weird code coverage report. I assume this is due that the final sourcemaps are different between what ts-jest transforms and webpack (used by temporal sdk). This is kind of deal breaker atm.
> 
> I found the same thing - I was getting coverage but the lines didn't make sense, and were actually inconsistent depending on which test files I included in the test run. The issue does appear to be with how the `mergeIntoGlobalCoverage` function performs its merge, as coverage is correct when bypassing the merge and just writing the coverage data to `.nyc_output`.
> 
> Here's the workaround that solved the issue for me:
> 
> ```ts
> // instead of this
> afterAll(async () => {
>   workflowCoverage.mergeIntoGlobalCoverage();
> });
> 
> // do this
> import { createCoverageMap } from "istanbul-lib-coverage";
> 
> afterAll(async () => {
>   const coverageMap = createCoverageMap();
>   for (const data of workflowCoverage.coverageMapsData) {
>     coverageMap.merge(data);
>   }
>   await fs.writeFile(
>     path.join(".nyc_output", `${uuid4()}.json`),
>     JSON.stringify(coverageMap)
>   );
> });
> ```

This is okaay if your whole describe block only include workflow tests, if it includes some non workflow test, jest (global.__coverage__) will not include those in the coverage. 

</details>

<details>
<summary><strong>diephil</strong> commented on 2025-08-20 07:54:16.000 UTC</summary>

Hi there, is there any progress on this topic? We're using jest with @temporalio/nyc-test-coverage@1.11.7 and we are facing the `Error: Invalid file coverage object, missing keys, found:data` issue as well.

</details>


---

### #1432: [Feature Request] Simplify proper usage of `AsyncLocalStorage` in Workflow context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1432 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-05-30 20:06:15.000 UTC (1y 7m ago) |
| **Updated** | 2024-11-03 13:08:35.000 UTC |
| **Upvotes** | 5 |
| **Comments** | 1 |
| **Priority Score** | 11 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 5 |

#### Description

### Description

`AsyncLocalStorage` are frequently used inside of Workflow context, for example to implement correlation/tracing/context propagation mechanisms. However, most users don't know (or forget) that ALS must be "disabled" when they are no longer required (i.e. when the workflow execution gets evicted from cache). Otherwise, they do retain heap and still get called for every single `AsyncResource` (e.g. mostly `Promise` in this context) creation.

Given that we already control access to the `AsyncLocalStorage` in Workflow context, it would be easy for the SDK to track instantiation of `AsyncLocalStorage`, and automatically dispose them when the execution context is about to be destroyed.

We also need to investigate either usage of ALS inside of Workflow Context is efficient. Since ALS hooks work at the Worker Thread level, each ALS instance “tags” (i.e. adds a `[kResourceStore]` property on) every single `AsyncResource` that gets created in that Worker Thread, without regard to which VM the ALS or the AsyncResource was created in.

This could possibly mean that, even when ALS get disposed properly, using ALS inside workflows may currently add a memory and performance penalty that grows exponentially with the number of currently cached workflows. Based on memory snapshots provided by a customer, the constant multiplier here would be relatively small (48 bytes per “tag” in >99% of cases), and therefore, this problem may not be immediately apparent, but could still have sizable impact on Workflow Worker where `maxCachedWorkflow` is high.

Again, given that we already control access to the `AsyncLocalStorage` in Workflow context, it would be possible for the SDK to provide a custom implementation of ALS that is workflow-aware and/or that scales better.

#### Comments (1)

<details>
<summary><strong>neelance</strong> commented on 2024-11-03 13:08:34.000 UTC</summary>

Please see #1557.

</details>


---

### #1280: Bundle using Vite

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1280 |
| **State** | OPEN |
| **Author** | gajus (Gajus Kuizinas) |
| **Created** | 2023-11-03 17:23:53.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-09 04:16:41.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 5 |
| **Priority Score** | 11 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

I am sure you are already familiar with Vite https://vitejs.dev/

Webpack is great, but it is pretty slow and waiting 10 seconds for bundle to complete can become a nuisance.

It would be really nice to be able to bundle using Vite.

#### Comments (5)

<details>
<summary><strong>bkniffler</strong> commented on 2023-11-05 00:03:24.000 UTC</summary>

I'm using esbuild and building for production only takes 0.6s (workflows.js and worker.js), no need to use the built-in webpack bundling. For dev/watch mode, I'm using https://github.com/esbuild-kit/tsx.

<img width="369" alt="Bildschirmfoto 2023-11-05 um 00 58 44" src="https://github.com/temporalio/sdk-typescript/assets/4349324/22766018-badb-4873-8c75-7fa28997e352">

I agree it would be cool if temporal moved to a faster build-in bundler (vite or esbuild). Think cloudflare wrangler and aws sdk  have gone for esbuild by default.

</details>

<details>
<summary><strong>gajus</strong> commented on 2023-11-05 03:09:05.000 UTC</summary>

> I'm using esbuild and building for production only takes 0.6s (workflows.js and worker.js), no need to use the built-in webpack bundling.

Can you elaborate how?

</details>

<details>
<summary><strong>bkniffler</strong> commented on 2023-11-05 09:05:54.000 UTC</summary>

Build script js file building index.js and workflows.js via esbuild
https://gist.github.com/bkniffler/9fe91f6a1a8ba05f1eeb993441c7cdb5

Dev NPM script using tsx to run worker
`NODE_NO_WARNINGS=1 tsx watch src/index.ts`

If I've some time, I'd be happy to provide a simple sample project.

</details>

<details>
<summary><strong>baileywickham</strong> commented on 2023-11-08 19:13:35.000 UTC</summary>

@bkniffler If you have time to create a sample project, I would definitely appreciate it. 

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-11-09 04:16:41.000 UTC</summary>

@bkniffler AFAICT you still need the sdk’s webpack bundler after you generate your js bundle with esbuild.
How are you instantiating your worker?

Reactions: 👍 1

</details>


---

### #868: [Feature Request] Add lint rule that prevents Query handlers from mutating state

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/868 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-09-16 01:08:55.000 UTC (3y 3m ago) |
| **Updated** | 2022-10-22 00:33:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 11 |
| **Priority Score** | 11 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

The only hole in TS's enforced determinism (besides intentionally escaping the vm) is mutating state in Query handlers. 

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

A lint rule that prevents mutations in Query handlers.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

From Roey:

https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutation.md

Unsure if there's a way to apply it to specific functions. May need to fork.

#### Comments (11)

<details>
<summary><strong>vkarpov15</strong> commented on 2022-09-18 02:03:03.000 UTC</summary>

@lorensr I took a look and the `no-mutation` rule just disallows `UpdateExpression` and `AssignmentExpression`, so sufficiently simple that we don't need to fork.

The tricky part of this task is making ESLint understand to only apply this rule to `setHandler()` function calls, and only to `setHandler()` calls where the first argument is a Query. I'll look into this a little more to see if I can get TypeScript types in ESLint rules. So far the best I've been able to come up with is making guesses based on the name:

```javascript
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name=\'setHandler\'][arguments.0.name=/.*Query/] AssignmentExpression',
        message: 'Cannot assign values in query handlers'
      },
      {
        selector: 'CallExpression[callee.name=\'setHandler\'][arguments.0.name=/.*Query/] UpdateExpression',
        message: 'Cannot assign values in query handlers'
      }
    ],
```

That rule will throw, for example, on the 2nd `setHandler()` call of the following:

```javascript
  let isBlocked = true;
  setHandler(unblockSignal, () => void (isBlocked = false));
  setHandler(isBlockedQuery, () => {
    isBlocked = isBlocked || true;
    return isBlocked;
  });
```

</details>

<details>
<summary><strong>vkarpov15</strong> commented on 2022-09-18 18:01:52.000 UTC</summary>

I came up with a basic example of a custom ESLint rule that looks for functions named 'setHandler' whose first param is of type `QueryDefinition`, and reports an error if there is an assignment in that function's body. The below code is an example implementation and basic test case.

This isn't quite bulletproof because it checks for 'setHandler' and 'QueryDefinition' by name, so if there are conflicting userland functions with the same names this rule would still trigger.

```javascript
'use strict';

const { ESLintUtils } = require('@typescript-eslint/utils');

const rule = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      AssignmentExpression(node) {
        const parserServices = ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();

        // Does this assignment expression have an ancestor that is a `setHandler()`
        // CallExpression where the first arg is a `QueryDefinition`?
        const ancestors = context.getAncestors();
        for (const ancestor of ancestors) {
          if (ancestor.type !== 'CallExpression') {
            continue;
          }
          
          if (ancestor.callee.name !== 'setHandler' && !ancestor.callee.name.endsWith('setHandler')) {
            continue;
          }
  
          const firstArg = parserServices.esTreeNodeToTSNodeMap.get(
            ancestor.arguments[0]
          );
          const nodeType = checker.getTypeAtLocation(firstArg);
  
          if (nodeType.symbol.escapedName !== 'QueryDefinition') {
            continue;
          }

          context.report({
            messageId: 'queryHandlerMutation',
            node,
          });
        }
      },
    };
  },
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Avoid mutations in query handlers.',
    },
    messages: {
      queryHandlerMutation: 'Avoid mutations in query handlers.',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: []
});

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
});

const valid = [];

valid.push(`
import { setHandler, defineQuery, defineSignal } from '@temporalio/workflow';

export const unblockSignalButLooksLikeQuery = defineSignal('unblock');
export const isBlockedQuery = defineQuery<boolean>('isBlocked');

setHandler(unblockSignalButLooksLikeQuery, () => void (isBlocked = false));
setHandler(isBlockedQuery, () => isBlocked);
`);

const invalid = [];

invalid.push(`
import { setHandler, defineQuery, defineSignal } from '@temporalio/workflow';

export const unblockSignalButLooksLikeQuery = defineSignal('unblock');
export const isBlockedQuery = defineQuery<boolean>('isBlocked');

setHandler(unblockSignalButLooksLikeQuery, () => void (isBlocked = false));
setHandler(isBlockedQuery, () => {
  isBlocked = !isBlocked;
  return isBlocked;
});
`);

ruleTester.run('test', rule, {
  valid: valid.map(code => ({ code })),
  invalid: invalid.map(code => ({ code, errors: [{ messageId: 'queryHandlerMutation' }] }))
});
```

@lorensr do you think it is worth buttoning this up, or would you suggest an alternative approach? A couple other potential options I've thought of:

1. Recommend manually putting `/* eslint no-restricted-syntax: ['error', 'AssignmentExpression', 'UpdateExpression'] */` at the top of query handler function bodies
2. Recommend defining query handlers in a separate file, and tell ESLint config to apply `eslint no-restricted-syntax: ['error', 'AssignmentExpression', 'UpdateExpression']` to those files.

Further reading:

- https://github.com/typescript-eslint/typescript-eslint/blob/8c98d16034a10ebddef35a0a59e31f9f9ca406f8/docs/development/CUSTOM_RULES.md
- https://developers.mews.com/how-to-write-custom-eslint-rules/
- https://eslint.org/docs/latest/developer-guide/working-with-rules

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-09-19 23:46:53.000 UTC</summary>

I like this approach, @vkarpov15, what are the caveats?
Thanks for looking into it!

</details>

<details>
<summary><strong>lorensr</strong> commented on 2022-09-20 01:23:42.000 UTC</summary>

Awesome! 

> This isn't quite bulletproof because it checks for 'setHandler' and 'QueryDefinition' by name, so if there are conflicting userland functions with the same names this rule would still trigger.

I'm fine with this. Perhaps we could help by letting user configure those two names? (eg if uses `setHandler` for something else and always imports `{ setHandler as setTemporalHandler }`) And letting user only apply this plugin/rule to certain files.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-09-20 04:46:37.000 UTC</summary>

What about if a user imports our setHandler as foo will the rule trigger?

</details>

<details>
<summary><strong>JoshuaKGoldberg</strong> commented on 2022-09-20 13:29:02.000 UTC</summary>

> > This isn't quite bulletproof because it checks for 'setHandler' and 'QueryDefinition' by name, so if there are conflicting userland functions with the same names this rule would still trigger.
> 
> I'm fine with this. Perhaps we could help by letting user configure those two names? (eg if uses `setHandler` for something else and always imports `{ setHandler as setTemporalHandler }`) And letting user only apply this plugin/rule to certain files.

You can be more precise if you want. For example, this bit of code checks if the callee is declared in an import statement that specifies the `"@temporalio/workflow"` module:

```js
const calleeSymbol = checker.getSymbolAtLocation(callee);
const [calleeDeclaration] = calleeSymbol.declarations;

if (
  calleeDeclaration.parent.kind === ts.SyntaxKind.NamedImports &&
  calleeDeclaration.parent.parent.parent.moduleSpecifier.text ===
    "@temporalio/workflow"
) {
  console.log("Got it!");
}
```

(there may be a way to use [`@typescript-eslint/scope-manager`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/scope-manager), but I haven't played with that one much)

Alternately, this checks whether the callee's type was declared in a file in a path that contains `node_modules/@temporalio`:

```js
const calleeType = checker.getTypeAtLocation(callee);
const [calleeSignature] = calleeType.getCallSignatures();
const calleeDeclarationFile = calleeSignature.getDeclaration().getSourceFile();

if (calleeDeclarationFile.fileName.includes("node_modules/@temporalio")) {
    console.log("Got it!");
}
```

Keep in mind, though, that users might write their own functions that wrap `setHandler`, with names like `setHandlerWithMyFancyCustomLogging`. If they do that then the latter strategy of checking the signature declaration type won't work, as the function will be declared in their own code. https://github.com/typescript-eslint/typescript-eslint/issues/5271 describes some of the pains we've had in typescript-eslint-land trying to nail down ways to specify custom named functions.

</details>

<details>
<summary><strong>vkarpov15</strong> commented on 2022-09-27 19:57:26.000 UTC</summary>

@JoshuaKGoldberg @lorensr @bergundy thanks for the suggestions! I applied the suggestions from :point_up:  and some other tricks, and came up with the following. Let me know what you think!

It covers:

1. `import` aliases
2. Name collisions - userland `QueryDefinition` and `setHandler` not a problem
3. Allow modifying parameters to the `setHandler` callback.

```javascript
'use strict';

const { ESLintUtils } = require('@typescript-eslint/utils');
const ts = require('typescript');

const temporalWorkflowSuffix = '/node_modules/@temporalio/workflow/lib/workflow.d.ts';
const temporalInternalWorkflowSuffix = '/node_modules/@temporalio/internal-workflow-common/lib/interfaces.d.ts';

const rule = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      AssignmentExpression(node) {
        const parserServices = ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();

        const lhs = parserServices.esTreeNodeToTSNodeMap.get(node.left);
        const lhsSymbol = checker.getSymbolAtLocation(lhs);

        // Does this assignment expression have an ancestor that is a `setHandler()`
        // CallExpression where the first arg is a `QueryDefinition`?
        const ancestors = context.getAncestors();
        for (const ancestor of ancestors) {
          if (ancestor.type !== 'CallExpression') {
            continue;
          }

          const callee = parserServices.esTreeNodeToTSNodeMap.get(
            ancestor.callee
          );

          const calleeSymbol = checker.getSymbolAtLocation(callee);
          const calleeDeclaration = calleeSymbol?.declarations?.[0];
          if (!calleeDeclaration) {
            continue;
          }
          
          let isSetHandlerFromNamedImport = false;
          let isSetHandlerFromDefaultImport = false;

          if (calleeDeclaration.parent?.kind === ts.SyntaxKind.NamedImports &&
              calleeDeclaration.parent?.parent?.parent?.moduleSpecifier?.text === '@temporalio/workflow') {
            // `import { setHandler } from '@temporalio/workflows'` or
            // `import { setHandler as something } from '@temporalio/workflows'`
            const declaration = calleeDeclaration?.parent?.elements
              .find(el => el?.name?.escapedText === ancestor.callee.name);
            if (declaration === undefined) {
              continue;
            }
            isSetHandlerFromNamedImport = declaration.propertyName != null ?
              declaration.propertyName.escapedText === 'setHandler' :
              declaration.name.escapedText === 'setHandler';
          } else if (calleeDeclaration.parent?.kind === ts.SyntaxKind.SourceFile &&
            calleeDeclaration.parent?.fileName?.endsWith(temporalWorkflowSuffix)) {
            // `import wf from '@temporalio/workflows'` or
            // `import * as wf from '@temporalio/workflows'`
            isSetHandlerFromDefaultImport = calleeDeclaration?.name?.escapedText === 'setHandler';
          }
  
          if (!isSetHandlerFromNamedImport && !isSetHandlerFromDefaultImport) {
            continue;
          }

          const firstArg = parserServices.esTreeNodeToTSNodeMap.get(
            ancestor.arguments[0]
          );
          const nodeType = checker.getTypeAtLocation(firstArg);
  
          // If first arg is not of type `QueryDefinition`, skip
          if (nodeType?.symbol?.escapedName !== 'QueryDefinition' ||
              !nodeType?.symbol?.parent?.valueDeclaration?.path?.endsWith(temporalInternalWorkflowSuffix)) {
            continue;
          }

          if (lhsSymbol?.declarations?.[0]?.kind === ts.SyntaxKind.Parameter &&
              lhsSymbol.declarations[0]?.parent?.parent?.expression === callee) {
            // Modifying a function argument is OK if it is a parameter to `setHandler()` callback
            continue;
          }

          context.report({
            messageId: 'queryHandlerMutation',
            node,
          });
        }
      },
    };
  },
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Avoid mutations in query handlers.',
    },
    messages: {
      queryHandlerMutation: 'Avoid mutations in query handlers.',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: []
});

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
});

const valid = [];

valid.push(`
import { setHandler, defineQuery, defineSignal } from '@temporalio/workflow';

export const unblockSignalButLooksLikeQuery = defineSignal('unblock');
export const isBlockedQuery = defineQuery<boolean>('isBlocked');

setHandler(unblockSignalButLooksLikeQuery, () => void (isBlocked = false));
setHandler(isBlockedQuery, () => isBlocked);
`);

valid.push(`
import { setHandler as notSetHandler, defineQuery } from '@temporalio/workflow';

export const isBlockedQuery = defineQuery<boolean>('isBlocked');

notSetHandler(isBlockedQuery, () => isBlocked);
`);

valid.push(`
import { setHandler as notSetHandler, defineQuery } from '@temporalio/workflow';

export const isBlockedQuery = defineQuery<boolean, [string]>('isBlocked');

notSetHandler(isBlockedQuery, (arg: string) => {
  arg = arg.toLowerCase();
  if (arg === 'skip') {
    return false;
  }
  return isBlocked;
});
`);

const invalid = [];

invalid.push(`
import { setHandler, defineQuery, defineSignal } from '@temporalio/workflow';

export const unblockSignalButLooksLikeQuery = defineSignal('unblock');
export const isBlockedQuery = defineQuery<boolean>('isBlocked');

setHandler(unblockSignalButLooksLikeQuery, () => void (isBlocked = false));
setHandler(isBlockedQuery, () => {
  isBlocked = !isBlocked;
  return isBlocked;
});
`);

invalid.push(`
import {
  setHandler as definitelyNotSetHandler,
  defineQuery
} from '@temporalio/workflow';

export const isBlockedQuery = defineQuery<boolean>('isBlocked');

definitelyNotSetHandler(isBlockedQuery, () => {
  isBlocked = !isBlocked;
  return isBlocked;
});
`);

invalid.push(`
import wf from '@temporalio/workflow';

export const isBlockedQuery = wf.defineQuery<boolean>('isBlocked');

wf.setHandler(isBlockedQuery, () => {
  isBlocked = !isBlocked;
  return isBlocked;
});
`);

invalid.push(`
import * as wf from '@temporalio/workflow';

export const isBlockedQuery = wf.defineQuery<boolean>('isBlocked');

wf.setHandler(isBlockedQuery, () => {
  isBlocked = !isBlocked;
  return isBlocked;
});
`);

ruleTester.run('test', rule, {
  valid: valid.map(code => ({ code })),
  invalid: invalid.map(code => ({ code, errors: [{ messageId: 'queryHandlerMutation' }] }))
});
```

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-10-19 22:46:18.000 UTC</summary>

I played with this locally and found another case that we don't cover:

```ts
import * as wf from '@temporalio/workflow';

export const isBlockedQuery = wf.defineQuery<boolean>('isBlocked');

function mySetHandler(fn: () => boolean) {
  wf.setHandler(isBlockedQuery, fn);
}

mySetHandler(() => {
  isBlocked = !isBlocked;
  return isBlocked;
});
```

I also rewrote this in TypeScript and fixed some of the type assertions.
I'll push my work to a branch and try to figure out a way to address the case above.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-10-20 02:07:38.000 UTC</summary>

This isn't caught either:

```ts
import { setHandler, defineQuery, defineSignal } from '@temporalio/workflow';

export const isBlockedQuery = defineQuery<boolean>('isBlocked');

let isBlocked = false;

function mutator() {
  isBlocked = !isBlocked;
}

setHandler(isBlockedQuery, () => {
  mutator();
  return isBlocked;
});
```

I'm working on this, I'll try to find a solution for these cases.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-10-21 21:32:43.000 UTC</summary>

I'm going to table this for now.
I'll post my code in a branch, it requires more time than I have to spend on it currently and it's not high priority for us.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-10-22 00:33:44.000 UTC</summary>

Pushed my branch, you can see the work here:
https://github.com/temporalio/sdk-typescript/blob/query-linter/packages/test/src/query-linter.ts
It's mostly work that @vkarpov15 did, I added a few abstractions, rewrote in TS, and added the test cases above.

There's probably a simpler case that @vkarpov15's code misses that I haven't added yet:

```ts
import { setHandler, defineQuery } from '@temporalio/workflow';

export const isBlockedQuery = defineQuery<boolean>('isBlocked');

let isBlocked = false;

function handler() {
  isBlocked = !isBlocked;
  return isBlocked;
}

setHandler(isBlockedQuery, handler);
```

</details>


---

### #939: [Bug] Worker crashes with "async hook stack has become corrupted" on Workflow Task timeout

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/939 |
| **State** | OPEN |
| **Author** | thehellmaker (Akash Ashok) |
| **Created** | 2022-10-28 09:54:30.000 UTC (3y 2m ago) |
| **Updated** | 2025-12-04 05:49:26.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 8 |
| **Priority Score** | 10 |
| **Labels** | bug |
| **Assignees** | mjameswh |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
We had a workflow in development where we were still developing on it. Older version of workflow is still running when we change the code of workflow and deployed it and we see a crash in the system


### Describe the bug
Error: async hook stack has become corrupted (actual: 112970, expected: 3)
 1: 0x10229dab8 node::AsyncHooks::FailWithCorruptedAsyncStack(double) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 2: 0x102232164 node::AsyncHooks::pop_async_context(double) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 3: 0x102231d8c node::InternalCallbackScope::Close() [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 4: 0x10223266e node::InternalMakeCallback(node::Environment*, v8::Local<v8::Object>, v8::Local<v8::Object>, v8::Local<v8::Function>, int, v8::Local<v8::Value>*, node::async_context) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 5: 0x10224a238 node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 6: 0x102346af6 node::worker::MessagePort::OnMessage(node::worker::MessagePort::MessageProcessingMode) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 7: 0x102cd275b uv__async_io [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 8: 0x102ce654b uv__io_poll [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
 9: 0x102cd2ce1 uv_run [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
10: 0x102232f9f node::SpinEventLoop(node::Environment*) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
11: 0x1023a9cae node::worker::Worker::Run() [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
12: 0x1023ad6a2 node::worker::Worker::StartThread(v8::FunctionCallbackInfo<v8::Value> const&)::$_3::__invoke(void*) [/Users/random/.nvm/versions/node/v16.16.0/bin/node]
13: 0x7ff81c0e84e1 _pthread_start [/usr/lib/system/libsystem_pthread.dylib]
14: 0x7ff81c0e3f6b thread_start [/usr/lib/system/libsystem_pthread.dylib]
[nodemon] app crashed - waiting for file changes before starting...
^C


#### Comments (8)

<details>
<summary><strong>bergundy</strong> commented on 2022-10-28 13:13:32.000 UTC</summary>

Interesting.. this looks like a Node.js issue, can you try running with different Node.js versions?

</details>

<details>
<summary><strong>thehellmaker</strong> commented on 2022-10-28 16:23:21.000 UTC</summary>

Actually i figured out the issue. It was a bug in the worker code which lead to an infinite loop. But this should be handled better by temporal i feel with proper error messaging

My worker has a code like this

```
while(true) {
        // FIX: currentState = WorkflowState.COMPLETE
        await condition(() => currentState !== WorkflowState.COMPLETE);
        if (currentState === WorkflowState.REVIEWED_AND_SAVED) {
            // call an activity and
            return response
        }
}
```

The commented out line with // FIX:  is the fix

The problem here is 

- current state is updated by a Signal
- When the signal sets the currentState to anything other than  WorkflowState.REVIEWED_AND_SAVED or  WorkflowState.COMPLETE then the condition clause is always satisfied and the if condition is never satisfied 
- The worker now goes into infinite loop without any condition waits.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-10-28 16:32:39.000 UTC</summary>

I don't know how much we can handle this since it looks like the error happens deep in Node internals.
I can see why this happens though.
Thanks for the report.

The SDK does protect you from tight loops by setting a timeout on workflow activations but looks like something else is going on here.

It looks like async_hooks and the vm context execution timeout clash.
We should try to reproduce this and see if there's anything the SDK can do or to mitigate this but I suspect the issue is an unhandled edge case in Node.js.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-01-24 20:04:56.000 UTC</summary>

Here is a repro without `condition`:

```
// Fails with corrupted async stack
export async function testWorkflow(): Promise<void> {
  while (true) {
    await new CancellationScope({ cancellable: true }).run(() =>
      Promise.resolve(true)
    );
  }
}
```

This is obviously an endless loop. I'd expect the WFT to ends with "Error: Script execution timed out after 10000ms", but instead get an async hook stack corruption, as described above.

My investigation got it down to an issue in node involving: vm + microtaskMode: 'afterEvaluate' + runInContext with timeout + AsyncLocalStorage. I know for sure that it happens after the runInContext’s timeout fires. Seems like either the AsyncLocalStorage internal state is not properly cleaned up on context timeout, or there are still some live functions (probably native code) attached to that context's AsyncLocalStorage that tries to access the storage after it has been cleaned up.

Proposed solution to improve the error message is to replace Node's builtin but experimental implementation of AsyncLocalStorage with our own implementation.

</details>

<details>
<summary><strong>vymarkov</strong> commented on 2025-01-07 10:56:54.000 UTC</summary>

Unfortunately I've faced with the same issue 

</details>

<details>
<summary><strong>vymarkov</strong> commented on 2025-01-09 09:24:20.000 UTC</summary>

@mjameswh I would like to add that we're currently use temporal sdk v1.11.5, we use AsyncLocalStorage which is a part of @temporalio/workflow package

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-01-09 16:23:47.000 UTC</summary>

@vymarkov The way this error message shows up is certainly surprising, but the fact that you are getting this indicates that execution of your workflow code is timing out.

To be exact, a single call into the workflow sandbox takes more than 10 seconds to complete; that most invariably means that you have some endless loop with nothing in it to slow down looping. That's something you will need to figure out and fix by yourself.

Look for the following:
- Missing `await` on `sleep()`, activity execution, child workflows, and other APIs that returns `Promise`;
- `await condition()` where the predicate function immediately evaluates to true.

</details>

<details>
<summary><strong>yash261</strong> commented on 2025-12-04 05:49:26.000 UTC</summary>

Getting the same error but it is happening randomly. I am running the playwright script in the worker

</details>


---

### #1790: [Bug] Replay workflow history fails with nondeterminism error, child workflow ids do not match

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1790 |
| **State** | OPEN |
| **Author** | mishabruml (Misha Bruml) |
| **Created** | 2025-09-26 13:36:06.000 UTC (3 months ago) |
| **Updated** | 2025-12-08 18:13:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 9 |
| **Priority Score** | 9 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Related: #1582 

### What are you really trying to do?

I am trying to write a "workflow history compatibiltiy test" using `Worker.runReplayHistory`, so it can be run in CI to protect our team against accidentally introducing non-deterministic changes into our workflows.

### Describe the bug

I am grabbing workflow history from a recent successful workflow run, pasting it as a JSON blob, and running a test like this: 

```typescript
import { Worker } from '@temporalio/worker';
import workflowHistory from './workflow-history.json';

describe('Workflow history compatibility', () => {
  test('Workflow history is compatible', async () => {
    await Worker.runReplayHistory(
      {
        workflowsPath: require.resolve('../workflow.ts'),
      },
      workflowHistory
    );
  });
});
```

The workflow contains several child workflows, for example:

```typescript
  const child = executeChild(ChildWorkflow, {
    args: [childBody],
    taskQueue: QueueConfig.ChildWorkflow,
  });
```

When I run the test (locally), I get the following error:

```
DeterminismViolationError: Replay failed with a nondeterminism error. This means that the workflow code as written is not compatible with the history that was fed in. Details: Workflow activation completion failed: Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: Child workflow id of scheduled event '83ade076-5748-4685-b311-39985365e54c' does not match child workflow id of command '01324793-0653-4b87-ba22-639e2eaffe97'", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }
```

I have also tried modifying the workflow so that the child workflow executions start like this: 

```typescript
  import { uuid4 } from '@temporalio/workflow';

  const child = executeChild(ChildWorkflow, {
    args: [childBody],
    taskQueue: QueueConfig.ChildWorkflow,
    workflowId: uuid4(),
  });
```

And ran the workflow succesfully, grabbed the history from this run, and dropped that into my test- same outcome.

This seems like a bug, the child workflowId should not affect the determinism of the workflow run.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. Apple M2 Pro, Sequoia 5.6.1 (24G90)]
- Temporal Version: 
```json
    "@temporalio/activity": "^1.11.1",
    "@temporalio/client": "^1.11.3",
    "@temporalio/common": "^1.11.2",
    "@temporalio/interceptors-opentelemetry": "^1.11.7",
    "@temporalio/nyc-test-coverage": "^1.11.2",
    "@temporalio/worker": "^1.11.1",
    "@temporalio/workflow": "^1.11.1",
```
 
- Are you using Docker or Kubernetes or building Temporal from source? Docker


#### Comments (9)

<details>
<summary><strong>mjameswh</strong> commented on 2025-10-06 16:37:18.000 UTC</summary>

> ```
>     "@temporalio/activity": "^1.11.1",
>     "@temporalio/client": "^1.11.3",
>     "@temporalio/common": "^1.11.2",
>     "@temporalio/interceptors-opentelemetry": "^1.11.7",
>     "@temporalio/nyc-test-coverage": "^1.11.2",
>     "@temporalio/worker": "^1.11.1",
>     "@temporalio/workflow": "^1.11.1",
> ```

Those would be version numbers as they are declared in your package.json, but not necessarily what's actually installed. Can you print the _installed_ version numbers of those dependencies? You should be able to get them using `npm ls`.

Mixing packages of different versions of `@temporalio/*` packages is not supported, not even at the patch level. Our packages have exact dependencies to other packages to avoid such incoherencies. So in practice, I expect that all of these packages will have actually been installed at 1.11.7 (or 1.11.3 if using an older version of NPM that didn't support peer dependencies).

</details>

<details>
<summary><strong>mishabruml</strong> commented on 2025-10-07 09:04:15.000 UTC</summary>

thanks, it appears to be 1.13.0

we're on yarn 4.9.2, node 22.18.0 (npm 10.9.3)
```
│ ├── @temporalio/activity@1.13.0
│ ├── @temporalio/client@1.13.0
│ ├── @temporalio/common@1.13.0
│ ├── @temporalio/interceptors-opentelemetry@1.13.0
│ ├── @temporalio/nyc-test-coverage@1.13.0
│ ├── @temporalio/testing@1.13.0
│ ├── @temporalio/worker@1.13.0
│ ├── @temporalio/workflow@1.13.0
```

</details>

<details>
<summary><strong>mishabruml</strong> commented on 2025-10-23 12:42:58.000 UTC</summary>

hi sorry @mjameswh any update on this? 🙏 

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-10-23 15:10:36.000 UTC</summary>

Given that you are using the OpenTelemetry Interceptors, I suppose you are hitting the issue described in #1677. We are working on a fix for that bug.

To confirm, how is your workflow getting started? e.g. are you using signal-with-start or update-with-start? And from where are you starting child workflows? e.g. directly from your workflow function, from signal/update handler, or both?

</details>

<details>
<summary><strong>mishabruml</strong> commented on 2025-10-23 15:56:45.000 UTC</summary>

We're starting workflows with `client.workflow.start()` and we're starting child workflows directly from the workflow function using `startChild`/`executeChild`

Thanks for the hint, I'll look into #1677 👀 

</details>

<details>
<summary><strong>jamipouchi</strong> commented on 2025-11-27 15:31:02.000 UTC</summary>

Same thing is happening to us. We have 2 workflows that failed 
[TMPRL1100] Nondeterminism error: Child workflow id of scheduled event 'f378473c-2231-4ed6-ae2f-9d7effa1ab67' does not match child workflow id of command '2a14255c-0888-4964-adc8-b39ef7edf225'

We are also starting workflows with `client.workflow.start()`, and also starting child workflows directly using `executeChild`.
Have created a ticket: https://support.temporal.io/?tab=issues&durationMs=31536000000&conversationID=ea0ee5ee-aa1f-4914-a122-929ba0be5a56




</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-12-01 16:45:17.000 UTC</summary>

Which version of the Temporal SDK are you using?

If not already, can you give a try usig v1.13.2? It's fixing issue #1677, which is a very likely explanation for this bug.

</details>

<details>
<summary><strong>jamipouchi</strong> commented on 2025-12-01 17:02:57.000 UTC</summary>

Using `v1.13.2` already.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-12-08 18:13:12.000 UTC</summary>

@jamipouchi Given new information I just received privately, I'm pretty sure you're hitting this issue: #1744. There's work in progress on resolving that bug.

Reactions: 👍 1

</details>


---

### #754: [Feature Request] Add friendly version of listWorkflowExecutions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/754 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-12 20:12:50.000 UTC (3y 5m ago) |
| **Updated** | 2023-01-25 05:45:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 7 |
| **Priority Score** | 9 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Current: https://typescript.temporal.io/api/interfaces/proto.temporal.api.workflowservice.v1.ilistworkflowexecutionsrequest/#nextpagetoken

Proposed: `workflowClient.listWorkflows()` that maybe makes pagination easier and converts types of returned executions

https://typescript.temporal.io/api/interfaces/proto.temporal.api.workflowservice.v1.ilistworkflowexecutionsresponse/

#### Comments (7)

<details>
<summary><strong>bergundy</strong> commented on 2022-07-12 23:10:29.000 UTC</summary>

I have a bunch of ideas for this

</details>

<details>
<summary><strong>lorensr</strong> commented on 2022-07-13 04:05:59.000 UTC</summary>

List vs Scan? Scan says for a large amount and unordered. Don't see a difference in the request types:

https://github.com/temporalio/api/blob/223f02944d1a5fcec43918a466e7eed51ab84171/temporal/api/workflowservice/v1/service.proto#L267-L277

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-07-14 03:49:00.000 UTC</summary>

I think scan is being deprecated, need to check

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-07-19 00:53:20.000 UTC</summary>

This should be an sdk-features issue

</details>

<details>
<summary><strong>lorensr</strong> commented on 2022-08-11 20:15:42.000 UTC</summary>

- Method returns an async interator
- Type-safe query builder for List Filters

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-12-08 22:53:47.000 UTC</summary>

Partially implemented in #942 (basic listing returning an async iterator, with support for textual query).

</details>

<details>
<summary><strong>lorensr</strong> commented on 2023-01-25 05:45:54.000 UTC</summary>

Query builder inspiration: https://twitter.com/leeerob/status/1617699252645539841?s=46&t=YzEupBtrueWqpY9F-MaJ5g

</details>


---

### #1621: [Feature Request] Include musl-based shared library in package

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1621 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-05 22:38:08.000 UTC (10 months ago) |
| **Updated** | 2025-02-05 22:38:08.000 UTC |
| **Upvotes** | 4 |
| **Comments** | 0 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 4 |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/594


---

### #1587: [Bug] Using async functions degrades performance

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1587 |
| **State** | OPEN |
| **Author** | c0sx (Koshkin Nikolai) |
| **Created** | 2024-12-13 17:00:39.000 UTC (1 years ago) |
| **Updated** | 2025-06-03 06:55:41.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 👀 3 |

#### Description

### What are you really trying to do?

Hi, I have a workflow like dsl-interpreter from [sample](https://github.com/temporalio/samples-typescript/tree/main/dsl-interpreter) and I found that my workflow is slow.

### Describe the bug

For some reason using async functions in workflows is drastically slower than sync functions. Could you help me? 

I have 2 identical workflows (synthetic examples), the difference only in using async in functions:

```js
// sync workflow
async function run() {
  const iters = () => 0;
  const condition = (iters) => iters < 10_000;
  const incr = (iters) => iters + 1;
  const out = (iters) => iters;

  let i = iters();

  while (condition(i)) {
    i = incr(i);
  }

  return out(i);
}

// async workflow
async function run() {
  const iters = async () => 0;
  const condition = (iters) => iters < 10_000;
  const incr = async (iters) => iters + 1;
  const out = async (iters) => iters;

  let i = await iters();

  while (condition(i)) {
    i = await incr(i);
  }

  return await out(i);
}
```

My worker and client
```js
// worker.js
const path = require('path');

const { Worker } = require('@temporalio/worker');

async function main() {
  const worker = await Worker.create({
    workflowsPath: path.join(__dirname, './workflows.js'),
    taskQueue: 'hello-javascript',
  });

  await worker.run();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// client.js
const { Client, Connection } = require('@temporalio/client');

const { run } = require('./workflows');

async function main() {
  const connection = await Connection.connect({});

  const client = new Client({
    connection,
  });

  console.time('client'); // start timer

  const result = await client.workflow.execute(run, {
    taskQueue: 'hello-javascript',
    workflowId: 'my-business-id',
    args: ['Temporal'],
  });

  console.timeEnd('client'); // end timer
  console.log(result);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

And I have this results

| Sync workflow | Async workflow | 
| --- | --- |
| 25-30ms | 350-400ms |

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M3 Mac
- Temporal Version: 

```bash
temporal -v
temporal version 1.0.0 (Server 1.24.2, UI 2.28.0)
```
- SDK: typescript-sdk:  1.10.3

- Are you using Docker or Kubernetes or building Temporal from source? 
I installed temporal from brew


#### Comments (6)

<details>
<summary><strong>c0sx</strong> commented on 2024-12-16 08:16:11.000 UTC</summary>

I found that this problem related with `promiseHooks` in `vm-shared` worker [here](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/workflow/vm-shared.ts#L205).

Is it really important to handle any promise?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-12-16 15:26:30.000 UTC</summary>

>I found that this problem related with promiseHooks in vm-shared worker [here](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/workflow/vm-shared.ts#L205).

Yeah, I had the intuition the issue you described would be related to this `promiseHook`.

If you want to dig a bit more, I would expect that the largest part of that extra time comes from [these lines](https://github.com/temporalio/sdk-typescript/blob/53233c9091d2eb8d855839f0e8d4bab324913581/packages/worker/src/workflow/vm-shared.ts#L165-L167), which gets called [from the promise hook](https://github.com/temporalio/sdk-typescript/blob/53233c9091d2eb8d855839f0e8d4bab324913581/packages/worker/src/workflow/vm-shared.ts#L221C13-L224) (see the `.stack`, which internally calls the `prepareStackTrace` function).

> Is it really important to handle any promise?

The goal of that hook is to capture the data we need for the `__stack_trace` and `__enhanced_stack_trace` Workflow queries, which are called from the Temporal UI to help diagnose Workflow issues. That's a nice to have feature, but definitely not required. In fact, `promiseHooks` is not supported on Node <16.14, in which case [that hook simply doesn't get registered](https://github.com/temporalio/sdk-typescript/blob/53233c9091d2eb8d855839f0e8d4bab324913581/packages/worker/src/workflow/vm-shared.ts#L203).

Adding a worker config option to turn off this feature would be a possibility.

I would however like to investigate first what can be done to reduce the runtime overhead of capturing stack traces on async contexts. I have a few ideas in mind that, I believe, could reduce the cost to nearly zero, without compromising on availability of this feature.

Reactions: 👍 1

</details>

<details>
<summary><strong>c0sx</strong> commented on 2024-12-24 07:42:42.000 UTC</summary>

@mjameswh Hi, do you have any news?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-12-27 18:33:38.000 UTC</summary>

No, not at this time.

Reactions: 👀 1

</details>

<details>
<summary><strong>c0sx</strong> commented on 2025-06-03 06:53:18.000 UTC</summary>

@mjameswh Hi, do you have any updates that you could share?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-03 06:55:40.000 UTC</summary>

Still not. Sorry.

Reactions: 😕 1 👀 1

</details>


---

### #1557: [Feature Request] allow opt-out of workflow isolation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1557 |
| **State** | OPEN |
| **Author** | neelance (Richard Musiol) |
| **Created** | 2024-11-03 13:08:22.000 UTC (1y 1m ago) |
| **Updated** | 2025-07-24 07:52:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 8 👀 1 |

#### Description

The bug #1432 just caused a lot of pain for us. It made our workers consume a lot of memory over time (and go OOM repeatedly) and made them go really slow over time, since every (implicit) call to `new Promise` was affected. It took me several weeks of investigating, giving up and then trying again on a different day to track down this root cause. This is because the issue only happened in production and most metrics that I could get from production did not clearly point to the issue. Even diffs on heap snapshots did not clearly point to `AsyncLocalStorage` because it contained a huge amount of other heap differences and `AsyncLocalStorage` did not catch my attention. I only got lucky that a CPU profile seemed odd and I noticed that the internals of `Promise` took much too long.

Our code was using `new AsyncLocalStorage` as a constant at the toplevel of a module. Normally such a constant only gets initialised once. It is quite unintuitive that with workflow isolation one has to consider that this code gets executed multiple times and thus reason through performance implications. #1432 plans to hide these implications, but it also mentions that `maxCachedWorkflow` might still be a performance issue.

This is not the first issue that we have due to the workflow isolation feature and I'm sorry, but I doubt that it will be the last. In theory workflow isolation seems like a good idea, but in practice it adds complexity that causes very uncommon issues. I want to point out that for example the Go SDK does not try to apply workflow isolation. Instead it expects the developer to write proper workflow code that respects deterministic execution requirements. I would rather teach my team to handle a transparent nondeterminism-error due to bad workflow code than to have issues like the one above. Therefore I would like to request the option to opt-out of workflow isolation (and instead opt-in to simplicity). I still appreciate the effort you've put into workflow isolation and its performance optimisations like reusable VMs.

#### Comments (8)

<details>
<summary><strong>lukeramsden</strong> commented on 2024-11-11 11:35:05.000 UTC</summary>

I'd like to echo this sentiment - while the fact that determinism can be "enforced" is very helpful early on, there are other mechanisms (such as replay testing) that more mature orgs can use that are less rigid at runtime. Integrating the workflow isolation with a projects build stack is also quite painful. 

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-11-19 17:33:35.000 UTC</summary>

I totally understand the feeling, and I would personally also like to explore making sandboxing optional.

That is, however, a much larger effort than it may appear, which we can't prioritize just now. I would also point out that it is not clear to me at this point either getting rid of the Workflow sandbox would effectively result in less restrictions and lower technical complexity than what we have now. It may actually have the opposite effect.

The thing is that even though we generally present the sandbox as a way of isolating imports and global variables for determinism reasons, the sandbox also plays a second, more subtle but actually more important role: each Node's VMs come with a distinct event loop. That means that when the worker makes a call into the VM context, it is guaranteed that by the time that call returns, all outstanding microtasks belonging to that context will have been settled. This is how we know that a Workflow Task has completed, and how we know that operations are always replayed in the correct order.

Some languages make it possible to somehow customize scheduling of async completions; for example, in .Net, we created a [custom task scheduler](https://github.com/temporalio/sdk-dotnet/blob/46410a617fa4b155a4331b6423b768e44139a140/README.md?plain=1#L591-L595); for Python, [that's a custom `asyncio.AbstractEventLoop`](https://temporal.io/blog/durable-distributed-asyncio-event-loop#temporals-asyncio-event-loop). In other languages, such as Java and Go, we have had to provide a completely distinct set of APIs to deal with async stuff inside of Workflow context (e.g. `workflow.Go()` instead of the `go` statement, `wokrflow.Channel` instead of Go's `chan` type, `workflow.Selector` instead of go's `select statement`, `Promise` instead of Java's `Future` and `CompletableFuture`, etc).

Node doesn't allow us to interfere with how its event loop works, like we do in .Net and Python. To some extent, it may be possible to rely on `setImmediate()` to determine that a Workflow Task has completed, but that would result in much weaker guarantees, especially if the goal is to have Workflow code coexist in the same execution environment as non-Workflow code. This is obviously an avenue that would have to be investigated, but should it indeed not provide the guarantees we need, the only alternative might be to have a completely distinct async APIs, similar to what we do in Java and Go. And if we reach that point, then we would no longer be able to use pure `async` constructs, but may have to transpile those into generators, just like it was common to do a few years ago. That means that in practice, we'd just effectively be replacing the current sandbox by a different type of sandbox. That's certainly not better.

Given those uncertainties, I think it is better for now to focus on making the sandbox better and more transparent, rather than avoiding it completely.

Reactions: 👍 2 ❤️ 1

</details>

<details>
<summary><strong>neelance</strong> commented on 2025-07-22 15:46:42.000 UTC</summary>

We just had another sudden breakage when upgrading the Temporal SDK.

```
TypeError: Symbol.asyncDispose is not defined.
```

To make things worse, the error does not occur when replaying the workflow locally, it only happens in production / with a full worker. I guess https://github.com/temporalio/sdk-typescript/pull/1605 is throwing away our `Symbol.asyncDispose` polyfill, which we need due to https://github.com/nodejs/node/issues/50745.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-22 16:53:55.000 UTC</summary>

> ```
> TypeError: Symbol.asyncDispose is not defined.
> ```
>
> I guess https://github.com/temporalio/sdk-typescript/pull/1605 is throwing away our Symbol.asyncDispose polyfill […].

Yeah, that's very likely related, though the symptoms are not exactly those I would expect. How are you loading the polfill?

I have work in progress to formalize the proper way to load polyfills; see #1743. The tricky thing is that polyfills that modify built-in globals need to be loaded early, when the workflow bundle gets loaded into the VM context (once, at worker startup time), rather than when your `workflow.ts` module actually gets executed (on every workflow start).

</details>

<details>
<summary><strong>neelance</strong> commented on 2025-07-22 22:38:06.000 UTC</summary>

For now I have moved the polyfill directly into the injected code of `reusable-vm.js` via patch. This seems to work good enough.

> The thing is that even though we generally present the sandbox as a way of isolating imports and global variables for determinism reasons, the sandbox also plays a second, more subtle but actually more important role: each Node's VMs come with a distinct event loop. That means that when the worker makes a call into the VM context, it is guaranteed that by the time that call returns, all outstanding microtasks belonging to that context will have been settled. This is how we know that a Workflow Task has completed, and how we know that operations are always replayed in the correct order.

This makes sense. Still, this feature could be used without all the isolation efforts, couldn't it? You would only need to initialise `maxConcurrentWorkflowTaskExecutions` VMs once and then just plainly use them for executing workflow tasks, without any additional isolation efforts whatsoever.

> Yeah, that's very likely related, though the symptoms are exactly those I would expect.

As a user of the SDK, I want to mention again that such symptoms (and debugging and patching them) are a negative impact for us and it does not seem to me that the advantages of workflow isolation outweigh them to result in a positive tradeoff.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-23 21:28:42.000 UTC</summary>

> This makes sense. Still, this feature could be used without all the isolation efforts, couldn't it?

Of course, and that's already supported. Just add `reuseV8Context: false` to your Worker options.

A new VM context gets created for each Workflow execution, so there's no for context bookeeping and switching. That's actually how the sandbox was initially designed, with a much simpler execution model, and therefore, less surprises and complications. The "Reuse V8 Context" optimization came in later, resulting in 2/3 reduction in memory usage and between 1/3 and 1/2 reduction in CPU usage, according to our internal stress tests and confirmed by many users. That's why we made that execution model the default, but the original executor was kept around, for those cases where restrictions of the "Reuse V8 Context" executor are too cumbersome.

>> Yeah, that's very likely related, though the symptoms are exactly those I would expect.
>
> As a user of the SDK, I want to mention again that such symptoms (and debugging and patching them) are a negative impact for us and it does not seem to me that the advantages of workflow isolation outweigh them to result in a positive tradeoff.

Once again, I fully sympathize. But exploring alternative execution models is simply not something we can prioritize at this time.

</details>

<details>
<summary><strong>neelance</strong> commented on 2025-07-24 07:51:01.000 UTC</summary>

> Of course, and that's already supported. Just add reuseV8Context: false to your Worker options.

> A new VM context gets created for each Workflow execution, so there's no for context bookeeping and switching.

This is not what I meant. I was talking about creating new VM contexts **only on startup** of the worker and then reusing them for the whole lifetime of the worker. This would attempt no workflow isolation and only use them for the microtask handling that you mentioned.

</details>

<details>
<summary><strong>neelance</strong> commented on 2025-07-24 07:52:43.000 UTC</summary>

> Once again, I fully sympathize. But exploring alternative execution models is simply not something we can prioritize at this time.

Thanks. I appreciate that you take the time for this conversation. I'll still keep a log of the issues that we see in this thread, so it can be used as a reference. It is up to you to decide which way to go.

</details>


---

### #1362: [Feature Request] Worker.runReplayHistory() should accept a serialized History object fetched using fetchHistory()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1362 |
| **State** | OPEN |
| **Author** | jhecking (Jan Hecking) |
| **Created** | 2024-02-19 12:26:50.000 UTC (1y 10m ago) |
| **Updated** | 2025-08-06 12:44:26.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 4 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

I'm testing a patched workflow, by replaying an "unpatched" workflow history, to verify that it does not fail with a non-determinism error. To get the workflow history, I'm using the `fetchHistory()` function of the workflow client. I persist the history object to disk using `JSON.serialize`:

```typescript
const history = await client.workflow.getHandle('wfId').fetchHistory()
await fs.writeFile('./unpatched-workflow-history.json', JSON.stringify(history))
```

Then I add another unit tests that does nothing but load the serialized workflow history from disk (using `JSON.parse`) and replay it, e.g.

```typescript
it('should replay an unpatched workflow history', async function () {
  const history = JSON.parse((await fs.readFile('./unpatched-workflow-history.json')).toString())
  Worker.runReplayHistory(DefaultWorkerOptions, history)
})
```

This fails with the following error:
> Error: fromProto3JSONToInternalRepresentation: google.protobuf.Timestamp must be a string but got object

It took me a while to figure out the problem with Antonio's help: https://temporalio.slack.com/archives/C01DKSMU94L/p1708310456162399?thread_ts=1708279751.707509&cid=C01DKSMU94L

I thought I was following the docs here: https://docs.temporal.io/dev-guide/typescript/testing#replay. In particular, this example:

```typescript
const filePath = './history_file.json';
const history = await JSON.parse(fs.promises.readFile(filePath, 'utf8'));
await Worker.runReplayHistory(
  {
    workflowsPath: require.resolve('./your/workflows'),
  },
  history,
);
```

What I didn't realize however, and what I don't think is very obvious, is that the JSON format returned by the Web UI and the Temporal CLI differs from the format returned by the `fetchHistory()` method.

### Describe the solution you'd like

What I eventually found out is that I can use the `History.fromObject` function to turn the JSON object loaded from disk back into a `History` object that's accepted by `Worker.runReplayHistory`, e.g. this works:

```typescript
it('should replay an unpatched workflow history', async function () {
  const history = History.fromObject(JSON.parse((await fs.readFile('./unpatched-workflow-history.json')).toString()))
  Worker.runReplayHistory(DefaultWorkerOptions, history)
})
```

I also noticed that the `runReplayHistory` method already has some built-in logic to determine whether the `history` input value is a JSON object (from the Web UI or CLI) or a `History` object. What would be nice is if it could also detect where it's being passed a `History` object serialized into a JSON object. It could just use `History.fromObject` in that case, just like I am doing now, as IMHO this distinction between the different JSON formats is very easy to miss and the conversion could be handled automatically for the user.

### Additional context

Filing this feature request on the recommendation of Antonio as per our Slack conversation: https://temporalio.slack.com/archives/C01DKSMU94L/p1708310456162399?thread_ts=1708279751.707509&cid=C01DKSMU94L

#### Comments (4)

<details>
<summary><strong>bergundy</strong> commented on 2024-02-20 15:51:50.000 UTC</summary>

You can’t use plain JSON serialization on histories, they’re supposed to be encoded in a proto JSON format.

if you want to save a history you downloaded with a client you’ll need to use https://www.npmjs.com/package/proto3-json-serializer. runReplayHistory supports JSON histories in that format.

</details>

<details>
<summary><strong>jhecking</strong> commented on 2024-02-21 04:32:45.000 UTC</summary>

Ok. Like I said, the way I've solved this problem is that I use `History.fromObject()` to convert the serialised history back into a `History` object before replaying it.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-09-27 18:02:19.000 UTC</summary>

I recently added a `historyToJSON()` function in common's `proto-utils.ts`, to properly encode an existing History object to JSON, for internal purpose.

There's definitely user-side use cases for this, and implementing this correctly is far from trivial, due to bugs in `proto3-json-serializer`. We should therefore expose that function explicitly as part of some "Temporal Utils" API.

Reactions: 👍 2

</details>

<details>
<summary><strong>kp-eugene-kulabuhovs</strong> commented on 2025-08-06 12:44:26.000 UTC</summary>

@jhecking could you provide a full code example? I'm not sure where you got the `History.fromObject()` function from. As a workaround for this issue I've tried downloading history from UI base64 encoded - it worked, but not as readable.

</details>


---

### #1292: [Bug] ESM Custom payload converters cannot be loaded

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1292 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-11-14 17:58:06.000 UTC (2y 1m ago) |
| **Updated** | 2025-01-16 00:47:53.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Use an ESM module as a custom payload converter.

### Describe the bug

When an ESM module is used as a custom payload converter, the SDK tries to `require` it, which results in the follow error:

https://github.com/temporalio/sdk-typescript/blob/3088f86ce6fe0c7072ba55c4db901a70b631f87e/packages/common/src/internal-non-workflow/data-converter-helpers.ts#L22

(from slack)

```
Error [ERR_REQUIRE_ESM]: require() of ES Module *****/services/asm-saas-worker/build/lib/payload-converter.js from /Users/nohehf/Documents/ESCAPE/product/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js not supported.
Instead change the require of payload-converter.js in *****/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js to a dynamic import() which is available in all CommonJS modules.
    at Hook._require.Module.require (*****/node_modules/require-in-the-middle/index.js:188:39)
    at requireConverter (*****/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js:17:18)
    at loadDataConverter (*****/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js:46:28)
    at compileWorkerOptions (*****/node_modules/@temporalio/worker/lib/worker-options.js:167:76)
    at Worker.create (*****/node_modules/@temporalio/worker/lib/worker.js:141:75)
    at createTemporalWorker (file://*****/packages/temporal-worker/build/index.js:21:33)
    at async file://*****/services/asm-saas-worker/build/index.js:44:16 {
  code: 'ERR_REQUIRE_ESM'
}
```

### Additional context

See the slack thread here (while the history is still retained): https://temporalio.slack.com/archives/C01DKSMU94L/p1699973888839069


#### Comments (6)

<details>
<summary><strong>nohehf</strong> commented on 2023-11-14 19:59:27.000 UTC</summary>

Thanks @bergundy for opening the issue, I'll report my findings here asap. I'm currently trying to find a way around this.

</details>

<details>
<summary><strong>nohehf</strong> commented on 2023-11-14 20:18:55.000 UTC</summary>

Here are the things I noticed while looking through the codebase:
The payload converter is loaded differently at: https://github.com/temporalio/sdk-typescript/blob/3088f86ce6fe0c7072ba55c4db901a70b631f87e/packages/common/src/internal-non-workflow/data-converter-helpers.ts#L22 and here https://github.com/temporalio/sdk-typescript/blob/3088f86ce6fe0c7072ba55c4db901a70b631f87e/packages/workflow/src/worker-interface.ts#L110

The payload converter is passed to Webpack via an alias: 
https://github.com/temporalio/sdk-typescript/blob/3088f86ce6fe0c7072ba55c4db901a70b631f87e/packages/worker/src/workflow/bundler.ts#L206

Whereas the other code that needs to be bundled (e.g. workflows code) is bundled in a file:
https://github.com/temporalio/sdk-typescript/blob/3088f86ce6fe0c7072ba55c4db901a70b631f87e/packages/worker/src/workflow/bundler.ts#L159

This might create some issues? I don't know how Webpack will resolve the aliases here, but as I have no issue importing ESM workflows, this might be the root cause.

Also, if I run this in my development mode (importing an ESM `.ts` payload converter) via [tsx](https://www.npmjs.com/package/tsx), so maybe it would help to bundle all the code via some modern bundler like [esbuild](https://github.com/evanw/esbuild) (which tsx uses) might help here (+ resolve other potential issues / add some benefits like speed).

Is there a particular reason why the bundle is in commonjs ? Just enforcing ESM seems to be the way to go nowadays. Also, node16 is not the LTS now.

PS: those are a few remarks I noted while trying to fix my issue, not critics, and I'm looking forward to helping/contributing here if possible; I hope this helps.

PS2: Also, having general guidelines / docs on how to pack our code (workflows, converters...) would be nice.

</details>

<details>
<summary><strong>nohehf</strong> commented on 2023-11-18 18:08:38.000 UTC</summary>

After a lot of trial and error, I could finally bundle my ESM code into a commonjs payload converter using `esbuild`.
Here's the command/settings that worked for me:
```bash
esbuild --bundle --outfile=build/index.cjs --target=esnext --platform=node --external:@temporalio/common --external:@bufbuild/protobuf src/index.ts
```
The key here was to externalize `@temporalio` dependencies from the bundle, causing issues if bundled. I also externalized the dependencies that could be imported from commonjs (here `@bufbuild/protobuf`).

Would you like to put this into the docs or integrate it into `@temporalio/worker` bundler?

</details>

<details>
<summary><strong>izakfilmalter</strong> commented on 2024-01-12 11:40:37.000 UTC</summary>

@nohehf are you using `bundleWorkflowCode`? Or are you creating your own bundle? Trying to understand how to make this work with https://github.com/temporalio/samples-typescript/tree/main/production

</details>

<details>
<summary><strong>nohehf</strong> commented on 2024-01-29 14:34:43.000 UTC</summary>

Hey @izakfilmalter
We use `bundleWorkflowCode` (indirectly through `Worker.create`).
We only manually bundle the converter to cjs via `esbuild` using the command above https://github.com/temporalio/sdk-typescript/issues/1292#issuecomment-1817586107. The converter is exported in a dedicated package and then imported using a require.
So in the end we have something like:
```ts
import * as activities from './activities/index.js';
// [...]
const connection = await NativeConnection.connect({ address: url });

const require = createRequire(import.meta.url);

const worker = await Worker.create({
  workflowsPath: require.resolve('./workflows/index.js'),
  taskQueue: 'my-ts-task-queue',
  activities,
  dataConverter: {
    payloadConverterPath: require.resolve('<organization>/temporal-converter'), // <organization>/temporal-converter being the package name in our yarn/npm workspaces
  },
});
```

Workflows and activities are written in TS ESM next.
Converter is bundled to cjs.
Hope this helps :))
PS: sorry for the delay, missed the notification somehow.

</details>

<details>
<summary><strong>rclmenezes</strong> commented on 2025-01-16 00:46:14.000 UTC</summary>

I ended up using tsup like this:

```javascript
// tsup.config.js
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "build",
  external: ["pg-native", "@temporal/common", "@bufbuild/protobuf"],
  target: "esnext",
});
```

And this in my package.json:
```json
{
  ...
  "scripts": {
    "build": "tsup --config tsup.config.js --dts",
    "dev": "dotenvx run --env-file=../app/.env --env-file=../app/.env.local --env-file=../app/.env.development -- pnpm tsx watch ./src/index.ts",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "lint": "eslint ./src/*",
    "lint:fix": "pnpm lint --fix",
    "start": "node ./build/index.cjs",
    "start:dev": "dotenvx run --env-file=../app/.env --env-file=../app/.env.local --env-file=../app/.env.development -- pnpm tsx ./build/index.cjs",
    "typecheck": "tsc --noEmit"
  },
  ...
}
```

And to make my path work both in ESM and CJS:

```typescript
// worker.js

const currentDirname: string =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS ?? "localhost:7233",
  });

  const worker = await Worker.create({
    workflowsPath: path.join(currentDirname, "../../../packages/workflows/src/workflows.ts"),
    activities,
    namespace: TEMPORAL_NAMESPACE,
    taskQueue: TEMPORAL_TASK_QUEUE,
    connection,
  });

  await worker.run();
}
```

Worked great

I still wish I could export as an ESM though... It would be lovely if @temporal/common didn't have dynamic requires

</details>


---

### #1021: [Feature Request] async generator for cancellationScope

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1021 |
| **State** | OPEN |
| **Author** | Irvenae (Irven Aelbrecht) |
| **Created** | 2023-01-11 11:07:08.000 UTC (2y 11m ago) |
| **Updated** | 2025-02-07 03:50:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I am using nested CancellationScopes to implement update logic and I want to be able to inject results from the previous iteration, where it was at that point. Mind that the internal cancellationScope could have a long duration.

For this I want to use an async generator, see snippet underneath.

I have 2 cancellationScopes, 1 for the update of the item and 1 for an update in the `cancellableComputeFn`. On each  `updateItemSignal` I want to run `cancellableComputeFn`. On each `updateSignal` I want to do a calculation.
At the end of the `cancellableComputeFn` I have a long sleep to wait for possible updates. On an update I don't want to lose progress of my itemRes. Mind that in reality this is split over a class so I can't use (variables known over the main() fn).

The reason to split it is to reuse the more generic item updating (and hide that from the specific computeFn).

```
async function main() {
	let updateScopeFn = new CancellationScope({ cancellable: true });
	let updateScopeItem = new CancellationScope({ cancellable: true });
	
	// In reality this handler is part of computationFn.
	setHandler(updateItemSignal, () => {
	  updateScopeItem.cancel();
	   updateScopeItem = new CancellationScope({ cancellable: true });
	   updateScopeFn = new CancellationScope({ cancellable: true, parent:  updateScopeItem });
	}
	setHandler(updateSignal, () => {
	   updateScopeFn.cancel();
	   updateScopeFn = new CancellationScope({ cancellable: true, parent: updateScopeFn.parent });
	}
		
	const cancellableComputeFn = async function* (itemRes) {
		let state = 'processing';
		let internalCount = itemRes.internalCount;
		while( state !== 'completed') {
			try {
				yield* updateScopeFn.run(async () => {
					internalCount += 1;
					yield {internalCount}; // Let 
					await sleep('1d');
					state = 'completed';
				}
			} catch(err) {
				// Catch cancellation error.
			}
		}
		return {internalCount};
	}
	
	// In my actual code this is a class such that I can place the updateScopeItem in this fn.
	const computationFn = async function () {
		let itemRes = {internalCount: 0};
		let state = 'processing';
		while( state !== 'completed') {
			// Do some other processing.
			try {
			  await updateScopeItem.run(async () => {
			  const computeFn = cancellableComputeFn(itemRes);
			  while (true) {
			    const { value, done } = await computeFn.next();
			    if (!done) {
			      itemRes = value;
			    }
			    if (done) {
			      return value;
			    }
			  }
			});
			state = 'completed';
			} catch(err) {
				// Catch cancellation error.
			}
		}
	}
	
	await computationFn();
}
```

Maybe you use other patterns to achieve this?



#### Comments (8)

<details>
<summary><strong>bergundy</strong> commented on 2023-01-12 00:46:18.000 UTC</summary>

I'd write this workflow as shown below.
Does this look better to you?

```ts
export async function myWorkflow() {
  let internalCount = 0;
  for (;;) {
    try {
      await CancellationScope.cancellable(async () => {
        const scope = CancellationScope.current();
        setHandler(updateSignal, () => scope.cancel());
        for (;;) {
          try {
            await CancellationScope.cancellable(async () => {
              const scope = CancellationScope.current();
              setHandler(updateItemSignal, () => scope.cancel());
              internalCount++;
              await sleep('1d');
            });
            break;
          } catch (err) {
            // Catch cancellation error.
          }
        }
      });
      break;
    } catch (err) {
      // Catch cancellation error.
    }
  }
}
```

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-01-12 00:53:15.000 UTC</summary>

Or with a generator:

```ts
export async function myWorkflow() {
  async function* compute(internalCount = 0) {
    for (;;) {
      try {
        yield ++internalCount;
        await CancellationScope.cancellable(async () => {
          const scope = CancellationScope.current();
          setHandler(updateItemSignal, () => scope.cancel());
          await sleep('1d');
        });
        break;
      } catch (err) {
        // Catch cancellation error.
      }
    }
  }
  for (;;) {
    let internalCount = 0;
    try {
      await CancellationScope.cancellable(async () => {
        const scope = CancellationScope.current();
        setHandler(updateSignal, () => scope.cancel());
        for await (const c of compute(internalCount)) {
          internalCount = c;
        }
      });
      break;
    } catch (err) {
      // Catch cancellation error.
    }
  }
}
```

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-01-12 01:16:41.000 UTC</summary>

I think technically you can implement async generator support for cancellation scopes with something like this:

```ts
import { CancellationScope } from '@temporalio/workflow';
import { storage } from '@temporalio/workflow/lib/cancellation-scope';

export class MyCancellationScope extends CancellationScope {
  iter<I, F extends AsyncGenerator<I>>(f: () => F): AsyncGenerator<I> {
    return storage.run(this, f);
  }
}
```

`storage` is an internal API so I wouldn't recommend using it but if this solution works for you, I'd accept a contribution to the SDK to add the feature (with some proper tests).

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-01-12 08:11:08.000 UTC</summary>

Thanks for the quick response 🚀 
There could be some nesting involved in the cancellationScopes in computeFn as well and some computations might be skipped dependent on the received signal, so moving out of the scope to do the yield isn't really an option.

So the example would be more like this.
```
async function* compute(internalCount = 0) {
    for (;;) {
      try {
        await CancellationScope.cancellable(async () => {
          const scope = CancellationScope.current();
          setHandler(updateSignal2, () => scope.cancel());
           // Do some other calculations.
		   internalCount = 2*internalCount;
          yield internalCount
          
          await CancellationScope.cancellable(async () => {
	          const scope = CancellationScope.current();
	          setHandler(updateSignalItem, () => scope.cancel());
	          yield ++internalCount;
	          
	          await sleep('1d');
	      });
        });
        break;
      } catch (err) {
        // Catch cancellation error.
      }
    }
  }
  ```

I will tryout the last suggestion.

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-01-12 10:57:34.000 UTC</summary>

Seems like that doesn't work. When you try to cancel the scope the iter method does not terminate.
how is this cancellation injected in the current run method?

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-01-12 17:16:06.000 UTC</summary>

You should read the implementation of `CancellationScope`, it's fairly straightforward: https://github.com/temporalio/sdk-typescript/blob/main/packages/workflow/src/cancellation-scope.ts.
The heavy lifting is done by node's `AsyncLocalStorage`.

You might want to create scopes around each "sleep" or other `Promise`s awaited in your generator to have cancellable operations but I understand that it's not as elegant as having `CancellationScope` do this automatically for you.
You can create a helper as show here:

```ts
async function cancellableWithSignal(signalDef, fn) {
  return await CancellationScope.cancellable(async () => {
    const scope = CancellationScope.current();
    setHandler(signalDef, () => scope.cancel());
    await fn();
  });
}

async function* compute(internalCount = 0) {
    for (;;) {
      try {
        yield ++internalCount;
        await cancellableWithSignal(updateItemSignal, async () => {
          await sleep('1d');
        });
        break;
      } catch (err) {
        // Catch cancellation error.
      }
    }
  }
```

I can see why wrapping the generator with `storage.run` might not work properly since when you `yield` you're effectively leaving the scope.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-03-09 00:14:11.000 UTC</summary>

@Irvenae I'm curious what you ended up doing with this.

</details>

<details>
<summary><strong>Irvenae</strong> commented on 2023-03-09 07:28:06.000 UTC</summary>

Worked around it for now by going out of the scope to do the yield ending up in ugly code...

</details>


---

### #1866: [Bug] Signal caused `condition` to fail with `CancelledFailure` on `1.14.0`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1866 |
| **State** | OPEN |
| **Author** | justinadkins (Justin Adkins) |
| **Created** | 2025-12-23 14:18:56.000 UTC (8 days ago) |
| **Updated** | 2025-12-30 14:59:27.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 5 |
| **Priority Score** | 7 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

We bumped our Temporal dependencies to `1.14.0` today from `1.13.1` and upon deploying started seeing workflows fail due to the following error:
```ts
CancelledFailure: Workflow cancelled
    at RootCancellationScope.cancel (/tmp/build_d69c691a/node_modules/.pnpm/@temporalio+workflow@1.14.0/node_modules/@temporalio/workflow/src/cancellation-scope.ts:264:16)
    at /tmp/build_d69c691a/node_modules/.pnpm/@temporalio+workflow@1.14.0/node_modules/@temporalio/workflow/src/workflow.ts:1171:36
```

Rolling back to `1.13.1` resolves the issue. We've reset the effected workflows to the signal event and they now run correctly. A race condition seems to have been introduced since we do observe some of our workflows succeeding with a signal and `condition`.

### Describe the bug
We started seeing phantom `CancelledFailure` errors surface in our workflows after updating to `1.14.0` that seem to be coming from `condition`. Nothing else about our code has changed. An example of the code where this appears to be failing:

<img width="1382" height="652" alt="Image" src="https://github.com/user-attachments/assets/a07f3f62-9b47-4438-825e-b81cec6d9930" />

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction

Unable to reproduce locally so far. We have over 30 workflows in production that have experienced this.

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux
- Temporal Version: 1.14.0
- Are you using Docker or Kubernetes or building Temporal from source? From source


#### Comments (5)

<details>
<summary><strong>yosefrev</strong> commented on 2025-12-25 15:03:46.000 UTC</summary>

We’re experiencing this as well ➕ 

Reactions: 👍 1

</details>

<details>
<summary><strong>yardenli</strong> commented on 2025-12-29 13:37:21.000 UTC</summary>

We also started experiencing it as well with updates. 
We have an update with timeout, and experienced it in some workflows right after the update was accepted, and in some after the update reached it's timeout. 
It is important to mention that it happened in some workflows while other succeeded, and we couldn't find a clear pattern.

</details>

<details>
<summary><strong>chris-olszewski</strong> commented on 2025-12-29 16:08:55.000 UTC</summary>

For those affected by this:
 - Have you observed this with `1.13.2` or exclusively with `1.14.0`?
 - Do you have interceptors setup such as `@temporalio/interceptors-opentelemetry`?

</details>

<details>
<summary><strong>yardenli</strong> commented on 2025-12-30 08:38:33.000 UTC</summary>

@chris-olszewski we observed it exclusively with `1.14.0`. After going back to `1.13.2` we observed no issues.
We do have interceptor set up using `@temporalio/interceptors-opentelemetry` (we are using `OpenTelemetryWorkflowClientInterceptor`).

</details>

<details>
<summary><strong>justinadkins</strong> commented on 2025-12-30 14:59:27.000 UTC</summary>

@chris-olszewski We only observe this on `1.14.0`. We are not using an interceptor. However, for activities we have this custom wrapper used for creating spans with Datadog.

<img width="1338" height="1336" alt="Image" src="https://github.com/user-attachments/assets/71ef9bc9-4199-4fe8-8f85-d5470aae90b9" />

</details>


---

### #1325: [Bug] Throwing an exception from a workflow may result in `Failed to activate workflow` due to `DataCloneError`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1325 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-12-21 00:15:52.000 UTC (2 years ago) |
| **Updated** | 2025-06-24 14:36:20.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the bug

Throwing a non-Error and non-Failure exception and letting that exception bubble up out of the Workflow function causes activation failure (due to `DataCloneError`) if that object contains non-serializable objects.

Even though a `Failed to activate workflow` error message mentioning `DataCloneError` is visible in the log, the original exception is not accessible, making it difficult to figure out the origin of the failure.

We need to figure out how this situation can be handled better.

For example:
- We could consider serializing sink arguments immediately at the call site, rather than delaying that until completion of the activation, which would allow reporting the `DataCloneError` error in context (and also let's make that error message more obvious).
- By using a custom Serializer object, it might be possible to intercept serialization errors, and automatically replace problematic object by some safe alternative (ie. a JSON representation of that object, a string saying that item could not be serialized, etc).

### Minimal Reproduction

1. Execute the following workflow

```
class MyCustomError {
  public readonly x: any;
  constructor(public message: string) {
    this.x = () => 1;
  }
}

export async function exampleWorkflow(): Promise<void> {
  throw new MyCustomError('Intentional error');
}
```

2. Observe that execution produces the following error:

```
2023-12-20T23:39:49.741Z [ERROR] Failed to activate workflow {
  namespace: 'default',
  taskQueue: 'hello-world',
  workflowId: 'workflow-X0CYgbSxElPenLeMFU68e',
  runId: '3fe2dbe4-8f71-4755-9bee-b6fc4d02cac4',
  workflowType: 'example',
  error: DataCloneError: ()=>1 could not be cloned.
      at new DOMException (node:internal/per_context/domexception:53:5)
      at MessagePort.<anonymous> (/Users/jwatkins/Development/Temporal/TypeScriptSDK/samples-typescript/hello-world/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:92:20),
  workflowExists: true
}
```

3. Note that activation don't fail and no `DataCloneError` is thrown if the `MyCustomError` class is modified to extend `Error` (the workflow task still fails, which is expected), as follows:

```
class MyCustomError extends Error {
  public readonly x: any;

  constructor(public message: string) {
    super(message);
    this.x = () => 1;
  }
}
```

### Details

There are few factors contributing to this issue:
- The Workflow Worker automatically logs exceptions that bubble up out of the workflow function;
- The V8 Serialization can't serialize some type of objects (including functions), and throws a `DataCloneError` on encountering a non-serializable object.
- As the list of all sink calls is transferred from the worker thread to the main thread as a single message, the failure to encode a single object causes the whole operation to fail.

#### Comments (3)

<details>
<summary><strong>jan-stehlik</strong> commented on 2024-01-16 10:49:47.000 UTC</summary>

hey @mjameswh thanks for writing this up, we are experiencing the same behaviour. Do you have any idea when this might be picked up / prioritised? Thanks

Reactions: ❤️ 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-01-22 15:20:18.000 UTC</summary>

@jan-stehlik If your workflow is throwing exceptions that results in a `DataCloneError`, then the proper thing to do is to intercept those exceptions and throw something that can be safely serialized using the V8 serialization algorithm, such as an `ApplicationFailure` or a class that extends `Error`.

This ticket is not about _resolving_ the fact that throwing non-serializable objects results in a `DataCloneError`, as this is inherent to the V8's serialization algorithm and we have pretty much no control on it, but rather to make it easier for users to understand these situations and figure out where the non-serializable object come from.

Reactions: 👍 2

</details>

<details>
<summary><strong>Jac0xb</strong> commented on 2025-06-24 14:36:20.000 UTC</summary>

I got this same error from the following (reset to right before the error and got the callstack)

```
  at Object.condition (/app/node_modules/.pnpm/@temporalio+workflow@1.11.8/node_modules/@temporalio/workflow/src/workflow.ts:1051:32)
    at condition (/app/backend/packages/temporal/src/transaction_indexer/head-sync.workflow.ts:74:40)

    at race (/app/backend/packages/temporal/src/transaction_indexer/head-sync.workflow.ts:74:20)
```


The Line

```
await Promise.race([sleep("15s"), condition(() => signaled)]);
```


```
[temporal-worker] 2025-06-24T14:35:30.813Z [ERROR] Failed to process Worklow Activation {
[temporal-worker]   sdkComponent: 'worker',
[temporal-worker]   taskQueue: '-----',
[temporal-worker]   runId: '5445c4de-3fcd-461f-a165-8f0acd6df6c5',
[temporal-worker]   namespace: 'default',
[temporal-worker]   workflowId: '6srGWWzz6aaEG2qjuBKdGQX7Dzenhnd9ZBVEeEJ6g9z2/head',
[temporal-worker]   workflowType: 'headSyncWorkflow',
[temporal-worker]   error: DataCloneError: [object Promise] could not be cloned.
[temporal-worker]       at new DOMException (node:internal/per_context/domexception:53:5)
[temporal-worker]       at MessagePort.<anonymous> (/app/node_modules/.pnpm/@temporalio+worker@1.11.8_@swc+helpers@0.5.17/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:92:20),
[temporal-worker]   workflowExists: true
[temporal-worker] }
```

</details>


---

### #1008: [Feature Request] Provide more output when webpack fails

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1008 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-12-30 22:02:50.000 UTC (3 years ago) |
| **Updated** | 2024-03-13 19:02:26.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

User: 

> I am getting this error, and it is hard to debug unless I know what source files are leading to these dependencies

![image](https://user-images.githubusercontent.com/251288/210114544-c461f592-fb1b-45d0-9b74-3e7b90a988b3.png)


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

<img width="759" alt="image" src="https://user-images.githubusercontent.com/251288/210114537-ef82df07-90cf-4103-b31d-9ccf61d5c4f7.png">


#### Comments (3)

<details>
<summary><strong>nadilas</strong> commented on 2024-03-10 08:49:07.000 UTC</summary>

Hey guys, @bergundy @lorensr any workarounds available until this get's sorted?

</details>

<details>
<summary><strong>0xsiddharthks</strong> commented on 2024-03-13 07:25:05.000 UTC</summary>

+1. Been stuck on this for a while.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2024-03-13 19:02:25.000 UTC</summary>

Not yet.

If anyone wants to try this out, we may get more information from webpack by customizing the output if `hasError` is true in this line:

https://github.com/temporalio/sdk-typescript/blob/b38c70c2a5656a0e5fd2b3891cf2cc65b425e315/packages/worker/src/workflow/bundler.ts#L265

</details>


---

### #665: [Feature Request] Allow for easy mocking 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/665 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-05-24 22:57:17.000 UTC (3y 7m ago) |
| **Updated** | 2024-12-20 22:12:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Mocking an SDK function is difficult. If you use a system [like Sinon](https://sinonjs.org/how-to/stub-dependency/) that depends on default exports, it doesn't work, since we don't do default exports. Even if you use a system like Jest that allows you to mock the whole package, there are two issues:

- Unless your code only uses a single function, you have to mock or add back in the other functions. This, for instance, creates a package that only exports `proxyActivities`:

```ts
const mockRequest = jest.fn<Promise<string>, []>();
mockRequest.mockResolvedValue('3');

test('httpWorkflow with mocked proxyActivities', async () => {
  jest.mock('@temporalio/workflow', () => ({
    proxyActivities: mockRequest,
  }));

  expect(await httpWorkflow()).toBe('The answer is 3');
});
```

- When you mock, you have to recreate the environment. For instance, if you run the above, you get:

```
 FAIL  src/workflows.test.ts (9.489 s)
  ● httpWorkflow with mocked proxyActivities

    TypeError: exports.storage.getStore is not a function

      14 |
      15 | export async function httpWorkflow(): Promise<string> {
    > 16 |   const answer = await makeHTTPRequest();
         |                        ^
      17 |   return `The answer is ${answer}`;
      18 | }
      19 |

      at Function.current (node_modules/@temporalio/workflow/src/cancellation-scope.ts:156:20)
      at node_modules/@temporalio/workflow/src/workflow.ts:151:37
      at scheduleActivityNextHandler (node_modules/@temporalio/workflow/src/workflow.ts:150:10)
      at scheduleActivity (node_modules/@temporalio/workflow/src/workflow.ts:259:10)
      at node_modules/@temporalio/workflow/src/workflow.ts:493:18
      at httpWorkflow (src/workflows.ts:16:24)
      at Object.<anonymous> (src/workflows.test.ts:67:28)
```

### Solution

The current solution in the case of `proxyActivities` is to run a Worker with a test connection and mock activities ([like this](https://github.com/temporalio/samples-typescript/blob/622f40bada8438972d62c9e7f6f500fe6695dd33/activities-examples/src/workflows.test.ts#L47)), and to start a workflow using the test client. If you want to test a helper function used by workflows, then tell the Worker the helper is a workflow and start it, like this:

```ts
// workflow-helpers.ts
export function myHelper() { ... }
```

```ts
// workflow-helpers.test.ts
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflow-helpers'),
    ...
  });
  await withWorker(worker, async () => {
    const result = await workflowClient.execute(myHelper, {
      workflowId: uuid4(),
      taskQueue: 'test',
    });
    expect(result).toEqual('The answer is 99');
  });  
```

### Feedback

If the current solution described above doesn't work for your case, or isn't ideal for you, let us know in this thread! ☺️

#### Comments (7)

<details>
<summary><strong>bergundy</strong> commented on 2022-05-24 23:14:33.000 UTC</summary>

You can mock the workflow functions but you need to it from the vm context otherwise it’ll have no effect. I agree it’s hard to set up but probably possible with sinon (haven’t tried though). Not sure how much value there is to mocking parts of the workflow instead of using the test environment  

</details>

<details>
<summary><strong>rcarton</strong> commented on 2022-07-19 14:41:50.000 UTC</summary>

After a lot of trial and error, the least obtrusive method I've found is to use rewire and sinon:

```ts
// In workflow, must use `let` instead of const
let { getCustomerActivity } =
  proxyActivities<typeof activities>({
    startToCloseTimeout: "1 minute",
  });
```

```ts
// Test utils
type Activities = typeof activities;
type StubbedActivity<T extends keyof Activities> = sinon.SinonStub<
  Parameters<Activities[T]>,
  ReturnType<Activities[T]>
>;

// Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/rewire/index.d.ts
interface RewiredModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __set__(obj: { [variable: string]: any }): () => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __set__(name: string, value: any): () => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __get__<T = any>(name: string): T;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __with__(obj: { [variable: string]: any }): (callback: () => any) => any;
}

/**
 * Stub an activity
 *
 * @param sandbox a sandbox that you will be restore()'d after the test
 * @param module a rewired module
 * @param activity the name of the activity you want to stub
 */
export function getProxyActivityStub<T extends keyof Activities>(
  sandbox: sinon.SinonSandbox,
  module: RewiredModule,
  activity: T
): StubbedActivity<T> {
  const stub = sandbox.stub();
  module.__set__(activity, stub);
  return stub as StubbedActivity<T>;
}
```

```ts
// In test file
const Workflow = rewire(
  "@temporal-worker/workflows/workflow"
);

const sandbox = sinon.createSandbox();

const getCustomerActivityStub = getProxyActivityStub(
  sandbox,
  Workflow,
  "getCustomerActivity"
);
```




</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-07-19 19:58:08.000 UTC</summary>

Glad you got it working, we'll be working on improving this experience in the future

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-07-04 19:22:56.000 UTC</summary>

For the record and public visibility, here is a working proof of concept I developed a few months ago for mocking child workflows. The great things with this approach are 1) multiple tests can be performed using the same workflow.ts file (other methods require one workflow.ts per test case), 2) it ends up calling a callback function in the unit test context, so its easy to make test assertions there. This is probably not the way we'll end up implementing this in SDK, but can be useful to users that want this now. See below for limitations.

It works in three steps: first, an interceptor is used to catch `startChildWorkflow` calls from the Workflow under test, and replaces the workflow type of the child workflow to be started by a predefined "mock workflow" type. Second, the implementation of that "mock workflow" type calls an activity named "mockWorkflowActivity", passing it inputs received from the Workflow under test. Finally, activity type "mockWorkflowActivity" is registered directly on the test Worker.

Are are implementation instructions:

1. In workflow.ts (the one used by unit test), add this workflow:
```
export async function mockChildWorkflow(...args: unknown[]): Promise<string> {
  return await scheduleActivity('mockWorkflowActivity', args, { scheduleToCloseTimeout: '5s' });
}
```

2. Next to test files, create a file named mock-child-workflow-interceptor.ts, containing the following code:
```
import { WorkflowInterceptorsFactory } from '@temporalio/workflow';

export const interceptors: WorkflowInterceptorsFactory = () => {
  return {
    outbound: [
      {
        startChildWorkflowExecution(input, next) {
          return next({
            ...input,
            options: {
              ...input.options,
              args: [input.workflowType, ...input.options.args],
            },
            workflowType: 'mockChildWorkflow',
          });
        },
      },
    ],
  };
};
```

3. In unit test where we want to mock child workflows, define a function named `mockWorkflowActivity` and register it as an activity on the worker; also register the previously created interceptor. Assuming mocha, that could for example give:
```
  it('Mock child workflows', async () => {
    const { client, nativeConnection } = testEnv;

    function mockWorkflowActivity(workflowType: string, ...args: unknown[]): unknown {
      return 'test';
    }

    const worker = await Worker.create({
      connection: nativeConnection,
      taskQueue: 'test',
      workflowsPath: require.resolve('./workflows'),
      activities: { ...activities, mockWorkflowActivity },
      interceptors: { workflowModules: [require.resolve('./mock-child-workflow-interceptor')] },
    });

    await worker.runUntil(async () => {
      const result = await client.workflow.execute(parentWorkflow, {
        workflowId: uuid4(),
        taskQueue: 'test',
        args: ['alice', 'bob', 'charlie'],
      });
      assert.equal(result, 'test\ntest\ntest');
    });
  }).timeout(20000);
```

Note some caveats with this implementation:
- Exceptions — Throwing from the mock workflow activity won’t result in the same thrown exception at the workflow level.
- Timing — The mock workflow activity will have to return pretty quickly, where as the actual child workflow may have stayed alive for some time.
- Signals — This implementation won’t work if you need the parent and child workflows to exchange signals.
- All or nothing — The current implementation intercepts all child workflow executions. It can’t be selective on which invocations are to be catch. It would not be hard however to fix.

Reactions: 👍 5 🎉 1

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-07-05 15:06:49.000 UTC</summary>

I like where you're going with this @mjameswh.

A few places where this can be expanded:
- Integration of this solution and make it easier to use and more configurable
- Integrations with mock frameworks as config packages
- Give control over which workflow types get mocked
- Make this not an activity so it (possibly, need to verify) doesn't affect time skipping (would need to introduce a new concept (`*`))
- Try an approach where mocks run in workflow context
- Add signal support
- Add exception translation support

`*` We were talking about a local activity that doesn't produce a marker that can be used in query handlers and update validators, this could be helpful here too.

Reactions: 👍 1

</details>

<details>
<summary><strong>gaurav1999</strong> commented on 2024-06-28 05:19:10.000 UTC</summary>

Here's an example if anyone's looking to test parent workflows executing child workflows.

Your workflow code -> src/workflows/order.workflow.ts [Parent]

Order workflow code executes a bunch of activities, and one child workflow called `sendNotificationWorkflow`.

In order to test order.workflow.ts and use mock child workflow `sendNotificationWorkflow` while testing.

Create a separate file src/workflow/tests/test-order.workflow.ts

```
export * from '../order.workflow.ts'; //Exporting the original order workflow since we want to test it's original code as it is

//Mock child workflow
export async function sendNotificationWorkflow(
    email: string,
   
  ): Promise<boolean> {
    return true;
}
```

And now, put this file in your worker worfklowsPath option so that it loads the code of your original workflow, and mock code of your child workflow

```

const worker = await Worker.create({
      connection: nativeConnection,
      taskQueue,
      workflowsPath: require.resolve('./test-order.workflow.ts'),
      activities,
      debugMode: true
 });
```

This works well for me!

I think, the idea is, that it's easier to give a mocked context to worker, rather rewiring the SDK components. 

Reactions: 👍 1

</details>

<details>
<summary><strong>chadxz</strong> commented on 2024-12-20 22:12:43.000 UTC</summary>

I was able to hack something together that worked for me based on @mjameswh's suggestion, but it definitely does not feel like a supported first-class experience. It would be great if I could pass mock workflows directly to Worker.create() similar to how the activities are provided.

In my scenario, I was using `startChild` in my workflow, which is async. I was having trouble with my tests being flaky, because worker.runUntil was returning before the mocked activity was called, so my assertion was failing. I put in a `for await` loop to wait for the remaining workflows to complete before allowing the worker to shutdown. Perhaps there's a better way to do that, though...

something like this:
```ts
await worker.runUntil(async () => {
  await client.workflow.execute(myWorkflowToBeTested, {
    workflowId: randomUUID(),
    taskQueue: "MyQueue",
    args: ["foo"],
  });

  for await (const { workflowId, runId } of client.workflow.list()) {
    await client.workflow.getHandle(workflowId, runId).result();
  }
});
```

</details>


---

### #1351: [Feature Request] Support updating schedule by cronExpression

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1351 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2024-02-06 22:53:09.000 UTC (1y 10m ago) |
| **Updated** | 2025-02-05 16:39:28.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 2 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

David says it's supported by Server. Looks like TS SDK doesn't support it in the update fn, I forget whether that was intentional.

#### Comments (2)

<details>
<summary><strong>vinycs1</strong> commented on 2024-02-20 22:38:20.000 UTC</summary>

This feature will be very helpful

Reactions: 👍 1

</details>

<details>
<summary><strong>cr0wst</strong> commented on 2025-02-05 16:39:27.000 UTC</summary>

We ran into this issue where when updating only the `cronExpression` you end up getting multiple intervals and upcoming runs.

I believe this is because temporal is not wiping the existing intervals out as part of the update, but it's applying the cron expressions to those intervals.

I found a workaround by deleting the intervals and calendars (probably only need one) from the `ScheduleUpdateOptions`

```ts
export async function update_schedule(id: string, args: UpdateScheduleArgs) {
  const handle = await get_schedule_handle(id);

  await handle.update((schedule: ScheduleUpdateOptions) => {
    schedule.spec.cronExpressions = [args.cron_expression];
    schedule.spec.timezone = args.timezone;
    delete schedule.spec.intervals;
    delete schedule.spec.calendars;

    return schedule;
  });
}
```

</details>


---

### #915: [Feature Request] Emit metrics from client connection

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/915 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-10-11 23:49:28.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-11 23:49:28.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 0 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description

Currently metrics are only emitted when using NativeConnection (only used by the worker).
We need to emit metrics from the client connection as well.


---

### #1668: [Bug] common package not importing @types/ms

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1668 |
| **State** | OPEN |
| **Author** | cosn (Cosmin Nicolaescu) |
| **Created** | 2025-04-03 02:26:11.000 UTC (9 months ago) |
| **Updated** | 2025-05-28 00:48:27.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

The `common` package imports `ms` but not its types. As such, there is no validation on e.g. `Duration` props. However, if the package is pulled in from some other dependency, it will break any temporal usage that does not `as const` or explicitly type the props.

#### Comments (1)

<details>
<summary><strong>wi-ski</strong> commented on 2025-05-28 00:48:26.000 UTC</summary>

Same

</details>


---

### #1663: [Bug] Can't use structuredClone in workflow code

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1663 |
| **State** | OPEN |
| **Author** | pn1k |
| **Created** | 2025-04-01 20:10:23.000 UTC (9 months ago) |
| **Updated** | 2025-05-15 19:28:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Make a copy of value in workflow code with structuredClone() function of nodejs.

### Describe the bug

It seems that webpack'ed code lack of structuredClone function.

### Minimal Reproduction

// in workflow code
const someData = { foo: 'bar' }
const cloneData = structuredClone(someData);

### Environment/Versions
- Node 22.14.0
- OS and processor: Linux x86
- Temporal SDK: 1.11.7



#### Comments (5)

<details>
<summary><strong>lukeramsden</strong> commented on 2025-04-16 13:33:34.000 UTC</summary>

I've just found this too, trying to use structuredClone to copy some input arrays that are then modified inside a class. @mjameswh is there any reason not to expose this in the workflow sandbox same as we did for TextDecoder etc? I can open a PR to do that.

</details>

<details>
<summary><strong>lukeramsden</strong> commented on 2025-04-16 13:51:03.000 UTC</summary>

```diff
diff --git a/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js b/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js
index f3a06d6..8fb90fd 100644
--- a/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js
+++ b/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js
@@ -60,6 +60,7 @@ class ReusableVMWorkflowCreator {
             TextEncoder: node_util_1.TextEncoder,
             TextDecoder: node_util_1.TextDecoder,
             AbortController,
+            structuredClone,
         };
         this._context = node_vm_1.default.createContext(globals, { microtaskMode: 'afterEvaluate' });
         this.injectConsole();
diff --git a/node_modules/@temporalio/worker/lib/workflow/vm.js b/node_modules/@temporalio/worker/lib/workflow/vm.js
index 239aa90..21e2655 100644
--- a/node_modules/@temporalio/worker/lib/workflow/vm.js
+++ b/node_modules/@temporalio/worker/lib/workflow/vm.js
@@ -69,6 +69,7 @@ class VMWorkflowCreator {
             TextEncoder: node_util_1.TextEncoder,
             TextDecoder: node_util_1.TextDecoder,
             AbortController,
+            structuredClone,
         };
         const context = node_vm_1.default.createContext(globals, { microtaskMode: 'afterEvaluate' });
         this.script.runInContext(context);
```

If you use patch-package, this is a patch that will get this working. Testing myself in our system it all seems to work fine.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-15 05:34:40.000 UTC</summary>

_This is a summary from [this](https://temporalio.slack.com/archives/C01DKSMU94L/p1745351976943959) Slack conversation._

If the `structuredClone` function is injected this way, cloned objects prototypes will be associated with the wrong execution context, which means that `instanceof` will always return `false`, even for built-in types.

For example (this was executed ):

```
let x = { a: [1], b: new Error(), c: new Date() };
let y = structuredClone(x);

[x, y].map((z) => (z instanceof Object)
 => [true, false]

[x, y].map((z) => (z.a instanceof Array)
 => [true, false]

[x, y].map((z) => (z.b instanceof Error)
 => [true, false]

[x, y].map((z) => (z.c instanceof Date)
 => [true, false]
```

We have [a utility function](https://github.com/mjameswh/sdk-typescript/blob/4dcc82aa48fc285119978bd2a93acc3a0e9fd231/packages/workflow/src/worker-interface.ts#L165) that we use internally to recursively fix some well known prototypes on objects being transferred from an outer execution context. However, using that over `structuredClone` would break the contract of `structuredClone`, i.e. a single object reachable through multiple paths inside a source object graph should be cloned to a single object in the resulting graph. The `fixPrototypes` function could also fall in a never ending loop if the source graph contains self reference loops.

For those reasons, the best approach at this time is to load a polyfill.

Reactions: 👍 1

</details>

<details>
<summary><strong>lukeramsden</strong> commented on 2025-05-15 09:24:19.000 UTC</summary>

Fascinating - didn't know that. I would say that's worth documenting since I think this will come up again a lot. Going to replace my patch with a poly-fill.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-15 19:28:23.000 UTC</summary>

> I would say that's worth documenting since I think this will come up again a lot.

Yeah, been thinking about this for some time. We definitely need to provide more clarity regarding what expectations hold inside the workflow sandbox and why some things are not provided. Our current claim about only exposing "APIs that are deterministic-safe" is too imprecise, and not sufficient since there are other constraints at play.

Reactions: 👍 1

</details>


---

### #1458: [Feature Request] Support passing preloaded data converters to Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1458 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-07-08 14:28:04.000 UTC (1y 5m ago) |
| **Updated** | 2024-09-22 06:07:15.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 🎉 1 |

#### Description

### Describe the solution you'd like

At this time, all public APIs that accept `DataConverter`s require payload converter and failure converter to be specified as paths. That requirement originally stemmed from a desire of being consistent with the way `DataConverter`s are passed to Workflow Workers, where paths are required because these two converters need to be loaded inside the Workflow Sandbox.

It however appears that in this specific case, consistency is often counter-productive. Workflow code and client code are often part of distinct deployment units, with distinct build processes for workflow vs client code, so that’s already inconsistent. By imposing consistency, we are forcing users to adapt and complexify the build process of all non-Workflow Worker components without no real reason to do so.

Instead, we should make `Client` accept pre-loaded data converters. And possibly do the same for Activity-only Workers.

#### Comments (1)

<details>
<summary><strong>ilijaNL</strong> commented on 2024-09-22 06:07:05.000 UTC</summary>

Possible workaround for now is 
```ts
const worker = await Worker.create({
    connection,
    dataConverter: await getDataConverter(),
    ...rest
  });

  const loadedDataConverter = worker.options.loadedDataConverter;
  if (loadedDataConverter)
    loadedDataConverter.failureConverter = new DefaultFailureConverter({
      encodeCommonAttributes: true,
    });
```

Reactions: 👍 1

</details>


---

### #1308: [Chore] Add tests to assert proper type rules on all "user defined function with args" APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1308 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-12-05 21:17:45.000 UTC (2 years ago) |
| **Updated** | 2023-12-26 18:30:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Context

Our APIs contain multiple places where a user defined function expect arguments, and where various TypeScript features are used to ensure type coherency and correctness.

Though all of these APIs are expected covered by functional tests, we sometime notice deficiencies in type coherency assertions, like [here](https://github.com/temporalio/sdk-typescript/pull/1307) and [there](https://github.com/temporalio/sdk-typescript/issues/1051).

These errors could have been caught with tests that are designed specifically to trigger build time errors if some type assertion fails. Some tests of that kind already exist in our code base (notably some that got introduced in response to the two issues mentioned previously), but our test coverage is inconsistent and incomplete.

## Describe the task

Assess current typing tests coverage, and add any missing tests.

The following is a non-exhaustive list of our APIs that should be included in this effort. Most of these APIs may require more than a single assertion (e.g. user function requiring args vs accepting no arg, returning a `Promise`, some value, or void, etc).

### Signals
- [ ] `defineSignal`
- [ ] `wf.setHandler`
- [ ] `client.getWorkflowHandler().signal()`
- [ ] `client.getWorkflowHandler().signalWithStart()`
- [ ] `wf.getExternalWorkflowHandler().signal()`
- [ ] `wf.startChild(...).signal()`

### Updates
- [ ] `defineUpdate`
- [ ] `wf.setHandler` (both updater handler and validation handler)
- [ ] `client.getWorkflowHandler().update()`

### Queries
- [ ] `defineQuery`
- [ ] `wf.setHandler`
- [ ] `client.getWorkflowHandler().query()`

### Workflows
- [ ] `client.start(...)`
- [ ] `client.execute(...)`
- [ ] `client.signalWithStart(...)`
- [ ] `wf.startChild()`

### Activities
- [ ] `wf.proxyActivities()`

### Local Activities
- [ ] `wf.proxyLocalActivities()`

### Schedules
- [ ] `client.createSchedule({ ... })`
- [ ] `client.getScheduleHandle().update({ ... })`

#### Comments (5)

<details>
<summary><strong>bergundy</strong> commented on 2023-12-13 05:19:49.000 UTC</summary>

Apart from that [one issue](https://github.com/temporalio/sdk-typescript/issues/1051) where we weren’t maintaining the name in the type, we haven’t had any complaints about deficiencies in the type definitions.

I fear over testing the types is a non productive effort. How come non of our other SDKs are subjected to such requirements?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-12-14 05:41:15.000 UTC</summary>

> Apart from that https://github.com/temporalio/sdk-typescript/issues/1051 where we weren’t maintaining the name in the type, we haven’t had any complaints about deficiencies in the type definitions.

That one and the one that Dan just exposed. And I vaguely remember a few related issues that got introduced during work on features like Schedule and Updates, but got identified and fixed before the PRs got merged in.

I mean, I'm not claiming we have tons of similar deficiencies. But the difficulty here is that this is really about deficiencies that affect _incorrect_ user code (i.e. some code that should not compile does due to improper typing rules).

When an incorrect type definition prevents correct code from compiling, we are very likely to identify and fix these very quickly. But when an incorrect type accepts incorrect code, you won't figure it out unless you actually know that code is incorrect, i.e. by writing code that you would expect to not compile. Users writing incorrect code that compiles probably don't realize they made a mistake, and we are certainly not intentionally introducing mistakes in our tests.

That's why they can stay there for very long time without getting noticed, and why it's very easy to introduce similar issues while developing new features.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-12-14 05:47:09.000 UTC</summary>

> How come non of our other SDKs are subjected to such requirements?

Is that a philosophical question? I'm tempted to say that's because only TypeScript has a type system so extensive and so expressive (even to the point that it is Turing complete)... yet it fails to actually impose even the most basic of these rules at runtime.

I mean, each language is different, and I don't think I can't reasonably provide a short yet complete answer to that question. Still, I feel that in other SDKs, the responsibility of asserting type coherency on workflows/activities/signals/etc arguments relies either on very simple and highly reliable language level constructs (eg. interfaces + proxies in Java and call tree analysis in .Net both ends up making these looks like pure method calls from the compiler's perspective) and/or on runtime level features (eg. reflectively calling a method with incorrect signature will result in a runtime failure in most languages)... or clearly is the responsibility of users when that is not possible (eg. when starting a workflow or scheduling an activity in Go, args are untyped, that's the way it is, so deal with it).

In TS SDK, most of that burden falls on us (or arguably, _we accepted_ that burden for the convenience of our users). Arguments are often accepted through non-simple language constructs (e.g. mapped/conditional/inferred types/parameterized functions/etc), and users get the impression that they can trust and rely on type assertions that our APIs impose, including those resulting from calculated types. These typing assertions are especially important given that runtime is not helping out.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-12-14 05:57:11.000 UTC</summary>

> I fear over testing the types is a non productive effort.

I don't see this is as a long or complex effort. Each case is very simple (one liners in most cases) and involve no _functional_ assertions. Many of the tests have already been written out in [test-interface-type-safety.ts](https://github.com/temporalio/sdk-typescript/pull/1307/files#diff-8d2392d50a59028e11acd1d694a5cb9a4fab8a4c6737b8f010c6d261fe94142d), and missing ones will just follow the same patterns.

The only real effort here is just to assesses which APIs have effectively been covered and which haven't, and copy-paste the code to cover whatever's missing at this point.

Hopefully we don't find any new issue... great! Still, we'll have gained a way to reduce the probability of future regressions, and avoid repeating some past mistakes when eventually introducing new features.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-12-26 18:30:54.000 UTC</summary>

Seems like fairly low ROI.

> That one and the one that Dan just exposed.

That issue was closed, it was working as expected.

So again, it's just a single time where we didn't capture the name of the signal / query definition.

I'm okay with leaving this open, I would just rather prioritize other features and bugs over this.

</details>


---

### #1800: [Feature Request] Provide a way to distinguish error types in logs from TypeScript SDK (errors lose type info across Worker <-> Workflow)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1800 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2025-10-16 09:02:31.000 UTC (2 months ago) |
| **Updated** | 2025-10-16 09:02:31.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Currently users cannot distinguish error types in Temporal’s TypeScript SDK logs, all logged errors appear as plain Error objects with no type information. This prevents detecting whether a failure came from an Activity or a Workflow, making it impossible to set appropriate log levels (e.g., log failures as ERROR instead of WARN). 


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->
> I see, it is a documented limitation of NodeJS. Can you guys introduce some indication of type in the field? As I pointed out above (type or code). It will solve the issue. Also, I noticed that failure field is also a string instead of proper object where we can see details. I understand if you change it to an object, it will be a breaking functionality for someone. Maybe we can introduce another one?

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->
Slack thread: https://temporalio.slack.com/archives/C01DKSMU94L/p1756795588257069

> To be clear, what we’re talking about here are limitations of either Node or V8 themselves, not bugs of the Temporal SDK. See [here](https://nodejs.org/docs/latest-v20.x/api/worker_threads.html#considerations-when-cloning-objects-with-prototypes-classes-and-accessors).


---

### #1738: [Bug] opentelemetry traceState is handled properly in  makeWorkflowExporter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1738 |
| **State** | OPEN |
| **Author** | safareli (Irakli Safareli) |
| **Created** | 2025-07-04 16:13:50.000 UTC (6 months ago) |
| **Updated** | 2025-10-09 17:23:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

When using otel if workflow has tracestate header like this:

<img width="641" height="168" alt="Image" src="https://github.com/user-attachments/assets/c450bc8e-ec7c-4d16-8bc3-ee0051a26509" />

exporting span from worker fails


### Describe the bug

getting this errors:

```
TypeError: _a.serialize is not a function
    at sdkSpanToOtlpSpan (/app/node_modules/.pnpm/@opentelemetry+otlp-transformer@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-transformer/src/trace/internal.ts:44:33)
    at <anonymous> (/app/node_modules/.pnpm/@opentelemetry+otlp-transformer@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-transformer/src/trace/internal.ts:159:11)
    at Array.map (<anonymous>)
    at spanRecordsToResourceSpans (/app/node_modules/.pnpm/@opentelemetry+otlp-transformer@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-transformer/src/trace/internal.ts:158:34)
    at createExportTraceServiceRequest (/app/node_modules/.pnpm/@opentelemetry+otlp-transformer@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-transformer/src/trace/internal.ts:110:20)
    at Object.serializeRequest (/app/node_modules/.pnpm/@opentelemetry+otlp-transformer@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-transformer/src/trace/json/trace.ts:26:52)
    at OTLPExportDelegate.export (/app/node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-exporter-base/src/otlp-export-delegate.ts:69:48)
    at OTLPTraceExporter.export (/app/node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/otlp-exporter-base/src/OTLPExporterBase.ts:32:26)
    at Object.fn (/app/node_modules/.pnpm/@temporalio+interceptors-opentelemetry@1.11.7_@temporalio+activity@1.11.7_@temporalio+c_49fd2775686fed0552daf86155185cd7/node_modules/@temporalio/interceptors-opentelemetry/src/worker/index.ts:86:24)
    at <anonymous> (/app/node_modules/.pnpm/@temporalio+worker@1.11.7/node_modules/@temporalio/worker/src/worker.ts:1364:23)
    at Array.map (<anonymous>)
    at Worker.processSinkCalls (/app/node_modules/.pnpm/@temporalio+worker@1.11.7/node_modules/@temporalio/worker/src/worker.ts:1362:21)
    at Worker.handleActivation (/app/node_modules/.pnpm/@temporalio+worker@1.11.7/node_modules/@temporalio/worker/src/worker.ts:1208:22)

```

### Minimal Reproduction


reproducing this locally was bit hacky.
had to add this so tracestate was passed to temporal when invoking a workflow via js client.

<img width="1686" height="234" alt="Image" src="https://github.com/user-attachments/assets/050feb21-0218-4e3b-bff2-3aeffe610421" />


then once the trace state is passed to workflow  in the makeWorkflowExporter that's passed to Worker.create we get `traceState` that is instance of Object and not an instance of expected TraceState. via debugger you can see this:

<img width="521" height="198" alt="Image" src="https://github.com/user-attachments/assets/6feb9579-94e6-4e79-b7d2-999da58d428f" />

because of this then at some point when span is converted to an request to otel collector as there is traceState .serialize is called on it but this object has no methods only that `_internalState` which is private prop of the TraceState see:

<img width="944" height="539" alt="Image" src="https://github.com/user-attachments/assets/51d91e1f-77f2-458a-a398-c65ccd00c402" />


I suppose the trace state is moved across different JS contexts (from workflow code to host) and information that this object is instance of TraceState is lost and on the other end we just get Object.

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions



- OS and processor: M1 Mac
- Temporal SDK Version: 1.11.7
- Are you using Docker or Kubernetes or building Temporal from source? no



#### hacky fix on my end was to do this:

```ts
const fixTemporalBug = (traceState: TraceState): TraceState => {
  const res = new TraceState();

  (res as any)._internalState = (traceState as any)._internalState;

  return res;
};

// inlined version of makeWorkflowExporter that fixes traceState bug in Temporal
const makeWorkflowExporterFixed = (
  exporter: SpanExporter,
  resource: Resource,
): InjectedSink<OpenTelemetryWorkflowExporter> => {
  return {
    export: {
      fn: (info: WorkflowInfo, spanData: SerializableSpan[]): void => {
        const spans = spanData.map((serialized) => {
          Object.assign(serialized.attributes, info);
          // Spans are copied over from the isolate and are converted to ReadableSpan instances
          const {
            spanContext: { traceState, ...spanContext },
            ...rest
          } = serialized;

          return {
            spanContext: (): SpanContext => ({
              ...spanContext,
              traceState: traceState == null ? traceState : fixTemporalBug(traceState as any),
            }),
            resource,
            ...rest,
          };
        });

        // Ignore the export result for simplicity
        exporter.export(spans, () => undefined);
      },
    },
  };
};
```

#### Comments (4)

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-09 06:20:21.000 UTC</summary>

Thanks for the detailed report, that's helpful.

This is actually the second time I here about this issue (see [previous discussion](https://temporalio.slack.com/archives/C01DKSMU94L/p1746432163574499) on our Slack workspace), though we never got far enough in investigating this the other time.

Interestingly, however, you are _only_ the second user reporting this, which makes me think that this may only show up in some specific environment. Do you happen to have a dependency on the `dd-trace` package? Or any other particular trace/otel-related dependency?

Both your trace and the other user's traces show the `@opentelemetry/otlp-transformer@0.57.2` package, whereas our SDK is built and tested against v0.46.0 without problem. But `otlp-transformer` [introduced that specific `ctx.traceState?.serializer()` line](https://github.com/open-telemetry/opentelemetry-js/commit/5b070b80a43f8c29ac1ea87f868b5ba01b11b0a3#diff-f43120d2e8669c168489dd2e7b44fb28f5e0316e64c5270418294378bb8ed284R35) in v0.35.1. So I suppose `traceState` would "normally" be undefined unless something else is present that forces those to be generated...

In any case, this is indeed an issue from our side, and  it needs to be fixed. As you correctly figured out, the trace data are sent from the Workflow Worker thread to the main thread, which goes through V8's serialization protocol. Functions and classes do not survive that serialization, and there's really nothing we can do about that. That means we'll probably need to adopt a solution kind of similar to the hack you figured out. Or maybe we can/should just drop the `traceState` entirely, WDYT?

</details>

<details>
<summary><strong>safareli</strong> commented on 2025-07-12 14:13:25.000 UTC</summary>

Instances of TraceState  have .serialize() method which converts it to string. long term solution in workflow land will perform that method call to get serialized string version of trace state. and then `makeWorkflowExporter` will addopt my changes but use `new TraceState(traceStateSerialized)` instead of my hacky way.

</details>

<details>
<summary><strong>JCMais</strong> commented on 2025-07-14 16:03:19.000 UTC</summary>

We are having the same issue after adding trace propagation, all temporal packages are on `1.11.7`, and here are the other related packages:
```
        "dd-trace": "5.22.0",
        "@sentry/node": "9.12.0",
        "@sentry/opentelemetry": "9.12.0",
        "@opentelemetry/api": "1.9.0",
        "@opentelemetry/auto-instrumentations-node": "0.56.0",
        "@opentelemetry/core": "1.30.1",
        "@opentelemetry/exporter-metrics-otlp-grpc": "0.57.2",
        "@opentelemetry/exporter-metrics-otlp-http": "0.57.2",
        "@opentelemetry/exporter-trace-otlp-grpc": "0.57.2",
        "@opentelemetry/exporter-trace-otlp-http": "0.57.2",
        "@opentelemetry/host-metrics": "0.35.5",
        "@opentelemetry/instrumentation": "0.57.2",
        "@opentelemetry/resource-detector-gcp": "0.33.0",
        "@opentelemetry/resources": "1.30.1",
        "@opentelemetry/sdk-metrics": "1.30.1",
        "@opentelemetry/sdk-node": "0.57.2",
        "@opentelemetry/sdk-trace-base": "1.30.1",
        "@opentelemetry/sdk-trace-node": "1.30.1",
        "@opentelemetry/semantic-conventions": "1.30.0",
```

Adding Sentry as related just because the trace propagation is done through Sentry-related headers:

<img width="687" height="197" alt="Image" src="https://github.com/user-attachments/assets/3cbb71ab-d611-4857-b7ba-06190071db0d" />

Stack trace:
```
TypeError: _a.serialize is not a function
at sdkSpanToOtlpSpan (trace/internal.js:14:83)
at trace/internal.js:110:62
at Array.map (<anonymous>)
at spanRecordsToResourceSpans (trace/internal.js:110:42)
at createExportTraceServiceRequest (trace/internal.js:74:24)
at Object.serializeRequest (protobuf/trace.js:27:72)
at OTLPExportDelegate.export (src/otlp-export-delegate.js:44:52)
at OTLPTraceExporter.export (src/OTLPExporterBase.js:29:30)
at Object.fn (lib/worker/index.js:88:32)
at worker/lib/worker.js:899:29
at Array.map (<anonymous>)
at Worker.processSinkCalls (worker/lib/worker.js:897:41)
at Worker.handleActivation (worker/lib/worker.js:778:32)
```

</details>

<details>
<summary><strong>lukeramsden</strong> commented on 2025-10-09 17:23:22.000 UTC</summary>

Seeing this issue too

```
$ npm ls | grep @opentelemetry
├── @opentelemetry/api@1.9.0
├── @opentelemetry/auto-instrumentations-node@0.55.2
├── @opentelemetry/exporter-trace-otlp-proto@0.57.0
├── @opentelemetry/resources@1.30.0
├── @opentelemetry/sdk-node@0.57.0
├── @opentelemetry/sdk-trace-base@1.30.0
├── @opentelemetry/semantic-conventions@1.34.0
$ npm ls | grep @temporalio
├── @temporalio/activity@1.13.0
├── @temporalio/client@1.13.0
├── @temporalio/common@1.13.0
├── @temporalio/interceptors-opentelemetry@1.13.0
├── @temporalio/testing@1.13.0
├── @temporalio/worker@1.13.0
├── @temporalio/workflow@1.13.0
```


```
"TypeError: _a.serialize is not a function\n    at sdkSpanToOtlpSpan (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js:14:83)\n    at /opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js:110:62\n    at Array.map (<anonymous>)\n    at spanRecordsToResourceSpans (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js:110:42)\n    at createExportTraceServiceRequest (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js:74:24)\n    at Object.serializeRequest (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-transformer/build/src/trace/protobuf/trace.js:27:72)\n    at OTLPExportDelegate.export (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-export-delegate.js:44:52)\n    at OTLPTraceExporter.export (/opt/app/lib/node_modules/@opentelemetry/exporter-trace-otlp-proto/node_modules/@opentelemetry/otlp-exporter-base/build/src/OTLPExporterBase.js:29:30)\n    at Object.fn (/opt/app/lib/node_modules/@temporalio/interceptors-opentelemetry/lib/worker/index.js:91:32)\n    at /opt/app/lib/node_modules/@temporalio/worker/lib/worker.js:1035:29"
```

</details>


---

### #1718: [Feature Request] Lazily load webpack

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1718 |
| **State** | OPEN |
| **Author** | arlyon (Alexander Lyon) |
| **Created** | 2025-05-22 01:06:43.000 UTC (7 months ago) |
| **Updated** | 2025-05-30 07:33:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi

I would like to strip webpack from my bundle for container efficiency reasons but can't because webpack is loaded eagerly. By lazily loading `workflow/bundler` in [index](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/worker.ts) and in [worker](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/worker.ts) you can get away with deleting webpack and friends from the bundle (in my case the docker container)

I have achieved it by applying this patch (on the build outputs) but I am sure doing a similar thing would be fairly easy on the typescript side. Note I have just removed the default interceptor warning altogether.

```diff
diff --git a/lib/index.js b/lib/index.js
index ac5a7f9594321f75f52ac0641621d91c02c9ba8c..3aaa482c51d04627d9d7a2b96755f721ec2b5949 100644
--- a/lib/index.js
+++ b/lib/index.js
@@ -52,8 +52,7 @@ Object.defineProperty(exports, "defaultPayloadConverter", { enumerable: true, ge
 Object.defineProperty(exports, "Worker", { enumerable: true, get: function () { return worker_1.Worker; } });
 var replay_1 = require("./replay");
 Object.defineProperty(exports, "ReplayError", { enumerable: true, get: function () { return replay_1.ReplayError; } });
-var bundler_1 = require("./workflow/bundler");
-Object.defineProperty(exports, "bundleWorkflowCode", { enumerable: true, get: function () { return bundler_1.bundleWorkflowCode; } });
+Object.defineProperty(exports, "bundleWorkflowCode", { enumerable: true, get: function () { return require("./workflow/bundler").bundleWorkflowCode; } });
 /* eslint-disable deprecation/deprecation */
 // Anything below this line is deprecated
 var activity_log_interceptor_1 = require("./activity-log-interceptor");
diff --git a/lib/worker.js b/lib/worker.js
index e8cf98a86e9e1045af378319f6242f1ba66a3194..d4fc8999e3ef50d64c3d87338d930f3a0e0c28e8 100644
--- a/lib/worker.js
+++ b/lib/worker.js
@@ -57,7 +57,6 @@ const rxutils_1 = require("./rxutils");
 const utils_1 = require("./utils");
 const worker_options_1 = require("./worker-options");
 const workflow_codec_runner_1 = require("./workflow-codec-runner");
-const bundler_1 = require("./workflow/bundler");
 const reusable_vm_1 = require("./workflow/reusable-vm");
 const threaded_vm_1 = require("./workflow/threaded-vm");
 const vm_1 = require("./workflow/vm");
@@ -317,12 +316,6 @@ class Worker {
                 logger.warn('Ignoring WorkerOptions.bundlerOptions because WorkerOptions.workflowBundle is set');
             }
             const modules = new Set(compiledOptions.interceptors.workflowModules);
-            // Warn if user tries to customize the default set of workflow interceptor modules
-            if (modules &&
-                new Set([...modules, ...bundler_1.defaultWorkflowInterceptorModules]).size !== bundler_1.defaultWorkflowInterceptorModules.length) {
-                logger.warn('Ignoring WorkerOptions.interceptors.workflowModules because WorkerOptions.workflowBundle is set.\n' +
-                    'To use workflow interceptors with a workflowBundle, pass them in the call to bundleWorkflowCode.');
-            }
             if ((0, worker_options_1.isCodeBundleOption)(compiledOptions.workflowBundle)) {
                 return parseWorkflowCode(compiledOptions.workflowBundle.code);
             }
@@ -335,6 +328,7 @@ class Worker {
             }
         }
         else if (compiledOptions.workflowsPath) {
+            const bundler_1 = require("./workflow/bundler");
             const bundler = new bundler_1.WorkflowCodeBundler({
                 logger,
                 workflowsPath: compiledOptions.workflowsPath,

```

#### Comments (4)

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-28 18:28:44.000 UTC</summary>

Yeah, making this dependency optional is definitely in my plans.

The approach you propose is a much lighter alternative to what was discussed in #933. I like it.

I don't think that the modification you did in `index.js` can be done in pure TS (nor would it be compatible with ESM once we get there), as you technically can't `export` a property getter. It would however be possible to export a stub `bundleWorkflowCode` function that internally does a dynamic `import` to the actual `bundleWorkflowCode` implementation, which could then live in a different, _optional_ package.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-28 18:47:36.000 UTC</summary>

Regarding the user land workaround you described, you have not mentioned how you prevent the webpack package from being installed in the `node_modules` directory (or from your generated worker bundle, if applicable), to start with, which is required if your goal is to save disk space.

I'm just curious how you did this. Are you using another bundling tool to bundle your _worker_ code? Or are you doing this by using some form of dependency tree modifiers specific to either NPM/PNPM/Yarn (e.g. `overrides`, `resolutions`, `readPackage`, etc)?

</details>

<details>
<summary><strong>arlyon</strong> commented on 2025-05-29 10:52:49.000 UTC</summary>

Hey!

Yes, the onus is still up to the user to make sure it doesn't get shipped, but this change makes it possible at least even if nodejs lacks the nuance to make it automatic.

We ship docker containers so I went down the rabbit hole to optimise them for size / layers. The basic process is to figure out which are external dependencies (things that cannot be bundled) and copy _only_ those (and their transitive dependencies) from your node modules into the final container. A side effect is that you might end up with the same module in your bundle and in your node_modules since your externals might need it. You could probably get around it but it's not worth my time.

https://gist.github.com/arlyon/c48c39b61c518e03da4e13b3086b37e5

Short explainer:
- use tsup
- force webpack to be an external dependency
- parse the tsup metafile to get the internal / external dependencies
- parse `pnpm list` to traverse dependencies of external dependencies and get the transitive closure (since an external dependency can only look for its dependencies in node_modules, not your bundle)
- filter out packages you know you don't need at runtime
  - I looked at overriding those deps with an empty package in `package.json` but we'd have to apply that only to the builds inside the container (which felt a little black-magic-y) since they are still needed during dev runtime.

I realise this is maybe overkill but you end up with very cacheable layers and very fast / light builds. We currently ship:

- total container size: 335MB
- OS: ~130MB
  - node: 110MB 
- external deps layer: 145MB
  - temporalio: 100MB
  - otel: 27MB
- code layer: 44MB
  - worker bundle: 5MB
  - worker source map: 24MB
  - workflow bundle: 12MB (with sourcemaps embedded)

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2025-05-30 07:33:26.000 UTC</summary>

Nice!

You should be able to strip an extra 60 MB very easily by removing native library files you don't need from the `node_modules/@temporalio/core-bridge/releases` directory. Just keep the one for your target platform.

</details>


---

### #1177: [Feature Request] Forward Core's metrics to TypeScript-land

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1177 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-07-19 19:08:46.000 UTC (2y 5m ago) |
| **Updated** | 2025-02-11 20:41:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | mjameswh |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
Core is adding support for exporting metrics to lang (see [Core PR](https://github.com/temporalio/sdk-core/pull/544)). This will allow various customizations to metrics handling, including:

* Exporting additional/custom metrics;
* Filtering out some metrics (to reduce cost, since commercial metrics collectors generally charge per metric);
* Export to metrics collectors that are not supported by Core itself.

This ticket is tracking effort at adding support in TS SDK for accepting and handling metrics from Core SDK. The scope of this ticket does not extend to the development of a metric exporter for any specific metrics collector.

Also see the corresponding .Net feature request [here](https://github.com/temporalio/sdk-dotnet/issues/126).



#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2023-07-19 19:10:49.000 UTC</summary>

Until this is also in at least one other core language, I would like to see it marked experimental. I have some ideas about how I think we should expose this lang side (i.e. expose both the ability to impl a custom collector _and_ to emit metrics on the existing one as separate unrelated things), so would like to implement it.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-07-20 14:32:03.000 UTC</summary>

> Until this is also in at least one other core language, I would like to see it marked experimental.

Yes, definitely

> I have some ideas about how I think we should expose this lang side (i.e. expose both the ability to impl a custom collector and to emit metrics on the existing one as separate unrelated things), so would like to implement it.

No problem, will wait til you're back, so we can discuss details on this.

</details>

<details>
<summary><strong>antmendoza</strong> commented on 2024-02-23 12:32:38.000 UTC</summary>

@mjameswh will this feature, once implemented, allow adding custom tags to Temporal metrics (like workflow id, activity id...) 

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-03-04 21:26:36.000 UTC</summary>

> will this feature, once implemented, allow adding custom tags to Temporal metrics (like workflow id, activity id...)

Yes, to some extent. It may not be possible to attach metadata to things that happens inside Core itself.

</details>


---

### #564: [Bug] Heartbeat details should be array?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/564 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-03-28 16:30:09.000 UTC (3y 9m ago) |
| **Updated** | 2022-03-29 20:33:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In an Activity, `Context.heartbeat()` takes a single param:

https://typescript.temporal.io/api/classes/activity.Context#heartbeat

which is converted to a single Payload:

![image](https://user-images.githubusercontent.com/251288/160444135-a2d8f519-5632-4145-aa6f-c3d3070f2482.png)

But it looks like it should be an array of Payloads:

![image](https://user-images.githubusercontent.com/251288/160444171-799f67e3-ac9b-4ebe-a749-607470b5d48a.png)

#### Comments (4)

<details>
<summary><strong>bergundy</strong> commented on 2022-03-28 16:52:52.000 UTC</summary>

I think this is the same as in Java / Go:
- https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/io/temporal/activity/ActivityExecutionContext.html
- https://pkg.go.dev/go.temporal.io/sdk@v1.14.0/activity

@cretz I saw that you made this a list in Python, I think that's the only SDK where we do that. Maybe we should stick to single arg.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-03-28 16:56:24.000 UTC</summary>

@bergundy - Go does support varargs for this which is an array. Also, Core explicitly makes `coresdk.ActivityHeartbeat.details` a `repeated`. I think if we do want to limit to just one, we should do it in Core too. But I am not convinced we do want that. Also note how `coresdk.activity_task.Start.heartbeat_details` has multiple as well.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-29 20:33:00.000 UTC</summary>

This is where a spec for our SDKs would shine.
I copied the Java implementation when working on TS and I'm assuming @cretz copied Go which is why we ended up with different APIs.

Reactions: 👍 1

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-29 20:33:40.000 UTC</summary>

I'd be fine with either approach but I prefer consistency across the SDKs.

</details>


---

### #561: [Docs] Versionize documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/561 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-03-25 19:00:52.000 UTC (3y 9m ago) |
| **Updated** | 2022-11-23 22:39:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Relevant both for docs and API reference. And latest version of API ref could be deployed from `release` branch instead of `main` so that it's not ahead of what's published on npm.

![image](https://user-images.githubusercontent.com/251288/160184861-b07a65e7-6147-4142-b201-6dd9f08dd4ce.png)



#### Comments (4)

<details>
<summary><strong>bergundy</strong> commented on 2022-03-25 19:44:53.000 UTC</summary>

Yes please

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-03-28 15:08:37.000 UTC</summary>

Tangentially related (feel free to ignore) - a high-level set of release notes may also be reasonable (I know there's a lower-level `CHANGELOG.md`). Or if we start using GH "releases" instead of just tags, that is a place they could be stored too.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-03-28 16:19:32.000 UTC</summary>

We add high level release notes to `CHANGLOG.md`.
We might want to do GH releases, I know lerna support that.

Reactions: 👍 1

</details>

<details>
<summary><strong>lorensr</strong> commented on 2022-09-07 17:55:51.000 UTC</summary>

Current alternative is to build and view locally:

```
git clone https://github.com/temporalio/sdk-typescript.git
cd sdk-typescript
git checkout v0.16.4
git submodule update --init --recursive
npm ci
npm run build
cd packages/docs
npm start
```

</details>


---

### #472: [Feature Request] eslint plugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/472 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-02-09 16:40:07.000 UTC (3y 10m ago) |
| **Updated** | 2023-02-17 23:06:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Mainly for catching some determinism things at compile time in workflow code, but perhaps there are other things we can do as well.

> [Shawn Wang](https://app.slack.com/team/U01BN84PSAH)  [2 hours ago](https://temporalio.slack.com/archives/C01DKSMU94L/p1644417307277569?thread_ts=1644257836.129169&cid=C01DKSMU94L)
we will probably make an eslint rule eventually but ultimately we are limited by what we can do with static analysis - cant query a module to see if it uses one of the banned Node globals. better to throw a helpful error.

`src/workflows/.eslintrc.json`

```json
{
    "plugins": [
        "@temporalio",   // @temporalio/eslint-plugin
    ],
    "extends": [
        "plugin:@temporalio/recommended"
    ],
}
```

#### Comments (4)

<details>
<summary><strong>Sushisource</strong> commented on 2022-02-09 17:52:36.000 UTC</summary>

Another option is to use https://semgrep.dev/ which would allows us to centralize on one tool for many langauges rather than something specific per language.

That said I can see an argument for avoiding having users install something else. But, if it's automated/reliable then we might go that direction to reduce the maintenance load.

</details>

<details>
<summary><strong>lorensr</strong> commented on 2022-05-23 21:24:24.000 UTC</summary>

Currently we recommend `no-restricted-imports`: https://github.com/temporalio/samples-typescript/blob/b3a106c27086b8db7612016ba681939de221fa3f/hello-world/.eslintrc.js#L41

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2022-08-15 14:39:34.000 UTC</summary>

An eslint plugin could also check for async code inside signal handlers. They are risky.

One thing though... A single project generally contains both workflow code and activity code. A temporal eslint plugin would need some way to determine what is workflow code and what isn't. The example eslint config does it by explicitly naming workflow files, but that strategy might be more difficult to apply to user projects.

</details>

<details>
<summary><strong>tommyk</strong> commented on 2023-02-17 23:06:30.000 UTC</summary>

catching `throw Error('...');` in workflows would be an awesome add as well.  i was about to start writing a custom rule for that and figured i would check the issues if this was created already and found this.   



Reactions: 👍 1

</details>


---

### #1772: extractSourceMap takes a huge amount of RAM on boot

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1772 |
| **State** | OPEN |
| **Author** | NikhilVerma (Nikhil Verma) |
| **Created** | 2025-08-22 17:09:02.000 UTC (4 months ago) |
| **Updated** | 2025-08-25 17:35:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I run a series of workers on my Temporal pod bootup. They sometimes take up over 2GB of RAM simply from parsing the source maps. I've confirmed this using clinic.js.

<img width="1800" height="251" alt="Image" src="https://github.com/user-attachments/assets/66606c1a-5d9e-4c11-bf92-958990222cd7" />

https://github.com/temporalio/sdk-typescript/blob/5473ebd3442d00624fb0ed20fa82f8d5bd78e8fd/packages/worker/src/worker.ts#L1868

I am curious if there is a way to optionally allow turning off source maps? I can do so via the builder

```
	const { code } = await bundleWorkflowCode({
		workflowsPath: worker.workflowsPath,
		// Remove source maps
		webpackConfigHook: config => {
			config.devtool = false;
			return config;
		}
	});
```

But then the extractSourceMap throws, and if I patch it I see further failures down the line in `addWorkflowBundle > SourceMapConsumer`

I managed to patch it (in a dirty way)

```js
    return [code, JSON.stringify({
            version: 3,
            file: '',
            sources: [],
            mappings: '',
    })];
    // throw new Error("Can't extract inlined source map from the provided Workflow Bundle");
```

Which results in significantly lower bootup + IDLE ram usage


## Before
<img width="898" height="229" alt="Image" src="https://github.com/user-attachments/assets/f70c720e-a2fa-4de1-be23-96d17dfca737" />


## After
<img width="905" height="241" alt="Image" src="https://github.com/user-attachments/assets/1ff2a405-5c93-41f9-9e5a-88e90c8b595a" />

#### Comments (3)

<details>
<summary><strong>SamuelMS</strong> commented on 2025-08-23 04:06:34.000 UTC</summary>

Have you considered using `workflowBundle` over `workflowsPath` for production use?  e.g. compile the bundle in CI/CD ahead of time with Temporal's helper, then use that bundle with `workflowBundle: { codePath: '/app/worker/dist/workflows.cjs' }`.

```typescript
import { bundleWorkflowCode } from '@temporalio/worker';
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function bundle() {
  const { code } = await bundleWorkflowCode({
    workflowsPath: path.resolve(__dirname, './src/tasks/workflows.ts'),
  });
  const codePath = path.resolve(__dirname, './dist/workflows.cjs');

  await writeFile(codePath, code);
  console.log(`Bundle written to ${codePath}`);
}

bundle().catch((error) => {
  console.error('Bundle compilation failed:', error);
  process.exit(1);
});
```

Frankly, I'm not sure if this'll help your RAM usage with sourcemaps, but we haven't noticed any spikes in RAM with the above approach (for a fairly massive app, at that).

</details>

<details>
<summary><strong>NikhilVerma</strong> commented on 2025-08-24 01:27:49.000 UTC</summary>

@SamuelMS Actually I've tested this exclusively on the workflow bundle (because the source maps parsing happens on the bundle as well)

https://github.com/temporalio/sdk-typescript/blob/5473ebd3442d00624fb0ed20fa82f8d5bd78e8fd/packages/worker/src/worker.ts#L729C1-L736C8

You would primarily see this issue if you run multiple workers in the same machine, this the default strategy before we can start having worker specific pods. My workaround has been to load workers synchronously with a `global.gc` call in between them, it has kept the memory pressure under 1.8GB for now which works for us for the time being.

</details>

<details>
<summary><strong>SamuelMS</strong> commented on 2025-08-25 17:35:48.000 UTC</summary>

> [@SamuelMS](https://github.com/SamuelMS) Actually I've tested this exclusively on the workflow bundle (because the source maps parsing happens on the bundle as well)
> 
> https://github.com/temporalio/sdk-typescript/blob/5473ebd3442d00624fb0ed20fa82f8d5bd78e8fd/packages/worker/src/worker.ts#L729C1-L736C8
> 
> You would primarily see this issue if you run multiple workers in the same machine, this the default strategy before we can start having worker specific pods. My workaround has been to load workers synchronously with a `global.gc` call in between them, it has kept the memory pressure under 1.8GB for now which works for us for the time being.

We run multiple workers on our nodes, but use PM2 in cluster mode to manage them: https://pm2.keymetrics.io/docs/usage/cluster-mode/

</details>


---

### #1740: [Bug] webpackConfigHook doesn't seem to suppress all webpack output

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1740 |
| **State** | OPEN |
| **Author** | DatGuyJonathan (Jonathan Widjaja) |
| **Created** | 2025-07-10 20:50:40.000 UTC (5 months ago) |
| **Updated** | 2025-07-14 18:26:51.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

I'm trying to minimize logs and show important ones. I'm using `Worker.create` with this `bundlerOptions`:

```
bundlerOptions: {
  webpackConfigHook: (config) => {
    config.stats = "none";
    return config;
  },
},
```

I'm still seeing some webpack output like this:

```
      Workflow modules by path ../../../moose/node_modules/.pnpm/ 287 KiB
      Workflow   modules by path ../../../moose/node_modules/.pnpm/@temporalio+common@1.11.8/node_modules/@tempor...(truncated) 95.3 KiB 23 modules
      Workflow   modules by path ../../../moose/node_modules/.pnpm/@temporalio+workflow@1.11.8/node_modules/@temp...(truncated) 139 KiB
      Workflow     ../../../moose/node_modules/.pnpm/@temporalio+workflow@1.11.8/node_modules/@temp...(truncated) 8.38 KiB [built] [code generated]
      Workflow     ../../../moose/node_modules/.pnpm/@temporalio+workflow@1.11.8/node_modules/@temp...(truncated) 4.09 KiB [built] [code generated]
      Workflow     + 17 modules
      Workflow   ../../../moose/node_modules/.pnpm/long@5.3.2/node_modules/long/umd/index.js 49.8 KiB [built] [code generated]
      Workflow   ../../../moose/node_modules/.pnpm/ms@3.0.0-canary.1/node_modules/ms/...(truncated) 3.41 KiB [built] [code generated]
      Workflow modules by path ../../../moose/packages/ts-moose-lib/dist/scripts/ 8.01 KiB
      Workflow   ../../../moose/packages/ts-moose-lib/dist/scripts/workflow-autogenerated-...(truncated) 458 bytes [built] [code generated]
      Workflow   ../../../moose/packages/ts-moose-lib/dist/scripts/workflow.js 7.56 KiB [built] [code generated]
      Workflow __temporal_custom_payload_converter (ignored) 15 bytes [built] [code generated]
      Workflow __temporal_custom_failure_converter (ignored) 15 bytes [built] [code generated]
      Workflow webpack 5.99.9 compiled successfully in 238 ms
```

I found that commenting out this line from [bundler.ts](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/workflow/bundler.ts#L270C13-L270C69) does the trick:

```
this.logger[hasError ? 'error' : 'info'](webpackOutput);
```

Is there another way, preferably through `bundlerOptions.webpackConfigHook` to not show those webpack logs?


#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2025-07-14 18:26:51.000 UTC</summary>

`Worker.create()` invokes the workflow bundler with its own `Logger`.

You may instead call `bundleWorkflowCode()` directly, which allows passing in a different `Logger`. Prebundling is recommended for production usage.

</details>


---

### #1601: result of env.run is not inferring type, returning `unknown`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1601 |
| **State** | OPEN |
| **Author** | chadxz (Chad McElligott) |
| **Created** | 2025-01-17 00:04:00.000 UTC (11 months ago) |
| **Updated** | 2025-01-25 05:22:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to test my activities using env.run and assert against the result.

### Describe the bug

The return type of env.run is `unknown` when I would expect that it would be inferred from the activity.

### Minimal Reproduction

https://codesandbox.io/p/devbox/l363c8

### Environment/Versions

Macbook M2 Pro Sequoia 15.2
`@temporal/testing` 1.11.6

#### Comments (3)

<details>
<summary><strong>chadxz</strong> commented on 2025-01-17 00:05:25.000 UTC</summary>

I can work around the issue by passing explicit types to env.run, i.e.

```ts
        const result = await env.run<
          [UpdateCustomerRelationshipActivityInput],
          Nullable<UpdateCustomerRelationshipActivityResult>,
          typeof updateCustomerRelationship
        >(updateCustomerRelationship, {
          ...
        });
```

</details>

<details>
<summary><strong>chadxz</strong> commented on 2025-01-17 21:11:15.000 UTC</summary>

@mjameswh here's a possible fix for this issue: https://github.com/chadxz/sdk-typescript/commit/5884ef51392a5482f32f1c29908935cf619cfc7f

Main thing i'm not sure about is whether this would be considered a breaking change or not. I imagine if you were previously explicitly specifying the generic type parameters, a change like this may break you.

With the fix, you can see in the test suite that the return type is improved:

<img width="806" alt="Image" src="https://github.com/user-attachments/assets/864157fd-834f-4f95-bcd2-812b3418da56" />

</details>

<details>
<summary><strong>chadxz</strong> commented on 2025-01-25 05:22:16.000 UTC</summary>

Any thoughts on this? I'm happy to submit a PR, just want to make sure I take an appropriate approach.

</details>


---

### #1489: [Bug] Critical dependency: the request of a dependency is an expression

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1489 |
| **State** | OPEN |
| **Author** | shadiramadan (Shadi Ramadan) |
| **Created** | 2024-08-07 23:43:36.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-13 16:33:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to build / run a Next.js application without any warnings or errors.  I am only using the @temporalio/client to be able to Signal workflows.

### Describe the bug

I have a `server-only` file that imports the client:
```typescript
import { Client, Connection } from "@temporalio/client";
```

The client is used in some server side logic. When running next as a build or in dev mode (and loading a page that references the import).  I get the following error:
```
./node_modules/.pnpm/@temporalio+common@1.10.3/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js
Critical dependency: the request of a dependency is an expression

Import trace for requested module:
./node_modules/.pnpm/@temporalio+common@1.10.3/node_modules/@temporalio/common/lib/internal-non-workflow/data-converter-helpers.js
./node_modules/.pnpm/@temporalio+common@1.10.3/node_modules/@temporalio/common/lib/internal-non-workflow/index.js
./node_modules/.pnpm/@temporalio+client@1.10.3/node_modules/@temporalio/client/lib/async-completion-client.js
./node_modules/.pnpm/@temporalio+client@1.10.3/node_modules/@temporalio/client/lib/index.js
./src/lib/temporal.ts
./src/lib/auth/index.ts
./src/app/[locale]/layout.tsx
```

### Minimal Reproduction

Load the temporal client on the server side.

### Environment/Versions

```
OS: MacOS Sonoma 14.5 (23F79)
Package: "@temporalio/client": "^1.10.3",
Node: v20.16.0
```

### Additional context

My signal workflow logic works fine.  The error also occurs in a linux based docker image.

#### Comments (3)

<details>
<summary><strong>shadiramadan</strong> commented on 2024-08-08 01:57:57.000 UTC</summary>

Possibly related #1292

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-09-10 17:19:19.000 UTC</summary>

> Possibly related 1292

That touches the same part of the code, but the use case is very different.

Implementing #1458 is certainly part of the solution, but I'm afraid that will not be enough to avoid the build error people are seeing when bundling the client.

</details>

<details>
<summary><strong>shadiramadan</strong> commented on 2024-09-13 16:33:27.000 UTC</summary>

@mjameswh Do you know how to work around this error in the temporal client or is it unavoidable at this time?

</details>


---

### #1332: [Feature Request] `TestWorkflowEnvironment` should support non-spawned servers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1332 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-01-05 19:02:48.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-05 19:24:08.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

Right now there's not an easy way to run integration tests against an already-extant server. The tests always spawn one for you. It's nice to be able to use UI, maintain some history of runs, etc, while working through something.

An env var where you specify the addr/port of an already-on server would be great.

#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2024-01-05 19:24:07.000 UTC</summary>

In Python you can start a test env from a client.

We should support instantiation from a `Connection`.
I would rather also have the worker be powered by the same connection to avoid translating between the objects, the pure JS `Connection` class has some options that can't be translated to `NativeConnection`.

</details>


---

### #1309: [Bug] Comment unclear on when activities are cancelled after calling `Worker.shutdown`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1309 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-12-05 22:00:56.000 UTC (2 years ago) |
| **Updated** | 2024-09-27 17:52:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | mjameswh |
| **Milestone** | None |

#### Description

It should mention that the activities are cancelled after `shutdownGraceTime`.

https://github.com/temporalio/sdk-typescript/blob/28d4de33a2697c949b863d1c541063384c4fcc7c/packages/worker/src/worker.ts#L733

#### Comments (3)

<details>
<summary><strong>gaurava05</strong> commented on 2023-12-20 10:07:03.000 UTC</summary>

Can I pick this up? I am new to this repo, let me know where I should start.

</details>

<details>
<summary><strong>lorensr</strong> commented on 2023-12-22 04:31:18.000 UTC</summary>

@gaurav7019 sure, thanks—you can submit a PR that edits the comment linked to above

</details>

<details>
<summary><strong>nikhilbhatia08</strong> commented on 2024-09-20 16:40:07.000 UTC</summary>

@lorensr I would like to submit a PR that edits the comment

</details>


---

### #998: [Feature Request] Add built-in support for context propagators

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/998 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-12-13 00:03:07.000 UTC (3 years ago) |
| **Updated** | 2024-09-27 16:43:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | mjameswh |
| **Milestone** | None |

#### Description

Currently we recommend implementing those with interceptors but seems like there's enough demand for a simpler context propagation specific API (see Java and Go SDKs for reference).

Internally we may choose to implement context propagation with interceptors or expose a context propagation interceptor for users.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2022-12-13 00:25:08.000 UTC</summary>

If this gets implemented before Python or .NET, can we make it experimental until one other SDK gets it? I think it's worth seeing how it could be best done in a modern way in multiple languages.

</details>

<details>
<summary><strong>Prashansa-K</strong> commented on 2023-01-21 17:37:20.000 UTC</summary>

@bergundy @cretz Is there any ETA for this?
I am using interceptors right now. When a request comes to my service (which does a bunch of ops before starting a temporal workflow) that starts a temporal workflow it leads to one trace (trace A) and another trace comes from the entire workflow execution (trace B). How can I connect these two traces?
I tried the context propagation method in this doc but that doesn't work. https://docs.temporal.io/application-development/observability?lang=typescript#tracing
Is there any other way to achieve a complete trace? Is there any working example that can be followed for the same?

When this feature request is done and a context propagator is provided, will it be possible to connect the traces?
I see that the golang SDK already provides this option via [ClientOptions](https://pkg.go.dev/go.temporal.io/sdk/internal#ClientOptions). 

</details>

<details>
<summary><strong>bergundy</strong> commented on 2023-02-16 01:42:00.000 UTC</summary>

I'll prioritize, no ETA at the moment.

</details>


---

### #740: [Feature Request] Add `ChildWorkflowHandle.cancel()`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/740 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-01 22:25:21.000 UTC (3y 6m ago) |
| **Updated** | 2025-10-06 15:12:16.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Currently can only cancel a child by canceling a scope.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Would be convenient to be able to do `childHandle.cancel()`

Current handle API: https://typescript.temporal.io/api/interfaces/workflow.childworkflowhandle/



#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2023-05-02 19:57:55.000 UTC</summary>

Related [Slack](https://temporalio.slack.com/archives/C01DKSMU94L/p1683053747688419) discussion.

Two possible work arounds:
- Use `getExternalWorkflowHandle` to get a regular `WorkflowHandle` on the child workflow. Then use that handle to send the cancel command.
- Start the child in a cancellation scope, then cancel the scope.

</details>


---

### #1864: [Feature Request] Update AI SDK integration to v6

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1864 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-12-22 18:27:09.000 UTC (9 days ago) |
| **Updated** | 2025-12-22 18:27:29.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 🎉 1 |

#### Description

### Is your feature request related to a problem? Please describe.

https://vercel.com/blog/ai-sdk-6

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1859: [Bug] High CPU usage with OTel instrumentation when updating to v1.13.x

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1859 |
| **State** | OPEN |
| **Author** | daniellockyer (Daniel Lockyer) |
| **Created** | 2025-12-08 10:39:51.000 UTC (23 days ago) |
| **Updated** | 2025-12-10 09:38:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Hi! 👋🏻 

We have a project using the Temporal TS SDK, and previously the code was running `v1.11.8` of all Temporal packages. We had OTel instrumentation enabled (and working!) via the `@temporalio/interceptors-opentelemetry` package.

Upon updating from v1.11.8 to v1.13.2, we started to see excessive CPU usage, sometimes up to 100%.

We have a different project that we bumped to v1.13.2 and didn't see excess CPU usage. The only key difference between these projects is that one has OTel enabled, and the other doesn't.

Removing all uses of `@temporalio/interceptors-opentelemetry` resolves the CPU issue, and it's back down to the level we were previously at. This implies to me what it's either a bug in `@temporalio/interceptors-opentelemetry`, or a bug in our implementation/use of it.

I did a CPU profile via node inspector on one of the production instances, and couldn't see anything in the trace. I don't know if this means it's in one of the native dependencies, or V8 contexts or what.

I looked at most commits between the two releases. There are some referencing OTel, but none that I'd expect to bump CPU usage up to 100%. I do not see any Temporal SDK errors in our logs.

Obviously, we'd like to keep instrumentation, so it'd be great to find the cause of this.

### Describe the bug

<img width="1006" height="382" alt="Image" src="https://github.com/user-attachments/assets/cb0650af-88fb-4cff-b55a-eef16553480f" />

We updated the packages on the 26th (the rise) and disabled OTel on the 2nd (the drop).

### Minimal Reproduction

I'm currently unable to find a minimal reproduction, but here is the diff I have that would re-enable OTel instrumentation on our worker, and thus re-introduce the CPU increase. (I've had to trim out our code around it)

```
diff --git a/xxx/index.ts b/xxx/index.ts
index 326f62c921..bdd1a99893 100644
--- a/xxx/index.ts
+++ b/xxx/index.ts
@@ -1,4 +1,9 @@
 import path from 'path';
+import {
+  makeWorkflowExporter,
+  OpenTelemetryActivityInboundInterceptor,
+  OpenTelemetryActivityOutboundInterceptor,
+} from '@temporalio/interceptors-opentelemetry/lib/worker';
 import {
   NativeConnection,
   NativeConnectionOptions,
@@ -12,7 +17,7 @@ import { env } from '@/lib/env';
...
-import { otelSdk } from './lib/instrumentation';
+import { otelSdk, resource, traceExporter } from './lib/instrumentation';
 
 const getConnection = async (): Promise<NativeConnection> => {
   const connectionOptions: NativeConnectionOptions = {
@@ -76,6 +81,9 @@ const getWorker = async (connection: NativeConnection): Promise<Worker> => {
...
+    sinks: {
+      exporter: makeWorkflowExporter(traceExporter, resource),
+    },
   };
   if (env.NODE_ENV !== 'development') {
     options.workflowBundle = {
@@ -93,6 +101,15 @@ const getWorker = async (connection: NativeConnection): Promise<Worker> => {
         return config;
       },
     };
+    options.interceptors = {
+      workflowModules: [require.resolve('./workflows')],
+      activity: [
+        (ctx) => ({
+          inbound: new OpenTelemetryActivityInboundInterceptor(ctx),
+          outbound: new OpenTelemetryActivityOutboundInterceptor(ctx),
+        }),
+      ],
+    };
   }
   return Worker.create(options);
 };
diff --git a/xxx/build-workflow-bundle.ts b/xxx/build-workflow-bundle.ts
index 212e8113b2..2a53bf8c1a 100644
--- a/xxx/build-workflow-bundle.ts
+++ b/xxx/build-workflow-bundle.ts
@@ -6,6 +6,7 @@ import { bundleWorkflowCode } from '@temporalio/worker';
 async function bundle() {
   const { code } = await bundleWorkflowCode({
     workflowsPath: require.resolve('../workflows'),
+    workflowInterceptorModules: [require.resolve('../workflows/flow.ts')],
     webpackConfigHook: (config) => {
       config.resolve = config.resolve || {};
       config.resolve.alias = {

diff --git a/xxx/flow.ts b/xxx/flow.ts
index bb17ceb9db..fd366e2d88 100644
--- a/xxx/flow.ts
+++ b/xxx/flow.ts
@@ -1,4 +1,9 @@
...
+import {
+  OpenTelemetryInboundInterceptor,
+  OpenTelemetryInternalsInterceptor,
+  OpenTelemetryOutboundInterceptor,
+} from '@temporalio/interceptors-opentelemetry/lib/workflow';
 import * as workflow from '@temporalio/workflow';
 
@@ -40,6 +45,12 @@ ...
...
 
+export const interceptors: workflow.WorkflowInterceptorsFactory = () => ({
+  inbound: [new OpenTelemetryInboundInterceptor()],
+  outbound: [new OpenTelemetryOutboundInterceptor()],
+  internals: [new OpenTelemetryInternalsInterceptor()],
+});
+
...
```

### Environment/Versions

- OS and processor: Linux
- Temporal Version: v1.13.2
- We're using the Temporal TS/JS packages for the projects, but also Temporal cloud


#### Comments (2)

<details>
<summary><strong>mnahkies</strong> commented on 2025-12-10 09:16:52.000 UTC</summary>

I submitted a (as yet unreleased) patch in https://github.com/temporalio/sdk-typescript/pull/1834#issuecomment-3595493095 that solved similar problems for us.

We're running with this patch applied to our workloads using SDK `1.13.1` and seeing good results. **However** with the same patch against `1.13.2` we see performance regression, which I'm yet to understand.

</details>

<details>
<summary><strong>mnahkies</strong> commented on 2025-12-10 09:38:08.000 UTC</summary>

Also note: You could try turning off [reusev8context](https://typescript.temporal.io/api/interfaces/worker.CompiledWorkerOptions#reusev8context) - my patch is only needed when this is enabled, as the [alternative VM](https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/workflow/workflow-worker-thread.ts#L33-L48) does not have the same bug.

(though interestingly your previous SDK version already defaulted `reusev8context` to `true`, so unclear to me why you weren't already seeing issues prior to upgrading)

I've opened an issue specifically for issues I'm seeing between `1.13.1` -> `1.13.2` here: https://github.com/temporalio/sdk-typescript/issues/1860

</details>


---

### #1796: [Bug] Changes in type inference of activity return type in SDK 1.12.2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1796 |
| **State** | OPEN |
| **Author** | rd-akind (Richard Danninger) |
| **Created** | 2025-10-08 07:29:37.000 UTC (2 months ago) |
| **Updated** | 2025-10-08 07:29:37.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Call an activity from a workflow, through `proxyActivities`, and use TypeScript's type inference to determine the activity return type.

### Describe the bug

When using TypeScript SDK 1.12.1, calling an activity and storing its return value in a variable always successfully compiles.

In TypeScript SDK 1.12.2 and above, some instances of code that previously successfully compiled, now emits the error:

```
error TS7022: '...' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
```

### Minimal Reproduction

An example repo with nonsensical code but minimal TypeScript configuration can be found here: https://github.com/akindgroup/temporal-repro-1657

One of the circumstances where TypeScript is not able to infer the type correctly when upgrading past TypeScript SDK 1.12.2:

```typescript
// activities.ts
export const sampleActivity = async (input: { pointer: number }) => {
  return { pointer: 7 }
}

// workflow.ts
import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities.js";

const { sampleActivity } = proxyActivities<typeof activities>({})

export const workflow = async () => {
  let pointer: null | number = 0

  do {
    const result = await sampleActivity({ pointer })
    pointer = result.pointer
  } while (pointer !== null)
}
```

This issue might be caused by changes to the typing of the `proxyActivites` function introduced in https://github.com/temporalio/sdk-typescript/pull/1657

```typescript
// Before PR 1657
export type ActivityInterfaceFor<T> = {
  [K in keyof T]: T[K] extends ActivityFunction ? T[K] : typeof NotAnActivityMethod;
};

// After PR 1657
export type ActivityInterfaceFor<T> = {
  [K in keyof T]: T[K] extends ActivityFunction ? ActivityFunctionWithOptions<T[K]> : typeof NotAnActivityMethod;
};
```

### Environment/Versions

- Temporal Version: SDK version 1.12.2+

### Workaround

The simplest workaround is to explicitly type the variable storing the return value, e.g:

```typescript
const result: { pointer: number } = await sampleActivity({ pointer })
```

Another is to rearrange the code, which works well in some cases:

```typescript
let { pointer } = await sampleActivity({ pointer: 0 })

while (pointer !== null) {
  const result = await sampleActivity({ pointer })
  pointer = result.pointer
}
```


---

### #1744: [Bug] NDE replaying nested promises

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1744 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2025-07-15 09:51:57.000 UTC (5 months ago) |
| **Updated** | 2025-07-15 09:52:02.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 ❤️ 2 |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug


The following code throws an NDE during replay 



```


    await Promise.all(
        [1, 3].map(async (offset) => {
            await Promise.all(
                ["a", "b", "c", "d", "e"].map(async (c) => {

                    console.log(`sleepRandomLocal start ${offset} ${c}`);


                    printActivities();
                    //schedule local activity
                    await sleepRandomLocal(1, 100, `${offset} ${c}`);
                    

                    console.log(`sleepRandom start ${offset} ${c}`);
                    printActivities();
                    //schedule activity
                    await sleepRandom(offset * 1000, offset * 1000, `${offset} ${c}`);
                })
            );

            console.log(`greet start ${offset}`);
            printActivities();
            //schedule activity
            await greet(offset.toString());
        })
    );


    printActivities();

    // Throw an error to force replay
    throw new Error("Something went wrong");

```


```
2025-07-15T08:54:54.526968Z  WARN temporal_sdk_core::worker::workflow: Failing workflow task run_id=01980d4b-3cd8-7271-abfb-0c98f28d3e91 failure=Failure { failure: Some(Failure { message: "[TMPRL1100] Nondeterminism error: No command scheduled for event HistoryEvent(id: 38, ActivityTaskScheduled)", source: "", stack_trace: "", encoded_attributes: None, cause: None, failure_info: 
Some(ApplicationFailureInfo(ApplicationFailureInfo { r#type: "", non_retryable: false, details: None, next_retry_delay: None, category: Unspecified })) }), force_cause: NonDeterministicError }

```

I added a log to the interceptor and activities seems to be scheduled in the same order (considering only activity type) 

**Runtime**

`sleepRandomLocal-1 a, sleepRandomLocal-1 b, sleepRandomLocal-1 c, sleepRandomLocal-1 d, sleepRandomLocal-1 e, sleepRandomLocal-3 a, sleepRandomLocal-3 b, sleepRandomLocal-3 c, sleepRandomLocal-3 d, sleepRandomLocal-3 e, sleepRandom-1 c, sleepRandom-1 a, sleepRandom-3 e, sleepRandom-3 d, sleepRandom-1 b, sleepRandom-3 a, sleepRandom-1 e, sleepRandom-3 c, sleepRandom-3 b, sleepRandom-1 d, greet-undefined, greet-undefined`

**Replay**

`sleepRandomLocal-1 a, sleepRandomLocal-1 b, sleepRandomLocal-1 c, sleepRandomLocal-1 d, sleepRandomLocal-1 e, sleepRandomLocal-3 a, sleepRandomLocal-3 b, sleepRandomLocal-3 c, sleepRandomLocal-3 d, sleepRandomLocal-3 e, sleepRandom-1 a, sleepRandom-1 b, sleepRandom-1 c, sleepRandom-1 d, sleepRandom-1 e, sleepRandom-3 a, sleepRandom-3 b, sleepRandom-3 c, sleepRandom-3 d`




### Minimal Reproduction

here is the code shared by the customer to reproduce the issue: 

[Archive.zip](https://github.com/user-attachments/files/21229315/Archive.zip)


### Environment/Versions

version 1.12.1



---

### #1736: [Feature Request] Mask/sanitize client sensitive data references

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1736 |
| **State** | OPEN |
| **Author** | ssukienn (Szymon Sukiennik) |
| **Created** | 2025-07-01 15:11:48.000 UTC (6 months ago) |
| **Updated** | 2025-07-01 15:11:48.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

**Security Risk**: When a `handle` object is accidentally passed to serialization layers (e.g., JSON.stringify, logging frameworks, or HTTP responses), it exposes the internal `client` reference which contains:
- Unmasked API keys
- Authentication credentials
- Other sensitive configuration data

There might be more objects with references to the client or other objects with sensitive fields.

This creates a critical security vulnerability where sensitive information can be leaked through:
- Application logs
- HTTP response bodies
- Error messages
- Debug outputs

While `handle` objects are not intended to be serialized or returned in responses, human errors are inevitable, and this risk could be mitigated at the SDK level.

**Example scenario:**
```javascript
// Accidental exposure risk
app.get('/status', (req, res) => {
 res.json({ 
   workflowStatus: 'running',
   handle: workflowHandle // ops, this could expose API keys if serialized with something like superjson
 });
});
```

### Describe the solution you'd like

1. **Implement custom serialization behavior** for objects containing sensitive data:
  - Override `toJSON()` methods to exclude or mask sensitive fields
  - Add serialization guards that prevent accidental exposure

2. **Redesign the data model** for sensitive information:
  - Consider using structures that prevent the serialization of its content

3. **Handle advanced serialization libraries**:
  - Account for libraries like `superjson` that to some extent bypass standard JS serialization
  - Implement deeper protection mechanisms that work across different serialization methods

### Additional context

**Current behavior problems:**

**Version**: @temporalio/client - 1.11.2




---

### #1733: [Bug] `RetryPolicy.maximumAttempt === 0` throws, while it is documented as a valid value for "unlimited"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1733 |
| **State** | OPEN |
| **Author** | jsamr (Jules Sam. Randolph) |
| **Created** | 2025-06-27 13:26:53.000 UTC (6 months ago) |
| **Updated** | 2025-07-01 11:17:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Setting retry policy to "unlimited". 

### Describe the bug

In a workflow, call `proxyActivities` with the below retry policy object:
```ts
const retryPolicy = {
  maximumAttempts: 0
}
```

### Minimal Reproduction

Not needed. The code below is at odds with the documentation:

https://github.com/temporalio/sdk-typescript/blob/9b3ec220416a80f5ad222c7f27817ee0405f1716/packages/common/src/retry-policy.ts#L53-L63

It throws when `maximumAttempts` is 0.

[The documentation states the following](https://docs.temporal.io/encyclopedia/retry-policies#maximum-attempts):

> Setting the [Maximum Attempts] value to 0 also means unlimited.


### Environment/Versions

Not needed.

### Additional context

The workaround is to set the value to `Number.POSITIVE_INFINITY` or `undefined`. 


#### Comments (2)

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-30 20:56:41.000 UTC</summary>

Thanks for pointing this out. It indeed looks like the code and docs are contradicting each others.

That specific doc is not TS specific, so the error probably resulted from incorrect generalization of doc originally written for another SDK. I'll have to double-check what we do in other SDKs, and from there, we'll decide internally if we should either align all SDKs on the docs, or to fix the docs.

In any case, I'd strongly recommend using `undefined` or `Number.POSITIVE_INFINITY`. Both better express the meaning of "no limit to the number of attempts" than giving a special meaning to the value `0`.

</details>

<details>
<summary><strong>jsamr</strong> commented on 2025-07-01 11:17:02.000 UTC</summary>

> In any case, I'd strongly recommend using `undefined` or `Number.POSITIVE_INFINITY`. Both better express the meaning of "no limit to the number of attempts" than giving a special meaning to the value `0`.

I totally agree! We have an internal temporal SDK wrapper where we use the `"unlimited"` string literal to mean unlimited. But we need to map these wrapper types to vanilla temporal types at some point, and since we needed JSON-serializable values, we opted for `0` in this case. Replaced with `undefined` and it works fine! 


</details>


---

### #1700: [Feature Request] executeChild to use passed headers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1700 |
| **State** | OPEN |
| **Author** | notusertelken (Manuel H.) |
| **Created** | 2025-04-30 02:47:40.000 UTC (8 months ago) |
| **Updated** | 2025-04-30 02:47:40.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.
we use headers to propagate context to workflows and activities using interceptors. We start some workflows via code client and others via other workflows using executeChild. For the latter, we cant pass headers as 
https://github.com/temporalio/sdk-typescript/blob/main/packages/workflow/src/workflow.ts#L844 just sets them to `{}`. We need to pass headers in order for our workflow started workflows to also have the same context as our code client started workflows.

### Describe the solution you'd like
executeChild to take headers in the `opts` argument
https://github.com/temporalio/sdk-typescript/blob/main/packages/workflow/src/workflow.ts#L844

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1675: [Feature Request] support AggregateError

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1675 |
| **State** | OPEN |
| **Author** | safareli (Irakli Safareli) |
| **Created** | 2025-04-10 18:10:34.000 UTC (8 months ago) |
| **Updated** | 2025-04-10 18:10:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

In node.js as well as in web browsers one can declare errors like:

```js
new AggregateError(
  [
    new Error("test error 1"),
    new Error("test error 2", { cause: new Error("test error 3") }),
    new Error("test error 4"),
  ],
  "test error"
);
```

this is what that error looks like if you console.log it in node

```js
Welcome to Node.js v20.11.1.
Type ".help" for more information.
> console.log(new AggregateError([ new Error("test error 1"), new Error("test error 2", { cause: new Error("test error 3") }), new Error("test error 4") ], "test error"))
AggregateError: test error
    at REPL1:1:5
    at ContextifyScript.runInThisContext (node:vm:121:12)
    at REPLServer.defaultEval (node:repl:599:22)
    at bound (node:domain:432:15)
    at REPLServer.runBound [as eval] (node:domain:443:12)
    at REPLServer.onLine (node:repl:929:10)
    at REPLServer.emit (node:events:530:35)
    at REPLServer.emit (node:domain:488:12)
    at [_onLine] [as _onLine] (node:internal/readline/interface:416:12)
    at [_line] [as _line] (node:internal/readline/interface:887:18) {
  [errors]: [
    Error: test error 1
        at REPL1:1:31
        at ContextifyScript.runInThisContext (node:vm:121:12)
        at REPLServer.defaultEval (node:repl:599:22)
        at bound (node:domain:432:15)
        at REPLServer.runBound [as eval] (node:domain:443:12)
        at REPLServer.onLine (node:repl:929:10)
        at REPLServer.emit (node:events:530:35)
        at REPLServer.emit (node:domain:488:12)
        at [_onLine] [as _onLine] (node:internal/readline/interface:416:12)
        at [_line] [as _line] (node:internal/readline/interface:887:18),
    Error: test error 2
        at REPL1:1:61
        at ContextifyScript.runInThisContext (node:vm:121:12)
        ... 7 lines matching cause stack trace ...
        at [_line] [as _line] (node:internal/readline/interface:887:18) {
      [cause]: Error: test error 3
          at REPL1:1:96
          at ContextifyScript.runInThisContext (node:vm:121:12)
          at REPLServer.defaultEval (node:repl:599:22)
          at bound (node:domain:432:15)
          at REPLServer.runBound [as eval] (node:domain:443:12)
          at REPLServer.onLine (node:repl:929:10)
          at REPLServer.emit (node:events:530:35)
          at REPLServer.emit (node:domain:488:12)
          at [_onLine] [as _onLine] (node:internal/readline/interface:416:12)
          at [_line] [as _line] (node:internal/readline/interface:887:18)
    },
    Error: test error 4
        at REPL1:1:129
        at ContextifyScript.runInThisContext (node:vm:121:12)
        at REPLServer.defaultEval (node:repl:599:22)
        at bound (node:domain:432:15)
        at REPLServer.runBound [as eval] (node:domain:443:12)
        at REPLServer.onLine (node:repl:929:10)
        at REPLServer.emit (node:events:530:35)
        at REPLServer.emit (node:domain:488:12)
        at [_onLine] [as _onLine] (node:internal/readline/interface:416:12)
        at [_line] [as _line] (node:internal/readline/interface:887:18)
  ]
}
```


### Describe the solution you'd like

Would be amazing if temporal extracted and stored child errors of the AggregateError, right now it supports only single child in cause.

or at least include stack traces of children in the stack trace of the top error using something like `require("util").inspect(exception, { showHidden: false, depth: null, colors: false })` (note the stack tracing fixing function that cuts off internal calls from trace should be adopted to not cut things off in this format)



---

### #1594: [Bug] First schedule action started using triggerImmediately flag does not honor the schedule's overlap policy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1594 |
| **State** | OPEN |
| **Author** | jhecking (Jan Hecking) |
| **Created** | 2025-01-08 03:19:11.000 UTC (11 months ago) |
| **Updated** | 2025-01-08 03:38:46.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

I'm creating a new schedule and I want to trigger it immediately. I don't want any overlapping schedule runs.

### Describe the bug

I'm creating a new schedule using a combination of `ScheduleOverlapPolicy.BUFFER_ONE` and `triggerImmediately: true`, i.e.

```typescript
export async function schedulePeriodicWorkflowExecution(
  action: ScheduleOptionsStartWorkflowAction<Workflow>,
  scheduleId: string,
  cronExpression: string,
) {
  const client = await getScheduleClient()
  const spec = { cronExpressions: [cronExpression] }
  return client.create({
    action,
    spec,
    scheduleId,
    policies: {
      overlap: ScheduleOverlapPolicy.BUFFER_ONE,
    },
    state: {
      triggerImmediately: true,
    },
  })
}
```

If the initial schedule run, started via `triggerImmediately: true` takes long enough that the next run gets triggered as per the provided cron schedule, that second schedule run does not get buffered but gets executed immediately.

I believe this is because the initial schedule run always gets executed with a default "AllowAll" overlap policy: https://github.com/temporalio/sdk-typescript/blob/4cf092d6e503603bc559d67c7ec8b3c0235a8cff/packages/client/src/schedule-client.ts#L246-L249

A possible work-around is to create the schedule and then immediately trigger it ourselves using the correct overlap policy, i.e.

```typescript
export async function schedulePeriodicWorkflowExecution(
  action: ScheduleOptionsStartWorkflowAction<Workflow>,
  scheduleId: string,
  cronExpression: string,
) {
  const client = await getScheduleClient()
  const spec = { cronExpressions: [cronExpression] }
  const handle = client.create({
    action,
    spec,
    scheduleId,
    policies: {
      overlap: ScheduleOverlapPolicy.BUFFER_ONE,
    },
  })
  await handle.trigger(ScheduleOverlapPolicy.BUFFER_ONE)
  return handle
}
```

But I think `triggerImmediately: true` should honor the schedule's overlap policy instead of defaulting to the "AllowAll" policy.

### Minimal Reproduction

https://github.com/jhecking/samples-typescript/tree/schedules-trigger-immediately-overlapping/schedules-trigger-immediately-overlapping

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Temporal Version: 1.11.2

### Additional context

n/a


---

### #1580: [Bug] Workflows getting stuck after cancellation (spurious WorkflowTaskFailed errors)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1580 |
| **State** | OPEN |
| **Author** | tetrakatech (Karla) |
| **Created** | 2024-12-04 04:58:26.000 UTC (1 years ago) |
| **Updated** | 2025-08-20 15:44:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

We have workflows that are routinely cancelled by other (orchestrator) workflows. Usually this works perfectly, and allows our system to implement preemption in line with our business requirements.

Sporadically - a few times a day, out of at least thousands of workflows - the child workflow is failing to cancel correctly, and is instead stalling in a running state, leading to ~infinite retries and blocking of the orchestrator workflow.

### Describe the bug

Typically, when cancellation occurs we see a WorkflowTaskCompleted event in the Temporal UI, followed by a WorkflowExecutionCanceledEvent.

![image](https://github.com/user-attachments/assets/ae57764d-496a-46f9-a39f-6a9cc0e0fe6f)

In the buggy cases, we instead see two instances of WorkflowTaskFailed, with the call stack being a `CancelledFailure` inside the Temporal SDK, and the workflow left stuck in a Running state:
<img width="1697" alt="image" src="https://github.com/user-attachments/assets/71ed68b6-5dc3-4438-bd33-5fe25f3ecbcd">

Logs for a buggy case run ID:

```
2024-11-28 00:54:22.293 Workflow started
2024-11-28 00:54:22.351 Activity started
2024-11-28 00:54:23.030 Activity completed
2024-11-28 00:54:23.700 Workflow completed as cancelled
2024-11-28 00:54:23.700 Failing workflow task
2024-11-28 00:54:24.105 Workflow completed as cancelled
2024-11-28 00:54:24.108 Failing workflow task
2024-11-28 00:54:24.193 {"component":"matching-engine", "error":"Workflow task not found.", "level":"info", "logging-call-at":"matching_engine.go:613", "msg":"Workflow task not found", "queue-task-id":-137, "queue-task-visibility-timestamp":"2024-11-27T13:54:24.180Z", "ts":"2024-11-27T13:54:24.193Z", "wf-history-event-id":16, "wf-id":"9ee39789-3ca2-4fc3-af5c-8bd24a7bbe28-1-378bf7e7-bc20-4b26-b459-c9e7633aa5c6", "wf-namespace-id":"5e9a725c-d677-4281-8b07-9cd4097060bd", "wf-run-id":"dd593d4f-3f24-4177-b376-ba022ebb5d10", "wf-task-queue-name":"chatExecutor"}
2024-11-28 00:54:24.290999889 Workflow completed as cancelled
2024-11-28 00:54:34.270999908 Workflow completed as cancelled
2024-11-28 00:54:44.298000097 Workflow completed as cancelled
2024-11-28 00:54:59.002000093 Workflow completed as cancelled
2024-11-28 00:55:18.104000091 Workflow completed as cancelled
2024-11-28 00:55:46.848999977 Workflow completed as cancelled
2024-11-28 00:56:30.530999898 Workflow completed as cancelled
2024-11-28 00:57:55.980000019 Workflow completed as cancelled
2024-11-28 01:00:26.433630347 {"address":"10.20.12.44:7234", "attempt":10, "level":"warn", "logging-call-at":"workflow_task_state_machine.go:1061", "msg":"Critical attempts processing workflow task", "service":"history", "shard-id":130, "ts":"2024-11-27T14:00:26.433Z", "wf-id":"9ee39789-3ca2-4fc3-af5c-8bd24a7bbe28-1-378bf7e7-bc20-4b26-b459-c9e7633aa5c6", "wf-namespace":"default", "wf-run-id":"dd593d4f-3f24-4177-b376-ba022ebb5d10"}
2024-11-28 01:00:26.480000019 Workflow completed as cancelled
2024-11-28 01:05:07.210610845 {"address":"10.20.12.44:7234", "attempt":11, "level":"warn", "logging-call-at":"workflow_task_state_machine.go:1061", "msg":"Critical attempts processing workflow task", "service":"history", "shard-id":130, "ts":"2024-11-27T14:05:07.209Z", "wf-id":"9ee39789-3ca2-4fc3-af5c-8bd24a7bbe28-1-378bf7e7-bc20-4b26-b459-c9e7633aa5c6", "wf-namespace":"default", "wf-run-id":"dd593d4f-3f24-4177-b376-ba022ebb5d10"}
```

and then progressively more retries that are backed off.

### Minimal Reproduction

I've attached a (redacted) copy of the JSON events for one of the buggy cases. I'm hoping this is sufficient to repro, since the issue repeats on workflow re-attempts, and the example history is quite short (< 20 events).
[dd593d4f-3f24-4177-b376-ba022ebb5d10_events.json](https://github.com/user-attachments/files/18001967/dd593d4f-3f24-4177-b376-ba022ebb5d10_events.json)

The workflow implementation to hit this case is trivially simple:

```typescript
const { handleCustomerMessage } =
  proxyActivities<IHandleCustomerMessageActivity>({
  startToCloseTimeout: '1 minute',
  retry: {
    maximumAttempts: 3,
  },
  cancellationType: ActivityCancellationType.TRY_CANCEL,
})

export async function processChatTicket({
  data,
}: {
  data: ProcessTicketInput
}): Promise<ProcessTicketOutput> {
  try {
    const temporalWorkflowId = workflowInfo().workflowId

    const handleCustomerMessageOutput = await handleCustomerMessage({
      temporalWorkflowId,
      data,
    })

    // More logic below...
   } catch (error) {
    // If the error is just a cancellation, or a termination, just re-throw
    // immediately. The former is expected (e.g. a parent will cancel this
    // workflow if a new message is received; the latter is triggered manually
    // in the UI by a human in very limited circumstances)
    if (isCancellation(error) || error instanceof TerminatedFailure) {
      throw error
    }

    // Otherwise, kick off a "cleanup" workflow
    await startChild(cleanup, {
      // Other arguments
      parentClosePolicy: ParentClosePolicy.PARENT_CLOSE_POLICY_ABANDON,
    })

    throw error
  }
}
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Kubernetes running `node:lts-bookworm-slim` (workers)
- Temporal Version: Kubernetes running `temporalio/server:1.24.1` (server), Typescript SDK `1.11.3` (workers)
- Are you using Docker or Kubernetes or building Temporal from source? Kubernetes

### Additional context

Based on the log lines, it looks to me like something is getting confused between the Typescript and Core SDKs as to whether the cancellation error thrown represents a WorkflowTask failure or not.

Notably, the logs around the task cancellation in Typescript are run in both buggy/working cases: https://github.com/temporalio/sdk-typescript/blob/be37851670c5c43ae4dc2ea1929797fbbcbffc26/packages/workflow/src/logs.ts#L99

But the log around the workflow task failing is over here, https://github.com/temporalio/sdk-core/blob/4a2368d19f57e971ca9b2465f1dbeede7a861c34/core/src/worker/workflow/mod.rs#L423, and is only called in the buggy case.

With my limited knowledge of how this code works, is it possible that `this.cancelled` (https://github.com/temporalio/sdk-typescript/blob/main/packages/workflow/src/internals.ts#L945) isn't being set correctly in all cases, especially when an Activity runs and successfully completes in parallel with a ActivityTaskCancelRequested event being generated? If that were the case, the Typescript SDK would I think indicate a workflow failure on cancellation, rather than cancelling cleanly, but would still emit the logs we're seeing.

Happy to provide any other details if they'd be useful :)


#### Comments (2)

<details>
<summary><strong>tetrakatech</strong> commented on 2025-01-09 03:31:01.000 UTC</summary>

@mjameswh any chance you've had a chance to look at this? (tagging because you're the person who's been looking at other bugs filed around the same time)

I'm fine to be told that we need to work harder to get a repro case, but if you could validate whether the last event in [the attached JSON history file](https://github.com/user-attachments/files/18001967/dd593d4f-3f24-4177-b376-ba022ebb5d10_events.json) looks valid, that would be super helpful for me to at least know where to focus my efforts.

Is it correct that throwing a `CancelledFailure` error should lead to an event type of `EVENT_TYPE_WORKFLOW_TASK_FAILED`, rather than a pair of `EVENT_TYPE_WORKFLOW_TASK_COMPLETED` and `EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED` events?

</details>

<details>
<summary><strong>bkanzariya-abstract</strong> commented on 2025-08-20 15:44:57.000 UTC</summary>

@tetrakatech Did you get any solution/workaround to this? we kind of having bit similar warn logs `Critical attempts processing workflow task`

</details>


---

### #1578: [Bug] Worker fails to start if Node option --abort-on-uncaught-exception is set

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1578 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-12-02 19:19:16.000 UTC (1 years ago) |
| **Updated** | 2024-12-02 19:19:16.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

Starting a Worker with Node option `--abort-on-uncaught-exception` results in the following error message:

```
Uncaught TypeError: Cannot read properties of undefined (reading './node_modules/@temporalio/workflow/lib/worker-interface.js')

FROM
__webpack_require__ (/srv/workflows.js:7523:55)
/srv/workflows.js:7591:13
/srv/workflows.js:7607:3
/srv/workflows.js:7610:12
Script.runInContext (node:vm:149:12)
parseWorkflowCode (/srv/node_modules/@temporalio/worker/lib/worker.js:1335:16)
Worker.getOrCreateBundle (/srv/node_modules/@temporalio/worker/lib/worker.js:331:24)
async Worker.create (/srv/node_modules/@temporalio/worker/lib/worker.js:139:24)
```


### How to reproduce

Start the Hello World sample's Worker with:

```
NODE_OPTIONS=--abort-on-uncaught-exception npm run start
```

### Details

The stack trace points out to the following code locations:

- https://github.com/mjameswh/sdk-typescript/blob/4dcc82aa48fc285119978bd2a93acc3a0e9fd231/packages/worker/src/worker.ts#L1791-L1798

- https://github.com/mjameswh/sdk-typescript/blob/4dcc82aa48fc285119978bd2a93acc3a0e9fd231/packages/worker/src/workflow/bundler.ts#L117

That is, while preloading the bundle code for the benefit of debuggers, the execution context isn't configured properly, so that `globalThis.__webpack_module_cache__` is undefined. That causes a type error while running the bundled code, which should presumably get caught by the try-catch block in worker.ts. However, the `abort-on-uncaught-exception` operates at V8's level (rather than Node's event loop level) and V8's is not aware of the cross-execution-context call involved by `script.runInContext()`, so it can't figure out that the error happening in the child context will get properly handled by the parent context, resulting in aborting execution.

Some quick fixes are possible, e.g. adding a `?? {}` suffix to the problematic line in bundler, but I'm afraid the problem may reappear at a later time as other global variables get added; we should therefore consider moving the preload to the VM.

More over, this preload somewhat expensive and only pertinent if there's an attached inspector, which is rarely the case. We should therefore make it conditional to the presence of a debugger.



---

### #1537: [Bug] Workflow lifecycle logging is misleading

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1537 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-09-27 15:43:58.000 UTC (1y 3m ago) |
| **Updated** | 2024-11-06 00:32:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug, visibility |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe what you are trying to do

(From a user) We are trying to get good logs to do alerts on following usecases:
- When a workflow task fails for more than 3 times (possibly becasue of implementation issue)
- Workflow fails (because of ApplicationFailure or ActivityFailure etc)

### Describe the bug

- On Workflow Task failure, the lifecycle logger prints out a message indicating that `Workflow failed`; that's exactly the same error message as on actual `Workflow Failure`, making it impossible to differentiate these cases.

- Similarly, one may see `Workflow started` printed multiple time for a same Workflow Execution, i.e. every single time that the a Worker needs to rebuild (aka “replay”) the runtime state of that Workflow Execution from the very beginning.

### Additional context

- The thing is that this lifecycle handler is logging things from the perspective of "the Cached Workflow Instance” (i.e. the specific instance of that workflow execution in the cache of that specific Workflow Worker), rather than from the perspective of the actual Workflow Execution’s lifecycle.

- We need to think of a more precise way of formulating those messages. For various reasons, no mention of “Workflow” or “Workflow Task” (starting, failing, completing…) would be 100% reliable at that precise place. For example, Workflow code may attempt to “Complete Workflow”, but the completion command times out or get rejected by the server because of new incoming events, and so what appears to be “Workflow completed” actually ends up being a Workflow Task Failure or Timeout.

- Community Slack conversation: https://temporalio.slack.com/archives/C01DKSMU94L/p1727436127246899

#### Comments (2)

<details>
<summary><strong>ilijaNL</strong> commented on 2024-10-03 04:20:21.000 UTC</summary>

Since temporal sdk has metric counters, why wouldnt it be possible to do logging in the same place when the counter increases?

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-11-06 00:32:02.000 UTC</summary>

> Since temporal sdk has metric counters, why wouldnt it be possible to do logging in the same place when the counter increases?

It's unfortunately not that simple. Metrics bookkeeping is handled by Core SDK, whereas logging is handled on the TypeScript side.

</details>


---

### #1389: [Bug] Inconsistent Type Definition of Workflow Arguments

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1389 |
| **State** | OPEN |
| **Author** | hiramhuang (Hiram) |
| **Created** | 2024-04-08 08:15:00.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-11 06:29:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm working on creating a reusable generic type that extends from the `Workflow` type.

### Describe the bug

The type definition of arguments on the `Workflow` type is inconsistent with the condition expression on `WithWorkflowArgs` type.
This inconsistency could become problematic when attempting to create a generic type that extends the `Workflow` type.

- [Workflow](https://github.com/temporalio/sdk-typescript/blob/c92a2a13072a48f3d6820ea2bc30cfcd42af6254/packages/common/src/interfaces.ts#L25)
- [WithWorkflowArgs](https://github.com/temporalio/sdk-typescript/blob/c92a2a13072a48f3d6820ea2bc30cfcd42af6254/packages/common/src/workflow-options.ts#L94)

### Minimal Reproduction

Not applicable.

### Environment/Versions

Not applicable.

### Additional context

Not applicable.


#### Comments (2)

<details>
<summary><strong>mjameswh</strong> commented on 2024-04-10 19:24:24.000 UTC</summary>

Can you please clarify in which case this is posing problems?

</details>

<details>
<summary><strong>hiramhuang</strong> commented on 2024-04-11 06:29:21.000 UTC</summary>

> Can you please clarify in which case this is posing problems?

Due to `any[]` ([on `Workflow` type](https://github.com/temporalio/sdk-typescript/blob/c92a2a13072a48f3d6820ea2bc30cfcd42af6254/packages/common/src/interfaces.ts#L25)) not being equal to `[any, ...any[]]` ([on `WithWorkflowArgs` type](https://github.com/temporalio/sdk-typescript/blob/c92a2a13072a48f3d6820ea2bc30cfcd42af6254/packages/common/src/workflow-options.ts#L94)), the following example function will not pass type checking. This is because it cannot satisfy `WorkflowStartOptions<WT>` when arguments are passed from `Parameters<WT>`:

```typescript
const getWorkflowStartOptions = <WT extends Workflow>(...args: Parameters<WT>) => ({
  ...defaultOptions,
  ...args,
} satisfies WorkflowStartOptions<WT>)
```

It will work if we don't extend from the `Workflow` type. Instead, we define a version of `Workflow` type that is compatible with `WithWorkflowArgs` type:

```typescript
const getWorkflowStartOptions = <WT extends (...args: [any, ...any[]]) => Promise<any>>(...args: Parameters<WT>) => ({
  ...defaultOptions,
  ...args,
} satisfies WorkflowStartOptions<WT>)
```

</details>


---

### #1375: [Feature Request] Queueing a workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1375 |
| **State** | OPEN |
| **Author** | baileywickham (Bailey Wickham) |
| **Created** | 2024-03-15 21:49:32.000 UTC (1y 9m ago) |
| **Updated** | 2024-09-18 21:30:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

A pain point we have in using Temporal is in queuing workflows. We would like the ability to queue/buffer a workflow directly from that workflow, similar to the `executeChild` functionality, and without creating a schedule . Currently we are using schedules for this behavior. The schedules do not trigger independently, they are only used with the `BUFFER_ONE` schedule overlap policy. This has three main disadvantages: the first is we need to generate schedules for workflows which don't really need a schedule, they only need the buffering functionality, the second is we need to create a new client inside each workflow when we queueing the next schedule. Third, you can't pass arguments to the schedule, so you can't have a workflow like `RefetchUser(userId)`.

### Describe the solution you'd like

1. The ability to queue a workflow after the completion of a currently running workflow, similar to the `BUFFER_ONE` schedule overlap policy.
2. The ability to do this from inside a workflow without creating a client, similar to `executeChild`. It would also be nice to be able to interact with the schedules directly from a workflow without creating a client.

### Additional context

Let me know if this is something Temporal would consider implementing and if there is anything I can do to help. 



#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2024-03-18 17:15:44.000 UTC</summary>

You could use this pattern to use the workflow itself as a buffer:

```ts
// Make sure Request is serializable to JSON (ie. no function, no promises, etc)
type Request = { ... }

// Entity workflow pattern with serialization of request
// (ie. only one request is processed at a time)
export async function myWorkflow(requests: Request[] = []): Promise<void> {
  setHandler(mySignal, (input: Request) => {
    requests.push(input);
    // Don't await here. Otherwise, the Workflow may complete before the promise completes.
  });

  while (!workflowInfo().continueAsNewSuggested) {
		const timeSinceStart = Date.now() - workflowInfo().runStartTime.getTime();
    const shouldProcessMore = await condition(() => requests.length > 0, ms('24h') - timeSinceStart);
    if (!shouldProcessMore) return;

    const request = requests.shift();

    // Process request as appropriate
    await handleSingleRequest(request);
  }

  // Huge histories are bad for performance, so we switch to a new workflow execution whenever
  // history grows over 2000 events. When that happens, we forward any outstanding requests to the
  // next execution.
  await continueAsNew(requests);
}

function handleSingleRequest(request: Request): Promise<void> {
  // It's ok to await here
}
```

You would then `signalWithStart` the workflow to add an item to its queue.

</details>

<details>
<summary><strong>baileywickham</strong> commented on 2024-05-02 22:43:51.000 UTC</summary>

Thanks for the quick response. This removes the need to create a dedicated schedule and allows us to trigger the next request without an additional client. It does add a fair amount of boilerplate to each of our buffered workflows though, native support would still be ideal. Feel free to close this issue if native support isn't going to be implemented. 

Thanks again for the response. 

</details>


---

### #1144: [Feature Request] Add support for capturing Workflow test coverage data using Jest

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1144 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-06-22 16:55:49.000 UTC (2y 6m ago) |
| **Updated** | 2025-05-08 13:53:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Description
At present, we provide the `@temporalio/nyc-test-coverage` package, which add interceptor that make it possible to capture workflow test coverage data while using mocha or ava. It however doesn't support tests run using Jest.

We need to provide instructions and tooling for capturing Workflow test coverage data while using Jest.

### Additional context
It is common for testing frameworks to perform some transformations of source code. For example, the test framework may allow working directly with TypeScript files, because these files get transpiled at load time to pure JavaScript. Similarly, nyc/istanbul transform source code at load time to add instrumentation instructions that register which lines and code blocks have been executed.

While these transformations are happening, each transformer produces a source map; these source maps are essential to map runtime code locations back to their original source code locations (eg. when printing out a stack trace), and the other way around (eg. when setting up a breakpoint from a code editor). istanbul/nyc rely on these source maps while instrumenting source code to determine where execution counters need to be inserted.

When running Workflow tests, both the Test engine when the Workflow bundler need to transform source code. If the transformation pipeline used by these two differ (eg. if the test engine load TS files using `ts-node` while the bundler load TS files using SWC), then files that are loaded in both contexts will produce different runtime code, which will result in different code map, and therefore, instanbul will add instrumentation counters in different locations (eg. a same source function processed by `ts-node` may need 10 execution counters, while the same function procesed by `swc` may need only 7 counters; or line numbers may not match, because `ts-node` injected some glue/polyfill code at the begining of the output JS file, while `swc` didn't).

nyc expects that all coverage data mapping back to a same source file will have the same structure (ie. same functions, same execution counters, same line numbers, etc). It doesn't know how to combine coverage data for a same source file, but using different capture data structures. nyc therefore fails (either throwing errors at runtime or by producing invalid reports, depending on various conditions) when a single source file gets loaded from both the test execution context and the Workflow execution context, unless both engines use the very source code transformation pipeline.

Our `nyc-test-coverage` module try to detect the presence of some specific code transformers and adjust the bundler's transformation pipeline to match that of the test engine accordingly. However, Jest heavily hooks into Node's internals, making it very difficult to detect these code transformers at runtime; more over, Jest itself sometime add source code transformers, which can't be injected into our webpack-based Workflow bundler. A different approach therefore need to be designed to correctly support the capture of test coverage data in Workflow context.



#### Comments (2)

<details>
<summary><strong>mjameswh</strong> commented on 2023-06-22 18:23:44.000 UTC</summary>

Here are some things that one may try to make this work on their side. They have worked for some people, and yet, not for others, so your millage may vary.

- Run Jest on your JS files rather than TS files (ie. run tsc yourself prior to running Jest and don’t use ts-jest or similar).
- If you need to apply other transformations to the code (ie. to collect coverage data), use a CLI command to transform the code before starting tests; don’t let either Jest nor the Workflow Bundler do these transform for you.
- Make sure that your workflows.js and other Workflow files don’t get imported from your test.js file. Using import type is correct if you are running Jest on your JS files, as suggested previously; otherwise, specify workflow types and signals as string rather than passing in the function to executeWorkflow and others.
- If you don’t succeed by transforming Jest’s transformation pipeline, you may try customizing the Workflow bundler’s Webpack configuration so that it matches the transformation pipeline of Jest. [See](https://github.com/temporalio/sdk-typescript/blob/main/packages/nyc-test-coverage/src/index.ts#L150) for example how we add support for ts-node in nyc-test-coverage.

</details>

<details>
<summary><strong>mrsimonemms</strong> commented on 2025-05-08 13:52:59.000 UTC</summary>

Adding to the weight of evidence to this, @NavaraKoen has created https://github.com/NavaraKoen/temporal-jest-coverage-example to demonstrate the difference between Jest and Mocha coverage. This could act as a proof of concept to ensure that Jest is equal to Mocha when done.

Reactions: 🚀 1

</details>


---

### #1113: [Feature Request] Create a `npx @temporalio/doctor` command

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1113 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-05-02 19:27:43.000 UTC (2y 8m ago) |
| **Updated** | 2025-02-07 03:49:31.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Problem Description
Users regularly face issues that are due to configuration issues in their project structures, such as:

* Version mismatches on `@temporalio/*` packages
* Unexpected hoisting of `@temporalio/*` packages
* Use of deprecated `@temporalio/*` packages
* Using a version of the TS SDK that is known to have some noteworthy bugs

Due to a certain number of factors, diagnostic of these errors sometime turns out to be non-trivial.

### Proposed solution
We could develop a `@temporalio/doctor` CLI program, meant to be executed using `npx` or similar, that provides various commands to diagnose and fix some common configuration issues in Temporal TS SDK-based projects.

Concretely, this program would be able to scan all package.json/lock files/node_modules directories for the above issues (and possibly more). This program would also make it easy to update/set version number on all `@temporalio/*` dependencies in the project.




---

### #1112: [Bug] Workflow Bundler does not deny usage of the `process` global variable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1112 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-05-01 17:16:56.000 UTC (2y 8m ago) |
| **Updated** | 2025-02-07 03:49:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug
The Workflow Bundler does not forbid uses of the `process` global variable inside Workflow code, resulting in `ReferenceError: process is not defined` at Workflow execution.

### Minimal Reproduction
1. Add something like `process.getuid()` to any existing workflow (note that no `import` statement is added as `process` is a global variable exposed by Node).
1. Start the worker, and confirm the workflow code compiles without error:

```
[INFO] asset workflow-bundle-09308af9a4bcd2033177.js 726 KiB [emitted] [immutable] (name: main)
[INFO] runtime modules 937 bytes 4 modules
[INFO] modules by path ./node_modules/@temporalio/ 168 KiB
[INFO]   modules by path ./node_modules/@temporalio/common/lib/ 69.1 KiB 18 modules
[INFO]   modules by path ./node_modules/@temporalio/workflow/ 97.1 KiB
[INFO]     ./node_modules/@temporalio/workflow/lib/worker-interface.js 11 KiB [built] [code generated]
[INFO]     + 13 modules
[INFO]   ./node_modules/@temporalio/worker/lib/workflow-log-interceptor.js 2.27 KiB [built] [code generated]
[INFO] modules by path ./src/ 3.73 KiB
[INFO]   ./src/workflows-autogenerated-entrypoint.cjs 575 bytes [built] [code generated]
[INFO]   ./src/workflows.ts 2.9 KiB [built] [code generated]
[INFO]   ./src/shared.ts 270 bytes [built] [code generated]
[INFO] __temporal_custom_payload_converter (ignored) 15 bytes [built] [code generated]
[INFO] __temporal_custom_failure_converter (ignored) 15 bytes [built] [code generated]
[INFO] ./node_modules/long/umd/index.js 43.1 KiB [built] [code generated]
[INFO] ./node_modules/ms/index.js 2.95 KiB [built] [code generated]
[INFO] webpack 5.77.0 compiled successfully in 223 ms
[INFO] Workflow bundle created { size: '0.71MB' }
[INFO] Worker state changed { state: 'RUNNING' }
```

1. Start a Workflow excution, then observe an error message similar to this one in Worker's log:

```
[ERROR] Failed to activate workflow {
  runId: '6898d7d0-6622-4cca-928f-2aa2577e6221',
  error: /Users/.../samples-typescript/mutex/workflow-bundle-09308af9a4bcd2033177.js:4594
  const C = process.env.SOMETHING;
            ^
  
  ReferenceError: process is not defined
      at process (/Users/.../samples-typescript/mutex/src/workflows.ts:26:10)
      at __webpack_require__ (webpack/bootstrap:19:0)
      at importWorkflows (/Users/.../samples-typescript/mutex/src/workflows-autogenerated-entrypoint.cjs:9:9)
      at Object.initRuntime (/Users/.../samples-typescript/mutex/node_modules/@temporalio/workflow/src/worker-interface.ts:138:14)
      at evalmachine.<anonymous>:1:18
      at Script.runInContext (node:vm:134:12)
      at Object.runInContext (node:vm:284:6)
      at Proxy.<anonymous> (/Users/.../samples-typescript/mutex/node_modules/@temporalio/worker/lib/workflow/vm.js:36:46)
      at VMWorkflowCreator.createWorkflow (/Users/.../samples-typescript/mutex/node_modules/@temporalio/worker/lib/workflow/vm.js:43:24)
      at async handleRequest (/Users/.../samples-typescript/mutex/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:42:13),
  workflowExists: false
}
```



#### Comments (2)

<details>
<summary><strong>nubunto</strong> commented on 2023-07-07 18:26:40.000 UTC</summary>

is this a good first issue? I'm inclined to tackle this.

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2023-07-07 19:24:57.000 UTC</summary>

> is this a good first issue? I'm inclined to tackle this.

Thanks for offering! I expect this might actually be a little bit tricky to fix, but not that bad if you are comfortable digging into Webpack. Plus it's possible that I may have missed some straight forward solution.

So let me give some context on this.

The thing is that webpack has a built-in knowledge of which globals (such as `process`, `require` or `JSON`) exist based on the build `target` (see [here](https://webpack.js.org/configuration/target/)). As out bundler is not explicitly setting this parameter at the moment, Webpack defaults to `web`, which is obviously wrong, yet reasonably close from the sandbox environment. The `node` target would be worst, as it would suppose that the `require` global function exists, which we definitely don't want.

Setting target to `false` would actually be the closest we can get of what the sandbox environment really is, but that brings up other issues because of libraries using ["conditional package.json exports"](https://nodejs.org/api/packages.html#conditional-exports). These libraries (including some that we ourselves depends on) very often expose a `node` and a `browser` variant, making them impossible to use when target is set to anything else than `node` or `web`. By the way, what I just described here is also the reason behind [this other issue](https://github.com/temporalio/sdk-typescript/issues/958).

There's certainly more than one way to fix this, but I think the most appropriate solution would be to define a new, custom Webpack target that closely match the workflow sandbox environment. That custom target would also need to enable the "browser" conditional, to ensure that we don't break external libraries that depends on it.

</details>


---

### #982: Incompatible with allowSyntheticDefaultImports set to false

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/982 |
| **State** | OPEN |
| **Author** | neelance (Richard Musiol) |
| **Created** | 2022-11-30 22:15:37.000 UTC (3y 1m ago) |
| **Updated** | 2023-08-11 09:45:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Your tsconfig.json seems to have `allowSyntheticDefaultImports` and `esModuleInterop` set to true. This makes TypeScript throw errors when using the SDK in a project that has decided to not use these legacy support flags any more.

We were able to work around this with very small patches to your code, e.g. use `import * as webpack from 'webpack';` instead of `import webpack from 'webpack';`, so I believe it would be easy and helpful if you would disable these flags in the SDK as well.

#### Comments (2)

<details>
<summary><strong>neelance</strong> commented on 2023-01-02 10:03:01.000 UTC</summary>

Seems like this got resolved. Thanks!

</details>

<details>
<summary><strong>neelance</strong> commented on 2023-08-11 09:45:26.000 UTC</summary>

This is again broken in the `@temporalio/testing` package:
```
node_modules/@temporalio/testing/lib/index.d.ts:12:8 - error TS1259: Module '"node:events"' can only be default-imported using the 'allowSyntheticDefaultImports' flag

12 import events from 'node:events';
          ~~~~~~

  node_modules/@types/node/events.d.ts:752:5
    752     export = events;
            ~~~~~~~~~~~~~~~~
    This module is declared with 'export =', and can only be used with a default import when using the 'allowSyntheticDefaultImports' flag.
```

</details>


---

### #959: [Bug] Broken links and hierarchy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/959 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-11-10 02:54:30.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-10 03:38:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description


## Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

Links and hierarchy section work/don't work depending on which package page you're looking at.

### Links

works in common:

https://typescript.temporal.io/api/interfaces/common.DataConverter

<img width="604" alt="image" src="https://user-images.githubusercontent.com/251288/200988916-e647f8e7-6f17-4515-ad1e-5e9898ee3e0a.png">

don't work in worker:

https://typescript.temporal.io/api/interfaces/worker.DataConverter

<img width="645" alt="image" src="https://user-images.githubusercontent.com/251288/200988882-464cd762-b3b4-455e-85d0-7fbf4455ff72.png">

### Hierarchy

works in client:

https://typescript.temporal.io/api/classes/client.TemporalFailure

<img width="784" alt="image" src="https://user-images.githubusercontent.com/251288/200988979-8a19e1f4-997b-49b1-999a-7fa321d6da0d.png">

doesn't work in common:

https://typescript.temporal.io/api/classes/common.TemporalFailure

<img width="355" alt="image" src="https://user-images.githubusercontent.com/251288/200989119-f93452e3-e887-4fde-9221-8ffa4c48e393.png">



#### Comments (2)

<details>
<summary><strong>lorensr</strong> commented on 2022-11-10 03:27:41.000 UTC</summary>

It can also be confusing to have duplicate pages in search results (one for each package):

<img width="561" alt="image" src="https://user-images.githubusercontent.com/251288/200993652-0fd08605-a058-4426-acca-2047158f602f.png">

Perhaps a solution is not generating docs pages for anything that's re-exported.

</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-11-10 03:38:26.000 UTC</summary>

Maybe we can mark the re-exports as @hidden, this is probably an issue with the docusaurus typedoc plugin so worth investigating the source of the issue or see if there’s a workaround.

</details>


---

### #813: [Feature Request] Less boiler plate.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/813 |
| **State** | OPEN |
| **Author** | izakfilmalter (Izak Filmalter) |
| **Created** | 2022-08-12 19:43:34.000 UTC (3y 4m ago) |
| **Updated** | 2022-08-18 21:29:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I've been using temporal in production for about 3 months now. We have 11 workers, so still small, but moving more of our system over to it. In many ways I love it, it really is like React for the Backend. I'm primarily a FE dev, but now that I run my own startup, I have evolved to be full stack. 

The main thing that puts me off from moving more of my stack over to Temporal is the boiler plate. Right now it feels like React Classes, I want React Functions.

Below is my current flow to get to the point of being able to write a worker:

1. Make file for worker:
	  ```ts
	  type activities = {
	    deleteUser: typeOf deleteUserActivity
	  }
	  
	  const {
	    deleteUser
	  } = proxyActivities<activities>({
	    startToCloseTimeout: '30s', // recommended
	    scheduleToCloseTimeout: '5m', // useful
	    // The below is a Retry Policy. It is used to retry the Activity if it fails.
	    retry: {
	      // These are the values of the Default Retry Policy
	      initialInterval: '1s',
	      backoffCoefficient: 2,
	      nonRetryableErrorTypes: [],
	    },
	  })
	  
	  export async function deleteUser(params: DeleteUserRequest): Promise<void> {
	    await deleteUser(params)
	  }
	  ```

1. Make new activity
	  ```ts
	  export const deleteUser = async (params: {
	    userId: string
	    orgId: string
	  }) => {
	    await Promise.all([
	      deleteFromDB(`users/${userId}`),
	      removeUserFromOrganization(params),
	    ])
	  }
	  ```

1. Update `worker.ts`
	  ```ts
	  const deleteUserActivities = {
	    deleteUser
	  }
	  
	  async function run() {
	    const workers = await Promise.all([
	      // deleteUser
	      Worker.create({
	        ...workflowOption('workflows/users/deleteUser.workflow.ts'),
	        namespace: env.NAMESPACE,
	        connection,
	        interceptors: {
	          activityInbound: [
	            (ctx) => new ActivityInboundLogInterceptor(ctx, activityLogger),
	          ],
	          workflowModules: [require.resolve('workflows/workflowsInterceptor')],
	        },
	        activities: deleteUserActivities,
	        taskQueue: TaskQueue.DeleteUser,
	        sinks,
	        maxCachedWorkflows: 4,
	        maxConcurrentWorkflowTaskExecutions: 4,
	      }),
	    ])
	  }
	  ```

This is a lot to start making a single workflow. If you mess anything up along the way, everything breaks. It feels like Temporal needs JSX. What I mean by that is some kind of preprocessor that will spit all this out for you.

In a perfect world:
1. Workflow definition and options should be colocated.
	1. Workflow options can be overridden when they are called.
1. Activities should just work with default settings. 
    1. Activities should be anything that is a promise or anything that leads to a promise. I have lots of code that prepares a promise, eg `() => async () => unknown`.
1. Type checking of input and output with `zod` should be standard, and enforced. Use the good work that tRPC is doing in making typesafe api's.
1. Autoworkflow wrapper. I have a bunch of non temporal node code that I wish I didn't have to rewrite from the ground up. Having something that could wrap it as one giant activity, a la `dangerouslySetInnerHtml`. You know the risk going it, but it can jump start your switch to Temporal.

Pseudo Example:
```ts
export const deleteUser = Worker
  .create<
    'deleteUser',
    DeleteUserRequest,
    DeleteUserResponse,
  >('deleteUser',
  {
    /* workflow options */
    input: DeleteUserRequest,
    output: DeleteUserResponse,
    async resolve(request) {
      const { userId, orgId } = request
      
      await deleteUser({ userId, orgId })
    }
  })
```

#### Comments (2)

<details>
<summary><strong>lorensr</strong> commented on 2022-08-12 20:12:51.000 UTC</summary>

Thanks for the feedback and ideas!

1 & 2. I think Temporal is planning for Workflows & Activities to be able to define their own default options. It'll be system-wide, and will work across SDKs.

2i. Here's where we call Activity functions:

![image](https://user-images.githubusercontent.com/251288/184434944-2d7be609-7790-4c38-92a7-41216cd15c0a.png)

So you're suggesting that if `await this.fn()` is a Promise, await again? What's your use case? Does it fit this sample:

https://github.com/temporalio/samples-typescript/blob/main/activities-dependency-injection/src/worker.ts

3. It looks like you're already using compile-time type checking calling Activities. You're looking for runtime checking as well? The default Payload Converter has to be backward compatible and match all other SDKs, but a couple options are using protobufs or creating your own zod-based Payload Converter. 

Some simplification ideas:

- Have a single Worker that has all your workflows and activities. Then adding a workflow and activity is just adding two files in the right directories.
- Your Activity functions can call your existing non-temporal node code
- In future, we plan to allow calling Activities directly from the Client


</details>

<details>
<summary><strong>bergundy</strong> commented on 2022-08-12 21:04:17.000 UTC</summary>

I want to add a way to colocate workflow implementations with activities, currently it's possible if you're willing to sacrifice runtime failures when referencing unresolved dependencies.
We actually use this feature in the sdk-features repo: https://github.com/temporalio/sdk-features/blob/main/features/activity/retry_on_error/feature.ts.
I agree that some of the boilerplate can be removed but I still believe the SDK should be left as flexible as possible at its core.
For example `zod` is your personal preference, lots of devs would disagree with the decision to enforce this.
For registering activities and workflows, if you set up your project correctly, all it would take is adding exports in the right files (or public methods on activity classes).

Having an ability to invoke any function as an activity was possible in the original version of the SDK, we ended up changing the way it worked because it the approach was too rigid.
I do want to consider a way to provide default activity options (not sure where they'd be specified) so you don't have to pass the options to each proxy call (or even be able to get rid of proxies altogether) but we'd have to think about this some more to find the right way to do it.

</details>


---

### #783: [Feature Request] Better Nx support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/783 |
| **State** | OPEN |
| **Author** | badyan (Alex Badyan) |
| **Created** | 2022-07-27 08:07:42.000 UTC (3y 5m ago) |
| **Updated** | 2024-11-19 22:04:51.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement, ecosystem-and-integrations |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

It's currently very hard to use temporal inside an Nx monorepo. Check out this thread for details of my journey and (eventual) success: https://community.temporal.io/t/using-temporal-with-nx-monorepo/5228

### Describe the solution you'd like

I would appreciate a better support for the Nx use case, ideally a dedicated temporal executor that can wrap all of the bundling and specialized running of commands.
At the very least, a working sample in your repo would go a long way.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #773: [Bug] payloadToJSON from from @temporalio/common/lib/proto-utils does not generate vaild proto JSON

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/773 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-07-23 00:54:13.000 UTC (3y 5m ago) |
| **Updated** | 2024-09-27 16:39:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Metadata fields are not turned into base64 encoded strings

#### Comments (2)

<details>
<summary><strong>bergundy</strong> commented on 2022-09-01 12:58:43.000 UTC</summary>

Note to self, this works:

```ts
function payloadToJSON({ metadata, data }: Payload): JSONPayload {
  return {
    metadata:
      metadata &&
      Object.fromEntries(
        Object.entries(metadata).map(([k, v]): [string, string] => [k, Buffer.from(v).toString('base64')])
      ),
    data: data ? Buffer.from(data).toString('base64') : undefined,
  };
}
```

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-09-27 16:39:45.000 UTC</summary>

The problem is that proto3-json-serializer does not properly handle maps of bytes (and probably array of bytes too).

I opened an issue on their side: https://github.com/googleapis/google-cloud-node-core/issues/108

</details>


---

### #470: [Feature Request] TerminatedFailure missing "details"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/470 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-02-08 18:47:25.000 UTC (3y 10m ago) |
| **Updated** | 2024-12-17 21:30:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

`terminate` accepts "details", which are present on `WorkflowExecutionTerminatedEventAttributes` even though they aren't present on `TerminatedFailureInfo`.

### Describe the solution you'd like

We should make the details available.

#### Comments (2)

<details>
<summary><strong>lorensr</strong> commented on 2022-02-08 19:11:27.000 UTC</summary>

For client, can update here, like canceled above: https://github.com/temporalio/sdk-typescript/blob/67526d3a9effaea51d9aac3573ba2f8c9d3e1bab/packages/client/src/workflow-client.ts#L400-L410 

For proto serialization, we generate code based on protos from core, which come from `/api`, which is missing details: 

https://github.com/temporalio/api/blob/5c7111f395324103bf630d6a211279adbfb5e418/temporal/api/failure/v1/message.proto#L52-L53

PR to add it: 

https://github.com/temporalio/api/pull/150

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-02-09 17:26:36.000 UTC</summary>

Note, we should probably also accept arguments as part of `WorkflowHandle.terminate`

</details>


---

### #1756: [Bug] Hostname is overly restrictive

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1756 |
| **State** | OPEN |
| **Author** | Dispersia (Aaron Housh) |
| **Created** | 2025-08-05 20:21:45.000 UTC (4 months ago) |
| **Updated** | 2025-08-05 20:56:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

My temporal instance is hosted behind a reverse proxy at a subpath /temporal

### Describe the bug

Temporal and Temporal UI allows this just fine and it works as expected, but the typescript SDK attempts to normalize it and only allows hostname or hostname:port, which prevents being able to connect to an instance.

### Minimal Reproduction

Host temporal grpc frontend behind a subpath, try to connect


#### Comments (1)

<details>
<summary><strong>Dispersia</strong> commented on 2025-08-05 20:56:54.000 UTC</summary>

 I just noticed it doesn't seem to work with a reverse proxy at all. Using Caddy, even at a DQN i get it can't create a native client.

</details>


---

### #1661: [Feature Request] Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1661 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 15:02:54.000 UTC (9 months ago) |
| **Updated** | 2025-10-07 17:23:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/434

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-10-07 17:23:36.000 UTC</summary>

Make sure to include nexus per https://github.com/temporalio/features/issues/678

</details>


---

### #1660: [Bug] RESOURCE_EXHAUSTED error while describing workflow schedule

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1660 |
| **State** | OPEN |
| **Author** | jhecking (Jan Hecking) |
| **Created** | 2025-03-25 12:20:01.000 UTC (9 months ago) |
| **Updated** | 2025-06-02 16:21:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

We try to describe a workflow schedule to see if it exists already.

### Describe the bug

Trying to describe a workflow schedule causes the following error:

```
ServiceError: Failed to describe schedule
    at ScheduleClient.rethrowGrpcError (/var/workspace/node_modules/@temporalio/client/lib/schedule-client.js:347:19)
    at ScheduleClient._describeSchedule (/var/workspace/node_modules/@temporalio/client/lib/schedule-client.js:137:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async Object.describe (/var/workspace/node_modules/@temporalio/client/lib/schedule-client.js:261:29)
    at async ListConnectionStatus (/var/workspace/main.js:204227:26)
    at async Authorization (/var/workspace/main.js:200642:12)
    at async /var/workspace/main.js:201108:28
    at async HandleServerErrors (/var/workspace/main.js:201020:16)
    at async handle (/var/workspace/main.js:165050:22)
caused by: Error: 8 RESOURCE_EXHAUSTED: consistent query buffer is full, this may be caused by too many queries and workflow not able to process query fast enough
    at callErrorFromStatus (/var/workspace/node_modules/@grpc/grpc-js/build/src/call.js:31:19)
    at Object.onReceiveStatus (/var/workspace/node_modules/@grpc/grpc-js/build/src/client.js:193:76)
    at /var/workspace/node_modules/@grpc/grpc-js/build/src/call-interface.js:78:35
    at Object.onReceiveStatus (/var/workspace/node_modules/@temporalio/client/lib/grpc-retry.js:165:25)
    at Object.onReceiveStatus (/var/workspace/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:360:141)
    at Object.onReceiveStatus (/var/workspace/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:323:181)
    at /var/workspace/node_modules/@grpc/grpc-js/build/src/resolving-call.js:129:78
    at process.processTicksAndRejections (node:internal/process/task_queues:85:11)
for call at
    at ServiceClientImpl.makeUnaryRequest (/var/workspace/node_modules/@grpc/grpc-js/build/src/client.js:161:32)
    at Service.rpcImpl (/var/workspace/node_modules/@temporalio/client/lib/connection.js:239:33)
    at Service.rpcCall (/var/workspace/node_modules/protobufjs/src/rpc/service.js:94:21)
    at executor (/var/workspace/node_modules/@protobufjs/aspromise/index.js:44:16)
    at new Promise (<anonymous>)
    at Object.asPromise (/var/workspace/node_modules/@protobufjs/aspromise/index.js:28:12)
    at Service.rpcCall (/var/workspace/node_modules/protobufjs/src/rpc/service.js:86:21)
    at Service.describeSchedule (eval at Codegen (/var/workspace/node_modules/@protobufjs/codegen/index.js:50:33), <anonymous>:4:15)
    at ScheduleClient._describeSchedule (/var/workspace/node_modules/@temporalio/client/lib/schedule-client.js:131:47)
    at Object.describe (/var/workspace/node_modules/@temporalio/client/lib/schedule-client.js:261:47)
```

We only see this happening for one specific schedule, which triggers every half hour. It doesn't happen immediately, but only after the schedule has been running for a while. If we delete the schedule, and recreate it, the problem goes away for some time. This same problem happens on multiple identical deployments, but only for this one schedule. Once the schedule is in this state, we are getting this error when trying to describe the schedule using the TypeScript SDK but also when using the Temporal CLI and also using the Temporal web console.

Describe schedule output, before the issue occurs:

```
temporal-admintools-6468b84b77-2pf6g:/etc/temporal$ temporal schedule describe -s monitoring_schedule -o json
{
  "schedule": {
    "spec": {
      "structuredCalendar": [
        {
          "second": [
            {
              "step": 1
            }
          ],
          "minute": [
            {
              "end": 59,
              "step": 30
            }
          ],
          "hour": [
            {
              "end": 23,
              "step": 1
            }
          ],
          "dayOfMonth": [
            {
              "start": 1,
              "end": 31,
              "step": 1
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 1
            }
          ],
          "dayOfWeek": [
            {
              "end": 6,
              "step": 1
            }
          ]
        }
      ]
    },
    "action": {
      "startWorkflow": {
        "workflowId": "monitoring_schedule",
        "workflowType": {
          "name": "monitoringSchedule"
        },
        "taskQueue": {
          "name": "borneo-workers",
          "kind": "TASK_QUEUE_KIND_NORMAL"
        },
        "input": {},
        "workflowExecutionTimeout": "1500s",
        "header": {
          "fields": {
            "orgInfo": {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "eyJ0ZW5hbnRJZCI6IjZiYTBmODU3LWZkYzgtOWFmNC02ZWI3LWJlZDM0NjEyMDBlNSIsIm9yZ2FuaXNhdGlvbklkIjoxfQ=="
            }
          }
        }
      }
    },
    "policies": {
      "overlapPolicy": "SCHEDULE_OVERLAP_POLICY_SKIP",
      "catchupWindow": "31536000s"
    },
    "state": {}
  },
  "info": {
    "actionCount": "4",
    "recentActions": [
      {
        "scheduleTime": "2025-03-25T10:41:17.794180870Z",
        "actualTime": "2025-03-25T10:41:17.869016655Z",
        "startWorkflowResult": {
          "workflowId": "monitoring_schedule-2025-03-25T10:41:17Z",
          "runId": "3f9bb004-4f31-4600-9e45-23bf195cd572"
        }
      },
      {
        "scheduleTime": "2025-03-25T11:00:00Z",
        "actualTime": "2025-03-25T11:00:00.198352012Z",
        "startWorkflowResult": {
          "workflowId": "monitoring_schedule-2025-03-25T11:00:00Z",
          "runId": "bf151d94-c8f7-4346-95cb-bd90cddfab72"
        }
      },
      {
        "scheduleTime": "2025-03-25T11:30:00Z",
        "actualTime": "2025-03-25T11:30:00.410055532Z",
        "startWorkflowResult": {
          "workflowId": "monitoring_schedule-2025-03-25T11:30:00Z",
          "runId": "d690f96a-048f-4be4-b4cf-1313bd61b1fb"
        }
      },
      {
        "scheduleTime": "2025-03-25T12:00:00Z",
        "actualTime": "2025-03-25T12:00:00.332018132Z",
        "startWorkflowResult": {
          "workflowId": "monitoring_schedule-2025-03-25T12:00:00Z",
          "runId": "2320d2c0-5bf1-41ef-bfad-0d549329b910"
        }
      }
    ],
    "futureActionTimes": [
      "2025-03-25T12:30:00Z",
      "2025-03-25T13:00:00Z",
      "2025-03-25T13:30:00Z",
      "2025-03-25T14:00:00Z",
      "2025-03-25T14:30:00Z",
      "2025-03-25T15:00:00Z",
      "2025-03-25T15:30:00Z",
      "2025-03-25T16:00:00Z",
      "2025-03-25T16:30:00Z",
      "2025-03-25T17:00:00Z"
    ],
    "createTime": "2025-03-25T10:41:17.745377738Z"
  },
  "conflictToken": "AAAAAAAAAAE="
}
```

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
- Temporal Version: 1.25.1
- Are you using Docker or Kubernetes or building Temporal from source? Kubernetes

### Additional context

<!-- Add any other context about the problem here. -->

#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2025-06-02 16:21:48.000 UTC</summary>

Hello @jhecking!

Are you still seeing this error? If so, can you please confirm that you are operating the Temporal Cluster yourself, on Kubernetes, running Temporal server v1.25.1? Have you tried upgrading the Temporal server to latest release?

That error most probably indicates an issue with your Temporal Cluster configuration, or a bug in the Temporal Server. In any case, this is not a TS SDK side bug.

I think you may be able to get some more useful details by looking at your Temporal server-side logs.

Let me give just a little bit of context here. Internal to the Temporal server, schedules are actually implemented themselves as Workflow executions. To be clear, that's a Workflow type defined by the server itself, not your own Workflow; the code of that Workflow is in Go, and they execute on the Temporal Cluster's _Worker nodes_.

When you call `DescribeSchedule`, the server frontend node sends a query for each Schedule workflow to obtain fresh status. That is the query that is failing in the error message you're seeing. The server only allows up to a certain number of pending queries to a given Workflow execution - by default, I believe that maximum is one. The error message you are getting indicates that queries are being made in excess to that limit for a single workflow execution.

This may indicate that the Worker nodes of your cluster are underpowered, though I don't see why that would affect only that specific schedule. That and the fact that "Once the schedule is in this state, we are getting this error when trying to describe the schedule" makes it sound like there might be something wrong in that specific schedule definition that triggers a bug when the Schedule Workflow is replayed in the context of those queries.

</details>


---

### #1656: [Bug] Workflow type is incorrectly deduced when using `bind` on workflow function

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1656 |
| **State** | OPEN |
| **Author** | jean-pruliere (Jean Pruliere) |
| **Created** | 2025-03-20 17:10:26.000 UTC (9 months ago) |
| **Updated** | 2025-03-20 17:13:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I have created an abstract class `Workflow`, all my workflow classes extend it and each one has a method containing the actual workflow definition. The workflow bundle is created by instantiating each class then rebinding the method it contains (=the actual workflow function) to its instance.
```typescript
// workflows/example.workflow.ts
export ExampleWorkflow extends Workflow {
  public async example(input: { name: string }) {
    // workflow definition goes here
  }
}

// workflows/index.ts
import { ExampleWorkflow } from "./example.workflow.ts";

const exampleClass = new ExampleWorkflow();
export example = exampleClass.example.bind(exampleClass);
```
I'd like to use these exported workflow functions with a WorkflowClient to start new executions.
```typescript
this.workflowClient.start(
  example,
  {
    args: [{ name }],
    taskQueue,
    workflowId: randomUUID(),
  },
),
```

### Describe the bug

Because the function is bound, its `name` property became `bound example`, so the workflow type ends up also being `bound example`. But because the workers get a bundle with the name of each exported function (i.e. `example`), they cannot execute a `bound example` workflow.

### Minimal Reproduction

Here is an [example of this behavior](https://github.com/jean-pruliere/samples-typescript/blob/demo/bound-workflows/hello-world/src/workflows.ts).

The mocha tests fail and the worker logs the following error:
```
2025-03-20T16:38:13.045Z [ERROR] Failed to process Worklow Activation {
  sdkComponent: 'worker',
  taskQueue: 'test',
  runId: '0195b46b-6928-74b7-87aa-301e9c2cfe1d',
  error: /Users/jean.pruliere/code/perso/samples-typescript/hello-world/workflow-bundle-7deb71318020c96355f1.js:4654
          throw new TypeError(`Failed to initialize workflow of type '${activator.info.workflowType}': ${details}`);
          ^
  
  TypeError: Failed to initialize workflow of type 'bound example': no such function is exported by the workflow bundle
      at Object.initRuntime (/Users/jean.pruliere/code/perso/samples-typescript/hello-world/node_modules/@temporalio/workflow/src/worker-interface.ts:87:10)
      at evalmachine.<anonymous>:1:18
      at Script.runInContext (node:vm:149:12)
      at Object.runInContext (node:vm:301:6)
      at Proxy.<anonymous> (/Users/jean.pruliere/code/perso/samples-typescript/hello-world/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js:104:50)
      at ReusableVMWorkflowCreator.createWorkflow (/Users/jean.pruliere/code/perso/samples-typescript/hello-world/node_modules/@temporalio/worker/lib/workflow/reusable-vm.js:131:24)
      at handleRequest (/Users/jean.pruliere/code/perso/samples-typescript/hello-world/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:42:35)
      at MessagePort.<anonymous> (/Users/jean.pruliere/code/perso/samples-typescript/hello-world/node_modules/@temporalio/worker/lib/workflow/workflow-worker-thread.js:92:38)
      at [nodejs.internal.kHybridDispatch] (node:internal/event_target:816:20)
      at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28),
  workflowExists: false
}
```

### Environment/Versions

- OS and processor: M2 Mac
- Temporal Version: sdk 1.11.7, server 1.27.1
- I'm using Docker and our production use Kubernetes


#### Comments (1)

<details>
<summary><strong>jean-pruliere</strong> commented on 2025-03-20 17:12:58.000 UTC</summary>

I forgot to mention it but I can work on a fix, I have already identified [which function](https://github.com/temporalio/sdk-typescript/blob/main/packages/common/src/workflow-options.ts#L240) should be modified.

Let me know, cheers

</details>


---

### #1652: [Bug] Throw on usage of Workflow APIs that modify state from non-replayable context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1652 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-03-17 15:19:21.000 UTC (9 months ago) |
| **Updated** | 2025-03-17 15:28:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

The following APIs should throw if invoked from a query handler, an update validation handler, or other "read only" execution context:

- Any API that may result in adding a command (except for the `RespondToQuery`, `UpdateResponse.accepted` or `UpdateResponse.rejected` commands);
- `Math.random()` and `uuid4()`;
- `setHandler()`, `setDefaultSignalHandler(), and similar;
- `condition()`
- `CancellableScope()`

At the moment, usage of these APIs may result in either failure on completion (from Core) or NDE on subsequent workflow tasks.

#### Comments (1)

<details>
<summary><strong>Quinn-With-Two-Ns</strong> commented on 2025-03-17 15:28:36.000 UTC</summary>

Doesn't this apply to all SDK's not just TS? Maybe we should open a feature issue

</details>


---

### #1431: [Feature Request] Make it easier to diagnose failures to connect to Temporal Cloud due to incorrect `serverRootCACertificate`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1431 |
| **State** | OPEN |
| **Author** | maxramqvist (Max Ramqvist) |
| **Created** | 2024-05-29 14:12:28.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-29 22:41:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to connect to Temporal Cloud with this SDK client. But failed in my troubleshooting when the error message threw me in another direction.

### Describe the bug

I'm trying to connect to a namespace in Temporal Cloud. The worker and the client is using the exact same TLS-configuration (i use the same function to generate the TLS config in my actual code).
The worker connects successfully to Temporal Cloud, but the client fails with the message `Failed to connect before the deadline`.

It turns out that it was a misconfiguration on my part on the `serverRootCACertificate`, I had set a CA certificate that wasn't valid in this case.

The error message through me off in the troubleshooting. I had expected the message to be something related to TLS validation or similar, not a failed connection before the deadline... 

It would be great with a error message explaining the actual problem if that is possible.

### Minimal Reproduction

```javascript
        const crt = Buffer.from(config.temporal.clientCertB64, "base64")
        const key = Buffer.from(config.temporal.clientKeyB64, "base64")

        clientConnection = await Connection.connect({
            address: config.temporal.address,
            tls: {
              clientCertPair: {
                  crt,
                  key,
              },
              // just set an invalid CA cert here 
              serverRootCACertificate: process.env["NODE_EXTRA_CA_CERTS"] 
                  ? fs.readFileSync(process.env["NODE_EXTRA_CA_CERTS"])
                  : undefined,
          }
        })
```

### Environment/Versions

Typescript SDK 1.9.3 and 1.10.1, NodeJS 22.0 and 22.2





#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2024-05-29 22:40:17.000 UTC</summary>

I fully agree. This is a common friction point, and we want to improve on this.

Unfortunately, and a bit counter-intuitively, gRPC's robustness against transport level failures makes it very difficult to identify such errors. Essentially, _by design_, the gRPC layer treats connection level errors as transient, and will simply retry transparently as long as it is authorized to do so (hence the "before deadline" part in that error message). There are also difficulties related to the fact that the underlying TLS libraries, on both client-side and server-side, will often close a connection eagerly, with very little details, if any, when they fail to complete an mTLS handshake sequence, which is the specific case you faced.

I think [this comment](https://github.com/grpc/grpc-node/issues/733#issuecomment-463307760) from the `@grpc/grpc-js` project maintainer clearly expose this:

> The current behavior is intentional. Fundamentally, the gRPC library assumes that users are inputting their correct information, and that failures to establish connections are the result of the inherently asynchronous nature of networks. A DNS resolution failure can mean that the DNS config hasn't been updated yet. A TCP connection failure can mean that the server process happens to be restarting at the moment. And a certificate validation error can mean that the server is rotating its certs and the client picked up the new roots a little early.
>
> This is also not something that can be conclusively checked beforehand. The root certificates file does not contain information about every host you might connect to. The default file contains certificate information for certificate authorities. So, you can check whether a particular certificate is signed by a CA that you recognize, but you can't check locally whether or not you will be able to connect to a particular host.

Still, we are looking internally at ways to improve the user experience in this regard. I'll therefore keep this ticket open to track this as a feature request.

Reactions: 👍 1

</details>


---

### #1331: [Feature Request] Schedule creation should create tracing span by default

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1331 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:12:47.000 UTC (1y 12m ago) |
| **Updated** | 2024-03-05 18:30:11.000 UTC |
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
<summary><strong>cretz</strong> commented on 2024-03-05 18:30:09.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>


---

### #1274: [Bug] Error not serialized fully when sent to Sinks

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1274 |
| **State** | OPEN |
| **Author** | marcoreni (Marco Reni) |
| **Created** | 2023-10-30 13:02:35.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-30 19:00:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

### What are you really trying to do?

Sending an error to a Sink function and preserve all the attributes.

### Describe the bug

It seems that the error that the error received from the sink function has less fields than the error which was sent.

For example: we're creating an ApplicationFailure.nonRetryable from a child workflow, and we're intercepting the error inside the parent workflow.

Error inside the parent workflow:
```js
{
  cause: {
    cause: undefined,
    type: 'my_error_type',
    nonRetryable: true,
    details: [],
    failure: {
      message: 'my_error_message',
      source: 'TypeScriptSDK',
      stackTrace: 'ApplicationFailure: my_error_message\n' +
        '    at Function.nonRetryable (/usr/app/node_modules/.pnpm/@temporalio+common@1.8.6/node_modules/@temporalio/common/src/failure.ts:149:11)\n' +
        '    at nonRetryable (/usr/app/src/workflows/index.ts:51:28)',
      applicationFailureInfo: [Object]
    },
    name: 'ApplicationFailure',
    message: 'my_error_message',
    stack: 'ApplicationFailure: my_error_message\n' +
      '    at Function.nonRetryable (/usr/app/node_modules/.pnpm/@temporalio+common@1.8.6/node_modules/@temporalio/common/src/failure.ts:149:11)\n' +
      '    at nonRetryable (/usr/app/src/workflows/index.ts:51:28)'
  },
  namespace: 'default',
  execution: {
    workflowId: '1698670214662-foobar',
    runId: 'd46839c0-2255-489b-b8ea-37b41b8501e9'
  },
  workflowType: 'my_workflow_type',
  retryState: 5,
  failure: {
    message: 'Child Workflow execution failed',
    cause: {
      message: 'my_error:message',
      source: 'TypeScriptSDK',
      stackTrace: 'ApplicationFailure: my_error_message\n' +
        '    at Function.nonRetryable (/usr/app/node_modules/.pnpm/@temporalio+common@1.8.6/node_modules/@temporalio/common/src/failure.ts:149:11)\n' +
        '    at nonRetryable (/usr/app/src/workflows/index.ts:51:28)',
      applicationFailureInfo: [Object]
    },
    childWorkflowExecutionFailureInfo: {
      namespace: 'default',
      workflowExecution: [Object],
      workflowType: [Object],
      initiatedEventId: '23',
      startedEventId: '24',
      retryState: 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    }
  },
  name: 'ChildWorkflowFailure',
  message: 'Child Workflow execution failed',
  stack: ''
}

```


Error that is received from the sink:
```js
{
  name: "Error",
  message: "Child Workflow execution failed",
  stack: "",
  cause: {
    name: "Error",
    message: "my_error_message",
    stack:
      "ApplicationFailure: my_error_message\n" +
      "    at Function.nonRetryable (/usr/app/node_modules/.pnpm/@temporalio+common@1.8.6/node_modules/@temporalio/common/src/failure.ts:149:11)\n" +
      "    at nonRetryable (/usr/app/src/workflows/index.ts:51:28)",
  },
};

```

Given that, IIUC, the sink is implemented via a postMessage, would it be possible to extend the serialization format of the error so that more fields are passed through (more specifically, we're currently interested in `type` and `details` of the cause)?

### Minimal Reproduction

N/A

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M1 Mac
- Temporal Version: 1.8.6
- Are you using Docker or Kubernetes or building Temporal from source? Docker

### Additional context


#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2023-10-30 19:00:24.000 UTC</summary>

This is a known limitation of sinks. As you pointed out, the data is transferred over `postMessage` from a worker thread to the main Node.js thread which uses the structured clone algorithm.

https://nodejs.org/api/worker_threads.html#portpostmessagevalue-transferlist

Looks like our documentation doesn't call out this limitation clearly enough though. I think we should add this information on `proxySinks` and the `WorkerOptions.sinks`.

https://typescript.temporal.io/api/namespaces/workflow#sinkfunction

</details>


---

### #1222: [Feature Request] Expose `originalExecutionRunId` in `workflowInfo`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1222 |
| **State** | OPEN |
| **Author** | PenguinToast (William Sheu) |
| **Created** | 2023-08-22 21:33:28.000 UTC (2y 4m ago) |
| **Updated** | 2024-09-27 16:55:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement, good first issue |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
We have a use case where we'd like to deterministically seed a PRNG in a workflow context -- for this, we'd need a value that stays stable throughout Resets but changes on Continue-As-New/Cron. From my understanding reading the [docs](https://docs.temporal.io/workflows#which-operations-lead-to-non-determinism-issues), `originalExecutionRunId` would work for this use case. 

### Describe the solution you'd like
Can we get this `originalExecutionRunId` exposed in `workflowInfo()`?

### Additional context
If i'm misunderstanding the documentation and this isn't actually the value I want, I'm certainly open to other suggestions for our use case!



#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2023-08-25 15:33:01.000 UTC</summary>

We need to expose it but note that `Math.random()` is a deterministic random seeded using the originalRunId and updated when the run ID changes (in workflow reset cases).

</details>


---

### #1059: [docs] Types are missing in the left nav bar of the exported API documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1059 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-02-17 15:42:51.000 UTC (2y 10m ago) |
| **Updated** | 2024-01-15 21:30:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In [the exported API documentation](https://typescript.temporal.io/api/namespaces/client), structures that are defined with the `type` keyword appears nowhere in the left nav bar.

For example, `ScheduleDescription`, which is defined in code as `export type ScheduleDescription = { ... }` can be navigated from [ScheduleHandle.describe](https://typescript.temporal.io/api/interfaces/client.ScheduleHandle#describe), but can't be found directly by searching it in the nav bar.

#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2024-01-15 21:30:14.000 UTC</summary>

Actually, the same is true of module exported functions, constants and variables. This is due to the way the sidebar is built (i.e. iterating on exported markdown files, but not looking into those files).

</details>


---

### #1007: [Feature Request] Expose currently configured payload converter to workflow code

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1007 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-12-30 07:26:07.000 UTC (3 years ago) |
| **Updated** | 2025-02-07 03:49:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

eg for headers + interceptors



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-01-05 21:35:38.000 UTC</summary>

I think this is a general request and not TS specific. Issue can remain here, but this is the type of feature we should do in all SDKs instead of burying in one.

Reactions: 👍 1

</details>


---

### #958: [Feature Request] Improve experience of including workflow modules that have a `browser` field

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/958 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-11-10 01:02:00.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-29 23:27:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Our bundler picks up the `browser` field in a module's `package.json`, and that can result in hard-to-understand errors that we've seen in support and here:

https://github.com/temporalio/samples-typescript/pull/204#issuecomment-1306408369

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Maybe automatically don't use browser field? 



#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2022-11-29 23:27:58.000 UTC</summary>

The thing is that if a package has a browser field, it most certainly means that it has both an implementation targeted at browsers and an implementation targeted at nodejs... Both will almost certainly require APIs we do not support in workflow sandboxes.

</details>


---

### #938: [Feature Request] Formally validate public API modification between releases

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/938 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2022-10-26 20:36:01.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-26 22:12:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

At the moment, it is very difficult to identify changes to exported members signatures from our SDK packages. This leads to two negative consequences:

- Risk of unexpected breaking changes in patch or minor releases;
- Risk of exposing members that were never meant for public usage (thus increasing even more the risk of further breaking changes).

### Describe the solution you'd like

Use a tool run in CICD that:
1. Identify the exact set of publicly exported APIs
2. Reports changes in these exported APIs relative to the appropriate baseline

### Additional context

Microsoft's [API Extractor](https://api-extractor.com/) can probably be used for this.

#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2022-10-26 22:12:05.000 UTC</summary>

Good idea, I'd just note that we're reserving major versions for history incompatible changes, our minor releases may contain API breaking changes.

</details>


---

### #776: [Feature Request] Expose internal-non-workflow-common functionality

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/776 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-25 23:58:12.000 UTC (3y 5m ago) |
| **Updated** | 2022-08-02 15:37:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Use case: https://temporalio.slack.com/archives/C01DKSMU94L/p1658777936734799

### Solution

Either:
- Add to API ref
- Combine internal* packages into `common`, using a separate folder & entry point for any non-workflow APIs
  - In this case, could we add `@temporalio/common/non-workflow` to API ref?



#### Comments (1)

<details>
<summary><strong>lorensr</strong> commented on 2022-08-02 15:37:16.000 UTC</summary>

Currently sending users to the relevant file, like this:

https://github.com/temporalio/sdk-typescript/blob/main/packages/internal-non-workflow-common/src/codec-helpers.ts

and giving an example import:

`import { encodeToPayload, loadDataConverter } from '@temporalio/internal-non-workflow-common'`

</details>


---

### #739: [Docs] Rank functions higher in search

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/739 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-01 20:49:01.000 UTC (3y 6m ago) |
| **Updated** | 2024-01-12 22:33:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

When searching `continueAsNew`, one of the last results is:

https://typescript.temporal.io/api/namespaces/workflow/#continueasnew

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

It would be nice if it were first. It looks like the two ways to rank things higher are `recordProps.lvl*`:

<img width="570" alt="image" src="https://user-images.githubusercontent.com/251288/176965637-6fede56e-2154-46a0-93f1-6ec6797603c7.png">

https://docsearch.algolia.com/docs/templates#docusaurus-v2-template

or `pageRank`, which is by index / pathsToMatch:

https://docsearch.algolia.com/docs/record-extractor#boost-search-results-with-pagerank

with which we could have a separate rank for `/api/namespaces/*`, or put functions to their own dir, like `/api/functions/workflow`.

#### Comments (1)

<details>
<summary><strong>lorensr</strong> commented on 2024-01-12 22:33:12.000 UTC</summary>

Also methods. Or move to the bottom of results everything I don't care about. Like in this list, most of it is not what I'm searching for:

https://typescript.temporal.io/search?q=heartbeat

</details>


---

### #668: [Feature Request] Provide WorkflowInfo.initiator?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/668 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-05-27 15:54:30.000 UTC (3y 7m ago) |
| **Updated** | 2025-06-11 10:13:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement, good first issue |
| **Assignees** | None |
| **Milestone** | None |

#### Description

If this is helpful to users, we could expose `startWorkflow.continueInitiator` as `WorkflowInfo.more.initiator: Initiator`. Currently we're not, but I'm opening this issue to see if there are any user requests / use cases for it.

```ts
export enum Initiator {
  Unspecified = 0,
  ContinueAsNew = 1,
  Retry = 2,
  Cron = 3,
}
```

One possible use case is determining whether the current Execution was initiated due to retry vs continue as new.

#### Comments (1)

<details>
<summary><strong>vaibhavyadav-dev</strong> commented on 2025-06-11 10:13:38.000 UTC</summary>

@lorensr @mjameswh is this issue still relevant? If so, you can suggest me some similar issues to work on, I'll happy to make quality contributions.
Thanks

</details>


---

### #384: [Feature Request] Add actual span time to spans create by workflow otel interceptors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/384 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2021-11-12 15:46:42.000 UTC (4y 1m ago) |
| **Updated** | 2025-02-04 18:30:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Spans created in the workflow isolate use workflow task time which different than the actual processing time.
Getting the actual time is useful for getting a clear picture of how a system behaves.

After discussing with the SDK team, we've decided not to use the real time for spans because a span can start in one workflow task and end in another, running on different workers and going through replays.

* This means there's no way to reliably get the real start time when the span is finally emitted
* We can avoid this scenario for spans generated by the interceptors but it's unavoidable if we want to let users create their own spans in workflow
  * This will in fact make the TS SDK the only SDK that supports user spans in Workflow code
  * Spans that span multiple workflow tasks require full determinism of workflow code in order for their IDs to be deterministically generated when replaying, if a user deploys a non deterministic update to their workflow code, tracing might break



#### Comments (1)

<details>
<summary><strong>bergundy</strong> commented on 2023-01-10 17:41:48.000 UTC</summary>

Use `workflowInfo().unsafe.now()`

</details>


---

### #1867: [Feature Request] Per-Worker Logger

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1867 |
| **State** | OPEN |
| **Author** | TastyPi (Graham Rogers) |
| **Created** | 2025-12-30 10:57:00.000 UTC (1 days ago) |
| **Updated** | 2025-12-30 10:58:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

When we run tests, we create a new Temporal Namespace for each test, and have that test's Worker connect to that namespace. This ensures tests can be run in parallel while being isolated from each other.

It also means we have a Worker per test. There are some things related to logs that we would like to be able to test, for example:
- Assert on log output
- Suppress Activity failure logs when they are expected

However, because the logger is configured by `Runtime.install`, which is global, it is not possible to have multiple Workers running in the same process using different logger instances so we can have per-test behaviour.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Allow the Logger to be configured at the Worker level. This would allow us to create a "test logger" instance for each test to enable what we want.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1862: [Feature Request] importing workflow into activity dependency causes “gRPC failed to connect before the deadline” error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1862 |
| **State** | OPEN |
| **Author** | deepika-awasthi |
| **Created** | 2025-12-12 19:10:26.000 UTC (19 days ago) |
| **Updated** | 2025-12-12 19:10:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Improve error messages when:

workflow code ends up in an activity dependency / non-sandboxed side, or
activities and workflows end up mixed in a way that breaks the sandbox assumptions.

Current error message is `Failed to connect before the deadline` which points connectivity or cloud auth issues and sends down the wrong debugging path.

attached issue :- https://app.usepylon.com/issues?conversationID=aa9077dd-17e0-4e89-8ae8-737828d47860


---

### #1860: [Bug] Performance regression from 1.13.1 -> 1.13.2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1860 |
| **State** | OPEN |
| **Author** | mnahkies (Michael Nahkies) |
| **Created** | 2025-12-10 09:32:18.000 UTC (21 days ago) |
| **Updated** | 2025-12-10 09:40:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
We expect consistent worker performance, as we have a roughly constant load of workflows being processed.

### Describe the bug

We've been running our worker with this patch applied https://github.com/temporalio/sdk-typescript/pull/1834 using the `1.13.1` SDK.

OTEL interceptors are in use, as well as some custom interceptors. All `AsyncLocalStorage` instances created during workflow execution are being disposed by an Internals interceptor.

When we use the patched `1.13.1` SDK we see steady metrics. Updating to `1.13.2` shows a significant degradation in performance.

On the screenshot you can see on the left the workers CPU usage when running the patched `1.13.2` SDK, on the right reverting to the patched `1.13.1` SDK.

<img width="886" height="252" alt="Image" src="https://github.com/user-attachments/assets/85757cd2-3a2b-42be-b31d-27aab30a7b4c" />

It's worth noting that the projects dependency tree has no duplicated temporal packages (eg: only a single version of each is in use), and there were no changes to other dependencies (eg: OTEL core packages) between the two builds compared.

I've scanned through the PR's linked in the release notes for `1.13.2`, and whilst there are notable changes around the new plugin functionality, nothing screamed out as obviously responsible for this regression. It's quite possible I've missed something though.

### Minimal Reproduction
TBD

### Environment/Versions

- OS and processor: Linux
- Temporal Version: 1.25.2
- Self hosted in kubernetes

### Additional context

Semi-related: https://github.com/temporalio/sdk-typescript/issues/1859


---

### #1858: [Bug] unable to import reflect-metadata within workflow bundle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1858 |
| **State** | OPEN |
| **Author** | hmvien (Hien Vien) |
| **Created** | 2025-12-05 23:25:41.000 UTC (25 days ago) |
| **Updated** | 2025-12-08 18:01:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Our Temporal TypeScript worker bundles class-based workflows that use [Inversify’s](https://github.com/inversify/InversifyJS) decorators (and therefore reflect-metadata). These workflows are instantiated within the workflow entry point using `container.get(WorkflowIdentifier)`. 

We implement workflows as classes to enhance workflow and activity modularity and to make it easier to write unit tests.

### Describe the bug

When `reuseV8Context` remains enabled (the default), the workflow is unable to start up with error
```
TypeError: Cannot define property decorate, object is not extensible
    at Function.defineProperty (<anonymous>)
    at reflect-metadata/Reflect.js:35:0
    at reflect-metadata/Reflect.js:146:0
    at reflect-metadata/Reflect.js:29:0
    at reflect-metadata/Reflect.js:55:5
```

This used to work in temporal-sdk 1.11.8, but breaks as soon as we upgrade to a later sdk version.

Temporal freezes the global Reflect object inside the reusable workflow isolate, so reflect-metadata cannot add its helpers.

Setting `reuseV8Context` to false fixes the issue, but does increase our memory and cpu footprint.

### Minimal Reproduction

`workflows.ts`
```
import "reflect-metadata";

import { Container, injectable } from "inversify";

@injectable()
class Workflows {
  async execute(): Promise<void> {
    // This workflow doesn't need to do anything; the error occurs as soon as
    // reflect-metadata tries to patch the frozen Reflect object.
  }
}

const container = new Container();
container.bind(Workflows).toSelf();

export default async function () {
  const workflow = container.get(Workflows);
  return await workflow.execute();
}
```

`worker.ts`
```
import path from "node:path";
import { fileURLToPath } from "node:url";

import { NativeConnection, Worker } from "@temporalio/worker";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main(): Promise<void> {
  const reuseV8Context = process.env.REUSE_V8_CONTEXT !== "false";

  console.info(
    `[repro] Starting worker with reuseV8Context=${reuseV8Context.toString()}`,
  );

  const connection = await NativeConnection.connect({
    address: "localhost:7233",
  });
  const worker = await Worker.create({
    connection,
    namespace: "dev",
    taskQueue: "dev",
    reuseV8Context,
    workflowsPath: path.join(__dirname, "workflows.ts"),
  });

  await worker.run();
}

main().catch((error) => {
  console.error("[repro] Worker creation failed with error:");
  console.error(error);
  process.exitCode = 1;
});
```

Execute with
```
1. tsx worker.ts
2. temporal workflow start --task-queue dev --type TestWorkflow
```

### Environment/Versions

- OS and processor: macOS
- Temporal Version: 1.13
- Are you using Docker or Kubernetes or building Temporal from source? No

### Additional context




---

### #1854: [Feature Request] Correct docs for OtelCollectorExporter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1854 |
| **State** | OPEN |
| **Author** | clintonb (Clinton Blackburn) |
| **Created** | 2025-12-04 01:17:12.000 UTC (27 days ago) |
| **Updated** | 2025-12-04 01:17:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

The docstring for the Otel `url` is incorrect/confusing. It states that `OTEL_EXPORTER_OTLP_ENDPOINT` will override the value provided. This appears to be incorrect given that there is no code that references the environment variable. Additionally, if such code existed, it would break metrics export since `OTEL_EXPORTER_OTLP_ENDPOINT` for HTTP is typically `http://localhost:4318` but this package expects a URL with the path (e.g., `http://localhost:4318/v1/metrics`).

https://github.com/temporalio/sdk-typescript/blob/6b89dfc95ebb8554e439a0f2b2c26d5783bfa1d7/packages/worker/src/runtime-options.ts#L225-L236

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Remove this note to avoid confusion.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->
N/A



---

### #1851: [Feature Request] Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1851 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:06.000 UTC (29 days ago) |
| **Updated** | 2025-12-02 17:20:06.000 UTC |
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

### #1850: [Feature Request] Implement OTel interceptors v1 as Plugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1850 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-12-02 15:09:54.000 UTC (29 days ago) |
| **Updated** | 2025-12-02 15:09:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

OTEL interceptors are awkward to use

### Describe the solution you'd like

Setting up OTEL should be as easy as
```
const plugin = new OpenTelemetryPlugin({resource: staticResource, traceExporter});
const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'test-otel',
    plugins: [plugin],
});

const client = new Client({
    plugins: [plugin],
});
```

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1843: Default maxCachedWorkflows calculation doesn't account for VM isolate memory being outside V8 heap

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1843 |
| **State** | OPEN |
| **Author** | alonp99 (Alon Peretz) |
| **Created** | 2025-11-27 04:41:54.000 UTC (1 months ago) |
| **Updated** | 2025-11-27 04:41:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

  The default maxCachedWorkflows formula uses maxHeapMemory (--max-old-space-size) to calculate
  how many workflows to cache. However, workflow VM isolates allocate native memory outside
  the V8 heap, not inside it.

  This causes unexpected OOMs in containerized environments where:
  1. --max-old-space-size is set high (e.g., 4.6GB) relative to container limit (5Gi)
  2. Temporal calculates maxCachedWorkflows = ~2600
  3. VM isolates consume ~2.6GB of NATIVE memory (not heap)
  4. Total memory = heap + VM cache + overhead > container limit → OOMKill

  Suggested improvements:
  1. Documentation: Warn that VM isolates use native memory, not heap memory
  2. Default calculation: Consider using a more conservative default, or factor in
     that VM cache is additive to heap usage
  3. Logging: Log a warning if calculated maxCachedWorkflows * ~1MB + maxHeapMemory
     exceeds available system memory

  Environment: TypeScript SDK 1.11.7, Node.js 22, Kubernetes


---

### #1838: [Bug] `WorkflowExecutionAlreadyStartedError` should contain `runId` if provided by server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1838 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-11-21 23:12:54.000 UTC (1 months ago) |
| **Updated** | 2025-11-21 23:12:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In most cases, on `WorkflowExecutionAlreadyStartedError`, the server provides the `runId` of the already running workflow execution. However, the TS SDK does not currently include that `runId` in the thrown `WorkflowExecutionAlreadyStartedError`. It should be.

### Misc

The `runId` is stored as part of the protobuf-encoded error details, which the TS SDK already knows how to decode. Extracting this extra detail should therefore be reasonably easy.


---

### #1824: [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1824 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:24:56.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:24:56.000 UTC |
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

### #1782: [Feature Request] Ensure tests exist to confirm custom slot supplier slot info has proper fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1782 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-05 12:31:02.000 UTC (3 months ago) |
| **Updated** | 2025-09-05 12:31:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/672


---

### #1779: [Bug] `@temporalio/interceptors-opentelemetry` OTEL bypasses a required SDK component

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1779 |
| **State** | OPEN |
| **Author** | sdedovic (Stevan Dedovic) |
| **Created** | 2025-08-29 16:56:46.000 UTC (4 months ago) |
| **Updated** | 2025-08-29 16:56:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
When using the `@temporalio/interceptors-opentelemetry` library I am seeing TONS of these errors:

```
ERROR --- node_modules/@opentelemetry/api/build/src/api/diag.js : ["Accessing resource attributes before async attributes settled"]
```

which are caused by the Temporal SDKs improper use of the OTEL SDK.

### Describe the bug
See this comment on the issue in the OTEL SDK: https://github.com/open-telemetry/opentelemetry-js/issues/5828#issuecomment-3227403161. To quote the linked comment, from one of the OTEL maintainers

> Looking at the code it looks like the following is happening:\
> -    @temporalio/interceptors-opentelemetry bypasses the SpanProcessor which is supposed to await the async attributes and passes spans directly to SpanExporter
> -    the SpanExporter then assumes that the resource was already awaited by the SpanProcessor, but since @temporalio/interceptors-opentelemetry bypassed the SpanProcessor this never happened.
> -    during normal operation of an OTel SDK, this log is not written - this happens since @temporalio/interceptors-opentelemetry bypasses a required SDK component.
>
> **Recommendation**: @temporalio/interceptors-opentelemetry should accept a SpanProcessor instead of a SpanExporter in [makeWorkflowExporter()](https://github.com/temporalio/sdk-typescript/blob/7c88cc7ab0d02f0002178ba03a349503d5bc481c/packages/interceptors-opentelemetry/src/worker/index.ts#L73-L90), and pass the spans to SpanProcessor#onEnd(Span) instead. This will properly await the resource attributes before exporting them, log errors and and handle batching in a user-configurable way, which may be desirable.



### Minimal Reproduction
See last comment on this issue: https://github.com/open-telemetry/opentelemetry-js/issues/5828#event-19364472301

```ts
export function makeWorkflowExporter(
  spanProcessor: SpanProcessor, // used with a BatchSpanProcessor for instance, which forwards to a SpanExporter
  resource: Resource
): InjectedSink<OpenTelemetryWorkflowExporter> {
  // note: somehow, `SpanProcessor#shutdown()` needs to be wired up somewhere to avoid data loss on shutdown.
  return {
    export: {
      fn: (info, spanData) => {
        const spans = spanData.forEach((serialized) => {
          Object.assign(serialized.attributes, info);
          // Spans are copied over from the isolate and are converted to ReadableSpan instances
          spanProcessor.onEnd(extractReadableSpan(serialized, resource));
        });
      },
    },
  };
}
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: x86_64-linux
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Temporal from source

### Additional context
This will affect https://github.com/temporalio/sdk-typescript/pull/1741



---

### #1775: [Feature Request] Support for creating v7 UUIDs from within Workflow Tasks

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1775 |
| **State** | OPEN |
| **Author** | roberto-retool |
| **Created** | 2025-08-26 17:59:35.000 UTC (4 months ago) |
| **Updated** | 2025-08-26 17:59:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
We currently use the `uuid4()` function pretty heavily to generate unique ids within Workflow Tasks. For some use cases we want to generate UUIDv7 IDs for better indexing and sorting semantics. We cannot use the `uuid` npm package because it depends on the `crypto` module.
We've already added this function to our codebase, but it'd be helpful to merge upstream to expand the functionality provided by `uuid4`. 

### Describe the solution you'd like

The function can have an identical signature to the [uuid4 function](https://github.com/temporalio/sdk-typescript/blob/5473ebd3442d00624fb0ed20fa82f8d5bd78e8fd/packages/workflow/src/workflow.ts#L1067).

e.g. our implementation is:
```
export function uuid7() {
  // Return the hexadecimal text representation of number `n`, padded with zeroes to be of length `p`
  const ho = (n: number, p: number) => n.toString(16).padStart(p, '0')

  // Get current timestamp in milliseconds since Unix epoch
  const msecs = Date.now()

  // Create a view backed by a 16-byte buffer
  const view = new DataView(new ArrayBuffer(16))

  // byte 0-5: timestamp (48 bits)
  // DataView only allows setting bits in 8, 16, 32, 64 increments, so set using 32 + 16 chunks.
  view.setUint32(0, Math.floor(msecs / 0x10000))
  view.setUint16(4, msecs & 0xffff)
  // byte 6-7: version (4 bits, 0x7) + random (12 bits)
  view.setUint16(6, (0x7 << 12) | ((Math.random() * 0x1000) >>> 0))
  // byte 8-9: variant (2 bits, we always use 0x2) + random (14 bits)
  view.setUint16(8, (0x2 << 14) | (((Math.random() * 0x100000) >>> 0) & 0x3fff))
  // bytes 10-15: random (48 bits)
  view.setUint32(10, (Math.random() * 0x100000000) >>> 0)
  view.setUint16(14, (Math.random() * 0x10000) >>> 0)

  // Compile the canonical textual form from the array data
  return `${ho(view.getUint32(0), 8)}-${ho(view.getUint16(4), 4)}-${ho(view.getUint16(6), 4)}-${ho(
    view.getUint16(8),
    4,
  )}-${ho(view.getUint32(10), 8)}${ho(view.getUint16(14), 4)}`
}
```

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1739: [Feature Request] Add `ActivityContext.workerShuttingDown`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1739 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-07-08 19:10:36.000 UTC (5 months ago) |
| **Updated** | 2025-07-08 19:10:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Other SDKs expose a way on activity context to know that a Worker is shutting down, before expiration of the grace period. TS doesn't.

That would be a `workerShuttingDown: Promise<never>` and `workerShuttingDownSignal: AbortSignal` on the activity Context, similar to how we handle cancellation, as well as matching functions as top level exports on `activity/index.ts`.

### Additional context

- https://docs.temporal.io/encyclopedia/workers/worker-shutdown
- https://pkg.go.dev/go.temporal.io/sdk/activity#GetWorkerStopChannel
- https://python.temporal.io/temporalio.activity.html#wait_for_worker_shutdown
- https://dotnet.temporal.io/api/Temporalio.Activities.ActivityExecutionContext.html#Temporalio_Activities_ActivityExecutionContext_WorkerShutdownToken




---

### #1722: [Feature Request] Include error details on every errors thrown from Client API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1722 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-06-03 17:05:14.000 UTC (7 months ago) |
| **Updated** | 2025-06-03 17:05:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

The concept of "error" at the grpc level is quite rigid and dry, consisting only of a message and an error code. To provide more context, the Temporal server sometime attaches an encoded error detail object as metadata on the error. We added support to decode these error details in #1147, which allows us to return specific, high level error classes to users in some specific cases (e.g. `NamespaceNotFoundFailure`).

It would not make sense to create a high level error classes for every error for which the server provides details, as the list of those errors is ever growing and many are very unlikely to ever happens in real life. Yet, users sometime need access to these error details to diagnose operational issues.

We should therefore always decode detailed error messages and make them available on the generic grpc errors, even if we don't make specific error classes for those details.

That however poses some challenges:

- Users wouldn't be able to use the `instanceof` operator to determine the exact type of error and which details are available, due to some oddities of how we do protobuf in the TS SDK;
 
- We'd likely want to see these details when an error is printed out, but they wouldn't be by default. Not even if doing `JSON.stringify`, unless the detailed properties are enumerable, which wouldn't be the case for objects coming from the protobuf library.
 
- Some error details may themselves contain other encoded protobuf objects, which needs to be decoded recursively. Can we dynamically determine which messages/properties contain recursively decodable messages, i.e. without implementing visitor logic for each of these error detail types?


---

### #1721: [Bug] Error thrown from Client's Update-with-Start doesn't show proper message

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1721 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-06-03 15:56:11.000 UTC (7 months ago) |
| **Updated** | 2025-06-03 15:56:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Due to the composed nature of the Update-with-Start API, the server reports errors from that API in an aggregated form, containing only a generic error message, `MultiOperation could not be executed`. The list of actual errors are attached as details to the aggregated error, using the `MultiOperationExecutionFailure` protobuf message type, which itself needs to be decoded to obtain actual underlying errors.

The Workflow Client already does some work to decode and extract a proper error message out of `MultiOperationExecutionFailure`. It then replace the grpc error's generic message by that more specific error message. We have tests that confirm that this behavior works properly.

However, it appears that printing out the grpc error prints the original, generic message rather than the proper, detailed one.

For instance, printing out `error` gives:

```
Error: 8 RESOURCE_EXHAUSTED: MultiOperation could not be executed.
    at callErrorFromStatus
    at Object.onReceiveStatus
    // ...
```

even though `error.message` contains:

```
limit on number of concurrent in-flight updates has been reached (10)
```

As users generally don't print out `error.message` explicitly to their logs, a user is left without a clue of what actually went wrong. A better behavior would be for the error to print out with a composed message, such as:

```
Error: 8 RESOURCE_EXHAUSTED Update-with-Start could not be executed: limit on number of concurrent in-flight updates has been reached (10)
    at callErrorFromStatus
    at Object.onReceiveStatus
    // ...
```


---

### #1717: [Bug] Protobuf Payload Converter is broken after upgrading to protobufjs 7.5.2

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1717 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-05-16 04:24:35.000 UTC (7 months ago) |
| **Updated** | 2025-05-16 05:05:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

After upgrading `protobufjs` to 7.5.2, our feature tests using Protobuf Payload converters have started failing with the following error message:

```
Feature data_converter/binary_protobuf failed with TypeError: Cannot read properties of undefined (reading '_fullyQualifiedObjects') TypeError: Cannot read properties of undefined (reading '_fullyQualifiedObjects')
    at Object.lookup (/home/runner/work/sdk-typescript/sdk-typescript/features/program-3122623612/node_modules/protobufjs/src/namespace.js:411:27)
    at Object.lookupType (/home/runner/work/sdk-typescript/sdk-typescript/features/program-3122623612/node_modules/protobufjs/src/namespace.js:491:22)
    at ProtobufBinaryPayloadConverter.validatePayload (/home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/converter/protobuf-payload-converters.js:58:37)
    at ProtobufBinaryPayloadConverter.fromPayload (/home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/converter/protobuf-payload-converters.js:99:44)
    at PayloadConverterWithProtobufs.fromPayload (/home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/converter/payload-converter.js:113:26)
    at /home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/converter/payload-converter.js:60:48
    at Array.map (<anonymous>)
    at arrayFromPayloads (/home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/converter/payload-converter.js:60:21)
    at decodeArrayFromPayloads (/home/runner/work/sdk-typescript/sdk-typescript/sdk-ts/packages/common/lib/internal-non-workflow/codec-helpers.js:89:54)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```

### Minimal Reproduction

The following feature tests demonstrate this issue:

- `data_converter/binary_protobuf`
- `json_protobuf`

All SDK integration tests still pass, including those testing the Protobuf Payload Converter feature. Our `protobufs` sample also execute without problem against 1.11.8 + protobufjs 7.5.2 (didn't test other combinations). Given that the latter are more representative of how users would normally use this feature, it seems reasonable to expect that this issue might not have any user visible impact.

### Misc

- The `_fullyQualifiedObjects` property [was introduced in protobufjs yesterday](https://github.com/protobufjs/protobuf.js/pull/2068/files).
- It seems likely that this upstream change may conflict with our ["Patch Protobuf Root"](https://github.com/temporalio/sdk-typescript/blob/3cbb5feae4188b1c5458d0edcfd2bb49c3feadff/packages/proto/src/patch-protobuf-root.ts#L20) logic.
- Due to technical constraints of our feature test harness, our feature tests reuse some protobuf message definitions of the SDK itself, rather than defining and compiling their own protobuf messages as one would normally do.


---

### #1716: [TypeScript] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1716 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-05-14 22:46:37.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 22:49:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments. See the Go one as an example (though it also needs some updating as of this writing)


---

### #1715: If a serializable value is provided as a SearchAttribute, serialize it instead of throwing the error: "SearchAttribute values must arrays of strings, numbers, booleans, or Dates. The value * at index 0 is of type object"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1715 |
| **State** | OPEN |
| **Author** | JCMais (Jonathan Cardoso) |
| **Created** | 2025-05-14 19:29:55.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 20:55:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

If an object is passed as a SearchAttribute, and it is not a Date, and it has a `toJSON` method, the `toJSON`method should be called, and only then should the validation happen.

E.g: this allows passing MongoDB ObjectIds as search attributes, as they have a `toJSON` that serializes to a String.


---

### #1713: [Feature Request] Pass webpack obj as the second parameter when calling webpackConfigHook

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1713 |
| **State** | OPEN |
| **Author** | JCMais (Jonathan Cardoso) |
| **Created** | 2025-05-10 22:47:20.000 UTC (7 months ago) |
| **Updated** | 2025-05-10 22:47:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Right now `webpackConfigHook` only receives the current webpack config, which means if we need to use things like `DefinePlugin`, the caller has to import webpack directly. This may cause issues as the caller may wrongly use a webpack version different from the one used by `@temporalio/worker`.

Ideally, we can do something like this:
```ts
webpackConfigHook(config, webpack) {
  // ... do something with webpack, such as 
  config.plugins.push(
      new webpack.DefinePlugin({
          'someValue': {},
      })
  )

  return config
}
```



---

### #1710: [Feature Request] Better type inference for `MockActivityEnvironment.run`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1710 |
| **State** | OPEN |
| **Author** | TastyPi (Graham Rogers) |
| **Created** | 2025-05-08 16:58:48.000 UTC (7 months ago) |
| **Updated** | 2025-05-08 16:58:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

This code:

```typescript
async function foo(): Promise<string> {
  return "foo";
}
const result = await new MockActivityEnvironment().run(foo);
result.startsWith("foo");
```

Does not compile with strict types because `result` is inferred to be `unknown` instead of `string`.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Change the signature of `MockActivityEnvironment.run` from:

```typescript
run<P extends any[], R, F extends ActivityFunction<P, R>>(fn: F, ...args: P): Promise<R>;
```

to

```typescript
run<F extends ActivityFunction>(fn: F, ...args: Parameters<F>): ReturnType<F>
```

I've checked this locally and it makes my example infer the type of `result` correctly.



---

### #1703: [Feature Request] Complete work on supporting `Client` over `NativeConnection`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1703 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2025-05-01 19:56:26.000 UTC (8 months ago) |
| **Updated** | 2025-07-01 21:10:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In #1699 we introduced partial support for `Client` over a `NativeConnection`. In particular, the following items still have to be implemented to provide a complete and reliable DX.

- [ ] Add support `OperatorService` and `HealthService`.
- [ ] Add bridge side support for accepting an inbound `AbortSignal`.
- [ ] Add support for missing Core's `Client` options that were meaningless for Worker-only use cases (e.g. `identity` and `retry_config`, anything else?). Double check with what we expose on `Connection` and what is exposed by other SDKs on their own `Client`.
- [ ] Ensure that any existing `Client` test covers both `Connection` and `NativeConnection` use cases.

Using `Client` over `NativeConnection` will be required to support Eager Workflow Start, which means that this usage may become dominant in some environments.




---

### #1702: [Bug] Test suite timeout on first run

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1702 |
| **State** | OPEN |
| **Author** | NavaraKoen |
| **Created** | 2025-05-01 15:19:23.000 UTC (8 months ago) |
| **Updated** | 2025-05-01 15:19:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Running a unit test in either Jest / Mocha on a bad internet connection / not-so-nice proxy :)

### Describe the bug

When running a unit test for the first time, it seems that the (latest?) SDK is being downloaded in the background first. The default timeout of mocha / Jest is like 2000ms, which is way less than the 20s timeout that is set for the download itself.
There is no informational message about this download being started, which would be a great debug starter.

In some cases, the download gets corrupted because of the abrupt interrupt. If you increase the jest / mocha timeout to >20s, you'll be able to spot the following message:
```
Failed to start ephemeral server: Temp download file at /var/folders/3w/4_q0ch0n763141t1zb61z_z80000gn/T/temporal-sdk-typescript-1.11.7.downloading not complete after 20 seconds. Make sure another download isn't running for too long and delete the temp file.
```

### Minimal Reproduction

- Pull the 102 project, for example: https://github.com/temporalio/edu-102-typescript-code
- Remove the existing SDK if it already exists
- `npm i` in any solution dir
- Break your internet connection, or throttle it significantly
- Run the test suite for the first time

Without any indication about a download going on - you'll receive a jest / mocha timeout after 2000ms, indicating that some test did not complete.

### Environment/Versions

- OS and processor: Mac M2
- Temporal Version: 1.11.7, temporal cli version 1.2.0 (I guess not relevant here, but putting it down anyways)

### Additional context

My suggestion is to trigger an informational message, but only when the download is required of course. Would have been an immense timesaver for our team, as we are behind a very unfriendly proxy that will block the download every now and then, causing all tests to fail for no apparent reason :)

Thanks in advance!



---

### #1696: [Feature Request] Otel exporter error handling

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1696 |
| **State** | OPEN |
| **Author** | cirias |
| **Created** | 2025-04-27 14:45:05.000 UTC (8 months ago) |
| **Updated** | 2025-04-28 02:13:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Temporal SDK silently ignores the error when the upstream exporter fails to export the spans. I ran into a issue that the `RunWorkflow` span is not exported when the upstream gRPC otel exporter was misconfigured (`concurrentLimit` was set to 1). The problem is otel exporter returns the error through the callback function while temporal sdk just ignores it which makes it harder to debug.

- https://github.com/temporalio/sdk-typescript/blob/5ff22f0f7f0ac9ed543bbd5dea3f6205cadafff5/packages/interceptors-opentelemetry/src/worker/index.ts#L86

- https://github.com/open-telemetry/opentelemetry-js/blob/6f753cca7e48466d8dad1ddf372f0e6caa60c256/experimental/packages/otlp-exporter-base/src/otlp-export-delegate.ts#L62

### Describe the solution you'd like

Add an optional callback parameter to the `makeWorkflowExporter`, and just pass it to the upstream exporter as its callback. This is the easiest solution. User will at least have a way to know about the error. We can also have a default implementation for it. Take `SimpleSpanProcessor` as an example, the default can just be [`globalErrorHandler`](https://github.com/open-telemetry/opentelemetry-js/blob/6f753cca7e48466d8dad1ddf372f0e6caa60c256/packages/opentelemetry-sdk-trace-base/src/export/SimpleSpanProcessor.ts#L65).


### Additional context

It will be an API change, but shouldn't be a breaking change, since the new callback parameter will be optional.

I can help to add this if you think this is a good approach. 


---

### #1687: [Bug] Temporal local env cannot be connected in unit tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1687 |
| **State** | OPEN |
| **Author** | eyal-ringwald-orchid |
| **Created** | 2025-04-22 08:48:21.000 UTC (8 months ago) |
| **Updated** | 2025-04-22 08:48:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

this is a bug report raised after opening a support issue #11853

During our unit tests we run local env (as part of the beforeAll of a suite) of temporal to run the workflow on the service and those tests became flaky since on the worker initialization the worker could not connect to the new temporal env.

### Describe the bug

the following code got an exception : 
      this.connection = await NativeConnection.connect(connectionOptions);

TransportError: tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 60, kind: TimedOut, message: "Operation timed out" })))            
    120 |         this.options.temporalConfig,
     121 |       );
 > 122 |       this.connection = await NativeConnection.connect(connectionOptions);
           |                         ^
    123 |     }
    124 |     return this.connection;
    125 |   }


the test looks like this : 
this is a sample of the test beforeAll beforeEach afterAll and afterEach , the test basically runs a service with temporal worker and its beforeAll fails on starting up the worker since it does not connect.

beforeAll(async () => {
    const port = await getFreePort();
    originalEndpoint = process.env.TEMPORAL_ENDPOINT;
    process.env.TEMPORAL_ENDPOINT = `localhost:${port}`;
    env = await TestWorkflowEnvironment.createLocal({
      server: { namespace: 'default', port, ui: false },
    });
 })
 beforeEach(async () => {

    jest.clearAllMocks();
    installSpy.mockImplementation();
    getCreationCycleIdSpy = jest
      .spyOn(GetEntitiesUpdatesService.prototype, 'getCreationCycleId')
      .mockResolvedValue({
        [Entities.APPLICATIONS]: creationCycleId,
        [Entities.GROUPS]: creationCycleId,
        [Entities.POLICIES]: creationCycleId,
        [Entities.SERVICE_PRINCIPALS]: creationCycleId,
        [Entities.USERS]: creationCycleId,
      });

    getAppsByIdsSpy = jest
      .spyOn(
        InitIntegrationForSpecificIdsService.prototype,
        'getAppsByIds',
      )
      .mockResolvedValue({
        dataPersistentResult: {
          failed: [
            { entityName: '1', id: '1', success: false },
            { entityName: '2', id: '2', success: false },
          ],
          originalNumberOfPayloads: 3,
          success: [{ entityName: '3', id: '3', success: true }],
        },
      });
   ....

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app?.close();
    })

  afterAll(async () => {
    process.env.TEMPORAL_ENDPOINT = originalEndpoint;
    await env?.teardown();
  });


### Minimal Reproduction

this is not reproducible in simple test , but only when a large set of suites running together. we run the jest tests in band for the service. it smells that the number of tests is the cause for the issue so it might be related to resources issue.
we have around 10 suites that running such tests with same pattern of running the local env in each suite.

### Environment/Versions

- OS and processor: Apple M3 Pro sequia 15.3.2
- Temporal Version: 1.11.3
- Are you using Docker or Kubernetes or building Temporal from source? we use packages from npm. our services are deployed on docker in kubernetes , but the issue is about running a test in my development computer.

### Additional context

we use nestjs.
the test does not fail when runing it singularily.
I tried to create the local env for each test as well but it did not help.
we use runInBand option to run the tests sequentially and not in parallel.
as a workaround i was advised  by the support team to do retries until i can connect to the local env. it works.


---

### #1673: [Feature Request] Add support for batched result retrieval executions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1673 |
| **State** | OPEN |
| **Author** | akaNightmare (Ivan) |
| **Created** | 2025-04-10 06:52:30.000 UTC (8 months ago) |
| **Updated** | 2025-04-10 06:52:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Hello,
for some reason need to create the report (CSV) from the ALL workflow execution results, how it looks now:
```ts
async function* fetchWorkflowExecutionResults({ workflowClient, namespace, companyId }) {
  let nextPageToken: Uint8Array | undefined;
  do {
        const workflows = await workflowClient.workflowService.listWorkflowExecutions({
            namespace,
            query: `ExecutionStatus="Completed" AND WorkflowType="createCompanyWorkflow" AND companyId="${companyId}`,
            nextPageToken,
        });
        nextPageToken = workflows.nextPageToken;

        for (const wf of workflows.executions) {
          const result = await workflowClient
                    .getHandle(wf.execution.workflowId, wf.execution.runId)
                    .result();
          yield {
            company_id: result.company_id,
            field1: result.field1,
            field2: result.field2,
            another_field: result.another_field,
          };
        }
  } while (nextPageToken?.byteLength);
}
```
it's working as expected for any amount of the executions, but it takes around ~1min to process 1000 executions, so for 1KK executions -> ~1000 minutes, which is not acceptable for my purposes.

### Describe the solution you'd like
For faster processing, I can chunk workflows.executions (e.g., in batches of 50 or 100) using Promise.all(). However, I'm not sure if this is the correct behavior — it might make more sense to add a separate method for this.



---

### #1653: [Bug] Broken Documentation Link

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1653 |
| **State** | OPEN |
| **Author** | sdedovic (Stevan Dedovic) |
| **Created** | 2025-03-17 21:01:52.000 UTC (9 months ago) |
| **Updated** | 2025-03-17 21:01:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am learning how to build and deploy typescript workers. Some examples use code that has doctoring with broken links. I have been unable to find the documentation anywhere on the docs site. Guidance is appreciated.

### Describe the bug

The following link is in the docstrings: https://docs.temporal.io/typescript/production-deploy#pre-build-code

and it does not resolve. I cannot find any supplemental documentation, but this seems quite important from the code.

This is the code: https://github.com/temporalio/sdk-typescript/blob/main/packages/worker/src/worker-options.ts#L158 

### Minimal Reproduction

Interaface `WorkerOptions`, field `workflowBundle`,

```ts
  /**
     * Use a pre-built bundle for Workflow code. Use {@link bundleWorkflowCode} to generate the bundle. The version of
     * `@temporalio/worker` used when calling `bundleWorkflowCode` must be the exact same version used when calling
     * `Worker.create`.
     *
     * This is the recommended way to deploy Workers to production.
     *
     * See https://docs.temporal.io/typescript/production-deploy#pre-build-code for more information.
     *
     * When using this option, {@link workflowsPath}, {@link bundlerOptions} and any Workflow interceptors modules
     * provided in * {@link interceptors} are not used. To use workflow interceptors, pass them via
     * {@link BundleOptions.workflowInterceptorModules} when calling {@link bundleWorkflowCode}.
     */
    workflowBundle?: WorkflowBundleOption;
```




---

### #1647: [Feature Request] Add summary to Nexus operation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1647 |
| **State** | OPEN |
| **Author** | Quinn-With-Two-Ns (Quinn Klassen) |
| **Created** | 2025-03-11 18:41:55.000 UTC (9 months ago) |
| **Updated** | 2025-03-11 18:41:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://github.com/temporalio/features/issues/610


---

### #1635: [Feature Request] Rehydrate TypedSearchAttributes for sinks or provide WorkflowInfo variant

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1635 |
| **State** | OPEN |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-02-28 20:31:45.000 UTC (10 months ago) |
| **Updated** | 2025-02-28 20:31:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Result of discussion in #1612

Relevant comment: https://github.com/temporalio/sdk-typescript/pull/1612#discussion_r1965918825




---

### #1626: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1626 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:20.000 UTC (10 months ago) |
| **Updated** | 2025-02-11 20:44:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

### #1616: [Feature Request] Add memoization support to the`patched()` API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1616 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:43:01.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:43:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add a `memoized` argument to the `patched` and `deprecatePatch` APIs.

- Keep backward compatibility on those functions for non-specifying the `memoized` argument, but deprecate those signatures. Make sure documentation clearly indicate how existing calls may safely get converted.

- Delegate handling of the `patched` logic to Core.

See temporalio/features#591 for details.


---

### #1549: [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1549 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-21 16:30:16.000 UTC (1y 2m ago) |
| **Updated** | 2024-12-17 21:16:01.000 UTC |
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

### #1542: [Feature Request] Allow Update Validators to be async

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1542 |
| **State** | OPEN |
| **Author** | mloffer (Micah Loffer) |
| **Created** | 2024-10-09 00:22:40.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-09 00:22:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

I would like to be able to use async operations inside of [Update Validators](https://docs.temporal.io/develop/typescript/message-passing#updates).

#### Use Case
I need to check complex access controls via a database query (e.g. state of an object in the database; ACL/ABAC/etc), and return an error to the caller if not allowed.

### Describe the solution you'd like

Asynchronous Update Validators.

### Additional context

While the Temporal documentation is fairly clear that Validators must be synchronous, there still seems to be a reasonable expectation that any and everything can be async, as demonstrated by this line in the [temporalio/samples-typescript](https://github.com/temporalio/samples-typescript/blob/486d428b2b56701e7eaa976e40dc55f3abc25c79/message-passing/safe-message-handlers/src/workflows.ts#L30) repo. I originally copied this pattern before discovering that Temporal treats async validators as though they are Activities, i.e. logging them to the Workflow Event History and not returning errors to the caller. (So if this feature request is rejected, that code should at least be updated so as not to be misleading.)

#### Alternatives
I can convert my access control validators (or anything else that requires async logic) to Activities and call them from their respective Update handlers. However, this will litter the Workflow Event History with largely irrelevant information, and will also require additional logic to poll the Workflow for the result of the access control Activity to see if the Update was even allowed.


---

### #1512: [Bug] Payload converter error can crash worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1512 |
| **State** | OPEN |
| **Author** | ikonst (Ilya Priven) |
| **Created** | 2024-09-11 18:55:27.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-11 18:55:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Use the EJSON payload converter to serialize all my payload (including error details) without risking my workers crashing.

**Why?** I'm using `ApplicationError`'s `details` to marshal exceptions from activity to workflow. Sometimes due to our own bugs and inattentiveness, we'd try to pass arbitrary objects (non necessarily JSONfiable) as the "details".

### Describe the bug

I've used the EJSON payload converter almost verbatim in my code. The converter throws an error when the payload cannot be converted (due to unknown type, cyclic JSON etc.):
```ts
throw new UnsupportedEjsonTypeError(
  `Can't run EJSON.stringify on this value: ${value}. Either convert it (or its properties) to EJSON-serializable values (see https://docs.meteor.com/api/ejson.html ), or create a custom data converter. EJSON.stringify error message: ${
    errorMessage(
      e,
    )
  }`,
  e as Error,
);
```

If this occurs when converting an activity's response, no harm done since this will be caught by the try-catch that's responsible for catching all of the activity's errors.

However, if this happens when encoding e.g. the `details` of an `ApplicationError`, this error will escape the `Worker.run` and effectively crash the worker.

### Minimal Reproduction

From your activity:
```
const cyclic: any = {};
cyclic["self"] = cyclic;
throw ApplicationFailure.create({
  message: "some error",
  type: "SomeError",
  nonRetryable: true,
  details: [cyclic],
});
```

### Environment/Versions

Version 1.9.3


---

### #1486: Review use of `untrackPromise` in update implementation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1486 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-06 16:00:11.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-06 16:06:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See e.g. https://github.com/temporalio/sdk-typescript/pull/1459#discussion_r1705660588 and https://github.com/temporalio/sdk-typescript/pull/1459#discussion_r1705654386


---

### #1472: [Feature Request] Add website documentation for updates

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1472 |
| **State** | OPEN |
| **Author** | Cyberuben (Ruben Rutten) |
| **Created** | 2024-07-22 22:24:40.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-22 22:24:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

The [TypeScript SDK documentation](https://docs.temporal.io/develop/typescript/message-passing) doesn't contain any documentation on how to use updates. The Go, Java, PHP, Python and .NET docs seem to cover this, so I was able to read into some information.

### Describe the solution you'd like

TypeScript documentation to be added, with code snippets on how to use updates.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #1420: [Feature Request] Clean API to intentionally fail an activity in long-polling patterns

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1420 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-05-15 19:26:25.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-15 19:26:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Description

A common Temporal pattern is to have an activity that periodically polls an external service, and only completing successfully if the external service returned new data. That is, the activity will intentionally fail with a retryable failure if the poll operation returned nothing new. At present, the SDK's activity worker logs each of these intentional activity failures at WARN level, which creates undesirable noise.

It would be nice to have a specific API for activities to "intentionally fail so that the activity task is retried", which would not cause extra logging. This could take the form of a special type of exception, similar to `CompleteAsyncError`, a special return value that could be returned from the activity function, or some function attached to the activity context that would internally throw the exception (similar to how `continueAsNew()` currently works).


---

### #1418: [Feature Request] Failures thrown from within the update handler should be able to fail the workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1418 |
| **State** | OPEN |
| **Author** | ThomasBurgess2000 (Thomas Burgess) |
| **Created** | 2024-05-14 04:04:46.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-14 04:04:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Currently it's a bit clumsy to fail a workflow from within an update. You have to set a flag in your updateMethod, and then in the workflow code watch for that flag and throw the failure from there (according to [this post](https://community.temporal.io/t/fail-workflow-form-updatemethod/11441/3) re: the java sdk at least).

### Describe the solution you'd like

`throw ApplicationFailure` should return (or at least have the option to return) `WorkflowFailedError` instead of `WorkflowUpdateFailedError`.

### Additional context

There is a similar issue active in the Java SDK repo: https://github.com/temporalio/features/issues/650



---

### #1415: [chore] Update repo to NPM 7 workspaces

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1415 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-05-08 20:09:28.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-08 20:12:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Description

Now that we dropped support for Node 14, we can update our repo to use native NPM support for workspaces. Can also update to [lerna 7](https://github.com/lerna/lerna/releases/tag/7.0.0).


---

### #1412: [Feature Request] Client replacement in worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1412 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-03 20:15:30.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-03 20:20:39.000 UTC |
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

### #1405: [Bug] Check worker code for unsafe type assertions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1405 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2024-04-30 14:46:22.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-30 14:46:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

There are some places in the SDK where we expect some protobuf fields to be non-null (because the server effectively never return a null value for that field), even though the field isn't technically _guaranteed_ to be non-null. This might result in unexpected errors if the server code's behavior is eventually modified.

We need to review all type assertions, and determine either these assertions are justified, and fix any case where they aren't.


---

### #1358: [Feature Request] Configurable workflow failure exception types

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1358 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-12 14:24:42.000 UTC (1y 10m ago) |
| **Updated** | 2025-01-29 16:21:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 2 |

#### Description

### Describe the solution you'd like
See https://github.com/temporalio/features/issues/322




---

### #1337: [Feature Request] Add workflow update tests to nightly suite

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1337 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2024-01-10 18:12:35.000 UTC (1y 11m ago) |
| **Updated** | 2024-01-10 18:12:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We added the feature without running stress tests for it in CI


---

### #1289: [Feature Request] Allow manual pagination when listing workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1289 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-13 13:16:21.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-13 13:16:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users should be able to manually page one at a time if they choose. Some users are using this list to power a UI, but we are hiding the pagination. Python does this by accepting the token on the call if the user wants and providing the token and page information on the response. But this issue doesn't recommend a specific way to do this, just that manual pagination should be possible.


---

### #1258: [Feature Request] Provide nicer error messages on TLS CA cert not found errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1258 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-10-10 18:05:13.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-10 18:05:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Description

At the moment, if root CA certificates are not available locally (ie. running with `-slim` docker images), then the error message is cryptic and inconsistent depending if using client API or worker API, and its not clear for users what they need to do to fix this.

Also, some users are reporting that the documented solution for such cases (eg. install the `ca-certificates` package) is not sufficient in their environment to make Core SDK work.

Example of error message they see:

```
TransportError: tonic::transport::Error(Transport, hyper::Error(Connect, Custom { kind: InvalidData, error: InvalidCertificateData("invalid peer certificate: UnknownIssuer") }))
      at Function.connect (/usr/src/app/node_modules/@temporalio/worker/src/connection.ts:51:15)
```

We should make sure that SDK provides easy to understand error messages whenever that's possible.


---

### #1174: [Bug] SDK should drop signals for which it cannot decode payloads

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1174 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-17 05:56:21.000 UTC (2y 5m ago) |
| **Updated** | 2025-02-07 03:46:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In Go and Java we drop signals whose args can't be deserialized, we should here too. This is likely not considered a backwards incompatible behavior change.




---

### #1139: [Feature Request] TemporalFailure from converters and codecs should be able to fail the workflow not task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1139 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-06-20 18:47:21.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-20 18:47:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

### #1054: Add `TelemetryOptions.logging` object format to API ref

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1054 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2023-02-12 19:34:56.000 UTC (2y 10m ago) |
| **Updated** | 2025-02-07 03:50:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://typescript.temporal.io/api/interfaces/worker.TelemetryOptions#logging

Currently it's just `Object`:

![](https://user-images.githubusercontent.com/251288/218332978-3dc84f54-1fac-41de-be1a-8ac427681c90.png)




---

### #1010: Validate single version of packages

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/1010 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2023-01-03 03:02:38.000 UTC (2y 12m ago) |
| **Updated** | 2025-02-07 03:50:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Users run into errors when they accidentally have multiple versions of our packages installed, [for example this](https://temporalio.slack.com/archives/C01DKSMU94L/p1652818373741859?thread_ts=1652817509.439369&cid=C01DKSMU94L).

### Describe the solution you'd like
Roey: 

* we should add some validation for this, e.g. export the version from worker-interface.ts and check on the worker side
* We should also verify in the workflow context that only 1 version of @temporalio/workflow is imported




---

### #962: [Feature Request] Allow creating patches before the workflow has started

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/962 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-11-10 21:30:44.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-10 21:30:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

With the current sandbox approach we apply patch notifications before user code is evaluated which means we could technically remove this restriction.
One thing to consider is that we won't be able to add interception capabilities to patch calls if we allow top level (static) patches.


---

### #945: [Feature Request] Add client interceptor for `list` and `fetch_history`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/945 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-11-01 22:11:53.000 UTC (3y 2m ago) |
| **Updated** | 2024-09-27 16:42:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, good first issue |
| **Assignees** | None |
| **Milestone** | None |

#### Description

`list` was implemented in https://github.com/temporalio/sdk-typescript/pull/942 and is missing an interceptor.
`fetch_history` is not yet implemented, make sure it is interceptable when done.


---

### #830: [Feature Request] Remove `sourceMap` and `sourceMapPath`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/830 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-08-19 23:57:51.000 UTC (3y 4m ago) |
| **Updated** | 2022-08-19 23:57:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, next-gen |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Made irrelevant in https://github.com/temporalio/sdk-typescript/pull/819
Deprecated in https://github.com/temporalio/sdk-typescript/pull/827


---

### #828: [Feature Request] Throw when `heartbeat()` is called from Local Activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/828 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-08-19 23:54:28.000 UTC (3y 4m ago) |
| **Updated** | 2022-08-19 23:54:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, next-gen |
| **Assignees** | None |
| **Milestone** | None |

#### Description

This is what Python does. It's a way to indicate to users that they don't need that line of code (which currently is ignored / has no effect).


---

### #730: [Docs] Make method overloads more obvious in docs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/730 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-06-27 23:48:48.000 UTC (3y 6m ago) |
| **Updated** | 2022-11-23 22:37:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | documentation |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Hard to notice that a fn has overloads, for example:

![image](https://user-images.githubusercontent.com/251288/176055679-46021141-9da7-4b14-bed4-dfdbf2bf7397.png)


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Some visual change, and maybe a list of options (preferably linked) under the header:

<img width="197" alt="image" src="https://user-images.githubusercontent.com/251288/176055907-6f5f1c27-b9f6-4614-a464-64d6fcf736ed.png">

Like 

```
# condition

- condition(fn, timeout)
- condition(fn)

## condition(fn, timeout)

...

## condition(fn)

...
```


---

### #555: [Feature Request] Remote codec converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/555 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-03-22 15:34:53.000 UTC (3y 9m ago) |
| **Updated** | 2025-10-06 15:12:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Add the equivalent of `NewRemoteDataConverter` in Go

https://github.com/temporalio/sdk-go/blob/706516c7077ba2e9b40304aeddbed47e25b2a68f/converter/codec.go#L350


---

### #514: [Feature Request] Run headers through codec

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/514 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-03-07 23:33:47.000 UTC (3y 9m ago) |
| **Updated** | 2022-06-30 17:08:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As discussed on slack: by default, don't put headers through codec / custom data converter, except for otel baggage.

Putting otel baggage through the codec requires passing contextual info to `Codec.encode/decode`. And if we're going to do that, perhaps we want to allow users to have the codec be run on their other headers?

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

For future reference, `setBaggage` returns a new context:

```ts
import { context, propagation } from '@opentelemetry/api';
    const baggage = propagation.createBaggage({ test: { value: 'true' } });
    const newContext = propagation.setBaggage(context.active(), baggage);
```


---

### #444: [Feature Request] Warn user when sending unregistered signal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/444 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-01-10 02:27:41.000 UTC (3y 11m ago) |
| **Updated** | 2024-12-17 21:30:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

When a user sends an unregistered signal, `handle.signal()` succeeds.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

They likely meant to send a registered signal and are wondering why their signal handler isn't running. We can provide clarity by logging a warning in development. It would be nice if the Client logged, but I don't think there's currently a [way for it to know](temporalio/sdk-features#51), so the Worker can log:

```
Warning: Workflow "my-workflow-id" received signal "fooSignal" but does not have a handler registered for "fooSignal". This may be due to:
- "fooSignal" is misspelled, either on the Client or in the Workflow.
- You haven't yet called `setHandler` for "fooSignal" in the Workflow.
- This Worker is running with an outdated version of your Workflow code that doesn't call `setHandler`. Try restarting this Worker process.
```

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

Slack discussion: https://temporaltechnologies.slack.com/archives/C01FT8U10GK/p1640455191114100

Note that this isn't an issue for queries. `await handle.query(unregisterdQuery)` throws with: `Workflow did not register a handler for unregisterdQuery`


---

### #417: [Feature Request] Export SDK version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/417 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-12-03 15:33:47.000 UTC (4 years ago) |
| **Updated** | 2024-12-10 19:29:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, good first issue |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Need version at runtime like other SDKs

### Describe the solution you'd like

Currently can get at a worker level via `import pkg from '@temporalio/worker/lib/pkg';` and `pkg.version` or by using the `package.json` directly, but should be in a more blessed/official place. Unsure whether this is in the meta package or common package or what.


---

### #360: Make tracing tags consistent across SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-typescript/issues/360 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2021-11-08 14:35:52.000 UTC (4y 1m ago) |
| **Updated** | 2025-02-04 18:24:27.000 UTC |
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
* Java: https://github.com/temporalio/sdk-java/issues/862




