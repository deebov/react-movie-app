import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  results: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return updateObject(state, { loading: true });
    case actionTypes.SEARCH_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.SEARCH_SUCCESS:
      return updateObject(state, { results: action.results, loading: false });

    default:
      return state;
  }
};

export default reducer;
