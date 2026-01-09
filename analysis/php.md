# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 49
**Total Closed Issues:** 0
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md) - [Full Issue Data](../repos/temporalio-sdk-php/issues.md)

**Other SDKs:** [Java](java.md) - [Go](go.md) - [TypeScript](typescript.md) - [Python](python.md) - [.NET](dotnet.md) - [Ruby](ruby.md) - [Server](server.md) - [Features](features.md)

---

## Executive Summary

The PHP SDK has 49 open issues with no closed issue data available for resolution metrics. The issue backlog shows significant age with an average of 457 days and 37% of issues stale (>12 months). User engagement is moderate with 12 upvotes across 7 issues (14%) and 67 comments across 23 issues (47%). Primary concerns are testing infrastructure limitations, documentation gaps, and long-standing bugs.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 31 | Medium - Core functionality gaps |
| Bugs | 9 | High - Testing and session worker issues |
| Testing Issues | 8 | High - Blocking efficient test workflows |
| Documentation | 1 | High - Marshaller docs missing (top upvoted) |
| Stale Issues | 18 | Medium - Need triage review |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 12 |
| Total Comments | 67 |
| Issues with Upvotes | 7 (14%) |
| Issues with Comments | 23 (47%) |

### Resolution Metrics

> Note: No resolution metrics available (0 closed issues tracked).

| Metric | Value |
|--------|-------|
| Resolution Rate | 0% (0/49) |
| Median Time to Close | N/A |
| Resolved within 30 days | N/A |
| Resolved within 90 days | N/A |

### Recommended Actions

