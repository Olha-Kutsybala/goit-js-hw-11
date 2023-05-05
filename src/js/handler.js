import { Notify } from 'notiflix';
import { imageApiService } from './imageService';
import { loadMoreBtn } from './loadMoreBtn';
import { clearGalleryMarkup, renderGalleryMarkup } from './renderFunction';
import { lightbox } from './simplelightbox';
import { checkTotalRenderImage } from './checkTotalRenderImage';
import { refs } from './refs';
import { observer, scrolling } from './scrollFunction';

// export async function onLoadMoreBtnClick(evt) {
//   try {
//     if (refs.checkbox.checked) {
//       observer.observe(refs.observerTarget);
//       loadMoreBtn.hide();
//     } else {
//       loadMoreBtn.loading();
//     }

//     setTimeout(async () => {
//       const { hits, totalHits } = await imageApiService.fetchImages();
//       renderGalleryMarkup(hits);
//       if (!refs.checkbox.checked) {
//         loadMoreBtn.endloading();
//       }
//       checkTotalRenderImage(totalHits);
//     }, 1000);
//     lightbox.refresh();
//   } catch (error) {
//     console.log(error);
//   }
//   scrolling();
// }

export async function onFormSubmit(evt) {
  evt.preventDefault();
  clearGalleryMarkup();
  // loadMoreBtn.hide();
  imageApiService.resetPage();

  const searchQuery = evt.target.searchQuery.value.trim();

  if (!searchQuery) {
    Notify.failure('Enter the query in the search!');
    clearGalleryMarkup();
    // loadMoreBtn.hide();
    observer.unobserve(refs.observerTarget);
    return;
  }

  imageApiService.query = searchQuery; //seter
  try {
    const { hits, totalHits } = await imageApiService.fetchImages();

    if (hits.length === 0) {
      clearGalleryMarkup();
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      // loadMoreBtn.hide();
      return;
    }
    if (hits.length > 0) {
      Notify.success(`Hooray! We found ${totalHits} images.`);
    }
    renderGalleryMarkup(hits);
    lightbox.refresh();
    if (refs.checkbox.checked) {
      observer.observe(refs.observerTarget);
    } else {
      // loadMoreBtn.show();
    }

    checkTotalRenderImage(totalHits);
  } catch (error) {
    console.log(error);
  }
}
