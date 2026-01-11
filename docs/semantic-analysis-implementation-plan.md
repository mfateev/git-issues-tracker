# Semantic Analysis Implementation Plan

This document outlines the implementation plan for intermediate data structures that enable complex issue analysis without exceeding context limits.

## Status

**All phases implemented and operational.**

| Phase | Deliverable | Script | Status |
|-------|-------------|--------|--------|
| 1 | Issue Cards | `scripts/generate-cards.js` | ✅ Complete |
| 2 | Enhanced Index | `scripts/build-enhanced-index.js` | ✅ Complete |
| 3 | Theme Summaries | `scripts/generate-themes.js` | ✅ Complete |

**Current Coverage:**
- temporalio-api: 25/25 cards generated, enhanced index built, themes available
- Other repos: Ready for card generation

## Overview

| Phase | Deliverable | Effort | Dependencies |
|-------|-------------|--------|--------------|
| 1 | Issue Cards | LLM batch processing | None |
| 2 | Enhanced Index | Script (derived from cards) | Phase 1 |
| 3 | Theme Summaries | LLM generation | Phase 1, 2 |

### Why This Order?

The original plan had Enhanced Index first, but semantic field extraction (APIs, components, concepts) requires LLM understanding:

```javascript
// This approach is fragile and incomplete:
const apiPatterns = ['ExecuteLocalActivity', 'RegisterActivity', ...];
// Problems:
// - Can't detect APIs we don't know about
// - Language variations (execute_activity vs ExecuteActivity)
// - Context matters (is "Activity" a type or concept?)
```

**Solution**: LLM extracts semantic fields in Phase 1, scripts aggregate them in Phase 2.

---

## Phase 1: Issue Cards

**Goal**: Generate semantic summaries for each issue that capture the essence in ~200-400 tokens.

### Card Schema

```json
{
  "number": 2141,
  "repo": "temporalio-sdk-go",
  "summary": "Anonymous functions cause activity alias collisions in test environment because the registry uses short function names like 'func1' as keys, leading to incorrect activity routing when multiple packages use anonymous functions.",
  "category": "bug",
  "subcategory": "testing",
  "apis": ["ExecuteLocalActivity", "RegisterActivityWithOptions", "ExecuteWorkflow"],
  "components": ["test-suite", "activity-registration", "local-activities"],
  "concepts": ["alias-collision", "anonymous-functions", "registry", "function-names"],
  "severity": "medium",
  "userImpact": "Tests fail with panic when using anonymous functions for activity registration alongside generated code",
  "rootCause": "getFunctionName() returns short name only, causing collisions",
  "proposedFix": "Use full function name as alias key or skip alias lookup for anonymous functions",
  "workaround": "Use named functions instead of anonymous functions for RegisterActivityWithOptions",
  "resolution": null,
  "resolutionDetails": null,
  "related": [1341],
  "keyQuote": "We strongly discourage usage of anonymous functions for local activities",
  "generatedAt": "2026-01-10T12:00:00Z"
}
```

### Card Fields

| Field | Description | Extraction |
|-------|-------------|------------|
| `summary` | 1-3 sentence description of the issue | LLM |
| `category` | Primary category (bug/feature/question/docs) | LLM from labels + content |
| `subcategory` | More specific classification | LLM inference |
| `apis` | Temporal APIs mentioned | LLM extraction |
| `components` | Affected code components | LLM extraction |
| `concepts` | Abstract concepts for semantic search | LLM extraction |
| `severity` | low/medium/high/critical | LLM inference from impact |
| `userImpact` | How this affects users | LLM extraction |
| `rootCause` | Technical root cause (if identified) | LLM extraction |
| `proposedFix` | Suggested solution (if any) | LLM extraction |
| `workaround` | Temporary workaround (if any) | LLM extraction |
| `resolution` | For closed: fixed/wontfix/duplicate/stale/invalid | LLM from closure context |
| `resolutionDetails` | Brief explanation of resolution | LLM extraction |
| `related` | Related issue numbers | LLM extraction from body/comments |
| `keyQuote` | Most important quote from discussion | LLM selection |

### Generation Prompt Template

