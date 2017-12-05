import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => {
  return (dispatch, getState) => {
    const { auth } = getState().otherReducer;
    console.log(auth);
    // dispatch();
  };
};
