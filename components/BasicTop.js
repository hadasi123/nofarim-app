import React from "react";
import { Text, View } from "react-native";
import Colors from "../design/colors";
import {BasicTopSvg, BackIcon} from "../assets";

const BasicTop = (props) => {
  const { title, icon } = props;
  return (
    <View style={styles.basic_top}>
      <BasicTopSvg></BasicTopSvg>
      <BackIcon style={styles.back_button} />
      <View style={styles.header}>
        {icon}
        <Text style={styles.text}> {title}</Text>
      </View>
    </View>
  );
};

const styles = {
  basic_top: {
    flexDirection: "column",
    alignItems: "center",
  },
  back_button: {
    marginTop: 24,
    position: "absolute",
    alignSelf: "flex-end",
  },
  header: {
    position: "absolute",
    marginTop: 48,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: "Assistant-Regular",
  },
};

export default BasicTop;