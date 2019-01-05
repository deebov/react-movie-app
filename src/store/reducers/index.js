import { combineReducers } from 'redux';

import popularReducer from './popular';
import similarReducer from './similar';
import searchReducer from './search';
import genresReducer from './genres';
import movieReducer from './movie';

export const rootReducer = combineReducers({
  popular: popularReducer,
  similar: similarReducer,
  genres: genresReducer,
  search: searchReducer,
  movie: movieReducer
});

export default rootReducer;
