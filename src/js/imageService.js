import axios from 'axios';
const KEY_API = '35565771-1a74a3642b20749665058107e';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class ImageApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchImages() {
    const options = new URLSearchParams({
      key: KEY_API,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 40,
    });
    const { data } = await axios(`?${options}`);
    this.incrementPage();
    return data;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export const imageApiService = new ImageApiService();
