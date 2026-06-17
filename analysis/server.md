# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-06-16
**Total Open Issues:** 530
**Total Closed Issues:** 1062
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server repository carries 530 open issues against 1062 closed (67% resolution rate), with strong user engagement: 778 upvotes and 867 comments spread across 132 upvoted and 289 commented issues. The dominant themes among the most-upvoted requests are alternative persistence backends (MongoDB, sqlite, CockroachDB, YDB, Keyspaces, ScyllaDB), workflow/task-queue capabilities (external-workflow await, priority queues, dynamic routing, SignalWithStart, retry per failure type), and operational ergonomics (rolling upgrades, OpenSearch support, schedule semantics). The backlog is growing modestly (+29 over the last 12 months) and skews old — 45% of open issues are 3+ years old.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements / feature requests | 348 | High — represents bulk of user demand; needs triage to extract committed roadmap items |
| Potential bugs (needs triage) | 123 | High — many are recent, high-severity reports (replication, scheduler, reset, persistence) |
| Persistence / database backends | ~41 | High — top-upvoted theme spanning MongoDB, sqlite, CockroachDB, YDB, Keyspaces, ScyllaDB, SurrealDB |
| Schedules | 32 | Medium-High — multiple correctness bugs (DST, microseconds, pause/unpause, deadlock) plus feature gaps |
| Visibility / search-attributes | ~35 | Medium — long tail of feature gaps and a few critical correctness bugs |
| Confirmed bugs | 8 | Medium — small bug-labeled set; most issues sit under `potential-bug` |
| Up-for-grabs | 27 | Medium — community-contribution ready, but most have 0 upvotes |
| Security / auth | ~9 | Medium — recent pgx CVE, JWT nesting, SPIFFE, custom auth plugin |
| Stale (>12 months) | 355 (67%) | Medium — many are old feature requests that need accept/decline decisions |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 778 |
| Total Comments | 867 |
| Issues with Upvotes | 132 (25%) |
| Issues with Comments | 289 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 67% (1062/1592) |
| Median Time to Close | 44 days (calendar) / 32 days (business) |
| Resolved within 30 days | 44% |
| Resolved within 90 days | 61% |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 202 | 173 | +29 |

📈 **Backlog Growing:** 29 more issues opened than closed in the last 12 months. The trend is mostly steady (single-digit net change most months), with one large net-negative spike (-18 in 2026-01) suggesting periodic backlog cleanups rather than sustained shrinking. Recent months (May–June 2026) are net-positive again.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 121 |
| Issues Closed | 118 |
| Bugs Closed | 63 |
| Enhancements Completed | 27 |

