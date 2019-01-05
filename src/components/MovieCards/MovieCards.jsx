import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard/MovieCard';
import classes from './MovieCards.module.css';
import { MOVIE } from '../../constants/routes';
import Spinner from '../Spinner/Spinner';

const MovieCards = ({ movies, page, onPaginatedSearch, loading }) => {
  let cards = <Spinner />;

  if (movies) {
    cards = movies.map((m, i) => (
      <Link key={i} to={`${MOVIE.replace(/\:movieId/, m.id)}`}>
        <MovieCard item={m} />
      </Link>
    ));
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
      <div className={classes.ButtonBox}>
        {page && !loading && (
          <button
            className={classes.Button}
            type="button"
            onClick={onPaginatedSearch}
          >
            More
          </button>
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

MovieCards.propTypes = {
  movies: PropTypes.array
};

export default MovieCards;
