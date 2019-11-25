import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FollowTabs from './tabs';
import Profile from '../../screens/Profile';
import Comments from '../../screens/Comments';
import Posts from '../../screens/Posts';

const FollowNav = createStackNavigator(
  {
    Follow: {
      screen: FollowTabs,
      navigationOptions: {
        header: null,
      },
    },
    Author: {
      screen: Profile,
    },
    Posts: {
      screen: Posts,
    },
    Comments: {
      screen: Comments,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {},
);

export default createAppContainer(FollowNav);
