# Temporal API - Issue Analysis

**Generated:** 2026-01-02
**Total Open Issues:** 13
**Data Source:** [issues.md](../repos/temporalio-api/issues.md) | [stats](stats-temporalio-api.md)

---

## Executive Summary

The `temporalio/api` repository defines the protobuf API definitions used across all Temporal SDKs and the server. With only 13 open issues and minimal activity, this is a low-traffic repository. However, 100% of issues are stale (>12 months old), indicating a backlog of cleanup and enhancement requests that have been deprioritized.

**Key Findings:**
- Only 1 issue has user upvotes (Buf schema registry with 6 upvotes)
- All 13 issues are stale with no recent activity
- Most issues are internal cleanup or tooling improvements
- No security vulnerabilities identified

---

## Top User Request

| Issue | 👍 | Request |
|-------|-----|---------|
| [#328](../repos/temporalio-api/issues.md#328) | **6** | Publish and maintain buf schema registry |

This is the only issue with community engagement. Users want the API protos published to the Buf Schema Registry to simplify integration with buf-based tooling.

---

## Issue Categories

### API Cleanup & Deprecation (4 issues)

Technical debt and cleanup tasks for the proto definitions:

| Issue | Description |
|-------|-------------|
| [#131](../repos/temporalio-api/issues.md#131) | Clean up "Should be removed" fields - mark as reserved |
| [#232](../repos/temporalio-api/issues.md#232) | Remove `RETRY_STATE_IN_PROGRESS` from public API (internal only) |
| [#307](../repos/temporalio-api/issues.md#307) | Deprecate `ListOpenWorkflowExecutions`/`ListClosedWorkflowExecutions` |
| [#400](../repos/temporalio-api/issues.md#400) | Move third-party protos to separate location |

### Documentation (2 issues)

| Issue | Description |
|-------|-------------|
| [#154](../repos/temporalio-api/issues.md#154) | Document SearchAttributes parsing in proto comments |
| [#299](../repos/temporalio-api/issues.md#299) | Clarify misleading comment in `PollWorkflowTaskQueueResponse` |

### Tooling & Infrastructure (3 issues)

| Issue | Description |
|-------|-------------|
| [#328](../repos/temporalio-api/issues.md#328) | Publish buf schema registry (6 👍) |
| [#198](../repos/temporalio-api/issues.md#198) | Publish Postman collection for gRPC APIs |
| [#421](../repos/temporalio-api/issues.md#421) | Bug: api-go update fails with backticks in commit message |

### Language-Specific Customization (1 issue)

| Issue | Description |
|-------|-------------|
| [#169](../repos/temporalio-api/issues.md#169) | Allow languages to customize package/namespace structure (7 comments) |

This proposal discusses allowing SDKs to have different namespace structures tailored to their language conventions (e.g., .NET preferring flatter namespaces).

### Feature Enhancements (3 issues)

| Issue | Description |
|-------|-------------|
| [#136](../repos/temporalio-api/issues.md#136) | Add `ScheduledEventId` to `PollActivityTaskQueueResponse` for idempotency keys |
| [#172](../repos/temporalio-api/issues.md#172) | Use Payloads for ApplicationFailure message/stack trace (encryption support) |
| [#427](../repos/temporalio-api/issues.md#427) | Add configurable subpath for HTTP API routes |

---

## Recommendations

### High Priority

1. **Buf Schema Registry** ([#328](../repos/temporalio-api/issues.md#328)) - Only user-requested feature with 6 upvotes. Would improve developer experience for buf users.

### Medium Priority

2. **API Cleanup** - Address [#131](../repos/temporalio-api/issues.md#131) and [#232](../repos/temporalio-api/issues.md#232) to reduce API surface confusion.

3. **Documentation** - Improve proto comments per [#154](../repos/temporalio-api/issues.md#154) and [#299](../repos/temporalio-api/issues.md#299).

### Housekeeping

- **Close or triage stale issues** - All 13 issues are >1 year old. Review and close issues that are no longer relevant or have been addressed elsewhere.
- **Fix CI bug** ([#421](../repos/temporalio-api/issues.md#421)) - Simple fix for backtick handling in commit messages.

---

## Issue Age Distribution

| Age | Count | % |
|-----|-------|---|
| 1-2 years | 3 | 23% |
| 2-3 years | 3 | 23% |
| 3+ years | 7 | 54% |

The oldest issues date back to late 2021, suggesting these are low-priority cleanup items that haven't been addressed due to limited impact on users.
