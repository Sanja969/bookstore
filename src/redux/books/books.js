const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const initialState = [
  {
    id: 23245,
    title: 'The Hunger Games',
    author: 'Suzzane Collins',
  },
  {
    id: 324254333,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3534545645,
    title: 'Capital in the 21st Century',
    author: 'Suzzane Collins',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});
