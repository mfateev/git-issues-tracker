# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 533
**Total Closed Issues:** 951
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md)

**SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 533 open issues with strong community engagement: 900 total upvotes and 878 comments across open issues. The most requested features center around workflow orchestration capabilities (external workflow completion with 70 upvotes, priority queues with 50 upvotes), alternative database backends (MongoDB at 46 upvotes, OpenSearch at 30 upvotes), and improved configuration/operations (POSTGRES_SEEDS documentation at 46 upvotes). With 70% of issues being stale (>12 months old) and a growing backlog (+70 issues net in the last 12 months), there is significant opportunity for strategic triage and prioritization.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements/Features | 352 | High - represents core user demand for new capabilities |
| Potential Bugs | 126 | Medium-High - requires investigation to confirm severity |
| Confirmed Bugs | 12 | High - known issues affecting users |
| Operations/DevOps | 20 | Medium - improves deployment and monitoring |
| API Changes | 25 | Medium - enables new SDK capabilities |
| Up-for-grabs | 30 | Low - good for community contributions |
| Good First Issue | 7 | Low - onboarding opportunities |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 900 |
| Total Comments | 878 |
| Issues with Upvotes | 144 (27%) |
| Issues with Comments | 290 (54%) |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 64% (951/1484) |
| Median Time to Close | 41 days (calendar) / 30 days (business) |
| Resolved within 30 days | 47% |
| Resolved within 90 days | 62% |

**Closure Reasons (Inferred):**
- Fixed (bugs): 353 (37%)
- Completed (features): 246 (26%)
- Self-resolved: 209 (22%)
- Other: 143 (15%)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 168 | 98 | +70 |

