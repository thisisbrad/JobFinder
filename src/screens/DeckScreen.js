import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

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
          <Text style={styles.jobDetailsText}>{job.company}</Text>
          <Text style={styles.jobDetailsText}>{job.formattedRelativeTime}</Text>
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
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => this.props.navigation.navigate('map')}
        >
          <MaterialIcons name="my-location" size={22} color="white" />
          <Text style={styles.searchButtonText}>Back to Jobs Map</Text>
        </TouchableOpacity>
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
    margin: 20,
    padding: 12,
    backgroundColor: '#FFBE0B'
  },
  map: {
    flex: 1
  },
  mapContainer: {
    height: 300
  },
  jobTitle: {
    color: '#745705',
    fontFamily: 'quicksand',
    fontSize: 18
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  jobDetailsText: {
    color: '#745705',
    fontFamily: 'quicksand'
  },
  jobDescription: {
    fontFamily: 'quicksand',
    color: 'white'
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFBE0B',
    height: 30
  },
  searchButtonText: {
    color: '#745705',
    fontFamily: 'quicksand',
    marginLeft: 10
  }
});

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);
