# Recent Issues Analysis

**Generated:** 2026-01-10
**Period:** Last 30 days (50 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerabilities (2 issues)
- Server [#8866](https://github.com/temporalio/temporal/issues/8866) - CVE-2025-61729 golang:crypto/x509
- Server [#8865](https://github.com/temporalio/temporal/issues/8865) - CVE-2025-61727 golang:crypto/x509

**Recommendation:** Address in next server release. These crypto/x509 vulnerabilities in the Go standard library could affect TLS certificate validation. Both CVEs target the same golang:crypto/x509 package and should be patched together.

### Critical: Production Crashes (2 issues)
- .NET [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux
- Ruby [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber state corruption after Workflow.timeout expires on x86_64

**Recommendation:** Both crashes originate in the native bridge layer (Rust core). Prioritize fixes as they cause unrecoverable worker failures in production environments.

### High: Production Bugs (4 issues)
- Python [#1268](https://github.com/temporalio/sdk-python/issues/1268) - Activity/workflow pollers drop to 0 ignoring minimum/maximum settings
- Server [#8902](https://github.com/temporalio/temporal/issues/8902) - History service memory usage upward trend
- Server [#8864](https://github.com/temporalio/temporal/issues/8864) - Workflow cannot run with dedicated cloud PostgreSQL
- .NET [#584](https://github.com/temporalio/sdk-dotnet/issues/584) - TLS certificates from path doesn't work

**Recommendation:** The Python poller issue ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) can cause workers to become unresponsive. History service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902)) requires investigation before it causes outages. TLS certificate loading failure ([#584](https://github.com/temporalio/sdk-dotnet/issues/584)) blocks secure deployments.

### Medium: Operational Concerns (5 issues)
- Server [#8970](https://github.com/temporalio/temporal/issues/8970) - Client-set RPC deadline ignored for long poll GetWorkflowExecutionHistory
- Server [#8943](https://github.com/temporalio/temporal/issues/8943) - No admin-tools image for 1.29.2
- Server [#8909](https://github.com/temporalio/temporal/issues/8909) - Deprecation error log with Elasticsearch 8.19.2
- TypeScript [#1866](https://github.com/temporalio/sdk-typescript/issues/1866) - Signal caused condition to fail with CancelledFailure on 1.14.0
- Go [#2140](https://github.com/temporalio/sdk-go/issues/2140) - OpenTelemetry incorrect metric type for Counter

**Recommendation:** Release admin-tools image for 1.29.2. The TypeScript signal/condition issue ([#1866](https://github.com/temporalio/sdk-typescript/issues/1866)) is a regression in version 1.14.0 that may affect workflow behavior.

---

## Emerging Themes

### 1. Native Bridge Stability Issues

The .NET SDK is seeing concentrated work on native bridge lifecycle management. Multiple issues relate to SafeHandle and unmanaged pointer handling:
- [#586](https://github.com/temporalio/sdk-dotnet/issues/586) - Separate unmanaged pointer lifecycle into SafeHandles
- [#587](https://github.com/temporalio/sdk-dotnet/issues/587) - Refactor Bridge.Client to IDisposable
- [#577](https://github.com/temporalio/sdk-dotnet/issues/577) - Investigate test host crash flake
- [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash on Linux
- [#588](https://github.com/temporalio/sdk-dotnet/issues/588) - Workflow task failures may be lost

Ruby also reports native bridge issues: [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber corruption after timeout on x86_64.

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

**Recommendation:** Track Nexus feature parity across SDKs. The timeout behavior in [#585](https://github.com/temporalio/sdk-dotnet/issues/585) may indicate a protocol-level issue requiring attention.

### 4. PHP SDK Compatibility Challenges

Multiple compatibility issues surfacing in the PHP ecosystem:
- [#692](https://github.com/temporalio/sdk-php/issues/692) - Composer requirements conflict with react/promise v2
- [#689](https://github.com/temporalio/sdk-php/issues/689) - SDK extension check breaking composer's --ignore-platform-reqs
- [#670](https://github.com/temporalio/sdk-php/issues/670) - Symfony 8.0 support request

**Recommendation:** Review PHP SDK dependency constraints and platform requirement checks to improve ecosystem compatibility.

### 5. Spring Boot 4 Compatibility (Java)

- Java [#2758](https://github.com/temporalio/sdk-java/issues/2758) - Spring Metrics Configuration fails with Spring Boot 4

With Spring Boot 4 recently released, early adopters are encountering compatibility issues. This is the newest issue in the tracking period (2026-01-09).

**Recommendation:** Prioritize Spring Boot 4 compatibility testing and fixes to support the Java ecosystem's migration path.

### 6. MCP/AI Integration Interest

Growing interest in AI/ML workflow integration:
- Server [#8955](https://github.com/temporalio/temporal/issues/8955) - MCP Server for Temporal Workflows
- TypeScript [#1864](https://github.com/temporalio/sdk-typescript/issues/1864) - Update AI SDK integration to v6
- Python [#1255](https://github.com/temporalio/sdk-python/issues/1255) - Update openai-agents dependency

Requests for MCP (Model Context Protocol) server support and updated AI SDK integrations indicate growing use of Temporal for AI agent orchestration.

**Recommendation:** Track AI integration ecosystem and consider official MCP server support for Temporal.

### 7. Scheduler and Timing Issues

Multiple reports of scheduling-related problems:
- Server [#8953](https://github.com/temporalio/temporal/issues/8953) - The scheduled time is incorrect
- Server [#8833](https://github.com/temporalio/temporal/issues/8833) - Scheduler does not list workflows when using triggerImmediately

**Recommendation:** Review scheduler implementation for edge cases around immediate triggers and time calculations.

---

## By Category

### Bugs (27 issues)
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
| Java SDK | 1 | Spring Boot 4 metrics |

### Feature Requests (13 issues)
| Area | Count | Key Issues |
|------|-------|------------|
| Server | 3 | MCP server, skip re-executing activities, PR review tool |
| .NET SDK | 2 | SafeHandle refactoring, Nexus time-skipping tests, workflow analyzer |
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
| .NET SDK | 9 | 5 | 4 | 0 |
| Java SDK | 7 | 1 | 3 | 3 |
| Python SDK | 6 | 5 | 1 | 0 |
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
4. **Stability:** Investigate Ruby fiber corruption ([#373](https://github.com/temporalio/sdk-ruby/issues/373)) - similar native bridge root cause
5. **Stability:** Fix .NET TLS certificate loading ([#584](https://github.com/temporalio/sdk-dotnet/issues/584)) - blocks secure deployments
6. **Operations:** Investigate Python poller issue ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) - workers becoming unresponsive

### Medium Priority (This Month)
7. **Compatibility:** Address Spring Boot 4 compatibility ([#2758](https://github.com/temporalio/sdk-java/issues/2758)) - new framework version
8. **Cross-SDK:** Fix shared environment configuration bug affecting TypeScript ([#1869](https://github.com/temporalio/sdk-typescript/issues/1869)) and Java ([#2754](https://github.com/temporalio/sdk-java/issues/2754))
9. **Server:** Investigate history service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902))
10. **Server:** Verify Elasticsearch 8.x compatibility ([#8909](https://github.com/temporalio/temporal/issues/8909))
11. **Nexus:** Review timeout handling across SDKs ([#585](https://github.com/temporalio/sdk-dotnet/issues/585))

### Track & Monitor
12. **Native Bridge:** Monitor .NET SafeHandle refactoring progress ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)) - may establish patterns for other SDKs
13. **AI Integration:** Track MCP server interest ([#8955](https://github.com/temporalio/temporal/issues/8955)) and AI SDK updates
14. **PHP Ecosystem:** Watch for additional Composer/Symfony compatibility reports
15. **Scheduler:** Watch for additional timing-related reports

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
