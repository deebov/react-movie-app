import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  movies: null,
  popularInfo: {},
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULAR_START:
      return updateObject(state, { loading: true });
    case actionTypes.POPULAR_FAIL:
      return updateObject(state, { loading: false, error: action.error });
    case actionTypes.POPULAR_SUCCESS:
      const { results, page, total_results, total_pages } = action.data;
      const oldMovies = state.movies || [];
      return updateObject(state, {
        movies: [...oldMovies, ...results],
        popularInfo: {
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
