import Toast from 'react-native-root-toast';

const DEFAULT_CONFIG = {
  containerStyle: {
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 32,
  },
  duration: 3000,
  opacity: 1,
  shadowColor: '#bdbdbd',
  textStyle: {fontSize: 16, letterSpacing: -0.2, lineHeight: 20},
};

const ERROR_CONFIG = {
  ...DEFAULT_CONFIG,
  backgroundColor: '#e57373',
  textColor: '#FFF',
};

const NOTIFICATION_CONFIG = {
  ...DEFAULT_CONFIG,
  backgroundColor: '#4fc3f7',
  textColor: '#FFF',
};

const UniversalToast = Object.create(Toast);
let toast;

UniversalToast.show = (message, options) => {
  if (toast) {
    Toast.hide(toast);
  }

  toast = Toast.show(message, {
    ...DEFAULT_CONFIG,
    ...options,
  });
};

UniversalToast.showError = (message, options) => {
  if (toast) {
    Toast.hide(toast);
  }

  toast = Toast.show(message, {
    ...ERROR_CONFIG,
    ...options,
  });
};

UniversalToast.showNotification = (message, options) => {
  if (toast) {
    Toast.hide(toast);
  }

  toast = Toast.show(message, {
    ...NOTIFICATION_CONFIG,
    ...options,
  });
};

export default UniversalToast;
