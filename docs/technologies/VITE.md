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

### 2. **Сервер разработки**

```javascript
server: {
  port: 3000,        // Server port / Порт сервера
  open: true,        // Auto-open browser / Автоматичне відкриття браузера
  host: true,        // Access from other devices / Доступ з інших пристроїв
  cors: true,        // CORS поддержка
  proxy: {           // Proxy for API / Проксі для API
    '/api': 'http://localhost:8080'
  }
}
```

### 3. **Сборка для продакшена**

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

## 🎯 Используемые плагины

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

**Возможности:**
- Компиляция Handlebars шаблонов
- Поддержка партиалов
- Передача контекста в шаблоны

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

**Возможности:**
- Автоматическая оптимизация изображений
- Сжатие PNG, JPEG, GIF, SVG
- Настройка качества сжатия

### 3. **Кастомный WebP плагин**
```javascript
import { webpPlugin } from './vite-webp-plugin.js';

plugins: [
  webpPlugin({
    quality: 80,
    generateWebp: true
  })
]
```

**Возможности:**
- Автоматическая конвертация в WebP
- Настройка качества
- Генерация fallback версий

## 📁 Структура проекта для Vite

See [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) for detailed project structure.

Дивіться [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) для детальної структури проекту.

## 🚀 Команды и скрипты

See [COMMANDS.md](../COMMANDS.md) for full command list.

Дивіться [COMMANDS.md](../COMMANDS.md) для повного списку команд.

## 🔥 Hot Module Replacement (HMR)

Vite обеспечивает мгновенное обновление модулей:

### CSS/SCSS
```scss
/* Style changes are applied instantly / Зміни в стилях застосовуються миттєво */
.my-class {
  color: red; /* ← Изменение применится без перезагрузки */
}
```

### JavaScript
```javascript
// JS module changes update instantly / Зміни в JS модулях оновлюються миттєво
export function myFunction() {
  console.log('Updated!'); // ← Изменение применится мгновенно
}
```

### HTML
```html
<!-- HTML changes update on save / Зміни в HTML оновлюються при збереженні -->
<h1>Updated Title</h1> <!-- ← Обновится при сохранении -->
```

## 📦 Импорт модулей

### ES модули
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

## 🎯 Оптимизация сборки

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

### Source Maps
```javascript
build: {
  sourcemap: true    // For debugging in production / Для відлагодження в продакшені
}
```

## 🔧 Переменные окружения

### Creating `.env` Files / Створення `.env` файлів
```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App

# .env.local (локальные настройки)
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
**Решение:**
- Убедитесь, что используете Node.js 16+
- Проверьте размер node_modules
- Очистите кеш: `npm run dev -- --force`

### Problem: HMR Not Working / Проблема: HMR не працює
**Решение:**
- Проверьте, что файлы сохраняются
- Убедитесь в правильности импортов
- Перезапустите сервер разработки

### Problem: Build Errors / Проблема: Помилки збірки
**Решение:**
- Проверьте синтаксис в vite.config.js
- Убедитесь в корректности путей
- Проверьте совместимость плагинов

## 📚 Полезные ссылки

- [Официальная документация Vite](https://vitejs.dev/)
- [Плагины для Vite](https://github.com/vitejs/awesome-vite)
- [Руководство по миграции](https://vitejs.dev/guide/migration.html)

---

**Vite делает разработку быстрой и приятной! ⚡**
