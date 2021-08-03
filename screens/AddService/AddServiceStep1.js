import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as constants from "../../constants";
import store from "../../redux/store";
import * as strings from "../../strings";
import {ServicePicker} from "../../components";
import Colors from "../../design/colors";
import FontSizes from "../../design/textSizes";

const AddServiceStep1 = (props) => {

  return (
  <View style={styles.view_style}>
        <Text style={styles.text_style}>{strings.title_service_type}</Text>
        <ServicePicker
            parentCallback={props.callbackFunction}
            input_key = {constants.service_category}>
        </ServicePicker>
    </View>
  );
};

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  
  text_style: {
    color: Colors.white,
    fontSize: FontSizes.body,
    paddingRight: 16,
    marginBottom: 16,
  }
});

export default AddServiceStep1;