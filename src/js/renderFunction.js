import { refs } from './refs';

export function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}

function createGalleryMarkup(imagesArr) {
  return imagesArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <a href='${largeImageURL}' class="gallery-link">
  <img src="${webformatURL}" alt="${tags}" width="320" height="200" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${downloads}
    </p>
  </div>
</div>`;
      }
    )
    .join('');
}
export function renderGalleryMarkup(imagesArr) {
  refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(imagesArr));
}
