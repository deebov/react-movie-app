import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  results: null,
  requestInfo: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return updateObject(state, { loading: true });
    case actionTypes.SEARCH_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.SEARCH_SUCCESS:
      const { results, page, total_results, total_pages } = action.data;
      return updateObject(state, {
        results: results,
        requestInfo: {
          page: page === total_pages ? null : page,
          total_pages,
          total_results,
        },
        loading: false,
      });

    default:
      return state;
  }
};

export default reducer;
