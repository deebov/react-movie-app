import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/api';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

export default instance;
