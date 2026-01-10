# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-10
**Total Open Issues:** 114
**Total Closed Issues:** 475
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md)

---

## Executive Summary

The Python SDK demonstrates the **fastest resolution times** among all Temporal SDKs, with a median time-to-close of just 16 calendar days (12 business days) and an 81% resolution rate. However, the backlog grew by 21 issues over the past 12 months, indicating a slight capacity gap. The most prominent user pain points center on **workflow sandbox compatibility** (Protobuf, third-party imports, datetime proxying), **IDE debugging support** (VSCode, PyCharm), and **OpenTelemetry integration issues**. The sandbox, while providing determinism guarantees, creates friction with common Python libraries and tooling.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | High - sandbox issues and observability problems dominate |
| Enhancements | 63 | Medium - future Python version support and developer experience |
| Stale Issues (>12 months) | 53 (46%) | Medium - significant housekeeping opportunity |
| Security Issues | 0 | N/A |

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

1. **Immediate:** Address sandbox compatibility issues affecting Protobuf (#688) and third-party imports (#638) - these cause production failures
2. **Short-term:** Improve IDE debugging documentation and support (#238, #603, #213) - affects developer onboarding
3. **Medium-term:** Fix OpenTelemetry interceptor issues (#160, #733) - blocks observability adoption
4. **Long-term:** Prepare for Python 3.14 free-threading (#928) and InterpreterPoolExecutor (#1154)
5. **Housekeeping:** Triage 53 stale issues (46% of open backlog) for closure or prioritization

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The Python SDK backlog is slowly growing, with 21 more issues opened than closed over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 171 | 150 | +21 |

The backlog growth is modest but consistent. Notable spikes occurred in April (+8), March (+10), and August (+4). The team maintains strong closure velocity, often closing more issues than opened in individual months (July, September, October, December, January).

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

### Sandbox Compatibility Issues (High Priority)

The workflow sandbox is the most significant source of friction for Python SDK users. While it provides important determinism guarantees, it creates compatibility issues with common Python libraries and patterns.

#### Protobuf Integration (#688 - 12 comments)

**Status:** Open, active investigation

**Problem:** Workflow sandbox causes `KeyError: 'google.protobuf'` when using Protobuf messages as workflow inputs. The issue manifests inconsistently - works locally but fails in Kubernetes environments.

**Root Cause:** The sandbox re-imports modules for each workflow run. When `google.protobuf.json_format.Parse` calls `GetOptions()`, it triggers a lazy import that fails in the sandboxed environment.

**Workaround:** Import Protobuf messages outside the `imports_passed_through()` context (contrary to usual recommendations) or ensure `google.protobuf` is imported before workflow execution.

#### Third-Party Library Conflicts (#638 - 12 comments)

**Problem:** Importing `ruamel.yaml` anywhere in the codebase causes workflow validation failures with `TypeError: unhashable type: '_RestrictedProxy'`.

**Root Cause:** `ruamel.yaml` patches `datetime` with custom representers. The sandbox proxies `datetime` for determinism, but the proxy objects are unhashable, breaking ruamel's registration.

**Workarounds:**
1. Wrap ruamel import with `workflow.unsafe.imports_passed_through()`
2. Disable datetime proxying via custom `SandboxedWorkflowRunner` (like Pydantic integration)
3. Use `workflow.unsafe.sandbox_unrestricted()` for ruamel-using code

**Impact:** Any innocuous change in other parts of the codebase can cause Temporal sandbox failures unexpectedly.

#### Workflow Logger Sandbox Restrictions (#487 - 6 upvotes)

**Problem:** Advanced logger handlers (e.g., structlog) fail inside sandbox due to import restrictions during log formatting.

**Proposed Solution:** Add `temporalio.workflow.logger.unsafe_disable_sandbox()` to wrap logging calls with `sandbox_unrestricted()` and `imports_passed_through()`.

**Current Workaround:**
```python
class SandboxDisabledLoggerAdapter(workflow.LoggerAdapter):
    def process(self, msg, kwargs):
        with temporalio.workflow.unsafe.sandbox_unrestricted():
            with temporalio.workflow.unsafe.imports_passed_through():
                return super().process(msg, kwargs)
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

**Alternative for preserving sandbox with debugpy:**
```python
def new_sandbox_runner():
    return SandboxedWorkflowRunner(
        restrictions=SandboxRestrictions.default.with_passthrough_modules("_pydevd_bundle")
    )
```

### OpenTelemetry Integration Bugs (Medium Priority)

OpenTelemetry support has multiple long-standing issues affecting observability adoption.

| Issue | Comments | Description |
|-------|----------|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | "Failed to detach context" errors on worker exit (3+ years old) |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | OTel + ddtrace causes `os.environ.get` sandbox violation |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 5 | Langfuse tracing not working with OpenAI agents |

**#160 Root Cause:** Context detachment fails on generator exit when event loop is garbage collected. Related to [opentelemetry-python#2606](https://github.com/open-telemetry/opentelemetry-python/issues/2606).

**#733 Root Cause:** `ddtrace` imports `opentelemetry.baggage` at runtime, causing re-import in sandboxed workflows. OTel 1.29+ added `os.environ.get` call that violates sandbox restrictions.

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

| Issue | Comments | Description |
|-------|----------|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel activity and wait for completion |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Sync multiprocessed activities cannot be cancelled |

**#700 Key Clarifications:**
- Activity cancellation requires heartbeating - cancellation is communicated via heartbeat response
- `CancelledError` only raises at await points (standard asyncio behavior)
- Use `e.cause` on `ActivityError` to differentiate cancellation from other failures
- Heartbeat in background task if main activity has long-running coroutines

**#1048 Limitation:** For ProcessPoolExecutor activities, there's no universal interruption mechanism. Users must manually check `activity.is_cancelled()` or `activity.wait_for_cancelled_sync()`.

---

## Enhancement Requests (63 issues)

### Future Python Version Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support `InterpreterPoolExecutor` from Python 3.14 - current SDK passes non-shareable objects across interpreter boundary |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Research free-threading compatibility (PEP 703) - requires PyO3 opt-in and Protobuf compatibility verification |

**Impact:** Python 3.14 (October 2025) introduces subinterpreters and free-threading as major features. SDK needs proactive compatibility work.

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
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for `worker._count_not_exists` |
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | Provide supported Session implementations |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | 0 | Stack trace on deadlock exceptions |

### Testing Infrastructure

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | RuntimeError when starting test server |
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server time-skipping mode doesn't return userMetadata |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping test server |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 53 issues (46%)

The high stale percentage indicates a need for systematic backlog review.

**Close candidates (likely resolved or no longer relevant):**
- [#321](https://github.com/temporalio/sdk-python/issues/321) - Temporal exceptions from converters (3+ years old, last updated 2023)
- [#213](https://github.com/temporalio/sdk-python/issues/213) - VSCode debuggability (3+ years old, workarounds documented)
- Issues from 2022-2023 without recent activity or upvotes

**Needs triage (maintainer decision required):**
- [#638](https://github.com/temporalio/sdk-python/issues/638) - ruamel.yaml issue (has workarounds, but affects DX)
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OTel context detach (3+ years old, may need upstream fix)
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release (4+ years old, needs verification if still relevant)

**Keep open (valid but not yet addressed):**
- [#238](https://github.com/temporalio/sdk-python/issues/238) - VSCode debugging (3 upvotes, common user need)
- [#487](https://github.com/temporalio/sdk-python/issues/487) - Logger sandbox opt-out (6 upvotes, highest demand)
- [#688](https://github.com/temporalio/sdk-python/issues/688) - Protobuf sandbox issues (production impact)

### Duplicate Candidates

- **Debugging issues** (#238, #213, #603, #1104) could be consolidated into a single debugging meta-issue with platform-specific sections
- **Sandbox compatibility** issues (#638, #688, #487) share root causes and could be tracked under a sandbox improvements epic
- **OpenTelemetry issues** (#160, #733, #1136) could benefit from unified tracking

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- **Fix Protobuf sandbox issues** - #688 causes production failures in Kubernetes
- **Document sandbox workarounds** - Comprehensive guide for common libraries (ruamel, Pydantic, OTel)
- **Implement logger sandbox opt-out** - #487 has highest upvotes and clear solution path

### Phase 2: Developer Experience (Short-term)

- **Consolidate debugging documentation** - Create unified guide covering VSCode, PyCharm, and sandbox interactions
- **Fix OTel context detach** - #160 is 3+ years old and causes log spam
- **Improve error messages** - Better guidance when sandbox violations occur

### Phase 3: Feature Expansion (Medium-term)

- **Python 3.14 compatibility** - #1154 InterpreterPoolExecutor and #928 free-threading support
- **Enhanced activity cancellation** - #700 and #1048 improvements
- **Stack trace preservation** - #807 better exception chain visibility

### Phase 4: Maintenance (Ongoing)

- **Stale issue triage** - Review and close/update 53 stale issues (46% of backlog)
- **OpenTelemetry ecosystem updates** - Track upstream changes affecting #733 and similar
- **Dependency updates** - Keep pace with Python releases and ecosystem changes
