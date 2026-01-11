# Implementation Guide

Technical documentation for scripts, data formats, and development workflows.

## Scripts

### Issue Fetching

#### `scripts/fetch-issues.sh`
Full download of all open issues from a GitHub repository.

```bash
./scripts/fetch-issues.sh owner/repo
# Example: ./scripts/fetch-issues.sh temporalio/sdk-java
```

- Downloads all open issues with full metadata
- Creates `repos/{owner}-{repo}/` directory structure
- Checks GitHub API rate limits (500 request buffer)
- Requires authenticated `gh` CLI

#### `scripts/update-issues.sh`
Incremental update for a single repository.

```bash
./scripts/update-issues.sh owner-repo
# Example: ./scripts/update-issues.sh temporalio-sdk-java
```

- Only fetches issues updated since last sync
- Updates existing issue files in place
- Faster than full fetch for regular updates

#### `scripts/update-all.sh`
Update all tracked repositories at once.

```bash
./scripts/update-all.sh
```

- Iterates through all repos in `repos/` directory
- Runs incremental updates for each
- Rebuilds all indexes
- Generates contributors.md and stats-recent.md

### Index Building

#### `scripts/build-index.js`
Build or rebuild the index for one or more repositories.

```bash
node scripts/build-index.js owner-repo           # Single repo
node scripts/build-index.js --all                # All repos
node scripts/build-index.js --list               # List tracked repos
```

Creates `issues-index.json` with:
- Summary of each issue (number, title, state, labels, dates)
- Engagement data (upvotes from THUMBS_UP reactions, comment counts)
- Statistics by state and label
- Top issues by upvotes and comments

### Statistics Generation

#### `scripts/generate-stats.js`
Generate statistics markdown for repositories.

```bash
node scripts/generate-stats.js owner-repo        # Single repo
node scripts/generate-stats.js --all             # All repos
```

Output: `analysis/stats-<sdk>.md` containing:
- Summary metrics (issues, bugs, upvotes, comments, stale count)
- Age distribution table
- Top issues by upvotes, priority score, and comments
- Recent issues (last 30 days)
- Label distribution
- Bug list sorted by upvotes
- Stale issues list (>12 months no activity)

#### `scripts/generate-aggregate-stats.js`
Generate cross-repository statistics.

```bash
node scripts/generate-aggregate-stats.js
```

Output: `analysis/stats-all.md` containing:
- Aggregate summary across all repos
- Per-repository comparison table
- Top 25 issues by upvotes (all repos)
- Top 25 issues by priority score (all repos)
- Top 20 bugs (all repos)
- Recent issues (all repos, last 30 days)
- Label distribution (all repos)
- Engagement and age comparisons by repository

### Analysis Tools

#### `scripts/analyze-issues.js`
Query and analysis tool for a single repository.

```bash
node scripts/analyze-issues.js <repo-dir-name> <command>
```

| Command | Description |
|---------|-------------|
| `stats` | Basic statistics |
| `age` | Age distribution |
| `bugs` | Bug issues |
| `testserver` | Test server issues |
| `security` | Security issues |
| `upvotes` | Top upvoted issues |
| `comments` | Most commented issues |
| `engagement` | Engagement overview |
| `priority` | Priority ranking (upvotes×2 + comments) |
| `recent` | Recently updated |
| `stale` | Stale issues (no activity > 12 months) |
| `categories` | Issue categories breakdown |
| `report` | Full report |

#### `scripts/analyze-all.js`
Cross-repository analysis tool.

```bash
node scripts/analyze-all.js <command>
```

| Command | Description |
|---------|-------------|
| `stats` | Statistics for all repos (default) |
| `priority [limit]` | Priority issues across all repos |
| `bugs [limit]` | Bugs across all repos |
| `recent [days]` | Recently created issues |
| `stale [months] [limit]` | Stale issues needing attention |
| `categories` | Label distribution |

### Human-Readable Output

#### `scripts/generate-contributors.js`
Generate contributor statistics.

```bash
node scripts/generate-contributors.js
```

Output: `analysis/contributors.md` with issues grouped by author.

#### `scripts/generate-recent.js`
Generate recent issues report.

```bash
node scripts/generate-recent.js
```

Output: `analysis/stats-recent.md` with issues from last 30 days.

### Semantic Analysis Pipeline

Three-phase pipeline for intelligent issue analysis that enables complex queries without exceeding context limits.

#### Phase 1: `scripts/generate-cards.js`
Generate semantic issue cards using Claude CLI.

