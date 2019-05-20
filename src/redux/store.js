import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  root: [],
};

/* eslint-disable */
const Store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default Store;
