import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Linking,
  Platform
} from 'react-native';
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
      // If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  renderLikedJobs = () => {
    return this.props.likes.map(job => {
      const { jobkey, company, formattedRelativeTime, url } = job;

      return (
        <View style={styles.card} key={jobkey}>
          <View style={styles.jobDetails}>
            <Text>{company}</Text>
            <Text>{formattedRelativeTime}</Text>
          </View>
          <Button
            style={styles.jobButton}
            title="Settings"
            onPress={() => Linking.openURL(url)}
          />
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
    margin: 20,
    padding: 12
  },
  card: {
    flex: 1,
    margin: 20,
    padding: 12,
    backgroundColor: '#FFBE0B'
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  jobButton: {
    backgroundColor: 'white'
  }
});

function mapStateToProps(state) {
  return { likes: state.likes };
}

export default connect(mapStateToProps)(ReviewScreen);
