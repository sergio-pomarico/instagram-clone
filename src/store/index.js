import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {reducer as form} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers & Sagas
import {authReducer, authSaga} from './auth';
import {userReducer, userSaga} from './user';
import UIReducer from './ui';

const reducers = combineReducers({
  auth: authReducer,
  ui: UIReducer,
  user: userReducer,
  form,
});

// Saga
function* rootSaga() {
  yield all([...authSaga, ...userSaga]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
