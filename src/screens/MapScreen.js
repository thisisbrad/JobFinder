import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  state = {
    region: {
      latitude: 28.608557921584186,
      latitudeDelta: 0.24148910840551352,
      longitude: -81.3686215505004,
      longitudeDelta: 0.24107560515403748
    }
  };

  onRegionChangeComplete = region => {
    console.log('moved here ', region);
    this.setState({ region });
  };

  mapStyle = [
    { featureType: 'water', stylers: [{ color: '#19a0d8' }] },
    {
      featureType: 'administrative',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#ffffff' }, { weight: 6 }]
    },
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#e85113' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#efe9e4' }, { lightness: -40 }]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#efe9e4' }, { lightness: -20 }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [{ lightness: 100 }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ lightness: -100 }]
    },
    { featureType: 'road.highway', elementType: 'labels.icon' },
    {
      featureType: 'landscape',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'landscape',
      stylers: [{ lightness: 20 }, { color: '#efe9e4' }]
    },
    { featureType: 'landscape.man_made', stylers: [{ visibility: 'off' }] },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ lightness: 100 }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ lightness: -100 }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ hue: '#11ff00' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [{ lightness: 100 }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [{ hue: '#4cff00' }, { saturation: 58 }]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ visibility: 'on' }, { color: '#f0e4d3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{ color: '#efe9e4' }, { lightness: -25 }]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [{ color: '#efe9e4' }, { lightness: -10 }]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'simplified' }]
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={this.mapStyle}
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
