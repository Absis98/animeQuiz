import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5043', // Your API base URL
  timeout: 5000, // Request timeout
});

export default instance;