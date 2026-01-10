# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 49
**Total Closed Issues:** 211
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [Ruby](ruby.md)

---

## Executive Summary

The PHP SDK maintains a healthy 81% resolution rate (211/260 total issues) with 49 open issues. The backlog shows mixed trends: a slight increase (+7 net) over the last 12 months, but encouraging improvement in the last 6 months (-8 net, with 23 closed vs 15 opened). The primary concerns are testing infrastructure gaps, documentation deficiencies (particularly around serialization/marshalling), and ongoing framework compatibility needs for Symfony and Laravel.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 9 | Medium - Two recent Composer/platform issues, memory leak investigation, testing gaps |
| Enhancements | 31 | Medium - Testing infrastructure, framework support, SDK API improvements |
| Testing Infrastructure | 8 | High - Multiple issues blocking effective unit testing of workflows |
| Documentation | 1 | High - Most upvoted issue (#592) requests marshaller documentation |
| Stale Issues | 18 | Medium - 37% of open issues have no activity >12 months |

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

1. **Immediate:** Fix Composer/platform compatibility issues ([#692](https://github.com/temporalio/sdk-php/issues/692), [#689](https://github.com/temporalio/sdk-php/issues/689)) blocking installation
2. **Short-term:** Address Update method testing bug ([#577](https://github.com/temporalio/sdk-php/issues/577)) and investigate memory leak ([#635](https://github.com/temporalio/sdk-php/issues/635))
3. **Medium-term:** Create comprehensive marshaller documentation ([#592](https://github.com/temporalio/sdk-php/issues/592)) - most upvoted issue
4. **Long-term:** Implement Nexus support ([#580](https://github.com/temporalio/sdk-php/issues/580)) and testing infrastructure improvements
5. **Housekeeping:** Triage 18 stale issues (37% of backlog); close or update issues with no activity >1 year

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The SDK shows a slightly growing backlog over the year, but with clear improvement in the second half of the period. The last 6 months show consistent net decreases.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 53 | 46 | +7 |

📈 **Backlog Growing:** 7 more issues opened than closed in the last 12 months. However, recent months show strong improvement: September (-4), October (-3), November (-1), December (-3).

### Last 6 Months: Detailed Analysis

The last 6 months demonstrate healthy resolution activity with 8 more issues closed than opened, indicating the team is making progress on the backlog.

| Metric | Value |
|--------|-------|
| Issues Opened | 15 |
| Issues Closed | 23 |
| Net Change | -8 |
| Bugs Closed | 8 |
| Enhancements Completed | 9 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#625](https://github.com/temporalio/sdk-php/issues/625) | 1 | Incorrect timer cancellation when workflow worker is down |
| [#579](https://github.com/temporalio/sdk-php/issues/579) | 1 | Unexpected behaviour with lax DateInterval string parsing |

No issues with 3+ upvotes were closed in the last 6 months. The SDK's relatively small user community compared to more established SDKs results in generally lower upvote counts.

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
| 7 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set expectCompletion result for Activity calls in loop |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 6 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 5 | [Bug] WorkerFactoryInterface missing arguments |
| 7 | [#623](https://github.com/temporalio/sdk-php/issues/623) | 4 | [Feature Request] Can't unserialize object structure in test env |
| 8 | [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | [Bug] withEnableSessionWorker causes ActivityNotRegisteredError |
| 9 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 4 | [Feature Request] Set expectCompletion result for Activity calls |
| 10 | [#635](https://github.com/temporalio/sdk-php/issues/635) | 3 | [Bug] Memory leak workflow worker |

---

## Issue Analysis by Category

### Bugs (9 issues)

The PHP SDK has 9 open bugs, ranging from recent Composer compatibility issues to long-standing problems with session workers and testing infrastructure.

#### High Priority - Recent Installation/Compatibility Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#692](https://github.com/temporalio/sdk-php/issues/692) | 0 | **Composer conflicts with react/promise v2.** Minimal composer requirements create version conflicts for users on React Promise v2. Blocks installation for some users. |
| [#689](https://github.com/temporalio/sdk-php/issues/689) | 1 | **Extension check breaking --ignore-platform-reqs.** The SDK performs its own PHP extension checks at runtime, bypassing Composer's `--ignore-platform-reqs` flag. This breaks CI/CD pipelines where extensions are loaded differently. |

#### Medium Priority - Runtime Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 3 | **Memory leak in workflow worker.** Repeated workflow re-runs via UI cause memory to grow unboundedly, reaching 1GB+. May create zombie processes. Maintainer suggested testing with reduced sticky cache size. |
| [#636](https://github.com/temporalio/sdk-php/issues/636) | 0 | **Suppressed exception in workflow child.** Exceptions in child workflows are silently suppressed. |
| [#624](https://github.com/temporalio/sdk-php/issues/624) | 0 | **Facade methods throw wrong exception.** Exception types don't match expected interfaces. |
| [#595](https://github.com/temporalio/sdk-php/issues/595) | 0 | **Incorrect generic extends of RuleFactoryInterface.** Static analyzer compatibility issue with generics. |

#### Testing Infrastructure Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | **Can't run UpdateMethod tests.** Update method tests fail with assertion errors. Related to PR #526 and happens when workflow neither accepts nor rejects update in time. High engagement (7 comments). |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 3 | **Unit test hangs with runtime/compile exceptions.** Test execution hangs indefinitely when the unit under test has runtime or compile-time exceptions. |

#### Long-Standing Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | **Session worker causes ActivityNotRegisteredError.** Open since September 2021. Using `withEnableSessionWorker(true)` breaks activity registration. 4+ years old. |

---

## Enhancement Requests (31 issues)

### Testing Infrastructure (8 issues)

Testing is a significant pain point for PHP SDK users, with 8 issues related to test infrastructure and test server capabilities.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | **registerDelayedCallback for tests** - Feature available in Go SDK, requested for PHP to write more efficient time-based tests |
| [#623](https://github.com/temporalio/sdk-php/issues/623) | 0 | **Object unserialization in test environment** - Can't unserialize object structures during testing |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | **Mock child workflows like activities** - Allow mocking child workflows similar to activity mocking |
| [#654](https://github.com/temporalio/sdk-php/issues/654) | 0 | **upsertTypedSearchAttributes in test server** - Search attributes functionality broken in test server |
| [#502](https://github.com/temporalio/sdk-php/issues/502) | 0 | **Fix test case** - Internal test fix needed |
| [#501](https://github.com/temporalio/sdk-php/issues/501) | 0 | **Repair or disable Windows CI tests** - Windows test infrastructure issues |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 0 | **await doesn't interrupt on activity error** - Test behavior inconsistency |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | **Set expectCompletion per Activity call in loop** - Better control over mocked activity results in loops |
| [#285](https://github.com/temporalio/sdk-php/issues/285) | 0 | **Use temporal.download for test server** - Download temporalite/test-server from official sources |

### SDK Core Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | **Initial Nexus implementation** - Cross-namespace/cluster communication support |
| [#644](https://github.com/temporalio/sdk-php/issues/644) | 0 | **Plugin support** - Extensibility mechanism for SDK |
| [#642](https://github.com/temporalio/sdk-php/issues/642) | 0 | **Add first execution run ID to workflow info** |
| [#567](https://github.com/temporalio/sdk-php/issues/567) | 0 | **Expose workflow cancel cause/reason** |
| [#558](https://github.com/temporalio/sdk-php/issues/558) | 0 | **Add Patched() and DeprecatePatch() APIs** - Workflow versioning helpers |
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 0 | **Provide "workflow local"** - Workflow-scoped variable storage |

### Observability & Error Handling

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 0 | **Sentry integration for error logging** - Global error handler for Workflow/Activity errors. Open since 2021, 11 comments. No official SDK support yet; requires custom transport decorator. |
| [#648](https://github.com/temporalio/sdk-php/issues/648) | 0 | **Reclassify benign application errors in OpenTelemetry** |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | **FailureConverter with more context** - Allow richer exception context |
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | **Use mapWorkflowFailureToException for all workflow methods** |

### Framework Support (Symfony/Laravel)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#670](https://github.com/temporalio/sdk-php/issues/670) | 0 | **Symfony 8.0 support** - Ensure compatibility with upcoming Symfony version |

### API & Service Clients

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | **Cloud Operations API Client** - PHP client for Temporal Cloud management |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 0 | **Expose OperatorServiceClient** - Access to operator service APIs |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-php/issues/587) | 0 | **Serialization context for codecs and converters** - Cross-SDK feature for contextual serialization |
| [#574](https://github.com/temporalio/sdk-php/issues/574) | 0 | **Support "RawValue" non-converted values** |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | **Encode failures using EncodedAttributes** |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | **Better IDE support** - Improve autocomplete and type inference |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 0 | **Divide Workflow stub and proxy objects** - Cleaner API separation |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | **Eliminate DestructMemorizedInstanceException** - Remove confusing exception |
| [#601](https://github.com/temporalio/sdk-php/issues/601) | 0 | **Expose WorkflowInboundCallInterceptor::init()** |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 0 | **Improve proto-generated PHP files** |

### SDK Governance

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 0 | **Define backwards compatibility promise** - 6 comments discussing API stability expectations |
| [#640](https://github.com/temporalio/sdk-php/issues/640) | 1 | **Enable GitHub Discussions** - Move Q&A out of issues |

---

## Documentation Gap: Marshaller (Critical)

The most upvoted issue ([#592](https://github.com/temporalio/sdk-php/issues/592) with 5 upvotes and 6 comments) highlights a critical documentation gap:

**Problem:** Documentation for the SDK marshaller is completely missing. Users have no official way to learn:
- How to serialize data objects
- How to use typed lists
- How to use attributes like `Marshal`, `MarshalArray`
- The difference between `DataConverter` and marshalling

**Community Concerns:**
- Marshaller creates objects bypassing the constructor (unlike Symfony Serializer), causing constructor property promotion to not initialize fields
- Relationship between `DataConverter` and marshalling is unclear
- Only example code exists in samples repository, not documentation

**Recommendation:** Create comprehensive marshaller documentation covering:
1. Basic usage with examples
2. Attribute reference (`Marshal`, `MarshalArray`, types)
3. Constructor behavior differences from Symfony Serializer
4. When to use marshaller vs DataConverter

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

18 issues (37% of open issues) have not been updated in over 12 months:

| Issue | Last Updated | Title |
|-------|--------------|-------|
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2024-12-05 | registerDelayedCallback for tests |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 2024-04-29 | Set expectCompletion result for Activity calls |
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 2025-01-07 | Provide "workflow local" |
| [#532](https://github.com/temporalio/sdk-php/issues/532) | 2024-12-09 | Asynchronous child workflow execution problem |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 2024-11-07 | Allow mocking child workflows |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 2024-09-19 | Eliminate DestructMemorizedInstanceException |
| [#502](https://github.com/temporalio/sdk-php/issues/502) | 2024-09-10 | Fix test case |
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 2024-09-01 | Define backwards compatibility promise |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 2024-07-16 | Cloud Operations API Client |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 2024-08-07 | Encode Failures using EncodedAttributes |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 2024-04-16 | Divide Workflow stub and proxy objects |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 2024-02-16 | Expose OperatorServiceClient |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 2024-08-30 | await doesn't interrupt on activity error |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 2024-03-14 | Improve proto-generated PHP files |
| [#285](https://github.com/temporalio/sdk-php/issues/285) | 2024-03-15 | Use temporal.download for test server |
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 2024-03-15 | Use mapWorkflowFailureToException |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 2022-09-14 | FailureConverter with more context |
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 2023-09-01 | Sentry Integration for error logging |

**Recommendations:**

- **Close candidates:**
  - [#532](https://github.com/temporalio/sdk-php/issues/532) - Question about async child workflows, likely resolved
  - [#399](https://github.com/temporalio/sdk-php/issues/399) - Marked as "Not a Bug", appears to be expected behavior
  - [#502](https://github.com/temporalio/sdk-php/issues/502) - Internal test fix, may be outdated

- **Needs triage:**
  - [#103](https://github.com/temporalio/sdk-php/issues/103) - Sentry integration (4+ years old, 11 comments). Determine if official support is planned or document community workarounds.
  - [#123](https://github.com/temporalio/sdk-php/issues/123) - Session worker bug (4+ years old). Verify if still reproducible.
  - [#244](https://github.com/temporalio/sdk-php/issues/244) - FailureConverter enhancement (3+ years old). Evaluate relevance.

- **Keep open:**
  - [#529](https://github.com/temporalio/sdk-php/issues/529) - Valid testing feature request (2 upvotes)
  - [#495](https://github.com/temporalio/sdk-php/issues/495) - Backwards compatibility promise discussion is valuable
  - [#545](https://github.com/temporalio/sdk-php/issues/545) - Cross-SDK feature (workflow local)
  - [#580](https://github.com/temporalio/sdk-php/issues/580) - Nexus implementation tracking

### Duplicate Candidates

No obvious duplicates identified. Issues are generally well-scoped and distinct.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **[#692](https://github.com/temporalio/sdk-php/issues/692):** Resolve Composer conflicts with react/promise v2
- **[#689](https://github.com/temporalio/sdk-php/issues/689):** Fix extension check to respect `--ignore-platform-reqs`
- **[#635](https://github.com/temporalio/sdk-php/issues/635):** Investigate and fix memory leak in workflow worker

### Phase 2: Developer Experience (Short-term)

- **[#592](https://github.com/temporalio/sdk-php/issues/592):** Create comprehensive marshaller documentation
- **[#577](https://github.com/temporalio/sdk-php/issues/577):** Fix UpdateMethod testing issues
- **[#554](https://github.com/temporalio/sdk-php/issues/554):** Improve IDE support and type hints

### Phase 3: Testing Infrastructure (Medium-term)

- **[#529](https://github.com/temporalio/sdk-php/issues/529):** Implement registerDelayedCallback for tests
- **[#524](https://github.com/temporalio/sdk-php/issues/524):** Allow mocking child workflows
- **[#302](https://github.com/temporalio/sdk-php/issues/302):** Better activity mock control in loops
- **[#428](https://github.com/temporalio/sdk-php/issues/428):** Fix test hanging with exceptions

### Phase 4: Feature Expansion (Long-term)

- **[#580](https://github.com/temporalio/sdk-php/issues/580):** Complete Nexus implementation
- **[#644](https://github.com/temporalio/sdk-php/issues/644):** Implement plugin support
- **[#103](https://github.com/temporalio/sdk-php/issues/103):** Provide official Sentry/APM integration pattern

### Phase 5: Maintenance (Ongoing)

- Triage and close stale issues (18 issues, 37% of backlog)
- Maintain framework compatibility (Symfony 8.0, Laravel updates)
- Close long-standing bugs if no longer reproducible ([#123](https://github.com/temporalio/sdk-php/issues/123))
- Enable GitHub Discussions ([#640](https://github.com/temporalio/sdk-php/issues/640)) to separate Q&A from issues

---

## SDK Maturity Assessment

The PHP SDK is reasonably mature but has room for improvement in documentation and testing:

| Aspect | Status | Notes |
|--------|--------|-------|
| Core Functionality | Stable | 81% resolution rate, 9 bugs (none critical) |
| Documentation | Needs Work | Marshaller documentation completely missing |
| Testing Infrastructure | Needs Work | Multiple gaps in test server, mocking, time control |
| Framework Support | Good | Symfony/Laravel supported, watching Symfony 8.0 |
| Observability | Limited | No official Sentry/APM integration |
| Installation | Minor Issues | Recent Composer compatibility problems |
| Feature Parity | In Progress | Nexus, Worker Versioning, workflow-local pending |

The SDK's 81% resolution rate and improving velocity (net -8 issues in last 6 months) demonstrate responsive maintenance. Primary focus areas should be:

1. **Documentation** - Address the critical marshaller gap (most upvoted issue)
2. **Testing infrastructure** - 8 related issues indicate this is a major pain point
3. **Bug triage** - Verify and close long-standing issues (some 4+ years old)
4. **Observability** - Provide official guidance for error logging integrations
