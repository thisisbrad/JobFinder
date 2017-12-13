import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <MaterialIcons name="favorite" size={22} color={tintColor} />;
    }
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jobs}>
          <TouchableOpacity
            style={styles.jobButton}
            onPress={this.props.clearLikedJobs}
          >
            <MaterialIcons name="delete-forever" size={22} color="white" />
            <Text style={styles.jobButtonText}>Clear liked Jobs</Text>
          </TouchableOpacity>
        </View>
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
  jobButton: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFBE0B'
  },
  jobButtonText: {
    color: '#745705',
    fontFamily: 'quicksand'
  }
});

export default connect(null, { clearLikedJobs })(SettingsScreen);
