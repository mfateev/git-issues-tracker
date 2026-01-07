# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 533
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-temporal/issues.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server has 533 open issues with exceptional community engagement (900 upvotes, 872 comments). **Two new CVEs reported this week require immediate patching.** Top requests focus on workflow capabilities (#680 - external workflow wait, 70 upvotes) and priority task queues (#1507, 50 upvotes). The repo has significant tech debt with 218 issues older than 3 years.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 353 | Medium - Feature requests |
| Potential Bugs | 128 | High - Need investigation |
| Confirmed Bugs | 11 | High |
| Up-for-grabs | 30 | Community contribution |
| Stale Issues (>3 years) | 218 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 900 |
| Total Comments | 872 |
| Issues with Upvotes | 144 (27%) |
| Issues with Comments | 290 (55%) |

---

## URGENT: Security Vulnerabilities (New This Week)

Two CVEs were reported in the golang crypto library:

| Issue | CVE | Description |
|-------|-----|-------------|
| [#8866](../repos/temporalio-temporal/issues.md#8866) | CVE-2025-61729 | golang:crypto/x509 vulnerability |
| [#8865](../repos/temporalio-temporal/issues.md#8865) | CVE-2025-61727 | golang:crypto/x509 vulnerability |

**Recommendation:** Prioritize patching these in the next server release.

---

## Recent Issues (Last 30 Days)

12 new issues including security vulnerabilities and operational concerns:

| Date | Issue | Type | Description |
|------|-------|------|-------------|
| 2026-01-07 | [#8955](../repos/temporalio-temporal/issues.md#8955) | Enhancement | **MCP Server for Temporal Workflows** (NEW) |
| 2026-01-07 | [#8953](../repos/temporalio-temporal/issues.md#8953) | Bug | **Scheduled time incorrect** (NEW) |
| 2026-01-06 | [#8943](../repos/temporalio-temporal/issues.md#8943) | Bug | Missing admin-tools image for 1.29.2 |
| 2025-12-29 | [#8909](../repos/temporalio-temporal/issues.md#8909) | Bug | Elasticsearch deprecation warnings in v1.29.1 |
| 2025-12-24 | [#8902](../repos/temporalio-temporal/issues.md#8902) | Bug | **History service memory leak** |
| 2025-12-24 | [#8901](../repos/temporalio-temporal/issues.md#8901) | Enhancement | Skip re-executing completed activities |
| 2025-12-20 | [#8889](../repos/temporalio-temporal/issues.md#8889) | Enhancement | PR review enhancement with Hikari |
| 2025-12-18 | [#8866](../repos/temporalio-temporal/issues.md#8866) | **Security** | CVE-2025-61729 |
| 2025-12-18 | [#8865](../repos/temporalio-temporal/issues.md#8865) | **Security** | CVE-2025-61727 |
| 2025-12-18 | [#8864](../repos/temporalio-temporal/issues.md#8864) | Bug | PostgreSQL "Workflow Task in failed state" |
| 2025-12-16 | [#8833](../repos/temporalio-temporal/issues.md#8833) | Bug | Scheduler not showing triggerImmediately runs |
| 2025-12-10 | [#8790](../repos/temporalio-temporal/issues.md#8790) | Bug | history_node table unbounded growth |

**Patterns:**
- Security vulnerabilities need immediate attention
- History service memory issues (#8902) need investigation
- Database growth issues (#8790) affect scale operations
- Multiple scheduler/timing issues (#8953, #8833) need investigation

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](../repos/temporalio-temporal/issues.md#680) | **70** | 14 | Wait for external workflow completion |
| 2 | [#1507](../repos/temporalio-temporal/issues.md#1507) | **50** | 27 | Priority task queues |
| 3 | [#2668](../repos/temporalio-temporal/issues.md#2668) | **46** | 11 | Document POSTGRES_SEEDS |
| 4 | [#2318](../repos/temporalio-temporal/issues.md#2318) | **46** | 7 | MongoDB as persistent store |
| 5 | [#5680](../repos/temporalio-temporal/issues.md#5680) | **30** | 14 | Official OpenSearch support |
| 6 | [#537](../repos/temporalio-temporal/issues.md#537) | **30** | 2 | SignalWithStart/UpdateWithStart command |
| 7 | [#131](../repos/temporalio-temporal/issues.md#131) | **28** | 4 | Retry options based on failure type |
| 8 | [#5302](../repos/temporalio-temporal/issues.md#5302) | **23** | 2 | YDB support |
| 9 | [#2609](../repos/temporalio-temporal/issues.md#2609) | **23** | 7 | Transfer child workflows on ContinueAsNew |
| 10 | [#1797](../repos/temporalio-temporal/issues.md#1797) | **22** | 4 | Get all task queues per namespace |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #680 | 154 | External workflow wait |
| 2 | #1507 | 127 | Priority task queues |
| 3 | #2668 | 103 | POSTGRES_SEEDS documentation |
| 4 | #2318 | 99 | MongoDB support |
| 5 | #5680 | 74 | OpenSearch support |

---

## Top Request Categories

### 1. Workflow Capabilities (High Demand)

| Issue | 👍 | Request |
|-------|-----|---------|
| #680 | 70 | Wait for external workflow completion |
| #1507 | 50 | Priority task queues |
| #537 | 30 | SignalWithStart/UpdateWithStart |
| #131 | 28 | Failure-type based retry |
| #2609 | 23 | Child workflow transfer on ContinueAsNew |
| #1988 | 15 | Dynamic task queue routing |

### 2. Database/Storage Support (High Demand)

| Issue | 👍 | Request |
|-------|-----|---------|
| #2318 | 46 | MongoDB as persistent store |
| #5680 | 30 | OpenSearch support |
| #5302 | 23 | YDB support |
| #328 | 19 | Amazon Keyspaces |
| #3366 | 16 | SQLite in production |
| #4180 | 13 | CockroachDB support |

### 3. Operations & Deployment

| Issue | 👍 | Request |
|-------|-----|---------|
| #2668 | 46 | Better POSTGRES_SEEDS documentation |
| #2582 | 18 | Worker service health check |
| #298 | 14 | Embedded server support |
| #4383 | 10 | Graceful shutdown without errors |

### 4. Task Queue Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| #1507 | 50 | Priority task queues |
| #1797 | 22 | List all task queues per namespace |
| #1460 | 16 | Task queue query |

### 5. Schedule Enhancements

| Issue | 👍 | Request |
|-------|-----|---------|
| #5811 | 12 | Last day of month scheduling |
| #4795 | 14 | Non-unique workflow IDs per schedule run |

---

## Bugs (11 Confirmed)

| Issue | 👍 | Problem |
|-------|-----|---------|
| #8490 | 2 | ContinuedFailure not cleared on success |
| #4000 | 2 | Concurrent map read/write |
| #1119 | 1 | ParentExecution not set |
| #7821 | 0 | Workflow list query inconsistency |
| #7566 | 0 | Task timeout after ShutdownWorker |
| #4094 | 0 | Version upgrade notification not cleared |
| #3667 | 0 | Incorrect RetryState on timeout |
| #3284 | 0 | Metadata limit connection drops |
| #3154 | 0 | tdbg pagination support |
| #3104 | 0 | clusterMetadata override |
| #266 | 0 | Matching service degradation |

---

## Age Distribution

| Age | Count | % |
|-----|-------|---|
| Last 30 days | 12 | 2% |
| 1-3 months | 18 | 3% |
| 3-6 months | 22 | 4% |
| 6-12 months | 45 | 8% |
| 1-2 years | 138 | 26% |
| 2-3 years | 80 | 15% |
| 3+ years | 218 | **41%** |

**Note:** 41% of issues are 3+ years old - significant tech debt.

---

## Proposed Roadmap

### Phase 1: High-Impact Features
- [ ] External workflow wait (#680 - 70 👍)
- [ ] Priority task queues (#1507 - 50 👍)
- [ ] SignalWithStart/UpdateWithStart (#537 - 30 👍)

### Phase 2: Database Ecosystem
- [ ] MongoDB support (#2318 - 46 👍)
- [ ] OpenSearch support (#5680 - 30 👍)
- [ ] Improved Postgres documentation (#2668 - 46 👍)

### Phase 3: Operations
- [ ] Embedded server (#298)
- [ ] Health check handlers (#2582)
- [ ] Graceful shutdown (#4383)

### Phase 4: Tech Debt
- [ ] Triage 218 issues older than 3 years
- [ ] Fix confirmed bugs (11 issues)
- [ ] Investigate potential bugs (126 issues)

---

## Quick Reference: Top 15 Issues

| # | Issue | Category | 👍 | Title |
|---|-------|----------|-----|-------|
| 1 | #680 | API | **70** | External workflow wait |
| 2 | #1507 | API | **50** | Priority task queues |
| 3 | #2668 | Config | **46** | POSTGRES_SEEDS docs |
| 4 | #2318 | Storage | **46** | MongoDB support |
| 5 | #5680 | Storage | **30** | OpenSearch support |
| 6 | #537 | API | **30** | SignalWithStart |
| 7 | #131 | API | **28** | Failure-type retry |
| 8 | #5302 | Storage | **23** | YDB support |
| 9 | #2609 | API | **23** | Child workflow transfer |
| 10 | #1797 | API | **22** | List task queues |
| 11 | #328 | Storage | **19** | Amazon Keyspaces |
| 12 | #2582 | Ops | **18** | Health check |
| 13 | #3366 | Storage | **16** | SQLite production |
| 14 | #1460 | DevExp | **16** | Task queue query |
| 15 | #3228 | API | **16** | Timer metadata |

---

## Notes

The Temporal Server repo has the highest engagement of any tracked repository:
- 899 total upvotes (vs 177 for TypeScript SDK)
- Strong demand for database flexibility (MongoDB, OpenSearch, YDB, CRDB)
- Workflow capability enhancements are top priority
- 41% of issues are 3+ years old - needs triage sprint
