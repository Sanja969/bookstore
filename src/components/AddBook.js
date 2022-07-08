import React from 'react';

const AddBook = () => (
  <div className="w-75">
    <h3 className="">Add new book</h3>
    <form className="d-flex justify-content-between">
      <input className="w-50" type="text" name="title" placeholder="Book title" />
      <input className="" type="text" name="author" placeholder="Book author" />
      <input className="btn btn-primary" type="submit" value="Add Book" />
    </form>
  </div>
);

export default AddBook;
