#!/usr/bin/env node

/**
 * GitHub Release Script - Simplified Version
 * Automated script for creating GitHub releases with CHANGELOG updates
 * 
 * Usage:
 * node scripts/github-release.js major "Breaking change description"
 * node scripts/github-release.js feature "New feature description"  
 * node scripts/github-release.js fix "Bug fix description"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const CHANGELOG_PATH = path.join(PROJECT_ROOT, 'CHANGELOG.md');
const PACKAGE_JSON_PATH = path.join(PROJECT_ROOT, 'package.json');

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
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  return packageJson.version;
}

function bumpVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'feature':
      return `${major}.${minor + 1}.0`;
    case 'fix':
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error(`Unknown version type: ${type}`);
  }
}

function updatePackageJson(newVersion) {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');
  log(`✅ package.json updated to version ${newVersion}`, 'green');
}

function updateChangelog(newVersion, description, type) {
  const changelogContent = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  const today = new Date().toISOString().split('T')[0];
  
  // Determine category based on type
  let category;
  switch (type) {
    case 'major':
      category = '### Changed';
      break;
    case 'feature':
      category = '### Added';
      break;
    case 'fix':
      category = '### Fixed';
      break;
    default:
      category = '### Added';
  }

  // Create new version section
  const newVersionSection = `## [${newVersion}] - ${today}

${category}
- ${description}

`;

  // Find the end of the header section
  const headerEndMatch = changelogContent.match(/(.*and this project adheres to \[Semantic Versioning\].*\n)/);
  if (!headerEndMatch) {
    // Fallback: find the end of the header by looking for the first version section
    const firstVersionMatch = changelogContent.match(/\n## \[/);
    if (!firstVersionMatch) {
      throw new Error('Could not find header section or version section in CHANGELOG.md!');
    }
    const headerEndIndex = firstVersionMatch.index;
    const headerPart = changelogContent.substring(0, headerEndIndex);
    const contentPart = changelogContent.substring(headerEndIndex);
    
    // Add new version section right after header
    const finalChangelog = headerPart + newVersionSection + contentPart;
    fs.writeFileSync(CHANGELOG_PATH, finalChangelog);
    log(`✅ CHANGELOG.md updated with version ${newVersion}`, 'green');
    return;
  }
  
  const headerEndIndex = headerEndMatch.index + headerEndMatch[0].length;
  const headerPart = changelogContent.substring(0, headerEndIndex);
  const contentPart = changelogContent.substring(headerEndIndex);
  
  // Add new version section right after header
  const finalChangelog = headerPart + newVersionSection + contentPart;
  fs.writeFileSync(CHANGELOG_PATH, finalChangelog);
  log(`✅ CHANGELOG.md updated with version ${newVersion}`, 'green');
}

function createGitCommit(newVersion) {
  exec('git add package.json CHANGELOG.md');
  exec(`git commit -m "chore: release v${newVersion}"`);
  log(`✅ Git commit created`, 'green');
}

function createGitTag(newVersion) {
  exec(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
  log(`✅ Git tag v${newVersion} created`, 'green');
}

function pushToRemote() {
  exec('git push origin main');
  exec('git push origin --tags');
  log(`✅ Pushed to remote repository`, 'green');
}

function main() {
  const [,, type, description] = process.argv;

  // Validate arguments
  if (!type || !description) {
    log('❌ Error: Missing arguments', 'red');
    log('');
    log('📖 Usage:', 'bright');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
    log('');
    log('🔧 Release Types:', 'yellow');
    log('  major    - Breaking changes (1.0.0 → 2.0.0)', 'reset');
    log('  feature  - New features (1.0.0 → 1.1.0)', 'reset');
    log('  fix      - Bug fixes (1.0.0 → 1.0.1)', 'reset');
    log('');
    log('💡 Examples:', 'yellow');
    log('  node scripts/github-release.js major "Breaking API changes"', 'reset');
    log('  node scripts/github-release.js feature "Add WebP optimization"', 'reset');
    log('  node scripts/github-release.js fix "Fix login bug"', 'reset');
    log('');
    log('⚠️  Note:', 'yellow');
    log('  Description is required for all releases', 'reset');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
    process.exit(1);
  }

  // Validate type
  if (!['major', 'feature', 'fix'].includes(type)) {
    log(`❌ Error: Invalid release type '${type}'`, 'red');
    log('Valid types: major, feature, fix', 'yellow');
    process.exit(1);
  }

  // Check if working directory is clean
  try {
    exec('git diff-index --quiet HEAD --', { silent: true });
  } catch (error) {
    log('❌ Error: Working directory is not clean', 'red');
    log('Please commit or stash your changes before creating a release', 'yellow');
    process.exit(1);
  }

  const currentVersion = getCurrentVersion();
  const newVersion = bumpVersion(currentVersion, type);

  log('🚀 Starting GitHub release process...', 'bright');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log(`📦 Current version: ${currentVersion}`, 'yellow');
  log(`🎯 Target version: ${newVersion}`, 'yellow');
  log(`📝 Description: ${description}`, 'yellow');
  log('');

  try {
    // Update package.json
    log('📦 Updating package.json...', 'blue');
    updatePackageJson(newVersion);

    // Update CHANGELOG.md
    log('📝 Updating CHANGELOG.md...', 'blue');
    updateChangelog(newVersion, description, type);

    // Create git commit
    log('📋 Creating git commit...', 'blue');
    createGitCommit(newVersion);

    // Create git tag
    log(`🏷️  Creating git tag v${newVersion}...`, 'blue');
    createGitTag(newVersion);

    // Push to remote
    log('🚀 Pushing to remote repository...', 'blue');
    pushToRemote();

    log('');
    log('🎉 GitHub release completed successfully!', 'bright');
    log(`📦 Version: ${newVersion}`, 'green');
    log(`🏷️  Tag: v${newVersion}`, 'green');
    log(`📝 Description: ${description}`, 'green');
    log('');
    log('✅ All done! Check your GitHub repository for the new release.', 'green');

  } catch (err) {
    log('❌ Release failed!', 'red');
    log(`Error: ${err.message}`, 'red');
    log('');
    log('🔄 To rollback:', 'yellow');
    log(`   git reset --hard HEAD~1`, 'cyan');
    log(`   git tag -d v${newVersion}`, 'cyan');
    process.exit(1);
  }
}

main();