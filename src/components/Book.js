import React from 'react';

function Book(props) {
  const { name, author } = props;
  return (
    <div>
      <div>
        {name}
        by
        {author}
      </div>
      <button type="button">Delete</button>
    </div>
  );
}

export default Book;
