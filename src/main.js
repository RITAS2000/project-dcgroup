const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modal = document.querySelector('.js-modal');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

const images = document.querySelectorAll('.clickable-image');

const textarea = document.getElementById('text-area');

images.forEach(image => {
  image.addEventListener('click', () => {
    textarea.value += (textarea.value ? '\n' : '') + image.alt;
  });
});

const menuLinks = document.querySelectorAll('.mobile-menu-link');
const shop = document.querySelector('.shop-button');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.mobile-menu-backdrop').classList.remove('is-open');
    document.querySelector('.mobile-menu').classList.remove('is-open');
  });
});

shop.addEventListener('click', function () {
  document.querySelector('.mobile-menu-backdrop').classList.remove('is-open');
  document.querySelector('.mobile-menu').classList.remove('is-open');
});
