import {combineReducers} from 'redux';
import {UserDataReducer} from './userDataReducer';

const rootReducer = combineReducers({
  UserDataReducer: UserDataReducer,
});

export default rootReducer;
