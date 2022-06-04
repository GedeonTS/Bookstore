import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const name = 'GEDEON';
  const author = 'USHINDI';
  return (
    <section>
      this will display a list of books!
      <div>
        <Book n={name} a={author} />
        <button type="button">Delete all</button>
      </div>
      here is the form generating the books!
      <Form />
    </section>
  );
};

export default Books;
