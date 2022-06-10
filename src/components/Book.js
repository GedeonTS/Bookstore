import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const [id, [bookItem]] = props.book
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>{bookItem.title}</h2>
        {' '}
        by
        {' '}
        <h5>{bookItem.author}</h5>
      </div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
  );
}

export default Book;
