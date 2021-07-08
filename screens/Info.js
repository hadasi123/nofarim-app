import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";
import * as strings from "../strings";
import BasicTop from "../components/BasicTop";
import UpdatesIcon from "../assets/updates_icon.svg";
import Colors from "../design/colors";
import * as constants from "../constants";
import {Building} from "../components";

const Info = (props) => {
  return (
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(constants.screen_main)}
      >
        <BasicTop
          title={strings.main_residents_info}
          icon={<UpdatesIcon></UpdatesIcon>}
        />
      </TouchableWithoutFeedback>


      <ScrollView style={styles.view_style}>
      <Text style={styles.title}>{strings.choose_building}</Text>
      <Text style={styles.subtitle}>{strings.nahshol}</Text>
      <ScrollView horizontal={true} style={{marginBottom:16}}>
        <Text style={styles.subtitle}>&gt;</Text>
        <Building number={2}></Building>
        <Building number={4}></Building>
        <Building number={6}></Building>
        <Building number={8}></Building>
        <Building number={10}></Building>
        <Building number={12}></Building>
        <Building number={14}></Building>
        <Building number={16}></Building>
        <Building number={18}></Building>
        <Text style={styles.subtitle} >&gt;</Text>
      </ScrollView>

      <Text style={styles.subtitle}>{strings.maayan}</Text>

      <ScrollView horizontal={true} style={{marginBottom:16}}>
        <Text style={styles.subtitle}>&gt;</Text>
        <Building number={1}></Building>
        <Building number={3}></Building>
        <Building number={5}></Building>
        <Building number={7}></Building>
        <Building number={9}></Building>
        <Building number={11}></Building>
        <Building number={13}></Building>
        <Building number={15}></Building>
        <Building number={17}></Building>
        <Text style={styles.subtitle} >&gt;</Text>
      </ScrollView>

      <Text style={styles.subtitle}>{strings.ovadia}</Text>

      <Building number={1}></Building>

      <Text style={styles.title}>{strings.more_about_title}</Text>
      <TouchableOpacity style = {styles.about_card}>
        <Text style={styles.about_text}>{strings.monicipal_education_facilities}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.about_card}>
        <Text style={styles.about_text}>{strings.monicipal_religion_facilities}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.about_card}>
        <Text style={styles.about_text}>{strings.public_transportation_info}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.about_card}>
        <Text style={styles.about_text}>{strings.sport_and_colture}</Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.dark_purple,
  },
  title: {
    fontSize: 22,
    fontFamily: "Assistant-Bold",
    color: Colors.white,
    marginTop: 20,

  },
  subtitle: {
    marginBottom: 10,
    fontSize: 20,
    fontFamily: "Assistant-Regular",
    color: Colors.white,
  },
  view_style: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 25,
    flexDirection: "column",
  },
  about_card: {
    backgroundColor: Colors.white,
    borderRadius:5,
    flex:1,
    padding:10,
    marginVertical:5
  },
  about_text: {
    fontSize: 20,
    fontFamily: "Assistant-Regular",
    color: Colors.black,
  }
});

export default Info;
