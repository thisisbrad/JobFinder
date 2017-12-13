import { combineReducers } from 'redux';
import auth from './authReducer';
import jobs from './jobReducer';
import likes from './likesReducer';

const rootReducer = combineReducers({ auth, jobs, likes });

export default rootReducer;
