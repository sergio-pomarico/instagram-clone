import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

const LoginForm = props => {
  const { handleSubmit, handleLogin } = props;
  return (
    <View style={styles.container}>
      <Field name="email" component={Input} placeholder="email" isEmail />
      <Field name="password" component={Input} placeholder="password" isPass />
      <Button text="Login" onPress={handleSubmit(values => handleLogin(values))} />
    </View>
  );
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (values.password.length < 6) {
    errors.password = 'password must have at least 6 characters';
  }

  return errors;
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
