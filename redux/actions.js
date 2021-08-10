import { firebase } from "../firebase/config";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const ADD_SERVICE = 'ADD_SERVICE';
export const GET_SERVICE = 'GET_SERVICE';
export const UPDATE_SERVICE = "UPDATE_SERVICE";

export const ADD_LOST_FOUND_ITEM = 'ADD_LOST_FOUND_ITEM';
export const GET_LOST_FOUND_ITEMS = 'GET_LOST_FOUND_ITEMS';
export const UPDATE_LOST_FOUND_ITEM = "UPDATE_LOST_FOUND_ITEM";

export const ADD_MARKET_ITEM = 'ADD_MARKET_ITEM';
export const GET_MARKET_ITEMS = 'GET_MARKET_ITEMS';
export const UPDATE_MARKET_ITEM = "UPDATE_MARKET_ITEM";

export const GET_UPDATES = "GET_UPDATES";

export const GET_WEATHER = "GET_WEATHER";

export const getAllUpdates = () => async(dispatch,getState)=>{    
    const updates = await fetchUpdatesFromFirebase()
    updates.sort((updatesA, updatesB) => (updatesA.date < updatesB.date) ? 1 : -1);
    dispatch({
        type:GET_UPDATES,
        payload:updates
    })
}

export const fetchUpdatesFromFirebase = async () => {
    const updatesCollection = firebase.firestore().collection("updates");
    var newUpdates = [];

    try {
          const querySnapshot = await updatesCollection.get();
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            newUpdates = [...newUpdates, doc.data()];
          });      
    } catch (error) {
          console.log("Error getting documents: ", error);
    }

    return newUpdates;
};

export const getAllLostAndFoundItems = () => async (dispatch, getState) => {

}

const fetchLostFoundItemsFromFirebase = async () => {

}

export const getAllMarketItems = () => async (dispatch, getState) => {

}

const fetchMarketItemsFromFirebase = async () => {

}