# Recent Issues Analysis

**Generated:** 2026-01-07
**Period:** Last 30 days (42 new issues)
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
| [#373](../repos/temporalio-sdk-ruby/issues.md#373) | Ruby | Fiber state corruption after workflow timeout - x86_64 specific |
| [#8864](../repos/temporalio-temporal/issues.md#8864) | Server | Workflow tasks failing with PostgreSQL - "Workflow Task in failed state" |
| [#8902](../repos/temporalio-temporal/issues.md#8902) | Server | History service memory leak - upward trend over time |

### Medium: Performance & Stability Regressions

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | TypeScript | Performance regression from 1.13.1 → 1.13.2 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | TypeScript | High CPU with OTel instrumentation in v1.13.x |
| [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | TypeScript | Signal causing CancelledFailure on 1.14.0 |
| [#585](../repos/temporalio-sdk-dotnet/issues.md#585) | .NET | Nexus operation ignores ScheduleToCloseTimeout |

Both TypeScript issues appear related to the 1.13.x release line. Consider investigating a common root cause.

---

## Emerging Themes

### 1. TypeScript SDK Stability Concerns (1.13.x-1.14.x)

Multiple stability issues in recent TypeScript releases:
- Performance regression ([#1860](../repos/temporalio-sdk-typescript/issues.md#1860))
- High CPU with OpenTelemetry ([#1859](../repos/temporalio-sdk-typescript/issues.md#1859))
- Signal handling causing CancelledFailure ([#1866](../repos/temporalio-sdk-typescript/issues.md#1866))
- Environment config not reading correct path on macOS ([#1869](../repos/temporalio-sdk-typescript/issues.md#1869))

**Recommendation:** Consider a patch release addressing these regressions. The OTel and performance issues may share a root cause.

### 1a. OpenTelemetry Issues Across SDKs

OTel instrumentation problems appearing in multiple SDKs:
- TypeScript: High CPU with OTel in 1.13.x ([#1859](../repos/temporalio-sdk-typescript/issues.md#1859))
- Go: Incorrect metric type for Counter ([#2140](../repos/temporalio-sdk-go/issues.md#2140))

**Pattern:** OTel integration may need cross-SDK review for correctness and performance.

### 2. .NET SDK Core Stability & Nexus Issues

The .NET SDK has several concerning issues affecting production:
- SIGSEGV crashes on Linux ([#579](../repos/temporalio-sdk-dotnet/issues.md#579))
- TLS certificate loading broken ([#584](../repos/temporalio-sdk-dotnet/issues.md#584))
- Nexus timeout handling issues ([#585](../repos/temporalio-sdk-dotnet/issues.md#585))
- Test host crash flakes ([#577](../repos/temporalio-sdk-dotnet/issues.md#577))
- Workflow task failure conversion issues may be lost ([#588](../repos/temporalio-sdk-dotnet/issues.md#588))
- SafeHandle refactoring proposals ([#586](../repos/temporalio-sdk-dotnet/issues.md#586), [#587](../repos/temporalio-sdk-dotnet/issues.md#587))

**Pattern:** Core worker integration needs stabilization. The SafeHandle refactoring may help address underlying memory management issues.

### 3. Nexus API Maturation

Multiple SDKs have Nexus-related issues as this feature matures:
- .NET: Nexus timeout handling ([#585](../repos/temporalio-sdk-dotnet/issues.md#585))
- .NET: Nexus time-skipping test support needed ([#578](../repos/temporalio-sdk-dotnet/issues.md#578))
- Java: Support Temporal failures in Nexus APIs ([#2755](../repos/temporalio-sdk-java/issues.md#2755))

**Pattern:** Nexus integration requires cross-SDK polish as users adopt it.

### 4. Environment Configuration Issues (Cross-SDK)

Same bug reported in multiple SDKs for macOS:
- TypeScript: Environment config path issue ([#1869](../repos/temporalio-sdk-typescript/issues.md#1869))
- Java: Environment config path issue ([#2754](../repos/temporalio-sdk-java/issues.md#2754))

**Pattern:** Core SDK components shared across SDKs may have platform-specific bugs.

### 5. Server Operational Concerns

Several server issues point to operational challenges at scale:
- History service memory growth ([#8902](../repos/temporalio-temporal/issues.md#8902))
- history_node table unbounded growth ([#8790](../repos/temporalio-temporal/issues.md#8790))
- Elasticsearch deprecation warnings ([#8909](../repos/temporalio-temporal/issues.md#8909))
- Scheduler listing not showing triggerImmediately runs ([#8833](../repos/temporalio-temporal/issues.md#8833))
- Scheduled time incorrect ([#8953](../repos/temporalio-temporal/issues.md#8953))
- Missing admin-tools image for 1.29.2 ([#8943](../repos/temporalio-temporal/issues.md#8943))
- MCP Server for Temporal Workflows proposal ([#8955](../repos/temporalio-temporal/issues.md#8955))

**Pattern:** Users running at scale encountering growth/retention issues. Scheduler accuracy and release tooling gaps.

### 6. Framework & Library Updates

Continued interest in modern framework and library support:
- TypeScript: AI SDK v6 integration ([#1864](../repos/temporalio-sdk-typescript/issues.md#1864))
- PHP: Symfony 8.0 support ([#670](../repos/temporalio-sdk-php/issues.md#670))
- Java: Jackson 3 support ([#2746](../repos/temporalio-sdk-java/issues.md#2746))
- Java: Spring property placeholders for @WorkflowImpl ([#2747](../repos/temporalio-sdk-java/issues.md#2747))

---

## By Category

### Bugs (20 issues)
- **Server:** 6 (security CVEs ×2, memory, PostgreSQL, scheduler ×2, admin-tools)
- **TypeScript:** 5 (signals, performance, OTel, bundling, config)
- **.NET:** 6 (crashes, TLS, Nexus timeout, test flakes, failure conversion)
- **Python:** 2 (sandbox warnings, error handling)
- **Ruby:** 1 (fiber state corruption)
- **Go:** 1 (OTel metric type)
- **PHP:** 1 (extension check breaking composer)

### Feature Requests (20 issues)
- **Server:** 3 (replay optimization, workflow listing, MCP Server proposal)
- **TypeScript:** 3 (per-worker logger, AI SDK, docs)
- **Java:** 5 (Nexus failures, Spring placeholders, Jackson 3, tracing, virtual threads)
- **.NET:** 4 (Nexus testing, workflow analyzer, SafeHandle refactoring)
- **PHP:** 1 (Symfony 8)
- **Features:** 2 (worker metadata, build tooling)

### Internal/Testing (2 issues)
- Java test reporter issues
- Features pnpm build fix

---

## Recommendations

1. **Immediate:** Address CVE-2025-61729 and CVE-2025-61727 in server
2. **High Priority:** Investigate .NET SIGSEGV crashes affecting production users
3. **High Priority:** TypeScript patch release for 1.13.x/1.14.x regressions
4. **High Priority:** Fix Ruby fiber state corruption on x86_64
5. **Medium Priority:** Coordinate macOS environment config fix across SDKs
6. **Medium Priority:** Review history service memory patterns and retention
7. **Medium Priority:** Review OTel instrumentation across SDKs (Go metric type, TypeScript CPU issues)
8. **Track:** Nexus API integration gaps across SDKs for coordinated improvement
9. **Track:** Scheduler accuracy issues (incorrect times, triggerImmediately visibility)
