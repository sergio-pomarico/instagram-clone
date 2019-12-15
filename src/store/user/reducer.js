import {ADD_PROFILE_IMAGE} from './types';

const initialState = {
  profileImage: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROFILE_IMAGE: {
      return {...state};
    }
    default:
      return state;
  }
}
