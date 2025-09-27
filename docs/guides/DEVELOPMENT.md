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
- **Prettier** - Форматирование кода
- **SCSS IntelliSense** - Поддержка SCSS
- **Handlebars** - Поддержка шаблонов
- **Auto Rename Tag** - Автоматическое переименование тегов
- **Bracket Pair Colorizer** - Цветные скобки

## 📁 Рабочий процесс

### 1. **Структура папок**
See [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) for detailed project structure.

Дивіться [PROJECT_STRUCTURE_CENTRAL.md](../PROJECT_STRUCTURE_CENTRAL.md) для детальної структури проекту.

### 2. **Команды разработки**

See [COMMANDS.md](../COMMANDS.md) for full command list.

Дивіться [COMMANDS.md](../COMMANDS.md) для повного списку команд.

### 3. **Workflow Git**
```bash
# Создание новой ветки
git checkout -b feature/new-feature

# Коммит изменений
git add .
git commit -m "feat: add new feature"

# Отправка изменений
git push origin feature/new-feature

# Создание Pull Request
```

## 📝 Стандарты кодирования

### 1. **JavaScript**
```javascript
// ✅ Хорошо
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

// ❌ Плохо
var username = "John Doe";
var isloggedin = true;

function getUserData(userId) {
  fetch('/api/users/' + userId)
    .then(response => response.json())
    .then(data => data);
}
```

**Правила:**
- Используйте `const` и `let` вместо `var`
- Используйте camelCase для переменных и функций
- Используйте async/await вместо Promise.then()
- Добавляйте обработку ошибок
- Используйте template literals для строк

### 2. **SCSS**
```scss
// ✅ Хорошо
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

// ❌ Плохо
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

**Правила:**
- Используйте BEM методологию
- Используйте переменные для повторяющихся значений
- Не превышайте 3 уровня вложенности
- Используйте миксины для повторяющегося кода

### 3. **HTML**
```html
<!-- ✅ Хорошо -->
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

<!-- ❌ Плохо -->
<div class="postcard">
  <h2>{{title}}</h2>
  <p>{{excerpt}}</p>
  <a href="/posts/{{slug}}">Read more</a>
</div>
```

**Правила:**
- Используйте семантические теги
- Используйте BEM для CSS классов
- Добавляйте alt атрибуты для изображений
- Используйте loading="lazy" для изображений

## 🔧 Инструменты разработки

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

## 🎨 Создание компонентов

### 1. **SCSS компонент**
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

### 2. **JavaScript компонент**
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

### 3. **Handlebars шаблон**
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

## 🧪 Тестирование

### 1. **Модульное тестирование**
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

### 2. **E2E тестирование**
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

## 📊 Оптимизация производительности

### 1. **Изображения**
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

### 2. **CSS оптимизация**
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

### 3. **JavaScript оптимизация**
```javascript
// Debounce для обработчиков событий
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
  // логика обработки скролла
}, 100);

window.addEventListener('scroll', handleScroll);
```

## 🚨 Отладка

### 1. **DevTools**
- **Console** - Логирование и отладка JavaScript
- **Network** - Мониторинг загрузки ресурсов
- **Performance** - Анализ производительности
- **Lighthouse** - Аудит производительности и SEO

### 2. **Логирование**
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
    devSourcemap: true // Source maps для SCSS
  }
});
```

## 📚 Лучшие практики

### 1. **Код-ревью**
- Проверяйте функциональность
- Обращайте внимание на производительность
- Проверяйте доступность (accessibility)
- Убедитесь в совместимости с браузерами

### 2. **Документация**
- Комментируйте сложную логику
- Документируйте API функций
- Обновляйте README при изменениях
- Используйте JSDoc для JavaScript

### 3. **Версионирование**
- Используйте семантическое версионирование
- Ведите CHANGELOG
- Тегируйте релизы
- Документируйте breaking changes

---

**Следуйте этим практикам для качественной разработки! 🛠️**
