import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';
import BasicTop from '../components/BasicTop';
import UpdatesIcon from '../assets/updates_icon.svg';
import AlertIcon from '../assets/alert_icon.svg';
import * as Strings from '../strings';
import BasicCard from '../components/BasicCard';
import * as constants from '../constants';

const Updates = (props) => {

  const updatesCollection = firebase.firestore().collection('updates');
  const [updates,setUpdates] = useState([])
  const [activeSections, setActiveSections] = useState([])
  var newUpdates = []

  useEffect(() => {
    const fetchUpdates = async () => {
      try{
        const querySnapshot = await updatesCollection.get()
        querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
              newUpdates = ( [...newUpdates,doc.data()]);
        });
        _setUpdates(newUpdates)
      }
      catch(error) {
          console.log("Error getting documents: ", error);
      };
    }
    fetchUpdates();
  }, [])
     
  const _renderHeader = section => {
    return (
      <BasicCard
        date= {section.date}
        title = {section.title}
        icon = {<AlertIcon></AlertIcon>}
        text = {section.content}/>
    );
  };
     
  const _renderContent = section => {
    return (<View></View>);
  };
     
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _setUpdates = updates => {
    setUpdates(updates);
  };

  return (
    <View style={styles.base}>

      <TouchableWithoutFeedback onPress= {()=>props.navigation.navigate(constants.screen_main)}>
        <BasicTop 
          title={Strings.menu_updates}
          icon ={<UpdatesIcon></UpdatesIcon>}
          />
      </TouchableWithoutFeedback>

      <ScrollView style={styles.view_style}>
        {updates &&
        <Accordion
          sections={updates}
          activeSections={activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          sectionContainerStyle={styles.section_style}
          onChange={_updateSections}
          expandMultiple={true}
          touchableComponent={TouchableWithoutFeedback}  
        />}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  base: {
    flex:1,
    backgroundColor:Colors.dark_purple,
  },

  view_style: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:Colors.dark_purple,
    marginTop:36,
  },

  icon: {
    width:10,
    height:10,
  },

  section_style: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 0,
    marginEnd:20,
    marginStart:20,
    marginBottom:20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius:15,
  }

});

export default Updates;