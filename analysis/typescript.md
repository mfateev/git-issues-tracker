# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-13
**Total Open Issues:** 145
**Total Closed Issues:** 655
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The TypeScript SDK has a maturing codebase with 800 total issues and a strong 82% resolution rate, reflecting its position as a popular SDK for JavaScript/TypeScript developers. The backlog is growing modestly (26 more issues opened than closed in the last 12 months), requiring attention to prevent accumulation. Key user demands center around Bun runtime support (46 upvotes), OpenAI Agents integration (20 upvotes), OpenTelemetry v2 support (19 upvotes), and Next.js 15 compatibility. Testing issues, bundling challenges, and framework integrations represent the most common pain points.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Test Framework Issues | 54+ | High - Affects developer productivity and testing confidence |
| Bugs | 50 | High - Active defects affecting production usage |
| Framework Integrations | 20+ | High - Next.js 15, NestJS, and Bun support highly requested |
| Enhancements | 84 | Medium - Feature requests awaiting prioritization |
| OpenTelemetry Issues | 10+ | Medium - OTel v2, performance, and configuration issues |
| Stale Issues | 58 | Medium - 40% of backlog needs triage decision |

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
| Resolution Rate | 82% (655/800) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 53% |
| Resolved within 90 days | 70% |

### Recommended Actions

1. **Immediate:** Investigate performance regressions in v1.13.x ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859)) and replay nondeterminism issues ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790))
2. **Short-term:** Address Next.js 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615) - 3 upvotes, 14 comments) and Jest open handles issue ([#928](https://github.com/temporalio/sdk-typescript/issues/928) - 7 upvotes, 26 comments)
3. **Medium-term:** OpenTelemetry v2 support ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658) - 19 upvotes) and OpenAI Agents integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755) - 20 upvotes)
4. **Long-term:** Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334) - 46 upvotes) - highest-voted feature request
5. **Housekeeping:** Triage 58 stale issues - close resolved/obsolete ones, mark valid long-term items appropriately

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The TypeScript SDK shows a growing backlog with 26 more issues opened than closed over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 104 | 78 | +26 |

**Backlog Growing:** While not critical, this trend indicates the need for increased focus on issue resolution to prevent backlog accumulation. Notable activity spikes occurred in April 2025 (+17 net) and December 2025 (+6 net).

### Last 6 Months: Detailed Analysis

The last 6 months show near-balanced activity with slightly more closures than openings.

