import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book;
  return (
    <li className="list-unstyled border w-75 p-3 my-3">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="btn btn-primary">Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
