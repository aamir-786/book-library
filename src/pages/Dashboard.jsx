import { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([newBook, ...books]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Book Library</h1>
      <BookForm onSubmit={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default Dashboard;