import {
  REGISTER,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  CHECK_SESSION,
  CHECK_SESSION_SUCCESS,
} from './types';

export const register = ({ email, password, name }) => ({
  email,
  password,
  name,
  type: REGISTER,
});

export const login = ({ email, password }) => ({
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

export const registerSuccess = user => ({
  user,
  type: REGISTER_SUCCESS,
});

export const authFailure = error => ({
  error,
  type: AUTH_ERROR,
});
