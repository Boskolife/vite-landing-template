#!/usr/bin/env node

/**
 * Release Automation Script
 * Скрипт автоматизации релизов
 * 
 * Usage / Использование:
 * node scripts/release.js patch "fix: description"     # 1.0.0 → 1.0.1
 * node scripts/release.js minor "feat: new feature"    # 1.0.0 → 1.1.0  
 * node scripts/release.js major "feat: breaking change" # 1.0.0 → 2.0.0
 * node scripts/release.js 1.2.3 "custom: description"  # custom version
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

function getNewVersion(versionType, currentVersion) {
  if (versionType.match(/^\d+\.\d+\.\d+$/)) {
    // Custom version provided (e.g., "1.2.3")
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
      throw new Error(`Invalid version type: ${versionType}. Use patch, minor, major, or custom version (e.g., 1.2.3)`);
  }
}

function updatePackageJson(newVersion) {
  log(`📦 Updating package.json to version ${newVersion}...`, 'blue');
  
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  packageJson.version = newVersion;
  
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');
  log(`✅ package.json updated`, 'green');
}

function updateChangelog(newVersion, releaseDescription) {
  log(`📝 Updating CHANGELOG.md...`, 'blue');
  
  if (!fs.existsSync(CHANGELOG_PATH)) {
    throw new Error('CHANGELOG.md not found!');
  }

  const changelogContent = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  const today = new Date().toISOString().split('T')[0];
  
  // Replace [Unreleased] with new version
  const unreleasedPattern = /## \[Unreleased\] - In Development/;
  
  if (!unreleasedPattern.test(changelogContent)) {
    throw new Error('Unreleased section not found in CHANGELOG.md!');
  }

  const updatedChangelog = changelogContent.replace(
    unreleasedPattern,
    `## [${newVersion}] - ${today}`
  );

  // Add new unreleased section at the end if it doesn't exist
  const hasNewUnreleased = updatedChangelog.includes('## [Unreleased]');
  if (!hasNewUnreleased) {
    const newUnreleasedSection = `

## [Unreleased] - In Development

### Added

### Changed

### Fixed

### Technical

`;
    fs.writeFileSync(CHANGELOG_PATH, updatedChangelog + newUnreleasedSection);
  } else {
    fs.writeFileSync(CHANGELOG_PATH, updatedChangelog);
  }

  log(`✅ CHANGELOG.md updated`, 'green');
}

function createGitCommit(newVersion, releaseDescription) {
  log(`📋 Creating git commit...`, 'blue');
  
  const commitMessage = `chore: release v${newVersion}

${releaseDescription}

- Updated package.json to version ${newVersion}
- Updated CHANGELOG.md with release notes
- Created git tag v${newVersion}`;

  exec('git add package.json CHANGELOG.md');
  exec(`git commit -m "${commitMessage}"`);
  
  log(`✅ Git commit created`, 'green');
}

function createGitTag(newVersion) {
  log(`🏷️  Creating git tag v${newVersion}...`, 'blue');
  
  exec(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
  
  log(`✅ Git tag v${newVersion} created`, 'green');
}

function pushToRemote() {
  log(`🚀 Pushing to remote repository...`, 'blue');
  
  exec('git push origin main');
  exec('git push origin --tags');
  
  log(`✅ Pushed to remote repository`, 'green');
}

function showReleaseSummary(currentVersion, newVersion, releaseDescription, versionType) {
  log(`\n🎉 Release Summary / Підсумок релізу`, 'bright');
  log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');
  log(`📦 Version / Версія:`, 'yellow');
  log(`   ${currentVersion} → ${newVersion}`, 'green');
  log(`\n📋 Type / Тип:`, 'yellow');
  log(`   ${versionType}`, 'green');
  log(`\n📝 Description / Опис:`, 'yellow');
  log(`   ${releaseDescription}`, 'green');
  log(`\n📅 Date / Дата:`, 'yellow');
  log(`   ${new Date().toISOString().split('T')[0]}`, 'green');
  log(`\n✅ Release completed successfully! / Реліз успішно завершено!`, 'bright');
  log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');
}

function showUsage() {
  log(`\n📖 Usage / Використання:`, 'bright');
  log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');
  log(`\n🔧 Version Types / Типи версій:`, 'yellow');
  log(`   patch    - Bug fixes / Виправлення помилок (1.0.0 → 1.0.1)`);
  log(`   minor    - New features / Нові функції (1.0.0 → 1.1.0)`);
  log(`   major    - Breaking changes / Критичні зміни (1.0.0 → 2.0.0)`);
  log(`   custom   - Specific version / Конкретна версія (1.2.3)`);
  log(`\n💡 Examples / Приклади:`, 'yellow');
  log(`   node scripts/release.js patch "fix: critical bug fix"`);
  log(`   node scripts/release.js minor "feat: add WebP optimization"`);
  log(`   node scripts/release.js major "feat: breaking API changes"`);
  log(`   node scripts/release.js 1.2.3 "custom: specific release"`);
  log(`\n⚠️  Note / Примітка:`, 'yellow');
  log(`   Description is required for all releases`);
  log(`   Опис обов'язковий для всіх релізів`);
  log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`, 'cyan');
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    log(`❌ Error: Missing arguments / Помилка: Відсутні аргументи`, 'red');
    showUsage();
    process.exit(1);
  }

  const [versionType, ...descriptionParts] = args;
  const releaseDescription = descriptionParts.join(' ');

  if (!releaseDescription.trim()) {
    log(`❌ Error: Release description is required / Помилка: Опис релізу обов'язковий`, 'red');
    showUsage();
    process.exit(1);
  }

  try {
    log(`🚀 Starting release process...`, 'bright');
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
      log(`   Make sure all changes are committed before release`, 'yellow');
    }

    // Update files
    updatePackageJson(newVersion);
    updateChangelog(newVersion, releaseDescription);
    
    // Git operations
    createGitCommit(newVersion, releaseDescription);
    createGitTag(newVersion);
    pushToRemote();

    // Show summary
    showReleaseSummary(currentVersion, newVersion, releaseDescription, versionType);

  } catch (error) {
    log(`❌ Release failed: ${error.message}`, 'red');
    log(`\n🔄 To rollback / Для відкату:`, 'yellow');
    log(`   git reset --hard HEAD~1`, 'cyan');
    log(`   git tag -d v${getNewVersion(versionType, getCurrentVersion())}`, 'cyan');
    process.exit(1);
  }
}

// Run the script
main();
