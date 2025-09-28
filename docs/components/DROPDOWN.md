# 📋 Dropdown Component / Компонент Випадаючий список

## 📋 Overview / Огляд

The Dropdown component provides a toggleable dropdown menu that opens and closes on trigger click. It includes automatic outside click detection to close the dropdown.

Компонент Dropdown надає випадаюче меню, яке відкривається та закривається при кліку на тригер. Включає автоматичне виявлення кліку ззовні для закриття випадаючого списку.

## 🚀 Features / Можливості

- ✅ **Toggle Functionality** - Open/close on click / Відкриття/закриття при кліку
- ✅ **Outside Click Detection** - Auto-close when clicking outside / Автоматичне закриття при кліку ззовні
- ✅ **Event Management** - Proper event listener cleanup / Правильна очистка обробників подій
- ✅ **Simple API** - Easy to use and configure / Простий у використанні та налаштуванні

## 📁 File Structure / Структура файлів

```
src/js/components/dropdowns/
├── dropdown.js           # Main Dropdown class / Основний клас Dropdown
└── dropdown.options.js   # Configuration options / Опції конфігурації
```

## ⚙️ Setup / Налаштування

### 1. Import Component / Імпорт компонента

```javascript
import { Dropdown } from './components/dropdowns/dropdown.js';

// Initialize dropdown / Ініціалізація випадаючого списку
const dropdown = new Dropdown({
  container: '.my-dropdown',
  triggerSelector: '.dropdown-trigger',
  dropdownItemSelector: '.dropdown-menu'
});
```

### 2. HTML Structure / Структура HTML

```html
<div class="js-dropdown">
  <button class="js-dropdown-trigger">
    Menu Button
  </button>
  <div class="js-dropdown-item">
    <ul class="dropdown-menu">
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
    </ul>
  </div>
</div>
```

### 3. CSS Styles / CSS стилі

```scss
.js-dropdown {
  position: relative;
  display: inline-block;
}

.js-dropdown-trigger {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
}

.js-dropdown-item {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  
  .js-dropdown._active & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.dropdown-menu {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  
  li {
    margin: 0;
  }
  
  a {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
    
    &:hover {
      background: #f8f9fa;
    }
  }
}
```

## 🎛️ Configuration Options / Опції конфігурації

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `container` | `string \| HTMLElement` | `.js-dropdown` | Container selector / Селектор контейнера |
| `triggerSelector` | `string` | `.js-dropdown-trigger` | Trigger button selector / Селектор кнопки-тригера |
| `dropdownItemSelector` | `string` | `.js-dropdown-item` | Dropdown content selector / Селектор контенту випадаючого списку |

## 🔧 API Methods / API методи

### Control Methods / Методи керування

```javascript
// Toggle dropdown / Переключити випадаючий список
dropdown.toggle();

// Open dropdown / Відкрити випадаючий список
dropdown.open();

// Close dropdown / Закрити випадаючий список
dropdown.close();

// Check if open / Перевірити, чи відкрито
console.log(dropdown.isOpened); // true/false
```

## 📱 Usage Examples / Приклади використання

### 1. Navigation Menu / Навігаційне меню

```html
<nav class="js-dropdown nav-dropdown">
  <button class="js-dropdown-trigger nav-trigger">
    <span>Menu</span>
    <svg class="dropdown-icon" width="16" height="16">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  </button>
  <div class="js-dropdown-item nav-menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

```javascript
const navDropdown = new Dropdown({
  container: '.nav-dropdown',
  triggerSelector: '.nav-trigger',
  dropdownItemSelector: '.nav-menu'
});
```

### 2. User Profile Menu / Меню профілю користувача

```html
<div class="js-dropdown user-menu">
  <button class="js-dropdown-trigger user-trigger">
    <img src="/avatar.jpg" alt="User" class="user-avatar">
    <span class="user-name">John Doe</span>
  </button>
  <div class="js-dropdown-item user-dropdown">
    <ul class="user-options">
      <li><a href="/profile">Profile</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/help">Help</a></li>
      <li><hr></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </div>
</div>
```

```javascript
const userDropdown = new Dropdown({
  container: '.user-menu',
  triggerSelector: '.user-trigger',
  dropdownItemSelector: '.user-dropdown'
});
```

### 3. Action Menu / Меню дій

```html
<div class="js-dropdown action-menu">
  <button class="js-dropdown-trigger action-trigger">
    Actions
    <svg class="dropdown-icon" width="16" height="16">
      <path d="M8 12l-4-4h8l-4 4z"/>
    </svg>
  </button>
  <div class="js-dropdown-item action-dropdown">
    <button class="action-btn">Edit</button>
    <button class="action-btn">Duplicate</button>
    <button class="action-btn danger">Delete</button>
  </div>
</div>
```

```scss
.action-menu {
  .action-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    
    .dropdown-icon {
      transition: transform 0.3s ease;
    }
  }
  
  &._active .action-trigger .dropdown-icon {
    transform: rotate(180deg);
  }
  
  .action-dropdown {
    right: 0;
    left: auto;
    min-width: 150px;
  }
  
  .action-btn {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    
    &:hover {
      background: #f8f9fa;
    }
    
    &.danger {
      color: #dc3545;
      
      &:hover {
        background: #f8d7da;
      }
    }
  }
}
```

## 🛠️ Troubleshooting / Відлагодження

### Problem: Dropdown not opening / Проблема: Випадаючий список не відкривається
**Solution**: Check selectors and HTML structure / Рішення: Перевірте селектори та структуру HTML

### Problem: Dropdown not closing on outside click / Проблема: Випадаючий список не закривається при кліку ззовні
**Solution**: Ensure proper container structure / Рішення: Переконайтеся у правильній структурі контейнера

### Problem: Styling issues / Проблема: Проблеми зі стилізацією
**Solution**: Check CSS positioning and z-index / Рішення: Перевірте CSS позиціонування та z-index

### Problem: Multiple dropdowns interfering / Проблема: Кілька випадаючих списків заважають один одному
**Solution**: Each dropdown needs unique selectors / Рішення: Кожен випадаючий список потребує унікальних селекторів

---

**Dropdown component provides clean, accessible menu functionality! / Компонент Dropdown надає чистий, доступний функціонал меню! 📋**
