# 📑 Tabs Component / Компонент Вкладки

## 📋 Overview / Огляд

The Tabs component provides a tabbed interface where users can switch between different content panels. It includes smooth fade transitions and supports both programmatic and click-based navigation.

Компонент Tabs надає інтерфейс з вкладками, де користувачі можуть перемикатися між різними панелями контенту. Включає плавні переходи fade та підтримує як програмну, так і навігацію на основі кліків.

## 🚀 Features / Можливості

- ✅ **Smooth Transitions** - Fade in/out animations / Плавні анімації fade in/out
- ✅ **ID-based Navigation** - Switch tabs by ID / Перемикання вкладок за ID
- ✅ **Index-based Navigation** - Switch tabs by index / Перемикання вкладок за індексом
- ✅ **Active State Management** - Automatic button/content synchronization / Автоматична синхронізація кнопок/контенту
- ✅ **Lock Protection** - Prevents rapid switching / Захист від швидкого перемикання
- ✅ **Customizable Duration** - Configurable animation timing / Налаштовувана тривалість анімації

## 📁 File Structure / Структура файлів

```
src/js/components/tabs/
├── tabs.js           # Main Tabs class / Основний клас Tabs
└── tabs.options.js   # Configuration options / Опції конфігурації
```

## ⚙️ Setup / Налаштування

### 1. Import Component / Імпорт компонента

```javascript
import { Tabs } from './components/tabs/tabs.js';

// Initialize tabs / Ініціалізація вкладок
const tabs = new Tabs({
  container: '.my-tabs',
  itemTriggerSelector: '.tab-btn',
  itemContentSelector: '.tab-content',
  activeClass: 'is-active',
  duration: 300,
  activeIndex: 0
});
```

### 2. HTML Structure / Структура HTML

```html
<div class="js-tabs">
  <!-- Tab Triggers / Тригери вкладок -->
  <div class="tab-triggers">
    <button class="js-tab-btn" data-tab-id="tab1">Tab 1</button>
    <button class="js-tab-btn" data-tab-id="tab2">Tab 2</button>
    <button class="js-tab-btn" data-tab-id="tab3">Tab 3</button>
  </div>

  <!-- Tab Contents / Контент вкладок -->
  <div class="tab-contents">
    <div id="tab1" class="js-tabs-item">
      <h3>Content for Tab 1</h3>
      <p>This is the content of the first tab...</p>
    </div>
    
    <div id="tab2" class="js-tabs-item">
      <h3>Content for Tab 2</h3>
      <p>This is the content of the second tab...</p>
    </div>
    
    <div id="tab3" class="js-tabs-item">
      <h3>Content for Tab 3</h3>
      <p>This is the content of the third tab...</p>
    </div>
  </div>
</div>
```

### 3. CSS Styles / CSS стилі

```scss
.js-tabs {
  .tab-triggers {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
  }

  .js-tab-btn {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease;

    &:hover {
      color: #007bff;
    }

    &._active {
      color: #007bff;
      border-bottom-color: #007bff;
    }
  }

  .js-tabs-item {
    display: none;
    opacity: 0;
    
    &._active {
      display: block;
      opacity: 1;
    }
  }
}
```

## 🎛️ Configuration Options / Опції конфігурації

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `container` | `string \| HTMLElement` | `.js-tabs` | Container selector / Селектор контейнера |
| `itemTriggerSelector` | `string` | `.js-tab-btn` | Tab button selector / Селектор кнопки вкладки |
| `itemContentSelector` | `string` | `.js-tabs-item` | Tab content selector / Селектор контенту вкладки |
| `activeClass` | `string` | `_active` | Active state class / Клас активного стану |
| `duration` | `number` | `500` | Animation duration (ms) / Тривалість анімації (мс) |
| `activeIndex` | `number` | `10` | Initial active tab index / Початковий індекс активної вкладки |

## 🔧 API Methods / API методи

### Navigation Methods / Методи навігації

```javascript
// Switch tab by ID / Перемкнути вкладку за ID
tabs.setNewTabByID('tab2');

// Switch tab by index / Перемкнути вкладку за індексом
tabs.setNewTabByIndex(1);

// Get current tab info / Отримати інформацію про поточну вкладку
console.log(tabs.currentItem); // Current content element / Поточний елемент контенту
console.log(tabs.currentTrigger); // Current button element / Поточний елемент кнопки
console.log(tabs.currentItemIndex); // Current index / Поточний індекс
```

### State Management / Керування станом

```javascript
// Check if tabs are locked / Перевірити, чи заблоковані вкладки
console.log(tabs.isLocked); // true/false

// Access all triggers and items / Доступ до всіх тригерів та елементів
console.log(tabs.triggers); // All button elements / Всі елементи кнопок
console.log(tabs.items); // All content elements / Всі елементи контенту
```

## 📱 Usage Examples / Приклади використання

### 1. Product Information Tabs / Вкладки інформації про продукт

```html
<div class="js-tabs product-tabs">
  <div class="tab-triggers">
    <button class="js-tab-btn" data-tab-id="description">Description</button>
    <button class="js-tab-btn" data-tab-id="specifications">Specifications</button>
    <button class="js-tab-btn" data-tab-id="reviews">Reviews</button>
  </div>

  <div class="tab-contents">
    <div id="description" class="js-tabs-item">
      <h3>Product Description</h3>
      <p>Detailed product information...</p>
    </div>
    
    <div id="specifications" class="js-tabs-item">
      <h3>Technical Specifications</h3>
      <table class="specs-table">
        <tr><td>Weight:</td><td>2.5 kg</td></tr>
        <tr><td>Dimensions:</td><td>30 x 20 x 10 cm</td></tr>
      </table>
    </div>
    
    <div id="reviews" class="js-tabs-item">
      <h3>Customer Reviews</h3>
      <div class="reviews-list">
        <!-- Reviews content / Контент відгуків -->
      </div>
    </div>
  </div>
</div>
```

