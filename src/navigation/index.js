import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeNav from './home';
import SearchNav from './search';
import FollowNav from './follow';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNav,
    },
    Search: {
      screen: SearchNav,
    },
    Add: {
      screen: AddScreen,
    },
    Follow: {
      screen: FollowNav,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default createAppContainer(TabNavigator);
