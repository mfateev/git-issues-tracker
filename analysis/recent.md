# Recent Issues Analysis

**Generated:** 2026-01-09
**Period:** Last 30 days (49 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerabilities (2 issues)
- Server [#8866](https://github.com/temporalio/temporal/issues/8866) - CVE-2025-61729 golang:crypto/x509
- Server [#8865](https://github.com/temporalio/temporal/issues/8865) - CVE-2025-61727 golang:crypto/x509

**Recommendation:** Address in next server release. These crypto/x509 vulnerabilities in the Go standard library could affect TLS certificate validation.

### High: Production Bugs & Crashes (5 issues)
- .NET [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux
- .NET [#584](https://github.com/temporalio/sdk-dotnet/issues/584) - TLS certificates from path doesn't work
- Ruby [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber state corruption after Workflow.timeout expires
- Server [#8902](https://github.com/temporalio/temporal/issues/8902) - History service memory usage upward trend
- Python [#1268](https://github.com/temporalio/sdk-python/issues/1268) - Activity/workflow pollers drop to 0

**Recommendation:** Prioritize native bridge crashes (.NET, Ruby) as they affect production stability. Memory leaks in history service require investigation before they cause outages.

### Medium: Operational Concerns (4 issues)
- Server [#8943](https://github.com/temporalio/temporal/issues/8943) - No admin-tools image for 1.29.2
- Server [#8864](https://github.com/temporalio/temporal/issues/8864) - Workflow cannot run with dedicated cloud PostgreSQL
- Server [#8970](https://github.com/temporalio/temporal/issues/8970) - Client-set RPC deadline ignored for long poll
- Server [#8909](https://github.com/temporalio/temporal/issues/8909) - Deprecation error log with Elasticsearch 8.19.2

**Recommendation:** Release admin-tools image, investigate cloud PostgreSQL compatibility, verify Elasticsearch 8.x support.

---

## Emerging Themes

### 1. Native Bridge Stability Issues
The .NET SDK is seeing concentrated work on native bridge lifecycle management. Multiple issues relate to SafeHandle and unmanaged pointer handling:
- [#586](https://github.com/temporalio/sdk-dotnet/issues/586) - Separate unmanaged pointer lifecycle into SafeHandles
- [#587](https://github.com/temporalio/sdk-dotnet/issues/587) - Refactor Bridge.Client to IDisposable
- [#577](https://github.com/temporalio/sdk-dotnet/issues/577) - Investigate test host crash flake
- [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash on Linux
- [#588](https://github.com/temporalio/sdk-dotnet/issues/588) - Workflow task failures may be lost

Ruby also reports native bridge issues: [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber corruption after timeout.

**Recommendation:** Coordinate cross-SDK review of Rust core bridge integration patterns. The SafeHandle refactoring work in .NET ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)) may establish patterns applicable to other language bindings.

### 2. Environment Configuration Bug (Cross-SDK)
Two SDKs report the same macOS file path issue:
- TypeScript [#1869](https://github.com/temporalio/sdk-typescript/issues/1869)
- Java [#2754](https://github.com/temporalio/sdk-java/issues/2754)

Both reported by the same author (pvsone) on the same day (2026-01-04), suggesting a shared configuration reading component or common SDK tooling issue.

**Recommendation:** Fix in shared SDK tooling to prevent similar issues in other SDKs. Check if Python, Go, .NET have the same bug.

### 3. Nexus Integration Expansion
Multiple SDKs are extending Nexus support:
- Java [#2755](https://github.com/temporalio/sdk-java/issues/2755) - Support Temporal failures in Nexus APIs
- .NET [#578](https://github.com/temporalio/sdk-dotnet/issues/578) - Add Nexus tests for time-skipping environment
- .NET [#585](https://github.com/temporalio/sdk-dotnet/issues/585) - Nexus operation ignores ScheduleToCloseTimeout

**Recommendation:** Track Nexus feature parity across SDKs. The timeout behavior in [#585](https://github.com/temporalio/sdk-dotnet/issues/585) may indicate a protocol-level issue.

### 4. OpenTelemetry Metric Type Correctness
- Go [#2140](https://github.com/temporalio/sdk-go/issues/2140) - OpenTelemetry incorrect metric type for Counter

This could indicate similar issues in other SDKs using the core bridge for metrics.

**Recommendation:** Audit OTel metric types across all SDKs to ensure counters, histograms, and gauges are correctly categorized.

### 5. Server Release Concerns
Several issues around the 1.29.x and 1.30.0 releases:
- [#8967](https://github.com/temporalio/temporal/issues/8967) - 1.30.0 release version inquiry
- [#8943](https://github.com/temporalio/temporal/issues/8943) - No admin-tools image for 1.29.2
- [#8909](https://github.com/temporalio/temporal/issues/8909) - Deprecation error log with Elasticsearch 8.19.2

**Recommendation:** Ensure release artifacts are complete and tested with common infrastructure versions (Elasticsearch 8.x, PostgreSQL cloud offerings).

### 6. MCP/AI Integration Interest
- Server [#8955](https://github.com/temporalio/temporal/issues/8955) - MCP Server for Temporal Workflows
- TypeScript [#1864](https://github.com/temporalio/sdk-typescript/issues/1864) - Update AI SDK integration to v6
- Python [#1255](https://github.com/temporalio/sdk-python/issues/1255) - Update openai-agents dependency

Growing interest in AI/ML workflow integration, with requests for MCP (Model Context Protocol) server support and updated AI SDK integrations.

### 7. Scheduler and Timing Issues
- Server [#8953](https://github.com/temporalio/temporal/issues/8953) - The scheduled time is incorrect
- Server [#8833](https://github.com/temporalio/temporal/issues/8833) - Scheduler does not list workflows when using triggerImmediately

**Recommendation:** Review scheduler implementation for edge cases around immediate triggers and time calculations.

---

## By Category

### Bugs (26 issues)
| Area | Count | Key Issues |
|------|-------|------------|
| Server | 7 | Security CVEs, memory usage, scheduling, deadlines, PostgreSQL |
| .NET SDK | 5 | SIGSEGV crash, TLS loading, workflow task failures, test flake |
| Python SDK | 5 | Pollers, logs, ApplicationError, sandbox, openai-agents |
| TypeScript SDK | 3 | Env config, signal condition, gRPC deadline error |
| PHP SDK | 2 | Composer conflicts, extension check |
| Go SDK | 2 | Activity alias collision, OTel metric types |
| Ruby SDK | 1 | Fiber state corruption |
| Features | 1 | pnpm build |

### Feature Requests (13 issues)
| Area | Count | Key Issues |
|------|-------|------------|
| Server | 3 | MCP server, skip re-executing activities, PR review tool |
| .NET SDK | 3 | SafeHandle refactor x2, Nexus time-skipping tests, workflow analyzer |
| TypeScript SDK | 2 | Per-worker logger, AI SDK v6 |
| Java SDK | 3 | Nexus failures, OpenTracing updateWithStart, Spring placeholders |
| Python SDK | 1 | Sync activities for ThreadPoolExecutor |
| PHP SDK | 1 | Symfony 8.0 support |
| Features | 1 | Worker metadata in UI/CLI |

### Questions & Other (10 issues)
- Server test ticket ([#8806](https://github.com/temporalio/temporal/issues/8806))
- Release version inquiry ([#8967](https://github.com/temporalio/temporal/issues/8967))
- Fairness weight question ([#8968](https://github.com/temporalio/temporal/issues/8968))
- Java activity timeout behavior ([#2753](https://github.com/temporalio/sdk-java/issues/2753))
- Java test failures ([#2750](https://github.com/temporalio/sdk-java/issues/2750))
- Various SDK internal improvements and tracking issues

---

## By Repository

| Repository | New Issues | Bugs | Features | Other |
|------------|------------|------|----------|-------|
| Server | 15 | 7 | 3 | 5 |
| .NET SDK | 9 | 5 | 3 | 1 |
| Python SDK | 6 | 5 | 1 | 0 |
| Java SDK | 6 | 1 | 3 | 2 |
| TypeScript SDK | 5 | 3 | 2 | 0 |
| PHP SDK | 3 | 2 | 1 | 0 |
| Go SDK | 2 | 2 | 0 | 0 |
| Features | 2 | 1 | 1 | 0 |
| Ruby SDK | 1 | 1 | 0 | 0 |

---

## Active Contributors

Top contributors in the last 30 days:
- **cretz** (4 issues) - .NET SDK improvements, Python bug fixes
- **jmaeagle99** (3 issues) - .NET SDK native bridge refactoring
- **deepika-awasthi** (3 issues) - Java SDK, TypeScript SDK, Features
- **xepozz** (2 issues) - PHP SDK improvements
- **pvsone** (2 issues) - Cross-SDK environment configuration bugs
- **roshchha** (2 issues) - Security vulnerability reports

---

## Recommendations

### Immediate (This Week)
1. **Security:** Address CVE-2025-61727 and CVE-2025-61729 security vulnerabilities in Server ([#8865](https://github.com/temporalio/temporal/issues/8865), [#8866](https://github.com/temporalio/temporal/issues/8866))
2. **Release:** Publish admin-tools image for 1.29.2 ([#8943](https://github.com/temporalio/temporal/issues/8943))

### High Priority (This Sprint)
3. **Stability:** Fix .NET SIGSEGV crash ([#579](https://github.com/temporalio/sdk-dotnet/issues/579)) - production crash on Linux
4. **Stability:** Fix .NET TLS certificate loading ([#584](https://github.com/temporalio/sdk-dotnet/issues/584)) - blocks secure deployments
5. **Stability:** Investigate Ruby fiber corruption ([#373](https://github.com/temporalio/sdk-ruby/issues/373)) - similar native bridge root cause
6. **Operations:** Investigate Python poller issue ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) - workers becoming unresponsive

### Medium Priority (This Month)
7. **Cross-SDK:** Fix shared environment configuration bug affecting TypeScript ([#1869](https://github.com/temporalio/sdk-typescript/issues/1869)) and Java ([#2754](https://github.com/temporalio/sdk-java/issues/2754))
8. **Server:** Investigate history service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902))
9. **Server:** Verify Elasticsearch 8.x compatibility ([#8909](https://github.com/temporalio/temporal/issues/8909))
10. **Nexus:** Review timeout handling across SDKs ([#585](https://github.com/temporalio/sdk-dotnet/issues/585))

### Track & Monitor
11. **Native Bridge:** Monitor .NET SafeHandle refactoring progress ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)) - may establish patterns for other SDKs
12. **AI Integration:** Track MCP server interest ([#8955](https://github.com/temporalio/temporal/issues/8955)) and AI SDK updates
13. **Scheduler:** Watch for additional timing-related reports

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
