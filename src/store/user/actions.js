import {ADD_PROFILE_IMAGE, ADD_NEW_POST} from './types';

export const addImage = image => ({
  image,
  type: ADD_PROFILE_IMAGE,
});

export const addPost = post => ({
  post,
  type: ADD_NEW_POST,
});

export default {addImage};
