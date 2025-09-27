# 📝 JavaScript - Modern JavaScript ES6+ / Сучасний JavaScript ES6+

## 📋 Overview / Огляд

The project uses modern JavaScript with ES6+ syntax support, modular architecture, and modern language features. The code is organized into modules for better maintainability and reusability.

Проект використовує сучасний JavaScript з підтримкою ES6+ синтаксису, модульної архітектури та сучасних можливостей мови. Код організований у модулі для кращої підтримуваності та перевикористання.

## 🚀 Main Features / Основні можливості

- 📦 **ES6 modules / ES6 модулі** - Import/export modules / Імпорт/експорт модулів
- 🎯 **Modern syntax / Сучасний синтаксис** - Arrow functions, destructuring, template literals / Стрілкові функції, деструктуризація, шаблонні літерали
- 🔧 **Utilities / Утиліти** - Reusable functions and components / Перевикористовувані функції та компоненти
- 🖼️ **WebP support / Підтримка WebP** - Image optimization / Оптимізація зображень
- 🎨 **DOM manipulation / DOM маніпуляції** - Working with page elements / Робота з елементами сторінки
- 📱 **Responsive functions / Адаптивні функції** - Adaptive behavior / Адаптивна поведінка

## 📁 JavaScript Structure in Project / Структура JavaScript в проекті

```
src/js/
├── main.js              # Main application file / Головний файл додатку
├── utils/               # Utilities and helper functions / Утиліти та допоміжні функції
│   ├── webp.js          # WebP utilities / WebP утиліти
│   ├── dom.js           # DOM utilities / DOM утиліти
│   ├── storage.js       # Working with localStorage/sessionStorage / Робота з localStorage/sessionStorage
│   └── validation.js    # Form validation / Валідація форм
└── components/          # Components (future) / Компоненти (майбутнє)
    ├── slider.js        # Slider component / Слайдер компонент
    └── modal.js         # Modal windows / Модальні вікна
```

## 📦 ES6 Модули

### 1. **Импорт модулей**
```javascript
// main.js
// Import styles / Імпорт стилів
import '../styles/main.scss';

// Import utilities / Імпорт утиліт
import { initWebPSupport, preloadCriticalImages } from './utils/webp.js';
import { debounce, throttle } from './utils/dom.js';

// Import libraries / Імпорт бібліотек
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
```

### 2. **Экспорт функций**
```javascript
// utils/webp.js
export const isWebPSupported = () => {
  return new Promise((resolve) => {
    // логика проверки WebP
  });
};

export const addWebPClass = (className = 'webp') => {
  // логика добавления класса
};

// Named export by default / Іменований експорт за замовчуванням
export default {
  isWebPSupported,
  addWebPClass,
  optimizeImages
};
```

### 3. **Динамические импорты**
```javascript
// Lazy loading modules / Ліниве завантаження модулів
const loadComponent = async (componentName) => {
  const module = await import(`./components/${componentName}.js`);
  return module.default;
};

// Usage / Використання
const sliderModule = await loadComponent('slider');
sliderModule.init();
```

## 🎯 Современный синтаксис ES6+

### 1. **Arrow Functions**
```javascript
// Regular function / Звичайна функція
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function с одним параметром
const square = x => x * x;

// Arrow function с блоком
const processData = (data) => {
  const result = data.map(item => item.value);
  return result.filter(value => value > 0);
};
```

### 2. **Destructuring**
```javascript
// Object destructuring / Деструктуризація об'єктів
const user = { name: 'John', email: 'john@example.com', age: 30 };

const { name, email, age } = user;
// или с переименованием
const { name: userName, email: userEmail } = user;

// Array destructuring / Деструктуризація масивів
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// Destructuring in function parameters / Деструктуризація в параметрах функцій
const displayUser = ({ name, email }) => {
  console.log(`${name} - ${email}`);
};
```

### 3. **Template Literals**
```javascript
// Regular concatenation / Звичайна конкатенація
const message = 'Hello, ' + userName + '!';

// Template literal
const message = `Hello, ${userName}!`;

// Multiline strings / Багаторядкові рядки
const html = `
  <div class="user-card">
    <h3>${user.name}</h3>
    <p>${user.email}</p>
  </div>
`;

// Expressions in templates / Вирази в шаблонах
const price = 29.99;
const discount = 0.1;
const finalPrice = `Price: $${price * (1 - discount)}`;
```

### 4. **Spread и Rest операторы**
```javascript
// Spread для массивов
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread для объектов
const user = { name: 'John', age: 30 };
const extendedUser = { ...user, email: 'john@example.com' };

// Rest параметры
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3, 4, 5); // 15
```

## 🔧 Утилиты и вспомогательные функции

### 1. **WebP утилиты (webp.js)**
```javascript
/**
 * Проверка поддержки WebP
 */
export const isWebPSupported = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Добавление класса WebP поддержки
 */
export const addWebPClass = (className = 'webp') => {
  isWebPSupported().then((supported) => {
    if (supported) {
      document.body.classList.add(className);
      document.documentElement.classList.add(className);
    } else {
      document.body.classList.add('no-webp');
      document.documentElement.classList.add('no-webp');
    }
  });
};
```

