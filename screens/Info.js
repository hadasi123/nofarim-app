import React from 'react';
import { Text,View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as strings from '../strings'
import BasicTop from '../components/BasicTop';
import UpdatesIcon from '../assets/updates_icon.svg';
import Colors from '../design';

const Info = (props) => {

   return (
    <View style={styles.base}>

      <TouchableWithoutFeedback onPress= {()=>props.navigation.navigate(constants.screen_main)}>
        <BasicTop 
          title={strings.main_residents_info}
          icon ={<UpdatesIcon></UpdatesIcon>}/>
      </TouchableWithoutFeedback>

      <ScrollView style={styles.view_style}>
        <Text style={styles.text_style}>{strings.residents_info_content}</Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex:1,
    backgroundColor:Colors.dark_purple,
  },
  text_style: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    fontSize:18,
    fontFamily: 'Assistant-Regular',
    color: Colors.white,
  },
  view_style: {
    flex: 1,
    margin: 30,
    flexDirection:'column',

  },
});

export default Info;