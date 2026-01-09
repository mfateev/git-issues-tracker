# Temporal Server - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 534
**Total Closed Issues:** 2
**Repository:** [temporalio/temporal](https://github.com/temporalio/temporal)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Full Issue Data](../repos/temporalio-temporal/issues.md)

**SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [.NET](dotnet.md) | [PHP](php.md) | [Ruby](ruby.md) | [Features](features.md)

---

## Executive Summary

The Temporal Server repository has 534 open issues with strong community engagement: 900 total upvotes and 878 comments across 27% and 54% of issues respectively. The most requested features center around workflow orchestration capabilities (external workflow completion, priority queues), alternative database backends (MongoDB, OpenSearch, YDB), and improved operational tooling. With 70% of issues being stale (>12 months old) and a growing backlog (+95 issues in the last 12 months), there is significant opportunity for strategic triage and prioritization.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements/Features | 352 | High - represents core user demand for new capabilities |
| Potential Bugs | 127 | Medium-High - requires investigation to confirm severity |
| Confirmed Bugs | 12 | High - known issues affecting users |
| Operations/DevOps | 20 | Medium - improves deployment and monitoring |
| API Changes | 25 | Medium - enables new SDK capabilities |
| Up-for-grabs | 30 | Low - good for community contributions |

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
| Resolution Rate | 0% (2/536) |
| Median Time to Close | 8 days (calendar) / 7 days (business) |
| Resolved within 30 days | 100% |
| Resolved within 90 days | 100% |

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 97 | 2 | +95 |

Backlog Growing: 95 more issues opened than closed in the last 12 months. The extremely low resolution rate indicates either issues are being addressed through other means (PRs without linked issues), or there is a significant maintenance backlog requiring attention.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 55 |
| Issues Closed | 2 |
| Bugs Closed | 1 |
| Enhancements Completed | 1 |

### Popular Requests Resolved (Last 6 Months)

No high-demand issues (3+ upvotes) were closed in the last 6 months. This represents an opportunity to address top-voted items to improve community satisfaction.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#680](../repos/temporalio-temporal/issues.md#680) | 70 | 14 | Add ability for workflow to wait for completion of an external workflow |
| 2 | [#1507](../repos/temporalio-temporal/issues.md#1507) | 50 | 27 | Provide priority task queues |
| 3 | [#2668](../repos/temporalio-temporal/issues.md#2668) | 46 | 11 | Document POSTGRES_SEEDS (or better yet, use a descriptive var name) |
| 4 | [#2318](../repos/temporalio-temporal/issues.md#2318) | 46 | 7 | MongoDB as Persistent |
| 5 | [#5680](../repos/temporalio-temporal/issues.md#5680) | 30 | 15 | Official support for Opensearch |
| 6 | [#537](../repos/temporalio-temporal/issues.md#537) | 30 | 2 | Add SignalWithStart/UpdateWithStart command |
| 7 | [#131](../repos/temporalio-temporal/issues.md#131) | 28 | 4 | Different retry options based on failure type |
| 8 | [#5302](../repos/temporalio-temporal/issues.md#5302) | 23 | 2 | YDB Temporal support |
| 9 | [#2609](../repos/temporalio-temporal/issues.md#2609) | 23 | 7 | Add ability to transfer child workflows to new parent run when parent calls continue as new |
| 10 | [#1797](../repos/temporalio-temporal/issues.md#1797) | 22 | 4 | Ability to get all task queues per namespace |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#680](../repos/temporalio-temporal/issues.md#680) | 154 | Add ability for workflow to wait for completion of external workflow |
| 2 | [#1507](../repos/temporalio-temporal/issues.md#1507) | 127 | Provide priority task queues |
| 3 | [#2668](../repos/temporalio-temporal/issues.md#2668) | 103 | Document POSTGRES_SEEDS |
| 4 | [#2318](../repos/temporalio-temporal/issues.md#2318) | 99 | MongoDB as Persistent |
| 5 | [#5680](../repos/temporalio-temporal/issues.md#5680) | 75 | Official support for Opensearch |
| 6 | [#537](../repos/temporalio-temporal/issues.md#537) | 62 | Add SignalWithStart/UpdateWithStart command |
| 7 | [#131](../repos/temporalio-temporal/issues.md#131) | 60 | Different retry options based on failure type |
| 8 | [#328](../repos/temporalio-temporal/issues.md#328) | 54 | Try to run temporal on top of Amazon Keyspaces |
| 9 | [#2609](../repos/temporalio-temporal/issues.md#2609) | 53 | Transfer child workflows to new parent |
| 10 | [#2582](../repos/temporalio-temporal/issues.md#2582) | 49 | Add health check handler for worker service |

---

## Top Request Categories

### 1. Workflow Orchestration Capabilities (Very High Demand)

Users consistently request enhanced workflow coordination features to handle complex multi-workflow scenarios.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#680](../repos/temporalio-temporal/issues.md#680) | 70 | Wait for external workflow completion |
| [#537](../repos/temporalio-temporal/issues.md#537) | 30 | SignalWithStart/UpdateWithStart command |
| [#131](../repos/temporalio-temporal/issues.md#131) | 28 | Different retry options based on failure type |
| [#2609](../repos/temporalio-temporal/issues.md#2609) | 23 | Transfer child workflows to new parent on continue-as-new |
| [#3228](../repos/temporalio-temporal/issues.md#3228) | 16 | Metadata for Timers |
| [#685](../repos/temporalio-temporal/issues.md#685) | 9 | Delay workflow completion until abandoned children start |
| [#3006](../repos/temporalio-temporal/issues.md#3006) | 0 | Workflow Pause / Unpause (18 comments - high discussion) |

### 2. Alternative Database Backends (High Demand)

Strong community interest in running Temporal on databases other than the default options.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2318](../repos/temporalio-temporal/issues.md#2318) | 46 | MongoDB as Persistent store |
| [#5302](../repos/temporalio-temporal/issues.md#5302) | 23 | YDB Temporal support |
| [#328](../repos/temporalio-temporal/issues.md#328) | 19 | Amazon Keyspaces support |
| [#3366](../repos/temporalio-temporal/issues.md#3366) | 16 | Support SQLite in production |
| [#4180](../repos/temporalio-temporal/issues.md#4180) | 13 | Official CockroachDB (CRDB) support |
| [#4105](../repos/temporalio-temporal/issues.md#4105) | 8 | Full support for ScyllaDB as persistence layer |

### 3. Task Queue Management (High Demand)

Users need better control over task distribution and prioritization.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#1507](../repos/temporalio-temporal/issues.md#1507) | 50 | Priority task queues |
| [#1797](../repos/temporalio-temporal/issues.md#1797) | 22 | Get all task queues per namespace |
| [#1988](../repos/temporalio-temporal/issues.md#1988) | 15 | Dynamic task queue routing |
| [#1460](../repos/temporalio-temporal/issues.md#1460) | 16 | Add task queue query |
| [#3468](../repos/temporalio-temporal/issues.md#3468) | 6 | List task queues for a given namespace |
| [#3309](../repos/temporalio-temporal/issues.md#3309) | 7 | Notify all workers on a task queue |

### 4. Search and Visibility (Medium Demand)

Improved visibility store options and search capabilities.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#5680](../repos/temporalio-temporal/issues.md#5680) | 30 | Official support for Opensearch |
| [#3056](../repos/temporalio-temporal/issues.md#3056) | 11 | Support wildcard search for workflows |
| [#7930](../repos/temporalio-temporal/issues.md#7930) | 0 | Replace olivere/elastic with official ES client (14 comments) |

### 5. Operational Improvements (Medium Demand)

Features to improve deployment, monitoring, and maintenance.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#2668](../repos/temporalio-temporal/issues.md#2668) | 46 | Document POSTGRES_SEEDS / use descriptive var name |
| [#2582](../repos/temporalio-temporal/issues.md#2582) | 18 | Health check handler for worker service |
| [#298](../repos/temporalio-temporal/issues.md#298) | 14 | Support embedded version of the service |
| [#4383](../repos/temporalio-temporal/issues.md#4383) | 10 | Log-less graceful shutdown |
| [#1428](../repos/temporalio-temporal/issues.md#1428) | 11 | Error-free rolling bounces and upgrades |

### 6. Schedule Enhancements (Medium Demand)

Improvements to the scheduling system.

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#5811](../repos/temporalio-temporal/issues.md#5811) | 12 | Support last day of month as recurring schedule option |
| [#4795](../repos/temporalio-temporal/issues.md#4795) | 14 | Schedules - execution workflowid "as-is" option |
| [#8205](../repos/temporalio-temporal/issues.md#8205) | 2 | Improve DST handling in schedules |

---

## Bugs Requiring Attention

### Confirmed Bugs

| Issue | Upvotes | Impact |
|-------|---------|--------|
| [#2941](../repos/temporalio-temporal/issues.md#2941) | 9 | Host level cache for history - performance impact |
| [#6995](../repos/temporalio-temporal/issues.md#6995) | 6 | Error during VisibilityDeleteExecution |
| [#4233](../repos/temporalio-temporal/issues.md#4233) | 6 | Too high memory usage on history service |
| [#7037](../repos/temporalio-temporal/issues.md#7037) | 5 | Viewing schedule throws 504 "context deadline exceeded" |
| [#5455](../repos/temporalio-temporal/issues.md#5455) | 5 | docker-compose multirole sometimes stuck on boot |
| [#983](../repos/temporalio-temporal/issues.md#983) | 5 | Logging/exception stack trace not capturing underlying errors |
| [#8719](../repos/temporalio-temporal/issues.md#8719) | 3 | Stale internode gRPC connections after pod termination |
| [#6806](../repos/temporalio-temporal/issues.md#6806) | 3 | WorkflowTaskTimedOut if submitting large number of activities |

### Potential Bugs (Need Investigation)

The repository has 127 issues labeled as "potential-bug" requiring triage:

| Issue | Upvotes | Title |
|-------|---------|-------|
| [#6323](../repos/temporalio-temporal/issues.md#6323) | 0 | Frontend Service - goroutine (CPU & Memory) Leak (15 comments) |
| [#4000](../repos/temporalio-temporal/issues.md#4000) | 2 | Concurrent map read and map write |
| [#8490](../repos/temporalio-temporal/issues.md#8490) | 2 | Scheduled Actions doesn't clear ContinuedFailure on null success payloads |
| [#7894](../repos/temporalio-temporal/issues.md#7894) | 2 | Cannot load Archived Workflows on UI even archived are present in S3 |

### Recent Security Issues

| Issue | Date | Title |
|-------|------|-------|
| [#8866](../repos/temporalio-temporal/issues.md#8866) | 2025-12-18 | CVE-2025-61729 for golang:crypto/x509 |
| [#8865](../repos/temporalio-temporal/issues.md#8865) | 2025-12-18 | CVE-2025-61727 for golang:crypto/x509 |
| [#8110](../repos/temporalio-temporal/issues.md#8110) | - | v1.28.0 vulnerabilities (10 comments) |

---

## Community Contribution Opportunities

Issues marked as up-for-grabs or good-first-issue (37 total):

| Issue | Area | Description |
|-------|------|-------------|
| [#421](../repos/temporalio-temporal/issues.md#421) | CLI | Add admin command to dump dynamic config value(s) |
| [#453](../repos/temporalio-temporal/issues.md#453) | Docker | Implement docker healthcheck |
| [#607](../repos/temporalio-temporal/issues.md#607) | Testing | Add proper unit/integration tests for parentclosepolicy workflow |
| [#3532](../repos/temporalio-temporal/issues.md#3532) | Refactoring | Remove unused methods in ClientBean |
| [#5553](../repos/temporalio-temporal/issues.md#5553) | CI | Update license check script to verify current year |
| [#5544](../repos/temporalio-temporal/issues.md#5544) | Errors | Use different error when signalName is empty |

---

## Housekeeping Recommendations

### Stale Issues

- **Issues >3 years old:** 218 (41% of all open issues)
- **Issues >1 year old:** 374 (70% of all open issues)

**Recommended for closure (likely obsolete or superseded):**
- [#109](../repos/temporalio-temporal/issues.md#109) - Docker: Docker image with schema loaded (6+ years old)
- [#108](../repos/temporalio-temporal/issues.md#108) - Make temporal docker to not emit noisy logs (6+ years old)
- [#13](../repos/temporalio-temporal/issues.md#13) - Multi-phase activities (very old concept)
- [#19](../repos/temporalio-temporal/issues.md#19) - Clear indication that service is up and running (likely addressed)

**Needs maintainer review:**
- [#245](../repos/temporalio-temporal/issues.md#245) - Cassandra timestamp type (6 comments, very old)
- [#2685](../repos/temporalio-temporal/issues.md#2685) - Interpreter Proposal - New way to write workflow
- [#1994](../repos/temporalio-temporal/issues.md#1994) - Cron tailgate-like workflow triggering

### Documentation Gaps

| Issue | Upvotes | Gap |
|-------|---------|-----|
| [#2668](../repos/temporalio-temporal/issues.md#2668) | 46 | POSTGRES_SEEDS documentation (top-voted doc issue) |
| [#2891](../repos/temporalio-temporal/issues.md#2891) | 0 | Document configuration (development.yaml, dynamicconfig) |
| [#954](../repos/temporalio-temporal/issues.md#954) | 3 | Multi-region deployment documentation |
| [#8461](../repos/temporalio-temporal/issues.md#8461) | 2 | Self-hosting documentation for cloud environments |
| [#1821](../repos/temporalio-temporal/issues.md#1821) | 2 | Elasticsearch permissions required by Temporal |

---

## Recommendations

1. **High Priority Features:**
   - [#680](../repos/temporalio-temporal/issues.md#680) External workflow completion (70 upvotes) - highest user demand
   - [#1507](../repos/temporalio-temporal/issues.md#1507) Priority task queues (50 upvotes) - enables critical workload management
   - [#5680](../repos/temporalio-temporal/issues.md#5680) OpenSearch support (30 upvotes) - expands visibility store options
   - [#131](../repos/temporalio-temporal/issues.md#131) Failure-type based retry options (28 upvotes) - improves error handling
   - [#1797](../repos/temporalio-temporal/issues.md#1797) List all task queues per namespace (22 upvotes) - operational visibility

2. **Bug Fixes:**
   - [#2941](../repos/temporalio-temporal/issues.md#2941) Host level cache for history - performance critical
   - [#4233](../repos/temporalio-temporal/issues.md#4233) History service memory usage - scalability concern
   - [#8719](../repos/temporalio-temporal/issues.md#8719) Stale gRPC connections in Kubernetes - operational stability
   - Address CVE security issues in [#8866](../repos/temporalio-temporal/issues.md#8866) and [#8865](../repos/temporalio-temporal/issues.md#8865)

3. **Community:**
   - Prioritize the 37 up-for-grabs issues for external contributors
   - [#421](../repos/temporalio-temporal/issues.md#421) and [#453](../repos/temporalio-temporal/issues.md#453) are good entry points (difficulty: easy)
   - Create contributor guide for database backend integrations given high demand

4. **Housekeeping:**
   - Review and close ~50 issues older than 5 years that are likely obsolete
   - Consolidate duplicate database backend requests into tracking issues
   - Address the 127 potential-bug issues through systematic triage
   - Update documentation for POSTGRES_SEEDS ([#2668](../repos/temporalio-temporal/issues.md#2668)) - quick win with high impact
