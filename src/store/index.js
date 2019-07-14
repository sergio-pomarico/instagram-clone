import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { reducer as form } from 'redux-form';
import { all } from 'redux-saga/effects';

// Reducers & Sagas
import { registerReducer, resgisterSagas } from './register';

const rootReducer = combineReducers({
  register: registerReducer,
  form,
});

// Saga
function* rootSaga() {
  yield all([resgisterSagas]);
}

// Middlewares
const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
