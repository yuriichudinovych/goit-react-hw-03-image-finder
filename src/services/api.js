import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '29162524-01f0dd46893302e996c3171e6';

const instance = axios.create({
  baseURL: URL,

  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

// const delay = () => {
//   return new Promise(resolve => setTimeout(resolve, 500));
// };

export const searchItems = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
      q,
    },
  });

  // await delay();
  return data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
