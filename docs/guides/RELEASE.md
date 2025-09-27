# Release Guide / Керівництво з релізів

## 🇺🇸 English

### Overview / Огляд

This guide explains how to create releases using the automated release script. The script handles version bumping, CHANGELOG updates, git tagging, and pushing to remote repository.

### Release Types / Типи релізів

#### 1. **Patch Release** (Bug fixes / Виправлення помилок)
```bash
# 1.0.0 → 1.0.1
npm run release patch "fix: critical bug in image optimization"
node scripts/release.js patch "fix: resolve WebP conversion issue"
```

#### 2. **Minor Release** (New features / Нові функції)
```bash
# 1.0.0 → 1.1.0
npm run release minor "feat: add dark mode support"
node scripts/release.js minor "feat: implement lazy loading for images"
```

#### 3. **Major Release** (Breaking changes / Критичні зміни)
```bash
# 1.0.0 → 2.0.0
npm run release major "feat: breaking API changes in WebP plugin"
node scripts/release.js major "feat: rewrite build system"
```

#### 4. **Custom Version** (Specific version / Конкретна версія)
```bash
# Custom version
node scripts/release.js 1.2.3 "custom: special milestone release"
node scripts/release.js 2.1.0 "custom: marketing release"
```

### Usage Examples / Приклади використання

#### Quick Commands / Швидкі команди
```bash
# Patch release (bug fix)
npm run release:patch "fix: description"

# Minor release (new feature)
npm run release:minor "feat: description"

# Major release (breaking change)
npm run release:major "feat: description"
```

#### Full Commands / Повні команди
```bash
# Full syntax
node scripts/release.js <version_type> "<description>"

# Examples
node scripts/release.js patch "fix: resolve memory leak in WebP conversion"
node scripts/release.js minor "feat: add responsive image optimization"
node scripts/release.js major "feat: breaking changes in SCSS architecture"
node scripts/release.js 1.5.0 "custom: performance improvements release"
```

### What the Script Does / Що робить скрипт

#### 1. **Version Management / Управління версіями**
- ✅ Updates `package.json` version
- ✅ Calculates new version based on type
- ✅ Supports custom version numbers

#### 2. **CHANGELOG Updates / Оновлення CHANGELOG**
- ✅ Converts `[Unreleased]` to `[X.Y.Z] - YYYY-MM-DD`
- ✅ Creates new `[Unreleased]` section
- ✅ Maintains bilingual format (Ukrainian + English)

#### 3. **Git Operations / Git операції**
- ✅ Creates commit with release message
- ✅ Creates annotated git tag
- ✅ Pushes to remote repository
- ✅ Pushes tags to remote

#### 4. **Validation / Валідація**
- ✅ Checks for clean working directory
- ✅ Validates version format
- ✅ Provides rollback instructions on failure

### Release Process / Процес релізу

#### Before Release / Перед релізом
```bash
# 1. Ensure all changes are committed
git status

# 2. Run tests and linting
npm run lint
npm run build

# 3. Check CHANGELOG.md has [Unreleased] section
```

#### During Release / Під час релізу
```bash
# Run release script
npm run release minor "feat: add new WebP optimization features"

# Script will:
# 1. Update package.json (1.0.0 → 1.1.0)
# 2. Update CHANGELOG.md ([Unreleased] → [1.1.0] - 2024-01-20)
# 3. Create git commit
# 4. Create git tag v1.1.0
# 5. Push to remote
```

#### After Release / Після релізу
```bash
# 1. Verify release on GitHub
# 2. Check tags: git tag -l
# 3. Verify CHANGELOG.md format
# 4. Test built version: npm run preview
```

### Error Handling / Обробка помилок

#### Common Issues / Типові проблеми

##### 1. **Uncommitted Changes**
```bash
❌ Error: Working directory has uncommitted changes
✅ Solution: git add . && git commit -m "message"
```

##### 2. **Invalid Version Type**
```bash
❌ Error: Invalid version type: invalid
✅ Solution: Use patch, minor, major, or custom version (1.2.3)
```

##### 3. **Missing Description**
```bash
❌ Error: Release description is required
✅ Solution: Provide description in quotes
```

#### Rollback / Відкат
```bash
# If release fails, rollback:
git reset --hard HEAD~1
git tag -d v1.1.0
```

### Best Practices / Найкращі практики

#### 1. **Version Naming / Назви версій**
- ✅ Use semantic versioning (SemVer)
- ✅ Be descriptive in release messages
- ✅ Follow conventional commit format

#### 2. **Release Frequency / Частота релізів**
- ✅ **Patch**: Weekly for bug fixes
- ✅ **Minor**: Bi-weekly for new features
- ✅ **Major**: Monthly for breaking changes

#### 3. **Description Format / Формат опису**
```bash
# Good / Добре
"fix: resolve WebP conversion memory leak"
"feat: add responsive image optimization"
"chore: update dependencies to latest versions"

# Bad / Погано
"fix stuff"
"new features"
"updates"
```

## 🇺🇦 Українська

### Огляд

Це керівництво пояснює, як створювати релізи за допомогою автоматизованого скрипта релізу. Скрипт обробляє оновлення версій, оновлення CHANGELOG, створення git тегів та відправку в віддалений репозиторій.

### Типи релізів

