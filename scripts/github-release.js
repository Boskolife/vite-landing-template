#!/usr/bin/env node

/**
 * GitHub Release Script
 * Скрипт для создания GitHub релизов
 * 
 * Usage / Использование:
 * node scripts/github-release.js patch "fix: description"
 * node scripts/github-release.js minor "feat: new feature"
 * node scripts/github-release.js major "feat: breaking change"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, { 
      cwd: PROJECT_ROOT, 
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    });
  } catch (error) {
    log(`❌ Error executing command: ${command}`, 'red');
    log(`Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'package.json'), 'utf8'));
  return packageJson.version;
}

function getNewVersion(versionType, currentVersion) {
  if (versionType.match(/^\d+\.\d+\.\d+$/)) {
    return versionType;
  }

  const [major, minor, patch] = currentVersion.split('.').map(Number);

  switch (versionType.toLowerCase()) {
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'major':
      return `${major + 1}.0.0`;
    default:
      throw new Error(`Invalid version type: ${versionType}`);
  }
}

function createReleaseArchive(version) {
  log(`📦 Creating release archive...`, 'blue');
  
  const archiveName = `vite-landing-template-v${version}.tar.gz`;
  const archivePath = path.join(PROJECT_ROOT, archiveName);
  
  // Create archive with essential files
  exec(`tar -czf ${archiveName} dist/ docs/ README.md LICENSE package.json`, { silent: true });
  
  log(`✅ Archive created: ${archiveName}`, 'green');
  return archivePath;
}

function generateReleaseNotes(version) {
  log(`📝 Generating release notes...`, 'blue');
  
  const changelogPath = path.join(PROJECT_ROOT, 'CHANGELOG.md');
  const changelogContent = fs.readFileSync(changelogPath, 'utf8');
  
  // Extract changelog content for this version
  const versionRegex = new RegExp(`## \\[${version}\\][\\s\\S]*?(?=## \\[|$)`);
  const match = changelogContent.match(versionRegex);
  
  if (!match) {
    log(`⚠️  No changelog found for version ${version}`, 'yellow');
    return `Release ${version}`;
  }
  
  let releaseNotes = match[0];
  
  // Clean up the content
  releaseNotes = releaseNotes.replace(/## \[.*?\] - .*?\n/, '');
  releaseNotes = releaseNotes.replace(/^---\n/gm, '');
  releaseNotes = releaseNotes.trim();
  
  return releaseNotes;
}

function pushToGitHub(version, description) {
  log(`🚀 Pushing to GitHub...`, 'blue');
  
  // Push commits
  exec('git push origin main');
  
  // Push tags
  exec(`git push origin v${version}`);
  
  log(`✅ Pushed to GitHub`, 'green');
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    log(`❌ Error: Missing arguments`, 'red');
    log(`Usage: node scripts/github-release.js <version_type> "<description>"`, 'yellow');
    log(`Example: node scripts/github-release.js minor "feat: add new feature"`, 'yellow');
    process.exit(1);
  }

  const [versionType, ...descriptionParts] = args;
  const releaseDescription = descriptionParts.join(' ');

  try {
    log(`🚀 Starting GitHub release process...`, 'bright');
    log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');

    const currentVersion = getCurrentVersion();
    const newVersion = getNewVersion(versionType, currentVersion);

    log(`📦 Current version: ${currentVersion}`, 'yellow');
    log(`🎯 Target version: ${newVersion}`, 'yellow');
    log(`📝 Description: ${releaseDescription}`, 'yellow');

    // Check if we're in a clean git state
    try {
      exec('git diff-index --quiet HEAD --', { silent: true });
    } catch {
      log(`⚠️  Warning: Working directory has uncommitted changes`, 'yellow');
    }

    // Create release archive
    const archivePath = createReleaseArchive(newVersion);
    
    // Generate release notes
    const releaseNotes = generateReleaseNotes(newVersion);
    
    // Push to GitHub
    pushToGitHub(newVersion, releaseDescription);

    log(`\n🎉 GitHub Release Summary`, 'bright');
    log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');
    log(`📦 Version: ${currentVersion} → ${newVersion}`, 'green');
    log(`📝 Description: ${releaseDescription}`, 'green');
    log(`📁 Archive: ${path.basename(archivePath)}`, 'green');
    log(`🌐 GitHub Release: https://github.com/Boskolife/vite-landing-template/releases/tag/v${newVersion}`, 'green');
    log(`\n✅ GitHub release completed!`, 'bright');

  } catch (error) {
    log(`❌ Release failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

main();
