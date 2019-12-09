import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AddButton = () => {
  const [buttonSize] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, sizeStyle]}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Icon name="plus" color="#fff" size={24} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#FF4D4D',
    shadowOffset: {height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    width: 48,
  },
});

export default AddButton;
