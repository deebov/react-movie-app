import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  genres: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENRES_START:
      return updateObject(state, { loading: true });
    case actionTypes.GENRES_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.GENRES_SUCCESS:
      return updateObject(state, { genres: action.genres, loading: false });
    default:
      return state;
  }
};

export default reducer;
