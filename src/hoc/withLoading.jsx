import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../components/Spinner/Spinner';

/* eslint-disable */
const withLoading = Component => props => (
  /* eslint-enable */
  <div>
    <Component {...props} />

    {props.loading && <Spinner />}
  </div>
);

withLoading.propTypes = {
  Component: PropTypes.element,
};
export default withLoading;
