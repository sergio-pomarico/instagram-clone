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
} from './types';

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
    case CHECK_SESSION: {
      return { ...state };
    }
    case CHECK_SESSION_SUCCESS: {
      const { user } = action;
      return { ...state, user };
    }
    case AUTH_ERROR: {
      const { error } = action;
      return { ...state, error };
    }
    case LOGOUT:
      return { ...state };
    case LOGOUT_SUCCESS: {
      const { user } = action;
      return { ...state, user };
    }
    default:
      return state;
  }
}
