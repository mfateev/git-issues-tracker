#!/usr/bin/env node
/**
 * Generate human-readable markdown files with FULL issue data for each repository
 *
 * Usage:
 *   node scripts/generate-readable.js <repo-dir-name>   # Single repo
 *   node scripts/generate-readable.js --all             # All repos
 *
 * Output: repos/<repo>/ISSUES.md (complete dump of all issue data)
 */

const fs = require('fs');
const path = require('path');

const REPOS_DIR = path.join(__dirname, '..', 'repos');
const OUTPUT_FILE = 'ISSUES.md';

function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
}

function formatDateTime(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toISOString().replace('T', ' ').replace('Z', ' UTC');
}

function getAge(dateStr) {
    if (!dateStr) return 'Unknown';
    const created = new Date(dateStr);
    const now = new Date();
    const days = Math.floor((now - created) / (1000 * 60 * 60 * 24));

    if (days < 30) return `${days} days`;
    if (days < 365) return `${Math.floor(days / 30)} months`;
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return months > 0 ? `${years}y ${months}m` : `${years} years`;
}

function escapeMarkdown(text) {
    if (!text) return '';
    // Escape pipe characters in tables, but preserve code blocks
    return text.replace(/\|/g, '\\|');
}

function formatReactions(reactionGroups) {
    if (!reactionGroups || reactionGroups.length === 0) return '';

    const emojiMap = {
        'THUMBS_UP': '👍',
        'THUMBS_DOWN': '👎',
        'LAUGH': '😄',
        'HOORAY': '🎉',
        'CONFUSED': '😕',
        'HEART': '❤️',
        'ROCKET': '🚀',
        'EYES': '👀'
    };

    const reactions = reactionGroups
        .filter(r => r.users && r.users.totalCount > 0)
        .map(r => `${emojiMap[r.content] || r.content} ${r.users.totalCount}`)
        .join(' ');

    return reactions || '';
}

function getUpvotes(reactionGroups) {
    if (!reactionGroups) return 0;
    const thumbsUp = reactionGroups.find(r => r.content === 'THUMBS_UP');
    return thumbsUp?.users?.totalCount || 0;
}

function loadFullIssue(repoPath, issueNumber) {
    const issuePath = path.join(repoPath, 'issues', `issue-${issueNumber}.json`);
    if (!fs.existsSync(issuePath)) return null;
    return JSON.parse(fs.readFileSync(issuePath, 'utf8'));
}