| Metric | Value |
|--------|-------|
| Issues Opened | 45 |
| Issues Closed | 46 |
| Net Change | -1 |
| Bugs Closed | 14 |
| Enhancements Completed | 26 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 225 | 161 |
| Median Time to Close | 108 | 78 |
| 90th Percentile | 588 | 420 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | error: TypeError: (0 , ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | Workflow logs not propagated unless telemetryOptions.logging.filter is DEBUG or TRACE |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | Simplify proper usage of `AsyncLocalStorage` |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | 46 | Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | Temporal integration for `@openai/agents` |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | Add support for opentelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | Native Request Batching to Prevent "received_messages limit exceeded" |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | Jest detects open handles |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | Failure to start ephemeral server prevents shutdown of the test runner |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | Create a separate "core" library for workflow utilities |
| 9 | [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | 4 | Workflow task not found after SDK upgrade |
| 10 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | Include musl-based shared library in packages |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 138 | Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 48 | Temporal integration for `@openai/agents` |
| 3 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | NestJS Transport / Integration |
| 4 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | Jest detects open handles |
| 5 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | Add support for opentelemetry v2 |
| 6 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | Enable in-browser usage of gRPC client |
| 7 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | Cannot use Temporal with NextJS 15 |
| 8 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | Native Request Batching |
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Create a separate "core" library |
| 10 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 13 | Failure to start ephemeral server |

---

## Issue Analysis by Category

### Performance Regressions (Critical - 2 issues)

Recent SDK versions (v1.13.x) have introduced significant performance regressions affecting production deployments. These should be prioritized immediately.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | High | High CPU usage with OTel instrumentation when updating to v1.13.x - up to 100% CPU |
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | High | Performance regression from 1.13.1 -> 1.13.2 - significant CPU degradation |

**Analysis:** Both issues point to problems introduced in v1.13.x releases. [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) reports that OTel instrumentation causes excessive CPU usage which disappears when OTel is disabled. These issues are likely related and may have a common root cause.

**Recommendation:** Urgent investigation needed. Consider reverting problematic changes in a patch release while investigating the root cause.

---

### Test Framework Issues (54+ issues)

Test framework issues represent a significant pain point for TypeScript SDK users, affecting developer productivity and testing confidence.

#### High Priority Test Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles - blocks clean test exits |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Failure to start ephemeral server prevents shutdown of test runner |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | `nyc-test-coverage` is excessively difficult to use correctly |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | Temporal local env cannot be connected in unit tests |

#### Test Environment Configuration

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) | 1 | `TestWorkflowEnvironment` should provide way to configure ScheduleClient |
| [#1549](https://github.com/temporalio/sdk-typescript/issues/1549) | 0 | Auto-skip time in time-skipping mode |
| [#1710](https://github.com/temporalio/sdk-typescript/issues/1710) | 0 | Better type inference for `MockActivityEnvironment.run` |
| [#1782](https://github.com/temporalio/sdk-typescript/issues/1782) | 0 | Ensure tests exist to confirm custom slot supplier slot info has proper fields |

**[#928](https://github.com/temporalio/sdk-typescript/issues/928) - Jest Open Handles:** This long-standing issue (26 comments) causes Jest to hang or report open handles after tests complete. With 7 upvotes, it represents significant developer friction.

**Recommendation:** Document workarounds in official testing documentation while working on a permanent fix.

---

### Bugs (50 open issues)

Active bugs require attention to maintain SDK reliability.

#### High Severity - Stability Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | Workflow task not found after SDK upgrade |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | extractSourceMap takes a huge amount of RAM on boot |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | Default maxCachedWorkflows calculation doesn't account for VM isolate memory |

#### Workflow Replay & Determinism

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay workflow history fails with nondeterminism error, child workflow ids do not match |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE replaying nested promises |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Can't use structuredClone in workflow code |

#### Framework Compatibility

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | Cannot use Temporal with NextJS 15 because workflowTypes need to be bundled |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 0 | Unable to import reflect-metadata within workflow bundle |
| [#1717](https://github.com/temporalio/sdk-typescript/issues/1717) | 0 | Protobuf Payload Converter is broken after upgrading to protobufjs 7.5.2 |

#### Error Handling & API Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1838](https://github.com/temporalio/sdk-typescript/issues/1838) | 0 | `WorkflowExecutionAlreadyStartedError` should contain `runId` if provided by server |
| [#1721](https://github.com/temporalio/sdk-typescript/issues/1721) | 0 | Error thrown from Client's Update-with-Start doesn't show proper message |
| [#1733](https://github.com/temporalio/sdk-typescript/issues/1733) | 0 | `RetryPolicy.maximumAttempt === 0` throws, while documented as valid for "unlimited" |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing an exception from a workflow may result in `Failure::Message` being set incorrectly |

#### OpenTelemetry Issues

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1779](https://github.com/temporalio/sdk-typescript/issues/1779) | 0 | `@temporalio/interceptors-opentelemetry` OTEL bypasses a required SDK component |
| [#1738](https://github.com/temporalio/sdk-typescript/issues/1738) | 0 | OpenTelemetry traceState is handled properly in makeWorkflowExporter |
| [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) | 2 | common package not importing @types/ms |

---

## API & Component Hotspots

Based on semantic analysis, these areas have the most issues:

| Area | Issue Count | Key Concerns |
|------|-------------|--------------|
| Test Framework | 54 | Jest handles, ephemeral server, time skipping, MockActivityEnvironment |
| Dependency Security | 39 | Historical vulnerability reports (mostly resolved) |
| Error Handling | 33 | Error types, message propagation, stack traces |
| Logging | 16 | Workflow logs, log filtering, logger configuration |
| Workflow Replay | 12 | Nondeterminism, nested promises, child workflows |
| OpenTelemetry | 10+ | v2 support, performance, interceptors |
| Bundling | 8+ | Webpack, Vite, workflow bundling |
| Worker Configuration | 10 | Memory, initialization, shutdown |

---

## Enhancement Requests (84 open issues)

### Runtime & Platform Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | Run temporal worker in bun |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library in packages (Alpine Linux) |
| [#1285](https://github.com/temporalio/sdk-typescript/issues/1285) | 0 | Deno support investigation |

### AI & Agent Integrations

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Temporal integration for `@openai/agents` |

### Observability & OpenTelemetry

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | Add support for opentelemetry v2 |
| [#1850](https://github.com/temporalio/sdk-typescript/issues/1850) | 0 | Implement OTel interceptors v1 as Plugin |
| [#1854](https://github.com/temporalio/sdk-typescript/issues/1854) | 0 | Correct docs for OtelCollectorExporter |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |

### Framework Integrations

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS Transport / Integration |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Better Nx support |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Bundle using Vite |

### API & Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | Enable in-browser usage of gRPC client |
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Create a separate "core" library for workflow utilities |
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native Request Batching to Prevent "received_messages limit exceeded" |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation |
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Add lint rule that prevents Query handlers from mutating state |
| [#754](https://github.com/temporalio/sdk-typescript/issues/754) | 1 | Add friendly version of listWorkflows |

### Workflow Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for cancellationScope |
| [#1775](https://github.com/temporalio/sdk-typescript/issues/1775) | 0 | Support for creating v7 UUIDs from within Workflow Tasks |
| [#1824](https://github.com/temporalio/sdk-typescript/issues/1824) | 0 | Allow overriding Worker Deployment Version when invoking Child Workflow |

### Error Handling Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Provide a way to distinguish error types in logs |
| [#1722](https://github.com/temporalio/sdk-typescript/issues/1722) | 0 | Include error details on every errors thrown from Client API |
| [#1420](https://github.com/temporalio/sdk-typescript/issues/1420) | 0 | Clean API to intentionally fail an activity |

### Worker & Activity Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1867](https://github.com/temporalio/sdk-typescript/issues/1867) | 0 | Per-Worker Logger |
| [#1851](https://github.com/temporalio/sdk-typescript/issues/1851) | 0 | Support non-workflow activities |
| [#1739](https://github.com/temporalio/sdk-typescript/issues/1739) | 0 | Add `ActivityContext.workerShuttingDown` |
| [#1736](https://github.com/temporalio/sdk-typescript/issues/1736) | 1 | Mask/sanitize client sensitive data references |

---

## Housekeeping Recommendations

### Stale Issues (58 open issues with no activity >12 months)

Top stale issues by upvotes:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 2024-12-17 | Enable in-browser usage of gRPC client |
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 2024-08-21 | Native Request Batching |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | 2023-11-09 | Bundle using Vite |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | 2022-10-11 | Emit metrics from client connection |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | 2024-09-22 | Support passing preloaded data converters |
| [#1008](https://github.com/temporalio/sdk-typescript/issues/1008) | 2 | 2024-03-13 | Provide more output when webpack fails |

**Triage Recommendations:**

- **Close candidates:** Issues from 2021-2022 with no activity and low engagement that may be obsolete
- **Needs triage:** Issues with upvotes but stale - need maintainer decision on roadmap inclusion
- **Keep open:** Valid feature requests like #207 (browser gRPC), #1334 (Bun support), and #1499 (request batching) that have user demand

### Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 2 | 1% |
| 1-3 months | 11 | 8% |
| 3-6 months | 9 | 6% |
| 6-12 months | 36 | 25% |
| 1-2 years | 25 | 17% |
| 2-3 years | 22 | 15% |
| 3+ years | 40 | 28% |

### Duplicate Candidates

Potential duplicates to investigate:

- Performance/CPU issues with v1.13.x: #1860, #1859 - related performance regressions
- OpenTelemetry issues: #1779, #1738, #1658 - various OTel concerns could be consolidated
- Test framework issues: #928, #1443, #1687 - Jest and test environment issues overlap

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Investigate v1.13.x performance regressions ([#1860](https://github.com/temporalio/sdk-typescript/issues/1860), [#1859](https://github.com/temporalio/sdk-typescript/issues/1859))
- Fix replay nondeterminism with child workflows ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790))
- Address workflow task not found after upgrade ([#1749](https://github.com/temporalio/sdk-typescript/issues/1749))
- Fix RetryPolicy validation for maximumAttempt=0 ([#1733](https://github.com/temporalio/sdk-typescript/issues/1733))

### Phase 2: Developer Experience (Short-term)

- Fix Jest open handles detection ([#928](https://github.com/temporalio/sdk-typescript/issues/928))
- Improve ephemeral server startup reliability ([#1443](https://github.com/temporalio/sdk-typescript/issues/1443))
- Next.js 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
- Improve error messages and types ([#1800](https://github.com/temporalio/sdk-typescript/issues/1800), [#1838](https://github.com/temporalio/sdk-typescript/issues/1838))

### Phase 3: Feature Expansion (Medium-term)

- OpenTelemetry v2 support ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658))
- OpenAI Agents integration ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))
- NestJS integration improvements ([#483](https://github.com/temporalio/sdk-typescript/issues/483))
- Vite bundling support ([#1280](https://github.com/temporalio/sdk-typescript/issues/1280))
- Native request batching ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499))

### Phase 4: Platform Expansion (Long-term)

- Bun runtime support ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) - requires significant engineering effort
- In-browser gRPC client ([#207](https://github.com/temporalio/sdk-typescript/issues/207))
- Alpine/musl support ([#1621](https://github.com/temporalio/sdk-typescript/issues/1621))

### Phase 5: Maintenance (Ongoing)

- Aggressive stale issue triage (58 issues)
- Close duplicate/obsolete issues
- Document resolved issues and migration paths
- Keep dependencies updated (protobufjs, OpenTelemetry, etc.)
