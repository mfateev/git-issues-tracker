# Temporal Python SDK - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 115
**Repository:** [temporalio/sdk-python](https://github.com/temporalio/sdk-python)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-python/ISSUES.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The Python SDK has 115 open issues with sandbox/debugging being the primary pain point. Users struggle with workflow debugging and sandbox restrictions. The SDK has a high bug-to-enhancement ratio (46:65), indicating stability concerns need attention.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 65 | Medium |
| Bugs | 46 | High - Core functionality |
| Stale Issues (>1 year) | 52 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 31 |
| Total Comments | 206 |
| Issues with Upvotes | 17 (15%) |
| Issues with Comments | 54 (47%) |

### Recommended Actions

1. **Immediate:** Fix sandbox/debugging issues (top user pain point)
2. **Short-term:** Address sandbox-related bugs (ruamel.yaml, Protobuf)
3. **Medium-term:** OpenTelemetry/ddtrace compatibility
4. **Long-term:** Python 3.14 free-threading support
5. **Housekeeping:** Triage 52 stale issues

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#487](https://github.com/temporalio/sdk-python/issues/487) | **6** | 3 | Allow workflow logger to opt-out of sandboxing |
| 2 | [#603](https://github.com/temporalio/sdk-python/issues/603) | 3 | 1 | Document PyCharm debugger with workflows |
| 3 | [#238](https://github.com/temporalio/sdk-python/issues/238) | 3 | 5 | Can't debug workflow using VSCode (BUG) |
| 4 | [#1154](https://github.com/temporalio/sdk-python/issues/1154) | 2 | 2 | Support InterpreterPoolExecutor (py3.14) |
| 5 | [#928](https://github.com/temporalio/sdk-python/issues/928) | 2 | 0 | Free-threading capable SDK |
| 6 | [#807](https://github.com/temporalio/sdk-python/issues/807) | 2 | 3 | Loss of stack trace information |
| 7 | [#321](https://github.com/temporalio/sdk-python/issues/321) | 2 | 1 | TemporalFailure from converters should fail workflow |
| 8 | [#213](https://github.com/temporalio/sdk-python/issues/213) | 2 | 0 | Confirm VSCode debuggability within sandbox |
| 9 | [#1250](https://github.com/temporalio/sdk-python/issues/1250) | 1 | 2 | RuntimeError starting test server |
| 10 | [#1089](https://github.com/temporalio/sdk-python/issues/1089) | 1 | 0 | OpenAI Agents Session implementations |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #487 | 15 | Workflow logger sandbox opt-out |
| 2 | #638 | 14 | ruamel.yaml sandbox issue |
| 3 | #688 | 12 | Protobuf sandbox issues |
| 4 | #160 | 12 | OpenTelemetry interceptor errors |
| 5 | #1048 | 11 | Cancellation in sync multiprocessed activities |
| 6 | #238 | 11 | VSCode debugging |
| 7 | #733 | 10 | OpenTelemetry + ddtrace incompatibility |
| 8 | #700 | 10 | Activity cancellation waiting |
| 9 | #300 | 10 | PyGILState_Release issue |
| 10 | #639 | 9 | Operation canceled on start_workflow |

---

## 1. Critical: Sandbox & Debugging Issues

The workflow sandbox is the #1 source of user friction in the Python SDK.

### 1.1 Debugging Blocked by Sandbox (3 issues, 8 👍)

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | **Logger can't opt-out of sandboxing** | 6 |
| [#238](https://github.com/temporalio/sdk-python/issues/238) | Can't debug workflow using VSCode | 3 |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | PyCharm debugger documentation needed | 3 |
| [#213](https://github.com/temporalio/sdk-python/issues/213) | Confirm VSCode debuggability | 2 |
| [#1104](https://github.com/temporalio/sdk-python/issues/1104) | debug_mode still doesn't allow breakpoints | 0 |

**Key Insight:** 4 of the top 10 upvoted issues relate to debugging. This is a major DX problem.

**Recommendation:**
1. Priority fix for #487 - allow logger opt-out
2. Comprehensive debugging documentation (#603)
3. Improve debug_mode to actually enable breakpoints (#1104)

### 1.2 Sandbox Import/Validation Issues (5+ issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#638](https://github.com/temporalio/sdk-python/issues/638) | **ruamel.yaml import breaks validation** | 12 |
| [#688](https://github.com/temporalio/sdk-python/issues/688) | **Protobuf sandbox issues** | 12 |
| [#655](https://github.com/temporalio/sdk-python/issues/655) | KeyError: 'warnings' due to sandbox | 1 |
| [#399](https://github.com/temporalio/sdk-python/issues/399) | Older Python can't auto-import activity return class | 3 |
| [#1254](https://github.com/temporalio/sdk-python/issues/1254) | Warns on import of workflow itself | 0 |

**Analysis:** These issues have high comment counts indicating many users hit them. The sandbox's restrictive import validation causes friction with common libraries.

**Recommendation:** Review sandbox import validation logic. Consider:
1. More granular passthrough policies
2. Better error messages with suggested fixes
3. Document known problematic libraries and workarounds

---

## 2. High Priority: Bugs (46 issues)

### 2.1 OpenTelemetry & Tracing Bugs (3 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#160](https://github.com/temporalio/sdk-python/issues/160) | OpenTelemetry interceptors report errors | 12 |
| [#733](https://github.com/temporalio/sdk-python/issues/733) | Can't run with OpenTelemetry + ddtrace | 10 |
| [#1136](https://github.com/temporalio/sdk-python/issues/1136) | Langfuse tracing broken with OTel Agents | 5 |

**Recommendation:** OpenTelemetry compatibility is critical for production use. These need investigation.

### 2.2 Activity & Cancellation Bugs (5 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#700](https://github.com/temporalio/sdk-python/issues/700) | **No clean way to cancel activity and wait** | 10 |
| [#782](https://github.com/temporalio/sdk-python/issues/782) | Cancelled timer callback causes InvalidStateError | 1 |
| [#699](https://github.com/temporalio/sdk-python/issues/699) | workflow.wait broken with FIRST_COMPLETED | 1 |
| [#476](https://github.com/temporalio/sdk-python/issues/476) | Failed during multiprocess queue poll for heartbeat | 5 |
| [#352](https://github.com/temporalio/sdk-python/issues/352) | Cancel between awaitables not cancelling workflow | 0 |

### 2.3 Client & Connection Bugs (4 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#639](https://github.com/temporalio/sdk-python/issues/639) | Operation canceled when start_workflow | 7 |
| [#300](https://github.com/temporalio/sdk-python/issues/300) | PyGILState_Release issue | 10 |
| [#814](https://github.com/temporalio/sdk-python/issues/814) | Can't connect via proxy with auth header | 1 |
| [#657](https://github.com/temporalio/sdk-python/issues/657) | Cannot replace worker client with default Runtime | 0 |

### 2.4 Data Conversion Bugs (4 issues)

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#641](https://github.com/temporalio/sdk-python/issues/641) | Unregistered query gives "Encoded failure" | 1 |
| [#1237](https://github.com/temporalio/sdk-python/issues/1237) | Bad value converting dict[None, Any] | 0 |
| [#427](https://github.com/temporalio/sdk-python/issues/427) | Dataclasses require defaulted fields in JSON | 0 |
| [#629](https://github.com/temporalio/sdk-python/issues/629) | upsert_search_attributes borks on empty inputs | 0 |

### 2.5 Build & Platform Bugs (3 issues)

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#622](https://github.com/temporalio/sdk-python/issues/622) | Can't install on python 3.11-alpine3.16 | 1 |
| [#637](https://github.com/temporalio/sdk-python/issues/637) | Windows 3.12.5 builds broken | 0 |
| [#597](https://github.com/temporalio/sdk-python/issues/597) | Can't build wheel with pip | 1 |

---

## 3. Medium Priority: Enhancement Clusters

### 3.1 Python 3.14+ / Free-Threading (3 issues, 4 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1154](https://github.com/temporalio/sdk-python/issues/1154) | Support InterpreterPoolExecutor (py3.14) | 2 |
| [#928](https://github.com/temporalio/sdk-python/issues/928) | Free-threading capable SDK | 2 |
| [#803](https://github.com/temporalio/sdk-python/issues/803) | Run different worker types in separate threads | 0 |

**Analysis:** Python 3.14 will introduce significant concurrency changes. Early preparation is valuable.

### 3.2 Workflow Improvements (13 issues, 11 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#487](https://github.com/temporalio/sdk-python/issues/487) | Logger sandbox opt-out | 6 |
| [#603](https://github.com/temporalio/sdk-python/issues/603) | PyCharm debugger documentation | 3 |
| [#321](https://github.com/temporalio/sdk-python/issues/321) | TemporalFailure from converters should fail workflow | 2 |
| [#719](https://github.com/temporalio/sdk-python/issues/719) | Provide "workflow local" | 0 |
| [#467](https://github.com/temporalio/sdk-python/issues/467) | Support workflow metadata query | 0 |

### 3.3 Tracing & Observability (8 issues, 3 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#807](https://github.com/temporalio/sdk-python/issues/807) | Loss of stack trace information | 2 |
| [#758](https://github.com/temporalio/sdk-python/issues/758) | Activities extraction utilities | 1 |
| [#1130](https://github.com/temporalio/sdk-python/issues/1130) | Custom tracing providers | 0 |
| [#837](https://github.com/temporalio/sdk-python/issues/837) | Logger adapter for OpenTelemetry | 0 |
| [#722](https://github.com/temporalio/sdk-python/issues/722) | Stack trace on deadlock improvements | 0 |
| [#669](https://github.com/temporalio/sdk-python/issues/669) | OTel guidance with process-pool workers | 0 |
| [#454](https://github.com/temporalio/sdk-python/issues/454) | Schedule creation tracing span | 0 |

### 3.4 AI/ML Integration (2 issues, 1 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1089](https://github.com/temporalio/sdk-python/issues/1089) | OpenAI Agents Session implementations | 1 |
| [#1009](https://github.com/temporalio/sdk-python/issues/1009) | OpenAI Agents streaming support | 0 |

### 3.5 Activity Improvements (3 issues)

| Issue | Enhancement | Comments |
|-------|-------------|----------|
| [#1048](https://github.com/temporalio/sdk-python/issues/1048) | Cancellation in sync multiprocessed activities | 11 |
| [#810](https://github.com/temporalio/sdk-python/issues/810) | Proper cancelled/uncancel/cancelling behavior | 0 |
| [#377](https://github.com/temporalio/sdk-python/issues/377) | Warn on non-static activity method | 0 |

---

## 4. Issue Housekeeping

### 4.1 Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 5 |
| 1-3 months | 6 |
| 3-6 months | 11 |
| 6-12 months | 28 |
| 1-2 years | 41 |
| 2-3 years | 18 |
| 3+ years | 6 |

**Note:** 41 issues are 1-2 years old - significant backlog.

### 4.2 Stale Issues (52 issues)

52 issues have had no activity in >12 months. Notable ones:

| Issue | Title | 👍 |
|-------|-------|-----|
| #641 | Unregistered query "Encoded failure" | 1 |
| #639 | Operation canceled on start_workflow | 1 |
| #638 | ruamel.yaml breaks validation | 1 |
| #675 | Auto-skip time in test env | 0 |
| #669 | OTel with process-pool workers | 0 |

**Recommendation:**
1. Prioritize stale issues with upvotes
2. Request reproduction on current SDK version
3. Close if no response in 30 days

---

## 5. Proposed Roadmap

### Phase 1: Sandbox & Debugging (Highest Impact)
- [ ] Fix logger sandbox opt-out (#487 - 6 👍)
- [ ] Create comprehensive debugging documentation (#603, #213)
- [ ] Fix debug_mode to enable breakpoints (#1104)
- [ ] Address ruamel.yaml sandbox issue (#638)
- [ ] Address Protobuf sandbox issues (#688)

### Phase 2: Core Bug Fixes
- [ ] Fix OpenTelemetry interceptor errors (#160)
- [ ] Fix OTel + ddtrace compatibility (#733)
- [ ] Fix activity cancellation waiting (#700)
- [ ] Investigate PyGILState_Release (#300)

### Phase 3: Platform Support
- [ ] Fix alpine installation (#622)
- [ ] Fix Windows builds (#637)
- [ ] Publish musl wheel (#761)

### Phase 4: Future Python Versions
- [ ] Research free-threading compatibility (#928)
- [ ] Support InterpreterPoolExecutor (#1154)

### Phase 5: DX Improvements
- [ ] Stack trace improvements (#807, #722)
- [ ] Activity extraction utilities (#758)
- [ ] OpenAI Agents Session implementations (#1089)

### Ongoing: Housekeeping
- [ ] Triage 52 stale issues
- [ ] Close resolved/outdated issues

---

## 6. Quick Reference: Top 20 High-Impact Issues

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #487 | Sandbox | **6** | Logger opt-out (TOP REQUEST) |
| 2 | #603 | Docs | **3** | PyCharm debugger |
| 3 | #238 | Bug | **3** | VSCode debugging |
| 4 | #1154 | Enhancement | **2** | Python 3.14 support |
| 5 | #928 | Enhancement | **2** | Free-threading |
| 6 | #807 | Enhancement | **2** | Stack trace info |
| 7 | #321 | Enhancement | **2** | Converter failures |
| 8 | #213 | Enhancement | **2** | VSCode sandbox debugging |
| 9 | #638 | Bug | **1** | ruamel.yaml sandbox |
| 10 | #688 | Bug | 0 | Protobuf sandbox |
| 11 | #160 | Bug | 0 | OTel interceptor errors |
| 12 | #733 | Bug | 0 | OTel + ddtrace |
| 13 | #1048 | Enhancement | 0 | Activity cancellation |
| 14 | #700 | Bug | 0 | Cancel activity and wait |
| 15 | #300 | Bug | 0 | PyGILState_Release |
| 16 | #639 | Bug | **1** | Operation canceled |
| 17 | #1089 | Enhancement | **1** | OpenAI Agents Session |
| 18 | #782 | Bug | **1** | Timer InvalidStateError |
| 19 | #758 | Enhancement | **1** | Activity extraction |
| 20 | #641 | Bug | **1** | Encoded failure |

**Key Insight:** The Python SDK's top issues are predominantly about the workflow sandbox blocking debugging and common library imports. Unlike other SDKs where users request new features, Python users are asking to remove friction from existing functionality.

---

## Appendix: Analysis Scripts

```bash
# Show statistics
node scripts/analyze-issues.js temporalio-sdk-python stats

# Show issues by age
node scripts/analyze-issues.js temporalio-sdk-python age

# List bugs (sorted by upvotes)
node scripts/analyze-issues.js temporalio-sdk-python bugs

# === ENGAGEMENT COMMANDS ===

# Show top issues by upvotes
node scripts/analyze-issues.js temporalio-sdk-python upvotes

# Priority score (upvotes×2 + comments)
node scripts/analyze-issues.js temporalio-sdk-python priority

# Show stale issues (>12 months)
node scripts/analyze-issues.js temporalio-sdk-python stale

# Categorize enhancements
node scripts/analyze-issues.js temporalio-sdk-python categories

# === SYNC COMMANDS ===

# Update issues (incremental)
./scripts/update-issues.sh temporalio-sdk-python

# Rebuild index
node scripts/build-index.js temporalio-sdk-python
```

### Querying with jq

```bash
# Find sandbox-related issues
cat repos/temporalio-sdk-python/issues-index.json | jq '.issues[] | select(.title | test("sandbox|Sandbox"; "i")) | {number, title, upvotes}'

# Find debugging-related issues
cat repos/temporalio-sdk-python/issues-index.json | jq '.issues[] | select(.title | test("debug|Debug|breakpoint"; "i")) | {number, title, upvotes}'

# Find issues with 2+ upvotes
cat repos/temporalio-sdk-python/issues-index.json | jq '.issues[] | select(.upvotes >= 2) | {number, title, upvotes}'
```
