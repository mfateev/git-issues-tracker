# Temporal SDK Issue Tracker

Local mirror system for tracking GitHub issues across Temporal SDK repositories with engagement metrics and analysis.

## Tracked Repositories

| SDK | Issues | Top User Request |
|-----|--------|------------------|
| [Java](https://github.com/temporalio/sdk-java) | 215 | Kotlin coroutines support |
| [Go](https://github.com/temporalio/sdk-go) | 163 | Improved error handling |
| [TypeScript](https://github.com/temporalio/sdk-typescript) | 148 | Bun support (46 upvotes) |
| [Python](https://github.com/temporalio/sdk-python) | 115 | Sandbox/debugging improvements |
| [.NET](https://github.com/temporalio/sdk-dotnet) | 48 | .NET Trimming support |
| [PHP](https://github.com/temporalio/sdk-php) | 47 | Marshaller documentation |
| [Ruby](https://github.com/temporalio/sdk-ruby) | 24 | SDK stability |
| **Total** | **760** | |

## Structure

```
git-issues-tracker/
├── analysis/                       # Issue analysis documents
│   ├── java.md
│   ├── go.md
│   ├── typescript.md
│   ├── python.md
│   ├── dotnet.md
│   ├── php.md
│   └── ruby.md
├── repos/                          # Repository data
│   └── {owner}-{repo}/             # e.g., temporalio-sdk-java
│       ├── issues/                 # Individual issue JSON files
│       ├── issues-index.json       # Quick lookup index with engagement stats
│       └── sync-metadata.json      # Tracks sync state
├── scripts/                        # Shared scripts
│   ├── fetch-issues.sh             # Full download for any repo
│   ├── update-issues.sh            # Incremental updates
│   ├── build-index.js              # Build/rebuild index
│   └── analyze-issues.js           # Analysis and reports
└── README.md
```

## Quick Start

### Track a New Repository

```bash
# Download all open issues from a repository
./scripts/fetch-issues.sh temporalio/sdk-java

# Build the index with engagement data
node scripts/build-index.js temporalio-sdk-java
```

Note: Scripts check GitHub API rate limits before fetching and maintain a 500-request buffer.

### Update Existing Repository

```bash
# Incremental update (only changed issues)
./scripts/update-issues.sh temporalio-sdk-java

# Rebuild the index
node scripts/build-index.js temporalio-sdk-java
```

### List Tracked Repositories

```bash
node scripts/build-index.js --list
```

### Update All Repositories

```bash
node scripts/build-index.js --all
```

## Analysis Tools

The `analyze-issues.js` script provides various analysis commands:

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

Example:
```bash
node scripts/analyze-issues.js temporalio-sdk-java priority
```

## Data Format

### Issue Files (`issues/issue-{number}.json`)

Each issue file contains:
- `number`, `title`, `body`, `state`
- `author`, `labels`, `assignees`, `milestone`
- `comments`: Array of all comments with author, body, timestamps
- `createdAt`, `updatedAt`, `closedAt`
- `url`: GitHub URL
- `reactionGroups`: Reaction counts (includes upvotes)

### Index File (`issues-index.json`)

Quick lookup file with:
- Summary of each issue (number, title, state, labels, dates)
- Engagement data (upvotes, comments per issue)
- Statistics by state and label
- Top issues by upvotes and comments

### Sync Metadata (`sync-metadata.json`)

Tracks sync state: repository, last_sync timestamp, issue_count, sync_type.

## Querying Issues Locally

### Using jq

```bash
cd repos/temporalio-sdk-java

# Find all bug issues
jq '.issues[] | select(.labels[] | contains("bug"))' issues-index.json

# Get top upvoted issues
jq '.top_by_upvotes' issues-index.json

# Read full details of a specific issue
cat issues/issue-123.json | jq .
```

### Using Node.js

```javascript
const index = JSON.parse(fs.readFileSync('repos/temporalio-sdk-java/issues-index.json'));

// Calculate priority score
const prioritized = index.issues.map(i => ({
    ...i,
    priority: i.upvotes * 2 + i.commentCount
})).sort((a, b) => b.priority - a.priority);
```
