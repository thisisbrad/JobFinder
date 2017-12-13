import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Facebook } from 'expo';

import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
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
    backgroundColor: '#FFBE0B'
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

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
