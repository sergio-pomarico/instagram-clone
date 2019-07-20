import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpForm from './components/SignUpForm';
import { makeRegister } from '../../store/register/actions';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRegister = values => {
    const { register } = this.props;
    register(values);
  };

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm handleRegister={this.handleRegister} />
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
  register: values => {
    dispatch(makeRegister(values));
  },
});

SignUpScreen.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpScreen);
