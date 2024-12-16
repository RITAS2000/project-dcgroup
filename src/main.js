const modalBtnOpen = document.querySelector('.js-open-modal'); // Кнопка відкриття
const modalBtnClose = document.querySelector('.js-close-modal'); // Кнопка закриття
const modalBackdrop = document.querySelector('.mobile-menu-backdrop'); // Модальне вікно


// Додаємо обробники подій
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modalBackdrop.classList.toggle('is-open');
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
