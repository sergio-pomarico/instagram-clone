import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Comments from '../screens/Comments';
import Profile from '../screens/Profile';

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Author: {
      screen: Profile,
    },
    Comments: {
      screen: Comments,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    Posts: {
      screen: Posts,
    },
  },
  {
    navigationOptions: {},
  },
);

export default createAppContainer(HomeNav);
