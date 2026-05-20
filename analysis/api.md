# Temporal API - Issues Analysis

**Generated:** 2026-05-20
**Total Open Issues:** 14
**Total Closed Issues:** 13
**Repository:** [temporalio/api](https://github.com/temporalio/api)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**Related:** [Server](server.md) · [Features](features.md) · [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. Activity here is low by design — the API evolves deliberately since any change has cross-cutting impact. The open backlog of 14 issues has an average age of 1,124 days (over 3 years), and 93% are stale. The repository is used primarily for intentional, tracked proposals rather than as a high-volume issue tracker. The resolution rate of 48% reflects that many proposals were addressed in the API itself, while others are pending prioritization.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| API Enhancements | 9 | Medium — broad proposals, mostly long-pending |
| Bugs/Fixes | 4 | Medium — mix of actual bugs and documentation issues |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 6 |
| Total Comments | 9 |
| Issues with Upvotes | 1 open (7%) |
| Issues with Comments | 3 open (21%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 48% (13/27) |
| Median Time to Close | 3 days (calendar) / 2 days (business) |
| Resolved within 30 days | 77% |
| Resolved within 90 days | 85% |

When issues are acted on, they are resolved very quickly (median 3 days). The long-pending open issues reflect intentional deferral, not slow execution.

---

## Issues by Category

### API Enhancements

New API fields, methods, schema registry, or protocol changes.

| Issue | 👍 | 💬 | Proposal |
|-------|-----|-----|----------|
| [#328](https://github.com/temporalio/api/issues/328) | 6 | 0 | Publish and maintain buf schema registry — make the Temporal protobuf API discoverable via the Buf Schema Registry for easier SDK generation and tooling integration |
| [#427](https://github.com/temporalio/api/issues/427) | 0 | 1 | Add configurable subpath for HTTP API — allow mounting the Temporal HTTP API under a custom URL prefix |
| [#400](https://github.com/temporalio/api/issues/400) | 0 | 0 | Move/remove third-party protos to a separate place instead of root |
| [#307](https://github.com/temporalio/api/issues/307) | 0 | 0 | Deprecate list workflow methods in favor of the newer list API |
| [#232](https://github.com/temporalio/api/issues/232) | 0 | 0 | Remove `RetryState.RETRY_STATE_IN_PROGRESS` from the public API |
| [#198](https://github.com/temporalio/api/issues/198) | 0 | 0 | Publish Postman collection for the HTTP API |
| [#172](https://github.com/temporalio/api/issues/172) | 0 | 0 | Use `Payloads` for `ApplicationFailure` message and stack trace fields |
| [#169](https://github.com/temporalio/api/issues/169) | 0 | 7 | Allow languages to customize package/namespace structure of generated proto APIs — relevant for .NET and other SDKs with strong namespace conventions |
| [#136](https://github.com/temporalio/api/issues/136) | 0 | 0 | Use `ScheduledEventId` to construct idempotence keys |

### Bugs/Fixes

Issues with existing API definitions, tooling, or generated artifacts.

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#750](https://github.com/temporalio/api/issues/750) | 0 | Deprecate cross-namespace support in workflow commands/events — current API allows cross-namespace references that are not intended to be supported long-term |
| [#421](https://github.com/temporalio/api/issues/421) | 0 | `api-go` update fails if the commit message contains a backtick — scripting/tooling bug in the release automation |
| [#299](https://github.com/temporalio/api/issues/299) | 0 | Potentially misleading inline comment for `PollWorkflowTaskQueueResponse` |
| [#131](https://github.com/temporalio/api/issues/131) | 1 | Clean up "Should be removed" fields — proto fields marked for removal that have not been cleaned up; some predate Temporal's public release |

### Documentation

| Issue | Description |
|-------|-------------|
| [#154](https://github.com/temporalio/api/issues/154) | Document SearchAttributes parsing — how the server interprets and validates search attribute values |

---

## Cross-Cutting Impact

These open issues would require coordinated changes across server and all SDKs if implemented.

| Issue | Impact | SDKs Affected |
|-------|--------|---------------|
| [#328](https://github.com/temporalio/api/issues/328) | Publish buf schema registry | All SDKs — improves tooling and code generation discoverability |
| [#172](https://github.com/temporalio/api/issues/172) | Use `Payloads` for `ApplicationFailure` | All SDKs — would require SDK-side changes to serialize/deserialize failure messages |
| [#169](https://github.com/temporalio/api/issues/169) | Customizable proto package/namespace structure | .NET primarily; affects any language with strong namespace conventions |
| [#750](https://github.com/temporalio/api/issues/750) | Deprecate cross-namespace workflow references | Server + all SDKs — behavioral change to cross-namespace API |
| [#232](https://github.com/temporalio/api/issues/232) | Remove `RETRY_STATE_IN_PROGRESS` | All SDKs — breaking change requiring SDK updates to handle removed enum value |

---

## Recommendations

1. **High impact:** Publish to the buf schema registry (#328, 6 upvotes) — the single most-demanded open item. It is an infrastructure change with zero breaking impact and improves the entire SDK ecosystem's tooling story.
2. **Quick wins:** Fix the `api-go` backtick bug in release automation (#421), clean up the misleading `PollWorkflowTaskQueueResponse` comment (#299), and add `SearchAttributes` parsing documentation (#154) — all small, contained changes.
3. **Coordination needed:** The `ApplicationFailure` Payloads change (#172) and cross-namespace deprecation (#750) require explicit cross-team coordination since they touch server behavior and all SDK serialization paths.
4. **Stale cleanup:** 13 of 14 open issues have had no activity for over 12 months. A periodic review should confirm which proposals are still on the roadmap and close those that have been superseded by newer API design decisions (e.g., #307 list workflow deprecation, #136 idempotence key proposal).
