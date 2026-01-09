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

## Key Patterns

- Repository names normalized: `owner/repo` → `owner-repo` for directories
- Scripts check GitHub API rate limit before fetching (500 request buffer)
- Priority score formula: `upvotes × 2 + comments`
- Upvotes extracted from THUMBS_UP reactions during indexing
- Requires authenticated `gh` CLI
- Stale threshold: 12 months without activity
