# GitHub Issue Tracker

Local mirror system for tracking GitHub issues across multiple repositories with engagement metrics.

## Structure

```
github-issue-tracker/
├── repos/                          # Repository data
│   └── {owner}-{repo}/             # e.g., temporalio-sdk-java
│       ├── issues/                 # Individual issue JSON files
│       │   ├── issue-1.json
│       │   └── ...
│       ├── issues-index.json       # Quick lookup index with engagement stats
│       ├── sync-metadata.json      # Tracks sync state
│       └── PROPOSAL.md             # Analysis document (if generated)
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

### Update Existing Repository

```bash
# Incremental update (only changed issues)
./scripts/update-issues.sh temporalio-sdk-java

# Or use the full repo name
./scripts/update-issues.sh temporalio/sdk-java

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
# Basic statistics
node scripts/analyze-issues.js temporalio-sdk-java stats

# Age distribution
node scripts/analyze-issues.js temporalio-sdk-java age

# Bug issues
node scripts/analyze-issues.js temporalio-sdk-java bugs

# Test server issues
node scripts/analyze-issues.js temporalio-sdk-java testserver

# Security issues
node scripts/analyze-issues.js temporalio-sdk-java security

# Top upvoted issues
node scripts/analyze-issues.js temporalio-sdk-java upvotes

# Most commented issues
node scripts/analyze-issues.js temporalio-sdk-java comments

# Engagement overview
node scripts/analyze-issues.js temporalio-sdk-java engagement

# Priority ranking (upvotes*2 + comments)
node scripts/analyze-issues.js temporalio-sdk-java priority

# Recently updated
node scripts/analyze-issues.js temporalio-sdk-java recent

# Stale issues (no activity > 12 months)
node scripts/analyze-issues.js temporalio-sdk-java stale

# Issue categories breakdown
node scripts/analyze-issues.js temporalio-sdk-java categories

# Full report
node scripts/analyze-issues.js temporalio-sdk-java report
```

## Data Format

### Issue Files (`issues/issue-{number}.json`)

Each issue file contains:
- `number`: Issue number
- `title`: Issue title
- `body`: Full issue description (markdown)
- `state`: OPEN or CLOSED
- `author`: Author information
- `labels`: Array of labels
- `assignees`: Array of assigned users
- `milestone`: Milestone if set
- `comments`: Array of all comments with author, body, and timestamps
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp
- `closedAt`: Close timestamp (if closed)
- `url`: GitHub URL
- `reactionGroups`: Reaction counts (includes upvotes)

### Index File (`issues-index.json`)

Quick lookup file with:
- Summary of each issue (number, title, state, labels, dates)
- Engagement data (upvotes, comments per issue)
- Statistics by state and label
- Engagement summary (total upvotes, comment rates)
- Top issues by upvotes and comments

### Sync Metadata (`sync-metadata.json`)

Tracks:
- `repository`: Source repository (owner/repo)
- `last_sync`: ISO timestamp of last sync
- `issue_count`: Number of issues downloaded
- `sync_type`: "full" or "incremental"
- `last_update_stats`: Stats from last incremental update

## Querying Issues Locally

### Using jq

```bash
cd repos/temporalio-sdk-java

# Find all issues with a specific label
jq '.issues[] | select(.labels[] | contains("bug"))' issues-index.json

# Find issues by author
jq '.issues[] | select(.author == "username")' issues-index.json

# Get issue count by label
jq '.stats.by_label' issues-index.json

# Get top upvoted issues
jq '.top_by_upvotes' issues-index.json

# Read full details of a specific issue
cat issues/issue-123.json | jq .
```

### Using Node.js

```javascript
const fs = require('fs');
const index = JSON.parse(fs.readFileSync('repos/temporalio-sdk-java/issues-index.json'));

// Find issues with "test server" label
const testServerIssues = index.issues.filter(i =>
    i.labels.includes('test server')
);

// Get most upvoted issues
const topUpvoted = index.issues
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 10);

// Calculate priority score
const prioritized = index.issues.map(i => ({
    ...i,
    priority: i.upvotes * 2 + i.commentCount
})).sort((a, b) => b.priority - a.priority);
```

## Adding More Repositories

```bash
# Track another repository
./scripts/fetch-issues.sh temporalio/sdk-typescript
node scripts/build-index.js temporalio-sdk-typescript

# Track yet another
./scripts/fetch-issues.sh temporalio/sdk-go
node scripts/build-index.js temporalio-sdk-go

# Update all at once
node scripts/build-index.js --all
```
