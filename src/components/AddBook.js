import React from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  let title = '';
  let author = '';

  const { addBook } = props;

  const addTitle = (e) => {
    title = e.target.value;
  };

  const addAuthor = (e) => {
    author = e.target.value;
  };
  const submitBook = () => {
    addBook(title, author);
  };
  return (
    <div className="w-100 border-top mt-4 pt-4">
      <h5 className="fw-bold text-secondary">ADD NEW BOOK</h5>
      <form className="d-flex justify-content-between">
        <input className="w-50" type="text" name="title" placeholder="Book title" onChange={addTitle} />
        <input className="" type="text" name="author" placeholder="Book author" onChange={addAuthor} />
        <button className="btn btn-primary blue-btn px-5" type="button" value="Add Book" onClick={submitBook}>Add Book</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
