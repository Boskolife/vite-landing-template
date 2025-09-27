# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## [1.0.3] - 2025-09-27

### Fixed
- Fix pre-push hook to remove CHANGELOG management references

## [1.1.0] - 2025-09-27

### Added
- Redesign main README with modern, professional layout and improved user experience


## [1.0.2] - 2025-09-27

### Fixed
- Test new CHANGELOG system without Unreleased section


## [0.10.2] - 2025-09-27

### Fixed
- Test improved version ordering in CHANGELOG


## [0.10.0] - 2025-09-27

### Added
- Add new simplified release system with GitHub integration

## [0.9.3] - 2025-09-27

### Fixed
- Fix ESLint configuration and simplify release system

## [0.9.2] - 2025-09-27

### Added
- feat: implement release-only CHANGELOG management system

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

