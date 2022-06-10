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
    <section className="container">
      {
        bookArray.map((BookItem) => (
          <div>
            <Book key={BookItem.item_id} book={BookItem} />
          </div>
        ))
      }
      <Form />
    </section>
  );
};

const dispatchToProps = (dispatch) => ({ getUsers: () => dispatch(getBooks()) });

export default connect(null, dispatchToProps)(Books);
