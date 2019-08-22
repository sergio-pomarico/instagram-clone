import SHOW_LOADING from './types';

const showLoading = loading => ({
  loading,
  type: SHOW_LOADING,
});

export default showLoading;
