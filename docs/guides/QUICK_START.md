# 🚀 Quick Start / Швидкий старт

## 📋 Getting Started with the Project / Початок роботи з проектом

This guide will help you quickly get started with the Vite Landing Template project.

Це керівництво допоможе вам швидко розпочати роботу з проектом Vite Landing Template.

## ⚡ Installation and Launch / Встановлення та запуск

### 1. **Clone the project / Клонування проекту**
```bash
git clone <repository-url>
cd vite-landing-template
```

### 2. **Install dependencies / Встановлення залежностей**
```bash
npm install
```

### 3. **Run in development mode / Запуск в режимі розробки**
```bash
npm run dev
```


## 🎯 First Steps / Перші кроки

### 1. **Changing Site Name / Зміна назви сайту**
Open `vite.config.js` and change:

Відкрийте `vite.config.js` та змініть:
```javascript
context: {
  siteName: 'Your site name', // Ваша назва сайту
  currentYear: new Date().getFullYear()
}
```

### 2. **Adding Images / Додавання зображень**
Place images in:

Розмістіть зображення в:
- `src/assets/images/` - for images in code / для зображень в коді
- `public/images/` - for static images / для статичних зображень

### 3. **Creating New Page / Створення нової сторінки**
1. Create a new HTML file in `src/` / Створіть новий HTML файл в `src/`
2. Use the structure from `index.html` / Використовуйте структуру з `index.html`
3. Add to `getHTMLFileNames.js` if needed / Додайте в `getHTMLFileNames.js` якщо потрібно

## 📝 Main Commands / Основні команди

See [COMMANDS.md](../COMMANDS.md) for full command list / Дивіться [COMMANDS.md](../COMMANDS.md) для повного списку команд.

| Command | Description / Опис |
|---------|-------------------|
| `npm run dev` | Start development server / Запуск сервера розробки |
| `npm run build` | Build project / Збірка проекту |
| `npm run preview` | Preview build / Попередній перегляд |
| `npm run lint` | Code check / Перевірка коду |

## 🎨 Work Basics / Основи роботи

### SCSS Styles / SCSS стилі
- Edit files in `src/styles/` / Редагуйте файли в `src/styles/`
- Use variables from `_variables.scss` / Використовуйте змінні з `_variables.scss`
- Apply mixins from `_mixins.scss` / Застосовуйте міксини з `_mixins.scss`

### JavaScript
- Add code to `src/js/main.js` / Додавайте код в `src/js/main.js`
- Use utilities from `src/js/utils/` / Використовуйте утиліти з `src/js/utils/`

### Handlebars Templates / Handlebars шаблони
- Edit templates in `src/templates/` / Редагуйте шаблони в `src/templates/`
- Use variables from context / Використовуйте змінні з контексту

## 📚 Additional Documentation / Додаткова документація

- **[Technologies](technologies/)** - Detailed technology guides / Детальні керівництва по технологіям
- **[Development](DEVELOPMENT.md)** - Development process / Процес розробки
- **[Deployment](DEPLOYMENT.md)** - Project deployment / Розгортання проекту

---

**Done! Now you can start development! / Готово! Тепер ви можете почати розробку! 🎉**
