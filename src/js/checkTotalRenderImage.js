import { Notify } from 'notiflix';
import { refs } from './refs';
import { loadMoreBtn } from './loadMoreBtn';

export function checkTotalRenderImage(totalHits) {
  if (refs.gallery.children.length >= totalHits) {
    if (refs.gallery.children.length > 40) {
      Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    }
    loadMoreBtn.hide();
  }
}
