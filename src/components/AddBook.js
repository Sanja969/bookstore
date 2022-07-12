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
    <div className="w-75">
      <h3 className="">Add new book</h3>
      <form className="d-flex justify-content-between">
        <input className="w-50" type="text" name="title" placeholder="Book title" onChange={addTitle} />
        <input className="" type="text" name="author" placeholder="Book author" onChange={addAuthor} />
        <button className="btn btn-primary" type="button" value="Add Book" onClick={submitBook}>Add Book</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
