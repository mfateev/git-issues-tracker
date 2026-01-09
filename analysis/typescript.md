# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 144
**Total Closed Issues:** 653
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The TypeScript SDK has a mature and active issue landscape with 144 open issues and an 82% resolution rate, demonstrating strong maintainer engagement. The backlog is slowly growing (+24 net issues over 12 months), driven primarily by enhancement requests (84) that outnumber bugs (49). The most significant user demand centers on alternative JavaScript runtime support (Bun with 46 upvotes), AI agent integrations, and modern framework compatibility (Next.js 15, OpenTelemetry v2).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 49 | High - Several affect core functionality including testing, SDK upgrades, and performance |
| Enhancements | 84 | Medium - Strong user demand for runtime/framework integrations |
| Documentation | 6 | Low - Relatively minor documentation gaps |
| Stale Issues | 58 | Medium - 40% of open issues have had no activity for over 12 months |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 171 |
| Total Comments | 342 |
| Issues with Upvotes | 37 (26%) |
| Issues with Comments | 73 (51%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (653/797) |
| Median Time to Close | 26 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 70% |

### Recommended Actions

1. **Immediate:** Address SDK upgrade regression ([#1749](https://github.com/temporalio/sdk-typescript/issues/1749)) affecting production workflows
2. **Short-term:** Improve Jest/testing experience ([#928](https://github.com/temporalio/sdk-typescript/issues/928)), fix Next.js 15 compatibility ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615))
3. **Medium-term:** Ship OpenTelemetry v2 interceptors ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)), split worker package for smaller bundles ([#933](https://github.com/temporalio/sdk-typescript/issues/933))
4. **Long-term:** Continue monitoring Bun runtime compatibility ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)), develop AI agent integrations ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))
5. **Housekeeping:** Triage 58 stale issues, close or revive as appropriate

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The TypeScript SDK backlog is slowly growing, with 24 more issues opened than closed over the past year. This is manageable but indicates the need for either increased maintainer capacity or more aggressive issue triage.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 101 | 77 | +24 |

**Commentary:** The SDK sees consistent monthly activity with occasional spikes (April 2025 saw 21 new issues). Closure rates have been relatively steady at 5-10 issues per month.

### Last 6 Months: Detailed Analysis

The recent 6-month period shows near-equilibrium with 43 issues opened and 44 closed. Notably, recent closures skew toward features (26) over bugs (12), indicating the team is making progress on user-requested enhancements.

| Metric | Value |
|--------|-------|
| Issues Opened | 43 |
| Issues Closed | 44 |
| Bugs Closed | 12 |
| Enhancements Completed | 26 |

### Popular Requests Resolved (Last 6 Months)

Several high-visibility issues were resolved recently, demonstrating responsiveness to user demand:

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#1773](https://github.com/temporalio/sdk-typescript/issues/1773) | 11 | [Bug] error: TypeError: (0 , ms_1.default) is not a function |
| [#1750](https://github.com/temporalio/sdk-typescript/issues/1750) | 7 | [Bug] Workflow logs not propagated unless telemetryOptions set |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of AsyncLocalStorage |
| [#1348](https://github.com/temporalio/sdk-typescript/issues/1348) | 3 | [Feature Request] Eager Workflow Start |

---

## User Demand: Top Issues by Upvotes

The highest-voted issues reveal clear community priorities: alternative runtime support, AI integrations, and observability improvements.

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | 46 | [Feature Request] Run temporal worker in bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 8 | [Feature Request] Temporal integration for `@openai/agents` |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching to Prevent gRPC errors |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | [Bug] Failure to start ephemeral server prevents shutdown |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create separate "core" library without bundler deps |
| 9 | [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | 4 | [Bug] Workflow task not found after SDK upgrade |
| 10 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library in package |

### Priority Score (Upvotes x 2 + Comments)

Combined engagement reveals which issues have both strong support and active discussion:

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
| 9 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | Create separate "core" library |
| 10 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 13 | Failure to start ephemeral server |

---

## Issue Analysis by Category

### High-Priority Bugs (14 issues)

These bugs affect core SDK functionality, testing, or production stability.

#### Testing & Development Experience

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects "neon threadsafe function" open handles, preventing clean test exits. A 3-year-old issue with extensive workarounds documented but no SDK-level fix. |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Ephemeral server startup failures prevent process shutdown, particularly on unsupported architectures (Linux ARM). |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | `nyc-test-coverage` package is excessively difficult to use for workflow coverage. |

#### SDK Upgrade & Compatibility Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | "Workflow task not found" errors after upgrading from 1.11.8 to 1.12.1 - a critical regression affecting production workflows. |
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | Next.js 15 breaks Temporal due to function name minification. The SDK relies on function names for workflow types, which conflicts with production bundlers. Turbopack team has engaged on this issue. |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing exceptions from workflows may result in `Failed to activate workflow` errors. |

#### Performance Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Async functions are 10-15x slower than sync functions due to promise hook overhead for stack trace capture. |
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | 0 | Performance regression from 1.13.1 to 1.13.2. |
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | 0 | High CPU usage with OTel instrumentation when updating schedules. |

#### Workflow Sandbox Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay workflow history fails with nondeterminism errors - 9 comments indicating active investigation. |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | Non-determinism errors when replaying nested promises. |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | 0 | Cannot use `structuredClone` in workflow code. |

### Medium-Priority Bugs (35 issues)

Additional bugs covering payload converters, OpenTelemetry integration, worker configuration, and various edge cases. Notable issues include:

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) | 2 | common package not importing @types/ms |
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | 1 | ESM Custom payload converters cannot be loaded |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" |
| [#1779](https://github.com/temporalio/sdk-typescript/issues/1779) | 0 | OTel interceptors bypass regular serialization |
| [#1738](https://github.com/temporalio/sdk-typescript/issues/1738) | 0 | OpenTelemetry traceState handling issues |
| [#1717](https://github.com/temporalio/sdk-typescript/issues/1717) | 0 | Protobuf Payload Converter broken after upgrading dependencies |

---

## Enhancement Requests (84 issues)

Enhancement requests cluster around several key themes reflecting the modern TypeScript ecosystem.

### Runtime & Platform Support

The most demanded enhancement is Bun runtime support, with extensive community investigation and workarounds.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 46 | **Bun Runtime Support** - Extensive 46-comment thread tracking Bun compatibility. Key blockers include `node:v8` promiseHooks (not implemented in Bun) and `node:vm` microtask handling differences. Community has made significant progress - workflows execute with patches but completion still fails in some scenarios. Maintainers note that Bun is not yet stable enough for production use with Temporal. |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | **Browser gRPC Client** - Enable in-browser workflow client using grpc-web. Would require server-side proxy support. HTTP/1.1 API work may eventually enable this. |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | **musl-based Shared Library** - Support Alpine Linux containers with native bindings. |

### AI & Agent Integrations

With the rise of AI agents, there is strong demand for official Temporal integrations.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | **OpenAI Agents SDK Integration** - Request for `@openai/agents-js` plugin similar to the Python SDK's `OpenAIAgentsPlugin`. The team confirmed it is on the roadmap, with the `ai` package (Vercel AI SDK) being prioritized first via [PR #1792](https://github.com/temporalio/sdk-typescript/pull/1792). |

### Observability & Telemetry

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | **OpenTelemetry v2 Support** - OTel released major version 2 with breaking changes. The team plans to create a new package (`@temporalio/interceptors-opentelemetry2`) to allow coexistence. Work is in progress on v1 improvements first, including covering all events and extending to the new Plugin form. |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | **Emit Metrics from Client Connection** - Expose connection-level metrics for monitoring. |

### Framework Integrations

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | **NestJS Integration** - 37-comment thread exploring decorator-based workflow definitions and DI integration. Community library [nestjs-temporal](https://github.com/KurtzL/nestjs-temporal) exists and works well. Official integration would enable tighter DX. |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | **Vite Bundling** - Support bundling workflows with Vite instead of webpack. |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | **Native Request Batching** - Automatically split large activity batches to avoid gRPC 4MB message limit. Currently causes silent workflow freezes when exceeding the limit. User has provided a working prototype implementation. |
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | **Separate Core Library** - Split `@temporalio/worker` to exclude webpack/swc bundler dependencies (~200MB) from production images. Workaround exists via package manager overrides. Maintainers plan to split into `bundler` and `worker-core` packages. |
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | **Lint Rule for Query Handlers** - Prevent queries from modifying workflow state. |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | **Workflow Isolation Opt-out** - Allow disabling V8 sandbox isolation for simpler debugging and fewer edge cases. Maintainers note this would require significant architectural changes due to the sandbox's role in microtask handling. |

### Workflow Capabilities

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | **Async Generator for CancellationScope** - Enable async iteration patterns within cancellation scopes. |
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | **Distinguish Error Types in Workflows** - Provide a way to differentiate error origins (activity vs workflow). |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

58 issues (40% of open issues) have had no activity for over 12 months. This represents a significant maintenance burden.

**Close Candidates (likely resolved or obsolete):**
- [#754](https://github.com/temporalio/sdk-typescript/issues/754) - Add friendly version of listWorkflows (3+ years old)
- Issues related to older Node.js versions or deprecated APIs

**Needs Triage (require maintainer decision):**
- [#207](https://github.com/temporalio/sdk-typescript/issues/207) - Browser gRPC client (9 upvotes, but may be superseded by HTTP API work)
- [#915](https://github.com/temporalio/sdk-typescript/issues/915) - Client metrics (3 upvotes, 3+ years old)
- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) - Vite bundling (3 upvotes, last activity 2023)

**Keep Open (valid but awaiting capacity):**
- [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) - Request batching (7 upvotes, clear user need)
- [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) - TestWorkflowEnvironment should be closeable (1 upvote, valid improvement)

### Duplicate Candidates

- [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) and [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) may be related performance/upgrade issues
- Several OpenTelemetry issues ([#1779](https://github.com/temporalio/sdk-typescript/issues/1779), [#1738](https://github.com/temporalio/sdk-typescript/issues/1738)) may share root causes

---

## Proposed Roadmap

Based on user demand, issue severity, and maintainer comments:

### Phase 1: Stability (Immediate)

- **Investigate SDK upgrade regression** ([#1749](https://github.com/temporalio/sdk-typescript/issues/1749)) - Critical for user confidence in upgrading
- **Fix async function performance** ([#1587](https://github.com/temporalio/sdk-typescript/issues/1587)) - 10-15x slowdown affects real workloads
- **Address Next.js 15 compatibility** ([#1615](https://github.com/temporalio/sdk-typescript/issues/1615)) - Turbopack team is engaged; coordinate on solution

### Phase 2: Developer Experience (Short-term)

- **Improve Jest testing experience** ([#928](https://github.com/temporalio/sdk-typescript/issues/928)) - Long-standing pain point with many workarounds
- **Ship OpenTelemetry v2 interceptors** ([#1658](https://github.com/temporalio/sdk-typescript/issues/1658)) - Confirmed coming soon
- **Fix ephemeral server shutdown** ([#1443](https://github.com/temporalio/sdk-typescript/issues/1443)) - Affects CI/testing reliability

### Phase 3: Feature Expansion (Medium-term)

- **AI Agent integration** - Vercel AI SDK first ([PR #1792](https://github.com/temporalio/sdk-typescript/pull/1792) in review), then OpenAI Agents ([#1755](https://github.com/temporalio/sdk-typescript/issues/1755))
- **Worker package split** ([#933](https://github.com/temporalio/sdk-typescript/issues/933)) - Reduce container image sizes by ~200MB
- **Request batching** ([#1499](https://github.com/temporalio/sdk-typescript/issues/1499)) - Prevent silent workflow failures

### Phase 4: Platform Expansion (Long-term)

- **Monitor Bun compatibility** ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334)) - Community is making progress; wait for Bun to stabilize `node:vm` support
- **Browser client support** ([#207](https://github.com/temporalio/sdk-typescript/issues/207)) - May be enabled by HTTP/1.1 API work
- **Consider NestJS official integration** ([#483](https://github.com/temporalio/sdk-typescript/issues/483)) - Community library exists; evaluate adoption

### Phase 5: Maintenance (Ongoing)

- Triage 58 stale issues - close obsolete, label "help wanted" for community contributions
- Document workarounds for known issues in official docs
- Continue optimizing workflow sandbox performance
