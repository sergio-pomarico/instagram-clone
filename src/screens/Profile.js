import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store/auth/actions';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { Logout } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
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

Profile.propTypes = {
  Logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  Logout: values => {
    dispatch(logout(values));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Profile);
