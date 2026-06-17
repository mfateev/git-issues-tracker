# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 153
**Total Closed Issues:** 692
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

**Semantic Data:** Enhanced issue index with semantic fields (subcategory, apis, components, concepts, severity) is available in `repos/temporalio-sdk-typescript/issues-index-enhanced.json`.

---

## Executive Summary

The TypeScript SDK carries 153 open issues against 692 closed (82% resolution rate), with a slowly growing backlog (+12 net over 12 months, +6 over the last 6 months). The dominant pain points are tooling/bundler integration (NextJS, Vite, ESM, webpack), workflow isolation and replay determinism, and the test framework (`@temporalio/testing`, jest/nyc integration). Median time to close is healthy at 27 calendar days, but a substantial 59% of open issues are stale (>12 months without activity), reflecting a long tail of un-triaged feature requests.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Open bugs | 46 | High — includes 14 high-severity bugs touching replay, bundler, worker init, and performance |
| Enhancements/features | 86 | Medium — concentrated in framework integrations (NextJS, NestJS, Vite), test framework, and packaging |
| Critical-severity issues | 1 | High — `#1736` (sensitive data masking/sanitization) |
| High-severity issues | 31 | High — bundler/SSR breakage, workflow replay NDEs, performance regressions |
| Test-framework issues | 12 open / 55 lifetime | High — biggest single-subcategory hotspot in the SDK |
| Stale (>12 months) | 91 (59%) | Housekeeping — many feature requests with little engagement |
| Security issues | 0 labeled | Low — no `security` label, but `#1736` is functionally a security concern |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) on open | 121 |
| Total Comments on open | 299 |
| Issues with Upvotes | 40 (26%) |
| Issues with Comments | 73 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 82% (692/845) |
| Median Time to Close | 27 days (calendar) / 19 days (business) |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 69% |

### Recommended Actions

1. **Immediate:** Address `#1736` (sensitive data masking) — only `critical` severity item open. Triage the cluster of bundler/SSR/NextJS breakage (`#2098`, `#1615`, `#1489`, `#1858`) blocking adoption in modern web stacks.
2. **Short-term:** Fix high-severity replay determinism bugs (`#1790`, `#1966`, `#2023`, `#1744`) and the `#1587` async-function performance regression (10–15× slowdown). Resolve `#928` (Jest open handles, 7 👍 / 26 💬) which is the most engaged bug in the SDK.
3. **Medium-term:** Ship the two top-upvoted feature requests: `#1755` OpenAI Agents integration (20 👍) and `#1658` OpenTelemetry v2 (19 👍). Complete `#1703` (Client over NativeConnection) which unblocks Eager Workflow Start.
4. **Long-term:** Invest in the test framework cluster (12 open issues, 55 lifetime — largest area in the SDK) and packaging refactor (`#933` core/workflow split, `#1621` musl builds, `#2079` package.json exports).
5. **Housekeeping:** Triage the 91 stale issues — close clearly-superseded items (`#915` from 2022, `#754` from 2023) and confirm relevance for the rest.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 92 | 80 | +12 |

📈 **Backlog Growing (slightly):** 12 more issues opened than closed over 12 months. The most recent months (2026-03 through 2026-06) all show net-positive opens, including a burst in May from the Standalone Activities / external payload storage feature work. The trend is mild and not a crisis, but resolution is not keeping up with intake.

### Last 6 Months: Detailed Analysis

Maintainers closed 45 issues in the last 6 months (23 bugs, 16 enhancements), but 51 new issues opened — a net +6. Median time to close in this window jumped to 50 calendar days (vs the lifetime median of 27), suggesting the recent intake skews toward harder-to-resolve issues.

| Metric | Value |
|--------|-------|
| Issues Opened | 51 |
| Issues Closed | 45 |
| Bugs Closed | 23 |
| Enhancements Completed | 16 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 51 | [Feature Request] Run temporal worker in bun |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | [Bug] Failure to start ephemeral server prevents shutdown |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | [Feature Request] Simplify proper usage of `AsyncLocalStorage` |
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | [Bug] Workflow task not found after SDK upgrade |

