import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';

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
        <Text>Login</Text>
        <Button title="register" onPress={this.goToRegister} />
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
  },
});

export default LoginScreen;