```markdown
You are analyzing a GitHub issue for semantic indexing. Extract structured information.

## Issue
Repository: {repo}
Number: #{number}
Title: {title}
State: {state}
Labels: {labels}
Created: {createdAt}
Author: {author}

### Body
{body}

### Comments ({commentCount} total)
{comments_truncated_to_last_5}

## Task
Generate a semantic card with these fields:

1. summary: 1-3 sentences capturing the core issue
2. category: bug/feature/question/docs based on content (not just labels)
3. subcategory: specific area (e.g., "activity-registration" not just "testing")
4. apis: list of Temporal SDK APIs mentioned (e.g., ExecuteActivity, StartWorkflow)
5. components: list of 2-5 affected code components
6. concepts: list of 3-7 abstract concepts for semantic search
7. severity: low/medium/high/critical based on user impact
8. userImpact: one sentence on how this affects users
9. rootCause: technical root cause if identified, else null
10. proposedFix: suggested solution if any, else null
11. workaround: temporary workaround if mentioned, else null
12. resolution: (for closed issues) fixed/wontfix/duplicate/stale/invalid, else null
13. resolutionDetails: brief explanation of how it was resolved, else null
14. related: array of related issue numbers mentioned in body/comments
15. keyQuote: most important quote from body or comments (verbatim, max 200 chars)

Output valid JSON only, no markdown formatting.
```

### Batch Processing Strategy

```
Total issues: 5,770
Estimated tokens per issue: ~2,000 input + ~300 output
Total tokens: ~13M input, ~1.7M output
Estimated cost: ~$15-20 (Claude Haiku)
Processing time: ~2-3 hours with rate limiting
```

### Implementation

**File**: `scripts/generate-cards.js` ✅ **Implemented**

```javascript
#!/usr/bin/env node
// Usage: node scripts/generate-cards.js [repo-dir] [--resume] [--dry-run] [--limit N]
//
// Features:
// - Concurrent processing with configurable concurrency (default: 3)
// - Saves progress after each batch
// - Resume support for interrupted runs
// - Error handling with retry (3 attempts)
// - Validates output JSON schema
// - Uses Claude CLI (claude -p) - no API key configuration needed
//
// Requirements:
// - Claude CLI installed and authenticated

// Uses spawn to call Claude CLI:
function runClaudeCli(prompt, model) {
  return new Promise((resolve, reject) => {
    const args = ['-p', prompt, '--model', model, '--output-format', 'text', '--no-session-persistence'];
    const proc = spawn('claude', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    // ... handle stdout/stderr, resolve with response
  });
}

// Main logic:
// 1. Load all issue JSONs from repos/{repo}/issues/
// 2. Check generation-log.json for already processed
// 3. For each unprocessed issue:
//    a. Call Claude CLI to generate card
//    b. Validate schema
//    c. Save to issue-cards/issue-{num}.json
//    d. Update generation-log.json
// 4. Generate cards-index.json with all cards
```

### Output Files

```
repos/{repo}/issue-cards/
├── issue-123.json          # Individual card
├── issue-124.json
├── ...
├── cards-index.json        # All cards in one file for loading
└── generation-log.json     # Processing metadata, errors, resume state
```

**generation-log.json format:**
```json
{
  "startedAt": "2026-01-10T12:00:00Z",
  "completedAt": null,
  "totalIssues": 824,
  "processed": 500,
  "failed": 2,
  "failedIssues": [123, 456],
  "lastProcessed": 789,
  "estimatedCost": "$2.50"
}
```

### Quality Validation

1. **Schema validation**: Every card must have all required fields
2. **Spot check**: Manually review 10 random cards per repo
3. **Length check**: Summaries between 50-200 words
4. **Concept coverage**: Verify concepts are searchable and meaningful
5. **API accuracy**: Verify extracted APIs are real Temporal APIs

---

## Phase 2: Enhanced Index

**Goal**: Aggregate card data into searchable index files. This phase is pure scripting - no LLM calls.

### Enhanced Index Schema

