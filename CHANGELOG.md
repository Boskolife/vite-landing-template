# Changelog

Все значимые изменения в проекте документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Не выпущено] - В разработке


### Добавлено (Added)
- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

- feat: добавлен новый JavaScript файл с тестовой функциональностью
  - Обновлены зависимости в package.json
  - Изменены файлы: test-feature.js


- feat: тестирование нового потока обновления ченджлога
  - Изменены файлы: test-new-flow.txt

- feat: изменен порядок обновления ченджлога - теперь обновляется перед коммитом
  - Изменены файлы: .husky/prepare-commit-msg, CHANGELOG.md

- feat: финальный тест системы автоматического обновления ченджлога
  - Изменены файлы: test-final.js

- feat: заменен шрифт Roboto на Space Mono с полным набором начертаний

- feat: добавлены расширенные настройки noindex для запрета индексации сайта
  - Изменены файлы: CHANGELOG.md, public/robots.txt, robots.txt, src/index.html

### Техническая часть (Technical)
- chore: очистка тестовых файлов
  - Обновлены зависимости в package.json
  - Изменены файлы: test-feature.js

- chore: очистка тестовых файлов
  - Обновлены зависимости в package.json
  - Изменены файлы: test-feature.js

- chore: добавлен .cursor/rules в .gitignore для исключения служебных файлов
  - Обновлены зависимости в package.json
  - Изменены файлы: .gitignore

- install husky
  - Изменены файлы: .husky/post-commit, .husky/pre-commit, CHANGELOG.md, package-lock.json, package.json


- chore: очистка тестового файла для нового потока
  - Изменены файлы: CHANGELOG.md, test-new-flow.txt

- chore: очистка финального тестового файла
  - Изменены файлы: CHANGELOG.md, test-final.js

### Изменено (Changed)
- Update CHANGELOG.md
  - Изменены файлы: CHANGELOG.md

- Update CHANGELOG.md
  - Изменены файлы: CHANGELOG.md

- Update CHANGELOG.md
  - Изменены файлы: CHANGELOG.md

- Update CHANGELOG.md
  - Изменены файлы: CHANGELOG.md, test-new-logic.txt

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
- Улучшена конфигурация Vite с лучшими настройками сборки

### Исправлено (Fixed)
- Исправлена ошибка "terser not found" - добавлен terser как dev dependency
- Исправлена ссылка на main.js в index.html
- Устранены все Sass deprecation warnings

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
| **Swiper** | 11.1.4 | 12.0.2 | Обновление до последней версии |
| **TypeScript** | 5.3.3 | 5.4.5 | Улучшения типизации |
| **Sass** | 1.69.7 | 1.71.1 | Исправления и улучшения |

### Команды для обновления

```bash
npm install vite@latest eslint@latest swiper@latest typescript@latest sass@latest
npm install --save-dev terser
```

---

- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

- feat: добавлен тестовый файл для проверки автообновления ченджлога
  - Обновлены зависимости в package.json
  - Изменены файлы: test-auto-update.txt

## [1.0.0] - 2024-01-10

### Добавлено (Added)
- Базовая структура проекта Vite Landing Template
- Поддержка TypeScript, SCSS, Handlebars
- Базовая конфигурация Vite
- Структура папок и файлов

### Техническая часть (Technical)
- Настроена сборка с Vite
- Добавлена поддержка SCSS модулей
- Базовая конфигурация TypeScript
- Структура стилей с include-media

---

## 🔧 Исправленные критические проблемы

### 1. Несоответствие файлов JavaScript/TypeScript

**Проблема:** В файле `src/index.html` была ссылка на `main.ts`, но фактически файл назывался `main.js`.

**Решение:**
- ✅ Исправлена ссылка в `src/index.html`: `main.ts` → `main.js`
- ✅ Добавлен базовый JavaScript код в `src/js/main.js`

