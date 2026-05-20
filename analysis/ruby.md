# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 26
**Total Closed Issues:** 166
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Server](server.md)

---

## Executive Summary

The Ruby SDK is in good health with a high resolution rate of 86% (166/192) and very low total engagement — only 26 open issues with 3 upvotes and 10 comments across them all. The backlog is nearly stable (1 net issue closed over 12 months) with modest but steady activity. The SDK is still maturing: 77% of open issues are enhancements, reflecting a feature-building phase rather than a stability crisis. The primary concerns are a ScopedLogger incompatibility with non-standard loggers (blocking Rails users with semantic_logger), ActiveModel compatibility failures in workflows, and a Windows CI segfault that has been unresolved for over a year.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 3 | Medium — none critical but all block specific user scenarios |
| Enhancements/Features | 20 | Medium — SDK is still building out feature parity |
| Stale Issues (>12 months) | 10 | Low — candidates for triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 3 |
| Total Comments | 10 |
| Issues with Upvotes | 2 (8%) |
| Issues with Comments | 7 (27%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 86% (166/192) |
| Median Time to Close | 40 days (calendar) / 29 days (business) |
| Resolved within 30 days | 44% |
| Resolved within 90 days | 63% |

### Recommended Actions

1. **Immediate:** Fix ScopedLogger incompatibility with non-standard logger severity types (#315) — breaks Rails apps using semantic_logger.
2. **Short-term:** Fix ActiveModel usage in workflows (#355) and investigate Windows CI segfault (#172).
3. **Medium-term:** Implement failure trimming (#319), RBI type publishing (#412), and fibers/workflow instance protection (#334).
4. **Long-term:** Work through the enhancement backlog: worker versioning, memoization, deadlock detection, workflow-local storage.
5. **Housekeeping:** Review and close or reconfirm the 10 stale issues, most of which are deferred feature work.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Ruby SDK backlog is essentially stable, with near-equal opens and closes. The SDK is in active development — activity was high through mid-2025, then moderated.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 48 | 49 | -1 |

📉 **Backlog Shrinking:** 1 more issue closed than opened in the last 12 months.

### Last 6 Months: Detailed Analysis

Recent resolution is fast (median 6 calendar days), indicating that when issues are being addressed, they are handled quickly. The slight net growth (+2) in the last 6 months is not a concern.

| Metric | Value |
|--------|-------|
| Issues Opened | 15 |
| Issues Closed | 13 |
| Bugs Closed | 6 |
| Enhancements Completed | 6 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | 1 | [Feature Request] Look into client-side trimming of failures |
| 2 | [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | 0 | [Feature Request] Update build-gems GH workflow smoke test |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #319 | 5 | [Feature Request] Look into client-side trimming of failures |
| 2 | #315 | 4 | [Bug] ScopedLogger fails attempting to compare symbol to integer |
| 3 | #306 | 2 | [Feature Request] Update build-gems GH workflow smoke test |
| 4 | #360 | 1 | Problem: Testing Temporal Workflows with Signals in Ruby SDK |
| 5 | #334 | 1 | [Feature Request] Ensure fibers and workflow instances are protected from GC |
| 6 | #238 | 1 | [Feature Request] Serialization context for codecs and converters |
| 7 | #203 | 1 | [Feature Request] Contributing Guide |
| 8 | #172 | 1 | [Bug] Windows CI segfaulting during tests |

---

## Issue Analysis by Category

### Bugs (3 issues)

The Ruby SDK has only 3 open bugs, but each affects a concrete user scenario.

| Issue | 👍 | 💬 | Description |
|-------|-----|-----|-------------|
| [#315](https://github.com/temporalio/sdk-ruby/issues/315) | 0 | 4 | ScopedLogger fails with "comparison of Integer with :debug failed" when using semantic_logger or any logger whose `level` returns a symbol rather than an integer. The failure bubbles up from within workflow execution, crashing workflow tasks for Rails users with non-standard loggers. |
| [#355](https://github.com/temporalio/sdk-ruby/issues/355) | 0 | 0 | Common uses of ActiveModel (validations, callbacks) fail in workflows due to the illegal call tracer incorrectly flagging them as non-deterministic calls. |
| [#172](https://github.com/temporalio/sdk-ruby/issues/172) | 0 | 1 | Windows CI segfaults during tests — has been open for over a year, blocking Windows developer support. |

---

## Enhancement Requests (20 issues)

### Observability & Error Handling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#319](https://github.com/temporalio/sdk-ruby/issues/319) | 2 | Client-side trimming of failure stack traces to avoid hitting gRPC message size limits |
| [#238](https://github.com/temporalio/sdk-ruby/issues/238) | 0 | Serialization context for codecs and converters (parity with other SDKs) |

### Developer Experience & Type Support

| Issue | 👍 | Request |
|-------|-----|---------|
| [#412](https://github.com/temporalio/sdk-ruby/issues/412) | 0 | Publish RBI (Sorbet) type definitions alongside the gem |
| [#203](https://github.com/temporalio/sdk-ruby/issues/203) | 0 | Add a Contributing Guide to lower barrier to entry for contributors |
| [#306](https://github.com/temporalio/sdk-ruby/issues/306) | 1 | Update build-gems GH workflow to include a smoke test |

### Workflow Runtime Safety

| Issue | 👍 | Request |
|-------|-----|---------|
| [#334](https://github.com/temporalio/sdk-ruby/issues/334) | 0 | Ensure fibers and workflow instances are protected from premature garbage collection |
| [#191](https://github.com/temporalio/sdk-ruby/issues/191) | 0 | Improve deadlock detection — better internal error messages when a deadlock occurs |
| [#185](https://github.com/temporalio/sdk-ruby/issues/185) | 0 | Warn on unawaited workflow futures to catch common async programming mistakes |

### Testing

| Issue | 👍 | Request |
|-------|-----|---------|
| [#360](https://github.com/temporalio/sdk-ruby/issues/360) | 0 | Better support for testing workflows with signals in the Ruby SDK |
| [#222](https://github.com/temporalio/sdk-ruby/issues/222) | 0 | Test randomness seed update override (parity with other SDKs) |

### Versioning & Deployment

| Issue | 👍 | Request |
|-------|-----|---------|
| [#270](https://github.com/temporalio/sdk-ruby/issues/270) | 0 | Worker versioning high-level client API |
| [#413](https://github.com/temporalio/sdk-ruby/issues/413) | 0 | SDK should fail workflow task if payload size is known to be too large |

### API Parity & Protocol

| Issue | 👍 | Request |
|-------|-----|---------|
| [#440](https://github.com/temporalio/sdk-ruby/issues/440) | 0 | Implement operator commands for Standalone Activities |
| [#401](https://github.com/temporalio/sdk-ruby/issues/401) | 0 | Support conflict token retry loop for schedule updates |
| [#393](https://github.com/temporalio/sdk-ruby/issues/393) | 0 | Standardize Nexus operation input arg deserialization failure handling |

### Gem Distribution & Build

| Issue | 👍 | Request |
|-------|-----|---------|
| [#218](https://github.com/temporalio/sdk-ruby/issues/218) | 0 | Support buildable source gem (for platforms without pre-built binaries) |
| [#192](https://github.com/temporalio/sdk-ruby/issues/192) | 0 | Remove Go from the test pipeline |

### Workflow Features

| Issue | 👍 | Request |
|-------|-----|---------|
| [#209](https://github.com/temporalio/sdk-ruby/issues/209) | 0 | Add explicit memoization support |
| [#179](https://github.com/temporalio/sdk-ruby/issues/179) | 0 | Provide "workflow local" storage |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

10 open issues (38% of the backlog) have had no activity in over 12 months. Most are legitimate deferred enhancements.

- **Close candidates:** [#203](https://github.com/temporalio/sdk-ruby/issues/203) (Contributing Guide — could be addressed with a single PR), [#192](https://github.com/temporalio/sdk-ruby/issues/192) (Remove Go from test pipeline — may already be done or no longer relevant)
- **Needs triage:** [#172](https://github.com/temporalio/sdk-ruby/issues/172) (Windows CI segfault — still reproducible? Should be confirmed or closed), [#270](https://github.com/temporalio/sdk-ruby/issues/270) (Worker versioning — depends on server-side API availability)
- **Keep open:** [#191](https://github.com/temporalio/sdk-ruby/issues/191) (deadlock detection), [#185](https://github.com/temporalio/sdk-ruby/issues/185) (unawaited futures warning), [#179](https://github.com/temporalio/sdk-ruby/issues/179) (workflow local storage), [#222](https://github.com/temporalio/sdk-ruby/issues/222) (randomness seed testing)

### Duplicate Candidates

No obvious duplicates identified.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix ScopedLogger incompatibility with semantic_logger and other symbol-based loggers (#315) — breaks real Rails production deployments
- Fix ActiveModel usage in workflows (#355) — Rails ecosystem compatibility

### Phase 2: Developer Experience (Short-term)
- Client-side failure trimming (#319) — top user demand
- Publish RBI type definitions (#412) — important for typed Ruby projects
- Investigate and fix Windows CI segfault (#172)
- Testing workflow signals support (#360)

### Phase 3: Feature Expansion (Medium-term)
- Operator commands for Standalone Activities (#440)
- Fibers/workflow instance GC safety (#334)
- Memoization support (#209)
- Deadlock detection improvements (#191)

### Phase 4: Maintenance (Ongoing)
- Triage and confirm or close 10 stale issues
- Remove Go dependency from test pipeline (#192)
- Worker versioning API (#270) — pending server-side availability