**Backlog Growing:** 70 more issues opened than closed in the last 12 months. The monthly trend shows consistent growth with April 2025 (+15) and June 2025 (+13) being the highest net increase months.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 97 |
| Issues Closed | 64 |
| Net Change | +33 |
| Bugs Closed | 45 |
| Enhancements Closed | 14 |
| Median Time to Close | 24 days (calendar) / 19 days (business) |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| [#8363](https://github.com/temporalio/temporal/issues/8363) | 6 | Task queue validator on occasions fails task queue name... |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 70 | 14 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 11 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | 7 | MongoDB as Persistent |
| 5 | [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | 15 | Official support for Opensearch |
| 6 | [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | Add SignalWithStart/UpdateWithStart command |
| 7 | [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 4 | Different retry options based on failure type |
| 8 | [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | YDB Temporal support |
| 9 | [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue as new |
| 10 | [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | Ability to get all task queues per namespace |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](https://github.com/temporalio/temporal/issues/680) | 154 | Add ability for workflow to wait for completion of external workflow |
| 2 | [#1507](https://github.com/temporalio/temporal/issues/1507) | 127 | Provide priority task queues |
| 3 | [#2668](https://github.com/temporalio/temporal/issues/2668) | 103 | Document POSTGRES_SEEDS |
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

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | Wait for external workflow completion from within a workflow (5 years old, 14 comments, workaround via Nexus available) |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | Priority task queues for fairness and priority ordering (partially shipped in v1.28.0, ongoing development) |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | SignalWithStart/UpdateWithStart from workflow code (currently activity-only workaround) |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | Different retry options based on failure type |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | Transfer child workflows to new parent on continue-as-new |

**Analysis:** The top issue ([#680](https://github.com/temporalio/temporal/issues/680)) requesting external workflow completion has been open for 5 years with consistent community demand. A workaround using Nexus WorkflowRunOperation is now available (v1.28+), but users want this without going through a Nexus handler. Issue [#1507](https://github.com/temporalio/temporal/issues/1507) for priority queues is actively being developed with simple priority shipped in v1.28.0 and fairness features in progress.

### 2. Alternative Database/Storage Backends (High Demand)

Users operating in various cloud environments and enterprise contexts need database options beyond MySQL, PostgreSQL, and Cassandra.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | MongoDB as persistent store (community member completed implementation in #8908) |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official OpenSearch support (v1.29.0+ works with OpenSearch up to v2.7.0, workarounds for newer versions) |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | YDB Temporal support |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | Amazon Keyspaces support |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | SQLite support in production |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | Official CockroachDB (CRDB) support |

**Analysis:** MongoDB implementation has been completed by a community contributor (#8908). OpenSearch support is progressing with v1.29.0+ supporting OpenSearch up to v2.7.0, with work ongoing for a workaround for newer versions. SQLite production support aligns with the Temporalite use case for low-budget deployments.

### 3. Configuration & Operations (High Demand)

Users deploying Temporal in production environments struggle with configuration complexity and operational visibility.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (confusing env var naming persists since 2022) |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | List all task queues per namespace |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Health check handler for worker service |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Embedded version of the service |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | Log-less graceful shutdown |

**Analysis:** The POSTGRES_SEEDS documentation issue ([#2668](https://github.com/temporalio/temporal/issues/2668)) has frustrated users for 3+ years with comments from 2023, 2024, and 2025 all expressing confusion. This is a low-hanging fruit for improving developer experience. Task queue listing ([#1797](https://github.com/temporalio/temporal/issues/1797)) is needed for client-side tooling and debugging.

### 4. Task Queue & Scheduling Improvements (Medium Demand)

Users need better control over task distribution, scheduling, and worker management.

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | Dynamic task queue routing |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | Task queue query (being solved via per-process Nexus endpoint) |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for timers (naming/tagging for UI clarity) |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | Error-free rolling bounces and upgrades |

**Analysis:** Dynamic task queue routing ([#1988](https://github.com/temporalio/temporal/issues/1988)) enables development/troubleshooting scenarios. Task queue query ([#1460](https://github.com/temporalio/temporal/issues/1460)) is being addressed via Nexus service endpoints. Timer metadata ([#3228](https://github.com/temporalio/temporal/issues/3228)) is a UX improvement for workflow debugging.

### 5. Authentication & Security (Medium Demand)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 6 | Azure Entra ID Authentication for PostgreSQL Backend |
| [#8636](https://github.com/temporalio/temporal/issues/8636) | 1 | Auth plugin design |
| [#4902](https://github.com/temporalio/temporal/issues/4902) | 0 | Custom authentication between frontend and other services |

---

## Bugs Requiring Attention

### Confirmed Bugs (Labeled 'bug')

| Issue | Upvotes | Impact |
|-------|-----|--------|
| [#8970](https://github.com/temporalio/temporal/issues/8970) | 0 | Client-set RPC deadline ignored for long poll GetWorkflowExecutionHistory |
| [#8943](https://github.com/temporalio/temporal/issues/8943) | 0 | No admin-tools image for 1.29.2 |
| [#8864](https://github.com/temporalio/temporal/issues/8864) | 0 | Workflow cannot run with dedicated cloud PostgreSQL |

### Potential Bugs (High Upvotes - Need Investigation)

| Issue | Upvotes | Impact |
|-------|-----|--------|
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history (may have been addressed in v1.25.0 via enableHostHistoryCache) |
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | Error during VisibilityDeleteExecution |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service (multiple reports, assigned but stale) |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | docker-compose multirole sometimes stuck on boot |

### Memory/Performance Issues

The history service memory issue ([#4233](https://github.com/temporalio/temporal/issues/4233)) has multiple reports from users experiencing high memory usage with cache settings seemingly ignored. Related issue [#2941](https://github.com/temporalio/temporal/issues/2941) about host-level cache was supposedly addressed in v1.25.0 but needs confirmation.

---

## Community Contribution Opportunities

### Up-for-grabs Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#680](https://github.com/temporalio/temporal/issues/680) | API/DevExp | Wait for external workflow completion (labeled up-for-grabs) |
| [#537](https://github.com/temporalio/temporal/issues/537) | API | SignalWithStart/UpdateWithStart command (easy difficulty) |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | Enhancement | Health check handler for worker service |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | DevExp | Task queue query (medium difficulty) |

### Good First Issues

| Issue | Area | Description |
|-------|------|-------------|
| [#6196](https://github.com/temporalio/temporal/issues/6196) | Chore | Easy difficulty, good for newcomers |

### Recently Contributed

- [#8908](https://github.com/temporalio/temporal/issues/8908): MongoDB persistence implementation (community contribution completing [#2318](https://github.com/temporalio/temporal/issues/2318))

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 218 (41% of open issues)
- **Issues >2 years old:** 298 (56% of open issues)
- **Issues >12 months old:** 374 (70% of open issues)

### Recommended for Closure Review

| Issue | Age | Reason |
|-------|-----|--------|
| [#131](https://github.com/temporalio/temporal/issues/131) | 5+ years | Different retry options - may be addressed by current retry capabilities or deprioritized |
| [#537](https://github.com/temporalio/temporal/issues/537) | 5+ years | SignalWithStart from workflow - evaluate if activity workaround is sufficient |
| [#298](https://github.com/temporalio/temporal/issues/298) | 5+ years | Embedded version - evaluate if dev server satisfies use case |

### Needs Maintainer Decision

| Issue | Status | Decision Needed |
|-------|--------|-----------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | Assigned | When will POSTGRES_SEEDS documentation/renaming happen? (3+ years) |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | In Progress | Update issue with v1.28.0 progress and remaining roadmap |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | Active | Clarify official OpenSearch support status and version compatibility |

### Documentation Gaps

| Issue | Description |
|-------|-------------|
| [#2668](https://github.com/temporalio/temporal/issues/2668) | POSTGRES_SEEDS and other env var documentation - causes repeated user confusion |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | OpenSearch compatibility matrix needs documentation |

---

## Recent Activity (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-01-08 | [#8970](https://github.com/temporalio/temporal/issues/8970) | Client-set RPC deadline is ignored for long poll |
| 2026-01-08 | [#8968](https://github.com/temporalio/temporal/issues/8968) | Same fairness key but different fairness weight? |
| 2026-01-08 | [#8967](https://github.com/temporalio/temporal/issues/8967) | 1.30.0 release version |
| 2026-01-07 | [#8955](https://github.com/temporalio/temporal/issues/8955) | MCP Server for Temporal Workflows |
| 2026-01-06 | [#8943](https://github.com/temporalio/temporal/issues/8943) | No admin-tools image for 1.29.2 |
| 2025-12-24 | [#8902](https://github.com/temporalio/temporal/issues/8902) | History service memory usage upward trend |
| 2025-12-18 | [#8866](https://github.com/temporalio/temporal/issues/8866) | Address security vulnerability CVE-2025-61729 |
| 2025-12-18 | [#8865](https://github.com/temporalio/temporal/issues/8865) | Address security vulnerability CVE-2025-61727 |

---

## Recommendations

### 1. High Priority Features (Top User Demand)

1. **Continue priority/fairness work ([#1507](https://github.com/temporalio/temporal/issues/1507))** - v1.28.0 shipped simple priority; fairness features are actively being developed. Update issue with current status and timeline.
2. **External workflow completion ([#680](https://github.com/temporalio/temporal/issues/680))** - 70 upvotes, 5+ years old. Nexus workaround exists but native support without Nexus handler is requested.
3. **Documentation for POSTGRES_SEEDS ([#2668](https://github.com/temporalio/temporal/issues/2668))** - Quick win, 46 upvotes, 3+ years of user frustration. Rename or document the environment variable.
4. **OpenSearch official support ([#5680](https://github.com/temporalio/temporal/issues/5680))** - v1.29.0+ supports up to OpenSearch 2.7.0. Document compatibility matrix and workarounds.

### 2. Bug Fixes (Critical)

1. **History service memory issues ([#4233](https://github.com/temporalio/temporal/issues/4233), [#8902](https://github.com/temporalio/temporal/issues/8902))** - Multiple users reporting high memory usage. Stale PR needs revival.
2. **Admin-tools image missing ([#8943](https://github.com/temporalio/temporal/issues/8943))** - Blocks users on v1.29.2.
3. **Visibility deletion errors ([#6995](https://github.com/temporalio/temporal/issues/6995))** - 6 upvotes, affects cleanup operations.

### 3. Community Engagement

1. **Celebrate MongoDB contribution** - Community member completed [#8908](https://github.com/temporalio/temporal/issues/8908), closing long-standing [#2318](https://github.com/temporalio/temporal/issues/2318) (46 upvotes).
2. **Promote up-for-grabs issues** - 30 issues available for community contribution, including high-visibility [#680](https://github.com/temporalio/temporal/issues/680) and [#537](https://github.com/temporalio/temporal/issues/537).
3. **Good first issues** - 7 issues available for onboarding new contributors.

### 4. Housekeeping

1. **Triage stale issues** - 374 issues (70%) have no activity in 12+ months. Consider batch triage with "stale" label and closure warnings.
2. **Update priority queue issue** - [#1507](https://github.com/temporalio/temporal/issues/1507) has extensive discussion but needs status update reflecting v1.28.0 progress.
3. **Close or update 5+ year old issues** - Evaluate if [#131](https://github.com/temporalio/temporal/issues/131), [#537](https://github.com/temporalio/temporal/issues/537), [#298](https://github.com/temporalio/temporal/issues/298) are still relevant or have been addressed by newer features.
