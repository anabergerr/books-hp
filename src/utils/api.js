import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.potterdb.com/v1',
});

export const getBooks = () => api.get('/books');
export const getBookById = (id) => api.get(`/books/${id}`);
export const getMovies = () => api.get('/movies')
export const getMovieById = (id) => api.get(`/movies/${id}`);
export const getCharacters = (searchTerm, currentPage, pageSize) => api.get(`characters?filter[name_cont]=${searchTerm}&page[number]=${currentPage}&page[size]=${pageSize}`)
export const getCharactersDetails = (slug) => api.get(`characters?filter[slug_eq]=${slug}`)


