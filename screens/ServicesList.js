import React,  { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../firebase/config';
import BasicTop from '../components/BasicTop';
import ServiceCard from '../components/ServiceCard';
import * as constants from '../constants';

const ServicesList = (props) => {

  const category = props.route.params.category
  const listIcon = props.route.params.listIcon
  const titleIcon = props.route.params.titleIcon
  const professionalsCollection = firebase.firestore().collection('professionals');
  const [professionals,setProfessionals] = useState([])
  const [activeSections, setActiveSections] = useState([])
  var newProfessionals = []

  useEffect(() => {
    const fetchProfessionals = async () => {
      try{
        const querySnapshot = await professionalsCollection.where('category', '==', category).get()
        querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
              newProfessionals = ( [...newProfessionals,doc.data()]);
        });
        _setProfessionals(newProfessionals)
      }
      catch(error) {
          console.log("Error getting documents: ", error);
      };
    }
    fetchProfessionals();
  }, [])

  const _renderSectionTitle = section => {
    return (<View ></View>);
  };
      
  const _renderHeader = section => {
    return (
      <View style={styles.header}>
        <ServiceCard 
          title = {section.title}
          text = {section.content}
          icon = {listIcon}/>
      </View>
    );
  };
      
  const _renderContent = section => {
    return (<View style={styles.header}>
      <ServiceCard 
        text = {section.description}/>
    </View>);
  };
      
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _setProfessionals = professionals => {
    setProfessionals(professionals);
  };
        
  return (
  <View style={styles.base}>

    <TouchableWithoutFeedback onPress= {()=>props.navigation.navigate(constants.screen_main)}>
      <BasicTop 
        title={category}
        icon ={titleIcon}/>
    </TouchableWithoutFeedback>

    <ScrollView style={styles.view_style}>{ professionals &&
      <Accordion
        sections={professionals}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        expandMultiple={true}
        sectionContainerStyle={styles.section_style}
        touchableComponent={TouchableOpacity}
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
  },

});

export default ServicesList;