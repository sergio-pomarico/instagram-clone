import SHOW_LOADING from './types';

const initialState = {
  loading: false,
};

export default function UIReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING: {
      const { loading } = action;
      return { ...state, loading };
    }
    default:
      return state;
  }
}
