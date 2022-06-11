import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import progressImage from '../images/completed.png';

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
            <button type="button" id="btn-comments">Comments</button>
          </li>
          <li>
            <button type="button" id="btn-remove" onClick={() => dispatch(removeBook(id))}>Delete</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress-image">
        <img className="image-item" src={progressImage} alt="imag" />
      </div>
      <div className="chapter-section">
        <h3>CURRENT CHAPTER</h3>
        <h5>Introduction</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>

    </article>
  );
}

export default Book;
