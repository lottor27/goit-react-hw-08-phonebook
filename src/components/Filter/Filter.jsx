import React from 'react';
import { useDispatch } from 'react-redux';
import { createFilter } from 'store/filter/filterReducer';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    dispatch(createFilter(e.currentTarget.value));
  };

  return (
    <div className={css.container}>
      <h5 className={css.title}>Find contacts by name:</h5>
      <input
        className={css.input}
        type="text"
        onChange={handleSearchChange}
        placeholder="Search contacts"
      />
    </div>
  );
};
export default Filter;
