import React from 'react';
import Helmet from 'react-helmet';

import PopularMovies from '../containers/PopularMovies/PopularMovies';

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <PopularMovies />
    </div>
  );
};

export default LandingPage;
