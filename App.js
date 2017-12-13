import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Notifications } from 'expo';

import { configureStore } from './src/store';
const { persistor, store } = configureStore();

import registerForNotifications from './src/services/push_notifications';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener(notification => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
      }
    });
  }

  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator(
            {
              map: { screen: MapScreen },
              deck: { screen: DeckScreen },
              review: {
                screen: StackNavigator({
                  review: { screen: ReviewScreen },
                  settings: { screen: SettingsScreen }
                })
              }
            },
            {
              tabBarPosition: 'bottom',
              tabBarOptions: {
                activeTintColor: 'white',
                activeBackgroundColor: '#FFBE0B',
                labelStyle: { fontSize: 14 },
                tabStyle: {
                  padding: 5
                }
              }
            }
          )
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true
      }
    );
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
