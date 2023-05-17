import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { ACCESS_TOKEN } from '../constants/constants';
import getEnv from '../constants/environtment';

const BASE_API_URL = getEnv().BASE_API_URL || 'http://localhost:3001';

const getHeaders = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  return headers;
};

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  (config) => {
  if (config.headers) {
    config.headers = getHeaders() as AxiosRequestHeaders;
  }
  return config;
},
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject('The request was made but no response was received');
    } else {
      return Promise.reject(error.message);
    }
  },
);

const baseService = {
  get: async (endpoint: string): Promise<AxiosResponse> => {
    return axiosInstance.get(endpoint);
  },
  getWithFullUrl: async (url: string): Promise<AxiosResponse> => {
    return axiosInstance.get(url);
  },
  post: async (endpoint: string, data: any): Promise<AxiosResponse> => {
    return axiosInstance.post(endpoint, data);
  },
  patch: async (endpoint: string, data: any): Promise<AxiosResponse> => {
    return axiosInstance.patch(endpoint, data);
  },
  put: async (endpoint: string, data: any): Promise<AxiosResponse> => {
    return axiosInstance.put(endpoint, data);
  },
  delete: async (endpoint: string): Promise<AxiosResponse> => {
    return axiosInstance.delete(endpoint);
  },
  fileUpload: async (endpoint: string, data: any): Promise<AxiosResponse> => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const formData = new FormData();
    formData.append('file', data);
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${token}`,
    };
    const config = { headers };
    return axiosInstance.patch(endpoint, formData, config);
  },
};

export default baseService;