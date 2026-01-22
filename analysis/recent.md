# Recent Issues Analysis

**Generated:** 2026-01-22
**Period:** Last 30 days (71 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity. New issues will have cards generated if the semantic pipeline has been run.

---

## Urgent Issues Requiring Attention

### High: Security Vulnerability (1 issue)

A Rust dependency vulnerability in the Python SDK:
- Python [#1294](https://github.com/temporalio/sdk-python/issues/1294) - Security: Update lru Rust dependency to 0.16.3 (GHSA-rhfx-m35p-ff5j)

**Recommendation:** Update the lru Rust dependency in the Python SDK's core bridge. Review other SDKs using similar Rust dependencies.

### High: Production Stability (4 issues)

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | Python | Worker intermittently stops polling after synchronous activity completion |
| [#1268](https://github.com/temporalio/sdk-python/issues/1268) | Python | Activity/workflow pollers drop to 0 ignoring minimum/maximum settings |
| [#373](https://github.com/temporalio/sdk-ruby/issues/373) | Ruby | Fiber state corruption after Workflow.timeout expires on x86_64 |
| [#599](https://github.com/temporalio/sdk-dotnet/issues/599) | .NET | TemporalWorker::ExecuteAsync swallows exceptions, throws TaskCanceledException |

**Recommendation:** The Python poller issues ([#1295](https://github.com/temporalio/sdk-python/issues/1295), [#1268](https://github.com/temporalio/sdk-python/issues/1268)) are critical as they cause workers to silently become unresponsive. The Ruby fiber corruption continues from last period and needs native bridge investigation.

### Medium: Data Integrity & Operations (5 issues)

| Issue | SDK | Impact |
|-------|-----|--------|
| [#8902](https://github.com/temporalio/temporal/issues/8902) | Server | History service memory usage upward trend - potential OOM risk |
| [#9021](https://github.com/temporalio/temporal/issues/9021) | Server | Possible premature deletion in History Scavenger |
| [#8909](https://github.com/temporalio/temporal/issues/8909) | Server | Deprecation error log with Elasticsearch 8.19.2 |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | .NET | Workflow task failures may be lost silently |
| [#584](https://github.com/temporalio/sdk-dotnet/issues/584) | .NET | TLS certificates from path doesn't work |

**Recommendation:** History Scavenger premature deletion ([#9021](https://github.com/temporalio/temporal/issues/9021)) and memory leak ([#8902](https://github.com/temporalio/temporal/issues/8902)) require investigation before they cause data loss or outages.

---

## Emerging Themes

### 1. Worker Versioning GA Preparation

Concentrated activity on Go SDK versioning APIs for the upcoming v1.30 release:
- [#2163](https://github.com/temporalio/sdk-go/issues/2163) - Make Pinned Version Optional when setting Pinned Override
- [#2162](https://github.com/temporalio/sdk-go/issues/2162) - Expose TaskQueueStats and TaskQueueConfig in DescribeTaskQueue
- [#2161](https://github.com/temporalio/sdk-go/issues/2161) - Expose Backlog Stats in DescribeVersion
- [#2160](https://github.com/temporalio/sdk-go/issues/2160) - Expose Upgrade-on-CaN option and ContinueAsNewSuggestedReasons
- [#2159](https://github.com/temporalio/sdk-go/issues/2159) - Expose RoutingConfigUpdateState in VersionInfo
- Features [#726](https://github.com/temporalio/features/issues/726) - Versioning Support for OSS v1.30

**Recommendation:** This is a coordinated effort led by carlydf to complete Versioning GA. Monitor completion and expect similar issues in other SDKs to achieve parity.

### 2. Payload Size Management (Cross-SDK)

New initiative to proactively handle large payloads:
- Python [#1289](https://github.com/temporalio/sdk-python/issues/1289) - Warn if SDK detects a workflow history over a certain size
- Python [#1285](https://github.com/temporalio/sdk-python/issues/1285) - SDK should fail workflow task if payloads size is known to be too large
- Python [#1284](https://github.com/temporalio/sdk-python/issues/1284) - Warn if the SDK tried to send a payload above a specific size
- Features [#723](https://github.com/temporalio/features/issues/723) - SDK should fail workflow task if payloads size is known to be too large

All issues by jmaeagle99, indicating a coordinated effort to add payload size safeguards across SDKs.

**Recommendation:** This is proactive error prevention work that will help users avoid hitting server limits. Expect similar issues in other SDKs.

### 3. Sandbox Security & Isolation (Python)

Multiple Python sandbox issues surfacing:
- [#1287](https://github.com/temporalio/sdk-python/issues/1287) - Workflow sandbox does not always restrict usage of urllib3
- [#1280](https://github.com/temporalio/sdk-python/issues/1280) - Unable to test child workflow cancellation: Invalid transition in activity

**Recommendation:** Review Python sandbox restrictions comprehensively. The urllib3 bypass ([#1287](https://github.com/temporalio/sdk-python/issues/1287)) could allow non-deterministic network calls from workflows.

### 4. AI-SDK Integration Issues (TypeScript)

Continued AI integration bugs:
- [#1889](https://github.com/temporalio/sdk-typescript/issues/1889) - AI-SDK: Missing descriptions of tools, fields and wrong input parameter definitions
- [#1881](https://github.com/temporalio/sdk-typescript/issues/1881) - AI-SDK: callToolActivity issues
- [#1880](https://github.com/temporalio/sdk-typescript/issues/1880) - ai-sdk: call tool activity

**Recommendation:** AI-SDK integration needs stabilization. Multiple issues from maxi1555 indicate rough edges in the TypeScript AI integration layer.

### 5. Search Attribute Handling Improvements

Multiple improvements to search attribute behavior:
- Go [#2150](https://github.com/temporalio/sdk-go/issues/2150) - Stop sending null search attribute values on workflow start and continue as new
- Server [#9056](https://github.com/temporalio/temporal/issues/9056) - Ignore null search attributes when starting/creating things
- TypeScript [#1908](https://github.com/temporalio/sdk-typescript/issues/1908) - Update documentation on typedSearchAttributes

**Recommendation:** Coordinate null search attribute handling changes across SDKs and server to ensure consistency.

### 6. PHP SDK Ecosystem Modernization

Ongoing PHP compatibility work:
- [#698](https://github.com/temporalio/sdk-php/issues/698) - Proposal to drop old package support
- [#692](https://github.com/temporalio/sdk-php/issues/692) - Composer requirements conflict with react/promise v2
- [#689](https://github.com/temporalio/sdk-php/issues/689) - SDK extension check breaking composer's --ignore-platform-reqs

**Recommendation:** The drop-old-packages proposal could simplify maintenance. Both Composer issues are blocking installation for some users.

---

## By Category

### Bugs (23 issues)

| Repository | Count | Key Issues |
|------------|-------|------------|
| Python SDK | 7 | Worker polling, sandbox bypass, child workflow cancellation, query logs |
| TypeScript SDK | 6 | AI-SDK bugs, env config, operatorService access, search attributes docs |
| .NET SDK | 4 | Exception swallowing, TLS loading, workflow task failures, Nexus flake |
| Go SDK | 2 | Activity alias collision, OTel metric types |
| Server | 2 | RPC deadline ignored, scheduled time incorrect |
| PHP SDK | 2 | Composer conflicts, extension check |
| Ruby SDK | 1 | Fiber state corruption |
| Features | 1 | Query logs not emitted |

### Feature Requests (28 issues)

| Repository | Count | Key Issues |
|------------|-------|------------|
| Server | 7 | QPS limits, null search attributes, custom headers, substring filter |
| Go SDK | 6 | Versioning GA APIs (5), Datadog v2 integration |
| Features | 4 | Versioning, payload size, workflow ID, priority in WorkflowInfo |
| Python SDK | 4 | CancelledError inheritance, history size warning, payload warnings |
| TypeScript SDK | 3 | Deterministic PRNG, activityType counts, logging in queries |
| .NET SDK | 2 | SafeHandle refactoring, linux-musl-arm64 support |
| Java SDK | 2 | Temporal failures in Nexus, OpenTracing updateWithStart |
| PHP SDK | 1 | Drop old package support |

### Internal/Questions (20 issues)

- Release version tracking ([#8967](https://github.com/temporalio/temporal/issues/8967))
- Fairness weight question ([#8968](https://github.com/temporalio/temporal/issues/8968))
- Java activity timeout behavior ([#2753](https://github.com/temporalio/sdk-java/issues/2753))
- Java test failures ([#2750](https://github.com/temporalio/sdk-java/issues/2750))
- MCP Server proposal ([#8955](https://github.com/temporalio/temporal/issues/8955))
- Architecture guide ([#9057](https://github.com/temporalio/temporal/issues/9057))
- Various SDK internal improvements and tracking issues

---

## By Repository

| Repository | New Issues | Bugs | Features | Other |
|------------|------------|------|----------|-------|
| Server | 16 | 2 | 7 | 7 |
| Python SDK | 12 | 7 | 4 | 1 |
| TypeScript SDK | 10 | 6 | 3 | 1 |
| Go SDK | 9 | 2 | 6 | 1 |
| .NET SDK | 8 | 4 | 2 | 2 |
| Features | 6 | 1 | 4 | 1 |
| Java SDK | 6 | 0 | 2 | 4 |
| PHP SDK | 3 | 2 | 1 | 0 |
| Ruby SDK | 1 | 1 | 0 | 0 |

---

## Active Contributors

Top contributors in the last 30 days:
- **cretz** (7 issues) - Multi-SDK improvements, search attributes, scheduling
- **jmaeagle99** (7 issues) - .NET SDK, payload size safeguards, Nexus flakes
- **carlydf** (6 issues) - Go SDK Versioning GA preparation
- **maxi1555** (3 issues) - TypeScript AI-SDK bug reports
- **stephanos** (2 issues) - Priority in WorkflowInfo, RPC deadline
- **xepozz** (2 issues) - PHP SDK Composer improvements
- **marcoriopel** (2 issues) - Cross-SDK query logging issues
- **pvsone** (2 issues) - Cross-SDK environment configuration

---

## Recommendations

### Immediate (This Week)

1. **Security:** Update lru Rust dependency in Python SDK ([#1294](https://github.com/temporalio/sdk-python/issues/1294))
2. **Stability:** Investigate Python worker polling issues ([#1295](https://github.com/temporalio/sdk-python/issues/1295), [#1268](https://github.com/temporalio/sdk-python/issues/1268)) - workers becoming unresponsive

### High Priority (This Sprint)

3. **Stability:** Fix Ruby fiber corruption ([#373](https://github.com/temporalio/sdk-ruby/issues/373)) - native bridge issue
4. **Stability:** Address .NET exception handling ([#599](https://github.com/temporalio/sdk-dotnet/issues/599), [#588](https://github.com/temporalio/sdk-dotnet/issues/588))
5. **Data Integrity:** Investigate History Scavenger premature deletion ([#9021](https://github.com/temporalio/temporal/issues/9021))
6. **Operations:** Investigate history service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902))

### Medium Priority (This Month)

7. **Sandbox:** Fix Python urllib3 sandbox bypass ([#1287](https://github.com/temporalio/sdk-python/issues/1287))
8. **Compatibility:** Fix PHP Composer conflicts ([#692](https://github.com/temporalio/sdk-php/issues/692), [#689](https://github.com/temporalio/sdk-php/issues/689))
9. **Compatibility:** Address Spring Boot 4 compatibility ([#2758](https://github.com/temporalio/sdk-java/issues/2758))
10. **Server:** Verify Elasticsearch 8.x compatibility ([#8909](https://github.com/temporalio/temporal/issues/8909))
11. **Cross-SDK:** Coordinate search attribute null handling ([#2150](https://github.com/temporalio/sdk-go/issues/2150), [#9056](https://github.com/temporalio/temporal/issues/9056))
12. **AI Integration:** Stabilize TypeScript AI-SDK ([#1889](https://github.com/temporalio/sdk-typescript/issues/1889), [#1881](https://github.com/temporalio/sdk-typescript/issues/1881))

### Track & Monitor

13. **Versioning GA:** Monitor Go SDK versioning completion ([#2159-2163](https://github.com/temporalio/sdk-go/issues/2159)) and Features [#726](https://github.com/temporalio/features/issues/726)
14. **Payload Safety:** Track payload size safeguard implementation across SDKs ([#1285](https://github.com/temporalio/sdk-python/issues/1285), [#723](https://github.com/temporalio/features/issues/723))
15. **AI Integration:** Watch for MCP server interest ([#8955](https://github.com/temporalio/temporal/issues/8955)) and continued AI-SDK improvements
16. **PHP Ecosystem:** Review package support proposal ([#698](https://github.com/temporalio/sdk-php/issues/698))

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
