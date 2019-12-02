import React from 'react';
import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const Loading = props => {
  const {visible} = props;
  return (
    <Modal visible={visible} transparent>
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  visible: false,
};

const Loader = WrappedComponent => {
  const LoadingScreen = props => {
    const loading = useSelector(state => state.ui.loading);
    return (
      <>
        <WrappedComponent {...props} />
        {loading && <Loading visible={loading} />}
      </>
    );
  };
  return LoadingScreen;
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: '#212121',
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.5,
  },
});

export default Loader;
