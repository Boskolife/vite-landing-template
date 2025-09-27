# Release System / Система релізів

## 🇺🇸 English

### Overview / Огляд

The project now uses a simplified GitHub release system with only three types of releases. CHANGELOG.md is automatically updated only during GitHub releases.

### Release Types / Типи релізів

| Type | Description | Version Change | Example |
|------|-------------|----------------|---------|
| **major** | Breaking changes | 1.0.0 → 2.0.0 | API changes, major refactoring |
| **feature** | New features | 1.0.0 → 1.1.0 | New functionality, enhancements |
| **fix** | Bug fixes | 1.0.0 → 1.0.1 | Bug fixes, security patches |

### Usage / Використання

#### **Major Release / Мажорний реліз:**
```bash
npm run release:major "Breaking API changes"
node scripts/github-release.js major "Complete rewrite of authentication system"
```

#### **Feature Release / Реліз з функціями:**
```bash
npm run release:feature "Add WebP image optimization"
node scripts/github-release.js feature "Implement user dashboard with analytics"
```

#### **Fix Release / Реліз з виправленнями:**
```bash
npm run release:fix "Fix login authentication bug"
node scripts/github-release.js fix "Resolve mobile navigation issues"
```

### What Happens During Release / Що відбувається під час релізу

1. **Version Update** - Updates `package.json` version
2. **CHANGELOG Update** - Adds new version section with description
3. **Git Commit** - Creates commit with release changes
4. **Git Tag** - Creates annotated tag (v1.0.0)
5. **Git Push** - Pushes changes and tags to remote repository

### CHANGELOG Structure / Структура CHANGELOG

```markdown
## [1.1.0] - 2025-01-15

### Added
- Add WebP image optimization

## [1.0.1] - 2025-01-14

### Fixed
- Fix login authentication bug
```

### Important Notes / Важливі примітки

- ✅ **CHANGELOG updates ONLY during releases** - no automatic updates during development
- ✅ **Three release types only** - major, feature, fix
- ✅ **Automatic version bumping** - no manual version management needed
- ✅ **GitHub integration** - creates proper GitHub releases with tags
- ✅ **Clean workflow** - simple and predictable release process

---

## 🇺🇦 Українська

### Огляд / Overview

Проект тепер використовує спрощену систему GitHub релізів з тільки трьома типами релізів. CHANGELOG.md автоматично оновлюється тільки під час GitHub релізів.

### Типи релізів / Release Types

| Тип | Опис | Зміна версії | Приклад |
|-----|------|--------------|---------|
| **major** | Критичні зміни | 1.0.0 → 2.0.0 | Зміни API, великий рефакторинг |
| **feature** | Нові функції | 1.0.0 → 1.1.0 | Нова функціональність, покращення |
| **fix** | Виправлення багів | 1.0.0 → 1.0.1 | Виправлення помилок, патчі безпеки |

### Використання / Usage

#### **Мажорний реліз / Major Release:**
```bash
npm run release:major "Критичні зміни API"
node scripts/github-release.js major "Повне переписування системи автентифікації"
```

#### **Реліз з функціями / Feature Release:**
```bash
npm run release:feature "Додано оптимізацію зображень WebP"
node scripts/github-release.js feature "Реалізовано панель користувача з аналітикою"
```

#### **Реліз з виправленнями / Fix Release:**
```bash
npm run release:fix "Виправлено баг автентифікації входу"
node scripts/github-release.js fix "Вирішено проблеми мобільної навігації"
```

### Що відбувається під час релізу / What Happens During Release

1. **Оновлення версії** - Оновлює версію в `package.json`
2. **Оновлення CHANGELOG** - Додає нову секцію версії з описом
3. **Git коміт** - Створює коміт зі змінами релізу
4. **Git тег** - Створює анотований тег (v1.0.0)
5. **Git пуш** - Відправляє зміни та теги в віддалений репозиторій

### Структура CHANGELOG / CHANGELOG Structure

```markdown
## [1.1.0] - 2025-01-15

### Added
- Додано оптимізацію зображень WebP

## [1.0.1] - 2025-01-14

### Fixed
- Виправлено баг автентифікації входу
```

### Важливі примітки / Important Notes

- ✅ **CHANGELOG оновлюється ТІЛЬКИ під час релізів** - без автоматичних оновлень під час розробки
- ✅ **Тільки три типи релізів** - major, feature, fix
- ✅ **Автоматичне збільшення версії** - не потрібно ручного управління версіями
- ✅ **Інтеграція з GitHub** - створює правильні GitHub релізи з тегами
- ✅ **Чистий робочий процес** - простий та передбачуваний процес релізу

---

## 🎯 Benefits / Переваги

### 🇺🇸 English
- **Simplicity**: Only three release types to remember
- **Automation**: CHANGELOG updates automatically during releases
- **GitHub Integration**: Creates proper GitHub releases with tags
- **Clean History**: No development noise in CHANGELOG
- **Predictable**: Clear versioning scheme (major.minor.patch)

### 🇺🇦 Українська
- **Простота**: Тільки три типи релізів для запам'ятовування
- **Автоматизація**: CHANGELOG оновлюється автоматично під час релізів
- **Інтеграція з GitHub**: Створює правильні GitHub релізи з тегами
- **Чиста історія**: Без шуму розробки в CHANGELOG
- **Передбачуваність**: Зрозуміла схема версіонування (major.minor.patch)
