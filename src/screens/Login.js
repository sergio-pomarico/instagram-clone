import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Loader from '../components/Loading';
import LoginForm from '../components/LoginForm';

const logo = require('../../assets/logo.png');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <LoginForm />
        <TouchableOpacity onPress={this.goToRegister}>
          <Text style={styles.registerText}>or create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

const mapStateToProps = state => {
  const { loading } = state.ui;
  return {
    loading,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  Loader
)(Login);