Bug closures (63) significantly outpaced enhancement completion (27), consistent with the team focusing on incoming reliability/correctness reports while feature work is concentrated in a smaller number of larger efforts.

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (or better yet, use a descriptive name) |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Add health check handler for worker service |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for Timers |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Documentation - How to use Temporal as an embedded library |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 13 | Support Azure Entra ID Authentication for PostgreSQL |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 10 | Stale internode gRPC connections after pod termination |
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history |
| [#9156](https://github.com/temporalio/temporal/issues/9156) | 7 | Cloud Database Cert/IAM Connections |
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| [#9280](https://github.com/temporalio/temporal/issues/9280) | 4 | v1.29.3 vulnerabilities |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 74 | 15 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 48 | 8 | MongoDB as Persistent |
| 4 | [#131](https://github.com/temporalio/temporal/issues/131) | 32 | 6 | Different retry options based on failure type |
| 5 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart / UpdateWithStart command |
| 6 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 7 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue-as-new |
| 8 | [#328](https://github.com/temporalio/temporal/issues/328) | 23 | 18 | Try to run temporal on top of Amazon Keyspaces |
| 9 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |
| 10 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | Support sqlite in production |
| 11 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | Add task queue query |
| 12 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3 | Implement dynamic task queue routing |
| 13 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | 6 | Schedules - option for execution workflowid to be "as-is" (not unique per run) |
| 14 | [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 1 | Official CockroachDB (CRDB) support |
| 15 | [#5811](https://github.com/temporalio/temporal/issues/5811) | 12 | 0 | Support last day of month as a recurring schedule option |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 163 | Wait for completion of external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 104 | MongoDB as Persistent |
| 4 | [#131](https://github.com/temporalio/temporal/issues/131) | 70 | Different retry options based on failure type |
| 5 | [#328](https://github.com/temporalio/temporal/issues/328) | 64 | Amazon Keyspaces persistence |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | SignalWithStart / UpdateWithStart |
| 7 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Transfer child workflows on continue-as-new |
| 8 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 48 | YDB support |
| 9 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 48 | List task queues per namespace |
| 10 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 43 | Add task queue query |
| 11 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 36 | Support sqlite in production |
| 12 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 34 | Schedules: "as-is" workflowid option |
| 13 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 33 | Dynamic task queue routing |
| 14 | [#4180](https://github.com/temporalio/temporal/issues/4180) | 27 | Official CockroachDB support |
| 15 | [#2617](https://github.com/temporalio/temporal/issues/2617) | 27 | Per-completion-type retention |

---

## Top Request Categories

The categories below emerged from clustering the most-upvoted open issues and the largest area buckets in `issues-by-area.json`.

### 1. Persistence Backends (High demand)

The single largest theme by upvotes. Users want alternatives to the supported Cassandra/Postgres/MySQL stack — both fully-managed cloud DBs and lightweight options for self-hosting.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 48 | MongoDB as Persistent |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 23 | Run Temporal on top of Amazon Keyspaces |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | Support sqlite in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |
| [#4105](https://github.com/temporalio/temporal/issues/4105) | 8 | Full support for ScyllaDB as persistence layer |
| [#10177](https://github.com/temporalio/temporal/issues/10177) | 0 | Move to ScyllaDB GoCQL driver (perf) |
| [#9509](https://github.com/temporalio/temporal/issues/9509) | 0 | Add support for SurrealDB |
| [#10442](https://github.com/temporalio/temporal/issues/10442) | 0 | Enable use of database read replicas |
| [#10171](https://github.com/temporalio/temporal/issues/10171) | 0 | MySQL persistence: multi-host / SRV-based endpoint discovery |

### 2. Workflow & Task-Queue Capabilities (High demand)

Long-standing API/runtime feature gaps. Several are 5+ years old and continue to attract votes.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 74 | Wait for completion of an external workflow |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Provide priority task queues |
| [#131](https://github.com/temporalio/temporal/issues/131) | 32 | Different retry options based on failure type |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | SignalWithStart / UpdateWithStart |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows on parent continue-as-new |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List task queues per namespace |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Add task queue query |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Implement dynamic task queue routing |
| [#7666](https://github.com/temporalio/temporal/issues/7666) | — | Per workflow-type concurrency limit (semaphore) |
| [#2617](https://github.com/temporalio/temporal/issues/2617) | 10 | Per-completion-type retention period |

### 3. Schedules (Medium-High demand)

Schedules are a hotspot — multiple subtle correctness bugs (DST handling, microsecond offsets, pause/unpause, retry-chain deadlock) alongside ergonomic gaps (memo updates, last-day-of-month, skipped-action metrics).

| Issue | 👍 | Request |
|-------|-----|---------|
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | Schedules: option for "as-is" execution workflowid |
| [#5811](https://github.com/temporalio/temporal/issues/5811) | 12 | Support last day of month as recurring schedule |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | [bug] Schedule view throws 504 "context deadline exceeded" |
| [#9383](https://github.com/temporalio/temporal/issues/9383) | — | Allow scheduling beyond maxCalendarYear 2100 |
| [#8205](https://github.com/temporalio/temporal/issues/8205) | 2 | Improve DST handling in schedules |
| [#8581](https://github.com/temporalio/temporal/issues/8581) | 2 | Update Schedule memo |
| [#8087](https://github.com/temporalio/temporal/issues/8087) | 1 | Skipped-action metric for scheduled actions |
| [#10579](https://github.com/temporalio/temporal/issues/10579) | 0 | Deadlock after Workflow ID reuse with retried scheduled action |
| [#10312](https://github.com/temporalio/temporal/issues/10312) | 0 | Schedule with microseconds offset launches only once |
| [#10168](https://github.com/temporalio/temporal/issues/10168) | 0 | API-key rotation unpauses previously-paused schedules |
| [#10058](https://github.com/temporalio/temporal/issues/10058) | 0 | IntervalSpec ignores timezone for day-sized intervals (DST drift) |
| [#9752](https://github.com/temporalio/temporal/issues/9752) | 0 | Unpaused schedules deleted after retention boundary |

### 4. Operations, Upgrades, Deployment (Medium demand)

Issues about running Temporal at scale: rolling upgrades, schema migrations, helm/Istio, Docker.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Aim for error-free rolling bounces and upgrades |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Support log-less graceful shutdown |
| [#10358](https://github.com/temporalio/temporal/issues/10358) | 0 | Cannot upgrade to 1.30.4 without downtime (visibility table lock) |
| [#10236](https://github.com/temporalio/temporal/issues/10236) | 0 | Helm schema-job init containers fail with Istio STRICT mTLS |
| [#10410](https://github.com/temporalio/temporal/issues/10410) | 0 | Diagnostic commands don't support embedded config templates |
| [#10245](https://github.com/temporalio/temporal/issues/10245) | 0 | `databaseCommand` field not exposed via Docker env vars |
| [#7625](https://github.com/temporalio/temporal/issues/7625) | — | Per-job RPS controls for scavenger cleanup |
| [#7657](https://github.com/temporalio/temporal/issues/7657) | — | Temporal + Visibility schemas use same `schema_version` table |

### 5. Visibility, Archival & Search (Medium demand)

Long tail of feature gaps around archival retrieval, search-attribute querying, and large-payload handling.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#3056](https://github.com/temporalio/temporal/issues/3056) | 11 | Support wildcard search for workflows |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | Optimize large-payload fan-out to activities/children |
| [#10367](https://github.com/temporalio/temporal/issues/10367) | 0 | Archival: configurable workflow-status filter |
| [#8648](https://github.com/temporalio/temporal/issues/8648) | — | Add ExecutionStatus as visibility column for archived executions |
| [#8235](https://github.com/temporalio/temporal/issues/8235) | — | GetWorkflow fails to retrieve archived executions |
| [#7894](https://github.com/temporalio/temporal/issues/7894) | 2 | Cannot load archived workflows on UI (504/timeouts) |
| [#7930](https://github.com/temporalio/temporal/issues/7930) | 0 | Replace deprecated olivere/elastic v7 with official client |
| [#7421](https://github.com/temporalio/temporal/issues/7421) | — | Migrate from AWS SDK Go v1 (EOL) to v2 |
| [#8349](https://github.com/temporalio/temporal/issues/8349) | — | Relative-time syntax in visibility queries |

### 6. Security, Auth & Supply Chain (Medium demand)

Authentication flexibility, dependency CVEs, and release provenance.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#9152](https://github.com/temporalio/temporal/issues/9152) | — | Native SPIFFE support |
| [#10600](https://github.com/temporalio/temporal/issues/10600) | — | Add signed attestations to releases (SLSA) |
| [#10699](https://github.com/temporalio/temporal/issues/10699) | 0 | pgx v5.9.2 missing auth downgrade protection (CWE-306) |
| [#10676](https://github.com/temporalio/temporal/issues/10676) | 0 | pgx v5.9.2 vulnerable to auth downgrade (CWE-306) |
| [#9928](https://github.com/temporalio/temporal/issues/9928) | — | JWT ClaimMapper does not support nested claims |
| [#9625](https://github.com/temporalio/temporal/issues/9625) | — | JSONPath nested claim names |
| [#8636](https://github.com/temporalio/temporal/issues/8636) | 3 | Plugin architecture for custom authentication |
| [#5156](https://github.com/temporalio/temporal/issues/5156) | 4 | Allow configuration of expected audience for Temporal authorization |
| [#4902](https://github.com/temporalio/temporal/issues/4902) | 0 | Custom authentication between frontend and other services |
| [#7560](https://github.com/temporalio/temporal/issues/7560) | — | Regex-based JWT permissions parsing |

---

## Bugs Requiring Attention

The repo uses `bug` (8 open) and `potential-bug` (123 open) as separate labels. The semantic cards surface many `potential-bug` items at high/critical severity that warrant prompt triage — these are clustered around replication, workflow reset, schedules, and SQL persistence.

### Confirmed Bugs (label: `bug`)

Only 8 issues carry the explicit `bug` label. The most engaged ones:

| Issue | 👍 | Impact |
|-------|-----|--------|
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 7 | Error during VisibilityDeleteExecution |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | Logging/exception stack trace not capturing underlying errors |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | docker-compose multirole sometimes stuck on boot |

### Critical-Severity Potential Bugs (from semantic cards)

These open `potential-bug` items are flagged at severity `critical` by the semantic analysis pipeline and span correctness-critical subsystems (history, replication, scheduler, parent-child workflows).

| Issue | Subsystem | Title |
|-------|-----------|-------|
| [#10639](https://github.com/temporalio/temporal/issues/10639) | workflow-reset | Parent stuck after reset if child completes after parent failure |
| [#10579](https://github.com/temporalio/temporal/issues/10579) | scheduler | Schedule deadlocks after Workflow ID reuse with retry-chain |
| [#10548](https://github.com/temporalio/temporal/issues/10548) | cache | History service crash: concurrent map access in update registry |
| [#10436](https://github.com/temporalio/temporal/issues/10436) | replication/DLQ | DLQ replication tasks inaccessible when shard counts differ |
| [#10321](https://github.com/temporalio/temporal/issues/10321) | child-workflows | Race in TransferStartChildExecution causes permanent failure |
| [#10320](https://github.com/temporalio/temporal/issues/10320) | matching | Cold-start hang on 1.31.0; matching service permanently blocked |
| [#9987](https://github.com/temporalio/temporal/issues/9987) | ringpop | Continuous membership churn after upgrade to v1.30.x |
| [#9747](https://github.com/temporalio/temporal/issues/9747) | sql/conn-pool | DatabaseHandle.reconnect() creates unbounded sql.DB pools on MySQL outage |
| [#9021](https://github.com/temporalio/temporal/issues/9021) | history-scavenger | Premature deletion of active workflow history (data loss) |

### High-Severity Potential Bugs (selected)

A broad sample of high-severity recent reports clustered by subsystem:

- **Replication / multi-cluster:** [#10520](https://github.com/temporalio/temporal/issues/10520), [#10519](https://github.com/temporalio/temporal/issues/10519), [#10490](https://github.com/temporalio/temporal/issues/10490), [#10224](https://github.com/temporalio/temporal/issues/10224), [#10286](https://github.com/temporalio/temporal/issues/10286)
- **Workflow reset:** [#10690](https://github.com/temporalio/temporal/issues/10690), [#10639](https://github.com/temporalio/temporal/issues/10639)
- **Persistence / SQL:** [#10392](https://github.com/temporalio/temporal/issues/10392) (prepared-statement leak), [#10358](https://github.com/temporalio/temporal/issues/10358) (1.30.4 visibility migration downtime), [#10145](https://github.com/temporalio/temporal/issues/10145) (PG index bloat), [#9522](https://github.com/temporalio/temporal/issues/9522) (MySQL 8.0.45 schema), [#8202](https://github.com/temporalio/temporal/issues/8202) (GKE crashloop on node replacement)
- **Scheduler:** [#10312](https://github.com/temporalio/temporal/issues/10312), [#10168](https://github.com/temporalio/temporal/issues/10168), [#10058](https://github.com/temporalio/temporal/issues/10058), [#9752](https://github.com/temporalio/temporal/issues/9752)
- **Worker-deployment / versioning:** [#9581](https://github.com/temporalio/temporal/issues/9581)
- **Search / visibility:** [#8013](https://github.com/temporalio/temporal/issues/8013) (incorrect results on concurrent creation), [#7894](https://github.com/temporalio/temporal/issues/7894) (archived UI timeouts)
- **Service-resolver / membership:** [#10730](https://github.com/temporalio/temporal/issues/10730) (routes to draining members)
- **Task-queue fairness:** [#10244](https://github.com/temporalio/temporal/issues/10244) (rate-limited queue starvation)
- **Dependency security:** [#10699](https://github.com/temporalio/temporal/issues/10699), [#10676](https://github.com/temporalio/temporal/issues/10676) (pgx CVE)

### Potential Bugs Needing Triage

123 open issues carry the `potential-bug` label without an explicit `bug` confirmation. Roughly half were filed in 2026 and most have 0 upvotes / 0 comments, suggesting they originate from internal reviews or static analysis rather than user reports. A focused triage pass to either confirm-and-prioritize or close as not-a-bug would meaningfully reduce backlog noise.

---

## Community Contribution Opportunities

27 issues are labeled `up-for-grabs` and 6 carry `good first issue`. Most have 0 upvotes, suggesting they need promotion. Notable opportunities with non-trivial user demand:

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | API / workflow | Wait for completion of an external workflow (74 👍) |
| [#537](https://github.com/temporalio/temporal/issues/537) | API | SignalWithStart / UpdateWithStart command (30 👍) |
| [#328](https://github.com/temporalio/temporal/issues/328) | Persistence | Amazon Keyspaces support (23 👍) |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | Task queues | Add task queue query (16 👍) |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | Performance | Optimize large-payload fan-out (12 👍) |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | Workflow | Add soft workflow timeout (7 👍) |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | Workflow | Do not fail continue-as-new on a new signal (5 👍) |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | API | Add SignalWithReset (5 👍) |
| [#983](https://github.com/temporalio/temporal/issues/983) | Logging | Logging/exception stack trace not capturing underlying errors (5 👍, also `good first issue`) |
| [#804](https://github.com/temporalio/temporal/issues/804) | API | Synchronous Start (5 👍) |
| [#453](https://github.com/temporalio/temporal/issues/453) | Docker | Implement docker healthcheck (2 👍) |
| [#503](https://github.com/temporalio/temporal/issues/503) | Workflow events | Record activity started/failed for retry on workflow completion (2 👍, `good first issue`) |
| [#2491](https://github.com/temporalio/temporal/issues/2491) | Logging | Throttled logger should not throttle rare errors |
| [#2470](https://github.com/temporalio/temporal/issues/2470) | Archival | Don't assume archival credentials stay constant |
| [#2341](https://github.com/temporalio/temporal/issues/2341) | Config | Strict mode for configuration parsing |

Note that several of these are large API/workflow-engine changes (#680, #537, #1460) more suitable for internal teams than external contributors — relabeling these as roadmap items would set clearer expectations.

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 240 (45% of all open)
- **Issues >12 months stale:** 355 (67% of all open)

The most-upvoted stale issues are dominated by long-standing feature requests that have neither been accepted nor declined:

| Issue | 👍 | Last Updated | Status Recommendation |
|-------|-----|--------------|------------------------|
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2024-01 | YDB support — decide accept/decline |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 2024-10 | Transfer child workflows on CAN — should be roadmap |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 2024-10 | Dynamic task queue routing — clarify against Worker Versioning |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 2023-06 | CockroachDB — decline or roadmap |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | 2023-03 | Large-payload fan-out optimization |
| [#3056](https://github.com/temporalio/temporal/issues/3056) | 11 | 2023-03 | Wildcard search for workflows |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | 2024-10 | Error-free rolling upgrades |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | 2024-01 | Log-less graceful shutdown |
| [#4829](https://github.com/temporalio/temporal/issues/4829) | 8 | 2023-09 | Specify task queue when resetting execution |
| [#487](https://github.com/temporalio/temporal/issues/487) | 8 | 2023-06 | Separate retention period from uniqueness window |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | 2023-03 | Soft workflow timeout |
| [#3468](https://github.com/temporalio/temporal/issues/3468) | 6 | 2024-06 | List task queues for a namespace |
| [#130](https://github.com/temporalio/temporal/issues/130) | 6 | 2023-03 | Cron activity |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | 2021-07 | Stack-trace capture — five years stale despite `good first issue` |

**Recommended closure candidates:** issues with 0 upvotes / 0 comments and no activity in 3+ years that are configuration-cosmetic (e.g., [#109](https://github.com/temporalio/temporal/issues/109), [#108](https://github.com/temporalio/temporal/issues/108), [#682](https://github.com/temporalio/temporal/issues/682), [#778](https://github.com/temporalio/temporal/issues/778)) — close with explanation, retain in archive.

**Needs maintainer decision (accept-to-roadmap or decline-with-rationale):** the 14 items in the table above.

### Documentation Gaps

13 docs-related open issues. Notable ones:

| Issue | 👍 | Topic |
|-------|-----|-------|
| [#8461](https://github.com/temporalio/temporal/issues/8461) | 2 | Self-hosting Temporal on cloud environments |
| [#1821](https://github.com/temporalio/temporal/issues/1821) | 2 | Elasticsearch permissions required by Temporal |
| [#954](https://github.com/temporalio/temporal/issues/954) | 3 | Multi-region deployment documentation |
| [#2891](https://github.com/temporalio/temporal/issues/2891) | 0 | Document configuration (development.yaml, dynamicconfig) |
| [#1757](https://github.com/temporalio/temporal/issues/1757) | 0 | Document dynamic config behavior |
| [#7947](https://github.com/temporalio/temporal/issues/7947) | — | Discoverability of dynamic configuration keys (CLI/webui) |

Documenting dynamic config and operational deployments would reduce a sizeable category of incoming support questions.

---

## Recommendations

1. **High Priority Features:**
   - Decide on a persistence-backend strategy and publish it. The top theme (#2318 MongoDB, #5302 YDB, #328 Keyspaces, #3366 sqlite, #4180 CockroachDB, #4105 ScyllaDB) collectively represents 100+ upvotes — even a definitive "won't support, here's why" response would unblock community plans.
   - Address core workflow capabilities consistently requested for years: #680 wait-for-external-workflow, #1507 priority task queues, #131 retry-per-failure-type, #537 SignalWithStart/UpdateWithStart, #2609 child-transfer on continue-as-new.
   - Schedules quality push: fix #10579, #10312, #10168, #10058, #9752 in a coordinated release; implement #5811 last-day-of-month and #8205 DST handling.

2. **Bug Fixes (Critical first):**
   - The 9 critical-severity items listed above (especially #9021 history-scavenger data-loss risk, #10320 cold-start hang, #10548 history crash, #10436 DLQ inaccessibility) should be triaged into the next maintenance release.
   - Resolve the pgx CVE pair (#10699 / #10676) by bumping to v5.10.0+.
   - Investigate the 1.30.x upgrade pain points (#10358 visibility migration, #9987 ringpop churn) as they directly impact users upgrading.

3. **Community Contributions:**
   - Curate a smaller list of *true* good-first-issues with actual scope-bounded work (e.g., docker healthcheck #453, throttled logger #2491, config strict mode #2341), and remove `up-for-grabs` from API-design issues (#680, #537, #1460) that require maintainer ownership.
   - Promote the curated list visibly (release notes / blog / pinned issue).

4. **Housekeeping:**
   - Decision pass on the 14 stale-but-popular feature requests in the table above — accept to roadmap or decline with rationale.
   - Triage the 123 `potential-bug` items: confirm to `bug`, or close as not-reproducible / superseded.
   - Mass-review and close obvious zombie issues (0 engagement, 3+ years, configuration-cosmetic) with a uniform "closing for inactivity" note.
   - Document dynamic-config keys, multi-region deployment, and Elasticsearch permissions to reduce inbound questions.