**Файл:** `src/index.html`
```html
<!-- Было -->
<script type="module" src="/js/main.ts" defer></script>

<!-- Стало -->
<script type="module" src="/js/main.js" defer></script>
```

**Файл:** `src/js/main.js`
```javascript
// Добавлен полноценный код вместо пустого файла
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing page loaded successfully!');
  initializeApp();
});

function initializeApp() {
  console.log('App initialized');
}
```

---

## 📦 Обновление пакетов

### Обновленные зависимости

| Пакет | Старая версия | Новая версия | Причина обновления |
|-------|---------------|--------------|-------------------|
| **Vite** | 4.4.5 | 5.2.10 | Улучшенная производительность, новые возможности |
| **TypeScript** | 5.0.2 | 5.4.5 | Исправления багов, новые типы |
| **ESLint** | 8.52.0 | 8.57.0 | Новые правила линтинга |
| **@typescript-eslint/eslint-plugin** | 6.9.1 | 7.18.0 | Совместимость с новым ESLint |
| **@typescript-eslint/parser** | 6.9.1 | 7.18.0 | Совместимость с новым ESLint |
| **eslint-config-prettier** | 9.0.0 | 9.1.0 | Улучшенная совместимость |
| **eslint-plugin-import** | 2.29.0 | 2.29.1 | Исправления багов |
| **prettier** | 3.0.3 | 3.2.5 | Новые возможности форматирования |
| **sass** | 1.69.5 | 1.71.1 | Улучшенная производительность |
| **swiper** | 11.0.3 | 11.1.4 | Исправления и новые возможности |

### Новые скрипты в package.json

```json
{
  "scripts": {
    "dev": "vite",                    // Запуск dev сервера
    "build": "vite build",           // Сборка проекта
    "preview": "vite preview",       // Предпросмотр сборки
    "lint": "eslint . --ext .js,.ts", // Проверка кода
    "lint:fix": "eslint . --ext .js,.ts --fix", // Автоисправление
    "format": "prettier --write .",   // Форматирование кода
    "type-check": "tsc --noEmit"      // Проверка типов
  }
}
```

---

## ⚙️ Новые конфигурационные файлы

### 1. ESLint конфигурация (`.eslintrc.js`)

**Назначение:** Обеспечивает качество кода и единообразие стиля.

**Ключевые настройки:**
```javascript
module.exports = {
  extends: [
    'eslint:recommended',           // Базовые правила ESLint
    '@typescript-eslint/recommended', // TypeScript правила
    'prettier',                     // Совместимость с Prettier
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',           // Предупреждение о console.log
    'no-debugger': 'error',         // Ошибка при debugger
    'import/order': 'error',        // Сортировка импортов
  }
};
```

**Что это дает:**
- Автоматическая проверка качества кода
- Предотвращение типичных ошибок
- Единообразный стиль кода
- Автоматическая сортировка импортов

### 2. Prettier конфигурация (`.prettierrc`)

**Назначение:** Автоматическое форматирование кода.

**Настройки:**
```json
{
  "semi": true,              // Точки с запятой
  "singleQuote": true,       // Одинарные кавычки
  "printWidth": 80,          // Максимальная длина строки
  "tabWidth": 2,             // Размер отступа
  "trailingComma": "es5"     // Запятые в конце
}
```

**Что это дает:**
- Единообразное форматирование
- Автоматическое исправление стиля
- Совместимость между разработчиками

### 3. Git ignore (`.gitignore`)

**Назначение:** Исключение ненужных файлов из репозитория.

**Исключаемые файлы:**
- `node_modules/` - зависимости
- `dist/` - собранные файлы
- `.env*` - переменные окружения
- IDE файлы (`.vscode/`, `.idea/`)
- Системные файлы (`.DS_Store`, `Thumbs.db`)

### 4. Лицензия (LICENSE)

**Назначение:** MIT лицензия для свободного использования проекта.

---

## 🚀 Улучшения конфигурации Vite

