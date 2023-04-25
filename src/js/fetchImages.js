import axios from 'axios';
import { per_page } from '../index';
// import { totalPage } from '../index';

// ключ
const KEY_API = '35565771-1a74a3642b20749665058107e';

const BASE_URL = 'https://pixabay.com/api/';

let totalPage = 0;

async function fetchImages(query, numberOfPage) {
  const params = new URLSearchParams({
    key: KEY_API,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: numberOfPage,
    per_page: per_page,
  });

  const response = await axios.get(BASE_URL, { params });
  totalPage = response.data.totalHits / per_page;
  return response;
}

export { fetchImages, totalPage };
