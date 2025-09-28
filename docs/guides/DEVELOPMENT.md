# 🛠️ Development Guide / Керівництво з розробки

## 📋 Overview / Огляд

This guide describes the development process of the Vite Landing Template project, including environment setup, workflow, coding standards, and best practices.

Це керівництво описує процес розробки проекту Vite Landing Template, включаючи налаштування середовища, робочий процес, стандарти кодування та найкращі практики.

## 🚀 Development Environment Setup / Налаштування середовища розробки

### 1. **Requirements / Вимоги**
- **Node.js** 16+ (recommended 18+) / **Node.js** 16+ (рекомендується 18+)
- **npm** 8+ or **yarn** 1.22+ / **npm** 8+ або **yarn** 1.22+
- **Git** for version control / **Git** для версійного контролю
- Modern browser with ES6+ support / Сучасний браузер з підтримкою ES6+

### 2. **Installation / Встановлення**
```bash
# Clone repository / Клонування репозиторію
git clone <repository-url>
cd vite-landing-template

# Install dependencies / Встановлення залежностей
npm install

# Check installation / Перевірка встановлення
npm run dev
```

### 3. **IDE Setup / Налаштування IDE**
Recommended VS Code extensions / Рекомендовані розширення для VS Code:
- **ESLint** - JavaScript linting / Лінтінг JavaScript
- **Prettier** - Code formatting / Форматування коду
- **SCSS IntelliSense** - SCSS support / Підтримка SCSS
- **Handlebars** - Template support / Підтримка шаблонів
- **Auto Rename Tag** - Automatic tag renaming / Автоматичне перейменування тегів
- **Bracket Pair Colorizer** - Colored brackets / Кольорові дужки

## 📁 Workflow / Робочий процес

### 1. **Folder Structure / Структура папок**
See [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) for detailed project structure.

Дивіться [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) для детальної структури проекту.

### 2. **Development Commands / Команди розробки**

See [COMMANDS.md](../COMMANDS.md) for full command list.

Дивіться [COMMANDS.md](../COMMANDS.md) для повного списку команд.

### 3. **Git Workflow / Git робочий процес**
```bash
# Create new branch / Створення нової гілки
git checkout -b feature/new-feature

# Commit changes / Коміт змін
git add .
git commit -m "feat: add new feature"

# Push changes / Відправка змін
git push origin feature/new-feature

# Create Pull Request / Створення Pull Request
```

## 📝 Coding Standards / Стандарти кодування

### 1. **JavaScript**
```javascript
// ✅ Good / Добре
const userName = 'John Doe';
const isLoggedIn = true;

const getUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// ❌ Bad / Погано
var username = "John Doe";
var isloggedin = true;

function getUserData(userId) {
  fetch('/api/users/' + userId)
    .then(response => response.json())
    .then(data => data);
}
```

**Rules:**
- Use `const` and `let` instead of `var` / Використовуйте `const` та `let` замість `var`
- Use camelCase for variables and functions / Використовуйте camelCase для змінних та функцій
- Use async/await instead of Promise.then() / Використовуйте async/await замість Promise.then()
- Add error handling / Додавайте обробку помилок
- Use template literals for strings / Використовуйте template literals для рядків

### 2. **SCSS**
```scss
// ✅ Good / Добре
$primary-color: #007bff;
$font-size-base: 16px;

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  
  &--primary {
    background-color: $primary-color;
    color: $white;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}

// ❌ Bad / Погано
.BTN {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
}

.BTN:hover {
  background-color: #0056b3;
}
```

**Rules:**
- Use BEM methodology / Використовуйте BEM методологію
- Use variables for repeated values / Використовуйте змінні для повторюваних значень
- Don't exceed 3 nesting levels / Не перевищуйте 3 рівні вкладеності
- Use mixins for repeated code / Використовуйте міксини для повторюваного коду

### 3. **HTML**
```html
<!-- ✅ Good / Добре -->
<article class="post-card">
  <header class="post-card__header">
    <h2 class="post-card__title">{{title}}</h2>
    <time class="post-card__date" datetime="{{date}}">{{formatDate date}}</time>
  </header>
  
  <div class="post-card__content">
    <p class="post-card__excerpt">{{excerpt}}</p>
  </div>
  
  <footer class="post-card__footer">
    <a href="/posts/{{slug}}" class="post-card__link">Read more</a>
  </footer>
</article>

<!-- ❌ Bad / Погано -->
<div class="postcard">
  <h2>{{title}}</h2>
  <p>{{excerpt}}</p>
  <a href="/posts/{{slug}}">Read more</a>
</div>
```

**Rules:**
- Use semantic tags / Використовуйте семантичні теги
- Use BEM for CSS classes / Використовуйте BEM для CSS класів
- Add alt attributes for images / Додавайте alt атрибути для зображень
- Use loading="lazy" for images / Використовуйте loading="lazy" для зображень

## 🔧 Development Tools / Інструменти розробки

### 1. **ESLint**
```javascript
// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'prefer-const': 'error'
    }
  }
];
```

### 2. **Prettier**
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 3. **Husky (Git hooks)**
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint && npm run build",
      "pre-push": "npm run test"
    }
  }
}
```

## 🎨 Component Creation / Створення компонентів

### 1. **SCSS Component / SCSS компонент**
```scss
// styles/components/_button.scss
@use '../base/variables' as *;
@use '../base/mixins' as *;

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: $animation-speed;
  
  // Modifiers / Модифікатори
  &--primary {
    background-color: $primary-color;
    color: $white;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
  
  &--secondary {
    background-color: transparent;
    color: $primary-color;
    border: 2px solid $primary-color;
    
    &:hover {
      background-color: $primary-color;
      color: $white;
    }
  }
  
  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  &--small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  // States / Стани
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid $primary-color;
    outline-offset: 2px;
  }
}
```

### 2. **JavaScript Component / JavaScript компонент**
```javascript
// js/components/Modal.js
export class Modal {
  constructor(selector, options = {}) {
    this.modal = document.querySelector(selector);
    this.options = {
      closeOnEscape: true,
      closeOnBackdrop: true,
      ...options
    };
    
    this.init();
  }
  
