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
├── package-lock.json             # Locked versions / Заблоковані версії
├── vite.config.js                # Vite configuration / Конфігурація Vite
├── eslint.config.js              # ESLint configuration / Конфігурація ESLint
├── .prettierrc                   # Prettier configuration / Конфігурація Prettier
├── getHTMLFileNames.js           # Script for getting HTML files / Скрипт для отримання HTML файлів
└── README.md                     # Main documentation / Основна документація
```

## 📂 src/ Folder / Папка src/

```
src/
├── index.html                    # Main page / Головна сторінка
├── js/                          # JavaScript code / JavaScript код
│   ├── main.js                  # Application entry point / Точка входу додатку
│   └── utils/                   # Utilities / Утиліти
│       └── webp.js              # WebP utilities / WebP утиліти
├── styles/                      # SCSS styles / SCSS стилі
│   ├── main.scss                # Main styles file / Головний файл стилів
│   ├── base/                    # Base styles / Базові стилі
│   │   ├── _variables.scss      # Variables / Змінні
│   │   ├── _mixins.scss         # Mixins / Міксини
│   │   ├── _functions.scss      # Functions / Функції
│   │   ├── _adaptive.scss       # Adaptive mixins / Адаптивні міксини
│   │   ├── _fonts.scss          # Fonts / Шрифти
│   │   ├── _reset.scss          # CSS reset / CSS скидання
│   │   ├── _typography.scss     # Typography / Типографіка
│   │   ├── _forms.scss          # Form styles / Стилі форм
│   │   ├── _helpers.scss        # Utility classes / Утилітарні класи
│   │   └── _webp.scss           # WebP mixins / WebP міксини
│   ├── layout/                  # Layout styles / Стилі макету
│   │   ├── _header.scss         # Site header / Шапка сайту
│   │   ├── _footer.scss         # Site footer / Підвал сайту
│   │   └── _common.scss         # Common layout styles / Загальні стилі макету
│   └── vendors/                 # Third-party libraries / Сторонні бібліотеки
│       ├── _normalize.scss      # Normalize.css
│       └── _include-media.scss  # Media queries / Медіа-запити
├── templates/                   # Handlebars templates / Handlebars шаблони
│   ├── header.html              # Header template / Шаблон шапки
│   └── footer.html              # Footer template / Шаблон підвалу
└── examples/                    # Usage examples / Приклади використання
    └── webp-examples.html      # WebP examples / Приклади WebP
