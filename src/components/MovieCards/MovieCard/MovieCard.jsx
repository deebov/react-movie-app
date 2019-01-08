import React from 'react';
import PropTypes from 'prop-types';

import classes from './MovieCard.module.css';
import { BASE_IMAGE_URL } from '../../../constants/api';
import { truncStr } from '../../../utils';

const MovieCard = props => {
  const { title, genres, poster_path, vote_average } = props.item;
  // Make a string of genres
  const genresString = genres.map(g => g.name).join(' / ');

  return (
    <div
      className={classes.Container}
      style={{ backgroundImage: poster_path && `url(${BASE_IMAGE_URL}/w185${poster_path})` }}
    >
      <div className={classes.VoteContainer}>
        <span className={classes.Vote}>{vote_average}</span>
      </div>

      <div className={classes.Bottom}>
        <h3 className={classes.Title}>{truncStr(title, 19)}</h3>
        <p className={classes.Genres} title={genresString}>
          {truncStr(genresString, 45)}
        </p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default MovieCard;
