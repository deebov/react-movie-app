import { combineReducers } from 'redux';

import popularReducer from './popular';

export const rootReducer = combineReducers({
  popular: popularReducer
});

export default rootReducer;
