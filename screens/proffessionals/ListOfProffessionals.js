import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Headline from '../../components/Headeline';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SECTIONS = [ // liraz should not be under screens folder, do not mix data with ui
    {
      title: 'שם טוב לוי הגנן',
      content: 'מבצע את כל עבודות הגינון בביתך',
      description: 'טיפולים לקראת החורף גיזומי חורף, דישונים לקראת האביב, דשא סיננטי, עבודות עץ, טיפולים ראשוניים, הכל במקצועיות ואמינות גבוהה',
    },
    {
      title: 'יוספה הקוסמטיקאית',
      content: 'קוסמטיקאית עד פתח הבית',
      description: 'קוסמטיקאית רפואית מומחית עור הפנים ובעלת תואר DMA מעל 8 שנים בתחום הקוסמטיקה',
    },
    {
        title: 'ילדות נהדרת',
        content: 'משפחתון חדש נפתח בראש העין',
        description: 'משפחתון הוא מסגרת אלטרנטיבית לילדים המדמה משפחה גרעינית. ישנם שני סוגי משפחתונים',
      },
      {
        title: 'התימניה החמה',
        content: 'אוכל ביתי תימני חם וטרי',
        description: 'בערוץ אוכל טוב של mako תמצאו מאגר מתכונים מעולים לארוחות מיוחדות, סלטים, פשטידות, קינוחים ועוד',
      },
      {
        title: 'הצלם המחונן',
        content: 'לצילומי חתונה בלתי נשכחים',
        description: 'בראשית צילום ישראל פרסי מתמחה בצילום אירועים וחתונות. אצלנו כל לקוח זוכה למלוא תשומת הלב',
      },
      {
        title: 'שם בעל העסק השישי',
        content: 'תוכן העסק השישי',
        description:'תיאור נרחב'
      },
      {
        title: 'שם טוב לוי הגנן',
        content: 'מבצע את כל עבודות הגינון בביתך',
        description: 'טיפולים לקראת החורף גיזומי חורף, דישונים לקראת האביב, דשא סיננטי, עבודות עץ, טיפולים ראשוניים, הכל במקצועיות ואמינות גבוהה',
      },
      {
        title: 'יוספה הקוסמטיקאית',
        content: 'קוסמטיקאית עד פתח הבית',
        description: 'קוסמטיקאית רפואית מומחית עור הפנים ובעלת תואר DMA מעל 8 שנים בתחום הקוסמטיקה',
      },
      {
          title: 'ילדות נהדרת',
          content: 'משפחתון חדש נפתח בראש העין',
          description: 'משפחתון הוא מסגרת אלטרנטיבית לילדים המדמה משפחה גרעינית. ישנם שני סוגי משפחתונים',
        },
        {
          title: 'התימניה החמה',
          content: 'אוכל ביתי תימני חם וטרי',
          description: 'בערוץ אוכל טוב של mako תמצאו מאגר מתכונים מעולים לארוחות מיוחדות, סלטים, פשטידות, קינוחים ועוד',
        },
        {
          title: 'הצלם המחונן',
          content: 'לצילומי חתונה בלתי נשכחים',
          description: 'בראשית צילום ישראל פרסי מתמחה בצילום אירועים וחתונות. אצלנו כל לקוח זוכה למלוא תשומת הלב',
        },
        {
          title: 'שם בעל העסק השישי',
          content: 'תוכן העסק השישי',
          description:'תיאור נרחב'
        },
  ];

export default class ListOfProffessionals extends React.Component {

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
      paddingStart:20,
      paddingEnd:20,
    },
    header: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,

    },
  });