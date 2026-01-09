# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-09
**Total Open Issues:** 114
**Total Closed Issues:** 4
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-python/issues.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Python SDK has 114 open issues with a notably low resolution rate (3%), indicating the backlog is growing significantly (+39 issues in the last 12 months). The primary pain points are sandbox-related issues affecting third-party library compatibility, debugging challenges across IDEs (VSCode, PyCharm), and OpenTelemetry integration problems. With 46% of issues being stale (>12 months old), there is a need for both active bug fixes and housekeeping.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 47 | High - Core functionality issues |
| Enhancements | 63 | Medium - Developer experience improvements |
| Sandbox Issues | ~10 | High - Blocking third-party library usage |
| Debugging Issues | 4 | High - Developer experience critical |
| Stale Issues (>12 months) | 53 (46%) | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 33 |
| Total Comments | 203 |
| Issues with Upvotes | 18 (16%) |
| Issues with Comments | 53 (46%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 3% (4/118) |
| Median Time to Close | 75 days (calendar) / 53 days (business) |
| Resolved within 30 days | 0% |
| Resolved within 90 days | 75% |

### Recommended Actions

1. **Immediate:** Fix sandbox issues blocking Protobuf and ruamel.yaml usage
2. **Short-term:** Address debugging issues (VSCode, PyCharm) - top user demand
3. **Medium-term:** Resolve OpenTelemetry integration bugs, improve activity cancellation
4. **Long-term:** Support Python 3.14 InterpreterPoolExecutor, free-threading research
5. **Housekeeping:** Triage 53 stale issues, close outdated items

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

The backlog is growing steadily with limited closure activity.

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 42 | 3 | +39 |

**Backlog Growing:** 39 more issues opened than closed in the last 12 months. The extremely low resolution rate (3%) indicates maintenance capacity is significantly below incoming issue volume.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 24 |
| Issues Closed | 3 |
| Bugs Closed | 1 |
| Enhancements Completed | 2 |

### Popular Requests Resolved (Last 6 Months)

No issues with 3+ upvotes were closed in the last 6 months.

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#487](../repos/temporalio-sdk-python/issues.md#487) | 6 | 3 | Allow workflow logger to opt-out of sandboxing |
| 2 | [#603](../repos/temporalio-sdk-python/issues.md#603) | 3 | 1 | Investigate/document PyCharm debugger with workflows |
| 3 | [#238](../repos/temporalio-sdk-python/issues.md#238) | 3 | 5 | Can't debug workflow using VSCode |
| 4 | [#1267](../repos/temporalio-sdk-python/issues.md#1267) | 2 | 0 | Logs not emitted during workflow queries |
| 5 | [#1154](../repos/temporalio-sdk-python/issues.md#1154) | 2 | 2 | Support InterpreterPoolExecutor from py3.14 |
| 6 | [#928](../repos/temporalio-sdk-python/issues.md#928) | 2 | 0 | Research free-threading capability |
| 7 | [#807](../repos/temporalio-sdk-python/issues.md#807) | 2 | 3 | Loss of stack trace information |
| 8 | [#321](../repos/temporalio-sdk-python/issues.md#321) | 2 | 1 | Temporal exceptions from converters should fail workflow |
| 9 | [#213](../repos/temporalio-sdk-python/issues.md#213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 10 | [#1250](../repos/temporalio-sdk-python/issues.md#1250) | 1 | 2 | RuntimeError when starting test server |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#487](../repos/temporalio-sdk-python/issues.md#487) | 15 | Allow workflow logger to opt-out of sandboxing |
| 2 | [#638](../repos/temporalio-sdk-python/issues.md#638) | 14 | ruamel.yaml import causes validation failure |
| 3 | [#688](../repos/temporalio-sdk-python/issues.md#688) | 12 | Workflow sandbox issues with Protobuf |
| 4 | [#160](../repos/temporalio-sdk-python/issues.md#160) | 12 | OpenTelemetry interceptors report errors |
| 5 | [#1048](../repos/temporalio-sdk-python/issues.md#1048) | 11 | Support cancellation in sync multiprocessed activities |
| 6 | [#238](../repos/temporalio-sdk-python/issues.md#238) | 11 | Can't debug workflow using VSCode |
| 7 | [#733](../repos/temporalio-sdk-python/issues.md#733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 8 | [#700](../repos/temporalio-sdk-python/issues.md#700) | 10 | No clean way to cancel activity and wait |
| 9 | [#300](../repos/temporalio-sdk-python/issues.md#300) | 10 | PyGILState_Release issue for client |
| 10 | [#639](../repos/temporalio-sdk-python/issues.md#639) | 9 | Operation was canceled when start_workflow |

---

## Issue Analysis by Category

### 1. Sandbox Issues (Critical - ~10 issues)

The Python SDK's workflow sandbox is causing significant friction with third-party libraries. This is the most discussed category of issues.

#### Third-Party Library Compatibility

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#688](../repos/temporalio-sdk-python/issues.md#688) | 0 | Workflow sandbox issues with Protobuf (12 comments) |
| [#638](../repos/temporalio-sdk-python/issues.md#638) | 1 | ruamel.yaml import causes validation failure (12 comments) |
| [#655](../repos/temporalio-sdk-python/issues.md#655) | 0 | KeyError: 'warnings' due to sandbox |
| [#399](../repos/temporalio-sdk-python/issues.md#399) | 0 | Older Python versions cannot auto-import activity return class |

#### Sandbox Configuration & Control

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#487](../repos/temporalio-sdk-python/issues.md#487) | 6 | Allow workflow logger to opt-out of sandboxing (top upvoted) |
| [#1254](../repos/temporalio-sdk-python/issues.md#1254) | 0 | WARN_ON_UNINTENTIONAL_PASSTHROUGH warns on workflow import |
| [#585](../repos/temporalio-sdk-python/issues.md#585) | 0 | Test flake, may be sandbox import issue |
| [#607](../repos/temporalio-sdk-python/issues.md#607) | 0 | Prevent hot-reload of workflow definitions from disk |

**Recommendation:** The sandbox is critical for determinism but causing significant DX issues. Consider:
1. Document known incompatible libraries and workarounds
2. Implement [#487](../repos/temporalio-sdk-python/issues.md#487) - selective sandbox opt-out
3. Fix Protobuf and ruamel.yaml compatibility issues

### 2. Debugging Support Issues (High Priority - 4 issues)

Debugging is a major pain point for Python SDK users, with multiple top-upvoted issues.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#238](../repos/temporalio-sdk-python/issues.md#238) | 3 | Can't debug workflow using VSCode |
| [#603](../repos/temporalio-sdk-python/issues.md#603) | 3 | Investigate/document PyCharm debugger with workflows |
| [#213](../repos/temporalio-sdk-python/issues.md#213) | 2 | Confirm VSCode debuggability within sandbox |
| [#1104](../repos/temporalio-sdk-python/issues.md#1104) | 0 | debug_mode in Worker still doesn't allow breakpoints (7 comments) |

**Recommendation:** Debugging capability is essential for developer adoption. Prioritize:
1. Create comprehensive debugging documentation
2. Ensure debug_mode actually enables breakpoints
3. Test and document both VSCode and PyCharm workflows

### 3. OpenTelemetry / Observability Issues (High Priority - 5 issues)

Multiple users are experiencing issues with OpenTelemetry integration.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#160](../repos/temporalio-sdk-python/issues.md#160) | 0 | OpenTelemetry interceptors report errors (12 comments) |
| [#733](../repos/temporalio-sdk-python/issues.md#733) | 0 | Unable to run workflows with OpenTelemetry and ddtrace (10 comments) |
| [#1136](../repos/temporalio-sdk-python/issues.md#1136) | 0 | Langfuse Tracing not working with OpenAI Agents Plugin |
| [#837](../repos/temporalio-sdk-python/issues.md#837) | 0 | Make Temporal logger adapter accommodate OpenTelemetry |
| [#669](../repos/temporalio-sdk-python/issues.md#669) | 0 | Support OpenTelemetry with process-pool workers |

**Recommendation:** OpenTelemetry integration is critical for production deployments:
1. Fix core OpenTelemetry interceptor errors
2. Document ddtrace compatibility workarounds
3. Support OpenTelemetry in multiprocess environments

### 4. Activity Cancellation & Lifecycle (High Priority - 4 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#700](../repos/temporalio-sdk-python/issues.md#700) | 0 | No clean way to cancel activity and wait (10 comments) |
| [#1048](../repos/temporalio-sdk-python/issues.md#1048) | 0 | Support cancellation in sync multiprocessed activities (11 comments) |
| [#810](../repos/temporalio-sdk-python/issues.md#810) | 0 | Implement proper cancelled/uncancel/cancelling behavior |
| [#782](../repos/temporalio-sdk-python/issues.md#782) | 1 | Cancelled timer callback causes InvalidStateError |

### 5. Python Runtime Issues (Medium Priority - 3 issues)

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#300](../repos/temporalio-sdk-python/issues.md#300) | 0 | PyGILState_Release issue for client (10 comments) |
| [#834](../repos/temporalio-sdk-python/issues.md#834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |
| [#637](../repos/temporalio-sdk-python/issues.md#637) | 0 | Windows 3.12.5 builds are broken |

### 6. Recent Issues (Last 30 Days)

| Date | Issue | Title |
|------|-------|-------|
| 2026-01-09 | [#1268](../repos/temporalio-sdk-python/issues.md#1268) | Activity/workflow pollers drop to 0 ignoring min/max settings |
| 2026-01-08 | [#1267](../repos/temporalio-sdk-python/issues.md#1267) | Logs not emitted during workflow queries |
| 2025-12-29 | [#1262](../repos/temporalio-sdk-python/issues.md#1262) | ApplicationError details with type hint |
| 2025-12-17 | [#1254](../repos/temporalio-sdk-python/issues.md#1254) | SandboxImportNotificationPolicy warns on workflow import |

**Notable Recent Pattern:** Multiple recent bugs relate to observability (#1267, #1268) and sandbox behavior (#1254, #1262).

---

## Enhancement Requests (63 issues)

### Python Version Support & Future Compatibility

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1154](../repos/temporalio-sdk-python/issues.md#1154) | 2 | Support InterpreterPoolExecutor from py3.14 |
| [#928](../repos/temporalio-sdk-python/issues.md#928) | 2 | Research free-threading capability |
| [#761](../repos/temporalio-sdk-python/issues.md#761) | 0 | Publish musl wheel |
| [#921](../repos/temporalio-sdk-python/issues.md#921) | 0 | Remove eval_type_backport dependency |

### Developer Experience Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#807](../repos/temporalio-sdk-python/issues.md#807) | 2 | Loss of stack trace information |
| [#722](../repos/temporalio-sdk-python/issues.md#722) | 0 | Stack trace on deadlock exception improvements |
| [#758](../repos/temporalio-sdk-python/issues.md#758) | 1 | Activities extraction utilities |
| [#676](../repos/temporalio-sdk-python/issues.md#676) | 0 | Support (str, Enum) like StrEnum (7 comments) |

### API & Feature Enhancements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#321](../repos/temporalio-sdk-python/issues.md#321) | 2 | Temporal exceptions from converters should fail workflow |
| [#1089](../repos/temporalio-sdk-python/issues.md#1089) | 1 | Session implementations for OpenAI Agents |
| [#1056](../repos/temporalio-sdk-python/issues.md#1056) | 0 | Add workflow MCP client |
| [#1009](../repos/temporalio-sdk-python/issues.md#1009) | 0 | OpenAI Agents Streaming support |

### Metrics & Observability Enhancements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#875](../repos/temporalio-sdk-python/issues.md#875) | 1 | Expose SDK metric for worker._count_not_evict_count |
| [#1049](../repos/temporalio-sdk-python/issues.md#1049) | 0 | Support metric meter in multi-processed workers |
| [#1121](../repos/temporalio-sdk-python/issues.md#1121) | 0 | Document runtime telemetry config fields |
| [#1130](../repos/temporalio-sdk-python/issues.md#1130) | 0 | Support for custom tracing providers |

### Testing Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#675](../repos/temporalio-sdk-python/issues.md#675) | 0 | Auto-skip time in time-skipping environment for update result |
| [#851](../repos/temporalio-sdk-python/issues.md#851) | 0 | Test server in time-skipping mode doesn't return userMetadata.summary |
| [#563](../repos/temporalio-sdk-python/issues.md#563) | 0 | Update test running to replay |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity) - 53 issues (46%)

**Top stale issues by upvotes:**

| Issue | Upvotes | Last Updated | Title |
|-------|-----|--------------|-------|
| [#238](../repos/temporalio-sdk-python/issues.md#238) | 3 | 2024-11-16 | Can't debug workflow using VSCode |
| [#321](../repos/temporalio-sdk-python/issues.md#321) | 2 | 2023-07-05 | Temporal exceptions from converters |
| [#213](../repos/temporalio-sdk-python/issues.md#213) | 2 | 2022-11-28 | Confirm VSCode debuggability within sandbox |

**Close Candidates:**
- Issues older than 3 years with no recent activity or upvotes
- Issues that may have been fixed in recent releases
- [#488](../repos/temporalio-sdk-python/issues.md#488) - Fix typo in restriction set (trivial)
- [#772](../repos/temporalio-sdk-python/issues.md#772) - Investigate unused bind_f function (internal)

**Needs Triage:**
- [#300](../repos/temporalio-sdk-python/issues.md#300) - PyGILState_Release (3+ years old, 10 comments)
- [#160](../repos/temporalio-sdk-python/issues.md#160) - OpenTelemetry interceptors (3+ years old, 12 comments)

**Keep Open (Valid but Inactive):**
- All debugging-related issues (#238, #213, #603) - high user demand
- Sandbox compatibility issues - ongoing pain point

### Duplicate Candidates

**Debugging Cluster:**
- [#238](../repos/temporalio-sdk-python/issues.md#238), [#213](../repos/temporalio-sdk-python/issues.md#213), [#1104](../repos/temporalio-sdk-python/issues.md#1104) - Related debugging issues, consider consolidating

**OpenTelemetry Cluster:**
- [#160](../repos/temporalio-sdk-python/issues.md#160), [#733](../repos/temporalio-sdk-python/issues.md#733) - Both involve OpenTelemetry integration issues

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- [ ] Fix sandbox Protobuf compatibility ([#688](../repos/temporalio-sdk-python/issues.md#688))
- [ ] Fix sandbox ruamel.yaml compatibility ([#638](../repos/temporalio-sdk-python/issues.md#638))
- [ ] Fix recent poller issue ([#1268](../repos/temporalio-sdk-python/issues.md#1268))
- [ ] Fix logs during workflow queries ([#1267](../repos/temporalio-sdk-python/issues.md#1267))

### Phase 2: Developer Experience (Short-term)

- [ ] Implement workflow logger sandbox opt-out ([#487](../repos/temporalio-sdk-python/issues.md#487)) - top upvoted
- [ ] Document and fix VSCode debugging ([#238](../repos/temporalio-sdk-python/issues.md#238))
- [ ] Document PyCharm debugging ([#603](../repos/temporalio-sdk-python/issues.md#603))
- [ ] Fix debug_mode breakpoint support ([#1104](../repos/temporalio-sdk-python/issues.md#1104))

### Phase 3: Observability (Medium-term)

- [ ] Fix OpenTelemetry interceptor errors ([#160](../repos/temporalio-sdk-python/issues.md#160))
- [ ] Fix OpenTelemetry + ddtrace compatibility ([#733](../repos/temporalio-sdk-python/issues.md#733))
- [ ] Support OpenTelemetry in process-pool workers ([#669](../repos/temporalio-sdk-python/issues.md#669))

### Phase 4: Feature Expansion (Medium-term)

- [ ] Clean activity cancellation handling ([#700](../repos/temporalio-sdk-python/issues.md#700))
- [ ] Support cancellation in sync multiprocessed activities ([#1048](../repos/temporalio-sdk-python/issues.md#1048))
- [ ] Improve stack trace information ([#807](../repos/temporalio-sdk-python/issues.md#807))

### Phase 5: Future Python Support (Long-term)

- [ ] Research and support free-threading ([#928](../repos/temporalio-sdk-python/issues.md#928))
- [ ] Support InterpreterPoolExecutor from py3.14 ([#1154](../repos/temporalio-sdk-python/issues.md#1154))
- [ ] Publish musl wheel ([#761](../repos/temporalio-sdk-python/issues.md#761))

### Phase 6: Maintenance (Ongoing)

- [ ] Triage 53 stale issues
- [ ] Close resolved/outdated issues
- [ ] Consolidate duplicate issues
- [ ] Address backlog growth (currently +39/year)

---

## Quick Reference: Top 15 High-Impact Issues

Combining technical priority with user demand:

| # | Issue | Category | Upvotes | Impact |
|---|-------|----------|-----|--------|
| 1 | [#487](../repos/temporalio-sdk-python/issues.md#487) | Enhancement | **6** | Workflow logger sandbox opt-out (most upvoted) |
| 2 | [#688](../repos/temporalio-sdk-python/issues.md#688) | Bug | 0 | Sandbox Protobuf issues (12 comments) |
| 3 | [#638](../repos/temporalio-sdk-python/issues.md#638) | Bug | 1 | Sandbox ruamel.yaml issues (12 comments) |
| 4 | [#238](../repos/temporalio-sdk-python/issues.md#238) | Bug | **3** | VSCode debugging broken |
| 5 | [#603](../repos/temporalio-sdk-python/issues.md#603) | Enhancement | **3** | PyCharm debugging documentation |
| 6 | [#160](../repos/temporalio-sdk-python/issues.md#160) | Bug | 0 | OpenTelemetry interceptor errors (12 comments) |
| 7 | [#1267](../repos/temporalio-sdk-python/issues.md#1267) | Bug | **2** | Logs not emitted during queries (new) |
| 8 | [#1154](../repos/temporalio-sdk-python/issues.md#1154) | Enhancement | **2** | py3.14 InterpreterPoolExecutor |
| 9 | [#928](../repos/temporalio-sdk-python/issues.md#928) | Enhancement | **2** | Free-threading research |
| 10 | [#807](../repos/temporalio-sdk-python/issues.md#807) | Enhancement | **2** | Stack trace information loss |
| 11 | [#700](../repos/temporalio-sdk-python/issues.md#700) | Bug | 0 | Activity cancellation (10 comments) |
| 12 | [#1048](../repos/temporalio-sdk-python/issues.md#1048) | Enhancement | 0 | Multiprocess activity cancellation (11 comments) |
| 13 | [#1104](../repos/temporalio-sdk-python/issues.md#1104) | Bug | 0 | debug_mode not working (7 comments) |
| 14 | [#733](../repos/temporalio-sdk-python/issues.md#733) | Bug | 0 | OpenTelemetry + ddtrace (10 comments) |
| 15 | [#1268](../repos/temporalio-sdk-python/issues.md#1268) | Bug | 0 | Pollers drop to 0 (new) |

**Key Insight:** The most upvoted issues relate to sandbox flexibility (#487), debugging (#238, #603), and future Python support (#1154, #928). The most discussed issues (by comments) focus on sandbox compatibility (#688, #638, #160) and activity lifecycle (#1048, #700), indicating these are the areas causing the most user friction.
