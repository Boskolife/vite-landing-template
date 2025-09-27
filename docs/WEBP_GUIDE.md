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

WebP плагин уже настроен в `vite.config.js`:

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

### 2. Автоматическая инициализация

WebP поддержка автоматически инициализируется в `main.js`:

```javascript
import { initWebPSupport, preloadCriticalImages } from './utils/webp.js';

// Automatic initialization / Автоматична ініціалізація
initWebPSupport();

// Preload critical images / Попереднє завантаження критичних зображень
const criticalImages = [
  '/images/hero-bg.jpg',
  '/images/logo.png'
];
preloadCriticalImages(criticalImages);
```

## 🎨 Usage in HTML / Використання в HTML

### 1. **Размещение изображений**

Все изображения должны находиться в папке `public/images/`:

```
public/images/
├── logo.png          # Логотип
├── hero-bg.jpg       # Фоновое изображение
├── icon-heart.png    # Иконки
└── gallery-*.jpg     # Изображения галереи
```

### 2. Обычное изображение с WebP fallback

```html
<img 
  src="/images/example.jpg" 
  data-webp="/images/example.webp"
  alt="Пример изображения"
  loading="lazy"
>
```

### 2. Picture element (рекомендуется)

```html
<picture>
  <source srcset="/images/example.webp" type="image/webp">
  <img src="/images/example.jpg" alt="Пример изображения" loading="lazy">
</picture>
```

### 3. Фоновое изображение

```html
<div class="hero-section">
  <div class="hero-content">
    <!-- Content / Контент -->
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

## 🎯 SCSS Миксины

### 1. Фоновое изображение с WebP

```scss
.my-element {
  @include webp-bg-image('/images/background', 'jpg');
  background-size: cover;
  background-position: center;
}
```

### 2. Responsive фоновое изображение

```scss
.responsive-bg {
  @include webp-responsive-bg('/images/bg', 'jpg', (
    'phone': 'sm',
    'tablet': 'md',
    'desktop': 'lg'
  ));
}
```

### 3. Hero изображение

```scss
.hero {
  @include webp-hero-image('/images/hero', 'jpg', 100vh);
  
  &::before {
    // Overlay для лучшей читаемости
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
}
```

### 4. Логотип с WebP

```scss
.logo {
  @include webp-logo('/images/logo', 'png', 200px, 80px);
}
```

### 5. Иконки с WebP

```scss
.icon {
  @include webp-icon('/images/icon', 'png', 24px);
}
```

## 🔧 JavaScript API

### 1. Проверка поддержки WebP

```javascript
import { isWebPSupported, isWebPSupportedSync } from './utils/webp.js';

// Asynchronous check (recommended) / Асинхронна перевірка (рекомендується)
isWebPSupported().then(supported => {
  console.log('WebP supported:', supported);
});

// Synchronous check / Синхронна перевірка
const supported = isWebPSupportedSync();
console.log('WebP supported:', supported);
```

### 2. Добавление класса поддержки

```javascript
import { addWebPClass } from './utils/webp.js';

// Adds 'webp' or 'no-webp' class to body / Додає клас 'webp' або 'no-webp' до body
addWebPClass('webp');
```

### 3. Оптимизация изображений

```javascript
import { optimizeImages } from './utils/webp.js';

// Optimizes all images with data-webp attribute / Оптимізує всі зображення з атрибутом data-webp
optimizeImages('img[data-webp]');
```

### 4. Создание оптимизированного picture элемента

```javascript
import { createOptimizedPicture } from './utils/webp.js';

const picture = createOptimizedPicture(
  '/images/example.jpg',
  '/images/example.webp',
  'Описание изображения',
  'my-image-class'
);

document.body.appendChild(picture);
```

### 5. Предзагрузка критических изображений

```javascript
import { preloadCriticalImages } from './utils/webp.js';

const criticalImages = [
  '/images/hero-bg.jpg',
  '/images/logo.png',
  '/images/featured-product.jpg'
];

preloadCriticalImages(criticalImages);
```

## 📱 Responsive изображения

### 1. Адаптивные размеры

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

### 2. Responsive WebP фоновые изображения

```scss
.adaptive-bg {
  @include webp-responsive-bg('/images/bg', 'jpg', (
    'phone': '320',
    'tablet': '768',
    'desktop': '1200'
  ));
  
  background-size: cover;
  background-position: center;
}
```

## 🎨 Утилитарные классы

### 1. WebP поддержка

```html
<div class="webp-support">
  Контент только для браузеров с поддержкой WebP
</div>

<div class="no-webp-support">
  Контент только для браузеров БЕЗ поддержки WebP
</div>
```

### 2. Lazy loading

```html
<img src="image.jpg" class="lazy-image" loading="lazy">
```

### 3. WebP изображения

```html
<img src="image.jpg" data-webp="image.webp" class="webp-image" loading="lazy">
```

## 🚀 Оптимизация производительности

### 1. Предзагрузка критических изображений

```javascript
// In main.js / В main.js
const criticalImages = [
  '/images/hero-bg.jpg',
  '/images/logo.png'
];

preloadCriticalImages(criticalImages);
```

### 2. Lazy loading для некритических изображений

```html
<img src="image.jpg" data-webp="image.webp" loading="lazy">
```

### 3. Оптимизация качества

Настройте качество в `vite.config.js`:

```javascript
webp({
  sharpOptions: {
    quality: 80,  // 0-100, рекомендуется 80-90
    effort: 6     // 0-6, больше = лучше качество, медленнее
  }
})
```

## 📊 Результаты оптимизации

WebP обеспечивает:

- **25-35% меньше размер** по сравнению с JPEG
- **50-80% меньше размер** по сравнению с PNG
- **Быстрее загрузка** страниц
- **Лучший UX** для пользователей
- **Экономия трафика** на мобильных устройствах

## 🔍 Отладка

### 1. Проверка WebP поддержки

```javascript
// In browser console / В консолі браузера
import('./js/utils/webp.js').then(webp => {
  webp.isWebPSupported().then(supported => {
    console.log('WebP supported:', supported);
  });
});
```

### 2. Проверка классов на body

```javascript
// Check for webp or no-webp classes / Перевірте наявність класів webp або no-webp
console.log(document.body.className);
```

### 3. Проверка загруженных изображений

Откройте DevTools → Network → Img и проверьте:
- Загружаются ли WebP файлы
- Правильно ли работает fallback

## 📝 Примеры

Смотрите файл `src/examples/webp-examples.html` для полных примеров использования всех возможностей WebP в проекте.

## 🛠️ Troubleshooting

### Проблема: WebP не загружается
**Решение**: Проверьте пути к изображениям и убедитесь, что файлы существуют

### Проблема: Fallback не работает
**Решение**: Убедитесь, что оригинальные изображения доступны по указанным путям

### Проблема: Миксины не работают
**Решение**: Проверьте, что `@use 'base/webp' as *;` добавлен в `main.scss`

### Проблема: JavaScript ошибки
**Решение**: Убедитесь, что `initWebPSupport()` вызывается после загрузки DOM

---

**Теперь ваш проект автоматически оптимизирует все изображения в WebP формат! 🚀**
