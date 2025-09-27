# 🎨 SCSS - CSS Preprocessor / Препроцесор CSS

## 📋 Overview / Огляд

**SCSS (Sassy CSS)** is a CSS extension that adds powerful programming capabilities to styles. The project uses a modern modular SCSS architecture with the `@use` directive.

**SCSS (Sassy CSS)** — це розширення CSS, яке додає потужні можливості програмування до стилів. Проект використовує сучасну модульну архітектуру SCSS з директивою `@use`.

## 🚀 Main Features / Основні можливості

- 🎨 **Variables / Змінні** - Centralized value management / Централізоване управління значеннями
- 🔧 **Mixins / Міксини** - Reusable style blocks / Перевикористовувані блоки стилів
- 📦 **Modules / Модулі** - Import and code organization / Імпорт та організація коду
- 🧮 **Functions / Функції** - Calculations and transformations / Обчислення та перетворення
- 🔀 **Loops and conditions / Цикли та умови** - Dynamic style generation / Динамічна генерація стилів
- 📐 **Nesting / Вкладеність** - Hierarchical selector structure / Ієрархічна структура селекторів

## 📁 SCSS Structure in Project / Структура SCSS в проекті

```
src/styles/
├── main.scss              # Main import file / Головний файл імпортів
├── base/                  # Base styles / Базові стилі
│   ├── _variables.scss    # Variables / Змінні
│   ├── _mixins.scss       # Mixins / Міксини
│   ├── _functions.scss    # Functions / Функції
│   ├── _adaptive.scss     # Adaptive mixins / Адаптивні міксини
│   ├── _fonts.scss        # Fonts / Шрифти
│   ├── _reset.scss        # CSS reset / CSS скидання
│   ├── _typography.scss   # Typography / Типографіка
│   ├── _forms.scss        # Form styles / Стилі форм
│   ├── _helpers.scss      # Utility classes / Утилітарні класи
│   └── _webp.scss         # WebP mixins / WebP міксини
├── layout/                # Layout styles / Стилі макету
│   ├── _header.scss       # Site header / Шапка сайту
│   ├── _footer.scss       # Site footer / Підвал сайту
│   └── _common.scss       # Common layout styles / Загальні стилі макету
└── vendors/               # Third-party libraries / Сторонні бібліотеки
    ├── _normalize.scss    # Normalize.css
    └── _include-media.scss # Media queries / Медіа-запити
```

## 🔧 Модульная система @use

### Module Import / Імпорт модулів
```scss
// main.scss
@use 'base/variables' as *;
@use 'base/mixins' as *;
@use 'base/functions' as *;
```

### Using with Namespaces / Використання з просторами імен
```scss
// With global namespace / З глобальним простором імен
@use 'base/variables' as *;
$primary-color: $blue; // Direct usage / Пряме використання

// With local namespace / З локальним простором імен
@use 'base/variables';
$primary-color: variables.$blue; // Through prefix / Через префікс

// With custom alias / З користувацьким псевдонімом
@use 'base/variables' as vars;
$primary-color: vars.$blue; // Through alias / Через псевдонім
```

## 🎨 Переменные (_variables.scss)

### Colors / Кольори
```scss
// Primary colors / Основні кольори
$black: #000;
$white: #fff;
$gray: #ccc;

// Functional colors / Функціональні кольори
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
$danger-color: #dc3545;
$warning-color: #ffc107;
$info-color: #17a2b8;
```

### Typography / Типографіка
```scss
// Fonts / Шрифти
$base-font-sans-serif: 'SpaceMono', 'Courier New', monospace;
$base-font-serif: 'Times New Roman', serif;

// Font sizes / Розміри шрифтів
$h1-font-size: 78px;
$h2-font-size: 52px;
$h3-font-size: 24px;
$h4-font-size: 22px;
$h5-font-size: 17px;
$h6-font-size: 15px;

// Text settings / Налаштування тексту
$base-text-color: $black;
$font-size-base: 16px;
$line-height-base: 1.2;
```

### Breakpoints
```scss
$breakpoints: (
  'xs-phone': 320px,
  'phone': 480px,
  'tablet': 768px,
  'tablet_x': 860px,
  'desktop': 1024px,
  'widescreen': 1200px
);
```

### Animations / Анімації
```scss
$animation-speed: all .3s ease 0s;
$transition-base: all 0.3s ease;
$transition-fast: all 0.15s ease;
$transition-slow: all 0.5s ease;
```

## 🔧 Миксины (_mixins.scss)

