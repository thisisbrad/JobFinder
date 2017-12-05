import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

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

  // mapStyle = [
  //   {
  //     featureType: 'all',
  //     elementType: 'geometry',
  //     stylers: [{ color: '#63b5e5' }]
  //   },
  //   {
  //     featureType: 'all',
  //     elementType: 'geometry.fill',
  //     stylers: [{ color: '#ffbb00' }]
  //   },
  //   {
  //     featureType: 'all',
  //     elementType: 'labels.text.fill',
  //     stylers: [{ gamma: 0.01 }, { lightness: 20 }]
  //   },
  //   {
  //     featureType: 'all',
  //     elementType: 'labels.text.stroke',
  //     stylers: [
  //       { saturation: -31 },
  //       { lightness: -33 },
  //       { weight: 2 },
  //       { gamma: 0.8 }
  //     ]
  //   },
  //   {
  //     featureType: 'all',
  //     elementType: 'labels.icon',
  //     stylers: [{ visibility: 'off' }]
  //   },
  //   {
  //     featureType: 'administrative.neighborhood',
  //     elementType: 'labels.text.fill',
  //     stylers: [
  //       { visibility: 'on' },
  //       { color: '#eca128' },
  //       { lightness: '-23' }
  //     ]
  //   },
  //   {
  //     featureType: 'administrative.neighborhood',
  //     elementType: 'labels.text.stroke',
  //     stylers: [{ color: '#ffbb00' }]
  //   },
  //   {
  //     featureType: 'landscape',
  //     elementType: 'geometry',
  //     stylers: [{ lightness: 30 }, { saturation: 30 }]
  //   },
  //   {
  //     featureType: 'landscape',
  //     elementType: 'geometry.fill',
  //     stylers: [{ visibility: 'on' }, { color: '#ffbb00' }]
  //   },
  //   {
  //     featureType: 'poi',
  //     elementType: 'geometry',
  //     stylers: [{ saturation: 20 }, { visibility: 'off' }]
  //   },
  //   {
  //     featureType: 'poi.park',
  //     elementType: 'geometry',
  //     stylers: [{ lightness: 20 }, { saturation: -20 }]
  //   },
  //   {
  //     featureType: 'poi.park',
  //     elementType: 'labels.text.fill',
  //     stylers: [{ visibility: 'off' }]
  //   },
  //   {
  //     featureType: 'poi.park',
  //     elementType: 'labels.text.stroke',
  //     stylers: [{ visibility: 'off' }]
  //   },
  //   {
  //     featureType: 'road',
  //     elementType: 'geometry',
  //     stylers: [{ lightness: 10 }, { saturation: -30 }]
  //   },
  //   {
  //     featureType: 'road',
  //     elementType: 'geometry.fill',
  //     stylers: [{ color: '#eca128' }, { weight: '1.01' }, { lightness: '-10' }]
  //   },
  //   {
  //     featureType: 'road',
  //     elementType: 'geometry.stroke',
  //     stylers: [{ saturation: 25 }, { lightness: 25 }, { visibility: 'off' }]
  //   },
  //   {
  //     featureType: 'road',
  //     elementType: 'labels.text.fill',
  //     stylers: [{ color: '#eca128' }, { lightness: '-63' }]
  //   },
  //   {
  //     featureType: 'road',
  //     elementType: 'labels.text.stroke',
  //     stylers: [{ visibility: 'on' }, { color: '#ffbb00' }]
  //   },
  //   {
  //     featureType: 'transit.line',
  //     elementType: 'geometry.fill',
  //     stylers: [{ visibility: 'on' }, { hue: '#ffbb00' }, { lightness: '64' }]
  //   },
  //   { featureType: 'water', elementType: 'all', stylers: [{ lightness: -20 }] },
  //   {
  //     featureType: 'water',
  //     elementType: 'geometry.fill',
  //     stylers: [{ color: '#0093ba' }]
  //   }
  // ];

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          // onRegionChangeComplete={this.onRegionChangeComplete}
          // customMapStyle={this.mapStyle}
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
