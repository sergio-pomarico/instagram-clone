import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PostsScreen from '../screens/PostsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Author: {
      screen: ProfileScreen,
    },
    Comments: {
      screen: CommentsScreen,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    Posts: {
      screen: PostsScreen,
    },
  },
  {
    navigationOptions: {},
  }
);

export default createAppContainer(HomeNav);
