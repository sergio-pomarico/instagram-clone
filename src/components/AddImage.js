import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UniversalToast from './Toast';
import ProgressiveImage from './ProgressiveImage';
import PropTypes from 'prop-types';

const AddImage = props => {
  const {title, size = 150, shape = 'circle', addImage, photo} = props;
  const borderRadius = shape === 'circle' ? size / 2 : 0;
  const [image, setImage] = useState(photo);
  const options = {title};
  const launchImagePicker = () => {
    ImagePicker.showImagePicker(options, response => {
      const {didCancel, error} = response;
      if (error) {
        UniversalToast.showError(error);
      } else if (!error && !didCancel) {
        setImage(response.uri);
        addImage(response.uri);
      }
    });
  };
  return (
    <TouchableOpacity
      style={[styles.container, {width: size, height: size, borderRadius}]}
      onPress={launchImagePicker}>
      {!image && <Icon name="camera" color="#A2A2A2" size={30} />}
      {image && (
        <ProgressiveImage
          source={{uri: `${image}?w=${size * 2}&buster=${Math.random()}`}}
          thumbnailSource={{uri: `${image}?w=${size}&buster=${Math.random()}`}}
          style={{width: size, height: size, borderRadius}}
          size={size}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loading: {
    zIndex: 2,
    position: 'absolute',
  },
});

AddImage.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  shape: PropTypes.bool,
  addImage: PropTypes.func.isRequired,
  updateForm: PropTypes.func,
};

export default AddImage;
