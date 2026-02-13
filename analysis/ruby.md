# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-10
**Total Open Issues:** 22
**Total Closed Issues:** 159
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

<- [Summary](summary.md) - [Contributors](contributors.md) - [Recent](recent.md) - [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md)

---

## Executive Summary

The Ruby SDK has a mature issue profile with an 88% resolution rate (159/181 total issues) and only 22 open issues. The SDK has achieved general availability and most remaining work is enhancement-oriented rather than bug fixes. Only 4 bugs remain open, with the most impactful being ActiveModel incompatibility in workflows and ScopedLogger type comparison failures -- both of which affect Rails ecosystem users. The primary strategic gaps are Nexus support, Worker Versioning, and completing several developer experience improvements filed by the core team.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 4 | High -- includes ActiveModel compatibility and logger issues affecting Rails users |
| Feature Requests | 17 | Medium -- mostly SDK enhancement and feature parity work |
| Worker Versioning | 2 | Medium -- needed for deployment management capabilities |
| Nexus | 1 | Medium -- cross-SDK feature initiative |
| Documentation | 1 | Low -- contributing guide request |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs up) | 3 |
| Total Comments | 15 |
| Issues with Upvotes | 2 (9%) |
| Issues with Comments | 8 (36%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 88% (159/181) |
| Median Time to Close | 48 days (calendar) / 35 days (business) |
| Resolved within 30 days | 42% |
| Resolved within 90 days | 62% |

### Recommended Actions

1. **Immediate:** Fix ActiveModel compatibility in workflows ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) -- this blocks Rails users from using standard model patterns inside workflows
2. **Short-term:** Fix ScopedLogger symbol/integer comparison ([#315](https://github.com/temporalio/sdk-ruby/issues/315)) and investigate Ruby 3.1/3.2 fiber issue ([#162](https://github.com/temporalio/sdk-ruby/issues/162))
3. **Medium-term:** Implement Nexus support ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) and Worker Versioning high-level client ([#270](https://github.com/temporalio/sdk-ruby/issues/270))
4. **Long-term:** Complete developer experience enhancements -- workflow locals ([#179](https://github.com/temporalio/sdk-ruby/issues/179)), deadlock detection improvements ([#191](https://github.com/temporalio/sdk-ruby/issues/191)), serialization context ([#238](https://github.com/temporalio/sdk-ruby/issues/238))
5. **Housekeeping:** Triage 9 stale issues (41% of open issues) that have had no activity for over 12 months

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is essentially stable with a slight upward drift. The team closed 61 issues while 64 were opened over the past year, resulting in a net increase of only 3 issues.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 64 | 61 | +3 |

Backlog is nearly stable. Activity has slowed significantly in recent months: November through February saw only 7 new issues opened, suggesting the SDK is reaching maturity.

### Last 6 Months: Detailed Analysis

The last 6 months show a healthy resolution pattern with more issues closed than opened. The team resolved 5 bugs and completed 16 enhancements, while opening 21 new issues. The SDK completed significant work including Ruby 4 compatibility, OpenTelemetry improvements, plugin support, and worker heartbeating.

| Metric | Value |
|--------|-------|
| Issues Opened | 21 |
| Issues Closed | 23 |
| Bugs Closed | 5 |
| Enhancements Completed | 16 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The Ruby SDK has generally low upvote counts across all issues, reflecting its newer community.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | Look into client-side trimming of failures to avoid server-side wrap-and-truncate |
| 2 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | Update build-gems GH workflow smoke test to use macOS Intel |

Note: Only 2 of 22 open issues have any upvotes, indicating low external engagement. Most open issues are internal feature requests filed by the core development team.

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 5 | Look into client-side trimming of failures |
| 2 | [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | Investigate issue with Ruby 3.1/3.2 and worker fibers |
| 3 | [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | ScopedLogger fails comparing symbol to integer |
| 4 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 2 | Update build-gems GH workflow smoke test to use macOS Intel |
| 5 | [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Testing workflows with signals in time-skipping environment |
| 6 | [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | Ensure fibers and workflow instances are properly GC'd on eviction |
| 7 | [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 1 | Serialization context for codecs and converters |
| 8 | [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 1 | Contributing Guide |
| 9 | [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (4 issues)

Four open bugs remain, two of which directly affect the Rails ecosystem -- a critical user segment for the Ruby SDK.

#### High Severity

| Issue | Comments | Description |
|-------|----------|-------------|
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | **ActiveModel fails in workflows due to sync construct use.** ActiveModel::Attributes internally uses ConcurrentMap (Thread::Mutex), which is forbidden in workflows, causing NondeterminismError. Blocks standard Rails patterns in workflows. |
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 4 | **ScopedLogger fails comparing symbol to integer.** Libraries like semantic_logger return symbols for Logger#level instead of integers, causing type comparison errors during workflow execution. Has active community discussion. |
| [#162](https://github.com/temporalio/sdk-ruby/issues/162) | 5 | **Ruby 3.1/3.2 worker fibers hang.** Fiber-based workers hang when Queue.push is called from a separate thread on Ruby 3.1/3.2, working correctly only on 3.3+. Related to Ruby's M:N scheduling model changes. Most-discussed open bug. |

#### Low Severity

| Issue | Comments | Description |
|-------|----------|-------------|
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 1 | **Windows CI segfaulting during tests.** Segfault in Rust bridge's parking_lot mutex on Windows. Affects CI only, not production usage. |

### Worker Versioning & Deployment (2 issues)

Worker Versioning is a cross-SDK initiative. The Ruby SDK needs both the high-level management client and child workflow version override support.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | Worker Versioning high-level client for deployment management and control plane operations |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | Allow overriding Worker Deployment Version when invoking a child workflow for pre-deployment testing |

### Nexus (1 issue)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | Initial Nexus implementation for the Ruby SDK, part of the cross-SDK Nexus initiative |

### Fiber & Runtime Internals (2 issues)

| Issue | Comments | Description |
|-------|----------|-------------|
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 1 | Ensure fibers and workflow instances are properly GC'd on workflow eviction to prevent memory leaks |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | Improve deadlock detection with better interruption and stack traces from the actual deadlocked point |

### Testing (2 issues)

| Issue | Comments | Description |
|-------|----------|-------------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 1 | Workflows using wait_condition with signals do not resume in time-skipping test environment |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test that randomness seed produces different values after workflow reset |

---

## API & Component Hotspots

Based on semantic analysis, the areas with the most open issues are:

| Area | Open Issue Count | Key Issues |
|------|-----------------|------------|
| Workflow Execution & Constraints | 3 | #355 (ActiveModel), #179 (workflow locals), #185 (unawaited futures) |
| Fiber Scheduler & Runtime | 3 | #162 (Ruby 3.1/3.2 fibers), #334 (GC on eviction), #191 (deadlock detection) |
| Worker Versioning & Deployment | 2 | #270 (high-level client), #361 (child workflow version override) |
| Serialization & Codecs | 2 | #238 (serialization context), #333 (payload codec require path) |
| Testing Infrastructure | 2 | #360 (signal testing), #222 (randomness seed reset) |
| CI/Build | 2 | #306 (macOS Intel smoke test), #192 (remove Go from test pipeline) |
| Logging | 1 | #315 (ScopedLogger type comparison) |

---

## Enhancement Requests (17 issues)

### Cross-SDK Feature Parity

Major features that align with the broader Temporal SDK ecosystem roadmap.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#232](https://github.com/temporalio/sdk-ruby/issues/232) | 0 | Nexus implementation for Ruby SDK |
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | Worker Versioning high-level client |
| [#361](https://github.com/temporalio/sdk-ruby/issues/361) | 0 | Override Worker Deployment Version for child workflows |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs and converters |
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | Explicit memoization support in the patched() API |
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | Client-side trimming of failures to avoid server-side truncation |
| [#367](https://github.com/temporalio/sdk-ruby/issues/367) | 0 | Support standalone activities (outside workflow context) |

### Workflow Developer Experience

Improvements to the workflow authoring and debugging experience.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | Provide "workflow local" storage scoped to workflow execution |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | Warn on unawaited workflow futures with failures |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | Improve deadlock detection interruption and stack traces |
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | Ensure proper GC of fibers and workflow instances on eviction |

### Serialization & Data Handling

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#333](https://github.com/temporalio/sdk-ruby/issues/333) | 0 | Require payload codec from data converter file |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs and converters |

### Build, CI & Packaging

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | Update build-gems workflow to use macOS Intel for smoke tests |
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | Support buildable source gem for non-standard platforms |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | Remove Go dependency from test pipeline |

### Documentation

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | Contributing guide for new contributors |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

9 of 22 open issues (41%) have had no activity for over 12 months. This is a significant proportion and warrants triage.

- **Close candidates:**
  - [#172](https://github.com/temporalio/sdk-ruby/issues/172) -- Windows CI segfault. If Windows is not a supported target, this can be closed or deprioritized.
  - [#162](https://github.com/temporalio/sdk-ruby/issues/162) -- Ruby 3.1/3.2 fiber issue. Since Ruby 4 compatibility was confirmed and 3.2 support was dropped ([#364](https://github.com/temporalio/sdk-ruby/issues/364)), this may no longer be relevant.
  - [#192](https://github.com/temporalio/sdk-ruby/issues/192) -- Remove Go from test pipeline. May have been resolved organically during SDK development.

- **Needs triage:**
  - [#203](https://github.com/temporalio/sdk-ruby/issues/203) -- Contributing guide. Community request; decide whether to address or close.
  - [#218](https://github.com/temporalio/sdk-ruby/issues/218) -- Buildable source gem. Assess whether there is actual user demand.
  - [#209](https://github.com/temporalio/sdk-ruby/issues/209) -- Patched() API memoization. Cross-SDK feature; check status with other SDKs.

- **Keep open:**
  - [#191](https://github.com/temporalio/sdk-ruby/issues/191) -- Deadlock detection improvements. Valid enhancement for developer experience.
  - [#185](https://github.com/temporalio/sdk-ruby/issues/185) -- Unawaited futures warnings. Matches Java SDK behavior; valid parity work.
  - [#179](https://github.com/temporalio/sdk-ruby/issues/179) -- Workflow locals. Valid feature request aligned with cross-SDK patterns.

### Duplicate Candidates

No clear duplicates identified. The issue set is well-curated with distinct issues.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix ActiveModel compatibility in workflows ([#355](https://github.com/temporalio/sdk-ruby/issues/355)) -- highest impact for Rails users
- Fix ScopedLogger type comparison for semantic_logger users ([#315](https://github.com/temporalio/sdk-ruby/issues/315))

### Phase 2: Developer Experience (Short-term)

- Resolve signal testing in time-skipping environment ([#360](https://github.com/temporalio/sdk-ruby/issues/360))
- Implement client-side failure trimming ([#319](https://github.com/temporalio/sdk-ruby/issues/319)) -- highest upvoted open issue
- Ensure proper fiber/workflow GC on eviction ([#334](https://github.com/temporalio/sdk-ruby/issues/334))

### Phase 3: Feature Expansion (Medium-term)

- Implement Nexus support ([#232](https://github.com/temporalio/sdk-ruby/issues/232)) -- cross-SDK initiative
- Implement Worker Versioning high-level client ([#270](https://github.com/temporalio/sdk-ruby/issues/270))
- Add standalone activities support ([#367](https://github.com/temporalio/sdk-ruby/issues/367))
- Add serialization context for codecs and converters ([#238](https://github.com/temporalio/sdk-ruby/issues/238))

### Phase 4: Maintenance (Ongoing)

- Triage and close stale issues (9 issues over 12 months old)
- Evaluate and close Ruby 3.1/3.2 fiber issue if no longer relevant after dropping 3.2 support ([#162](https://github.com/temporalio/sdk-ruby/issues/162))
- Complete remaining developer experience enhancements: workflow locals ([#179](https://github.com/temporalio/sdk-ruby/issues/179)), unawaited futures warnings ([#185](https://github.com/temporalio/sdk-ruby/issues/185)), deadlock detection ([#191](https://github.com/temporalio/sdk-ruby/issues/191))
