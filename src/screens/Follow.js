import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class FollowScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
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

export default FollowScreen;
