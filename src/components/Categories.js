import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const check = () => dispatch(checkStatus());
  return (
    <div className="mt-5 pt-5 ms-3 categories">
      <button type="button" className="btn btn-primary" onClick={check}>Check status</button>
    </div>
  );
};

export default Categories;
