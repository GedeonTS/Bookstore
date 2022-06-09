import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

const init = [
  {
    book: 'ODESSEY',
    author: 'VIKTOR',
    id: { uuidv4 },
  },
  {
    book: 'REMEMBERANCE',
    author: 'VASILLY',
    id: { uuidv4 },
  },
  {
    book: 'GUILT',
    author: 'TOLSTOY',
    id: { uuidv4 },
  }];

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const obj = {
        id: { uuidv4 },
        author: action.newBook.author,
        book: action.newBook.book,

      };
      return [...state, obj];
    }
    case REMOVE_BOOK: {
      const newState = state.filter((book) => book.id !== action.id);
      return newState;
    }

    default:
      return state;
  }
}

export const addBook = (newBook) => ({ type: ADD_BOOK, newBook });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
