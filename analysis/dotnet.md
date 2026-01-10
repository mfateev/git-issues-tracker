# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 49
**Total Closed Issues:** 240
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The .NET SDK demonstrates excellent health with an 83% resolution rate and a median time to close of 21 calendar days (16 business days). The backlog is effectively stable with only +3 net issues over the past 12 months. The SDK is relatively mature with a small issue volume compared to other Temporal SDKs, but nearly half of open issues (49%) are stale, indicating an opportunity for housekeeping. Top user demand centers on .NET ecosystem improvements including trimming/AOT support (7 upvotes) and F# language support (2 upvotes).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 12 | High - includes a SIGSEGV crash on Linux and test server issues |
| Enhancements | 30 | Medium - ecosystem support (trimming, F#) and testing improvements |
| Security Vulnerabilities | 1 | Low - dependency vulnerability requiring assessment |
| Stale Issues (>12 months) | 24 (49%) | Medium - significant housekeeping opportunity |

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

1. **Immediate:** Investigate SIGSEGV crash on Linux ([#579](https://github.com/temporalio/sdk-dotnet/issues/579)) - critical production stability issue
2. **Short-term:** Fix TLS certificate loading from path ([#584](https://github.com/temporalio/sdk-dotnet/issues/584)) - blocks secure deployments
3. **Medium-term:** Implement .NET trimming/AOT support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286)) - highest user demand with 7 upvotes
4. **Long-term:** Develop .NET Analyzer for workflow checking ([#576](https://github.com/temporalio/sdk-dotnet/issues/576)) - will improve developer experience significantly
5. **Housekeeping:** Triage 24 stale issues (49% of backlog) - many appear resolved or low-priority

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is effectively stable with negligible growth over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 87 | 84 | +3 |

The .NET SDK team maintains excellent velocity parity, with closures closely tracking new issues each month. The small +3 net change indicates sustainable maintenance capacity.

### Last 6 Months: Detailed Analysis

The last 6 months show perfect equilibrium with 41 issues opened and 41 closed.

| Metric | Value |
|--------|-------|
| Issues Opened | 41 |
| Issues Closed | 41 |
| Bugs Closed | 10 |
| Enhancements Completed | 23 |

### Popular Requests Resolved (Last 6 Months)

No high-upvote issues (3+) were closed in the last 6 months. Recent closures focused on internal improvements and bug fixes rather than user-requested features.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | Clarify what the ICustomMetricMeter is used for |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | Support single-platform local NuGet package |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | OperatorService and WorkflowService members virtual or interface |
| 6 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 4 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 3 | Provide synchronous Run method in testing |
| 8 | [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | RpcException: operation was canceled |
| 9 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | Unexpected reuse of payload instances in payload codec |
| 10 | [#579](https://github.com/temporalio/sdk-dotnet/issues/579) | 2 | SIGSEGV crash on Linux |

---

## Issue Analysis by Category

### Security Vulnerabilities (1 issue)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | Unknown | coverlet.collector.3.1.2.nupkg vulnerability - stale issue from 2024, likely outdated dependency |

**Recommendation:** Verify if the coverlet.collector dependency has been updated. If resolved, close the issue.

### Bugs (12 open issues)

#### Critical: Platform Stability

| Issue | Comments | Description |
|-------|----------|-------------|
| [#579](https://github.com/temporalio/sdk-dotnet/issues/579) | 2 | **SIGSEGV crash in `temporal_core_worker_poll_workflow_activation` on Linux.** Intermittent crash during workflow polling in CI environments on Ubuntu. Crash occurs in the native Rust bridge, not user code. Works on Windows but fails on Linux. High priority - affects production deployments. |
| [#584](https://github.com/temporalio/sdk-dotnet/issues/584) | 0 | **TLS certificates from path don't work.** `TEMPORAL_TLS_CLIENT_CERT_PATH` env var is ignored; only `TEMPORAL_TLS_CLIENT_CERT_DATA` works. Bug in `ClientEnvConfig.Tls.ToTlsOptions` which only reads `Data` property. Blocks secure deployments using file-based certificates. |

#### High: Test Server Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | **Workflow Update hangs on time skipping environment.** Long-standing issue (2+ years) where workflow updates hang in time-skipping test server. Linked to Java SDK test server issue. Workaround: use local server instead of time-skipping for update tests. |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | 0 | **Time skipping test server not auto-skipping properly.** When using time-skipping server with long timers (no activities), `env.DelayAsync` sleeps real time instead of skipping. 2+ years old. |

#### Medium: Operational Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | **RpcException: operation was canceled.** Intermittent cancellation errors when using `DescribeNamespaceAsync` for health checks with singleton client. |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | **Payload instance reuse in codec.** Same payload instance passed to codec for both activity and workflow failures in specific `ApplicationFailureException` scenarios. Affects custom payload codecs. |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | 1 | **Unexpected serialization of activity results.** |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | 1 | **TaskQueue not forwarded when using Test Environment with child workflows.** |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | 1 | **Handle multiple completion commands.** |

#### Low: Test Flakes

| Issue | Comments | Description |
|-------|----------|-------------|
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | 0 | Workflow task failures during conversion not properly retried |
| [#550](https://github.com/temporalio/sdk-dotnet/issues/550) | 1 | Investigate `CanRunWith_CustomSlotSupplier` flake |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | 0 | Investigate `ExecuteWorkflowAsync_PollingBehavior_Auto` flake |

---

## Enhancement Requests (30 issues)

### .NET Ecosystem Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | **Support .NET Trimming/AOT** - Top user request. Current SDK uses PInvoke and reflection which breaks trimming. Would enable publishing trimmed/AOT applications. Requires adding trimming annotations and running all tests while trimmed. |
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | **F# Samples/Documentation** - Request for F# examples and documentation. Community has shared workarounds for F# usage including custom `DataConverter` with `FSharp.SystemTextJson`. Maintainers note this would likely require a `Temporalio.Extensions.FSharp` package. |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | **Single-platform local NuGet package** - Support for platform-specific NuGet packages. |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | **Support for win-x86** - 32-bit Windows support. |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | **.NET Analyzer for Checking Workflows** - Roslyn analyzer to transitively check invalid actions in workflows. Would match Go and Java equivalents. Would detect workflow constraint violations at compile time. |
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | **Synchronous Run method in testing** - Request for sync `Run` method on `ActivityEnvironment`. Maintainer response: use `.GetAwaiter().GetResult()` as workaround; async kept for future compatibility. |
| [#291](https://github.com/temporalio/sdk-dotnet/issues/291) | 0 | **Update test running to replay** |
| [#229](https://github.com/temporalio/sdk-dotnet/issues/229) | 0 | **Separate Temporalio.Testing package** |

### Dependency Injection & Services

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | **Scoped IServiceProvider for ActivityInboundInterceptor** - Allow interceptors to access scoped services. PR opened for discussion. Would enable cross-cutting concerns in interceptors that depend on scoped services. |
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | **Workflow local variables** - Workflow-scoped storage similar to `AsyncLocal`. Would work like `public static readonly WorkflowLocal<string> MyValue = new()`. |

### API & Testability

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | **Virtual methods on OperatorService/WorkflowService** - Enable mocking for unit tests. Maintainer suggests using ephemeral dev server or mocking `InvokeRpcAsync` instead. |
| [#246](https://github.com/temporalio/sdk-dotnet/issues/246) | 0 | **Expose raw proto objects on WorkflowHistory** |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | **Enforce no-commands-allowed restriction in tests** |

### Testing Infrastructure

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | 0 | **Auto-skip time in time-skipping server** |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | **Improve WaitConditionAsync semantics** |

### Observability & Configuration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | **Clarify ICustomMetricMeter usage** - Documentation for custom metrics. |
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | **Include more details from tonic errors** |
| [#496](https://github.com/temporalio/sdk-dotnet/issues/496) | 0 | **Inconsistent log property names for workflow run identifier** |
| [#299](https://github.com/temporalio/sdk-dotnet/issues/299) | 0 | **Log server version upon initial client connection** |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | **Replace System.TimeProvider in workflow context** |

### Nexus Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | 0 | **Add tests for Nexus support in .NET 9** |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

24 issues (49% of open backlog) have had no activity for over 12 months.

#### Close Candidates

- **[#194](https://github.com/temporalio/sdk-dotnet/issues/194)** - coverlet.collector vulnerability from March 2024. Likely resolved with dependency updates.
- **[#131](https://github.com/temporalio/sdk-dotnet/issues/131)** - Single-platform NuGet request from September 2023. Low interest, may not align with distribution strategy.

#### Needs Triage

- **[#77](https://github.com/temporalio/sdk-dotnet/issues/77)** - Time skipping auto-skip issue from May 2023. May be superseded by other time-skipping fixes.
- **[#179](https://github.com/temporalio/sdk-dotnet/issues/179)** - Workflow Update hanging. Linked to upstream Java SDK issue. Check if upstream fix resolves this.
- **[#234](https://github.com/temporalio/sdk-dotnet/issues/234)** - Payload reuse bug. Has reproduction repo. Needs investigation.

#### Keep Open

- **[#286](https://github.com/temporalio/sdk-dotnet/issues/286)** - .NET Trimming support. Highest upvoted issue, valid feature request.
- **[#363](https://github.com/temporalio/sdk-dotnet/issues/363)** - Scoped IServiceProvider. Valid DI improvement with active PR discussion.
- **[#256](https://github.com/temporalio/sdk-dotnet/issues/256)** - ICustomMetricMeter documentation. Valid documentation gap.

### Duplicate Candidates

No obvious duplicates identified. The issue backlog is well-organized.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **[#579](https://github.com/temporalio/sdk-dotnet/issues/579)** - Investigate and fix SIGSEGV crash on Linux
- **[#584](https://github.com/temporalio/sdk-dotnet/issues/584)** - Fix TLS certificate loading from path
- **[#194](https://github.com/temporalio/sdk-dotnet/issues/194)** - Assess and close dependency vulnerability issue

### Phase 2: Developer Experience (Short-term)

- **[#179](https://github.com/temporalio/sdk-dotnet/issues/179)** - Address Workflow Update time-skipping hang (coordinate with Java SDK team)
- **[#576](https://github.com/temporalio/sdk-dotnet/issues/576)** - Begin development of .NET Analyzer for workflow checking
- **[#363](https://github.com/temporalio/sdk-dotnet/issues/363)** - Complete scoped IServiceProvider for interceptors

### Phase 3: Ecosystem Expansion (Medium-term)

- **[#286](https://github.com/temporalio/sdk-dotnet/issues/286)** - Implement .NET trimming/AOT support (highest user demand)
- **[#390](https://github.com/temporalio/sdk-dotnet/issues/390)** - Create F# samples and consider `Temporalio.Extensions.FSharp` package

### Phase 4: Maintenance (Ongoing)

- Triage 24 stale issues - close resolved items, reprioritize valid requests
- Monitor test flakes and stabilize CI ([#550](https://github.com/temporalio/sdk-dotnet/issues/550), [#549](https://github.com/temporalio/sdk-dotnet/issues/549), [#588](https://github.com/temporalio/sdk-dotnet/issues/588))
- Continue maintaining excellent closure velocity (currently ~7 issues/month)
