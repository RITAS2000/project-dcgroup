const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modal = document.querySelector('.js-modal');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

// Отримуємо зображення з класом "clickable-image"
const images = document.querySelectorAll('.clickable-image');

// Отримуємо textarea
const textarea = document.getElementById('text-area');

// Додаємо обробник подій для кожного зображення
images.forEach(image => {
    image.addEventListener('click', () => {
        // Вставляємо alt текст у textarea
        textarea.value = image.alt;
    });
});
document.addEventListener("DOMContentLoaded", function() {
  // Мобільна версія
  const mobileImage = document.getElementById("mobile-image");
  const mobileImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let mobileIndex = 0;

  mobileImage.addEventListener("click", () => {
    mobileIndex = (mobileIndex + 1) % mobileImages.length;
    mobileImage.src = mobileImages[mobileIndex];
  });

  // Таблет версія
  const tabletImage1 = document.getElementById("tablet-image-1");
  const tabletImage2 = document.getElementById("tablet-image-2");

  tabletImage1.addEventListener("click", () => {
    tabletImage1.classList.toggle("hidden");
    tabletImage2.classList.toggle("hidden");
  });

  tabletImage2.addEventListener("click", () => {
    tabletImage1.classList.toggle("hidden");
    tabletImage2.classList.toggle("hidden");
  });
});