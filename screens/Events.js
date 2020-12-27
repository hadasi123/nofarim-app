import React , { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Headline from '../components/Headeline';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';
import * as strings from '../strings';

const Events = () => {

  const eventsCollection = firebase.firestore().collection('events');
  const [events,setEvents] = useState([])
  const [activeSections, setActiveSections] = useState([])
  var newEvents = []

  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const querySnapshot = await eventsCollection.get()
        querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        newEvents = ( [...newEvents,doc.data()]);
        });
        _setEvents(newEvents)
      }
      catch(error) {
          console.log("Error getting documents: ", error);
      };
    }
    fetchEvents();
  }, [])

  const _renderSectionTitle = section => {
    return (<View ></View>);
  };
     
  const _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Headline 
          title = {section.title}
          description = {section.content}>
        </Headline>
      </View>
    );
  };
     
  const _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>{section.description}</Text>
      </View>
    );
  };
     
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _setEvents = events => {
    setEvents(events);
  };

  return (
    <ScrollView >
      <Text>{strings.upcoming_events}</Text>
      <Accordion
        sections={events}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        expandMultiple={true}
        touchableComponent={TouchableOpacity}
      />

      <Text>{strings.past_events}</Text>
      <Accordion
        sections={events}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        expandMultiple={true}
        touchableComponent={TouchableOpacity}
      />
    </ScrollView>
  );    
}

const styles = StyleSheet.create({
    content: {
      justifyContent: 'center',
      paddingStart:20,
      paddingEnd:20,
    },
    header: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,
    },
  });

export default Events;