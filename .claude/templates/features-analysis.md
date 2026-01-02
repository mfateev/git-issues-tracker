# Features Analysis Template

Use this template when generating analysis for the Features repository (temporalio/features) - the cross-SDK test suite.

---

# Temporal Features - Cross-SDK Test Suite Analysis

**Generated:** {DATE}
**Total Open Issues:** {ISSUE_COUNT}
**Repository:** [temporalio/features](https://github.com/temporalio/features)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md) · [Full Issue Data](../repos/temporalio-features/issues.md)

**SDKs:** [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [Server](server.md)

---

## Overview

The Features repository contains cross-SDK conformance tests and feature implementations. Issues here typically relate to:
- SDK feature parity gaps
- Test infrastructure and tooling
- Feature coverage requests
- CI/CD and build issues

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| Feature Coverage Gaps | {N} | Medium - SDK parity |
| Test Infrastructure | {N} | Medium |
| Bugs | {N} | High |
| Documentation | {N} | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | {N} |
| Total Comments | {N} |

---

## Top Issues by Engagement

| Rank | Issue | 👍 | 💬 | Title |
|------|-------|-----|-----|-------|
| 1 | [#{NUMBER}](../repos/temporalio-features/issues.md#{NUMBER}) | {upvotes} | {comments} | {title} |
...

---

## Feature Coverage Gaps

{Group by SDK - features missing in specific SDKs. Only include SDKs that have coverage gaps.}

### Missing Features by SDK

| SDK | Missing Features |
|-----|------------------|
| {SDK Name} | {list of missing features} |
| ... | ... |

### Cross-SDK Feature Requests

{Features requested for all SDKs}

| Issue | Feature | Description |
|-------|---------|-------------|
...

---

## Test Infrastructure Issues

{Issues related to test harness, CI, build system}

| Issue | Area | Description |
|-------|------|-------------|
...

---

## Bugs

{Test failures, incorrect behavior, etc.}

| Issue | SDK(s) | Description |
|-------|--------|-------------|
...

---

## Housekeeping

### Stale Issues

{List issues that may be resolved or no longer relevant}

### Recommendations

1. **Feature parity:** {most requested cross-SDK features}
2. **Test coverage:** {areas needing more tests}
3. **Infrastructure:** {tooling improvements}
