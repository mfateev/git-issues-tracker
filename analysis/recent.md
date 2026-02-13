# Recent Issues Analysis

**Generated:** 2026-02-11
**Period:** Last 30 days (80 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity. New issues will have cards generated if the semantic pipeline has been run.

---

## Urgent Issues Requiring Attention

### High: Security Vulnerabilities in Server v1.29.3 Docker Image

The latest server Docker image (v1.29.3) contains multiple critical and high-severity CVEs in OpenSSL, Go stdlib, and Go dependencies.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9280](https://github.com/temporalio/temporal/issues/9280) | Server | Critical CVE in libcrypto3/libssl3 (CVE-2025-15467), high CVEs in golang.org/x/crypto, stdlib, oauth2 |

Specific vulnerabilities reported:
- **CRITICAL:** CVE-2025-15467 in libcrypto3 and libssl3 (Alpine OpenSSL 3.5.0, fixed in 3.5.5)
- **HIGH:** CVE-2025-22869 in golang.org/x/crypto v0.32.0 (fixed in 0.35.0)
- **HIGH:** CVE-2025-47907 in Go stdlib v1.24.4 (fixed in 1.24.6)
- **HIGH:** CVE-2025-22868 in golang.org/x/oauth2 v0.7.0 (fixed in 0.27.0)
- **HIGH:** CVE-2025-58183 in Go stdlib v1.25.0 (fixed in 1.25.2)

**Recommendation:** A new server image rebuild with updated base image and Go toolchain should be prioritized. Users running v1.29.3 in production should assess exposure to these CVEs.

### High: Potential Data Loss in History Scavenger

A report indicates the history scavenger may delete workflow history while the workflow is still running, causing DataLoss errors and permanently stuck workflows.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9021](https://github.com/temporalio/temporal/issues/9021) | Server | Running workflows lose history; only last few events remain. Mutable state and visibility records persist, but workflow is unrecoverable |

Root cause analysis points to the namespace registry swallowing persistence errors and converting them to NamespaceNotFound, which triggers the scavenger's safety check to allow deletion. Confirmed on Cassandra with execution data cleaner enabled. Initially reported against v1.22.0, but the reporter indicates the latest code still has the same pattern.

**Recommendation:** This is the highest-priority data integrity issue. The namespace registry error handling at the identified code path should be hardened to avoid false NamespaceNotFound responses. Users on Cassandra with long-running workflows and execution data cleaner enabled should monitor for DataLoss errors.

### High: Workflow Determinism Bug in TypeScript SDK

Using `uuid()` in query handlers or update validators can break workflow determinism during replay, causing non-deterministic errors.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1935](https://github.com/temporalio/sdk-typescript/issues/1935) | TypeScript | uuid4() calls in query handlers advance the internal RNG state, causing subsequent uuid4() calls in workflow code to produce different values during replay |

This is a correctness bug: query handlers that call `uuid4()` silently corrupt the workflow's deterministic state, leading to non-deterministic errors that may be difficult to diagnose.

**Recommendation:** TypeScript SDK users should avoid calling `uuid4()` in query handlers or update validators as an immediate workaround. The SDK should either isolate the RNG state used by query handlers or document and enforce this restriction.

### Medium: Worker Polling Reliability

Reports of workers intermittently stopping polling continue from the prior period.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | Python | Worker stops polling after synchronous activity completion; 5-15 min recovery delay |

The reporter observed a pattern where the gRPC connection drops exactly 5 minutes after long-running synchronous activities complete, and no new TCP connection to port 7233 exists during the stuck period. The Temporal team has requested a reproduction on the latest SDK version (1.21.1).

**Recommendation:** Users running long-running synchronous activities in the Python SDK should enable heartbeats and monitor polling behavior. Upgrading to the latest SDK version is advised.

### Medium: Activity Scheduling and Stuck Workflows

Reports of activities getting stuck or workflows remaining in "running" state indefinitely.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#9118](https://github.com/temporalio/temporal/issues/9118) | Server | Stuck activities when Temporal crashes during scheduling; appears resolved by increasing StartToCloseTimeout |
| [#9193](https://github.com/temporalio/temporal/issues/9193) | Server | Workflow status remains "running" indefinitely (~1% occurrence in batch testing on resource-constrained machines) |

Issue [#9118](https://github.com/temporalio/temporal/issues/9118) was reported in an embedded server configuration with very short timeouts and frequent worker restarts. The reporter confirmed the issue no longer reproduces after increasing StartToCloseTimeout. Issue [#9193](https://github.com/temporalio/temporal/issues/9193) reproduces on low-resource machines (2 cores, 4GB RAM) under moderate load with MySQL persistence, suggesting potential resource contention.

**Recommendation:** Users with unusual deployment configurations (embedded server, very short timeouts, low-resource machines) should monitor for these patterns. The server team should investigate whether resource contention can cause task queue delivery failures.

---

## Emerging Themes

### 1. Versioning GA Preparation

A cluster of issues focuses on exposing and stabilizing versioning APIs across SDKs as the feature moves toward general availability. This is the largest coordinated effort in the period.

- Expose RoutingConfigUpdateState in VersionInfo ([#2159](https://github.com/temporalio/sdk-go/issues/2159))
- Expose Upgrade-on-CaN option and ContinueAsNewSuggestedReasons ([#2160](https://github.com/temporalio/sdk-go/issues/2160))
- Expose Backlog Stats in DescribeVersion ([#2161](https://github.com/temporalio/sdk-go/issues/2161))
- Expose TaskQueueStats and TaskQueueConfig in DescribeTaskQueue ([#2162](https://github.com/temporalio/sdk-go/issues/2162))
- Make Pinned Version Optional when setting Pinned Override ([#2163](https://github.com/temporalio/sdk-go/issues/2163))
- Expose upgrade on continue as new in SDKs ([#738](https://github.com/temporalio/features/issues/738))
- Remove experimental markers from versioning APIs ([#744](https://github.com/temporalio/features/issues/744))
- Deprecate then remove old, invalid versioning client calls ([#745](https://github.com/temporalio/features/issues/745))
- Deployment client / Operator API Support ([#726](https://github.com/temporalio/features/issues/726))
- Investigate worker-deployment-related poll failure ergonomics ([#729](https://github.com/temporalio/features/issues/729))

**Recommendation:** Coordinate versioning API changes across SDKs to ensure consistent behavior. The deprecation of old versioning calls ([#745](https://github.com/temporalio/features/issues/745)) needs careful rollout to avoid breaking existing users.

### 2. Payload and History Size Limits

A cross-SDK initiative to proactively warn users or fail workflow tasks when approaching size limits. Issues filed identically across Go, TypeScript, and Python SDKs.

- SDK should fail workflow task if payloads size is known to be too large ([#723](https://github.com/temporalio/features/issues/723), [#2165](https://github.com/temporalio/sdk-go/issues/2165), [#1913](https://github.com/temporalio/sdk-typescript/issues/1913), [#1285](https://github.com/temporalio/sdk-python/issues/1285))
- Warn if SDK detects a workflow history over a certain size ([#2166](https://github.com/temporalio/sdk-go/issues/2166), [#1914](https://github.com/temporalio/sdk-typescript/issues/1914), [#1289](https://github.com/temporalio/sdk-python/issues/1289))
- Warn if the SDK tried to send a payload above a specific size ([#2167](https://github.com/temporalio/sdk-go/issues/2167), [#1912](https://github.com/temporalio/sdk-typescript/issues/1912), [#1284](https://github.com/temporalio/sdk-python/issues/1284))

**Recommendation:** Implement consistently across all SDKs. These are proactive user experience improvements that will prevent difficult-to-diagnose production failures when workflows exceed hard server limits.

### 3. Dependency and Security Maintenance

Multiple issues highlight the need for dependency upgrades across the ecosystem, from deprecated libraries to known CVEs.

- v1.29.3 Docker image vulnerabilities ([#9280](https://github.com/temporalio/temporal/issues/9280))
- Upgrade deprecated ES/AWS libraries ([#9244](https://github.com/temporalio/temporal/issues/9244)) -- comprehensive audit of deprecated deps including AWS SDK v1, olivere/elastic, pkg/errors, and many others
- Python SDK lru Rust dependency security update ([#1294](https://github.com/temporalio/sdk-python/issues/1294)) -- already resolved

**Recommendation:** The comprehensive dependency audit in [#9244](https://github.com/temporalio/temporal/issues/9244) provides a roadmap for addressing technical debt. The AWS SDK v1 (archived July 2025) and olivere/elastic (deprecated) should be prioritized as they are direct dependencies with no future security patches.

### 4. Java SDK Workflowcheck Tooling

A new initiative to improve static analysis tooling for Java workflow determinism checking, with build system plugins for both major build tools.

- Gradle plugin for workflowcheck ([#2768](https://github.com/temporalio/sdk-java/issues/2768))
- Maven plugin for workflowcheck ([#2769](https://github.com/temporalio/sdk-java/issues/2769))
- Several workflowcheck improvement suggestions ([#2770](https://github.com/temporalio/sdk-java/issues/2770))
- Enable DETERMINISTIC_CANCELLATION_SCOPE_ORDER flag ([#2765](https://github.com/temporalio/sdk-java/issues/2765))

**Recommendation:** Build system integration for workflowcheck will significantly improve the Java developer experience by catching determinism issues at build time. The cancellation scope ordering flag ([#2765](https://github.com/temporalio/sdk-java/issues/2765)) fixes a known NDE bug and is scheduled for enablement after a two-release delay.

### 5. Search Attribute Handling Improvements

Continued effort to make search attribute handling more lenient and consistent across server and SDKs.

- Ignore null search attributes when starting/creating things ([#9056](https://github.com/temporalio/temporal/issues/9056))
- Stop sending null search attribute values on workflow start and continue as new ([#2150](https://github.com/temporalio/sdk-go/issues/2150))
- Adjust typed search attribute logic to be as lenient on type metadata as server ([#741](https://github.com/temporalio/features/issues/741), [#603](https://github.com/temporalio/sdk-dotnet/issues/603))

**Recommendation:** Coordinate server and SDK changes to handle search attribute edge cases gracefully. The .NET SDK bug ([#603](https://github.com/temporalio/sdk-dotnet/issues/603)) should be addressed to match the server's lenient deserialization behavior.

### 6. Server Security and Infrastructure

Feature requests for improving the security posture and operational capabilities of Temporal Server.

- SPIFFE Native Support for Temporal ([#9152](https://github.com/temporalio/temporal/issues/9152))
- Cloud Database Cert/IAM Connections ([#9156](https://github.com/temporalio/temporal/issues/9156))
- Separate Read and Write QPS Limits for Persistence ([#9108](https://github.com/temporalio/temporal/issues/9108))
- Reduce default value for frontend.visibilityArchivalQueryMaxPageSize ([#9258](https://github.com/temporalio/temporal/issues/9258))

**Recommendation:** SPIFFE support and cloud database IAM connections are important for production deployments in modern infrastructure. These should be evaluated as part of the security roadmap.

---

## By Category

### Bugs (17 issues)
- **Server:** 5 (CVEs in Docker image, stuck workflows, history scavenger data loss, workflow status stuck running, test infrastructure)
- **TypeScript SDK:** 5 (uuid determinism in query handlers, ScheduleHandle type mismatch, AI-SDK tool definitions, search attributes docs, operatorService access)
- **Python SDK:** 4 (worker stops polling, sandbox urllib3 bypass, child workflow cancellation testing, signal deserialization logging)
- **.NET SDK:** 3 (search attribute type metadata, exception swallowing in ExecuteAsync, Nexus flake)

### Feature Requests (53 issues)
- **Features repo:** 12 (versioning APIs, payload limits, operator API, standalone activities, scheduled workflow ID, randomness seed, resource ID headers, priority in WorkflowInfo)
- **Go SDK:** 10 (versioning GA x5, payload/history size warnings x3, Datadog v2, public struct documentation)
- **Server:** 8 (SPIFFE, cloud DB certs, QPS limits, archival page size, search attributes, deprecated deps, version check cleanup, workflow substring filter)
- **TypeScript SDK:** 4 (deterministic PRNG, WorkerInfo activity counts, query/update logging, Cloudflare worker connection)
- **Java SDK:** 7 (workflowcheck plugins x3, heartbeat timeout tracking, workflow state persistence, Spring Boot auto-discovery, cancellation scope flag)
- **Python SDK:** 5 (payload/history size warnings x2, randomness seed access, CancelledError inheritance, API doc generators)
- **.NET SDK:** 2 (linux-musl-arm64, Semaphore best practices)
- **PHP SDK:** 2 (Fiber suspension DX, drop old packages)
- **Ruby SDK:** 1 (default Info options on definitions)

### Internal/Testing (10 issues)
- Cross-SDK architecture questions (Go SDK [#2182](https://github.com/temporalio/sdk-go/issues/2182), Java SDK [#2777](https://github.com/temporalio/sdk-java/issues/2777) -- why no Rust Core SDK)
- Build infrastructure (run-tests.yml fork compatibility [#9135](https://github.com/temporalio/temporal/issues/9135), version check cleanup [#9060](https://github.com/temporalio/temporal/issues/9060))
- Test flake investigation (.NET Nexus timeout [#592](https://github.com/temporalio/sdk-dotnet/issues/592))
- Spam/off-topic ([#9057](https://github.com/temporalio/temporal/issues/9057))

---

## Recommendations

1. **Immediate:** Rebuild the Temporal Server Docker image to address critical and high-severity CVEs ([#9280](https://github.com/temporalio/temporal/issues/9280)). The OpenSSL critical vulnerability and multiple Go dependency CVEs affect all users running the v1.29.3 container image.

2. **Immediate:** Continue investigation of the history scavenger data loss issue ([#9021](https://github.com/temporalio/temporal/issues/9021)). The identified code path in the namespace registry that swallows persistence errors and returns NamespaceNotFound could lead to irreversible data loss for running workflows.

3. **High Priority:** Fix the TypeScript SDK determinism bug where `uuid4()` in query handlers corrupts workflow state ([#1935](https://github.com/temporalio/sdk-typescript/issues/1935)). This is a silent correctness issue that can cause non-deterministic errors in production.

4. **High Priority:** Coordinate the versioning GA effort across SDKs. The Go SDK has 5 related issues ([#2159](https://github.com/temporalio/sdk-go/issues/2159)-[#2163](https://github.com/temporalio/sdk-go/issues/2163)), the features repo has 4 ([#726](https://github.com/temporalio/features/issues/726), [#729](https://github.com/temporalio/features/issues/729), [#738](https://github.com/temporalio/features/issues/738), [#744](https://github.com/temporalio/features/issues/744)), and these need consistent implementation across all SDKs.

5. **Medium Priority:** Address the comprehensive dependency audit ([#9244](https://github.com/temporalio/temporal/issues/9244)). The AWS SDK v1 is archived with no security patches, and olivere/elastic is deprecated. Creating a phased migration plan for Tier 1 (archived) dependencies is recommended.

6. **Track:** Python SDK worker polling reliability ([#1295](https://github.com/temporalio/sdk-python/issues/1295)) needs reproduction on the latest version. Monitor for additional reports of similar behavior.

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
