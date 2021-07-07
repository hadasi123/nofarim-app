import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import store from "../authStore";
import * as constants from "../constants";
import * as colors from "../design/colors"

const Splash = (props) => {
  useEffect(() => {
    if (store.getState().loggedin) {
      props.navigation.navigate(constants.screen_main);
    } else {
      props.navigation.navigate(constants.screen_login);
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

export default Splash;
