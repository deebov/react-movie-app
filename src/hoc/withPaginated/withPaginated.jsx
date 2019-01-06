import React from 'react';

import classes from './withPaginated.module.css';

/*eslint-disable */
const withPaginated = Component => props => (
  /*eslint-enable */
  <div>
    <Component {...props} />

    <div className={classes.ButtonBox}>
      {props.page && !props.loading && props.error && (
        <div>
          <p>Something went wrong...</p>
          <button
            className={classes.Button}
            type="button"
            onClick={props.onPaginatedSearch}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  </div>
);
export default withPaginated;
