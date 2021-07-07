import axios from 'axios';
import {URL} from "../constants";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GET_WEATHER = 'GET_WEATHER';
export const ADD_SERVICE = 'ADD_SERVICE';
export const GET_SERVICE = 'GET_SERVICE';

export const getWeather = () => {
    try {
      return async dispatch => {
        const response = await axios.get(URL);
        if (response.data) {
          dispatch({
            type: Actions.GET_WEATHER,
            payload: response.data
          });
          console.log(response.data);
        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
  