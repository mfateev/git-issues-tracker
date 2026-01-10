# Temporal API - Issues Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 13
**Total Closed Issues:** 12
**Repository:** [temporalio/api](https://github.com/temporalio/api)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Related:** [Server](server.md) | [Features](features.md) | [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. This is a low-volume but high-impact repository where changes have cross-cutting implications across the entire Temporal ecosystem. Issues here typically involve:

- API design proposals and protocol changes
- Protobuf field additions, deprecations, and documentation
- Cross-cutting concerns affecting all SDKs and the server

### Executive Summary

The API repository has a small but aged backlog. With only 13 open issues, the raw count is manageable. However, **100% of issues are stale** (no activity for 12+ months), with an average age of **1076 days** (~3 years). This suggests deliberate API stability rather than neglect - changes here require coordination across all SDKs and the server, making them inherently slower to implement.

The repository maintains an excellent resolution rate when issues are addressed: **median time to close of 7 days** (the fastest across all tracked repositories), with 75% resolved within 30 days.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| API Enhancements | 9 | Medium |
| Bugs/Fixes | 3 | High |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 6 |
| Total Comments | 9 |
| Issues with Upvotes | 1 (8%) |
| Issues with Comments | 3 (23%) |

The low engagement metrics reflect the specialized nature of this repository - most users interact with SDKs rather than the underlying Protobuf definitions.

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 48% (12/25) |
| Median Time to Close | 7 days (calendar) / 5 days (business) |
| 90th Percentile | 105 days (calendar) |
| Resolved within 30 days | 75% |

### Age Distribution

| Age | Count | % |
|-----|-------|---|
| 1-2 years | 3 | 23% |
| 2-3 years | 3 | 23% |
| 3+ years | 7 | 54% |

---

## Top Priority Issues

### Highest User Demand

| Issue | Score | Details |
|-------|-------|---------|
| [#328](https://github.com/temporalio/api/issues/328) | 12 | buf schema registry (6 upvotes) |
| [#169](https://github.com/temporalio/api/issues/169) | 7 | Language namespace customization (7 comments) |

### Quick Wins (Bugs)

| Issue | Description | Impact |
|-------|-------------|--------|
| [#421](https://github.com/temporalio/api/issues/421) | api-go update fails with backtick in commit | CI/CD blocker |
| [#299](https://github.com/temporalio/api/issues/299) | Misleading comment in PollWorkflowTaskQueue | Documentation clarity |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up deprecated fields | API cleanliness |

---

## Issues by Category

### API Enhancements (9 issues)

Major enhancement requests that would add new capabilities or improve the API design.

| Issue | Summary | Impact |
|-------|---------|--------|
| [#328](https://github.com/temporalio/api/issues/328) | **buf schema registry** - Publish and maintain buf schema registry for easier proto consumption | High - Improves developer experience for all API consumers |
| [#169](https://github.com/temporalio/api/issues/169) | **Language namespace customization** - Allow languages to customize package/namespace structure | Medium - Primarily benefits .NET SDK |
| [#307](https://github.com/temporalio/api/issues/307) | **Deprecate list workflow methods** - Mark ListOpenWorkflowExecutions and ListClosedWorkflowExecutions as deprecated | Medium - Reduces API surface confusion |
| [#198](https://github.com/temporalio/api/issues/198) | **Publish Postman collection** - Create gRPC API collection for Postman | Low - Developer convenience |
| [#172](https://github.com/temporalio/api/issues/172) | **Payloads for ApplicationFailure** - Use Payloads for error message/stack trace to enable encryption | High - Security improvement |
| [#232](https://github.com/temporalio/api/issues/232) | **Remove RETRY_STATE_IN_PROGRESS** - Remove internal-only enum from public API | Low - Reduces user confusion |
| [#400](https://github.com/temporalio/api/issues/400) | **Move third-party protos** - Reorganize google protos to avoid conflicts | Medium - Build system improvement |
| [#136](https://github.com/temporalio/api/issues/136) | **Add ScheduledEventId** - Add to PollActivityTaskQueueResponse for idempotency keys | Medium - Enables activity deduplication |
| [#154](https://github.com/temporalio/api/issues/154) | **Document SearchAttributes parsing** - Clarify how search attribute types are specified | Low - Documentation |

### Bugs/Fixes (3 issues)

Issues with existing API definitions or tooling.

| Issue | Description | Age |
|-------|-------------|-----|
| [#421](https://github.com/temporalio/api/issues/421) | **api-go update CI failure** - Workflow fails when commit message contains backtick character | 1 year |
| [#299](https://github.com/temporalio/api/issues/299) | **Misleading inline comment** - PollWorkflowTaskQueueResponse comment suggests "complete" history but may be paginated | 2 years |
| [#131](https://github.com/temporalio/api/issues/131) | **Clean up deprecated fields** - Remove "Should be removed" fields and mark as reserved | 4 years |

### Documentation (1 issue)

| Issue | Description |
|-------|-------------|
| [#154](https://github.com/temporalio/api/issues/154) | Document how SearchAttributes Payloads are parsed and typed |

---

## Detailed Issue Analysis

### #328: buf Schema Registry (6 upvotes)

**Status:** Open since November 2023 | **Author:** cretz

This is the highest-demand issue, requesting publication of Temporal's Protobuf definitions to the [buf schema registry](https://buf.build/). This would enable:

- Easier proto consumption without cloning the repository
- Better tooling integration for code generation
- Standardized dependency management

**Complexity:** Medium-High. The main challenge is handling inlined Google dependencies that should not be published.

**Recommendation:** Prioritize this enhancement as it has clear user demand and would improve the developer experience for all API consumers.

---

### #169: Language Namespace Customization (7 comments)

**Status:** Open since April 2022 | **Author:** macrogreg

A detailed proposal to allow language-specific namespace structures, primarily motivated by .NET SDK development. The extensive discussion (7 comments) shows this was carefully considered.

**Key points from discussion:**
- The proposal suggests reducing .NET namespaces to four main ones (`Temporal.ServiceApi.V1.*`)
- cretz noted that SDK builds can already post-process generated protos
- Changing `csharp_namespace` options is possible but would break consistency

**Resolution:** Per cretz's comments, this can be handled in SDK build scripts without modifying the API repository. Consider closing with documentation pointing to SDK-level solutions.

---

### #172: Payloads for ApplicationFailure

**Status:** Open since April 2022 | **Author:** bergundy

**Security Impact:** Currently, ApplicationFailure message and stack trace are plain text, making it possible to leak sensitive information. Using Payloads would enable encryption via custom data converters.

**Cross-cutting Impact:** Requires changes in:
- API definitions (this repo)
- Server handling
- All SDK implementations

**Recommendation:** This is a security-relevant enhancement that should be evaluated for prioritization.

---

### #421: api-go Update CI Failure

**Status:** Open since June 2024 | **Author:** twin-drill

A straightforward bug where the api-go update workflow fails if commit messages contain backtick characters. The shell script incorrectly interprets backticks as command substitution.

**Fix:** Likely a simple escaping fix in the CI workflow.

**Recommendation:** Quick win - should be fixed to prevent CI failures.

---

### #131: Clean Up Deprecated Fields

**Status:** Open since December 2021 | **Author:** Sushisource

The oldest open issue (4+ years). References PR #121 which added "Should be removed" comments to fields. The follow-up work to remove these fields and mark them as reserved was never completed.

**Recommendation:** Close or triage. If these fields haven't been removed in 4 years, either:
1. The deprecation is no longer relevant
2. Backward compatibility concerns prevent removal
3. This is simply forgotten

---

## Cross-Cutting Impact Analysis

API changes require coordination across the entire Temporal ecosystem. Issues are categorized by scope:

| Issue | Impact Level | Affected Components |
|-------|--------------|---------------------|
| [#328](https://github.com/temporalio/api/issues/328) | Low | Documentation/tooling only |
| [#172](https://github.com/temporalio/api/issues/172) | High | Server + All SDKs |
| [#232](https://github.com/temporalio/api/issues/232) | Medium | Server + All SDKs (enum visibility) |
| [#307](https://github.com/temporalio/api/issues/307) | Low | Deprecation annotation only |
| [#136](https://github.com/temporalio/api/issues/136) | Medium | Server + All SDKs |
| [#400](https://github.com/temporalio/api/issues/400) | Low | Build system only |

---

## Housekeeping Recommendations

### Issues to Consider Closing

| Issue | Reason |
|-------|--------|
| [#169](https://github.com/temporalio/api/issues/169) | Resolved via SDK build scripts per maintainer discussion |
| [#131](https://github.com/temporalio/api/issues/131) | 4 years stale - needs decision on relevance |
| [#427](https://github.com/temporalio/api/issues/427) | Addressed via [temporalio/temporal#6212](https://github.com/temporalio/temporal/issues/6212) per cretz |

### Issues Needing Triage

| Issue | Action Needed |
|-------|---------------|
| [#232](https://github.com/temporalio/api/issues/232) | Decision: Is RETRY_STATE_IN_PROGRESS still problematic? |
| [#198](https://github.com/temporalio/api/issues/198) | Evaluate: Is Postman collection still valuable with HTTP API? |
| [#136](https://github.com/temporalio/api/issues/136) | Decision: Is ScheduledEventId needed for idempotency? |

---

## Recommendations

### High Priority

1. **Fix CI bug** ([#421](https://github.com/temporalio/api/issues/421)) - Quick win that prevents workflow failures
2. **buf schema registry** ([#328](https://github.com/temporalio/api/issues/328)) - Highest user demand, improves developer experience
3. **Payloads for ApplicationFailure** ([#172](https://github.com/temporalio/api/issues/172)) - Security improvement enabling error encryption

### Medium Priority

4. **Deprecate list workflow methods** ([#307](https://github.com/temporalio/api/issues/307)) - Reduces API confusion, low-risk annotation
5. **Document SearchAttributes** ([#154](https://github.com/temporalio/api/issues/154)) - Improves API clarity with no code changes
6. **Fix misleading comment** ([#299](https://github.com/temporalio/api/issues/299)) - Documentation accuracy

### Housekeeping

7. **Triage stale issues** - Review and close issues that are no longer relevant or have been addressed elsewhere
8. **Clean up deprecated fields** ([#131](https://github.com/temporalio/api/issues/131)) - Make a decision after 4 years

---

## Repository Health Summary

| Aspect | Status | Notes |
|--------|--------|-------|
| Backlog Size | Good | Only 13 open issues |
| Issue Velocity | Stable | 2 opened, 2 closed in 12 months |
| Resolution Speed | Excellent | 7-day median when addressed |
| Staleness | Concerning | 100% stale (no activity >12 months) |
| User Engagement | Low | Expected for infrastructure repo |

**Overall Assessment:** The API repository is stable but dormant. The low volume reflects the deliberate, high-coordination nature of API changes. The aged backlog should be triaged to distinguish intentionally deferred issues from forgotten ones. Priority should go to the buf schema registry request and security-related Payload enhancement.
