import { createStackNavigator, createAppContainer } from 'react-navigation';

import Search from '../screens/Search';
import Posts from '../screens/Posts';
import Comments from '../screens/Comments';
import Profile from '../screens/Profile';

const SearchNav = createStackNavigator(
  {
    Search: {
      screen: Search,
    },
    Posts: {
      screen: Posts,
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
  },
  {
    navigationOptions: {},
  }
);

export default createAppContainer(SearchNav);
