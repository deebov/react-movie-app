import * as actionTypes from './actionTypes';
import axios from '../../utils/axios';
import { SIMILAR_MOVIES } from '../../constants/api';

export const fetchSimilarStart = () => {
  return {
    type: actionTypes.SIMILAR_START
  };
};

export const fetchSimilarFail = () => {
  return {
    type: actionTypes.SIMILAR_FAIL
  };
};

export const fetchSimilarSuccess = data => {
  return {
    type: actionTypes.SIMILAR_SUCCESS,
    data
  };
};

export const fetchSimilar = id => async dispatch => {
  dispatch(fetchSimilarStart());

  try {
    const api = SIMILAR_MOVIES.replace('{movie_id}', id);
    const data = await axios(api);

    dispatch(fetchSimilarSuccess(data.data));
  } catch (error) {
    dispatch(fetchSimilarFail());
  }
};
