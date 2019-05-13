import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabNavigator from './src/navigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
        {/* <LoginNavigator /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
