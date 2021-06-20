import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../design/colors";

const BasicActionButton = (props) => {
  const { onPress, title, icon, disabled } = props;
  return (
    <TouchableOpacity
      style={
        disabled ? [styles.button_view, { opacity: 0.5 }] : styles.button_view
      }
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
      <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button_view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: 120,
    height: 70,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "Assistant-Bold",
    padding: 16,
    textAlign: "center",
  },
};

export default BasicActionButton;
