import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { firebase } from "../firebase/config";
import {BasicTop,CommonCardView} from "../components";
import * as constants from "../constants";

const ServicesList = (props) => {
  const category = props.route.params.category;
  const listIcon = props.route.params.listIcon;
  const titleIcon = props.route.params.titleIcon;
  const professionalsCollection = firebase
    .firestore()
    .collection("professionals");
  const [professionals, setProfessionals] = useState([]);
 
  var newProfessionals = [];

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const querySnapshot = await professionalsCollection
          .where("category", "==", category)
          .get();
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          newProfessionals = [...newProfessionals, doc.data()];
        });
        setProfessionals(newProfessionals);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchProfessionals();
  }, []);

  
  return (
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(constants.screen_main)}>
        <BasicTop title={category} icon={titleIcon} />
      </TouchableWithoutFeedback>

      {professionals && (
        <ScrollView style={styles.view_style}>
        
          {professionals.map(({title, description, phone, website, facebook, whatsappEnabled}) => {
            return (
              <View style={styles.section_style}>
              <CommonCardView
              navigation={props.navigation}
              title={title}
              icon={listIcon}
              description={description}
              phone={phone}
              website={website}
              facebook={facebook}
              whatsappEnabled={whatsappEnabled}>
              </CommonCardView>
              </View>
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.dark_purple,
  },
  view_style: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.dark_purple,
    marginTop: 36,
  },
  section_style: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 0,
    marginEnd: 20,
    marginStart: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
});

export default ServicesList;