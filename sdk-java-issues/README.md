# SDK-Java Issues Local Copy

Local mirror of GitHub issues from [temporalio/sdk-java](https://github.com/temporalio/sdk-java).

## Structure

```
sdk-java-issues/
├── issues/                 # Individual issue JSON files
│   ├── issue-1.json
│   ├── issue-2.json
│   └── ...
├── issues-index.json       # Quick lookup index of all issues
├── sync-metadata.json      # Tracks last sync time for incremental updates
├── fetch-all.sh           # Full download script
├── update-issues.sh       # Incremental update script
├── build-index.sh         # Rebuild the index
└── README.md
```

## Usage

### Full Sync (Initial Download)
```bash
./fetch-all.sh
```

### Incremental Update (Only New/Updated Issues)
```bash
./update-issues.sh
```

This will:
1. Check `sync-metadata.json` for the last sync time
2. Query GitHub for issues updated since then
3. Download only the changed issues
4. Update the metadata with the new sync time

### Rebuild Index
```bash
./build-index.sh
```

Regenerates `issues-index.json` with summary data for all issues.

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
- `reactionGroups`: Reaction counts

### Index File (`issues-index.json`)

Quick lookup file with:
- Summary of each issue (number, title, state, labels, dates)
- Statistics by state and label
- Total count

### Sync Metadata (`sync-metadata.json`)

Tracks:
- `repository`: Source repository
- `last_sync`: ISO timestamp of last sync
- `issue_count`: Number of issues downloaded
- `sync_type`: "full" or "incremental"
- `last_update_stats`: Stats from last incremental update

## Querying Issues Locally

### Using jq

```bash
# Find all issues with a specific label
jq '.issues[] | select(.labels[] | contains("bug"))' issues-index.json

# Find issues by author
jq '.issues[] | select(.author == "username")' issues-index.json

# Get issue count by label
jq '.stats.by_label' issues-index.json

# Read full details of a specific issue
cat issues/issue-123.json | jq .
```

### Using Node.js

```javascript
const fs = require('fs');
const index = JSON.parse(fs.readFileSync('issues-index.json'));

// Find issues with "test server" label
const testServerIssues = index.issues.filter(i =>
    i.labels.includes('test server')
);

// Get most recently updated issues
const recent = index.issues
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 10);
```

## Last Sync

Check `sync-metadata.json` for the last sync timestamp.
