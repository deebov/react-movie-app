import * as actionTypes from './actionTypes';
import axios from '../../utils/axios';
import { POPULAR_MOVIES } from '../../constants/api';

export const fetchPopularStart = () => {
  return {
    type: actionTypes.POPULAR_START
  };
};

export const fetchPopularFail = () => {
  return {
    type: actionTypes.POPULAR_FAIL
  };
};

export const fetchPopularSuccess = data => {
  return {
    type: actionTypes.POPULAR_SUCCESS,
    data
  };
};

export const fetchPopular = (page = 1) => async (dispatch, getState) => {
  if (
    getState().popular.loading ||
    getState().popular.popularInfo.page > page
  ) {
    return;
  }

  dispatch(fetchPopularStart());

  try {
    const data = await axios(POPULAR_MOVIES, { params: { page } });

    dispatch(fetchPopularSuccess(data.data));
  } catch (error) {
    console.log(error);

    dispatch(fetchPopularFail());
  }
};
