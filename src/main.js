const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modalBackdrop = document.querySelector('.mobile-menu-backdrop'); // Правильна змінна для фону
const modal = document.querySelector('.js-modal'); // Ось тут ми додали визначення самого модального вікна

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');  // Додаємо/видаляємо клас на модальне вікно
  modalBackdrop.classList.toggle('is-open'); // Також додаємо/видаляємо клас на фон
};

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
