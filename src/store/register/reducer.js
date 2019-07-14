import { REGISTER } from './types';

const initialState = [];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default registerReducer;
