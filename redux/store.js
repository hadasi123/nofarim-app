import { createStore, combineReducers  } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {authReducer, serviceReducer} from "../redux"


const store = createStore(combineReducers({ authReducer, serviceReducer }),applyMiddleware(thunk));
export default store;
