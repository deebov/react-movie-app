import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Movie from '../containers/Movie/Movie';

const MoviePage = props => {
  return (
    <div>
      <Helmet>
        <title>{props.movie ? props.movie.title : null}</title>
      </Helmet>
      <Movie id={props.match.params.movieId} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.movie.movie
  };
};

export default connect(mapStateToProps)(MoviePage);
