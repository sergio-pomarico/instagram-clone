import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import FollowScreen from '../../screens/FollowScreen';

const FollowTabs = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: FollowScreen,
    },
    Follower: {
      screen: FollowScreen,
    },
  },
  {
    tabBarOptions: {},
  }
);

export default createAppContainer(FollowTabs);
