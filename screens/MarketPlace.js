import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { firebase } from "../firebase/config";
import BasicTop from "../components/BasicTop";
import UpdatesIcon from "../assets/updates_icon.svg";
import AlertIcon from "../assets/alert_icon.svg";
import * as Strings from "../strings";
import UpdateCard from "../components/UpdateCard";
import * as constants from "../constants";

const MarketPlace = (props) => {
  const marketCollection = firebase.firestore().collection("market");
  const [market, setMarket] = useState([]);
  const [activeSections, setActiveSections] = useState([]);
  var newMarket = [];

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const querySnapshot = await marketCollection.get();
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          newMarket = [...newMarket, doc.data()];
        });
        _setMarket(newMarket);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchMarket();
  }, []);

  const _renderHeader = (section) => {
    return (
      <UpdateCard
        date={section.date}
        title={section.title}
        icon={<AlertIcon></AlertIcon>}
        text={section.description}
      />
    );
  };

  const _renderContent = (section) => {
    return <View></View>;
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  const _setMarket = (market) => {
    setMarket(market);
  };

  return (
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(constants.screen_main)}
      >
        <BasicTop
          title={Strings.main_giveaway_title}
          icon={<UpdatesIcon></UpdatesIcon>}
        />
      </TouchableWithoutFeedback>

      <ScrollView style={styles.view_style}>
        {market && (
          <Accordion
            sections={market}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            sectionContainerStyle={styles.section_style}
            onChange={_updateSections}
            expandMultiple={true}
            touchableComponent={TouchableWithoutFeedback}
          />
        )}
      </ScrollView>
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

  icon: {
    width: 10,
    height: 10,
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

export default MarketPlace;
