# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 244
**Total Closed Issues:** 138
**Repository:** [temporalio/features](https://github.com/temporalio/features)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md)

---

## Overview

The Features repository contains cross-SDK conformance tests and feature implementations. Issues here typically relate to:
- SDK feature parity gaps
- Test infrastructure and tooling
- Feature coverage requests
- CI/CD and build issues

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Feature Coverage Gaps | 224 | Medium - SDK parity |
| Test Infrastructure | 8 | Medium |
| Bugs | 6 | High |
| Security (Dependencies) | 5 | Low - automated alerts |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 106 |
| Total Comments | 397 |
| Issues with Upvotes | 32 (13%) |
| Issues with Comments | 129 (53%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 36% (138/382) |
| Median Time to Close | 151 days |
| Resolved within 30 days | 30% |
| Resolved within 90 days | 43% |

The resolution rate reflects the nature of the Features repository: most issues are cross-SDK feature requests that require coordinated implementation across all SDKs, making them long-term tracking items rather than quick fixes.

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 67 | 44 | +23 |

**Backlog Growing:** The repository continues to accumulate feature requests faster than they can be resolved. This is expected given that cross-SDK features require coordination across 7+ SDK implementations and often depend on server-side changes.

---

## Top Issues by Engagement

| Rank | Issue | Score | Title | Analysis |
|------|-------|-------|-------|----------|
| 1 | [#399](https://github.com/temporalio/features/issues/399) | 42 | Custom Markers for Workflow History/Timeline | Users want to record custom events in workflow history for observability. Team decided against marker approach due to history growth concerns; alternative approaches being considered. |
| 2 | [#118](https://github.com/temporalio/features/issues/118) | 38 | Declarative schedules: upsert, sync, terraform | Strong demand for GitOps/Terraform-style schedule management. Detailed design proposals from community including Terraform provider contributions. |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 32 | Add support for unit testing workflow versioning | 5-year-old issue with renewed interest. Critical for validating version upgrade scenarios in unit tests rather than relying on integration testing. |
| 4 | [#558](https://github.com/temporalio/features/issues/558) | 27 | WorkflowIdConflictPolicy in child workflow options | Complex discussion about child workflow semantics and re-parenting. Nexus recommended as workaround; deeper architectural considerations for DAG workflows. |
| 5 | [#562](https://github.com/temporalio/features/issues/562) | 20 | Session support | Go SDK has native sessions; other SDKs use worker-specific task queue pattern. Detailed architectural feedback from community on load balancing approaches. |
| 6 | [#443](https://github.com/temporalio/features/issues/443) | 17 | Implement activity task poll limit | Request for limiting activity polling after successful task. Being addressed in SDK refactoring with Custom Slot Providers. |
| 7 | [#434](https://github.com/temporalio/features/issues/434) | 13 | Serialization context for codecs and converters | Allow converters to access workflow/activity context (e.g., workflow ID) for payload signing/security purposes. Java done, others in progress. |
| 8 | [#51](https://github.com/temporalio/features/issues/51) | 13 | Standardize method for listing workflow queries/signals | Replacing the "query not found" parsing hack with proper WorkflowMetadata API. Mostly implemented across SDKs. |
| 9 | [#563](https://github.com/temporalio/features/issues/563) | 12 | Tag workflow_failed counter metric with exception type | Improve failure observability by including exception type in metrics. |
| 10 | [#456](https://github.com/temporalio/features/issues/456) | 12 | Provide worker status | Programmatic access to worker health: slot usage, cache size, polling status, error backoff states. |

---

## Feature Coverage Gaps

### Missing Features by SDK

Based on cross-SDK feature tracking issues, the following features have varying implementation status:

| Feature | Go | Java | TS | Python | .NET | PHP | Ruby |
|---------|:--:|:----:|:--:|:------:|:----:|:---:|:----:|
| Serialization context ([#434](https://github.com/temporalio/features/issues/434)) | - | Done | - | Done | Done | - | - |
| Sessions ([#562](https://github.com/temporalio/features/issues/562)) | Done | - | - | - | - | - | - |
| Mutable side effect ([#561](https://github.com/temporalio/features/issues/561)) | Done | Done | - | - | - | - | - |
| Start delay in child workflows ([#515](https://github.com/temporalio/features/issues/515)) | - | - | - | - | - | - | - |
| WorkflowIdConflictPolicy for children ([#558](https://github.com/temporalio/features/issues/558)) | - | - | - | - | - | - | - |
| Query/Signal listing ([#51](https://github.com/temporalio/features/issues/51)) | Done | Done | Done | - | Done | - | - |

### Cross-SDK Feature Requests

High-priority features requested for all SDKs:

| Issue | Feature | Description | Status |
|-------|---------|-------------|--------|
| [#399](https://github.com/temporalio/features/issues/399) | Custom Markers | Record custom MarkerRecorded events for workflow timeline visualization | Under discussion - history growth concerns |
| [#649](https://github.com/temporalio/features/issues/649) | Version Testing | Unit test support for workflow versioning/patching scenarios | No implementation yet |
| [#118](https://github.com/temporalio/features/issues/118) | Declarative Schedules | Terraform/GitOps-friendly schedule management via upsert/sync | Design phase, Terraform contribution offered |
| [#229](https://github.com/temporalio/features/issues/229) | Auto Heartbeating | SDK-provided automatic activity heartbeat helper | Designed, awaiting implementation |
| [#456](https://github.com/temporalio/features/issues/456) | Worker Status | Programmatic access to worker health and slot information | Per-SDK tickets needed |
| [#69](https://github.com/temporalio/features/issues/69) | Reset Points | Specify reset points in workflow code for rollback scenarios | Needs design |

### Child Workflow Enhancements

Several issues focus on improving child workflow capabilities:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#558](https://github.com/temporalio/features/issues/558) | WorkflowIdConflictPolicy | USE_EXISTING for children - complex re-parenting semantics |
| [#515](https://github.com/temporalio/features/issues/515) | Start Delay | Expose start delay option in child workflow options |
| [#503](https://github.com/temporalio/features/issues/503) | Cancel/Signal Propagation | Propagate to children after continue-as-new |

### Metrics and Observability Requests

| Issue | Metric | Description |
|-------|--------|-------------|
| [#563](https://github.com/temporalio/features/issues/563) | workflow_failed | Tag with exception type |
| [#98](https://github.com/temporalio/features/issues/98) | worker_task_slots_total | New metric for slot monitoring |
| [#175](https://github.com/temporalio/features/issues/175) | cron_latency | End-to-end latency for cron executions |
| [#268](https://github.com/temporalio/features/issues/268) | update_metrics | SDK-side metrics for Update API |
| [#463](https://github.com/temporalio/features/issues/463) | activity_failure_logging | Customize activity failure logging behavior |

---

## Test Infrastructure Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#712](https://github.com/temporalio/features/issues/712) | TypeScript Build | Use pnpm when building TS worker from source (npm deprecated) |
| [#585](https://github.com/temporalio/features/issues/585) | Ruby Support | Add Ruby as first-class citizen in features repo |
| [#581](https://github.com/temporalio/features/issues/581) | Workarounds | Remove TEMPORAL_FEATURES_DISABLE_WORKFLOW_COMPLETION_CHECK |
| [#353](https://github.com/temporalio/features/issues/353) | TypeScript | Enable client interceptor configuration in TS harness |
| [#150](https://github.com/temporalio/features/issues/150) | CI | Nightly CI against server and SDK master branches |
| [#648](https://github.com/temporalio/features/issues/648) | Testing | Write tests for worker shutdown behavior |
| [#598](https://github.com/temporalio/features/issues/598) | Compatibility | Test history compatibility across SDK versions |

---

## Bugs

| Issue | SDK(s) | Description | Impact |
|-------|--------|-------------|--------|
| [#503](https://github.com/temporalio/features/issues/503) | All | Cancel/Signal should propagate to child workflows after CAN | High - affects cancellation semantics |
| [#422](https://github.com/temporalio/features/issues/422) | Python | Incomplete span reporting when workflow triggered via scheduler | Medium - observability gap |
| [#330](https://github.com/temporalio/features/issues/330) | Go | Flaky child_workflow_cancel_panic test | Low - test infrastructure |
| [#315](https://github.com/temporalio/features/issues/315) | Platform | Stale workflows in sdk-ci namespace need cleanup | Low - CI cleanup |
| [#222](https://github.com/temporalio/features/issues/222) | All | workflow_completed counter logged before server confirmation | Low - timing issue |
| [#182](https://github.com/temporalio/features/issues/182) | Docs | Document eventual consistency of list workflow/schedule calls | Low - documentation |

The most impactful bug is [#503](https://github.com/temporalio/features/issues/503) (3 upvotes) - cancel and signal propagation to child workflows after continue-as-new. This affects all SDKs and has implications for workflow cancellation semantics in complex workflow graphs.

---

## Security Issues

All 5 security issues are automated Mend dependency vulnerability alerts:

| Issue | Package | Severity |
|-------|---------|----------|
| [#116](https://github.com/temporalio/features/issues/116) | github.com/uber-go/tally/v4 | 7.5 |
| [#384](https://github.com/temporalio/features/issues/384) | logback-classic-1.2.9.jar | 7.5 |
| [#366](https://github.com/temporalio/features/issues/366) | xunit.assert.2.5.3.nupkg | 7.5 |
| [#288](https://github.com/temporalio/features/issues/288) | guava-31.1-jre.jar | 7.1 |
| [#254](https://github.com/temporalio/features/issues/254) | json-path-2.6.0.jar | 7.5 |

These are low priority as they affect test dependencies in the features repo, not production SDK code.

---

## Nexus-Related Features

Several issues relate to the new Nexus cross-namespace communication feature:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#609](https://github.com/temporalio/features/issues/609) | Initial Implementation | Core Nexus SDK implementation |
| [#683](https://github.com/temporalio/features/issues/683) | Error Types | Add CONFLICT and REQUEST_TIMEOUT handler error types |
| [#682](https://github.com/temporalio/features/issues/682) | API Cleanup | Remove fetchResult and fetchInfo from Nexus SDKs |
| [#678](https://github.com/temporalio/features/issues/678) | Serialization | Nexus serialization context support |
| [#658](https://github.com/temporalio/features/issues/658) | Testing | Nexus operation testing environment |

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2025-12-22 | [#715](https://github.com/temporalio/features/issues/715) | Custom Metadata Support for Workers in Temporal UI and CLI |
| 2025-12-18 | [#712](https://github.com/temporalio/features/issues/712) | [Bug] Use pnpm when building TS worker from source |

---

## Housekeeping

### Stale Issues

145 issues (59%) have had no activity for over 12 months. Top stale issues by upvotes:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#399](https://github.com/temporalio/features/issues/399) | 15 | 2024-07-15 | Custom Markers for Workflow History/Timeline |
| [#229](https://github.com/temporalio/features/issues/229) | 6 | 2023-02-17 | Auto heartbeating |
| [#363](https://github.com/temporalio/features/issues/363) | 4 | 2024-12-20 | Work around gRPC message size limit |
| [#175](https://github.com/temporalio/features/issues/175) | 3 | 2024-07-13 | End-to-end latency metric for cron |
| [#98](https://github.com/temporalio/features/issues/98) | 3 | 2022-08-01 | New metric: worker_task_slots_total |

The high stale rate is characteristic of cross-SDK feature tracking - issues remain open until implemented across all SDKs.

### Age Distribution

| Age | Count | Percentage |
|-----|-------|------------|
| Last 30 days | 2 | 1% |
| 1-3 months | 9 | 4% |
| 3-6 months | 15 | 6% |
| 6-12 months | 34 | 14% |
| 1-2 years | 53 | 22% |
| 2-3 years | 44 | 18% |
| 3+ years | 87 | 36% |

---

## Recommendations

### 1. Feature Parity Priority

Focus on high-demand cross-SDK features:
- **Custom markers** ([#399](https://github.com/temporalio/features/issues/399)) - 15 upvotes. Consider metadata-on-command approach instead of markers.
- **Version testing** ([#649](https://github.com/temporalio/features/issues/649)) - 14 upvotes, 5 years old. Critical for enterprise adoption.
- **Declarative schedules** ([#118](https://github.com/temporalio/features/issues/118)) - 8 upvotes, 22 comments. Accept community Terraform contribution.
- **Session support** ([#562](https://github.com/temporalio/features/issues/562)) - 7 upvotes. Evaluate promoting worker-specific task queue pattern as standard.

### 2. Test Coverage Improvements

- Add Ruby support to the features harness ([#585](https://github.com/temporalio/features/issues/585))
- Implement nightly CI against master branches ([#150](https://github.com/temporalio/features/issues/150))
- Fix pnpm build for TypeScript ([#712](https://github.com/temporalio/features/issues/712))
- Add history compatibility testing ([#598](https://github.com/temporalio/features/issues/598))

### 3. Bug Fixes

- Address child workflow cancel/signal propagation ([#503](https://github.com/temporalio/features/issues/503)) - affects all SDKs
- Clean up stale CI workflows and namespaces ([#315](https://github.com/temporalio/features/issues/315))
- Fix tracing span reporting for scheduled workflows ([#422](https://github.com/temporalio/features/issues/422))

### 4. Backlog Management

- Consider closing or consolidating very old feature requests (3+ years) that may no longer be relevant
- Link individual SDK implementations back to tracking issues to show progress
- Update security dependencies to resolve automated vulnerability alerts
- Add completion tracking to per-SDK tickets in issue descriptions

### 5. Nexus Integration

Complete the Nexus SDK implementation across all languages and add comprehensive testing support ([#658](https://github.com/temporalio/features/issues/658)).
