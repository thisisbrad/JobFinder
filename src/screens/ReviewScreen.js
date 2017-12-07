import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

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
      <View style={styles.container}>
        <Text>Review Screen</Text>
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
    margin: 20,
    padding: 12
  }
});

function mapStateToProps(state) {
  return { likes: state.likes };
}

export default connect()(ReviewScreen);
