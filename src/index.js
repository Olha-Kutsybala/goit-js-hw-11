// import { Notify } from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { fetchImages } from './js/fetchImages';
// import { refs } from './js/refs';
// import { renderGallery } from './js/renderGallery';
// import { scrolling } from './js/scroll';
// import { totalPage } from './js/fetchImages';

import { onFormSubmit } from './js/handler';
import { refs } from './js/refs';

refs.form.addEventListener('submit', onFormSubmit);

// refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);

// let query = '';
// let numberOfPage = 1;
// export const per_page = 40;

// const lightbox = new SimpleLightbox('.gallery a');

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   numberOfPage = 1;
//   refs.gallery.innerHTML = '';
//   refs.btnLoadMore.classList.add('hidden');
//   const { searchQuery } = evt.target.elements;

//   if (!searchQuery.value.trim()) {
//     Notify.failure('Enter the query in the search!');
//     return;
//   }

//   query = searchQuery.value;
//   addGallery();
//   evt.currentTarget.reset();
// }

// async function addGallery() {
//   try {
//     const { hits, totalHits } = await fetchImages(query, numberOfPage);

//     if (!hits.length) {
//       refs.gallery.innerHTML = '';
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       renderGallery(hits);
//       Notify.success(`Hooray! We found ${totalHits} images.`);
//       lightbox.refresh();
//       if (totalPage > 1) {
//         refs.btnLoadMore.classList.remove('hidden');
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function addMoreImages() {
//   try {
//     const { hits } = await fetchImages(query, numberOfPage);
//     renderGallery(hits);
//     lightbox.refresh();
//     scrolling();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function onLoadMoreBtnClick(evt) {
//   numberOfPage += 1;
//   if (numberOfPage > totalPage) {
//     evt.target.classList.add('hidden');
//     Notify.failure(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
//   addMoreImages();
// }

// const lightbox = new SimpleLightbox('.gallery a');

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   numberOfPage = 1;
//   refs.gallery.innerHTML = '';
//   refs.btnLoadMore.classList.add('hidden');
//   const { searchQuery } = evt.target.elements;

//   if (!searchQuery.value.trim()) {
//     Notify.failure('Enter the query in the search!');
//     return;
//   }

//   query = searchQuery.value;
//   addGallery();
//   evt.currentTarget.reset();
// }

// async function addGallery() {
//   try {
//     const { hits, totalHits } = await fetchImages(query, numberOfPage);

//     if (!hits.length) {
//       refs.gallery.innerHTML = '';
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       renderGallery(hits);
//       Notify.success(`Hooray! We found ${totalHits} images.`);
//       lightbox.refresh();
//       if (totalPage > 1) {
//         refs.btnLoadMore.classList.remove('hidden');
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function addMoreImages() {
//   try {
//     const { hits } = await fetchImages(query, numberOfPage);
//     renderGallery(hits);
//     lightbox.refresh();
//     scrolling();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function onLoadMoreBtnClick(evt) {
//   numberOfPage += 1;
//   if (numberOfPage > totalPage) {
//     evt.target.classList.add('hidden');
//     Notify.failure(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
//   addMoreImages();
// }
