import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <View style={styles.container}>
      <Field name="name" component={() => <Input placeholder="name" />} />
      <Field name="email" component={() => <Input placeholder="email" />} />
      <Button
        text="Login"
        onPress={handleSubmit(values => {
          console.log(values);
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default reduxForm({ form: 'LoginForm' })(LoginForm);
