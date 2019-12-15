import {takeLatest, put, call} from 'redux-saga/effects';
import {ADD_PROFILE_IMAGE} from './types';
import UniversalToast from '../../components/Toast';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {sessionSuccess} from '../auth/actions';

export function* uploadProfilePicture(action) {
  try {
    const user = yield auth().currentUser;
    const {image} = action;
    const {uid} = user.toJSON();
    const path = `images/${uid}/${Date.now()}`;
    const imageUpload = yield storage().ref(path);
    yield imageUpload.putFile(image);
    const url = yield imageUpload.getDownloadURL();
    yield user.updateProfile({photoURL: url});
    yield user.reload();
    yield call(updateUser, user.toJSON());
    yield put(sessionSuccess(user.toJSON()));
    UniversalToast.showNotification('Profile image updated!');
  } catch (error) {
    UniversalToast.showError(error.message);
  }
}

const updateUser = ({uid, photoURL}) => {
  const ref = firestore()
    .collection('users')
    .doc(uid);
  return new Promise((resolve, reject) => {
    ref
      .update({picture: photoURL})
      .then(() => resolve())
      .catch(error => reject(new Error(error.message)));
  });
};

const userSaga = [takeLatest(ADD_PROFILE_IMAGE, uploadProfilePicture)];
export default userSaga;
