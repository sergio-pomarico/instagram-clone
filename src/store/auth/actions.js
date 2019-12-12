import {
  REGISTER,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  CHECK_SESSION,
  CHECK_SESSION_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  ADD_PROFILE_IMAGE,
} from './types';

export const register = ({email, password, name}) => ({
  email,
  password,
  name,
  type: REGISTER,
});

export const login = ({email, password}) => ({
  email,
  password,
  type: LOGIN,
});

export const loginSuccess = user => ({
  user,
  type: LOGIN_SUCCESS,
});

export const session = () => ({
  type: CHECK_SESSION,
});

export const sessionSuccess = user => ({
  user,
  type: CHECK_SESSION_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = user => ({
  user,
  type: LOGOUT_SUCCESS,
});

export const registerSuccess = user => ({
  user,
  type: REGISTER_SUCCESS,
});

export const authFailure = error => ({
  error,
  type: AUTH_ERROR,
});

export const addImage = image => ({
  image,
  type: ADD_PROFILE_IMAGE,
});
