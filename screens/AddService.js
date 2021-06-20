import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { firebase } from "../firebase/config";
import BasicTop from "../components/BasicTop";
import * as constants from "../constants";
import store from "../authStore";
import * as strings from "../strings";
import CommunityIcon from "../assets/community_icon.svg";
import NextIcon from "../assets/next.svg";
import ServicePicker from "../components/ServicePicker";
import ServiceCard from "../components/ServiceCard";
import Colors from "../design/colors";
import FontSizes from "../design/textSizes";
import BasicActionButton from "../components/BasicActionButton";
import PagerView from "react-native-pager-view";
import InputCard from "../components/InputCard";
import * as ServiceData from "../storage/serviceData";

const AddService = (props) => {

  const [service,setService] = useState({})
  const [nextEnabled, setNextEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const pagerView = useRef(null);

  useEffect(() => {
    let {type, title, description, phone, facebook, website} = service

    async function checkData() {
      type = await ServiceData.getServiceKeyValue(constants.service_type)
      title = await ServiceData.getServiceKeyValue(constants.service_title)
      description = await ServiceData.getServiceKeyValue(constants.service_description)
      phone = await ServiceData.getServiceKeyValue(constants.service_phone)
      facebook = await ServiceData.getServiceKeyValue(constants.service_facebook)
      website = await ServiceData.getServiceKeyValue(constants.service_website)
      setService({type, title, description, phone, facebook, website});
    }
    checkData();

  },[currentPage])


  useEffect(() => {
  const backAction = () => {
      backNavigation()
      return true;
  };
  const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);
  return () => backHandler.remove();
  }, [currentPage,pagerView]);


  const backNavigation = ()=> {
    if(currentPage===3){
      props.navigation.navigate(constants.screen_main)
    }
    else{
    setCurrentPage(3);
    pagerView.current.setPage(3);
    setNextEnabled(true);
    }
  }

  const callbackFunction = (input_key, text) => {
    setNextEnabled(true);
    ServiceData.storeServiceKeyValue(input_key, text)
  };


  const onNextClicked = () => {
    console.log("current page: "+currentPage)

    switch(currentPage){
      case 0:
        ServiceData.clearData();
        props.navigation.navigate(constants.screen_main);
        break;
      case 1:
        pagerView.current.setPage(currentPage - 1);
        setCurrentPage(currentPage - 1);
        break;
      case 2:
        pagerView.current.setPage(currentPage - 1);
        setCurrentPage(currentPage - 1);
        if(service.phone===undefined || service.phone==="")
        {
          setNextEnabled(false);
        }
        break;
      default:
        pagerView.current.setPage(currentPage - 1);
        setCurrentPage(currentPage - 1);
        console.log(service.title)

        if(service.title===undefined || service.title==="")
        {

          setNextEnabled(false);
        }
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
      console.log("user: ", user);
      const email = user.email;
      const data = {
        /*category: ServiceData.getServiceKeyValue(),
        title: ServiceData.getServiceTitle(),
        description: ServiceData.getServiceDescription(),
        phone: ServiceData.getServicePhone(),
        facebook: ServiceData.getServiceFacebook(),
        website: ServiceData.getServiceWebsite(),
        userID: email,
        createdAt: timestamp,*/
      };
      professionalsCollection.add(data);
    } catch (error) {
      console.log("Error adding documents: ", error);
    }
  };

  return (
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
        onPageSelected={(e) => {
          setCurrentPage(e.nativeEvent.position);
        }}
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
            maxCharacters={10}
            parentCallback={callbackFunction}
            input_key = {constants.service_phone}>
            {""}
          </InputCard>
          <InputCard
            hint={strings.input_facebook}
            maxCharacters={30}
            parentCallback={callbackFunction}
            input_key = {constants.service_facebook}>
            {""}
          </InputCard>
          <InputCard
            hint={strings.input_website}
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
            input_key = {constants.service_type}>
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
    marginEnd: 20,
    marginStart: 20,
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