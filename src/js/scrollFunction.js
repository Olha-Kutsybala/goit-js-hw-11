import { loadMoreBtn } from './loadMoreBtn';
import { refs } from './refs';
import { imageApiService } from './imageService';
import { lightbox } from './simplelightbox';
import { checkTotalRenderImage } from './checkTotalRenderImage';
import { renderGalleryMarkup } from './renderFunction';

const options = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

const callback = function (entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      try {
        const { hits, totalHits } = await imageApiService.fetchImages();
        renderGalleryMarkup(hits);
        lightbox.refresh();
        checkTotalRenderImage(totalHits);
        if (!refs.checkbox.checked) {
          observer.unobserve(refs.observerTarget);
          loadMoreBtn.show();
        }
      } catch (error) {
        console.log(error);
      }
    }
    // entry.time; // a DOMHightResTimeStamp indicating when the intersection occurred.
    // entry.rootBounds; // a DOMRectReadOnly for the intersection observer's root.
    // entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
    // entry.intersectionRect; // a DOMRectReadOnly for the visible portion of the intersection observer's target.
    // entry.intersectionRatio; // the number for the ratio of the intersectionRect to the boundingClientRect.
    // entry.target; // the Element whose intersection with the intersection root changed.
    // entry.isIntersecting; // intersecting: true or false
  });
};

export const observer = new IntersectionObserver(callback, options);

export function scrolling() {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
