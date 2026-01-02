# Temporal TypeScript SDK - Issues Analysis & Remediation Proposal

**Generated:** 2025-12-31
**Total Open Issues:** 148
**Repository:** [temporalio/sdk-typescript](https://github.com/temporalio/sdk-typescript)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-typescript/ISSUES.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The TypeScript SDK has 148 open issues with strong community engagement (177 upvotes, 347 comments). The #1 user request is **Bun runtime support** with 46 upvotes - by far the most upvoted issue. Framework integrations (NestJS, NextJS) and modern tooling (OpenTelemetry v2, Vite) are significant themes.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 87 | Medium-High - Feature demand |
| Bugs | 50 | High - Core functionality |
| Documentation | 6 | Low |
| Stale Issues (>1 year) | 59 | Review for closure |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 177 |
| Total Comments | 347 |
| Issues with Upvotes | 40 (27%) |
| Issues with Comments | 75 (51%) |

### Recommended Actions

1. **Immediate:** Evaluate Bun support feasibility (#1334 - 46 upvotes)
2. **Short-term:** Fix high-impact bugs (Jest handles, NextJS 15, ephemeral server)
3. **Medium-term:** OpenTelemetry v2 support (#1658 - 19 upvotes)
4. **Long-term:** Browser client, NestJS integration
5. **Housekeeping:** Triage 59 stale issues

---

## User Demand: Top Issues by Upvotes

These issues have the most user upvotes, indicating real community demand:

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | **46** | 46 | Run Temporal worker in Bun |
| 2 | [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | **19** | 7 | Temporal integration for @openai/agents |
| 3 | [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | **19** | 1 | OpenTelemetry v2 support |
| 4 | [#207](https://github.com/temporalio/sdk-typescript/issues/207) | 9 | 7 | Enable in-browser gRPC client |
| 5 | [#1499](https://github.com/temporalio/sdk-typescript/issues/1499) | 7 | 0 | Native request batching |
| 6 | [#928](https://github.com/temporalio/sdk-typescript/issues/928) | 7 | 26 | Jest detects open handles (BUG) |
| 7 | [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | 6 | 1 | Ephemeral server shutdown bug |
| 8 | [#933](https://github.com/temporalio/sdk-typescript/issues/933) | 6 | 2 | Separate "core" library without bundler deps |
| 9 | [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | 5 | 1 | Simplify AsyncLocalStorage in Workflow context |
| 10 | [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | 4 | 4 | Workflow task not found after SDK upgrade (BUG) |

### Priority Score (Upvotes×2 + Comments)

Combined engagement metric:

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #1334 | **138** | Bun runtime support |
| 2 | #1755 | 45 | OpenAI Agents integration |
| 3 | #483 | 45 | NestJS integration |
| 4 | #928 | 40 | Jest open handles |
| 5 | #1658 | 39 | OpenTelemetry v2 |
| 6 | #207 | 25 | Browser gRPC client |
| 7 | #1615 | 20 | NextJS 15 compatibility |
| 8 | #1499 | 14 | Request batching |
| 9 | #933 | 14 | Core library without bundler |
| 10 | #1443 | 13 | Ephemeral server shutdown |

---

## 1. Critical: Runtime & Framework Support

### 1.1 Bun Runtime Support (46 👍 - #1 Request)

| Issue | Status |
|-------|--------|
| [#1334](https://github.com/temporalio/sdk-typescript/issues/1334) | Most upvoted issue by far (46 👍, 46 comments) |

**Analysis:** Bun has gained significant adoption in the JS ecosystem. Supporting it would open Temporal to a new user base seeking better performance and DX.

**Recommendation:**
1. Evaluate technical feasibility (Rust core bindings, worker threads)
2. If feasible, prioritize as a major initiative
3. If not feasible short-term, document limitations and timeline

### 1.2 NextJS Compatibility (3 👍)

| Issue | Problem |
|-------|---------|
| [#1615](https://github.com/temporalio/sdk-typescript/issues/1615) | Cannot use with NextJS 15 - workflowTypes from function names |

**Impact:** NextJS 15 has widespread adoption. This blocks a major user segment.

### 1.3 NestJS Integration (4 👍, 37 comments)

| Issue | Status |
|-------|--------|
| [#483](https://github.com/temporalio/sdk-typescript/issues/483) | Long-standing request with active discussion |

**Recommendation:** Consider official NestJS transport/integration or community partnership.

---

## 2. High Priority: Bugs (50 issues)

### 2.1 Testing & Development Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#928](https://github.com/temporalio/sdk-typescript/issues/928) | **Jest detects open handles** | 7 |
| [#1443](https://github.com/temporalio/sdk-typescript/issues/1443) | Ephemeral server prevents process shutdown | 6 |
| [#1702](https://github.com/temporalio/sdk-typescript/issues/1702) | Test suite timeout on first run | 0 |
| [#1687](https://github.com/temporalio/sdk-typescript/issues/1687) | Local env cannot be connected in unit tests | 0 |
| [#1233](https://github.com/temporalio/sdk-typescript/issues/1233) | nyc-test-coverage difficult to use | 0 |

**Recommendation:** #928 and #1443 are blocking DX. Prioritize fixes.

### 2.2 SDK Upgrade & Compatibility Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1749](https://github.com/temporalio/sdk-typescript/issues/1749) | Workflow task not found after SDK upgrade | 4 |
| [#1866](https://github.com/temporalio/sdk-typescript/issues/1866) | Signal caused condition to fail with CancelledFailure | 1 |
| [#1860](https://github.com/temporalio/sdk-typescript/issues/1860) | Performance regression 1.13.1 → 1.13.2 | 0 |
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | High CPU with OTel in v1.13.x | 0 |
| [#1796](https://github.com/temporalio/sdk-typescript/issues/1796) | Type inference changed in SDK 1.12.2 | 1 |

**Recommendation:** Investigate v1.13.x issues as a cluster - may share root cause.

### 2.3 Non-Determinism Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1744](https://github.com/temporalio/sdk-typescript/issues/1744) | NDE replaying nested promises | 1 |
| [#1790](https://github.com/temporalio/sdk-typescript/issues/1790) | Replay fails - child workflow IDs don't match | 0 |
| [#1838](https://github.com/temporalio/sdk-typescript/issues/1838) | Non-deterministic code sends incorrect WFT completion | 0 |

### 2.4 Worker & Activity Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1587](https://github.com/temporalio/sdk-typescript/issues/1587) | Async functions degrade performance | 1 |
| [#1578](https://github.com/temporalio/sdk-typescript/issues/1578) | Worker fails with --abort-on-uncaught-exception | 1 |
| [#1512](https://github.com/temporalio/sdk-typescript/issues/1512) | Payload converter error crashes worker | 0 |
| [#939](https://github.com/temporalio/sdk-typescript/issues/939) | Worker crashes with "async hook stack corrupted" | 1 |

### 2.5 Workflow Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1325](https://github.com/temporalio/sdk-typescript/issues/1325) | Exception throws DataCloneError | 2 |
| [#1663](https://github.com/temporalio/sdk-typescript/issues/1663) | Cannot use structuredClone in workflow | 0 |
| [#1580](https://github.com/temporalio/sdk-typescript/issues/1580) | Workflows stuck after cancellation | 0 |
| [#2066](https://github.com/temporalio/sdk-typescript/issues/2066) | Lost messages from workflow.NewChannel | 0 |

### 2.6 Build & Bundler Bugs

| Issue | Problem | 👍 |
|-------|---------|-----|
| [#1740](https://github.com/temporalio/sdk-typescript/issues/1740) | webpackConfigHook doesn't suppress output | 1 |
| [#1489](https://github.com/temporalio/sdk-typescript/issues/1489) | Critical dependency warning | 0 |
| [#1292](https://github.com/temporalio/sdk-typescript/issues/1292) | ESM custom payload converters can't load | 1 |
| [#1858](https://github.com/temporalio/sdk-typescript/issues/1858) | Cannot import reflect-metadata in workflow | 0 |
| [#1112](https://github.com/temporalio/sdk-typescript/issues/1112) | Bundler doesn't deny `process` global | 0 |

---

## 3. Medium Priority: Enhancement Clusters

### 3.1 OpenTelemetry & Observability (7 issues, 19 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1658](https://github.com/temporalio/sdk-typescript/issues/1658) | **OpenTelemetry v2 support** | 19 |
| [#1859](https://github.com/temporalio/sdk-typescript/issues/1859) | High CPU with OTel (bug) | 0 |
| [#1779](https://github.com/temporalio/sdk-typescript/issues/1779) | OTel bypasses required SDK component | 0 |
| [#1738](https://github.com/temporalio/sdk-typescript/issues/1738) | traceState handling | 0 |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | Emit metrics from client | 3 |
| [#360](https://github.com/temporalio/sdk-typescript/issues/360) | Consistent tracing tags across SDKs | 0 |

**Recommendation:** Bundle as "OpenTelemetry Modernization" project:
1. Upgrade to OTel v2 (#1658)
2. Fix CPU issue (#1859)
3. Add client metrics (#915)

### 3.2 API Client & Browser Support (11 issues, 15 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#207](https://github.com/temporalio/sdk-typescript/issues/207) | **In-browser gRPC client** | 9 |
| [#915](https://github.com/temporalio/sdk-typescript/issues/915) | Client metrics | 3 |
| [#1458](https://github.com/temporalio/sdk-typescript/issues/1458) | Preloaded data converters | 2 |
| [#1736](https://github.com/temporalio/sdk-typescript/issues/1736) | Mask sensitive data in logs | 1 |
| [#1722](https://github.com/temporalio/sdk-typescript/issues/1722) | Error details on Client errors | 0 |

**Recommendation:** Browser client (#207) would enable new use cases (browser-based workflow management, dashboards).

### 3.3 Workflow Improvements (21 issues, 15 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#933](https://github.com/temporalio/sdk-typescript/issues/933) | Core library without bundler deps | 6 |
| [#1432](https://github.com/temporalio/sdk-typescript/issues/1432) | Simplify AsyncLocalStorage usage | 5 |
| [#1800](https://github.com/temporalio/sdk-typescript/issues/1800) | Distinguish error types in logs | 2 |
| [#1139](https://github.com/temporalio/sdk-typescript/issues/1139) | TemporalFailure from converters should fail workflow | 0 |
| [#1358](https://github.com/temporalio/sdk-typescript/issues/1358) | Configurable failure exception types | 0 |

### 3.4 Build & Bundler Improvements (5+ issues, 5 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1280](https://github.com/temporalio/sdk-typescript/issues/1280) | **Vite bundler support** | 3 |
| [#1008](https://github.com/temporalio/sdk-typescript/issues/1008) | Better webpack failure output | 2 |
| [#1621](https://github.com/temporalio/sdk-typescript/issues/1621) | Include musl-based shared library | 4 |
| [#1718](https://github.com/temporalio/sdk-typescript/issues/1718) | Lazily load webpack | 0 |
| [#1713](https://github.com/temporalio/sdk-typescript/issues/1713) | Pass webpack obj to configHook | 0 |

**Recommendation:** Vite support (#1280) aligns with modern JS ecosystem trends.

### 3.5 AI & Modern Integrations (20+ 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1755](https://github.com/temporalio/sdk-typescript/issues/1755) | **@openai/agents integration** | 19 |
| [#1864](https://github.com/temporalio/sdk-typescript/issues/1864) | AI SDK integration v6 | 1 |

**Analysis:** AI agent orchestration is a hot use case. OpenAI Agents integration could attract significant users.

### 3.6 Testing & Replay (6 issues, 3 👍)

| Issue | Enhancement | 👍 |
|-------|-------------|-----|
| [#1362](https://github.com/temporalio/sdk-typescript/issues/1362) | runReplayHistory accept serialized History | 2 |
| [#1332](https://github.com/temporalio/sdk-typescript/issues/1332) | TestWorkflowEnvironment non-spawned servers | 1 |
| [#1144](https://github.com/temporalio/sdk-typescript/issues/1144) | Workflow test coverage with Jest | 0 |
| [#1549](https://github.com/temporalio/sdk-typescript/issues/1549) | Auto-skip time in time-skipping env | 0 |

---

## 4. Issue Housekeeping

### 4.1 Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 10 |
| 1-3 months | 5 |
| 3-6 months | 11 |
| 6-12 months | 34 |
| 1-2 years | 26 |
| 2-3 years | 22 |
| **3+ years** | **40** |

### 4.2 Stale Issues (59 issues)

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

## 5. Proposed Roadmap

### Phase 1: Critical Bug Fixes
- [ ] Fix Jest open handles (#928 - 7 👍)
- [ ] Fix ephemeral server shutdown (#1443 - 6 👍)
- [ ] Fix NextJS 15 compatibility (#1615 - 3 👍)
- [ ] Investigate v1.13.x performance issues (#1859, #1860)

### Phase 2: Bun Evaluation
- [ ] Technical feasibility study for Bun support (#1334 - 46 👍)
- [ ] Document findings and timeline
- [ ] If feasible, begin implementation

### Phase 3: OpenTelemetry Modernization
- [ ] Upgrade to OpenTelemetry v2 (#1658 - 19 👍)
- [ ] Fix OTel CPU issues
- [ ] Add client metrics (#915)

### Phase 4: Modern Tooling
- [ ] Vite bundler support (#1280 - 3 👍)
- [ ] Improve webpack error output (#1008)
- [ ] Core library without bundler deps (#933 - 6 👍)

### Phase 5: Integrations
- [ ] Evaluate OpenAI Agents integration (#1755 - 19 👍)
- [ ] NestJS transport/integration (#483 - 4 👍)
- [ ] Browser gRPC client (#207 - 9 👍)

### Ongoing: Housekeeping
- [ ] Triage 59 stale issues
- [ ] Review 40 issues older than 3 years
- [ ] Fix remaining 50 bugs by priority

---

## 6. Quick Reference: Top 20 High-Impact Issues

| # | Issue | Category | 👍 | Impact |
|---|-------|----------|-----|--------|
| 1 | #1334 | Runtime | **46** | Bun support (TOP REQUEST) |
| 2 | #1755 | Integration | **19** | OpenAI Agents |
| 3 | #1658 | Observability | **19** | OpenTelemetry v2 |
| 4 | #207 | API | **9** | Browser gRPC client |
| 5 | #928 | Bug | **7** | Jest open handles |
| 6 | #1499 | Enhancement | **7** | Request batching |
| 7 | #1443 | Bug | **6** | Ephemeral server shutdown |
| 8 | #933 | Workflow | **6** | Core library without bundler |
| 9 | #1432 | Workflow | **5** | AsyncLocalStorage |
| 10 | #483 | Integration | **4** | NestJS |
| 11 | #1749 | Bug | **4** | Workflow task not found |
| 12 | #1621 | Build | **4** | musl shared library |
| 13 | #1615 | Bug | **3** | NextJS 15 compatibility |
| 14 | #1280 | Build | **3** | Vite support |
| 15 | #915 | Metrics | **3** | Client metrics |
| 16 | #1800 | Workflow | **2** | Error type in logs |
| 17 | #1668 | Bug | **2** | @types/ms import |
| 18 | #1458 | API | **2** | Preloaded converters |
| 19 | #1362 | Testing | **2** | Replay history API |
| 20 | #1325 | Bug | **2** | DataCloneError |

**Key Insight:** The overwhelming demand for Bun support (#1334 with 46 upvotes) indicates users want Temporal to work with modern, fast JS runtimes. Combined with OpenAI Agents integration (#1755) and OpenTelemetry v2 (#1658), users are asking for cutting-edge ecosystem support.

---

## Appendix: Analysis Scripts

```bash
# Show statistics
node scripts/analyze-issues.js temporalio-sdk-typescript stats

# Show issues by age
node scripts/analyze-issues.js temporalio-sdk-typescript age

# List bugs (sorted by upvotes)
node scripts/analyze-issues.js temporalio-sdk-typescript bugs

# === ENGAGEMENT COMMANDS ===

# Show top issues by upvotes
node scripts/analyze-issues.js temporalio-sdk-typescript upvotes

# Priority score (upvotes×2 + comments)
node scripts/analyze-issues.js temporalio-sdk-typescript priority

# Show stale issues (>12 months)
node scripts/analyze-issues.js temporalio-sdk-typescript stale

# Categorize enhancements
node scripts/analyze-issues.js temporalio-sdk-typescript categories

# === SYNC COMMANDS ===

# Update issues (incremental)
./scripts/update-issues.sh temporalio-sdk-typescript

# Rebuild index
node scripts/build-index.js temporalio-sdk-typescript
```

### Querying with jq

```bash
# Find Bun-related issues
cat repos/temporalio-sdk-typescript/issues-index.json | jq '.issues[] | select(.title | test("bun|Bun"; "i")) | {number, title, upvotes}'

# Find bundler-related issues
cat repos/temporalio-sdk-typescript/issues-index.json | jq '.issues[] | select(.title | test("webpack|vite|bundle"; "i")) | {number, title, upvotes}'

# Find issues with 5+ upvotes
cat repos/temporalio-sdk-typescript/issues-index.json | jq '.issues[] | select(.upvotes >= 5) | {number, title, upvotes}'
```
