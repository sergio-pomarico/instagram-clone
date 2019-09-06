import { takeLatest, put, call } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { REGISTER, LOGIN, CHECK_SESSION, LOGOUT } from './types';
import UniversalToast from '../../components/Toast';
import showLoading from '../ui/actions';
import {
  registerSuccess,
  authFailure,
  loginSuccess,
  sessionSuccess,
  logoutSuccess,
} from './actions';
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

export function* session() {
  try {
    const user = yield call(checkSession);
    if (user) {
      yield put(sessionSuccess(user.toJSON()));
      NavigationService.navigate('Home');
    }
  } catch (error) {
    NavigationService.navigate('Login');
    yield put(authFailure(error));
  }
}

const checkSession = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('the session could not be determined'));
      }
    });
  });
};

const singOut = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve())
      .catch(error => reject(new Error(error.message)));
  });
};

export function* logout() {
  try {
    yield call(singOut);
    yield put(logoutSuccess(null));
    NavigationService.navigate('Login');
  } catch (error) {
    NavigationService.navigate('Login');
    yield put(authFailure(error));
  }
}

const authSaga = [
  takeLatest(REGISTER, register),
  takeLatest(LOGIN, login),
  takeLatest(CHECK_SESSION, session),
  takeLatest(LOGOUT, logout),
];
export default authSaga;
