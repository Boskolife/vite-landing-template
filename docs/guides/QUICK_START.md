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


## 🎯 Первые шаги

### 1. **Changing Site Name / Зміна назви сайту**
Open `vite.config.js` and change:

Відкрийте `vite.config.js` та змініть:
```javascript
context: {
  siteName: 'Ваше название сайта',
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

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Сборка проекта |
| `npm run preview` | Предварительный просмотр |
| `npm run lint` | Проверка кода |

## 🎨 Основы работы

### SCSS стили
- Редактируйте файлы в `src/styles/`
- Используйте переменные из `_variables.scss`
- Применяйте миксины из `_mixins.scss`

### JavaScript
- Добавляйте код в `src/js/main.js`
- Используйте утилиты из `src/js/utils/`

### Handlebars шаблоны
- Редактируйте шаблоны в `src/templates/`
- Используйте переменные из контекста

## 📚 Дополнительная документация

- **[Технологии](technologies/)** - Подробные руководства по технологиям
- **[Разработка](DEVELOPMENT.md)** - Процесс разработки
- **[Деплой](DEPLOYMENT.md)** - Развертывание проекта

---

**Готово! Теперь вы можете начать разработку! 🎉**
