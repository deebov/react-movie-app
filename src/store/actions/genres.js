import * as actionTypes from './actionTypes';
import axios from '../../utils/axios';
import { GENRES } from '../../constants/api';

export const fetchGenresStart = () => {
  return {
    type: actionTypes.GENRES_START
  };
};

export const fetchGenresFail = () => {
  return {
    type: actionTypes.GENRES_FAIL
  };
};

export const fetchGenresSuccess = genres => {
  return {
    type: actionTypes.GENRES_SUCCESS,
    genres
  };
};

export const fetchGenres = () => async dispatch => {
  dispatch(fetchGenresStart());

  try {
    const data = await axios(GENRES);

    dispatch(fetchGenresSuccess(data.data.genres));
  } catch (error) {
    dispatch(fetchGenresFail());
  }
};
