import axios from 'axios';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/src/redux/books/FETCH_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8TVVPPLWS79K4DeolqFW/books';

const init = [];

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newData = {
        item_id: `book${Date.now()}`,
        author: action.newBook.author,
        title: action.newBook.book,
        category: 'fiction',

      };

      const newStateData = [`book${Date.now()}`, [{
        author: action.newBook.author,
        title: action.newBook.book,
        category: 'fiction',
      }]];

      axios.post(URL, newData);
      return [...state, newStateData];
    }
    case REMOVE_BOOK: {
      axios.delete(`${URL}/${action.itemId}`);
      const newState = state.filter((book) => book[0] !== action.itemId);
      return newState;
    }

    case FETCH_BOOK:
      return action.newBook;

    default:
      return state;
  }
}

export const addBook = (newBook) => ({ type: ADD_BOOK, newBook });

export const removeBook = (itemId) => ({ type: REMOVE_BOOK, itemId });

export const getBooks = () => (dispatch) => {
  axios.get(URL).then(
    (response) => {
      const data = Object.entries(response.data);
      dispatch({ type: FETCH_BOOK, newBook: data });
    },
  );
};
