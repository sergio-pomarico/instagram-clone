import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeNav from './home';
import SearchNav from './search';
import FollowNav from './follow';
import Add from '../screens/Add';
import Profile from '../screens/Profile';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNav,
    },
    Search: {
      screen: SearchNav,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: FollowNav,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default createAppContainer(TabNavigator);
