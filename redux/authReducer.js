import * as Actions from "./actions"

const userState = {
    loggedIn: false,
    email: "",
  };


function authReducer(state = userState, action) {
    switch (action.type) {
      case Actions.LOGIN_SUCCESS: {
        return Object.assign({}, state, {
          email: action.user.email,
          loggedIn: true,
        });
      }
      case Actions.LOGOUT_SUCCESS: {
        return Object.assign({}, state, { email: "", loggedIn: false });
      }
      default:
        return state;
    }
  }

export default authReducer;
