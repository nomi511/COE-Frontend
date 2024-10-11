// src/axiosConfig.js
import axios from 'axios';

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://localhost:4000'; // Adjust this to your backend URL

export default axios;