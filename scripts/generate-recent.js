#!/usr/bin/env node
/**
 * Generate report of recent issues (filed in last 30 days)
 *
 * Usage:
 *   node scripts/generate-recent.js [days]
 *
 * Output: analysis/stats-recent.md
 */

const fs = require('fs');
const path = require('path');

const REPOS_DIR = path.join(__dirname, '..', 'repos');
const OUTPUT_FILE = path.join(__dirname, '..', 'analysis', 'stats-recent.md');
const DEFAULT_DAYS = 30;

function loadAllIssues() {
    const repos = fs.readdirSync(REPOS_DIR)
        .filter(f => fs.statSync(path.join(REPOS_DIR, f)).isDirectory());

    const allIssues = [];

    repos.forEach(repoDir => {
        const issuesDir = path.join(REPOS_DIR, repoDir, 'issues');
        const metaPath = path.join(REPOS_DIR, repoDir, 'sync-metadata.json');

        if (!fs.existsSync(issuesDir)) return;

        const meta = fs.existsSync(metaPath)
            ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
            : {};
        const repoName = meta.repository || repoDir.replace('-', '/');

        const issueFiles = fs.readdirSync(issuesDir).filter(f => f.endsWith('.json'));

        issueFiles.forEach(file => {
            const issue = JSON.parse(fs.readFileSync(path.join(issuesDir, file), 'utf8'));
            issue._repo = repoName;
            issue._repoDir = repoDir;
            allIssues.push(issue);
        });
    });

    return allIssues;
}

function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toISOString().split('T')[0];
}

function generateRecent(days) {
    console.log(`Loading all issues...`);
    const allIssues = loadAllIssues();
    console.log(`Loaded ${allIssues.length} issues`);

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    // Filter recent issues
    const recentIssues = allIssues.filter(issue => {
        const created = new Date(issue.createdAt);
        return created >= cutoffDate;
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    console.log(`Found ${recentIssues.length} issues filed in last ${days} days`);

    // Group by repo
    const byRepo = {};
    recentIssues.forEach(issue => {
        if (!byRepo[issue._repo]) byRepo[issue._repo] = [];
        byRepo[issue._repo].push(issue);
    });

    // Group by author
    const byAuthor = {};
    recentIssues.forEach(issue => {
        const author = issue.author?.login || 'unknown';
        if (!byAuthor[author]) byAuthor[author] = [];
        byAuthor[author].push(issue);
    });

    // Build markdown
    let md = `# Recent Issues (Last ${days} Days)\n\n`;
    md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;
    md += `**Period:** ${formatDate(cutoffDate)} to ${formatDate(new Date())}\n`;
    md += `**New Issues:** ${recentIssues.length}\n\n`;

    // Navigation
    md += `## Related Documents\n\n`;
    md += `← [Summary](summary.md) · [Contributors](contributors.md) · [All Stats](stats-all.md)\n\n`;
    md += `**Per-Repository Analysis:** `;
    md += `[Server](server.md) · [Features](features.md) · `;
    md += `[Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · `;
    md += `[Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [API](api.md)\n\n`;
    md += `---\n\n`;

    // Summary by repo
    md += `## Summary by Repository\n\n`;
    md += `| Repository | New Issues |\n`;
    md += `|------------|------------|\n`;

    Object.entries(byRepo)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([repo, issues]) => {
            const shortRepo = repo.replace('temporalio/', '');
            md += `| ${shortRepo} | ${issues.length} |\n`;
        });
    md += `\n`;

    // Summary by author
    md += `## Summary by Author\n\n`;
    md += `| Author | New Issues |\n`;
    md += `|--------|------------|\n`;

    Object.entries(byAuthor)
        .sort((a, b) => b[1].length - a[1].length)
        .slice(0, 20)
        .forEach(([author, issues]) => {
            md += `| ${author} | ${issues.length} |\n`;
        });
    md += `\n`;

    // All recent issues by date
    md += `---\n\n`;
    md += `## All Recent Issues\n\n`;
    md += `| Date | Repository | # | Author | Title |\n`;
    md += `|------|------------|---|--------|-------|\n`;

    recentIssues.forEach(issue => {
        const date = formatDate(issue.createdAt);
        const shortRepo = issue._repo.replace('temporalio/', '');
        const author = issue.author?.login || 'unknown';
        md += `| ${date} | ${shortRepo} | [#${issue.number}](https://github.com/temporalio/${issue._repoDir.replace('temporalio-', '')}/issues/${issue.number}) | ${author} | ${issue.title} |\n`;
    });
    md += `\n`;

    // Details by repository
    md += `---\n\n`;
    md += `## Details by Repository\n\n`;

    Object.entries(byRepo)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([repo, issues]) => {
            const shortRepo = repo.replace('temporalio/', '');
            md += `### ${shortRepo} (${issues.length} new)\n\n`;

            issues.forEach(issue => {
                const date = formatDate(issue.createdAt);
                const author = issue.author?.login || 'unknown';
                const labels = (issue.labels || []).map(l => l.name || l).slice(0, 3).join(', ') || 'none';
                md += `- **[#${issue.number}](https://github.com/temporalio/${issue._repoDir.replace('temporalio-', '')}/issues/${issue.number})** ${issue.title}\n`;
                md += `  - *${date} by ${author}* | Labels: ${labels}\n`;
            });
            md += `\n`;
        });

    // Write output
    fs.writeFileSync(OUTPUT_FILE, md);
    console.log(`Generated: ${OUTPUT_FILE}`);
}

const days = parseInt(process.argv[2]) || DEFAULT_DAYS;
generateRecent(days);
