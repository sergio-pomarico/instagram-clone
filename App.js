/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

// import TabNavigator from './src/navigation';
import AppNavigation from './src/navigation';
import NavigationService from './src/navigation/navigationService';
import Store from './src/store';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <AppNavigation
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
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
