# Changelog / Журнал змін

## 🇺🇸 English
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🇺🇦 Українська
Всі значні зміни в цьому проекті будуть документовані в цьому файлі.

Формат заснований на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
і цей проект дотримується [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased] - In Development / [Не випущено] - В розробці

### Added / Додано
- feat: replaced Roboto font with Space Mono with full character set / feat: замінено шрифт Roboto на Space Mono з повним набором начертань
- feat: added extended noindex settings to prevent site indexing / feat: додано розширені налаштування noindex для запобігання індексації сайту

### Technical / Технічна частина
- chore: added .cursor/rules to .gitignore to exclude service files / chore: додано .cursor/rules в .gitignore для виключення службових файлів
- chore: fixed CHANGELOG.md update logic - now updates before commit / chore: виправлено логіку оновлення CHANGELOG.md - тепер оновлюється до коміту

---

- chore: обновление проекта
  - Изменены файлы: CHANGELOG.md

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
- Добавлена поддержка TypeScript
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
- Поддержка TypeScript
- SCSS с модульной системой
- Handlebars шаблоны
- Базовая конфигурация сборки

### Техническая часть (Technical)
- Настроена сборка с Vite
- Добавлена поддержка SCSS модулей
- Базовая конфигурация TypeScript
- Структура стилей с include-media

---

## 🔧 Исправленные критические проблемы

### 1. Несоответствие файлов JavaScript/TypeScript
**Проблема**: В проекте были файлы как .js, так и .ts, что создавало путаницу.

**Решение**: 
- Удалены все .js файлы из src/
- Оставлены только .ts файлы
- Обновлена конфигурация TypeScript

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

- ✅ Современный стек технологий (Vite, TypeScript, SCSS)
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
- Код соответствует лучшим практикам TypeScript и SCSS

## [Не выпущено] - В разработке

### Техническая часть (Technical)
- chore: обновление проекта
  - Изменены файлы: CHANGELOG.md, LICENSE, readme.md

