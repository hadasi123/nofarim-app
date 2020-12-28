import React,  { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Headline from '../../components/Headeline';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListOfProfessionals = () => {

  const professionalsCollection = firestore().collection('professionals');
  const [professionals,setProfessionals] = useState([])
  const [activeSections, setActiveSections] = useState([])
  var newProfessionals = []

  useEffect(() => {
    const fetchProfessionals = async () => {
      try{
        const querySnapshot = await professionalsCollection.get()
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

  const _setProfessionals = professionals => {
    setProfessionals(professionals);
  };
        
  return (
    <ScrollView >{ professionals &&
    <Accordion
      sections={professionals}
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
      paddingStart:20,
      paddingEnd:20,
    },
    header: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,

    },
  });

export default ListOfProfessionals;