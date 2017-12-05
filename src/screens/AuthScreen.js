import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Facebook } from 'expo';

import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}> Welcome!</Text>
        </View>

        <View style={styles.loginContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8338EC'
  },
  welcomeContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20
  },
  welcomeText: {
    color: 'white',
    fontSize: 34
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  loginButton: {
    paddingVertical: 15
  },
  loginButtonText: {
    fontSize: 24,
    color: 'white',
    padding: 10,
    backgroundColor: '#3A86FF'
  }
});

export default connect(null, actions)(AuthScreen);
