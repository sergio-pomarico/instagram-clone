import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeNav from './home';
import SearchNav from './search';
import FollowNav from './follow';
import Add from '../screens/Add';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import Auth from './auth';

import TabBar from '../components/TabBar';

const TabNavigator = createStackNavigator(
  {
    default: createBottomTabNavigator(
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
        tabBarComponent: TabBar,
        initialRouteName: 'Home',
      },
    ),
    AddModal: {
      screen: Add,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
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