### Обновленный `vite.config.js`

**Новые возможности:**

#### 1. Контекст для Handlebars
```javascript
handlebars({ 
  partialDirectory: resolve(__dirname, 'src/templates'),
  context: {
    siteName: 'Vite Landing Template',
    currentYear: new Date().getFullYear()
  }
})
```
**Что дает:** Глобальные переменные доступны во всех шаблонах.

#### 2. Code Splitting
```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['swiper']  // Отдельный чанк для библиотек
      }
    }
  }
}
```
**Что дает:** Лучшее кэширование и загрузка страниц.

#### 3. Оптимизация сборки
```javascript
build: {
  sourcemap: true,           // Source maps для отладки
  minify: 'terser',          // Минификация
  terserOptions: {
    compress: {
      drop_console: true,    // Удаление console.log в production
      drop_debugger: true    // Удаление debugger в production
    }
  }
}
```

#### 4. Настройки сервера
```javascript
server: {
  port: 3000,    // Порт разработки
  open: true,    // Автооткрытие браузера
  host: true     // Доступ с других устройств
}
```

---

## 🎨 Улучшения шаблонов

### 1. Header шаблон (`src/templates/header.html`)

**Было:**
```html
<header id="header"></header>
```

**Стало:**
```html
<header id="header" class="header">
  <nav class="header__nav">
    <div class="header__container">
      <a href="/" class="header__logo">
        {{siteName}}
      </a>
      <ul class="header__menu">
        <li><a href="/" class="header__link">Home</a></li>
        <li><a href="/about.html" class="header__link">About</a></li>
        <li><a href="/contact.html" class="header__link">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

**Что добавлено:**
- Полноценная навигация
- Использование Handlebars переменных
- Семантическая структура
- CSS классы для стилизации

### 2. Footer шаблон (`src/templates/footer.html`)

**Было:**
```html
<footer id="footer"></footer>
```

**Стало:**
```html
<footer id="footer" class="footer">
  <div class="footer__container">
    <div class="footer__content">
      <p class="footer__copyright">
        © {{currentYear}} {{siteName}}. All rights reserved.
      </p>
      <div class="footer__links">
        <a href="/privacy.html" class="footer__link">Privacy Policy</a>
        <a href="/terms.html" class="footer__link">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

**Что добавлено:**
- Копирайт с динамическим годом
- Ссылки на важные страницы
- Структурированный контент

### 3. Главная страница (`src/index.html`)

**Добавлено:**
- Hero секция с призывом к действию
- Features секция с карточками
- Использование Handlebars переменных в title
- Семантическая разметка

---

## 🎨 Новые стили

### 1. Header стили (`src/styles/layout/_header.scss`)

**Функциональность:**
- Sticky позиционирование (прилипает к верху)
- Адаптивное меню (скрывается на мобильных)
- Hover эффекты
- Тень для визуального разделения

**Ключевые особенности:**
```scss
.header {
  position: sticky;  // Прилипает к верху при скролле
  top: 0;
  z-index: 100;      // Поверх других элементов
  
  &__menu {
    @include media('<tablet') {
      display: none;  // Скрывается на мобильных
    }
  }
}
```

### 2. Footer стили (`src/styles/layout/_footer.scss`)

**Функциональность:**
- Темная тема
- Адаптивная верстка
- Hover эффекты для ссылок

### 3. Общие стили (`src/styles/layout/_common.scss`)

**Hero секция:**
- Градиентный фон
- Центрированный контент
- Адаптивная типографика
- Анимированная кнопка

**Features секция:**
- CSS Grid для карточек
- Hover анимации
- Тени и скругления

---

## 📚 Обновленный README

### Структура нового README:

