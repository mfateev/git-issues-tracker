# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 39
**Total Closed Issues:** 230
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [Ruby](ruby.md)

---

## Executive Summary

The PHP SDK has 39 open issues against 230 closed, reflecting an 86% resolution rate. The backlog is actively shrinking -- 16 more issues closed than opened in the last 12 months, with particularly strong progress in recent months. The primary concerns are a memory leak in the workflow worker, testing framework gaps, and documentation for the marshaller system. Engagement is moderate, with 21% of open issues having upvotes and 56% having comments, indicating a smaller but engaged community.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 7 | High -- includes memory leak and test framework issues |
| Enhancements | 24 | Medium -- dominated by SDK feature parity and API improvements |
| Testing | 5 | Medium -- test framework gaps block developer adoption |
| Questions | 4 | Low -- community support items |
| Documentation | 1 | Medium -- highest-upvoted open issue |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 14 |
| Total Comments | 67 |
| Issues with Upvotes | 8 (21%) |
| Issues with Comments | 22 (56%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 86% (230/269) |
| Median Time to Close | 44 days (calendar) / 33 days (business) |
| Resolved within 30 days | 48% |
| Resolved within 90 days | 61% |

### Recommended Actions

1. **Immediate:** Fix memory leak in workflow worker ([#635](https://github.com/temporalio/sdk-php/issues/635)) -- significant resource consumption issue
2. **Short-term:** Resolve test server checks breaking local development ([#727](https://github.com/temporalio/sdk-php/issues/727)); fix UpdateMethod test failures ([#577](https://github.com/temporalio/sdk-php/issues/577))
3. **Medium-term:** Document SDK marshaller ([#592](https://github.com/temporalio/sdk-php/issues/592)); implement Nexus support ([#580](https://github.com/temporalio/sdk-php/issues/580)); add plugin support ([#644](https://github.com/temporalio/sdk-php/issues/644))
4. **Long-term:** Improve developer experience with Fiber-based API ([#702](https://github.com/temporalio/sdk-php/issues/702)); add testing utilities like registerDelayedCallback ([#529](https://github.com/temporalio/sdk-php/issues/529)) and child workflow mocking ([#524](https://github.com/temporalio/sdk-php/issues/524))
5. **Housekeeping:** Triage 19 stale issues (49% of open backlog) that have had no activity for over 12 months

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is actively shrinking, with 16 more issues closed than opened over the past 12 months. The second half of the year showed a strong closing trend, with 7 of the last 8 months having net negative or zero change.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 36 | 52 | -16 |

📉 Backlog Shrinking: 16 more issues closed than opened reflects excellent maintenance momentum.

### Last 6 Months: Detailed Analysis

The last 6 months show excellent progress, with the team closing 31 issues against only 15 new ones, resulting in a net reduction of 16 issues. 9 bugs were fixed and 14 enhancements were completed. Notable completions include suppressed exception visibility in child workflows ([#636](https://github.com/temporalio/sdk-php/issues/636)), Symfony 8.0 support ([#670](https://github.com/temporalio/sdk-php/issues/670)), and protobuf v5 support ([#723](https://github.com/temporalio/sdk-php/issues/723)).

| Metric | Value |
|--------|-------|
| Issues Opened | 15 |
| Issues Closed | 31 |
| Bugs Closed | 9 |
| Enhancements Completed | 14 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#723](https://github.com/temporalio/sdk-php/issues/723) | 2 | Add protobuf v5 |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | 1 | Simplify developer experience by replacing yields with Fiber suspension |
| 3 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 4 | [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method |
| 6 | [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | 4 | [Feature Request] Expose OperatorServiceClient |
| 8 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set the expectCompletion result for each Activity call inside the loop |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#400](https://github.com/temporalio/sdk-php/issues/400) | 6 | [Feature Request] Expose OperatorServiceClient |
| 6 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 5 | Simplify developer experience by replacing yields with Fiber suspension |
| 7 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 5 | [Bug] WorkerFactoryInterface missing arguments for newWorker() |
| 8 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 9 | [#635](https://github.com/temporalio/sdk-php/issues/635) | 4 | [Bug] Memory leak workflow worker |
| 10 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 4 | [Feature Request] Set expectCompletion result for each Activity in loop |

---

## Issue Analysis by Category

### Bugs (7 open issues)

The open bugs range from critical production-impacting issues (memory leak) to lower-severity type system and API design issues.

#### High Severity

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 4 | Memory leak in workflow worker -- significant memory consumption and zombie processes when workflows are repeatedly restarted |
| [#727](https://github.com/temporalio/sdk-php/issues/727) | 1 | startTemporalTestServer checks for running temporal server instance, blocking local development |

#### Medium Severity

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#722](https://github.com/temporalio/sdk-php/issues/722) | 1 | ActivityInterface empty default prefix causes activity type name collision |
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | Cannot run tests for UpdateMethod -- blocks users from testing workflow update functionality |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 3 | Unit tests hang when the code under test has runtime or compile-time exceptions |
| [#573](https://github.com/temporalio/sdk-php/issues/573) | 3 | WorkerFactoryInterface missing arguments for newWorker() method |

#### Low Severity

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#595](https://github.com/temporalio/sdk-php/issues/595) | 1 | Incorrect generic extends of RuleFactoryInterface -- type system issue in marshalling rules |
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | withEnableSessionWorker causes ActivityNotRegisteredError -- open since 2021 |

### Testing Framework Issues (5 open issues)

Testing support is a recurring pain point. Several issues relate to the test framework not supporting features available in production.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#654](https://github.com/temporalio/sdk-php/issues/654) | 0 | upsertTypedSearchAttributes causes timeout in test server |
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | Cannot run tests for UpdateMethod |
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | registerDelayedCallback needed for testing time-dependent workflows |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Cannot mock child workflows like activities |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | Unit tests hang on runtime/compile exceptions |

### Questions & Community Support (4 open issues)

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | Sentry integration for error logging -- long-standing community question (since 2021) |
| [#568](https://github.com/temporalio/sdk-php/issues/568) | 2 | How to debug activity task startToClose timeout errors |
| [#532](https://github.com/temporalio/sdk-php/issues/532) | 2 | Asynchronous child workflow execution problem |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 3 | await does not interrupt on activity error in tests |

---

## API & Component Hotspots

Based on issue analysis, the following areas have the most open issues:

| Area | Open Issue Count | Key Issues |
|------|-----------------|------------|
| Test framework | 5 | [#654](https://github.com/temporalio/sdk-php/issues/654), [#577](https://github.com/temporalio/sdk-php/issues/577), [#529](https://github.com/temporalio/sdk-php/issues/529), [#524](https://github.com/temporalio/sdk-php/issues/524) |
| Workflow execution | 1 | [#635](https://github.com/temporalio/sdk-php/issues/635) |
| Serialization & data conversion | 3 | [#587](https://github.com/temporalio/sdk-php/issues/587), [#574](https://github.com/temporalio/sdk-php/issues/574), [#454](https://github.com/temporalio/sdk-php/issues/454) |
| Dependency management | 1 | [#698](https://github.com/temporalio/sdk-php/issues/698) |
| Error handling | 2 | [#269](https://github.com/temporalio/sdk-php/issues/269), [#244](https://github.com/temporalio/sdk-php/issues/244) |

---

## Enhancement Requests (24 open issues)

### SDK Feature Parity & Core Features

Key features expected across all Temporal SDKs that are still pending in PHP:

| Issue | 👍 | Request |
|-------|-----|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | Initial Nexus implementation for PHP |
| [#644](https://github.com/temporalio/sdk-php/issues/644) | 0 | Plugin support system |
| [#720](https://github.com/temporalio/sdk-php/issues/720) | 0 | Forward options for worker heartbeating |
| [#567](https://github.com/temporalio/sdk-php/issues/567) | 0 | Expose workflow cancel cause/reason |
| [#605](https://github.com/temporalio/sdk-php/issues/605) | 0 | SDK support for activity reset |
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 0 | Provide "workflow local" storage |
| [#729](https://github.com/temporalio/sdk-php/issues/729) | 0 | Support conflict token retry loop for schedule updates |

### Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | Replace yield-based workflows with PHP Fiber suspension for cleaner API |
| [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | Document SDK marshaller system |
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | Ensure better SDK support in IDE (PhpStorm, etc.) |
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 0 | Define a backwards compatibility promise |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 0 | Divide workflow stub objects from proxy objects for cleaner architecture |

### Serialization & Data Handling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-php/issues/587) | 0 | Serialization context for codecs and converters |
| [#574](https://github.com/temporalio/sdk-php/issues/574) | 0 | Support "RawValue" non-converted values |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | Encode failures using EncodedAttributes |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 0 | Improve PHP files generated from proto |

### Error Handling & Observability

| Issue | 👍 | Request |
|-------|-----|---------|
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | Use mapWorkflowFailureToException for all workflow methods |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | FailureConverter allow more context in ordinary exceptions |
| [#601](https://github.com/temporalio/sdk-php/issues/601) | 0 | Expose WorkflowInboundCallInterceptor::init() |

### Dependency & Compatibility

| Issue | 👍 | Request |
|-------|-----|---------|
| [#698](https://github.com/temporalio/sdk-php/issues/698) | 0 | Drop old packages support (PHP 7/8.0 era dependencies) |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | Eliminate DestructMemorizedInstanceException |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | Cloud Operations API Client |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 1 | Expose OperatorServiceClient |
| [#382](https://github.com/temporalio/sdk-php/issues/382) | 0 | Stop registering methods without ActivityMethod attribute as activities |
| [#285](https://github.com/temporalio/sdk-php/issues/285) | 0 | Use temporal.download server for test server downloads |

---

## Housekeeping Recommendations

### Stale Issues (19 open issues with no activity for >12 months)

49% of open issues are stale, which is a significant portion of the backlog.

- **Close candidates:** [#103](https://github.com/temporalio/sdk-php/issues/103) (Sentry integration question from 2021 -- likely addressed by interceptors and OpenTelemetry support), [#123](https://github.com/temporalio/sdk-php/issues/123) (session worker bug from 2021 -- may be obsolete), [#532](https://github.com/temporalio/sdk-php/issues/532) (question about child workflows from 2024)
- **Needs triage:** [#399](https://github.com/temporalio/sdk-php/issues/399) (await test behavior -- unclear if still relevant), [#495](https://github.com/temporalio/sdk-php/issues/495) (backwards compatibility promise discussion -- needs maintainer decision), [#502](https://github.com/temporalio/sdk-php/issues/502) (fix test case -- internal item)
- **Keep open:** [#529](https://github.com/temporalio/sdk-php/issues/529) (registerDelayedCallback -- 2 upvotes, valid testing need), [#554](https://github.com/temporalio/sdk-php/issues/554) (IDE support -- 1 upvote, actionable), [#302](https://github.com/temporalio/sdk-php/issues/302) (expectCompletion in loops -- 1 upvote, valid testing need), [#476](https://github.com/temporalio/sdk-php/issues/476) (Cloud Operations API -- feature parity item), [#454](https://github.com/temporalio/sdk-php/issues/454) (failure encoding -- active enhancement)

### Duplicate Candidates

- [#269](https://github.com/temporalio/sdk-php/issues/269) (mapWorkflowFailureToException) and [#244](https://github.com/temporalio/sdk-php/issues/244) (FailureConverter context) are closely related error-handling enhancements that could potentially be addressed together
- [#285](https://github.com/temporalio/sdk-php/issues/285) (use temporal.download for test server) may be partially addressed by recent test infrastructure changes

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix memory leak in workflow worker ([#635](https://github.com/temporalio/sdk-php/issues/635))
- Fix test server startup check blocking local development ([#727](https://github.com/temporalio/sdk-php/issues/727))

### Phase 2: Developer Experience (Short-term)
- Document SDK marshaller ([#592](https://github.com/temporalio/sdk-php/issues/592)) -- highest user demand
- Fix UpdateMethod test failures ([#577](https://github.com/temporalio/sdk-php/issues/577))
- Fix unit test hang on exceptions ([#428](https://github.com/temporalio/sdk-php/issues/428))
- Support upsertTypedSearchAttributes in test server ([#654](https://github.com/temporalio/sdk-php/issues/654))

### Phase 3: Feature Expansion (Medium-term)
- Implement Nexus support ([#580](https://github.com/temporalio/sdk-php/issues/580))
- Add plugin support ([#644](https://github.com/temporalio/sdk-php/issues/644))
- Explore Fiber-based workflow API ([#702](https://github.com/temporalio/sdk-php/issues/702))
- Add child workflow mocking for tests ([#524](https://github.com/temporalio/sdk-php/issues/524))

### Phase 4: Maintenance (Ongoing)
- Triage and close stale issues (19 candidates)
- Drop legacy package versions ([#698](https://github.com/temporalio/sdk-php/issues/698))
- Clean up dependency constraints and modernize package requirements
