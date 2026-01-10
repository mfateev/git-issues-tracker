# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 144
**Total Closed Issues:** 653
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has an 82% resolution rate with a median time to close of 26 days, demonstrating healthy maintenance velocity. However, the backlog grew by 24 issues over the past 12 months, indicating incoming issue volume slightly exceeds closure capacity. The most prominent user demand centers on alternative runtime support (Bun with 46 upvotes), AI agent integrations, and OpenTelemetry v2 compatibility. Testing infrastructure issues (Jest integration, test environment shutdown) remain persistent pain points affecting developer experience.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 49 | High - includes testing framework issues and SDK upgrade regressions |
| Enhancements | 84 | Medium - dominated by runtime support and framework integrations |
| Documentation | 6 | Low - minor gaps in coverage |
| Stale Issues (>12 months) | 58 (40%) | Medium - significant housekeeping opportunity |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 171 |
| Total Comments | 344 |
| Issues with Upvotes | 37 (26%) |
| Issues with Comments | 74 (51%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (653/797) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 70% |

### Recommended Actions

1. **Immediate:** Address SDK upgrade regression (#1749) and performance issues (#1860, #1859) affecting production users
2. **Short-term:** Improve Jest/Vitest testing compatibility (#928, #1443) - high comment volume indicates widespread impact
3. **Medium-term:** Develop Next.js 15+ integration guide or plugin (#1615) - affects modern web development adoption
4. **Long-term:** Monitor Bun runtime compatibility (#1334) - highest community demand at 46 upvotes
5. **Housekeeping:** Triage 58 stale issues (40% of open backlog) for closure or prioritization

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The TypeScript SDK backlog is slowly growing, with 24 more issues opened than closed over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 101 | 77 | +24 |

The backlog is growing primarily due to spikes in April 2025 (+16) and periodic months where closures lag significantly behind new issues. The team maintains steady closure rates of 5-10 issues per month.

### Last 6 Months: Detailed Analysis

The last 6 months show near-equilibrium with 43 opened vs 44 closed, suggesting the team has stabilized closure velocity to match recent intake.

| Metric | Value |
|--------|-------|
| Issues Opened | 43 |
| Issues Closed | 44 |
| Bugs Closed | 12 |
| Enhancements Completed | 26 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | [Bug] error: TypeError: (0, ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | [Bug] Workflow logs not propagated unless telemetryOptions set |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of AsyncLocalStorage |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | [Feature Request] Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | 46 | [Feature Request] Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | [Feature Request] Temporal integration for `@openai/agents` |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | [Bug] Failure to start ephemeral server prevents shutdown |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create a separate "core" library |
| 9 | [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | 4 | [Bug] Workflow task not found after SDK upgrade |
| 10 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 138 | Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 48 | Temporal integration for @openai/agents |
| 3 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | NestJS Transport / Integration |
| 4 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | Jest detects open handles |
| 5 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | Add support for opentelemetry v2 |
| 6 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | Enable in-browser usage of gRPC client |
| 7 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | Cannot use Temporal with NextJS 15 |
| 8 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | Native Request Batching |
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Create separate "core" library |
| 10 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 13 | Failure to start ephemeral server prevents shutdown |

---

## Issue Analysis by Category

### High-Priority Bugs (49 open issues)

The bug backlog includes several high-impact issues affecting production deployments and developer experience.

#### Testing Infrastructure Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles from neon threadsafe function, causing test hangs and CI timeouts. Long-standing issue (3+ years) with workarounds but no permanent fix. Root cause is in Neon bindings maintaining ThreadSafeFunction references. |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Failure to start ephemeral server (e.g., on unsupported platforms like Linux ARM) prevents process shutdown, leaving tests hanging indefinitely. |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Temporal local env cannot be connected in unit tests |

#### SDK Upgrade/Compatibility Regressions

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | "Workflow task not found" errors after upgrading from 1.11.8 to 1.12.1. Multiple users affected. Potentially related to task completion timing. Recommendation to try v1.13.0 which fixed memory leak. |
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | 0 | Performance regression from 1.13.1 to 1.13.2 |
| [#1796](https://github.com/temporalio/sdk-typescript/issues/1796) | 1 | Changes in type inference of activity return type in SDK 1.11.5+ |

#### Framework Compatibility Bugs

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | Next.js 15 minification mangles workflow function names, breaking workflow type resolution. Caused by SDK relying on `function.name` property which bundlers are free to mangle. Turbopack team has engaged on the issue. |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay workflow history fails with nondeterminism error (9 comments - active investigation) |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use structuredClone in workflow code |

#### Observability/Telemetry Bugs

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | 0 | High CPU usage with OTel instrumentation when updating dependencies |
| [#1779](https://github.com/temporalio/sdk-typescript/issues/1779) | 0 | OpenTelemetry interceptors bypass workflow/sink serialization |
| [#1738](https://github.com/temporalio/sdk-typescript/issues/1738) | 0 | OpenTelemetry traceState not handled properly |

### Runtime Support Requests

The TypeScript SDK faces strong demand for alternative JavaScript runtime support.

#### Bun Runtime (#1334 - 46 upvotes, 46 comments)

**Status:** Not yet supported, community actively investigating

**Technical Blockers:**
1. Bun lacks `v8.promiseHooks.createHook()` implementation (needed for workflow stack traces)
2. `node:vm` microtask handling differs from Node.js (race conditions in workflow execution)
3. NAPI compatibility issues in core-bridge layer

**Progress:** Community contributors (@d2201) have made significant progress. Worker can start with `debugMode: true` and `reuseV8Context: false` settings, but full compatibility awaits Bun fixes for `microtaskMode: 'afterEvaluate'` behavior.

**Recommendation:** Continue passive monitoring; Bun is actively improving Node.js compatibility. Consider documenting workarounds for adventurous users.

#### Deno Runtime

**Status:** Partially functional as of Deno 2.0, which removed promiseHooks stubs. Both client and workers can run, but without stack trace visibility.

#### Browser Support (#207 - 9 upvotes)

**Status:** In progress via HTTP/1.1 API development

**Context:** The `@temporalio/client` package depends on `grpc-js` which requires HTTP/2, unsupported in browsers. An HTTP/1.1 API is being developed to enable browser-based clients.

---

## Enhancement Requests (84 issues)

### AI/Agent Framework Integrations

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Official integration for `@openai/agents` SDK (analogous to Python's OpenAIAgentsPlugin). Team is prioritizing Vercel AI SDK integration first (#1792 in review). |

### Observability & Telemetry

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | OpenTelemetry v2 support. Cannot simply upgrade due to breaking changes; plan is to create new `@temporalio/interceptors-opentelemetry2` package after completing v1 coverage improvements. |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |

### Framework Integrations

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS integration/transport. Community package [nestjs-temporal](https://github.com/KurtzL/nestjs-temporal) exists and works well. Official support not prioritized but decorator-based workflow definition patterns emerging (see chrono-forge package). |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Vite bundler support |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Better Nx monorepo support |

### SDK Architecture

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Create separate "core" library for workflow-only code (reduced bundle size) |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library (Alpine Linux support) |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation (8 comments - active discussion) |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Add lint rule preventing Query handlers from modifying state (11 comments) |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope (8 comments) |
| [#1867](https://github.com/temporalio/sdk-typescript/issues/1867) | 0 | Per-Worker logger support (recent request) |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 58 issues (40%)

The stale issue percentage is concerning and represents opportunity for backlog cleanup.

**Close candidates (likely resolved or no longer relevant):**
- [#754](https://github.com/temporalio/sdk-typescript/issues/754) - `listWorkflows` friendlier version (3+ years old, API likely evolved)
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) - Client metrics emission (3+ years, may be addressed by newer telemetry options)
- Issues from 2022-2023 without recent activity or upvotes

**Needs triage (maintainer decision required):**
- [#207](https://github.com/temporalio/sdk-typescript/issues/207) - Browser gRPC client (4 years old, but HTTP API work in progress)
- [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) - Native request batching (7 upvotes but stale)
- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) - Vite bundler support (3 upvotes, bundler landscape evolving)

**Keep open (valid but not yet addressed):**
- [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) - Preloaded data context support (2 upvotes, valid use case)
- [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) - TestWorkflowEnvironment should support local activities

### Duplicate Candidates

- Multiple testing-related issues (#928, #1443, #1702, #1687) may benefit from consolidation into a testing infrastructure meta-issue
- OpenTelemetry issues (#1658, #1779, #1738) could be tracked together under a single OTel improvement epic

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Investigate SDK upgrade regressions** - #1749 and #1860 are blocking users from upgrading
- **Fix testing infrastructure issues** - #928 affects CI/CD reliability across many users
- **Document Next.js 15 workarounds** - #1615 impacts modern web development adoption

### Phase 2: Developer Experience (Short-term)

- **Complete OTel v1 improvements** - Prerequisites for v2 support (#1658)
- **Ship Vercel AI SDK integration** - PR #1792 in review, addresses AI agent demand
- **Improve error messages** - Several issues cite cryptic errors during development

### Phase 3: Feature Expansion (Medium-term)

- **OpenTelemetry v2 package** - After v1 work completes (#1658)
- **Browser client support** - HTTP API development enables #207
- **Framework integration plugins** - Next.js, NestJS official guidance

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage** - Review and close/update 58 stale issues
- **Monitor Bun compatibility** - As Bun stabilizes Node.js compatibility (#1334)
- **Dependency updates** - Keep pace with Node.js LTS and ecosystem changes
