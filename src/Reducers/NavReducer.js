import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../AppNavigator'
import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  START_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../Actions/type'

// this inital state is very necessary, this determine the inital screen(s) of the navigator
const firstAction = AppNavigator.router.getActionForPathAndParams('Login')
const INITIAL_NAV_STATE = AppNavigator.router.getStateForAction(firstAction)

const NavReducer = (state=INITIAL_NAV_STATE, action) => {
  let nextState
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Employee'}),
        state
      )
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }
  return nextState || state
}

export default NavReducer
