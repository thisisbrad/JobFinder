import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

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
  }
});

export default MapScreen;
