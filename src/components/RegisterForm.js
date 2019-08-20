import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

const SignUpForm = props => {
  const { handleSubmit, handleRegister } = props;
  return (
    <View style={styles.container}>
      <Field name="name" component={Input} placeholder="name" />
      <Field name="email" component={Input} placeholder="email" isEmail />
      <Field name="password" component={Input} placeholder="password" isPass />
      <Field name="confirm" component={Input} placeholder="confirm password" isPass />
      <Button text="Register" onPress={handleSubmit(values => handleRegister(values))} />
    </View>
  );
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'name is required';
  } else if (values.name.length < 5) {
    errors.name = 'name must have at least 5 characters';
  }

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

  if (!values.confirm) {
    errors.confirm = 'confirm password is required';
  } else if (values.password !== values.confirm) {
    errors.confirm = 'the password must match';
  }

  return errors;
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm);
