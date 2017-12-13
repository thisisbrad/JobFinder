import _ from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    // case REHYDRATE:
    //   console.log('trigger', action);
    //   return action.payload || [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
