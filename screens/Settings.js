import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import * as strings from "../strings";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>{strings.alerts}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={{ false: "#f5dd4b", true: "#f4f3f4" }}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={toggleSwitch}
        value={true}
      />
    </View>
  );
};

//const toggleSwitch = () => {isEnabled = !isEnabled};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
