# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 531
**Total Closed Issues:** 960
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 531 open issues with strong community engagement (872 total upvotes, 872 comments). The highest-demand requests focus on workflow coordination capabilities, alternative database backends, and task queue enhancements. With 70% of open issues being stale (>12 months old), there is significant opportunity for backlog cleanup alongside addressing high-value feature requests.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 349 | High - represents core feature demand |
| Potential Bugs | 126 | Medium - requires triage to confirm |
| Confirmed Bugs | 11 | High - verified issues affecting users |
| Up-for-grabs | 30 | Medium - community contribution opportunities |
| Operations | 20 | Medium - deployment and operational improvements |
| Schedules/Cron | 15 | Medium - popular scheduling feature refinements |
| Performance | 6 | High - impacts production workloads |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 872 |
| Total Comments | 872 |
| Issues with Upvotes | 143 (27%) |
| Issues with Comments | 290 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 64% (960/1491) |
| Median Time to Close | 41 days (calendar) / 30 days (business) |
| Resolved within 30 days | 47% |
| Resolved within 90 days | 62% |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 175 | 107 | +68 |

Backlog Growing: 68 more issues opened than closed in the last 12 months.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 99 |
| Issues Closed | 70 |
| Bugs Closed | 44 |
| Enhancements Completed | 17 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#8363](https://github.com/temporalio/temporal/issues/8363) | 6 | Task queue validator on occasions fails task queue name |

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
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue as new |
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
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 154 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 104 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 99 | MongoDB as Persistent |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | Add SignalWithStart/UpdateWithStart command |
| 6 | [#131](https://github.com/temporalio/temporal/issues/131) | 60 | Different retry options based on failure type |
| 7 | [#328](https://github.com/temporalio/temporal/issues/328) | 54 | Try to run temporal on top of Amazon Keyspaces |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Add ability to transfer child workflows to new parent run |
| 9 | [#2582](https://github.com/temporalio/temporal/issues/2582) | 49 | Add health check handler for worker service |
| 10 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 48 | YDB Temporal support |

---

## Top Request Categories

### 1. Storage & Database Backends (Very High Demand)

Users consistently request support for alternative database backends beyond the officially supported options. This reflects diverse infrastructure requirements across organizations.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | MongoDB as Persistent storage backend |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | Run temporal on top of Amazon Keyspaces |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | Support sqlite in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 8 | Support Azure Entra ID Authentication for PostgreSQL |
| [#4044](https://github.com/temporalio/temporal/issues/4044) | 5 | Postgres schema support partition table feature |
| [#3383](https://github.com/temporalio/temporal/issues/3383) | 4 | Schema name selection for postgres |

### 2. Workflow Coordination & Capabilities (High Demand)

Requests for enhanced workflow coordination patterns and capabilities represent core platform evolution needs.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | Wait for completion of an external workflow |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | Add SignalWithStart/UpdateWithStart command |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | Different retry options based on failure type |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to new parent on continue-as-new |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for Timers |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | Optimize large payload fan-out to activities and child workflows |
| [#3056](https://github.com/temporalio/temporal/issues/3056) | 11 | Support wildcard search for workflows |
| [#2617](https://github.com/temporalio/temporal/issues/2617) | 9 | Allow retention period to be set per workflow completion type |

### 3. Task Queue Enhancements (High Demand)

Task queue improvements are consistently requested, indicating this is a critical area for workflow orchestration patterns.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Provide priority task queues |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | Ability to get all task queues per namespace |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Add task queue query |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Implement dynamic task queue routing |
| [#4829](https://github.com/temporalio/temporal/issues/4829) | 8 | Allow to specify task queue when resetting an execution |
| [#3309](https://github.com/temporalio/temporal/issues/3309) | 7 | Notify all workers on a task queue |
| [#3468](https://github.com/temporalio/temporal/issues/3468) | 6 | Add ability to list task queues for a given namespace |

### 4. Operations & Deployment (Medium Demand)

Operational improvements focus on deployment reliability, health checking, and configuration management.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Add health check handler for worker service |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Support embedded version of the service |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Error-free rolling bounces and upgrades |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Support log-less graceful shutdown |
| [#5156](https://github.com/temporalio/temporal/issues/5156) | 4 | Allow configuration of expected audience value for authorization |
| [#421](https://github.com/temporalio/temporal/issues/421) | 4 | Add admin command to dump dynamic config values |

### 5. Schedules & Cron (Medium Demand)

The schedules feature continues to evolve with user requests for enhanced functionality.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | Schedules - execution workflowid to be "as-is" (not unique per run) |
| [#5811](https://github.com/temporalio/temporal/issues/5811) | 12 | Support last day of month as a recurring schedule option |
| [#8205](https://github.com/temporalio/temporal/issues/8205) | 2 | Improve DST handling in schedules |
| [#8087](https://github.com/temporalio/temporal/issues/8087) | 1 | Skipped Action Metric for scheduled actions |
| [#5005](https://github.com/temporalio/temporal/issues/5005) | 0 | Allow overriding search attributes when backfilling |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | Upvotes | Impact |
|-------|-----|--------|
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | Scheduled Actions doesn't clear ContinuedFailure on null success payloads |
| [#4000](https://github.com/temporalio/temporal/issues/4000) | 2 | Concurrent map read and map write race condition |
| [#1119](https://github.com/temporalio/temporal/issues/1119) | 1 | ParentExecution not set in WorkflowExecutionInfo |
| [#7821](https://github.com/temporalio/temporal/issues/7821) | 0 | Workflow list takes different query for hot and archived |
| [#7566](https://github.com/temporalio/temporal/issues/7566) | 0 | Workflow task following ShutdownWorker should not time out |
| [#4094](https://github.com/temporalio/temporal/issues/4094) | 0 | Version info upgrade notification does not get cleared |
| [#3667](https://github.com/temporalio/temporal/issues/3667) | 0 | Incorrect RetryState in some scheduleToClose timeout cases |
| [#3284](https://github.com/temporalio/temporal/issues/3284) | 0 | Server returns status messages over metadata limit |
| [#3154](https://github.com/temporalio/temporal/issues/3154) | 0 | tdbg workflow show does not support pagination |
| [#266](https://github.com/temporalio/temporal/issues/266) | 0 | Matching service degradation due to large number of task lists |

### Potential Bugs (Need Investigation)

These issues are labeled as potential bugs and require triage to confirm or reclassify.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history causing issues |
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | Error during VisibilityDeleteExecution |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | docker-compose multirole sometimes stuck on boot |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | Logging/exception stack trace not capturing underlying errors |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 3 | Stale internode gRPC connections after pod termination |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | WorkflowTaskTimedOut if submitting large number of activities |
| [#7894](https://github.com/temporalio/temporal/issues/7894) | 2 | Cannot load Archived Workflows on UI even when archived in S3 |
| [#6977](https://github.com/temporalio/temporal/issues/6977) | 2 | Security vulnerabilities in admin-tools release |
| [#6976](https://github.com/temporalio/temporal/issues/6976) | 2 | Security vulnerabilities in server release |

---

## Community Contribution Opportunities

Issues marked as up-for-grabs or good-first-issue, sorted by community interest:

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | API/DevExp | Add ability for workflow to wait for completion of an external workflow |
| [#537](https://github.com/temporalio/temporal/issues/537) | API (Easy) | Add SignalWithStart/UpdateWithStart command |
| [#328](https://github.com/temporalio/temporal/issues/328) | Database | Run temporal on Amazon Keyspaces |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | Operations | Add health check handler for worker service |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | DevExp (Medium) | Add task queue query |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | DevExp | Optimize large payload fan-out to activities and child workflows |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | API | Add soft workflow timeout |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | Workflow | Do not fail continue as new on a new signal |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | API | Add SignalWithReset |
| [#983](https://github.com/temporalio/temporal/issues/983) | Operations | Logging/exception stack trace not capturing underlying errors |
| [#804](https://github.com/temporalio/temporal/issues/804) | API | Synchronous Start |
| [#453](https://github.com/temporalio/temporal/issues/453) | Operations | Implement docker healthcheck |

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >12 months old:** 373 (70% of open issues)
- **Issues >3 years old:** 217 (41% of open issues)

**Recommended for closure review:**

| Issue | Upvotes | Age | Reason |
|-------|-----|-----|--------|
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 5+ years | Long-standing feature request - needs decision |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2+ years | YDB support - community interest but no activity |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 3+ years | Child workflow transfer - needs roadmap decision |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | 3+ years | Health check handler - widely requested |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3+ years | Dynamic task queue routing - needs evaluation |

**Needs maintainer review:** Issues with 0 upvotes and no recent activity older than 2 years should be reviewed for continued relevance.

### Documentation Gaps

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| [#954](https://github.com/temporalio/temporal/issues/954) | 3 | Add multi-region deployment documentation |
| [#8461](https://github.com/temporalio/temporal/issues/8461) | 2 | Adding documentation for self-hosting temporal on cloud environments |
| [#1821](https://github.com/temporalio/temporal/issues/1821) | 2 | Document the Elasticsearch permissions required by Temporal |
| [#8652](https://github.com/temporalio/temporal/issues/8652) | 0 | Document current state of ScyllaDB as a Cassandra-compatible backend |
| [#2891](https://github.com/temporalio/temporal/issues/2891) | 0 | Document configuration (development.yaml, dynamicconfig) |
| [#1757](https://github.com/temporalio/temporal/issues/1757) | 0 | Document dynamic config behavior |

---

## Recommendations

1. **High Priority Features:**
   - External workflow wait capability (#680 - 70 upvotes)
   - Priority task queues (#1507 - 50 upvotes)
   - MongoDB support (#2318 - 46 upvotes)
   - Configuration documentation improvements (#2668 - 46 upvotes)
   - SignalWithStart/UpdateWithStart command (#537 - 30 upvotes)

2. **Bug Fixes:**
   - Investigate memory usage issues on history service (#4233)
   - Address schedule viewing timeouts (#7037)
   - Review security vulnerabilities in releases (#6976, #6977)
   - Fix concurrent map access race condition (#4000)

3. **Community:**
   - Promote easy-difficulty up-for-grabs issues to attract new contributors
   - Consider creating a "help wanted" label for high-impact issues needing assistance
   - The Keyspaces integration (#328) and health check handler (#2582) are good candidates for community contributions

4. **Housekeeping:**
   - Review and close or update 217 issues that are 3+ years old
   - Triage 126 potential-bug issues to confirm or reclassify
   - Address the growing backlog trend (+68 issues in 12 months) by closing stale issues and prioritizing high-impact work
