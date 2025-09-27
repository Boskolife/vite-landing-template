# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - In Development

### Added

- feat: updated configuration
  - Обновлены зависимости в package.json
  - Изменены файлы: .gitignore, docs/guides/GITHUB_RELEASES.md, package.json, scripts/update-changelog.js

### Changed

- chore: project update
  - Изменены файлы: CHANGELOG.md

### Fixed

### Technical

- chore: project update
  - Updated files: CHANGELOG.md

- chore: project update
  - Updated files: .gitignore

- chore: project update
  - Updated files: .husky/pre-commit, CHANGELOG.md

- chore: project update
  - Updated files: .husky/pre-commit

- chore: configuration update
  - Updated dependencies in package.json

- chore: configuration update
  - Updated dependencies in package.json
  - Updated files: docs/guides/RELEASE.md, package.json, scripts/release.js

## [0.9.0] - 2025-09-27

### Changed
- feat: migrated project from TypeScript to JavaScript
- feat: updated all configuration files for JavaScript support
- feat: removed TypeScript dependencies and tsconfig.json
- feat: updated ESLint configuration for JavaScript only

### Added
- feat: replaced Roboto font with Space Mono with full character set
- feat: added extended noindex settings to prevent site indexing
- feat: added WebP image optimization with automatic conversion
- feat: added custom Vite plugin for WebP conversion
- feat: added comprehensive documentation structure in docs/ folder
- feat: added multilingual documentation support (Ukrainian + English)
- feat: added JavaScript utilities for WebP detection and support
- feat: added SCSS mixins for WebP background images
- feat: added automated GitHub Releases automation and documentation
- feat: created separate README files for English and Ukrainian

### Technical
- chore: added .cursor/rules to .gitignore to exclude service files
- chore: fixed CHANGELOG.md update logic - now updates before commit
- feat: integrated vite-plugin-imagemin for image optimization
- feat: added Sharp library for high-performance WebP conversion
- feat: created custom WebP conversion plugin with build hooks
- feat: added GitHub Actions workflow for automatic releases
- feat: created GitHub release script with archive generation
- feat: added comprehensive GitHub Releases documentation
- feat: added npm scripts for GitHub releases
- feat: updated CHANGELOG.md to English-only format

---

## [0.8.0] - 2024-01-15

### Fixed
- Fixed all Sass deprecation warnings in include-media library
- Replaced deprecated functions: `map-has-key`, `map-get`, `str-index`, `str-slice`, `length`, `nth`, `append`, `unit`, `unquote`, `map-merge`
- Fixed order of @use rules in SCSS files
- Resolved "at-rule or selector expected" error in _include-media.scss

### Changed
- Updated ESLint configuration from version 8 to 9
- Created new eslint.config.js for ESLint 9
- Removed console.log from production code

### Technical
- Added modern Sass module imports: `@use 'sass:map'`, `@use 'sass:list'`, `@use 'sass:string'`, `@use 'sass:math'`
- Updated functions in _mixins.scss and _functions.scss to use modular functions
- Added global variables document and window to ESLint configuration
- Removed unused eslint-disable directives

### Result
- ✅ Project builds without errors and warnings
- ✅ ESLint finds no issues
- ✅ All Sass functions use modern syntax
- ✅ Dev server starts without warnings

---

## [0.7.0] - 2024-01-15

### Added
- Full Handlebars template support
- Improved SCSS structure with modular system
- New components: header, footer, hero section, features section
- ESLint and Prettier configuration
- MIT License
- .gitignore file

### Changed
- Updated Vite from 5.4.20 to 7.1.7
- Updated ESLint from 8.57.0 to 9.36.0
- Updated Swiper from 11.1.4 to 12.0.2

### Technical
- Replaced all @import rules with @use in SCSS
- Added JavaScript ES6+ support
- Configured build optimization with Terser
- Added source maps for development

### Updated Packages

| Package | Old Version | New Version | Update Reason |
|---------|-------------|-------------|---------------|
| **Vite** | 5.4.20 | 7.1.7 | Fix legacy JS API warnings |
| **ESLint** | 8.57.0 | 9.36.0 | New linting rules |
| **Swiper** | 11.1.4 | 12.0.2 | Performance improvements |

### Commands for Update:
```bash
npm install vite@latest eslint@latest swiper@latest
```

### Result
- ✅ Project builds without errors
- ✅ ESLint finds no issues
- ✅ Dev server starts without warnings
- ✅ All dependencies updated to latest versions

---

## [0.6.0] - 2024-01-10

### Added
- Basic project structure with Vite
- JavaScript ES6+ support
- SCSS with modular system
- Handlebars templates
- Basic build configuration

### Technical
- Configured build with Vite
- Added SCSS module support
- Basic JavaScript configuration
- Style structure with include-media

---

## 🔧 Fixed Critical Issues

### 1. Migration from TypeScript to JavaScript
**Problem**: Project was configured for TypeScript but needed to switch to pure JavaScript.

**Solution**: 
- Removed all TypeScript dependencies
- Updated ESLint configuration for JavaScript
- Removed tsconfig.json
- Updated all TypeScript references to JavaScript

### 2. SCSS Module Issues
**Problem**: Using deprecated @import rules in SCSS.

**Solution**:
- Replaced all @import with @use
- Added modern Sass module imports
- Updated functions to use modular syntax

### 3. ESLint Configuration
**Problem**: ESLint configuration was incompatible with version 9.

**Solution**:
- Created new eslint.config.js
- Updated linting rules
- Added global variables

---

## 📋 Usage Instructions

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Code Formatting
```bash
npm run format
```

---

## 🎯 Project Goals

- ✅ Modern technology stack (Vite, JavaScript, SCSS)
- ✅ Fast development with hot reload
- ✅ Quality code with linting and formatting
- ✅ Optimized build for production
- ✅ Modular style architecture
- ✅ Handlebars template support
- ✅ WebP image optimization
- ✅ Automated release management
- ✅ Comprehensive documentation
- ✅ Multilingual support

---

## 📝 Notes

- Project uses modern web development standards
- All dependencies updated to latest stable versions
- Configuration optimized for performance
- Code follows JavaScript and SCSS best practices
- Includes automated GitHub releases
- Supports both English and Ukrainian documentation