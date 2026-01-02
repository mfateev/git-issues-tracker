#!/usr/bin/env node
/**
 * Generate global contributor statistics across all repositories
 *
 * Usage:
 *   node scripts/generate-contributors.js
 *
 * Output: analysis/CONTRIBUTORS.md
 */

const fs = require('fs');
const path = require('path');

const REPOS_DIR = path.join(__dirname, '..', 'repos');
const OUTPUT_FILE = path.join(__dirname, '..', 'analysis', 'contributors.md');

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

function slugify(text) {
    // Match GitHub's anchor generation:
    // 1. Lowercase
    // 2. Remove anything that isn't letter, number, space, or hyphen
    // 3. Replace spaces with hyphens
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/ +/g, '-')
        .replace(/^-|-$/g, '');
}

function generateContributors() {
    console.log('Loading all issues...');
    const issues = loadAllIssues();
    console.log(`Loaded ${issues.length} issues`);

    // Track issues per author
    const issuesByAuthor = {};
    // Track comments per author
    const commentsByAuthor = {};

    issues.forEach(issue => {
        const author = issue.author?.login || 'unknown';

        // Count issue
        if (!issuesByAuthor[author]) {
            issuesByAuthor[author] = { count: 0, repos: {}, issues: [] };
        }
        issuesByAuthor[author].count++;
        issuesByAuthor[author].repos[issue._repo] = (issuesByAuthor[author].repos[issue._repo] || 0) + 1;
        issuesByAuthor[author].issues.push({
            number: issue.number,
            title: issue.title,
            repo: issue._repo,
            repoDir: issue._repoDir
        });

        // Count comments
        (issue.comments || []).forEach(comment => {
            const commenter = comment.author?.login || 'unknown';
            if (!commentsByAuthor[commenter]) {
                commentsByAuthor[commenter] = { count: 0, repos: {} };
            }
            commentsByAuthor[commenter].count++;
            commentsByAuthor[commenter].repos[issue._repo] = (commentsByAuthor[commenter].repos[issue._repo] || 0) + 1;
        });
    });

    // Sort by count
    const sortedIssuers = Object.entries(issuesByAuthor)
        .sort((a, b) => b[1].count - a[1].count);
    const sortedCommenters = Object.entries(commentsByAuthor)
        .sort((a, b) => b[1].count - a[1].count);

    // Calculate totals
    const totalIssues = issues.length;
    const totalComments = issues.reduce((sum, i) => sum + (i.comments?.length || 0), 0);

    // Build markdown
    let md = `# Contributor Statistics\n\n`;
    md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;
    md += `**Total Issues:** ${totalIssues}\n`;
    md += `**Total Comments:** ${totalComments}\n`;
    md += `**Unique Issue Authors:** ${sortedIssuers.length}\n`;
    md += `**Unique Commenters:** ${sortedCommenters.length}\n\n`;

    // Navigation
    md += `## Related Documents\n\n`;
    md += `← [Summary](summary.md) · [Recent Issues](stats-recent.md) · [All Stats](stats-all.md)\n\n`;
    md += `**Per-Repository Analysis:** `;
    md += `[Server](server.md) · [Features](features.md) · `;
    md += `[Java](java.md) · [Go](go.md) · [TypeScript](typescript.md) · `;
    md += `[Python](python.md) · [.NET](dotnet.md) · [PHP](php.md) · [Ruby](ruby.md) · [API](api.md)\n\n`;
    md += `---\n\n`;

    // Issues by author (with links to detail sections)
    md += `## Issues Filed by Author\n\n`;
    md += `| Rank | Author | Issues | Repositories |\n`;
    md += `|------|--------|--------|---------------|\n`;

    sortedIssuers.slice(0, 50).forEach(([author, data], idx) => {
        const repoList = Object.keys(data.repos).length > 3
            ? `${Object.keys(data.repos).slice(0, 3).join(', ')}...`
            : Object.keys(data.repos).join(', ');
        const anchor = slugify(`${author} ${data.count} issues`);
        md += `| ${idx + 1} | [${author}](#${anchor}) | ${data.count} | ${repoList} |\n`;
    });
    md += `\n`;

    // Comments by author
    md += `## Comments by Author\n\n`;
    md += `| Rank | Author | Comments | Repositories |\n`;
    md += `|------|--------|----------|---------------|\n`;

    sortedCommenters.slice(0, 50).forEach(([author, data], idx) => {
        const repoList = Object.keys(data.repos).length > 3
            ? `${Object.keys(data.repos).slice(0, 3).join(', ')}...`
            : Object.keys(data.repos).join(', ');
        md += `| ${idx + 1} | ${author} | ${data.count} | ${repoList} |\n`;
    });
    md += `\n`;

    // Combined activity (issues + comments)
    md += `## Combined Activity (Issues + Comments)\n\n`;
    const combined = {};
    sortedIssuers.forEach(([author, data]) => {
        combined[author] = { issues: data.count, comments: 0 };
    });
    sortedCommenters.forEach(([author, data]) => {
        if (!combined[author]) combined[author] = { issues: 0, comments: 0 };
        combined[author].comments = data.count;
    });

    const sortedCombined = Object.entries(combined)
        .map(([author, data]) => [author, data.issues + data.comments, data])
        .sort((a, b) => b[1] - a[1]);

    md += `| Rank | Author | Issues | Comments | Total |\n`;
    md += `|------|--------|--------|----------|-------|\n`;

    sortedCombined.slice(0, 50).forEach(([author, total, data], idx) => {
        md += `| ${idx + 1} | ${author} | ${data.issues} | ${data.comments} | ${total} |\n`;
    });
    md += `\n`;

    // All authors with their issues
    md += `---\n\n`;
    md += `## Issues by Author\n\n`;

    sortedIssuers.forEach(([author, data]) => {
        md += `### ${author} (${data.count} issues)\n\n`;
        md += `| Repo | Issue | Title |\n`;
        md += `|------|-------|-------|\n`;
        data.issues.forEach(issue => {
            const title = issue.title;
            const shortRepo = issue.repo.replace('temporalio/', '');
            md += `| ${shortRepo} | [#${issue.number}](../repos/${issue.repoDir}/issues.md#${issue.number}) | ${title} |\n`;
        });
        md += `\n`;
    });

    // Write output
    fs.writeFileSync(OUTPUT_FILE, md);
    console.log(`Generated: ${OUTPUT_FILE}`);
}

generateContributors();
