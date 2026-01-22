# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** January 22, 2026
**Total Open Issues:** 120
**Total Closed Issues:** 478
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Themes](themes/index.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Python SDK maintains a healthy 80% resolution rate with 120 open issues, primarily split between bugs (48) and enhancements (64). The SDK shows moderate backlog growth with 27 more issues opened than closed over the last 12 months. Key pain points center around workflow sandbox compatibility, OpenTelemetry integration, and debugging capabilities - areas that significantly impact developer experience.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Bugs | 48 | High - includes sandbox issues affecting core functionality |
| Enhancements | 64 | Medium - many are quality-of-life improvements |
| Sandbox Issues | 6 | High - blocking for users with specific dependencies |
| OpenTelemetry/Tracing | 7 | High - observability is critical for production |
| Testing Infrastructure | 13 | Medium - impacts development workflow |
| Debugging | 4 | Medium - affects developer experience |
| Stale Issues | 55 | Low - housekeeping needed |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes | 27 |
| Total Comments | 219 |
| Issues with Upvotes | 17 (14%) |
| Issues with Comments | 57 (48%) |

### Resolution Metrics

> Note: These metrics are derived from closed issue analysis. Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | 80% (478/598) |
| Median Time to Close | 16 days (calendar) / 12 days (business) |
| Resolved within 30 days | 65% |
| Resolved within 90 days | 85% |

### Recommended Actions

1. **Immediate:** Address OpenTelemetry integration bugs (#160, #733) - critical for production observability
2. **Short-term:** Fix workflow sandbox compatibility issues with popular libraries (Protobuf, ruamel.yaml)
3. **Medium-term:** Improve debugging experience in VSCode/PyCharm (#238, #603, #213)
4. **Long-term:** Implement Python 3.14+ features (InterpreterPoolExecutor, free-threading)
5. **Housekeeping:** Triage 55 stale issues (>12 months old)

---

## Issue Health Assessment

### Velocity Trend (Last 12 Months)

| Trend | Issues Opened | Issues Closed | Net Change |
|-------|---------------|---------------|------------|
| Last 12 months | 180 | 153 | +27 |

The backlog shows moderate growth with an average of 2-3 more issues opened than closed per month. September 2025 saw a spike in activity with 25 issues opened and 26 closed. The team maintains a consistent closure rate but struggles to fully match incoming volume.

### Last 6 Months: Detailed Analysis

| Metric | Value |
|--------|-------|
| Issues Opened | 101 |
| Issues Closed | 97 |
| Bugs Closed | 42 |
| Enhancements Completed | 46 |

### Popular Requests Resolved (Last 6 Months)

| Issue | Upvotes | Title |
|-------|-----|-------|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | 6 | Allow workflow logger to opt-out of suppression |
| [#893](https://github.com/temporalio/sdk-python/issues/893) | 4 | Pyright (strict mode) fails on start/execute methods |
| [#441](https://github.com/temporalio/sdk-python/issues/441) | 4 | GeneratorExit possibly causing issues on context manager |
| [#1107](https://github.com/temporalio/sdk-python/issues/1107) | 3 | Update dependency constraint for protobuf |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | Upvotes | Comments | Title |
|------|-------|-----|-----|-------|
| 1 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | Investigate/document how to use PyCharm debugger with workflows |
| 2 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | Can't debug workflow using VSCode |
| 3 | [#1267](https://github.com/temporalio/sdk-python/issues/1267) | 2 | 1 | Logs not emitted during workflow queries |
| 4 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | Support InterpreterPoolExecutor from py3.14 |
| 5 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | Research and make SDK free-threading capable/compatible |
| 6 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | Loss of stack trace information |
| 7 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | Temporal exceptions from converters and codecs should fail the workflow not task |
| 8 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 9 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError when starting Temporal test server |
| 10 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | 0 | Provide supported Session implementations for OpenAI Agents |

### Priority Score (Upvotes x 2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | [#638](https://github.com/temporalio/sdk-python/issues/638) | 14 | Importing ruamel.yaml causes workflow validation failure |
| 2 | [#688](https://github.com/temporalio/sdk-python/issues/688) | 12 | Workflow sandbox issues with Protobuf |
| 3 | [#160](https://github.com/temporalio/sdk-python/issues/160) | 12 | OpenTelemetry interceptors report errors |
| 4 | [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 11 | Support raising cancellation in sync multiprocessed activities |
| 5 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 11 | Can't debug workflow using VSCode |
| 6 | [#733](https://github.com/temporalio/sdk-python/issues/733) | 10 | Unable to run workflows with OpenTelemetry and ddtrace |
| 7 | [#700](https://github.com/temporalio/sdk-python/issues/700) | 10 | No clean way to cancel an activity and wait until it's cancelled |
| 8 | [#300](https://github.com/temporalio/sdk-python/issues/300) | 10 | Investigate PyGILState_Release issue for client |
| 9 | [#639](https://github.com/temporalio/sdk-python/issues/639) | 9 | Operation was canceled when start_workflow |
| 10 | [#758](https://github.com/temporalio/sdk-python/issues/758) | 8 | Provide activities extraction utilities |

---

## Issue Analysis by Category

### Sandbox Compatibility Issues (6 issues)

The workflow sandbox, which ensures determinism by restricting imports and operations, causes friction with popular third-party libraries. These issues have high discussion volume indicating significant user impact.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#688](https://github.com/temporalio/sdk-python/issues/688) | 0 | Protobuf compatibility issues cause sandbox failures |
| [#638](https://github.com/temporalio/sdk-python/issues/638) | 1 | ruamel.yaml import causes workflow validation failures |
| [#655](https://github.com/temporalio/sdk-python/issues/655) | 0 | KeyError: 'warnings' due to sandbox |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | 0 | WARN_ON_UNINTENTIONAL_PASSTHROUGH warns on workflow import |
| [#585](https://github.com/temporalio/sdk-python/issues/585) | 0 | Test flake may be sandbox import issue |
| [#399](https://github.com/temporalio/sdk-python/issues/399) | 0 | Older Python versions cannot auto-import activity return class |

### OpenTelemetry & Observability (7 issues)

Observability integration issues are critical for production deployments. Multiple long-standing bugs affect tracing functionality.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | 0 | OpenTelemetry interceptors report errors incorrectly |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | 0 | Unable to run workflows with OpenTelemetry and ddtrace |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | 0 | Langfuse Tracing not working with Temporal OpenAI Agents |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | 0 | Make Temporal logger adapter accommodate OpenTelemetry |
| [#1130](https://github.com/temporalio/sdk-python/issues/1130) | 0 | Support for custom tracing providers |
| [#669](https://github.com/temporalio/sdk-python/issues/669) | 0 | Guidance on OpenTelemetry with process-pool workers |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | 0 | Schedule creation should create tracing span by default |

### Testing Infrastructure (13 issues)

Issues related to the test server, time-skipping mode, and testing workflows affect developer productivity.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1280](https://github.com/temporalio/sdk-python/issues/1280) | 0 | Unable to test child workflow cancellation |
| [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | RuntimeError when starting Temporal test server |
| [#851](https://github.com/temporalio/sdk-python/issues/851) | 0 | Test server in time-skipping mode issues with userMetadata |
| [#826](https://github.com/temporalio/sdk-python/issues/826) | 0 | test_unfinished_handler_on_workflow_termination fails with time skipping |
| [#834](https://github.com/temporalio/sdk-python/issues/834) | 0 | Python 3.13.3 on macOS Intel hangs post-test |
| [#586](https://github.com/temporalio/sdk-python/issues/586) | 0 | start_child_workflow behaves differently than execute_child_workflow in tests |
| [#675](https://github.com/temporalio/sdk-python/issues/675) | 0 | Auto-skip time in time-skipping testing environment |
| [#563](https://github.com/temporalio/sdk-python/issues/563) | 0 | Update test running to replay |

### Debugging & Developer Experience (4 issues)

Debugging workflows is a significant pain point. The sandbox's isolation makes traditional debugging difficult.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | Can't debug workflow using VSCode |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | Investigate/document PyCharm debugger with workflows |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | Confirm VSCode debuggability within sandbox |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | 0 | debug_mode in Worker doesn't allow breakpoints |

### Activity & Cancellation Handling (9 issues)

Activity lifecycle management and cancellation semantics have multiple open issues.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | 0 | No clean way to cancel an activity and wait until cancelled |
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | 0 | Support raising cancellation in sync multiprocessed activities |
| [#782](https://github.com/temporalio/sdk-python/issues/782) | 1 | Cancelled timer callback causes InvalidStateError |
| [#352](https://github.com/temporalio/sdk-python/issues/352) | 0 | Cancel received between awaitables not cancelling workflow |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | 0 | Implement proper behavior for cancelled, uncancel, cancelling |
| [#1292](https://github.com/temporalio/sdk-python/issues/1292) | 0 | temporalio.CancelledError should inherit from BaseException |
| [#764](https://github.com/temporalio/sdk-python/issues/764) | 0 | Expose Workflow cancel cause/reason |

### Worker & Polling Issues (5 issues)

Worker stability and polling behavior issues can affect production reliability.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#1295](https://github.com/temporalio/sdk-python/issues/1295) | 0 | Worker intermittently stops polling after synchronous activity |
| [#1268](https://github.com/temporalio/sdk-python/issues/1268) | 0 | Activity/workflow pollers drop to 0 ignoring settings |
| [#476](https://github.com/temporalio/sdk-python/issues/476) | 0 | Failed during multiprocess queue poll for heartbeat |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | 0 | Cannot replace worker client if default Runtime is used |
| [#803](https://github.com/temporalio/sdk-python/issues/803) | 0 | Run different worker types in separate threads |

### Data Conversion & Serialization (8 issues)

Payload conversion and codec issues affect data handling across workflow boundaries.

| Issue | Upvotes | Description |
|-------|-----|-------------|
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | Temporal exceptions from converters should fail workflow not task |
| [#1237](https://github.com/temporalio/sdk-python/issues/1237) | 0 | Converter returns bad value for dict[None, Any] |
| [#641](https://github.com/temporalio/sdk-python/issues/641) | 1 | Unregistered query with encode_common_attributes causes error |
| [#608](https://github.com/temporalio/sdk-python/issues/608) | 0 | Make payload conversion errors more discriminable |
| [#536](https://github.com/temporalio/sdk-python/issues/536) | 0 | Clarify exception on return type decoding failure |
| [#438](https://github.com/temporalio/sdk-python/issues/438) | 0 | Allow RawValue for Search Attribute Upsert |
| [#479](https://github.com/temporalio/sdk-python/issues/479) | 0 | Reflection-based payload codec test |
| [#697](https://github.com/temporalio/sdk-python/issues/697) | 0 | Handle edge case of recursive exceptions in failure converter |

---

## Enhancement Requests (64 issues)

### Python Version Support & Future Compatibility

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | Support InterpreterPoolExecutor from py3.14 |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | Research and make SDK free-threading capable/compatible |
| [#676](https://github.com/temporalio/sdk-python/issues/676) | 0 | Support (str, Enum) like StrEnum |

### API Improvements

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#758](https://github.com/temporalio/sdk-python/issues/758) | 1 | Provide activities extraction utilities |
| [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | Loss of stack trace information |
| [#618](https://github.com/temporalio/sdk-python/issues/618) | 0 | Improve wait_condition semantics |
| [#235](https://github.com/temporalio/sdk-python/issues/235) | 0 | Raise exception for payloads exceeding gRPC max size |
| [#719](https://github.com/temporalio/sdk-python/issues/719) | 0 | Provide "workflow local" |

### Observability & Metrics

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#875](https://github.com/temporalio/sdk-python/issues/875) | 1 | Expose SDK metric for worker._count_not_evict_count |
| [#1049](https://github.com/temporalio/sdk-python/issues/1049) | 0 | Support access to metric meter in multi-processed workers |
| [#1121](https://github.com/temporalio/sdk-python/issues/1121) | 0 | Document runtime telemetry config fields |

### AI & Integration Features

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | Provide supported Session implementations for OpenAI Agents |
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | 0 | OpenAI Agents Streaming support |
| [#1056](https://github.com/temporalio/sdk-python/issues/1056) | 0 | Add workflow MCP client |

### Payload Size Management (Recent)

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#1289](https://github.com/temporalio/sdk-python/issues/1289) | 0 | Warn if SDK detects workflow history over certain size |
| [#1285](https://github.com/temporalio/sdk-python/issues/1285) | 0 | Fail workflow task if payload size known to be too large |
| [#1284](https://github.com/temporalio/sdk-python/issues/1284) | 0 | Warn if SDK tried to send payload above specific size |

### Workflow Versioning & Deployment

| Issue | Upvotes | Request |
|-------|-----|---------|
| [#870](https://github.com/temporalio/sdk-python/issues/870) | 0 | Worker Versioning high level client |
| [#1209](https://github.com/temporalio/sdk-python/issues/1209) | 0 | Allow overriding Worker Deployment Version for Child Workflows |
| [#601](https://github.com/temporalio/sdk-python/issues/601) | 0 | Reset workflow feature |

---

## Housekeeping Recommendations

### Stale Issues (>1 year, no activity)

55 issues (46%) have had no activity for over 12 months. Top stale issues by upvotes:

| Issue | Upvotes | Last Updated | Title |
|-------|-----|--------------|-------|
| [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 2025-01-17 | Investigate/document PyCharm debugger |
| [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 2024-11-16 | Can't debug workflow using VSCode |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 2023-07-05 | Temporal exceptions from converters |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 2022-11-28 | Confirm VSCode debuggability within sandbox |

**Close candidates:** Issues that may be resolved or no longer relevant:
- [#637](https://github.com/temporalio/sdk-python/issues/637) - Windows 3.12.5 builds broken (may be fixed in later versions)
- [#543](https://github.com/temporalio/sdk-python/issues/543) - Proto generation whitespace (low impact)
- [#488](https://github.com/temporalio/sdk-python/issues/488) - Fix typo in restriction set (minor)
- [#772](https://github.com/temporalio/sdk-python/issues/772) - Investigate unused bind_f function (internal)

**Needs triage:** Issues requiring maintainer decision:
- [#11](https://github.com/temporalio/sdk-python/issues/11) - Test client/worker/core behavior across fork (oldest open issue)
- [#45](https://github.com/temporalio/sdk-python/issues/45) - Improve workflow stack trace query result
- [#301](https://github.com/temporalio/sdk-python/issues/301) - Proxied classes not properly hashable

**Keep open:** Valid issues awaiting work:
- [#160](https://github.com/temporalio/sdk-python/issues/160) - OpenTelemetry interceptors report errors (12 comments, active discussion)
- [#300](https://github.com/temporalio/sdk-python/issues/300) - PyGILState_Release issue (10 comments)

### Duplicate Candidates

- [#238](https://github.com/temporalio/sdk-python/issues/238), [#603](https://github.com/temporalio/sdk-python/issues/603), [#213](https://github.com/temporalio/sdk-python/issues/213) - All related to debugging workflows (consider consolidating)
- [#1284](https://github.com/temporalio/sdk-python/issues/1284), [#1285](https://github.com/temporalio/sdk-python/issues/1285), [#1289](https://github.com/temporalio/sdk-python/issues/1289) - All related to payload size warnings (may be a single feature)

---

## Proposed Roadmap

Based on user demand and issue analysis:

### Phase 1: Stability (Immediate)

- Fix OpenTelemetry integration bugs (#160, #733) - critical for production observability
- Address worker polling stability issues (#1295, #1268)
- Resolve sandbox compatibility with Protobuf (#688)

### Phase 2: Developer Experience (Short-term)

- Improve debugging experience (#238, #603, #213, #1104)
- Fix sandbox warnings and library compatibility (#638, #655)
- Enhance activity cancellation semantics (#700, #1048)

### Phase 3: Feature Expansion (Medium-term)

- Python 3.14 support: InterpreterPoolExecutor (#1154)
- Free-threading research and compatibility (#928)
- OpenAI Agents integration improvements (#1089, #1009)
- Payload size warnings and protection (#1284, #1285, #1289)

### Phase 4: Maintenance (Ongoing)

- Triage and close 55 stale issues
- Consolidate duplicate debugging issues
- Update documentation for common pain points
- Remove deprecated dependencies (#921 - eval_type_backport)
