# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** 2026-04-04
**Total Open Issues:** 254
**Total Closed Issues:** 151
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

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
| Cross-SDK Feature Requests | 236 | High - SDK parity |
| Feature Test Specs | 8 | Medium |
| Bugs | 5 | High |
| Security Vulnerabilities | 5 | High |
| Documentation | 1 | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 117 |
| Total Comments | 404 |
| Issues with Upvotes | 33 (13%) |
| Issues with Comments | 130 (51%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 37% (151/405) |
| Median Time to Close | 129 days calendar / 91 days business |
| Average Time to Close | 271 days calendar / 194 days business |
| 90th Percentile | 818 days |
| Resolved within 30 days | 32% |
| Resolved within 90 days | 46% |

The low resolution rate (37%) is expected for this repository -- it primarily tracks cross-SDK feature requests that require coordinated implementation across 8+ SDKs.

### Closure Reasons (Inferred)

| Reason | Count | % |
|--------|-------|---|
| Completed (features) | 80 | 53% |
| Self-resolved | 25 | 17% |
| Fixed (bugs) | 8 | 5% |
| Duplicate | 1 | 1% |
| Other/Unknown | 37 | 25% |

---

## Issue Velocity (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 68 | 44 | +24 |

📈 **Backlog Growing:** The features backlog is expanding with 24 more issues opened than closed. This reflects increasing demand for cross-SDK feature parity as Temporal's user base grows. January 2026 was a particularly active month with 10 new issues opened.

### Monthly Breakdown

| Month | Opened | Closed | Net |
|-------|--------|--------|-----|
| 2025-05 | 1 | 4 | -3 |
| 2025-06 | 7 | 4 | +3 |
| 2025-07 | 6 | 6 | 0 |
| 2025-08 | 7 | 1 | +6 |
| 2025-09 | 5 | 4 | +1 |
| 2025-10 | 10 | 6 | +4 |
| 2025-11 | 5 | 2 | +3 |
| 2025-12 | 4 | 1 | +3 |
| 2026-01 | 10 | 3 | +7 |
| 2026-02 | 7 | 8 | -1 |
| 2026-03 | 6 | 5 | +1 |

---

## Issue Health

### Age Distribution (Open Issues)

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 5 | 2% |
| 1-3 months | 9 | 4% |
| 3-6 months | 10 | 4% |
| 6-12 months | 28 | 11% |
| 1-2 years | 60 | 24% |
| 2-3 years | 45 | 18% |
| 3+ years | 97 | 38% |

**Average Age:** 844 days (over 2 years)

The high average age reflects that many feature requests require significant cross-SDK coordination and are tracked long-term rather than implemented quickly.

### Stale Issues

**166 issues (65%)** have had no activity in over 12 months. This is a significant maintenance concern, though partially expected for a feature tracking repository.

Top stale issues by upvotes:

| Issue | Title | Last Updated |
|-------|-------|--------------|
| [#399](https://github.com/temporalio/features/issues/399) (15 upvotes) | Custom Markers for Workflow History/Timeline | 2024-07-15 |
| [#363](https://github.com/temporalio/features/issues/363) (4 upvotes) | Work around gRPC message size limit | 2024-12-20 |
| [#175](https://github.com/temporalio/features/issues/175) (3 upvotes) | End-to-end latency metric for cron | 2024-07-13 |
| [#98](https://github.com/temporalio/features/issues/98) (3 upvotes) | New metric: worker_task_slots_total | 2022-08-01 |
| [#463](https://github.com/temporalio/features/issues/463) (2 upvotes) | Customize activity failure logging | 2024-11-13 |

---

## Top Issues by Engagement

### Highest Upvoted Issues

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 17 | 23 | Declarative schedules: upsert, sync, terraform |
| 2 | [#399](https://github.com/temporalio/features/issues/399) | 15 | 12 | Custom Markers for Workflow History/Timeline |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 14 | 4 | Add support for unit testing workflow versioning |
| 4 | [#562](https://github.com/temporalio/features/issues/562) | 7 | 6 | Session support |
| 5 | [#434](https://github.com/temporalio/features/issues/434) | 6 | 1 | Serialization context for codecs/converters |
| 6 | [#229](https://github.com/temporalio/features/issues/229) | 6 | 2 | Auto heartbeating |
| 7 | [#456](https://github.com/temporalio/features/issues/456) | 5 | 4 | Provide worker status |
| 8 | [#363](https://github.com/temporalio/features/issues/363) | 4 | 0 | Work around gRPC message size limit |

### Highest Priority Score Issues

Priority = Upvotes x 2 + Comments

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 57 | Declarative schedules |
| 2 | [#399](https://github.com/temporalio/features/issues/399) | 42 | Custom Markers for Workflow History/Timeline |
| 3 | [#649](https://github.com/temporalio/features/issues/649) | 32 | Unit testing workflow versioning |
| 4 | [#558](https://github.com/temporalio/features/issues/558) | 27 | WorkflowIdConflictPolicy in child workflow |
| 5 | [#562](https://github.com/temporalio/features/issues/562) | 20 | Session support |
| 6 | [#443](https://github.com/temporalio/features/issues/443) | 17 | Activity task poll limit |
| 7 | [#456](https://github.com/temporalio/features/issues/456) | 14 | Provide worker status |
| 8 | [#229](https://github.com/temporalio/features/issues/229) | 14 | Auto heartbeating |

### Most Discussed Issues

| Rank | Issue | 💬 | Title |
|------|-------|-----|-------|
| 1 | [#118](https://github.com/temporalio/features/issues/118) | 23 | Declarative schedules |
| 2 | [#558](https://github.com/temporalio/features/issues/558) | 21 | WorkflowIdConflictPolicy in child workflow |
| 3 | [#443](https://github.com/temporalio/features/issues/443) | 17 | Activity task poll limit |
| 4 | [#51](https://github.com/temporalio/features/issues/51) | 13 | Standardize method for listing workflow queries |
| 5 | [#563](https://github.com/temporalio/features/issues/563) | 12 | Tag workflow_failed counter with exception type |
| 6 | [#399](https://github.com/temporalio/features/issues/399) | 12 | Custom Markers for Workflow History/Timeline |
| 7 | [#257](https://github.com/temporalio/features/issues/257) | 12 | Update API: support not writing history when calling external workflow |

---

## Top Cross-SDK Feature Requests

### 1. Declarative Schedules (Terraform, YAML, etc.)
**[#118](https://github.com/temporalio/features/issues/118)** | 17 upvotes, 23 comments | Priority: High

**Request:** Support declarative schedule management through Terraform provider, YAML/JSON config, annotations on workflow definitions, and SDK-provided upsert/sync mechanisms.

**Use Case:** Infrastructure-as-code approach for schedule management, avoiding imperative API calls for stateful schedule configuration.

**Status:** Active discussion ongoing. The Temporal team is exploring Terraform provider support. A Nordstrom team offered to contribute Terraform provider functionality with a detailed design proposal in 2024.

---

### 2. Custom Markers for Workflow History/Timeline
**[#399](https://github.com/temporalio/features/issues/399)** | 15 upvotes, 12 comments | Priority: High

**Request:** Allow workflows to record custom `MarkerRecorded` events visible in the Temporal UI timeline without affecting workflow execution.

**Status:** After internal discussion, the team decided against implementing this as markers due to concerns about history growth. Alternative approaches being considered.

---

### 3. Unit Testing Workflow Versioning
**[#649](https://github.com/temporalio/features/issues/649)** | 14 upvotes, 4 comments | Priority: High

**Request:** Enable unit testing of workflow version upgrades through the testing framework.

**Impact:** Core functionality gap affecting all SDK users. Versioning is a core Temporal feature that lacks proper test support.

---

### 4. Session Support Across SDKs
**[#562](https://github.com/temporalio/features/issues/562)** | 7 upvotes, 6 comments | Priority: Medium

**Request:** Implement Go-style Sessions in other SDKs for worker-specific task queue affinity.

---

### 5. Serialization Context for Codecs and Converters
**[#434](https://github.com/temporalio/features/issues/434)** | 6 upvotes | Priority: Medium

**Request:** Provide context (workflow ID, task queue, etc.) to payload codecs/converters for context-aware serialization.

**SDK Implementation Status:**

| SDK | Status |
|-----|--------|
| Java | Implemented |
| Python | Implemented |
| .NET | Implemented |
| Go | Pending |
| TypeScript | Pending |
| Ruby | Pending |
| PHP | Pending |

---

## Feature Coverage Gaps

### Missing Features by SDK

| SDK | Missing Features |
|-----|------------------|
| Go | Serialization context, Dynamic display name for activities |
| TypeScript | Serialization context, Nexus operation info exposure |
| Ruby | Serialization context, Features repo support ([#585](https://github.com/temporalio/features/issues/585)) |
| PHP | Serialization context |

### Cross-SDK Feature Requests

Features requested for implementation across all SDKs:

| Issue | Feature | Description |
|-------|---------|-------------|
| [#434](https://github.com/temporalio/features/issues/434) | Serialization context | Context-aware payload encoding (3/7 SDKs done) |
| [#558](https://github.com/temporalio/features/issues/558) | Child workflow conflict policy | USE_EXISTING for child workflows |
| [#515](https://github.com/temporalio/features/issues/515) | Start delay in child workflows | Expose start delay option |
| [#562](https://github.com/temporalio/features/issues/562) | Session support | Go-style sessions across SDKs |
| [#503](https://github.com/temporalio/features/issues/503) | Cancel/Signal propagation | Propagate to children on ABANDON |
| [#591](https://github.com/temporalio/features/issues/591) | Uniformize patched() API | Consistent patched API across all SDKs |
| [#603](https://github.com/temporalio/features/issues/603) | RawValue support | Non-converted payload handling |

---

## Nexus Integration

Nexus cross-namespace operations represent a significant area of ongoing development with multiple open issues:

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

## Versioning and Deployment

Recent issues show active development around worker versioning and deployment features:

| Issue | Description | Status |
|-------|-------------|--------|
| [#738](https://github.com/temporalio/features/issues/738) | Expose upgrade on continue as new in SDKs | Closed |
| [#726](https://github.com/temporalio/features/issues/726) | Deployment client / Operator API Support | Open |
| [#729](https://github.com/temporalio/features/issues/729) | Worker-deployment-related poll failure ergonomics | Open |
| [#694](https://github.com/temporalio/features/issues/694) | Allow overriding Worker Deployment Version for child workflows | Open |
| [#744](https://github.com/temporalio/features/issues/744) | Remove experimental markers from versioning APIs | Closed |
| [#745](https://github.com/temporalio/features/issues/745) | Deprecate then remove old versioning client calls | Closed |

The closure of [#744](https://github.com/temporalio/features/issues/744), [#745](https://github.com/temporalio/features/issues/745), and [#738](https://github.com/temporalio/features/issues/738) signals that versioning APIs are maturing toward general availability.

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
| [#613](https://github.com/temporalio/features/issues/613) | Patching | Explore ways of testing pre-patched code |
| [#551](https://github.com/temporalio/features/issues/551) | Time-skipping | Update should auto-skip time in time-skipping mode |
| [#472](https://github.com/temporalio/features/issues/472) | Failure detection | Fail tests on workflow task failures |
| [#470](https://github.com/temporalio/features/issues/470) | Process management | Ensure dev-server processes properly shut down |

---

## Bugs (5 Open Issues)

| Issue | Severity | Area | Description |
|-------|----------|------|-------------|
| [#503](https://github.com/temporalio/features/issues/503) | High | Child Workflows | Cancel/Signal should propagate on ABANDON policy (3 upvotes) |
| [#422](https://github.com/temporalio/features/issues/422) | Medium | Tracing | Incomplete span reporting -- only RunActivity spans |
| [#330](https://github.com/temporalio/features/issues/330) | Medium | Flaky Test | bugs/go/child_workflow_cancel_panic test is flaky |
| [#315](https://github.com/temporalio/features/issues/315) | Medium | Infrastructure | Stale workflows in sdk-ci namespace |
| [#182](https://github.com/temporalio/features/issues/182) | Low | Documentation | Document eventual consistency of list calls |

---

## Security Vulnerabilities (5 Open Issues)

| Issue | Package | Severity | Age |
|-------|---------|----------|-----|
| [#384](https://github.com/temporalio/features/issues/384) | logback-classic-1.2.9.jar | 7.5 (High) | 14+ months |
| [#366](https://github.com/temporalio/features/issues/366) | xunit.assert.2.5.3.nupkg | 7.5 (High) | 15+ months |
| [#288](https://github.com/temporalio/features/issues/288) | guava-31.1-jre.jar | 7.1 (High) | 20+ months |
| [#254](https://github.com/temporalio/features/issues/254) | json-path-2.6.0.jar | 7.5 (High) | 23+ months |
| [#116](https://github.com/temporalio/features/issues/116) | uber-go/tally/v4 | 7.5 (High) | 30+ months |

These dependency security vulnerabilities flagged by Mend should be prioritized for remediation.

---

## Activity and Workflow Features

### Activity-Related Requests

| Issue | Area | Description |
|-------|------|-------------|
| [#562](https://github.com/temporalio/features/issues/562) | Sessions | Session support across SDKs (7 upvotes) |
| [#229](https://github.com/temporalio/features/issues/229) | Heartbeat | Auto heartbeating for long-running activities (6 upvotes) |
| [#443](https://github.com/temporalio/features/issues/443) | Poll Limit | Activity task poll limit (17 comments) |
| [#706](https://github.com/temporalio/features/issues/706) | Standalone | Support standalone activities |
| [#740](https://github.com/temporalio/features/issues/740) | Samples | Samples for standalone activities |
| [#702](https://github.com/temporalio/features/issues/702) | Metrics | activity_fail_endtoend_latency metric |
| [#463](https://github.com/temporalio/features/issues/463) | Logging | Customize activity failure logging (2 upvotes) |
| [#633](https://github.com/temporalio/features/issues/633) | Heartbeat | Treat activity start as the first heartbeat time |
| [#620](https://github.com/temporalio/features/issues/620) | Reset | SDK support for activity reset |

### Workflow-Related Requests

| Issue | Area | Description |
|-------|------|-------------|
| [#399](https://github.com/temporalio/features/issues/399) | History | Custom markers for workflow history/timeline (15 upvotes) |
| [#558](https://github.com/temporalio/features/issues/558) | Child | Add WorkflowIdConflictPolicy in child workflow options (3 upvotes) |
| [#515](https://github.com/temporalio/features/issues/515) | Child | Expose start delay in child workflow options (3 upvotes) |
| [#434](https://github.com/temporalio/features/issues/434) | Serialization | Serialization context for codecs and converters (6 upvotes) |
| [#705](https://github.com/temporalio/features/issues/705) | History | Warn if SDK detects large workflow history |
| [#723](https://github.com/temporalio/features/issues/723) | Payload | SDK should fail workflow task if payloads size too large |
| [#632](https://github.com/temporalio/features/issues/632) | Execution | Add StartDelay to ContinueAsNewOptions |
| [#596](https://github.com/temporalio/features/issues/596) | Cancellation | Expose workflow cancel cause/reason |
| [#765](https://github.com/temporalio/features/issues/765) | Storage | External Payload Storage Foundation |
| [#783](https://github.com/temporalio/features/issues/783) | Storage | S3 External Storage Driver |
| [#782](https://github.com/temporalio/features/issues/782) | Payload | Allow payload visitors to visit memo payloads in aggregate |
| [#772](https://github.com/temporalio/features/issues/772) | Payload | Enable concurrent payload visiting |

---

## Observability and Metrics Requests

Multiple issues request standardized metrics across SDKs:

| Issue | Metric/Feature |
|-------|----------------|
| [#563](https://github.com/temporalio/features/issues/563) | Tag workflow_failed counter with exception type (12 comments) |
| [#607](https://github.com/temporalio/features/issues/607) | Standardize metrics across SDK languages |
| [#175](https://github.com/temporalio/features/issues/175) | End-to-end latency metric for cron execution (3 upvotes) |
| [#98](https://github.com/temporalio/features/issues/98) | worker_task_slots_total metric (3 upvotes) |
| [#25](https://github.com/temporalio/features/issues/25) | Expose workflow_started_time metric (2 upvotes) |
| [#702](https://github.com/temporalio/features/issues/702) | activity_fail_endtoend_latency metric |
| [#666](https://github.com/temporalio/features/issues/666) | Add BadScheduleActivityAttributes failure_reason to metric |
| [#634](https://github.com/temporalio/features/issues/634) | Add UnhandledCommand failure_reason to metric |
| [#636](https://github.com/temporalio/features/issues/636) | Add task_queue information to long_request_latency |
| [#670](https://github.com/temporalio/features/issues/670) | Reclassify benign application errors in OpenTelemetry |
| [#592](https://github.com/temporalio/features/issues/592) | Add temporalNamespace tag to all tracing spans |

---

## Worker Management Requests

| Issue | Feature | Description |
|-------|---------|-------------|
| [#715](https://github.com/temporalio/features/issues/715) | Metadata | Custom metadata support for workers in UI/CLI |
| [#696](https://github.com/temporalio/features/issues/696) | Heartbeating | Worker heartbeating (2 upvotes) |
| [#729](https://github.com/temporalio/features/issues/729) | Deployment | Worker-deployment-related poll failure ergonomics |
| [#726](https://github.com/temporalio/features/issues/726) | Operator API | Deployment client / Operator API Support |
| [#456](https://github.com/temporalio/features/issues/456) | Status | Expose worker status information (5 upvotes) |
| [#443](https://github.com/temporalio/features/issues/443) | Poll limiting | Activity task poll limit control (17 comments) |
| [#624](https://github.com/temporalio/features/issues/624) | Error handling | Gracefully fail gRPC-message-too-large issues (2 upvotes) |
| [#573](https://github.com/temporalio/features/issues/573) | Cache control | Fine control for workflow cache eviction |

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-03-24 | [#783](https://github.com/temporalio/features/issues/783) | S3 External Storage Driver |
| 2026-03-24 | [#782](https://github.com/temporalio/features/issues/782) | Allow payload visitors to visit memo payloads in aggregate |
| 2026-03-19 | [#778](https://github.com/temporalio/features/issues/778) | Envconfig - no user config dir should be acceptable |
| 2026-03-16 | [#777](https://github.com/temporalio/features/issues/777) | Support conflict token retry loop for schedule updates |
| 2026-03-10 | [#772](https://github.com/temporalio/features/issues/772) | Enable concurrent payload visiting |

---

## Housekeeping Recommendations

### Immediate Actions

1. **Address security vulnerabilities:** 5 dependency security issues flagged by Mend, all with severity >= 7.1:
   - [#384](https://github.com/temporalio/features/issues/384) - logback-classic (7.5)
   - [#366](https://github.com/temporalio/features/issues/366) - xunit.assert (7.5)
   - [#288](https://github.com/temporalio/features/issues/288) - guava (7.1)
   - [#254](https://github.com/temporalio/features/issues/254) - json-path (7.5)
   - [#116](https://github.com/temporalio/features/issues/116) - uber-go/tally (7.5)

2. **Triage stale high-value issues:** Review the 166 stale issues, prioritizing those with upvotes:
   - [#399](https://github.com/temporalio/features/issues/399) - Custom markers (15 upvotes, stale since 2024-07)
   - [#98](https://github.com/temporalio/features/issues/98) - worker_task_slots_total (3 upvotes, stale since 2022-08)

3. **Close or update very old issues:** 97 issues (38%) are over 3 years old. Many may be obsolete or already addressed.

### Medium-Term Recommendations

1. **Prioritize unit testing for versioning ([#649](https://github.com/temporalio/features/issues/649)):** This is a highly requested feature affecting all SDK users. Versioning is a core Temporal feature that lacks proper test support.

2. **Declarative schedules ([#118](https://github.com/temporalio/features/issues/118)):** With Terraform provider interest from the community, this could be a valuable addition for DevOps workflows.

3. **Complete serialization context across SDKs ([#434](https://github.com/temporalio/features/issues/434)):** 4 SDKs (Go, TypeScript, Ruby, PHP) still need implementation.

4. **Complete Nexus integration:** Multiple open Nexus-related issues need coordination across SDKs. Focus on:
   - Serialization context ([#678](https://github.com/temporalio/features/issues/678))
   - Testing environments ([#658](https://github.com/temporalio/features/issues/658))
   - Request deadline exposure ([#673](https://github.com/temporalio/features/issues/673))

5. **Standardize metrics across SDKs ([#607](https://github.com/temporalio/features/issues/607)):** The growing cluster of metrics-related issues (11 open) signals a need for a coordinated cross-SDK metrics alignment effort.

6. **Advance versioning/deployment features:** With experimental markers removed and old APIs deprecated, ensure all SDKs are ready for versioning GA. Open items include operator API support ([#726](https://github.com/temporalio/features/issues/726)) and deployment poll failure ergonomics ([#729](https://github.com/temporalio/features/issues/729)).

7. **External payload storage:** New issues ([#765](https://github.com/temporalio/features/issues/765), [#783](https://github.com/temporalio/features/issues/783)) indicate work on external payload storage foundation and S3 driver, which could address gRPC message size limitations ([#363](https://github.com/temporalio/features/issues/363)).

### Long-Term Roadmap Suggestions

1. **Cross-SDK feature parity dashboard:** Create a public dashboard showing feature implementation status across all SDKs.

2. **Standardize observability:** Align metrics and tracing across SDKs per the multiple requests in this repository.

3. **Worker lifecycle improvements:** Address the cluster of worker management requests (status, polling control, cache eviction, heartbeating).

4. **Complete feature test specifications:** 8 core feature areas need spec tests for conformance validation.

5. **Document workarounds better:** Many issues have working solutions via Nexus or worker-specific task queues. Better documentation would reduce duplicate requests.

---

## Summary

The Features repository serves a critical role in tracking cross-SDK feature parity. Key observations:

1. **Backlog is growing** (+24 net issues in 12 months), reflecting increasing demand for SDK feature standardization. January 2026 was a particularly active month.

2. **High staleness** (65% of issues >12 months old) is partially expected but warrants systematic review, especially the 97 issues older than 3 years.

3. **Top priorities by community demand:**
   - Declarative schedules ([#118](https://github.com/temporalio/features/issues/118) - 17 upvotes, 23 comments)
   - Custom markers for workflow history ([#399](https://github.com/temporalio/features/issues/399) - 15 upvotes)
   - Unit testing versioning ([#649](https://github.com/temporalio/features/issues/649) - 14 upvotes)

4. **Good progress** on serialization context ([#434](https://github.com/temporalio/features/issues/434)) with 3 SDKs complete (Java, Python, .NET), 4 pending.

5. **Nexus integration** is an active area with 8 open issues requiring cross-SDK coordination.

6. **Versioning APIs maturing:** Recent closures of [#744](https://github.com/temporalio/features/issues/744), [#745](https://github.com/temporalio/features/issues/745), and [#738](https://github.com/temporalio/features/issues/738) indicate versioning is approaching GA, with remaining work on deployment features.

7. **Security vulnerabilities** need immediate attention -- 5 issues all with severity >= 7.1.

8. **Metrics standardization** is an emerging theme with 11 open issues requesting consistent metrics, failure reasons, and tracing across SDKs.

9. **External payload storage** is a new area of work with foundation and S3 driver issues filed in March 2026.

10. **Feature test specs** for 8 core areas remain open, limiting conformance testing capabilities.
