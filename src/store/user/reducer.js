import {ADD_PROFILE_IMAGE, ADD_NEW_POST} from './types';

const initialState = {
  profileImage: null,
  post: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROFILE_IMAGE: {
      return {...state};
    }
    case ADD_NEW_POST: {
      const {post} = action;
      return {...state, post};
    }
    default:
      return state;
  }
}
