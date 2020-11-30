import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Headline from '../components/Headeline';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COMING_EVENTS = [
    {
      date:'1/12/2020',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
    },
    {
      date:'1/11/2020',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
    },
    {
      date:'1/10/2020',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
      },
      {
        date:'1/1/2020',
        title: 'אירועי נטיעות לכבוד טו בשבט',
        content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
      },
      
  ];

  const PAST_EVENTS = [
    {
      date:'1/12/2019',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
    },
    {
      date:'1/11/2019',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
    },
    {
      date:'1/10/2019',
      title: 'אירועי נטיעות לכבוד טו בשבט',
      content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
      },
      {
        date:'1/1/2019',
        title: 'אירועי נטיעות לכבוד טו בשבט',
        content: 'הנכם מוזמנים לאירוע נטיעות המוני ברחבי השכונה, שתילים יפוזרו בשטחים המשותפים',
      },
      
  ];

export default class Events extends React.Component {

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
            <Headline 
                title = {section.title}
                description = {section.content}>
            </Headline>
          </View>
        );
      };
     
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text style={styles.headerText}>{section.description}</Text>
          </View>
        );
      };
     
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

      render() {
        return (
          <ScrollView >
          <Text>אירועים קרובים</Text>
          <Accordion
            sections={COMING_EVENTS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            expandMultiple={true}
            touchableComponent={TouchableOpacity}
          />

          <Text>אירועי עבר</Text>
          <Accordion
            sections={PAST_EVENTS}
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
      paddingStart:20,
      paddingEnd:20,
    },
    header: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,

    },
  });