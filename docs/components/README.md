# 📚 JavaScript Components / JavaScript компоненти

## 📋 Overview / Огляд

This directory contains reusable JavaScript components that provide interactive functionality for web applications. All components are built with modern ES6+ syntax and include comprehensive configuration options.

Цей каталог містить перевикористовувані JavaScript компоненти, які надають інтерактивну функціональність для веб-додатків. Всі компоненти створені з сучасним синтаксисом ES6+ та включають комплексні опції конфігурації.

## 🚀 Available Components / Доступні компоненти

### 1. 🎯 [Accordion Component](./ACCORDION.md) / Компонент Аккордеон

Collapsible content interface with smooth animations and multiple modes.

Інтерфейс згортання контенту з плавними анімаціями та кількома режимами.

**Features / Можливості:**
- Single/Multiple open modes / Режими одиночного/множинного відкриття
- Smooth slide animations / Плавні анімації слайду
- Custom event callbacks / Користувацькі колбеки подій
- Programmatic control / Програмне керування

### 2. 📋 [Dropdown Component](./DROPDOWN.md) / Компонент Випадаючий список

Toggleable dropdown menus with outside click detection.

Випадаючі меню з виявленням кліків ззовні.

**Features / Можливості:**
- Toggle functionality / Функціональність перемикання
- Outside click detection / Виявлення кліків ззовні
- Event management / Керування подіями
- Simple API / Простий API

### 3. 🎛️ [Select Component](./SELECT.md) / Компонент Селект

Custom select dropdown with option selection and value management.

Користувацький випадаючий список з вибором опцій та керуванням значеннями.

**Features / Можливості:**
- Custom styling / Користувацька стилізація
- Value management / Керування значеннями
- Hidden input integration / Інтеграція прихованого поля
- Form compatibility / Сумісність з формами

### 4. 📑 [Tabs Component](./TABS.md) / Компонент Вкладки

Tabbed interface with smooth fade transitions and flexible navigation.

Інтерфейс з вкладками з плавними переходами fade та гнучкою навігацією.

**Features / Можливості:**
- Smooth fade transitions / Плавні переходи fade
- ID and index-based navigation / Навігація за ID та індексом
- Active state management / Керування активним станом
- Lock protection / Захист блокування

### 5. 🛠️ [Utility Functions](./UTILITIES.md) / Утилітарні функції

Common animation and DOM manipulation helpers.

Загальні помічники для анімацій та маніпуляцій з DOM.

**Features / Можливості:**
- Fade animations / Анімації fade
- Slide animations / Анімації slide
- Callback support / Підтримка колбеків
- Cross-browser compatibility / Сумісність з браузерами

## 📁 Project Structure / Структура проекту

```
src/js/
├── components/
│   ├── accordions/
│   │   ├── accordion.js           # Main Accordion class / Основний клас Accordion
│   │   ├── accordion-item.js      # Individual item logic / Логіка окремого елемента
│   │   └── accordion.options.js   # Configuration options / Опції конфігурації
│   ├── dropdowns/
│   │   ├── dropdown.js           # Main Dropdown class / Основний клас Dropdown
│   │   ├── dropdown.options.js   # Configuration options / Опції конфігурації
│   │   ├── select.js             # Select class (extends Dropdown) / Клас Select (розширює Dropdown)
│   │   └── select.options.js     # Select configuration / Конфігурація Select
│   └── tabs/
│       ├── tabs.js               # Main Tabs class / Основний клас Tabs
│       └── tabs.options.js       # Configuration options / Опції конфігурації
├── utils/
│   ├── fade.js                   # Fade animation utilities / Утиліти анімації fade
│   ├── slideIn.js                # Slide animation utilities / Утиліти анімації slide
│   └── webp.js                   # WebP support utilities / Утиліти підтримки WebP
└── main.js                       # Main entry point / Головна точка входу
```

## ⚙️ Quick Start / Швидкий старт

### 1. Import Components / Імпорт компонентів

```javascript
// Individual components / Окремі компоненти
import { Accordion } from './components/accordions/accordion.js';
import { Dropdown } from './components/dropdowns/dropdown.js';
import { Select } from './components/dropdowns/select.js';
import { Tabs } from './components/tabs/tabs.js';

// Utility functions / Утилітарні функції
import { fadeIn, fadeOut } from './utils/fade.js';
import { slideUp, slideDown } from './utils/slideIn.js';
```

### 2. Initialize Components / Ініціалізація компонентів

```javascript
// Accordion / Аккордеон
const accordion = new Accordion({
  containerSelector: '.js-accordion',
  type: 'single',
  duration: 300
});

// Dropdown / Випадаючий список
const dropdown = new Dropdown({
  container: '.js-dropdown',
  triggerSelector: '.js-dropdown-trigger',
  dropdownItemSelector: '.js-dropdown-item'
});

// Select / Селект
const select = new Select({
  container: '.js-select',
  inputSelector: '.js-select-input',
  triggerSelector: '.js-select-trigger',
  dropdownOptionSelector: '.js-select-option'
});

// Tabs / Вкладки
const tabs = new Tabs({
  container: '.js-tabs',
  activeIndex: 0,
  duration: 400
});
```

