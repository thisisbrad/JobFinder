import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { mapStyle } from '../config';

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  onRegionChangeComplete = region => {
    console.log('moved here ', region);
    this.setState({ region });

    // AsyncStorage.removeItem('fb_token');
  };

  onJobSearch = async () => {
    await this.props.fetchJobs(this.state.region);
    this.props.navigation.navigate('deck');
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={styles.map}
        />
        <View style={styles.searchArea}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={this.onJobSearch}
          >
            <Ionicons name="md-search" size={22} color="white" />
            <Text style={styles.searchButtonText}>Search Jobs!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE0B'
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
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFBE0B'
  },
  searchButtonText: {
    marginLeft: 10,
    color: '#745705',
    fontFamily: 'quicksand'
  }
});

export default connect(null, actions)(MapScreen);
