import React, { useEffect } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import {HomeSectionHeader, ServicesItemsGrid, UpdateCard} from "../components";
import * as constants from "../constants";
import * as strings from "../strings";
import Colors from "../design/colors";
import {ProfileIcon, AlertIcon} from "../assets";

const Main = (props) => {

  useEffect(()=> {
    changeNavigationBarColor(Colors.black);
  },[]);

  return (
    <View style={styles.base_style}>
      <View style={styles.header}>
        <ProfileIcon
          onPress={() =>
            props.navigation.navigate(constants.screen_add_service)
          }
        ></ProfileIcon>
        <Text style={styles.title_style}>{strings.main_title}</Text>
      </View>

      <ScrollView style={styles.content_style}>
        <View style={styles.section_style}>
          <HomeSectionHeader
            add={true}
            title={strings.main_services_title}
            onPress={() => props.navigation.navigate(constants.screen_add_service)}
          />
          <ServicesItemsGrid navigation={props.navigation}></ServicesItemsGrid>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_updates_title}
            onPress={() => props.navigation.navigate(constants.screen_updates)}
          />
          <View style={styles.card_style}>
            <UpdateCard
              title={strings.main_updates_subtitle}
              icon={<AlertIcon></AlertIcon>}
              date="8/8/2020"
              text=" וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי וואי וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי"
            />
          </View>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_giveaway_title}
            onPress={() =>
              props.navigation.navigate(constants.screen_giveaways)
            }
          />
          <View style={styles.card_style}>
            <UpdateCard
              title="כסא בר למכירה"
              icon={<AlertIcon></AlertIcon>}
              date="8/8/2020"
              text=" וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי וואי וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי"
            />
          </View>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_lost_and_founds}
            onPress={() =>
              props.navigation.navigate(constants.screen_lost_and_founds)
            }
          />
          <View style={styles.card_style}>
            <UpdateCard
              title="אבד כלב בשם טוי"
              icon={<AlertIcon></AlertIcon>}
              date="8/8/2020"
              text=" וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי וואי וואי וואי, שמש זורחת מעליי ליי ליי כמו דג במים אני חי חי חי, לפי הקצב של המטקות אני זז ולא חושב יותר מידי"
            />
          </View>
        </View>

        <View style={styles.bottom_section_style}>
          <Text
            style={styles.bottom_text_style}
            onPress={() => props.navigation.navigate(constants.screen_privacy)}
          >
            {strings.main_privacy_policy}
          </Text>
          <View style={styles.seperator}></View>
          <Text
            style={styles.bottom_text_style}
            onPress={() => props.navigation.navigate(constants.screen_info)}
          >
            {strings.main_residents_info}{" "}
          </Text>
          <View style={styles.seperator}></View>
          <Text
            style={styles.bottom_text_style}
            onPress={() => props.navigation.navigate(constants.screen_about)}
          >
            {strings.main_about_us}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  base_style: {
    flex: 1,
    backgroundColor: Colors.dark_purple,
  },
  header: {
    flexDirection: "row-reverse",
    marginBottom: 24,
    alignItems: "center",
  },
  title_style: {
    fontSize: 30,
    fontFamily: "Assistant-Bold",
    color: Colors.white,
    marginRight: 10,
  },
  content_style: {
    flex: 1,
    flexDirection: "column",
  },
  section_style: {
    backgroundColor: Colors.light_purple,
    flexDirection: "column",
    marginBottom: 16,
  },
  card_style: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 0,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  bottom_section_style: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  bottom_text_style: {
    fontFamily: "Assistant-Bold",
    color: Colors.white,
    fontSize: 12,
  },
  seperator: {
    borderLeftColor: Colors.white,
    borderLeftWidth: 1,
    marginHorizontal: 10,
  },
});

export default Main;