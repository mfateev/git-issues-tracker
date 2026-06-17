# Temporal - Cross-Repository Analysis Summary

**Generated:** 2026-06-16
**Total Open Issues:** 1561 across 10 repositories
**Total Closed Issues:** 4599
**Overall Resolution Rate:** 75%

## Related Documents

| Document | Description |
|----------|-------------|
| [contributors.md](contributors.md) | Issues and comments by author |
| [recent.md](recent.md) | Recent issues analysis (last 30 days) |
| [themes/index.md](themes/index.md) | Cross-cutting theme analysis (testing, performance, etc.) |
| [stats-all.md](stats-all.md) | Aggregate statistics across all repos |
| [stats-recent.md](stats-recent.md) | Recent issues list (script-generated) |

**Per-Repository Analysis:**
- [Temporal Server](server.md)
- [Features (cross-SDK)](features.md)
- [API (proto definitions)](api.md)
- [Java SDK](java.md)
- [Go SDK](go.md)
- [TypeScript SDK](typescript.md)
- [Python SDK](python.md)
- [.NET SDK](dotnet.md)
- [PHP SDK](php.md)
- [Ruby SDK](ruby.md)

**Semantic Data (for deeper analysis):**
- `analysis/cards-summary.txt` — Grep-friendly one-line summaries for all issues
- `repos/<repo>/issues-index-enhanced.json` — Enhanced index with semantic fields (category, subcategory, APIs, components, concepts, severity)

---

## Overview by Repository

| Repository | Open | Closed | Rate | Upvotes | Comments | Bugs | Enhancements | Median TTC |
|------------|------|--------|------|---------|----------|------|--------------|------------|
| [Server](server.md) | 530 | 1062 | 67% | 778 | 867 | 131 | 351 | 44d |
| [Features](features.md) | 258 | 157 | 38% | 115 | 404 | 5 | 238 | 133d |
| [Java SDK](java.md) | 224 | 755 | 77% | 100 | 218 | 32 | 125 | 29d |
| [Go SDK](go.md) | 167 | 706 | 81% | 83 | 223 | 59 | 86 | 16d |
| [TypeScript SDK](typescript.md) | 153 | 692 | 82% | 121 | 299 | 46 | 86 | 27d |
| [Python SDK](python.md) | 98 | 553 | 85% | 28 | 159 | 35 | 54 | 17d |
| [.NET SDK](dotnet.md) | 50 | 258 | 84% | 13 | 45 | 10 | 30 | 20d |
| [PHP SDK](php.md) | 40 | 235 | 85% | 14 | 67 | 8 | 23 | 46d |
| [Ruby SDK](ruby.md) | 27 | 168 | 86% | 4 | 10 | 5 | 19 | 40d |
| [API](api.md) | 14 | 13 | 48% | 6 | 9 | 4 | 9 | 3d |
| **Total** | **1561** | **4599** | **75%** | **1262** | **2301** | **335** | **1021** | **27d** |

---

## Global Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata. These are heuristics, not explicit GitHub data.

| Metric | Value |
|--------|-------|
| Overall Resolution Rate | 75% |
| Median Time to Close | 27 days |
| Average Time to Close | 152 days |
| Resolved within 30 days | 52% |
| Resolved within 90 days | 69% |

---

## Resolution Leaderboard

### By Resolution Rate (Best First)

| Rank | Repository | Resolution Rate | Open | Closed |
|------|------------|-----------------|------|--------|
| 1 | [Ruby SDK](ruby.md) | 86% | 27 | 168 |
| 2 | [PHP SDK](php.md) | 85% | 40 | 235 |
| 3 | [Python SDK](python.md) | 85% | 98 | 553 |
| 4 | [.NET SDK](dotnet.md) | 84% | 50 | 258 |
| 5 | [TypeScript SDK](typescript.md) | 82% | 153 | 692 |
| 6 | [Go SDK](go.md) | 81% | 167 | 706 |
| 7 | [Java SDK](java.md) | 77% | 224 | 755 |
| 8 | [Server](server.md) | 67% | 530 | 1062 |
| 9 | [API](api.md) | 48% | 14 | 13 |
| 10 | [Features](features.md) | 38% | 258 | 157 |

