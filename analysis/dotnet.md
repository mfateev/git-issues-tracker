# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 48
**Total Closed Issues:** 244
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

<- [Summary](summary.md) . [Contributors](contributors.md) . [Recent](recent.md) . [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) . [Go](go.md) . [TypeScript](typescript.md) . [Python](python.md) . [PHP](php.md) . [Ruby](ruby.md) . [Server](server.md) . [Features](features.md)

---

## Executive Summary

The .NET SDK demonstrates strong maintenance health with an 84% resolution rate and a median time to close of just 21 days. However, 50% of open issues are stale (>12 months old), indicating a need for triage. The test framework is the most problematic area with issues around time-skipping behavior and test flakes. One security vulnerability in a test dependency requires attention. The highest-upvoted request is for .NET trimming/AOT support, reflecting the .NET ecosystem's focus on modern deployment scenarios.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 12 | High - Test framework and time-skipping issues dominate |
| Enhancements | 29 | Medium - Strong demand for trimming support and DI improvements |
| Security Vulnerabilities | 1 | High - CVE-2024-21907 in test dependency (CVSS 7.5) |
| Stale Issues | 24 | Medium - 50% of open issues need triage |
| Test Framework Issues | 10 | High - Time-skipping and test flakes affect developer experience |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 13 |
| Total Comments | 44 |
| Issues with Upvotes | 6 (13%) |
| Issues with Comments | 23 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 84% (244/292) |
| Median Time to Close | 21 days (calendar) / 16 days (business) |
| Average Time to Close | 65 days (calendar) / 47 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 80% |

### Recommended Actions

