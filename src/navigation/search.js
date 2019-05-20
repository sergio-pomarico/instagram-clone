import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import PostsScreen from '../screens/PostsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const SearchNav = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Posts: {
      screen: PostsScreen,
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
  },
  {
    navigationOptions: {},
  }
);

export default createAppContainer(SearchNav);