1. **Immediate:** Fix recent composer dependency conflicts (#692) and extension check issue (#689)
2. **Short-term:** Address UpdateMethod testing bug (#577) - blocking workflow testing
3. **Medium-term:** Document SDK marshaller (#592) - top user request with 5 upvotes
4. **Long-term:** Implement Nexus support (#580), improve testing tools, add registerDelayedCallback (#529)
5. **Housekeeping:** Triage 18 stale issues for closure or roadmap assignment

---

## Issue Health Assessment

### Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 3 | 6% |
| 1-3 months | 1 | 2% |
| 3-6 months | 8 | 16% |
| 6-12 months | 15 | 31% |
| 1-2 years | 14 | 29% |
| 2-3 years | 4 | 8% |
| 3+ years | 4 | 8% |

**Commentary:** The PHP SDK has a concerning age distribution with only 8% of issues from the last 3 months, while 45% are over 1 year old. This suggests a maintenance deficit that should be addressed.

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | ~31 | 0 (tracked) | +31 |

Note: Closed issue tracking not available for this repository.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](../repos/temporalio-sdk-php/issues.md#592) | 5 | 6 | [Docs] Document SDK marshaller |
| 2 | [#529](../repos/temporalio-sdk-php/issues.md#529) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| 3 | [#640](../repos/temporalio-sdk-php/issues.md#640) | 1 | 1 | Enable Discussions |
| 4 | [#580](../repos/temporalio-sdk-php/issues.md#580) | 1 | 1 | Initial Nexus implementation - PHP |
| 5 | [#573](../repos/temporalio-sdk-php/issues.md#573) | 1 | 3 | [Bug] WorkerFactoryInterface missing arguments |
| 6 | [#554](../repos/temporalio-sdk-php/issues.md#554) | 1 | 0 | Ensure better SDK support in IDE |
| 7 | [#302](../repos/temporalio-sdk-php/issues.md#302) | 1 | 2 | [Feature Request] expectCompletion result for Activity in loop |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#592](../repos/temporalio-sdk-php/issues.md#592) | 16 | Document SDK marshaller |
| 2 | [#103](../repos/temporalio-sdk-php/issues.md#103) | 11 | Sentry Integration for error logging |
| 3 | [#577](../repos/temporalio-sdk-php/issues.md#577) | 7 | Can't run UpdateMethod tests |
| 4 | [#495](../repos/temporalio-sdk-php/issues.md#495) | 6 | Define backwards compatibility promise |
| 5 | [#573](../repos/temporalio-sdk-php/issues.md#573) | 5 | WorkerFactoryInterface missing arguments |
| 6 | [#529](../repos/temporalio-sdk-php/issues.md#529) | 5 | registerDelayedCallback for tests |
| 7 | [#302](../repos/temporalio-sdk-php/issues.md#302) | 4 | expectCompletion result for Activity |
| 8 | [#123](../repos/temporalio-sdk-php/issues.md#123) | 4 | withEnableSessionWorker ActivityNotRegistered |
| 9 | [#640](../repos/temporalio-sdk-php/issues.md#640) | 3 | Enable Discussions |
| 10 | [#635](../repos/temporalio-sdk-php/issues.md#635) | 3 | Memory leak workflow worker |

---

## Recent Issues (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-01-08 | [#692](../repos/temporalio-sdk-php/issues.md#692) | [Bug] Composer requirements conflicts with react/promise v2 |
| 2026-01-07 | [#689](../repos/temporalio-sdk-php/issues.md#689) | [Bug] SDK doing own extension check, breaking --ignore-platform-reqs |
| 2025-12-18 | [#670](../repos/temporalio-sdk-php/issues.md#670) | [Feature Request] Symfony 8.0 support |

**Analysis:** Recent issues focus on dependency management and framework compatibility. The composer conflicts (#692, #689) are practical blockers for users trying to adopt or upgrade the SDK.

---

## Issue Analysis by Category

### Bugs (9 issues)

| Priority | Issue | Comments | Description |
|----------|-------|----------|-------------|
| High | [#692](../repos/temporalio-sdk-php/issues.md#692) | 0 | Composer requirements conflicts with react/promise v2 |
| High | [#689](../repos/temporalio-sdk-php/issues.md#689) | 1 | SDK extension check breaks --ignore-platform-reqs |
| High | [#577](../repos/temporalio-sdk-php/issues.md#577) | 7 | Can't run UpdateMethod tests - blocking testing |
| Medium | [#635](../repos/temporalio-sdk-php/issues.md#635) | 3 | Memory leak in workflow worker |
| Medium | [#428](../repos/temporalio-sdk-php/issues.md#428) | 3 | Unit test hangs with runtime/compile exception |
| Medium | [#123](../repos/temporalio-sdk-php/issues.md#123) | 4 | withEnableSessionWorker causes ActivityNotRegistered |
| Low | [#636](../repos/temporalio-sdk-php/issues.md#636) | 0 | Suppressed exception in workflow child |
| Low | [#624](../repos/temporalio-sdk-php/issues.md#624) | 0 | Facade methods throw wrong exception |
| Low | [#595](../repos/temporalio-sdk-php/issues.md#595) | 0 | Incorrect generic extends of RuleFactoryInterface |

**Pattern Analysis:**
- **Dependency Issues (#692, #689):** Recent bugs affecting installation/upgrade paths
- **Testing Issues (#577, #428):** Multiple bugs blocking efficient workflow testing
- **Session Worker (#123):** Long-standing bug (4+ years) indicating feature may be incomplete
- **Memory Leak (#635):** Production stability concern

### Testing Infrastructure (8 issues)

Testing is a significant pain point for PHP SDK users, with multiple issues affecting workflow testing capabilities.

| Issue | Description |
|-------|-------------|
| [#577](../repos/temporalio-sdk-php/issues.md#577) | UpdateMethod tests fail with assertion error |
| [#529](../repos/temporalio-sdk-php/issues.md#529) | Missing registerDelayedCallback for tests (2 upvotes) |
| [#302](../repos/temporalio-sdk-php/issues.md#302) | expectCompletion doesn't work for Activity in loop (1 upvote) |
| [#428](../repos/temporalio-sdk-php/issues.md#428) | Unit test hangs with runtime exceptions |
| [#524](../repos/temporalio-sdk-php/issues.md#524) | Allow mocking child workflows like activities |
| [#623](../repos/temporalio-sdk-php/issues.md#623) | Can't unserialize object structure in test env |
| [#502](../repos/temporalio-sdk-php/issues.md#502) | Fix test case |
| [#501](../repos/temporalio-sdk-php/issues.md#501) | Repair or disable Windows tests in CI |

**Key Insight:** Testing support lags behind other SDKs. Users explicitly request features like `registerDelayedCallback` that exist in Go SDK but not PHP.

### Documentation (1 issue, High Priority)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#592](../repos/temporalio-sdk-php/issues.md#592) | 5 | Document SDK marshaller - TOP REQUEST |

The marshaller documentation issue is the highest upvoted issue with active community discussion. Users report that marshaller concepts (Marshal, MarshalArray attributes) are completely undocumented, making data serialization difficult to understand.

---

## Enhancement Requests (31 issues)

### Framework Integrations

| Issue | Description |
|-------|-------------|
| [#670](../repos/temporalio-sdk-php/issues.md#670) | Symfony 8.0 support |
| [#103](../repos/temporalio-sdk-php/issues.md#103) | Sentry integration for error logging (11 comments) |
| [#644](../repos/temporalio-sdk-php/issues.md#644) | Plugin support |

### Nexus & API

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#580](../repos/temporalio-sdk-php/issues.md#580) | 1 | Initial Nexus implementation - PHP |
| [#476](../repos/temporalio-sdk-php/issues.md#476) | 0 | Cloud Operations API Client |
| [#400](../repos/temporalio-sdk-php/issues.md#400) | 0 | Expose OperatorServiceClient |

### Developer Experience

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#554](../repos/temporalio-sdk-php/issues.md#554) | 1 | Better SDK support in IDE |
| [#640](../repos/temporalio-sdk-php/issues.md#640) | 1 | Enable Discussions |
| [#495](../repos/temporalio-sdk-php/issues.md#495) | 0 | Define backwards compatibility promise (6 comments) |

### Workflow Features

| Issue | Description |
|-------|-------------|
| [#642](../repos/temporalio-sdk-php/issues.md#642) | Add first execution run ID to workflow info |
| [#668](../repos/temporalio-sdk-php/issues.md#668) | Implement SetCurrentDetails for dynamic workflow details |
| [#601](../repos/temporalio-sdk-php/issues.md#601) | Expose WorkflowInboundCallInterceptor::init() |
| [#567](../repos/temporalio-sdk-php/issues.md#567) | Expose Workflow cancel cause/reason |
| [#558](../repos/temporalio-sdk-php/issues.md#558) | Add Patched() and DeprecatePatch() APIs |
| [#545](../repos/temporalio-sdk-php/issues.md#545) | Provide "workflow local" |

### Serialization & Data Handling

| Issue | Description |
|-------|-------------|
| [#587](../repos/temporalio-sdk-php/issues.md#587) | Serialization context for codecs and converters |
| [#574](../repos/temporalio-sdk-php/issues.md#574) | Support "RawValue" non-converted values |
| [#454](../repos/temporalio-sdk-php/issues.md#454) | Encode Failures using EncodedAttributes |
| [#269](../repos/temporalio-sdk-php/issues.md#269) | Use mapWorkflowFailureToException for all workflow methods |
| [#244](../repos/temporalio-sdk-php/issues.md#244) | FailureConverter allow more context in exceptions |

### Observability

| Issue | Description |
|-------|-------------|
| [#648](../repos/temporalio-sdk-php/issues.md#648) | Reclassify Benign Application errors in OpenTelemetry |
| [#638](../repos/temporalio-sdk-php/issues.md#638) | Add Summary to LocalActivityOptions |

### Activity Features

| Issue | Description |
|-------|-------------|
| [#605](../repos/temporalio-sdk-php/issues.md#605) | SDK support for activity reset |
| [#419](../repos/temporalio-sdk-php/issues.md#419) | Divide Workflow stub objects and Workflow proxy objects |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 18 issues

**Close Candidates:**
- [#285](../repos/temporalio-sdk-php/issues.md#285) - Use temporal.download server (3+ years old, likely superseded)
- [#244](../repos/temporalio-sdk-php/issues.md#244) - FailureConverter context (3+ years, no traction)
- [#103](../repos/temporalio-sdk-php/issues.md#103) - Sentry integration (4+ years, solution provided in comments)

**Needs Triage:**
- [#123](../repos/temporalio-sdk-php/issues.md#123) - Session worker bug (4+ years) - determine if feature is supported
- [#495](../repos/temporalio-sdk-php/issues.md#495) - BC promise discussion - decide on policy
- [#399](../repos/temporalio-sdk-php/issues.md#399) - await doesn't interrupt activity - verify behavior

**Keep Open (Valid Feature Requests):**
- [#529](../repos/temporalio-sdk-php/issues.md#529) - registerDelayedCallback (2 upvotes, common testing need)
- [#302](../repos/temporalio-sdk-php/issues.md#302) - expectCompletion in loop (assigned to maintainers)
- [#476](../repos/temporalio-sdk-php/issues.md#476) - Cloud Operations API Client

### Duplicate Candidates

- #573 and #495 both touch on interface/BC concerns - could be consolidated
- Multiple testing-related issues could benefit from a unified testing roadmap

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- [ ] Fix composer dependency conflicts (#692, #689) - blocking adoption
- [ ] Address memory leak in workflow worker (#635)
- [ ] Review UpdateMethod testing issue (#577) - high engagement

### Phase 2: Developer Experience (Short-term)

- [ ] **Document SDK marshaller (#592)** - top user request
- [ ] Improve testing tools: registerDelayedCallback (#529), expectCompletion (#302)
- [ ] Fix unit test hangs (#428)
- [ ] Add IDE support improvements (#554)

### Phase 3: Feature Expansion (Medium-term)

- [ ] Nexus implementation (#580)
- [ ] Symfony 8.0 support (#670)
- [ ] Define backwards compatibility promise (#495)
- [ ] Cloud Operations API Client (#476)

### Phase 4: Maintenance (Ongoing)

- [ ] Triage 18 stale issues
- [ ] Close outdated issues with no recent activity
- [ ] Session worker feature review (#123) - determine support status

---

## Notes for PHP SDK

1. **Testing is a critical gap** - Multiple issues indicate PHP SDK testing capabilities lag behind other SDKs (Go, Java). Users explicitly request parity features.

2. **Documentation debt** - The top upvoted issue (#592) highlights missing marshaller documentation, a fundamental concept for data serialization.

3. **Long-standing bugs** - Issues like #123 (session worker, 4+ years) suggest incomplete feature implementations that should be either fixed or explicitly deprecated.

4. **Dependency management** - Recent bugs (#692, #689) affect the installation experience and should be prioritized for user adoption.

5. **Community engagement** - The backwards compatibility discussion (#495) shows a sophisticated user base concerned with long-term maintainability.

**Key Insight:** The PHP SDK would benefit from focused investment in testing infrastructure and documentation to match user expectations set by other Temporal SDKs.
