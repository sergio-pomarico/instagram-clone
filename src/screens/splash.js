import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, StatusBar } from 'react-native';

class Splash extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#FF217A" size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
