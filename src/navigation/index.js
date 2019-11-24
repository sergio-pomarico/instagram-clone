import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import HomeNav from './home';
import SearchNav from './search';
import FollowNav from './follow';
import Add from '../screens/Add';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import Auth from './auth';

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
  },
);

const AppNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      App: TabNavigator,
      Auth,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);

export default AppNavigation;
