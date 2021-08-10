import {LOGIN_SUCCESS, LOGOUT_SUCCESS,GET_UPDATES} from "./actions";

export const initialState={
    loggedIn: false,
    email: "",
    services:[],
    updates:[],
    market_items:[],
    lost_found_items:[],
    weather:"-",
};

const mainReducer = (state=initialState,action) => {
  switch(action.type){
    case LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        email: action.user.email,
        loggedIn: true,
      });
    }
    case LOGOUT_SUCCESS: {
      return Object.assign({}, state, { email: "", loggedIn: false });
    }

    case GET_UPDATES: 
        return{
        ...state,
        updates: action.payload.updates
    }
    default:
        return state;

  }   
}

export default mainReducer;