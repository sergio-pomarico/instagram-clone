import { takeLatest } from 'redux-saga/effects';
import { REGISTER } from './types';

export default function* registerSagas() {
  yield takeLatest(REGISTER, workerSaga);
}

function* workerSaga() {
  // workerSaga code
}
