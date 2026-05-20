# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-05-20
**Total Open Issues:** 513
**Total Closed Issues:** 1049
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server repository carries 513 open issues across 1,562 total, with a 67% resolution rate and a healthy median close time of 44 calendar days. User demand is concentrated on a small number of high-leverage features — priority task queues, cross-workflow wait, and alternative database backends — each attracting 40–74 upvotes. The backlog grew by 27 issues over the last 12 months, driven by a burst of new feature requests and production bug reports, though the last 6 months show a slight net reduction as the team accelerated closures.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements / Feature Requests | 345 | High — largest demand segment; several top-voted items are multi-year open |
| Potential Bugs | 119 | High — includes production-impacting issues (goroutine leak, ringpop churn, race conditions) |
| Confirmed Bugs | 8 | Critical — small set but includes data-consistency and startup failures |
| Schedule-related Issues | 19 | Medium — active area with correctness and UX gaps |
| Operations / Observability | 19 | Medium — rolling-upgrade reliability, logging, and metric cardinality issues |
| Security (CVEs) | 2 | High — recent CVE reports in Docker images awaiting triage |
| Up-for-Grabs | 27 | Opportunity — well-scoped items suitable for community contribution |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 830 |
| Total Comments | 866 |
| Issues with Upvotes | 132 (26%) |
| Issues with Comments | 282 (55%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 67% (1049/1562) |
| Median Time to Close | 44 days (calendar) / 32 days (business) |
| Resolved within 30 days | 45% |
| Resolved within 90 days | 61% |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 193 | 166 | +27 |

📈 **Backlog Growing:** 27 more issues opened than closed in the last 12 months. The growth is concentrated in the first half of the window (Jun–Aug 2025); closures accelerated in early 2026 with January showing a net −18.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 98 |
| Issues Closed | 108 |
| Bugs Closed | 57 |
| Enhancements Completed | 25 |

### Popular Requests Resolved (Last 6 Months)

| Issue | 👍 | Title |
|-------|-----|-------|
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Add health check handler for worker service |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for Timers |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Documentation - How to use Temporal as an embedded library |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 13 | Support Azure Entra ID Authentication for PostgreSQL Backend |
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
| 4 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 12 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 5 | [#131](https://github.com/temporalio/temporal/issues/131) | 32 | 6 | Different retry options based on failure type |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart\UpdateWithStart command |
| 7 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent continues as new |
| 9 | [#328](https://github.com/temporalio/temporal/issues/328) | 23 | 18 | Try to run temporal on top of Amazon Keyspaces |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |
| 11 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | Support sqlite in production |
| 12 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | Add task queue query |
| 13 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3 | Implement dynamic task queue routing |
| 14 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | 6 | Schedules - add option for execution workflowid to be "as-is" |
| 15 | [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 1 | Official CockroachDB (CRDB) support |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 163 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 104 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 104 | MongoDB as Persistent |
| 5 | [#131](https://github.com/temporalio/temporal/issues/131) | 70 | Different retry options based on failure type |
| 6 | [#328](https://github.com/temporalio/temporal/issues/328) | 64 | Try to run temporal on top of Amazon Keyspaces |
| 7 | [#537](https://github.com/temporalio/temporal/issues/537) | 62 | Add SignalWithStart\UpdateWithStart command |
| 8 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 53 | Add ability to transfer child workflows to new parent run when parent continues as new |
| 9 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 48 | YDB Temporal support |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 48 | Ability to get all task queues per namespace |
| 11 | [#1460](https://github.com/temporalio/temporal/issues/1460) | 43 | Add task queue query |
| 12 | [#3366](https://github.com/temporalio/temporal/issues/3366) | 36 | Support sqlite in production |
| 13 | [#4795](https://github.com/temporalio/temporal/issues/4795) | 34 | Schedules - add option for execution workflowid to be "as-is" |
| 14 | [#1988](https://github.com/temporalio/temporal/issues/1988) | 33 | Implement dynamic task queue routing |
| 15 | [#8719](https://github.com/temporalio/temporal/issues/8719) | 28 | Stale internode gRPC connections after pod termination |

---

## Top Request Categories

### 1. Workflow Capabilities (Very High Demand)

Core workflow execution semantics that users need but the server does not yet expose. These requests span multi-year timeframes and attract continuous community upvotes.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 74 | Wait for completion of an arbitrary external workflow from within workflow code |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to a new parent when the parent continues-as-new |
| [#131](https://github.com/temporalio/temporal/issues/131) | 32 | Per-failure-type retry options (different backoff for transient vs. non-transient errors) |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | SignalWithStart / UpdateWithStart from within workflow code (not only via external API) |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | Soft workflow timeout (non-fatal, catchable in workflow code) |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | 5 | SignalWithReset API |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | 5 | Do not fail continue-as-new when a new signal arrives during the transition |

### 2. Task Queue Enhancements (High Demand)

Scheduling and dispatch control is the second-most-demanded area. Priority queues are actively under development (assigned, multi-comment thread), and related ordering and routing requests are accumulating.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Priority task queues with fair scheduling |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Dynamic task queue routing (route tasks to different queues based on attributes) |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List all task queues per namespace via API |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Task queue query API (inspect queue depth, workers, etc.) |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | Optimize large-payload fan-out to activities and child workflows |
| [#10244](https://github.com/temporalio/temporal/issues/10244) | 0 | Long-running workflows starved under steady arrival of fresh workflows on rate-limited queues |

### 3. Storage Backend Expansion (High Demand)

Operators and cloud-native teams want to run Temporal on datastores beyond the current Cassandra/PostgreSQL/MySQL set, or on managed variants of existing backends.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 48 | MongoDB as persistence backend |
| [#328](https://github.com/temporalio/temporal/issues/328) | 23 | Amazon Keyspaces (managed Cassandra) support |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB support |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | SQLite in production (beyond dev mode) |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |
| [#4044](https://github.com/temporalio/temporal/issues/4044) | 5 | PostgreSQL table partitioning support |
| [#6100](https://github.com/temporalio/temporal/issues/6100) | 0 | Multi-AZ PostgreSQL read replica support |

### 4. Configuration & Developer Experience (High Demand)

Operators frequently discover critical configuration options (such as database connection strings) only through GitHub issue searches. Documentation and naming consistency are the dominant themes.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document or rename `POSTGRES_SEEDS` and other undocumented Docker env vars |
| [#3383](https://github.com/temporalio/temporal/issues/3383) | 4 | Schema name selection for PostgreSQL (non-default schema support) |
| [#2341](https://github.com/temporalio/temporal/issues/2341) | 1 | Strict mode for configuration parsing (fail on unknown keys) |
| [#6946](https://github.com/temporalio/temporal/issues/6946) | 0 | PostgreSQL password in config file (instead of env var only) |
| [#2621](https://github.com/temporalio/temporal/issues/2621) | 5 | Align TLS enable env var names between temporal-sql-tool and server |

### 5. Operations & Reliability (Medium Demand)

Rolling upgrades, graceful shutdown, and metric correctness requests cluster around keeping production Temporal clusters healthy during lifecycle events.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Error-free rolling bounces and upgrades |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Graceful shutdown without spurious "Error stopping ringpop" log noise |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | Exception stack traces not capturing underlying errors in logs |
| [#9945](https://github.com/temporalio/temporal/issues/9945) | 0 | Matching service unbounded Prometheus metric cardinality growth |
| [#9954](https://github.com/temporalio/temporal/issues/9954) | 0 | Negative value in `cache_pinned_usage` Prometheus metric |

### 6. Schedules (Medium Demand)

The Schedules feature is maturing but accumulating correctness and UX gaps. Several issues involve incorrect behavior rather than missing features.

| Issue | 👍 | Request |
|-------|-----|---------|
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | Allow schedule's execution workflow ID to be used verbatim (not suffixed) |
| [#8205](https://github.com/temporalio/temporal/issues/8205) | 2 | Improved DST (daylight-saving time) handling |
| [#8581](https://github.com/temporalio/temporal/issues/8581) | 2 | Allow updating memo on existing scheduled actions |
| [#8606](https://github.com/temporalio/temporal/issues/8606) | 0 | TriggerImmediatelyRequest should accept workflow arguments |
| [#10058](https://github.com/temporalio/temporal/issues/10058) | 0 | IntervalSpec should advance by calendar days in schedule timezone |
| [#10168](https://github.com/temporalio/temporal/issues/10168) | 0 | API key rotation with tcld unpauses paused schedules (regression) |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | 👍 | Impact |
|-------|-----|--------|
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 10 | Stale internode gRPC connections after Kubernetes pod termination; repeated `i/o timeout` dial errors that do not self-heal |
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 7 | Flood of `VisibilityDeleteExecution` errors after a transient DB access failure; workflows visible past retention |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing a schedule in the UI/API returns 504 `context deadline exceeded` |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | `docker-compose` multirole sometimes hangs on boot (race in service startup ordering) |
| [#10321](https://github.com/temporalio/temporal/issues/10321) | 0 | SQL transaction race in `TransferStartChildExecution` causes permanent parent/child workflow stall |
| [#9987](https://github.com/temporalio/temporal/issues/9987) | 3 | Ringpop membership churn after v1.30.x upgrade; zombie IPs in Cassandra cause continuous gRPC EOF errors |
| [#4000](https://github.com/temporalio/temporal/issues/4000) | 2 | Concurrent map read/write panic on startup with PostgreSQL backend |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | `WorkflowTaskTimedOut` when submitting a large number of activities in a single workflow task |

### Potential Bugs (Need Investigation)

| Issue | 👍 | Area |
|-------|-----|------|
| [#6323](https://github.com/temporalio/temporal/issues/6323) | 0 | Frontend service goroutine and memory leak — heap and goroutine count grows without any workflows running |
| [#10286](https://github.com/temporalio/temporal/issues/10286) | 0 | Parent/child workflow stuck after failover (assigned, under investigation) |
| [#10320](https://github.com/temporalio/temporal/issues/10320) | 0 | Workflow task hang on cold start; matching service rejects retries with "task already started" |
| [#10312](https://github.com/temporalio/temporal/issues/10312) | 0 | Schedule with microsecond offset fires only once instead of repeating |
| [#9752](https://github.com/temporalio/temporal/issues/9752) | 0 | Unpaused schedules incorrectly deleted immediately after being unpaused |
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | Scheduled Actions does not clear `ContinuedFailure` on null success payload |
| [#10224](https://github.com/temporalio/temporal/issues/10224) | 0 | Replication tasks not cleaned up on source cluster when source/target differ in retention |
| [#9930](https://github.com/temporalio/temporal/issues/9930) | 1 | PostgreSQL visibility database migration fails going from 1.29 to 1.30 |

---

## Security Issues

Two open CVE reports (May 2026) for the official Temporal Docker images should be triaged promptly:

| Issue | Title |
|-------|-------|
| [#10284](https://github.com/temporalio/temporal/issues/10284) | [Security] CVEs in Temporal Docker Images — 1.30.4.1 |
| [#10263](https://github.com/temporalio/temporal/issues/10263) | [Security] Multiple CVEs in Temporal Docker Image — MySQL Dependencies |

---

## Community Contribution Opportunities

The following issues are labeled `up-for-grabs` or `good first issue` and are well-scoped for external contributors:

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | Workflow API | Wait for external workflow completion from workflow code |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | Task Queues | Task queue query API (medium difficulty) |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | Performance | Optimize large-payload fan-out to activities/child workflows |
| [#537](https://github.com/temporalio/temporal/issues/537) | Workflow API | SignalWithStart from workflow code (easy difficulty) |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | Workflow API | Soft workflow timeout |
| [#983](https://github.com/temporalio/temporal/issues/983) | Logging | Fix stack trace capture for underlying errors (good first issue) |
| [#778](https://github.com/temporalio/temporal/issues/778) | API / Events | Add ScheduleToStart timeout to WorkflowTaskScheduledEvent (easy, good first issue) |
| [#503](https://github.com/temporalio/temporal/issues/503) | Activity Events | Record activity started/failed event for retried activities on workflow completion (easy, good first issue) |
| [#1338](https://github.com/temporalio/temporal/issues/1338) | Workflow Reset | Add server-side logic for determining reset point (good first issue) |
| [#2341](https://github.com/temporalio/temporal/issues/2341) | Config | Strict mode for configuration parsing |
| [#1018](https://github.com/temporalio/temporal/issues/1018) | API | Add `CANCEL_REQUESTED` workflow status (easy) |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | API | SignalWithReset API |

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 233 (45% of open backlog)
- **Issues >12 months with no activity:** 352 (69% of open backlog)
- **Recommended for closure:** Issues with no comments, no upvotes, and no recent activity older than 3 years that describe problems likely solved by subsequent releases (e.g., [#471](https://github.com/temporalio/temporal/issues/471) Docker multi-interface bind, [#1579](https://github.com/temporalio/temporal/issues/1579) Cassandra tombstone issue).
- **Needs maintainer review:** High-upvote stale issues — [#5302](https://github.com/temporalio/temporal/issues/5302) (YDB, 23 upvotes, last updated Jan 2024), [#4180](https://github.com/temporalio/temporal/issues/4180) (CockroachDB, 13 upvotes, last updated Jun 2023), [#1988](https://github.com/temporalio/temporal/issues/1988) (dynamic task queue routing, 15 upvotes, last updated Oct 2024) — should be triaged to confirm intent, set a milestone, or closed with explanation.

### Documentation Gaps

| Issue | Description |
|-------|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | `POSTGRES_SEEDS` and related Docker environment variables are undocumented; 46 upvotes indicate widespread pain |
| [#3383](https://github.com/temporalio/temporal/issues/3383) | PostgreSQL non-default schema support is undocumented or unsupported |
| [#2621](https://github.com/temporalio/temporal/issues/2621) | TLS env var names differ between `temporal-sql-tool` and the server — confuses operators |
| [#6946](https://github.com/temporalio/temporal/issues/6946) | PostgreSQL password can only be set via env var; config-file approach not documented |

---

## Recommendations

1. **High Priority Features:**
   - [#680](https://github.com/temporalio/temporal/issues/680) — External workflow wait (74 upvotes, 5+ years open, marked `up-for-grabs`). The highest-demand open issue in the repository.
   - [#1507](https://github.com/temporalio/temporal/issues/1507) — Priority task queues (50 upvotes, actively assigned). The first two milestones (priority, fairness) are GA; fine-grained ordering should follow.
   - [#131](https://github.com/temporalio/temporal/issues/131) — Per-failure-type retry options (32 upvotes). A targeted API addition with broad SDK impact.
   - [#2668](https://github.com/temporalio/temporal/issues/2668) — Document or rename undocumented Docker env vars (46 upvotes). Low implementation cost, high user-experience payoff.

2. **Bug Fixes:**
   - [#8719](https://github.com/temporalio/temporal/issues/8719) — Stale gRPC connections after pod termination in Kubernetes (10 upvotes, already assigned).
   - [#10321](https://github.com/temporalio/temporal/issues/10321) — SQL transaction race causing permanent workflow stall (newly reported, PostgreSQL deployments affected).
   - [#9987](https://github.com/temporalio/temporal/issues/9987) — Ringpop churn regression in v1.30.x causing cluster-wide gRPC failures (already assigned).
   - [#6323](https://github.com/temporalio/temporal/issues/6323) — Frontend service goroutine/memory leak (assigned, long-standing).
   - [#10284](https://github.com/temporalio/temporal/issues/10284) / [#10263](https://github.com/temporalio/temporal/issues/10263) — Security CVEs in Docker images (triage promptly).

3. **Community:**
   - Promote [#983](https://github.com/temporalio/temporal/issues/983), [#503](https://github.com/temporalio/temporal/issues/503), [#778](https://github.com/temporalio/temporal/issues/778), and [#1338](https://github.com/temporalio/temporal/issues/1338) as `good first issue` entry points; they are small, well-defined, and do not require deep architectural knowledge.
   - Consider adding contribution guidelines for database backend plugins to encourage community-led efforts on MongoDB ([#2318](https://github.com/temporalio/temporal/issues/2318)) and YDB ([#5302](https://github.com/temporalio/temporal/issues/5302)).

4. **Housekeeping:**
   - Run a triage pass over the 233 issues older than 3 years. At minimum, close issues that reproduce problems fixed in subsequent releases and leave a brief resolution note.
   - Resolve [#2668](https://github.com/temporalio/temporal/issues/2668) by publishing a complete reference for Docker/compose environment variables — this single documentation fix would address the highest-comment configuration issue in the repository.
   - Review the 19 `schedules`-labeled issues as a batch; the feature is mature enough that remaining issues should be assessed for milestone assignment or closure.
