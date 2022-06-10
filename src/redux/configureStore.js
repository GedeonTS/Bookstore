import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories/categories';
import booksReducer from './books/books';
import logger from './logger';

const allReducers = combineReducers({
  categories,
  booksReducer,
});

const store = createStore(allReducers, applyMiddleware(logger, thunk));

export default store;
