const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return action.data;
    case REMOVE:
      return state.filter((book) => book.id !== action.data.id);
    default: return state;
  }
}

export function addBook(book) {
  return {
    type: ADD,
    data: book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE,
    data: book,
  };
}
