import AsyncStorage from "@react-native-async-storage/async-storage";


 export const storeServiceKeyValue = async (input_key, value) => {
        try {
          await AsyncStorage.setItem(input_key, value)
          console.log('item is saved: ', input_key , " : ", value)
        } catch (e) {
          // saving error
        }
      }

export const getServiceKeyValue = async (input_key) => {
        try {
          const value = await AsyncStorage.getItem(input_key)
          if(value !== null) {
            return value;
          }
        } catch(e) {
          // error reading value
          return "6";
        }
      }

