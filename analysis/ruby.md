# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 22
**Total Closed Issues:** 158
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md)

---

## Executive Summary

The Ruby SDK demonstrates exceptional health with the highest resolution rate (88%) among all Temporal SDKs, the lowest stale issue percentage (18%), and a manageable backlog of just 22 open issues. The SDK is relatively new and actively maintained, with clear focus on stability and Ruby ecosystem integration. Key concerns center around Ruby version compatibility (3.1/3.2 fiber issues), Rails/ActiveModel integration challenges, and Windows platform support.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | High - Includes Rails integration and platform issues |
| Enhancements/Features | 17 | Medium - Most are quality-of-life improvements |
| Stale Issues | 4 | Low - 18% stale rate, lowest among SDKs |

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
| Resolution Rate | 88% (158/180) - Highest among SDKs |
| Median Time to Close | 49 days (calendar) / 35 days (business) |
| Resolved within 30 days | 42% |
| Resolved within 90 days | 62% |

### Recommended Actions

1. **Immediate:** Address Rails/ActiveModel integration issue ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) blocking common use cases
2. **Short-term:** Fix ScopedLogger symbol comparison bug ([#315](https://github.com/temporalio/sdk-ruby/issues/315))
3. **Medium-term:** Implement Nexus support ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) and client-side failure trimming ([#319](https://github.com/temporalio/sdk-ruby/issues/319))
4. **Long-term:** Resolve Ruby 3.1/3.2 fiber compatibility ([#162](https://github.com/temporalio/sdk-ruby/issues/162)) and Windows CI issues ([#172](https://github.com/temporalio/sdk-ruby/issues/172))
5. **Housekeeping:** Review 4 stale issues for closure or renewed attention

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Ruby SDK backlog is experiencing slight growth but remains healthy given the small absolute numbers.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 69 | +5 |

The backlog growth is minimal. The SDK is actively maintained with consistent issue resolution.

### Last 6 Months: Detailed Analysis

The last 6 months show the backlog actually shrinking, indicating strong maintainer attention and catch-up.

| Metric | Value |
|--------|-------|
| Issues Opened | 26 |
| Issues Closed | 29 |
| Net Change | -3 |
| Bugs Closed | 5 |
| Enhancements Completed | 22 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months, as the SDK has relatively low engagement due to its newer status. The most popular open issue ([#319](https://github.com/temporalio/sdk-ruby/issues/319) with 2 upvotes) focuses on client-side failure trimming.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | Client-side trimming of failures to avoid server-side wrap-and-truncate |
| 2 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | Update build-gems GH workflow smoke test to use macOS Intel |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 5 | Client-side trimming of failures |
| 2 | [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | Ruby 3.1/3.2 worker fibers issue |
| 3 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger symbol comparison bug |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | Update build-gems workflow |
| 5 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Testing workflows with signals |
| 6 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | Ensure fibers and workflow instances are GC'd |
| 7 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 1 | Serialization context for codecs |
| 8 | [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 1 | Contributing Guide |
| 9 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | Windows CI segfaulting |

---

## Issue Analysis by Category

### Bugs (4 open issues)

#### High Priority - Rails/Framework Integration

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | **ActiveModel fails in workflows due to sync construct use** - Many common uses of ActiveModel use `ConcurrentMap` under the hood which uses `Thread::Mutex`, forbidden in workflows. This affects accessing attributes and using models with `ActiveModel::Attributes`. Stack traces show errors from `concurrent-ruby`'s `ConcurrentMap` when used within workflows. Potential fix: a `WorkflowSafeObject` mixin that wraps calls with `Workflow::Unsafe::durable_scheduler_disabled`. |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 0 | **ScopedLogger symbol comparison bug** - When using `rails_semantic_logger` which uses symbols for log levels (instead of integers), the SDK's `ScopedLogger` fails to compare symbol to integer. Workaround: switch to default Rails logger. Root cause: `semantic_logger` returns symbols for levels while standard `Logger` uses integers. |

#### Lower Priority - Platform & Compatibility

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 0 | **Windows CI segfaulting** - Tests fail on Windows with segfaults. Investigation shows `parking_lot::raw_mutex::RawMutex::lock_slow` calling `rb_w32_Sleep`, likely due to Ruby headers interfering with Rust build. Low priority as Windows is not primary platform, but blocks Windows users. |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 0 | **Ruby 3.1/3.2 worker fibers issue** - Fibers waiting on `queue.pop` are not woken up by `queue.push` from another thread in pre-3.3 Ruby. Possibly related to M:N scheduling introduced in Ruby 3.3. Low priority as Ruby 3.1 is EOL and 3.2 will be EOL in late 2026. Threads work across all versions. |

### Ruby Compatibility (2 issues)

The SDK requires Ruby 3.2+ and has fiber-related issues on older versions.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 0 | Ruby 3.1/3.2 fiber scheduling issue - fibers not waking on queue push |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 0 | Windows platform compatibility with Rust native extension |

### Testing & Developer Experience (3 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | **Testing workflows with signals in time-skipping environment** - User confusion about how automatic time-skipping works with signals. Maintainer clarified: time-skipping only kicks in when waiting for workflow result; manual `env.sleep` can advance time. Documentation could be clearer. |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test randomness seed update over reset |
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | Contributing Guide - README has development section but formal guide requested |

---

## Enhancement Requests (17 issues)

### Nexus & Cross-SDK Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | **Initial Nexus implementation** - Cross-namespace workflow orchestration. Tracked via features/issues/609. Strategic feature for SDK parity. |
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | **Client-side failure trimming** - Avoid server-side wrap-and-truncate of large failure protos. Algorithm discussed in features/issues/597. User-visible improvement. |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | **Serialization context for codecs** - Include context in serialization operations, needed for Nexus per features/issues/678. |

### Worker & Workflow Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | 0 | **Non-workflow activities** - Support executing activities without a workflow, using upcoming server APIs (api/pull/640). |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | **Override Worker Deployment Version** - Allow overriding deployment version when invoking workflows. |
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | **Ensure fibers and workflow instances are GC'd** - Verify no memory leak with suspended fibers. Investigation in PRs #335 and #336 suggests no leak but deterministic test is difficult. |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | **Worker Versioning high-level client** - Support for the worker versioning feature. |

### Build & Infrastructure

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | **Update build-gems workflow** - Change smoke test from macOS ARM to macOS Intel. |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | **Support buildable source gem** - Allow users to build gem from source. |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | **Remove Go from test pipeline** - Clean up build dependencies. |

### Workflow Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | **Require payload codec from data converter file** - Simplify codec configuration. |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | **Explicit memoization support for patched() API** - Improve versioning API ergonomics. |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | **Deadlock detection improvements** - Better interruption and stack traces for deadlock detection. |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | **Warn on unawaited workflow futures with failures** - Prevent silent failures from unawaited promises. |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | **Provide "workflow local"** - Thread-local-like storage for workflows. |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

Only 4 issues (18% of open issues) have had no activity in over 12 months - the lowest stale rate among all SDKs.

| Issue | Last Updated | Description |
|-------|--------------|-------------|
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 2025-01-08 | Warn on unawaited workflow futures |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 2025-01-07 | Provide "workflow local" |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 2024-10-17 | Windows CI segfaulting |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 2024-10-10 | Ruby 3.1/3.2 fiber issue |

**Close candidates:**
- [#162](https://github.com/temporalio/sdk-ruby/issues/162) - Consider closing with note that Ruby 3.1 is EOL and 3.2 will be soon; recommend Ruby 3.3+
- [#172](https://github.com/temporalio/sdk-ruby/issues/172) - Windows support is low priority; could close as "won't fix" or downgrade to "help wanted"

**Needs triage:**
- [#185](https://github.com/temporalio/sdk-ruby/issues/185) - Valid feature request, needs prioritization decision
- [#179](https://github.com/temporalio/sdk-ruby/issues/179) - Valid feature request, needs prioritization decision

### Duplicate Candidates

No obvious duplicates identified. The Ruby SDK issue set is well-maintained and curated.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Rails integration:**
  - [#355](https://github.com/temporalio/sdk-ruby/issues/355) - Fix ActiveModel integration with `WorkflowSafeObject` mixin approach
- **Logging:**
  - [#315](https://github.com/temporalio/sdk-ruby/issues/315) - Make ScopedLogger compatible with semantic_logger's symbol-based levels

### Phase 2: Developer Experience (Short-term)

- **Error handling:**
  - [#319](https://github.com/temporalio/sdk-ruby/issues/319) - Implement client-side failure trimming
- **Documentation:**
  - Improve time-skipping test environment documentation (per [#360](https://github.com/temporalio/sdk-ruby/issues/360))
  - [#203](https://github.com/temporalio/sdk-ruby/issues/203) - Create contributing guide

### Phase 3: Feature Expansion (Medium-term)

- **Nexus support:**
  - [#232](https://github.com/temporalio/sdk-ruby/issues/232) - Initial Nexus implementation
  - [#238](https://github.com/temporalio/sdk-ruby/issues/238) - Serialization context for Nexus
- **Worker features:**
  - [#270](https://github.com/temporalio/sdk-ruby/issues/270) - Worker Versioning high-level client
  - [#367](https://github.com/temporalio/sdk-ruby/issues/367) - Non-workflow activities (depends on server API)

### Phase 4: Platform Expansion (Long-term)

- **Ruby compatibility:**
  - [#162](https://github.com/temporalio/sdk-ruby/issues/162) - Investigate Ruby 3.1/3.2 fiber issues (or document as unsupported)
- **Windows support:**
  - [#172](https://github.com/temporalio/sdk-ruby/issues/172) - Fix Windows CI (low priority)

### Phase 5: Maintenance (Ongoing)

- Review and close the 4 stale issues
- Monitor Ruby version EOL dates and update minimum version requirements
- Continue excellent resolution rate trend
- Keep engagement with Ruby community via Slack #ruby-sdk channel
