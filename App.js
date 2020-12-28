import 'react-native-gesture-handler';
import React from 'react';
import MyNavigation from './app/MyNavigation'
import RemotePushController from './firebase/RemotePushController'
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.view_style}>
          <MyNavigation/>
          <RemotePushController />
    </View>
  );
}

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
  },
});