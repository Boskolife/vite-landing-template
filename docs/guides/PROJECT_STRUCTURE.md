# 📁 Project Structure / Структура проекту

## 📋 Overview / Огляд

Detailed description of the file and folder structure of the Vite Landing Template project.

Детальний опис структури файлів та папок проекту Vite Landing Template.

## 🗂️ Root Structure / Коренева структура

```
vite-landing-template/
├── src/                          # Source code / Вихідний код
├── public/                       # Static files / Статичні файли
├── dist/                         # Build output (generated) / Збірка (генерується)
├── docs/                         # Documentation / Документація
├── node_modules/                 # Dependencies (generated) / Залежності (генеруються)
├── .gitignore                    # Git exclusions / Git виключення
├── package.json                  # Dependencies and scripts / Залежності та скрипти
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

### Configuration Files / Конфігураційні файли

#### `vite.config.js`
Main Vite configuration / Основна конфігурація Vite:
- Build settings / Налаштування збірки
- Plugins (Handlebars, WebP, image optimization) / Плагіни (Handlebars, WebP, оптимізація зображень)
- Development server / Сервер розробки
- Production optimization / Оптимізація продакшену

#### `package.json`
Project metadata / Метадані проекту:
- Dependencies / Залежності
- Build and development scripts / Скрипти збірки та розробки
- ESLint and Prettier settings / Налаштування ESLint та Prettier

#### `eslint.config.js`
Linter configuration / Конфігурація лінтера:
- JavaScript rules / Правила для JavaScript
- Modern syntax settings / Налаштування для сучасного синтаксису

### Main Files / Основні файли

#### `src/index.html`
Main page / Головна сторінка:
- HTML structure / Структура HTML
- Styles and scripts connection / Підключення стилів та скриптів
- Handlebars templates / Handlebars шаблони

#### `src/js/main.js`
JavaScript entry point / Точка входу JavaScript:
- Application initialization / Ініціалізація додатку
- Utilities connection / Підключення утиліт
- Main logic / Основна логіка

#### `src/styles/main.scss`
Main styles file / Головний файл стилів:
- Import of all SCSS modules / Імпорт всіх SCSS модулів
- Styles loading order / Порядок завантаження стилів

### Templates / Шаблони

#### `src/templates/header.html`
Site header template / Шаблон шапки сайту:
- Navigation menu / Навігаційне меню
- Logo / Логотип
- Handlebars variables / Handlebars змінні

#### `src/templates/footer.html`
Site footer template / Шаблон підвалу:
- Copyright / Копірайт
- Links / Посилання
- Handlebars variables / Handlebars змінні

## 🔧 Настройка структуры

### Adding New Pages / Додавання нових сторінок
1. Создайте HTML файл в `src/`
2. Используйте структуру из `index.html`
3. Обновите `getHTMLFileNames.js` если нужно

### Adding New Styles / Додавання нових стилів
1. Создайте SCSS файл в соответствующей папке
2. Импортируйте в `main.scss`
3. Используйте правильный порядок импортов

### Adding JavaScript Modules / Додавання JavaScript модулів
1. Создайте файл в `src/js/` или `src/js/utils/`
2. Экспортируйте функции
3. Импортируйте в `main.js`

### Adding Images / Додавання зображень
1. Поместите все изображения в `public/images/`
2. Используйте WebP оптимизацию
3. Добавьте `data-webp` атрибуты для fallback

## 📋 Соглашения по именованию

### Files / Файли
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

### SCSS Import Order / Порядок імпортів в SCSS
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

### JavaScript Import Order / Порядок імпортів в JavaScript
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
