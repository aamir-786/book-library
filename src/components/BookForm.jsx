import { useState } from 'react';

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [book, setBook] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    status: initialData.status || 'to-read',
    rating: initialData.rating || 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ title: '', author: '', status: 'to-read', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input name="title" value={book.title} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Author</label>
        <input name="author" value={book.author} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <select name="status" value={book.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="read">Read</option>
          <option value="to-read">To Read</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input type="number" name="rating" min="0" max="5" value={book.rating} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Book</button>
    </form>
  );
};

export default BookForm;

