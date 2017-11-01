// @flow

import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  START_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../Actions/type';

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      }
    case PASSWORD_CHANGED:
        return {
          ...state,
          password: action.payload
        }
    case START_LOGIN_USER:
        return {
          ...state,
          loading: true,
          error: null
        }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
        password: ''
      }
    default:
      return state
  }
}
