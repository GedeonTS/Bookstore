import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

const Books = ({ getUsers }) => {
  const data = useSelector((state) => state.booksReducer);
  const bookArray = data;

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section>
      this will display a list of books!
      {
        bookArray.map((BookItem) => (
          <div>
            <Book key={BookItem.item_id} book={BookItem} />
          </div>
        ))
      }
      <button type="button">Delete all</button>
      here is the form generating the books!
      <Form />
    </section>
  );
};

const dispatchToProps = (dispatch) => ({ getUsers: () => dispatch(getBooks()) });

export default connect(null, dispatchToProps)(Books);
