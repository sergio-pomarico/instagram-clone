import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { REGISTER } from './types';
// import { registerSuccess } from './actions';

export function* register(action) {
  try {
    const { email, password } = action;
    const { user } = yield firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('signIn >> error', user);
  } catch (error) {
    console.log('signIn >> error', error);
  }
}

const authSaga = [takeLatest(REGISTER, register)];
export default authSaga;
