import { createStore, combineReducers  } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {authReducer, serviceReducer, weatherReducer} from "../redux"


const store = createStore(combineReducers({ authReducer, serviceReducer, weatherReducer }),applyMiddleware(thunk));
export default store;
