# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 27
**Total Closed Issues:** 168
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md)

**Semantic Data:** Categorization in this document uses `repos/temporalio-sdk-ruby/issues-index-enhanced.json` (subcategory, apis, components, concepts, severity).

---

## Executive Summary

The Ruby SDK has a small but persistent open backlog (27 issues) dominated by enhancement requests (19) with a handful of high-impact bugs (5). The backlog is mildly growing (+2 net over 12 months) and skews old — 44% of open issues are 1-2 years old and 37% are formally stale (>12 months without activity) — but the recent fix cadence is strong: 7 bugs were closed in the last 6 months with a 2-day median time-to-close. The biggest concerns are two recently filed `critical` severity workflow correctness bugs (#464, #463) and a cluster of high-severity workflow-constraint and Ruby-runtime interaction issues (ActiveModel, ScopedLogger, Windows segfaults).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Critical bugs (workflow correctness) | 2 | P0 — non-replayable history (#464) and crash on a real server enum (#463) corrupt durable execution guarantees |
| High-severity bugs | 3 | P1 — ActiveModel/sync primitives (#355), ScopedLogger crashes (#315), Windows segfaults (#172) |
| Feature requests | 19 | Mixed — includes cross-SDK alignment work (Nexus, serialization context, worker versioning) |
| Stale issues (>1 year) | 10 | P3 — needs triage; most are low-engagement feature requests |
| Cross-SDK alignment gaps | ~7 | P2 — Nexus, Worker Versioning, serialization context, conflict-token retry, RBI types, standalone-activity ops |
| Test framework gaps | 2 | P2 — signal+wait_condition testing (#360) blocks user testing workflows |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 4 |
| Total Comments | 10 |
| Issues with Upvotes | 3 (11%) |
| Issues with Comments | 7 (26%) |

Engagement is very low compared to other SDKs, reflecting the Ruby SDK's smaller community footprint. The single most upvoted open item has just 2 upvotes.

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 86% (168/195) |
| Median Time to Close | 40 days (calendar) / 29 days (business) |
| Resolved within 30 days | 44% |
| Resolved within 90 days | 63% |

Resolution velocity in the last 6 months is exceptional — median time-to-close dropped to 2 calendar days, with 69% resolved within 30 days. This suggests the team is actively burning down the queue rather than letting it accumulate.

### Recommended Actions

1. **Immediate:** Fix the two critical correctness bugs — #464 (sync primitives cause un-replayable history) and #463 (`suggestContinueAsNew` Symbol→Integer crash). Both threaten durable execution guarantees.
2. **Short-term:** Address Ruby ecosystem interop bugs — ActiveModel sync constructs (#355), ScopedLogger level comparison (#315), and Windows CI segfaults (#172).
3. **Medium-term:** Close the cross-SDK alignment gap — Nexus implementation (#232), serialization context (#238), conflict-token retry (#401), and child workflow deployment override (#361).
4. **Long-term:** Build the Ruby-idiomatic feature surface — RBI types for Sorbet (#412), workflow-local storage (#179), unawaited-future warnings (#185), and high-level Worker Versioning client (#270).
5. **Housekeeping:** Triage the 10 stale issues — close or refresh items inactive for >12 months. Many predate the SDK's GA and may no longer be relevant.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Ruby SDK backlog is essentially flat to mildly growing — 43 issues opened against 41 closed over the last 12 months. The team has been able to keep pace with incoming bug reports and small feature requests, though larger cross-SDK initiatives (Nexus, Worker Versioning) remain open.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 43 | 41 | +2 |

📈 **Backlog Growing (marginally):** 2 more issues opened than closed; effectively stable but trending up over the last 4 months (+1 to +3 net per month from March–June 2026).

### Last 6 Months: Detailed Analysis

The Ruby SDK has had a strong six-month run on bug fixes: 7 bugs and 5 enhancements closed, with a median 2-day turnaround. Notable closures include Nexus operation timeouts (#389), standalone activities (#367), several Fiber/Ruby-runtime stability bugs (#373, #394, #396, #416), the OpenTelemetry context-leak fix (#394), and a workflow update validator NOT_FOUND bug (#454). However, opens (16) slightly outpaced closes (13), pushing the net up by 3.

| Metric | Value |
|--------|-------|
| Issues Opened | 16 |
| Issues Closed | 13 |
| Bugs Closed | 7 |
| Enhancements Completed | 5 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months — consistent with the SDK's overall low engagement levels. The team is fixing items based on internal prioritization rather than user-vote pressure.

---

## User Demand: Top Issues by Upvotes

With only 4 total upvotes across all 27 open issues, there is minimal community signal. The team should rely more on severity and cross-SDK alignment than on upvote count for prioritization.

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | [Feature Request] Look into client-side trimming of failures to avoid server-side truncation |
| 2 | [#464](https://github.com/temporalio/sdk-ruby/issues/464) | 1 | 0 | [Bug] Sync primitives can lead to un-replayable workflow history |
| 3 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | [Feature Request] Update build-gems GH workflow smoke test to use macOS Apple Silicon |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 5 | [Feature Request] Look into client-side trimming of failures |
| 2 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | [Bug] ScopedLogger fails attempting to compare symbol to integer |
| 3 | [#464](https://github.com/temporalio/sdk-ruby/issues/464) | 2 | [Bug] Sync primitives can lead to un-replayable workflow history |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | [Feature Request] Update build-gems GH workflow smoke test |
| 5 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Testing Workflows with Signals in Ruby SDK Time-Skipping environment |
| 6 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | [Feature Request] Ensure fibers and workflow instances are properly GC'd |
| 7 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 1 | [Feature Request] Serialization context for codecs and converters |
| 8 | [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 1 | [Feature Request] Contributing Guide |
| 9 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | [Bug] Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (5 open issues)

Although the bug count is small, two are flagged as **critical severity** and three as **high severity** — meaning every single open bug threatens correctness, durability, or platform support.

#### Critical Severity (2 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#464](https://github.com/temporalio/sdk-ruby/issues/464) | 1 | Under high CPU contention, the Ruby SDK can emit un-replayable workflow history because activity starts get split across command flushes — directly breaks durable execution. Touches `worker`, `command-flushing`, `replay-engine`, sync primitives. |
| [#463](https://github.com/temporalio/sdk-ruby/issues/463) | 0 | The SDK crashes when processing the `suggestContinueAsNew` event because it calls `.to_i` on a Symbol from protobuf enum deserialization. Affects every workflow that should be hinted to continue-as-new. |

Both bugs were opened on 2026-06-15 and have not yet been worked. They should be triaged as P0 ahead of any feature work.

#### High Severity (3 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | Common `ActiveModel` classes fail in workflows because Concurrent Ruby's `ConcurrentMap` uses `Thread::Mutex`, which the illegal-call tracer forbids in workflows. Blocks Rails users from natural model usage. |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 0 | `ScopedLogger` compares log levels assuming integers, but `semantic_logger` and similar libraries return symbols, raising `ArgumentError`. Most-commented bug (4 comments). |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 0 | Windows CI tests segfault inside the Rust bridge's `parking_lot` mutex. Has blocked Windows support since at least October 2024 — oldest open bug. |

### Workflow Determinism & Runtime Constraints

Several of the most-impactful issues sit at the boundary between Ruby's runtime model and Temporal's determinism requirements. These need architectural attention together rather than as one-off fixes.

| Issue | Severity | Topic |
|-------|----------|-------|
| [#464](https://github.com/temporalio/sdk-ruby/issues/464) | critical | Sync primitives → non-replayable history |
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | high | ActiveModel/Concurrent Ruby mutex use |
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | medium | Fiber/workflow GC on eviction |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | medium | Deadlock detection — interrupt + stack trace |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | medium | Warn on unawaited failed futures |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | medium | Workflow-local storage primitive |

### Cross-SDK Feature Alignment (7 issues)

A significant fraction of the backlog is the Ruby SDK catching up to features available in older SDKs:

| Issue | 👍 | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | Initial Nexus implementation |
| [#393](https://github.com/temporalio/sdk-ruby/issues/393) | 0 | Standardize Nexus Operation Input Arg deserialization failure handling |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs and converters |
| [#401](https://github.com/temporalio/sdk-ruby/issues/401) | 0 | Conflict-token retry loop for schedule updates |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | High-level Worker Versioning client |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | Override Worker Deployment Version on child workflow invocation |
| [#440](https://github.com/temporalio/sdk-ruby/issues/440) | 0 | Operator commands for Standalone Activities |

These are tractable because the design work already exists in the cross-repo features specification.

### Test & Tooling Issues (5 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | `wait_condition` with signals doesn't work under `WorkflowEnvironment.start_time_skipping` — blocks users from unit-testing common workflow patterns. High severity. |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test that randomness seed is updated correctly across reset points |
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | Build-gems workflow lost macOS Intel smoke test; should add Apple Silicon |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | Remove Go dependency from the Ruby test pipeline |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 0 | Windows CI segfaults (also a critical bug above) |

### Ruby Ecosystem Integration (4 issues)

| Issue | Severity | Topic |
|-------|----------|-------|
| [#412](https://github.com/temporalio/sdk-ruby/issues/412) | medium | Publish RBI types for Sorbet — important for type-safety-conscious teams |
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | high | ActiveModel/Rails compatibility |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | high | Semantic Logger compatibility (symbol-based levels) |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | low | Buildable source gem |

---

## API & Component Hotspots

Open-issue distribution is broad — no single API has more than one open issue, but several **components** cluster together. The hotspots reveal where the Ruby SDK's surface needs the most engineering attention.

| API/Component | Issue Count | Severity Distribution |
|---------------|-------------|----------------------|
| worker | 5 | critical: 1, high: 2, medium: 2 |
| workflow-executor | 3 | medium: 3 |
| workflow-instance | 2 | critical: 1, high: 1 |
| nexus | 2 | medium: 2 |
| error-handling | 2 | medium: 2 |
| ruby-sdk (toolchain/types) | 2 | medium: 2 |
| fiber-scheduler | 1 | medium: 1 |
| scoped-logger | 1 | high: 1 |
| illegal-call-tracer | 1 | high: 1 |
| temporalio_bridge (Rust FFI) | 1 | high: 1 |

The `worker` component appearing in 5 issues — including the only critical bug — is the strongest signal: command flushing, history consistency, and replay logic all need a focused look.

---

## Enhancement Requests (19 issues)

Enhancement requests fall into four natural buckets driven by what users want from the Ruby SDK.

### Cross-SDK Parity

| Issue | 👍 | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | Initial Nexus implementation |
| [#393](https://github.com/temporalio/sdk-ruby/issues/393) | 0 | Nexus input deserialization failure standardization |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs/converters |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | High-level Worker Versioning client |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | Override deployment version when invoking child workflow |
| [#401](https://github.com/temporalio/sdk-ruby/issues/401) | 0 | Conflict-token retry loop for schedule updates |
| [#440](https://github.com/temporalio/sdk-ruby/issues/440) | 0 | Operator commands for Standalone Activities |

### Workflow Authoring & Safety

| Issue | 👍 | Request |
|-------|-----|---------|
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | Workflow-local storage primitive |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | Warn on unawaited failed futures (Java SDK has this) |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | Improve deadlock detection (interrupt + stack trace) |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | Memoization support in `patched()` API |
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | Client-side trimming of failures to avoid server truncation |
| [#413](https://github.com/temporalio/sdk-ruby/issues/413) | 0 | Fail workflow task if payload size is known to exceed limit |

### Ruby Toolchain & Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | Ensure fibers and workflow instances GC after eviction |
| [#412](https://github.com/temporalio/sdk-ruby/issues/412) | 0 | Publish RBI types for Sorbet |
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | Require payload codec from data converter file |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | Buildable source gem |

### Testing & Infrastructure

| Issue | 👍 | Request |
|-------|-----|---------|
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test randomness seed across reset points |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | Remove Go from test pipeline |
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | Update build-gems smoke test to Apple Silicon |
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | Contributing guide |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

10 of 27 open issues (37%) have had no activity in over a year. Most are low-severity feature requests that pre-date or coincided with the SDK's GA.

- **Close candidates (likely obsolete or superseded):**
  - [#192](https://github.com/temporalio/sdk-ruby/issues/192) — Remove Go from test pipeline: verify whether the kitchen-sink workflow has been ported and close if done.
  - [#218](https://github.com/temporalio/sdk-ruby/issues/218) — Buildable source gem: confirm whether current packaging covers this.
  - [#222](https://github.com/temporalio/sdk-ruby/issues/222) — Randomness seed test: small testing task; either do it or close as not worth maintaining.
- **Needs triage (still valid but unprioritized):**
  - [#179](https://github.com/temporalio/sdk-ruby/issues/179) — Workflow-local storage
  - [#185](https://github.com/temporalio/sdk-ruby/issues/185) — Warn on unawaited futures
  - [#191](https://github.com/temporalio/sdk-ruby/issues/191) — Deadlock detection improvements
  - [#209](https://github.com/temporalio/sdk-ruby/issues/209) — Patched API memoization
  - [#270](https://github.com/temporalio/sdk-ruby/issues/270) — Worker Versioning high-level client
- **Keep open (valid, actionable, just unscheduled):**
  - [#172](https://github.com/temporalio/sdk-ruby/issues/172) — Windows CI segfaults (real platform support issue)
  - [#203](https://github.com/temporalio/sdk-ruby/issues/203) — Contributing Guide (cheap to do; would unblock external contributors)

### Duplicate Candidates

The Ruby SDK backlog is small enough that there are no obvious cross-issue duplicates. There are, however, **conceptual overlaps** worth tracking together:

- **Determinism enforcement cluster:** #464 (sync primitives), #355 (ActiveModel mutex), #185 (unawaited futures), #191 (deadlock detection) — all forms of "ensuring Ruby code behaves deterministically in a workflow".
- **Cross-SDK alignment cluster:** #232, #393, #238, #270, #361, #401, #440 — should be tracked as a single roadmap initiative.
- **Ruby toolchain cluster:** #218 (source gem), #306 (Apple Silicon CI), #412 (RBI types) — packaging/distribution work that could be batched.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix [#464](https://github.com/temporalio/sdk-ruby/issues/464) — non-replayable history under contention (critical correctness)
- Fix [#463](https://github.com/temporalio/sdk-ruby/issues/463) — `suggestContinueAsNew` Symbol crash (critical, affects every workflow)
- Fix [#355](https://github.com/temporalio/sdk-ruby/issues/355) — ActiveModel/sync constructs (blocks Rails users)
- Fix [#315](https://github.com/temporalio/sdk-ruby/issues/315) — ScopedLogger symbol comparison (Semantic Logger interop)

### Phase 2: Developer Experience (Short-term)
- Resolve [#172](https://github.com/temporalio/sdk-ruby/issues/172) — Windows CI segfaults (platform support)
- Resolve [#360](https://github.com/temporalio/sdk-ruby/issues/360) — `wait_condition` + signals in time-skipping environment
- Publish [#412](https://github.com/temporalio/sdk-ruby/issues/412) — RBI types for Sorbet users
- Write [#203](https://github.com/temporalio/sdk-ruby/issues/203) — Contributing guide

### Phase 3: Feature Expansion (Medium-term)
- Land [#232](https://github.com/temporalio/sdk-ruby/issues/232) — Nexus implementation (with #393 follow-up)
- Implement [#238](https://github.com/temporalio/sdk-ruby/issues/238) — Serialization context (cross-SDK initiative)
- Implement [#401](https://github.com/temporalio/sdk-ruby/issues/401) — Conflict-token retry loop
- Implement [#319](https://github.com/temporalio/sdk-ruby/issues/319) — Client-side failure trimming (highest-upvoted feature)
- Implement [#413](https://github.com/temporalio/sdk-ruby/issues/413) — Fail-fast on oversize payloads
- Build [#270](https://github.com/temporalio/sdk-ruby/issues/270) — High-level Worker Versioning client

### Phase 4: Maintenance (Ongoing)
- Triage the 10 stale issues; close obsolete items and tag the rest with a priority
- Improve safety nets: [#185](https://github.com/temporalio/sdk-ruby/issues/185) (unawaited future warnings), [#191](https://github.com/temporalio/sdk-ruby/issues/191) (deadlock detection), [#334](https://github.com/temporalio/sdk-ruby/issues/334) (fiber GC)
- Ruby ecosystem polish: [#179](https://github.com/temporalio/sdk-ruby/issues/179) (workflow-local), [#209](https://github.com/temporalio/sdk-ruby/issues/209) (patched memoization), [#333](https://github.com/temporalio/sdk-ruby/issues/333) (codec import path), [#218](https://github.com/temporalio/sdk-ruby/issues/218) (source gem)
- Test infrastructure: [#192](https://github.com/temporalio/sdk-ruby/issues/192) (remove Go), [#222](https://github.com/temporalio/sdk-ruby/issues/222) (randomness reset test), [#306](https://github.com/temporalio/sdk-ruby/issues/306) (Apple Silicon CI)
