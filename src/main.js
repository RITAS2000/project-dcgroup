// Отримуємо елементи
const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modalBackdrop = document.querySelector('.mobile-menu-backdrop');
const modal = document.querySelector('.mobile-menu');

// Додаємо слухачі подій для кнопок
modalBtnOpen.addEventListener('click', () => {
  modalBackdrop.classList.add('is-open');  // Відкриваємо фон
  modal.classList.add('is-open');          // Відкриваємо меню
});

modalBtnClose.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-open'); // Закриваємо фон
  modal.classList.remove('is-open');         // Закриваємо меню
});

// Закриття модалки, якщо натискати на фон
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.classList.remove('is-open'); // Закриваємо фон
    modal.classList.remove('is-open');         // Закриваємо меню
  }
});


const images = document.querySelectorAll('.clickable-image');

// Отримуємо textarea
const textarea = document.getElementById('text-area');

// Додаємо обробник подій для кожного зображення
images.forEach(image => {
    image.addEventListener('click', () => {
        // Додаємо alt текст до textarea з нового рядка
        textarea.value += (textarea.value ? '\n' : '') + image.alt;
    });
})
