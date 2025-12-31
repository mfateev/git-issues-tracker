# Temporal - Cross-Repository Analysis Summary

**Generated:** 2025-12-31
**Total Open Issues:** 1,537 across 9 repositories

---

## Overview by Repository

| Repository | Issues | Upvotes | Comments | Bugs | Enhancements |
|------------|--------|---------|----------|------|--------------|
| **Server** | 530 | 899 | 865 | 137 | 349 |
| **Features** | 247 | 106 | 399 | 6 | 216 |
| Java SDK | 215 | 104 | 203 | 33 | 126 |
| Go SDK | 163 | 112 | 214 | 60 | 89 |
| TypeScript SDK | 148 | 177 | 347 | 50 | 87 |
| Python SDK | 115 | 31 | 206 | 46 | 65 |
| .NET SDK | 48 | 13 | 51 | 12 | 31 |
| PHP SDK | 47 | 12 | 66 | 7 | 29 |
| Ruby SDK | 24 | 3 | 15 | 4 | 19 |
| **Total** | **1,537** | **1,457** | **2,366** | | |

---

## Top User Requests (by Upvotes)

| Rank | Repo | Issue | 👍 | Request |
|------|------|-------|-----|---------|
| 1 | Server | [#680](https://github.com/temporalio/temporal/issues/680) | **70** | Wait for external workflow completion |
| 2 | Server | [#1507](https://github.com/temporalio/temporal/issues/1507) | **50** | Priority task queues |
| 3 | TS SDK | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | **46** | Bun runtime support |
| 4 | Server | [#2668](https://github.com/temporalio/temporal/issues/2668) | **46** | Document POSTGRES_SEEDS |
| 5 | Server | [#2318](https://github.com/temporalio/temporal/issues/2318) | **46** | MongoDB as persistent store |
| 6 | Server | [#5680](https://github.com/temporalio/temporal/issues/5680) | **30** | Official OpenSearch support |
| 7 | Server | [#537](https://github.com/temporalio/temporal/issues/537) | **30** | SignalWithStart/UpdateWithStart |
| 8 | Server | [#131](https://github.com/temporalio/temporal/issues/131) | **28** | Retry options by failure type |
| 9 | Go SDK | [#916](https://github.com/temporalio/sdk-go/issues/916) | **21** | Mock side effects in tests |
| 10 | TS SDK | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | **19** | OpenAI Agents integration |
| 11 | TS SDK | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | **19** | OpenTelemetry v2 support |
| 12 | Go SDK | [#181](https://github.com/temporalio/sdk-go/issues/181) | **16** | Clean session shutdown |
| 13 | Java SDK | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | **16** | listWorkflowExecutions in test server |
| 14 | Features | [#399](https://github.com/temporalio/features/issues/399) | **15** | Custom workflow history markers |
| 15 | Java SDK | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | **15** | Kotlin coroutine support |

---

## Common Themes

### 1. Server: Workflow Capabilities & Storage

Top server requests focus on workflow features and database flexibility:

| Category | Top Requests |
|----------|--------------|
| Workflow | External workflow wait (70 👍), Priority queues (50 👍) |
| Storage | MongoDB (46 👍), OpenSearch (30 👍), YDB, CockroachDB |
| Operations | Better Postgres docs (46 👍), Embedded server |

### 2. Testing Framework Pain Points (ALL SDKs)

Testing is the #1 pain point across every SDK:

| SDK | Issue |
|-----|-------|
| Java | Test server missing features (listWorkflowExecutions, time-skipping) |
| Go | TestWorkflowEnvironment behavior mismatches, mock limitations |
| TypeScript | Jest handle leaks, ephemeral server issues |
| Python | Test server startup failures |
| .NET | Time-skipping hangs, ContinueAsNew issues |
| PHP | UpdateMethod tests broken, activity loop testing |
| Ruby | Signal testing in time-skipping environment |

### 3. Modern Runtime/Framework Support

| SDK | Request |
|-----|---------|
| TypeScript | Bun (46 👍), Vite, NextJS 15 |
| Java | Spring Boot 4, Kotlin coroutines (15 👍) |
| .NET | .NET Trimming/AOT (7 👍), F# |
| Python | Python 3.14 free-threading |

### 4. OpenTelemetry / Observability

| Repo | Request |
|------|---------|
| TypeScript SDK | OpenTelemetry v2 (19 👍) |
| Go SDK | Custom trace attribute keys |
| Python SDK | OpenTelemetry/ddtrace compatibility |
| Features | SDK-side metrics, DataDog samples |

### 5. AI/LLM Integration (Emerging)

| SDK | Request |
|-----|---------|
| TypeScript | OpenAI Agents integration (19 👍) |
| Python | OpenAI Agents Session implementations |

---

## Repository-Specific Priorities

### Server (530 issues)
- **Critical:** External workflow wait (#680 - 70 👍)
- **High:** Priority task queues (#1507 - 50 👍)
- **Storage:** MongoDB, OpenSearch, YDB support
- **Tech Debt:** 218 issues (41%) are 3+ years old

### Features (247 issues)
- **High:** Custom workflow markers (#399 - 15 👍)
- **High:** Unit testing workflow versioning (#649 - 14 👍)
- **Cross-SDK:** Declarative schedules, auto heartbeating

### Java SDK (215 issues)
- **Critical:** 4 security vulnerabilities
- **High:** Test server features, Kotlin support (15 👍)
- **Tech Debt:** 155 stale issues (72%)

### Go SDK (163 issues)
- **Critical:** Testing framework overhaul
- **High:** Mock side effects (#916 - 21 👍), session shutdown
- **Tech Debt:** 101 stale issues (62%)

### TypeScript SDK (148 issues)
- **Critical:** Bun support (#1334 - 46 👍)
- **High:** OpenTelemetry v2 (19 👍), OpenAI Agents (19 👍)
- **Tech Debt:** 59 stale issues (40%)

### Python SDK (115 issues)
- **Critical:** Sandbox/debugging experience
- **High:** IDE debugger support (VSCode, PyCharm)
- **Tech Debt:** 52 stale issues (45%)

### .NET SDK (48 issues)
- **Critical:** .NET Trimming for AOT (7 👍)
- **High:** Time-skipping test fixes
- **Tech Debt:** 23 stale issues (48%)

### PHP SDK (47 issues)
- **Critical:** Marshaller documentation (5 👍)
- **High:** Bug fixes (UpdateMethod, sessions)
- **Tech Debt:** 21 stale issues (45%)

### Ruby SDK (24 issues)
- **Critical:** Ruby 3.1/3.2 compatibility
- **High:** Logger integration, Windows support
- **Low Tech Debt:** Newest SDK

---

## Engagement Analysis

### By Repository

| Repository | Upvotes | Comments | Engagement |
|------------|---------|----------|------------|
| Server | 899 | 865 | Highest |
| TypeScript SDK | 177 | 347 | Very High |
| Go SDK | 112 | 214 | High |
| Features | 106 | 399 | High |
| Java SDK | 104 | 203 | Medium-High |
| Python SDK | 31 | 206 | Medium |
| .NET SDK | 13 | 51 | Low |
| PHP SDK | 12 | 66 | Low |
| Ruby SDK | 3 | 15 | Low (new) |

### Stale Issue Burden

| Repository | Stale (>1 year) | % of Total |
|------------|-----------------|------------|
| Server | ~435 | 82% |
| Java SDK | 155 | 72% |
| Go SDK | 101 | 62% |
| TypeScript SDK | 59 | 40% |
| Python SDK | 52 | 45% |
| .NET SDK | 23 | 48% |
| PHP SDK | 21 | 45% |
| Ruby SDK | 0 | 0% |

**Total stale issues:** ~850+ (55% of all issues)

---

## Recommended Initiatives

### 1. Server Feature Investment
Top 5 server requests have 242 combined upvotes. Prioritize:
- External workflow wait (#680 - 70 👍)
- Priority task queues (#1507 - 50 👍)
- Database flexibility (MongoDB, OpenSearch)

### 2. Testing Infrastructure
All SDKs suffer from testing pain points:
- Unified test server feature parity
- Better time-skipping support
- Improved mock/stub capabilities

### 3. Stale Issue Triage
850+ stale issues across repos. Recommend:
- Close issues fixed by subsequent releases
- Request reproduction for old bugs
- Convert valid requests to discussions

### 4. Modern Tooling Support
Prioritize based on user demand:
- TypeScript: Bun support (46 👍)
- Java: Kotlin coroutines (15 👍)
- .NET: Trimming/AOT (7 👍)

### 5. AI Integration
Emerging pattern: OpenAI Agents integration requested in TypeScript (19 👍) and Python.

---

## Quick Reference: Top Priority Per Repository

| Repository | #1 Priority | Issue |
|------------|-------------|-------|
| Server | External workflow wait | #680 (70 👍) |
| Features | Custom workflow markers | #399 (15 👍) |
| Java SDK | Security vulnerabilities | Multiple |
| Go SDK | Test mock improvements | #916 (21 👍) |
| TypeScript SDK | Bun support | #1334 (46 👍) |
| Python SDK | Sandbox debugging | #487, #238 |
| .NET SDK | .NET Trimming | #286 (7 👍) |
| PHP SDK | Marshaller docs | #592 (5 👍) |
| Ruby SDK | Ruby 3.x compatibility | #162 |
