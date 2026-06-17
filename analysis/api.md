# Temporal API - Issues Analysis

**Generated:** 2026-06-16
**Total Open Issues:** 14
**Total Closed Issues:** 13
**Repository:** [temporalio/api](https://github.com/temporalio/api)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**Related:** [Server](server.md) · [Features](features.md) · [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. Issues here typically involve:
- API design proposals
- Protocol changes
- Cross-cutting concerns affecting all SDKs
- Proto tooling, packaging, and distribution

The repository is low-volume but high-leverage: each change typically touches the server and every SDK. The backlog is dominated by long-lived API design proposals — 13 of 14 open issues (93%) are older than 12 months, and 57% are 3+ years old. The pace of new issues is very low (3 opened in the last 12 months), and there is only one issue with meaningful upvotes ([#328](https://github.com/temporalio/api/issues/328), 6 👍).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| API Enhancements | 9 | Medium |
| Bugs/Fixes | 4 | Low–Medium |
| Documentation | 1 (plus 2 doc-flavored items) | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 6 |
| Total Comments | 9 |
| Issues with Upvotes | 1 (7%) |
| Issues with Comments | 3 (21%) |
| Average Age (days) | 1151 |
| Stale Issues (>12 months) | 13 (93%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 48% (13/27) |
| Median Time to Close (calendar) | 3 days |
| Median Time to Close (business) | 2 days |
| Avg Time to Close (calendar) | 27 days |
| 90th Percentile (calendar) | 105 days |
| Resolved within 30 days | 77% |
| Resolved within 90 days | 85% |

Closures skew heavily toward "fast or never": most resolved issues close within days, but anything that survives the first sprint of attention tends to linger indefinitely. There are no inferred `wontfix`, `stale`, or `duplicate` closures — the repo is curated, not pruned.

---

## Issues by Category

### API Enhancements

New API fields, methods, protocol additions, and cross-cutting API design proposals.

| Issue | 👍 | Proposal |
|-------|-----|----------|
| [#328](https://github.com/temporalio/api/issues/328) | 6 | Publish and maintain a Buf schema registry for the Temporal API. Main blocker: ensuring the inlined Google dependency isn't accidentally republished. |
| [#427](https://github.com/temporalio/api/issues/427) | 0 | Make HTTP API routes configurable at a non-root subpath (e.g. `/api`) to avoid conflicts with UI client-side routes. |
| [#400](https://github.com/temporalio/api/issues/400) | 0 | Move third-party protobuf dependencies (Google API/Protobuf) out of the repo root into a separate location to clean up proto includes. |
| [#307](https://github.com/temporalio/api/issues/307) | 0 | Deprecate `ListOpenWorkflowExecutions` / `ListClosedWorkflowExecutions` in favor of the unified `ListWorkflowExecutions` API. |
| [#232](https://github.com/temporalio/api/issues/232) | 0 | Remove `RetryState.RETRY_STATE_IN_PROGRESS` from the public API — it's only meaningful internally and confuses SDK users. |
| [#198](https://github.com/temporalio/api/issues/198) | 0 | Publish a Postman collection now that Postman supports gRPC, to improve API explorability. |
| [#172](https://github.com/temporalio/api/issues/172) | 0 | Use `Payloads` for `ApplicationFailure.message` and `stack_trace` so they can be encrypted by the data converter. Security/compliance angle. |
| [#169](https://github.com/temporalio/api/issues/169) | 0 | Allow languages to customize generated package/namespace structure — currently .NET requires awkward imports because of how packages are laid out. (7 comments, most engaged design discussion.) |
| [#136](https://github.com/temporalio/api/issues/136) | 0 | Add `ScheduledEventId` to `PollActivityTaskQueueResponse` so SDKs can construct idempotence keys for deduping side effects. |

### Bugs/Fixes

| Issue | Description |
|-------|-------------|
| [#750](https://github.com/temporalio/api/issues/750) | [Bug] Deprecate cross-namespace support in workflow commands/events. Temporal Server 1.30.0 disabled cross-namespace workflow commands by default for security reasons; SDKs should deprecate the corresponding `namespace` fields on workflow commands. |
| [#421](https://github.com/temporalio/api/issues/421) | [Bug] `api-go` update workflow fails when the commit message contains backtick (`` ` ``) characters due to shell escaping in the "Prepare inputs" step. Pure CI/tooling bug. |
| [#299](https://github.com/temporalio/api/issues/299) | [Document] Inline comment on `PollWorkflowTaskQueueResponse` is misleading: it describes the history as "complete" even when long histories are paginated. (Labeled bug, but really a doc fix.) |
| [#131](https://github.com/temporalio/api/issues/131) | Clean up "Should be removed" fields — convert deprecated proto fields to `reserved` and address lingering TODOs. API hygiene. |

### Documentation

| Issue | Description |
|-------|-------------|
| [#154](https://github.com/temporalio/api/issues/154) | Document `SearchAttributes` parsing — proto definitions don't explain how to specify search attribute types when calling `StartWorkflowExecution`, leaving users to guess at payload encoding. |
| [#299](https://github.com/temporalio/api/issues/299) | (Also listed under Bugs) Misleading inline comment for `PollWorkflowTaskQueueResponse`. |
| [#198](https://github.com/temporalio/api/issues/198) | (Also under Enhancements) Postman collection — touches documentation/developer experience. |

---

## Cross-Cutting Impact

By definition, almost every open issue in this repository would propagate to the server and every SDK. The table below highlights the issues whose impact is broadest and whose coordination cost is highest.

| Issue | Impact | SDKs Affected |
|-------|--------|---------------|
| [#750](https://github.com/temporalio/api/issues/750) | Deprecate cross-namespace workflow command fields. Touches every SDK's workflow-start/child-workflow APIs and the server. | All SDKs |
| [#307](https://github.com/temporalio/api/issues/307) | Deprecating `ListOpen/ClosedWorkflowExecutions` requires every SDK to migrate clients and helpers to `ListWorkflowExecutions`. | All SDKs |
| [#232](https://github.com/temporalio/api/issues/232) | Removing `RETRY_STATE_IN_PROGRESS` is a breaking proto enum change; every SDK exposing `RetryState` is affected. | All SDKs |
| [#172](https://github.com/temporalio/api/issues/172) | Switching `ApplicationFailure.message` / `stack_trace` to `Payloads` is a wire-level change requiring data-converter integration in every SDK. | All SDKs |
| [#169](https://github.com/temporalio/api/issues/169) | Language-customizable package/namespace structure is primarily about .NET ergonomics but affects every code-generation pipeline. | .NET (primary), all SDK codegen |
| [#136](https://github.com/temporalio/api/issues/136) | Adding `ScheduledEventId` to `PollActivityTaskQueueResponse` requires server-side wiring and SDK activity-worker changes everywhere. | Server + all SDKs |
| [#131](https://github.com/temporalio/api/issues/131) | Converting "Should be removed" fields to `reserved` is a wire-compatibility-sensitive cleanup across all SDKs and the server. | All SDKs + server |
| [#328](https://github.com/temporalio/api/issues/328) | A published Buf schema registry would change how every downstream consumer (SDKs, third-party tooling) fetches and generates code. | All SDKs (build pipelines) |

See also [themes/api-design.md](themes/api-design.md) for the broader cross-repo API design discussion.

---

## Recommendations

1. **High impact (broad user demand or security-driven):**
   - **[#750](https://github.com/temporalio/api/issues/750)** — Cross-namespace deprecation. Server already disabled the behavior in 1.30.0; the API/SDK side should be aligned so users aren't left with fields that silently no-op. Coordinated SDK deprecation messaging needed.
   - **[#328](https://github.com/temporalio/api/issues/328)** — Buf schema registry is the only open issue with material upvotes (6 👍) and would unlock cleaner downstream codegen for the community. The technical blocker (Google dependency inlining) is well-understood.
   - **[#172](https://github.com/temporalio/api/issues/172)** — `Payloads` for `ApplicationFailure` is the only open issue with a clear security/compliance angle (encrypting sensitive error data).

2. **Quick wins (small surface area, mostly doc/cleanup):**
   - **[#299](https://github.com/temporalio/api/issues/299)** — Fix the misleading `PollWorkflowTaskQueueResponse` comment. One-line proto comment change.
   - **[#421](https://github.com/temporalio/api/issues/421)** — Escape backticks in the `api-go` update workflow. Pure CI fix, no API impact.
   - **[#154](https://github.com/temporalio/api/issues/154)** — Document `SearchAttributes` payload encoding in the proto file.

3. **Coordination needed (require server + SDK roadmap alignment):**
   - **[#307](https://github.com/temporalio/api/issues/307)** — Deprecating `ListOpen/ClosedWorkflowExecutions` needs a migration window across all SDKs and possibly UI/CLI.
   - **[#232](https://github.com/temporalio/api/issues/232)** and **[#131](https://github.com/temporalio/api/issues/131)** — Removing public enum values / "Should be removed" fields are wire-compatibility decisions; need server-side sign-off before any SDK changes.
   - **[#169](https://github.com/temporalio/api/issues/169)** — Codegen namespace customization affects every SDK's generated-code build; the .NET use case should drive the design, but the change must be reviewed by every SDK owner.
   - **[#136](https://github.com/temporalio/api/issues/136)** — Adding `ScheduledEventId` to activity polling requires server changes plus SDK adoption to deliver the user-facing idempotence benefit.

4. **Backlog hygiene:** 13 of 14 open issues are >12 months old with zero engagement. A focused triage pass — decide/defer/close — would significantly improve signal in this repository, since legitimate new proposals are easily lost in long-stale enhancement requests.
