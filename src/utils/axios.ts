import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);

export default axiosInstance;

export const api = axios.create({
  baseURL: `https://thedreamteamelearningapi20200520103954.azurewebsites.net/api/`,
});

export enum EndPoints {
  antiHeroes = 'anti-heroes',
  heroes = 'heroes',
  villains = 'villains',
}
