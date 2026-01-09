# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 22
**Total Closed Issues:** 158
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md)

---

## Executive Summary

The Ruby SDK is the newest Temporal SDK, having reached general availability status recently. With only 22 open issues and an 88% resolution rate, the SDK demonstrates strong maintenance. The majority of open issues (17) are enhancement requests rather than bugs, reflecting a maturing SDK with a focus on feature expansion rather than stability concerns.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | Medium - Two platform-specific (Windows, Ruby 3.1/3.2), two integration issues |
| Enhancements | 17 | Medium - Focused on Rails integration, Nexus, and developer experience |
| Platform Compatibility | 2 | Low - Windows CI and older Ruby versions |
| Rails Integration | 2 | High - ActiveModel compatibility issues affect common Rails patterns |

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

1. **Immediate:** Address ActiveModel/Rails compatibility ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) - this blocks common Rails patterns
2. **Short-term:** Fix ScopedLogger semantic_logger compatibility ([#315](https://github.com/temporalio/sdk-ruby/issues/315))
3. **Medium-term:** Complete Nexus implementation ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) and Worker Versioning ([#270](https://github.com/temporalio/sdk-ruby/issues/270))
4. **Long-term:** Address workflow local storage ([#179](https://github.com/temporalio/sdk-ruby/issues/179)) and testing improvements
5. **Housekeeping:** Evaluate stale issues related to Ruby 3.1/3.2 fiber support ([#162](https://github.com/temporalio/sdk-ruby/issues/162))

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The SDK shows a slightly growing backlog with 5 more issues opened than closed over the past year. However, recent months show improved closure rates with net negative changes in September, October, and January.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 69 | +5 |

📈 **Backlog Growing:** 5 more issues opened than closed in the last 12 months, though recent months show stabilization.

### Last 6 Months: Detailed Analysis

The last 6 months show healthy activity with more issues closed than opened, indicating the team is making progress on the backlog.

| Metric | Value |
|--------|-------|
| Issues Opened | 26 |
| Issues Closed | 29 |
| Net Change | -3 |
| Bugs Closed | 5 |
| Enhancements Completed | 22 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. This is expected for a newer SDK with generally low engagement metrics.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | Look into client-side trimming of failures to avoid server-side wrap-and-truncate |
| 2 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | Update build-gems GH workflow smoke test to use macOS Intel |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 5 | Look into client-side trimming of failures |
| 2 | [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | Investigate issue with Ruby 3.1/3.2 and worker fibers |
| 3 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger fails with semantic_logger |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | Update build-gems GH workflow smoke test |
| 5 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Testing workflows with signals in time-skipping environment |
| 6 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | Ensure fibers and workflow instances are properly GC'd |
| 7 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 1 | Serialization context for codecs and converters |
| 8 | [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 1 | Contributing Guide |
| 9 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (4 issues)

The Ruby SDK has only 4 open bugs, reflecting its recent development and clean architecture.

#### High Priority - Rails/ActiveModel Compatibility

| Issue | Comments | Description |
|-------|-----|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | ActiveModel uses `ConcurrentMap` with `Thread::Mutex` which is forbidden in workflows. This affects common patterns like accessing model attributes. Stack traces show `NondeterminismError` when using ActiveModel in workflows. |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger fails when using `semantic_logger` (a popular Rails logging library) because it uses symbols for log levels instead of integers. A PR was opened for a related `Logger::Unknown` constant issue. |

#### Medium Priority - Platform Compatibility

| Issue | Comments | Description |
|-------|-----|-------------|
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | Fiber-based workers hang in Ruby 3.1/3.2 but work in Ruby 3.3+. Queue push from separate thread may not wake up fibers. Currently mitigated by only allowing Fiber-based workers in Ruby 3.3+. |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | Windows CI segfaulting during tests. Investigation shows `parking_lot::RawMutex::lock_slow` calling `rb_w32_Sleep` unexpectedly, possibly due to header conflicts. |

### Analysis of ActiveModel Issue (#355)

This is the most impactful bug for Rails users. The SDK's illegal call tracer detects when workflows use synchronization primitives like `Thread::Mutex`. However, ActiveModel's `ConcurrentMap` internally uses mutexes for thread-safety. Proposed solutions include:
- A `WorkflowSafeObject` mixin that wraps calls with `Workflow::Unsafe::durable_scheduler_disabled`
- Smarter detection that checks the backtrace for known-safe library calls

---

## Enhancement Requests (17 issues)

### Core SDK Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | Initial Nexus implementation - Temporal-specific implementation needed alongside Nexus Ruby SDK |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | Worker Versioning high-level client for control plane operations |
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | 0 | Support non-workflow activities - Execute activities without a workflow context |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | Allow overriding Worker Deployment Version when invoking child workflows |

### Workflow API Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | Provide "workflow local" storage - `Workflow["myValue"]` for workflow-scoped data |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | Warn on unawaited workflow futures with failures |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | Deadlock detection - improve interruption and stack trace reporting |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | Add explicit memoization support to `patched()` API |
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | Ensure fibers and workflow instances are properly GC'd on workflow eviction |
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | Client-side trimming of failures to avoid server-side wrap-and-truncate |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs and converters |
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | Require payload codec from data converter file |

### Build & Testing Infrastructure

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | Support buildable source gem for obscure environments |
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | Update build-gems workflow smoke test to use macOS Intel |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | Remove Go from test pipeline - use pure Ruby kitchen sink workflow |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test randomness seed update over reset |
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | Improve testing documentation for workflows with signals in time-skipping environment |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | Contributing Guide - documentation for contributors |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

4 issues have not been updated in over 12 months:

| Issue | Last Updated | Title |
|-------|--------------|-------|
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 2025-01-08 | Warn on unawaited workflow futures with failures |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 2025-01-07 | Provide "workflow local" |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 2024-10-17 | Windows CI segfaulting during tests |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 2024-10-10 | Investigate issue with Ruby 3.1/3.2 and worker fibers |

**Recommendations:**
- **Close candidates:** [#162](https://github.com/temporalio/sdk-ruby/issues/162) - Ruby 3.1/3.2 are approaching EOL, and the issue is mitigated by requiring Ruby 3.3+ for fiber-based workers
- **Needs triage:** [#172](https://github.com/temporalio/sdk-ruby/issues/172) - Determine if Windows support is a priority
- **Keep open:** [#179](https://github.com/temporalio/sdk-ruby/issues/179), [#185](https://github.com/temporalio/sdk-ruby/issues/185) - Valid feature requests that are part of SDK feature parity

### Duplicate Candidates

No obvious duplicate issues identified. The issue set is small and well-organized.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Rails Compatibility (Immediate)

- **[#355](https://github.com/temporalio/sdk-ruby/issues/355):** Implement `WorkflowSafeObject` mixin or smart ActiveModel detection
- **[#315](https://github.com/temporalio/sdk-ruby/issues/315):** Make ScopedLogger compatible with semantic_logger's symbol-based levels

### Phase 2: Core Feature Expansion (Short-term)

- **[#232](https://github.com/temporalio/sdk-ruby/issues/232):** Complete Nexus implementation for cross-namespace communication
- **[#270](https://github.com/temporalio/sdk-ruby/issues/270):** Implement Worker Versioning high-level client
- **[#179](https://github.com/temporalio/sdk-ruby/issues/179):** Add workflow-local storage API

### Phase 3: Developer Experience (Medium-term)

- **[#319](https://github.com/temporalio/sdk-ruby/issues/319):** Client-side failure trimming
- **[#218](https://github.com/temporalio/sdk-ruby/issues/218):** Buildable source gem support
- **[#360](https://github.com/temporalio/sdk-ruby/issues/360):** Improve testing documentation for signal-driven workflows
- **[#203](https://github.com/temporalio/sdk-ruby/issues/203):** Create comprehensive contributing guide

### Phase 4: Maintenance (Ongoing)

- Close Ruby 3.1/3.2 fiber-related issues as these versions approach EOL
- Evaluate Windows CI priorities
- Continue aligning with cross-SDK feature parity initiatives

---

## SDK Maturity Assessment

The Ruby SDK is in a healthy state for a relatively new SDK:

| Aspect | Status | Notes |
|--------|--------|-------|
| Core Functionality | Stable | 88% resolution rate, few critical bugs |
| Rails Integration | Needs Work | ActiveModel compatibility is a significant gap |
| Documentation | Good | README well-maintained, contributing guide requested |
| Platform Support | Limited | Windows and older Ruby versions have known issues |
| Feature Parity | In Progress | Nexus, Worker Versioning, and other features pending |

The SDK's small issue count (22 open) and high resolution rate (88%) suggest a well-maintained codebase with responsive maintainers. The focus should be on Rails ecosystem compatibility and feature expansion rather than stability concerns.
