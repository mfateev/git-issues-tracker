# Temporal API - Issues Analysis

**Generated:** 2026-01-09
**Total Open Issues:** 13
**Total Closed Issues:** 0
**Repository:** [temporalio/api](https://github.com/temporalio/api)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-api/issues.md)

**Related:** [Server](server.md) | [Features](features.md) | [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. This is a foundational repository where changes have broad impact across the entire Temporal ecosystem. Issues here typically involve API design proposals, protocol changes, and cross-cutting concerns affecting all SDKs.

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

### Repository Health

| Metric | Value |
|--------|-------|
| Average Issue Age | 1,075 days |
| Stale Issues (>12 months) | 13 (100%) |
| Resolution Rate | 0% (0/13) |

> **Note:** This repository has no closed issues tracked, so resolution metrics are unavailable. All open issues are stale, indicating this repository receives minimal active maintenance for issue triage.

---

## Issues by Category

### API Enhancements

Feature requests for new API capabilities, fields, methods, or protocols.

| Issue | Title | Age |
|-------|-------|----------|
| [#328](../repos/temporalio-api/issues.md#328) | Publish and maintain buf schema registry | 2+ years |
| [#427](../repos/temporalio-api/issues.md#427) | Add configurable subpath for HTTP API | 18 months |
| [#400](../repos/temporalio-api/issues.md#400) | Move/remove third party protos to a separate place | 20 months |
| [#307](../repos/temporalio-api/issues.md#307) | Deprecate list workflow methods? | 2+ years |
| [#232](../repos/temporalio-api/issues.md#232) | Remove RetryState.RETRY_STATE_IN_PROGRESS from public API | 3+ years |
| [#198](../repos/temporalio-api/issues.md#198) | Publish Postman collection | 3+ years |
| [#172](../repos/temporalio-api/issues.md#172) | Use Payloads for ApplicationFailure message and stack trace | 3+ years |
| [#154](../repos/temporalio-api/issues.md#154) | Document SearchAttributes parsing | 3+ years |
| [#136](../repos/temporalio-api/issues.md#136) | ScheduledEventId to construct Idempotence Key | 4+ years |

### Bugs/Fixes

Issues with existing API definitions that need correction.

| Issue | Title | Age |
|-------|-------|-----|
| [#421](../repos/temporalio-api/issues.md#421) | api-go update fails if commit message contains backtick | 18 months |
| [#299](../repos/temporalio-api/issues.md#299) | Misleading inline comment for PollWorkflowTaskQueueResponse | 2+ years |
| [#131](../repos/temporalio-api/issues.md#131) | Clean up "Should be removed" fields | 4+ years |

### Proposals

Design proposals requiring discussion and cross-team coordination.

| Issue | Title | Comments | Age |
|-------|-------|----------|-----|
| [#169](../repos/temporalio-api/issues.md#169) | Allow languages to customize package/namespace structure | 7 | 3+ years |

---

## Top Issues by Priority

Priority score = upvotes x 2 + comments

| Issue | Title | Priority Score |
|-------|-------|---------------|
| [#328](../repos/temporalio-api/issues.md#328) | Publish and maintain buf schema registry | 12 |
| [#169](../repos/temporalio-api/issues.md#169) | Allow languages to customize package/namespace structure | 7 |
| [#427](../repos/temporalio-api/issues.md#427) | Add configurable subpath for HTTP API | 1 |
| [#131](../repos/temporalio-api/issues.md#131) | Clean up "Should be removed" fields | 1 |

---

## Cross-Cutting Impact

These issues would require coordinated changes across the server and multiple SDKs.

| Issue | Impact | Components Affected |
|-------|--------|---------------------|
| [#328](../repos/temporalio-api/issues.md#328) | Buf schema registry would benefit all SDK consumers | All SDKs |
| [#169](../repos/temporalio-api/issues.md#169) | Package structure changes affect generated code in every SDK | All SDKs |
| [#172](../repos/temporalio-api/issues.md#172) | Payload encoding for failures affects error handling everywhere | Server + All SDKs |
| [#232](../repos/temporalio-api/issues.md#232) | Removing retry state enum value requires deprecation cycle | Server + All SDKs |

---

## Age Distribution

| Age Range | Count |
|-----------|-------|
| 3+ years | 7 |
| 2-3 years | 3 |
| 1-2 years | 3 |
| < 1 year | 0 |

All 13 issues are stale (older than 12 months), with no recent activity or new issues filed. This suggests the API repository is relatively stable, with most changes driven internally rather than through GitHub issues.

---

## Recommendations

1. **High impact - Buf Schema Registry ([#328](../repos/temporalio-api/issues.md#328)):** With 6 upvotes, this is the most requested feature. Publishing to the Buf schema registry would make it easier for users to generate clients in any language and stay updated with API changes.

2. **Quick wins - Bug fixes:** The three bug issues ([#421](../repos/temporalio-api/issues.md#421), [#299](../repos/temporalio-api/issues.md#299), [#131](../repos/temporalio-api/issues.md#131)) appear to be straightforward fixes that could be addressed without breaking changes.

3. **Technical debt - Clean up deprecated fields ([#131](../repos/temporalio-api/issues.md#131)):** At 4+ years old, the "Should be removed" fields issue represents long-standing technical debt that should be scheduled for a major version release.

4. **Repository triage needed:** With 100% stale issues and no resolution metrics, this repository would benefit from a triage pass to close obsolete issues and prioritize actionable ones.
