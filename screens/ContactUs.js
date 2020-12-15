import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as strings from '../strings'

const ContactUs = () => {

   return (
    <View style={styles.view_style}>
      <Text style={styles.text_style}>{strings.contact_us_content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text_style: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    fontSize:18,

  },
  view_style: {
    flex: 1,
    margin: 30,
  },
});

export default ContactUs;