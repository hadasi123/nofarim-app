import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUs from '../screens/ContactUs';
import Home from '../screens/Home';
import Events from '../screens/Events';
import HazardAlert from '../screens/HazardAlert';
import Proffessaionals from '../screens/professionals/Professionals';
import ListOfProfessionals from '../screens/professionals/ListOfProfessionals';
import Settings from '../screens/Settings';
import Updates from '../screens/Updates';
import * as constants from '../constants';

const RootStack = createStackNavigator();
 
const MyNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={constants.screen_main} component={Home} />
        <RootStack.Screen name={constants.screen_contact_us} component={ContactUs} />
        <RootStack.Screen name={constants.screen_events} component={Events} />
        <RootStack.Screen name={constants.screen_hazard_report} component={HazardAlert} />
        <RootStack.Screen name={constants.screen_main_professionals} component={Proffessaionals} />
        <RootStack.Screen name={constants.screen_settings} component={Settings} />
        <RootStack.Screen name={constants.screen_updates} component={Updates} />
        <RootStack.Screen name={constants.screen_list_pros}
                          component={ListOfProfessionals}
                          options={({ route }) => ({ title: route.params.category })}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default MyNavigation;