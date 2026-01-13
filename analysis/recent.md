# Recent Issues Analysis

**Generated:** January 13, 2026
**Period:** Last 30 days (51 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity. New issues will have cards generated if the semantic pipeline has been run.

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerabilities (2 issues)

Two CVEs affecting the Go crypto/x509 package have been reported:
- Server [#8866](https://github.com/temporalio/temporal/issues/8866) - CVE-2025-61729 golang:crypto/x509
- Server [#8865](https://github.com/temporalio/temporal/issues/8865) - CVE-2025-61727 golang:crypto/x509

**Recommendation:** Address in next server release. These crypto/x509 vulnerabilities in the Go standard library could affect TLS certificate validation. Both CVEs target the same golang:crypto/x509 package and should be patched together.

### Critical: Production Crashes (2 issues)

Native bridge crashes affecting worker stability:
- .NET [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux
- Ruby [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber state corruption after Workflow.timeout expires on x86_64

**Recommendation:** Both crashes originate in the native bridge layer (Rust core). Prioritize fixes as they cause unrecoverable worker failures in production environments. The .NET issue may be related to unmanaged pointer lifecycle management being addressed in [#586](https://github.com/temporalio/sdk-dotnet/issues/586) and [#587](https://github.com/temporalio/sdk-dotnet/issues/587).

### High: Production Bugs (5 issues)

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1268](https://github.com/temporalio/sdk-python/issues/1268) | Python | Activity/workflow pollers drop to 0 ignoring minimum/maximum settings - workers become unresponsive |
| [#8902](https://github.com/temporalio/temporal/issues/8902) | Server | History service memory usage upward trend - potential OOM risk |
| [#8864](https://github.com/temporalio/temporal/issues/8864) | Server | Workflow cannot run with dedicated cloud PostgreSQL - blocks Cloud deployments |
| [#584](https://github.com/temporalio/sdk-dotnet/issues/584) | .NET | TLS certificates from path doesn't work - blocks secure deployments |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | .NET | Workflow task failures may be lost silently - error handling gap |

**Recommendation:** The Python poller issue ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) is particularly severe as it causes workers to silently become unresponsive without logging errors. History service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902)) requires investigation before it causes outages.

### Medium: Operational Concerns (6 issues)

| Issue | SDK | Impact |
|-------|-----|--------|
| [#8970](https://github.com/temporalio/temporal/issues/8970) | Server | Client-set RPC deadline ignored for long poll GetWorkflowExecutionHistory |
| [#8943](https://github.com/temporalio/temporal/issues/8943) | Server | No admin-tools image for 1.29.2 - blocks tooling updates |
| [#8909](https://github.com/temporalio/temporal/issues/8909) | Server | Deprecation error log with Elasticsearch 8.19.2 |
| [#1866](https://github.com/temporalio/sdk-typescript/issues/1866) | TypeScript | Signal caused condition to fail with CancelledFailure on 1.14.0 - regression |
| [#2140](https://github.com/temporalio/sdk-go/issues/2140) | Go | OpenTelemetry incorrect metric type for Counter |
| [#585](https://github.com/temporalio/sdk-dotnet/issues/585) | .NET | Nexus operation ignores ScheduleToCloseTimeout |

**Recommendation:** Release admin-tools image for 1.29.2. The TypeScript signal/condition issue ([#1866](https://github.com/temporalio/sdk-typescript/issues/1866)) is a regression in version 1.14.0 that may affect workflow behavior - users should consider pinning to 1.13.x until resolved.

---

## Emerging Themes

### 1. Native Bridge Stability & Lifecycle Management

The .NET SDK is seeing concentrated work on native bridge lifecycle management. Multiple issues relate to SafeHandle and unmanaged pointer handling:

- [#586](https://github.com/temporalio/sdk-dotnet/issues/586) - Separate unmanaged pointer lifecycle into SafeHandles
- [#587](https://github.com/temporalio/sdk-dotnet/issues/587) - Refactor Bridge.Client to IDisposable
- [#579](https://github.com/temporalio/sdk-dotnet/issues/579) - SIGSEGV crash on Linux
- [#588](https://github.com/temporalio/sdk-dotnet/issues/588) - Workflow task failures may be lost
- [#592](https://github.com/temporalio/sdk-dotnet/issues/592) - Nexus timeout test flake

Ruby also reports native bridge issues: [#373](https://github.com/temporalio/sdk-ruby/issues/373) - Fiber corruption after timeout on x86_64.

**Recommendation:** The SafeHandle refactoring work in .NET ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)) is establishing patterns that may improve stability and could be applicable to other language bindings.

### 2. Environment Configuration Bug (Cross-SDK)

Two SDKs report the same macOS file path issue:
- TypeScript [#1869](https://github.com/temporalio/sdk-typescript/issues/1869)
- Java [#2754](https://github.com/temporalio/sdk-java/issues/2754)

Both reported by the same author (pvsone) on the same day (2026-01-04), indicating a shared configuration reading component or common SDK tooling issue.

**Recommendation:** Fix in shared SDK tooling to prevent similar issues in other SDKs. Check if Python, Go, .NET have the same bug.

### 3. Nexus Integration Expansion

Multiple SDKs are extending Nexus support:
- Java [#2755](https://github.com/temporalio/sdk-java/issues/2755) - Support Temporal failures in Nexus APIs
- .NET [#578](https://github.com/temporalio/sdk-dotnet/issues/578) - Add Nexus tests for time-skipping environment
- .NET [#585](https://github.com/temporalio/sdk-dotnet/issues/585) - Nexus operation ignores ScheduleToCloseTimeout
- .NET [#592](https://github.com/temporalio/sdk-dotnet/issues/592) - Nexus sync timeout test flake

**Recommendation:** Track Nexus feature parity across SDKs. The timeout behavior in [#585](https://github.com/temporalio/sdk-dotnet/issues/585) may indicate a protocol-level issue requiring attention.

### 4. PHP SDK Compatibility Challenges

Multiple compatibility issues surfacing in the PHP ecosystem:
- [#698](https://github.com/temporalio/sdk-php/issues/698) - Proposal to drop old package support
- [#692](https://github.com/temporalio/sdk-php/issues/692) - Composer requirements conflict with react/promise v2
- [#689](https://github.com/temporalio/sdk-php/issues/689) - SDK extension check breaking composer's --ignore-platform-reqs
- [#670](https://github.com/temporalio/sdk-php/issues/670) - Symfony 8.0 support request

**Recommendation:** Review PHP SDK dependency constraints and platform requirement checks. The drop-old-packages proposal ([#698](https://github.com/temporalio/sdk-php/issues/698)) could simplify maintenance but needs careful community communication.

### 5. Spring Boot 4 Compatibility (Java)

- Java [#2758](https://github.com/temporalio/sdk-java/issues/2758) - Spring Metrics Configuration fails with Spring Boot 4

With Spring Boot 4 recently released, early adopters are encountering compatibility issues. This is among the newest issues in the tracking period (2026-01-09).

**Recommendation:** Prioritize Spring Boot 4 compatibility testing and fixes to support the Java ecosystem's migration path.

### 6. AI/Agent Integration Interest

Growing interest in AI/ML workflow integration:
- Server [#8955](https://github.com/temporalio/temporal/issues/8955) - MCP Server for Temporal Workflows (Model Context Protocol)
- TypeScript [#1881](https://github.com/temporalio/sdk-typescript/issues/1881), [#1880](https://github.com/temporalio/sdk-typescript/issues/1880) - AI-SDK callToolActivity bugs
- TypeScript [#1864](https://github.com/temporalio/sdk-typescript/issues/1864) - Update AI SDK integration to v6
- Python [#1255](https://github.com/temporalio/sdk-python/issues/1255) - Update openai-agents dependency

The MCP server request is notable as it could enable Temporal workflows to be orchestrated by LLM agents using the Model Context Protocol standard.

**Recommendation:** Track AI integration ecosystem and consider official MCP server support for Temporal. Fix AI-SDK bugs in TypeScript to maintain integration quality.

---

## By Category

### Bugs (28 issues)

| Repository | Count | Key Issues |
|------------|-------|------------|
| Server | 7 | Security CVEs, memory usage, scheduling, deadlines, PostgreSQL |
| .NET SDK | 5 | SIGSEGV crash, TLS loading, workflow task failures, test flakes |
| Python SDK | 5 | Pollers, logs, ApplicationError, sandbox warnings, openai-agents |
| TypeScript SDK | 5 | Env config, signal condition, operatorService access, AI-SDK bugs |
| PHP SDK | 2 | Composer conflicts, extension check |
| Go SDK | 2 | Activity alias collision, OTel metric types |
| Ruby SDK | 1 | Fiber state corruption |
| Features | 1 | pnpm build |

### Feature Requests (13 issues)

| Repository | Count | Key Issues |
|------------|-------|------------|
| Server | 3 | MCP server, workflow substring filter, skip re-executing activities |
| .NET SDK | 2 | SafeHandle refactoring, Nexus time-skipping tests |
| TypeScript SDK | 2 | Per-worker logger, AI SDK v6 |
| Java SDK | 2 | Nexus failures, OpenTracing updateWithStart |
| Python SDK | 1 | Sync activities for ThreadPoolExecutor |
| PHP SDK | 2 | Symfony 8.0 support, drop old package support |
| Features | 1 | Worker metadata in UI/CLI |

### Questions & Other (10 issues)

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
| .NET SDK | 8 | 5 | 3 | 0 |
| TypeScript SDK | 7 | 5 | 2 | 0 |
| Java SDK | 6 | 1 | 2 | 3 |
| Python SDK | 6 | 5 | 1 | 0 |
| PHP SDK | 4 | 2 | 2 | 0 |
| Go SDK | 2 | 2 | 0 | 0 |
| Features | 2 | 1 | 1 | 0 |
| Ruby SDK | 1 | 1 | 0 | 0 |

---

## Active Contributors

Top contributors in the last 30 days:
- **jmaeagle99** (3 issues) - .NET SDK native bridge refactoring and test flake investigation
- **xepozz** (3 issues) - PHP SDK improvements and compatibility
- **cretz** (3 issues) - .NET SDK improvements, Python bug fixes
- **maxi1555** (2 issues) - TypeScript AI-SDK bug reports
- **pvsone** (2 issues) - Cross-SDK environment configuration bug discovery
- **deepika-awasthi** (2 issues) - Java SDK, Features worker metadata
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
6. **Operations:** Investigate Python poller issue ([#1268](https://github.com/temporalio/sdk-python/issues/1268)) - workers becoming unresponsive without errors

### Medium Priority (This Month)

7. **Regression:** Fix TypeScript signal/condition failure on 1.14.0 ([#1866](https://github.com/temporalio/sdk-typescript/issues/1866))
8. **Compatibility:** Address Spring Boot 4 compatibility ([#2758](https://github.com/temporalio/sdk-java/issues/2758)) - new framework version
9. **Cross-SDK:** Fix shared environment configuration bug affecting TypeScript ([#1869](https://github.com/temporalio/sdk-typescript/issues/1869)) and Java ([#2754](https://github.com/temporalio/sdk-java/issues/2754))
10. **Server:** Investigate history service memory trend ([#8902](https://github.com/temporalio/temporal/issues/8902))
11. **Server:** Verify Elasticsearch 8.x compatibility ([#8909](https://github.com/temporalio/temporal/issues/8909))
12. **Nexus:** Review timeout handling across SDKs ([#585](https://github.com/temporalio/sdk-dotnet/issues/585))

### Track & Monitor

13. **Native Bridge:** Monitor .NET SafeHandle refactoring progress ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587)) - may establish patterns for other SDKs
14. **AI Integration:** Track MCP server interest ([#8955](https://github.com/temporalio/temporal/issues/8955)) and AI SDK updates - fix TypeScript AI-SDK bugs ([#1880](https://github.com/temporalio/sdk-typescript/issues/1880), [#1881](https://github.com/temporalio/sdk-typescript/issues/1881))
15. **PHP Ecosystem:** Watch for additional Composer/Symfony compatibility reports; review package support proposal ([#698](https://github.com/temporalio/sdk-php/issues/698))

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
