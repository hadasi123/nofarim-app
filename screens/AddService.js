import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard, TouchableWithoutFeedback as RNTouchable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import * as ServiceData from "../storage/serviceData";
import { firebase } from "../firebase/config";
import * as constants from "../constants";
import store from "../authStore";
import * as strings from "../strings";
import {CommunityIcon, NextIcon } from "../assets";
import {ServicePicker, ServiceCard, InputCard, BasicActionButton, BasicTop} from "../components";
import Colors from "../design/colors";
import FontSizes from "../design/textSizes";

const AddService = (props) => {

  const [service,setService] = useState({})
  const [nextEnabled, setNextEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const pagerView = useRef(null);

  useEffect(() => {
    let {category, title, description, phone, facebook, website} = service

    async function checkData() {
      category = await ServiceData.getServiceKeyValue(constants.service_category)
      title = await ServiceData.getServiceKeyValue(constants.service_title)
      description = await ServiceData.getServiceKeyValue(constants.service_description)
      phone = await ServiceData.getServiceKeyValue(constants.service_phone)
      facebook = await ServiceData.getServiceKeyValue(constants.service_facebook)
      website = await ServiceData.getServiceKeyValue(constants.service_website)
      setService({category, title, description, phone, facebook, website});
      console.log("***service data: "+category+" "+title+" "+description+" "+phone+" "+facebook+" "+website+"***")
    }
    checkData();
    pagerView.current.setPage(currentPage)

  },[currentPage])

  useEffect(() => {
  const backAction = () => {
      backNavigation()
      return true;
  };

  const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);
  return () => backHandler.remove();
  }, [currentPage]);


  const backNavigation = ()=> {
    if(currentPage===3){
      props.navigation.navigate(constants.screen_main)
    }
    else{
    setCurrentPage(3);
    }
  }

  const callbackFunction = (input_key, text) => {
    if(text!==undefined){
    setNextEnabled(true);
    console.log("callbackFunction: "+input_key+" text: "+text)
    ServiceData.storeServiceKeyValue(input_key, text)
    }
  };

  const onNextClicked = () => {
    console.log("current page: "+currentPage)

    switch(currentPage){
      case 0:
        ServiceData.clearData();
        props.navigation.navigate(constants.screen_main);
        addService();
        break;
      case 1:
        setNextEnabled(true)
        setCurrentPage(currentPage - 1);
        break
      default:
        setNextEnabled(false);
        setCurrentPage(currentPage - 1);
        break;
    }
  };

  const professionalsCollection = firebase
    .firestore()
    .collection("professionals");
  //const userID = props.extraData.id
  const addService = async () => {
    try {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const user = store.getState();
      const email = user.email;
      let {category, title, description, phone, facebook, website} = service
      const data = {category,title,description,phone,facebook,website,
        userID: email,
        createdAt: timestamp,
      };
      professionalsCollection.add(data);
      console.log("professionalsCollection: ", data);

    } catch (error) {
      console.log("Error adding documents: ", error);
    }
  };

  return (
    <RNTouchable onPress={Keyboard.dismiss}>
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => backNavigation()}>
        <BasicTop
          title={strings.screen_add_service}
          icon={<CommunityIcon></CommunityIcon>}
        />
      </TouchableWithoutFeedback>

      <PagerView
        style={styles.pagerView}
        initialPage={3}
        ref={pagerView}
        showPageIndicator = {false}
        scrollEnabled={false}  
      >
        <View key="1" style={styles.input_view_style}>
          <Text style={styles.text_style}>{strings.title_service_publish}</Text>
          <View style = {styles.card_style}>
          <ServiceCard
            title = {service.title}
            text={service.description}
            icon={<CommunityIcon></CommunityIcon>}
          ></ServiceCard>
          </View>
        </View>

        <View key="2" style={styles.input_view_style}>
          <Text style={styles.text_style}>
            {strings.title_service_contact_details}
          </Text>
          <InputCard
            hint={strings.input_phone_number}
            text={service.phone}
            maxCharacters={10}
            parentCallback={callbackFunction}
            input_key = {constants.service_phone}>
            {""}
          </InputCard>
          <InputCard
            text={service.facebook}
            hint={strings.input_facebook}
            maxCharacters={30}
            parentCallback={callbackFunction}
            input_key = {constants.service_facebook}>
            {""}
          </InputCard>
          <InputCard
            hint={strings.input_website}
            text={service.website}
            maxCharacters={30}
            parentCallback={callbackFunction}
            input_key = {constants.service_website}>
            {""}
          </InputCard>
        </View>

        <View key="3" style={styles.input_view_style}>
          <Text style={styles.text_style}>{strings.sub_service_name}</Text>
          <InputCard
            inputStyle={styles.short_input}
            hint={strings.hint_short_text_allowed}
            text={service.title}
            maxCharacters={50}
            parentCallback={callbackFunction}
            input_key = {constants.service_title}>
            {""}
          </InputCard>
          <Text style={styles.text_style}>
            {strings.sub_service_description}
          </Text>
          <InputCard
            inputStyle={styles.long_input}
            text={service.description}
            hint={strings.hint_long_text_allowed}
            maxCharacters={250}
            parentCallback={callbackFunction}
            input_key = {constants.service_description}>
            {""}
            </InputCard>
        </View>

        <View key="4" style={styles.view_style}>
          <Text style={styles.text_style}>{strings.title_service_type}</Text>
          <ServicePicker
            parentCallback={callbackFunction}
            input_key = {constants.service_category}>
          </ServicePicker>
        </View>
      </PagerView>

      <BasicActionButton
        title={currentPage===0? strings.publish : strings.next}
        onPress={() => onNextClicked()}
        icon={<NextIcon></NextIcon>}
        disabled={!nextEnabled}
      ></BasicActionButton>
    </View>
    </RNTouchable>
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
  short_input: {
    flex: 1,
  },
  long_input: {
    flex: 6,
  },
});

export default AddService;