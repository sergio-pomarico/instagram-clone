import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const root = (state = []) => state;

const rootReducers = combineReducers({
  root,
  form,
});

export default rootReducers;
