import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard = job => {
    return (
      <View style={styles.card}>
        <Text> {job.jobTitle} </Text>
        <View>
          <Text>Hey</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Swipe data={this.props.jobs} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8338EC'
  },
  card: {
    flex: 1,
    backgroundColor: '#FFBE0B'
  }
});

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);
