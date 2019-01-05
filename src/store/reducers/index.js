import { combineReducers } from 'redux';

import popularReducer from './popular';
import genresReducer from './genres';
import movieReducer from './movie';
import searchReducer from './search';

export const rootReducer = combineReducers({
  popular: popularReducer,
  genres: genresReducer,
  search: searchReducer,
  movie: movieReducer
});

export default rootReducer;
