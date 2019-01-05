import React from 'react';
import { Link } from 'react-router-dom';
import { LANDING } from '../../constants/routes';

import classes from './SearchBar.module.css';
import Spinner from '../Spinner/Spinner';

const SearchBar = props => {
  const { onChange, value, loading } = props;
  return (
    <div className={classes.Container}>
      <Link to={LANDING} className={classes.HomeLink}>
        Home
      </Link>
      <input
        className={classes.Input}
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search..."
      />
      <div className={classes.Spinner}>{loading ? <Spinner /> : null}</div>
    </div>
  );
};

export default SearchBar;
