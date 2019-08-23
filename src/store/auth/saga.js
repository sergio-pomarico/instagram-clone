import { takeLatest, put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { REGISTER, LOGIN } from './types';
import UniversalToast from '../../components/Toast';
import showLoading from '../ui/actions';
import { registerSuccess, authFailure, loginSuccess } from './actions';
import NavigationService from '../../navigation/navigationService';

export function* register(action) {
  yield put(showLoading(true));
  try {
    const { email, password, name } = action;
    const { user } = yield firebase.auth().createUserWithEmailAndPassword(email, password);
    if (user) {
      yield put(showLoading(false));
      yield user.updateProfile({ displayName: name });
      yield user.reload();
      yield put(registerSuccess(user.toJSON()));
      NavigationService.navigate('Home');
    }
  } catch (error) {
    yield put(showLoading(false));
    yield put(authFailure(error));
    UniversalToast.showError(error.message);
  }
}

export function* login(action) {
  yield put(showLoading(true));
  try {
    const { email, password } = action;
    const { user } = yield firebase.auth().signInWithEmailAndPassword(email, password);
    if (user) {
      yield put(showLoading(false));
      yield put(loginSuccess(user.toJSON()));
      NavigationService.navigate('Home');
    }
  } catch (error) {
    yield put(showLoading(false));
    yield put(authFailure(error));
    UniversalToast.showError(error.message);
  }
}

const authSaga = [takeLatest(REGISTER, register), takeLatest(LOGIN, login)];
export default authSaga;
