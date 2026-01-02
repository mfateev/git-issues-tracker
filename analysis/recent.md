# Recent Issues Analysis

**Generated:** 2026-01-02
**Period:** Last 30 days (36 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerabilities

Two CVEs reported for the Temporal server requiring immediate attention:

| Issue | CVE | Description |
|-------|-----|-------------|
| [#8866](../repos/temporalio-temporal/issues.md#8866) | CVE-2025-61729 | golang:crypto/x509 vulnerability |
| [#8865](../repos/temporalio-temporal/issues.md#8865) | CVE-2025-61727 | golang:crypto/x509 vulnerability |

**Recommendation:** Prioritize patching these in the next server release.

### High: Production-Impacting Bugs

| Issue | SDK | Impact |
|-------|-----|--------|
| [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | .NET | **SIGSEGV crash** on Linux - workers crashing in production |
| [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | .NET | TLS certificates from path broken - blocks secure deployments |
| [#8864](../repos/temporalio-temporal/issues.md#8864) | Server | Workflow tasks failing with PostgreSQL - "Workflow Task in failed state" |
| [#8902](../repos/temporalio-temporal/issues.md#8902) | Server | History service memory leak - upward trend over time |

### Medium: Performance Regressions

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | TypeScript | Performance regression from 1.13.1 → 1.13.2 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | TypeScript | High CPU with OTel instrumentation in v1.13.x |

Both TypeScript issues appear related to the 1.13.x release line. Consider investigating a common root cause.

---

## Emerging Themes

### 1. TypeScript SDK 1.13.x Stability Issues

The TypeScript SDK v1.13.x release line has multiple reported problems:
- Performance regression ([#1860](../repos/temporalio-sdk-typescript/issues.md#1860))
- High CPU with OpenTelemetry ([#1859](../repos/temporalio-sdk-typescript/issues.md#1859))
- Signal handling bug causing CancelledFailure ([#1866](../repos/temporalio-sdk-typescript/issues.md#1866))
- Unable to import reflect-metadata ([#1858](../repos/temporalio-sdk-typescript/issues.md#1858))

**Recommendation:** Consider a patch release addressing these regressions.

### 2. .NET SDK Core Stability

The .NET SDK has several concerning issues:
- SIGSEGV crashes on Linux ([#579](../repos/temporalio-sdk-dotnet/issues.md#579))
- TLS certificate loading broken ([#584](../repos/temporalio-sdk-dotnet/issues.md#584))
- Test host crash flakes ([#577](../repos/temporalio-sdk-dotnet/issues.md#577))

These suggest potential issues with the core worker integration. The crashes affect production deployments.

### 3. OpenTelemetry/Tracing Gaps

Multiple issues across SDKs related to observability:
- TypeScript: OTel causing high CPU ([#1859](../repos/temporalio-sdk-typescript/issues.md#1859))
- TypeScript: OTel docs need correction ([#1854](../repos/temporalio-sdk-typescript/issues.md#1854))
- Java: OpenTracing missing updateWithStart support ([#2752](../repos/temporalio-sdk-java/issues.md#2752))

**Pattern:** Tracing integrations remain a pain point as new features (like updateWithStart) don't have tracing support.

### 4. Server Operational Concerns

Several server issues point to operational challenges:
- History service memory growth ([#8902](../repos/temporalio-temporal/issues.md#8902))
- history_node table unbounded growth ([#8790](../repos/temporalio-temporal/issues.md#8790))
- Elasticsearch deprecation warnings ([#8909](../repos/temporalio-temporal/issues.md#8909))
- Scheduler listing not showing triggerImmediately runs ([#8833](../repos/temporalio-temporal/issues.md#8833))

**Pattern:** Users running at scale are encountering growth/retention issues.

### 5. AI/Modern Framework Integration

Continued interest in AI and modern framework support:
- TypeScript: AI SDK v6 integration ([#1864](../repos/temporalio-sdk-typescript/issues.md#1864))
- PHP: Symfony 8.0 support ([#670](../repos/temporalio-sdk-php/issues.md#670))
- Java: Jackson 3 support ([#2746](../repos/temporalio-sdk-java/issues.md#2746))

---

## By Category

### Bugs (16 issues)
- **Server:** 5 (security, memory, PostgreSQL, scheduler)
- **TypeScript:** 5 (signals, performance, OTel, bundling)
- **.NET:** 4 (crashes, TLS, test flakes)
- **Python:** 2 (sandbox warnings, error handling)

### Feature Requests (18 issues)
- **Server:** 2 (replay optimization, workflow listing)
- **TypeScript:** 3 (per-worker logger, AI SDK, docs)
- **Java:** 4 (Spring placeholders, Jackson 3, tracing, virtual threads)
- **.NET:** 2 (Nexus testing, workflow analyzer)
- **PHP:** 2 (Symfony 8, workflow details)
- **Go:** 1 (configurable RPC timeout)
- **Features:** 2 (worker metadata, build tooling)

### Internal/Testing (2 issues)
- Java test reporter issues
- Features pnpm build fix

---

## Recommendations

1. **Immediate:** Address CVE-2025-61729 and CVE-2025-61727 in server
2. **High Priority:** Investigate .NET SIGSEGV crashes affecting production users
3. **High Priority:** TypeScript 1.13.x patch release for performance/stability regressions
4. **Medium Priority:** Review history service memory patterns and retention
5. **Track:** OpenTelemetry integration gaps across SDKs for coordinated improvement
