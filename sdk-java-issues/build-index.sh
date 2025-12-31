#!/bin/bash
# Build an index of all issues for quick lookups
# Includes engagement data (upvotes, comments)

BASE_DIR="/Users/maxim/temporal/issues/sdk-java-issues"
OUTPUT_DIR="$BASE_DIR/issues"
INDEX_FILE="$BASE_DIR/issues-index.json"

echo "Building issues index with engagement data..."

node -e "
const fs = require('fs');
const path = require('path');

const issuesDir = '$OUTPUT_DIR';
const files = fs.readdirSync(issuesDir).filter(f => f.endsWith('.json'));

const index = {
    generated_at: new Date().toISOString(),
    total_count: files.length,
    issues: []
};

for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(issuesDir, file)));

    // Extract upvotes (thumbs up reactions)
    const thumbsUp = (data.reactionGroups || []).find(r => r.content === 'THUMBS_UP');
    const upvotes = thumbsUp ? thumbsUp.users.totalCount : 0;

    // Calculate total reactions
    const totalReactions = (data.reactionGroups || []).reduce((sum, r) => sum + r.users.totalCount, 0);

    index.issues.push({
        number: data.number,
        title: data.title,
        state: data.state,
        author: data.author?.login || 'unknown',
        labels: (data.labels || []).map(l => l.name),
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        closedAt: data.closedAt,
        commentCount: (data.comments || []).length,
        upvotes: upvotes,
        totalReactions: totalReactions,
        url: data.url
    });
}

// Sort by issue number descending
index.issues.sort((a, b) => b.number - a.number);

// Generate stats
const states = {};
const labelCounts = {};
let totalUpvotes = 0;
let totalComments = 0;
let issuesWithUpvotes = 0;
let issuesWithComments = 0;

for (const issue of index.issues) {
    states[issue.state] = (states[issue.state] || 0) + 1;
    for (const label of issue.labels) {
        labelCounts[label] = (labelCounts[label] || 0) + 1;
    }
    totalUpvotes += issue.upvotes;
    totalComments += issue.commentCount;
    if (issue.upvotes > 0) issuesWithUpvotes++;
    if (issue.commentCount > 0) issuesWithComments++;
}

index.stats = {
    by_state: states,
    by_label: Object.fromEntries(
        Object.entries(labelCounts).sort((a, b) => b[1] - a[1])
    ),
    engagement: {
        total_upvotes: totalUpvotes,
        total_comments: totalComments,
        issues_with_upvotes: issuesWithUpvotes,
        issues_with_comments: issuesWithComments,
        upvote_rate: Math.round(issuesWithUpvotes / index.issues.length * 100) + '%',
        comment_rate: Math.round(issuesWithComments / index.issues.length * 100) + '%'
    }
};

// Top issues by engagement
index.top_by_upvotes = index.issues
    .filter(i => i.upvotes > 0)
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 20)
    .map(i => ({ number: i.number, title: i.title, upvotes: i.upvotes, comments: i.commentCount }));

index.top_by_comments = index.issues
    .filter(i => i.commentCount > 0)
    .sort((a, b) => b.commentCount - a.commentCount)
    .slice(0, 20)
    .map(i => ({ number: i.number, title: i.title, upvotes: i.upvotes, comments: i.commentCount }));

fs.writeFileSync('$INDEX_FILE', JSON.stringify(index, null, 2));
console.log('Index built with', index.total_count, 'issues');
console.log('Engagement stats:', JSON.stringify(index.stats.engagement, null, 2));
"

echo "Index saved to $INDEX_FILE"
