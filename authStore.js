import { createStore } from "redux";

const defaultState = {
  loggedIn: false,
  email: "",
};

function authStore(state = defaultState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return Object.assign({}, state, {
        email: action.user.email,
        loggedIn: true,
      });
    }
    case "LOGOUT_SUCCESS": {
      return Object.assign({}, state, { email: "", loggedIn: false });
    }
    default:
      return state;
  }
}

export default createStore(authStore);
