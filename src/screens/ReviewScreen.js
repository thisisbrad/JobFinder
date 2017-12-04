import React, { Component } from 'react';
import { Text, View, Button, Platform } from 'react-native';

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
      //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });
  render() {
    return (
      <View>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
