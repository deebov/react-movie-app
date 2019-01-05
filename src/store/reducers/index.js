import { combineReducers } from 'redux';

import popularReducer from './popular';
import genresReducer from './genres';

export const rootReducer = combineReducers({
  popular: popularReducer,
  genres: genresReducer
});

export default rootReducer;
