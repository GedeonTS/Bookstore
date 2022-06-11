import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Inputs from './Inputs';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [bookItem, setState] = useState({ book: '', author: '' });
  const currentInput = (e) => {
    const field = e.target.name;
    switch (field) {
      case 'book':
        setState({
          book: e.target.value,
          author: bookItem.author,
        });
        break;
      case 'author':
        setState({
          author: e.target.value,
          book: bookItem.book,
        });
        break;
      default:
        setState({
          author: bookItem.author,
          book: bookItem.book,
        });
    }
  };

  return (
    <section className="input-wrapper">
      <h3>ADD NEW BOOK</h3>
      <form className="input-form">
        <Inputs className="book-name-input" name="book" placeholder="book title" function={currentInput} />
        <Inputs className="author-name-input" name="author" placeholder="author name" function={currentInput} />
        <button type="button" onClick={() => dispatch(addBook(bookItem))}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
