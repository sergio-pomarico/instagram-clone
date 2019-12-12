import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {logout} from '../store/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import AddImage from '../components/AddImage';
import {addImage} from '../store/auth/actions';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const {photoURL = null, displayName = '', email = ''} = user;
  const Logout = () => dispatch(logout());
  const addProfileImage = image => dispatch(addImage(image));
  return (
    <View style={styles.container}>
      <AddImage
        title="Choose your profile image"
        size={180}
        addImage={addProfileImage}
        photo={photoURL}
      />
      <Text>{displayName}</Text>
      <Text>{email}</Text>
      <TouchableOpacity onPress={Logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 88,
  },
});

export default ProfileScreen;