```json
{
  "number": 2141,
  "title": "Activity Alias Collision in Test Environment...",
  "state": "OPEN",
  "author": "autocracy",
  "labels": ["bug"],
  "createdAt": "2026-01-08T02:07:59Z",
  "updatedAt": "2026-01-08T21:08:03Z",
  "closedAt": null,
  "commentCount": 1,
  "upvotes": 0,
  "url": "https://github.com/temporalio/sdk-go/issues/2141",

  // OBJECTIVE FIELDS (extracted by script from raw issue)
  "bodyLength": 8542,
  "hasCodeBlocks": true,
  "hasStackTrace": false,
  "mentionsVersions": ["v1.38.0"],
  "linkedIssues": [1341],
  "isQuestion": false,

  // SEMANTIC FIELDS (copied from card)
  "summary": "Anonymous functions cause activity alias collisions...",
  "category": "bug",
  "subcategory": "testing",
  "apis": ["ExecuteLocalActivity", "RegisterActivityWithOptions"],
  "components": ["test-suite", "activity-registration", "local-activities"],
  "concepts": ["alias-collision", "anonymous-functions", "registry"],
  "severity": "medium"
}
```

### Field Sources

| Field | Source | Extraction Method |
|-------|--------|-------------------|
| `bodyLength` | Raw issue | `body.length` |
| `hasCodeBlocks` | Raw issue | Regex: `/```[\s\S]*?```/` |
| `hasStackTrace` | Raw issue | Regex: `/panic:\|goroutine \d+\|Traceback\|Exception/i` |
| `mentionsVersions` | Raw issue | Regex: `/v?\d+\.\d+\.\d+(-[\w.]+)?/g` |
| `linkedIssues` | Raw issue | Regex: `/#(\d+)\|issues\/(\d+)/g` |
| `isQuestion` | Raw issue | Title ends with `?` or has "question" label |
| `summary` | Card | Direct copy |
| `category` | Card | Direct copy |
| `subcategory` | Card | Direct copy |
| `apis` | Card | Direct copy |
| `components` | Card | Direct copy |
| `concepts` | Card | Direct copy |
| `severity` | Card | Direct copy |

### Implementation

**File**: `scripts/build-enhanced-index.js` ✅ **Implemented**

```javascript
#!/usr/bin/env node
// Usage: node scripts/build-enhanced-index.js [repo-dir] [--summary-only]
// If no repo-dir, processes all repos with cards
//
// Prerequisites: Phase 1 (issue cards) must be complete
// No LLM calls - pure script-based processing

const fs = require('fs');
const path = require('path');

function extractObjectiveFields(issue) {
  const body = issue.body || '';
  return {
    bodyLength: body.length,
    hasCodeBlocks: /```[\s\S]*?```/.test(body),
    hasStackTrace: /panic:|goroutine \d+|Traceback|Exception|at .+:\d+|Error:|FATAL/i.test(body),
    mentionsVersions: extractVersions(body),
    linkedIssues: extractLinkedIssues(body),
    isQuestion: issue.title.endsWith('?') || hasQuestionLabel(issue),
    hasPR: extractLinkedPRs(body).length > 0,
    codeBlockCount: (body.match(/```/g) || []).length / 2,
  };
}

// Main logic:
// 1. Load issues-index.json (base data)
// 2. Load cards-index.json (semantic data)
// 3. For each issue:
//    a. Get base entry from issues-index
//    b. Extract objective fields from raw issue JSON
//    c. Copy semantic fields from card
//    d. Merge into enhanced entry
// 4. Write issues-index-enhanced.json
// 5. Generate issues-by-area.json (grouped view)
// 6. Generate analysis/cards-summary.txt (grep-friendly)
```

### Output Files

- `repos/{repo}/issues-index-enhanced.json` - Full enhanced index
- `repos/{repo}/issues-by-area.json` - Issues grouped by subcategory

**issues-by-area.json format:**
```json
{
  "testing": [2141, 2050, 1998, ...],
  "performance": [2100, 2088, ...],
  "observability": [2140, 2099, ...],
  ...
}
```

### Searchable Summary Index

Also generate a grep-friendly flat file:

**File**: `analysis/cards-summary.txt`

```
#2141 [sdk-go] [bug] [testing] Anonymous functions cause activity alias collisions in test environment | apis:ExecuteLocalActivity,RegisterActivityWithOptions | components:test-suite,activity-registration | concepts:alias-collision,anonymous-functions | severity:medium
#2140 [sdk-go] [bug] [observability] OpenTelemetry Counter metric type incorrect | apis:MetricsHandler | components:metrics,opentelemetry | concepts:metrics,counter,histogram | severity:low
```

### Usage Patterns

```bash
# Find all Nexus-related issues
grep -i "nexus" analysis/cards-summary.txt

