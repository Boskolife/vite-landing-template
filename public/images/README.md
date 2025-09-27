# 📁 Папка images/

## 📋 Назначение

Эта папка содержит все изображения проекта. В Vite все файлы из папки `public/` копируются в `dist/` без обработки.

## 🎯 Правила использования

### ✅ **Что помещать сюда:**
- Логотипы (PNG, SVG)
- Фоновые изображения (JPG, PNG)
- Иконки (PNG, SVG)
- Изображения галереи (JPG, PNG)
- Любые статические изображения

### 📝 **Примеры файлов:**
```
public/images/
├── logo.png              # Логотип сайта
├── hero-bg.jpg           # Фоновое изображение hero секции
├── icon-heart.png        # Иконка сердца
├── icon-star.png         # Иконка звезды
├── icon-check.png        # Иконка галочки
├── gallery-1.jpg         # Изображение галереи 1
├── gallery-2.jpg         # Изображение галереи 2
├── featured-product.jpg  # Изображение товара
└── team-member-1.jpg     # Фото участника команды
```

## 🖼️ **WebP оптимизация**

При сборке проекта (`npm run build`) все изображения автоматически:
- Оптимизируются (сжимаются)
- Конвертируются в WebP формат
- Создаются fallback версии

## 💡 **Использование в коде**

### HTML:
```html
<!-- Обычное изображение с WebP fallback -->
<img 
  src="/images/logo.png" 
  data-webp="/images/logo.webp"
  alt="Logo"
  loading="lazy"
>

<!-- Picture element (рекомендуется) -->
<picture>
  <source srcset="/images/hero-bg.webp" type="image/webp">
  <img src="/images/hero-bg.jpg" alt="Hero background">
</picture>
```

### SCSS:
```scss
.hero-section {
  @include webp-bg-image('/images/hero-bg', 'jpg');
  background-size: cover;
  background-position: center;
}
```

## 🚨 **Важно помнить**

1. **Только `public/images/`** - не создавайте папку `src/assets/images/`
2. **Все изображения здесь** - и для HTML, и для CSS
3. **Автоматическая оптимизация** - WebP создается при сборке
4. **Fallback поддержка** - старые браузеры получат оригинальные форматы

---

**Помещайте все изображения только в эту папку! 📁**
