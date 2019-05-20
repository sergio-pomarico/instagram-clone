import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

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
        {/* <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <LinearGradient
          colors={['#FF217A', '#FF4D4D']}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 0.0, x: 1.0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={this.goToRegister} style={styles.buttonInner}>
            <Text style={styles.text}>Go to register</Text>
          </TouchableOpacity>
        </LinearGradient> */}
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
  input: {
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    color: '#A2A2A2',
    fontSize: 16,
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 25,
    width: '100%',
  },
  button: {
    borderRadius: 25,
    color: '#FFF',
    height: 50,
    marginVertical: 15,
    width: '100%',
  },
  buttonInner: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginScreen;