```

## 📂 public/ Folder / Папка public/

```
public/
├── fonts/                       # Fonts / Шрифти
│   └── SpaceMono/              # Space Mono font / Шрифт Space Mono
│       ├── SpaceMono-Bold.eot
│       ├── SpaceMono-Bold.svg
│       ├── SpaceMono-Bold.ttf
│       ├── SpaceMono-Bold.woff
│       ├── SpaceMono-Bold.woff2
│       └── ... (other variants) / ... (інші варіанти)
├── images/                      # All project images / Всі зображення проекту
│   ├── logo.png                # Logo / Логотип
│   ├── hero-bg.jpg             # Background images / Фонові зображення
│   ├── icon-*.png              # Icons / Іконки
│   └── gallery-*.jpg           # Gallery images / Зображення галереї
└── robots.txt                   # SEO settings / SEO налаштування
```

## 📂 docs/ Folder / Папка docs/

```
docs/
├── README.md                    # Main documentation / Головна документація
├── WEBP_GUIDE.md               # WebP guide / Керівництво по WebP
├── technologies/               # Technology documentation / Документація по технологіям
│   ├── VITE.md                 # Vite guide / Керівництво по Vite
│   ├── SCSS.md                 # SCSS guide / Керівництво по SCSS
│   ├── HANDLEBARS.md           # Handlebars guide / Керівництво по Handlebars
│   ├── JAVASCRIPT.md           # JavaScript guide / Керівництво по JavaScript
│   └── WEBP.md                 # WebP guide / Керівництво по WebP
├── guides/                     # Guides / Керівництва
│   ├── QUICK_START.md          # Quick start / Швидкий старт
│   ├── DEVELOPMENT.md          # Development guide / Керівництво по розробці
│   ├── PROJECT_STRUCTURE.md    # Project structure / Структура проекту
│   └── DEPLOYMENT.md           # Deployment guide / Керівництво по розгортанню
└── examples/                   # Code examples / Приклади коду
```

## 📂 dist/ Folder (generated) / Папка dist/ (генерується)

```
dist/
├── index.html                   # Compiled main page / Скомпільована головна сторінка
├── assets/                      # Compiled resources / Скомпільовані ресурси
│   ├── main-[hash].css          # Compiled styles / Скомпільовані стилі
│   ├── main-[hash].js           # Compiled JavaScript / Скомпільований JavaScript
│   └── vendor-[hash].js         # Vendor libraries / Вендорні бібліотеки
├── fonts/                       # Copied fonts / Скопійовані шрифти
├── images/                      # Optimized images / Оптимізовані зображення
└── robots.txt                   # Copied robots.txt / Скопійований robots.txt
```

## 📄 Key Files Description / Опис ключових файлів

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

## 🔧 Structure Setup / Налаштування структури

### Adding New Pages / Додавання нових сторінок
1. Create HTML file in `src/` / Створіть HTML файл в `src/`
2. Use structure from `index.html` / Використовуйте структуру з `index.html`
3. Update `getHTMLFileNames.js` if needed / Оновіть `getHTMLFileNames.js` якщо потрібно

### Adding New Styles / Додавання нових стилів
1. Create SCSS file in appropriate folder / Створіть SCSS файл в відповідній папці
2. Import in `main.scss` / Імпортуйте в `main.scss`
3. Use correct import order / Використовуйте правильний порядок імпортів

### Adding JavaScript Modules / Додавання JavaScript модулів
1. Create file in `src/js/` or `src/js/utils/` / Створіть файл в `src/js/` або `src/js/utils/`
2. Export functions / Експортуйте функції
3. Import in `main.js` / Імпортуйте в `main.js`

### Adding Images / Додавання зображень
1. Place all images in `public/images/` / Розмістіть всі зображення в `public/images/`
2. Use WebP optimization / Використовуйте WebP оптимізацію
3. Add `data-webp` attributes for fallback / Додайте `data-webp` атрибути для fallback

## 📋 Naming Conventions / Угоди про іменування

### Files / Файли
- **SCSS**: `_filename.scss` for partials / `_filename.scss` для парціалів
- **JavaScript**: `camelCase.js` for files / `camelCase.js` для файлів
- **HTML**: `kebab-case.html` for pages / `kebab-case.html` для сторінок
- **Images**: `kebab-case.ext` for files / `kebab-case.ext` для файлів

### CSS Classes / CSS класи
- **BEM methodology**: `.block__element--modifier` / **BEM методологія**: `.block__element--modifier`
- **Components**: `.component-name` / **Компоненти**: `.component-name`
- **Utilities**: `.u-utility-name` / **Утиліти**: `.u-utility-name`

### JavaScript
- **Variables**: `camelCase` / **Змінні**: `camelCase`
- **Functions**: `camelCase` / **Функції**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE` / **Константи**: `UPPER_SNAKE_CASE`
- **Classes**: `PascalCase` / **Класи**: `PascalCase`

## 🚨 Important Rules / Важливі правила

### SCSS Import Order / Порядок імпортів в SCSS
```scss
// 1. Variables (must be first) / Змінні (повинні бути першими)
@use 'base/variables' as *;

// 2. External libraries / Зовнішні бібліотеки
@use 'vendors/include-media' as *;
@use 'vendors/normalize';

// 3. Functions and mixins / Функції та міксини
@use 'base/functions' as *;
@use 'base/mixins' as *;

// 4. Base styles / Базові стилі
@use 'base/reset' as *;
@use 'base/typography' as *;

// 5. Components and layout / Компоненти та макет
@use 'layout/header' as *;
@use 'layout/footer' as *;
```

### JavaScript Import Order / Порядок імпортів в JavaScript
```javascript
// 1. Styles / Стилі
import '../styles/main.scss';

// 2. Utilities / Утиліти
import { initWebPSupport } from './utils/webp.js';

// 3. Libraries / Бібліотеки
import Swiper from 'swiper';

// 4. Main logic / Основна логіка
document.addEventListener('DOMContentLoaded', () => {
  // initialization / ініціалізація
});
```

## 📚 Additional Documentation / Додаткова документація

- **[Quick Start](QUICK_START.md)** - Getting started / Початок роботи
- **[Development](DEVELOPMENT.md)** - Development process / Процес розробки
- **[Technologies](../technologies/)** - Detailed guides / Детальні керівництва

---

**Clear structure is the foundation of a good project! / Зрозуміла структура - основа хорошого проекту! 📁**
