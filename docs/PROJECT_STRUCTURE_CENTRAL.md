# 📁 Project Structure / Структура проекту

## 🗂️ Root Structure / Коренева структура

```
vite-landing-template/
├── src/                          # Source code / Вихідний код
├── public/                       # Static files / Статичні файли
├── dist/                         # Build output (generated)
├── docs/                         # Documentation / Документація
├── node_modules/                 # Dependencies (generated)
├── .gitignore                    # Git exclusions
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked versions
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── getHTMLFileNames.js           # HTML files script
└── README.md                     # Main documentation
```

## 📂 src/ Folder / Папка src/

```
src/
├── index.html                    # Main page
├── js/                          # JavaScript code
│   ├── main.js                  # Application entry point
│   └── utils/                   # Utilities
│       └── webp.js              # WebP utilities
├── styles/                      # SCSS styles
│   ├── main.scss                # Main styles file
│   ├── base/                    # Base styles
│   │   ├── _variables.scss      # Variables
│   │   ├── _mixins.scss         # Mixins
│   │   ├── _functions.scss      # Functions
│   │   ├── _adaptive.scss       # Adaptive mixins
│   │   ├── _fonts.scss          # Fonts
│   │   ├── _reset.scss          # CSS reset
│   │   ├── _typography.scss     # Typography
│   │   ├── _forms.scss          # Form styles
│   │   ├── _helpers.scss        # Utility classes
│   │   └── _webp.scss           # WebP mixins
│   ├── layout/                  # Layout styles
│   │   ├── _header.scss         # Site header
│   │   ├── _footer.scss         # Site footer
│   │   └── _common.scss         # Common layout styles
│   └── vendors/                 # Third-party libraries
│       ├── _normalize.scss      # Normalize.css
│       └── _include-media.scss  # Media queries
├── templates/                   # Handlebars templates
│   ├── header.html              # Header template
│   └── footer.html              # Footer template
└── examples/                    # Usage examples
    └── webp-examples.html       # WebP examples
```

## 📁 public/ Folder / Папка public/

```
public/
├── fonts/                       # Fonts
│   └── SpaceMono/              # Space Mono font
│       ├── SpaceMono-Regular.woff2
│       ├── SpaceMono-Bold.woff2
│       └── ...
├── images/                      # All project images
│   ├── logo.png                # Logo
│   ├── hero-bg.jpg             # Background images
│   ├── icon-*.png              # Icons
│   └── gallery-*.jpg           # Gallery images
└── robots.txt                   # SEO file
```

## 📚 docs/ Folder / Папка docs/

```
docs/
├── README.md                    # Main documentation
├── WEBP_GUIDE.md               # WebP guide
├── COMMANDS.md                 # Project commands
├── PROJECT_STRUCTURE_CENTRAL.md # Central structure
├── technologies/               # Technology documentation
│   ├── VITE.md                 # Vite guide
│   ├── SCSS.md                 # SCSS guide
│   ├── HANDLEBARS.md           # Handlebars guide
│   ├── JAVASCRIPT.md           # JavaScript guide
│   └── WEBP.md                 # WebP guide
├── guides/                     # Guides
│   ├── QUICK_START.md          # Quick start
│   ├── DEVELOPMENT.md          # Development guide
│   ├── PROJECT_STRUCTURE.md    # Project structure
│   └── DEPLOYMENT.md           # Deployment guide
└── examples/                   # Code examples
    └── WEBP_EXAMPLES.md        # WebP examples
```

## 📦 dist/ Folder / Папка dist/

```
dist/
├── index.html                   # Compiled main page
├── assets/                      # Compiled resources
│   ├── main-[hash].css          # Compiled styles
│   ├── main-[hash].js           # Compiled JavaScript
│   └── vendor-[hash].js         # Vendor libraries
├── fonts/                       # Copied fonts
├── images/                      # Optimized images
└── robots.txt                   # Copied robots.txt
```

## 🔧 Configuration Files / Конфігураційні файли

### Main / Основні
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts
- `eslint.config.js` - ESLint configuration
- `.prettierrc` - Prettier configuration

### Additional / Додаткові
- `getHTMLFileNames.js` - HTML files detection
- `vite-webp-plugin.js` - Custom WebP plugin
- `.gitignore` - Git exclusions
