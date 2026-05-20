# Recent Issues Analysis

**Generated:** 2026-05-20
**Period:** Last 30 days (53 new issues)
**Data Source:** [stats-recent.md](stats-recent.md)

**Quick Search:** Use `grep` on `analysis/cards-summary.txt` to find issues by keyword, API, component, or severity. New issues will have cards generated if the semantic pipeline has been run.

---

## Urgent Issues Requiring Attention

### Critical: Security Vulnerability in Python SDK Wheels

A CVE in the bundled Rust dependency `rustls-webpki` was reported (twice by the same user) affecting the Python SDK wheels published to PyPI. The vulnerability GHSA-82j2-j2ch-gfr8 / RUSTSEC-2026-0104 affects versions prior to rustls-webpki 0.103.13. Both reports have been closed — a PR fixing the dependency was already open at the time.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1485](https://github.com/temporalio/sdk-python/issues/1485) | Python | GHSA-82j2-j2ch-gfr8 in rustls-webpki bundled in temporalio 1.26.0 wheel — triggers container vulnerability scanners |
| [#1484](https://github.com/temporalio/sdk-python/issues/1484) | Python | Duplicate report of same CVE |

**Recommendation:** Confirm PR #1483 has been merged and a new Python SDK release published. Users running container vulnerability scans against images with the temporalio wheel should verify they are on a patched release.

### High: Production Crashes and Worker Failures

Several bugs cause outright crashes or permanent workflow failures in production environments.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#746](https://github.com/temporalio/sdk-php/issues/746) | PHP | Local Activity execution crashes the worker with a nil pointer dereference panic (`internal_event_handlers.go:1795`) on RoadRunner 2025.1.13. Affects all workflows using Local Activities on the affected RoadRunner version |
| [#421](https://github.com/temporalio/sdk-ruby/issues/421) | Ruby | Child workflow executed via Go SDK with no return type causes `NoMethodError: undefined method 'metadata' for nil` that crashes Ruby worker tasks. Closed — workaround via custom payload converter published by reporter |
| [#2342](https://github.com/temporalio/sdk-go/issues/2342) | Go | Proto namespace conflict panics any binary at `init()` time when both `go.temporal.io/sdk v1.43.0` and `go.temporal.io/api v1.62.12+` are imported. Blocks all dependency upgrades in affected monorepos. Closed — fix expected in next SDK release |

**Recommendation:** PHP SDK users on RoadRunner 2025.1.13 should pin to 2025.1.12 until the nil pointer dereference is fixed. Go SDK users on v1.43.0 must pin `go.temporal.io/api <= v1.62.11` until the vendored proto conflict is resolved in an SDK patch release.

### High: Workflow Determinism Bug in TypeScript OpenTelemetry Interceptor

The OpenTelemetry interceptor package breaks workflow determinism, causing nondeterminism errors hours after deployment when workflows are evicted from sticky cache and must replay.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#2023](https://github.com/temporalio/sdk-typescript/issues/2023) | TypeScript | `interceptors-opentelemetry` causes `workflow.uuid4()` to return different values on replay when queries or update validators were handled between record and replay. Manifests as `TMPRL1100 Nondeterminism error` after pod rolls or cache evictions |

The root cause is that the OTel interceptor advances the PRNG state during query/update-validate handlers at record time but those handlers are not replayed, causing a PRNG offset mismatch.

**Recommendation:** Users of `@temporalio/interceptors-opentelemetry` with workflows that use `uuid4()` after handling queries or update validators are at risk of silent PRNG divergence. Avoid generating IDs that feed into recorded commands (child workflow IDs, activity arguments) after query handlers until a fix is released.

### High: Go SDK CPU and Memory Overhead from isPanicking()

A profiling report documents that `isPanicking()` in the Go SDK consumes 14% of CPU and 10% of allocations under load, due to stack unwinding via `runtime.Callers()` on every coroutine yield.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#2326](https://github.com/temporalio/sdk-go/issues/2326) | Go | `isPanicking()` uses 14.3% CPU and 10.2% allocations (254 MB in 30s) in throughput_stress benchmark. Stack unwinding dominates at ~22% of total CPU time |

**Recommendation:** This is a significant overhead that affects all Go SDK users running under load. The reporter proposes using `recover()` instead of stack inspection. This should be treated as a high-priority optimization.

### Medium: .NET Nexus Asymmetric Payload Conversion

A correctness bug in the .NET SDK causes Nexus operations with no-argument inputs to bypass the payload codec on the serialization path while still applying it on deserialization, causing codec failures for operations called with `NoValue`.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#677](https://github.com/temporalio/sdk-dotnet/issues/677) | .NET | Nexus operation `NoValue` inputs skip the payload codec during scheduling but are decoded through it, causing failures for users with custom payload codecs |

**Recommendation:** Fix the asymmetry in `WorkflowCodecHelper.cs` to ensure all Nexus inputs — including null — pass through the payload codec symmetrically.

### Medium: Python 3.14 Compatibility Break

Python 3.14's `asyncio.Task` constructor eagerly inspects closure cells during `set_name`, breaking any workflow that calls `execute_activity` due to a pre-existing forward reference in `_workflow_instance.py`.

| Issue | SDK | Impact |
|-------|-----|--------|
| [#1517](https://github.com/temporalio/sdk-python/issues/1517) | Python | `NameError: cannot access free variable 'handle'` on any activity execution with Python 3.14. Breaks all activity-based workflows on the next Python release |

**Recommendation:** Fix the forward reference in `_workflow_instance.py` before Python 3.14 reaches stable release. This is a known compatibility break that will affect all SDK users when they upgrade Python.

---

## Emerging Themes

### 1. Cross-SDK Standalone Activities Feature

The largest coordinated effort this period: identical issues filed across all 8 SDKs, the features repo, and the Go TestWorkflowEnvironment to add full support for Standalone Activities — including operator commands, telemetry, and test environment support.

- Implement operator commands for Standalone Activities ([#822](https://github.com/temporalio/features/issues/822), [#2350](https://github.com/temporalio/sdk-go/issues/2350), [#2878](https://github.com/temporalio/sdk-java/issues/2878), [#2061](https://github.com/temporalio/sdk-typescript/issues/2061), [#1543](https://github.com/temporalio/sdk-python/issues/1543), [#706](https://github.com/temporalio/sdk-dotnet/issues/706), [#440](https://github.com/temporalio/sdk-ruby/issues/440))
- Telemetry support for Standalone Activities — TypeScript ([#2031](https://github.com/temporalio/sdk-typescript/issues/2031))
- Add support for Standalone Activities to TestWorkflowEnvironment — Go ([#2318](https://github.com/temporalio/sdk-go/issues/2318))

**Recommendation:** This is a major cross-SDK initiative. Coordinate implementation timelines across all SDKs to avoid incomplete coverage creating confusion for users evaluating the feature.

### 2. External Payload Storage Infrastructure

A second coordinated cluster from the same author (jmaeagle99) covering the foundational infrastructure for external payload storage, filed across Java, TypeScript, and the features repo.

- External Payload Storage Foundation ([#2880](https://github.com/temporalio/sdk-java/issues/2880), [#2063](https://github.com/temporalio/sdk-typescript/issues/2063))
- Enable concurrent payload visiting ([#2881](https://github.com/temporalio/sdk-java/issues/2881), [#2064](https://github.com/temporalio/sdk-typescript/issues/2064))
- Allow payload visitors to visit memo payloads in aggregate ([#2884](https://github.com/temporalio/sdk-java/issues/2884))
- S3 External Storage Driver ([#2882](https://github.com/temporalio/sdk-java/issues/2882), [#2065](https://github.com/temporalio/sdk-typescript/issues/2065))
- GCS external storage driver proposal — Python ([#1502](https://github.com/temporalio/sdk-python/issues/1502))

**Recommendation:** These are incremental extensions to the external payload storage system. The foundation and concurrent visiting issues should land first to unblock the cloud-specific drivers.

### 3. Testing Environment Quality

Multiple issues across PHP, Go, and Java expose gaps in test framework reliability that make writing correct tests difficult.

- PHP `WorkflowTestCase` silently connects to production when `TEMPORAL_ADDRESS` is set in container env ([#744](https://github.com/temporalio/sdk-php/issues/744))
- PHP `WorkflowTestCase` time skipping starts locked, causing timer-only workflows to hang ([#743](https://github.com/temporalio/sdk-php/issues/743))
- PHP `ActivityMocker` incompatible with time-skipping — virtual clock skips through timeout before mock response arrives ([#745](https://github.com/temporalio/sdk-php/issues/745))
- Java `TestEnv` should propagate Memo along with Continue-As-New ([#2863](https://github.com/temporalio/sdk-java/issues/2863))
- Java expose `ShutdownManager` poll interval to speed up `TestWorkflowEnvironment` teardown ([#2869](https://github.com/temporalio/sdk-java/issues/2869))

**Recommendation:** The PHP test framework issues are the most severe — silent connection to production is a data safety risk. The time-skipping lock default causes test hangs with no obvious error. These should be fixed as priority bugs regardless of the cosmetic "testing" classification.

### 4. Observability and Metrics Correctness

Two independent reports identify incorrect or missing metric values that undermine worker monitoring.

- `temporal_worker_task_slots_used` never reaches 0 during inter-activity gaps in Python SDK ([#1489](https://github.com/temporalio/sdk-python/issues/1489))
- SDK should log when WFT (Workflow Task) completion takes a long time — Java ([#2883](https://github.com/temporalio/sdk-java/issues/2883)), TypeScript ([#2066](https://github.com/temporalio/sdk-typescript/issues/2066)), features ([#827](https://github.com/temporalio/features/issues/827))

**Recommendation:** The incorrect `task_slots_used` metric in Python can cause autoscaling decisions based on stale data. The WFT slow-completion logging request is a cross-SDK observability gap useful for diagnosing production latency.

### 5. API Completeness Gaps

Several reports identify missing fields or APIs that force users into workarounds.

- `ChildWorkflowOptions` missing `WorkflowIDConflictPolicy` (only `StartWorkflowOptions` has it) — Go ([#2335](https://github.com/temporalio/sdk-go/issues/2335))
- `Schedule.Describe` does not populate `Priority` on `ScheduleWorkflowAction` — Go ([#2345](https://github.com/temporalio/sdk-go/issues/2345))
- No way to disable the SDK's default gRPC service config — Go ([#2329](https://github.com/temporalio/sdk-go/issues/2329))
- `ClientOutboundInterceptor.UpdateWithStartWorkflow` missing struct for inspecting `StartWorkflowOption` — Go ([#2304](https://github.com/temporalio/sdk-go/issues/2304))
- Expose Nexus Endpoint in a Nexus Operation Handler — TypeScript ([#2040](https://github.com/temporalio/sdk-typescript/issues/2040))

**Recommendation:** The missing `WorkflowIDConflictPolicy` on `ChildWorkflowOptions` is a functional gap that prevents using conflict policies in child workflows. The Schedule `Priority` population and missing interceptor struct fields are correctness issues that should be addressed in patch releases.

### 6. Java Multi-Release JAR Visibility Issue

A `Jackson3JsonPayloadConverter` constructor is only compiled into the `META-INF/versions/17/` multi-release JAR directory, making it invisible to `javac` even on JDK 17+.

- Java SDK multi-release JAR constructor visibility ([#2885](https://github.com/temporalio/sdk-java/issues/2885))

**Recommendation:** Verify the multi-release JAR build configuration for Jackson 3 classes to ensure constructors intended for JDK 17+ are accessible from user code compiled with `javac`.

---

## By Category

### Bugs (21 issues)
- **TypeScript SDK:** 3 (OTel interceptor determinism #2023, legacy runtime native resource flakes #2068, dead doc links #2018)
- **Python SDK:** 4 (Python 3.14 closure NameError #1517, spurious shielded future warnings #1504, task slots metric never reaches 0 #1489, UpdateValidator exception serialization via Java #2875)
- **Go SDK:** 3 (isPanicking() CPU overhead #2326, proto namespace conflict #2342, schedule Priority not populated #2345)
- **PHP SDK:** 3 (local activity nil pointer crash #746, ActivityMocker/time-skipping incompatibility #745, WorkflowTestCase time-lock default #743)
- **.NET SDK:** 3 (Nexus payload conversion asymmetry #677, flaky WorkerDeploymentRamp test #700, flaky interceptors test #648)
- **Ruby SDK:** 1 (child workflow nil metadata crash #421)
- **Java SDK:** 1 (Update Validator exception serialization #2875)
- **Go SDK (additional):** 1 (ChildWorkflowOptions missing WorkflowIDConflictPolicy #2335)
- **Go SDK (additional):** 1 (ClientOutboundInterceptor UpdateWithStartWorkflow missing struct #2304)

### Feature Requests (25 issues)
- **Cross-SDK (Standalone Activities):** 8 (operator commands across Go, Java, TypeScript, Python, .NET, Ruby, features; telemetry for TypeScript)
- **Cross-SDK (External Storage):** 6 (foundation, concurrent visiting, memo visiting, S3 driver for Java/TypeScript, GCS driver for Python)
- **Java SDK:** 4 (payload visitor memos #2884, WFT slow-completion logging #2883, expose ShutdownManager interval #2869, TestEnv propagate Memo with CAN #2863)
- **TypeScript SDK:** 3 (WFT slow-completion logging #2066, protobuf-es payload converters #2045, expose Nexus endpoint #2040)
- **Go SDK:** 2 (Standalone Activities test env #2318, no way to disable gRPC service config #2329)
- **Python SDK:** 2 (Standalone Activities operator commands #1543, ADK ToolContext support #1470)
- **Features repo:** 1 (WFT slow-completion logging #827, Standalone Activities #822, standard error handler interface #812)

### Security (2 issues)
- **Python SDK:** 2 (rustls-webpki CVE in wheel #1485, #1484 — both closed with PR already in flight)

### Docs/Infra (5 issues)
- **Python SDK:** 2 (Use Trusted Publishing for PyPI #1546, synchronous activities recommendation #1468)
- **PHP SDK:** 1 (WorkflowTestCase silently connects to prod #744)
- **Go SDK:** 1 (Update CONTRIBUTING.md #2305)
- **Java SDK:** 1 (multi-release JAR constructor visibility #2885)

---

## Recommendations

1. **Immediate:** Confirm Python SDK PR #1483 (rustls-webpki CVE fix) is merged and a patched release is published. Notify users relying on wheel security scanning.

2. **High Priority:** Fix the PHP SDK local activity nil pointer dereference crash ([#746](https://github.com/temporalio/sdk-php/issues/746)) — all workflows using Local Activities on RoadRunner 2025.1.13 are affected. Publish a patch or workaround advisory.

3. **High Priority:** Fix the Go SDK `isPanicking()` CPU regression ([#2326](https://github.com/temporalio/sdk-go/issues/2326)). A 14% CPU and 10% allocation overhead on every coroutine yield is not acceptable in production throughput scenarios. Use `recover()` instead of stack inspection.

4. **High Priority:** Fix the TypeScript OpenTelemetry interceptor PRNG divergence bug ([#2023](https://github.com/temporalio/sdk-typescript/issues/2023)). This causes silent nondeterminism errors hours after deployment for any workflow using `uuid4()` with OTel installed, manifesting only after cache eviction.

5. **High Priority:** Address Python 3.14 compatibility break ([#1517](https://github.com/temporalio/sdk-python/issues/1517)) before Python 3.14 reaches stable release. The fix is a one-line reorder of variable binding in `_workflow_instance.py`.

6. **Medium Priority:** Fix the PHP `WorkflowTestCase` silent production connection risk ([#744](https://github.com/temporalio/sdk-php/issues/744)) and time-skipping lock default ([#743](https://github.com/temporalio/sdk-php/issues/743)). The production connection issue is a data safety risk for users running tests in CI environments with Temporal service variables set.

7. **Track:** The Standalone Activities feature is undergoing active cross-SDK expansion (operator commands, telemetry, test environment support across 8 SDKs). Monitor implementation progress for consistency across SDKs.

---

*See [stats-recent.md](stats-recent.md) for the complete issue list.*
