# Temporal SDKs - Cross-SDK Analysis Summary

**Generated:** 2025-12-31
**Total Open Issues:** 760 across 7 SDKs

---

## Overview by SDK

| SDK | Issues | Upvotes | Comments | Bugs | Enhancements | Age (Oldest) |
|-----|--------|---------|----------|------|--------------|--------------|
| Java | 215 | 104 | 203 | 33 | 126 | 5+ years |
| Go | 163 | 112 | 214 | 60 | 89 | 5+ years |
| TypeScript | 148 | 177 | 347 | 50 | 87 | 3+ years |
| Python | 115 | 31 | 206 | 46 | 65 | 3+ years |
| .NET | 48 | 13 | 51 | 12 | 31 | 2+ years |
| PHP | 47 | 12 | 66 | 7 | 29 | 3+ years |
| Ruby | 24 | 3 | 15 | 4 | 19 | 1+ years |

---

## Top User Requests (by Upvotes)

| Rank | SDK | Issue | 👍 | Request |
|------|-----|-------|-----|---------|
| 1 | TypeScript | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | **46** | Bun runtime support |
| 2 | Go | [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Mock side effects in tests |
| 3 | TypeScript | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 19 | OpenAI Agents integration |
| 4 | TypeScript | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | OpenTelemetry v2 support |
| 5 | Go | [#181](https://github.com/temporalio/sdk-go/issues/181) | 16 | Clean session shutdown |
| 6 | Java | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | 16 | listWorkflowExecutions in test server |
| 7 | Java | [#1845](https://github.com/temporalio/sdk-java/issues/1845) | 15 | Kotlin coroutine support |
| 8 | Java | [#1804](https://github.com/temporalio/sdk-java/issues/1804) | 10 | Run CLI server from tests |
| 9 | TypeScript | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Browser gRPC client |
| 10 | .NET | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | .NET Trimming/AOT support |

---

## Common Themes Across SDKs

### 1. Testing Framework Pain Points (ALL SDKs)

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

**Recommendation:** Unified investment in test server / testing infrastructure across SDKs.

### 2. Modern Runtime/Framework Support

Users want SDKs to work with modern tooling:

| SDK | Request |
|-----|---------|
| TypeScript | Bun (46 👍), Vite, NextJS 15 |
| Java | Spring Boot 4, Kotlin coroutines |
| .NET | .NET Trimming/AOT, F# |
| Python | Python 3.14 free-threading |
| PHP | Better IDE support |

### 3. OpenTelemetry / Observability

| SDK | Request |
|-----|---------|
| TypeScript | OpenTelemetry v2 (19 👍) |
| Go | Custom trace attribute keys |
| Python | OpenTelemetry/ddtrace compatibility |
| Java | Worker metrics scope per execution |

### 4. AI/LLM Integration (Emerging)

| SDK | Request |
|-----|---------|
| TypeScript | OpenAI Agents integration (19 👍) |
| Python | OpenAI Agents Session implementations |

---

## SDK-Specific Priorities

### Java
- **Critical:** 4 security vulnerabilities
- **High:** Test server features, Kotlin support
- **Tech Debt:** 155 stale issues (>1 year)

### Go
- **Critical:** Testing framework overhaul
- **High:** Clean worker shutdown, session management
- **Tech Debt:** 101 stale issues

### TypeScript
- **Critical:** Bun support (massive user demand)
- **High:** OpenTelemetry v2, Jest handle leak
- **Tech Debt:** 59 stale issues

### Python
- **Critical:** Sandbox/debugging experience
- **High:** IDE debugger support (VSCode, PyCharm)
- **Tech Debt:** 52 stale issues

### .NET
- **Critical:** .NET Trimming for modern deployment
- **High:** Time-skipping test environment fixes
- **Tech Debt:** 19 issues >1 year old

### PHP
- **Critical:** Marshaller documentation
- **High:** Bug fixes (UpdateMethod, sessions)
- **Tech Debt:** 21 issues >1 year old

### Ruby (Newest SDK)
- **Critical:** Stability - Ruby 3.1/3.2 compatibility
- **High:** Logger integration, Windows support
- **Low Tech Debt:** Only 24 issues total

---

## Engagement Analysis

### Most Engaged Communities

| SDK | Upvotes | Comments | Engagement Rate |
|-----|---------|----------|-----------------|
| TypeScript | 177 | 347 | Highest |
| Go | 112 | 214 | High |
| Java | 104 | 203 | Medium-High |
| Python | 31 | 206 | Medium (many comments, few votes) |
| PHP | 12 | 66 | Low |
| .NET | 13 | 51 | Low |
| Ruby | 3 | 15 | Low (new SDK) |

### Stale Issue Burden

| SDK | Stale (>1 year) | % of Total |
|-----|-----------------|------------|
| Java | 155 | 72% |
| Go | 101 | 62% |
| TypeScript | 59 | 40% |
| Python | 52 | 45% |
| .NET | 23 | 48% |
| PHP | 21 | 45% |
| Ruby | 0 | 0% |

**Total stale issues:** ~411 (54% of all issues)

---

## Recommended Cross-SDK Initiatives

### 1. Testing Infrastructure Investment
All SDKs suffer from testing pain points. Consider:
- Unified test server feature parity
- Better time-skipping support
- Improved mock/stub capabilities

### 2. Stale Issue Triage Sprint
411 stale issues across SDKs. Recommend:
- Close issues fixed by subsequent releases
- Request reproduction for old bugs
- Convert valid requests to discussions

### 3. Modern Tooling Support
Prioritize based on user demand:
- TypeScript: Bun support (46 👍)
- Java: Kotlin coroutines (15 👍)
- .NET: Trimming/AOT (7 👍)

### 4. Observability Standardization
OpenTelemetry requests across multiple SDKs - ensure consistent support.

### 5. AI Integration
Emerging pattern: OpenAI Agents integration requested in TypeScript (19 👍) and Python. Early investment opportunity.

---

## Quick Reference: Highest Priority Per SDK

| SDK | #1 Priority | Issue |
|-----|-------------|-------|
| Java | Security vulnerabilities | Multiple |
| Go | Test mock improvements | #916 |
| TypeScript | Bun support | #1334 |
| Python | Sandbox debugging | #487, #238 |
| .NET | .NET Trimming | #286 |
| PHP | Marshaller docs | #592 |
| Ruby | Ruby 3.x fiber bugs | #162 |
