# 📄 Handlebars - Template System / Система шаблонів

## 📋 Overview / Огляд

**Handlebars** is a powerful template system that allows you to create semantic templates efficiently and painlessly. Used in the project for creating reusable components and dynamic content.

**Handlebars** — це потужна система шаблонів, яка дозволяє створювати семантичні шаблони ефективно та безболісно. У проекті використовується для створення перевикористовуваних компонентів та динамічного контенту.

## 🚀 Main Features / Основні можливості

- 📄 **Templates / Шаблони** - Creating reusable HTML structures / Створення перевикористовуваних HTML структур
- 🔧 **Partials / Партіали** - Including templates in other templates / Включення одних шаблонів в інші
- 📊 **Context / Контекст** - Data passing to templates / Передача даних у шаблони
- 🔀 **Conditions / Умови** - Conditional content display / Умовне відображення контенту
- 🔄 **Loops / Цикли** - Array data iteration / Ітерація по масивам даних
- 🎯 **Helpers / Хелпери** - Custom functions / Користувацькі функції

## 📁 Template Structure in Project / Структура шаблонів в проекті

```
src/
├── templates/              # Handlebars templates / Handlebars шаблони
│   ├── header.html        # Site header / Шапка сайту
│   └── footer.html        # Site footer / Підвал сайту
├── index.html             # Main page / Головна сторінка
└── examples/
    └── webp-examples.html # Usage examples / Приклади використання
```

## ⚙️ Configuration in Vite / Конфігурація в Vite

### Плагин vite-plugin-handlebars

```javascript
// vite.config.js
import handlebars from 'vite-plugin-handlebars';

plugins: [
  handlebars({
    partialDirectory: resolve(__dirname, 'src/templates'),
    context: {
      siteName: 'Vite Landing Template',
      currentYear: new Date().getFullYear()
    }
  })
]
```

### Настройки плагина

- **partialDirectory** - Папка с партиалами
- **context** - Глобальный контекст для всех шаблонов
- **helpers** - Пользовательские хелперы
- **compileOptions** - Опции компиляции Handlebars

## 📄 Основы синтаксиса

### 1. **Простые выражения**
```html
<!-- Variable output / Вивід змінної -->
<h1>{{title}}</h1>

<!-- Output with HTML escaping / Вивід з екрануванням HTML -->
<p>{{description}}</p>

<!-- Output without escaping (careful!) / Вивід без екранування (обережно!) -->
<div>{{{htmlContent}}}</div>
```

### 2. **Вложенные свойства**
```html
<!-- Access to nested object properties / Доступ до вкладених властивостей об'єкта -->
<h2>{{user.name}}</h2>
<p>{{user.profile.email}}</p>

<!-- Safe access with ? / Безпечний доступ з ? -->
<p>{{user?.profile?.bio}}</p>
```

### 3. **Партиалы (включения)**
```html
<!-- Include partial / Включення парціала -->
{{> header }}

<!-- Include with data passing / Включення з передачею даних -->
{{> user-card user }}

<!-- Include with custom data / Включення з користувацькими даними -->
{{> button text="Click me" class="primary" }}
```

## 🔧 Creating Partials / Створення партіалів

### 1. **Header шаблон**
```html
<!-- src/templates/header.html -->
<header id="header" class="header">
  <nav class="header__nav">
    <div class="header__container">
      <a href="/" class="header__logo">
        {{siteName}}
      </a>
      <ul class="header__menu">
        <li><a href="/" class="header__link">Home</a></li>
        <li><a href="/about.html" class="header__link">About</a></li>
        <li><a href="/contact.html" class="header__link">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

### 2. **Footer шаблон**
```html
<!-- src/templates/footer.html -->
<footer id="footer" class="footer">
  <div class="footer__container">
    <div class="footer__content">
      <p class="footer__copyright">
        © {{currentYear}} {{siteName}}. All rights reserved.
      </p>
      <div class="footer__links">
        <a href="/privacy.html" class="footer__link">Privacy Policy</a>
        <a href="/terms.html" class="footer__link">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

### 3. **Пользовательская карточка**
```html
<!-- src/templates/user-card.html -->
<div class="user-card">
  <div class="user-card__avatar">
    <img src="{{avatar}}" alt="{{name}}" class="user-card__image">
  </div>
  <div class="user-card__content">
    <h3 class="user-card__name">{{name}}</h3>
    <p class="user-card__role">{{role}}</p>
    <p class="user-card__bio">{{bio}}</p>
  </div>
  <div class="user-card__actions">
    <a href="/users/{{id}}" class="user-card__link">View Profile</a>
  </div>
</div>
```

## 🔀 Условные выражения

