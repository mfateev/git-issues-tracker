# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** January 13, 2026
**Total Open Issues:** 114
**Total Closed Issues:** 475
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The Python SDK demonstrates the **fastest resolution times** among all Temporal SDKs, with a median time-to-close of just 16 calendar days (12 business days) and an 81% resolution rate. While the backlog grew by 21 issues over the past 12 months, the last 6 months show improvement with a net reduction of 5 issues. The most prominent user pain points center on **workflow sandbox compatibility** (Protobuf, third-party imports, logging), **IDE debugging support** (VSCode, PyCharm), and **OpenTelemetry integration issues**. The sandbox, while providing determinism guarantees, creates friction with common Python libraries and tooling.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | **High** - sandbox issues and observability problems dominate |
| Enhancements | 63 | **Medium** - future Python version support and developer experience |
| Test Framework Issues | 21 | **Medium** - significant investment needed in test server and framework |
| Sandbox/Debugging Issues | 11 | **High** - blocking developer workflow in many cases |
| OpenTelemetry Issues | 6 | **Medium** - important for observability story |
| Stale Issues (>12 months) | 53 (46%) | **Low** - significant housekeeping opportunity |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 33 |
| Total Comments | 206 |
| Issues with Upvotes | 18 (16%) |
| Issues with Comments | 55 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 81% (475/589) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 65% |
| Resolved within 90 days | 85% |

### Recommended Actions

