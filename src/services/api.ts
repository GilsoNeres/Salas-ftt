// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Ajuste conforme a URL do seu backend
  timeout: 5000,
});

export default api;
