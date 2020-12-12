import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class ContactUs extends React.Component { // liraz we are not using classes any more

// liraz use string file
    render() {
        return (
          <View style={styles.view_style}>

          <Text style={styles.text_style}>האפליקציה איננה אפליקציה רשמית של עיריית ראש העין, או כל גורם רשמי אחר.</Text>
          <Text style={styles.text_style}>פיתוח האפליקציה נעשה על ידי תושבי השכונה בהתנדבות ובאהבה.</Text>
          <Text style={styles.text_style}>לכל הצעה, תלונה, רעיון לשיפור והתנדבות, ניתן לפנות במייל:</Text>
          <Text style={styles.text_style}>hadasicohen1@gmail.com</Text>


          </View>
        );
      }
}

const styles = StyleSheet.create({
  text_style: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    fontSize:18,

  },
  view_style: { //liraz hebrew text align right
    flex: 1,
    margin: 30,
  },
});