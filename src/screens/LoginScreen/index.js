import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import LoginForm from './components/LoginForm';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
        <TouchableOpacity onPress={this.goToRegister}>
          <Text style={styles.registerText}>or create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginScreen.propTypes = {
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
});

export default LoginScreen;
