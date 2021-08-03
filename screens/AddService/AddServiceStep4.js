import React from "react";
import { View, StyleSheet, Text} from "react-native";

import store from "../../redux/store";
import * as strings from "../../strings";
import {CommunityIcon, NextIcon } from "../../assets";
import {ServicePicker, ServiceCard} from "../../components";
import Colors from "../../design/colors";
import FontSizes from "../../design/textSizes";

const AddServiceStep4 = (props) => {

  return (
    <View style={styles.input_view_style}>
    <Text style={styles.text_style}>{strings.title_service_publish}</Text>
    <View style = {styles.card_style}>
    <ServiceCard
      title = {"service.title"}
      text={"service.description"}
      icon={<CommunityIcon></CommunityIcon>}
    ></ServiceCard>
    </View>
    <Text style={styles.subtext_style}>{strings.add_service_rules}</Text>
  </View>
  
  );
};

const styles = StyleSheet.create({
 
    base: {
        flex: 1,
        backgroundColor: Colors.dark_purple,
        flexDirection: "column",
      },
      view_style: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      },
      card_style: {
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: 0,
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 15,
      },
      input_view_style: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
      },
      pagerView: {
        flex: 1,
        marginTop: 16,
      },
      text_style: {
        color: Colors.white,
        fontSize: FontSizes.body,
        paddingRight: 16,
        marginBottom: 16,
      },
      subtext_style: {
        color: Colors.white,
        fontSize: FontSizes.caption,
        paddingRight: 16,
        marginBottom: 16,
      },
      short_input: {
        flex: 1,
      },
      long_input: {
        flex: 6,
      },
});

export default AddServiceStep4;