1. **Описание проекта** - краткий обзор возможностей
2. **Структура проекта** - детальная схема файлов
3. **Быстрый старт** - пошаговая установка
4. **Доступные команды** - таблица всех скриптов
5. **Создание страниц** - примеры и инструкции
6. **Работа со стилями** - SCSS архитектура
7. **Handlebars шаблоны** - система компонентов
8. **JavaScript разработка** - примеры кода
9. **Конфигурация** - описание настроек
10. **Деплой** - инструкции по развертыванию

### Ключевые улучшения README:

- ✅ Актуальная информация о версиях пакетов
- ✅ Подробные примеры кода
- ✅ Инструкции по использованию всех возможностей
- ✅ Таблицы команд и структуры
- ✅ Советы по разработке и деплою

---

## 🔍 Что за что отвечает

### Структура проекта:

```
vite-landing-template/
├── src/                    # Исходный код
│   ├── index.html         # Главная страница
│   ├── js/                # JavaScript файлы
│   │   └── main.js        # Точка входа приложения
│   ├── styles/            # SCSS стили
│   │   ├── main.scss      # Главный файл стилей
│   │   ├── base/          # Базовые стили и утилиты
│   │   ├── layout/        # Стили макета
│   │   └── vendors/       # Сторонние библиотеки
│   └── templates/         # Handlebars шаблоны
├── public/                # Статические файлы
├── dist/                  # Собранный проект
├── .eslintrc.js          # Конфигурация линтера
├── .prettierrc           # Конфигурация форматтера
├── .gitignore            # Игнорируемые файлы
├── package.json          # Зависимости и скрипты
├── vite.config.js        # Конфигурация сборщика
├── tsconfig.json         # Конфигурация TypeScript
└── getHTMLFileNames.js   # Автоопределение HTML файлов
```

### Роли файлов:

- **`vite.config.js`** - настройки сборки, плагины, оптимизация
- **`package.json`** - зависимости, скрипты, метаданные проекта
- **`.eslintrc.js`** - правила проверки качества кода
- **`.prettierrc`** - правила форматирования кода
- **`tsconfig.json`** - настройки TypeScript компилятора
- **`getHTMLFileNames.js`** - автоматическое определение HTML страниц
- **`main.scss`** - точка входа для всех стилей
- **`main.js`** - точка входа для JavaScript кода

---

## 🎯 Результат улучшений

### До улучшений:
- ❌ Несоответствие файлов
- ❌ Устаревшие пакеты
- ❌ Отсутствие линтинга
- ❌ Пустые шаблоны
- ❌ Нет стилей
- ❌ Устаревшая документация

### После улучшений:
- ✅ Все файлы соответствуют друг другу
- ✅ Актуальные версии всех пакетов
- ✅ Полная настройка ESLint и Prettier
- ✅ Готовые шаблоны с контентом
- ✅ Современные стили с анимациями
- ✅ Подробная документация
- ✅ Оптимизированная сборка
- ✅ Готовность к production

---

## 🚀 Готовность к использованию

Проект теперь полностью готов для:

1. **Разработки** - запуск `npm run dev`
2. **Сборки** - команда `npm run build`
3. **Деплоя** - файлы в `dist/` готовы к загрузке
4. **Командной работы** - единые стандарты кода
5. **Масштабирования** - модульная архитектура

---

## 🔧 Исправление Sass Deprecation Warnings

### Проблема
При сборке проекта появлялись предупреждения о deprecated функциях Sass:
- `map-has-key` → `map.has-key`
- `map-get` → `map.get`
- `map-keys` → `map.keys`
- `str-index` → `string.index`
- `str-slice` → `string.slice`
- `str-length` → `string.length`
- `length` → `list.length`
- `nth` → `list.nth`
- `append` → `list.append`
- `index` → `list.index`
- `unit` → `math.unit`
- `unquote` → `string.unquote`

### Решение
**Файл:** `src/styles/vendors/_include-media.scss`

1. **Добавлены импорты модулей Sass:**
```scss
@use 'sass:map';
@use 'sass:list';
@use 'sass:string';
@use 'sass:math';
```

