import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, sortBooks } from '../actions/bookActions';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split('-');
    dispatch(sortBooks(sortBy, order));
  };

  return (
    <div>
      <h1>Books List</h1>
      <div>
        <label>Sort by: </label>
        <select onChange={handleSortChange}>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
          <option value="author-asc">Author Ascending</option>
          <option value="author-desc">Author Descending</option>
          <option value="publisher-asc">Publisher Ascending</option>
          <option value="publisher-desc">Publisher Descending</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.primary_isbn10}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
