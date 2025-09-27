# 📁 Структура проекта / Project Structure

## 🗂️ Корневая структура / Root Structure

```
vite-landing-template/
├── src/                          # Source code / Вихідний код
├── public/                       # Static files / Статичні файли
├── dist/                         # Build output (generated) / Збірка (генерується)
├── docs/                         # Documentation / Документація
├── node_modules/                 # Dependencies (generated) / Залежності (генерується)
├── .gitignore                    # Git exclusions / Git виключення
├── package.json                  # Dependencies and scripts / Залежності та скрипти
├── package-lock.json             # Locked versions / Заблоковані версії
├── vite.config.js                # Vite configuration / Конфігурація Vite
├── eslint.config.js              # ESLint configuration / Конфігурація ESLint
├── .prettierrc                   # Prettier configuration / Конфігурація Prettier
├── getHTMLFileNames.js           # HTML files script / Скрипт для отримання HTML файлів
└── README.md                     # Main documentation / Основна документація
```

## 📂 Папка src/ / src/ Folder

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
    └── webp-examples.html       # WebP examples / WebP приклади
```

## 📁 Папка public/ / public/ Folder

```
public/
├── fonts/                       # Fonts / Шрифти
│   └── SpaceMono/              # Space Mono font / Шрифт Space Mono
│       ├── SpaceMono-Regular.woff2
│       ├── SpaceMono-Bold.woff2
│       └── ...
├── images/                      # All project images / Всі зображення проекту
│   ├── logo.png                # Logo / Логотип
│   ├── hero-bg.jpg             # Background images / Фонові зображення
│   ├── icon-*.png              # Icons / Іконки
│   └── gallery-*.jpg           # Gallery images / Зображення галереї
└── robots.txt                   # SEO file / SEO файл
```

## 📚 Папка docs/ / docs/ Folder

```
docs/
├── README.md                    # Main documentation / Головна документація
├── WEBP_GUIDE.md               # WebP guide / Керівництво по WebP
├── COMMANDS.md                 # Project commands / Команди проекту
├── PROJECT_STRUCTURE_CENTRAL.md # Central structure / Центральна структура
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
│   └── DEPLOYMENT.md           # Deployment guide / Керівництво по деплою
└── examples/                   # Code examples / Приклади коду
    └── WEBP_EXAMPLES.md        # WebP examples / WebP приклади
```

## 📦 Папка dist/ / dist/ Folder

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

## 🔧 Конфигурационные файлы / Configuration Files

### Основные / Main
- `vite.config.js` - Vite configuration / Конфігурація Vite
- `package.json` - Dependencies and scripts / Залежності та скрипти
- `eslint.config.js` - ESLint configuration / Конфігурація ESLint
- `.prettierrc` - Prettier configuration / Конфігурація Prettier

### Дополнительные / Additional
- `getHTMLFileNames.js` - HTML files detection / Виявлення HTML файлів
- `vite-webp-plugin.js` - Custom WebP plugin / Користувацький WebP плагін
- `.gitignore` - Git exclusions / Git виключення
