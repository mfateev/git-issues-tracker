# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 530
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-temporal/ISSUES.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Features](features.md)

---

## Executive Summary

The Temporal Server has 530 open issues with exceptional community engagement (899 upvotes, 865 comments). Top requests focus on workflow capabilities (#680 - external workflow wait, 70 upvotes) and priority task queues (#1507, 50 upvotes). The repo has significant tech debt with 218 issues older than 3 years.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 349 | Medium - Feature requests |
| Potential Bugs | 126 | High - Need investigation |
| Confirmed Bugs | 11 | High |
| Up-for-grabs | 30 | Community contribution |
| Stale Issues (>3 years) | 218 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 899 |
| Total Comments | 865 |
| Issues with Upvotes | 143 (27%) |
| Issues with Comments | 285 (54%) |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | **70** | 14 | Wait for external workflow completion |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | **50** | 27 | Priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | **46** | 11 | Document POSTGRES_SEEDS |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | **46** | 7 | MongoDB as persistent store |
| 5 | [#5680](https://github.com/temporalio/temporal/issues/5680) | **30** | 14 | Official OpenSearch support |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | **30** | 2 | SignalWithStart/UpdateWithStart command |
| 7 | [#131](https://github.com/temporalio/temporal/issues/131) | **28** | 4 | Retry options based on failure type |
| 8 | [#5302](https://github.com/temporalio/temporal/issues/5302) | **23** | 2 | YDB support |
| 9 | [#2609](https://github.com/temporalio/temporal/issues/2609) | **23** | 7 | Transfer child workflows on ContinueAsNew |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | **22** | 4 | Get all task queues per namespace |

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
| Last 30 days | 10 | 2% |
| 1-3 months | 20 | 4% |
| 3-6 months | 19 | 4% |
| 6-12 months | 46 | 9% |
| 1-2 years | 137 | 26% |
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
