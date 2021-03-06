import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import BookList from './BookList';
import { saveBook, getBooks, removeBook } from '../redux/books/books';

const Bookstore = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const submitBook = (title, author) => dispatch(saveBook({
    id: uuidv4(),
    title,
    author,
  }));

  const remove = (id) => dispatch(removeBook(id));

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center bg-light bookstore">
      <BookList books={books} removeBook={remove} />
      <AddBook addBook={submitBook} />
    </div>
  );
};

export default Bookstore;
