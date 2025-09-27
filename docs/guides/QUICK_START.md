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

Сервер будет доступен на `http://localhost:3000`

## 🎯 Первые шаги

### 1. **Изменение названия сайта**
Откройте `vite.config.js` и измените:
```javascript
context: {
  siteName: 'Ваше название сайта',
  currentYear: new Date().getFullYear()
}
```

### 2. **Добавление изображений**
Поместите изображения в:
- `src/assets/images/` - для изображений в коде
- `public/images/` - для статических изображений

### 3. **Creating New Page / Створення нової сторінки**
1. Создайте новый HTML файл в `src/`
2. Используйте структуру из `index.html`
3. Добавьте в `getHTMLFileNames.js` если нужно

## 📝 Main Commands / Основні команди

См. [COMMANDS.md](../COMMANDS.md) для полного списка команд / See [COMMANDS.md](../COMMANDS.md) for full command list.

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
