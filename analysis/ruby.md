# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-13
**Total Open Issues:** 22
**Total Closed Issues:** 158
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md) - [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The Ruby SDK is the newest Temporal SDK with an impressive 88% resolution rate (158/180 issues). The SDK reached GA status in early 2025 and has maintained a healthy development pace with only 22 open issues. The backlog has grown slightly (+5 net) over the last 12 months, but recent months show stabilization with net reduction. The open issues are primarily enhancement requests (17/22), with only 4 bugs. Key areas requiring attention include ActiveModel/Rails integration, fiber scheduler edge cases, and testing framework improvements. The SDK has low community engagement (only 3 total upvotes on open issues), suggesting either a smaller user base or high satisfaction with current functionality.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | High - Include Rails integration and fiber issues |
| Enhancements | 17 | Medium - Feature parity and developer experience |
| Testing Framework Issues | 3 | High - Affects user adoption |
| Stale Issues (>12 months) | 4 | Medium - Need triage decision |
| Security Issues | 0 | None currently open |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 3 |
| Total Comments | 15 |
| Issues with Upvotes | 2 (9%) |
| Issues with Comments | 8 (36%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 88% (158/180) |
| Median Time to Close | 49 days (calendar) / 35 days (business) |
| Resolved within 30 days | 42% |
| Resolved within 90 days | 62% |

### Recommended Actions

1. **Immediate:** Fix ActiveModel/Rails integration bug ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) - blocks common Rails patterns in workflows
2. **Short-term:** Investigate Ruby 3.1/3.2 fiber issues ([#162](https://github.com/temporalio/sdk-ruby/issues/162)) and ScopedLogger compatibility ([#315](https://github.com/temporalio/sdk-ruby/issues/315))
3. **Medium-term:** Implement Nexus support ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) for cross-SDK feature parity
4. **Long-term:** Client-side failure trimming ([#319](https://github.com/temporalio/sdk-ruby/issues/319) - 2 upvotes) to improve error handling
5. **Housekeeping:** Triage 4 stale issues - decide on Windows CI ([#172](https://github.com/temporalio/sdk-ruby/issues/172)) and workflow futures warning ([#185](https://github.com/temporalio/sdk-ruby/issues/185))

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Ruby SDK shows a slight growth in backlog but with stabilizing recent months.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 69 | +5 |

**Backlog Growing Slightly:** 5 more issues opened than closed in the last 12 months. However, the SDK started 2025 with heavy development activity (GA release) and has since stabilized.

| Month | Opened | Closed | Net |
|-------|--------|--------|-----|
| 2025-02 | 11 | 9 | +2 |
| 2025-03 | 7 | 5 | +2 |
| 2025-04 | 10 | 5 | +5 |
| 2025-05 | 10 | 9 | +1 |
| 2025-06 | 8 | 10 | -2 |
| 2025-07 | 6 | 8 | -2 |
| 2025-08 | 10 | 6 | +4 |
| 2025-09 | 3 | 9 | -6 |
| 2025-10 | 3 | 3 | 0 |
| 2025-11 | 3 | 0 | +3 |
| 2025-12 | 2 | 2 | 0 |
| 2026-01 | 1 | 3 | -2 |

### Last 6 Months: Detailed Analysis

The last 6 months show net backlog reduction with solid resolution performance.

| Metric | Value |
|--------|-------|
| Issues Opened | 25 |
| Issues Closed | 29 |
| Net Change | -4 |
| Bugs Closed | 5 |
| Enhancements Completed | 22 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 62 | 45 |
| Median Time to Close | 40 | 29 |
| 90th Percentile | 154 | 111 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#330](https://github.com/temporalio/sdk-ruby/issues/330) | 1 | Potential deadlock detected after upgrade to v0.6.0 |
| [#310](https://github.com/temporalio/sdk-ruby/issues/310) | 1 | Research and implement disallowing Ruby stdlib sync constructs in workflows |

### Recent Achievements

Several important features and fixes were completed in the last 6 months:

- **Plugin support** ([#318](https://github.com/temporalio/sdk-ruby/issues/318)) - Extensibility for user integrations
- **Worker heartbeating** ([#354](https://github.com/temporalio/sdk-ruby/issues/354)) - Connection health monitoring
- **OTel scheduler fixes** ([#359](https://github.com/temporalio/sdk-ruby/issues/359)) - Determinism in workflows with instrumentation
- **Ruby 4 compatibility** ([#364](https://github.com/temporalio/sdk-ruby/issues/364)) - Forward compatibility confirmed
- **Fiber state corruption fix** ([#373](https://github.com/temporalio/sdk-ruby/issues/373)) - Critical bug on x86_64 resolved

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | Look into client-side trimming of failures to avoid server-side wrap-and-truncate |
| 2 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | Update build-gems GH workflow smoke test to use macOS Intel |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 5 | Look into client-side trimming of failures |
| 2 | [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | Investigate issue with Ruby 3.1/3.2 and worker fibers |
| 3 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger fails comparing symbol to integer |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | Update build-gems workflow for macOS Intel |

---

## Issue Analysis by Category

### Bugs (4 open issues)

The bug count is low but includes critical integration issues affecting Rails users.

| Issue | Comments | Severity | Description |
|-------|----------|----------|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | High | ActiveModel fails in workflows due to ConcurrentMap/Mutex use |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | High | ScopedLogger incompatible with semantic_logger gem |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | High | Windows CI segfaulting during tests |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | High | Ruby 3.1/3.2 fiber worker hang issues |

#### High Priority Bug: ActiveModel Integration ([#355](https://github.com/temporalio/sdk-ruby/issues/355))

ActiveModel classes fail in workflows because they use `ConcurrentMap` internally, which relies on `Thread::Mutex` that is forbidden in deterministic workflows. This affects Rails users trying to use ActiveModel::Attributes in workflow code, causing `NondeterminismError`. This is a significant barrier for Rails adoption.

#### High Priority Bug: Logger Compatibility ([#315](https://github.com/temporalio/sdk-ruby/issues/315))

ScopedLogger fails when comparing log levels against non-integer values (symbols). Libraries like `semantic_logger` return symbols for `Logger#level` instead of integers, causing type comparison errors during workflow execution. This blocks users of popular Rails logging gems.

#### Platform Issues

- **Windows CI** ([#172](https://github.com/temporalio/sdk-ruby/issues/172)) - Segfaults in Rust bridge's parking_lot mutex, appears to be calling Ruby's `rb_w32_Sleep` from a non-Ruby thread
- **Ruby 3.1/3.2** ([#162](https://github.com/temporalio/sdk-ruby/issues/162)) - Fiber-based workers hang when Queue.push is called from separate thread; works in Ruby 3.3+

### Enhancements (17 open issues)

| Subcategory | Count | Key Issues |
|-------------|-------|------------|
| Feature Parity | 4 | Nexus, non-workflow activities, worker versioning |
| Developer Experience | 5 | Workflow local, payload codec, serialization context |
| Testing | 3 | Time-skipping signals, randomness seed, test pipeline |
| Infrastructure | 3 | Memory management, CI workflows, deadlock detection |
| Documentation | 2 | Contributing guide, patched() API |

---

## API & Component Hotspots

Based on semantic analysis, these components have the most associated issues:

| Component | Open Issues | Description |
|-----------|-------------|-------------|
| fiber-scheduler | 2 | Core concurrency mechanism - fiber state and GC issues |
| workflow-instance | 2 | Workflow execution - constraints and illegal call tracing |
| testing | 3 | Test framework - time-skipping and signal handling |
| worker | 3 | Worker lifecycle and versioning |
| serialization | 2 | Codecs and converters |

### Concept Frequency

| Concept | Issues | Description |
|---------|--------|-------------|
| determinism | 3 | Workflow determinism constraints |
| garbage-collection | 2 | Memory management on eviction |
| testing | 4 | Test framework functionality |
| versioning | 2 | Worker deployment versioning |
| nexus | 1 | Cross-service communication |

---

## Enhancement Requests by Theme

### 1. Cross-SDK Feature Parity

| Issue | Title | Priority |
|-------|-------|----------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | Initial Nexus implementation - Ruby | Medium |
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | Support non-workflow activities | Medium |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | Worker Versioning high level client | Medium |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | Serialization context for codecs and converters | Medium |

### 2. Testing Framework

| Issue | Title | Priority |
|-------|-------|----------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | Testing workflows with signals in time-skipping environment | High |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | Test randomness seed update over reset | Low |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | Remove Go from test pipeline | Low |

### 3. Worker & Runtime

| Issue | Title | Priority |
|-------|-------|----------|
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | Ensure fibers and workflow instances properly GC'd on eviction | Medium |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | Deadlock detection - improve interruption and stack trace | Medium |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | Allow overriding Worker Deployment Version for child workflows | Medium |

### 4. Developer Experience

| Issue | Title | Priority |
|-------|-------|----------|
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | Provide "workflow local" storage | Medium |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | Warn on unawaited workflow futures with failures | Medium |
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | Client-side trimming of failures | Medium |
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | Require payload codec from data converter file | Low |

### 5. Infrastructure & CI

| Issue | Title | Priority |
|-------|-------|----------|
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | Update build-gems workflow for macOS Intel | Low |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | Support buildable source gem | Low |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | Add explicit memoization support to patched() API | Low |

### 6. Documentation

| Issue | Title | Priority |
|-------|-------|----------|
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | Contributing Guide | Low |

---

## Housekeeping Recommendations

### Stale Issues (4 issues with no activity >12 months)

| Issue | Last Updated | Recommendation |
|-------|--------------|----------------|
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 2025-01-08 | Keep - Valid DX improvement |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 2025-01-07 | Keep - Valuable feature request |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 2024-10-17 | Review - Windows CI may need external fix or deprioritize |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 2024-10-10 | Keep - Document Ruby 3.3+ requirement or investigate fix |

### Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 0 | 0% |
| 1-3 months | 4 | 18% |
| 3-6 months | 5 | 23% |
| 6-12 months | 9 | 41% |
| 1-2 years | 4 | 18% |

The majority (82%) of open issues are under 12 months old, indicating good backlog management.

---

## Proposed Roadmap

### Phase 1: Stability (Q1 2026)

**Goal:** Fix critical bugs affecting Rails and logging integration

| Priority | Issue | Impact |
|----------|-------|--------|
| P0 | [#355](https://github.com/temporalio/sdk-ruby/issues/355) | Unblock ActiveModel/Rails users |
| P0 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | Unblock semantic_logger users |
| P1 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | Fix time-skipping test environment signals |
| P1 | [#162](https://github.com/temporalio/sdk-ruby/issues/162) | Document or fix Ruby 3.1/3.2 limitations |

### Phase 2: Feature Parity (Q2 2026)

**Goal:** Implement cross-SDK features for ecosystem consistency

| Priority | Issue | Impact |
|----------|-------|--------|
| P1 | [#232](https://github.com/temporalio/sdk-ruby/issues/232) | Nexus support for service mesh |
| P1 | [#270](https://github.com/temporalio/sdk-ruby/issues/270) | Worker versioning high-level client |
| P2 | [#367](https://github.com/temporalio/sdk-ruby/issues/367) | Non-workflow activities |
| P2 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | Serialization context |

### Phase 3: Developer Experience (Q3 2026)

**Goal:** Improve daily developer workflow

| Priority | Issue | Impact |
|----------|-------|--------|
| P2 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | Client-side failure trimming |
| P2 | [#179](https://github.com/temporalio/sdk-ruby/issues/179) | Workflow local storage |
| P2 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | Memory management on eviction |
| P3 | [#191](https://github.com/temporalio/sdk-ruby/issues/191) | Better deadlock detection |

### Phase 4: Infrastructure (Ongoing)

**Goal:** Improve CI/CD and platform support

| Priority | Issue | Impact |
|----------|-------|--------|
| P3 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | macOS Intel CI |
| P3 | [#218](https://github.com/temporalio/sdk-ruby/issues/218) | Source gem builds |
| P3 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | Windows CI (investigate effort) |

---

## Summary

The Ruby SDK is in excellent health with:

- **High resolution rate** (88%) demonstrating active maintenance
- **Low bug count** (4) with clear ownership by maintainers
- **Focused enhancement backlog** (17) aligned with cross-SDK roadmap
- **Minimal stale issues** (18%) requiring triage

**Key Priorities:**
1. Rails/ActiveModel integration fix ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) - critical for Ruby ecosystem adoption
2. Logger compatibility ([#315](https://github.com/temporalio/sdk-ruby/issues/315)) - common Rails logging patterns
3. Nexus implementation ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) - cross-SDK feature parity
4. Testing framework improvements ([#360](https://github.com/temporalio/sdk-ruby/issues/360)) - developer experience

The SDK team has demonstrated strong execution with recent completions including plugin support, worker heartbeating, Ruby 4 compatibility, and critical fiber state fixes. The roadmap focuses on Rails ecosystem compatibility and cross-SDK feature parity to support growing adoption.
