import axios from 'axios';

axios.defaults.baseURL = 'https://back-raschitalochka.herokuapp.com/';
axios.defaults.withCredentials = true;
const PRIVAT_API = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const responseBody = (response) => response.data;

const requests = {
  get: (url, options = {}) => axios.get(url, options).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Auth = {
  signUp: (user) => requests.post('/auth/sign-up', user),
  signIn: (user) => requests.post('/auth/sign-in', user),
  signOut: () => requests.post('/auth/sign-out', {}),
};

const Categories = {
  getTransactionCategories: () => requests.get('/transaction-categories'),
};

const Transactions = {
  createTransaction: (trans) => requests.post('/transactions', trans),
  getTransaction: () => requests.get('/transactions'),
  getTransactionSummary: (year = '', month = '') => requests.get(`/transactions/summary?year=${year}&month=${month}`),
};

const Currency = {
  stats: () => requests.get(PRIVAT_API, { withCredentials: false }),
};

const User = {
  user: () => requests.get('/user'),
};

export default {
  Currency,
  Auth,
  Categories,
  Transactions,
  User,
};
