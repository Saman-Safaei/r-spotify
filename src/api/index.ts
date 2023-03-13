import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: baseUrl,
});

export function auth({ ...config }: AxiosRequestConfig): AxiosRequestConfig {
  return {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    ...config,
  };
}
