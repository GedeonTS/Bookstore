import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const data = useSelector((state) => state.booksReducer);
  const bookArray = data;

  return (
    <section>
      this will display a list of books!
      {
        bookArray.map((BookItem) => (
          <div>
            <Book key={BookItem.id} n={BookItem.book} a={BookItem.author} id={BookItem.id} />
          </div>
        ))
      }
      <button type="button">Delete all</button>
      here is the form generating the books!
      <Form />
    </section>
  );
};

export default Books;
