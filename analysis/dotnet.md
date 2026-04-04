# Temporal .NET SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-04-04
**Total Open Issues:** 49
**Total Closed Issues:** 251
**Repository:** [temporalio/sdk-dotnet](https://github.com/temporalio/sdk-dotnet)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Go](go.md) · [Java](java.md) · [TypeScript](typescript.md) · [Python](python.md) · [PHP](php.md) · [Ruby](ruby.md)

---

## Executive Summary

The .NET SDK has 49 open issues against 251 closed, reflecting an 84% resolution rate. The backlog is slightly shrinking over the last 12 months (-4 net issues), indicating effective maintenance. Enhancement requests dominate the open backlog (29 issues) with bugs accounting for 11. User engagement remains low -- only 12% of open issues have upvotes -- with most requests originating from maintainers. A significant 65% of open issues are stale (>12 months), warranting a triage pass.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancements | 29 | Medium -- majority are incremental improvements |
| Bugs | 11 | High -- includes test flakes, serialization issues, and lost task failures |
| Security Vulnerability | 1 | Medium -- dependency vulnerability in test tooling |
| Stale Issues (>12 months) | 32 | Low -- need triage pass for closure or re-prioritization |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 13 |
| Total Comments | 45 |
| Issues with Upvotes | 6 (12%) |
| Issues with Comments | 23 (47%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 84% (251/300) |
| Median Time to Close | 20 days (calendar) / 15 days (business) |
| Resolved within 30 days | 61% |
| Resolved within 90 days | 81% |

### Recommended Actions

1. **Immediate:** Address [#588](https://github.com/temporalio/sdk-dotnet/issues/588) -- workflow task failures silently lost during failure conversion
2. **Short-term:** Fix test environment bugs ([#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#77](https://github.com/temporalio/sdk-dotnet/issues/77)) blocking developer testing workflows
3. **Medium-term:** Deliver .NET Trimming support ([#286](https://github.com/temporalio/sdk-dotnet/issues/286)) -- the highest-upvoted issue by far (7 upvotes)
4. **Long-term:** Implement F# samples/documentation ([#390](https://github.com/temporalio/sdk-dotnet/issues/390)) and service abstraction improvements ([#553](https://github.com/temporalio/sdk-dotnet/issues/553))
5. **Housekeeping:** Triage 32 stale issues; close resolved or no-longer-relevant items

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is shrinking slightly, with 4 more issues closed than opened over the past year. The team has been effective at keeping pace with incoming issues.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 59 | 63 | -4 |

📉 Backlog Shrinking: -4 net issues over 12 months indicates a slightly declining backlog.

### Last 6 Months: Detailed Analysis

The last 6 months show a well-managed issue pipeline with 35 opened and 34 closed (net +1). 12 bugs were fixed and 18 enhancements completed. Resolution speed has been somewhat slower recently, with a median of 26 calendar days compared to the all-time median of 20 days.

| Metric | Value |
|--------|-------|
| Issues Opened | 35 |
| Issues Closed | 34 |
| Bugs Closed | 12 |
| Enhancements Completed | 18 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months. The most notable recently closed items include standalone activities support ([#568](https://github.com/temporalio/sdk-dotnet/issues/568)), worker heartbeating ([#551](https://github.com/temporalio/sdk-dotnet/issues/551)), and Nexus hosting support ([#536](https://github.com/temporalio/sdk-dotnet/issues/536)).

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | 1 | Support .NET Trimming |
| 2 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | 3 | F# Samples/Documentation |
| 3 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | 1 | Provide synchronous Run method in testing |
| 4 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | 2 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 5 | [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | 0 | Clarify what the ICustomMetricMeter is used for |
| 6 | [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | 0 | Support single-platform local NuGet package build |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 15 | Support .NET Trimming |
| 2 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment |
| 3 | [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 7 | F# Samples/Documentation |
| 4 | [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 5 | Use global.json file to centralize SDK version |
| 5 | [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 4 | OperatorService/WorkflowService members marked virtual or inherit from interface |
| 6 | [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 4 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| 7 | [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 3 | Provide synchronous Run method in testing |
| 8 | [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | RpcException: operation was canceled |
| 9 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | Unexpected reuse of payload instances in payload codec |
| 10 | [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 2 | DescribeTaskQueueAsync does not return stats |

---

## Issue Analysis by Category

### Bugs (11 open issues)

The open bugs span three main areas: test framework flakiness, serialization/data handling, and the time-skipping test environment.

#### Test Flakes and Infrastructure (3 issues)

Internal test stability issues. These are lower user impact but affect CI reliability.

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#592](https://github.com/temporalio/sdk-dotnet/issues/592) | 0 | Nexus operation timeout test flaking due to premature CancellationTokenSource disposal |
| [#549](https://github.com/temporalio/sdk-dotnet/issues/549) | 0 | Autoscaling polling behavior test flake |
| [#478](https://github.com/temporalio/sdk-dotnet/issues/478) | 1 | Custom slot supplier test flake |

#### Time-Skipping Test Environment (3 issues)

Long-standing issues with the time-skipping test server that affect workflow testing workflows.

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#179](https://github.com/temporalio/sdk-dotnet/issues/179) | 8 | Workflow Update hangs on time skipping environment -- highest engagement among all bugs |
| [#280](https://github.com/temporalio/sdk-dotnet/issues/280) | 1 | TaskQueue not forwarded in test environment, breaks ContinueAsNew |
| [#77](https://github.com/temporalio/sdk-dotnet/issues/77) | 0 | Time skipping test server not auto-skipping time properly in some cases |

#### Data Handling and Serialization (3 issues)

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#588](https://github.com/temporalio/sdk-dotnet/issues/588) | 0 | Workflow task failures during failure conversion may be silently lost (high severity) |
| [#357](https://github.com/temporalio/sdk-dotnet/issues/357) | 1 | Unexpected serialization of activity results |
| [#234](https://github.com/temporalio/sdk-dotnet/issues/234) | 3 | Unexpected reuse of payload instances in payload codec for workflow failure scenarios |

#### Other Bugs (2 issues)

| Issue | 💬 | Description |
|-------|-----|-------------|
| [#395](https://github.com/temporalio/sdk-dotnet/issues/395) | 3 | RpcException: operation was canceled -- user-reported production issue |
| [#305](https://github.com/temporalio/sdk-dotnet/issues/305) | 1 | Handle multiple completion commands |

### Security Vulnerability (1 open issue)

| Issue | Description |
|-------|-------------|
| [#194](https://github.com/temporalio/sdk-dotnet/issues/194) | coverlet.collector.3.1.2.nupkg: 1 vulnerability (severity 7.5) -- affects test tooling only, not production |

---

## API & Component Hotspots

Based on issue analysis, the areas with the most open issues are:

| Area | Open Issue Count | Notable Issues |
|------|-----------------|----------------|
| Test Framework / Testing | 6 | [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#592](https://github.com/temporalio/sdk-dotnet/issues/592), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#77](https://github.com/temporalio/sdk-dotnet/issues/77), [#420](https://github.com/temporalio/sdk-dotnet/issues/420), [#360](https://github.com/temporalio/sdk-dotnet/issues/360) |
| Workflow Execution | 4 | [#246](https://github.com/temporalio/sdk-dotnet/issues/246), [#243](https://github.com/temporalio/sdk-dotnet/issues/243), [#176](https://github.com/temporalio/sdk-dotnet/issues/176), [#412](https://github.com/temporalio/sdk-dotnet/issues/412) |
| Serialization / Codec | 3 | [#234](https://github.com/temporalio/sdk-dotnet/issues/234), [#357](https://github.com/temporalio/sdk-dotnet/issues/357), [#588](https://github.com/temporalio/sdk-dotnet/issues/588) |
| Logging / Observability | 3 | [#496](https://github.com/temporalio/sdk-dotnet/issues/496), [#435](https://github.com/temporalio/sdk-dotnet/issues/435), [#171](https://github.com/temporalio/sdk-dotnet/issues/171) |
| Internal Refactoring | 2 | [#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587) |

---

## Enhancement Requests (29 open issues)

### Developer Experience & Tooling

| Issue | 👍 | Request |
|-------|-----|---------|
| [#286](https://github.com/temporalio/sdk-dotnet/issues/286) | 7 | Support .NET Trimming (AOT compilation) |
| [#576](https://github.com/temporalio/sdk-dotnet/issues/576) | 0 | .NET Analyzer for checking workflow determinism constraints |
| [#563](https://github.com/temporalio/sdk-dotnet/issues/563) | 0 | Centralize SDK version using global.json |
| [#131](https://github.com/temporalio/sdk-dotnet/issues/131) | 1 | Support single-platform local NuGet package build |

### Testing Improvements

| Issue | 👍 | Request |
|-------|-----|---------|
| [#420](https://github.com/temporalio/sdk-dotnet/issues/420) | 1 | Provide synchronous Run method in testing |
| [#578](https://github.com/temporalio/sdk-dotnet/issues/578) | 0 | Add tests to confirm proper Nexus support for time-skipping environment |
| [#360](https://github.com/temporalio/sdk-dotnet/issues/360) | 0 | Auto-skip time in time-skipping environment when waiting on update result |
| [#291](https://github.com/temporalio/sdk-dotnet/issues/291) | 0 | Update test running to replay |

### API Design & Extensibility

| Issue | 👍 | Request |
|-------|-----|---------|
| [#553](https://github.com/temporalio/sdk-dotnet/issues/553) | 0 | OperatorService/WorkflowService members marked virtual or inherit from interface |
| [#363](https://github.com/temporalio/sdk-dotnet/issues/363) | 1 | Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#246](https://github.com/temporalio/sdk-dotnet/issues/246) | 0 | Expose raw proto objects on WorkflowExecution and WorkflowExecutionDescription |
| [#243](https://github.com/temporalio/sdk-dotnet/issues/243) | 0 | Enforce no-commands-allowed restrictions in read-only contexts |
| [#229](https://github.com/temporalio/sdk-dotnet/issues/229) | 0 | Make Temporalio.Testing a separate NuGet package |

### Workflow & Activity Features

| Issue | 👍 | Request |
|-------|-----|---------|
| [#634](https://github.com/temporalio/sdk-dotnet/issues/634) | 0 | DescribeTaskQueueAsync does not return stats |
| [#624](https://github.com/temporalio/sdk-dotnet/issues/624) | 0 | Support conflict token retry loop for schedule updates |
| [#601](https://github.com/temporalio/sdk-dotnet/issues/601) | 0 | Best practice fix for Semaphore.WaitAsync ContinueWith |
| [#558](https://github.com/temporalio/sdk-dotnet/issues/558) | 0 | Allow overriding Worker Deployment Version for child workflows |
| [#412](https://github.com/temporalio/sdk-dotnet/issues/412) | 0 | Expose workflow cancel cause/reason |
| [#398](https://github.com/temporalio/sdk-dotnet/issues/398) | 0 | Add explicit memoization support to the Patched() API |
| [#387](https://github.com/temporalio/sdk-dotnet/issues/387) | 0 | Provide "workflow local" storage |
| [#386](https://github.com/temporalio/sdk-dotnet/issues/386) | 0 | Improve WaitConditionAsync semantics |
| [#402](https://github.com/temporalio/sdk-dotnet/issues/402) | 0 | Expose read-only headers to activity info |
| [#176](https://github.com/temporalio/sdk-dotnet/issues/176) | 0 | Handle possibility of update-before-start |

### Observability & Logging

| Issue | 👍 | Request |
|-------|-----|---------|
| [#496](https://github.com/temporalio/sdk-dotnet/issues/496) | 0 | Inconsistent log property names for workflow run identifier |
| [#435](https://github.com/temporalio/sdk-dotnet/issues/435) | 0 | Workflow logging -- NLog async calls |
| [#440](https://github.com/temporalio/sdk-dotnet/issues/440) | 0 | Support user data in forwarded log callback in C bridge |
| [#256](https://github.com/temporalio/sdk-dotnet/issues/256) | 1 | Clarify what ICustomMetricMeter is used for |
| [#171](https://github.com/temporalio/sdk-dotnet/issues/171) | 0 | Schedule creation should create tracing span by default |

### Client & Connection

| Issue | 👍 | Request |
|-------|-----|---------|
| [#337](https://github.com/temporalio/sdk-dotnet/issues/337) | 0 | Include more details from tonic in failed RPC invocations |
| [#299](https://github.com/temporalio/sdk-dotnet/issues/299) | 0 | Use RpcException if initial GetSystemInfo call fails |
| [#307](https://github.com/temporalio/sdk-dotnet/issues/307) | 0 | Replace System.TimeProvider in workflows |
| [#32](https://github.com/temporalio/sdk-dotnet/issues/32) | 0 | Add CancellationToken parameter to TemporalClient.ConnectAsync |

### Language & Platform Support

| Issue | 👍 | Request |
|-------|-----|---------|
| [#390](https://github.com/temporalio/sdk-dotnet/issues/390) | 2 | F# Samples/Documentation |
| [#247](https://github.com/temporalio/sdk-dotnet/issues/247) | 0 | Support for win-x86 |

### Internal Refactoring

| Issue | 👍 | Request |
|-------|-----|---------|
| [#587](https://github.com/temporalio/sdk-dotnet/issues/587) | 0 | Refactor Bridge.Client to be IDisposable instead of SafeHandle |
| [#586](https://github.com/temporalio/sdk-dotnet/issues/586) | 0 | Separate unmanaged pointer lifecycle management into SafeHandles |
| [#479](https://github.com/temporalio/sdk-dotnet/issues/479) | 0 | Worker Versioning high level client |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

32 issues (65% of open) have had no activity for over 12 months. A triage pass is recommended.

- **Close candidates:** [#77](https://github.com/temporalio/sdk-dotnet/issues/77) (time-skipping bug from 2023, may be superseded), [#131](https://github.com/temporalio/sdk-dotnet/issues/131) (single-platform NuGet build, 2023), [#194](https://github.com/temporalio/sdk-dotnet/issues/194) (test dependency vulnerability, likely outdated)
- **Needs triage:** [#247](https://github.com/temporalio/sdk-dotnet/issues/247) (win-x86 support -- is there still demand?), [#256](https://github.com/temporalio/sdk-dotnet/issues/256) (documentation clarification), [#280](https://github.com/temporalio/sdk-dotnet/issues/280) (test environment TaskQueue bug), [#305](https://github.com/temporalio/sdk-dotnet/issues/305) (multiple completion commands)
- **Keep open:** [#286](https://github.com/temporalio/sdk-dotnet/issues/286) (.NET Trimming, 7 upvotes -- clear demand), [#363](https://github.com/temporalio/sdk-dotnet/issues/363) (scoped IServiceProvider, 1 upvote), [#390](https://github.com/temporalio/sdk-dotnet/issues/390) (F# support, 2 upvotes with active discussion)

### Duplicate Candidates

- [#586](https://github.com/temporalio/sdk-dotnet/issues/586) and [#587](https://github.com/temporalio/sdk-dotnet/issues/587) are complementary SafeHandle/IDisposable refactoring tasks that could be tracked as a single work item
- [#77](https://github.com/temporalio/sdk-dotnet/issues/77) and [#179](https://github.com/temporalio/sdk-dotnet/issues/179) both relate to time-skipping test environment misbehavior -- may share a common root cause

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix [#588](https://github.com/temporalio/sdk-dotnet/issues/588) -- workflow task failures silently lost (high severity bug)
- Address [#395](https://github.com/temporalio/sdk-dotnet/issues/395) -- RpcException: operation canceled (user-reported production issue)
- Resolve [#234](https://github.com/temporalio/sdk-dotnet/issues/234) -- payload codec reuse bug in failure scenarios

### Phase 2: Developer Experience (Short-term)

- Fix time-skipping test environment bugs: [#179](https://github.com/temporalio/sdk-dotnet/issues/179), [#280](https://github.com/temporalio/sdk-dotnet/issues/280), [#77](https://github.com/temporalio/sdk-dotnet/issues/77)
- Deliver [#576](https://github.com/temporalio/sdk-dotnet/issues/576) -- .NET Analyzer for workflow determinism checking
- Complete [#420](https://github.com/temporalio/sdk-dotnet/issues/420) -- synchronous Run method in testing

### Phase 3: Feature Expansion (Medium-term)

- Implement [#286](https://github.com/temporalio/sdk-dotnet/issues/286) -- .NET Trimming support (highest user demand, 7 upvotes)
- Add [#553](https://github.com/temporalio/sdk-dotnet/issues/553) -- virtual/interface-based service abstractions for testability
- Deliver [#390](https://github.com/temporalio/sdk-dotnet/issues/390) -- F# samples and documentation
- Complete [#363](https://github.com/temporalio/sdk-dotnet/issues/363) -- scoped IServiceProvider in ActivityInboundInterceptor

### Phase 4: Maintenance (Ongoing)

- Triage and close stale issues (32 candidates)
- Address [#194](https://github.com/temporalio/sdk-dotnet/issues/194) -- update test dependency with known vulnerability
- Complete SafeHandle refactoring ([#586](https://github.com/temporalio/sdk-dotnet/issues/586), [#587](https://github.com/temporalio/sdk-dotnet/issues/587))
