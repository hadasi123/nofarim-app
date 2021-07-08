import * as Actions from "./actions"

const weatherState = {
    temp: 0,
    description: "loading",
}

function weatherReducer(state = weatherState, action) {
    switch (action.type) {
      case Actions.GET_WEATHER: {

        return Object.assign({}, state, {
            temp: action.payload.temp,
            description:action.payload.description
        });
      }
      
      default:
        return state;
    }
  }

  export default weatherReducer;
