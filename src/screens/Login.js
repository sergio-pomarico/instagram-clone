import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {compose} from 'redux';

import Loader from '../components/Loading';
import LoginForm from '../components/LoginForm';
import {login} from '../store/auth/actions';

const logo = require('../../assets/logo.png');

const Login = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = values => {
    dispatch(login(values));
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <LoginForm handleLogin={handleLogin} />
      <TouchableOpacity onPress={goToRegister}>
        <Text style={styles.registerText}>or create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  registerText: {
    color: '#FF316A',
    fontSize: 16,
    marginTop: 20,
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 20,
  },
});

export default compose(Loader)(Login);
