import { onLoadMoreBtnClick } from './handler';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

Loading.init({
  className: 'load-more',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  customSvgCode: null,
  svgSize: '80px',
  svgColor: '#32c682',
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '15px',
  messageMaxLength: 34,
  messageColor: '#dcdcdc',
});

class LoadMoreBtn {
  constructor(className, onClick) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<button type="button" class="${className}">Load more</button>`
    );

    this.loadMoreBtnRef = document.querySelector(`.${className}`);
    this.loadMoreBtnRef.addEventListener('click', onClick);
    this.hide();
  }

  hide() {
    this.loadMoreBtnRef.classList.add('hidden');
  }

  show() {
    this.loadMoreBtnRef.classList.remove('hidden');
  }

  loading() {
    Loading.arrows();
    // this.loadMoreBtnRef.textContent = 'Loading...';
    // Loading.standard();
    // Loading.custom({
    //   customSvgCode:
    //     '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
    // });
  }

  endloading() {
    // this.loadMoreBtnRef.textContent = 'Load more';
    Loading.remove();
  }
}

export const loadMoreBtn = new LoadMoreBtn('load-more', onLoadMoreBtnClick);
