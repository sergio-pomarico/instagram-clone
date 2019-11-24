import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

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
