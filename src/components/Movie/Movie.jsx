import React from 'react';

import classes from './Movie.module.css';
import { BASE_IMAGE_URL } from '../../constants/api';

export const Movie = ({ movie }) => {
  return (
    <div
      className={classes.Container}
      style={{
        backgroundImage: `url(${BASE_IMAGE_URL}/w1280/${movie.backdrop_path})`
      }}
    >
      <div className={classes.Poster}>
        <img src={`${BASE_IMAGE_URL}/w300/${movie.poster_path}`} alt="" />
      </div>
      <div className={classes.Details}>
        <h1 className={classes.Title}>{movie.title}</h1>
        <p className={classes.Tagline}>{movie.tagline}</p>
        <p className={classes.Genres}>
          {movie.genres.map(g => g.name).join(' / ')}
        </p>
        <p className={classes.Genres}>
          {movie.vote_count} votes / {(movie.runtime / 60).toFixed(2)} h. /{' '}
          {movie.release_date.slice(0, 4)}
        </p>
        <p className={classes.Overview}>{movie.overview}</p>
        {movie.homepage && (
          <a href={movie.homepage} className={classes.Watch}>
            Watch
          </a>
        )}
      </div>
    </div>
  );
};

export default Movie;
