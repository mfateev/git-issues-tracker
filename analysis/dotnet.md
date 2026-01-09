# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 49
**Total Closed Issues:** 240
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Full Issue Data](../repos/temporalio-sdk-dotnet/issues.md)

**Other SDKs:** [Go](go.md) | [Java](java.md) | [TypeScript](typescript.md) | [Python](python.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The .NET SDK has a relatively small open issue count (49) with an excellent resolution rate of 83%, indicating a well-maintained codebase. The SDK is maturing with strong developer experience focus, though key gaps remain around .NET ecosystem integration (trimming support, F# support) and testing infrastructure stability. The primary concerns are native bridge stability issues on Linux and time-skipping test server limitations.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 12 | High - Includes critical native bridge crashes and testing issues |
| Enhancements | 30 | Medium - Focus on DX improvements and .NET ecosystem integration |
| Security Vulnerabilities | 1 | Low - Dev dependency only (coverlet.collector) |
| Test Server Issues | 4 | Medium - Blocking for time-skipping workflows in tests |
| Stale Issues (>12 months) | 24 | Low - 49% of open issues need triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 13 |
| Total Comments | 46 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 24 (49%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 83% (240/289) |
| Median Time to Close | 21 days (calendar) / 16 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 80% |

### Recommended Actions

1. **Immediate:** Investigate Linux SIGSEGV crash in native bridge ([#579](../repos/temporalio-sdk-dotnet/issues.md#579)) - critical stability issue
2. **Short-term:** Fix TLS certificate loading from path ([#584](../repos/temporalio-sdk-dotnet/issues.md#584)) - blocks Temporal Cloud mTLS usage
3. **Medium-term:** Implement .NET Trimming support ([#286](../repos/temporalio-sdk-dotnet/issues.md#286)) - most upvoted feature request (7 upvotes)
4. **Long-term:** Build .NET Analyzer for workflow checking ([#576](../repos/temporalio-sdk-dotnet/issues.md#576)) - parity with Go/Java SDKs
5. **Housekeeping:** Triage 24 stale issues - nearly half of open issues have no activity in 12+ months

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The SDK maintains a near-balanced velocity with slight backlog growth.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 87 | 84 | +3 |

:chart_with_upwards_trend: **Backlog Stable:** Only 3 more issues opened than closed, indicating effective maintenance.

### Last 6 Months: Detailed Analysis

The last 6 months show healthy maintenance with balanced opened/closed rates and strong bug resolution.

| Metric | Value |
|--------|-------|
| Issues Opened | 41 |
| Issues Closed | 41 |
| Bugs Closed | 10 |
| Enhancements Completed | 23 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#385](../repos/temporalio-sdk-dotnet/issues.md#385) | 2 | Add support for win-arm64 |
| [#436](../repos/temporalio-sdk-dotnet/issues.md#436) | 3 | Add ability to temporarily disable tracing event listener in workflows |
| [#408](../repos/temporalio-sdk-dotnet/issues.md#408) | 2 | Include musl-based build in NuGet package |
| [#282](../repos/temporalio-sdk-dotnet/issues.md#282) | 2 | Accept search attributes in dev server startup |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | 1 | 0 | Clarify what the ICustomMetricMeter is used for |
| 6 | [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | 1 | 0 | Support single-platform local NuGet package build |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | 15 | Support .NET Trimming |
| 2 | [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 7 | F# Samples/Documentation |
| 4 | [#563](../repos/temporalio-sdk-dotnet/issues.md#563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | 4 | OperatorService and WorkflowService virtual/interface |
| 6 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 4 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 3 | Provide synchronous Run method in testing |
| 8 | [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | 3 | RpcException: operation was canceled |
| 9 | [#234](../repos/temporalio-sdk-dotnet/issues.md#234) | 3 | Unexpected reuse of payload instances in payload codec |
| 10 | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | 2 | SIGSEGV crash in temporal_core_worker_poll_workflow_activation |

---

## Issue Analysis by Category

### Critical Bugs (3 issues)

These bugs affect core functionality and stability.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | 0 | **SIGSEGV crash in native bridge on Linux** - Intermittent segfault during workflow activation polling in CI/Linux environments. Critical stability issue affecting production deployments. |
| [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | 0 | **TLS certificate loading from path broken** - `TEMPORAL_TLS_CLIENT_CERT_PATH` env var is ignored; only `TEMPORAL_TLS_CLIENT_CERT_DATA` works. Blocks standard mTLS configuration. |
| [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | 0 | **Workflow task failures may be lost** - Errors in `QueueNewTaskAsync` for child workflows are not properly logged or handled. |

### Test Server / Testing Infrastructure (4 issues)

Issues related to the time-skipping test server and testing utilities.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | 0 | **Workflow Update hangs on time-skipping environment** - Update calls hang indefinitely when using time-skipping test server. Known upstream issue in Java SDK test server. |
| [#77](../repos/temporalio-sdk-dotnet/issues.md#77) | 0 | **Time skipping not working in some cases** - When starting a workflow with a long timer (no activity), `env.DelayAsync` sleeps real time instead of skipping. |
| [#550](../repos/temporalio-sdk-dotnet/issues.md#550) | 0 | **CustomSlotSupplier test flake** - Intermittent test failures need investigation. |
| [#549](../repos/temporalio-sdk-dotnet/issues.md#549) | 0 | **PollingBehavior_Autoscaling test flake** - Intermittent test failures need investigation. |

### Other Bugs (5 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | 0 | **RpcException: operation was canceled** - Immediate timeout when calling `DescribeNamespaceAsync`, possibly related to client sharing across threads. |
| [#234](../repos/temporalio-sdk-dotnet/issues.md#234) | 0 | **Payload instance reuse in codec** - Same payload instance passed to codec for both activity and workflow failures. Documentation clarifies codecs should always create new payloads. |
| [#357](../repos/temporalio-sdk-dotnet/issues.md#357) | 0 | **Unexpected serialization of activity results** - Activity results serialized unexpectedly in certain scenarios. |
| [#280](../repos/temporalio-sdk-dotnet/issues.md#280) | 0 | **TaskQueue not forwarded for ContinueAsNew in Test Environment** - Causes hangs when testing continue-as-new workflows. |
| [#305](../repos/temporalio-sdk-dotnet/issues.md#305) | 0 | **Handle multiple completion commands** - Edge case with multiple workflow completion commands. |

### Security Vulnerability (1 issue)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#194](../repos/temporalio-sdk-dotnet/issues.md#194) | Medium (7.5) | **coverlet.collector Newtonsoft.Json vulnerability** - CVE-2024-21907 in test dependency. Dev-only impact; upgrade to Newtonsoft.Json 13.0.1 available. |

---

## Enhancement Requests (30 issues)

### .NET Ecosystem Integration (5 issues)

Key requests for better .NET platform integration.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | 7 | **Support .NET Trimming** - Most requested feature. Required for AOT compilation and smaller deployments. Needs trimming annotations and PInvoke/reflection review. |
| [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 2 | **F# Samples/Documentation** - Growing F# community interest. Workarounds exist (FSharp.SystemTextJson) but official samples would lower barrier. |
| [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | 0 | **.NET Analyzer for Checking Workflows** - Roslyn analyzer for transitive workflow constraint checking, similar to Go/Java equivalents. |
| [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | 1 | **Support single-platform local NuGet package build** - Reduce package size for single-platform scenarios. |
| [#247](../repos/temporalio-sdk-dotnet/issues.md#247) | 0 | **Support for win-x86** - Windows 32-bit platform support. |

### Dependency Injection & Testing (5 issues)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 1 | **Make scoped IServiceProvider available to ActivityInboundInterceptor** - Enable DI in activity interceptors for cross-cutting concerns. PR #364 open for discussion. |
| [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 1 | **Provide synchronous Run method in testing** - Simplify testing of synchronous activity methods. |
| [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | 0 | **OperatorService/WorkflowService virtual or interface** - Enable mocking for unit tests. Workaround: mock `InvokeRpcAsync`. |
| [#421](../repos/temporalio-sdk-dotnet/issues.md#421) | 0 | **ActivityOptions provider capability for testing** - Better test configuration options. |
| [#229](../repos/temporalio-sdk-dotnet/issues.md#229) | 0 | **Make Temporalio.Testing a separate NuGet** - Reduce main package dependencies. |

### Nexus Support (5 issues)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#578](../repos/temporalio-sdk-dotnet/issues.md#578) | 0 | Add tests to confirm proper Nexus support for time-skipping environment |
| [#536](../repos/temporalio-sdk-dotnet/issues.md#536) | 0 | Support Nexus in Temporalio.Extensions.Hosting |
| [#528](../repos/temporalio-sdk-dotnet/issues.md#528) | 0 | Nexus custom slot suppliers |
| [#515](../repos/temporalio-sdk-dotnet/issues.md#515) | 0 | Nexus OpenTelemetry support |
| [#514](../repos/temporalio-sdk-dotnet/issues.md#514) | 0 | Nexus cancellation type support |

### Worker Versioning & Deployment (3 issues)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#558](../repos/temporalio-sdk-dotnet/issues.md#558) | 0 | Allow overriding Worker Deployment Version for child workflows |
| [#551](../repos/temporalio-sdk-dotnet/issues.md#551) | 0 | Enable Worker Heartbeating |
| [#479](../repos/temporalio-sdk-dotnet/issues.md#479) | 0 | Worker Versioning high level client |

### Observability & Metrics (4 issues)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | 1 | **Clarify ICustomMetricMeter usage** - Better documentation for custom metrics. |
| [#573](../repos/temporalio-sdk-dotnet/issues.md#573) | 0 | Allow custom meter implementation to disable tracing event listener |
| [#510](../repos/temporalio-sdk-dotnet/issues.md#510) | 0 | Reclassify benign application errors in OpenTelemetry |
| [#496](../repos/temporalio-sdk-dotnet/issues.md#496) | 0 | Inconsistent log property names for workflow run identifier |

### API Improvements (8 issues)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#387](../repos/temporalio-sdk-dotnet/issues.md#387) | 0 | Provide "workflow local" storage |
| [#386](../repos/temporalio-sdk-dotnet/issues.md#386) | 0 | Improve WaitConditionAsync semantics |
| [#360](../repos/temporalio-sdk-dotnet/issues.md#360) | 0 | Auto-skip time when waiting on update result |
| [#337](../repos/temporalio-sdk-dotnet/issues.md#337) | 0 | Include more details from tonic on RPC failures |
| [#307](../repos/temporalio-sdk-dotnet/issues.md#307) | 0 | Replace System.TimeProvider in workflows |
| [#299](../repos/temporalio-sdk-dotnet/issues.md#299) | 0 | Use RpcException for GetSystemInfo failures |
| [#291](../repos/temporalio-sdk-dotnet/issues.md#291) | 0 | Update test running to replay |
| [#246](../repos/temporalio-sdk-dotnet/issues.md#246) | 0 | Expose raw proto objects on WorkflowExecution |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

24 issues (49% of open issues) have had no activity for over 12 months. This is a significant portion that needs triage.

**Close candidates:**
- [#77](../repos/temporalio-sdk-dotnet/issues.md#77) - Time skipping bug from 2023, may be superseded by newer fixes
- [#194](../repos/temporalio-sdk-dotnet/issues.md#194) - Security vulnerability in dev dependency, may have been addressed

**Needs triage:**
- [#286](../repos/temporalio-sdk-dotnet/issues.md#286) - .NET Trimming support - valid but needs roadmap decision (7 upvotes)
- [#131](../repos/temporalio-sdk-dotnet/issues.md#131) - Single-platform NuGet build - needs product decision
- [#256](../repos/temporalio-sdk-dotnet/issues.md#256) - Documentation clarification - quick fix possible

**Keep open:**
- [#363](../repos/temporalio-sdk-dotnet/issues.md#363) - IServiceProvider for interceptors - has active PR
- [#234](../repos/temporalio-sdk-dotnet/issues.md#234) - Payload codec documentation - documentation update needed

### Duplicate Candidates

- [#550](../repos/temporalio-sdk-dotnet/issues.md#550) and [#478](../repos/temporalio-sdk-dotnet/issues.md#478) - Both track CustomSlotSupplier test flake
- [#579](../repos/temporalio-sdk-dotnet/issues.md#579) and [#577](../repos/temporalio-sdk-dotnet/issues.md#577) - Both track segfaults in tests, may be related

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix SIGSEGV crash on Linux ([#579](../repos/temporalio-sdk-dotnet/issues.md#579)) - critical for production reliability
- Fix TLS certificate path loading ([#584](../repos/temporalio-sdk-dotnet/issues.md#584)) - blocks Temporal Cloud adoption
- Update coverlet.collector dependency ([#194](../repos/temporalio-sdk-dotnet/issues.md#194)) - security hygiene

### Phase 2: Developer Experience (Short-term)

- Address time-skipping test server issues ([#179](../repos/temporalio-sdk-dotnet/issues.md#179), [#77](../repos/temporalio-sdk-dotnet/issues.md#77))
- Improve RPC error handling ([#395](../repos/temporalio-sdk-dotnet/issues.md#395), [#337](../repos/temporalio-sdk-dotnet/issues.md#337))
- Complete Nexus Extensions.Hosting support ([#536](../repos/temporalio-sdk-dotnet/issues.md#536))

### Phase 3: Feature Expansion (Medium-term)

- Implement .NET Trimming/AOT support ([#286](../repos/temporalio-sdk-dotnet/issues.md#286)) - 7 upvotes, highest demand
- Build .NET Analyzer for workflow checking ([#576](../repos/temporalio-sdk-dotnet/issues.md#576)) - parity with Go/Java
- IServiceProvider in activity interceptors ([#363](../repos/temporalio-sdk-dotnet/issues.md#363)) - has PR ready

### Phase 4: Maintenance (Ongoing)

- Triage 24 stale issues - close or update as appropriate
- F# samples and documentation ([#390](../repos/temporalio-sdk-dotnet/issues.md#390)) - growing community interest
- Additional platform builds (win-x86, additional architectures)

---

## Recent Activity (Last 30 Days)

| Date | Issue | Type | Title |
|------|-------|------|-------|
| 2026-01-07 | [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | Bug | Workflow task failures may be lost |
| 2026-01-06 | [#587](../repos/temporalio-sdk-dotnet/issues.md#587) | Enhancement | Refactor Bridge.Client to IDisposable |
| 2026-01-06 | [#586](../repos/temporalio-sdk-dotnet/issues.md#586) | Enhancement | Separate unmanaged pointer lifecycle management |
| 2025-12-26 | [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | Bug | Loading TLS certificates from path doesn't work |
| 2025-12-17 | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | Bug | SIGSEGV crash in temporal_core_worker_poll |
| 2025-12-17 | [#578](../repos/temporalio-sdk-dotnet/issues.md#578) | Enhancement | Add Nexus tests for time-skipping environment |
| 2025-12-12 | [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | Enhancement | .NET Analyzer for Checking Workflows |

**Key Insight:** Recent activity is heavily focused on improving the native bridge lifecycle management (#586, #587) and addressing stability issues. The TLS certificate loading bug (#584) is a quick win that would unblock Temporal Cloud users.

---

## Quick Reference: Top 15 High-Impact Issues

| # | Issue | Category | Upvotes | Impact |
|---|-------|----------|-----|--------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | Enhancement | **7** | .NET Trimming (TOP USER REQUEST) |
| 2 | [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | Bug | 0 | Update hangs on time-skipping (8 comments) |
| 3 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | Enhancement | **2** | F# support |
| 4 | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | Bug | 0 | SIGSEGV crash on Linux |
| 5 | [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | Bug | 0 | TLS certificate loading |
| 6 | [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | Bug | 0 | Workflow task failures lost |
| 7 | [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | Enhancement | 0 | .NET Analyzer for workflows |
| 8 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | Enhancement | **1** | Synchronous test Run method |
| 9 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | Enhancement | **1** | Scoped IServiceProvider |
| 10 | [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | Enhancement | **1** | ICustomMetricMeter docs |
| 11 | [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | Enhancement | **1** | Single-platform NuGet |
| 12 | [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | Enhancement | 0 | Virtual service methods |
| 13 | [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | Bug | 0 | RpcException canceled |
| 14 | [#77](../repos/temporalio-sdk-dotnet/issues.md#77) | Bug | 0 | Time-skipping issues |
| 15 | [#280](../repos/temporalio-sdk-dotnet/issues.md#280) | Bug | 0 | ContinueAsNew hangs |
