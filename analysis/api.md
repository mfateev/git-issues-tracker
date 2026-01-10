# Temporal API - Issues Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 13
**Total Closed Issues:** 12
**Repository:** [temporalio/api](https://github.com/temporalio/api)

<- [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**Related:** [Server](server.md) · [Features](features.md) · [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md)

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

## Issues by Category

### API Enhancements

Feature requests for new API capabilities, fields, methods, or protocols.

| Issue | 👍 | Proposal |
|-------|-----|----------|
| [#328](https://github.com/temporalio/api/issues/328) | 6 | Publish and maintain buf schema registry for easier client generation |
| [#427](https://github.com/temporalio/api/issues/427) | 0 | Add configurable subpath for HTTP API (UI Server integration) |
| [#400](https://github.com/temporalio/api/issues/400) | 0 | Move/remove third party protos to separate location for better protoc compatibility |
| [#307](https://github.com/temporalio/api/issues/307) | 0 | Deprecate ListOpen/ListClosed workflow methods to reduce user confusion |
| [#232](https://github.com/temporalio/api/issues/232) | 0 | Remove RETRY_STATE_IN_PROGRESS from public API (internal-only enum) |
| [#198](https://github.com/temporalio/api/issues/198) | 0 | Publish Postman collection for gRPC APIs |
| [#172](https://github.com/temporalio/api/issues/172) | 0 | Use Payloads for ApplicationFailure message/stack trace (enables encryption) |
| [#154](https://github.com/temporalio/api/issues/154) | 0 | Document SearchAttributes parsing format |
| [#136](https://github.com/temporalio/api/issues/136) | 0 | ScheduledEventId to construct Idempotence Key for activity deduplication |

### Bugs/Fixes

Issues with existing API definitions that need correction.

| Issue | Description |
|-------|-------------|
| [#421](https://github.com/temporalio/api/issues/421) | api-go update workflow fails if commit message contains backtick character |
| [#299](https://github.com/temporalio/api/issues/299) | Misleading inline comment for PollWorkflowTaskQueueResponse - "complete" history can still be paginated |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up "Should be removed" fields from PR #121 |

### Documentation

API documentation and comment improvements.

| Issue | Description |
|-------|-------------|
| [#299](https://github.com/temporalio/api/issues/299) | Clarify that "complete" history may require pagination for long event histories |
| [#154](https://github.com/temporalio/api/issues/154) | Document SearchAttributes parsing format |

---

## Top Issues by Priority

Priority score = upvotes x 2 + comments

| Issue | Title | Score | 👍 | 💬 |
|-------|-------|-------|-----|-----|
| [#328](https://github.com/temporalio/api/issues/328) | Publish and maintain buf schema registry | 12 | 6 | 0 |
| [#169](https://github.com/temporalio/api/issues/169) | Allow languages to customize package/namespace structure | 7 | 0 | 7 |
| [#427](https://github.com/temporalio/api/issues/427) | Add configurable subpath for HTTP API | 1 | 0 | 1 |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up "Should be removed" fields | 1 | 0 | 1 |

### Issue Detail: Buf Schema Registry (#328)

The most upvoted open issue requests publishing Temporal's proto definitions to the Buf schema registry. This would enable:
- Simplified client generation for any language
- Easier integration for external tools and custom implementations
- Reduced friction for users building custom tooling around Temporal APIs

The main technical challenge is handling the inlined Google proto dependencies, which must be excluded from the published registry to avoid conflicts with users' own Google proto versions.

### Issue Detail: Package/Namespace Customization (#169)

This highly-discussed proposal from .NET SDK development sought to simplify namespace imports by consolidating multiple `Temporal.Api.Xyz` namespaces into fewer top-level namespaces (e.g., `Temporal.ServiceApi.V1.DataModel`).

After 7 comments of discussion, the conclusion was that each SDK should handle post-processing of generated protos rather than changing the API repo structure. However, language-specific namespace options (like `csharp_namespace`) could be adjusted if needed for specific languages.

---

## Cross-Cutting Impact

These issues would require coordinated changes across the server and multiple SDKs.

| Issue | Impact | SDKs Affected |
|-------|--------|---------------|
| [#328](https://github.com/temporalio/api/issues/328) | Buf schema registry enables easier client generation | All SDKs, external consumers |
| [#172](https://github.com/temporalio/api/issues/172) | Payload encoding for failures enables encryption | Server + All SDKs |
| [#232](https://github.com/temporalio/api/issues/232) | Removing internal retry state enum requires deprecation cycle | Server + All SDKs |
| [#307](https://github.com/temporalio/api/issues/307) | Deprecating list methods affects all client implementations | All SDKs |

---

## Age Distribution

| Age | Count | % |
|-----|-------|---|
| 3+ years | 7 | 54% |
| 2-3 years | 3 | 23% |
| 1-2 years | 3 | 23% |
| < 1 year | 0 | 0% |

All 13 open issues are stale (older than 12 months with no recent activity). This reflects the foundational nature of the proto definitions - changes are carefully considered and typically driven internally rather than through public issue tracking.

---

## Issue Velocity (12 Months)

| Period | Opened | Closed | Net Change |
|--------|--------|--------|------------|
| Last 12 months | 2 | 2 | 0 |
| Last 6 months | 1 | 1 | 0 |

The API repository maintains a stable backlog with minimal new issue activity. Recent closures include:
- HTTP API path standardization (#409, #428)
- License header removal (#583)
- Minor fixes and clarifications

---

## Recommendations

### 1. High Impact: Buf Schema Registry

**Issue:** [#328](https://github.com/temporalio/api/issues/328) (6 upvotes)

Publishing to the Buf schema registry is the most requested feature. Implementation would:
- Enable standard tooling for client generation across all languages
- Reduce barriers for external integrations
- Improve developer experience for custom implementations

**Challenge:** Handle inlined Google proto dependencies to avoid conflicts with users' existing protobuf setup.

### 2. Quick Wins

**CI/CD Fix ([#421](https://github.com/temporalio/api/issues/421)):** The backtick escaping issue in the api-go update workflow is a straightforward shell scripting fix that improves contributor experience.

**Documentation ([#299](https://github.com/temporalio/api/issues/299)):** Update the inline comment for PollWorkflowTaskQueueResponse to clarify that "complete" history may still require pagination via `next_page_token` for workflows with long event histories.

### 3. Coordination Needed: Deprecate Legacy List Methods

**Issue:** [#307](https://github.com/temporalio/api/issues/307)

ListOpenWorkflowExecutions and ListClosedWorkflowExecutions cause user confusion due to their limitations (e.g., cannot combine status and type filters). Deprecating them in favor of the more flexible ListWorkflowExecutions requires:
- Coordination with all SDK teams
- Documentation updates
- Migration guidance for existing users

### 4. Security Enhancement: Encrypted Error Details

**Issue:** [#172](https://github.com/temporalio/api/issues/172)

Using Payloads for ApplicationFailure message and stack trace would enable encryption via custom data converters, preventing sensitive information leakage in error messages. This is particularly important for organizations with strict data handling requirements.

### 5. Technical Debt Cleanup

**Issue:** [#131](https://github.com/temporalio/api/issues/131)

At 4+ years old, the "Should be removed" fields represent long-standing tech debt. These should be scheduled for removal in a future major version release, with proper deprecation warnings in advance.

**Issue:** [#400](https://github.com/temporalio/api/issues/400)

Reorganizing third-party proto dependencies into a `thirdparty/` directory would improve compatibility for users who run protoc from the repository root, avoiding conflicts with their own Google proto versions.
