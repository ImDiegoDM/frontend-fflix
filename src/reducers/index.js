import { combineReducers } from 'redux';

import user from './userReducer.js';
import login from './loginReducer.js'
import movies from './movieReducer.js';
import register from './registerReducer.js'

export default combineReducers({
  user,login,movies,register
})
