# 🎛️ Select Component / Компонент Селект

## 📋 Overview / Огляд

The Select component extends the Dropdown functionality to create a custom select dropdown with option selection and value management. It provides a styled alternative to native HTML select elements.

Компонент Select розширює функціональність Dropdown для створення користувацького випадаючого списку з вибором опцій та керуванням значеннями. Надає стилізовану альтернативу нативним HTML select елементам.

## 🚀 Features / Можливості

- ✅ **Custom Styling** - Full control over appearance / Повний контроль над зовнішнім виглядом
- ✅ **Value Management** - Automatic value updates / Автоматичне оновлення значень
- ✅ **Hidden Input** - Form integration / Інтеграція з формами
- ✅ **Option Selection** - Click to select functionality / Функціональність вибору при кліку
- ✅ **Extends Dropdown** - Inherits all dropdown features / Наслідує всі функції dropdown

## 📁 File Structure / Структура файлів

```
src/js/components/dropdowns/
├── select.js           # Main Select class / Основний клас Select
└── select.options.js   # Configuration options / Опції конфігурації
```

## ⚙️ Setup / Налаштування

### 1. Import Component / Імпорт компонента

```javascript
import { Select } from './components/dropdowns/select.js';

// Initialize select / Ініціалізація селекту
const select = new Select({
  container: '.my-select',
  inputSelector: '.select-input',
  triggerSelector: '.select-trigger',
  triggerValueSelector: '.select-trigger-value',
  dropdownItemSelector: '.select-dropdown',
  dropdownOptionSelector: '.select-option'
});
```

### 2. HTML Structure / Структура HTML

```html
<div class="js-select">
  <input type="hidden" class="js-select-input" name="category" value="">
  <button class="js-select-trigger">
    <span class="js-select-trigger-value">Choose option</span>
    <svg class="select-icon" width="16" height="16">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  </button>
  <div class="js-select-dropdown">
    <div class="js-select-option" data-select-value="option1">Option 1</div>
    <div class="js-select-option" data-select-value="option2">Option 2</div>
    <div class="js-select-option" data-select-value="option3">Option 3</div>
  </div>
</div>
```

### 3. CSS Styles / CSS стилі

```scss
.js-select {
  position: relative;
  display: inline-block;
  min-width: 200px;
}

.js-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    border-color: #007bff;
  }
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}

.js-select-trigger-value {
  flex: 1;
  text-align: left;
  color: #333;
}

.select-icon {
  color: #666;
  transition: transform 0.3s ease;
}

.js-select._active .select-icon {
  transform: rotate(180deg);
}

.js-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  
  .js-select._active & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.js-select-option {
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:first-child {
    border-radius: 4px 4px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 4px 4px;
  }
}
```

## 🎛️ Configuration Options / Опції конфігурації

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `container` | `string \| HTMLElement` | `.js-select` | Container selector / Селектор контейнера |
| `inputSelector` | `string` | `.js-select-input` | Hidden input selector / Селектор прихованого поля |
| `triggerSelector` | `string` | `.js-select-trigger` | Trigger button selector / Селектор кнопки-тригера |
| `triggerValueSelector` | `string` | `.js-select-trigger-value` | Value display selector / Селектор відображення значення |
| `dropdownItemSelector` | `string` | `.js-select-dropdown` | Dropdown container selector / Селектор контейнера випадаючого списку |
| `dropdownOptionSelector` | `string` | `.js-select-option` | Option item selector / Селектор елемента опції |

## 🔧 API Methods / API методи

### Inherited from Dropdown / Успадковано від Dropdown

```javascript
// Toggle select / Переключити селект
select.toggle();

// Open select / Відкрити селект
select.open();

// Close select / Закрити селект
select.close();

// Check if open / Перевірити, чи відкрито
console.log(select.isOpened); // true/false
```

### Value Management / Керування значеннями

```javascript
// Get current value / Отримати поточне значення
const currentValue = select.$input.value;

// Set value programmatically / Встановити значення програмно
select.$input.value = 'option2';

// Update display / Оновити відображення
select.$triggerValue.innerHTML = 'Option 2';
```

## 📱 Usage Examples / Приклади використання

### 1. Category Selection / Вибір категорії

