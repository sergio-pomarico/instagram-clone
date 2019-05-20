import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
    },
  },
  {
    navigationOptions: {
      title: 'Login',
    },
  }
);

export default createAppContainer(LoginNavigator);
