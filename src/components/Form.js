import React, { useState } from 'react';
import Inputs from './Inputs';

const Form = () => {
  const [array, setState] = useState({ book: 'H', author: 'J' });
  const currentInput = (e) => {
    const field = e.target.name;
    switch (field) {
      case 'book':
        setState({ book: e.target.value, author: array.author });
        break;
      case 'author':
        setState({
          author: e.target.value,
          book: array.book,
        });
        break;
      default:
        setState({
          author: array.author,
          book: array.book,
        });
    }
  };
  const store = () => {
    console.log(array);
  };
  return (
    <form>
      <Inputs name="book" placeholder="book name" function={currentInput} />
      <Inputs name="author" placeholder="author name" function={currentInput} />
      <button type="button" onClick={store}>Add Book</button>
    </form>
  );
};

export default Form;
