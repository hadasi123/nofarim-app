import React,  { useRef,useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';
import BasicTop from '../components/BasicTop';
import * as constants from '../constants';
import store from '../authStore';
import * as strings from '../strings';
import CommunityIcon from '../assets/community_icon.svg';
import NextIcon from '../assets/next.svg';
import ServicePicker from '../components/ServicePicker';
import Colors from '../design/colors';
import FontSizes from '../design/textSizes';
import BasicActionButton from '../components/BasicActionButton';
import PagerView from 'react-native-pager-view';
import InputCard from '../components/InputCard'

const AddService = (props) => {

  const [nextEnabled, setNextEnabled] = useState(false);
  const pagerView = useRef(null)
  const onNextClicked = () => {
    pagerView.current.setPage(0)
  }

  const professionalsCollection = firebase.firestore().collection('professionals');
  //const userID = props.extraData.id
  const addService = async () => {
        try{
          const timestamp = firebase.firestore.FieldValue.serverTimestamp();
          const user = store.getState()
          console.log("user: ", user);
          const email = user.email
          const data = {
              category:'טיפוח', title:'טיפולי פנים',description:'בואי להתפנק',
              content:'כל סוגי הפילינג וטיפולי העור המתקדמים בעולם',
              name:'אורנה נהוראי',phone:'06673543',instagram:'',facebook:'',
              userID:email,
              createdAt: timestamp,
          };
          professionalsCollection
              .add(data)
        }
        catch(error) {
            console.log("Error adding documents: ", error);
        };
  }
      
    return (
    <View style={styles.base}>

      <TouchableWithoutFeedback onPress= {()=>props.navigation.navigate(constants.screen_main)}>
        <BasicTop 
          title={strings.screen_add_service}
          icon ={<CommunityIcon></CommunityIcon>}/>
      </TouchableWithoutFeedback>

      <PagerView style={styles.pagerView} initialPage={2} ref={pagerView}>
      <View key="1" style={styles.input_view_style}>
          <Text style = {styles.text_style}>{strings.title_service_contact_details}</Text>
          <InputCard hint={strings.input_phone_number} maxCharacters={10}> </InputCard>
          <InputCard hint={strings.input_facebook} maxCharacters={30}> </InputCard>
          <InputCard hint={strings.input_website} maxCharacters={30}> </InputCard>
        </View>
        
        <View key="2" style={styles.input_view_style}>
          <Text style = {styles.text_style}>{strings.sub_service_name}</Text>
          <InputCard  
            inputStyle={styles.short_input}
            hint={strings.hint_short_text_allowed}
            maxCharacters={50}> </InputCard>
          <Text style = {styles.text_style}>{strings.sub_service_description}</Text>
          <InputCard
            inputStyle={styles.long_input}
            hint={strings.hint_long_text_allowed}
            maxCharacters={250}></InputCard>
        </View>

        <View key="3" style={styles.view_style}>
          <Text style = {styles.text_style}>{strings.title_service_type}</Text>
          <ServicePicker></ServicePicker>
        </View>
        
      </PagerView >

      <BasicActionButton
        title={strings.next}
        onPress={onNextClicked}
        icon = {<NextIcon></NextIcon>}
        disabled = {!nextEnabled}>
      </BasicActionButton>

    </View>
    ); 
  }

  const styles = StyleSheet.create({
    base: {
      flex:1,
      backgroundColor:Colors.dark_purple,
      flexDirection:'column',
    },
    view_style: {
      flex: 1,
      flexDirection:'column',
      justifyContent:'center',
    },
    input_view_style: {
      flex: 1,
      
      flexDirection:'column',
      justifyContent:'flex-start',
    },
    pagerView: {
      flex: 1,
      marginTop:16,
    },
    text_style: {
      color: Colors.white,
      fontSize: FontSizes.body,
      paddingRight: 16,
    },
    short_input:{
      flex:1
    },
    long_input: {
      flex:6,
    },

});

export default AddService;