import * as Actions from "./actions"

const serviceState = {

}

function serviceReducer(state = serviceState, action) {
    switch (action.type) {
      case Actions.ADD_SERVICE: {
        return Object.assign({}, state, {});
      }
      case Actions.GET_SERVICE: {
        return Object.assign({}, state, {});
      }
      default:
        return state;
    }
  }

  export default serviceReducer;
