import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const [id, [bookItem]] = props.book;
  const dispatch = useDispatch();
  return (
    <article className="book-item">
      <div className="book-details">
        <p className="book-category">{bookItem.category}</p>
        <p className="book-title">{bookItem.title}</p>
        <p className="book-author">{bookItem.author}</p>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" id="btn-remove" onClick={() => dispatch(removeBook(id))}>Delete</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

    </article>
  );
}

export default Book;
