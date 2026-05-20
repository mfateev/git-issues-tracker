# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 42
**Total Closed Issues:** 232
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [Ruby](ruby.md) · [Server](server.md)

---

## Executive Summary

The PHP SDK has a healthy resolution rate of 85% (232/274) with a manageable open backlog of 42 issues. The backlog shrank by 16 issues over the last 12 months, reflecting consistent maintenance activity. However, 50% of open issues have had no activity in over a year, and a cluster of testing framework bugs filed in early May 2026 signals that the PHPUnit/time-skipping test environment has significant usability problems. The highest-priority community ask is documentation for the SDK marshaller, which remains the top-upvoted issue despite being over a year old.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 9 | High — four directly block the testing framework |
| Enhancements/Features | 23 | Medium — developer experience and API parity gaps |
| Documentation | 1 | Medium — marshaller docs are the top community request |
| Questions/Discussions | 4 | Low — mostly support and policy questions |
| Stale Issues (>12 months) | 21 | Low — candidates for triage and cleanup |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 14 |
| Total Comments | 70 |
| Issues with Upvotes | 8 (19%) |
| Issues with Comments | 22 (52%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 85% (232/274) |
| Median Time to Close | 46 days (calendar) / 33 days (business) |
| Resolved within 30 days | 48% |
| Resolved within 90 days | 60% |

### Recommended Actions

1. **Immediate:** Address the testing framework bugs (#743, #745, #727, #577) — they block users from writing any meaningful unit tests.
2. **Short-term:** Publish marshaller documentation (#592) — the highest-upvoted issue, covering a fundamental SDK concept with no existing docs.
3. **Medium-term:** Implement Nexus support (#580) and expose OperatorServiceClient (#400) for API parity.
4. **Long-term:** Pursue Fiber suspension support (#702) for a more idiomatic PHP developer experience; add child workflow mocking (#524).
5. **Housekeeping:** Triage the 21 stale issues; close resolved questions and confirm remaining bugs are still reproducible.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The PHP SDK backlog is shrinking steadily. A spike of 4 new issues in May 2026 (all bugs) represents a single user discovering testing framework problems.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 33 | 49 | -16 |

📉 **Backlog Shrinking:** 16 more issues closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

Strong resolution activity, though average time-to-close is high (median 236 calendar days), indicating older stale items are being worked through rather than fresh issues being resolved quickly.

| Metric | Value |
|--------|-------|
| Issues Opened | 18 |
| Issues Closed | 26 |
| Bugs Closed | 7 |
| Enhancements Completed | 14 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The top community requests remain unresolved.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | 1 | Simplify developer experience by replacing yields with Fiber suspension |
| 3 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 4 | [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing arguments for `createWorker` |
| 6 | [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | 4 | [Feature Request] Expose OperatorServiceClient |
| 8 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set the expectCompletion result for each ActivityMock |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #592 | 16 | [Docs] Document SDK marshaller |
| 2 | #103 | 11 | [Question] Sentry Integration for error logging |
| 3 | #577 | 8 | [Bug] Can't run the tests of UpdateMethod |
| 4 | #495 | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | #400 | 6 | [Feature Request] Expose OperatorServiceClient |
| 6 | #702 | 5 | Simplify developer experience by replacing yields with Fiber suspension |
| 7 | #573 | 5 | [Bug] WorkerFactoryInterface seems to be missing arguments for `createWorker` |
| 8 | #529 | 5 | [Feature Request] registerDelayedCallback for tests |
| 9 | #635 | 4 | [Bug] Memory leak workflow worker |
| 10 | #302 | 4 | [Feature Request] Set the expectCompletion result for each ActivityMock |

---

## Issue Analysis by Category

### Bugs (9 issues)

The bug backlog is dominated by testing framework issues — four of the nine open bugs directly affect the PHPUnit time-skipping environment. This concentration blocks users from writing effective unit tests for workflows that use timers, updates, or mocked activities.

**Testing Framework Bugs (High Priority)**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | Can't run tests of UpdateMethod — `UpdateHandle::getResult()` assertion failure; 8 comments indicate sustained user pain over many months |
| [#745](https://github.com/temporalio/sdk-php/issues/745) | 0 | ActivityMocker incompatible with time-skipping — virtual clock skips through start-to-close timeout before mocked response arrives |
| [#743](https://github.com/temporalio/sdk-php/issues/743) | 0 | WorkflowTestCase / TestService: time skipping starts locked by default; timer-only workflows hang in tests |
| [#727](https://github.com/temporalio/sdk-php/issues/727) | 0 | `startTemporalTestServer` incorrectly detects an already-running Temporal server instance |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | Unit test hangs when the code under test has runtime or compile errors |

**Runtime Bugs (Medium Priority)**

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#746](https://github.com/temporalio/sdk-php/issues/746) | 0 | Local Activity crash with nil pointer dereference panic on RoadRunner 2025.1.13 |
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 0 | Memory leak in workflow worker — ongoing leak reported for extended-running workers |
| [#722](https://github.com/temporalio/sdk-php/issues/722) | 0 | ActivityInterface with empty default prefix causes activity type name collision |
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 0 | `withEnableSessionWorker` causes ActivityNotRegistered error |

### Documentation (1 issue)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | SDK marshaller is completely undocumented. Users cannot learn how to serialize data objects, typed lists, or configure Marshal/MarshalArray attributes. The distinction between DataConverter and marshalling is also unclear. Community members have noted that the marshaller bypasses constructors, creating subtle initialization bugs with constructor promotion. |

---

## Enhancement Requests (23 issues)

### Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | Replace yield-based coroutines with PHP Fiber suspension for simpler, more idiomatic PHP 8.1+ code |
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | Improve IDE support — better static analysis, type hints, and autocomplete |
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 0 | Define and publish a backwards compatibility promise for the PHP SDK |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | Eliminate confusing DestructMemorizedInstanceException |

### Testing Support

| Issue | 👍 | Request |
|-------|-----|---------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | Add `registerDelayedCallback` for the test framework (currently only available in Go) |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | Allow setting the `expectCompletion` result per ActivityMock |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Allow mocking child workflows analogously to activities |

### API & Protocol Parity

| Issue | 👍 | Request |
|-------|-----|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | Initial Nexus implementation for PHP |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | Expose OperatorServiceClient for namespace/task queue management |
| [#605](https://github.com/temporalio/sdk-php/issues/605) | 0 | SDK support for activity reset |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | Cloud Operations API Client |
| [#729](https://github.com/temporalio/sdk-php/issues/729) | 0 | Support conflict token retry loop for schedule updates |
| [#720](https://github.com/temporalio/sdk-php/issues/720) | 0 | Forward options for worker heartbeating |

### Serialization & Data Handling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-php/issues/587) | 0 | Serialization context for codecs and converters |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | Encode Failures using EncodedAttributes |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 0 | Improve PHP files generated from proto |
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | Use `mapWorkflowFailureToException` pattern |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | FailureConverter — allow more control over failure types |

### Workflow Features

| Issue | 👍 | Request |
|-------|-----|---------|
| [#601](https://github.com/temporalio/sdk-php/issues/601) | 0 | Expose `WorkflowInboundCallInterceptor` |
| [#567](https://github.com/temporalio/sdk-php/issues/567) | 0 | Expose workflow cancel cause/reason |
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 0 | Provide "workflow local" storage |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

21 open issues (50% of the backlog) have had no activity in over 12 months.

- **Close candidates:** [#103](https://github.com/temporalio/sdk-php/issues/103) (Sentry integration question — 11 comments, likely answered in practice), [#399](https://github.com/temporalio/sdk-php/issues/399) (marked "Not a Bug"), [#532](https://github.com/temporalio/sdk-php/issues/532) (question about async child workflow patterns — unanswered for 2+ years)
- **Needs triage:** [#495](https://github.com/temporalio/sdk-php/issues/495) (backwards compatibility promise — a policy decision pending maintainer input), [#573](https://github.com/temporalio/sdk-php/issues/573) (WorkerFactoryInterface args — may be fixed in a recent release)
- **Keep open:** [#529](https://github.com/temporalio/sdk-php/issues/529) (registerDelayedCallback — valid test framework gap), [#554](https://github.com/temporalio/sdk-php/issues/554) (IDE support — valid enhancement), [#302](https://github.com/temporalio/sdk-php/issues/302) (ActivityMock expectCompletion — valid test usability gap)

### Duplicate Candidates

[#743](https://github.com/temporalio/sdk-php/issues/743) and [#745](https://github.com/temporalio/sdk-php/issues/745) were filed on the same date by the same author and both relate to time-skipping failures in the test framework. They describe distinct failure modes (timer locking vs. ActivityMocker incompatibility) so both should remain open, but cross-linking them would help track the root cause investigation.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix testing framework time-skipping bugs (#743, #745, #727) — blocking test adoption
- Fix UpdateMethod test support (#577) — 8 comments indicate persistent user pain
- Fix local activity nil pointer dereference (#746)

### Phase 2: Developer Experience (Short-term)
- Publish SDK marshaller documentation (#592) — highest-upvoted issue, fundamental gap
- Resolve memory leak in workflow worker (#635)
- Fix ActivityInterface name collision bug (#722)

### Phase 3: Feature Expansion (Medium-term)
- Nexus implementation (#580) — cross-SDK feature parity
- Expose OperatorServiceClient (#400)
- Add Fiber suspension support (#702) — significant developer experience improvement
- registerDelayedCallback for test framework (#529)

### Phase 4: Maintenance (Ongoing)
- Triage and close stale issues (21 candidates)
- Define and publish backwards compatibility promise (#495)
- Improve IDE type hint and static analysis support (#554)
