import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Follow from '../../screens/Follow';

const FollowTabs = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Follower: {
      screen: Follow,
    },
  },
  {
    tabBarOptions: {},
  },
);

export default createAppContainer(FollowTabs);