```html
<form class="product-form">
  <div class="form-group">
    <label for="category">Category:</label>
    <div class="js-select category-select">
      <input type="hidden" class="js-select-input" name="category" value="">
      <button type="button" class="js-select-trigger">
        <span class="js-select-trigger-value">Select category</span>
        <svg class="select-icon" width="16" height="16">
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </button>
      <div class="js-select-dropdown">
        <div class="js-select-option" data-select-value="electronics">Electronics</div>
        <div class="js-select-option" data-select-value="clothing">Clothing</div>
        <div class="js-select-option" data-select-value="books">Books</div>
        <div class="js-select-option" data-select-value="home">Home & Garden</div>
      </div>
    </div>
  </div>
</form>
```

```javascript
const categorySelect = new Select({
  container: '.category-select',
  inputSelector: '.js-select-input',
  triggerSelector: '.js-select-trigger',
  triggerValueSelector: '.js-select-trigger-value',
  dropdownItemSelector: '.js-select-dropdown',
  dropdownOptionSelector: '.js-select-option'
});
```

### 2. Language Selection / Вибір мови

```html
<div class="js-select language-select">
  <input type="hidden" class="js-select-input" name="language" value="en">
  <button class="js-select-trigger">
    <span class="js-select-trigger-value">🇺🇸 English</span>
    <svg class="select-icon" width="16" height="16">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  </button>
  <div class="js-select-dropdown">
    <div class="js-select-option" data-select-value="en">🇺🇸 English</div>
    <div class="js-select-option" data-select-value="uk">🇺🇦 Українська</div>
    <div class="js-select-option" data-select-value="es">🇪🇸 Español</div>
    <div class="js-select-option" data-select-value="fr">🇫🇷 Français</div>
  </div>
</div>
```

```scss
.language-select {
  .js-select-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
```

### 3. Size Selection with Groups / Вибір розміру з групами

```html
<div class="js-select size-select">
  <input type="hidden" class="js-select-input" name="size" value="">
  <button class="js-select-trigger">
    <span class="js-select-trigger-value">Choose size</span>
    <svg class="select-icon" width="16" height="16">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  </button>
  <div class="js-select-dropdown">
    <div class="option-group">
      <div class="option-group-title">Small</div>
      <div class="js-select-option" data-select-value="xs">XS</div>
      <div class="js-select-option" data-select-value="s">S</div>
    </div>
    <div class="option-group">
      <div class="option-group-title">Medium</div>
      <div class="js-select-option" data-select-value="m">M</div>
      <div class="js-select-option" data-select-value="l">L</div>
    </div>
    <div class="option-group">
      <div class="option-group-title">Large</div>
      <div class="js-select-option" data-select-value="xl">XL</div>
      <div class="js-select-option" data-select-value="xxl">XXL</div>
    </div>
  </div>
</div>
```

```scss
.size-select {
  .option-group {
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .option-group-title {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #666;
    background: #f8f9fa;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .js-select-option {
    padding-left: 2rem;
    font-weight: 500;
  }
}
```

### 4. Searchable Select / Селект з пошуком

```html
<div class="js-select searchable-select">
  <input type="hidden" class="js-select-input" name="country" value="">
  <button class="js-select-trigger">
    <span class="js-select-trigger-value">Select country</span>
    <svg class="select-icon" width="16" height="16">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  </button>
  <div class="js-select-dropdown">
    <div class="search-input">
      <input type="text" placeholder="Search countries..." class="search-field">
    </div>
    <div class="options-container">
      <div class="js-select-option" data-select-value="us">United States</div>
      <div class="js-select-option" data-select-value="ca">Canada</div>
      <div class="js-select-option" data-select-value="uk">United Kingdom</div>
      <div class="js-select-option" data-select-value="de">Germany</div>
      <div class="js-select-option" data-select-value="fr">France</div>
    </div>
  </div>
</div>
```

## 🛠️ Troubleshooting / Відлагодження

### Problem: Values not updating / Проблема: Значення не оновлюються
**Solution**: Check `data-select-value` attributes / Рішення: Перевірте атрибути `data-select-value`

### Problem: Form submission issues / Проблема: Проблеми з відправкою форми
**Solution**: Ensure hidden input has correct name attribute / Рішення: Переконайтеся, що приховане поле має правильний атрибут name

### Problem: Options not clickable / Проблема: Опції не клікабельні
**Solution**: Check option selectors and data attributes / Рішення: Перевірте селектори опцій та атрибути даних

### Problem: Styling not applied / Проблема: Стилізація не застосовується
**Solution**: Ensure proper CSS classes and structure / Рішення: Переконайтеся у правильних CSS класах та структурі

---

**Select component provides beautiful, customizable dropdown selections! / Компонент Select надає красиві, налаштовувані випадаючі вибори! 🎛️**
