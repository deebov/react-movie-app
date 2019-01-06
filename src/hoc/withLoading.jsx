import React from 'react';

import Spinner from '../components/Spinner/Spinner';

/* eslint-disable */
const withLoading = Component => props => (
  /* eslint-enable */
  <div>
    <Component {...props} />

    {props.loading && <Spinner />}
  </div>
);
export default withLoading;
