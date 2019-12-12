import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(LoginNavigator);