# Find high-severity bugs in sdk-go
grep "\[sdk-go\].*\[bug\].*severity:high" analysis/cards-summary.txt

# Find issues mentioning a specific API
grep "ExecuteLocalActivity" analysis/cards-summary.txt

# Find testing issues across all SDKs
grep "\[testing\]" analysis/cards-summary.txt
```

---

## Phase 3: Theme Summaries

**Goal**: Pre-computed cross-cutting analysis documents that aggregate related issues.

### Theme Categories

| Theme | Description | Query Criteria |
|-------|-------------|----------------|
| testing | Test framework, mocking, replay | subcategory contains "test" |
| nexus | Nexus operations and endpoints | concepts contains "nexus" |
| performance | Latency, throughput, memory | subcategory contains "performance" |
| observability | Metrics, tracing, logging | subcategory contains "metric" or "trace" or "log" |
| versioning | Worker versioning, build IDs | concepts contains "versioning" or "build-id" |
| signals-updates | Signal and Update patterns | concepts contains "signal" or "update" |
| activities | Activity patterns and issues | subcategory contains "activity" |
| error-handling | Error handling, retries, timeouts | concepts contains "error" or "retry" or "timeout" |
| serialization | Payload codecs, converters | subcategory contains "serialization" or "codec" |
| security | Auth, TLS, certificates | subcategory contains "security" or "auth" |
| breaking-changes | API compatibility issues | concepts contains "breaking" or "compatibility" |
| high-priority | High severity or high engagement | severity=high/critical OR upvotes >= 5 |

### Theme Document Structure

```markdown
# {Theme}: Cross-Repository Analysis

Generated: {date}
Issues analyzed: {count}

## Summary

{2-3 paragraph overview of the theme across all repos}

## By Repository

### sdk-go ({count} issues)

**Key Issues:**
- #{num}: {title} ({severity})
- ...

{Per-repo summary}

### sdk-java ({count} issues)
...

## Common Patterns

{Identified patterns and recurring themes}

## High-Impact Issues

| # | Repo | Title | Severity | Upvotes |
|---|------|-------|----------|---------|
{Top 10 by priority score}

## Recommendations

{Actionable recommendations based on analysis}

## Related Themes

- [Related Theme 1](./related-theme-1.md)
- ...
```

### Generation Process

1. Load all cards-index.json files
2. Filter cards matching theme criteria
3. Group by repository
4. For each theme, generate LLM summary with:
   - All matching card summaries as input
   - Request cross-repo pattern identification
   - Request actionable recommendations

### Implementation

**File**: `scripts/generate-themes.js` ✅ **Implemented**

```javascript
#!/usr/bin/env node
// Usage: node scripts/generate-themes.js [theme-name] [--all] [--list] [--dry-run]
//
// Generates theme summary documents from issue cards
// Requires Phase 1 (issue cards) to be complete
// Uses Claude CLI (claude -p) with sonnet model for quality analysis

const THEMES = {
  testing: {
    name: 'Testing',
    description: 'Test framework, mocking, replay testing, test utilities',
    filter: (card) =>
      card.subcategory?.toLowerCase().includes('test') ||
      card.components?.some(c => c.toLowerCase().includes('test')) ||
      card.concepts?.some(c => ['testing', 'test-framework', 'mock', 'replay'].includes(c.toLowerCase()))
  },
  nexus: {
    name: 'Nexus',
    description: 'Nexus operations, endpoints, and cross-namespace communication',
    filter: (card) =>
      card.concepts?.some(c => c.toLowerCase().includes('nexus')) ||
      card.apis?.some(a => a.toLowerCase().includes('nexus'))
  },
  // ... 14 themes total: testing, nexus, performance, observability, versioning,
  //     signals-updates, activities, error-handling, serialization, security,
  //     breaking-changes, high-priority, api-design, workflow-execution
};