The two "platform spec" repositories (Features, API) sit at the bottom because they accumulate long-lived umbrella tracking issues that remain open until every SDK ships a feature. Among code repositories, the language SDKs all clear 77%+ resolution; the gap to Server (67%) reflects the larger surface area and the long-tail of older feature requests there.

### By Median Time to Close (Fastest First)

| Rank | Repository | Median TTC | Resolved <30d |
|------|------------|------------|---------------|
| 1 | [API](api.md) | 3d | 77% |
| 2 | [Go SDK](go.md) | 16d | 59% |
| 3 | [Python SDK](python.md) | 17d | 63% |
| 4 | [.NET SDK](dotnet.md) | 20d | 60% |
| 5 | [TypeScript SDK](typescript.md) | 27d | 52% |
| 6 | [Java SDK](java.md) | 29d | 51% |
| 7 | [Ruby SDK](ruby.md) | 40d | 44% |
| 8 | [Server](server.md) | 44d | 44% |
| 9 | [PHP SDK](php.md) | 46d | 48% |
| 10 | [Features](features.md) | 133d | 31% |

---

## Issue Velocity (Last 12 Months)

| Metric | Value |
|--------|-------|
| Issues Opened | 871 |
| Issues Closed | 824 |
| Net Change | +47 |

**Backlog Growing (modestly):** 47 more issues opened than closed across all repos in the last 12 months. The trend is mild — most months net within ±20 — but four of the last five months (Feb–Jun 2026) have been net-positive intake. The largest contributors to growth are Server (+29), Features (+28), Java SDK (+21), TypeScript SDK (+12), and Ruby SDK (+2). Python SDK (-24), PHP SDK (-17), Go SDK (-4), and .NET SDK (-1) all shrunk or held steady.

---

## Recently Resolved Popular Requests (Last 6 Months, 3+ upvotes)

