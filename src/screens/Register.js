import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegisterForm from '../components/RegisterForm';
import { register } from '../store/auth/actions';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRegister = values => {
    const { makeRegister } = this.props;
    makeRegister(values);
  };

  render() {
    return (
      <View style={styles.container}>
        <RegisterForm handleRegister={this.handleRegister} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const mapDispatchToProps = dispatch => ({
  makeRegister: values => {
    dispatch(register(values));
  },
});

SignUpScreen.propTypes = {
  makeRegister: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpScreen);
