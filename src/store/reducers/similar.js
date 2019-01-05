import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  movies: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIMILAR_START:
      return updateObject(state, { loading: true });
    case actionTypes.SIMILAR_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.SIMILAR_SUCCESS:
      const { results } = action.data;
      return updateObject(state, {
        movies: results,
        loading: false
      });
    default:
      return state;
  }
};

export default reducer;
