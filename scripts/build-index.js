#!/usr/bin/env node
/**
 * Build an index of all issues for a repository
 * Usage: node build-index.js <repo-dir-name> or node build-index.js --all
 * Example: node build-index.js temporalio-sdk-java
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const REPOS_DIR = path.join(BASE_DIR, 'repos');

function buildIndex(repoDir) {
    const issuesDir = path.join(repoDir, 'issues');
    const indexFile = path.join(repoDir, 'issues-index.json');

    if (!fs.existsSync(issuesDir)) {
        console.error(`Issues directory not found: ${issuesDir}`);
        return null;
    }

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

    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));

    // Update sync-metadata.json with accurate counts
    const metadataFile = path.join(repoDir, 'sync-metadata.json');
    if (fs.existsSync(metadataFile)) {
        const metadata = JSON.parse(fs.readFileSync(metadataFile));
        metadata.issue_count = index.total_count;
        metadata.counts = {
            open: states['OPEN'] || 0,
            closed: states['CLOSED'] || 0,
            total: index.total_count
        };
        fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
    }

    return index;
}

function listRepos() {
    if (!fs.existsSync(REPOS_DIR)) {
        return [];
    }
    return fs.readdirSync(REPOS_DIR).filter(f => {
        const stat = fs.statSync(path.join(REPOS_DIR, f));
        return stat.isDirectory();
    });
}

// Main
const arg = process.argv[2];

if (!arg) {
    console.log('Usage: node build-index.js <repo-dir-name>');
    console.log('       node build-index.js --all');
    console.log('       node build-index.js --list');
    console.log('');
    console.log('Available repositories:');
    listRepos().forEach(r => console.log('  ' + r));
    process.exit(1);
}

if (arg === '--list') {
    console.log('Tracked repositories:');
    listRepos().forEach(r => {
        const metaFile = path.join(REPOS_DIR, r, 'sync-metadata.json');
        if (fs.existsSync(metaFile)) {
            const meta = JSON.parse(fs.readFileSync(metaFile));
            console.log(`  ${r} (${meta.repository}) - ${meta.issue_count} issues`);
        } else {
            console.log(`  ${r} - no metadata`);
        }
    });
    process.exit(0);
}

if (arg === '--all') {
    const repos = listRepos();
    console.log(`Building indexes for ${repos.length} repositories...\n`);
    for (const repo of repos) {
        const repoDir = path.join(REPOS_DIR, repo);
        console.log(`Building index for ${repo}...`);
        const index = buildIndex(repoDir);
        if (index) {
            console.log(`  ${index.total_count} issues, ${index.stats.engagement.total_upvotes} upvotes`);
        }
    }
    console.log('\nDone!');
} else {
    const repoDir = path.join(REPOS_DIR, arg);
    if (!fs.existsSync(repoDir)) {
        console.error(`Repository directory not found: ${repoDir}`);
        console.log('Available:', listRepos().join(', '));
        process.exit(1);
    }
    console.log(`Building index for ${arg}...`);
    const index = buildIndex(repoDir);
    if (index) {
        console.log(`Index built: ${index.total_count} issues`);
        console.log(`Engagement: ${index.stats.engagement.total_upvotes} upvotes, ${index.stats.engagement.total_comments} comments`);
    }
}
