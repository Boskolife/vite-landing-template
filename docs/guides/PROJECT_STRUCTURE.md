# 📁 Структура проекта

## 📋 Обзор

Подробное описание структуры файлов и папок проекта Vite Landing Template.

## 🗂️ Корневая структура

```
vite-landing-template/
├── src/                          # Исходный код
├── public/                       # Статические файлы
├── dist/                         # Сборка (генерируется)
├── docs/                         # Документация
├── node_modules/                 # Зависимости (генерируется)
├── .gitignore                    # Git исключения
├── package.json                  # Зависимости и скрипты
├── package-lock.json             # Заблокированные версии
├── vite.config.js                # Конфигурация Vite
├── eslint.config.js              # Конфигурация ESLint
├── .prettierrc                   # Конфигурация Prettier
├── getHTMLFileNames.js           # Скрипт для получения HTML файлов
└── README.md                     # Основная документация
```

## 📂 Папка src/

```
src/
├── index.html                    # Главная страница
├── js/                          # JavaScript код
│   ├── main.js                  # Точка входа приложения
│   └── utils/                   # Утилиты
│       └── webp.js              # WebP утилиты
├── styles/                      # SCSS стили
│   ├── main.scss                # Главный файл стилей
│   ├── base/                    # Базовые стили
│   │   ├── _variables.scss      # Переменные
│   │   ├── _mixins.scss         # Миксины
│   │   ├── _functions.scss      # Функции
│   │   ├── _adaptive.scss       # Адаптивные миксины
│   │   ├── _fonts.scss          # Шрифты
│   │   ├── _reset.scss          # CSS сброс
│   │   ├── _typography.scss     # Типографика
│   │   ├── _forms.scss          # Стили форм
│   │   ├── _helpers.scss        # Утилитарные классы
│   │   └── _webp.scss           # WebP миксины
│   ├── layout/                  # Стили макета
│   │   ├── _header.scss         # Шапка сайта
│   │   ├── _footer.scss         # Подвал сайта
│   │   └── _common.scss         # Общие стили макета
│   └── vendors/                 # Сторонние библиотеки
│       ├── _normalize.scss      # Normalize.css
│       └── _include-media.scss  # Медиа-запросы
├── templates/                   # Handlebars шаблоны
│   ├── header.html              # Шаблон шапки
│   └── footer.html              # Шаблон подвала
└── examples/                    # Примеры использования
    └── webp-examples.html      # Примеры WebP
```

## 📂 Папка public/

```
public/
├── fonts/                       # Шрифты
│   └── SpaceMono/              # Шрифт Space Mono
│       ├── SpaceMono-Bold.eot
│       ├── SpaceMono-Bold.svg
│       ├── SpaceMono-Bold.ttf
│       ├── SpaceMono-Bold.woff
│       ├── SpaceMono-Bold.woff2
│       └── ... (другие варианты)
├── images/                      # Все изображения проекта
│   ├── logo.png                # Логотип
│   ├── hero-bg.jpg             # Фоновые изображения
│   ├── icon-*.png              # Иконки
│   └── gallery-*.jpg           # Изображения галереи
└── robots.txt                   # SEO настройки
```

## 📂 Папка docs/

```
docs/
├── README.md                    # Главная документация
├── WEBP_GUIDE.md               # Руководство по WebP
├── technologies/               # Документация по технологиям
│   ├── VITE.md                 # Руководство по Vite
│   ├── SCSS.md                 # Руководство по SCSS
│   ├── HANDLEBARS.md           # Руководство по Handlebars
│   ├── JAVASCRIPT.md           # Руководство по JavaScript
│   └── WEBP.md                 # Руководство по WebP
├── guides/                     # Руководства
│   ├── QUICK_START.md          # Быстрый старт
│   ├── DEVELOPMENT.md          # Руководство по разработке
│   ├── PROJECT_STRUCTURE.md    # Структура проекта
│   └── DEPLOYMENT.md           # Руководство по деплою
└── examples/                   # Примеры кода
```

## 📂 Папка dist/ (генерируется)

