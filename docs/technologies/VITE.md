# ⚡ Vite - Build Tool and Development Environment / Інструмент збірки та розробки

## 📋 Overview / Огляд

**Vite** is a modern build tool for frontend projects that provides lightning-fast development through the use of native ES modules in the browser.

**Vite** — це сучасний інструмент збірки для фронтенд-проектів, який забезпечує блискавичну розробку завдяки використанню нативних ES модулів у браузері.

## 🚀 Main Features / Основні можливості

- ⚡ **Instant start / Миттєвий старт** - No build wait time / Немає часу очікування збірки
- 🔥 **Hot Module Replacement (HMR) / Гаряча заміна модулів** - Instant module updates / Миттєве оновлення модулів
- 📦 **Optimized build / Оптимізована збірка** - Rollup for production / Rollup для продакшену
- 🎯 **TypeScript out of the box / TypeScript з коробки** - TypeScript support / Підтримка TypeScript
- 🔧 **Plugin system / Плагінна система** - Rich plugin ecosystem / Багата екосистема плагінів

## ⚙️ Project Configuration / Конфігурація в проекті

### File `vite.config.js` / Файл `vite.config.js`

```javascript
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import viteImagemin from 'vite-plugin-imagemin';
import { webpPlugin } from './vite-webp-plugin.js';

export default defineConfig({
  base: '/vite-landing-template',
  root: 'src',
  publicDir: '../public',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/templates'),
      context: {
        siteName: 'Vite Landing Template',
        currentYear: new Date().getFullYear()
      }
    }),
    viteImagemin({
      // Image optimization / Оптимізація зображень
    }),
    webpPlugin({
      quality: 80,
      generateWebp: true
    }),
  ],
  build: {
    rollupOptions: {
      input,
      output: {
        manualChunks: {
          vendor: ['swiper']
        }
      }
    },
    outDir: '../dist/',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser'
  },
  server: {
    port: 3000,
    open: true,
    host: true
  }
});
```

## 🔧 Main Settings / Основні налаштування

### 1. **Basic Configuration / Базова конфігурація**

```javascript
export default defineConfig({
  base: '/vite-landing-template',  // Base path for deployment / Базовий шлях для деплою
  root: 'src',                     // Source root folder / Коренева папка вихідників
  publicDir: '../public',          // Static files folder / Папка статичних файлів
});
```

### 2. **Development Server / Сервер розробки**

```javascript
server: {
  port: 3000,        // Server port / Порт сервера
  open: true,        // Auto-open browser / Автоматичне відкриття браузера
  host: true,        // Access from other devices / Доступ з інших пристроїв
  cors: true,        // CORS support
  proxy: {           // Proxy for API / Проксі для API
    '/api': 'http://localhost:8080'
  }
}
```

### 3. **Production Build / Збірка для продакшену**

```javascript
build: {
  outDir: '../dist/',           // Build folder / Папка збірки
  emptyOutDir: true,           // Clear folder / Очищення папки
  sourcemap: true,             // Source maps
  minify: 'terser',            // Minification / Мініфікація
  rollupOptions: {
    output: {
      manualChunks: {          // Code splitting / Розділення коду
        vendor: ['swiper']
      }
    }
  }
}
```

## 🎯 Used Plugins / Використовувані плагіни

### 1. **vite-plugin-handlebars**
```javascript
import handlebars from 'vite-plugin-handlebars';

plugins: [
  handlebars({
    partialDirectory: resolve(__dirname, 'src/templates'),
    context: {
      siteName: 'Vite Landing Template',
      currentYear: new Date().getFullYear()
    }
  })
]
```

**Features: / Можливості:**
- Handlebars templates compilation / Компіляція Handlebars шаблонів
- Partials support / Підтримка парціалів
- Context passing to templates / Передача контексту в шаблони

### 2. **vite-plugin-imagemin**
```javascript
import viteImagemin from 'vite-plugin-imagemin';

plugins: [
  viteImagemin({
    gifsicle: { optimizationLevel: 7 },
    optipng: { optimizationLevel: 7 },
    mozjpeg: { quality: 80 },
    pngquant: { quality: [0.8, 0.9] },
    svgo: { plugins: [...] }
  })
]
```

**Features: / Можливості:**
- Automatic image optimization / Автоматична оптимізація зображень
- PNG, JPEG, GIF, SVG compression / Стискання PNG, JPEG, GIF, SVG
- Compression quality settings / Налаштування якості стискання

