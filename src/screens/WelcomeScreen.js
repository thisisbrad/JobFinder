import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { AppLoading, Font } from 'expo';
import _ from 'lodash';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to the World!', color: '#FFBE0B' },
  { text: 'Here it all comes to you!', color: '#8338EC' },
  { text: 'A new world awaits us...', color: '#3A86FF' }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentDidMount() {
    await Font.loadAsync({
      quicksand: require('../assets/fonts/Quicksand-Regular.ttf')
    });
    console.log('first');
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      // console.log('ping', token);
      this.setState({ token });
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
      // console.log('pong', this.state.token);
    }
  }

  onComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    if (this.state.token === null) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
        </View>
      );
    }
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
