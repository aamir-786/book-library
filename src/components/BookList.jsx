const BookList = ({ books = [], onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book, index) => (
        <div key={index} className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Status: {book.status}</p>
          <p className="text-yellow-500">Rating: {'★'.repeat(book.rating)}</p>
          <button onClick={() => onDelete(book.id)} className="mt-2 text-sm text-red-500 hover:underline">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;

