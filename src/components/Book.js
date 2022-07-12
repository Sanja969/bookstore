import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, removeBook } = props;
  const { title, author } = book;
  return (
    <li className="list-unstyled border w-75 p-3 my-3">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="btn btn-primary" onClick={() => { removeBook(book.id); }}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