```bash
node scripts/generate-cards.js                           # All repos
node scripts/generate-cards.js temporalio-api            # Single repo
node scripts/generate-cards.js temporalio-api --dry-run  # Preview
node scripts/generate-cards.js temporalio-api --limit 5  # Test with 5 issues
node scripts/generate-cards.js --resume                  # Resume interrupted
node scripts/generate-cards.js --model sonnet            # Use different model
```

Output per repo:
- `issue-cards/issue-{num}.json` - Individual semantic cards
- `issue-cards/cards-index.json` - All cards combined
- `issue-cards/generation-log.json` - Processing state for resume

**Requirements:** Claude CLI installed and authenticated (`claude` command)

#### Phase 2: `scripts/build-enhanced-index.js`
Build enhanced index by merging cards with objective fields (no LLM needed).

```bash
node scripts/build-enhanced-index.js                     # All repos with cards
node scripts/build-enhanced-index.js temporalio-api      # Single repo
node scripts/build-enhanced-index.js --summary-only      # Just rebuild summary
```

Output:
- `repos/{repo}/issues-index-enhanced.json` - Enhanced index
- `repos/{repo}/issues-by-area.json` - Issues grouped by subcategory
- `analysis/cards-summary.txt` - Grep-friendly one-line summaries

#### Phase 3: `scripts/generate-themes.js`
Generate cross-cutting theme analysis documents.

```bash
node scripts/generate-themes.js --list                   # Show themes with counts
node scripts/generate-themes.js testing                  # Generate single theme
node scripts/generate-themes.js testing --dry-run        # Preview matches
node scripts/generate-themes.js --all                    # Generate all themes
```

Output: `analysis/themes/{theme}.md` for 14 themes (testing, nexus, performance, observability, versioning, signals-updates, activities, error-handling, serialization, security, breaking-changes, high-priority, api-design, workflow-execution)

**Requirements:** Claude CLI installed and authenticated

## Data Format

### Issue Files (`repos/<repo>/issues/issue-{number}.json`)

```json
{
  "number": 123,
  "title": "Issue title",
  "body": "Full description...",
  "state": "OPEN",
  "author": {
    "id": "MDQ6VXNlcjEyMzQ1",
    "is_bot": false,
    "login": "username",
    "name": "Full Name"
  },
  "labels": ["bug", "priority:high"],
  "assignees": [],
  "milestone": null,
  "comments": [
    {
      "id": "IC_kwDOxxxxxxxx",
      "author": { "login": "user" },
      "authorAssociation": "MEMBER",
      "body": "Comment text...",
      "createdAt": "2024-01-15T10:30:00Z",
      "url": "https://github.com/org/repo/issues/123#issuecomment-xxx"
    }
  ],
  "createdAt": "2024-01-10T08:00:00Z",
  "updatedAt": "2024-01-20T14:00:00Z",
  "closedAt": null,
  "url": "https://github.com/org/repo/issues/123",
  "reactionGroups": [
    { "content": "THUMBS_UP", "users": { "totalCount": 5 } }
  ]
}
```

### Index File (`repos/<repo>/issues-index.json`)

```json
{
  "generated_at": "2024-01-20T12:00:00Z",
  "total_count": 215,
  "issues": [
    {
      "number": 123,
      "title": "Issue title",
      "state": "OPEN",
      "author": "username",
      "labels": ["bug"],
      "upvotes": 5,
      "commentCount": 3,
      "totalReactions": 5,
      "createdAt": "2024-01-10T08:00:00Z",
      "updatedAt": "2024-01-20T14:00:00Z",
      "closedAt": null,
      "url": "https://github.com/org/repo/issues/123"
    }
  ],
  "stats": {
    "byState": { "OPEN": 215 },
    "byLabel": { "bug": 33, "enhancement": 126 }
  },
  "top_by_upvotes": [...],
  "top_by_comments": [...]
}
```

### Sync Metadata (`repos/<repo>/sync-metadata.json`)

```json
{
  "repository": "temporalio/sdk-java",
  "last_sync": "2024-01-20T12:00:00Z",
  "issue_count": 215,
  "sync_type": "incremental"
}
```

### Semantic Issue Card (`repos/<repo>/issue-cards/issue-{number}.json`)

```json
{
  "number": 123,
  "repo": "temporalio-sdk-java",
  "summary": "1-3 sentence description of the issue",
  "category": "bug",
  "subcategory": "activity-heartbeat",
  "apis": ["ExecuteActivity", "HeartbeatActivity"],
  "components": ["worker", "activity-executor"],
  "concepts": ["timeout", "heartbeat", "retry"],
  "severity": "medium",
  "userImpact": "How this affects users",
  "rootCause": "Technical root cause if identified",
  "proposedFix": "Suggested solution if mentioned",
  "workaround": "Temporary workaround if mentioned",
  "resolution": "fixed",
  "resolutionDetails": "How it was resolved",
  "related": [456, 789],
  "keyQuote": "Important quote from discussion",
  "generatedAt": "2024-01-20T12:00:00Z"
}
```

