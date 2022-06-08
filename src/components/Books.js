import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const bookArray = [
    { name: 'GEDEON', author: 'USHINDI' },
    { name: 'ADRIEL', author: 'TSHOBOHWA' },
  ];

  return (
    <section>
      this will display a list of books!
      {
        bookArray.map((x) => (
          <div>
            <Book n={x.name} a={x.author} />
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