```
dist/
├── index.html                   # Скомпилированная главная страница
├── assets/                      # Скомпилированные ресурсы
│   ├── main-[hash].css          # Скомпилированные стили
│   ├── main-[hash].js           # Скомпилированный JavaScript
│   └── vendor-[hash].js         # Вендорные библиотеки
├── fonts/                       # Скопированные шрифты
├── images/                      # Оптимизированные изображения
└── robots.txt                   # Скопированный robots.txt
```

## 📄 Описание ключевых файлов

### Конфигурационные файлы

#### `vite.config.js`
Основная конфигурация Vite:
- Настройки сборки
- Плагины (Handlebars, WebP, оптимизация изображений)
- Сервер разработки
- Оптимизация продакшена

#### `package.json`
Метаданные проекта:
- Зависимости
- Скрипты для сборки и разработки
- Настройки ESLint и Prettier

#### `eslint.config.js`
Конфигурация линтера:
- Правила для JavaScript
- Настройки для современного синтаксиса

### Основные файлы

#### `src/index.html`
Главная страница:
- Структура HTML
- Подключение стилей и скриптов
- Handlebars шаблоны

#### `src/js/main.js`
Точка входа JavaScript:
- Инициализация приложения
- Подключение утилит
- Основная логика

#### `src/styles/main.scss`
Главный файл стилей:
- Импорт всех SCSS модулей
- Порядок загрузки стилей

### Шаблоны

#### `src/templates/header.html`
Шаблон шапки сайта:
- Навигационное меню
- Логотип
- Переменные Handlebars

#### `src/templates/footer.html`
Шаблон подвала:
- Копирайт
- Ссылки
- Переменные Handlebars

## 🔧 Настройка структуры

### Добавление новых страниц
1. Создайте HTML файл в `src/`
2. Используйте структуру из `index.html`
3. Обновите `getHTMLFileNames.js` если нужно

### Добавление новых стилей
1. Создайте SCSS файл в соответствующей папке
2. Импортируйте в `main.scss`
3. Используйте правильный порядок импортов

### Добавление JavaScript модулей
1. Создайте файл в `src/js/` или `src/js/utils/`
2. Экспортируйте функции
3. Импортируйте в `main.js`

### Добавление изображений
1. Поместите все изображения в `public/images/`
2. Используйте WebP оптимизацию
3. Добавьте `data-webp` атрибуты для fallback

## 📋 Соглашения по именованию

### Файлы
- **SCSS**: `_filename.scss` для партиалов
- **JavaScript**: `camelCase.js` для файлов
- **HTML**: `kebab-case.html` для страниц
- **Изображения**: `kebab-case.ext` для файлов

### CSS классы
- **BEM методология**: `.block__element--modifier`
- **Компоненты**: `.component-name`
- **Утилиты**: `.u-utility-name`

### JavaScript
- **Переменные**: `camelCase`
- **Функции**: `camelCase`
- **Константы**: `UPPER_SNAKE_CASE`
- **Классы**: `PascalCase`

## 🚨 Важные правила

### Порядок импортов в SCSS
```scss
// 1. Переменные (должны быть первыми)
@use 'base/variables' as *;

// 2. Внешние библиотеки
@use 'vendors/include-media' as *;
@use 'vendors/normalize';

// 3. Функции и миксины
@use 'base/functions' as *;
@use 'base/mixins' as *;

// 4. Базовые стили
@use 'base/reset' as *;
@use 'base/typography' as *;

// 5. Компоненты и макет
@use 'layout/header' as *;
@use 'layout/footer' as *;
```

### Порядок импортов в JavaScript
```javascript
// 1. Стили
import '../styles/main.scss';

// 2. Утилиты
import { initWebPSupport } from './utils/webp.js';

// 3. Библиотеки
import Swiper from 'swiper';

// 4. Основная логика
document.addEventListener('DOMContentLoaded', () => {
  // инициализация
});
```

## 📚 Дополнительная документация

- **[Быстрый старт](QUICK_START.md)** - Начало работы
- **[Разработка](DEVELOPMENT.md)** - Процесс разработки
- **[Технологии](../technologies/)** - Подробные руководства

---

**Понятная структура - основа хорошего проекта! 📁**
