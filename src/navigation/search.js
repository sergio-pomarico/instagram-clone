import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
    headerMode: 'none',
  },
);

export default createAppContainer(SearchNav);
