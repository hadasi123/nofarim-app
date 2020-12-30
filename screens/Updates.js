import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';
import BasicTop from '../components/BasicTop';
import UpdatesIcon from '../assets/updates_icon.svg';
import AlertIcon from '../assets/alert_icon.svg';
import * as Strings from '../strings';
import BasicCard from '../components/BasicCard';

const Updates = () => {

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
     
  const _renderSectionTitle = section => {
    return (
      <View >
      </View>
    );
  };
     
  const _renderHeader = section => {
    return (
      <BasicCard
        date= {section.date}
        title = {section.title}
        icon = {AlertIcon}
        text = {section.content}/>
    );
  };
     
  const _renderContent = section => {
    return (
      <BasicCard
        text = {section.content}/>
    );
  };
     
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _setUpdates = updates => {
    setUpdates(updates);
  };

  return (
    <View style={styles.base}>

      <View >
        <BasicTop 
          title={Strings.menu_updates}
          icon ={<UpdatesIcon></UpdatesIcon>}
          />
      </View>

      <ScrollView style={styles.view_style}>
        {updates &&
        <Accordion 
          sections={updates}
          activeSections={activeSections}
          renderSectionTitle={_renderSectionTitle}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
          expandMultiple={true}
          touchableComponent={TouchableOpacity}  
        />}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  base: {
    flex:1,
    backgroundColor:Colors.dark_purple
  },

  view_style: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:Colors.dark_purple,
    marginTop:16,
  },

  back_button: {
    position: 'absolute',
    alignSelf:'flex-start',
  },
});

export default Updates;