# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 143
**Total Closed Issues:** 663
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The TypeScript SDK maintains a healthy 82% resolution rate with 143 open issues, primarily consisting of enhancement requests (84) and bugs (47). The most pressing concerns are performance regressions in recent versions (1.13.x), test framework reliability, and integration challenges with modern JavaScript frameworks (Bun, Next.js 15). User demand is heavily focused on alternative runtime support and framework integrations, with the top issue requesting Bun runtime support receiving 49 upvotes.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Test Framework Issues | 54 | High - Testing infrastructure is critical for SDK adoption |
| Performance & Memory | 8 | High - Active regressions affecting production workloads |
| Framework Integrations | 12 | High - Blocking adoption in popular ecosystems (Bun, Next.js, NestJS) |
| OpenTelemetry | 8 | Medium - Observability is key for production deployments |
| Workflow Replay/Determinism | 12 | Medium - Core SDK reliability concerns |
| Error Handling | 8 | Medium - Developer experience improvement |
| Worker Versioning | 4 | Medium - Enterprise deployment feature |
| Documentation | 6 | Low - Non-blocking but impacts developer onboarding |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 170 |
| Total Comments | 344 |
| Issues with Upvotes | 36 (25%) |
| Issues with Comments | 72 (50%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (663/806) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 69% |

### Recommended Actions

1. **Immediate:** Address performance regression in v1.13.x affecting CPU usage with OTel instrumentation
2. **Short-term:** Improve test framework reliability and first-run experience
3. **Medium-term:** Add Bun runtime support (49 upvotes) and resolve Next.js 15 compatibility
4. **Long-term:** Implement OpenTelemetry v2 support and NestJS integration
5. **Housekeeping:** Triage 58 stale issues (41% of open issues are >12 months old)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog has grown modestly over the past year with 23 more issues opened than closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 110 | 87 | +23 |

Backlog Growing: The SDK is receiving more issues than it resolves, though the growth rate is moderate. Months with significant net increases (April 2025: +16, March 2025: +6) were offset by periods of net reduction (May 2025: -5, January 2026: -5).

### Last 6 Months: Detailed Analysis

The last 6 months show a balanced trajectory with slightly more issues closed than opened.

| Metric | Value |
|--------|-------|
| Issues Opened | 47 |
| Issues Closed | 52 |
| Bugs Closed | 19 |
| Enhancements Completed | 28 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | [Bug] error: TypeError: (0 , ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | [Bug] Workflow logs not propagated unless telemetryOptions.logging.filter is DEBUG or TRACE |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of AsyncLocalStorage |
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | [Bug] Workflow task not found after SDK upgrade |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | [Feature Request] Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 49 | 51 | [Feature Request] Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | [Feature Request] Temporal integration for `@openai/agents` |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching to Prevent rate limiting |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | [Bug] Failure to start ephemeral server prevents shutdown of tests |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create a separate "core" library for workflow definitions |
| 9 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library in package |
| 10 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | 37 | [Feature Request] NestJS Transport / Integration? |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 149 | [Feature Request] Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 48 | [Feature Request] Temporal integration for `@openai/agents` |
| 3 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | [Feature Request] NestJS Transport / Integration? |
| 4 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | [Bug] Jest detects open handles |
| 5 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | [Feature Request] Add support for opentelemetry v2 |
| 6 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | [Feature Request] Enable in-browser usage of gRPC client |
| 7 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | [Bug] Cannot use Temporal with NextJS 15 because workflowTypes... |
| 8 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | [Feature Request] Native Request Batching |
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | [Feature Request] Create a separate "core" library |
| 10 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 13 | [Bug] Failure to start ephemeral server prevents shutdown |

---

## Issue Analysis by Category

### High-Priority Bugs (14 issues)

Critical bugs affecting production workloads and developer experience.

#### Performance Regressions

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | 0 | Performance regression from 1.13.1 to 1.13.2 causing CPU degradation |
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | 0 | High CPU usage with OTel instrumentation when updating to v1.13.x |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | extractSourceMap takes huge amount of RAM on boot (2GB+) |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | Default maxCachedWorkflows calculation causes OOM in containers |

#### Workflow Replay & Determinism

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay workflow history fails with nondeterminism error for child workflows |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE replaying nested promises - activity execution order differs during replay |

#### Type System & API Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1796](https://github.com/temporalio/sdk-typescript/issues/1796) | 1 | Changes in type inference of activity return type in SDK 1.12.2 |
| [#1717](https://github.com/temporalio/sdk-typescript/issues/1717) | 0 | Protobuf Payload Converter is broken after upgrading to protobufjs 7.5.2 |
| [#1733](https://github.com/temporalio/sdk-typescript/issues/1733) | 0 | RetryPolicy.maximumAttempts === 0 throws, contradicting documentation |

### Test Framework Issues (54 issues in test-framework area)

Testing is a critical pain point with multiple issues affecting test reliability.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles - long-standing issue affecting test cleanup |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Failure to start ephemeral server prevents shutdown of tests |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run due to SDK download |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Temporal local env cannot be connected in unit tests |
| [#1867](https://github.com/temporalio/sdk-typescript/issues/1867) | 0 | Per-Worker Logger needed for test isolation |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | nyc-test-coverage is excessively difficult to use correctly |
| [#1710](https://github.com/temporalio/sdk-typescript/issues/1710) | 0 | Better type inference for MockActivityEnvironment.run |

### Framework & Runtime Compatibility (12 issues)

High user demand for integration with modern JavaScript runtimes and frameworks.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 49 | Run temporal worker in Bun - highest upvoted issue |
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | Cannot use Temporal with NextJS 15 because workflowTypes require node runtime |
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS Transport / Integration - long-running request |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Enable in-browser usage of gRPC client |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Bundle using Vite |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Better Nx support |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 0 | Unable to import reflect-metadata within workflow bundle (affects Inversify) |

### OpenTelemetry & Observability (8 issues)

Observability is critical for production deployments.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | Add support for opentelemetry v2 |
| [#1850](https://github.com/temporalio/sdk-typescript/issues/1850) | 0 | Implement OTel interceptors v1 as Plugin for simpler setup |
| [#1854](https://github.com/temporalio/sdk-typescript/issues/1854) | 0 | Correct docs for OtelCollectorExporter |
| [#1696](https://github.com/temporalio/sdk-typescript/issues/1696) | 0 | Otel exporter error handling - errors silently ignored |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |

### Workflow Sandbox & Isolation (5 issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use structuredClone in workflow code |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 0 | Unable to import reflect-metadata within workflow bundle |

---

## API & Component Hotspots

Based on semantic analysis, the following areas have the most issues:

| Area | Issue Count | Key Concerns |
|------|-------------|--------------|
| test-framework | 54 | Jest integration, ephemeral server, mock environments |
| dependency-security | 39 | Historical vulnerability reports (mostly resolved) |
| error-handling | 33 | Error serialization, type information loss, AggregateError |
| logging | 17 | Log filtering, suppression, per-worker configuration |
| workflow-execution | 13 | Determinism, replay, signal handling |
| workflow-replay | 12 | Child workflows, nested promises, history replay |
| worker-configuration | 10 | Memory limits, shutdown, polling |

---

## Enhancement Requests (84 issues)

### AI & Agent Integrations

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Temporal integration for `@openai/agents` SDK |

### Runtime & Platform Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 49 | Run temporal worker in Bun |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Enable in-browser usage of gRPC client |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library in package (Alpine Linux support) |
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Create a separate "core" library for workflow definitions |

### API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native Request Batching to prevent rate limiting |
| [#1722](https://github.com/temporalio/sdk-typescript/issues/1722) | 0 | Include error details on every errors thrown from Client API |
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Provide a way to distinguish error types in logs |
| [#1675](https://github.com/temporalio/sdk-typescript/issues/1675) | 1 | Support AggregateError with multiple child errors |
| [#1775](https://github.com/temporalio/sdk-typescript/issues/1775) | 0 | Support for creating v7 UUIDs from within Workflow Tasks |

### Worker & Activity Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1739](https://github.com/temporalio/sdk-typescript/issues/1739) | 0 | Add ActivityContext.workerShuttingDown for graceful shutdown detection |
| [#1888](https://github.com/temporalio/sdk-typescript/issues/1888) | 0 | Expose activityType counts in WorkerInfo |
| [#1851](https://github.com/temporalio/sdk-typescript/issues/1851) | 0 | Support non-workflow activities (standalone activities) |
| [#1824](https://github.com/temporalio/sdk-typescript/issues/1824) | 0 | Allow overriding Worker Deployment Version for child workflows |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Add lint rule that prevents Query handlers from being async |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope |
| [#1887](https://github.com/temporalio/sdk-typescript/issues/1887) | 0 | Allow logging in queries and update validators |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

58 open issues (41%) have had no activity for over 12 months.

**Close candidates:** Issues that appear resolved or superseded
- [#207](https://github.com/temporalio/sdk-typescript/issues/207) - Browser gRPC client (9 upvotes, last activity Dec 2024) - Needs decision on feasibility
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) - Client metrics (3 upvotes, last activity Oct 2022) - May be addressed by newer observability features

**Needs triage:** Issues requiring maintainer decision
- [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) - Request batching (7 upvotes) - Popular but stale since Aug 2024
- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) - Vite bundling (3 upvotes) - Stale since Nov 2023

**Keep open:** Valid issues awaiting implementation
- [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) - Bun support (49 upvotes) - Active demand
- [#483](https://github.com/temporalio/sdk-typescript/issues/483) - NestJS integration (4 upvotes, 37 comments) - Sustained community interest

### Duplicate Candidates

- Performance regression issues [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) and [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) appear related to the same root cause in v1.13.x

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Investigate and fix performance regressions in v1.13.x ([#1859](https://github.com/temporalio/sdk-typescript/issues/1859), [#1860](https://github.com/temporalio/sdk-typescript/issues/1860))
- Address memory management issues ([#1772](https://github.com/temporalio/sdk-typescript/issues/1772), [#1843](https://github.com/temporalio/sdk-typescript/issues/1843))
- Fix workflow replay nondeterminism bugs ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790), [#1744](https://github.com/temporalio/sdk-typescript/issues/1744))

### Phase 2: Developer Experience (Short-term)

- Improve test framework reliability ([#928](https://github.com/temporalio/sdk-typescript/issues/928), [#1443](https://github.com/temporalio/sdk-typescript/issues/1443), [#1702](https://github.com/temporalio/sdk-typescript/issues/1702))
- Fix Next.js 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
- Address type inference regression in v1.12.2 ([#1796](https://github.com/temporalio/sdk-typescript/issues/1796))

### Phase 3: Feature Expansion (Medium-term)

- Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) - 49 upvotes
- OpenTelemetry v2 support ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) - 19 upvotes
- OpenAI Agents SDK integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755)) - 20 upvotes
- NestJS integration guidance ([#483](https://github.com/temporalio/sdk-typescript/issues/483))

### Phase 4: Maintenance (Ongoing)

- Triage and close 58 stale issues
- Continue dependency security updates
- Improve documentation for common integration patterns
