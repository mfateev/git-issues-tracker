#!/usr/bin/env node
/**
 * Issue Analysis Script - Multi-repository support
 *
 * Usage: node analyze-issues.js <repo-dir-name> [command]
 *        node analyze-issues.js --all [command]
 *
 * Commands:
 *   stats       - Show overall statistics including engagement
 *   age         - Show issues by age
 *   bugs        - List all bug issues
 *   testserver  - List test server issues
 *   security    - List security vulnerabilities
 *   upvotes     - List issues by upvotes (user demand)
 *   comments    - List issues by comment count
 *   engagement  - Show full engagement analysis
 *   priority    - Show priority score (upvotes + comments weighted)
 *   recent      - List recent issues (last 30 days)
 *   stale       - List stale issues (no activity > 1 year)
 *   categories  - Categorize enhancement issues
 *   report      - Generate markdown report
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const REPOS_DIR = path.join(BASE_DIR, 'repos');

function loadIndex(repoDir) {
    const indexFile = path.join(repoDir, 'issues-index.json');
    if (!fs.existsSync(indexFile)) {
        console.error(`Index not found: ${indexFile}`);
        console.error('Run: node scripts/build-index.js <repo-dir-name>');
        return null;
    }
    return JSON.parse(fs.readFileSync(indexFile));
}

function listRepos() {
    if (!fs.existsSync(REPOS_DIR)) return [];
    return fs.readdirSync(REPOS_DIR).filter(f => {
        return fs.statSync(path.join(REPOS_DIR, f)).isDirectory();
    });
}

function showStats(index, repoName) {
    console.log(`=== STATISTICS: ${repoName} ===`);
    console.log('Total issues:', index.total_count);
    console.log('');
    console.log('By State:', JSON.stringify(index.stats.by_state, null, 2));
    console.log('');
    console.log('By Label:');
    Object.entries(index.stats.by_label).forEach(([label, count]) => {
        console.log('  ' + label + ': ' + count);
    });
    console.log('');
    console.log('Engagement:');
    if (index.stats.engagement) {
        console.log('  Total upvotes:', index.stats.engagement.total_upvotes);
        console.log('  Total comments:', index.stats.engagement.total_comments);
        console.log('  Issues with upvotes:', index.stats.engagement.issues_with_upvotes, '(' + index.stats.engagement.upvote_rate + ')');
        console.log('  Issues with comments:', index.stats.engagement.issues_with_comments, '(' + index.stats.engagement.comment_rate + ')');
    }
}

function showByAge(index) {
    const now = new Date();
    const ageCategories = {
        'Last 30 days': [], '1-3 months': [], '3-6 months': [],
        '6-12 months': [], '1-2 years': [], '2-3 years': [], '3+ years': []
    };

    index.issues.forEach(issue => {
        const created = new Date(issue.createdAt);
        const ageMonths = (now - created) / (1000 * 60 * 60 * 24 * 30);

        if (ageMonths < 1) ageCategories['Last 30 days'].push(issue);
        else if (ageMonths < 3) ageCategories['1-3 months'].push(issue);
        else if (ageMonths < 6) ageCategories['3-6 months'].push(issue);
        else if (ageMonths < 12) ageCategories['6-12 months'].push(issue);
        else if (ageMonths < 24) ageCategories['1-2 years'].push(issue);
        else if (ageMonths < 36) ageCategories['2-3 years'].push(issue);
        else ageCategories['3+ years'].push(issue);
    });

    console.log('=== ISSUES BY AGE ===');
    Object.entries(ageCategories).forEach(([cat, issues]) => {
        console.log(cat + ': ' + issues.length);
    });
}

function showBugs(index) {
    console.log('=== BUG ISSUES ===');
    const bugs = index.issues.filter(i => i.labels.includes('bug'));
    console.log('Total bugs:', bugs.length);
    console.log('');
    bugs.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
        .forEach(i => {
            const engagement = (i.upvotes || 0) > 0 || (i.commentCount || 0) > 0
                ? ` (${i.upvotes || 0} 👍, ${i.commentCount || 0} 💬)` : '';
            console.log('#' + i.number + engagement + ' - ' + i.title);
        });
}

function showTestServer(index) {
    console.log('=== TEST SERVER ISSUES ===');
    const issues = index.issues.filter(i => i.labels.includes('test server'));
    console.log('Total:', issues.length);
    console.log('');
    issues.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
        .forEach(i => {
            const engagement = (i.upvotes || 0) > 0 || (i.commentCount || 0) > 0
                ? ` (${i.upvotes || 0} 👍, ${i.commentCount || 0} 💬)` : '';
            console.log('#' + i.number + engagement + ' - ' + i.title);
        });
}

function showSecurity(index) {
    console.log('=== SECURITY VULNERABILITIES ===');
    const issues = index.issues.filter(i =>
        i.labels.some(l => l.toLowerCase().includes('vulnerability') || l.toLowerCase().includes('security'))
    );
    console.log('Total:', issues.length);
    console.log('');
    issues.forEach(i => console.log('#' + i.number + ' - ' + i.title));
}

function showUpvotes(index, limit = 30) {
    console.log('=== TOP ISSUES BY UPVOTES (User Demand) ===');
    const withUpvotes = index.issues.filter(i => (i.upvotes || 0) > 0);
    console.log('Issues with upvotes:', withUpvotes.length);
    console.log('');

    withUpvotes
        .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
        .slice(0, limit)
        .forEach((i, idx) => {
            const labels = i.labels.length > 0 ? ` [${i.labels.join(', ')}]` : '';
            console.log(`${idx + 1}. #${i.number} (${i.upvotes} 👍, ${i.commentCount || 0} 💬)${labels}`);
            console.log(`   ${i.title}`);
        });
}

function showComments(index, limit = 30) {
    console.log('=== TOP ISSUES BY COMMENTS ===');
    const withComments = index.issues.filter(i => (i.commentCount || 0) > 0);
    console.log('Issues with comments:', withComments.length);
    console.log('');

    withComments
        .sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0))
        .slice(0, limit)
        .forEach((i, idx) => {
            const labels = i.labels.length > 0 ? ` [${i.labels.join(', ')}]` : '';
            console.log(`${idx + 1}. #${i.number} (${i.commentCount} 💬, ${i.upvotes || 0} 👍)${labels}`);
            console.log(`   ${i.title}`);
        });
}

function showEngagement(index) {
    console.log('=== ENGAGEMENT ANALYSIS ===');
    console.log('');

    const totalUpvotes = index.issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
    const totalComments = index.issues.reduce((sum, i) => sum + (i.commentCount || 0), 0);
    const withUpvotes = index.issues.filter(i => (i.upvotes || 0) > 0).length;
    const withComments = index.issues.filter(i => (i.commentCount || 0) > 0).length;

    console.log('Overall:');
    console.log('  Total upvotes:', totalUpvotes);
    console.log('  Total comments:', totalComments);
    console.log('  Issues with upvotes:', withUpvotes, `(${Math.round(withUpvotes / index.total_count * 100)}%)`);
    console.log('  Issues with comments:', withComments, `(${Math.round(withComments / index.total_count * 100)}%)`);
    console.log('');

    console.log('Engagement by Label:');
    const labelEngagement = {};
    index.issues.forEach(i => {
        i.labels.forEach(label => {
            if (!labelEngagement[label]) {
                labelEngagement[label] = { count: 0, upvotes: 0, comments: 0 };
            }
            labelEngagement[label].count++;
            labelEngagement[label].upvotes += (i.upvotes || 0);
            labelEngagement[label].comments += (i.commentCount || 0);
        });
    });

    Object.entries(labelEngagement)
        .sort((a, b) => b[1].upvotes - a[1].upvotes)
        .forEach(([label, data]) => {
            console.log(`  ${label}: ${data.count} issues, ${data.upvotes} 👍, ${data.comments} 💬`);
        });

    console.log('');
    console.log('Top 15 by Upvotes:');
    index.issues
        .filter(i => (i.upvotes || 0) > 0)
        .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
        .slice(0, 15)
        .forEach(i => console.log(`  #${i.number} (${i.upvotes} 👍) - ${i.title.substring(0, 50)}`));
}

function showPriority(index, limit = 30) {
    console.log('=== PRIORITY SCORE (Upvotes×2 + Comments) ===');
    console.log('');

    const scored = index.issues.map(i => ({
        ...i,
        priorityScore: ((i.upvotes || 0) * 2) + (i.commentCount || 0)
    })).filter(i => i.priorityScore > 0);

    console.log('Issues with engagement:', scored.length);
    console.log('');

    scored
        .sort((a, b) => b.priorityScore - a.priorityScore)
        .slice(0, limit)
        .forEach((i, idx) => {
            const labels = i.labels.length > 0 ? ` [${i.labels.slice(0, 2).join(', ')}]` : '';
            console.log(`${idx + 1}. #${i.number} (score: ${i.priorityScore}, ${i.upvotes || 0} 👍, ${i.commentCount || 0} 💬)${labels}`);
            console.log(`   ${i.title}`);
        });
}

function showRecent(index, days = 30) {
    console.log('=== RECENT ISSUES (last ' + days + ' days) ===');
    const now = new Date();
    const issues = index.issues.filter(i =>
        (now - new Date(i.createdAt)) < days * 24 * 60 * 60 * 1000
    );
    console.log('Total:', issues.length);
    console.log('');
    issues.forEach(i => {
        const engagement = (i.upvotes || 0) > 0 || (i.commentCount || 0) > 0
            ? ` (${i.upvotes || 0} 👍, ${i.commentCount || 0} 💬)` : '';
        console.log('#' + i.number + engagement + ' - ' + i.title);
    });
}

function showStale(index, months = 12) {
    console.log('=== STALE ISSUES (no activity > ' + months + ' months) ===');
    const now = new Date();
    const cutoff = months * 30 * 24 * 60 * 60 * 1000;
    const issues = index.issues.filter(i =>
        (now - new Date(i.updatedAt)) > cutoff
    );
    console.log('Total:', issues.length);
    console.log('');
    issues.slice(0, 30).forEach(i => {
        const lastUpdate = new Date(i.updatedAt).toISOString().split('T')[0];
        const engagement = (i.upvotes || 0) > 0 ? ` (${i.upvotes} 👍)` : '';
        console.log('#' + i.number + ' (last: ' + lastUpdate + ')' + engagement + ' - ' + i.title.substring(0, 45));
    });
    if (issues.length > 30) console.log('... and ' + (issues.length - 30) + ' more');
}

function showCategories(index) {
    const enhancements = index.issues.filter(i => i.labels.includes('enhancement'));

    const categories = {
        'Spring Boot': [], 'Testing/Replay': [], 'Tracing/OpenTelemetry': [],
        'Activity': [], 'Workflow': [], 'Metrics': [], 'API/Client': [],
        'Worker': [], 'Configuration': [], 'Kotlin': [], 'Other': []
    };

    enhancements.forEach(issue => {
        const title = issue.title.toLowerCase();
        let categorized = false;

        if (title.includes('spring') || title.includes('boot')) { categories['Spring Boot'].push(issue); categorized = true; }
        if (title.includes('test') || title.includes('replay')) { categories['Testing/Replay'].push(issue); categorized = true; }
        if (title.includes('trac') || title.includes('otel') || title.includes('opentelemetry')) { categories['Tracing/OpenTelemetry'].push(issue); categorized = true; }
        if (title.includes('activity') || title.includes('heartbeat')) { categories['Activity'].push(issue); categorized = true; }
        if (title.includes('workflow') && !categorized) { categories['Workflow'].push(issue); categorized = true; }
        if (title.includes('metric') || title.includes('counter')) { categories['Metrics'].push(issue); categorized = true; }
        if (title.includes('client') || title.includes('stub') || title.includes('api')) { categories['API/Client'].push(issue); categorized = true; }
        if (title.includes('worker') || title.includes('poller')) { categories['Worker'].push(issue); categorized = true; }
        if (title.includes('option') || title.includes('config')) { categories['Configuration'].push(issue); categorized = true; }
        if (title.includes('kotlin')) { categories['Kotlin'].push(issue); categorized = true; }
        if (!categorized) { categories['Other'].push(issue); }
    });

    console.log('=== ENHANCEMENT CATEGORIES ===');
    console.log('Total enhancements:', enhancements.length);
    console.log('');

    Object.entries(categories)
        .filter(([_, issues]) => issues.length > 0)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([cat, issues]) => {
            const totalUpvotes = issues.reduce((sum, i) => sum + (i.upvotes || 0), 0);
            console.log('\n' + cat + ' (' + issues.length + ' issues, ' + totalUpvotes + ' 👍):');
            issues.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
                .forEach(i => {
                    const engagement = (i.upvotes || 0) > 0 ? ` (${i.upvotes} 👍)` : '';
                    console.log('  #' + i.number + engagement + ' - ' + i.title);
                });
        });
}

function runCommand(repoDir, repoName, command) {
    const index = loadIndex(repoDir);
    if (!index) return;

    switch (command) {
        case 'stats': showStats(index, repoName); break;
        case 'age': showByAge(index); break;
        case 'bugs': showBugs(index); break;
        case 'testserver': showTestServer(index); break;
        case 'security': showSecurity(index); break;
        case 'upvotes': showUpvotes(index); break;
        case 'comments': showComments(index); break;
        case 'engagement': showEngagement(index); break;
        case 'priority': showPriority(index); break;
        case 'recent': showRecent(index); break;
        case 'stale': showStale(index); break;
        case 'categories': showCategories(index); break;
        default:
            console.log('Unknown command:', command);
            console.log('Available: stats, age, bugs, testserver, security, upvotes, comments, engagement, priority, recent, stale, categories');
    }
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Usage: node analyze-issues.js <repo-dir-name> [command]');
    console.log('       node analyze-issues.js --all [command]');
    console.log('       node analyze-issues.js --list');
    console.log('');
    console.log('Commands: stats, age, bugs, testserver, security, upvotes, comments,');
    console.log('          engagement, priority, recent, stale, categories');
    console.log('');
    console.log('Available repositories:');
    listRepos().forEach(r => console.log('  ' + r));
    process.exit(1);
}

if (args[0] === '--list') {
    console.log('Tracked repositories:');
    listRepos().forEach(r => {
        const metaFile = path.join(REPOS_DIR, r, 'sync-metadata.json');
        if (fs.existsSync(metaFile)) {
            const meta = JSON.parse(fs.readFileSync(metaFile));
            console.log(`  ${r} (${meta.repository}) - ${meta.issue_count} issues`);
        }
    });
    process.exit(0);
}

const repoArg = args[0];
const command = args[1] || 'stats';

if (repoArg === '--all') {
    const repos = listRepos();
    for (const repo of repos) {
        console.log('\n' + '='.repeat(60));
        runCommand(path.join(REPOS_DIR, repo), repo, command);
    }
} else {
    const repoDir = path.join(REPOS_DIR, repoArg);
    if (!fs.existsSync(repoDir)) {
        console.error(`Repository not found: ${repoArg}`);
        console.log('Available:', listRepos().join(', '));
        process.exit(1);
    }
    runCommand(repoDir, repoArg, command);
}
