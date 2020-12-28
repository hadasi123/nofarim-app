import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Headline from '../components/Headeline';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as strings from '../strings';
import firestore from '@react-native-firebase/firestore';

const Events = () => {

  const eventsCollection = firestore().collection('events');
  const [events, setEvents] = useState([])
  const [activeSections, setActiveSections] = useState([])
  var newEvents = []

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await eventsCollection.get()
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          newEvents = ([...newEvents, doc.data()]);
        });
        _setEvents(newEvents)
      }
      catch (error) {
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
          title={section.title}
          description={section.content}>
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
      {events.length > 0 ? <Accordion
        sections={events}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        expandMultiple={true}
        touchableComponent={TouchableOpacity}
        /> : <View style={styles.loader}><ActivityIndicator size={'large'} color={'#0000ff'} /></View>}

      <Text>{strings.past_events}</Text>
      {events.length > 0 ? <Accordion
        sections={events}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        expandMultiple={true}
        touchableComponent={TouchableOpacity}
      /> : <View style={styles.loader}><ActivityIndicator size={'large'} color={'#0000ff'} /></View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  header: {
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
  },
  loader: {
    width: Dimensions.get('window').width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Events;