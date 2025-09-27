# Changelog / Журнал змін

## 🇺🇸 English
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🇺🇦 Українська
Всі значні зміни в цьому проекті будуть документовані в цьому файлі.

Формат заснований на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
і цей проект дотримується [Semantic Versioning](https://semver.org/lang/ru/).

## [1.1.0] - 2025-09-27

### Changed / Змінено
- feat: migrated project from TypeScript to JavaScript / feat: мігровано проект з TypeScript на JavaScript
- feat: updated all configuration files for JavaScript support / feat: оновлено всі конфігураційні файли для підтримки JavaScript
- feat: removed TypeScript dependencies and tsconfig.json / feat: видалено TypeScript залежності та tsconfig.json
- feat: updated ESLint configuration for JavaScript only / feat: оновлено конфігурацію ESLint тільки для JavaScript

### Added / Додано
- feat: replaced Roboto font with Space Mono with full character set / feat: замінено шрифт Roboto на Space Mono з повним набором начертань
- feat: added extended noindex settings to prevent site indexing / feat: додано розширені налаштування noindex для запобігання індексації сайту
- feat: added WebP image optimization with automatic conversion / feat: додано оптимізацію зображень WebP з автоматичною конвертацією
- feat: added custom Vite plugin for WebP conversion / feat: додано користувацький Vite плагін для конвертації WebP
- feat: added comprehensive documentation structure in docs/ folder / feat: додано комплексну структуру документації в папці docs/
- feat: added multilingual documentation support (Ukrainian + English) / feat: додано підтримку багатомовної документації (українська + англійська)
- feat: added JavaScript utilities for WebP detection and support / feat: додано JavaScript утиліти для виявлення та підтримки WebP
- feat: added SCSS mixins for WebP background images / feat: додано SCSS міксини для WebP фонових зображень

### Technical / Технічна частина
- chore: added .cursor/rules to .gitignore to exclude service files / chore: додано .cursor/rules в .gitignore для виключення службових файлів
- chore: fixed CHANGELOG.md update logic - now updates before commit / chore: виправлено логіку оновлення CHANGELOG.md - тепер оновлюється до коміту
- feat: integrated vite-plugin-imagemin for image optimization / feat: інтегровано vite-plugin-imagemin для оптимізації зображень
- feat: added Sharp library for high-performance WebP conversion / feat: додано бібліотеку Sharp для високопродуктивної конвертації WebP
- feat: created custom WebP conversion plugin with build hooks / feat: створено користувацький плагін конвертації WebP з хуками збірки

---

- chore: обновление проекта
  - Изменены файлы: CHANGELOG.md

- chore: обновление проекта
  - Изменены файлы: .husky/pre-commit

- chore: обновление проекта
  - Изменены файлы: .husky/pre-commit, CHANGELOG.md

- chore: обновление проекта
  - Изменены файлы: .husky/pre-commit

- chore: обновлена конфигурация
  - Обновлены зависимости в package.json
  - Изменены файлы: docs/guides/RELEASE.md, package.json, scripts/release.js

## [1.2.0] - 2024-01-15

### Исправлено (Fixed)
- Исправлены все Sass deprecation warnings в include-media библиотеке
- Заменены устаревшие функции: `map-has-key`, `map-get`, `str-index`, `str-slice`, `length`, `nth`, `append`, `unit`, `unquote`, `map-merge`
- Исправлен порядок @use правил в SCSS файлах
- Устранена ошибка "at-rule or selector expected" в _include-media.scss

### Изменено (Changed)
- Обновлена конфигурация ESLint с версии 8 на 9
- Создан новый eslint.config.js для ESLint 9
- Убраны console.log из production кода

### Техническая часть (Technical)
- Добавлены современные импорты модулей Sass: `@use 'sass:map'`, `@use 'sass:list'`, `@use 'sass:string'`, `@use 'sass:math'`
- Обновлены функции в _mixins.scss и _functions.scss для использования модульных функций
- Добавлены глобальные переменные document и window в ESLint конфигурацию
- Удалены неиспользуемые eslint-disable директивы

### Результат
- ✅ Проект собирается без ошибок и предупреждений
- ✅ ESLint не находит проблем
- ✅ Все Sass функции используют современный синтаксис
- ✅ Dev сервер запускается без предупреждений

---

## [1.1.0] - 2024-01-15

### Добавлено (Added)
- Полная поддержка Handlebars шаблонов
- Улучшенная структура SCSS с модульной системой
- Новые компоненты: header, footer, hero section, features section
- Конфигурация ESLint и Prettier
- Лицензия MIT
- Файл .gitignore

### Изменено (Changed)
- Обновлен Vite с 5.4.20 до 7.1.7
- Обновлен ESLint с 8.57.0 до 9.36.0
- Обновлен Swiper с 11.1.4 до 12.0.2

### Техническая часть (Technical)
- Заменены все @import правила на @use в SCSS
- Добавлена поддержка JavaScript ES6+
- Настроена оптимизация сборки с Terser
- Добавлены source maps для разработки

### Обновленные пакеты

| Пакет | Старая версия | Новая версия | Причина обновления |
|-------|---------------|--------------|-------------------|
| **Vite** | 5.4.20 | 7.1.7 | Исправление legacy JS API warnings |
| **ESLint** | 8.57.0 | 9.36.0 | Новые правила линтинга |
| **Swiper** | 11.1.4 | 12.0.2 | Улучшения производительности |

### Команды для обновления:
```bash
npm install vite@latest eslint@latest swiper@latest
```

### Результат
- ✅ Проект собирается без ошибок
- ✅ ESLint не находит проблем
- ✅ Dev сервер запускается без предупреждений
- ✅ Все зависимости обновлены до последних версий

---

## [1.0.0] - 2024-01-10

### Добавлено (Added)
- Базовая структура проекта с Vite
- Поддержка JavaScript ES6+
- SCSS с модульной системой
- Handlebars шаблоны
- Базовая конфигурация сборки

### Техническая часть (Technical)
- Настроена сборка с Vite
- Добавлена поддержка SCSS модулей
- Базовая конфигурация JavaScript
- Структура стилей с include-media

---

## 🔧 Исправленные критические проблемы

### 1. Миграция с TypeScript на JavaScript
**Проблема**: Проект был настроен на TypeScript, но нужно было перейти на чистый JavaScript.

**Решение**: 
- Удалены все TypeScript зависимости
- Обновлена конфигурация ESLint для JavaScript
- Удален tsconfig.json
- Обновлены все упоминания TypeScript на JavaScript

### 2. Проблемы с SCSS модулями
**Проблема**: Использование устаревших @import правил в SCSS.

**Решение**:
- Заменены все @import на @use
- Добавлены современные импорты модулей Sass
- Обновлены функции для использования модульного синтаксиса

### 3. Конфигурация ESLint
**Проблема**: ESLint конфигурация была несовместима с версией 9.

**Решение**:
- Создан новый eslint.config.js
- Обновлены правила линтинга
- Добавлены глобальные переменные

---

## 📋 Инструкции по использованию

### Установка зависимостей
```bash
npm install
```

### Запуск dev сервера
```bash
npm run dev
```

### Сборка для production
```bash
npm run build
```

### Предварительный просмотр сборки
```bash
npm run preview
```

### Линтинг
```bash
npm run lint
npm run lint:fix
```

### Форматирование кода
```bash
npm run format
```

---

## 🎯 Цели проекта

- ✅ Современный стек технологий (Vite, JavaScript, SCSS)
- ✅ Быстрая разработка с hot reload
- ✅ Качественный код с линтингом и форматированием
- ✅ Оптимизированная сборка для production
- ✅ Модульная архитектура стилей
- ✅ Поддержка шаблонов Handlebars

---

## 📝 Примечания

- Проект использует современные стандарты веб-разработки
- Все зависимости обновлены до последних стабильных версий
- Конфигурация оптимизирована для производительности
- Код соответствует лучшим практикам JavaScript и SCSS

## [Не выпущено] - В разработке

### Техническая часть (Technical)
- chore: обновление проекта
  - Изменены файлы: CHANGELOG.md, LICENSE, readme.md


- chore: обновлена конфигурация
  - Обновлены зависимости в package.json

- chore: обновлена конфигурация
  - Обновлены зависимости в package.json

- chore: обновление проекта
  - Изменены файлы: CHANGELOG.md



### Technical / Технічна частина
- chore: обновлена конфигурация
  - Обновлены зависимости в package.json
  - Изменены файлы: CHANGELOG.md, package.json

- chore: обновление проекта
  - Изменены файлы: .gitignore

## [Unreleased] - In Development / [Не випущено] - В розробці

### Added / Додано

### Changed / Змінено

### Fixed / Виправлено

### Technical / Технічна частина