function generateReadable(repoDir) {
    const repoPath = path.join(REPOS_DIR, repoDir);
    const indexPath = path.join(repoPath, 'issues-index.json');
    const metaPath = path.join(repoPath, 'sync-metadata.json');
    const issuesDir = path.join(repoPath, 'issues');

    if (!fs.existsSync(indexPath)) {
        console.error(`Index not found: ${indexPath}`);
        return false;
    }

    const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    const meta = fs.existsSync(metaPath)
        ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
        : {};

    const repoName = meta.repository || repoDir.replace('-', '/');
    const indexIssues = index.issues || [];

    // Load full issue data and sort by priority score
    console.log(`  Loading ${indexIssues.length} issues...`);
    const issues = indexIssues
        .map(idx => {
            const full = loadFullIssue(repoPath, idx.number);
            if (!full) return null;
            full._upvotes = getUpvotes(full.reactionGroups);
            full._commentCount = full.comments?.length || 0;
            full._priority = full._upvotes * 2 + full._commentCount;
            return full;
        })
        .filter(Boolean)
        .sort((a, b) => b._priority - a._priority);

    // Calculate stats
    const totalUpvotes = issues.reduce((sum, i) => sum + i._upvotes, 0);
    const totalComments = issues.reduce((sum, i) => sum + i._commentCount, 0);
    const withUpvotes = issues.filter(i => i._upvotes > 0).length;

    // Group by labels
    const labelCounts = {};
    issues.forEach(issue => {
        (issue.labels || []).forEach(label => {
            const name = label.name || label;
            labelCounts[name] = (labelCounts[name] || 0) + 1;
        });
    });

    // Build markdown
    let md = `# ${repoName} - Complete Issue Dump\n\n`;
    md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;
    md += `**Total Issues:** ${issues.length}\n`;
    md += `**Total Upvotes:** ${totalUpvotes}\n`;
    md += `**Total Comments:** ${totalComments}\n\n`;

    // Table of Contents
    md += `## Table of Contents\n\n`;
    md += `- [Summary](#summary)\n`;
    md += `- [Top Labels](#top-labels)\n`;
    md += `- [All Issues](#all-issues)\n\n`;

    // Summary stats
    md += `## Summary\n\n`;
    md += `| Metric | Value |\n`;
    md += `|--------|-------|\n`;
    md += `| Open Issues | ${issues.length} |\n`;
    md += `| Issues with Upvotes | ${withUpvotes} (${issues.length > 0 ? Math.round(withUpvotes/issues.length*100) : 0}%) |\n`;
    md += `| Total Upvotes | ${totalUpvotes} |\n`;
    md += `| Total Comments | ${totalComments} |\n\n`;

    // Top labels
    const sortedLabels = Object.entries(labelCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15);

    if (sortedLabels.length > 0) {
        md += `## Top Labels\n\n`;
        md += `| Label | Count |\n`;
        md += `|-------|-------|\n`;
        sortedLabels.forEach(([label, count]) => {
            md += `| ${label} | ${count} |\n`;
        });
        md += `\n`;
    }

    // All issues with full details
    md += `---\n\n`;
    md += `## All Issues\n\n`;
    md += `Issues are sorted by priority score (upvotes × 2 + comments).\n\n`;

    issues.forEach((issue, idx) => {
        md += `---\n\n`;
        md += `### #${issue.number}: ${issue.title}\n\n`;

        // Metadata table
        md += `| Field | Value |\n`;
        md += `|-------|-------|\n`;
        md += `| **URL** | ${issue.url} |\n`;
        md += `| **State** | ${issue.state} |\n`;
        md += `| **Author** | ${issue.author?.login || 'Unknown'}${issue.author?.name ? ` (${issue.author.name})` : ''} |\n`;
        md += `| **Created** | ${formatDateTime(issue.createdAt)} (${getAge(issue.createdAt)} ago) |\n`;
        md += `| **Updated** | ${formatDateTime(issue.updatedAt)} |\n`;
        if (issue.closedAt) {
            md += `| **Closed** | ${formatDateTime(issue.closedAt)} |\n`;
        }
        md += `| **Upvotes** | ${issue._upvotes} |\n`;
        md += `| **Comments** | ${issue._commentCount} |\n`;
        md += `| **Priority Score** | ${issue._priority} |\n`;

        // Labels
        const labels = (issue.labels || []).map(l => l.name || l).join(', ');
        md += `| **Labels** | ${labels || 'None'} |\n`;

        // Assignees
        const assignees = (issue.assignees || []).map(a => a.login || a).join(', ');
        md += `| **Assignees** | ${assignees || 'None'} |\n`;

        // Milestone
        md += `| **Milestone** | ${issue.milestone?.title || 'None'} |\n`;

        // Reactions
        const reactions = formatReactions(issue.reactionGroups);
        if (reactions) {
            md += `| **Reactions** | ${reactions} |\n`;
        }

        md += `\n`;

        // Body
        md += `#### Description\n\n`;
        if (issue.body && issue.body.trim()) {
            md += `${issue.body}\n\n`;
        } else {
            md += `*No description provided.*\n\n`;
        }

        // Comments
        if (issue.comments && issue.comments.length > 0) {
            md += `#### Comments (${issue.comments.length})\n\n`;

            issue.comments.forEach((comment, cIdx) => {
                md += `<details>\n`;
                md += `<summary><strong>${comment.author?.login || 'Unknown'}</strong> commented on ${formatDateTime(comment.createdAt)}</summary>\n\n`;

                if (comment.body && comment.body.trim()) {
                    md += `${comment.body}\n\n`;
                } else {
                    md += `*Empty comment*\n\n`;
                }

                const commentReactions = formatReactions(comment.reactionGroups);
                if (commentReactions) {
                    md += `Reactions: ${commentReactions}\n\n`;
                }

                md += `</details>\n\n`;
            });
        }

        md += `\n`;
    });

    // Write output
    const outputPath = path.join(repoPath, OUTPUT_FILE);
    fs.writeFileSync(outputPath, md);

    const fileSizeMB = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    console.log(`  Generated: ${outputPath} (${issues.length} issues, ${fileSizeMB} MB)`);
    return true;
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage:');
        console.log('  node scripts/generate-readable.js <repo-dir-name>');
        console.log('  node scripts/generate-readable.js --all');
        console.log('');
        console.log('Generates ISSUES.md with complete issue data including:');
        console.log('  - Full issue body/description');
        console.log('  - All comments with author and timestamps');
        console.log('  - Author, assignees, milestone');
        console.log('  - All labels and reactions');
        process.exit(1);
    }

    if (args[0] === '--all') {
        const repos = fs.readdirSync(REPOS_DIR)
            .filter(f => fs.statSync(path.join(REPOS_DIR, f)).isDirectory());

        console.log(`Generating complete issue dumps for ${repos.length} repositories...\n`);

        let success = 0;
        repos.forEach(repo => {
            console.log(`Processing ${repo}...`);
            if (generateReadable(repo)) success++;
        });

        console.log(`\nDone! Generated ${success}/${repos.length} files.`);
    } else {
        console.log(`Processing ${args[0]}...`);
        generateReadable(args[0]);
    }
}

main();
