import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  movie: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_START:
      return updateObject(state, { loading: true });
    case actionTypes.MOVIE_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.MOVIE_SUCCESS:
      return updateObject(state, { movie: action.movie, loading: false });

    default:
      return state;
  }
};

export default reducer;
