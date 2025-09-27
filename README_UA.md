# Vite Landing Шаблон

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
  <img src="https://img.shields.io/badge/Handlebars-F0772B?style=for-the-badge&logo=handlebarsdotjs&logoColor=white" alt="Handlebars">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="Ліцензія">
</div>

---

Сучасний, швидкий та ефективний конструктор лендінгових сторінок, побудований на Vite, JavaScript, SCSS та Handlebars шаблонах. Ідеальний для створення адаптивних лендінгових сторінок з гарячою заміною, оптимізованими збірками та автоматизованим розгортанням.

## ✨ Особливості

- ⚡ **Vite 7** - Швидкий інструмент збірки з гарячою заміною
- 📝 **JavaScript ES6+** - Сучасна JavaScript розробка
- 🎨 **SCSS** - Розширений CSS препроцесинг зі змінними та міксинами
- 📄 **Handlebars** - Движок шаблонів для переповних компонентів
- 🔧 **ESLint + Prettier** - Якість коду та форматування
- 📱 **Адаптивний дизайн** - Мобільний підхід з користувацькими точками зупинки
- 🎯 **Swiper 12** - Включений сучасний слайдер
- 🚀 **Оптимізована збірка** - Готова для продакшена з розділенням коду
- 🔤 **Шрифт Space Mono** - Сучасна моноширинна типографіка
- 🛡️ **Налаштування No-Index** - SEO захист з robots.txt та мета-тегами
- 🖼️ **Підтримка WebP** - Автоматична оптимізація зображень з WebP

## 🚀 Швидкий старт

```bash
# Клонування репозиторію
git clone <repository-url>
cd vite-landing-template

# Встановлення залежностей
npm install

# Запуск сервера розробки
npm run dev

# Збірка для продакшена
npm run build

# Попередній перегляд збірки
npm run preview
```

## 📁 Структура проекту

```
vite-landing-template/
├── src/                          # Вихідні файли
│   ├── index.html               # Головна сторінка
│   ├── js/                      # JavaScript файли
│   │   ├── main.js             # Основна логіка додатку
│   │   └── utils/              # Функції утиліти
│   ├── styles/                 # SCSS таблиці стилів
│   │   ├── main.scss           # Основний файл стилів
│   │   ├── base/               # Базові стилі
│   │   ├── layout/             # Стилі макету
│   │   └── components/         # Стилі компонентів
│   └── templates/              # Handlebars шаблони
├── public/                      # Статичні ресурси
│   ├── images/                 # Зображення проекту
│   └── fonts/                  # Файли шрифтів
├── docs/                       # Документація
├── scripts/                    # Скрипти збірки та релізів
├── .github/workflows/          # GitHub Actions
└── dist/                       # Зібрані файли (генеруються)
```

## 🛠️ Доступні скрипти

### Розробка
```bash
npm run dev              # Запуск сервера розробки
npm run build            # Збірка для продакшена
npm run preview          # Попередній перегляд
```

### Якість коду
```bash
npm run lint             # Перевірка стилю коду
npm run lint:fix         # Виправлення проблем стилю
npm run format           # Форматування коду з Prettier
```

### Управління релізами
```bash
npm run release patch "опис"     # Створити patch реліз
npm run release minor "опис"     # Створити minor реліз
npm run release major "опис"     # Створити major реліз

npm run github:patch "опис"      # Створити GitHub patch реліз
npm run github:minor "опис"      # Створити GitHub minor реліз
npm run github:major "опис"      # Створити GitHub major реліз
```

## 🎨 Використані технології

| Технологія | Версія | Призначення |
|------------|--------|-------------|
| **Vite** | 7.1.7 | Інструмент збірки та сервер розробки |
| **JavaScript** | ES6+ | Основна мова |
| **SCSS** | 1.71.1 | CSS препроцесинг |
| **Handlebars** | 2.0.0 | Движок шаблонів |
| **ESLint** | 9.36.0 | Лінтинг коду |
| **Prettier** | 3.2.5 | Форматування коду |
| **Swiper** | 12.0.2 | Слайдер компонент |
| **Sharp** | 0.34.4 | Оптимізація зображень |

