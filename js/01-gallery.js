import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');
const galerryMarkup = createGalerryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalerryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </li>
        `;
    })
    .join('');
}

function onGalleryContainerClick(e) {
  if (!e.target.closest('.gallery__link')) {
    return;
  }

  e.preventDefault();

  const largeImageUrl = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImageUrl}">`);

  instance.show();
  window.addEventListener('keydown', onEscapeBtnPressed);

  function onEscapeBtnPressed(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapeBtnPressed);
    }
  }
}
