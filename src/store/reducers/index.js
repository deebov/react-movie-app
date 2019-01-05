import { combineReducers } from 'redux';

import popularReducer from './popular';
import genresReducer from './genres';
import movieReducer from './movie';

export const rootReducer = combineReducers({
  popular: popularReducer,
  genres: genresReducer,
  movie: movieReducer
});

export default rootReducer;
