import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerTintColor: '#FF217A',
    },
  },
});

export default createAppContainer(LoginNavigator);
