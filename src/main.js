const modalBtnOpen = document.querySelector('.js-open-modal'); // Кнопка для відкриття модалки
const modalBtnClose = document.querySelector('.js-close-modal'); // Кнопка для закриття модалки
const modalBackdrop = document.querySelector('.mobile-menu-backdrop'); // Фон модалки
const modalMenu = document.querySelector('.mobile-menu'); // Саме меню

// Додаємо обробник подій для кнопки відкриття
modalBtnOpen.addEventListener('click', openModal);

// Додаємо обробник подій для кнопки закриття
modalBtnClose.addEventListener('click', closeModal);

// Функція для відкриття модалки
function openModal() {
  modalBackdrop.classList.add('is-open'); // Додаємо клас 'is-open' для фону
  modalMenu.classList.add('is-open'); // Додаємо клас 'is-open' для меню
}

// Функція для закриття модалки
function closeModal() {
  modalBackdrop.classList.remove('is-open'); // Видаляємо клас 'is-open' для фону
  modalMenu.classList.remove('is-open'); // Видаляємо клас 'is-open' для меню
}


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
