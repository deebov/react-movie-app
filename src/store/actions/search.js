import * as actionTypes from './actionTypes';
import axios from 'axios';
import { SEARCH, BASE_URL, API_KEY } from '../../constants/api';

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START
  };
};

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL
  };
};

export const searchSuccess = results => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    results
  };
};

function makeRequestCreator() {
  let call;
  return query => dispatch => {
    if (call) {
      call.cancel();
    }
    dispatch(searchStart())
    call = axios.CancelToken.source();
    return axios(`${BASE_URL}${SEARCH}?query=${query}&api_key=${API_KEY}`, {
      cancelToken: call.token
    })
      .then(response => {
        dispatch(searchSuccess(response.data.results));
      })
      .catch(thrown => {
        // dispatch(searchFail());
        if (axios.isCancel(thrown)) {
          // request cancelled
        } else {
          // handle errors
        }
      });
  };
}

export const search = makeRequestCreator();

