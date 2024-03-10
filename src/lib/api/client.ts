import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  maxRedirects: 5,
  timeout: 5000,
})

export default apiClient;