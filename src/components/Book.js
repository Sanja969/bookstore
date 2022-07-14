import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, removeBook } = props;
  const { title, author } = book;
  return (
    <li className="list-unstyled border w-100 p-4 my-2 bg-white d-flex justify-content-between book">
      <div className="">
        <small className="text-secondary category">Category</small>
        <h4 className="mx-0 my-1 title">{title}</h4>
        <p className="author">{author}</p>
        <button type="button" className="actionBtn">
          Comments
        </button>
        <button type="button" className="actionBtn" onClick={() => { removeBook(book.id); }}>
          Remove
        </button>
        <button type="button" className="actionBtn">
          Edit
        </button>
      </div>
      <div className="d-flex align-items-center progress-box">
        <div className="progress me-2" />
        <div>
          <h3 className="">62%</h3>
          <p className="text-secondary h6">Completed</p>
        </div>
      </div>
      <div className="">
        <small className="text-secondary category">CURRENT CHAPTER</small>
        <p className="mx-0 my-1 h6 category">Chapter x</p>
        <button type="button" className="btn btn-primary mt-3 h6 blue-btn px-4">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
