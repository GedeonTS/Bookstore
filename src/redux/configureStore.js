import { combineReducers, createStore } from 'redux';
import categories from './categories/categories';
import booksReducer from './books/books';

const allReducers = combineReducers({
  categories,
  booksReducer,
});

const store = createStore(allReducers);

export default store;
