# Recent Issues Analysis

**Generated:** 2026-06-16
**Period:** Last 30 days (87 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity.

---

## Urgent Issues Requiring Attention

The last 30 days surfaced an unusually heavy concentration of critical-severity defects in the Temporal Server, plus a notable cluster of security/supply-chain reports. Several of the bugs are reproducible production-blocking failures (deadlocks, history-service crashes, replication data loss). They are grouped below by urgency.

### Critical: Production-Impacting Server Bugs

These are confirmed or strongly suspected defects that can stall workflows, crash the history service, or lose data permanently. They are the highest-priority items in the window.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#10548](https://github.com/temporalio/temporal/issues/10548) | server | History service crash due to concurrent map access when `history.cacheSizeBasedLimit` is enabled — race in the cache release path corrupts the workflow update registry. |
| [#10320](https://github.com/temporalio/temporal/issues/10320) | server | After a clean install of 1.31.0, the first workflow task on every system workflow hangs until timeout, and matching service then permanently blocks retries with "task already started". |
| [#10321](https://github.com/temporalio/temporal/issues/10321) | server | SQL transaction race in `TransferStartChildExecution` causes permanent workflow stall; child workflows never start. |
| [#10579](https://github.com/temporalio/temporal/issues/10579) | server | Schedules permanently deadlock after Workflow ID reuse when the previous scheduled action exhausted its retry chain. |
| [#10639](https://github.com/temporalio/temporal/issues/10639) | server | Workflow reset does not recover child completion if the child completed after the original parent failed — completion event is silently dropped. |
| [#10436](https://github.com/temporalio/temporal/issues/10436) | server | DLQ replication tasks become permanently inaccessible (data loss) when source/target shard counts differ. |
| [#464](https://github.com/temporalio/sdk-ruby/issues/464) | Ruby SDK | Sync primitives can lead to un-replayable workflow history under CPU contention — splits activity-start commands across tasks. |
| [#463](https://github.com/temporalio/sdk-ruby/issues/463) | Ruby SDK | Ruby SDK crashes on `suggestContinueAsNew` event because it calls `.to_i` on a Symbol — workflows using continue-as-new can hang. |

**Recommendation:** All of these are production-blockers for at least some users. They should be triaged this week, with [#10548](https://github.com/temporalio/temporal/issues/10548), [#10320](https://github.com/temporalio/temporal/issues/10320), and [#10321](https://github.com/temporalio/temporal/issues/10321) targeted for a 1.31.x patch release. The Ruby crashes ([#463](https://github.com/temporalio/sdk-ruby/issues/463), [#464](https://github.com/temporalio/sdk-ruby/issues/464)) should likewise prompt a patch.

### Critical: Security & Supply-Chain

A coherent wave of CVE and dependency-hygiene reports landed in the period. Many came from external scanners reaching multiple SDKs in parallel.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#10618](https://github.com/temporalio/temporal/issues/10618) | server | HIGH/CRITICAL CVEs in transitive Go deps (grpc, x/net, x/crypto, markdown) in v1.31; request for patch release. (Closed but tracking.) |
| [#10699](https://github.com/temporalio/temporal/issues/10699) | server | pgx v5.9.2 missing `require_auth` (CWE-306) — server can be coerced into accepting cleartext auth. Fix in pgx v5.10.0. |
| [#10676](https://github.com/temporalio/temporal/issues/10676) | server | Duplicate of #10699; pgx auth-downgrade vulnerability. |
| [#1598](https://github.com/temporalio/sdk-python/issues/1598) | Python SDK | PyO3 0.25.1 out-of-bounds read / missing Sync bound. Fix by upgrade. |
| [#1567](https://github.com/temporalio/sdk-python/issues/1567) | Python SDK | tar crate 0.4.45 PAX header desync (GHSA-3pv8-6f4r-ffg2). |
| [#10600](https://github.com/temporalio/temporal/issues/10600) | server | Release artefacts lack cryptographic attestations (SLSA provenance). |
| [#1546](https://github.com/temporalio/sdk-python/issues/1546) | Python SDK | PyPI uploads not using Trusted Publishing — supply-chain risk. |

**Recommendation:** Schedule a single coordinated bump of the pgx, grpc, golang.org/x and PyO3 dependencies, then ship Server 1.31.x and Python SDK patch releases together. Add Trusted Publishing and release attestations to the roadmap; they recur in user reports.

### High: Replication & Multi-Cluster Correctness

Five replication/NDC issues were filed by a single contributor (NasitSony) doing code-review-style triage. Even if not actively impacting users today, they describe missing validation and retry-limit gaps that could mask data inconsistency.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#10519](https://github.com/temporalio/temporal/issues/10519) | server | Missing version-history validation in `ReplicateEventsV2` request processing. |
| [#10520](https://github.com/temporalio/temporal/issues/10520) | server | `SyncActivity` replication returns nil instead of `RetryReplication` when workflow not found — retry never triggers. |
| [#10490](https://github.com/temporalio/temporal/issues/10490) | server | `SyncState()` ignores `remainingAttempt` — replication retries indefinitely, no limit enforced. |
| [#10478](https://github.com/temporalio/temporal/issues/10478) | server | Speculative WFT processing lacks shard-ownership verification — can reject valid updates after shard movement. |
| [#10436](https://github.com/temporalio/temporal/issues/10436) | server | DLQ replication tasks inaccessible across shard-count change (see Critical above). |

**Recommendation:** Pair-review these with the replication area owners; even if individually low-priority, the cluster suggests a missing test-pattern around NDC validation. Consider a sweep audit.

### High: Determinism & Replay Defects

Four new non-determinism reports in 30 days — a pattern worth treating as a stability theme.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1591](https://github.com/temporalio/sdk-python/issues/1591) | Python SDK | Non-deterministic history when update handler runs on cold-start replay before signal handler's activity-await coroutine. |
| [#1578](https://github.com/temporalio/sdk-python/issues/1578) | Python SDK | Non-determinism when using `asyncio.gather` with local activities (wall-clock ordering differs from replay). |
| [#464](https://github.com/temporalio/sdk-ruby/issues/464) | Ruby SDK | Sync primitives produce un-replayable history under CPU pressure. |
| [#10690](https://github.com/temporalio/temporal/issues/10690) | server | `ResetWorkflowExecution` returns "workflow not found" when targeting an older run if current execution is missing. |

**Recommendation:** Cross-SDK pairing of [#1591](https://github.com/temporalio/sdk-python/issues/1591) and [#1578](https://github.com/temporalio/sdk-python/issues/1578) suggests the async/local-activity scheduling model needs documented ordering guarantees. Add features-repo tests around update-on-replay and local-activity ordering.

### High: Database & Storage Layer

| Issue | SDK | Impact |
|-------|-----|--------|
| [#10358](https://github.com/temporalio/temporal/issues/10358) | server | Cannot upgrade to 1.30.4 without downtime — schema migration adds GENERATED STORED column to executions_visibility, ~57-min exclusive lock on 35M-row tables. |
| [#10514](https://github.com/temporalio/temporal/issues/10514) | server | postgres12_pgx + `default_query_exec_mode: simple_protocol` fails `VisibilityCloseExecution` with type-conversion error. |
| [#10392](https://github.com/temporalio/temporal/issues/10392) | server | Prepared statement leak in `GetFromVisibility` (sql plugin) — exhausts connection pool over time. |
| [#10635](https://github.com/temporalio/temporal/issues/10635) | server | `tdbg m list-db` broken on v1.30+ with UUID validation error — operators lose visibility into cluster members. |

**Recommendation:** The 1.30.4 migration ([#10358](https://github.com/temporalio/temporal/issues/10358)) is the most user-visible — it blocks upgrades for any customer at scale. Document an online-migration alternative or revert/guard the change in 1.31.x. Fix the statement leak ([#10392](https://github.com/temporalio/temporal/issues/10392)) in the same patch.

### High: SDK Build/Distribution Regressions

| Issue | SDK | Impact |
|-------|-----|--------|
| [#2098](https://github.com/temporalio/sdk-typescript/issues/2098) | TypeScript SDK | Vite SSR emits broken imports for workflow modules starting in 1.16.0 — affects any user with SSR/Next.js setup. |
| [#2885](https://github.com/temporalio/sdk-java/issues/2885) | Java SDK | `Jackson3JsonPayloadConverter(JsonMapper)` constructor not visible to javac (only present in MR-JAR versions/17 path). |
| [#2068](https://github.com/temporalio/sdk-typescript/issues/2068) | TypeScript SDK | Legacy Runtime's native resource tracking causes test flakes; race conditions in lifecycle. |
| [#10345](https://github.com/temporalio/temporal/issues/10345) | server | `StartWorkflow` incorrectly rejects valid `Link.NexusOperation` variant. |

**Recommendation:** Treat [#2098](https://github.com/temporalio/sdk-typescript/issues/2098) as a 1.16.x patch release item — Vite/SSR breakage is a regression introduced inside the window and likely affecting many users silently.

### Medium: SDK Bug Reports Worth Tracking

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1557](https://github.com/temporalio/sdk-python/issues/1557) | Python SDK | Worker pod stuck in Terminating after SIGTERM; `ShutdownWorker` returns UNIMPLEMENTED. |
| [#1548](https://github.com/temporalio/sdk-python/issues/1548) | Python SDK | openai-agents sandbox activities throw only retryable exceptions — infinite retry when sandbox is terminated. |
| [#1582](https://github.com/temporalio/sdk-python/issues/1582) | Python SDK | `OutboundInterceptor.start_update_with_start_workflow` missing `rpc_metadata` — breaks interceptor symmetry. |
| [#454](https://github.com/temporalio/sdk-ruby/issues/454) | Ruby SDK | `execute_update_with_start_workflow` raises NOT_FOUND on validator rejection (inverted boolean). |
| [#752](https://github.com/temporalio/sdk-php/issues/752) | PHP SDK | `listWorkflowExecutions` hangs — missing deadline/timeout on the gRPC call. |
| [#2401](https://github.com/temporalio/sdk-go/issues/2401) | Go SDK | Metric counters only appear after first increment — breaks Prometheus alerting on absence. |
| [#2108](https://github.com/temporalio/sdk-typescript/issues/2108) | TypeScript SDK | OTel interceptor adds trace_id/span_id to custom metrics → unbounded cardinality. (Closed.) |
| [#2379](https://github.com/temporalio/sdk-go/issues/2379) | Go SDK | Duplicate-named activities silently routed to aliased registration without warning. |
| [#10312](https://github.com/temporalio/temporal/issues/10312) | server | Schedule with microsecond-precision offset launches only once instead of recurring. |

**Recommendation:** [#1557](https://github.com/temporalio/sdk-python/issues/1557) (worker stuck on shutdown) and [#752](https://github.com/temporalio/sdk-php/issues/752) (PHP hang) both block production operations. Prioritize gRPC deadlines and shutdown handling across SDKs.

---

## Emerging Themes

### 1. Replication / NDC Code-Quality Sweep

A single contributor (NasitSony) opened 10 issues in the period, most against the replication and NDC subsystems (e.g. [#10490](https://github.com/temporalio/temporal/issues/10490), [#10478](https://github.com/temporalio/temporal/issues/10478), [#10520](https://github.com/temporalio/temporal/issues/10520), [#10519](https://github.com/temporalio/temporal/issues/10519), [#10436](https://github.com/temporalio/temporal/issues/10436), [#10522](https://github.com/temporalio/temporal/issues/10522), [#10521](https://github.com/temporalio/temporal/issues/10521), [#10716](https://github.com/temporalio/temporal/issues/10716), [#10718](https://github.com/temporalio/temporal/issues/10718), [#10719](https://github.com/temporalio/temporal/issues/10719)). They are mostly defensive-coding observations and TODO clarifications — useful, but they distort the "new bug" signal. Some (e.g. the SyncActivity nil-return and missing version-history validation) are real correctness gaps.

**Recommendation:** Route NasitSony's reports through a triage owner who can convert the actionable ones into tracked work items and close the "TODO/question" ones with a decision. Most of these would benefit from a single replication-correctness epic.

### 2. Cross-SDK Feature Initiative: External Payload Storage

A coordinated feature push landed: External Payload Storage Foundation, S3 driver, concurrent payload visiting, memo payload visiting, and "log slow WFT completion" each filed against multiple SDKs ([Java#2880](https://github.com/temporalio/sdk-java/issues/2880), [TS#2063](https://github.com/temporalio/sdk-typescript/issues/2063); S3: [Java#2882](https://github.com/temporalio/sdk-java/issues/2882), [TS#2065](https://github.com/temporalio/sdk-typescript/issues/2065); concurrent visiting: [Java#2881](https://github.com/temporalio/sdk-java/issues/2881), [TS#2064](https://github.com/temporalio/sdk-typescript/issues/2064); memo visitor: [Java#2884](https://github.com/temporalio/sdk-java/issues/2884); slow-WFT logging: [features#827](https://github.com/temporalio/features/issues/827), [Java#2883](https://github.com/temporalio/sdk-java/issues/2883), [TS#2066](https://github.com/temporalio/sdk-typescript/issues/2066)). Plus the Go-side proposals for [GCS driver](https://github.com/temporalio/sdk-go/issues/2364) and [PayloadCodec retry policy](https://github.com/temporalio/sdk-go/issues/2370). Two related bugs ([#2378](https://github.com/temporalio/sdk-go/issues/2378), [#1562](https://github.com/temporalio/sdk-python/issues/1562)) show the duration-stats reporting is already incorrect.

**Recommendation:** This is a coherent, well-scoped initiative. Track via an epic in the features repo and ensure the existing duration-stats bugs are fixed before the broader rollout. Consider whether Ruby / PHP / .NET should be added to the matrix.

### 3. Cross-SDK Feature Initiative: Standalone-Activity Operator Commands

Filed in parallel across all SDKs: [features#822](https://github.com/temporalio/features/issues/822), [Go#2350](https://github.com/temporalio/sdk-go/issues/2350), [Java#2878](https://github.com/temporalio/sdk-java/issues/2878), [Python#1543](https://github.com/temporalio/sdk-python/issues/1543), [TS#2061](https://github.com/temporalio/sdk-typescript/issues/2061), [.NET#706](https://github.com/temporalio/sdk-dotnet/issues/706), [Ruby#440](https://github.com/temporalio/sdk-ruby/issues/440). Pause/Unpause/Reset/UpdateOptions parity with regular activities.

**Recommendation:** Already coordinated — track delivery across all six SDKs in a single milestone.

### 4. Determinism Hazards in Async Code

[#1591](https://github.com/temporalio/sdk-python/issues/1591) (cold-start replay ordering of update vs signal handlers), [#1578](https://github.com/temporalio/sdk-python/issues/1578) (`asyncio.gather` + local activities), and [#464](https://github.com/temporalio/sdk-ruby/issues/464) (Ruby sync primitives produce un-replayable history) point at sharp edges in the async execution model. Users are encountering these in production-like setups.

**Recommendation:** Document and warn at the SDK level. Consider runtime checks that flag suspect patterns (e.g., local activities under `gather`) and add features-repo regression tests. The Ruby case suggests a real implementation bug, not just guidance.

### 5. Security & Supply-Chain Hygiene Pressure

External scanners and security-conscious users continue to file pgx, PyO3, tar, and transitive-Go CVE reports ([#10618](https://github.com/temporalio/temporal/issues/10618), [#10676](https://github.com/temporalio/temporal/issues/10676), [#10699](https://github.com/temporalio/temporal/issues/10699), [#1598](https://github.com/temporalio/sdk-python/issues/1598), [#1567](https://github.com/temporalio/sdk-python/issues/1567)), plus structural asks for [release attestations](https://github.com/temporalio/temporal/issues/10600) and [Trusted Publishing for PyPI](https://github.com/temporalio/sdk-python/issues/1546).

**Recommendation:** Adopt a standing "dep-bump + patch release" cadence (e.g. monthly). Treat release attestations and Trusted Publishing as Q-level deliverables rather than backlog items — they will keep recurring.

### 6. Configuration Templating UX

[#10410](https://github.com/temporalio/temporal/issues/10410), [#10521](https://github.com/temporalio/temporal/issues/10521), and [#10663](https://github.com/temporalio/temporal/issues/10663) all touch startup-config templating: the `# enable-template` marker is fragile, diagnostic commands don't work in containers, and validation warnings are silently swallowed. Three issues on one subsystem in 30 days is signal.

**Recommendation:** Schedule a small UX refactor of the config-loader: explicit template enablement, validation errors not warnings, container-friendly diagnostics.

---

## By Category

### Bugs (~52 issues)

- **temporal (Server):** 21 — race conditions ([#10548](https://github.com/temporalio/temporal/issues/10548), [#10321](https://github.com/temporalio/temporal/issues/10321)), cold-start hang ([#10320](https://github.com/temporalio/temporal/issues/10320)), reset/recovery defects ([#10639](https://github.com/temporalio/temporal/issues/10639), [#10690](https://github.com/temporalio/temporal/issues/10690)), replication gaps (5 issues), DB/visibility plugin (3 issues), schedule defects ([#10579](https://github.com/temporalio/temporal/issues/10579), [#10312](https://github.com/temporalio/temporal/issues/10312)), CVE/security (3 issues), Nexus link rejection ([#10345](https://github.com/temporalio/temporal/issues/10345)), service-resolver during rolling restart ([#10730](https://github.com/temporalio/temporal/issues/10730)).
- **sdk-python:** 10 — determinism (2), security (2), worker shutdown ([#1557](https://github.com/temporalio/sdk-python/issues/1557)), openai-agents (2), interceptor contract ([#1582](https://github.com/temporalio/sdk-python/issues/1582)), spurious cancellation logs ([#1600](https://github.com/temporalio/sdk-python/issues/1600)), external-storage stats ([#1562](https://github.com/temporalio/sdk-python/issues/1562)).
- **sdk-go:** 4 — metrics-on-init ([#2401](https://github.com/temporalio/sdk-go/issues/2401)), duplicate activity aliasing ([#2379](https://github.com/temporalio/sdk-go/issues/2379)), external-storage stats ([#2378](https://github.com/temporalio/sdk-go/issues/2378)), schedule priority ([#2345](https://github.com/temporalio/sdk-go/issues/2345)).
- **sdk-typescript:** 3 — Vite SSR breakage ([#2098](https://github.com/temporalio/sdk-typescript/issues/2098)), OTel cardinality ([#2108](https://github.com/temporalio/sdk-typescript/issues/2108)), runtime flakes ([#2068](https://github.com/temporalio/sdk-typescript/issues/2068)).
- **sdk-ruby:** 3 — un-replayable history ([#464](https://github.com/temporalio/sdk-ruby/issues/464)), Symbol crash ([#463](https://github.com/temporalio/sdk-ruby/issues/463)), update-with-start NOT_FOUND ([#454](https://github.com/temporalio/sdk-ruby/issues/454)).
- **sdk-java:** 1 — MR-JAR Jackson3 constructor visibility ([#2885](https://github.com/temporalio/sdk-java/issues/2885)).
- **sdk-dotnet:** 1 — flaky history-info test ([#738](https://github.com/temporalio/sdk-dotnet/issues/738)).
- **sdk-php:** 1 — listWorkflowExecutions hang ([#752](https://github.com/temporalio/sdk-php/issues/752)).

### Feature Requests (~26 issues)

- **temporal (Server):** 7 — config-templating UX ([#10410](https://github.com/temporalio/temporal/issues/10410), [#10663](https://github.com/temporalio/temporal/issues/10663)), eager activity execution default ([#10628](https://github.com/temporalio/temporal/issues/10628)), DB replicas ([#10442](https://github.com/temporalio/temporal/issues/10442)), history compression ([#10307](https://github.com/temporalio/temporal/issues/10307)), archival status filter ([#10367](https://github.com/temporalio/temporal/issues/10367)), latest activity-failure surfacing ([#10354](https://github.com/temporalio/temporal/issues/10354)), release attestations ([#10600](https://github.com/temporalio/temporal/issues/10600)).
- **External payload-storage epic:** 7 — [Java#2880](https://github.com/temporalio/sdk-java/issues/2880), [Java#2882](https://github.com/temporalio/sdk-java/issues/2882), [Java#2881](https://github.com/temporalio/sdk-java/issues/2881), [Java#2884](https://github.com/temporalio/sdk-java/issues/2884), [TS#2063](https://github.com/temporalio/sdk-typescript/issues/2063), [TS#2065](https://github.com/temporalio/sdk-typescript/issues/2065), [TS#2064](https://github.com/temporalio/sdk-typescript/issues/2064), [Go#2364](https://github.com/temporalio/sdk-go/issues/2364).
- **Standalone-activity operator commands:** 7 (one per SDK + features#822).
- **Slow-WFT logging epic:** 3 — [features#827](https://github.com/temporalio/features/issues/827), [Java#2883](https://github.com/temporalio/sdk-java/issues/2883), [TS#2066](https://github.com/temporalio/sdk-typescript/issues/2066).
- **SDK individual asks:** Python protobuf 7 ([#1579](https://github.com/temporalio/sdk-python/issues/1579)), Python Windows ARM64 wheels ([#1592](https://github.com/temporalio/sdk-python/issues/1592)), Python Trusted Publishing ([#1546](https://github.com/temporalio/sdk-python/issues/1546)), Go PayloadCodec retry ([#2370](https://github.com/temporalio/sdk-go/issues/2370)), Go envconfig Authority field ([#2369](https://github.com/temporalio/sdk-go/issues/2369)), TS package.json exports ([#2079](https://github.com/temporalio/sdk-typescript/issues/2079)), TS random API in query plugins ([#2110](https://github.com/temporalio/sdk-typescript/issues/2110)), features worker-deployment metric labels ([#845](https://github.com/temporalio/features/issues/845)).

### Questions / Internal / Testing (~9 issues)

- **TypeScript user-guidance:** projecting workflow progress to custom DB ([#2117](https://github.com/temporalio/sdk-typescript/issues/2117)).
- **Server code-clarification (NasitSony):** [#10716](https://github.com/temporalio/temporal/issues/10716), [#10718](https://github.com/temporalio/temporal/issues/10718), [#10719](https://github.com/temporalio/temporal/issues/10719).
- **Server defensive-coding TODOs:** [#10521](https://github.com/temporalio/temporal/issues/10521), [#10522](https://github.com/temporalio/temporal/issues/10522).
- **Features test infrastructure:** [#834](https://github.com/temporalio/features/issues/834), [#835](https://github.com/temporalio/features/issues/835).

---

## Recommendations

1. **Immediate (security & CVEs):** Bundle pgx >= v5.10.0, grpc / x/net / x/crypto updates, PyO3 and tar-crate bumps into Server 1.31.x and Python SDK patch releases. Resolve [#10699](https://github.com/temporalio/temporal/issues/10699), [#10676](https://github.com/temporalio/temporal/issues/10676), [#10618](https://github.com/temporalio/temporal/issues/10618), [#1598](https://github.com/temporalio/sdk-python/issues/1598), [#1567](https://github.com/temporalio/sdk-python/issues/1567) together.

2. **High Priority (production-blocking bugs):** Fix the history-service crash ([#10548](https://github.com/temporalio/temporal/issues/10548)), 1.31.0 cold-start hang ([#10320](https://github.com/temporalio/temporal/issues/10320)), child-execution SQL race ([#10321](https://github.com/temporalio/temporal/issues/10321)), schedule deadlock on retry-chain reuse ([#10579](https://github.com/temporalio/temporal/issues/10579)), reset-loses-child-completion ([#10639](https://github.com/temporalio/temporal/issues/10639)), and DLQ data loss ([#10436](https://github.com/temporalio/temporal/issues/10436)). Each is a strong candidate for a 1.31.x patch.

3. **High Priority (upgrade-blocker):** Document an online-migration path for 1.30.4's `executions_visibility` STORED-column migration ([#10358](https://github.com/temporalio/temporal/issues/10358)). Customers with multi-million-row tables cannot adopt 1.30.x without it.

4. **High Priority (SDK regressions):** Ship a TypeScript 1.16.x patch for the Vite SSR breakage ([#2098](https://github.com/temporalio/sdk-typescript/issues/2098)) and a Ruby patch for the Symbol crash ([#463](https://github.com/temporalio/sdk-ruby/issues/463)) and sync-primitives history bug ([#464](https://github.com/temporalio/sdk-ruby/issues/464)).

5. **Medium Priority (operational):** Worker-shutdown reliability ([#1557](https://github.com/temporalio/sdk-python/issues/1557)), PHP gRPC hang ([#752](https://github.com/temporalio/sdk-php/issues/752)), Go metric-on-init counter behavior ([#2401](https://github.com/temporalio/sdk-go/issues/2401)), SQL prepared-statement leak ([#10392](https://github.com/temporalio/temporal/issues/10392)), tdbg regression ([#10635](https://github.com/temporalio/temporal/issues/10635)).

6. **Medium Priority (epics):** Coordinate the External Payload Storage and Standalone Activity Operator Commands cross-SDK initiatives via the features repo. Fix the pre-existing duration-stats bugs ([#2378](https://github.com/temporalio/sdk-go/issues/2378), [#1562](https://github.com/temporalio/sdk-python/issues/1562)) before the external-storage rollout.

7. **Track (patterns):** Treat replication/NDC defensive-coding reports as one epic; treat async/replay-determinism reports as one epic; treat config-templating UX as a small follow-up refactor. The first two will keep generating tickets if not addressed structurally.

8. **Process:** Adopt monthly dependency-bump + patch-release cadence; prioritise release attestations ([#10600](https://github.com/temporalio/temporal/issues/10600)) and PyPI Trusted Publishing ([#1546](https://github.com/temporalio/sdk-python/issues/1546)) on the security roadmap.