### 1. **if/else условия**
```html
<!-- Simple condition / Проста умова -->
{{#if user}}
  <p>Welcome, {{user.name}}!</p>
{{/if}}

<!-- Condition with else / Умова з else -->
{{#if user.isLoggedIn}}
  <a href="/logout">Logout</a>
{{else}}
  <a href="/login">Login</a>
{{/if}}

<!-- Check for false / Перевірка на false -->
{{#unless user.isLoggedIn}}
  <p>Please log in to continue.</p>
{{/unless}}
```

### 2. **Сложные условия**
```html
<!-- Logical operators / Логічні оператори -->
{{#if (and user.isLoggedIn user.isAdmin)}}
  <a href="/admin">Admin Panel</a>
{{/if}}

{{#if (or user.isLoggedIn user.isGuest)}}
  <p>You have access to content.</p>
{{/if}}

<!-- Value comparison / Порівняння значень -->
{{#if (eq user.role "admin")}}
  <div class="admin-controls">...</div>
{{/if}}
```

## 🔄 Циклы и итерация

### 1. **each цикл**
```html
<!-- Array iteration / Ітерація по масиву -->
<ul class="menu">
  {{#each menuItems}}
    <li class="menu__item">
      <a href="{{url}}" class="menu__link">{{title}}</a>
    </li>
  {{/each}}
</ul>

<!-- Iteration with index / Ітерація з індексом -->
<ol class="steps">
  {{#each steps}}
    <li class="steps__item">
      <span class="steps__number">{{@index}}</span>
      <span class="steps__text">{{this}}</span>
    </li>
  {{/each}}
</ol>

<!-- Object iteration / Ітерація по об'єкту -->
<dl class="properties">
  {{#each user.properties}}
    <dt class="properties__key">{{@key}}</dt>
    <dd class="properties__value">{{this}}</dd>
  {{/each}}
</dl>
```

### 2. **Цикл с контекстом**
```html
<!-- Access to parent context / Доступ до батьківського контексту -->
{{#each posts}}
  <article class="post">
    <h2 class="post__title">{{title}}</h2>
    <p class="post__author">By {{../author.name}}</p>
    <div class="post__content">{{content}}</div>
  </article>
{{/each}}
```

## 🎯 Пользовательские хелперы

### 1. **Регистрация хелперов**
```javascript
// vite.config.js
import handlebars from 'vite-plugin-handlebars';

plugins: [
  handlebars({
    partialDirectory: resolve(__dirname, 'src/templates'),
    context: {
      siteName: 'Vite Landing Template',
      currentYear: new Date().getFullYear()
    },
    helpers: {
      // Helper for date formatting / Хелпер для форматування дати
      formatDate: (date) => {
        return new Date(date).toLocaleDateString();
      },
      
      // Helper for conditional CSS class / Хелпер для умовного CSS класу
      activeClass: (current, target) => {
        return current === target ? 'active' : '';
      },
      
      // Helper for text truncation / Хелпер для обрізки тексту
      truncate: (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
      }
    }
  })
]
```

### 2. **Использование хелперов**
```html
<!-- Date formatting / Форматування дати -->
<p class="post__date">{{formatDate publishedAt}}</p>

<!-- Conditional CSS classes / Умовні CSS класи -->
<nav class="navigation">
  {{#each menuItems}}
    <a href="{{url}}" 
       class="nav__link {{activeClass ../currentPage url}}">
      {{title}}
    </a>
  {{/each}}
</nav>

<!-- Text truncation / Обрізка тексту -->
<p class="post__excerpt">{{truncate description 150}}</p>
```

## 📊 Работа с данными

### 1. **Передача данных в шаблоны**
```javascript
// vite.config.js
context: {
  siteName: 'Vite Landing Template',
  currentYear: new Date().getFullYear(),
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    isLoggedIn: true
  },
  menuItems: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about.html' },
    { title: 'Contact', url: '/contact.html' }
  ]
}
```

### 2. **Использование в HTML**
```html
<!-- src/index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{siteName}} - {{pageTitle}}</title>
</head>

<body>
  {{> header }}
  
  <main>
    {{#if user.isLoggedIn}}
      <h1>Welcome back, {{user.name}}!</h1>
    {{else}}
      <h1>Welcome to {{siteName}}</h1>
    {{/if}}
    
    <nav class="main-nav">
      {{#each menuItems}}
        <a href="{{url}}" class="nav__link">{{title}}</a>
      {{/each}}
    </nav>
  </main>
  
  {{> footer }}
</body>
</html>
```

## 🔧 Продвинутые техники

