import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';

export default function Updates () {

  //const db = firebase.firestore().settings({ experimentalForceLongPolling: true });
  const updatesCollection = firebase.firestore().collection('updates');
  const [updates,setUpdates] = useState([])
  const [activeSections, setActiveSections] = useState([])
  const newUpdates = []

  useEffect(() => {
    updatesCollection.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          setUpdates ( [...newUpdates,doc.data()]);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }, [])
     
  const _renderSectionTitle = section => {
    return (
      <View >
      </View>
    );
  };
     
  const _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text> {section.date} </Text> 
      </View>
    );
  };
     
  const _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>{section.content}</Text>
      </View>
    );
  };
     
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _setUpdates = updates => {
    setUpdates(updates);
  };

  return (
    <ScrollView >{updates &&
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
  );
}

const styles = StyleSheet.create({
    content: {
      justifyContent: 'center',
      marginStart: 20,
      marginEnd: 20,
      paddingStart: 10,
      paddingEnd:10,
      backgroundColor:'yellow',
    },
    header: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,

    },
  });