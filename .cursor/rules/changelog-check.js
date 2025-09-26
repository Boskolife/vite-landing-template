#!/usr/bin/env node

/**
 * Скрипт для проверки CHANGELOG.md
 * Проверяет, что все изменения задокументированы
 */

/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHANGELOG_PATH = path.join(__dirname, '../../CHANGELOG.md');

function checkChangelog() {
  console.log('🔍 Проверка CHANGELOG.md...\n');

  if (!fs.existsSync(CHANGELOG_PATH)) {
    console.error('❌ Файл CHANGELOG.md не найден!');
    process.exit(1);
  }

  const changelogContent = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  
  // Проверяем наличие последней версии
  const versionRegex = /## \[(\d+\.\d+\.\d+)\]/;
  const versions = changelogContent.match(new RegExp(versionRegex, 'g'));
  
  if (!versions || versions.length === 0) {
    console.error('❌ Не найдено ни одной версии в CHANGELOG.md!');
    process.exit(1);
  }

  const latestVersion = versions[0];
  console.log(`✅ Найдена последняя версия: ${latestVersion}`);

  // Проверяем наличие обязательных секций
  const requiredSections = [
    '### Добавлено',
    '### Изменено', 
    '### Исправлено',
    '### Техническая часть'
  ];

  const missingSections = requiredSections.filter(section => 
    !changelogContent.includes(section)
  );

  if (missingSections.length > 0) {
    console.warn(`⚠️  Отсутствуют секции: ${missingSections.join(', ')}`);
  } else {
    console.log('✅ Все обязательные секции присутствуют');
  }

  // Проверяем наличие таблицы пакетов
  if (changelogContent.includes('### Обновленные пакеты')) {
    console.log('✅ Секция обновленных пакетов найдена');
  } else {
    console.warn('⚠️  Секция "Обновленные пакеты" отсутствует');
  }

  // Проверяем наличие команд
  if (changelogContent.includes('### Команды для')) {
    console.log('✅ Команды для применения изменений найдены');
  } else {
    console.warn('⚠️  Команды для применения изменений отсутствуют');
  }

  // Проверяем наличие результатов
  if (changelogContent.includes('### Результат')) {
    console.log('✅ Секция результатов найдена');
  } else {
    console.warn('⚠️  Секция результатов отсутствует');
  }

  console.log('\n✅ Проверка CHANGELOG.md завершена!');
}

// Запускаем проверку
checkChangelog();
