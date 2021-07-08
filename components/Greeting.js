import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as strings from "../strings";
import Colors from "../design/colors";

const Greeting = ()=> {

    const [currentGreeting, setCurrentGreeting] = useState(strings.default_greeting)

    useEffect(()=> {
        updateGreeting();
    },[]);

    const updateGreeting = async () => {
    
        let hours = new Date().getHours();
        console.log("HOURS: "+hours)

        if (hours > 5 && hours < 12)
            setCurrentGreeting(strings.morning_greeting);
        else if (hours >= 12 && hours <= 16)
            setCurrentGreeting(strings.noon_greeting);
        else if (hours > 16 && hours < 18)
            setCurrentGreeting(strings.afternoon_greeting);
        else if (hours >= 18 && hours <= 22)
            setCurrentGreeting(strings.evening_greeting);
        else
            setCurrentGreeting(strings.night_greeting);
    };

    return (
    <View style={styles.base_style}>
        <Text style = {styles.title }>{currentGreeting}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    base_style: {
      backgroundColor: Colors.dark_purple,
      paddingHorizontal: 20,
    },
    
    title: {
        textAlign:"right",
        color: Colors.white,
        fontSize: 20,
        fontFamily: "Assistant-Bold",
    }
  });

export default Greeting;