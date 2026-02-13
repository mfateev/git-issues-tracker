# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-11
**Total Open Issues:** 116
**Total Closed Issues:** 485
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Python SDK has 116 open issues with a strong 81% resolution rate (485/601) and a median close time of 16 days. The primary pain points are **workflow sandbox compatibility** with third-party libraries (particularly Protobuf, OpenTelemetry, and ddtrace), **IDE debugging support** within the sandboxed environment, and **activity cancellation semantics**. Over half (51%) of open issues are stale with no activity for over 12 months, indicating a significant need for triage and housekeeping.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | High - includes sandbox compatibility and poller issues affecting production |
| Enhancements | 63 | Medium - many are internal improvements or lower-demand features |
| Unlabeled | 6 | Medium - need triage and labeling |
| Stale (>12 months) | 59 | Low - require review for closure or reactivation |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (open) | 29 |
| Total Comments (open) | 216 |
| Issues with Upvotes | 18 (16%) |
| Issues with Comments | 57 (49%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (485/601) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 66% |
| Resolved within 90 days | 85% |

### Recommended Actions

1. **Immediate:** Address sandbox compatibility issues with Protobuf and OpenTelemetry -- these affect production deployments and represent the highest-engagement bugs
2. **Short-term:** Improve debugger support documentation for VSCode and PyCharm (top user-requested feature by upvotes)
3. **Medium-term:** Clarify activity cancellation patterns, improve CancelledError hierarchy, and address worker polling reliability
4. **Long-term:** Evaluate Python 3.14 InterpreterPoolExecutor and free-threading support; expand OpenAI Agents integration
5. **Housekeeping:** Triage 59 stale issues; close or reactivate based on current relevance

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is slowly growing with 17 more issues opened than closed over the past year, though the most recent 6 months show a balanced throughput.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 171 | 154 | +17 |

Backlog Growing: The SDK team is keeping pace with incoming issues in recent months but has not reduced the accumulated historical backlog.

### Last 6 Months: Detailed Analysis

The last 6 months show stabilized issue flow with equal open/close rates and strong resolution across both bugs and enhancements.

| Metric | Value |
|--------|-------|
| Issues Opened | 95 |
| Issues Closed | 95 |
| Net Change | 0 |
| Bugs Closed | 40 |
| Enhancements Completed | 46 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of suppression |
| [#893](https://github.com/temporalio/sdk-python/issues/893) | 4 | Pyright (strict mode) fails on start/execute methods |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | GeneratorExit possibly causing issues on context manager |
| [#1107](https://github.com/temporalio/sdk-python/issues/1107) | 3 | Update dependency constraint for protobuf |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | Investigate/document how to use PyCharm debugger with workflows |
| 2 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | Can't debug workflow using VSCode |
| 3 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | Logs not emitted during workflow queries |
| 4 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | Support InterpreterPoolExecutor from py3.14 |
| 5 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | 3 | Provide supported Session implementations for OpenAI Agents |
| 6 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | Research and make SDK free-threading capable/compatible |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | Temporal exceptions from converters/codecs should fail workflow not task |
| 9 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 10 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError when starting Temporal test server |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#638](https://github.com/temporalio/sdk-python/issues/638) | 14 | Importing ruamel.yaml causes workflow validation failure |
| 2 | [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | Workflow sandbox issues with Protobuf |
| 3 | [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | OpenTelemetry interceptors report errors |
| 4 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Support raising cancellation in sync multiprocessed activities |
| 5 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | Can't debug workflow using VSCode |
| 6 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 7 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel an activity and wait until it's cancelled |
| 8 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | Investigate PyGILState_Release issue for client |
| 9 | [#837](https://github.com/temporalio/sdk-python/issues/837) | 9 | Make Temporal logger adapter accommodate OpenTelemetry |
| 10 | [#639](https://github.com/temporalio/sdk-python/issues/639) | 9 | Operation was canceled when start_workflow |

---

## Issue Analysis by Category

### Workflow Sandbox Issues (7 issues)

The sandbox is the most significant pain point for Python SDK users. Multiple high-engagement issues relate to third-party library compatibility within the sandboxed workflow environment. Three of the top six priority-score issues are sandbox-related.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#688](https://github.com/temporalio/sdk-python/issues/688) | 0 | Protobuf conversion fails with KeyError in Kubernetes due to lazy imports inside GetOptions |
| [#638](https://github.com/temporalio/sdk-python/issues/638) | 1 | ruamel.yaml import causes unhashable _RestrictedProxy error during workflow validation |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | OpenTelemetry SDK 1.29+ incompatible with sandbox due to os.environ.get restrictions |
| [#655](https://github.com/temporalio/sdk-python/issues/655) | 0 | KeyError: 'warnings' due to sandbox |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | 0 | WARN_ON_UNINTENTIONAL_PASSTHROUGH warns on import of the workflow itself |
| [#607](https://github.com/temporalio/sdk-python/issues/607) | 0 | Prevent hot-reload of workflow definitions from disk |
| [#488](https://github.com/temporalio/sdk-python/issues/488) | 0 | Fix typo in restriction set |

**Root Cause Analysis:**
- Third-party libraries often import modules lazily at runtime, causing re-import inside the sandbox
- Proxied objects (like datetime) lack proper hashability, breaking libraries that use them as dict keys
- OpenTelemetry SDK changes introduced os.environ.get calls that violate sandbox restrictions

### OpenTelemetry Integration Issues (5 issues)

Observability is critical for production deployments, but OpenTelemetry integration has persistent issues spanning tracing, logging, and metrics.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 0 | TracingInterceptor reports "Failed to detach context" with ValueError |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | Sandbox incompatibility with OpenTelemetry SDK 1.29+ and ddtrace |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 1 | Logger adapter does not accommodate OpenTelemetry log format |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 0 | Langfuse tracing not working with Temporal OpenAI Agents Plugin |
| [#669](https://github.com/temporalio/sdk-python/issues/669) | 0 | Guidance on using OpenTelemetry logging + metrics SDKs with process-pool workers |

**Technical Details:**
- Issue #160 (3+ years old, 12 comments): Context detachment fails due to GeneratorExit during workflow execution, causing ValueError when tokens are created in different contexts
- Issue #733 (10 comments): ddtrace runtime imports of opentelemetry.baggage trigger sandbox violations
- Issue #837 (7 comments): The logging adapter needs to support structured logging formats expected by OpenTelemetry

### Debugger Support (4 issues)

Debugging workflows is the top user request by upvotes but remains challenging due to sandbox restrictions.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | Investigate/document how to use PyCharm debugger with workflows |
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | Can't debug workflow using VSCode |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | Setting debug_mode in Worker still does not allow breakpoints |

**Status:** This is the highest user-demand category by upvotes (combined 10 upvotes across 4 issues). These issues are closely related and could potentially be consolidated into a single tracking issue covering IDE debugging of sandboxed workflows.

### Activity Cancellation & Lifecycle (4 issues)

Users struggle with activity cancellation patterns and error handling ergonomics.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and wait until it is cancelled |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Support raising cancellation in sync multiprocessed activities |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for cancelled, uncancel, and cancelling |
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 0 | temporalio.CancelledError should inherit from BaseException |

**Key Insight:** Activity cancellation only propagates via heartbeat + await. Users expect `task.cancel()` semantics but need to understand that cancellation only arrives at heartbeat time. Issue #1292 (7 comments) highlights a Python-specific design concern: CancelledError inheriting from Exception rather than BaseException means bare `except Exception` blocks swallow cancellation signals.

### Logging & Error Handling (7 issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Logs not emitted during workflow queries |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Exceptions from converters/codecs should fail workflow not task |
| [#1322](https://github.com/temporalio/sdk-python/issues/1322) | 0 | Signal argument deserialization errors not using workflow-specific logger |
| [#641](https://github.com/temporalio/sdk-python/issues/641) | 1 | Unregistered query returns "Encoded failure" with encode_common_attributes |
| [#503](https://github.com/temporalio/sdk-python/issues/503) | 0 | Do not mutate extra in activity/workflow loggers |
| [#697](https://github.com/temporalio/sdk-python/issues/697) | 0 | Handle edge case of recursive exceptions in failure converter |

### Worker & Polling Issues (5 issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 0 | PyGILState_Release issue for client (10 comments, low-level Rust/Python interop) |
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | 0 | Worker intermittently stops polling after synchronous activity completion |
| [#1268](https://github.com/temporalio/sdk-python/issues/1268) | 0 | Activity/workflow pollers drop to 0 ignoring minimum/maximum settings |
| [#639](https://github.com/temporalio/sdk-python/issues/639) | 1 | Operation was canceled when start_workflow |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | 0 | Cannot replace worker client if default Runtime is used |

**Note:** Issues #1295 and #1268 are recent (January 2026) and may indicate a regression in worker polling behavior. Both describe pollers dropping to zero unexpectedly.

### Test Framework & Server Issues (5 issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | RuntimeError when starting Temporal test server |
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server in time-skipping mode does not return userMetadata.summary |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping environment when waiting on update result |
| [#826](https://github.com/temporalio/sdk-python/issues/826) | 0 | test_unfinished_handler_on_workflow_termination fails in some situations |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |

### Platform & Build Issues (5 issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#622](https://github.com/temporalio/sdk-python/issues/622) | 1 | Unable to install temporal on python 3.11-alpine3.16 |
| [#637](https://github.com/temporalio/sdk-python/issues/637) | 0 | Windows 3.12.5 builds are broken |
| [#597](https://github.com/temporalio/sdk-python/issues/597) | 0 | Cannot build wheel temporalio when installing with pip |
| [#761](https://github.com/temporalio/sdk-python/issues/761) | 0 | Publish musl wheel |
| [#543](https://github.com/temporalio/sdk-python/issues/543) | 0 | Proto generation whitespace differences between Docker and manual |

---

## API & Component Hotspots

The semantic analysis identifies which components and APIs concentrate the most open issues, helping prioritize engineering effort.

| Component | Issue Count | Severity Distribution |
|-----------|-------------|----------------------|
| worker | 25 | high: 11, medium: 9, critical: 1, low: 4 |
| activity-executor | 14 | high: 6, medium: 7, low: 1 |
| workflow-sandbox | 9 | high: 5, medium: 3, low: 1 |
| workflow-execution | 8 | medium: 4, low: 3, high: 1 |
| client | 7 | high: 3, medium: 4 |
| build-system | 6 | high: 3, medium: 2, low: 1 |
| test-framework | 6 | medium: 5, low: 1 |
| importer | 5 | high: 3, medium: 2 |

| API | Issue Count |
|-----|-------------|
| execute_activity | 9 |
| Worker | 8 |
| Client.connect | 4 |
| execute_child_workflow | 4 |
| StartWorkflow | 3 |

The **worker** component has the broadest issue surface (25 issues, including 1 critical and 11 high severity). The **workflow-sandbox** and **activity-executor** components have a disproportionate number of high-severity issues relative to their counts.

---

## Enhancement Requests (63 issues)

### Python Version & Runtime Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support InterpreterPoolExecutor from py3.14 |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Research and make SDK free-threading capable/compatible |

### AI/ML Integration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | Provide supported Session implementations for OpenAI Agents |
| [#1056](https://github.com/temporalio/sdk-python/issues/1056) | 0 | Add workflow MCP client |
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | 0 | OpenAI Agents Streaming support |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Provide activities extraction utilities from class/module |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support (str, Enum) like StrEnum |
| [#618](https://github.com/temporalio/sdk-python/issues/618) | 0 | Improve wait_condition semantics |
| [#360](https://github.com/temporalio/sdk-python/issues/360) | 0 | Allow use of type hints even if arg count mismatches with defaults |
| [#1275](https://github.com/temporalio/sdk-python/issues/1275) | 0 | Look into alternative API doc generators |
| [#421](https://github.com/temporalio/sdk-python/issues/421) | 0 | Move from black/isort to Ruff |

### Observability & Metrics

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for worker._count_not_evict_count |
| [#1130](https://github.com/temporalio/sdk-python/issues/1130) | 0 | Support for custom tracing providers |
| [#1121](https://github.com/temporalio/sdk-python/issues/1121) | 0 | Document runtime telemetry config fields |
| [#1049](https://github.com/temporalio/sdk-python/issues/1049) | 0 | Support access to metric meter in multi-processed workers |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | 0 | Schedule creation should create tracing span by default |

### Payload & API Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1289](https://github.com/temporalio/sdk-python/issues/1289) | 0 | Warn if SDK detects workflow history over certain size |
| [#235](https://github.com/temporalio/sdk-python/issues/235) | 0 | Raise exception for payloads that violate gRPC message max size |
| [#1262](https://github.com/temporalio/sdk-python/issues/1262) | 0 | Add ability to obtain ApplicationError details with type hint |
| [#536](https://github.com/temporalio/sdk-python/issues/536) | 0 | Clarify exception on return type decoding failure |

### Workflow & Activity Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#891](https://github.com/temporalio/sdk-python/issues/891) | 0 | Support executing Workflow directly |
| [#719](https://github.com/temporalio/sdk-python/issues/719) | 0 | Provide "workflow local" |
| [#601](https://github.com/temporalio/sdk-python/issues/601) | 0 | Reset workflow feature |
| [#439](https://github.com/temporalio/sdk-python/issues/439) | 0 | Allow continue as new from update handler |
| [#467](https://github.com/temporalio/sdk-python/issues/467) | 0 | Support workflow metadata query |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Allow overriding Worker Deployment Version when invoking child workflow |
| [#870](https://github.com/temporalio/sdk-python/issues/870) | 0 | Worker Versioning high level client |

---

## Housekeeping Recommendations

### Stale Issues (59 issues >12 months old)

**Close Candidates (likely resolved or no longer relevant):**
- [#637](https://github.com/temporalio/sdk-python/issues/637) - Windows 3.12.5 builds broken (outdated Python version)
- [#543](https://github.com/temporalio/sdk-python/issues/543) - Proto generation whitespace issue (minor)
- [#488](https://github.com/temporalio/sdk-python/issues/488) - Fix typo in restriction set (trivial)
- [#496](https://github.com/temporalio/sdk-python/issues/496) - Fix explanation of Pydantic datetime issue (docs)
- [#772](https://github.com/temporalio/sdk-python/issues/772) - Investigate unused bind_f function (internal cleanup)
- [#399](https://github.com/temporalio/sdk-python/issues/399) - Older Python versions cannot auto-import activity return class (may be resolved by version drops)

**Needs Triage (maintainer decision required):**
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Converter exceptions (2 upvotes, 2.5+ years old)
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VSCode debuggability (2 upvotes, 3+ years old)
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OpenTelemetry errors (3+ years old, 12 comments)
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release issue (10 comments, low-level)
- [#352](https://github.com/temporalio/sdk-python/issues/352) - Cancel between awaitables not cancelling workflow (potential correctness issue)

**Keep Open (valid issues awaiting implementation):**
- [#603](https://github.com/temporalio/sdk-python/issues/603) - PyCharm debugger docs (3 upvotes, clear user demand)
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VSCode debugging (3 upvotes, ongoing discussion)
- [#688](https://github.com/temporalio/sdk-python/issues/688) - Protobuf sandbox issues (12 comments, production impact)
- [#638](https://github.com/temporalio/sdk-python/issues/638) - ruamel.yaml sandbox issue (12 comments, highest priority score)

### Duplicate Candidates

- [#213](https://github.com/temporalio/sdk-python/issues/213), [#603](https://github.com/temporalio/sdk-python/issues/603), [#238](https://github.com/temporalio/sdk-python/issues/238), [#1104](https://github.com/temporalio/sdk-python/issues/1104) - All relate to workflow debugging in IDEs; consider consolidating into a single tracking issue
- [#1295](https://github.com/temporalio/sdk-python/issues/1295) and [#1268](https://github.com/temporalio/sdk-python/issues/1268) - Both describe pollers dropping to zero; may share a root cause

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix sandbox Protobuf compatibility** ([#688](https://github.com/temporalio/sdk-python/issues/688)) - production deployments in Kubernetes are affected
- **Resolve OpenTelemetry integration issues** ([#160](https://github.com/temporalio/sdk-python/issues/160), [#733](https://github.com/temporalio/sdk-python/issues/733)) - critical for observability
- **Investigate worker polling regressions** ([#1295](https://github.com/temporalio/sdk-python/issues/1295), [#1268](https://github.com/temporalio/sdk-python/issues/1268)) - recent reports of pollers dropping to zero

### Phase 2: Developer Experience (Short-term)

- **IDE Debugger Support** ([#603](https://github.com/temporalio/sdk-python/issues/603), [#238](https://github.com/temporalio/sdk-python/issues/238)) - top user request by upvotes
- **Activity cancellation ergonomics** ([#700](https://github.com/temporalio/sdk-python/issues/700), [#1292](https://github.com/temporalio/sdk-python/issues/1292)) - clarify heartbeat/cancellation semantics and fix CancelledError hierarchy
- **Improve error messages** for sandbox violations with suggested workarounds ([#638](https://github.com/temporalio/sdk-python/issues/638))

### Phase 3: Feature Expansion (Medium-term)

- **Python 3.14 support** ([#1154](https://github.com/temporalio/sdk-python/issues/1154)) - InterpreterPoolExecutor
- **Free-threading research** ([#928](https://github.com/temporalio/sdk-python/issues/928)) - GIL-free Python support
- **OpenAI Agents enhancements** ([#1089](https://github.com/temporalio/sdk-python/issues/1089), [#1009](https://github.com/temporalio/sdk-python/issues/1009)) - growing AI/ML use case
- **Worker Versioning** ([#870](https://github.com/temporalio/sdk-python/issues/870), [#1209](https://github.com/temporalio/sdk-python/issues/1209)) - high-level versioning client

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage** - review and close 30+ issues that are no longer relevant
- **Platform support** - Alpine, musl, Windows builds ([#622](https://github.com/temporalio/sdk-python/issues/622), [#761](https://github.com/temporalio/sdk-python/issues/761))
- **Type safety improvements** ([#1077](https://github.com/temporalio/sdk-python/issues/1077), [#636](https://github.com/temporalio/sdk-python/issues/636))
- **OpenTelemetry logging integration** ([#837](https://github.com/temporalio/sdk-python/issues/837), [#669](https://github.com/temporalio/sdk-python/issues/669))
