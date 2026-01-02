# Temporal Features - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 247
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-features/issues.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

---

## Executive Summary

The Features repository tracks cross-SDK feature conformance and feature requests. With 247 open issues (mostly enhancements), this repo represents the backlog of features requested across all SDKs. Top requests are custom markers for workflow history (#399, 15 upvotes) and declarative schedules (#118, 8 upvotes).

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 216 | Medium - Feature requests |
| Feature Tests | 8 | Low - Test coverage |
| Bugs | 6 | High |
| Security (Mend) | 5 | Medium |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 106 |
| Total Comments | 399 |
| Issues with Upvotes | 32 (13%) |
| Issues with Comments | 130 (53%) |

---

## User Demand: Top Issues by Priority Score

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#399](https://github.com/temporalio/features/issues/399) | **15** | 12 | Custom Markers for Workflow History/Timeline |
| 2 | [#649](https://github.com/temporalio/features/issues/649) | **14** | 4 | Unit testing workflow versioning |
| 3 | [#118](https://github.com/temporalio/features/issues/118) | **8** | 22 | Declarative schedules (upsert, sync, terraform) |
| 4 | [#562](https://github.com/temporalio/features/issues/562) | **7** | 6 | Session support |
| 5 | [#434](https://github.com/temporalio/features/issues/434) | **6** | 1 | Serialization context for codecs/converters |
| 6 | [#229](https://github.com/temporalio/features/issues/229) | **6** | 0 | Auto heartbeating |
| 7 | [#456](https://github.com/temporalio/features/issues/456) | **5** | 2 | Worker status API |
| 8 | [#363](https://github.com/temporalio/features/issues/363) | **4** | 0 | gRPC message size limit workaround |
| 9 | [#558](https://github.com/temporalio/features/issues/558) | **3** | 21 | WorkflowIdConflictPolicy in child workflow |
| 10 | [#515](https://github.com/temporalio/features/issues/515) | **3** | 1 | Start delay in child workflow options |

---

## Top Feature Categories

### 1. Workflow Enhancements

| Issue | 👍 | Request |
|-------|-----|---------|
| #399 | 15 | Custom workflow history markers |
| #649 | 14 | Unit testing workflow versioning |
| #558 | 3 | WorkflowIdConflictPolicy for child workflows |
| #69 | 0 | Specify reset point in workflow code |

### 2. Activity Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| #229 | 6 | Auto heartbeating |
| #443 | 0 | Activity task poll limit |
| #463 | 2 | Customize activity failure logging |
| #377 | 0 | Disable close timeouts for long-running activities |

### 3. Testing & Development

| Issue | 👍 | Request |
|-------|-----|---------|
| #649 | 14 | Unit testing workflow versioning |
| #456 | 5 | Worker status API |
| #51 | 0 | List workflow queries/signals |

### 4. Scheduling & Orchestration

| Issue | 👍 | Request |
|-------|-----|---------|
| #118 | 8 | Declarative schedules (terraform, etc.) |
| #515 | 3 | Child workflow start delay |

### 5. Observability & Metrics

| Issue | 👍 | Request |
|-------|-----|---------|
| #563 | 0 | Tag workflow_failed with exception type |
| #268 | 0 | SDK-side Update metrics |
| #25 | 2 | Expose workflow_started metric |
| #223 | 2 | Activity retry exhaustion metric |
| #380 | 2 | DataDog integration samples |

### 6. Serialization & Data

| Issue | 👍 | Request |
|-------|-----|---------|
| #434 | 6 | Serialization context for codecs |
| #119 | 1 | upsertMemo command |

---

## Bugs (6 issues)

| Issue | 👍 | Problem |
|-------|-----|---------|
| #503 | 3 | Cancel/Signal not propagating after child CAN |
| #422 | 0 | Incomplete span reporting with scheduler |
| #706 | 0 | (Recent) |
| #705 | 0 | (Recent) |
| #702 | 0 | (Recent) |
| #701 | 0 | (Recent) |

---

## Proposed Roadmap

### Phase 1: High-Demand Features
- [ ] Custom workflow markers (#399 - 15 👍)
- [ ] Unit testing workflow versioning (#649 - 14 👍)
- [ ] Declarative schedules (#118 - 8 👍)

### Phase 2: Developer Experience
- [ ] Session support (#562 - 7 👍)
- [ ] Auto heartbeating (#229 - 6 👍)
- [ ] Serialization context (#434 - 6 👍)

### Phase 3: Observability
- [ ] Worker status API (#456)
- [ ] Enhanced metrics (#563, #268, #25, #223)
- [ ] DataDog samples (#380)

### Phase 4: Bug Fixes
- [ ] Signal/Cancel propagation (#503)
- [ ] Scheduler span reporting (#422)

---

## Quick Reference: Top 15 Issues

| # | Issue | 👍 | Category | Title |
|---|-------|-----|----------|-------|
| 1 | #399 | **15** | Workflow | Custom history markers |
| 2 | #649 | **14** | Testing | Workflow versioning tests |
| 3 | #118 | **8** | Scheduling | Declarative schedules |
| 4 | #562 | **7** | Workflow | Session support |
| 5 | #434 | **6** | Data | Serialization context |
| 6 | #229 | **6** | Activity | Auto heartbeating |
| 7 | #456 | **5** | DevExp | Worker status |
| 8 | #363 | **4** | Infra | gRPC size limit |
| 9 | #503 | **3** | Bug | Signal propagation |
| 10 | #558 | **3** | Workflow | Child conflict policy |
| 11 | #515 | **3** | Workflow | Child start delay |
| 12 | #624 | **2** | Infra | Graceful gRPC failures |
| 13 | #322 | **2** | Workflow | Configurable failure types |
| 14 | #25 | **2** | Metrics | workflow_started metric |
| 15 | #380 | **2** | Observability | DataDog samples |

---

## Notes

This repository serves as the central tracking for cross-SDK feature requests. Issues here often need implementation across all 7 SDKs, making them higher effort than single-SDK issues. The 216 enhancement requests represent the feature wishlist for the entire Temporal ecosystem.
