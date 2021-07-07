import "react-native-gesture-handler";
import React, { useEffect } from "react";
import MyNavigation from "./app/MyNavigation";
import RemotePushController from "./firebase/RemotePushController";
import { View, StyleSheet, StatusBar } from "react-native";
import Colors from "./design/colors";

export default function App() {
  return (
    <View style={styles.view_style}>
      <MyNavigation />
      <RemotePushController />
      <StatusBar backgroundColor={Colors.light_purple} />
    </View>
  );
}

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
  },
});