| Repo | Issue | Upvotes | Title |
|------|-------|---------|-------|
| TypeScript SDK | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | 51 | Run temporal worker in bun |
| Server | [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | Document POSTGRES_SEEDS (or better yet, use a descriptive name) |
| Server | [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | Official support for Opensearch |
| Java SDK | [#2738](https://github.com/temporalio/sdk-java/issues/2738) | 23 | Spring Boot 4 Support |
| Go SDK | [#916](https://github.com/temporalio/sdk-go/issues/916) | 21 | Ability to mock/intercept side effect calls in tests |
| Server | [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | Add health check handler for worker service |
| Server | [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | Metadata for Timers |
| Java SDK | [#2746](https://github.com/temporalio/sdk-java/issues/2746) | 14 | Jackson 3 support |
| Server | [#298](https://github.com/temporalio/temporal/issues/298) | 14 | Documentation - How to use Temporal as an embedded library |
| Server | [#8724](https://github.com/temporalio/temporal/issues/8724) | 13 | Support Azure Entra ID Authentication for PostgreSQL |
| Server | [#8719](https://github.com/temporalio/temporal/issues/8719) | 10 | Stale internode gRPC connections after pod termination |
| Server | [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | Host level cache for history |
| Features | [#456](https://github.com/temporalio/features/issues/456) | 7 | Provide worker status |
| Server | [#9156](https://github.com/temporalio/temporal/issues/9156) | 7 | Cloud Database Cert/IAM Connections |
| Server | [#2517](https://github.com/temporalio/temporal/issues/2517) | 7 | Make task queues more ordered |
| Python SDK | [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of structured logging |
| TypeScript SDK | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | Failure to start ephemeral server prevents shutdown |
| Server | [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | Too high memory usage on history service |
| Go SDK | [#1352](https://github.com/temporalio/sdk-go/issues/1352) | 5 | Serialization context for codecs and converters |
| Go SDK | [#1282](https://github.com/temporalio/sdk-go/issues/1282) | 5 | Heartbeat timeout not raised while testing |

Notable wins this period: Bun support landed in TypeScript ([#1334](https://github.com/temporalio/sdk-typescript/issues/1334), 51 upvotes — the most-requested feature in TS SDK history); Spring Boot 4 + Jackson 3 in Java; OpenSearch support and three high-engagement schedule/operations items on Server; serialization context for codecs cross-SDK.

---

## Top User Requests (by Upvotes)

| Rank | Repo | Issue | Upvotes | Request |
|------|------|-------|---------|---------|
| 1 | Server | [#680](https://github.com/temporalio/temporal/issues/680) | **74** | Add ability for workflow to wait for completion of an external workflow |
| 2 | Server | [#1507](https://github.com/temporalio/temporal/issues/1507) | **50** | Provide priority task queues |
| 3 | Server | [#2318](https://github.com/temporalio/temporal/issues/2318) | **48** | MongoDB as Persistent |
| 4 | Server | [#131](https://github.com/temporalio/temporal/issues/131) | **32** | Different retry options based on failure type |
| 5 | Server | [#537](https://github.com/temporalio/temporal/issues/537) | **30** | Add SignalWithStart / UpdateWithStart command |
| 6 | Server | [#5302](https://github.com/temporalio/temporal/issues/5302) | **23** | YDB Temporal support |
| 7 | Server | [#2609](https://github.com/temporalio/temporal/issues/2609) | **23** | Transfer child workflows on parent continue-as-new |
| 8 | Server | [#328](https://github.com/temporalio/temporal/issues/328) | **23** | Run Temporal on top of Amazon Keyspaces |
| 9 | Server | [#1797](https://github.com/temporalio/temporal/issues/1797) | **22** | Ability to get all task queues per namespace |
| 10 | TypeScript SDK | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | **20** | Temporal integration for `@openai/agents` |
| 11 | TypeScript SDK | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | **19** | Add support for opentelemetry v2 |
| 12 | Features | [#118](https://github.com/temporalio/features/issues/118) | **17** | Declarative schedules: upsert, sync, terraform |
| 13 | Go SDK | [#181](https://github.com/temporalio/sdk-go/issues/181) | **16** | Clean worker shutdown that waits for sessions |
| 14 | Java SDK | [#1693](https://github.com/temporalio/sdk-java/issues/1693) | **16** | Support listWorkflowExecutions in test server |
| 15 | Server | [#3366](https://github.com/temporalio/temporal/issues/3366) | **16** | Support sqlite in production |

---

## Common Themes

The themes below recur across multiple repositories and represent the strongest cross-cutting signals from the backlog.

**Available Theme Reports:** See [themes/index.md](themes/index.md). Currently generated: [API Design](themes/api-design.md). Other themes (testing, nexus, performance, observability, versioning, signals-updates, activities, error-handling, serialization, security, breaking-changes, high-priority, workflow-execution) are configured but not yet generated.

### 1. Alternative Persistence Backends (Server-driven)

The single largest cluster by upvote count, spanning ~100+ upvotes across six issues. Users want options beyond the supported Cassandra/Postgres/MySQL stack — both fully-managed cloud DBs and lightweight local options. The category has no clear roadmap response, and the absence of a definitive accept/decline is itself a source of community frustration.

| Subcategory | Top Requests |
|----------|--------------|
| Document DB | [#2318](https://github.com/temporalio/temporal/issues/2318) MongoDB (48 upvotes) |
| Cloud-managed | [#5302](https://github.com/temporalio/temporal/issues/5302) YDB (23 upvotes), [#328](https://github.com/temporalio/temporal/issues/328) Amazon Keyspaces (23 upvotes), [#4180](https://github.com/temporalio/temporal/issues/4180) CockroachDB (13 upvotes) |
| Lightweight | [#3366](https://github.com/temporalio/temporal/issues/3366) sqlite in production (16 upvotes) |
| High-perf | [#4105](https://github.com/temporalio/temporal/issues/4105) ScyllaDB (8 upvotes), [#10177](https://github.com/temporalio/temporal/issues/10177) ScyllaDB GoCQL driver |
| New/experimental | [#9509](https://github.com/temporalio/temporal/issues/9509) SurrealDB |
| Read scaling | [#10442](https://github.com/temporalio/temporal/issues/10442) database read replicas |

### 2. Test Frameworks (Cross-SDK)

The largest category of user pain in the SDKs. The Java SDK calls out 53 open test-framework issues (~24% of its backlog); the Go SDK has 43; the TypeScript SDK 12; PHP 8; .NET 8. The Features repo tracks parity for testing harnesses ([#658](https://github.com/temporalio/features/issues/658) Nexus testing, [#649](https://github.com/temporalio/features/issues/649) versioning, [#492](https://github.com/temporalio/features/issues/492) reset+update, [#472](https://github.com/temporalio/features/issues/472) test env failure semantics). The pattern is consistent across SDKs: time-skipping divergence from production, missing features (listWorkflowExecutions, listSchedules), and assertion ergonomics.

| Subcategory | Top Requests |
|----------|--------------|
| Java | [#1693](https://github.com/temporalio/sdk-java/issues/1693) listWorkflowExecutions in test server (16 upvotes), [#1804](https://github.com/temporalio/sdk-java/issues/1804) embedded CLI server (10 upvotes), [#2642](https://github.com/temporalio/sdk-java/issues/2642)/[#2670](https://github.com/temporalio/sdk-java/issues/2670) sleep hangs |
| Go | [#866](https://github.com/temporalio/sdk-go/issues/866) test env doesn't enforce WorkflowExecutionTimeout (4 upvotes), [#1104](https://github.com/temporalio/sdk-go/issues/1104) timeout-halving, [#2109](https://github.com/temporalio/sdk-go/issues/2109) MutableSideEffect cmp |
| TypeScript | [#928](https://github.com/temporalio/sdk-typescript/issues/928) Jest open handles (7 upvotes, 26 comments), [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) closed |
| PHP | [#577](https://github.com/temporalio/sdk-php/issues/577), [#743](https://github.com/temporalio/sdk-php/issues/743), [#744](https://github.com/temporalio/sdk-php/issues/744), [#745](https://github.com/temporalio/sdk-php/issues/745) test-harness cluster |
| .NET | [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#280](https://github.com/temporalio/sdk-dotnet/issues/280) time-skipping defects |
| Ruby | [#360](https://github.com/temporalio/sdk-ruby/issues/360) signal + wait_condition testing |

### 3. Cross-SDK Feature Parity (Nexus, Versioning, Activities, Plugins)

The Features repo (258 open, 38% resolution rate) functions as the spec/tracker for cross-SDK parity. Several large umbrella initiatives touch every SDK and explain a large fraction of the Features backlog growth:

| Subcategory | Top Trackers |
|----------|--------------|
| Nexus | [#609](https://github.com/temporalio/features/issues/609) implementation umbrella, [#610](https://github.com/temporalio/features/issues/610), [#673](https://github.com/temporalio/features/issues/673), [#674](https://github.com/temporalio/features/issues/674), [#805](https://github.com/temporalio/features/issues/805), [#806](https://github.com/temporalio/features/issues/806), [#658](https://github.com/temporalio/features/issues/658) testing |
| Worker Versioning | [#726](https://github.com/temporalio/features/issues/726) v1.30 GA, [#294](https://github.com/temporalio/features/issues/294) Safe Deploys, [#591](https://github.com/temporalio/features/issues/591) `patched()` standardization, [#649](https://github.com/temporalio/features/issues/649) testing |
| Standalone Activities | [#706](https://github.com/temporalio/features/issues/706), [#822](https://github.com/temporalio/features/issues/822) operator commands |
| Plugin System | [#652](https://github.com/temporalio/features/issues/652), [#684](https://github.com/temporalio/features/issues/684) |
| External Payload Storage | [#765](https://github.com/temporalio/features/issues/765), [#783](https://github.com/temporalio/features/issues/783) S3 driver, [#827](https://github.com/temporalio/features/issues/827) |
| Declarative Schedules | [#118](https://github.com/temporalio/features/issues/118) (17 upvotes), [#119](https://github.com/temporalio/features/issues/119) upsertMemo |

### 4. Workflow & Task-Queue Capabilities (Server API gaps)

Long-standing engine-level feature requests that have been open for years and continue to attract votes. These cannot be delivered in SDKs — they require server work — and many are 5+ years old without an accept/decline decision.

| Subcategory | Top Requests |
|----------|--------------|
| Workflow lifecycle | [#680](https://github.com/temporalio/temporal/issues/680) await external workflow (74 upvotes), [#537](https://github.com/temporalio/temporal/issues/537) SignalWithStart/UpdateWithStart (30 upvotes), [#2609](https://github.com/temporalio/temporal/issues/2609) transfer child on CAN (23 upvotes) |
| Task queues | [#1507](https://github.com/temporalio/temporal/issues/1507) priority queues (50 upvotes), [#1797](https://github.com/temporalio/temporal/issues/1797) list task queues (22 upvotes), [#1988](https://github.com/temporalio/temporal/issues/1988) dynamic routing (15 upvotes), [#1460](https://github.com/temporalio/temporal/issues/1460) task queue query (16 upvotes) |
| Retries | [#131](https://github.com/temporalio/temporal/issues/131) per-failure-type retry (32 upvotes) |
| Schedules | [#4795](https://github.com/temporalio/temporal/issues/4795) "as-is" workflowid (14 upvotes), [#5811](https://github.com/temporalio/temporal/issues/5811) last-day-of-month (12 upvotes) |

### 5. Observability Modernization (Tracing & Metrics)

Across SDKs the pattern is the same: legacy OpenTracing/tracershim stacks need to migrate to native OpenTelemetry, metrics need cross-SDK standardization, and large customers want richer attribute control. ~15 standardization items live in the Features repo alone.

| Subcategory | Top Requests |
|----------|--------------|
| OTel migration | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) TS OTel v2 (19 upvotes), [#2394](https://github.com/temporalio/sdk-java/issues/2394) Java pure-OTel (6 upvotes), [#733](https://github.com/temporalio/sdk-python/issues/733) Python OTel/ddtrace sandbox |
| Metrics standardization | [#607](https://github.com/temporalio/features/issues/607) umbrella, [#25](https://github.com/temporalio/features/issues/25) workflow_started, [#98](https://github.com/temporalio/features/issues/98) worker_task_slots_total, [#563](https://github.com/temporalio/features/issues/563) workflow_failed exception tag |
| Trace attributes | [#1149](https://github.com/temporalio/sdk-go/issues/1149) Go custom trace keys, [#1163](https://github.com/temporalio/sdk-java/issues/1163) Java root-metricsscope tags |
| Worker metrics | [#845](https://github.com/temporalio/features/issues/845) auto-label deployment_name/build_id |

### 6. Bundler/Runtime/Platform Compatibility

Mostly a TypeScript and Python concern: each SDK ships native code or runs in a constrained runtime, and ecosystem changes (NextJS, Vite, Python 3.14, musl, ARM64) regularly break adoption.

| Subcategory | Top Requests |
|----------|--------------|
| TypeScript bundlers | [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) NextJS 15 (3 upvotes, 14 comments), [#2098](https://github.com/temporalio/sdk-typescript/issues/2098) Vite SSR, [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) Vite bundling, [#933](https://github.com/temporalio/sdk-typescript/issues/933) core/workflow split |
| Python runtime | [#1517](https://github.com/temporalio/sdk-python/issues/1517) Python 3.14, [#1592](https://github.com/temporalio/sdk-python/issues/1592) Windows ARM64 wheels, [#761](https://github.com/temporalio/sdk-python/issues/761) musl/Alpine, [#928](https://github.com/temporalio/sdk-python/issues/928) free-threading |
| .NET AOT | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) trimming/AOT (7 upvotes, top-upvoted in repo) |
| Web frameworks | [#207](https://github.com/temporalio/sdk-typescript/issues/207) in-browser gRPC (9 upvotes), [#483](https://github.com/temporalio/sdk-typescript/issues/483) NestJS (4 upvotes, 37 comments) |

---

## Per-Repository Priorities

| Repository | Top Request | Key Concern |
|------------|-------------|-------------|
| [Server](server.md) | [#680](https://github.com/temporalio/temporal/issues/680) await external workflow (74 upvotes) | Persistence-backend strategy decision; 123 untriaged `potential-bug` items; 9 critical-severity bugs |
| [Features](features.md) | [#118](https://github.com/temporalio/features/issues/118) Declarative schedules (17 upvotes) | 68% stale; cross-SDK parity tracking; 5 transitive-dep CVEs |
| [Java SDK](java.md) | [#1693](https://github.com/temporalio/sdk-java/issues/1693) listWorkflowExecutions in test server (16 upvotes) | Test-framework cluster (53 issues); local-activity pool exhaustion [#2823](https://github.com/temporalio/sdk-java/issues/2823); Spring Boot starter CVE [#1890](https://github.com/temporalio/sdk-java/issues/1890) |
| [Go SDK](go.md) | [#181](https://github.com/temporalio/sdk-go/issues/181) clean worker shutdown (16 upvotes) | Test-framework parity (43 issues); CVE in `uber-go/tally` [#899](https://github.com/temporalio/sdk-go/issues/899) |
| [TypeScript SDK](typescript.md) | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) `@openai/agents` integration (20 upvotes) | Bundler/SSR/NextJS adoption blockers; replay determinism bugs; [#1736](https://github.com/temporalio/sdk-typescript/issues/1736) sanitization (critical) |
| [Python SDK](python.md) | [#1048](https://github.com/temporalio/sdk-python/issues/1048) sync activity cancellation (3 upvotes, 11 comments) | Python 3.14 compatibility ([#1517](https://github.com/temporalio/sdk-python/issues/1517)); determinism bugs ([#1591](https://github.com/temporalio/sdk-python/issues/1591), [#1578](https://github.com/temporalio/sdk-python/issues/1578)); OTel sandbox ([#733](https://github.com/temporalio/sdk-python/issues/733)) |
| [.NET SDK](dotnet.md) | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) .NET Trimming/AOT (7 upvotes) | Time-skipping test-environment bugs; CVE-2024-21907 in Coverlet ([#194](https://github.com/temporalio/sdk-dotnet/issues/194)) |
| [PHP SDK](php.md) | [#592](https://github.com/temporalio/sdk-php/issues/592) marshaller docs | Worker memory leak [#635](https://github.com/temporalio/sdk-php/issues/635); test-framework cluster; Nexus parity |
| [Ruby SDK](ruby.md) | [#464](https://github.com/temporalio/sdk-ruby/issues/464) sync primitives → un-replayable history (1 upvote) | Two critical correctness bugs ([#464](https://github.com/temporalio/sdk-ruby/issues/464), [#463](https://github.com/temporalio/sdk-ruby/issues/463)); cross-SDK Nexus alignment |
| [API](api.md) | [#328](https://github.com/temporalio/api/issues/328) Buf schema registry (6 upvotes) | Cross-namespace deprecation [#750](https://github.com/temporalio/api/issues/750); 93% stale; long-lived API design proposals |

---

## Recommended Initiatives

### 1. Persistence-Backend Strategy Statement

**Impact:** Server, all SDK users running self-hosted. ~100+ upvotes across six issues.

The single biggest theme by upvote weight has no clear roadmap response. Even a definitive "won't support, here's why" would unblock community plans and let teams stop accumulating votes on dead requests. If there is appetite for one new backend (e.g., sqlite for embedded, ScyllaDB for high-perf), pick one and ship; the alternative is an ever-growing stale list.

**Related issues:**
- [#2318](https://github.com/temporalio/temporal/issues/2318) MongoDB (48 upvotes)
- [#5302](https://github.com/temporalio/temporal/issues/5302) YDB (23 upvotes)
- [#328](https://github.com/temporalio/temporal/issues/328) Amazon Keyspaces (23 upvotes)
- [#3366](https://github.com/temporalio/temporal/issues/3366) sqlite (16 upvotes)
- [#4180](https://github.com/temporalio/temporal/issues/4180) CockroachDB (13 upvotes)
- [#4105](https://github.com/temporalio/temporal/issues/4105) ScyllaDB (8 upvotes)

### 2. Cross-SDK Test Framework Quality Push

**Impact:** All SDKs. The single largest source of user friction across Java, Go, TypeScript, PHP, .NET, and Ruby (130+ open test-framework issues collectively).

Test frameworks that quietly diverge from production behavior erode user trust in unit testing. A coordinated quality push — fixing time-skipping defects, completing API parity (listWorkflowExecutions, listSchedules), and adding the Nexus/versioning testing primitives — would dramatically reduce one of the most-complained-about categories.

**Related issues:**
- Java: [#1693](https://github.com/temporalio/sdk-java/issues/1693), [#1804](https://github.com/temporalio/sdk-java/issues/1804), [#2642](https://github.com/temporalio/sdk-java/issues/2642), [#2670](https://github.com/temporalio/sdk-java/issues/2670), [#1426](https://github.com/temporalio/sdk-java/issues/1426), [#2391](https://github.com/temporalio/sdk-java/issues/2391)
- Go: [#866](https://github.com/temporalio/sdk-go/issues/866), [#1104](https://github.com/temporalio/sdk-go/issues/1104), [#2109](https://github.com/temporalio/sdk-go/issues/2109)
- TypeScript: [#928](https://github.com/temporalio/sdk-typescript/issues/928)
- PHP: [#577](https://github.com/temporalio/sdk-php/issues/577), [#743](https://github.com/temporalio/sdk-php/issues/743), [#744](https://github.com/temporalio/sdk-php/issues/744), [#745](https://github.com/temporalio/sdk-php/issues/745)
- .NET: [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#280](https://github.com/temporalio/sdk-dotnet/issues/280)
- Features: [#658](https://github.com/temporalio/features/issues/658), [#649](https://github.com/temporalio/features/issues/649), [#492](https://github.com/temporalio/features/issues/492), [#472](https://github.com/temporalio/features/issues/472)

### 3. Critical-Bug Triage Sweep

**Impact:** Production users on Server 1.30.x, Java workers running local activities, Ruby workflow authors, .NET schedule users.

Several recent reports are flagged `critical` severity by the semantic analysis pipeline and cluster in correctness-critical subsystems. They have low engagement (most have 0 upvotes) because they originate from internal review, but they pose production risk.

**Related issues:**
- Server: [#9021](https://github.com/temporalio/temporal/issues/9021) history-scavenger data loss, [#10320](https://github.com/temporalio/temporal/issues/10320) cold-start hang, [#10548](https://github.com/temporalio/temporal/issues/10548) history crash, [#10436](https://github.com/temporalio/temporal/issues/10436) DLQ inaccessibility, [#10579](https://github.com/temporalio/temporal/issues/10579) schedule deadlock, [#10639](https://github.com/temporalio/temporal/issues/10639) reset-after-child-completion
- Java: [#2823](https://github.com/temporalio/sdk-java/issues/2823) local-activity pool exhaustion
- Ruby: [#464](https://github.com/temporalio/sdk-ruby/issues/464) sync primitives → un-replayable history, [#463](https://github.com/temporalio/sdk-ruby/issues/463) suggestContinueAsNew enum crash
- Python: [#1591](https://github.com/temporalio/sdk-python/issues/1591) non-determinism after cold-start update, [#1578](https://github.com/temporalio/sdk-python/issues/1578) asyncio.gather with local activities

### 4. Dependency-CVE Bumps

**Impact:** Cross-repo. Several open security issues are dependency CVEs that can be cleared by a one-line version bump.

**Related issues:**
- Server: [#10699](https://github.com/temporalio/temporal/issues/10699), [#10676](https://github.com/temporalio/temporal/issues/10676) pgx v5.9.2 CWE-306
- Java: [#1890](https://github.com/temporalio/sdk-java/issues/1890) spring-boot-starter 2.7.12 (CVSS 9.8), [#1888](https://github.com/temporalio/sdk-java/issues/1888), [#1951](https://github.com/temporalio/sdk-java/issues/1951), [#1952](https://github.com/temporalio/sdk-java/issues/1952), [#2676](https://github.com/temporalio/sdk-java/issues/2676) grpc-netty-shaded
- Go: [#899](https://github.com/temporalio/sdk-go/issues/899) uber-go/tally → Thrift CVEs
- .NET: [#194](https://github.com/temporalio/sdk-dotnet/issues/194) Coverlet CVE-2024-21907
- Features (transitive scaffolding): [#384](https://github.com/temporalio/features/issues/384), [#366](https://github.com/temporalio/features/issues/366), [#288](https://github.com/temporalio/features/issues/288), [#254](https://github.com/temporalio/features/issues/254), [#116](https://github.com/temporalio/features/issues/116)

### 5. Backlog Decision Pass on Stale-but-Engaged Feature Requests

**Impact:** Open-source community trust. 1051 issues (67% of open) are stale (>12 months without activity), with hundreds of those carrying upvotes/comments and no maintainer disposition.

A coordinated decision pass — accept-to-roadmap or decline-with-rationale — on the top ~50 stale-but-engaged items across repos would (a) free the community to plan, (b) reduce inbound duplicate filings, and (c) shrink the backlog visibly. Pair with a mass-close of zombie issues (0 engagement, 3+ years, configuration-cosmetic).

**Related issues (representative — top-engaged stale items per repo):**
- Server: [#5302](https://github.com/temporalio/temporal/issues/5302), [#2609](https://github.com/temporalio/temporal/issues/2609), [#1988](https://github.com/temporalio/temporal/issues/1988), [#4180](https://github.com/temporalio/temporal/issues/4180), [#1492](https://github.com/temporalio/temporal/issues/1492), [#3056](https://github.com/temporalio/temporal/issues/3056), [#1428](https://github.com/temporalio/temporal/issues/1428)
- Features: [#399](https://github.com/temporalio/features/issues/399), [#363](https://github.com/temporalio/features/issues/363), [#175](https://github.com/temporalio/features/issues/175), [#98](https://github.com/temporalio/features/issues/98)
- Java: [#1845](https://github.com/temporalio/sdk-java/issues/1845), [#1007](https://github.com/temporalio/sdk-java/issues/1007), [#214](https://github.com/temporalio/sdk-java/issues/214)
- Go: [#181](https://github.com/temporalio/sdk-go/issues/181), [#89](https://github.com/temporalio/sdk-go/issues/89)
- TypeScript: [#207](https://github.com/temporalio/sdk-typescript/issues/207), [#483](https://github.com/temporalio/sdk-typescript/issues/483), [#933](https://github.com/temporalio/sdk-typescript/issues/933)
- API: [#169](https://github.com/temporalio/api/issues/169), [#172](https://github.com/temporalio/api/issues/172), [#307](https://github.com/temporalio/api/issues/307)

---

## Housekeeping Summary

| Repository | Stale Issues | % of Open | Recommended Action |
|------------|--------------|-----------|-------------------|
| [API](api.md) | 13 | 93% | Decision pass on 9 long-open API design proposals; the repo is curated, not pruned |
| [Java SDK](java.md) | 173 | 77% | Triage debt is the largest housekeeping problem; close items whose underlying functionality has shipped (Spring Boot 4, Jackson 3) |
| [Go SDK](go.md) | 126 | 75% | Mass-triage pre-2024 enhancement asks with zero engagement |
| [Features](features.md) | 175 | 68% | Highest stale rate among code repos; per-SDK umbrella trackers stay open until *every* SDK ships — close when N-1 SDKs done |
| [Server](server.md) | 355 | 67% | Decide accept/decline on the 14 stale-but-popular feature requests; triage 123 `potential-bug` items |
| [.NET SDK](dotnet.md) | 33 | 66% | Many speculative feature requests or already-resolved items; quick triage win |
| [TypeScript SDK](typescript.md) | 91 | 59% | Close clearly-superseded items (e.g., #915 from 2022, #754 from 2023) |
| [Python SDK](python.md) | 54 | 55% | ~30 items inactive since 2025-Q1 or earlier — strong close/wontfix candidates |
| [PHP SDK](php.md) | 21 | 53% | Many duplicates or already-completed feature parity asks |
| [Ruby SDK](ruby.md) | 10 | 37% | Lowest stale rate; many predate GA and may no longer be relevant |

**Total stale issues across all repos:** 1051 (67% of open issues)

Two-thirds of the open backlog has had no activity for over a year. The single biggest housekeeping lever is a backlog-decision pass on the most-engaged stale items (initiative 5 above) followed by mass-closure of zero-engagement zombies. This would visibly shrink the public backlog without losing any actionable work.
