import React, { Component } from 'react';

import { StyleSheet, Alert, Text, TouchableOpacity, View } from 'react-native';

import { Facebook } from 'expo';

class AuthScreen extends Component {
  async logIn() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1773862909315353',
      {
        permissions: ['public_profile', 'email']
      }
    );
    console.log('LOGIN', type, token);
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      const data = await response.json();
      Alert.alert('Logged in!', `Hi ${data.name}!`);
      console.log('DATA: ', data);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}> Welcome!</Text>
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => this.logIn()}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
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

export default AuthScreen;
