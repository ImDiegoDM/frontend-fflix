import { combineReducers } from 'redux';

import user from './userReducer.js';
import login from './loginReducer.js'

export default combineReducers({
  user,login
})
