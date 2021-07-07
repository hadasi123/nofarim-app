import AsyncStorage from "@react-native-async-storage/async-storage";
import * as constants from "../constants";

 export const storeServiceKeyValue = async (input_key, value) => {
        try {
          await AsyncStorage.setItem(input_key, value)
          //console.log('item is saved: ', input_key , " : ", value)
        } catch (e) {
          // saving error
        }
      }

export const getServiceKeyValue = async (input_key) => {
        try {
          const value = await AsyncStorage.getItem(input_key)
          //console.log("getServiceKeyValue: "+ input_key + "  value: " +value)

          if(value !== null) {
            return value;
          }
        } catch(e) {
          // error reading value
          return "";
        }
      }

export const clearData = () => {
  AsyncStorage.removeItem(constants.service_category)
  AsyncStorage.removeItem(constants.service_title)
  AsyncStorage.removeItem(constants.service_description)
  AsyncStorage.removeItem(constants.service_phone)
  AsyncStorage.removeItem(constants.service_facebook)
  AsyncStorage.removeItem(constants.service_website)

}