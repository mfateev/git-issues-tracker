# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 98
**Total Closed Issues:** 553
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

**Semantic Data:** Sourced from `repos/temporalio-sdk-python/issues-index-enhanced.json` (pre-categorized issues with semantic fields: subcategory, apis, components, concepts, severity).

---

## Executive Summary

The Python SDK is one of the most actively maintained Temporal SDKs, with an 85% all-time resolution rate and a shrinking backlog (-24 net issues over the last 12 months). The open backlog is dominated by long-tail enhancement requests (56 features vs. 37 bugs as classified semantically) and is heavily skewed toward stale issues (55% have not seen activity in over a year). The most pressing concerns cluster around three areas: Python runtime compatibility (3.13/3.14, free-threading, musl/Alpine, Windows ARM64 wheels), workflow determinism in asyncio-heavy patterns (cancellation, `asyncio.gather` with local activities, update handlers), and sandbox/observability interop (OpenTelemetry, ddtrace, `sys.monitoring`).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (open) | 37 | **High** - several high-severity correctness defects around determinism, cancellation, and queries |
| Enhancements (open) | 56 | Medium - long-tail feature requests; cancellation/exception-hierarchy clusters are well-discussed |
| Docs (open) | 3 | Low - localized clarifications |
| High-severity items | 28 | **High** - 28 of 98 open issues are tagged severity:high (29%) |
| Stale (>12 months) | 54 | Medium - 55% of open backlog needs triage/closure |
| Python version compatibility | ~8 | **High** - 3.13/3.14 issues plus Alpine/musl/ARM64 wheels |
| Determinism / asyncio | ~7 | **High** - replay/non-determinism bugs around updates, local activities, cancellation |
| Sandbox / observability | ~6 | **High** - OTel + ddtrace + sys.monitoring + sandbox import policy |
| Security vulnerabilities | 0 | None reported on the SDK itself |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 28 |
| Total Comments | 159 |
| Issues with Upvotes | 17 (17%) |
| Issues with Comments | 49 (50%) |

