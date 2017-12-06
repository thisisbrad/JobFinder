import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('JEEZ', nextProps, this.props.jobs);
    console.log('NO WAY', this.props.jobs);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck Screen</Text>
        <Text>{console.log('jobs', this.props.jobs)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8338EC'
  },
  map: {
    flex: 1
  },
  searchArea: {
    position: 'absolute',
    margin: 20,
    bottom: 0,
    left: 0,
    right: 0
  },
  searchButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFBE0B'
  },
  searchButtonText: { color: '#745705' }
});

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);
