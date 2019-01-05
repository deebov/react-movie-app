import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../utils';

const initialState = {
  movies: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULAR_START:
      return updateObject(state, { loading: true });
    case actionTypes.POPULAR_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.POPULAR_SUCCESS:
      const { results, page, total_results, total_pages } = action.data;
      return updateObject(state, {
        movies: results,
        popularInfo: {
          page,
          total_pages,
          total_results
        },
        loading: false
      });
    default:
      return state;
  }
};

export default reducer;
