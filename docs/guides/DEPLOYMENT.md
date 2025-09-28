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

### 2. **Production Configuration / Налаштування для продакшену**
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

### 3. **SEO Protection Removal / Видалення SEO захисту**
```html
<!-- src/index.html - REMOVE these meta tags / ВИДАЛІТЬ ці мета-теги -->
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

### 4. **robots.txt Update / Оновлення robots.txt**
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 🌐 Deployment Methods / Способи розгортання

### 1. **Netlify**

#### Automatic deployment from Git / Автоматичне розгортання з Git
1. Connect repository to Netlify / Підключіть репозиторій до Netlify
2. Configure build / Налаштуйте збірку:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. Configure environment variables (if needed) / Налаштуйте змінні середовища (якщо потрібно)
4. Deployment will happen automatically on push / Розгортання відбудеться автоматично при push

#### Manual deployment / Ручне розгортання
```bash
# Build project / Зберіть проект
npm run build

# Drag dist/ folder to Netlify Drop / Перетягніть папку dist/ в Netlify Drop
# or use Netlify CLI / або використовуйте Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### _redirects Configuration / Налаштування _redirects
```txt
# public/_redirects (for SPA / для SPA)
/*    /index.html   200
```

### 2. **Vercel**

#### Automatic deployment / Автоматичне розгортання
1. Connect repository to Vercel / Підключіть репозиторій до Vercel
2. Настройки проекта:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
3. Deployment will happen automatically / Розгортання відбудеться автоматично

#### vercel.json Configuration / vercel.json конфігурація
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

#### GitHub Actions Setup / Налаштування GitHub Actions
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

#### vite.config.js Setup / Налаштування vite.config.js
```javascript
// vite.config.js
export default defineConfig({
  base: '/repository-name/', // Replace with your repository name / Замініть на ім'я вашого репозиторію
  // rest of configuration / решта конфігурації...
});
```

### 4. **Firebase Hosting**

#### Firebase CLI Installation / Встановлення Firebase CLI
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### firebase.json Configuration / firebase.json конфігурація
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

#### Deployment / Розгортання
```bash
npm run build
firebase deploy
```

### 5. **AWS S3 + CloudFront**

#### S3 Setup / Налаштування S3
```bash
# Install AWS CLI / Встановіть AWS CLI
aws configure

# Create bucket / Створіть bucket
aws s3 mb s3://your-bucket-name

# Configure static hosting / Налаштуйте статичний хостинг
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

#### File Upload / Завантаження файлів
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### CloudFront Setup / Налаштування CloudFront
1. Create CloudFront distribution / Створіть CloudFront distribution
2. Specify S3 bucket as origin / Вкажіть S3 bucket як origin
3. Configure Default Root Object: `index.html` / Налаштуйте Default Root Object: `index.html`
4. Add Error Pages for SPA / Додайте Error Pages для SPA:
   ```
   HTTP Error Code: 404
   Response Page Path: /index.html
   HTTP Response Code: 200
   ```

### 6. **Regular Hosting (cPanel, FTP) / Звичайний хостинг (cPanel, FTP)**

#### File Preparation / Підготовка файлів
```bash
npm run build
# Copy contents of dist/ folder to server / Скопіюйте вміст папки dist/ на сервер
```

#### .htaccess Setup (Apache) / Налаштування .htaccess (Apache)
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

## 🔧 Domain Configuration / Налаштування домену

### 1. **Custom Domain / Користувацький домен**
```javascript
// vite.config.js
export default defineConfig({
  base: 'https://yourdomain.com/', // For absolute URLs / Для абсолютних URL
  // or / або
  base: '/', // For root domain / Для кореневого домену
});
```

### 2. **SSL Certificate / SSL сертифікат**
- **Let's Encrypt** - free SSL / безкоштовний SSL
- **Cloudflare** - free SSL + CDN / безкоштовний SSL + CDN
- **AWS Certificate Manager** - for AWS / для AWS

### 3. **DNS Configuration / DNS налаштування**
```
# A record for root domain / A запис для кореневого домену
@    A    YOUR_SERVER_IP

# CNAME for www / CNAME для www
www  CNAME yourdomain.com

# For CloudFront / Для CloudFront
@    CNAME d1234567890.cloudfront.net
```

## 📊 Performance Optimization / Оптимізація продуктивності

### 1. **Compression / Стискання**
```bash
# Gzip compression (usually configured on server) / Gzip стискання (зазвичай налаштовано на сервері)
# Brotli compression (modern servers) / Brotli стискання (сучасні сервери)
```

### 2. **CDN**
```javascript
// Using CDN for static resources / Використання CDN для статичних ресурсів
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'vue'], // if using CDN versions / якщо використовуєте CDN версії
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

### 3. **Critical Resources Preload / Preload критичних ресурсів**
```html
<!-- In head / В head -->
<link rel="preload" href="/fonts/space-mono.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero-bg.webp" as="image">
<link rel="preload" href="/js/main.js" as="script">
```

## 🔍 Monitoring and Analytics / Моніторинг та аналітика

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
1. Add property to Search Console / Додайте властивість в Search Console
2. Verify domain ownership / Підтвердіть володіння доменом
3. Submit sitemap.xml / Відправте sitemap.xml

### 3. **Error Monitoring / Моніторинг помилок**
```javascript
// Sentry for error tracking / Sentry для відстеження помилок
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
**Solution:**
```apache
# .htaccess for Apache / .htaccess для Apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Problem: Incorrect resource paths / Проблема: Неправильні шляхи до ресурсів
**Solution:**
```javascript
// Check base in vite.config.js / Перевірте base в vite.config.js
export default defineConfig({
  base: '/correct-path/', // Make sure the path is correct / Переконайтеся, що шлях правильний
});
```

### Problem: Slow loading / Проблема: Повільне завантаження
**Solution:**
- Enable compression on server / Увімкніть стискання на сервері
- Use CDN / Використовуйте CDN
- Optimize images / Оптимізуйте зображення
- Enable caching / Увімкніть кешування

### Problem: CORS errors / Проблема: CORS помилки
**Solution:**
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

## 📋 Deployment Checklist / Чек-лист деплою

### Before Deployment / Перед деплоєм
- [ ] SEO protections removed / Видалені SEO захисти
- [ ] robots.txt updated / Оновлений robots.txt
- [ ] Correct meta tags configured / Налаштовані правильні мета-теги
- [ ] Local build tested / Перевірена локальна збірка
- [ ] Correct base path configured / Налаштований правильний base шлях

### After Deployment / Після деплою
- [ ] Site access verified / Перевірений доступ до сайту
- [ ] All links checked / Перевірені всі посилання
- [ ] Image loading verified / Перевірена завантаження зображень
- [ ] JavaScript functionality tested / Перевірена робота JavaScript
- [ ] Analytics configured / Налаштована аналітика
- [ ] Sitemap submitted to Search Console / Відправлений sitemap в Search Console

### Monitoring / Моніторинг
- [ ] Error monitoring configured / Налаштований моніторинг помилок
- [ ] Analytics configured / Налаштована аналітика
- [ ] Downtime notifications configured / Налаштовані сповіщення про падіння
- [ ] Backup configured / Налаштоване резервне копіювання

## 📚 Useful Links / Корисні посилання

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [AWS S3 Static Website](https://docs.aws.amazon.com/s3/latest/userguide/WebsiteHosting.html)

---

**Successful deployment! / Успішного деплою! 🚀**
