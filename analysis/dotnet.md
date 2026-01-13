# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** Jan 13, 2026
**Total Open Issues:** 50
**Total Closed Issues:** 240
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

<- [Summary](summary.md) | [Contributors](contributors.md) | [Recent](recent.md) | [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) | [Go](go.md) | [TypeScript](typescript.md) | [Python](python.md) | [PHP](php.md) | [Ruby](ruby.md) | [Server](server.md) | [Features](features.md)

---

## Executive Summary

The .NET SDK maintains a healthy 83% resolution rate (240/290 total issues) with a relatively small open issue backlog of 50 issues. However, 48% of open issues are stale (>12 months old), indicating a need for triage review. The backlog is essentially stable with only +4 net issues over the last 12 months. User engagement is moderate with 13 total upvotes concentrated on key requests like .NET trimming support (7 upvotes) and F# documentation (2 upvotes). Key priorities include test framework improvements, native crash investigation, and addressing the security vulnerability in test dependencies.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 13 | High - Active defects affecting stability and testing |
| Test Framework Issues | 7+ | High - Multiple flake investigations and time-skipping issues |
| Enhancements | 30 | Medium - Feature requests including .NET trimming, F# support |
| Security Vulnerabilities | 1 | Low - Dev-only test dependency (coverlet.collector) |
| Stale Issues | 24 | Medium - 48% of backlog needs triage decision |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (thumbs-up) | 13 |
| Total Comments | 46 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 24 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 83% (240/290) |
| Median Time to Close | 21 days (calendar) / 16 days (business) |
| Average Time to Close | 66 days (calendar) / 47 days (business) |
| Resolved within 30 days | 60% |
| Resolved within 90 days | 80% |

### Recommended Actions

