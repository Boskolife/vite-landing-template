# 🖼️ WebP Image Guide / Керівництво по WebP зображенням

## 📋 Overview / Огляд

The project now includes built-in WebP image support with automatic conversion and fallback for older browsers. This significantly improves site performance by reducing image file sizes.

Проект тепер включає вбудовану підтримку WebP зображень з автоматичною конвертацією та fallback для старих браузерів. Це значно покращує продуктивність сайту за рахунок зменшення розміру зображень.

## 🚀 Features / Можливості

- ✅ **Automatic conversion / Автоматична конвертація** - PNG, JPG, JPEG, GIF → WebP
- ✅ **Fallback support / Підтримка fallback** - Automatic format selection / Автоматичний вибір формату
- ✅ **Lazy loading / Ліниве завантаження** - Lazy loading images / Ліниве завантаження зображень
- ✅ **Responsive images / Адаптивні зображення** - Adaptation to different screens / Адаптація під різні екрани
- ✅ **SCSS mixins / SCSS міксини** - Ready-to-use WebP mixins / Готові міксини для WebP
- ✅ **JavaScript utilities / JavaScript утиліти** - Functions for WebP work / Функції для роботи з WebP
- ✅ **Build optimization / Оптимізація збірки** - Vite integration / Інтеграція з Vite

## 📁 File Structure / Структура файлів

```
src/
├── js/
│   └── utils/
│       └── webp.js       # WebP utilities / WebP утиліти
├── styles/
│   └── base/
│       └── _webp.scss    # WebP mixins / WebP міксини
└── examples/
    └── webp-examples.html # Usage examples / Приклади використання

public/
└── images/               # Images (PNG, JPG, JPEG) / Зображення (PNG, JPG, JPEG)
    ├── logo.png          # Logo / Логотип
    ├── hero-bg.jpg       # Background image / Фонове зображення
    ├── icon-heart.png    # Icons / Іконки
    └── ...               # Other images / Інші зображення
```

## ⚙️ Setup / Налаштування

### 1. Vite Configuration / Конфігурація Vite

WebP plugin is already configured in `vite.config.js`:

```javascript
import webp from 'vite-plugin-webp';

export default defineConfig({
  plugins: [
    webp({
      include: [
        'src/assets/images/**/*.{png,jpg,jpeg,gif}',
        'public/images/**/*.{png,jpg,jpeg,gif}'
      ],
      exclude: 'node_modules/**',
      sharpOptions: {
        quality: 80,
        effort: 6
      },
      webpOptions: {
        quality: 80,
        effort: 6
      }
    }),
  ],
});
```

### 2. Automatic Initialization / Автоматична ініціалізація

WebP support is automatically initialized in `main.js`:

```javascript
import { initWebPSupport } from './utils/webp.js';

// Automatic initialization / Автоматична ініціалізація
initWebPSupport();
```

## 🎨 Usage in HTML / Використання в HTML

### 1. **Image Placement / Розміщення зображень**

All images must be placed in the `public/images/` folder:

```
public/images/
├── logo.png          # Logo
├── hero-bg.jpg       # Background image
├── icon-heart.png    # Icons
└── gallery-*.jpg     # Gallery images
```

### 2. Regular Image with WebP Fallback / Звичайне зображення з WebP fallback

```html
<img 
  src="/images/example.jpg" 
  data-webp="/images/example.webp"
  alt="Example image"
  loading="lazy"
>
```

### 3. Picture Element (Recommended) / Picture елемент (рекомендується)

```html
<picture>
  <source srcset="/images/example.webp" type="image/webp">
  <img src="/images/example.jpg" alt="Example image" loading="lazy">
</picture>
```

### 4. Background Image / Фонове зображення

```html
<div class="hero-section">
  <div class="hero-content">
    <!-- Content -->
  </div>
</div>
```

```scss
.hero-section {
  @include webp-bg-image('/images/hero-bg', 'jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

## 🎯 SCSS Mixins / SCSS міксини

### 1. Background Image / Фонове зображення

```scss
.my-element {
  @include bg-cover('/images/background.jpg');
}
```

### 2. Background Image with Contain / Фонове зображення з contain

```scss
.responsive-bg {
  @include bg-contain('/images/bg.jpg');
  background-size: contain;
}
```

### 3. Hero Image / Hero зображення

```scss
.hero {
  @include hero-bg('/images/hero.jpg', 100vh);
}
```

### 4. Simple Background Image / Просте фонове зображення

```scss
.logo {
  @include bg-image('/images/logo.png');
  background-size: 200px 80px;
  background-repeat: no-repeat;
}
```

### 5. Icon Background / Фонове зображення іконки

```scss
.icon {
  @include bg-image('/images/icon.png');
  background-size: 24px 24px;
  background-repeat: no-repeat;
}
```

## 🔧 JavaScript API

### 1. WebP Support Check / Перевірка підтримки WebP

```javascript
import { isWebPSupported } from './utils/webp.js';

