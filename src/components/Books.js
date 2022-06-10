import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';


const Books = ({ getUsers }) => {
  const data = useSelector((state) => state.booksReducer);
  const bookArray = data;

  useEffect(() => {
    getUsers()
  }, [])

  // axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8TVVPPLWS79K4DeolqFW/books')
  //   .then(response => console.log(response.data))

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

const dispatchToProps = (dispatch) => ({ getUsers: () => dispatch(getBooks()) })

export default connect(null, dispatchToProps)(Books);
