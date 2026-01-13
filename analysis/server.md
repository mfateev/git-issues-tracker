# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** January 13, 2026
**Total Open Issues:** 530
**Total Closed Issues:** 955
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md)

**SDKs:** [Java](java.md) . [Go](go.md) . [TypeScript](typescript.md) . [Python](python.md) . [.NET](dotnet.md) . [PHP](php.md) . [Ruby](ruby.md) . [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 530 open issues with strong community engagement: 872 total upvotes and 871 comments across open issues. The most requested features center around workflow orchestration capabilities (external workflow completion with 70 upvotes, priority queues with 50 upvotes), alternative database backends (MongoDB at 46 upvotes), and improved configuration/operations (POSTGRES_SEEDS documentation at 46 upvotes). With 71% of issues being stale (>12 months old) and a growing backlog (+67 issues net in the last 12 months), there is significant opportunity for strategic triage and prioritization.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements/Features | 352 | High - represents core user demand for new capabilities |
| Potential Bugs | 125 | Medium-High - requires investigation to confirm severity |
| Confirmed Bugs | 11 | High - known issues affecting users |
| Operations/DevOps | 20 | Medium - improves deployment and monitoring |
| API Changes | 25 | Medium - enables new SDK capabilities |
| Up-for-grabs | 30 | Low-Medium - good for community contributions |
| Good First Issue | 7 | Low - onboarding opportunities |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs up) | 872 |
| Total Comments | 871 |
| Issues with Upvotes | 143 (27%) |
| Issues with Comments | 291 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 64% (955/1485) |
| Median Time to Close | 41 days (calendar) / 30 days (business) |
| Resolved within 30 days | 47% |
| Resolved within 90 days | 62% |

**Closure Reasons (Inferred):**
- Fixed (bugs): 354 (37%)
- Completed (features): 247 (26%)
- Self-resolved: 210 (22%)
- Duplicate: 5 (1%)
- Won't Fix: 2 (0%)
- Other: 137 (14%)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 169 | 102 | +67 |

