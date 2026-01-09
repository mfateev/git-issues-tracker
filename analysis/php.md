# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 49
**Total Closed Issues:** 211
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-sdk-php/issues.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [Ruby](ruby.md)

---

## Executive Summary

The PHP SDK has a mature codebase with a healthy 81% resolution rate (211/260 issues closed). The open issue backlog of 49 issues is primarily composed of enhancement requests (31 issues, 63%) with relatively few bugs (9 issues, 18%). The SDK is built on RoadRunner with a Go-based worker runtime, which introduces unique integration challenges. Key concerns center around documentation gaps (particularly for the marshaller), testing infrastructure limitations, and memory leak issues in high-throughput production environments.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Documentation | 1 | High - Missing marshaller docs blocking users |
| Bugs | 9 | Medium - Mix of testing, memory, and integration issues |
| Testing Infrastructure | 8 | Medium - Test server and mocking limitations |
| Enhancements | 31 | Medium - Large backlog of feature requests |
| Stale Issues | 18 | Low - 37% of open issues need triage |

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

1. **Immediate:** Document the SDK marshaller system (attributes, types, serialization patterns) - this is blocking new user adoption
2. **Short-term:** Fix testing infrastructure issues preventing UpdateMethod testing and activity mocking in loops
3. **Medium-term:** Address memory leak issues in workflow workers under high restart/reload conditions
4. **Long-term:** Implement Nexus support, improve IDE tooling, and add worker versioning API
5. **Housekeeping:** Triage 18 stale issues (37% of backlog) - many appear to need verification on current versions

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog has grown slightly over the past year, with 7 more issues opened than closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 53 | 46 | +7 |

The backlog growth is modest and largely driven by feature requests. The team has been responsive to bugs, with most bug closures happening within 90 days.

### Last 6 Months: Detailed Analysis

The last 6 months show improved velocity with net negative change (more closed than opened).

