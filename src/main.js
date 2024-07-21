import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('search-form');
const loadingIndicator = document.querySelector('.loading-indicator');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.query.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty',
    });
    return;
  }

  clearGallery();
  showLoadingIndicator();

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    })
    .finally(() => {
      hideLoadingIndicator();
    });
});

function showLoadingIndicator() {
  loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = 'none';
}