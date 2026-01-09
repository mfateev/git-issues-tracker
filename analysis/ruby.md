# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 22
**Total Closed Issues:** 3
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-sdk-ruby/issues.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md)

---

## Executive Summary

The Temporal Ruby SDK is a relatively young SDK with a small issue footprint (22 open issues) but a growing backlog (+14 net issues in the last 12 months). The SDK has a low resolution rate (12%) and limited community engagement (only 9% of issues have upvotes). Primary concerns are Ruby version compatibility issues, Rails/ActiveModel integration challenges, and pending feature requests for Nexus support and worker versioning.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | High - includes fiber compatibility and ActiveModel integration issues |
| Enhancements | 17 | Medium - dominated by internal SDK improvements and feature parity items |
| Stale Issues | 4 | Low - includes valid but unworked issues needing triage |

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
| Resolution Rate | 12% (3/25) |
| Median Time to Close | 36 days (calendar) / 27 days (business) |
| Resolved within 30 days | 33% |
| Resolved within 90 days | 67% |

### Recommended Actions

1. **Immediate:** Address [#355](../repos/temporalio-sdk-ruby/issues.md#355) ActiveModel compatibility - blocking Rails adoption
2. **Short-term:** Fix [#315](../repos/temporalio-sdk-ruby/issues.md#315) ScopedLogger bug for semantic_logger users
3. **Medium-term:** Investigate [#162](../repos/temporalio-sdk-ruby/issues.md#162) Ruby 3.1/3.2 fiber issue (though Ruby 3.2 EOL approaching)
4. **Long-term:** Implement Nexus support ([#232](../repos/temporalio-sdk-ruby/issues.md#232)) and Worker Versioning ([#270](../repos/temporalio-sdk-ruby/issues.md#270))
5. **Housekeeping:** Triage 4 stale issues (>12 months old) for closure or prioritization

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is steadily growing with minimal issue closures until a recent burst in January 2026.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 17 | 3 | +14 |

**Backlog Growing:** The SDK is accumulating issues faster than they are being resolved, indicating a need for increased maintenance focus or additional resources.

### Last 6 Months: Detailed Analysis

Recent activity shows continued issue accumulation with a late burst of closures. The team addressed Ruby 4 compatibility and plugin support in early January 2026.

| Metric | Value |
|--------|-------|
| Issues Opened | 12 |
| Issues Closed | 3 |
| Bugs Closed | 1 |
| Enhancements Completed | 2 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#364](../repos/temporalio-sdk-ruby/issues.md#364) | 0 | Ruby 4 compatibility confirmation |
| [#318](../repos/temporalio-sdk-ruby/issues.md#318) | 0 | Plugin support |
| [#373](../repos/temporalio-sdk-ruby/issues.md#373) | 0 | Fiber state corruption after Workflow.timeout expires on x86_64 |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](../repos/temporalio-sdk-ruby/issues.md#319) | 2 | 1 | Client-side trimming of failures to avoid server-side wrap-and-truncate |
| 2 | [#306](../repos/temporalio-sdk-ruby/issues.md#306) | 1 | 0 | Update build-gems GH workflow smoke test to use macOS Intel |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](../repos/temporalio-sdk-ruby/issues.md#319) | 5 | Client-side trimming of failures |
| 2 | [#162](../repos/temporalio-sdk-ruby/issues.md#162) | 5 | Ruby 3.1/3.2 worker fibers investigation |
| 3 | [#315](../repos/temporalio-sdk-ruby/issues.md#315) | 4 | ScopedLogger fails comparing symbol to integer |
| 4 | [#306](../repos/temporalio-sdk-ruby/issues.md#306) | 2 | macOS Intel build workflow smoke test |
| 5 | [#360](../repos/temporalio-sdk-ruby/issues.md#360) | 1 | Testing workflows with signals in time-skipping environment |
| 6 | [#334](../repos/temporalio-sdk-ruby/issues.md#334) | 1 | Ensure fibers and workflow instances are properly GC'd |
| 7 | [#238](../repos/temporalio-sdk-ruby/issues.md#238) | 1 | Serialization context for codecs and converters |
| 8 | [#203](../repos/temporalio-sdk-ruby/issues.md#203) | 1 | Contributing Guide |
| 9 | [#172](../repos/temporalio-sdk-ruby/issues.md#172) | 1 | Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (4 issues)

The SDK has 4 open bugs, primarily related to Ruby runtime compatibility and third-party library integration.

#### High Priority

| Issue | Comments | Description |
|-------|-----|-------------|
| [#355](../repos/temporalio-sdk-ruby/issues.md#355) | 0 | ActiveModel fails in workflows due to ConcurrentMap mutex use - blocks Rails integration |
| [#315](../repos/temporalio-sdk-ruby/issues.md#315) | 4 | ScopedLogger fails comparing symbol to integer when using semantic_logger |

#### Medium Priority

| Issue | Comments | Description |
|-------|-----|-------------|
| [#162](../repos/temporalio-sdk-ruby/issues.md#162) | 5 | Ruby 3.1/3.2 fiber-based workers hang due to queue push/pop wake-up issues |
| [#172](../repos/temporalio-sdk-ruby/issues.md#172) | 1 | Windows CI segfaulting during tests - likely Rust/Ruby threading conflict |

**Analysis:** The ActiveModel bug ([#355](../repos/temporalio-sdk-ruby/issues.md#355)) is particularly impactful as it affects any Rails application using ActiveModel attributes in workflows. The ScopedLogger issue ([#315](../repos/temporalio-sdk-ruby/issues.md#315)) affects users of popular logging libraries like semantic_logger. The Ruby 3.1/3.2 issue ([#162](../repos/temporalio-sdk-ruby/issues.md#162)) is becoming less critical as those versions approach EOL.

**Recently Resolved:** [#373](../repos/temporalio-sdk-ruby/issues.md#373) - Fiber state corruption after Workflow.timeout expires on x86_64 was fixed in January 2026. This was an architecture-specific bug affecting x86_64 Linux users where `Fiber.yield` returned incorrect values after timeout expiration.

---

## Enhancement Requests (17 issues)

### Cross-SDK Feature Parity

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#232](../repos/temporalio-sdk-ruby/issues.md#232) | 0 | Initial Nexus implementation - critical for service-to-service communication |
| [#270](../repos/temporalio-sdk-ruby/issues.md#270) | 0 | Worker Versioning high-level client |
| [#367](../repos/temporalio-sdk-ruby/issues.md#367) | 0 | Support non-workflow activities (server API dependent) |
| [#361](../repos/temporalio-sdk-ruby/issues.md#361) | 0 | Override Worker Deployment Version for child workflows |

### Error Handling & Observability

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#319](../repos/temporalio-sdk-ruby/issues.md#319) | 2 | Client-side trimming of failures to avoid server truncation |
| [#191](../repos/temporalio-sdk-ruby/issues.md#191) | 0 | Improved deadlock detection with better stack traces |
| [#185](../repos/temporalio-sdk-ruby/issues.md#185) | 0 | Warn on unawaited workflow futures with failures |

### Workflow API Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#179](../repos/temporalio-sdk-ruby/issues.md#179) | 0 | Provide "workflow local" storage (Workflow["myValue"]) |
| [#209](../repos/temporalio-sdk-ruby/issues.md#209) | 0 | Add explicit memoization support to patched() API |
| [#222](../repos/temporalio-sdk-ruby/issues.md#222) | 0 | Test randomness seed update over reset |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#238](../repos/temporalio-sdk-ruby/issues.md#238) | 0 | Serialization context for codecs and converters |
| [#333](../repos/temporalio-sdk-ruby/issues.md#333) | 0 | Require payload codec from data converter file |

### Build & CI Infrastructure

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#306](../repos/temporalio-sdk-ruby/issues.md#306) | 1 | Update build-gems workflow for macOS Intel |
| [#218](../repos/temporalio-sdk-ruby/issues.md#218) | 0 | Support buildable source gem |
| [#192](../repos/temporalio-sdk-ruby/issues.md#192) | 0 | Remove Go dependency from test pipeline |

### Memory & Resource Management

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#334](../repos/temporalio-sdk-ruby/issues.md#334) | 0 | Ensure fibers and workflow instances are properly GC'd on eviction |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#203](../repos/temporalio-sdk-ruby/issues.md#203) | 0 | Contributing Guide |
| [#360](../repos/temporalio-sdk-ruby/issues.md#360) | 0 | Documentation for testing workflows with signals in time-skipping environment |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

**Total:** 4 issues with no activity for over 12 months

- **Keep open:** [#162](../repos/temporalio-sdk-ruby/issues.md#162) - Ruby 3.1/3.2 fiber issue is valid but becoming less relevant; [#172](../repos/temporalio-sdk-ruby/issues.md#172) - Windows CI issue needs investigation
- **Needs triage:** [#185](../repos/temporalio-sdk-ruby/issues.md#185) - Unawaited futures warning; [#179](../repos/temporalio-sdk-ruby/issues.md#179) - Workflow local feature request

### Duplicate Candidates

No obvious duplicate issues identified. The small issue count makes tracking straightforward.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix [#355](../repos/temporalio-sdk-ruby/issues.md#355) ActiveModel compatibility - critical for Rails adoption
- Fix [#315](../repos/temporalio-sdk-ruby/issues.md#315) ScopedLogger/semantic_logger compatibility

### Phase 2: Developer Experience (Short-term)

- Improve [#360](../repos/temporalio-sdk-ruby/issues.md#360) documentation for testing signal-driven workflows
- Add [#203](../repos/temporalio-sdk-ruby/issues.md#203) contributing guide to encourage community contributions
- Implement [#319](../repos/temporalio-sdk-ruby/issues.md#319) client-side failure trimming

### Phase 3: Feature Expansion (Medium-term)

- Implement [#232](../repos/temporalio-sdk-ruby/issues.md#232) Nexus support for cross-service workflows
- Add [#270](../repos/temporalio-sdk-ruby/issues.md#270) Worker Versioning high-level client
- Implement [#179](../repos/temporalio-sdk-ruby/issues.md#179) workflow-local storage

### Phase 4: Maintenance (Ongoing)

- Triage stale issues quarterly
- Monitor Ruby version support (consider dropping 3.2 after EOL)
- Improve CI stability ([#172](../repos/temporalio-sdk-ruby/issues.md#172) Windows, [#306](../repos/temporalio-sdk-ruby/issues.md#306) macOS Intel)
