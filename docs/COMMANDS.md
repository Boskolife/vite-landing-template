# 📋 Project Commands / Команди проекту

## 🚀 Main Commands / Основні команди

### Installation / Встановлення
```bash
npm install
```

### Development / Розробка
```bash
npm run dev
# Server will be available at http://localhost:3000
```

### Build / Збірка
```bash
npm run build
# Result in dist/ folder
```

### Preview / Попередній перегляд
```bash
npm run preview
# Server will be available at http://localhost:4173
```

### Code Check / Перевірка коду
```bash
npm run lint
```

### Fix Errors / Виправлення помилок
```bash
npm run lint:fix
```

### Formatting / Форматування
```bash
npm run format
```

## 📊 Commands Table / Таблиця команд

| Command / Команда | Description / Опис |
|-------------------|------------------------|
| `npm run dev` | Start development server / Запуск сервера розробки |
| `npm run build` | Build project / Збірка проекту |
| `npm run preview` | Preview build / Попередній перегляд збірки |
| `npm run lint` | Code check / Перевірка коду |
| `npm run lint:fix` | Fix errors / Виправлення помилок |
| `npm run format` | Format code / Форматування коду |

## 🔧 Additional Commands / Додаткові команди

### Clear Cache / Очищення кешу
```bash
npm run dev -- --force
```

### Build with Analysis / Збірка з аналізом
```bash
npm run build -- --analyze
```

### Production Build / Збірка для продакшену
```bash
NODE_ENV=production npm run build
```
