import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from 'books/books';
import categoriesReducer from 'categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
