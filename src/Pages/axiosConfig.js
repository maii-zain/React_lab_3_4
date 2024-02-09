
import axios from 'axios';

const apiKey = '793f529e214f3b041b733709431628c4';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default instance;