1. **Immediate:** Address security vulnerability in coverlet.collector dependency ([#194](https://github.com/temporalio/sdk-dotnet/issues/194)) - upgrade Newtonsoft.Json to 13.0.1+
2. **Short-term:** Fix high-priority test framework bugs ([#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#280](https://github.com/temporalio/sdk-dotnet/issues/280))
3. **Medium-term:** Implement .NET trimming support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286) - 7 upvotes) and Roslyn analyzer ([#576](https://github.com/temporalio/sdk-dotnet/issues/576))
4. **Long-term:** Add F# samples/documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390) - 2 upvotes)
5. **Housekeeping:** Triage 24 stale issues - many feature requests from 2024 need evaluation

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The .NET SDK shows stable maintenance with nearly balanced issue flow.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 90 | 88 | +2 |

Backlog Stable: Only 2 more issues opened than closed, indicating healthy maintenance capacity with near-equilibrium issue management.

### Last 6 Months: Detailed Analysis

Recent activity shows effective resolution of bugs and enhancements with a slight net reduction in backlog.

| Metric | Value |
|--------|-------|
| Issues Opened | 41 |
| Issues Closed | 43 |
| Net Change | -2 |
| Bugs Closed | 13 |
| Enhancements Completed | 23 |
| Resolution within 30 days | 47% |
| Resolution within 90 days | 70% |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. However, notable completions include:

| Issue | Title |
|-------|-------|
| [#597](https://github.com/temporalio/sdk-dotnet/issues/597) | Support linux-musl-arm64 (platform support) |
| [#551](https://github.com/temporalio/sdk-dotnet/issues/551) | Enable Worker Heartbeating |
| [#573](https://github.com/temporalio/sdk-dotnet/issues/573) | Allow custom meter implementation to disable tracing event listener |
| [#540](https://github.com/temporalio/sdk-dotnet/issues/540) | Memory Leak in CancellationToken (critical bug fix) |
| [#577](https://github.com/temporalio/sdk-dotnet/issues/577) | Test host crash flake investigation |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | Clarify ICustomMetricMeter documentation |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | Support single-platform local NuGet package build |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | OperatorService/WorkflowService virtual methods for mocking |

---

## Issue Analysis by Category

### Security Vulnerabilities (1 open issue)

**High Priority** - One dependency vulnerability in test tooling requires attention.

| Issue | Severity | CVE | Description |
|-------|----------|-----|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | High (CVSS 7.5) | CVE-2024-21907 | coverlet.collector dependency vulnerability |

**Details:** The `coverlet.collector.3.1.2.nupkg` test dependency contains a vulnerability in Newtonsoft.Json before 13.0.1 that can cause denial of service via StackOverflow when deserializing crafted data.

**Recommendation:** Upgrade the coverlet.collector package to a version that uses Newtonsoft.Json 13.0.1 or later. While this is a test-only dependency, it poses risk in CI/CD pipelines.

---

### Bugs (12 open issues)

Bugs are concentrated in the test framework and time-skipping areas, with several affecting developer experience during testing.

#### High Priority Bugs

| Issue | Severity | Description |
|-------|----------|-------------|
| [#599](https://github.com/temporalio/sdk-dotnet/issues/599) | High | ExecuteAsync swallows exceptions, throws TaskCanceledException instead |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | High | Workflow task failures in failure conversion may be lost |
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | High | RpcException "operation was canceled" on DescribeNamespaceAsync |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | High | Unexpected serialization of WorkflowHandle (credentials leakage risk) |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | High | TaskQueue not forwarded in Test Environment, breaks ContinueAsNew |
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | High | Workflow Update hangs on time-skipping environment |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | High | Time skipping test server not auto-skipping time properly |

#### Medium Priority Bugs

| Issue | Description |
|-------|-------------|
| [#592](https://github.com/temporalio/sdk-dotnet/issues/592) | Nexus operation timeout test flake |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | Polling behavior autoscaling test flake |
| [#478](https://github.com/temporalio/sdk-dotnet/issues/478) | CustomSlotSupplier test flake |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | Multiple completion commands handling |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | Payload instance reuse in codec for failure scenarios |

---

### Test Framework Issues (10 open issues)

The test framework is the largest problem area, with issues affecting time-skipping behavior, test flakes, and mocking capabilities.

| Issue | Type | Description |
|-------|------|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | Bug | Workflow Update hangs on time-skipping environment |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | Bug | Time skipping not working properly with long timers |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | Bug | TaskQueue not forwarded, breaks ContinueAsNew |
| [#592](https://github.com/temporalio/sdk-dotnet/issues/592) | Bug | Nexus timeout test flake |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | Bug | Autoscaling test flake |
| [#478](https://github.com/temporalio/sdk-dotnet/issues/478) | Bug | CustomSlotSupplier test flake |
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | Enhancement | Add Nexus tests for time-skipping environment |
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | Enhancement | Make services mockable with virtual methods/interfaces |
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | Enhancement | Synchronous Run method for activity testing |
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | Enhancement | Auto-skip time when waiting on update result |

---

## API & Component Hotspots

Based on semantic analysis, the following areas have the most issues:

| Area | Issue Count | Notable Issues |
|------|-------------|----------------|
| test-framework | 25 | Time-skipping, mocking, test flakes |
| workflow-execution | 13 | Command handling, read-only contexts |
| dependency-security | 10 | Historical security updates |
| dependency-injection | 9 | Interceptor DI, service provider access |
| documentation | 7 | F# support, API clarity |
| worker-versioning | 4 | Deployment version control |
| metrics | 4 | Custom meter integration |

---

## Enhancement Requests (29 open issues)

### Platform & Build Support

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | Support .NET Trimming/AOT |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | Support for win-x86 (32-bit Windows) |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | Single-platform local NuGet package build |
| [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 0 | Use global.json to centralize SDK version |

### Developer Experience

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | .NET Analyzer (Roslyn) for checking workflows |
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | F# Samples/Documentation |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | Clarify ICustomMetricMeter documentation |
| [#496](https://github.com/temporalio/sdk-dotnet/issues/496) | 0 | Consistent log property names |

### Dependency Injection & Interceptors

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#402](https://github.com/temporalio/sdk-dotnet/issues/402) | 0 | Expose read-only headers to activity info |

### Workflow Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | Provide "workflow local" (WorkflowLocal<T>) |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | Improve WaitConditionAsync semantics |
| [#412](https://github.com/temporalio/sdk-dotnet/issues/412) | 0 | Expose workflow cancel cause/reason |
| [#176](https://github.com/temporalio/sdk-dotnet/issues/176) | 0 | Handle update-before-start scenario |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | Enforce no-commands in read-only contexts |
| [#398](https://github.com/temporalio/sdk-dotnet/issues/398) | 0 | Add memoization support to Patched() API |

### Worker & Versioning

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#479](https://github.com/temporalio/sdk-dotnet/issues/479) | 0 | Worker Versioning high-level client |
| [#558](https://github.com/temporalio/sdk-dotnet/issues/558) | 0 | Override deployment version for child workflows |

### Memory & Interop

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#586](https://github.com/temporalio/sdk-dotnet/issues/586) | 0 | SafeHandle lifecycle management for unmanaged pointers |
| [#587](https://github.com/temporalio/sdk-dotnet/issues/587) | 0 | Refactor Bridge.Client to IDisposable |

### Client & Connection

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#32](https://github.com/temporalio/sdk-dotnet/issues/32) | 0 | Add CancellationToken to ConnectAsync |
| [#299](https://github.com/temporalio/sdk-dotnet/issues/299) | 0 | Use RpcException for GetSystemInfo failures |
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | Include more tonic error details in RpcException |

### Observability

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#435](https://github.com/temporalio/sdk-dotnet/issues/435) | 0 | NLog async calls in workflows |
| [#440](https://github.com/temporalio/sdk-dotnet/issues/440) | 0 | User data support in C bridge log callback |
| [#171](https://github.com/temporalio/sdk-dotnet/issues/171) | 0 | Schedule creation tracing span |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | Replace time handling with System.TimeProvider |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

24 open issues (50%) have had no activity for over 12 months. Top stale issues by priority:

| Issue | Upvotes | Last Updated | Title |
|-------|---------|--------------|-------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 2024-06-25 | Support .NET Trimming |
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2024-11-12 | Scoped IServiceProvider for interceptors |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 2024-05-30 | ICustomMetricMeter documentation |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 2023-09-01 | Single-platform NuGet build |

**Recommendations:**

- **Keep open (high value):** [#286](https://github.com/temporalio/sdk-dotnet/issues/286) (trimming support - strong user demand)
- **Needs triage:** [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#179](https://github.com/temporalio/sdk-dotnet/issues/179) (time-skipping bugs - may be fixed or need update)
- **Close candidates:** Review issues from 2023 that haven't gained traction or may be superseded

### Duplicate Candidates

No obvious duplicates detected. However, time-skipping related issues ([#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#360](https://github.com/temporalio/sdk-dotnet/issues/360)) may have overlapping root causes that could be addressed together.

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix security vulnerability in test dependency ([#194](https://github.com/temporalio/sdk-dotnet/issues/194))
- Address exception swallowing in ExecuteAsync ([#599](https://github.com/temporalio/sdk-dotnet/issues/599))
- Fix activity serialization credential leakage risk ([#357](https://github.com/temporalio/sdk-dotnet/issues/357))

### Phase 2: Developer Experience (Short-term)

- Fix time-skipping environment issues ([#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#77](https://github.com/temporalio/sdk-dotnet/issues/77))
- Investigate and fix test flakes ([#592](https://github.com/temporalio/sdk-dotnet/issues/592), [#549](https://github.com/temporalio/sdk-dotnet/issues/549), [#478](https://github.com/temporalio/sdk-dotnet/issues/478))
- Add ContinueAsNew TaskQueue forwarding in tests ([#280](https://github.com/temporalio/sdk-dotnet/issues/280))

### Phase 3: Feature Expansion (Medium-term)

- Implement .NET trimming/AOT support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286) - highest user demand)
- Create Roslyn analyzer for workflow constraints ([#576](https://github.com/temporalio/sdk-dotnet/issues/576))
- Improve DI support for interceptors ([#363](https://github.com/temporalio/sdk-dotnet/issues/363))
- Add F# samples and documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390))

### Phase 4: Maintenance (Ongoing)

- Triage 24 stale issues
- Evaluate and close outdated feature requests
- Keep test framework issues prioritized for fast resolution
- Continue strong resolution rate (currently 84%)
