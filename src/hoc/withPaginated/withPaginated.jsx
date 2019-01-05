import React from 'react';

import classes from './withPaginated.module.css';
import Spinner from '../../components/Spinner/Spinner';

/*eslint-disable */
const withPaginated = Component => props => (
  <div>
    <Component {...props} />

    <div className={classes.ButtonBox}>
      {props.page && !props.loading && (
        <button
          className={classes.Button}
          type="button"
          onClick={props.onPaginatedSearch}
        >
          More
        </button>
      )}
      {props.loading && <Spinner />}
    </div>
  </div>
);
/*eslint-enable */
export default withPaginated;
