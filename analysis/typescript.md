# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 149
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-typescript/issues.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The TypeScript SDK has 149 open issues with strong community engagement (179 upvotes, 351 comments). The #1 user request is **Bun runtime support** with 46 upvotes - by far the most upvoted issue. Recent releases (1.13.x-1.14.x) have introduced stability concerns that need immediate attention, including performance regressions and signal handling bugs.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 87 | Medium-High - Feature demand |
| Bugs | 51 | High - Core functionality |
| Documentation | 6 | Low |
| Stale Issues (>1 year) | 59 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 179 |
| Total Comments | 351 |
| Issues with Upvotes | 40 (27%) |
| Issues with Comments | 76 (51%) |

### Recommended Actions

1. **Immediate:** Address v1.13.x/1.14.x regressions (performance, signals, OTel CPU)
2. **Short-term:** Fix macOS environment config bug (cross-SDK issue)
3. **Medium-term:** OpenTelemetry v2 support (#1658 - 19 upvotes)
4. **Long-term:** Bun runtime support (#1334 - 46 upvotes), browser client
5. **Housekeeping:** Triage 59 stale issues

---

## Recent Issues (Last 30 Days) - URGENT

**7 new issues, including critical stability concerns:**

| Date | Issue | Type | Description |
|------|-------|------|-------------|
| 2026-01-04 | [#1869](../repos/temporalio-sdk-typescript/issues.md#1869) | Bug | Environment config incorrect file path on macOS |
| 2025-12-30 | [#1867](../repos/temporalio-sdk-typescript/issues.md#1867) | Enhancement | Per-Worker Logger |
| 2025-12-23 | [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | Bug | **Signal caused condition to fail with CancelledFailure (1.14.0)** |
| 2025-12-22 | [#1864](../repos/temporalio-sdk-typescript/issues.md#1864) | Enhancement | Update AI SDK integration to v6 |
| 2025-12-12 | [#1862](../repos/temporalio-sdk-typescript/issues.md#1862) | Enhancement | Importing workflow into activity causes gRPC error |
| 2025-12-10 | [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | Bug | **Performance regression from 1.13.1 → 1.13.2** |
| 2025-12-08 | [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | Bug | **High CPU with OTel instrumentation in v1.13.x** |

**Critical Pattern:** Three recent bugs (#1859, #1860, #1866) affect v1.13.x-1.14.x releases and share potential root causes. Consider a patch release.

---

## User Demand: Top Issues by Upvotes

These issues have the most user upvotes, indicating real community demand:

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | **46** | 46 | Run Temporal worker in Bun |
| 2 | [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | **20** | 8 | Temporal integration for @openai/agents |
| 3 | [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | **19** | 1 | OpenTelemetry v2 support |
| 4 | [#207](../repos/temporalio-sdk-typescript/issues.md#207) | 9 | 7 | Enable in-browser gRPC client |
| 5 | [#1499](../repos/temporalio-sdk-typescript/issues.md#1499) | 7 | 0 | Native request batching |
| 6 | [#928](../repos/temporalio-sdk-typescript/issues.md#928) | 7 | 26 | Jest detects open handles (BUG) |
| 7 | [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | 6 | 1 | Ephemeral server shutdown bug |
| 8 | [#933](../repos/temporalio-sdk-typescript/issues.md#933) | 6 | 2 | Separate "core" library without bundler deps |
| 9 | [#1432](../repos/temporalio-sdk-typescript/issues.md#1432) | 5 | 1 | Simplify AsyncLocalStorage in Workflow context |
| 10 | [#1749](../repos/temporalio-sdk-typescript/issues.md#1749) | 4 | 4 | Workflow task not found after SDK upgrade (BUG) |

### Priority Score (Upvotes×2 + Comments)

Combined engagement metric:

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #1334 | **138** | Bun runtime support |
| 2 | #1755 | 48 | OpenAI Agents integration |
| 3 | #483 | 45 | NestJS integration |
| 4 | #928 | 40 | Jest open handles |
| 5 | #1658 | 39 | OpenTelemetry v2 |
| 6 | #207 | 25 | Browser gRPC client |
| 7 | #1615 | 20 | NextJS 15 compatibility |
| 8 | #1499 | 14 | Request batching |
| 9 | #933 | 14 | Core library without bundler |
| 10 | #1443 | 13 | Ephemeral server shutdown |

---

## 1. URGENT: v1.13.x/1.14.x Stability Issues

Three recent bugs suggest issues with the 1.13.x-1.14.x release line:

| Issue | Problem | Version |
|-------|---------|---------|
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | **Performance regression** from 1.13.1 → 1.13.2 | 1.13.2 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | **High CPU with OTel instrumentation** | 1.13.x |
| [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | **Signal caused condition to fail with CancelledFailure** | 1.14.0 |

**Recommendation:**
1. Investigate if #1859 and #1860 share a root cause
2. Consider patch release (1.14.1) to address these regressions
3. Document workarounds for affected users

---

## 2. Critical: Runtime & Framework Support

### 2.1 Bun Runtime Support (46 👍 - #1 Request)

| Issue | Status |
|-------|--------|
| [#1334](../repos/temporalio-sdk-typescript/issues.md#1334) | Most upvoted issue by far (46 👍, 46 comments) |

**Analysis:** Bun has gained significant adoption in the JS ecosystem. Supporting it would open Temporal to a new user base seeking better performance and DX.

**Recommendation:**
1. Evaluate technical feasibility (Rust core bindings, worker threads)
2. If feasible, prioritize as a major initiative
3. If not feasible short-term, document limitations and timeline

### 2.2 NextJS Compatibility (3 👍)

| Issue | Problem |
|-------|---------|
| [#1615](../repos/temporalio-sdk-typescript/issues.md#1615) | Cannot use with NextJS 15 - workflowTypes from function names |

**Impact:** NextJS 15 has widespread adoption. This blocks a major user segment.

### 2.3 NestJS Integration (4 👍, 37 comments)

| Issue | Status |
|-------|--------|
| [#483](../repos/temporalio-sdk-typescript/issues.md#483) | Long-standing request with active discussion |

**Recommendation:** Consider official NestJS transport/integration or community partnership.

---

## 3. High Priority: Bugs (51 issues)

### 3.1 Testing & Development Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#928](../repos/temporalio-sdk-typescript/issues.md#928) | **Jest detects open handles** | 7 |
| [#1443](../repos/temporalio-sdk-typescript/issues.md#1443) | Ephemeral server prevents process shutdown | 6 |
| [#1702](../repos/temporalio-sdk-typescript/issues.md#1702) | Test suite timeout on first run | 0 |
| [#1687](../repos/temporalio-sdk-typescript/issues.md#1687) | Local env cannot be connected in unit tests | 0 |
| [#1233](../repos/temporalio-sdk-typescript/issues.md#1233) | nyc-test-coverage difficult to use | 0 |

**Recommendation:** #928 and #1443 are blocking DX. Prioritize fixes.

### 3.2 SDK Upgrade & Compatibility Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1749](../repos/temporalio-sdk-typescript/issues.md#1749) | Workflow task not found after SDK upgrade | 4 |
| [#1869](../repos/temporalio-sdk-typescript/issues.md#1869) | Environment config macOS path issue (new - cross-SDK) | 0 |
| [#1866](../repos/temporalio-sdk-typescript/issues.md#1866) | Signal caused CancelledFailure (1.14.0) | 2 |
| [#1860](../repos/temporalio-sdk-typescript/issues.md#1860) | Performance regression 1.13.1 → 1.13.2 | 0 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | High CPU with OTel in v1.13.x | 0 |
| [#1796](../repos/temporalio-sdk-typescript/issues.md#1796) | Type inference changed in SDK 1.12.2 | 1 |

**Recommendation:**
- Fix #1869 (coordinate with Java SDK - same bug)
- Investigate v1.13.x issues as a cluster - may share root cause

### 3.3 Non-Determinism Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1744](../repos/temporalio-sdk-typescript/issues.md#1744) | NDE replaying nested promises | 1 |
| [#1790](../repos/temporalio-sdk-typescript/issues.md#1790) | Replay fails - child workflow IDs don't match | 0 |

### 3.4 Worker & Activity Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1587](../repos/temporalio-sdk-typescript/issues.md#1587) | Async functions degrade performance | 1 |
| [#1578](../repos/temporalio-sdk-typescript/issues.md#1578) | Worker fails with --abort-on-uncaught-exception | 1 |
| [#1512](../repos/temporalio-sdk-typescript/issues.md#1512) | Payload converter error crashes worker | 0 |
| [#939](../repos/temporalio-sdk-typescript/issues.md#939) | Worker crashes with "async hook stack corrupted" | 1 |

### 3.5 Workflow Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1325](../repos/temporalio-sdk-typescript/issues.md#1325) | Exception throws DataCloneError | 2 |
| [#1663](../repos/temporalio-sdk-typescript/issues.md#1663) | Cannot use structuredClone in workflow | 0 |
| [#1580](../repos/temporalio-sdk-typescript/issues.md#1580) | Workflows stuck after cancellation | 0 |

### 3.6 Build & Bundler Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1740](../repos/temporalio-sdk-typescript/issues.md#1740) | webpackConfigHook doesn't suppress output | 1 |
| [#1489](../repos/temporalio-sdk-typescript/issues.md#1489) | Critical dependency warning | 0 |
| [#1292](../repos/temporalio-sdk-typescript/issues.md#1292) | ESM custom payload converters can't load | 1 |
| [#1858](../repos/temporalio-sdk-typescript/issues.md#1858) | Cannot import reflect-metadata in workflow | 0 |
| [#1112](../repos/temporalio-sdk-typescript/issues.md#1112) | Bundler doesn't deny `process` global | 0 |

---

## 4. Medium Priority: Enhancement Clusters

### 4.1 OpenTelemetry & Observability (7 issues, 19 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1658](../repos/temporalio-sdk-typescript/issues.md#1658) | **OpenTelemetry v2 support** | 19 |
| [#1859](../repos/temporalio-sdk-typescript/issues.md#1859) | High CPU with OTel (bug - urgent) | 0 |
| [#1779](../repos/temporalio-sdk-typescript/issues.md#1779) | OTel bypasses required SDK component | 0 |
| [#1738](../repos/temporalio-sdk-typescript/issues.md#1738) | traceState handling | 0 |
| [#915](../repos/temporalio-sdk-typescript/issues.md#915) | Emit metrics from client | 3 |
| [#360](../repos/temporalio-sdk-typescript/issues.md#360) | Consistent tracing tags across SDKs | 0 |

**Recommendation:** Bundle as "OpenTelemetry Modernization" project:
1. Fix OTel CPU issue (#1859) - URGENT
2. Upgrade to OTel v2 (#1658)
3. Add client metrics (#915)

### 4.2 API Client & Browser Support (11 issues, 15 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#207](../repos/temporalio-sdk-typescript/issues.md#207) | **In-browser gRPC client** | 9 |
| [#915](../repos/temporalio-sdk-typescript/issues.md#915) | Client metrics | 3 |
| [#1458](../repos/temporalio-sdk-typescript/issues.md#1458) | Preloaded data converters | 2 |
| [#1736](../repos/temporalio-sdk-typescript/issues.md#1736) | Mask sensitive data in logs | 1 |
| [#1722](../repos/temporalio-sdk-typescript/issues.md#1722) | Error details on Client errors | 0 |

**Recommendation:** Browser client (#207) would enable new use cases (browser-based workflow management, dashboards).

### 4.3 Workflow Improvements (21 issues, 15 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#933](../repos/temporalio-sdk-typescript/issues.md#933) | Core library without bundler deps | 6 |
| [#1432](../repos/temporalio-sdk-typescript/issues.md#1432) | Simplify AsyncLocalStorage usage | 5 |
| [#1867](../repos/temporalio-sdk-typescript/issues.md#1867) | **Per-Worker Logger** (new) | 0 |
| [#1800](../repos/temporalio-sdk-typescript/issues.md#1800) | Distinguish error types in logs | 2 |
| [#1139](../repos/temporalio-sdk-typescript/issues.md#1139) | TemporalFailure from converters should fail workflow | 0 |
| [#1358](../repos/temporalio-sdk-typescript/issues.md#1358) | Configurable failure exception types | 0 |

### 4.4 Build & Bundler Improvements (5+ issues, 5 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1280](../repos/temporalio-sdk-typescript/issues.md#1280) | **Vite bundler support** | 3 |
| [#1008](../repos/temporalio-sdk-typescript/issues.md#1008) | Better webpack failure output | 2 |
| [#1621](../repos/temporalio-sdk-typescript/issues.md#1621) | Include musl-based shared library | 4 |
| [#1718](../repos/temporalio-sdk-typescript/issues.md#1718) | Lazily load webpack | 0 |
| [#1713](../repos/temporalio-sdk-typescript/issues.md#1713) | Pass webpack obj to configHook | 0 |

**Recommendation:** Vite support (#1280) aligns with modern JS ecosystem trends.

### 4.5 AI & Modern Integrations (21+ 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1755](../repos/temporalio-sdk-typescript/issues.md#1755) | **@openai/agents integration** | 20 |
| [#1864](../repos/temporalio-sdk-typescript/issues.md#1864) | AI SDK integration v6 (new) | 1 |

**Analysis:** AI agent orchestration is a hot use case. OpenAI Agents integration could attract significant users.

### 4.6 Testing & Replay (6 issues, 3 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1362](../repos/temporalio-sdk-typescript/issues.md#1362) | runReplayHistory accept serialized History | 2 |
| [#1332](../repos/temporalio-sdk-typescript/issues.md#1332) | TestWorkflowEnvironment non-spawned servers | 1 |
| [#1144](../repos/temporalio-sdk-typescript/issues.md#1144) | Workflow test coverage with Jest | 0 |
| [#1549](../repos/temporalio-sdk-typescript/issues.md#1549) | Auto-skip time in time-skipping env | 0 |

---

## 5. Issue Housekeeping

### 5.1 Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 7 |
| 1-3 months | 8 |
| 3-6 months | 10 |
| 6-12 months | 36 |
| 1-2 years | 28 |
| 2-3 years | 21 |
| **3+ years** | **39** |

### 5.2 Stale Issues (59 issues)

59 issues have had no activity in >12 months. Notable ones with upvotes:

| Issue | Title | 👍 |
|-------|-------|-----|
| #1499 | Native Request Batching | 7 |
| #1432 | AsyncLocalStorage simplification | 5 |
| #1280 | Vite bundler | 3 |
| #1458 | Preloaded data converters | 2 |
| #1578 | Worker fails with abort-on-uncaught | 1 |

**Recommendation:**
1. Review stale issues with upvotes - these indicate sustained demand
2. Request reproduction on current SDK version
3. Close if no response in 30 days

---

## 6. Proposed Roadmap

### Phase 1: Critical Stability (Immediate)
- [ ] Investigate v1.13.x performance regression (#1860)
- [ ] Fix high CPU with OTel (#1859)
- [ ] Fix signal CancelledFailure bug (#1866)
- [ ] Fix macOS environment config (#1869) - coordinate with Java SDK
- [ ] Consider patch release (1.14.1)

### Phase 2: Bug Fixes (Short-term)
- [ ] Fix Jest open handles (#928 - 7 👍)
- [ ] Fix ephemeral server shutdown (#1443 - 6 👍)
- [ ] Fix NextJS 15 compatibility (#1615 - 3 👍)

### Phase 3: Bun Evaluation (Short-term)
- [ ] Technical feasibility study for Bun support (#1334 - 46 👍)
- [ ] Document findings and timeline
- [ ] If feasible, begin implementation

### Phase 4: OpenTelemetry Modernization (Medium-term)
- [ ] Upgrade to OpenTelemetry v2 (#1658 - 19 👍)
- [ ] Add client metrics (#915)

### Phase 5: Modern Tooling (Medium-term)
- [ ] Vite bundler support (#1280 - 3 👍)
- [ ] Improve webpack error output (#1008)
- [ ] Core library without bundler deps (#933 - 6 👍)
- [ ] Per-worker logger (#1867)

### Phase 6: Integrations (Long-term)
- [ ] Evaluate OpenAI Agents integration (#1755 - 20 👍)
- [ ] AI SDK v6 integration (#1864)
- [ ] NestJS transport/integration (#483 - 4 👍)
- [ ] Browser gRPC client (#207 - 9 👍)

### Ongoing: Housekeeping
- [ ] Triage 59 stale issues
- [ ] Review 39 issues older than 3 years
- [ ] Fix remaining bugs by priority

---

## 7. Quick Reference: Top 20 High-Impact Issues

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #1860 | Bug | 0 | Performance regression (URGENT) |
| 2 | #1859 | Bug | 0 | OTel high CPU (URGENT) |
| 3 | #1866 | Bug | 2 | Signal CancelledFailure (URGENT) |
| 4 | #1869 | Bug | 0 | macOS env config (cross-SDK) |
| 5 | #1334 | Runtime | **46** | Bun support (TOP REQUEST) |
| 6 | #1755 | Integration | **20** | OpenAI Agents |
| 7 | #1658 | Observability | **19** | OpenTelemetry v2 |
| 8 | #207 | API | **9** | Browser gRPC client |
| 9 | #928 | Bug | **7** | Jest open handles |
| 10 | #1499 | Enhancement | **7** | Request batching |
| 11 | #1443 | Bug | **6** | Ephemeral server shutdown |
| 12 | #933 | Workflow | **6** | Core library without bundler |
| 13 | #1432 | Workflow | **5** | AsyncLocalStorage |
| 14 | #483 | Integration | **4** | NestJS |
| 15 | #1749 | Bug | **4** | Workflow task not found |
| 16 | #1621 | Build | **4** | musl shared library |
| 17 | #1615 | Bug | **3** | NextJS 15 compatibility |
| 18 | #1280 | Build | **3** | Vite support |
| 19 | #1864 | Integration | **1** | AI SDK v6 (new) |
| 20 | #1867 | Enhancement | 0 | Per-Worker Logger (new) |

**Key Insight:** The v1.13.x-1.14.x release line has stability issues that should be addressed immediately. Beyond that, the overwhelming demand for Bun support (#1334 with 46 upvotes) indicates users want Temporal to work with modern, fast JS runtimes. Combined with OpenAI Agents integration (#1755) and OpenTelemetry v2 (#1658), users are asking for cutting-edge ecosystem support.
