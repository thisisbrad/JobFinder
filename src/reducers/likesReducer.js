import _ from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      // https://github.com/rt2zz/redux-persist/issues/71
      // I feel like this isn't a clean solution
      if (action.payload) {
        console.log('1');
        return action.payload.likes;
      }
      console.log('2');
      return [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
