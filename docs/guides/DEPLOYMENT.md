# 🚀 Deployment Guide / Керівництво з розгортання

## 📋 Overview / Огляд

This guide describes various ways to deploy the Vite Landing Template project on different platforms and hosting services.

Це керівництво описує різні способи розгортання проекту Vite Landing Template на різних платформах та хостингах.

## 🛠️ Deployment Preparation / Підготовка до розгортання

### 1. **Final Build / Фінальна збірка**
```bash
# Make sure everything works locally / Переконайтеся, що все працює локально
npm run dev

# Create production build / Створіть продакшн збірку
npm run build

# Check the build / Перевірте збірку
npm run preview
```

### 2. **Настройка для продакшена**
```javascript
// vite.config.js
export default defineConfig({
  base: '/', // Change to your domain or path / Змініть на ваш домен або шлях
  build: {
    outDir: '../dist/',
    emptyOutDir: true,
    sourcemap: false, // Disable source maps in production / Вимкніть source maps в продакшені
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log / Видаліть console.log
        drop_debugger: true
      }
    }
  }
});
```

### 3. **Удаление SEO защиты**
```html
<!-- src/index.html - УДАЛИТЕ эти мета-теги -->
<!-- <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,notranslate,noimageindex">
<meta name="googlebot" content="noindex,nofollow,noarchive,nosnippet,notranslate,noimageindex">
<meta name="bingbot" content="noindex,nofollow,noarchive,nosnippet,notranslate,noimageindex">
<meta name="slurp" content="noindex,nofollow,noarchive,nosnippet,notranslate,noimageindex"> -->

<!-- REPLACE with SEO-optimized tags / ЗАМІНІТЬ на SEO-оптимізовані теги -->
<meta name="description" content="Your site description">
<meta name="keywords" content="keywords, for, search">
<meta property="og:title" content="Your site title">
<meta property="og:description" content="Description for social networks">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">
```

### 4. **Обновление robots.txt**
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 🌐 Способы деплоя

### 1. **Netlify**

#### Автоматический деплой из Git
1. Подключите репозиторий к Netlify
2. Настройте сборку:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. Настройте переменные окружения (если нужно)
4. Деплой произойдет автоматически при push

#### Ручной деплой
```bash
# Соберите проект
npm run build

# Перетащите папку dist/ в Netlify Drop
# или используйте Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Настройка _redirects
```txt
# public/_redirects (для SPA)
/*    /index.html   200
```

### 2. **Vercel**

#### Автоматический деплой
1. Подключите репозиторий к Vercel
2. Настройки проекта:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
3. Деплой произойдет автоматически

#### vercel.json конфигурация
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 3. **GitHub Pages**

#### Настройка GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Настройка vite.config.js
```javascript
// vite.config.js
export default defineConfig({
  base: '/repository-name/', // Replace with your repository name / Замініть на ім'я вашого репозиторію
  // остальная конфигурация...
});
```

### 4. **Firebase Hosting**

#### Установка Firebase CLI
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### firebase.json конфигурация
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Деплой
```bash
npm run build
firebase deploy
```

### 5. **AWS S3 + CloudFront**

#### Настройка S3
```bash
# Установите AWS CLI
aws configure

# Создайте bucket
aws s3 mb s3://your-bucket-name

# Настройте статический хостинг
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

#### Загрузка файлов
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### Настройка CloudFront
1. Создайте CloudFront distribution
2. Укажите S3 bucket как origin
3. Настройте Default Root Object: `index.html`
4. Добавьте Error Pages для SPA:
   ```
   HTTP Error Code: 404
   Response Page Path: /index.html
   HTTP Response Code: 200
   ```

### 6. **Обычный хостинг (cPanel, FTP)**

#### Подготовка файлов
```bash
npm run build
# Скопируйте содержимое папки dist/ на сервер
```

#### Настройка .htaccess (Apache)
```apache
# .htaccess
RewriteEngine On

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

## 🔧 Настройка домена

### 1. **Пользовательский домен**
```javascript
// vite.config.js
export default defineConfig({
  base: 'https://yourdomain.com/', // For absolute URLs / Для абсолютних URL
  // или
  base: '/', // For root domain / Для кореневого домену
});
```

### 2. **SSL сертификат**
- **Let's Encrypt** - бесплатный SSL
- **Cloudflare** - бесплатный SSL + CDN
- **AWS Certificate Manager** - для AWS

### 3. **DNS настройки**
```
# A запись для корневого домена
@    A    YOUR_SERVER_IP

# CNAME для www
www  CNAME yourdomain.com

# Для CloudFront
@    CNAME d1234567890.cloudfront.net
```

## 📊 Оптимизация производительности

### 1. **Сжатие**
```bash
# Gzip сжатие (обычно настроено на сервере)
# Brotli сжатие (современные серверы)
```

### 2. **CDN**
```javascript
// Using CDN for static resources / Використання CDN для статичних ресурсів
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'vue'], // если используете CDN версии
      output: {
        globals: {
          react: 'React',
          vue: 'Vue'
        }
      }
    }
  }
});
```

### 3. **Preload критических ресурсов**
```html
<!-- In head / В head -->
<link rel="preload" href="/fonts/space-mono.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero-bg.webp" as="image">
<link rel="preload" href="/js/main.js" as="script">
```

## 🔍 Мониторинг и аналитика

### 1. **Google Analytics**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. **Google Search Console**
1. Добавьте свойство в Search Console
2. Подтвердите владение доменом
3. Отправьте sitemap.xml

### 3. **Мониторинг ошибок**
```javascript
// Sentry для отслеживания ошибок
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});

// Handling unhandled errors / Обробка необроблених помилок
window.addEventListener('error', (event) => {
  Sentry.captureException(event.error);
});
```

## 🚨 Troubleshooting

### Problem: 404 errors on SPA / Проблема: 404 помилки на SPA
**Решение:**
```apache
# .htaccess для Apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Problem: Incorrect resource paths / Проблема: Неправильні шляхи до ресурсів
**Решение:**
```javascript
// Check base in vite.config.js / Перевірте base в vite.config.js
export default defineConfig({
  base: '/correct-path/', // Make sure the path is correct / Переконайтеся, що шлях правильний
});
```

### Problem: Slow loading / Проблема: Повільне завантаження
**Решение:**
- Включите сжатие на сервере
- Используйте CDN
- Оптимизируйте изображения
- Включите кеширование

### Problem: CORS errors / Проблема: CORS помилки
**Решение:**
```javascript
// Configure CORS on server / Налаштуйте CORS на сервері
// Or use proxy in vite.config.js / Або використовуйте проксі в vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
});
```

## 📋 Чек-лист деплоя

### Перед деплоем
- [ ] Удалены SEO защиты
- [ ] Обновлен robots.txt
- [ ] Настроены правильные мета-теги
- [ ] Проверена локальная сборка
- [ ] Настроен правильный base путь

### После деплоя
- [ ] Проверен доступ к сайту
- [ ] Проверены все ссылки
- [ ] Проверена загрузка изображений
- [ ] Проверена работа JavaScript
- [ ] Настроена аналитика
- [ ] Отправлен sitemap в Search Console

### Мониторинг
- [ ] Настроен мониторинг ошибок
- [ ] Настроена аналитика
- [ ] Настроены уведомления о падениях
- [ ] Настроено резервное копирование

## 📚 Полезные ссылки

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [AWS S3 Static Website](https://docs.aws.amazon.com/s3/latest/userguide/WebsiteHosting.html)

---

**Успешного деплоя! 🚀**
