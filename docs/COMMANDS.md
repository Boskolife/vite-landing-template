# 📋 Команды проекта / Project Commands

## 🚀 Основные команды / Main Commands

### Установка / Installation
```bash
npm install
```

### Разработка / Development
```bash
npm run dev
# Сервер будет доступен на http://localhost:3000
# Server will be available at http://localhost:3000
```

### Сборка / Build
```bash
npm run build
# Результат в папке dist/
# Result in dist/ folder
```

### Предварительный просмотр / Preview
```bash
npm run preview
# Сервер будет доступен на http://localhost:4173
# Server will be available at http://localhost:4173
```

### Проверка кода / Code Check
```bash
npm run lint
```

### Исправление ошибок / Fix Errors
```bash
npm run lint:fix
```

### Форматирование / Formatting
```bash
npm run format
```

## 📊 Таблица команд / Commands Table

| Команда / Command | Описание / Description |
|-------------------|------------------------|
| `npm run dev` | Запуск сервера разработки / Start development server |
| `npm run build` | Сборка проекта / Build project |
| `npm run preview` | Предварительный просмотр сборки / Preview build |
| `npm run lint` | Проверка кода / Code check |
| `npm run lint:fix` | Исправление ошибок / Fix errors |
| `npm run format` | Форматирование кода / Format code |

## 🔧 Дополнительные команды / Additional Commands

### Очистка кеша / Clear Cache
```bash
npm run dev -- --force
```

### Сборка с анализом / Build with Analysis
```bash
npm run build -- --analyze
```

### Сборка для продакшена / Production Build
```bash
NODE_ENV=production npm run build
```
