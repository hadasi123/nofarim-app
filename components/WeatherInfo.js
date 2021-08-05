import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as strings from "../strings";
import Colors from "../design/colors";
import {SunnyIcon} from "../assets";
import axios from 'axios';
import {weather_url} from "../constants";
import colors from "../design/colors";

const WeatherInfo = ()=> {

    const [currentTemp, setCurrentTemp] = useState(strings.temp_loading)
    const [weather, setWeather] = useState(strings.weather_description_loading)

    useEffect(()=> {
        
        let weatherUpdateInterval = setInterval(
            () => getWeather() , 60000);

        getWeather();

        return () => {
            clearInterval(weatherUpdateInterval)
        }
    },[]);

    const getWeather = async () => {
        try {
            const response = await axios.get(weather_url);
            if (response.data) {
                setCurrentTemp(Math.floor(response.data.main.temp)+"°");
                setWeather(response.data.weather[0].description);
            } else {
              console.log('Unable to get weather data');
            }
        } catch (error) {
          console.log(error);
        }
    };

    return (
    <View style={styles.base_style}>
         <SunnyIcon></SunnyIcon>
         <View style = {{flexDirection: "column", paddingRight:8}}>
            <Text style = {styles.title }>{currentTemp}</Text>
            <Text style = {styles.subtitle }>{weather}</Text>
         </View>
    </View>
    );
}

const styles = StyleSheet.create({
    base_style: {
      flexDirection: "row-reverse",
      alignItems: "flex-end",
      backgroundColor: Colors.dark_purple,
      padding: 20,
    },
    icon: {
      width:10,
      height:10,
    },
    title: {
        textAlign:"right",
        color: colors.white,
        fontSize: 20,
        fontFamily: "Assistant-Bold",
    },
    subtitle: {
        textAlign:"right",
        color: colors.white,
        fontSize: 15,
        fontFamily: "Assistant-Regular",
    }
  });

export default WeatherInfo;