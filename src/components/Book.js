import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { n, a, id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {n}
        {' '}
        by
        {' '}
        {a}
      </div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
  );
}

export default Book;
