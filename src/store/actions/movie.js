import * as actionTypes from './actionTypes';
import axios from '../../utils/axios';
import { MOVIE } from '../../constants/api';

export const fetchMovieStart = () => {
  return {
    type: actionTypes.MOVIE_START
  };
};

export const fetchMovieFail = () => {
  return {
    type: actionTypes.MOVIE_FAIL
  };
};

export const fetchMovieSuccess = movie => {
  return {
    type: actionTypes.MOVIE_SUCCESS,
    movie
  };
};

export const fetchMovie = id => async dispatch => {
  dispatch(fetchMovieStart());

  try {
    const data = await axios(MOVIE.replace(/\{movie_id\}/, id));

    dispatch(fetchMovieSuccess(data.data));
  } catch (error) {
    dispatch(fetchMovieFail());
  }
};
