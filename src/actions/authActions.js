import { FACEBOOK_LOGIN_SUCCESS } from './types';

// grabbing state in Redux is an anit-pattern. But can be okay with cached data and server requests.
// Dan said it's okay but not the best idea over all.
// So its this way vs storing in AsyncStore.
// redux-persist is saving to AsyncStore already, so I figured this to be the best idea.
// https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
export const facebookLogin = () => {
  return (dispatch, getState) => {
    const { auth } = getState().otherReducer;
    console.log(auth);
    // dispatch();
  };
};