The Bun support landing (`#1334`, 51 👍) is the headline win — the most-requested feature in TypeScript SDK history closed in this window.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | 14 | [Feature Request] Temporal integration for `@openai/agents` |
| 2 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | 1 | [Feature Request] Add support for opentelemetry v2 |
| 3 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | [Feature Request] Enable in-browser usage of gRPC client |
| 4 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | [Feature Request] Native Request Batching to Prevent "received message larger than max" Errors |
| 5 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | [Bug] Jest detects open handles |
| 6 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | [Feature Request] Create a separate "core" library for workflows |
| 7 | [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | 0 | [Feature Request] Include musl-based shared library in package |
| 8 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | 37 | [Feature Request] NestJS Transport / Integration? |
| 9 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | 14 | [Bug] Cannot use Temporal with NextJS 15 because workflowTypes come from function names |
| 10 | [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | 5 | Bundle using Vite |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 54 | [Feature Request] Temporal integration for `@openai/agents` |
| 2 | [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 45 | [Feature Request] NestJS Transport / Integration? |
| 3 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 40 | [Bug] Jest detects open handles |
| 4 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 39 | [Feature Request] Add support for opentelemetry v2 |
| 5 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 25 | [Feature Request] Enable in-browser usage of gRPC client |
| 6 | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 20 | [Bug] Cannot use Temporal with NextJS 15 because workflowTypes come from function names |
| 7 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 14 | [Feature Request] Native Request Batching |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 14 | [Feature Request] Create a separate "core" library |
| 9 | [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 12 | [Bug] `nyc-test-coverage` is excessively difficult to use |
| 10 | [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 11 | Bundle using Vite |

The top two issues by engagement are framework/ecosystem integrations — `@openai/agents` and NestJS — signaling that "Temporal fits naturally into my existing app stack" is the dominant TypeScript developer concern.

---

## Issue Analysis by Category

### Bundler & Framework Compatibility (open bug + feature cluster)

This is the most disruptive category for TypeScript users. Modern frontend/SSR frameworks (NextJS, Vite, Nx) and the SDK's webpack-based workflow bundler keep colliding. These bugs block adoption in the most common TypeScript deployment patterns.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | 3 | NextJS 15 minifies function names; `workflowType` inferred from `Function.name` breaks (severity:high) |
| [#2098](https://github.com/temporalio/sdk-typescript/issues/2098) | 1 | Vite SSR (v1.16.0+) emits broken bare deep imports without `.js` extension (severity:high) |
| [#1489](https://github.com/temporalio/sdk-typescript/issues/1489) | 1 | NextJS server-side import of client fails: `data-converter-helpers.js` uses dynamic require (severity:high) |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | 1 | `reuseV8Context` freezes global Reflect, breaking `reflect-metadata` and Inversify decorators (severity:high) |
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | 1 | ESM custom payload converters cannot be loaded (severity:medium) |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Cannot bundle with Vite (feature request, severity:medium) |
| [#1740](https://github.com/temporalio/sdk-typescript/issues/1740) | 1 | `webpackConfigHook` doesn't suppress all webpack output |
| [#1112](https://github.com/temporalio/sdk-typescript/issues/1112) | 0 | Workflow bundler doesn't deny `process` global, allowing latent ReferenceError (severity:high) |
| [#1008](https://github.com/temporalio/sdk-typescript/issues/1008) | 2 | Webpack failures give no useful output |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Better Nx (monorepo) support |
| [#2079](https://github.com/temporalio/sdk-typescript/issues/2079) | 1 | Use `package.json` exports to define clean cross-package entry points |
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Separate "core" library for workflows without bundler dependencies |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | Include musl-based shared library in package (Alpine/glibc compatibility) |

**Recommendation:** Treat NextJS+Vite as first-class targets. The pattern of issues suggests that the workflow-bundler abstraction (webpack-centric, function-name-based registration, dynamic requires) has aged poorly relative to the modern ESM/exports world. `#2079` is a good organizing thread.

### Workflow Replay & Determinism Bugs (high severity)

Replay nondeterminism is the most damaging class of bugs for users in production — workflows get stuck or fail mid-execution.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | 0 | Replay fails with NDE for child workflows even though IDs come from history (9 💬) |
| [#1966](https://github.com/temporalio/sdk-typescript/issues/1966) | 0 | NDE on update response — Update Accepted + StartTimer sent twice |
| [#2023](https://github.com/temporalio/sdk-typescript/issues/2023) | 0 | `interceptors-opentelemetry` breaks determinism when handling queries/update validation (uuid4 returns different values on replay) |
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | 1 | NDE replaying nested `Promise.all()` — activity order differs between execution and replay |
| [#1580](https://github.com/temporalio/sdk-typescript/issues/1580) | 0 | Workflows stuck after cancellation with spurious WorkflowTaskFailed (severity:high) |
| [#1652](https://github.com/temporalio/sdk-typescript/issues/1652) | 0 | Should throw when state-mutating APIs are called from query/update validation handlers |
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | 2 | Throwing from workflow may produce `DataCloneError` "Failed to activate workflow" |

**Recommendation:** These are user-visible production failures with concrete repros. They should rank above most enhancements. The OpenTelemetry interceptor breaking determinism (`#2023`) is particularly insidious because users opt into telemetry without expecting workflow correctness consequences.

### Worker & Runtime Issues

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | 1 | Worker crashes with "async hook stack has become corrupted" on workflow task timeout (8 💬) |
| [#1578](https://github.com/temporalio/sdk-typescript/issues/1578) | 1 | Worker fails to start with Node `--abort-on-uncaught-exception` |
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | 1 | Async functions degrade performance 10–15× due to promiseHooks (7 💬) |
| [#1772](https://github.com/temporalio/sdk-typescript/issues/1772) | 0 | `extractSourceMap` uses 2GB+ RAM on boot |
| [#1843](https://github.com/temporalio/sdk-typescript/issues/1843) | 0 | Default `maxCachedWorkflows` ignores VM isolate memory outside V8 heap → OOM |
| [#2068](https://github.com/temporalio/sdk-typescript/issues/2068) | 0 | Legacy Runtime native resource tracking causes flakes — should be removed |
| [#1953](https://github.com/temporalio/sdk-typescript/issues/1953) | 0 | `Worker.create()` ignores pre-loaded `LoadedDataConverter`, re-runs `require()` |

**Recommendation:** `#1587` (async function performance) and `#1843` / `#1772` (memory accounting) are the kind of "silent dragon" issues that cause production teams to look elsewhere. They deserve attention even though upvote counts are low.

### Test Framework (`@temporalio/testing`, jest, nyc)

The single largest subcategory in the SDK by lifetime count (55 issues, 12 currently open). Users want a smoother story for unit-testing workflows and activities.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | Jest detects open handles (26 💬 — by far the most-engaged bug) |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | 0 | `nyc-test-coverage` is excessively difficult to use (12 💬, severity:high) |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | 0 | `TestWorkflowEnvironment.createLocal()` times out intermittently with multiple suites |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | 0 | Test suite timeout on first run when SDK download is slow |
| [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) | 1 | `TestWorkflowEnvironment` should support non-spawned servers |
| [#1601](https://github.com/temporalio/sdk-typescript/issues/1601) | 0 | `env.run` doesn't infer return type — returns `unknown` |
| [#1710](https://github.com/temporalio/sdk-typescript/issues/1710) | 0 | Better type inference for `MockActivityEnvironment.run` |
| [#1144](https://github.com/temporalio/sdk-typescript/issues/1144) | 0 | Capture workflow test coverage via Jest |
| [#665](https://github.com/temporalio/sdk-typescript/issues/665) | 0 | Allow for easy mocking |
| [#1549](https://github.com/temporalio/sdk-typescript/issues/1549) | 0 | Auto-skip time in time-skipping env when waiting on update result |
| [#1337](https://github.com/temporalio/sdk-typescript/issues/1337) | 0 | Add workflow update tests to nightly suite |
| [#1308](https://github.com/temporalio/sdk-typescript/issues/1308) | 0 | Add type-rule assertion tests for "user-defined function with args" APIs |

**Recommendation:** A focused "testing experience" sprint — close `#928`, ship `#1332`, and fix the type inference issues — would have outsized goodwill impact. This is one of the most-commented areas relative to upvotes (i.e. people are actively trying to use the test framework and hitting friction).

### Security & Data Handling

Only one labeled `critical` severity item exists in the SDK, and it concerns sensitive data:

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1736](https://github.com/temporalio/sdk-typescript/issues/1736) | 1 | Mask/sanitize client sensitive data references — API keys, auth credentials leaked through serialization/logging (severity:**critical**) |
| [#1512](https://github.com/temporalio/sdk-typescript/issues/1512) | 0 | Payload converter error during error-detail encoding crashes the worker (severity:high) |

No issues carry the GitHub `security` label, but `#1736` should be treated as one.

---

## API & Component Hotspots

Derived from `apis` and `components` fields on open issues in `issues-index-enhanced.json`.

| Component | Open Issues | Notes |
|-----------|-------------|-------|
| `worker` | 46 | Touches almost every issue — broadest surface |
| `error-handling` | 12 | Subcategory itself has 6 open issues |
| `workflow-execution` | 10 | High-severity replay/determinism bugs cluster here |
| `bundler` / `build-system` | 10 + 5 | NextJS/Vite/webpack pain |
| `activity-executor` | 10 | Heartbeats, batching, ordering |
| `client` / `workflow-client` | 9 + 7 | Client-over-NativeConnection unification incomplete (`#1703`) |
| `workflow-context` | 7 | Side-effect-free contexts (query/validator) need stronger guarantees |
| `payload-converter` / `data-converter` | 6 + 5 | ESM/loader/pre-loaded-converter issues recur |
| `workflow-sandbox` | 5 | Isolation costs vs. correctness — `#1557` proposes opt-out |

| API | Open Issues |
|-----|-------------|
| `proxyActivities` | 7 |
| `Worker.create` | 7 |
| `setHandler` | 6 |
| `workflowInfo` | 5 |
| `startChild` | 5 |
| `Client` | 5 |
| `executeChild` | 4 |
| `Worker.runReplayHistory` | 2 |
| `TestWorkflowEnvironment` | 2 |

**Implication:** Worker initialization, bundling, and the activity proxy API are the busiest seams. Investments in any of these has compounding value.

---

## Enhancement Requests (86 issues)

### Framework & Ecosystem Integrations (top demand)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | 20 | Temporal integration for `@openai/agents` |
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | 19 | OpenTelemetry v2 support |
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | In-browser gRPC client |
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | 4 | NestJS Transport / Integration |
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | 3 | Vite bundling |
| [#783](https://github.com/temporalio/sdk-typescript/issues/783) | 1 | Nx (monorepo) support |

### Packaging & Distribution

| Issue | 👍 | Request |
|-------|-----|---------|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | Separate "core" workflow library without bundler deps |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | 4 | musl-based shared library (Alpine support) |
| [#2079](https://github.com/temporalio/sdk-typescript/issues/2079) | 1 | Use `package.json` exports for cross-package entry points |
| [#1965](https://github.com/temporalio/sdk-typescript/issues/1965) | 1 | Run worker without bundled workflows |
| [#1113](https://github.com/temporalio/sdk-typescript/issues/1113) | 1 | `npx @temporalio/doctor` diagnostic command |

### API Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | Native request batching to avoid gRPC 4MB limit when scheduling many activities |
| [#1362](https://github.com/temporalio/sdk-typescript/issues/1362) | 2 | `Worker.runReplayHistory()` should accept serialized history from `fetchHistory()` |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | 2 | Support passing preloaded data converters to Client |
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | 2 | Distinguish error types in logs across Worker↔Workflow boundary |
| [#1675](https://github.com/temporalio/sdk-typescript/issues/1675) | 1 | Support `AggregateError` |
| [#1700](https://github.com/temporalio/sdk-typescript/issues/1700) | 1 | `executeChild` should use passed headers |
| [#754](https://github.com/temporalio/sdk-typescript/issues/754) | 1 | Friendly version of `listWorkflowExecutions` |
| [#740](https://github.com/temporalio/sdk-typescript/issues/740) | 1 | `ChildWorkflowHandle.cancel()` |
| [#1703](https://github.com/temporalio/sdk-typescript/issues/1703) | 0 | Complete Client-over-NativeConnection (unblocks Eager Workflow Start) |

### Observability & Telemetry

| Issue | 👍 | Request |
|-------|-----|---------|
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | 3 | Emit metrics from client connection |
| [#2031](https://github.com/temporalio/sdk-typescript/issues/2031) | 0 | Telemetry support for Standalone Activities |
| [#384](https://github.com/temporalio/sdk-typescript/issues/384) | 0 | Add actual span time to workflow OTEL interceptor spans |
| [#360](https://github.com/temporalio/sdk-typescript/issues/360) | 0 | Make tracing tags consistent across SDKs |
| [#2066](https://github.com/temporalio/sdk-typescript/issues/2066) | 0 | Log when WFT completion takes a long time |

### Schedules, Updates & Workflow Lifecycle

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1351](https://github.com/temporalio/sdk-typescript/issues/1351) | 2 | Update schedule by cronExpression |
| [#1594](https://github.com/temporalio/sdk-typescript/issues/1594) | 1 | (bug) `triggerImmediately` doesn't honor overlap policy |
| [#1557](https://github.com/temporalio/sdk-typescript/issues/1557) | 0 | Allow opt-out of workflow isolation (8 💬) |
| [#1021](https://github.com/temporalio/sdk-typescript/issues/1021) | 0 | Async generator for `CancellationScope` (8 💬) |
| [#868](https://github.com/temporalio/sdk-typescript/issues/868) | 0 | Lint rule preventing Query handlers from mutating state (11 💬) |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

91 of 153 open issues (59%) have no activity for over 12 months. Most are low-engagement feature requests. Recommended triage buckets:

- **Close candidates (clearly stale, low signal):**
  - [#915](https://github.com/temporalio/sdk-typescript/issues/915) — last touched 2022-10, predates current metrics stack
  - [#754](https://github.com/temporalio/sdk-typescript/issues/754) — last touched 2023-01, "friendly listWorkflowExecutions" superseded by enhanced client surface
  - [#472](https://github.com/temporalio/sdk-typescript/issues/472) — eslint plugin from 2023-02 with no activity
  - [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) — Vite bundling (2023-11) — likely overlaps with `#2098` and `#2079`; consolidate

- **Needs maintainer decision (still valid, awaiting design call):**
  - [#933](https://github.com/temporalio/sdk-typescript/issues/933) — core workflow library split (6 👍, last 2025-02)
  - [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) — musl shared library (4 👍, last 2025-02)
  - [#1351](https://github.com/temporalio/sdk-typescript/issues/1351) — schedule update by cronExpression (2 👍)
  - [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) — `TestWorkflowEnvironment` non-spawned servers

- **Keep open (still relevant, just unworked):**
  - [#207](https://github.com/temporalio/sdk-typescript/issues/207) — browser gRPC (9 👍) — long-term ask, valid
  - [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) — native request batching (7 👍) — concrete user problem
  - [#1668](https://github.com/temporalio/sdk-typescript/issues/1668) — `@types/ms` missing (small fix waiting)

### Duplicate Candidates

- [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) "Bundle using Vite" overlaps with [#2098](https://github.com/temporalio/sdk-typescript/issues/2098) (Vite SSR bundling bug) and [#2079](https://github.com/temporalio/sdk-typescript/issues/2079) (package.json exports). Consolidate into the active threads.
- [#1112](https://github.com/temporalio/sdk-typescript/issues/1112) and [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) both ultimately concern workflow-sandbox runtime fidelity — keep separate but cross-link.
- The various replay-NDE bugs ([#1790](https://github.com/temporalio/sdk-typescript/issues/1790), [#1966](https://github.com/temporalio/sdk-typescript/issues/1966), [#2023](https://github.com/temporalio/sdk-typescript/issues/2023), [#1744](https://github.com/temporalio/sdk-typescript/issues/1744)) likely share a few underlying causes around child workflow / update state-machine handling; worth grouping for investigation.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Resolve `#1736` (sensitive data masking — only `critical` item)
- Fix replay-determinism cluster: `#1790`, `#1966`, `#2023`, `#1744`
- Address `#1587` async-function performance regression (10–15× slowdown)
- Fix `#1843` / `#1772` (worker memory accounting / boot-time RAM)

### Phase 2: Developer Experience (Short-term)
- "Modern web stack" compatibility wave: `#1615` (NextJS 15), `#2098` (Vite SSR), `#1489` (NextJS server), `#1858` (reflect-metadata), `#1292` (ESM converters)
- Test framework polish: close `#928` (Jest open handles, 7 👍 / 26 💬), `#1233` (nyc-coverage), `#1687`/`#1702` (test env reliability), `#1601`/`#1710` (type inference)
- Ship `#1703` (Client over NativeConnection) — unblocks Eager Workflow Start

### Phase 3: Feature Expansion (Medium-term)
- `#1755` (`@openai/agents` integration, 20 👍) — top demand
- `#1658` (OpenTelemetry v2, 19 👍)
- `#1499` (native request batching, 7 👍)
- `#933` (core workflow library split, 6 👍) + `#2079` (package exports) as a packaging refactor
- `#483` (NestJS integration, 37 💬) — high comment engagement
- `#1621` (musl shared library, 4 👍)

### Phase 4: Maintenance (Ongoing)
- Triage the 91 stale issues — close clearly-stale (`#915`, `#754`, `#472`), consolidate duplicates (`#1280` into `#2098`/`#2079`)
- Browser gRPC (`#207`, 9 👍) — keep open with explicit long-term/no-current-plan status if not on the roadmap
- Cross-SDK consistency: `#360` (tracing tags), `#384` (OTEL span timing)
