import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SECTIONS = [
    {
      date: '1/11/2020',
      content:'החלו עבודות תשתית ברחבי השכונה,חלו עבודות תשתית ברחבי השכונה,חלו עבודות תשתית ברחבי השכונה,חלו עבודות תשתית ברחבי השכונה'
    },
    {
      date: '1/10/2020',
      content:',חלו עבודות תשתית ברחבי השכונה,חלו עבודות תשתית ברחבי השכונה,חלו עבודות תשתית ברחבי השכונההחלו עבודות תשתית ברחבי השכונה'
    },
  ];

export default class Updates extends React.Component {

    state = {
        activeSections: [],
      };
     
      _renderSectionTitle = section => {
        return (
          <View >
          </View>
        );
      };
     
      _renderHeader = section => {
        return (
            <View style={styles.header}>
              <Text> {section.date} </Text> 
          </View>
        );
      };
     
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text style={styles.headerText}>{section.content}</Text>
          </View>
        );
      };
     
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

      render() {
        return (
          <ScrollView >
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            expandMultiple={true}
            touchableComponent={TouchableOpacity}
          />
          </ScrollView>
        );
      }
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