# Temporal API - Issues Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 13
**Total Closed Issues:** 12
**Repository:** [temporalio/api](https://github.com/temporalio/api)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Related:** [Server](server.md) | [Features](features.md) | [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. This is a foundational repository where changes have broad impact across the entire Temporal ecosystem. Issues here typically involve:
- API design proposals and protocol changes
- Cross-cutting concerns affecting all SDKs
- Proto definition improvements and documentation

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| API Enhancements | 9 | Medium |
| Bugs/Fixes | 3 | High |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (open) | 6 |
| Total Comments (open) | 9 |
| Issues with Upvotes | 1 (8%) |
| Issues with Comments | 3 (23%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 48% (12/25) |
| Median Time to Close | 7 days |
| Avg Time to Close | 29 days |
| 90th Percentile | 105 days |
| Resolved within 30 days | 75% |

**Closure Breakdown:** Fixed (2), Completed (4), Self-resolved (1), Other (5)

---

## Top Issues by Priority

Priority score = upvotes x 2 + comments

| Issue | Title | Score | Details |
|-------|-------|-------|---------|
| [#328](https://github.com/temporalio/api/issues/328) | Publish and maintain buf schema registry | 12 | 6 upvotes, internal request |
| [#169](https://github.com/temporalio/api/issues/169) | Allow languages to customize package/namespace structure | 7 | 7 comments, .NET-driven proposal |
| [#427](https://github.com/temporalio/api/issues/427) | Add configurable subpath for HTTP API | 1 | UI integration concern |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up "Should be removed" fields | 1 | Tech debt cleanup |

---

## Issues by Category

### API Enhancements

Feature requests for new API capabilities, fields, methods, or protocols.

| Issue | Title | Age | Notes |
|-------|-------|-----|-------|
| [#328](https://github.com/temporalio/api/issues/328) | Publish and maintain buf schema registry | 2y | Most upvoted, simplifies client generation |
| [#427](https://github.com/temporalio/api/issues/427) | Add configurable subpath for HTTP API | 18m | Needed for UI Server integration |
| [#400](https://github.com/temporalio/api/issues/400) | Move/remove third party protos to separate location | 20m | Better protoc compatibility |
| [#307](https://github.com/temporalio/api/issues/307) | Deprecate list workflow methods | 2y | Reduce user confusion |
| [#232](https://github.com/temporalio/api/issues/232) | Remove RETRY_STATE_IN_PROGRESS from public API | 3y | Internal-only enum exposed publicly |
| [#198](https://github.com/temporalio/api/issues/198) | Publish Postman collection | 3y | Developer experience improvement |
| [#172](https://github.com/temporalio/api/issues/172) | Use Payloads for ApplicationFailure message/stack trace | 3y | Security: enables encryption of error details |
| [#154](https://github.com/temporalio/api/issues/154) | Document SearchAttributes parsing | 3y | Missing documentation for payload format |
| [#136](https://github.com/temporalio/api/issues/136) | ScheduledEventId to construct Idempotence Key | 4y | Activity deduplication support |

### Bugs/Fixes

Issues with existing API definitions that need correction.

| Issue | Title | Age | Notes |
|-------|-------|-----|-------|
| [#421](https://github.com/temporalio/api/issues/421) | api-go update fails if commit message contains backtick | 18m | CI/CD workflow issue |
| [#299](https://github.com/temporalio/api/issues/299) | Misleading comment for PollWorkflowTaskQueueResponse | 2y | "Complete" history clarification needed |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up "Should be removed" fields | 4y | Leftover from PR #121 |

### Proposals

Design proposals requiring discussion and cross-team coordination.

| Issue | Title | Comments | Age |
|-------|-------|----------|-----|
| [#169](https://github.com/temporalio/api/issues/169) | Allow languages to customize package/namespace structure | 7 | 3y |

**Context:** This proposal from the .NET SDK development sought to simplify namespace imports by consolidating multiple `Temporal.Api.Xyz` namespaces into fewer top-level namespaces. Discussion concluded that each SDK should handle post-processing of generated protos rather than changing the API repo structure, though `csharp_namespace` options could be adjusted if needed.

---

## Cross-Cutting Impact

These issues would require coordinated changes across the server and multiple SDKs.

| Issue | Impact | Components Affected |
|-------|--------|---------------------|
| [#328](https://github.com/temporalio/api/issues/328) | Buf schema registry enables easier client generation for any language | All SDKs, external consumers |
| [#172](https://github.com/temporalio/api/issues/172) | Payload encoding for failures enables encryption of sensitive error data | Server + All SDKs |
| [#232](https://github.com/temporalio/api/issues/232) | Removing internal retry state enum value requires deprecation cycle | Server + All SDKs |
| [#307](https://github.com/temporalio/api/issues/307) | Deprecating list methods affects all SDK client implementations | All SDKs |

---

## Issue Velocity (12 Months)

| Period | Opened | Closed | Net |
|--------|--------|--------|-----|
| Last 12 months | 2 | 2 | 0 |
| Last 6 months | 1 | 1 | 0 |

The API repository maintains a stable backlog with minimal new issue activity. This reflects the foundational nature of the proto definitions - changes are carefully considered and typically driven internally rather than through GitHub issues.

---

## Age Distribution

| Age Range | Count | % |
|-----------|-------|---|
| 3+ years | 7 | 54% |
| 2-3 years | 3 | 23% |
| 1-2 years | 3 | 23% |
| < 1 year | 0 | 0% |

All 13 open issues are stale (older than 12 months). This suggests the API repository is relatively stable, with most active development happening through internal planning rather than public issue tracking.

---

## Recently Closed Issues

Notable issues resolved in the past year:

| Issue | Title | Resolution |
|-------|-------|------------|
| [#631](https://github.com/temporalio/api/issues/631) | Add startDelay to WorkflowExecutionInfo | Clarified that ExecutionTime already serves this purpose; UI update planned |
| [#583](https://github.com/temporalio/api/issues/583) | Remove license headers from files | Completed following server changes |
| [#435](https://github.com/temporalio/api/issues/435) | Typo in release tag (v.1.36.0) | Fixed |
| [#428](https://github.com/temporalio/api/issues/428) | /cluster-info should be /cluster | Completed |
| [#409](https://github.com/temporalio/api/issues/409) | Remove /api/v1/ prefix from HTTP paths | Completed before HTTP API release |

---

## Recommendations

### High Impact

1. **Buf Schema Registry ([#328](https://github.com/temporalio/api/issues/328)):** With 6 upvotes, this is the most requested feature. Publishing to the Buf schema registry would:
   - Simplify client generation for all languages
   - Enable external tools to integrate with Temporal APIs
   - Reduce friction for users building custom tooling

   The challenge is handling the inlined Google proto dependencies.

### Quick Wins

2. **CI/CD Fix ([#421](https://github.com/temporalio/api/issues/421)):** The backtick escaping issue in api-go update workflow is a straightforward shell scripting fix.

3. **Documentation Clarification ([#299](https://github.com/temporalio/api/issues/299)):** Update the inline comment for PollWorkflowTaskQueueResponse to clarify that "complete" history may still be paginated for long histories.

### Technical Debt

4. **Clean Up Deprecated Fields ([#131](https://github.com/temporalio/api/issues/131)):** At 4+ years old, this represents long-standing tech debt. Schedule for a major version release to mark fields as reserved.

5. **Third-Party Proto Organization ([#400](https://github.com/temporalio/api/issues/400)):** Moving Google dependencies to a `thirdparty/` directory would improve compatibility for users running protoc from the repo root.

### Security Enhancement

6. **Encrypted Error Details ([#172](https://github.com/temporalio/api/issues/172)):** Using Payloads for ApplicationFailure message and stack trace would enable encryption via custom data converters, preventing sensitive information leakage in error messages.

### Coordination Required

7. **Deprecate List Methods ([#307](https://github.com/temporalio/api/issues/307)):** ListOpenWorkflowExecutions and ListClosedWorkflowExecutions cause user confusion due to limitations. Deprecating them in favor of ListWorkflowExecutions requires coordination with documentation and all SDK teams.
