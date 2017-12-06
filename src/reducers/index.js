import { combineReducers } from 'redux';
import auth from './authReducer';
import jobs from './jobReducer';

const rootReducer = combineReducers({ auth, jobs });

export default rootReducer;
