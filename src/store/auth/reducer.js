import { REGISTER, REGISTER_SUCCESS, AUTH_ERROR, LOGIN, LOGIN_SUCCESS } from './types';

const initialState = {
  user: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER: {
      return { ...state };
    }
    case REGISTER_SUCCESS: {
      const { user } = action;
      return { ...state, user };
    }
    case LOGIN: {
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      const { user } = action;
      return { ...state, user };
    }
    case AUTH_ERROR: {
      const { error } = action;
      return { ...state, error };
    }
    default:
      return state;
  }
}
