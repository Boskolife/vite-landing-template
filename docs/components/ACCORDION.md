# 🎯 Accordion Component / Компонент Аккордеон

## 📋 Overview / Огляд

The Accordion component provides a collapsible content interface where users can expand and collapse sections of content. It supports both single and multiple item modes with smooth animations.

Компонент Аккордеон надає інтерфейс згортання контенту, де користувачі можуть розгортати та згортати розділи контенту. Підтримує як одиночний, так і множинний режими з плавними анімаціями.

## 🚀 Features / Можливості

- ✅ **Single/Multiple Mode** - Open one or multiple items / Відкрити один або кілька елементів
- ✅ **Smooth Animations** - Slide up/down transitions / Плавні переходи вгору/вниз
- ✅ **Custom Events** - Before/after open/close callbacks / Події до/після відкриття/закриття
- ✅ **Programmatic Control** - Open items by index / Програмне керування за індексом
- ✅ **Lock Protection** - Prevents rapid clicking / Захист від швидкого клікання

## 📁 File Structure / Структура файлів

```
src/js/components/accordions/
├── accordion.js           # Main Accordion class / Основний клас Accordion
├── accordion-item.js      # Individual item logic / Логіка окремого елемента
└── accordion.options.js   # Configuration options / Опції конфігурації
```

## ⚙️ Setup / Налаштування

### 1. Import Component / Імпорт компонента

```javascript
import { Accordion } from './components/accordions/accordion.js';

// Initialize accordion / Ініціалізація аккордеону
const accordion = new Accordion({
  containerSelector: '.my-accordion',
  itemSelector: '.accordion-item',
  itemTriggerSelector: '.accordion-trigger',
  itemContentSelector: '.accordion-content',
  activeClass: 'is-open',
  duration: 300,
  type: 'single', // 'single' | 'multiply'
  onOpenBefore: (item) => console.log('Opening item:', item),
  onOpenAfter: (item) => console.log('Opened item:', item),
  onCloseBefore: (item) => console.log('Closing item:', item),
  onCloseAfter: (item) => console.log('Closed item:', item)
});
```

### 2. HTML Structure / Структура HTML

```html
<div class="js-accordion">
  <!-- Accordion Item 1 / Елемент аккордеону 1 -->
  <div class="js-accordion-item">
    <button class="js-accordion-toggler">
      Accordion Item 1
    </button>
    <div class="js-accordion-content">
      <p>Content for accordion item 1...</p>
    </div>
  </div>

  <!-- Accordion Item 2 / Елемент аккордеону 2 -->
  <div class="js-accordion-item">
    <button class="js-accordion-toggler">
      Accordion Item 2
    </button>
    <div class="js-accordion-content">
      <p>Content for accordion item 2...</p>
    </div>
  </div>
</div>
```

### 3. CSS Styles / CSS стилі

```scss
.js-accordion-item {
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
}

.js-accordion-toggler {
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
}

.js-accordion-content {
  display: none;
  padding: 0 1rem 1rem;
  overflow: hidden;
}

// Active state / Активний стан
.js-accordion-item._active {
  .js-accordion-toggler {
    background: #007bff;
    color: white;
  }
}
```

## 🎛️ Configuration Options / Опції конфігурації

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `containerSelector` | `string \| HTMLElement` | `.js-accordion` | Container selector / Селектор контейнера |
| `itemSelector` | `string` | `.js-accordion-item` | Item wrapper selector / Селектор обгортки елемента |
| `itemTriggerSelector` | `string` | `.js-accordion-toggler` | Trigger button selector / Селектор кнопки-тригера |
| `itemContentSelector` | `string` | `.js-accordion-content` | Content wrapper selector / Селектор обгортки контенту |
| `activeClass` | `string` | `_active` | Active state class / Клас активного стану |
| `duration` | `number` | `500` | Animation duration (ms) / Тривалість анімації (мс) |
| `type` | `string` | `single` | Mode: 'single' or 'multiply' / Режим: 'single' або 'multiply' |
| `onOpenBefore` | `function \| null` | `null` | Before open callback / Колбек до відкриття |
| `onOpenAfter` | `function \| null` | `null` | After open callback / Колбек після відкриття |
| `onCloseBefore` | `function \| null` | `null` | Before close callback / Колбек до закриття |
| `onCloseAfter` | `function \| null` | `null` | After close callback / Колбек після закриття |

## 🔧 API Methods / API методи

### Programmatic Control / Програмне керування

```javascript
// Open item by index / Відкрити елемент за індексом
accordion.openByIndex(0);

// Access individual items / Доступ до окремих елементів
const firstItem = accordion.items[0];
firstItem.open();   // Open / Відкрити
firstItem.close();  // Close / Закрити
firstItem.toggle(); // Toggle / Переключити
```

### Event Callbacks / Колбеки подій

```javascript
const accordion = new Accordion({
  onOpenBefore: (item) => {
    console.log('About to open item at index:', item.index);
  },
  onOpenAfter: (item) => {
    console.log('Item opened at index:', item.index);
  },
  onCloseBefore: (item) => {
    console.log('About to close item at index:', item.index);
  },
  onCloseAfter: (item) => {
    console.log('Item closed at index:', item.index);
  }
});
```

## 📱 Usage Examples / Приклади використання

### 1. FAQ Section / Розділ FAQ

```html
<div class="js-accordion faq-accordion">
  <div class="js-accordion-item">
    <button class="js-accordion-toggler">
      What is your return policy?
    </button>
    <div class="js-accordion-content">
      <p>We offer a 30-day return policy for all items...</p>
    </div>
  </div>
  
  <div class="js-accordion-item">
    <button class="js-accordion-toggler">
      How long does shipping take?
    </button>
    <div class="js-accordion-content">
      <p>Standard shipping takes 3-5 business days...</p>
    </div>
  </div>
</div>
```

```javascript
const faqAccordion = new Accordion({
  containerSelector: '.faq-accordion',
  type: 'single',
  duration: 300
});
```

### 2. Multiple Open Mode / Режим множинного відкриття

```javascript
const multiAccordion = new Accordion({
  containerSelector: '.multi-accordion',
  type: 'multiply', // Allow multiple items open / Дозволити кілька відкритих елементів
  activeClass: 'is-expanded',
  duration: 400
});
```

### 3. Custom Styling / Користувацьке стилювання

```scss
.custom-accordion {
  .js-accordion-item {
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    
    &._active {
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
  }
  
  .js-accordion-toggler {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
  }
  
  .js-accordion-content {
    background: #f8f9fa;
    padding: 1.5rem;
  }
}
```

## 🛠️ Troubleshooting / Відлагодження

### Problem: Accordion not working / Проблема: Аккордеон не працює
**Solution**: Check HTML structure and selectors / Рішення: Перевірте структуру HTML та селектори

### Problem: Animation not smooth / Проблема: Анімація не плавна
**Solution**: Adjust duration value or check CSS transitions / Рішення: Налаштуйте значення duration або перевірте CSS переходи

### Problem: Multiple items open in single mode / Проблема: Кілька елементів відкрито в одиночному режимі
**Solution**: Ensure `type: 'single'` is set / Рішення: Переконайтеся, що встановлено `type: 'single'`

### Problem: Callbacks not firing / Проблема: Колбеки не спрацьовують
**Solution**: Check callback function syntax / Рішення: Перевірте синтаксис функцій колбеків

---

**Accordion component provides smooth, accessible collapsible content! / Компонент Аккордеон надає плавний, доступний контент, що згортається! 📋**
