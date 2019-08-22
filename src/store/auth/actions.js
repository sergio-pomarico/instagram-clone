import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

export const register = ({ email, password, name }) => ({
  email,
  password,
  name,
  type: REGISTER,
});

export const registerSuccess = user => ({
  user,
  type: REGISTER_SUCCESS,
});

export const registerFailure = user => ({
  user,
  type: REGISTER_FAILURE,
});
