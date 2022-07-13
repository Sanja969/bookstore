const REMOVE = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const SAVE_BOOK = 'bookStore/books/SAVE_BOOK';
const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rSWOuh8Pfu8EVUz1p7ix/books';

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BOOK:
      return [...state, action.book];
    case GET_BOOKS:
      return action.books;
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;

export const removeBook = (id) => async (dispatch) => {
  const bookDelete = await fetch(`${url}/${id}`, { method: 'DELETE' });
  const response = await bookDelete.text();
  if (response) {
    dispatch({
      type: REMOVE,
      id,
    });
  }
};

export const saveBook = (book) => async (dispatch) => {
  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: 'underfined',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  dispatch({
    type: SAVE_BOOK,
    book,
  });
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  const entries = Object.entries(json);
  const books = entries.map((element) => ({
    id: element[0],
    title: Object.assign(...element[1]).title,
    author: Object.assign(...element[1]).author,
  }));

  dispatch({
    type: GET_BOOKS,
    books,
  });
};
