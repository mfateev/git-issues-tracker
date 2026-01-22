# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 22
**Total Closed Issues:** 158
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The Ruby SDK demonstrates excellent health with an 88% resolution rate (158/180 total issues) and only 22 open issues - the second smallest backlog among Temporal SDKs. The SDK is relatively new, having reached 1.0 status recently, and maintains a manageable backlog with focused attention on completing core features like Nexus support and Worker Versioning. The primary concerns are Ruby version compatibility issues with fibers, ActiveModel integration challenges, and logging compatibility with popular Ruby logging libraries.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | High - Fiber compatibility issues with Ruby 3.1/3.2 and ActiveModel sync construct failures |
| Enhancements | 17 | Medium - Core feature gaps (Nexus, Worker Versioning) and developer experience improvements |
| Testing Infrastructure | 2 | Medium - Time-skipping test environment issues with signals |
| Platform/CI Issues | 2 | Low - Windows CI segfaults and macOS Intel smoke tests |
| Stale Issues | 6 | Medium - 27% of open issues have no activity >12 months |

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

1. **Immediate:** Investigate and fix Ruby 3.1/3.2 fiber worker issues ([#162](https://github.com/temporalio/sdk-ruby/issues/162)) which have significant discussion
2. **Short-term:** Address ActiveModel compatibility bug ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) blocking common Rails patterns and ScopedLogger symbol comparison bug ([#315](https://github.com/temporalio/sdk-ruby/issues/315))
3. **Medium-term:** Complete Nexus implementation ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) and Worker Versioning client ([#270](https://github.com/temporalio/sdk-ruby/issues/270))
4. **Long-term:** Implement failure trimming ([#319](https://github.com/temporalio/sdk-ruby/issues/319)) - most upvoted enhancement
5. **Housekeeping:** Review 6 stale issues (27% of backlog) for closure or prioritization

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The SDK shows a slightly growing backlog, but with generally balanced activity throughout the year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 69 | +5 |

Backlog Growing: 5 more issues opened than closed in the last 12 months. This is a modest increase given the SDK's active development phase following its 1.0 release.

### Last 6 Months: Detailed Analysis

The last 6 months show healthy resolution activity with 4 more issues closed than opened, indicating the team is managing the backlog effectively.

| Metric | Value |
|--------|-------|
| Issues Opened | 23 |
| Issues Closed | 27 |
| Net Change | -4 |
| Bugs Closed | 5 |
| Enhancements Completed | 20 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 64 | 46 |
| Median Time to Close | 40 | 29 |
| 90th Percentile | 154 | 111 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#330](https://github.com/temporalio/sdk-ruby/issues/330) | 1 | Potential deadlock detected after upgrade to v0.6.0 |
| [#246](https://github.com/temporalio/sdk-ruby/issues/246) | 1 | Rails Integration |
| [#310](https://github.com/temporalio/sdk-ruby/issues/310) | 1 | Research and maybe implement disallowing all Ruby stdlib sync constructs in workflows |

No issues with 3+ upvotes were closed in the last 6 months. The Ruby SDK's smaller user community compared to more established SDKs results in generally lower upvote counts.

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
| 3 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger fails attempting to compare symbol to integer |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | Update build-gems GH workflow smoke test to use macOS Intel |
| 5 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Testing Workflows with Signals in Time-Skipping Environment |
| 6 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | Ensure fibers and workflow instances are properly GC'd on eviction |
| 7 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 1 | Serialization context for codecs and converters |
| 8 | [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 1 | Contributing Guide |
| 9 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (4 issues)

The Ruby SDK has 4 open bugs, primarily related to Ruby runtime compatibility and library integration challenges.

#### High Priority - Ruby Compatibility Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | **Ruby 3.1/3.2 fiber worker issues.** Investigation into compatibility problems between the SDK's fiber-based worker model and specific Ruby versions. Highest engagement among open issues. |
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | **ActiveModel fails in workflows.** Common ActiveModel uses fail because they internally use ConcurrentMap with Thread::Mutex, which is forbidden in workflows. This blocks using ActiveModel::Attributes in workflow code, a common Rails pattern. |

#### Medium Priority - Library Integration Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | **ScopedLogger symbol comparison error.** The SDK's ScopedLogger fails when used with libraries like semantic_logger that use symbols instead of integers for log levels. Causes crashes during logging operations. |

#### Platform Issues

| Issue | Comments | Description |
|-------|-----|-------------|
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | **Windows CI segfaulting.** Intermittent segfaults during test runs on Windows CI. May be related to fiber scheduling or native extension issues. |

---

## API & Component Hotspots

Based on semantic analysis of issues, the following areas have the most issues:

| Area | Issue Count | Key Concerns |
|------|-------------|--------------|
| test-framework | 10 | Time-skipping tests with signals, test randomness seed |
| fiber-scheduler | 4 | Ruby version compatibility, GC behavior |
| workflow-constraints | 2 | ActiveModel sync constructs, determinism |
| worker-versioning | 3 | High-level client implementation |
| serialization | 2 | Codec context, data conversion |
| logging | 2 | ScopedLogger compatibility |

---

## Enhancement Requests (17 issues)

### Core Feature Implementation

These are significant features being tracked for implementation to reach feature parity with other SDKs.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | **Nexus implementation** - Initial Nexus support for Ruby SDK |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | **Worker Versioning client** - High-level client for Worker Versioning API |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | **Child workflow deployment version override** - Allow overriding deployment version when invoking child workflows |
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | 0 | **Non-workflow activities** - Support executing activities outside workflow context |

### Workflow & Activity Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | **Client-side failure trimming** - Avoid server-side wrap-and-truncate by trimming failures on client |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | **Workflow local storage** - Provide thread-local-like storage scoped to workflows |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | **Unawaited future warnings** - Warn when workflow futures with failures are not awaited |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | **Improved deadlock detection** - Better interruption and stack traces for deadlock scenarios |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | **Patching API memoization** - Add explicit memoization support to patched() API |

### Data Handling & Serialization

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | **Serialization context** - Provide context to codecs and converters during serialization |
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | **Payload codec from data converter file** - Require payload codec configuration from data converter file |

### Testing Infrastructure

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | **Signal testing in time-skipping** - Issues testing workflows with signals in time-skipping environment |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | **Test randomness seed update** - Handle randomness seed updates over workflow reset |

### Memory & Resource Management

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | **Fiber GC on eviction** - Ensure fibers and workflow instances are properly garbage collected on workflow eviction |

### Build & Distribution

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | **macOS Intel smoke tests** - Update build-gems workflow to use macOS Intel for smoke tests |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | **Buildable source gem** - Support building from source gem for platforms without prebuilt binaries |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | **Remove Go from test pipeline** - Simplify CI by removing Go dependency from tests |

### Documentation & Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | **Contributing guide** - Create documentation for contributors |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

6 issues (27% of open issues) have had no activity for more than 12 months:

| Issue | Last Updated | Title |
|-------|--------------|-------|
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 2025-01-14 | Remove Go from test pipeline |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 2025-01-13 | Deadlock detection - improve interruption and stack trace |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 2025-01-08 | Warn on unawaited workflow futures with failures |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 2025-01-07 | Provide "workflow local" |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 2024-10-17 | Windows CI segfaulting during tests |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 2024-10-10 | Investigate issue with Ruby 3.1/3.2 and worker fibers |

**Recommendations:**
- **Keep open:** [#162](https://github.com/temporalio/sdk-ruby/issues/162) (Ruby compatibility) and [#191](https://github.com/temporalio/sdk-ruby/issues/191) (deadlock detection) - valid issues requiring attention
- **Needs triage:** [#172](https://github.com/temporalio/sdk-ruby/issues/172) (Windows CI) - determine if Windows support is a priority
- **Review for closure:** [#192](https://github.com/temporalio/sdk-ruby/issues/192) (Remove Go from tests) - verify if still relevant to current CI setup

### Duplicate Candidates

No obvious duplicates detected among open issues.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix Ruby 3.1/3.2 fiber compatibility issues ([#162](https://github.com/temporalio/sdk-ruby/issues/162))
- Address ActiveModel workflow constraints ([#355](https://github.com/temporalio/sdk-ruby/issues/355))
- Fix ScopedLogger symbol comparison error ([#315](https://github.com/temporalio/sdk-ruby/issues/315))

### Phase 2: Developer Experience (Short-term)

- Improve time-skipping test support for signals ([#360](https://github.com/temporalio/sdk-ruby/issues/360))
- Implement workflow local storage ([#179](https://github.com/temporalio/sdk-ruby/issues/179))
- Enhance deadlock detection messaging ([#191](https://github.com/temporalio/sdk-ruby/issues/191))

### Phase 3: Feature Expansion (Medium-term)

- Complete Nexus implementation ([#232](https://github.com/temporalio/sdk-ruby/issues/232))
- Implement Worker Versioning high-level client ([#270](https://github.com/temporalio/sdk-ruby/issues/270))
- Add client-side failure trimming ([#319](https://github.com/temporalio/sdk-ruby/issues/319))

### Phase 4: Maintenance (Ongoing)

- Review and close stale issues
- Improve build and distribution (source gem support [#218](https://github.com/temporalio/sdk-ruby/issues/218))
- Create contributing guide ([#203](https://github.com/temporalio/sdk-ruby/issues/203))
