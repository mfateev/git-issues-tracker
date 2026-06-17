# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 40
**Total Closed Issues:** 235
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [Ruby](ruby.md)

**Semantic Data:** Pre-categorized issues with semantic fields (subcategory, apis, components, concepts, severity) are available in `repos/temporalio-sdk-php/issues-index-enhanced.json`.

---

## Executive Summary

The Temporal PHP SDK has a healthy resolution rate (85%, 235/275) and a shrinking backlog (net -17 issues over the last 12 months). The open issue surface is small (40 issues) but skews older — 53% are stale (>12 months without activity), and bug pressure is concentrated on the test framework (time-skipping, mocking, exception propagation) and several long-standing reliability problems (worker memory leaks, session-worker activity registration, hanging activity tasks). Enhancement requests dominate (23 of 40 open issues) and are heavily focused on feature parity with the Java/Go/Python SDKs — Nexus, versioning, plugin systems, Cloud Operations, typed search attributes, and IDE/developer-experience improvements.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bug fixes (open) | 8 | High — several test-framework hangs and a long-open memory leak ([#635](https://github.com/temporalio/sdk-php/issues/635)) |
| Enhancement requests (open) | 23 | High — drives feature parity (Nexus, versioning, plugins, Cloud Ops) |
| Test-framework issues (open) | 8 | High — blocks reliable workflow/update/time-skipping testing |
| Questions / discussions (open) | 4 | Medium — clarify docs, may close after triage |
| Documentation gaps (open) | 1 | Medium — marshaller docs ([#592](https://github.com/temporalio/sdk-php/issues/592)) is top-upvoted issue |
| Security vulnerabilities (open) | 0 | None reported |
| Stale issues (>12 months) | 21 (53%) | Housekeeping — large triage opportunity |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 14 |
| Total Comments | 67 |
| Issues with Upvotes | 8 (20%) |
| Issues with Comments | 21 (53%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 85% (235/275) |
| Median Time to Close | 46 days (calendar) / 33 days (business) |
| Resolved within 30 days | 48% |
| Resolved within 90 days | 60% |

### Recommended Actions

1. **Immediate:** No reported security vulnerabilities. Address the long-running worker memory leak ([#635](https://github.com/temporalio/sdk-php/issues/635)) and the hanging `listWorkflowExecutions` call ([#752](https://github.com/temporalio/sdk-php/issues/752)) since both are user-blocking high-severity bugs.
2. **Short-term:** Fix the cluster of test-framework bugs that break time-skipping, mocking, and update testing ([#577](https://github.com/temporalio/sdk-php/issues/577), [#743](https://github.com/temporalio/sdk-php/issues/743), [#744](https://github.com/temporalio/sdk-php/issues/744), [#745](https://github.com/temporalio/sdk-php/issues/745), [#428](https://github.com/temporalio/sdk-php/issues/428)).
3. **Medium-term:** Close core feature-parity gaps: Nexus ([#580](https://github.com/temporalio/sdk-php/issues/580)), versioning patches ([#558](https://github.com/temporalio/sdk-php/issues/558)), schedule update conflict handling ([#729](https://github.com/temporalio/sdk-php/issues/729)), and the marshaller documentation ([#592](https://github.com/temporalio/sdk-php/issues/592)).
4. **Long-term:** Address high-demand feature requests — Cloud Operations ([#476](https://github.com/temporalio/sdk-php/issues/476)), IDE support ([#554](https://github.com/temporalio/sdk-php/issues/554)), workflow-local storage ([#545](https://github.com/temporalio/sdk-php/issues/545)), Fiber-based workflow API ([#702](https://github.com/temporalio/sdk-php/issues/702)).
5. **Housekeeping:** Triage the 21 stale issues — many are duplicates or already-completed feature parity asks.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 32 | 49 | -17 |

📉 **Backlog Shrinking:** 17 more issues closed than opened in the last 12 months. The PHP SDK team is steadily working down the backlog while still accepting new work — a healthy trend.

### Last 6 Months: Detailed Analysis

Recent activity is dominated by feature-completion (13 enhancements closed) and bug fixes (9 closed). Many closures are tied to the broader cross-SDK feature rollout (worker versioning, plugins, user metadata, RawValue payloads, environment configuration, application failure logging/metrics). Net change of -10 indicates active maintenance.

| Metric | Value |
|--------|-------|
| Issues Opened | 18 |
| Issues Closed | 28 |
| Bugs Closed | 9 |
| Enhancements Completed | 13 |

### Popular Requests Resolved (Last 6 Months)

No closed issues from the last 6 months had ≥3 upvotes — most popular open issues remain open. Closed enhancements in this window were primarily maintainer-driven feature-parity work (worker versioning, plugins, user metadata, RawValue payloads, environment configuration) rather than community-voted asks.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | 1 | Simplify developer experience by replacing yields with Fibers |
| 3 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 4 | [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing arguments |
| 6 | [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | 4 | [Feature Request] Expose OperatorServiceClient |
| 8 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set the expectCompletion result for each Activity call |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](https://github.com/temporalio/sdk-php/issues/577) | 8 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#400](https://github.com/temporalio/sdk-php/issues/400) | 6 | [Feature Request] Expose OperatorServiceClient |
| 6 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 5 | Simplify developer experience by replacing yields with Fibers |
| 7 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 5 | [Bug] WorkerFactoryInterface seems to be missing arguments |
| 8 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 9 | [#635](https://github.com/temporalio/sdk-php/issues/635) | 4 | [Bug] Memory leak workflow worker |
| 10 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 4 | [Feature Request] Set the expectCompletion result for each Activity call |

---

## Issue Analysis by Category

### Test-Framework Bugs (5 issues)

The test framework is the single most common bug-cluster in the open issue set. The bugs span time-skipping, mocking, exception propagation, and environment handling — all critical for reliable PHP SDK testing workflows.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | UpdateMethod tests fail with null result assertions while signals work; suspected Test Service ordering issue between time-skipping and update result handling. |
| [#743](https://github.com/temporalio/sdk-php/issues/743) | 0 | Time-skipping isn't automatically unlocked during `getResult()`, causing timer-driven workflows to hang in tests (requires manual `unlockTimeSkipping`). |
| [#744](https://github.com/temporalio/sdk-php/issues/744) | 0 | `WorkflowTestCase` silently connects to the wrong Temporal server when `TEMPORAL_ADDRESS` is pre-set in the OS env (PHPUnit env directive doesn't override). |
| [#745](https://github.com/temporalio/sdk-php/issues/745) | 0 | `ActivityMocker` bypasses the worker's activity-running signal; the virtual clock skips through start-to-close timeouts before mocked responses are delivered. |
| [#727](https://github.com/temporalio/sdk-php/issues/727) | 0 | `startTemporalTestServer` assumes the test framework owns server lifecycle, preventing users from running tests against externally-managed Temporal servers. |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | Unit tests hang indefinitely when the workflow under test throws a runtime or compile-time exception — the framework doesn't surface exceptions. |
| [#654](https://github.com/temporalio/sdk-php/issues/654) | 0 | `Workflow::upsertTypedSearchAttributes` causes test-server timeouts when called inside a workflow; suspected lack of typed-SA support in test server. |

**Pattern:** Most of these bugs stem from coordination issues between the test server's virtual clock, the worker, and PHP/PHPUnit lifecycle. Several are connected (e.g., [#743](https://github.com/temporalio/sdk-php/issues/743) and [#745](https://github.com/temporalio/sdk-php/issues/745) both involve the time-skipping subsystem). Fixing them as a single test-framework hardening initiative would unblock a wide range of user testing scenarios.

### Worker / Runtime Bugs (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 0 | Workflow worker leaks significant memory (multi-GB) when workflows are repeatedly restarted via UI. Severity: high; involves GC/resource cleanup of zombie processes. |
| [#568](https://github.com/temporalio/sdk-php/issues/568) | 0 | Activity task hangs after completion and doesn't return until `startToClose` timeout (3 min) expires, triggering spurious retry. |
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 0 | `withEnableSessionWorker(true)` causes user-registered activities to be unfindable (`ActivityNotRegistered`), making session workers unusable. Open since 2022. |

### Client / API Bugs (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#752](https://github.com/temporalio/sdk-php/issues/752) | 0 | `listWorkflowExecutions` hangs when executing a query filter (same query works in CLI). Missing deadline/timeout on the gRPC call. |
| [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | `WorkerFactoryInterface` signature is missing parameters present in the actual implementation (`ExceptionInterceptorInterface`, `PipelineProvider`) — interface contract mismatch. |
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | `WorkflowStub` methods (except `getResult`) don't map gRPC errors to Temporal exceptions — `cancel()` and others throw generic `ServiceClientException`. |

### Documentation Gaps (1 open)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | The marshaller — central to PHP data serialization — has no documentation. Top-upvoted PHP SDK issue; blocks adoption for new users trying to serialize complex object/typed-list payloads. |

### Open Questions / Discussions (4 issues)

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | Best practices for integrating Sentry for error logging — users want a global error handler hook in worker/activity. Long-standing question; would benefit from an official integration recipe. |
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | Discussion to define and enforce a backwards-compatibility promise (Symfony-style) for the PHP SDK. Recent releases introduced multiple breaking changes without a clear policy. |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 3 | `awaitWithTimeout` doesn't immediately continue when a `Promise::all()` rejects — marked "Not a Bug"; promise semantics need clarification in docs. |
| [#532](https://github.com/temporalio/sdk-php/issues/532) | 0 | Asynchronous child workflow execution patterns — child doesn't start before parent completes; user seeks `asyncDetached` semantics guidance. |

---

## API & Component Hotspots

The most-mentioned components across open semantic cards:

| API/Component | Open Issue Count | Notes |
|---------------|------------------|-------|
| test-framework / test-server / ActivityMocker | 8 | Largest cluster; spans time-skipping, mocking, env handling |
| workflow-execution / workflow-engine | 6 | Cancellation cause, async execution, lifecycle cleanup |
| worker (memory, heartbeat, session, activity-executor) | 5 | Memory leak ([#635](https://github.com/temporalio/sdk-php/issues/635)), heartbeat config ([#720](https://github.com/temporalio/sdk-php/issues/720)), session bugs ([#123](https://github.com/temporalio/sdk-php/issues/123)) |
| marshaller / data-converter / serialization | 4 | Marshaller docs, codec context, payload conversion |
| WorkflowClient / ServiceClient / gRPC-client | 4 | Hangs, error mapping, factory interface mismatches |
| interceptors / interceptor-context | 2 | `init()` exposure, Java parity |
| nexus | 1 | Initial PHP Nexus implementation outstanding |

**APIs with the most open issues:** `WorkflowClient`/`ServiceClient` (4 mentions), `Workflow::timer` (3), `ActivityMocker`/`Workflow::newActivityStub` (3), `WorkflowTestCase` (2).

---

## Enhancement Requests (23 issues)

### Cross-SDK Feature Parity (largest category)

The PHP SDK is actively closing feature-parity gaps with Java/Go/Python. Outstanding parity asks:

| Issue | 👍 | Request |
|-------|-----|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | Initial Nexus implementation for PHP — part of broad Nexus rollout |
| [#558](https://github.com/temporalio/sdk-php/issues/558) | 0 | `Patched()` / `DeprecatePatch()` versioning APIs (matches Core) |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | Cloud Operations API client |
| [#601](https://github.com/temporalio/sdk-php/issues/601) | 0 | Expose `init()` on `WorkflowInboundCallInterceptor` (Java parity) |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | Expose existing-but-internal `OperatorServiceClient` (namespace delete, etc.) |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | Encode failures using `EncodedAttributes` (Harness test compliance) |

### Test Framework Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | `registerDelayedCallback` for tests (cross-SDK parity) |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Allow mocking child workflows similar to activity stubs |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | `ActivityMocker::expectCompletion()` per-call results (loop scenarios) |

### Developer Experience & API Design

| Issue | 👍 | Request |
|-------|-----|---------|
| [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | Replace yield-based generator pattern with PHP Fibers (modernization) |
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | IDE/autocomplete support for typed workflow stubs |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 0 | Improve PHP files generated from proto (Psalm annotations, null-safety) |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 0 | Clarify WorkflowClient API — distinguish Workflow Stub vs Proxy objects |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | Allow custom exception classes to carry failure context |

### Workflow Semantics & Lifecycle

| Issue | 👍 | Request |
|-------|-----|---------|
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 0 | Workflow-local storage (thread-local equivalent scoped to execution) |
| [#567](https://github.com/temporalio/sdk-php/issues/567) | 0 | Expose `WorkflowExecutionCancelRequestedEventAttributes.cause` to workflows |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | Remove `DestructMemorizedInstanceException` via proper context/promise cleanup |

### Serialization & Codecs

| Issue | 👍 | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-php/issues/587) | 0 | Serialization context for codecs and converters |

### Schedules

| Issue | 👍 | Request |
|-------|-----|---------|
| [#729](https://github.com/temporalio/sdk-php/issues/729) | 0 | Conflict-token retry loop for schedule updates (server now returns mismatched-conflict-token errors) |

### Worker Configuration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#720](https://github.com/temporalio/sdk-php/issues/720) | 0 | Worker-level heartbeating configuration (Go SDK parity) |

### Error Handling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | `mapWorkflowFailureToException`-style mapping for `WorkflowStub` methods |

### Dependencies & Tooling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#741](https://github.com/temporalio/sdk-php/issues/741) | 0 | Bump Temporal API version to 1.62.8 |
| [#698](https://github.com/temporalio/sdk-php/issues/698) | 0 | Drop support for PHP 7 / 8.0 dependencies in `composer.json` |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

53% of open issues (21) have no activity in >12 months. Many appear to be either superseded by completed feature-parity work or are legitimate parity asks awaiting prioritization.

- **Close candidates (likely superseded or already implemented):**
  - [#244](https://github.com/temporalio/sdk-php/issues/244) (2022) — `FailureConverter` context: overlaps with recently-closed application-failure-logging work ([#632](https://github.com/temporalio/sdk-php/issues/632))
  - [#269](https://github.com/temporalio/sdk-php/issues/269) — `mapWorkflowFailureToException` API: verify against current error-mapping behavior
  - [#318](https://github.com/temporalio/sdk-php/issues/318) — Improve proto-generated PHP files: verify if recent codegen updates address Psalm issues
  - [#399](https://github.com/temporalio/sdk-php/issues/399) — Marked "Not a Bug"; close after adding promise-semantics docs

- **Needs triage (decide intent before closing):**
  - [#302](https://github.com/temporalio/sdk-php/issues/302) — `ActivityMocker::expectCompletion()` per-call: still valid; should be paired with [#745](https://github.com/temporalio/sdk-php/issues/745)
  - [#454](https://github.com/temporalio/sdk-php/issues/454) — Failure encoding for Harness: confirm Harness test status
  - [#476](https://github.com/temporalio/sdk-php/issues/476) — Cloud Operations: confirm roadmap timing
  - [#495](https://github.com/temporalio/sdk-php/issues/495) — Backwards-compat promise: needs maintainer decision document
  - [#507](https://github.com/temporalio/sdk-php/issues/507) — DestructMemorizedInstanceException cleanup
  - [#524](https://github.com/temporalio/sdk-php/issues/524) — Child workflow mocking
  - [#532](https://github.com/temporalio/sdk-php/issues/532) — Async child workflow execution help (question)
  - [#545](https://github.com/temporalio/sdk-php/issues/545) — Workflow-local storage
  - [#567](https://github.com/temporalio/sdk-php/issues/567) — Cancel cause exposure
  - [#568](https://github.com/temporalio/sdk-php/issues/568) — Activity task hang (likely still a real bug)
  - [#587](https://github.com/temporalio/sdk-php/issues/587) — Serialization context for codecs
  - [#601](https://github.com/temporalio/sdk-php/issues/601) — Interceptor `init()` exposure

- **Keep open (valid, awaiting work):**
  - [#592](https://github.com/temporalio/sdk-php/issues/592) — Marshaller docs (top user demand)
  - [#554](https://github.com/temporalio/sdk-php/issues/554) — IDE support
  - [#529](https://github.com/temporalio/sdk-php/issues/529) — `registerDelayedCallback`
  - [#573](https://github.com/temporalio/sdk-php/issues/573) — `WorkerFactoryInterface` mismatch (real bug)

### Duplicate Candidates

- [#558](https://github.com/temporalio/sdk-php/issues/558) (Patched/DeprecatePatch) and [#613](https://github.com/temporalio/sdk-php/issues/613) (closed Q&A) — both relate to workflow versioning; consider linking
- [#743](https://github.com/temporalio/sdk-php/issues/743), [#577](https://github.com/temporalio/sdk-php/issues/577) — both involve test-server time-skipping coordination
- [#745](https://github.com/temporalio/sdk-php/issues/745), [#302](https://github.com/temporalio/sdk-php/issues/302) — both deal with `ActivityMocker` shortcomings
- [#580](https://github.com/temporalio/sdk-php/issues/580) and the broader features-repo Nexus tracker — link as cross-references

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix worker memory leak ([#635](https://github.com/temporalio/sdk-php/issues/635))
- Fix `listWorkflowExecutions` hang ([#752](https://github.com/temporalio/sdk-php/issues/752))
- Fix activity task hang after completion ([#568](https://github.com/temporalio/sdk-php/issues/568))
- Fix session-worker activity registration ([#123](https://github.com/temporalio/sdk-php/issues/123))
- Fix `WorkflowStub` gRPC-to-Temporal exception mapping ([#269](https://github.com/temporalio/sdk-php/issues/269))

### Phase 2: Developer Experience (Short-term)
- Test-framework hardening sprint: [#577](https://github.com/temporalio/sdk-php/issues/577), [#743](https://github.com/temporalio/sdk-php/issues/743), [#744](https://github.com/temporalio/sdk-php/issues/744), [#745](https://github.com/temporalio/sdk-php/issues/745), [#428](https://github.com/temporalio/sdk-php/issues/428), [#727](https://github.com/temporalio/sdk-php/issues/727), [#654](https://github.com/temporalio/sdk-php/issues/654)
- Author marshaller documentation ([#592](https://github.com/temporalio/sdk-php/issues/592)) — highest community demand
- Fix `WorkerFactoryInterface` signature mismatch ([#573](https://github.com/temporalio/sdk-php/issues/573))
- Publish backwards-compatibility policy ([#495](https://github.com/temporalio/sdk-php/issues/495))
- Add `registerDelayedCallback` test helper ([#529](https://github.com/temporalio/sdk-php/issues/529))
- Sentry/error-handler integration guide ([#103](https://github.com/temporalio/sdk-php/issues/103))

### Phase 3: Feature Expansion (Medium-term)
- Nexus implementation ([#580](https://github.com/temporalio/sdk-php/issues/580))
- Workflow versioning APIs `Patched`/`DeprecatePatch` ([#558](https://github.com/temporalio/sdk-php/issues/558))
- Schedule conflict-token retry ([#729](https://github.com/temporalio/sdk-php/issues/729))
- Worker heartbeating configuration ([#720](https://github.com/temporalio/sdk-php/issues/720))
- Cloud Operations client ([#476](https://github.com/temporalio/sdk-php/issues/476))
- Expose `OperatorServiceClient` ([#400](https://github.com/temporalio/sdk-php/issues/400))
- IDE/typed-stub support ([#554](https://github.com/temporalio/sdk-php/issues/554))
- Serialization context for codecs ([#587](https://github.com/temporalio/sdk-php/issues/587))

### Phase 4: Maintenance (Ongoing)
- Triage 21 stale issues — confirm close vs keep-open decisions
- Bump Temporal API to 1.62.8 ([#741](https://github.com/temporalio/sdk-php/issues/741)) and drop legacy PHP 7/8.0 deps ([#698](https://github.com/temporalio/sdk-php/issues/698))
- Long-term DX investment: evaluate Fiber-based workflow API ([#702](https://github.com/temporalio/sdk-php/issues/702)) and workflow-local storage ([#545](https://github.com/temporalio/sdk-php/issues/545))
- Improve proto-generated code annotations ([#318](https://github.com/temporalio/sdk-php/issues/318))
