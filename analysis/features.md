# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-05-20
**Total Open Issues:** 257
**Total Closed Issues:** 155
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

---

## Overview

The Features repository tracks cross-SDK feature parity and SDK-level feature specifications for Temporal. Issues here represent features that should be implemented consistently across all SDKs, cross-cutting test infrastructure concerns, and bugs in test behavior. The repository has a relatively low resolution rate (38%), a large stale backlog (66% of open issues are over a year old), and a growing trend (+30 net over 12 months), indicating that feature tracking is outpacing implementation capacity.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Feature Coverage Gaps / Enhancements | 239 | Medium — broad SDK parity roadmap |
| Feature Tests | 8 | Medium — test infrastructure tracking |
| Bugs | 5 | High — active test failures |
| Security (Dependency) | 5 | Medium — Mend-flagged dependency vulnerabilities |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 120 |
| Total Comments | 406 |
| Issues with Upvotes | 34 (13%) |
| Issues with Comments | 130 (51%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 38% (155/412) |
| Median Time to Close | 129 days (calendar) / 91 days (business) |
| Resolved within 30 days | 32% |
| Resolved within 90 days | 46% |

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 74 | 44 | +30 |

📈 **Backlog Growing:** 30 more issues opened than closed in the last 12 months. The repository is used as a planning tracker for cross-SDK work; many issues represent intended future work rather than active bugs.

---

## Top Issues by Engagement

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 17 | 23 | [Feature Request] Declarative schedules: upsert, sync, terraform, etc. |
| 2 | [#399](https://github.com/temporalio/features/issues/399) | 15 | 12 | Custom Markers for Workflow History/Timeline |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 14 | 4 | Add support for unit testing workflow versioning |
| 4 | [#558](https://github.com/temporalio/features/issues/558) | 3 | 21 | Add WorkflowIdConflictPolicy in child workflow options |
| 5 | [#562](https://github.com/temporalio/features/issues/562) | 7 | 6 | [Feature Request] Session support |
| 6 | [#443](https://github.com/temporalio/features/issues/443) | 0 | 18 | [Feature Request] Implement activity task poll limit |
| 7 | [#434](https://github.com/temporalio/features/issues/434) | 7 | 1 | [Feature Request] Serialization context for codecs and converters |
| 8 | [#456](https://github.com/temporalio/features/issues/456) | 5 | 4 | [Feature Request] Provide worker status |
| 9 | [#229](https://github.com/temporalio/features/issues/229) | 6 | 2 | [Feature Request] Auto heartbeating |
| 10 | [#51](https://github.com/temporalio/features/issues/51) | 0 | 13 | [Feature Request] Standardize method for listing workflow queries |
| 11 | [#563](https://github.com/temporalio/features/issues/563) | 0 | 12 | Tag workflow_failed counter metric with exception type |
| 12 | [#257](https://github.com/temporalio/features/issues/257) | 0 | 12 | Update API: support not writing history when calling external workflows |
| 13 | [#25](https://github.com/temporalio/features/issues/25) | 3 | 6 | [Feature Request] SDK should expose workflow_started metric |
| 14 | [#69](https://github.com/temporalio/features/issues/69) | 0 | 10 | [Feature Request] Specify reset point in workflow code |
| 15 | [#463](https://github.com/temporalio/features/issues/463) | 2 | 5 | Customize activity failure logging (and more?) |

---

## Feature Coverage Gaps

### Highest-Priority Cross-SDK Features

These features have significant user demand (upvotes and/or comments) and are not yet implemented across all SDKs.

| Issue | 👍 | 💬 | Feature | Status |
|-------|-----|-----|---------|--------|
| [#118](https://github.com/temporalio/features/issues/118) | 17 | 23 | Declarative schedules — annotate a workflow with its schedule and have it automatically upsert on worker deploy | Open since 2022 |
| [#399](https://github.com/temporalio/features/issues/399) | 15 | 12 | Custom Markers for Workflow History/Timeline — allow user-defined markers in workflow history | Open since 2023 |
| [#649](https://github.com/temporalio/features/issues/649) | 14 | 4 | Unit testing workflow versioning — no way to test version upgrade paths in unit tests | Open since 2020 |
| [#562](https://github.com/temporalio/features/issues/562) | 7 | 6 | Session support in non-Go SDKs (sticky activity queues with concurrency control) | Open since 2021 |
| [#434](https://github.com/temporalio/features/issues/434) | 7 | 1 | Serialization context for codecs and converters — pass context when serializing payloads | Open since 2024 |
| [#558](https://github.com/temporalio/features/issues/558) | 3 | 21 | WorkflowIdConflictPolicy in child workflow options — requires server-side work (#temporal/6799) | Active discussion |
| [#229](https://github.com/temporalio/features/issues/229) | 6 | 2 | Auto heartbeating — automatically send heartbeats without manual calls in long-running activities | Open since 2023 |
| [#456](https://github.com/temporalio/features/issues/456) | 5 | 4 | Worker status API — expose current worker state (running, draining, stopped) | Open since 2024 |

### Observability & Metrics

| Issue | 👍 | 💬 | Feature |
|-------|-----|-----|---------|
| [#563](https://github.com/temporalio/features/issues/563) | 0 | 12 | Tag `workflow_failed` counter metric with exception type |
| [#25](https://github.com/temporalio/features/issues/25) | 3 | 6 | SDK should expose `workflow_started` metric |
| [#98](https://github.com/temporalio/features/issues/98) | 3 | 0 | New metric: `worker_task_slots_total` |
| [#175](https://github.com/temporalio/features/issues/175) | 3 | 0 | End-to-end latency metric for cron executions |
| [#702](https://github.com/temporalio/features/issues/702) | 1 | 1 | Add `activity_fail_endtoend_latency` metric |
| [#592](https://github.com/temporalio/features/issues/592) | 1 | 0 | Add `temporalNamespace` tag to all tracing spans |

### Payload & External Storage

| Issue | 👍 | Feature |
|-------|-----|---------|
| [#363](https://github.com/temporalio/features/issues/363) | 4 | Work around gRPC message size limit for task completions |
| [#765](https://github.com/temporalio/features/issues/765) | 0 | External Payload Storage Foundation |
| [#783](https://github.com/temporalio/features/issues/783) | 0 | S3 External Storage Driver |
| [#782](https://github.com/temporalio/features/issues/782) | 0 | Allow payload visitors to visit memo payloads in aggregate |
| [#772](https://github.com/temporalio/features/issues/772) | 0 | Enable concurrent payload visiting |
| [#723](https://github.com/temporalio/features/issues/723) | 0 | SDK should fail workflow task if payloads size is known to be too large |
| [#701](https://github.com/temporalio/features/issues/701) | 0 | Warn if the SDK tried to send a payload above a specific size |
| [#705](https://github.com/temporalio/features/issues/705) | 0 | Warn if SDK detects a workflow history over a certain size |

### Versioning & Deployment

| Issue | 👍 | Feature |
|-------|-----|---------|
| [#649](https://github.com/temporalio/features/issues/649) | 14 | Unit testing workflow versioning |
| [#694](https://github.com/temporalio/features/issues/694) | 0 | Allow overriding Worker Deployment Version when invoking a Child Workflow |
| [#726](https://github.com/temporalio/features/issues/726) | 0 | Deployment client / Operator API support |
| [#753](https://github.com/temporalio/features/issues/753) | 0 | Add upgrade-on-new snippet for docs |

### Child Workflows & Execution Control

| Issue | 👍 | 💬 | Feature |
|-------|-----|-----|---------|
| [#558](https://github.com/temporalio/features/issues/558) | 3 | 21 | WorkflowIdConflictPolicy in child workflow options |
| [#515](https://github.com/temporalio/features/issues/515) | 3 | 2 | Expose start delay in child workflow options |
| [#503](https://github.com/temporalio/features/issues/503) | 3 | 1 | Cancel and Signal should still propagate to child workflows when parent is cancelled |
| [#377](https://github.com/temporalio/features/issues/377) | 0 | 9 | Support option to disable "Close" timeouts for indefinite workflows |
| [#69](https://github.com/temporalio/features/issues/69) | 0 | 10 | Specify reset point in workflow code |

### Standalone Activities

| Issue | 👍 | Feature |
|-------|-----|---------|
| [#706](https://github.com/temporalio/features/issues/706) | 1 | Support standalone activities |
| [#740](https://github.com/temporalio/features/issues/740) | 0 | Samples for standalone activities |
| [#822](https://github.com/temporalio/features/issues/822) | 0 | Implement operator commands for Standalone Activities |

### Logging & Diagnostics

| Issue | 👍 | Feature |
|-------|-----|---------|
| [#463](https://github.com/temporalio/features/issues/463) | 2 | Customize activity failure logging |
| [#827](https://github.com/temporalio/features/issues/827) | 0 | SDK should log when WFT completion takes a long time |
| [#812](https://github.com/temporalio/features/issues/812) | 0 | Standard error handler interface for workflow and activity failures |

---

## Test Infrastructure Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#613](https://github.com/temporalio/features/issues/613) | Test methodology | Explore ways of testing pre-patched code in SDKs |
| [#315](https://github.com/temporalio/features/issues/315) | CI environment | Stale workflows in sdk-ci.a2dd6 namespace |
| [#777](https://github.com/temporalio/features/issues/777) | Schedule testing | Support conflict token retry loop for schedule updates (cross-SDK tracking) |
| [#729](https://github.com/temporalio/features/issues/729) | Worker deployment | Investigate worker-deployment-related poll failure ergonomics |

---

## Bugs

| Issue | SDK(s) | Description |
|-------|--------|-------------|
| [#503](https://github.com/temporalio/features/issues/503) | All | Cancel and Signal should still propagate to child workflows when parent is cancelled — current behavior is incorrect |
| [#422](https://github.com/temporalio/features/issues/422) | All | Incomplete span reporting: only RunActivity spans sent, missing other span types |
| [#330](https://github.com/temporalio/features/issues/330) | Go | `bugs/go/child_workflow_cancel_panic` test is flaky |
| [#315](https://github.com/temporalio/features/issues/315) | Infrastructure | Stale workflows accumulating in sdk-ci namespace |
| [#182](https://github.com/temporalio/features/issues/182) | All | Document that list workflow/schedule calls are eventually consistent |

---

## Security Dependencies

5 issues are flagged by Mend (automated dependency scanner) for security vulnerabilities in the features repository's own dependencies. These should be addressed through dependency updates rather than feature work.

---

## Housekeeping

### Stale Issues

169 open issues (66%) have had no activity in over 12 months. The vast majority are feature tracking issues that represent intended future work. Given the repository's role as a cross-SDK feature specification tracker, many old issues remain valid aspirational goals.

High-value stale issues to prioritize:
- [#399](https://github.com/temporalio/features/issues/399) (Custom Markers, 15 upvotes) — last updated July 2024
- [#363](https://github.com/temporalio/features/issues/363) (gRPC message size workaround, 4 upvotes) — last updated December 2024
- [#175](https://github.com/temporalio/features/issues/175) (End-to-end latency metric for cron, 3 upvotes)
- [#98](https://github.com/temporalio/features/issues/98) (worker_task_slots_total metric, 3 upvotes) — open since August 2022

### Recommendations

1. **Feature parity:** Prioritize declarative schedules (#118), workflow versioning unit testing (#649), and session support (#562) — the three highest-upvote requests, all open for 2–5 years.
2. **Test coverage:** Fix the child workflow cancellation propagation bug (#503) — labeled as a bug but affects all SDKs and has 3 upvotes.
3. **Infrastructure:** Address security dependency updates, fix stale CI namespace (#315), and stabilize the flaky Go child workflow cancel test (#330).
4. **Observability:** The metrics and tracing cluster (workflow_failed tagging, workflow_started metric, span completeness) consistently appears across multiple issues — a focused sprint could close several at once.
5. **Stale triage:** Conduct a periodic review of the 169 stale issues; many early issues may have been superseded by newer API design decisions.
