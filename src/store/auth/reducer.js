import { REGISTER, REGISTER_SUCCESS } from './types';

const initialState = {
  loading: false,
  user: undefined,
  error: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER: {
      return { ...state, loading: true };
    }
    case REGISTER_SUCCESS: {
      const { user } = action;
      return { ...state, loading: false, user, error: '' };
    }
    default:
      return state;
  }
}