User engagement is low in absolute terms - no single open issue has more than 4 upvotes - but discussion is concentrated on a small set of high-friction problems: sync activity cancellation ([#1048](https://github.com/temporalio/sdk-python/issues/1048), 11 comments), OTel/ddtrace incompatibility ([#733](https://github.com/temporalio/sdk-python/issues/733), 10 comments), activity cancel/wait semantics ([#700](https://github.com/temporalio/sdk-python/issues/700), 10 comments), the client-side PyGIL issue ([#300](https://github.com/temporalio/sdk-python/issues/300), 10 comments), and Python 3.14 compatibility ([#1517](https://github.com/temporalio/sdk-python/issues/1517), 9 comments).

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 85% (553/651) |
| Median Time to Close | 17 days (calendar) / 13 days (business) |
| Resolved within 30 days | 63% |
| Resolved within 90 days | 80% |

### Recommended Actions

1. **Immediate:** Fix high-severity determinism bugs - [#1591](https://github.com/temporalio/sdk-python/issues/1591) (non-deterministic history on cold-start update), [#1578](https://github.com/temporalio/sdk-python/issues/1578) (`asyncio.gather` with local activities), [#352](https://github.com/temporalio/sdk-python/issues/352) (cancel-between-awaitables). These threaten correctness of running workflows.
2. **Short-term:** Resolve the Python 3.14 compatibility regression ([#1517](https://github.com/temporalio/sdk-python/issues/1517)) and the sandbox/observability blockers ([#733](https://github.com/temporalio/sdk-python/issues/733), [#1326](https://github.com/temporalio/sdk-python/issues/1326), [#1254](https://github.com/temporalio/sdk-python/issues/1254)).
3. **Medium-term:** Address the cancellation cluster ([#1048](https://github.com/temporalio/sdk-python/issues/1048), [#700](https://github.com/temporalio/sdk-python/issues/700), [#810](https://github.com/temporalio/sdk-python/issues/810), [#1292](https://github.com/temporalio/sdk-python/issues/1292)) which is the single most-discussed area of the backlog.
4. **Long-term:** Build out platform coverage (musl/Alpine [#761](https://github.com/temporalio/sdk-python/issues/761), Windows ARM64 [#1592](https://github.com/temporalio/sdk-python/issues/1592), free-threading [#928](https://github.com/temporalio/sdk-python/issues/928)) and ecosystem integrations (OpenAI Agents, MCP, ADK).
5. **Housekeeping:** Triage the 54 stale issues; ~30 of them have not received activity since 2025-Q1 or earlier and are good close/wontfix candidates.

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Python SDK backlog is shrinking. The team closed substantially more than they opened in 2025-10 (-8), 2025-12 (-3), 2026-02 (-27), and 2026-06 (-3). The single biggest cleanup month was 2026-02 when 35 issues were closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 156 | 180 | -24 |

📉 **Backlog Shrinking:** 24 more issues were closed than opened over the last 12 months.

### Last 6 Months: Detailed Analysis

The most recent 6 months show 67 opened vs. 82 closed (net -15). Bug resolution is healthy (38 bugs closed), and 26 enhancements landed. Median time-to-close held at 37 calendar days / 26 business days, with 48% resolved within 30 days.

| Metric | Value |
|--------|-------|
| Issues Opened | 67 |
| Issues Closed | 82 |
| Bugs Closed | 38 |
| Enhancements Completed | 26 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | [Feature Request] Allow workflow logger to opt-out of structured logging |
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | [Bug] Can't debugging workflow using vscode |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | 1 | [Feature Request] Research and make SDK free-threading capable/compatible |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | [Feature Request] Investigate/document how to use PyCharm debugger with workflow |
| 3 | [#1502](https://github.com/temporalio/sdk-python/issues/1502) | 2 | 1 | Proposal: Google Cloud Storage external storage driver in contrib |
| 4 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | [Bug] Logs not emitted during workflow queries |
| 5 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | [Feature Request] Support InterpreterPoolExecutor from py3.14 |
| 6 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | 6 | [Feature Request] Provide supported Session implementations for OpenAI Agents |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | [Feature Request] Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | [Feature Request] Temporal exceptions from converters and codecs should fail the workflow |
| 9 | [#1578](https://github.com/temporalio/sdk-python/issues/1578) | 1 | 0 | [Bug] non determinism when using `asyncio.gather` with local activities |
| 10 | [#1450](https://github.com/temporalio/sdk-python/issues/1450) | 1 | 2 | [Feature Request] workflow.uuid7() |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | [Feature Request] Support raising cancellation in sync multiprocessed activities |
| 2 | [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 10 | [Feature Request] temporalio.CancelledError should inherit from BaseException |
| 3 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 10 | [Feature Request] Provide supported Session implementations for OpenAI Agents |
| 4 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | [Bug] Unable to run workflows with OpenTelemetry and ddtrace |
| 5 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | [Bug] No clean way to cancel an activity and wait until it's cancelled |
| 6 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | [Bug] Investigate PyGILState_Release issue for client |
| 7 | [#1517](https://github.com/temporalio/sdk-python/issues/1517) | 9 | Python 3.14 Compatibility: NameError in _outbound_schedule_activity |
| 8 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 9 | [Feature Request] Research and make SDK free-threading capable/compatible |
| 9 | [#837](https://github.com/temporalio/sdk-python/issues/837) | 9 | [Feature Request] Make Temporal logger adapter accomodate to OpenTelemetry |
| 10 | [#758](https://github.com/temporalio/sdk-python/issues/758) | 8 | [Feature Request] Suggest Providing activities extraction utilities |

The priority score reveals that the *most discussed* issues are not the *most upvoted* - users converge in discussion around cancellation semantics, OTel interop, and Python 3.14 compatibility even when they don't explicitly upvote.

---

## Issue Analysis by Category

### Bugs - Determinism & Replay (5 issues)

This is the highest-risk cluster: workflow histories diverging at replay, or asyncio patterns producing non-deterministic results. Any of these can cause silent corruption of running workflows.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1591](https://github.com/temporalio/sdk-python/issues/1591) | 0 | Non-deterministic history generated after update handled on cold-start (high severity) |
| [#1578](https://github.com/temporalio/sdk-python/issues/1578) | 1 | `asyncio.gather` with local activities produces non-determinism (high severity) |
| [#352](https://github.com/temporalio/sdk-python/issues/352) | 0 | Cancel received between awaitables not cancelling workflow (high severity) |
| [#462](https://github.com/temporalio/sdk-python/issues/462) | 0 | Handle possibility of update-before-start (high severity) |
| [#436](https://github.com/temporalio/sdk-python/issues/436) | 0 | Continue-as-new raised from update handler should be a task failure (high severity) |

### Bugs - Activity Cancellation & Lifecycle (4 issues)

The single most-discussed area in the backlog. Users repeatedly hit limits in how the SDK exposes cancellation semantics, particularly for sync (multiprocess) activities.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and wait until it's cancelled (high; 10 comments) |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Cannot raise cancellation in sync multiprocessed activities (high; 11 comments) |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for `cancelled`, `uncancel`, and `cancelling()` |
| [#1600](https://github.com/temporalio/sdk-python/issues/1600) | 0 | Spurious "exception in shielded future" ERROR log per cancelled activity on Py 3.11+ (residual after [#1523](https://github.com/temporalio/sdk-python/issues/1523)) |

### Bugs - Sandbox & Observability Interop (4 issues)

Sandbox behavior is a recurring sharp edge for users adopting Python observability ecosystems (OpenTelemetry, ddtrace, coverage tools).

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | Cannot run workflows with OpenTelemetry and ddtrace (high; 10 comments) |
| [#1326](https://github.com/temporalio/sdk-python/issues/1326) | 0 | `sys.monitoring` callbacks (coverage) cause workflow sandbox hang on Python 3.12+ |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | 0 | `SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH` warns spuriously |
| [#607](https://github.com/temporalio/sdk-python/issues/607) | 0 | Prevent hot-reload of workflow definitions from disk (high) |

### Bugs - Python Version Compatibility (3 issues)

The SDK actively chases the Python release train (CPython 3.11 -> 3.14). Compatibility regressions land here.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1517](https://github.com/temporalio/sdk-python/issues/1517) | 0 | Python 3.14: `NameError` in `_outbound_schedule_activity` (high; 9 comments) |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test (high) |
| [#622](https://github.com/temporalio/sdk-python/issues/622) | 1 | Unable to install temporal on `python:3.11-alpine3.16` (high) |

### Bugs - Worker / Runtime (5 issues)

Runtime-level defects in worker polling, GIL handling, and worker lifecycle.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | 0 | Worker intermittently stops polling after sync activity completion (high) |
| [#1489](https://github.com/temporalio/sdk-python/issues/1489) | 0 | `temporal_worker_task_slots_used` never reaches 0 (high; metrics never drain) |
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 0 | `PyGILState_Release` issue for client (high; 10 comments) |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | 0 | Cannot replace worker client if default Runtime is used |
| [#814](https://github.com/temporalio/sdk-python/issues/814) | 0 | Python client unable to connect to self-hosted Temporal server via proxy (high) |

### Bugs - Queries, Updates & Local Activities (6 issues)

Smaller scoped but still high-severity correctness bugs around specific workflow interactions.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#641](https://github.com/temporalio/sdk-python/issues/641) | 1 | Unregistered query produces obscure encoding error instead of clear failure (high) |
| [#699](https://github.com/temporalio/sdk-python/issues/699) | 0 | `workflow.wait` broken with `asyncio.FIRST_COMPLETED` and local activities (high) |
| [#1203](https://github.com/temporalio/sdk-python/issues/1203) | 0 | `retry_policy` not set in `activity.info()` despite being defined |
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Logs not emitted during workflow queries |
| [#778](https://github.com/temporalio/sdk-python/issues/778) | 0 | Strange workflow task timeout (high) |
| [#435](https://github.com/temporalio/sdk-python/issues/435) | 0 | Overload checking not catching bad parameters anymore (high) |

### Bugs - Data Conversion & Logging (5 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1237](https://github.com/temporalio/sdk-python/issues/1237) | 0 | Converter returns bad value converting `dict[None, Any]` |
| [#427](https://github.com/temporalio/sdk-python/issues/427) | 0 | Dataclasses require even defaulted fields in the JSON dict |
| [#503](https://github.com/temporalio/sdk-python/issues/503) | 0 | Mutating `extra` in activity/workflow loggers |
| [#496](https://github.com/temporalio/sdk-python/issues/496) | 0 | Fix explanation of Pydantic datetime issue (docs) |
| [#697](https://github.com/temporalio/sdk-python/issues/697) | 0 | Recursive exceptions break failure converter (high) |

### Test Server & Test Framework (4 issues)

Self-tagged "low/medium" but block reliable CI for Python SDK users.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server in time-skipping mode does not return `userMetadata.summary` (blocking for users relying on metadata) |
| [#826](https://github.com/temporalio/sdk-python/issues/826) | 0 | `test_unfinished_handler_on_workflow_termination` flaky |
| [#1079](https://github.com/temporalio/sdk-python/issues/1079) | 0 | Add tests for custom slot supplier slot info |
| [#563](https://github.com/temporalio/sdk-python/issues/563) | 0 | Update test running to replay |

### Security (0 open SDK-level issues)

No security vulnerabilities are open against the Python SDK itself. The historical `security` and `dependency-vulnerability` subcategories contain only already-closed dependabot/grpc/protobuf bumps.

---

## API & Component Hotspots

Derived from `components` and `apis` fields on open issues. These are the parts of the codebase most often referenced in open issues - useful as prioritization signals for refactoring or test coverage investments.

| API / Component | Issue Count | Notes |
|-----------------|-------------|-------|
| `worker` (component) | 22 | Top component across the backlog; touches polling, slots, lifecycle, sandbox |
| `activity-executor` (component) | 16 | Strong overlap with cancellation, multiprocess, and sync activity issues |
| `execute_activity` (API) | 8 | Most-referenced public API in open issues |
| `Worker` (API) | 7 | Worker construction / configuration |
| `build-system` / packaging | 6 | Wheels (musl, ARM64, Alpine), proto generation |
| `workflow` (component) | 6 | Workflow runtime semantics |
| `update-handler` (component) | 5 | Update lifecycle defects ([#462](https://github.com/temporalio/sdk-python/issues/462), [#436](https://github.com/temporalio/sdk-python/issues/436), etc.) |
| `client` (component) | 5 | Client lifecycle and connection issues |
| `workflow-execution` (component) | 5 | Activation job application, ordering |
| `Client.connect` (API) | 4 | Proxy, TLS, self-hosted server connection |
| `cancellation-handler` (component) | 4 | Cancellation cluster |
| `workflow-executor` (component) | 4 | Workflow runner internals |
| `asyncio-integration` (component) | 4 | Determinism, shielded futures, gather |
| `converter` (component) | 4 | Data conversion bugs |
| `error-handling` (component) | 4 | Failure converter, exception passthrough |
| `workflow-sandbox` (component) | 3 | Import policy, `sys.monitoring` |
| `metrics` (component) | 3 | Slot metrics, OTel histograms |
| `query-handler` (component) | 3 | Query semantics, logs during queries |

**Severity distribution by hotspot:** the `worker` and `activity-executor` components carry most of the high-severity bugs (~half of the 28 high-severity open issues touch one of these). Investments in cancellation, polling, and slot-management code paths would have the largest impact on backlog reduction.

---

## Enhancement Requests (56 issues)

Below are the dominant enhancement themes that emerge from the data.

### Cancellation & Exception Hierarchy

The most-discussed enhancement cluster overall. Users want both better primitives and more Pythonic exception types.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Support raising cancellation in sync multiprocessed activities (11 comments) |
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 1 | `temporalio.CancelledError` should inherit from `BaseException` (8 comments) |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for `cancelled`, `uncancel`, and `cancelling()` |
| [#352](https://github.com/temporalio/sdk-python/issues/352) | 0 | Cancel received between awaitables not cancelling workflow (also tracked as bug) |

### Error Handling & Stack Traces

| Issue | 👍 | Request |
|-------|-----|---------|
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exception improvements |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Temporal exceptions from converters/codecs should fail the workflow |
| [#608](https://github.com/temporalio/sdk-python/issues/608) | 0 | Make payload conversion errors on workflow input more discriminative |
| [#1262](https://github.com/temporalio/sdk-python/issues/1262) | 0 | Obtain `ApplicationError` details with type hint |

### Logging & Observability

| Issue | 👍 | Request |
|-------|-----|---------|
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 1 | Make Temporal logger adapter accommodate OpenTelemetry (7 comments) |
| [#669](https://github.com/temporalio/sdk-python/issues/669) | 0 | Guidance on OpenTelemetry logging + metrics (high severity) |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | 0 | Schedule creation should create tracing span by default (6 comments) |
| [#1130](https://github.com/temporalio/sdk-python/issues/1130) | 0 | Support custom tracing providers |
| [#1432](https://github.com/temporalio/sdk-python/issues/1432) | 0 | Expose `histogram_bucket_overrides` on `OpenTelemetryConfig` |
| [#892](https://github.com/temporalio/sdk-python/issues/892) | 0 | Support `merge_extra` in custom adapters |
| [#1049](https://github.com/temporalio/sdk-python/issues/1049) | 0 | Access metric meter in multi-processed workers |
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose `worker._count_not_evict_count` as SDK metric |

### Python Runtime / Packaging

Tracking the Python release train and broader deployment platforms.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | Research/make SDK free-threading (PEP 703) capable |
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support `InterpreterPoolExecutor` from Python 3.14 |
| [#1592](https://github.com/temporalio/sdk-python/issues/1592) | 0 | Windows ARM64 wheel support |
| [#761](https://github.com/temporalio/sdk-python/issues/761) | 0 | Publish musl wheel |
| [#1579](https://github.com/temporalio/sdk-python/issues/1579) | 0 | Support protobuf 7 |
| [#803](https://github.com/temporalio/sdk-python/issues/803) | 0 | Run different worker types in separate threads |

### Ecosystem & AI Integrations

A recent expansion area as Temporal positions itself for AI agent workloads.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | Supported Session implementations for OpenAI Agents (6 comments) |
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | 0 | OpenAI Agents Streaming support (high severity) |
| [#1470](https://github.com/temporalio/sdk-python/issues/1470) | 0 | Support `ToolContext` for ADK function tools |
| [#1056](https://github.com/temporalio/sdk-python/issues/1056) | 0 | Add workflow MCP client |
| [#1502](https://github.com/temporalio/sdk-python/issues/1502) | 2 | Google Cloud Storage external storage driver in contrib |

### Worker / Workflow Semantics

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1450](https://github.com/temporalio/sdk-python/issues/1450) | 1 | `workflow.uuid7()` |
| [#1289](https://github.com/temporalio/sdk-python/issues/1289) | 0 | Warn if SDK detects a workflow history over a certain size |
| [#618](https://github.com/temporalio/sdk-python/issues/618) | 0 | Improve `wait_condition` semantics |
| [#535](https://github.com/temporalio/sdk-python/issues/535) | 0 | Turn invalid asyncio call warnings into errors |
| [#754](https://github.com/temporalio/sdk-python/issues/754) | 0 | Add explicit memoization support to `patched()` |
| [#719](https://github.com/temporalio/sdk-python/issues/719) | 0 | Provide "workflow local" storage |
| [#467](https://github.com/temporalio/sdk-python/issues/467) | 0 | Support workflow metadata query |
| [#870](https://github.com/temporalio/sdk-python/issues/870) | 0 | Worker Versioning high-level client |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Override Worker Deployment Version when invoking child workflows |
| [#1367](https://github.com/temporalio/sdk-python/issues/1367) | 0 | Conflict-token retry loop for schedule updates (high severity) |
| [#1543](https://github.com/temporalio/sdk-python/issues/1543) | 0 | Operator commands for Standalone Activities |

### Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | PyCharm debugger with workflow (docs) |
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Activities extraction utilities (6 comments) |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` (7 comments) |
| [#360](https://github.com/temporalio/sdk-python/issues/360) | 1 | Allow type hints even if arg count mismatches |
| [#625](https://github.com/temporalio/sdk-python/issues/625) | 0 | Fix pyright type-checking violations |
| [#390](https://github.com/temporalio/sdk-python/issues/390) | 0 | PoC static analyzer for Python |
| [#421](https://github.com/temporalio/sdk-python/issues/421) | 0 | Move from black/isort to Ruff |
| [#762](https://github.com/temporalio/sdk-python/issues/762) | 0 | Enforce no-mutable-defaults lint rule |
| [#1275](https://github.com/temporalio/sdk-python/issues/1275) | 0 | Look into alternative API doc generators |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

55% of the open backlog (54 issues) has had no activity in over a year. Many predate the current Python SDK shape and warrant explicit triage.

- **Close candidates (appear resolved or stale by neglect):**
  - [#321](https://github.com/temporalio/sdk-python/issues/321) - last updated 2023-07-05, predates current exception model
  - [#390](https://github.com/temporalio/sdk-python/issues/390) - PoC static analyzer, no recent traction
  - [#603](https://github.com/temporalio/sdk-python/issues/603) - PyCharm debugging, partially addressed by recent [#238](https://github.com/temporalio/sdk-python/issues/238) closure
  - [#731](https://github.com/temporalio/sdk-python/issues/731), [#762](https://github.com/temporalio/sdk-python/issues/762), [#772](https://github.com/temporalio/sdk-python/issues/772), [#773](https://github.com/temporalio/sdk-python/issues/773) - low-severity cleanups, no community interest
  - [#421](https://github.com/temporalio/sdk-python/issues/421) - Ruff migration, decide-or-close
  - [#45](https://github.com/temporalio/sdk-python/issues/45) - oldest open issue (stack trace query), should be re-scoped or closed

- **Needs triage (real but unprioritized):**
  - [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGIL issue (10 comments, marked high)
  - [#641](https://github.com/temporalio/sdk-python/issues/641) - unregistered query handling (high)
  - [#697](https://github.com/temporalio/sdk-python/issues/697) - recursive failure converter (high)
  - [#700](https://github.com/temporalio/sdk-python/issues/700), [#699](https://github.com/temporalio/sdk-python/issues/699) - cancellation/local activity bugs (high)
  - [#462](https://github.com/temporalio/sdk-python/issues/462) - update-before-start (high)
  - [#778](https://github.com/temporalio/sdk-python/issues/778) - workflow task timeout (high)
  - [#814](https://github.com/temporalio/sdk-python/issues/814) - proxy connection (high)
  - [#834](https://github.com/temporalio/sdk-python/issues/834) - Python 3.13.3 macOS hang (high)

- **Keep open (valid, awaiting capacity):**
  - [#807](https://github.com/temporalio/sdk-python/issues/807) - stack trace loss (2 upvotes, community interest)
  - [#875](https://github.com/temporalio/sdk-python/issues/875) - evict-count metric
  - [#758](https://github.com/temporalio/sdk-python/issues/758) - activity extraction utilities
  - [#618](https://github.com/temporalio/sdk-python/issues/618) - `wait_condition` semantics

### Duplicate Candidates

`linkedIssues` cross-references reveal several near-duplicate clusters:

- **Cancellation in sync/multiprocess activities:** [#1048](https://github.com/temporalio/sdk-python/issues/1048) and [#1047](https://github.com/temporalio/sdk-python/issues/1047) (linked); also overlaps with [#700](https://github.com/temporalio/sdk-python/issues/700), [#810](https://github.com/temporalio/sdk-python/issues/810).
- **Shielded-future error logs:** [#1600](https://github.com/temporalio/sdk-python/issues/1600) is explicitly a follow-up to [#1504](https://github.com/temporalio/sdk-python/issues/1504) and [#1523](https://github.com/temporalio/sdk-python/issues/1523).
- **Logger / OpenTelemetry adapter:** [#837](https://github.com/temporalio/sdk-python/issues/837) and [#838](https://github.com/temporalio/sdk-python/issues/838) (linked).
- **External storage drivers:** [#1502](https://github.com/temporalio/sdk-python/issues/1502) overlaps with [#1388](https://github.com/temporalio/sdk-python/issues/1388) and [#1390](https://github.com/temporalio/sdk-python/issues/1390).
- **Pyright type-checking:** [#625](https://github.com/temporalio/sdk-python/issues/625) links back to [#420](https://github.com/temporalio/sdk-python/issues/420).
- **Workflow history size warning:** [#1289](https://github.com/temporalio/sdk-python/issues/1289) links to [#705](https://github.com/temporalio/sdk-python/issues/705).
- **PyGIL client issue:** [#300](https://github.com/temporalio/sdk-python/issues/300) links to server-side [#1274](https://github.com/temporalio/sdk-python/issues/1274).

These should be consolidated under canonical tracking issues.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Determinism cluster: [#1591](https://github.com/temporalio/sdk-python/issues/1591), [#1578](https://github.com/temporalio/sdk-python/issues/1578), [#352](https://github.com/temporalio/sdk-python/issues/352), [#462](https://github.com/temporalio/sdk-python/issues/462), [#436](https://github.com/temporalio/sdk-python/issues/436)
- Python 3.14 regression: [#1517](https://github.com/temporalio/sdk-python/issues/1517)
- Worker polling stoppage after sync activity: [#1295](https://github.com/temporalio/sdk-python/issues/1295)
- Slot metric never draining: [#1489](https://github.com/temporalio/sdk-python/issues/1489)
- Headers + external storage: [#1395](https://github.com/temporalio/sdk-python/issues/1395)
- Spurious error logs on cancel: [#1600](https://github.com/temporalio/sdk-python/issues/1600)

### Phase 2: Developer Experience (Short-term)
- Sandbox interop with OpenTelemetry/ddtrace/coverage: [#733](https://github.com/temporalio/sdk-python/issues/733), [#1326](https://github.com/temporalio/sdk-python/issues/1326), [#1254](https://github.com/temporalio/sdk-python/issues/1254)
- Test server `userMetadata.summary`: [#851](https://github.com/temporalio/sdk-python/issues/851)
- Proxy/self-hosted connection: [#814](https://github.com/temporalio/sdk-python/issues/814)
- Logging during queries: [#1267](https://github.com/temporalio/sdk-python/issues/1267)
- Unregistered-query error message: [#641](https://github.com/temporalio/sdk-python/issues/641)
- Activity `retry_policy` info: [#1203](https://github.com/temporalio/sdk-python/issues/1203)

### Phase 3: Feature Expansion (Medium-term)
- Cancellation primitives (consolidate [#1048](https://github.com/temporalio/sdk-python/issues/1048) / [#700](https://github.com/temporalio/sdk-python/issues/700) / [#810](https://github.com/temporalio/sdk-python/issues/810) / [#1292](https://github.com/temporalio/sdk-python/issues/1292) into a single design)
- OpenTelemetry: [#837](https://github.com/temporalio/sdk-python/issues/837), [#669](https://github.com/temporalio/sdk-python/issues/669), [#454](https://github.com/temporalio/sdk-python/issues/454), [#1130](https://github.com/temporalio/sdk-python/issues/1130), [#1432](https://github.com/temporalio/sdk-python/issues/1432)
- AI / agents integration: [#1089](https://github.com/temporalio/sdk-python/issues/1089), [#1009](https://github.com/temporalio/sdk-python/issues/1009), [#1470](https://github.com/temporalio/sdk-python/issues/1470), [#1056](https://github.com/temporalio/sdk-python/issues/1056)
- Platform coverage: Windows ARM64 ([#1592](https://github.com/temporalio/sdk-python/issues/1592)), musl ([#761](https://github.com/temporalio/sdk-python/issues/761)), free-threading ([#928](https://github.com/temporalio/sdk-python/issues/928)), `InterpreterPoolExecutor` ([#1154](https://github.com/temporalio/sdk-python/issues/1154))
- `workflow.uuid7()` ([#1450](https://github.com/temporalio/sdk-python/issues/1450)), `StrEnum` support ([#676](https://github.com/temporalio/sdk-python/issues/676))

### Phase 4: Maintenance (Ongoing)
- Triage the 54 stale issues; close ~20 candidates listed above
- Consolidate duplicate clusters under canonical tracking issues
- Decide on developer-tooling enhancements ([#421](https://github.com/temporalio/sdk-python/issues/421) Ruff, [#762](https://github.com/temporalio/sdk-python/issues/762) lint rule, [#1275](https://github.com/temporalio/sdk-python/issues/1275) API doc generator)
- Dependency hygiene (protobuf 7 [#1579](https://github.com/temporalio/sdk-python/issues/1579))
