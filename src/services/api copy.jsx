// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this according to your backend server
  withCredentials: true // Include cookies if needed for authentication
});

// Auth APIs
export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);

// Book APIs
export const getBooks = () => API.get('/books');
export const addBook = (data) => API.post('/books', data);
export const deleteBook = (id) => API.delete(`/books/${id}`);

export default API;


// Integration Example (Dashboard.jsx)
// Replace dummy state logic with real API calls:
/*
useEffect(() => {
  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };
  fetchBooks();
}, []);

const addBook = async (book) => {
  const res = await addBook(book);
  setBooks([res.data, ...books]);
};

const deleteBook = async (id) => {
  await deleteBook(id);
  setBooks(books.filter(book => book.id !== id));
};
*/
