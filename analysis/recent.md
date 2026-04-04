# Recent Issues Analysis

**Generated:** 2026-04-04
**Period:** Last 30 days (76 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity. New issues will have cards generated if the semantic pipeline has been run.

---

## Urgent Issues Requiring Attention

### High: Security Vulnerabilities in Docker Images and SDK Dependencies

Multiple security reports across the server and Python SDK identify CVEs that affect production deployments.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9682](https://github.com/temporalio/temporal/issues/9682) | Server | Multiple HIGH CVEs in Docker images: CVE-2025-61729 (Go crypto/x509, CVSS 7.5), CVE-2025-69419 and CVE-2025-11187 (OpenSSL), plus moderate CVEs in Python and Expat. Affects UI, Admin Tools, and Server images |
| [#9494](https://github.com/temporalio/temporal/issues/9494) | Server | HIGH CVE-2026-24051 in go.opentelemetry.io/otel/sdk v1.34.0 in server v1.29.4. Already closed (addressed in newer code) |
| [#1403](https://github.com/temporalio/sdk-python/issues/1403) | Python | CVEs in rustls-webpki (GHSA-pwjx-qhcg-rvj4) and tar-rs (CVE-2026-33055, CVE-2026-33056). Dependabot PRs already created (#1383, #1384) but awaiting merge |
| [#1359](https://github.com/temporalio/sdk-python/issues/1359) | Python | CVE-2026-31812 (HIGH) in quinn-proto 0.11.12 -- unauthenticated remote DoS. Needs bump to >= 0.11.14 |
| [#1358](https://github.com/temporalio/sdk-python/issues/1358) | Python | Duplicate report of CVE-2026-31812 in quinn-proto |

**Recommendation:** The server Docker images should be rebuilt with Go 1.24.11+ or 1.25.5+ and updated base image dependencies. The Python SDK has three separate security reports with existing Dependabot PRs -- merging them and cutting a release should be prioritized. Users running server v1.29.x images should assess exposure.

### High: MySQL Persistence Bugs Causing Connection Exhaustion and Deadlocks

Two separate MySQL bugs can cause severe production outages under normal operational conditions.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9784](https://github.com/temporalio/temporal/issues/9784) | Server | `DeleteFromVisibility` executes DELETEs on `mdb` instead of `tx`, holding 2 connections per delete. Under concurrent visibility deletes, this exhausts the connection pool causing `context deadline exceeded`. Confirmed on v1.25.0 through v1.30.3 and current main |
| [#9747](https://github.com/temporalio/temporal/issues/9747) | Server | `reconnect()` creates new sql.DB pools during DB unavailability without bounding total pool count. A 2.5-minute MySQL restart caused 10,330 connections (vs expected max of 2,688), overwhelming the database and extending a brief restart into a 35-minute outage |

The visibility bug (#9784) has a clear 3-line fix changing `mdb.NamedExecContext` to `tx.NamedExecContext`. The reconnect bug (#9747) is architectural -- the per-instance maxConns limit is bypassed when multiple sql.DB generations accumulate.

**Recommendation:** The visibility transaction bug (#9784) should be fixed immediately -- it affects every MySQL deployment with workflow retention cleanup. The reconnect pool accumulation (#9747) requires a design change to either reuse the existing sql.DB or enforce a global connection limit. MySQL users should monitor connection counts during database maintenance windows.

### High: Java SDK Local Activity Pool Exhaustion

A design issue in the Java SDK causes workflows to hang permanently when the local activity thread pool is fully consumed.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#2823](https://github.com/temporalio/sdk-java/issues/2823) | Java | When `maxConcurrentLocalActivityExecutionSize` threads are all blocked (e.g., on hung gRPC calls), subsequent local activities queue forever. Workflows become permanently stuck with no timeout or failure. Only recovery is workflow reset |

The reporter provides a self-contained reproduction and confirms that setting `scheduleToCloseTimeout` on LocalActivityOptions prevents the hang.

**Recommendation:** Java SDK users relying on local activities should set `scheduleToCloseTimeout` as a defensive measure. The SDK should consider enforcing a default timeout or failing the workflow task when local activities cannot be dispatched within a reasonable time.

### Medium: Worker Deployment and Versioning Regressions

Reports of issues with the new worker deployment versioning feature in server 1.30.x.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9581](https://github.com/temporalio/temporal/issues/9581) | Server | `set-current-version` cannot switch to unversioned in default namespace -- "BuildID cannot be empty" error on Server 1.30.1 / CLI 1.6.1 |
| [#1962](https://github.com/temporalio/sdk-typescript/issues/1962) | TypeScript | Unable to set `defaultVersioningBehavior` to `UNSPECIFIED` in `workerDeploymentOptions` |

**Recommendation:** These appear to be regressions in the new worker deployment versioning feature. Users adopting versioning in 1.30.x should be aware of these edge cases around unversioned/unspecified behavior.

### Medium: TypeScript SDK Nondeterminism and Correctness Bugs

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1966](https://github.com/temporalio/sdk-typescript/issues/1966) | TypeScript | Nondeterminism error during replay: duplicate UpdateResponse and StartTimer commands sent for the same update instance. Observed on TypeScript 1.15.0 with Temporal Cloud |
| [#1960](https://github.com/temporalio/sdk-typescript/issues/1960) | TypeScript | `executeUpdateWithStart` leaks unhandled Promise rejection when gRPC call fails before first response. Node.js terminates the process due to `unhandledRejection` even when caller has proper error handling |

**Recommendation:** The nondeterminism error (#1966) appears to be a one-off but may indicate a deeper replay issue in the TypeScript SDK's update handling. The promise leak (#1960) has a clear root cause in the `WithStartWorkflowOperation` constructor and should be straightforward to fix.

---

## Emerging Themes

### 1. Cross-SDK Schedule Update Conflict Token Support

The largest coordinated effort in this period: identical issues filed across all 8 SDKs plus the features repo to add conflict token retry loop support for schedule updates.

- Support conflict token retry loop for schedule updates ([#777](https://github.com/temporalio/features/issues/777))
- Go SDK ([#2233](https://github.com/temporalio/sdk-go/issues/2233))
- TypeScript SDK ([#1967](https://github.com/temporalio/sdk-typescript/issues/1967))
- Python SDK ([#1367](https://github.com/temporalio/sdk-python/issues/1367))
- Java SDK ([#2809](https://github.com/temporalio/sdk-java/issues/2809))
- .NET SDK ([#624](https://github.com/temporalio/sdk-dotnet/issues/624))
- PHP SDK ([#729](https://github.com/temporalio/sdk-php/issues/729))
- Ruby SDK ([#401](https://github.com/temporalio/sdk-ruby/issues/401))

**Recommendation:** Coordinate implementation across all SDKs for consistent behavior. This is a significant usability improvement for schedule management.

### 2. External Storage and Payload Infrastructure

A cluster of issues from the same author (jmaeagle99) focusing on external payload storage capabilities across SDKs.

- S3 External Storage Driver ([#783](https://github.com/temporalio/features/issues/783), [#2251](https://github.com/temporalio/sdk-go/issues/2251), [#1390](https://github.com/temporalio/sdk-python/issues/1390))
- Allow payload visitors to visit memo payloads in aggregate ([#782](https://github.com/temporalio/features/issues/782), [#2252](https://github.com/temporalio/sdk-go/issues/2252))
- Enable concurrent payload visiting ([#772](https://github.com/temporalio/features/issues/772), [#2223](https://github.com/temporalio/sdk-go/issues/2223), [#1356](https://github.com/temporalio/sdk-python/issues/1356))
- Headers should always run through external storage ([#1395](https://github.com/temporalio/sdk-python/issues/1395))

**Recommendation:** These represent a coherent initiative to improve external payload storage. The S3 driver and concurrent visiting features would benefit users dealing with large payloads. Header handling through external storage (#1395) is a bug that may cause data inconsistency.

### 3. MySQL and Database Persistence Issues

An unusual concentration of MySQL-specific bugs in this period, several of which can cause production outages.

- MySQL DeleteFromVisibility connection pool deadlock ([#9784](https://github.com/temporalio/temporal/issues/9784))
- MySQL reconnect creates unbounded connection pools ([#9747](https://github.com/temporalio/temporal/issues/9747))
- Unable to create visibility database schema for MySQL ([#9522](https://github.com/temporalio/temporal/issues/9522))
- postgres12_pgx plugin integer parsing failure ([#9804](https://github.com/temporalio/temporal/issues/9804))
- SQLite plugin ignores MaxConns config ([#9686](https://github.com/temporalio/temporal/issues/9686))
- history_node table unbounded growth ([#9549](https://github.com/temporalio/temporal/issues/9549))

**Recommendation:** The MySQL connection pool issues (#9784, #9747) are the most urgent. The broader pattern suggests the SQL persistence layer needs a focused review, particularly around connection management and transaction handling.

### 4. Cross-Namespace Deprecation

A coordinated effort to deprecate cross-namespace workflow command support, filed across the API and multiple SDKs.

- Deprecate cross-namespace support in workflow commands/events ([#750](https://github.com/temporalio/api/issues/750))
- Go SDK deprecation ([#2264](https://github.com/temporalio/sdk-go/issues/2264))
- Java SDK deprecation ([#2826](https://github.com/temporalio/sdk-java/issues/2826))

**Recommendation:** This is a planned API change. Ensure deprecation warnings are clear and migration paths are documented before removal in a future version.

### 5. OpenTelemetry Instrumentation Issues

Multiple TypeScript SDK issues around OpenTelemetry integration quality.

- OTel traces for CompleteAsyncError incorrectly show as error ([#1974](https://github.com/temporalio/sdk-typescript/issues/1974))
- maybeAddErrorToSpan fails when err is undefined ([#1975](https://github.com/temporalio/sdk-typescript/issues/1975))
- Upgrade @opentelemetry/sdk-trace in interceptors-opentelemetry ([#1987](https://github.com/temporalio/sdk-typescript/issues/1987))
- Explain OpenTelemetryPlugin interaction with WorkflowCodeBundler ([#1971](https://github.com/temporalio/sdk-typescript/issues/1971))
- Prometheus Gauge Collision for cache_size on server ([#9600](https://github.com/temporalio/temporal/issues/9600))

**Recommendation:** The TypeScript OTel integration has several rough edges that affect observability quality. The span error and undefined error bugs should be fixed to prevent misleading dashboards and alerts.

### 6. Worker and Poller Reliability

Issues around worker behavior under stress or unusual conditions.

- Java SDK WORKER_TASK_SLOTS_AVAILABLE stuck at zero with PollerBehaviorAutoscaling ([#2802](https://github.com/temporalio/sdk-java/issues/2802))
- Go SDK pollerBalancer.balance can block due to non-deterministic map iteration ([#2236](https://github.com/temporalio/sdk-go/issues/2236))
- Go SDK taskWorker.taskPollerType not being set ([#2235](https://github.com/temporalio/sdk-go/issues/2235))
- Poller Autoscaling should scale down if no tasks are received ([#770](https://github.com/temporalio/features/issues/770))

**Recommendation:** The autoscaling poller feature appears to have issues across SDKs. The Java SDK stuck-at-zero bug (#2802) can effectively stop a worker from processing tasks. These should be addressed before the autoscaling feature is promoted.

---

## By Category

### Bugs (28 issues)
- **Server:** 11 (MySQL visibility deadlock, MySQL reconnect pool explosion, postgres12_pgx integer parsing, batch job hang, schedule deletion after unpause, dev server unreachable in Docker, missing defer in replication, Prometheus gauge collision, persistenceMaxQPS=0 rate limiter, server bind interface, visibility schema creation)
- **TypeScript SDK:** 7 (nondeterminism in update replay, child workflow missing field, updateWithStart promise leak, Worker.create ignores LoadedDataConverter, OTel CompleteAsyncError, maybeAddErrorToSpan undefined, versioning UNSPECIFIED behavior)
- **Python SDK:** 2 (headers not through external storage, workflow.sleep timer not canceled on task cancel)
- **Go SDK:** 2 (pollerBalancer blocking, taskPollerType not set)
- **Java SDK:** 1 (runner-closed error masking original exception)
- **Ruby SDK:** 1 (parallel test configuration crash in Rails)
- **PHP SDK:** 1 (startTemporalTestServer checks for running instance)
- **Features:** 1 (envconfig no user config dir)
- **API:** 1 (cross-namespace deprecation)

### Security (5 issues)
- **Server:** 2 (Docker image CVEs #9682, v1.29.4 OTel CVE #9494)
- **Python SDK:** 3 (rustls-webpki/tar CVEs #1403, quinn-proto CVE #1359, #1358)

### Feature Requests (36 issues)
- **Features repo:** 5 (schedule conflict tokens, S3 external storage, payload visitor memos, concurrent payload visiting, poller autoscaling scale-down)
- **Go SDK:** 5 (cross-namespace deprecation, memo payload visitors, S3 storage driver, concurrent payload visiting, code coverage tooling)
- **TypeScript SDK:** 4 (OTel upgrade, OTel/bundler docs, worker without bundled workflows, workflow bundler module preloading, heartbeat runtime info)
- **Python SDK:** 5 (S3 storage driver, concurrent payload visiting, contrib activity_cache, contrib workdir, GNAP agent coordination)
- **Server:** 5 (nested PermissionsClaimName, memory improvements, SurrealDB support, SQLite MaxConns, worker deployment unversioned)
- **Java SDK:** 2 (cross-namespace deprecation, schedule conflict tokens)
- **SDK-wide:** 8 (schedule conflict tokens across .NET, PHP, Ruby, Python, Java)
- **PHP SDK:** 1 (protobuf v5)
- **Ruby SDK:** 1 (schedule conflict tokens)
- **.NET SDK:** 1 (schedule conflict tokens)

### Internal/Testing (4 issues)
- Batch job malformed query hang ([#9782](https://github.com/temporalio/temporal/issues/9782))
- No arm64 images for 1.30+ ([#9526](https://github.com/temporalio/temporal/issues/9526))
- Git hooks feature request filed on wrong repo ([#9588](https://github.com/temporalio/temporal/issues/9588))
- Spam/empty template ([#754](https://github.com/temporalio/api/issues/754) -- closed immediately)

### Questions/Support (3 issues)
- Workflow delays/gaps between activities ([#9563](https://github.com/temporalio/temporal/issues/9563))
- Cleanup on FailWorkflow panic policy ([#2217](https://github.com/temporalio/sdk-go/issues/2217))
- UpdateWorkflowExecution disabled on namespace ([#9800](https://github.com/temporalio/temporal/issues/9800))

---

## Recommendations

1. **Immediate:** Fix the MySQL `DeleteFromVisibility` transaction bug ([#9784](https://github.com/temporalio/temporal/issues/9784)). This is a 3-line fix that affects every MySQL deployment running visibility cleanup. The bug exists from v1.25.0 through current main and causes connection pool exhaustion under normal workload.

2. **Immediate:** Merge the Python SDK Dependabot PRs for security CVEs ([#1403](https://github.com/temporalio/sdk-python/issues/1403), [#1359](https://github.com/temporalio/sdk-python/issues/1359)) and cut a release. Three separate reporters have flagged these, and the fixes already exist as PRs.

3. **High Priority:** Rebuild Temporal Server Docker images with updated Go runtime (1.24.11+ or 1.25.5+) and base image dependencies to address CVE-2025-61729 and other CVEs ([#9682](https://github.com/temporalio/temporal/issues/9682)).

4. **High Priority:** Address the MySQL reconnect pool accumulation ([#9747](https://github.com/temporalio/temporal/issues/9747)). A real-world incident extended a 2.5-minute database restart into a 35-minute outage affecting all workflows. This requires a design change to bound total connection count across pool generations.

5. **High Priority:** Fix or document the Java SDK local activity pool exhaustion issue ([#2823](https://github.com/temporalio/sdk-java/issues/2823)). Workflows hanging permanently with no recovery path is a severe production risk. At minimum, documentation should recommend always setting `scheduleToCloseTimeout` on local activities.

6. **Medium Priority:** Investigate the TypeScript SDK nondeterminism error with update replay ([#1966](https://github.com/temporalio/sdk-typescript/issues/1966)) and fix the `executeUpdateWithStart` promise leak ([#1960](https://github.com/temporalio/sdk-typescript/issues/1960)). The promise leak crashes Node.js processes even with correct error handling.

7. **Track:** The poller autoscaling feature has bugs in both Java (#2802) and Go (#2236) SDKs. Monitor for additional reports before the feature is promoted out of experimental status.

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