### Adaptive Mixins / Адаптивні міксини
```scss
// Using include-media / Використання include-media
@mixin media($breakpoint) {
  @include media($breakpoint) {
    @content;
  }
}

// Usage example / Приклад використання
.responsive-element {
  font-size: 16px;
  
  @include media('>=tablet') {
    font-size: 18px;
  }
  
  @include media('>=desktop') {
    font-size: 20px;
  }
}
```

### Utility Mixins / Утилітарні міксини
```scss
// Flexbox центрирование
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Absolute positioning / Абсолютне позиціонування
@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Text truncation / Обрізка тексту
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### WebP миксины
```scss
// Background image with WebP / Фонове зображення з WebP
@mixin webp-bg-image($image-path, $fallback-extension: 'jpg') {
  background-image: url('#{$image-path}.#{$fallback-extension}');
  
  .webp & {
    background-image: url('#{$image-path}.webp');
  }
}

// Hero изображение
@mixin webp-hero-image($image-path, $fallback-extension: 'jpg', $height: 100vh) {
  position: relative;
  height: $height;
  background-size: cover;
  background-position: center;
  
  @include webp-bg-image-multi($image-path, $fallback-extension);
}
```

## 🧮 Функции (_functions.scss)

### Working with Units / Робота з одиницями
```scss
// Remove units / Видалення одиниць вимірювання
@function strip-unit($num) {
  @return $num / ($num * 0 + 1);
}

// Convert to rem / Конвертація в rem
@function convert-to-rem($value, $base-value: 16px) {
  $value: strip-unit($value) / strip-unit($base-value) * 1rem;
  
  @if $value == 0rem {
    @return 0;
  }
  
  @return $value;
}

// Calculate rem with base value / Розрахунок rem з базовим значенням
@function rem-calc($values, $base-value: $rem-base) {
  $max: length($values);
  
  @if $max == 1 {
    @return convert-to-rem(nth($values, 1), $base-value);
  }
  
  $rem-values: ();
  @for $i from 1 through $max {
    $rem-values: append($rem-values, convert-to-rem(nth($values, $i), $base-value));
  }
  
  @return $rem-values;
}
```

### Working with Colors / Робота з кольорами
```scss
// Lighten color / Освітлення кольору
@function lighten-color($color, $percentage) {
  @return lighten($color, $percentage);
}

// Darken color / Затемнення кольору
@function darken-color($color, $percentage) {
  @return darken($color, $percentage);
}

// Color transparency / Прозорість кольору
@function rgba-color($color, $alpha) {
  @return rgba($color, $alpha);
}
```

## 📐 Встроенные модули Sass

### sass:list
```scss
@use 'sass:list';

$colors: red, green, blue, yellow;

// Get first element / Отримати перший елемент
$first: list.nth($colors, 1); // red

// Get list length / Отримати довжину списку
$length: list.length($colors); // 4

// Add element / Додати елемент
$new-colors: list.append($colors, purple);
```

### sass:map
```scss
@use 'sass:map';

$theme: (
  primary: #007bff,
  secondary: #6c757d,
  success: #28a745
);

// Get value / Отримати значення
$primary: map.get($theme, primary); // #007bff

// Check key existence / Перевірити наявність ключа
$has-warning: map.has-key($theme, warning); // false
```

### sass:math
```scss
@use 'sass:math';

// Mathematical operations / Математичні операції
$result: math.div(12, 3); // 4
$power: math.pow(2, 3); // 8
$sqrt: math.sqrt(16); // 4

// Rounding / Округлення
$ceil: math.ceil(4.2); // 5
$floor: math.floor(4.8); // 4
$round: math.round(4.5); // 5
```

### sass:string
```scss
@use 'sass:string';

$text: "Hello World";

// String length / Довжина рядка
$length: string.length($text); // 11

// Search substring / Пошук підрядка
$index: string.index($text, "World"); // 7

// Extract substring / Витягнення підрядка
$substring: string.slice($text, 7, 11); // "World"
```

## 🎯 Практические примеры

### Creating Spacing System / Створення системи відступів
```scss
$spacing-scale: 0, 4px, 8px, 16px, 24px, 32px, 48px, 64px;

@function spacing($index) {
  @return list.nth($spacing-scale, $index);
}

