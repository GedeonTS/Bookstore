import React from 'react';

function Book(props) {
  const { n, a } = props;
  return (
    <div>
      <div>
        {n}{"  "}
        by{"  "}
        {a}
      </div>
      <button type="button">Delete</button>
    </div>
  );
}

export default Book;
