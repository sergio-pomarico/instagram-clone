import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  const { placeholder } = props;
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
});

export default Input;
