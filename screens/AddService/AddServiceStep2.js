import React from "react";
import { View, StyleSheet, Text} from "react-native";
import * as constants from "../../constants";
import store from "../../redux/store";
import * as strings from "../../strings";
import {CommonInput} from "../../components";
import Colors from "../../design/colors";
import FontSizes from "../../design/textSizes";

const AddServiceStep2 = (props) => {

  return (
    <View style={styles.input_view_style}>
    <Text style={styles.text_style}>{strings.sub_service_name}</Text>
    <CommonInput
      inputStyle={styles.short_input}
      hint={strings.hint_short_text_allowed}
      text={"service.title"}
      maxCharacters={50}
      parentCallback={props.callbackFunction}
      input_key = {constants.service_title}>
      {""}
    </CommonInput>
    <Text style={styles.text_style}>
      {strings.sub_service_description}
    </Text>
    <CommonInput
      inputStyle={styles.long_input}
      text={"service.description"}
      hint={strings.hint_long_text_allowed}
      maxCharacters={250}
      parentCallback={props.callbackFunction}
      input_key = {constants.service_description}>
      {""}
    </CommonInput>
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

export default AddServiceStep2;