## 🖼️ Оптимізація зображень WebP

Шаблон включає комплексну підтримку WebP:

- ✅ **Автоматична конвертація** - PNG, JPG, JPEG → WebP
- ✅ **Підтримка fallback** - Автоматичне виявлення формату
- ✅ **Оптимізація під час збірки** - Інтегровано з Vite
- ✅ **SCSS міксини** - Готові до використання WebP утиліти
- ✅ **JavaScript утиліти** - Виявлення браузера та оптимізація

## 📚 Документація

### Повна документація
- **[Керівництво використання](docs/USAGE_GUIDE.md)** - Повні інструкції використання
- **[Швидкий старт](docs/guides/QUICK_START.md)** - Швидкий старт
- **[Керівництво розробки](docs/guides/DEVELOPMENT.md)** - Робочий процес розробки
- **[Керівництво деплою](docs/guides/DEPLOYMENT.md)** - Інструкції деплою

### Керівництва з технологій
- **[Керівництво Vite](docs/technologies/VITE.md)** - Інструмент збірки Vite
- **[Керівництво SCSS](docs/technologies/SCSS.md)** - SCSS препроцесинг
- **[Керівництво JavaScript](docs/technologies/JAVASCRIPT.md)** - Сучасний JavaScript
- **[Керівництво Handlebars](docs/technologies/HANDLEBARS.md)** - Движок шаблонів

### Спеціалізовані керівництва
- **[Керівництво WebP](docs/WEBP_GUIDE.md)** - Оптимізація зображень
- **[Структура проекту](docs/PROJECT_STRUCTURE_CENTRAL.md)** - Детальна структура проекту
- **[Довідник команд](docs/COMMANDS.md)** - Всі доступні команди

## 📱 Адаптивний дизайн

Шаблон використовує мобільний підхід з користувацькими точками зупинки:

- **xs-phone**: 320px - Дуже малі телефони
- **phone**: 480px - Мобільні пристрої
- **tablet**: 768px - Планшети
- **tablet_x**: 860px - Великі планшети
- **desktop**: 1024px - Настільні комп'ютери
- **widescreen**: 1200px - Великі екрани

## 🛡️ SEO захист

Шаблон включає вбудований SEO захист:

- ✅ **robots.txt** - Блокує всіх пошукових роботів
- ✅ **Мета-теги** - Запобігає індексації та кешуванню
- ✅ **No-index директиви** - Для всіх основних пошукових систем

## 📄 Ліцензія

Цей проект ліцензовано під ліцензією MIT - дивіться файл [LICENSE](LICENSE) для деталей.

## 🤝 Внесок

Ми вітаємо внески! Будь ласка, дивіться наше [Керівництво з внеску](CONTRIBUTING.md) для деталей.

### Як внести внесок

1. **Форкніть репозиторій**
2. **Створіть гілку функції**
3. **Внесіть свої зміни**
4. **Запустіть тести та лінтинг**
5. **Надішліть pull request**

## 🆘 Підтримка

Якщо у вас виникли проблеми або потрібна допомога:

1. **Перевірте документацію**
2. **Пошукайте існуючі проблеми**
3. **Створіть нову проблему**

<div align="center">
  <p><strong>Зроблено з ❤️ командою Vite Landing Template</strong></p>
  
  [![GitHub stars](https://img.shields.io/github/stars/Boskolife/vite-landing-template?style=social)](https://github.com/Boskolife/vite-landing-template)
  [![GitHub forks](https://img.shields.io/github/forks/Boskolife/vite-landing-template?style=social)](https://github.com/Boskolife/vite-landing-template/fork)
  [![GitHub issues](https://img.shields.io/github/issues/Boskolife/vite-landing-template)](https://github.com/Boskolife/vite-landing-template/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/Boskolife/vite-landing-template)](https://github.com/Boskolife/vite-landing-template/pulls)
</div>
