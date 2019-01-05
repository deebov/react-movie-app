import React from 'react';
import { Link } from 'react-router-dom';

import MovieCard from './MovieCard/MovieCard';
import classes from './MovieCards.module.css';
import { MOVIE } from '../../constants/routes';

const MovieCards = ({ movies }) => {
  let cards = <p>loading</p>;

  if (movies) {
    cards = movies.map((m, i) => (
      <Link key={i} to={`${MOVIE.replace(/\:movieId/, m.id)}`}>
        <MovieCard item={m} />
      </Link>
    ));
  }

  return <div className={classes.Container}>{cards}</div>;
};

export default MovieCards;
