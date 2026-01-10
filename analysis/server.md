# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 532
**Total Closed Issues:** 952
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

<- [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 532 open issues with strong community engagement: 902 total upvotes and 884 comments across open issues. The most requested features center around workflow orchestration capabilities (external workflow completion with 70 upvotes, priority queues with 50 upvotes), alternative database backends (MongoDB at 46 upvotes, OpenSearch at 30 upvotes), and improved configuration/operations (POSTGRES_SEEDS documentation at 46 upvotes). With 70% of issues being stale (>12 months old) and a growing backlog (+69 issues net in the last 12 months), there is significant opportunity for strategic triage and prioritization.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements/Features | 352 | High - represents core user demand for new capabilities |
| Potential Bugs | 126 | Medium-High - requires investigation to confirm severity |
| Confirmed Bugs | 11 | High - known issues affecting users |
| Operations/DevOps | 20 | Medium - improves deployment and monitoring |
| API Changes | 25 | Medium - enables new SDK capabilities |
| Up-for-grabs | 30 | Low-Medium - good for community contributions |
| Good First Issue | 7 | Low - onboarding opportunities |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 902 |
| Total Comments | 884 |
| Issues with Upvotes | 144 (27%) |
| Issues with Comments | 292 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 64% (952/1484) |
| Median Time to Close | 41 days (calendar) / 30 days (business) |
| Resolved within 30 days | 47% |
| Resolved within 90 days | 62% |

**Closure Reasons (Inferred):**
- Fixed (bugs): 353 (37%)
- Completed (features): 246 (26%)
- Self-resolved: 210 (22%)
- Duplicate: 5 (1%)
- Other: 138 (14%)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 168 | 99 | +69 |

**Backlog Growing:** 69 more issues opened than closed in the last 12 months. The monthly trend shows consistent growth with April 2025 (+15), June 2025 (+13), and July 2025 (+12) being the highest net increase months.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 97 |
| Issues Closed | 65 |
| Net Change | +32 |
| Bugs Closed | 46 |
| Enhancements Closed | 14 |
| Median Time to Close | 24 days (calendar) / 19 days (business) |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#8363](https://github.com/temporalio/temporal/issues/8363) | 6 | Task queue validator on occasions fails task queue name... |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 70 | 14 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 12 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | 7 | MongoDB as Persistent |
| 5 | [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | 15 | Official support for Opensearch |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart/UpdateWithStart command |
| 7 | [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 4 | Different retry options based on failure type |
| 8 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 9 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue-as-new |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |
| 11 | [#328](https://github.com/temporalio/temporal/issues/328) | 19 | 16 | Try to run temporal on top of Amazon Keyspaces |
| 12 | [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | 13 | Add health check handler for worker service |
| 13 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | Support sqlite in production |
| 14 | [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | 6 | Metadata for Timers |
| 15 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | Add task queue query |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 154 | Add ability for workflow to wait for completion of external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 104 | Document POSTGRES_SEEDS |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 99 | MongoDB as Persistent |
| 5 | [#5680](https://github.com/temporalio/temporal/issues/5680) | 75 | Official support for Opensearch |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | Add SignalWithStart/UpdateWithStart command |
| 7 | [#131](https://github.com/temporalio/temporal/issues/131) | 60 | Different retry options based on failure type |
| 8 | [#328](https://github.com/temporalio/temporal/issues/328) | 54 | Try to run temporal on top of Amazon Keyspaces |
| 9 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Transfer child workflows to new parent run on continue-as-new |
| 10 | [#2582](https://github.com/temporalio/temporal/issues/2582) | 49 | Add health check handler for worker service |

---

## Top Request Categories

### 1. Workflow Orchestration Enhancements (Very High Demand)

Users consistently request advanced workflow coordination capabilities that enable more complex inter-workflow relationships and better state management.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | Wait for external workflow completion from within a workflow (5+ years old, workaround via Nexus available) |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Priority task queues with fairness (simple priority shipped in v1.28.0, fairness in active development) |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | SignalWithStart/UpdateWithStart from workflow code (currently activity-only workaround) |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | Different retry options based on failure type |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to new parent on continue-as-new |
| [#3006](https://github.com/temporalio/temporal/issues/3006) | 0 | Workflow Pause/Unpause (18 comments, Activity pause coming soon, Workflow pause in design) |

**Analysis:** The top issue ([#680](https://github.com/temporalio/temporal/issues/680)) requesting external workflow completion has been open for 5+ years with consistent community demand. A workaround using Nexus WorkflowRunOperation is now available (v1.28+), but users want this without going through a Nexus handler. Priority queues ([#1507](https://github.com/temporalio/temporal/issues/1507)) saw major progress with simple priority shipping in v1.28.0, and fairness/ordering features are actively being developed with detailed design shared in March 2025. Workflow pause ([#3006](https://github.com/temporalio/temporal/issues/3006)) has 18 comments and Activity pause is coming soon with Workflow pause in design phase.

### 2. Alternative Database/Storage Backends (High Demand)

Users operating in various cloud environments and enterprise contexts need database options beyond MySQL, PostgreSQL, and Cassandra.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | MongoDB as persistent store (community member completed implementation in #8908) |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official OpenSearch support (v1.29.0+ works with OpenSearch up to v2.7.0) |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | Amazon Keyspaces support |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | SQLite support in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |

**Analysis:** MongoDB implementation has been completed by a community contributor ([#8908](https://github.com/temporalio/temporal/issues/8908)), addressing the long-standing [#2318](https://github.com/temporalio/temporal/issues/2318) request. OpenSearch support is progressing with v1.29.0+ supporting OpenSearch up to v2.7.0, though OpenSearch 2.8.0+ has a pagination bug that Temporal is working around. This is critical for AWS users who can no longer deploy Elasticsearch and must use OpenSearch.

### 3. Configuration & Operations (High Demand)

Users deploying Temporal in production environments struggle with configuration complexity and operational visibility.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (env vars now documented on Docker Hub, issue remains open for improvements) |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List all task queues per namespace |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Health check handler for worker service |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Embedded version of the service |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Log-less graceful shutdown |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Error-free rolling bounces and upgrades |

**Analysis:** The POSTGRES_SEEDS documentation issue ([#2668](https://github.com/temporalio/temporal/issues/2668)) received a recent update (2026-01-09) with environment variables now documented on Docker Hub image descriptions and new docker-compose examples available. The self-hosted guide is being updated. Task queue listing ([#1797](https://github.com/temporalio/temporal/issues/1797)) is needed for client-side tooling and debugging.

### 4. Task Queue & Scheduling Improvements (Medium Demand)

Users need better control over task distribution, scheduling, and worker management.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Task queue query |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for timers (naming/tagging for UI clarity) |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Dynamic task queue routing |
| [#3309](https://github.com/temporalio/temporal/issues/3309) | 7 | Notify all workers on a task queue |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | Add soft workflow timeout |

**Analysis:** Timer metadata ([#3228](https://github.com/temporalio/temporal/issues/3228)) is a UX improvement for workflow debugging. Dynamic task queue routing ([#1988](https://github.com/temporalio/temporal/issues/1988)) enables development/troubleshooting scenarios.

### 5. Performance & Resource Management (Medium Demand)

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history (addressed in v1.25.0 via enableHostHistoryCache) |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | Optimize large payload fan-out to activities and child workflows |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | 👍 | Impact |
|-------|-----|--------|
| [#8943](https://github.com/temporalio/temporal/issues/8943) | 0 | No admin-tools image for 1.29.2 - blocks users on latest version |
| [#8864](https://github.com/temporalio/temporal/issues/8864) | 0 | Workflow cannot run with dedicated cloud PostgreSQL - "Unknown column" error |
| [#8833](https://github.com/temporalio/temporal/issues/8833) | 0 | Scheduler does not list workflows when using "trigger immediately" |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | Logging/exception stack trace not capturing underlying error |
| [#471](https://github.com/temporalio/temporal/issues/471) | 1 | Temporal Docker fails to bind on multiple interfaces |

### Potential Bugs (Need Investigation)

| Issue | 👍 | Impact |
|-------|-----|--------|
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | Error during VisibilityDeleteExecution |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | docker-compose multirole sometimes stuck on boot |
| [#6323](https://github.com/temporalio/temporal/issues/6323) | 0 | Frontend Service goroutine/memory leak (15 comments, caused by improper grpc.ClientConn cleanup) |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 3 | Stale internode gRPC connections after pod termination |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | WorkflowTaskTimedOut when submitting large number of activities |

### Memory/Performance Issues

The frontend service goroutine leak ([#6323](https://github.com/temporalio/temporal/issues/6323)) has been investigated and traced to improper `grpc.ClientConn` cleanup. A PR ([#6441](https://github.com/temporalio/temporal/pull/6441)) to cache these connections is in progress. Multiple users report history service memory issues ([#4233](https://github.com/temporalio/temporal/issues/4233), [#8902](https://github.com/temporalio/temporal/issues/8902)).

---

## Community Contribution Opportunities

### Up-for-grabs Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | API/DevExp | Wait for external workflow completion (70 upvotes, easy difficulty) |
| [#537](https://github.com/temporalio/temporal/issues/537) | API | SignalWithStart/UpdateWithStart command (30 upvotes, easy difficulty) |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | Operations | Health check handler for worker service (18 upvotes) |

### Good First Issues

There are 7 issues labeled "good first issue" available for newcomers to the project.

### Recently Contributed

- [#8908](https://github.com/temporalio/temporal/issues/8908): MongoDB persistence implementation (community contribution completing [#2318](https://github.com/temporalio/temporal/issues/2318) - 46 upvotes)

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 218 (41% of open issues)
- **Issues >2 years old:** 298 (56% of open issues)
- **Issues >12 months old:** 374 (70% of open issues)

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
| [#5680](https://github.com/temporalio/temporal/issues/5680) | Active | Clarify official OpenSearch support status and document version compatibility matrix |
| [#2318](https://github.com/temporalio/temporal/issues/2318) | Contributed | Review and merge MongoDB implementation from [#8908](https://github.com/temporalio/temporal/issues/8908) |

### Documentation Gaps

| Issue | Description |
|-------|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | POSTGRES_SEEDS and env vars - partially addressed, self-hosted guide update pending |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | OpenSearch compatibility matrix needs formal documentation (v1.29.0+ supports up to OpenSearch 2.7.0) |

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-01-08 | [#8968](https://github.com/temporalio/temporal/issues/8968) | Same fairness key but different fairness weight? |
| 2026-01-08 | [#8967](https://github.com/temporalio/temporal/issues/8967) | 1.30.0 release version |
| 2026-01-07 | [#8955](https://github.com/temporalio/temporal/issues/8955) | MCP Server for Temporal Workflows |
| 2026-01-06 | [#8943](https://github.com/temporalio/temporal/issues/8943) | No admin-tools image for 1.29.2 |
| 2025-12-24 | [#8902](https://github.com/temporalio/temporal/issues/8902) | History service memory usage upward trend |
| 2025-12-20 | [#8889](https://github.com/temporalio/temporal/issues/8889) | Enhancing Temporal PR Review and Release Confidence with Hik... |
| 2025-12-18 | [#8866](https://github.com/temporalio/temporal/issues/8866) | Address security vulnerability CVE-2025-61729 |
| 2025-12-18 | [#8865](https://github.com/temporalio/temporal/issues/8865) | Address security vulnerability CVE-2025-61727 |
| 2025-12-18 | [#8864](https://github.com/temporalio/temporal/issues/8864) | Workflow cannot run with dedicated cloud PostgreSQL |
| 2025-12-16 | [#8833](https://github.com/temporalio/temporal/issues/8833) | Scheduler does not list workflows when using "trigger immediately" |

---

## Recommendations

### 1. High Priority Features (Top User Demand)

1. **Continue priority/fairness work ([#1507](https://github.com/temporalio/temporal/issues/1507))** - v1.28.0 shipped simple priority; fairness and ordering features are actively being developed with detailed design shared. Key use cases include prioritizing in-progress workflows over new ones, which is highly requested.

2. **External workflow completion ([#680](https://github.com/temporalio/temporal/issues/680))** - 70 upvotes, 5+ years old. Nexus WorkflowRunOperation workaround exists but native support without Nexus handler is requested. Labeled "up-for-grabs" with easy difficulty.

3. **Review MongoDB contribution ([#8908](https://github.com/temporalio/temporal/issues/8908))** - Community member completed implementation addressing [#2318](https://github.com/temporalio/temporal/issues/2318) (46 upvotes). Review and merge to support MongoDB users.

4. **OpenSearch official support ([#5680](https://github.com/temporalio/temporal/issues/5680))** - v1.29.0+ supports up to OpenSearch 2.7.0. Workaround being developed for 2.8.0+ pagination bug. Critical for AWS users who can no longer deploy Elasticsearch.

### 2. Bug Fixes (Critical)

1. **Frontend goroutine leak ([#6323](https://github.com/temporalio/temporal/issues/6323))** - Root cause identified (grpc.ClientConn cleanup). Merge PR [#6441](https://github.com/temporalio/temporal/pull/6441) to fix.

2. **History service memory issues ([#4233](https://github.com/temporalio/temporal/issues/4233), [#8902](https://github.com/temporalio/temporal/issues/8902))** - Multiple users reporting high memory usage with upward trend.

3. **Admin-tools image missing ([#8943](https://github.com/temporalio/temporal/issues/8943))** - Blocks users on v1.29.2.

4. **Visibility deletion errors ([#6995](https://github.com/temporalio/temporal/issues/6995))** - 6 upvotes, affects cleanup operations.

### 3. Community Engagement

1. **Celebrate MongoDB contribution** - Community member completed [#8908](https://github.com/temporalio/temporal/issues/8908), addressing long-standing [#2318](https://github.com/temporalio/temporal/issues/2318) (46 upvotes). Highlight this as a model for community contribution.

2. **Promote up-for-grabs issues** - 30 issues available for community contribution, including high-visibility [#680](https://github.com/temporalio/temporal/issues/680) (70 upvotes) and [#537](https://github.com/temporalio/temporal/issues/537) (30 upvotes).

3. **Engage priority queue Slack channel** - Users are actively discussing priority/fairness in #priority-fairness Slack channel.

### 4. Housekeeping

1. **Triage stale issues** - 374 issues (70%) have no activity in 12+ months. Consider batch triage with "stale" label and closure warnings.

2. **Update issue statuses** - Several issues have significant progress not reflected in the issue:
   - [#1507](https://github.com/temporalio/temporal/issues/1507): Update with v1.28.0 progress and fairness roadmap
   - [#2668](https://github.com/temporalio/temporal/issues/2668): Update with Docker Hub documentation link
   - [#2941](https://github.com/temporalio/temporal/issues/2941): Confirm if v1.25.0 enableHostHistoryCache resolves this

3. **Close or update 5+ year old issues** - Evaluate if [#131](https://github.com/temporalio/temporal/issues/131), [#537](https://github.com/temporalio/temporal/issues/537), [#298](https://github.com/temporalio/temporal/issues/298) are still relevant or have been addressed by newer features.
