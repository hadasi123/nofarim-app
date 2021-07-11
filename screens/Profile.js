import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

import * as strings from "../strings";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>{strings.alerts}</Text>
     
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
