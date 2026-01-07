# Temporal - Cross-Repository Analysis Summary

**Generated:** 2026-01-07
**Total Open Issues:** 1,564 across 10 repositories

## Related Documents

| Document | Description |
|----------|-------------|
| [contributors.md](contributors.md) | Issues and comments by author |
| [recent.md](recent.md) | Recent issues analysis (last 30 days) |

**Per-Repository Analysis:**
[Server](server.md) ·
[Features](features.md) ·
[Java](java.md) ·
[Go](go.md) ·
[TypeScript](typescript.md) ·
[Python](python.md) ·
[.NET](dotnet.md) ·
[PHP](php.md) ·
[Ruby](ruby.md) ·
[API](api.md)

**Full Issue Data:** See `repos/<repo>/issues.md` for complete issue dumps with all comments.

---

## URGENT: Critical Issues This Week

**42 new issues** filed in the last 30 days. Critical items requiring immediate attention:

| Priority | Issue | Repository | Description |
|----------|-------|------------|-------------|
| **CRITICAL** | [#8866](../repos/temporalio-temporal/issues.md#8866) | Server | CVE-2025-61729 (golang crypto) |
| **CRITICAL** | [#8865](../repos/temporalio-temporal/issues.md#8865) | Server | CVE-2025-61727 (golang crypto) |
| **CRITICAL** | [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | .NET SDK | SIGSEGV crash on Linux |
| **CRITICAL** | [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | .NET SDK | TLS certificate loading broken |
| **HIGH** | [#373](../repos/temporalio-sdk-ruby/issues.md#373) | Ruby SDK | Fiber state corruption (x86_64) |
| **HIGH** | [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | TS SDK | Performance regression 1.13.x |
| **HIGH** | [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | TS SDK | Signal CancelledFailure (1.14.0) |
| **HIGH** | [#8902](../repos/temporalio-temporal/issues.md#8902) | Server | History service memory leak |
| **HIGH** | [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | .NET SDK | Workflow task failures may be lost (NEW) |
| **MEDIUM** | [#2140](../repos/temporalio-sdk-go/issues.md#2140) | Go SDK | OTel incorrect metric type (NEW) |

See [recent.md](recent.md) for full analysis of issues filed in the last 30 days.

---

## Overview by Repository

| Repository | Issues | Upvotes | Comments | Bugs | Enhancements |
|------------|--------|---------|----------|------|--------------|
| [**Server**](server.md) | 533 | 900 | 872 | 139 | 353 |
| [**Features**](features.md) | 247 | 106 | 400 | 6 | 226 |
| [Java SDK](java.md) | 217 | 104 | 203 | 33 | 127 |
| [Go SDK](go.md) | 164 | 112 | 214 | 60 | 89 |
| [TypeScript SDK](typescript.md) | 149 | 179 | 352 | 51 | 87 |
| [Python SDK](python.md) | 116 | 31 | 212 | 47 | 65 |
| [.NET SDK](dotnet.md) | 52 | 13 | 54 | 13 | 31 |
| [PHP SDK](php.md) | 48 | 12 | 67 | 8 | 31 |
| [Ruby SDK](ruby.md) | 25 | 3 | 19 | 5 | 19 |
| [API](api.md) | 13 | 6 | 9 | 3 | 9 |
| **Total** | **1,564** | **1,466** | **2,402** | **365** | **1,037** |

---

## Top User Requests (by Upvotes)

| Rank | Repo | Issue | 👍 | Request |
|------|------|-------|-----|---------|
| 1 | Server | [#680](../repos/temporalio-temporal/issues.md#680) | **70** | Wait for external workflow completion |
| 2 | Server | [#1507](../repos/temporalio-temporal/issues.md#1507) | **50** | Priority task queues |
| 3 | TS SDK | [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | **46** | Bun runtime support |
| 4 | Server | [#2668](../repos/temporalio-temporal/issues.md#2668) | **46** | Document POSTGRES_SEEDS |
| 5 | Server | [#2318](../repos/temporalio-temporal/issues.md#2318) | **46** | MongoDB as persistent store |
| 6 | Server | [#5680](../repos/temporalio-temporal/issues.md#5680) | **30** | Official OpenSearch support |
| 7 | Server | [#537](../repos/temporalio-temporal/issues.md#537) | **30** | SignalWithStart/UpdateWithStart |
| 8 | Server | [#131](../repos/temporalio-temporal/issues.md#131) | **28** | Retry options by failure type |
| 9 | Go SDK | [#916](../repos/temporalio-sdk-go/issues.md#916) | **21** | Mock side effects in tests |
| 10 | TS SDK | [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | **20** | OpenAI Agents integration |
| 11 | TS SDK | [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | **19** | OpenTelemetry v2 support |
| 12 | Go SDK | [#181](../repos/temporalio-sdk-go/issues.md#181) | **16** | Clean session shutdown |
| 13 | Java SDK | [#1693](../repos/temporalio-sdk-java/issues.md#1693) | **16** | listWorkflowExecutions in test server |
| 14 | Features | [#399](../repos/temporalio-features/issues.md#399) | **15** | Custom workflow history markers |
| 15 | Java SDK | [#1845](../repos/temporalio-sdk-java/issues.md#1845) | **15** | Kotlin coroutine support |

---

## Common Themes

### 1. Security Vulnerabilities (URGENT)

Multiple security issues require immediate attention:

| Repository | Issues | Description |
|------------|--------|-------------|
| Server | #8866, #8865 | Two new CVEs for golang:crypto/x509 |
| Java SDK | #1890, #1952, #1951 | Spring Boot and ktlint vulnerabilities |
| Java SDK | #2676 | grpc-netty-shaded vulnerability |
| .NET SDK | #194 | coverlet.collector vulnerability |
| Features | 5 issues | Mend dependency vulnerabilities |

### 2. SDK Stability Regressions (This Week)

Multiple SDKs have reported stability issues in recent releases:

| SDK | Issues | Pattern |
|-----|--------|---------|
| TypeScript | #1860, #1859, #1866 | v1.13.x-1.14.x regressions |
| .NET | #579, #584, #585 | Core worker integration issues |
| Ruby | #373, #162 | Fiber handling bugs |

**Recommendation:** Patch releases needed for TypeScript and .NET.

### 3. Testing Framework Pain Points (ALL SDKs)

Testing is the #1 pain point across every SDK:

| SDK | Key Issues |
|-----|------------|
| Java | Test server missing listWorkflowExecutions, time-skipping bugs |
| Go | TestWorkflowEnvironment behavior mismatches, mock limitations |
| TypeScript | Jest handle leaks, ephemeral server shutdown issues |
| Python | Test server startup failures |
| .NET | Time-skipping hangs, ContinueAsNew test issues |
| PHP | UpdateMethod tests broken |
| Ruby | Signal testing in time-skipping environment |

### 4. Server: Workflow Capabilities & Storage

Top server requests focus on workflow features and database flexibility:

| Category | Top Requests |
|----------|--------------|
| Workflow | External workflow wait (70 👍), Priority queues (50 👍) |
| Storage | MongoDB (46 👍), OpenSearch (30 👍), YDB (23 👍) |
| Operations | Better Postgres docs (46 👍), history_node growth (#8790) |

### 5. Modern Runtime/Framework Support

| SDK | Request |
|-----|---------|
| TypeScript | Bun (46 👍), Vite, NextJS 15 |
| Java | Spring Boot 4 (7 👍), Kotlin coroutines (15 👍) |
| .NET | .NET Trimming/AOT (7 👍), F# |
| Python | Python 3.14 free-threading |
| PHP | Symfony 8.0 (#670) |

### 6. Nexus API Maturation

Nexus integration issues appearing across SDKs:

| SDK | Issue | Problem |
|-----|-------|---------|
| .NET | #585 | ScheduleToCloseTimeout ignored |
| .NET | #578 | Time-skipping test support needed |
| Java | #2755 | Support Temporal failures in Nexus APIs |

---

## Repository-Specific Priorities

### Server (533 issues)
- **URGENT:** CVE-2025-61729, CVE-2025-61727 (#8866, #8865)
- **High:** History service memory leak (#8902)
- **High:** Scheduler timing issues (#8953, #8833)
- **High:** External workflow wait (#680 - 70 👍)
- **High:** Priority task queues (#1507 - 50 👍)
- **Tech Debt:** 218 issues (41%) are 3+ years old

### Features (247 issues)
- **High:** Custom workflow markers (#399 - 15 👍)
- **High:** Unit testing workflow versioning (#649 - 14 👍)
- **Cross-SDK:** Declarative schedules, auto heartbeating

### Java SDK (217 issues)
- **URGENT:** macOS environment config bug (#2754) - cross-SDK
- **Critical:** Security vulnerabilities (#1890, #2676)
- **High:** Test server features, Kotlin support (15 👍)
- **Tech Debt:** 155 stale issues (71%)

### Go SDK (164 issues)
- **Critical:** Testing framework overhaul
- **High:** Mock side effects (#916 - 21 👍), session shutdown
- **High:** OTel metric type incorrect (#2140) - NEW
- **Tech Debt:** 101 stale issues (62%)

### TypeScript SDK (149 issues)
- **URGENT:** v1.13.x/1.14.x stability fixes (#1860, #1859, #1866)
- **URGENT:** macOS environment config bug (#1869) - cross-SDK
- **High:** Bun support (#1334 - 46 👍)
- **Tech Debt:** 59 stale issues (40%)

### Python SDK (116 issues)
- **Critical:** Sandbox/debugging experience (#487 - 6 👍)
- **High:** IDE debugger support (VSCode, PyCharm)
- **High:** New sandbox warning issue (#1254)
- **Tech Debt:** 52 stale issues (45%)

### .NET SDK (52 issues)
- **URGENT:** SIGSEGV crash on Linux (#579)
- **URGENT:** TLS certificate loading (#584)
- **High:** Workflow task failure conversion issues (#588) - NEW
- **High:** SafeHandle refactoring (#586, #587)
- **High:** .NET Trimming for AOT (#286 - 7 👍)

### PHP SDK (48 issues)
- **High:** Marshaller documentation (#592 - 5 👍)
- **High:** Composer --ignore-platform-reqs broken (#689) - NEW
- **High:** Bug fixes (UpdateMethod, sessions)
- **New:** Symfony 8.0 support (#670)

### Ruby SDK (25 issues)
- **URGENT:** Fiber state corruption (#373)
- **High:** Ruby 3.1/3.2 compatibility (#162)
- **High:** Logger integration, Windows support

---

## Engagement Analysis

### By Repository

| Repository | Upvotes | Comments | Engagement |
|------------|---------|----------|------------|
| Server | 900 | 872 | Highest |
| TypeScript SDK | 179 | 351 | Very High |
| Go SDK | 112 | 214 | High |
| Features | 106 | 400 | High |
| Java SDK | 104 | 203 | Medium-High |
| Python SDK | 31 | 212 | Medium |
| .NET SDK | 13 | 54 | Low |
| PHP SDK | 12 | 66 | Low |
| Ruby SDK | 3 | 19 | Low (new) |

### Stale Issue Burden

| Repository | Stale (>1 year) | % of Total |
|------------|-----------------|------------|
| Server | 374 | 70% |
| Features | 145 | 59% |
| Java SDK | 156 | 72% |
| Go SDK | 101 | 62% |
| TypeScript SDK | 59 | 40% |
| Python SDK | 52 | 45% |
| .NET SDK | 24 | 46% |
| PHP SDK | 18 | 38% |
| Ruby SDK | 3 | 12% |
| API | 13 | 100% |

**Total stale issues:** ~945 (60% of all issues)

---

## Recommended Initiatives

### 1. Security Patch Sprint (IMMEDIATE)

**Impact:** All users of server and Java SDK
**Actions:**
- Patch CVE-2025-61729 and CVE-2025-61727 in server
- Update Java SDK dependencies (Spring Boot, ktlint, grpc-netty)
- .NET SDK security dependency updates

### 2. SDK Stability Patch Releases (This Week)

**Impact:** TypeScript, .NET, Ruby users
**Actions:**
- TypeScript: Patch for v1.13.x/1.14.x regressions
- .NET: Fix SIGSEGV and TLS issues
- Ruby: Investigate fiber state corruption

### 3. Cross-SDK Environment Config Fix

**Impact:** Java and TypeScript users on macOS
**Actions:**
- Coordinate fix for #2754 (Java) and #1869 (TypeScript)
- Both report same bug in environment configuration on macOS

### 4. OpenTelemetry Review (Cross-SDK)

OTel integration issues appearing in multiple SDKs:
- Go: Incorrect metric type for Counter (#2140)
- TypeScript: High CPU with OTel in 1.13.x (#1859)

### 5. Testing Infrastructure Investment

All SDKs suffer from testing pain points:
- Unified test server feature parity
- Better time-skipping support
- Improved mock/stub capabilities

### 6. Server Feature Investment

Top 5 server requests have 242 combined upvotes:
- External workflow wait (#680 - 70 👍)
- Priority task queues (#1507 - 50 👍)
- Database flexibility (MongoDB, OpenSearch)

### 7. Stale Issue Triage

~945 stale issues across repos. Recommend:
- Close issues fixed by subsequent releases
- Request reproduction for old bugs
- Convert valid requests to discussions

---

## Quick Reference: Top Priority Per Repository

| Repository | #1 Priority | Issue | Status |
|------------|-------------|-------|--------|
| Server | CVE patches | #8866, #8865 | **URGENT** |
| Features | Custom workflow markers | #399 (15 👍) | Medium |
| Java SDK | Environment config bug | #2754 | **URGENT** |
| Go SDK | Test mock improvements | #916 (21 👍) | High |
| TypeScript SDK | v1.13.x regressions | #1860, #1859 | **URGENT** |
| Python SDK | Sandbox debugging | #487, #238 | High |
| .NET SDK | SIGSEGV crash | #579 | **URGENT** |
| PHP SDK | Marshaller docs | #592 (5 👍) | Medium |
| Ruby SDK | Fiber corruption | #373 | **URGENT** |
