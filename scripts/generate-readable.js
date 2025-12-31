#!/usr/bin/env node
/**
 * Generate human-readable markdown files with all issues for each repository
 *
 * Usage:
 *   node scripts/generate-readable.js <repo-dir-name>   # Single repo
 *   node scripts/generate-readable.js --all             # All repos
 *
 * Output: repos/<repo>/ISSUES.md
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

function generateReadable(repoDir) {
    const repoPath = path.join(REPOS_DIR, repoDir);
    const indexPath = path.join(repoPath, 'issues-index.json');
    const metaPath = path.join(repoPath, 'sync-metadata.json');

    if (!fs.existsSync(indexPath)) {
        console.error(`Index not found: ${indexPath}`);
        return false;
    }

    const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    const meta = fs.existsSync(metaPath)
        ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
        : {};

    const repoName = meta.repository || repoDir.replace('-', '/');
    const issues = index.issues || [];

    // Sort by priority score (upvotes*2 + comments)
    issues.sort((a, b) => {
        const scoreA = (a.upvotes || 0) * 2 + (a.commentCount || 0);
        const scoreB = (b.upvotes || 0) * 2 + (b.commentCount || 0);
        return scoreB - scoreA;
    });

    // Calculate stats
    const totalUpvotes = issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
    const totalComments = issues.reduce((sum, i) => sum + (i.commentCount || 0), 0);
    const withUpvotes = issues.filter(i => i.upvotes > 0).length;

    // Group by labels
    const labelCounts = {};
    issues.forEach(issue => {
        (issue.labels || []).forEach(label => {
            labelCounts[label] = (labelCounts[label] || 0) + 1;
        });
    });

    // Build markdown
    let md = `# ${repoName} - Open Issues\n\n`;
    md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;
    md += `**Total Issues:** ${issues.length}\n`;
    md += `**Total Upvotes:** ${totalUpvotes}\n`;
    md += `**Total Comments:** ${totalComments}\n\n`;

    // Summary stats
    md += `## Summary\n\n`;
    md += `| Metric | Value |\n`;
    md += `|--------|-------|\n`;
    md += `| Open Issues | ${issues.length} |\n`;
    md += `| Issues with Upvotes | ${withUpvotes} (${Math.round(withUpvotes/issues.length*100)}%) |\n`;
    md += `| Total Upvotes | ${totalUpvotes} |\n`;
    md += `| Total Comments | ${totalComments} |\n\n`;

    // Top labels
    const sortedLabels = Object.entries(labelCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    if (sortedLabels.length > 0) {
        md += `## Top Labels\n\n`;
        md += `| Label | Count |\n`;
        md += `|-------|-------|\n`;
        sortedLabels.forEach(([label, count]) => {
            md += `| ${label} | ${count} |\n`;
        });
        md += `\n`;
    }

    // Top 20 by priority
    md += `## Top 20 Issues (by Priority Score)\n\n`;
    md += `Priority Score = Upvotes × 2 + Comments\n\n`;
    md += `| # | Score | 👍 | 💬 | Age | Title |\n`;
    md += `|---|-------|-----|-----|-----|-------|\n`;

    issues.slice(0, 20).forEach((issue, idx) => {
        const score = (issue.upvotes || 0) * 2 + (issue.commentCount || 0);
        const age = getAge(issue.createdAt);
        const title = issue.title.length > 60 ? issue.title.substring(0, 57) + '...' : issue.title;
        md += `| ${idx + 1} | ${score} | ${issue.upvotes || 0} | ${issue.commentCount || 0} | ${age} | [#${issue.number}](${issue.url}) ${title} |\n`;
    });
    md += `\n`;

    // All issues grouped by label categories
    md += `---\n\n`;
    md += `## All Issues\n\n`;

    // Separate by common categories
    const bugs = issues.filter(i =>
        (i.labels || []).some(l => l.toLowerCase().includes('bug'))
    );
    const enhancements = issues.filter(i =>
        (i.labels || []).some(l => l.toLowerCase().includes('enhancement') || l.toLowerCase().includes('feature'))
    );
    const other = issues.filter(i =>
        !bugs.includes(i) && !enhancements.includes(i)
    );

    function renderIssueTable(issueList, title) {
        if (issueList.length === 0) return '';

        let section = `### ${title} (${issueList.length})\n\n`;
        section += `| # | 👍 | 💬 | Age | Labels | Title |\n`;
        section += `|---|-----|-----|-----|--------|-------|\n`;

        issueList.forEach(issue => {
            const age = getAge(issue.createdAt);
            const labels = (issue.labels || []).slice(0, 2).join(', ') || '-';
            const title = issue.title.length > 50 ? issue.title.substring(0, 47) + '...' : issue.title;
            section += `| [#${issue.number}](${issue.url}) | ${issue.upvotes || 0} | ${issue.commentCount || 0} | ${age} | ${labels} | ${title} |\n`;
        });
        section += `\n`;
        return section;
    }

    md += renderIssueTable(bugs, 'Bugs');
    md += renderIssueTable(enhancements, 'Enhancements');
    md += renderIssueTable(other, 'Other');

    // Write output
    const outputPath = path.join(repoPath, OUTPUT_FILE);
    fs.writeFileSync(outputPath, md);
    console.log(`Generated: ${outputPath} (${issues.length} issues)`);
    return true;
}

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage:');
        console.log('  node scripts/generate-readable.js <repo-dir-name>');
        console.log('  node scripts/generate-readable.js --all');
        process.exit(1);
    }

    if (args[0] === '--all') {
        const repos = fs.readdirSync(REPOS_DIR)
            .filter(f => fs.statSync(path.join(REPOS_DIR, f)).isDirectory());

        console.log(`Generating readable files for ${repos.length} repositories...\n`);

        let success = 0;
        repos.forEach(repo => {
            if (generateReadable(repo)) success++;
        });

        console.log(`\nDone! Generated ${success}/${repos.length} files.`);
    } else {
        generateReadable(args[0]);
    }
}

main();
