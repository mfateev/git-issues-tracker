# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 244
**Total Closed Issues:** 3
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-features/issues.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

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
| Test Infrastructure | 10 | Medium |
| Bugs | 6 | High |
| Security (Dependencies) | 5 | Low - automated alerts |

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
| Resolution Rate | 1% (3/247) |
| Median Time to Close | 76 days |
| Resolved within 30 days | 0% |
| Resolved within 90 days | 67% |

The extremely low resolution rate (1%) reflects the nature of the Features repository: most issues are cross-SDK feature requests that require coordinated implementation across all SDKs, making them long-term tracking items rather than quick fixes.

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 54 | 3 | +51 |

📈 **Backlog Growing:** The repository continues to accumulate feature requests faster than they can be resolved. This is expected given that cross-SDK features require coordination across 7+ SDK implementations and often depend on server-side changes.

---

## Top Issues by Engagement

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#399](../repos/temporalio-features/issues.md#399) | 15 | 12 | Custom Markers for Workflow History/Timeline |
| 2 | [#649](../repos/temporalio-features/issues.md#649) | 14 | 4 | Add support for unit testing workflow versioning |
| 3 | [#118](../repos/temporalio-features/issues.md#118) | 8 | 22 | Declarative schedules: upsert, sync, terraform, etc. |
| 4 | [#562](../repos/temporalio-features/issues.md#562) | 7 | 6 | Session support |
| 5 | [#434](../repos/temporalio-features/issues.md#434) | 6 | 1 | Serialization context for codecs and converters |
| 6 | [#229](../repos/temporalio-features/issues.md#229) | 6 | 0 | Auto heartbeating |
| 7 | [#456](../repos/temporalio-features/issues.md#456) | 5 | 2 | Provide worker status |
| 8 | [#363](../repos/temporalio-features/issues.md#363) | 4 | 0 | Work around gRPC message size limit for task completion |
| 9 | [#558](../repos/temporalio-features/issues.md#558) | 3 | 21 | WorkflowIdConflictPolicy in child workflow options |
| 10 | [#515](../repos/temporalio-features/issues.md#515) | 3 | 1 | Expose start delay in child workflow options |

---

## Feature Coverage Gaps

### Missing Features by SDK

Based on cross-SDK feature tracking issues, the following features have varying implementation status across SDKs:

| Feature | Go | Java | TS | Python | .NET | PHP | Ruby |
|---------|:--:|:----:|:--:|:------:|:----:|:---:|:----:|
| Serialization context ([#434](../repos/temporalio-features/issues.md#434)) | - | ✓ | - | ✓ | ✓ | - | - |
| Sessions ([#562](../repos/temporalio-features/issues.md#562)) | ✓ | - | - | - | - | - | - |
| Mutable side effect ([#561](../repos/temporalio-features/issues.md#561)) | ✓ | ✓ | - | - | - | - | - |
| Start delay in child workflows ([#515](../repos/temporalio-features/issues.md#515)) | - | - | - | - | - | - | - |

### Cross-SDK Feature Requests

High-priority features requested for all SDKs:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#399](../repos/temporalio-features/issues.md#399) | Custom Markers | Allow recording custom MarkerRecorded events for workflow timeline visualization |
| [#649](../repos/temporalio-features/issues.md#649) | Version Testing | Unit test support for workflow versioning/patching scenarios |
| [#118](../repos/temporalio-features/issues.md#118) | Declarative Schedules | Terraform/GitOps-friendly schedule management via upsert/sync |
| [#229](../repos/temporalio-features/issues.md#229) | Auto Heartbeating | SDK-provided automatic activity heartbeat helper |
| [#456](../repos/temporalio-features/issues.md#456) | Worker Status | Programmatic access to worker health and slot information |
| [#51](../repos/temporalio-features/issues.md#51) | Query/Signal Listing | Standardized method to list registered queries and signals |
| [#69](../repos/temporalio-features/issues.md#69) | Reset Points | Specify reset points in workflow code for rollback scenarios |

### Metrics and Observability Requests

Several requests focus on improved metrics across all SDKs:

| Issue | Metric | Description |
|-------|--------|-------------|
| [#563](../repos/temporalio-features/issues.md#563) | workflow_failed | Tag with exception type |
| [#98](../repos/temporalio-features/issues.md#98) | worker_task_slots_total | New metric for slot monitoring |
| [#175](../repos/temporalio-features/issues.md#175) | cron_latency | End-to-end latency for cron executions |
| [#268](../repos/temporalio-features/issues.md#268) | update_metrics | SDK-side metrics for Update API |

---

## Test Infrastructure Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#585](../repos/temporalio-features/issues.md#585) | Ruby Support | Add Ruby as first-class citizen in features repo |
| [#581](../repos/temporalio-features/issues.md#581) | Workarounds | Remove TEMPORAL_FEATURES_DISABLE_WORKFLOW_COMPLETION_CHECK |
| [#353](../repos/temporalio-features/issues.md#353) | TypeScript | Enable client interceptor configuration in TS harness |
| [#150](../repos/temporalio-features/issues.md#150) | CI | Nightly CI against server and SDK master branches |
| [#712](../repos/temporalio-features/issues.md#712) | TypeScript Build | Use pnpm when building TS worker from source (npm deprecated) |

---

## Bugs

| Issue | SDK(s) | Description |
|-------|--------|-------------|
| [#503](../repos/temporalio-features/issues.md#503) | All | Cancel/Signal should propagate to child workflows after CAN |
| [#422](../repos/temporalio-features/issues.md#422) | Python | Incomplete span reporting when workflow triggered via scheduler |
| [#330](../repos/temporalio-features/issues.md#330) | Go | Flaky child_workflow_cancel_panic test |
| [#315](../repos/temporalio-features/issues.md#315) | Platform | Stale workflows in sdk-ci namespace need cleanup |
| [#222](../repos/temporalio-features/issues.md#222) | All | workflow_completed counter logged before server confirmation |
| [#182](../repos/temporalio-features/issues.md#182) | Docs | Document eventual consistency of list workflow/schedule calls |

The most impactful bug is [#503](../repos/temporalio-features/issues.md#503) (3 upvotes) - cancel and signal propagation to child workflows after continue-as-new. This affects all SDKs and has implications for workflow cancellation semantics.

---

## Security Issues

All 5 security issues are automated Mend dependency vulnerability alerts:

| Issue | Package | Severity |
|-------|---------|----------|
| [#116](../repos/temporalio-features/issues.md#116) | github.com/uber-go/tally/v4 | 7.5 |
| [#384](../repos/temporalio-features/issues.md#384) | logback-classic-1.2.9.jar | 7.5 |
| [#366](../repos/temporalio-features/issues.md#366) | xunit.assert.2.5.3.nupkg | 7.5 |
| [#288](../repos/temporalio-features/issues.md#288) | guava-31.1-jre.jar | 7.1 |
| [#254](../repos/temporalio-features/issues.md#254) | json-path-2.6.0.jar | 7.5 |

These are low priority as they affect test dependencies in the features repo, not production SDK code.

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2025-12-22 | [#715](../repos/temporalio-features/issues.md#715) | Custom Metadata Support for Workers in Temporal UI and CLI |
| 2025-12-18 | [#712](../repos/temporalio-features/issues.md#712) | [Bug] Use pnpm when building TS worker from source |

---

## Housekeeping

### Stale Issues

145 issues (59%) have had no activity for over 12 months. Top stale issues by upvotes:

| Issue | 👍 | Last Updated | Title |
|-------|-----|--------------|-------|
| [#399](../repos/temporalio-features/issues.md#399) | 15 | 2024-07-15 | Custom Markers for Workflow History/Timeline |
| [#229](../repos/temporalio-features/issues.md#229) | 6 | 2023-02-17 | Auto heartbeating |
| [#363](../repos/temporalio-features/issues.md#363) | 4 | 2024-12-20 | Work around gRPC message size limit |
| [#175](../repos/temporalio-features/issues.md#175) | 3 | 2024-07-13 | End-to-end latency metric for cron |
| [#98](../repos/temporalio-features/issues.md#98) | 3 | 2022-08-01 | New metric: worker_task_slots_total |

The high stale rate is characteristic of cross-SDK feature tracking - issues remain open until implemented across all SDKs.

### Recommendations

1. **Feature parity priority:** Focus on high-demand cross-SDK features:
   - Custom markers ([#399](../repos/temporalio-features/issues.md#399)) - 15 upvotes
   - Version testing ([#649](../repos/temporalio-features/issues.md#649)) - 14 upvotes
   - Declarative schedules ([#118](../repos/temporalio-features/issues.md#118)) - 8 upvotes, 22 comments
   - Session support beyond Go ([#562](../repos/temporalio-features/issues.md#562)) - 7 upvotes

2. **Test coverage:**
   - Add Ruby support to the features harness ([#585](../repos/temporalio-features/issues.md#585))
   - Implement nightly CI against master branches ([#150](../repos/temporalio-features/issues.md#150))
   - Fix pnpm build for TypeScript ([#712](../repos/temporalio-features/issues.md#712))

3. **Infrastructure improvements:**
   - Address child workflow cancel/signal propagation bug ([#503](../repos/temporalio-features/issues.md#503))
   - Clean up stale CI workflows and namespaces ([#315](../repos/temporalio-features/issues.md#315))
   - Update test dependencies to resolve security alerts

4. **Backlog management:**
   - Consider closing or consolidating very old feature requests (3+ years) that may no longer be relevant
   - Link individual SDK implementations back to tracking issues to show progress
