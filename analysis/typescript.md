# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 144
**Total Closed Issues:** 653
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has an 82% resolution rate with a median time to close of 26 days, demonstrating healthy maintenance velocity. However, the backlog is slowly growing (+24 net issues over 12 months), with 40% of open issues now stale (>12 months old). The most prominent user demands center on alternative runtime support (Bun with 46 upvotes), AI framework integrations (OpenAI Agents, Vercel AI SDK), and observability improvements (OpenTelemetry v2). Framework compatibility issues with Next.js 15 and NestJS represent significant developer experience pain points that need attention.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 49 | High - includes testing framework issues and SDK upgrade regressions |
| Enhancements | 84 | Medium - dominated by runtime support and framework integrations |
| Stale Issues (>12 months) | 58 (40%) | Medium - significant housekeeping opportunity |
| Documentation | 6 | Low - minor gaps in coverage |

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

1. **Immediate:** Address SDK upgrade regression ([#1749](https://github.com/temporalio/sdk-typescript/issues/1749)) and performance issues ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860)) affecting production users
2. **Short-term:** Fix Jest open handles issue ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) - 7 upvotes, 26 comments, impacts testing workflows widely
3. **Medium-term:** Release OpenTelemetry v2 support ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) - 19 upvotes, maintainers confirm on roadmap
4. **Long-term:** Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) - 46 upvotes, highest community demand
5. **Housekeeping:** Triage 58 stale issues (40% of backlog) - close resolved/obsolete, mark valid long-term items appropriately

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is growing moderately, with 24 more issues opened than closed over the past year. April 2025 saw a significant spike (+16 net) while other months have been more balanced.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 101 | 77 | +24 |

Backlog Growing: The team is receiving more issues than they are closing, though the pace is manageable. Notable months: April 2025 (+16 net), December 2025 (+6 net).

### Last 6 Months: Detailed Analysis

The last 6 months show near-equilibrium with 43 opened vs 44 closed, suggesting the team has stabilized closure velocity to match recent intake.