// Asynchronous check / Асинхронна перевірка
isWebPSupported().then(supported => {
  console.log('WebP supported:', supported);
});
```

### 2. Adding Support Class / Додавання класу підтримки

```javascript
import { addWebPClass } from './utils/webp.js';

// Adds 'webp' or 'no-webp' class to body / Додає клас 'webp' або 'no-webp' до body
addWebPClass('webp');
```

### 3. Manual WebP Class Management / Ручне керування WebP класами

```javascript
import { addWebPClass } from './utils/webp.js';

// Manual initialization with custom class name / Ручна ініціалізація з користувацьким ім'ям класу
addWebPClass('webp-enabled');
```

## 📱 Responsive Images / Адаптивні зображення

### 1. Adaptive Sizes / Адаптивні розміри

```scss
.responsive-image {
  width: 100%;
  height: auto;
  
  @include media('>=tablet') {
    max-width: 800px;
  }
  
  @include media('>=desktop') {
    max-width: 1200px;
  }
}
```

### 2. Responsive Background Images / Адаптивні фонові зображення

```scss
.adaptive-bg {
  @include bg-cover('/images/bg.jpg');
  
  @include media('>=tablet') {
    background-size: contain;
  }
  
  @include media('>=desktop') {
    background-size: cover;
  }
}
```

## 🎨 Utility Classes / Утилітарні класи

### 1. WebP Support / WebP підтримка

```html
<div class="webp-support">
  Content only for browsers with WebP support
</div>

<div class="no-webp-support">
  Content only for browsers WITHOUT WebP support
</div>
```

### 2. Lazy loading

```html
<img src="image.jpg" class="lazy-image" loading="lazy">
```

### 3. WebP Images / WebP зображення

```html
<img src="image.jpg" data-webp="image.webp" class="webp-image" loading="lazy">
```

## 🚀 Performance Optimization / Оптимізація продуктивності

### 1. Manual Image Preloading / Ручне попереднє завантаження зображень

```javascript
// Manual image preloading / Ручне попереднє завантаження зображень
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// Preload critical images / Попереднє завантаження критичних зображень
preloadImage('/images/bg.jpg');
preloadImage('/images/logo-js.png');
```

### 2. Lazy Loading for Non-Critical Images / Ліниве завантаження для некритичних зображень

```html
<img src="image.jpg" data-webp="image.webp" loading="lazy">
```

### 3. Quality Optimization / Оптимізація якості

Configure quality in `vite.config.js`:

```javascript
webp({
  sharpOptions: {
    quality: 80,  // 0-100, recommended 80-90
    effort: 6     // 0-6, higher = better quality, slower
  }
})
```

## 📊 Optimization Results / Результати оптимізації

WebP provides:

- **25-35% smaller size** compared to JPEG
- **50-80% smaller size** compared to PNG
- **Faster page loading**
- **Better UX** for users
- **Traffic savings** on mobile devices

## 🔍 Debugging / Відлагодження

### 1. WebP Support Check / Перевірка підтримки WebP

```javascript
// In browser console
import('./js/utils/webp.js').then(webp => {
  webp.isWebPSupported().then(supported => {
    console.log('WebP supported:', supported);
  });
});
```

### 2. Body Classes Check / Перевірка класів body

```javascript
// Check for webp or no-webp classes
console.log(document.body.className);
```

### 3. Loaded Images Check / Перевірка завантажених зображень

Open DevTools → Network → Img and check:
- Are WebP files loading
- Is fallback working correctly

## 📝 Examples / Приклади

See the `src/examples/webp-examples.html` file for complete examples of using all WebP capabilities in the project.

## 🛠️ Troubleshooting

### Problem: WebP not loading / Проблема: WebP не завантажується
**Solution**: Check image paths and ensure files exist

### Problem: Fallback not working / Проблема: Fallback не працює
**Solution**: Ensure original images are available at specified paths

### Problem: Mixins not working / Проблема: Міксини не працюють
**Solution**: Check that `@use 'base/webp' as *;` is added to `main.scss`

### Problem: JavaScript errors / Проблема: JavaScript помилки
**Solution**: Ensure `initWebPSupport()` is called from `main.js`

---

**Your project now automatically optimizes all images to WebP format! 🚀**
