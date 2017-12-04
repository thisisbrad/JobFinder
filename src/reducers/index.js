import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';

const rootReducer = combineReducers({ auth });

export default rootReducer;