### 3. **Custom WebP Plugin / Користувацький WebP плагін**
```javascript
import { webpPlugin } from './vite-webp-plugin.js';

plugins: [
  webpPlugin({
    quality: 80,
    generateWebp: true
  })
]
```

**Features: / Можливості:**
- Automatic WebP conversion / Автоматична конвертація в WebP
- Quality settings / Налаштування якості
- Fallback versions generation / Генерація fallback версій

## 📁 Project Structure for Vite / Структура проекту для Vite

See [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) for detailed project structure.

Дивіться [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) для детальної структури проекту.

## 🚀 Commands and Scripts / Команди та скрипти

See [COMMANDS.md](../COMMANDS.md) for full command list.

Дивіться [COMMANDS.md](../COMMANDS.md) для повного списку команд.

## 🔥 Hot Module Replacement (HMR)

Vite provides instant module updates: / Vite забезпечує миттєве оновлення модулів:

### CSS/SCSS
```scss
/* Style changes are applied instantly / Зміни в стилях застосовуються миттєво */
.my-class {
  color: red; /* ← Change will apply without reload */
}
```

### JavaScript
```javascript
// JS module changes update instantly / Зміни в JS модулях оновлюються миттєво
export function myFunction() {
  console.log('Updated!'); // ← Change will apply instantly
}
```

### HTML
```html
<!-- HTML changes update on save / Зміни в HTML оновлюються при збереженні -->
<h1>Updated Title</h1> <!-- ← Will update on save -->
```

## 📦 Module Import / Імпорт модулів

### ES Modules / ES модулі
```javascript
// Import styles / Імпорт стилів
import '../styles/main.scss';

// Import images / Імпорт зображень
import logoUrl from '../assets/images/logo.png';

// Import JSON / Імпорт JSON
import data from '../data/config.json';
```

### Dynamic Imports / Динамічні імпорти
```javascript
// Lazy loading modules / Ліниве завантаження модулів
const module = await import('./heavy-module.js');
```

### Import from node_modules / Імпорт з node_modules
```javascript
// Import npm packages / Імпорт npm пакетів
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
```

## 🎯 Build Optimization / Оптимізація збірки

### Code Splitting / Розділення коду
```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['swiper'],           // Vendor libraries / Вендорні бібліотеки
        utils: ['./src/js/utils']     // Utilities / Утиліти
      }
    }
  }
}
```

### Minification / Мініфікація
```javascript
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,    // Remove console.log / Видалення console.log
      drop_debugger: true    // Remove debugger / Видалення debugger
    }
  }
}
```

### Source Maps / Карти джерел
```javascript
build: {
  sourcemap: true    // For debugging in production / Для відлагодження в продакшені
}
```

## 🔧 Environment Variables / Змінні середовища

### Creating `.env` Files / Створення `.env` файлів
```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App

# .env.local (local settings)
VITE_DEBUG=true
```

### Usage in Code / Використання в коді
```javascript
// Access variables via import.meta.env / Доступ до змінних через import.meta.env
const apiUrl = import.meta.env.VITE_API_URL;
const isDebug = import.meta.env.VITE_DEBUG === 'true';
```

## 🚨 Troubleshooting

### Problem: Slow Start / Проблема: Повільний старт
**Solution: / Рішення:**
- Make sure you're using Node.js 16+ / Переконайтеся, що використовуєте Node.js 16+
- Check node_modules size / Перевірте розмір node_modules
- Clear cache: `npm run dev -- --force` / Очистіть кеш: `npm run dev -- --force`

### Problem: HMR Not Working / Проблема: HMR не працює
**Solution: / Рішення:**
- Check that files are being saved / Перевірте, що файли зберігаються
- Ensure import correctness / Переконайтеся в правильності імпортів
- Restart development server / Перезапустіть сервер розробки

### Problem: Build Errors / Проблема: Помилки збірки
**Solution: / Рішення:**
- Check syntax in vite.config.js / Перевірте синтаксис в vite.config.js
- Ensure path correctness / Переконайтеся в коректності шляхів
- Check plugin compatibility / Перевірте сумісність плагінів

## 📚 Useful Links / Корисні посилання

- [Official Vite Documentation](https://vitejs.dev/) / [Офіційна документація Vite](https://vitejs.dev/)
- [Vite Plugins](https://github.com/vitejs/awesome-vite) / [Плагіни для Vite](https://github.com/vitejs/awesome-vite)
- [Migration Guide](https://vitejs.dev/guide/migration.html) / [Керівництво по міграції](https://vitejs.dev/guide/migration.html)

---

**Vite makes development fast and enjoyable! / Vite робить розробку швидкою та приємною! ⚡**
