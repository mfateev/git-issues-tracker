# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 50
**Total Closed Issues:** 258
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md) · [Server](server.md) · [API](api.md)

**Semantic Data:** Sourced from `repos/temporalio-sdk-dotnet/issues-index-enhanced.json` and `analysis/cards-summary.txt` (filtered to `[sdk-dotnet]`).

---

## Executive Summary

The .NET SDK is the most mature of the newer Temporal SDKs from a triage perspective: an 84% resolution rate and a 20-day median close time indicate healthy maintainer throughput. However, the open backlog (50 issues) skews heavily toward enhancements (60%) and is dominated by stale items (66% older than 12 months). User engagement is low (13 total upvotes across all open issues), suggesting most open work is maintainer-initiated rather than user-demanded. The most pressing concerns are a cluster of test-server/time-skipping reliability bugs, several high-severity correctness defects (payload codec reuse, activity-result serialization, workflow-update hang), and one dependency security vulnerability.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (high severity) | 10 | High — includes hangs, lost failures, credential leaks, and a CVE |
| Bugs (medium/low severity) | 3 | Medium — flakes and minor correctness gaps |
| Enhancements / Feature requests | 30 | Medium — mostly low-upvote but several strategic (AOT, versioning, DI) |
| Dependency security vulnerability | 1 | Medium — CVE-2024-21907 in transitive test dependency |
| Test framework gaps | 8 (subcategory) | High — recurring theme blocking user test coverage |
| Stale issues (>12 months) | 33 (66%) | Housekeeping — needs triage sweep |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 13 |
| Total Comments | 45 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 23 (46%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 84% (258/308) |
| Median Time to Close | 20 days (calendar) / 15 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 81% |

### Recommended Actions

1. **Immediate:** Upgrade the `Coverlet.collector` dependency to remove CVE-2024-21907 ([#194](https://github.com/temporalio/sdk-dotnet/issues/194)); fix the activity-result handle serialization leak ([#357](https://github.com/temporalio/sdk-dotnet/issues/357)).
2. **Short-term:** Resolve time-skipping test environment defects ([#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#280](https://github.com/temporalio/sdk-dotnet/issues/280)) and the payload codec reuse bug ([#234](https://github.com/temporalio/sdk-dotnet/issues/234)).
3. **Medium-term:** Address structural correctness gaps — multiple-completion command handling ([#305](https://github.com/temporalio/sdk-dotnet/issues/305)), child-workflow failure conversion ([#588](https://github.com/temporalio/sdk-dotnet/issues/588)), task-queue stats ([#634](https://github.com/temporalio/sdk-dotnet/issues/634)), and schedule-update conflict-token retries ([#624](https://github.com/temporalio/sdk-dotnet/issues/624)).
4. **Long-term:** Deliver .NET Trimming/AOT support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286), the top-upvoted issue), worker-versioning high-level client ([#479](https://github.com/temporalio/sdk-dotnet/issues/479)), DI improvements ([#363](https://github.com/temporalio/sdk-dotnet/issues/363)), and Roslyn analyzer ([#576](https://github.com/temporalio/sdk-dotnet/issues/576)).
5. **Housekeeping:** Triage the 33 stale issues; many are speculative feature requests or already-resolved items.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is essentially flat, with a single-issue net reduction over the past 12 months. Throughput is healthy and balanced — there is no runaway accumulation.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 60 | 61 | -1 |

⚖️ **Backlog Stable**

### Last 6 Months: Detailed Analysis

The last six months show a slight backlog uptick (+4) but substantial bug-fix throughput (14 bugs closed) and continued enhancement delivery. Median close times dropped to 13 calendar days, indicating the team is processing recent work quickly.

| Metric | Value |
|--------|-------|
| Issues Opened | 26 |
| Issues Closed | 22 |
| Bugs Closed | 14 |
| Enhancements Completed | 7 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. This is consistent with the overall low-upvote profile of the .NET SDK — user demand surfaces primarily through comments and direct support channels rather than public 👍 reactions.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | [Feature Request] F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | [Feature Request] Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | [Feature Request] Clarify what the ICustomMetricMeter is used for |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | [Feature Request] Support single-platform local NuGet packaging |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | [Bug] Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | [Feature Request] F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | [Feature Request] OperatorService (RPC) and WorkflowService mockability |
| 6 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 4 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 3 | [Feature Request] Provide synchronous Run method in testing |
| 8 | [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | [Bug] Temporalio.Exceptions.RpcException: operation was canceled |
| 9 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | [Bug] Unexpected reuse of payload instances in payload codec |
| 10 | [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 2 | DescribeTaskQueueAsync does not return stats |

---

## Issue Analysis by Category

### Dependency Security (1 issue)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | 0 | Coverlet.collector pulls in vulnerable Newtonsoft.Json (CVE-2024-21907, CVSS 7.5) — denial of service via deserialization stack overflow. Transitive test-only dep, but flagged by scanners in user CI. |

The vulnerability is in a test dependency (`Coverlet.collector`), so production runtime impact is nil. However, it routinely surfaces in user security scanners and should be upgraded.

### High-Severity Bugs (10 issues)

The .NET SDK has a concentrated cluster of correctness bugs around the **time-skipping test server**, **workflow updates**, **payload handling**, and **child-workflow failure paths**. None have user upvotes, but several have significant comment threads indicating active user pain.

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 0 | 8 | Workflow Update hangs indefinitely on time-skipping test environment — blocks `ExecuteUpdateAsync` testing |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | 0 | 0 | Time-skipping server fails to advance simulated time for long `DelayAsync`, causing real-time test sleeps |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | 0 | 1 | TaskQueue not forwarded in Test Environment → `ContinueAsNew` hangs with "missing TaskQueue" |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 0 | 3 | Payload codec receives reused instances when serializing `ApplicationFailureException` Details — codec mutation can corrupt subsequent payloads |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | 0 | 1 | Activity returning `Task<WorkflowHandle>` serializes the entire handle (including client credentials) into workflow history — **security-sensitive** |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | 0 | 0 | Failures in `QueueNewTaskAsync` failure-conversion logic during child workflow startup may be silently lost |
| [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 0 | 2 | `DescribeTaskQueueAsync` does not populate `Stats` even with `ReportStats=true`; forces use of deprecated API |
| [#624](https://github.com/temporalio/sdk-dotnet/issues/624) | 0 | 0 | Schedule updates lack conflict-token retry loop now required by server |
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 0 | 3 | `RpcException: operation was canceled` raised immediately (without timeout) in `DescribeNamespaceAsync` health checks |
| [#586](https://github.com/temporalio/sdk-dotnet/issues/586) | 0 | 0 | Unmanaged-pointer lifecycle gaps across .NET bridge classes; risk of use-after-free in interop boundary |

### Medium- and Low-Severity Bugs

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#738](https://github.com/temporalio/sdk-dotnet/issues/738) | 0 | 0 | Flaky test: `ExecuteWorkflowAsync_HistoryInfo_IsAccurate` sees 8 events when 50+ expected — race condition in history fetch |
| [#478](https://github.com/temporalio/sdk-dotnet/issues/478) | 0 | 1 | Flake in `CanRunWith_CustomSlotSupplier`: asserts 20 but occasionally gets 21 — slot-supplier shutdown race |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | 0 | 1 | Multiple completion commands: non-query commands following a completion are truncated incorrectly |
| [#601](https://github.com/temporalio/sdk-dotnet/issues/601) | 0 | 0 | `Semaphore.WaitAsync` uses `ContinueWith` as a map, suppressing exceptions on non-fallible inputs today |

### Test Framework / Testability Gaps

The single largest open theme. Splits into **test-server reliability** (covered above as bugs) and **testing-API gaps**:

| Issue | 👍 | Request |
|-------|-----|---------|
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | Mark `OperatorService` / `WorkflowService` RPC methods virtual or extract interfaces to enable NSubstitute mocking |
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | Synchronous `Run` method on `ActivityEnvironment` for unit-testing sync activity methods |
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | 0 | Auto-skip time for update results (mirroring existing workflow-result skip behavior) |
| [#291](https://github.com/temporalio/sdk-dotnet/issues/291) | 0 | Enhanced replay-in-tests / no-cache test workflow execution |
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | 0 | Add tests verifying Nexus support in time-skipping test server |

---

## API & Component Hotspots

Hotspots in open issues, derived from `apis` and `components` fields in the enhanced index.

### APIs

| API | Issue Count | Severity Distribution |
|---------------|-------------|----------------------|
| StartWorkflowAsync | 3 | high: 3 |
| DelayAsync | 2 | high: 2 |
| ExecuteActivityAsync | 2 | medium: 2 |
| DescribeTaskQueueAsync (+ Req/Resp) | 1 | high: 1 |
| UpdateSchedule | 1 | high: 1 |
| StartChildWorkflowAsync / QueueNewTaskAsync | 1 | high: 1 |
| ExecuteUpdateAsync | 1 | high: 1 |
| OperatorService / WorkflowService | 1 | medium: 1 |

`StartWorkflowAsync` and `DelayAsync` recur across the test-server bug cluster; `DescribeTaskQueueAsync` and `UpdateSchedule` are concrete server-API parity gaps.

### Components

| Component | Open Issue Count |
|-----------|-----------------:|
| worker | 5 |
| workflow-execution | 4 |
| time-skipping | 4 |
| client | 4 |
| test-framework | 4 |
| testing | 3 |
| activity-executor | 3 |
| serialization | 3 |
| update-handler | 3 |
| workflow-runtime | 3 |
| WorkflowService | 2 |
| child-workflow-executor | 2 |
| error-handling | 2 |
| SafeHandle | 2 |
| test-server | 2 |
| workflow-context | 2 |
| command-handler | 2 |
| interceptors | 2 |

The clustering around `worker`, `workflow-execution`, `time-skipping`, and `test-framework` confirms that **time-skipping/test-server reliability is the single largest cross-cutting concern**.

---

## Enhancement Requests (30 issues)

Enhancement requests are spread thinly across many small areas — only `test-framework` exceeds five issues. Grouping by theme:

### AOT, Trimming & Packaging

| Issue | 👍 | Request |
|-------|-----|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | Support .NET Trimming / AOT publishing (top-upvoted issue in the repo) |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | Single-platform local NuGet packaging (skip multi-platform build for dev) |
| [#229](https://github.com/temporalio/sdk-dotnet/issues/229) | 0 | Split `Temporalio.Testing` into a separate NuGet package |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | Add Windows 32-bit (win-x86) support for legacy interop |
| [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 0 | Use `global.json` to centralize .NET SDK version |

### Dependency Injection & Framework Integration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | Expose scoped `IServiceProvider` to `ActivityInboundInterceptor` |
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | Mockable `OperatorService` / `WorkflowService` for testing |
| [#435](https://github.com/temporalio/sdk-dotnet/issues/435) | 0 | NLog async-call support in workflows (handle thread-transfer non-determinism) |
| [#171](https://github.com/temporalio/sdk-dotnet/issues/171) | 0 | Auto-create tracing spans when scheduling workflows via tracing interceptor |

### Workflow API & Semantics

| Issue | 👍 | Request |
|-------|-----|---------|
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | `WorkflowLocal<T>` — workflow-scoped state akin to `AsyncLocal` |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | Improve `WaitConditionAsync` semantics for ordered/exclusive wake-ups |
| [#398](https://github.com/temporalio/sdk-dotnet/issues/398) | 0 | Add memoization argument to `Patched()` while preserving backward compatibility |
| [#412](https://github.com/temporalio/sdk-dotnet/issues/412) | 0 | Expose workflow cancel cause/reason |
| [#246](https://github.com/temporalio/sdk-dotnet/issues/246) | 0 | Expose raw proto `RawInfo` / `RawDescription` on `WorkflowExecution` |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | Enforce command restrictions in read-only contexts (wait conditions, validators, queries) |
| [#176](https://github.com/temporalio/sdk-dotnet/issues/176) | 0 | Buffer updates that arrive before workflow start until handlers register |
| [#558](https://github.com/temporalio/sdk-dotnet/issues/558) | 0 | Override target deployment version when invoking child workflows |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | Replace bespoke time handling with `System.TimeProvider` |

### Worker Versioning & Operations

| Issue | 👍 | Request |
|-------|-----|---------|
| [#479](https://github.com/temporalio/sdk-dotnet/issues/479) | 0 | High-level client API for worker deployment control plane (parity with Go) |
| [#706](https://github.com/temporalio/sdk-dotnet/issues/706) | 0 | Operator commands for standalone activities |
| [#638](https://github.com/temporalio/sdk-dotnet/issues/638) | 0 | Fail workflow tasks when payload sizes exceed known limits |

### Observability, Logging, Errors

| Issue | 👍 | Request |
|-------|-----|---------|
| [#496](https://github.com/temporalio/sdk-dotnet/issues/496) | 0 | Standardize workflow run identifier property name (`RunId` vs `WorkflowRunId`) across loggers |
| [#402](https://github.com/temporalio/sdk-dotnet/issues/402) | 0 | Expose read-only headers on `ActivityInfo` (for tracing/update interceptors) |
| [#440](https://github.com/temporalio/sdk-dotnet/issues/440) | 0 | Pass user-data through forwarded log callback in C bridge |
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | Include gRPC status detail in `RpcException` from tonic |
| [#299](https://github.com/temporalio/sdk-dotnet/issues/299) | 0 | Throw detailed `RpcException` when initial `GetSystemInfo` fails on connect |

### Static Analysis & Documentation

| Issue | 👍 | Request |
|-------|-----|---------|
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | Roslyn analyzer for workflow constraint violations (parity with Go/Java analyzers) |
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | F# samples and documentation |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | Clarify `ICustomMetricMeter` purpose in DiagnosticSource extension README |

### Connection / Client Surface

| Issue | 👍 | Request |
|-------|-----|---------|
| [#32](https://github.com/temporalio/sdk-dotnet/issues/32) | 0 | Add `CancellationToken` parameter to `TemporalClient.ConnectAsync()` and related methods |
| [#587](https://github.com/temporalio/sdk-dotnet/issues/587) | 0 | Refactor `Bridge.Client` from `SafeHandle` to `IDisposable` to match `Bridge.Worker` |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

33 of 50 open issues (66%) have had no activity in over 12 months. Top-engagement stale items:

- **Keep open / triage forward (valid, still relevant):**
  - [#286](https://github.com/temporalio/sdk-dotnet/issues/286) — Trimming/AOT (top-upvoted; strategic .NET ecosystem requirement)
  - [#363](https://github.com/temporalio/sdk-dotnet/issues/363) — scoped `IServiceProvider` in `ActivityInboundInterceptor` (DI cornerstone for ASP.NET users)
  - [#420](https://github.com/temporalio/sdk-dotnet/issues/420) — synchronous test `Run` method
  - [#395](https://github.com/temporalio/sdk-dotnet/issues/395) — `RpcException: operation was canceled` (active user pain in comments)
  - [#357](https://github.com/temporalio/sdk-dotnet/issues/357) — credentials leak via activity-result serialization (security)
  - [#305](https://github.com/temporalio/sdk-dotnet/issues/305) — multiple-completion command truncation (correctness)

- **Needs triage / re-confirm with maintainers:**
  - [#479](https://github.com/temporalio/sdk-dotnet/issues/479), [#440](https://github.com/temporalio/sdk-dotnet/issues/440), [#435](https://github.com/temporalio/sdk-dotnet/issues/435), [#412](https://github.com/temporalio/sdk-dotnet/issues/412), [#402](https://github.com/temporalio/sdk-dotnet/issues/402), [#398](https://github.com/temporalio/sdk-dotnet/issues/398), [#387](https://github.com/temporalio/sdk-dotnet/issues/387), [#386](https://github.com/temporalio/sdk-dotnet/issues/386), [#360](https://github.com/temporalio/sdk-dotnet/issues/360) — confirm continued relevance and prioritize or close.

- **Close candidates (low-value or superseded):**
  - [#131](https://github.com/temporalio/sdk-dotnet/issues/131) — local single-platform packaging (developer-only workflow; workarounds exist)
  - [#256](https://github.com/temporalio/sdk-dotnet/issues/256) — small doc clarification; can be folded into a routine docs sweep
  - [#247](https://github.com/temporalio/sdk-dotnet/issues/247) — Windows 32-bit; very narrow audience, consider declining
  - [#299](https://github.com/temporalio/sdk-dotnet/issues/299), [#337](https://github.com/temporalio/sdk-dotnet/issues/337) — overlap with broader RpcException improvement work; consider consolidating

### Duplicate / Overlap Candidates

- [#299](https://github.com/temporalio/sdk-dotnet/issues/299) and [#337](https://github.com/temporalio/sdk-dotnet/issues/337) both ask for richer `RpcException` details — merge into a single "improve gRPC error detail surfacing" issue.
- [#586](https://github.com/temporalio/sdk-dotnet/issues/586) and [#587](https://github.com/temporalio/sdk-dotnet/issues/587) both target bridge-interop / `SafeHandle` lifecycle — track as a single refactor epic.
- [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#360](https://github.com/temporalio/sdk-dotnet/issues/360), [#578](https://github.com/temporalio/sdk-dotnet/issues/578) — distinct issues, but all symptoms of test-server immaturity; consider an "improve time-skipping test environment" umbrella.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Upgrade `Coverlet.collector` to remove CVE-2024-21907 ([#194](https://github.com/temporalio/sdk-dotnet/issues/194))
- Fix activity-result serialization of `WorkflowHandle` (credentials leak) ([#357](https://github.com/temporalio/sdk-dotnet/issues/357))
- Fix payload-codec instance reuse on `ApplicationFailureException.Details` ([#234](https://github.com/temporalio/sdk-dotnet/issues/234))
- Fix child-workflow failure-conversion silent loss ([#588](https://github.com/temporalio/sdk-dotnet/issues/588))
- Fix `DescribeNamespaceAsync` immediate cancellation ([#395](https://github.com/temporalio/sdk-dotnet/issues/395))

### Phase 2: Developer Experience (Short-term)
- **Time-skipping test server epic**: [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#360](https://github.com/temporalio/sdk-dotnet/issues/360), [#578](https://github.com/temporalio/sdk-dotnet/issues/578)
- Multiple-completion command handling ([#305](https://github.com/temporalio/sdk-dotnet/issues/305))
- Schedule conflict-token retry loop ([#624](https://github.com/temporalio/sdk-dotnet/issues/624))
- `DescribeTaskQueueAsync` stats population ([#634](https://github.com/temporalio/sdk-dotnet/issues/634))
- Scoped `IServiceProvider` in `ActivityInboundInterceptor` ([#363](https://github.com/temporalio/sdk-dotnet/issues/363))
- Synchronous testing `Run` method ([#420](https://github.com/temporalio/sdk-dotnet/issues/420))
- Test-flake stabilization ([#478](https://github.com/temporalio/sdk-dotnet/issues/478), [#738](https://github.com/temporalio/sdk-dotnet/issues/738))

### Phase 3: Feature Expansion (Medium-term)
- **.NET Trimming / AOT support** ([#286](https://github.com/temporalio/sdk-dotnet/issues/286)) — highest user demand
- Worker-versioning high-level client ([#479](https://github.com/temporalio/sdk-dotnet/issues/479))
- Roslyn workflow-constraint analyzer ([#576](https://github.com/temporalio/sdk-dotnet/issues/576))
- Bridge interop lifecycle hardening ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587))
- `System.TimeProvider` integration ([#307](https://github.com/temporalio/sdk-dotnet/issues/307))
- F# samples & documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390))
- `CancellationToken` on connect APIs ([#32](https://github.com/temporalio/sdk-dotnet/issues/32))

### Phase 4: Maintenance (Ongoing)
- Triage the 33 stale issues; close speculative items and confirm priority on the rest.
- Consolidate overlapping `RpcException` improvement requests ([#299](https://github.com/temporalio/sdk-dotnet/issues/299), [#337](https://github.com/temporalio/sdk-dotnet/issues/337)).
- Logger property-name standardization ([#496](https://github.com/temporalio/sdk-dotnet/issues/496)).
- Routine NuGet packaging and tooling cleanup ([#131](https://github.com/temporalio/sdk-dotnet/issues/131), [#229](https://github.com/temporalio/sdk-dotnet/issues/229), [#563](https://github.com/temporalio/sdk-dotnet/issues/563)).
