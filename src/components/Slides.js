import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Font } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide, index) => (
      <View
        style={[styles.slide, { backgroundColor: slide.color }]}
        key={index}
      >
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  }
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <TouchableOpacity
          style={styles.slideButton}
          onPress={this.props.onComplete}
        >
          <Text style={styles.slideButtonText}>Sign Up!</Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <ScrollView style={styles.container} horizontal pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

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
    // fontFamily: 'quicksand',
    color: 'white'
  },
  slideButton: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFBE0B'
  },
  slideButtonText: {
    // fontFamily: 'quicksand',
    color: '#745705'
  }
});

export default Slides;
