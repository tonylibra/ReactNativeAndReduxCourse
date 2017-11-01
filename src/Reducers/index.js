// @flow

import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer'
import { combineReducers } from 'redux';

// every reducer's name is state email. so here, the new state returned from
// authReducer is state.auth
const reducers = combineReducers({
  auth: AuthReducer,
  nav: NavReducer
})


export default reducers
