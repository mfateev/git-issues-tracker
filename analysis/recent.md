# Recent Issues Analysis

**Generated:** 2026-01-09
**Period:** Last 30 days (48 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerabilities

Two CVEs have been reported affecting the golang crypto/x509 package used by Temporal Server. These should be prioritized for patching in an upcoming release.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#8866](../repos/temporalio-temporal/issues.md#8866) | Server | CVE-2025-61729 - golang:crypto/x509 vulnerability |
| [#8865](../repos/temporalio-temporal/issues.md#8865) | Server | CVE-2025-61727 - golang:crypto/x509 vulnerability |

**Recommendation:** Address in next Server patch release. Users running self-hosted Temporal should plan for upgrade once fixes are available.

### High: Production Crashes and Stability Issues

Several SDKs are experiencing crashes and stability issues that can impact production workloads.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#579](../repos/temporalio-sdk-dotnet/issues.md#579) | .NET | SIGSEGV crash in workflow activation polling on Linux |
| [#577](../repos/temporalio-sdk-dotnet/issues.md#577) | .NET | Test host crash flake - intermittent failures |
| [#373](../repos/temporalio-sdk-ruby/issues.md#373) | Ruby | Fiber state corruption after Workflow.timeout expires (critical for Ruby users) |
| [#1268](../repos/temporalio-sdk-python/issues.md#1268) | Python | Activity/workflow pollers drop to 0 - workers become unresponsive |
| [#588](../repos/temporalio-sdk-dotnet/issues.md#588) | .NET | Workflow task failures may be lost silently |

**Recommendation:** The .NET SIGSEGV crash and Ruby Fiber corruption are particularly severe as they cause worker process termination. Prioritize investigation and fixes.

### High: Performance and Operational Issues

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | TypeScript | Performance regression from 1.13.1 to 1.13.2 |
| [#8902](../repos/temporalio-temporal/issues.md#8902) | Server | History service memory usage trending upward |
| [#8790](../repos/temporalio-temporal/issues.md#8790) | Server | history_node table keeps growing unboundedly |
| [#8970](../repos/temporalio-temporal/issues.md#8970) | Server | Client-set RPC deadline ignored for long poll GetWorkflowExecutionHistory |

**Recommendation:** The TypeScript regression should be investigated before wider 1.13.2 adoption. Server memory and storage growth issues may indicate retention or cleanup problems.

### Medium: Functionality Regressions

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | TypeScript | Signal caused condition to fail with CancelledFailure in v1.14.0 |
| [#584](../repos/temporalio-sdk-dotnet/issues.md#584) | .NET | Loading TLS certificates from path does not work |
| [#8833](../repos/temporalio-temporal/issues.md#8833) | Server | Scheduler does not list workflows when using triggerImmediately |
| [#8864](../repos/temporalio-temporal/issues.md#8864) | Server | Workflow cannot run with dedicated cloud PostgreSQL |

**Recommendation:** These represent broken functionality that users expect to work. The TLS certificate issue blocks secure deployments.

---

## Emerging Themes

### 1. .NET SDK Stability Concerns

The .NET SDK has the highest volume of new issues (9) this period, with multiple crash-related bugs. This suggests the SDK may be gaining adoption while encountering edge cases in production environments.

- SIGSEGV crash during workflow activation polling ([#579](../repos/temporalio-sdk-dotnet/issues.md#579))
- Test host crash flake ([#577](../repos/temporalio-sdk-dotnet/issues.md#577))
- Workflow task failures may be lost ([#588](../repos/temporalio-sdk-dotnet/issues.md#588))
- TLS certificate loading broken ([#584](../repos/temporalio-sdk-dotnet/issues.md#584))
- Nexus operation timeout issues ([#585](../repos/temporalio-sdk-dotnet/issues.md#585))

**Recommendation:** Consider a focused stability sprint for .NET SDK. The SafeHandle refactoring issues (#586, #587) may help address underlying memory management concerns.

### 2. Cross-SDK Configuration Consistency

An identical bug was reported in both Java and TypeScript SDKs regarding environment configuration file path handling on macOS, suggesting shared code or design patterns that need review.

- Java: Environment configuration reads wrong file path on macOS ([#2754](../repos/temporalio-sdk-java/issues.md#2754))
- TypeScript: Same issue ([#1869](../repos/temporalio-sdk-typescript/issues.md#1869))

**Recommendation:** Review configuration loading logic across all SDKs to ensure consistent behavior and fix the macOS-specific path handling issue.

### 3. Observability and Monitoring Gaps

Multiple issues relate to logging, metrics, and tracing functionality not working as expected.

- Python logs not emitted during workflow queries ([#1267](../repos/temporalio-sdk-python/issues.md#1267))
- Go OpenTelemetry incorrect metric type for Counter ([#2140](../repos/temporalio-sdk-go/issues.md#2140))
- Java OpenTracing interceptor missing updateWithStart support ([#2752](../repos/temporalio-sdk-java/issues.md#2752))
- TypeScript per-worker logger request ([#1867](../repos/temporalio-sdk-typescript/issues.md#1867))

**Recommendation:** Audit observability features across SDKs to ensure consistent and complete coverage, especially for newer features like updateWithStart.

### 4. Server Storage and Resource Management

Multiple Server issues point to potential resource management problems that could impact long-running deployments.

- History service memory trending upward ([#8902](../repos/temporalio-temporal/issues.md#8902))
- history_node table unbounded growth ([#8790](../repos/temporalio-temporal/issues.md#8790))
- Missing admin-tools image for 1.29.2 ([#8943](../repos/temporalio-temporal/issues.md#8943))

**Recommendation:** Review retention policies and cleanup mechanisms. Ensure operational tooling keeps pace with server releases.

### 5. Nexus Integration Maturity

Several issues relate to Nexus operations, indicating this newer feature is seeing adoption but encountering edge cases.

- .NET Nexus operation ignores ScheduleToCloseTimeout ([#585](../repos/temporalio-sdk-dotnet/issues.md#585))
- Java support for Temporal failures in Nexus APIs ([#2755](../repos/temporalio-sdk-java/issues.md#2755))
- .NET tests for Nexus in time-skipping environment ([#578](../repos/temporalio-sdk-dotnet/issues.md#578))

**Recommendation:** Continue hardening Nexus support across SDKs as adoption grows.

### 6. PHP SDK Ecosystem Compatibility

Two of three PHP issues relate to Composer dependency management, suggesting friction with the broader PHP ecosystem.

- Composer conflicts with react/promise v2 ([#692](../repos/temporalio-sdk-php/issues.md#692))
- SDK extension check breaking --ignore-platform-reqs ([#689](../repos/temporalio-sdk-php/issues.md#689))
- Symfony 8.0 support request ([#670](../repos/temporalio-sdk-php/issues.md#670))

**Recommendation:** Review PHP SDK packaging and dependency constraints to improve ecosystem compatibility.

---

## By Category

### Bugs (28 issues)
- **Server:** 10 (security CVEs x2, scheduling, memory, storage, PostgreSQL compatibility, RPC deadlines)
- **.NET:** 5 (crashes, TLS, workflow task failures)
- **TypeScript:** 4 (performance regression, signal handling, config path)
- **Python:** 4 (pollers, logging, sandbox warnings, error handling)
- **PHP:** 2 (Composer conflicts, extension checks)
- **Go:** 2 (activity alias collision, OpenTelemetry metrics)
- **Ruby:** 1 (Fiber state corruption - critical)

### Feature Requests (14 issues)
- **Server:** 2 (MCP server integration, 1.30.0 release)
- **.NET:** 3 (workflow analyzer, Nexus time-skip tests, SafeHandle refactoring)
- **TypeScript:** 3 (per-worker logger, AI SDK v6, workflow import improvements)
- **Java:** 3 (Nexus failures, OpenTracing updateWithStart, Spring placeholders)
- **PHP:** 1 (Symfony 8.0)
- **Features:** 1 (worker custom metadata)

### Internal/Testing (6 issues)
- .NET SafeHandle lifecycle refactoring (#586, #587)
- Java test reporter issues (#2750)
- Features pnpm build fix (#712)
- Server Hikaflow integration proposal (#8889)
- Java activity timeout edge case documentation (#2753)

---

## Recommendations

1. **Immediate:** Patch CVE-2025-61729 and CVE-2025-61727 in the next Server release. Communicate timeline to users running self-hosted deployments.

2. **High Priority:** Investigate and fix .NET SIGSEGV crash (#579) and Ruby Fiber corruption (#373) - these cause worker process termination.

3. **High Priority:** Address TypeScript performance regression (#1860) before it impacts more users upgrading to 1.13.2.

4. **High Priority:** Fix Python poller scaling issue (#1268) - workers becoming unresponsive impacts production reliability.

5. **Medium Priority:** Resolve cross-SDK macOS configuration path issue (#2754, #1869) to ensure consistent developer experience.

6. **Medium Priority:** Investigate Server resource management issues (#8902, #8790) to prevent long-term operational problems.

7. **Track:** Monitor .NET SDK issue volume and consider focused stability improvements given high bug count this period.

8. **Track:** Continue hardening Nexus support as adoption grows and edge cases are discovered.
