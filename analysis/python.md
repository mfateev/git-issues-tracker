# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 114
**Total Closed Issues:** 475
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Python SDK maintains a healthy 81% resolution rate with a median time to close of 16 days. The primary challenges center around the **workflow sandbox** causing compatibility issues with third-party libraries (Protobuf, OpenTelemetry, ruamel.yaml, ddtrace), **debugging difficulties** in VSCode and PyCharm, and **activity cancellation semantics** that confuse users. With 46% of open issues being stale (>12 months), there is significant opportunity for housekeeping while addressing high-engagement sandbox and observability bugs.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | High - 41% of open issues are bugs requiring attention |
| Enhancements | 63 | Medium - Feature requests dominate but lower urgency |
| Sandbox Issues | ~15 | High - Recurring theme causing significant user friction |
| OpenTelemetry/Tracing | 4 | High - Observability is critical for production use |
| Debugging Support | 3 | Medium - Developer experience pain point |
| Stale Issues | 53 | Low - Housekeeping opportunity |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 33 |
| Total Comments | 204 |
| Issues with Upvotes | 18 (16%) |
| Issues with Comments | 54 (47%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (475/589) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 65% |
| Resolved within 90 days | 85% |

### Recommended Actions

1. **Immediate:** Fix PyGILState_Release issue (#300) causing fatal errors on client shutdown
2. **Short-term:** Improve sandbox compatibility with common libraries (Protobuf, OpenTelemetry, ruamel.yaml)
3. **Medium-term:** Enhance debugging support for VSCode (#238) and PyCharm (#603) workflows
4. **Long-term:** Add workflow logger sandbox opt-out (#487), improve activity cancellation documentation
5. **Housekeeping:** Triage 53 stale issues, close resolved items, consolidate duplicates

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog has grown modestly over the past year, with 21 more issues opened than closed. However, the most recent 6 months show a net reduction of 5 issues, suggesting improving velocity.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 171 | 150 | +21 |

**Backlog Growing:** While there is a slight backlog increase over 12 months, recent months (particularly Sept-Oct 2025) showed strong closure rates, indicating the team is actively working to reduce the backlog.

### Last 6 Months: Detailed Analysis

Strong activity in the last 6 months with 103 issues closed against 98 opened, resulting in a net backlog reduction.

| Metric | Value |
|--------|-------|
| Issues Opened | 98 |
| Issues Closed | 103 |
| Bugs Closed | 45 |
| Enhancements Completed | 48 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#893](https://github.com/temporalio/sdk-python/issues/893) | 4 | [Bug] Pyright (strict mode) fails on `start`/`execute` |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | [Bug] GeneratorExit possibly causing issues on context |
| [#1107](https://github.com/temporalio/sdk-python/issues/1107) | 3 | [Feature Request] Update dependency constraint for protobuf |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | 3 | [Feature Request] Allow workflow logger to opt-out of sandboxing |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | [Feature Request] Investigate/document how to use PyCharm debugger with workflows |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | [Bug] Can't debugging workflow using vscode |
| 4 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | [Bug] Logs not emitted during workflow queries |
| 5 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | [Feature Request] Support InterpreterPoolExecutor from py3.14 |
| 6 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | [Feature Request] Research and make SDK free-threading capable |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | [Feature Request] Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | [Feature Request] Temporal exceptions from converters and codecs |
| 9 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | [Feature Request] Confirm vscode debuggability within sandbox |
| 10 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError when starting Temporal test server in Python SDK |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 15 | [Feature Request] Allow workflow logger to opt-out of sandboxing |
| 2 | [#638](https://github.com/temporalio/sdk-python/issues/638) | 14 | Importing 3rd party package `ruamel.yaml` anywhere causes failure |
| 3 | [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | [Bug] Workflow sandbox issues with Protobuf |
| 4 | [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | [Bug] OpenTelemetry interceptors report errors |
| 5 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | [Feature Request] Support raising cancellation in sync multiprocessed activities |
| 6 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | [Bug] Can't debugging workflow using vscode |
| 7 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | [Bug] Unable to run workflows with OpenTelemetry and ddtrace |
| 8 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | [Bug] No clean way to cancel an activity and wait until it's cancelled |
| 9 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | [Bug] Investigate PyGILState_Release issue for client |
| 10 | [#639](https://github.com/temporalio/sdk-python/issues/639) | 9 | [Bug] Operation was canceled when start_workflow |

---

## Issue Analysis by Category

### Workflow Sandbox Issues (15+ issues)

The sandbox is the most significant source of user friction. Users frequently encounter issues when third-party libraries have side effects on stdlib modules or attempt runtime imports. The sandbox architecture, while providing determinism guarantees, creates a steep learning curve.

**High Priority Sandbox Bugs:**

| Issue | Comments | Description |
|-------|----------|-------------|
| [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | Protobuf deserialization fails in K8s due to sandbox import handling. The error `KeyError: 'google.protobuf'` appears because the sandbox's module isolation prevents lazy imports from resolving correctly. |
| [#638](https://github.com/temporalio/sdk-python/issues/638) | 12 | ruamel.yaml patches datetime at module load time, breaking sandbox validation even when the workflow does not use YAML. The sandbox's datetime proxy becomes unhashable. |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | ddtrace + OpenTelemetry SDK 1.29+ causes sandbox restrictions on `os.environ.get`. The issue stems from runtime imports in ddtrace's context handling code. |
| [#655](https://github.com/temporalio/sdk-python/issues/655) | 1 | `KeyError: 'warnings'` due to sandbox restrictions on the warnings module. |

**Analysis:** The root cause across these issues is that many Python libraries perform runtime imports or modify stdlib modules (datetime, warnings). The sandbox's strict isolation triggers failures when these libraries are used anywhere in the codebase, not just within workflows. The recommended workaround - using `workflow.unsafe.imports_passed_through()` - requires users to understand the sandbox internals deeply.

**Workarounds Available:**
```python
# For third-party library imports
with workflow.unsafe.imports_passed_through():
    import ruamel.yaml
    import google.protobuf

# For datetime-patching libraries (e.g., Pydantic), disable datetime proxying
runner = SandboxedWorkflowRunner(
    restrictions=SandboxRestrictions.default.with_passthrough_modules("opentelemetry", "ddtrace")
)
```

**Recommendations:**
1. Improve error messages to suggest specific passthrough solutions
2. Consider a curated allowlist of common libraries known to be safe
3. Add documentation section on "Common Sandbox Compatibility Issues"

### OpenTelemetry & Tracing Issues (4 issues)

Observability integration shows recurring problems, particularly with the TracingInterceptor and context management.

| Issue | Comments | Description |
|-------|----------|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | "Failed to detach context" errors on workflow completion/GC. The `GeneratorExit` exception during context detachment combined with Python's contextvars reset behavior causes failures. Open since October 2022. |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | ddtrace incompatibility with sandbox due to runtime imports of `opentelemetry.baggage`. |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 5 | Langfuse tracing not working with Temporal OpenAI Agents. |

**Analysis:** Issue #160 has been open for over 3 years and appears related to OpenTelemetry context detachment during event loop cleanup/GC. The core problem is that `Python::with_gil` in callbacks may fail during Python interpreter finalization. This affects users heavily invested in observability. A potential fix involves swallowing detachment failures, similar to the approach discussed in open-telemetry/opentelemetry-python#2606.

**Recommendations:**
1. Swallow detachment failures gracefully or add proper finalization checks
2. Document ddtrace-specific passthrough requirements
3. Provide official examples for popular observability stacks (Datadog, Grafana, etc.)

### Debugging Support Issues (3 issues)

Developers struggle to debug workflow code in popular IDEs.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | VSCode debugger fails with sandbox `KeyError` on 'warnings'. The debugpy debugger accesses `sys.modules['warnings']` which triggers sandbox restrictions. |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | PyCharm debugger investigation needed. Custom asyncio implementations conflict with PyCharm's debugger expectations. |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox. |

**Analysis:** Both VSCode and PyCharm debuggers interact poorly with the workflow sandbox. The debugger injects code that accesses `sys.modules['warnings']`, triggering sandbox restrictions. Workarounds exist but are not well-documented.

**Working Workarounds:**
```python
from temporalio.worker import Worker, UnsandboxedWorkflowRunner

# Option 1: Disable sandbox entirely during debugging
worker = Worker(
    client,
    task_queue="my-queue",
    workflows=[MyWorkflow],
    debug_mode=True,
    workflow_runner=UnsandboxedWorkflowRunner()
)

# Option 2: Pass through debugger modules
from temporalio.worker.workflow_sandbox import SandboxedWorkflowRunner, SandboxRestrictions

def new_sandbox_runner():
    return SandboxedWorkflowRunner(
        restrictions=SandboxRestrictions.default.with_passthrough_modules("_pydevd_bundle")
    )
```

**For PyCharm Users:**
1. Use Shift+Shift (Search Everywhere) and search for "Registry"
2. Enable `python.debug.asyncio.repl`
3. Restart the IDE

**Recommendations:**
1. Document debugging setup prominently (issue #603 has a community-contributed guide)
2. Consider auto-detecting debugger attachment and adjusting sandbox restrictions
3. Add `_pydevd_bundle` to default passthrough modules

### Activity Cancellation Issues (3 issues)

Users find the activity cancellation semantics unintuitive, particularly around heartbeating requirements.

| Issue | Comments | Description |
|-------|----------|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel activity and wait for acknowledgement. Users expect `handle.cancel()` to immediately cancel, but cancellation requires heartbeating and only raises at await points. |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Sync multiprocessed activities cannot be cancelled. The SDK has no built-in mechanism to interrupt non-thread-pool executors. Users must manually check `activity.is_cancelled()`. |

**Analysis:** The Python SDK's cancellation model requires activities to heartbeat to receive cancellation signals, and `CancelledError` is only raised at await points. This is consistent with Python asyncio semantics but surprises users. Issue #1048 specifically notes that multiprocess workers cannot interrupt child processes - there's no cross-process equivalent to `_ThreadExceptionRaiser`.

**Key Insight:** Activity cancellation is a *request*, not an immediate action:
1. Call `handle.cancel()` from workflow
2. Activity must call `activity.heartbeat()` to receive cancellation notification
3. `CancelledError` is raised at the next await point after heartbeat

**Recommendations:**
1. Improve documentation on cancellation semantics (heartbeat requirements, await points)
2. Consider adding `ActivityCancelledError` distinct from generic `ActivityError`
3. Document multiprocess activity limitations more prominently
4. Provide example patterns for background heartbeating with cancellation handling

### Critical Runtime Bugs (3 issues)

| Issue | Comments | Description |
|-------|----------|-------------|
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | PyGILState_Release fatal error on client shutdown. Short-lived client processes can crash with "Fatal Python error: This thread state must be current when releasing". Reproducible with specific timing. |
| [#639](https://github.com/temporalio/sdk-python/issues/639) | 7 | "Operation was canceled" when start_workflow. |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test. |

**Analysis:** Issue #300 is a serious bug where client processes can crash on exit. This occurs due to PyO3/pyo3-asyncio interactions during Python interpreter finalization. The root cause is that `PyGILState_Ensure` terminates threads during finalization, but pyo3-asyncio's callbacks still try to acquire the GIL. A reliable reproduction exists, and the fix likely requires checking `Py_IsFinalizing()` (Python 3.13+) or using `sys.is_finalizing()` before GIL acquisition.

**Recommendations:**
1. Prioritize #300 fix - consider using `atexit.register` for runtime cleanup
2. Investigate pyo3-asyncio alternatives or vendoring with modifications
3. Test thoroughly on Python 3.13+ with new GIL behavior

---

## Enhancement Requests (63 issues)

### Logging & Observability Enhancements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of sandbox. Users with advanced loggers (structlog) need `workflow.logger.unsafe_disable_sandbox()` helper to wrap the `process` call with `sandbox_unrestricted()`. |
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Emit logs during workflow queries. |
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for `worker._count_not_executed_workflow_tasks`. |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | Document PyCharm debugger setup for workflows. A community member has contributed a comprehensive guide. |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Improve stack trace information preservation in exception chains. |
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Provide activity extraction utilities for better code organization. |

### Python Version Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support InterpreterPoolExecutor from Python 3.14. |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Make SDK free-threading compatible (PEP 703). Per pyo3 docs, this should be a simple opt-in but needs verification with Protobuf compatibility. |

### Type System & Converters

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` in data conversion. |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Temporal exceptions from converters and codecs should fail workflow, not task. |

### Testing & Test Server

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Time-skipping test server should return userMetadata. |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping test server when waiting on update result. |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

53 issues (46% of open issues) have had no activity for over 12 months. This represents significant housekeeping opportunity.

**Close Candidates (likely resolved or no longer relevant):**
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VSCode debuggability (3+ years old, workarounds documented elsewhere)
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Converter exceptions (2.5 years old, may need re-evaluation)
- [#637](https://github.com/temporalio/sdk-python/issues/637) - Windows 3.12.5 builds broken (may be fixed in later releases)
- [#607](https://github.com/temporalio/sdk-python/issues/607) - Prevent hot-reload of workflow definitions (needs validation if still relevant)
- [#772](https://github.com/temporalio/sdk-python/issues/772) - Investigate unused bind_f function (internal cleanup)

**Needs Triage (maintainer decision required):**
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VSCode debugging (3 upvotes, has workaround but still open)
- [#652](https://github.com/temporalio/sdk-python/issues/652) - ScheduleOverlapPolicy broken __eq__
- [#629](https://github.com/temporalio/sdk-python/issues/629) - workflow.upsert_search_attributes() edge case

**Keep Open (valid issues needing work):**
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release issue (critical bug with repro)
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OpenTelemetry context detach errors (widespread impact)
- [#638](https://github.com/temporalio/sdk-python/issues/638) - ruamel.yaml sandbox issue (user friction with documented workaround)

### Duplicate Candidates

| Issues | Potential Relationship |
|--------|----------------------|
| #238, #213, #603 | All related to debugging workflows in IDEs - consider consolidating into meta-issue |
| #688, #638, #655 | All related to sandbox import/passthrough issues |
| #160, #733 | Both involve OpenTelemetry/tracing context issues |

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix #300:** PyGILState_Release fatal error on client shutdown
  - High priority: Causes process crashes
  - Approach: Implement atexit cleanup or check Py_IsFinalizing before with_gil
- **Improve #160:** Swallow OpenTelemetry context detachment failures gracefully
  - Affects all users with tracing enabled

### Phase 2: Developer Experience (Short-term)

- **Address sandbox documentation:** Create "Common Sandbox Compatibility Issues" guide
- **Document debugging:** Publish official guides for VSCode and PyCharm (incorporate community contribution from #603)
- **Implement #487:** Add `workflow.logger.unsafe_disable_sandbox()` helper
  - High demand (6 upvotes), enables structlog and advanced logging

### Phase 3: Feature Expansion (Medium-term)

- **Python 3.13+ support:** Address #834 (hangs) and prepare for free-threading (#928)
- **Improve activity cancellation:** Better documentation and possibly distinct exception types
- **Test server enhancements:** #851 (userMetadata), #675 (auto time-skip)

### Phase 4: Maintenance (Ongoing)

- **Stale issue cleanup:** Review and close/consolidate 53 stale issues
- **Dependency updates:** Keep Protobuf, OpenTelemetry dependencies current
- **Community engagement:** Respond to high-comment issues awaiting decisions
