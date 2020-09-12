import axios from 'axios';

axios.defaults.baseURL = '';
const PRIVAT_API = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const responseBody = (response) => response;
const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Currency = {
  stats: () => requests.get(PRIVAT_API),
};

export default {
  Currency,
};
