import {ADD_PROFILE_IMAGE} from './types';

export const addImage = image => ({
  image,
  type: ADD_PROFILE_IMAGE,
});

export default {addImage};
