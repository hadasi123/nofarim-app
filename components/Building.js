import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../design/colors";

const Building = (props)=> {

    return (
    <TouchableOpacity style={styles.base_style} onPress={props.onPress}>
        <Image style={{height:55, width:55}}source={require('../assets/building.png')} />
        <Text style = {styles.text }>{props.number}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base_style: {
      backgroundColor: Colors.dark_purple,
      alignItems:"center",
      paddingHorizontal:5,
    },
    
    text: {
        textAlign:"center",
        color: Colors.white,
        fontSize: 20,
        fontFamily: "Assistant-Regular",
    }
  });

export default Building;