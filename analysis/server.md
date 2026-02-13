# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-02-11
**Total Open Issues:** 506
**Total Closed Issues:** 994
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 506 open issues with significant community engagement (812 total upvotes, 841 comments across open issues). The highest-demand requests center on workflow coordination primitives (external workflow completion, priority task queues), expanded database backend support (MongoDB, CockroachDB, YDB), and scheduling improvements. With 68% of open issues stale (>12 months old) and 41% over three years old, the backlog contains a substantial volume of long-standing feature requests alongside a steady stream of security vulnerability reports and potential bugs requiring triage.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 344 | High - drives core user demand for workflow capabilities and storage options |
| Potential Bugs | 120 | Medium - requires triage to distinguish real bugs from usage questions |
| Confirmed Bugs | 7 | High - known issues needing fixes |
| Schedules Improvements | 17 | Medium - active area with both bugs and feature requests |
| Operations/Infrastructure | 19 | Medium - deployment, logging, and operational improvements |
| Security/CVE Reports | 13 | High - recurring vulnerability reports against server and admin-tools images |
| Community Contributions | 33 | Low - issues marked up-for-grabs or good-first-issue |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 812 |
| Total Comments | 841 |
| Issues with Upvotes | 134 (26%) |
| Issues with Comments | 276 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 66% (994/1500) |
| Median Time to Close | 44 days (calendar) / 32 days (business) |
| Resolved within 30 days | 45% |
| Resolved within 90 days | 61% |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 175 | 133 | +42 |

Backlog Growing: 42 more issues opened than closed in the last 12 months, though January 2026 saw a strong closing burst (35 closed vs 17 opened), suggesting periodic triage efforts.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 91 |
| Issues Closed | 97 |
| Bugs Closed | 55 |
| Enhancements Completed | 26 |

