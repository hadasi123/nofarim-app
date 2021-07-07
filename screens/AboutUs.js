import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as strings from "../strings";
import {BasicTop} from "../components";
import UpdatesIcon from "../assets/updates_icon.svg";
import Colors from "../design/colors";
import * as constants from "../constants";

const AboutUs = (props) => {
  return (
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(constants.screen_main)}
      >
        <BasicTop
          title={strings.main_about_us}
          icon={<UpdatesIcon></UpdatesIcon>}
        />
      </TouchableWithoutFeedback>

      <View style={styles.view_style}>
        <Text style={styles.text_style}>{strings.contact_us_content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.dark_purple,
  },
  text_style: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Assistant-Regular",
    color: Colors.white,
  },
  view_style: {
    flex: 1,
    margin: 30,
  },
});

export default AboutUs;