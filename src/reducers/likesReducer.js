import _ from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      console.log('REALLY???', action);
      return action.payload.likes || [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
