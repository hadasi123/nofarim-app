import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

class Splash extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
            <Text>שכונת נופרים</Text>
            <Image style={styles.image} source={require('../assets/colourful-city.jpg')} />
            <StatusBar style='auto' />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor:'#31ADE9',
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'column',
    },
    image: {
    width:400,
    height:300,
    },
    text: {
      color:'#fff',
      fontSize:30
    }
  });

export default Splash;