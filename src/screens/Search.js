import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
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

export default SearchScreen;
