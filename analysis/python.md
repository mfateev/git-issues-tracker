# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 97
**Total Closed Issues:** 541
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The Python SDK has 97 open issues with a strong 85% resolution rate (541/638) and a median close time of 17 calendar days. The backlog is actively shrinking — 20 more issues were closed than opened over the past 12 months. The primary pain points remain **workflow sandbox compatibility** (particularly with OpenTelemetry/ddtrace and Python 3.14), **activity cancellation semantics** in multiprocess workers, **IDE debugging support** within the sandboxed environment, and **error-handling ergonomics** (CancelledError hierarchy). A significant share (56%) of open issues are stale with no activity for over 12 months, indicating continued need for triage. The SDK is also active in AI/agent integrations, with standalone activities, OpenAI Agents SDK support, and ADK tooling all landing or in-progress.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs (open) | 33 | High — includes Python 3.14 breakage, activity cancellation, sandbox/OTel conflicts |
| Enhancements (open) | 54 | Medium — free-threading, CancelledError hierarchy, sessions for OpenAI Agents |
| Python Version Compatibility | 3 | Critical — Python 3.14 NameError breaks all activity scheduling; sandbox hangs |
| Sandbox/OTel Compatibility | 3 | High — OTel ≥1.29 + ddtrace conflict causes workflow failures |
| Activity Cancellation | 3 | High — no clean cancellation in multiprocess workers; cancel-and-wait semantics broken |
| Debugging / IDE Support | 3 | Medium — VSCode and PyCharm debugging non-functional in sandbox; 3+ upvotes |
| Stale Issues (>12 months) | 54 | Medium — 56% of open issues need triage |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 32 |
| Total Comments | 166 |
| Issues with Upvotes | 18 (19%) |
| Issues with Comments | 50 (52%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 85% (541/638) |
| Median Time to Close | 17 days (calendar) / 13 days (business) |
| Resolved within 30 days | 63% |
| Resolved within 90 days | 81% |

### Recommended Actions

1. **Immediate:** Fix Python 3.14 `NameError` in `_outbound_schedule_activity` ([#1517](https://github.com/temporalio/sdk-python/issues/1517)) — breaks all workflows on the upcoming Python release
2. **Short-term:** Resolve activity cancellation in multiprocess workers ([#1048](https://github.com/temporalio/sdk-python/issues/1048), [#700](https://github.com/temporalio/sdk-python/issues/700)) and the OTel/ddtrace sandbox conflict ([#733](https://github.com/temporalio/sdk-python/issues/733))
3. **Medium-term:** Implement free-threading support ([#928](https://github.com/temporalio/sdk-python/issues/928) — 4 upvotes) and change `CancelledError` to inherit from `BaseException` ([#1292](https://github.com/temporalio/sdk-python/issues/1292))
4. **Long-term:** Add PyCharm debugging documentation ([#603](https://github.com/temporalio/sdk-python/issues/603) — 3 upvotes), Session implementations for OpenAI Agents ([#1089](https://github.com/temporalio/sdk-python/issues/1089) — 2 upvotes), and `InterpreterPoolExecutor` support ([#1154](https://github.com/temporalio/sdk-python/issues/1154) — 2 upvotes)
5. **Housekeeping:** Triage 54 stale issues; close resolved or obsolete items from 2022–2023

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking steadily, with a net reduction of 20 issues over the past year.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 159 | 179 | -20 |

📉 Backlog Shrinking: The team closed 20 more issues than were opened. February 2026 saw an especially strong burst of closures (-27 net), likely corresponding to a focused cleanup sprint. October 2025 was also strong (-8 net). The pace slowed in April–May 2026 (+6, +4), suggesting incoming issues now exceed closures in the short term.

### Last 6 Months: Detailed Analysis

Recent activity shows healthy closure momentum, with both bugs and enhancements being resolved at above-average rates.

| Metric | Value |
|--------|-------|
| Issues Opened | 64 |
| Issues Closed | 85 |
| Bugs Closed | 36 |
| Enhancements Completed | 32 |

Resolution speed slowed in the last 6 months compared to the all-time median: median of 34 calendar days vs. 17 days overall. The 90th percentile stretched to 680 days, pulling the 6-month average up to 232 calendar days, reflecting the closure of many long-standing stale issues in the February 2026 sprint.

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | [Feature Request] Allow workflow logger to opt-out of structured logging fields |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | 1 | [Feature Request] Research and make SDK free-threading capable/compatible |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | [Feature Request] Investigate/document how to use PyCharm debugger |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | [Bug] Can't debug workflow using VSCode |
| 4 | [#1502](https://github.com/temporalio/sdk-python/issues/1502) | 2 | 1 | Proposal: Google Cloud Storage external storage driver in contrib |
| 5 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | [Bug] Logs not emitted during workflow queries |
| 6 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | [Feature Request] Support InterpreterPoolExecutor from Python 3.13+ |
| 7 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | 6 | [Feature Request] Provide supported Session implementations for OpenAI Agents |
| 8 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | [Feature Request] Loss of stack trace information |
| 9 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | [Feature Request] Temporal exceptions from converters and codecs |
| 10 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | [Feature Request] Confirm VSCode debuggability within sandbox |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | [Feature Request] Support raising cancellation in sync multiprocessed activities |
| 2 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | [Bug] Can't debug workflow using VSCode |
| 3 | [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 10 | [Feature Request] temporalio.CancelledError should inherit from BaseException |
| 4 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 10 | [Feature Request] Provide supported Session implementations for OpenAI Agents |
| 5 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | [Bug] Unable to run workflows with OpenTelemetry and ddtrace |
| 6 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | [Bug] No clean way to cancel an activity and wait until it's cancelled |
| 7 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | [Bug] Investigate PyGILState_Release issue for client |
| 8 | [#1517](https://github.com/temporalio/sdk-python/issues/1517) | 9 | Python 3.14 Compatibility: NameError in _outbound_schedule_activity |
| 9 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 9 | [Feature Request] Research and make SDK free-threading capable/compatible |
| 10 | [#837](https://github.com/temporalio/sdk-python/issues/837) | 9 | [Feature Request] Make Temporal logger adapter accommodate third-party loggers |

---

## Issue Analysis by Category

### Python Version Compatibility (3 open issues)

Two related breakage vectors affect upcoming Python versions. Python 3.14 introduces a breaking change in `asyncio.Task` construction that causes all activity scheduling to fail at the `_outbound_schedule_activity` call site. A separate issue affects `sys.monitoring` callbacks (e.g., coverage tools) on Python 3.14, causing the workflow sandbox to hang. An existing issue with Alpine Linux / Python 3.11 installation is long-standing.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1517](https://github.com/temporalio/sdk-python/issues/1517) | 0 | Python 3.14: `NameError` in `_outbound_schedule_activity` due to eager closure-cell inspection — blocks any workflow with activities |
| [#1326](https://github.com/temporalio/sdk-python/issues/1326) | 0 | Python 3.14: `sys.monitoring` callbacks (coverage, etc.) cause workflow sandbox hang |
| [#622](https://github.com/temporalio/sdk-python/issues/622) | 1 | Unable to install temporal on Python 3.11-alpine3.16 |

**Priority: Critical.** Issue [#1517](https://github.com/temporalio/sdk-python/issues/1517) will break all users upgrading to Python 3.14. The fix is a minor reordering of variable assignment before the closure is created.

### Activity Cancellation (3 open issues)

Activity cancellation has multiple open defects. The highest-engaged issue ([#1048](https://github.com/temporalio/sdk-python/issues/1048), 11 comments) documents that cancellation signals are never delivered to sync multiprocess activities, causing pool starvation and silent data duplication. A related issue ([#700](https://github.com/temporalio/sdk-python/issues/700), 10 comments) shows there is no clean pattern to cancel an activity and await its acknowledgement from workflow code. The `activity_cancellation` area in `issues-by-area.json` also includes [#810](https://github.com/temporalio/sdk-python/issues/810) for implementing proper behavior for `cancel_activity`.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Cancellation never delivered to sync multiprocess activities — pool starvation risk |
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and await its cancellation from a workflow |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for `cancel_activity` with `WAIT_CANCELLATION_COMPLETED` |

**Priority: High.** The multiprocess cancellation gap is a correctness issue with production impact (duplicate side effects, pool exhaustion).

### Workflow Sandbox Compatibility (4 open issues)

The workflow sandbox's strict import restrictions conflict with several popular libraries.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | OTel ≥1.29 + ddtrace: `os.environ.get` called inside workflow sandbox, causing task failure |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | 0 | `WARN_ON_UNINTENTIONAL_PASSTHROUGH` warns on import of the workflow module itself |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | `debug_mode=True` in Worker still doesn't allow breakpoints — sandbox ignores setting |
| [#607](https://github.com/temporalio/sdk-python/issues/607) | 0 | Prevent hot-reload of workflow definitions from disk |

[#733](https://github.com/temporalio/sdk-python/issues/733) has been open for over a year (10 comments) and affects any user combining Temporal with Datadog APM. The workaround (manually pre-importing OTel modules) is non-obvious.

### IDE Debugging Support (3 open issues)

Debugging workflows in the sandbox is a recurring pain point with consistent community demand (3+2 upvotes across issues). The `debug_mode` Worker option exists but does not reliably enable breakpoints.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | VSCode: unable to attach debugger inside sandboxed workflow code |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | PyCharm: no guidance on using PyCharm debugger within sandbox |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox environment |

All three issues are stale (last activity 2022–2025). A single documentation improvement covering `debug_mode` + IDE setup would address all three.

### Error Handling and Exception Hierarchy (4 open issues)

Several issues relate to how Temporal errors integrate with Python's exception system.

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 1 | `temporalio.CancelledError` should inherit from `BaseException` to prevent broad `except Exception` clauses from silently swallowing cancellation |
| [#1262](https://github.com/temporalio/sdk-python/issues/1262) | 0 | Add ability to obtain `ApplicationError` details with type hint |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information when exceptions propagate through activity boundaries |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Temporal exceptions from converters and codecs should be surfaced as workflow failures |

[#1292](https://github.com/temporalio/sdk-python/issues/1292) is a breaking change but well-motivated: Python's own `asyncio.CancelledError` made the same migration in 3.8. The discussion (8 comments) is thoughtful with team acknowledgement.

### Logging (3 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | Logs not emitted during workflow query execution |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 1 | Temporal logger adapter should accommodate third-party loggers that accept extra kwargs |
| [#503](https://github.com/temporalio/sdk-python/issues/503) | 0 | Do not mutate `extra` dict in activity/workflow loggers |

### Worker and Runtime Issues (5 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#300](https://github.com/temporalio/sdk-python/issues/300) | 0 | `PyGILState_Release` fatal error on short-lived client-only processes |
| [#1489](https://github.com/temporalio/sdk-python/issues/1489) | 0 | `temporal_worker_task_slots_used` metric never reaches 0 during inter-activity gaps |
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | 0 | Worker intermittently stops polling after synchronous activity completion |
| [#778](https://github.com/temporalio/sdk-python/issues/778) | 0 | Strange workflow task timeout with unclear root cause |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | 0 | Cannot replace worker client if default Runtime is used |

[#300](https://github.com/temporalio/sdk-python/issues/300) is a 3-year-old crash that may only surface in edge cases but represents a correctness gap in the Rust/Python GIL boundary. [#1489](https://github.com/temporalio/sdk-python/issues/1489) and [#1295](https://github.com/temporalio/sdk-python/issues/1295) both suggest issues with worker poller lifecycle.

### Serialization and Type Conversion (4 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1237](https://github.com/temporalio/sdk-python/issues/1237) | 0 | Converter returns wrong value when converting `dict[None, Any]` |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support `(str, Enum)` like `StrEnum` in serialization |
| [#496](https://github.com/temporalio/sdk-python/issues/496) | 0 | Fix explanation of Pydantic datetime issue in docs |
| [#427](https://github.com/temporalio/sdk-python/issues/427) | 0 | Dataclasses require even defaulted fields in JSON, breaking backward compatibility |

### Test Framework (4 open issues)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server in time-skipping mode does not return `userMetadata` |
| [#826](https://github.com/temporalio/sdk-python/issues/826) | 0 | `test_unfinished_handler_on_workflow_termination` fails intermittently |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |
| [#699](https://github.com/temporalio/sdk-python/issues/699) | 0 | `workflow.wait` broken with `asyncio.FIRST_COMPLETED` mode |

### Supply Chain / Dependency Security (1 open issue)

| Issue | 👍 | Description |
|-------|-----|-------------|
| [#1546](https://github.com/temporalio/sdk-python/issues/1546) | 0 | Use Trusted Publishing to upload to PyPI to reduce supply chain attack risk |

Several recent security dependency issues have been closed promptly: rustls-webpki GHSA ([#1484](https://github.com/temporalio/sdk-python/issues/1484)/[#1485](https://github.com/temporalio/sdk-python/issues/1485)), quinn-proto CVE-2026-31812 ([#1358](https://github.com/temporalio/sdk-python/issues/1358)/[#1359](https://github.com/temporalio/sdk-python/issues/1359)), and lru GHSA ([#1294](https://github.com/temporalio/sdk-python/issues/1294)) — all resolved within days of filing. The team's CVE response time is excellent.

---

## API & Component Hotspots

Based on `issues-by-area.json`, the following areas have the highest open issue concentrations:

| Area | Open Issue Count | Notable Open Issues |
|------|------------------|---------------------|
| test-framework | 21 issues total (mix) | #851, #826, #834, #699 |
| error-handling | 20 issues total | #1262, #807, #321 |
| workflow-sandbox | 11 issues total | #1326, #1254 |
| activity-cancellation | 6 issues total | #1048, #810, #700 |
| debugging-sandbox | 2 issues | #1104, #238 |
| sandbox-restrictions | 5 issues total | #733 |
| logging | 13 issues total | #1267, #837, #503 |
| serialization | 12 issues total | #1237, #676 |

The `workflow-sandbox` and `sandbox-restrictions` areas together account for many of the most-discussed bugs, suggesting the sandboxing architecture is a persistent source of friction.

---

## Enhancement Requests (54 open issues)

### Runtime and Performance

| Issue | 👍 | Request |
|-------|-----|---------|
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 4 | Free-threading support for Python 3.13+ (GIL-free mode) — research + CI validation needed |
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support `InterpreterPoolExecutor` from Python 3.13 for true isolation |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Cancellation delivery for sync multiprocess activities |

### AI and Agent Integrations

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 2 | Session implementations for OpenAI Agents SDK (e.g., `OpenAIConversationsSession`) |
| [#1470](https://github.com/temporalio/sdk-python/issues/1470) | 0 | Support `ToolContext` for ADK function tools |
| [#1543](https://github.com/temporalio/sdk-python/issues/1543) | 0 | Operator commands for Standalone Activities |

### Error Handling and API Design

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 1 | `CancelledError` should inherit `BaseException` (mirrors `asyncio.CancelledError` in Python 3.8+) |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Surface Temporal exceptions from converters/codecs as proper workflow failures |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Preserve and surface stack trace information across activity boundaries |

### Observability and Logging

| Issue | 👍 | Request |
|-------|-----|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for `worker._count_not_enough_slots` |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 1 | Logger adapter should accept arbitrary extra kwargs for third-party loggers |
| [#1432](https://github.com/temporalio/sdk-python/issues/1432) | 0 | Expose `histogram_bucket_overrides` on `OpenTelemetryConfig` |

### External Storage and Data

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1502](https://github.com/temporalio/sdk-python/issues/1502) | 2 | Google Cloud Storage external storage driver in contrib (mirror of S3 driver) |
| [#1289](https://github.com/temporalio/sdk-python/issues/1289) | 0 | Warn if SDK detects workflow history over a certain size |
| [#1395](https://github.com/temporalio/sdk-python/issues/1395) | 0 | Headers should always run through external storage codecs |

### Developer Tooling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | Document PyCharm debugger usage with workflow sandbox |
| [#1450](https://github.com/temporalio/sdk-python/issues/1450) | 1 | Add `workflow.uuid7()` deterministic UUID generation |
| [#1275](https://github.com/temporalio/sdk-python/issues/1275) | 0 | Investigate alternative API doc generators (current toolchain has gaps) |
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Utility to extract activity implementations from a class for bulk registration |
| [#1546](https://github.com/temporalio/sdk-python/issues/1546) | 0 | Implement Trusted Publishing for PyPI uploads |

### Scheduling and Worker Configuration

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1367](https://github.com/temporalio/sdk-python/issues/1367) | 0 | Support conflict-token retry loop for schedule updates |
| [#870](https://github.com/temporalio/sdk-python/issues/870) | 0 | Worker Versioning high-level client API |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Allow overriding Worker Deployment Version when invoking child workflows |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

54 issues (56% of open) have seen no activity in over 12 months. Key candidates:

- **Close candidates:**
  - [#213](https://github.com/temporalio/sdk-python/issues/213) (2022) — VSCode debuggability confirmation; likely superseded by [#238](https://github.com/temporalio/sdk-python/issues/238)
  - [#321](https://github.com/temporalio/sdk-python/issues/321) (2023) — Exceptions from converters; no recent discussion, may be resolved by newer error handling work
  - [#496](https://github.com/temporalio/sdk-python/issues/496) — Pydantic datetime doc fix; should be a quick docs PR or close

- **Needs triage:**
  - [#238](https://github.com/temporalio/sdk-python/issues/238) — VSCode debugging; 3 upvotes, last comment 2024; needs maintainer position on sandbox debug support
  - [#603](https://github.com/temporalio/sdk-python/issues/603) — PyCharm docs; 3 upvotes, last update 2025; should become a documentation task
  - [#300](https://github.com/temporalio/sdk-python/issues/300) — PyGILState crash; 3 years old, 10 comments; needs confirmation whether still reproducible

- **Keep open:**
  - [#807](https://github.com/temporalio/sdk-python/issues/807) — Stack trace loss; 2 upvotes; valid and unfixed
  - [#700](https://github.com/temporalio/sdk-python/issues/700) — Activity cancel-and-wait; 10 comments; actively affects users
  - [#733](https://github.com/temporalio/sdk-python/issues/733) — OTel/ddtrace sandbox conflict; 10 comments; confirmed bug

### Duplicate Candidates

- [#238](https://github.com/temporalio/sdk-python/issues/238) and [#213](https://github.com/temporalio/sdk-python/issues/213) both cover VSCode debugging in the sandbox — [#213](https://github.com/temporalio/sdk-python/issues/213) could be closed as a duplicate
- [#1104](https://github.com/temporalio/sdk-python/issues/1104) (`debug_mode` not allowing breakpoints) is closely related to [#238](https://github.com/temporalio/sdk-python/issues/238) — consider consolidating

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)
- Fix Python 3.14 `NameError` in `_outbound_schedule_activity` ([#1517](https://github.com/temporalio/sdk-python/issues/1517))
- Fix Python 3.14 sandbox hang with `sys.monitoring` ([#1326](https://github.com/temporalio/sdk-python/issues/1326))
- Implement Trusted Publishing for PyPI ([#1546](https://github.com/temporalio/sdk-python/issues/1546))

### Phase 2: Developer Experience (Short-term)
- Improve sandbox/OTel compatibility to remove manual passthrough workarounds ([#733](https://github.com/temporalio/sdk-python/issues/733))
- Fix activity cancellation delivery in multiprocess workers ([#1048](https://github.com/temporalio/sdk-python/issues/1048))
- Document PyCharm and VSCode debugging in sandbox environment ([#603](https://github.com/temporalio/sdk-python/issues/603), [#238](https://github.com/temporalio/sdk-python/issues/238))
- Fix logs not emitted during workflow queries ([#1267](https://github.com/temporalio/sdk-python/issues/1267))

### Phase 3: Feature Expansion (Medium-term)
- Change `CancelledError` to inherit from `BaseException` ([#1292](https://github.com/temporalio/sdk-python/issues/1292)) — breaking change, requires major version coordination
- Research and implement free-threading (GIL-free) support ([#928](https://github.com/temporalio/sdk-python/issues/928))
- Provide `Session` implementations for OpenAI Agents SDK ([#1089](https://github.com/temporalio/sdk-python/issues/1089))
- Add `InterpreterPoolExecutor` support ([#1154](https://github.com/temporalio/sdk-python/issues/1154))
- Add Google Cloud Storage contrib driver ([#1502](https://github.com/temporalio/sdk-python/issues/1502))

### Phase 4: Maintenance (Ongoing)
- Triage 54 stale issues; close resolved/obsolete items from 2022–2023
- Consolidate overlapping sandbox debugging issues ([#213](https://github.com/temporalio/sdk-python/issues/213), [#238](https://github.com/temporalio/sdk-python/issues/238), [#1104](https://github.com/temporalio/sdk-python/issues/1104))
- Continue prompt CVE response for Rust dependency vulnerabilities (current turnaround: <1 day — excellent)
