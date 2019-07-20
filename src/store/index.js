import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { reducer as form } from 'redux-form';

// Reducers & Sagas
import { authReducer, authSaga } from './auth';

const metaReducers = combineReducers({
  auth: authReducer,
  form,
});

// Saga
function* rootSaga() {
  yield all([...authSaga]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [sagaMiddleware];

const store = createStore(metaReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
