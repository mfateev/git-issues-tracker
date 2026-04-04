# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 89
**Total Closed Issues:** 530
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Python SDK has 89 open issues with a strong 86% resolution rate (530/619) and a median close time of 17 calendar days. The backlog is actively shrinking, with 28 more issues closed than opened over the past 12 months. The primary pain points remain **workflow sandbox compatibility** (particularly with OpenTelemetry and ddtrace), **IDE debugging support** within the sandboxed environment, and **activity cancellation semantics**. Over half (54%) of open issues are stale with no activity for over 12 months, indicating a continued need for triage and housekeeping. A new security issue concerning Rust dependency CVEs requires immediate attention.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 30 | High - includes sandbox compatibility, worker polling, and proxy connection issues affecting production |
| Enhancements | 52 | Medium - many are internal improvements or lower-demand features |
| Security (Rust CVEs) | 1 | High - open dependency vulnerability with known CVEs and available patches |
| Unlabeled | 7 | Medium - need triage and labeling |
| Stale (>12 months) | 48 | Low - require review for closure or reactivation |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (open) | 27 |
| Total Comments (open) | 143 |
| Issues with Upvotes | 14 (16%) |
| Issues with Comments | 41 (46%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 86% (530/619) |
| Median Time to Close | 17 days (calendar) / 13 days (business) |
| Resolved within 30 days | 63% |
| Resolved within 90 days | 81% |

### Closure Reasons (Inferred)

| Reason | Count | % |
|--------|-------|---|
| Completed (features) | 195 | 37% |
| Fixed (bugs) | 148 | 28% |
| Self-resolved | 132 | 25% |
| Other | 55 | 10% |

### Recommended Actions

1. **Immediate:** Address Rust dependency CVEs ([#1403](https://github.com/temporalio/sdk-python/issues/1403)) -- PRs are available and awaiting merge; fix payload transformation bug ([#1395](https://github.com/temporalio/sdk-python/issues/1395))
2. **Short-term:** Improve IDE debugging support for VSCode and PyCharm (top user-requested feature by upvotes); resolve sandbox hang on Python 3.14 ([#1326](https://github.com/temporalio/sdk-python/issues/1326))
3. **Medium-term:** Clarify activity cancellation patterns, improve CancelledError hierarchy ([#1292](https://github.com/temporalio/sdk-python/issues/1292)), and address OpenTelemetry/ddtrace sandbox compatibility ([#733](https://github.com/temporalio/sdk-python/issues/733))
4. **Long-term:** Evaluate Python 3.14 InterpreterPoolExecutor ([#1154](https://github.com/temporalio/sdk-python/issues/1154)) and free-threading support ([#928](https://github.com/temporalio/sdk-python/issues/928)); expand OpenAI Agents integration ([#1089](https://github.com/temporalio/sdk-python/issues/1089), [#1009](https://github.com/temporalio/sdk-python/issues/1009))
5. **Housekeeping:** Triage 48 stale issues; close or reactivate based on current relevance

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking with 28 more issues closed than opened over the past 12 months. February 2026 saw a particularly strong cleanup effort with 35 issues closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 151 | 179 | -28 |

Backlog Shrinking: The SDK team is actively reducing the accumulated historical backlog, especially through focused cleanup sprints.

### Last 6 Months: Detailed Analysis

The last 6 months show strong resolution throughput with 28 more issues closed than opened, driven by a significant cleanup in February 2026.

| Metric | Value |
|--------|-------|
| Issues Opened | 72 |
| Issues Closed | 100 |
| Net Change | -28 |
| Bugs Closed | 44 |
| Enhancements Completed | 40 |

### Time to Close (Last 6 Months)

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average | 220 | 158 |
| Median | 32 | 23 |
| 90th Percentile | 680 | 487 |

The high average and P90 values reflect older stale issues being closed during the cleanup, while the median of 32 days shows healthy resolution speed for newly filed issues.

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of suppression |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | GeneratorExit possibly causing issues on context manager |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | 1 | Research and make SDK free-threading capable/compatible |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | Investigate/document how to use PyCharm debugger with workflows |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | Can't debug workflow using VSCode |
| 4 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | Logs not emitted during workflow queries |
| 5 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | Support InterpreterPoolExecutor from py3.14 |
| 6 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | 4 | Provide supported Session implementations for OpenAI Agents |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | Temporal exceptions from converters/codecs should fail workflow not task |
| 9 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 10 | [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | 3 | Expose SDK metric for worker._count_not_evict_count |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Support raising cancellation in sync multiprocessed activities |
| 2 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | Can't debug workflow using VSCode |
| 3 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 4 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel an activity and wait until it's cancelled |
| 5 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | Investigate PyGILState_Release issue for client |
| 6 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 9 | Research and make SDK free-threading capable/compatible |
| 7 | [#837](https://github.com/temporalio/sdk-python/issues/837) | 9 | Make Temporal logger adapter accommodate OpenTelemetry |
| 8 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 8 | Provide supported Session implementations for OpenAI Agents |
| 9 | [#758](https://github.com/temporalio/sdk-python/issues/758) | 8 | Suggest providing activities extraction utilities |
| 10 | [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 7 | temporalio.CancelledError should inherit from BaseException |
| 11 | [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 7 | Setting debug_mode in Worker still doesn't allow breakpoints |
| 12 | [#676](https://github.com/temporalio/sdk-python/issues/676) | 7 | Support (str, Enum) like StrEnum |
| 13 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 7 | Investigate/document how to use PyCharm debugger with workflows |
| 14 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 7 | Loss of stack trace information |
| 15 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 6 | Support InterpreterPoolExecutor from py3.14 |

---

## Issue Analysis by Category

### Security: Rust Dependency CVEs (1 issue)

A new security issue was filed on 2026-04-01 reporting vulnerabilities in the Rust dependency chain (rustls-webpki and tar-rs). Dependabot PRs are available and awaiting maintainer review.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1403](https://github.com/temporalio/sdk-python/issues/1403) | 0 | Rust CVEs for rustls-webpki (GHSA-pwjx-qhcg-rvj4) and tar-rs (CVE-2026-33055/33056) detected by Trivy scan |

**Action Required:** Merge available dependabot PRs to resolve known vulnerabilities.

### Workflow Sandbox Issues (5 issues)

The sandbox remains a significant pain point for Python SDK users. Third-party library compatibility within the sandboxed workflow environment continues to generate high-engagement bug reports. The newest issue involves Python 3.14's `sys.monitoring` callbacks causing hangs.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1326](https://github.com/temporalio/sdk-python/issues/1326) | 0 | sys.monitoring callbacks (coverage, etc.) cause workflow sandbox hang on Python 3.14 |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | 0 | WARN_ON_UNINTENTIONAL_PASSTHROUGH warns on import of the workflow itself |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | OpenTelemetry SDK 1.29+ and ddtrace incompatible with sandbox (10 comments) |
| [#607](https://github.com/temporalio/sdk-python/issues/607) | 0 | Prevent hot-reload of workflow definitions from disk |
| [#301](https://github.com/temporalio/sdk-python/issues/301) | 0 | Proxied classes are not properly hashable |

**Root Cause Analysis:**
- Python 3.14 introduces `sys.monitoring` which conflicts with sandbox restrictions, causing hangs during coverage collection
- Third-party libraries (OpenTelemetry, ddtrace) trigger sandbox violations via runtime imports and `os.environ.get` calls
- Proxied objects lack proper hashability, breaking libraries that use them as dict keys

### Debugger Support (4 issues)

Debugging workflows is the top user request by combined upvotes but remains challenging due to sandbox restrictions. These issues are closely related and could be consolidated into a single tracking issue.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | Can't debug workflow using VSCode (5 comments) |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | Investigate/document how to use PyCharm debugger with workflows |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | Setting debug_mode in Worker still does not allow breakpoints (7 comments) |

**Status:** Combined 8 upvotes and 13 comments across 4 issues make this the highest user-demand category. Issue #1104 demonstrates that even the existing `debug_mode` flag does not fully resolve the problem.

### Activity Cancellation & Lifecycle (4 issues)

Users struggle with activity cancellation patterns and error handling ergonomics, particularly for synchronous activities running in multiprocessed executors.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Support raising cancellation in sync multiprocessed activities (11 comments) |
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and wait until it is cancelled (10 comments) |
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 0 | CancelledError should inherit from BaseException (7 comments) |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for cancelled, uncancel, and cancelling |

**Key Insight:** Activity cancellation only propagates via heartbeat + await. Users expect `task.cancel()` semantics but need to understand that cancellation only arrives at heartbeat time. Issue #1292 highlights a Python-specific design concern: `CancelledError` inheriting from `Exception` rather than `BaseException` means bare `except Exception` blocks swallow cancellation signals silently.

### OpenTelemetry & Observability (5 issues)

Observability is critical for production deployments, but OpenTelemetry integration has persistent issues spanning tracing, logging, and metrics.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | Sandbox incompatibility with OpenTelemetry SDK 1.29+ and ddtrace (10 comments) |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 1 | Logger adapter does not accommodate OpenTelemetry log format (7 comments) |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 0 | Langfuse tracing not working with Temporal OpenAI Agents Plugin (5 comments) |
| [#669](https://github.com/temporalio/sdk-python/issues/669) | 0 | Guidance on using OpenTelemetry logging + metrics with process-pool workers |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | 0 | Schedule creation should create tracing span by default (6 comments) |

### Logging & Error Handling (7 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Logs not emitted during workflow queries |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Exceptions from converters/codecs should fail workflow not task |
| [#641](https://github.com/temporalio/sdk-python/issues/641) | 1 | Unregistered query returns "Encoded failure" with encode_common_attributes |
| [#697](https://github.com/temporalio/sdk-python/issues/697) | 0 | Handle edge case of recursive exceptions in failure converter |
| [#503](https://github.com/temporalio/sdk-python/issues/503) | 0 | Do not mutate extra in activity/workflow loggers |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exception improvements |

### Worker & Polling Issues (5 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 0 | PyGILState_Release issue for client (10 comments, low-level Rust/Python interop) |
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | 0 | Worker intermittently stops polling after synchronous activity completion |
| [#778](https://github.com/temporalio/sdk-python/issues/778) | 0 | Strange workflow task timeout |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | 0 | Cannot replace worker client if default Runtime is used |
| [#814](https://github.com/temporalio/sdk-python/issues/814) | 0 | Python client not able to connect to self-hosted server via proxy with auth header |

### Test Framework & Server Issues (4 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server in time-skipping mode does not return userMetadata.summary |
| [#826](https://github.com/temporalio/sdk-python/issues/826) | 0 | test_unfinished_handler_on_workflow_termination fails in some situations |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |
| [#563](https://github.com/temporalio/sdk-python/issues/563) | 0 | Update test running to replay |

### Data Conversion & Serialization (4 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1237](https://github.com/temporalio/sdk-python/issues/1237) | 0 | Converter returns bad value converting `dict[None, Any]` |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` (7 comments) |
| [#427](https://github.com/temporalio/sdk-python/issues/427) | 0 | Dataclasses require even defaulted fields in the JSON dict |
| [#1395](https://github.com/temporalio/sdk-python/issues/1395) | 0 | Headers should always run through external storage pipeline |

### Platform & Build Issues (2 issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#622](https://github.com/temporalio/sdk-python/issues/622) | 1 | Unable to install temporal on python 3.11-alpine3.16 |
| [#761](https://github.com/temporalio/sdk-python/issues/761) | 0 | Publish musl wheel |

---

## API & Component Hotspots

The semantic analysis identifies which components and APIs concentrate the most open issues, helping prioritize engineering effort.

| Component | Issue Count | Severity Distribution |
|-----------|-------------|----------------------|
| worker | 20 | high: 9, medium: 7, low: 4 |
| activity-executor | 11 | high: 5, medium: 6 |
| client | 6 | high: 3, medium: 3 |
| workflow-execution | 6 | medium: 3, low: 2, high: 1 |
| workflow | 5 | medium: 4, low: 1 |
| update-handler | 4 | high: 3, medium: 1 |
| workflow-sandbox | 4 | high: 3, medium: 1 |
| importer | 4 | high: 3, medium: 1 |
| build-system | 4 | medium: 2, high: 1, low: 1 |
| error-handling | 4 | medium: 4 |

| API | Issue Count |
|-----|-------------|
| Worker | 7 |
| execute_activity | 5 |
| Client.connect | 4 |
| StartWorkflow | 3 |
| execute_workflow | 2 |
| SandboxedWorkflowRunner | 2 |
| execute_child_workflow | 2 |
| activity.defn | 2 |

The **worker** component has the broadest issue surface (20 issues, including 9 high severity). The **workflow-sandbox**, **update-handler**, and **importer** components have a disproportionate number of high-severity issues relative to their counts.

---

## Enhancement Requests (52 issues)

### Python Version & Runtime Support

| Issue | 👍 | Request |
|-------|-----|---------|
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | Research and make SDK free-threading capable/compatible |
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support InterpreterPoolExecutor from py3.14 |

### AI/ML Integration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | Provide supported Session implementations for OpenAI Agents |
| [#1056](https://github.com/temporalio/sdk-python/issues/1056) | 0 | Add workflow MCP client |
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | 0 | OpenAI Agents Streaming support |

### Developer Experience

| Issue | 👍 | Request |
|-------|-----|---------|
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Provide activities extraction utilities from class/module |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support (str, Enum) like StrEnum |
| [#618](https://github.com/temporalio/sdk-python/issues/618) | 0 | Improve wait_condition semantics |
| [#360](https://github.com/temporalio/sdk-python/issues/360) | 0 | Allow use of type hints even if arg count mismatches with defaults |
| [#1275](https://github.com/temporalio/sdk-python/issues/1275) | 0 | Look into alternative API doc generators |
| [#421](https://github.com/temporalio/sdk-python/issues/421) | 0 | Move from black/isort to Ruff |

### Observability & Metrics

| Issue | 👍 | Request |
|-------|-----|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for worker._count_not_evict_count |
| [#1130](https://github.com/temporalio/sdk-python/issues/1130) | 0 | Support for custom tracing providers |
| [#1121](https://github.com/temporalio/sdk-python/issues/1121) | 0 | Document runtime telemetry config fields |
| [#1049](https://github.com/temporalio/sdk-python/issues/1049) | 0 | Support access to metric meter in multi-processed workers |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | 0 | Schedule creation should create tracing span by default |

### Workflow & Activity Features

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1367](https://github.com/temporalio/sdk-python/issues/1367) | 0 | Support conflict token retry loop for schedule updates |
| [#1289](https://github.com/temporalio/sdk-python/issues/1289) | 0 | Warn if SDK detects workflow history over certain size |
| [#1262](https://github.com/temporalio/sdk-python/issues/1262) | 0 | Add ability to obtain ApplicationError details with type hint |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Allow overriding Worker Deployment Version when invoking child workflow |
| [#870](https://github.com/temporalio/sdk-python/issues/870) | 0 | Worker Versioning high level client |
| [#764](https://github.com/temporalio/sdk-python/issues/764) | 0 | Expose Workflow cancel cause/reason |
| [#719](https://github.com/temporalio/sdk-python/issues/719) | 0 | Provide "workflow local" |
| [#467](https://github.com/temporalio/sdk-python/issues/467) | 0 | Support workflow metadata query |
| [#439](https://github.com/temporalio/sdk-python/issues/439) | 0 | Allow continue as new from update handler |

### Cancellation Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 0 | CancelledError should inherit from BaseException |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Support raising cancellation in sync multiprocessed activities |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper cancelled/uncancel/cancelling behavior |

---

## Housekeeping Recommendations

### Stale Issues (48 issues >12 months old)

**Close Candidates (likely resolved or no longer relevant):**
- [#772](https://github.com/temporalio/sdk-python/issues/772) - Investigate unused bind_f function (internal cleanup)
- [#496](https://github.com/temporalio/sdk-python/issues/496) - Fix explanation of Pydantic datetime issue (docs)
- [#348](https://github.com/temporalio/sdk-python/issues/348) - Make all exposed modules be packages (low impact)
- [#421](https://github.com/temporalio/sdk-python/issues/421) - Move from black/isort to Ruff (may already be done)
- [#377](https://github.com/temporalio/sdk-python/issues/377) - Warn when non-static activity method registered as static

**Needs Triage (maintainer decision required):**
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Converter exceptions (2 upvotes, 2.5+ years old)
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VSCode debuggability (2 upvotes, 3+ years old)
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release issue (10 comments, low-level Rust/Python interop)
- [#352](https://github.com/temporalio/sdk-python/issues/352) - Cancel between awaitables not cancelling workflow (potential correctness issue)
- [#435](https://github.com/temporalio/sdk-python/issues/435) - Overload checking not catching bad parameters anymore

**Keep Open (valid issues awaiting implementation):**
- [#603](https://github.com/temporalio/sdk-python/issues/603) - PyCharm debugger docs (3 upvotes, clear user demand)
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VSCode debugging (3 upvotes, ongoing discussion)
- [#733](https://github.com/temporalio/sdk-python/issues/733) - OpenTelemetry/ddtrace sandbox issue (10 comments, production impact)
- [#700](https://github.com/temporalio/sdk-python/issues/700) - Activity cancellation ergonomics (10 comments)

### Duplicate Candidates

- [#213](https://github.com/temporalio/sdk-python/issues/213), [#603](https://github.com/temporalio/sdk-python/issues/603), [#238](https://github.com/temporalio/sdk-python/issues/238), [#1104](https://github.com/temporalio/sdk-python/issues/1104) - All relate to workflow debugging in IDEs; consider consolidating into a single tracking issue
- [#622](https://github.com/temporalio/sdk-python/issues/622) and [#761](https://github.com/temporalio/sdk-python/issues/761) - Both relate to Alpine/musl platform support

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Resolve Rust dependency CVEs** ([#1403](https://github.com/temporalio/sdk-python/issues/1403)) - dependabot PRs available, merge to clear known vulnerabilities
- **Fix payload transformation pipeline** ([#1395](https://github.com/temporalio/sdk-python/issues/1395)) - headers not consistently run through external storage
- **Investigate Python 3.14 sandbox hang** ([#1326](https://github.com/temporalio/sdk-python/issues/1326)) - sys.monitoring callbacks break sandbox; needed before Python 3.14 GA
- **Fix worker polling intermittency** ([#1295](https://github.com/temporalio/sdk-python/issues/1295)) - workers stop polling after sync activity completion

### Phase 2: Developer Experience (Short-term)

- **IDE Debugger Support** ([#603](https://github.com/temporalio/sdk-python/issues/603), [#238](https://github.com/temporalio/sdk-python/issues/238), [#1104](https://github.com/temporalio/sdk-python/issues/1104)) - top user request by upvotes; consolidate into a single tracking issue with documentation and sandbox debug_mode improvements
- **Resolve OpenTelemetry sandbox compatibility** ([#733](https://github.com/temporalio/sdk-python/issues/733)) - critical for production observability
- **Activity cancellation ergonomics** ([#700](https://github.com/temporalio/sdk-python/issues/700), [#1292](https://github.com/temporalio/sdk-python/issues/1292)) - clarify heartbeat/cancellation semantics and fix CancelledError hierarchy

### Phase 3: Feature Expansion (Medium-term)

- **Python 3.14 support** ([#1154](https://github.com/temporalio/sdk-python/issues/1154)) - InterpreterPoolExecutor for true parallelism
- **Free-threading research** ([#928](https://github.com/temporalio/sdk-python/issues/928)) - GIL-free Python support
- **OpenAI Agents enhancements** ([#1089](https://github.com/temporalio/sdk-python/issues/1089), [#1009](https://github.com/temporalio/sdk-python/issues/1009)) - growing AI/ML use case with session and streaming support
- **Worker Versioning** ([#870](https://github.com/temporalio/sdk-python/issues/870), [#1209](https://github.com/temporalio/sdk-python/issues/1209)) - high-level versioning client and child workflow deployment version overrides
- **Schedule conflict tokens** ([#1367](https://github.com/temporalio/sdk-python/issues/1367)) - support retry loop for concurrent schedule updates

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage** - review and close 20+ issues that are no longer relevant from the 48 stale backlog
- **Platform support** - Alpine/musl builds ([#622](https://github.com/temporalio/sdk-python/issues/622), [#761](https://github.com/temporalio/sdk-python/issues/761))
- **OpenTelemetry logging integration** ([#837](https://github.com/temporalio/sdk-python/issues/837), [#669](https://github.com/temporalio/sdk-python/issues/669))
- **Type safety improvements** ([#625](https://github.com/temporalio/sdk-python/issues/625), [#435](https://github.com/temporalio/sdk-python/issues/435))
- **Serialization edge cases** ([#1237](https://github.com/temporalio/sdk-python/issues/1237), [#427](https://github.com/temporalio/sdk-python/issues/427), [#676](https://github.com/temporalio/sdk-python/issues/676))
