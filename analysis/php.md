# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-11
**Total Open Issues:** 45
**Total Closed Issues:** 217
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [Ruby](ruby.md)

---

## Executive Summary

The PHP SDK has 45 open issues against 217 closed, reflecting a mature SDK with an 83% resolution rate. The backlog is essentially stable over the last 12 months (+2 net), and the last 6 months show a healthy trend of closing more issues than opening (-15 net). The primary concerns are testing framework gaps, documentation for the marshaller system, and a memory leak in the workflow worker. Engagement is relatively low, with only 16% of open issues having upvotes and 44% having comments, indicating a smaller but active community.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 7 | High -- includes memory leak and suppressed exceptions |
| Enhancements | 30 | Medium -- dominated by SDK feature parity and API improvements |
| Testing | 7 | Medium -- test framework gaps block developer adoption |
| Questions | 4 | Low -- community support items |
| Documentation | 1 | Medium -- highest-upvoted open issue |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 13 |
| Total Comments | 63 |
| Issues with Upvotes | 7 (16%) |
| Issues with Comments | 20 (44%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 83% (217/262) |
| Median Time to Close | 31 days (calendar) / 23 days (business) |
| Resolved within 30 days | 50% |
| Resolved within 90 days | 62% |

### Recommended Actions

1. **Immediate:** Fix memory leak in workflow worker ([#635](https://github.com/temporalio/sdk-php/issues/635)) and suppressed exception visibility in child workflows ([#636](https://github.com/temporalio/sdk-php/issues/636))
2. **Short-term:** Resolve gRPC extension check breaking Composer flows ([#689](https://github.com/temporalio/sdk-php/issues/689)); fix UpdateMethod test failures ([#577](https://github.com/temporalio/sdk-php/issues/577))
3. **Medium-term:** Document SDK marshaller ([#592](https://github.com/temporalio/sdk-php/issues/592)); implement Nexus support ([#580](https://github.com/temporalio/sdk-php/issues/580)); add plugin support ([#644](https://github.com/temporalio/sdk-php/issues/644))
4. **Long-term:** Improve developer experience with Fiber-based API ([#702](https://github.com/temporalio/sdk-php/issues/702)); add testing utilities like registerDelayedCallback ([#529](https://github.com/temporalio/sdk-php/issues/529)) and child workflow mocking ([#524](https://github.com/temporalio/sdk-php/issues/524))
5. **Housekeeping:** Triage 19 stale issues (42% of open backlog) that have had no activity for over 12 months

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is essentially stable, with only 2 more issues opened than closed over the past 12 months. The second half of the year showed a strong closing trend, with 5 of the last 7 months having net negative change (more closures than openings).

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 46 | 44 | +2 |

Backlog Stable: The slight growth of +2 issues is negligible given the overall volume.

### Last 6 Months: Detailed Analysis

The last 6 months show excellent progress, with the team closing 27 issues against only 12 new ones, resulting in a net reduction of 15 issues. 9 bugs were fixed and 11 enhancements were completed.

| Metric | Value |
|--------|-------|
| Issues Opened | 12 |
| Issues Closed | 27 |
| Bugs Closed | 9 |
| Enhancements Completed | 11 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | 1 | Simplify developer experience by replacing yields with Fiber suspension |
| 3 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 4 | [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method |
| 6 | [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 1 | 2 | [Feature Request] Set the expectCompletion result for each Activity call inside the loop |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](https://github.com/temporalio/sdk-php/issues/592) | 16 | [Docs] Document SDK marshaller |
| 2 | [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | [Question] Sentry Integration for error logging |
| 3 | [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | [Bug] Can't run the tests of UpdateMethod |
| 4 | [#495](https://github.com/temporalio/sdk-php/issues/495) | 6 | [Discussion] Define a backwards compatibility promise |
| 5 | [#702](https://github.com/temporalio/sdk-php/issues/702) | 5 | Simplify developer experience by replacing yields with Fiber suspension |
| 6 | [#573](https://github.com/temporalio/sdk-php/issues/573) | 5 | [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method |
| 7 | [#529](https://github.com/temporalio/sdk-php/issues/529) | 5 | [Feature Request] registerDelayedCallback for tests |
| 8 | [#302](https://github.com/temporalio/sdk-php/issues/302) | 4 | [Feature Request] Set the expectCompletion result for each Activity call inside the loop |
| 9 | [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | [Bug] withEnableSessionWorker causes to ActivityNotRegisteredError |
| 10 | [#689](https://github.com/temporalio/sdk-php/issues/689) | 3 | [Bug] Temporal PHP SDK doing its own extension check, breaking composer's --ignore-platform-reqs |

---

## Issue Analysis by Category

### Bugs (7 open issues)

The open bugs range from critical production-impacting issues (memory leak, suppressed exceptions) to lower-severity type system and API design issues. Two bugs are high severity.

#### High Severity

| Issue | Comments | Description |
|-------|----------|-------------|
| [#635](https://github.com/temporalio/sdk-php/issues/635) | 3 | Memory leak in workflow worker -- significant memory consumption and zombie processes when workflows are repeatedly restarted |
| [#636](https://github.com/temporalio/sdk-php/issues/636) | 0 | Suppressed exceptions in child workflows -- PayloadConverter exceptions from child workflows and continue-as-new are silently swallowed, preventing debugging |
| [#689](https://github.com/temporalio/sdk-php/issues/689) | 3 | SDK performs runtime gRPC extension checks that break Composer's `--ignore-platform-reqs`, causing failures during Laravel package discovery |

#### Medium Severity

| Issue | Comments | Description |
|-------|----------|-------------|
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 7 | Cannot run tests for UpdateMethod -- blocks users from testing workflow update functionality |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 3 | Unit tests hang when the code under test has runtime or compile-time exceptions |
| [#573](https://github.com/temporalio/sdk-php/issues/573) | 3 | WorkerFactoryInterface missing arguments for newWorker() method |

#### Low Severity

| Issue | Comments | Description |
|-------|----------|-------------|
| [#595](https://github.com/temporalio/sdk-php/issues/595) | 0 | Incorrect generic extends of RuleFactoryInterface -- type system issue in marshalling rules |
| [#123](https://github.com/temporalio/sdk-php/issues/123) | 4 | withEnableSessionWorker causes ActivityNotRegisteredError -- open since 2021 |

### Testing Framework Issues (7 open issues)

Testing support is a recurring pain point. Several issues relate to the test framework not supporting features available in production, and test utilities being insufficient for common patterns.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#654](https://github.com/temporalio/sdk-php/issues/654) | 0 | upsertTypedSearchAttributes causes timeout in test server |
| [#577](https://github.com/temporalio/sdk-php/issues/577) | 0 | Cannot run tests for UpdateMethod |
| [#529](https://github.com/temporalio/sdk-php/issues/529) | 2 | registerDelayedCallback needed for testing time-dependent workflows |
| [#524](https://github.com/temporalio/sdk-php/issues/524) | 0 | Cannot mock child workflows like activities |
| [#502](https://github.com/temporalio/sdk-php/issues/502) | 0 | Fix test case (internal test maintenance) |
| [#428](https://github.com/temporalio/sdk-php/issues/428) | 0 | Unit tests hang on runtime/compile exceptions |
| [#399](https://github.com/temporalio/sdk-php/issues/399) | 0 | await does not interrupt on activity error in tests |

### Questions & Community Support (4 open issues)

| Issue | Comments | Description |
|-------|----------|-------------|
| [#103](https://github.com/temporalio/sdk-php/issues/103) | 11 | Sentry integration for error logging -- long-standing community question (since 2021) |
| [#568](https://github.com/temporalio/sdk-php/issues/568) | 2 | How to debug activity task startToClose timeout errors |
| [#532](https://github.com/temporalio/sdk-php/issues/532) | 2 | Asynchronous child workflow execution problem |
| [#302](https://github.com/temporalio/sdk-php/issues/302) | 2 | Set expectCompletion result for each Activity call in a loop |

---

## API & Component Hotspots

Based on semantic analysis of issue subcategories, the following areas have the most open issues:

| Area | Open Issue Count | Key Issues |
|------|-----------------|------------|
| Test framework | 7 | [#654](https://github.com/temporalio/sdk-php/issues/654), [#577](https://github.com/temporalio/sdk-php/issues/577), [#529](https://github.com/temporalio/sdk-php/issues/529), [#524](https://github.com/temporalio/sdk-php/issues/524) |
| Dependency management | 2 | [#698](https://github.com/temporalio/sdk-php/issues/698), [#689](https://github.com/temporalio/sdk-php/issues/689) |
| Workflow execution | 2 | [#636](https://github.com/temporalio/sdk-php/issues/636), [#635](https://github.com/temporalio/sdk-php/issues/635) |
| Serialization & data conversion | 3 | [#587](https://github.com/temporalio/sdk-php/issues/587), [#574](https://github.com/temporalio/sdk-php/issues/574), [#454](https://github.com/temporalio/sdk-php/issues/454) |
| Error handling | 2 | [#269](https://github.com/temporalio/sdk-php/issues/269), [#244](https://github.com/temporalio/sdk-php/issues/244) |

---

## Enhancement Requests (30 open issues)

### SDK Feature Parity & Core Features

Key features expected across all Temporal SDKs that are still pending in PHP:

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#580](https://github.com/temporalio/sdk-php/issues/580) | 1 | Initial Nexus implementation for PHP |
| [#644](https://github.com/temporalio/sdk-php/issues/644) | 0 | Plugin support system |
| [#558](https://github.com/temporalio/sdk-php/issues/558) | 0 | Add `Patched()` and `DeprecatePatch()` APIs for versioning |
| [#567](https://github.com/temporalio/sdk-php/issues/567) | 0 | Expose workflow cancel cause/reason |
| [#605](https://github.com/temporalio/sdk-php/issues/605) | 0 | SDK support for activity reset |
| [#668](https://github.com/temporalio/sdk-php/issues/668) | 0 | Implement SetCurrentDetails for dynamic workflow details |
| [#545](https://github.com/temporalio/sdk-php/issues/545) | 0 | Provide "workflow local" storage |
| [#638](https://github.com/temporalio/sdk-php/issues/638) | 0 | Add Summary to LocalActivityOptions |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#702](https://github.com/temporalio/sdk-php/issues/702) | 2 | Replace yield-based workflows with PHP Fiber suspension for cleaner API |
| [#592](https://github.com/temporalio/sdk-php/issues/592) | 5 | Document SDK marshaller system |
| [#554](https://github.com/temporalio/sdk-php/issues/554) | 1 | Ensure better SDK support in IDE (PhpStorm, etc.) |
| [#495](https://github.com/temporalio/sdk-php/issues/495) | 0 | Define a backwards compatibility promise |
| [#419](https://github.com/temporalio/sdk-php/issues/419) | 0 | Divide workflow stub objects from proxy objects for cleaner architecture |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#587](https://github.com/temporalio/sdk-php/issues/587) | 0 | Serialization context for codecs and converters |
| [#574](https://github.com/temporalio/sdk-php/issues/574) | 0 | Support "RawValue" non-converted values |
| [#454](https://github.com/temporalio/sdk-php/issues/454) | 0 | Encode failures using EncodedAttributes |
| [#318](https://github.com/temporalio/sdk-php/issues/318) | 0 | Improve PHP files generated from proto |

### Error Handling & Observability

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#648](https://github.com/temporalio/sdk-php/issues/648) | 0 | Reclassify benign application errors in OpenTelemetry |
| [#269](https://github.com/temporalio/sdk-php/issues/269) | 0 | Use mapWorkflowFailureToException for all workflow methods |
| [#244](https://github.com/temporalio/sdk-php/issues/244) | 0 | FailureConverter allow more context in ordinary exceptions |
| [#601](https://github.com/temporalio/sdk-php/issues/601) | 0 | Expose WorkflowInboundCallInterceptor::init() |

### Dependency & Compatibility

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#698](https://github.com/temporalio/sdk-php/issues/698) | 0 | Drop old packages support (PHP 7/8.0 era dependencies) |
| [#670](https://github.com/temporalio/sdk-php/issues/670) | 0 | Symfony 8.0 support |
| [#507](https://github.com/temporalio/sdk-php/issues/507) | 0 | Eliminate DestructMemorizedInstanceException |
| [#476](https://github.com/temporalio/sdk-php/issues/476) | 0 | Cloud Operations API Client |
| [#400](https://github.com/temporalio/sdk-php/issues/400) | 0 | Expose OperatorServiceClient |
| [#382](https://github.com/temporalio/sdk-php/issues/382) | 0 | Stop registering methods without ActivityMethod attribute as activities |
| [#285](https://github.com/temporalio/sdk-php/issues/285) | 0 | Use temporal.download server for test server downloads |

---

## Housekeeping Recommendations

### Stale Issues (19 open issues with no activity for >12 months)

42% of open issues are stale, which is a significant portion of the backlog.

- **Close candidates:** [#103](https://github.com/temporalio/sdk-php/issues/103) (Sentry integration question from 2021 -- likely addressed by interceptors and OpenTelemetry support), [#123](https://github.com/temporalio/sdk-php/issues/123) (session worker bug from 2021 -- may be obsolete), [#532](https://github.com/temporalio/sdk-php/issues/532) (question about child workflows from 2024)
- **Needs triage:** [#399](https://github.com/temporalio/sdk-php/issues/399) (await test behavior -- unclear if still relevant), [#495](https://github.com/temporalio/sdk-php/issues/495) (backwards compatibility promise discussion -- needs maintainer decision), [#502](https://github.com/temporalio/sdk-php/issues/502) (fix test case -- internal item)
- **Keep open:** [#529](https://github.com/temporalio/sdk-php/issues/529) (registerDelayedCallback -- 2 upvotes, valid testing need), [#554](https://github.com/temporalio/sdk-php/issues/554) (IDE support -- 1 upvote, actionable), [#302](https://github.com/temporalio/sdk-php/issues/302) (expectCompletion in loops -- 1 upvote, valid testing need), [#476](https://github.com/temporalio/sdk-php/issues/476) (Cloud Operations API -- feature parity item), [#454](https://github.com/temporalio/sdk-php/issues/454) (failure encoding -- active enhancement), [#419](https://github.com/temporalio/sdk-php/issues/419) (stub/proxy separation -- architectural improvement)

### Duplicate Candidates

- [#269](https://github.com/temporalio/sdk-php/issues/269) (mapWorkflowFailureToException) and [#244](https://github.com/temporalio/sdk-php/issues/244) (FailureConverter context) are closely related error-handling enhancements that could potentially be addressed together
- [#285](https://github.com/temporalio/sdk-php/issues/285) (use temporal.download for test server) may be partially addressed by recent test infrastructure changes

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix memory leak in workflow worker ([#635](https://github.com/temporalio/sdk-php/issues/635))
- Fix suppressed exception visibility in child workflows ([#636](https://github.com/temporalio/sdk-php/issues/636))
- Resolve gRPC extension check breaking Composer ([#689](https://github.com/temporalio/sdk-php/issues/689))

### Phase 2: Developer Experience (Short-term)
- Document SDK marshaller ([#592](https://github.com/temporalio/sdk-php/issues/592)) -- highest user demand
- Fix UpdateMethod test failures ([#577](https://github.com/temporalio/sdk-php/issues/577))
- Fix unit test hang on exceptions ([#428](https://github.com/temporalio/sdk-php/issues/428))
- Support upsertTypedSearchAttributes in test server ([#654](https://github.com/temporalio/sdk-php/issues/654))

### Phase 3: Feature Expansion (Medium-term)
- Implement Nexus support ([#580](https://github.com/temporalio/sdk-php/issues/580))
- Add plugin support ([#644](https://github.com/temporalio/sdk-php/issues/644))
- Add Patched/DeprecatePatch APIs ([#558](https://github.com/temporalio/sdk-php/issues/558))
- Explore Fiber-based workflow API ([#702](https://github.com/temporalio/sdk-php/issues/702))
- Add child workflow mocking for tests ([#524](https://github.com/temporalio/sdk-php/issues/524))

### Phase 4: Maintenance (Ongoing)
- Triage and close stale issues (19 candidates)
- Drop legacy package versions ([#698](https://github.com/temporalio/sdk-php/issues/698))
- Add Symfony 8.0 support ([#670](https://github.com/temporalio/sdk-php/issues/670))
- Clean up dependency constraints and modernize package requirements
