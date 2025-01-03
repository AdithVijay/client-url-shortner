import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://ramankutty.shop",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', 
  },
  withCredentials: true, 
});

export default axiosInstance;