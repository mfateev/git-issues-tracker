# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-06-16
**Total Open Issues:** 258
**Total Closed Issues:** 157
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

---

## Overview

The Features repository contains cross-SDK conformance tests and feature implementations. It functions primarily as the **specification tracker for cross-SDK feature parity** — most issues are not bugs in the test harness itself but proposals or tracking issues for capabilities that should be implemented consistently across all Temporal SDKs (Go, Java, TypeScript, Python, .NET, PHP, Ruby).

Issue categories include:
- Cross-SDK feature parity gaps (the dominant category)
- Test infrastructure, harness, and cloud-compatibility test failures
- Dependency security vulnerabilities (transitive CVE reports)
- A small number of test-related bugs and documentation gaps

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Feature Coverage / Cross-SDK Parity | ~229 | Medium - SDK parity |
| Test Infrastructure & Harness | ~12 | Medium |
| Bugs (functional) | 5 | High |
| Security (transitive dependency CVEs) | 5 | High |
| Documentation | 3 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) on Open | 115 |
| Total Comments on Open | 404 |
| Issues with Upvotes | 33 (13%) |
| Issues with Comments | 130 (50%) |
| Average Age (days) | 898 |
| Stale Issues (>12 months) | 175 (68%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 38% (157/415) |
| Median Time to Close (calendar) | 133 days |
| Median Time to Close (business) | 95 days |
| 90th Percentile (calendar) | 818 days |
| Resolved within 30 days | 31% |
| Resolved within 90 days | 45% |
| Avg Time to Close (calendar) | 270 days |

The Features repo has a **slow but steady resolution cadence**. Most issues that close get completed as features (55%) or self-resolved (16%); only 5% close as explicit bug fixes, reflecting the spec/tracking nature of this repo.

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 70 | 42 | **+28** |

📈 **Backlog Growing:** 28 more issues opened than closed in the last 12 months. The last 6 months added 35 issues against 22 closures (+13). The backlog has been growing every quarter — driven by ongoing Nexus, worker-versioning, and external-payload-storage roadmap work that generates per-SDK tracking issues.

---

## Top Issues by Engagement

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 17 | 23 | [Feature Request] Declarative schedules: upsert, sync, terraform |
| 2 | [#399](https://github.com/temporalio/features/issues/399) | 15 | 12 | Custom Markers for Workflow History/Timeline |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 14 | 4 | Add support for unit testing workflow versioning |
| 4 | [#558](https://github.com/temporalio/features/issues/558) | 3 | 21 | Add WorkflowIdConflictPolicy in child workflow options |
| 5 | [#562](https://github.com/temporalio/features/issues/562) | 7 | 6 | [Feature Request] Session support (TypeScript) |
| 6 | [#443](https://github.com/temporalio/features/issues/443) | 0 | 18 | [Feature Request] Implement activity task poll limit |
| 7 | [#434](https://github.com/temporalio/features/issues/434) | 7 | 1 | [Feature Request] Serialization context for codecs and converters |
| 8 | [#229](https://github.com/temporalio/features/issues/229) | 6 | 2 | [Feature Request] Auto heartbeating |
| 9 | [#51](https://github.com/temporalio/features/issues/51) | 0 | 13 | [Feature Request] Standardize method for listing workflow queries/signals |
| 10 | [#563](https://github.com/temporalio/features/issues/563) | 0 | 12 | Tag workflow_failed counter metric with exception type |
| 11 | [#257](https://github.com/temporalio/features/issues/257) | 0 | 12 | Update API: support not writing history when calling external services |
| 12 | [#363](https://github.com/temporalio/features/issues/363) | 4 | 0 | [Feature Request] Work around gRPC message-size limit for tasks |
| 13 | [#69](https://github.com/temporalio/features/issues/69) | 0 | 10 | [Feature Request] Specify reset point in workflow code |
| 14 | [#25](https://github.com/temporalio/features/issues/25) | 3 | 6 | [Feature Request] Expose workflow_started metric |
| 15 | [#377](https://github.com/temporalio/features/issues/377) | 0 | 9 | Support an option to disable "Close" timeouts for indefinitely running activities |

---

## Feature Coverage Gaps

The vast majority of open issues are cross-SDK parity tracking issues — features that exist (or are planned) in one or two SDKs and need to be brought to the rest. Below are the most-cited parity gaps grouped by the SDK(s) trailing behind.

### Missing / Lagging Features by SDK

| SDK | Notable Gaps |
|-----|--------------|
| **TypeScript** | Sessions ([#562](https://github.com/temporalio/features/issues/562)); Nexus operation info exposure ([#674](https://github.com/temporalio/features/issues/674)); features-harness client interceptor config ([#353](https://github.com/temporalio/features/issues/353)); codec headers ([#331](https://github.com/temporalio/features/issues/331)) |
| **Python** | Codec headers ([#331](https://github.com/temporalio/features/issues/331)); context propagation interceptors ([#206](https://github.com/temporalio/features/issues/206)) |
| **Go** | Codec headers ([#331](https://github.com/temporalio/features/issues/331)); dynamic activity display names ([#383](https://github.com/temporalio/features/issues/383)); workflow-level activity options ([#174](https://github.com/temporalio/features/issues/174)) |
| **Java** | Codec headers ([#331](https://github.com/temporalio/features/issues/331)); standalone activities ([#706](https://github.com/temporalio/features/issues/706)) |
| **.NET** | HTTP CONNECT proxy ([#323](https://github.com/temporalio/features/issues/323)); standalone activities ([#706](https://github.com/temporalio/features/issues/706)) |
| **Ruby** | Many cross-SDK trackers list Ruby as pending (sessions, plugin system, payload visiting, etc.) |
| **PHP** | Several Nexus/standalone-activity trackers list PHP as pending |
| **Core-based (TS/Python/.NET/Ruby)** | Mutable side effects ([#561](https://github.com/temporalio/features/issues/561)); post-completion commands ([#481](https://github.com/temporalio/features/issues/481)); gRPC binary metadata ([#671](https://github.com/temporalio/features/issues/671)) |

### Cross-SDK Feature Requests (Umbrella / High-Impact)

The following are large initiatives touching every SDK:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#609](https://github.com/temporalio/features/issues/609) | Nexus Implementation | Umbrella tracker for Nexus support across all SDKs and CLI (severity: high) |
| [#726](https://github.com/temporalio/features/issues/726) | Worker Versioning (OSS v1.30 GA) | RoutingConfigUpdateState, Upgrade-on-CaN, Backlog Stats, Task Queue stats |
| [#706](https://github.com/temporalio/features/issues/706) | Standalone Activities | Execute activities without a workflow context — client + worker + server APIs |
| [#822](https://github.com/temporalio/features/issues/822) | Standalone-Activity Operator Commands | Pause/Unpause/Reset/UpdateOptions/Cancel/Terminate |
| [#652](https://github.com/temporalio/features/issues/652) | Plugin System | Unified plugin model for dataconverters, sandboxes, activities, interceptors |
| [#684](https://github.com/temporalio/features/issues/684) | Plugin-based contrib integrations | Move OpenTelemetry / contrib integrations to plugin model |
| [#765](https://github.com/temporalio/features/issues/765) | External Payload Storage | SDK abstraction for offloading large payloads (S3, etc.) |
| [#783](https://github.com/temporalio/features/issues/783) | Pre-built S3 driver | Companion to #765 |
| [#294](https://github.com/temporalio/features/issues/294) | Safe Deploys API | Worker versioning public-preview API |
| [#118](https://github.com/temporalio/features/issues/118) | Declarative Schedules | Upsert / sync / terraform-friendly schedule management |
| [#119](https://github.com/temporalio/features/issues/119) | upsertMemo | Modify memos from inside a workflow |
| [#591](https://github.com/temporalio/features/issues/591) | `patched()` / `deprecatePatch()` standardization | Cross-SDK memoization + behavior |
| [#677](https://github.com/temporalio/features/issues/677) | Activity Idempotency Identifier | Stable id across activity retries |
| [#229](https://github.com/temporalio/features/issues/229) | Auto-heartbeating helpers | SDK-level periodic heartbeat utilities |
| [#27](https://github.com/temporalio/features/issues/27) | Unified gRPC retry | Same retry behavior across Core/TS/Python/Go/Java |

### Cross-Cutting Theme: Metrics Standardization

Roughly 15 open issues request new or standardized metrics:

| Issue | Description |
|-------|-------------|
| [#607](https://github.com/temporalio/features/issues/607) | Umbrella: cross-SDK metrics standardization (reduce unintentional deviation) |
| [#25](https://github.com/temporalio/features/issues/25) | `workflow_started` metric |
| [#98](https://github.com/temporalio/features/issues/98) | `worker_task_slots_total` metric |
| [#175](https://github.com/temporalio/features/issues/175) | Cron end-to-end latency excludes `firstWorkflowTaskBackoff` |
| [#167](https://github.com/temporalio/features/issues/167) | `local_activity_execution_failed` naming alignment |
| [#268](https://github.com/temporalio/features/issues/268) | Update API SDK-side metrics (UpdateRejected/Accepted/Completed) |
| [#392](https://github.com/temporalio/features/issues/392) | Total worker task slots metric |
| [#563](https://github.com/temporalio/features/issues/563) | Tag `workflow_failed` with exception type |
| [#634](https://github.com/temporalio/features/issues/634) | `UnhandledCommand` failure_reason tag |
| [#636](https://github.com/temporalio/features/issues/636) | `task_queue` tag on `long_request_latency` |
| [#639](https://github.com/temporalio/features/issues/639) | `unregistered_activity_invocation` metric |
| [#656](https://github.com/temporalio/features/issues/656) | Consistent unregistered-activity metrics across SDKs |
| [#666](https://github.com/temporalio/features/issues/666) | `BadScheduleActivityAttributes` failure_reason tag |
| [#702](https://github.com/temporalio/features/issues/702) | `activity_fail_endtoend_latency` metric |
| [#376](https://github.com/temporalio/features/issues/376) | Payload size metrics (approaching 2MB limit) |
| [#651](https://github.com/temporalio/features/issues/651) | Distinguish client-side vs service-side poll-rate limiting |
| [#146](https://github.com/temporalio/features/issues/146) | Eagerly initialize Prometheus counters |

### Cross-Cutting Theme: Nexus

Nexus support and ergonomics across SDKs:

| Issue | Description |
|-------|-------------|
| [#609](https://github.com/temporalio/features/issues/609) | Umbrella: Nexus implementation across SDKs |
| [#610](https://github.com/temporalio/features/issues/610) | Nexus operation `Summary` field |
| [#664](https://github.com/temporalio/features/issues/664) | Sync Nexus operation examples + docs |
| [#673](https://github.com/temporalio/features/issues/673) | Expose Nexus request deadline in context |
| [#674](https://github.com/temporalio/features/issues/674) | TS: expose Nexus operation info (namespace, task queue) |
| [#678](https://github.com/temporalio/features/issues/678) | Add Nexus service/op info to serialization context |
| [#658](https://github.com/temporalio/features/issues/658) | Nexus testing environment (mock/trigger scenarios) |
| [#805](https://github.com/temporalio/features/issues/805) | Add `Endpoint` field to `NexusInfo` |
| [#806](https://github.com/temporalio/features/issues/806) | Detect if executing within Nexus Operation Handler |

### Cross-Cutting Theme: Worker Versioning & Deployment

| Issue | Description |
|-------|-------------|
| [#726](https://github.com/temporalio/features/issues/726) | OSS v1.30 GA versioning (Upgrade-on-CaN, RoutingConfigUpdateState, etc.) |
| [#294](https://github.com/temporalio/features/issues/294) | Safe Deploys API |
| [#591](https://github.com/temporalio/features/issues/591) | Standardize `patched()` / `deprecatePatch()` |
| [#427](https://github.com/temporalio/features/issues/427) | Standardize unknown SDK-flag handling on replay |
| [#143](https://github.com/temporalio/features/issues/143) | Use `worker_may_ignore` flag on history events |
| [#142](https://github.com/temporalio/features/issues/142) | Send client capabilities in gRPC metadata |
| [#91](https://github.com/temporalio/features/issues/91) | `supported-features` header to server |
| [#729](https://github.com/temporalio/features/issues/729) | Surface worker-deployment limit failures (silent retry today) |
| [#845](https://github.com/temporalio/features/issues/845) | Auto-label worker metrics with deployment_name / build_id |
| [#649](https://github.com/temporalio/features/issues/649) | Unit-testing for versioned workflows |

### Cross-Cutting Theme: External Payload / Large Payloads

| Issue | Description |
|-------|-------------|
| [#765](https://github.com/temporalio/features/issues/765) | External payload storage SDK abstraction |
| [#783](https://github.com/temporalio/features/issues/783) | Pre-built AWS S3 storage driver |
| [#827](https://github.com/temporalio/features/issues/827) | Log when WFT completion is slow due to external storage |
| [#487](https://github.com/temporalio/features/issues/487) | Single history page exceeding gRPC payload limit |
| [#363](https://github.com/temporalio/features/issues/363) | gRPC message-size limit on multi-payload task completion |
| [#624](https://github.com/temporalio/features/issues/624) | Gracefully fail tasks on gRPC-message-too-large |
| [#723](https://github.com/temporalio/features/issues/723) | SDK validates payload size before submission |
| [#701](https://github.com/temporalio/features/issues/701) | SDK warning at configurable payload-size threshold |
| [#122](https://github.com/temporalio/features/issues/122) | gRPC/HTTP2 8KB header-size limit |
| [#46](https://github.com/temporalio/features/issues/46) | Standardize gRPC max receive message size (128MB) |

### Cross-Cutting Theme: Error Handling Standardization

| Issue | Description |
|-------|-------------|
| [#812](https://github.com/temporalio/features/issues/812) | Standardized exception-handler interface across SDKs |
| [#614](https://github.com/temporalio/features/issues/614) | `ApplicationErrorCategory` for log/metric classification |
| [#676](https://github.com/temporalio/features/issues/676) | Append non-`details` properties to failure messages |
| [#322](https://github.com/temporalio/features/issues/322) | Configurable workflow-failure exception types |
| [#218](https://github.com/temporalio/features/issues/218) | Stop treating recoverable errors (InvalidArgument, NamespaceNotFound) as worker-fatal |
| [#47](https://github.com/temporalio/features/issues/47) | Differentiate NamespaceInvalidState vs NamespaceNotFound |
| [#273](https://github.com/temporalio/features/issues/273) | Fail workflow (not task) when converter/codec errors |
| [#597](https://github.com/temporalio/features/issues/597) | SDK-side stack-trace truncation for oversize failures |
| [#9](https://github.com/temporalio/features/issues/9) | Better error code/messages for expired client certificates |
| [#559](https://github.com/temporalio/features/issues/559) | Structured command/event diff in non-determinism errors |

---

## Test Infrastructure Issues

Issues related to the features test harness, CI, dev/test servers, and cloud-compatibility:

| Issue | Area | Description |
|-------|------|-------------|
| [#834](https://github.com/temporalio/features/issues/834) | harness/CLI | Run features tests with specific dynamic configs via CLI |
| [#835](https://github.com/temporalio/features/issues/835) | shutdown | Add coverage for `enableCancelWorkerPollsOnShutdown=false` before default changes |
| [#675](https://github.com/temporalio/features/issues/675) | logging | Optionally suppress Temporal server startup banner in tests |
| [#672](https://github.com/temporalio/features/issues/672) | slot suppliers | Verify slot-info fields populated for custom slot suppliers |
| [#658](https://github.com/temporalio/features/issues/658) | Nexus | Testing framework for Nexus operation handlers |
| [#649](https://github.com/temporalio/features/issues/649) | versioning | Unit-testing for workflow versioning paths |
| [#613](https://github.com/temporalio/features/issues/613) | patches | Pre-patched workflow code testing |
| [#598](https://github.com/temporalio/features/issues/598) | replay | Formal cross-version history-compatibility tests |
| [#595](https://github.com/temporalio/features/issues/595) | cloud auth | Add API-key authentication features test |
| [#492](https://github.com/temporalio/features/issues/492) | reset+update | Tests for Update + Workflow Reset reapply paths |
| [#472](https://github.com/temporalio/features/issues/472) | test env | Fail tests on workflow-task failures in TestWorkflowEnvironment |
| [#470](https://github.com/temporalio/features/issues/470) | shutdown | Verify dev-server/test-server processes shut down cleanly |
| [#451](https://github.com/temporalio/features/issues/451) | updates | Verify updates are processed with higher priority than completion |
| [#353](https://github.com/temporalio/features/issues/353) | TS harness | Expose client-interceptor configuration in TS harness |
| [#279](https://github.com/temporalio/features/issues/279) | replay | Harness history-checker breaks on compatible field additions |
| [#228](https://github.com/temporalio/features/issues/228) | determinism | Test that workflow changes are evaluated consistently across SDKs |
| [#551](https://github.com/temporalio/features/issues/551) | time skip | Auto-skip time while waiting on update results |
| [#494](https://github.com/temporalio/features/issues/494) | dev-server | Easy search-attribute registration via CLI |
| [#396](https://github.com/temporalio/features/issues/396) | CI | macOS M1/ARM runners |
| [#150](https://github.com/temporalio/features/issues/150) | CI | Nightly CI: SDK main vs server main |
| [#155](https://github.com/temporalio/features/issues/155) | converter | SDK-agnostic failure-converter test |
| [#160](https://github.com/temporalio/features/issues/160) | worker mode | Workflow-only worker (no activity polling) test |
| [#3](https://github.com/temporalio/features/issues/3) | validation | SDK-side validation of server commands |
| [#581](https://github.com/temporalio/features/issues/581) | cloud | `TEMPORAL_FEATURES_DISABLE_WORKFLOW_COMPLETION_CHECK` workaround needs removal |
| [#315](https://github.com/temporalio/features/issues/315) | namespace | Stale workflows accumulating in `sdk-ci.a2dd6` |

---

## Bugs

Open functional bugs (excluding dependency-security CVEs, listed separately):

| Issue | SDK(s) | Description |
|-------|--------|-------------|
| [#503](https://github.com/temporalio/features/issues/503) | cross-SDK | Cancel/Signal don't propagate to child workflows started via CAN — severity high, 3 👍 |
| [#720](https://github.com/temporalio/features/issues/720) | cross-SDK | `WorkflowInfo.Priority` immutable, doesn't reflect priority overrides from api#610 |
| [#422](https://github.com/temporalio/features/issues/422) | tracing / scheduler | Only `RunActivity` spans reported for schedule-triggered workflows; expected `StartWorkflow`/`RunWorkflow` spans missing |
| [#330](https://github.com/temporalio/features/issues/330) | Go | `bugs/go/child_workflow_cancel_panic` test flakes intermittently with nondeterminism on replay |
| [#315](https://github.com/temporalio/features/issues/315) | CI infra | Stale workflows in `sdk-ci.a2dd6` namespace; needs schedule-to-close timeout |
| [#581](https://github.com/temporalio/features/issues/581) | cloud | Workflow-completion check disabled via env-var workaround instead of a real fix |
| [#182](https://github.com/temporalio/features/issues/182) | docs/visibility | List APIs are eventually consistent; specs need to document and tolerate this |

### Dependency Security Vulnerabilities (Open)

All open security issues are transitive-dependency CVE reports from automated scanners. Most have not been triaged because the affected libraries are deep transitive deps of the features-repo's own test scaffolding, not of shipped SDKs:

| Issue | Dependency | Severity |
|-------|------------|----------|
| [#384](https://github.com/temporalio/features/issues/384) | logback-classic / logback-core 1.2.9 (CVE-2023-6481, CVE-2023-6378) | critical |
| [#366](https://github.com/temporalio/features/issues/366) | System.Text.RegularExpressions / System.Net.Http via xunit.assert 2.5.3 | high |
| [#288](https://github.com/temporalio/features/issues/288) | Guava 31.1-jre (CVE-2023-2976) | high |
| [#254](https://github.com/temporalio/features/issues/254) | json-path 2.6.0 / json-smart 2.4.7 stack-overflow CVEs | high |
| [#116](https://github.com/temporalio/features/issues/116) | uber-go/tally v4.1.1 → Apache Thrift (CVE-2019-0205/0210) | high |

---

## Housekeeping

### Stale Issues

68% of open issues (175 of 258) have had no activity in over 12 months — the highest stale rate of any tracked Temporal repository. 102 issues (40%) are more than 3 years old. The dominant cause is that this repo accumulates per-SDK tracking tickets that stay open until *every* SDK implements a feature; even when most SDKs ship the feature, the umbrella tracker remains open for the trailing one or two.

Top stale issues with non-trivial engagement that deserve revisit:

| Issue | 👍 | Last Updated | Title |
|-------|-----|--------------|-------|
| [#399](https://github.com/temporalio/features/issues/399) | 15 | 2024-07-15 | Custom Markers for Workflow History/Timeline |
| [#363](https://github.com/temporalio/features/issues/363) | 4 | 2024-12-20 | Work around gRPC message-size limit for tasks |
| [#175](https://github.com/temporalio/features/issues/175) | 3 | 2024-07-13 | Endtoend latency metric for cron execution |
| [#98](https://github.com/temporalio/features/issues/98) | 3 | 2022-08-01 | worker_task_slots_total metric |
| [#463](https://github.com/temporalio/features/issues/463) | 2 | 2024-11-13 | Customize activity failure logging |
| [#380](https://github.com/temporalio/features/issues/380) | 2 | 2023-11-29 | DataDog samples for every SDK |
| [#322](https://github.com/temporalio/features/issues/322) | 2 | 2025-05-15 | Configurable workflow-failure exception types |
| [#203](https://github.com/temporalio/features/issues/203) | 2 | 2025-05-15 | Provide client from an activity |

Several very-old foundational tickets (#3, #4, #77, #78, #79, #80, #83) are early "implement feature-test for X" issues from the repo's first year. Many of these now have partial or complete coverage in individual SDKs and should be audited for closure.

### Recommendations

1. **Triage the stale 175-issue backlog.** Most-overdue parity work-tracking tickets should either be moved into per-SDK SDK repos or closed once enough SDKs have shipped. The current 68% stale rate makes the repo hard to use as a real backlog.
2. **Resolve high-impact parity items.** [#118](https://github.com/temporalio/features/issues/118) (declarative schedules), [#399](https://github.com/temporalio/features/issues/399) (custom markers), [#649](https://github.com/temporalio/features/issues/649) (versioning unit tests), [#558](https://github.com/temporalio/features/issues/558) (child `WorkflowIdConflictPolicy`) all combine high user demand with multi-year stagnation.
3. **Close the Nexus parity ring.** Nine open Nexus tickets (#609, #610, #664, #673, #674, #678, #658, #805, #806) describe a consistent surface area; treating them as one milestone would force closure across all SDKs.
4. **Drive worker-versioning to GA.** [#726](https://github.com/temporalio/features/issues/726), [#294](https://github.com/temporalio/features/issues/294), [#427](https://github.com/temporalio/features/issues/427), [#143](https://github.com/temporalio/features/issues/143), [#142](https://github.com/temporalio/features/issues/142), [#91](https://github.com/temporalio/features/issues/91), [#591](https://github.com/temporalio/features/issues/591), [#649](https://github.com/temporalio/features/issues/649) form the v1.30 worker-versioning shipping path.
5. **External payload storage rollout.** [#765](https://github.com/temporalio/features/issues/765) + [#783](https://github.com/temporalio/features/issues/783) + [#827](https://github.com/temporalio/features/issues/827) + [#487](https://github.com/temporalio/features/issues/487) + payload-size validation issues ([#723](https://github.com/temporalio/features/issues/723), [#701](https://github.com/temporalio/features/issues/701), [#376](https://github.com/temporalio/features/issues/376)) form a coherent large-payloads workstream.
6. **Test-harness modernization.** [#834](https://github.com/temporalio/features/issues/834) (dynamic-config CLI), [#581](https://github.com/temporalio/features/issues/581) (cloud workaround), [#315](https://github.com/temporalio/features/issues/315) (CI namespace hygiene), [#470](https://github.com/temporalio/features/issues/470) (server shutdown verification) and [#396](https://github.com/temporalio/features/issues/396) (M1 runners) are quick infrastructure wins.
7. **Sweep dependency CVEs.** The five open transitive-dep security tickets ([#384](https://github.com/temporalio/features/issues/384), [#366](https://github.com/temporalio/features/issues/366), [#288](https://github.com/temporalio/features/issues/288), [#254](https://github.com/temporalio/features/issues/254), [#116](https://github.com/temporalio/features/issues/116)) are easy to either fix-or-close-with-explanation; right now they distort the security signal.
