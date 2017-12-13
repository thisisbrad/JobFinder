import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch action sayin FB auth is done
    console.log('already got: ', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Dispatch action to get token
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '1773862909315353',
    {
      permissions: ['public_profile', 'email']
    }
  );
  console.log('LOGIN REDUX', type, token);

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  const feedback = await AsyncStorage.getItem('fb_token');
  console.log('saved ', feedback);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
