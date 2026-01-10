# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-01-10
**Total Open Issues:** 244
**Total Closed Issues:** 138
**Repository:** [temporalio/features](https://github.com/temporalio/features)

[Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md)

---

## Overview

The Features repository serves as the central hub for cross-SDK conformance testing and feature parity tracking. It contains tests that validate consistent behavior across all Temporal SDKs and tracks feature requests that should be implemented uniformly across the ecosystem.

Issues here typically relate to:
- Cross-SDK feature parity gaps
- SDK-specific feature implementations
- Test infrastructure and tooling
- Worker and activity management
- Observability and metrics standardization

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Cross-SDK Feature Requests | 224 | High - SDK parity |
| Test Infrastructure | 8 | Medium |
| Bugs | 6 | High |
| Security Vulnerabilities | 5 | High |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 106 |
| Total Comments | 397 |
| Issues with Upvotes | 32 (13%) |
| Issues with Comments | 129 (53%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 36% (138/382) |
| Median Time to Close | 151 days calendar / 108 days business |
| Average Time to Close | 274 days calendar / 196 days business |
| 90th Percentile | 818 days |
| Resolved within 30 days | 30% |
| Resolved within 90 days | 43% |

The low resolution rate (36%) is expected for this repository - it primarily tracks cross-SDK feature requests that require coordinated implementation across 8+ SDKs.

### Closure Reasons (Inferred)

| Reason | Count | % |
|--------|-------|---|
| Completed (features) | 70 | 51% |
| Self-resolved | 25 | 18% |
| Fixed (bugs) | 6 | 4% |
| Duplicate | 1 | 1% |
| Other/Unknown | 36 | 26% |

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 67 | 44 | +23 |

**Backlog Growing:** The features backlog is expanding with 23 more issues opened than closed. This reflects the increasing demand for cross-SDK feature parity as Temporal's user base grows.

### Monthly Breakdown

| Month | Opened | Closed | Net |
|-------|--------|--------|-----|
| 2025-02 | 12 | 3 | +9 |
| 2025-03 | 5 | 2 | +3 |
| 2025-04 | 5 | 8 | -3 |
| 2025-05 | 1 | 4 | -3 |
| 2025-06 | 7 | 4 | +3 |
| 2025-07 | 6 | 6 | 0 |
| 2025-08 | 7 | 1 | +6 |
| 2025-09 | 5 | 4 | +1 |
| 2025-10 | 10 | 6 | +4 |
| 2025-11 | 5 | 2 | +3 |
| 2025-12 | 4 | 1 | +3 |
| 2026-01 | 0 | 3 | -3 |

---

## Issue Health

### Age Distribution (Open Issues)

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 2 | 1% |
| 1-3 months | 9 | 4% |
| 3-6 months | 15 | 6% |
| 6-12 months | 34 | 14% |
| 1-2 years | 53 | 22% |
| 2-3 years | 44 | 18% |
| 3+ years | 87 | 36% |

**Average Age:** 804 days (over 2 years)

The high average age reflects that many feature requests require significant cross-SDK coordination and are tracked long-term rather than implemented quickly.

### Stale Issues

**145 issues (59%)** have had no activity in over 12 months. This is a significant maintenance concern, though expected for a feature tracking repository.

Top stale issues by upvotes:

| Issue | Title | Last Updated |
|-------|-------|--------------|
| [#399](https://github.com/temporalio/features/issues/399) (15 upvotes) | Custom Markers for Workflow History/Timeline | 2024-07-15 |
| [#229](https://github.com/temporalio/features/issues/229) (6 upvotes) | Auto heartbeating | 2023-02-17 |
| [#363](https://github.com/temporalio/features/issues/363) (4 upvotes) | Work around gRPC message size limit | 2024-12-20 |
| [#175](https://github.com/temporalio/features/issues/175) (3 upvotes) | End-to-end latency metric for cron | 2024-07-13 |
| [#98](https://github.com/temporalio/features/issues/98) (3 upvotes) | New metric: worker_task_slots_total | 2022-08-01 |

---

## Top Issues by Engagement

### Highest Upvoted Issues

| Rank | Issue | Title | Category |
|------|-------|-------|----------|
| 1 | [#399](https://github.com/temporalio/features/issues/399) (15 upvotes, 12 comments) | Custom Markers for Workflow History/Timeline | Observability |
| 2 | [#649](https://github.com/temporalio/features/issues/649) (14 upvotes, 4 comments) | Unit testing workflow versioning | Testing |
| 3 | [#118](https://github.com/temporalio/features/issues/118) (8 upvotes, 22 comments) | Declarative schedules: upsert, sync, terraform | Schedules |
| 4 | [#562](https://github.com/temporalio/features/issues/562) (7 upvotes, 6 comments) | Session support | Worker |
| 5 | [#434](https://github.com/temporalio/features/issues/434) (6 upvotes, 1 comment) | Serialization context for codecs/converters | Data Conversion |
| 6 | [#229](https://github.com/temporalio/features/issues/229) (6 upvotes) | Auto heartbeating | Activity |
| 7 | [#456](https://github.com/temporalio/features/issues/456) (5 upvotes, 2 comments) | Provide worker status | Worker |
| 8 | [#363](https://github.com/temporalio/features/issues/363) (4 upvotes) | Work around gRPC message size limit | Infrastructure |

### Highest Priority Score Issues

Priority = Upvotes x 2 + Comments

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#399](https://github.com/temporalio/features/issues/399) | 42 | Custom Markers for Workflow History/Timeline |
| 2 | [#118](https://github.com/temporalio/features/issues/118) | 38 | Declarative schedules |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 32 | Unit testing workflow versioning |
| 4 | [#558](https://github.com/temporalio/features/issues/558) | 27 | WorkflowIdConflictPolicy in child workflow |
| 5 | [#562](https://github.com/temporalio/features/issues/562) | 20 | Session support |
| 6 | [#443](https://github.com/temporalio/features/issues/443) | 17 | Activity task poll limit |

### Most Discussed Issues

| Rank | Issue | Comments | Title |
|------|-------|----------|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 22 | Declarative schedules |
| 2 | [#558](https://github.com/temporalio/features/issues/558) | 21 | WorkflowIdConflictPolicy in child workflow |
| 3 | [#443](https://github.com/temporalio/features/issues/443) | 17 | Activity task poll limit |
| 4 | [#51](https://github.com/temporalio/features/issues/51) | 13 | Standardize method for listing workflow queries |
| 5 | [#563](https://github.com/temporalio/features/issues/563) | 12 | Tag workflow_failed counter with exception type |

---

## Top Cross-SDK Feature Requests

### 1. Custom Markers for Workflow History/Timeline
**[#399](https://github.com/temporalio/features/issues/399)** | 15 upvotes | Priority: High

**Request:** Allow workflows to record custom `MarkerRecorded` events visible in the Temporal UI timeline without affecting workflow execution.

**Use Case:** Users want to mark pivotal decisions or events in workflow history for debugging and auditing purposes without using signals (which are not permitted for self-signaling).

**Status:** After internal discussion, the team decided against implementing this as markers due to concerns about history growth. Alternative approaches being considered:
- Metadata on task completion
- Metadata on specific commands
- State provided via query returning "notes" with event IDs

**Workaround:** Use queries to expose decision information, though this lacks visibility in the UI timeline.

---

### 2. Unit Testing Workflow Versioning
**[#649](https://github.com/temporalio/features/issues/649)** | 14 upvotes | Priority: High

**Request:** Enable unit testing of workflow version upgrades through the testing framework.

**Use Case:** Users cannot test version upgrade scenarios through unit tests - only integration testing is currently available. This is a 5-year-old request with ongoing community interest.

**Status:** No current solution. Users must rely on integration testing for version upgrades.

**Impact:** Core functionality gap affecting all SDKs, making it difficult to validate versioned workflow code safely.

---

### 3. Declarative Schedules (Terraform, YAML, etc.)
**[#118](https://github.com/temporalio/features/issues/118)** | 8 upvotes, 22 comments | Priority: High

**Request:** Support declarative schedule management through:
- Terraform provider for Temporal schedules
- YAML/JSON configuration files
- Annotations on workflow definitions
- SDK-provided upsert/sync mechanisms

**Use Case:** Infrastructure-as-code approach for schedule management, avoiding imperative API calls for stateful schedule configuration.

**Status:** Active discussion ongoing. The Temporal team is exploring Terraform provider support for namespace-specific workflow service items including schedules.

**Community Contribution:** A Nordstrom team offered to contribute Terraform provider functionality in 2024.

**Workaround:** Users implement custom `createOrUpdateSchedule` functions called on worker startup.

---

### 4. Session Support Across SDKs
**[#562](https://github.com/temporalio/features/issues/562)** | 7 upvotes | Priority: Medium

**Request:** Implement Go-style Sessions in other SDKs (originally requested for TypeScript).

**Use Case:** Worker-specific task queue affinity for workflows requiring activities to execute on the same worker (e.g., file processing with local state).

**Current Solution:** Worker-specific task queues pattern is available in all SDKs. The difference from native Sessions is concurrency control (max concurrent sessions vs. max concurrent activities per worker).

**Status:** This pattern is documented but requires significant user implementation for proper error handling, worker health monitoring, and load balancing.

---

### 5. Serialization Context for Codecs and Converters
**[#434](https://github.com/temporalio/features/issues/434)** | 6 upvotes | Priority: Medium

**Request:** Provide context (workflow ID, task queue, etc.) to payload codecs/converters for context-aware serialization.

**Use Case:** Sign payloads with workflow ID to protect against replay attacks.

**SDK Implementation Status:**

| SDK | Status |
|-----|--------|
| Java | Implemented |
| Python | Implemented |
| .NET | Implemented |
| Go | [#1352](https://github.com/temporalio/sdk-go/issues/1352) - Pending |
| TypeScript | [#1661](https://github.com/temporalio/sdk-typescript/issues/1661) - Pending |
| Ruby | [#238](https://github.com/temporalio/sdk-ruby/issues/238) - Pending |
| PHP | [#587](https://github.com/temporalio/sdk-php/issues/587) - Pending |

---

### 6. WorkflowIdConflictPolicy in Child Workflow Options
**[#558](https://github.com/temporalio/features/issues/558)** | 3 upvotes, 21 comments | Priority: Medium

**Request:** Support `WorkflowIdConflictPolicy` (specifically `USE_EXISTING`) for child workflows.

**Use Case:** DAG-based workloads where workflows need to atomically start and wait on other workflows without strict parent-child relationships.

**Status:** Complex technical challenges:
- Parent-child relationships affect lifecycle management (parent close policy, cancellation)
- `USE_EXISTING` would return a handle to a non-child workflow, breaking child workflow semantics
- Server work required: [temporalio/temporal#6799](https://github.com/temporalio/temporal/issues/6799)

**Recommended Alternative:** Use Nexus operations backed by workflows with conflict policy for cross-workflow coordination.

---

### 7. Auto Heartbeating
**[#229](https://github.com/temporalio/features/issues/229)** | 6 upvotes | Priority: Medium

**Request:** Automatic activity heartbeating to simplify long-running activity implementation.

**Status:** Stale since 2023. No recent activity.

---

## Feature Coverage Gaps by SDK

### Cross-SDK Tracking Issues

Several issues track per-SDK implementation status:

| Feature | Tracking Issue | SDKs Pending |
|---------|---------------|--------------|
| Serialization context | [#434](https://github.com/temporalio/features/issues/434) | Go, TS, Ruby, PHP |
| WorkflowIdConflictPolicy for children | [#558](https://github.com/temporalio/features/issues/558) | All (server-blocked) |
| Start delay in child workflow options | [#515](https://github.com/temporalio/features/issues/515) | Multiple |

---

## Test Infrastructure Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#712](https://github.com/temporalio/features/issues/712) | Build | Use pnpm when building TS worker from source |
| [#330](https://github.com/temporalio/features/issues/330) | Tests | Flaky child_workflow_cancel_panic test |
| [#315](https://github.com/temporalio/features/issues/315) | CI | Stale workflows in sdk-ci namespace |

---

## Bugs (6 Open Issues)

| Issue | SDK(s) | Description | Priority |
|-------|--------|-------------|----------|
| [#503](https://github.com/temporalio/features/issues/503) | Cross-SDK | Cancel and Signal should propagate to child workflows after termination | High (3 upvotes) |
| [#422](https://github.com/temporalio/features/issues/422) | Cross-SDK | Only RunActivity spans sent, incomplete span reporting | Medium |
| [#330](https://github.com/temporalio/features/issues/330) | Go | Flaky child_workflow_cancel_panic test | Low |
| [#315](https://github.com/temporalio/features/issues/315) | Infra | Stale workflows in sdk-ci namespace | Low |
| [#222](https://github.com/temporalio/features/issues/222) | Cross-SDK | workflow_completed/continue_as_new counters inconsistent | Low |
| [#182](https://github.com/temporalio/features/issues/182) | Docs | Document eventual consistency of list operations | Low |

---

## Observability and Metrics Requests

Multiple issues request standardized metrics across SDKs:

| Issue | Metric/Feature |
|-------|----------------|
| [#563](https://github.com/temporalio/features/issues/563) | Tag workflow_failed counter with exception type |
| [#175](https://github.com/temporalio/features/issues/175) | End-to-end latency metric for cron execution |
| [#98](https://github.com/temporalio/features/issues/98) | worker_task_slots_total metric |
| [#392](https://github.com/temporalio/features/issues/392) | temporal_worker_task_slots_tracking_replayer_cache metric |
| [#25](https://github.com/temporalio/features/issues/25) | Expose workflow_started_time metric |

---

## Worker Management Requests

| Issue | Feature | Description |
|-------|---------|-------------|
| [#456](https://github.com/temporalio/features/issues/456) | Worker status | Expose worker status information |
| [#443](https://github.com/temporalio/features/issues/443) | Poll limiting | Activity task poll limit control |
| [#573](https://github.com/temporalio/features/issues/573) | Cache control | Fine control for workflow cache eviction |
| [#715](https://github.com/temporalio/features/issues/715) | Metadata | Custom metadata support for workers in UI/CLI |

---

## Security Issues

5 open security issues related to dependency vulnerabilities (labeled `mend: dependency security vulnerability`).

---

## Housekeeping Recommendations

### Immediate Actions

1. **Triage stale high-value issues:** Review the 145 stale issues, prioritizing those with upvotes:
   - [#399](https://github.com/temporalio/features/issues/399) - Custom markers (15 upvotes, stale since 2024-07)
   - [#229](https://github.com/temporalio/features/issues/229) - Auto heartbeating (6 upvotes, stale since 2023-02)
   - [#98](https://github.com/temporalio/features/issues/98) - worker_task_slots_total (3 upvotes, stale since 2022-08)

2. **Close or update very old issues:** 87 issues (36%) are over 3 years old. Many may be obsolete or already addressed.

3. **Security vulnerabilities:** Address the 5 dependency security issues promptly.

### Medium-Term Recommendations

1. **Prioritize unit testing for versioning ([#649](https://github.com/temporalio/features/issues/649)):** This is a 5-year-old request affecting all SDK users. Versioning is a core Temporal feature that lacks proper test support.

2. **Declarative schedules ([#118](https://github.com/temporalio/features/issues/118)):** With Terraform provider interest from the community, this could be a valuable addition for DevOps workflows.

3. **Complete serialization context across SDKs ([#434](https://github.com/temporalio/features/issues/434)):** 4 SDKs (Go, TypeScript, Ruby, PHP) still need implementation.

4. **Document workarounds better:** Many issues have working solutions via Nexus or worker-specific task queues. Better documentation would reduce duplicate requests.

### Long-Term Roadmap Suggestions

1. **Cross-SDK feature parity dashboard:** Create a public dashboard showing feature implementation status across all SDKs.

2. **Standardize observability:** Align metrics and tracing across SDKs per the multiple requests in this repository.

3. **Worker lifecycle improvements:** Address the cluster of worker management requests (status, polling control, cache eviction).

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2025-12-22 | [#715](https://github.com/temporalio/features/issues/715) | Custom Metadata Support for Workers |
| 2025-12-18 | [#712](https://github.com/temporalio/features/issues/712) | Use pnpm when building TS worker |

---

## Summary

The Features repository serves a critical role in tracking cross-SDK feature parity. Key observations:

1. **Backlog is growing** (+23 net issues in 12 months), reflecting increasing demand for SDK feature standardization.

2. **High staleness** (59% of issues >12 months old) is partially expected but warrants systematic review.

3. **Top priorities by community demand:**
   - Custom markers for workflow history ([#399](https://github.com/temporalio/features/issues/399))
   - Unit testing versioning ([#649](https://github.com/temporalio/features/issues/649))
   - Declarative schedule management ([#118](https://github.com/temporalio/features/issues/118))

4. **Good progress** on serialization context ([#434](https://github.com/temporalio/features/issues/434)) with 4 SDKs complete.

5. **Complex technical challenges** around child workflow conflict policies ([#558](https://github.com/temporalio/features/issues/558)) - Nexus recommended as alternative.
