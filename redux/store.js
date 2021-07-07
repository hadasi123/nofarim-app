import { createStore, combineReducers  } from "redux";
import {authReducer, serviceReducer, weatherReducer} from "../redux"

export default createStore(combineReducers({ authReducer, serviceReducer, weatherReducer }))
