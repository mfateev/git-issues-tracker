# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** January 13, 2026
**Total Open Issues:** 244
**Total Closed Issues:** 138
**Repository:** [temporalio/features](https://github.com/temporalio/features)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md)

**SDKs:** [Java](java.md) . [Go](go.md) . [TypeScript](typescript.md) . [Python](python.md) . [.NET](dotnet.md) . [PHP](php.md) . [Ruby](ruby.md) . [Server](server.md)

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
| Feature Test Specs | 8 | Medium |
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
| 1-3 months | 8 | 3% |
| 3-6 months | 15 | 6% |
| 6-12 months | 35 | 14% |
| 1-2 years | 52 | 21% |
| 2-3 years | 45 | 18% |
| 3+ years | 87 | 36% |

**Average Age:** 807 days (over 2 years)

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

## Feature Coverage Gaps

### Missing Features by SDK

| SDK | Missing Features |
|-----|------------------|
| Go | Serialization context ([#1352](https://github.com/temporalio/sdk-go/issues/1352)), Dynamic display name for activities ([#383](https://github.com/temporalio/features/issues/383)) |
| TypeScript | Serialization context ([#1661](https://github.com/temporalio/sdk-typescript/issues/1661)), Nexus operation info exposure ([#674](https://github.com/temporalio/features/issues/674)) |
| Ruby | Serialization context ([#238](https://github.com/temporalio/sdk-ruby/issues/238)), Features repo support ([#585](https://github.com/temporalio/features/issues/585)) |
| PHP | Serialization context ([#587](https://github.com/temporalio/sdk-php/issues/587)) |

### Cross-SDK Feature Requests

Features requested for implementation across all SDKs:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#434](https://github.com/temporalio/features/issues/434) | Serialization context | Context-aware payload encoding (4/7 SDKs done) |
| [#558](https://github.com/temporalio/features/issues/558) | Child workflow conflict policy | USE_EXISTING for child workflows |
| [#515](https://github.com/temporalio/features/issues/515) | Start delay in child workflows | Expose start delay option |
| [#562](https://github.com/temporalio/features/issues/562) | Session support | Go-style sessions across SDKs |
| [#503](https://github.com/temporalio/features/issues/503) | Cancel/Signal propagation | Propagate to children on ABANDON |

---

## Nexus Integration

Nexus cross-namespace operations represent a significant area of ongoing development with 8 open issues:

| Issue | Description | Priority |
|-------|-------------|----------|
| [#609](https://github.com/temporalio/features/issues/609) | Initial Nexus implementation tracking | High |
| [#678](https://github.com/temporalio/features/issues/678) | Nexus serialization context for codecs | Medium |
| [#673](https://github.com/temporalio/features/issues/673) | SDKs should expose Nexus request deadline | Medium |
| [#674](https://github.com/temporalio/features/issues/674) | Expose Temporal Nexus operation info to handlers | Medium |
| [#664](https://github.com/temporalio/features/issues/664) | Nexus samples and docs for sync operations | Low |
| [#658](https://github.com/temporalio/features/issues/658) | Nexus operation testing environment | Medium |
| [#610](https://github.com/temporalio/features/issues/610) | Add summary to Nexus operation | Low |
| [#692](https://github.com/temporalio/features/issues/692) | Nexus samples should not encourage request ID usage | Low |

---

## Test Infrastructure Issues

### Feature Test Specifications (8 open)

| Issue | Feature | Description |
|-------|---------|-------------|
| [#160](https://github.com/temporalio/features/issues/160) | Workflow only worker | Spec tests for workflow-only workers |
| [#155](https://github.com/temporalio/features/issues/155) | Failure Converter | Spec tests for failure conversion |
| [#153](https://github.com/temporalio/features/issues/153) | Schedule API | Spec tests for Schedule API features |
| [#133](https://github.com/temporalio/features/issues/133) | Workflow handles | Spec tests for different run ID types |
| [#80](https://github.com/temporalio/features/issues/80) | Continue as new | Spec tests for continue_as_new |
| [#79](https://github.com/temporalio/features/issues/79) | Child workflows | Spec tests for child_workflow features |
| [#78](https://github.com/temporalio/features/issues/78) | Signals | Spec tests for signal features |
| [#77](https://github.com/temporalio/features/issues/77) | Activities | Spec tests for activity features |

### Infrastructure and Tooling

| Issue | Area | Description |
|-------|------|-------------|
| [#649](https://github.com/temporalio/features/issues/649) | Versioning | Add support for unit testing workflow versioning |
| [#598](https://github.com/temporalio/features/issues/598) | Replay | Research testing for history incompatibilities |
| [#551](https://github.com/temporalio/features/issues/551) | Time-skipping | Update should auto-skip time in time-skipping mode |
| [#472](https://github.com/temporalio/features/issues/472) | Failure detection | Fail tests on workflow task failures |
| [#470](https://github.com/temporalio/features/issues/470) | Process management | Ensure dev-server processes properly shut down |
| [#712](https://github.com/temporalio/features/issues/712) | Build | Use pnpm when building TS worker from source |
| [#353](https://github.com/temporalio/features/issues/353) | Configuration | Make client options configurable in harness |
| [#279](https://github.com/temporalio/features/issues/279) | History checker | Add exact mode to history validation |
| [#150](https://github.com/temporalio/features/issues/150) | Nightly CI | Nightly CI against server and SDK master branches |

---

## Bugs (6 Open Issues)

| Issue | Severity | Area | Description |
|-------|----------|------|-------------|
| [#503](https://github.com/temporalio/features/issues/503) | High | Child Workflows | Cancel/Signal should propagate on ABANDON policy (3 upvotes) |
| [#422](https://github.com/temporalio/features/issues/422) | Medium | Tracing | Incomplete span reporting - only RunActivity spans |
| [#330](https://github.com/temporalio/features/issues/330) | Medium | Flaky Test | bugs/go/child_workflow_cancel_panic test is flaky |
| [#315](https://github.com/temporalio/features/issues/315) | Medium | Infrastructure | Stale workflows in sdk-ci namespace |
| [#222](https://github.com/temporalio/features/issues/222) | Medium | Metrics | workflow_completed counter inconsistency |
| [#182](https://github.com/temporalio/features/issues/182) | Low | Documentation | Document eventual consistency of list calls |

---

## Security Vulnerabilities (5 Open Issues)

| Issue | Package | Severity | Age |
|-------|---------|----------|-----|
| [#384](https://github.com/temporalio/features/issues/384) | logback-classic-1.2.9.jar | 7.5 (High) | 13 months |
| [#366](https://github.com/temporalio/features/issues/366) | xunit.assert.2.5.3.nupkg | 7.5 (High) | 14 months |
| [#288](https://github.com/temporalio/features/issues/288) | guava-31.1-jre.jar | 7.1 (High) | 19 months |
| [#254](https://github.com/temporalio/features/issues/254) | json-path-2.6.0.jar | 7.5 (High) | 22 months |
| [#116](https://github.com/temporalio/features/issues/116) | uber-go/tally/v4 | 7.5 (High) | 29 months |

These dependency security vulnerabilities flagged by Mend should be prioritized for remediation.

---

## Activity and Workflow Features

### Activity-Related Requests

| Issue | Area | Description |
|-------|------|-------------|
| [#562](https://github.com/temporalio/features/issues/562) | Sessions | Session support across SDKs (7 upvotes) |
| [#229](https://github.com/temporalio/features/issues/229) | Heartbeat | Auto heartbeating for long-running activities (6 upvotes) |
| [#706](https://github.com/temporalio/features/issues/706) | Execution | Support non-workflow activities |
| [#702](https://github.com/temporalio/features/issues/702) | Metrics | activity_fail_endtoend_latency metric |
| [#677](https://github.com/temporalio/features/issues/677) | Idempotency | Idempotency token for activities |
| [#463](https://github.com/temporalio/features/issues/463) | Logging | Customize activity failure logging (2 upvotes) |
| [#203](https://github.com/temporalio/features/issues/203) | Client | Provide client from activity context |

### Workflow-Related Requests

| Issue | Area | Description |
|-------|------|-------------|
| [#399](https://github.com/temporalio/features/issues/399) | History | Custom markers for workflow history/timeline (15 upvotes) |
| [#558](https://github.com/temporalio/features/issues/558) | Child | Add WorkflowIdConflictPolicy in child workflow options (3 upvotes) |
| [#515](https://github.com/temporalio/features/issues/515) | Child | Expose start delay in child workflow options (3 upvotes) |
| [#434](https://github.com/temporalio/features/issues/434) | Serialization | Serialization context for codecs and converters (6 upvotes) |
| [#596](https://github.com/temporalio/features/issues/596) | Cancel | Expose workflow cancel cause/reason |
| [#571](https://github.com/temporalio/features/issues/571) | Context | Concept of "workflow local" value |
| [#705](https://github.com/temporalio/features/issues/705) | History | Warn if SDK detects large workflow history |
| [#701](https://github.com/temporalio/features/issues/701) | Payload | Warn if SDK tries to send oversized payload |

---

## Observability and Metrics Requests

Multiple issues request standardized metrics across SDKs:

| Issue | Metric/Feature |
|-------|----------------|
| [#563](https://github.com/temporalio/features/issues/563) | Tag workflow_failed counter with exception type (12 comments) |
| [#175](https://github.com/temporalio/features/issues/175) | End-to-end latency metric for cron execution (3 upvotes) |
| [#98](https://github.com/temporalio/features/issues/98) | worker_task_slots_total metric (3 upvotes) |
| [#392](https://github.com/temporalio/features/issues/392) | temporal_worker_task_slots_tracking_replayer_cache metric |
| [#25](https://github.com/temporalio/features/issues/25) | Expose workflow_started_time metric (2 upvotes) |
| [#702](https://github.com/temporalio/features/issues/702) | activity_fail_endtoend_latency metric |
| [#607](https://github.com/temporalio/features/issues/607) | Standardize metrics across SDK languages |
| [#666](https://github.com/temporalio/features/issues/666) | Add BadScheduleActivityAttributes to workflow_task_execution_failed |

---

## Worker Management Requests

| Issue | Feature | Description |
|-------|---------|-------------|
| [#715](https://github.com/temporalio/features/issues/715) | Metadata | Custom metadata support for workers in UI/CLI |
| [#696](https://github.com/temporalio/features/issues/696) | Heartbeating | Worker heartbeating |
| [#694](https://github.com/temporalio/features/issues/694) | Deployment | Override Worker Deployment Version for child workflows |
| [#456](https://github.com/temporalio/features/issues/456) | Status | Expose worker status information (5 upvotes) |
| [#443](https://github.com/temporalio/features/issues/443) | Poll limiting | Activity task poll limit control (17 comments) |
| [#573](https://github.com/temporalio/features/issues/573) | Cache control | Fine control for workflow cache eviction |
| [#334](https://github.com/temporalio/features/issues/334) | Auto-tuning | Worker slot and polling auto-tuning |
| [#624](https://github.com/temporalio/features/issues/624) | Error handling | Gracefully fail gRPC-message-too-large issues (2 upvotes) |

---

## Recently Completed

### Closed in Last 60 Days

| Issue | Closed | Title |
|-------|--------|-------|
| [#691](https://github.com/temporalio/features/issues/691) | 2026-01-09 | Deployment feature tests failing in Go docker build |
| [#687](https://github.com/temporalio/features/issues/687) | 2026-01-05 | Assume TLS enabled if API key provided in SDKs |
| [#400](https://github.com/temporalio/features/issues/400) | 2026-01-02 | Workflow-init support |
| [#695](https://github.com/temporalio/features/issues/695) | 2025-12-02 | Set GrpcMessageTooLarge as failure_reason for workflow task failed metric |
| [#682](https://github.com/temporalio/features/issues/682) | 2025-11-21 | Remove fetchResult and fetchInfo from Nexus SDKs |
| [#703](https://github.com/temporalio/features/issues/703) | 2025-11-20 | Support setting of Temporal Headers through CLI/GUI |

### Popular Completed Features

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#231](https://github.com/temporalio/features/issues/231) | 9 | Tag workflow_task_execution_failed with failure type |
| [#426](https://github.com/temporalio/features/issues/426) | 4 | API key client option |
| [#141](https://github.com/temporalio/features/issues/141) | 4 | User metadata |
| [#117](https://github.com/temporalio/features/issues/117) | 4 | Upsert TemporalChangeVersion on patch |

---

## Housekeeping Recommendations

### Immediate Actions

1. **Address security vulnerabilities:** 5 dependency security issues flagged by Mend, all with severity >= 7.1:
   - [#384](https://github.com/temporalio/features/issues/384) - logback-classic (7.5)
   - [#366](https://github.com/temporalio/features/issues/366) - xunit.assert (7.5)
   - [#288](https://github.com/temporalio/features/issues/288) - guava (7.1)
   - [#254](https://github.com/temporalio/features/issues/254) - json-path (7.5)
   - [#116](https://github.com/temporalio/features/issues/116) - uber-go/tally (7.5)

2. **Triage stale high-value issues:** Review the 145 stale issues, prioritizing those with upvotes:
   - [#399](https://github.com/temporalio/features/issues/399) - Custom markers (15 upvotes, stale since 2024-07)
   - [#229](https://github.com/temporalio/features/issues/229) - Auto heartbeating (6 upvotes, stale since 2023-02)
   - [#98](https://github.com/temporalio/features/issues/98) - worker_task_slots_total (3 upvotes, stale since 2022-08)

3. **Close or update very old issues:** 87 issues (36%) are over 3 years old. Many may be obsolete or already addressed.

### Medium-Term Recommendations

1. **Prioritize unit testing for versioning ([#649](https://github.com/temporalio/features/issues/649)):** This is a 5-year-old request affecting all SDK users. Versioning is a core Temporal feature that lacks proper test support.

2. **Declarative schedules ([#118](https://github.com/temporalio/features/issues/118)):** With Terraform provider interest from the community, this could be a valuable addition for DevOps workflows.

3. **Complete serialization context across SDKs ([#434](https://github.com/temporalio/features/issues/434)):** 4 SDKs (Go, TypeScript, Ruby, PHP) still need implementation.

4. **Complete Nexus integration:** 8 open Nexus-related issues need coordination across SDKs. Focus on:
   - Serialization context ([#678](https://github.com/temporalio/features/issues/678))
   - Testing environments ([#658](https://github.com/temporalio/features/issues/658))
   - Request deadline exposure ([#673](https://github.com/temporalio/features/issues/673))

5. **Document workarounds better:** Many issues have working solutions via Nexus or worker-specific task queues. Better documentation would reduce duplicate requests.

### Long-Term Roadmap Suggestions

1. **Cross-SDK feature parity dashboard:** Create a public dashboard showing feature implementation status across all SDKs.

2. **Standardize observability:** Align metrics and tracing across SDKs per the multiple requests in this repository.

3. **Worker lifecycle improvements:** Address the cluster of worker management requests (status, polling control, cache eviction).

4. **Complete feature test specifications:** 8 core feature areas ([#77](https://github.com/temporalio/features/issues/77)-[#80](https://github.com/temporalio/features/issues/80), [#133](https://github.com/temporalio/features/issues/133), [#153](https://github.com/temporalio/features/issues/153), [#155](https://github.com/temporalio/features/issues/155), [#160](https://github.com/temporalio/features/issues/160)) need spec tests for conformance validation.

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

4. **Good progress** on serialization context ([#434](https://github.com/temporalio/features/issues/434)) with 3 SDKs complete (Java, Python, .NET), 4 pending.

5. **Nexus integration** is an active area with 8 open issues requiring cross-SDK coordination.

6. **Security vulnerabilities** need immediate attention - 5 issues all with severity >= 7.1.

7. **Complex technical challenges** around child workflow conflict policies ([#558](https://github.com/temporalio/features/issues/558)) - Nexus recommended as alternative.

8. **Feature test specs** for 8 core areas remain open, limiting conformance testing capabilities.
