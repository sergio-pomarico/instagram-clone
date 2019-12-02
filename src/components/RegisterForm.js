import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Field, reduxForm, blur} from 'redux-form';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';
import AddImage from './AddImage';

import {useDispatch} from 'react-redux';
import {addImage, cleanImage} from '../store/auth/actions';

const Image = props => {
  const {meta} = props;
  return (
    <View>
      {meta.error && meta.touched && (
        <Text style={styles.error}>{meta.error}</Text>
      )}
    </View>
  );
};

const SignUpForm = props => {
  const {handleSubmit, handleRegister} = props;
  const dispatch = useDispatch();

  const updateForm = () => dispatch(blur('SignUpForm', 'photo', Date.now()));
  const addProfileImage = image => dispatch(addImage(image));

  /* eslint-disable  react-hooks/exhaustive-deps */
  useEffect(() => {
    return () => {
      dispatch(cleanImage());
    };
  }, []);
  /* eslint-enable  react-hooks/exhaustive-deps */

  return (
    <View style={styles.container}>
      <AddImage
        title="Choose your profile image"
        size={180}
        addImage={addProfileImage}
        updateForm={updateForm}
      />
      <Field name="photo" component={Image} />
      <Field name="name" component={Input} placeholder="name" />
      <Field name="email" component={Input} placeholder="email" isEmail />
      <Field name="password" component={Input} placeholder="password" isPass />
      <Field
        name="confirm"
        component={Input}
        placeholder="confirm password"
        isPass
      />
      <Button
        text="Register"
        onPress={handleSubmit(values => handleRegister(values))}
      />
    </View>
  );
};

const validate = (values, props) => {
  const errors = {};
  if (!props.image) {
    errors.photo = 'photo is required';
  }

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
  error: {
    color: '#FF316A',
    fontSize: 14,
  },
});

export default reduxForm({form: 'SignUpForm', validate})(SignUpForm);
