import { REGISTER, REGISTER_SUCCESS } from './types';

export const makeRegister = values => ({
  values,
  type: REGISTER,
});

export const registerSuccess = values => ({
  values,
  type: REGISTER_SUCCESS,
});