**Backlog Growing:** 67 more issues opened than closed in the last 12 months. The monthly trend shows consistent growth with April 2025 (+15), June 2025 (+13), and July 2025 (+12) being the highest net increase months.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 98 |
| Issues Closed | 66 |
| Net Change | +32 |
| Bugs Closed | 45 |
| Enhancements Closed | 15 |
| Median Time to Close | 23 days (calendar) / 18 days (business) |
| Resolved within 30 days | 61% |
| Resolved within 90 days | 77% |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#8363](https://github.com/temporalio/temporal/issues/8363) | 6 | Task queue validator on occasions fails task queue name... |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 70 | 14 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 12 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | 7 | MongoDB as Persistent |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart/UpdateWithStart command |
| 6 | [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 4 | Different retry options based on failure type |
| 7 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue-as-new |
| 9 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |
| 10 | [#328](https://github.com/temporalio/temporal/issues/328) | 19 | 16 | Try to run temporal on top of Amazon Keyspaces |
| 11 | [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | 13 | Add health check handler for worker service |
| 12 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | Support sqlite in production |
| 13 | [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | 6 | Metadata for Timers |
| 14 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | Add task queue query |
| 15 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3 | Implement dynamic task queue routing |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 154 | Add ability for workflow to wait for completion of external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 104 | Document POSTGRES_SEEDS |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 99 | MongoDB as Persistent |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | Add SignalWithStart/UpdateWithStart command |
| 6 | [#131](https://github.com/temporalio/temporal/issues/131) | 60 | Different retry options based on failure type |
| 7 | [#328](https://github.com/temporalio/temporal/issues/328) | 54 | Try to run temporal on top of Amazon Keyspaces |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Transfer child workflows to new parent run on continue-as-new |
| 9 | [#2582](https://github.com/temporalio/temporal/issues/2582) | 49 | Add health check handler for worker service |
| 10 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 48 | YDB Temporal support |

---

## Top Request Categories

### 1. Workflow Orchestration Enhancements (Very High Demand)

Users consistently request advanced workflow coordination capabilities that enable more complex inter-workflow relationships and better state management.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | Wait for external workflow completion from within a workflow (5+ years old, workaround via Nexus available) |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Priority task queues with fairness (simple priority shipped in v1.28.0, fairness in active development) |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | SignalWithStart/UpdateWithStart from workflow code (currently activity-only workaround) |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | Different retry options based on failure type |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to new parent on continue-as-new |
| [#3006](https://github.com/temporalio/temporal/issues/3006) | 0 | Workflow Pause/Unpause (18 comments, Activity pause coming soon, Workflow pause in design) |

**Analysis:** The top issue ([#680](https://github.com/temporalio/temporal/issues/680)) requesting external workflow completion has been open for 5+ years with consistent community demand. A workaround using Nexus WorkflowRunOperation is now available (v1.28+), which attaches callbacks that follow workflow runs across retries and continue-as-new, but users want this without going through a Nexus handler. Priority queues ([#1507](https://github.com/temporalio/temporal/issues/1507)) saw major progress with simple priority (levels 1-5) shipping in v1.28.0. Fairness features with weighted keys and ordering are actively being developed with detailed design shared in March 2025. A key use case identified is prioritizing in-progress workflows over new ones to prevent workflow starvation in batch scenarios.

### 2. Alternative Database/Storage Backends (High Demand)

Users operating in various cloud environments and enterprise contexts need database options beyond MySQL, PostgreSQL, and Cassandra.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | MongoDB as persistent store |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | Amazon Keyspaces support |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | SQLite support in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |
| [#684](https://github.com/temporalio/temporal/issues/684) | 13 | DynamoDB persistence driver |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 8 | Azure Entra ID Authentication for PostgreSQL |
| [#4105](https://github.com/temporalio/temporal/issues/4105) | 8 | Full support for ScyllaDB as persistence layer |
| [#8652](https://github.com/temporalio/temporal/issues/8652) | 0 | Document ScyllaDB as Cassandra-compatible backend |

**Analysis:** OpenSearch support was recently closed as resolved with v1.29.0+ supporting OpenSearch up to v2.7.0. MongoDB ([#2318](https://github.com/temporalio/temporal/issues/2318)) remains a highly requested feature. The recent issue [#8652](https://github.com/temporalio/temporal/issues/8652) documents the current state of ScyllaDB compatibility with Temporal's Cassandra driver. Azure Entra ID authentication ([#8724](https://github.com/temporalio/temporal/issues/8724)) is a newer request with 8 upvotes for PostgreSQL backend.

### 3. Configuration & Operations (High Demand)

Users deploying Temporal in production environments struggle with configuration complexity and operational visibility.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (env vars now documented on Docker Hub, issue remains open for improvements) |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List all task queues per namespace |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Health check handler for worker service |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Embedded version of the service |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Error-free rolling bounces and upgrades |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Log-less graceful shutdown |

**Analysis:** The POSTGRES_SEEDS documentation issue ([#2668](https://github.com/temporalio/temporal/issues/2668)) received a recent update (Jan 2026) with environment variables now documented on Docker Hub image descriptions and new docker-compose examples available in the samples-server repository. The self-hosted guide is being updated. Task queue listing ([#1797](https://github.com/temporalio/temporal/issues/1797)) is needed for client-side tooling and debugging.

### 4. Task Queue & Scheduling Improvements (Medium Demand)

Users need better control over task distribution, scheduling, and worker management.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Task queue query |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for timers (naming/tagging for UI clarity) |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Dynamic task queue routing |
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | Schedules - add option for execution workflowid to include schedule time |
| [#3309](https://github.com/temporalio/temporal/issues/3309) | 7 | Notify all workers on a task queue |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | Add soft workflow timeout |

**Analysis:** Timer metadata ([#3228](https://github.com/temporalio/temporal/issues/3228)) is a UX improvement for workflow debugging. Dynamic task queue routing ([#1988](https://github.com/temporalio/temporal/issues/1988)) enables development/troubleshooting scenarios. Schedule-related improvements ([#4795](https://github.com/temporalio/temporal/issues/4795)) are requested for better workflow identification.

### 5. Performance Optimizations (Medium Demand)

Requests for improved performance and resource utilization.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | Optimize large payload fan-out to activities and children |
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history |
| [#487](https://github.com/temporalio/temporal/issues/487) | 8 | Separate retention period from uniqueness check |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | Upvotes | Impact |
|-------|-----|--------|
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history - performance impact |
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | Error during VisibilityDeleteExecution |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | docker-compose multirole sometimes stuck on boot |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | Logging/exception stack trace not capturing underlying error |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 3 | Stale internode gRPC connections after pod termination (K8s) |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | WorkflowTaskTimedOut when submitting large number of activities |

### Potential Bugs (Need Investigation)

| Issue | Upvotes | Impact |
|-------|-----|--------|
| [#6323](https://github.com/temporalio/temporal/issues/6323) | 0 | Frontend Service goroutine/memory leak (15 comments, caused by improper grpc.ClientConn cleanup) |
| [#8864](https://github.com/temporalio/temporal/issues/8864) | 0 | Workflow cannot run with dedicated cloud PostgreSQL - "Unknown column" error |
| [#8833](https://github.com/temporalio/temporal/issues/8833) | 0 | Scheduler does not list workflows when using "triggerImmediately" |
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | Scheduled Actions doesn't clear ContinuedFailure on null success |
| [#4000](https://github.com/temporalio/temporal/issues/4000) | 2 | Concurrent map read and map write |
| [#8902](https://github.com/temporalio/temporal/issues/8902) | 0 | History service memory usage upward trend |

### Security Issues

| Issue | Description |
|-------|-------------|
| [#8866](https://github.com/temporalio/temporal/issues/8866) | CVE-2025-61729 for golang:crypto/x509 |
| [#8865](https://github.com/temporalio/temporal/issues/8865) | CVE-2025-61727 for golang:crypto/x509 |
| [#8698](https://github.com/temporalio/temporal/issues/8698) | Multiple CVEs affecting Go standard libraries |
| [#8655](https://github.com/temporalio/temporal/issues/8655) | Security vulnerabilities in admin-tools:1.29.1 |
| [#6977](https://github.com/temporalio/temporal/issues/6977) | Security vulnerabilities in Temporal CLI image |
| [#6976](https://github.com/temporalio/temporal/issues/6976) | Security vulnerabilities in autosetup image |

---

## Community Contribution Opportunities

### Up-for-grabs Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#2582](https://github.com/temporalio/temporal/issues/2582) | Operations | Health check handler for worker service (18 upvotes) |
| [#7625](https://github.com/temporalio/temporal/issues/7625) | Config | Additional tuning configs for scavenger jobs (difficulty: easy) |
| [#4094](https://github.com/temporalio/temporal/issues/4094) | Bug | Version info upgrade notification not cleared after upgrade (good first issue) |
| [#4029](https://github.com/temporalio/temporal/issues/4029) | Enhancement | Discussion on improving task queue management |
| [#2687](https://github.com/temporalio/temporal/issues/2687) | Child Workflows | Child workflow enhancement (difficulty: easy) |
| [#2491](https://github.com/temporalio/temporal/issues/2491) | Logging | Throttled logger should not throttle rarely occurring errors |
| [#2470](https://github.com/temporalio/temporal/issues/2470) | Enhancement | Community contribution opportunity |
| [#2341](https://github.com/temporalio/temporal/issues/2341) | Enhancement | Configuration improvement |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | Performance | Optimize large payload fan-out (12 upvotes) |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | API | Add task queue query (16 upvotes) |

### Good First Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#4094](https://github.com/temporalio/temporal/issues/4094) | Bug | Version info upgrade notification not cleared after cluster upgrade |
| [#7625](https://github.com/temporalio/temporal/issues/7625) | Config | Additional tuning configs for scavenger jobs |

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 218 (41% of open issues)
- **Issues >2 years old:** 299 (56% of open issues)
- **Issues >12 months old:** 374 (71% of open issues)

### Top Stale Issues by Upvotes

| Issue | Upvotes | Last Updated | Title |
|-------|-----|--------------|-------|
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 2024-07-30 | Different retry options based on failure type |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2024-01-24 | YDB Temporal support |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 2024-10-12 | Add ability to transfer child workflows to new parent |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | 2024-06-20 | Add health check handler for worker service |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 2024-10-03 | Implement dynamic task queue routing |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | 2024-11-25 | Support embedded version of the service |

### Recommended for Closure Review

| Issue | Age | Reason |
|-------|-----|--------|
| [#131](https://github.com/temporalio/temporal/issues/131) | 5+ years | Different retry options - no activity since Jul 2024, evaluate if current retry capabilities are sufficient |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 2+ years | YDB support - no activity since Jan 2024, evaluate community interest |
| [#298](https://github.com/temporalio/temporal/issues/298) | 5+ years | Embedded version - evaluate if dev server satisfies use case |

### Needs Maintainer Decision

| Issue | Status | Decision Needed |
|-------|--------|-----------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | Assigned | Documentation updated on Docker Hub; when will env var renaming happen? |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | In Progress | Update issue with post-v1.28.0 progress on fairness and ordering features |
| [#2318](https://github.com/temporalio/temporal/issues/2318) | Open | MongoDB - clarify if community contribution path is available |

### Documentation Gaps

| Issue | Description |
|-------|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | POSTGRES_SEEDS and env vars - partially addressed, self-hosted guide update pending |
| [#8652](https://github.com/temporalio/temporal/issues/8652) | Document ScyllaDB as Cassandra-compatible backend |

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-01-12 | [#9005](https://github.com/temporalio/temporal/issues/9005) | Add capability to filter workflows by a substring |
| 2026-01-08 | [#8967](https://github.com/temporalio/temporal/issues/8967) | 1.30.0 release version |
| 2026-01-07 | [#8955](https://github.com/temporalio/temporal/issues/8955) | MCP Server for Temporal Workflows |
| 2025-12-24 | [#8902](https://github.com/temporalio/temporal/issues/8902) | History service memory usage upward trend |
| 2025-12-20 | [#8889](https://github.com/temporalio/temporal/issues/8889) | Enhancing Temporal PR Review and Release Confidence with Hikaflow |
| 2025-12-18 | [#8866](https://github.com/temporalio/temporal/issues/8866) | Address security vulnerability CVE-2025-61729 |
| 2025-12-18 | [#8865](https://github.com/temporalio/temporal/issues/8865) | Address security vulnerability CVE-2025-61727 |
| 2025-12-18 | [#8864](https://github.com/temporalio/temporal/issues/8864) | Workflow cannot run with dedicated cloud PostgreSQL |
| 2025-12-16 | [#8833](https://github.com/temporalio/temporal/issues/8833) | Scheduler does not list workflows when using "trigger immediately" |

---

## Recommendations

### 1. High Priority Features (Top User Demand)

1. **Continue priority/fairness work ([#1507](https://github.com/temporalio/temporal/issues/1507))** - v1.28.0 shipped simple priority (levels 1-5); fairness and ordering features are actively being developed with detailed design shared in March 2025. Key use cases include prioritizing in-progress workflows over new ones, which is highly requested for batch processing scenarios.

2. **External workflow completion ([#680](https://github.com/temporalio/temporal/issues/680))** - 70 upvotes, 5+ years old. Nexus WorkflowRunOperation workaround exists (follows entire run chain with up to 32 callbacks per workflow) but native support without Nexus handler is requested. Labeled "up-for-grabs".

3. **MongoDB support ([#2318](https://github.com/temporalio/temporal/issues/2318))** - 46 upvotes. Clarify path for community contribution or official support.

4. **SignalWithStart/UpdateWithStart ([#537](https://github.com/temporalio/temporal/issues/537))** - 30 upvotes, 5+ years old, labeled up-for-grabs.

5. **Azure Entra ID for PostgreSQL ([#8724](https://github.com/temporalio/temporal/issues/8724))** - 8 upvotes, recent request with growing interest for enterprise Azure deployments.

### 2. Bug Fixes (Critical)

1. **Frontend goroutine leak ([#6323](https://github.com/temporalio/temporal/issues/6323))** - Root cause identified (grpc.ClientConn cleanup). Needs fix merged.

2. **History service memory issues ([#4233](https://github.com/temporalio/temporal/issues/4233), [#8902](https://github.com/temporalio/temporal/issues/8902))** - Multiple users reporting high memory usage with upward trend.

3. **Security CVEs** - Address [#8866](https://github.com/temporalio/temporal/issues/8866), [#8865](https://github.com/temporalio/temporal/issues/8865), [#8698](https://github.com/temporalio/temporal/issues/8698) for Go standard library vulnerabilities.

4. **Kubernetes gRPC issues ([#8719](https://github.com/temporalio/temporal/issues/8719))** - Stale internode connections after pod termination affecting K8s deployments.

5. **Visibility deletion errors ([#6995](https://github.com/temporalio/temporal/issues/6995))** - 6 upvotes, affects cleanup operations.

### 3. Community Engagement

1. **Promote up-for-grabs issues** - 30 issues available for community contribution, including [#2582](https://github.com/temporalio/temporal/issues/2582) (health check handler, 18 upvotes) and [#7625](https://github.com/temporalio/temporal/issues/7625) (scavenger tuning, difficulty: easy).

2. **Good first issues** - [#4094](https://github.com/temporalio/temporal/issues/4094) (version notification bug) has active community interest with contributor asking about PR status.

3. **Engage with active contributors** - Several issues have community members offering to contribute (e.g., [#7625](https://github.com/temporalio/temporal/issues/7625) contributor waiting on CLA approval).

### 4. Housekeeping

1. **Triage stale issues** - 374 issues (71%) have no activity in 12+ months. Consider batch triage with "stale" label and closure warnings.

2. **Update issue statuses** - Several issues have significant progress not reflected in the issue:
   - [#1507](https://github.com/temporalio/temporal/issues/1507): Update with v1.28.0 progress and fairness/ordering roadmap
   - [#2668](https://github.com/temporalio/temporal/issues/2668): Close or update with Docker Hub documentation link confirmation
   - [#680](https://github.com/temporalio/temporal/issues/680): Update with Nexus workaround details and future plans

3. **Close or update 5+ year old issues** - Evaluate if [#131](https://github.com/temporalio/temporal/issues/131), [#537](https://github.com/temporalio/temporal/issues/537), [#298](https://github.com/temporalio/temporal/issues/298) are still relevant or have been addressed by newer features.
