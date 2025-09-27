# Vite Landing Template

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
  <img src="https://img.shields.io/badge/Handlebars-F0772B?style=for-the-badge&logo=handlebarsdotjs&logoColor=white" alt="Handlebars">
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Version-0.9.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Status-Pre--release-orange?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</div>

---

A modern, fast, and efficient landing page builder built with Vite, JavaScript, SCSS, and Handlebars templates. Perfect for creating responsive landing pages with hot reload, optimized builds, and automated deployment.

## ✨ Features

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
- 🖼️ **WebP Support** - Automatic image optimization with WebP conversion
- 🔄 **Release Automation** - Automated GitHub releases with changelog
- 📚 **Multilingual Docs** - Complete documentation in Ukrainian and English

## 🚀 Quick Start

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

## 📁 Project Structure

```
vite-landing-template/
├── src/                          # Source files
│   ├── index.html               # Main page
│   ├── js/                      # JavaScript files
│   │   ├── main.js             # Main application logic
│   │   └── utils/              # Utility functions
│   ├── styles/                 # SCSS stylesheets
│   │   ├── main.scss           # Main stylesheet
│   │   ├── base/               # Base styles
│   │   ├── layout/             # Layout styles
│   │   └── components/         # Component styles
│   └── templates/              # Handlebars templates
├── public/                      # Static assets
│   ├── images/                 # Project images
│   └── fonts/                  # Font files
├── docs/                       # Documentation
├── scripts/                    # Build and release scripts
├── .github/workflows/          # GitHub Actions
└── dist/                       # Built files (generated)
```

## 🛠️ Available Scripts

### Development
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Code Quality
```bash
npm run lint             # Check code style
npm run lint:fix         # Fix code style issues
npm run format           # Format code with Prettier
```

### Release Management
```bash
npm run release patch "description"     # Create patch release
npm run release minor "description"     # Create minor release
npm run release major "description"     # Create major release

npm run github:patch "description"      # Create GitHub patch release
npm run github:minor "description"      # Create GitHub minor release
npm run github:major "description"      # Create GitHub major release
```

## 🎨 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | 7.1.7 | Build tool and dev server |
| **JavaScript** | ES6+ | Core language |
| **SCSS** | 1.71.1 | CSS preprocessing |
| **Handlebars** | 2.0.0 | Template engine |
| **ESLint** | 9.36.0 | Code linting |
| **Prettier** | 3.2.5 | Code formatting |
| **Swiper** | 12.0.2 | Slider component |
| **Sharp** | 0.34.4 | Image optimization |

## 🖼️ WebP Image Optimization

The template includes comprehensive WebP support:

- ✅ **Automatic conversion** - PNG, JPG, JPEG → WebP
- ✅ **Fallback support** - Automatic format detection
- ✅ **Build-time optimization** - Integrated with Vite
- ✅ **SCSS mixins** - Ready-to-use WebP utilities
- ✅ **JavaScript utilities** - Browser detection and optimization

## 📚 Documentation

### Complete Documentation
- **[Usage Guide](docs/USAGE_GUIDE.md)** - Complete usage instructions
- **[Quick Start](docs/guides/QUICK_START.md)** - Get started quickly
- **[Development Guide](docs/guides/DEVELOPMENT.md)** - Development workflow
- **[Deployment Guide](docs/guides/DEPLOYMENT.md)** - Deployment instructions

### Technology Guides
- **[Vite Guide](docs/technologies/VITE.md)** - Vite build tool
- **[SCSS Guide](docs/technologies/SCSS.md)** - SCSS preprocessing
- **[JavaScript Guide](docs/technologies/JAVASCRIPT.md)** - Modern JavaScript
- **[Handlebars Guide](docs/technologies/HANDLEBARS.md)** - Template engine

### Specialized Guides
- **[WebP Guide](docs/WEBP_GUIDE.md)** - Image optimization
- **[Project Structure](docs/PROJECT_STRUCTURE_CENTRAL.md)** - Detailed project structure
- **[Commands Reference](docs/COMMANDS.md)** - All available commands

## 📱 Responsive Design

The template uses a mobile-first approach with custom breakpoints:

- **xs-phone**: 320px - Extra small phones
- **phone**: 480px - Mobile devices
- **tablet**: 768px - Tablets
- **tablet_x**: 860px - Large tablets
- **desktop**: 1024px - Desktop computers
- **widescreen**: 1200px - Large screens

## 🛡️ SEO Protection

The template includes built-in SEO protection:

- ✅ **robots.txt** - Blocks all search engine bots
- ✅ **Meta tags** - Prevents indexing and caching
- ✅ **No-index directives** - For all major search engines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run tests and linting**
5. **Submit a pull request**

## 🆘 Support

If you encounter any issues or need help:

1. **Check the documentation**
2. **Search existing issues**
3. **Create a new issue**

---

<div align="center">
  <p><strong>Made with ❤️ by the Vite Landing Template Team</strong></p>
  
  [![GitHub stars](https://img.shields.io/github/stars/Boskolife/vite-landing-template?style=social)](https://github.com/Boskolife/vite-landing-template)
  [![GitHub forks](https://img.shields.io/github/forks/Boskolife/vite-landing-template?style=social)](https://github.com/Boskolife/vite-landing-template/fork)
  [![GitHub issues](https://img.shields.io/github/issues/Boskolife/vite-landing-template)](https://github.com/Boskolife/vite-landing-template/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/Boskolife/vite-landing-template)](https://github.com/Boskolife/vite-landing-template/pulls)
</div>
