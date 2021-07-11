import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {AboutUs,
        Main,
        HazardAlert, 
        MarketPlace, 
        ServicesList, 
        Profile, 
        Updates,
        Login,
        Splash,
        Info,
        PrivacyPolicy,
        LostAndFounds,
        AddService } from "../screens";

import * as constants from "../constants";
import { StyleSheet } from "react-native";

const RootStack = createStackNavigator();

const MyNavigation = () => {
  return (
    <NavigationContainer style={styles.view_style}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={constants.screen_splash}
          component={Splash}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_login}
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_main}
          component={Main}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_about}
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_info}
          component={Info}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_privacy}
          component={PrivacyPolicy}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_hazard_report}
          component={HazardAlert}
        />
        <RootStack.Screen
          name={constants.screen_lost_and_founds}
          component={LostAndFounds}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_giveaways}
          component={MarketPlace}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_profile}
          component={Profile}
        />
        <RootStack.Screen
          name={constants.screen_updates}
          component={Updates}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name={constants.screen_add_service}
          component={AddService}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={constants.screen_list_pros}
          component={ServicesList}
          options={({ route }) => ({
            title: route.params.category,
            headerShown: false,
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
  },
});

export default MyNavigation;