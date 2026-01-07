# Temporal PHP SDK - Issues Analysis & Remediation Proposal

**Generated:** 2026-01-07
**Total Open Issues:** 48
**Repository:** [temporalio/sdk-php](https://github.com/temporalio/sdk-php)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-sdk-php/issues.md)

**Other SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [Ruby](ruby.md) · [Server](server.md) · [Features](features.md)

---

## Executive Summary

The PHP SDK has 48 open issues with a focus on documentation and testing improvements. The top request is **marshaller documentation** (5 upvotes). Notable: PHP uses different label conventions ("Bug" vs "bug"), and has a "Tests" label indicating testing infrastructure focus.

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Enhancement Requests | 29 | Medium |
| Tests | 8 | Medium |
| Bugs | 8 | High |
| Questions | 5 | Low |
| Documentation | 1 | Medium |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | 12 |
| Total Comments | 66 |
| Issues with Upvotes | 7 (15%) |
| Issues with Comments | 22 (47%) |

---

## User Demand: Top Issues by Upvotes

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#592](../repos/temporalio-sdk-php/issues.md#592) | **5** | 6 | Document SDK marshaller |
| 2 | [#529](../repos/temporalio-sdk-php/issues.md#529) | 2 | 1 | registerDelayedCallback for tests |
| 3 | [#640](../repos/temporalio-sdk-php/issues.md#640) | 1 | 1 | Enable Discussions |
| 4 | [#580](../repos/temporalio-sdk-php/issues.md#580) | 1 | 1 | Initial Nexus implementation |
| 5 | [#573](../repos/temporalio-sdk-php/issues.md#573) | 1 | 3 | WorkerFactoryInterface missing args |
| 6 | [#554](../repos/temporalio-sdk-php/issues.md#554) | 1 | 0 | Better IDE support |
| 7 | [#302](../repos/temporalio-sdk-php/issues.md#302) | 1 | 2 | Activity loop completion testing |

### Priority Score (Upvotes×2 + Comments)

| Rank | Issue | Score | Title |
|------|-------|-------|-------|
| 1 | #592 | 16 | Marshaller documentation |
| 2 | #103 | 11 | Sentry integration |
| 3 | #577 | 7 | UpdateMethod test bug |
| 4 | #495 | 6 | Backwards compatibility promise |
| 5 | #573 | 5 | WorkerFactoryInterface |

---

## High Priority: Bugs (8 issues)

| Issue | Problem | Comments |
|-------|---------|----------|
| [#689](../repos/temporalio-sdk-php/issues.md#689) | **SDK extension check breaks composer --ignore-platform-reqs** (NEW) | 1 |
| [#577](../repos/temporalio-sdk-php/issues.md#577) | Can't run UpdateMethod tests | 7 |
| [#123](../repos/temporalio-sdk-php/issues.md#123) | withEnableSessionWorker causes ActivityNotRegisteredError | 4 |
| [#573](../repos/temporalio-sdk-php/issues.md#573) | WorkerFactoryInterface missing arguments | 3 |
| [#668](../repos/temporalio-sdk-php/issues.md#668) | (Recent bug) | 0 |
| [#648](../repos/temporalio-sdk-php/issues.md#648) | (Recent bug) | 0 |
| [#644](../repos/temporalio-sdk-php/issues.md#644) | (Recent bug) | 0 |
| [#642](../repos/temporalio-sdk-php/issues.md#642) | (Recent bug) | 0 |

---

## Enhancement Priorities

### 1. Documentation (#592 - 5 👍)

Marshaller documentation is the top request - users need better understanding of serialization.

### 2. Testing Improvements (8 issues)

| Issue | Enhancement |
|-------|-------------|
| [#529](../repos/temporalio-sdk-php/issues.md#529) | registerDelayedCallback for tests |
| [#302](../repos/temporalio-sdk-php/issues.md#302) | Activity loop completion testing |

### 3. Integrations

| Issue | Enhancement |
|-------|-------------|
| [#103](../repos/temporalio-sdk-php/issues.md#103) | Sentry integration (11 comments) |
| [#580](../repos/temporalio-sdk-php/issues.md#580) | Nexus implementation |

### 4. DX Improvements

| Issue | Enhancement |
|-------|-------------|
| [#554](../repos/temporalio-sdk-php/issues.md#554) | Better IDE support |
| [#495](../repos/temporalio-sdk-php/issues.md#495) | Backwards compatibility promise |

---

## Age Distribution

| Age | Count |
|-----|-------|
| Last 30 days | 2 |
| 1-3 months | 0 |
| 3-6 months | 8 |
| 6-12 months | 16 |
| 1-2 years | 13 |
| 2-3 years | 4 |
| 3+ years | 4 |

---

## Proposed Roadmap

### Phase 1: Documentation & Bugs
- [ ] Document SDK marshaller (#592 - 5 👍)
- [ ] Fix extension check breaking composer --ignore-platform-reqs (#689)
- [ ] Fix UpdateMethod tests (#577)
- [ ] Fix session worker error (#123)

### Phase 2: Testing Infrastructure
- [ ] registerDelayedCallback (#529)
- [ ] Activity loop testing (#302)

### Phase 3: Integrations
- [ ] Sentry integration guidance (#103)
- [ ] Nexus implementation (#580)

### Phase 4: DX
- [ ] IDE support improvements (#554)
- [ ] Backwards compatibility promise (#495)

---

## Quick Reference: Top 10 Issues

| # | Issue | Category | 👍 | Title |
|---|-------|----------|-----|-------|
| 1 | #592 | Docs | **5** | Marshaller documentation |
| 2 | #103 | Question | 0 | Sentry integration (11 comments) |
| 3 | #577 | Bug | 0 | UpdateMethod tests |
| 4 | #529 | Tests | **2** | registerDelayedCallback |
| 5 | #495 | Enhancement | 0 | Backwards compatibility |
| 6 | #580 | Enhancement | **1** | Nexus implementation |
| 7 | #573 | Bug | **1** | WorkerFactoryInterface |
| 8 | #554 | Enhancement | **1** | IDE support |
| 9 | #640 | Question | **1** | Enable Discussions |
| 10 | #302 | Tests | **1** | Activity loop testing |
