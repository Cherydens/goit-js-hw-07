import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');
const galerryMarkup = createGalerryMarkup(galleryItems);

let largeImageUrl;

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
  e.preventDefault();

  const isGalerryLink = e.target.closest('.gallery__link');

  if (!isGalerryLink) {
    return;
  }
  largeImageUrl = e.target.dataset.source;
  console.log(e.target.dataset.source);
  return largeImageUrl;
}
