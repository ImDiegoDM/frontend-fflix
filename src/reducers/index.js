import { combineReducers } from 'redux';

import user from './userReducer.js';
import login from './loginReducer.js'
import movies from './movieReducer.js';

export default combineReducers({
  user,login,movies
})
