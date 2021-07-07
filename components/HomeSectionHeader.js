import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {MoreIcon,AddIcon} from "../assets";
import Colors from "../design/colors";
import * as strings from "../strings";

const HomeSectionHeader = (props) => {
  const { onPress, title, showMore, add } = props;
  return (
    <TouchableOpacity style={[styles.tableItem]} onPress={onPress}>
      <Text style={styles.title}> {title}</Text>
      {showMore && (
        <View style={styles.show_more}>
          <Text style={styles.sub_title}> {strings.main_see_more}</Text>
          <MoreIcon></MoreIcon>
        </View>
      )}
      {add && (
        <View style={styles.show_more}>
          <Text style={styles.sub_title}> {strings.main_add}</Text>
          <AddIcon></AddIcon>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  tableItem: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row-reverse",
  },
  title: {
    color: Colors.white,
    fontSize: 28,
    fontFamily: "Assistant-Bold",
  },
  sub_title: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: "Assistant-Regular",
    marginHorizontal: 10,
  },
  show_more: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
};

export default HomeSectionHeader;
