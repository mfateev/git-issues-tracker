# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 48
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-dotnet/ISSUES.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The .NET SDK is a mature, relatively small issue set with 48 open issues. The top user request is **.NET Trimming support** (7 upvotes), which is important for modern .NET deployment scenarios (AOT, minimal containers). The SDK has good stability with only 12 bugs.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 31 | Medium |
| Bugs | 12 | High |
| Security Vulnerabilities | 1 | Medium |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 13 |
| Total Comments | 51 |
| Issues with Upvotes | 6 (13%) |
| Issues with Comments | 26 (54%) |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | **7** | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | Synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | Scoped IServiceProvider for ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | Clarify ICustomMetricMeter usage |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | Single-platform local NuGet build |

---

## High Priority: Bugs (12 issues)

### Test Environment Bugs (4 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | **Workflow Update hangs on time skipping** | 8 |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | TaskQueue not forwarded, breaks ContinueAsNew | 1 |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | Time skipping not working properly | 0 |
| [#577](https://github.com/temporalio/sdk-dotnet/issues/577) | Test host crash flake | 4 |

### Core SDK Bugs (5 issues)

| Issue | Problem |
|-------|---------|
| [#584](https://github.com/temporalio/sdk-dotnet/issues/584) | TLS certificates from path doesn't work |
| [#579](https://github.com/temporalio/sdk-dotnet/issues/579) | SIGSEGV crash on Linux |
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | RpcException: operation was canceled |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | Unexpected activity result serialization |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | Payload codec instance reuse issues |

---

## Enhancement Priorities

### 1. .NET Trimming Support (#286 - 7 👍)

**Impact:** Critical for modern .NET deployment (AOT compilation, minimal containers, serverless).

### 2. F# Support (#390 - 2 👍)

**Impact:** F# is popular in the .NET functional programming community.

### 3. Testing Improvements

| Issue | Enhancement |
|-------|-------------|
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | Synchronous Run method |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | TestWorkflowEnvironment mocking support |

### 4. DI/Interceptor Improvements

| Issue | Enhancement |
|-------|-------------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | Scoped IServiceProvider for interceptors |
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | Virtual/interface for OperatorService |

---

## Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 6 |
| 1-3 months | 5 |
| 3-6 months | 2 |
| 6-12 months | 12 |
| 1-2 years | 19 |
| 2-3 years | 4 |

---

## Proposed Roadmap

### Phase 1: Critical Bugs
- [ ] Fix time skipping test environment (#179, #77, #280)
- [ ] Fix SIGSEGV crash on Linux (#579)
- [ ] Fix TLS certificate loading (#584)

### Phase 2: Top Enhancements
- [ ] .NET Trimming support (#286 - 7 👍)
- [ ] F# samples/documentation (#390 - 2 👍)

### Phase 3: Testing & DX
- [ ] Synchronous Run method for tests (#420)
- [ ] Scoped IServiceProvider for interceptors (#363)

---

## Quick Reference: Top 10 Issues

| # | Issue | Category | 👍 | Title |
|---|-------|----------|-----|-------|
| 1 | #286 | Enhancement | **7** | .NET Trimming |
| 2 | #179 | Bug | 0 | Update hangs (8 comments) |
| 3 | #390 | Enhancement | **2** | F# support |
| 4 | #579 | Bug | 0 | SIGSEGV on Linux |
| 5 | #584 | Bug | 0 | TLS cert loading |
| 6 | #420 | Enhancement | **1** | Sync test Run |
| 7 | #363 | Enhancement | **1** | Scoped IServiceProvider |
| 8 | #577 | Bug | 0 | Test crash flake |
| 9 | #280 | Bug | 0 | ContinueAsNew hangs |
| 10 | #553 | Enhancement | 0 | Virtual services |
