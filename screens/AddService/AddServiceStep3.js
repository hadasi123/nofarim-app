import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import * as constants from "../../constants";
import store from "../../redux/store";
import * as strings from "../../strings";
import {InputCard} from "../../components";
import Colors from "../../design/colors";
import FontSizes from "../../design/textSizes";
import PhotosPicker from "../../services/PhotosPicker";

const AddServiceStep3 = (props) => {

const [toggleCheckBox, setToggleCheckBox] = useState(true)

  return (
    <View style={styles.input_view_style}>
    <Text style={styles.text_style}>
      {strings.title_service_contact_details}
    </Text>
    <InputCard
      hint={strings.input_phone_number}
      text={"service.phone"}
      maxCharacters={10}
      parentCallback={props.callbackFunction}
      input_key = {constants.service_phone}>
      {""}
    </InputCard>
    <View style={{flexDirection:"row-reverse", justifyContent:"flex-start", marginHorizontal:10}}>
      <CheckBox style={{alignSelf:"center"}}
      disabled={false}
      tintColors={{true:Colors.white,false:Colors.white}}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
      <Text style={{color:Colors.white, fontFamily:"Assistant-Regular", alignSelf:"center"}}>{strings.whatsapp_msg_checkbox}</Text>
    </View>
    <InputCard
      text={"service.facebook"}
      hint={strings.input_facebook}
      maxCharacters={30}
      parentCallback={props.callbackFunction}
      input_key = {constants.service_facebook}>
      {""}
    </InputCard>
    <InputCard
      hint={strings.input_website}
      text={"service.website"}
      maxCharacters={30}
      parentCallback={props.callbackFunction}
      input_key = {constants.service_website}>
      {""}
    </InputCard>

    <PhotosPicker>
    </PhotosPicker>
    
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

export default AddServiceStep3;