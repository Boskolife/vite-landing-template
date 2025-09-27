#!/usr/bin/env node

/**
 * Manual CHANGELOG Update Script
 * Use this script to manually update CHANGELOG.md for releases
 * Usage: node scripts/update-changelog.js "feat: added new feature"
 */

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHANGELOG_PATH = path.join(__dirname, '../CHANGELOG.md');

// Change types and their categories
const CHANGE_CATEGORIES = {
  'feat': 'Added',
  'feature': 'Added',
  'add': 'Added',
  'new': 'Added',
  
  'fix': 'Fixed',
  'bug': 'Fixed',
  'bugfix': 'Fixed',
  'hotfix': 'Fixed',
  
  'change': 'Changed',
  'update': 'Changed',
  'modify': 'Changed',
  'refactor': 'Changed',
  
  'remove': 'Removed',
  'delete': 'Removed',
  'deprecate': 'Removed',
  
  'security': 'Security',
  'sec': 'Security',
  
  'tech': 'Technical',
  'technical': 'Technical',
  'chore': 'Technical',
  'build': 'Technical',
  'ci': 'Technical',
  'config': 'Technical',
  'deps': 'Technical',
  'dependencies': 'Technical',
  'package': 'Technical',
  'npm': 'Technical',
  'yarn': 'Technical',
  'husky': 'Technical',
  'git': 'Technical',
  'hook': 'Technical',
  'script': 'Technical'
};

function categorizeChange(commitMessage) {
  const lowerMessage = commitMessage.toLowerCase();
  
  for (const [prefix, category] of Object.entries(CHANGE_CATEGORIES)) {
    if (lowerMessage.startsWith(prefix + ':')) {
      return category;
    }
  }
  
  // Default to Technical for unrecognized patterns
  return 'Technical';
}

function addEntryToChangelog(commitMessage) {
  const category = categorizeChange(commitMessage);
  const entry = `- ${commitMessage}`;
  
  const changelogContent = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  
  // Find unreleased section
  const unreleasedMatch = changelogContent.match(/## \[Unreleased\] - In Development\n([\s\S]*?)(?=## \[|\Z)/);
  
  if (unreleasedMatch) {
    const unreleasedSectionContent = unreleasedMatch[1];
    const unreleasedSectionStart = unreleasedMatch.index! + unreleasedMatch[0].indexOf(unreleasedSectionContent);
    const unreleasedSectionEnd = unreleasedSectionStart + unreleasedSectionContent.length;
    
    // Find the category section
    const categoryRegex = new RegExp(`### ${category}\\n([\\s\\S]*?)(?=### |\\Z)`);
    const categoryMatch = unreleasedSectionContent.match(categoryRegex);
    
    if (categoryMatch) {
      // Category exists, add entry
      const categoryContent = categoryMatch[1].trim();
      const newCategoryContent = categoryContent ? 
        `${categoryContent}\n${entry}\n` : 
        `${entry}\n`;
      
      const newUnreleasedContent = unreleasedSectionContent.replace(
        categoryRegex, 
        `### ${category}\n${newCategoryContent}`
      );
      
      const beforeUnreleased = changelogContent.substring(0, unreleasedSectionStart);
      const afterUnreleased = changelogContent.substring(unreleasedSectionEnd);
      const newContent = beforeUnreleased + newUnreleasedContent + afterUnreleased;
      
      fs.writeFileSync(CHANGELOG_PATH, newContent, 'utf8');
      console.log(`✅ Added entry to ${category} section`);
      console.log(`📝 Entry: ${entry}`);
    } else {
      // Category doesn't exist, create it
      const newCategory = `\n### ${category}\n${entry}\n`;
      const newUnreleasedContent = unreleasedSectionContent + newCategory;
      const newContent = beforeUnreleased + newUnreleasedContent + afterUnreleased.substring(unreleasedSectionEnd);
      fs.writeFileSync(CHANGELOG_PATH, newContent, 'utf8');
      console.log(`✅ Created ${category} section and added entry`);
    }
  } else {
    console.error('❌ Unreleased section not found in CHANGELOG.md');
    process.exit(1);
  }
}

function main() {
  const commitMessage = process.argv[2];
  
  if (!commitMessage) {
    console.log('Usage: node scripts/update-changelog.js "commit message"');
    console.log('Example: node scripts/update-changelog.js "feat: added new feature"');
    process.exit(1);
  }
  
  console.log('🤖 Manual CHANGELOG Update');
  console.log(`📝 Commit message: ${commitMessage}`);
  
  try {
    addEntryToChangelog(commitMessage);
    console.log('✅ CHANGELOG.md updated successfully!');
  } catch (error) {
    console.error('❌ Error updating CHANGELOG.md:', error.message);
    process.exit(1);
  }
}

main();
