# API Analysis Template

Use this template when generating analysis for the API repository (temporalio/api) - the Protobuf API definitions.

---

# Temporal API - Issues Analysis

**Generated:** {DATE}
**Total Open Issues:** {OPEN_COUNT}
**Total Closed Issues:** {CLOSED_COUNT}
**Repository:** [temporalio/api](https://github.com/temporalio/api)

← [Summary](summary.md) · [Contributors](contributors.md) · [Recent](recent.md)

**Related:** [Server](server.md) · [Features](features.md) · [Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · [Python](python.md) · [.NET](dotnet.md)

---

## Overview

The API repository contains Temporal's Protobuf definitions used by all SDKs and the server. Issues here typically involve:
- API design proposals
- Protocol changes
- Cross-cutting concerns affecting all SDKs

### Key Findings

| Category | Count | Priority |
|----------|-------|----------|
| API Enhancements | {N} | Medium |
| Bugs/Fixes | {N} | High |
| Documentation | {N} | Low |

### User Engagement Summary

| Metric | Value |
|--------|-------|
| Total Upvotes (👍) | {N} |
| Total Comments | {N} |

### Resolution Metrics

> Note: Closure reasons are *inferred* from labels and metadata.

| Metric | Value |
|--------|-------|
| Resolution Rate | {%} ({closed}/{total}) |
| Median Time to Close | {N} days |

---

## Issues by Category

### API Enhancements

{New API fields, methods, or protocols}

| Issue | 👍 | Proposal |
|-------|-----|----------|
| [#{NUMBER}](https://github.com/temporalio/api/issues/{NUMBER}) | {upvotes} | {description} |
...

### Bugs/Fixes

{Issues with existing API definitions}

| Issue | Description |
|-------|-------------|
...

### Documentation

{API documentation improvements}

| Issue | Description |
|-------|-------------|
...

---

## Cross-Cutting Impact

{Note issues that would require changes across server and all SDKs}

| Issue | Impact | SDKs Affected |
|-------|--------|---------------|
...

---

## Recommendations

1. **High impact:** {API changes with broad user demand}
2. **Quick wins:** {small fixes or documentation updates}
3. **Coordination needed:** {changes requiring server + SDK coordination}
