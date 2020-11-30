import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUs from '../screens/ContactUs';
import Home from '../screens/Home';
import Events from '../screens/Events';
import HazardAlert from '../screens/HazardAlert';
import Proffessaionals from '../screens/proffessionals/Proffessionals';
import ListOfProffessionals from '../screens/proffessionals/ListOfProffessionals';
import Settings from '../screens/Settings';
import Updates from '../screens/Updates';

const RootStack = createStackNavigator();
 
const MyNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="תפריט ראשי" component={Home} />
        <RootStack.Screen name="צור קשר" component={ContactUs} />
        <RootStack.Screen name="לוח אירועים" component={Events} />
        <RootStack.Screen name="דיווח על מפגע" component={HazardAlert} />
        <RootStack.Screen name="בעלי מקצוע" component={Proffessaionals} />
        <RootStack.Screen name="הגדרות" component={Settings} />
        <RootStack.Screen name="עדכוני מינהלת השכונה" component={Updates} />
        <RootStack.Screen name="רשימת בעלי מקצוע" 
                          component={ListOfProffessionals}
                          options={({ route }) => ({ title: route.params.category })}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default MyNavigation;