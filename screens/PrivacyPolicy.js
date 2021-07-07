import React from "react";
import {StyleSheet } from "react-native";
import Colors from "../design/colors";
import BasicWebView from "../components/BasicWebView";

const PrivacyPolicy = () => {
  return (
    <BasicWebView
      source={{ uri: "https://nofarim.flycricket.io/privacy.html" }}
    ></BasicWebView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  text_style: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Assistant-Regular",
    color: Colors.white,
  },
});
export default PrivacyPolicy;