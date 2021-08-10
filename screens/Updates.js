import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {BasicTop,UpdateCard}  from "../components";
import {UpdatesIcon, AlertIcon} from "../assets";
import * as Strings from "../strings";
import * as constants from "../constants";
import store from "../redux/store";

const Updates = (props) => {
  
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = (section) => {
    return (
      <UpdateCard
        date={section.date}
        title={section.title}
        icon={<AlertIcon></AlertIcon>}
        text={section.content}
      />
    );
  };

  const _renderContent = (section) => {
    return <View></View>;
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.base}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(constants.screen_main)}
      >
        <BasicTop
          title={Strings.menu_updates}
          icon={<UpdatesIcon></UpdatesIcon>}
        />
      </TouchableWithoutFeedback>

      <ScrollView style={styles.view_style}>
        {store.getState.updates && (
          <Accordion
            sections={store.getState.updates}
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
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
});

export default Updates;