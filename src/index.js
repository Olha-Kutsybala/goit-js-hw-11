import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/fetchImages';
import { refs } from './js/refs';
import { renderGallery } from './js/renderGallery';
import { scrolling } from './js/scroll';

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);

let query = '';
let numberOfPage = 1;
export let totalPage = 0;
export const per_page = 40;

const lightbox = new SimpleLightbox('.gallery a');

refs.btnLoadMore.hidden = true;

function onFormSubmit(evt) {
  evt.preventDefault();
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
      Notify.success(`Hooray! We found ${result.length} images.`);
      refs.btnLoadMore.hidden = false;
      if (result.length < per_page) {
        refs.btnLoadMore.hidden = true;
      }
    }
    lightbox.refresh();
  } catch (error) {
    console.error(error);
  }
}

function onLoadMoreBtnClick(evt) {
  numberOfPage += 1;
  if (numberOfPage === totalPage) {
    refs.btnLoadMore.hidden = true;
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    refs.btnLoadMore.hidden = true;
  }
  scrolling();
  addGallery();
}
