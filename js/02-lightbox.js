import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryRef.addEventListener('click', onZoomImage);

function onZoomImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) return;
  //   console.log(evt.target.alt);
  const lightboxInstance = new SimpleLightbox('.gallery a');
  lightboxInstance.on('show.simplelightbox', function () {
    // do something…
  });

  // Options
  //     {
  //     captions: true,
  //     captionSelector: () => evt.target.alt,
  //     captionType: 'text',
  //     captionsData: 'atl',
  //     captionPosition: 'bottom',
  //     captionDelay: 5,
  //   }
}

function createGalleryItemsMarkup(galleryArr = []) {
  return galleryArr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}