#### 1. **Patch Release** (Виправлення помилок)
```bash
# 1.0.0 → 1.0.1
npm run release patch "fix: критична помилка в оптимізації зображень"
node scripts/release.js patch "fix: вирішення проблеми конвертації WebP"
```

#### 2. **Minor Release** (Нові функції)
```bash
# 1.0.0 → 1.1.0
npm run release minor "feat: додано підтримку темної теми"
node scripts/release.js minor "feat: реалізовано ліниве завантаження зображень"
```

#### 3. **Major Release** (Критичні зміни)
```bash
# 1.0.0 → 2.0.0
npm run release major "feat: критичні зміни API в WebP плагіні"
node scripts/release.js major "feat: переписано систему збірки"
```

#### 4. **Custom Version** (Конкретна версія)
```bash
# Користувацька версія
node scripts/release.js 1.2.3 "custom: спеціальний реліз віхи"
node scripts/release.js 2.1.0 "custom: маркетинговий реліз"
```

### Приклади використання

#### Швидкі команди
```bash
# Patch реліз (виправлення помилки)
npm run release:patch "fix: опис"

# Minor реліз (нова функція)
npm run release:minor "feat: опис"

# Major реліз (критична зміна)
npm run release:major "feat: опис"
```

#### Повні команди
```bash
# Повний синтаксис
node scripts/release.js <тип_версії> "<опис>"

# Приклади
node scripts/release.js patch "fix: вирішення витоку пам'яті в конвертації WebP"
node scripts/release.js minor "feat: додано адаптивну оптимізацію зображень"
node scripts/release.js major "feat: критичні зміни в SCSS архітектурі"
node scripts/release.js 1.5.0 "custom: реліз покращень продуктивності"
```

### Що робить скрипт

#### 1. **Управління версіями**
- ✅ Оновлює версію в `package.json`
- ✅ Обчислює нову версію на основі типу
- ✅ Підтримує користувацькі номери версій

#### 2. **Оновлення CHANGELOG**
- ✅ Перетворює `[Unreleased]` на `[X.Y.Z] - YYYY-MM-DD`
- ✅ Створює нову секцію `[Unreleased]`
- ✅ Підтримує двомовний формат (українська + англійська)

#### 3. **Git операції**
- ✅ Створює коміт з повідомленням релізу
- ✅ Створює анотований git тег
- ✅ Відправляє в віддалений репозиторій
- ✅ Відправляє теги в віддалений

#### 4. **Валідація**
- ✅ Перевіряє чистий робочий каталог
- ✅ Валідує формат версії
- ✅ Надає інструкції відкату при збої

### Процес релізу

#### Перед релізом
```bash
# 1. Переконайтеся, що всі зміни закомічені
git status

# 2. Запустіть тести та лінтинг
npm run lint
npm run build

# 3. Перевірте, що CHANGELOG.md має секцію [Unreleased]
```

#### Під час релізу
```bash
# Запустіть скрипт релізу
npm run release minor "feat: додано нові функції оптимізації WebP"

# Скрипт буде:
# 1. Оновлювати package.json (1.0.0 → 1.1.0)
# 2. Оновлювати CHANGELOG.md ([Unreleased] → [1.1.0] - 2024-01-20)
# 3. Створювати git коміт
# 4. Створювати git тег v1.1.0
# 5. Відправляти в віддалений
```

#### Після релізу
```bash
# 1. Перевірте реліз на GitHub
# 2. Перевірте теги: git tag -l
# 3. Перевірте формат CHANGELOG.md
# 4. Протестуйте зібрану версію: npm run preview
```

### Обробка помилок

#### Типові проблеми

##### 1. **Незакомічені зміни**
```bash
❌ Помилка: Робочий каталог має незакомічені зміни
✅ Рішення: git add . && git commit -m "повідомлення"
```

##### 2. **Неправильний тип версії**
```bash
❌ Помилка: Неправильний тип версії: invalid
✅ Рішення: Використовуйте patch, minor, major або користувацьку версію (1.2.3)
```

##### 3. **Відсутній опис**
```bash
❌ Помилка: Опис релізу обов'язковий
✅ Рішення: Надайте опис в лапках
```

#### Відкат
```bash
# Якщо реліз не вдався, відкат:
git reset --hard HEAD~1
git tag -d v1.1.0
```

### Найкращі практики

#### 1. **Назви версій**
- ✅ Використовуйте семантичне версіонування (SemVer)
- ✅ Будьте описовими в повідомленнях релізу
- ✅ Дотримуйтесь формату conventional commit

#### 2. **Частота релізів**
- ✅ **Patch**: Щотижня для виправлень помилок
- ✅ **Minor**: Раз на два тижні для нових функцій
- ✅ **Major**: Щомісяця для критичних змін

#### 3. **Формат опису**
```bash
# Добре
"fix: вирішення витоку пам'яті конвертації WebP"
"feat: додано адаптивну оптимізацію зображень"
"chore: оновлено залежності до останніх версій"

# Погано
"виправлення речей"
"нові функції"
"оновлення"
```

## 📚 Related Documentation / Пов'язана документація

- [CHANGELOG.md](../../CHANGELOG.md) - Журнал змін
- [PROJECT_RULES.md](../../PROJECT_RULES.md) - Правила проекту
- [DEVELOPMENT.md](DEVELOPMENT.md) - Керівництво з розробки
- [DEPLOYMENT.md](DEPLOYMENT.md) - Керівництво з деплою