### Enhanced Index (`repos/<repo>/issues-index-enhanced.json`)

```json
{
  "generatedAt": "2024-01-20T12:00:00Z",
  "repo": "temporalio-sdk-java",
  "totalCount": 215,
  "cardsCount": 215,
  "issues": [
    {
      "number": 123,
      "title": "Issue title",
      "state": "OPEN",
      "author": "username",
      "labels": ["bug"],
      "createdAt": "2024-01-10T08:00:00Z",
      "updatedAt": "2024-01-20T14:00:00Z",
      "commentCount": 3,
      "upvotes": 5,
      "bodyLength": 1500,
      "hasCodeBlocks": true,
      "hasStackTrace": false,
      "mentionsVersions": ["v1.2.0"],
      "linkedIssues": [456],
      "isQuestion": false,
      "hasPR": true,
      "summary": "Semantic summary from card",
      "category": "bug",
      "subcategory": "activity-heartbeat",
      "apis": ["ExecuteActivity"],
      "components": ["worker"],
      "concepts": ["timeout", "heartbeat"],
      "severity": "medium",
      "hasCard": true
    }
  ]
}
```

### Cards Summary (`analysis/cards-summary.txt`)

Grep-friendly one-line-per-issue format:

```
#123 [sdk-java] [O] [bug] [activity-heartbeat] Summary text | apis:ExecuteActivity | components:worker | concepts:timeout,heartbeat | severity:medium
```

- `[O]` = Open, `[C]` = Closed
- Pipe-separated fields for easy grep filtering

## Querying Issues Locally

### Using jq

```bash
cd repos/temporalio-sdk-java

# Find all bug issues
jq '.issues[] | select(.labels[] | contains("bug"))' issues-index.json

# Get top upvoted issues
jq '.top_by_upvotes' issues-index.json

# Find issues with 3+ upvotes
jq '.issues[] | select(.upvotes >= 3) | {number, title, upvotes}' issues-index.json

# Sort by priority score
jq '[.issues[] | . + {score: (.upvotes * 2 + .commentCount)}] | sort_by(-.score) | .[:10]' issues-index.json

# Read full details of a specific issue
cat issues/issue-123.json | jq .
```

### Using Node.js

```javascript
const fs = require('fs');
const index = JSON.parse(fs.readFileSync('repos/temporalio-sdk-java/issues-index.json'));

// Calculate priority score
const prioritized = index.issues.map(i => ({
    ...i,
    priority: i.upvotes * 2 + i.commentCount
})).sort((a, b) => b.priority - a.priority);

// Find stale issues
const cutoff = new Date();
cutoff.setMonth(cutoff.getMonth() - 12);
const stale = index.issues.filter(i => new Date(i.updatedAt) < cutoff);
```

### Using cards-summary.txt

Quick grep-based discovery across all issues:

```bash
# Find all Nexus-related issues
grep -i "nexus" analysis/cards-summary.txt

# Find high-severity bugs in sdk-go
grep "\[sdk-go\].*\[bug\].*severity:high" analysis/cards-summary.txt

# Find issues mentioning a specific API
grep "ExecuteActivity" analysis/cards-summary.txt

# Find testing issues across all SDKs
grep "\[testing\]" analysis/cards-summary.txt

# Find open issues with specific component
grep "\[O\]" analysis/cards-summary.txt | grep "components:worker"

# Count issues by severity
grep -o "severity:[a-z]*" analysis/cards-summary.txt | sort | uniq -c
```

### Using Enhanced Index

```bash
cd repos/temporalio-sdk-java

# Find issues with stack traces
jq '.issues[] | select(.hasStackTrace) | {number, title, severity}' issues-index-enhanced.json

# Find high-severity bugs with code blocks
jq '.issues[] | select(.severity == "high" and .hasCodeBlocks)' issues-index-enhanced.json

# Group by subcategory
jq '[.issues[] | .subcategory] | group_by(.) | map({category: .[0], count: length}) | sort_by(-.count)' issues-index-enhanced.json

# Find issues mentioning a specific API
jq '.issues[] | select(.apis[] | contains("StartWorkflow"))' issues-index-enhanced.json
```

## Key Patterns

- Repository names normalized: `owner/repo` → `owner-repo` for directories
- Scripts check GitHub API rate limit before fetching (500 request buffer)
- Priority score formula: `upvotes × 2 + comments`
- Upvotes extracted from THUMBS_UP reactions during indexing
- Requires authenticated `gh` CLI
- Stale threshold: 12 months without activity