### 2. **DOM утилиты (dom.js)**
```javascript
/**
 * Debounce функция
 */
export const debounce = (func, wait) => {
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

/**
 * Throttle функция
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Поиск элемента
 */
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

export const $$ = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

/**
 * Создание элемента
 */
export const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};
```

### 3. **Storage утилиты (storage.js)**
```javascript
/**
 * Работа с localStorage
 */
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  remove: (key) => {
    localStorage.removeItem(key);
  },
  
  clear: () => {
    localStorage.clear();
  }
};

/**
 * Работа с sessionStorage
 */
export const sessionStorage = {
  set: (key, value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return defaultValue;
    }
  }
};
```

### 4. **Валидация форм (validation.js)**
```javascript
/**
 * Валидация email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Валидация телефона
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Валидация формы
 */
export const validateForm = (formData, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = formData[field];
    const rule = rules[field];
    
    if (rule.required && !value) {
      errors[field] = `${field} is required`;
    } else if (value && rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message || `${field} is invalid`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
```

## 🎨 Работа с DOM

### 1. **События**
```javascript
// Simple event / Проста подія
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
});

// Event delegation / Делегування подій
document.addEventListener('click', (event) => {
  if (event.target.matches('.button')) {
    handleButtonClick(event.target);
  }
});

// Events with debounce / Події з debounce
const handleScroll = debounce(() => {
  console.log('Scrolled');
}, 100);

window.addEventListener('scroll', handleScroll);
```

### 2. **Анимации**
```javascript
// Smooth element appearance / Плавна поява елемента
const fadeIn = (element, duration = 300) => {
  element.style.opacity = '0';
  element.style.display = 'block';
  
  const start = performance.now();
  
  const animate = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.opacity = progress;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

// Scroll animation to element / Анімація скролу до елемента
const scrollToElement = (element, offset = 0) => {
  const elementPosition = element.offsetTop - offset;
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
};
```

### 3. **Lazy Loading**
```javascript
// Lazy loading изображений
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

## 📱 Responsive функции

### 1. **Определение устройства**
```javascript
export const device = {
  isMobile: () => window.innerWidth <= 768,
  isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: () => window.innerWidth > 1024,
  
  getType: () => {
    if (device.isMobile()) return 'mobile';
    if (device.isTablet()) return 'tablet';
    return 'desktop';
  }
};
```

### 2. **Адаптивные обработчики**
```javascript
const createResponsiveHandler = (mobileHandler, desktopHandler) => {
  return () => {
    if (device.isMobile()) {
      mobileHandler();
    } else {
      desktopHandler();
    }
  };
};

// Usage / Використання
const handleNavigation = createResponsiveHandler(
  () => toggleMobileMenu(),
  () => showDesktopDropdown()
);
```

## 🎯 Асинхронное программирование

### 1. **Promises**
```javascript
// Create Promise / Створення Promise
const loadData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

// Usage / Використання
loadData('/api/users')
  .then(users => {
    console.log('Users loaded:', users);
  })
  .catch(error => {
    console.error('Error loading users:', error);
  });
```

### 2. **Async/Await**
```javascript
// Asynchronous function / Асинхронна функція
const loadUserData = async (userId) => {
  try {
    const user = await fetch(`/api/users/${userId}`).then(r => r.json());
    const posts = await fetch(`/api/users/${userId}/posts`).then(r => r.json());
    
    return { user, posts };
  } catch (error) {
    console.error('Error loading user data:', error);
    throw error;
  }
};

// Usage / Використання
const initializeUserProfile = async () => {
  try {
    const { user, posts } = await loadUserData(123);
    renderUserProfile(user);
    renderUserPosts(posts);
  } catch (error) {
    showErrorMessage('Failed to load user data');
  }
};
```

## 🔧 Обработка ошибок

### 1. **Try/Catch блоки**
```javascript
const safeJSONParse = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON parse error:', error);
    return null;
  }
};
```

### 2. **Глобальная обработка ошибок**
```javascript
// Handle unhandled errors / Обробка необроблених помилок
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Send error to server for logging / Відправка помилки на сервер для логування
  logError(event.error);
});

// Handle unhandled Promise rejections / Обробка необроблених Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault();
});
```

## 🚨 Troubleshooting

### Problem: Modules not loading / Проблема: Модулі не завантажуються
**Решение:**
```javascript
// Make sure import paths are correct / Переконайтеся в правильності шляхів імпорту
import { functionName } from './utils/module.js';

// Check export in module / Перевірте експорт в модулі
export const functionName = () => {
  // код функции
};
```

### Problem: Events not working / Проблема: Події не працюють
**Решение:**
```javascript
// Make sure DOM is loaded / Переконайтеся, що DOM завантажений
document.addEventListener('DOMContentLoaded', () => {
  // код обработчиков событий
});
```

### Проблема: Асинхронные операции
**Решение:**
```javascript
// Use async/await or .then() / Використовуйте async/await або .then()
const result = await asyncFunction();
// или
asyncFunction().then(result => {
  // обработка результата
});
```

## 📚 Полезные ссылки

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ES6 Features](https://es6-features.org/)
- [JavaScript.info](https://javascript.info/)

---

**JavaScript делает веб-приложения интерактивными! 📝**
