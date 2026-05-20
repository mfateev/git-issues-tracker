# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 52
**Total Closed Issues:** 255
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Temporal .NET SDK has a healthy resolution rate of 83% across 307 total issues, with the active backlog of 52 open issues dominated by enhancement requests (30 open) and bugs (12 open). The backlog is growing very slightly (+3 over the last 12 months), indicating the team is keeping pace with incoming work. The most pressing concerns are a stale backlog (63% of open issues have had no activity in over 12 months) and a low user-engagement signal overall — only 6 issues have any upvotes — suggesting the .NET SDK community is smaller or less vocal than other SDK communities.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 12 | High — testing environment hangs, serialization issues, and RPC cancellation errors affect developer productivity |
| Enhancements | 30 | Medium — broad coverage from DI integration to platform support and Nexus; most have no upvotes |
| Security Vulnerabilities | 1 | Medium — single open Mend-reported dependency vulnerability (CVSS 7.5) open since Feb 2024 |
| Stale Issues | 33 | Low — 63% of open issues are inactive; systematic triage needed |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 13 |
| Total Comments | 46 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 24 (46%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 83% (255/307) |
| Median Time to Close | 20 days (calendar) / 15 days (business) |
| Resolved within 30 days | 61% |
| Resolved within 90 days | 81% |

### Recommended Actions

1. **Immediate:** Address the open security vulnerability [#194](https://github.com/temporalio/sdk-dotnet/issues/194) — a `coverlet.collector` dependency with CVSS 7.5, open for over 15 months.
2. **Short-term:** Fix the highest-engagement bugs: the Workflow Update hang in time-skipping environments ([#179](https://github.com/temporalio/sdk-dotnet/issues/179)) and the RpcException cancellation bug ([#395](https://github.com/temporalio/sdk-dotnet/issues/395)).
3. **Medium-term:** Implement .NET Trimming support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286)) — the top-upvoted issue (7 👍) and essential for AOT/mobile deployment scenarios.
4. **Long-term:** Improve testability and DI integration (scoped `IServiceProvider` in interceptors [#363](https://github.com/temporalio/sdk-dotnet/issues/363), synchronous `Run` in testing [#420](https://github.com/temporalio/sdk-dotnet/issues/420), F# documentation [#390](https://github.com/temporalio/sdk-dotnet/issues/390)).
5. **Housekeeping:** Triage the 33 stale issues; many are internal feature tracking items that may have been completed without being closed.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The .NET SDK backlog is essentially stable with only a marginal net increase of 3 issues over the past year, indicating the team is resolving issues at nearly the same pace as they arrive. September 2025 saw a notable burst of closures (12 closed, 5 opened), reflecting focused release work.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 62 | 59 | +3 |

📈 **Backlog Growing:** 3 more issues opened than closed in the last 12 months (essentially stable).

### Last 6 Months: Detailed Analysis

The last 6 months show moderately active development, with bugs and enhancements being resolved at roughly equal rates. No community-upvoted issues were resolved in this period, reflecting the low upvote engagement overall.

| Metric | Value |
|--------|-------|
| Issues Opened | 29 |
| Issues Closed | 23 |
| Bugs Closed | 11 |
| Enhancements Completed | 11 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The highest-upvote open issues (including [#286](https://github.com/temporalio/sdk-dotnet/issues/286) with 7 👍) remain unresolved.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | [Feature Request] F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | [Feature Request] Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | [Feature Request] Clarify what the ICustomMetricMeter is used for |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | [Feature Request] Support single-platform local NuGet package build |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | [Bug] Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | [Feature Request] F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | [Feature Request] OperatorService (RPC) and WorkflowService (RPC) members marked virtual |
| 6 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 4 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 3 | [Feature Request] Provide synchronous Run method in testing |
| 8 | [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | [Bug] Temporalio.Exceptions.RpcException: operation was canceled |
| 9 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | [Bug] Unexpected reuse of payload instances in payload codec |
| 10 | [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 2 | DescribeTaskQueueAsync does not return stats |

---

## Issue Analysis by Category

### Security Vulnerabilities (1 issue)

One open security vulnerability flagged by the Mend dependency scanner. While it targets a test-only dependency, it has been open for 15+ months.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | 0 | `coverlet.collector` 3.1.2 has 1 vulnerability with severity 7.5. Opened Feb 2024, no activity. |

### Bugs (12 open issues)

Bugs are spread across testing infrastructure, serialization, and runtime behavior. Grouped below by impact area.

#### High Priority: Test Environment & Core Runtime

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 0 | 8 | Workflow Update hangs in time-skipping test environment — the most commented open bug; blocks testing Update workflows |
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 0 | 3 | `RpcException: operation was canceled` thrown unexpectedly; impacts reliability of RPC-heavy workflows |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 0 | 3 | Unexpected reuse of payload instances in payload codec for specific workflow failure scenarios — potential data corruption |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | 0 | 1 | Handle multiple completion commands — edge case in workflow task completion logic |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | 0 | 0 | Some unlikely workflow task failures (e.g., failure conversion issues) may be silently lost |

#### Medium Priority: Serialization & Activity

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#677](https://github.com/temporalio/sdk-dotnet/issues/677) | 0 | 1 | Asymmetric payload conversion of Nexus operation inputs from workflow — newly opened (May 2026) |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | 0 | 1 | Unexpected serialization of activity results in certain scenarios |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | 0 | 1 | TaskQueue not forwarded when using Test Environment — breaks ContinueAsNew (hangs) |

#### Lower Priority: Test Flakiness & Observability

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#478](https://github.com/temporalio/sdk-dotnet/issues/478) | 0 | 1 | Flaky test: `CanRunWith_CustomSlotSupplier` — open since May 2025 |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | 0 | 0 | Flaky test: `ExecuteWorkflowAsync_PollingBehavior_Autoscaling` |
| [#640](https://github.com/temporalio/sdk-dotnet/issues/640) | 0 | 0 | OTel tracing interceptor doesn't intercept standalone activity client calls |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | 0 | 0 | Time-skipping test server not auto-skipping time properly — very old issue (2023) |

---

## API & Component Hotspots

Based on the enhanced issue index and `issues-by-area.json`, the areas with the highest concentration of issues (open + closed) are:

| Area | Total Issues | Notes |
|------|-------------|-------|
| test-framework | 25 | Largest area — reflects heavy investment in testing infrastructure |
| workflow-execution | 13 | Core workflow lifecycle and state management |
| dependency-security | 10 | Mend-reported vulnerabilities, mostly closed |
| dependency-injection | 9 | DI integration is a recurring pain point for .NET developers |
| nexus-operations | 4+ | Active area; multiple recent additions |
| worker-versioning | 4 | Worker deployment and versioning API development |

The test framework area dominates, which is typical for a relatively young SDK that has been rapidly building out its testing utilities. The DI integration cluster reflects a community expectation — .NET developers expect first-class `IServiceProvider` integration throughout the SDK.

---

## Enhancement Requests (30 open issues)

Enhancement requests span a wide variety of domains. Grouped by theme below.

### Runtime & Platform Support

| Issue | 👍 | Request |
|-------|-----|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | Support .NET Trimming (AOT/publish-trimmed scenarios) |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | Support win-x86 platform target |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | Replace `System.TimeProvider` in workflows for better test integration |

### Testability & Testing Framework

| Issue | 👍 | Request |
|-------|-----|---------|
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | Provide synchronous `Run` method in testing for simpler test setup |
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | 0 | Auto-skip time in time-skipping environment when waiting on Update result |
| [#291](https://github.com/temporalio/sdk-dotnet/issues/291) | 0 | Update test runner to support workflow replay |
| [#229](https://github.com/temporalio/sdk-dotnet/issues/229) | 0 | Separate `Temporalio.Testing` into its own NuGet package |
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | 0 | Add tests to confirm proper Nexus support for time-skipping environment |

### Dependency Injection & .NET Integration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | Make scoped `IServiceProvider` available to `ActivityInboundInterceptor` |
| [#558](https://github.com/temporalio/sdk-dotnet/issues/558) | 0 | Allow overriding Worker Deployment Version when invoking child workflows |

### API Design & Extensibility

| Issue | 👍 | Request |
|-------|-----|---------|
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | Make `OperatorService` and `WorkflowService` RPC members virtual or interface-based for mocking |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | Enforce no-commands-allowed restrictions in read-only contexts |
| [#246](https://github.com/temporalio/sdk-dotnet/issues/246) | 0 | Expose raw proto objects on `WorkflowExecution` and `WorkflowExecutionDescription` |
| [#176](https://github.com/temporalio/sdk-dotnet/issues/176) | 0 | Handle possibility of update-before-start |
| [#412](https://github.com/temporalio/sdk-dotnet/issues/412) | 0 | Expose workflow cancel cause/reason |
| [#402](https://github.com/temporalio/sdk-dotnet/issues/402) | 0 | Expose read-only headers to activity info |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | Improve `WaitConditionAsync` semantics |
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | Provide "workflow local" scoped storage |
| [#398](https://github.com/temporalio/sdk-dotnet/issues/398) | 0 | Add explicit memoization support to the `Patched()` API |

### Observability & Error Handling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | Include more details from tonic in failed `client_rpc_call` invocations |
| [#171](https://github.com/temporalio/sdk-dotnet/issues/171) | 0 | Schedule creation should create tracing spans by default |

### Documentation & Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | F# samples and documentation |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | Clarify what `ICustomMetricMeter` is used for in DiagnosticSource extension README |
| [#435](https://github.com/temporalio/sdk-dotnet/issues/435) | 0 | Workflow logging with NLog async calls — restricted async APIs in workflows |

### Build Infrastructure & Internals

| Issue | 👍 | Request |
|-------|-----|---------|
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | Support single-platform local NuGet package build (developer ergonomics) |
| [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 0 | Use `global.json` file to centralize SDK version (internal tooling) |
| [#586](https://github.com/temporalio/sdk-dotnet/issues/586) | 0 | Separate unmanaged pointer lifecycle management into SafeHandles |
| [#587](https://github.com/temporalio/sdk-dotnet/issues/587) | 0 | Refactor `Bridge.Client` to be `IDisposable` instead of a SafeHandle |
| [#440](https://github.com/temporalio/sdk-dotnet/issues/440) | 0 | Support user data in forwarded log callback in C bridge |

### Nexus & New Features

| Issue | 👍 | Request |
|-------|-----|---------|
| [#706](https://github.com/temporalio/sdk-dotnet/issues/706) | 0 | Implement operator commands for Standalone Activities |
| [#624](https://github.com/temporalio/sdk-dotnet/issues/624) | 0 | Support conflict token retry loop for schedule updates |
| [#638](https://github.com/temporalio/sdk-dotnet/issues/638) | 0 | SDK should fail workflow task if payload size is known to be too large |
| [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 0 | `DescribeTaskQueueAsync` does not return stats |
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | .NET Roslyn Analyzer for checking workflow constraints |
| [#479](https://github.com/temporalio/sdk-dotnet/issues/479) | 0 | Worker Versioning high-level client API |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

33 open issues (63%) have had no activity in over 12 months. The stale issues fall into three groups:

- **Close candidates (likely completed or no longer relevant):**
  - [#131](https://github.com/temporalio/sdk-dotnet/issues/131) — Single-platform local NuGet (opened Sep 2023, no activity since Sep 2023; multi-platform build ergonomics may have improved)
  - [#77](https://github.com/temporalio/sdk-dotnet/issues/77) — Time-skipping auto-skip (very old; may have been partially addressed by newer time-skipping work)
  - [#479](https://github.com/temporalio/sdk-dotnet/issues/479) — Worker Versioning high-level client (Worker Versioning API was released — issue status may be stale)

- **Needs triage:**
  - [#286](https://github.com/temporalio/sdk-dotnet/issues/286) — .NET Trimming (7 upvotes, last updated Jun 2024; needs clear milestone or acknowledgment of scope)
  - [#360](https://github.com/temporalio/sdk-dotnet/issues/360) — Auto-skip time for Update result (known limitation; needs a status update)
  - [#386](https://github.com/temporalio/sdk-dotnet/issues/386) — `WaitConditionAsync` semantics improvement (internal design issue)
  - [#387](https://github.com/temporalio/sdk-dotnet/issues/387) — "Workflow local" storage (design-level feature, needs scoping)
  - [#395](https://github.com/temporalio/sdk-dotnet/issues/395) — RpcException cancellation (active user-reported bug; needs investigation update)
  - [#440](https://github.com/temporalio/sdk-dotnet/issues/440) — C bridge logging user data (internal tracking; assign or close)

- **Keep open (valid, unresolved):**
  - [#179](https://github.com/temporalio/sdk-dotnet/issues/179) — Workflow Update hang in time-skipping (high priority bug with 8 comments)
  - [#234](https://github.com/temporalio/sdk-dotnet/issues/234) — Payload instance reuse bug (data integrity concern)
  - [#363](https://github.com/temporalio/sdk-dotnet/issues/363) — Scoped IServiceProvider in interceptors (genuine user need)
  - [#402](https://github.com/temporalio/sdk-dotnet/issues/402) — Expose read-only headers to activity info (API completeness)

### Duplicate Candidates

- [#553](https://github.com/temporalio/sdk-dotnet/issues/553) (OperatorService/WorkflowService virtual members) is in the same spirit as [#419](https://github.com/temporalio/sdk-dotnet/issues/419) (WorkflowHandle virtual members — now closed), but distinct enough to keep open.
- [#578](https://github.com/temporalio/sdk-dotnet/issues/578) (Nexus time-skipping tests) closely overlaps with [#179](https://github.com/temporalio/sdk-dotnet/issues/179) and [#360](https://github.com/temporalio/sdk-dotnet/issues/360); consider consolidating.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Resolve open security vulnerability: [#194](https://github.com/temporalio/sdk-dotnet/issues/194) (`coverlet.collector` CVSS 7.5)
- Fix Workflow Update hang in time-skipping environment: [#179](https://github.com/temporalio/sdk-dotnet/issues/179)
- Fix `RpcException: operation was canceled` spurious error: [#395](https://github.com/temporalio/sdk-dotnet/issues/395)
- Fix potential data corruption from payload instance reuse in codec: [#234](https://github.com/temporalio/sdk-dotnet/issues/234)

### Phase 2: Developer Experience (Short-term)
- .NET Trimming / AOT support: [#286](https://github.com/temporalio/sdk-dotnet/issues/286) (top user request, 7 upvotes)
- Scoped `IServiceProvider` in `ActivityInboundInterceptor`: [#363](https://github.com/temporalio/sdk-dotnet/issues/363)
- Synchronous `Run` method in testing: [#420](https://github.com/temporalio/sdk-dotnet/issues/420)
- Fix `TaskQueue` not forwarded with `ContinueAsNew` in test environment: [#280](https://github.com/temporalio/sdk-dotnet/issues/280)
- F# samples and documentation: [#390](https://github.com/temporalio/sdk-dotnet/issues/390)

### Phase 3: Feature Expansion (Medium-term)
- Make RPC service members virtual for mocking: [#553](https://github.com/temporalio/sdk-dotnet/issues/553)
- Expose workflow cancel cause/reason: [#412](https://github.com/temporalio/sdk-dotnet/issues/412)
- `DescribeTaskQueueAsync` stats support: [#634](https://github.com/temporalio/sdk-dotnet/issues/634)
- .NET Roslyn Analyzer for workflow constraint checking: [#576](https://github.com/temporalio/sdk-dotnet/issues/576)
- Explicit memoization support for `Patched()` API: [#398](https://github.com/temporalio/sdk-dotnet/issues/398)

### Phase 4: Maintenance (Ongoing)
- Triage and close the 33 stale open issues; add `stale` labels where appropriate
- Resolve remaining test flakiness: [#478](https://github.com/temporalio/sdk-dotnet/issues/478), [#549](https://github.com/temporalio/sdk-dotnet/issues/549)
- Bridge refactoring to SafeHandles: [#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)
- Centralize SDK version with `global.json`: [#563](https://github.com/temporalio/sdk-dotnet/issues/563)