| Metric | Value |
|--------|-------|
| Issues Opened | 15 |
| Issues Closed | 23 |
| Bugs Closed | 8 |
| Enhancements Completed | 9 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The SDK's popular requests remain in the backlog, indicating user demand is accumulating for documentation and testing improvements.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](../repos/temporalio-sdk-php/issues.md#592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#529](../repos/temporalio-sdk-php/issues.md#529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 3 | [#640](../repos/temporalio-sdk-php/issues.md#640) | 1 | 1 | Enable `Discussions` |
| 4 | [#580](../repos/temporalio-sdk-php/issues.md#580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](../repos/temporalio-sdk-php/issues.md#573) | 1 | 3 | [Bug] WorkerFactoryInterface missing arguments |
| 6 | [#554](../repos/temporalio-sdk-php/issues.md#554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#302](../repos/temporalio-sdk-php/issues.md#302) | 1 | 2 | [Feature Request] Set expectCompletion result for each Activity call in loop |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](../repos/temporalio-sdk-php/issues.md#592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](../repos/temporalio-sdk-php/issues.md#103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](../repos/temporalio-sdk-php/issues.md#577) | 7 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](../repos/temporalio-sdk-php/issues.md#495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#573](../repos/temporalio-sdk-php/issues.md#573) | 5 | [Bug] WorkerFactoryInterface missing arguments |
| 6 | [#529](../repos/temporalio-sdk-php/issues.md#529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 7 | [#623](../repos/temporalio-sdk-php/issues.md#623) | 4 | [Feature Request] In test env - can't unserialize object structure |
| 8 | [#302](../repos/temporalio-sdk-php/issues.md#302) | 4 | [Feature Request] Set expectCompletion for Activity calls in loop |
| 9 | [#123](../repos/temporalio-sdk-php/issues.md#123) | 4 | [Bug] withEnableSessionWorker causes ActivityNotRegisteredError |
| 10 | [#635](../repos/temporalio-sdk-php/issues.md#635) | 3 | [Bug] Memory leak workflow worker |

---

## Issue Analysis by Category

### Critical Documentation Gap (1 issue)

The highest-priority issue in the PHP SDK is missing documentation for the marshaller system.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#592](../repos/temporalio-sdk-php/issues.md#592) | 5 | Marshaller documentation is completely missing. Users have no way to learn how to serialize data objects, typed lists, or use attributes like `Marshal`, `MarshalArray`, and types. Multiple users in comments note confusion between `DataConverter` and marshalling. The thread also reveals non-obvious behavior: the marshaller creates objects past the constructor, breaking constructor property promotion. |

**Impact:** This documentation gap is actively blocking new users from understanding data serialization patterns, a fundamental aspect of using the SDK.

### Bugs (9 open issues)

#### High Priority Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#635](../repos/temporalio-sdk-php/issues.md#635) | 0 | Memory leak in workflow worker when workflows are re-run via UI many times. Can create 1GB+ memory consumption. Related to historical issues with "undefined request" errors. Maintainers requested verification on latest SDK version. |
| [#577](../repos/temporalio-sdk-php/issues.md#577) | 0 | Cannot test UpdateMethod - tests fail with assertion error. Related to test server support for updates. The dev-server works but lacks timeskipping. |
| [#428](../repos/temporalio-sdk-php/issues.md#428) | 0 | Unit tests hang when workflow under test has runtime/compile exception. No error details are surfaced, making debugging difficult. |
| [#123](../repos/temporalio-sdk-php/issues.md#123) | 0 | Session worker option (`withEnableSessionWorker`) causes `ActivityNotRegisteredError`. Feature was exposed before implementation was complete. Issue is 4+ years old and needs verification. |

#### Medium Priority Bugs

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#692](../repos/temporalio-sdk-php/issues.md#692) | 0 | Composer requirements conflict with react/promise v2 when using lowest dependencies |
| [#689](../repos/temporalio-sdk-php/issues.md#689) | 0 | SDK performs its own grpc extension check, breaking `--ignore-platform-reqs` in Composer. Conflicts with Laravel's package discovery. |
| [#636](../repos/temporalio-sdk-php/issues.md#636) | 0 | Suppressed exception in child workflow |
| [#624](../repos/temporalio-sdk-php/issues.md#624) | 0 | Facade methods throw wrong exception type |
| [#595](../repos/temporalio-sdk-php/issues.md#595) | 0 | Incorrect generic extends of RuleFactoryInterface |

### Testing Infrastructure Issues (8 issues)

The SDK has significant gaps in testing capabilities compared to other SDKs.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#577](../repos/temporalio-sdk-php/issues.md#577) | 0 | UpdateMethod tests fail - test server may not fully support updates |
| [#529](../repos/temporalio-sdk-php/issues.md#529) | 2 | Missing `registerDelayedCallback` for tests (available in other SDKs) |
| [#623](../repos/temporalio-sdk-php/issues.md#623) | 0 | ActivityMocker doesn't properly serialize/unserialize DTOs in test environment |
| [#302](../repos/temporalio-sdk-php/issues.md#302) | 1 | Cannot set different `expectCompletion` results for activities called in a loop |
| [#524](../repos/temporalio-sdk-php/issues.md#524) | 0 | Cannot mock child workflows like activities |
| [#428](../repos/temporalio-sdk-php/issues.md#428) | 0 | Unit tests hang on runtime exceptions instead of failing properly |
| [#502](../repos/temporalio-sdk-php/issues.md#502) | 0 | Fix test case (maintenance) |
| [#441](../repos/temporalio-sdk-php/issues.md#441) | 0 | Can't run tests according to documentation |

### Observability & Error Handling (3 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#103](../repos/temporalio-sdk-php/issues.md#103) | 0 | Sentry integration for error logging - no global error handler for workflow/activity errors. Interceptor approach was suggested but functionality was later removed from temporal-bridge. Issue is 4+ years old. |
| [#226](../repos/temporalio-sdk-php/issues.md#226) | 0 | OTEL tracing support needed |
| [#533](../repos/temporalio-sdk-php/issues.md#533) | 0 | Workflow logger feature request |

---

## Enhancement Requests (31 issues)

### API & SDK Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#580](../repos/temporalio-sdk-php/issues.md#580) | 1 | Nexus implementation for PHP (cross-namespace workflow communication) |
| [#586](../repos/temporalio-sdk-php/issues.md#586) | 0 | Support New Worker Versioning API |
| [#554](../repos/temporalio-sdk-php/issues.md#554) | 1 | Better IDE support (autocomplete for signals, queries, updates) |
| [#573](../repos/temporalio-sdk-php/issues.md#573) | 1 | WorkerFactoryInterface missing method arguments (scheduled for 3.0.0) |
| [#495](../repos/temporalio-sdk-php/issues.md#495) | 0 | Define backwards compatibility promise |
| [#476](../repos/temporalio-sdk-php/issues.md#476) | 0 | Cloud Operations API Client |
| [#400](../repos/temporalio-sdk-php/issues.md#400) | 0 | Expose OperatorServiceClient |

### Framework Integration

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#670](../repos/temporalio-sdk-php/issues.md#670) | 0 | Symfony 8.0 support |
| [#640](../repos/temporalio-sdk-php/issues.md#640) | 1 | Enable GitHub Discussions (maintainer responded with Slack/Forum alternatives) |

### Workflow Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#557](../repos/temporalio-sdk-php/issues.md#557) | 0 | Add memo update feature |
| [#545](../repos/temporalio-sdk-php/issues.md#545) | 0 | Provide "workflow local" storage |
| [#517](../repos/temporalio-sdk-php/issues.md#517) | 0 | Support user metadata |
| [#516](../repos/temporalio-sdk-php/issues.md#516) | 0 | Typed Search Attributes |
| [#497](../repos/temporalio-sdk-php/issues.md#497) | 0 | Dynamic Update handler |
| [#508](../repos/temporalio-sdk-php/issues.md#508) | 0 | Fallback Update/Signal/Query listeners |
| [#503](../repos/temporalio-sdk-php/issues.md#503) | 0 | UpdateWithStart SDK API |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#587](../repos/temporalio-sdk-php/issues.md#587) | 0 | Serialization context for codecs and converters |
| [#574](../repos/temporalio-sdk-php/issues.md#574) | 0 | Support "RawValue" non-converted values |
| [#454](../repos/temporalio-sdk-php/issues.md#454) | 0 | Encode Failures using EncodedAttributes |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

18 issues (37% of open issues) have had no activity for over 12 months. These need triage:

**Close candidates (likely resolved or no longer relevant):**
- [#123](../repos/temporalio-sdk-php/issues.md#123) - Session worker bug from 2021, SDK architecture has changed significantly. Needs verification on current version.
- [#103](../repos/temporalio-sdk-php/issues.md#103) - Sentry integration question from 2021. Workarounds exist via interceptors and bridges.
- [#244](../repos/temporalio-sdk-php/issues.md#244) - FailureConverter enhancement from 2022, may have been addressed
- [#285](../repos/temporalio-sdk-php/issues.md#285) - temporal.download server usage (infrastructure change)
- [#318](../repos/temporalio-sdk-php/issues.md#318) - Improve proto-generated PHP files

**Needs triage (maintainer decision required):**
- [#495](../repos/temporalio-sdk-php/issues.md#495) - BC promise discussion - valuable but stalled
- [#507](../repos/temporalio-sdk-php/issues.md#507) - Eliminate DestructMemorizedInstanceException
- [#476](../repos/temporalio-sdk-php/issues.md#476) - Cloud Operations API Client
- [#419](../repos/temporalio-sdk-php/issues.md#419) - Divide Workflow stub and proxy objects
- [#400](../repos/temporalio-sdk-php/issues.md#400) - Expose OperatorServiceClient
- [#399](../repos/temporalio-sdk-php/issues.md#399) - await behavior with activity errors (marked "Not a Bug")

**Keep open (valid feature requests):**
- [#529](../repos/temporalio-sdk-php/issues.md#529) - registerDelayedCallback for tests (2 upvotes)
- [#302](../repos/temporalio-sdk-php/issues.md#302) - expectCompletion for loops (assigned to maintainers)
- [#269](../repos/temporalio-sdk-php/issues.md#269) - mapWorkflowFailureToException usage

### Duplicate Candidates

No obvious duplicates identified. Issues are generally well-scoped and distinct.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Document the marshaller system** ([#592](../repos/temporalio-sdk-php/issues.md#592)) - Highest user demand, blocking adoption
- **Fix Composer dependency conflicts** ([#692](../repos/temporalio-sdk-php/issues.md#692), [#689](../repos/temporalio-sdk-php/issues.md#689)) - Blocking installation flows
- **Add ext-grpc to composer.json requirements** to fix `--ignore-platform-reqs` behavior

### Phase 2: Developer Experience (Short-term)

- **Fix UpdateMethod testing** ([#577](../repos/temporalio-sdk-php/issues.md#577)) - Use dev-server or wait for test-server update support
- **Improve activity mocking for loops** ([#302](../repos/temporalio-sdk-php/issues.md#302)) - Already assigned to maintainers
- **Add registerDelayedCallback** ([#529](../repos/temporalio-sdk-php/issues.md#529)) - Parity with other SDKs
- **Fix ActivityMocker serialization** ([#623](../repos/temporalio-sdk-php/issues.md#623)) - PR in progress

### Phase 3: Feature Expansion (Medium-term)

- **Nexus implementation** ([#580](../repos/temporalio-sdk-php/issues.md#580)) - Cross-namespace workflows
- **Worker versioning API** ([#586](../repos/temporalio-sdk-php/issues.md#586)) - Production deployment improvements
- **Symfony 8.0 support** ([#670](../repos/temporalio-sdk-php/issues.md#670)) - Framework compatibility
- **IDE improvements** ([#554](../repos/temporalio-sdk-php/issues.md#554)) - Autocomplete for signals/queries/updates
- **Backwards compatibility promise** ([#495](../repos/temporalio-sdk-php/issues.md#495)) - SDK stability guarantees

### Phase 4: Maintenance (Ongoing)

- **Memory leak investigation** ([#635](../repos/temporalio-sdk-php/issues.md#635)) - Verify on latest SDK, add supervisor configuration guidance
- **Session worker verification** ([#123](../repos/temporalio-sdk-php/issues.md#123)) - Test on current version, close or fix
- **Stale issue triage** - Review 18 stale issues, close resolved ones
- **Error handling improvements** ([#103](../repos/temporalio-sdk-php/issues.md#103)) - Document interceptor patterns for Sentry/APM integration
