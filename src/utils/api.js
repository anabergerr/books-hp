// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.potterdb.com/v1',
});

export const getBooks = () => api.get('/books');
export const getBookById = (id) => api.get(`/books/${id}`);
export const getMovies = () => api.get('/movies')
export const getMovieById = (id) => api.get(`/movies/${id}`);


