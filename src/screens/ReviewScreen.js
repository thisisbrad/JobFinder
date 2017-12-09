import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Platform
} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import { mapStyle } from '../config';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    ),
    headerStyle: {
      // If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  renderLikedJobs = () => {
    return this.props.likes.map(job => {
      const {
        jobkey,
        jobtitle,
        company,
        formattedRelativeTime,
        url,
        latitude,
        longitude
      } = job;

      const initialRegion = {
        longitude: longitude,
        latitude: latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };

      const latlng = {
        latitude,
        longitude
      };

      return (
        <View style={styles.card} key={jobkey}>
          {/* 
              Custom maps not loading correctly right now
              it's not the custom map JSON loading, 
              it's when you turn on the provider,
              it just looks at the ocean
              provider={MapView.PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
          */}
          <MapView
            customMapStyle={mapStyle}
            style={styles.map}
            scrollEnabled={false}
            cacheEnabled={true}
            initialRegion={initialRegion}
          >
            <MapView.Marker coordinate={latlng} pinColor="#8338EC" />
          </MapView>
          <View style={styles.jobDetails}>
            <Text>{company}</Text>
            <Text>{formattedRelativeTime}</Text>
          </View>
          <TouchableOpacity
            style={styles.jobButton}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.jobButtonText}>Apply to Job</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderLikedJobs()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A86FF'
  },
  jobs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 12
  },
  card: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 12,
    height: 240,
    backgroundColor: '#FFBE0B'
  },
  map: {
    flex: 1
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  jobButton: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  jobButtonText: {
    color: '#3A86FF',
    fontFamily: 'quicksand'
  }
});

function mapStateToProps(state) {
  return { likes: state.likes };
}

export default connect(mapStateToProps)(ReviewScreen);
