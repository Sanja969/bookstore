import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

class Bookstore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'The Hunger Games',
          author: 'Suzzane Collins',
        },
        {
          id: 2,
          title: 'Dune',
          author: 'Frank Herbert',
        },
        {
          id: 3,
          title: 'Capital in the 21st Century',
          author: 'Suzzane Collins',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div className="d-flex flex-column align-items-center mt-5 pt-5">
        <BookList books={books} />
        <AddBook />
      </div>
    );
  }
}

export default Bookstore;
