import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import {session} from '../store/auth/actions';

const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatch(session()));
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#FF217A" size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
