# 🛠️ Utility Functions / Утилітарні функції

## 📋 Overview / Огляд

Utility functions provide common animation and DOM manipulation helpers used across components. These functions handle smooth transitions, element visibility, and height animations.

Утилітарні функції надають загальні помічники для анімацій та маніпуляцій з DOM, які використовуються в компонентах. Ці функції обробляють плавні переходи, видимість елементів та анімації висоти.

## 🚀 Features / Можливості

- ✅ **Fade Animations** - Smooth opacity transitions / Плавні переходи прозорості
- ✅ **Slide Animations** - Height-based slide effects / Ефекти слайду на основі висоти
- ✅ **Callback Support** - Execute functions after animations / Виконання функцій після анімацій
- ✅ **Duration Control** - Configurable animation timing / Налаштовувана тривалість анімації
- ✅ **Cross-browser Compatible** - Works in all modern browsers / Працює у всіх сучасних браузерах

## 📁 File Structure / Структура файлів

```
src/js/utils/
├── fade.js        # Fade in/out animations / Анімації fade in/out
└── slideIn.js     # Slide up/down animations / Анімації slide up/down
```

## 🎨 Fade Animations / Анімації fade

### Import / Імпорт

```javascript
import { fadeIn, fadeOut } from './utils/fade.js';
```

### Functions / Функції

#### `fadeIn($el, delay, callback)`

Fades in an element by changing its opacity from 0 to 1.

Плавно з'являє елемент, змінюючи його прозорість з 0 на 1.

**Parameters / Параметри:**
- `$el` (HTMLElement) - Element to fade in / Елемент для з'явлення
- `delay` (number) - Animation duration in milliseconds / Тривалість анімації в мілісекундах
- `callback` (function, optional) - Function to call after animation / Функція для виклику після анімації

**Example / Приклад:**

```javascript
const element = document.querySelector('.my-element');

// Simple fade in / Просте з'явлення
fadeIn(element, 300);

// Fade in with callback / З'явлення з колбеком
fadeIn(element, 500, (el) => {
  console.log('Element faded in:', el);
  el.classList.add('fade-complete');
});
```

#### `fadeOut($el, delay, callback)`

Fades out an element by changing its opacity from 1 to 0.

Плавно зникає елемент, змінюючи його прозорість з 1 на 0.

**Parameters / Параметри:**
- `$el` (HTMLElement) - Element to fade out / Елемент для зникнення
- `delay` (number) - Animation duration in milliseconds / Тривалість анімації в мілісекундах
- `callback` (function, optional) - Function to call after animation / Функція для виклику після анімації

**Example / Приклад:**

```javascript
const element = document.querySelector('.my-element');

// Simple fade out / Просте зникнення
fadeOut(element, 300);

// Fade out with callback / Зникнення з колбеком
fadeOut(element, 500, (el) => {
  console.log('Element faded out:', el);
  el.style.display = 'none';
});
```

### Usage Examples / Приклади використання

#### 1. Modal Dialog / Модальне діалогове вікно

```javascript
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');

// Show modal / Показати модальне вікно
function showModal() {
  overlay.style.display = 'block';
  modal.style.display = 'block';
  
  fadeIn(overlay, 200);
  fadeIn(modal, 300, () => {
    modal.classList.add('modal-visible');
  });
}

// Hide modal / Приховати модальне вікно
function hideModal() {
  fadeOut(modal, 300, () => {
    modal.style.display = 'none';
    fadeOut(overlay, 200, () => {
      overlay.style.display = 'none';
    });
  });
}
```

#### 2. Image Gallery / Галерея зображень

```javascript
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
  // Hide all images / Приховати всі зображення
  images.forEach((img, i) => {
    if (i !== index) {
      fadeOut(img, 200);
    }
  });
  
  // Show selected image / Показати вибране зображення
  fadeIn(images[index], 300, (img) => {
    img.scrollIntoView({ behavior: 'smooth' });
  });
}
```

## 📏 Slide Animations / Анімації slide

### Import / Імпорт

```javascript
import { slideUp, slideDown, slideToggle } from './utils/slideIn.js';
```

### Functions / Функції

#### `slideUp(target, duration, callback)`

Slides up an element by animating its height to 0.

Піднімає елемент вгору, анімуючи його висоту до 0.

**Parameters / Параметри:**
- `target` (HTMLElement) - Element to slide up / Елемент для підняття
- `duration` (number, default: 500) - Animation duration in milliseconds / Тривалість анімації в мілісекундах
- `callback` (function, optional) - Function to call after animation / Функція для виклику після анімації

#### `slideDown(target, duration, callback)`

Slides down an element by animating its height from 0 to natural height.

Опускає елемент вниз, анімуючи його висоту з 0 до природної висоти.

