import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {}else{}
};
