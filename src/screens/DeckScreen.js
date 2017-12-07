import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Swipe from '../components/Swipe';

import * as actions from '../actions';

import { mapStyle } from '../config';

class DeckScreen extends Component {
  renderCard = job => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <View style={styles.card} key={job.jobkey}>
        <View style={styles.mapContainer}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            style={styles.map}
            scrollEnabled={false}
            cacheEnabled={true}
            initialRegion={initialRegion}
          />
        </View>
        <Text style={styles.jobTitle}> {job.jobtitle} </Text>
        <View style={styles.jobDetails}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text style={styles.jobDescription}>
          {job.snippet.replace(/<\/*b>/g, '')}
        </Text>
      </View>
    );
  };

  renderNoMoreCards = () => {
    return (
      <View style={styles.card}>
        <Text>No More Cards!!</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="jobkey"
        />
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
    margin: 20,
    padding: 12,
    backgroundColor: '#FFBE0B'
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#FFD563',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    // elevation: 1
  },
  map: {
    flex: 1
  },
  mapContainer: {
    height: 300
  },
  jobTitle: { fontFamily: 'quicksand' },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  jobDescription: {
    fontFamily: 'quicksand',
    color: 'white'
  }
});

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);
