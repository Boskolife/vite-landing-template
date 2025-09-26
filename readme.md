# Vite Landing Template

A modern, fast, and efficient landing page builder built with Vite, TypeScript, SCSS, and Handlebars templates. Perfect for creating responsive landing pages with hot reload and optimized builds.

## ✨ Features

- ⚡ **Vite 5** - Lightning-fast build tool with HMR
- 📝 **TypeScript 5.4** - Type-safe JavaScript development
- 🎨 **SCSS** - Advanced CSS preprocessing with variables and mixins
- 📄 **Handlebars** - Template engine for reusable components
- 🔧 **ESLint + Prettier** - Code quality and formatting
- 📱 **Responsive Design** - Mobile-first approach with custom breakpoints
- 🎯 **Swiper 11** - Modern slider component included
- 🚀 **Optimized Build** - Production-ready with code splitting and minification

## 📁 Project Structure

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
├── dist/                       # Production build output
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── getHTMLFileNames.js        # Auto HTML file detection
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vite-landing-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
  npm run dev
```

   The server will start at `http://localhost:3000` with hot reload enabled.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

## 📝 Creating New Pages

1. **Create an HTML file** in the `src/` directory (e.g., `about.html`)
2. **The file will be automatically** included in the build process
3. **Use Handlebars partials** for consistent layout:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - {{siteName}}</title>
  <link rel="stylesheet" href="/styles/main.scss">
  <script type="module" src="/js/main.js" defer></script>
</head>
<body>
  {{> header }}
  <main>
    <h1>About Us</h1>
    <p>Welcome to our landing page!</p>
  </main>
  {{> footer }}
</body>
</html>
```

## 🎨 Working with Styles

### SCSS Architecture

The project uses a modular SCSS architecture:

- **Variables** (`_variables.scss`) - Colors, fonts, spacing, breakpoints
- **Mixins** (`_mixins.scss`) - Reusable style patterns
- **Functions** (`_functions.scss`) - SCSS utility functions
- **Adaptive** (`_adaptive.scss`) - Responsive design helpers
- **Typography** (`_typography.scss`) - Text styles and hierarchy
- **Forms** (`_forms.scss`) - Form element styling
- **Helpers** (`_helpers.scss`) - Utility classes

### Responsive Breakpoints

Pre-configured breakpoints for responsive design:

```scss
$breakpoints: (
  'xs-phone': 320px,
  'phone': 480px,
  'tablet': 768px,
  'tablet_x': 860px,
  'desktop': 1024px,
  'widescreen': 1200px
);
```

Usage example:

```scss
.my-component {
  padding: 1rem;
  
  @include media('>=tablet') {
    padding: 2rem;
  }
  
  @include media('>=desktop') {
    padding: 3rem;
  }
}
```

## 📄 Handlebars Templates

### Creating Components

1. **Create a partial** in `src/templates/` (e.g., `navigation.html`)
2. **Use in your HTML:**

```html
{{> navigation }}
```

### Template Context

Global context variables are available in all templates:

```javascript
// Available in all templates
{{siteName}}        // "Vite Landing Template"
{{currentYear}}     // Current year (e.g., 2024)
```

### Custom Context

Add custom data in `vite.config.js`:

```javascript
handlebars({ 
  partialDirectory: resolve(__dirname, 'src/templates'),
  context: {
    siteName: 'My Awesome Site',
    currentYear: new Date().getFullYear(),
    // Add your custom data here
  }
})
```

## 🔧 JavaScript Development

### Main Entry Point

The main JavaScript file (`src/js/main.js`) is where you initialize your application:

```javascript
// Import styles
import '../styles/main.scss';

// Your main JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing page loaded successfully!');
  
  // Initialize any components or functionality here
  initializeApp();
});

function initializeApp() {
  // Add your initialization logic here
  console.log('App initialized');
}
```

### Using Swiper

Swiper is included for creating sliders:

```javascript
import { Swiper, Navigation, Pagination } from 'swiper';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
```

## 📦 Included Libraries

- **Swiper 11.1.4** - Modern touch slider
- **Normalize.css** - CSS reset for cross-browser consistency
- **include-media** - SCSS mixins for media queries

## ⚙️ Configuration

### Vite Configuration

Enhanced Vite config with:

- **Code splitting** - Vendor chunks for better caching
- **Source maps** - For debugging in development
- **Terser minification** - Optimized production builds
- **Auto-open browser** - Development server opens automatically
- **Host access** - Access from other devices on network

### TypeScript Configuration

Strict TypeScript setup with:

- **ES2020 target** - Modern JavaScript features
- **Strict mode** - Enhanced type checking
- **DOM types** - Browser API support
- **Unused variable detection** - Clean code enforcement

### ESLint Configuration

Comprehensive linting with:

- **TypeScript support** - Type-aware linting
- **Import organization** - Automatic import sorting
- **Code quality rules** - Best practices enforcement
- **Prettier integration** - No conflicts with formatting

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder with:

- Minified CSS and JavaScript
- Optimized images
- Code splitting
- Source maps (optional)

### GitHub Pages

For GitHub Pages deployment, update the `base` in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-repo-name/', // For GitHub Pages
  // or
  base: '/', // For custom domain
});
```

### Netlify/Vercel

The build output is ready for deployment on any static hosting service.

## 🔧 Development Tips

### Code Quality

- Run `npm run lint` before committing
- Use `npm run format` to format code
- Enable your editor's ESLint and Prettier extensions

### Performance

- Images are automatically optimized by Vite
- CSS is automatically purged in production
- JavaScript is tree-shaken and minified

### Browser Support

- Modern browsers (ES2020+)
- IE11+ with polyfills (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test them
4. Run linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Swiper](https://swiperjs.com/) - Modern touch slider
- [Handlebars](https://handlebarsjs.com/) - Template engine

---

**Made with ❤️ for fast and efficient landing page development**