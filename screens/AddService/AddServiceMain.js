import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, BackHandler, Keyboard, TouchableWithoutFeedback as RNTouchable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import * as ServiceData from "../../storage/serviceData";
import { firebase } from "../../firebase/config";
import * as constants from "../../constants";
import store from "../../redux/store";
import * as strings from "../../strings";
import {ServicesIcon, NextIcon } from "../../assets";
import {BasicActionButton, BasicTop} from "../../components";
import Colors from "../../design/colors";
import {AddServiceStep1, AddServiceStep2, AddServiceStep3, AddServiceStep4} from "../AddService";

const AddServiceMain = (props) => {

  const [service,setService] = useState({})
  const [nextEnabled, setNextEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const pagerView = useRef(null);

  useEffect(() => {
    let {category, title, description, phone, facebook, website, whatsappEnabled} = service

    async function checkData() {
      category = await ServiceData.getServiceKeyValue(constants.service_category)
      title = await ServiceData.getServiceKeyValue(constants.service_title)
      description = await ServiceData.getServiceKeyValue(constants.service_description)
      phone = await ServiceData.getServiceKeyValue(constants.service_phone)
      facebook = await ServiceData.getServiceKeyValue(constants.service_facebook)
      website = await ServiceData.getServiceKeyValue(constants.service_website)
      whatsappEnabled = await ServiceData.getServiceKeyValue(constants.service_whatsapp)
      setService({category, title, description, phone, facebook, website});
      console.log("***service data: "+category+" "+title+" "+description+" "+phone+" "+facebook+" "+website+" "+whatsappEnabled+"***")
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
      let {category, title, description, phone, facebook, website, whatsappEnabled} = service
      const data = {category,title,description,phone,facebook,website,whatsappEnabled,
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
          icon={<ServicesIcon></ServicesIcon>}
        />
      </TouchableWithoutFeedback>

      <PagerView
        style={styles.pagerView}
        initialPage={3}
        ref={pagerView}
        showPageIndicator = {false}
        scrollEnabled={false}>
          
        <View style={styles.base}>
        <AddServiceStep4  callbackFunction={callbackFunction}></AddServiceStep4>
        </View>
        <View style={styles.base}>
        <AddServiceStep3  callbackFunction={callbackFunction}></AddServiceStep3>
        </View>
        <View style={styles.base}>
        <AddServiceStep2  callbackFunction={callbackFunction}></AddServiceStep2>
        </View>
        <View style={styles.base}>
        <AddServiceStep1 callbackFunction={callbackFunction}></AddServiceStep1>
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
    justifyContent: "center",
  },
  pagerView: {
    flex: 1,
    marginTop: 16,
  },
});

export default AddServiceMain;