```javascript
const productTabs = new Tabs({
  container: '.product-tabs',
  activeIndex: 0,
  duration: 400
});
```

### 2. Dashboard Tabs / Вкладки панелі керування

```html
<div class="js-tabs dashboard-tabs">
  <nav class="tab-nav">
    <button class="js-tab-btn" data-tab-id="overview">
      <svg class="tab-icon">...</svg>
      Overview
    </button>
    <button class="js-tab-btn" data-tab-id="analytics">
      <svg class="tab-icon">...</svg>
      Analytics
    </button>
    <button class="js-tab-btn" data-tab-id="settings">
      <svg class="tab-icon">...</svg>
      Settings
    </button>
  </nav>

  <div class="tab-panels">
    <div id="overview" class="js-tabs-item">
      <div class="stats-grid">
        <!-- Overview statistics / Статистика огляду -->
      </div>
    </div>
    
    <div id="analytics" class="js-tabs-item">
      <div class="charts-container">
        <!-- Analytics charts / Діаграми аналітики -->
      </div>
    </div>
    
    <div id="settings" class="js-tabs-item">
      <form class="settings-form">
        <!-- Settings form / Форма налаштувань -->
      </form>
    </div>
  </div>
</div>
```

```scss
.dashboard-tabs {
  .tab-nav {
    display: flex;
    background: #f8f9fa;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  .js-tab-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: #f8f9fa;
    border: none;
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease;

    .tab-icon {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: #e9ecef;
      color: #333;
    }

    &._active {
      background: white;
      color: #007bff;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
    }
  }

  .tab-panels {
    background: white;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    min-height: 400px;
  }

  .js-tabs-item {
    padding: 2rem;
  }
}
```

### 3. Vertical Tabs / Вертикальні вкладки

```html
<div class="js-tabs vertical-tabs">
  <div class="tabs-container">
    <div class="tab-sidebar">
      <button class="js-tab-btn" data-tab-id="profile">Profile</button>
      <button class="js-tab-btn" data-tab-id="account">Account</button>
      <button class="js-tab-btn" data-tab-id="security">Security</button>
      <button class="js-tab-btn" data-tab-id="notifications">Notifications</button>
    </div>

    <div class="tab-content-area">
      <div id="profile" class="js-tabs-item">
        <h2>Profile Settings</h2>
        <!-- Profile form / Форма профілю -->
      </div>
      
      <div id="account" class="js-tabs-item">
        <h2>Account Settings</h2>
        <!-- Account form / Форма акаунту -->
      </div>
      
      <div id="security" class="js-tabs-item">
        <h2>Security Settings</h2>
        <!-- Security form / Форма безпеки -->
      </div>
      
      <div id="notifications" class="js-tabs-item">
        <h2>Notification Settings</h2>
        <!-- Notifications form / Форма сповіщень -->
      </div>
    </div>
  </div>
</div>
```

```scss
.vertical-tabs {
  .tabs-container {
    display: flex;
    gap: 2rem;
  }

  .tab-sidebar {
    width: 200px;
    flex-shrink: 0;
  }

  .js-tab-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    border-left: 3px solid transparent;
    cursor: pointer;
    text-align: left;
    color: #666;
    transition: all 0.3s ease;

    &:hover {
      background: #f8f9fa;
      color: #333;
    }

    &._active {
      background: #e3f2fd;
      border-left-color: #007bff;
      color: #007bff;
      font-weight: 600;
    }
  }

  .tab-content-area {
    flex: 1;
    min-height: 400px;
  }

  .js-tabs-item {
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}
```

### 4. Programmatic Control / Програмне керування

```javascript
const tabs = new Tabs({
  container: '.my-tabs',
  activeIndex: 0
});

// External navigation buttons / Кнопки зовнішньої навігації
document.querySelector('.prev-btn').addEventListener('click', () => {
  const currentIndex = tabs.currentItemIndex;
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.items.length - 1;
  tabs.setNewTabByIndex(prevIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  const currentIndex = tabs.currentItemIndex;
  const nextIndex = currentIndex < tabs.items.length - 1 ? currentIndex + 1 : 0;
  tabs.setNewTabByIndex(nextIndex);
});

// URL hash navigation / Навігація за хешем URL
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    tabs.setNewTabByID(hash);
  }
});

// Initialize from URL hash / Ініціалізація з хешу URL
if (window.location.hash) {
  const hash = window.location.hash.slice(1);
  tabs.setNewTabByID(hash);
}
```

## 🛠️ Troubleshooting / Відлагодження

### Problem: Tabs not switching / Проблема: Вкладки не перемикаються
**Solution**: Check `data-tab-id` attributes and content IDs / Рішення: Перевірте атрибути `data-tab-id` та ID контенту

### Problem: Animation not working / Проблема: Анімація не працює
**Solution**: Ensure fade utility functions are imported / Рішення: Переконайтеся, що утиліти fade імпортовані

### Problem: Active state not updating / Проблема: Активний стан не оновлюється
**Solution**: Check CSS classes and activeClass option / Рішення: Перевірте CSS класи та опцію activeClass

### Problem: Multiple rapid clicks causing issues / Проблема: Кілька швидких кліків викликають проблеми
**Solution**: Lock protection should prevent this automatically / Рішення: Захист блокування повинен автоматично це запобігати

---

**Tabs component provides smooth, accessible tabbed interfaces! / Компонент Tabs надає плавні, доступні інтерфейси з вкладками! 📑**
