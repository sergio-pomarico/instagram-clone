import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabItem from './TabItem';
import AddButton from '../components/AddButton';

const TabBar = props => {
  const {navigation} = props;
  const {routes, index} = navigation.state;
  return (
    <View style={styles.container}>
      {routes.map((route, i) => {
        const {routeName} = route;
        if (routeName !== 'Add') {
          return (
            <TabItem
              route={route}
              isActive={index === i}
              key={routeName}
              navigation={navigation}
            />
          );
        } else {
          return <AddButton key={routeName} />;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopColor: '#a7a7aa',
    height: 83,
    paddingTop: 0,
    paddingBottom: 34,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TabBar;