1. **Immediate:** Address critical poller behavior bug ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) causing worker task timeouts with no logged errors
2. **Short-term:** Fix sandbox debugging issues ([#1104](https://github.com/temporalio/sdk-python/issues/1104), [#238](https://github.com/temporalio/sdk-python/issues/238)) that block developer productivity
3. **Medium-term:** Improve OpenTelemetry integration ([#160](https://github.com/temporalio/sdk-python/issues/160), [#733](https://github.com/temporalio/sdk-python/issues/733)) for better observability
4. **Long-term:** Implement high-demand features like workflow logger opt-out ([#487](https://github.com/temporalio/sdk-python/issues/487)) and PyCharm debugger support ([#603](https://github.com/temporalio/sdk-python/issues/603))
5. **Housekeeping:** Triage 53 stale issues (46% of backlog) for closure or prioritization

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Python SDK backlog is slowly growing over the full 12-month period, but recent months show improvement.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 171 | 150 | +21 |

**Backlog Growing:** The backlog growth is modest. Notable spikes occurred in April (+8), March (+11), and August (+4). The team maintains strong closure velocity, often closing more issues than opened in individual months (July: -3, September: -1, October: -8, December: -3, January: -1).

### Last 6 Months: Detailed Analysis

The last 6 months show near-equilibrium with a slight net reduction, indicating the team has recently caught up.

| Metric | Value |
|--------|-------|
| Issues Opened | 98 |
| Issues Closed | 103 |
| Net Change | -5 |
| Bugs Closed | 45 |
| Enhancements Completed | 48 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#893](https://github.com/temporalio/sdk-python/issues/893) | 4 | Pyright (strict mode) fails on `start`/`execute` methods |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | GeneratorExit possibly causing issues on context manager |
| [#1107](https://github.com/temporalio/sdk-python/issues/1107) | 3 | Update dependency constraint for protobuf |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | 3 | Allow workflow logger to opt-out of sandbox |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | Investigate/document how to use PyCharm debugger |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | Can't debug workflow using VSCode |
| 4 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | Logs not emitted during workflow queries |
| 5 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | Support InterpreterPoolExecutor from py3.14 |
| 6 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | Research and make SDK free-threading capable |
| 7 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | Loss of stack trace information |
| 8 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | Temporal exceptions from converters and codecs |
| 9 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 10 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError when starting Temporal test server |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | 15 | Allow workflow logger to opt-out of sandbox |
| 2 | [#638](https://github.com/temporalio/sdk-python/issues/638) | 14 | ruamel.yaml import causes workflow validation failure |
| 3 | [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | Workflow sandbox issues with Protobuf |
| 4 | [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | OpenTelemetry interceptors report errors |
| 5 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Support raising cancellation in sync multiprocessed activities |
| 6 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | Can't debug workflow using VSCode |
| 7 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 8 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel an activity and wait |
| 9 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | Investigate PyGILState_Release issue for client |
| 10 | [#639](https://github.com/temporalio/sdk-python/issues/639) | 9 | Operation was canceled when start_workflow |

---

## Issue Analysis by Category

### Critical/High Severity Bugs (5 open issues)

These issues have the highest impact on user experience and system reliability.

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1268](https://github.com/temporalio/sdk-python/issues/1268) | Critical | Worker pollers randomly drop to 0 despite available task slots, causing workflow and activity task timeouts with no logged errors |
| [#1250](https://github.com/temporalio/sdk-python/issues/1250) | High | Test server download fails intermittently from temporal.download, blocking test infrastructure |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | High | Setting debug_mode in Worker still doesn't allow breakpoint() in workflows |
| [#700](https://github.com/temporalio/sdk-python/issues/700) | High | No clean way to cancel an activity and wait until it's done |
| [#639](https://github.com/temporalio/sdk-python/issues/639) | High | Operation was canceled when start_workflow - race condition |

### Sandbox Compatibility Issues (High Priority)

The workflow sandbox is the most significant source of friction for Python SDK users. While it provides important determinism guarantees, it creates compatibility issues with common Python libraries and patterns.

#### Protobuf Integration ([#688](https://github.com/temporalio/sdk-python/issues/688) - 12 comments)

**Status:** Open, active investigation

**Problem:** Workflow sandbox causes `KeyError: 'google.protobuf'` when using Protobuf messages as workflow inputs. The issue manifests inconsistently - works locally but fails in Kubernetes environments, particularly when using map fields in protobuf definitions.

**Root Cause:** The sandbox re-imports modules for each workflow run. When `google.protobuf.json_format.Parse` calls `GetOptions()`, it triggers a lazy import that fails in the sandboxed environment. This is specifically triggered when deserializing protobuf messages with map fields.

**Workaround:** Import Protobuf messages outside the `imports_passed_through()` context (contrary to usual recommendations):
```python
# Instead of this:
with workflow.unsafe.imports_passed_through():
    from myproto_pb2 import MyMessage

# Do this:
from myproto_pb2 import MyMessage
```

#### Third-Party Library Conflicts ([#638](https://github.com/temporalio/sdk-python/issues/638) - 12 comments)

**Problem:** Importing `ruamel.yaml` anywhere in the codebase causes workflow validation failures with `TypeError: unhashable type: '_RestrictedProxy'`.

**Root Cause:** `ruamel.yaml` patches `datetime` with custom representers. The sandbox proxies `datetime` for determinism, but the proxy objects are unhashable, breaking ruamel's registration.

**Workarounds:**
1. Wrap ruamel import with `workflow.unsafe.imports_passed_through()`
2. Disable datetime proxying via custom `SandboxedWorkflowRunner` (like Pydantic integration)
3. Use `workflow.unsafe.sandbox_unrestricted()` for ruamel-using code

**Impact:** Any innocuous change in other parts of the codebase can cause Temporal sandbox failures unexpectedly.

#### Sandbox Import Warnings ([#1254](https://github.com/temporalio/sdk-python/issues/1254))

**Problem:** `SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH` incorrectly warns when workflow modules are imported into the sandbox during execution, even though these imports are necessary and intentional.

#### Workflow Logger Sandbox Restrictions ([#487](https://github.com/temporalio/sdk-python/issues/487) - 6 upvotes)

**Problem:** Advanced logger handlers (e.g., structlog) fail inside sandbox due to import restrictions during log formatting. Users see errors when structlog attempts to import `structlog.threadlocal` during JSON serialization.

**Proposed Solution:** Add `temporalio.workflow.logger.unsafe_disable_sandbox()` to wrap logging calls with `sandbox_unrestricted()` and `imports_passed_through()`.

**Current Workaround:**
```python
class SandboxDisabledLoggerAdapter(workflow.LoggerAdapter):
    def process(self, msg: Any, kwargs: MutableMapping[str, Any]) -> Tuple[Any, MutableMapping[str, Any]]:
        with temporalio.workflow.unsafe.sandbox_unrestricted():
            with temporalio.workflow.unsafe.imports_passed_through():
                return super().process(msg, kwargs)

temporalio.workflow.logger = SandboxDisabledLoggerAdapter(logging.getLogger("temporalio.workflow"), None)
```

### IDE Debugging Issues (Medium Priority)

Multiple users report difficulties debugging workflows in IDEs. This affects developer onboarding and productivity.

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | VSCode debugger fails with `KeyError: 'warnings'` due to sandbox intercepting debugpy imports |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | PyCharm debugger documentation needed |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | `debug_mode=True` still doesn't allow user breakpoints |

**Recommended Workaround (all IDEs):**
```python
from temporalio.worker import Worker, UnsandboxedWorkflowRunner

worker = Worker(
    client,
    task_queue="queue",
    workflows=[MyWorkflow],
    debug_mode=True,
    workflow_runner=UnsandboxedWorkflowRunner()
)
```

### OpenTelemetry Integration Bugs (Medium Priority)

OpenTelemetry support has multiple long-standing issues affecting observability adoption.

| Issue | Comments | Description |
|-------|----------|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | "Failed to detach context" errors on worker exit (3+ years old) |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | OTel + ddtrace causes `os.environ.get` sandbox violation |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 5 | Langfuse tracing not working with OpenAI agents |

**[#160](https://github.com/temporalio/sdk-python/issues/160) Root Cause:** Context detachment fails on generator exit when event loop is garbage collected. The `CancelledError` interrupts the context manager before the context can be properly detached. This may require swallowing detachment failures or waiting for upstream OpenTelemetry fixes (related to [opentelemetry-python#2606](https://github.com/open-telemetry/opentelemetry-python/issues/2606)).

**[#733](https://github.com/temporalio/sdk-python/issues/733) Root Cause:** `ddtrace` imports `opentelemetry.baggage` at runtime, causing re-import in sandboxed workflows.

**Workaround for ddtrace:**
```python
import opentelemetry.baggage
import opentelemetry.trace

worker = Worker(
    ...,
    workflow_runner=SandboxedWorkflowRunner(
        restrictions=SandboxRestrictions.default.with_passthrough_modules("opentelemetry", "ddtrace")
    )
)
```

### Activity Cancellation & Lifecycle (Medium Priority)

Activity cancellation semantics are complex and often confusing for users, particularly around heartbeating requirements.

| Issue | Comments | Description |
|-------|----------|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel activity and wait for completion |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Sync multiprocessed activities cannot be cancelled |

**Key Clarifications for [#700](https://github.com/temporalio/sdk-python/issues/700):**
- Activity cancellation **requires heartbeating** - cancellation is communicated via heartbeat response from the server
- `CancelledError` only raises at await points (standard asyncio behavior)
- If an activity is awaiting a long-running coroutine without heartbeating, it won't receive cancellation until the coroutine completes
- Use `e.cause` on `ActivityError` to differentiate cancellation from other failures
- For reliable cancellation, run heartbeating in a background task:
  ```python
  @activity.defn
  async def my_activity():
      async def heartbeat_loop():
          while True:
              activity.heartbeat()
              await asyncio.sleep(5)
      task = asyncio.create_task(heartbeat_loop())
      try:
          # Long-running work here
          await do_work()
      finally:
          task.cancel()
  ```

### Logging Issues (13 open issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of sandbox restrictions |
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Logs not emitted during workflow queries |
| [#892](https://github.com/temporalio/sdk-python/issues/892) | 0 | Logging configuration improvements |
| [#864](https://github.com/temporalio/sdk-python/issues/864) | 0 | Logger enhancements |

### Error Handling (20 open issues)

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#1262](https://github.com/temporalio/sdk-python/issues/1262) | 0 | Add ability to obtain ApplicationError details with type hint |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Temporal exceptions from converters and codec |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exception |
| [#608](https://github.com/temporalio/sdk-python/issues/608) | 0 | Make payload conversion errors optional |

---

## API & Component Hotspots

Based on semantic analysis, these areas have the most open issues:

| API/Component | Issue Count | Key Concerns |
|---------------|-------------|--------------|
| test-framework | 21 | Test server behavior, time-skipping mode, reliability |
| error-handling | 20 | Exception propagation, error messages, stack traces |
| logging | 13 | Sandbox compatibility, query logging, workflow logger |
| search-attributes | 13 | Upsert behavior, type handling |
| workflow-execution | 13 | Timeouts, lifecycle, execution patterns |
| type-checking | 11 | Pyright compatibility, type hints |
| serialization | 10 | Data conversion, Protobuf, Pydantic |
| workflow-sandbox | 9 | Protobuf, third-party imports, sandbox restrictions |
| dependency-management | 8 | Version constraints, compatibility |
| activity-execution | 7 | Lifecycle, execution patterns |
| child-workflows | 7 | Invocation, cancellation |
| workflow-replay | 7 | Determinism, replay behavior |
| activity-heartbeat | 7 | Heartbeat semantics, cancellation |
| worker-configuration | 6 | Polling, configuration options |
| activity-cancellation | 6 | Cancellation propagation, wait patterns |
| opentelemetry-integration | 4 | Context management, tracing |

---

## Enhancement Requests (63 issues)

### Future Python Version Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support `InterpreterPoolExecutor` from Python 3.14 - current SDK passes non-shareable objects across interpreter boundary |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Research free-threading compatibility (PEP 703) - requires PyO3 opt-in and Protobuf compatibility verification |

**Impact:** Python 3.14 introduces subinterpreters and free-threading as major features. SDK needs proactive compatibility work.

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Full stack trace information in Sentry - `ActivityError` stack traces only accessible via `failure.stack_trace` |
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Activities extraction utilities - framework for organizing activities |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` - 7 comments, type serialization gap |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Better Temporal exceptions from converters and codecs |

### Observability & Metrics

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for `worker._count_not_executing` |
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | Provide supported Session implementations |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exceptions |

### Testing Infrastructure

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | RuntimeError when starting test server |
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server time-skipping mode doesn't return userMetadata |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping test server |

### Activity & Workflow Patterns

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1230](https://github.com/temporalio/sdk-python/issues/1230) | 0 | Support non-workflow activities |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Allow overriding Worker Deployment Version for child workflows |
| [#1047](https://github.com/temporalio/sdk-python/issues/1047) | 0 | Activity heartbeat enhancements |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 53 issues (46%)

The high stale percentage indicates a need for systematic backlog review.

**Close candidates (likely resolved or no longer relevant):**
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Temporal exceptions from converters (3+ years old, last updated 2023)
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VSCode debuggability (3+ years old, workarounds documented)
- [#637](https://github.com/temporalio/sdk-python/issues/637) - Windows 3.12.5 builds broken (newer Python versions may resolve)
- Issues from 2022-2023 without recent activity or upvotes

**Needs triage (maintainer decision required):**
- [#638](https://github.com/temporalio/sdk-python/issues/638) - ruamel.yaml issue (has workarounds, but affects DX)
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OTel context detach (3+ years old, may need upstream fix)
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release (4+ years old, needs verification if still relevant)
- [#639](https://github.com/temporalio/sdk-python/issues/639) - Operation canceled on start_workflow (high engagement, stale)

**Keep open (valid but not yet addressed):**
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VSCode debugging (3 upvotes, common user need)
- [#487](https://github.com/temporalio/sdk-python/issues/487) - Logger sandbox opt-out (6 upvotes, highest demand)
- [#688](https://github.com/temporalio/sdk-python/issues/688) - Protobuf sandbox issues (production impact)

### Duplicate Candidates

- **Debugging issues** ([#238](https://github.com/temporalio/sdk-python/issues/238), [#213](https://github.com/temporalio/sdk-python/issues/213), [#603](https://github.com/temporalio/sdk-python/issues/603), [#1104](https://github.com/temporalio/sdk-python/issues/1104)) could be consolidated into a single debugging meta-issue with platform-specific sections
- **Sandbox compatibility** issues ([#638](https://github.com/temporalio/sdk-python/issues/638), [#688](https://github.com/temporalio/sdk-python/issues/688), [#487](https://github.com/temporalio/sdk-python/issues/487)) share root causes and could be tracked under a sandbox improvements epic
- **OpenTelemetry issues** ([#160](https://github.com/temporalio/sdk-python/issues/160), [#733](https://github.com/temporalio/sdk-python/issues/733), [#1136](https://github.com/temporalio/sdk-python/issues/1136)) could benefit from unified tracking

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix critical poller bug** - [#1268](https://github.com/temporalio/sdk-python/issues/1268) causes silent task timeouts with no logging
- **Fix Protobuf sandbox issues** - [#688](https://github.com/temporalio/sdk-python/issues/688) causes production failures in Kubernetes
- **Document sandbox workarounds** - Comprehensive guide for common libraries (ruamel, Pydantic, OTel)

### Phase 2: Developer Experience (Short-term)

- **Enable breakpoint() in debug_mode** - [#1104](https://github.com/temporalio/sdk-python/issues/1104) blocks workflow debugging
- **Consolidate debugging documentation** - Create unified guide covering VSCode, PyCharm, and sandbox interactions
- **Implement logger sandbox opt-out** - [#487](https://github.com/temporalio/sdk-python/issues/487) has highest upvotes and clear solution path
- **Fix logs during queries** - [#1267](https://github.com/temporalio/sdk-python/issues/1267) affects observability

### Phase 3: Feature Expansion (Medium-term)

- **Python 3.14 compatibility** - [#1154](https://github.com/temporalio/sdk-python/issues/1154) InterpreterPoolExecutor and [#928](https://github.com/temporalio/sdk-python/issues/928) free-threading support
- **Enhanced activity cancellation** - [#700](https://github.com/temporalio/sdk-python/issues/700) and [#1048](https://github.com/temporalio/sdk-python/issues/1048) improvements
- **Fix OTel context detach** - [#160](https://github.com/temporalio/sdk-python/issues/160) is 3+ years old and causes log spam
- **Stack trace preservation** - [#807](https://github.com/temporalio/sdk-python/issues/807) better exception chain visibility

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage** - Review and close/update 53 stale issues (46% of backlog)
- **OpenTelemetry ecosystem updates** - Track upstream changes affecting [#733](https://github.com/temporalio/sdk-python/issues/733) and similar
- **Dependency updates** - Keep pace with Python releases and ecosystem changes
