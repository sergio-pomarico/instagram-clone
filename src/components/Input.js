import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = props => {
  const { placeholder, input, isPass, isEmail, meta } = props;
  const type = isEmail ? 'email-address' : 'default';
  return (
    <View style={styles.constainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={input.onChange}
        secureTextEntry={isPass}
        keyboardType={type}
        autoCapitalize="none"
        onBlur={input.onBlur}
      />
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  isPass: PropTypes.bool,
  isEmail: PropTypes.bool,
  meta: PropTypes.object,
};

Input.defaultProps = {
  isPass: false,
  isEmail: false,
  meta: {},
};

const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    height: 60,
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    color: '#A2A2A2',
    fontSize: 16,
    height: 50,
    paddingHorizontal: 25,
    width: '100%',
    marginBottom: 5,
  },
  error: {
    color: '#FF316A',
    fontSize: 14,
    paddingLeft: 25,
  },
});

export default Input;