// Main logic:
// 1. Load all cards from all repos
// 2. Filter cards matching theme criteria
// 3. Group by repo, sort by priority
// 4. Generate theme document via Claude CLI
// 5. Write to analysis/themes/{theme}.md
// 6. Generate analysis/themes/index.md
```

### Output Files

```
analysis/themes/
├── testing.md
├── nexus.md
├── performance.md
├── observability.md
├── versioning.md
├── signals-updates.md
├── activities.md
├── error-handling.md
├── serialization.md
├── security.md
├── breaking-changes.md
├── high-priority.md
└── index.md              # Index of all themes with issue counts
```

---

## File Structure After Implementation

```
repos/{repo}/
├── issues/
│   └── issue-{num}.json           # Raw issue data (existing)
├── issues-index.json              # Basic index (existing)
├── issues-index-enhanced.json     # Enhanced index (Phase 2)
├── issues-by-area.json            # Issues grouped by area (Phase 2)
└── issue-cards/
    ├── issue-{num}.json           # Individual semantic cards (Phase 1)
    ├── cards-index.json           # All cards combined (Phase 1)
    └── generation-log.json        # Processing metadata (Phase 1)

analysis/
├── themes/                        # Theme summaries (Phase 3)
│   ├── testing.md
│   ├── nexus.md
│   └── ...
├── cards-summary.txt              # Grep-friendly index (Phase 2)
└── ... (existing files)
```

---

## Usage Workflow

### For Targeted Analysis

```
1. Grep cards-summary.txt for keywords
2. Load specific issue cards for matches
3. If needed, load full issue JSON for deep details
```

### For Theme Analysis

```
1. Load relevant theme summary from analysis/themes/
2. Identify specific issues to investigate
3. Load issue cards for those issues
4. If needed, load full issue JSON
```

### For Cross-Repo Patterns

```
1. Load multiple cards-index.json files
2. Filter by area/category/concepts using enhanced index
3. Analyze patterns across filtered set
```

---

## Commands Summary

```bash
# Phase 1: Issue Cards (LLM)
node scripts/generate-cards.js                   # All repos
node scripts/generate-cards.js temporalio-sdk-go # Single repo
node scripts/generate-cards.js --resume          # Resume interrupted run
node scripts/generate-cards.js --dry-run         # Test without API calls

# Phase 2: Enhanced Index (Script, no LLM)
node scripts/build-enhanced-index.js             # All repos
node scripts/build-enhanced-index.js temporalio-sdk-go  # Single repo

# Phase 3: Theme Summaries (LLM)
node scripts/generate-themes.js --all            # All themes
node scripts/generate-themes.js testing          # Single theme
```

---

## Dependencies

- Node.js 18+
- Claude CLI installed and authenticated (for Phases 1 and 3)
  - Install: https://docs.anthropic.com/en/docs/claude-code
  - Authenticate: `claude login`

No npm dependencies required for the semantic analysis scripts - they use the Claude CLI directly via `child_process.spawn`.

---

## Cost Estimates

| Phase | Model | Input Tokens | Output Tokens | Est. Cost |
|-------|-------|--------------|---------------|-----------|
| 1. Cards | Haiku | ~13M | ~1.7M | $15-20 |
| 2. Index | N/A | N/A | N/A | $0 |
| 3. Themes | Haiku | ~500K | ~50K | $1-2 |
| **Total** | | | | **~$20** |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| LLM cost overrun | Start with smallest repo (api, 25 issues), validate before full run |
| Inconsistent card quality | Use structured output, validate schema, spot check |
| Rate limiting | Built-in rate limiting (10 req/s) and retry logic (3 attempts) |
| Interrupted processing | Resume support with progress tracking in generation-log.json |
| Stale cards | Include `generatedAt` timestamp, regenerate on issue update |
| Invalid JSON output | Schema validation, retry on parse failure |

---

## Success Metrics

1. **Coverage**: 100% of issues have cards
2. **Quality**: 95%+ of spot-checked cards are accurate
3. **Usability**: Can answer complex queries by loading <50 cards
4. **Performance**: Theme summaries load in <5 seconds
5. **Searchability**: cards-summary.txt enables fast grep-based discovery
