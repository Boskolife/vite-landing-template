/**
 * WebP Support Utilities / Утиліти підтримки WebP
 * Simplified version - only essential functions
 */

/**
 * Check WebP support in browser / Перевірка підтримки WebP в браузері
 * @returns {Promise<boolean>} Whether browser supports WebP
 */
export const isWebPSupported = () => {
  return new Promise(resolve => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Add WebP support class to body / Додавання класу підтримки WebP до body
 * @param {string} className - Class name to add / Назва класу для додавання
 */
export const addWebPClass = (className = 'webp') => {
  isWebPSupported().then(supported => {
    if (supported) {
      document.body.classList.add(className);
      document.documentElement.classList.add(className);
    } else {
      document.body.classList.add('no-webp');
      document.documentElement.classList.add('no-webp');
    }
  });
};

/**
 * Initialize WebP support / Ініціалізація підтримки WebP
 * Called on page load / Викликається при завантаженні сторінки
 */
export const initWebPSupport = () => {
  // Add support class / Додаємо клас підтримки
  addWebPClass();
};

// Auto-initialize on DOM load / Автоматична ініціалізація при завантаженні DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWebPSupport);
} else {
  initWebPSupport();
}
