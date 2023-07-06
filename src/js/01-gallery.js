import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const itemsEl = document.querySelector('.gallery');
itemsEl.style.listStyle = 'none';

const imagesEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          alt=${description}
        />
      </a>
    </li>`
  )
  .join('');

itemsEl.innerHTML = imagesEl;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