**Parameters / Параметри:**
- `target` (HTMLElement) - Element to slide down / Елемент для опускання
- `duration` (number, default: 500) - Animation duration in milliseconds / Тривалість анімації в мілісекундах
- `callback` (function, optional) - Function to call after animation / Функція для виклику після анімації

#### `slideToggle(target, duration, callback)`

Toggles between slide up and slide down based on element visibility.

Перемикає між підняттям і опусканням на основі видимості елемента.

**Parameters / Параметри:**
- `target` (HTMLElement) - Element to toggle / Елемент для перемикання
- `duration` (number, default: 500) - Animation duration in milliseconds / Тривалість анімації в мілісекундах
- `callback` (function, optional) - Function to call after animation / Функція для виклику після анімації

### Usage Examples / Приклади використання

#### 1. Accordion Implementation / Реалізація аккордеону

```javascript
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const trigger = item.querySelector('.accordion-trigger');
  const content = item.querySelector('.accordion-content');
  
  trigger.addEventListener('click', () => {
    if (content.style.display === 'none') {
      slideDown(content, 300, () => {
        item.classList.add('is-open');
      });
    } else {
      slideUp(content, 300, () => {
        item.classList.remove('is-open');
      });
    }
  });
});
```

#### 2. Collapsible Menu / Згортається меню

```javascript
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  slideToggle(mobileMenu, 400, () => {
    menuToggle.classList.toggle('menu-open');
  });
});
```

#### 3. Expandable Content / Розширюваний контент

```javascript
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      slideUp(content, 250, () => {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Show more';
      });
    } else {
      slideDown(content, 250, () => {
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Show less';
      });
    }
  });
});
```

#### 4. Progressive Disclosure / Поступове розкриття

```javascript
class ProgressiveDisclosure {
  constructor(container) {
    this.container = container;
    this.triggers = container.querySelectorAll('.disclosure-trigger');
    this.init();
  }
  
  init() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.toggleContent(trigger);
      });
    });
  }
  
  toggleContent(trigger) {
    const content = trigger.nextElementSibling;
    const isOpen = trigger.classList.contains('is-open');
    
    if (isOpen) {
      slideUp(content, 300, () => {
        trigger.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    } else {
      slideDown(content, 300, () => {
        trigger.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      });
    }
  }
}

// Initialize / Ініціалізація
const disclosure = new ProgressiveDisclosure(document.querySelector('.disclosure-container'));
```

## 🎯 Advanced Usage / Розширене використання

### 1. Chained Animations / Ланцюгові анімації

```javascript
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Show notification / Показати сповіщення
  slideDown(notification, 300, () => {
    // Wait 3 seconds / Почекати 3 секунди
    setTimeout(() => {
      // Hide notification / Приховати сповіщення
      slideUp(notification, 300, () => {
        notification.remove();
      });
    }, 3000);
  });
}
```

### 2. Staggered Animations / Розставлені анімації

```javascript
function animateListItems(items) {
  items.forEach((item, index) => {
    setTimeout(() => {
      fadeIn(item, 300);
    }, index * 100); // 100ms delay between items / 100мс затримка між елементами
  });
}

// Usage / Використання
const listItems = document.querySelectorAll('.list-item');
animateListItems(listItems);
```

### 3. Animation Queue / Черга анімацій

```javascript
class AnimationQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  
  add(element, animation, duration, callback) {
    this.queue.push({ element, animation, duration, callback });
    this.process();
  }
  
  process() {
    if (this.running || this.queue.length === 0) return;
    
    this.running = true;
    const { element, animation, duration, callback } = this.queue.shift();
    
    animation(element, duration, () => {
      this.running = false;
      if (callback) callback();
      this.process();
    });
  }
}

// Usage / Використання
const animQueue = new AnimationQueue();

animQueue.add(element1, slideDown, 300);
animQueue.add(element2, fadeIn, 200);
animQueue.add(element3, slideUp, 400, () => {
  console.log('Animation sequence complete');
});
```

## 🛠️ Troubleshooting / Відлагодження

### Problem: Animations not smooth / Проблема: Анімації не плавні
**Solution**: Check CSS transitions and ensure proper timing / Рішення: Перевірте CSS переходи та переконайтеся у правильному таймінгу

### Problem: Elements not showing/hiding / Проблема: Елементи не показуються/приховуються
**Solution**: Verify element selectors and display properties / Рішення: Перевірте селектори елементів та властивості display

### Problem: Callbacks not executing / Проблема: Колбеки не виконуються
**Solution**: Check callback function syntax and timing / Рішення: Перевірте синтаксис функцій колбеків та таймінг

### Problem: Height calculations wrong / Проблема: Неправильні розрахунки висоти
**Solution**: Ensure elements have proper box-sizing and no conflicting CSS / Рішення: Переконайтеся, що елементи мають правильний box-sizing та немає конфліктуючого CSS

---

**Utility functions provide smooth, reliable animations for all components! / Утилітарні функції надають плавні, надійні анімації для всіх компонентів! 🛠️**
