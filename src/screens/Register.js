import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {compose} from 'redux';

import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';
import Loader from '../components/Loading';
import {register} from '../store/auth/actions';

const Register = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const onBack = () => navigation.goBack();

  const handleRegister = values => {
    dispatch(register(values));
  };

  return (
    <View style={styles.container}>
      <Header hasBack onBackPress={onBack} />
      <RegisterForm handleRegister={handleRegister} />
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
