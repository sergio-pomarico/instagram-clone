import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const iconsName = {
  Home: 'home',
  Search: 'search',
  Add: 'plus',
  Follow: 'users',
  Profile: 'user',
};

const TabItem = ({route, isActive, navigation}) => {
  const handlePress = () => {
    navigation.navigate(route.routeName);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={iconsName[route.routeName]}
        color={isActive ? '#FF4D4D' : '#CDCCCE'}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default TabItem;
