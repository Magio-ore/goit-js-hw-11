import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const searchInput = document.querySelector('input[name="search-text"]');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query to find images.',
        position: 'topRight',
      });
      return;
    }

    clearGallery();

    showLoader();

    // Виконання HTTP-запиту з використанням then() та catch()
    getImagesByQuery(query)
      .then(images => {
        hideLoader();

        if (!images || images.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }

        createGallery(images);
      })
      .catch(error => {
        hideLoader();

        iziToast.error({
          title: 'Error',
          message: 'Failed to fetch images. Please try again later.',
          position: 'topRight',
        });
        console.error('Error fetching images:', error);
      });
  });
});