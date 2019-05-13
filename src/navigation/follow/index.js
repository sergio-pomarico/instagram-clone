import { createStackNavigator, createAppContainer } from 'react-navigation';
import FollowTabs from './tabs';
import ProfileScreen from '../../screens/ProfileScreen';
import CommentsScreen from '../../screens/CommentsScreen';
import PostsScreen from '../../screens/PostsScreen';

const FollowNav = createStackNavigator(
  {
    Follow: {
      screen: FollowTabs,
      navigationOptions: {
        header: null,
      },
    },
    Author: {
      screen: ProfileScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Comments: {
      screen: CommentsScreen,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {}
);

export default createAppContainer(FollowNav);
