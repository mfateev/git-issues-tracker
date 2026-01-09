# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 114
**Total Closed Issues:** 475
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Python SDK demonstrates strong resolution metrics with an 81% resolution rate and a median time to close of 16 days. The open issue backlog is moderately sized at 114 issues, with sandbox-related issues being the most common pain point for users. Developer experience concerns around debugging workflows and third-party library compatibility dominate user feedback.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | High - includes sandbox compatibility, OpenTelemetry, and activity cancellation issues |
| Enhancements | 63 | Medium - feature requests for debugging support, Python 3.14 compatibility, and serialization improvements |
| Stale Issues (>12 months) | 53 | Low - housekeeping opportunity for 46% of open issues |
| OpenAI Agents Integration | ~15 | Medium - newer feature area with active development |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 33 |
| Total Comments | 203 |
| Issues with Upvotes | 18 (16%) |
| Issues with Comments | 53 (46%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (475/589) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 65% |
| Resolved within 90 days | 85% |

### Recommended Actions

1. **Immediate:** Address sandbox compatibility issues with popular libraries (ruamel.yaml, ddtrace, structlog) that affect multiple users
2. **Short-term:** Improve debugging experience for VS Code and PyCharm users; document workarounds for sandbox restrictions
3. **Medium-term:** Implement workflow logger sandbox opt-out ([#487](https://github.com/temporalio/sdk-python/issues/487)); improve activity cancellation semantics
4. **Long-term:** Python 3.14/free-threading compatibility ([#928](https://github.com/temporalio/sdk-python/issues/928)); enhance OpenTelemetry integration
5. **Housekeeping:** Triage 53 stale issues (46% of backlog); close resolved or outdated issues

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 171 | 150 | +21 |

The backlog is slightly growing with 21 more issues opened than closed. Recent months show improvement with October (-8), December (-3), and January 2026 (-1) having net reductions.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 99 |
| Issues Closed | 103 |
| Bugs Closed | 45 |
| Enhancements Completed | 48 |

The last 6 months show a net improvement of -4 (more closed than opened), indicating the team is catching up on the backlog.

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#893](https://github.com/temporalio/sdk-python/issues/893) | 4 | [Bug] Pyright (strict mode) fails on `start`/`execute` activity/workflow calls |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | [Bug] GeneratorExit possibly causing issues on context detach in OTel finally |
| [#1107](https://github.com/temporalio/sdk-python/issues/1107) | 3 | [Feature Request] Update dependency constraint for protobuf to protobuf>=3.20 |
| [#621](https://github.com/temporalio/sdk-python/issues/621) | 20 | [Feature Request] Create official Pydantic contrib module |

Notable: The highly-requested Pydantic contrib module ([#621](https://github.com/temporalio/sdk-python/issues/621) with 20 upvotes) was shipped in SDK 1.10.0.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | 3 | [Feature Request] Allow workflow logger to opt-out of sandboxing |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | [Feature Request] Investigate/document how to use PyCharm debugger with workflows |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | [Bug] Can't debugging workflow using vscode |
| 4 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 0 | [Bug] Logs not emitted during workflow queries |
| 5 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | [Feature Request] Support InterpreterPoolExecutor from py3.14 |
| 6 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | [Feature Request] Research and make SDK free-threading capable/compatible |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | [Feature Request] Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | [Feature Request] Temporal exceptions from converters and codecs should fail the workflow not task |
| 9 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | [Feature Request] Confirm vscode debuggability within sandbox |
| 10 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError when starting Temporal test server in Python SDK |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 15 | Allow workflow logger to opt-out of sandboxing |
| 2 | [#638](https://github.com/temporalio/sdk-python/issues/638) | 14 | Importing 3rd party package `ruamel.yaml` anywhere causes failure |
| 3 | [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | Workflow sandbox issues with Protobuf |
| 4 | [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | OpenTelemetry interceptors report errors |
| 5 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Support raising cancellation in sync multiprocessed activities |
| 6 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | Can't debugging workflow using vscode |
| 7 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 8 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel an activity and wait until it's cancelled |
| 9 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | Investigate PyGILState_Release issue for client |
| 10 | [#639](https://github.com/temporalio/sdk-python/issues/639) | 9 | Operation was canceled when start_workflow |

---

## Issue Analysis by Category

### Sandbox Compatibility Issues (High Priority)

The workflow sandbox is the most significant source of friction for Python SDK users. The sandbox provides determinism guarantees but conflicts with many third-party libraries.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Advanced logger handlers (structlog) fail in sandbox mode. Workaround exists using `sandbox_unrestricted()` context manager |
| [#638](https://github.com/temporalio/sdk-python/issues/638) | 1 | `ruamel.yaml` patches datetime, causing sandbox failures even when not used in workflows |
| [#688](https://github.com/temporalio/sdk-python/issues/688) | 0 | Protobuf deserialization fails with `KeyError: 'google.protobuf'` in K8s environments |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | ddtrace + OpenTelemetry SDK 1.29+ causes sandbox errors due to runtime imports |
| [#655](https://github.com/temporalio/sdk-python/issues/655) | 0 | `KeyError: 'warnings'` due to sandbox restrictions |

**Root Cause Analysis:** Libraries that perform module-level patching or lazy imports at runtime conflict with the sandbox's import isolation. The sandbox re-imports modules for each workflow run, which breaks assumptions about module caching.

**Workarounds:**
- Use `with workflow.unsafe.imports_passed_through():` for third-party imports
- Configure `SandboxedWorkflowRunner` with `with_passthrough_modules()`
- For datetime-patching libraries like Pydantic, disable datetime proxying in sandbox restrictions

### Debugging Experience (High Priority)

Multiple users report difficulties debugging workflows in both VS Code and PyCharm.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | VS Code debugger fails with `KeyError: 'warnings'` due to sandbox |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | PyCharm debugger breaks with custom asyncio implementations |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Need confirmation of VS Code debuggability within sandbox |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | `debug_mode=True` doesn't enable breakpoints as expected |

**Workarounds:**
1. Use `UnsandboxedWorkflowRunner()` during debugging
2. Set `debug_mode=True` on Worker
3. Use `Replayer` with `debug_mode=True` for stepping through workflow code without task timeouts
4. For PyCharm: Enable `python.debug.asyncio.repl` in Registry settings
5. Pass through `_pydevd_bundle` module in sandbox restrictions

### OpenTelemetry Integration Issues (Medium Priority)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 0 | "Failed to detach context" errors with TracingInterceptor on worker exit |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | ddtrace incompatibility with sandbox |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 0 | Make Temporal logger adapter accommodate OpenTelemetry |
| [#647](https://github.com/temporalio/sdk-python/issues/647) | 0 | OpenTelemetry Metrics OLTP/HTTP support |

**Root Cause:** The `GeneratorExit` exception during context detachment combined with Python's GIL cleanup behavior causes context detachment failures on worker shutdown.

### Activity Cancellation Semantics (Medium Priority)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and wait until it's cancelled |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Sync multiprocessed activities cannot receive cancellation signals |

**Key Insight:** Activity cancellation requires heartbeating. The `CancelledError` is only raised after a heartbeat call followed by an await point. For process pool executors, there's no built-in way to interrupt execution - users must manually check `activity.is_cancelled()` or use signals.

### Python Runtime Issues (Medium Priority)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 0 | `PyGILState_Release` issue causes fatal error on short-lived client processes |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |
| [#1188](https://github.com/temporalio/sdk-python/issues/1188) | 0 | TypeError on Python 3.13 when using isinstance with typing.Literal |

**Analysis:** The PyGIL issue ([#300](https://github.com/temporalio/sdk-python/issues/300)) stems from pyo3-asyncio assumptions about `Python::with_gil` succeeding during interpreter finalization. This is a challenging fix requiring potential vendoring of the pyo3-asyncio library.

---

## Enhancement Requests (63 issues)

### Python Version Support

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Research and make SDK free-threading capable/compatible (Python 3.13+) |
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support InterpreterPoolExecutor from py3.14 |
| [#863](https://github.com/temporalio/sdk-python/issues/863) | 0 | Confirm support for Python 3.14 |

### Developer Experience

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Improve stack trace information in exception chains |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exception improvements |
| [#531](https://github.com/temporalio/sdk-python/issues/531) | 1 | Include stack trace on deadlock detection exception |

### Serialization & Data Conversion

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#627](https://github.com/temporalio/sdk-python/issues/627) | 3 | Support serialization of `datetime` values in default JSON converter |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` |
| [#796](https://github.com/temporalio/sdk-python/issues/796) | 2 | Serialization context for codecs and converters |

### OpenAI Agents Integration

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | 0 | OpenAI Agents Streaming support |
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | Provide supported Session implementations for OpenAI Agents |
| [#1090](https://github.com/temporalio/sdk-python/issues/1090) | 0 | Support `mcp_server` in OpenAI integration |
| [#1056](https://github.com/temporalio/sdk-python/issues/1056) | 0 | Add workflow MCP client |

### Testing & Observability

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for `worker._count_not_evict_count` |
| [#777](https://github.com/temporalio/sdk-python/issues/777) | 0 | Allow custom metric buckets |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping testing environment when waiting on update result |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

53 issues (46% of open issues) have had no activity for over 12 months.

**Close candidates:**
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VS Code debuggability (2+ years old, superseded by newer issues)
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Temporal exceptions from converters (2.5+ years old)
- Issues related to older Python versions no longer supported

**Needs triage:**
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VS Code debugging (has workaround documented)
- [#638](https://github.com/temporalio/sdk-python/issues/638) - ruamel.yaml sandbox issue (workaround exists)
- [#639](https://github.com/temporalio/sdk-python/issues/639) - Operation was canceled (needs more info)

**Keep open:**
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release issue (valid but complex fix)
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OpenTelemetry context detach errors (known issue)

### Duplicate Candidates

- [#238](https://github.com/temporalio/sdk-python/issues/238) and [#213](https://github.com/temporalio/sdk-python/issues/213) both address VS Code debugging within sandbox
- [#603](https://github.com/temporalio/sdk-python/issues/603) (PyCharm) could be consolidated with other debugging issues into a single "IDE Debugging" meta-issue

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Address sandbox passthrough documentation gaps
- Create comprehensive debugging guide for VS Code and PyCharm
- Document workarounds for common sandbox conflicts (ruamel.yaml, ddtrace, structlog)

### Phase 2: Developer Experience (Short-term)

- Implement [#487](https://github.com/temporalio/sdk-python/issues/487): Workflow logger sandbox opt-out helper
- Improve activity cancellation documentation and semantics ([#700](https://github.com/temporalio/sdk-python/issues/700))
- Better error messages for sandbox restriction violations

### Phase 3: Feature Expansion (Medium-term)

- Python 3.14/free-threading compatibility ([#928](https://github.com/temporalio/sdk-python/issues/928))
- Enhanced OpenTelemetry integration ([#160](https://github.com/temporalio/sdk-python/issues/160), [#733](https://github.com/temporalio/sdk-python/issues/733))
- OpenAI Agents SDK improvements (streaming, MCP support)
- Address PyGILState_Release issue ([#300](https://github.com/temporalio/sdk-python/issues/300))

### Phase 4: Maintenance (Ongoing)

- Triage and close 53 stale issues
- Regular review of sandbox passthrough module list
- Dependency updates for security and compatibility
