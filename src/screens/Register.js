import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {compose} from 'redux';

import RegisterForm from '../components/RegisterForm';
import Loader from '../components/Loading';
import {register} from '../store/auth/actions';

const Register = props => {
  const dispatch = useDispatch();

  const handleRegister = values => {
    dispatch(register(values));
  };

  const image = useSelector(state => state.auth.image);

  return (
    <View style={styles.container}>
      <RegisterForm handleRegister={handleRegister} image={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default compose(Loader)(Register);
