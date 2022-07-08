import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    const { books } = this.props;
    return (
      books.map((book) => <Book key={book.id} book={book} />)
    );
  }
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
