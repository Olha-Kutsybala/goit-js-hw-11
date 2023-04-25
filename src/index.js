import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/fetchImages';
import { refs } from './js/refs';
import { renderGallery } from './js/renderGallery';
import { scrolling } from './js/scroll';
import { totalPage } from './js/fetchImages';

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);

let query = '';
let numberOfPage = 1;
export const per_page = 40;

const lightbox = new SimpleLightbox('.gallery a');

refs.btnLoadMore.hidden = true;

function onFormSubmit(evt) {
  evt.preventDefault();
  numberOfPage = 1;
  refs.gallery.innerHTML = '';
  const { searchQuery } = evt.target.elements;

  if (!searchQuery.value.trim()) {
    Notify.failure('Enter the query in the search!');
    refs.btnLoadMore.hidden = true;
    return;
  }

  query = searchQuery.value;
  addGallery();
  evt.currentTarget.reset();
}

async function addGallery() {
  try {
    const response = await fetchImages(query, numberOfPage);
    const result = response.data.hits;

    if (!result.length) {
      refs.gallery.innerHTML = '';
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      refs.btnLoadMore.hidden = true;
    } else {
      renderGallery(result);
      Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
      refs.btnLoadMore.hidden = false;
      if (t < 1) {
        refs.btnLoadMore.hidden = true;
      }
    }
    lightbox.refresh();
  } catch (error) {
    console.error(error);
  }
}

async function addMoreImages() {
  try {
    const response = await fetchImages(query, numberOfPage);
    const result = response.data.hits;
    renderGallery(result);
  } catch (error) {
    console.error(error);
  }
}

function onLoadMoreBtnClick(evt) {
  numberOfPage += 1;

  if (numberOfPage > totalPage) {
    refs.btnLoadMore.hidden = true;
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }

  scrolling();
  addMoreImages();
}
