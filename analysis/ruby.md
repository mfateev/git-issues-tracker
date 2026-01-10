# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 22
**Total Closed Issues:** 158
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md)

---

## Executive Summary

The Ruby SDK is Temporal's newest SDK, having recently reached general availability. With only 22 open issues and an impressive 88% resolution rate (158/180), the SDK demonstrates excellent maintenance. The vast majority of open issues (17) are enhancement requests rather than bugs, indicating a stable foundation with focus now shifting to feature expansion and Rails ecosystem compatibility.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | Medium - Two Rails integration issues, two platform-specific (Windows, Ruby 3.1/3.2) |
| Enhancements | 17 | Medium - Focused on Nexus, Worker Versioning, and workflow API improvements |
| Rails/ActiveModel Integration | 2 | High - ActiveModel and semantic_logger compatibility affect common Rails patterns |
| Platform Compatibility | 2 | Low - Windows CI and older Ruby version fiber support |

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

1. **Immediate:** Address ActiveModel/Rails compatibility ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) - this blocks common Rails patterns using models in workflows
2. **Short-term:** Fix ScopedLogger semantic_logger compatibility ([#315](https://github.com/temporalio/sdk-ruby/issues/315)) - affects Rails users with popular logging libraries
3. **Medium-term:** Complete Nexus implementation ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) and Worker Versioning ([#237](https://github.com/temporalio/sdk-ruby/issues/237))
4. **Long-term:** Implement workflow local storage ([#179](https://github.com/temporalio/sdk-ruby/issues/179)) and improve testing documentation
5. **Housekeeping:** Evaluate stale issues for Ruby 3.1/3.2 fiber support ([#162](https://github.com/temporalio/sdk-ruby/issues/162)) as these versions approach EOL

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The SDK shows a slightly growing backlog with 5 more issues opened than closed over the past year. However, the last 6 months show a net reduction of 3 issues, indicating the team is making steady progress.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 69 | +5 |

📈 **Backlog Growing:** 5 more issues opened than closed in the last 12 months, though recent months show stabilization with net decreases in September (-6), October (0), and January (-2).

### Last 6 Months: Detailed Analysis

The last 6 months demonstrate healthy activity with more issues closed than opened, particularly strong enhancement completion.

| Metric | Value |
|--------|-------|
| Issues Opened | 26 |
| Issues Closed | 29 |
| Net Change | -3 |
| Bugs Closed | 5 |
| Enhancements Completed | 22 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. This is expected for a newer SDK with generally low engagement metrics. The SDK's small user base compared to more established SDKs results in lower upvote counts overall.

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

The Ruby SDK has only 4 open bugs, reflecting its recent development and clean architecture. Two bugs relate to Rails ecosystem integration, while two are platform-specific issues.

#### High Priority - Rails/ActiveModel Compatibility

| Issue | Comments | Description |
|-------|-----|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | **ActiveModel uses forbidden sync constructs in workflows.** ActiveModel's `ConcurrentMap` uses `Thread::Mutex` internally, triggering `NondeterminismError` when using common Rails patterns like model attribute access. This affects users using ActiveModel-based classes for workflow inputs/outputs. Proposed solution: implement a `WorkflowSafeObject` mixin that wraps calls with `Workflow::Unsafe::durable_scheduler_disabled`. |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | **ScopedLogger fails with semantic_logger.** The popular `rails_semantic_logger` gem uses symbols for log levels (`:debug`, `:info`) instead of integers, causing type comparison failures. While this is technically a semantic_logger deviation from Ruby's Logger interface, it affects many Rails projects. A PR (#316) was opened for a related `Logger::Unknown` constant typo. |

#### Medium Priority - Platform Compatibility

| Issue | Comments | Description |
|-------|-----|-------------|
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | **Fiber-based workers hang in Ruby 3.1/3.2.** Queue push from a separate thread may not wake up waiting fibers in pre-3.3 Ruby. Likely related to M:N scheduling introduced in Ruby 3.3. Currently mitigated by requiring Ruby 3.3+ for fiber-based workers. Given Ruby 3.1 EOL in spring 2025 and 3.2 one year later, this may not warrant significant investigation. |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | **Windows CI segfaulting during tests.** Investigation shows `parking_lot::RawMutex::lock_slow` unexpectedly calling `rb_w32_Sleep`, possibly due to Rust/Ruby header conflicts in the MSYS2/MinGW environment. Low priority given limited Windows usage in the Ruby ecosystem. |

---

## Enhancement Requests (17 issues)

### Core SDK Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | **Initial Nexus implementation** - Temporal-specific implementation for cross-namespace/cross-cluster communication |
| [#237](https://github.com/temporalio/sdk-ruby/issues/237) | 0 | **Support New Worker Versioning API** - High-level client for worker versioning control plane operations |
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | 0 | **Support non-workflow activities** - Execute activities without a workflow context |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | **Allow overriding Worker Deployment Version** when invoking child workflows |

### Workflow API Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | **Client-side failure trimming** - Prevent server-side wrap-and-truncate of large failure payloads. A cross-SDK algorithm is being designed (see features#597). Most upvoted open issue. |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | **Provide "workflow local" storage** - Proposed API: `Workflow["myValue"]` for workflow-scoped data similar to thread-local and fiber-local patterns |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | **Warn on unawaited workflow futures with failures** - Matches behavior in Java and other SDKs |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | **Add explicit memoization support to `patched()` API** |
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | **Ensure fibers and workflow instances are properly GC'd** on workflow eviction - Investigation shows this may not be an issue, but deterministic testing is difficult |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | **Serialization context for codecs and converters** - Cross-SDK feature (see features#434), now needs to include Nexus support (features#678) |
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | **Require payload codec from data converter file** |

### Testing Infrastructure

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | **Improve time-skipping test documentation for signal-driven workflows** - Users report confusion about when automatic time-skipping kicks in (only after waiting for workflow result). Documentation and possibly test helpers needed. |
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | **Update build-gems workflow for macOS Intel** - macOS 13 runner removed due to CA certificate issues |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | **Remove Go from test pipeline** - Use pure Ruby kitchen sink workflow |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | **Test randomness seed update over reset** |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | **Support buildable source gem** - For obscure environments where prebuilt gems are unavailable |
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | **Contributing Guide** - Currently developers are directed to README's Development section and Slack |

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

- **Close candidates:**
  - [#162](https://github.com/temporalio/sdk-ruby/issues/162) - Ruby 3.1 is EOL (spring 2025) and 3.2 approaches EOL. Issue is mitigated by requiring Ruby 3.3+ for fiber-based workers. Unless users actively request this, close as "won't fix".

- **Needs triage:**
  - [#172](https://github.com/temporalio/sdk-ruby/issues/172) - Windows CI issue. Determine if Windows is a supported platform for the Ruby SDK. If not, close with documentation update. If yes, consider priority.

- **Keep open:**
  - [#179](https://github.com/temporalio/sdk-ruby/issues/179) - Valid feature request for workflow-local storage, part of SDK feature parity (features#571)
  - [#185](https://github.com/temporalio/sdk-ruby/issues/185) - Valid feature request matching other SDK behavior

### Duplicate Candidates

No obvious duplicate issues identified. The issue set is small (22 open) and well-organized.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Rails Compatibility (Immediate)

- **[#355](https://github.com/temporalio/sdk-ruby/issues/355):** Implement `WorkflowSafeObject` mixin or smart detection to allow ActiveModel usage in workflows without triggering false `NondeterminismError`
- **[#315](https://github.com/temporalio/sdk-ruby/issues/315):** Make ScopedLogger compatible with semantic_logger's symbol-based log levels, or document workaround

### Phase 2: Core Feature Expansion (Short-term)

- **[#232](https://github.com/temporalio/sdk-ruby/issues/232):** Complete Nexus implementation for cross-namespace/cluster communication
- **[#237](https://github.com/temporalio/sdk-ruby/issues/237):** Implement Worker Versioning high-level client
- **[#319](https://github.com/temporalio/sdk-ruby/issues/319):** Implement client-side failure trimming (coordinate with cross-SDK effort)

### Phase 3: Developer Experience (Medium-term)

- **[#179](https://github.com/temporalio/sdk-ruby/issues/179):** Add workflow-local storage API (`Workflow["key"]`)
- **[#360](https://github.com/temporalio/sdk-ruby/issues/360):** Improve time-skipping test documentation and potentially add helper methods for signal-driven workflow testing
- **[#218](https://github.com/temporalio/sdk-ruby/issues/218):** Provide buildable source gem for environments without prebuilt gems
- **[#203](https://github.com/temporalio/sdk-ruby/issues/203):** Create comprehensive contributing guide

### Phase 4: Maintenance (Ongoing)

- Close Ruby 3.1/3.2 fiber-related issues as these versions reach EOL
- Evaluate Windows CI priorities based on user demand
- Continue aligning with cross-SDK feature parity initiatives (serialization context, Worker Versioning, Nexus)

---

## SDK Maturity Assessment

The Ruby SDK is in excellent health for a recently GA'd SDK:

| Aspect | Status | Notes |
|--------|--------|-------|
| Core Functionality | Stable | 88% resolution rate, only 4 bugs (none critical) |
| Rails Integration | Needs Work | ActiveModel and semantic_logger compatibility gaps |
| Documentation | Good | README comprehensive, contributing guide requested |
| Platform Support | Linux/macOS | Windows has known issues, older Ruby versions limited |
| Feature Parity | In Progress | Nexus, Worker Versioning, workflow-local pending |
| Test Infrastructure | Functional | Time-skipping environment works but needs better docs |

The SDK's small issue count (22 open) and high resolution rate (88%) demonstrate a well-maintained codebase with responsive maintainers. The primary focus areas should be:

1. **Rails ecosystem compatibility** - The two ActiveModel/logging bugs are the most impactful for Rails users
2. **Feature expansion** - Nexus and Worker Versioning for feature parity with other SDKs
3. **Developer experience** - Better testing documentation and contributing guides
