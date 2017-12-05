import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slide}>
          <Text style={styles.slideText}>Map Screen</Text>
        </View>
      </View>
    );
  }
}
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE0B'
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    padding: 20
  },
  slideText: {
    fontSize: 34,
    color: 'white'
  },
  slideButton: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFBE0B'
  },
  slideButtonText: {
    color: '#745705'
  }
});

export default MapScreen;
