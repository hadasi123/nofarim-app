import { Text, TouchableOpacity } from "react-native";
import Colors from "../design/colors";
import React, { useState } from "react";

const TableItem = (props) => {
  const { onPress, title, icon, pickerMode } = props;
  return (
    <TouchableOpacity
      style={[
        styles.table_item,
        pickerMode ? styles.picker_table_item : styles.table_item,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[styles.text,
          pickerMode ? styles.picker_mode_text : styles.regular_text,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  table_item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    margin:2,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    borderWidth:1,
    borderColor:Colors.white,
  },
  picker_table_item: {
    backgroundColor: Colors.dark_purple,
    
  },
  text: {
    fontSize: 16,
    fontFamily: "Assistant-Regular",
    textAlign: "center",
  },
  regular_text: {
    color: Colors.black,
  },
  picker_mode_text: {
    color: Colors.white,
  },
};

export default TableItem;
