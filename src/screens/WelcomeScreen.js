import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to the World!', color: '#FFBE0B' },
  { text: 'Here it all comes to you!', color: '#8338EC' },
  { text: 'A new world awaits us...', color: '#3A86FF' }
];

class WelcomeScreen extends Component {
  onComplete = () => {
    this.props.navigation.navigate('auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;
