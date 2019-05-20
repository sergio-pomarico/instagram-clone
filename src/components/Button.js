import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  const { onPress, text } = props;
  return (
    <LinearGradient
      colors={['#FF217A', '#FF4D4D']}
      start={{ y: 0.0, x: 0.0 }}
      end={{ y: 0.0, x: 1.0 }}
      style={styles.button}
    >
      <TouchableOpacity onPress={onPress} style={styles.buttonInner}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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

export default Button;
