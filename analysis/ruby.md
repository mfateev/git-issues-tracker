# Temporal Ruby SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 25
**Repository:** [temporalio/sdk-ruby](https://github.com/temporalio/sdk-ruby)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-ruby/issues.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Ruby SDK is the newest Temporal SDK with 25 open issues. **A critical fiber state corruption bug (#373) was filed this week** affecting x86_64 Linux. Given its early stage, the focus is on stability and core functionality. Low engagement (3 upvotes total) suggests a smaller but growing user base.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 19 | Medium |
| Bugs | 5 | High - Early SDK stability |
| Stale Issues (>1 year) | 2 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 3 |
| Total Comments | 19 |
| Issues with Upvotes | 2 (8%) |
| Issues with Comments | 10 (40%) |

### Recommended Actions

1. **URGENT:** Investigate fiber state corruption bug (#373) - x86_64 specific
2. **High:** Fix Ruby 3.1/3.2 fiber issues (#162)
3. **Medium:** Fix ScopedLogger with semantic_logger (#315)
4. **Medium:** ActiveModel sync issues (#355)
5. **Long-term:** Ruby 4 compatibility (#364)

---

## URGENT: Recent Critical Issue

**New fiber state corruption bug filed 2026-01-05:**

| Issue | Problem |
|-------|---------|
| [#373](../repos/temporalio-sdk-ruby/issues.md#373) | **Fiber state corruption after Workflow.timeout_cancellation_scope** - x86_64 Linux only |

**Impact:** This bug causes workflow execution to fail on x86_64 Linux systems after using timeout cancellation scopes. This is a platform-specific critical bug that needs investigation.

**Pattern:** This may be related to the existing Ruby 3.1/3.2 fiber issues (#162).

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#319](../repos/temporalio-sdk-ruby/issues.md#319) | **2** | 1 | Client-side trimming of failures |
| 2 | [#306](../repos/temporalio-sdk-ruby/issues.md#306) | 1 | 0 | macOS Intel smoke test |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #319 | 5 | Client-side failure trimming |
| 2 | #162 | 5 | Ruby 3.1/3.2 fiber issues |
| 3 | #315 | 4 | ScopedLogger fails |
| 4 | #364 | 3 | Ruby 4 compatibility |
| 5 | #306 | 2 | macOS Intel smoke test |

---

## High Priority: Bugs (5 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#373](../repos/temporalio-sdk-ruby/issues.md#373) | **Fiber state corruption (x86_64)** - NEW | 1 |
| [#162](../repos/temporalio-sdk-ruby/issues.md#162) | Ruby 3.1/3.2 worker fiber issues | 5 |
| [#355](../repos/temporalio-sdk-ruby/issues.md#355) | ActiveModel fails due to sync construct | 0 |
| [#315](../repos/temporalio-sdk-ruby/issues.md#315) | ScopedLogger fails with semantic_logger | 4 |
| [#172](../repos/temporalio-sdk-ruby/issues.md#172) | Windows CI segfaulting | 1 |

**Pattern:** Multiple fiber-related issues (#373, #162) suggest Ruby fiber handling needs a dedicated review.

---

## Enhancement Priorities

### 1. Failure Handling (#319 - 2 👍)

Client-side trimming to avoid server wrap-and-truncate.

### 2. Ruby 4 Compatibility (#364)

| Issue | Enhancement |
|-------|-------------|
| [#364](../repos/temporalio-sdk-ruby/issues.md#364) | Confirm/assert Ruby 4 compatibility |

Future-proofing as Ruby 4 approaches.

### 3. Testing Support

| Issue | Enhancement |
|-------|-------------|
| [#360](../repos/temporalio-sdk-ruby/issues.md#360) | Signal testing in time-skipping env |
| [#334](../repos/temporalio-sdk-ruby/issues.md#334) | Ensure fibers/workflow instances cleaned up |

### 4. Platform Support

| Issue | Enhancement |
|-------|-------------|
| [#306](../repos/temporalio-sdk-ruby/issues.md#306) | macOS Intel smoke test |
| [#172](../repos/temporalio-sdk-ruby/issues.md#172) | Windows support |

### 5. Serialization

| Issue | Enhancement |
|-------|-------------|
| [#238](../repos/temporalio-sdk-ruby/issues.md#238) | Serialization context for codecs/converters |

---

## Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 1 |
| 1-3 months | 5 |
| 3-6 months | 6 |
| 6-12 months | 11 |
| 1-2 years | 2 |

**Note:** No issues older than 2 years - this is a new SDK. Most issues (44%) are in the 6-12 month range.

---

## Proposed Roadmap

### Phase 1: Critical Bug Fixes (Immediate)
- [ ] **URGENT:** Investigate fiber state corruption (#373) - x86_64 specific
- [ ] Review fiber handling across all Ruby versions (#162, #373)
- [ ] Fix ScopedLogger with semantic_logger (#315)

### Phase 2: Stability (Short-term)
- [ ] Fix ActiveModel sync issues (#355)
- [ ] Fix Windows CI (#172)
- [ ] Client-side failure trimming (#319)

### Phase 3: Future Compatibility (Medium-term)
- [ ] Ruby 4 compatibility testing (#364)
- [ ] Fiber/workflow instance cleanup (#334)

### Phase 4: Platform & Testing (Medium-term)
- [ ] Signal testing support (#360)
- [ ] macOS Intel support (#306)
- [ ] Improve cross-platform testing

### Ongoing: Housekeeping
- [ ] Review 2 stale issues
- [ ] Consider contributing guide (#203)

---

## Quick Reference: Top 10 High-Impact Issues

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #373 | Bug | 0 | **Fiber corruption (URGENT - NEW)** |
| 2 | #162 | Bug | 0 | Ruby 3.1/3.2 fibers (5 comments) |
| 3 | #319 | Enhancement | **2** | Failure trimming (TOP REQUEST) |
| 4 | #315 | Bug | 0 | ScopedLogger (4 comments) |
| 5 | #364 | Enhancement | 0 | Ruby 4 compatibility (3 comments) |
| 6 | #355 | Bug | 0 | ActiveModel sync |
| 7 | #306 | Enhancement | **1** | macOS Intel |
| 8 | #360 | Enhancement | 0 | Signal testing |
| 9 | #334 | Enhancement | 0 | Fiber cleanup |
| 10 | #172 | Bug | 0 | Windows CI |

---

## Notes for Ruby SDK

As the newest SDK:
1. **Fiber stability is critical** - Multiple fiber-related bugs (#373, #162) suggest this area needs focused attention
2. **Platform-specific bugs** - The new fiber corruption bug (#373) only affects x86_64 Linux, suggesting platform-specific testing is needed
3. **Ruby version support** - 3.1/3.2 issues (#162) affect mainstream users
4. **Logger integration** - Ruby devs expect seamless integration with popular loggers like semantic_logger (#315)
5. **Low issue count is good** - But fiber issues could affect adoption if not resolved

**Key Insight:** The Ruby SDK has fiber handling issues that span multiple versions and platforms. A comprehensive review of fiber management may be needed to establish a stable foundation for the SDK.