The last 6 months show a nearly balanced velocity (net -6), with more bugs being closed than enhancements, indicating ongoing stabilization work.

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Add health check handler for worker service |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for Timers |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Documentation - How to use Temporal as an embedded library |
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history |
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#8363](https://github.com/temporalio/temporal/issues/8363) | 6 | Task queue validator on occasions fails task queue name validation |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 70 | 14 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 12 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | 7 | MongoDB as Persistent |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart/UpdateWithStart command |
| 6 | [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 4 | Different retry options based on failure type |
| 7 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continueAsNew |
| 9 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |
| 10 | [#328](https://github.com/temporalio/temporal/issues/328) | 19 | 16 | Try to run Temporal on top of Amazon Keyspaces |
| 11 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | Support SQLite in production |
| 12 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | Add task queue query |
| 13 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3 | Implement dynamic task queue routing |
| 14 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | 6 | Schedules - add option for execution workflowid to be "as-is" |
| 15 | [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 1 | Official CockroachDB (CRDB) support |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 154 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 104 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 99 | MongoDB as Persistent |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | Add SignalWithStart/UpdateWithStart command |
| 6 | [#131](https://github.com/temporalio/temporal/issues/131) | 60 | Different retry options based on failure type |
| 7 | [#328](https://github.com/temporalio/temporal/issues/328) | 54 | Try to run Temporal on top of Amazon Keyspaces |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Transfer child workflows to new parent on continueAsNew |
| 9 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 48 | YDB Temporal support |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 48 | Ability to get all task queues per namespace |
| 11 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 43 | Add task queue query |
| 12 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 36 | Support SQLite in production |
| 13 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 34 | Schedules - execution workflowid "as-is" option |
| 14 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 33 | Implement dynamic task queue routing |
| 15 | [#8724](https://github.com/temporalio/temporal/issues/8724) | 27 | Support Azure Entra ID Authentication for PostgreSQL Backend |

---

## Top Request Categories

### 1. Database & Storage Backend Expansion (Very High Demand)

Users consistently request support for additional database backends and improvements to existing ones. This is the largest thematic cluster by combined upvotes, spanning alternative persistence layers, authentication improvements, and operational enhancements for supported databases.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | MongoDB as persistence backend |
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Better naming/documentation for POSTGRES_SEEDS config |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | Amazon Keyspaces (Cassandra-compatible) support |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | Support SQLite in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 11 | Azure Entra ID authentication for PostgreSQL |
| [#4105](https://github.com/temporalio/temporal/issues/4105) | 8 | Full support for ScyllaDB as persistence layer |
| [#4044](https://github.com/temporalio/temporal/issues/4044) | 5 | Postgres schema partition table support |
| [#3383](https://github.com/temporalio/temporal/issues/3383) | 4 | Schema name selection for PostgreSQL |
| [#9156](https://github.com/temporalio/temporal/issues/9156) | 2 | Cloud database cert/IAM connections |

### 2. Task Queue Capabilities (High Demand)

Task queues are a core dispatch mechanism and users are requesting priority support, better introspection, and dynamic routing capabilities.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Priority task queues |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List all task queues per namespace |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Add task queue query API |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Dynamic task queue routing |
| [#4829](https://github.com/temporalio/temporal/issues/4829) | 8 | Specify task queue when resetting an execution |
| [#3309](https://github.com/temporalio/temporal/issues/3309) | 7 | Notify all workers on a task queue |
| [#3468](https://github.com/temporalio/temporal/issues/3468) | 6 | List task queues for a given namespace |

### 3. Workflow Coordination & Lifecycle (High Demand)

Requests for richer workflow primitives, including inter-workflow coordination, child workflow management, retry customization, and lifecycle improvements.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | Wait for completion of an external workflow |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | Add SignalWithStart/UpdateWithStart command |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | Different retry options based on failure type |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to new parent on continueAsNew |
| [#2617](https://github.com/temporalio/temporal/issues/2617) | 10 | Retention period per workflow completion type |
| [#685](https://github.com/temporalio/temporal/issues/685) | 9 | Delay workflow completion until abandoned children start |
| [#487](https://github.com/temporalio/temporal/issues/487) | 8 | Separate retention period from uniqueness guarantee period |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | Add soft workflow timeout |
| [#8356](https://github.com/temporalio/temporal/issues/8356) | 6 | Resource-aware worker concurrency |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | 5 | Do not fail continueAsNew on a new signal |

### 4. Schedules & Cron (Medium Demand)

Schedules are an active area of development with both feature requests and bugs. Users need more flexibility in scheduling semantics and better operational visibility.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | Execution workflowid "as-is" option (not unique per run) |
| [#5811](https://github.com/temporalio/temporal/issues/5811) | 12 | Support last day of month as recurring schedule option |
| [#8205](https://github.com/temporalio/temporal/issues/8205) | 2 | Improve DST handling in schedules |
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | Scheduled actions fail to clear ContinuedFailure on null payloads |
| [#8087](https://github.com/temporalio/temporal/issues/8087) | 1 | Skipped action metric for scheduled actions |
| [#8606](https://github.com/temporalio/temporal/issues/8606) | 0 | Allow TriggerImmediatelyRequest to define arguments |
| [#8581](https://github.com/temporalio/temporal/issues/8581) | 1 | Update schedule memo |

### 5. Security & Vulnerability Management (Medium Demand, High Urgency)

A recurring stream of CVE reports against server and admin-tools Docker images. These are typically addressed in newer releases but generate ongoing community concern.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#9280](https://github.com/temporalio/temporal/issues/9280) | 0 | v1.29.3 vulnerabilities |
| [#8110](https://github.com/temporalio/temporal/issues/8110) | 1 | v1.28.0 vulnerabilities (12 comments, active discussion) |
| [#8655](https://github.com/temporalio/temporal/issues/8655) | 0 | Admin-tools 1.29.1 security vulnerabilities |
| [#8220](https://github.com/temporalio/temporal/issues/8220) | 0 | Server v1.28.1 security vulnerabilities |
| [#8219](https://github.com/temporalio/temporal/issues/8219) | 0 | Admin-tools 1.28.1 security vulnerabilities |
| [#6977](https://github.com/temporalio/temporal/issues/6977) | 2 | Admin-tools release 1.24 vulnerabilities |
| [#8153](https://github.com/temporalio/temporal/issues/8153) | 1 | CVE-2025-22871 for golang:net/http/internal |
| [#9244](https://github.com/temporalio/temporal/issues/9244) | 0 | Upgrade deprecated ES/AWS libraries |

### 6. Archival & Data Lifecycle (Low-Medium Demand)

Users need better archival support across cloud providers and improved ability to query archived data.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#5516](https://github.com/temporalio/temporal/issues/5516) | 7 | Azure Blob Storage for archival |
| [#7894](https://github.com/temporalio/temporal/issues/7894) | 2 | Cannot load archived workflows on UI (S3) |
| [#6193](https://github.com/temporalio/temporal/issues/6193) | 2 | Cannot load archived workflow history on UI (S3) |
| [#5022](https://github.com/temporalio/temporal/issues/5022) | 2 | Cannot display archived workflows past retention |
| [#8648](https://github.com/temporalio/temporal/issues/8648) | 0 | Add ExecutionStatus to archived visibility columns |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | Upvotes | Impact |
|-------|---------|--------|
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | Scheduled actions fail to clear ContinuedFailure on null success payloads |
| [#4000](https://github.com/temporalio/temporal/issues/4000) | 2 | Concurrent map read and map write race condition |
| [#7821](https://github.com/temporalio/temporal/issues/7821) | 0 | Workflow list takes different query for hot and archived |
| [#7566](https://github.com/temporalio/temporal/issues/7566) | 0 | Workflow task following ShutdownWorker should not time out if no workers available |
| [#3284](https://github.com/temporalio/temporal/issues/3284) | 0 | Server returns status messages over metadata limit leading to connection drops |
| [#3104](https://github.com/temporalio/temporal/issues/3104) | 0 | Surprising clusterMetadata override |
| [#266](https://github.com/temporalio/temporal/issues/266) | 0 | Matching service degradation due to large number of task lists |

### Potential Bugs (Need Investigation)

High-engagement potential bugs that warrant triage:

| Issue | Upvotes | Comments | Impact |
|-------|---------|----------|--------|
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | 3 | Error during VisibilityDeleteExecution |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | 7 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | 0 | Docker-compose multirole sometimes stuck on boot |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | 1 | Logging/exception stack trace not capturing underlying errors |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 4 | 3 | Stale internode gRPC connections after pod termination in Kubernetes |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | 3 | WorkflowTaskTimedOut when submitting large number of activities |
| [#6323](https://github.com/temporalio/temporal/issues/6323) | 0 | 15 | Frontend service goroutine (CPU and memory) leak |
| [#9118](https://github.com/temporalio/temporal/issues/9118) | 0 | 5 | Stuck activities when Temporal crashes |
| [#9021](https://github.com/temporalio/temporal/issues/9021) | 0 | 2 | Possible premature deletion in History Scavenger |

---

## Community Contribution Opportunities

Issues marked `up-for-grabs` or `good first issue` that are available for external contributors:

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | API/Workflow | Wait for completion of an external workflow (70 upvotes) |
| [#537](https://github.com/temporalio/temporal/issues/537) | API (easy) | Add SignalWithStart/UpdateWithStart command (30 upvotes) |
| [#328](https://github.com/temporalio/temporal/issues/328) | Database | Run Temporal on Amazon Keyspaces (19 upvotes) |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | API (medium) | Add task queue query (16 upvotes) |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | DevExp | Optimize large payload fan-out to activities/child workflows (12 upvotes) |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | API | Add soft workflow timeout (7 upvotes) |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | Workflow | Do not fail continueAsNew on a new signal (5 upvotes) |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | API | Add SignalWithReset (5 upvotes) |
| [#983](https://github.com/temporalio/temporal/issues/983) | Operations (easy) | Logging/stack trace not capturing underlying errors (5 upvotes) |
| [#804](https://github.com/temporalio/temporal/issues/804) | Workflow | Synchronous Start (5 upvotes) |
| [#453](https://github.com/temporalio/temporal/issues/453) | Operations | Implement Docker healthcheck (2 upvotes) |
| [#1018](https://github.com/temporalio/temporal/issues/1018) | API (easy) | Add CANCEL_REQUESTED status (1 upvote) |
| [#515](https://github.com/temporalio/temporal/issues/515) | Operations (easy) | Expose zap logger encoding to config (1 upvote) |
| [#503](https://github.com/temporalio/temporal/issues/503) | Operations (easy) | Record activity started/failed event for activity in retry on workflow completion (1 upvote) |

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 207 (41% of all open issues)
- **Issues >12 months with no activity:** 345 (68% of all open issues)
- **Stale issues with 0 upvotes and 0-1 comments:** 204

**Recommended for closure** (stale, zero engagement, likely superseded or no longer relevant):

The 204 stale issues with zero upvotes and minimal comments are strong candidates for a bulk triage pass. Many date back to 2020-2022 and may reference outdated architecture or features that have since been implemented differently.

**Needs maintainer review:**

| Issue | Upvotes | Age | Reason |
|-------|---------|-----|--------|
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 2020 | Different retry options - high demand but stale since 2024-07 |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2023 | YDB support - stale since 2024-01, needs decision on community DB support |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 2022 | Transfer child workflows on continueAsNew - stale since 2024-10 |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 2022 | Dynamic task queue routing - stale since 2024-10 |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 2023 | CockroachDB support - stale since 2023-06 |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | 2021 | Optimize large payload fan-out - stale since 2023-03 |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | 2021 | Error-free rolling upgrades - stale since 2024-10 |
| [#3056](https://github.com/temporalio/temporal/issues/3056) | 11 | 2022 | Wildcard search for workflows - stale since 2023-03 |

### Documentation Gaps

| Issue | Upvotes | Description |
|-------|---------|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS or use a descriptive variable name |
| [#954](https://github.com/temporalio/temporal/issues/954) | 3 | Add multi-region deployment documentation |
| [#8461](https://github.com/temporalio/temporal/issues/8461) | 2 | Documentation for self-hosting on cloud environments |
| [#1821](https://github.com/temporalio/temporal/issues/1821) | 2 | Document Elasticsearch permissions required by Temporal |
| [#8652](https://github.com/temporalio/temporal/issues/8652) | 0 | Document ScyllaDB as Cassandra-compatible backend |
| [#2891](https://github.com/temporalio/temporal/issues/2891) | 0 | Document configuration (development.yaml, dynamicconfig) |
| [#1757](https://github.com/temporalio/temporal/issues/1757) | 0 | Document dynamic config behavior |

---

## Recommendations

1. **High Priority Features:** The top 5 by user demand are: external workflow completion wait ([#680](https://github.com/temporalio/temporal/issues/680), 70 upvotes), priority task queues ([#1507](https://github.com/temporalio/temporal/issues/1507), 50 upvotes), improved Postgres configuration naming ([#2668](https://github.com/temporalio/temporal/issues/2668), 46 upvotes), MongoDB support ([#2318](https://github.com/temporalio/temporal/issues/2318), 46 upvotes), and SignalWithStart/UpdateWithStart ([#537](https://github.com/temporalio/temporal/issues/537), 30 upvotes). Azure Entra ID for PostgreSQL ([#8724](https://github.com/temporalio/temporal/issues/8724), 11 upvotes) is a newer high-demand item growing quickly.

2. **Bug Fixes:** Triage the 120 potential-bug issues to separate real bugs from questions. The confirmed bug for scheduled actions ContinuedFailure ([#8490](https://github.com/temporalio/temporal/issues/8490)) and the concurrent map race ([#4000](https://github.com/temporalio/temporal/issues/4000)) should be prioritized. The Kubernetes gRPC connection staleness issue ([#8719](https://github.com/temporalio/temporal/issues/8719)) and the frontend goroutine leak ([#6323](https://github.com/temporalio/temporal/issues/6323)) are operationally impactful.

3. **Security:** Establish a clearer process for security vulnerability tracking. Multiple open issues report CVEs across server versions ([#9280](https://github.com/temporalio/temporal/issues/9280), [#8110](https://github.com/temporalio/temporal/issues/8110), [#8655](https://github.com/temporalio/temporal/issues/8655), [#8220](https://github.com/temporalio/temporal/issues/8220), [#8219](https://github.com/temporalio/temporal/issues/8219)). Consider a standing security issue or advisory page to reduce duplicate reports.

4. **Community:** The 33 up-for-grabs issues include several high-visibility items. Focus community contributor attention on the easy-difficulty issues like [#537](https://github.com/temporalio/temporal/issues/537) (SignalWithStart), [#1018](https://github.com/temporalio/temporal/issues/1018) (CANCEL_REQUESTED status), and [#515](https://github.com/temporalio/temporal/issues/515) (logger encoding config).

5. **Housekeeping:** Conduct a bulk triage of the 204 stale issues with zero engagement. Close issues that are no longer relevant or have been superseded. For the 8 high-upvote stale issues listed above, add maintainer comments clarifying whether they are on the roadmap or should be closed. Addressing [#2668](https://github.com/temporalio/temporal/issues/2668) (46 upvotes) with a simple config rename would be a quick community win.
