import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '38627357-1628736c94afded4ff66c6ede',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function getImages(q, page = 1) {
  const response = await axios.get('', {
    params: { q: q, page: page },
  });
  return response.data;
}
