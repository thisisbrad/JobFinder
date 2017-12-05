import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => {
  return async function(dispatch) {
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      // Dispatch action sayin FB auth is done
    } else {
      // Dispatch action to get token
    }
  };
};
