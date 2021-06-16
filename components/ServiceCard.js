import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Colors from "../design/colors";

const ServiceCard = (props) => {
  const { title, icon, text } = props;

  return (
    <View style={styles.base_style}>
      <View style={styles.header}>
        {icon}
        <Text style={styles.title}> {title}</Text>
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = {
  base_style: {
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row-reverse",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "Assistant-Regular",
  },

  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "Assistant-Regular",
  },
};

export default ServiceCard;
