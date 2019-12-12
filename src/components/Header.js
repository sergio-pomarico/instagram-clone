import React from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const isIOS = Platform.OS === 'ios';

const Header = props => {
  const {
    hasBorder = false,
    onBackPress,
    title = '',
    hasBack,
    rightItem,
  } = props;
  return (
    <View style={[styles.container, hasBorder ? styles.boder : {}]}>
      <View style={styles.item}>
        {hasBack && onBackPress && (
          <TouchableOpacity onPress={onBackPress}>
            <Icon name="chevron-left" size={25} color="#FF4D4D" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.item}>{rightItem}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: isIOS ? 88 : 60,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: isIOS ? 44 : 20,
  },
  item: {
    flex: 1,
  },
  boder: {
    borderBottomColor: '#CDCCCE',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});

Header.propTypes = {
  onBackPress: PropTypes.func,
  title: PropTypes.string,
  hasBack: PropTypes.bool,
  rightItem: PropTypes.node,
};

Header.defaultProps = {};

export default Header;