| Metric | Value |
|--------|-------|
| Issues Opened | 43 |
| Issues Closed | 44 |
| Net Change | -1 |
| Bugs Closed | 12 |
| Enhancements Completed | 26 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 235 | 168 |
| Median Time to Close | 120 | 87 |
| 90th Percentile | 588 | 420 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | [Bug] error: TypeError: (0, ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | [Bug] Workflow logs not propagated unless telemetryOptions set |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of AsyncLocalStorage |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | [Feature Request] Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | 46 | [Feature Request] Run temporal worker in Bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | [Feature Request] Temporal integration for @openai/agents |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for OpenTelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | [Bug] Failure to start ephemeral server prevents shutdown |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create separate "core" library without bundler deps |
| 9 | [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | 4 | [Bug] Workflow task not found after SDK upgrade |
| 10 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 138 | Run temporal worker in Bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 48 | Temporal integration for @openai/agents |
| 3 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | NestJS Transport / Integration |
| 4 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | Jest detects open handles |
| 5 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | Add support for OpenTelemetry v2 |
| 6 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | Enable in-browser usage of gRPC client |
| 7 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | Cannot use Temporal with NextJS 15 |
| 8 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | Native Request Batching |
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Create separate "core" library |
| 10 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 13 | Failure to start ephemeral server prevents shutdown |

---

## Issue Analysis by Category

### Bugs (49 open issues)

#### Testing Infrastructure Issues

Testing is a recurring pain point for TypeScript SDK users, with Jest integration being the most reported issue.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles from "neon threadsafe function" - prevents clean test exits. Assigned to maintainer. 26 comments over 3+ years indicates widespread impact. |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Ephemeral server startup failures (e.g., on unsupported platforms like Linux ARM) prevent process shutdown, leaving tests hanging indefinitely. |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Temporal local env cannot be connected in unit tests |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | nyc-test-coverage is excessively difficult to use correctly (12 comments) |

#### SDK Upgrade/Compatibility Regressions

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | "Workflow task not found" errors after upgrading from 1.11.8 to 1.12.1. Multiple users affected with long-running workflows. Maintainers note this is a secondary symptom - real issue is task completion timing. |
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | 0 | Performance regression from 1.13.1 to 1.13.2 |
| [#1796](https://github.com/temporalio/sdk-typescript/issues/1796) | 1 | Changes in type inference of activity return type in SDK 1.11.5+ |

#### Framework Compatibility Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | Next.js 15 minification mangles workflow function names, breaking workflow type resolution. Workaround: disable server minification in next.config. The official nextjs-temporal template is also affected. |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay workflow history fails with nondeterminism error (9 comments - active investigation) |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use structuredClone in workflow code (5 comments) |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 0 | Unable to import reflect-metadata within workflow bundle |

#### OpenTelemetry/Observability Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | 0 | High CPU usage with OTel instrumentation when updating schedules |
| [#1779](https://github.com/temporalio/sdk-typescript/issues/1779) | 0 | OTEL interceptors bypass configured tracer |
| [#1738](https://github.com/temporalio/sdk-typescript/issues/1738) | 0 | opentelemetry traceState not handled properly in makeWorkflowExportInterceptor |

#### Performance Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Using async functions degrades performance (6 comments) |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" (8 comments) |

---

## Enhancement Requests (84 open issues)

### Runtime & Platform Support

The most significant user demand is for alternative JavaScript runtime support, particularly Bun.

#### Bun Runtime ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334) - 46 upvotes, 46 comments)

**Status:** Not yet supported, significant engineering effort required

**Technical Blockers:**
1. Bun lacks `v8.promiseHooks.createHook()` implementation - needed for workflow stack traces
2. Core-bridge (Rust/Neon) panics with "Hash table capacity overflow" when initialized in Bun
3. Node VM microtask handling differences cause race conditions

**Maintainer Response:** "We know what we need to do to get the SDK working on bun but it'll be a significant lift and may not be prioritized just yet. I too hope we will support more JS runtimes including bun and deno."

**Recommendation:** Continue passive monitoring; Bun is actively improving Node.js compatibility. Document known limitations and any community workarounds.

#### Browser Support ([#207](https://github.com/temporalio/sdk-typescript/issues/207) - 9 upvotes)

**Status:** HTTP/1.1 API in development

The `@temporalio/client` package depends on `grpc-js` which requires HTTP/2, not supported in browsers. Solution requires either grpc-web (needs server-side proxy) or new HTTP/1.1 API.

**Maintainer Response:** "We're working on an HTTP/1.1 API that can be used to back running the TS SDK client in a browser."

#### Alpine Linux / musl ([#1621](https://github.com/temporalio/sdk-typescript/issues/1621) - 4 upvotes)

Request to include musl-based shared library in the package for Alpine Linux deployments.

### AI Framework Integrations

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | **OpenAI Agents SDK integration** - Analogous to Python's `OpenAIAgentsPlugin`. Maintainers confirm on roadmap. Currently prioritizing Vercel AI SDK integration first ([PR #1792](https://github.com/temporalio/sdk-typescript/pull/1792) in review). |

**Maintainer Response:** "The first AI agents library we're integrating with in TS is [ai](https://www.npmjs.com/package/ai). The PR is in review, so it should hopefully land soon."

### Observability & Telemetry

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | **OpenTelemetry v2 support** - Cannot simply upgrade due to breaking changes. Plan is new package (`@temporalio/interceptors-opentelemetry2`) to allow coexistence with v1. Blocked by completing v1 improvements first. |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |
| [#1867](https://github.com/temporalio/sdk-typescript/issues/1867) | 0 | Per-Worker Logger |

**Maintainer Response on OTel v2:** "The path forward will be: 1) Complete current efforts on covering all events through OTel v1 interceptors, 2) Complete effort on extending to new Plugin form, 3) Address serialization issues, 4) Duplicate to new OTel v2 package."

### Framework Integrations

#### NestJS ([#483](https://github.com/temporalio/sdk-typescript/issues/483) - 4 upvotes, 37 comments)

**Status:** Community packages available, no official support planned

The long discussion (3+ years, 37 comments) has explored various integration patterns. Community package [nestjs-temporal](https://github.com/KurtzL/nestjs-temporal) exists. Users have contributed workarounds to support NestJS module loading patterns.

#### Next.js ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615) - 3 upvotes, 14 comments)

**Status:** Workaround documented, SDK-level fix being considered

Next.js 15 removed `swcMinify: false` option, causing workflow function name mangling. Workaround: disable minification on server builds in webpack config.

#### Build Tool Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | **Vite bundler support** - Community reports success with esbuild as alternative (0.6s builds vs 10s with webpack) |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Better Nx monorepo support |

### SDK Architecture

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | **Separate "core" library without bundler deps** - `@swc/core` adds ~150MB to images. Maintainers plan to split `worker` package but need to complete other work first. Workarounds via npm/yarn/pnpm overrides available. |
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | **Native request batching** - Prevent gRPC "message larger than max" errors when starting many activities. SDK should auto-split commands approaching 4MB limit. |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | **Opt-out of workflow isolation** - User experienced debugging pain with AsyncLocalStorage issues. Maintainer notes sandbox provides important event loop guarantees beyond just determinism. |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Add lint rule preventing Query handlers from modifying state (11 comments with implementation approaches) |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope (8 comments) |
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Provide way to distinguish error types in activities |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 58 issues (40%)

The stale percentage is high and represents significant technical debt that obscures actual priorities.

**Close Candidates (likely resolved or no longer relevant):**

- [#754](https://github.com/temporalio/sdk-typescript/issues/754) - Friendly listWorkflows API (3+ years old)
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) - Client metrics emission (3+ years, may be addressed by newer telemetry options)
- Old webpack-related issues that may have been addressed in newer SDK versions
- Issues from 2022 without recent activity or upvotes

**Needs Triage (maintainer decision required):**

| Issue | Upvotes | Last Updated | Notes |
|-------|-----|--------------|-------|
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 2024-12-17 | Browser gRPC - HTTP API work in progress |
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 2024-08-21 | Native batching - valid performance concern |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | 2023-11-09 | Vite bundling - community has esbuild workarounds |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | 2024-09-22 | Preloaded data converters |
| [#1578](https://github.com/temporalio/sdk-typescript/issues/1578) | 1 | 2024-12-02 | Worker fails with --abort-on-uncaught-exception |

**Keep Open (valid long-term requests):**

- [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) - Bun support (46 upvotes, maintainers acknowledge need)
- [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) - OpenTelemetry v2 (19 upvotes, explicitly on roadmap)
- [#933](https://github.com/temporalio/sdk-typescript/issues/933) - Separate core library (6 upvotes, maintainers have plan)
- [#483](https://github.com/temporalio/sdk-typescript/issues/483) - NestJS integration (37 comments, ongoing community interest)

### Duplicate Candidates

- Multiple testing-related issues ([#928](https://github.com/temporalio/sdk-typescript/issues/928), [#1443](https://github.com/temporalio/sdk-typescript/issues/1443), [#1702](https://github.com/temporalio/sdk-typescript/issues/1702), [#1687](https://github.com/temporalio/sdk-typescript/issues/1687)) - Consider consolidating into testing infrastructure meta-issue
- OpenTelemetry issues ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658), [#1779](https://github.com/temporalio/sdk-typescript/issues/1779), [#1738](https://github.com/temporalio/sdk-typescript/issues/1738), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859)) - Could be tracked under OTel improvement epic

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate - Q1 2026)

- **Bugs:** Investigate SDK upgrade regressions ([#1749](https://github.com/temporalio/sdk-typescript/issues/1749), [#1860](https://github.com/temporalio/sdk-typescript/issues/1860)) - blocking users from upgrading
- **Testing:** Fix Jest open handles ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) - assigned, impacts CI/CD reliability
- **Testing:** Fix ephemeral server shutdown ([#1443](https://github.com/temporalio/sdk-typescript/issues/1443))
- **Documentation:** Publish official Next.js 15 integration guide ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))

### Phase 2: Developer Experience (Short-term - Q2 2026)

- **AI Integration:** Complete Vercel AI SDK integration (PR #1792 in review)
- **Observability:** Complete OTel v1 improvements (covering all events, Plugin form, serialization fixes)
- **Build:** Split `worker` package to separate bundler dependencies ([#933](https://github.com/temporalio/sdk-typescript/issues/933))
- **Framework:** Provide official NestJS guidance or integration ([#483](https://github.com/temporalio/sdk-typescript/issues/483))

### Phase 3: Feature Expansion (Medium-term - Q3-Q4 2026)

- **Observability:** Release OpenTelemetry v2 package ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658))
- **AI Integration:** OpenAI Agents SDK integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))
- **Platform:** Browser gRPC client support ([#207](https://github.com/temporalio/sdk-typescript/issues/207)) via HTTP/1.1 API
- **Platform:** musl-based shared library for Alpine Linux ([#1621](https://github.com/temporalio/sdk-typescript/issues/1621))
- **API:** Native request batching ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499))

### Phase 4: Long-term & Maintenance (Ongoing)

- **Platform:** Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) - requires significant v8 API compatibility work, monitor Bun progress
- **Housekeeping:** Triage and close 50+ stale issues
- **Documentation:** Improve guidance on build configurations, framework integrations
- **Community:** Foster ecosystem of community-maintained integrations (NestJS, etc.)
