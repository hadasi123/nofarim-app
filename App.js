import "react-native-gesture-handler";
import React from "react";
import MyNavigation from "./app/MyNavigation";
import RemotePushController from "./firebase/RemotePushController";
import { View, StyleSheet, StatusBar } from "react-native";
import Colors from "./design/colors";
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <View style={styles.view_style}>
      <Provider store={store}>
        <MyNavigation />
      </Provider>
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
