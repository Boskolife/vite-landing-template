# Vite Landing Template / Vite Landing Шаблон

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
  <img src="https://img.shields.io/badge/Handlebars-F0772B?style=for-the-badge&logo=handlebarsdotjs&logoColor=white" alt="Handlebars">
</div>

---

## 🇺🇸 English

A modern, fast, and efficient landing page builder built with Vite, JavaScript, SCSS, and Handlebars templates. Perfect for creating responsive landing pages with hot reload and optimized builds.

### ✨ Features

- ⚡ **Vite 7** - Lightning-fast build tool with HMR
- 📝 **JavaScript ES6+** - Modern JavaScript development
- 🎨 **SCSS** - Advanced CSS preprocessing with variables and mixins
- 📄 **Handlebars** - Template engine for reusable components
- 🔧 **ESLint + Prettier** - Code quality and formatting
- 📱 **Responsive Design** - Mobile-first approach with custom breakpoints
- 🎯 **Swiper 12** - Modern slider component included
- 🚀 **Optimized Build** - Production-ready with code splitting and minification
- 🔤 **Space Mono Font** - Modern monospace typography
- 🛡️ **No-Index Setup** - SEO protection with robots.txt and meta tags

### 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd vite-landing-template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📁 Project Structure

```
vite-landing-template/
├── src/
│   ├── index.html              # Main page entry point
│   ├── js/
│   │   └── main.js             # Main JavaScript file
│   ├── styles/
│   │   ├── main.scss           # Main SCSS entry point
│   │   ├── base/               # Base styles and utilities
│   │   │   ├── _variables.scss # SCSS variables
│   │   │   ├── _mixins.scss    # Reusable mixins
│   │   │   ├── _functions.scss # SCSS functions
│   │   │   ├── _adaptive.scss  # Responsive mixins
│   │   │   ├── _fonts.scss     # Font imports
│   │   │   ├── _reset.scss     # CSS reset
│   │   │   ├── _typography.scss# Typography styles
│   │   │   ├── _forms.scss     # Form styles
│   │   │   └── _helpers.scss   # Utility classes
│   │   ├── layout/             # Layout-specific styles
│   │   │   ├── _header.scss    # Header styles
│   │   │   ├── _footer.scss    # Footer styles
│   │   │   └── _common.scss    # Common layout styles
│   │   └── vendors/            # Third-party styles
│   │       ├── _normalize.scss # Normalize.css
│   │       └── _include-media.scss # Media query mixins
│   └── templates/              # Handlebars partials
│       ├── header.html         # Header template
│       └── footer.html         # Footer template
├── public/                     # Static assets
│   ├── fonts/                  # Space Mono font files
│   └── robots.txt              # SEO protection
├── dist/                       # Production build output
├── eslint.config.js           # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── tsconfig.json              # JavaScript configuration
├── vite.config.js             # Vite configuration
└── CHANGELOG.md               # Project changelog
```

### 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run JavaScript type checking |

### 🎨 Customization

#### Colors and Variables
Edit `src/styles/base/_variables.scss` to customize:
- Color palette
- Typography settings
- Breakpoints
- Spacing values

#### Fonts
The template uses **Space Mono** font family. Font files are located in `public/fonts/` and configured in `src/styles/base/_fonts.scss`.

#### Templates
Modify Handlebars templates in `src/templates/` to customize:
- Header structure
- Footer content
- Navigation menus

### 🔧 Configuration

#### Vite Configuration
The build process is configured in `vite.config.js`:
- Base path: `/vite-landing-template`
- Handlebars context variables
- Build optimization settings
- Development server settings

#### ESLint & Prettier
- ESLint configuration: `eslint.config.js`
- Prettier configuration: `.prettierrc`
- Both tools work together for code quality

### 📱 Responsive Design

The template uses a mobile-first approach with custom breakpoints:
- **xs-phone**: 320px
- **phone**: 480px
- **tablet**: 768px
- **tablet_x**: 860px
- **desktop**: 1024px
- **widescreen**: 1200px

### 🛡️ SEO Protection

The template includes built-in SEO protection:
- `robots.txt` - Blocks all search engine crawlers
- Meta tags - Prevents indexing and caching
- No-index directives for all major search engines

---

## 🇺🇦 Українська

Сучасний, швидкий та ефективний конструктор лендінг-сторінок, створений з Vite, JavaScript, SCSS та шаблонами Handlebars. Ідеально підходить для створення адаптивних лендінг-сторінок з гарячою перезавантаженням та оптимізованими збірками.

### ✨ Можливості

- ⚡ **Vite 7** - Надзвичайно швидкий інструмент збірки з HMR
- 📝 **JavaScript ES6+** - Сучасна розробка JavaScript
- 🎨 **SCSS** - Розширена попередня обробка CSS з змінними та міксинами
- 📄 **Handlebars** - Движок шаблонів для багаторазових компонентів
- 🔧 **ESLint + Prettier** - Якість коду та форматування
- 📱 **Адаптивний дизайн** - Mobile-first підхід з власними breakpoints
- 🎯 **Swiper 12** - Сучасний слайдер включений
- 🚀 **Оптимізована збірка** - Готовий до продакшену з розділенням коду та мінімізацією
- 🔤 **Шрифт Space Mono** - Сучасна моноширинна типографіка
- 🛡️ **Налаштування No-Index** - Захист SEO з robots.txt та мета-тегами