  init() {
    if (!this.modal) {
      console.error('Modal element not found');
      return;
    }
    
    this.bindEvents();
  }
  
  bindEvents() {
    // Close button / Кнопка закриття
    const closeBtn = this.modal.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    
    // Close on Escape / Закриття по Escape
    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
    
    // Close on backdrop click / Закриття по кліку на backdrop
    if (this.options.closeOnBackdrop) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }
  }
  
  open() {
    this.modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.modal.classList.remove('modal--active');
    document.body.style.overflow = '';
  }
  
  toggle() {
    if (this.modal.classList.contains('modal--active')) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Usage / Використання
const modal = new Modal('#myModal', {
  closeOnEscape: true,
  closeOnBackdrop: true
});
```

### 3. **Handlebars Template / Handlebars шаблон**
```html
<!-- templates/modal.html -->
<div class="modal" id="{{id}}">
  <div class="modal__backdrop"></div>
  
  <div class="modal__container">
    <div class="modal__content">
      <header class="modal__header">
        <h2 class="modal__title">{{title}}</h2>
        <button class="modal__close" aria-label="Close modal">
          <svg class="modal__close-icon" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </header>
      
      <div class="modal__body">
        {{{content}}}
      </div>
      
      {{#if footer}}
      <footer class="modal__footer">
        {{#each buttons}}
        <button class="btn btn--{{type}}" data-action="{{action}}">
          {{text}}
        </button>
        {{/each}}
      </footer>
      {{/if}}
    </div>
  </div>
</div>
```

## 🧪 Testing / Тестування

### 1. **Unit Testing / Модульне тестування**
```javascript
// tests/utils/webp.test.js
import { isWebPSupported, addWebPClass } from '../../src/js/utils/webp.js';

describe('WebP Utils', () => {
  test('should detect WebP support', async () => {
    const supported = await isWebPSupported();
    expect(typeof supported).toBe('boolean');
  });
  
  test('should add WebP class to body', () => {
    addWebPClass('test-webp');
    // Check via MutationObserver or setTimeout / Перевірка через MutationObserver або setTimeout
  });
});
```

### 2. **E2E Testing / E2E тестування**
```javascript
// tests/e2e/homepage.test.js
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/Vite Landing Template/);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.header')).toBeVisible();
  await expect(page.locator('.footer')).toBeVisible();
});
```

## 📊 Performance Optimization / Оптимізація продуктивності

### 1. **Images / Зображення**
```javascript
// Lazy loading images / Ліниве завантаження зображень
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### 2. **CSS Optimization / CSS оптимізація**
```scss
// Using will-change for animations / Використання will-change для анімацій
.animated-element {
  will-change: transform, opacity;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &.animate {
    transform: translateY(0);
    opacity: 1;
  }
}

// Disabling will-change after animation / Вимкнення will-change після анімації
.animated-element.animation-complete {
  will-change: auto;
}
```

### 3. **JavaScript Optimization / JavaScript оптимізація**
```javascript
// Debounce for event handlers / Debounce для обробників подій
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Usage / Використання
const handleScroll = debounce(() => {
  // scroll handling logic / логіка обробки скролу
}, 100);

window.addEventListener('scroll', handleScroll);
```

## 🚨 Debugging / Відлагодження

### 1. **DevTools**
- **Console** - JavaScript logging and debugging / Логування та відлагодження JavaScript
- **Network** - Resource loading monitoring / Моніторинг завантаження ресурсів
- **Performance** - Performance analysis / Аналіз продуктивності
- **Lighthouse** - Performance and SEO audit / Аудит продуктивності та SEO

### 2. **Logging / Логування**
```javascript
// Structured logging / Структуроване логування
const logger = {
  info: (message, data = {}) => {
    console.log(`[INFO] ${message}`, data);
  },
  
  warn: (message, data = {}) => {
    console.warn(`[WARN] ${message}`, data);
  },
  
  error: (message, error = {}) => {
    console.error(`[ERROR] ${message}`, error);
  }
};

// Usage / Використання
logger.info('User logged in', { userId: 123 });
logger.error('Failed to load data', error);
```

### 3. **Source Maps**
```javascript
// vite.config.js
export default defineConfig({
  build: {
    sourcemap: true // For debugging in production / Для відлагодження в продакшені
  },
  css: {
    devSourcemap: true // Source maps for SCSS / Source maps для SCSS
  }
});
```

## 📚 Best Practices / Найкращі практики

### 1. **Code Review / Код-рев'ю**
- Check functionality / Перевіряйте функціональність
- Pay attention to performance / Звертайте увагу на продуктивність
- Check accessibility / Перевіряйте доступність
- Ensure browser compatibility / Переконайтеся у сумісності з браузерами

### 2. **Documentation / Документація**
- Comment complex logic / Коментуйте складну логіку
- Document API functions / Документуйте API функції
- Update README when making changes / Оновлюйте README при змінах
- Use JSDoc for JavaScript / Використовуйте JSDoc для JavaScript

### 3. **Versioning / Версіонування**
- Use semantic versioning / Використовуйте семантичне версіонування
- Maintain CHANGELOG / Ведіть CHANGELOG
- Tag releases / Тегуйте релізи
- Document breaking changes / Документуйте breaking changes

---

**Follow these practices for quality development! / Дотримуйтеся цих практик для якісної розробки! 🛠️**