// Generate utility classes / Генерація утилітарних класів
@for $i from 1 through length($spacing-scale) {
  $size: list.nth($spacing-scale, $i);
  .mt-#{$i - 1} { margin-top: $size; }
  .mb-#{$i - 1} { margin-bottom: $size; }
  .ml-#{$i - 1} { margin-left: $size; }
  .mr-#{$i - 1} { margin-right: $size; }
}
```

### Creating Color Palette / Створення кольорової палітри
```scss
$base-colors: (
  red: #dc2626,
  blue: #2563eb,
  green: #16a34a
);

@each $name, $color in $base-colors {
  .text-#{$name} {
    color: $color;
  }
  
  .bg-#{$name} {
    background-color: $color;
  }
  
  .border-#{$name} {
    border-color: $color;
  }
}
```

### Adaptive Typography / Адаптивна типографіка
```scss
$font-sizes: (
  'xs': 12px,
  'sm': 14px,
  'base': 16px,
  'lg': 18px,
  'xl': 20px,
  '2xl': 24px,
  '3xl': 30px,
  '4xl': 36px
);

@each $size, $value in $font-sizes {
  .text-#{$size} {
    font-size: $value;
    
    @include media('>=tablet') {
      font-size: math.div($value * 1.1, 1px) * 1px;
    }
    
    @include media('>=desktop') {
      font-size: math.div($value * 1.2, 1px) * 1px;
    }
  }
}
```

## 🔄 Циклы и условия

### @for цикл
```scss
// Create grid columns / Створення grid колонок
@for $i from 1 through 12 {
  .col-#{$i} {
    width: math.div($i, 12) * 100%;
  }
}
```

### @each цикл
```scss
// Create buttons of different sizes / Створення кнопок різних розмірів
$button-sizes: (
  'sm': (padding: 0.25rem 0.5rem, font-size: 0.875rem),
  'md': (padding: 0.5rem 1rem, font-size: 1rem),
  'lg': (padding: 0.75rem 1.5rem, font-size: 1.125rem)
);

@each $size, $properties in $button-sizes {
  .btn-#{$size} {
    padding: map.get($properties, padding);
    font-size: map.get($properties, font-size);
  }
}
```

### @if условия
```scss
// Adaptive margins / Адаптивні відступи
@mixin responsive-padding($mobile, $desktop) {
  padding: $mobile;
  
  @include media('>=desktop') {
    padding: $desktop;
  }
  
  @if $mobile == $desktop {
    // If values are the same, do not generate media query / Якщо значення однакові, не генеруємо медіа-запит
    padding: $mobile;
  }
}
```

## 🎨 Лучшие практики

### 1. **Именование переменных**
```scss
// ✅ Хорошо
$primary-color: #007bff;
$font-size-base: 16px;
$spacing-unit: 8px;

// ❌ Плохо
$color1: #007bff;
$size: 16px;
$space: 8px;
```

### 2. **Организация импортов**
```scss
// ✅ Правильный порядок
@use 'base/variables' as *;    // First variables / Спочатку змінні
@use 'base/functions' as *;    // Then functions / Потім функції
@use 'base/mixins' as *;       // Then mixins / Потім міксини
@use 'layout/header' as *;     // Finally components / Нарешті компоненти
```

### 3. **Использование миксинов**
```scss
// ✅ Хорошо - переиспользуемый код
@mixin button-base {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  @include button-base;
  background-color: $primary-color;
  color: $white;
}
```

### 4. **Вложенность селекторов**
```scss
// ✅ Хорошо - не глубже 3 уровней
.card {
  border: 1px solid $gray;
  
  &__header {
    padding: 1rem;
    
    &-title {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
}
```

## 🚨 Troubleshooting

### Problem: Variables Not Working / Проблема: Змінні не працюють
**Решение:**
```scss
// Make sure variables are imported / Переконайтеся, що змінні імпортовані
@use 'base/variables' as *;
```

### Problem: Mixins Not Found / Проблема: Міксини не знайдені
**Решение:**
```scss
// Check import order / Перевірте порядок імпортів
@use 'base/mixins' as *;
```

### Problem: Circular Dependencies / Проблема: Циклічні залежності
**Решение:**
```scss
// Avoid import A → B → A / Уникайте імпорту A → B → A
// Use common variables in separate file / Використовуйте загальні змінні в окремому файлі
```

## 📚 Полезные ссылки

- [Официальная документация Sass](https://sass-lang.com/)
- [Руководство по миграции с @import на @use](https://sass-lang.com/documentation/at-rules/use)
- [Sass Guidelines](https://sass-guidelin.es/)

---

**SCSS делает CSS мощным и поддерживаемым! 🎨**
