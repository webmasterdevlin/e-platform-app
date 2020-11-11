import axios from 'axios';

const axiosInstance2 = axios.create({
  baseURL: `https://thedreamteamelearningapi20200520103954.azurewebsites.net/api/`,
});

axiosInstance2.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);

export default axiosInstance2;
