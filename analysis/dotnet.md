# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 52
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-dotnet/issues.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The .NET SDK has 52 open issues with significant recent activity (9 new issues in the last 30 days). **Critical production issues have emerged** including SIGSEGV crashes on Linux and TLS certificate loading failures. Additionally, the SDK has proposed SafeHandle refactoring to improve memory management. The top user request remains **.NET Trimming support** (7 upvotes).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 31 | Medium |
| Bugs | 13 | High - includes critical production issues |
| Security Vulnerabilities | 1 | Medium |
| Stale Issues (>1 year) | 24 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 13 |
| Total Comments | 54 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 27 (53%) |

### Recommended Actions

1. **URGENT:** Fix SIGSEGV crash on Linux (#579) - production workers crashing
2. **URGENT:** Fix TLS certificate loading (#584) - blocks secure deployments
3. **High:** Implement SafeHandle refactoring (#586, #587) - memory management
4. **Medium:** Fix Nexus timeout handling (#585)
5. **Long-term:** .NET Trimming support (#286 - 7 upvotes)

---

## URGENT: Recent Critical Issues (Last 30 Days)

**9 new issues filed, including production-impacting bugs:**

| Date | Issue | Type | Description |
|------|-------|------|-------------|
| 2026-01-07 | [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | Bug | **Workflow task failures may be lost** (NEW) |
| 2026-01-06 | [#587](../repos/temporalio-sdk-dotnet/issues.md#587) | Refactor | Bridge.Client to IDisposable (SafeHandle pattern) |
| 2026-01-06 | [#586](../repos/temporalio-sdk-dotnet/issues.md#586) | Refactor | Separate pointer lifecycle into SafeHandle types |
| 2026-01-05 | [#585](../repos/temporalio-sdk-dotnet/issues.md#585) | Bug | **Nexus operation ignores ScheduleToCloseTimeout** |
| 2025-12-26 | [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | Bug | **TLS certificates from path doesn't work** |
| 2025-12-17 | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | Bug | **SIGSEGV crash in temporal_core_worker_poll** |
| 2025-12-17 | [#578](../repos/temporalio-sdk-dotnet/issues.md#578) | Enhancement | Add Nexus time-skipping test support |
| 2025-12-12 | [#577](../repos/temporalio-sdk-dotnet/issues.md#577) | Bug | Test host crash flake |
| 2025-12-12 | [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | Enhancement | .NET Analyzer for Checking Workflows |

**Critical Pattern:** Multiple issues (#579, #584, #585, #588) indicate core worker integration stability problems. The SafeHandle refactoring proposals (#586, #587) may address underlying memory management issues.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](../repos/temporalio-sdk-dotnet/issues.md#286) | **7** | 1 | Support .NET Trimming |
| 2 | [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | 1 | 1 | Synchronous Run method in testing |
| 4 | [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | 1 | 2 | Scoped IServiceProvider for ActivityInboundInterceptor |
| 5 | [#256](../repos/temporalio-sdk-dotnet/issues.md#256) | 1 | 0 | Clarify ICustomMetricMeter usage |
| 6 | [#131](../repos/temporalio-sdk-dotnet/issues.md#131) | 1 | 0 | Single-platform local NuGet build |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #286 | 15 | .NET Trimming support |
| 2 | #179 | 8 | Workflow Update hangs on time skipping |
| 3 | #390 | 7 | F# Samples/Documentation |
| 4 | #563 | 5 | global.json SDK version centralization |
| 5 | #577 | 4 | Test host crash flake |
| 6 | #553 | 4 | OperatorService/WorkflowService virtual |
| 7 | #363 | 4 | Scoped IServiceProvider |
| 8 | #585 | 3 | Nexus timeout handling |
| 9 | #420 | 3 | Sync Run method |
| 10 | #395 | 3 | RpcException operation canceled |

---

## 1. Critical: Production Bugs

### 1.1 SIGSEGV Crash on Linux (#579) - URGENT

| Issue | Problem |
|-------|---------|
| [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | Workers crashing with SIGSEGV in `temporal_core_worker_poll_workflow_activation` on Linux |

**Impact:** Production workers are crashing. This is the highest priority bug.

**Recommendation:** Investigate core worker FFI integration. The SafeHandle refactoring (#586, #587) may help address underlying memory management issues.

### 1.2 TLS Certificate Loading (#584) - URGENT

| Issue | Problem |
|-------|---------|
| [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | Loading TLS certificates from path doesn't work |

**Impact:** Users cannot connect to Temporal Cloud or self-hosted clusters with TLS using file paths. This blocks secure deployments.

### 1.3 Nexus Timeout Issues (#585)

| Issue | Problem |
|-------|---------|
| [#585](../repos/temporalio-sdk-dotnet/issues.md#585) | Nexus operation ignores ScheduleToCloseTimeout, retries forever |

**Impact:** Nexus operations can run indefinitely, violating expected timeout behavior.

---

## 2. High Priority: SafeHandle Refactoring

Two related proposals to improve memory management:

| Issue | Proposal |
|-------|----------|
| [#587](../repos/temporalio-sdk-dotnet/issues.md#587) | Refactor Bridge.Client to IDisposable instead of SafeHandle |
| [#586](../repos/temporalio-sdk-dotnet/issues.md#586) | Separate unmanaged pointer lifecycle into SafeHandle types |

**Rationale:** These refactorings may help address the underlying causes of crashes like #579 by improving how unmanaged resources are tracked and disposed.

---

## 3. High Priority: Other Bugs (13 total)

### Test Environment Bugs (4 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#179](../repos/temporalio-sdk-dotnet/issues.md#179) | **Workflow Update hangs on time skipping** | 8 |
| [#577](../repos/temporalio-sdk-dotnet/issues.md#577) | Test host crash flake | 4 |
| [#280](../repos/temporalio-sdk-dotnet/issues.md#280) | TaskQueue not forwarded, breaks ContinueAsNew | 1 |
| [#77](../repos/temporalio-sdk-dotnet/issues.md#77) | Time skipping not working properly | 0 |

### Other Core Bugs (5 issues)

| Issue | Problem |
|-------|---------|
| [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | **Workflow task failures may be lost** (NEW) |
| [#395](../repos/temporalio-sdk-dotnet/issues.md#395) | RpcException: operation was canceled |
| [#357](../repos/temporalio-sdk-dotnet/issues.md#357) | Unexpected activity result serialization |
| [#234](../repos/temporalio-sdk-dotnet/issues.md#234) | Payload codec instance reuse issues |
| [#550](../repos/temporalio-sdk-dotnet/issues.md#550) | CustomSlotSupplier flake |

---

## 4. Enhancement Priorities

### 4.1 .NET Trimming Support (#286 - 7 👍)

**Impact:** Critical for modern .NET deployment scenarios:
- AOT compilation
- Minimal containers
- Serverless deployments

This is the most upvoted issue and aligns with .NET's direction.

### 4.2 Nexus Testing Support (#578)

| Issue | Enhancement |
|-------|-------------|
| [#578](../repos/temporalio-sdk-dotnet/issues.md#578) | Add tests to confirm proper Nexus support in time-skipping test environment |

As Nexus adoption grows, testing support becomes important.

### 4.3 .NET Analyzer (#576)

| Issue | Enhancement |
|-------|-------------|
| [#576](../repos/temporalio-sdk-dotnet/issues.md#576) | .NET Analyzer for Checking Workflows |

Roslyn analyzers can catch workflow determinism issues at compile time.

### 4.4 F# Support (#390 - 2 👍)

| Issue | Enhancement |
|-------|-------------|
| [#390](../repos/temporalio-sdk-dotnet/issues.md#390) | F# Samples/Documentation |

F# is popular in the .NET functional programming community.

### 4.5 Testing Improvements

| Issue | Enhancement |
|-------|-------------|
| [#420](../repos/temporalio-sdk-dotnet/issues.md#420) | Synchronous Run method for tests |
| [#360](../repos/temporalio-sdk-dotnet/issues.md#360) | Auto-skip time in time-skipping test env |

### 4.6 DI/Interceptor Improvements

| Issue | Enhancement |
|-------|-------------|
| [#363](../repos/temporalio-sdk-dotnet/issues.md#363) | Scoped IServiceProvider for interceptors |
| [#553](../repos/temporalio-sdk-dotnet/issues.md#553) | Virtual/interface for OperatorService |

---

## 5. Issue Housekeeping

### 5.1 Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 9 |
| 1-3 months | 6 |
| 3-6 months | 1 |
| 6-12 months | 11 |
| 1-2 years | 21 |
| 2-3 years | 4 |

**Note:** 9 issues in the last 30 days indicates increased activity and potential stability concerns.

### 5.2 Stale Issues (24 issues)

24 issues have had no activity in >12 months. Notable ones:

| Issue | Title | 👍 |
|-------|-------|-----|
| #286 | .NET Trimming | 7 |
| #363 | Scoped IServiceProvider | 1 |
| #256 | ICustomMetricMeter clarity | 1 |
| #131 | Single-platform NuGet build | 1 |

**Recommendation:**
1. Prioritize stale issues with upvotes (#286 especially)
2. Request reproduction on current SDK version for older bugs
3. Close if no response in 30 days

---

## 6. Proposed Roadmap

### Phase 1: Critical Production Fixes (Immediate)
- [ ] **URGENT:** Fix SIGSEGV crash on Linux (#579)
- [ ] **URGENT:** Fix TLS certificate loading (#584)
- [ ] Fix Nexus timeout handling (#585)
- [ ] Fix workflow task failure conversion issues (#588)

### Phase 2: Core Stability (Short-term)
- [ ] Evaluate SafeHandle refactoring (#586, #587)
- [ ] Fix test host crash flake (#577)
- [ ] Fix Workflow Update time skipping hang (#179)
- [ ] Add Nexus time-skipping test support (#578)

### Phase 3: Top Enhancements (Medium-term)
- [ ] .NET Trimming support (#286 - 7 👍)
- [ ] .NET Analyzer for workflows (#576)
- [ ] F# samples/documentation (#390 - 2 👍)

### Phase 4: Testing & DX (Medium-term)
- [ ] Synchronous Run method for tests (#420)
- [ ] Scoped IServiceProvider for interceptors (#363)
- [ ] Time-skipping improvements (#77, #280)

### Ongoing: Housekeeping
- [ ] Triage 24 stale issues
- [ ] Close resolved/outdated issues
- [ ] Update security vulnerability (#194)

---

## 7. Quick Reference: Top 15 High-Impact Issues

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #579 | Bug | 0 | **SIGSEGV crash (URGENT)** |
| 2 | #584 | Bug | 0 | **TLS cert loading (URGENT)** |
| 3 | #585 | Bug | 0 | Nexus timeout handling |
| 4 | #586 | Refactor | 0 | SafeHandle lifecycle |
| 5 | #587 | Refactor | 0 | Bridge.Client IDisposable |
| 6 | #286 | Enhancement | **7** | .NET Trimming (TOP REQUEST) |
| 7 | #179 | Bug | 0 | Update hangs (8 comments) |
| 8 | #577 | Bug | 0 | Test crash flake |
| 9 | #576 | Enhancement | 0 | .NET Analyzer |
| 10 | #578 | Enhancement | 0 | Nexus test support |
| 11 | #390 | Enhancement | **2** | F# support |
| 12 | #420 | Enhancement | **1** | Sync test Run |
| 13 | #363 | Enhancement | **1** | Scoped IServiceProvider |
| 14 | #553 | Enhancement | 0 | Virtual services |
| 15 | #280 | Bug | 0 | ContinueAsNew hangs |

**Key Insight:** The .NET SDK has experienced a spike in critical issues recently. The SIGSEGV crash (#579) and TLS certificate loading failure (#584) are blocking production deployments. The SafeHandle refactoring proposals (#586, #587) suggest the team is aware of underlying memory management concerns. These should be addressed before pursuing new features like .NET Trimming.