### 3. HTML Structure / Структура HTML

```html
<!-- Accordion / Аккордеон -->
<div class="js-accordion">
  <div class="js-accordion-item">
    <button class="js-accordion-toggler">Item 1</button>
    <div class="js-accordion-content">Content 1</div>
  </div>
</div>

<!-- Dropdown / Випадаючий список -->
<div class="js-dropdown">
  <button class="js-dropdown-trigger">Menu</button>
  <div class="js-dropdown-item">
    <!-- Dropdown content / Контент випадаючого списку -->
  </div>
</div>

<!-- Select / Селект -->
<div class="js-select">
  <input type="hidden" class="js-select-input" name="option" value="">
  <button class="js-select-trigger">
    <span class="js-select-trigger-value">Choose option</span>
  </button>
  <div class="js-select-dropdown">
    <div class="js-select-option" data-select-value="option1">Option 1</div>
  </div>
</div>

<!-- Tabs / Вкладки -->
<div class="js-tabs">
  <button class="js-tab-btn" data-tab-id="tab1">Tab 1</button>
  <div id="tab1" class="js-tabs-item">Content 1</div>
</div>
```

## 🎨 Styling Guidelines / Гіди стилювання

### CSS Class Conventions / Конвенції CSS класів

All components use consistent class naming conventions:

Всі компоненти використовують узгоджені конвенції іменування класів:

- `js-*` - JavaScript hook classes / Класи-хуки JavaScript
- `_active` - Active state class / Клас активного стану
- Component-specific classes / Класи, специфічні для компонентів

### Animation Classes / Класи анімацій

```scss
// Fade animations / Анімації fade
.fade-in {
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 1;
  }
}

// Slide animations / Анімації slide
.slide-content {
  overflow: hidden;
  transition: height 0.3s ease;
}

// Active states / Активні стани
._active {
  // Component active styles / Стилі активного стану компонента
}
```

## 🔧 Configuration Best Practices / Найкращі практики конфігурації

### 1. Consistent Selectors / Узгоджені селектори

```javascript
// Good / Добре
const config = {
  containerSelector: '.js-accordion',
  itemSelector: '.js-accordion-item',
  triggerSelector: '.js-accordion-toggler'
};

// Avoid / Уникайте
const config = {
  containerSelector: '#my-accordion',
  itemSelector: '.item',
  triggerSelector: 'button'
};
```

### 2. Reasonable Durations / Розумні тривалості

```javascript
// Good / Добре
duration: 300,  // Fast and smooth / Швидко та плавно
duration: 500,  // Standard / Стандартно
duration: 800,  // Slow and dramatic / Повільно та драматично

// Avoid / Уникайте
duration: 50,   // Too fast / Занадто швидко
duration: 2000, // Too slow / Занадто повільно
```

### 3. Meaningful Callbacks / Змістовні колбеки

```javascript
// Good / Добре
onOpenAfter: (item) => {
  // Track analytics / Відстеження аналітики
  analytics.track('accordion_opened', { index: item.index });
  
  // Update UI / Оновлення UI
  updateProgressBar();
}

// Avoid / Уникайте
onOpenAfter: () => {
  console.log('opened'); // Not very useful / Не дуже корисно
}
```

## 🛠️ Troubleshooting / Відлагодження

### Common Issues / Поширені проблеми

1. **Components not initializing / Компоненти не ініціалізуються**
   - Check HTML structure and selectors / Перевірте структуру HTML та селектори
   - Ensure elements exist in DOM / Переконайтеся, що елементи існують у DOM

2. **Animations not working / Анімації не працюють**
   - Verify utility functions are imported / Перевірте, що утилітарні функції імпортовані
   - Check CSS transitions / Перевірте CSS переходи

3. **Styling issues / Проблеми зі стилізацією**
   - Ensure proper CSS classes / Переконайтеся у правильних CSS класах
   - Check z-index and positioning / Перевірте z-index та позиціонування

4. **Event handling problems / Проблеми з обробкою подій**
   - Verify event listeners are attached / Перевірте, що обробники подій підключені
   - Check for event conflicts / Перевірте на конфлікти подій

## 📚 Additional Resources / Додаткові ресурси

- [Component Documentation](./) - Detailed guides for each component / Детальні керівництва для кожного компонента
- [JavaScript Technologies Guide](../technologies/JAVASCRIPT.md) - Modern JavaScript patterns / Сучасні патерни JavaScript
- [SCSS Technologies Guide](../technologies/SCSS.md) - Styling best practices / Найкращі практики стилювання

---

**JavaScript components provide powerful, reusable interactive functionality! / JavaScript компоненти надають потужну, перевикористовувану інтерактивну функціональність! 📚**
