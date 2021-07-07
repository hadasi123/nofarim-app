import * as Actions from "./actions"


const weatherState = {
    temp: 0,
    decription: "unknown",
  }

function weatherReducer(state = weatherState, action) {
    switch (action.type) {
      case Actions.GET_WEATHER: {
        return Object.assign({}, state, {});
      }
      
      default:
        return state;
    }
  }

  export default weatherReducer;
