// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.potterdb.com/v1',
  // Adicione headers ou outras configurações, se necessário
});

export const getBooks = () => api.get('/books');
export const getBookById = (id) => api.get(`/books/${id}`);
// Adicione funções para outros endpoints conforme necessário
