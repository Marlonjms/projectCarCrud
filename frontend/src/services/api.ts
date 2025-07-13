import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Já com /api no final
});

export default api;
