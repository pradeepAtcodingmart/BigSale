import axios from 'axios';
import { baseURL } from '../config';

const API = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    authorization: '',
  },
  timeout: 110 * 1000,
});

API.interceptors.response.use(
  function(response) {
    const { code, msg } = response.data;
    if (code === 200) {
      return response;
    } else if (code === 401) {
      // If access token expired will triger refreshToken
    } else if (code === 403) {
      throw Error(`${msg}`);
    } else {
      throw Error(`${msg}`);
    }
  },
  function(error) {
    throw Error(error);
  }
);

export default API;
