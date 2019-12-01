import React, {useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const ProgressiveImage = props => {
  const [thumbnailAnimated] = useState(new Animated.Value(0));
  const [imageAnimated] = useState(new Animated.Value(0));

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
    }).start();
  };

  const {thumbnailSource, source, style, shape = 'circle', size = 200} = props;
  const borderRadius = shape === 'circle' ? size / 2 : 0;
  return (
    <View style={[styles.container, {borderRadius}]}>
      <Animated.Image
        source={thumbnailSource}
        style={[style, {opacity: thumbnailAnimated}]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#EFEFEF',
  },
});

export default ProgressiveImage;
