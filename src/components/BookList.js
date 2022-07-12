import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

const BookList = (props) => {
  const { removeBook, books } = props;
  return (
    books.map((book) => <Book key={book.id} book={book} removeBook={removeBook} />)
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
