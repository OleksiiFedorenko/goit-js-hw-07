import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryRef.addEventListener('click', onZoomImage);

function onZoomImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) return;

  runLightbox(evt);
}

function runLightbox(evt) {
  const lightboxInstance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  lightboxInstance.show();

  window.addEventListener('keydown', onEscPress);

  function onEscPress(evt) {
    if (evt.code === 'Escape') {
      lightboxInstance.close();
      window.removeEventListener('keydown', onEscPress);
    }

    if (!lightboxInstance.visible()) window.removeEventListener('keydown', onEscPress);
  }
}

function createGalleryItemsMarkup(galleryArr = []) {
  return galleryArr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
