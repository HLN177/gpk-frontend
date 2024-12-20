import type { AxiosResponse } from 'axios';
import axios from 'axios';

const baseURL = import.meta.env.VITE_ENDPOINT;

const service = axios.create({
  baseURL
});

service.interceptors.request.use();

service.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  }
);

export default service;