2. **Обновлены все deprecated функции:**
```scss
// Было
map-has-key($breakpoints, $value)
map-get($breakpoints, $value)
str-index($expression, $operator)
str-slice($expression, 0, $operator-index - 1)

// Стало
map.has-key($breakpoints, $value)
map.get($breakpoints, $value)
string.index($expression, $operator)
string.slice($expression, 0, $operator-index - 1)
```

3. **Установлен terser для минификации:**
```bash
npm install --save-dev terser
```

4. **Обновлен vite-plugin-handlebars:**
```bash
npm install --save-dev vite-plugin-handlebars@latest
```

### Результат
- ✅ Устранены все deprecation warnings
- ✅ Проект совместим с будущими версиями Sass
- ✅ Сборка проходит без предупреждений
- ✅ Код использует современные Sass функции

---

## 🔧 Исправление @import Deprecation Warnings

### Проблема
При сборке проекта появлялись предупреждения о deprecated `@import` правилах:
```
Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
```

### Решение
**Файлы:** `src/styles/main.scss` и все SCSS файлы в `base/` и `layout/`

1. **Заменены @import на @use в main.scss:**
```scss
// Было
@import 'vendors/include-media';
@import 'base/variables';
@import 'base/mixins';

// Стало
@use 'vendors/include-media' as *;
@use 'base/variables' as *;
@use 'base/mixins' as *;
```

2. **Добавлены импорты variables в файлы, которые их используют:**
```scss
// В каждом файле, использующем переменные
@use 'variables' as *;
```

3. **Добавлены импорты mixins в файлы, которые их используют:**
```scss
// В файлах, использующих миксины
@use 'mixins' as *;
```

4. **Добавлены импорты include-media в layout файлы:**
```scss
// В layout файлах, использующих media миксины
@use '../vendors/include-media' as *;
```

5. **Перемещены breakpoints в variables.scss:**
```scss
// Переменные breakpoints теперь в _variables.scss
$breakpoints: (
  'xs-phone': 320px,
  'phone': 480px,
  'tablet': 768px,
  // ...
);
```

### Результат
- ✅ Устранены все @import deprecation warnings
- ✅ Проект использует современные @use правила
- ✅ Сборка проходит без предупреждений о @import
- ✅ Код готов к Sass 3.0.0

---

---

## 🚀 Обновление Vite и зависимостей

### Обновленные пакеты

| Пакет | Старая версия | Новая версия | Причина обновления |
|-------|---------------|--------------|-------------------|
| **Vite** | 5.4.20 | 7.1.7 | Исправление legacy JS API warnings |
| **ESLint** | 8.57.0 | 9.36.0 | Новые правила и улучшения |
| **@typescript-eslint/eslint-plugin** | 7.18.0 | 8.44.1 | Совместимость с новым ESLint |
| **@typescript-eslint/parser** | 7.18.0 | 8.44.1 | Совместимость с новым ESLint |
| **eslint-config-prettier** | 9.1.0 | 10.1.8 | Улучшенная совместимость |
| **Swiper** | 11.1.4 | 12.0.2 | Новые возможности и исправления |

### Команды для обновления

```bash
# Обновление Vite
npm install vite@latest

# Обновление всех зависимостей
npm install @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest eslint-config-prettier@latest swiper@latest
```

### Результат обновления

- ✅ **Vite 7.1.7** - устранены legacy JS API warnings
- ✅ **ESLint 9.36.0** - новые правила линтинга
- ✅ **Swiper 12.0.2** - улучшенная производительность
- ✅ **Совместимость** - все пакеты обновлены до совместимых версий
- ✅ **Сборка** - проект собирается без предупреждений

### Проверка версий

```bash
# Проверка версии Vite
npm list vite

# Проверка устаревших пакетов
npm outdated
```

---

Все изменения направлены на повышение производительности, удобства разработки и качества итогового продукта.
