import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.categories);

  return (
    <>
      <h1>{message}</h1>
      <div>
        <button type="button" onClick={() => dispatch(checkStatus())}>check Status</button>
      </div>
    </>
  );
}

export default Categories;