### 1. **Вложенные партиалы**
```html
<!-- src/templates/post-list.html -->
<div class="post-list">
  {{#each posts}}
    {{> post-card this}}
  {{/each}}
</div>

<!-- src/templates/post-card.html -->
<article class="post-card">
  <header class="post-card__header">
    {{> post-meta this}}
  </header>
  <div class="post-card__content">
    <h2 class="post-card__title">{{title}}</h2>
    <p class="post-card__excerpt">{{excerpt}}</p>
  </div>
</article>
```

### 2. **Условные партиалы**
```html
<!-- Include partial by condition / Включення парціала за умовою -->
{{#if hasComments}}
  {{> comments-section}}
{{/if}}

<!-- Partial with conditional logic / Парціал з умовною логікою -->
{{> button text="Save" type="submit" class="primary"}}
```

### 3. **Динамические имена партиалов**
```html
<!-- Using variable for partial name / Використання змінної для імені парціала -->
{{#each components}}
  {{> (lookup . 'type') data=this}}
{{/each}}
```

## 📝 Практические примеры

### 1. **Навигационное меню**
```html
<!-- src/templates/navigation.html -->
<nav class="navigation">
  <ul class="navigation__list">
    {{#each menuItems}}
      <li class="navigation__item">
        <a href="{{url}}" 
           class="navigation__link {{#if active}}navigation__link--active{{/if}}">
          {{title}}
          {{#if badge}}
            <span class="navigation__badge">{{badge}}</span>
          {{/if}}
        </a>
      </li>
    {{/each}}
  </ul>
</nav>
```

### 2. **Карточка товара**
```html
<!-- src/templates/product-card.html -->
<div class="product-card">
  <div class="product-card__image">
    <img src="{{image}}" alt="{{name}}" loading="lazy">
    {{#if sale}}
      <span class="product-card__badge">Sale</span>
    {{/if}}
  </div>
  
  <div class="product-card__content">
    <h3 class="product-card__name">{{name}}</h3>
    <p class="product-card__description">{{description}}</p>
    
    <div class="product-card__price">
      {{#if salePrice}}
        <span class="product-card__price--sale">${{salePrice}}</span>
        <span class="product-card__price--original">${{originalPrice}}</span>
      {{else}}
        <span class="product-card__price--current">${{price}}</span>
      {{/if}}
    </div>
    
    <div class="product-card__actions">
      <button class="btn btn--primary" data-product-id="{{id}}">
        Add to Cart
      </button>
      <a href="/products/{{id}}" class="btn btn--secondary">
        View Details
      </a>
    </div>
  </div>
</div>
```

### 3. **Форма с валидацией**
```html
<!-- src/templates/contact-form.html -->
<form class="contact-form" action="/contact" method="POST">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" 
           id="name" 
           name="name" 
           class="form-input {{#if errors.name}}form-input--error{{/if}}"
           value="{{values.name}}"
           required>
    {{#if errors.name}}
      <span class="form-error">{{errors.name}}</span>
    {{/if}}
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" 
           id="email" 
           name="email" 
           class="form-input {{#if errors.email}}form-input--error{{/if}}"
           value="{{values.email}}"
           required>
    {{#if errors.email}}
      <span class="form-error">{{errors.email}}</span>
    {{/if}}
  </div>
  
  <div class="form-group">
    <label for="message" class="form-label">Message</label>
    <textarea id="message" 
              name="message" 
              class="form-textarea {{#if errors.message}}form-textarea--error{{/if}}"
              required>{{values.message}}</textarea>
    {{#if errors.message}}
      <span class="form-error">{{errors.message}}</span>
    {{/if}}
  </div>
  
  <button type="submit" class="btn btn--primary">Send Message</button>
</form>
```

## 🚨 Troubleshooting

### Проблема: Партиалы не загружаются
**Решение:**
```javascript
// Check partials path in vite.config.js / Перевірте шлях до парціалів в vite.config.js
partialDirectory: resolve(__dirname, 'src/templates')
```

### Проблема: Переменные не отображаются
**Решение:**
```javascript
// Make sure variables are passed to context / Переконайтеся, що змінні передані в context
context: {
  siteName: 'My Site',
  // другие переменные
}
```

### Проблема: Хелперы не работают
**Решение:**
```javascript
// Check helpers registration / Перевірте реєстрацію хелперів
helpers: {
  myHelper: (value) => {
    return value.toUpperCase();
  }
}
```

## 📚 Полезные ссылки

- [Официальная документация Handlebars](https://handlebarsjs.com/)
- [Руководство по хелперам](https://handlebarsjs.com/guide/builtin-helpers.html)
- [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars)

---

**Handlebars делает шаблоны мощными и переиспользуемыми! 📄**
