import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryLightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => {
    return `
    <li class="item">
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class ="text"><b>Likes</b> ${image.likes}</p>
          <p class ="text"><b>Views</b> ${image.views}</p>
          <p class ="text"><b>Comments</b> ${image.comments}</p>
          <p class ="text"><b>Downloads</b> ${image.downloads}</p>
        </div>
      
      </li>
    `;
  }).join('');

  gallery.innerHTML = markup;

  if (!galleryLightbox) {
    galleryLightbox = new SimpleLightbox('.gallery a');
  } else {
    galleryLightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}