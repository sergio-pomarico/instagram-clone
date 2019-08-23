import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { session } from '../store/auth/actions';

class Splash extends Component {
  componentDidMount() {
    const { checkSession } = this.props;
    checkSession();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#FF217A" size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Splash.propTypes = {
  checkSession: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  checkSession: values => {
    dispatch(session(values));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
