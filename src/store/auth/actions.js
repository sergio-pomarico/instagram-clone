import { REGISTER, REGISTER_SUCCESS } from './types';

export const register = (email, password) => ({
  email,
  password,
  type: REGISTER,
});

export const registerSuccess = user => ({
  user,
  type: REGISTER_SUCCESS,
});
