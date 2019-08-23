import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import RegisterForm from '../components/RegisterForm';
import Loader from '../components/Loading';
import { register } from '../store/auth/actions';

class Register extends React.Component {
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

Register.propTypes = {
  makeRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  makeRegister: values => {
    dispatch(register(values));
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
    mapDispatchToProps
  ),
  Loader
)(Register);