### 🚀 Швидкий старт

```bash
# Клонувати репозиторій
git clone <repository-url>
cd vite-landing-template

# Встановити залежності
npm install

# Запустити сервер розробки
npm run dev

# Зібрати для продакшену
npm run build

# Попередній перегляд продакшен збірки
npm run preview
```

### 📁 Структура проекту

```
vite-landing-template/
├── src/
│   ├── index.html              # Головна точка входу сторінки
│   ├── js/
│   │   └── main.js             # Головний JavaScript файл
│   ├── styles/
│   │   ├── main.scss           # Головна точка входу SCSS
│   │   ├── base/               # Базові стилі та утиліти
│   │   │   ├── _variables.scss # SCSS змінні
│   │   │   ├── _mixins.scss    # Багаторазові міксини
│   │   │   ├── _functions.scss # SCSS функції
│   │   │   ├── _adaptive.scss  # Адаптивні міксини
│   │   │   ├── _fonts.scss     # Імпорти шрифтів
│   │   │   ├── _reset.scss     # CSS скидання
│   │   │   ├── _typography.scss# Стилі типографіки
│   │   │   ├── _forms.scss     # Стилі форм
│   │   │   └── _helpers.scss   # Утилітарні класи
│   │   ├── layout/             # Стилі макету
│   │   │   ├── _header.scss    # Стилі заголовка
│   │   │   ├── _footer.scss    # Стилі підвалу
│   │   │   └── _common.scss    # Загальні стилі макету
│   │   └── vendors/            # Сторонні стилі
│   │       ├── _normalize.scss # Normalize.css
│   │       └── _include-media.scss # Міксини медіа-запитів
│   └── templates/              # Часткові шаблони Handlebars
│       ├── header.html         # Шаблон заголовка
│       └── footer.html         # Шаблон підвалу
├── public/                     # Статичні ресурси
│   ├── fonts/                  # Файли шрифту Space Mono
│   └── robots.txt              # Захист SEO
├── dist/                       # Вихід продакшен збірки
├── eslint.config.js           # Конфігурація ESLint
├── .prettierrc                # Конфігурація Prettier
├── .gitignore                 # Правила ігнорування Git
├── package.json               # Залежності та скрипти
├── tsconfig.json              # Конфігурація JavaScript
├── vite.config.js             # Конфігурація Vite
└── CHANGELOG.md               # Журнал змін проекту
```

### 🛠️ Доступні скрипти

| Скрипт | Опис |
|--------|------|
| `npm run dev` | Запустити сервер розробки з гарячою перезавантаженням |
| `npm run build` | Зібрати для продакшену |
| `npm run preview` | Попередній перегляд продакшен збірки |
| `npm run lint` | Запустити ESLint |
| `npm run lint:fix` | Виправити помилки ESLint |
| `npm run format` | Форматувати код з Prettier |
| `npm run type-check` | Запустити перевірку типів JavaScript |

### 🎨 Налаштування

#### Кольори та змінні
Редагуйте `src/styles/base/_variables.scss` для налаштування:
- Кольорової палітри
- Налаштувань типографіки
- Breakpoints
- Значень відступів

#### Шрифти
Шаблон використовує сімейство шрифтів **Space Mono**. Файли шрифтів знаходяться в `public/fonts/` та налаштовані в `src/styles/base/_fonts.scss`.

#### Шаблони
Модифікуйте шаблони Handlebars в `src/templates/` для налаштування:
- Структури заголовка
- Вмісту підвалу
- Навігаційних меню

### 🔧 Конфігурація

#### Конфігурація Vite
Процес збірки налаштований в `vite.config.js`:
- Базовий шлях: `/vite-landing-template`
- Змінні контексту Handlebars
- Налаштування оптимізації збірки
- Налаштування сервера розробки

#### ESLint & Prettier
- Конфігурація ESLint: `eslint.config.js`
- Конфігурація Prettier: `.prettierrc`
- Обидва інструменти працюють разом для якості коду

### 📱 Адаптивний дизайн

Шаблон використовує mobile-first підхід з власними breakpoints:
- **xs-phone**: 320px
- **phone**: 480px
- **tablet**: 768px
- **tablet_x**: 860px
- **desktop**: 1024px
- **widescreen**: 1200px

### 🛡️ Захист SEO

Шаблон включає вбудований захист SEO:
- `robots.txt` - Блокує всіх пошукових роботів
- Мета-теги - Запобігає індексації та кешуванню
- Директиви no-index для всіх основних пошукових систем

---

## 📄 License / Ліцензія

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Цей проект ліцензовано під ліцензією MIT - дивіться файл [LICENSE](LICENSE) для деталей.

---

## 🤝 Contributing / Внесок

Contributions are welcome! Please feel free to submit a Pull Request.

Внески вітаються! Будь ласка, не соромтеся надсилати Pull Request.

---

<div align="center">
  <p>Made with ❤️ using Vite, JavaScript, and SCSS</p>
  <p>Зроблено з ❤️ використовуючи Vite, JavaScript та SCSS</p>
</div>