1. **Immediate:** Investigate SIGSEGV crash on Linux ([#579](https://github.com/temporalio/sdk-dotnet/issues/579)) - potential production stability issue
2. **Short-term:** Fix TLS certificate loading from path ([#584](https://github.com/temporalio/sdk-dotnet/issues/584)) and workflow task failure handling ([#588](https://github.com/temporalio/sdk-dotnet/issues/588))
3. **Medium-term:** Implement .NET trimming support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286) - 7 upvotes) - significant deployment optimization
4. **Long-term:** Add F# samples/documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390) - 2 upvotes), .NET Analyzer for workflows ([#576](https://github.com/temporalio/sdk-dotnet/issues/576))
5. **Housekeeping:** Triage 24 stale issues - close resolved/obsolete ones, especially old test-related items

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The .NET SDK shows a stable backlog with slightly more issues opened than closed.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 88 | 84 | +4 |

**Backlog Stable:** The backlog grew by only 4 issues over 12 months, indicating balanced maintenance. Notable activity spikes occurred in February and April 2025 (13 opened/13 closed each) and September 2025 (-7 net).

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 41 |
| Issues Closed | 41 |
| Net Change | 0 |
| Bugs Closed | 10 |
| Enhancements Completed | 23 |

| Metric | Calendar Days | Business Days |
|--------|---------------|---------------|
| Average Time to Close | 113 | 82 |
| Median Time to Close | 53 | 37 |
| 90th Percentile | 265 | 190 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. Recent closures focused on internal infrastructure and Nexus feature implementation.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|---------|----------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | Clarify ICustomMetricMeter usage in DiagnosticSource extension |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | Support single-platform local NuGet package build |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | OperatorService/WorkflowService members virtual or interface |
| 6 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 4 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 3 | Provide synchronous Run method in testing |
| 8 | [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | RpcException: operation was canceled |
| 9 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | Unexpected reuse of payload instances in payload codec |
| 10 | [#579](https://github.com/temporalio/sdk-dotnet/issues/579) | 2 | SIGSEGV crash in temporal_core_worker_poll_workflow_activation |

---

## Issue Analysis by Category

### Bugs (13 open issues)

Active bugs require attention to maintain SDK reliability.

#### High Severity - Stability & Core Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#579](https://github.com/temporalio/sdk-dotnet/issues/579) | 2 | SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux - potential native interop issue |
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | 0 | Workflow task failures like failure conversion issues may be lost silently |
| [#584](https://github.com/temporalio/sdk-dotnet/issues/584) | 0 | TLS certificates loading from path doesn't work |
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | RpcException: operation was canceled - connectivity issues |

#### Test Framework & Time-Skipping Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment - long-standing issue with high engagement |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | 0 | Time skipping test server not auto skipping time properly in some cases |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | 1 | TaskQueue not forwarded when using Test Environment, breaks ContinueAsNew |
| [#592](https://github.com/temporalio/sdk-dotnet/issues/592) | 0 | Investigate ExecuteNexusOperationAsync_SyncTimeout_FailsAsExpected flake |
| [#550](https://github.com/temporalio/sdk-dotnet/issues/550) | 1 | Investigate CanRunWith_CustomSlotSupplier flake |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | 0 | Investigate ExecuteWorkflowAsync_PollingBehavior_Autoscaling flake |

#### Serialization & Codec Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | 1 | Unexpected Serialization of Activity Results |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | Unexpected reuse of payload instances in payload codec for workflow failures |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | 1 | Handle multiple completion commands |

### Security Vulnerabilities (1 open issue)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | Low (7.5 CVSS) | coverlet.collector.3.1.2 has CVE-2024-21907 (Newtonsoft.Json DoS) - dev-only test dependency |

**Risk Assessment:** This vulnerability only affects development/test environments through the code coverage tool. It does not impact production deployments. Fix by updating coverlet.collector to a version using Newtonsoft.Json >= 13.0.1.

---

## API & Component Hotspots

Based on semantic analysis, the following areas have the most open issues:

| Area | Issue Count | Notable Issues |
|------|-------------|----------------|
| Test Framework | 25 | Time-skipping, flakes, environment issues |
| Workflow Execution | 13 | State management, lifecycle, updates |
| Dependency Injection | 9 | ServiceProvider access, hosting extensions |
| Documentation | 7 | F# support, API docs, samples |
| Activity Definition | 5 | Non-workflow activities, metadata |
| Worker Versioning | 4 | Deployment versioning, child workflows |
| Nexus Operations | 6 | Integration, cancellation, testing |

---

## Enhancement Requests (30 open issues)

### Deployment & Build Optimization

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | Support .NET Trimming - enable AOT/trimmed deployments |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | Support single-platform local NuGet package build |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | Support for win-x86 platform |

### Developer Experience & Documentation

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | F# Samples/Documentation |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | Clarify ICustomMetricMeter usage in README |
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | .NET Analyzer for Checking Workflows - static analysis |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | Provide synchronous Run method in testing |
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | 0 | Auto-skip time in time-skipping environment when waiting on update result |
| [#291](https://github.com/temporalio/sdk-dotnet/issues/291) | 0 | Update test running to replay |
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | 0 | Add tests for Nexus support in time-skipping environment |
| [#229](https://github.com/temporalio/sdk-dotnet/issues/229) | 0 | Make Temporalio.Testing a separate NuGet package |

### API & Framework Integration

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | Make OperatorService/WorkflowService members virtual or interface |
| [#568](https://github.com/temporalio/sdk-dotnet/issues/568) | 0 | Support non-workflow activities |
| [#558](https://github.com/temporalio/sdk-dotnet/issues/558) | 0 | Allow overriding Worker Deployment Version in Child Workflows |
| [#402](https://github.com/temporalio/sdk-dotnet/issues/402) | 0 | Expose read-only headers to activity info |

### Workflow Features

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | Provide "workflow local" storage |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | Improve WaitConditionAsync semantics |
| [#398](https://github.com/temporalio/sdk-dotnet/issues/398) | 0 | Add explicit memoization support to Patched() API |
| [#412](https://github.com/temporalio/sdk-dotnet/issues/412) | 0 | Expose Workflow cancel cause/reason |
| [#176](https://github.com/temporalio/sdk-dotnet/issues/176) | 0 | Handle possibility of update-before-start |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | Enforce no-commands-allowed restrictions in read-only contexts |

### Infrastructure & Internals

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#587](https://github.com/temporalio/sdk-dotnet/issues/587) | 0 | Refactor Bridge.Client to be IDisposable instead of SafeHandle |
| [#586](https://github.com/temporalio/sdk-dotnet/issues/586) | 0 | Separate unmanaged pointer lifecycle into SafeHandles |
| [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 0 | Use global.json file to centralize SDK version |
| [#479](https://github.com/temporalio/sdk-dotnet/issues/479) | 0 | Worker Versioning high level client |
| [#440](https://github.com/temporalio/sdk-dotnet/issues/440) | 0 | Support user data in forwarded log callback in C bridge |

### Logging & Observability

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#496](https://github.com/temporalio/sdk-dotnet/issues/496) | 0 | Inconsistent log property names for workflow run identifier |
| [#435](https://github.com/temporalio/sdk-dotnet/issues/435) | 0 | Workflow logging - NLog async calls |
| [#171](https://github.com/temporalio/sdk-dotnet/issues/171) | 0 | Schedule creation should create tracing span by default |

### Client & Connection

| Issue | Upvotes | Request |
|-------|---------|---------|
| [#299](https://github.com/temporalio/sdk-dotnet/issues/299) | 0 | Use RpcException if initial GetSystemInfo call fails |
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | Include more details from tonic for failed client_rpc_call |
| [#32](https://github.com/temporalio/sdk-dotnet/issues/32) | 0 | Add CancellationToken parameter to TemporalClient.ConnectAsync |
| [#246](https://github.com/temporalio/sdk-dotnet/issues/246) | 0 | Expose raw proto objects on WorkflowExecution and Description |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | Replace System.TimeProvider in workflows |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

**24 issues** have had no activity for more than 12 months.

#### Close Candidates (likely resolved or obsolete)

- [#77](https://github.com/temporalio/sdk-dotnet/issues/77) - Time skipping test server issue from May 2023, may be superseded by newer fixes
- [#131](https://github.com/temporalio/sdk-dotnet/issues/131) - Single-platform NuGet build from Aug 2023, build system may have evolved
- [#194](https://github.com/temporalio/sdk-dotnet/issues/194) - Security alert for test dependency, verify if still applicable

#### Needs Triage (maintainer decision required)

- [#286](https://github.com/temporalio/sdk-dotnet/issues/286) - .NET Trimming (7 upvotes) - valid request but requires significant work
- [#179](https://github.com/temporalio/sdk-dotnet/issues/179) - Workflow Update hangs (8 comments) - longstanding with workarounds discussed
- [#234](https://github.com/temporalio/sdk-dotnet/issues/234) - Payload codec reuse issue - may need reproduction confirmation
- [#256](https://github.com/temporalio/sdk-dotnet/issues/256) - README documentation clarification

#### Keep Open (valid long-term items)

- [#363](https://github.com/temporalio/sdk-dotnet/issues/363) - IServiceProvider for interceptors - valid DI enhancement
- [#387](https://github.com/temporalio/sdk-dotnet/issues/387) - Workflow local storage - planned feature
- [#386](https://github.com/temporalio/sdk-dotnet/issues/386) - WaitConditionAsync improvements - API enhancement

### Duplicate Candidates

- [#550](https://github.com/temporalio/sdk-dotnet/issues/550) and [#478](https://github.com/temporalio/sdk-dotnet/issues/478) - Both track CustomSlotSupplier test flake
- [#549](https://github.com/temporalio/sdk-dotnet/issues/549) - May be related to other polling/autoscaling test issues

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate - Q1 2026)

- Investigate and fix SIGSEGV crash on Linux ([#579](https://github.com/temporalio/sdk-dotnet/issues/579))
- Fix TLS certificate loading from path ([#584](https://github.com/temporalio/sdk-dotnet/issues/584))
- Address silent workflow task failure loss ([#588](https://github.com/temporalio/sdk-dotnet/issues/588))
- Update coverlet.collector to fix test dependency vulnerability ([#194](https://github.com/temporalio/sdk-dotnet/issues/194))

### Phase 2: Test Framework (Short-term - Q2 2026)

- Fix Workflow Update hanging in time skipping environment ([#179](https://github.com/temporalio/sdk-dotnet/issues/179))
- Resolve test flakes for reliable CI ([#550](https://github.com/temporalio/sdk-dotnet/issues/550), [#549](https://github.com/temporalio/sdk-dotnet/issues/549), [#592](https://github.com/temporalio/sdk-dotnet/issues/592))
- Fix TaskQueue forwarding in Test Environment ([#280](https://github.com/temporalio/sdk-dotnet/issues/280))
- Add time-skipping support for workflow updates ([#360](https://github.com/temporalio/sdk-dotnet/issues/360))

### Phase 3: Feature Expansion (Medium-term - Q3-Q4 2026)

- Implement .NET Trimming support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286)) - highest user demand
- Create F# samples and documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390))
- Build .NET Analyzer for workflow validation ([#576](https://github.com/temporalio/sdk-dotnet/issues/576))
- Add synchronous Run method for testing ([#420](https://github.com/temporalio/sdk-dotnet/issues/420))
- Expose IServiceProvider to ActivityInboundInterceptor ([#363](https://github.com/temporalio/sdk-dotnet/issues/363))

### Phase 4: Maintenance (Ongoing)

- Triage 24 stale issues - close obsolete, mark valid long-term items
- Consolidate duplicate test flake issues
- Address remaining serialization edge cases ([#357](https://github.com/temporalio/sdk-dotnet/issues/357), [#234](https://github.com/temporalio/sdk-dotnet/issues/234))
- Refactor Bridge/interop code for maintainability ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587))
