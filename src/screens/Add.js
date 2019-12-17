import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../components/Header';
import Button from '../components/Button';
import ProgressiveImage from '../components/ProgressiveImage';
import UniversalToast from '../components/Toast';

import {addPost} from '../store/user/actions';

const AddScreen = props => {
  const {navigation} = props;
  const onBack = () => navigation.goBack();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const options = {title: 'Select image', quality: 0.75};
  const hasEmptySpaces = text.replace(/\s/g, '').length;
  const addNewPost = () => {
    const post = {author: user.uid, content: text, image};
    dispatch(addPost(post));
  };

  const selectImageCamera = () => {
    ImagePicker.launchCamera(options, response => {
      const {didCancel, error} = response;
      if (error) {
        UniversalToast.showError(error);
      } else if (!error && !didCancel) {
        setImage(response.uri);
      }
    });
  };

  const selectImageGallery = () => {
    ImagePicker.launchImageLibrary(options, response => {
      const {didCancel, error} = response;
      if (error) {
        UniversalToast.showError(error);
      } else if (!error && !didCancel) {
        setImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header hasBack onBackPress={onBack} title="Add post" hasBorder />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <ProgressiveImage
            source={{uri: user.photoURL}}
            size={48}
            thumbnailSource={{uri: user.photoURL}}
            style={styles.avatar}
          />
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={10}
            placeholder="Want to share something?"
            onChangeText={value => setText(value)}
            value={text}
            style={styles.input}
          />
        </View>
        <View style={styles.selectImageContainer}>
          <TouchableOpacity style={styles.icon} onPress={selectImageCamera}>
            <Icon name="camera" size={32} color="#A2A2A2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="image"
              size={32}
              color="#A2A2A2"
              onPress={selectImageGallery}
            />
          </TouchableOpacity>
        </View>
        {image && (
          <Image
            source={{uri: image}}
            resizeMode="cover"
            style={styles.photo}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button
            text="Publish"
            onPress={addNewPost}
            disable={!hasEmptySpaces}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    flex: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    color: '#A2A2A2',
    height: 80,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 32,
    right: 0,
  },
  selectImageContainer: {
    flexDirection: 'row',
    borderBottomColor: '#CDCCCE',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  icon: {
    marginLeft: 20,
  },
  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
    maxHeight: 300,
  },
});

export default AddScreen;
