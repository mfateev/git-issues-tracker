# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 49
**Total Closed Issues:** 211
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [Ruby](ruby.md)

---

## Executive Summary

The PHP SDK maintains a healthy 81% resolution rate with 49 open issues and 211 closed. The issue landscape is dominated by enhancement requests (31 issues, 63%), with a relatively small number of bugs (9 issues). The SDK is built on RoadRunner with a Go-based worker runtime, which introduces unique integration challenges. Key concerns center around documentation gaps (particularly for the marshaller), testing infrastructure limitations, and recent dependency conflicts blocking installations.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements/Features | 31 | Medium - Many are quality-of-life improvements |
| Bugs | 9 | High - Includes installation blockers and memory leak |
| Testing Issues | 8 | Medium - Test framework gaps blocking adoption |
| Questions | 5 | Low - Support requests, some long-standing |
| Documentation | 1 | High - Critical marshaller docs missing |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 12 |
| Total Comments | 69 |
| Issues with Upvotes | 7 (14%) |
| Issues with Comments | 23 (47%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (211/260) |
| Median Time to Close | 27 days (calendar) / 19 days (business) |
| Resolved within 30 days | 51% |
| Resolved within 90 days | 63% |

### Recommended Actions

1. **Immediate:** Fix recent dependency conflicts (#692, #689) blocking installations
2. **Short-term:** Document the SDK marshaller (#592) - highest user demand
3. **Medium-term:** Address memory leak in workflow worker (#635) and improve testing framework
4. **Long-term:** Implement Nexus support (#580) and enhance IDE support (#554)
5. **Housekeeping:** Triage 18 stale issues (37% of open issues), close resolved questions

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The PHP SDK backlog is experiencing slight growth, with 7 more issues opened than closed over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 53 | 46 | +7 |

The backlog growth is modest. Recent months (September-December 2025) showed positive trends with more closures than openings, indicating improved maintainer attention.

### Last 6 Months: Detailed Analysis

The last 6 months show a healthier trend with the backlog actually shrinking by 8 issues.

| Metric | Value |
|--------|-------|
| Issues Opened | 15 |
| Issues Closed | 23 |
| Bugs Closed | 8 |
| Enhancements Completed | 9 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The most popular open issue (#592 with 5 upvotes) remains unresolved, indicating user demand is accumulating for documentation improvements.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 3 | [#640](https://github.com/temporalio/sdk-php/issues/640) | 1 | 1 | Enable `Discussions` |
| 4 | [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | 3 | [Bug] WorkerFactoryInterface missing arguments |
| 6 | [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set expectCompletion result for each Activity |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 5 | [Bug] WorkerFactoryInterface missing arguments |
| 6 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 7 | [#623](https://github.com/temporalio/sdk-php/issues/623) | 4 | [Feature Request] In test env - can't unserialize object structure |
| 8 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 4 | [Feature Request] Set expectCompletion for Activity calls in loop |
| 9 | [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | [Bug] withEnableSessionWorker causes ActivityNotRegisteredError |
| 10 | [#640](https://github.com/temporalio/sdk-php/issues/640) | 3 | Enable `Discussions` |

---

## Issue Analysis by Category

### Critical Documentation Gap (1 issue)

The highest-priority issue by user demand is missing documentation for the marshaller system.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | **Document SDK marshaller** - Documentation is completely missing. Users cannot learn how to serialize data objects, typed lists, or use attributes like `Marshal`, `MarshalArray`. Comments reveal widespread confusion between DataConverters and marshalling, plus non-obvious behaviors like constructor promotion not working (marshaller creates objects past the constructor). |

**Impact:** This documentation gap is actively blocking new users from understanding data serialization patterns, a fundamental aspect of using the SDK. Users are forced to reverse-engineer behavior from samples or discover issues at runtime.

### Bugs (9 open issues)

#### Critical - Installation Blockers (Recent)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#692](https://github.com/temporalio/sdk-php/issues/692) | 0 | **Composer dependency conflicts** - CI pipelines fail to install lowest dependency versions due to react/promise v2 conflicts with Composer 2.9+. Filed January 2026. |
| [#689](https://github.com/temporalio/sdk-php/issues/689) | 0 | **Extension check breaks `--ignore-platform-reqs`** - SDK does runtime grpc check instead of declaring in composer.json, breaking Laravel package discovery when grpc not installed. |

#### High Priority - Runtime Issues

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 0 | **Memory leak in workflow worker** - Re-running workflows via UI causes memory accumulation (up to 1GB reported), potentially creating zombie processes. Video proof provided. Maintainers requested verification on latest SDK. |
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | **Can't test UpdateMethod** - Tests fail with assertion error. Related to test server support for updates. Multiple users affected. Dev-server workaround available but lacks timeskipping. |

#### Medium Priority - Testing & Sessions

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | **Unit test hangs on exceptions** - When workflow under test throws exception, test hangs indefinitely instead of failing. Masks actual errors, makes debugging difficult. |
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 0 | **Session worker breaks activity registration** - Using `withEnableSessionWorker(true)` causes ActivityNotRegisteredError. Configuration option exposed before full implementation. 4+ years old, needs verification. |

#### Lower Priority - Edge Cases

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#636](https://github.com/temporalio/sdk-php/issues/636) | 0 | Suppressed exception in workflow child |
| [#624](https://github.com/temporalio/sdk-php/issues/624) | 0 | Facade methods throw wrong exception type |
| [#595](https://github.com/temporalio/sdk-php/issues/595) | 0 | Incorrect generic extends of RuleFactoryInterface |

### Testing Framework Issues (8 issues labeled "tests")

Testing is a significant pain point for PHP SDK users, with multiple issues around mocking, time skipping, and test server compatibility.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | **registerDelayedCallback for tests** - Request parity with Go SDK's testing capabilities for timer-based workflows. |
| [#623](https://github.com/temporalio/sdk-php/issues/623) | 0 | **Can't unserialize objects in test env** - ActivityMocker missing custom converter support. PR #681 may have fixed this - awaiting verification. |
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | **UpdateMethod testing broken** - Test server may not fully support updates. |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | **Tests hang on exceptions** - Runtime errors cause indefinite hangs instead of test failures. |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Allow mocking child workflows like activities. |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | Set different `expectCompletion` results for activities called in a loop. |

### Long-Standing Questions (5 issues)

| Issue | Comments | Description |
|-------|----------|-------------|
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | **Sentry Integration** - 4+ years old. Users want global error handler for APM integration. Workarounds exist via interceptors but are "really-really hacky". Functionality was added then removed from temporal-bridge. |
| [#532](https://github.com/temporalio/sdk-php/issues/532) | 0 | Asynchronous child workflow execution patterns. |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 3 | await doesn't interrupt on activity with error (marked "Not a Bug"). |

---

## Enhancement Requests (31 issues)

### SDK Architecture & Stability

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 0 | **Backwards compatibility promise** - Define BC policy, add Roave/BackwardCompatibilityCheck CI. Detailed proposal from community member offering to implement. Discussion highlights BC breaks between minor versions (2.9.0, 2.10.0). |
| [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | **WorkerFactoryInterface missing arguments** - Interface doesn't match implementation, blocking typed usage of ExceptionInterceptor and PipelineProvider. Milestone: 3.0.0. |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | Eliminate DestructMemorizedInstanceException. |

### New Temporal Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | **Nexus implementation** - Cross-namespace workflow orchestration support. High strategic importance. Community interest expressed. |
| [#642](https://github.com/temporalio/sdk-php/issues/642) | 0 | Add first execution run ID to workflow handles. |
| [#670](https://github.com/temporalio/sdk-php/issues/670) | 0 | Symfony 8.0 support. |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | **Better IDE support** - Autocomplete for activities, signals, queries, updates. Partially completed checklist in issue. Some items already done. |
| [#640](https://github.com/temporalio/sdk-php/issues/640) | 1 | **Enable Discussions** - Community requests GitHub Discussions for support questions. |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | Cloud Operations API Client. |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 0 | Expose OperatorServiceClient. |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 0 | Divide Workflow stub objects and proxies. |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | **registerDelayedCallback** - Parity with Go SDK testing capabilities. |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | Set expectCompletion result for each Activity invocation. |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Allow mocking child workflows like activities. |

### Error Handling & Observability

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | Use `mapWorkflowFailureToException` pattern. |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | FailureConverter allow more control. |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | Encode Failures using EncodedAttributes. |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

18 issues (37% of open issues) have had no activity in over 12 months.

**Close candidates (likely resolved or no longer relevant):**
- [#103](https://github.com/temporalio/sdk-php/issues/103) - Sentry integration question from 2021. Workarounds documented, no official support planned. Consider closing with summary of available patterns.
- [#123](https://github.com/temporalio/sdk-php/issues/123) - Session worker bug from 2021. Feature was "ahead of implementation". Maintainer recently asked for re-verification.
- [#244](https://github.com/temporalio/sdk-php/issues/244) - 2022 feature request with no traction.
- [#285](https://github.com/temporalio/sdk-php/issues/285) - temporal.download server usage (infrastructure).
- [#318](https://github.com/temporalio/sdk-php/issues/318) - Improve proto-generated PHP files.

**Needs triage (maintainer decision required):**
- [#495](https://github.com/temporalio/sdk-php/issues/495) - BC promise discussion. Valuable proposal, but stalled. Decide on direction.
- [#507](https://github.com/temporalio/sdk-php/issues/507) - Eliminate DestructMemorizedInstanceException.
- [#476](https://github.com/temporalio/sdk-php/issues/476) - Cloud Operations API Client.
- [#400](https://github.com/temporalio/sdk-php/issues/400) - Expose OperatorServiceClient.
- [#399](https://github.com/temporalio/sdk-php/issues/399) - await behavior with activity errors (marked "Not a Bug").

**Keep open (valid feature requests with user interest):**
- [#529](https://github.com/temporalio/sdk-php/issues/529) - registerDelayedCallback for tests (2 upvotes).
- [#302](https://github.com/temporalio/sdk-php/issues/302) - expectCompletion for loops (1 upvote).
- [#554](https://github.com/temporalio/sdk-php/issues/554) - IDE support, partially complete checklist.

### Duplicate Candidates

- [#577](https://github.com/temporalio/sdk-php/issues/577) and [#428](https://github.com/temporalio/sdk-php/issues/428) both relate to testing issues with workflow exceptions/updates - may have shared root causes in test infrastructure.
- [#692](https://github.com/temporalio/sdk-php/issues/692) and [#689](https://github.com/temporalio/sdk-php/issues/689) are both recent dependency/installation issues - should coordinate fixes.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix installation blockers:**
  - [#692](https://github.com/temporalio/sdk-php/issues/692) - Composer dependency conflicts with react/promise v2
  - [#689](https://github.com/temporalio/sdk-php/issues/689) - Add ext-grpc to composer.json, fix Laravel discovery
- **Investigate memory leak:**
  - [#635](https://github.com/temporalio/sdk-php/issues/635) - Workflow worker memory leak on re-runs

### Phase 2: Developer Experience (Short-term)

- **Documentation:**
  - [#592](https://github.com/temporalio/sdk-php/issues/592) - Document SDK marshaller (highest user demand)
- **Testing improvements:**
  - [#577](https://github.com/temporalio/sdk-php/issues/577) - Fix UpdateMethod testing
  - [#623](https://github.com/temporalio/sdk-php/issues/623) - Verify fix for object serialization in tests (PR #681)
- **Community:**
  - [#640](https://github.com/temporalio/sdk-php/issues/640) - Consider enabling GitHub Discussions

### Phase 3: Feature Expansion (Medium-term)

- **IDE Support:**
  - [#554](https://github.com/temporalio/sdk-php/issues/554) - Complete autocomplete features for signals/queries/updates
- **Testing enhancements:**
  - [#529](https://github.com/temporalio/sdk-php/issues/529) - registerDelayedCallback
  - [#302](https://github.com/temporalio/sdk-php/issues/302) - Per-activity expectCompletion
- **SDK architecture:**
  - [#495](https://github.com/temporalio/sdk-php/issues/495) - Define BC promise
  - [#573](https://github.com/temporalio/sdk-php/issues/573) - Fix WorkerFactoryInterface (milestone: 3.0.0)

### Phase 4: Strategic Features (Long-term)

- **Nexus support:**
  - [#580](https://github.com/temporalio/sdk-php/issues/580) - Initial Nexus implementation
- **Framework support:**
  - [#670](https://github.com/temporalio/sdk-php/issues/670) - Symfony 8.0 support
- **Cloud integration:**
  - [#476](https://github.com/temporalio/sdk-php/issues/476) - Cloud Operations API Client

### Phase 5: Maintenance (Ongoing)

- Triage and close 18 stale issues
- Address long-standing questions (#103 Sentry, #123 sessions) - verify on current version or document workarounds
- Regular dependency updates
- Continue test server compatibility improvements
