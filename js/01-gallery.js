import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createGalleryItemsMarkup(galleryItems);
galleryRef.addEventListener('click', onZoomImage);

function onZoomImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) return;

  runLightbox(evt);
}

function runLightbox(evt) {
  const lightboxInstance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener('keydown', onEscPress),
      onClose: () => document.removeEventListener('keydown', onEscPress),
    }
  );

  lightboxInstance.show();

  function onEscPress(evt) {
    if (evt.code === 'Escape') lightboxInstance.close();
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
