# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 49
**Total Closed Issues:** 3
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md) - [Full Issue Data](../repos/temporalio-sdk-dotnet/issues.md)

**Other SDKs:** [Java](java.md) - [Go](go.md) - [TypeScript](typescript.md) - [Python](python.md) - [PHP](php.md) - [Ruby](ruby.md) - [Server](server.md) - [Features](features.md)

---

## Executive Summary

The .NET SDK has 49 open issues with a relatively balanced distribution between bugs (12) and enhancements (30). The SDK faces a growing backlog with +20 net issues over the past 12 months. Critical stability concerns include native bridge crashes (SIGSEGV) on Linux and time-skipping test environment issues. The top user-requested feature is .NET Trimming support with 7 upvotes.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 12 | High - Includes native crashes and test environment issues |
| Enhancements | 30 | Medium - Developer experience and framework improvements |
| Security Issues | 1 | Low - Dependency vulnerability (coverlet.collector) |
| Stale Issues (>1 year) | 24 | Review - 49% of open issues need triage |

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
| Resolution Rate | 6% (3/52) |
| Median Time to Close | 25 days (calendar) / 17 days (business) |
| Resolved within 30 days | 67% |
| Resolved within 90 days | 67% |

### Recommended Actions

1. **Immediate:** Investigate and fix native bridge SIGSEGV crashes on Linux (#579, #577)
2. **Short-term:** Address time-skipping test environment bugs (#179, #77)
3. **Medium-term:** Implement .NET Trimming support (#286 - top user request)
4. **Long-term:** F# support and documentation (#390)
5. **Housekeeping:** Triage 24 stale issues (49% of backlog)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The .NET SDK backlog is growing steadily with more issues opened than closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 23 | 3 | +20 |

**Backlog Growing:** 20 more issues opened than closed in the last 12 months. The SDK has a very low resolution rate (6%), indicating a need for increased maintainer attention or community contribution.

### Last 6 Months: Detailed Analysis

Recent activity shows increased issue creation, particularly in December 2025 and January 2026.

| Metric | Value |
|--------|-------|
| Issues Opened | 17 |
| Issues Closed | 3 |
| Bugs Closed | 1 |
| Enhancements Completed | 1 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. All closed issues were self-resolved by reporters or addressed internal test flakes.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | 1 | 0 | Clarify ICustomMetricMeter usage in DiagnosticSource README |
| 6 | [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | 1 | 0 | Support single-platform local NuGet package build |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | 15 | Support .NET Trimming |
| 2 | [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 7 | F# Samples/Documentation |
| 4 | [#563](../repos/temporalio-sdk-dotnet/issues.md#563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | 4 | OperatorService/WorkflowService virtual methods |
| 6 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 4 | Scoped IServiceProvider for ActivityInboundInterceptor |
| 7 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 3 | Synchronous Run method in testing |
| 8 | [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | 3 | RpcException: operation was canceled |
| 9 | [#234](../repos/temporalio-sdk-dotnet/issues.md#234) | 3 | Payload instance reuse in codec |
| 10 | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | 2 | SIGSEGV crash in temporal_core_worker_poll |

---

## Issue Analysis by Category

### Critical: Native Bridge Crashes (2 issues)

These issues represent serious stability concerns involving crashes in the native Rust bridge layer. Both occur primarily on Linux and affect CI/testing environments.

| Issue | Description | Status |
|-------|-------------|--------|
| [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux. Intermittent, occurs during workflow polling. | Open |
| [#577](../repos/temporalio-sdk-dotnet/issues.md#577) | Test host crash flake. Root cause identified as use-after-free in SafeHandle/destructor lifecycle. | Closed (fixed) |

**Analysis:** Issue #577 was recently closed after identifying the root cause as improper finalizer usage for native resources. The fix involves stopping the use of destructors for freeing native memory and relying only on explicit Dispose calls. Issue #579 may be related and could benefit from similar investigation.

**Recommendation:** Apply lessons from #577 fix to investigate #579. Consider audit of all SafeHandle/unmanaged pointer lifecycle patterns.

### High Priority: Time-Skipping Test Environment Bugs (4 issues)

The time-skipping test environment has multiple reported issues affecting workflow testing.

| Issue | Problem | Priority |
|-------|---------|----------|
| [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | Workflow Update hangs on time skipping environment | High (8 comments) |
| [#77](../repos/temporalio-sdk-dotnet/issues.md#77) | Time skipping test server not auto skipping time properly | Medium |
| [#280](../repos/temporalio-sdk-dotnet/issues.md#280) | TaskQueue not forwarded in Test Environment, breaks ContinueAsNew | Medium |
| [#360](../repos/temporalio-sdk-dotnet/issues.md#360) | Auto-skip time when waiting on update result | Low (enhancement) |

**Root Cause:** The time-skipping server is implemented in the Java SDK. Issue #179 references a related Java SDK issue (#1903).

**Recommendation:** Coordinate with Java SDK team on time-skipping server improvements.

### Medium Priority: Client Connection & RPC Issues (3 issues)

| Issue | Problem |
|-------|---------|
| [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | RpcException: operation was canceled - thrown immediately, not actual timeout |
| [#337](../repos/temporalio-sdk-dotnet/issues.md#337) | Need more details from tonic for failed RPC calls |
| [#299](../repos/temporalio-sdk-dotnet/issues.md#299) | Use RpcException for failed GetSystemInfo on initial connection |

### Other Bugs (4 issues)

| Issue | Description |
|-------|-------------|
| [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | Workflow task failures may be lost during failure conversion |
| [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | Loading TLS certificates from path doesn't work |
| [#234](../repos/temporalio-sdk-dotnet/issues.md#234) | Payload instance reuse in payload codec |
| [#357](../repos/temporalio-sdk-dotnet/issues.md#357) | Unexpected serialization of activity results (WorkflowHandle credential leak) |

---

## Enhancement Requests (30 issues)

### .NET Platform Support

| Issue | Request |
|-------|---------|
| [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | **Support .NET Trimming** (7 upvotes - TOP REQUEST) |
| [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | Support single-platform local NuGet package build |
| [#247](../repos/temporalio-sdk-dotnet/issues.md#247) | Support for win-x86 |

**Analysis:** .NET Trimming (#286) is the most upvoted issue. Trimming/AOT support requires annotation of P/Invoke and reflection usage throughout the SDK.

### Language & Framework Support

| Issue | Request |
|-------|---------|
| [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | **F# Samples/Documentation** (2 upvotes) |
| [#435](../repos/temporalio-sdk-dotnet/issues.md#435) | Workflow logging - NLog async calls compatibility |

**Analysis:** F# support is requested but would require a dedicated extension package for proper integration with F# idioms (unions, async, etc.). Community workarounds exist using FSharp.SystemTextJson.

### Testing & Development Experience

| Issue | Request |
|-------|---------|
| [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | Synchronous Run method in ActivityEnvironment |
| [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | .NET Analyzer for Checking Workflows |
| [#291](../repos/temporalio-sdk-dotnet/issues.md#291) | Update test running to replay |
| [#229](../repos/temporalio-sdk-dotnet/issues.md#229) | Make Temporalio.Testing a separate NuGet package |
| [#578](../repos/temporalio-sdk-dotnet/issues.md#578) | Add Nexus tests for time-skipping environment |

### Dependency Injection & Interceptors

| Issue | Request |
|-------|---------|
| [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | Make OperatorService/WorkflowService methods virtual or interface-based |

### Workflow & Activity Improvements

| Issue | Request |
|-------|---------|
| [#387](../repos/temporalio-sdk-dotnet/issues.md#387) | Provide "workflow local" storage |
| [#386](../repos/temporalio-sdk-dotnet/issues.md#386) | Improve WaitConditionAsync semantics |
| [#412](../repos/temporalio-sdk-dotnet/issues.md#412) | Expose Workflow cancel cause/reason |
| [#402](../repos/temporalio-sdk-dotnet/issues.md#402) | Expose read-only headers to activity info |
| [#398](../repos/temporalio-sdk-dotnet/issues.md#398) | Add explicit memoization support to Patched() API |
| [#307](../repos/temporalio-sdk-dotnet/issues.md#307) | Replace System.TimeProvider in workflows |
| [#243](../repos/temporalio-sdk-dotnet/issues.md#243) | Enforce no-commands-allowed restrictions in read-only contexts |
| [#176](../repos/temporalio-sdk-dotnet/issues.md#176) | Handle possibility of update-before-start |

### Infrastructure & Observability

| Issue | Request |
|-------|---------|
| [#563](../repos/temporalio-sdk-dotnet/issues.md#563) | Use global.json file to centralize SDK version |
| [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | Clarify ICustomMetricMeter usage documentation |
| [#496](../repos/temporalio-sdk-dotnet/issues.md#496) | Inconsistent log property names for workflow run identifier |
| [#246](../repos/temporalio-sdk-dotnet/issues.md#246) | Expose raw proto objects on WorkflowExecution |
| [#171](../repos/temporalio-sdk-dotnet/issues.md#171) | Schedule creation should create tracing span |

### Worker Versioning & Nexus

| Issue | Request |
|-------|---------|
| [#479](../repos/temporalio-sdk-dotnet/issues.md#479) | Worker Versioning high level client |
| [#558](../repos/temporalio-sdk-dotnet/issues.md#558) | Allow overriding Worker Deployment Version for Child Workflows |
| [#568](../repos/temporalio-sdk-dotnet/issues.md#568) | Support non-workflow activities |

### Bridge & Internal Improvements

| Issue | Request |
|-------|---------|
| [#587](../repos/temporalio-sdk-dotnet/issues.md#587) | Refactor Bridge.Client to IDisposable instead of SafeHandle |
| [#586](../repos/temporalio-sdk-dotnet/issues.md#586) | Separate unmanaged pointer lifecycle into SafeHandle types |
| [#440](../repos/temporalio-sdk-dotnet/issues.md#440) | Support user data in forwarded log callback in C bridge |

---

## Security Issues (1 issue)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#194](../repos/temporalio-sdk-dotnet/issues.md#194) | 7.5 (High) | coverlet.collector.3.1.2.nupkg vulnerability |

**Analysis:** This is a test dependency vulnerability, not affecting production deployments. Should be resolved by updating the coverlet.collector package.

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

24 issues (49%) are stale with no activity for over 12 months.

**Close candidates (likely resolved or no longer relevant):**
- [#131](../repos/temporalio-sdk-dotnet/issues.md#131) - Single-platform NuGet build (2+ years old, low activity)
- [#194](../repos/temporalio-sdk-dotnet/issues.md#194) - Dependency vulnerability (test-only, should just update)

**Needs triage (require maintainer decision):**
- [#286](../repos/temporalio-sdk-dotnet/issues.md#286) - .NET Trimming (7 upvotes, valid feature request)
- [#363](../repos/temporalio-sdk-dotnet/issues.md#363) - Scoped IServiceProvider (has open PR #364)
- [#280](../repos/temporalio-sdk-dotnet/issues.md#280) - Test Environment TaskQueue issue
- [#234](../repos/temporalio-sdk-dotnet/issues.md#234) - Payload codec instance reuse

**Keep open (valid issues, just not worked on):**
- [#77](../repos/temporalio-sdk-dotnet/issues.md#77) - Time skipping test server issues
- [#179](../repos/temporalio-sdk-dotnet/issues.md#179) - Workflow Update hangs (blocked on Java SDK fix)

### Duplicate Candidates

- [#478](../repos/temporalio-sdk-dotnet/issues.md#478) and [#550](../repos/temporalio-sdk-dotnet/issues.md#550) - Both track CustomSlotSupplier test flake (consider consolidating)

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- [ ] Investigate SIGSEGV crash on Linux (#579) - apply learnings from #577
- [ ] Fix TLS certificate loading from path (#584)
- [ ] Address workflow task failure conversion issue (#588)

### Phase 2: Developer Experience (Short-term)

- [ ] Improve time-skipping test environment reliability (#179, #77, #280)
- [ ] Add .NET Analyzer for workflow checking (#576)
- [ ] Implement SafeHandle refactoring (#586, #587)

### Phase 3: Feature Expansion (Medium-term)

- [ ] **Implement .NET Trimming support (#286)** - top user request
- [ ] F# documentation and samples (#390)
- [ ] Scoped IServiceProvider for interceptors (#363, PR #364)

### Phase 4: Maintenance (Ongoing)

- [ ] Triage 24 stale issues
- [ ] Update coverlet.collector dependency (#194)
- [ ] Consolidate duplicate test flake issues (#478, #550)
- [ ] Improve error messages for RPC failures (#337)

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
| 2025-12-12 | [#577](../repos/temporalio-sdk-dotnet/issues.md#577) | Bug | Investigate test host crash flake (CLOSED) |
| 2025-12-12 | [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | Enhancement | .NET Analyzer for Checking Workflows |

**Key Insight:** Recent activity is heavily focused on improving the native bridge lifecycle management (#586, #587) following the identification and fix of the test host crash issue (#577). This suggests active work on SDK stability. The test crash flake (#577) was closed in January 2026 after root cause analysis identified improper finalizer usage for native resources.

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

**Key Insight:** The .NET SDK has a growing backlog (+20 in 12 months) with a very low resolution rate (6%). The most-requested feature (.NET Trimming) has 7 upvotes and aligns with modern .NET deployment practices. Stability issues (#579, #584, #588) should be prioritized before new feature work. The recent test crash fix (#577) demonstrates active maintenance of the native bridge layer.
