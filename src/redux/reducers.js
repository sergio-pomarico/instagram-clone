import { combineReducers } from 'redux';

const root = (state = [], action) => state;

const rootReducers = combineReducers({
  root,
});

export default rootReducers;
