import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const Updates = () => {

  const updatesCollection = firestore().collection('updates');
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

export default Updates;