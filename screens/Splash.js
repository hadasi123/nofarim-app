import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {connect} from 'react-redux';
import * as constants from "../constants";
import * as colors from "../design/colors";

function Splash ({loggedIn, email, navigation}) {
  useEffect(() => {
    if (loggedIn) {
      navigation.navigate(constants.screen_main);
    } else {
      console.log("inside splash "+email)
      navigation.navigate(constants.screen_login);
    }
  }, []);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_purple,
    alignItems: "center",
  },
});

const mapStateToProps = (state,props)=>({
  loggedIn:state.loggedIn,
  email:state.email,
  navigation:props.navigation})

export default connect(mapStateToProps)(Splash);