import * as actionTypes from './actionTypes';
import axios from 'axios';
import { SEARCH, BASE_URL, API_KEY } from '../../constants/api';

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START,
  };
};

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL,
  };
};

export const searchSuccess = data => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    data,
  };
};


// This function makes search requests.
// if the previous request is not finished when current request 
// is called this function calcells the previous one
function makeRequestCreator() {
  let call;
  return (query, page) => dispatch => {
    if (call) {
      call.cancel();
    }
    dispatch(searchStart());
    call = axios.CancelToken.source();
    return axios(`${BASE_URL}${SEARCH}`, {
      cancelToken: call.token,
      params: {
        query,
        api_key: API_KEY,
        page,
      },
    })
      .then(response => {
        dispatch(searchSuccess(response.data));
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
