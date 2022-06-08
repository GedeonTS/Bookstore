const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

const init = [];

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const obj = {
        id: state.length + 1,
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
